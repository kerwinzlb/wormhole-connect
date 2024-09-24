import { aa as D8, g as at, o as Pu, a0 as i8, n as he, c4 as Ee, c5 as ot, bX as O1, r as st, d as N, c6 as ft, c7 as K2, c8 as G1, c9 as a8 } from "./index-DV1w5RNX.mjs";
import { s as o8, h as s8, u as f8, p as F8 } from "./index-CK5gKYu_.mjs";
var $2 = function() {
  return $2 = Object.assign || function(r) {
    for (var n, i = 1, o = arguments.length; i < o; i++) {
      n = arguments[i];
      for (var D in n)
        Object.prototype.hasOwnProperty.call(n, D) && (r[D] = n[D]);
    }
    return r;
  }, $2.apply(this, arguments);
};
var ce = { exports: {} };
const Ft = (u) => typeof u == "object" && u !== null, lt = Symbol("skip"), Je = (u) => Ft(u) && !(u instanceof RegExp) && !(u instanceof Error) && !(u instanceof Date), H9 = (u, r, n, i = /* @__PURE__ */ new WeakMap()) => {
  if (n = {
    deep: !1,
    target: {},
    ...n
  }, i.has(u))
    return i.get(u);
  i.set(u, n.target);
  const { target: o } = n;
  delete n.target;
  const D = (E) => E.map((c) => Je(c) ? H9(c, r, n, i) : c);
  if (Array.isArray(u))
    return D(u);
  for (const [E, c] of Object.entries(u)) {
    const p = r(E, c, u);
    if (p === lt)
      continue;
    let [v, m, { shouldRecurse: M = !0 } = {}] = p;
    v !== "__proto__" && (n.deep && M && Je(m) && (m = Array.isArray(m) ? D(m) : H9(m, r, n, i)), o[v] = m);
  }
  return o;
};
ce.exports = (u, r, n) => {
  if (!Ft(u))
    throw new TypeError(`Expected an object, got \`${u}\` (${typeof u})`);
  return H9(u, r, n);
};
ce.exports.mapObjectSkip = lt;
var l8 = ce.exports;
function A8(u) {
  return u.toLowerCase();
}
var h8 = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], E8 = /[^A-Z0-9]+/gi;
function c8(u, r) {
  r === void 0 && (r = {});
  for (var n = r.splitRegexp, i = n === void 0 ? h8 : n, o = r.stripRegexp, D = o === void 0 ? E8 : o, E = r.transform, c = E === void 0 ? A8 : E, p = r.delimiter, v = p === void 0 ? " " : p, m = Xe(Xe(u, i, "$1\0$2"), D, "\0"), M = 0, _ = m.length; m.charAt(M) === "\0"; )
    M++;
  for (; m.charAt(_ - 1) === "\0"; )
    _--;
  return m.slice(M, _).split("\0").map(c).join(v);
}
function Xe(u, r, n) {
  return r instanceof RegExp ? u.replace(r, n) : r.reduce(function(i, o) {
    return i.replace(o, n);
  }, u);
}
function C8(u, r) {
  return r === void 0 && (r = {}), c8(u, $2({ delimiter: "." }, r));
}
function d8(u, r) {
  return r === void 0 && (r = {}), C8(u, $2({ delimiter: "_" }, r));
}
const p8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  snakeCase: d8
}, Symbol.toStringTag, { value: "Module" })), B8 = /* @__PURE__ */ D8(p8), v8 = l8, { snakeCase: m8 } = B8;
var y8 = function(u, r) {
  return r = Object.assign({ deep: !0, exclude: [], parsingOptions: {} }, r), v8(u, function(n, i) {
    return [
      g8(r.exclude, n) ? n : m8(n, r.parsingOptions),
      i
    ];
  }, r);
};
function g8(u, r) {
  return u.some(function(n) {
    return typeof n == "string" ? n === r : n.test(r);
  });
}
const X7 = /* @__PURE__ */ at(y8);
var At = { exports: {} };
(function(u, r) {
  (function(n, i) {
    u.exports = i();
  })(Pu, function() {
    return n = { 418: function(o, D) {
      (function(E, c) {
        for (var p in c)
          E[p] = c[p];
      })(D, function(E) {
        var c = {};
        function p(v) {
          if (c[v])
            return c[v].exports;
          var m = c[v] = { i: v, l: !1, exports: {} };
          return E[v].call(m.exports, m, m.exports, p), m.l = !0, m.exports;
        }
        return p.m = E, p.c = c, p.i = function(v) {
          return v;
        }, p.d = function(v, m, M) {
          p.o(v, m) || Object.defineProperty(v, m, { configurable: !1, enumerable: !0, get: M });
        }, p.n = function(v) {
          var m = v && v.__esModule ? function() {
            return v.default;
          } : function() {
            return v;
          };
          return p.d(m, "a", m), m;
        }, p.o = function(v, m) {
          return Object.prototype.hasOwnProperty.call(v, m);
        }, p.p = "", p(p.s = 1);
      }([function(E, c, p) {
        Object.defineProperty(c, "__esModule", { value: !0 });
        var v = p(3), m = function() {
          function M(_, O) {
            _ === void 0 && (_ = {}), O === void 0 && (O = { splitValues: !1 });
            var x, k = this;
            this.headersMap = {}, _ && (typeof Headers < "u" && _ instanceof Headers ? v.getHeaderKeys(_).forEach(function(g) {
              v.getHeaderValues(_, g).forEach(function(b) {
                O.splitValues ? k.append(g, v.splitHeaderValue(b)) : k.append(g, b);
              });
            }) : typeof (x = _) == "object" && typeof x.headersMap == "object" && typeof x.forEach == "function" ? _.forEach(function(g, b) {
              k.append(g, b);
            }) : typeof Map < "u" && _ instanceof Map ? _.forEach(function(g, b) {
              k.append(b, g);
            }) : typeof _ == "string" ? this.appendFromString(_) : typeof _ == "object" && Object.getOwnPropertyNames(_).forEach(function(g) {
              var b = _[g];
              Array.isArray(b) ? b.forEach(function(y) {
                k.append(g, y);
              }) : k.append(g, b);
            }));
          }
          return M.prototype.appendFromString = function(_) {
            for (var O = _.split(`\r
`), x = 0; x < O.length; x++) {
              var k = O[x], g = k.indexOf(":");
              if (g > 0) {
                var b = k.substring(0, g).trim(), y = k.substring(g + 1).trim();
                this.append(b, y);
              }
            }
          }, M.prototype.delete = function(_, O) {
            var x = v.normalizeName(_);
            if (O === void 0)
              delete this.headersMap[x];
            else {
              var k = this.headersMap[x];
              if (k) {
                var g = k.indexOf(O);
                g >= 0 && k.splice(g, 1), k.length === 0 && delete this.headersMap[x];
              }
            }
          }, M.prototype.append = function(_, O) {
            var x = this, k = v.normalizeName(_);
            Array.isArray(this.headersMap[k]) || (this.headersMap[k] = []), Array.isArray(O) ? O.forEach(function(g) {
              x.headersMap[k].push(v.normalizeValue(g));
            }) : this.headersMap[k].push(v.normalizeValue(O));
          }, M.prototype.set = function(_, O) {
            var x = v.normalizeName(_);
            if (Array.isArray(O)) {
              var k = [];
              O.forEach(function(g) {
                k.push(v.normalizeValue(g));
              }), this.headersMap[x] = k;
            } else
              this.headersMap[x] = [v.normalizeValue(O)];
          }, M.prototype.has = function(_, O) {
            var x = this.headersMap[v.normalizeName(_)];
            if (!Array.isArray(x))
              return !1;
            if (O !== void 0) {
              var k = v.normalizeValue(O);
              return x.indexOf(k) >= 0;
            }
            return !0;
          }, M.prototype.get = function(_) {
            var O = this.headersMap[v.normalizeName(_)];
            return O !== void 0 ? O.concat() : [];
          }, M.prototype.forEach = function(_) {
            var O = this;
            Object.getOwnPropertyNames(this.headersMap).forEach(function(x) {
              _(x, O.headersMap[x]);
            }, this);
          }, M.prototype.toHeaders = function() {
            if (typeof Headers < "u") {
              var _ = new Headers();
              return this.forEach(function(O, x) {
                x.forEach(function(k) {
                  _.append(O, k);
                });
              }), _;
            }
            throw new Error("Headers class is not defined");
          }, M;
        }();
        c.BrowserHeaders = m;
      }, function(E, c, p) {
        Object.defineProperty(c, "__esModule", { value: !0 });
        var v = p(0);
        c.BrowserHeaders = v.BrowserHeaders;
      }, function(E, c, p) {
        Object.defineProperty(c, "__esModule", { value: !0 }), c.iterateHeaders = function(v, m) {
          for (var M = v[Symbol.iterator](), _ = M.next(); !_.done; )
            m(_.value[0]), _ = M.next();
        }, c.iterateHeadersKeys = function(v, m) {
          for (var M = v.keys(), _ = M.next(); !_.done; )
            m(_.value), _ = M.next();
        };
      }, function(E, c, p) {
        Object.defineProperty(c, "__esModule", { value: !0 });
        var v = p(2);
        c.normalizeName = function(m) {
          if (typeof m != "string" && (m = String(m)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(m))
            throw new TypeError("Invalid character in header field name");
          return m.toLowerCase();
        }, c.normalizeValue = function(m) {
          return typeof m != "string" && (m = String(m)), m;
        }, c.getHeaderValues = function(m, M) {
          var _ = m;
          if (_ instanceof Headers && _.getAll)
            return _.getAll(M);
          var O = _.get(M);
          return O && typeof O == "string" ? [O] : O;
        }, c.getHeaderKeys = function(m) {
          var M = m, _ = {}, O = [];
          return M.keys ? v.iterateHeadersKeys(M, function(x) {
            _[x] || (_[x] = !0, O.push(x));
          }) : M.forEach ? M.forEach(function(x, k) {
            _[k] || (_[k] = !0, O.push(k));
          }) : v.iterateHeaders(M, function(x) {
            var k = x[0];
            _[k] || (_[k] = !0, O.push(k));
          }), O;
        }, c.splitHeaderValue = function(m) {
          var M = [];
          return m.split(", ").forEach(function(_) {
            _.split(",").forEach(function(O) {
              M.push(O);
            });
          }), M;
        };
      }]));
    }, 617: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.ChunkParser = D.ChunkType = D.encodeASCII = D.decodeASCII = void 0;
      var c, p = E(65);
      function v(g) {
        return (b = g) === 9 || b === 10 || b === 13 || g >= 32 && g <= 126;
        var b;
      }
      function m(g) {
        for (var b = 0; b !== g.length; ++b)
          if (!v(g[b]))
            throw new Error("Metadata is not valid (printable) ASCII");
        return String.fromCharCode.apply(String, Array.prototype.slice.call(g));
      }
      function M(g) {
        return (128 & g.getUint8(0)) == 128;
      }
      function _(g) {
        return g.getUint32(1, !1);
      }
      function O(g, b, y) {
        return g.byteLength - b >= y;
      }
      function x(g, b, y) {
        if (g.slice)
          return g.slice(b, y);
        var I = g.length;
        y !== void 0 && (I = y);
        for (var T = new Uint8Array(I - b), uu = 0, J = b; J < I; J++)
          T[uu++] = g[J];
        return T;
      }
      D.decodeASCII = m, D.encodeASCII = function(g) {
        for (var b = new Uint8Array(g.length), y = 0; y !== g.length; ++y) {
          var I = g.charCodeAt(y);
          if (!v(I))
            throw new Error("Metadata contains invalid ASCII");
          b[y] = I;
        }
        return b;
      }, function(g) {
        g[g.MESSAGE = 1] = "MESSAGE", g[g.TRAILERS = 2] = "TRAILERS";
      }(c = D.ChunkType || (D.ChunkType = {}));
      var k = function() {
        function g() {
          this.buffer = null, this.position = 0;
        }
        return g.prototype.parse = function(b, y) {
          if (b.length === 0 && y)
            return [];
          var I, T = [];
          if (this.buffer == null)
            this.buffer = b, this.position = 0;
          else if (this.position === this.buffer.byteLength)
            this.buffer = b, this.position = 0;
          else {
            var uu = this.buffer.byteLength - this.position, J = new Uint8Array(uu + b.byteLength), nu = x(this.buffer, this.position);
            J.set(nu, 0);
            var Du = new Uint8Array(b);
            J.set(Du, uu), this.buffer = J, this.position = 0;
          }
          for (; ; ) {
            if (!O(this.buffer, this.position, 5))
              return T;
            var Z = x(this.buffer, this.position, this.position + 5), au = new DataView(Z.buffer, Z.byteOffset, Z.byteLength), h = _(au);
            if (!O(this.buffer, this.position, 5 + h))
              return T;
            var e = x(this.buffer, this.position + 5, this.position + 5 + h);
            if (this.position += 5 + h, M(au))
              return T.push({ chunkType: c.TRAILERS, trailers: (I = e, new p.Metadata(m(I))) }), T;
            T.push({ chunkType: c.MESSAGE, data: e });
          }
        }, g;
      }();
      D.ChunkParser = k;
    }, 8: function(o, D) {
      var E;
      Object.defineProperty(D, "__esModule", { value: !0 }), D.httpStatusToCode = D.Code = void 0, function(c) {
        c[c.OK = 0] = "OK", c[c.Canceled = 1] = "Canceled", c[c.Unknown = 2] = "Unknown", c[c.InvalidArgument = 3] = "InvalidArgument", c[c.DeadlineExceeded = 4] = "DeadlineExceeded", c[c.NotFound = 5] = "NotFound", c[c.AlreadyExists = 6] = "AlreadyExists", c[c.PermissionDenied = 7] = "PermissionDenied", c[c.ResourceExhausted = 8] = "ResourceExhausted", c[c.FailedPrecondition = 9] = "FailedPrecondition", c[c.Aborted = 10] = "Aborted", c[c.OutOfRange = 11] = "OutOfRange", c[c.Unimplemented = 12] = "Unimplemented", c[c.Internal = 13] = "Internal", c[c.Unavailable = 14] = "Unavailable", c[c.DataLoss = 15] = "DataLoss", c[c.Unauthenticated = 16] = "Unauthenticated";
      }(E = D.Code || (D.Code = {})), D.httpStatusToCode = function(c) {
        switch (c) {
          case 0:
            return E.Internal;
          case 200:
            return E.OK;
          case 400:
            return E.InvalidArgument;
          case 401:
            return E.Unauthenticated;
          case 403:
            return E.PermissionDenied;
          case 404:
            return E.NotFound;
          case 409:
            return E.Aborted;
          case 412:
            return E.FailedPrecondition;
          case 429:
            return E.ResourceExhausted;
          case 499:
            return E.Canceled;
          case 500:
            return E.Unknown;
          case 501:
            return E.Unimplemented;
          case 503:
            return E.Unavailable;
          case 504:
            return E.DeadlineExceeded;
          default:
            return E.Unknown;
        }
      };
    }, 934: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.client = void 0;
      var c = E(65), p = E(617), v = E(8), m = E(346), M = E(57), _ = E(882);
      D.client = function(k, g) {
        return new O(k, g);
      };
      var O = function() {
        function k(g, b) {
          this.started = !1, this.sentFirstMessage = !1, this.completed = !1, this.closed = !1, this.finishedSending = !1, this.onHeadersCallbacks = [], this.onMessageCallbacks = [], this.onEndCallbacks = [], this.parser = new p.ChunkParser(), this.methodDefinition = g, this.props = b, this.createTransport();
        }
        return k.prototype.createTransport = function() {
          var g = this.props.host + "/" + this.methodDefinition.service.serviceName + "/" + this.methodDefinition.methodName, b = { methodDefinition: this.methodDefinition, debug: this.props.debug || !1, url: g, onHeaders: this.onTransportHeaders.bind(this), onChunk: this.onTransportChunk.bind(this), onEnd: this.onTransportEnd.bind(this) };
          this.props.transport ? this.transport = this.props.transport(b) : this.transport = M.makeDefaultTransport(b);
        }, k.prototype.onTransportHeaders = function(g, b) {
          if (this.props.debug && m.debug("onHeaders", g, b), this.closed)
            this.props.debug && m.debug("grpc.onHeaders received after request was closed - ignoring");
          else if (b !== 0) {
            this.responseHeaders = g, this.props.debug && m.debug("onHeaders.responseHeaders", JSON.stringify(this.responseHeaders, null, 2));
            var y = x(g);
            this.props.debug && m.debug("onHeaders.gRPCStatus", y);
            var I = y && y >= 0 ? y : v.httpStatusToCode(b);
            this.props.debug && m.debug("onHeaders.code", I);
            var T = g.get("grpc-message") || [];
            if (this.props.debug && m.debug("onHeaders.gRPCMessage", T), this.rawOnHeaders(g), I !== v.Code.OK) {
              var uu = this.decodeGRPCStatus(T[0]);
              this.rawOnError(I, uu, g);
            }
          }
        }, k.prototype.onTransportChunk = function(g) {
          var b = this;
          if (this.closed)
            this.props.debug && m.debug("grpc.onChunk received after request was closed - ignoring");
          else {
            var y = [];
            try {
              y = this.parser.parse(g);
            } catch (I) {
              return this.props.debug && m.debug("onChunk.parsing error", I, I.message), void this.rawOnError(v.Code.Internal, "parsing error: " + I.message);
            }
            y.forEach(function(I) {
              if (I.chunkType === p.ChunkType.MESSAGE) {
                var T = b.methodDefinition.responseType.deserializeBinary(I.data);
                b.rawOnMessage(T);
              } else
                I.chunkType === p.ChunkType.TRAILERS && (b.responseHeaders ? (b.responseTrailers = new c.Metadata(I.trailers), b.props.debug && m.debug("onChunk.trailers", b.responseTrailers)) : (b.responseHeaders = new c.Metadata(I.trailers), b.rawOnHeaders(b.responseHeaders)));
            });
          }
        }, k.prototype.onTransportEnd = function() {
          if (this.props.debug && m.debug("grpc.onEnd"), this.closed)
            this.props.debug && m.debug("grpc.onEnd received after request was closed - ignoring");
          else if (this.responseTrailers !== void 0) {
            var g = x(this.responseTrailers);
            if (g !== null) {
              var b = this.responseTrailers.get("grpc-message"), y = this.decodeGRPCStatus(b[0]);
              this.rawOnEnd(g, y, this.responseTrailers);
            } else
              this.rawOnError(v.Code.Internal, "Response closed without grpc-status (Trailers provided)");
          } else {
            if (this.responseHeaders === void 0)
              return void this.rawOnError(v.Code.Unknown, "Response closed without headers");
            var I = x(this.responseHeaders), T = this.responseHeaders.get("grpc-message");
            if (this.props.debug && m.debug("grpc.headers only response ", I, T), I === null)
              return void this.rawOnEnd(v.Code.Unknown, "Response closed without grpc-status (Headers only)", this.responseHeaders);
            var uu = this.decodeGRPCStatus(T[0]);
            this.rawOnEnd(I, uu, this.responseHeaders);
          }
        }, k.prototype.decodeGRPCStatus = function(g) {
          if (!g)
            return "";
          try {
            return decodeURIComponent(g);
          } catch {
            return g;
          }
        }, k.prototype.rawOnEnd = function(g, b, y) {
          var I = this;
          this.props.debug && m.debug("rawOnEnd", g, b, y), this.completed || (this.completed = !0, this.onEndCallbacks.forEach(function(T) {
            if (!I.closed)
              try {
                T(g, b, y);
              } catch (uu) {
                setTimeout(function() {
                  throw uu;
                }, 0);
              }
          }));
        }, k.prototype.rawOnHeaders = function(g) {
          this.props.debug && m.debug("rawOnHeaders", g), this.completed || this.onHeadersCallbacks.forEach(function(b) {
            try {
              b(g);
            } catch (y) {
              setTimeout(function() {
                throw y;
              }, 0);
            }
          });
        }, k.prototype.rawOnError = function(g, b, y) {
          var I = this;
          y === void 0 && (y = new c.Metadata()), this.props.debug && m.debug("rawOnError", g, b), this.completed || (this.completed = !0, this.onEndCallbacks.forEach(function(T) {
            if (!I.closed)
              try {
                T(g, b, y);
              } catch (uu) {
                setTimeout(function() {
                  throw uu;
                }, 0);
              }
          }));
        }, k.prototype.rawOnMessage = function(g) {
          var b = this;
          this.props.debug && m.debug("rawOnMessage", g.toObject()), this.completed || this.closed || this.onMessageCallbacks.forEach(function(y) {
            if (!b.closed)
              try {
                y(g);
              } catch (I) {
                setTimeout(function() {
                  throw I;
                }, 0);
              }
          });
        }, k.prototype.onHeaders = function(g) {
          this.onHeadersCallbacks.push(g);
        }, k.prototype.onMessage = function(g) {
          this.onMessageCallbacks.push(g);
        }, k.prototype.onEnd = function(g) {
          this.onEndCallbacks.push(g);
        }, k.prototype.start = function(g) {
          if (this.started)
            throw new Error("Client already started - cannot .start()");
          this.started = !0;
          var b = new c.Metadata(g || {});
          b.set("content-type", "application/grpc-web+proto"), b.set("x-grpc-web", "1"), this.transport.start(b);
        }, k.prototype.send = function(g) {
          if (!this.started)
            throw new Error("Client not started - .start() must be called before .send()");
          if (this.closed)
            throw new Error("Client already closed - cannot .send()");
          if (this.finishedSending)
            throw new Error("Client already finished sending - cannot .send()");
          if (!this.methodDefinition.requestStream && this.sentFirstMessage)
            throw new Error("Message already sent for non-client-streaming method - cannot .send()");
          this.sentFirstMessage = !0;
          var b = _.frameRequest(g);
          this.transport.sendMessage(b);
        }, k.prototype.finishSend = function() {
          if (!this.started)
            throw new Error("Client not started - .finishSend() must be called before .close()");
          if (this.closed)
            throw new Error("Client already closed - cannot .send()");
          if (this.finishedSending)
            throw new Error("Client already finished sending - cannot .finishSend()");
          this.finishedSending = !0, this.transport.finishSend();
        }, k.prototype.close = function() {
          if (!this.started)
            throw new Error("Client not started - .start() must be called before .close()");
          if (this.closed)
            throw new Error("Client already closed - cannot .close()");
          this.closed = !0, this.props.debug && m.debug("request.abort aborting request"), this.transport.cancel();
        }, k;
      }();
      function x(k) {
        var g = k.get("grpc-status") || [];
        if (g.length > 0)
          try {
            var b = g[0];
            return parseInt(b, 10);
          } catch {
            return null;
          }
        return null;
      }
    }, 346: function(o, D) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.debug = void 0, D.debug = function() {
        for (var E = [], c = 0; c < arguments.length; c++)
          E[c] = arguments[c];
        console.debug ? console.debug.apply(null, E) : console.log.apply(null, E);
      };
    }, 607: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.grpc = void 0;
      var c, p = E(418), v = E(57), m = E(229), M = E(540), _ = E(210), O = E(859), x = E(8), k = E(938), g = E(35), b = E(934);
      (c = D.grpc || (D.grpc = {})).setDefaultTransport = v.setDefaultTransportFactory, c.CrossBrowserHttpTransport = O.CrossBrowserHttpTransport, c.FetchReadableStreamTransport = m.FetchReadableStreamTransport, c.XhrTransport = _.XhrTransport, c.WebsocketTransport = M.WebsocketTransport, c.Code = x.Code, c.Metadata = p.BrowserHeaders, c.client = function(y, I) {
        return b.client(y, I);
      }, c.invoke = k.invoke, c.unary = g.unary;
    }, 938: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.invoke = void 0;
      var c = E(934);
      D.invoke = function(p, v) {
        if (p.requestStream)
          throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");
        var m = c.client(p, { host: v.host, transport: v.transport, debug: v.debug });
        return v.onHeaders && m.onHeaders(v.onHeaders), v.onMessage && m.onMessage(v.onMessage), v.onEnd && m.onEnd(v.onEnd), m.start(v.metadata), m.send(v.request), m.finishSend(), { close: function() {
          m.close();
        } };
      };
    }, 65: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.Metadata = void 0;
      var c = E(418);
      Object.defineProperty(D, "Metadata", { enumerable: !0, get: function() {
        return c.BrowserHeaders;
      } });
    }, 57: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.makeDefaultTransport = D.setDefaultTransportFactory = void 0;
      var c = E(859), p = function(v) {
        return c.CrossBrowserHttpTransport({ withCredentials: !1 })(v);
      };
      D.setDefaultTransportFactory = function(v) {
        p = v;
      }, D.makeDefaultTransport = function(v) {
        return p(v);
      };
    }, 229: function(o, D, E) {
      var c = this && this.__assign || function() {
        return (c = Object.assign || function(M) {
          for (var _, O = 1, x = arguments.length; O < x; O++)
            for (var k in _ = arguments[O])
              Object.prototype.hasOwnProperty.call(_, k) && (M[k] = _[k]);
          return M;
        }).apply(this, arguments);
      };
      Object.defineProperty(D, "__esModule", { value: !0 }), D.detectFetchSupport = D.FetchReadableStreamTransport = void 0;
      var p = E(65), v = E(346);
      D.FetchReadableStreamTransport = function(M) {
        return function(_) {
          return function(O, x) {
            return O.debug && v.debug("fetchRequest", O), new m(O, x);
          }(_, M);
        };
      };
      var m = function() {
        function M(_, O) {
          this.cancelled = !1, this.controller = self.AbortController && new AbortController(), this.options = _, this.init = O;
        }
        return M.prototype.pump = function(_, O) {
          var x = this;
          if (this.reader = _, this.cancelled)
            return this.options.debug && v.debug("Fetch.pump.cancel at first pump"), void this.reader.cancel().catch(function(k) {
              x.options.debug && v.debug("Fetch.pump.reader.cancel exception", k);
            });
          this.reader.read().then(function(k) {
            if (k.done)
              return x.options.onEnd(), O;
            x.options.onChunk(k.value), x.pump(x.reader, O);
          }).catch(function(k) {
            x.cancelled ? x.options.debug && v.debug("Fetch.catch - request cancelled") : (x.cancelled = !0, x.options.debug && v.debug("Fetch.catch", k.message), x.options.onEnd(k));
          });
        }, M.prototype.send = function(_) {
          var O = this;
          fetch(this.options.url, c(c({}, this.init), { headers: this.metadata.toHeaders(), method: "POST", body: _, signal: this.controller && this.controller.signal })).then(function(x) {
            if (O.options.debug && v.debug("Fetch.response", x), O.options.onHeaders(new p.Metadata(x.headers), x.status), !x.body)
              return x;
            O.pump(x.body.getReader(), x);
          }).catch(function(x) {
            O.cancelled ? O.options.debug && v.debug("Fetch.catch - request cancelled") : (O.cancelled = !0, O.options.debug && v.debug("Fetch.catch", x.message), O.options.onEnd(x));
          });
        }, M.prototype.sendMessage = function(_) {
          this.send(_);
        }, M.prototype.finishSend = function() {
        }, M.prototype.start = function(_) {
          this.metadata = _;
        }, M.prototype.cancel = function() {
          var _ = this;
          this.cancelled ? this.options.debug && v.debug("Fetch.cancel already cancelled") : (this.cancelled = !0, this.controller ? (this.options.debug && v.debug("Fetch.cancel.controller.abort"), this.controller.abort()) : this.options.debug && v.debug("Fetch.cancel.missing abort controller"), this.reader ? (this.options.debug && v.debug("Fetch.cancel.reader.cancel"), this.reader.cancel().catch(function(O) {
            _.options.debug && v.debug("Fetch.cancel.reader.cancel exception", O);
          })) : this.options.debug && v.debug("Fetch.cancel before reader"));
        }, M;
      }();
      D.detectFetchSupport = function() {
        return typeof Response < "u" && Response.prototype.hasOwnProperty("body") && typeof Headers == "function";
      };
    }, 859: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.CrossBrowserHttpTransport = void 0;
      var c = E(229), p = E(210);
      D.CrossBrowserHttpTransport = function(v) {
        if (c.detectFetchSupport()) {
          var m = { credentials: v.withCredentials ? "include" : "same-origin" };
          return c.FetchReadableStreamTransport(m);
        }
        return p.XhrTransport({ withCredentials: v.withCredentials });
      };
    }, 210: function(o, D, E) {
      var c, p = this && this.__extends || (c = function(g, b) {
        return (c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, I) {
          y.__proto__ = I;
        } || function(y, I) {
          for (var T in I)
            Object.prototype.hasOwnProperty.call(I, T) && (y[T] = I[T]);
        })(g, b);
      }, function(g, b) {
        function y() {
          this.constructor = g;
        }
        c(g, b), g.prototype = b === null ? Object.create(b) : (y.prototype = b.prototype, new y());
      });
      Object.defineProperty(D, "__esModule", { value: !0 }), D.stringToArrayBuffer = D.MozChunkedArrayBufferXHR = D.XHR = D.XhrTransport = void 0;
      var v = E(65), m = E(346), M = E(849);
      D.XhrTransport = function(g) {
        return function(b) {
          if (M.detectMozXHRSupport())
            return new O(b, g);
          if (M.detectXHROverrideMimeTypeSupport())
            return new _(b, g);
          throw new Error("This environment's XHR implementation cannot support binary transfer.");
        };
      };
      var _ = function() {
        function g(b, y) {
          this.options = b, this.init = y;
        }
        return g.prototype.onProgressEvent = function() {
          this.options.debug && m.debug("XHR.onProgressEvent.length: ", this.xhr.response.length);
          var b = this.xhr.response.substr(this.index);
          this.index = this.xhr.response.length;
          var y = k(b);
          this.options.onChunk(y);
        }, g.prototype.onLoadEvent = function() {
          this.options.debug && m.debug("XHR.onLoadEvent"), this.options.onEnd();
        }, g.prototype.onStateChange = function() {
          this.options.debug && m.debug("XHR.onStateChange", this.xhr.readyState), this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && this.options.onHeaders(new v.Metadata(this.xhr.getAllResponseHeaders()), this.xhr.status);
        }, g.prototype.sendMessage = function(b) {
          this.xhr.send(b);
        }, g.prototype.responseCallback = function(b) {
          this.options.onHeaders(new v.Metadata(function(y) {
            var I = {};
            for (var T in y) {
              var uu = y[T];
              y.hasOwnProperty(T) && uu !== void 0 && (I[T] = uu);
            }
            return I;
          }(b.headers)), b.statusCode);
        }, g.prototype.finishSend = function() {
        }, g.prototype.start = function(b) {
          var y = this;
          this.metadata = b;
          var I = new XMLHttpRequest();
          this.xhr = I, I.open("POST", this.options.url), this.configureXhr(), this.metadata.forEach(function(T, uu) {
            I.setRequestHeader(T, uu.join(", "));
          }), I.withCredentials = !!this.init.withCredentials, I.addEventListener("readystatechange", this.onStateChange.bind(this)), I.addEventListener("progress", this.onProgressEvent.bind(this)), I.addEventListener("loadend", this.onLoadEvent.bind(this)), I.addEventListener("error", function(T) {
            y.options.debug && m.debug("XHR.error", T), y.options.onEnd(T.error);
          });
        }, g.prototype.configureXhr = function() {
          this.xhr.responseType = "text", this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }, g.prototype.cancel = function() {
          this.options.debug && m.debug("XHR.abort"), this.xhr.abort();
        }, g;
      }();
      D.XHR = _;
      var O = function(g) {
        function b() {
          return g !== null && g.apply(this, arguments) || this;
        }
        return p(b, g), b.prototype.configureXhr = function() {
          this.options.debug && m.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"), this.xhr.responseType = "moz-chunked-arraybuffer";
        }, b.prototype.onProgressEvent = function() {
          var y = this.xhr.response;
          this.options.debug && m.debug("MozXHR.onProgressEvent: ", new Uint8Array(y)), this.options.onChunk(new Uint8Array(y));
        }, b;
      }(_);
      function x(g, b) {
        var y = g.charCodeAt(b);
        if (y >= 55296 && y <= 56319) {
          var I = g.charCodeAt(b + 1);
          I >= 56320 && I <= 57343 && (y = 65536 + (y - 55296 << 10) + (I - 56320));
        }
        return y;
      }
      function k(g) {
        for (var b = new Uint8Array(g.length), y = 0, I = 0; I < g.length; I++) {
          var T = String.prototype.codePointAt ? g.codePointAt(I) : x(g, I);
          b[y++] = 255 & T;
        }
        return b;
      }
      D.MozChunkedArrayBufferXHR = O, D.stringToArrayBuffer = k;
    }, 849: function(o, D) {
      var E;
      function c() {
        if (E !== void 0)
          return E;
        if (XMLHttpRequest) {
          E = new XMLHttpRequest();
          try {
            E.open("GET", "https://localhost");
          } catch {
          }
        }
        return E;
      }
      function p(v) {
        var m = c();
        if (!m)
          return !1;
        try {
          return m.responseType = v, m.responseType === v;
        } catch {
        }
        return !1;
      }
      Object.defineProperty(D, "__esModule", { value: !0 }), D.detectXHROverrideMimeTypeSupport = D.detectMozXHRSupport = D.xhrSupportsResponseType = void 0, D.xhrSupportsResponseType = p, D.detectMozXHRSupport = function() {
        return typeof XMLHttpRequest < "u" && p("moz-chunked-arraybuffer");
      }, D.detectXHROverrideMimeTypeSupport = function() {
        return typeof XMLHttpRequest < "u" && XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType");
      };
    }, 540: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.WebsocketTransport = void 0;
      var c, p = E(346), v = E(617);
      (function(M) {
        M[M.FINISH_SEND = 1] = "FINISH_SEND";
      })(c || (c = {}));
      var m = new Uint8Array([1]);
      D.WebsocketTransport = function() {
        return function(M) {
          return function(_) {
            _.debug && p.debug("websocketRequest", _);
            var O, x = function(b) {
              if (b.substr(0, 8) === "https://")
                return "wss://" + b.substr(8);
              if (b.substr(0, 7) === "http://")
                return "ws://" + b.substr(7);
              throw new Error("Websocket transport constructed with non-https:// or http:// host.");
            }(_.url), k = [];
            function g(b) {
              if (b === c.FINISH_SEND)
                O.send(m);
              else {
                var y = b, I = new Int8Array(y.byteLength + 1);
                I.set(new Uint8Array([0])), I.set(y, 1), O.send(I);
              }
            }
            return { sendMessage: function(b) {
              O && O.readyState !== O.CONNECTING ? g(b) : k.push(b);
            }, finishSend: function() {
              O && O.readyState !== O.CONNECTING ? g(c.FINISH_SEND) : k.push(c.FINISH_SEND);
            }, start: function(b) {
              (O = new WebSocket(x, ["grpc-websockets"])).binaryType = "arraybuffer", O.onopen = function() {
                var y;
                _.debug && p.debug("websocketRequest.onopen"), O.send((y = "", b.forEach(function(I, T) {
                  y += I + ": " + T.join(", ") + `\r
`;
                }), v.encodeASCII(y))), k.forEach(function(I) {
                  g(I);
                });
              }, O.onclose = function(y) {
                _.debug && p.debug("websocketRequest.onclose", y), _.onEnd();
              }, O.onerror = function(y) {
                _.debug && p.debug("websocketRequest.onerror", y);
              }, O.onmessage = function(y) {
                _.onChunk(new Uint8Array(y.data));
              };
            }, cancel: function() {
              _.debug && p.debug("websocket.abort"), O.close();
            } };
          }(M);
        };
      };
    }, 35: function(o, D, E) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.unary = void 0;
      var c = E(65), p = E(934);
      D.unary = function(v, m) {
        if (v.responseStream)
          throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");
        if (v.requestStream)
          throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");
        var M = null, _ = null, O = p.client(v, { host: m.host, transport: m.transport, debug: m.debug });
        return O.onHeaders(function(x) {
          M = x;
        }), O.onMessage(function(x) {
          _ = x;
        }), O.onEnd(function(x, k, g) {
          m.onEnd({ status: x, statusMessage: k, headers: M || new c.Metadata(), message: _, trailers: g });
        }), O.start(m.metadata), O.send(m.request), O.finishSend(), { close: function() {
          O.close();
        } };
      };
    }, 882: function(o, D) {
      Object.defineProperty(D, "__esModule", { value: !0 }), D.frameRequest = void 0, D.frameRequest = function(E) {
        var c = E.serializeBinary(), p = new ArrayBuffer(c.byteLength + 5);
        return new DataView(p, 1, 4).setUint32(0, c.length, !1), new Uint8Array(p, 5).set(c), new Uint8Array(p);
      };
    } }, i = {}, function o(D) {
      if (i[D])
        return i[D].exports;
      var E = i[D] = { exports: {} };
      return n[D].call(E.exports, E, E.exports, o), E.exports;
    }(607);
    var n, i;
  });
})(At);
var ht = At.exports, w8 = { exports: {} };
/*! store2 - v2.14.3 - 2024-02-14
* Copyright (c) 2024 Nathan Bubna; Licensed MIT */
(function(u) {
  (function(r, n) {
    var i = {
      version: "2.14.3",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: function(D, E) {
        for (var c in D)
          E.hasOwnProperty(c) || Object.defineProperty(E, c, Object.getOwnPropertyDescriptor(D, c));
        return E;
      },
      stringify: function(D, E) {
        return D === void 0 || typeof D == "function" ? D + "" : JSON.stringify(D, E || i.replace);
      },
      parse: function(D, E) {
        try {
          return JSON.parse(D, E || i.revive);
        } catch {
          return D;
        }
      },
      // extension hooks
      fn: function(D, E) {
        i.storeAPI[D] = E;
        for (var c in i.apis)
          i.apis[c][D] = E;
      },
      get: function(D, E) {
        return D.getItem(E);
      },
      set: function(D, E, c) {
        D.setItem(E, c);
      },
      remove: function(D, E) {
        D.removeItem(E);
      },
      key: function(D, E) {
        return D.key(E);
      },
      length: function(D) {
        return D.length;
      },
      clear: function(D) {
        D.clear();
      },
      // core functions
      Store: function(D, E, c) {
        var p = i.inherit(i.storeAPI, function(m, M, _) {
          return arguments.length === 0 ? p.getAll() : typeof M == "function" ? p.transact(m, M, _) : M !== void 0 ? p.set(m, M, _) : typeof m == "string" || typeof m == "number" ? p.get(m) : typeof m == "function" ? p.each(m) : m ? p.setAll(m, M) : p.clear();
        });
        p._id = D;
        try {
          var v = "__store2_test";
          E.setItem(v, "ok"), p._area = E, E.removeItem(v);
        } catch {
          p._area = i.storage("fake");
        }
        return p._ns = c || "", i.areas[D] || (i.areas[D] = p._area), i.apis[p._ns + p._id] || (i.apis[p._ns + p._id] = p), p;
      },
      storeAPI: {
        // admin functions
        area: function(D, E) {
          var c = this[D];
          return (!c || !c.area) && (c = i.Store(D, E, this._ns), this[D] || (this[D] = c)), c;
        },
        namespace: function(D, E, c) {
          if (c = c || this._delim || i.nsdelim, !D)
            return this._ns ? this._ns.substring(0, this._ns.length - c.length) : "";
          var p = D, v = this[p];
          if ((!v || !v.namespace) && (v = i.Store(this._id, this._area, this._ns + p + c), v._delim = c, this[p] || (this[p] = v), !E))
            for (var m in i.areas)
              v.area(m, i.areas[m]);
          return v;
        },
        isFake: function(D) {
          return D ? (this._real = this._area, this._area = i.storage("fake")) : D === !1 && (this._area = this._real || this._area), this._area.name === "fake";
        },
        toString: function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        },
        // storage functions
        has: function(D) {
          return this._area.has ? this._area.has(this._in(D)) : this._in(D) in this._area;
        },
        size: function() {
          return this.keys().length;
        },
        each: function(D, E) {
          for (var c = 0, p = i.length(this._area); c < p; c++) {
            var v = this._out(i.key(this._area, c));
            if (v !== void 0 && D.call(this, v, this.get(v), E) === !1)
              break;
            p > i.length(this._area) && (p--, c--);
          }
          return E || this;
        },
        keys: function(D) {
          return this.each(function(E, c, p) {
            p.push(E);
          }, D || []);
        },
        get: function(D, E) {
          var c = i.get(this._area, this._in(D)), p;
          return typeof E == "function" && (p = E, E = null), c !== null ? i.parse(c, p) : E ?? c;
        },
        getAll: function(D) {
          return this.each(function(E, c, p) {
            p[E] = c;
          }, D || {});
        },
        transact: function(D, E, c) {
          var p = this.get(D, c), v = E(p);
          return this.set(D, v === void 0 ? p : v), this;
        },
        set: function(D, E, c) {
          var p = this.get(D), v;
          return p != null && c === !1 ? E : (typeof c == "function" && (v = c, c = void 0), i.set(this._area, this._in(D), i.stringify(E, v), c) || p);
        },
        setAll: function(D, E) {
          var c, p;
          for (var v in D)
            p = D[v], this.set(v, p, E) !== p && (c = !0);
          return c;
        },
        add: function(D, E, c) {
          var p = this.get(D);
          if (p instanceof Array)
            E = p.concat(E);
          else if (p !== null) {
            var v = typeof p;
            if (v === typeof E && v === "object") {
              for (var m in E)
                p[m] = E[m];
              E = p;
            } else
              E = p + E;
          }
          return i.set(this._area, this._in(D), i.stringify(E, c)), E;
        },
        remove: function(D, E) {
          var c = this.get(D, E);
          return i.remove(this._area, this._in(D)), c;
        },
        clear: function() {
          return this._ns ? this.each(function(D) {
            i.remove(this._area, this._in(D));
          }, 1) : i.clear(this._area), this;
        },
        clearAll: function() {
          var D = this._area;
          for (var E in i.areas)
            i.areas.hasOwnProperty(E) && (this._area = i.areas[E], this.clear());
          return this._area = D, this;
        },
        // internal use functions
        _in: function(D) {
          return typeof D != "string" && (D = i.stringify(D)), this._ns ? this._ns + D : D;
        },
        _out: function(D) {
          return this._ns ? D && D.indexOf(this._ns) === 0 ? D.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            D
          );
        }
      },
      // end _.storeAPI
      storage: function(D) {
        return i.inherit(i.storageAPI, { items: {}, name: D });
      },
      storageAPI: {
        length: 0,
        has: function(D) {
          return this.items.hasOwnProperty(D);
        },
        key: function(D) {
          var E = 0;
          for (var c in this.items)
            if (this.has(c) && D === E++)
              return c;
        },
        setItem: function(D, E) {
          this.has(D) || this.length++, this.items[D] = E;
        },
        removeItem: function(D) {
          this.has(D) && (delete this.items[D], this.length--);
        },
        getItem: function(D) {
          return this.has(D) ? this.items[D] : null;
        },
        clear: function() {
          for (var D in this.items)
            this.removeItem(D);
        }
      }
      // end _.storageAPI
    }, o = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      i.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    o.local = o, o._ = i, o.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), o.area("page", i.storage("page")), typeof n == "function" && n.amd !== void 0 ? n("store2", [], function() {
      return o;
    }) : u.exports ? u.exports = o : (r.store && (i.conflict = r.store), r.store = o);
  })(Pu, Pu && Pu.define);
})(w8);
var Ce = Pu && Pu.__importDefault || function(u) {
  return u && u.__esModule ? u : { default: u };
};
const x8 = Ce(i8), b8 = Ce(he), _8 = Ce(Ee), J0 = b8.default.Buffer;
function Et(u) {
  return u = M8(u), (0, _8.default)("keccak256").update(u).digest();
}
function M8(u) {
  if (!J0.isBuffer(u))
    if (Array.isArray(u))
      u = J0.from(u);
    else if (typeof u == "string")
      I8(u) ? u = J0.from(ct(S8(u)), "hex") : u = J0.from(u);
    else if (typeof u == "number")
      u = T8(u);
    else if (u == null)
      u = J0.allocUnsafe(0);
    else if (x8.default.isBN(u))
      u = u.toArrayLike(J0);
    else if (u.toArray)
      u = J0.from(u.toArray());
    else
      throw new Error("invalid type");
  return u;
}
function I8(u, r) {
  return !(typeof u != "string" || !u.match(/^0x[0-9A-Fa-f]*$/));
}
function ct(u) {
  if (typeof u != "string")
    throw new Error(`while padding to even, value must be string, is currently ${typeof u}, while padToEven.`);
  return u.length % 2 && (u = `0${u}`), u;
}
function S8(u) {
  return typeof u != "string" ? u : U8(u) ? u.slice(2) : u;
}
function U8(u) {
  if (typeof u != "string")
    throw new Error("value must be type 'string', is currently type " + typeof u + ", while checking isHexPrefixed.");
  return u.slice(0, 2) === "0x";
}
function T8(u) {
  const r = O8(u);
  return J0.from(ct(r.slice(2)), "hex");
}
function O8(u) {
  return `0x${u.toString(16)}`;
}
typeof window < "u" && (window.keccak256 = Et);
var k8 = Et;
const Q7 = /* @__PURE__ */ at(k8);
var N8 = {}, e2 = {}, z1 = {}, q1 = {}, Ct = {}, Z1 = {};
Object.defineProperty(Z1, "__esModule", { value: !0 });
var dt = ot();
function P8(u) {
  return new Promise(function(r, n) {
    dt(u, function(i, o) {
      if (i) {
        n(i);
        return;
      }
      r(o);
    });
  });
}
Z1.getRandomBytes = P8;
function R8(u) {
  return dt(u);
}
Z1.getRandomBytesSync = R8;
(function(u) {
  var r = Pu && Pu.__awaiter || function(v, m, M, _) {
    function O(x) {
      return x instanceof M ? x : new M(function(k) {
        k(x);
      });
    }
    return new (M || (M = Promise))(function(x, k) {
      function g(I) {
        try {
          y(_.next(I));
        } catch (T) {
          k(T);
        }
      }
      function b(I) {
        try {
          y(_.throw(I));
        } catch (T) {
          k(T);
        }
      }
      function y(I) {
        I.done ? x(I.value) : O(I.value).then(g, b);
      }
      y((_ = _.apply(v, m || [])).next());
    });
  }, n = Pu && Pu.__generator || function(v, m) {
    var M = { label: 0, sent: function() {
      if (x[0] & 1)
        throw x[1];
      return x[1];
    }, trys: [], ops: [] }, _, O, x, k;
    return k = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function g(y) {
      return function(I) {
        return b([y, I]);
      };
    }
    function b(y) {
      if (_)
        throw new TypeError("Generator is already executing.");
      for (; M; )
        try {
          if (_ = 1, O && (x = y[0] & 2 ? O.return : y[0] ? O.throw || ((x = O.return) && x.call(O), 0) : O.next) && !(x = x.call(O, y[1])).done)
            return x;
          switch (O = 0, x && (y = [y[0] & 2, x.value]), y[0]) {
            case 0:
            case 1:
              x = y;
              break;
            case 4:
              return M.label++, { value: y[1], done: !1 };
            case 5:
              M.label++, O = y[1], y = [0];
              continue;
            case 7:
              y = M.ops.pop(), M.trys.pop();
              continue;
            default:
              if (x = M.trys, !(x = x.length > 0 && x[x.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                M = 0;
                continue;
              }
              if (y[0] === 3 && (!x || y[1] > x[0] && y[1] < x[3])) {
                M.label = y[1];
                break;
              }
              if (y[0] === 6 && M.label < x[1]) {
                M.label = x[1], x = y;
                break;
              }
              if (x && M.label < x[2]) {
                M.label = x[2], M.ops.push(y);
                break;
              }
              x[2] && M.ops.pop(), M.trys.pop();
              continue;
          }
          y = m.call(v, M);
        } catch (I) {
          y = [6, I], O = 0;
        } finally {
          _ = x = 0;
        }
      if (y[0] & 5)
        throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  function i(v) {
    for (var m in v)
      u.hasOwnProperty(m) || (u[m] = v[m]);
  }
  Object.defineProperty(u, "__esModule", { value: !0 });
  var o = O1, D = Z1, E = 32;
  function c() {
    return r(this, void 0, void 0, function() {
      var v;
      return n(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, D.getRandomBytes(E)];
          case 1:
            return v = m.sent(), o.privateKeyVerify(v) ? [2, v] : [3, 0];
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  u.createPrivateKey = c;
  function p() {
    for (; ; ) {
      var v = D.getRandomBytesSync(E);
      if (o.privateKeyVerify(v))
        return v;
    }
  }
  u.createPrivateKeySync = p, i(O1);
})(Ct);
var G2 = {}, de = { exports: {} };
de.exports;
(function(u) {
  (function(r, n) {
    function i(h, e) {
      if (!h)
        throw new Error(e || "Assertion failed");
    }
    function o(h, e) {
      h.super_ = e;
      var a = function() {
      };
      a.prototype = e.prototype, h.prototype = new a(), h.prototype.constructor = h;
    }
    function D(h, e, a) {
      if (D.isBN(h))
        return h;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, h !== null && ((e === "le" || e === "be") && (a = e, e = 10), this._init(h || 0, e || 10, a || "be"));
    }
    typeof r == "object" ? r.exports = D : n.BN = D, D.BN = D, D.wordSize = 26;
    var E;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? E = window.Buffer : E = he.Buffer;
    } catch {
    }
    D.isBN = function(e) {
      return e instanceof D ? !0 : e !== null && typeof e == "object" && e.constructor.wordSize === D.wordSize && Array.isArray(e.words);
    }, D.max = function(e, a) {
      return e.cmp(a) > 0 ? e : a;
    }, D.min = function(e, a) {
      return e.cmp(a) < 0 ? e : a;
    }, D.prototype._init = function(e, a, s) {
      if (typeof e == "number")
        return this._initNumber(e, a, s);
      if (typeof e == "object")
        return this._initArray(e, a, s);
      a === "hex" && (a = 16), i(a === (a | 0) && a >= 2 && a <= 36), e = e.toString().replace(/\s+/g, "");
      var f = 0;
      e[0] === "-" && (f++, this.negative = 1), f < e.length && (a === 16 ? this._parseHex(e, f, s) : (this._parseBase(e, a, f), s === "le" && this._initArray(this.toArray(), a, s)));
    }, D.prototype._initNumber = function(e, a, s) {
      e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [e & 67108863], this.length = 1) : e < 4503599627370496 ? (this.words = [
        e & 67108863,
        e / 67108864 & 67108863
      ], this.length = 2) : (i(e < 9007199254740992), this.words = [
        e & 67108863,
        e / 67108864 & 67108863,
        1
      ], this.length = 3), s === "le" && this._initArray(this.toArray(), a, s);
    }, D.prototype._initArray = function(e, a, s) {
      if (i(typeof e.length == "number"), e.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var A, C, B = 0;
      if (s === "be")
        for (f = e.length - 1, A = 0; f >= 0; f -= 3)
          C = e[f] | e[f - 1] << 8 | e[f - 2] << 16, this.words[A] |= C << B & 67108863, this.words[A + 1] = C >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, A++);
      else if (s === "le")
        for (f = 0, A = 0; f < e.length; f += 3)
          C = e[f] | e[f + 1] << 8 | e[f + 2] << 16, this.words[A] |= C << B & 67108863, this.words[A + 1] = C >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, A++);
      return this.strip();
    };
    function c(h, e) {
      var a = h.charCodeAt(e);
      return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
    }
    function p(h, e, a) {
      var s = c(h, a);
      return a - 1 >= e && (s |= c(h, a - 1) << 4), s;
    }
    D.prototype._parseHex = function(e, a, s) {
      this.length = Math.ceil((e.length - a) / 6), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var A = 0, C = 0, B;
      if (s === "be")
        for (f = e.length - 1; f >= a; f -= 2)
          B = p(e, a, f) << A, this.words[C] |= B & 67108863, A >= 18 ? (A -= 18, C += 1, this.words[C] |= B >>> 26) : A += 8;
      else {
        var F = e.length - a;
        for (f = F % 2 === 0 ? a + 1 : a; f < e.length; f += 2)
          B = p(e, a, f) << A, this.words[C] |= B & 67108863, A >= 18 ? (A -= 18, C += 1, this.words[C] |= B >>> 26) : A += 8;
      }
      this.strip();
    };
    function v(h, e, a, s) {
      for (var f = 0, A = Math.min(h.length, a), C = e; C < A; C++) {
        var B = h.charCodeAt(C) - 48;
        f *= s, B >= 49 ? f += B - 49 + 10 : B >= 17 ? f += B - 17 + 10 : f += B;
      }
      return f;
    }
    D.prototype._parseBase = function(e, a, s) {
      this.words = [0], this.length = 1;
      for (var f = 0, A = 1; A <= 67108863; A *= a)
        f++;
      f--, A = A / a | 0;
      for (var C = e.length - s, B = C % f, F = Math.min(C, C - B) + s, t = 0, l = s; l < F; l += f)
        t = v(e, l, l + f, a), this.imuln(A), this.words[0] + t < 67108864 ? this.words[0] += t : this._iaddn(t);
      if (B !== 0) {
        var R = 1;
        for (t = v(e, l, e.length, a), l = 0; l < B; l++)
          R *= a;
        this.imuln(R), this.words[0] + t < 67108864 ? this.words[0] += t : this._iaddn(t);
      }
      this.strip();
    }, D.prototype.copy = function(e) {
      e.words = new Array(this.length);
      for (var a = 0; a < this.length; a++)
        e.words[a] = this.words[a];
      e.length = this.length, e.negative = this.negative, e.red = this.red;
    }, D.prototype.clone = function() {
      var e = new D(null);
      return this.copy(e), e;
    }, D.prototype._expand = function(e) {
      for (; this.length < e; )
        this.words[this.length++] = 0;
      return this;
    }, D.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, D.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, D.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var m = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], M = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], _ = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    D.prototype.toString = function(e, a) {
      e = e || 10, a = a | 0 || 1;
      var s;
      if (e === 16 || e === "hex") {
        s = "";
        for (var f = 0, A = 0, C = 0; C < this.length; C++) {
          var B = this.words[C], F = ((B << f | A) & 16777215).toString(16);
          A = B >>> 24 - f & 16777215, A !== 0 || C !== this.length - 1 ? s = m[6 - F.length] + F + s : s = F + s, f += 2, f >= 26 && (f -= 26, C--);
        }
        for (A !== 0 && (s = A.toString(16) + s); s.length % a !== 0; )
          s = "0" + s;
        return this.negative !== 0 && (s = "-" + s), s;
      }
      if (e === (e | 0) && e >= 2 && e <= 36) {
        var t = M[e], l = _[e];
        s = "";
        var R = this.clone();
        for (R.negative = 0; !R.isZero(); ) {
          var L = R.modn(l).toString(e);
          R = R.idivn(l), R.isZero() ? s = L + s : s = m[t - L.length] + L + s;
        }
        for (this.isZero() && (s = "0" + s); s.length % a !== 0; )
          s = "0" + s;
        return this.negative !== 0 && (s = "-" + s), s;
      }
      i(!1, "Base should be between 2 and 36");
    }, D.prototype.toNumber = function() {
      var e = this.words[0];
      return this.length === 2 ? e += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? e += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -e : e;
    }, D.prototype.toJSON = function() {
      return this.toString(16);
    }, D.prototype.toBuffer = function(e, a) {
      return i(typeof E < "u"), this.toArrayLike(E, e, a);
    }, D.prototype.toArray = function(e, a) {
      return this.toArrayLike(Array, e, a);
    }, D.prototype.toArrayLike = function(e, a, s) {
      var f = this.byteLength(), A = s || Math.max(1, f);
      i(f <= A, "byte array longer than desired length"), i(A > 0, "Requested array length <= 0"), this.strip();
      var C = a === "le", B = new e(A), F, t, l = this.clone();
      if (C) {
        for (t = 0; !l.isZero(); t++)
          F = l.andln(255), l.iushrn(8), B[t] = F;
        for (; t < A; t++)
          B[t] = 0;
      } else {
        for (t = 0; t < A - f; t++)
          B[t] = 0;
        for (t = 0; !l.isZero(); t++)
          F = l.andln(255), l.iushrn(8), B[A - t - 1] = F;
      }
      return B;
    }, Math.clz32 ? D.prototype._countBits = function(e) {
      return 32 - Math.clz32(e);
    } : D.prototype._countBits = function(e) {
      var a = e, s = 0;
      return a >= 4096 && (s += 13, a >>>= 13), a >= 64 && (s += 7, a >>>= 7), a >= 8 && (s += 4, a >>>= 4), a >= 2 && (s += 2, a >>>= 2), s + a;
    }, D.prototype._zeroBits = function(e) {
      if (e === 0)
        return 26;
      var a = e, s = 0;
      return a & 8191 || (s += 13, a >>>= 13), a & 127 || (s += 7, a >>>= 7), a & 15 || (s += 4, a >>>= 4), a & 3 || (s += 2, a >>>= 2), a & 1 || s++, s;
    }, D.prototype.bitLength = function() {
      var e = this.words[this.length - 1], a = this._countBits(e);
      return (this.length - 1) * 26 + a;
    };
    function O(h) {
      for (var e = new Array(h.bitLength()), a = 0; a < e.length; a++) {
        var s = a / 26 | 0, f = a % 26;
        e[a] = (h.words[s] & 1 << f) >>> f;
      }
      return e;
    }
    D.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var e = 0, a = 0; a < this.length; a++) {
        var s = this._zeroBits(this.words[a]);
        if (e += s, s !== 26)
          break;
      }
      return e;
    }, D.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, D.prototype.toTwos = function(e) {
      return this.negative !== 0 ? this.abs().inotn(e).iaddn(1) : this.clone();
    }, D.prototype.fromTwos = function(e) {
      return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
    }, D.prototype.isNeg = function() {
      return this.negative !== 0;
    }, D.prototype.neg = function() {
      return this.clone().ineg();
    }, D.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, D.prototype.iuor = function(e) {
      for (; this.length < e.length; )
        this.words[this.length++] = 0;
      for (var a = 0; a < e.length; a++)
        this.words[a] = this.words[a] | e.words[a];
      return this.strip();
    }, D.prototype.ior = function(e) {
      return i((this.negative | e.negative) === 0), this.iuor(e);
    }, D.prototype.or = function(e) {
      return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
    }, D.prototype.uor = function(e) {
      return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
    }, D.prototype.iuand = function(e) {
      var a;
      this.length > e.length ? a = e : a = this;
      for (var s = 0; s < a.length; s++)
        this.words[s] = this.words[s] & e.words[s];
      return this.length = a.length, this.strip();
    }, D.prototype.iand = function(e) {
      return i((this.negative | e.negative) === 0), this.iuand(e);
    }, D.prototype.and = function(e) {
      return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
    }, D.prototype.uand = function(e) {
      return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
    }, D.prototype.iuxor = function(e) {
      var a, s;
      this.length > e.length ? (a = this, s = e) : (a = e, s = this);
      for (var f = 0; f < s.length; f++)
        this.words[f] = a.words[f] ^ s.words[f];
      if (this !== a)
        for (; f < a.length; f++)
          this.words[f] = a.words[f];
      return this.length = a.length, this.strip();
    }, D.prototype.ixor = function(e) {
      return i((this.negative | e.negative) === 0), this.iuxor(e);
    }, D.prototype.xor = function(e) {
      return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
    }, D.prototype.uxor = function(e) {
      return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
    }, D.prototype.inotn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = Math.ceil(e / 26) | 0, s = e % 26;
      this._expand(a), s > 0 && a--;
      for (var f = 0; f < a; f++)
        this.words[f] = ~this.words[f] & 67108863;
      return s > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - s), this.strip();
    }, D.prototype.notn = function(e) {
      return this.clone().inotn(e);
    }, D.prototype.setn = function(e, a) {
      i(typeof e == "number" && e >= 0);
      var s = e / 26 | 0, f = e % 26;
      return this._expand(s + 1), a ? this.words[s] = this.words[s] | 1 << f : this.words[s] = this.words[s] & ~(1 << f), this.strip();
    }, D.prototype.iadd = function(e) {
      var a;
      if (this.negative !== 0 && e.negative === 0)
        return this.negative = 0, a = this.isub(e), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && e.negative !== 0)
        return e.negative = 0, a = this.isub(e), e.negative = 1, a._normSign();
      var s, f;
      this.length > e.length ? (s = this, f = e) : (s = e, f = this);
      for (var A = 0, C = 0; C < f.length; C++)
        a = (s.words[C] | 0) + (f.words[C] | 0) + A, this.words[C] = a & 67108863, A = a >>> 26;
      for (; A !== 0 && C < s.length; C++)
        a = (s.words[C] | 0) + A, this.words[C] = a & 67108863, A = a >>> 26;
      if (this.length = s.length, A !== 0)
        this.words[this.length] = A, this.length++;
      else if (s !== this)
        for (; C < s.length; C++)
          this.words[C] = s.words[C];
      return this;
    }, D.prototype.add = function(e) {
      var a;
      return e.negative !== 0 && this.negative === 0 ? (e.negative = 0, a = this.sub(e), e.negative ^= 1, a) : e.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = e.sub(this), this.negative = 1, a) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
    }, D.prototype.isub = function(e) {
      if (e.negative !== 0) {
        e.negative = 0;
        var a = this.iadd(e);
        return e.negative = 1, a._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
      var s = this.cmp(e);
      if (s === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var f, A;
      s > 0 ? (f = this, A = e) : (f = e, A = this);
      for (var C = 0, B = 0; B < A.length; B++)
        a = (f.words[B] | 0) - (A.words[B] | 0) + C, C = a >> 26, this.words[B] = a & 67108863;
      for (; C !== 0 && B < f.length; B++)
        a = (f.words[B] | 0) + C, C = a >> 26, this.words[B] = a & 67108863;
      if (C === 0 && B < f.length && f !== this)
        for (; B < f.length; B++)
          this.words[B] = f.words[B];
      return this.length = Math.max(this.length, B), f !== this && (this.negative = 1), this.strip();
    }, D.prototype.sub = function(e) {
      return this.clone().isub(e);
    };
    function x(h, e, a) {
      a.negative = e.negative ^ h.negative;
      var s = h.length + e.length | 0;
      a.length = s, s = s - 1 | 0;
      var f = h.words[0] | 0, A = e.words[0] | 0, C = f * A, B = C & 67108863, F = C / 67108864 | 0;
      a.words[0] = B;
      for (var t = 1; t < s; t++) {
        for (var l = F >>> 26, R = F & 67108863, L = Math.min(t, e.length - 1), H = Math.max(0, t - h.length + 1); H <= L; H++) {
          var d = t - H | 0;
          f = h.words[d] | 0, A = e.words[H] | 0, C = f * A + R, l += C / 67108864 | 0, R = C & 67108863;
        }
        a.words[t] = R | 0, F = l | 0;
      }
      return F !== 0 ? a.words[t] = F | 0 : a.length--, a.strip();
    }
    var k = function(e, a, s) {
      var f = e.words, A = a.words, C = s.words, B = 0, F, t, l, R = f[0] | 0, L = R & 8191, H = R >>> 13, d = f[1] | 0, $ = d & 8191, j = d >>> 13, iu = f[2] | 0, X = iu & 8191, ru = iu >>> 13, Ru = f[3] | 0, eu = Ru & 8191, W = Ru >>> 13, $u = f[4] | 0, hu = $u & 8191, Eu = $u >>> 13, f0 = f[5] | 0, cu = f0 & 8191, Cu = f0 >>> 13, e0 = f[6] | 0, K = e0 & 8191, pu = e0 >>> 13, w = f[7] | 0, U = w & 8191, P = w >>> 13, Y = f[8] | 0, G = Y & 8191, V = Y >>> 13, tu = f[9] | 0, z = tu & 8191, Q = tu >>> 13, lu = A[0] | 0, su = lu & 8191, fu = lu >>> 13, ju = A[1] | 0, ou = ju & 8191, Fu = ju >>> 13, t0 = A[2] | 0, Au = t0 & 8191, du = t0 >>> 13, _0 = A[3] | 0, mu = _0 & 8191, yu = _0 >>> 13, M0 = A[4] | 0, gu = M0 & 8191, wu = M0 >>> 13, I0 = A[5] | 0, xu = I0 & 8191, bu = I0 >>> 13, S0 = A[6] | 0, _u = S0 & 8191, Mu = S0 >>> 13, U0 = A[7] | 0, Iu = U0 & 8191, Su = U0 >>> 13, T0 = A[8] | 0, Uu = T0 & 8191, Tu = T0 >>> 13, O0 = A[9] | 0, Ou = O0 & 8191, ku = O0 >>> 13;
      s.negative = e.negative ^ a.negative, s.length = 19, F = Math.imul(L, su), t = Math.imul(L, fu), t = t + Math.imul(H, su) | 0, l = Math.imul(H, fu);
      var F0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (F0 >>> 26) | 0, F0 &= 67108863, F = Math.imul($, su), t = Math.imul($, fu), t = t + Math.imul(j, su) | 0, l = Math.imul(j, fu), F = F + Math.imul(L, ou) | 0, t = t + Math.imul(L, Fu) | 0, t = t + Math.imul(H, ou) | 0, l = l + Math.imul(H, Fu) | 0;
      var l0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (l0 >>> 26) | 0, l0 &= 67108863, F = Math.imul(X, su), t = Math.imul(X, fu), t = t + Math.imul(ru, su) | 0, l = Math.imul(ru, fu), F = F + Math.imul($, ou) | 0, t = t + Math.imul($, Fu) | 0, t = t + Math.imul(j, ou) | 0, l = l + Math.imul(j, Fu) | 0, F = F + Math.imul(L, Au) | 0, t = t + Math.imul(L, du) | 0, t = t + Math.imul(H, Au) | 0, l = l + Math.imul(H, du) | 0;
      var A0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (A0 >>> 26) | 0, A0 &= 67108863, F = Math.imul(eu, su), t = Math.imul(eu, fu), t = t + Math.imul(W, su) | 0, l = Math.imul(W, fu), F = F + Math.imul(X, ou) | 0, t = t + Math.imul(X, Fu) | 0, t = t + Math.imul(ru, ou) | 0, l = l + Math.imul(ru, Fu) | 0, F = F + Math.imul($, Au) | 0, t = t + Math.imul($, du) | 0, t = t + Math.imul(j, Au) | 0, l = l + Math.imul(j, du) | 0, F = F + Math.imul(L, mu) | 0, t = t + Math.imul(L, yu) | 0, t = t + Math.imul(H, mu) | 0, l = l + Math.imul(H, yu) | 0;
      var h0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (h0 >>> 26) | 0, h0 &= 67108863, F = Math.imul(hu, su), t = Math.imul(hu, fu), t = t + Math.imul(Eu, su) | 0, l = Math.imul(Eu, fu), F = F + Math.imul(eu, ou) | 0, t = t + Math.imul(eu, Fu) | 0, t = t + Math.imul(W, ou) | 0, l = l + Math.imul(W, Fu) | 0, F = F + Math.imul(X, Au) | 0, t = t + Math.imul(X, du) | 0, t = t + Math.imul(ru, Au) | 0, l = l + Math.imul(ru, du) | 0, F = F + Math.imul($, mu) | 0, t = t + Math.imul($, yu) | 0, t = t + Math.imul(j, mu) | 0, l = l + Math.imul(j, yu) | 0, F = F + Math.imul(L, gu) | 0, t = t + Math.imul(L, wu) | 0, t = t + Math.imul(H, gu) | 0, l = l + Math.imul(H, wu) | 0;
      var E0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (E0 >>> 26) | 0, E0 &= 67108863, F = Math.imul(cu, su), t = Math.imul(cu, fu), t = t + Math.imul(Cu, su) | 0, l = Math.imul(Cu, fu), F = F + Math.imul(hu, ou) | 0, t = t + Math.imul(hu, Fu) | 0, t = t + Math.imul(Eu, ou) | 0, l = l + Math.imul(Eu, Fu) | 0, F = F + Math.imul(eu, Au) | 0, t = t + Math.imul(eu, du) | 0, t = t + Math.imul(W, Au) | 0, l = l + Math.imul(W, du) | 0, F = F + Math.imul(X, mu) | 0, t = t + Math.imul(X, yu) | 0, t = t + Math.imul(ru, mu) | 0, l = l + Math.imul(ru, yu) | 0, F = F + Math.imul($, gu) | 0, t = t + Math.imul($, wu) | 0, t = t + Math.imul(j, gu) | 0, l = l + Math.imul(j, wu) | 0, F = F + Math.imul(L, xu) | 0, t = t + Math.imul(L, bu) | 0, t = t + Math.imul(H, xu) | 0, l = l + Math.imul(H, bu) | 0;
      var c0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (c0 >>> 26) | 0, c0 &= 67108863, F = Math.imul(K, su), t = Math.imul(K, fu), t = t + Math.imul(pu, su) | 0, l = Math.imul(pu, fu), F = F + Math.imul(cu, ou) | 0, t = t + Math.imul(cu, Fu) | 0, t = t + Math.imul(Cu, ou) | 0, l = l + Math.imul(Cu, Fu) | 0, F = F + Math.imul(hu, Au) | 0, t = t + Math.imul(hu, du) | 0, t = t + Math.imul(Eu, Au) | 0, l = l + Math.imul(Eu, du) | 0, F = F + Math.imul(eu, mu) | 0, t = t + Math.imul(eu, yu) | 0, t = t + Math.imul(W, mu) | 0, l = l + Math.imul(W, yu) | 0, F = F + Math.imul(X, gu) | 0, t = t + Math.imul(X, wu) | 0, t = t + Math.imul(ru, gu) | 0, l = l + Math.imul(ru, wu) | 0, F = F + Math.imul($, xu) | 0, t = t + Math.imul($, bu) | 0, t = t + Math.imul(j, xu) | 0, l = l + Math.imul(j, bu) | 0, F = F + Math.imul(L, _u) | 0, t = t + Math.imul(L, Mu) | 0, t = t + Math.imul(H, _u) | 0, l = l + Math.imul(H, Mu) | 0;
      var C0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (C0 >>> 26) | 0, C0 &= 67108863, F = Math.imul(U, su), t = Math.imul(U, fu), t = t + Math.imul(P, su) | 0, l = Math.imul(P, fu), F = F + Math.imul(K, ou) | 0, t = t + Math.imul(K, Fu) | 0, t = t + Math.imul(pu, ou) | 0, l = l + Math.imul(pu, Fu) | 0, F = F + Math.imul(cu, Au) | 0, t = t + Math.imul(cu, du) | 0, t = t + Math.imul(Cu, Au) | 0, l = l + Math.imul(Cu, du) | 0, F = F + Math.imul(hu, mu) | 0, t = t + Math.imul(hu, yu) | 0, t = t + Math.imul(Eu, mu) | 0, l = l + Math.imul(Eu, yu) | 0, F = F + Math.imul(eu, gu) | 0, t = t + Math.imul(eu, wu) | 0, t = t + Math.imul(W, gu) | 0, l = l + Math.imul(W, wu) | 0, F = F + Math.imul(X, xu) | 0, t = t + Math.imul(X, bu) | 0, t = t + Math.imul(ru, xu) | 0, l = l + Math.imul(ru, bu) | 0, F = F + Math.imul($, _u) | 0, t = t + Math.imul($, Mu) | 0, t = t + Math.imul(j, _u) | 0, l = l + Math.imul(j, Mu) | 0, F = F + Math.imul(L, Iu) | 0, t = t + Math.imul(L, Su) | 0, t = t + Math.imul(H, Iu) | 0, l = l + Math.imul(H, Su) | 0;
      var o2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (o2 >>> 26) | 0, o2 &= 67108863, F = Math.imul(G, su), t = Math.imul(G, fu), t = t + Math.imul(V, su) | 0, l = Math.imul(V, fu), F = F + Math.imul(U, ou) | 0, t = t + Math.imul(U, Fu) | 0, t = t + Math.imul(P, ou) | 0, l = l + Math.imul(P, Fu) | 0, F = F + Math.imul(K, Au) | 0, t = t + Math.imul(K, du) | 0, t = t + Math.imul(pu, Au) | 0, l = l + Math.imul(pu, du) | 0, F = F + Math.imul(cu, mu) | 0, t = t + Math.imul(cu, yu) | 0, t = t + Math.imul(Cu, mu) | 0, l = l + Math.imul(Cu, yu) | 0, F = F + Math.imul(hu, gu) | 0, t = t + Math.imul(hu, wu) | 0, t = t + Math.imul(Eu, gu) | 0, l = l + Math.imul(Eu, wu) | 0, F = F + Math.imul(eu, xu) | 0, t = t + Math.imul(eu, bu) | 0, t = t + Math.imul(W, xu) | 0, l = l + Math.imul(W, bu) | 0, F = F + Math.imul(X, _u) | 0, t = t + Math.imul(X, Mu) | 0, t = t + Math.imul(ru, _u) | 0, l = l + Math.imul(ru, Mu) | 0, F = F + Math.imul($, Iu) | 0, t = t + Math.imul($, Su) | 0, t = t + Math.imul(j, Iu) | 0, l = l + Math.imul(j, Su) | 0, F = F + Math.imul(L, Uu) | 0, t = t + Math.imul(L, Tu) | 0, t = t + Math.imul(H, Uu) | 0, l = l + Math.imul(H, Tu) | 0;
      var s2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (s2 >>> 26) | 0, s2 &= 67108863, F = Math.imul(z, su), t = Math.imul(z, fu), t = t + Math.imul(Q, su) | 0, l = Math.imul(Q, fu), F = F + Math.imul(G, ou) | 0, t = t + Math.imul(G, Fu) | 0, t = t + Math.imul(V, ou) | 0, l = l + Math.imul(V, Fu) | 0, F = F + Math.imul(U, Au) | 0, t = t + Math.imul(U, du) | 0, t = t + Math.imul(P, Au) | 0, l = l + Math.imul(P, du) | 0, F = F + Math.imul(K, mu) | 0, t = t + Math.imul(K, yu) | 0, t = t + Math.imul(pu, mu) | 0, l = l + Math.imul(pu, yu) | 0, F = F + Math.imul(cu, gu) | 0, t = t + Math.imul(cu, wu) | 0, t = t + Math.imul(Cu, gu) | 0, l = l + Math.imul(Cu, wu) | 0, F = F + Math.imul(hu, xu) | 0, t = t + Math.imul(hu, bu) | 0, t = t + Math.imul(Eu, xu) | 0, l = l + Math.imul(Eu, bu) | 0, F = F + Math.imul(eu, _u) | 0, t = t + Math.imul(eu, Mu) | 0, t = t + Math.imul(W, _u) | 0, l = l + Math.imul(W, Mu) | 0, F = F + Math.imul(X, Iu) | 0, t = t + Math.imul(X, Su) | 0, t = t + Math.imul(ru, Iu) | 0, l = l + Math.imul(ru, Su) | 0, F = F + Math.imul($, Uu) | 0, t = t + Math.imul($, Tu) | 0, t = t + Math.imul(j, Uu) | 0, l = l + Math.imul(j, Tu) | 0, F = F + Math.imul(L, Ou) | 0, t = t + Math.imul(L, ku) | 0, t = t + Math.imul(H, Ou) | 0, l = l + Math.imul(H, ku) | 0;
      var f2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (f2 >>> 26) | 0, f2 &= 67108863, F = Math.imul(z, ou), t = Math.imul(z, Fu), t = t + Math.imul(Q, ou) | 0, l = Math.imul(Q, Fu), F = F + Math.imul(G, Au) | 0, t = t + Math.imul(G, du) | 0, t = t + Math.imul(V, Au) | 0, l = l + Math.imul(V, du) | 0, F = F + Math.imul(U, mu) | 0, t = t + Math.imul(U, yu) | 0, t = t + Math.imul(P, mu) | 0, l = l + Math.imul(P, yu) | 0, F = F + Math.imul(K, gu) | 0, t = t + Math.imul(K, wu) | 0, t = t + Math.imul(pu, gu) | 0, l = l + Math.imul(pu, wu) | 0, F = F + Math.imul(cu, xu) | 0, t = t + Math.imul(cu, bu) | 0, t = t + Math.imul(Cu, xu) | 0, l = l + Math.imul(Cu, bu) | 0, F = F + Math.imul(hu, _u) | 0, t = t + Math.imul(hu, Mu) | 0, t = t + Math.imul(Eu, _u) | 0, l = l + Math.imul(Eu, Mu) | 0, F = F + Math.imul(eu, Iu) | 0, t = t + Math.imul(eu, Su) | 0, t = t + Math.imul(W, Iu) | 0, l = l + Math.imul(W, Su) | 0, F = F + Math.imul(X, Uu) | 0, t = t + Math.imul(X, Tu) | 0, t = t + Math.imul(ru, Uu) | 0, l = l + Math.imul(ru, Tu) | 0, F = F + Math.imul($, Ou) | 0, t = t + Math.imul($, ku) | 0, t = t + Math.imul(j, Ou) | 0, l = l + Math.imul(j, ku) | 0;
      var F2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (F2 >>> 26) | 0, F2 &= 67108863, F = Math.imul(z, Au), t = Math.imul(z, du), t = t + Math.imul(Q, Au) | 0, l = Math.imul(Q, du), F = F + Math.imul(G, mu) | 0, t = t + Math.imul(G, yu) | 0, t = t + Math.imul(V, mu) | 0, l = l + Math.imul(V, yu) | 0, F = F + Math.imul(U, gu) | 0, t = t + Math.imul(U, wu) | 0, t = t + Math.imul(P, gu) | 0, l = l + Math.imul(P, wu) | 0, F = F + Math.imul(K, xu) | 0, t = t + Math.imul(K, bu) | 0, t = t + Math.imul(pu, xu) | 0, l = l + Math.imul(pu, bu) | 0, F = F + Math.imul(cu, _u) | 0, t = t + Math.imul(cu, Mu) | 0, t = t + Math.imul(Cu, _u) | 0, l = l + Math.imul(Cu, Mu) | 0, F = F + Math.imul(hu, Iu) | 0, t = t + Math.imul(hu, Su) | 0, t = t + Math.imul(Eu, Iu) | 0, l = l + Math.imul(Eu, Su) | 0, F = F + Math.imul(eu, Uu) | 0, t = t + Math.imul(eu, Tu) | 0, t = t + Math.imul(W, Uu) | 0, l = l + Math.imul(W, Tu) | 0, F = F + Math.imul(X, Ou) | 0, t = t + Math.imul(X, ku) | 0, t = t + Math.imul(ru, Ou) | 0, l = l + Math.imul(ru, ku) | 0;
      var l2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (l2 >>> 26) | 0, l2 &= 67108863, F = Math.imul(z, mu), t = Math.imul(z, yu), t = t + Math.imul(Q, mu) | 0, l = Math.imul(Q, yu), F = F + Math.imul(G, gu) | 0, t = t + Math.imul(G, wu) | 0, t = t + Math.imul(V, gu) | 0, l = l + Math.imul(V, wu) | 0, F = F + Math.imul(U, xu) | 0, t = t + Math.imul(U, bu) | 0, t = t + Math.imul(P, xu) | 0, l = l + Math.imul(P, bu) | 0, F = F + Math.imul(K, _u) | 0, t = t + Math.imul(K, Mu) | 0, t = t + Math.imul(pu, _u) | 0, l = l + Math.imul(pu, Mu) | 0, F = F + Math.imul(cu, Iu) | 0, t = t + Math.imul(cu, Su) | 0, t = t + Math.imul(Cu, Iu) | 0, l = l + Math.imul(Cu, Su) | 0, F = F + Math.imul(hu, Uu) | 0, t = t + Math.imul(hu, Tu) | 0, t = t + Math.imul(Eu, Uu) | 0, l = l + Math.imul(Eu, Tu) | 0, F = F + Math.imul(eu, Ou) | 0, t = t + Math.imul(eu, ku) | 0, t = t + Math.imul(W, Ou) | 0, l = l + Math.imul(W, ku) | 0;
      var A2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (A2 >>> 26) | 0, A2 &= 67108863, F = Math.imul(z, gu), t = Math.imul(z, wu), t = t + Math.imul(Q, gu) | 0, l = Math.imul(Q, wu), F = F + Math.imul(G, xu) | 0, t = t + Math.imul(G, bu) | 0, t = t + Math.imul(V, xu) | 0, l = l + Math.imul(V, bu) | 0, F = F + Math.imul(U, _u) | 0, t = t + Math.imul(U, Mu) | 0, t = t + Math.imul(P, _u) | 0, l = l + Math.imul(P, Mu) | 0, F = F + Math.imul(K, Iu) | 0, t = t + Math.imul(K, Su) | 0, t = t + Math.imul(pu, Iu) | 0, l = l + Math.imul(pu, Su) | 0, F = F + Math.imul(cu, Uu) | 0, t = t + Math.imul(cu, Tu) | 0, t = t + Math.imul(Cu, Uu) | 0, l = l + Math.imul(Cu, Tu) | 0, F = F + Math.imul(hu, Ou) | 0, t = t + Math.imul(hu, ku) | 0, t = t + Math.imul(Eu, Ou) | 0, l = l + Math.imul(Eu, ku) | 0;
      var h2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (h2 >>> 26) | 0, h2 &= 67108863, F = Math.imul(z, xu), t = Math.imul(z, bu), t = t + Math.imul(Q, xu) | 0, l = Math.imul(Q, bu), F = F + Math.imul(G, _u) | 0, t = t + Math.imul(G, Mu) | 0, t = t + Math.imul(V, _u) | 0, l = l + Math.imul(V, Mu) | 0, F = F + Math.imul(U, Iu) | 0, t = t + Math.imul(U, Su) | 0, t = t + Math.imul(P, Iu) | 0, l = l + Math.imul(P, Su) | 0, F = F + Math.imul(K, Uu) | 0, t = t + Math.imul(K, Tu) | 0, t = t + Math.imul(pu, Uu) | 0, l = l + Math.imul(pu, Tu) | 0, F = F + Math.imul(cu, Ou) | 0, t = t + Math.imul(cu, ku) | 0, t = t + Math.imul(Cu, Ou) | 0, l = l + Math.imul(Cu, ku) | 0;
      var E2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (E2 >>> 26) | 0, E2 &= 67108863, F = Math.imul(z, _u), t = Math.imul(z, Mu), t = t + Math.imul(Q, _u) | 0, l = Math.imul(Q, Mu), F = F + Math.imul(G, Iu) | 0, t = t + Math.imul(G, Su) | 0, t = t + Math.imul(V, Iu) | 0, l = l + Math.imul(V, Su) | 0, F = F + Math.imul(U, Uu) | 0, t = t + Math.imul(U, Tu) | 0, t = t + Math.imul(P, Uu) | 0, l = l + Math.imul(P, Tu) | 0, F = F + Math.imul(K, Ou) | 0, t = t + Math.imul(K, ku) | 0, t = t + Math.imul(pu, Ou) | 0, l = l + Math.imul(pu, ku) | 0;
      var c2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (c2 >>> 26) | 0, c2 &= 67108863, F = Math.imul(z, Iu), t = Math.imul(z, Su), t = t + Math.imul(Q, Iu) | 0, l = Math.imul(Q, Su), F = F + Math.imul(G, Uu) | 0, t = t + Math.imul(G, Tu) | 0, t = t + Math.imul(V, Uu) | 0, l = l + Math.imul(V, Tu) | 0, F = F + Math.imul(U, Ou) | 0, t = t + Math.imul(U, ku) | 0, t = t + Math.imul(P, Ou) | 0, l = l + Math.imul(P, ku) | 0;
      var C2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (C2 >>> 26) | 0, C2 &= 67108863, F = Math.imul(z, Uu), t = Math.imul(z, Tu), t = t + Math.imul(Q, Uu) | 0, l = Math.imul(Q, Tu), F = F + Math.imul(G, Ou) | 0, t = t + Math.imul(G, ku) | 0, t = t + Math.imul(V, Ou) | 0, l = l + Math.imul(V, ku) | 0;
      var d2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (d2 >>> 26) | 0, d2 &= 67108863, F = Math.imul(z, Ou), t = Math.imul(z, ku), t = t + Math.imul(Q, Ou) | 0, l = Math.imul(Q, ku);
      var p2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      return B = (l + (t >>> 13) | 0) + (p2 >>> 26) | 0, p2 &= 67108863, C[0] = F0, C[1] = l0, C[2] = A0, C[3] = h0, C[4] = E0, C[5] = c0, C[6] = C0, C[7] = o2, C[8] = s2, C[9] = f2, C[10] = F2, C[11] = l2, C[12] = A2, C[13] = h2, C[14] = E2, C[15] = c2, C[16] = C2, C[17] = d2, C[18] = p2, B !== 0 && (C[19] = B, s.length++), s;
    };
    Math.imul || (k = x);
    function g(h, e, a) {
      a.negative = e.negative ^ h.negative, a.length = h.length + e.length;
      for (var s = 0, f = 0, A = 0; A < a.length - 1; A++) {
        var C = f;
        f = 0;
        for (var B = s & 67108863, F = Math.min(A, e.length - 1), t = Math.max(0, A - h.length + 1); t <= F; t++) {
          var l = A - t, R = h.words[l] | 0, L = e.words[t] | 0, H = R * L, d = H & 67108863;
          C = C + (H / 67108864 | 0) | 0, d = d + B | 0, B = d & 67108863, C = C + (d >>> 26) | 0, f += C >>> 26, C &= 67108863;
        }
        a.words[A] = B, s = C, C = f;
      }
      return s !== 0 ? a.words[A] = s : a.length--, a.strip();
    }
    function b(h, e, a) {
      var s = new y();
      return s.mulp(h, e, a);
    }
    D.prototype.mulTo = function(e, a) {
      var s, f = this.length + e.length;
      return this.length === 10 && e.length === 10 ? s = k(this, e, a) : f < 63 ? s = x(this, e, a) : f < 1024 ? s = g(this, e, a) : s = b(this, e, a), s;
    };
    function y(h, e) {
      this.x = h, this.y = e;
    }
    y.prototype.makeRBT = function(e) {
      for (var a = new Array(e), s = D.prototype._countBits(e) - 1, f = 0; f < e; f++)
        a[f] = this.revBin(f, s, e);
      return a;
    }, y.prototype.revBin = function(e, a, s) {
      if (e === 0 || e === s - 1)
        return e;
      for (var f = 0, A = 0; A < a; A++)
        f |= (e & 1) << a - A - 1, e >>= 1;
      return f;
    }, y.prototype.permute = function(e, a, s, f, A, C) {
      for (var B = 0; B < C; B++)
        f[B] = a[e[B]], A[B] = s[e[B]];
    }, y.prototype.transform = function(e, a, s, f, A, C) {
      this.permute(C, e, a, s, f, A);
      for (var B = 1; B < A; B <<= 1)
        for (var F = B << 1, t = Math.cos(2 * Math.PI / F), l = Math.sin(2 * Math.PI / F), R = 0; R < A; R += F)
          for (var L = t, H = l, d = 0; d < B; d++) {
            var $ = s[R + d], j = f[R + d], iu = s[R + d + B], X = f[R + d + B], ru = L * iu - H * X;
            X = L * X + H * iu, iu = ru, s[R + d] = $ + iu, f[R + d] = j + X, s[R + d + B] = $ - iu, f[R + d + B] = j - X, d !== F && (ru = t * L - l * H, H = t * H + l * L, L = ru);
          }
    }, y.prototype.guessLen13b = function(e, a) {
      var s = Math.max(a, e) | 1, f = s & 1, A = 0;
      for (s = s / 2 | 0; s; s = s >>> 1)
        A++;
      return 1 << A + 1 + f;
    }, y.prototype.conjugate = function(e, a, s) {
      if (!(s <= 1))
        for (var f = 0; f < s / 2; f++) {
          var A = e[f];
          e[f] = e[s - f - 1], e[s - f - 1] = A, A = a[f], a[f] = -a[s - f - 1], a[s - f - 1] = -A;
        }
    }, y.prototype.normalize13b = function(e, a) {
      for (var s = 0, f = 0; f < a / 2; f++) {
        var A = Math.round(e[2 * f + 1] / a) * 8192 + Math.round(e[2 * f] / a) + s;
        e[f] = A & 67108863, A < 67108864 ? s = 0 : s = A / 67108864 | 0;
      }
      return e;
    }, y.prototype.convert13b = function(e, a, s, f) {
      for (var A = 0, C = 0; C < a; C++)
        A = A + (e[C] | 0), s[2 * C] = A & 8191, A = A >>> 13, s[2 * C + 1] = A & 8191, A = A >>> 13;
      for (C = 2 * a; C < f; ++C)
        s[C] = 0;
      i(A === 0), i((A & -8192) === 0);
    }, y.prototype.stub = function(e) {
      for (var a = new Array(e), s = 0; s < e; s++)
        a[s] = 0;
      return a;
    }, y.prototype.mulp = function(e, a, s) {
      var f = 2 * this.guessLen13b(e.length, a.length), A = this.makeRBT(f), C = this.stub(f), B = new Array(f), F = new Array(f), t = new Array(f), l = new Array(f), R = new Array(f), L = new Array(f), H = s.words;
      H.length = f, this.convert13b(e.words, e.length, B, f), this.convert13b(a.words, a.length, l, f), this.transform(B, C, F, t, f, A), this.transform(l, C, R, L, f, A);
      for (var d = 0; d < f; d++) {
        var $ = F[d] * R[d] - t[d] * L[d];
        t[d] = F[d] * L[d] + t[d] * R[d], F[d] = $;
      }
      return this.conjugate(F, t, f), this.transform(F, t, H, C, f, A), this.conjugate(H, C, f), this.normalize13b(H, f), s.negative = e.negative ^ a.negative, s.length = e.length + a.length, s.strip();
    }, D.prototype.mul = function(e) {
      var a = new D(null);
      return a.words = new Array(this.length + e.length), this.mulTo(e, a);
    }, D.prototype.mulf = function(e) {
      var a = new D(null);
      return a.words = new Array(this.length + e.length), b(this, e, a);
    }, D.prototype.imul = function(e) {
      return this.clone().mulTo(e, this);
    }, D.prototype.imuln = function(e) {
      i(typeof e == "number"), i(e < 67108864);
      for (var a = 0, s = 0; s < this.length; s++) {
        var f = (this.words[s] | 0) * e, A = (f & 67108863) + (a & 67108863);
        a >>= 26, a += f / 67108864 | 0, a += A >>> 26, this.words[s] = A & 67108863;
      }
      return a !== 0 && (this.words[s] = a, this.length++), this;
    }, D.prototype.muln = function(e) {
      return this.clone().imuln(e);
    }, D.prototype.sqr = function() {
      return this.mul(this);
    }, D.prototype.isqr = function() {
      return this.imul(this.clone());
    }, D.prototype.pow = function(e) {
      var a = O(e);
      if (a.length === 0)
        return new D(1);
      for (var s = this, f = 0; f < a.length && a[f] === 0; f++, s = s.sqr())
        ;
      if (++f < a.length)
        for (var A = s.sqr(); f < a.length; f++, A = A.sqr())
          a[f] !== 0 && (s = s.mul(A));
      return s;
    }, D.prototype.iushln = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26, f = 67108863 >>> 26 - a << 26 - a, A;
      if (a !== 0) {
        var C = 0;
        for (A = 0; A < this.length; A++) {
          var B = this.words[A] & f, F = (this.words[A] | 0) - B << a;
          this.words[A] = F | C, C = B >>> 26 - a;
        }
        C && (this.words[A] = C, this.length++);
      }
      if (s !== 0) {
        for (A = this.length - 1; A >= 0; A--)
          this.words[A + s] = this.words[A];
        for (A = 0; A < s; A++)
          this.words[A] = 0;
        this.length += s;
      }
      return this.strip();
    }, D.prototype.ishln = function(e) {
      return i(this.negative === 0), this.iushln(e);
    }, D.prototype.iushrn = function(e, a, s) {
      i(typeof e == "number" && e >= 0);
      var f;
      a ? f = (a - a % 26) / 26 : f = 0;
      var A = e % 26, C = Math.min((e - A) / 26, this.length), B = 67108863 ^ 67108863 >>> A << A, F = s;
      if (f -= C, f = Math.max(0, f), F) {
        for (var t = 0; t < C; t++)
          F.words[t] = this.words[t];
        F.length = C;
      }
      if (C !== 0)
        if (this.length > C)
          for (this.length -= C, t = 0; t < this.length; t++)
            this.words[t] = this.words[t + C];
        else
          this.words[0] = 0, this.length = 1;
      var l = 0;
      for (t = this.length - 1; t >= 0 && (l !== 0 || t >= f); t--) {
        var R = this.words[t] | 0;
        this.words[t] = l << 26 - A | R >>> A, l = R & B;
      }
      return F && l !== 0 && (F.words[F.length++] = l), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, D.prototype.ishrn = function(e, a, s) {
      return i(this.negative === 0), this.iushrn(e, a, s);
    }, D.prototype.shln = function(e) {
      return this.clone().ishln(e);
    }, D.prototype.ushln = function(e) {
      return this.clone().iushln(e);
    }, D.prototype.shrn = function(e) {
      return this.clone().ishrn(e);
    }, D.prototype.ushrn = function(e) {
      return this.clone().iushrn(e);
    }, D.prototype.testn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26, f = 1 << a;
      if (this.length <= s)
        return !1;
      var A = this.words[s];
      return !!(A & f);
    }, D.prototype.imaskn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= s)
        return this;
      if (a !== 0 && s++, this.length = Math.min(s, this.length), a !== 0) {
        var f = 67108863 ^ 67108863 >>> a << a;
        this.words[this.length - 1] &= f;
      }
      return this.strip();
    }, D.prototype.maskn = function(e) {
      return this.clone().imaskn(e);
    }, D.prototype.iaddn = function(e) {
      return i(typeof e == "number"), i(e < 67108864), e < 0 ? this.isubn(-e) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < e ? (this.words[0] = e - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
    }, D.prototype._iaddn = function(e) {
      this.words[0] += e;
      for (var a = 0; a < this.length && this.words[a] >= 67108864; a++)
        this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
      return this.length = Math.max(this.length, a + 1), this;
    }, D.prototype.isubn = function(e) {
      if (i(typeof e == "number"), i(e < 67108864), e < 0)
        return this.iaddn(-e);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(e), this.negative = 1, this;
      if (this.words[0] -= e, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a = 0; a < this.length && this.words[a] < 0; a++)
          this.words[a] += 67108864, this.words[a + 1] -= 1;
      return this.strip();
    }, D.prototype.addn = function(e) {
      return this.clone().iaddn(e);
    }, D.prototype.subn = function(e) {
      return this.clone().isubn(e);
    }, D.prototype.iabs = function() {
      return this.negative = 0, this;
    }, D.prototype.abs = function() {
      return this.clone().iabs();
    }, D.prototype._ishlnsubmul = function(e, a, s) {
      var f = e.length + s, A;
      this._expand(f);
      var C, B = 0;
      for (A = 0; A < e.length; A++) {
        C = (this.words[A + s] | 0) + B;
        var F = (e.words[A] | 0) * a;
        C -= F & 67108863, B = (C >> 26) - (F / 67108864 | 0), this.words[A + s] = C & 67108863;
      }
      for (; A < this.length - s; A++)
        C = (this.words[A + s] | 0) + B, B = C >> 26, this.words[A + s] = C & 67108863;
      if (B === 0)
        return this.strip();
      for (i(B === -1), B = 0, A = 0; A < this.length; A++)
        C = -(this.words[A] | 0) + B, B = C >> 26, this.words[A] = C & 67108863;
      return this.negative = 1, this.strip();
    }, D.prototype._wordDiv = function(e, a) {
      var s = this.length - e.length, f = this.clone(), A = e, C = A.words[A.length - 1] | 0, B = this._countBits(C);
      s = 26 - B, s !== 0 && (A = A.ushln(s), f.iushln(s), C = A.words[A.length - 1] | 0);
      var F = f.length - A.length, t;
      if (a !== "mod") {
        t = new D(null), t.length = F + 1, t.words = new Array(t.length);
        for (var l = 0; l < t.length; l++)
          t.words[l] = 0;
      }
      var R = f.clone()._ishlnsubmul(A, 1, F);
      R.negative === 0 && (f = R, t && (t.words[F] = 1));
      for (var L = F - 1; L >= 0; L--) {
        var H = (f.words[A.length + L] | 0) * 67108864 + (f.words[A.length + L - 1] | 0);
        for (H = Math.min(H / C | 0, 67108863), f._ishlnsubmul(A, H, L); f.negative !== 0; )
          H--, f.negative = 0, f._ishlnsubmul(A, 1, L), f.isZero() || (f.negative ^= 1);
        t && (t.words[L] = H);
      }
      return t && t.strip(), f.strip(), a !== "div" && s !== 0 && f.iushrn(s), {
        div: t || null,
        mod: f
      };
    }, D.prototype.divmod = function(e, a, s) {
      if (i(!e.isZero()), this.isZero())
        return {
          div: new D(0),
          mod: new D(0)
        };
      var f, A, C;
      return this.negative !== 0 && e.negative === 0 ? (C = this.neg().divmod(e, a), a !== "mod" && (f = C.div.neg()), a !== "div" && (A = C.mod.neg(), s && A.negative !== 0 && A.iadd(e)), {
        div: f,
        mod: A
      }) : this.negative === 0 && e.negative !== 0 ? (C = this.divmod(e.neg(), a), a !== "mod" && (f = C.div.neg()), {
        div: f,
        mod: C.mod
      }) : this.negative & e.negative ? (C = this.neg().divmod(e.neg(), a), a !== "div" && (A = C.mod.neg(), s && A.negative !== 0 && A.isub(e)), {
        div: C.div,
        mod: A
      }) : e.length > this.length || this.cmp(e) < 0 ? {
        div: new D(0),
        mod: this
      } : e.length === 1 ? a === "div" ? {
        div: this.divn(e.words[0]),
        mod: null
      } : a === "mod" ? {
        div: null,
        mod: new D(this.modn(e.words[0]))
      } : {
        div: this.divn(e.words[0]),
        mod: new D(this.modn(e.words[0]))
      } : this._wordDiv(e, a);
    }, D.prototype.div = function(e) {
      return this.divmod(e, "div", !1).div;
    }, D.prototype.mod = function(e) {
      return this.divmod(e, "mod", !1).mod;
    }, D.prototype.umod = function(e) {
      return this.divmod(e, "mod", !0).mod;
    }, D.prototype.divRound = function(e) {
      var a = this.divmod(e);
      if (a.mod.isZero())
        return a.div;
      var s = a.div.negative !== 0 ? a.mod.isub(e) : a.mod, f = e.ushrn(1), A = e.andln(1), C = s.cmp(f);
      return C < 0 || A === 1 && C === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
    }, D.prototype.modn = function(e) {
      i(e <= 67108863);
      for (var a = (1 << 26) % e, s = 0, f = this.length - 1; f >= 0; f--)
        s = (a * s + (this.words[f] | 0)) % e;
      return s;
    }, D.prototype.idivn = function(e) {
      i(e <= 67108863);
      for (var a = 0, s = this.length - 1; s >= 0; s--) {
        var f = (this.words[s] | 0) + a * 67108864;
        this.words[s] = f / e | 0, a = f % e;
      }
      return this.strip();
    }, D.prototype.divn = function(e) {
      return this.clone().idivn(e);
    }, D.prototype.egcd = function(e) {
      i(e.negative === 0), i(!e.isZero());
      var a = this, s = e.clone();
      a.negative !== 0 ? a = a.umod(e) : a = a.clone();
      for (var f = new D(1), A = new D(0), C = new D(0), B = new D(1), F = 0; a.isEven() && s.isEven(); )
        a.iushrn(1), s.iushrn(1), ++F;
      for (var t = s.clone(), l = a.clone(); !a.isZero(); ) {
        for (var R = 0, L = 1; !(a.words[0] & L) && R < 26; ++R, L <<= 1)
          ;
        if (R > 0)
          for (a.iushrn(R); R-- > 0; )
            (f.isOdd() || A.isOdd()) && (f.iadd(t), A.isub(l)), f.iushrn(1), A.iushrn(1);
        for (var H = 0, d = 1; !(s.words[0] & d) && H < 26; ++H, d <<= 1)
          ;
        if (H > 0)
          for (s.iushrn(H); H-- > 0; )
            (C.isOdd() || B.isOdd()) && (C.iadd(t), B.isub(l)), C.iushrn(1), B.iushrn(1);
        a.cmp(s) >= 0 ? (a.isub(s), f.isub(C), A.isub(B)) : (s.isub(a), C.isub(f), B.isub(A));
      }
      return {
        a: C,
        b: B,
        gcd: s.iushln(F)
      };
    }, D.prototype._invmp = function(e) {
      i(e.negative === 0), i(!e.isZero());
      var a = this, s = e.clone();
      a.negative !== 0 ? a = a.umod(e) : a = a.clone();
      for (var f = new D(1), A = new D(0), C = s.clone(); a.cmpn(1) > 0 && s.cmpn(1) > 0; ) {
        for (var B = 0, F = 1; !(a.words[0] & F) && B < 26; ++B, F <<= 1)
          ;
        if (B > 0)
          for (a.iushrn(B); B-- > 0; )
            f.isOdd() && f.iadd(C), f.iushrn(1);
        for (var t = 0, l = 1; !(s.words[0] & l) && t < 26; ++t, l <<= 1)
          ;
        if (t > 0)
          for (s.iushrn(t); t-- > 0; )
            A.isOdd() && A.iadd(C), A.iushrn(1);
        a.cmp(s) >= 0 ? (a.isub(s), f.isub(A)) : (s.isub(a), A.isub(f));
      }
      var R;
      return a.cmpn(1) === 0 ? R = f : R = A, R.cmpn(0) < 0 && R.iadd(e), R;
    }, D.prototype.gcd = function(e) {
      if (this.isZero())
        return e.abs();
      if (e.isZero())
        return this.abs();
      var a = this.clone(), s = e.clone();
      a.negative = 0, s.negative = 0;
      for (var f = 0; a.isEven() && s.isEven(); f++)
        a.iushrn(1), s.iushrn(1);
      do {
        for (; a.isEven(); )
          a.iushrn(1);
        for (; s.isEven(); )
          s.iushrn(1);
        var A = a.cmp(s);
        if (A < 0) {
          var C = a;
          a = s, s = C;
        } else if (A === 0 || s.cmpn(1) === 0)
          break;
        a.isub(s);
      } while (!0);
      return s.iushln(f);
    }, D.prototype.invm = function(e) {
      return this.egcd(e).a.umod(e);
    }, D.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, D.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, D.prototype.andln = function(e) {
      return this.words[0] & e;
    }, D.prototype.bincn = function(e) {
      i(typeof e == "number");
      var a = e % 26, s = (e - a) / 26, f = 1 << a;
      if (this.length <= s)
        return this._expand(s + 1), this.words[s] |= f, this;
      for (var A = f, C = s; A !== 0 && C < this.length; C++) {
        var B = this.words[C] | 0;
        B += A, A = B >>> 26, B &= 67108863, this.words[C] = B;
      }
      return A !== 0 && (this.words[C] = A, this.length++), this;
    }, D.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, D.prototype.cmpn = function(e) {
      var a = e < 0;
      if (this.negative !== 0 && !a)
        return -1;
      if (this.negative === 0 && a)
        return 1;
      this.strip();
      var s;
      if (this.length > 1)
        s = 1;
      else {
        a && (e = -e), i(e <= 67108863, "Number is too big");
        var f = this.words[0] | 0;
        s = f === e ? 0 : f < e ? -1 : 1;
      }
      return this.negative !== 0 ? -s | 0 : s;
    }, D.prototype.cmp = function(e) {
      if (this.negative !== 0 && e.negative === 0)
        return -1;
      if (this.negative === 0 && e.negative !== 0)
        return 1;
      var a = this.ucmp(e);
      return this.negative !== 0 ? -a | 0 : a;
    }, D.prototype.ucmp = function(e) {
      if (this.length > e.length)
        return 1;
      if (this.length < e.length)
        return -1;
      for (var a = 0, s = this.length - 1; s >= 0; s--) {
        var f = this.words[s] | 0, A = e.words[s] | 0;
        if (f !== A) {
          f < A ? a = -1 : f > A && (a = 1);
          break;
        }
      }
      return a;
    }, D.prototype.gtn = function(e) {
      return this.cmpn(e) === 1;
    }, D.prototype.gt = function(e) {
      return this.cmp(e) === 1;
    }, D.prototype.gten = function(e) {
      return this.cmpn(e) >= 0;
    }, D.prototype.gte = function(e) {
      return this.cmp(e) >= 0;
    }, D.prototype.ltn = function(e) {
      return this.cmpn(e) === -1;
    }, D.prototype.lt = function(e) {
      return this.cmp(e) === -1;
    }, D.prototype.lten = function(e) {
      return this.cmpn(e) <= 0;
    }, D.prototype.lte = function(e) {
      return this.cmp(e) <= 0;
    }, D.prototype.eqn = function(e) {
      return this.cmpn(e) === 0;
    }, D.prototype.eq = function(e) {
      return this.cmp(e) === 0;
    }, D.red = function(e) {
      return new Z(e);
    }, D.prototype.toRed = function(e) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), e.convertTo(this)._forceRed(e);
    }, D.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, D.prototype._forceRed = function(e) {
      return this.red = e, this;
    }, D.prototype.forceRed = function(e) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(e);
    }, D.prototype.redAdd = function(e) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
    }, D.prototype.redIAdd = function(e) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
    }, D.prototype.redSub = function(e) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
    }, D.prototype.redISub = function(e) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
    }, D.prototype.redShl = function(e) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
    }, D.prototype.redMul = function(e) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
    }, D.prototype.redIMul = function(e) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
    }, D.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, D.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, D.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, D.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, D.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, D.prototype.redPow = function(e) {
      return i(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
    };
    var I = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function T(h, e) {
      this.name = h, this.p = new D(e, 16), this.n = this.p.bitLength(), this.k = new D(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    T.prototype._tmp = function() {
      var e = new D(null);
      return e.words = new Array(Math.ceil(this.n / 13)), e;
    }, T.prototype.ireduce = function(e) {
      var a = e, s;
      do
        this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), s = a.bitLength();
      while (s > this.n);
      var f = s < this.n ? -1 : a.ucmp(this.p);
      return f === 0 ? (a.words[0] = 0, a.length = 1) : f > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
    }, T.prototype.split = function(e, a) {
      e.iushrn(this.n, 0, a);
    }, T.prototype.imulK = function(e) {
      return e.imul(this.k);
    };
    function uu() {
      T.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(uu, T), uu.prototype.split = function(e, a) {
      for (var s = 4194303, f = Math.min(e.length, 9), A = 0; A < f; A++)
        a.words[A] = e.words[A];
      if (a.length = f, e.length <= 9) {
        e.words[0] = 0, e.length = 1;
        return;
      }
      var C = e.words[9];
      for (a.words[a.length++] = C & s, A = 10; A < e.length; A++) {
        var B = e.words[A] | 0;
        e.words[A - 10] = (B & s) << 4 | C >>> 22, C = B;
      }
      C >>>= 22, e.words[A - 10] = C, C === 0 && e.length > 10 ? e.length -= 10 : e.length -= 9;
    }, uu.prototype.imulK = function(e) {
      e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
      for (var a = 0, s = 0; s < e.length; s++) {
        var f = e.words[s] | 0;
        a += f * 977, e.words[s] = a & 67108863, a = f * 64 + (a / 67108864 | 0);
      }
      return e.words[e.length - 1] === 0 && (e.length--, e.words[e.length - 1] === 0 && e.length--), e;
    };
    function J() {
      T.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(J, T);
    function nu() {
      T.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(nu, T);
    function Du() {
      T.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(Du, T), Du.prototype.imulK = function(e) {
      for (var a = 0, s = 0; s < e.length; s++) {
        var f = (e.words[s] | 0) * 19 + a, A = f & 67108863;
        f >>>= 26, e.words[s] = A, a = f;
      }
      return a !== 0 && (e.words[e.length++] = a), e;
    }, D._prime = function(e) {
      if (I[e])
        return I[e];
      var a;
      if (e === "k256")
        a = new uu();
      else if (e === "p224")
        a = new J();
      else if (e === "p192")
        a = new nu();
      else if (e === "p25519")
        a = new Du();
      else
        throw new Error("Unknown prime " + e);
      return I[e] = a, a;
    };
    function Z(h) {
      if (typeof h == "string") {
        var e = D._prime(h);
        this.m = e.p, this.prime = e;
      } else
        i(h.gtn(1), "modulus must be greater than 1"), this.m = h, this.prime = null;
    }
    Z.prototype._verify1 = function(e) {
      i(e.negative === 0, "red works only with positives"), i(e.red, "red works only with red numbers");
    }, Z.prototype._verify2 = function(e, a) {
      i((e.negative | a.negative) === 0, "red works only with positives"), i(
        e.red && e.red === a.red,
        "red works only with red numbers"
      );
    }, Z.prototype.imod = function(e) {
      return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
    }, Z.prototype.neg = function(e) {
      return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
    }, Z.prototype.add = function(e, a) {
      this._verify2(e, a);
      var s = e.add(a);
      return s.cmp(this.m) >= 0 && s.isub(this.m), s._forceRed(this);
    }, Z.prototype.iadd = function(e, a) {
      this._verify2(e, a);
      var s = e.iadd(a);
      return s.cmp(this.m) >= 0 && s.isub(this.m), s;
    }, Z.prototype.sub = function(e, a) {
      this._verify2(e, a);
      var s = e.sub(a);
      return s.cmpn(0) < 0 && s.iadd(this.m), s._forceRed(this);
    }, Z.prototype.isub = function(e, a) {
      this._verify2(e, a);
      var s = e.isub(a);
      return s.cmpn(0) < 0 && s.iadd(this.m), s;
    }, Z.prototype.shl = function(e, a) {
      return this._verify1(e), this.imod(e.ushln(a));
    }, Z.prototype.imul = function(e, a) {
      return this._verify2(e, a), this.imod(e.imul(a));
    }, Z.prototype.mul = function(e, a) {
      return this._verify2(e, a), this.imod(e.mul(a));
    }, Z.prototype.isqr = function(e) {
      return this.imul(e, e.clone());
    }, Z.prototype.sqr = function(e) {
      return this.mul(e, e);
    }, Z.prototype.sqrt = function(e) {
      if (e.isZero())
        return e.clone();
      var a = this.m.andln(3);
      if (i(a % 2 === 1), a === 3) {
        var s = this.m.add(new D(1)).iushrn(2);
        return this.pow(e, s);
      }
      for (var f = this.m.subn(1), A = 0; !f.isZero() && f.andln(1) === 0; )
        A++, f.iushrn(1);
      i(!f.isZero());
      var C = new D(1).toRed(this), B = C.redNeg(), F = this.m.subn(1).iushrn(1), t = this.m.bitLength();
      for (t = new D(2 * t * t).toRed(this); this.pow(t, F).cmp(B) !== 0; )
        t.redIAdd(B);
      for (var l = this.pow(t, f), R = this.pow(e, f.addn(1).iushrn(1)), L = this.pow(e, f), H = A; L.cmp(C) !== 0; ) {
        for (var d = L, $ = 0; d.cmp(C) !== 0; $++)
          d = d.redSqr();
        i($ < H);
        var j = this.pow(l, new D(1).iushln(H - $ - 1));
        R = R.redMul(j), l = j.redSqr(), L = L.redMul(l), H = $;
      }
      return R;
    }, Z.prototype.invm = function(e) {
      var a = e._invmp(this.m);
      return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
    }, Z.prototype.pow = function(e, a) {
      if (a.isZero())
        return new D(1).toRed(this);
      if (a.cmpn(1) === 0)
        return e.clone();
      var s = 4, f = new Array(1 << s);
      f[0] = new D(1).toRed(this), f[1] = e;
      for (var A = 2; A < f.length; A++)
        f[A] = this.mul(f[A - 1], e);
      var C = f[0], B = 0, F = 0, t = a.bitLength() % 26;
      for (t === 0 && (t = 26), A = a.length - 1; A >= 0; A--) {
        for (var l = a.words[A], R = t - 1; R >= 0; R--) {
          var L = l >> R & 1;
          if (C !== f[0] && (C = this.sqr(C)), L === 0 && B === 0) {
            F = 0;
            continue;
          }
          B <<= 1, B |= L, F++, !(F !== s && (A !== 0 || R !== 0)) && (C = this.mul(C, f[B]), F = 0, B = 0);
        }
        t = 26;
      }
      return C;
    }, Z.prototype.convertTo = function(e) {
      var a = e.umod(this.m);
      return a === e ? a.clone() : a;
    }, Z.prototype.convertFrom = function(e) {
      var a = e.clone();
      return a.red = null, a;
    }, D.mont = function(e) {
      return new au(e);
    };
    function au(h) {
      Z.call(this, h), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new D(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(au, Z), au.prototype.convertTo = function(e) {
      return this.imod(e.ushln(this.shift));
    }, au.prototype.convertFrom = function(e) {
      var a = this.imod(e.mul(this.rinv));
      return a.red = null, a;
    }, au.prototype.imul = function(e, a) {
      if (e.isZero() || a.isZero())
        return e.words[0] = 0, e.length = 1, e;
      var s = e.imul(a), f = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = s.isub(f).iushrn(this.shift), C = A;
      return A.cmp(this.m) >= 0 ? C = A.isub(this.m) : A.cmpn(0) < 0 && (C = A.iadd(this.m)), C._forceRed(this);
    }, au.prototype.mul = function(e, a) {
      if (e.isZero() || a.isZero())
        return new D(0)._forceRed(this);
      var s = e.mul(a), f = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = s.isub(f).iushrn(this.shift), C = A;
      return A.cmp(this.m) >= 0 ? C = A.isub(this.m) : A.cmpn(0) < 0 && (C = A.iadd(this.m)), C._forceRed(this);
    }, au.prototype.invm = function(e) {
      var a = this.imod(e._invmp(this.m).mul(this.r2));
      return a._forceRed(this);
    };
  })(u, Pu);
})(de);
var z2 = de.exports;
Object.defineProperty(G2, "__esModule", { value: !0 });
var m2 = z2, L8 = st().ec, pe = new L8("secp256k1"), H2 = pe.curve;
G2.privateKeyExport = function(u, r) {
  r === void 0 && (r = !0);
  var n = new m2(u);
  if (n.ucmp(H2.n) >= 0)
    throw new Error("couldn't export to DER format");
  var i = pe.g.mul(n);
  return pt(i.getX(), i.getY(), r);
};
G2.privateKeyModInverse = function(u) {
  var r = new m2(u);
  if (r.ucmp(H2.n) >= 0 || r.isZero())
    throw new Error("private key range is invalid");
  return r.invm(H2.n).toArrayLike(N.Buffer, "be", 32);
};
G2.signatureImport = function(u) {
  var r = new m2(u.r);
  r.ucmp(H2.n) >= 0 && (r = new m2(0));
  var n = new m2(u.s);
  return n.ucmp(H2.n) >= 0 && (n = new m2(0)), N.Buffer.concat([r.toArrayLike(N.Buffer, "be", 32), n.toArrayLike(N.Buffer, "be", 32)]);
};
G2.ecdhUnsafe = function(u, r, n) {
  n === void 0 && (n = !0);
  var i = pe.keyFromPublic(u), o = new m2(r);
  if (o.ucmp(H2.n) >= 0 || o.isZero())
    throw new Error("scalar was invalid (zero or overflow)");
  var D = i.pub.mul(o);
  return pt(D.getX(), D.getY(), n);
};
var pt = function(u, r, n) {
  var i;
  return n ? (i = N.Buffer.alloc(33), i[0] = r.isOdd() ? 3 : 2, u.toArrayLike(N.Buffer, "be", 32).copy(i, 1)) : (i = N.Buffer.alloc(65), i[0] = 4, u.toArrayLike(N.Buffer, "be", 32).copy(i, 1), r.toArrayLike(N.Buffer, "be", 32).copy(i, 33)), i;
}, E1 = {};
Object.defineProperty(E1, "__esModule", { value: !0 });
var $8 = N.Buffer.from([
  // begin
  48,
  129,
  211,
  2,
  1,
  1,
  4,
  32,
  // private key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // middle
  160,
  129,
  133,
  48,
  129,
  130,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  33,
  2,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  36,
  3,
  34,
  0,
  // public key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), H8 = N.Buffer.from([
  // begin
  48,
  130,
  1,
  19,
  2,
  1,
  1,
  4,
  32,
  // private key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // middle
  160,
  129,
  165,
  48,
  129,
  162,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  65,
  4,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  72,
  58,
  218,
  119,
  38,
  163,
  196,
  101,
  93,
  164,
  251,
  252,
  14,
  17,
  8,
  168,
  253,
  23,
  180,
  72,
  166,
  133,
  84,
  25,
  156,
  71,
  208,
  143,
  251,
  16,
  212,
  184,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  68,
  3,
  66,
  0,
  // public key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]);
E1.privateKeyExport = function(u, r, n) {
  n === void 0 && (n = !0);
  var i = N.Buffer.from(n ? $8 : H8);
  return u.copy(i, n ? 8 : 9), r.copy(i, n ? 181 : 214), i;
};
E1.privateKeyImport = function(u) {
  var r = u.length, n = 0;
  if (r < n + 1 || u[n] !== 48 || (n += 1, r < n + 1 || !(u[n] & 128)))
    return null;
  var i = u[n] & 127;
  if (n += 1, i < 1 || i > 2 || r < n + i)
    return null;
  var o = u[n + i - 1] | (i > 1 ? u[n + i - 2] << 8 : 0);
  return n += i, r < n + o || r < n + 3 || u[n] !== 2 || u[n + 1] !== 1 || u[n + 2] !== 1 || (n += 3, r < n + 2 || u[n] !== 4 || u[n + 1] > 32 || r < n + 2 + u[n + 1]) ? null : u.slice(n + 2, n + 2 + u[n + 1]);
};
E1.signatureImportLax = function(u) {
  var r = N.Buffer.alloc(32, 0), n = N.Buffer.alloc(32, 0), i = u.length, o = 0;
  if (u[o++] !== 48)
    return null;
  var D = u[o++];
  if (D & 128 && (o += D - 128, o > i) || u[o++] !== 2)
    return null;
  var E = u[o++];
  if (E & 128) {
    if (D = E - 128, o + D > i)
      return null;
    for (; D > 0 && u[o] === 0; o += 1, D -= 1)
      ;
    for (E = 0; D > 0; o += 1, D -= 1)
      E = (E << 8) + u[o];
  }
  if (E > i - o)
    return null;
  var c = o;
  if (o += E, u[o++] !== 2)
    return null;
  var p = u[o++];
  if (p & 128) {
    if (D = p - 128, o + D > i)
      return null;
    for (; D > 0 && u[o] === 0; o += 1, D -= 1)
      ;
    for (p = 0; D > 0; o += 1, D -= 1)
      p = (p << 8) + u[o];
  }
  if (p > i - o)
    return null;
  var v = o;
  for (o += p; E > 0 && u[c] === 0; E -= 1, c += 1)
    ;
  if (E > 32)
    return null;
  var m = u.slice(c, c + E);
  for (m.copy(r, 32 - m.length); p > 0 && u[v] === 0; p -= 1, v += 1)
    ;
  if (p > 32)
    return null;
  var M = u.slice(v, v + p);
  return M.copy(n, 32 - M.length), { r, s: n };
};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.ecdhUnsafe = u.ecdh = u.recover = u.verify = u.sign = u.signatureImportLax = u.signatureImport = u.signatureExport = u.signatureNormalize = u.publicKeyCombine = u.publicKeyTweakMul = u.publicKeyTweakAdd = u.publicKeyVerify = u.publicKeyConvert = u.publicKeyCreate = u.privateKeyTweakMul = u.privateKeyTweakAdd = u.privateKeyModInverse = u.privateKeyNegate = u.privateKeyImport = u.privateKeyExport = u.privateKeyVerify = void 0;
  var r = Ct, n = G2, i = E1;
  u.privateKeyVerify = function(o) {
    return o.length !== 32 ? !1 : r.privateKeyVerify(Uint8Array.from(o));
  }, u.privateKeyExport = function(o, D) {
    if (o.length !== 32)
      throw new RangeError("private key length is invalid");
    var E = n.privateKeyExport(o, D);
    return i.privateKeyExport(o, E, D);
  }, u.privateKeyImport = function(o) {
    if (o = i.privateKeyImport(o), o !== null && o.length === 32 && u.privateKeyVerify(o))
      return o;
    throw new Error("couldn't import from DER format");
  }, u.privateKeyNegate = function(o) {
    return N.Buffer.from(r.privateKeyNegate(Uint8Array.from(o)));
  }, u.privateKeyModInverse = function(o) {
    if (o.length !== 32)
      throw new Error("private key length is invalid");
    return N.Buffer.from(n.privateKeyModInverse(Uint8Array.from(o)));
  }, u.privateKeyTweakAdd = function(o, D) {
    return N.Buffer.from(r.privateKeyTweakAdd(Uint8Array.from(o), D));
  }, u.privateKeyTweakMul = function(o, D) {
    return N.Buffer.from(r.privateKeyTweakMul(Uint8Array.from(o), Uint8Array.from(D)));
  }, u.publicKeyCreate = function(o, D) {
    return N.Buffer.from(r.publicKeyCreate(Uint8Array.from(o), D));
  }, u.publicKeyConvert = function(o, D) {
    return N.Buffer.from(r.publicKeyConvert(Uint8Array.from(o), D));
  }, u.publicKeyVerify = function(o) {
    return o.length !== 33 && o.length !== 65 ? !1 : r.publicKeyVerify(Uint8Array.from(o));
  }, u.publicKeyTweakAdd = function(o, D, E) {
    return N.Buffer.from(r.publicKeyTweakAdd(Uint8Array.from(o), Uint8Array.from(D), E));
  }, u.publicKeyTweakMul = function(o, D, E) {
    return N.Buffer.from(r.publicKeyTweakMul(Uint8Array.from(o), Uint8Array.from(D), E));
  }, u.publicKeyCombine = function(o, D) {
    var E = [];
    return o.forEach(function(c) {
      E.push(Uint8Array.from(c));
    }), N.Buffer.from(r.publicKeyCombine(E, D));
  }, u.signatureNormalize = function(o) {
    return N.Buffer.from(r.signatureNormalize(Uint8Array.from(o)));
  }, u.signatureExport = function(o) {
    return N.Buffer.from(r.signatureExport(Uint8Array.from(o)));
  }, u.signatureImport = function(o) {
    return N.Buffer.from(r.signatureImport(Uint8Array.from(o)));
  }, u.signatureImportLax = function(o) {
    if (o.length === 0)
      throw new RangeError("signature length is invalid");
    var D = i.signatureImportLax(o);
    if (D === null)
      throw new Error("couldn't parse DER signature");
    return n.signatureImport(D);
  }, u.sign = function(o, D, E) {
    if (E === null)
      throw new TypeError("options should be an Object");
    var c = void 0;
    if (E) {
      if (c = {}, E.data === null)
        throw new TypeError("options.data should be a Buffer");
      if (E.data) {
        if (E.data.length != 32)
          throw new RangeError("options.data length is invalid");
        c.data = new Uint8Array(E.data);
      }
      if (E.noncefn === null)
        throw new TypeError("options.noncefn should be a Function");
      E.noncefn && (c.noncefn = function(v, m, M, _, O) {
        var x = M != null ? N.Buffer.from(M) : null, k = _ != null ? N.Buffer.from(_) : null, g = N.Buffer.from("");
        return E.noncefn && (g = E.noncefn(N.Buffer.from(v), N.Buffer.from(m), x, k, O)), new Uint8Array(g);
      });
    }
    var p = r.ecdsaSign(Uint8Array.from(o), Uint8Array.from(D), c);
    return {
      signature: N.Buffer.from(p.signature),
      recovery: p.recid
    };
  }, u.verify = function(o, D, E) {
    return r.ecdsaVerify(Uint8Array.from(D), Uint8Array.from(o), E);
  }, u.recover = function(o, D, E, c) {
    return N.Buffer.from(r.ecdsaRecover(Uint8Array.from(D), E, Uint8Array.from(o), c));
  }, u.ecdh = function(o, D) {
    return N.Buffer.from(r.ecdh(Uint8Array.from(o), Uint8Array.from(D), {}));
  }, u.ecdhUnsafe = function(o, D, E) {
    if (o.length !== 33 && o.length !== 65)
      throw new RangeError("public key length is invalid");
    if (D.length !== 32)
      throw new RangeError("private key length is invalid");
    return N.Buffer.from(n.ecdhUnsafe(Uint8Array.from(o), Uint8Array.from(D), E));
  };
})(q1);
var Bt = function(r) {
  if (typeof r != "string")
    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof r + ", while checking isHexPrefixed.");
  return r.slice(0, 2) === "0x";
}, j8 = Bt, V8 = function(r) {
  return typeof r != "string" ? r : j8(r) ? r.slice(2) : r;
}, K8 = Bt, vt = V8;
function W1(u) {
  var r = u;
  if (typeof r != "string")
    throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof r + ", while padToEven.");
  return r.length % 2 && (r = "0" + r), r;
}
function mt(u) {
  var r = u.toString(16);
  return "0x" + r;
}
function G8(u) {
  var r = mt(u);
  return new N.Buffer(W1(r.slice(2)), "hex");
}
function z8(u) {
  if (typeof u != "string")
    throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof u + "'.");
  return N.Buffer.byteLength(u, "utf8");
}
function q8(u, r, n) {
  if (Array.isArray(u) !== !0)
    throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof u + "'");
  if (Array.isArray(r) !== !0)
    throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof r + "'");
  return r[!!n && "some" || "every"](function(i) {
    return u.indexOf(i) >= 0;
  });
}
function Z8(u) {
  var r = new N.Buffer(W1(vt(u).replace(/^0+|0+$/g, "")), "hex");
  return r.toString("utf8");
}
function W8(u) {
  var r = "", n = 0, i = u.length;
  for (u.substring(0, 2) === "0x" && (n = 2); n < i; n += 2) {
    var o = parseInt(u.substr(n, 2), 16);
    r += String.fromCharCode(o);
  }
  return r;
}
function Y8(u) {
  var r = new N.Buffer(u, "utf8");
  return "0x" + W1(r.toString("hex")).replace(/^0+|0+$/g, "");
}
function J8(u) {
  for (var r = "", n = 0; n < u.length; n++) {
    var i = u.charCodeAt(n), o = i.toString(16);
    r += o.length < 2 ? "0" + o : o;
  }
  return "0x" + r;
}
function X8(u, r, n) {
  if (!Array.isArray(u))
    throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof u + "'");
  if (typeof r != "string")
    throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof r + "'.");
  for (var i = [], o = 0; o < u.length; o++) {
    var D = u[o][r];
    if (n && !D)
      D = "";
    else if (typeof D != "string")
      throw new Error("invalid abi");
    i.push(D);
  }
  return i;
}
function Q8(u, r) {
  return !(typeof u != "string" || !u.match(/^0x[0-9A-Fa-f]*$/) || r && u.length !== 2 + 2 * r);
}
var x0 = {
  arrayContainsArray: q8,
  intToBuffer: G8,
  getBinarySize: z8,
  isHexPrefixed: K8,
  stripHexPrefix: vt,
  padToEven: W1,
  intToHex: mt,
  fromAscii: J8,
  fromUtf8: Y8,
  toAscii: W8,
  toUtf8: Z8,
  getKeys: X8,
  isHexString: Q8
}, yt = {};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.KECCAK256_RLP = u.KECCAK256_RLP_S = u.KECCAK256_RLP_ARRAY = u.KECCAK256_RLP_ARRAY_S = u.KECCAK256_NULL = u.KECCAK256_NULL_S = u.TWO_POW256 = u.MAX_INTEGER = void 0;
  var r = z2;
  u.MAX_INTEGER = new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), u.TWO_POW256 = new r("10000000000000000000000000000000000000000000000000000000000000000", 16), u.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", u.KECCAK256_NULL = N.Buffer.from(u.KECCAK256_NULL_S, "hex"), u.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", u.KECCAK256_RLP_ARRAY = N.Buffer.from(u.KECCAK256_RLP_ARRAY_S, "hex"), u.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", u.KECCAK256_RLP = N.Buffer.from(u.KECCAK256_RLP_S, "hex");
})(yt);
var gt = {}, q2 = {};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.baToJSON = u.addHexPrefix = u.toUnsigned = u.fromSigned = u.bufferToHex = u.bufferToInt = u.toBuffer = u.stripZeros = u.unpad = u.setLengthRight = u.setLength = u.setLengthLeft = u.zeros = void 0;
  var r = x0, n = z2;
  u.zeros = function(i) {
    return N.Buffer.allocUnsafe(i).fill(0);
  }, u.setLengthLeft = function(i, o, D) {
    D === void 0 && (D = !1);
    var E = u.zeros(o);
    return i = u.toBuffer(i), D ? i.length < o ? (i.copy(E), E) : i.slice(0, o) : i.length < o ? (i.copy(E, o - i.length), E) : i.slice(-o);
  }, u.setLength = u.setLengthLeft, u.setLengthRight = function(i, o) {
    return u.setLength(i, o, !0);
  }, u.unpad = function(i) {
    i = r.stripHexPrefix(i);
    for (var o = i[0]; i.length > 0 && o.toString() === "0"; )
      i = i.slice(1), o = i[0];
    return i;
  }, u.stripZeros = u.unpad, u.toBuffer = function(i) {
    if (!N.Buffer.isBuffer(i))
      if (Array.isArray(i))
        i = N.Buffer.from(i);
      else if (typeof i == "string")
        if (r.isHexString(i))
          i = N.Buffer.from(r.padToEven(r.stripHexPrefix(i)), "hex");
        else
          throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + i);
      else if (typeof i == "number")
        i = r.intToBuffer(i);
      else if (i == null)
        i = N.Buffer.allocUnsafe(0);
      else if (n.isBN(i))
        i = i.toArrayLike(N.Buffer);
      else if (i.toArray)
        i = N.Buffer.from(i.toArray());
      else
        throw new Error("invalid type");
    return i;
  }, u.bufferToInt = function(i) {
    return new n(u.toBuffer(i)).toNumber();
  }, u.bufferToHex = function(i) {
    return i = u.toBuffer(i), "0x" + i.toString("hex");
  }, u.fromSigned = function(i) {
    return new n(i).fromTwos(256);
  }, u.toUnsigned = function(i) {
    return N.Buffer.from(i.toTwos(256).toArray());
  }, u.addHexPrefix = function(i) {
    return typeof i != "string" || r.isHexPrefixed(i) ? i : "0x" + i;
  }, u.baToJSON = function(i) {
    if (N.Buffer.isBuffer(i))
      return "0x" + i.toString("hex");
    if (i instanceof Array) {
      for (var o = [], D = 0; D < i.length; D++)
        o.push(u.baToJSON(i[D]));
      return o;
    }
  };
})(q2);
var Y1 = {}, Z2 = {}, Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
function un(u) {
  return function(r) {
    var n = u();
    return n.update(r), N.Buffer.from(n.digest());
  };
}
Be.createHashFunction = un;
Object.defineProperty(Z2, "__esModule", { value: !0 });
var J1 = Be, X1 = Ee;
Z2.keccak224 = J1.createHashFunction(function() {
  return X1("keccak224");
});
Z2.keccak256 = J1.createHashFunction(function() {
  return X1("keccak256");
});
Z2.keccak384 = J1.createHashFunction(function() {
  return X1("keccak384");
});
Z2.keccak512 = J1.createHashFunction(function() {
  return X1("keccak512");
});
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.rlphash = u.ripemd160 = u.sha256 = u.keccak256 = u.keccak = void 0;
  var r = Z2, n = r.keccak224, i = r.keccak384, o = r.keccak256, D = r.keccak512, E = ft(), c = x0, p = K2, v = q2;
  u.keccak = function(m, M) {
    switch (M === void 0 && (M = 256), typeof m == "string" && !c.isHexString(m) ? m = N.Buffer.from(m, "utf8") : m = v.toBuffer(m), M || (M = 256), M) {
      case 224:
        return n(m);
      case 256:
        return o(m);
      case 384:
        return i(m);
      case 512:
        return D(m);
      default:
        throw new Error("Invald algorithm: keccak" + M);
    }
  }, u.keccak256 = function(m) {
    return u.keccak(m);
  }, u.sha256 = function(m) {
    return m = v.toBuffer(m), E("sha256").update(m).digest();
  }, u.ripemd160 = function(m, M) {
    m = v.toBuffer(m);
    var _ = E("rmd160").update(m).digest();
    return M === !0 ? v.setLength(_, 32) : _;
  }, u.rlphash = function(m) {
    return u.keccak(p.encode(m));
  };
})(Y1);
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.importPublic = u.privateToPublic = u.privateToAddress = u.publicToAddress = u.pubToAddress = u.isValidPublic = u.isValidPrivate = u.isPrecompiled = u.generateAddress2 = u.generateAddress = u.isValidChecksumAddress = u.toChecksumAddress = u.isZeroAddress = u.isValidAddress = u.zeroAddress = void 0;
  var r = G1(), n = x0, i = q1, o = z2, D = q2, E = Y1;
  u.zeroAddress = function() {
    var c = 20, p = D.zeros(c);
    return D.bufferToHex(p);
  }, u.isValidAddress = function(c) {
    return /^0x[0-9a-fA-F]{40}$/.test(c);
  }, u.isZeroAddress = function(c) {
    var p = u.zeroAddress();
    return p === D.addHexPrefix(c);
  }, u.toChecksumAddress = function(c, p) {
    c = n.stripHexPrefix(c).toLowerCase();
    for (var v = p !== void 0 ? p.toString() + "0x" : "", m = E.keccak(v + c).toString("hex"), M = "0x", _ = 0; _ < c.length; _++)
      parseInt(m[_], 16) >= 8 ? M += c[_].toUpperCase() : M += c[_];
    return M;
  }, u.isValidChecksumAddress = function(c, p) {
    return u.isValidAddress(c) && u.toChecksumAddress(c, p) === c;
  }, u.generateAddress = function(c, p) {
    c = D.toBuffer(c);
    var v = new o(p);
    return v.isZero() ? E.rlphash([c, null]).slice(-20) : E.rlphash([c, N.Buffer.from(v.toArray())]).slice(-20);
  }, u.generateAddress2 = function(c, p, v) {
    var m = D.toBuffer(c), M = D.toBuffer(p), _ = D.toBuffer(v);
    r(m.length === 20), r(M.length === 32);
    var O = E.keccak256(N.Buffer.concat([N.Buffer.from("ff", "hex"), m, M, E.keccak256(_)]));
    return O.slice(-20);
  }, u.isPrecompiled = function(c) {
    var p = D.unpad(c);
    return p.length === 1 && p[0] >= 1 && p[0] <= 8;
  }, u.isValidPrivate = function(c) {
    return i.privateKeyVerify(c);
  }, u.isValidPublic = function(c, p) {
    return p === void 0 && (p = !1), c.length === 64 ? i.publicKeyVerify(N.Buffer.concat([N.Buffer.from([4]), c])) : p ? i.publicKeyVerify(c) : !1;
  }, u.pubToAddress = function(c, p) {
    return p === void 0 && (p = !1), c = D.toBuffer(c), p && c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)), r(c.length === 64), E.keccak(c).slice(-20);
  }, u.publicToAddress = u.pubToAddress, u.privateToAddress = function(c) {
    return u.publicToAddress(u.privateToPublic(c));
  }, u.privateToPublic = function(c) {
    return c = D.toBuffer(c), i.publicKeyCreate(c, !1).slice(1);
  }, u.importPublic = function(c) {
    return c = D.toBuffer(c), c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)), c;
  };
})(gt);
var D0 = {};
Object.defineProperty(D0, "__esModule", { value: !0 });
D0.hashPersonalMessage = D0.isValidSignature = D0.fromRpcSig = D0.toRpcSig = D0.ecrecover = D0.ecsign = void 0;
var j9 = q1, g1 = z2, y2 = q2, en = Y1;
D0.ecsign = function(u, r, n) {
  var i = j9.sign(u, r), o = i.recovery, D = {
    r: i.signature.slice(0, 32),
    s: i.signature.slice(32, 64),
    v: n ? o + (n * 2 + 35) : o + 27
  };
  return D;
};
D0.ecrecover = function(u, r, n, i, o) {
  var D = N.Buffer.concat([y2.setLength(n, 32), y2.setLength(i, 32)], 64), E = ve(r, o);
  if (!me(E))
    throw new Error("Invalid signature v value");
  var c = j9.recover(u, D, E);
  return j9.publicKeyConvert(c, !1).slice(1);
};
D0.toRpcSig = function(u, r, n, i) {
  var o = ve(u, i);
  if (!me(o))
    throw new Error("Invalid signature v value");
  return y2.bufferToHex(N.Buffer.concat([y2.setLengthLeft(r, 32), y2.setLengthLeft(n, 32), y2.toBuffer(u)]));
};
D0.fromRpcSig = function(u) {
  var r = y2.toBuffer(u);
  if (r.length !== 65)
    throw new Error("Invalid signature length");
  var n = r[64];
  return n < 27 && (n += 27), {
    v: n,
    r: r.slice(0, 32),
    s: r.slice(32, 64)
  };
};
D0.isValidSignature = function(u, r, n, i, o) {
  i === void 0 && (i = !0);
  var D = new g1("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), E = new g1("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
  if (r.length !== 32 || n.length !== 32 || !me(ve(u, o)))
    return !1;
  var c = new g1(r), p = new g1(n);
  return !(c.isZero() || c.gt(E) || p.isZero() || p.gt(E) || i && p.cmp(D) === 1);
};
D0.hashPersonalMessage = function(u) {
  var r = N.Buffer.from(`Ethereum Signed Message:
` + u.length.toString(), "utf-8");
  return en.keccak(N.Buffer.concat([r, u]));
};
function ve(u, r) {
  return r ? u - (2 * r + 35) : u - 27;
}
function me(u) {
  return u === 0 || u === 1;
}
var Q1 = {};
Object.defineProperty(Q1, "__esModule", { value: !0 });
Q1.defineProperties = void 0;
var Qe = G1(), rn = x0, ur = K2, w1 = q2;
Q1.defineProperties = function(u, r, n) {
  if (u.raw = [], u._fields = [], u.toJSON = function(o) {
    if (o === void 0 && (o = !1), o) {
      var D = {};
      return u._fields.forEach(function(E) {
        D[E] = "0x" + u[E].toString("hex");
      }), D;
    }
    return w1.baToJSON(u.raw);
  }, u.serialize = function() {
    return ur.encode(u.raw);
  }, r.forEach(function(o, D) {
    u._fields.push(o.name);
    function E() {
      return u.raw[D];
    }
    function c(p) {
      p = w1.toBuffer(p), p.toString("hex") === "00" && !o.allowZero && (p = N.Buffer.allocUnsafe(0)), o.allowLess && o.length ? (p = w1.stripZeros(p), Qe(o.length >= p.length, "The field " + o.name + " must not have more " + o.length + " bytes")) : !(o.allowZero && p.length === 0) && o.length && Qe(o.length === p.length, "The field " + o.name + " must have byte length of " + o.length), u.raw[D] = p;
    }
    Object.defineProperty(u, o.name, {
      enumerable: !0,
      configurable: !0,
      get: E,
      set: c
    }), o.default && (u[o.name] = o.default), o.alias && Object.defineProperty(u, o.alias, {
      enumerable: !1,
      configurable: !0,
      set: c,
      get: E
    });
  }), n)
    if (typeof n == "string" && (n = N.Buffer.from(rn.stripHexPrefix(n), "hex")), N.Buffer.isBuffer(n) && (n = ur.decode(n)), Array.isArray(n)) {
      if (n.length > u._fields.length)
        throw new Error("wrong number of fields in data");
      n.forEach(function(o, D) {
        u[u._fields[D]] = w1.toBuffer(o);
      });
    } else if (typeof n == "object") {
      var i = Object.keys(n);
      r.forEach(function(o) {
        i.indexOf(o.name) !== -1 && (u[o.name] = n[o.name]), i.indexOf(o.alias) !== -1 && (u[o.alias] = n[o.alias]);
      });
    } else
      throw new Error("invalid data");
};
(function(u) {
  var r = Pu && Pu.__createBinding || (Object.create ? function(c, p, v, m) {
    m === void 0 && (m = v), Object.defineProperty(c, m, { enumerable: !0, get: function() {
      return p[v];
    } });
  } : function(c, p, v, m) {
    m === void 0 && (m = v), c[m] = p[v];
  }), n = Pu && Pu.__exportStar || function(c, p) {
    for (var v in c)
      v !== "default" && !p.hasOwnProperty(v) && r(p, c, v);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.secp256k1 = u.rlp = u.BN = void 0;
  var i = q1;
  u.secp256k1 = i;
  var o = x0, D = z2;
  u.BN = D;
  var E = K2;
  u.rlp = E, Object.assign(u, o), n(yt, u), n(gt, u), n(Y1, u), n(D0, u), n(q2, u), n(Q1, u);
})(z1);
var Xu = {};
Object.defineProperty(Xu, "__esModule", { value: !0 });
Xu.normalize = Xu.recoverPublicKey = Xu.concatSig = Xu.legacyToBuffer = Xu.isNullish = Xu.padWithZeroes = void 0;
const d0 = z1, V9 = x0;
function K9(u, r) {
  if (u !== "" && !/^[a-f0-9]+$/iu.test(u))
    throw new Error(`Expected an unprefixed hex string. Received: ${u}`);
  if (r < 0)
    throw new Error(`Expected a non-negative integer target length. Received: ${r}`);
  return String.prototype.padStart.call(u, r, "0");
}
Xu.padWithZeroes = K9;
function tn(u) {
  return u == null;
}
Xu.isNullish = tn;
function nn(u) {
  return typeof u == "string" && !V9.isHexString(u) ? N.Buffer.from(u) : d0.toBuffer(u);
}
Xu.legacyToBuffer = nn;
function Dn(u, r, n) {
  const i = d0.fromSigned(r), o = d0.fromSigned(n), D = d0.bufferToInt(u), E = K9(d0.toUnsigned(i).toString("hex"), 64), c = K9(d0.toUnsigned(o).toString("hex"), 64), p = V9.stripHexPrefix(V9.intToHex(D));
  return d0.addHexPrefix(E.concat(c, p));
}
Xu.concatSig = Dn;
function an(u, r) {
  const n = d0.fromRpcSig(r);
  return d0.ecrecover(u, n.v, n.r, n.s);
}
Xu.recoverPublicKey = an;
function on(u) {
  if (u) {
    if (typeof u == "number") {
      const r = d0.toBuffer(u);
      u = d0.bufferToHex(r);
    }
    if (typeof u != "string") {
      let r = "eth-sig-util.normalize() requires hex string or integer input.";
      throw r += ` received ${typeof u}: ${u}`, new Error(r);
    }
    return d0.addHexPrefix(u.toLowerCase());
  }
}
Xu.normalize = on;
Object.defineProperty(e2, "__esModule", { value: !0 });
e2.extractPublicKey = e2.recoverPersonalSignature = e2.personalSign = void 0;
const R2 = z1, P0 = Xu;
function sn({ privateKey: u, data: r }) {
  if (P0.isNullish(r))
    throw new Error("Missing data parameter");
  if (P0.isNullish(u))
    throw new Error("Missing privateKey parameter");
  const n = P0.legacyToBuffer(r), i = R2.hashPersonalMessage(n), o = R2.ecsign(i, u);
  return P0.concatSig(R2.toBuffer(o.v), o.r, o.s);
}
e2.personalSign = sn;
function fn({ data: u, signature: r }) {
  if (P0.isNullish(u))
    throw new Error("Missing data parameter");
  if (P0.isNullish(r))
    throw new Error("Missing signature parameter");
  const n = wt(u, r), i = R2.publicToAddress(n);
  return R2.bufferToHex(i);
}
e2.recoverPersonalSignature = fn;
function Fn({ data: u, signature: r }) {
  if (P0.isNullish(u))
    throw new Error("Missing data parameter");
  if (P0.isNullish(r))
    throw new Error("Missing signature parameter");
  return `0x${wt(u, r).toString("hex")}`;
}
e2.extractPublicKey = Fn;
function wt(u, r) {
  const n = R2.hashPersonalMessage(P0.legacyToBuffer(u));
  return P0.recoverPublicKey(n, r);
}
var xt = {}, bt = {}, u9 = {}, _t = {}, e9 = {};
Object.defineProperty(e9, "__esModule", { value: !0 });
var Mt = ot();
function ln(u) {
  return new Promise(function(r, n) {
    Mt(u, function(i, o) {
      if (i) {
        n(i);
        return;
      }
      r(o);
    });
  });
}
e9.getRandomBytes = ln;
function An(u) {
  return Mt(u);
}
e9.getRandomBytesSync = An;
(function(u) {
  var r = Pu && Pu.__awaiter || function(v, m, M, _) {
    function O(x) {
      return x instanceof M ? x : new M(function(k) {
        k(x);
      });
    }
    return new (M || (M = Promise))(function(x, k) {
      function g(I) {
        try {
          y(_.next(I));
        } catch (T) {
          k(T);
        }
      }
      function b(I) {
        try {
          y(_.throw(I));
        } catch (T) {
          k(T);
        }
      }
      function y(I) {
        I.done ? x(I.value) : O(I.value).then(g, b);
      }
      y((_ = _.apply(v, m || [])).next());
    });
  }, n = Pu && Pu.__generator || function(v, m) {
    var M = { label: 0, sent: function() {
      if (x[0] & 1)
        throw x[1];
      return x[1];
    }, trys: [], ops: [] }, _, O, x, k;
    return k = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function g(y) {
      return function(I) {
        return b([y, I]);
      };
    }
    function b(y) {
      if (_)
        throw new TypeError("Generator is already executing.");
      for (; M; )
        try {
          if (_ = 1, O && (x = y[0] & 2 ? O.return : y[0] ? O.throw || ((x = O.return) && x.call(O), 0) : O.next) && !(x = x.call(O, y[1])).done)
            return x;
          switch (O = 0, x && (y = [y[0] & 2, x.value]), y[0]) {
            case 0:
            case 1:
              x = y;
              break;
            case 4:
              return M.label++, { value: y[1], done: !1 };
            case 5:
              M.label++, O = y[1], y = [0];
              continue;
            case 7:
              y = M.ops.pop(), M.trys.pop();
              continue;
            default:
              if (x = M.trys, !(x = x.length > 0 && x[x.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                M = 0;
                continue;
              }
              if (y[0] === 3 && (!x || y[1] > x[0] && y[1] < x[3])) {
                M.label = y[1];
                break;
              }
              if (y[0] === 6 && M.label < x[1]) {
                M.label = x[1], x = y;
                break;
              }
              if (x && M.label < x[2]) {
                M.label = x[2], M.ops.push(y);
                break;
              }
              x[2] && M.ops.pop(), M.trys.pop();
              continue;
          }
          y = m.call(v, M);
        } catch (I) {
          y = [6, I], O = 0;
        } finally {
          _ = x = 0;
        }
      if (y[0] & 5)
        throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  function i(v) {
    for (var m in v)
      u.hasOwnProperty(m) || (u[m] = v[m]);
  }
  Object.defineProperty(u, "__esModule", { value: !0 });
  var o = O1, D = e9, E = 32;
  function c() {
    return r(this, void 0, void 0, function() {
      var v;
      return n(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, D.getRandomBytes(E)];
          case 1:
            return v = m.sent(), o.privateKeyVerify(v) ? [2, v] : [3, 0];
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  u.createPrivateKey = c;
  function p() {
    for (; ; ) {
      var v = D.getRandomBytesSync(E);
      if (o.privateKeyVerify(v))
        return v;
    }
  }
  u.createPrivateKeySync = p, i(O1);
})(_t);
var W2 = {}, ye = { exports: {} };
ye.exports;
(function(u) {
  (function(r, n) {
    function i(h, e) {
      if (!h)
        throw new Error(e || "Assertion failed");
    }
    function o(h, e) {
      h.super_ = e;
      var a = function() {
      };
      a.prototype = e.prototype, h.prototype = new a(), h.prototype.constructor = h;
    }
    function D(h, e, a) {
      if (D.isBN(h))
        return h;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, h !== null && ((e === "le" || e === "be") && (a = e, e = 10), this._init(h || 0, e || 10, a || "be"));
    }
    typeof r == "object" ? r.exports = D : n.BN = D, D.BN = D, D.wordSize = 26;
    var E;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? E = window.Buffer : E = he.Buffer;
    } catch {
    }
    D.isBN = function(e) {
      return e instanceof D ? !0 : e !== null && typeof e == "object" && e.constructor.wordSize === D.wordSize && Array.isArray(e.words);
    }, D.max = function(e, a) {
      return e.cmp(a) > 0 ? e : a;
    }, D.min = function(e, a) {
      return e.cmp(a) < 0 ? e : a;
    }, D.prototype._init = function(e, a, s) {
      if (typeof e == "number")
        return this._initNumber(e, a, s);
      if (typeof e == "object")
        return this._initArray(e, a, s);
      a === "hex" && (a = 16), i(a === (a | 0) && a >= 2 && a <= 36), e = e.toString().replace(/\s+/g, "");
      var f = 0;
      e[0] === "-" && (f++, this.negative = 1), f < e.length && (a === 16 ? this._parseHex(e, f, s) : (this._parseBase(e, a, f), s === "le" && this._initArray(this.toArray(), a, s)));
    }, D.prototype._initNumber = function(e, a, s) {
      e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [e & 67108863], this.length = 1) : e < 4503599627370496 ? (this.words = [
        e & 67108863,
        e / 67108864 & 67108863
      ], this.length = 2) : (i(e < 9007199254740992), this.words = [
        e & 67108863,
        e / 67108864 & 67108863,
        1
      ], this.length = 3), s === "le" && this._initArray(this.toArray(), a, s);
    }, D.prototype._initArray = function(e, a, s) {
      if (i(typeof e.length == "number"), e.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var A, C, B = 0;
      if (s === "be")
        for (f = e.length - 1, A = 0; f >= 0; f -= 3)
          C = e[f] | e[f - 1] << 8 | e[f - 2] << 16, this.words[A] |= C << B & 67108863, this.words[A + 1] = C >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, A++);
      else if (s === "le")
        for (f = 0, A = 0; f < e.length; f += 3)
          C = e[f] | e[f + 1] << 8 | e[f + 2] << 16, this.words[A] |= C << B & 67108863, this.words[A + 1] = C >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, A++);
      return this.strip();
    };
    function c(h, e) {
      var a = h.charCodeAt(e);
      return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
    }
    function p(h, e, a) {
      var s = c(h, a);
      return a - 1 >= e && (s |= c(h, a - 1) << 4), s;
    }
    D.prototype._parseHex = function(e, a, s) {
      this.length = Math.ceil((e.length - a) / 6), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var A = 0, C = 0, B;
      if (s === "be")
        for (f = e.length - 1; f >= a; f -= 2)
          B = p(e, a, f) << A, this.words[C] |= B & 67108863, A >= 18 ? (A -= 18, C += 1, this.words[C] |= B >>> 26) : A += 8;
      else {
        var F = e.length - a;
        for (f = F % 2 === 0 ? a + 1 : a; f < e.length; f += 2)
          B = p(e, a, f) << A, this.words[C] |= B & 67108863, A >= 18 ? (A -= 18, C += 1, this.words[C] |= B >>> 26) : A += 8;
      }
      this.strip();
    };
    function v(h, e, a, s) {
      for (var f = 0, A = Math.min(h.length, a), C = e; C < A; C++) {
        var B = h.charCodeAt(C) - 48;
        f *= s, B >= 49 ? f += B - 49 + 10 : B >= 17 ? f += B - 17 + 10 : f += B;
      }
      return f;
    }
    D.prototype._parseBase = function(e, a, s) {
      this.words = [0], this.length = 1;
      for (var f = 0, A = 1; A <= 67108863; A *= a)
        f++;
      f--, A = A / a | 0;
      for (var C = e.length - s, B = C % f, F = Math.min(C, C - B) + s, t = 0, l = s; l < F; l += f)
        t = v(e, l, l + f, a), this.imuln(A), this.words[0] + t < 67108864 ? this.words[0] += t : this._iaddn(t);
      if (B !== 0) {
        var R = 1;
        for (t = v(e, l, e.length, a), l = 0; l < B; l++)
          R *= a;
        this.imuln(R), this.words[0] + t < 67108864 ? this.words[0] += t : this._iaddn(t);
      }
      this.strip();
    }, D.prototype.copy = function(e) {
      e.words = new Array(this.length);
      for (var a = 0; a < this.length; a++)
        e.words[a] = this.words[a];
      e.length = this.length, e.negative = this.negative, e.red = this.red;
    }, D.prototype.clone = function() {
      var e = new D(null);
      return this.copy(e), e;
    }, D.prototype._expand = function(e) {
      for (; this.length < e; )
        this.words[this.length++] = 0;
      return this;
    }, D.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, D.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, D.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var m = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], M = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], _ = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    D.prototype.toString = function(e, a) {
      e = e || 10, a = a | 0 || 1;
      var s;
      if (e === 16 || e === "hex") {
        s = "";
        for (var f = 0, A = 0, C = 0; C < this.length; C++) {
          var B = this.words[C], F = ((B << f | A) & 16777215).toString(16);
          A = B >>> 24 - f & 16777215, A !== 0 || C !== this.length - 1 ? s = m[6 - F.length] + F + s : s = F + s, f += 2, f >= 26 && (f -= 26, C--);
        }
        for (A !== 0 && (s = A.toString(16) + s); s.length % a !== 0; )
          s = "0" + s;
        return this.negative !== 0 && (s = "-" + s), s;
      }
      if (e === (e | 0) && e >= 2 && e <= 36) {
        var t = M[e], l = _[e];
        s = "";
        var R = this.clone();
        for (R.negative = 0; !R.isZero(); ) {
          var L = R.modn(l).toString(e);
          R = R.idivn(l), R.isZero() ? s = L + s : s = m[t - L.length] + L + s;
        }
        for (this.isZero() && (s = "0" + s); s.length % a !== 0; )
          s = "0" + s;
        return this.negative !== 0 && (s = "-" + s), s;
      }
      i(!1, "Base should be between 2 and 36");
    }, D.prototype.toNumber = function() {
      var e = this.words[0];
      return this.length === 2 ? e += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? e += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -e : e;
    }, D.prototype.toJSON = function() {
      return this.toString(16);
    }, D.prototype.toBuffer = function(e, a) {
      return i(typeof E < "u"), this.toArrayLike(E, e, a);
    }, D.prototype.toArray = function(e, a) {
      return this.toArrayLike(Array, e, a);
    }, D.prototype.toArrayLike = function(e, a, s) {
      var f = this.byteLength(), A = s || Math.max(1, f);
      i(f <= A, "byte array longer than desired length"), i(A > 0, "Requested array length <= 0"), this.strip();
      var C = a === "le", B = new e(A), F, t, l = this.clone();
      if (C) {
        for (t = 0; !l.isZero(); t++)
          F = l.andln(255), l.iushrn(8), B[t] = F;
        for (; t < A; t++)
          B[t] = 0;
      } else {
        for (t = 0; t < A - f; t++)
          B[t] = 0;
        for (t = 0; !l.isZero(); t++)
          F = l.andln(255), l.iushrn(8), B[A - t - 1] = F;
      }
      return B;
    }, Math.clz32 ? D.prototype._countBits = function(e) {
      return 32 - Math.clz32(e);
    } : D.prototype._countBits = function(e) {
      var a = e, s = 0;
      return a >= 4096 && (s += 13, a >>>= 13), a >= 64 && (s += 7, a >>>= 7), a >= 8 && (s += 4, a >>>= 4), a >= 2 && (s += 2, a >>>= 2), s + a;
    }, D.prototype._zeroBits = function(e) {
      if (e === 0)
        return 26;
      var a = e, s = 0;
      return a & 8191 || (s += 13, a >>>= 13), a & 127 || (s += 7, a >>>= 7), a & 15 || (s += 4, a >>>= 4), a & 3 || (s += 2, a >>>= 2), a & 1 || s++, s;
    }, D.prototype.bitLength = function() {
      var e = this.words[this.length - 1], a = this._countBits(e);
      return (this.length - 1) * 26 + a;
    };
    function O(h) {
      for (var e = new Array(h.bitLength()), a = 0; a < e.length; a++) {
        var s = a / 26 | 0, f = a % 26;
        e[a] = (h.words[s] & 1 << f) >>> f;
      }
      return e;
    }
    D.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var e = 0, a = 0; a < this.length; a++) {
        var s = this._zeroBits(this.words[a]);
        if (e += s, s !== 26)
          break;
      }
      return e;
    }, D.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, D.prototype.toTwos = function(e) {
      return this.negative !== 0 ? this.abs().inotn(e).iaddn(1) : this.clone();
    }, D.prototype.fromTwos = function(e) {
      return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
    }, D.prototype.isNeg = function() {
      return this.negative !== 0;
    }, D.prototype.neg = function() {
      return this.clone().ineg();
    }, D.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, D.prototype.iuor = function(e) {
      for (; this.length < e.length; )
        this.words[this.length++] = 0;
      for (var a = 0; a < e.length; a++)
        this.words[a] = this.words[a] | e.words[a];
      return this.strip();
    }, D.prototype.ior = function(e) {
      return i((this.negative | e.negative) === 0), this.iuor(e);
    }, D.prototype.or = function(e) {
      return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
    }, D.prototype.uor = function(e) {
      return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
    }, D.prototype.iuand = function(e) {
      var a;
      this.length > e.length ? a = e : a = this;
      for (var s = 0; s < a.length; s++)
        this.words[s] = this.words[s] & e.words[s];
      return this.length = a.length, this.strip();
    }, D.prototype.iand = function(e) {
      return i((this.negative | e.negative) === 0), this.iuand(e);
    }, D.prototype.and = function(e) {
      return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
    }, D.prototype.uand = function(e) {
      return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
    }, D.prototype.iuxor = function(e) {
      var a, s;
      this.length > e.length ? (a = this, s = e) : (a = e, s = this);
      for (var f = 0; f < s.length; f++)
        this.words[f] = a.words[f] ^ s.words[f];
      if (this !== a)
        for (; f < a.length; f++)
          this.words[f] = a.words[f];
      return this.length = a.length, this.strip();
    }, D.prototype.ixor = function(e) {
      return i((this.negative | e.negative) === 0), this.iuxor(e);
    }, D.prototype.xor = function(e) {
      return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
    }, D.prototype.uxor = function(e) {
      return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
    }, D.prototype.inotn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = Math.ceil(e / 26) | 0, s = e % 26;
      this._expand(a), s > 0 && a--;
      for (var f = 0; f < a; f++)
        this.words[f] = ~this.words[f] & 67108863;
      return s > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - s), this.strip();
    }, D.prototype.notn = function(e) {
      return this.clone().inotn(e);
    }, D.prototype.setn = function(e, a) {
      i(typeof e == "number" && e >= 0);
      var s = e / 26 | 0, f = e % 26;
      return this._expand(s + 1), a ? this.words[s] = this.words[s] | 1 << f : this.words[s] = this.words[s] & ~(1 << f), this.strip();
    }, D.prototype.iadd = function(e) {
      var a;
      if (this.negative !== 0 && e.negative === 0)
        return this.negative = 0, a = this.isub(e), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && e.negative !== 0)
        return e.negative = 0, a = this.isub(e), e.negative = 1, a._normSign();
      var s, f;
      this.length > e.length ? (s = this, f = e) : (s = e, f = this);
      for (var A = 0, C = 0; C < f.length; C++)
        a = (s.words[C] | 0) + (f.words[C] | 0) + A, this.words[C] = a & 67108863, A = a >>> 26;
      for (; A !== 0 && C < s.length; C++)
        a = (s.words[C] | 0) + A, this.words[C] = a & 67108863, A = a >>> 26;
      if (this.length = s.length, A !== 0)
        this.words[this.length] = A, this.length++;
      else if (s !== this)
        for (; C < s.length; C++)
          this.words[C] = s.words[C];
      return this;
    }, D.prototype.add = function(e) {
      var a;
      return e.negative !== 0 && this.negative === 0 ? (e.negative = 0, a = this.sub(e), e.negative ^= 1, a) : e.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = e.sub(this), this.negative = 1, a) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
    }, D.prototype.isub = function(e) {
      if (e.negative !== 0) {
        e.negative = 0;
        var a = this.iadd(e);
        return e.negative = 1, a._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
      var s = this.cmp(e);
      if (s === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var f, A;
      s > 0 ? (f = this, A = e) : (f = e, A = this);
      for (var C = 0, B = 0; B < A.length; B++)
        a = (f.words[B] | 0) - (A.words[B] | 0) + C, C = a >> 26, this.words[B] = a & 67108863;
      for (; C !== 0 && B < f.length; B++)
        a = (f.words[B] | 0) + C, C = a >> 26, this.words[B] = a & 67108863;
      if (C === 0 && B < f.length && f !== this)
        for (; B < f.length; B++)
          this.words[B] = f.words[B];
      return this.length = Math.max(this.length, B), f !== this && (this.negative = 1), this.strip();
    }, D.prototype.sub = function(e) {
      return this.clone().isub(e);
    };
    function x(h, e, a) {
      a.negative = e.negative ^ h.negative;
      var s = h.length + e.length | 0;
      a.length = s, s = s - 1 | 0;
      var f = h.words[0] | 0, A = e.words[0] | 0, C = f * A, B = C & 67108863, F = C / 67108864 | 0;
      a.words[0] = B;
      for (var t = 1; t < s; t++) {
        for (var l = F >>> 26, R = F & 67108863, L = Math.min(t, e.length - 1), H = Math.max(0, t - h.length + 1); H <= L; H++) {
          var d = t - H | 0;
          f = h.words[d] | 0, A = e.words[H] | 0, C = f * A + R, l += C / 67108864 | 0, R = C & 67108863;
        }
        a.words[t] = R | 0, F = l | 0;
      }
      return F !== 0 ? a.words[t] = F | 0 : a.length--, a.strip();
    }
    var k = function(e, a, s) {
      var f = e.words, A = a.words, C = s.words, B = 0, F, t, l, R = f[0] | 0, L = R & 8191, H = R >>> 13, d = f[1] | 0, $ = d & 8191, j = d >>> 13, iu = f[2] | 0, X = iu & 8191, ru = iu >>> 13, Ru = f[3] | 0, eu = Ru & 8191, W = Ru >>> 13, $u = f[4] | 0, hu = $u & 8191, Eu = $u >>> 13, f0 = f[5] | 0, cu = f0 & 8191, Cu = f0 >>> 13, e0 = f[6] | 0, K = e0 & 8191, pu = e0 >>> 13, w = f[7] | 0, U = w & 8191, P = w >>> 13, Y = f[8] | 0, G = Y & 8191, V = Y >>> 13, tu = f[9] | 0, z = tu & 8191, Q = tu >>> 13, lu = A[0] | 0, su = lu & 8191, fu = lu >>> 13, ju = A[1] | 0, ou = ju & 8191, Fu = ju >>> 13, t0 = A[2] | 0, Au = t0 & 8191, du = t0 >>> 13, _0 = A[3] | 0, mu = _0 & 8191, yu = _0 >>> 13, M0 = A[4] | 0, gu = M0 & 8191, wu = M0 >>> 13, I0 = A[5] | 0, xu = I0 & 8191, bu = I0 >>> 13, S0 = A[6] | 0, _u = S0 & 8191, Mu = S0 >>> 13, U0 = A[7] | 0, Iu = U0 & 8191, Su = U0 >>> 13, T0 = A[8] | 0, Uu = T0 & 8191, Tu = T0 >>> 13, O0 = A[9] | 0, Ou = O0 & 8191, ku = O0 >>> 13;
      s.negative = e.negative ^ a.negative, s.length = 19, F = Math.imul(L, su), t = Math.imul(L, fu), t = t + Math.imul(H, su) | 0, l = Math.imul(H, fu);
      var F0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (F0 >>> 26) | 0, F0 &= 67108863, F = Math.imul($, su), t = Math.imul($, fu), t = t + Math.imul(j, su) | 0, l = Math.imul(j, fu), F = F + Math.imul(L, ou) | 0, t = t + Math.imul(L, Fu) | 0, t = t + Math.imul(H, ou) | 0, l = l + Math.imul(H, Fu) | 0;
      var l0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (l0 >>> 26) | 0, l0 &= 67108863, F = Math.imul(X, su), t = Math.imul(X, fu), t = t + Math.imul(ru, su) | 0, l = Math.imul(ru, fu), F = F + Math.imul($, ou) | 0, t = t + Math.imul($, Fu) | 0, t = t + Math.imul(j, ou) | 0, l = l + Math.imul(j, Fu) | 0, F = F + Math.imul(L, Au) | 0, t = t + Math.imul(L, du) | 0, t = t + Math.imul(H, Au) | 0, l = l + Math.imul(H, du) | 0;
      var A0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (A0 >>> 26) | 0, A0 &= 67108863, F = Math.imul(eu, su), t = Math.imul(eu, fu), t = t + Math.imul(W, su) | 0, l = Math.imul(W, fu), F = F + Math.imul(X, ou) | 0, t = t + Math.imul(X, Fu) | 0, t = t + Math.imul(ru, ou) | 0, l = l + Math.imul(ru, Fu) | 0, F = F + Math.imul($, Au) | 0, t = t + Math.imul($, du) | 0, t = t + Math.imul(j, Au) | 0, l = l + Math.imul(j, du) | 0, F = F + Math.imul(L, mu) | 0, t = t + Math.imul(L, yu) | 0, t = t + Math.imul(H, mu) | 0, l = l + Math.imul(H, yu) | 0;
      var h0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (h0 >>> 26) | 0, h0 &= 67108863, F = Math.imul(hu, su), t = Math.imul(hu, fu), t = t + Math.imul(Eu, su) | 0, l = Math.imul(Eu, fu), F = F + Math.imul(eu, ou) | 0, t = t + Math.imul(eu, Fu) | 0, t = t + Math.imul(W, ou) | 0, l = l + Math.imul(W, Fu) | 0, F = F + Math.imul(X, Au) | 0, t = t + Math.imul(X, du) | 0, t = t + Math.imul(ru, Au) | 0, l = l + Math.imul(ru, du) | 0, F = F + Math.imul($, mu) | 0, t = t + Math.imul($, yu) | 0, t = t + Math.imul(j, mu) | 0, l = l + Math.imul(j, yu) | 0, F = F + Math.imul(L, gu) | 0, t = t + Math.imul(L, wu) | 0, t = t + Math.imul(H, gu) | 0, l = l + Math.imul(H, wu) | 0;
      var E0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (E0 >>> 26) | 0, E0 &= 67108863, F = Math.imul(cu, su), t = Math.imul(cu, fu), t = t + Math.imul(Cu, su) | 0, l = Math.imul(Cu, fu), F = F + Math.imul(hu, ou) | 0, t = t + Math.imul(hu, Fu) | 0, t = t + Math.imul(Eu, ou) | 0, l = l + Math.imul(Eu, Fu) | 0, F = F + Math.imul(eu, Au) | 0, t = t + Math.imul(eu, du) | 0, t = t + Math.imul(W, Au) | 0, l = l + Math.imul(W, du) | 0, F = F + Math.imul(X, mu) | 0, t = t + Math.imul(X, yu) | 0, t = t + Math.imul(ru, mu) | 0, l = l + Math.imul(ru, yu) | 0, F = F + Math.imul($, gu) | 0, t = t + Math.imul($, wu) | 0, t = t + Math.imul(j, gu) | 0, l = l + Math.imul(j, wu) | 0, F = F + Math.imul(L, xu) | 0, t = t + Math.imul(L, bu) | 0, t = t + Math.imul(H, xu) | 0, l = l + Math.imul(H, bu) | 0;
      var c0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (c0 >>> 26) | 0, c0 &= 67108863, F = Math.imul(K, su), t = Math.imul(K, fu), t = t + Math.imul(pu, su) | 0, l = Math.imul(pu, fu), F = F + Math.imul(cu, ou) | 0, t = t + Math.imul(cu, Fu) | 0, t = t + Math.imul(Cu, ou) | 0, l = l + Math.imul(Cu, Fu) | 0, F = F + Math.imul(hu, Au) | 0, t = t + Math.imul(hu, du) | 0, t = t + Math.imul(Eu, Au) | 0, l = l + Math.imul(Eu, du) | 0, F = F + Math.imul(eu, mu) | 0, t = t + Math.imul(eu, yu) | 0, t = t + Math.imul(W, mu) | 0, l = l + Math.imul(W, yu) | 0, F = F + Math.imul(X, gu) | 0, t = t + Math.imul(X, wu) | 0, t = t + Math.imul(ru, gu) | 0, l = l + Math.imul(ru, wu) | 0, F = F + Math.imul($, xu) | 0, t = t + Math.imul($, bu) | 0, t = t + Math.imul(j, xu) | 0, l = l + Math.imul(j, bu) | 0, F = F + Math.imul(L, _u) | 0, t = t + Math.imul(L, Mu) | 0, t = t + Math.imul(H, _u) | 0, l = l + Math.imul(H, Mu) | 0;
      var C0 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (C0 >>> 26) | 0, C0 &= 67108863, F = Math.imul(U, su), t = Math.imul(U, fu), t = t + Math.imul(P, su) | 0, l = Math.imul(P, fu), F = F + Math.imul(K, ou) | 0, t = t + Math.imul(K, Fu) | 0, t = t + Math.imul(pu, ou) | 0, l = l + Math.imul(pu, Fu) | 0, F = F + Math.imul(cu, Au) | 0, t = t + Math.imul(cu, du) | 0, t = t + Math.imul(Cu, Au) | 0, l = l + Math.imul(Cu, du) | 0, F = F + Math.imul(hu, mu) | 0, t = t + Math.imul(hu, yu) | 0, t = t + Math.imul(Eu, mu) | 0, l = l + Math.imul(Eu, yu) | 0, F = F + Math.imul(eu, gu) | 0, t = t + Math.imul(eu, wu) | 0, t = t + Math.imul(W, gu) | 0, l = l + Math.imul(W, wu) | 0, F = F + Math.imul(X, xu) | 0, t = t + Math.imul(X, bu) | 0, t = t + Math.imul(ru, xu) | 0, l = l + Math.imul(ru, bu) | 0, F = F + Math.imul($, _u) | 0, t = t + Math.imul($, Mu) | 0, t = t + Math.imul(j, _u) | 0, l = l + Math.imul(j, Mu) | 0, F = F + Math.imul(L, Iu) | 0, t = t + Math.imul(L, Su) | 0, t = t + Math.imul(H, Iu) | 0, l = l + Math.imul(H, Su) | 0;
      var o2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (o2 >>> 26) | 0, o2 &= 67108863, F = Math.imul(G, su), t = Math.imul(G, fu), t = t + Math.imul(V, su) | 0, l = Math.imul(V, fu), F = F + Math.imul(U, ou) | 0, t = t + Math.imul(U, Fu) | 0, t = t + Math.imul(P, ou) | 0, l = l + Math.imul(P, Fu) | 0, F = F + Math.imul(K, Au) | 0, t = t + Math.imul(K, du) | 0, t = t + Math.imul(pu, Au) | 0, l = l + Math.imul(pu, du) | 0, F = F + Math.imul(cu, mu) | 0, t = t + Math.imul(cu, yu) | 0, t = t + Math.imul(Cu, mu) | 0, l = l + Math.imul(Cu, yu) | 0, F = F + Math.imul(hu, gu) | 0, t = t + Math.imul(hu, wu) | 0, t = t + Math.imul(Eu, gu) | 0, l = l + Math.imul(Eu, wu) | 0, F = F + Math.imul(eu, xu) | 0, t = t + Math.imul(eu, bu) | 0, t = t + Math.imul(W, xu) | 0, l = l + Math.imul(W, bu) | 0, F = F + Math.imul(X, _u) | 0, t = t + Math.imul(X, Mu) | 0, t = t + Math.imul(ru, _u) | 0, l = l + Math.imul(ru, Mu) | 0, F = F + Math.imul($, Iu) | 0, t = t + Math.imul($, Su) | 0, t = t + Math.imul(j, Iu) | 0, l = l + Math.imul(j, Su) | 0, F = F + Math.imul(L, Uu) | 0, t = t + Math.imul(L, Tu) | 0, t = t + Math.imul(H, Uu) | 0, l = l + Math.imul(H, Tu) | 0;
      var s2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (s2 >>> 26) | 0, s2 &= 67108863, F = Math.imul(z, su), t = Math.imul(z, fu), t = t + Math.imul(Q, su) | 0, l = Math.imul(Q, fu), F = F + Math.imul(G, ou) | 0, t = t + Math.imul(G, Fu) | 0, t = t + Math.imul(V, ou) | 0, l = l + Math.imul(V, Fu) | 0, F = F + Math.imul(U, Au) | 0, t = t + Math.imul(U, du) | 0, t = t + Math.imul(P, Au) | 0, l = l + Math.imul(P, du) | 0, F = F + Math.imul(K, mu) | 0, t = t + Math.imul(K, yu) | 0, t = t + Math.imul(pu, mu) | 0, l = l + Math.imul(pu, yu) | 0, F = F + Math.imul(cu, gu) | 0, t = t + Math.imul(cu, wu) | 0, t = t + Math.imul(Cu, gu) | 0, l = l + Math.imul(Cu, wu) | 0, F = F + Math.imul(hu, xu) | 0, t = t + Math.imul(hu, bu) | 0, t = t + Math.imul(Eu, xu) | 0, l = l + Math.imul(Eu, bu) | 0, F = F + Math.imul(eu, _u) | 0, t = t + Math.imul(eu, Mu) | 0, t = t + Math.imul(W, _u) | 0, l = l + Math.imul(W, Mu) | 0, F = F + Math.imul(X, Iu) | 0, t = t + Math.imul(X, Su) | 0, t = t + Math.imul(ru, Iu) | 0, l = l + Math.imul(ru, Su) | 0, F = F + Math.imul($, Uu) | 0, t = t + Math.imul($, Tu) | 0, t = t + Math.imul(j, Uu) | 0, l = l + Math.imul(j, Tu) | 0, F = F + Math.imul(L, Ou) | 0, t = t + Math.imul(L, ku) | 0, t = t + Math.imul(H, Ou) | 0, l = l + Math.imul(H, ku) | 0;
      var f2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (f2 >>> 26) | 0, f2 &= 67108863, F = Math.imul(z, ou), t = Math.imul(z, Fu), t = t + Math.imul(Q, ou) | 0, l = Math.imul(Q, Fu), F = F + Math.imul(G, Au) | 0, t = t + Math.imul(G, du) | 0, t = t + Math.imul(V, Au) | 0, l = l + Math.imul(V, du) | 0, F = F + Math.imul(U, mu) | 0, t = t + Math.imul(U, yu) | 0, t = t + Math.imul(P, mu) | 0, l = l + Math.imul(P, yu) | 0, F = F + Math.imul(K, gu) | 0, t = t + Math.imul(K, wu) | 0, t = t + Math.imul(pu, gu) | 0, l = l + Math.imul(pu, wu) | 0, F = F + Math.imul(cu, xu) | 0, t = t + Math.imul(cu, bu) | 0, t = t + Math.imul(Cu, xu) | 0, l = l + Math.imul(Cu, bu) | 0, F = F + Math.imul(hu, _u) | 0, t = t + Math.imul(hu, Mu) | 0, t = t + Math.imul(Eu, _u) | 0, l = l + Math.imul(Eu, Mu) | 0, F = F + Math.imul(eu, Iu) | 0, t = t + Math.imul(eu, Su) | 0, t = t + Math.imul(W, Iu) | 0, l = l + Math.imul(W, Su) | 0, F = F + Math.imul(X, Uu) | 0, t = t + Math.imul(X, Tu) | 0, t = t + Math.imul(ru, Uu) | 0, l = l + Math.imul(ru, Tu) | 0, F = F + Math.imul($, Ou) | 0, t = t + Math.imul($, ku) | 0, t = t + Math.imul(j, Ou) | 0, l = l + Math.imul(j, ku) | 0;
      var F2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (F2 >>> 26) | 0, F2 &= 67108863, F = Math.imul(z, Au), t = Math.imul(z, du), t = t + Math.imul(Q, Au) | 0, l = Math.imul(Q, du), F = F + Math.imul(G, mu) | 0, t = t + Math.imul(G, yu) | 0, t = t + Math.imul(V, mu) | 0, l = l + Math.imul(V, yu) | 0, F = F + Math.imul(U, gu) | 0, t = t + Math.imul(U, wu) | 0, t = t + Math.imul(P, gu) | 0, l = l + Math.imul(P, wu) | 0, F = F + Math.imul(K, xu) | 0, t = t + Math.imul(K, bu) | 0, t = t + Math.imul(pu, xu) | 0, l = l + Math.imul(pu, bu) | 0, F = F + Math.imul(cu, _u) | 0, t = t + Math.imul(cu, Mu) | 0, t = t + Math.imul(Cu, _u) | 0, l = l + Math.imul(Cu, Mu) | 0, F = F + Math.imul(hu, Iu) | 0, t = t + Math.imul(hu, Su) | 0, t = t + Math.imul(Eu, Iu) | 0, l = l + Math.imul(Eu, Su) | 0, F = F + Math.imul(eu, Uu) | 0, t = t + Math.imul(eu, Tu) | 0, t = t + Math.imul(W, Uu) | 0, l = l + Math.imul(W, Tu) | 0, F = F + Math.imul(X, Ou) | 0, t = t + Math.imul(X, ku) | 0, t = t + Math.imul(ru, Ou) | 0, l = l + Math.imul(ru, ku) | 0;
      var l2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (l2 >>> 26) | 0, l2 &= 67108863, F = Math.imul(z, mu), t = Math.imul(z, yu), t = t + Math.imul(Q, mu) | 0, l = Math.imul(Q, yu), F = F + Math.imul(G, gu) | 0, t = t + Math.imul(G, wu) | 0, t = t + Math.imul(V, gu) | 0, l = l + Math.imul(V, wu) | 0, F = F + Math.imul(U, xu) | 0, t = t + Math.imul(U, bu) | 0, t = t + Math.imul(P, xu) | 0, l = l + Math.imul(P, bu) | 0, F = F + Math.imul(K, _u) | 0, t = t + Math.imul(K, Mu) | 0, t = t + Math.imul(pu, _u) | 0, l = l + Math.imul(pu, Mu) | 0, F = F + Math.imul(cu, Iu) | 0, t = t + Math.imul(cu, Su) | 0, t = t + Math.imul(Cu, Iu) | 0, l = l + Math.imul(Cu, Su) | 0, F = F + Math.imul(hu, Uu) | 0, t = t + Math.imul(hu, Tu) | 0, t = t + Math.imul(Eu, Uu) | 0, l = l + Math.imul(Eu, Tu) | 0, F = F + Math.imul(eu, Ou) | 0, t = t + Math.imul(eu, ku) | 0, t = t + Math.imul(W, Ou) | 0, l = l + Math.imul(W, ku) | 0;
      var A2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (A2 >>> 26) | 0, A2 &= 67108863, F = Math.imul(z, gu), t = Math.imul(z, wu), t = t + Math.imul(Q, gu) | 0, l = Math.imul(Q, wu), F = F + Math.imul(G, xu) | 0, t = t + Math.imul(G, bu) | 0, t = t + Math.imul(V, xu) | 0, l = l + Math.imul(V, bu) | 0, F = F + Math.imul(U, _u) | 0, t = t + Math.imul(U, Mu) | 0, t = t + Math.imul(P, _u) | 0, l = l + Math.imul(P, Mu) | 0, F = F + Math.imul(K, Iu) | 0, t = t + Math.imul(K, Su) | 0, t = t + Math.imul(pu, Iu) | 0, l = l + Math.imul(pu, Su) | 0, F = F + Math.imul(cu, Uu) | 0, t = t + Math.imul(cu, Tu) | 0, t = t + Math.imul(Cu, Uu) | 0, l = l + Math.imul(Cu, Tu) | 0, F = F + Math.imul(hu, Ou) | 0, t = t + Math.imul(hu, ku) | 0, t = t + Math.imul(Eu, Ou) | 0, l = l + Math.imul(Eu, ku) | 0;
      var h2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (h2 >>> 26) | 0, h2 &= 67108863, F = Math.imul(z, xu), t = Math.imul(z, bu), t = t + Math.imul(Q, xu) | 0, l = Math.imul(Q, bu), F = F + Math.imul(G, _u) | 0, t = t + Math.imul(G, Mu) | 0, t = t + Math.imul(V, _u) | 0, l = l + Math.imul(V, Mu) | 0, F = F + Math.imul(U, Iu) | 0, t = t + Math.imul(U, Su) | 0, t = t + Math.imul(P, Iu) | 0, l = l + Math.imul(P, Su) | 0, F = F + Math.imul(K, Uu) | 0, t = t + Math.imul(K, Tu) | 0, t = t + Math.imul(pu, Uu) | 0, l = l + Math.imul(pu, Tu) | 0, F = F + Math.imul(cu, Ou) | 0, t = t + Math.imul(cu, ku) | 0, t = t + Math.imul(Cu, Ou) | 0, l = l + Math.imul(Cu, ku) | 0;
      var E2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (E2 >>> 26) | 0, E2 &= 67108863, F = Math.imul(z, _u), t = Math.imul(z, Mu), t = t + Math.imul(Q, _u) | 0, l = Math.imul(Q, Mu), F = F + Math.imul(G, Iu) | 0, t = t + Math.imul(G, Su) | 0, t = t + Math.imul(V, Iu) | 0, l = l + Math.imul(V, Su) | 0, F = F + Math.imul(U, Uu) | 0, t = t + Math.imul(U, Tu) | 0, t = t + Math.imul(P, Uu) | 0, l = l + Math.imul(P, Tu) | 0, F = F + Math.imul(K, Ou) | 0, t = t + Math.imul(K, ku) | 0, t = t + Math.imul(pu, Ou) | 0, l = l + Math.imul(pu, ku) | 0;
      var c2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (c2 >>> 26) | 0, c2 &= 67108863, F = Math.imul(z, Iu), t = Math.imul(z, Su), t = t + Math.imul(Q, Iu) | 0, l = Math.imul(Q, Su), F = F + Math.imul(G, Uu) | 0, t = t + Math.imul(G, Tu) | 0, t = t + Math.imul(V, Uu) | 0, l = l + Math.imul(V, Tu) | 0, F = F + Math.imul(U, Ou) | 0, t = t + Math.imul(U, ku) | 0, t = t + Math.imul(P, Ou) | 0, l = l + Math.imul(P, ku) | 0;
      var C2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (C2 >>> 26) | 0, C2 &= 67108863, F = Math.imul(z, Uu), t = Math.imul(z, Tu), t = t + Math.imul(Q, Uu) | 0, l = Math.imul(Q, Tu), F = F + Math.imul(G, Ou) | 0, t = t + Math.imul(G, ku) | 0, t = t + Math.imul(V, Ou) | 0, l = l + Math.imul(V, ku) | 0;
      var d2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      B = (l + (t >>> 13) | 0) + (d2 >>> 26) | 0, d2 &= 67108863, F = Math.imul(z, Ou), t = Math.imul(z, ku), t = t + Math.imul(Q, Ou) | 0, l = Math.imul(Q, ku);
      var p2 = (B + F | 0) + ((t & 8191) << 13) | 0;
      return B = (l + (t >>> 13) | 0) + (p2 >>> 26) | 0, p2 &= 67108863, C[0] = F0, C[1] = l0, C[2] = A0, C[3] = h0, C[4] = E0, C[5] = c0, C[6] = C0, C[7] = o2, C[8] = s2, C[9] = f2, C[10] = F2, C[11] = l2, C[12] = A2, C[13] = h2, C[14] = E2, C[15] = c2, C[16] = C2, C[17] = d2, C[18] = p2, B !== 0 && (C[19] = B, s.length++), s;
    };
    Math.imul || (k = x);
    function g(h, e, a) {
      a.negative = e.negative ^ h.negative, a.length = h.length + e.length;
      for (var s = 0, f = 0, A = 0; A < a.length - 1; A++) {
        var C = f;
        f = 0;
        for (var B = s & 67108863, F = Math.min(A, e.length - 1), t = Math.max(0, A - h.length + 1); t <= F; t++) {
          var l = A - t, R = h.words[l] | 0, L = e.words[t] | 0, H = R * L, d = H & 67108863;
          C = C + (H / 67108864 | 0) | 0, d = d + B | 0, B = d & 67108863, C = C + (d >>> 26) | 0, f += C >>> 26, C &= 67108863;
        }
        a.words[A] = B, s = C, C = f;
      }
      return s !== 0 ? a.words[A] = s : a.length--, a.strip();
    }
    function b(h, e, a) {
      var s = new y();
      return s.mulp(h, e, a);
    }
    D.prototype.mulTo = function(e, a) {
      var s, f = this.length + e.length;
      return this.length === 10 && e.length === 10 ? s = k(this, e, a) : f < 63 ? s = x(this, e, a) : f < 1024 ? s = g(this, e, a) : s = b(this, e, a), s;
    };
    function y(h, e) {
      this.x = h, this.y = e;
    }
    y.prototype.makeRBT = function(e) {
      for (var a = new Array(e), s = D.prototype._countBits(e) - 1, f = 0; f < e; f++)
        a[f] = this.revBin(f, s, e);
      return a;
    }, y.prototype.revBin = function(e, a, s) {
      if (e === 0 || e === s - 1)
        return e;
      for (var f = 0, A = 0; A < a; A++)
        f |= (e & 1) << a - A - 1, e >>= 1;
      return f;
    }, y.prototype.permute = function(e, a, s, f, A, C) {
      for (var B = 0; B < C; B++)
        f[B] = a[e[B]], A[B] = s[e[B]];
    }, y.prototype.transform = function(e, a, s, f, A, C) {
      this.permute(C, e, a, s, f, A);
      for (var B = 1; B < A; B <<= 1)
        for (var F = B << 1, t = Math.cos(2 * Math.PI / F), l = Math.sin(2 * Math.PI / F), R = 0; R < A; R += F)
          for (var L = t, H = l, d = 0; d < B; d++) {
            var $ = s[R + d], j = f[R + d], iu = s[R + d + B], X = f[R + d + B], ru = L * iu - H * X;
            X = L * X + H * iu, iu = ru, s[R + d] = $ + iu, f[R + d] = j + X, s[R + d + B] = $ - iu, f[R + d + B] = j - X, d !== F && (ru = t * L - l * H, H = t * H + l * L, L = ru);
          }
    }, y.prototype.guessLen13b = function(e, a) {
      var s = Math.max(a, e) | 1, f = s & 1, A = 0;
      for (s = s / 2 | 0; s; s = s >>> 1)
        A++;
      return 1 << A + 1 + f;
    }, y.prototype.conjugate = function(e, a, s) {
      if (!(s <= 1))
        for (var f = 0; f < s / 2; f++) {
          var A = e[f];
          e[f] = e[s - f - 1], e[s - f - 1] = A, A = a[f], a[f] = -a[s - f - 1], a[s - f - 1] = -A;
        }
    }, y.prototype.normalize13b = function(e, a) {
      for (var s = 0, f = 0; f < a / 2; f++) {
        var A = Math.round(e[2 * f + 1] / a) * 8192 + Math.round(e[2 * f] / a) + s;
        e[f] = A & 67108863, A < 67108864 ? s = 0 : s = A / 67108864 | 0;
      }
      return e;
    }, y.prototype.convert13b = function(e, a, s, f) {
      for (var A = 0, C = 0; C < a; C++)
        A = A + (e[C] | 0), s[2 * C] = A & 8191, A = A >>> 13, s[2 * C + 1] = A & 8191, A = A >>> 13;
      for (C = 2 * a; C < f; ++C)
        s[C] = 0;
      i(A === 0), i((A & -8192) === 0);
    }, y.prototype.stub = function(e) {
      for (var a = new Array(e), s = 0; s < e; s++)
        a[s] = 0;
      return a;
    }, y.prototype.mulp = function(e, a, s) {
      var f = 2 * this.guessLen13b(e.length, a.length), A = this.makeRBT(f), C = this.stub(f), B = new Array(f), F = new Array(f), t = new Array(f), l = new Array(f), R = new Array(f), L = new Array(f), H = s.words;
      H.length = f, this.convert13b(e.words, e.length, B, f), this.convert13b(a.words, a.length, l, f), this.transform(B, C, F, t, f, A), this.transform(l, C, R, L, f, A);
      for (var d = 0; d < f; d++) {
        var $ = F[d] * R[d] - t[d] * L[d];
        t[d] = F[d] * L[d] + t[d] * R[d], F[d] = $;
      }
      return this.conjugate(F, t, f), this.transform(F, t, H, C, f, A), this.conjugate(H, C, f), this.normalize13b(H, f), s.negative = e.negative ^ a.negative, s.length = e.length + a.length, s.strip();
    }, D.prototype.mul = function(e) {
      var a = new D(null);
      return a.words = new Array(this.length + e.length), this.mulTo(e, a);
    }, D.prototype.mulf = function(e) {
      var a = new D(null);
      return a.words = new Array(this.length + e.length), b(this, e, a);
    }, D.prototype.imul = function(e) {
      return this.clone().mulTo(e, this);
    }, D.prototype.imuln = function(e) {
      i(typeof e == "number"), i(e < 67108864);
      for (var a = 0, s = 0; s < this.length; s++) {
        var f = (this.words[s] | 0) * e, A = (f & 67108863) + (a & 67108863);
        a >>= 26, a += f / 67108864 | 0, a += A >>> 26, this.words[s] = A & 67108863;
      }
      return a !== 0 && (this.words[s] = a, this.length++), this;
    }, D.prototype.muln = function(e) {
      return this.clone().imuln(e);
    }, D.prototype.sqr = function() {
      return this.mul(this);
    }, D.prototype.isqr = function() {
      return this.imul(this.clone());
    }, D.prototype.pow = function(e) {
      var a = O(e);
      if (a.length === 0)
        return new D(1);
      for (var s = this, f = 0; f < a.length && a[f] === 0; f++, s = s.sqr())
        ;
      if (++f < a.length)
        for (var A = s.sqr(); f < a.length; f++, A = A.sqr())
          a[f] !== 0 && (s = s.mul(A));
      return s;
    }, D.prototype.iushln = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26, f = 67108863 >>> 26 - a << 26 - a, A;
      if (a !== 0) {
        var C = 0;
        for (A = 0; A < this.length; A++) {
          var B = this.words[A] & f, F = (this.words[A] | 0) - B << a;
          this.words[A] = F | C, C = B >>> 26 - a;
        }
        C && (this.words[A] = C, this.length++);
      }
      if (s !== 0) {
        for (A = this.length - 1; A >= 0; A--)
          this.words[A + s] = this.words[A];
        for (A = 0; A < s; A++)
          this.words[A] = 0;
        this.length += s;
      }
      return this.strip();
    }, D.prototype.ishln = function(e) {
      return i(this.negative === 0), this.iushln(e);
    }, D.prototype.iushrn = function(e, a, s) {
      i(typeof e == "number" && e >= 0);
      var f;
      a ? f = (a - a % 26) / 26 : f = 0;
      var A = e % 26, C = Math.min((e - A) / 26, this.length), B = 67108863 ^ 67108863 >>> A << A, F = s;
      if (f -= C, f = Math.max(0, f), F) {
        for (var t = 0; t < C; t++)
          F.words[t] = this.words[t];
        F.length = C;
      }
      if (C !== 0)
        if (this.length > C)
          for (this.length -= C, t = 0; t < this.length; t++)
            this.words[t] = this.words[t + C];
        else
          this.words[0] = 0, this.length = 1;
      var l = 0;
      for (t = this.length - 1; t >= 0 && (l !== 0 || t >= f); t--) {
        var R = this.words[t] | 0;
        this.words[t] = l << 26 - A | R >>> A, l = R & B;
      }
      return F && l !== 0 && (F.words[F.length++] = l), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, D.prototype.ishrn = function(e, a, s) {
      return i(this.negative === 0), this.iushrn(e, a, s);
    }, D.prototype.shln = function(e) {
      return this.clone().ishln(e);
    }, D.prototype.ushln = function(e) {
      return this.clone().iushln(e);
    }, D.prototype.shrn = function(e) {
      return this.clone().ishrn(e);
    }, D.prototype.ushrn = function(e) {
      return this.clone().iushrn(e);
    }, D.prototype.testn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26, f = 1 << a;
      if (this.length <= s)
        return !1;
      var A = this.words[s];
      return !!(A & f);
    }, D.prototype.imaskn = function(e) {
      i(typeof e == "number" && e >= 0);
      var a = e % 26, s = (e - a) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= s)
        return this;
      if (a !== 0 && s++, this.length = Math.min(s, this.length), a !== 0) {
        var f = 67108863 ^ 67108863 >>> a << a;
        this.words[this.length - 1] &= f;
      }
      return this.strip();
    }, D.prototype.maskn = function(e) {
      return this.clone().imaskn(e);
    }, D.prototype.iaddn = function(e) {
      return i(typeof e == "number"), i(e < 67108864), e < 0 ? this.isubn(-e) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < e ? (this.words[0] = e - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
    }, D.prototype._iaddn = function(e) {
      this.words[0] += e;
      for (var a = 0; a < this.length && this.words[a] >= 67108864; a++)
        this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
      return this.length = Math.max(this.length, a + 1), this;
    }, D.prototype.isubn = function(e) {
      if (i(typeof e == "number"), i(e < 67108864), e < 0)
        return this.iaddn(-e);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(e), this.negative = 1, this;
      if (this.words[0] -= e, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a = 0; a < this.length && this.words[a] < 0; a++)
          this.words[a] += 67108864, this.words[a + 1] -= 1;
      return this.strip();
    }, D.prototype.addn = function(e) {
      return this.clone().iaddn(e);
    }, D.prototype.subn = function(e) {
      return this.clone().isubn(e);
    }, D.prototype.iabs = function() {
      return this.negative = 0, this;
    }, D.prototype.abs = function() {
      return this.clone().iabs();
    }, D.prototype._ishlnsubmul = function(e, a, s) {
      var f = e.length + s, A;
      this._expand(f);
      var C, B = 0;
      for (A = 0; A < e.length; A++) {
        C = (this.words[A + s] | 0) + B;
        var F = (e.words[A] | 0) * a;
        C -= F & 67108863, B = (C >> 26) - (F / 67108864 | 0), this.words[A + s] = C & 67108863;
      }
      for (; A < this.length - s; A++)
        C = (this.words[A + s] | 0) + B, B = C >> 26, this.words[A + s] = C & 67108863;
      if (B === 0)
        return this.strip();
      for (i(B === -1), B = 0, A = 0; A < this.length; A++)
        C = -(this.words[A] | 0) + B, B = C >> 26, this.words[A] = C & 67108863;
      return this.negative = 1, this.strip();
    }, D.prototype._wordDiv = function(e, a) {
      var s = this.length - e.length, f = this.clone(), A = e, C = A.words[A.length - 1] | 0, B = this._countBits(C);
      s = 26 - B, s !== 0 && (A = A.ushln(s), f.iushln(s), C = A.words[A.length - 1] | 0);
      var F = f.length - A.length, t;
      if (a !== "mod") {
        t = new D(null), t.length = F + 1, t.words = new Array(t.length);
        for (var l = 0; l < t.length; l++)
          t.words[l] = 0;
      }
      var R = f.clone()._ishlnsubmul(A, 1, F);
      R.negative === 0 && (f = R, t && (t.words[F] = 1));
      for (var L = F - 1; L >= 0; L--) {
        var H = (f.words[A.length + L] | 0) * 67108864 + (f.words[A.length + L - 1] | 0);
        for (H = Math.min(H / C | 0, 67108863), f._ishlnsubmul(A, H, L); f.negative !== 0; )
          H--, f.negative = 0, f._ishlnsubmul(A, 1, L), f.isZero() || (f.negative ^= 1);
        t && (t.words[L] = H);
      }
      return t && t.strip(), f.strip(), a !== "div" && s !== 0 && f.iushrn(s), {
        div: t || null,
        mod: f
      };
    }, D.prototype.divmod = function(e, a, s) {
      if (i(!e.isZero()), this.isZero())
        return {
          div: new D(0),
          mod: new D(0)
        };
      var f, A, C;
      return this.negative !== 0 && e.negative === 0 ? (C = this.neg().divmod(e, a), a !== "mod" && (f = C.div.neg()), a !== "div" && (A = C.mod.neg(), s && A.negative !== 0 && A.iadd(e)), {
        div: f,
        mod: A
      }) : this.negative === 0 && e.negative !== 0 ? (C = this.divmod(e.neg(), a), a !== "mod" && (f = C.div.neg()), {
        div: f,
        mod: C.mod
      }) : this.negative & e.negative ? (C = this.neg().divmod(e.neg(), a), a !== "div" && (A = C.mod.neg(), s && A.negative !== 0 && A.isub(e)), {
        div: C.div,
        mod: A
      }) : e.length > this.length || this.cmp(e) < 0 ? {
        div: new D(0),
        mod: this
      } : e.length === 1 ? a === "div" ? {
        div: this.divn(e.words[0]),
        mod: null
      } : a === "mod" ? {
        div: null,
        mod: new D(this.modn(e.words[0]))
      } : {
        div: this.divn(e.words[0]),
        mod: new D(this.modn(e.words[0]))
      } : this._wordDiv(e, a);
    }, D.prototype.div = function(e) {
      return this.divmod(e, "div", !1).div;
    }, D.prototype.mod = function(e) {
      return this.divmod(e, "mod", !1).mod;
    }, D.prototype.umod = function(e) {
      return this.divmod(e, "mod", !0).mod;
    }, D.prototype.divRound = function(e) {
      var a = this.divmod(e);
      if (a.mod.isZero())
        return a.div;
      var s = a.div.negative !== 0 ? a.mod.isub(e) : a.mod, f = e.ushrn(1), A = e.andln(1), C = s.cmp(f);
      return C < 0 || A === 1 && C === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
    }, D.prototype.modn = function(e) {
      i(e <= 67108863);
      for (var a = (1 << 26) % e, s = 0, f = this.length - 1; f >= 0; f--)
        s = (a * s + (this.words[f] | 0)) % e;
      return s;
    }, D.prototype.idivn = function(e) {
      i(e <= 67108863);
      for (var a = 0, s = this.length - 1; s >= 0; s--) {
        var f = (this.words[s] | 0) + a * 67108864;
        this.words[s] = f / e | 0, a = f % e;
      }
      return this.strip();
    }, D.prototype.divn = function(e) {
      return this.clone().idivn(e);
    }, D.prototype.egcd = function(e) {
      i(e.negative === 0), i(!e.isZero());
      var a = this, s = e.clone();
      a.negative !== 0 ? a = a.umod(e) : a = a.clone();
      for (var f = new D(1), A = new D(0), C = new D(0), B = new D(1), F = 0; a.isEven() && s.isEven(); )
        a.iushrn(1), s.iushrn(1), ++F;
      for (var t = s.clone(), l = a.clone(); !a.isZero(); ) {
        for (var R = 0, L = 1; !(a.words[0] & L) && R < 26; ++R, L <<= 1)
          ;
        if (R > 0)
          for (a.iushrn(R); R-- > 0; )
            (f.isOdd() || A.isOdd()) && (f.iadd(t), A.isub(l)), f.iushrn(1), A.iushrn(1);
        for (var H = 0, d = 1; !(s.words[0] & d) && H < 26; ++H, d <<= 1)
          ;
        if (H > 0)
          for (s.iushrn(H); H-- > 0; )
            (C.isOdd() || B.isOdd()) && (C.iadd(t), B.isub(l)), C.iushrn(1), B.iushrn(1);
        a.cmp(s) >= 0 ? (a.isub(s), f.isub(C), A.isub(B)) : (s.isub(a), C.isub(f), B.isub(A));
      }
      return {
        a: C,
        b: B,
        gcd: s.iushln(F)
      };
    }, D.prototype._invmp = function(e) {
      i(e.negative === 0), i(!e.isZero());
      var a = this, s = e.clone();
      a.negative !== 0 ? a = a.umod(e) : a = a.clone();
      for (var f = new D(1), A = new D(0), C = s.clone(); a.cmpn(1) > 0 && s.cmpn(1) > 0; ) {
        for (var B = 0, F = 1; !(a.words[0] & F) && B < 26; ++B, F <<= 1)
          ;
        if (B > 0)
          for (a.iushrn(B); B-- > 0; )
            f.isOdd() && f.iadd(C), f.iushrn(1);
        for (var t = 0, l = 1; !(s.words[0] & l) && t < 26; ++t, l <<= 1)
          ;
        if (t > 0)
          for (s.iushrn(t); t-- > 0; )
            A.isOdd() && A.iadd(C), A.iushrn(1);
        a.cmp(s) >= 0 ? (a.isub(s), f.isub(A)) : (s.isub(a), A.isub(f));
      }
      var R;
      return a.cmpn(1) === 0 ? R = f : R = A, R.cmpn(0) < 0 && R.iadd(e), R;
    }, D.prototype.gcd = function(e) {
      if (this.isZero())
        return e.abs();
      if (e.isZero())
        return this.abs();
      var a = this.clone(), s = e.clone();
      a.negative = 0, s.negative = 0;
      for (var f = 0; a.isEven() && s.isEven(); f++)
        a.iushrn(1), s.iushrn(1);
      do {
        for (; a.isEven(); )
          a.iushrn(1);
        for (; s.isEven(); )
          s.iushrn(1);
        var A = a.cmp(s);
        if (A < 0) {
          var C = a;
          a = s, s = C;
        } else if (A === 0 || s.cmpn(1) === 0)
          break;
        a.isub(s);
      } while (!0);
      return s.iushln(f);
    }, D.prototype.invm = function(e) {
      return this.egcd(e).a.umod(e);
    }, D.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, D.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, D.prototype.andln = function(e) {
      return this.words[0] & e;
    }, D.prototype.bincn = function(e) {
      i(typeof e == "number");
      var a = e % 26, s = (e - a) / 26, f = 1 << a;
      if (this.length <= s)
        return this._expand(s + 1), this.words[s] |= f, this;
      for (var A = f, C = s; A !== 0 && C < this.length; C++) {
        var B = this.words[C] | 0;
        B += A, A = B >>> 26, B &= 67108863, this.words[C] = B;
      }
      return A !== 0 && (this.words[C] = A, this.length++), this;
    }, D.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, D.prototype.cmpn = function(e) {
      var a = e < 0;
      if (this.negative !== 0 && !a)
        return -1;
      if (this.negative === 0 && a)
        return 1;
      this.strip();
      var s;
      if (this.length > 1)
        s = 1;
      else {
        a && (e = -e), i(e <= 67108863, "Number is too big");
        var f = this.words[0] | 0;
        s = f === e ? 0 : f < e ? -1 : 1;
      }
      return this.negative !== 0 ? -s | 0 : s;
    }, D.prototype.cmp = function(e) {
      if (this.negative !== 0 && e.negative === 0)
        return -1;
      if (this.negative === 0 && e.negative !== 0)
        return 1;
      var a = this.ucmp(e);
      return this.negative !== 0 ? -a | 0 : a;
    }, D.prototype.ucmp = function(e) {
      if (this.length > e.length)
        return 1;
      if (this.length < e.length)
        return -1;
      for (var a = 0, s = this.length - 1; s >= 0; s--) {
        var f = this.words[s] | 0, A = e.words[s] | 0;
        if (f !== A) {
          f < A ? a = -1 : f > A && (a = 1);
          break;
        }
      }
      return a;
    }, D.prototype.gtn = function(e) {
      return this.cmpn(e) === 1;
    }, D.prototype.gt = function(e) {
      return this.cmp(e) === 1;
    }, D.prototype.gten = function(e) {
      return this.cmpn(e) >= 0;
    }, D.prototype.gte = function(e) {
      return this.cmp(e) >= 0;
    }, D.prototype.ltn = function(e) {
      return this.cmpn(e) === -1;
    }, D.prototype.lt = function(e) {
      return this.cmp(e) === -1;
    }, D.prototype.lten = function(e) {
      return this.cmpn(e) <= 0;
    }, D.prototype.lte = function(e) {
      return this.cmp(e) <= 0;
    }, D.prototype.eqn = function(e) {
      return this.cmpn(e) === 0;
    }, D.prototype.eq = function(e) {
      return this.cmp(e) === 0;
    }, D.red = function(e) {
      return new Z(e);
    }, D.prototype.toRed = function(e) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), e.convertTo(this)._forceRed(e);
    }, D.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, D.prototype._forceRed = function(e) {
      return this.red = e, this;
    }, D.prototype.forceRed = function(e) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(e);
    }, D.prototype.redAdd = function(e) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
    }, D.prototype.redIAdd = function(e) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
    }, D.prototype.redSub = function(e) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
    }, D.prototype.redISub = function(e) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
    }, D.prototype.redShl = function(e) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
    }, D.prototype.redMul = function(e) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
    }, D.prototype.redIMul = function(e) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
    }, D.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, D.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, D.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, D.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, D.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, D.prototype.redPow = function(e) {
      return i(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
    };
    var I = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function T(h, e) {
      this.name = h, this.p = new D(e, 16), this.n = this.p.bitLength(), this.k = new D(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    T.prototype._tmp = function() {
      var e = new D(null);
      return e.words = new Array(Math.ceil(this.n / 13)), e;
    }, T.prototype.ireduce = function(e) {
      var a = e, s;
      do
        this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), s = a.bitLength();
      while (s > this.n);
      var f = s < this.n ? -1 : a.ucmp(this.p);
      return f === 0 ? (a.words[0] = 0, a.length = 1) : f > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
    }, T.prototype.split = function(e, a) {
      e.iushrn(this.n, 0, a);
    }, T.prototype.imulK = function(e) {
      return e.imul(this.k);
    };
    function uu() {
      T.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(uu, T), uu.prototype.split = function(e, a) {
      for (var s = 4194303, f = Math.min(e.length, 9), A = 0; A < f; A++)
        a.words[A] = e.words[A];
      if (a.length = f, e.length <= 9) {
        e.words[0] = 0, e.length = 1;
        return;
      }
      var C = e.words[9];
      for (a.words[a.length++] = C & s, A = 10; A < e.length; A++) {
        var B = e.words[A] | 0;
        e.words[A - 10] = (B & s) << 4 | C >>> 22, C = B;
      }
      C >>>= 22, e.words[A - 10] = C, C === 0 && e.length > 10 ? e.length -= 10 : e.length -= 9;
    }, uu.prototype.imulK = function(e) {
      e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
      for (var a = 0, s = 0; s < e.length; s++) {
        var f = e.words[s] | 0;
        a += f * 977, e.words[s] = a & 67108863, a = f * 64 + (a / 67108864 | 0);
      }
      return e.words[e.length - 1] === 0 && (e.length--, e.words[e.length - 1] === 0 && e.length--), e;
    };
    function J() {
      T.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(J, T);
    function nu() {
      T.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(nu, T);
    function Du() {
      T.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(Du, T), Du.prototype.imulK = function(e) {
      for (var a = 0, s = 0; s < e.length; s++) {
        var f = (e.words[s] | 0) * 19 + a, A = f & 67108863;
        f >>>= 26, e.words[s] = A, a = f;
      }
      return a !== 0 && (e.words[e.length++] = a), e;
    }, D._prime = function(e) {
      if (I[e])
        return I[e];
      var a;
      if (e === "k256")
        a = new uu();
      else if (e === "p224")
        a = new J();
      else if (e === "p192")
        a = new nu();
      else if (e === "p25519")
        a = new Du();
      else
        throw new Error("Unknown prime " + e);
      return I[e] = a, a;
    };
    function Z(h) {
      if (typeof h == "string") {
        var e = D._prime(h);
        this.m = e.p, this.prime = e;
      } else
        i(h.gtn(1), "modulus must be greater than 1"), this.m = h, this.prime = null;
    }
    Z.prototype._verify1 = function(e) {
      i(e.negative === 0, "red works only with positives"), i(e.red, "red works only with red numbers");
    }, Z.prototype._verify2 = function(e, a) {
      i((e.negative | a.negative) === 0, "red works only with positives"), i(
        e.red && e.red === a.red,
        "red works only with red numbers"
      );
    }, Z.prototype.imod = function(e) {
      return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
    }, Z.prototype.neg = function(e) {
      return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
    }, Z.prototype.add = function(e, a) {
      this._verify2(e, a);
      var s = e.add(a);
      return s.cmp(this.m) >= 0 && s.isub(this.m), s._forceRed(this);
    }, Z.prototype.iadd = function(e, a) {
      this._verify2(e, a);
      var s = e.iadd(a);
      return s.cmp(this.m) >= 0 && s.isub(this.m), s;
    }, Z.prototype.sub = function(e, a) {
      this._verify2(e, a);
      var s = e.sub(a);
      return s.cmpn(0) < 0 && s.iadd(this.m), s._forceRed(this);
    }, Z.prototype.isub = function(e, a) {
      this._verify2(e, a);
      var s = e.isub(a);
      return s.cmpn(0) < 0 && s.iadd(this.m), s;
    }, Z.prototype.shl = function(e, a) {
      return this._verify1(e), this.imod(e.ushln(a));
    }, Z.prototype.imul = function(e, a) {
      return this._verify2(e, a), this.imod(e.imul(a));
    }, Z.prototype.mul = function(e, a) {
      return this._verify2(e, a), this.imod(e.mul(a));
    }, Z.prototype.isqr = function(e) {
      return this.imul(e, e.clone());
    }, Z.prototype.sqr = function(e) {
      return this.mul(e, e);
    }, Z.prototype.sqrt = function(e) {
      if (e.isZero())
        return e.clone();
      var a = this.m.andln(3);
      if (i(a % 2 === 1), a === 3) {
        var s = this.m.add(new D(1)).iushrn(2);
        return this.pow(e, s);
      }
      for (var f = this.m.subn(1), A = 0; !f.isZero() && f.andln(1) === 0; )
        A++, f.iushrn(1);
      i(!f.isZero());
      var C = new D(1).toRed(this), B = C.redNeg(), F = this.m.subn(1).iushrn(1), t = this.m.bitLength();
      for (t = new D(2 * t * t).toRed(this); this.pow(t, F).cmp(B) !== 0; )
        t.redIAdd(B);
      for (var l = this.pow(t, f), R = this.pow(e, f.addn(1).iushrn(1)), L = this.pow(e, f), H = A; L.cmp(C) !== 0; ) {
        for (var d = L, $ = 0; d.cmp(C) !== 0; $++)
          d = d.redSqr();
        i($ < H);
        var j = this.pow(l, new D(1).iushln(H - $ - 1));
        R = R.redMul(j), l = j.redSqr(), L = L.redMul(l), H = $;
      }
      return R;
    }, Z.prototype.invm = function(e) {
      var a = e._invmp(this.m);
      return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
    }, Z.prototype.pow = function(e, a) {
      if (a.isZero())
        return new D(1).toRed(this);
      if (a.cmpn(1) === 0)
        return e.clone();
      var s = 4, f = new Array(1 << s);
      f[0] = new D(1).toRed(this), f[1] = e;
      for (var A = 2; A < f.length; A++)
        f[A] = this.mul(f[A - 1], e);
      var C = f[0], B = 0, F = 0, t = a.bitLength() % 26;
      for (t === 0 && (t = 26), A = a.length - 1; A >= 0; A--) {
        for (var l = a.words[A], R = t - 1; R >= 0; R--) {
          var L = l >> R & 1;
          if (C !== f[0] && (C = this.sqr(C)), L === 0 && B === 0) {
            F = 0;
            continue;
          }
          B <<= 1, B |= L, F++, !(F !== s && (A !== 0 || R !== 0)) && (C = this.mul(C, f[B]), F = 0, B = 0);
        }
        t = 26;
      }
      return C;
    }, Z.prototype.convertTo = function(e) {
      var a = e.umod(this.m);
      return a === e ? a.clone() : a;
    }, Z.prototype.convertFrom = function(e) {
      var a = e.clone();
      return a.red = null, a;
    }, D.mont = function(e) {
      return new au(e);
    };
    function au(h) {
      Z.call(this, h), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new D(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(au, Z), au.prototype.convertTo = function(e) {
      return this.imod(e.ushln(this.shift));
    }, au.prototype.convertFrom = function(e) {
      var a = this.imod(e.mul(this.rinv));
      return a.red = null, a;
    }, au.prototype.imul = function(e, a) {
      if (e.isZero() || a.isZero())
        return e.words[0] = 0, e.length = 1, e;
      var s = e.imul(a), f = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = s.isub(f).iushrn(this.shift), C = A;
      return A.cmp(this.m) >= 0 ? C = A.isub(this.m) : A.cmpn(0) < 0 && (C = A.iadd(this.m)), C._forceRed(this);
    }, au.prototype.mul = function(e, a) {
      if (e.isZero() || a.isZero())
        return new D(0)._forceRed(this);
      var s = e.mul(a), f = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = s.isub(f).iushrn(this.shift), C = A;
      return A.cmp(this.m) >= 0 ? C = A.isub(this.m) : A.cmpn(0) < 0 && (C = A.iadd(this.m)), C._forceRed(this);
    }, au.prototype.invm = function(e) {
      var a = this.imod(e._invmp(this.m).mul(this.r2));
      return a._forceRed(this);
    };
  })(u, Pu);
})(ye);
var S2 = ye.exports;
Object.defineProperty(W2, "__esModule", { value: !0 });
var g2 = S2, hn = st().ec, ge = new hn("secp256k1"), j2 = ge.curve;
W2.privateKeyExport = function(u, r) {
  r === void 0 && (r = !0);
  var n = new g2(u);
  if (n.ucmp(j2.n) >= 0)
    throw new Error("couldn't export to DER format");
  var i = ge.g.mul(n);
  return It(i.getX(), i.getY(), r);
};
W2.privateKeyModInverse = function(u) {
  var r = new g2(u);
  if (r.ucmp(j2.n) >= 0 || r.isZero())
    throw new Error("private key range is invalid");
  return r.invm(j2.n).toArrayLike(N.Buffer, "be", 32);
};
W2.signatureImport = function(u) {
  var r = new g2(u.r);
  r.ucmp(j2.n) >= 0 && (r = new g2(0));
  var n = new g2(u.s);
  return n.ucmp(j2.n) >= 0 && (n = new g2(0)), N.Buffer.concat([r.toArrayLike(N.Buffer, "be", 32), n.toArrayLike(N.Buffer, "be", 32)]);
};
W2.ecdhUnsafe = function(u, r, n) {
  n === void 0 && (n = !0);
  var i = ge.keyFromPublic(u), o = new g2(r);
  if (o.ucmp(j2.n) >= 0 || o.isZero())
    throw new Error("scalar was invalid (zero or overflow)");
  var D = i.pub.mul(o);
  return It(D.getX(), D.getY(), n);
};
var It = function(u, r, n) {
  var i;
  return n ? (i = N.Buffer.alloc(33), i[0] = r.isOdd() ? 3 : 2, u.toArrayLike(N.Buffer, "be", 32).copy(i, 1)) : (i = N.Buffer.alloc(65), i[0] = 4, u.toArrayLike(N.Buffer, "be", 32).copy(i, 1), r.toArrayLike(N.Buffer, "be", 32).copy(i, 33)), i;
}, c1 = {};
Object.defineProperty(c1, "__esModule", { value: !0 });
var En = N.Buffer.from([
  // begin
  48,
  129,
  211,
  2,
  1,
  1,
  4,
  32,
  // private key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // middle
  160,
  129,
  133,
  48,
  129,
  130,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  33,
  2,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  36,
  3,
  34,
  0,
  // public key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), cn = N.Buffer.from([
  // begin
  48,
  130,
  1,
  19,
  2,
  1,
  1,
  4,
  32,
  // private key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // middle
  160,
  129,
  165,
  48,
  129,
  162,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  65,
  4,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  72,
  58,
  218,
  119,
  38,
  163,
  196,
  101,
  93,
  164,
  251,
  252,
  14,
  17,
  8,
  168,
  253,
  23,
  180,
  72,
  166,
  133,
  84,
  25,
  156,
  71,
  208,
  143,
  251,
  16,
  212,
  184,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  68,
  3,
  66,
  0,
  // public key
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]);
c1.privateKeyExport = function(u, r, n) {
  n === void 0 && (n = !0);
  var i = N.Buffer.from(n ? En : cn);
  return u.copy(i, n ? 8 : 9), r.copy(i, n ? 181 : 214), i;
};
c1.privateKeyImport = function(u) {
  var r = u.length, n = 0;
  if (r < n + 1 || u[n] !== 48 || (n += 1, r < n + 1 || !(u[n] & 128)))
    return null;
  var i = u[n] & 127;
  if (n += 1, i < 1 || i > 2 || r < n + i)
    return null;
  var o = u[n + i - 1] | (i > 1 ? u[n + i - 2] << 8 : 0);
  return n += i, r < n + o || r < n + 3 || u[n] !== 2 || u[n + 1] !== 1 || u[n + 2] !== 1 || (n += 3, r < n + 2 || u[n] !== 4 || u[n + 1] > 32 || r < n + 2 + u[n + 1]) ? null : u.slice(n + 2, n + 2 + u[n + 1]);
};
c1.signatureImportLax = function(u) {
  var r = N.Buffer.alloc(32, 0), n = N.Buffer.alloc(32, 0), i = u.length, o = 0;
  if (u[o++] !== 48)
    return null;
  var D = u[o++];
  if (D & 128 && (o += D - 128, o > i) || u[o++] !== 2)
    return null;
  var E = u[o++];
  if (E & 128) {
    if (D = E - 128, o + D > i)
      return null;
    for (; D > 0 && u[o] === 0; o += 1, D -= 1)
      ;
    for (E = 0; D > 0; o += 1, D -= 1)
      E = (E << 8) + u[o];
  }
  if (E > i - o)
    return null;
  var c = o;
  if (o += E, u[o++] !== 2)
    return null;
  var p = u[o++];
  if (p & 128) {
    if (D = p - 128, o + D > i)
      return null;
    for (; D > 0 && u[o] === 0; o += 1, D -= 1)
      ;
    for (p = 0; D > 0; o += 1, D -= 1)
      p = (p << 8) + u[o];
  }
  if (p > i - o)
    return null;
  var v = o;
  for (o += p; E > 0 && u[c] === 0; E -= 1, c += 1)
    ;
  if (E > 32)
    return null;
  var m = u.slice(c, c + E);
  for (m.copy(r, 32 - m.length); p > 0 && u[v] === 0; p -= 1, v += 1)
    ;
  if (p > 32)
    return null;
  var M = u.slice(v, v + p);
  return M.copy(n, 32 - M.length), { r, s: n };
};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.ecdhUnsafe = u.ecdh = u.recover = u.verify = u.sign = u.signatureImportLax = u.signatureImport = u.signatureExport = u.signatureNormalize = u.publicKeyCombine = u.publicKeyTweakMul = u.publicKeyTweakAdd = u.publicKeyVerify = u.publicKeyConvert = u.publicKeyCreate = u.privateKeyTweakMul = u.privateKeyTweakAdd = u.privateKeyModInverse = u.privateKeyNegate = u.privateKeyImport = u.privateKeyExport = u.privateKeyVerify = void 0;
  var r = _t, n = W2, i = c1;
  u.privateKeyVerify = function(o) {
    return o.length !== 32 ? !1 : r.privateKeyVerify(Uint8Array.from(o));
  }, u.privateKeyExport = function(o, D) {
    if (o.length !== 32)
      throw new RangeError("private key length is invalid");
    var E = n.privateKeyExport(o, D);
    return i.privateKeyExport(o, E, D);
  }, u.privateKeyImport = function(o) {
    if (o = i.privateKeyImport(o), o !== null && o.length === 32 && u.privateKeyVerify(o))
      return o;
    throw new Error("couldn't import from DER format");
  }, u.privateKeyNegate = function(o) {
    return N.Buffer.from(r.privateKeyNegate(Uint8Array.from(o)));
  }, u.privateKeyModInverse = function(o) {
    if (o.length !== 32)
      throw new Error("private key length is invalid");
    return N.Buffer.from(n.privateKeyModInverse(Uint8Array.from(o)));
  }, u.privateKeyTweakAdd = function(o, D) {
    return N.Buffer.from(r.privateKeyTweakAdd(Uint8Array.from(o), D));
  }, u.privateKeyTweakMul = function(o, D) {
    return N.Buffer.from(r.privateKeyTweakMul(Uint8Array.from(o), Uint8Array.from(D)));
  }, u.publicKeyCreate = function(o, D) {
    return N.Buffer.from(r.publicKeyCreate(Uint8Array.from(o), D));
  }, u.publicKeyConvert = function(o, D) {
    return N.Buffer.from(r.publicKeyConvert(Uint8Array.from(o), D));
  }, u.publicKeyVerify = function(o) {
    return o.length !== 33 && o.length !== 65 ? !1 : r.publicKeyVerify(Uint8Array.from(o));
  }, u.publicKeyTweakAdd = function(o, D, E) {
    return N.Buffer.from(r.publicKeyTweakAdd(Uint8Array.from(o), Uint8Array.from(D), E));
  }, u.publicKeyTweakMul = function(o, D, E) {
    return N.Buffer.from(r.publicKeyTweakMul(Uint8Array.from(o), Uint8Array.from(D), E));
  }, u.publicKeyCombine = function(o, D) {
    var E = [];
    return o.forEach(function(c) {
      E.push(Uint8Array.from(c));
    }), N.Buffer.from(r.publicKeyCombine(E, D));
  }, u.signatureNormalize = function(o) {
    return N.Buffer.from(r.signatureNormalize(Uint8Array.from(o)));
  }, u.signatureExport = function(o) {
    return N.Buffer.from(r.signatureExport(Uint8Array.from(o)));
  }, u.signatureImport = function(o) {
    return N.Buffer.from(r.signatureImport(Uint8Array.from(o)));
  }, u.signatureImportLax = function(o) {
    if (o.length === 0)
      throw new RangeError("signature length is invalid");
    var D = i.signatureImportLax(o);
    if (D === null)
      throw new Error("couldn't parse DER signature");
    return n.signatureImport(D);
  }, u.sign = function(o, D, E) {
    if (E === null)
      throw new TypeError("options should be an Object");
    var c = void 0;
    if (E) {
      if (c = {}, E.data === null)
        throw new TypeError("options.data should be a Buffer");
      if (E.data) {
        if (E.data.length != 32)
          throw new RangeError("options.data length is invalid");
        c.data = new Uint8Array(E.data);
      }
      if (E.noncefn === null)
        throw new TypeError("options.noncefn should be a Function");
      E.noncefn && (c.noncefn = function(v, m, M, _, O) {
        var x = M != null ? N.Buffer.from(M) : null, k = _ != null ? N.Buffer.from(_) : null, g = N.Buffer.from("");
        return E.noncefn && (g = E.noncefn(N.Buffer.from(v), N.Buffer.from(m), x, k, O)), new Uint8Array(g);
      });
    }
    var p = r.ecdsaSign(Uint8Array.from(o), Uint8Array.from(D), c);
    return {
      signature: N.Buffer.from(p.signature),
      recovery: p.recid
    };
  }, u.verify = function(o, D, E) {
    return r.ecdsaVerify(Uint8Array.from(D), Uint8Array.from(o), E);
  }, u.recover = function(o, D, E, c) {
    return N.Buffer.from(r.ecdsaRecover(Uint8Array.from(D), E, Uint8Array.from(o), c));
  }, u.ecdh = function(o, D) {
    return N.Buffer.from(r.ecdh(Uint8Array.from(o), Uint8Array.from(D), {}));
  }, u.ecdhUnsafe = function(o, D, E) {
    if (o.length !== 33 && o.length !== 65)
      throw new RangeError("public key length is invalid");
    if (D.length !== 32)
      throw new RangeError("private key length is invalid");
    return N.Buffer.from(n.ecdhUnsafe(Uint8Array.from(o), Uint8Array.from(D), E));
  };
})(u9);
var St = {};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.KECCAK256_RLP = u.KECCAK256_RLP_S = u.KECCAK256_RLP_ARRAY = u.KECCAK256_RLP_ARRAY_S = u.KECCAK256_NULL = u.KECCAK256_NULL_S = u.TWO_POW256 = u.MAX_INTEGER = void 0;
  var r = S2;
  u.MAX_INTEGER = new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), u.TWO_POW256 = new r("10000000000000000000000000000000000000000000000000000000000000000", 16), u.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", u.KECCAK256_NULL = N.Buffer.from(u.KECCAK256_NULL_S, "hex"), u.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", u.KECCAK256_RLP_ARRAY = N.Buffer.from(u.KECCAK256_RLP_ARRAY_S, "hex"), u.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", u.KECCAK256_RLP = N.Buffer.from(u.KECCAK256_RLP_S, "hex");
})(St);
var Ut = {}, Y2 = {};
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.baToJSON = u.addHexPrefix = u.toUnsigned = u.fromSigned = u.bufferToHex = u.bufferToInt = u.toBuffer = u.stripZeros = u.unpad = u.setLengthRight = u.setLength = u.setLengthLeft = u.zeros = void 0;
  var r = x0, n = S2;
  u.zeros = function(i) {
    return N.Buffer.allocUnsafe(i).fill(0);
  }, u.setLengthLeft = function(i, o, D) {
    D === void 0 && (D = !1);
    var E = u.zeros(o);
    return i = u.toBuffer(i), D ? i.length < o ? (i.copy(E), E) : i.slice(0, o) : i.length < o ? (i.copy(E, o - i.length), E) : i.slice(-o);
  }, u.setLength = u.setLengthLeft, u.setLengthRight = function(i, o) {
    return u.setLength(i, o, !0);
  }, u.unpad = function(i) {
    i = r.stripHexPrefix(i);
    for (var o = i[0]; i.length > 0 && o.toString() === "0"; )
      i = i.slice(1), o = i[0];
    return i;
  }, u.stripZeros = u.unpad, u.toBuffer = function(i) {
    if (!N.Buffer.isBuffer(i))
      if (Array.isArray(i))
        i = N.Buffer.from(i);
      else if (typeof i == "string")
        if (r.isHexString(i))
          i = N.Buffer.from(r.padToEven(r.stripHexPrefix(i)), "hex");
        else
          throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + i);
      else if (typeof i == "number")
        i = r.intToBuffer(i);
      else if (i == null)
        i = N.Buffer.allocUnsafe(0);
      else if (n.isBN(i))
        i = i.toArrayLike(N.Buffer);
      else if (i.toArray)
        i = N.Buffer.from(i.toArray());
      else
        throw new Error("invalid type");
    return i;
  }, u.bufferToInt = function(i) {
    return new n(u.toBuffer(i)).toNumber();
  }, u.bufferToHex = function(i) {
    return i = u.toBuffer(i), "0x" + i.toString("hex");
  }, u.fromSigned = function(i) {
    return new n(i).fromTwos(256);
  }, u.toUnsigned = function(i) {
    return N.Buffer.from(i.toTwos(256).toArray());
  }, u.addHexPrefix = function(i) {
    return typeof i != "string" || r.isHexPrefixed(i) ? i : "0x" + i;
  }, u.baToJSON = function(i) {
    if (N.Buffer.isBuffer(i))
      return "0x" + i.toString("hex");
    if (i instanceof Array) {
      for (var o = [], D = 0; D < i.length; D++)
        o.push(u.baToJSON(i[D]));
      return o;
    }
  };
})(Y2);
var r9 = {}, J2 = {}, we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
function Cn(u) {
  return function(r) {
    var n = u();
    return n.update(r), N.Buffer.from(n.digest());
  };
}
we.createHashFunction = Cn;
Object.defineProperty(J2, "__esModule", { value: !0 });
var t9 = we, n9 = Ee;
J2.keccak224 = t9.createHashFunction(function() {
  return n9("keccak224");
});
J2.keccak256 = t9.createHashFunction(function() {
  return n9("keccak256");
});
J2.keccak384 = t9.createHashFunction(function() {
  return n9("keccak384");
});
J2.keccak512 = t9.createHashFunction(function() {
  return n9("keccak512");
});
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.rlphash = u.ripemd160 = u.sha256 = u.keccak256 = u.keccak = void 0;
  var r = J2, n = r.keccak224, i = r.keccak384, o = r.keccak256, D = r.keccak512, E = ft(), c = x0, p = K2, v = Y2;
  u.keccak = function(m, M) {
    switch (M === void 0 && (M = 256), typeof m == "string" && !c.isHexString(m) ? m = N.Buffer.from(m, "utf8") : m = v.toBuffer(m), M || (M = 256), M) {
      case 224:
        return n(m);
      case 256:
        return o(m);
      case 384:
        return i(m);
      case 512:
        return D(m);
      default:
        throw new Error("Invald algorithm: keccak" + M);
    }
  }, u.keccak256 = function(m) {
    return u.keccak(m);
  }, u.sha256 = function(m) {
    return m = v.toBuffer(m), E("sha256").update(m).digest();
  }, u.ripemd160 = function(m, M) {
    m = v.toBuffer(m);
    var _ = E("rmd160").update(m).digest();
    return M === !0 ? v.setLength(_, 32) : _;
  }, u.rlphash = function(m) {
    return u.keccak(p.encode(m));
  };
})(r9);
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.importPublic = u.privateToPublic = u.privateToAddress = u.publicToAddress = u.pubToAddress = u.isValidPublic = u.isValidPrivate = u.isPrecompiled = u.generateAddress2 = u.generateAddress = u.isValidChecksumAddress = u.toChecksumAddress = u.isZeroAddress = u.isValidAddress = u.zeroAddress = void 0;
  var r = G1(), n = x0, i = u9, o = S2, D = Y2, E = r9;
  u.zeroAddress = function() {
    var c = 20, p = D.zeros(c);
    return D.bufferToHex(p);
  }, u.isValidAddress = function(c) {
    return /^0x[0-9a-fA-F]{40}$/.test(c);
  }, u.isZeroAddress = function(c) {
    var p = u.zeroAddress();
    return p === D.addHexPrefix(c);
  }, u.toChecksumAddress = function(c, p) {
    c = n.stripHexPrefix(c).toLowerCase();
    for (var v = p !== void 0 ? p.toString() + "0x" : "", m = E.keccak(v + c).toString("hex"), M = "0x", _ = 0; _ < c.length; _++)
      parseInt(m[_], 16) >= 8 ? M += c[_].toUpperCase() : M += c[_];
    return M;
  }, u.isValidChecksumAddress = function(c, p) {
    return u.isValidAddress(c) && u.toChecksumAddress(c, p) === c;
  }, u.generateAddress = function(c, p) {
    c = D.toBuffer(c);
    var v = new o(p);
    return v.isZero() ? E.rlphash([c, null]).slice(-20) : E.rlphash([c, N.Buffer.from(v.toArray())]).slice(-20);
  }, u.generateAddress2 = function(c, p, v) {
    var m = D.toBuffer(c), M = D.toBuffer(p), _ = D.toBuffer(v);
    r(m.length === 20), r(M.length === 32);
    var O = E.keccak256(N.Buffer.concat([N.Buffer.from("ff", "hex"), m, M, E.keccak256(_)]));
    return O.slice(-20);
  }, u.isPrecompiled = function(c) {
    var p = D.unpad(c);
    return p.length === 1 && p[0] >= 1 && p[0] <= 8;
  }, u.isValidPrivate = function(c) {
    return i.privateKeyVerify(c);
  }, u.isValidPublic = function(c, p) {
    return p === void 0 && (p = !1), c.length === 64 ? i.publicKeyVerify(N.Buffer.concat([N.Buffer.from([4]), c])) : p ? i.publicKeyVerify(c) : !1;
  }, u.pubToAddress = function(c, p) {
    return p === void 0 && (p = !1), c = D.toBuffer(c), p && c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)), r(c.length === 64), E.keccak(c).slice(-20);
  }, u.publicToAddress = u.pubToAddress, u.privateToAddress = function(c) {
    return u.publicToAddress(u.privateToPublic(c));
  }, u.privateToPublic = function(c) {
    return c = D.toBuffer(c), i.publicKeyCreate(c, !1).slice(1);
  }, u.importPublic = function(c) {
    return c = D.toBuffer(c), c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)), c;
  };
})(Ut);
var i0 = {};
Object.defineProperty(i0, "__esModule", { value: !0 });
i0.hashPersonalMessage = i0.isValidSignature = i0.fromRpcSig = i0.toRpcSig = i0.ecrecover = i0.ecsign = void 0;
var G9 = u9, x1 = S2, w2 = Y2, dn = r9;
i0.ecsign = function(u, r, n) {
  var i = G9.sign(u, r), o = i.recovery, D = {
    r: i.signature.slice(0, 32),
    s: i.signature.slice(32, 64),
    v: n ? o + (n * 2 + 35) : o + 27
  };
  return D;
};
i0.ecrecover = function(u, r, n, i, o) {
  var D = N.Buffer.concat([w2.setLength(n, 32), w2.setLength(i, 32)], 64), E = xe(r, o);
  if (!be(E))
    throw new Error("Invalid signature v value");
  var c = G9.recover(u, D, E);
  return G9.publicKeyConvert(c, !1).slice(1);
};
i0.toRpcSig = function(u, r, n, i) {
  var o = xe(u, i);
  if (!be(o))
    throw new Error("Invalid signature v value");
  return w2.bufferToHex(N.Buffer.concat([w2.setLengthLeft(r, 32), w2.setLengthLeft(n, 32), w2.toBuffer(u)]));
};
i0.fromRpcSig = function(u) {
  var r = w2.toBuffer(u);
  if (r.length !== 65)
    throw new Error("Invalid signature length");
  var n = r[64];
  return n < 27 && (n += 27), {
    v: n,
    r: r.slice(0, 32),
    s: r.slice(32, 64)
  };
};
i0.isValidSignature = function(u, r, n, i, o) {
  i === void 0 && (i = !0);
  var D = new x1("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), E = new x1("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
  if (r.length !== 32 || n.length !== 32 || !be(xe(u, o)))
    return !1;
  var c = new x1(r), p = new x1(n);
  return !(c.isZero() || c.gt(E) || p.isZero() || p.gt(E) || i && p.cmp(D) === 1);
};
i0.hashPersonalMessage = function(u) {
  var r = N.Buffer.from(`Ethereum Signed Message:
` + u.length.toString(), "utf-8");
  return dn.keccak(N.Buffer.concat([r, u]));
};
function xe(u, r) {
  return r ? u - (2 * r + 35) : u - 27;
}
function be(u) {
  return u === 0 || u === 1;
}
var D9 = {};
Object.defineProperty(D9, "__esModule", { value: !0 });
D9.defineProperties = void 0;
var er = G1(), pn = x0, rr = K2, b1 = Y2;
D9.defineProperties = function(u, r, n) {
  if (u.raw = [], u._fields = [], u.toJSON = function(o) {
    if (o === void 0 && (o = !1), o) {
      var D = {};
      return u._fields.forEach(function(E) {
        D[E] = "0x" + u[E].toString("hex");
      }), D;
    }
    return b1.baToJSON(u.raw);
  }, u.serialize = function() {
    return rr.encode(u.raw);
  }, r.forEach(function(o, D) {
    u._fields.push(o.name);
    function E() {
      return u.raw[D];
    }
    function c(p) {
      p = b1.toBuffer(p), p.toString("hex") === "00" && !o.allowZero && (p = N.Buffer.allocUnsafe(0)), o.allowLess && o.length ? (p = b1.stripZeros(p), er(o.length >= p.length, "The field " + o.name + " must not have more " + o.length + " bytes")) : !(o.allowZero && p.length === 0) && o.length && er(o.length === p.length, "The field " + o.name + " must have byte length of " + o.length), u.raw[D] = p;
    }
    Object.defineProperty(u, o.name, {
      enumerable: !0,
      configurable: !0,
      get: E,
      set: c
    }), o.default && (u[o.name] = o.default), o.alias && Object.defineProperty(u, o.alias, {
      enumerable: !1,
      configurable: !0,
      set: c,
      get: E
    });
  }), n)
    if (typeof n == "string" && (n = N.Buffer.from(pn.stripHexPrefix(n), "hex")), N.Buffer.isBuffer(n) && (n = rr.decode(n)), Array.isArray(n)) {
      if (n.length > u._fields.length)
        throw new Error("wrong number of fields in data");
      n.forEach(function(o, D) {
        u[u._fields[D]] = b1.toBuffer(o);
      });
    } else if (typeof n == "object") {
      var i = Object.keys(n);
      r.forEach(function(o) {
        i.indexOf(o.name) !== -1 && (u[o.name] = n[o.name]), i.indexOf(o.alias) !== -1 && (u[o.alias] = n[o.alias]);
      });
    } else
      throw new Error("invalid data");
};
(function(u) {
  var r = Pu && Pu.__createBinding || (Object.create ? function(c, p, v, m) {
    m === void 0 && (m = v), Object.defineProperty(c, m, { enumerable: !0, get: function() {
      return p[v];
    } });
  } : function(c, p, v, m) {
    m === void 0 && (m = v), c[m] = p[v];
  }), n = Pu && Pu.__exportStar || function(c, p) {
    for (var v in c)
      v !== "default" && !p.hasOwnProperty(v) && r(p, c, v);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.secp256k1 = u.rlp = u.BN = void 0;
  var i = u9;
  u.secp256k1 = i;
  var o = x0, D = S2;
  u.BN = D;
  var E = K2;
  u.rlp = E, Object.assign(u, o), n(St, u), n(Ut, u), n(r9, u), n(i0, u), n(Y2, u), n(D9, u);
})(bt);
const L0 = bt, n0 = S2;
var Vu = function() {
};
function i9(u) {
  return u.startsWith("int[") ? "int256" + u.slice(3) : u === "int" ? "int256" : u.startsWith("uint[") ? "uint256" + u.slice(4) : u === "uint" ? "uint256" : u.startsWith("fixed[") ? "fixed128x128" + u.slice(5) : u === "fixed" ? "fixed128x128" : u.startsWith("ufixed[") ? "ufixed128x128" + u.slice(6) : u === "ufixed" ? "ufixed128x128" : u;
}
Vu.eventID = function(u, r) {
  var n = u + "(" + r.map(i9).join(",") + ")";
  return L0.keccak256(N.Buffer.from(n));
};
Vu.methodID = function(u, r) {
  return Vu.eventID(u, r).slice(0, 4);
};
function r2(u) {
  return parseInt(/^\D+(\d+)$/.exec(u)[1], 10);
}
function z9(u) {
  var r = /^\D+(\d+)x(\d+)$/.exec(u);
  return [parseInt(r[1], 10), parseInt(r[2], 10)];
}
function C1(u) {
  var r = u.match(/(.*)\[(.*?)\]$/);
  return r ? r[2] === "" ? "dynamic" : parseInt(r[2], 10) : null;
}
function v2(u) {
  var r = typeof u;
  if (r === "string")
    return L0.isHexPrefixed(u) ? new n0(L0.stripHexPrefix(u), 16) : new n0(u, 10);
  if (r === "number")
    return new n0(u);
  if (u.toArray)
    return u;
  throw new Error("Argument is not a number");
}
function Tt(u) {
  var r = /^(\w+)\((.*)\)$/.exec(u);
  if (r.length !== 3)
    throw new Error("Invalid method signature");
  var n = /^(.+)\):\((.+)$/.exec(r[2]);
  if (n !== null && n.length === 3)
    return {
      method: r[1],
      args: n[1].split(","),
      retargs: n[2].split(",")
    };
  var i = r[2].split(",");
  return i.length === 1 && i[0] === "" && (i = []), {
    method: r[1],
    args: i
  };
}
function k0(u, r) {
  var n, i, o, D;
  if (u === "address")
    return k0("uint160", v2(r));
  if (u === "bool")
    return k0("uint8", r ? 1 : 0);
  if (u === "string")
    return k0("bytes", N.Buffer.from(r, "utf8"));
  if (o1(u)) {
    if (typeof r.length > "u")
      throw new Error("Not an array?");
    if (n = C1(u), n !== "dynamic" && n !== 0 && r.length > n)
      throw new Error("Elements exceed array size: " + n);
    o = [], u = u.slice(0, u.lastIndexOf("[")), typeof r == "string" && (r = JSON.parse(r));
    for (D in r)
      o.push(k0(u, r[D]));
    if (n === "dynamic") {
      var E = k0("uint256", r.length);
      o.unshift(E);
    }
    return N.Buffer.concat(o);
  } else {
    if (u === "bytes")
      return r = N.Buffer.from(r), o = N.Buffer.concat([k0("uint256", r.length), r]), r.length % 32 !== 0 && (o = N.Buffer.concat([o, L0.zeros(32 - r.length % 32)])), o;
    if (u.startsWith("bytes")) {
      if (n = r2(u), n < 1 || n > 32)
        throw new Error("Invalid bytes<N> width: " + n);
      return L0.setLengthRight(r, 32);
    } else if (u.startsWith("uint")) {
      if (n = r2(u), n % 8 || n < 8 || n > 256)
        throw new Error("Invalid uint<N> width: " + n);
      if (i = v2(r), i.bitLength() > n)
        throw new Error("Supplied uint exceeds width: " + n + " vs " + i.bitLength());
      if (i < 0)
        throw new Error("Supplied uint is negative");
      return i.toArrayLike(N.Buffer, "be", 32);
    } else if (u.startsWith("int")) {
      if (n = r2(u), n % 8 || n < 8 || n > 256)
        throw new Error("Invalid int<N> width: " + n);
      if (i = v2(r), i.bitLength() > n)
        throw new Error("Supplied int exceeds width: " + n + " vs " + i.bitLength());
      return i.toTwos(256).toArrayLike(N.Buffer, "be", 32);
    } else if (u.startsWith("ufixed")) {
      if (n = z9(u), i = v2(r), i < 0)
        throw new Error("Supplied ufixed is negative");
      return k0("uint256", i.mul(new n0(2).pow(new n0(n[1]))));
    } else if (u.startsWith("fixed"))
      return n = z9(u), k0("int256", v2(r).mul(new n0(2).pow(new n0(n[1]))));
  }
  throw new Error("Unsupported or invalid type: " + u);
}
function m0(u, r, n) {
  typeof u == "string" && (u = _e(u));
  var i, o, D, E;
  if (u.name === "address")
    return m0(u.rawType, r, n).toArrayLike(N.Buffer, "be", 20).toString("hex");
  if (u.name === "bool")
    return m0(u.rawType, r, n).toString() === new n0(1).toString();
  if (u.name === "string") {
    var c = m0(u.rawType, r, n);
    return N.Buffer.from(c, "utf8").toString();
  } else if (u.isArray) {
    for (D = [], i = u.size, u.size === "dynamic" && (n = m0("uint256", r, n).toNumber(), i = m0("uint256", r, n).toNumber(), n = n + 32), E = 0; E < i; E++) {
      var p = m0(u.subArray, r, n);
      D.push(p), n += u.subArray.memoryUsage;
    }
    return D;
  } else {
    if (u.name === "bytes")
      return n = m0("uint256", r, n).toNumber(), i = m0("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + i);
    if (u.name.startsWith("bytes"))
      return r.slice(n, n + u.size);
    if (u.name.startsWith("uint")) {
      if (o = new n0(r.slice(n, n + 32), 16, "be"), o.bitLength() > u.size)
        throw new Error("Decoded int exceeds width: " + u.size + " vs " + o.bitLength());
      return o;
    } else if (u.name.startsWith("int")) {
      if (o = new n0(r.slice(n, n + 32), 16, "be").fromTwos(256), o.bitLength() > u.size)
        throw new Error("Decoded uint exceeds width: " + u.size + " vs " + o.bitLength());
      return o;
    } else if (u.name.startsWith("ufixed")) {
      if (i = new n0(2).pow(new n0(u.size[1])), o = m0("uint256", r, n), !o.mod(i).isZero())
        throw new Error("Decimals not supported yet");
      return o.div(i);
    } else if (u.name.startsWith("fixed")) {
      if (i = new n0(2).pow(new n0(u.size[1])), o = m0("int256", r, n), !o.mod(i).isZero())
        throw new Error("Decimals not supported yet");
      return o.div(i);
    }
  }
  throw new Error("Unsupported or invalid type: " + u.name);
}
function _e(u) {
  var r, n;
  if (o1(u)) {
    r = C1(u);
    var i = u.slice(0, u.lastIndexOf("["));
    return i = _e(i), n = {
      isArray: !0,
      name: u,
      size: r,
      memoryUsage: r === "dynamic" ? 32 : i.memoryUsage * r,
      subArray: i
    }, n;
  } else {
    var o;
    switch (u) {
      case "address":
        o = "uint160";
        break;
      case "bool":
        o = "uint8";
        break;
      case "string":
        o = "bytes";
        break;
    }
    if (n = {
      rawType: o,
      name: u,
      memoryUsage: 32
    }, u.startsWith("bytes") && u !== "bytes" || u.startsWith("uint") || u.startsWith("int") ? n.size = r2(u) : (u.startsWith("ufixed") || u.startsWith("fixed")) && (n.size = z9(u)), u.startsWith("bytes") && u !== "bytes" && (n.size < 1 || n.size > 32))
      throw new Error("Invalid bytes<N> width: " + n.size);
    if ((u.startsWith("uint") || u.startsWith("int")) && (n.size % 8 || n.size < 8 || n.size > 256))
      throw new Error("Invalid int/uint<N> width: " + n.size);
    return n;
  }
}
function Bn(u) {
  return u === "string" || u === "bytes" || C1(u) === "dynamic";
}
function o1(u) {
  return u.lastIndexOf("]") === u.length - 1;
}
Vu.rawEncode = function(u, r) {
  var n = [], i = [], o = 0;
  u.forEach(function(v) {
    if (o1(v)) {
      var m = C1(v);
      m !== "dynamic" ? o += 32 * m : o += 32;
    } else
      o += 32;
  });
  for (var D = 0; D < u.length; D++) {
    var E = i9(u[D]), c = r[D], p = k0(E, c);
    Bn(E) ? (n.push(k0("uint256", o)), i.push(p), o += p.length) : n.push(p);
  }
  return N.Buffer.concat(n.concat(i));
};
Vu.rawDecode = function(u, r) {
  var n = [];
  r = N.Buffer.from(r);
  for (var i = 0, o = 0; o < u.length; o++) {
    var D = i9(u[o]), E = _e(D), c = m0(E, r, i);
    i += E.memoryUsage, n.push(c);
  }
  return n;
};
Vu.simpleEncode = function(u) {
  var r = Array.prototype.slice.call(arguments).slice(1), n = Tt(u);
  if (r.length !== n.args.length)
    throw new Error("Argument count mismatch");
  return N.Buffer.concat([Vu.methodID(n.method, n.args), Vu.rawEncode(n.args, r)]);
};
Vu.simpleDecode = function(u, r) {
  var n = Tt(u);
  if (!n.retargs)
    throw new Error("No return values in method");
  return Vu.rawDecode(n.retargs, r);
};
function tr(u, r) {
  return u.startsWith("address") || u.startsWith("bytes") ? "0x" + r.toString("hex") : r.toString();
}
Vu.stringify = function(u, r) {
  var n = [];
  for (var i in u) {
    var o = u[i], D = r[i];
    /^[^\[]+\[.*\]$/.test(o) ? D = D.map(function(E) {
      return tr(o, E);
    }).join(", ") : D = tr(o, D), n.push(D);
  }
  return n;
};
Vu.solidityHexValue = function(u, r, n) {
  var i, o;
  if (o1(u)) {
    var D = u.replace(/\[.*?\]/, "");
    if (!o1(D)) {
      var E = C1(u);
      if (E !== "dynamic" && E !== 0 && r.length > E)
        throw new Error("Elements exceed array size: " + E);
    }
    var c = r.map(function(m) {
      return Vu.solidityHexValue(D, m, 256);
    });
    return N.Buffer.concat(c);
  } else {
    if (u === "bytes")
      return r;
    if (u === "string")
      return N.Buffer.from(r, "utf8");
    if (u === "bool") {
      n = n || 8;
      var p = Array(n / 4).join("0");
      return N.Buffer.from(r ? p + "1" : p + "0", "hex");
    } else if (u === "address") {
      var v = 20;
      return n && (v = n / 8), L0.setLengthLeft(r, v);
    } else if (u.startsWith("bytes")) {
      if (i = r2(u), i < 1 || i > 32)
        throw new Error("Invalid bytes<N> width: " + i);
      return L0.setLengthRight(r, i);
    } else if (u.startsWith("uint")) {
      if (i = r2(u), i % 8 || i < 8 || i > 256)
        throw new Error("Invalid uint<N> width: " + i);
      if (o = v2(r), o.bitLength() > i)
        throw new Error("Supplied uint exceeds width: " + i + " vs " + o.bitLength());
      return n = n || i, o.toArrayLike(N.Buffer, "be", n / 8);
    } else if (u.startsWith("int")) {
      if (i = r2(u), i % 8 || i < 8 || i > 256)
        throw new Error("Invalid int<N> width: " + i);
      if (o = v2(r), o.bitLength() > i)
        throw new Error("Supplied int exceeds width: " + i + " vs " + o.bitLength());
      return n = n || i, o.toTwos(i).toArrayLike(N.Buffer, "be", n / 8);
    } else
      throw new Error("Unsupported or invalid type: " + u);
  }
};
Vu.solidityPack = function(u, r) {
  if (u.length !== r.length)
    throw new Error("Number of types are not matching the values");
  for (var n = [], i = 0; i < u.length; i++) {
    var o = i9(u[i]), D = r[i];
    n.push(Vu.solidityHexValue(o, D, null));
  }
  return N.Buffer.concat(n);
};
Vu.soliditySHA3 = function(u, r) {
  return L0.keccak256(Vu.solidityPack(u, r));
};
Vu.soliditySHA256 = function(u, r) {
  return L0.sha256(Vu.solidityPack(u, r));
};
Vu.solidityRIPEMD160 = function(u, r) {
  return L0.ripemd160(Vu.solidityPack(u, r), !0);
};
function vn(u) {
  return u >= "0" && u <= "9";
}
Vu.fromSerpent = function(u) {
  for (var r = [], n = 0; n < u.length; n++) {
    var i = u[n];
    if (i === "s")
      r.push("bytes");
    else if (i === "b") {
      for (var o = "bytes", D = n + 1; D < u.length && vn(u[D]); )
        o += u[D] - "0", D++;
      n = D - 1, r.push(o);
    } else if (i === "i")
      r.push("int256");
    else if (i === "a")
      r.push("int256[]");
    else
      throw new Error("Unsupported or invalid type: " + i);
  }
  return r;
};
Vu.toSerpent = function(u) {
  for (var r = [], n = 0; n < u.length; n++) {
    var i = u[n];
    if (i === "bytes")
      r.push("s");
    else if (i.startsWith("bytes"))
      r.push("b" + r2(i));
    else if (i === "int256")
      r.push("i");
    else if (i === "int256[]")
      r.push("a");
    else
      throw new Error("Unsupported or invalid type: " + i);
  }
  return r.join("");
};
var mn = Vu, yn = mn;
(function(u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), u.recoverTypedSignature = u.signTypedData = u.typedSignatureHash = u.TypedDataUtils = u.TYPED_MESSAGE_SCHEMA = u.SignTypedDataVersion = void 0;
  const r = z1, n = yn, i = Xu;
  var o;
  (function(y) {
    y.V1 = "V1", y.V3 = "V3", y.V4 = "V4";
  })(o = u.SignTypedDataVersion || (u.SignTypedDataVersion = {})), u.TYPED_MESSAGE_SCHEMA = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" }
            },
            required: ["name", "type"]
          }
        }
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" }
    },
    required: ["types", "primaryType", "domain", "message"]
  };
  function D(y, I) {
    if (Object.keys(o).includes(y)) {
      if (I && !I.includes(y))
        throw new Error(`SignTypedDataVersion not allowed: '${y}'. Allowed versions are: ${I.join(", ")}`);
    } else
      throw new Error(`Invalid version: '${y}'`);
  }
  function E(y, I, T, uu, J) {
    if (D(J, [o.V3, o.V4]), y[T] !== void 0)
      return [
        "bytes32",
        J === o.V4 && uu == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : r.keccak(c(T, uu, y, J))
      ];
    if (uu === void 0)
      throw new Error(`missing value for field ${I} of type ${T}`);
    if (T === "bytes")
      return ["bytes32", r.keccak(uu)];
    if (T === "string")
      return typeof uu == "string" && (uu = N.Buffer.from(uu, "utf8")), ["bytes32", r.keccak(uu)];
    if (T.lastIndexOf("]") === T.length - 1) {
      if (J === o.V3)
        throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
      const nu = T.slice(0, T.lastIndexOf("[")), Du = uu.map((Z) => E(y, I, nu, Z, J));
      return [
        "bytes32",
        r.keccak(n.rawEncode(Du.map(([Z]) => Z), Du.map(([, Z]) => Z)))
      ];
    }
    return [T, uu];
  }
  function c(y, I, T, uu) {
    D(uu, [o.V3, o.V4]);
    const J = ["bytes32"], nu = [M(y, T)];
    for (const Du of T[y]) {
      if (uu === o.V3 && I[Du.name] === void 0)
        continue;
      const [Z, au] = E(T, Du.name, Du.type, I[Du.name], uu);
      J.push(Z), nu.push(au);
    }
    return n.rawEncode(J, nu);
  }
  function p(y, I) {
    let T = "";
    const uu = v(y, I);
    uu.delete(y);
    const J = [y, ...Array.from(uu).sort()];
    for (const nu of J) {
      if (!I[nu])
        throw new Error(`No type definition specified: ${nu}`);
      T += `${nu}(${I[nu].map(({ name: Z, type: au }) => `${au} ${Z}`).join(",")})`;
    }
    return T;
  }
  function v(y, I, T = /* @__PURE__ */ new Set()) {
    if ([y] = y.match(/^\w*/u), T.has(y) || I[y] === void 0)
      return T;
    T.add(y);
    for (const uu of I[y])
      v(uu.type, I, T);
    return T;
  }
  function m(y, I, T, uu) {
    return D(uu, [o.V3, o.V4]), r.keccak(c(y, I, T, uu));
  }
  function M(y, I) {
    return r.keccak(p(y, I));
  }
  function _(y) {
    const I = {};
    for (const T in u.TYPED_MESSAGE_SCHEMA.properties)
      y[T] && (I[T] = y[T]);
    return "types" in I && (I.types = Object.assign({ EIP712Domain: [] }, I.types)), I;
  }
  function O(y, I) {
    D(I, [o.V3, o.V4]);
    const T = _(y), uu = [N.Buffer.from("1901", "hex")];
    return uu.push(m("EIP712Domain", T.domain, T.types, I)), T.primaryType !== "EIP712Domain" && uu.push(m(
      // TODO: Validate that this is a string, so this type cast can be removed.
      T.primaryType,
      T.message,
      T.types,
      I
    )), r.keccak(N.Buffer.concat(uu));
  }
  u.TypedDataUtils = {
    encodeData: c,
    encodeType: p,
    findTypeDependencies: v,
    hashStruct: m,
    hashType: M,
    sanitizeData: _,
    eip712Hash: O
  };
  function x(y) {
    const I = k(y);
    return r.bufferToHex(I);
  }
  u.typedSignatureHash = x;
  function k(y) {
    const I = new Error("Expect argument to be non-empty array");
    if (typeof y != "object" || !("length" in y) || !y.length)
      throw I;
    const T = y.map(function(nu) {
      return nu.type !== "bytes" ? nu.value : i.legacyToBuffer(nu.value);
    }), uu = y.map(function(nu) {
      return nu.type;
    }), J = y.map(function(nu) {
      if (!nu.name)
        throw I;
      return `${nu.type} ${nu.name}`;
    });
    return n.soliditySHA3(["bytes32", "bytes32"], [
      n.soliditySHA3(new Array(y.length).fill("string"), J),
      n.soliditySHA3(uu, T)
    ]);
  }
  function g({ privateKey: y, data: I, version: T }) {
    if (D(T), i.isNullish(I))
      throw new Error("Missing data parameter");
    if (i.isNullish(y))
      throw new Error("Missing private key parameter");
    const uu = T === o.V1 ? k(I) : u.TypedDataUtils.eip712Hash(I, T), J = r.ecsign(uu, y);
    return i.concatSig(r.toBuffer(J.v), J.r, J.s);
  }
  u.signTypedData = g;
  function b({ data: y, signature: I, version: T }) {
    if (D(T), i.isNullish(y))
      throw new Error("Missing data parameter");
    if (i.isNullish(I))
      throw new Error("Missing signature parameter");
    const uu = T === o.V1 ? k(y) : u.TypedDataUtils.eip712Hash(y, T), J = i.recoverPublicKey(uu, I), nu = r.publicToAddress(J);
    return r.bufferToHex(nu);
  }
  u.recoverTypedSignature = b;
})(xt);
var p0 = {}, Ot = { exports: {} };
(function(u) {
  (function(r, n) {
    u.exports ? u.exports = n() : (r.nacl || (r.nacl = {}), r.nacl.util = n());
  })(Pu, function() {
    var r = {};
    function n(i) {
      if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(i))
        throw new TypeError("invalid encoding");
    }
    return r.decodeUTF8 = function(i) {
      if (typeof i != "string")
        throw new TypeError("expected string");
      var o, D = unescape(encodeURIComponent(i)), E = new Uint8Array(D.length);
      for (o = 0; o < D.length; o++)
        E[o] = D.charCodeAt(o);
      return E;
    }, r.encodeUTF8 = function(i) {
      var o, D = [];
      for (o = 0; o < i.length; o++)
        D.push(String.fromCharCode(i[o]));
      return decodeURIComponent(escape(D.join("")));
    }, typeof atob > "u" ? typeof N.Buffer.from < "u" ? (r.encodeBase64 = function(i) {
      return N.Buffer.from(i).toString("base64");
    }, r.decodeBase64 = function(i) {
      return n(i), new Uint8Array(Array.prototype.slice.call(N.Buffer.from(i, "base64"), 0));
    }) : (r.encodeBase64 = function(i) {
      return new N.Buffer(i).toString("base64");
    }, r.decodeBase64 = function(i) {
      return n(i), new Uint8Array(Array.prototype.slice.call(new N.Buffer(i, "base64"), 0));
    }) : (r.encodeBase64 = function(i) {
      var o, D = [], E = i.length;
      for (o = 0; o < E; o++)
        D.push(String.fromCharCode(i[o]));
      return btoa(D.join(""));
    }, r.decodeBase64 = function(i) {
      n(i);
      var o, D = atob(i), E = new Uint8Array(D.length);
      for (o = 0; o < D.length; o++)
        E[o] = D.charCodeAt(o);
      return E;
    }), r;
  });
})(Ot);
var gn = Ot.exports, wn = Pu && Pu.__createBinding || (Object.create ? function(u, r, n, i) {
  i === void 0 && (i = n), Object.defineProperty(u, i, { enumerable: !0, get: function() {
    return r[n];
  } });
} : function(u, r, n, i) {
  i === void 0 && (i = n), u[i] = r[n];
}), xn = Pu && Pu.__setModuleDefault || (Object.create ? function(u, r) {
  Object.defineProperty(u, "default", { enumerable: !0, value: r });
} : function(u, r) {
  u.default = r;
}), kt = Pu && Pu.__importStar || function(u) {
  if (u && u.__esModule)
    return u;
  var r = {};
  if (u != null)
    for (var n in u)
      n !== "default" && Object.prototype.hasOwnProperty.call(u, n) && wn(r, u, n);
  return xn(r, u), r;
};
Object.defineProperty(p0, "__esModule", { value: !0 });
p0.getEncryptionPublicKey = p0.decryptSafely = p0.decrypt = p0.encryptSafely = p0.encrypt = void 0;
const x2 = kt(a8), g0 = kt(gn), R0 = Xu;
function Nt({ publicKey: u, data: r, version: n }) {
  if (R0.isNullish(u))
    throw new Error("Missing publicKey parameter");
  if (R0.isNullish(r))
    throw new Error("Missing data parameter");
  if (R0.isNullish(n))
    throw new Error("Missing version parameter");
  switch (n) {
    case "x25519-xsalsa20-poly1305": {
      if (typeof r != "string")
        throw new Error("Message data must be given as a string");
      const i = x2.box.keyPair();
      let o;
      try {
        o = g0.decodeBase64(u);
      } catch {
        throw new Error("Bad public key");
      }
      const D = g0.decodeUTF8(r), E = x2.randomBytes(x2.box.nonceLength), c = x2.box(D, E, o, i.secretKey);
      return {
        version: "x25519-xsalsa20-poly1305",
        nonce: g0.encodeBase64(E),
        ephemPublicKey: g0.encodeBase64(i.publicKey),
        ciphertext: g0.encodeBase64(c)
      };
    }
    default:
      throw new Error("Encryption type/version not supported");
  }
}
p0.encrypt = Nt;
function bn({ publicKey: u, data: r, version: n }) {
  if (R0.isNullish(u))
    throw new Error("Missing publicKey parameter");
  if (R0.isNullish(r))
    throw new Error("Missing data parameter");
  if (R0.isNullish(n))
    throw new Error("Missing version parameter");
  const i = 2 ** 11, o = 16;
  if (typeof r == "object" && "toJSON" in r)
    throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
  const D = {
    data: r,
    padding: ""
  }, c = N.Buffer.byteLength(JSON.stringify(D), "utf-8") % i;
  let p = 0;
  c > 0 && (p = i - c - o), D.padding = "0".repeat(p);
  const v = JSON.stringify(D);
  return Nt({ publicKey: u, data: v, version: n });
}
p0.encryptSafely = bn;
function Pt({ encryptedData: u, privateKey: r }) {
  if (R0.isNullish(u))
    throw new Error("Missing encryptedData parameter");
  if (R0.isNullish(r))
    throw new Error("Missing privateKey parameter");
  switch (u.version) {
    case "x25519-xsalsa20-poly1305": {
      const n = Rt(r), i = x2.box.keyPair.fromSecretKey(n).secretKey, o = g0.decodeBase64(u.nonce), D = g0.decodeBase64(u.ciphertext), E = g0.decodeBase64(u.ephemPublicKey), c = x2.box.open(D, o, E, i);
      let p;
      try {
        p = g0.encodeUTF8(c);
      } catch {
        throw new Error("Decryption failed.");
      }
      if (p)
        return p;
      throw new Error("Decryption failed.");
    }
    default:
      throw new Error("Encryption type/version not supported.");
  }
}
p0.decrypt = Pt;
function _n({ encryptedData: u, privateKey: r }) {
  if (R0.isNullish(u))
    throw new Error("Missing encryptedData parameter");
  if (R0.isNullish(r))
    throw new Error("Missing privateKey parameter");
  return JSON.parse(Pt({ encryptedData: u, privateKey: r })).data;
}
p0.decryptSafely = _n;
function Mn(u) {
  const r = Rt(u), n = x2.box.keyPair.fromSecretKey(r).publicKey;
  return g0.encodeBase64(n);
}
p0.getEncryptionPublicKey = Mn;
function Rt(u) {
  const r = N.Buffer.from(u, "hex").toString("base64");
  return g0.decodeBase64(r);
}
(function(u) {
  var r = Pu && Pu.__createBinding || (Object.create ? function(o, D, E, c) {
    c === void 0 && (c = E), Object.defineProperty(o, c, { enumerable: !0, get: function() {
      return D[E];
    } });
  } : function(o, D, E, c) {
    c === void 0 && (c = E), o[c] = D[E];
  }), n = Pu && Pu.__exportStar || function(o, D) {
    for (var E in o)
      E !== "default" && !Object.prototype.hasOwnProperty.call(D, E) && r(D, o, E);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.normalize = u.concatSig = void 0, n(e2, u), n(xt, u), n(p0, u);
  var i = Xu;
  Object.defineProperty(u, "concatSig", { enumerable: !0, get: function() {
    return i.concatSig;
  } }), Object.defineProperty(u, "normalize", { enumerable: !0, get: function() {
    return i.normalize;
  } });
})(N8);
var Me = {}, k1 = Pu && Pu.__assign || function() {
  return k1 = Object.assign || function(u) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (u[o] = r[o]);
    }
    return u;
  }, k1.apply(this, arguments);
};
Object.defineProperty(Me, "__esModule", { value: !0 });
var In = Me.NodeHttpTransport = void 0, Sn = o8, Un = s8, Tn = f8, On = ht;
function kn(u) {
  return function(r) {
    return new Nn(r, u);
  };
}
In = Me.NodeHttpTransport = kn;
var Nn = function() {
  function u(r, n) {
    this.httpsOptions = n, this.options = r;
  }
  return u.prototype.sendMessage = function(r) {
    !this.options.methodDefinition.requestStream && !this.options.methodDefinition.responseStream && this.request.setHeader("Content-Length", r.byteLength), this.request.write(Ln(r)), this.request.end();
  }, u.prototype.finishSend = function() {
  }, u.prototype.responseCallback = function(r) {
    var n = this;
    this.options.debug && console.log("NodeHttp.response", r.statusCode);
    var i = Pn(r.headers);
    this.options.onHeaders(new On.grpc.Metadata(i), r.statusCode), r.on("data", function(o) {
      n.options.debug && console.log("NodeHttp.data", o), n.options.onChunk(Rn(o));
    }), r.on("end", function() {
      n.options.debug && console.log("NodeHttp.end"), n.options.onEnd();
    });
  }, u.prototype.start = function(r) {
    var n = this, i = {};
    r.forEach(function(E, c) {
      i[E] = c.join(", ");
    });
    var o = Tn.parse(this.options.url), D = {
      host: o.hostname,
      port: o.port ? parseInt(o.port) : void 0,
      path: o.path,
      headers: i,
      method: "POST"
    };
    o.protocol === "https:" ? this.request = Un.request(k1(k1({}, D), this === null || this === void 0 ? void 0 : this.httpsOptions), this.responseCallback.bind(this)) : this.request = Sn.request(D, this.responseCallback.bind(this)), this.request.on("error", function(E) {
      n.options.debug && console.log("NodeHttp.error", E), n.options.onEnd(E);
    });
  }, u.prototype.cancel = function() {
    this.options.debug && console.log("NodeHttp.abort"), this.request.abort();
  }, u;
}();
function Pn(u) {
  var r = {};
  for (var n in u) {
    var i = u[n];
    u.hasOwnProperty(n) && i !== void 0 && (r[n] = i);
  }
  return r;
}
function Rn(u) {
  for (var r = new Uint8Array(u.length), n = 0; n < u.length; n++)
    r[n] = u[n];
  return r;
}
function Ln(u) {
  for (var r = N.Buffer.alloc(u.byteLength), n = 0; n < r.length; n++)
    r[n] = u[n];
  return r;
}
var Ie = {}, $n = Pu && Pu.__extends || /* @__PURE__ */ function() {
  var u = function(r, n) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var D in o)
        Object.prototype.hasOwnProperty.call(o, D) && (i[D] = o[D]);
    }, u(r, n);
  };
  return function(r, n) {
    u(r, n);
    function i() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
  };
}();
Object.defineProperty(Ie, "__esModule", { value: !0 });
var Hn = Ie.ReactNativeTransport = void 0, jn = ht;
function Vn(u) {
  return function(r) {
    return new qn(r, u);
  };
}
Hn = Ie.ReactNativeTransport = Vn;
var j0 = null;
function Lt() {
  if (j0) {
    var u = j0;
    j0 = null;
    for (var r = 0; r < u.length; r++)
      try {
        u[r]();
      } catch (i) {
        j0 === null && (j0 = [], setTimeout(function() {
          Lt();
        }, 0));
        for (var n = u.length - 1; n > r; n--)
          j0.unshift(u[n]);
        throw i;
      }
  }
}
function q9() {
  for (var u = [], r = 0; r < arguments.length; r++)
    u[r] = arguments[r];
  console.debug ? console.debug.apply(null, u) : console.log.apply(null, u);
}
function N2(u) {
  if (j0 !== null) {
    j0.push(u);
    return;
  }
  j0 = [u], setTimeout(function() {
    Lt();
  }, 0);
}
function Kn(u) {
  for (var r = new Uint8Array(u.length), n = 0, i = 0; i < u.length; i++) {
    var o = String.prototype.codePointAt ? u.codePointAt(i) : Gn(u, i);
    r[n++] = o & 255;
  }
  return r;
}
function Gn(u, r) {
  var n = u.charCodeAt(r);
  if (n >= 55296 && n <= 56319) {
    var i = u.charCodeAt(r + 1);
    i >= 56320 && i <= 57343 && (n = 65536 + (n - 55296 << 10) + (i - 56320));
  }
  return n;
}
var zn = function() {
  function u(r, n) {
    this.options = r, this.init = n;
  }
  return u.prototype.onProgressEvent = function() {
    var r = this;
    this.options.debug && q9("XHR.onProgressEvent.length: ", this.xhr.response.length);
    var n = this.xhr.response.substr(this.index);
    this.index = this.xhr.response.length;
    var i = Kn(n);
    N2(function() {
      r.options.onChunk(i);
    });
  }, u.prototype.onLoadEvent = function() {
    var r = this;
    N2(function() {
      r.options.onEnd();
    });
  }, u.prototype.onStateChange = function() {
    var r = this;
    this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && N2(function() {
      r.options.onHeaders(new jn.grpc.Metadata(r.xhr.getAllResponseHeaders()), r.xhr.status);
    });
  }, u.prototype.sendMessage = function(r) {
    this.xhr.send(r);
  }, u.prototype.finishSend = function() {
  }, u.prototype.start = function(r) {
    var n = this;
    this.metadata = r;
    var i = new XMLHttpRequest();
    this.xhr = i, i.open("POST", this.options.url), this.configureXhr(), this.metadata.forEach(function(o, D) {
      i.setRequestHeader(o, D.join(", "));
    }), i.withCredentials = !!this.init.withCredentials, i.addEventListener("readystatechange", this.onStateChange.bind(this)), i.addEventListener("progress", this.onProgressEvent.bind(this)), i.addEventListener("loadend", this.onLoadEvent.bind(this)), i.addEventListener("error", function(o) {
      N2(function() {
        n.options.onEnd(o.error);
      });
    });
  }, u.prototype.configureXhr = function() {
    this.xhr.responseType = "text", this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
  }, u.prototype.cancel = function() {
    this.xhr.abort();
  }, u;
}(), qn = function(u) {
  $n(r, u);
  function r() {
    return u !== null && u.apply(this, arguments) || this;
  }
  return r.prototype.configureXhr = function() {
    this.options.debug && q9("ArrayBufferXHR.configureXhr: setting responseType to 'arraybuffer'"), this.xhr.responseType = "arraybuffer";
  }, r.prototype.onProgressEvent = function() {
  }, r.prototype.onLoadEvent = function() {
    var n = this, i = this.xhr.response;
    this.options.debug && q9("ArrayBufferXHR.onLoadEvent: ", new Uint8Array(i)), N2(function() {
      n.options.onChunk(new Uint8Array(i), !0);
    }), N2(function() {
      n.options.onEnd();
    });
  }, r;
}(zn);
function C9(u, r) {
  if (!!!u)
    throw new Error(r);
}
function Zn(u) {
  return typeof u == "object" && u !== null;
}
function Wn(u, r) {
  if (!!!u)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const Yn = /\r\n|[\n\r]/g;
function Z9(u, r) {
  let n = 0, i = 1;
  for (const o of u.body.matchAll(Yn)) {
    if (typeof o.index == "number" || Wn(!1), o.index >= r)
      break;
    n = o.index + o[0].length, i += 1;
  }
  return {
    line: i,
    column: r + 1 - n
  };
}
function Jn(u) {
  return $t(
    u.source,
    Z9(u.source, u.start)
  );
}
function $t(u, r) {
  const n = u.locationOffset.column - 1, i = "".padStart(n) + u.body, o = r.line - 1, D = u.locationOffset.line - 1, E = r.line + D, c = r.line === 1 ? n : 0, p = r.column + c, v = `${u.name}:${E}:${p}
`, m = i.split(/\r\n|[\n\r]/g), M = m[o];
  if (M.length > 120) {
    const _ = Math.floor(p / 80), O = p % 80, x = [];
    for (let k = 0; k < M.length; k += 80)
      x.push(M.slice(k, k + 80));
    return v + nr([
      [`${E} |`, x[0]],
      ...x.slice(1, _ + 1).map((k) => ["|", k]),
      ["|", "^".padStart(O)],
      ["|", x[_ + 1]]
    ]);
  }
  return v + nr([
    // Lines specified like this: ["prefix", "string"],
    [`${E - 1} |`, m[o - 1]],
    [`${E} |`, M],
    ["|", "^".padStart(p)],
    [`${E + 1} |`, m[o + 1]]
  ]);
}
function nr(u) {
  const r = u.filter(([i, o]) => o !== void 0), n = Math.max(...r.map(([i]) => i.length));
  return r.map(([i, o]) => i.padStart(n) + (o ? " " + o : "")).join(`
`);
}
function Xn(u) {
  const r = u[0];
  return r == null || "kind" in r || "length" in r ? {
    nodes: r,
    source: u[1],
    positions: u[2],
    path: u[3],
    originalError: u[4],
    extensions: u[5]
  } : r;
}
class Se extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(r, ...n) {
    var i, o, D;
    const { nodes: E, source: c, positions: p, path: v, originalError: m, extensions: M } = Xn(n);
    super(r), this.name = "GraphQLError", this.path = v ?? void 0, this.originalError = m ?? void 0, this.nodes = Dr(
      Array.isArray(E) ? E : E ? [E] : void 0
    );
    const _ = Dr(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((x) => x.loc).filter((x) => x != null)
    );
    this.source = c ?? (_ == null || (o = _[0]) === null || o === void 0 ? void 0 : o.source), this.positions = p ?? (_ == null ? void 0 : _.map((x) => x.start)), this.locations = p && c ? p.map((x) => Z9(c, x)) : _ == null ? void 0 : _.map((x) => Z9(x.source, x.start));
    const O = Zn(
      m == null ? void 0 : m.extensions
    ) ? m == null ? void 0 : m.extensions : void 0;
    this.extensions = (D = M ?? O) !== null && D !== void 0 ? D : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), m != null && m.stack ? Object.defineProperty(this, "stack", {
      value: m.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Se) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let r = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (r += `

` + Jn(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        r += `

` + $t(this.source, n);
    return r;
  }
  toJSON() {
    const r = {
      message: this.message
    };
    return this.locations != null && (r.locations = this.locations), this.path != null && (r.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (r.extensions = this.extensions), r;
  }
}
function Dr(u) {
  return u === void 0 || u.length === 0 ? void 0 : u;
}
function Zu(u, r, n) {
  return new Se(`Syntax Error: ${n}`, {
    source: u,
    positions: [r]
  });
}
class Qn {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(r, n, i) {
    this.start = r.start, this.end = n.end, this.startToken = r, this.endToken = n, this.source = i;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Ht {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(r, n, i, o, D, E) {
    this.kind = r, this.start = n, this.end = i, this.line = o, this.column = D, this.value = E, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const u4 = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
new Set(Object.keys(u4));
var P2;
(function(u) {
  u.QUERY = "query", u.MUTATION = "mutation", u.SUBSCRIPTION = "subscription";
})(P2 || (P2 = {}));
var W9;
(function(u) {
  u.QUERY = "QUERY", u.MUTATION = "MUTATION", u.SUBSCRIPTION = "SUBSCRIPTION", u.FIELD = "FIELD", u.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", u.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", u.INLINE_FRAGMENT = "INLINE_FRAGMENT", u.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", u.SCHEMA = "SCHEMA", u.SCALAR = "SCALAR", u.OBJECT = "OBJECT", u.FIELD_DEFINITION = "FIELD_DEFINITION", u.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", u.INTERFACE = "INTERFACE", u.UNION = "UNION", u.ENUM = "ENUM", u.ENUM_VALUE = "ENUM_VALUE", u.INPUT_OBJECT = "INPUT_OBJECT", u.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(W9 || (W9 = {}));
var Bu;
(function(u) {
  u.NAME = "Name", u.DOCUMENT = "Document", u.OPERATION_DEFINITION = "OperationDefinition", u.VARIABLE_DEFINITION = "VariableDefinition", u.SELECTION_SET = "SelectionSet", u.FIELD = "Field", u.ARGUMENT = "Argument", u.FRAGMENT_SPREAD = "FragmentSpread", u.INLINE_FRAGMENT = "InlineFragment", u.FRAGMENT_DEFINITION = "FragmentDefinition", u.VARIABLE = "Variable", u.INT = "IntValue", u.FLOAT = "FloatValue", u.STRING = "StringValue", u.BOOLEAN = "BooleanValue", u.NULL = "NullValue", u.ENUM = "EnumValue", u.LIST = "ListValue", u.OBJECT = "ObjectValue", u.OBJECT_FIELD = "ObjectField", u.DIRECTIVE = "Directive", u.NAMED_TYPE = "NamedType", u.LIST_TYPE = "ListType", u.NON_NULL_TYPE = "NonNullType", u.SCHEMA_DEFINITION = "SchemaDefinition", u.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", u.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", u.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", u.FIELD_DEFINITION = "FieldDefinition", u.INPUT_VALUE_DEFINITION = "InputValueDefinition", u.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", u.UNION_TYPE_DEFINITION = "UnionTypeDefinition", u.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", u.ENUM_VALUE_DEFINITION = "EnumValueDefinition", u.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", u.DIRECTIVE_DEFINITION = "DirectiveDefinition", u.SCHEMA_EXTENSION = "SchemaExtension", u.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", u.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", u.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", u.UNION_TYPE_EXTENSION = "UnionTypeExtension", u.ENUM_TYPE_EXTENSION = "EnumTypeExtension", u.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Bu || (Bu = {}));
function e4(u) {
  return u === 9 || u === 32;
}
function s1(u) {
  return u >= 48 && u <= 57;
}
function jt(u) {
  return u >= 97 && u <= 122 || // A-Z
  u >= 65 && u <= 90;
}
function Vt(u) {
  return jt(u) || u === 95;
}
function r4(u) {
  return jt(u) || s1(u) || u === 95;
}
function t4(u) {
  var r;
  let n = Number.MAX_SAFE_INTEGER, i = null, o = -1;
  for (let E = 0; E < u.length; ++E) {
    var D;
    const c = u[E], p = n4(c);
    p !== c.length && (i = (D = i) !== null && D !== void 0 ? D : E, o = E, E !== 0 && p < n && (n = p));
  }
  return u.map((E, c) => c === 0 ? E : E.slice(n)).slice(
    (r = i) !== null && r !== void 0 ? r : 0,
    o + 1
  );
}
function n4(u) {
  let r = 0;
  for (; r < u.length && e4(u.charCodeAt(r)); )
    ++r;
  return r;
}
var q;
(function(u) {
  u.SOF = "<SOF>", u.EOF = "<EOF>", u.BANG = "!", u.DOLLAR = "$", u.AMP = "&", u.PAREN_L = "(", u.PAREN_R = ")", u.SPREAD = "...", u.COLON = ":", u.EQUALS = "=", u.AT = "@", u.BRACKET_L = "[", u.BRACKET_R = "]", u.BRACE_L = "{", u.PIPE = "|", u.BRACE_R = "}", u.NAME = "Name", u.INT = "Int", u.FLOAT = "Float", u.STRING = "String", u.BLOCK_STRING = "BlockString", u.COMMENT = "Comment";
})(q || (q = {}));
class D4 {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(r) {
    const n = new Ht(q.SOF, 0, 0, 0, 0);
    this.source = r, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let r = this.token;
    if (r.kind !== q.EOF)
      do
        if (r.next)
          r = r.next;
        else {
          const n = a4(this, r.end);
          r.next = n, n.prev = r, r = n;
        }
      while (r.kind === q.COMMENT);
    return r;
  }
}
function i4(u) {
  return u === q.BANG || u === q.DOLLAR || u === q.AMP || u === q.PAREN_L || u === q.PAREN_R || u === q.SPREAD || u === q.COLON || u === q.EQUALS || u === q.AT || u === q.BRACKET_L || u === q.BRACKET_R || u === q.BRACE_L || u === q.PIPE || u === q.BRACE_R;
}
function X2(u) {
  return u >= 0 && u <= 55295 || u >= 57344 && u <= 1114111;
}
function a9(u, r) {
  return Kt(u.charCodeAt(r)) && Gt(u.charCodeAt(r + 1));
}
function Kt(u) {
  return u >= 55296 && u <= 56319;
}
function Gt(u) {
  return u >= 56320 && u <= 57343;
}
function _2(u, r) {
  const n = u.source.body.codePointAt(r);
  if (n === void 0)
    return q.EOF;
  if (n >= 32 && n <= 126) {
    const i = String.fromCodePoint(n);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function zu(u, r, n, i, o) {
  const D = u.line, E = 1 + n - u.lineStart;
  return new Ht(r, n, i, D, E, o);
}
function a4(u, r) {
  const n = u.source.body, i = n.length;
  let o = r;
  for (; o < i; ) {
    const D = n.charCodeAt(o);
    switch (D) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++o;
        continue;
      case 10:
        ++o, ++u.line, u.lineStart = o;
        continue;
      case 13:
        n.charCodeAt(o + 1) === 10 ? o += 2 : ++o, ++u.line, u.lineStart = o;
        continue;
      case 35:
        return o4(u, o);
      case 33:
        return zu(u, q.BANG, o, o + 1);
      case 36:
        return zu(u, q.DOLLAR, o, o + 1);
      case 38:
        return zu(u, q.AMP, o, o + 1);
      case 40:
        return zu(u, q.PAREN_L, o, o + 1);
      case 41:
        return zu(u, q.PAREN_R, o, o + 1);
      case 46:
        if (n.charCodeAt(o + 1) === 46 && n.charCodeAt(o + 2) === 46)
          return zu(u, q.SPREAD, o, o + 3);
        break;
      case 58:
        return zu(u, q.COLON, o, o + 1);
      case 61:
        return zu(u, q.EQUALS, o, o + 1);
      case 64:
        return zu(u, q.AT, o, o + 1);
      case 91:
        return zu(u, q.BRACKET_L, o, o + 1);
      case 93:
        return zu(u, q.BRACKET_R, o, o + 1);
      case 123:
        return zu(u, q.BRACE_L, o, o + 1);
      case 124:
        return zu(u, q.PIPE, o, o + 1);
      case 125:
        return zu(u, q.BRACE_R, o, o + 1);
      case 34:
        return n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34 ? h4(u, o) : f4(u, o);
    }
    if (s1(D) || D === 45)
      return s4(u, o, D);
    if (Vt(D))
      return E4(u, o);
    throw Zu(
      u.source,
      o,
      D === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : X2(D) || a9(n, o) ? `Unexpected character: ${_2(u, o)}.` : `Invalid character: ${_2(u, o)}.`
    );
  }
  return zu(u, q.EOF, i, i);
}
function o4(u, r) {
  const n = u.source.body, i = n.length;
  let o = r + 1;
  for (; o < i; ) {
    const D = n.charCodeAt(o);
    if (D === 10 || D === 13)
      break;
    if (X2(D))
      ++o;
    else if (a9(n, o))
      o += 2;
    else
      break;
  }
  return zu(
    u,
    q.COMMENT,
    r,
    o,
    n.slice(r + 1, o)
  );
}
function s4(u, r, n) {
  const i = u.source.body;
  let o = r, D = n, E = !1;
  if (D === 45 && (D = i.charCodeAt(++o)), D === 48) {
    if (D = i.charCodeAt(++o), s1(D))
      throw Zu(
        u.source,
        o,
        `Invalid number, unexpected digit after 0: ${_2(
          u,
          o
        )}.`
      );
  } else
    o = d9(u, o, D), D = i.charCodeAt(o);
  if (D === 46 && (E = !0, D = i.charCodeAt(++o), o = d9(u, o, D), D = i.charCodeAt(o)), (D === 69 || D === 101) && (E = !0, D = i.charCodeAt(++o), (D === 43 || D === 45) && (D = i.charCodeAt(++o)), o = d9(u, o, D), D = i.charCodeAt(o)), D === 46 || Vt(D))
    throw Zu(
      u.source,
      o,
      `Invalid number, expected digit but got: ${_2(
        u,
        o
      )}.`
    );
  return zu(
    u,
    E ? q.FLOAT : q.INT,
    r,
    o,
    i.slice(r, o)
  );
}
function d9(u, r, n) {
  if (!s1(n))
    throw Zu(
      u.source,
      r,
      `Invalid number, expected digit but got: ${_2(
        u,
        r
      )}.`
    );
  const i = u.source.body;
  let o = r + 1;
  for (; s1(i.charCodeAt(o)); )
    ++o;
  return o;
}
function f4(u, r) {
  const n = u.source.body, i = n.length;
  let o = r + 1, D = o, E = "";
  for (; o < i; ) {
    const c = n.charCodeAt(o);
    if (c === 34)
      return E += n.slice(D, o), zu(u, q.STRING, r, o + 1, E);
    if (c === 92) {
      E += n.slice(D, o);
      const p = n.charCodeAt(o + 1) === 117 ? n.charCodeAt(o + 2) === 123 ? F4(u, o) : l4(u, o) : A4(u, o);
      E += p.value, o += p.size, D = o;
      continue;
    }
    if (c === 10 || c === 13)
      break;
    if (X2(c))
      ++o;
    else if (a9(n, o))
      o += 2;
    else
      throw Zu(
        u.source,
        o,
        `Invalid character within String: ${_2(
          u,
          o
        )}.`
      );
  }
  throw Zu(u.source, o, "Unterminated string.");
}
function F4(u, r) {
  const n = u.source.body;
  let i = 0, o = 3;
  for (; o < 12; ) {
    const D = n.charCodeAt(r + o++);
    if (D === 125) {
      if (o < 5 || !X2(i))
        break;
      return {
        value: String.fromCodePoint(i),
        size: o
      };
    }
    if (i = i << 4 | i1(D), i < 0)
      break;
  }
  throw Zu(
    u.source,
    r,
    `Invalid Unicode escape sequence: "${n.slice(
      r,
      r + o
    )}".`
  );
}
function l4(u, r) {
  const n = u.source.body, i = ir(n, r + 2);
  if (X2(i))
    return {
      value: String.fromCodePoint(i),
      size: 6
    };
  if (Kt(i) && n.charCodeAt(r + 6) === 92 && n.charCodeAt(r + 7) === 117) {
    const o = ir(n, r + 8);
    if (Gt(o))
      return {
        value: String.fromCodePoint(i, o),
        size: 12
      };
  }
  throw Zu(
    u.source,
    r,
    `Invalid Unicode escape sequence: "${n.slice(r, r + 6)}".`
  );
}
function ir(u, r) {
  return i1(u.charCodeAt(r)) << 12 | i1(u.charCodeAt(r + 1)) << 8 | i1(u.charCodeAt(r + 2)) << 4 | i1(u.charCodeAt(r + 3));
}
function i1(u) {
  return u >= 48 && u <= 57 ? u - 48 : u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : -1;
}
function A4(u, r) {
  const n = u.source.body;
  switch (n.charCodeAt(r + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw Zu(
    u.source,
    r,
    `Invalid character escape sequence: "${n.slice(
      r,
      r + 2
    )}".`
  );
}
function h4(u, r) {
  const n = u.source.body, i = n.length;
  let o = u.lineStart, D = r + 3, E = D, c = "";
  const p = [];
  for (; D < i; ) {
    const v = n.charCodeAt(D);
    if (v === 34 && n.charCodeAt(D + 1) === 34 && n.charCodeAt(D + 2) === 34) {
      c += n.slice(E, D), p.push(c);
      const m = zu(
        u,
        q.BLOCK_STRING,
        r,
        D + 3,
        // Return a string of the lines joined with U+000A.
        t4(p).join(`
`)
      );
      return u.line += p.length - 1, u.lineStart = o, m;
    }
    if (v === 92 && n.charCodeAt(D + 1) === 34 && n.charCodeAt(D + 2) === 34 && n.charCodeAt(D + 3) === 34) {
      c += n.slice(E, D), E = D + 1, D += 4;
      continue;
    }
    if (v === 10 || v === 13) {
      c += n.slice(E, D), p.push(c), v === 13 && n.charCodeAt(D + 1) === 10 ? D += 2 : ++D, c = "", E = D, o = D;
      continue;
    }
    if (X2(v))
      ++D;
    else if (a9(n, D))
      D += 2;
    else
      throw Zu(
        u.source,
        D,
        `Invalid character within String: ${_2(
          u,
          D
        )}.`
      );
  }
  throw Zu(u.source, D, "Unterminated string.");
}
function E4(u, r) {
  const n = u.source.body, i = n.length;
  let o = r + 1;
  for (; o < i; ) {
    const D = n.charCodeAt(o);
    if (r4(D))
      ++o;
    else
      break;
  }
  return zu(
    u,
    q.NAME,
    r,
    o,
    n.slice(r, o)
  );
}
const c4 = 10, zt = 2;
function qt(u) {
  return o9(u, []);
}
function o9(u, r) {
  switch (typeof u) {
    case "string":
      return JSON.stringify(u);
    case "function":
      return u.name ? `[function ${u.name}]` : "[function]";
    case "object":
      return C4(u, r);
    default:
      return String(u);
  }
}
function C4(u, r) {
  if (u === null)
    return "null";
  if (r.includes(u))
    return "[Circular]";
  const n = [...r, u];
  if (d4(u)) {
    const i = u.toJSON();
    if (i !== u)
      return typeof i == "string" ? i : o9(i, n);
  } else if (Array.isArray(u))
    return B4(u, n);
  return p4(u, n);
}
function d4(u) {
  return typeof u.toJSON == "function";
}
function p4(u, r) {
  const n = Object.entries(u);
  return n.length === 0 ? "{}" : r.length > zt ? "[" + v4(u) + "]" : "{ " + n.map(
    ([o, D]) => o + ": " + o9(D, r)
  ).join(", ") + " }";
}
function B4(u, r) {
  if (u.length === 0)
    return "[]";
  if (r.length > zt)
    return "[Array]";
  const n = Math.min(c4, u.length), i = u.length - n, o = [];
  for (let D = 0; D < n; ++D)
    o.push(o9(u[D], r));
  return i === 1 ? o.push("... 1 more item") : i > 1 && o.push(`... ${i} more items`), "[" + o.join(", ") + "]";
}
function v4(u) {
  const r = Object.prototype.toString.call(u).replace(/^\[object /, "").replace(/]$/, "");
  if (r === "Object" && typeof u.constructor == "function") {
    const n = u.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return r;
}
const m4 = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(r, n) {
    return r instanceof n;
  } : function(r, n) {
    if (r instanceof n)
      return !0;
    if (typeof r == "object" && r !== null) {
      var i;
      const o = n.prototype[Symbol.toStringTag], D = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in r ? r[Symbol.toStringTag] : (i = r.constructor) === null || i === void 0 ? void 0 : i.name
      );
      if (o === D) {
        const E = qt(r);
        throw new Error(`Cannot use ${o} "${E}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class Zt {
  constructor(r, n = "GraphQL request", i = {
    line: 1,
    column: 1
  }) {
    typeof r == "string" || C9(!1, `Body must be a string. Received: ${qt(r)}.`), this.body = r, this.name = n, this.locationOffset = i, this.locationOffset.line > 0 || C9(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || C9(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function y4(u) {
  return m4(u, Zt);
}
function g4(u, r) {
  return new w4(u, r).parseDocument();
}
class w4 {
  constructor(r, n = {}) {
    const i = y4(r) ? r : new Zt(r);
    this._lexer = new D4(i), this._options = n, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const r = this.expectToken(q.NAME);
    return this.node(r, {
      kind: Bu.NAME,
      value: r.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Bu.DOCUMENT,
      definitions: this.many(
        q.SOF,
        this.parseDefinition,
        q.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(q.BRACE_L))
      return this.parseOperationDefinition();
    const r = this.peekDescription(), n = r ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === q.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (r)
        throw Zu(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const r = this._lexer.token;
    if (this.peek(q.BRACE_L))
      return this.node(r, {
        kind: Bu.OPERATION_DEFINITION,
        operation: P2.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const n = this.parseOperationType();
    let i;
    return this.peek(q.NAME) && (i = this.parseName()), this.node(r, {
      kind: Bu.OPERATION_DEFINITION,
      operation: n,
      name: i,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const r = this.expectToken(q.NAME);
    switch (r.value) {
      case "query":
        return P2.QUERY;
      case "mutation":
        return P2.MUTATION;
      case "subscription":
        return P2.SUBSCRIPTION;
    }
    throw this.unexpected(r);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      q.PAREN_L,
      this.parseVariableDefinition,
      q.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Bu.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(q.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(q.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const r = this._lexer.token;
    return this.expectToken(q.DOLLAR), this.node(r, {
      kind: Bu.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Bu.SELECTION_SET,
      selections: this.many(
        q.BRACE_L,
        this.parseSelection,
        q.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(q.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const r = this._lexer.token, n = this.parseName();
    let i, o;
    return this.expectOptionalToken(q.COLON) ? (i = n, o = this.parseName()) : o = n, this.node(r, {
      kind: Bu.FIELD,
      alias: i,
      name: o,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(q.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(r) {
    const n = r ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(q.PAREN_L, n, q.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(r = !1) {
    const n = this._lexer.token, i = this.parseName();
    return this.expectToken(q.COLON), this.node(n, {
      kind: Bu.ARGUMENT,
      name: i,
      value: this.parseValueLiteral(r)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const r = this._lexer.token;
    this.expectToken(q.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(q.NAME) ? this.node(r, {
      kind: Bu.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(r, {
      kind: Bu.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const r = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(r, {
      kind: Bu.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(r, {
      kind: Bu.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(r) {
    const n = this._lexer.token;
    switch (n.kind) {
      case q.BRACKET_L:
        return this.parseList(r);
      case q.BRACE_L:
        return this.parseObject(r);
      case q.INT:
        return this.advanceLexer(), this.node(n, {
          kind: Bu.INT,
          value: n.value
        });
      case q.FLOAT:
        return this.advanceLexer(), this.node(n, {
          kind: Bu.FLOAT,
          value: n.value
        });
      case q.STRING:
      case q.BLOCK_STRING:
        return this.parseStringLiteral();
      case q.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, {
              kind: Bu.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: Bu.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: Bu.NULL
            });
          default:
            return this.node(n, {
              kind: Bu.ENUM,
              value: n.value
            });
        }
      case q.DOLLAR:
        if (r)
          if (this.expectToken(q.DOLLAR), this._lexer.token.kind === q.NAME) {
            const i = this._lexer.token.value;
            throw Zu(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${i}" in constant value.`
            );
          } else
            throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const r = this._lexer.token;
    return this.advanceLexer(), this.node(r, {
      kind: Bu.STRING,
      value: r.value,
      block: r.kind === q.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(r) {
    const n = () => this.parseValueLiteral(r);
    return this.node(this._lexer.token, {
      kind: Bu.LIST,
      values: this.any(q.BRACKET_L, n, q.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(r) {
    const n = () => this.parseObjectField(r);
    return this.node(this._lexer.token, {
      kind: Bu.OBJECT,
      fields: this.any(q.BRACE_L, n, q.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(r) {
    const n = this._lexer.token, i = this.parseName();
    return this.expectToken(q.COLON), this.node(n, {
      kind: Bu.OBJECT_FIELD,
      name: i,
      value: this.parseValueLiteral(r)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(r) {
    const n = [];
    for (; this.peek(q.AT); )
      n.push(this.parseDirective(r));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(r) {
    const n = this._lexer.token;
    return this.expectToken(q.AT), this.node(n, {
      kind: Bu.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(r)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const r = this._lexer.token;
    let n;
    if (this.expectOptionalToken(q.BRACKET_L)) {
      const i = this.parseTypeReference();
      this.expectToken(q.BRACKET_R), n = this.node(r, {
        kind: Bu.LIST_TYPE,
        type: i
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken(q.BANG) ? this.node(r, {
      kind: Bu.NON_NULL_TYPE,
      type: n
    }) : n;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Bu.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(q.STRING) || this.peek(q.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const i = this.parseConstDirectives(), o = this.many(
      q.BRACE_L,
      this.parseOperationTypeDefinition,
      q.BRACE_R
    );
    return this.node(r, {
      kind: Bu.SCHEMA_DEFINITION,
      description: n,
      directives: i,
      operationTypes: o
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const r = this._lexer.token, n = this.parseOperationType();
    this.expectToken(q.COLON);
    const i = this.parseNamedType();
    return this.node(r, {
      kind: Bu.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: i
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const i = this.parseName(), o = this.parseConstDirectives();
    return this.node(r, {
      kind: Bu.SCALAR_TYPE_DEFINITION,
      description: n,
      name: i,
      directives: o
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const i = this.parseName(), o = this.parseImplementsInterfaces(), D = this.parseConstDirectives(), E = this.parseFieldsDefinition();
    return this.node(r, {
      kind: Bu.OBJECT_TYPE_DEFINITION,
      description: n,
      name: i,
      interfaces: o,
      directives: D,
      fields: E
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(q.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      q.BRACE_L,
      this.parseFieldDefinition,
      q.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const r = this._lexer.token, n = this.parseDescription(), i = this.parseName(), o = this.parseArgumentDefs();
    this.expectToken(q.COLON);
    const D = this.parseTypeReference(), E = this.parseConstDirectives();
    return this.node(r, {
      kind: Bu.FIELD_DEFINITION,
      description: n,
      name: i,
      arguments: o,
      type: D,
      directives: E
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      q.PAREN_L,
      this.parseInputValueDef,
      q.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const r = this._lexer.token, n = this.parseDescription(), i = this.parseName();
    this.expectToken(q.COLON);
    const o = this.parseTypeReference();
    let D;
    this.expectOptionalToken(q.EQUALS) && (D = this.parseConstValueLiteral());
    const E = this.parseConstDirectives();
    return this.node(r, {
      kind: Bu.INPUT_VALUE_DEFINITION,
      description: n,
      name: i,
      type: o,
      defaultValue: D,
      directives: E
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const i = this.parseName(), o = this.parseImplementsInterfaces(), D = this.parseConstDirectives(), E = this.parseFieldsDefinition();
    return this.node(r, {
      kind: Bu.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: i,
      interfaces: o,
      directives: D,
      fields: E
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const i = this.parseName(), o = this.parseConstDirectives(), D = this.parseUnionMemberTypes();
    return this.node(r, {
      kind: Bu.UNION_TYPE_DEFINITION,
      description: n,
      name: i,
      directives: o,
      types: D
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(q.EQUALS) ? this.delimitedMany(q.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const i = this.parseName(), o = this.parseConstDirectives(), D = this.parseEnumValuesDefinition();
    return this.node(r, {
      kind: Bu.ENUM_TYPE_DEFINITION,
      description: n,
      name: i,
      directives: o,
      values: D
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      q.BRACE_L,
      this.parseEnumValueDefinition,
      q.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const r = this._lexer.token, n = this.parseDescription(), i = this.parseEnumValueName(), o = this.parseConstDirectives();
    return this.node(r, {
      kind: Bu.ENUM_VALUE_DEFINITION,
      description: n,
      name: i,
      directives: o
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw Zu(
        this._lexer.source,
        this._lexer.token.start,
        `${_1(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const i = this.parseName(), o = this.parseConstDirectives(), D = this.parseInputFieldsDefinition();
    return this.node(r, {
      kind: Bu.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: i,
      directives: o,
      fields: D
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      q.BRACE_L,
      this.parseInputValueDef,
      q.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const r = this._lexer.lookahead();
    if (r.kind === q.NAME)
      switch (r.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(r);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(), i = this.optionalMany(
      q.BRACE_L,
      this.parseOperationTypeDefinition,
      q.BRACE_R
    );
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: i
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), i = this.parseConstDirectives();
    if (i.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: i
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), D = this.parseFieldsDefinition();
    if (i.length === 0 && o.length === 0 && D.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: i,
      directives: o,
      fields: D
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), D = this.parseFieldsDefinition();
    if (i.length === 0 && o.length === 0 && D.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: i,
      directives: o,
      fields: D
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(), i = this.parseConstDirectives(), o = this.parseUnionMemberTypes();
    if (i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.UNION_TYPE_EXTENSION,
      name: n,
      directives: i,
      types: o
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(), i = this.parseConstDirectives(), o = this.parseEnumValuesDefinition();
    if (i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.ENUM_TYPE_EXTENSION,
      name: n,
      directives: i,
      values: o
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const r = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(), i = this.parseConstDirectives(), o = this.parseInputFieldsDefinition();
    if (i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(r, {
      kind: Bu.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: i,
      fields: o
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const r = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(q.AT);
    const i = this.parseName(), o = this.parseArgumentDefs(), D = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const E = this.parseDirectiveLocations();
    return this.node(r, {
      kind: Bu.DIRECTIVE_DEFINITION,
      description: n,
      name: i,
      arguments: o,
      repeatable: D,
      locations: E
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(q.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const r = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(W9, n.value))
      return n;
    throw this.unexpected(r);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(r, n) {
    return this._options.noLocation !== !0 && (n.loc = new Qn(
      r,
      this._lexer.lastToken,
      this._lexer.source
    )), n;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(r) {
    return this._lexer.token.kind === r;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(r) {
    const n = this._lexer.token;
    if (n.kind === r)
      return this.advanceLexer(), n;
    throw Zu(
      this._lexer.source,
      n.start,
      `Expected ${Wt(r)}, found ${_1(n)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(r) {
    return this._lexer.token.kind === r ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(r) {
    const n = this._lexer.token;
    if (n.kind === q.NAME && n.value === r)
      this.advanceLexer();
    else
      throw Zu(
        this._lexer.source,
        n.start,
        `Expected "${r}", found ${_1(n)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(r) {
    const n = this._lexer.token;
    return n.kind === q.NAME && n.value === r ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(r) {
    const n = r ?? this._lexer.token;
    return Zu(
      this._lexer.source,
      n.start,
      `Unexpected ${_1(n)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(r, n, i) {
    this.expectToken(r);
    const o = [];
    for (; !this.expectOptionalToken(i); )
      o.push(n.call(this));
    return o;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(r, n, i) {
    if (this.expectOptionalToken(r)) {
      const o = [];
      do
        o.push(n.call(this));
      while (!this.expectOptionalToken(i));
      return o;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(r, n, i) {
    this.expectToken(r);
    const o = [];
    do
      o.push(n.call(this));
    while (!this.expectOptionalToken(i));
    return o;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(r, n) {
    this.expectOptionalToken(r);
    const i = [];
    do
      i.push(n.call(this));
    while (this.expectOptionalToken(r));
    return i;
  }
  advanceLexer() {
    const { maxTokens: r } = this._options, n = this._lexer.advance();
    if (r !== void 0 && n.kind !== q.EOF && (++this._tokenCounter, this._tokenCounter > r))
      throw Zu(
        this._lexer.source,
        n.start,
        `Document contains more that ${r} tokens. Parsing aborted.`
      );
  }
}
function _1(u) {
  const r = u.value;
  return Wt(u.kind) + (r != null ? ` "${r}"` : "");
}
function Wt(u) {
  return i4(u) ? `"${u}"` : u;
}
var U1 = /* @__PURE__ */ new Map(), Y9 = /* @__PURE__ */ new Map(), Yt = !0, N1 = !1;
function Jt(u) {
  return u.replace(/[\s,]+/g, " ").trim();
}
function x4(u) {
  return Jt(u.source.body.substring(u.start, u.end));
}
function b4(u) {
  var r = /* @__PURE__ */ new Set(), n = [];
  return u.definitions.forEach(function(i) {
    if (i.kind === "FragmentDefinition") {
      var o = i.name.value, D = x4(i.loc), E = Y9.get(o);
      E && !E.has(D) ? Yt && console.warn("Warning: fragment with name " + o + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : E || Y9.set(o, E = /* @__PURE__ */ new Set()), E.add(D), r.has(D) || (r.add(D), n.push(i));
    } else
      n.push(i);
  }), $2($2({}, u), { definitions: n });
}
function _4(u) {
  var r = new Set(u.definitions);
  r.forEach(function(i) {
    i.loc && delete i.loc, Object.keys(i).forEach(function(o) {
      var D = i[o];
      D && typeof D == "object" && r.add(D);
    });
  });
  var n = u.loc;
  return n && (delete n.startToken, delete n.endToken), u;
}
function M4(u) {
  var r = Jt(u);
  if (!U1.has(r)) {
    var n = g4(u, {
      experimentalFragmentVariables: N1,
      allowLegacyFragmentVariables: N1
    });
    if (!n || n.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    U1.set(r, _4(b4(n)));
  }
  return U1.get(r);
}
function f1(u) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  typeof u == "string" && (u = [u]);
  var i = u[0];
  return r.forEach(function(o, D) {
    o && o.kind === "Document" ? i += o.loc.source.body : i += o, i += u[D + 1];
  }), M4(i);
}
function I4() {
  U1.clear(), Y9.clear();
}
function S4() {
  Yt = !1;
}
function U4() {
  N1 = !0;
}
function T4() {
  N1 = !1;
}
var r1 = {
  gql: f1,
  resetCaches: I4,
  disableFragmentWarnings: S4,
  enableExperimentalFragmentVariables: U4,
  disableExperimentalFragmentVariables: T4
};
(function(u) {
  u.gql = r1.gql, u.resetCaches = r1.resetCaches, u.disableFragmentWarnings = r1.disableFragmentWarnings, u.enableExperimentalFragmentVariables = r1.enableExperimentalFragmentVariables, u.disableExperimentalFragmentVariables = r1.disableExperimentalFragmentVariables;
})(f1 || (f1 = {}));
f1.default = f1;
var O4 = { exports: {} };
(function(u, r) {
  (function(n, i) {
    u.exports = i(F8);
  })(Pu, function(n) {
    function i(x) {
      return x && typeof x == "object" && "default" in x ? x : { default: x };
    }
    var o = /* @__PURE__ */ i(n), D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Pu < "u" ? Pu : typeof self < "u" ? self : {}, E = { exports: {} };
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.5.7
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2016
     * @license MIT
     */
    (function(x) {
      (function() {
        var k = typeof window == "object" ? window : {}, g = !k.JS_SHA3_NO_NODE_JS && typeof N.process == "object" && N.process.versions && N.process.versions.node;
        g && (k = D);
        for (var b = !k.JS_SHA3_NO_COMMON_JS && !0 && x.exports, y = "0123456789abcdef".split(""), I = [31, 7936, 2031616, 520093696], T = [1, 256, 65536, 16777216], uu = [6, 1536, 393216, 100663296], J = [0, 8, 16, 24], nu = [
          1,
          0,
          32898,
          0,
          32906,
          2147483648,
          2147516416,
          2147483648,
          32907,
          0,
          2147483649,
          0,
          2147516545,
          2147483648,
          32777,
          2147483648,
          138,
          0,
          136,
          0,
          2147516425,
          0,
          2147483658,
          0,
          2147516555,
          0,
          139,
          2147483648,
          32905,
          2147483648,
          32771,
          2147483648,
          32770,
          2147483648,
          128,
          2147483648,
          32778,
          0,
          2147483658,
          2147483648,
          2147516545,
          2147483648,
          32896,
          2147483648,
          2147483649,
          0,
          2147516424,
          2147483648
        ], Du = [224, 256, 384, 512], Z = [128, 256], au = ["hex", "buffer", "arrayBuffer", "array"], h = function(d, $, j) {
          return function(iu) {
            return new L(d, $, d).update(iu)[j]();
          };
        }, e = function(d, $, j) {
          return function(iu, X) {
            return new L(d, $, X).update(iu)[j]();
          };
        }, a = function(d, $) {
          var j = h(d, $, "hex");
          j.create = function() {
            return new L(d, $, d);
          }, j.update = function(ru) {
            return j.create().update(ru);
          };
          for (var iu = 0; iu < au.length; ++iu) {
            var X = au[iu];
            j[X] = h(d, $, X);
          }
          return j;
        }, s = function(d, $) {
          var j = e(d, $, "hex");
          j.create = function(ru) {
            return new L(d, $, ru);
          }, j.update = function(ru, Ru) {
            return j.create(Ru).update(ru);
          };
          for (var iu = 0; iu < au.length; ++iu) {
            var X = au[iu];
            j[X] = e(d, $, X);
          }
          return j;
        }, f = [
          { name: "keccak", padding: T, bits: Du, createMethod: a },
          { name: "sha3", padding: uu, bits: Du, createMethod: a },
          { name: "shake", padding: I, bits: Z, createMethod: s }
        ], A = {}, C = [], B = 0; B < f.length; ++B)
          for (var F = f[B], t = F.bits, l = 0; l < t.length; ++l) {
            var R = F.name + "_" + t[l];
            C.push(R), A[R] = F.createMethod(t[l], F.padding);
          }
        function L(d, $, j) {
          this.blocks = [], this.s = [], this.padding = $, this.outputBits = j, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (d << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = j >> 5, this.extraBytes = (j & 31) >> 3;
          for (var iu = 0; iu < 50; ++iu)
            this.s[iu] = 0;
        }
        L.prototype.update = function(d) {
          var $ = typeof d != "string";
          $ && d.constructor === ArrayBuffer && (d = new Uint8Array(d));
          for (var j = d.length, iu = this.blocks, X = this.byteCount, ru = this.blockCount, Ru = 0, eu = this.s, W, $u; Ru < j; ) {
            if (this.reset)
              for (this.reset = !1, iu[0] = this.block, W = 1; W < ru + 1; ++W)
                iu[W] = 0;
            if ($)
              for (W = this.start; Ru < j && W < X; ++Ru)
                iu[W >> 2] |= d[Ru] << J[W++ & 3];
            else
              for (W = this.start; Ru < j && W < X; ++Ru)
                $u = d.charCodeAt(Ru), $u < 128 ? iu[W >> 2] |= $u << J[W++ & 3] : $u < 2048 ? (iu[W >> 2] |= (192 | $u >> 6) << J[W++ & 3], iu[W >> 2] |= (128 | $u & 63) << J[W++ & 3]) : $u < 55296 || $u >= 57344 ? (iu[W >> 2] |= (224 | $u >> 12) << J[W++ & 3], iu[W >> 2] |= (128 | $u >> 6 & 63) << J[W++ & 3], iu[W >> 2] |= (128 | $u & 63) << J[W++ & 3]) : ($u = 65536 + (($u & 1023) << 10 | d.charCodeAt(++Ru) & 1023), iu[W >> 2] |= (240 | $u >> 18) << J[W++ & 3], iu[W >> 2] |= (128 | $u >> 12 & 63) << J[W++ & 3], iu[W >> 2] |= (128 | $u >> 6 & 63) << J[W++ & 3], iu[W >> 2] |= (128 | $u & 63) << J[W++ & 3]);
            if (this.lastByteIndex = W, W >= X) {
              for (this.start = W - X, this.block = iu[ru], W = 0; W < ru; ++W)
                eu[W] ^= iu[W];
              H(eu), this.reset = !0;
            } else
              this.start = W;
          }
          return this;
        }, L.prototype.finalize = function() {
          var d = this.blocks, $ = this.lastByteIndex, j = this.blockCount, iu = this.s;
          if (d[$ >> 2] |= this.padding[$ & 3], this.lastByteIndex === this.byteCount)
            for (d[0] = d[j], $ = 1; $ < j + 1; ++$)
              d[$] = 0;
          for (d[j - 1] |= 2147483648, $ = 0; $ < j; ++$)
            iu[$] ^= d[$];
          H(iu);
        }, L.prototype.toString = L.prototype.hex = function() {
          this.finalize();
          for (var d = this.blockCount, $ = this.s, j = this.outputBlocks, iu = this.extraBytes, X = 0, ru = 0, Ru = "", eu; ru < j; ) {
            for (X = 0; X < d && ru < j; ++X, ++ru)
              eu = $[X], Ru += y[eu >> 4 & 15] + y[eu & 15] + y[eu >> 12 & 15] + y[eu >> 8 & 15] + y[eu >> 20 & 15] + y[eu >> 16 & 15] + y[eu >> 28 & 15] + y[eu >> 24 & 15];
            ru % d === 0 && (H($), X = 0);
          }
          return iu && (eu = $[X], iu > 0 && (Ru += y[eu >> 4 & 15] + y[eu & 15]), iu > 1 && (Ru += y[eu >> 12 & 15] + y[eu >> 8 & 15]), iu > 2 && (Ru += y[eu >> 20 & 15] + y[eu >> 16 & 15])), Ru;
        }, L.prototype.arrayBuffer = function() {
          this.finalize();
          var d = this.blockCount, $ = this.s, j = this.outputBlocks, iu = this.extraBytes, X = 0, ru = 0, Ru = this.outputBits >> 3, eu;
          iu ? eu = new ArrayBuffer(j + 1 << 2) : eu = new ArrayBuffer(Ru);
          for (var W = new Uint32Array(eu); ru < j; ) {
            for (X = 0; X < d && ru < j; ++X, ++ru)
              W[ru] = $[X];
            ru % d === 0 && H($);
          }
          return iu && (W[X] = $[X], eu = eu.slice(0, Ru)), eu;
        }, L.prototype.buffer = L.prototype.arrayBuffer, L.prototype.digest = L.prototype.array = function() {
          this.finalize();
          for (var d = this.blockCount, $ = this.s, j = this.outputBlocks, iu = this.extraBytes, X = 0, ru = 0, Ru = [], eu, W; ru < j; ) {
            for (X = 0; X < d && ru < j; ++X, ++ru)
              eu = ru << 2, W = $[X], Ru[eu] = W & 255, Ru[eu + 1] = W >> 8 & 255, Ru[eu + 2] = W >> 16 & 255, Ru[eu + 3] = W >> 24 & 255;
            ru % d === 0 && H($);
          }
          return iu && (eu = ru << 2, W = $[X], iu > 0 && (Ru[eu] = W & 255), iu > 1 && (Ru[eu + 1] = W >> 8 & 255), iu > 2 && (Ru[eu + 2] = W >> 16 & 255)), Ru;
        };
        var H = function(d) {
          var $, j, iu, X, ru, Ru, eu, W, $u, hu, Eu, f0, cu, Cu, e0, K, pu, w, U, P, Y, G, V, tu, z, Q, lu, su, fu, ju, ou, Fu, t0, Au, du, _0, mu, yu, M0, gu, wu, I0, xu, bu, S0, _u, Mu, U0, Iu, Su, T0, Uu, Tu, O0, Ou, ku, F0, l0, A0, h0, E0, c0, C0;
          for (iu = 0; iu < 48; iu += 2)
            X = d[0] ^ d[10] ^ d[20] ^ d[30] ^ d[40], ru = d[1] ^ d[11] ^ d[21] ^ d[31] ^ d[41], Ru = d[2] ^ d[12] ^ d[22] ^ d[32] ^ d[42], eu = d[3] ^ d[13] ^ d[23] ^ d[33] ^ d[43], W = d[4] ^ d[14] ^ d[24] ^ d[34] ^ d[44], $u = d[5] ^ d[15] ^ d[25] ^ d[35] ^ d[45], hu = d[6] ^ d[16] ^ d[26] ^ d[36] ^ d[46], Eu = d[7] ^ d[17] ^ d[27] ^ d[37] ^ d[47], f0 = d[8] ^ d[18] ^ d[28] ^ d[38] ^ d[48], cu = d[9] ^ d[19] ^ d[29] ^ d[39] ^ d[49], $ = f0 ^ (Ru << 1 | eu >>> 31), j = cu ^ (eu << 1 | Ru >>> 31), d[0] ^= $, d[1] ^= j, d[10] ^= $, d[11] ^= j, d[20] ^= $, d[21] ^= j, d[30] ^= $, d[31] ^= j, d[40] ^= $, d[41] ^= j, $ = X ^ (W << 1 | $u >>> 31), j = ru ^ ($u << 1 | W >>> 31), d[2] ^= $, d[3] ^= j, d[12] ^= $, d[13] ^= j, d[22] ^= $, d[23] ^= j, d[32] ^= $, d[33] ^= j, d[42] ^= $, d[43] ^= j, $ = Ru ^ (hu << 1 | Eu >>> 31), j = eu ^ (Eu << 1 | hu >>> 31), d[4] ^= $, d[5] ^= j, d[14] ^= $, d[15] ^= j, d[24] ^= $, d[25] ^= j, d[34] ^= $, d[35] ^= j, d[44] ^= $, d[45] ^= j, $ = W ^ (f0 << 1 | cu >>> 31), j = $u ^ (cu << 1 | f0 >>> 31), d[6] ^= $, d[7] ^= j, d[16] ^= $, d[17] ^= j, d[26] ^= $, d[27] ^= j, d[36] ^= $, d[37] ^= j, d[46] ^= $, d[47] ^= j, $ = hu ^ (X << 1 | ru >>> 31), j = Eu ^ (ru << 1 | X >>> 31), d[8] ^= $, d[9] ^= j, d[18] ^= $, d[19] ^= j, d[28] ^= $, d[29] ^= j, d[38] ^= $, d[39] ^= j, d[48] ^= $, d[49] ^= j, Cu = d[0], e0 = d[1], _u = d[11] << 4 | d[10] >>> 28, Mu = d[10] << 4 | d[11] >>> 28, su = d[20] << 3 | d[21] >>> 29, fu = d[21] << 3 | d[20] >>> 29, h0 = d[31] << 9 | d[30] >>> 23, E0 = d[30] << 9 | d[31] >>> 23, I0 = d[40] << 18 | d[41] >>> 14, xu = d[41] << 18 | d[40] >>> 14, Au = d[2] << 1 | d[3] >>> 31, du = d[3] << 1 | d[2] >>> 31, K = d[13] << 12 | d[12] >>> 20, pu = d[12] << 12 | d[13] >>> 20, U0 = d[22] << 10 | d[23] >>> 22, Iu = d[23] << 10 | d[22] >>> 22, ju = d[33] << 13 | d[32] >>> 19, ou = d[32] << 13 | d[33] >>> 19, c0 = d[42] << 2 | d[43] >>> 30, C0 = d[43] << 2 | d[42] >>> 30, O0 = d[5] << 30 | d[4] >>> 2, Ou = d[4] << 30 | d[5] >>> 2, _0 = d[14] << 6 | d[15] >>> 26, mu = d[15] << 6 | d[14] >>> 26, w = d[25] << 11 | d[24] >>> 21, U = d[24] << 11 | d[25] >>> 21, Su = d[34] << 15 | d[35] >>> 17, T0 = d[35] << 15 | d[34] >>> 17, Fu = d[45] << 29 | d[44] >>> 3, t0 = d[44] << 29 | d[45] >>> 3, tu = d[6] << 28 | d[7] >>> 4, z = d[7] << 28 | d[6] >>> 4, ku = d[17] << 23 | d[16] >>> 9, F0 = d[16] << 23 | d[17] >>> 9, yu = d[26] << 25 | d[27] >>> 7, M0 = d[27] << 25 | d[26] >>> 7, P = d[36] << 21 | d[37] >>> 11, Y = d[37] << 21 | d[36] >>> 11, Uu = d[47] << 24 | d[46] >>> 8, Tu = d[46] << 24 | d[47] >>> 8, bu = d[8] << 27 | d[9] >>> 5, S0 = d[9] << 27 | d[8] >>> 5, Q = d[18] << 20 | d[19] >>> 12, lu = d[19] << 20 | d[18] >>> 12, l0 = d[29] << 7 | d[28] >>> 25, A0 = d[28] << 7 | d[29] >>> 25, gu = d[38] << 8 | d[39] >>> 24, wu = d[39] << 8 | d[38] >>> 24, G = d[48] << 14 | d[49] >>> 18, V = d[49] << 14 | d[48] >>> 18, d[0] = Cu ^ ~K & w, d[1] = e0 ^ ~pu & U, d[10] = tu ^ ~Q & su, d[11] = z ^ ~lu & fu, d[20] = Au ^ ~_0 & yu, d[21] = du ^ ~mu & M0, d[30] = bu ^ ~_u & U0, d[31] = S0 ^ ~Mu & Iu, d[40] = O0 ^ ~ku & l0, d[41] = Ou ^ ~F0 & A0, d[2] = K ^ ~w & P, d[3] = pu ^ ~U & Y, d[12] = Q ^ ~su & ju, d[13] = lu ^ ~fu & ou, d[22] = _0 ^ ~yu & gu, d[23] = mu ^ ~M0 & wu, d[32] = _u ^ ~U0 & Su, d[33] = Mu ^ ~Iu & T0, d[42] = ku ^ ~l0 & h0, d[43] = F0 ^ ~A0 & E0, d[4] = w ^ ~P & G, d[5] = U ^ ~Y & V, d[14] = su ^ ~ju & Fu, d[15] = fu ^ ~ou & t0, d[24] = yu ^ ~gu & I0, d[25] = M0 ^ ~wu & xu, d[34] = U0 ^ ~Su & Uu, d[35] = Iu ^ ~T0 & Tu, d[44] = l0 ^ ~h0 & c0, d[45] = A0 ^ ~E0 & C0, d[6] = P ^ ~G & Cu, d[7] = Y ^ ~V & e0, d[16] = ju ^ ~Fu & tu, d[17] = ou ^ ~t0 & z, d[26] = gu ^ ~I0 & Au, d[27] = wu ^ ~xu & du, d[36] = Su ^ ~Uu & bu, d[37] = T0 ^ ~Tu & S0, d[46] = h0 ^ ~c0 & O0, d[47] = E0 ^ ~C0 & Ou, d[8] = G ^ ~Cu & K, d[9] = V ^ ~e0 & pu, d[18] = Fu ^ ~tu & Q, d[19] = t0 ^ ~z & lu, d[28] = I0 ^ ~Au & _0, d[29] = xu ^ ~du & mu, d[38] = Uu ^ ~bu & _u, d[39] = Tu ^ ~S0 & Mu, d[48] = c0 ^ ~O0 & ku, d[49] = C0 ^ ~Ou & F0, d[0] ^= nu[iu], d[1] ^= nu[iu + 1];
        };
        if (b)
          x.exports = A;
        else
          for (var B = 0; B < C.length; ++B)
            k[C[B]] = A[C[B]];
      })();
    })(E);
    var c = { exports: {} }, p = { exports: {} };
    (function(x, k) {
      (function(g, b) {
        x.exports = b();
      })(D, function() {
        var g = [
          new Uint32Array([2101761, 2100961, 2123873, 2223617, 2098113, 2123393, 2104929, 2223649, 2105761, 2123713, 2123809, 2124257, 2101377, 2101697, 2124865, 2101857]),
          new Uint32Array([2098374, 2098566, 2098758, 2098950, 2099142, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 14680064, 14680064, 14680064, 14680064, 14680064]),
          new Uint32Array([2250401, 2250433, 2250465, 2239073, 2183298, 2250497, 2250529, 2250561, 2241121, 2250561, 2250593, 2239137, 2250625, 2250657, 2250689, 2250721]),
          new Uint32Array([2191233, 6291456, 2191265, 6291456, 2191297, 6291456, 2191329, 6291456, 2191361, 2191393, 6291456, 2191425, 6291456, 2143457, 6291456, 2098305]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0]),
          new Uint32Array([2236225, 2118849, 2236257, 2236289, 2236321, 2236353, 2236385, 2236417, 2236449, 2236481, 2236513, 2232929, 2236545, 2236577, 2236609, 2236641]),
          new Uint32Array([14680064, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2216481, 2216513, 2216545, 2216577, 2216609, 2216641, 2216673, 2216705, 2216737, 2216769, 2216801, 2216833, 2216865, 2216897, 2216929, 2216961]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([2246849, 2246881, 2246913, 2182082, 2246945, 2238689, 2246977, 2247009, 2247041, 2247073, 2238721, 2247105, 2247137, 2182146, 2238753, 2247169]),
          new Uint32Array([2220641, 2115969, 2116065, 2220673, 2220705, 2116161, 2220737, 2116257, 2116353, 2220769, 2116449, 2116545, 2116641, 2116737, 2116833, 2220801]),
          new Uint32Array([2184194, 2184258, 2252993, 2253025, 2241505, 2253057, 2253089, 2253121, 2253153, 2253185, 2253217, 2184322, 2253249, 2184386, 2253281, 0]),
          new Uint32Array([6291456, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2229537, 2229569, 2229601, 2229633, 2229665, 2229697, 2229729, 2229761, 2229793, 2229825, 2229857, 2229889, 2229921, 2229953, 2229985, 2230017]),
          new Uint32Array([2247809, 2247841, 2247841, 2247841, 2182402, 2247873, 2247905, 2247937, 2182466, 2247969, 2248001, 2248033, 2248065, 2248097, 2248129, 2248161]),
          new Uint32Array([0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2218465, 2218497, 2218529, 2218561, 2218593, 2218625, 2119713, 2218657, 2218689, 2218721, 2218753, 2218785, 2218817, 2218849, 2218881, 2218913]),
          new Uint32Array([2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297]),
          new Uint32Array([2148034, 2148098, 2148162, 2148226, 2148290, 2148354, 2148418, 2148482, 2148034, 2148098, 2148162, 2148226, 2148290, 2148354, 2148418, 2148482]),
          new Uint32Array([2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 0, 2098241, 2110209, 2110273, 2107553, 0]),
          new Uint32Array([2230049, 2230081, 2218401, 2230113, 2230145, 2230177, 2230209, 2220097, 2220097, 2230241, 2119713, 2230273, 2230305, 2230337, 2230369, 2230401]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 6291456]),
          new Uint32Array([2228001, 2228033, 2228065, 2228097, 2228129, 2228161, 2228193, 2228225, 2228257, 2228289, 2228321, 2228353, 2228385, 2228417, 2228449, 2228481]),
          new Uint32Array([2141282, 2161474, 2161538, 2161602, 2136098, 2161666, 2161730, 2161794, 2161858, 2161922, 2161986, 2162050, 2140514, 2162114, 2162178, 2136578]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2146242, 6291456, 6291456, 6291456, 0, 0, 0]),
          new Uint32Array([2212993, 6291456, 2213025, 6291456, 2213057, 6291456, 2213089, 6291456, 2213121, 6291456, 2213153, 6291456, 2213185, 6291456, 2213217, 6291456]),
          new Uint32Array([6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 6291456, 6291456]),
          new Uint32Array([2179650, 2179714, 2179778, 2179842, 2179906, 2179970, 2180034, 2180098, 2180162, 2180226, 2180290, 2180354, 2180418, 2180482, 2180546, 2180610]),
          new Uint32Array([2191777, 2191809, 6291456, 2191841, 2191873, 6291456, 2191905, 2191937, 2191969, 6291456, 6291456, 6291456, 2192001, 2192033, 6291456, 2192065]),
          new Uint32Array([2240897, 2240929, 2240961, 2240993, 2241025, 2241057, 2241089, 2241121, 2241153, 2239137, 2241185, 2239169, 2241217, 2241249, 2241281, 2241313]),
          new Uint32Array([2204097, 6291456, 2211841, 6291456, 6291456, 2211873, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2113761, 2102593, 2211905, 2211937]),
          new Uint32Array([2113569, 2194625, 2113761, 2098177, 2194657, 2194689, 2194721, 2115009, 2115201, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2255265, 2255297, 2255329, 2255361, 2255393, 2255425, 2255457, 2186626, 2233505, 2255489, 2255521, 2255553, 2255585, 2255617, 2255649, 2240033]),
          new Uint32Array([23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 0, 2149122, 2149186, 2149250, 0, 6291456, 2149314, 2209889, 2195041, 2149121, 2149249, 2149186, 10531586, 10497922, 0]),
          new Uint32Array([2239169, 2239201, 2239233, 2239265, 2239297, 2239329, 2239361, 2239393, 2239425, 2239457, 2239489, 2239521, 2107169, 2239553, 2239585, 2239617]),
          new Uint32Array([2097729, 2107745, 2107745, 2107745, 2107745, 2133153, 2133153, 2133153, 2133153, 2107809, 2107809, 2162689, 2162689, 2107681, 2107681, 2162977]),
          new Uint32Array([2203393, 2203425, 2203457, 2203489, 2203521, 2203553, 2203585, 2203617, 2203649, 2203681, 2203713, 0, 0, 2203745, 2203777, 2203809]),
          new Uint32Array([2247201, 2247233, 2182210, 2247265, 2247297, 2246145, 2182274, 2247329, 2247361, 2247393, 2247425, 2240481, 2182338, 2214177, 2247457, 2247489]),
          new Uint32Array([2226913, 2226945, 2204321, 2226977, 2227009, 6291456, 2227041, 6291456, 2227073, 6291456, 2227105, 6291456, 2227137, 6291456, 2227169, 6291456]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([14680064, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 0, 0]),
          new Uint32Array([2172290, 2172354, 2172418, 2172482, 2172546, 2172610, 2172674, 2172738, 2172802, 2172866, 2172930, 2172994, 2173058, 2173122, 2173186, 2173250]),
          new Uint32Array([10501859, 10501955, 10502051, 10502147, 10502243, 10502339, 10502435, 10502531, 10502627, 10502723, 10502819, 10502915, 10503011, 10503107, 10503203, 10503299]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 6291456, 0]),
          new Uint32Array([2216993, 2217025, 2217057, 2217089, 2217121, 2217153, 2217185, 2217217, 2217249, 2217281, 2217313, 2217345, 2217377, 2217409, 2217441, 2217473]),
          new Uint32Array([2256385, 2256417, 2256449, 2256481, 2217953, 2187138, 2256513, 2256545, 2256577, 2256609, 2256641, 2187202, 2187266, 2256673, 2256705, 2256737]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2150530]),
          new Uint32Array([2241921, 2254113, 2185346, 2239649, 2185410, 2185474, 2238273, 2254145, 2254177, 2239745, 2254209, 2254241, 2185538, 2185602, 2185602, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2148033, 2148097, 2148161, 2148225, 2148289, 2148353, 2148417, 2148481]),
          new Uint32Array([10569441, 2243905, 0, 10503969, 10583521, 10538049, 10538177, 2243937, 2243969, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 0, 0, 2243777, 2243777, 2243777, 2243777, 2144321, 2144321, 2159841, 2159841, 2159905, 2159905, 2144322, 2243809, 2243809]),
          new Uint32Array([2251521, 2251553, 2251585, 2251617, 2251649, 2251681, 2251713, 2251745, 2231233, 2241377, 2251777, 2251809, 2251841, 2183554, 2251873, 2251905]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2117121, 2117217, 2117313, 2117409, 2117505, 2117601, 2117697, 2117793, 2117889, 2117985, 2118081, 2118177, 2150786, 2150850, 2223169, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2188290, 2258113, 2188354, 2188418, 2188482, 2219681, 2258145, 2219809, 2258177, 2258209, 2258241, 2258273, 2219969, 2188546, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456]),
          new Uint32Array([2107233, 2098241, 2110209, 2110273, 2107553, 0, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177]),
          new Uint32Array([6291456, 6291456, 6291456, 2145922, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 2145986, 6291456, 6291456]),
          new Uint32Array([2195105, 2195265, 2195585, 2195073, 2195745, 2195617, 2195457, 6291456, 2195809, 6291456, 2195841, 6291456, 2195873, 6291456, 2195905, 6291456]),
          new Uint32Array([2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297]),
          new Uint32Array([2171010, 2171074, 2171138, 2171202, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2142051, 2142147, 2142243, 2142339, 2142435, 2142531, 2142627, 2142723, 2142819, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([10510019, 10510115, 10510211, 10510307, 2223073, 2223105, 2215681, 2223137, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2163202, 2163266, 2133218, 2163330, 2160578, 2160642, 2163394, 2163458, 2160770, 2163522, 2160834, 2160898, 2161474, 2161538, 2161666, 2161730]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2211137, 2211169, 2211201, 2211233, 2211265, 2211297, 2211329, 2211361, 2211393, 2211425, 2211457, 2211489, 2211521, 2211553, 2211585, 0]),
          new Uint32Array([2243457, 2243457, 2243489, 2243489, 2243489, 2243489, 2243521, 2243521, 2243521, 2243521, 2243553, 2243553, 2243553, 2243553, 2243585, 2243585]),
          new Uint32Array([2137026, 2097506, 2132547, 2132643, 2132739, 2164610, 2164674, 2164738, 2164802, 2164866, 2164930, 2164994, 2165058, 2165122, 2165186, 2134978]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672]),
          new Uint32Array([2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195521, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245729]),
          new Uint32Array([2154754, 2154818, 2154882, 2154946, 2141986, 2155010, 2155074, 2129154, 2155138, 2129154, 2155202, 2155266, 2155330, 2155394, 2155458, 2155394]),
          new Uint32Array([2158722, 2158786, 0, 2158850, 2158914, 0, 2158978, 2159042, 2159106, 2131778, 2159170, 2159234, 2159298, 2159362, 2159426, 2159490]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2197281, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2181890, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2230433, 2230465, 2230497, 2230529, 2230561, 2230593, 2230625, 2230657, 2230689, 2230721, 2230753, 2230785, 2230817, 2230849, 2230881, 2230913]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([0, 0, 0, 0, 0, 23068672, 23068672, 23068672, 0, 0, 0, 0, 2145538, 2145602, 0, 6291456]),
          new Uint32Array([2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2160066, 2160130, 2160194, 2160002, 2160258, 2160322, 2141378, 2138306, 2160386, 2160450, 2160514, 2132834, 2132930, 2133122, 2133218, 2160578]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 23068672, 23068672, 6291456, 0, 0]),
          new Uint32Array([2210017, 6291456, 6291456, 6291456, 6291456, 2098241, 2098241, 2110209, 2102625, 2113761, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2195489, 2195457, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([2107201, 2107297, 2107329, 2114145, 0, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297]),
          new Uint32Array([2147522, 2147586, 2147650, 2147714, 2147778, 2147842, 2147906, 2147970, 2147522, 2147586, 2147650, 2147714, 2147778, 2147842, 2147906, 2147970]),
          new Uint32Array([6291456, 6291456, 6291456, 2209569, 0, 0, 6291456, 6291456, 2209601, 2209633, 2209665, 2195009, 0, 10497923, 10498019, 10498115]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2238017, 6291456, 2238049, 6291456, 6291456, 2238081, 2238113, 2238145, 2238177, 2238209, 2238241, 2238273, 2238305, 2238337, 2217345, 6291456]),
          new Uint32Array([2122018, 2122114, 2151746, 2151810, 2151874, 2151938, 2152002, 2152066, 2152130, 2121891, 2121987, 2122083, 2152194, 2122179, 2152258, 2122275]),
          new Uint32Array([0, 23068672, 0, 0, 0, 0, 0, 0, 0, 2145282, 2145346, 2145410, 6291456, 0, 2145474, 0]),
          new Uint32Array([2152386, 2123139, 2105412, 2105540, 2097986, 2100261, 2097990, 2100421, 2100323, 2100581, 2100741, 2105668, 2123235, 2123331, 2123427, 2105796]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2225057, 2227393, 2211649, 2227425]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 23068672, 10538946, 10539010, 6291456, 6291456, 2150466]),
          new Uint32Array([6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 0]),
          new Uint32Array([2099910, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2201857, 2201889, 2144161, 2201921, 2201953, 2201985, 2202017, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 2209345, 0, 2209377, 0, 2209409, 0, 2209441]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 10538178, 10538242, 10538306, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2195425, 2195457, 2195489, 2195521, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245729, 2195201, 2195265, 2195297, 2195617]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2192097, 6291456, 2192129, 6291456, 2192161, 6291456, 2192193, 2192225, 6291456, 2192257, 6291456, 6291456, 2192289, 6291456, 2192321, 2192353]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456]),
          new Uint32Array([2249345, 2182786, 2249377, 2249409, 0, 2214913, 2249441, 2249473, 2214977, 2249505, 2249537, 2182850, 2249569, 2182914, 2249601, 2249633]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2144130, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([2199041, 6291456, 2199073, 6291456, 2199105, 6291456, 2199137, 6291456, 2199169, 6291456, 2199201, 6291456, 2199233, 6291456, 2199265, 6291456]),
          new Uint32Array([2186306, 2254945, 2254977, 2255009, 2255041, 2255073, 2255105, 2186370, 2186434, 2186498, 2186562, 2250081, 2255137, 2255169, 2255201, 2255233]),
          new Uint32Array([23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 0, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([2101249, 2100833, 2122561, 2100097, 2122657, 2105089, 2097985, 2100161, 2123233, 2123329, 2100897, 2101601, 2100129, 2101121, 2152801, 2101761]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2136418, 2134018, 2134690, 2138722, 2138338, 2165250, 2165314, 2165378, 2165442, 2134658, 2134562, 2165506, 2134754, 2165570, 2165634, 2165698]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2104130, 2104131, 6291456, 2111906]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 2213633, 6291456, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2232417, 2232449, 2232481, 2232513, 2232545, 2232577, 2232609, 2232641, 2232673, 2232705, 2232737, 2232769, 2230561, 2232801, 2232833, 2232865]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2238689, 2238721, 2238753, 2238785, 2238817, 2238849, 2238881, 2238913, 2238945, 2238977, 2239009, 2239041, 2214977, 2239073, 2239105, 2239137]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2134083, 2134179, 2134275, 2134275, 2134371, 2134371, 2134467, 2134563, 2134563, 2134659, 2134755, 2134755, 2134851, 2134851, 2134947, 2135043]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10501475, 10501571, 10501667, 10501763]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2217953, 2217985, 2218017, 2218049, 2218081, 2218113, 2218145, 2218177, 2218209, 2218241, 2218273, 2218305, 2218337, 2218369, 2218401, 2218433]),
          new Uint32Array([2136001, 2097153, 2136097, 2107681, 2134561, 2132833, 2160705, 2133153, 2162689, 2134945, 2161217, 2135713, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 10503971, 10504034, 10504067, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2121795, 2126786, 2126882, 2108514, 2127074, 2130818, 2130914, 2131010, 2131106, 2131202, 2131298, 2110722, 2110626, 2150594, 2150658, 2150722]),
          new Uint32Array([2234529, 2242049, 2239937, 2242081, 2242113, 2242145, 2242177, 2242209, 2240097, 2242241, 2238401, 2242273, 2240129, 2232801, 2242305, 2240161]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 0, 0, 6291456, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0]),
          new Uint32Array([2245089, 2220161, 2244289, 2244321, 2243905, 2245121, 2223809, 2101409, 2106209, 2245153, 2101633, 2122593, 2245185, 2105441, 2101953, 2100513]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 2102530, 2102882, 2103010, 2103138, 2103266, 2103394, 2103522]),
          new Uint32Array([2233409, 2218465, 2233441, 2233473, 2233505, 2233537, 2233569, 2233601, 2233633, 2233665, 2233697, 2233729, 2233761, 2233793, 2233825, 2233857]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456]),
          new Uint32Array([2107329, 2190625, 2110049, 2191553, 2203969, 2204001, 2114337, 2110177, 2110145, 2204033, 2192001, 2102593, 2204065, 2195105, 2195137, 2195169]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([2198401, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 2198433, 6291456, 2198465, 6291456, 2198497, 6291456]),
          new Uint32Array([2194145, 6291456, 2194177, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2194209, 2194241, 6291456, 2194273, 2194305, 6291456]),
          new Uint32Array([2235745, 2235777, 2235809, 2235841, 2220065, 2235873, 2235905, 2235937, 2235969, 2236001, 2236033, 2236065, 2236097, 2236129, 2236161, 2236193]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 2144194, 2144258, 2144322, 2144386, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195265, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245697]),
          new Uint32Array([10491716, 10491844, 10491972, 10492100, 10492228, 10492356, 10492484, 10492612, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2225953, 6291456, 2225985, 6291456, 2226017, 6291456, 2226049, 6291456, 2226081, 6291456, 2226113, 6291456, 2226145, 6291456, 2226177, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 0, 0, 6291456, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2227457, 6291456, 6291456, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2198785, 6291456, 2198817, 6291456, 2198849, 6291456, 2198881, 6291456, 2198913, 6291456, 2198945, 6291456, 2198977, 6291456, 2199009, 6291456]),
          new Uint32Array([2243105, 2243105, 2243137, 2243137, 2243137, 2243137, 2243169, 2243169, 2243169, 2243169, 2243201, 2243201, 2243201, 2243201, 2243233, 2243233]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 6291456, 23068672]),
          new Uint32Array([2190977, 6291456, 2191009, 6291456, 2191041, 6291456, 2191073, 6291456, 2191105, 6291456, 2191137, 6291456, 2191169, 6291456, 2191201, 6291456]),
          new Uint32Array([2207073, 6291456, 2207105, 6291456, 2207137, 6291456, 6291456, 6291456, 6291456, 6291456, 2146946, 2206305, 6291456, 6291456, 2143106, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 0, 0, 0, 0, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([2149185, 2245697, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393]),
          new Uint32Array([2195489, 2195265, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245697, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 2146050, 6291456, 6291456, 6291456, 6291456, 2146114, 6291456, 6291456, 6291456, 6291456, 2146178, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2102340, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 10485857]),
          new Uint32Array([2118369, 2213761, 2213793, 2213825, 2213857, 2213889, 2118465, 2213921, 2213953, 2213985, 2214017, 2119041, 2214049, 2214081, 2214113, 2214145]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([2115009, 2110337, 2115201, 2115297, 2245633, 2245665, 0, 0, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0]),
          new Uint32Array([2102561, 2102625, 0, 0, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 10598561, 2209985, 10504033, 10491329, 10491425, 2114145]),
          new Uint32Array([2195937, 6291456, 2195969, 6291456, 2196001, 6291456, 2196033, 6291456, 2196065, 6291456, 2196097, 6291456, 2196129, 6291456, 2196161, 6291456]),
          new Uint32Array([2243841, 2243841, 2243873, 2243873, 2159969, 2159969, 2159969, 2159969, 2097217, 2097217, 2159554, 2159554, 2159618, 2159618, 2159682, 2159682]),
          new Uint32Array([2254273, 2185666, 2254305, 2254337, 2254369, 2185730, 2254401, 2254433, 2254465, 2254497, 2254529, 2185794, 2254561, 2254593, 2254625, 2254657]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 2213697]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 10503969, 10583521, 10633217, 10504033, 10633249, 10538177]),
          new Uint32Array([2118369, 2118465, 2118561, 2118657, 2118753, 2118849, 2118945, 2119041, 2119137, 2119233, 2119329, 2119425, 2119521, 2119617, 2119713, 2119809]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2220193, 6291456, 2119233, 2220225, 2220257, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 0, 0, 0, 0, 0, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 0, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2097281, 2107649, 2097729, 2107809, 0, 2097601, 2162977, 2107745, 2135137, 2097505, 2107617, 2097185, 2097697, 2137633, 2097633, 2097441]),
          new Uint32Array([0, 23068672, 23068672, 18923522, 23068672, 18923586, 18923650, 18885955, 18923714, 18886051, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2232897, 2232929, 2232961, 2232993, 2233025, 2233057, 2233089, 2233121, 2233153, 2233185, 2233217, 2233249, 2233281, 2233313, 2233345, 2233377]),
          new Uint32Array([2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 14680064, 14680064, 14680064, 14680064, 14680064]),
          new Uint32Array([2226337, 6291456, 2226369, 6291456, 2226401, 6291456, 2226433, 6291456, 6291456, 6291456, 6291456, 2226465, 6291456, 2204225, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0]),
          new Uint32Array([2242305, 2242337, 2218177, 2187330, 2256769, 2256801, 2256833, 2256865, 2187394, 2187458, 2256897, 2256929, 2256961, 2187522, 2256993, 2242369]),
          new Uint32Array([2110371, 2110467, 2102468, 2110563, 2110659, 2110755, 2110851, 2110947, 2111043, 2111139, 2111235, 2111331, 2111427, 2111523, 2111619, 2102466]),
          new Uint32Array([2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2149762, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2192897, 6291456, 2192929, 6291456, 2192961, 6291456, 2192993, 6291456, 2193025, 6291456, 2193057, 6291456, 2193089, 6291456, 2193121, 6291456]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2207681, 6291456, 2207713, 6291456, 2207745, 6291456, 2207777, 6291456, 2207809, 6291456, 2207841, 6291456, 2207873, 6291456, 2207905, 6291456]),
          new Uint32Array([2161794, 2162050, 2140514, 2162114, 2162178, 2097666, 2097186, 2097474, 2163586, 2134306, 2163650, 2163714, 2138018, 2163778, 2162306, 2162370]),
          new Uint32Array([2237153, 2237185, 2237217, 2237249, 2237281, 2237313, 2237345, 2217121, 2237377, 2237409, 2237441, 2237473, 2237505, 2237537, 2237569, 2237601]),
          new Uint32Array([2249665, 2249697, 2249729, 2249761, 2249793, 2249825, 2249857, 2249889, 2249921, 2182978, 2249953, 2249985, 2250017, 2250049, 2231201, 2183042]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 2148546, 2148610, 2148674, 0, 6291456, 2148738, 2209473, 2209505, 2148545, 2148673, 2148610, 10497634, 2144097, 10497634]),
          new Uint32Array([2208193, 6291456, 2208225, 6291456, 2208257, 6291456, 2208289, 6291456, 2208321, 6291456, 2208353, 6291456, 2208385, 6291456, 2208417, 6291456]),
          new Uint32Array([2155522, 2155586, 0, 2155650, 2155714, 2155778, 2107460, 0, 2155842, 2155906, 2155970, 2127170, 2156034, 2156098, 2128130, 2156162]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([0, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([2103809, 2103937, 2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 2102561, 2102465, 2098337, 2103169]),
          new Uint32Array([23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2102625, 2102626, 2102627, 2150146, 2102593, 2102594, 2102595, 2102596, 2150210, 2110337, 2111714, 2111715, 2107297, 2107233, 2098241, 2107329]),
          new Uint32Array([2241825, 2185026, 2185090, 2185154, 2185218, 2253921, 2253953, 2253953, 2241857, 2242689, 2253985, 2254017, 2254049, 2185282, 2254081, 2231777]),
          new Uint32Array([0, 0, 0, 0, 10531586, 10497251, 2148673, 2143329, 2194977, 2148993, 2195009, 0, 2195041, 0, 2195073, 2149249]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2196929, 2196993, 2197313, 2197409, 2197441, 2197441, 2197697, 2197921, 2202369, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2183746, 2252321, 2252353, 2252385, 2252417, 2233409, 2252449, 2183810, 2183874, 2183938, 2252481, 2184002, 2252513, 2252545, 2252577, 2252609]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456]),
          new Uint32Array([2102625, 2102625, 2107297, 2107297, 6291456, 2114145, 2149954, 6291456, 6291456, 2114337, 2114433, 2098177, 2098177, 2098177, 6291456, 6291456]),
          new Uint32Array([2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177]),
          new Uint32Array([2164098, 2132834, 2132930, 2133122, 2133218, 2164162, 2160770, 2133922, 2132866, 2132962, 2107746, 2133474, 2133154, 2133890, 2133794, 2139266]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 0]),
          new Uint32Array([2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593]),
          new Uint32Array([2196353, 2196385, 2196417, 2196449, 2196481, 2196513, 2196545, 2196577, 2196609, 2196641, 2196673, 2196705, 2196737, 2196769, 2196801, 2196833]),
          new Uint32Array([2160642, 2160706, 2160770, 2160834, 2160898, 2133922, 2132866, 2132962, 2107746, 2133474, 2160962, 2133154, 2133890, 2133794, 2139266, 2134082]),
          new Uint32Array([2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 10598561, 2209985, 10504033, 10491329, 10491425, 0]),
          new Uint32Array([0, 0, 0, 0, 0, 2227361, 6291456, 6291456, 2190177, 2190753, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 4292673, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2195777]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([10598465, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([2204545, 2192065, 2204577, 2204609, 2192257, 2204641, 2194401, 2192385, 2204673, 2192417, 2194433, 2115297, 2204705, 2204737, 2192513, 2195265]),
          new Uint32Array([2244801, 2166241, 2166241, 2166305, 2166305, 2244833, 2244833, 2166369, 2166369, 2159553, 2159553, 2159553, 2159553, 2097281, 2097281, 2107649]),
          new Uint32Array([0, 0, 0, 0, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2227489, 2227521, 2227553, 2227585, 2227617, 2227649, 2227681, 2227713, 2227745, 2227777, 2227809, 2227841, 2227873, 2227905, 2227937, 2227969]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 23068672, 0, 0, 0, 0, 23068672]),
          new Uint32Array([2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195521, 2195521, 2195553, 2195585, 2195617]),
          new Uint32Array([2220641, 2115969, 2116065, 2220673, 2220705, 2116161, 2220737, 2116257, 2116353, 2220769, 2116449, 2116545, 2116641, 2116737, 2116833, 0]),
          new Uint32Array([2214177, 2214209, 2214241, 2214273, 2214305, 2214337, 2214369, 2119233, 2214401, 2214433, 2214465, 2214497, 2214529, 2214561, 2214593, 2119809]),
          new Uint32Array([2238113, 2241633, 2241665, 2241697, 2241729, 2241761, 2238145, 2241793, 2241825, 2241857, 2241889, 2241921, 2241953, 2239809, 2241985, 2242017]),
          new Uint32Array([2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 0, 2107233, 2098241]),
          new Uint32Array([2162370, 2162434, 2137442, 2162498, 2162562, 2139042, 2133666, 2160930, 2137026, 2162626, 2139810, 2162690, 2162754, 2162818, 10520579, 10520675]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2147009, 2147073, 2147137, 2147201, 2147265, 2147329, 2147393, 2147457]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 2144450, 2144514, 2144578, 2144642, 2144706, 2144770, 2144834, 2144898]),
          new Uint32Array([23068672, 23068672, 0, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 16777216, 16777216, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 2102338, 2102339, 6291456, 2109698, 2109699, 6291456, 6291456, 6291456, 6291456, 10538050, 6291456, 10538114, 6291456]),
          new Uint32Array([6291456, 2192673, 6291456, 2192705, 6291456, 2192737, 6291456, 2192769, 6291456, 2192801, 6291456, 2192833, 6291456, 6291456, 2192865, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2195585, 2195617, 2195649, 2195681, 2149185, 2245697, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 18924098, 23068672, 23068672, 23068672, 0, 6291456, 6291456]),
          new Uint32Array([2210113, 2210145, 2210177, 2210209, 2210241, 2210273, 2210305, 2210337, 2210369, 2210401, 2210433, 2210465, 2210497, 2210529, 2210561, 2210593]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 23068672]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 2202081, 0, 0, 0, 0, 0, 2202113, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2165762, 2164610, 2164674, 2164738, 2164802, 2164866, 2164930, 2164994, 2165058, 2165122, 2165186, 2134978, 2136418, 2134018, 2134690, 2138722]),
          new Uint32Array([2208449, 6291456, 2208481, 6291456, 2208513, 6291456, 2208545, 6291456, 2208577, 6291456, 2208609, 6291456, 2208641, 6291456, 2208673, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2174338, 2174402, 2174466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2218305, 2142561, 2246529, 2246561, 2246593, 2246625, 2120097, 2119329, 2246657, 2246689, 2246721, 2246753, 0, 0, 0, 0]),
          new Uint32Array([2200289, 6291456, 2200321, 6291456, 2200353, 6291456, 2200385, 6291456, 2200417, 6291456, 2200449, 6291456, 2200481, 6291456, 2200513, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 2143426, 2143426, 2143426, 2143490, 2143490, 2143490, 2143554, 2143554, 2143554, 2192609, 6291456, 2192641]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([10633377, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 2213729, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2208897, 2208929, 2208961, 2208993, 2209025, 2209057, 2209089, 2209121]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 0, 0, 0, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 23068672, 6291456]),
          new Uint32Array([2200033, 6291456, 2200065, 6291456, 2200097, 6291456, 2200129, 6291456, 2200161, 6291456, 2200193, 6291456, 2200225, 6291456, 2200257, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2219457, 2219489, 2219521, 2219553, 2219585, 2219617, 2219649, 2219681, 2219713, 2219745, 2219777, 2219809, 2219841, 2219873, 2219905, 2219937]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2097185, 2097697, 2097697, 2097697, 2097697, 2137633, 2137633, 2137633, 2137633, 2097377, 2097377, 2097377, 2097377, 2097601, 2097601, 2097217]),
          new Uint32Array([2246209, 2246241, 2216577, 2246273, 2246305, 2246337, 2246369, 2246401, 2246433, 2118369, 2118561, 2246465, 2223457, 2222849, 2223489, 2246497]),
          new Uint32Array([2097217, 2097505, 2097505, 2097505, 2097505, 2166210, 2166210, 2166274, 2166274, 2166338, 2166338, 2097858, 2097858, 0, 0, 2097152]),
          new Uint32Array([23068672, 6291456, 23068672, 23068672, 23068672, 6291456, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 0]),
          new Uint32Array([2229025, 2229057, 2229089, 2229121, 2229153, 2229185, 2229217, 2229249, 2229281, 2229313, 2229345, 2229377, 2229409, 2229441, 2229473, 2229505]),
          new Uint32Array([2100901, 2105924, 2123523, 2101123, 2123619, 2152450, 2152514, 2100674, 2152578, 2123715, 2123811, 2101061, 2123907, 2106052, 2101221, 2124003]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2098241, 2110209, 2191713, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 6291456, 2110049, 2193921, 2114337, 2098177]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2166402, 2166466, 2166530, 2166594, 2166658, 2166722, 2166786, 2166850, 2166914, 2166978, 2167042, 2167106, 2167170, 2167234, 2167298, 2167362]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([2230945, 2230977, 2231009, 2231041, 2231073, 2231105, 2231137, 2231169, 2231201, 2231233, 2231265, 2231297, 2231329, 2231361, 2231393, 2231425]),
          new Uint32Array([2189569, 6291456, 2189601, 6291456, 2189633, 6291456, 2189665, 6291456, 2189697, 6291456, 2189729, 6291456, 2189761, 6291456, 2189793, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 23068672, 23068672, 6291456]),
          new Uint32Array([2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([2098209, 2110209, 2110049, 2110337, 2191745, 2113569, 2107201, 2107297, 2107329, 2114145, 2114337, 2098305, 2110177, 0, 0, 0]),
          new Uint32Array([2202401, 2202433, 2202465, 2202497, 2202529, 2202561, 2202593, 2202625, 2202657, 2202689, 2202721, 2202753, 2202145, 2202785, 2202817, 2202849]),
          new Uint32Array([2110209, 2110273, 0, 2107329, 2110049, 2157761, 2157953, 2158017, 2158081, 2102625, 6291456, 2110275, 2195457, 2195137, 2195137, 2195457]),
          new Uint32Array([2205793, 6291456, 2205825, 6291456, 2205857, 6291456, 2205889, 6291456, 2205921, 6291456, 2205953, 6291456, 2205985, 6291456, 2206017, 6291456]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 18874368, 18874368, 18874368, 0, 0]),
          new Uint32Array([2167426, 2167490, 2167554, 2167618, 2167682, 2167746, 2167810, 2167874, 2167938, 2168002, 2168066, 2168130, 2168194, 2168258, 2168322, 2168386]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2136001, 2097153, 2136097, 0, 2134561, 2132833, 2160705, 2133153, 0, 2134945, 0, 2135713, 0, 0, 0, 0]),
          new Uint32Array([0, 2199297, 6291456, 2199329, 6291456, 2199361, 6291456, 2199393, 6291456, 2199425, 6291456, 2199457, 6291456, 2199489, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2128035, 2127394, 2128131, 2128227, 2128323, 2127490, 2128419, 2107331, 2107332, 2127202, 2128515, 2128611, 2128707, 2098179, 2098181, 2098182]),
          new Uint32Array([23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 23068672, 6291456, 2145730, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0]),
          new Uint32Array([10498403, 10498499, 2107233, 2149826, 6291456, 10498595, 10498691, 2191777, 6291456, 2149890, 2107553, 2113569, 2113569, 2113569, 2113569, 2190177]),
          new Uint32Array([2222337, 2222369, 2222401, 2222433, 2222465, 2222497, 2222529, 2222561, 2222593, 2222625, 2222657, 2222689, 2222721, 2222753, 2222785, 0]),
          new Uint32Array([2242977, 2242977, 2243009, 2243009, 2243009, 2243009, 2243041, 2243041, 2243041, 2243041, 2243073, 2243073, 2243073, 2243073, 2243105, 2243105]),
          new Uint32Array([6291456, 6291456, 2098337, 2103169, 10531586, 2153665, 6291456, 6291456, 10531650, 2102465, 2110049, 6291456, 2108355, 2108451, 2108547, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0]),
          new Uint32Array([2215617, 2215649, 2215681, 2215713, 2215745, 2215777, 2215809, 2119905, 2215841, 2119329, 2119617, 2215873, 2215905, 2215937, 2215969, 2216001]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 23068672, 6291456]),
          new Uint32Array([2223393, 2121537, 2223425, 2153505, 2222817, 2222849, 2222881, 2223457, 2223489, 2223521, 2223553, 2120961, 2121057, 2121153, 2121249, 2121345]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 10538049, 10633505, 10633089, 10633313, 10633345, 10633121, 10633537, 10491329, 10491425, 10633153, 10598561, 10569441, 2244577, 2220161, 10498433]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2195649, 2195681, 2149185, 2245729, 2195201, 2195265, 2195297, 2195617, 2195489, 2195457, 2195873, 2195873, 0, 0, 2102561, 2102465]),
          new Uint32Array([2212737, 6291456, 2212769, 6291456, 2212801, 6291456, 2212833, 6291456, 2212865, 6291456, 2212897, 6291456, 2212929, 6291456, 2212961, 6291456]),
          new Uint32Array([0, 6291456, 6291456, 0, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2223585, 2150914, 2150978, 2151042, 2151106, 2151170, 2108418, 2151234, 2150690, 2151298, 2151362, 2151426, 2151490, 2151554, 2151618, 2151682]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0]),
          new Uint32Array([2237633, 2237665, 2237697, 2237729, 2237761, 2237793, 2237825, 2237857, 2217921, 2237889, 2218017, 2237921, 2237953, 2237985, 6291456, 6291456]),
          new Uint32Array([2115201, 0, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145]),
          new Uint32Array([2221825, 2221857, 2221889, 2221921, 2221953, 2221985, 2222017, 2222049, 2222081, 2222113, 2222145, 2222177, 2222209, 2222241, 2222273, 2222305]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456]),
          new Uint32Array([0, 2107649, 2097729, 0, 2097377, 0, 0, 2107745, 0, 2097505, 2107617, 2097185, 2097697, 2137633, 2097633, 2097441]),
          new Uint32Array([10554498, 2165954, 10520578, 6291456, 10520674, 0, 10520770, 2132546, 10520866, 2132642, 10520962, 2132738, 10521058, 2166018, 10554690, 2166146]),
          new Uint32Array([2129506, 2129602, 2129698, 2129794, 2129890, 2129986, 2130082, 2130178, 2130274, 2129379, 2129475, 2129571, 2129667, 2129763, 2129859, 2129955]),
          new Uint32Array([10503011, 10503107, 10503203, 10503299, 10503395, 10503491, 10503587, 10503683, 10503779, 10503875, 2141859, 2107233, 2098177, 2155778, 2181442, 6291456]),
          new Uint32Array([2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195265, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681]),
          new Uint32Array([2221345, 2221377, 2221409, 2221441, 0, 2221473, 2221505, 2221537, 2221569, 2221601, 2221633, 2221665, 2221697, 2221729, 2221761, 2221793]),
          new Uint32Array([10485857, 6291456, 2220161, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2217505, 2217537, 2217569, 2121633, 2121729, 2217601, 2217633, 2217665, 2217697, 2217729, 2217761, 2217793, 2217825, 2217857, 2217889, 2217921]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 10532290, 10532354, 10532418, 10532482, 10532546, 10532610, 6291456, 6291456]),
          new Uint32Array([6291456, 2148673, 6291456, 2194977, 6291456, 2148993, 6291456, 2195009, 6291456, 2195041, 6291456, 2195073, 6291456, 2149249, 0, 0]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([14680064, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 14680064, 14680064]),
          new Uint32Array([2177602, 2177666, 2177730, 2177794, 2177858, 2177922, 2177986, 2178050, 2178114, 2178178, 2178242, 2178306, 2178370, 2178434, 2178498, 2178562]),
          new Uint32Array([2233889, 2214753, 2233921, 2233953, 2233985, 2234017, 2234049, 2234081, 2234113, 2234145, 2214241, 2234177, 2234209, 2234241, 2234273, 2234305]),
          new Uint32Array([2187586, 2187650, 2257025, 2257057, 2257089, 2187714, 2257121, 2257153, 2257185, 2257217, 2257249, 2257281, 2257313, 2187778, 2257345, 2257377]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 0]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2132835, 2132931, 2132931, 2133027, 2133123, 2133219, 2133315, 2133411, 2133507, 2133507, 2133603, 2133699, 2133795, 2133891, 2133987, 2134083]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672]),
          new Uint32Array([0, 10569410, 10569474, 10569538, 10569602, 10569666, 10569730, 10569794, 10569858, 10569922, 10569986, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 2224993, 6291456, 2225025, 6291456, 2225057, 6291456, 2225089, 6291456, 2225121, 6291456, 2225153, 6291456, 2225185, 6291456]),
          new Uint32Array([2215297, 2183106, 2183106, 2250081, 2250113, 2250113, 2250145, 2183170, 2183234, 2250177, 2250209, 2250241, 2250273, 2250305, 2250337, 2250369]),
          new Uint32Array([6291456, 2143618, 2143618, 2143618, 2193153, 6291456, 2193185, 2193217, 2193249, 6291456, 2193281, 6291456, 2193313, 6291456, 2193345, 6291456]),
          new Uint32Array([2201441, 2201473, 2201505, 2201537, 2157185, 2201569, 2157217, 2201601, 2201633, 2201665, 2201697, 2201729, 2201761, 2201793, 2157377, 2201825]),
          new Uint32Array([0, 0, 2137347, 2137443, 2137539, 2137635, 2137731, 2137827, 2137827, 2137923, 2138019, 2138115, 2138211, 2138211, 2138307, 2138403]),
          new Uint32Array([2195201, 2195265, 2195297, 2195617, 2195489, 2195457, 2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297]),
          new Uint32Array([23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2190081, 6291456, 2190113, 6291456, 2190145, 6291456, 2190177, 6291456, 2190209, 6291456, 2190241, 6291456, 2190273, 6291456, 2190305, 6291456]),
          new Uint32Array([0, 0, 0, 2157186, 2157250, 2157314, 2157378, 2157442, 0, 0, 0, 0, 0, 2157506, 23068672, 2157570]),
          new Uint32Array([10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 10485857, 2097152, 4194304, 4194304, 0, 0]),
          new Uint32Array([0, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2104516, 2104644, 2104772, 2122371, 2104900, 2122467, 2122563, 2100101, 2105028, 2122659, 2122755, 2122851, 2105156, 2105284, 2122947, 2123043]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2210049, 2210081, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2242849, 2242849, 2242881, 2242881, 2242881, 2242881, 2242913, 2242913, 2242913, 2242913, 2242945, 2242945, 2242945, 2242945, 2242977, 2242977]),
          new Uint32Array([6291456, 0, 6291456, 2145154, 0, 6291456, 2145218, 0, 6291456, 6291456, 0, 0, 23068672, 0, 23068672, 23068672]),
          new Uint32Array([2188609, 2188641, 2188673, 2188705, 2188737, 2188769, 2188801, 2188833, 2188865, 2188897, 2188929, 2188961, 2188993, 2189025, 2189057, 2189089]),
          new Uint32Array([2241633, 2253665, 2253697, 2253729, 2253761, 2184642, 2253793, 2184706, 2232961, 2184770, 2253825, 2184834, 2184898, 2184962, 2253857, 2253889]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([2241345, 2238049, 2231233, 2241377, 2241409, 2215937, 2233409, 2236033, 2241441, 2241473, 2239393, 2241505, 2239425, 2241537, 2241569, 2241601]),
          new Uint32Array([2197377, 2197409, 2197441, 2197473, 2197505, 2197537, 2197569, 2197601, 2197633, 2197665, 2197697, 2197729, 2197761, 2197793, 2197825, 2197857]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([2175554, 2175618, 2175682, 2175746, 2175810, 2175874, 2175938, 2176002, 2176066, 2176130, 2176194, 2176258, 2176322, 2176386, 2176450, 2176514]),
          new Uint32Array([2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681]),
          new Uint32Array([2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2102561, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([10537410, 10497539, 2148866, 2148930, 2148994, 0, 6291456, 2149058, 2209537, 2194977, 2148865, 2148993, 2148930, 10497635, 10497731, 10497827]),
          new Uint32Array([2162977, 2097633, 2097633, 2097633, 2097633, 2134561, 2134561, 2134561, 2134561, 2097153, 2097153, 2097153, 2097153, 2134945, 2134945, 2134945]),
          new Uint32Array([0, 2244001, 2244033, 10632673, 10632673, 10491329, 10491425, 10632705, 10632737, 2141857, 2141921, 2244161, 2244193, 2244225, 2244257, 2210049]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2102017, 2100385, 2098049, 2223681, 2125345, 2125537, 2223713, 2100353, 2102049, 2098145, 2102177, 2098017, 2100481, 2100705, 2150369, 2150433]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0]),
          new Uint32Array([2162818, 2163842, 2163906, 2137026, 2138082, 2162626, 2139810, 2160066, 2160130, 2163970, 2160194, 2164034, 2160322, 2141378, 2138306, 2160386]),
          new Uint32Array([2124771, 2124867, 2124963, 2106436, 2125059, 2125155, 2125251, 2101861, 2106564, 2102018, 2102021, 2106690, 2106692, 2098052, 2125347, 2125443]),
          new Uint32Array([2212225, 6291456, 2212257, 6291456, 2212289, 6291456, 2212321, 6291456, 2212353, 6291456, 2212385, 6291456, 2212417, 6291456, 2212449, 6291456]),
          new Uint32Array([2164034, 2160386, 2164098, 2133218, 2164162, 2160770, 2164418, 2134082, 2164482, 2134754, 2164546, 2162050, 2140514, 2097666, 2138018, 2164290]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2150274, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 23068672, 23068672, 6291456, 23068672, 23068672, 6291456, 23068672, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2223841, 6291456, 2223873, 6291456, 2223905, 6291456, 2223937, 6291456, 2223969, 6291456, 2202369, 6291456, 2224001, 6291456, 2224033, 6291456]),
          new Uint32Array([10506947, 10507043, 10507139, 10507235, 10507331, 10507427, 10507523, 10507619, 10507715, 10507811, 10507907, 10508003, 10508099, 10508195, 10508291, 10508387]),
          new Uint32Array([6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2147010, 2147074, 2147138, 2147202, 2147266, 2147330, 2147394, 2147458, 2147010, 2147074, 2147138, 2147202, 2147266, 2147330, 2147394, 2147458]),
          new Uint32Array([2204769, 6291456, 2204801, 6291456, 2204833, 6291456, 2204865, 6291456, 2204897, 6291456, 2204929, 6291456, 2204961, 6291456, 2204993, 6291456]),
          new Uint32Array([2136291, 2136387, 2136483, 2136579, 2136579, 2136675, 2136675, 2136771, 2136771, 2136867, 2107715, 2136963, 2137059, 2137155, 2133443, 2137251]),
          new Uint32Array([2200801, 6291456, 2200833, 6291456, 2200865, 6291456, 2200897, 6291456, 2200929, 6291456, 2200961, 6291456, 2200993, 6291456, 2201025, 6291456]),
          new Uint32Array([23068672, 18885986, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672]),
          new Uint32Array([2127202, 2153602, 2153666, 2129250, 2153730, 2153794, 2153858, 2153922, 2107235, 2107204, 2153986, 2154050, 2154114, 2154178, 2154242, 2107522]),
          new Uint32Array([2254689, 2254721, 2185858, 2185922, 2254753, 2185986, 2254785, 2186050, 2254817, 2254849, 2239937, 2186114, 2186178, 2254881, 2186242, 2254913]),
          new Uint32Array([2243745, 2243745, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 0]),
          new Uint32Array([2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195265, 2195521, 2195553]),
          new Uint32Array([0, 2107649, 2097729, 2107809, 0, 2097601, 2162977, 2107745, 2135137, 2097505, 0, 2097185, 2097697, 2137633, 2097633, 2097441]),
          new Uint32Array([6291456, 0, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 0, 0, 0, 0, 0, 0, 23068672, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2141667, 2141763, 2097284, 2107588, 2107716, 2107844, 2107972, 2097444, 2097604, 2097155, 10485778, 10486344, 2108100, 6291456, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 23068672, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([2098081, 2101249, 2100833, 2122561, 2100097, 2122657, 2105089, 2097985, 2100161, 2123233, 2123329, 2100897, 2101601, 2100129, 2101121, 2152801]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456]),
          new Uint32Array([2107298, 2156226, 2128803, 2156290, 2153858, 2128899, 2128995, 2156354, 0, 2129091, 2156418, 2156482, 2156546, 2156610, 2129187, 2129283]),
          new Uint32Array([6291456, 2192385, 2192417, 2192449, 6291456, 2192481, 6291456, 2192513, 2192545, 6291456, 6291456, 6291456, 2192577, 6291456, 6291456, 6291456]),
          new Uint32Array([2195585, 2195617, 2195649, 2195681, 2149185, 2245729, 2195201, 2195265, 2195297, 2195617, 2195489, 2195457, 2148609, 2195105, 2195137, 2195169]),
          new Uint32Array([2248193, 2248225, 2248257, 2248289, 2248321, 2248353, 2248353, 2240737, 2248385, 2248417, 2248449, 2248481, 2238913, 2248513, 2248545, 2248577]),
          new Uint32Array([23068672, 6291456, 23068672, 23068672, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2180674, 2180738, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2107329, 2114145, 2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993]),
          new Uint32Array([0, 0, 0, 0, 0, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 6291456, 0]),
          new Uint32Array([2141187, 2141283, 2141379, 2140899, 2135427, 2134467, 2141475, 2141571, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2235265, 2235297, 2235329, 2235361, 2235393, 2235425, 2235457, 2235489, 2235521, 2235553, 2235585, 2235617, 2235649, 2235681, 2235713, 2230561]),
          new Uint32Array([0, 0, 23068672, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2108228, 2098372]),
          new Uint32Array([10504163, 10504259, 10504355, 10504451, 10504547, 10504643, 10504739, 10504835, 10504931, 10505027, 10505123, 10505219, 10505315, 10505411, 10505507, 10505603]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2099332, 2099524, 2099334, 2099526, 2099718]),
          new Uint32Array([10505699, 10505795, 10505891, 10505987, 10506083, 10506179, 10506275, 10506371, 10506467, 10506563, 10506659, 10506755, 10506851, 10492868, 10492996, 0]),
          new Uint32Array([2231457, 2231489, 2231521, 2231553, 2217377, 2231585, 2231617, 2231649, 2231681, 2231713, 2231745, 2231777, 2231809, 2231841, 2231873, 2231905]),
          new Uint32Array([0, 0, 0, 0, 0, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([2243233, 2243233, 2243265, 2243265, 2243297, 2243297, 2243329, 2243329, 2243361, 2243361, 2243393, 2243393, 2243425, 2243425, 2243457, 2243457]),
          new Uint32Array([2195297, 2195489, 2195521, 6291456, 2195265, 2195201, 6291456, 2196193, 6291456, 2195521, 2196225, 6291456, 6291456, 2196257, 2196289, 2196321]),
          new Uint32Array([2216033, 2216065, 2216097, 2216129, 2119521, 2119425, 2216161, 2216193, 2216225, 2216257, 2216289, 2216321, 2216353, 2216385, 2216417, 2216449]),
          new Uint32Array([2247521, 2247553, 2246689, 2247585, 2247617, 2240641, 2238785, 2238817, 2240673, 2247649, 2247681, 2232993, 2247713, 2238849, 2247745, 2247777]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 23068672, 23068672, 0, 0, 23068672, 23068672, 23068672, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([0, 0, 2097729, 0, 0, 0, 0, 2107745, 0, 2097505, 0, 2097185, 0, 2137633, 2097633, 2097441]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 2208705, 2208737, 2208769, 2208801, 2208833, 2208865, 0, 0]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 2111811, 6291456, 6291456, 0, 0, 0, 0]),
          new Uint32Array([2191873, 2107297, 2098305, 2110337, 2194753, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2219969, 2220001, 2220033, 2220065, 2220097, 2220129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2239169, 2230337, 2153377, 2250753, 2250785, 2250817, 2250849, 2250881, 2183362, 2250913, 2250945, 2250977, 2251009, 2251041, 2183426, 2251073]),
          new Uint32Array([2148609, 2195105, 2195137, 2195169, 2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425, 2195457]),
          new Uint32Array([2193889, 6291456, 2193921, 6291456, 2193953, 6291456, 2193985, 6291456, 2194017, 6291456, 2194049, 6291456, 2194081, 6291456, 2194113, 6291456]),
          new Uint32Array([2182594, 2182658, 2249025, 2249057, 2249089, 2249121, 2249153, 2249185, 0, 2249217, 2249249, 2249249, 2182722, 2249281, 2249313, 2232865]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2098209, 2188801, 2112993, 6291456]),
          new Uint32Array([2140035, 2140131, 2140227, 2140323, 2136099, 2136291, 2140419, 2140515, 2140611, 2140707, 2140803, 2140899, 2140803, 2140611, 2140995, 2141091]),
          new Uint32Array([6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 23068672, 0, 23068672, 23068672, 0, 23068672]),
          new Uint32Array([2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145]),
          new Uint32Array([2195457, 2195489, 0, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2195713, 2195745, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 2194337, 6291456, 2194369, 2194401, 2194433, 2194465, 6291456, 2194497, 6291456, 2194529, 6291456, 2194561, 6291456, 2194593, 6291456]),
          new Uint32Array([2126530, 2126626, 2125731, 2125827, 2125923, 2126019, 2126115, 2126211, 2126307, 2126403, 2126499, 2126595, 2126691, 2126787, 2126883, 2126979]),
          new Uint32Array([2100385, 2098049, 2223681, 2125345, 2125537, 2223713, 2100353, 2102049, 2098145, 2102177, 2098017, 2100481, 2223745, 2223777, 2223809, 2152322]),
          new Uint32Array([2097281, 2107649, 2097729, 2107809, 2097377, 2097601, 2162977, 2107745, 2135137, 2097505, 0, 2097185, 2097697, 2137633, 2097633, 2097441]),
          new Uint32Array([23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2206049, 6291456, 2206081, 6291456, 2206113, 6291456, 2206145, 6291456, 2206177, 6291456, 2206209, 6291456, 2206241, 6291456, 2206273, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([2196865, 2196897, 2196929, 2196961, 2196993, 2197025, 2197057, 2197089, 2197121, 2197153, 2197185, 2197217, 2197249, 2197281, 2197313, 2197345]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 23068672, 0, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2226497, 6291456, 2226529, 6291456, 6291456, 6291456, 2226561, 6291456, 2226593, 6291456, 2226625, 6291456, 2226657, 6291456, 2226689, 6291456]),
          new Uint32Array([2198529, 6291456, 2198561, 6291456, 2198593, 6291456, 2198625, 6291456, 2198657, 6291456, 2198689, 6291456, 2198721, 6291456, 2198753, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([23068672, 6291456, 23068672, 23068672, 23068672, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0]),
          new Uint32Array([2178626, 2178690, 2178754, 2178818, 2178882, 2178946, 2179010, 2179074, 2179138, 2179202, 2179266, 2179330, 2179394, 2179458, 2179522, 2179586]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456, 6291456]),
          new Uint32Array([2195489, 2195521, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245729, 2195201, 2195265, 2195297, 2195617, 2195489, 2195457]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2226177, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2226209, 6291456, 2226241, 6291456, 2226273, 2226305, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 2213665]),
          new Uint32Array([2224801, 6291456, 2224833, 6291456, 2224865, 6291456, 2224897, 6291456, 2224929, 6291456, 2224961, 6291456, 2197697, 2197761, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 0, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([10508483, 10508579, 10508675, 10508771, 10508867, 10508963, 10509059, 10509155, 10509251, 10509347, 10509443, 10509539, 10509635, 10509731, 10509827, 10509923]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2104132, 6291456, 6291456, 6291456]),
          new Uint32Array([2110273, 2204161, 2204193, 2204225, 2191937, 2191905, 2204257, 2204289, 2204321, 2204353, 2204385, 2204417, 2204449, 2204481, 2192033, 2204513]),
          new Uint32Array([2234849, 2233377, 2234881, 2234913, 2234945, 2234977, 2235009, 2235041, 2152321, 2235073, 2232865, 2235105, 2235137, 2235169, 2235201, 2235233]),
          new Uint32Array([0, 0, 2107553, 0, 0, 2113761, 2107201, 0, 0, 2114145, 2110049, 2114337, 2114433, 0, 2098305, 2110177]),
          new Uint32Array([2119905, 2107073, 2120097, 2107169, 2120289, 2120385, 2120481, 2120577, 2120673, 2223201, 2223233, 2214753, 2223265, 2223297, 2223329, 2223361]),
          new Uint32Array([2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 10633025, 10633281, 10633057, 10633569, 10632673]),
          new Uint32Array([0, 2201057, 2201089, 2201121, 2201153, 2144129, 2201185, 2201217, 2201249, 2201281, 2201313, 2157345, 2201345, 2157473, 2201377, 2201409]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 0, 0, 0, 0, 0, 6291456, 0, 0]),
          new Uint32Array([2138338, 2165250, 2165314, 2165378, 2165442, 2134658, 2134562, 2165506, 2134754, 2165570, 2165634, 2165698, 2165762, 2134658, 2134562, 2165506]),
          new Uint32Array([2168962, 2169026, 2169090, 2169154, 2169218, 2169282, 2169346, 2169410, 2169474, 2169538, 2169602, 2169666, 2169730, 2169794, 2169858, 2169922]),
          new Uint32Array([2240449, 2240481, 2240513, 2240545, 2240577, 2240609, 2240641, 2240673, 2238881, 2240705, 2240737, 2240769, 2238017, 2240801, 2240833, 2240865]),
          new Uint32Array([0, 0, 2221185, 2221217, 2221249, 2221281, 2221313, 2221345, 0, 0, 2221377, 2221409, 2221441, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2134082, 2134370, 2164226, 2134466, 2161026, 2134946, 2135042, 2161090, 2161154, 2161218, 2135426, 2107906, 2161282, 2135714, 2161346, 2161410]),
          new Uint32Array([2214625, 2214657, 2214689, 2214721, 2153473, 2214753, 2214785, 2214817, 2214849, 2214881, 2214913, 2214945, 2214977, 2215009, 2215041, 2215073]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2202145, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 2209153, 2209185, 2209217, 2209249, 2209281, 2209313, 0, 0]),
          new Uint32Array([2125539, 2106820, 2152898, 2125635, 2106948, 2152962, 2102181, 2100483, 2125762, 2125858, 2125954, 2126050, 2126146, 2126242, 2126338, 2126434]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 0, 0, 0, 0, 0, 0, 0, 10485857]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456]),
          new Uint32Array([2257409, 2187842, 2257441, 2257473, 2257505, 2257537, 2187906, 2187970, 2257569, 2257601, 2257633, 2188034, 2257665, 2188098, 2242561, 2242561]),
          new Uint32Array([2237633, 2248609, 2248641, 2248673, 2248705, 2248737, 2248769, 2248801, 2248833, 2182530, 2248865, 2248897, 2248929, 2245921, 2248961, 2248993]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672]),
          new Uint32Array([2245217, 2245249, 2245281, 10531522, 2245313, 2245345, 2245377, 0, 2245409, 2245441, 2245473, 2245505, 2245537, 2245569, 2245601, 0]),
          new Uint32Array([2207169, 6291456, 2207201, 6291456, 2207233, 6291456, 2207265, 6291456, 2207297, 6291456, 2207329, 6291456, 2207361, 6291456, 2207393, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 18923778, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 18923842, 23068672, 23068672]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([10520771, 10520867, 10520963, 10521059, 2162882, 2162946, 2160194, 2163010, 2160002, 2160258, 2107650, 2163074, 2160386, 2163138, 2160450, 2160514]),
          new Uint32Array([2224321, 6291456, 2224353, 6291456, 2224385, 6291456, 2224417, 6291456, 2224449, 6291456, 2224481, 6291456, 2224513, 6291456, 6291456, 23068672]),
          new Uint32Array([2206305, 6291456, 2206337, 6291456, 2206369, 6291456, 2206401, 6291456, 2206433, 6291456, 2206465, 6291456, 2206497, 6291456, 2206529, 6291456]),
          new Uint32Array([2218945, 2218977, 2219009, 2219041, 2219073, 2219105, 2219137, 2219169, 2219201, 2219233, 2219265, 2219297, 2219329, 2219361, 2219393, 2219425]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2133442, 2134306, 2137826, 2137634, 2162242, 2138018, 2164290, 2162434, 2137442, 2164354, 2139042, 2133666, 2160930, 2137026, 2097506, 2160194]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2102561, 2102465, 2098337, 2103169, 2103297, 2103425, 2103553, 2103681, 2103809, 2103937, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2135713, 2136001, 2136001, 2136001, 2136001, 2136097, 2136097, 2136097, 2136097, 2107617, 2107617, 2107617, 2107617, 2097185, 2097185, 2097185]),
          new Uint32Array([2168450, 2168514, 2168578, 2168642, 2168706, 2168770, 2168834, 2168898, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2187010, 2187074, 2256033, 2256065, 2231617, 2256097, 2256129, 2256161, 2256193, 2256225, 2256257, 2242145, 2256289, 2256321, 2256353, 0]),
          new Uint32Array([6291456, 0, 0, 0, 0, 0, 0, 23068672, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0]),
          new Uint32Array([0, 0, 2220801, 2220833, 2220865, 2220897, 2220929, 2220961, 0, 0, 2220993, 2221025, 2221057, 2221089, 2221121, 2221153]),
          new Uint32Array([0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2189825, 6291456, 2189857, 6291456, 2189889, 6291456, 2189921, 6291456, 2189953, 6291456, 2189985, 6291456, 2190017, 6291456, 2190049, 6291456]),
          new Uint32Array([2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 23068672, 0, 0, 0, 0, 2144962, 2145026, 0, 2145090]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2134370, 2134466, 2161026, 2134946, 2135042, 2161090, 2161154, 2135138, 2161218, 2135426, 2107906, 2161282, 2135714, 2161346, 2161410, 2136002]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2202049, 6291456, 6291456, 6291456]),
          new Uint32Array([2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337]),
          new Uint32Array([2199521, 6291456, 2199553, 6291456, 2199585, 6291456, 2199617, 6291456, 2199649, 6291456, 2199681, 6291456, 2199713, 6291456, 2199745, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 6291456, 6291456]),
          new Uint32Array([2251937, 2251969, 2239297, 2183618, 2252001, 2252033, 2252065, 2242625, 2252097, 2252129, 2252161, 2252193, 2183682, 2252225, 2252257, 2252289]),
          new Uint32Array([2205281, 6291456, 2205313, 6291456, 2205345, 6291456, 2205377, 6291456, 2205409, 6291456, 2205441, 6291456, 2205473, 6291456, 2205505, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2207425, 6291456, 2207457, 6291456, 2207489, 6291456, 2207521, 6291456, 2207553, 6291456, 2207585, 6291456, 2207617, 6291456, 2207649, 6291456]),
          new Uint32Array([2210081, 2244289, 2244321, 2244353, 2244385, 6291456, 6291456, 10633025, 10633057, 10538114, 10538114, 10538114, 10538114, 10632673, 10632673, 10632673]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 2202177, 2202209, 2202241, 2202273, 2202305, 2202337, 0, 0]),
          new Uint32Array([2195617, 2195649, 2102625, 2098177, 2110145, 2102593, 2195105, 2195137, 2195489, 2195617, 2195649, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 23068672, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 2145794, 2145858, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 23068672, 23068672]),
          new Uint32Array([2157890, 2157954, 2158018, 2158082, 2158146, 2158210, 2158274, 0, 2158338, 2158402, 2158466, 2158530, 2158594, 0, 2158658, 0]),
          new Uint32Array([2243617, 2243617, 2243617, 2243617, 2243649, 2243649, 2243681, 2243681, 2243681, 2243681, 2243713, 2243713, 2243713, 2243713, 2141729, 2141729]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0]),
          new Uint32Array([2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273]),
          new Uint32Array([2236673, 2236705, 2236737, 2236769, 2236801, 2236833, 2236865, 2236897, 2236929, 2218625, 2236961, 2236993, 2237025, 2237057, 2237089, 2237121]),
          new Uint32Array([2234337, 2234369, 2234401, 2234433, 2234465, 2234497, 2234529, 2234561, 2234593, 2234625, 2234657, 2234689, 2234721, 2234753, 2234785, 2234817]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2213249, 6291456, 2213281, 6291456, 2213313, 6291456, 2213345, 6291456, 2213377, 6291456, 2213409, 6291456, 2213441, 6291456, 2213473, 6291456]),
          new Uint32Array([2225697, 6291456, 2225729, 6291456, 2225761, 6291456, 2225793, 6291456, 2225825, 6291456, 2225857, 6291456, 2225889, 6291456, 2225921, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456]),
          new Uint32Array([2207937, 6291456, 2207969, 6291456, 2208001, 6291456, 2208033, 6291456, 2208065, 6291456, 2208097, 6291456, 2208129, 6291456, 2208161, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 0, 2110273, 0, 2113569, 2102625, 2113761]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0]),
          new Uint32Array([2195201, 2195233, 2148929, 2195265, 2144097, 2195297, 2195329, 2153665, 2195361, 2195393, 2195425, 2195457, 2195489, 2195521, 2195521, 2195553]),
          new Uint32Array([6291456, 6291456, 2118369, 2118465, 2118561, 2118657, 2222817, 2222849, 2222881, 2222913, 2213857, 2222945, 2222977, 2223009, 2223041, 2213953]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 2115585, 2220289, 2220321, 2115681, 2220353, 2220385, 2115777, 2220417, 2115873, 2220449, 2220481, 2220513, 2220545, 2220577, 2220609]),
          new Uint32Array([2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 0, 2098241, 2110209, 2110273, 2107553, 0, 0, 2113761, 2107201, 2107297]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 0]),
          new Uint32Array([0, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2152642, 2152706, 2101381, 2106180, 2101541, 2124099, 2101701, 2152770, 2124195, 2124291, 2124387, 2124483, 2124579, 2106308, 2124675, 2152834]),
          new Uint32Array([0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 6291456, 6291456, 14680064]),
          new Uint32Array([6291456, 2209921, 6291456, 6291456, 6291456, 6291456, 6291456, 10537986, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2200545, 6291456, 2200577, 6291456, 2200609, 6291456, 2200641, 6291456, 2200673, 6291456, 2200705, 6291456, 2200737, 6291456, 2200769, 6291456]),
          new Uint32Array([2127586, 2127555, 2127651, 2127747, 2127843, 2154306, 2154370, 2154434, 2154498, 2154562, 2154626, 2154690, 2127938, 2128034, 2128130, 2127939]),
          new Uint32Array([2097152, 0, 0, 0, 2097152, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2198145, 6291456, 2198177, 6291456, 2198209, 6291456, 2198241, 6291456, 2198273, 6291456, 2198305, 6291456, 2198337, 6291456, 2198369, 6291456]),
          new Uint32Array([6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23068672]),
          new Uint32Array([2110177, 2110145, 2115009, 2098209, 2203841, 2203873, 2203905, 2112993, 2098241, 2110209, 2191745, 2191777, 2203937, 2107553, 6291456, 2107201]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2224545, 6291456, 2224577, 6291456, 2224609, 6291456, 2224641, 6291456, 2224673, 6291456, 2224705, 6291456, 2224737, 6291456, 2224769, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 0, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([0, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2174530, 2174594, 2174658, 2174722, 2174786, 2174850, 2174914, 2174978, 2175042, 2175106, 2175170, 2175234, 2175298, 2175362, 2175426, 2175490]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2238369, 6291456, 2238401, 6291456, 6291456, 2238433, 2238465, 6291456, 6291456, 6291456, 2238497, 2238529, 2238561, 2238593, 2238625, 2238657]),
          new Uint32Array([10501475, 10501571, 10501667, 10501763, 10501859, 10501955, 10502051, 10502147, 10502243, 10502339, 10502435, 10502531, 10502627, 10502723, 10502819, 10502915]),
          new Uint32Array([10633121, 10633153, 10598561, 2244577, 10633217, 10633249, 10504033, 0, 10633281, 10633313, 10633345, 10633377, 0, 0, 0, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0]),
          new Uint32Array([2242785, 2157761, 2158081, 2158145, 2158529, 2158593, 2242817, 2159105, 2159169, 10598561, 2157634, 2157698, 2131779, 2131875, 2157762, 2157826]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([18886305, 18885921, 23068672, 18886273, 18885890, 18921313, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 18874368]),
          new Uint32Array([23068672, 23068672, 6291456, 6291456, 6291456, 23068672, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2211617, 6291456, 2211649, 2211681, 2211713, 6291456, 6291456, 2211745, 6291456, 2211777, 6291456, 2211809, 6291456, 2203873, 2204449, 2203841]),
          new Uint32Array([0, 2097153, 2136097, 0, 2134561, 0, 0, 2133153, 0, 2134945, 0, 2135713, 0, 2243585, 0, 2245825]),
          new Uint32Array([2176578, 2176642, 2176706, 2176770, 2176834, 2176898, 2176962, 2177026, 2177090, 2177154, 2177218, 2177282, 2177346, 2177410, 2177474, 2177538]),
          new Uint32Array([2127075, 2127171, 2153026, 2153090, 2127267, 2153154, 2153218, 2127362, 2127363, 2127459, 2153282, 2153346, 2153410, 2153474, 2153538, 2107076]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2147521, 2147585, 2147649, 2147713, 2147777, 2147841, 2147905, 2147969]),
          new Uint32Array([2131586, 2131618, 2131714, 2131587, 2131683, 2157122, 2157122, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2143298, 2190497, 6291456, 2190529, 6291456, 2190561, 6291456, 2190593, 6291456, 2143362, 2190625, 6291456, 2190657, 6291456, 2190689, 6291456]),
          new Uint32Array([0, 0, 2227201, 6291456, 2227233, 2204609, 2227265, 2227297, 6291456, 2227329, 6291456, 0, 0, 0, 0, 0]),
          new Uint32Array([2169986, 2170050, 2170114, 2170178, 2170242, 2170306, 2170370, 2170434, 2170498, 2170562, 2170626, 2170690, 2170754, 2170818, 2170882, 2170946]),
          new Uint32Array([2210625, 2210657, 2210689, 2210721, 2210753, 2210785, 2210817, 2210849, 2210881, 2210913, 2210945, 2210977, 2211009, 2211041, 2211073, 2211105]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 0, 0, 6291456, 6291456]),
          new Uint32Array([2213505, 6291456, 2213537, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2213569, 6291456, 2213601, 6291456, 23068672]),
          new Uint32Array([2215585, 2245857, 2245889, 2152449, 2118465, 2245921, 2245953, 2223009, 2245985, 2246017, 2246049, 2235713, 2246081, 2246113, 2246145, 2246177]),
          new Uint32Array([2136290, 2136674, 2097666, 2097186, 2097474, 2097698, 2107714, 2133442, 2134306, 2133730, 2133634, 2137826, 2137634, 2162242, 2138018, 2162306]),
          new Uint32Array([2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2181506, 2129154, 2181570, 2143106, 2141955, 2181634]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 23068672, 23068672, 23068672, 0, 0, 0, 0, 23068672]),
          new Uint32Array([2228513, 2228545, 2228577, 2228609, 2228641, 2228673, 2228705, 2228737, 2228769, 2228801, 2228833, 2228865, 2228897, 2228929, 2228961, 2228993]),
          new Uint32Array([2219617, 2231937, 2231969, 2232001, 2232033, 2232065, 2232097, 2232129, 2232161, 2232193, 2232225, 2232257, 2232289, 2232321, 2232353, 2232385]),
          new Uint32Array([2107649, 2107649, 2107649, 2244865, 2244865, 2132833, 2132833, 2132833, 2132833, 2160705, 2160705, 2160705, 2160705, 2097729, 2097729, 2097729]),
          new Uint32Array([2246785, 2246817, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064, 14680064]),
          new Uint32Array([2138499, 2138595, 2138691, 2138787, 2138883, 2138979, 2139075, 2139171, 2139267, 2139363, 2139459, 2139555, 2139651, 2139747, 2139843, 2139939]),
          new Uint32Array([2202881, 2202913, 2202945, 2202977, 2203009, 2203041, 2203073, 2203105, 2203137, 2203169, 2203201, 2203233, 2203265, 2203297, 2203329, 2203361]),
          new Uint32Array([2252641, 2239329, 2236033, 2252673, 2252705, 2252737, 2184066, 2252769, 2252801, 2252833, 2252865, 2241473, 2252897, 2184130, 2252929, 2252961]),
          new Uint32Array([10569441, 2243905, 0, 0, 10583521, 10503969, 10538177, 10538049, 2244001, 10491329, 10491425, 10632705, 10632737, 2141857, 2141921, 10633089]),
          new Uint32Array([2150018, 2110179, 2150082, 6291456, 2115297, 6291456, 2149185, 6291456, 2115297, 6291456, 2107201, 2188769, 2112993, 2107233, 6291456, 2110209]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2097152, 2097152, 2097152, 2097152, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2171266, 2171330, 2171394, 2171458, 2171522, 2171586, 2171650, 2171714, 2171778, 2171842, 2171906, 2171970, 2172034, 2172098, 2172162, 2172226]),
          new Uint32Array([2212481, 6291456, 2212513, 6291456, 2212545, 6291456, 2212577, 6291456, 2212609, 6291456, 2212641, 6291456, 2212673, 6291456, 2212705, 6291456]),
          new Uint32Array([10485857, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 10497250, 6291456, 2098209, 6291456, 6291456, 2097152, 6291456, 10531522]),
          new Uint32Array([2193633, 6291456, 2193665, 6291456, 2193697, 6291456, 2193729, 6291456, 2193761, 6291456, 2193793, 6291456, 2193825, 6291456, 2193857, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([0, 0, 0, 6291456, 6291456, 0, 0, 0, 6291456, 6291456, 6291456, 0, 0, 0, 6291456, 6291456]),
          new Uint32Array([2100961, 2123873, 2223617, 2098113, 2123393, 2104929, 2223649, 2105761, 2123713, 2123809, 2124257, 2101377, 2101697, 2124865, 2101857, 2102017]),
          new Uint32Array([2239649, 2120577, 2239681, 2239713, 2239745, 2239777, 2239809, 2234529, 2239841, 2239873, 2239905, 2239937, 2239969, 2240001, 2240001, 2240033]),
          new Uint32Array([2143170, 6291456, 2143234, 2143234, 2190337, 6291456, 2190369, 6291456, 6291456, 2190401, 6291456, 2190433, 6291456, 2190465, 6291456, 2143298]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 23068672]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456]),
          new Uint32Array([2206561, 6291456, 2206593, 6291456, 2206625, 6291456, 2206657, 6291456, 2206689, 6291456, 2206721, 6291456, 2206753, 6291456, 2206785, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 2191457, 2191489, 6291456, 2191521, 6291456, 2191553, 2191585, 6291456, 2191617, 2191649, 2191681, 6291456, 6291456, 2191713, 2191745]),
          new Uint32Array([0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2204097, 2107233, 2204129, 2189121, 2203937]),
          new Uint32Array([2136001, 2097153, 2136097, 2107681, 2134561, 2132833, 2160705, 2133153, 2162689, 2134945, 2161217, 2135713, 2245761, 2243585, 2245793, 2245825]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2102625, 2113761, 2107201, 2107297, 2107329, 0, 2110049, 0, 0, 0, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337]),
          new Uint32Array([2255681, 2255713, 2255745, 2255777, 2186690, 2186754, 2186818, 2255809, 2255841, 2255873, 2255905, 2186882, 2255937, 2186946, 2255969, 2256001]),
          new Uint32Array([2226721, 6291456, 2226753, 6291456, 2226785, 6291456, 2226817, 6291456, 2226849, 6291456, 2194625, 2203937, 2204193, 2226881, 2204257, 6291456]),
          new Uint32Array([2242337, 2240225, 2242369, 2242401, 2242433, 2242465, 2242497, 2240289, 2238305, 2242529, 2240321, 2242561, 2240353, 2242593, 2220097, 2156738]),
          new Uint32Array([0, 0, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([2253313, 2241569, 2253345, 2184450, 2253377, 2253409, 2184514, 2184578, 2253441, 2253473, 2253505, 2253537, 2253569, 2253569, 2253601, 2253633]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 6291456]),
          new Uint32Array([2240065, 2240097, 2240129, 2240161, 2240193, 2240225, 2240257, 2238433, 2240289, 2240321, 2240353, 2240385, 2156674, 2240417, 0, 0]),
          new Uint32Array([2173314, 2173378, 2173442, 2173506, 2173570, 2173634, 2173698, 2173762, 2173826, 2173890, 2173954, 2174018, 2174082, 2174146, 2174210, 2174274]),
          new Uint32Array([2115585, 2115681, 2115777, 2115873, 2115969, 2116065, 2116161, 2116257, 2116353, 2116449, 2116545, 2116641, 2116737, 2116833, 2116929, 2117025]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 6291456]),
          new Uint32Array([2189121, 2189153, 2189185, 2189217, 2189249, 2189281, 2189313, 6291456, 2189345, 2189377, 2189409, 2189441, 2189473, 2189505, 2189537, 4240258]),
          new Uint32Array([2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569]),
          new Uint32Array([2135043, 2135139, 2135139, 2135235, 2135331, 2135427, 2135523, 2135523, 2135619, 2135715, 2135811, 2135907, 2136003, 2136003, 2136099, 2136195]),
          new Uint32Array([10503395, 10503491, 10503587, 10503683, 10503779, 10503875, 2098209, 2112993, 2107233, 2098241, 2110209, 2110273, 2107553, 2113569, 2102625, 2113761]),
          new Uint32Array([6291456, 6291456, 2225217, 6291456, 2225249, 6291456, 2225281, 6291456, 2225313, 6291456, 2225345, 6291456, 2225377, 6291456, 2225409, 6291456]),
          new Uint32Array([18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368, 18874368]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 2181698, 2181762, 2181826, 6291456, 6291456, 6291456]),
          new Uint32Array([2103650, 2103778, 2103906, 2104034, 10500611, 10500707, 10500803, 10500899, 10500995, 10501091, 10501187, 10501283, 10501379, 10491332, 10491460, 10491588]),
          new Uint32Array([23068672, 23068672, 18923906, 23068672, 23068672, 23068672, 23068672, 18923970, 23068672, 23068672, 23068672, 23068672, 18924034, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 0, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2251105, 2251137, 2251169, 2251201, 2251233, 2251265, 2251297, 2251329, 2239201, 2251361, 2183490, 2251393, 2251425, 2251457, 2251489, 2239265]),
          new Uint32Array([2194785, 6291456, 2194817, 6291456, 2194849, 6291456, 2194881, 6291456, 0, 0, 10532674, 6291456, 6291456, 6291456, 10583521, 2194945]),
          new Uint32Array([6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2136002, 2141282, 2161602, 2136098, 2161858, 2161922, 2161986, 2162050, 2140514, 2136578, 2136290, 2136674, 2097666, 2097346, 2097698, 2107714]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0]),
          new Uint32Array([2193377, 6291456, 2193409, 6291456, 2193441, 6291456, 2193473, 6291456, 2193505, 6291456, 2193537, 6291456, 2193569, 6291456, 2193601, 6291456]),
          new Uint32Array([2130051, 2130147, 2130243, 2130339, 2130435, 2130531, 2130627, 2130723, 2130819, 2130915, 2131011, 2131107, 2131203, 2131299, 2131395, 2131491]),
          new Uint32Array([0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2205025, 6291456, 2205057, 6291456, 2205089, 6291456, 2205121, 6291456, 2205153, 6291456, 2205185, 6291456, 2205217, 6291456, 2205249, 6291456]),
          new Uint32Array([2197889, 6291456, 2197921, 6291456, 2197953, 6291456, 2197985, 6291456, 2198017, 6291456, 2198049, 6291456, 2198081, 6291456, 2198113, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0]),
          new Uint32Array([2111907, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2159746, 2159746, 2159810, 2159810, 2159874, 2159874, 2159938, 2159938, 2159938, 2160002, 2160002, 2160002, 2108129, 2108129, 2108129, 2108129]),
          new Uint32Array([2134945, 2135137, 2135137, 2135137, 2135137, 2161217, 2161217, 2161217, 2161217, 2097441, 2097441, 2097441, 2097441, 2135713, 2135713, 2135713]),
          new Uint32Array([6291456, 0, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([6291456, 0, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2225441, 6291456, 2225473, 6291456, 2225505, 6291456, 2225537, 6291456, 2225569, 6291456, 2225601, 6291456, 2225633, 6291456, 2225665, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2224065, 6291456, 2224097, 6291456, 2224129, 6291456, 2224161, 6291456, 2224193, 6291456, 2224225, 6291456, 2224257, 6291456, 2224289, 6291456]),
          new Uint32Array([2199777, 6291456, 2199809, 6291456, 2199841, 6291456, 2199873, 6291456, 2199905, 6291456, 2199937, 6291456, 2199969, 6291456, 2200001, 6291456]),
          new Uint32Array([2107329, 2114145, 2110049, 2114337, 2114433, 0, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 0, 2098209, 2112993]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2205537, 6291456, 2205569, 6291456, 2205601, 6291456, 2205633, 6291456, 2205665, 6291456, 2205697, 6291456, 2205729, 6291456, 2205761, 6291456]),
          new Uint32Array([2156802, 2156866, 2242625, 2242657, 2242689, 2156930, 2156994, 2157058, 2242721, 2242753, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2211969, 6291456, 2212001, 6291456, 2212033, 6291456, 2212065, 6291456, 2212097, 6291456, 2212129, 6291456, 2212161, 6291456, 2212193, 6291456]),
          new Uint32Array([2110209, 2110273, 2107553, 2113569, 2102625, 2113761, 2107201, 2107297, 2107329, 2114145, 2110049, 2114337, 2114433, 2098177, 2098305, 2110177]),
          new Uint32Array([2136001, 2097153, 2136097, 0, 2134561, 2132833, 2160705, 2133153, 0, 2134945, 2161217, 2135713, 2245761, 0, 2245793, 0]),
          new Uint32Array([2181954, 2182018, 2100897, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 23068672, 23068672, 6291456, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 2209697, 6291456, 6291456, 6291456, 6291456, 2209729, 2209761, 2209793, 2195073, 2209825, 10498211, 10497251, 10598465]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([6291456, 6291456, 6291456, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([2220833, 2220865, 2220897, 2220929, 2220961, 2220993, 2221025, 2221057, 2221089, 2221121, 2221153, 2221185, 2221217, 2221249, 2221281, 2221313]),
          new Uint32Array([6291456, 23068672, 6291456, 2145666, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 6291456]),
          new Uint32Array([2190721, 6291456, 2190753, 6291456, 2190785, 6291456, 2190817, 6291456, 2190849, 6291456, 2190881, 6291456, 2190913, 6291456, 2190945, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 23068672, 0]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 6291456]),
          new Uint32Array([2215105, 2215137, 2215169, 2215201, 2215233, 2215265, 2215297, 2215329, 2215361, 2215393, 2215425, 2215457, 2215489, 2215521, 2215553, 2215585]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 0, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456, 23068672, 23068672, 6291456, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([0, 2107649, 2097729, 0, 2097377, 0, 0, 2107745, 2135137, 2097505, 2107617, 0, 2097697, 2137633, 2097633, 2097441]),
          new Uint32Array([2206817, 6291456, 2206849, 6291456, 2206881, 6291456, 2206913, 6291456, 2206945, 6291456, 2206977, 6291456, 2207009, 6291456, 2207041, 6291456]),
          new Uint32Array([23068672, 23068672, 23068672, 0, 0, 0, 0, 0, 0, 0, 0, 23068672, 23068672, 23068672, 23068672, 23068672]),
          new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23068672]),
          new Uint32Array([2134754, 2164482, 2164546, 2135138, 2133890, 2133794, 2139266, 2134658, 2134562, 2165506, 2135138, 2161218, 2165826, 2165826, 6291456, 6291456]),
          new Uint32Array([2257697, 2188162, 2257729, 2257761, 2257793, 2257825, 2257857, 2257889, 2257921, 2188226, 2242593, 2257953, 2257985, 2258017, 2258049, 2258081]),
          new Uint32Array([6291456, 6291456, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2114337, 2114433, 2098177, 2098305, 2110177, 2110145, 2102593, 2115009, 2110337, 2115201, 2115297, 10632705, 10633601, 10632737, 10633633, 2245057]),
          new Uint32Array([6291456, 6291456, 23068672, 23068672, 23068672, 6291456, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          new Uint32Array([2195425, 2195457, 2195489, 2195265, 2195521, 2195553, 2195585, 2195617, 2195649, 2195681, 2149185, 2245697, 2148609, 2195105, 2195137, 2195169]),
          new Uint32Array([6291456, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 23068672, 6291456, 6291456])
        ], b = new Uint16Array([656, 656, 605, 162, 48, 207, 7, 2, 147, 147, 666, 339, 396, 696, 98, 98, 317, 557, 386, 672, 641, 744, 179, 4, 679, 32, 124, 441, 285, 270, 215, 380, 713, 667, 475, 167, 484, 98, 98, 98, 98, 98, 98, 35, 98, 366, 471, 98, 249, 249, 249, 249, 630, 249, 249, 708, 233, 13, 483, 98, 248, 73, 194, 462, 244, 491, 400, 98, 98, 98, 717, 612, 166, 496, 176, 129, 331, 565, 727, 295, 284, 608, 425, 516, 381, 117, 98, 98, 128, 611, 249, 86, 418, 98, 439, 571, 683, 645, 98, 98, 340, 249, 98, 169, 98, 98, 98, 98, 98, 178, 749, 98, 499, 29, 98, 249, 678, 98, 98, 98, 98, 98, 79, 488, 98, 98, 340, 30, 98, 69, 190, 712, 98, 173, 134, 147, 147, 147, 98, 292, 738, 619, 37, 249, 286, 98, 98, 736, 249, 265, 390, 98, 469, 479, 85, 508, 53, 559, 186, 305, 695, 479, 85, 395, 181, 111, 683, 631, 389, 421, 85, 125, 320, 710, 186, 523, 227, 479, 85, 125, 465, 96, 186, 738, 453, 132, 669, 62, 293, 434, 683, 134, 466, 139, 85, 578, 165, 460, 186, 638, 143, 139, 85, 251, 165, 450, 186, 602, 676, 139, 98, 185, 618, 254, 186, 98, 410, 146, 98, 115, 256, 545, 683, 203, 604, 98, 98, 743, 163, 581, 147, 147, 350, 98, 63, 335, 402, 577, 147, 147, 563, 277, 98, 436, 72, 187, 27, 205, 426, 538, 704, 273, 104, 134, 147, 147, 98, 98, 340, 446, 98, 312, 498, 221, 535, 398, 147, 147, 276, 98, 98, 526, 98, 98, 98, 98, 98, 712, 604, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 373, 430, 98, 98, 373, 98, 98, 412, 722, 81, 98, 98, 98, 722, 98, 98, 98, 313, 98, 341, 98, 750, 98, 98, 98, 98, 98, 574, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 604, 341, 98, 98, 98, 98, 98, 123, 490, 374, 98, 759, 98, 38, 490, 433, 98, 98, 98, 267, 249, 600, 750, 750, 327, 750, 98, 98, 98, 98, 98, 123, 234, 98, 9, 98, 98, 98, 98, 592, 98, 712, 627, 627, 723, 98, 499, 571, 98, 98, 581, 98, 750, 588, 98, 98, 98, 568, 98, 98, 98, 157, 249, 142, 750, 750, 499, 249, 298, 147, 147, 147, 544, 98, 98, 531, 290, 98, 340, 554, 561, 98, 761, 98, 98, 98, 79, 226, 98, 98, 531, 620, 517, 98, 98, 98, 235, 322, 658, 43, 738, 131, 126, 437, 98, 98, 477, 309, 614, 164, 575, 90, 98, 681, 511, 252, 249, 249, 249, 150, 423, 716, 570, 730, 324, 489, 542, 675, 752, 180, 537, 572, 217, 589, 223, 279, 264, 468, 636, 291, 528, 118, 58, 367, 422, 106, 21, 222, 406, 107, 737, 40, 388, 606, 530, 269, 120, 188, 610, 193, 246, 321, 213, 98, 147, 249, 249, 298, 336, 238, 661, 323, 102, 211, 231, 231, 470, 98, 98, 98, 98, 98, 98, 98, 98, 98, 138, 719, 98, 98, 369, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 392, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 597, 147, 134, 147, 160, 703, 171, 149, 51, 699, 74, 558, 405, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 510, 98, 98, 98, 98, 98, 98, 153, 98, 98, 98, 98, 98, 417, 98, 98, 98, 98, 98, 98, 98, 98, 98, 640, 98, 546, 98, 98, 98, 98, 98, 98, 274, 644, 82, 98, 98, 712, 632, 34, 732, 415, 665, 349, 28, 586, 646, 140, 98, 98, 518, 98, 98, 98, 505, 613, 98, 597, 225, 225, 225, 225, 249, 249, 98, 98, 98, 98, 98, 184, 147, 147, 98, 197, 98, 98, 98, 98, 98, 289, 189, 259, 525, 747, 342, 463, 8, 54, 365, 151, 19, 543, 299, 472, 147, 147, 363, 98, 347, 201, 604, 98, 98, 98, 98, 114, 98, 98, 98, 98, 98, 56, 556, 98, 98, 598, 11, 742, 362, 355, 337, 596, 98, 98, 98, 98, 757, 98, 456, 458, 420, 509, 77, 154, 693, 64, 200, 514, 344, 351, 110, 133, 670, 486, 391, 112, 307, 603, 414, 529, 485, 635, 427, 609, 333, 88, 224, 440, 359, 714, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 341, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 341, 98, 98, 98, 597, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 581, 147, 419, 726, 541, 296, 616, 506, 98, 98, 98, 98, 98, 607, 98, 98, 378, 700, 724, 587, 172, 504, 208, 495, 686, 45, 642, 147, 147, 247, 297, 98, 493, 750, 98, 98, 98, 738, 741, 98, 98, 531, 746, 750, 249, 384, 98, 98, 137, 98, 175, 527, 98, 341, 286, 98, 98, 709, 639, 501, 668, 712, 98, 98, 310, 497, 49, 135, 98, 288, 98, 98, 98, 304, 448, 281, 340, 314, 705, 680, 225, 98, 98, 113, 174, 255, 25, 652, 306, 16, 98, 98, 622, 750, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 757, 98, 566, 98, 98, 581, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 23, 92, 316, 459, 653, 141, 206, 161, 371, 584, 512, 452, 168, 6, 583, 219, 353, 109, 624, 145, 41, 671, 691, 521, 33, 399, 260, 155, 687, 731, 147, 147, 637, 387, 628, 579, 89, 394, 338, 177, 461, 83, 580, 429, 507, 60, 195, 720, 100, 245, 562, 26, 648, 262, 540, 80, 218, 413, 240, 524, 711, 547, 416, 84, 136, 278, 519, 755, 147, 375, 148, 698, 424, 382, 657, 478, 451, 147, 147, 435, 701, 59, 249, 408, 573, 660, 626, 358, 253, 654, 42, 407, 721, 550, 301, 303, 346, 199, 287, 515, 250, 758, 158, 438, 0, 411, 598, 258, 555, 522, 536, 147, 492, 98, 81, 24, 499, 499, 147, 147, 98, 98, 98, 98, 98, 98, 98, 134, 447, 98, 98, 590, 98, 98, 98, 98, 712, 341, 710, 147, 147, 98, 98, 68, 147, 147, 147, 147, 147, 147, 147, 147, 98, 341, 98, 98, 98, 710, 268, 581, 98, 98, 228, 98, 134, 98, 98, 352, 98, 70, 98, 98, 615, 592, 147, 147, 311, 328, 551, 98, 98, 98, 98, 98, 98, 499, 750, 520, 643, 75, 98, 581, 98, 98, 738, 98, 98, 98, 356, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 597, 98, 592, 738, 147, 147, 147, 147, 147, 147, 147, 147, 147, 93, 98, 98, 156, 98, 546, 98, 98, 98, 712, 638, 147, 147, 147, 98, 15, 98, 690, 98, 650, 147, 147, 147, 147, 98, 98, 98, 280, 98, 715, 98, 98, 202, 144, 98, 651, 123, 123, 98, 98, 98, 98, 147, 147, 98, 98, 706, 597, 98, 98, 98, 385, 98, 364, 98, 629, 98, 242, 47, 147, 147, 147, 147, 147, 98, 98, 98, 98, 123, 147, 147, 147, 664, 50, 692, 282, 98, 98, 98, 300, 98, 98, 241, 750, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 712, 98, 98, 101, 507, 147, 147, 147, 147, 98, 98, 738, 98, 79, 78, 147, 147, 147, 147, 147, 98, 581, 147, 98, 597, 561, 98, 98, 39, 718, 715, 98, 754, 561, 98, 98, 593, 507, 98, 123, 750, 561, 98, 175, 748, 108, 98, 98, 480, 561, 98, 98, 709, 368, 98, 604, 571, 98, 421, 99, 745, 147, 147, 147, 147, 65, 70, 750, 98, 98, 376, 209, 750, 674, 479, 85, 576, 465, 553, 122, 214, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 694, 119, 294, 507, 147, 98, 98, 98, 249, 159, 750, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 376, 198, 268, 560, 147, 147, 98, 98, 98, 249, 325, 750, 341, 147, 98, 98, 340, 548, 750, 147, 147, 147, 98, 313, 627, 98, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 99, 5, 147, 147, 147, 147, 147, 147, 621, 403, 98, 98, 98, 326, 677, 329, 98, 343, 444, 750, 147, 147, 147, 147, 585, 98, 98, 409, 46, 147, 539, 98, 98, 237, 729, 567, 98, 98, 347, 454, 184, 147, 98, 98, 98, 123, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 85, 98, 376, 401, 592, 98, 341, 98, 98, 688, 308, 497, 147, 147, 147, 147, 503, 98, 98, 481, 494, 750, 66, 98, 601, 230, 750, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 263, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 710, 98, 98, 98, 532, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 750, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 712, 571, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 757, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 712, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 597, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 123, 98, 712, 501, 147, 147, 147, 147, 147, 147, 98, 499, 94, 98, 98, 98, 119, 592, 14, 421, 95, 98, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 634, 370, 98, 98, 98, 134, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 275, 52, 249, 249, 673, 561, 147, 147, 147, 147, 662, 334, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 738, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 592, 147, 147, 123, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 712, 147, 147, 147, 184, 18, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 581, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 134, 341, 123, 318, 663, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 592, 98, 98, 725, 98, 98, 455, 1, 753, 623, 98, 398, 457, 116, 98, 123, 147, 98, 98, 98, 98, 216, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 757, 98, 98, 98, 98, 98, 597, 98, 123, 147, 147, 147, 147, 147, 147, 147, 147, 558, 582, 243, 20, 449, 71, 697, 564, 482, 261, 513, 591, 105, 558, 582, 243, 599, 728, 239, 22, 684, 354, 97, 733, 319, 74, 558, 582, 243, 20, 449, 239, 697, 564, 482, 97, 733, 319, 74, 558, 582, 243, 191, 361, 182, 121, 103, 760, 595, 442, 431, 272, 87, 383, 170, 474, 502, 474, 183, 257, 348, 404, 229, 212, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 249, 249, 249, 345, 249, 249, 617, 668, 594, 739, 611, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 401, 393, 266, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 341, 718, 501, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 99, 650, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 332, 497, 147, 147, 500, 31, 445, 98, 192, 501, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 604, 98, 98, 98, 571, 147, 147, 147, 147, 604, 98, 98, 499, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 204, 682, 357, 330, 467, 633, 751, 734, 487, 152, 432, 152, 147, 147, 147, 507, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 581, 98, 98, 98, 98, 98, 98, 757, 712, 604, 604, 604, 98, 592, 377, 625, 360, 558, 649, 98, 702, 98, 98, 91, 499, 147, 147, 147, 683, 98, 735, 647, 302, 283, 76, 655, 592, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 738, 341, 341, 98, 98, 98, 98, 98, 98, 98, 757, 98, 98, 98, 98, 98, 123, 581, 147, 581, 98, 98, 98, 738, 750, 98, 98, 738, 98, 499, 507, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 85, 98, 98, 98, 98, 492, 98, 98, 98, 98, 98, 98, 98, 98, 757, 499, 315, 597, 98, 123, 597, 184, 597, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 740, 98, 98, 134, 147, 147, 549, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 499, 147, 147, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 571, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 499, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 507, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 710, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 10, 44, 464, 17, 443, 534, 476, 127, 220, 379, 3, 473, 707, 61, 569, 236, 659, 12, 689, 397, 232, 57, 196, 428, 130, 36, 685, 552, 55, 210, 372, 533, 756, 67, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147, 147]), y = "صلى الله عليه وسلمجل جلالهキロメートルrad∕s2𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅰𝅘𝅥𝅱𝅘𝅥𝅲𝆹𝅥𝅮𝆺𝅥𝅮𝆹𝅥𝅯𝆺𝅥𝅯エスクードキログラムキロワットグラムトンクルゼイロサンチームパーセントピアストルファラッドブッシェルヘクタールマンションミリバールレントゲン′′′′1⁄10viii(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)∫∫∫∫(오전)(오후)アパートアルファアンペアイニングエーカーカラットカロリーキュリーギルダークローネサイクルシリングバーレルフィートポイントマイクロミクロンメガトンリットルルーブル株式会社kcalm∕s2c∕kgاكبرمحمدصلعمرسولریال𝅗𝅥1⁄41⁄23⁄4 ̈́ྲཱྀླཱྀ ̈͂ ̓̀ ̓́ ̓͂ ̔̀ ̔́ ̔͂ ̈̀‵‵‵a/ca/sc/oc/utelfax1⁄71⁄91⁄32⁄31⁄52⁄53⁄54⁄51⁄65⁄61⁄83⁄85⁄87⁄8xii0⁄3∮∮∮(1)(2)(3)(4)(5)(6)(7)(8)(9)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)(m)(n)(o)(p)(q)(r)(s)(t)(u)(v)(w)(x)(y)(z)::====(ᄀ)(ᄂ)(ᄃ)(ᄅ)(ᄆ)(ᄇ)(ᄉ)(ᄋ)(ᄌ)(ᄎ)(ᄏ)(ᄐ)(ᄑ)(ᄒ)(가)(나)(다)(라)(마)(바)(사)(아)(자)(차)(카)(타)(파)(하)(주)(一)(二)(三)(四)(五)(六)(七)(八)(九)(十)(月)(火)(水)(木)(金)(土)(日)(株)(有)(社)(名)(特)(財)(祝)(労)(代)(呼)(学)(監)(企)(資)(協)(祭)(休)(自)(至)pte10月11月12月ergltdアールインチウォンオンスオームカイリガロンガンマギニーケースコルナコーポセンチダースノットハイツパーツピクルフランペニヒヘルツペンスページベータボルトポンドホールホーンマイルマッハマルクヤードヤールユアンルピー10点11点12点13点14点15点16点17点18点19点20点21点22点23点24点hpabardm2dm3khzmhzghzthzmm2cm2km2mm3cm3km3kpampagpalogmilmolppmv∕ma∕m10日11日12日13日14日15日16日17日18日19日20日21日22日23日24日25日26日27日28日29日30日31日galffifflשּׁשּׂ ٌّ ٍّ َّ ُّ ِّ ّٰـَّـُّـِّتجمتحجتحمتخمتمجتمحتمخجمححميحمىسحجسجحسجىسمحسمجسممصححصممشحمشجيشمخشممضحىضخمطمحطممطميعجمعممعمىغممغميغمىفخمقمحقمملحملحيلحىلججلخملمحمحجمحيمجحمجممخممجخهمجهممنحمنحىنجمنجىنمينمىيممبخيتجيتجىتخيتخىتميتمىجميجحىجمىسخىصحيشحيضحيلجيلمييحييجييميمميقمينحيعميكمينجحمخيلجمكممجحيحجيمجيفميبحيسخينجيصلےقلے〔s〕ppv〔本〕〔三〕〔二〕〔安〕〔点〕〔打〕〔盗〕〔勝〕〔敗〕 ̄ ́ ̧ssi̇ijl·ʼndžljnjdz ̆ ̇ ̊ ̨ ̃ ̋ ιեւاٴوٴۇٴيٴक़ख़ग़ज़ड़ढ़फ़य़ড়ঢ়য়ਲ਼ਸ਼ਖ਼ਗ਼ਜ਼ਫ਼ଡ଼ଢ଼ําໍາຫນຫມགྷཌྷདྷབྷཛྷཀྵཱཱིུྲྀླྀྒྷྜྷྡྷྦྷྫྷྐྵaʾἀιἁιἂιἃιἄιἅιἆιἇιἠιἡιἢιἣιἤιἥιἦιἧιὠιὡιὢιὣιὤιὥιὦιὧιὰιαιάιᾶι ͂ὴιηιήιῆιὼιωιώιῶι ̳!! ̅???!!?rs°c°fnosmtmivix⫝̸ ゙ ゚よりコト333435참고주의363738394042444546474849503月4月5月6月7月8月9月hgev令和ギガデシドルナノピコビルペソホンリラレムdaauovpciu平成昭和大正明治naμakakbmbgbpfnfμfμgmgμlmldlklfmnmμmpsnsμsmsnvμvkvpwnwμwmwkwkωmωbqcccddbgyhainkkktlnlxphprsrsvwb𤋮𢡊𢡄𣏕𥉉𥳐𧻓stմնմեմիվնմխיִײַשׁשׂאַאָאּבּגּדּהּוּזּטּיּךּכּלּמּנּסּףּפּצּקּרּתּוֹבֿכֿפֿאלئائەئوئۇئۆئۈئېئىئجئحئمئيبجبمبىبيتىتيثجثمثىثيخحضجضمطحظمغجفجفحفىفيقحقىقيكاكجكحكخكلكىكينخنىنيهجهىهييىذٰرٰىٰئرئزئنبزبنترتزتنثرثزثنمانرنزننيريزئخئهبهتهصخنههٰثهسهشهطىطيعىعيغىغيسىسيشىشيصىصيضىضيشخشرسرصرضراً ًـًـّ ْـْلآلألإ𐐨𐐩𐐪𐐫𐐬𐐭𐐮𐐯𐐰𐐱𐐲𐐳𐐴𐐵𐐶𐐷𐐸𐐹𐐺𐐻𐐼𐐽𐐾𐐿𐑀𐑁𐑂𐑃𐑄𐑅𐑆𐑇𐑈𐑉𐑊𐑋𐑌𐑍𐑎𐑏𐓘𐓙𐓚𐓛𐓜𐓝𐓞𐓟𐓠𐓡𐓢𐓣𐓤𐓥𐓦𐓧𐓨𐓩𐓪𐓫𐓬𐓭𐓮𐓯𐓰𐓱𐓲𐓳𐓴𐓵𐓶𐓷𐓸𐓹𐓺𐓻𐳀𐳁𐳂𐳃𐳄𐳅𐳆𐳇𐳈𐳉𐳊𐳋𐳌𐳍𐳎𐳏𐳐𐳑𐳒𐳓𐳔𐳕𐳖𐳗𐳘𐳙𐳚𐳛𐳜𐳝𐳞𐳟𐳠𐳡𐳢𐳣𐳤𐳥𐳦𐳧𐳨𐳩𐳪𐳫𐳬𐳭𐳮𐳯𐳰𐳱𐳲𑣀𑣁𑣂𑣃𑣄𑣅𑣆𑣇𑣈𑣉𑣊𑣋𑣌𑣍𑣎𑣏𑣐𑣑𑣒𑣓𑣔𑣕𑣖𑣗𑣘𑣙𑣚𑣛𑣜𑣝𑣞𑣟𖹠𖹡𖹢𖹣𖹤𖹥𖹦𖹧𖹨𖹩𖹪𖹫𖹬𖹭𖹮𖹯𖹰𖹱𖹲𖹳𖹴𖹵𖹶𖹷𖹸𖹹𖹺𖹻𖹼𖹽𖹾𖹿𞤢𞤣𞤤𞤥𞤦𞤧𞤨𞤩𞤪𞤫𞤬𞤭𞤮𞤯𞤰𞤱𞤲𞤳𞤴𞤵𞤶𞤷𞤸𞤹𞤺𞤻𞤼𞤽𞤾𞤿𞥀𞥁𞥂𞥃0,1,2,3,4,5,6,7,8,9,wzhvsdwcmcmdmrdjほかココ𠄢𠘺𠔜𠕋𩇟𠨬𠭣𡓤𡚨𡛪𡧈𡬘𡷤𡷦𢆃𪎒𢌱𣊸𦇚𢛔𢬌𢯱𣀊𣏃𣑭𣚣𣢧𣪍𡴋𣫺𣲼𣴞𣻑𣽞𣾎𠔥𤉣𤘈𤜵𤠔𤰶𤲒𢆟𤾡𤾸𥁄𥃳𥃲𥄙𥄳𥐝𥘦𥚚𥛅𥥼𥪧𥮫𥲀𥾆𦈨𦉇𦋙𦌾𦓚𦔣𦖨𣍟𦞧𦞵𣎓𣎜𦬼𦰶𦵫𦳕𧏊𦼬𦾱𧃒𧙧𧢮𧥦𧲨𧼯𠠄𠣞𨗒𨗭𨜮𨯺𨵷𩅅𩈚𩐊𩒖𩖶𩬰𪃎𪄅𪈎𪊑𪘀àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįĵķĺļľłńņňŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷÿźżɓƃƅɔƈɖɗƌǝəɛƒɠɣɩɨƙɯɲɵơƣƥʀƨʃƭʈưʊʋƴƶʒƹƽǎǐǒǔǖǘǚǜǟǡǣǥǧǩǫǭǯǵƕƿǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟƞȣȥȧȩȫȭȯȱȳⱥȼƚⱦɂƀʉʌɇɉɋɍɏɦɹɻʁʕͱͳʹͷ;ϳέίόύβγδεζθκλνξοπρστυφχψϊϋϗϙϛϝϟϡϣϥϧϩϫϭϯϸϻͻͼͽѐёђѓєѕіїјљњћќѝўџабвгдежзийклмнопрстуфхцчшщъыьэюяѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯաբգդզէըթժլծկհձղճյշոչպջռստրցփքօֆ་ⴧⴭნᏰᏱᏲᏳᏴᏵꙋაბგდევზთიკლმოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶჷჸჹჺჽჾჿɐɑᴂɜᴖᴗᴝᴥɒɕɟɡɥɪᵻʝɭᶅʟɱɰɳɴɸʂƫᴜʐʑḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿἐἑἒἓἔἕἰἱἲἳἴἵἶἷὀὁὂὃὄὅὑὓὕὗᾰᾱὲΐῐῑὶΰῠῡὺῥ`ὸ‐+−∑〈〉ⰰⰱⰲⰳⰴⰵⰶⰷⰸⰹⰺⰻⰼⰽⰾⰿⱀⱁⱂⱃⱄⱅⱆⱇⱈⱉⱊⱋⱌⱍⱎⱏⱐⱑⱒⱓⱔⱕⱖⱗⱘⱙⱚⱛⱜⱝⱞⱡɫᵽɽⱨⱪⱬⱳⱶȿɀⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳬⳮⳳⵡ母龟丨丶丿乙亅亠人儿入冂冖冫几凵刀力勹匕匚匸卜卩厂厶又口囗士夂夊夕女子宀寸小尢尸屮山巛工己巾干幺广廴廾弋弓彐彡彳心戈戶手支攴文斗斤方无曰欠止歹殳毋比毛氏气爪父爻爿片牙牛犬玄玉瓜瓦甘生用田疋疒癶白皮皿目矛矢石示禸禾穴立竹米糸缶网羊羽老而耒耳聿肉臣臼舌舛舟艮色艸虍虫血行衣襾見角言谷豆豕豸貝赤走足身車辛辰辵邑酉釆里長門阜隶隹雨靑非面革韋韭音頁風飛食首香馬骨高髟鬥鬯鬲鬼魚鳥鹵鹿麥麻黃黍黑黹黽鼎鼓鼠鼻齊齒龍龜龠.〒卄卅ᄁᆪᆬᆭᄄᆰᆱᆲᆳᆴᆵᄚᄈᄡᄊ짜ᅢᅣᅤᅥᅦᅧᅨᅩᅪᅫᅬᅭᅮᅯᅰᅱᅲᅳᅴᅵᄔᄕᇇᇈᇌᇎᇓᇗᇙᄜᇝᇟᄝᄞᄠᄢᄣᄧᄩᄫᄬᄭᄮᄯᄲᄶᅀᅇᅌᇱᇲᅗᅘᅙᆄᆅᆈᆑᆒᆔᆞᆡ上中下甲丙丁天地問幼箏우秘男適優印注項写左右医宗夜テヌモヨヰヱヲꙁꙃꙅꙇꙉꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝺꝼᵹꝿꞁꞃꞅꞇꞌꞑꞓꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩɬʞʇꭓꞵꞷꞹꞻꞽꞿꟃꞔᶎꟈꟊꟶꬷꭒʍᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯ豈更賈滑串句契喇奈懶癩羅蘿螺裸邏樂洛烙珞落酪駱亂卵欄爛蘭鸞嵐濫藍襤拉臘蠟廊朗浪狼郎來冷勞擄櫓爐盧蘆虜路露魯鷺碌祿綠菉錄論壟弄籠聾牢磊賂雷壘屢樓淚漏累縷陋勒肋凜凌稜綾菱陵讀拏諾丹寧怒率異北磻便復不泌數索參塞省葉說殺沈拾若掠略亮兩凉梁糧良諒量勵呂廬旅濾礪閭驪麗黎曆歷轢年憐戀撚漣煉璉秊練聯輦蓮連鍊列劣咽烈裂廉念捻殮簾獵囹嶺怜玲瑩羚聆鈴零靈領例禮醴隸惡了僚寮尿料燎療蓼遼暈阮劉杻柳流溜琉留硫紐類戮陸倫崙淪輪律慄栗隆利吏履易李梨泥理痢罹裏裡離匿溺吝燐璘藺隣鱗麟林淋臨笠粒狀炙識什茶刺切度拓糖宅洞暴輻降廓兀嗀塚晴凞猪益礼神祥福靖精蘒諸逸都飯飼館鶴郞隷侮僧免勉勤卑喝嘆器塀墨層悔慨憎懲敏既暑梅海渚漢煮爫琢碑祉祈祐祖禍禎穀突節縉繁署者臭艹著褐視謁謹賓贈辶難響頻恵舘並况全侀充冀勇勺啕喙嗢墳奄奔婢嬨廒廙彩徭惘慎愈慠戴揄搜摒敖望杖滛滋瀞瞧爵犯瑱甆画瘝瘟盛直睊着磌窱类絛缾荒華蝹襁覆調請諭變輸遲醙鉶陼韛頋鬒㮝䀘䀹齃龎עםٱٻپڀٺٿٹڤڦڄڃچڇڍڌڎڈژڑکگڳڱںڻۀہھۓڭۋۅۉ、〖〗—–_{}【】《》「」『』[]#&*-<>\\$%@ءؤة\"'^|~⦅⦆・ゥャ¢£¬¦¥₩│←↑→↓■○ıȷ∇∂ٮڡٯ字双多解交映無前後再新初終販声吹演投捕遊指禁空合満申割営配得可丽丸乁你侻倂偺備像㒞兔兤具㒹內冗冤仌冬刃㓟刻剆剷㔕包匆卉博即卽卿灰及叟叫叱吆咞吸呈周咢哶唐啓啣善喫喳嗂圖圗噑噴壮城埴堍型堲報墬売壷夆夢奢姬娛娧姘婦㛮嬈嬾寃寘寳寿将㞁屠峀岍嵃嵮嵫嵼巡巢㠯巽帨帽幩㡢㡼庰庳庶舁弢㣇形彫㣣徚忍志忹悁㤺㤜惇慈慌慺憲憤憯懞戛扝抱拔捐挽拼捨掃揤搢揅掩㨮摩摾撝摷㩬敬旣書晉㬙㬈㫤冒冕最暜肭䏙朡杞杓㭉柺枅桒梎栟椔楂榣槪檨櫛㰘次歔㱎歲殟殻汎沿泍汧洖派浩浸涅洴港湮㴳滇淹潮濆瀹瀛㶖灊災灷炭煅熜爨牐犀犕獺王㺬玥㺸瑇瑜璅瓊㼛甤甾瘐㿼䀈眞真瞋䁆䂖硎䃣秫䄯穊穏䈂篆築䈧糒䊠糨糣紀絣䌁緇縂繅䌴䍙罺羕翺聠聰䏕育脃䐋脾媵舄辞䑫芑芋芝劳花芳芽苦茝荣莭茣莽菧荓菊菌菜䔫蓱蓳蔖蕤䕝䕡䕫虐虧虩蚩蚈蜎蛢蜨蝫螆蟡蠁䗹衠裗裞䘵裺㒻䚾䛇誠貫賁贛起跋趼跰軔邔郱鄑鄛鈸鋗鋘鉼鏹鐕開䦕閷䧦雃嶲霣䩮䩶韠䪲頩飢䬳餩馧駂駾䯎鱀鳽䳎䳭鵧䳸䵖黾鼅鼏鼖";
        function I(T) {
          return T >= 196608 ? T >= 917760 && T <= 917999 ? 18874368 : 0 : g[b[T >> 4]][T & 15];
        }
        return {
          mapStr: y,
          mapChar: I
        };
      });
    })(p), function(x, k) {
      (function(g, b) {
        x.exports = b(o.default, p.exports);
      })(D, function(g, b) {
        function y(Du, Z, au) {
          const h = [], e = g.ucs2.decode(Du);
          for (let s = 0; s < e.length; s++) {
            const f = e[s], A = g.ucs2.encode([e[s]]), C = b.mapChar(f), B = C >> 23, F = C >> 21 & 3, t = C >> 5 & 65535, l = C & 31, R = b.mapStr.substr(t, l);
            if (F === 0 || Z && B & 1)
              throw new Error("Illegal char " + A);
            F === 1 ? h.push(R) : F === 2 ? h.push(au ? R : A) : F === 3 && h.push(A);
          }
          return h.join("").normalize("NFC");
        }
        function I(Du, Z, au) {
          au === void 0 && (au = !1);
          let e = y(Du, au, Z).split(".");
          return e = e.map(function(a) {
            return a.startsWith("xn--") ? (a = g.decode(a.substring(4)), T(a, au, !1)) : T(a, au, Z), a;
          }), e.join(".");
        }
        function T(Du, Z, au) {
          if (Du[2] === "-" && Du[3] === "-")
            throw new Error("Failed to validate " + Du);
          if (Du.startsWith("-") || Du.endsWith("-"))
            throw new Error("Failed to validate " + Du);
          if (Du.includes("."))
            throw new Error("Failed to validate " + Du);
          if (y(Du, Z, au) !== Du)
            throw new Error("Failed to validate " + Du);
          const h = Du.codePointAt(0);
          if (b.mapChar(h) & 2 << 23)
            throw new Error("Label contains illegal character: " + h);
        }
        function uu(Du, Z) {
          Z === void 0 && (Z = {});
          const au = "transitional" in Z ? Z.transitional : !0, h = "useStd3ASCII" in Z ? Z.useStd3ASCII : !1, e = "verifyDnsLength" in Z ? Z.verifyDnsLength : !1, s = I(Du, au, h).split(".").map(g.toASCII), f = s.join(".");
          let A;
          if (e) {
            if (f.length < 1 || f.length > 253)
              throw new Error("DNS name has wrong length: " + f);
            for (A = 0; A < s.length; A++) {
              const C = s[A];
              if (C.length < 1 || C.length > 63)
                throw new Error("DNS label has wrong length: " + C);
            }
          }
          return f;
        }
        function J(Du) {
          const Z = Array.isArray(Du);
          Z || (Du = [Du]);
          const au = { IDN: [], PC: [] };
          return Du.forEach((h) => {
            let e, a;
            try {
              e = uu(h, {
                transitional: !h.match(/\.(?:be|ca|de|fr|pm|re|swiss|tf|wf|yt)\.?$/)
              }), a = {
                PC: e,
                IDN: nu(e)
              };
            } catch {
              a = {
                PC: h,
                IDN: h
              };
            }
            au.PC.push(a.PC), au.IDN.push(a.IDN);
          }), Z ? au : { IDN: au.IDN[0], PC: au.PC[0] };
        }
        function nu(Du, Z) {
          Z === void 0 && (Z = {});
          const au = "useStd3ASCII" in Z ? Z.useStd3ASCII : !1;
          return I(Du, !1, au);
        }
        return {
          toUnicode: nu,
          toAscii: uu,
          convert: J
        };
      });
    }(c);
    var v = E.exports.keccak_256, m = c.exports;
    function M(x) {
      for (var k = "", g = 0; g < 32; g++)
        k += "00";
      var b = _(x);
      if (b)
        for (var y = b.split("."), g = y.length - 1; g >= 0; g--) {
          var I = v(y[g]);
          k = v(new N.Buffer(k + I, "hex"));
        }
      return "0x" + k;
    }
    function _(x) {
      return x && m.toUnicode(x, { useStd3ASCII: !0, transitional: !1 });
    }
    var O = {
      hash: M,
      normalize: _
    };
    return O;
  });
})(O4);
var ar;
(function(u) {
  u[u.ZERO_ERROR = 0] = "ZERO_ERROR", u[u.SUCCESS = 1] = "SUCCESS", u[u.FAILURE = 2] = "FAILURE", u[u.INVALID_FORMAT_ERROR = 3] = "INVALID_FORMAT_ERROR", u[u.ILLEGAL_ARGUMENT_ERROR = 4] = "ILLEGAL_ARGUMENT_ERROR", u[u.MEMORY_ALLOCATION_ERROR = 5] = "MEMORY_ALLOCATION_ERROR";
})(ar || (ar = {}));
var or;
(function(u) {
  u[u.ASCII = 268435456] = "ASCII", u[u.SINGLE_SCRIPT_RESTRICTIVE = 536870912] = "SINGLE_SCRIPT_RESTRICTIVE", u[u.HIGHLY_RESTRICTIVE = 805306368] = "HIGHLY_RESTRICTIVE", u[u.MODERATELY_RESTRICTIVE = 1073741824] = "MODERATELY_RESTRICTIVE", u[u.MINIMALLY_RESTRICTIVE = 1342177280] = "MINIMALLY_RESTRICTIVE", u[u.UNRESTRICTIVE = 1610612736] = "UNRESTRICTIVE", u[u.RESTRICTION_LEVEL_MASK = 2130706432] = "RESTRICTION_LEVEL_MASK", u[u.UNDEFINED_RESTRICTIVE = -1] = "UNDEFINED_RESTRICTIVE";
})(or || (or = {}));
var sr;
(function(u) {
  u[u.SINGLE_SCRIPT_CONFUSABLE = 1] = "SINGLE_SCRIPT_CONFUSABLE", u[u.MIXED_SCRIPT_CONFUSABLE = 2] = "MIXED_SCRIPT_CONFUSABLE", u[u.WHOLE_SCRIPT_CONFUSABLE = 4] = "WHOLE_SCRIPT_CONFUSABLE", u[u.CONFUSABLE = 7] = "CONFUSABLE", u[u.RESTRICTION_LEVEL = 16] = "RESTRICTION_LEVEL", u[u.INVISIBLE = 32] = "INVISIBLE", u[u.CHAR_LIMIT = 64] = "CHAR_LIMIT", u[u.MIXED_NUMBERS = 128] = "MIXED_NUMBERS", u[u.ALL_CHECKS = 65535] = "ALL_CHECKS";
})(sr || (sr = {}));
var fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof N.global < "u" ? N.global : typeof self < "u" ? self : {};
function r0(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function Yu(u, r) {
  return r = { exports: {} }, u(r, r.exports), r.exports;
}
var Nu = Yu(function(u) {
  function r(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(Nu);
var M1 = function(u) {
  return u && u.Math == Math && u;
}, vu = (
  // eslint-disable-next-line es/no-global-this -- safe
  M1(typeof globalThis == "object" && globalThis) || M1(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  M1(typeof self == "object" && self) || M1(typeof fr == "object" && fr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ue = Function.prototype, Fr = Ue.apply, k4 = Ue.bind, lr = Ue.call, Xt = typeof Reflect == "object" && Reflect.apply || (k4 ? lr.bind(Fr) : function() {
  return lr.apply(Fr, arguments);
}), Qt = Function.prototype, J9 = Qt.bind, X9 = Qt.call, N4 = J9 && J9.bind(X9), Hu = J9 ? function(u) {
  return u && N4(X9, u);
} : function(u) {
  return u && function() {
    return X9.apply(u, arguments);
  };
}, Qu = function(u) {
  return typeof u == "function";
}, Ju = function(u) {
  try {
    return !!u();
  } catch {
    return !0;
  }
}, u0 = !Ju(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), t1 = Function.prototype.call, o0 = t1.bind ? t1.bind(t1) : function() {
  return t1.apply(t1, arguments);
}, u6 = {}.propertyIsEnumerable, e6 = Object.getOwnPropertyDescriptor, P4 = e6 && !u6.call({ 1: 2 }, 1), R4 = P4 ? function(r) {
  var n = e6(this, r);
  return !!n && n.enumerable;
} : u6, Te = {
  f: R4
}, M2 = function(u, r) {
  return {
    enumerable: !(u & 1),
    configurable: !(u & 2),
    writable: !(u & 4),
    value: r
  };
}, L4 = Hu({}.toString), $4 = Hu("".slice), V0 = function(u) {
  return $4(L4(u), 8, -1);
}, p9 = vu.Object, H4 = Hu("".split), Oe = Ju(function() {
  return !p9("z").propertyIsEnumerable(0);
}) ? function(u) {
  return V0(u) == "String" ? H4(u, "") : p9(u);
} : p9, j4 = vu.TypeError, d1 = function(u) {
  if (u == null)
    throw j4("Can't call method on " + u);
  return u;
}, b0 = function(u) {
  return Oe(d1(u));
}, s0 = function(u) {
  return typeof u == "object" ? u !== null : Qu(u);
}, Wu = {}, Ar = function(u) {
  return Qu(u) ? u : void 0;
}, p1 = function(u, r) {
  return arguments.length < 2 ? Ar(Wu[u]) || Ar(vu[u]) : Wu[u] && Wu[u][r] || vu[u] && vu[u][r];
}, B0 = Hu({}.isPrototypeOf), L2 = p1("navigator", "userAgent") || "", hr = vu.process, Er = vu.Deno, cr = hr && hr.versions || Er && Er.version, Cr = cr && cr.v8, y0, P1;
Cr && (y0 = Cr.split("."), P1 = y0[0] > 0 && y0[0] < 4 ? 1 : +(y0[0] + y0[1]));
!P1 && L2 && (y0 = L2.match(/Edge\/(\d+)/), (!y0 || y0[1] >= 74) && (y0 = L2.match(/Chrome\/(\d+)/), y0 && (P1 = +y0[1])));
var n2 = P1, $0 = !!Object.getOwnPropertySymbols && !Ju(function() {
  var u = Symbol();
  return !String(u) || !(Object(u) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && n2 && n2 < 41;
}), ke = $0 && !Symbol.sham && typeof Symbol.iterator == "symbol", V4 = vu.Object, V2 = ke ? function(u) {
  return typeof u == "symbol";
} : function(u) {
  var r = p1("Symbol");
  return Qu(r) && B0(r.prototype, V4(u));
}, K4 = vu.String, r6 = function(u) {
  try {
    return K4(u);
  } catch {
    return "Object";
  }
}, G4 = vu.TypeError, B1 = function(u) {
  if (Qu(u))
    return u;
  throw G4(r6(u) + " is not a function");
}, R1 = function(u, r) {
  var n = u[r];
  return n == null ? void 0 : B1(n);
}, z4 = vu.TypeError, q4 = function(u, r) {
  var n, i;
  if (Qu(n = u.toString) && !s0(i = o0(n, u)) || Qu(n = u.valueOf) && !s0(i = o0(n, u)))
    return i;
  throw z4("Can't convert object to primitive value");
}, Z4 = Object.defineProperty, W4 = function(u, r) {
  try {
    Z4(vu, u, { value: r, configurable: !0, writable: !0 });
  } catch {
    vu[u] = r;
  }
  return r;
}, dr = "__core-js_shared__", Y4 = vu[dr] || W4(dr, {}), t2 = Y4, U2 = Yu(function(u) {
  (u.exports = function(r, n) {
    return t2[r] || (t2[r] = n !== void 0 ? n : {});
  })("versions", []).push({
    version: "3.18.3",
    mode: "pure",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
}), J4 = vu.Object, i2 = function(u) {
  return J4(d1(u));
}, X4 = Hu({}.hasOwnProperty), Lu = Object.hasOwn || function(r, n) {
  return X4(i2(r), n);
}, Q4 = 0, uD = Math.random(), eD = Hu(1 .toString), L1 = function(u) {
  return "Symbol(" + (u === void 0 ? "" : u) + ")_" + eD(++Q4 + uD, 36);
}, O2 = U2("wks"), b2 = vu.Symbol, pr = b2 && b2.for, rD = ke ? b2 : b2 && b2.withoutSetter || L1, qu = function(u) {
  if (!Lu(O2, u) || !($0 || typeof O2[u] == "string")) {
    var r = "Symbol." + u;
    $0 && Lu(b2, u) ? O2[u] = b2[u] : ke && pr ? O2[u] = pr(r) : O2[u] = rD(r);
  }
  return O2[u];
}, tD = vu.TypeError, nD = qu("toPrimitive"), DD = function(u, r) {
  if (!s0(u) || V2(u))
    return u;
  var n = R1(u, nD), i;
  if (n) {
    if (i = o0(n, u, r), !s0(i) || V2(i))
      return i;
    throw tD("Can't convert object to primitive value");
  }
  return q4(u);
}, Q2 = function(u) {
  var r = DD(u, "string");
  return V2(r) ? r : r + "";
}, Q9 = vu.document, iD = s0(Q9) && s0(Q9.createElement), t6 = function(u) {
  return iD ? Q9.createElement(u) : {};
}, n6 = !u0 && !Ju(function() {
  return Object.defineProperty(t6("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), Br = Object.getOwnPropertyDescriptor, aD = u0 ? Br : function(r, n) {
  if (r = b0(r), n = Q2(n), n6)
    try {
      return Br(r, n);
    } catch {
    }
  if (Lu(r, n))
    return M2(!o0(Te.f, r, n), r[n]);
}, Ne = {
  f: aD
}, oD = /#|\.prototype\./, v1 = function(u, r) {
  var n = fD[sD(u)];
  return n == lD ? !0 : n == FD ? !1 : Qu(r) ? Ju(r) : !!r;
}, sD = v1.normalize = function(u) {
  return String(u).replace(oD, ".").toLowerCase();
}, fD = v1.data = {}, FD = v1.NATIVE = "N", lD = v1.POLYFILL = "P", AD = v1, vr = Hu(Hu.bind), Pe = function(u, r) {
  return B1(u), r === void 0 ? u : vr ? vr(u, r) : function() {
    return u.apply(r, arguments);
  };
}, hD = vu.String, ED = vu.TypeError, v0 = function(u) {
  if (s0(u))
    return u;
  throw ED(hD(u) + " is not an object");
}, cD = vu.TypeError, mr = Object.defineProperty, CD = u0 ? mr : function(r, n, i) {
  if (v0(r), n = Q2(n), v0(i), n6)
    try {
      return mr(r, n, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw cD("Accessors not supported");
  return "value" in i && (r[n] = i.value), r;
}, a2 = {
  f: CD
}, N0 = u0 ? function(u, r, n) {
  return a2.f(u, r, M2(1, n));
} : function(u, r, n) {
  return u[r] = n, u;
}, dD = Ne.f, pD = function(u) {
  var r = function(n, i, o) {
    if (this instanceof r) {
      switch (arguments.length) {
        case 0:
          return new u();
        case 1:
          return new u(n);
        case 2:
          return new u(n, i);
      }
      return new u(n, i, o);
    }
    return Xt(u, this, arguments);
  };
  return r.prototype = u.prototype, r;
}, Ku = function(u, r) {
  var n = u.target, i = u.global, o = u.stat, D = u.proto, E = i ? vu : o ? vu[n] : (vu[n] || {}).prototype, c = i ? Wu : Wu[n] || N0(Wu, n, {})[n], p = c.prototype, v, m, M, _, O, x, k, g, b;
  for (_ in r)
    v = AD(i ? _ : n + (o ? "." : "#") + _, u.forced), m = !v && E && Lu(E, _), x = c[_], m && (u.noTargetGet ? (b = dD(E, _), k = b && b.value) : k = E[_]), O = m && k ? k : r[_], !(m && typeof x == typeof O) && (u.bind && m ? g = Pe(O, vu) : u.wrap && m ? g = pD(O) : D && Qu(O) ? g = Hu(O) : g = O, (u.sham || O && O.sham || x && x.sham) && N0(g, "sham", !0), N0(c, _, g), D && (M = n + "Prototype", Lu(Wu, M) || N0(Wu, M, {}), N0(Wu[M], _, O), u.real && p && !p[_] && N0(p, _, O)));
};
Ku({ target: "Object", stat: !0, forced: !u0, sham: !u0 }, {
  defineProperty: a2.f
});
var BD = Yu(function(u) {
  var r = Wu.Object, n = u.exports = function(o, D, E) {
    return r.defineProperty(o, D, E);
  };
  r.defineProperty.sham && (n.sham = !0);
}), vD = BD, Z0 = vD, z0 = {}, mD = Hu(Function.toString);
Qu(t2.inspectSource) || (t2.inspectSource = function(u) {
  return mD(u);
});
var D6 = t2.inspectSource, yr = vu.WeakMap, yD = Qu(yr) && /native code/.test(D6(yr)), gr = U2("keys"), s9 = function(u) {
  return gr[u] || (gr[u] = L1(u));
}, m1 = {}, wr = "Object already initialized", ue = vu.TypeError, gD = vu.WeakMap, $1, F1, H1, wD = function(u) {
  return H1(u) ? F1(u) : $1(u, {});
}, xD = function(u) {
  return function(r) {
    var n;
    if (!s0(r) || (n = F1(r)).type !== u)
      throw ue("Incompatible receiver, " + u + " required");
    return n;
  };
};
if (yD || t2.state) {
  var B2 = t2.state || (t2.state = new gD()), bD = Hu(B2.get), xr = Hu(B2.has), _D = Hu(B2.set);
  $1 = function(u, r) {
    if (xr(B2, u))
      throw new ue(wr);
    return r.facade = u, _D(B2, u, r), r;
  }, F1 = function(u) {
    return bD(B2, u) || {};
  }, H1 = function(u) {
    return xr(B2, u);
  };
} else {
  var k2 = s9("state");
  m1[k2] = !0, $1 = function(u, r) {
    if (Lu(u, k2))
      throw new ue(wr);
    return r.facade = u, N0(u, k2, r), r;
  }, F1 = function(u) {
    return Lu(u, k2) ? u[k2] : {};
  }, H1 = function(u) {
    return Lu(u, k2);
  };
}
var u1 = {
  set: $1,
  get: F1,
  has: H1,
  enforce: wD,
  getterFor: xD
}, i6 = Function.prototype, MD = u0 && Object.getOwnPropertyDescriptor, Re = Lu(i6, "name"), ID = Re && (function() {
}).name === "something", SD = Re && (!u0 || u0 && MD(i6, "name").configurable), UD = {
  EXISTS: Re,
  PROPER: ID,
  CONFIGURABLE: SD
}, TD = Math.ceil, OD = Math.floor, Le = function(u) {
  var r = +u;
  return r !== r || r === 0 ? 0 : (r > 0 ? OD : TD)(r);
}, kD = Math.max, ND = Math.min, ee = function(u, r) {
  var n = Le(u);
  return n < 0 ? kD(n + r, 0) : ND(n, r);
}, PD = Math.min, RD = function(u) {
  return u > 0 ? PD(Le(u), 9007199254740991) : 0;
}, T2 = function(u) {
  return RD(u.length);
}, br = function(u) {
  return function(r, n, i) {
    var o = b0(r), D = T2(o), E = ee(i, D), c;
    if (u && n != n) {
      for (; D > E; )
        if (c = o[E++], c != c)
          return !0;
    } else
      for (; D > E; E++)
        if ((u || E in o) && o[E] === n)
          return u || E || 0;
    return !u && -1;
  };
}, $e = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: br(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: br(!1)
}, LD = $e.indexOf, _r = Hu([].push), a6 = function(u, r) {
  var n = b0(u), i = 0, o = [], D;
  for (D in n)
    !Lu(m1, D) && Lu(n, D) && _r(o, D);
  for (; r.length > i; )
    Lu(n, D = r[i++]) && (~LD(o, D) || _r(o, D));
  return o;
}, j1 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], He = Object.keys || function(r) {
  return a6(r, j1);
}, $D = u0 ? Object.defineProperties : function(r, n) {
  v0(r);
  for (var i = b0(n), o = He(n), D = o.length, E = 0, c; D > E; )
    a2.f(r, c = o[E++], i[c]);
  return r;
}, HD = p1("document", "documentElement"), Mr = ">", Ir = "<", re = "prototype", te = "script", o6 = s9("IE_PROTO"), B9 = function() {
}, s6 = function(u) {
  return Ir + te + Mr + u + Ir + "/" + te + Mr;
}, Sr = function(u) {
  u.write(s6("")), u.close();
  var r = u.parentWindow.Object;
  return u = null, r;
}, jD = function() {
  var u = t6("iframe"), r = "java" + te + ":", n;
  return u.style.display = "none", HD.appendChild(u), u.src = String(r), n = u.contentWindow.document, n.open(), n.write(s6("document.F=Object")), n.close(), n.F;
}, I1, T1 = function() {
  try {
    I1 = new ActiveXObject("htmlfile");
  } catch {
  }
  T1 = typeof document < "u" ? document.domain && I1 ? Sr(I1) : jD() : Sr(I1);
  for (var u = j1.length; u--; )
    delete T1[re][j1[u]];
  return T1();
};
m1[o6] = !0;
var D2 = Object.create || function(r, n) {
  var i;
  return r !== null ? (B9[re] = v0(r), i = new B9(), B9[re] = null, i[o6] = r) : i = T1(), n === void 0 ? i : $D(i, n);
}, VD = !Ju(function() {
  function u() {
  }
  return u.prototype.constructor = null, Object.getPrototypeOf(new u()) !== u.prototype;
}), Ur = s9("IE_PROTO"), ne = vu.Object, KD = ne.prototype, De = VD ? ne.getPrototypeOf : function(u) {
  var r = i2(u);
  if (Lu(r, Ur))
    return r[Ur];
  var n = r.constructor;
  return Qu(n) && r instanceof n ? n.prototype : r instanceof ne ? KD : null;
}, V1 = function(u, r, n, i) {
  N0(u, r, n);
}, ie = qu("iterator"), f6 = !1, K0, v9, m9;
[].keys && (m9 = [].keys(), "next" in m9 ? (v9 = De(De(m9)), v9 !== Object.prototype && (K0 = v9)) : f6 = !0);
var GD = K0 == null || Ju(function() {
  var u = {};
  return K0[ie].call(u) !== u;
});
GD ? K0 = {} : K0 = D2(K0);
Qu(K0[ie]) || V1(K0, ie, function() {
  return this;
});
var F6 = {
  IteratorPrototype: K0,
  BUGGY_SAFARI_ITERATORS: f6
}, zD = qu("toStringTag"), l6 = {};
l6[zD] = "z";
var je = String(l6) === "[object z]", qD = qu("toStringTag"), ZD = vu.Object, WD = V0(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", YD = function(u, r) {
  try {
    return u[r];
  } catch {
  }
}, e1 = je ? V0 : function(u) {
  var r, n, i;
  return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (n = YD(r = ZD(u), qD)) == "string" ? n : WD ? V0(r) : (i = V0(r)) == "Object" && Qu(r.callee) ? "Arguments" : i;
}, JD = je ? {}.toString : function() {
  return "[object " + e1(this) + "]";
}, XD = a2.f, Tr = qu("toStringTag"), f9 = function(u, r, n, i) {
  if (u) {
    var o = n ? u : u.prototype;
    Lu(o, Tr) || XD(o, Tr, { configurable: !0, value: r }), i && !je && N0(o, "toString", JD);
  }
}, QD = F6.IteratorPrototype, ui = function() {
  return this;
}, ei = function(u, r, n) {
  var i = r + " Iterator";
  return u.prototype = D2(QD, { next: M2(1, n) }), f9(u, i, !1, !0), z0[i] = ui, u;
}, ri = vu.String, ti = vu.TypeError, ni = function(u) {
  if (typeof u == "object" || Qu(u))
    return u;
  throw ti("Can't set " + ri(u) + " as a prototype");
};
Object.setPrototypeOf || "__proto__" in {} && function() {
  var u = !1, r = {}, n;
  try {
    n = Hu(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), n(r, []), u = r instanceof Array;
  } catch {
  }
  return function(o, D) {
    return v0(o), ni(D), u ? n(o, D) : o.__proto__ = D, o;
  };
}();
var Di = UD.PROPER, y9 = F6.BUGGY_SAFARI_ITERATORS, ii = qu("iterator"), Or = "keys", S1 = "values", kr = "entries", ai = function() {
  return this;
}, A6 = function(u, r, n, i, o, D, E) {
  ei(n, r, i);
  var c = function(g) {
    if (g === o && _)
      return _;
    if (!y9 && g in m)
      return m[g];
    switch (g) {
      case Or:
        return function() {
          return new n(this, g);
        };
      case S1:
        return function() {
          return new n(this, g);
        };
      case kr:
        return function() {
          return new n(this, g);
        };
    }
    return function() {
      return new n(this);
    };
  }, p = r + " Iterator", v = !1, m = u.prototype, M = m[ii] || m["@@iterator"] || o && m[o], _ = !y9 && M || c(o), O = r == "Array" && m.entries || M, x, k;
  return O && (x = De(O.call(new u())), x !== Object.prototype && x.next && (f9(x, p, !0, !0), z0[p] = ai)), Di && o == S1 && M && M.name !== S1 && (v = !0, _ = function() {
    return o0(M, this);
  }), o && (k = {
    values: c(S1),
    keys: c(Or),
    entries: c(kr)
  }, Ku({ target: r, proto: !0, forced: y9 || v }, k)), z0[r] = _, k;
}, h6 = "Array Iterator", oi = u1.set, si = u1.getterFor(h6);
A6(Array, "Array", function(u, r) {
  oi(this, {
    type: h6,
    target: b0(u),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var u = si(this), r = u.target, n = u.kind, i = u.index++;
  return !r || i >= r.length ? (u.target = void 0, { value: void 0, done: !0 }) : n == "keys" ? { value: i, done: !1 } : n == "values" ? { value: r[i], done: !1 } : { value: [i, r[i]], done: !1 };
}, "values");
z0.Arguments = z0.Array;
var fi = vu.String, H0 = function(u) {
  if (e1(u) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return fi(u);
}, Fi = Hu("".charAt), Nr = Hu("".charCodeAt), li = Hu("".slice), Pr = function(u) {
  return function(r, n) {
    var i = H0(d1(r)), o = Le(n), D = i.length, E, c;
    return o < 0 || o >= D ? u ? "" : void 0 : (E = Nr(i, o), E < 55296 || E > 56319 || o + 1 === D || (c = Nr(i, o + 1)) < 56320 || c > 57343 ? u ? Fi(i, o) : E : u ? li(i, o, o + 2) : (E - 55296 << 10) + (c - 56320) + 65536);
  };
}, Ai = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Pr(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Pr(!0)
}, hi = Ai.charAt, E6 = "String Iterator", Ei = u1.set, ci = u1.getterFor(E6);
A6(String, "String", function(u) {
  Ei(this, {
    type: E6,
    string: H0(u),
    index: 0
  });
}, function() {
  var r = ci(this), n = r.string, i = r.index, o;
  return i >= n.length ? { value: void 0, done: !0 } : (o = hi(n, i), r.index += o.length, { value: o, done: !1 });
});
var Ci = qu("iterator"), Ve = function(u) {
  if (u != null)
    return R1(u, Ci) || R1(u, "@@iterator") || z0[e1(u)];
}, di = vu.TypeError, c6 = function(u, r) {
  var n = arguments.length < 2 ? Ve(u) : r;
  if (B1(n))
    return v0(o0(n, u));
  throw di(r6(u) + " is not iterable");
}, pi = c6, Bi = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, Rr = qu("toStringTag");
for (var g9 in Bi) {
  var Lr = vu[g9], w9 = Lr && Lr.prototype;
  w9 && e1(w9) !== Rr && N0(w9, Rr, g9), z0[g9] = z0.Array;
}
var vi = pi, mi = vi, C6 = mi, I2 = Array.isArray || function(r) {
  return V0(r) == "Array";
};
Ku({ target: "Array", stat: !0 }, {
  isArray: I2
});
var yi = Wu.Array.isArray, d6 = yi, p6 = d6, gi = Ve, wi = gi, xi = wi, Ke = xi, l1 = function(u, r, n) {
  var i = Q2(r);
  i in u ? a2.f(u, i, M2(0, n)) : u[i] = n;
}, B6 = function() {
}, bi = [], v6 = p1("Reflect", "construct"), Ge = /^\s*(?:class|function)\b/, _i = Hu(Ge.exec), Mi = !Ge.exec(B6), n1 = function(u) {
  if (!Qu(u))
    return !1;
  try {
    return v6(B6, bi, u), !0;
  } catch {
    return !1;
  }
}, Ii = function(u) {
  if (!Qu(u))
    return !1;
  switch (e1(u)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  return Mi || !!_i(Ge, D6(u));
}, ze = !v6 || Ju(function() {
  var u;
  return n1(n1.call) || !n1(Object) || !n1(function() {
    u = !0;
  }) || u;
}) ? Ii : n1, Si = qu("species"), $r = vu.Array, Ui = function(u) {
  var r;
  return I2(u) && (r = u.constructor, ze(r) && (r === $r || I2(r.prototype)) ? r = void 0 : s0(r) && (r = r[Si], r === null && (r = void 0))), r === void 0 ? $r : r;
}, m6 = function(u, r) {
  return new (Ui(u))(r === 0 ? 0 : r);
}, Ti = qu("species"), qe = function(u) {
  return n2 >= 51 || !Ju(function() {
    var r = [], n = r.constructor = {};
    return n[Ti] = function() {
      return { foo: 1 };
    }, r[u](Boolean).foo !== 1;
  });
}, y6 = qu("isConcatSpreadable"), Hr = 9007199254740991, jr = "Maximum allowed index exceeded", Vr = vu.TypeError, Oi = n2 >= 51 || !Ju(function() {
  var u = [];
  return u[y6] = !1, u.concat()[0] !== u;
}), ki = qe("concat"), Ni = function(u) {
  if (!s0(u))
    return !1;
  var r = u[y6];
  return r !== void 0 ? !!r : I2(u);
}, Pi = !Oi || !ki;
Ku({ target: "Array", proto: !0, forced: Pi }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var n = i2(this), i = m6(n, 0), o = 0, D, E, c, p, v;
    for (D = -1, c = arguments.length; D < c; D++)
      if (v = D === -1 ? n : arguments[D], Ni(v)) {
        if (p = T2(v), o + p > Hr)
          throw Vr(jr);
        for (E = 0; E < p; E++, o++)
          E in v && l1(i, o, v[E]);
      } else {
        if (o >= Hr)
          throw Vr(jr);
        l1(i, o++, v);
      }
    return i.length = o, i;
  }
});
var Ri = j1.concat("length", "prototype"), Li = Object.getOwnPropertyNames || function(r) {
  return a6(r, Ri);
}, g6 = {
  f: Li
}, A1 = Hu([].slice), w6 = g6.f, x6 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], $i = function(u) {
  try {
    return w6(u);
  } catch {
    return A1(x6);
  }
}, Hi = function(r) {
  return x6 && V0(r) == "Window" ? $i(r) : w6(b0(r));
}, b6 = {
  f: Hi
}, ji = Object.getOwnPropertySymbols, ae = {
  f: ji
}, Vi = qu, _6 = {
  f: Vi
}, Ki = a2.f, Gu = function(u) {
  var r = Wu.Symbol || (Wu.Symbol = {});
  Lu(r, u) || Ki(r, u, {
    value: _6.f(u)
  });
}, Kr = Hu([].push), Y0 = function(u) {
  var r = u == 1, n = u == 2, i = u == 3, o = u == 4, D = u == 6, E = u == 7, c = u == 5 || D;
  return function(p, v, m, M) {
    for (var _ = i2(p), O = Oe(_), x = Pe(v, m), k = T2(O), g = 0, b = M || m6, y = r ? b(p, k) : n || E ? b(p, 0) : void 0, I, T; k > g; g++)
      if ((c || g in O) && (I = O[g], T = x(I, g, _), u))
        if (r)
          y[g] = T;
        else if (T)
          switch (u) {
            case 3:
              return !0;
            case 5:
              return I;
            case 6:
              return g;
            case 2:
              Kr(y, I);
          }
        else
          switch (u) {
            case 4:
              return !1;
            case 7:
              Kr(y, I);
          }
    return D ? -1 : i || o ? o : y;
  };
}, Ze = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: Y0(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: Y0(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: Y0(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: Y0(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: Y0(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: Y0(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: Y0(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: Y0(7)
}, F9 = Ze.forEach, a0 = s9("hidden"), l9 = "Symbol", h1 = "prototype", Gr = qu("toPrimitive"), Gi = u1.set, zr = u1.getterFor(l9), w0 = Object[h1], G0 = vu.Symbol, Q0 = G0 && G0[h1], M6 = vu.TypeError, x9 = vu.QObject, D1 = p1("JSON", "stringify"), I6 = Ne.f, X0 = a2.f, S6 = b6.f, zi = Te.f, U6 = Hu([].push), q0 = U2("symbols"), y1 = U2("op-symbols"), b9 = U2("string-to-symbol-registry"), _9 = U2("symbol-to-string-registry"), qi = U2("wks"), oe = !x9 || !x9[h1] || !x9[h1].findChild, se = u0 && Ju(function() {
  return D2(X0({}, "a", {
    get: function() {
      return X0(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(u, r, n) {
  var i = I6(w0, r);
  i && delete w0[r], X0(u, r, n), i && u !== w0 && X0(w0, r, i);
} : X0, M9 = function(u, r) {
  var n = q0[u] = D2(Q0);
  return Gi(n, {
    type: l9,
    tag: u,
    description: r
  }), u0 || (n.description = r), n;
}, A9 = function(r, n, i) {
  r === w0 && A9(y1, n, i), v0(r);
  var o = Q2(n);
  return v0(i), Lu(q0, o) ? (i.enumerable ? (Lu(r, a0) && r[a0][o] && (r[a0][o] = !1), i = D2(i, { enumerable: M2(0, !1) })) : (Lu(r, a0) || X0(r, a0, M2(1, {})), r[a0][o] = !0), se(r, o, i)) : X0(r, o, i);
}, T6 = function(r, n) {
  v0(r);
  var i = b0(n), o = He(i).concat(We(i));
  return F9(o, function(D) {
    (!u0 || o0(O6, i, D)) && A9(r, D, i[D]);
  }), r;
}, Zi = function(r, n) {
  return n === void 0 ? D2(r) : T6(D2(r), n);
}, O6 = function(r) {
  var n = Q2(r), i = o0(zi, this, n);
  return this === w0 && Lu(q0, n) && !Lu(y1, n) ? !1 : i || !Lu(this, n) || !Lu(q0, n) || Lu(this, a0) && this[a0][n] ? i : !0;
}, k6 = function(r, n) {
  var i = b0(r), o = Q2(n);
  if (!(i === w0 && Lu(q0, o) && !Lu(y1, o))) {
    var D = I6(i, o);
    return D && Lu(q0, o) && !(Lu(i, a0) && i[a0][o]) && (D.enumerable = !0), D;
  }
}, N6 = function(r) {
  var n = S6(b0(r)), i = [];
  return F9(n, function(o) {
    !Lu(q0, o) && !Lu(m1, o) && U6(i, o);
  }), i;
}, We = function(r) {
  var n = r === w0, i = S6(n ? y1 : b0(r)), o = [];
  return F9(i, function(D) {
    Lu(q0, D) && (!n || Lu(w0, D)) && U6(o, q0[D]);
  }), o;
};
$0 || (G0 = function() {
  if (B0(Q0, this))
    throw M6("Symbol is not a constructor");
  var r = !arguments.length || arguments[0] === void 0 ? void 0 : H0(arguments[0]), n = L1(r), i = function(o) {
    this === w0 && o0(i, y1, o), Lu(this, a0) && Lu(this[a0], n) && (this[a0][n] = !1), se(this, n, M2(1, o));
  };
  return u0 && oe && se(w0, n, { configurable: !0, set: i }), M9(n, r);
}, Q0 = G0[h1], V1(Q0, "toString", function() {
  return zr(this).tag;
}), V1(G0, "withoutSetter", function(u) {
  return M9(L1(u), u);
}), Te.f = O6, a2.f = A9, Ne.f = k6, g6.f = b6.f = N6, ae.f = We, _6.f = function(u) {
  return M9(qu(u), u);
}, u0 && X0(Q0, "description", {
  configurable: !0,
  get: function() {
    return zr(this).description;
  }
}));
Ku({ global: !0, wrap: !0, forced: !$0, sham: !$0 }, {
  Symbol: G0
});
F9(He(qi), function(u) {
  Gu(u);
});
Ku({ target: l9, stat: !0, forced: !$0 }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  for: function(u) {
    var r = H0(u);
    if (Lu(b9, r))
      return b9[r];
    var n = G0(r);
    return b9[r] = n, _9[n] = r, n;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function(r) {
    if (!V2(r))
      throw M6(r + " is not a symbol");
    if (Lu(_9, r))
      return _9[r];
  },
  useSetter: function() {
    oe = !0;
  },
  useSimple: function() {
    oe = !1;
  }
});
Ku({ target: "Object", stat: !0, forced: !$0, sham: !u0 }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: Zi,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: A9,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: T6,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: k6
});
Ku({ target: "Object", stat: !0, forced: !$0 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: N6,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: We
});
Ku({ target: "Object", stat: !0, forced: Ju(function() {
  ae.f(1);
}) }, {
  getOwnPropertySymbols: function(r) {
    return ae.f(i2(r));
  }
});
if (D1) {
  var Wi = !$0 || Ju(function() {
    var u = G0();
    return D1([u]) != "[null]" || D1({ a: u }) != "{}" || D1(Object(u)) != "{}";
  });
  Ku({ target: "JSON", stat: !0, forced: Wi }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function(r, n, i) {
      var o = A1(arguments), D = n;
      if (!(!s0(n) && r === void 0 || V2(r)))
        return I2(n) || (n = function(E, c) {
          if (Qu(D) && (c = o0(D, this, E, c)), !V2(c))
            return c;
        }), o[1] = n, Xt(D1, null, o);
    }
  });
}
if (!Q0[Gr]) {
  var Yi = Q0.valueOf;
  V1(Q0, Gr, function(u) {
    return o0(Yi, this);
  });
}
f9(G0, l9);
m1[a0] = !0;
Gu("asyncIterator");
Gu("hasInstance");
Gu("isConcatSpreadable");
Gu("iterator");
Gu("match");
Gu("matchAll");
Gu("replace");
Gu("search");
Gu("species");
Gu("split");
Gu("toPrimitive");
Gu("toStringTag");
Gu("unscopables");
f9(vu.JSON, "JSON", !0);
var Ji = Wu.Symbol, P6 = Ji, R6 = P6, Xi = function(u, r, n) {
  var i;
  v0(u);
  try {
    if (i = R1(u, "return"), !i) {
      if (r === "throw")
        throw n;
      return n;
    }
    i = o0(i, u);
  } catch (o) {
    i = o;
  }
  throw n;
}, Qi = function(u, r, n, i) {
  try {
    return i ? r(v0(n)[0], n[1]) : r(n);
  } catch (o) {
    Xi(u, "throw", o);
  }
}, ua = qu("iterator"), ea = Array.prototype, ra = function(u) {
  return u !== void 0 && (z0.Array === u || ea[ua] === u);
}, qr = vu.Array, ta = function(r) {
  var n = i2(r), i = ze(this), o = arguments.length, D = o > 1 ? arguments[1] : void 0, E = D !== void 0;
  E && (D = Pe(D, o > 2 ? arguments[2] : void 0));
  var c = Ve(n), p = 0, v, m, M, _, O, x;
  if (c && !(this == qr && ra(c)))
    for (_ = c6(n, c), O = _.next, m = i ? new this() : []; !(M = o0(O, _)).done; p++)
      x = E ? Qi(_, D, [M.value, p], !0) : M.value, l1(m, p, x);
  else
    for (v = T2(n), m = i ? new this(v) : qr(v); v > p; p++)
      x = E ? D(n[p], p) : n[p], l1(m, p, x);
  return m.length = p, m;
};
qu("iterator");
var na = function(u, r) {
  return !1;
}, Da = !na();
Ku({ target: "Array", stat: !0, forced: Da }, {
  from: ta
});
var ia = Wu.Array.from, L6 = ia, $6 = L6, W0 = function(u) {
  return Wu[u + "Prototype"];
}, aa = W0("Array").concat, I9 = Array.prototype, oa = function(u) {
  var r = u.concat;
  return u === I9 || B0(I9, u) && r === I9.concat ? aa : r;
}, sa = oa, h9 = sa, E9 = function(u, r) {
  var n = [][u];
  return !!n && Ju(function() {
    n.call(null, r || function() {
      throw 1;
    }, 1);
  });
}, fa = $e.indexOf, fe = Hu([].indexOf), Zr = !!fe && 1 / fe([1], 1, -0) < 0, Fa = E9("indexOf");
Ku({ target: "Array", proto: !0, forced: Zr || !Fa }, {
  indexOf: function(r) {
    var n = arguments.length > 1 ? arguments[1] : void 0;
    return Zr ? fe(this, r, n) || 0 : fa(this, r, n);
  }
});
var la = W0("Array").indexOf, S9 = Array.prototype, Aa = function(u) {
  var r = u.indexOf;
  return u === S9 || B0(S9, u) && r === S9.indexOf ? la : r;
}, ha = Aa, Ea = ha;
Ku({ target: "Object", stat: !0, sham: !u0 }, {
  create: D2
});
var ca = Wu.Object, Ca = function(r, n) {
  return ca.create(r, n);
}, da = Ca, pa = da, Ba = d6, va = Ba, H6 = Yu(function(u) {
  function r(n) {
    if (va(n))
      return n;
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(H6);
Gu("asyncDispose");
Gu("dispose");
Gu("matcher");
Gu("metadata");
Gu("observable");
Gu("patternMatch");
Gu("replaceAll");
var ma = P6, ya = ma, j6 = Yu(function(u) {
  function r(n, i) {
    var o = n == null ? null : typeof ya < "u" && Ke(n) || n["@@iterator"];
    if (o != null) {
      var D = [], E = !0, c = !1, p, v;
      try {
        for (o = o.call(n); !(E = (p = o.next()).done) && (D.push(p.value), !(i && D.length === i)); E = !0)
          ;
      } catch (m) {
        c = !0, v = m;
      } finally {
        try {
          !E && o.return != null && o.return();
        } finally {
          if (c)
            throw v;
        }
      }
      return D;
    }
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(j6);
var ga = qe("slice"), wa = qu("species"), U9 = vu.Array, xa = Math.max;
Ku({ target: "Array", proto: !0, forced: !ga }, {
  slice: function(r, n) {
    var i = b0(this), o = T2(i), D = ee(r, o), E = ee(n === void 0 ? o : n, o), c, p, v;
    if (I2(i) && (c = i.constructor, ze(c) && (c === U9 || I2(c.prototype)) ? c = void 0 : s0(c) && (c = c[wa], c === null && (c = void 0)), c === U9 || c === void 0))
      return A1(i, D, E);
    for (p = new (c === void 0 ? U9 : c)(xa(E - D, 0)), v = 0; D < E; D++, v++)
      D in i && l1(p, v, i[D]);
    return p.length = v, p;
  }
});
var ba = W0("Array").slice, T9 = Array.prototype, _a = function(u) {
  var r = u.slice;
  return u === T9 || B0(T9, u) && r === T9.slice ? ba : r;
}, V6 = _a, Ma = V6, Ia = Ma, Sa = L6, Ua = Sa, Fe = Yu(function(u) {
  function r(n, i) {
    (i == null || i > n.length) && (i = n.length);
    for (var o = 0, D = new Array(i); o < i; o++)
      D[o] = n[o];
    return D;
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(Fe);
var K6 = Yu(function(u) {
  function r(n, i) {
    var o;
    if (n) {
      if (typeof n == "string")
        return Fe(n, i);
      var D = Ia(o = Object.prototype.toString.call(n)).call(o, 8, -1);
      if (D === "Object" && n.constructor && (D = n.constructor.name), D === "Map" || D === "Set")
        return Ua(n);
      if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
        return Fe(n, i);
    }
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(K6);
var G6 = Yu(function(u) {
  function r() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(G6);
var z6 = Yu(function(u) {
  function r(n, i) {
    return H6(n) || j6(n, i) || K6(n, i) || G6();
  }
  u.exports = r, u.exports.default = u.exports, u.exports.__esModule = !0;
});
r0(z6);
var Ta = Ze.forEach, Oa = E9("forEach"), Wr = Oa ? [].forEach : function(r) {
  return Ta(this, r, arguments.length > 1 ? arguments[1] : void 0);
};
Ku({ target: "Array", proto: !0, forced: [].forEach != Wr }, {
  forEach: Wr
});
var ka = W0("Array").forEach, Na = ka, O9 = Array.prototype, Pa = {
  DOMTokenList: !0,
  NodeList: !0
}, Ra = function(u) {
  var r = u.forEach;
  return u === O9 || B0(O9, u) && r === O9.forEach || Lu(Pa, e1(u)) ? Na : r;
}, q6 = Ra, La = $e.includes;
Ku({ target: "Array", proto: !0 }, {
  includes: function(r) {
    return La(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var $a = W0("Array").includes, Ha = qu("match"), ja = function(u) {
  var r;
  return s0(u) && ((r = u[Ha]) !== void 0 ? !!r : V0(u) == "RegExp");
}, Va = vu.TypeError, Ka = function(u) {
  if (ja(u))
    throw Va("The method doesn't accept regular expressions");
  return u;
}, Ga = qu("match"), za = function(u) {
  var r = /./;
  try {
    "/./"[u](r);
  } catch {
    try {
      return r[Ga] = !1, "/./"[u](r);
    } catch {
    }
  }
  return !1;
}, qa = Hu("".indexOf);
Ku({ target: "String", proto: !0, forced: !za("includes") }, {
  includes: function(r) {
    return !!~qa(
      H0(d1(this)),
      H0(Ka(r)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var Za = W0("String").includes, k9 = Array.prototype, N9 = String.prototype, Wa = function(u) {
  var r = u.includes;
  return u === k9 || B0(k9, u) && r === k9.includes ? $a : typeof u == "string" || u === N9 || B0(N9, u) && r === N9.includes ? Za : r;
}, Ya = Wa, c9 = Ya, le = `	
\v\f\r                　\u2028\u2029\uFEFF`, Yr = Hu("".replace), K1 = "[" + le + "]", Ja = RegExp("^" + K1 + K1 + "*"), Xa = RegExp(K1 + K1 + "*$"), P9 = function(u) {
  return function(r) {
    var n = H0(d1(r));
    return u & 1 && (n = Yr(n, Ja, "")), u & 2 && (n = Yr(n, Xa, "")), n;
  };
}, Qa = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: P9(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: P9(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: P9(3)
}, u7 = Qa.trim, a1 = vu.parseInt, Jr = vu.Symbol, Xr = Jr && Jr.iterator, Z6 = /^[+-]?0x/i, e7 = Hu(Z6.exec), r7 = a1(le + "08") !== 8 || a1(le + "0x16") !== 22 || Xr && !Ju(function() {
  a1(Object(Xr));
}), Qr = r7 ? function(r, n) {
  var i = u7(H0(r));
  return a1(i, n >>> 0 || (e7(Z6, i) ? 16 : 10));
} : a1;
Ku({ global: !0, forced: parseInt != Qr }, {
  parseInt: Qr
});
var t7 = Wu.parseInt, n7 = t7, D7 = n7, Ye = V6, i7 = Math.floor, Ae = function(u, r) {
  var n = u.length, i = i7(n / 2);
  return n < 8 ? a7(u, r) : o7(
    u,
    Ae(A1(u, 0, i), r),
    Ae(A1(u, i), r),
    r
  );
}, a7 = function(u, r) {
  for (var n = u.length, i = 1, o, D; i < n; ) {
    for (D = i, o = u[i]; D && r(u[D - 1], o) > 0; )
      u[D] = u[--D];
    D !== i++ && (u[D] = o);
  }
  return u;
}, o7 = function(u, r, n, i) {
  for (var o = r.length, D = n.length, E = 0, c = 0; E < o || c < D; )
    u[E + c] = E < o && c < D ? i(r[E], n[c]) <= 0 ? r[E++] : n[c++] : E < o ? r[E++] : n[c++];
  return u;
}, s7 = Ae, ut = L2.match(/firefox\/(\d+)/i), et = !!ut && +ut[1], f7 = /MSIE|Trident/.test(L2), rt = L2.match(/AppleWebKit\/(\d+)\./), tt = !!rt && +rt[1], u2 = [], nt = Hu(u2.sort), F7 = Hu(u2.push), l7 = Ju(function() {
  u2.sort(void 0);
}), A7 = Ju(function() {
  u2.sort(null);
}), h7 = E9("sort"), W6 = !Ju(function() {
  if (n2)
    return n2 < 70;
  if (!(et && et > 3)) {
    if (f7)
      return !0;
    if (tt)
      return tt < 603;
    var u = "", r, n, i, o;
    for (r = 65; r < 76; r++) {
      switch (n = String.fromCharCode(r), r) {
        case 66:
        case 69:
        case 70:
        case 72:
          i = 3;
          break;
        case 68:
        case 71:
          i = 4;
          break;
        default:
          i = 2;
      }
      for (o = 0; o < 47; o++)
        u2.push({ k: n + o, v: i });
    }
    for (u2.sort(function(D, E) {
      return E.v - D.v;
    }), o = 0; o < u2.length; o++)
      n = u2[o].k.charAt(0), u.charAt(u.length - 1) !== n && (u += n);
    return u !== "DGBEFHACIJK";
  }
}), E7 = l7 || !A7 || !h7 || !W6, c7 = function(u) {
  return function(r, n) {
    return n === void 0 ? -1 : r === void 0 ? 1 : u !== void 0 ? +u(r, n) || 0 : H0(r) > H0(n) ? 1 : -1;
  };
};
Ku({ target: "Array", proto: !0, forced: E7 }, {
  sort: function(r) {
    r !== void 0 && B1(r);
    var n = i2(this);
    if (W6)
      return r === void 0 ? nt(n) : nt(n, r);
    var i = [], o = T2(n), D, E;
    for (E = 0; E < o; E++)
      E in n && F7(i, n[E]);
    for (s7(i, c7(r)), D = i.length, E = 0; E < D; )
      n[E] = i[E++];
    for (; E < o; )
      delete n[E++];
    return n;
  }
});
var C7 = W0("Array").sort, R9 = Array.prototype, d7 = function(u) {
  var r = u.sort;
  return u === R9 || B0(R9, u) && r === R9.sort ? C7 : r;
}, p7 = d7, B7 = p7, v7 = function() {
  var u = v0(this), r = "";
  return u.global && (r += "g"), u.ignoreCase && (r += "i"), u.multiline && (r += "m"), u.dotAll && (r += "s"), u.unicode && (r += "u"), u.sticky && (r += "y"), r;
}, m7 = Hu(v7), Dt = RegExp.prototype, y7 = function(u) {
  return u === Dt || B0(Dt, u) ? m7(u) : u.flags;
}, g7 = y7, w7 = g7, Y6 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(C6), i = Nu(p6), o = Nu(Ke), D = Nu(R6), E = Nu($6), c = Nu(h9), p = Nu(Ea), v = Nu(pa), m = Nu(z6), M = Nu(q6), _ = Nu(c9), O = Nu(D7), x = Nu(Ye), k = Nu(B7), g = Nu(w7);
  function b(w, U) {
    var P;
    if (typeof D.default > "u" || (0, o.default)(w) == null) {
      if ((0, i.default)(w) || (P = y(w)) || U) {
        P && (w = P);
        var Y = 0, G = function() {
        };
        return { s: G, n: function() {
          return Y >= w.length ? { done: !0 } : { done: !1, value: w[Y++] };
        }, e: function(lu) {
          throw lu;
        }, f: G };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var V = !0, tu = !1, z;
    return { s: function() {
      P = (0, n.default)(w);
    }, n: function() {
      var lu = P.next();
      return V = lu.done, lu;
    }, e: function(lu) {
      tu = !0, z = lu;
    }, f: function() {
      try {
        !V && P.return != null && P.return();
      } finally {
        if (tu)
          throw z;
      }
    } };
  }
  function y(w, U) {
    var P;
    if (w) {
      if (typeof w == "string")
        return I(w, U);
      var Y = (0, x.default)(P = Object.prototype.toString.call(w)).call(P, 8, -1);
      if (Y === "Object" && w.constructor && (Y = w.constructor.name), Y === "Map" || Y === "Set")
        return (0, E.default)(w);
      if (Y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))
        return I(w, U);
    }
  }
  function I(w, U) {
    (U == null || U > w.length) && (U = w.length);
    for (var P = 0, Y = new Array(U); P < U; P++)
      Y[P] = w[P];
    return Y;
  }
  /*!
   * XRegExp 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2007-present MIT License
   */
  var T = "xregexp", uu = {
    astral: !1,
    namespacing: !1
  }, J = {
    exec: RegExp.prototype.exec,
    test: RegExp.prototype.test,
    match: String.prototype.match,
    replace: String.prototype.replace,
    split: String.prototype.split
  }, nu = {}, Du = {}, Z = {}, au = [], h = "default", e = "class", a = {
    // Any native multicharacter token in default scope, or any single character
    default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
    // Any native multicharacter token in character class scope, or any single character
    class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
  }, s = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g, f = J.exec.call(/()??/, "")[1] === void 0, A = (0, g.default)(/x/) !== void 0, C = {}, B = C.toString;
  function F(w) {
    var U = !0;
    try {
      if (w === "y") {
        var P = /* @__PURE__ */ function() {
          return "gy";
        }(), Y = ".a".replace(new RegExp("a", P), ".") === "..";
        Y && (U = !1);
      }
    } catch {
      U = !1;
    }
    return U;
  }
  var t = F("u"), l = F("y"), R = {
    g: !0,
    i: !0,
    m: !0,
    u: t,
    y: l
  };
  function L(w, U, P, Y, G) {
    var V;
    if (w[T] = {
      captureNames: U
    }, G)
      return w;
    if (w.__proto__)
      w.__proto__ = K.prototype;
    else
      for (var tu in K.prototype)
        w[tu] = K.prototype[tu];
    return w[T].source = P, w[T].flags = Y && (0, k.default)(V = Y.split("")).call(V).join(""), w;
  }
  function H(w) {
    return J.replace.call(w, /([\s\S])(?=[\s\S]*\1)/g, "");
  }
  function d(w, U) {
    var P;
    if (!K.isRegExp(w))
      throw new TypeError("Type RegExp expected");
    var Y = w[T] || {}, G = iu(w), V = "", tu = "", z = null, Q = null;
    return U = U || {}, U.removeG && (tu += "g"), U.removeY && (tu += "y"), tu && (G = J.replace.call(G, new RegExp("[".concat(tu, "]+"), "g"), "")), U.addG && (V += "g"), U.addY && (V += "y"), V && (G = H(G + V)), U.isInternalOnly || (Y.source !== void 0 && (z = Y.source), (0, g.default)(Y) != null && (Q = V ? H((0, g.default)(Y) + V) : (0, g.default)(Y))), w = L(new RegExp(U.source || w.source, G), X(w) ? (0, x.default)(P = Y.captureNames).call(P, 0) : null, z, Q, U.isInternalOnly), w;
  }
  function $(w) {
    return (0, O.default)(w, 16);
  }
  function j(w, U, P) {
    return (
      // No need to separate tokens if at the beginning or end of a group
      w.input[w.index - 1] === "(" || w.input[w.index + w[0].length] === ")" || // No need to separate tokens if before or after a `|`
      w.input[w.index - 1] === "|" || w.input[w.index + w[0].length] === "|" || // No need to separate tokens if at the beginning or end of the pattern
      w.index < 1 || w.index + w[0].length >= w.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookahead.
      // The way this is written relies on:
      // - The search regex matching only 3-char strings.
      // - Although `substr` gives chars from the end of the string if given a negative index,
      //   the resulting substring will be too short to match. Ex: `'abcd'.substr(-1, 3) === 'd'`
      J.test.call(/^\(\?[:=!]/, w.input.substr(w.index - 3, 3)) || // Avoid separating tokens when the following token is a quantifier
      Ru(w.input, w.index + w[0].length, P) ? "" : "(?:)"
    );
  }
  function iu(w) {
    return A ? (0, g.default)(w) : (
      // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
      // with an empty string) allows this to continue working predictably when
      // `XRegExp.proptotype.toString` is overridden
      J.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(w))[1]
    );
  }
  function X(w) {
    return !!(w[T] && w[T].captureNames);
  }
  function ru(w) {
    return (0, O.default)(w, 10).toString(16);
  }
  function Ru(w, U, P) {
    return J.test.call((0, _.default)(P).call(P, "x") ? (
      // Ignore any leading whitespace, line comments, and inline comments
      /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
    ) : (
      // Ignore any leading inline comments
      /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
    ), (0, x.default)(w).call(w, U));
  }
  function eu(w, U) {
    return B.call(w) === "[object ".concat(U, "]");
  }
  function W(w) {
    for (; w.length < 4; )
      w = "0".concat(w);
    return w;
  }
  function $u(w, U) {
    if (H(U) !== U)
      throw new SyntaxError("Invalid duplicate regex flag ".concat(U));
    w = J.replace.call(w, /^\(\?([\w$]+)\)/, function(V, tu) {
      if (J.test.call(/[gy]/, tu))
        throw new SyntaxError("Cannot use flag g or y in mode modifier ".concat(V));
      return U = H(U + tu), "";
    });
    var P = b(U), Y;
    try {
      for (P.s(); !(Y = P.n()).done; ) {
        var G = Y.value;
        if (!R[G])
          throw new SyntaxError("Unknown regex flag ".concat(G));
      }
    } catch (V) {
      P.e(V);
    } finally {
      P.f();
    }
    return {
      pattern: w,
      flags: U
    };
  }
  function hu(w) {
    var U = {};
    return eu(w, "String") ? ((0, M.default)(K).call(K, w, /[^\s,]+/, function(P) {
      U[P] = !0;
    }), U) : w;
  }
  function Eu(w) {
    if (!/^[\w$]$/.test(w))
      throw new Error("Flag must be a single character A-Za-z0-9_$");
    R[w] = !0;
  }
  function f0(w, U, P, Y, G) {
    for (var V = au.length, tu = w[P], z = null, Q, lu; V--; )
      if (lu = au[V], !(lu.leadChar && lu.leadChar !== tu || lu.scope !== Y && lu.scope !== "all" || lu.flag && !(0, _.default)(U).call(U, lu.flag)) && (Q = K.exec(w, lu.regex, P, "sticky"), Q)) {
        z = {
          matchLength: Q[0].length,
          output: lu.handler.call(G, Q, Y, U),
          reparse: lu.reparse
        };
        break;
      }
    return z;
  }
  function cu(w) {
    uu.astral = w;
  }
  function Cu(w) {
    uu.namespacing = w;
  }
  function e0(w) {
    if (w == null)
      throw new TypeError("Cannot convert null or undefined to object");
    return w;
  }
  function K(w, U) {
    if (K.isRegExp(w)) {
      if (U !== void 0)
        throw new TypeError("Cannot supply flags when copying a RegExp");
      return d(w);
    }
    if (w = w === void 0 ? "" : String(w), U = U === void 0 ? "" : String(U), K.isInstalled("astral") && !(0, _.default)(U).call(U, "A") && (U += "A"), Z[w] || (Z[w] = {}), !Z[w][U]) {
      for (var P = {
        hasNamedCapture: !1,
        captureNames: []
      }, Y = h, G = "", V = 0, tu, z = $u(w, U), Q = z.pattern, lu = (0, g.default)(z); V < Q.length; ) {
        do
          tu = f0(Q, lu, V, Y, P), tu && tu.reparse && (Q = (0, x.default)(Q).call(Q, 0, V) + tu.output + (0, x.default)(Q).call(Q, V + tu.matchLength));
        while (tu && tu.reparse);
        if (tu)
          G += tu.output, V += tu.matchLength || 1;
        else {
          var su = K.exec(Q, a[Y], V, "sticky"), fu = (0, m.default)(su, 1), ju = fu[0];
          G += ju, V += ju.length, ju === "[" && Y === h ? Y = e : ju === "]" && Y === e && (Y = h);
        }
      }
      Z[w][U] = {
        // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
        // groups are sometimes inserted during regex transpilation in order to keep tokens
        // separated. However, more than one empty group in a row is never needed.
        pattern: J.replace.call(G, /(?:\(\?:\))+/g, "(?:)"),
        // Strip all but native flags
        flags: J.replace.call(lu, /[^gimuy]+/g, ""),
        // `context.captureNames` has an item for each capturing group, even if unnamed
        captures: P.hasNamedCapture ? P.captureNames : null
      };
    }
    var ou = Z[w][U];
    return L(new RegExp(ou.pattern, (0, g.default)(ou)), ou.captures, w, U);
  }
  K.prototype = /(?:)/, K.version = "4.4.1", K._clipDuplicates = H, K._hasNativeFlag = F, K._dec = $, K._hex = ru, K._pad4 = W, K.addToken = function(w, U, P) {
    P = P || {};
    var Y = P, G = Y.optionalFlags;
    if (P.flag && Eu(P.flag), G) {
      G = J.split.call(G, "");
      var V = b(G), tu;
      try {
        for (V.s(); !(tu = V.n()).done; ) {
          var z = tu.value;
          Eu(z);
        }
      } catch (Q) {
        V.e(Q);
      } finally {
        V.f();
      }
    }
    au.push({
      regex: d(w, {
        addG: !0,
        addY: l,
        isInternalOnly: !0
      }),
      handler: U,
      scope: P.scope || h,
      flag: P.flag,
      reparse: P.reparse,
      leadChar: P.leadChar
    }), K.cache.flush("patterns");
  }, K.cache = function(w, U) {
    return Du[w] || (Du[w] = {}), Du[w][U] || (Du[w][U] = K(w, U));
  }, K.cache.flush = function(w) {
    w === "patterns" ? Z = {} : Du = {};
  }, K.escape = function(w) {
    return J.replace.call(e0(w), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }, K.exec = function(w, U, P, Y) {
    var G = "g", V = !1, tu = !1, z;
    V = l && !!(Y || U.sticky && Y !== !1), V ? G += "y" : Y && (tu = !0, G += "FakeY"), U[T] = U[T] || {};
    var Q = U[T][G] || (U[T][G] = d(U, {
      addG: !0,
      addY: V,
      source: tu ? "".concat(U.source, "|()") : void 0,
      removeY: Y === !1,
      isInternalOnly: !0
    }));
    return P = P || 0, Q.lastIndex = P, z = nu.exec.call(Q, w), tu && z && z.pop() === "" && (z = null), U.global && (U.lastIndex = z ? Q.lastIndex : 0), z;
  }, K.forEach = function(w, U, P) {
    for (var Y = 0, G = -1, V; V = K.exec(w, U, Y); )
      P(V, ++G, w, U), Y = V.index + (V[0].length || 1);
  }, K.globalize = function(w) {
    return d(w, {
      addG: !0
    });
  }, K.install = function(w) {
    w = hu(w), !uu.astral && w.astral && cu(!0), !uu.namespacing && w.namespacing && Cu(!0);
  }, K.isInstalled = function(w) {
    return !!uu[w];
  }, K.isRegExp = function(w) {
    return B.call(w) === "[object RegExp]";
  }, K.match = function(w, U, P) {
    var Y = U.global && P !== "one" || P === "all", G = (Y ? "g" : "") + (U.sticky ? "y" : "") || "noGY";
    U[T] = U[T] || {};
    var V = U[T][G] || (U[T][G] = d(U, {
      addG: !!Y,
      removeG: P === "one",
      isInternalOnly: !0
    })), tu = J.match.call(e0(w), V);
    return U.global && (U.lastIndex = P === "one" && tu ? (
      // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
      tu.index + tu[0].length
    ) : 0), Y ? tu || [] : tu && tu[0];
  }, K.matchChain = function(w, U) {
    return function P(Y, G) {
      var V = U[G].regex ? U[G] : {
        regex: U[G]
      }, tu = [];
      function z(fu) {
        if (V.backref) {
          var ju = "Backreference to undefined group: ".concat(V.backref), ou = isNaN(V.backref);
          if (ou && K.isInstalled("namespacing")) {
            if (!(V.backref in fu.groups))
              throw new ReferenceError(ju);
          } else if (!fu.hasOwnProperty(V.backref))
            throw new ReferenceError(ju);
          var Fu = ou && K.isInstalled("namespacing") ? fu.groups[V.backref] : fu[V.backref];
          tu.push(Fu || "");
        } else
          tu.push(fu[0]);
      }
      var Q = b(Y), lu;
      try {
        for (Q.s(); !(lu = Q.n()).done; ) {
          var su = lu.value;
          (0, M.default)(K).call(K, su, V.regex, z);
        }
      } catch (fu) {
        Q.e(fu);
      } finally {
        Q.f();
      }
      return G === U.length - 1 || !tu.length ? tu : P(tu, G + 1);
    }([w], 0);
  }, K.replace = function(w, U, P, Y) {
    var G = K.isRegExp(U), V = U.global && Y !== "one" || Y === "all", tu = (V ? "g" : "") + (U.sticky ? "y" : "") || "noGY", z = U;
    G ? (U[T] = U[T] || {}, z = U[T][tu] || (U[T][tu] = d(U, {
      addG: !!V,
      removeG: Y === "one",
      isInternalOnly: !0
    }))) : V && (z = new RegExp(K.escape(String(U)), "g"));
    var Q = nu.replace.call(e0(w), z, P);
    return G && U.global && (U.lastIndex = 0), Q;
  }, K.replaceEach = function(w, U) {
    var P = b(U), Y;
    try {
      for (P.s(); !(Y = P.n()).done; ) {
        var G = Y.value;
        w = K.replace(w, G[0], G[1], G[2]);
      }
    } catch (V) {
      P.e(V);
    } finally {
      P.f();
    }
    return w;
  }, K.split = function(w, U, P) {
    return nu.split.call(e0(w), U, P);
  }, K.test = function(w, U, P, Y) {
    return !!K.exec(w, U, P, Y);
  }, K.uninstall = function(w) {
    w = hu(w), uu.astral && w.astral && cu(!1), uu.namespacing && w.namespacing && Cu(!1);
  }, K.union = function(w, U, P) {
    P = P || {};
    var Y = P.conjunction || "or", G = 0, V, tu;
    function z(Fu, t0, Au) {
      var du = tu[G - V];
      if (t0) {
        if (++G, du)
          return "(?<".concat(du, ">");
      } else if (Au)
        return "\\".concat(+Au + V);
      return Fu;
    }
    if (!(eu(w, "Array") && w.length))
      throw new TypeError("Must provide a nonempty array of patterns to merge");
    var Q = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, lu = [], su = b(w), fu;
    try {
      for (su.s(); !(fu = su.n()).done; ) {
        var ju = fu.value;
        K.isRegExp(ju) ? (V = G, tu = ju[T] && ju[T].captureNames || [], lu.push(J.replace.call(K(ju.source).source, Q, z))) : lu.push(K.escape(ju));
      }
    } catch (Fu) {
      su.e(Fu);
    } finally {
      su.f();
    }
    var ou = Y === "none" ? "" : "|";
    return K(lu.join(ou), U);
  }, nu.exec = function(w) {
    var U = this.lastIndex, P = J.exec.apply(this, arguments);
    if (P) {
      if (!f && P.length > 1 && (0, _.default)(P).call(P, "")) {
        var Y, G = d(this, {
          removeG: !0,
          isInternalOnly: !0
        });
        J.replace.call((0, x.default)(Y = String(w)).call(Y, P.index), G, function() {
          for (var Q = arguments.length, lu = 1; lu < Q - 2; ++lu)
            (lu < 0 || arguments.length <= lu ? void 0 : arguments[lu]) === void 0 && (P[lu] = void 0);
        });
      }
      var V = P;
      if (K.isInstalled("namespacing") && (P.groups = (0, v.default)(null), V = P.groups), this[T] && this[T].captureNames)
        for (var tu = 1; tu < P.length; ++tu) {
          var z = this[T].captureNames[tu - 1];
          z && (V[z] = P[tu]);
        }
      this.global && !P[0].length && this.lastIndex > P.index && (this.lastIndex = P.index);
    }
    return this.global || (this.lastIndex = U), P;
  }, nu.test = function(w) {
    return !!nu.exec.call(this, w);
  }, nu.match = function(w) {
    if (!K.isRegExp(w))
      w = new RegExp(w);
    else if (w.global) {
      var U = J.match.apply(this, arguments);
      return w.lastIndex = 0, U;
    }
    return nu.exec.call(w, e0(this));
  }, nu.replace = function(w, U) {
    var P = K.isRegExp(w), Y, G, V;
    return P ? (w[T] && (G = w[T].captureNames), Y = w.lastIndex) : w += "", eu(U, "Function") ? V = J.replace.call(String(this), w, function() {
      for (var tu = arguments.length, z = new Array(tu), Q = 0; Q < tu; Q++)
        z[Q] = arguments[Q];
      if (G) {
        var lu;
        K.isInstalled("namespacing") ? (lu = (0, v.default)(null), z.push(lu)) : (z[0] = new String(z[0]), lu = z[0]);
        for (var su = 0; su < G.length; ++su)
          G[su] && (lu[G[su]] = z[su + 1]);
      }
      return U.apply(void 0, z);
    }) : V = J.replace.call(this == null ? this : String(this), w, function() {
      for (var tu = arguments.length, z = new Array(tu), Q = 0; Q < tu; Q++)
        z[Q] = arguments[Q];
      return J.replace.call(String(U), s, lu);
      function lu(su, fu, ju, ou) {
        if (fu = fu || ju, fu) {
          var Fu = +fu;
          if (Fu <= z.length - 3)
            return z[Fu] || "";
          if (Fu = G ? (0, p.default)(G).call(G, fu) : -1, Fu < 0)
            throw new SyntaxError("Backreference to undefined group ".concat(su));
          return z[Fu + 1] || "";
        }
        if (ou === "$")
          return "$";
        if (ou === "&" || +ou == 0)
          return z[0];
        if (ou === "`") {
          var t0;
          return (0, x.default)(t0 = z[z.length - 1]).call(t0, 0, z[z.length - 2]);
        }
        if (ou === "'") {
          var Au;
          return (0, x.default)(Au = z[z.length - 1]).call(Au, z[z.length - 2] + z[0].length);
        }
        if (ou = +ou, !isNaN(ou)) {
          if (ou > z.length - 3)
            throw new SyntaxError("Backreference to undefined group ".concat(su));
          return z[ou] || "";
        }
        throw new SyntaxError("Invalid token ".concat(su));
      }
    }), P && (w.global ? w.lastIndex = 0 : w.lastIndex = Y), V;
  }, nu.split = function(w, U) {
    if (!K.isRegExp(w))
      return J.split.apply(this, arguments);
    var P = String(this), Y = [], G = w.lastIndex, V = 0, tu;
    return U = (U === void 0 ? -1 : U) >>> 0, (0, M.default)(K).call(K, P, w, function(z) {
      z.index + z[0].length > V && (Y.push((0, x.default)(P).call(P, V, z.index)), z.length > 1 && z.index < P.length && Array.prototype.push.apply(Y, (0, x.default)(z).call(z, 1)), tu = z[0].length, V = z.index + tu);
    }), V === P.length ? (!J.test.call(w, "") || tu) && Y.push("") : Y.push((0, x.default)(P).call(P, V)), w.lastIndex = G, Y.length > U ? (0, x.default)(Y).call(Y, 0, U) : Y;
  }, K.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(w, U) {
    if (w[1] === "B" && U === h)
      return w[0];
    throw new SyntaxError("Invalid escape ".concat(w[0]));
  }, {
    scope: "all",
    leadChar: "\\"
  }), K.addToken(/\\u{([\dA-Fa-f]+)}/, function(w, U, P) {
    var Y = $(w[1]);
    if (Y > 1114111)
      throw new SyntaxError("Invalid Unicode code point ".concat(w[0]));
    if (Y <= 65535)
      return "\\u".concat(W(ru(Y)));
    if (t && (0, _.default)(P).call(P, "u"))
      return w[0];
    throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  }, {
    scope: "all",
    leadChar: "\\"
  }), K.addToken(
    /\[(\^?)\]/,
    // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
    // (?!) should work like \b\B, but is unreliable in some versions of Firefox
    /* eslint-disable no-confusing-arrow */
    function(w) {
      return w[1] ? "[\\s\\S]" : "\\b\\B";
    },
    /* eslint-enable no-confusing-arrow */
    {
      leadChar: "["
    }
  ), K.addToken(/\(\?#[^)]*\)/, j, {
    leadChar: "("
  }), K.addToken(/\s+|#[^\n]*\n?/, j, {
    flag: "x"
  }), K.addToken(/\./, function() {
    return "[\\s\\S]";
  }, {
    flag: "s",
    leadChar: "."
  }), K.addToken(/\\k<([\w$]+)>/, function(w) {
    var U, P, Y = isNaN(w[1]) ? (0, p.default)(U = this.captureNames).call(U, w[1]) + 1 : +w[1], G = w.index + w[0].length;
    if (!Y || Y > this.captureNames.length)
      throw new SyntaxError("Backreference to undefined group ".concat(w[0]));
    return (0, c.default)(P = "\\".concat(Y)).call(P, G === w.input.length || isNaN(w.input[G]) ? "" : "(?:)");
  }, {
    leadChar: "\\"
  }), K.addToken(/\\(\d+)/, function(w, U) {
    if (!(U === h && /^[1-9]/.test(w[1]) && +w[1] <= this.captureNames.length) && w[1] !== "0")
      throw new SyntaxError("Cannot use octal escape or backreference to undefined group ".concat(w[0]));
    return w[0];
  }, {
    scope: "all",
    leadChar: "\\"
  }), K.addToken(/\(\?P?<([\w$]+)>/, function(w) {
    var U;
    if (!isNaN(w[1]))
      throw new SyntaxError("Cannot use integer as capture name ".concat(w[0]));
    if (!K.isInstalled("namespacing") && (w[1] === "length" || w[1] === "__proto__"))
      throw new SyntaxError("Cannot use reserved word as capture name ".concat(w[0]));
    if ((0, _.default)(U = this.captureNames).call(U, w[1]))
      throw new SyntaxError("Cannot use same name for multiple groups ".concat(w[0]));
    return this.captureNames.push(w[1]), this.hasNamedCapture = !0, "(";
  }, {
    leadChar: "("
  }), K.addToken(/\((?!\?)/, function(w, U, P) {
    return (0, _.default)(P).call(P, "n") ? "(?:" : (this.captureNames.push(null), "(");
  }, {
    optionalFlags: "n",
    leadChar: "("
  });
  var pu = K;
  r.default = pu, u.exports = r.default;
});
r0(Y6);
var x7 = Ze.map, b7 = qe("map");
Ku({ target: "Array", proto: !0, forced: !b7 }, {
  map: function(r) {
    return x7(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var _7 = W0("Array").map, L9 = Array.prototype, M7 = function(u) {
  var r = u.map;
  return u === L9 || B0(L9, u) && r === L9.map ? _7 : r;
}, I7 = M7, S7 = I7, U7 = vu.TypeError, it = function(u) {
  return function(r, n, i, o) {
    B1(n);
    var D = i2(r), E = Oe(D), c = T2(D), p = u ? c - 1 : 0, v = u ? -1 : 1;
    if (i < 2)
      for (; ; ) {
        if (p in E) {
          o = E[p], p += v;
          break;
        }
        if (p += v, u ? p < 0 : c <= p)
          throw U7("Reduce of empty array with no initial value");
      }
    for (; u ? p >= 0 : c > p; p += v)
      p in E && (o = n(o, E[p], p, D));
    return o;
  };
}, T7 = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: it(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: it(!0)
}, O7 = V0(vu.process) == "process", k7 = T7.left, N7 = E9("reduce"), P7 = !O7 && n2 > 79 && n2 < 83;
Ku({ target: "Array", proto: !0, forced: !N7 || P7 }, {
  reduce: function(r) {
    var n = arguments.length;
    return k7(this, r, n, n > 1 ? arguments[1] : void 0);
  }
});
var R7 = W0("Array").reduce, $9 = Array.prototype, L7 = function(u) {
  var r = u.reduce;
  return u === $9 || B0($9, u) && r === $9.reduce ? R7 : r;
}, $7 = L7, H7 = $7, J6 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(h9), i = Nu(c9), o = Nu(S7), D = Nu(H7);
  /*!
   * XRegExp.build 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2012-present MIT License
   */
  var E = function(p) {
    var v = "xregexp", m = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, M = p.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, m], "g", {
      conjunction: "or"
    });
    function _(b) {
      var y = /^(?:\(\?:\))*\^/, I = /\$(?:\(\?:\))*$/;
      return y.test(b) && I.test(b) && // Ensure that the trailing `$` isn't escaped
      I.test(b.replace(/\\[\s\S]/g, "")) ? b.replace(y, "").replace(I, "") : b;
    }
    function O(b, y) {
      var I = y ? "x" : "";
      return p.isRegExp(b) ? b[v] && b[v].captureNames ? (
        // Don't recompile, to preserve capture names
        b
      ) : (
        // Recompile as XRegExp
        p(b.source, I)
      ) : (
        // Compile string as XRegExp
        p(b, I)
      );
    }
    function x(b) {
      return b instanceof RegExp ? b : p.escape(b);
    }
    function k(b, y, I) {
      return b["subpattern".concat(I)] = y, b;
    }
    function g(b, y, I) {
      var T = y < I.length - 1;
      return b + (T ? "{{subpattern".concat(y, "}}") : "");
    }
    p.tag = function(b) {
      return function(y) {
        for (var I, T, uu = arguments.length, J = new Array(uu > 1 ? uu - 1 : 0), nu = 1; nu < uu; nu++)
          J[nu - 1] = arguments[nu];
        var Du = (0, D.default)(I = (0, o.default)(J).call(J, x)).call(I, k, {}), Z = (0, o.default)(T = y.raw).call(T, g).join("");
        return p.build(Z, Du, b);
      };
    }, p.build = function(b, y, I) {
      I = I || "";
      var T = (0, i.default)(I).call(I, "x"), uu = /^\(\?([\w$]+)\)/.exec(b);
      uu && (I = p._clipDuplicates(I + uu[1]));
      var J = {};
      for (var nu in y)
        if (y.hasOwnProperty(nu)) {
          var Du = O(y[nu], T);
          J[nu] = {
            // Deanchoring allows embedding independently useful anchored regexes. If you
            // really need to keep your anchors, double them (i.e., `^^...$$`).
            pattern: _(Du.source),
            names: Du[v].captureNames || []
          };
        }
      var Z = O(b, T), au = 0, h, e = 0, a = [0], s = Z[v].captureNames || [], f = Z.source.replace(M, function(A, C, B, F, t) {
        var l = C || B, R, L, H;
        if (l) {
          var d;
          if (!J.hasOwnProperty(l))
            throw new ReferenceError("Undefined property ".concat(A));
          C ? (R = s[e], a[++e] = ++au, L = "(?<".concat(R || l, ">")) : L = "(?:", h = au;
          var $ = J[l].pattern.replace(m, function(j, iu, X) {
            if (iu) {
              if (R = J[l].names[au - h], ++au, R)
                return "(?<".concat(R, ">");
            } else if (X)
              return H = +X - 1, J[l].names[H] ? (
                // Need to preserve the backreference name in case using flag `n`
                "\\k<".concat(J[l].names[H], ">")
              ) : "\\".concat(+X + h);
            return j;
          });
          return (0, n.default)(d = "".concat(L)).call(d, $, ")");
        }
        if (F) {
          if (R = s[e], a[++e] = ++au, R)
            return "(?<".concat(R, ">");
        } else if (t)
          return H = +t - 1, s[H] ? (
            // Need to preserve the backreference name in case using flag `n`
            "\\k<".concat(s[H], ">")
          ) : "\\".concat(a[+t]);
        return A;
      });
      return p(f, I);
    };
  };
  r.default = E, u.exports = r.default;
});
r0(J6);
var X6 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(Ye), i = Nu(h9), o = Nu(c9);
  /*!
   * XRegExp.matchRecursive 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2009-present MIT License
   */
  var D = function(c) {
    function p(v, m, M, _) {
      return {
        name: v,
        value: m,
        start: M,
        end: _
      };
    }
    c.matchRecursive = function(v, m, M, _, O) {
      _ = _ || "", O = O || {};
      var x = (0, o.default)(_).call(_, "g"), k = (0, o.default)(_).call(_, "y"), g = _.replace(/y/g, ""), b = O, y = b.escapeChar, I = O.valueNames, T = [], uu = 0, J = 0, nu = 0, Du = 0, Z, au, h, e, a;
      if (m = c(m, g), M = c(M, g), y) {
        var s, f;
        if (y.length > 1)
          throw new Error("Cannot use more than one escape character");
        y = c.escape(y), a = new RegExp(
          (0, i.default)(s = (0, i.default)(f = "(?:".concat(y, "[\\S\\s]|(?:(?!")).call(
            f,
            // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
            // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
            // transformation resulting from those flags was already applied to `left` and
            // `right` when they were passed through the XRegExp constructor above.
            c.union([m, M], "", {
              conjunction: "or"
            }).source,
            ")[^"
          )).call(s, y, "])+)+"),
          // Flags `gy` not needed here
          _.replace(/[^imu]+/g, "")
        );
      }
      for (; ; ) {
        if (y && (nu += (c.exec(v, a, nu, "sticky") || [""])[0].length), h = c.exec(v, m, nu), e = c.exec(v, M, nu), h && e && (h.index <= e.index ? e = null : h = null), h || e)
          J = (h || e).index, nu = J + (h || e)[0].length;
        else if (!uu)
          break;
        if (k && !uu && J > Du)
          break;
        if (h)
          uu || (Z = J, au = nu), ++uu;
        else if (e && uu) {
          if (!--uu && (I ? (I[0] && Z > Du && T.push(p(I[0], (0, n.default)(v).call(v, Du, Z), Du, Z)), I[1] && T.push(p(I[1], (0, n.default)(v).call(v, Z, au), Z, au)), I[2] && T.push(p(I[2], (0, n.default)(v).call(v, au, J), au, J)), I[3] && T.push(p(I[3], (0, n.default)(v).call(v, J, nu), J, nu))) : T.push((0, n.default)(v).call(v, au, J)), Du = nu, !x))
            break;
        } else
          throw new Error("Unbalanced delimiter found in string");
        J === nu && ++nu;
      }
      return x && !k && I && I[0] && v.length > Du && T.push(p(I[0], (0, n.default)(v).call(v, Du), Du, v.length)), T;
    };
  };
  r.default = D, u.exports = r.default;
});
r0(X6);
var Q6 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(C6), i = Nu(p6), o = Nu(Ke), D = Nu(R6), E = Nu($6), c = Nu(Ye), p = Nu(c9), v = Nu(h9), m = Nu(q6);
  function M(k, g) {
    var b;
    if (typeof D.default > "u" || (0, o.default)(k) == null) {
      if ((0, i.default)(k) || (b = _(k)) || g) {
        b && (k = b);
        var y = 0, I = function() {
        };
        return { s: I, n: function() {
          return y >= k.length ? { done: !0 } : { done: !1, value: k[y++] };
        }, e: function(Du) {
          throw Du;
        }, f: I };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var T = !0, uu = !1, J;
    return { s: function() {
      b = (0, n.default)(k);
    }, n: function() {
      var Du = b.next();
      return T = Du.done, Du;
    }, e: function(Du) {
      uu = !0, J = Du;
    }, f: function() {
      try {
        !T && b.return != null && b.return();
      } finally {
        if (uu)
          throw J;
      }
    } };
  }
  function _(k, g) {
    var b;
    if (k) {
      if (typeof k == "string")
        return O(k, g);
      var y = (0, c.default)(b = Object.prototype.toString.call(k)).call(b, 8, -1);
      if (y === "Object" && k.constructor && (y = k.constructor.name), y === "Map" || y === "Set")
        return (0, E.default)(k);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
        return O(k, g);
    }
  }
  function O(k, g) {
    (g == null || g > k.length) && (g = k.length);
    for (var b = 0, y = new Array(g); b < g; b++)
      y[b] = k[b];
    return y;
  }
  /*!
   * XRegExp Unicode Base 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2008-present MIT License
   */
  var x = function(g) {
    var b = {}, y = g._dec, I = g._hex, T = g._pad4;
    function uu(h) {
      return h.replace(/[- _]+/g, "").toLowerCase();
    }
    function J(h) {
      var e = /^\\[xu](.+)/.exec(h);
      return e ? y(e[1]) : h.charCodeAt(h[0] === "\\" ? 1 : 0);
    }
    function nu(h) {
      var e = "", a = -1;
      return (0, m.default)(g).call(g, h, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function(s) {
        var f = J(s[1]);
        f > a + 1 && (e += "\\u".concat(T(I(a + 1))), f > a + 2 && (e += "-\\u".concat(T(I(f - 1))))), a = J(s[2] || s[1]);
      }), a < 65535 && (e += "\\u".concat(T(I(a + 1))), a < 65534 && (e += "-\\uFFFF")), e;
    }
    function Du(h) {
      var e = "b!";
      return b[h][e] || (b[h][e] = nu(b[h].bmp));
    }
    function Z(h, e) {
      var a = b[h], s = "";
      if (a.bmp && !a.isBmpLast) {
        var f;
        s = (0, v.default)(f = "[".concat(a.bmp, "]")).call(f, a.astral ? "|" : "");
      }
      if (a.astral && (s += a.astral), a.isBmpLast && a.bmp) {
        var A;
        s += (0, v.default)(A = "".concat(a.astral ? "|" : "", "[")).call(A, a.bmp, "]");
      }
      return e ? "(?:(?!".concat(s, ")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))") : "(?:".concat(s, ")");
    }
    function au(h, e) {
      var a = e ? "a!" : "a=";
      return b[h][a] || (b[h][a] = Z(h, e));
    }
    g.addToken(
      // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
      /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
      function(h, e, a) {
        var s = "Invalid double negation ", f = "Unknown Unicode token ", A = "Unicode token missing data ", C = "Astral mode required for Unicode token ", B = "Astral mode does not support Unicode tokens within character classes", F = h[1] === "P" || !!h[2], t = (0, p.default)(a).call(a, "A"), l = uu(h[4] || h[3]), R = b[l];
        if (h[1] === "P" && h[2])
          throw new SyntaxError(s + h[0]);
        if (!b.hasOwnProperty(l))
          throw new SyntaxError(f + h[0]);
        if (R.inverseOf) {
          if (l = uu(R.inverseOf), !b.hasOwnProperty(l)) {
            var L;
            throw new ReferenceError((0, v.default)(L = "".concat(A + h[0], " -> ")).call(L, R.inverseOf));
          }
          R = b[l], F = !F;
        }
        if (!(R.bmp || t))
          throw new SyntaxError(C + h[0]);
        if (t) {
          if (e === "class")
            throw new SyntaxError(B);
          return au(l, F);
        }
        return e === "class" ? F ? Du(l) : R.bmp : "".concat((F ? "[^" : "[") + R.bmp, "]");
      },
      {
        scope: "all",
        optionalFlags: "A",
        leadChar: "\\"
      }
    ), g.addUnicodeData = function(h) {
      var e = "Unicode token requires name", a = "Unicode token has no character data ", s = M(h), f;
      try {
        for (s.s(); !(f = s.n()).done; ) {
          var A = f.value;
          if (!A.name)
            throw new Error(e);
          if (!(A.inverseOf || A.bmp || A.astral))
            throw new Error(a + A.name);
          b[uu(A.name)] = A, A.alias && (b[uu(A.alias)] = A);
        }
      } catch (C) {
        s.e(C);
      } finally {
        s.f();
      }
      g.cache.flush("patterns");
    }, g._getUnicodeProperty = function(h) {
      var e = uu(h);
      return b[e];
    };
  };
  r.default = x, u.exports = r.default;
});
r0(Q6);
var j7 = [
  {
    name: "InAdlam",
    astral: "\uD83A[\uDD00-\uDD5F]"
  },
  {
    name: "InAegean_Numbers",
    astral: "\uD800[\uDD00-\uDD3F]"
  },
  {
    name: "InAhom",
    astral: "\uD805[\uDF00-\uDF3F]"
  },
  {
    name: "InAlchemical_Symbols",
    astral: "\uD83D[\uDF00-\uDF7F]"
  },
  {
    name: "InAlphabetic_Presentation_Forms",
    bmp: "ﬀ-ﭏ"
  },
  {
    name: "InAnatolian_Hieroglyphs",
    astral: "\uD811[\uDC00-\uDE7F]"
  },
  {
    name: "InAncient_Greek_Musical_Notation",
    astral: "\uD834[\uDE00-\uDE4F]"
  },
  {
    name: "InAncient_Greek_Numbers",
    astral: "\uD800[\uDD40-\uDD8F]"
  },
  {
    name: "InAncient_Symbols",
    astral: "\uD800[\uDD90-\uDDCF]"
  },
  {
    name: "InArabic",
    bmp: "؀-ۿ"
  },
  {
    name: "InArabic_Extended_A",
    bmp: "ࢠ-ࣿ"
  },
  {
    name: "InArabic_Mathematical_Alphabetic_Symbols",
    astral: "\uD83B[\uDE00-\uDEFF]"
  },
  {
    name: "InArabic_Presentation_Forms_A",
    bmp: "ﭐ-﷿"
  },
  {
    name: "InArabic_Presentation_Forms_B",
    bmp: "ﹰ-\uFEFF"
  },
  {
    name: "InArabic_Supplement",
    bmp: "ݐ-ݿ"
  },
  {
    name: "InArmenian",
    bmp: "԰-֏"
  },
  {
    name: "InArrows",
    bmp: "←-⇿"
  },
  {
    name: "InAvestan",
    astral: "\uD802[\uDF00-\uDF3F]"
  },
  {
    name: "InBalinese",
    bmp: "ᬀ-᭿"
  },
  {
    name: "InBamum",
    bmp: "ꚠ-꛿"
  },
  {
    name: "InBamum_Supplement",
    astral: "\uD81A[\uDC00-\uDE3F]"
  },
  {
    name: "InBasic_Latin",
    bmp: "\0-"
  },
  {
    name: "InBassa_Vah",
    astral: "\uD81A[\uDED0-\uDEFF]"
  },
  {
    name: "InBatak",
    bmp: "ᯀ-᯿"
  },
  {
    name: "InBengali",
    bmp: "ঀ-৿"
  },
  {
    name: "InBhaiksuki",
    astral: "\uD807[\uDC00-\uDC6F]"
  },
  {
    name: "InBlock_Elements",
    bmp: "▀-▟"
  },
  {
    name: "InBopomofo",
    bmp: "㄀-ㄯ"
  },
  {
    name: "InBopomofo_Extended",
    bmp: "ㆠ-ㆿ"
  },
  {
    name: "InBox_Drawing",
    bmp: "─-╿"
  },
  {
    name: "InBrahmi",
    astral: "\uD804[\uDC00-\uDC7F]"
  },
  {
    name: "InBraille_Patterns",
    bmp: "⠀-⣿"
  },
  {
    name: "InBuginese",
    bmp: "ᨀ-᨟"
  },
  {
    name: "InBuhid",
    bmp: "ᝀ-᝟"
  },
  {
    name: "InByzantine_Musical_Symbols",
    astral: "\uD834[\uDC00-\uDCFF]"
  },
  {
    name: "InCJK_Compatibility",
    bmp: "㌀-㏿"
  },
  {
    name: "InCJK_Compatibility_Forms",
    bmp: "︰-﹏"
  },
  {
    name: "InCJK_Compatibility_Ideographs",
    bmp: "豈-﫿"
  },
  {
    name: "InCJK_Compatibility_Ideographs_Supplement",
    astral: "\uD87E[\uDC00-\uDE1F]"
  },
  {
    name: "InCJK_Radicals_Supplement",
    bmp: "⺀-⻿"
  },
  {
    name: "InCJK_Strokes",
    bmp: "㇀-㇯"
  },
  {
    name: "InCJK_Symbols_And_Punctuation",
    bmp: "　-〿"
  },
  {
    name: "InCJK_Unified_Ideographs",
    bmp: "一-鿿"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_A",
    bmp: "㐀-䶿"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_B",
    astral: "[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_C",
    astral: "\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_D",
    astral: "\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_E",
    astral: "\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]"
  },
  {
    name: "InCJK_Unified_Ideographs_Extension_F",
    astral: "\uD873[\uDEB0-\uDFFF]|[\uD874-\uD879][\uDC00-\uDFFF]|\uD87A[\uDC00-\uDFEF]"
  },
  {
    name: "InCarian",
    astral: "\uD800[\uDEA0-\uDEDF]"
  },
  {
    name: "InCaucasian_Albanian",
    astral: "\uD801[\uDD30-\uDD6F]"
  },
  {
    name: "InChakma",
    astral: "\uD804[\uDD00-\uDD4F]"
  },
  {
    name: "InCham",
    bmp: "ꨀ-꩟"
  },
  {
    name: "InCherokee",
    bmp: "Ꭰ-᏿"
  },
  {
    name: "InCherokee_Supplement",
    bmp: "ꭰ-ꮿ"
  },
  {
    name: "InChess_Symbols",
    astral: "\uD83E[\uDE00-\uDE6F]"
  },
  {
    name: "InCombining_Diacritical_Marks",
    bmp: "̀-ͯ"
  },
  {
    name: "InCombining_Diacritical_Marks_Extended",
    bmp: "᪰-᫿"
  },
  {
    name: "InCombining_Diacritical_Marks_For_Symbols",
    bmp: "⃐-⃿"
  },
  {
    name: "InCombining_Diacritical_Marks_Supplement",
    bmp: "᷀-᷿"
  },
  {
    name: "InCombining_Half_Marks",
    bmp: "︠-︯"
  },
  {
    name: "InCommon_Indic_Number_Forms",
    bmp: "꠰-꠿"
  },
  {
    name: "InControl_Pictures",
    bmp: "␀-␿"
  },
  {
    name: "InCoptic",
    bmp: "Ⲁ-⳿"
  },
  {
    name: "InCoptic_Epact_Numbers",
    astral: "\uD800[\uDEE0-\uDEFF]"
  },
  {
    name: "InCounting_Rod_Numerals",
    astral: "\uD834[\uDF60-\uDF7F]"
  },
  {
    name: "InCuneiform",
    astral: "\uD808[\uDC00-\uDFFF]"
  },
  {
    name: "InCuneiform_Numbers_And_Punctuation",
    astral: "\uD809[\uDC00-\uDC7F]"
  },
  {
    name: "InCurrency_Symbols",
    bmp: "₠-⃏"
  },
  {
    name: "InCypriot_Syllabary",
    astral: "\uD802[\uDC00-\uDC3F]"
  },
  {
    name: "InCyrillic",
    bmp: "Ѐ-ӿ"
  },
  {
    name: "InCyrillic_Extended_A",
    bmp: "ⷠ-ⷿ"
  },
  {
    name: "InCyrillic_Extended_B",
    bmp: "Ꙁ-ꚟ"
  },
  {
    name: "InCyrillic_Extended_C",
    bmp: "ᲀ-᲏"
  },
  {
    name: "InCyrillic_Supplement",
    bmp: "Ԁ-ԯ"
  },
  {
    name: "InDeseret",
    astral: "\uD801[\uDC00-\uDC4F]"
  },
  {
    name: "InDevanagari",
    bmp: "ऀ-ॿ"
  },
  {
    name: "InDevanagari_Extended",
    bmp: "꣠-ꣿ"
  },
  {
    name: "InDingbats",
    bmp: "✀-➿"
  },
  {
    name: "InDogra",
    astral: "\uD806[\uDC00-\uDC4F]"
  },
  {
    name: "InDomino_Tiles",
    astral: "\uD83C[\uDC30-\uDC9F]"
  },
  {
    name: "InDuployan",
    astral: "\uD82F[\uDC00-\uDC9F]"
  },
  {
    name: "InEarly_Dynastic_Cuneiform",
    astral: "\uD809[\uDC80-\uDD4F]"
  },
  {
    name: "InEgyptian_Hieroglyphs",
    astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]"
  },
  {
    name: "InElbasan",
    astral: "\uD801[\uDD00-\uDD2F]"
  },
  {
    name: "InEmoticons",
    astral: "\uD83D[\uDE00-\uDE4F]"
  },
  {
    name: "InEnclosed_Alphanumeric_Supplement",
    astral: "\uD83C[\uDD00-\uDDFF]"
  },
  {
    name: "InEnclosed_Alphanumerics",
    bmp: "①-⓿"
  },
  {
    name: "InEnclosed_CJK_Letters_And_Months",
    bmp: "㈀-㋿"
  },
  {
    name: "InEnclosed_Ideographic_Supplement",
    astral: "\uD83C[\uDE00-\uDEFF]"
  },
  {
    name: "InEthiopic",
    bmp: "ሀ-፿"
  },
  {
    name: "InEthiopic_Extended",
    bmp: "ⶀ-⷟"
  },
  {
    name: "InEthiopic_Extended_A",
    bmp: "꬀-꬯"
  },
  {
    name: "InEthiopic_Supplement",
    bmp: "ᎀ-᎟"
  },
  {
    name: "InGeneral_Punctuation",
    bmp: " -⁯"
  },
  {
    name: "InGeometric_Shapes",
    bmp: "■-◿"
  },
  {
    name: "InGeometric_Shapes_Extended",
    astral: "\uD83D[\uDF80-\uDFFF]"
  },
  {
    name: "InGeorgian",
    bmp: "Ⴀ-ჿ"
  },
  {
    name: "InGeorgian_Extended",
    bmp: "Ა-Ჿ"
  },
  {
    name: "InGeorgian_Supplement",
    bmp: "ⴀ-⴯"
  },
  {
    name: "InGlagolitic",
    bmp: "Ⰰ-ⱟ"
  },
  {
    name: "InGlagolitic_Supplement",
    astral: "\uD838[\uDC00-\uDC2F]"
  },
  {
    name: "InGothic",
    astral: "\uD800[\uDF30-\uDF4F]"
  },
  {
    name: "InGrantha",
    astral: "\uD804[\uDF00-\uDF7F]"
  },
  {
    name: "InGreek_And_Coptic",
    bmp: "Ͱ-Ͽ"
  },
  {
    name: "InGreek_Extended",
    bmp: "ἀ-῿"
  },
  {
    name: "InGujarati",
    bmp: "઀-૿"
  },
  {
    name: "InGunjala_Gondi",
    astral: "\uD807[\uDD60-\uDDAF]"
  },
  {
    name: "InGurmukhi",
    bmp: "਀-੿"
  },
  {
    name: "InHalfwidth_And_Fullwidth_Forms",
    bmp: "＀-￯"
  },
  {
    name: "InHangul_Compatibility_Jamo",
    bmp: "㄰-㆏"
  },
  {
    name: "InHangul_Jamo",
    bmp: "ᄀ-ᇿ"
  },
  {
    name: "InHangul_Jamo_Extended_A",
    bmp: "ꥠ-꥿"
  },
  {
    name: "InHangul_Jamo_Extended_B",
    bmp: "ힰ-퟿"
  },
  {
    name: "InHangul_Syllables",
    bmp: "가-힯"
  },
  {
    name: "InHanifi_Rohingya",
    astral: "\uD803[\uDD00-\uDD3F]"
  },
  {
    name: "InHanunoo",
    bmp: "ᜠ-᜿"
  },
  {
    name: "InHatran",
    astral: "\uD802[\uDCE0-\uDCFF]"
  },
  {
    name: "InHebrew",
    bmp: "֐-׿"
  },
  {
    name: "InHigh_Private_Use_Surrogates",
    bmp: "\uDB80-\uDBFF"
  },
  {
    name: "InHigh_Surrogates",
    bmp: "\uD800-\uDB7F"
  },
  {
    name: "InHiragana",
    bmp: "぀-ゟ"
  },
  {
    name: "InIPA_Extensions",
    bmp: "ɐ-ʯ"
  },
  {
    name: "InIdeographic_Description_Characters",
    bmp: "⿰-⿿"
  },
  {
    name: "InIdeographic_Symbols_And_Punctuation",
    astral: "\uD81B[\uDFE0-\uDFFF]"
  },
  {
    name: "InImperial_Aramaic",
    astral: "\uD802[\uDC40-\uDC5F]"
  },
  {
    name: "InIndic_Siyaq_Numbers",
    astral: "\uD83B[\uDC70-\uDCBF]"
  },
  {
    name: "InInscriptional_Pahlavi",
    astral: "\uD802[\uDF60-\uDF7F]"
  },
  {
    name: "InInscriptional_Parthian",
    astral: "\uD802[\uDF40-\uDF5F]"
  },
  {
    name: "InJavanese",
    bmp: "ꦀ-꧟"
  },
  {
    name: "InKaithi",
    astral: "\uD804[\uDC80-\uDCCF]"
  },
  {
    name: "InKana_Extended_A",
    astral: "\uD82C[\uDD00-\uDD2F]"
  },
  {
    name: "InKana_Supplement",
    astral: "\uD82C[\uDC00-\uDCFF]"
  },
  {
    name: "InKanbun",
    bmp: "㆐-㆟"
  },
  {
    name: "InKangxi_Radicals",
    bmp: "⼀-⿟"
  },
  {
    name: "InKannada",
    bmp: "ಀ-೿"
  },
  {
    name: "InKatakana",
    bmp: "゠-ヿ"
  },
  {
    name: "InKatakana_Phonetic_Extensions",
    bmp: "ㇰ-ㇿ"
  },
  {
    name: "InKayah_Li",
    bmp: "꤀-꤯"
  },
  {
    name: "InKharoshthi",
    astral: "\uD802[\uDE00-\uDE5F]"
  },
  {
    name: "InKhmer",
    bmp: "ក-៿"
  },
  {
    name: "InKhmer_Symbols",
    bmp: "᧠-᧿"
  },
  {
    name: "InKhojki",
    astral: "\uD804[\uDE00-\uDE4F]"
  },
  {
    name: "InKhudawadi",
    astral: "\uD804[\uDEB0-\uDEFF]"
  },
  {
    name: "InLao",
    bmp: "຀-໿"
  },
  {
    name: "InLatin_1_Supplement",
    bmp: "-ÿ"
  },
  {
    name: "InLatin_Extended_A",
    bmp: "Ā-ſ"
  },
  {
    name: "InLatin_Extended_Additional",
    bmp: "Ḁ-ỿ"
  },
  {
    name: "InLatin_Extended_B",
    bmp: "ƀ-ɏ"
  },
  {
    name: "InLatin_Extended_C",
    bmp: "Ⱡ-Ɀ"
  },
  {
    name: "InLatin_Extended_D",
    bmp: "꜠-ꟿ"
  },
  {
    name: "InLatin_Extended_E",
    bmp: "ꬰ-꭯"
  },
  {
    name: "InLepcha",
    bmp: "ᰀ-ᱏ"
  },
  {
    name: "InLetterlike_Symbols",
    bmp: "℀-⅏"
  },
  {
    name: "InLimbu",
    bmp: "ᤀ-᥏"
  },
  {
    name: "InLinear_A",
    astral: "\uD801[\uDE00-\uDF7F]"
  },
  {
    name: "InLinear_B_Ideograms",
    astral: "\uD800[\uDC80-\uDCFF]"
  },
  {
    name: "InLinear_B_Syllabary",
    astral: "\uD800[\uDC00-\uDC7F]"
  },
  {
    name: "InLisu",
    bmp: "ꓐ-꓿"
  },
  {
    name: "InLow_Surrogates",
    bmp: "\uDC00-\uDFFF"
  },
  {
    name: "InLycian",
    astral: "\uD800[\uDE80-\uDE9F]"
  },
  {
    name: "InLydian",
    astral: "\uD802[\uDD20-\uDD3F]"
  },
  {
    name: "InMahajani",
    astral: "\uD804[\uDD50-\uDD7F]"
  },
  {
    name: "InMahjong_Tiles",
    astral: "\uD83C[\uDC00-\uDC2F]"
  },
  {
    name: "InMakasar",
    astral: "\uD807[\uDEE0-\uDEFF]"
  },
  {
    name: "InMalayalam",
    bmp: "ഀ-ൿ"
  },
  {
    name: "InMandaic",
    bmp: "ࡀ-࡟"
  },
  {
    name: "InManichaean",
    astral: "\uD802[\uDEC0-\uDEFF]"
  },
  {
    name: "InMarchen",
    astral: "\uD807[\uDC70-\uDCBF]"
  },
  {
    name: "InMasaram_Gondi",
    astral: "\uD807[\uDD00-\uDD5F]"
  },
  {
    name: "InMathematical_Alphanumeric_Symbols",
    astral: "\uD835[\uDC00-\uDFFF]"
  },
  {
    name: "InMathematical_Operators",
    bmp: "∀-⋿"
  },
  {
    name: "InMayan_Numerals",
    astral: "\uD834[\uDEE0-\uDEFF]"
  },
  {
    name: "InMedefaidrin",
    astral: "\uD81B[\uDE40-\uDE9F]"
  },
  {
    name: "InMeetei_Mayek",
    bmp: "ꯀ-꯿"
  },
  {
    name: "InMeetei_Mayek_Extensions",
    bmp: "ꫠ-꫿"
  },
  {
    name: "InMende_Kikakui",
    astral: "\uD83A[\uDC00-\uDCDF]"
  },
  {
    name: "InMeroitic_Cursive",
    astral: "\uD802[\uDDA0-\uDDFF]"
  },
  {
    name: "InMeroitic_Hieroglyphs",
    astral: "\uD802[\uDD80-\uDD9F]"
  },
  {
    name: "InMiao",
    astral: "\uD81B[\uDF00-\uDF9F]"
  },
  {
    name: "InMiscellaneous_Mathematical_Symbols_A",
    bmp: "⟀-⟯"
  },
  {
    name: "InMiscellaneous_Mathematical_Symbols_B",
    bmp: "⦀-⧿"
  },
  {
    name: "InMiscellaneous_Symbols",
    bmp: "☀-⛿"
  },
  {
    name: "InMiscellaneous_Symbols_And_Arrows",
    bmp: "⬀-⯿"
  },
  {
    name: "InMiscellaneous_Symbols_And_Pictographs",
    astral: "\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]"
  },
  {
    name: "InMiscellaneous_Technical",
    bmp: "⌀-⏿"
  },
  {
    name: "InModi",
    astral: "\uD805[\uDE00-\uDE5F]"
  },
  {
    name: "InModifier_Tone_Letters",
    bmp: "꜀-ꜟ"
  },
  {
    name: "InMongolian",
    bmp: "᠀-᢯"
  },
  {
    name: "InMongolian_Supplement",
    astral: "\uD805[\uDE60-\uDE7F]"
  },
  {
    name: "InMro",
    astral: "\uD81A[\uDE40-\uDE6F]"
  },
  {
    name: "InMultani",
    astral: "\uD804[\uDE80-\uDEAF]"
  },
  {
    name: "InMusical_Symbols",
    astral: "\uD834[\uDD00-\uDDFF]"
  },
  {
    name: "InMyanmar",
    bmp: "က-႟"
  },
  {
    name: "InMyanmar_Extended_A",
    bmp: "ꩠ-ꩿ"
  },
  {
    name: "InMyanmar_Extended_B",
    bmp: "ꧠ-꧿"
  },
  {
    name: "InNKo",
    bmp: "߀-߿"
  },
  {
    name: "InNabataean",
    astral: "\uD802[\uDC80-\uDCAF]"
  },
  {
    name: "InNew_Tai_Lue",
    bmp: "ᦀ-᧟"
  },
  {
    name: "InNewa",
    astral: "\uD805[\uDC00-\uDC7F]"
  },
  {
    name: "InNumber_Forms",
    bmp: "⅐-↏"
  },
  {
    name: "InNushu",
    astral: "\uD82C[\uDD70-\uDEFF]"
  },
  {
    name: "InOgham",
    bmp: " -᚟"
  },
  {
    name: "InOl_Chiki",
    bmp: "᱐-᱿"
  },
  {
    name: "InOld_Hungarian",
    astral: "\uD803[\uDC80-\uDCFF]"
  },
  {
    name: "InOld_Italic",
    astral: "\uD800[\uDF00-\uDF2F]"
  },
  {
    name: "InOld_North_Arabian",
    astral: "\uD802[\uDE80-\uDE9F]"
  },
  {
    name: "InOld_Permic",
    astral: "\uD800[\uDF50-\uDF7F]"
  },
  {
    name: "InOld_Persian",
    astral: "\uD800[\uDFA0-\uDFDF]"
  },
  {
    name: "InOld_Sogdian",
    astral: "\uD803[\uDF00-\uDF2F]"
  },
  {
    name: "InOld_South_Arabian",
    astral: "\uD802[\uDE60-\uDE7F]"
  },
  {
    name: "InOld_Turkic",
    astral: "\uD803[\uDC00-\uDC4F]"
  },
  {
    name: "InOptical_Character_Recognition",
    bmp: "⑀-⑟"
  },
  {
    name: "InOriya",
    bmp: "଀-୿"
  },
  {
    name: "InOrnamental_Dingbats",
    astral: "\uD83D[\uDE50-\uDE7F]"
  },
  {
    name: "InOsage",
    astral: "\uD801[\uDCB0-\uDCFF]"
  },
  {
    name: "InOsmanya",
    astral: "\uD801[\uDC80-\uDCAF]"
  },
  {
    name: "InPahawh_Hmong",
    astral: "\uD81A[\uDF00-\uDF8F]"
  },
  {
    name: "InPalmyrene",
    astral: "\uD802[\uDC60-\uDC7F]"
  },
  {
    name: "InPau_Cin_Hau",
    astral: "\uD806[\uDEC0-\uDEFF]"
  },
  {
    name: "InPhags_Pa",
    bmp: "ꡀ-꡿"
  },
  {
    name: "InPhaistos_Disc",
    astral: "\uD800[\uDDD0-\uDDFF]"
  },
  {
    name: "InPhoenician",
    astral: "\uD802[\uDD00-\uDD1F]"
  },
  {
    name: "InPhonetic_Extensions",
    bmp: "ᴀ-ᵿ"
  },
  {
    name: "InPhonetic_Extensions_Supplement",
    bmp: "ᶀ-ᶿ"
  },
  {
    name: "InPlaying_Cards",
    astral: "\uD83C[\uDCA0-\uDCFF]"
  },
  {
    name: "InPrivate_Use_Area",
    bmp: "-"
  },
  {
    name: "InPsalter_Pahlavi",
    astral: "\uD802[\uDF80-\uDFAF]"
  },
  {
    name: "InRejang",
    bmp: "ꤰ-꥟"
  },
  {
    name: "InRumi_Numeral_Symbols",
    astral: "\uD803[\uDE60-\uDE7F]"
  },
  {
    name: "InRunic",
    bmp: "ᚠ-᛿"
  },
  {
    name: "InSamaritan",
    bmp: "ࠀ-࠿"
  },
  {
    name: "InSaurashtra",
    bmp: "ꢀ-꣟"
  },
  {
    name: "InSharada",
    astral: "\uD804[\uDD80-\uDDDF]"
  },
  {
    name: "InShavian",
    astral: "\uD801[\uDC50-\uDC7F]"
  },
  {
    name: "InShorthand_Format_Controls",
    astral: "\uD82F[\uDCA0-\uDCAF]"
  },
  {
    name: "InSiddham",
    astral: "\uD805[\uDD80-\uDDFF]"
  },
  {
    name: "InSinhala",
    bmp: "඀-෿"
  },
  {
    name: "InSinhala_Archaic_Numbers",
    astral: "\uD804[\uDDE0-\uDDFF]"
  },
  {
    name: "InSmall_Form_Variants",
    bmp: "﹐-﹯"
  },
  {
    name: "InSogdian",
    astral: "\uD803[\uDF30-\uDF6F]"
  },
  {
    name: "InSora_Sompeng",
    astral: "\uD804[\uDCD0-\uDCFF]"
  },
  {
    name: "InSoyombo",
    astral: "\uD806[\uDE50-\uDEAF]"
  },
  {
    name: "InSpacing_Modifier_Letters",
    bmp: "ʰ-˿"
  },
  {
    name: "InSpecials",
    bmp: "￰-￿"
  },
  {
    name: "InSundanese",
    bmp: "ᮀ-ᮿ"
  },
  {
    name: "InSundanese_Supplement",
    bmp: "᳀-᳏"
  },
  {
    name: "InSuperscripts_And_Subscripts",
    bmp: "⁰-₟"
  },
  {
    name: "InSupplemental_Arrows_A",
    bmp: "⟰-⟿"
  },
  {
    name: "InSupplemental_Arrows_B",
    bmp: "⤀-⥿"
  },
  {
    name: "InSupplemental_Arrows_C",
    astral: "\uD83E[\uDC00-\uDCFF]"
  },
  {
    name: "InSupplemental_Mathematical_Operators",
    bmp: "⨀-⫿"
  },
  {
    name: "InSupplemental_Punctuation",
    bmp: "⸀-⹿"
  },
  {
    name: "InSupplemental_Symbols_And_Pictographs",
    astral: "\uD83E[\uDD00-\uDDFF]"
  },
  {
    name: "InSupplementary_Private_Use_Area_A",
    astral: "[\uDB80-\uDBBF][\uDC00-\uDFFF]"
  },
  {
    name: "InSupplementary_Private_Use_Area_B",
    astral: "[\uDBC0-\uDBFF][\uDC00-\uDFFF]"
  },
  {
    name: "InSutton_SignWriting",
    astral: "\uD836[\uDC00-\uDEAF]"
  },
  {
    name: "InSyloti_Nagri",
    bmp: "ꠀ-꠯"
  },
  {
    name: "InSyriac",
    bmp: "܀-ݏ"
  },
  {
    name: "InSyriac_Supplement",
    bmp: "ࡠ-࡯"
  },
  {
    name: "InTagalog",
    bmp: "ᜀ-ᜟ"
  },
  {
    name: "InTagbanwa",
    bmp: "ᝠ-᝿"
  },
  {
    name: "InTags",
    astral: "\uDB40[\uDC00-\uDC7F]"
  },
  {
    name: "InTai_Le",
    bmp: "ᥐ-᥿"
  },
  {
    name: "InTai_Tham",
    bmp: "ᨠ-᪯"
  },
  {
    name: "InTai_Viet",
    bmp: "ꪀ-꫟"
  },
  {
    name: "InTai_Xuan_Jing_Symbols",
    astral: "\uD834[\uDF00-\uDF5F]"
  },
  {
    name: "InTakri",
    astral: "\uD805[\uDE80-\uDECF]"
  },
  {
    name: "InTamil",
    bmp: "஀-௿"
  },
  {
    name: "InTangut",
    astral: "[\uD81C-\uD821][\uDC00-\uDFFF]"
  },
  {
    name: "InTangut_Components",
    astral: "\uD822[\uDC00-\uDEFF]"
  },
  {
    name: "InTelugu",
    bmp: "ఀ-౿"
  },
  {
    name: "InThaana",
    bmp: "ހ-޿"
  },
  {
    name: "InThai",
    bmp: "฀-๿"
  },
  {
    name: "InTibetan",
    bmp: "ༀ-࿿"
  },
  {
    name: "InTifinagh",
    bmp: "ⴰ-⵿"
  },
  {
    name: "InTirhuta",
    astral: "\uD805[\uDC80-\uDCDF]"
  },
  {
    name: "InTransport_And_Map_Symbols",
    astral: "\uD83D[\uDE80-\uDEFF]"
  },
  {
    name: "InUgaritic",
    astral: "\uD800[\uDF80-\uDF9F]"
  },
  {
    name: "InUnified_Canadian_Aboriginal_Syllabics",
    bmp: "᐀-ᙿ"
  },
  {
    name: "InUnified_Canadian_Aboriginal_Syllabics_Extended",
    bmp: "ᢰ-᣿"
  },
  {
    name: "InVai",
    bmp: "ꔀ-꘿"
  },
  {
    name: "InVariation_Selectors",
    bmp: "︀-️"
  },
  {
    name: "InVariation_Selectors_Supplement",
    astral: "\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "InVedic_Extensions",
    bmp: "᳐-᳿"
  },
  {
    name: "InVertical_Forms",
    bmp: "︐-︟"
  },
  {
    name: "InWarang_Citi",
    astral: "\uD806[\uDCA0-\uDCFF]"
  },
  {
    name: "InYi_Radicals",
    bmp: "꒐-꓏"
  },
  {
    name: "InYi_Syllables",
    bmp: "ꀀ-꒏"
  },
  {
    name: "InYijing_Hexagram_Symbols",
    bmp: "䷀-䷿"
  },
  {
    name: "InZanabazar_Square",
    astral: "\uD806[\uDE00-\uDE4F]"
  },
  {
    name: "Inundefined",
    astral: "\uD803[\uDE80-\uDEBF\uDFB0-\uDFFF]|\uD806[\uDD00-\uDD5F\uDDA0-\uDDFF]|\uD807[\uDFB0-\uDFFF]|\uD80D[\uDC30-\uDC3F]|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDD8F]|\uD82C[\uDD30-\uDD6F]|\uD838[\uDD00-\uDD4F\uDEC0-\uDEFF]|\uD83B[\uDD00-\uDD4F]|\uD83E[\uDE70-\uDFFF]|[\uD880-\uD883][\uDC00-\uDFFF]|\uD884[\uDC00-\uDF4F]"
  }
], u8 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(j7);
  /*!
   * XRegExp Unicode Blocks 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2010-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   */
  var i = function(D) {
    if (!D.addUnicodeData)
      throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks");
    D.addUnicodeData(n.default);
  };
  r.default = i, u.exports = r.default;
});
r0(u8);
var V7 = [
  {
    name: "C",
    alias: "Other",
    isBmpLast: !0,
    bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࣈ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫁-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹓-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟鿽-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꟀꟁꟋ-ꟴ꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
    astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]"
  },
  {
    name: "Cc",
    alias: "Control",
    bmp: "\0--"
  },
  {
    name: "Cf",
    alias: "Format",
    bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻",
    astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]"
  },
  {
    name: "Cn",
    alias: "Unassigned",
    bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࣈ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫁-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹓-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟鿽-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꟀꟁꟋ-ꟴ꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
    astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]"
  },
  {
    name: "Co",
    alias: "Private_Use",
    bmp: "-",
    astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]"
  },
  {
    name: "Cs",
    alias: "Surrogate",
    bmp: "\uD800-\uDFFF"
  },
  {
    name: "L",
    alias: "Letter",
    bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "LC",
    alias: "Cased_Letter",
    bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞿꟂ-ꟊꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
    astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDD00-\uDD43]"
  },
  {
    name: "Ll",
    alias: "Lowercase_Letter",
    bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟃꟈꟊꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
    astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]"
  },
  {
    name: "Lm",
    alias: "Modifier_Letter",
    bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ",
    astral: "\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD838[\uDD37-\uDD3D]|𞥋"
  },
  {
    name: "Lo",
    alias: "Other_Letter",
    bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD838[\uDD00-\uDD2C\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Lt",
    alias: "Titlecase_Letter",
    bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ"
  },
  {
    name: "Lu",
    alias: "Uppercase_Letter",
    bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟂꟄ-ꟇꟉꟵＡ-Ｚ",
    astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]"
  },
  {
    name: "M",
    alias: "Mark",
    bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫀᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
    astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "Mc",
    alias: "Spacing_Mark",
    bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
    astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]"
  },
  {
    name: "Me",
    alias: "Enclosing_Mark",
    bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲"
  },
  {
    name: "Mn",
    alias: "Nonspacing_Mark",
    bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿᫀᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
    astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "N",
    alias: "Number",
    bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
    astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]"
  },
  {
    name: "Nd",
    alias: "Decimal_Number",
    bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
    astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]"
  },
  {
    name: "Nl",
    alias: "Letter_Number",
    bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
    astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]"
  },
  {
    name: "No",
    alias: "Other_Number",
    bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
    astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]"
  },
  {
    name: "P",
    alias: "Punctuation",
    bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
    astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
  },
  {
    name: "Pc",
    alias: "Connector_Punctuation",
    bmp: "_‿⁀⁔︳︴﹍-﹏＿"
  },
  {
    name: "Pd",
    alias: "Dash_Punctuation",
    bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－",
    astral: "𐺭"
  },
  {
    name: "Pe",
    alias: "Close_Punctuation",
    bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
  },
  {
    name: "Pf",
    alias: "Final_Punctuation",
    bmp: "»’”›⸃⸅⸊⸍⸝⸡"
  },
  {
    name: "Pi",
    alias: "Initial_Punctuation",
    bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠"
  },
  {
    name: "Po",
    alias: "Other_Punctuation",
    bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
    astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
  },
  {
    name: "Ps",
    alias: "Open_Punctuation",
    bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
  },
  {
    name: "S",
    alias: "Symbol",
    bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
    astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]"
  },
  {
    name: "Sc",
    alias: "Currency_Symbol",
    bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
    astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰"
  },
  {
    name: "Sk",
    alias: "Modifier_Symbol",
    bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯁＾｀￣",
    astral: "\uD83C[\uDFFB-\uDFFF]"
  },
  {
    name: "Sm",
    alias: "Math_Symbol",
    bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
    astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]"
  },
  {
    name: "So",
    alias: "Other_Symbol",
    bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
    astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]"
  },
  {
    name: "Z",
    alias: "Separator",
    bmp: "    - \u2028\u2029  　"
  },
  {
    name: "Zl",
    alias: "Line_Separator",
    bmp: "\u2028"
  },
  {
    name: "Zp",
    alias: "Paragraph_Separator",
    bmp: "\u2029"
  },
  {
    name: "Zs",
    alias: "Space_Separator",
    bmp: "    -   　"
  }
], e8 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(V7);
  /*!
   * XRegExp Unicode Categories 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2010-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   */
  var i = function(D) {
    if (!D.addUnicodeData)
      throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
    D.addUnicodeData(n.default);
  };
  r.default = i, u.exports = r.default;
});
r0(e8);
var K7 = [
  {
    name: "ASCII",
    bmp: "\0-"
  },
  {
    name: "Alphabetic",
    bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Any",
    isBmpLast: !0,
    bmp: "\0-￿",
    astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]"
  },
  {
    name: "Default_Ignorable_Code_Point",
    bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸",
    astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]"
  },
  {
    name: "Lowercase",
    bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟃꟈꟊꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
    astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]"
  },
  {
    name: "Noncharacter_Code_Point",
    bmp: "﷐-﷯￾￿",
    astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]"
  },
  {
    name: "Uppercase",
    bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟂꟄ-ꟇꟉꟵＡ-Ｚ",
    astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]"
  },
  {
    name: "White_Space",
    bmp: "	-\r    - \u2028\u2029  　"
  }
], r8 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(K7);
  /*!
   * XRegExp Unicode Properties 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2012-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   */
  var i = function(D) {
    if (!D.addUnicodeData)
      throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
    var E = n.default;
    E.push({
      name: "Assigned",
      // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
      // Categories addon is required to use this property
      inverseOf: "Cn"
    }), D.addUnicodeData(E);
  };
  r.default = i, u.exports = r.default;
});
r0(r8);
var G7 = [
  {
    name: "Adlam",
    astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]"
  },
  {
    name: "Ahom",
    astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3F]"
  },
  {
    name: "Anatolian_Hieroglyphs",
    astral: "\uD811[\uDC00-\uDE46]"
  },
  {
    name: "Arabic",
    bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࣇ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
    astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]"
  },
  {
    name: "Armenian",
    bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ"
  },
  {
    name: "Avestan",
    astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]"
  },
  {
    name: "Balinese",
    bmp: "ᬀ-ᭋ᭐-᭼"
  },
  {
    name: "Bamum",
    bmp: "ꚠ-꛷",
    astral: "\uD81A[\uDC00-\uDE38]"
  },
  {
    name: "Bassa_Vah",
    astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]"
  },
  {
    name: "Batak",
    bmp: "ᯀ-᯳᯼-᯿"
  },
  {
    name: "Bengali",
    bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾"
  },
  {
    name: "Bhaiksuki",
    astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]"
  },
  {
    name: "Bopomofo",
    bmp: "˪˫ㄅ-ㄯㆠ-ㆿ"
  },
  {
    name: "Brahmi",
    astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]"
  },
  {
    name: "Braille",
    bmp: "⠀-⣿"
  },
  {
    name: "Buginese",
    bmp: "ᨀ-ᨛ᨞᨟"
  },
  {
    name: "Buhid",
    bmp: "ᝀ-ᝓ"
  },
  {
    name: "Canadian_Aboriginal",
    bmp: "᐀-ᙿᢰ-ᣵ"
  },
  {
    name: "Carian",
    astral: "\uD800[\uDEA0-\uDED0]"
  },
  {
    name: "Caucasian_Albanian",
    astral: "\uD801[\uDD30-\uDD63\uDD6F]"
  },
  {
    name: "Chakma",
    astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]"
  },
  {
    name: "Cham",
    bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟"
  },
  {
    name: "Cherokee",
    bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ"
  },
  {
    name: "Chorasmian",
    astral: "\uD803[\uDFB0-\uDFCB]"
  },
  {
    name: "Common",
    bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹒⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
    astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD81B[\uDFE2\uDFE3]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]"
  },
  {
    name: "Coptic",
    bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿"
  },
  {
    name: "Cuneiform",
    astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]"
  },
  {
    name: "Cypriot",
    astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]"
  },
  {
    name: "Cyrillic",
    bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯"
  },
  {
    name: "Deseret",
    astral: "\uD801[\uDC00-\uDC4F]"
  },
  {
    name: "Devanagari",
    bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ"
  },
  {
    name: "Dives_Akuru",
    astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]"
  },
  {
    name: "Dogra",
    astral: "\uD806[\uDC00-\uDC3B]"
  },
  {
    name: "Duployan",
    astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]"
  },
  {
    name: "Egyptian_Hieroglyphs",
    astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]"
  },
  {
    name: "Elbasan",
    astral: "\uD801[\uDD00-\uDD27]"
  },
  {
    name: "Elymaic",
    astral: "\uD803[\uDFE0-\uDFF6]"
  },
  {
    name: "Ethiopic",
    bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"
  },
  {
    name: "Georgian",
    bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ"
  },
  {
    name: "Glagolitic",
    bmp: "Ⰰ-Ⱞⰰ-ⱞ",
    astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]"
  },
  {
    name: "Gothic",
    astral: "\uD800[\uDF30-\uDF4A]"
  },
  {
    name: "Grantha",
    astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]"
  },
  {
    name: "Greek",
    bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
    astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]"
  },
  {
    name: "Gujarati",
    bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿"
  },
  {
    name: "Gunjala_Gondi",
    astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]"
  },
  {
    name: "Gurmukhi",
    bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶"
  },
  {
    name: "Han",
    bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿼豈-舘並-龎",
    astral: "\uD81B[\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Hangul",
    bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
  },
  {
    name: "Hanifi_Rohingya",
    astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]"
  },
  {
    name: "Hanunoo",
    bmp: "ᜠ-᜴"
  },
  {
    name: "Hatran",
    astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]"
  },
  {
    name: "Hebrew",
    bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ"
  },
  {
    name: "Hiragana",
    bmp: "ぁ-ゖゝ-ゟ",
    astral: "\uD82C[\uDC01-\uDD1E\uDD50-\uDD52]|🈀"
  },
  {
    name: "Imperial_Aramaic",
    astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]"
  },
  {
    name: "Inherited",
    bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫀ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
    astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "Inscriptional_Pahlavi",
    astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]"
  },
  {
    name: "Inscriptional_Parthian",
    astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]"
  },
  {
    name: "Javanese",
    bmp: "ꦀ-꧍꧐-꧙꧞꧟"
  },
  {
    name: "Kaithi",
    astral: "\uD804[\uDC80-\uDCC1\uDCCD]"
  },
  {
    name: "Kannada",
    bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ"
  },
  {
    name: "Katakana",
    bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
    astral: "\uD82C[\uDC00\uDD64-\uDD67]"
  },
  {
    name: "Kayah_Li",
    bmp: "꤀-꤭꤯"
  },
  {
    name: "Kharoshthi",
    astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]"
  },
  {
    name: "Khitan_Small_Script",
    astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]"
  },
  {
    name: "Khmer",
    bmp: "ក-៝០-៩៰-៹᧠-᧿"
  },
  {
    name: "Khojki",
    astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]"
  },
  {
    name: "Khudawadi",
    astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]"
  },
  {
    name: "Lao",
    bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ"
  },
  {
    name: "Latin",
    bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞿꟂ-ꟊꟵ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ"
  },
  {
    name: "Lepcha",
    bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ"
  },
  {
    name: "Limbu",
    bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏"
  },
  {
    name: "Linear_A",
    astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]"
  },
  {
    name: "Linear_B",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]"
  },
  {
    name: "Lisu",
    bmp: "ꓐ-꓿",
    astral: "𑾰"
  },
  {
    name: "Lycian",
    astral: "\uD800[\uDE80-\uDE9C]"
  },
  {
    name: "Lydian",
    astral: "\uD802[\uDD20-\uDD39\uDD3F]"
  },
  {
    name: "Mahajani",
    astral: "\uD804[\uDD50-\uDD76]"
  },
  {
    name: "Makasar",
    astral: "\uD807[\uDEE0-\uDEF8]"
  },
  {
    name: "Malayalam",
    bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ"
  },
  {
    name: "Mandaic",
    bmp: "ࡀ-࡛࡞"
  },
  {
    name: "Manichaean",
    astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]"
  },
  {
    name: "Marchen",
    astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]"
  },
  {
    name: "Masaram_Gondi",
    astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]"
  },
  {
    name: "Medefaidrin",
    astral: "\uD81B[\uDE40-\uDE9A]"
  },
  {
    name: "Meetei_Mayek",
    bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹"
  },
  {
    name: "Mende_Kikakui",
    astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]"
  },
  {
    name: "Meroitic_Cursive",
    astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]"
  },
  {
    name: "Meroitic_Hieroglyphs",
    astral: "\uD802[\uDD80-\uDD9F]"
  },
  {
    name: "Miao",
    astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]"
  },
  {
    name: "Modi",
    astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]"
  },
  {
    name: "Mongolian",
    bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
    astral: "\uD805[\uDE60-\uDE6C]"
  },
  {
    name: "Mro",
    astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]"
  },
  {
    name: "Multani",
    astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]"
  },
  {
    name: "Myanmar",
    bmp: "က-႟ꧠ-ꧾꩠ-ꩿ"
  },
  {
    name: "Nabataean",
    astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]"
  },
  {
    name: "Nandinagari",
    astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]"
  },
  {
    name: "New_Tai_Lue",
    bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟"
  },
  {
    name: "Newa",
    astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]"
  },
  {
    name: "Nko",
    bmp: "߀-ߺ߽-߿"
  },
  {
    name: "Nushu",
    astral: "𖿡|\uD82C[\uDD70-\uDEFB]"
  },
  {
    name: "Nyiakeng_Puachue_Hmong",
    astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]"
  },
  {
    name: "Ogham",
    bmp: " -᚜"
  },
  {
    name: "Ol_Chiki",
    bmp: "᱐-᱿"
  },
  {
    name: "Old_Hungarian",
    astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]"
  },
  {
    name: "Old_Italic",
    astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]"
  },
  {
    name: "Old_North_Arabian",
    astral: "\uD802[\uDE80-\uDE9F]"
  },
  {
    name: "Old_Permic",
    astral: "\uD800[\uDF50-\uDF7A]"
  },
  {
    name: "Old_Persian",
    astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]"
  },
  {
    name: "Old_Sogdian",
    astral: "\uD803[\uDF00-\uDF27]"
  },
  {
    name: "Old_South_Arabian",
    astral: "\uD802[\uDE60-\uDE7F]"
  },
  {
    name: "Old_Turkic",
    astral: "\uD803[\uDC00-\uDC48]"
  },
  {
    name: "Oriya",
    bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷"
  },
  {
    name: "Osage",
    astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]"
  },
  {
    name: "Osmanya",
    astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]"
  },
  {
    name: "Pahawh_Hmong",
    astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]"
  },
  {
    name: "Palmyrene",
    astral: "\uD802[\uDC60-\uDC7F]"
  },
  {
    name: "Pau_Cin_Hau",
    astral: "\uD806[\uDEC0-\uDEF8]"
  },
  {
    name: "Phags_Pa",
    bmp: "ꡀ-꡷"
  },
  {
    name: "Phoenician",
    astral: "\uD802[\uDD00-\uDD1B\uDD1F]"
  },
  {
    name: "Psalter_Pahlavi",
    astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]"
  },
  {
    name: "Rejang",
    bmp: "ꤰ-꥓꥟"
  },
  {
    name: "Runic",
    bmp: "ᚠ-ᛪᛮ-ᛸ"
  },
  {
    name: "Samaritan",
    bmp: "ࠀ-࠭࠰-࠾"
  },
  {
    name: "Saurashtra",
    bmp: "ꢀ-ꣅ꣎-꣙"
  },
  {
    name: "Sharada",
    astral: "\uD804[\uDD80-\uDDDF]"
  },
  {
    name: "Shavian",
    astral: "\uD801[\uDC50-\uDC7F]"
  },
  {
    name: "Siddham",
    astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]"
  },
  {
    name: "SignWriting",
    astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]"
  },
  {
    name: "Sinhala",
    bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
    astral: "\uD804[\uDDE1-\uDDF4]"
  },
  {
    name: "Sogdian",
    astral: "\uD803[\uDF30-\uDF59]"
  },
  {
    name: "Sora_Sompeng",
    astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]"
  },
  {
    name: "Soyombo",
    astral: "\uD806[\uDE50-\uDEA2]"
  },
  {
    name: "Sundanese",
    bmp: "ᮀ-ᮿ᳀-᳇"
  },
  {
    name: "Syloti_Nagri",
    bmp: "ꠀ-꠬"
  },
  {
    name: "Syriac",
    bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ"
  },
  {
    name: "Tagalog",
    bmp: "ᜀ-ᜌᜎ-᜔"
  },
  {
    name: "Tagbanwa",
    bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ"
  },
  {
    name: "Tai_Le",
    bmp: "ᥐ-ᥭᥰ-ᥴ"
  },
  {
    name: "Tai_Tham",
    bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭"
  },
  {
    name: "Tai_Viet",
    bmp: "ꪀ-ꫂꫛ-꫟"
  },
  {
    name: "Takri",
    astral: "\uD805[\uDE80-\uDEB8\uDEC0-\uDEC9]"
  },
  {
    name: "Tamil",
    bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺",
    astral: "\uD807[\uDFC0-\uDFF1\uDFFF]"
  },
  {
    name: "Tangut",
    astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]"
  },
  {
    name: "Telugu",
    bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౷-౿"
  },
  {
    name: "Thaana",
    bmp: "ހ-ޱ"
  },
  {
    name: "Thai",
    bmp: "ก-ฺเ-๛"
  },
  {
    name: "Tibetan",
    bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚"
  },
  {
    name: "Tifinagh",
    bmp: "ⴰ-ⵧⵯ⵰⵿"
  },
  {
    name: "Tirhuta",
    astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]"
  },
  {
    name: "Ugaritic",
    astral: "\uD800[\uDF80-\uDF9D\uDF9F]"
  },
  {
    name: "Vai",
    bmp: "ꔀ-ꘫ"
  },
  {
    name: "Wancho",
    astral: "\uD838[\uDEC0-\uDEF9\uDEFF]"
  },
  {
    name: "Warang_Citi",
    astral: "\uD806[\uDCA0-\uDCF2\uDCFF]"
  },
  {
    name: "Yezidi",
    astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]"
  },
  {
    name: "Yi",
    bmp: "ꀀ-ꒌ꒐-꓆"
  },
  {
    name: "Zanabazar_Square",
    astral: "\uD806[\uDE00-\uDE47]"
  }
], t8 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(G7);
  /*!
   * XRegExp Unicode Scripts 4.4.1
   * <xregexp.com>
   * Steven Levithan (c) 2010-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   */
  var i = function(D) {
    if (!D.addUnicodeData)
      throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
    D.addUnicodeData(n.default);
  };
  r.default = i, u.exports = r.default;
});
r0(t8);
var n8 = Yu(function(u, r) {
  Z0(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var n = Nu(Y6), i = Nu(J6), o = Nu(X6), D = Nu(Q6), E = Nu(u8), c = Nu(e8), p = Nu(r8), v = Nu(t8);
  (0, i.default)(n.default), (0, o.default)(n.default), (0, D.default)(n.default), (0, E.default)(n.default), (0, c.default)(n.default), (0, p.default)(n.default), (0, v.default)(n.default);
  var m = n.default;
  r.default = m, u.exports = r.default;
}), S = r0(n8);
n8.OuterXRegExp;
const z7 = "[̀-̹]";
S(`([\\p{Latin}][\\p{Greek}][\\p{Cyrillic}][0-9._-]${z7})`);
const q7 = S("[0-9A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u0131\\u0134-\\u013E\\u0141-\\u0148\\u014A-\\u017E\\u018F\\u01A0\\u01A1\\u01AF\\u01B0\\u01CD-\\u01DC\\u01DE-\\u01E3\\u01E6-\\u01F0\\u01F4\\u01F5\\u01F8-\\u021B\\u021E\\u021F\\u0226-\\u0233\\u0259\\u02BB\\u02BC\\u02EC\\u0300-\\u0304\\u0306-\\u030C\\u030F-\\u0311\\u0313\\u0314\\u031B\\u0323-\\u0328\\u032D\\u032E\\u0330\\u0331\\u0335\\u0338\\u0339\\u0342\\u0345\\u037B-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03CE\\u03FC-\\u045F\\u048A-\\u0529\\u052E\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0586\\u05B4\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u063F\\u0641-\\u0655\\u0660-\\u0669\\u0670-\\u0672\\u0674\\u0679-\\u068D\\u068F-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE-\\u06FC\\u06FF\\u0750-\\u07B1\\u08A0-\\u08AC\\u08B2\\u08B6-\\u08BD\\u0901-\\u094D\\u094F\\u0950\\u0956\\u0957\\u0960-\\u0963\\u0966-\\u096F\\u0971-\\u0977\\u0979-\\u097F\\u0981-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09E0-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A35\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A5C\\u0A66-\\u0A74\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B43\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5F-\\u0B61\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C01-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C60\\u0C61\\u0C66-\\u0C6F\\u0C80\\u0C82\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D02\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D43\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D54-\\u0D57\\u0D60\\u0D61\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D8E\\u0D91-\\u0D96\\u0D9A-\\u0DA5\\u0DA7-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDE\\u0DF2\\u0E01-\\u0E32\\u0E34-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB2\\u0EB4-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDE\\u0EDF\\u0F00\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F3E-\\u0F42\\u0F44-\\u0F47\\u0F49-\\u0F4C\\u0F4E-\\u0F51\\u0F53-\\u0F56\\u0F58-\\u0F5B\\u0F5D-\\u0F68\\u0F6A-\\u0F6C\\u0F71\\u0F72\\u0F74\\u0F7A-\\u0F80\\u0F82-\\u0F84\\u0F86-\\u0F92\\u0F94-\\u0F97\\u0F99-\\u0F9C\\u0F9E-\\u0FA1\\u0FA3-\\u0FA6\\u0FA8-\\u0FAB\\u0FAD-\\u0FB8\\u0FBA-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10C7\\u10CD\\u10D0-\\u10F0\\u10F7-\\u10FA\\u10FD-\\u10FF\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u1780-\\u17A2\\u17A5-\\u17A7\\u17A9-\\u17B3\\u17B6-\\u17CA\\u17D2\\u17D7\\u17DC\\u17E0-\\u17E9\\u1C80-\\u1C88\\u1E00-\\u1E99\\u1E9E\\u1EA0-\\u1EF9\\u1F00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F70\\u1F72\\u1F74\\u1F76\\u1F78\\u1F7A\\u1F7C\\u1F80-\\u1FB4\\u1FB6-\\u1FBA\\u1FBC\\u1FC2-\\u1FC4\\u1FC6-\\u1FC8\\u1FCA\\u1FCC\\u1FD0-\\u1FD2\\u1FD6-\\u1FDA\\u1FE0-\\u1FE2\\u1FE4-\\u1FEA\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FF8\\u1FFA\\u1FFC\\u2D27\\u2D2D\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3005-\\u3007\\u3041-\\u3096\\u3099\\u309A\\u309D\\u309E\\u30A1-\\u30FA\\u30FC-\\u30FE\\u3105-\\u312D\\u31A0-\\u31BA\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA660\\uA661\\uA674-\\uA67B\\uA67F\\uA69F\\uA717-\\uA71F\\uA788\\uA78D\\uA78E\\uA790-\\uA793\\uA7A0-\\uA7AA\\uA7AE\\uA7FA\\uA9E7-\\uA9FE\\uAA60-\\uAA76\\uAA7A-\\uAA7F\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAC00-\\uD7A3\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u20000-\\u2A6D6\\u2A700-\\u2B734\\u2B740-\\u2B81D\\u2B820-\\u2CEA1]"), Z7 = S("['\\-.\\:\\u00B7\\u0375\\u058A\\u05F3\\u05F4\\u06FD\\u06FE\\u0F0B\\u200C\\u200D\\u2010\\u2019\\u2027\\u30A0\\u30FB]");
S.union([Z7, q7], "i");
S("[\\u0338\\u058a\\u2010\\u2019\\u2027\\u30a0\\u02bb\\u02bc\\u0620\\u0F8C\\u0F8D\\u0F8E\\u0F8F\\u01CD-\\u01DC\\u1C80-\\u1C8F\\u1E00-\\u1E9B\\u1F00-\\u1FFF\\uA640-\\uA69F\\uA720-\\uA7FF]");
S("\\p{InBasic_Latin}");
S("\\p{InLatin-1_Supplement}");
S("\\p{InLatin_Extended-A}");
S("\\p{InLatin_Extended-B}");
S("\\p{InIPA_Extensions}");
S("\\p{InSpacing_Modifier_Letters}");
S("\\p{InCombining_Diacritical_Marks}");
S("\\p{InGreek_and_Coptic}");
S("\\p{InCyrillic}");
S("\\p{InArmenian}");
S("\\p{InHebrew}");
S("\\p{InArabic}");
S("\\p{InSyriac}");
S("\\p{InThaana}");
S("\\p{InDevanagari}");
S("\\p{InBengali}");
S("\\p{InGurmukhi}");
S("\\p{InGujarati}");
S("\\p{InOriya}");
S("\\p{InTamil}");
S("\\p{InTelugu}");
S("\\p{InKannada}");
S("\\p{InMalayalam}");
S("\\p{InSinhala}");
S("\\p{InThai}");
S("\\p{InLao}");
S("\\p{InTibetan}");
S("\\p{InMyanmar}");
S("\\p{InGeorgian}");
S("\\p{InHangul_Jamo}");
S("\\p{InEthiopic}");
S("\\p{InCherokee}");
S("\\p{InUnified_Canadian_Aboriginal_Syllabics}");
S("\\p{InOgham}");
S("\\p{InRunic}");
S("\\p{InTagalog}");
S("\\p{InHanunoo}");
S("\\p{InBuhid}");
S("\\p{InTagbanwa}");
S("\\p{InKhmer}");
S("\\p{InMongolian}");
S("\\p{InLimbu}");
S("\\p{InTai_Le}");
S("\\p{InKhmer_Symbols}");
S("\\p{InPhonetic_Extensions}");
S("\\p{InLatin_Extended_Additional}");
S("\\p{InGreek_Extended}");
S("\\p{InGeneral_Punctuation}");
S("\\p{InSuperscripts_and_Subscripts}");
S("\\p{InCurrency_Symbols}");
S("\\p{InCombining_Diacritical_Marks_for_Symbols}");
S("\\p{InLetterlike_Symbols}");
S("\\p{InNumber_Forms}");
S("\\p{InArrows}");
S("\\p{InMathematical_Operators}");
S("\\p{InMiscellaneous_Technical}");
S("\\p{InControl_Pictures}");
S("\\p{InOptical_Character_Recognition}");
S("\\p{InEnclosed_Alphanumerics}");
S("\\p{InBox_Drawing}");
S("\\p{InBlock_Elements}");
S("\\p{InGeometric_Shapes}");
S("\\p{InMiscellaneous_Symbols}");
S("\\p{InDingbats}");
S("\\p{InMiscellaneous_Mathematical_Symbols-A}");
S("\\p{InSupplemental_Arrows-A}");
S("\\p{InBraille_Patterns}");
S("\\p{InSupplemental_Arrows-B}");
S("\\p{InMiscellaneous_Mathematical_Symbols-B}");
S("\\p{InSupplemental_Mathematical_Operators}");
S("\\p{InMiscellaneous_Symbols_and_Arrows}");
S("\\p{InCJK_Radicals_Supplement}");
S("\\p{InKangxi_Radicals}");
S("\\p{InIdeographic_Description_Characters}");
S("\\p{InCJK_Symbols_and_Punctuation}");
S("\\p{InHiragana}");
S("\\p{InKatakana}");
S("\\p{InBopomofo}");
S("\\p{InHangul_Compatibility_Jamo}");
S("\\p{InKanbun}");
S("\\p{InBopomofo_Extended}");
S("\\p{InKatakana_Phonetic_Extensions}");
S("\\p{InEnclosed_CJK_Letters_and_Months}");
S("\\p{InCJK_Compatibility}");
S("\\p{InCJK_Unified_Ideographs_Extension_A}");
S("\\p{InYijing_Hexagram_Symbols}");
S("\\p{InCJK_Unified_Ideographs}");
S("\\p{InYi_Syllables}");
S("\\p{InYi_Radicals}");
S("\\p{InHangul_Syllables}");
S("\\p{InHigh_Surrogates}");
S("\\p{InHigh_Private_Use_Surrogates}");
S("\\p{InLow_Surrogates}");
S("\\p{InPrivate_Use_Area}");
S("\\p{InCJK_Compatibility_Ideographs}");
S("\\p{InAlphabetic_Presentation_Forms}");
S("\\p{InArabic_Presentation_Forms-A}");
S("\\p{InVariation_Selectors}");
S("\\p{InCombining_Half_Marks}");
S("\\p{InCJK_Compatibility_Forms}");
S("\\p{InSmall_Form_Variants}");
S("\\p{InArabic_Presentation_Forms-B}");
S("\\p{InHalfwidth_and_Fullwidth_Forms}");
S("\\p{InSpecials}");
var W7 = () => /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFF\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFE\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFD\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFC\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFB\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|[\u2695\u2696\u2708]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\u200D[\u2695\u2696\u2708])?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F?\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F?\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83D\uDC41\uFE0F?\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F?\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F?\u200D\u26A7|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDEF1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764(?:\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\u200D(?:\uD83D\uDD25|\uD83E\uDE79))|\uD83D\uDC41\uFE0F?|\uD83C\uDFF3\uFE0F?|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F?\u20E3|\uD83E\uDD3C(?:\uD83C[\uDFFB-\uDFFF])|\u2764\uFE0F?|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD3C\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B50]|\uD83C[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]/g;
S("\\p{Letter}");
S("\\p{Lowercase_Letter}");
S("\\p{Uppercase_Letter}");
S("\\p{Titlecase_Letter}");
S("\\p{Cased_Letter}");
S("\\p{Modifier_Letter}");
S("\\p{Other_Letter}");
S("\\p{Mark}");
S("\\p{Non_Spacing_Mark}");
S("\\p{Enclosing_Mark}");
S("\\p{Separator}");
S("\\p{Space_Separator}");
S("\\p{Line_Separator}");
S("\\p{Paragraph_Separator}");
S("\\p{Symbol}");
S("\\p{Math_Symbol}");
S("\\p{Currency_Symbol}");
S("\\p{Modifier_Symbol}");
S("\\p{Other_Symbol}");
S("\\p{Number}");
S("\\p{Nd}");
S("\\p{Letter_Number}");
S("\\p{Other_Number}");
S("\\p{Punctuation}");
S("\\p{Dash_Punctuation}");
S("\\p{Open_Punctuation}");
S("\\p{Close_Punctuation}");
S("\\p{Initial_Punctuation}");
S("\\p{Final_Punctuation}");
S("\\p{Connector_Punctuation}");
S("\\p{Other_Punctuation}");
S("\\p{Other}");
S("\\p{Control}");
S("\\p{Format}");
S("\\p{Private_Use}");
S("\\p{Surrogate}");
S("\\p{Unassigned}");
S(W7());
S("\\p{Common}");
S("\\p{Arabic}");
S("\\p{Armenian}");
S("\\p{Bengali}");
S("\\p{Bopomofo}");
S("\\p{Braille}");
S("\\p{Buhid}");
S("\\p{Canadian_Aboriginal}");
S("\\p{Cherokee}");
S("\\p{Cyrillic}");
S("\\p{Devanagari}");
S("\\p{Ethiopic}");
S("\\p{Georgian}");
S("\\p{Greek}");
S("\\p{Gujarati}");
S("\\p{Gurmukhi}");
S("\\p{Han}");
S("\\p{Hangul}");
S("\\p{Hanunoo}");
S("\\p{Hebrew}");
S("\\p{Hiragana}");
S("\\p{Inherited}");
S("\\p{Kannada}");
S("\\p{Katakana}");
S("\\p{Khmer}");
S("\\p{Lao}");
S("\\p{Latin}");
S("\\p{Limbu}");
S("\\p{Malayalam}");
S("\\p{Mongolian}");
S("\\p{Myanmar}");
S("\\p{Ogham}");
S("\\p{Oriya}");
S("\\p{Runic}");
S("\\p{Sinhala}");
S("\\p{Syriac}");
S("\\p{Tagalog}");
S("\\p{Tagbanwa}");
S("\\p{TaiLe}");
S("\\p{Tamil}");
S("\\p{Telugu}");
S("\\p{Thaana}");
S("\\p{Thai}");
S("\\p{Tibetan}");
S("\\p{Yi}");
export {
  In as N,
  Hn as R,
  f1 as a,
  N8 as d,
  ht as g,
  Q7 as k,
  X7 as s
};
