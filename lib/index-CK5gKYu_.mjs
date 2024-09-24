import { o as P, q as Ye, d as Z, cq as Ze, ap as it } from "./index-DV1w5RNX.mjs";
var Je = {}, Qe = { exports: {} }, je = {};
(function(o) {
  o.fetch = n(P.fetch) && n(P.ReadableStream), o.writableStream = n(P.WritableStream), o.abortController = n(P.AbortController);
  var r;
  function h() {
    if (r !== void 0)
      return r;
    if (P.XMLHttpRequest) {
      r = new P.XMLHttpRequest();
      try {
        r.open("GET", P.XDomainRequest ? "/" : "https://example.com");
      } catch {
        r = null;
      }
    } else
      r = null;
    return r;
  }
  function f(g) {
    var u = h();
    if (!u)
      return !1;
    try {
      return u.responseType = g, u.responseType === g;
    } catch {
    }
    return !1;
  }
  o.arraybuffer = o.fetch || f("arraybuffer"), o.msstream = !o.fetch && f("ms-stream"), o.mozchunkedarraybuffer = !o.fetch && f("moz-chunked-arraybuffer"), o.overrideMimeType = o.fetch || (h() ? n(h().overrideMimeType) : !1);
  function n(g) {
    return typeof g == "function";
  }
  r = null;
})(je);
var xe = {}, Ke = je, ft = Ye(), et = Ze, Ae = xe.readyStates = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
}, $e = xe.IncomingMessage = function(o, r, h, f) {
  var n = this;
  if (et.Readable.call(n), n._mode = h, n.headers = {}, n.rawHeaders = [], n.trailers = {}, n.rawTrailers = [], n.on("end", function() {
    Z.process.nextTick(function() {
      n.emit("close");
    });
  }), h === "fetch") {
    let C = function() {
      u.read().then(function(m) {
        if (!n._destroyed) {
          if (f(m.done), m.done) {
            n.push(null);
            return;
          }
          n.push(Z.Buffer.from(m.value)), C();
        }
      }).catch(function(m) {
        f(!0), n._destroyed || n.emit("error", m);
      });
    };
    if (n._fetchResponse = r, n.url = r.url, n.statusCode = r.status, n.statusMessage = r.statusText, r.headers.forEach(function(m, A) {
      n.headers[A.toLowerCase()] = m, n.rawHeaders.push(A, m);
    }), Ke.writableStream) {
      var g = new WritableStream({
        write: function(m) {
          return f(!1), new Promise(function(A, te) {
            n._destroyed ? te() : n.push(Z.Buffer.from(m)) ? A() : n._resumeFetch = A;
          });
        },
        close: function() {
          f(!0), n._destroyed || n.push(null);
        },
        abort: function(m) {
          f(!0), n._destroyed || n.emit("error", m);
        }
      });
      try {
        r.body.pipeTo(g).catch(function(m) {
          f(!0), n._destroyed || n.emit("error", m);
        });
        return;
      } catch {
      }
    }
    var u = r.body.getReader();
    C();
  } else {
    n._xhr = o, n._pos = 0, n.url = o.responseURL, n.statusCode = o.status, n.statusMessage = o.statusText;
    var a = o.getAllResponseHeaders().split(/\r?\n/);
    if (a.forEach(function(C) {
      var m = C.match(/^([^:]+):\s*(.*)/);
      if (m) {
        var A = m[1].toLowerCase();
        A === "set-cookie" ? (n.headers[A] === void 0 && (n.headers[A] = []), n.headers[A].push(m[2])) : n.headers[A] !== void 0 ? n.headers[A] += ", " + m[2] : n.headers[A] = m[2], n.rawHeaders.push(m[1], m[2]);
      }
    }), n._charset = "x-user-defined", !Ke.overrideMimeType) {
      var v = n.rawHeaders["mime-type"];
      if (v) {
        var T = v.match(/;\s*charset=([^;])(;|$)/);
        T && (n._charset = T[1].toLowerCase());
      }
      n._charset || (n._charset = "utf-8");
    }
  }
};
ft($e, et.Readable);
$e.prototype._read = function() {
  var o = this, r = o._resumeFetch;
  r && (o._resumeFetch = null, r());
};
$e.prototype._onXHRProgress = function(o) {
  var r = this, h = r._xhr, f = null;
  switch (r._mode) {
    case "text":
      if (f = h.responseText, f.length > r._pos) {
        var n = f.substr(r._pos);
        if (r._charset === "x-user-defined") {
          for (var g = Z.Buffer.alloc(n.length), u = 0; u < n.length; u++)
            g[u] = n.charCodeAt(u) & 255;
          r.push(g);
        } else
          r.push(n, r._charset);
        r._pos = f.length;
      }
      break;
    case "arraybuffer":
      if (h.readyState !== Ae.DONE || !h.response)
        break;
      f = h.response, r.push(Z.Buffer.from(new Uint8Array(f)));
      break;
    case "moz-chunked-arraybuffer":
      if (f = h.response, h.readyState !== Ae.LOADING || !f)
        break;
      r.push(Z.Buffer.from(new Uint8Array(f)));
      break;
    case "ms-stream":
      if (f = h.response, h.readyState !== Ae.LOADING)
        break;
      var a = new P.MSStreamReader();
      a.onprogress = function() {
        a.result.byteLength > r._pos && (r.push(Z.Buffer.from(new Uint8Array(a.result.slice(r._pos)))), r._pos = a.result.byteLength);
      }, a.onload = function() {
        o(!0), r.push(null);
      }, a.readAsArrayBuffer(f);
      break;
  }
  r._xhr.readyState === Ae.DONE && r._mode !== "ms-stream" && (o(!0), r.push(null));
};
var he = je, ht = Ye(), tt = xe, ke = Ze, ut = tt.IncomingMessage, Ve = tt.readyStates;
function ct(o, r) {
  return he.fetch && r ? "fetch" : he.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : he.msstream ? "ms-stream" : he.arraybuffer && o ? "arraybuffer" : "text";
}
var I = Qe.exports = function(o) {
  var r = this;
  ke.Writable.call(r), r._opts = o, r._body = [], r._headers = {}, o.auth && r.setHeader("Authorization", "Basic " + Z.Buffer.from(o.auth).toString("base64")), Object.keys(o.headers).forEach(function(n) {
    r.setHeader(n, o.headers[n]);
  });
  var h, f = !0;
  if (o.mode === "disable-fetch" || "requestTimeout" in o && !he.abortController)
    f = !1, h = !0;
  else if (o.mode === "prefer-streaming")
    h = !1;
  else if (o.mode === "allow-wrong-content-type")
    h = !he.overrideMimeType;
  else if (!o.mode || o.mode === "default" || o.mode === "prefer-fast")
    h = !0;
  else
    throw new Error("Invalid value for opts.mode");
  r._mode = ct(h, f), r._fetchTimer = null, r._socketTimeout = null, r._socketTimer = null, r.on("finish", function() {
    r._onFinish();
  });
};
ht(I, ke.Writable);
I.prototype.setHeader = function(o, r) {
  var h = this, f = o.toLowerCase();
  pt.indexOf(f) === -1 && (h._headers[f] = {
    name: o,
    value: r
  });
};
I.prototype.getHeader = function(o) {
  var r = this._headers[o.toLowerCase()];
  return r ? r.value : null;
};
I.prototype.removeHeader = function(o) {
  var r = this;
  delete r._headers[o.toLowerCase()];
};
I.prototype._onFinish = function() {
  var o = this;
  if (!o._destroyed) {
    var r = o._opts;
    "timeout" in r && r.timeout !== 0 && o.setTimeout(r.timeout);
    var h = o._headers, f = null;
    r.method !== "GET" && r.method !== "HEAD" && (f = new Blob(o._body, {
      type: (h["content-type"] || {}).value || ""
    }));
    var n = [];
    if (Object.keys(h).forEach(function(v) {
      var T = h[v].name, C = h[v].value;
      Array.isArray(C) ? C.forEach(function(m) {
        n.push([T, m]);
      }) : n.push([T, C]);
    }), o._mode === "fetch") {
      var g = null;
      if (he.abortController) {
        var u = new AbortController();
        g = u.signal, o._fetchAbortController = u, "requestTimeout" in r && r.requestTimeout !== 0 && (o._fetchTimer = P.setTimeout(function() {
          o.emit("requestTimeout"), o._fetchAbortController && o._fetchAbortController.abort();
        }, r.requestTimeout));
      }
      P.fetch(o._opts.url, {
        method: o._opts.method,
        headers: n,
        body: f || void 0,
        mode: "cors",
        credentials: r.withCredentials ? "include" : "same-origin",
        signal: g
      }).then(function(v) {
        o._fetchResponse = v, o._resetTimers(!1), o._connect();
      }, function(v) {
        o._resetTimers(!0), o._destroyed || o.emit("error", v);
      });
    } else {
      var a = o._xhr = new P.XMLHttpRequest();
      try {
        a.open(o._opts.method, o._opts.url, !0);
      } catch (v) {
        Z.process.nextTick(function() {
          o.emit("error", v);
        });
        return;
      }
      "responseType" in a && (a.responseType = o._mode), "withCredentials" in a && (a.withCredentials = !!r.withCredentials), o._mode === "text" && "overrideMimeType" in a && a.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in r && (a.timeout = r.requestTimeout, a.ontimeout = function() {
        o.emit("requestTimeout");
      }), n.forEach(function(v) {
        a.setRequestHeader(v[0], v[1]);
      }), o._response = null, a.onreadystatechange = function() {
        switch (a.readyState) {
          case Ve.LOADING:
          case Ve.DONE:
            o._onXHRProgress();
            break;
        }
      }, o._mode === "moz-chunked-arraybuffer" && (a.onprogress = function() {
        o._onXHRProgress();
      }), a.onerror = function() {
        o._destroyed || (o._resetTimers(!0), o.emit("error", new Error("XHR error")));
      };
      try {
        a.send(f);
      } catch (v) {
        Z.process.nextTick(function() {
          o.emit("error", v);
        });
        return;
      }
    }
  }
};
function lt(o) {
  try {
    var r = o.status;
    return r !== null && r !== 0;
  } catch {
    return !1;
  }
}
I.prototype._onXHRProgress = function() {
  var o = this;
  o._resetTimers(!1), !(!lt(o._xhr) || o._destroyed) && (o._response || o._connect(), o._response._onXHRProgress(o._resetTimers.bind(o)));
};
I.prototype._connect = function() {
  var o = this;
  o._destroyed || (o._response = new ut(o._xhr, o._fetchResponse, o._mode, o._resetTimers.bind(o)), o._response.on("error", function(r) {
    o.emit("error", r);
  }), o.emit("response", o._response));
};
I.prototype._write = function(o, r, h) {
  var f = this;
  f._body.push(o), h();
};
I.prototype._resetTimers = function(o) {
  var r = this;
  P.clearTimeout(r._socketTimer), r._socketTimer = null, o ? (P.clearTimeout(r._fetchTimer), r._fetchTimer = null) : r._socketTimeout && (r._socketTimer = P.setTimeout(function() {
    r.emit("timeout");
  }, r._socketTimeout));
};
I.prototype.abort = I.prototype.destroy = function(o) {
  var r = this;
  r._destroyed = !0, r._resetTimers(!0), r._response && (r._response._destroyed = !0), r._xhr ? r._xhr.abort() : r._fetchAbortController && r._fetchAbortController.abort(), o && r.emit("error", o);
};
I.prototype.end = function(o, r, h) {
  var f = this;
  typeof o == "function" && (h = o, o = void 0), ke.Writable.prototype.end.call(f, o, r, h);
};
I.prototype.setTimeout = function(o, r) {
  var h = this;
  r && h.once("timeout", r), h._socketTimeout = o, h._resetTimers(!1);
};
I.prototype.flushHeaders = function() {
};
I.prototype.setNoDelay = function() {
};
I.prototype.setSocketKeepAlive = function() {
};
var pt = [
  "accept-charset",
  "accept-encoding",
  "access-control-request-headers",
  "access-control-request-method",
  "connection",
  "content-length",
  "cookie",
  "cookie2",
  "date",
  "dnt",
  "expect",
  "host",
  "keep-alive",
  "origin",
  "referer",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "via"
], dt = Qe.exports, mt = yt, vt = Object.prototype.hasOwnProperty;
function yt() {
  for (var o = {}, r = 0; r < arguments.length; r++) {
    var h = arguments[r];
    for (var f in h)
      vt.call(h, f) && (o[f] = h[f]);
  }
  return o;
}
var gt = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Unordered Collection",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
}, He = { exports: {} }, qe = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
qe.exports;
(function(o, r) {
  (function(h) {
    var f = r && !r.nodeType && r, n = o && !o.nodeType && o, g = typeof P == "object" && P;
    (g.global === g || g.window === g || g.self === g) && (h = g);
    var u, a = 2147483647, v = 36, T = 1, C = 26, m = 38, A = 700, te = 72, ae = 128, S = "-", Oe = /^xn--/, Ee = /[^\x20-\x7E]/, Ue = /[\x2E\u3002\uFF0E\uFF61]/g, Le = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, pe = v - T, M = Math.floor, re = String.fromCharCode, ie;
    function J(i) {
      throw new RangeError(Le[i]);
    }
    function de(i, p) {
      for (var y = i.length, b = []; y--; )
        b[y] = p(i[y]);
      return b;
    }
    function be(i, p) {
      var y = i.split("@"), b = "";
      y.length > 1 && (b = y[0] + "@", i = y[1]), i = i.replace(Ue, ".");
      var w = i.split("."), U = de(w, p).join(".");
      return b + U;
    }
    function Te(i) {
      for (var p = [], y = 0, b = i.length, w, U; y < b; )
        w = i.charCodeAt(y++), w >= 55296 && w <= 56319 && y < b ? (U = i.charCodeAt(y++), (U & 64512) == 56320 ? p.push(((w & 1023) << 10) + (U & 1023) + 65536) : (p.push(w), y--)) : p.push(w);
      return p;
    }
    function ue(i) {
      return de(i, function(p) {
        var y = "";
        return p > 65535 && (p -= 65536, y += re(p >>> 10 & 1023 | 55296), p = 56320 | p & 1023), y += re(p), y;
      }).join("");
    }
    function oe(i) {
      return i - 48 < 10 ? i - 22 : i - 65 < 26 ? i - 65 : i - 97 < 26 ? i - 97 : v;
    }
    function ce(i, p) {
      return i + 22 + 75 * (i < 26) - ((p != 0) << 5);
    }
    function ne(i, p, y) {
      var b = 0;
      for (i = y ? M(i / A) : i >> 1, i += M(i / p); i > pe * C >> 1; b += v)
        i = M(i / pe);
      return M(b + (pe + 1) * i / (i + m));
    }
    function we(i) {
      var p = [], y = i.length, b, w = 0, U = ae, q = te, R, N, B, G, L, H, k, W, Q;
      for (R = i.lastIndexOf(S), R < 0 && (R = 0), N = 0; N < R; ++N)
        i.charCodeAt(N) >= 128 && J("not-basic"), p.push(i.charCodeAt(N));
      for (B = R > 0 ? R + 1 : 0; B < y; ) {
        for (G = w, L = 1, H = v; B >= y && J("invalid-input"), k = oe(i.charCodeAt(B++)), (k >= v || k > M((a - w) / L)) && J("overflow"), w += k * L, W = H <= q ? T : H >= q + C ? C : H - q, !(k < W); H += v)
          Q = v - W, L > M(a / Q) && J("overflow"), L *= Q;
        b = p.length + 1, q = ne(w - G, b, G == 0), M(w / b) > a - U && J("overflow"), U += M(w / b), w %= b, p.splice(w++, 0, U);
      }
      return ue(p);
    }
    function Re(i) {
      var p, y, b, w, U, q, R, N, B, G, L, H = [], k, W, Q, me;
      for (i = Te(i), k = i.length, p = ae, y = 0, U = te, q = 0; q < k; ++q)
        L = i[q], L < 128 && H.push(re(L));
      for (b = w = H.length, w && H.push(S); b < k; ) {
        for (R = a, q = 0; q < k; ++q)
          L = i[q], L >= p && L < R && (R = L);
        for (W = b + 1, R - p > M((a - y) / W) && J("overflow"), y += (R - p) * W, p = R, q = 0; q < k; ++q)
          if (L = i[q], L < p && ++y > a && J("overflow"), L == p) {
            for (N = y, B = v; G = B <= U ? T : B >= U + C ? C : B - U, !(N < G); B += v)
              me = N - G, Q = v - G, H.push(
                re(ce(G + me % Q, 0))
              ), N = M(me / Q);
            H.push(re(ce(N, 0))), U = ne(y, W, b == w), y = 0, ++b;
          }
        ++y, ++p;
      }
      return H.join("");
    }
    function Pe(i) {
      return be(i, function(p) {
        return Oe.test(p) ? we(p.slice(4).toLowerCase()) : p;
      });
    }
    function Ie(i) {
      return be(i, function(p) {
        return Ee.test(p) ? "xn--" + Re(p) : p;
      });
    }
    if (u = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.4.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: Te,
        encode: ue
      },
      decode: we,
      encode: Re,
      toASCII: Ie,
      toUnicode: Pe
    }, f && n)
      if (o.exports == f)
        n.exports = u;
      else
        for (ie in u)
          u.hasOwnProperty(ie) && (f[ie] = u[ie]);
    else
      h.punycode = u;
  })(P);
})(qe, qe.exports);
var _t = qe.exports;
(function(o, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var h = _t, f = it;
  function n(e) {
    return e && typeof e == "object" && "default" in e ? e : { default: e };
  }
  var g = /* @__PURE__ */ n(h), u = /* @__PURE__ */ n(f), a = {
    isString: function(e) {
      return typeof e == "string";
    },
    isObject: function(e) {
      return typeof e == "object" && e !== null;
    },
    isNull: function(e) {
      return e === null;
    },
    isNullOrUndefined: function(e) {
      return e == null;
    }
  }, v = g.default, T = a, C = ne, m = Re, A = Pe, te = we, ae = S;
  function S() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  var Oe = /^([a-z0-9.+-]+:)/i, Ee = /:[0-9]*$/, Ue = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Le = ["<", ">", '"', "`", " ", "\r", `
`, "	"], pe = ["{", "}", "|", "\\", "^", "`"].concat(Le), M = ["'"].concat(pe), re = ["%", "/", "?", ";", "#"].concat(M), ie = ["/", "?", "#"], J = 255, de = /^[+a-z0-9A-Z_-]{0,63}$/, be = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Te = {
    javascript: !0,
    "javascript:": !0
  }, ue = {
    javascript: !0,
    "javascript:": !0
  }, oe = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  }, ce = u.default;
  function ne(e, s, t) {
    if (e && T.isObject(e) && e instanceof S)
      return e;
    var l = new S();
    return l.parse(e, s, t), l;
  }
  S.prototype.parse = function(e, s, t) {
    if (!T.isString(e))
      throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var l = e.indexOf("?"), _ = l !== -1 && l < e.indexOf("#") ? "?" : "#", D = e.split(_), j = /\\/g;
    D[0] = D[0].replace(j, "/"), e = D.join(_);
    var c = e;
    if (c = c.trim(), !t && e.split("#").length === 1) {
      var K = Ue.exec(c);
      if (K)
        return this.path = c, this.href = c, this.pathname = K[1], K[2] ? (this.search = K[2], s ? this.query = ce.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : s && (this.search = "", this.query = {}), this;
    }
    var x = Oe.exec(c);
    if (x) {
      x = x[0];
      var fe = x.toLowerCase();
      this.protocol = fe, c = c.substr(x.length);
    }
    if (t || x || c.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var ve = c.substr(0, 2) === "//";
      ve && !(x && ue[x]) && (c = c.substr(2), this.slashes = !0);
    }
    if (!ue[x] && (ve || x && !oe[x])) {
      for (var F = -1, O = 0; O < ie.length; O++) {
        var ee = c.indexOf(ie[O]);
        ee !== -1 && (F === -1 || ee < F) && (F = ee);
      }
      var ye, $;
      F === -1 ? $ = c.lastIndexOf("@") : $ = c.lastIndexOf("@", F), $ !== -1 && (ye = c.slice(0, $), c = c.slice($ + 1), this.auth = decodeURIComponent(ye)), F = -1;
      for (var O = 0; O < re.length; O++) {
        var ee = c.indexOf(re[O]);
        ee !== -1 && (F === -1 || ee < F) && (F = ee);
      }
      F === -1 && (F = c.length), this.host = c.slice(0, F), c = c.slice(F), this.parseHost(), this.hostname = this.hostname || "";
      var ge = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ge)
        for (var d = this.hostname.split(/\./), O = 0, E = d.length; O < E; O++) {
          var V = d[O];
          if (V && !V.match(de)) {
            for (var z = "", X = 0, Se = V.length; X < Se; X++)
              V.charCodeAt(X) > 127 ? z += "x" : z += V[X];
            if (!z.match(de)) {
              var se = d.slice(0, O), Y = d.slice(O + 1), le = V.match(be);
              le && (se.push(le[1]), Y.unshift(le[2])), Y.length && (c = "/" + Y.join(".") + c), this.hostname = se.join(".");
              break;
            }
          }
        }
      this.hostname.length > J ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), ge || (this.hostname = v.toASCII(this.hostname));
      var Fe = this.port ? ":" + this.port : "", st = this.hostname || "";
      this.host = st + Fe, this.href += this.host, ge && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), c[0] !== "/" && (c = "/" + c));
    }
    if (!Te[fe])
      for (var O = 0, E = M.length; O < E; O++) {
        var _e = M[O];
        if (c.indexOf(_e) !== -1) {
          var Me = encodeURIComponent(_e);
          Me === _e && (Me = escape(_e)), c = c.split(_e).join(Me);
        }
      }
    var Ne = c.indexOf("#");
    Ne !== -1 && (this.hash = c.substr(Ne), c = c.slice(0, Ne));
    var Ce = c.indexOf("?");
    if (Ce !== -1 ? (this.search = c.substr(Ce), this.query = c.substr(Ce + 1), s && (this.query = ce.parse(this.query)), c = c.slice(0, Ce)) : s && (this.search = "", this.query = {}), c && (this.pathname = c), oe[fe] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var Fe = this.pathname || "", at = this.search || "";
      this.path = Fe + at;
    }
    return this.href = this.format(), this;
  };
  function we(e) {
    return T.isString(e) && (e = ne(e)), e instanceof S ? e.format() : S.prototype.format.call(e);
  }
  S.prototype.format = function() {
    var e = this.auth || "";
    e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
    var s = this.protocol || "", t = this.pathname || "", l = this.hash || "", _ = !1, D = "";
    this.host ? _ = e + this.host : this.hostname && (_ = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (_ += ":" + this.port)), this.query && T.isObject(this.query) && Object.keys(this.query).length && (D = ce.stringify(this.query));
    var j = this.search || D && "?" + D || "";
    return s && s.substr(-1) !== ":" && (s += ":"), this.slashes || (!s || oe[s]) && _ !== !1 ? (_ = "//" + (_ || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : _ || (_ = ""), l && l.charAt(0) !== "#" && (l = "#" + l), j && j.charAt(0) !== "?" && (j = "?" + j), t = t.replace(/[?#]/g, function(c) {
      return encodeURIComponent(c);
    }), j = j.replace("#", "%23"), s + _ + t + j + l;
  };
  function Re(e, s) {
    return ne(e, !1, !0).resolve(s);
  }
  S.prototype.resolve = function(e) {
    return this.resolveObject(ne(e, !1, !0)).format();
  };
  function Pe(e, s) {
    return e ? ne(e, !1, !0).resolveObject(s) : s;
  }
  S.prototype.resolveObject = function(e) {
    if (T.isString(e)) {
      var s = new S();
      s.parse(e, !1, !0), e = s;
    }
    for (var t = new S(), l = Object.keys(this), _ = 0; _ < l.length; _++) {
      var D = l[_];
      t[D] = this[D];
    }
    if (t.hash = e.hash, e.href === "")
      return t.href = t.format(), t;
    if (e.slashes && !e.protocol) {
      for (var j = Object.keys(e), c = 0; c < j.length; c++) {
        var K = j[c];
        K !== "protocol" && (t[K] = e[K]);
      }
      return oe[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
    }
    if (e.protocol && e.protocol !== t.protocol) {
      if (!oe[e.protocol]) {
        for (var x = Object.keys(e), fe = 0; fe < x.length; fe++) {
          var ve = x[fe];
          t[ve] = e[ve];
        }
        return t.href = t.format(), t;
      }
      if (t.protocol = e.protocol, !e.host && !ue[e.protocol]) {
        for (var E = (e.pathname || "").split("/"); E.length && !(e.host = E.shift()); )
          ;
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), E[0] !== "" && E.unshift(""), E.length < 2 && E.unshift(""), t.pathname = E.join("/");
      } else
        t.pathname = e.pathname;
      if (t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, t.pathname || t.search) {
        var F = t.pathname || "", O = t.search || "";
        t.path = F + O;
      }
      return t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
    }
    var ee = t.pathname && t.pathname.charAt(0) === "/", ye = e.host || e.pathname && e.pathname.charAt(0) === "/", $ = ye || ee || t.host && e.pathname, ge = $, d = t.pathname && t.pathname.split("/") || [], E = e.pathname && e.pathname.split("/") || [], V = t.protocol && !oe[t.protocol];
    if (V && (t.hostname = "", t.port = null, t.host && (d[0] === "" ? d[0] = t.host : d.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (E[0] === "" ? E[0] = e.host : E.unshift(e.host)), e.host = null), $ = $ && (E[0] === "" || d[0] === "")), ye)
      t.host = e.host || e.host === "" ? e.host : t.host, t.hostname = e.hostname || e.hostname === "" ? e.hostname : t.hostname, t.search = e.search, t.query = e.query, d = E;
    else if (E.length)
      d || (d = []), d.pop(), d = d.concat(E), t.search = e.search, t.query = e.query;
    else if (!T.isNullOrUndefined(e.search)) {
      if (V) {
        t.hostname = t.host = d.shift();
        var z = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
        z && (t.auth = z.shift(), t.host = t.hostname = z.shift());
      }
      return t.search = e.search, t.query = e.query, (!T.isNull(t.pathname) || !T.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
    }
    if (!d.length)
      return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
    for (var X = d.slice(-1)[0], Se = (t.host || e.host || d.length > 1) && (X === "." || X === "..") || X === "", se = 0, Y = d.length; Y >= 0; Y--)
      X = d[Y], X === "." ? d.splice(Y, 1) : X === ".." ? (d.splice(Y, 1), se++) : se && (d.splice(Y, 1), se--);
    if (!$ && !ge)
      for (; se--; se)
        d.unshift("..");
    $ && d[0] !== "" && (!d[0] || d[0].charAt(0) !== "/") && d.unshift(""), Se && d.join("/").substr(-1) !== "/" && d.push("");
    var le = d[0] === "" || d[0] && d[0].charAt(0) === "/";
    if (V) {
      t.hostname = t.host = le ? "" : d.length ? d.shift() : "";
      var z = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
      z && (t.auth = z.shift(), t.host = t.hostname = z.shift());
    }
    return $ = $ || t.host && d.length, $ && !le && d.unshift(""), d.length ? t.pathname = d.join("/") : (t.pathname = null, t.path = null), (!T.isNull(t.pathname) || !T.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
  }, S.prototype.parseHost = function() {
    var e = this.host, s = Ee.exec(e);
    s && (s = s[0], s !== ":" && (this.port = s.substr(1)), e = e.substr(0, e.length - s.length)), e && (this.hostname = e);
  };
  function Ie(e, s) {
    for (var t = 0, l = e.length - 1; l >= 0; l--) {
      var _ = e[l];
      _ === "." ? e.splice(l, 1) : _ === ".." ? (e.splice(l, 1), t++) : t && (e.splice(l, 1), t--);
    }
    if (s)
      for (; t--; t)
        e.unshift("..");
    return e;
  }
  function i() {
    for (var e = "", s = !1, t = arguments.length - 1; t >= -1 && !s; t--) {
      var l = t >= 0 ? arguments[t] : "/";
      if (typeof l != "string")
        throw new TypeError("Arguments to path.resolve must be strings");
      if (!l)
        continue;
      e = l + "/" + e, s = l.charAt(0) === "/";
    }
    return e = Ie(p(e.split("/"), function(_) {
      return !!_;
    }), !s).join("/"), (s ? "/" : "") + e || ".";
  }
  function p(e, s) {
    if (e.filter)
      return e.filter(s);
    for (var t = [], l = 0; l < e.length; l++)
      s(e[l], l, e) && t.push(e[l]);
    return t;
  }
  var y = function(e) {
    function s() {
      var l = this || self;
      return delete e.prototype.__magic__, l;
    }
    if (typeof globalThis == "object")
      return globalThis;
    if (this)
      return s();
    e.defineProperty(e.prototype, "__magic__", {
      configurable: !0,
      get: s
    });
    var t = __magic__;
    return t;
  }(Object), b = (
    /** @type {formatImport}*/
    te
  ), w = (
    /** @type {parseImport}*/
    C
  ), U = (
    /** @type {resolveImport}*/
    m
  ), q = (
    /** @type {UrlImport}*/
    ae
  ), R = y.URL, N = y.URLSearchParams, B = /%/g, G = /\\/g, L = /\n/g, H = /\r/g, k = /\t/g, W = 47;
  function Q(e) {
    var s = (
      /** @type {URL|null} */
      e ?? null
    );
    return !!(s !== null && (s != null && s.href) && (s != null && s.origin));
  }
  function me(e) {
    if (e.hostname !== "")
      throw new TypeError('File URL host must be "localhost" or empty on browser');
    for (var s = e.pathname, t = 0; t < s.length; t++)
      if (s[t] === "%") {
        var l = s.codePointAt(t + 2) | 32;
        if (s[t + 1] === "2" && l === 102)
          throw new TypeError("File URL path must not include encoded / characters");
      }
    return decodeURIComponent(s);
  }
  function nt(e) {
    return e.includes("%") && (e = e.replace(B, "%25")), e.includes("\\") && (e = e.replace(G, "%5C")), e.includes(`
`) && (e = e.replace(L, "%0A")), e.includes("\r") && (e = e.replace(H, "%0D")), e.includes("	") && (e = e.replace(k, "%09")), e;
  }
  var De = (
    /**
     * @type {domainToASCII}
     */
    function(s) {
      if (typeof s > "u")
        throw new TypeError('The "domain" argument must be specified');
      return new R("http://" + s).hostname;
    }
  ), Be = (
    /**
     * @type {domainToUnicode}
     */
    function(s) {
      if (typeof s > "u")
        throw new TypeError('The "domain" argument must be specified');
      return new R("http://" + s).hostname;
    }
  ), Ge = (
    /**
     * @type {(url: string) => URL}
     */
    function(s) {
      var t = new R("file://"), l = i(s), _ = s.charCodeAt(s.length - 1);
      return _ === W && l[l.length - 1] !== "/" && (l += "/"), t.pathname = nt(l), t;
    }
  ), ze = (
    /**
     * @type {fileURLToPath & ((path: string | URL) => string)}
     */
    function(s) {
      if (!Q(s) && typeof s != "string")
        throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof s + " (" + s + ")");
      var t = new R(s);
      if (t.protocol !== "file:")
        throw new TypeError("The URL must be of scheme file");
      return me(t);
    }
  ), Xe = (
    /**
     * @type {(
     *   ((urlObject: URL, options?: URLFormatOptions) => string) &
     *   ((urlObject: UrlObject | string, options?: never) => string)
     * )}
     */
    function(s, t) {
      var l, _, D;
      if (t === void 0 && (t = {}), !(s instanceof R))
        return b(s);
      if (typeof t != "object" || t === null)
        throw new TypeError('The "options" argument must be of type object.');
      var j = (l = t.auth) != null ? l : !0, c = (_ = t.fragment) != null ? _ : !0, K = (D = t.search) != null ? D : !0, x = new R(s.toString());
      return j || (x.username = "", x.password = ""), c || (x.hash = ""), K || (x.search = ""), x.toString();
    }
  ), We = {
    format: Xe,
    parse: w,
    resolve: U,
    resolveObject: A,
    Url: q,
    URL: R,
    URLSearchParams: N,
    domainToASCII: De,
    domainToUnicode: Be,
    pathToFileURL: Ge,
    fileURLToPath: ze
  };
  r.URL = R, r.URLSearchParams = N, r.Url = q, r.default = We, r.domainToASCII = De, r.domainToUnicode = Be, r.fileURLToPath = ze, r.format = Xe, r.parse = w, r.pathToFileURL = Ge, r.resolve = U, r.resolveObject = A, r = o.exports = We;
})(He, He.exports);
var rt = He.exports;
(function(o) {
  var r = dt, h = xe, f = mt, n = gt, g = rt, u = o;
  u.request = function(a, v) {
    typeof a == "string" ? a = g.parse(a) : a = f(a);
    var T = P.location.protocol.search(/^https?:$/) === -1 ? "http:" : "", C = a.protocol || T, m = a.hostname || a.host, A = a.port, te = a.path || "/";
    m && m.indexOf(":") !== -1 && (m = "[" + m + "]"), a.url = (m ? C + "//" + m : "") + (A ? ":" + A : "") + te, a.method = (a.method || "GET").toUpperCase(), a.headers = a.headers || {};
    var ae = new r(a);
    return v && ae.on("response", v), ae;
  }, u.get = function(v, T) {
    var C = u.request(v, T);
    return C.end(), C;
  }, u.ClientRequest = r, u.IncomingMessage = h.IncomingMessage, u.Agent = function() {
  }, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent(), u.STATUS_CODES = n, u.METHODS = [
    "CHECKOUT",
    "CONNECT",
    "COPY",
    "DELETE",
    "GET",
    "HEAD",
    "LOCK",
    "M-SEARCH",
    "MERGE",
    "MKACTIVITY",
    "MKCOL",
    "MOVE",
    "NOTIFY",
    "OPTIONS",
    "PATCH",
    "POST",
    "PROPFIND",
    "PROPPATCH",
    "PURGE",
    "PUT",
    "REPORT",
    "SEARCH",
    "SUBSCRIBE",
    "TRACE",
    "UNLOCK",
    "UNSUBSCRIBE"
  ];
})(Je);
var ot = { exports: {} };
(function(o) {
  var r = Je, h = rt, f = o.exports;
  for (var n in r)
    r.hasOwnProperty(n) && (f[n] = r[n]);
  f.request = function(u, a) {
    return u = g(u), r.request.call(this, u, a);
  }, f.get = function(u, a) {
    return u = g(u), r.get.call(this, u, a);
  };
  function g(u) {
    if (typeof u == "string" && (u = h.parse(u)), u.protocol || (u.protocol = "https:"), u.protocol !== "https:")
      throw new Error('Protocol "' + u.protocol + '" not supported. Expected "https:"');
    return u;
  }
})(ot);
var Tt = ot.exports;
export {
  Tt as h,
  _t as p,
  Je as s,
  rt as u
};
