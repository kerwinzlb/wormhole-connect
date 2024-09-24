import { g as Ir, d as pe, y as cn, n as or, cl as jr, cm as Nh, aa as Ph, o as Qe, ap as Bh, cn as Va, c8 as Jc, co as $h, cp as Xc, c5 as kh, cq as Ai, ak as Ae, a2 as qa } from "./index-DV1w5RNX.mjs";
import { s as Dh, h as xh, u as Mh } from "./index-CK5gKYu_.mjs";
var jh = Fh;
function Fh(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER, r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function() {
    return r = r % t, r++;
  };
}
const Uh = /* @__PURE__ */ Ir(jh);
var ds = { exports: {} }, vo, Ga;
function Hh() {
  if (Ga)
    return vo;
  Ga = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, o = n * 7, i = n * 365.25;
  vo = function(u, h) {
    h = h || {};
    var b = typeof u;
    if (b === "string" && u.length > 0)
      return s(u);
    if (b === "number" && isFinite(u))
      return h.long ? f(u) : l(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function s(u) {
    if (u = String(u), !(u.length > 100)) {
      var h = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (h) {
        var b = parseFloat(h[1]), _ = (h[2] || "ms").toLowerCase();
        switch (_) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * i;
          case "weeks":
          case "week":
          case "w":
            return b * o;
          case "days":
          case "day":
          case "d":
            return b * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function l(u) {
    var h = Math.abs(u);
    return h >= n ? Math.round(u / n) + "d" : h >= r ? Math.round(u / r) + "h" : h >= t ? Math.round(u / t) + "m" : h >= e ? Math.round(u / e) + "s" : u + "ms";
  }
  function f(u) {
    var h = Math.abs(u);
    return h >= n ? c(u, h, n, "day") : h >= r ? c(u, h, r, "hour") : h >= t ? c(u, h, t, "minute") : h >= e ? c(u, h, e, "second") : u + " ms";
  }
  function c(u, h, b, _) {
    var R = h >= b * 1.5;
    return Math.round(u / b) + " " + _ + (R ? "s" : "");
  }
  return vo;
}
function zh(e) {
  r.debug = r, r.default = r, r.coerce = f, r.disable = i, r.enable = o, r.enabled = s, r.humanize = Hh(), r.destroy = c, Object.keys(e).forEach((u) => {
    r[u] = e[u];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(u) {
    let h = 0;
    for (let b = 0; b < u.length; b++)
      h = (h << 5) - h + u.charCodeAt(b), h |= 0;
    return r.colors[Math.abs(h) % r.colors.length];
  }
  r.selectColor = t;
  function r(u) {
    let h, b = null, _, R;
    function T(...N) {
      if (!T.enabled)
        return;
      const D = T, L = Number(/* @__PURE__ */ new Date()), O = L - (h || L);
      D.diff = O, D.prev = h, D.curr = L, h = L, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
      let S = 0;
      N[0] = N[0].replace(/%([a-zA-Z%])/g, (X, J) => {
        if (X === "%%")
          return "%";
        S++;
        const j = r.formatters[J];
        if (typeof j == "function") {
          const W = N[S];
          X = j.call(D, W), N.splice(S, 1), S--;
        }
        return X;
      }), r.formatArgs.call(D, N), (D.log || r.log).apply(D, N);
    }
    return T.namespace = u, T.useColors = r.useColors(), T.color = r.selectColor(u), T.extend = n, T.destroy = r.destroy, Object.defineProperty(T, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => b !== null ? b : (_ !== r.namespaces && (_ = r.namespaces, R = r.enabled(u)), R),
      set: (N) => {
        b = N;
      }
    }), typeof r.init == "function" && r.init(T), T;
  }
  function n(u, h) {
    const b = r(this.namespace + (typeof h > "u" ? ":" : h) + u);
    return b.log = this.log, b;
  }
  function o(u) {
    r.save(u), r.namespaces = u, r.names = [], r.skips = [];
    let h;
    const b = (typeof u == "string" ? u : "").split(/[\s,]+/), _ = b.length;
    for (h = 0; h < _; h++)
      b[h] && (u = b[h].replace(/\*/g, ".*?"), u[0] === "-" ? r.skips.push(new RegExp("^" + u.slice(1) + "$")) : r.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [
      ...r.names.map(l),
      ...r.skips.map(l).map((h) => "-" + h)
    ].join(",");
    return r.enable(""), u;
  }
  function s(u) {
    if (u[u.length - 1] === "*")
      return !0;
    let h, b;
    for (h = 0, b = r.skips.length; h < b; h++)
      if (r.skips[h].test(u))
        return !1;
    for (h = 0, b = r.names.length; h < b; h++)
      if (r.names[h].test(u))
        return !0;
    return !1;
  }
  function l(u) {
    return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function f(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Wh = zh;
(function(e, t) {
  t.formatArgs = n, t.save = o, t.load = i, t.useColors = r, t.storage = s(), t.destroy = /* @__PURE__ */ (() => {
    let f = !1;
    return () => {
      f || (f = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(f) {
    if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    f.splice(1, 0, c, "color: inherit");
    let u = 0, h = 0;
    f[0].replace(/%[a-zA-Z%]/g, (b) => {
      b !== "%%" && (u++, b === "%c" && (h = u));
    }), f.splice(h, 0, c);
  }
  t.log = console.debug || console.log || (() => {
  });
  function o(f) {
    try {
      f ? t.storage.setItem("debug", f) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let f;
    try {
      f = t.storage.getItem("debug");
    } catch {
    }
    return !f && typeof pe.process < "u" && "env" in pe.process && (f = pe.process.env.DEBUG), f;
  }
  function s() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = Wh(t);
  const { formatters: l } = e.exports;
  l.j = function(f) {
    try {
      return JSON.stringify(f);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(ds, ds.exports);
var Vh = ds.exports, qt = {}, Sr = {}, js = $n;
$n.default = $n;
$n.stable = el;
$n.stableStringify = el;
var _i = "[...]", Yc = "[Circular]", kr = [], Br = [];
function Qc() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function $n(e, t, r, n) {
  typeof n > "u" && (n = Qc()), hs(e, "", 0, [], void 0, 0, n);
  var o;
  try {
    Br.length === 0 ? o = JSON.stringify(e, t, r) : o = JSON.stringify(e, tl(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; kr.length !== 0; ) {
      var i = kr.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2];
    }
  }
  return o;
}
function Jr(e, t, r, n) {
  var o = Object.getOwnPropertyDescriptor(n, r);
  o.get !== void 0 ? o.configurable ? (Object.defineProperty(n, r, { value: e }), kr.push([n, r, t, o])) : Br.push([t, r, e]) : (n[r] = e, kr.push([n, r, t]));
}
function hs(e, t, r, n, o, i, s) {
  i += 1;
  var l;
  if (typeof e == "object" && e !== null) {
    for (l = 0; l < n.length; l++)
      if (n[l] === e) {
        Jr(Yc, e, t, o);
        return;
      }
    if (typeof s.depthLimit < "u" && i > s.depthLimit) {
      Jr(_i, e, t, o);
      return;
    }
    if (typeof s.edgesLimit < "u" && r + 1 > s.edgesLimit) {
      Jr(_i, e, t, o);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (l = 0; l < e.length; l++)
        hs(e[l], l, l, n, e, i, s);
    else {
      var f = Object.keys(e);
      for (l = 0; l < f.length; l++) {
        var c = f[l];
        hs(e[c], c, l, n, e, i, s);
      }
    }
    n.pop();
  }
}
function qh(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function el(e, t, r, n) {
  typeof n > "u" && (n = Qc());
  var o = gs(e, "", 0, [], void 0, 0, n) || e, i;
  try {
    Br.length === 0 ? i = JSON.stringify(o, t, r) : i = JSON.stringify(o, tl(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; kr.length !== 0; ) {
      var s = kr.pop();
      s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
    }
  }
  return i;
}
function gs(e, t, r, n, o, i, s) {
  i += 1;
  var l;
  if (typeof e == "object" && e !== null) {
    for (l = 0; l < n.length; l++)
      if (n[l] === e) {
        Jr(Yc, e, t, o);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof s.depthLimit < "u" && i > s.depthLimit) {
      Jr(_i, e, t, o);
      return;
    }
    if (typeof s.edgesLimit < "u" && r + 1 > s.edgesLimit) {
      Jr(_i, e, t, o);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (l = 0; l < e.length; l++)
        gs(e[l], l, l, n, e, i, s);
    else {
      var f = {}, c = Object.keys(e).sort(qh);
      for (l = 0; l < c.length; l++) {
        var u = c[l];
        gs(e[u], u, l, n, e, i, s), f[u] = e[u];
      }
      if (typeof o < "u")
        kr.push([o, t, e]), o[t] = f;
      else
        return f;
    }
    n.pop();
  }
}
function tl(e) {
  return e = typeof e < "u" ? e : function(t, r) {
    return r;
  }, function(t, r) {
    if (Br.length > 0)
      for (var n = 0; n < Br.length; n++) {
        var o = Br[n];
        if (o[1] === t && o[0] === r) {
          r = o[2], Br.splice(n, 1);
          break;
        }
      }
    return e.call(this, t, r);
  };
}
const Gh = /* @__PURE__ */ Ir(js);
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.EthereumProviderError = Sr.EthereumRpcError = void 0;
const Zh = js;
class rl extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = t, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return Zh.default(this.serialize(), Xh, 2);
  }
}
Sr.EthereumRpcError = rl;
let Kh = class extends rl {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(t, r, n) {
    if (!Jh(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, n);
  }
};
Sr.EthereumProviderError = Kh;
function Jh(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function Xh(e, t) {
  if (t !== "[Circular]")
    return t;
}
var Fs = {}, Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.errorValues = Rr.errorCodes = void 0;
Rr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
Rr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = Rr, r = Sr, n = t.errorCodes.rpc.internal, o = "Unspecified error message. This is a bug, please report it.", i = {
    code: n,
    message: s(n)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function s(b, _ = o) {
    if (Number.isInteger(b)) {
      const R = b.toString();
      if (h(t.errorValues, R))
        return t.errorValues[R].message;
      if (c(b))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return _;
  }
  e.getMessageFromCode = s;
  function l(b) {
    if (!Number.isInteger(b))
      return !1;
    const _ = b.toString();
    return !!(t.errorValues[_] || c(b));
  }
  e.isValidCode = l;
  function f(b, { fallbackError: _ = i, shouldIncludeStack: R = !1 } = {}) {
    var T, N;
    if (!_ || !Number.isInteger(_.code) || typeof _.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (b instanceof r.EthereumRpcError)
      return b.serialize();
    const D = {};
    if (b && typeof b == "object" && !Array.isArray(b) && h(b, "code") && l(b.code)) {
      const O = b;
      D.code = O.code, O.message && typeof O.message == "string" ? (D.message = O.message, h(O, "data") && (D.data = O.data)) : (D.message = s(D.code), D.data = { originalError: u(b) });
    } else {
      D.code = _.code;
      const O = (T = b) === null || T === void 0 ? void 0 : T.message;
      D.message = O && typeof O == "string" ? O : _.message, D.data = { originalError: u(b) };
    }
    const L = (N = b) === null || N === void 0 ? void 0 : N.stack;
    return R && b && L && typeof L == "string" && (D.stack = L), D;
  }
  e.serializeError = f;
  function c(b) {
    return b >= -32099 && b <= -32e3;
  }
  function u(b) {
    return b && typeof b == "object" && !Array.isArray(b) ? Object.assign({}, b) : b;
  }
  function h(b, _) {
    return Object.prototype.hasOwnProperty.call(b, _);
  }
})(Fs);
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.ethErrors = void 0;
const Us = Sr, nl = Fs, pt = Rr;
Ii.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (e) => Bt(pt.errorCodes.rpc.parse, e),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (e) => Bt(pt.errorCodes.rpc.invalidRequest, e),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (e) => Bt(pt.errorCodes.rpc.invalidParams, e),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (e) => Bt(pt.errorCodes.rpc.methodNotFound, e),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (e) => Bt(pt.errorCodes.rpc.internal, e),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Bt(t, e);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (e) => Bt(pt.errorCodes.rpc.invalidInput, e),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (e) => Bt(pt.errorCodes.rpc.resourceNotFound, e),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (e) => Bt(pt.errorCodes.rpc.resourceUnavailable, e),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (e) => Bt(pt.errorCodes.rpc.transactionRejected, e),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (e) => Bt(pt.errorCodes.rpc.methodNotSupported, e),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (e) => Bt(pt.errorCodes.rpc.limitExceeded, e)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (e) => wn(pt.errorCodes.provider.userRejectedRequest, e),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (e) => wn(pt.errorCodes.provider.unauthorized, e),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (e) => wn(pt.errorCodes.provider.unsupportedMethod, e),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (e) => wn(pt.errorCodes.provider.disconnected, e),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (e) => wn(pt.errorCodes.provider.chainDisconnected, e),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new Us.EthereumProviderError(t, r, n);
    }
  }
};
function Bt(e, t) {
  const [r, n] = il(t);
  return new Us.EthereumRpcError(e, r || nl.getMessageFromCode(e), n);
}
function wn(e, t) {
  const [r, n] = il(t);
  return new Us.EthereumProviderError(e, r || nl.getMessageFromCode(e), n);
}
function il(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
  const t = Sr;
  Object.defineProperty(e, "EthereumRpcError", { enumerable: !0, get: function() {
    return t.EthereumRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  const r = Fs;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = Ii;
  Object.defineProperty(e, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const o = Rr;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return o.errorCodes;
  } });
})(qt);
var Yh = { exports: {} }, So = { exports: {} }, rt = {
  ArrayIsArray(e) {
    return Array.isArray(e);
  },
  ArrayPrototypeIncludes(e, t) {
    return e.includes(t);
  },
  ArrayPrototypeIndexOf(e, t) {
    return e.indexOf(t);
  },
  ArrayPrototypeJoin(e, t) {
    return e.join(t);
  },
  ArrayPrototypeMap(e, t) {
    return e.map(t);
  },
  ArrayPrototypePop(e, t) {
    return e.pop(t);
  },
  ArrayPrototypePush(e, t) {
    return e.push(t);
  },
  ArrayPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  Error,
  FunctionPrototypeCall(e, t, ...r) {
    return e.call(t, ...r);
  },
  FunctionPrototypeSymbolHasInstance(e, t) {
    return Function.prototype[Symbol.hasInstance].call(e, t);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(e, t) {
    return Object.defineProperties(e, t);
  },
  ObjectDefineProperty(e, t, r) {
    return Object.defineProperty(e, t, r);
  },
  ObjectGetOwnPropertyDescriptor(e, t) {
    return Object.getOwnPropertyDescriptor(e, t);
  },
  ObjectKeys(e) {
    return Object.keys(e);
  },
  ObjectSetPrototypeOf(e, t) {
    return Object.setPrototypeOf(e, t);
  },
  Promise,
  PromisePrototypeCatch(e, t) {
    return e.catch(t);
  },
  PromisePrototypeThen(e, t, r) {
    return e.then(t, r);
  },
  PromiseReject(e) {
    return Promise.reject(e);
  },
  PromiseResolve(e) {
    return Promise.resolve(e);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(e, t) {
    return e.test(t);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  StringPrototypeToLowerCase(e) {
    return e.toLowerCase();
  },
  StringPrototypeToUpperCase(e) {
    return e.toUpperCase();
  },
  StringPrototypeTrim(e) {
    return e.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(e, t, r) {
    return e.set(t, r);
  },
  Boolean,
  Uint8Array
}, ol = { exports: {} }, mn = { exports: {} }, Za;
function kn() {
  if (Za)
    return mn.exports;
  Za = 1;
  const { AbortController: e, AbortSignal: t } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return mn.exports = e, mn.exports.AbortSignal = t, mn.exports.default = e, mn.exports;
}
(function(e) {
  const t = or, { kResistStopPropagation: r, SymbolDispose: n } = rt, o = globalThis.AbortSignal || kn().AbortSignal, i = globalThis.AbortController || kn().AbortController, s = Object.getPrototypeOf(async function() {
  }).constructor, l = globalThis.Blob || t.Blob, f = typeof l < "u" ? function(_) {
    return _ instanceof l;
  } : function(_) {
    return !1;
  }, c = (b, _) => {
    if (b !== void 0 && (b === null || typeof b != "object" || !("aborted" in b)))
      throw new ERR_INVALID_ARG_TYPE(_, "AbortSignal", b);
  }, u = (b, _) => {
    if (typeof b != "function")
      throw new ERR_INVALID_ARG_TYPE(_, "Function", b);
  };
  class h extends Error {
    constructor(_) {
      if (!Array.isArray(_))
        throw new TypeError(`Expected input to be an Array, got ${typeof _}`);
      let R = "";
      for (let T = 0; T < _.length; T++)
        R += `    ${_[T].stack}
`;
      super(R), this.name = "AggregateError", this.errors = _;
    }
  }
  e.exports = {
    AggregateError: h,
    kEmptyObject: Object.freeze({}),
    once(b) {
      let _ = !1;
      return function(...R) {
        _ || (_ = !0, b.apply(this, R));
      };
    },
    createDeferredPromise: function() {
      let b, _;
      return {
        promise: new Promise((T, N) => {
          b = T, _ = N;
        }),
        resolve: b,
        reject: _
      };
    },
    promisify(b) {
      return new Promise((_, R) => {
        b((T, ...N) => T ? R(T) : _(...N));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(b, ..._) {
      return b.replace(/%([sdifj])/g, function(...[R, T]) {
        const N = _.shift();
        return T === "f" ? N.toFixed(6) : T === "j" ? JSON.stringify(N) : T === "s" && typeof N == "object" ? `${N.constructor !== Object ? N.constructor.name : ""} {}`.trim() : N.toString();
      });
    },
    inspect(b) {
      switch (typeof b) {
        case "string":
          if (b.includes("'"))
            if (b.includes('"')) {
              if (!b.includes("`") && !b.includes("${"))
                return `\`${b}\``;
            } else
              return `"${b}"`;
          return `'${b}'`;
        case "number":
          return isNaN(b) ? "NaN" : Object.is(b, -0) ? String(b) : b;
        case "bigint":
          return `${String(b)}n`;
        case "boolean":
        case "undefined":
          return String(b);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(b) {
        return b instanceof s;
      },
      isArrayBufferView(b) {
        return ArrayBuffer.isView(b);
      }
    },
    isBlob: f,
    deprecate(b, _) {
      return b;
    },
    addAbortListener: cn.addAbortListener || function(_, R) {
      if (_ === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", _);
      c(_, "signal"), u(R, "listener");
      let T;
      return _.aborted ? queueMicrotask(() => R()) : (_.addEventListener("abort", R, {
        __proto__: null,
        once: !0,
        [r]: !0
      }), T = () => {
        _.removeEventListener("abort", R);
      }), {
        __proto__: null,
        [n]() {
          var N;
          (N = T) === null || N === void 0 || N();
        }
      };
    },
    AbortSignalAny: o.any || function(_) {
      if (_.length === 1)
        return _[0];
      const R = new i(), T = () => R.abort();
      return _.forEach((N) => {
        c(N, "signals"), N.addEventListener("abort", T, {
          once: !0
        });
      }), R.signal.addEventListener(
        "abort",
        () => {
          _.forEach((N) => N.removeEventListener("abort", T));
        },
        {
          once: !0
        }
      ), R.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(ol);
var vt = ol.exports, Hs = {};
const { format: Qh, inspect: bi, AggregateError: eg } = vt, tg = globalThis.AggregateError || eg, rg = Symbol("kIsNodeError"), ng = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], ig = /^([A-Z][a-z0-9]*)+$/, og = "__node_internal_", Ti = {};
function $r(e, t) {
  if (!e)
    throw new Ti.ERR_INTERNAL_ASSERTION(t);
}
function Ka(e) {
  let t = "", r = e.length;
  const n = e[0] === "-" ? 1 : 0;
  for (; r >= n + 4; r -= 3)
    t = `_${e.slice(r - 3, r)}${t}`;
  return `${e.slice(0, r)}${t}`;
}
function sg(e, t, r) {
  if (typeof t == "function")
    return $r(
      t.length <= r.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`
    ), t(...r);
  const n = (t.match(/%[dfijoOs]/g) || []).length;
  return $r(
    n === r.length,
    `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`
  ), r.length === 0 ? t : Qh(t, ...r);
}
function _t(e, t, r) {
  r || (r = Error);
  class n extends r {
    constructor(...i) {
      super(sg(e, t, i));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(n.prototype, {
    name: {
      value: r.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${e}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), n.prototype.code = e, n.prototype[rg] = !0, Ti[e] = n;
}
function Ja(e) {
  const t = og + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function ag(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const r = new tg([t, e], t.message);
    return r.code = t.code, r;
  }
  return e || t;
}
let fg = class extends Error {
  constructor(t = "The operation was aborted", r = void 0) {
    if (r !== void 0 && typeof r != "object")
      throw new Ti.ERR_INVALID_ARG_TYPE("options", "Object", r);
    super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
_t("ERR_ASSERTION", "%s", Error);
_t(
  "ERR_INVALID_ARG_TYPE",
  (e, t, r) => {
    $r(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let n = "The ";
    e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
    const o = [], i = [], s = [];
    for (const f of t)
      $r(typeof f == "string", "All expected entries have to be of type string"), ng.includes(f) ? o.push(f.toLowerCase()) : ig.test(f) ? i.push(f) : ($r(f !== "object", 'The value "object" should be written as "Object"'), s.push(f));
    if (i.length > 0) {
      const f = o.indexOf("object");
      f !== -1 && (o.splice(o, f, 1), i.push("Object"));
    }
    if (o.length > 0) {
      switch (o.length) {
        case 1:
          n += `of type ${o[0]}`;
          break;
        case 2:
          n += `one of type ${o[0]} or ${o[1]}`;
          break;
        default: {
          const f = o.pop();
          n += `one of type ${o.join(", ")}, or ${f}`;
        }
      }
      (i.length > 0 || s.length > 0) && (n += " or ");
    }
    if (i.length > 0) {
      switch (i.length) {
        case 1:
          n += `an instance of ${i[0]}`;
          break;
        case 2:
          n += `an instance of ${i[0]} or ${i[1]}`;
          break;
        default: {
          const f = i.pop();
          n += `an instance of ${i.join(", ")}, or ${f}`;
        }
      }
      s.length > 0 && (n += " or ");
    }
    switch (s.length) {
      case 0:
        break;
      case 1:
        s[0].toLowerCase() !== s[0] && (n += "an "), n += `${s[0]}`;
        break;
      case 2:
        n += `one of ${s[0]} or ${s[1]}`;
        break;
      default: {
        const f = s.pop();
        n += `one of ${s.join(", ")}, or ${f}`;
      }
    }
    if (r == null)
      n += `. Received ${r}`;
    else if (typeof r == "function" && r.name)
      n += `. Received function ${r.name}`;
    else if (typeof r == "object") {
      var l;
      if ((l = r.constructor) !== null && l !== void 0 && l.name)
        n += `. Received an instance of ${r.constructor.name}`;
      else {
        const f = bi(r, {
          depth: -1
        });
        n += `. Received ${f}`;
      }
    } else {
      let f = bi(r, {
        colors: !1
      });
      f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
    }
    return n;
  },
  TypeError
);
_t(
  "ERR_INVALID_ARG_VALUE",
  (e, t, r = "is invalid") => {
    let n = bi(t);
    return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
  },
  TypeError
);
_t(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, r) => {
    var n;
    const o = r != null && (n = r.constructor) !== null && n !== void 0 && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${o}.`;
  },
  TypeError
);
_t(
  "ERR_MISSING_ARGS",
  (...e) => {
    $r(e.length > 0, "At least one arg needs to be specified");
    let t;
    const r = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const n = e.pop();
          t += `The ${e.join(", ")}, and ${n} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
_t(
  "ERR_OUT_OF_RANGE",
  (e, t, r) => {
    $r(t, 'Missing "range" argument');
    let n;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = Ka(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = Ka(n)), n += "n") : n = bi(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
  },
  RangeError
);
_t("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
_t("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
_t("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
_t("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
_t("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
_t("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
_t("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
_t("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
_t("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
_t("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
_t("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var It = {
  AbortError: fg,
  aggregateTwoErrors: Ja(ag),
  hideStackFrames: Ja,
  codes: Ti
};
const {
  ArrayIsArray: zs,
  ArrayPrototypeIncludes: sl,
  ArrayPrototypeJoin: al,
  ArrayPrototypeMap: cg,
  NumberIsInteger: Ws,
  NumberIsNaN: lg,
  NumberMAX_SAFE_INTEGER: ug,
  NumberMIN_SAFE_INTEGER: dg,
  NumberParseInt: hg,
  ObjectPrototypeHasOwnProperty: gg,
  RegExpPrototypeExec: fl,
  String: _g,
  StringPrototypeToUpperCase: bg,
  StringPrototypeTrim: pg
} = rt, {
  hideStackFrames: Ft,
  codes: { ERR_SOCKET_BAD_PORT: yg, ERR_INVALID_ARG_TYPE: mt, ERR_INVALID_ARG_VALUE: ln, ERR_OUT_OF_RANGE: Dr, ERR_UNKNOWN_SIGNAL: Xa }
} = It, { normalizeEncoding: wg } = vt, { isAsyncFunction: mg, isArrayBufferView: Eg } = vt.types, Ya = {};
function vg(e) {
  return e === (e | 0);
}
function Sg(e) {
  return e === e >>> 0;
}
const Rg = /^[0-7]+$/, Ag = "must be a 32-bit unsigned integer or an octal string";
function Ig(e, t, r) {
  if (typeof e > "u" && (e = r), typeof e == "string") {
    if (fl(Rg, e) === null)
      throw new ln(t, e, Ag);
    e = hg(e, 8);
  }
  return cl(e, t), e;
}
const Tg = Ft((e, t, r = dg, n = ug) => {
  if (typeof e != "number")
    throw new mt(t, "number", e);
  if (!Ws(e))
    throw new Dr(t, "an integer", e);
  if (e < r || e > n)
    throw new Dr(t, `>= ${r} && <= ${n}`, e);
}), Og = Ft((e, t, r = -2147483648, n = 2147483647) => {
  if (typeof e != "number")
    throw new mt(t, "number", e);
  if (!Ws(e))
    throw new Dr(t, "an integer", e);
  if (e < r || e > n)
    throw new Dr(t, `>= ${r} && <= ${n}`, e);
}), cl = Ft((e, t, r = !1) => {
  if (typeof e != "number")
    throw new mt(t, "number", e);
  if (!Ws(e))
    throw new Dr(t, "an integer", e);
  const n = r ? 1 : 0, o = 4294967295;
  if (e < n || e > o)
    throw new Dr(t, `>= ${n} && <= ${o}`, e);
});
function Vs(e, t) {
  if (typeof e != "string")
    throw new mt(t, "string", e);
}
function Lg(e, t, r = void 0, n) {
  if (typeof e != "number")
    throw new mt(t, "number", e);
  if (r != null && e < r || n != null && e > n || (r != null || n != null) && lg(e))
    throw new Dr(
      t,
      `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`,
      e
    );
}
const Cg = Ft((e, t, r) => {
  if (!sl(r, e)) {
    const o = "must be one of: " + al(
      cg(r, (i) => typeof i == "string" ? `'${i}'` : _g(i)),
      ", "
    );
    throw new ln(t, e, o);
  }
});
function ll(e, t) {
  if (typeof e != "boolean")
    throw new mt(t, "boolean", e);
}
function Ro(e, t, r) {
  return e == null || !gg(e, t) ? r : e[t];
}
const Ng = Ft((e, t, r = null) => {
  const n = Ro(r, "allowArray", !1), o = Ro(r, "allowFunction", !1);
  if (!Ro(r, "nullable", !1) && e === null || !n && zs(e) || typeof e != "object" && (!o || typeof e != "function"))
    throw new mt(t, "Object", e);
}), Pg = Ft((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new mt(t, "a dictionary", e);
}), Oi = Ft((e, t, r = 0) => {
  if (!zs(e))
    throw new mt(t, "Array", e);
  if (e.length < r) {
    const n = `must be longer than ${r}`;
    throw new ln(t, e, n);
  }
});
function Bg(e, t) {
  Oi(e, t);
  for (let r = 0; r < e.length; r++)
    Vs(e[r], `${t}[${r}]`);
}
function $g(e, t) {
  Oi(e, t);
  for (let r = 0; r < e.length; r++)
    ll(e[r], `${t}[${r}]`);
}
function kg(e, t) {
  Oi(e, t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r], o = `${t}[${r}]`;
    if (n == null)
      throw new mt(o, "AbortSignal", n);
    ul(n, o);
  }
}
function Dg(e, t = "signal") {
  if (Vs(e, t), Ya[e] === void 0)
    throw Ya[bg(e)] !== void 0 ? new Xa(e + " (signals must use all capital letters)") : new Xa(e);
}
const xg = Ft((e, t = "buffer") => {
  if (!Eg(e))
    throw new mt(t, ["Buffer", "TypedArray", "DataView"], e);
});
function Mg(e, t) {
  const r = wg(t), n = e.length;
  if (r === "hex" && n % 2 !== 0)
    throw new ln("encoding", t, `is invalid for data of length ${n}`);
}
function jg(e, t = "Port", r = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && pg(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
    throw new yg(t, e, r);
  return e | 0;
}
const ul = Ft((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new mt(t, "AbortSignal", e);
}), Fg = Ft((e, t) => {
  if (typeof e != "function")
    throw new mt(t, "Function", e);
}), Ug = Ft((e, t) => {
  if (typeof e != "function" || mg(e))
    throw new mt(t, "Function", e);
}), Hg = Ft((e, t) => {
  if (e !== void 0)
    throw new mt(t, "undefined", e);
});
function zg(e, t, r) {
  if (!sl(r, e))
    throw new mt(t, `('${al(r, "|")}')`, e);
}
const Wg = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Qa(e, t) {
  if (typeof e > "u" || !fl(Wg, e))
    throw new ln(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function Vg(e) {
  if (typeof e == "string")
    return Qa(e, "hints"), e;
  if (zs(e)) {
    const t = e.length;
    let r = "";
    if (t === 0)
      return r;
    for (let n = 0; n < t; n++) {
      const o = e[n];
      Qa(o, "hints"), r += o, n !== t - 1 && (r += ", ");
    }
    return r;
  }
  throw new ln(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var Un = {
  isInt32: vg,
  isUint32: Sg,
  parseFileMode: Ig,
  validateArray: Oi,
  validateStringArray: Bg,
  validateBooleanArray: $g,
  validateAbortSignalArray: kg,
  validateBoolean: ll,
  validateBuffer: xg,
  validateDictionary: Pg,
  validateEncoding: Mg,
  validateFunction: Fg,
  validateInt32: Og,
  validateInteger: Tg,
  validateNumber: Lg,
  validateObject: Ng,
  validateOneOf: Cg,
  validatePlainFunction: Ug,
  validatePort: jg,
  validateSignalName: Dg,
  validateString: Vs,
  validateUint32: cl,
  validateUndefined: Hg,
  validateUnion: zg,
  validateAbortSignal: ul,
  validateLinkHeaderValue: Vg
}, qs = { exports: {} };
const { SymbolAsyncIterator: ef, SymbolIterator: tf, SymbolFor: Fr } = rt, dl = Fr("nodejs.stream.destroyed"), hl = Fr("nodejs.stream.errored"), _s = Fr("nodejs.stream.readable"), bs = Fr("nodejs.stream.writable"), gl = Fr("nodejs.stream.disturbed"), qg = Fr("nodejs.webstream.isClosedPromise"), Gg = Fr("nodejs.webstream.controllerErrorFunction");
function Li(e, t = !1) {
  var r;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === void 0 ? void 0 : r.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function Ci(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function Zg(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function ar(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function _l(e) {
  return !!(e && !ar(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function bl(e) {
  return !!(e && !ar(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function pl(e) {
  return !!(e && !ar(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function Kg(e) {
  return _l(e) || bl(e) || pl(e);
}
function Jg(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[ef] == "function" : t === !1 ? typeof e[tf] == "function" : typeof e[ef] == "function" || typeof e[tf] == "function";
}
function Ni(e) {
  if (!ar(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !!(e.destroyed || e[dl] || n != null && n.destroyed);
}
function yl(e) {
  if (!Ci(e))
    return null;
  if (e.writableEnded === !0)
    return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function Xg(e, t) {
  if (!Ci(e))
    return null;
  if (e.writableFinished === !0)
    return !0;
  const r = e._writableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || t === !1 && r.ended === !0 && r.length === 0);
}
function Yg(e) {
  if (!Li(e))
    return null;
  if (e.readableEnded === !0)
    return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function wl(e, t) {
  if (!Li(e))
    return null;
  const r = e._readableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || t === !1 && r.ended === !0 && r.length === 0);
}
function ml(e) {
  return e && e[_s] != null ? e[_s] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : Ni(e) ? !1 : Li(e) && e.readable && !wl(e);
}
function El(e) {
  return e && e[bs] != null ? e[bs] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : Ni(e) ? !1 : Ci(e) && e.writable && !yl(e);
}
function Qg(e, t) {
  return ar(e) ? Ni(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && ml(e) || (t == null ? void 0 : t.writable) !== !1 && El(e)) : null;
}
function e0(e) {
  var t, r;
  return ar(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function t0(e) {
  var t, r;
  return ar(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function r0(e) {
  if (!ar(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, r = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (r == null ? void 0 : r.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (r == null ? void 0 : r.closed) : typeof e._closed == "boolean" && vl(e) ? e._closed : null;
}
function vl(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function Sl(e) {
  return typeof e._sent100 == "boolean" && vl(e);
}
function n0(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function i0(e) {
  if (!ar(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !n && Sl(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === !1);
}
function o0(e) {
  var t;
  return !!(e && ((t = e[gl]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function s0(e) {
  var t, r, n, o, i, s, l, f, c, u;
  return !!(e && ((t = (r = (n = (o = (i = (s = e[hl]) !== null && s !== void 0 ? s : e.readableErrored) !== null && i !== void 0 ? i : e.writableErrored) !== null && o !== void 0 ? o : (l = e._readableState) === null || l === void 0 ? void 0 : l.errorEmitted) !== null && n !== void 0 ? n : (f = e._writableState) === null || f === void 0 ? void 0 : f.errorEmitted) !== null && r !== void 0 ? r : (c = e._readableState) === null || c === void 0 ? void 0 : c.errored) !== null && t !== void 0 ? t : !((u = e._writableState) === null || u === void 0) && u.errored));
}
var br = {
  isDestroyed: Ni,
  kIsDestroyed: dl,
  isDisturbed: o0,
  kIsDisturbed: gl,
  isErrored: s0,
  kIsErrored: hl,
  isReadable: ml,
  kIsReadable: _s,
  kIsClosedPromise: qg,
  kControllerErrorFunction: Gg,
  kIsWritable: bs,
  isClosed: r0,
  isDuplexNodeStream: Zg,
  isFinished: Qg,
  isIterable: Jg,
  isReadableNodeStream: Li,
  isReadableStream: _l,
  isReadableEnded: Yg,
  isReadableFinished: wl,
  isReadableErrored: t0,
  isNodeStream: ar,
  isWebStream: Kg,
  isWritable: El,
  isWritableNodeStream: Ci,
  isWritableStream: bl,
  isWritableEnded: yl,
  isWritableFinished: Xg,
  isWritableErrored: e0,
  isServerRequest: n0,
  isServerResponse: Sl,
  willEmitClose: i0,
  isTransformStream: pl
};
const mr = jr, { AbortError: Rl, codes: a0 } = It, { ERR_INVALID_ARG_TYPE: f0, ERR_STREAM_PREMATURE_CLOSE: rf } = a0, { kEmptyObject: ps, once: ys } = vt, { validateAbortSignal: c0, validateFunction: l0, validateObject: u0, validateBoolean: d0 } = Un, { Promise: h0, PromisePrototypeThen: g0, SymbolDispose: Al } = rt, {
  isClosed: _0,
  isReadable: nf,
  isReadableNodeStream: Ao,
  isReadableStream: b0,
  isReadableFinished: of,
  isReadableErrored: sf,
  isWritable: af,
  isWritableNodeStream: ff,
  isWritableStream: p0,
  isWritableFinished: cf,
  isWritableErrored: lf,
  isNodeStream: y0,
  willEmitClose: w0,
  kIsClosedPromise: m0
} = br;
let Xr;
function E0(e) {
  return e.setHeader && typeof e.abort == "function";
}
const ws = () => {
};
function Il(e, t, r) {
  var n, o;
  if (arguments.length === 2 ? (r = t, t = ps) : t == null ? t = ps : u0(t, "options"), l0(r, "callback"), c0(t.signal, "options.signal"), r = ys(r), b0(e) || p0(e))
    return v0(e, t, r);
  if (!y0(e))
    throw new f0("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const i = (n = t.readable) !== null && n !== void 0 ? n : Ao(e), s = (o = t.writable) !== null && o !== void 0 ? o : ff(e), l = e._writableState, f = e._readableState, c = () => {
    e.writable || b();
  };
  let u = w0(e) && Ao(e) === i && ff(e) === s, h = cf(e, !1);
  const b = () => {
    h = !0, e.destroyed && (u = !1), !(u && (!e.readable || i)) && (!i || _) && r.call(e);
  };
  let _ = of(e, !1);
  const R = () => {
    _ = !0, e.destroyed && (u = !1), !(u && (!e.writable || s)) && (!s || h) && r.call(e);
  }, T = (H) => {
    r.call(e, H);
  };
  let N = _0(e);
  const D = () => {
    N = !0;
    const H = lf(e) || sf(e);
    if (H && typeof H != "boolean")
      return r.call(e, H);
    if (i && !_ && Ao(e, !0) && !of(e, !1))
      return r.call(e, new rf());
    if (s && !h && !cf(e, !1))
      return r.call(e, new rf());
    r.call(e);
  }, L = () => {
    N = !0;
    const H = lf(e) || sf(e);
    if (H && typeof H != "boolean")
      return r.call(e, H);
    r.call(e);
  }, O = () => {
    e.req.on("finish", b);
  };
  E0(e) ? (e.on("complete", b), u || e.on("abort", D), e.req ? O() : e.on("request", O)) : s && !l && (e.on("end", c), e.on("close", c)), !u && typeof e.aborted == "boolean" && e.on("aborted", D), e.on("end", R), e.on("finish", b), t.error !== !1 && e.on("error", T), e.on("close", D), N ? mr.nextTick(D) : l != null && l.errorEmitted || f != null && f.errorEmitted ? u || mr.nextTick(L) : (!i && (!u || nf(e)) && (h || af(e) === !1) || !s && (!u || af(e)) && (_ || nf(e) === !1) || f && e.req && e.aborted) && mr.nextTick(L);
  const S = () => {
    r = ws, e.removeListener("aborted", D), e.removeListener("complete", b), e.removeListener("abort", D), e.removeListener("request", O), e.req && e.req.removeListener("finish", b), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", b), e.removeListener("end", R), e.removeListener("error", T), e.removeListener("close", D);
  };
  if (t.signal && !N) {
    const H = () => {
      const X = r;
      S(), X.call(
        e,
        new Rl(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      mr.nextTick(H);
    else {
      Xr = Xr || vt.addAbortListener;
      const X = Xr(t.signal, H), J = r;
      r = ys((...j) => {
        X[Al](), J.apply(e, j);
      });
    }
  }
  return S;
}
function v0(e, t, r) {
  let n = !1, o = ws;
  if (t.signal)
    if (o = () => {
      n = !0, r.call(
        e,
        new Rl(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      mr.nextTick(o);
    else {
      Xr = Xr || vt.addAbortListener;
      const s = Xr(t.signal, o), l = r;
      r = ys((...f) => {
        s[Al](), l.apply(e, f);
      });
    }
  const i = (...s) => {
    n || mr.nextTick(() => r.apply(e, s));
  };
  return g0(e[m0].promise, i, i), ws;
}
function S0(e, t) {
  var r;
  let n = !1;
  return t === null && (t = ps), (r = t) !== null && r !== void 0 && r.cleanup && (d0(t.cleanup, "cleanup"), n = t.cleanup), new h0((o, i) => {
    const s = Il(e, t, (l) => {
      n && s(), l ? i(l) : o();
    });
  });
}
qs.exports = Il;
qs.exports.finished = S0;
var Tr = qs.exports;
const nr = jr, {
  aggregateTwoErrors: R0,
  codes: { ERR_MULTIPLE_CALLBACK: A0 },
  AbortError: I0
} = It, { Symbol: Tl } = rt, { kIsDestroyed: T0, isDestroyed: O0, isFinished: L0, isServerRequest: C0 } = br, Ol = Tl("kDestroy"), ms = Tl("kConstruct");
function Ll(e, t, r) {
  e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
}
function N0(e, t) {
  const r = this._readableState, n = this._writableState, o = n || r;
  return n != null && n.destroyed || r != null && r.destroyed ? (typeof t == "function" && t(), this) : (Ll(e, n, r), n && (n.destroyed = !0), r && (r.destroyed = !0), o.constructed ? uf(this, e, t) : this.once(Ol, function(i) {
    uf(this, R0(i, e), t);
  }), this);
}
function uf(e, t, r) {
  let n = !1;
  function o(i) {
    if (n)
      return;
    n = !0;
    const s = e._readableState, l = e._writableState;
    Ll(i, l, s), l && (l.closed = !0), s && (s.closed = !0), typeof r == "function" && r(i), i ? nr.nextTick(P0, e, i) : nr.nextTick(Cl, e);
  }
  try {
    e._destroy(t || null, o);
  } catch (i) {
    o(i);
  }
}
function P0(e, t) {
  Es(e, t), Cl(e);
}
function Cl(e) {
  const t = e._readableState, r = e._writableState;
  r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (r != null && r.emitClose || t != null && t.emitClose) && e.emit("close");
}
function Es(e, t) {
  const r = e._readableState, n = e._writableState;
  n != null && n.errorEmitted || r != null && r.errorEmitted || (n && (n.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t));
}
function B0() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function vs(e, t, r) {
  const n = e._readableState, o = e._writableState;
  if (o != null && o.destroyed || n != null && n.destroyed)
    return this;
  n != null && n.autoDestroy || o != null && o.autoDestroy ? e.destroy(t) : t && (t.stack, o && !o.errored && (o.errored = t), n && !n.errored && (n.errored = t), r ? nr.nextTick(Es, e, t) : Es(e, t));
}
function $0(e, t) {
  if (typeof e._construct != "function")
    return;
  const r = e._readableState, n = e._writableState;
  r && (r.constructed = !1), n && (n.constructed = !1), e.once(ms, t), !(e.listenerCount(ms) > 1) && nr.nextTick(k0, e);
}
function k0(e) {
  let t = !1;
  function r(n) {
    if (t) {
      vs(e, n ?? new A0());
      return;
    }
    t = !0;
    const o = e._readableState, i = e._writableState, s = i || o;
    o && (o.constructed = !0), i && (i.constructed = !0), s.destroyed ? e.emit(Ol, n) : n ? vs(e, n, !0) : nr.nextTick(D0, e);
  }
  try {
    e._construct((n) => {
      nr.nextTick(r, n);
    });
  } catch (n) {
    nr.nextTick(r, n);
  }
}
function D0(e) {
  e.emit(ms);
}
function df(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function Nl(e) {
  e.emit("close");
}
function x0(e, t) {
  e.emit("error", t), nr.nextTick(Nl, e);
}
function M0(e, t) {
  !e || O0(e) || (!t && !L0(e) && (t = new I0()), C0(e) ? (e.socket = null, e.destroy(t)) : df(e) ? e.abort() : df(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? nr.nextTick(x0, e, t) : nr.nextTick(Nl, e), e.destroyed || (e[T0] = !0));
}
var un = {
  construct: $0,
  destroyer: M0,
  destroy: N0,
  undestroy: B0,
  errorOrDestroy: vs
};
const { ArrayIsArray: j0, ObjectSetPrototypeOf: Pl } = rt, { EventEmitter: Pi } = cn;
function Bi(e) {
  Pi.call(this, e);
}
Pl(Bi.prototype, Pi.prototype);
Pl(Bi, Pi);
Bi.prototype.pipe = function(e, t) {
  const r = this;
  function n(u) {
    e.writable && e.write(u) === !1 && r.pause && r.pause();
  }
  r.on("data", n);
  function o() {
    r.readable && r.resume && r.resume();
  }
  e.on("drain", o), !e._isStdio && (!t || t.end !== !1) && (r.on("end", s), r.on("close", l));
  let i = !1;
  function s() {
    i || (i = !0, e.end());
  }
  function l() {
    i || (i = !0, typeof e.destroy == "function" && e.destroy());
  }
  function f(u) {
    c(), Pi.listenerCount(this, "error") === 0 && this.emit("error", u);
  }
  Ss(r, "error", f), Ss(e, "error", f);
  function c() {
    r.removeListener("data", n), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", l), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c);
  }
  return r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e;
};
function Ss(e, t, r) {
  if (typeof e.prependListener == "function")
    return e.prependListener(t, r);
  !e._events || !e._events[t] ? e.on(t, r) : j0(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
}
var Gs = {
  Stream: Bi,
  prependListener: Ss
}, Bl = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = rt, { AbortError: r, codes: n } = It, { isNodeStream: o, isWebStream: i, kControllerErrorFunction: s } = br, l = Tr, { ERR_INVALID_ARG_TYPE: f } = n;
  let c;
  const u = (h, b) => {
    if (typeof h != "object" || !("aborted" in h))
      throw new f(b, "AbortSignal", h);
  };
  e.exports.addAbortSignal = function(b, _) {
    if (u(b, "signal"), !o(_) && !i(_))
      throw new f("stream", ["ReadableStream", "WritableStream", "Stream"], _);
    return e.exports.addAbortSignalNoValidate(b, _);
  }, e.exports.addAbortSignalNoValidate = function(h, b) {
    if (typeof h != "object" || !("aborted" in h))
      return b;
    const _ = o(b) ? () => {
      b.destroy(
        new r(void 0, {
          cause: h.reason
        })
      );
    } : () => {
      b[s](
        new r(void 0, {
          cause: h.reason
        })
      );
    };
    if (h.aborted)
      _();
    else {
      c = c || vt.addAbortListener;
      const R = c(h, _);
      l(b, R[t]);
    }
    return b;
  };
})(Bl);
var $i = Bl.exports;
const { StringPrototypeSlice: hf, SymbolIterator: F0, TypedArrayPrototypeSet: ei, Uint8Array: U0 } = rt, { Buffer: Io } = or, { inspect: H0 } = vt;
var z0 = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(t) {
    const r = {
      data: t,
      next: null
    };
    this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
  }
  unshift(t) {
    const r = {
      data: t,
      next: this.head
    };
    this.length === 0 && (this.tail = r), this.head = r, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const t = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(t) {
    if (this.length === 0)
      return "";
    let r = this.head, n = "" + r.data;
    for (; (r = r.next) !== null; )
      n += t + r.data;
    return n;
  }
  concat(t) {
    if (this.length === 0)
      return Io.alloc(0);
    const r = Io.allocUnsafe(t >>> 0);
    let n = this.head, o = 0;
    for (; n; )
      ei(r, n.data, o), o += n.data.length, n = n.next;
    return r;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, r) {
    const n = this.head.data;
    if (t < n.length) {
      const o = n.slice(0, t);
      return this.head.data = n.slice(t), o;
    }
    return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[F0]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let r = "", n = this.head, o = 0;
    do {
      const i = n.data;
      if (t > i.length)
        r += i, t -= i.length;
      else {
        t === i.length ? (r += i, ++o, n.next ? this.head = n.next : this.head = this.tail = null) : (r += hf(i, 0, t), this.head = n, n.data = hf(i, t));
        break;
      }
      ++o;
    } while ((n = n.next) !== null);
    return this.length -= o, r;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const r = Io.allocUnsafe(t), n = t;
    let o = this.head, i = 0;
    do {
      const s = o.data;
      if (t > s.length)
        ei(r, s, n - t), t -= s.length;
      else {
        t === s.length ? (ei(r, s, n - t), ++i, o.next ? this.head = o.next : this.head = this.tail = null) : (ei(r, new U0(s.buffer, s.byteOffset, t), n - t), this.head = o, o.data = s.slice(t));
        break;
      }
      ++i;
    } while ((o = o.next) !== null);
    return this.length -= i, r;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, r) {
    return H0(this, {
      ...r,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: W0, NumberIsInteger: V0 } = rt, { validateInteger: q0 } = Un, { ERR_INVALID_ARG_VALUE: G0 } = It.codes;
let $l = 16 * 1024, kl = 16;
function Z0(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Dl(e) {
  return e ? kl : $l;
}
function K0(e, t) {
  q0(t, "value", 0), e ? kl = t : $l = t;
}
function J0(e, t, r, n) {
  const o = Z0(t, n, r);
  if (o != null) {
    if (!V0(o) || o < 0) {
      const i = n ? `options.${r}` : "options.highWaterMark";
      throw new G0(i, o);
    }
    return W0(o);
  }
  return Dl(e.objectMode);
}
var ki = {
  getHighWaterMark: J0,
  getDefaultHighWaterMark: Dl,
  setDefaultHighWaterMark: K0
};
const gf = jr, { PromisePrototypeThen: X0, SymbolAsyncIterator: _f, SymbolIterator: bf } = rt, { Buffer: Y0 } = or, { ERR_INVALID_ARG_TYPE: Q0, ERR_STREAM_NULL_VALUES: e_ } = It.codes;
function t_(e, t, r) {
  let n;
  if (typeof t == "string" || t instanceof Y0)
    return new e({
      objectMode: !0,
      ...r,
      read() {
        this.push(t), this.push(null);
      }
    });
  let o;
  if (t && t[_f])
    o = !0, n = t[_f]();
  else if (t && t[bf])
    o = !1, n = t[bf]();
  else
    throw new Q0("iterable", ["Iterable"], t);
  const i = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...r
  });
  let s = !1;
  i._read = function() {
    s || (s = !0, f());
  }, i._destroy = function(c, u) {
    X0(
      l(c),
      () => gf.nextTick(u, c),
      // nextTick is here in case cb throws
      (h) => gf.nextTick(u, h || c)
    );
  };
  async function l(c) {
    const u = c != null, h = typeof n.throw == "function";
    if (u && h) {
      const { value: b, done: _ } = await n.throw(c);
      if (await b, _)
        return;
    }
    if (typeof n.return == "function") {
      const { value: b } = await n.return();
      await b;
    }
  }
  async function f() {
    for (; ; ) {
      try {
        const { value: c, done: u } = o ? await n.next() : n.next();
        if (u)
          i.push(null);
        else {
          const h = c && typeof c.then == "function" ? await c : c;
          if (h === null)
            throw s = !1, new e_();
          if (i.push(h))
            continue;
          s = !1;
        }
      } catch (c) {
        i.destroy(c);
      }
      break;
    }
  }
  return i;
}
var xl = t_, To, pf;
function Di() {
  if (pf)
    return To;
  pf = 1;
  const e = jr, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: r,
    NumberIsNaN: n,
    NumberParseInt: o,
    ObjectDefineProperties: i,
    ObjectKeys: s,
    ObjectSetPrototypeOf: l,
    Promise: f,
    SafeSet: c,
    SymbolAsyncDispose: u,
    SymbolAsyncIterator: h,
    Symbol: b
  } = rt;
  To = me, me.ReadableState = ke;
  const { EventEmitter: _ } = cn, { Stream: R, prependListener: T } = Gs, { Buffer: N } = or, { addAbortSignal: D } = $i, L = Tr;
  let O = vt.debuglog("stream", (p) => {
    O = p;
  });
  const S = z0, H = un, { getHighWaterMark: X, getDefaultHighWaterMark: J } = ki, {
    aggregateTwoErrors: j,
    codes: {
      ERR_INVALID_ARG_TYPE: W,
      ERR_METHOD_NOT_IMPLEMENTED: ie,
      ERR_OUT_OF_RANGE: Q,
      ERR_STREAM_PUSH_AFTER_EOF: w,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: d
    },
    AbortError: m
  } = It, { validateObject: $ } = Un, M = b("kPaused"), { StringDecoder: P } = Nh(), F = xl;
  l(me.prototype, R.prototype), l(me, R);
  const C = () => {
  }, { errorOrDestroy: U } = H, q = 1, oe = 2, V = 4, ne = 8, ce = 16, ue = 32, Ee = 64, ge = 128, ye = 256, Pe = 512, Be = 1024, Re = 2048, I = 4096, B = 8192, Z = 16384, le = 32768, se = 65536, _e = 1 << 17, Ie = 1 << 18;
  function Te(p) {
    return {
      enumerable: !1,
      get() {
        return (this.state & p) !== 0;
      },
      set(v) {
        v ? this.state |= p : this.state &= ~p;
      }
    };
  }
  i(ke.prototype, {
    objectMode: Te(q),
    ended: Te(oe),
    endEmitted: Te(V),
    reading: Te(ne),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: Te(ce),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: Te(ue),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: Te(Ee),
    emittedReadable: Te(ge),
    readableListening: Te(ye),
    resumeScheduled: Te(Pe),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: Te(Be),
    emitClose: Te(Re),
    autoDestroy: Te(I),
    // Has it been destroyed.
    destroyed: Te(B),
    // Indicates whether the stream has finished destroying.
    closed: Te(Z),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: Te(le),
    multiAwaitDrain: Te(se),
    // If true, a maybeReadMore has been scheduled.
    readingMore: Te(_e),
    dataEmitted: Te(Ie)
  });
  function ke(p, v, re) {
    typeof re != "boolean" && (re = v instanceof hr()), this.state = Re | I | ce | ue, p && p.objectMode && (this.state |= q), re && p && p.readableObjectMode && (this.state |= q), this.highWaterMark = p ? X(this, p, "readableHighWaterMark", re) : J(!1), this.buffer = new S(), this.length = 0, this.pipes = [], this.flowing = null, this[M] = null, p && p.emitClose === !1 && (this.state &= ~Re), p && p.autoDestroy === !1 && (this.state &= ~I), this.errored = null, this.defaultEncoding = p && p.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, p && p.encoding && (this.decoder = new P(p.encoding), this.encoding = p.encoding);
  }
  function me(p) {
    if (!(this instanceof me))
      return new me(p);
    const v = this instanceof hr();
    this._readableState = new ke(p, this, v), p && (typeof p.read == "function" && (this._read = p.read), typeof p.destroy == "function" && (this._destroy = p.destroy), typeof p.construct == "function" && (this._construct = p.construct), p.signal && !v && D(p.signal, this)), R.call(this, p), H.construct(this, () => {
      this._readableState.needReadable && E(this, this._readableState);
    });
  }
  me.prototype.destroy = H.destroy, me.prototype._undestroy = H.undestroy, me.prototype._destroy = function(p, v) {
    v(p);
  }, me.prototype[_.captureRejectionSymbol] = function(p) {
    this.destroy(p);
  }, me.prototype[u] = function() {
    let p;
    return this.destroyed || (p = this.readableEnded ? null : new m(), this.destroy(p)), new f((v, re) => L(this, (he) => he && he !== p ? re(he) : v(null)));
  }, me.prototype.push = function(p, v) {
    return je(this, p, v, !1);
  }, me.prototype.unshift = function(p, v) {
    return je(this, p, v, !0);
  };
  function je(p, v, re, he) {
    O("readableAddChunk", v);
    const be = p._readableState;
    let Le;
    if (be.state & q || (typeof v == "string" ? (re = re || be.defaultEncoding, be.encoding !== re && (he && be.encoding ? v = N.from(v, re).toString(be.encoding) : (v = N.from(v, re), re = ""))) : v instanceof N ? re = "" : R._isUint8Array(v) ? (v = R._uint8ArrayToBuffer(v), re = "") : v != null && (Le = new W("chunk", ["string", "Buffer", "Uint8Array"], v))), Le)
      U(p, Le);
    else if (v === null)
      be.state &= ~ne, Ue(p, be);
    else if (be.state & q || v && v.length > 0)
      if (he)
        if (be.state & V)
          U(p, new d());
        else {
          if (be.destroyed || be.errored)
            return !1;
          nt(p, be, v, !0);
        }
      else if (be.ended)
        U(p, new w());
      else {
        if (be.destroyed || be.errored)
          return !1;
        be.state &= ~ne, be.decoder && !re ? (v = be.decoder.write(v), be.objectMode || v.length !== 0 ? nt(p, be, v, !1) : E(p, be)) : nt(p, be, v, !1);
      }
    else
      he || (be.state &= ~ne, E(p, be));
    return !be.ended && (be.length < be.highWaterMark || be.length === 0);
  }
  function nt(p, v, re, he) {
    v.flowing && v.length === 0 && !v.sync && p.listenerCount("data") > 0 ? (v.state & se ? v.awaitDrainWriters.clear() : v.awaitDrainWriters = null, v.dataEmitted = !0, p.emit("data", re)) : (v.length += v.objectMode ? 1 : re.length, he ? v.buffer.unshift(re) : v.buffer.push(re), v.state & Ee && ot(p)), E(p, v);
  }
  me.prototype.isPaused = function() {
    const p = this._readableState;
    return p[M] === !0 || p.flowing === !1;
  }, me.prototype.setEncoding = function(p) {
    const v = new P(p);
    this._readableState.decoder = v, this._readableState.encoding = this._readableState.decoder.encoding;
    const re = this._readableState.buffer;
    let he = "";
    for (const be of re)
      he += v.write(be);
    return re.clear(), he !== "" && re.push(he), this._readableState.length = he.length, this;
  };
  const Ze = 1073741824;
  function Rt(p) {
    if (p > Ze)
      throw new Q("size", "<= 1GiB", p);
    return p--, p |= p >>> 1, p |= p >>> 2, p |= p >>> 4, p |= p >>> 8, p |= p >>> 16, p++, p;
  }
  function it(p, v) {
    return p <= 0 || v.length === 0 && v.ended ? 0 : v.state & q ? 1 : n(p) ? v.flowing && v.length ? v.buffer.first().length : v.length : p <= v.length ? p : v.ended ? v.length : 0;
  }
  me.prototype.read = function(p) {
    O("read", p), p === void 0 ? p = NaN : r(p) || (p = o(p, 10));
    const v = this._readableState, re = p;
    if (p > v.highWaterMark && (v.highWaterMark = Rt(p)), p !== 0 && (v.state &= ~ge), p === 0 && v.needReadable && ((v.highWaterMark !== 0 ? v.length >= v.highWaterMark : v.length > 0) || v.ended))
      return O("read: emitReadable", v.length, v.ended), v.length === 0 && v.ended ? Y(this) : ot(this), null;
    if (p = it(p, v), p === 0 && v.ended)
      return v.length === 0 && Y(this), null;
    let he = (v.state & Ee) !== 0;
    if (O("need readable", he), (v.length === 0 || v.length - p < v.highWaterMark) && (he = !0, O("length less than watermark", he)), v.ended || v.reading || v.destroyed || v.errored || !v.constructed)
      he = !1, O("reading, ended or constructing", he);
    else if (he) {
      O("do read"), v.state |= ne | ue, v.length === 0 && (v.state |= Ee);
      try {
        this._read(v.highWaterMark);
      } catch (Le) {
        U(this, Le);
      }
      v.state &= ~ue, v.reading || (p = it(re, v));
    }
    let be;
    return p > 0 ? be = K(p, v) : be = null, be === null ? (v.needReadable = v.length <= v.highWaterMark, p = 0) : (v.length -= p, v.multiAwaitDrain ? v.awaitDrainWriters.clear() : v.awaitDrainWriters = null), v.length === 0 && (v.ended || (v.needReadable = !0), re !== p && v.ended && Y(this)), be !== null && !v.errorEmitted && !v.closeEmitted && (v.dataEmitted = !0, this.emit("data", be)), be;
  };
  function Ue(p, v) {
    if (O("onEofChunk"), !v.ended) {
      if (v.decoder) {
        const re = v.decoder.end();
        re && re.length && (v.buffer.push(re), v.length += v.objectMode ? 1 : re.length);
      }
      v.ended = !0, v.sync ? ot(p) : (v.needReadable = !1, v.emittedReadable = !0, ct(p));
    }
  }
  function ot(p) {
    const v = p._readableState;
    O("emitReadable", v.needReadable, v.emittedReadable), v.needReadable = !1, v.emittedReadable || (O("emitReadable", v.flowing), v.emittedReadable = !0, e.nextTick(ct, p));
  }
  function ct(p) {
    const v = p._readableState;
    O("emitReadable_", v.destroyed, v.length, v.ended), !v.destroyed && !v.errored && (v.length || v.ended) && (p.emit("readable"), v.emittedReadable = !1), v.needReadable = !v.flowing && !v.ended && v.length <= v.highWaterMark, fe(p);
  }
  function E(p, v) {
    !v.readingMore && v.constructed && (v.readingMore = !0, e.nextTick(ae, p, v));
  }
  function ae(p, v) {
    for (; !v.reading && !v.ended && (v.length < v.highWaterMark || v.flowing && v.length === 0); ) {
      const re = v.length;
      if (O("maybeReadMore read 0"), p.read(0), re === v.length)
        break;
    }
    v.readingMore = !1;
  }
  me.prototype._read = function(p) {
    throw new ie("_read()");
  }, me.prototype.pipe = function(p, v) {
    const re = this, he = this._readableState;
    he.pipes.length === 1 && (he.multiAwaitDrain || (he.multiAwaitDrain = !0, he.awaitDrainWriters = new c(he.awaitDrainWriters ? [he.awaitDrainWriters] : []))), he.pipes.push(p), O("pipe count=%d opts=%j", he.pipes.length, v);
    const Le = (!v || v.end !== !1) && p !== e.stdout && p !== e.stderr ? st : Kt;
    he.endEmitted ? e.nextTick(Le) : re.once("end", Le), p.on("unpipe", De);
    function De(cr, Ut) {
      O("onunpipe"), cr === re && Ut && Ut.hasUnpiped === !1 && (Ut.hasUnpiped = !0, pr());
    }
    function st() {
      O("onend"), p.end();
    }
    let He, fr = !1;
    function pr() {
      O("cleanup"), p.removeListener("close", ft), p.removeListener("finish", bt), He && p.removeListener("drain", He), p.removeListener("error", Ye), p.removeListener("unpipe", De), re.removeListener("end", st), re.removeListener("end", Kt), re.removeListener("data", ht), fr = !0, He && he.awaitDrainWriters && (!p._writableState || p._writableState.needDrain) && He();
    }
    function Ke() {
      fr || (he.pipes.length === 1 && he.pipes[0] === p ? (O("false write response, pause", 0), he.awaitDrainWriters = p, he.multiAwaitDrain = !1) : he.pipes.length > 1 && he.pipes.includes(p) && (O("false write response, pause", he.awaitDrainWriters.size), he.awaitDrainWriters.add(p)), re.pause()), He || (He = de(re, p), p.on("drain", He));
    }
    re.on("data", ht);
    function ht(cr) {
      O("ondata");
      const Ut = p.write(cr);
      O("dest.write", Ut), Ut === !1 && Ke();
    }
    function Ye(cr) {
      if (O("onerror", cr), Kt(), p.removeListener("error", Ye), p.listenerCount("error") === 0) {
        const Ut = p._writableState || p._readableState;
        Ut && !Ut.errorEmitted ? U(p, cr) : p.emit("error", cr);
      }
    }
    T(p, "error", Ye);
    function ft() {
      p.removeListener("finish", bt), Kt();
    }
    p.once("close", ft);
    function bt() {
      O("onfinish"), p.removeListener("close", ft), Kt();
    }
    p.once("finish", bt);
    function Kt() {
      O("unpipe"), re.unpipe(p);
    }
    return p.emit("pipe", re), p.writableNeedDrain === !0 ? Ke() : he.flowing || (O("pipe resume"), re.resume()), p;
  };
  function de(p, v) {
    return function() {
      const he = p._readableState;
      he.awaitDrainWriters === v ? (O("pipeOnDrain", 1), he.awaitDrainWriters = null) : he.multiAwaitDrain && (O("pipeOnDrain", he.awaitDrainWriters.size), he.awaitDrainWriters.delete(v)), (!he.awaitDrainWriters || he.awaitDrainWriters.size === 0) && p.listenerCount("data") && p.resume();
    };
  }
  me.prototype.unpipe = function(p) {
    const v = this._readableState, re = {
      hasUnpiped: !1
    };
    if (v.pipes.length === 0)
      return this;
    if (!p) {
      const be = v.pipes;
      v.pipes = [], this.pause();
      for (let Le = 0; Le < be.length; Le++)
        be[Le].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const he = t(v.pipes, p);
    return he === -1 ? this : (v.pipes.splice(he, 1), v.pipes.length === 0 && this.pause(), p.emit("unpipe", this, re), this);
  }, me.prototype.on = function(p, v) {
    const re = R.prototype.on.call(this, p, v), he = this._readableState;
    return p === "data" ? (he.readableListening = this.listenerCount("readable") > 0, he.flowing !== !1 && this.resume()) : p === "readable" && !he.endEmitted && !he.readableListening && (he.readableListening = he.needReadable = !0, he.flowing = !1, he.emittedReadable = !1, O("on readable", he.length, he.reading), he.length ? ot(this) : he.reading || e.nextTick(x, this)), re;
  }, me.prototype.addListener = me.prototype.on, me.prototype.removeListener = function(p, v) {
    const re = R.prototype.removeListener.call(this, p, v);
    return p === "readable" && e.nextTick(we, this), re;
  }, me.prototype.off = me.prototype.removeListener, me.prototype.removeAllListeners = function(p) {
    const v = R.prototype.removeAllListeners.apply(this, arguments);
    return (p === "readable" || p === void 0) && e.nextTick(we, this), v;
  };
  function we(p) {
    const v = p._readableState;
    v.readableListening = p.listenerCount("readable") > 0, v.resumeScheduled && v[M] === !1 ? v.flowing = !0 : p.listenerCount("data") > 0 ? p.resume() : v.readableListening || (v.flowing = null);
  }
  function x(p) {
    O("readable nexttick read 0"), p.read(0);
  }
  me.prototype.resume = function() {
    const p = this._readableState;
    return p.flowing || (O("resume"), p.flowing = !p.readableListening, te(this, p)), p[M] = !1, this;
  };
  function te(p, v) {
    v.resumeScheduled || (v.resumeScheduled = !0, e.nextTick(g, p, v));
  }
  function g(p, v) {
    O("resume", v.reading), v.reading || p.read(0), v.resumeScheduled = !1, p.emit("resume"), fe(p), v.flowing && !v.reading && p.read(0);
  }
  me.prototype.pause = function() {
    return O("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (O("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[M] = !0, this;
  };
  function fe(p) {
    const v = p._readableState;
    for (O("flow", v.flowing); v.flowing && p.read() !== null; )
      ;
  }
  me.prototype.wrap = function(p) {
    let v = !1;
    p.on("data", (he) => {
      !this.push(he) && p.pause && (v = !0, p.pause());
    }), p.on("end", () => {
      this.push(null);
    }), p.on("error", (he) => {
      U(this, he);
    }), p.on("close", () => {
      this.destroy();
    }), p.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      v && p.resume && (v = !1, p.resume());
    };
    const re = s(p);
    for (let he = 1; he < re.length; he++) {
      const be = re[he];
      this[be] === void 0 && typeof p[be] == "function" && (this[be] = p[be].bind(p));
    }
    return this;
  }, me.prototype[h] = function() {
    return Oe(this);
  }, me.prototype.iterator = function(p) {
    return p !== void 0 && $(p, "options"), Oe(this, p);
  };
  function Oe(p, v) {
    typeof p.read != "function" && (p = me.wrap(p, {
      objectMode: !0
    }));
    const re = a(p, v);
    return re.stream = p, re;
  }
  async function* a(p, v) {
    let re = C;
    function he(De) {
      this === p ? (re(), re = C) : re = De;
    }
    p.on("readable", he);
    let be;
    const Le = L(
      p,
      {
        writable: !1
      },
      (De) => {
        be = De ? j(be, De) : null, re(), re = C;
      }
    );
    try {
      for (; ; ) {
        const De = p.destroyed ? null : p.read();
        if (De !== null)
          yield De;
        else {
          if (be)
            throw be;
          if (be === null)
            return;
          await new f(he);
        }
      }
    } catch (De) {
      throw be = j(be, De), be;
    } finally {
      (be || (v == null ? void 0 : v.destroyOnReturn) !== !1) && (be === void 0 || p._readableState.autoDestroy) ? H.destroyer(p, null) : (p.off("readable", he), Le());
    }
  }
  i(me.prototype, {
    readable: {
      __proto__: null,
      get() {
        const p = this._readableState;
        return !!p && p.readable !== !1 && !p.destroyed && !p.errorEmitted && !p.endEmitted;
      },
      set(p) {
        this._readableState && (this._readableState.readable = !!p);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(p) {
        this._readableState && (this._readableState.flowing = p);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(p) {
        this._readableState && (this._readableState.destroyed = p);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), i(ke.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[M] !== !1;
      },
      set(p) {
        this[M] = !!p;
      }
    }
  }), me._fromList = K;
  function K(p, v) {
    if (v.length === 0)
      return null;
    let re;
    return v.objectMode ? re = v.buffer.shift() : !p || p >= v.length ? (v.decoder ? re = v.buffer.join("") : v.buffer.length === 1 ? re = v.buffer.first() : re = v.buffer.concat(v.length), v.buffer.clear()) : re = v.buffer.consume(p, v.decoder), re;
  }
  function Y(p) {
    const v = p._readableState;
    O("endReadable", v.endEmitted), v.endEmitted || (v.ended = !0, e.nextTick(y, v, p));
  }
  function y(p, v) {
    if (O("endReadableNT", p.endEmitted, p.length), !p.errored && !p.closeEmitted && !p.endEmitted && p.length === 0) {
      if (p.endEmitted = !0, v.emit("end"), v.writable && v.allowHalfOpen === !1)
        e.nextTick(k, v);
      else if (p.autoDestroy) {
        const re = v._writableState;
        (!re || re.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (re.finished || re.writable === !1)) && v.destroy();
      }
    }
  }
  function k(p) {
    p.writable && !p.writableEnded && !p.destroyed && p.end();
  }
  me.from = function(p, v) {
    return F(me, p, v);
  };
  let G;
  function ve() {
    return G === void 0 && (G = {}), G;
  }
  return me.fromWeb = function(p, v) {
    return ve().newStreamReadableFromReadableStream(p, v);
  }, me.toWeb = function(p, v) {
    return ve().newReadableStreamFromStreamReadable(p, v);
  }, me.wrap = function(p, v) {
    var re, he;
    return new me({
      objectMode: (re = (he = p.readableObjectMode) !== null && he !== void 0 ? he : p.objectMode) !== null && re !== void 0 ? re : !0,
      ...v,
      destroy(be, Le) {
        H.destroyer(p, be), Le(be);
      }
    }).wrap(p);
  }, To;
}
var Oo, yf;
function Zs() {
  if (yf)
    return Oo;
  yf = 1;
  const e = jr, {
    ArrayPrototypeSlice: t,
    Error: r,
    FunctionPrototypeSymbolHasInstance: n,
    ObjectDefineProperty: o,
    ObjectDefineProperties: i,
    ObjectSetPrototypeOf: s,
    StringPrototypeToLowerCase: l,
    Symbol: f,
    SymbolHasInstance: c
  } = rt;
  Oo = $, $.WritableState = d;
  const { EventEmitter: u } = cn, h = Gs.Stream, { Buffer: b } = or, _ = un, { addAbortSignal: R } = $i, { getHighWaterMark: T, getDefaultHighWaterMark: N } = ki, {
    ERR_INVALID_ARG_TYPE: D,
    ERR_METHOD_NOT_IMPLEMENTED: L,
    ERR_MULTIPLE_CALLBACK: O,
    ERR_STREAM_CANNOT_PIPE: S,
    ERR_STREAM_DESTROYED: H,
    ERR_STREAM_ALREADY_FINISHED: X,
    ERR_STREAM_NULL_VALUES: J,
    ERR_STREAM_WRITE_AFTER_END: j,
    ERR_UNKNOWN_ENCODING: W
  } = It.codes, { errorOrDestroy: ie } = _;
  s($.prototype, h.prototype), s($, h);
  function Q() {
  }
  const w = f("kOnFinished");
  function d(I, B, Z) {
    typeof Z != "boolean" && (Z = B instanceof hr()), this.objectMode = !!(I && I.objectMode), Z && (this.objectMode = this.objectMode || !!(I && I.writableObjectMode)), this.highWaterMark = I ? T(this, I, "writableHighWaterMark", Z) : N(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const le = !!(I && I.decodeStrings === !1);
    this.decodeStrings = !le, this.defaultEncoding = I && I.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = U.bind(void 0, B), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, m(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !I || I.emitClose !== !1, this.autoDestroy = !I || I.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[w] = [];
  }
  function m(I) {
    I.buffered = [], I.bufferedIndex = 0, I.allBuffers = !0, I.allNoop = !0;
  }
  d.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, o(d.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function $(I) {
    const B = this instanceof hr();
    if (!B && !n($, this))
      return new $(I);
    this._writableState = new d(I, this, B), I && (typeof I.write == "function" && (this._write = I.write), typeof I.writev == "function" && (this._writev = I.writev), typeof I.destroy == "function" && (this._destroy = I.destroy), typeof I.final == "function" && (this._final = I.final), typeof I.construct == "function" && (this._construct = I.construct), I.signal && R(I.signal, this)), h.call(this, I), _.construct(this, () => {
      const Z = this._writableState;
      Z.writing || ne(this, Z), ge(this, Z);
    });
  }
  o($, c, {
    __proto__: null,
    value: function(I) {
      return n(this, I) ? !0 : this !== $ ? !1 : I && I._writableState instanceof d;
    }
  }), $.prototype.pipe = function() {
    ie(this, new S());
  };
  function M(I, B, Z, le) {
    const se = I._writableState;
    if (typeof Z == "function")
      le = Z, Z = se.defaultEncoding;
    else {
      if (!Z)
        Z = se.defaultEncoding;
      else if (Z !== "buffer" && !b.isEncoding(Z))
        throw new W(Z);
      typeof le != "function" && (le = Q);
    }
    if (B === null)
      throw new J();
    if (!se.objectMode)
      if (typeof B == "string")
        se.decodeStrings !== !1 && (B = b.from(B, Z), Z = "buffer");
      else if (B instanceof b)
        Z = "buffer";
      else if (h._isUint8Array(B))
        B = h._uint8ArrayToBuffer(B), Z = "buffer";
      else
        throw new D("chunk", ["string", "Buffer", "Uint8Array"], B);
    let _e;
    return se.ending ? _e = new j() : se.destroyed && (_e = new H("write")), _e ? (e.nextTick(le, _e), ie(I, _e, !0), _e) : (se.pendingcb++, P(I, se, B, Z, le));
  }
  $.prototype.write = function(I, B, Z) {
    return M(this, I, B, Z) === !0;
  }, $.prototype.cork = function() {
    this._writableState.corked++;
  }, $.prototype.uncork = function() {
    const I = this._writableState;
    I.corked && (I.corked--, I.writing || ne(this, I));
  }, $.prototype.setDefaultEncoding = function(B) {
    if (typeof B == "string" && (B = l(B)), !b.isEncoding(B))
      throw new W(B);
    return this._writableState.defaultEncoding = B, this;
  };
  function P(I, B, Z, le, se) {
    const _e = B.objectMode ? 1 : Z.length;
    B.length += _e;
    const Ie = B.length < B.highWaterMark;
    return Ie || (B.needDrain = !0), B.writing || B.corked || B.errored || !B.constructed ? (B.buffered.push({
      chunk: Z,
      encoding: le,
      callback: se
    }), B.allBuffers && le !== "buffer" && (B.allBuffers = !1), B.allNoop && se !== Q && (B.allNoop = !1)) : (B.writelen = _e, B.writecb = se, B.writing = !0, B.sync = !0, I._write(Z, le, B.onwrite), B.sync = !1), Ie && !B.errored && !B.destroyed;
  }
  function F(I, B, Z, le, se, _e, Ie) {
    B.writelen = le, B.writecb = Ie, B.writing = !0, B.sync = !0, B.destroyed ? B.onwrite(new H("write")) : Z ? I._writev(se, B.onwrite) : I._write(se, _e, B.onwrite), B.sync = !1;
  }
  function C(I, B, Z, le) {
    --B.pendingcb, le(Z), V(B), ie(I, Z);
  }
  function U(I, B) {
    const Z = I._writableState, le = Z.sync, se = Z.writecb;
    if (typeof se != "function") {
      ie(I, new O());
      return;
    }
    Z.writing = !1, Z.writecb = null, Z.length -= Z.writelen, Z.writelen = 0, B ? (B.stack, Z.errored || (Z.errored = B), I._readableState && !I._readableState.errored && (I._readableState.errored = B), le ? e.nextTick(C, I, Z, B, se) : C(I, Z, B, se)) : (Z.buffered.length > Z.bufferedIndex && ne(I, Z), le ? Z.afterWriteTickInfo !== null && Z.afterWriteTickInfo.cb === se ? Z.afterWriteTickInfo.count++ : (Z.afterWriteTickInfo = {
      count: 1,
      cb: se,
      stream: I,
      state: Z
    }, e.nextTick(q, Z.afterWriteTickInfo)) : oe(I, Z, 1, se));
  }
  function q({ stream: I, state: B, count: Z, cb: le }) {
    return B.afterWriteTickInfo = null, oe(I, B, Z, le);
  }
  function oe(I, B, Z, le) {
    for (!B.ending && !I.destroyed && B.length === 0 && B.needDrain && (B.needDrain = !1, I.emit("drain")); Z-- > 0; )
      B.pendingcb--, le();
    B.destroyed && V(B), ge(I, B);
  }
  function V(I) {
    if (I.writing)
      return;
    for (let se = I.bufferedIndex; se < I.buffered.length; ++se) {
      var B;
      const { chunk: _e, callback: Ie } = I.buffered[se], Te = I.objectMode ? 1 : _e.length;
      I.length -= Te, Ie(
        (B = I.errored) !== null && B !== void 0 ? B : new H("write")
      );
    }
    const Z = I[w].splice(0);
    for (let se = 0; se < Z.length; se++) {
      var le;
      Z[se](
        (le = I.errored) !== null && le !== void 0 ? le : new H("end")
      );
    }
    m(I);
  }
  function ne(I, B) {
    if (B.corked || B.bufferProcessing || B.destroyed || !B.constructed)
      return;
    const { buffered: Z, bufferedIndex: le, objectMode: se } = B, _e = Z.length - le;
    if (!_e)
      return;
    let Ie = le;
    if (B.bufferProcessing = !0, _e > 1 && I._writev) {
      B.pendingcb -= _e - 1;
      const Te = B.allNoop ? Q : (me) => {
        for (let je = Ie; je < Z.length; ++je)
          Z[je].callback(me);
      }, ke = B.allNoop && Ie === 0 ? Z : t(Z, Ie);
      ke.allBuffers = B.allBuffers, F(I, B, !0, B.length, ke, "", Te), m(B);
    } else {
      do {
        const { chunk: Te, encoding: ke, callback: me } = Z[Ie];
        Z[Ie++] = null;
        const je = se ? 1 : Te.length;
        F(I, B, !1, je, Te, ke, me);
      } while (Ie < Z.length && !B.writing);
      Ie === Z.length ? m(B) : Ie > 256 ? (Z.splice(0, Ie), B.bufferedIndex = 0) : B.bufferedIndex = Ie;
    }
    B.bufferProcessing = !1;
  }
  $.prototype._write = function(I, B, Z) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: I,
            encoding: B
          }
        ],
        Z
      );
    else
      throw new L("_write()");
  }, $.prototype._writev = null, $.prototype.end = function(I, B, Z) {
    const le = this._writableState;
    typeof I == "function" ? (Z = I, I = null, B = null) : typeof B == "function" && (Z = B, B = null);
    let se;
    if (I != null) {
      const _e = M(this, I, B);
      _e instanceof r && (se = _e);
    }
    return le.corked && (le.corked = 1, this.uncork()), se || (!le.errored && !le.ending ? (le.ending = !0, ge(this, le, !0), le.ended = !0) : le.finished ? se = new X("end") : le.destroyed && (se = new H("end"))), typeof Z == "function" && (se || le.finished ? e.nextTick(Z, se) : le[w].push(Z)), this;
  };
  function ce(I) {
    return I.ending && !I.destroyed && I.constructed && I.length === 0 && !I.errored && I.buffered.length === 0 && !I.finished && !I.writing && !I.errorEmitted && !I.closeEmitted;
  }
  function ue(I, B) {
    let Z = !1;
    function le(se) {
      if (Z) {
        ie(I, se ?? O());
        return;
      }
      if (Z = !0, B.pendingcb--, se) {
        const _e = B[w].splice(0);
        for (let Ie = 0; Ie < _e.length; Ie++)
          _e[Ie](se);
        ie(I, se, B.sync);
      } else
        ce(B) && (B.prefinished = !0, I.emit("prefinish"), B.pendingcb++, e.nextTick(ye, I, B));
    }
    B.sync = !0, B.pendingcb++;
    try {
      I._final(le);
    } catch (se) {
      le(se);
    }
    B.sync = !1;
  }
  function Ee(I, B) {
    !B.prefinished && !B.finalCalled && (typeof I._final == "function" && !B.destroyed ? (B.finalCalled = !0, ue(I, B)) : (B.prefinished = !0, I.emit("prefinish")));
  }
  function ge(I, B, Z) {
    ce(B) && (Ee(I, B), B.pendingcb === 0 && (Z ? (B.pendingcb++, e.nextTick(
      (le, se) => {
        ce(se) ? ye(le, se) : se.pendingcb--;
      },
      I,
      B
    )) : ce(B) && (B.pendingcb++, ye(I, B))));
  }
  function ye(I, B) {
    B.pendingcb--, B.finished = !0;
    const Z = B[w].splice(0);
    for (let le = 0; le < Z.length; le++)
      Z[le]();
    if (I.emit("finish"), B.autoDestroy) {
      const le = I._readableState;
      (!le || le.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (le.endEmitted || le.readable === !1)) && I.destroy();
    }
  }
  i($.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(I) {
        this._writableState && (this._writableState.destroyed = I);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const I = this._writableState;
        return !!I && I.writable !== !1 && !I.destroyed && !I.errored && !I.ending && !I.ended;
      },
      set(I) {
        this._writableState && (this._writableState.writable = !!I);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const I = this._writableState;
        return I ? !I.destroyed && !I.ending && I.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const Pe = _.destroy;
  $.prototype.destroy = function(I, B) {
    const Z = this._writableState;
    return !Z.destroyed && (Z.bufferedIndex < Z.buffered.length || Z[w].length) && e.nextTick(V, Z), Pe.call(this, I, B), this;
  }, $.prototype._undestroy = _.undestroy, $.prototype._destroy = function(I, B) {
    B(I);
  }, $.prototype[u.captureRejectionSymbol] = function(I) {
    this.destroy(I);
  };
  let Be;
  function Re() {
    return Be === void 0 && (Be = {}), Be;
  }
  return $.fromWeb = function(I, B) {
    return Re().newStreamWritableFromWritableStream(I, B);
  }, $.toWeb = function(I) {
    return Re().newWritableStreamFromStreamWritable(I);
  }, Oo;
}
var Lo, wf;
function r_() {
  if (wf)
    return Lo;
  wf = 1;
  const e = jr, t = or, {
    isReadable: r,
    isWritable: n,
    isIterable: o,
    isNodeStream: i,
    isReadableNodeStream: s,
    isWritableNodeStream: l,
    isDuplexNodeStream: f,
    isReadableStream: c,
    isWritableStream: u
  } = br, h = Tr, {
    AbortError: b,
    codes: { ERR_INVALID_ARG_TYPE: _, ERR_INVALID_RETURN_VALUE: R }
  } = It, { destroyer: T } = un, N = hr(), D = Di(), L = Zs(), { createDeferredPromise: O } = vt, S = xl, H = globalThis.Blob || t.Blob, X = typeof H < "u" ? function(d) {
    return d instanceof H;
  } : function(d) {
    return !1;
  }, J = globalThis.AbortController || kn().AbortController, { FunctionPrototypeCall: j } = rt;
  class W extends N {
    constructor(d) {
      super(d), (d == null ? void 0 : d.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (d == null ? void 0 : d.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Lo = function w(d, m) {
    if (f(d))
      return d;
    if (s(d))
      return Q({
        readable: d
      });
    if (l(d))
      return Q({
        writable: d
      });
    if (i(d))
      return Q({
        writable: !1,
        readable: !1
      });
    if (c(d))
      return Q({
        readable: D.fromWeb(d)
      });
    if (u(d))
      return Q({
        writable: L.fromWeb(d)
      });
    if (typeof d == "function") {
      const { value: M, write: P, final: F, destroy: C } = ie(d);
      if (o(M))
        return S(W, M, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: P,
          final: F,
          destroy: C
        });
      const U = M == null ? void 0 : M.then;
      if (typeof U == "function") {
        let q;
        const oe = j(
          U,
          M,
          (V) => {
            if (V != null)
              throw new R("nully", "body", V);
          },
          (V) => {
            T(q, V);
          }
        );
        return q = new W({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: P,
          final(V) {
            F(async () => {
              try {
                await oe, e.nextTick(V, null);
              } catch (ne) {
                e.nextTick(V, ne);
              }
            });
          },
          destroy: C
        });
      }
      throw new R("Iterable, AsyncIterable or AsyncFunction", m, M);
    }
    if (X(d))
      return w(d.arrayBuffer());
    if (o(d))
      return S(W, d, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (c(d == null ? void 0 : d.readable) && u(d == null ? void 0 : d.writable))
      return W.fromWeb(d);
    if (typeof (d == null ? void 0 : d.writable) == "object" || typeof (d == null ? void 0 : d.readable) == "object") {
      const M = d != null && d.readable ? s(d == null ? void 0 : d.readable) ? d == null ? void 0 : d.readable : w(d.readable) : void 0, P = d != null && d.writable ? l(d == null ? void 0 : d.writable) ? d == null ? void 0 : d.writable : w(d.writable) : void 0;
      return Q({
        readable: M,
        writable: P
      });
    }
    const $ = d == null ? void 0 : d.then;
    if (typeof $ == "function") {
      let M;
      return j(
        $,
        d,
        (P) => {
          P != null && M.push(P), M.push(null);
        },
        (P) => {
          T(M, P);
        }
      ), M = new W({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new _(
      m,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      d
    );
  };
  function ie(w) {
    let { promise: d, resolve: m } = O();
    const $ = new J(), M = $.signal;
    return {
      value: w(
        async function* () {
          for (; ; ) {
            const F = d;
            d = null;
            const { chunk: C, done: U, cb: q } = await F;
            if (e.nextTick(q), U)
              return;
            if (M.aborted)
              throw new b(void 0, {
                cause: M.reason
              });
            ({ promise: d, resolve: m } = O()), yield C;
          }
        }(),
        {
          signal: M
        }
      ),
      write(F, C, U) {
        const q = m;
        m = null, q({
          chunk: F,
          done: !1,
          cb: U
        });
      },
      final(F) {
        const C = m;
        m = null, C({
          done: !0,
          cb: F
        });
      },
      destroy(F, C) {
        $.abort(), C(F);
      }
    };
  }
  function Q(w) {
    const d = w.readable && typeof w.readable.read != "function" ? D.wrap(w.readable) : w.readable, m = w.writable;
    let $ = !!r(d), M = !!n(m), P, F, C, U, q;
    function oe(V) {
      const ne = U;
      U = null, ne ? ne(V) : V && q.destroy(V);
    }
    return q = new W({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(d != null && d.readableObjectMode),
      writableObjectMode: !!(m != null && m.writableObjectMode),
      readable: $,
      writable: M
    }), M && (h(m, (V) => {
      M = !1, V && T(d, V), oe(V);
    }), q._write = function(V, ne, ce) {
      m.write(V, ne) ? ce() : P = ce;
    }, q._final = function(V) {
      m.end(), F = V;
    }, m.on("drain", function() {
      if (P) {
        const V = P;
        P = null, V();
      }
    }), m.on("finish", function() {
      if (F) {
        const V = F;
        F = null, V();
      }
    })), $ && (h(d, (V) => {
      $ = !1, V && T(d, V), oe(V);
    }), d.on("readable", function() {
      if (C) {
        const V = C;
        C = null, V();
      }
    }), d.on("end", function() {
      q.push(null);
    }), q._read = function() {
      for (; ; ) {
        const V = d.read();
        if (V === null) {
          C = q._read;
          return;
        }
        if (!q.push(V))
          return;
      }
    }), q._destroy = function(V, ne) {
      !V && U !== null && (V = new b()), C = null, P = null, F = null, U === null ? ne(V) : (U = ne, T(m, V), T(d, V));
    }, q;
  }
  return Lo;
}
var Co, mf;
function hr() {
  if (mf)
    return Co;
  mf = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: r,
    ObjectSetPrototypeOf: n
  } = rt;
  Co = s;
  const o = Di(), i = Zs();
  n(s.prototype, o.prototype), n(s, o);
  {
    const u = r(i.prototype);
    for (let h = 0; h < u.length; h++) {
      const b = u[h];
      s.prototype[b] || (s.prototype[b] = i.prototype[b]);
    }
  }
  function s(u) {
    if (!(this instanceof s))
      return new s(u);
    o.call(this, u), i.call(this, u), u ? (this.allowHalfOpen = u.allowHalfOpen !== !1, u.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), u.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(s.prototype, {
    writable: {
      __proto__: null,
      ...t(i.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(i.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(i.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(i.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(i.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(i.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(i.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(i.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(i.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(u) {
        this._readableState && this._writableState && (this._readableState.destroyed = u, this._writableState.destroyed = u);
      }
    }
  });
  let l;
  function f() {
    return l === void 0 && (l = {}), l;
  }
  s.fromWeb = function(u, h) {
    return f().newStreamDuplexFromReadableWritablePair(u, h);
  }, s.toWeb = function(u) {
    return f().newReadableWritablePairFromDuplex(u);
  };
  let c;
  return s.from = function(u) {
    return c || (c = r_()), c(u, "body");
  }, Co;
}
const { ObjectSetPrototypeOf: Ml, Symbol: n_ } = rt;
var jl = gr;
const { ERR_METHOD_NOT_IMPLEMENTED: i_ } = It.codes, Ks = hr(), { getHighWaterMark: o_ } = ki;
Ml(gr.prototype, Ks.prototype);
Ml(gr, Ks);
const Cn = n_("kCallback");
function gr(e) {
  if (!(this instanceof gr))
    return new gr(e);
  const t = e ? o_(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), Ks.call(this, e), this._readableState.sync = !1, this[Cn] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", s_);
}
function Rs(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    r != null && this.push(r), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function s_() {
  this._final !== Rs && Rs.call(this);
}
gr.prototype._final = Rs;
gr.prototype._transform = function(e, t, r) {
  throw new i_("_transform()");
};
gr.prototype._write = function(e, t, r) {
  const n = this._readableState, o = this._writableState, i = n.length;
  this._transform(e, t, (s, l) => {
    if (s) {
      r(s);
      return;
    }
    l != null && this.push(l), o.ended || // Backwards compat.
    i === n.length || // Backwards compat.
    n.length < n.highWaterMark ? r() : this[Cn] = r;
  });
};
gr.prototype._read = function() {
  if (this[Cn]) {
    const e = this[Cn];
    this[Cn] = null, e();
  }
};
const { ObjectSetPrototypeOf: Fl } = rt;
var Ul = en;
const Js = jl;
Fl(en.prototype, Js.prototype);
Fl(en, Js);
function en(e) {
  if (!(this instanceof en))
    return new en(e);
  Js.call(this, e);
}
en.prototype._transform = function(e, t, r) {
  r(null, e);
};
const On = jr, { ArrayIsArray: a_, Promise: f_, SymbolAsyncIterator: c_, SymbolDispose: l_ } = rt, pi = Tr, { once: u_ } = vt, d_ = un, Ef = hr(), {
  aggregateTwoErrors: h_,
  codes: {
    ERR_INVALID_ARG_TYPE: As,
    ERR_INVALID_RETURN_VALUE: No,
    ERR_MISSING_ARGS: g_,
    ERR_STREAM_DESTROYED: __,
    ERR_STREAM_PREMATURE_CLOSE: b_
  },
  AbortError: p_
} = It, { validateFunction: y_, validateAbortSignal: w_ } = Un, {
  isIterable: Pr,
  isReadable: Po,
  isReadableNodeStream: hi,
  isNodeStream: vf,
  isTransformStream: Kr,
  isWebStream: m_,
  isReadableStream: Bo,
  isReadableFinished: E_
} = br, v_ = globalThis.AbortController || kn().AbortController;
let $o, ko, Do;
function Sf(e, t, r) {
  let n = !1;
  e.on("close", () => {
    n = !0;
  });
  const o = pi(
    e,
    {
      readable: t,
      writable: r
    },
    (i) => {
      n = !i;
    }
  );
  return {
    destroy: (i) => {
      n || (n = !0, d_.destroyer(e, i || new __("pipe")));
    },
    cleanup: o
  };
}
function S_(e) {
  return y_(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function xo(e) {
  if (Pr(e))
    return e;
  if (hi(e))
    return R_(e);
  throw new As("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* R_(e) {
  ko || (ko = Di()), yield* ko.prototype[c_].call(e);
}
async function ti(e, t, r, { end: n }) {
  let o, i = null;
  const s = (c) => {
    if (c && (o = c), i) {
      const u = i;
      i = null, u();
    }
  }, l = () => new f_((c, u) => {
    o ? u(o) : i = () => {
      o ? u(o) : c();
    };
  });
  t.on("drain", s);
  const f = pi(
    t,
    {
      readable: !1
    },
    s
  );
  try {
    t.writableNeedDrain && await l();
    for await (const c of e)
      t.write(c) || await l();
    n && (t.end(), await l()), r();
  } catch (c) {
    r(o !== c ? h_(o, c) : c);
  } finally {
    f(), t.off("drain", s);
  }
}
async function Mo(e, t, r, { end: n }) {
  Kr(t) && (t = t.writable);
  const o = t.getWriter();
  try {
    for await (const i of e)
      await o.ready, o.write(i).catch(() => {
      });
    await o.ready, n && await o.close(), r();
  } catch (i) {
    try {
      await o.abort(i), r(i);
    } catch (s) {
      r(s);
    }
  }
}
function A_(...e) {
  return Hl(e, u_(S_(e)));
}
function Hl(e, t, r) {
  if (e.length === 1 && a_(e[0]) && (e = e[0]), e.length < 2)
    throw new g_("streams");
  const n = new v_(), o = n.signal, i = r == null ? void 0 : r.signal, s = [];
  w_(i, "options.signal");
  function l() {
    R(new p_());
  }
  Do = Do || vt.addAbortListener;
  let f;
  i && (f = Do(i, l));
  let c, u;
  const h = [];
  let b = 0;
  function _(L) {
    R(L, --b === 0);
  }
  function R(L, O) {
    var S;
    if (L && (!c || c.code === "ERR_STREAM_PREMATURE_CLOSE") && (c = L), !(!c && !O)) {
      for (; h.length; )
        h.shift()(c);
      (S = f) === null || S === void 0 || S[l_](), n.abort(), O && (c || s.forEach((H) => H()), On.nextTick(t, c, u));
    }
  }
  let T;
  for (let L = 0; L < e.length; L++) {
    const O = e[L], S = L < e.length - 1, H = L > 0, X = S || (r == null ? void 0 : r.end) !== !1, J = L === e.length - 1;
    if (vf(O)) {
      let j = function(W) {
        W && W.name !== "AbortError" && W.code !== "ERR_STREAM_PREMATURE_CLOSE" && _(W);
      };
      if (X) {
        const { destroy: W, cleanup: ie } = Sf(O, S, H);
        h.push(W), Po(O) && J && s.push(ie);
      }
      O.on("error", j), Po(O) && J && s.push(() => {
        O.removeListener("error", j);
      });
    }
    if (L === 0)
      if (typeof O == "function") {
        if (T = O({
          signal: o
        }), !Pr(T))
          throw new No("Iterable, AsyncIterable or Stream", "source", T);
      } else
        Pr(O) || hi(O) || Kr(O) ? T = O : T = Ef.from(O);
    else if (typeof O == "function") {
      if (Kr(T)) {
        var N;
        T = xo((N = T) === null || N === void 0 ? void 0 : N.readable);
      } else
        T = xo(T);
      if (T = O(T, {
        signal: o
      }), S) {
        if (!Pr(T, !0))
          throw new No("AsyncIterable", `transform[${L - 1}]`, T);
      } else {
        var D;
        $o || ($o = Ul);
        const j = new $o({
          objectMode: !0
        }), W = (D = T) === null || D === void 0 ? void 0 : D.then;
        if (typeof W == "function")
          b++, W.call(
            T,
            (w) => {
              u = w, w != null && j.write(w), X && j.end(), On.nextTick(_);
            },
            (w) => {
              j.destroy(w), On.nextTick(_, w);
            }
          );
        else if (Pr(T, !0))
          b++, ti(T, j, _, {
            end: X
          });
        else if (Bo(T) || Kr(T)) {
          const w = T.readable || T;
          b++, ti(w, j, _, {
            end: X
          });
        } else
          throw new No("AsyncIterable or Promise", "destination", T);
        T = j;
        const { destroy: ie, cleanup: Q } = Sf(T, !1, !0);
        h.push(ie), J && s.push(Q);
      }
    } else if (vf(O)) {
      if (hi(T)) {
        b += 2;
        const j = I_(T, O, _, {
          end: X
        });
        Po(O) && J && s.push(j);
      } else if (Kr(T) || Bo(T)) {
        const j = T.readable || T;
        b++, ti(j, O, _, {
          end: X
        });
      } else if (Pr(T))
        b++, ti(T, O, _, {
          end: X
        });
      else
        throw new As(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          T
        );
      T = O;
    } else if (m_(O)) {
      if (hi(T))
        b++, Mo(xo(T), O, _, {
          end: X
        });
      else if (Bo(T) || Pr(T))
        b++, Mo(T, O, _, {
          end: X
        });
      else if (Kr(T))
        b++, Mo(T.readable, O, _, {
          end: X
        });
      else
        throw new As(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          T
        );
      T = O;
    } else
      T = Ef.from(O);
  }
  return (o != null && o.aborted || i != null && i.aborted) && On.nextTick(l), T;
}
function I_(e, t, r, { end: n }) {
  let o = !1;
  if (t.on("close", () => {
    o || r(new b_());
  }), e.pipe(t, {
    end: !1
  }), n) {
    let i = function() {
      o = !0, t.end();
    };
    E_(e) ? On.nextTick(i) : e.once("end", i);
  } else
    r();
  return pi(
    e,
    {
      readable: !0,
      writable: !1
    },
    (i) => {
      const s = e._readableState;
      i && i.code === "ERR_STREAM_PREMATURE_CLOSE" && s && s.ended && !s.errored && !s.errorEmitted ? e.once("end", r).once("error", r) : r(i);
    }
  ), pi(
    t,
    {
      readable: !1,
      writable: !0
    },
    r
  );
}
var Xs = {
  pipelineImpl: Hl,
  pipeline: A_
};
const { pipeline: T_ } = Xs, ri = hr(), { destroyer: O_ } = un, {
  isNodeStream: ni,
  isReadable: Rf,
  isWritable: Af,
  isWebStream: jo,
  isTransformStream: Cr,
  isWritableStream: If,
  isReadableStream: Tf
} = br, {
  AbortError: L_,
  codes: { ERR_INVALID_ARG_VALUE: Of, ERR_MISSING_ARGS: C_ }
} = It, N_ = Tr;
var zl = function(...t) {
  if (t.length === 0)
    throw new C_("streams");
  if (t.length === 1)
    return ri.from(t[0]);
  const r = [...t];
  if (typeof t[0] == "function" && (t[0] = ri.from(t[0])), typeof t[t.length - 1] == "function") {
    const _ = t.length - 1;
    t[_] = ri.from(t[_]);
  }
  for (let _ = 0; _ < t.length; ++_)
    if (!(!ni(t[_]) && !jo(t[_]))) {
      if (_ < t.length - 1 && !(Rf(t[_]) || Tf(t[_]) || Cr(t[_])))
        throw new Of(`streams[${_}]`, r[_], "must be readable");
      if (_ > 0 && !(Af(t[_]) || If(t[_]) || Cr(t[_])))
        throw new Of(`streams[${_}]`, r[_], "must be writable");
    }
  let n, o, i, s, l;
  function f(_) {
    const R = s;
    s = null, R ? R(_) : _ ? l.destroy(_) : !b && !h && l.destroy();
  }
  const c = t[0], u = T_(t, f), h = !!(Af(c) || If(c) || Cr(c)), b = !!(Rf(u) || Tf(u) || Cr(u));
  if (l = new ri({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(c != null && c.writableObjectMode),
    readableObjectMode: !!(u != null && u.readableObjectMode),
    writable: h,
    readable: b
  }), h) {
    if (ni(c))
      l._write = function(R, T, N) {
        c.write(R, T) ? N() : n = N;
      }, l._final = function(R) {
        c.end(), o = R;
      }, c.on("drain", function() {
        if (n) {
          const R = n;
          n = null, R();
        }
      });
    else if (jo(c)) {
      const T = (Cr(c) ? c.writable : c).getWriter();
      l._write = async function(N, D, L) {
        try {
          await T.ready, T.write(N).catch(() => {
          }), L();
        } catch (O) {
          L(O);
        }
      }, l._final = async function(N) {
        try {
          await T.ready, T.close().catch(() => {
          }), o = N;
        } catch (D) {
          N(D);
        }
      };
    }
    const _ = Cr(u) ? u.readable : u;
    N_(_, () => {
      if (o) {
        const R = o;
        o = null, R();
      }
    });
  }
  if (b) {
    if (ni(u))
      u.on("readable", function() {
        if (i) {
          const _ = i;
          i = null, _();
        }
      }), u.on("end", function() {
        l.push(null);
      }), l._read = function() {
        for (; ; ) {
          const _ = u.read();
          if (_ === null) {
            i = l._read;
            return;
          }
          if (!l.push(_))
            return;
        }
      };
    else if (jo(u)) {
      const R = (Cr(u) ? u.readable : u).getReader();
      l._read = async function() {
        for (; ; )
          try {
            const { value: T, done: N } = await R.read();
            if (!l.push(T))
              return;
            if (N) {
              l.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return l._destroy = function(_, R) {
    !_ && s !== null && (_ = new L_()), i = null, n = null, o = null, s === null ? R(_) : (s = R, ni(u) && O_(u, _));
  }, l;
};
const P_ = globalThis.AbortController || kn().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: B_, ERR_INVALID_ARG_TYPE: Hn, ERR_MISSING_ARGS: $_, ERR_OUT_OF_RANGE: k_ },
  AbortError: sr
} = It, { validateAbortSignal: Ur, validateInteger: Lf, validateObject: Hr } = Un, D_ = rt.Symbol("kWeak"), x_ = rt.Symbol("kResistStopPropagation"), { finished: M_ } = Tr, j_ = zl, { addAbortSignalNoValidate: F_ } = $i, { isWritable: U_, isNodeStream: H_ } = br, { deprecate: z_ } = vt, {
  ArrayPrototypePush: W_,
  Boolean: V_,
  MathFloor: Cf,
  Number: q_,
  NumberIsNaN: G_,
  Promise: Nf,
  PromiseReject: Pf,
  PromiseResolve: Z_,
  PromisePrototypeThen: Bf,
  Symbol: Wl
} = rt, yi = Wl("kEmpty"), $f = Wl("kEof");
function K_(e, t) {
  if (t != null && Hr(t, "options"), (t == null ? void 0 : t.signal) != null && Ur(t.signal, "options.signal"), H_(e) && !U_(e))
    throw new B_("stream", e, "must be writable");
  const r = j_(this, e);
  return t != null && t.signal && F_(t.signal, r), r;
}
function xi(e, t) {
  if (typeof e != "function")
    throw new Hn("fn", ["Function", "AsyncFunction"], e);
  t != null && Hr(t, "options"), (t == null ? void 0 : t.signal) != null && Ur(t.signal, "options.signal");
  let r = 1;
  (t == null ? void 0 : t.concurrency) != null && (r = Cf(t.concurrency));
  let n = r - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (n = Cf(t.highWaterMark)), Lf(r, "options.concurrency", 1), Lf(n, "options.highWaterMark", 0), n += r, (async function* () {
    const i = vt.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(V_)
    ), s = this, l = [], f = {
      signal: i
    };
    let c, u, h = !1, b = 0;
    function _() {
      h = !0, R();
    }
    function R() {
      b -= 1, T();
    }
    function T() {
      u && !h && b < r && l.length < n && (u(), u = null);
    }
    async function N() {
      try {
        for await (let D of s) {
          if (h)
            return;
          if (i.aborted)
            throw new sr();
          try {
            if (D = e(D, f), D === yi)
              continue;
            D = Z_(D);
          } catch (L) {
            D = Pf(L);
          }
          b += 1, Bf(D, R, _), l.push(D), c && (c(), c = null), !h && (l.length >= n || b >= r) && await new Nf((L) => {
            u = L;
          });
        }
        l.push($f);
      } catch (D) {
        const L = Pf(D);
        Bf(L, R, _), l.push(L);
      } finally {
        h = !0, c && (c(), c = null);
      }
    }
    N();
    try {
      for (; ; ) {
        for (; l.length > 0; ) {
          const D = await l[0];
          if (D === $f)
            return;
          if (i.aborted)
            throw new sr();
          D !== yi && (yield D), l.shift(), T();
        }
        await new Nf((D) => {
          c = D;
        });
      }
    } finally {
      h = !0, u && (u(), u = null);
    }
  }).call(this);
}
function J_(e = void 0) {
  return e != null && Hr(e, "options"), (e == null ? void 0 : e.signal) != null && Ur(e.signal, "options.signal"), (async function* () {
    let r = 0;
    for await (const o of this) {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
        throw new sr({
          cause: e.signal.reason
        });
      yield [r++, o];
    }
  }).call(this);
}
async function Vl(e, t = void 0) {
  for await (const r of Ys.call(this, e, t))
    return !0;
  return !1;
}
async function X_(e, t = void 0) {
  if (typeof e != "function")
    throw new Hn("fn", ["Function", "AsyncFunction"], e);
  return !await Vl.call(
    this,
    async (...r) => !await e(...r),
    t
  );
}
async function Y_(e, t) {
  for await (const r of Ys.call(this, e, t))
    return r;
}
async function Q_(e, t) {
  if (typeof e != "function")
    throw new Hn("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o), yi;
  }
  for await (const n of xi.call(this, r, t))
    ;
}
function Ys(e, t) {
  if (typeof e != "function")
    throw new Hn("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o) ? n : yi;
  }
  return xi.call(this, r, t);
}
class eb extends $_ {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function tb(e, t, r) {
  var n;
  if (typeof e != "function")
    throw new Hn("reducer", ["Function", "AsyncFunction"], e);
  r != null && Hr(r, "options"), (r == null ? void 0 : r.signal) != null && Ur(r.signal, "options.signal");
  let o = arguments.length > 1;
  if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted) {
    const c = new sr(void 0, {
      cause: r.signal.reason
    });
    throw this.once("error", () => {
    }), await M_(this.destroy(c)), c;
  }
  const i = new P_(), s = i.signal;
  if (r != null && r.signal) {
    const c = {
      once: !0,
      [D_]: this,
      [x_]: !0
    };
    r.signal.addEventListener("abort", () => i.abort(), c);
  }
  let l = !1;
  try {
    for await (const c of this) {
      var f;
      if (l = !0, r != null && (f = r.signal) !== null && f !== void 0 && f.aborted)
        throw new sr();
      o ? t = await e(t, c, {
        signal: s
      }) : (t = c, o = !0);
    }
    if (!l && !o)
      throw new eb();
  } finally {
    i.abort();
  }
  return t;
}
async function rb(e) {
  e != null && Hr(e, "options"), (e == null ? void 0 : e.signal) != null && Ur(e.signal, "options.signal");
  const t = [];
  for await (const n of this) {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new sr(void 0, {
        cause: e.signal.reason
      });
    W_(t, n);
  }
  return t;
}
function nb(e, t) {
  const r = xi.call(this, e, t);
  return (async function* () {
    for await (const o of r)
      yield* o;
  }).call(this);
}
function ql(e) {
  if (e = q_(e), G_(e))
    return 0;
  if (e < 0)
    throw new k_("number", ">= 0", e);
  return e;
}
function ib(e, t = void 0) {
  return t != null && Hr(t, "options"), (t == null ? void 0 : t.signal) != null && Ur(t.signal, "options.signal"), e = ql(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new sr();
    for await (const i of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new sr();
      e-- <= 0 && (yield i);
    }
  }).call(this);
}
function ob(e, t = void 0) {
  return t != null && Hr(t, "options"), (t == null ? void 0 : t.signal) != null && Ur(t.signal, "options.signal"), e = ql(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new sr();
    for await (const i of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new sr();
      if (e-- > 0 && (yield i), e <= 0)
        return;
    }
  }).call(this);
}
Hs.streamReturningOperators = {
  asIndexedPairs: z_(J_, "readable.asIndexedPairs will be removed in a future version."),
  drop: ib,
  filter: Ys,
  flatMap: nb,
  map: xi,
  take: ob,
  compose: K_
};
Hs.promiseReturningOperators = {
  every: X_,
  forEach: Q_,
  reduce: tb,
  toArray: rb,
  some: Vl,
  find: Y_
};
var Fo, kf;
function Gl() {
  if (kf)
    return Fo;
  kf = 1;
  const { ArrayPrototypePop: e, Promise: t } = rt, { isIterable: r, isNodeStream: n, isWebStream: o } = br, { pipelineImpl: i } = Xs, { finished: s } = Tr;
  Zl();
  function l(...f) {
    return new t((c, u) => {
      let h, b;
      const _ = f[f.length - 1];
      if (_ && typeof _ == "object" && !n(_) && !r(_) && !o(_)) {
        const R = e(f);
        h = R.signal, b = R.end;
      }
      i(
        f,
        (R, T) => {
          R ? u(R) : c(T);
        },
        {
          signal: h,
          end: b
        }
      );
    });
  }
  return Fo = {
    finished: s,
    pipeline: l
  }, Fo;
}
var Df;
function Zl() {
  if (Df)
    return So.exports;
  Df = 1;
  const { Buffer: e } = or, { ObjectDefineProperty: t, ObjectKeys: r, ReflectApply: n } = rt, {
    promisify: { custom: o }
  } = vt, { streamReturningOperators: i, promiseReturningOperators: s } = Hs, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: l }
  } = It, f = zl, { setDefaultHighWaterMark: c, getDefaultHighWaterMark: u } = ki, { pipeline: h } = Xs, { destroyer: b } = un, _ = Tr, R = Gl(), T = br, N = So.exports = Gs.Stream;
  N.isDestroyed = T.isDestroyed, N.isDisturbed = T.isDisturbed, N.isErrored = T.isErrored, N.isReadable = T.isReadable, N.isWritable = T.isWritable, N.Readable = Di();
  for (const L of r(i)) {
    let S = function(...H) {
      if (new.target)
        throw l();
      return N.Readable.from(n(O, this, H));
    };
    const O = i[L];
    t(S, "name", {
      __proto__: null,
      value: O.name
    }), t(S, "length", {
      __proto__: null,
      value: O.length
    }), t(N.Readable.prototype, L, {
      __proto__: null,
      value: S,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const L of r(s)) {
    let S = function(...H) {
      if (new.target)
        throw l();
      return n(O, this, H);
    };
    const O = s[L];
    t(S, "name", {
      __proto__: null,
      value: O.name
    }), t(S, "length", {
      __proto__: null,
      value: O.length
    }), t(N.Readable.prototype, L, {
      __proto__: null,
      value: S,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  N.Writable = Zs(), N.Duplex = hr(), N.Transform = jl, N.PassThrough = Ul, N.pipeline = h;
  const { addAbortSignal: D } = $i;
  return N.addAbortSignal = D, N.finished = _, N.destroy = b, N.compose = f, N.setDefaultHighWaterMark = c, N.getDefaultHighWaterMark = u, t(N, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return R;
    }
  }), t(h, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return R.pipeline;
    }
  }), t(_, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return R.finished;
    }
  }), N.Stream = N, N._isUint8Array = function(O) {
    return O instanceof Uint8Array;
  }, N._uint8ArrayToBuffer = function(O) {
    return e.from(O.buffer, O.byteOffset, O.byteLength);
  }, So.exports;
}
(function(e) {
  const t = Zl(), r = Gl(), n = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = n, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return r;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(Yh);
var sb = {}, xr = {}, Qs = {}, gt = {};
class Kl extends TypeError {
  constructor(t, r) {
    let n;
    const { message: o, explanation: i, ...s } = t, { path: l } = t, f = l.length === 0 ? o : `At path: ${l.join(".")} -- ${o}`;
    super(i ?? f), i != null && (this.cause = f), Object.assign(this, s), this.name = this.constructor.name, this.failures = () => n ?? (n = [t, ...r()]);
  }
}
function ab(e) {
  return jt(e) && typeof e[Symbol.iterator] == "function";
}
function jt(e) {
  return typeof e == "object" && e != null;
}
function xf(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function lt(e) {
  return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`;
}
function fb(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function cb(e, t, r, n) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = { message: e });
  const { path: o, branch: i } = t, { type: s } = r, { refinement: l, message: f = `Expected a value of type \`${s}\`${l ? ` with refinement \`${l}\`` : ""}, but received: \`${lt(n)}\`` } = e;
  return {
    value: n,
    type: s,
    refinement: l,
    key: o[o.length - 1],
    path: o,
    branch: i,
    ...e,
    message: f
  };
}
function* Is(e, t, r, n) {
  ab(e) || (e = [e]);
  for (const o of e) {
    const i = cb(o, t, r, n);
    i && (yield i);
  }
}
function* ea(e, t, r = {}) {
  const { path: n = [], branch: o = [e], coerce: i = !1, mask: s = !1 } = r, l = { path: n, branch: o };
  if (i && (e = t.coercer(e, l), s && t.type !== "type" && jt(t.schema) && jt(e) && !Array.isArray(e)))
    for (const c in e)
      t.schema[c] === void 0 && delete e[c];
  let f = "valid";
  for (const c of t.validator(e, l))
    c.explanation = r.message, f = "not_valid", yield [c, void 0];
  for (let [c, u, h] of t.entries(e, l)) {
    const b = ea(u, h, {
      path: c === void 0 ? n : [...n, c],
      branch: c === void 0 ? o : [...o, u],
      coerce: i,
      mask: s,
      message: r.message
    });
    for (const _ of b)
      _[0] ? (f = _[0].refinement != null ? "not_refined" : "not_valid", yield [_[0], void 0]) : i && (u = _[1], c === void 0 ? e = u : e instanceof Map ? e.set(c, u) : e instanceof Set ? e.add(u) : jt(e) && (u !== void 0 || c in e) && (e[c] = u));
  }
  if (f !== "not_valid")
    for (const c of t.refiner(e, l))
      c.explanation = r.message, f = "not_refined", yield [c, void 0];
  f === "valid" && (yield [void 0, e]);
}
class at {
  constructor(t) {
    const { type: r, schema: n, validator: o, refiner: i, coercer: s = (f) => f, entries: l = function* () {
    } } = t;
    this.type = r, this.schema = n, this.entries = l, this.coercer = s, o ? this.validator = (f, c) => {
      const u = o(f, c);
      return Is(u, c, this, f);
    } : this.validator = () => [], i ? this.refiner = (f, c) => {
      const u = i(f, c);
      return Is(u, c, this, f);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t, r) {
    return Jl(t, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t, r) {
    return Xl(t, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return ta(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t, r) {
    return Yl(t, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, r = {}) {
    return dn(t, this, r);
  }
}
function Jl(e, t, r) {
  const n = dn(e, t, { message: r });
  if (n[0])
    throw n[0];
}
function Xl(e, t, r) {
  const n = dn(e, t, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function Yl(e, t, r) {
  const n = dn(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function ta(e, t) {
  return !dn(e, t)[0];
}
function dn(e, t, r = {}) {
  const n = ea(e, t, r), o = fb(n);
  return o[0] ? [new Kl(o[0], function* () {
    for (const s of n)
      s[0] && (yield s[0]);
  }), void 0] : [void 0, o[1]];
}
function lb(...e) {
  const t = e[0].type === "type", r = e.map((o) => o.schema), n = Object.assign({}, ...r);
  return t ? Wn(n) : zn(n);
}
function Tt(e, t) {
  return new at({ type: e, schema: null, validator: t });
}
function ub(e, t) {
  return new at({
    ...e,
    refiner: (r, n) => r === void 0 || e.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (t(r, n), e.validator(r, n));
    }
  });
}
function db(e) {
  return new at({
    type: "dynamic",
    schema: null,
    *entries(t, r) {
      yield* e(t, r).entries(t, r);
    },
    validator(t, r) {
      return e(t, r).validator(t, r);
    },
    coercer(t, r) {
      return e(t, r).coercer(t, r);
    },
    refiner(t, r) {
      return e(t, r).refiner(t, r);
    }
  });
}
function hb(e) {
  let t;
  return new at({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      t ?? (t = e()), yield* t.entries(r, n);
    },
    validator(r, n) {
      return t ?? (t = e()), t.validator(r, n);
    },
    coercer(r, n) {
      return t ?? (t = e()), t.coercer(r, n);
    },
    refiner(r, n) {
      return t ?? (t = e()), t.refiner(r, n);
    }
  });
}
function gb(e, t) {
  const { schema: r } = e, n = { ...r };
  for (const o of t)
    delete n[o];
  switch (e.type) {
    case "type":
      return Wn(n);
    default:
      return zn(n);
  }
}
function _b(e) {
  const t = e instanceof at, r = t ? { ...e.schema } : { ...e };
  for (const n in r)
    r[n] = Ql(r[n]);
  return t && e.type === "type" ? Wn(r) : zn(r);
}
function bb(e, t) {
  const { schema: r } = e, n = {};
  for (const o of t)
    n[o] = r[o];
  switch (e.type) {
    case "type":
      return Wn(n);
    default:
      return zn(n);
  }
}
function pb(e, t) {
  return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), Tt(e, t);
}
function yb() {
  return Tt("any", () => !0);
}
function wb(e) {
  return new at({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries())
          yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array value, but received: ${lt(t)}`;
    }
  });
}
function mb() {
  return Tt("bigint", (e) => typeof e == "bigint");
}
function Eb() {
  return Tt("boolean", (e) => typeof e == "boolean");
}
function vb() {
  return Tt("date", (e) => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${lt(e)}`);
}
function Sb(e) {
  const t = {}, r = e.map((n) => lt(n)).join();
  for (const n of e)
    t[n] = n;
  return new at({
    type: "enums",
    schema: t,
    validator(n) {
      return e.includes(n) || `Expected one of \`${r}\`, but received: ${lt(n)}`;
    }
  });
}
function Rb() {
  return Tt("func", (e) => typeof e == "function" || `Expected a function, but received: ${lt(e)}`);
}
function Ab(e) {
  return Tt("instance", (t) => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${lt(t)}`);
}
function Ib() {
  return Tt("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${lt(e)}`);
}
function Tb(e) {
  return new at({
    type: "intersection",
    schema: null,
    *entries(t, r) {
      for (const n of e)
        yield* n.entries(t, r);
    },
    *validator(t, r) {
      for (const n of e)
        yield* n.validator(t, r);
    },
    *refiner(t, r) {
      for (const n of e)
        yield* n.refiner(t, r);
    }
  });
}
function Ob(e) {
  const t = lt(e), r = typeof e;
  return new at({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${lt(n)}`;
    }
  });
}
function Lb(e, t) {
  return new at({
    type: "map",
    schema: null,
    *entries(r) {
      if (e && t && r instanceof Map)
        for (const [n, o] of r.entries())
          yield [n, n, e], yield [n, o, t];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return r instanceof Map || `Expected a \`Map\` object, but received: ${lt(r)}`;
    }
  });
}
function ra() {
  return Tt("never", () => !1);
}
function Cb(e) {
  return new at({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r)
  });
}
function Nb() {
  return Tt("number", (e) => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${lt(e)}`);
}
function zn(e) {
  const t = e ? Object.keys(e) : [], r = ra();
  return new at({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && jt(n)) {
        const o = new Set(Object.keys(n));
        for (const i of t)
          o.delete(i), yield [i, n[i], e[i]];
        for (const i of o)
          yield [i, n[i], r];
      }
    },
    validator(n) {
      return jt(n) || `Expected an object, but received: ${lt(n)}`;
    },
    coercer(n) {
      return jt(n) ? { ...n } : n;
    }
  });
}
function Ql(e) {
  return new at({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r)
  });
}
function Pb(e, t) {
  return new at({
    type: "record",
    schema: null,
    *entries(r) {
      if (jt(r))
        for (const n in r) {
          const o = r[n];
          yield [n, n, e], yield [n, o, t];
        }
    },
    validator(r) {
      return jt(r) || `Expected an object, but received: ${lt(r)}`;
    }
  });
}
function Bb() {
  return Tt("regexp", (e) => e instanceof RegExp);
}
function $b(e) {
  return new at({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set)
        for (const r of t)
          yield [r, r, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return t instanceof Set || `Expected a \`Set\` object, but received: ${lt(t)}`;
    }
  });
}
function eu() {
  return Tt("string", (e) => typeof e == "string" || `Expected a string, but received: ${lt(e)}`);
}
function kb(e) {
  const t = ra();
  return new at({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let o = 0; o < n; o++)
          yield [o, r[o], e[o] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${lt(r)}`;
    }
  });
}
function Wn(e) {
  const t = Object.keys(e);
  return new at({
    type: "type",
    schema: e,
    *entries(r) {
      if (jt(r))
        for (const n of t)
          yield [n, r[n], e[n]];
    },
    validator(r) {
      return jt(r) || `Expected an object, but received: ${lt(r)}`;
    },
    coercer(r) {
      return jt(r) ? { ...r } : r;
    }
  });
}
function Db(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new at({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [o, i] = n.validate(r, { coerce: !0 });
        if (!o)
          return i;
      }
      return r;
    },
    validator(r, n) {
      const o = [];
      for (const i of e) {
        const [...s] = ea(r, i, n), [l] = s;
        if (l[0])
          for (const [f] of s)
            f && o.push(f);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${lt(r)}`,
        ...o
      ];
    }
  });
}
function tu() {
  return Tt("unknown", () => !0);
}
function na(e, t, r) {
  return new at({
    ...e,
    coercer: (n, o) => ta(n, t) ? e.coercer(r(n, o), o) : e.coercer(n, o)
  });
}
function xb(e, t, r = {}) {
  return na(e, tu(), (n) => {
    const o = typeof t == "function" ? t() : t;
    if (n === void 0)
      return o;
    if (!r.strict && xf(n) && xf(o)) {
      const i = { ...n };
      let s = !1;
      for (const l in o)
        i[l] === void 0 && (i[l] = o[l], s = !0);
      if (s)
        return i;
    }
    return n;
  });
}
function Mb(e) {
  return na(e, eu(), (t) => t.trim());
}
function jb(e) {
  return zr(e, "empty", (t) => {
    const r = ru(t);
    return r === 0 || `Expected an empty ${e.type} but received one with a size of \`${r}\``;
  });
}
function ru(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function Fb(e, t, r = {}) {
  const { exclusive: n } = r;
  return zr(e, "max", (o) => n ? o < t : o <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${o}\``);
}
function Ub(e, t, r = {}) {
  const { exclusive: n } = r;
  return zr(e, "min", (o) => n ? o > t : o >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${o}\``);
}
function Hb(e) {
  return zr(e, "nonempty", (t) => ru(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`);
}
function zb(e, t) {
  return zr(e, "pattern", (r) => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`);
}
function Wb(e, t, r = t) {
  const n = `Expected a ${e.type}`, o = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
  return zr(e, "size", (i) => {
    if (typeof i == "number" || i instanceof Date)
      return t <= i && i <= r || `${n} ${o} but received \`${i}\``;
    if (i instanceof Map || i instanceof Set) {
      const { size: s } = i;
      return t <= s && s <= r || `${n} with a size ${o} but received one with a size of \`${s}\``;
    } else {
      const { length: s } = i;
      return t <= s && s <= r || `${n} with a length ${o} but received one with a length of \`${s}\``;
    }
  });
}
function zr(e, t, r) {
  return new at({
    ...e,
    *refiner(n, o) {
      yield* e.refiner(n, o);
      const i = r(n, o), s = Is(i, o, e, n);
      for (const l of s)
        yield { ...l, refinement: t };
    }
  });
}
const Vb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct: at,
  StructError: Kl,
  any: yb,
  array: wb,
  assert: Jl,
  assign: lb,
  bigint: mb,
  boolean: Eb,
  coerce: na,
  create: Xl,
  date: vb,
  defaulted: xb,
  define: Tt,
  deprecated: ub,
  dynamic: db,
  empty: jb,
  enums: Sb,
  func: Rb,
  instance: Ab,
  integer: Ib,
  intersection: Tb,
  is: ta,
  lazy: hb,
  literal: Ob,
  map: Lb,
  mask: Yl,
  max: Fb,
  min: Ub,
  never: ra,
  nonempty: Hb,
  nullable: Cb,
  number: Nb,
  object: zn,
  omit: gb,
  optional: Ql,
  partial: _b,
  pattern: zb,
  pick: bb,
  record: Pb,
  refine: zr,
  regexp: Bb,
  set: $b,
  size: Wb,
  string: eu,
  struct: pb,
  trimmed: Mb,
  tuple: kb,
  type: Wn,
  union: Db,
  unknown: tu,
  validate: dn
}, Symbol.toStringTag, { value: "Module" })), Wr = /* @__PURE__ */ Ph(Vb);
Object.defineProperty(gt, "__esModule", { value: !0 });
gt.assertExhaustive = gt.assertStruct = gt.assert = gt.AssertionError = void 0;
const qb = Wr;
function Gb(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function Zb(e) {
  var t, r;
  return typeof ((r = (t = e == null ? void 0 : e.prototype) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) == "string";
}
function Kb(e) {
  const t = Gb(e) ? e.message : String(e);
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function nu(e, t) {
  return Zb(e) ? new e({
    message: t
  }) : e({
    message: t
  });
}
class ia extends Error {
  constructor(t) {
    super(t.message), this.code = "ERR_ASSERTION";
  }
}
gt.AssertionError = ia;
function Jb(e, t = "Assertion failed.", r = ia) {
  if (!e)
    throw t instanceof Error ? t : nu(r, t);
}
gt.assert = Jb;
function Xb(e, t, r = "Assertion failed", n = ia) {
  try {
    (0, qb.assert)(e, t);
  } catch (o) {
    throw nu(n, `${r}: ${Kb(o)}.`);
  }
}
gt.assertStruct = Xb;
function Yb(e) {
  throw new Error("Invalid branch reached. Should be detected during compilation.");
}
gt.assertExhaustive = Yb;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.base64 = void 0;
const Qb = Wr, ep = gt, tp = (e, t = {}) => {
  var r, n;
  const o = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1, i = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
  let s;
  i === "base64" ? s = String.raw`[A-Za-z0-9+\/]` : ((0, ep.assert)(i === "base64url"), s = String.raw`[-_A-Za-z0-9]`);
  let l;
  return o ? l = new RegExp(`^(?:${s}{4})*(?:${s}{3}=|${s}{2}==)?$`, "u") : l = new RegExp(`^(?:${s}{4})*(?:${s}{2,3}|${s}{3}=|${s}{2}==)?$`, "u"), (0, Qb.pattern)(e, l);
};
Vn.base64 = tp;
var Me = {}, qn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.remove0x = e.add0x = e.assertIsStrictHexString = e.assertIsHexString = e.isStrictHexString = e.isHexString = e.StrictHexStruct = e.HexStruct = void 0;
  const t = Wr, r = gt;
  e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu), e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu);
  function n(c) {
    return (0, t.is)(c, e.HexStruct);
  }
  e.isHexString = n;
  function o(c) {
    return (0, t.is)(c, e.StrictHexStruct);
  }
  e.isStrictHexString = o;
  function i(c) {
    (0, r.assert)(n(c), "Value must be a hexadecimal string.");
  }
  e.assertIsHexString = i;
  function s(c) {
    (0, r.assert)(o(c), 'Value must be a hexadecimal string, starting with "0x".');
  }
  e.assertIsStrictHexString = s;
  function l(c) {
    return c.startsWith("0x") ? c : c.startsWith("0X") ? `0x${c.substring(2)}` : `0x${c}`;
  }
  e.add0x = l;
  function f(c) {
    return c.startsWith("0x") || c.startsWith("0X") ? c.substring(2) : c;
  }
  e.remove0x = f;
})(qn);
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.createDataView = Me.concatBytes = Me.valueToBytes = Me.stringToBytes = Me.numberToBytes = Me.signedBigIntToBytes = Me.bigIntToBytes = Me.hexToBytes = Me.bytesToString = Me.bytesToNumber = Me.bytesToSignedBigInt = Me.bytesToBigInt = Me.bytesToHex = Me.assertIsBytes = Me.isBytes = void 0;
const Pt = gt, Ts = qn, Mf = 48, jf = 58, Ff = 87;
function rp() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++)
        e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const np = rp();
function oa(e) {
  return e instanceof Uint8Array;
}
Me.isBytes = oa;
function hn(e) {
  (0, Pt.assert)(oa(e), "Value must be a Uint8Array.");
}
Me.assertIsBytes = hn;
function iu(e) {
  if (hn(e), e.length === 0)
    return "0x";
  const t = np(), r = new Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = t[e[n]];
  return (0, Ts.add0x)(r.join(""));
}
Me.bytesToHex = iu;
function ou(e) {
  hn(e);
  const t = iu(e);
  return BigInt(t);
}
Me.bytesToBigInt = ou;
function ip(e) {
  hn(e);
  let t = BigInt(0);
  for (const r of e)
    t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
Me.bytesToSignedBigInt = ip;
function op(e) {
  hn(e);
  const t = ou(e);
  return (0, Pt.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(t);
}
Me.bytesToNumber = op;
function sp(e) {
  return hn(e), new TextDecoder().decode(e);
}
Me.bytesToString = sp;
function Mi(e) {
  var t;
  if (((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) === "0x")
    return new Uint8Array();
  (0, Ts.assertIsHexString)(e);
  const r = (0, Ts.remove0x)(e).toLowerCase(), n = r.length % 2 === 0 ? r : `0${r}`, o = new Uint8Array(n.length / 2);
  for (let i = 0; i < o.length; i++) {
    const s = n.charCodeAt(i * 2), l = n.charCodeAt(i * 2 + 1), f = s - (s < jf ? Mf : Ff), c = l - (l < jf ? Mf : Ff);
    o[i] = f * 16 + c;
  }
  return o;
}
Me.hexToBytes = Mi;
function su(e) {
  (0, Pt.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Pt.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return Mi(t);
}
Me.bigIntToBytes = su;
function ap(e, t) {
  (0, Pt.assert)(t > 0);
  const r = e >> BigInt(31);
  return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1));
}
function fp(e, t) {
  (0, Pt.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Pt.assert)(typeof t == "number", "Byte length must be a number."), (0, Pt.assert)(t > 0, "Byte length must be greater than 0."), (0, Pt.assert)(ap(e, t), "Byte length is too small to represent the given value.");
  let r = e;
  const n = new Uint8Array(t);
  for (let o = 0; o < n.length; o++)
    n[o] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
Me.signedBigIntToBytes = fp;
function au(e) {
  (0, Pt.assert)(typeof e == "number", "Value must be a number."), (0, Pt.assert)(e >= 0, "Value must be a non-negative number."), (0, Pt.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
  const t = e.toString(16);
  return Mi(t);
}
Me.numberToBytes = au;
function fu(e) {
  return (0, Pt.assert)(typeof e == "string", "Value must be a string."), new TextEncoder().encode(e);
}
Me.stringToBytes = fu;
function cu(e) {
  if (typeof e == "bigint")
    return su(e);
  if (typeof e == "number")
    return au(e);
  if (typeof e == "string")
    return e.startsWith("0x") ? Mi(e) : fu(e);
  if (oa(e))
    return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
Me.valueToBytes = cu;
function cp(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let o = 0; o < e.length; o++) {
    const i = cu(e[o]);
    t[o] = i, r += i.length;
  }
  const n = new Uint8Array(r);
  for (let o = 0, i = 0; o < t.length; o++)
    n.set(t[o], i), i += t[o].length;
  return n;
}
Me.concatBytes = cp;
function lp(e) {
  if (typeof pe.Buffer < "u" && e instanceof pe.Buffer) {
    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
Me.createDataView = lp;
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.ChecksumStruct = void 0;
const Uf = Wr, up = Vn;
ji.ChecksumStruct = (0, Uf.size)((0, up.base64)((0, Uf.string)(), { paddingRequired: !0 }), 44, 44);
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.createHex = Qt.createBytes = Qt.createBigInt = Qt.createNumber = void 0;
const et = Wr, dp = gt, lu = Me, Fi = qn, uu = (0, et.union)([(0, et.number)(), (0, et.bigint)(), (0, et.string)(), Fi.StrictHexStruct]), hp = (0, et.coerce)((0, et.number)(), uu, Number), gp = (0, et.coerce)((0, et.bigint)(), uu, BigInt);
(0, et.union)([Fi.StrictHexStruct, (0, et.instance)(Uint8Array)]);
const _p = (0, et.coerce)((0, et.instance)(Uint8Array), (0, et.union)([Fi.StrictHexStruct]), lu.hexToBytes), bp = (0, et.coerce)(Fi.StrictHexStruct, (0, et.instance)(Uint8Array), lu.bytesToHex);
function pp(e) {
  try {
    const t = (0, et.create)(e, hp);
    return (0, dp.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`), t;
  } catch (t) {
    throw t instanceof et.StructError ? new Error(`Expected a number-like value, got "${e}".`) : t;
  }
}
Qt.createNumber = pp;
function yp(e) {
  try {
    return (0, et.create)(e, gp);
  } catch (t) {
    throw t instanceof et.StructError ? new Error(`Expected a number-like value, got "${String(t.value)}".`) : t;
  }
}
Qt.createBigInt = yp;
function wp(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return (0, et.create)(e, _p);
  } catch (t) {
    throw t instanceof et.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t;
  }
}
Qt.createBytes = wp;
function mp(e) {
  if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x")
    return "0x";
  try {
    return (0, et.create)(e, bp);
  } catch (t) {
    throw t instanceof et.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t;
  }
}
Qt.createHex = mp;
var tn = {}, du = Qe && Qe.__classPrivateFieldSet || function(e, t, r, n, o) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !o)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}, Et = Qe && Qe.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, zt, Jt;
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.FrozenSet = tn.FrozenMap = void 0;
class sa {
  constructor(t) {
    zt.set(this, void 0), du(this, zt, new Map(t), "f"), Object.freeze(this);
  }
  get size() {
    return Et(this, zt, "f").size;
  }
  [(zt = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return Et(this, zt, "f")[Symbol.iterator]();
  }
  entries() {
    return Et(this, zt, "f").entries();
  }
  forEach(t, r) {
    return Et(this, zt, "f").forEach((n, o, i) => t.call(r, n, o, this));
  }
  get(t) {
    return Et(this, zt, "f").get(t);
  }
  has(t) {
    return Et(this, zt, "f").has(t);
  }
  keys() {
    return Et(this, zt, "f").keys();
  }
  values() {
    return Et(this, zt, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([t, r]) => `${String(t)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
tn.FrozenMap = sa;
class aa {
  constructor(t) {
    Jt.set(this, void 0), du(this, Jt, new Set(t), "f"), Object.freeze(this);
  }
  get size() {
    return Et(this, Jt, "f").size;
  }
  [(Jt = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return Et(this, Jt, "f")[Symbol.iterator]();
  }
  entries() {
    return Et(this, Jt, "f").entries();
  }
  forEach(t, r) {
    return Et(this, Jt, "f").forEach((n, o, i) => t.call(r, n, o, this));
  }
  has(t) {
    return Et(this, Jt, "f").has(t);
  }
  keys() {
    return Et(this, Jt, "f").keys();
  }
  values() {
    return Et(this, Jt, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((t) => String(t)).join(", ")} ` : ""}}`;
  }
}
tn.FrozenSet = aa;
Object.freeze(sa);
Object.freeze(sa.prototype);
Object.freeze(aa);
Object.freeze(aa.prototype);
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
var gu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getJsonRpcIdValidator = e.assertIsJsonRpcError = e.isJsonRpcError = e.assertIsJsonRpcFailure = e.isJsonRpcFailure = e.assertIsJsonRpcSuccess = e.isJsonRpcSuccess = e.assertIsJsonRpcResponse = e.isJsonRpcResponse = e.assertIsPendingJsonRpcResponse = e.isPendingJsonRpcResponse = e.JsonRpcResponseStruct = e.JsonRpcFailureStruct = e.JsonRpcSuccessStruct = e.PendingJsonRpcResponseStruct = e.assertIsJsonRpcRequest = e.isJsonRpcRequest = e.assertIsJsonRpcNotification = e.isJsonRpcNotification = e.JsonRpcNotificationStruct = e.JsonRpcRequestStruct = e.JsonRpcParamsStruct = e.JsonRpcErrorStruct = e.JsonRpcIdStruct = e.JsonRpcVersionStruct = e.jsonrpc2 = e.getJsonSize = e.isValidJson = e.JsonStruct = e.UnsafeJsonStruct = void 0;
  const t = Wr, r = gt, n = () => (0, t.define)("finite number", (H) => (0, t.is)(H, (0, t.number)()) && Number.isFinite(H));
  e.UnsafeJsonStruct = (0, t.union)([
    (0, t.literal)(null),
    (0, t.boolean)(),
    n(),
    (0, t.string)(),
    (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)),
    (0, t.record)((0, t.string)(), (0, t.lazy)(() => e.UnsafeJsonStruct))
  ]), e.JsonStruct = (0, t.define)("Json", (H, X) => {
    function J(j, W) {
      const Q = [...W.validator(j, X)];
      return Q.length > 0 ? Q : !0;
    }
    try {
      const j = J(H, e.UnsafeJsonStruct);
      return j !== !0 ? j : J(JSON.parse(JSON.stringify(H)), e.UnsafeJsonStruct);
    } catch (j) {
      return j instanceof RangeError ? "Circular reference detected" : !1;
    }
  });
  function o(H) {
    return (0, t.is)(H, e.JsonStruct);
  }
  e.isValidJson = o;
  function i(H) {
    (0, r.assertStruct)(H, e.JsonStruct, "Invalid JSON value");
    const X = JSON.stringify(H);
    return new TextEncoder().encode(X).byteLength;
  }
  e.getJsonSize = i, e.jsonrpc2 = "2.0", e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2), e.JsonRpcIdStruct = (0, t.nullable)((0, t.union)([(0, t.number)(), (0, t.string)()])), e.JsonRpcErrorStruct = (0, t.object)({
    code: (0, t.integer)(),
    message: (0, t.string)(),
    data: (0, t.optional)(e.JsonStruct),
    stack: (0, t.optional)((0, t.string)())
  }), e.JsonRpcParamsStruct = (0, t.optional)((0, t.union)([(0, t.record)((0, t.string)(), e.JsonStruct), (0, t.array)(e.JsonStruct)])), e.JsonRpcRequestStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    method: (0, t.string)(),
    params: e.JsonRpcParamsStruct
  }), e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]);
  function s(H) {
    return (0, t.is)(H, e.JsonRpcNotificationStruct);
  }
  e.isJsonRpcNotification = s;
  function l(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", X);
  }
  e.assertIsJsonRpcNotification = l;
  function f(H) {
    return (0, t.is)(H, e.JsonRpcRequestStruct);
  }
  e.isJsonRpcRequest = f;
  function c(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcRequestStruct, "Invalid JSON-RPC request", X);
  }
  e.assertIsJsonRpcRequest = c, e.PendingJsonRpcResponseStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    result: (0, t.optional)((0, t.unknown)()),
    error: (0, t.optional)(e.JsonRpcErrorStruct)
  }), e.JsonRpcSuccessStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    result: e.JsonStruct
  }), e.JsonRpcFailureStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    error: e.JsonRpcErrorStruct
  }), e.JsonRpcResponseStruct = (0, t.union)([
    e.JsonRpcSuccessStruct,
    e.JsonRpcFailureStruct
  ]);
  function u(H) {
    return (0, t.is)(H, e.PendingJsonRpcResponseStruct);
  }
  e.isPendingJsonRpcResponse = u;
  function h(H, X) {
    (0, r.assertStruct)(H, e.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", X);
  }
  e.assertIsPendingJsonRpcResponse = h;
  function b(H) {
    return (0, t.is)(H, e.JsonRpcResponseStruct);
  }
  e.isJsonRpcResponse = b;
  function _(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcResponseStruct, "Invalid JSON-RPC response", X);
  }
  e.assertIsJsonRpcResponse = _;
  function R(H) {
    return (0, t.is)(H, e.JsonRpcSuccessStruct);
  }
  e.isJsonRpcSuccess = R;
  function T(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", X);
  }
  e.assertIsJsonRpcSuccess = T;
  function N(H) {
    return (0, t.is)(H, e.JsonRpcFailureStruct);
  }
  e.isJsonRpcFailure = N;
  function D(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", X);
  }
  e.assertIsJsonRpcFailure = D;
  function L(H) {
    return (0, t.is)(H, e.JsonRpcErrorStruct);
  }
  e.isJsonRpcError = L;
  function O(H, X) {
    (0, r.assertStruct)(H, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", X);
  }
  e.assertIsJsonRpcError = O;
  function S(H) {
    const { permitEmptyString: X, permitFractions: J, permitNull: j } = Object.assign({ permitEmptyString: !0, permitFractions: !1, permitNull: !0 }, H);
    return (ie) => !!(typeof ie == "number" && (J || Number.isInteger(ie)) || typeof ie == "string" && (X || ie.length > 0) || j && ie === null);
  }
  e.getJsonRpcIdValidator = S;
})(gu);
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
var rn = {}, Ep = Qe && Qe.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.createModuleLogger = rn.createProjectLogger = void 0;
const vp = Ep(Vh), Sp = (0, vp.default)("metamask");
function Rp(e) {
  return Sp.extend(e);
}
rn.createProjectLogger = Rp;
function Ap(e, t) {
  return e.extend(t);
}
rn.createModuleLogger = Ap;
var bu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateNumberSize = e.calculateStringSize = e.isASCII = e.isPlainObject = e.ESCAPE_CHARACTERS_REGEXP = e.JsonSize = e.hasProperty = e.isObject = e.isNullOrUndefined = e.isNonEmptyArray = void 0;
  function t(c) {
    return Array.isArray(c) && c.length > 0;
  }
  e.isNonEmptyArray = t;
  function r(c) {
    return c == null;
  }
  e.isNullOrUndefined = r;
  function n(c) {
    return !!c && typeof c == "object" && !Array.isArray(c);
  }
  e.isObject = n;
  const o = (c, u) => Object.hasOwnProperty.call(c, u);
  e.hasProperty = o, function(c) {
    c[c.Null = 4] = "Null", c[c.Comma = 1] = "Comma", c[c.Wrapper = 1] = "Wrapper", c[c.True = 4] = "True", c[c.False = 5] = "False", c[c.Quote = 1] = "Quote", c[c.Colon = 1] = "Colon", c[c.Date = 24] = "Date";
  }(e.JsonSize || (e.JsonSize = {})), e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
  function i(c) {
    if (typeof c != "object" || c === null)
      return !1;
    try {
      let u = c;
      for (; Object.getPrototypeOf(u) !== null; )
        u = Object.getPrototypeOf(u);
      return Object.getPrototypeOf(c) === u;
    } catch {
      return !1;
    }
  }
  e.isPlainObject = i;
  function s(c) {
    return c.charCodeAt(0) <= 127;
  }
  e.isASCII = s;
  function l(c) {
    var u;
    return c.split("").reduce((b, _) => s(_) ? b + 1 : b + 2, 0) + ((u = c.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && u !== void 0 ? u : []).length;
  }
  e.calculateStringSize = l;
  function f(c) {
    return c.toString().length;
  }
  e.calculateNumberSize = f;
})(bu);
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.hexToBigInt = er.hexToNumber = er.bigIntToHex = er.numberToHex = void 0;
const Yr = gt, Dn = qn, Ip = (e) => ((0, Yr.assert)(typeof e == "number", "Value must be a number."), (0, Yr.assert)(e >= 0, "Value must be a non-negative number."), (0, Yr.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, Dn.add0x)(e.toString(16)));
er.numberToHex = Ip;
const Tp = (e) => ((0, Yr.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Yr.assert)(e >= 0, "Value must be a non-negative bigint."), (0, Dn.add0x)(e.toString(16)));
er.bigIntToHex = Tp;
const Op = (e) => {
  (0, Dn.assertIsHexString)(e);
  const t = parseInt(e, 16);
  return (0, Yr.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t;
};
er.hexToNumber = Op;
const Lp = (e) => ((0, Dn.assertIsHexString)(e), BigInt((0, Dn.add0x)(e)));
er.hexToBigInt = Lp;
var pu = {};
Object.defineProperty(pu, "__esModule", { value: !0 });
var yu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeSince = e.inMilliseconds = e.Duration = void 0, function(i) {
    i[i.Millisecond = 1] = "Millisecond", i[i.Second = 1e3] = "Second", i[i.Minute = 6e4] = "Minute", i[i.Hour = 36e5] = "Hour", i[i.Day = 864e5] = "Day", i[i.Week = 6048e5] = "Week", i[i.Year = 31536e6] = "Year";
  }(e.Duration || (e.Duration = {}));
  const t = (i) => Number.isInteger(i) && i >= 0, r = (i, s) => {
    if (!t(i))
      throw new Error(`"${s}" must be a non-negative integer. Received: "${i}".`);
  };
  function n(i, s) {
    return r(i, "count"), i * s;
  }
  e.inMilliseconds = n;
  function o(i) {
    return r(i, "timestamp"), Date.now() - i;
  }
  e.timeSince = o;
})(yu);
var wu = {};
Object.defineProperty(wu, "__esModule", { value: !0 });
var mu = {}, Os = { exports: {} };
const Cp = "2.0.0", Eu = 256, Np = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Pp = 16, Bp = Eu - 6, $p = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Ui = {
  MAX_LENGTH: Eu,
  MAX_SAFE_COMPONENT_LENGTH: Pp,
  MAX_SAFE_BUILD_LENGTH: Bp,
  MAX_SAFE_INTEGER: Np,
  RELEASE_TYPES: $p,
  SEMVER_SPEC_VERSION: Cp,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const kp = typeof pe.process == "object" && pe.process.env && pe.process.env.NODE_DEBUG && /\bsemver\b/i.test(pe.process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var Hi = kp;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: o
  } = Ui, i = Hi;
  t = e.exports = {};
  const s = t.re = [], l = t.safeRe = [], f = t.src = [], c = t.t = {};
  let u = 0;
  const h = "[a-zA-Z0-9-]", b = [
    ["\\s", 1],
    ["\\d", o],
    [h, n]
  ], _ = (T) => {
    for (const [N, D] of b)
      T = T.split(`${N}*`).join(`${N}{0,${D}}`).split(`${N}+`).join(`${N}{1,${D}}`);
    return T;
  }, R = (T, N, D) => {
    const L = _(N), O = u++;
    i(T, O, N), c[T] = O, f[O] = N, s[O] = new RegExp(N, D ? "g" : void 0), l[O] = new RegExp(L, D ? "g" : void 0);
  };
  R("NUMERICIDENTIFIER", "0|[1-9]\\d*"), R("NUMERICIDENTIFIERLOOSE", "\\d+"), R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`), R("MAINVERSION", `(${f[c.NUMERICIDENTIFIER]})\\.(${f[c.NUMERICIDENTIFIER]})\\.(${f[c.NUMERICIDENTIFIER]})`), R("MAINVERSIONLOOSE", `(${f[c.NUMERICIDENTIFIERLOOSE]})\\.(${f[c.NUMERICIDENTIFIERLOOSE]})\\.(${f[c.NUMERICIDENTIFIERLOOSE]})`), R("PRERELEASEIDENTIFIER", `(?:${f[c.NUMERICIDENTIFIER]}|${f[c.NONNUMERICIDENTIFIER]})`), R("PRERELEASEIDENTIFIERLOOSE", `(?:${f[c.NUMERICIDENTIFIERLOOSE]}|${f[c.NONNUMERICIDENTIFIER]})`), R("PRERELEASE", `(?:-(${f[c.PRERELEASEIDENTIFIER]}(?:\\.${f[c.PRERELEASEIDENTIFIER]})*))`), R("PRERELEASELOOSE", `(?:-?(${f[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${f[c.PRERELEASEIDENTIFIERLOOSE]})*))`), R("BUILDIDENTIFIER", `${h}+`), R("BUILD", `(?:\\+(${f[c.BUILDIDENTIFIER]}(?:\\.${f[c.BUILDIDENTIFIER]})*))`), R("FULLPLAIN", `v?${f[c.MAINVERSION]}${f[c.PRERELEASE]}?${f[c.BUILD]}?`), R("FULL", `^${f[c.FULLPLAIN]}$`), R("LOOSEPLAIN", `[v=\\s]*${f[c.MAINVERSIONLOOSE]}${f[c.PRERELEASELOOSE]}?${f[c.BUILD]}?`), R("LOOSE", `^${f[c.LOOSEPLAIN]}$`), R("GTLT", "((?:<|>)?=?)"), R("XRANGEIDENTIFIERLOOSE", `${f[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), R("XRANGEIDENTIFIER", `${f[c.NUMERICIDENTIFIER]}|x|X|\\*`), R("XRANGEPLAIN", `[v=\\s]*(${f[c.XRANGEIDENTIFIER]})(?:\\.(${f[c.XRANGEIDENTIFIER]})(?:\\.(${f[c.XRANGEIDENTIFIER]})(?:${f[c.PRERELEASE]})?${f[c.BUILD]}?)?)?`), R("XRANGEPLAINLOOSE", `[v=\\s]*(${f[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[c.XRANGEIDENTIFIERLOOSE]})(?:${f[c.PRERELEASELOOSE]})?${f[c.BUILD]}?)?)?`), R("XRANGE", `^${f[c.GTLT]}\\s*${f[c.XRANGEPLAIN]}$`), R("XRANGELOOSE", `^${f[c.GTLT]}\\s*${f[c.XRANGEPLAINLOOSE]}$`), R("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), R("COERCE", `${f[c.COERCEPLAIN]}(?:$|[^\\d])`), R("COERCEFULL", f[c.COERCEPLAIN] + `(?:${f[c.PRERELEASE]})?(?:${f[c.BUILD]})?(?:$|[^\\d])`), R("COERCERTL", f[c.COERCE], !0), R("COERCERTLFULL", f[c.COERCEFULL], !0), R("LONETILDE", "(?:~>?)"), R("TILDETRIM", `(\\s*)${f[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", R("TILDE", `^${f[c.LONETILDE]}${f[c.XRANGEPLAIN]}$`), R("TILDELOOSE", `^${f[c.LONETILDE]}${f[c.XRANGEPLAINLOOSE]}$`), R("LONECARET", "(?:\\^)"), R("CARETTRIM", `(\\s*)${f[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", R("CARET", `^${f[c.LONECARET]}${f[c.XRANGEPLAIN]}$`), R("CARETLOOSE", `^${f[c.LONECARET]}${f[c.XRANGEPLAINLOOSE]}$`), R("COMPARATORLOOSE", `^${f[c.GTLT]}\\s*(${f[c.LOOSEPLAIN]})$|^$`), R("COMPARATOR", `^${f[c.GTLT]}\\s*(${f[c.FULLPLAIN]})$|^$`), R("COMPARATORTRIM", `(\\s*)${f[c.GTLT]}\\s*(${f[c.LOOSEPLAIN]}|${f[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", R("HYPHENRANGE", `^\\s*(${f[c.XRANGEPLAIN]})\\s+-\\s+(${f[c.XRANGEPLAIN]})\\s*$`), R("HYPHENRANGELOOSE", `^\\s*(${f[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${f[c.XRANGEPLAINLOOSE]})\\s*$`), R("STAR", "(<|>)?=?\\s*\\*"), R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Os, Os.exports);
var Gn = Os.exports;
const Dp = Object.freeze({ loose: !0 }), xp = Object.freeze({}), Mp = (e) => e ? typeof e != "object" ? Dp : e : xp;
var fa = Mp;
const Hf = /^[0-9]+$/, vu = (e, t) => {
  const r = Hf.test(e), n = Hf.test(t);
  return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
}, jp = (e, t) => vu(t, e);
var Su = {
  compareIdentifiers: vu,
  rcompareIdentifiers: jp
};
const ii = Hi, { MAX_LENGTH: zf, MAX_SAFE_INTEGER: oi } = Ui, { safeRe: Wf, t: Vf } = Gn, Fp = fa, { compareIdentifiers: qr } = Su;
let Up = class Xt {
  constructor(t, r) {
    if (r = Fp(r), t instanceof Xt) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > zf)
      throw new TypeError(
        `version is longer than ${zf} characters`
      );
    ii("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = t.trim().match(r.loose ? Wf[Vf.LOOSE] : Wf[Vf.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > oi || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > oi || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > oi || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const i = +o;
        if (i >= 0 && i < oi)
          return i;
      }
      return o;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (ii("SemVer.compare", this.version, this.options, t), !(t instanceof Xt)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Xt(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Xt || (t = new Xt(t, this.options)), qr(this.major, t.major) || qr(this.minor, t.minor) || qr(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof Xt || (t = new Xt(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], o = t.prerelease[r];
      if (ii("prerelease compare", r, n, o), n === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === o)
        continue;
      return qr(n, o);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof Xt || (t = new Xt(t, this.options));
    let r = 0;
    do {
      const n = this.build[r], o = t.build[r];
      if (ii("build compare", r, n, o), n === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === o)
        continue;
      return qr(n, o);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const o = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [o];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          if (i === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o);
          }
        }
        if (r) {
          let i = [r, o];
          n === !1 && (i = [r]), qr(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var St = Up;
const qf = St, Hp = (e, t, r = !1) => {
  if (e instanceof qf)
    return e;
  try {
    return new qf(e, t);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var gn = Hp;
const zp = gn, Wp = (e, t) => {
  const r = zp(e, t);
  return r ? r.version : null;
};
var Vp = Wp;
const qp = gn, Gp = (e, t) => {
  const r = qp(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var Zp = Gp;
const Gf = St, Kp = (e, t, r, n, o) => {
  typeof r == "string" && (o = n, n = r, r = void 0);
  try {
    return new Gf(
      e instanceof Gf ? e.version : e,
      r
    ).inc(t, n, o).version;
  } catch {
    return null;
  }
};
var Jp = Kp;
const Zf = gn, Xp = (e, t) => {
  const r = Zf(e, null, !0), n = Zf(t, null, !0), o = r.compare(n);
  if (o === 0)
    return null;
  const i = o > 0, s = i ? r : n, l = i ? n : r, f = !!s.prerelease.length;
  if (!!l.prerelease.length && !f)
    return !l.patch && !l.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
  const u = f ? "pre" : "";
  return r.major !== n.major ? u + "major" : r.minor !== n.minor ? u + "minor" : r.patch !== n.patch ? u + "patch" : "prerelease";
};
var Yp = Xp;
const Qp = St, ey = (e, t) => new Qp(e, t).major;
var ty = ey;
const ry = St, ny = (e, t) => new ry(e, t).minor;
var iy = ny;
const oy = St, sy = (e, t) => new oy(e, t).patch;
var ay = sy;
const fy = gn, cy = (e, t) => {
  const r = fy(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var ly = cy;
const Kf = St, uy = (e, t, r) => new Kf(e, r).compare(new Kf(t, r));
var Gt = uy;
const dy = Gt, hy = (e, t, r) => dy(t, e, r);
var gy = hy;
const _y = Gt, by = (e, t) => _y(e, t, !0);
var py = by;
const Jf = St, yy = (e, t, r) => {
  const n = new Jf(e, r), o = new Jf(t, r);
  return n.compare(o) || n.compareBuild(o);
};
var ca = yy;
const wy = ca, my = (e, t) => e.sort((r, n) => wy(r, n, t));
var Ey = my;
const vy = ca, Sy = (e, t) => e.sort((r, n) => vy(n, r, t));
var Ry = Sy;
const Ay = Gt, Iy = (e, t, r) => Ay(e, t, r) > 0;
var zi = Iy;
const Ty = Gt, Oy = (e, t, r) => Ty(e, t, r) < 0;
var la = Oy;
const Ly = Gt, Cy = (e, t, r) => Ly(e, t, r) === 0;
var Ru = Cy;
const Ny = Gt, Py = (e, t, r) => Ny(e, t, r) !== 0;
var Au = Py;
const By = Gt, $y = (e, t, r) => By(e, t, r) >= 0;
var ua = $y;
const ky = Gt, Dy = (e, t, r) => ky(e, t, r) <= 0;
var da = Dy;
const xy = Ru, My = Au, jy = zi, Fy = ua, Uy = la, Hy = da, zy = (e, t, r, n) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return xy(e, r, n);
    case "!=":
      return My(e, r, n);
    case ">":
      return jy(e, r, n);
    case ">=":
      return Fy(e, r, n);
    case "<":
      return Uy(e, r, n);
    case "<=":
      return Hy(e, r, n);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var Iu = zy;
const Wy = St, Vy = gn, { safeRe: si, t: ai } = Gn, qy = (e, t) => {
  if (e instanceof Wy)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? si[ai.COERCEFULL] : si[ai.COERCE]);
  else {
    const f = t.includePrerelease ? si[ai.COERCERTLFULL] : si[ai.COERCERTL];
    let c;
    for (; (c = f.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || c.index + c[0].length !== r.index + r[0].length) && (r = c), f.lastIndex = c.index + c[1].length + c[2].length;
    f.lastIndex = -1;
  }
  if (r === null)
    return null;
  const n = r[2], o = r[3] || "0", i = r[4] || "0", s = t.includePrerelease && r[5] ? `-${r[5]}` : "", l = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return Vy(`${n}.${o}.${i}${s}${l}`, t);
};
var Gy = qy;
class Zy {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0)
      return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const o = this.map.keys().next().value;
        this.delete(o);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var Ky = Zy, Uo, Xf;
function Zt() {
  if (Xf)
    return Uo;
  Xf = 1;
  class e {
    constructor(m, $) {
      if ($ = n($), m instanceof e)
        return m.loose === !!$.loose && m.includePrerelease === !!$.includePrerelease ? m : new e(m.raw, $);
      if (m instanceof o)
        return this.raw = m.value, this.set = [[m]], this.format(), this;
      if (this.options = $, this.loose = !!$.loose, this.includePrerelease = !!$.includePrerelease, this.raw = m.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((M) => this.parseRange(M.trim())).filter((M) => M.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const M = this.set[0];
        if (this.set = this.set.filter((P) => !R(P[0])), this.set.length === 0)
          this.set = [M];
        else if (this.set.length > 1) {
          for (const P of this.set)
            if (P.length === 1 && T(P[0])) {
              this.set = [P];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((m) => m.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(m) {
      const M = ((this.options.includePrerelease && b) | (this.options.loose && _)) + ":" + m, P = r.get(M);
      if (P)
        return P;
      const F = this.options.loose, C = F ? l[f.HYPHENRANGELOOSE] : l[f.HYPHENRANGE];
      m = m.replace(C, Q(this.options.includePrerelease)), i("hyphen replace", m), m = m.replace(l[f.COMPARATORTRIM], c), i("comparator trim", m), m = m.replace(l[f.TILDETRIM], u), i("tilde trim", m), m = m.replace(l[f.CARETTRIM], h), i("caret trim", m);
      let U = m.split(" ").map((ne) => D(ne, this.options)).join(" ").split(/\s+/).map((ne) => ie(ne, this.options));
      F && (U = U.filter((ne) => (i("loose invalid filter", ne, this.options), !!ne.match(l[f.COMPARATORLOOSE])))), i("range list", U);
      const q = /* @__PURE__ */ new Map(), oe = U.map((ne) => new o(ne, this.options));
      for (const ne of oe) {
        if (R(ne))
          return [ne];
        q.set(ne.value, ne);
      }
      q.size > 1 && q.has("") && q.delete("");
      const V = [...q.values()];
      return r.set(M, V), V;
    }
    intersects(m, $) {
      if (!(m instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((M) => N(M, $) && m.set.some((P) => N(P, $) && M.every((F) => P.every((C) => F.intersects(C, $)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(m) {
      if (!m)
        return !1;
      if (typeof m == "string")
        try {
          m = new s(m, this.options);
        } catch {
          return !1;
        }
      for (let $ = 0; $ < this.set.length; $++)
        if (w(this.set[$], m, this.options))
          return !0;
      return !1;
    }
  }
  Uo = e;
  const t = Ky, r = new t(), n = fa, o = Wi(), i = Hi, s = St, {
    safeRe: l,
    t: f,
    comparatorTrimReplace: c,
    tildeTrimReplace: u,
    caretTrimReplace: h
  } = Gn, { FLAG_INCLUDE_PRERELEASE: b, FLAG_LOOSE: _ } = Ui, R = (d) => d.value === "<0.0.0-0", T = (d) => d.value === "", N = (d, m) => {
    let $ = !0;
    const M = d.slice();
    let P = M.pop();
    for (; $ && M.length; )
      $ = M.every((F) => P.intersects(F, m)), P = M.pop();
    return $;
  }, D = (d, m) => (i("comp", d, m), d = H(d, m), i("caret", d), d = O(d, m), i("tildes", d), d = J(d, m), i("xrange", d), d = W(d, m), i("stars", d), d), L = (d) => !d || d.toLowerCase() === "x" || d === "*", O = (d, m) => d.trim().split(/\s+/).map(($) => S($, m)).join(" "), S = (d, m) => {
    const $ = m.loose ? l[f.TILDELOOSE] : l[f.TILDE];
    return d.replace($, (M, P, F, C, U) => {
      i("tilde", d, M, P, F, C, U);
      let q;
      return L(P) ? q = "" : L(F) ? q = `>=${P}.0.0 <${+P + 1}.0.0-0` : L(C) ? q = `>=${P}.${F}.0 <${P}.${+F + 1}.0-0` : U ? (i("replaceTilde pr", U), q = `>=${P}.${F}.${C}-${U} <${P}.${+F + 1}.0-0`) : q = `>=${P}.${F}.${C} <${P}.${+F + 1}.0-0`, i("tilde return", q), q;
    });
  }, H = (d, m) => d.trim().split(/\s+/).map(($) => X($, m)).join(" "), X = (d, m) => {
    i("caret", d, m);
    const $ = m.loose ? l[f.CARETLOOSE] : l[f.CARET], M = m.includePrerelease ? "-0" : "";
    return d.replace($, (P, F, C, U, q) => {
      i("caret", d, P, F, C, U, q);
      let oe;
      return L(F) ? oe = "" : L(C) ? oe = `>=${F}.0.0${M} <${+F + 1}.0.0-0` : L(U) ? F === "0" ? oe = `>=${F}.${C}.0${M} <${F}.${+C + 1}.0-0` : oe = `>=${F}.${C}.0${M} <${+F + 1}.0.0-0` : q ? (i("replaceCaret pr", q), F === "0" ? C === "0" ? oe = `>=${F}.${C}.${U}-${q} <${F}.${C}.${+U + 1}-0` : oe = `>=${F}.${C}.${U}-${q} <${F}.${+C + 1}.0-0` : oe = `>=${F}.${C}.${U}-${q} <${+F + 1}.0.0-0`) : (i("no pr"), F === "0" ? C === "0" ? oe = `>=${F}.${C}.${U}${M} <${F}.${C}.${+U + 1}-0` : oe = `>=${F}.${C}.${U}${M} <${F}.${+C + 1}.0-0` : oe = `>=${F}.${C}.${U} <${+F + 1}.0.0-0`), i("caret return", oe), oe;
    });
  }, J = (d, m) => (i("replaceXRanges", d, m), d.split(/\s+/).map(($) => j($, m)).join(" ")), j = (d, m) => {
    d = d.trim();
    const $ = m.loose ? l[f.XRANGELOOSE] : l[f.XRANGE];
    return d.replace($, (M, P, F, C, U, q) => {
      i("xRange", d, M, P, F, C, U, q);
      const oe = L(F), V = oe || L(C), ne = V || L(U), ce = ne;
      return P === "=" && ce && (P = ""), q = m.includePrerelease ? "-0" : "", oe ? P === ">" || P === "<" ? M = "<0.0.0-0" : M = "*" : P && ce ? (V && (C = 0), U = 0, P === ">" ? (P = ">=", V ? (F = +F + 1, C = 0, U = 0) : (C = +C + 1, U = 0)) : P === "<=" && (P = "<", V ? F = +F + 1 : C = +C + 1), P === "<" && (q = "-0"), M = `${P + F}.${C}.${U}${q}`) : V ? M = `>=${F}.0.0${q} <${+F + 1}.0.0-0` : ne && (M = `>=${F}.${C}.0${q} <${F}.${+C + 1}.0-0`), i("xRange return", M), M;
    });
  }, W = (d, m) => (i("replaceStars", d, m), d.trim().replace(l[f.STAR], "")), ie = (d, m) => (i("replaceGTE0", d, m), d.trim().replace(l[m.includePrerelease ? f.GTE0PRE : f.GTE0], "")), Q = (d) => (m, $, M, P, F, C, U, q, oe, V, ne, ce) => (L(M) ? $ = "" : L(P) ? $ = `>=${M}.0.0${d ? "-0" : ""}` : L(F) ? $ = `>=${M}.${P}.0${d ? "-0" : ""}` : C ? $ = `>=${$}` : $ = `>=${$}${d ? "-0" : ""}`, L(oe) ? q = "" : L(V) ? q = `<${+oe + 1}.0.0-0` : L(ne) ? q = `<${oe}.${+V + 1}.0-0` : ce ? q = `<=${oe}.${V}.${ne}-${ce}` : d ? q = `<${oe}.${V}.${+ne + 1}-0` : q = `<=${q}`, `${$} ${q}`.trim()), w = (d, m, $) => {
    for (let M = 0; M < d.length; M++)
      if (!d[M].test(m))
        return !1;
    if (m.prerelease.length && !$.includePrerelease) {
      for (let M = 0; M < d.length; M++)
        if (i(d[M].semver), d[M].semver !== o.ANY && d[M].semver.prerelease.length > 0) {
          const P = d[M].semver;
          if (P.major === m.major && P.minor === m.minor && P.patch === m.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Uo;
}
var Ho, Yf;
function Wi() {
  if (Yf)
    return Ho;
  Yf = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(u, h) {
      if (h = r(h), u instanceof t) {
        if (u.loose === !!h.loose)
          return u;
        u = u.value;
      }
      u = u.trim().split(/\s+/).join(" "), s("comparator", u, h), this.options = h, this.loose = !!h.loose, this.parse(u), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
    }
    parse(u) {
      const h = this.options.loose ? n[o.COMPARATORLOOSE] : n[o.COMPARATOR], b = u.match(h);
      if (!b)
        throw new TypeError(`Invalid comparator: ${u}`);
      this.operator = b[1] !== void 0 ? b[1] : "", this.operator === "=" && (this.operator = ""), b[2] ? this.semver = new l(b[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(u) {
      if (s("Comparator.test", u, this.options.loose), this.semver === e || u === e)
        return !0;
      if (typeof u == "string")
        try {
          u = new l(u, this.options);
        } catch {
          return !1;
        }
      return i(u, this.operator, this.semver, this.options);
    }
    intersects(u, h) {
      if (!(u instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new f(u.value, h).test(this.value) : u.operator === "" ? u.value === "" ? !0 : new f(this.value, h).test(u.semver) : (h = r(h), h.includePrerelease && (this.value === "<0.0.0-0" || u.value === "<0.0.0-0") || !h.includePrerelease && (this.value.startsWith("<0.0.0") || u.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && u.operator.startsWith(">") || this.operator.startsWith("<") && u.operator.startsWith("<") || this.semver.version === u.semver.version && this.operator.includes("=") && u.operator.includes("=") || i(this.semver, "<", u.semver, h) && this.operator.startsWith(">") && u.operator.startsWith("<") || i(this.semver, ">", u.semver, h) && this.operator.startsWith("<") && u.operator.startsWith(">")));
    }
  }
  Ho = t;
  const r = fa, { safeRe: n, t: o } = Gn, i = Iu, s = Hi, l = St, f = Zt();
  return Ho;
}
const Jy = Zt(), Xy = (e, t, r) => {
  try {
    t = new Jy(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var Vi = Xy;
const Yy = Zt(), Qy = (e, t) => new Yy(e, t).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var ew = Qy;
const tw = St, rw = Zt(), nw = (e, t, r) => {
  let n = null, o = null, i = null;
  try {
    i = new rw(t, r);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    i.test(s) && (!n || o.compare(s) === -1) && (n = s, o = new tw(n, r));
  }), n;
};
var iw = nw;
const ow = St, sw = Zt(), aw = (e, t, r) => {
  let n = null, o = null, i = null;
  try {
    i = new sw(t, r);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    i.test(s) && (!n || o.compare(s) === 1) && (n = s, o = new ow(n, r));
  }), n;
};
var fw = aw;
const zo = St, cw = Zt(), Qf = zi, lw = (e, t) => {
  e = new cw(e, t);
  let r = new zo("0.0.0");
  if (e.test(r) || (r = new zo("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let n = 0; n < e.set.length; ++n) {
    const o = e.set[n];
    let i = null;
    o.forEach((s) => {
      const l = new zo(s.semver.version);
      switch (s.operator) {
        case ">":
          l.prerelease.length === 0 ? l.patch++ : l.prerelease.push(0), l.raw = l.format();
        case "":
        case ">=":
          (!i || Qf(l, i)) && (i = l);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${s.operator}`);
      }
    }), i && (!r || Qf(r, i)) && (r = i);
  }
  return r && e.test(r) ? r : null;
};
var uw = lw;
const dw = Zt(), hw = (e, t) => {
  try {
    return new dw(e, t).range || "*";
  } catch {
    return null;
  }
};
var gw = hw;
const _w = St, Tu = Wi(), { ANY: bw } = Tu, pw = Zt(), yw = Vi, ec = zi, tc = la, ww = da, mw = ua, Ew = (e, t, r, n) => {
  e = new _w(e, n), t = new pw(t, n);
  let o, i, s, l, f;
  switch (r) {
    case ">":
      o = ec, i = ww, s = tc, l = ">", f = ">=";
      break;
    case "<":
      o = tc, i = mw, s = ec, l = "<", f = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (yw(e, t, n))
    return !1;
  for (let c = 0; c < t.set.length; ++c) {
    const u = t.set[c];
    let h = null, b = null;
    if (u.forEach((_) => {
      _.semver === bw && (_ = new Tu(">=0.0.0")), h = h || _, b = b || _, o(_.semver, h.semver, n) ? h = _ : s(_.semver, b.semver, n) && (b = _);
    }), h.operator === l || h.operator === f || (!b.operator || b.operator === l) && i(e, b.semver))
      return !1;
    if (b.operator === f && s(e, b.semver))
      return !1;
  }
  return !0;
};
var ha = Ew;
const vw = ha, Sw = (e, t, r) => vw(e, t, ">", r);
var Rw = Sw;
const Aw = ha, Iw = (e, t, r) => Aw(e, t, "<", r);
var Tw = Iw;
const rc = Zt(), Ow = (e, t, r) => (e = new rc(e, r), t = new rc(t, r), e.intersects(t, r));
var Lw = Ow;
const Cw = Vi, Nw = Gt;
var Pw = (e, t, r) => {
  const n = [];
  let o = null, i = null;
  const s = e.sort((u, h) => Nw(u, h, r));
  for (const u of s)
    Cw(u, t, r) ? (i = u, o || (o = u)) : (i && n.push([o, i]), i = null, o = null);
  o && n.push([o, null]);
  const l = [];
  for (const [u, h] of n)
    u === h ? l.push(u) : !h && u === s[0] ? l.push("*") : h ? u === s[0] ? l.push(`<=${h}`) : l.push(`${u} - ${h}`) : l.push(`>=${u}`);
  const f = l.join(" || "), c = typeof t.raw == "string" ? t.raw : String(t);
  return f.length < c.length ? f : t;
};
const nc = Zt(), ga = Wi(), { ANY: Wo } = ga, En = Vi, _a = Gt, Bw = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new nc(e, r), t = new nc(t, r);
  let n = !1;
  e:
    for (const o of e.set) {
      for (const i of t.set) {
        const s = kw(o, i, r);
        if (n = n || s !== null, s)
          continue e;
      }
      if (n)
        return !1;
    }
  return !0;
}, $w = [new ga(">=0.0.0-0")], ic = [new ga(">=0.0.0")], kw = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Wo) {
    if (t.length === 1 && t[0].semver === Wo)
      return !0;
    r.includePrerelease ? e = $w : e = ic;
  }
  if (t.length === 1 && t[0].semver === Wo) {
    if (r.includePrerelease)
      return !0;
    t = ic;
  }
  const n = /* @__PURE__ */ new Set();
  let o, i;
  for (const _ of e)
    _.operator === ">" || _.operator === ">=" ? o = oc(o, _, r) : _.operator === "<" || _.operator === "<=" ? i = sc(i, _, r) : n.add(_.semver);
  if (n.size > 1)
    return null;
  let s;
  if (o && i) {
    if (s = _a(o.semver, i.semver, r), s > 0)
      return null;
    if (s === 0 && (o.operator !== ">=" || i.operator !== "<="))
      return null;
  }
  for (const _ of n) {
    if (o && !En(_, String(o), r) || i && !En(_, String(i), r))
      return null;
    for (const R of t)
      if (!En(_, String(R), r))
        return !1;
    return !0;
  }
  let l, f, c, u, h = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1, b = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
  h && h.prerelease.length === 1 && i.operator === "<" && h.prerelease[0] === 0 && (h = !1);
  for (const _ of t) {
    if (u = u || _.operator === ">" || _.operator === ">=", c = c || _.operator === "<" || _.operator === "<=", o) {
      if (b && _.semver.prerelease && _.semver.prerelease.length && _.semver.major === b.major && _.semver.minor === b.minor && _.semver.patch === b.patch && (b = !1), _.operator === ">" || _.operator === ">=") {
        if (l = oc(o, _, r), l === _ && l !== o)
          return !1;
      } else if (o.operator === ">=" && !En(o.semver, String(_), r))
        return !1;
    }
    if (i) {
      if (h && _.semver.prerelease && _.semver.prerelease.length && _.semver.major === h.major && _.semver.minor === h.minor && _.semver.patch === h.patch && (h = !1), _.operator === "<" || _.operator === "<=") {
        if (f = sc(i, _, r), f === _ && f !== i)
          return !1;
      } else if (i.operator === "<=" && !En(i.semver, String(_), r))
        return !1;
    }
    if (!_.operator && (i || o) && s !== 0)
      return !1;
  }
  return !(o && c && !i && s !== 0 || i && u && !o && s !== 0 || b || h);
}, oc = (e, t, r) => {
  if (!e)
    return t;
  const n = _a(e.semver, t.semver, r);
  return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, sc = (e, t, r) => {
  if (!e)
    return t;
  const n = _a(e.semver, t.semver, r);
  return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var Dw = Bw;
const Vo = Gn, ac = Ui, xw = St, fc = Su, Mw = gn, jw = Vp, Fw = Zp, Uw = Jp, Hw = Yp, zw = ty, Ww = iy, Vw = ay, qw = ly, Gw = Gt, Zw = gy, Kw = py, Jw = ca, Xw = Ey, Yw = Ry, Qw = zi, em = la, tm = Ru, rm = Au, nm = ua, im = da, om = Iu, sm = Gy, am = Wi(), fm = Zt(), cm = Vi, lm = ew, um = iw, dm = fw, hm = uw, gm = gw, _m = ha, bm = Rw, pm = Tw, ym = Lw, wm = Pw, mm = Dw;
var Em = {
  parse: Mw,
  valid: jw,
  clean: Fw,
  inc: Uw,
  diff: Hw,
  major: zw,
  minor: Ww,
  patch: Vw,
  prerelease: qw,
  compare: Gw,
  rcompare: Zw,
  compareLoose: Kw,
  compareBuild: Jw,
  sort: Xw,
  rsort: Yw,
  gt: Qw,
  lt: em,
  eq: tm,
  neq: rm,
  gte: nm,
  lte: im,
  cmp: om,
  coerce: sm,
  Comparator: am,
  Range: fm,
  satisfies: cm,
  toComparators: lm,
  maxSatisfying: um,
  minSatisfying: dm,
  minVersion: hm,
  validRange: gm,
  outside: _m,
  gtr: bm,
  ltr: pm,
  intersects: ym,
  simplifyRange: wm,
  subset: mm,
  SemVer: xw,
  re: Vo.re,
  src: Vo.src,
  tokens: Vo.t,
  SEMVER_SPEC_VERSION: ac.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: ac.RELEASE_TYPES,
  compareIdentifiers: fc.compareIdentifiers,
  rcompareIdentifiers: fc.rcompareIdentifiers
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.satisfiesVersionRange = e.gtRange = e.gtVersion = e.assertIsSemVerRange = e.assertIsSemVerVersion = e.isValidSemVerRange = e.isValidSemVerVersion = e.VersionRangeStruct = e.VersionStruct = void 0;
  const t = Em, r = Wr, n = gt;
  e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (h) => (0, t.valid)(h) === null ? `Expected SemVer version, got "${h}"` : !0), e.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", (h) => (0, t.validRange)(h) === null ? `Expected SemVer range, got "${h}"` : !0);
  function o(h) {
    return (0, r.is)(h, e.VersionStruct);
  }
  e.isValidSemVerVersion = o;
  function i(h) {
    return (0, r.is)(h, e.VersionRangeStruct);
  }
  e.isValidSemVerRange = i;
  function s(h) {
    (0, n.assertStruct)(h, e.VersionStruct);
  }
  e.assertIsSemVerVersion = s;
  function l(h) {
    (0, n.assertStruct)(h, e.VersionRangeStruct);
  }
  e.assertIsSemVerRange = l;
  function f(h, b) {
    return (0, t.gt)(h, b);
  }
  e.gtVersion = f;
  function c(h, b) {
    return (0, t.gtr)(h, b);
  }
  e.gtRange = c;
  function u(h, b) {
    return (0, t.satisfies)(h, b, {
      includePrerelease: !0
    });
  }
  e.satisfiesVersionRange = u;
})(mu);
(function(e) {
  var t = Qe && Qe.__createBinding || (Object.create ? function(n, o, i, s) {
    s === void 0 && (s = i);
    var l = Object.getOwnPropertyDescriptor(o, i);
    (!l || ("get" in l ? !o.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return o[i];
    } }), Object.defineProperty(n, s, l);
  } : function(n, o, i, s) {
    s === void 0 && (s = i), n[s] = o[i];
  }), r = Qe && Qe.__exportStar || function(n, o) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && t(o, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(gt, e), r(Vn, e), r(Me, e), r(ji, e), r(Qt, e), r(tn, e), r(hu, e), r(qn, e), r(gu, e), r(_u, e), r(rn, e), r(bu, e), r(er, e), r(pu, e), r(yu, e), r(wu, e), r(mu, e);
})(Qs);
var qi = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.errorValues = Ar.errorCodes = void 0;
Ar.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
Ar.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeCause = e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = Qs, r = Ar, n = r.errorCodes.rpc.internal, o = "Unspecified error message. This is a bug, please report it.", i = {
    code: n,
    message: s(n)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function s(_, R = o) {
    if (l(_)) {
      const T = _.toString();
      if ((0, t.hasProperty)(r.errorValues, T))
        return r.errorValues[T].message;
      if (u(_))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return R;
  }
  e.getMessageFromCode = s;
  function l(_) {
    return Number.isInteger(_);
  }
  e.isValidCode = l;
  function f(_, { fallbackError: R = i, shouldIncludeStack: T = !0 } = {}) {
    if (!(0, t.isJsonRpcError)(R))
      throw new Error("Must provide fallback error with integer number code and string message.");
    const N = c(_, R);
    return T || delete N.stack, N;
  }
  e.serializeError = f;
  function c(_, R) {
    if (_ && typeof _ == "object" && "serialize" in _ && typeof _.serialize == "function")
      return _.serialize();
    if ((0, t.isJsonRpcError)(_))
      return _;
    const T = h(_);
    return {
      ...R,
      data: { cause: T }
    };
  }
  function u(_) {
    return _ >= -32099 && _ <= -32e3;
  }
  function h(_) {
    return Array.isArray(_) ? _.map((R) => (0, t.isValidJson)(R) ? R : (0, t.isObject)(R) ? b(R) : null) : (0, t.isObject)(_) ? b(_) : (0, t.isValidJson)(_) ? _ : null;
  }
  e.serializeCause = h;
  function b(_) {
    return Object.getOwnPropertyNames(_).reduce((R, T) => {
      const N = _[T];
      return (0, t.isValidJson)(N) && (R[T] = N), R;
    }, {});
  }
})(qi);
var vm = Qe && Qe.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.EthereumProviderError = xr.JsonRpcError = void 0;
const Sm = Qs, Rm = vm(js), Am = qi;
class Ou extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a non-empty string.');
    super(r), this.code = t, n !== void 0 && (this.data = n);
  }
  /**
   * Get the error as JSON-serializable object.
   *
   * @returns A plain object with all public class properties.
   */
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data, (0, Sm.isPlainObject)(this.data) && (t.data.cause = (0, Am.serializeCause)(this.data.cause))), this.stack && (t.stack = this.stack), t;
  }
  /**
   * Get a string representation of the serialized error, omitting any circular
   * references.
   *
   * @returns A string representation of the serialized error.
   */
  toString() {
    return (0, Rm.default)(this.serialize(), Om, 2);
  }
}
xr.JsonRpcError = Ou;
class Im extends Ou {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   *
   * @param code - The JSON-RPC error code. Must be an integer in the
   * `1000 <= n <= 4999` range.
   * @param message - The JSON-RPC error message.
   * @param data - Optional data to include in the error.
   */
  constructor(t, r, n) {
    if (!Tm(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, n);
  }
}
xr.EthereumProviderError = Im;
function Tm(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function Om(e, t) {
  if (t !== "[Circular]")
    return t;
}
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.providerErrors = nn.rpcErrors = void 0;
const ba = xr, yt = Ar, Lu = qi;
nn.rpcErrors = {
  /**
   * Get a JSON RPC 2.0 Parse (-32700) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  parse: (e) => $t(yt.errorCodes.rpc.parse, e),
  /**
   * Get a JSON RPC 2.0 Invalid Request (-32600) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidRequest: (e) => $t(yt.errorCodes.rpc.invalidRequest, e),
  /**
   * Get a JSON RPC 2.0 Invalid Params (-32602) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidParams: (e) => $t(yt.errorCodes.rpc.invalidParams, e),
  /**
   * Get a JSON RPC 2.0 Method Not Found (-32601) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotFound: (e) => $t(yt.errorCodes.rpc.methodNotFound, e),
  /**
   * Get a JSON RPC 2.0 Internal (-32603) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  internal: (e) => $t(yt.errorCodes.rpc.internal, e),
  /**
   * Get a JSON RPC 2.0 Server error.
   * Permits integer error codes in the [ -32099 <= -32005 ] range.
   * Codes -32000 through -32004 are reserved by EIP-1474.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  server: (e) => {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw new Error("Ethereum RPC Server errors must provide single object argument.");
    const { code: t } = e;
    if (!Number.isInteger(t) || t > -32005 || t < -32099)
      throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
    return $t(t, e);
  },
  /**
   * Get an Ethereum JSON RPC Invalid Input (-32000) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidInput: (e) => $t(yt.errorCodes.rpc.invalidInput, e),
  /**
   * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceNotFound: (e) => $t(yt.errorCodes.rpc.resourceNotFound, e),
  /**
   * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceUnavailable: (e) => $t(yt.errorCodes.rpc.resourceUnavailable, e),
  /**
   * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  transactionRejected: (e) => $t(yt.errorCodes.rpc.transactionRejected, e),
  /**
   * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotSupported: (e) => $t(yt.errorCodes.rpc.methodNotSupported, e),
  /**
   * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  limitExceeded: (e) => $t(yt.errorCodes.rpc.limitExceeded, e)
};
nn.providerErrors = {
  /**
   * Get an Ethereum Provider User Rejected Request (4001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  userRejectedRequest: (e) => vn(yt.errorCodes.provider.userRejectedRequest, e),
  /**
   * Get an Ethereum Provider Unauthorized (4100) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unauthorized: (e) => vn(yt.errorCodes.provider.unauthorized, e),
  /**
   * Get an Ethereum Provider Unsupported Method (4200) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unsupportedMethod: (e) => vn(yt.errorCodes.provider.unsupportedMethod, e),
  /**
   * Get an Ethereum Provider Not Connected (4900) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  disconnected: (e) => vn(yt.errorCodes.provider.disconnected, e),
  /**
   * Get an Ethereum Provider Chain Not Connected (4901) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  chainDisconnected: (e) => vn(yt.errorCodes.provider.chainDisconnected, e),
  /**
   * Get a custom Ethereum Provider error.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  custom: (e) => {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw new Error("Ethereum Provider custom errors must provide single object argument.");
    const { code: t, message: r, data: n } = e;
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string');
    return new ba.EthereumProviderError(t, r, n);
  }
};
function $t(e, t) {
  const [r, n] = Cu(t);
  return new ba.JsonRpcError(e, r ?? (0, Lu.getMessageFromCode)(e), n);
}
function vn(e, t) {
  const [r, n] = Cu(t);
  return new ba.EthereumProviderError(e, r ?? (0, Lu.getMessageFromCode)(e), n);
}
function Cu(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t ?? void 0, r];
    }
  }
  return [];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.errorCodes = e.providerErrors = e.rpcErrors = e.getMessageFromCode = e.serializeError = e.serializeCause = e.EthereumProviderError = e.JsonRpcError = void 0;
  var t = xr;
  Object.defineProperty(e, "JsonRpcError", { enumerable: !0, get: function() {
    return t.JsonRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  var r = qi;
  Object.defineProperty(e, "serializeCause", { enumerable: !0, get: function() {
    return r.serializeCause;
  } }), Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  var n = nn;
  Object.defineProperty(e, "rpcErrors", { enumerable: !0, get: function() {
    return n.rpcErrors;
  } }), Object.defineProperty(e, "providerErrors", { enumerable: !0, get: function() {
    return n.providerErrors;
  } });
  var o = Ar;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return o.errorCodes;
  } });
})(sb);
var pa = { exports: {} }, Lm = Nu;
function Nu(e, t) {
  if (e && t)
    return Nu(e)(t);
  if (typeof e != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(e).forEach(function(n) {
    r[n] = e[n];
  }), r;
  function r() {
    for (var n = new Array(arguments.length), o = 0; o < n.length; o++)
      n[o] = arguments[o];
    var i = e.apply(this, n), s = n[n.length - 1];
    return typeof i == "function" && i !== s && Object.keys(s).forEach(function(l) {
      i[l] = s[l];
    }), i;
  }
}
var Pu = Lm;
pa.exports = Pu(gi);
pa.exports.strict = Pu(Bu);
gi.proto = gi(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return gi(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return Bu(this);
    },
    configurable: !0
  });
});
function gi(e) {
  var t = function() {
    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
  };
  return t.called = !1, t;
}
function Bu(e) {
  var t = function() {
    if (t.called)
      throw new Error(t.onceError);
    return t.called = !0, t.value = e.apply(this, arguments);
  }, r = e.name || "Function wrapped with `once`";
  return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
}
var ya = pa.exports;
const Cm = /* @__PURE__ */ Ir(ya);
var Nm = ya, Pm = function() {
}, Bm = function(e) {
  return e.setHeader && typeof e.abort == "function";
}, $m = function(e) {
  return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3;
}, $u = function(e, t, r) {
  if (typeof t == "function")
    return $u(e, null, t);
  t || (t = {}), r = Nm(r || Pm);
  var n = e._writableState, o = e._readableState, i = t.readable || t.readable !== !1 && e.readable, s = t.writable || t.writable !== !1 && e.writable, l = !1, f = function() {
    e.writable || c();
  }, c = function() {
    s = !1, i || r.call(e);
  }, u = function() {
    i = !1, s || r.call(e);
  }, h = function(N) {
    r.call(e, N ? new Error("exited with error code: " + N) : null);
  }, b = function(N) {
    r.call(e, N);
  }, _ = function() {
    pe.process.nextTick(R);
  }, R = function() {
    if (!l) {
      if (i && !(o && o.ended && !o.destroyed))
        return r.call(e, new Error("premature close"));
      if (s && !(n && n.ended && !n.destroyed))
        return r.call(e, new Error("premature close"));
    }
  }, T = function() {
    e.req.on("finish", c);
  };
  return Bm(e) ? (e.on("complete", c), e.on("abort", _), e.req ? T() : e.on("request", T)) : s && !n && (e.on("end", f), e.on("close", f)), $m(e) && e.on("exit", h), e.on("end", u), e.on("finish", c), t.error !== !1 && e.on("error", b), e.on("close", _), function() {
    l = !0, e.removeListener("complete", c), e.removeListener("abort", _), e.removeListener("request", T), e.req && e.req.removeListener("finish", c), e.removeListener("end", f), e.removeListener("close", f), e.removeListener("finish", c), e.removeListener("exit", h), e.removeListener("end", u), e.removeListener("error", b), e.removeListener("close", _);
  };
}, ku = $u;
const cc = /* @__PURE__ */ Ir(ku);
var km = ya, Dm = ku, qo = Bh, xn = function() {
}, xm = /^v?\.0/.test(pe.process.version), Gi = function(e) {
  return typeof e == "function";
}, Mm = function(e) {
  return !xm || !qo ? !1 : (e instanceof (qo.ReadStream || xn) || e instanceof (qo.WriteStream || xn)) && Gi(e.close);
}, jm = function(e) {
  return e.setHeader && Gi(e.abort);
}, Fm = function(e, t, r, n) {
  n = km(n);
  var o = !1;
  e.on("close", function() {
    o = !0;
  }), Dm(e, { readable: t, writable: r }, function(s) {
    if (s)
      return n(s);
    o = !0, n();
  });
  var i = !1;
  return function(s) {
    if (!o && !i) {
      if (i = !0, Mm(e))
        return e.close(xn);
      if (jm(e))
        return e.abort();
      if (Gi(e.destroy))
        return e.destroy();
      n(s || new Error("stream was destroyed"));
    }
  };
}, lc = function(e) {
  e();
}, Um = function(e, t) {
  return e.pipe(t);
}, Hm = function() {
  var e = Array.prototype.slice.call(arguments), t = Gi(e[e.length - 1] || xn) && e.pop() || xn;
  if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
    throw new Error("pump requires two streams per minimum");
  var r, n = e.map(function(o, i) {
    var s = i < e.length - 1, l = i > 0;
    return Fm(o, s, l, function(f) {
      r || (r = f), f && n.forEach(lc), !s && (n.forEach(lc), t(r));
    });
  });
  return e.reduce(Um);
}, zm = Hm;
const uc = /* @__PURE__ */ Ir(zm);
var Wm = {}, Zi = {}, Ki = {}, Du = {}, on = {}, Ji = {}, ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.output = ut.exists = ut.hash = ut.bytes = ut.bool = ut.number = void 0;
function wi(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
ut.number = wi;
function xu(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
ut.bool = xu;
function Vm(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function wa(e, ...t) {
  if (!Vm(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ut.bytes = wa;
function Mu(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  wi(e.outputLen), wi(e.blockLen);
}
ut.hash = Mu;
function ju(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
ut.exists = ju;
function Fu(e, t) {
  wa(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ut.output = Fu;
const qm = { number: wi, bool: xu, bytes: wa, hash: Mu, exists: ju, output: Fu };
ut.default = qm;
var _r = {}, Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.crypto = void 0;
Xi.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const t = Xi, r = (j) => new Uint8Array(j.buffer, j.byteOffset, j.byteLength);
  e.u8 = r;
  const n = (j) => new Uint32Array(j.buffer, j.byteOffset, Math.floor(j.byteLength / 4));
  e.u32 = n;
  function o(j) {
    return j instanceof Uint8Array || j != null && typeof j == "object" && j.constructor.name === "Uint8Array";
  }
  const i = (j) => new DataView(j.buffer, j.byteOffset, j.byteLength);
  e.createView = i;
  const s = (j, W) => j << 32 - W | j >>> W;
  if (e.rotr = s, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const l = /* @__PURE__ */ Array.from({ length: 256 }, (j, W) => W.toString(16).padStart(2, "0"));
  function f(j) {
    if (!o(j))
      throw new Error("Uint8Array expected");
    let W = "";
    for (let ie = 0; ie < j.length; ie++)
      W += l[j[ie]];
    return W;
  }
  e.bytesToHex = f;
  const c = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function u(j) {
    if (j >= c._0 && j <= c._9)
      return j - c._0;
    if (j >= c._A && j <= c._F)
      return j - (c._A - 10);
    if (j >= c._a && j <= c._f)
      return j - (c._a - 10);
  }
  function h(j) {
    if (typeof j != "string")
      throw new Error("hex string expected, got " + typeof j);
    const W = j.length, ie = W / 2;
    if (W % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + W);
    const Q = new Uint8Array(ie);
    for (let w = 0, d = 0; w < ie; w++, d += 2) {
      const m = u(j.charCodeAt(d)), $ = u(j.charCodeAt(d + 1));
      if (m === void 0 || $ === void 0) {
        const M = j[d] + j[d + 1];
        throw new Error('hex string expected, got non-hex character "' + M + '" at index ' + d);
      }
      Q[w] = m * 16 + $;
    }
    return Q;
  }
  e.hexToBytes = h;
  const b = async () => {
  };
  e.nextTick = b;
  async function _(j, W, ie) {
    let Q = Date.now();
    for (let w = 0; w < j; w++) {
      ie(w);
      const d = Date.now() - Q;
      d >= 0 && d < W || (await (0, e.nextTick)(), Q += d);
    }
  }
  e.asyncLoop = _;
  function R(j) {
    if (typeof j != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof j}`);
    return new Uint8Array(new TextEncoder().encode(j));
  }
  e.utf8ToBytes = R;
  function T(j) {
    if (typeof j == "string" && (j = R(j)), !o(j))
      throw new Error(`expected Uint8Array, got ${typeof j}`);
    return j;
  }
  e.toBytes = T;
  function N(...j) {
    let W = 0;
    for (let Q = 0; Q < j.length; Q++) {
      const w = j[Q];
      if (!o(w))
        throw new Error("Uint8Array expected");
      W += w.length;
    }
    const ie = new Uint8Array(W);
    for (let Q = 0, w = 0; Q < j.length; Q++) {
      const d = j[Q];
      ie.set(d, w), w += d.length;
    }
    return ie;
  }
  e.concatBytes = N;
  class D {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = D;
  const L = {}.toString;
  function O(j, W) {
    if (W !== void 0 && L.call(W) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(j, W);
  }
  e.checkOpts = O;
  function S(j) {
    const W = (Q) => j().update(T(Q)).digest(), ie = j();
    return W.outputLen = ie.outputLen, W.blockLen = ie.blockLen, W.create = () => j(), W;
  }
  e.wrapConstructor = S;
  function H(j) {
    const W = (Q, w) => j(w).update(T(Q)).digest(), ie = j({});
    return W.outputLen = ie.outputLen, W.blockLen = ie.blockLen, W.create = (Q) => j(Q), W;
  }
  e.wrapConstructorWithOpts = H;
  function X(j) {
    const W = (Q, w) => j(w).update(T(Q)).digest(), ie = j({});
    return W.outputLen = ie.outputLen, W.blockLen = ie.blockLen, W.create = (Q) => j(Q), W;
  }
  e.wrapXOFConstructorWithOpts = X;
  function J(j = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(j));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = J;
})(_r);
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.SHA2 = void 0;
const Go = ut, Sn = _r;
function Gm(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const o = BigInt(32), i = BigInt(4294967295), s = Number(r >> o & i), l = Number(r & i), f = n ? 4 : 0, c = n ? 0 : 4;
  e.setUint32(t + f, s, n), e.setUint32(t + c, l, n);
}
class Zm extends Sn.Hash {
  constructor(t, r, n, o) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, Sn.createView)(this.buffer);
  }
  update(t) {
    (0, Go.exists)(this);
    const { view: r, buffer: n, blockLen: o } = this;
    t = (0, Sn.toBytes)(t);
    const i = t.length;
    for (let s = 0; s < i; ) {
      const l = Math.min(o - this.pos, i - s);
      if (l === o) {
        const f = (0, Sn.createView)(t);
        for (; o <= i - s; s += o)
          this.process(f, s);
        continue;
      }
      n.set(t.subarray(s, s + l), this.pos), this.pos += l, s += l, this.pos === o && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, Go.exists)(this), (0, Go.output)(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(n, 0), s = 0);
    for (let h = s; h < o; h++)
      r[h] = 0;
    Gm(n, o - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const l = (0, Sn.createView)(t), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = f / 4, u = this.get();
    if (c > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let h = 0; h < c; h++)
      l.setUint32(4 * h, u[h], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: o, finished: i, destroyed: s, pos: l } = this;
    return t.length = o, t.pos = l, t.finished = i, t.destroyed = s, o % r && t.buffer.set(n), t;
  }
}
Ji.SHA2 = Zm;
Object.defineProperty(on, "__esModule", { value: !0 });
on.sha224 = on.sha256 = void 0;
const Km = Ji, Dt = _r, Jm = (e, t, r) => e & t ^ ~e & r, Xm = (e, t, r) => e & t ^ e & r ^ t & r, Ym = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), yr = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), wr = /* @__PURE__ */ new Uint32Array(64);
class Uu extends Km.SHA2 {
  constructor() {
    super(64, 32, 8, !1), this.A = yr[0] | 0, this.B = yr[1] | 0, this.C = yr[2] | 0, this.D = yr[3] | 0, this.E = yr[4] | 0, this.F = yr[5] | 0, this.G = yr[6] | 0, this.H = yr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: o, E: i, F: s, G: l, H: f } = this;
    return [t, r, n, o, i, s, l, f];
  }
  // prettier-ignore
  set(t, r, n, o, i, s, l, f) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = o | 0, this.E = i | 0, this.F = s | 0, this.G = l | 0, this.H = f | 0;
  }
  process(t, r) {
    for (let h = 0; h < 16; h++, r += 4)
      wr[h] = t.getUint32(r, !1);
    for (let h = 16; h < 64; h++) {
      const b = wr[h - 15], _ = wr[h - 2], R = (0, Dt.rotr)(b, 7) ^ (0, Dt.rotr)(b, 18) ^ b >>> 3, T = (0, Dt.rotr)(_, 17) ^ (0, Dt.rotr)(_, 19) ^ _ >>> 10;
      wr[h] = T + wr[h - 7] + R + wr[h - 16] | 0;
    }
    let { A: n, B: o, C: i, D: s, E: l, F: f, G: c, H: u } = this;
    for (let h = 0; h < 64; h++) {
      const b = (0, Dt.rotr)(l, 6) ^ (0, Dt.rotr)(l, 11) ^ (0, Dt.rotr)(l, 25), _ = u + b + Jm(l, f, c) + Ym[h] + wr[h] | 0, T = ((0, Dt.rotr)(n, 2) ^ (0, Dt.rotr)(n, 13) ^ (0, Dt.rotr)(n, 22)) + Xm(n, o, i) | 0;
      u = c, c = f, f = l, l = s + _ | 0, s = i, i = o, o = n, n = _ + T | 0;
    }
    n = n + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, l = l + this.E | 0, f = f + this.F | 0, c = c + this.G | 0, u = u + this.H | 0, this.set(n, o, i, s, l, f, c, u);
  }
  roundClean() {
    wr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Qm extends Uu {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
on.sha256 = (0, Dt.wrapConstructor)(() => new Uu());
on.sha224 = (0, Dt.wrapConstructor)(() => new Qm());
var $e = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.validateObject = Ne.createHmacDrbg = Ne.bitMask = Ne.bitSet = Ne.bitGet = Ne.bitLen = Ne.utf8ToBytes = Ne.equalBytes = Ne.concatBytes = Ne.ensureBytes = Ne.numberToVarBytesBE = Ne.numberToBytesLE = Ne.numberToBytesBE = Ne.bytesToNumberLE = Ne.bytesToNumberBE = Ne.hexToBytes = Ne.hexToNumber = Ne.numberToHexUnpadded = Ne.bytesToHex = Ne.isBytes = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Hu = BigInt(0), Yi = BigInt(1), eE = BigInt(2);
function _n(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
Ne.isBytes = _n;
const tE = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function ma(e) {
  if (!_n(e))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += tE[e[r]];
  return t;
}
Ne.bytesToHex = ma;
function zu(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
Ne.numberToHexUnpadded = zu;
function Ea(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
Ne.hexToNumber = Ea;
const lr = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function dc(e) {
  if (e >= lr._0 && e <= lr._9)
    return e - lr._0;
  if (e >= lr._A && e <= lr._F)
    return e - (lr._A - 10);
  if (e >= lr._a && e <= lr._f)
    return e - (lr._a - 10);
}
function Qi(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, r = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const n = new Uint8Array(r);
  for (let o = 0, i = 0; o < r; o++, i += 2) {
    const s = dc(e.charCodeAt(i)), l = dc(e.charCodeAt(i + 1));
    if (s === void 0 || l === void 0) {
      const f = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + i);
    }
    n[o] = s * 16 + l;
  }
  return n;
}
Ne.hexToBytes = Qi;
function rE(e) {
  return Ea(ma(e));
}
Ne.bytesToNumberBE = rE;
function nE(e) {
  if (!_n(e))
    throw new Error("Uint8Array expected");
  return Ea(ma(Uint8Array.from(e).reverse()));
}
Ne.bytesToNumberLE = nE;
function Wu(e, t) {
  return Qi(e.toString(16).padStart(t * 2, "0"));
}
Ne.numberToBytesBE = Wu;
function iE(e, t) {
  return Wu(e, t).reverse();
}
Ne.numberToBytesLE = iE;
function oE(e) {
  return Qi(zu(e));
}
Ne.numberToVarBytesBE = oE;
function sE(e, t, r) {
  let n;
  if (typeof t == "string")
    try {
      n = Qi(t);
    } catch (i) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (_n(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const o = n.length;
  if (typeof r == "number" && o !== r)
    throw new Error(`${e} expected ${r} bytes, got ${o}`);
  return n;
}
Ne.ensureBytes = sE;
function Vu(...e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!_n(i))
      throw new Error("Uint8Array expected");
    t += i.length;
  }
  let r = new Uint8Array(t), n = 0;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    r.set(i, n), n += i.length;
  }
  return r;
}
Ne.concatBytes = Vu;
function aE(e, t) {
  if (e.length !== t.length)
    return !1;
  let r = 0;
  for (let n = 0; n < e.length; n++)
    r |= e[n] ^ t[n];
  return r === 0;
}
Ne.equalBytes = aE;
function fE(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
Ne.utf8ToBytes = fE;
function cE(e) {
  let t;
  for (t = 0; e > Hu; e >>= Yi, t += 1)
    ;
  return t;
}
Ne.bitLen = cE;
function lE(e, t) {
  return e >> BigInt(t) & Yi;
}
Ne.bitGet = lE;
const uE = (e, t, r) => e | (r ? Yi : Hu) << BigInt(t);
Ne.bitSet = uE;
const dE = (e) => (eE << BigInt(e - 1)) - Yi;
Ne.bitMask = dE;
const Zo = (e) => new Uint8Array(e), hc = (e) => Uint8Array.from(e);
function hE(e, t, r) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof r != "function")
    throw new Error("hmacFn must be a function");
  let n = Zo(e), o = Zo(e), i = 0;
  const s = () => {
    n.fill(1), o.fill(0), i = 0;
  }, l = (...h) => r(o, n, ...h), f = (h = Zo()) => {
    o = l(hc([0]), h), n = l(), h.length !== 0 && (o = l(hc([1]), h), n = l());
  }, c = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let h = 0;
    const b = [];
    for (; h < t; ) {
      n = l();
      const _ = n.slice();
      b.push(_), h += n.length;
    }
    return Vu(...b);
  };
  return (h, b) => {
    s(), f(h);
    let _;
    for (; !(_ = b(c())); )
      f();
    return s(), _;
  };
}
Ne.createHmacDrbg = hE;
const gE = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || _n(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function _E(e, t, r = {}) {
  const n = (o, i, s) => {
    const l = gE[i];
    if (typeof l != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const f = e[o];
    if (!(s && f === void 0) && !l(f, e))
      throw new Error(`Invalid param ${String(o)}=${f} (${typeof f}), expected ${i}`);
  };
  for (const [o, i] of Object.entries(t))
    n(o, i, !1);
  for (const [o, i] of Object.entries(r))
    n(o, i, !0);
  return e;
}
Ne.validateObject = _E;
Object.defineProperty($e, "__esModule", { value: !0 });
$e.mapHashToField = $e.getMinHashLength = $e.getFieldBytesLength = $e.hashToPrivateScalar = $e.FpSqrtEven = $e.FpSqrtOdd = $e.Field = $e.nLength = $e.FpIsSquare = $e.FpDiv = $e.FpInvertBatch = $e.FpPow = $e.validateField = $e.isNegativeLE = $e.FpSqrt = $e.tonelliShanks = $e.invert = $e.pow2 = $e.pow = $e.mod = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Nt = Ne, dt = BigInt(0), Ge = BigInt(1), vr = BigInt(2), bE = BigInt(3), Ls = BigInt(4), gc = BigInt(5), _c = BigInt(8);
BigInt(9);
BigInt(16);
function Lt(e, t) {
  const r = e % t;
  return r >= dt ? r : t + r;
}
$e.mod = Lt;
function qu(e, t, r) {
  if (r <= dt || t < dt)
    throw new Error("Expected power/modulo > 0");
  if (r === Ge)
    return dt;
  let n = Ge;
  for (; t > dt; )
    t & Ge && (n = n * e % r), e = e * e % r, t >>= Ge;
  return n;
}
$e.pow = qu;
function pE(e, t, r) {
  let n = e;
  for (; t-- > dt; )
    n *= n, n %= r;
  return n;
}
$e.pow2 = pE;
function mi(e, t) {
  if (e === dt || t <= dt)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let r = Lt(e, t), n = t, o = dt, i = Ge;
  for (; r !== dt; ) {
    const l = n / r, f = n % r, c = o - i * l;
    n = r, r = f, o = i, i = c;
  }
  if (n !== Ge)
    throw new Error("invert: does not exist");
  return Lt(o, t);
}
$e.invert = mi;
function Gu(e) {
  const t = (e - Ge) / vr;
  let r, n, o;
  for (r = e - Ge, n = 0; r % vr === dt; r /= vr, n++)
    ;
  for (o = vr; o < e && qu(o, t, e) !== e - Ge; o++)
    ;
  if (n === 1) {
    const s = (e + Ge) / Ls;
    return function(f, c) {
      const u = f.pow(c, s);
      if (!f.eql(f.sqr(u), c))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const i = (r + Ge) / vr;
  return function(l, f) {
    if (l.pow(f, t) === l.neg(l.ONE))
      throw new Error("Cannot find square root");
    let c = n, u = l.pow(l.mul(l.ONE, o), r), h = l.pow(f, i), b = l.pow(f, r);
    for (; !l.eql(b, l.ONE); ) {
      if (l.eql(b, l.ZERO))
        return l.ZERO;
      let _ = 1;
      for (let T = l.sqr(b); _ < c && !l.eql(T, l.ONE); _++)
        T = l.sqr(T);
      const R = l.pow(u, Ge << BigInt(c - _ - 1));
      u = l.sqr(R), h = l.mul(h, R), b = l.mul(b, u), c = _;
    }
    return h;
  };
}
$e.tonelliShanks = Gu;
function Zu(e) {
  if (e % Ls === bE) {
    const t = (e + Ge) / Ls;
    return function(n, o) {
      const i = n.pow(o, t);
      if (!n.eql(n.sqr(i), o))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (e % _c === gc) {
    const t = (e - gc) / _c;
    return function(n, o) {
      const i = n.mul(o, vr), s = n.pow(i, t), l = n.mul(o, s), f = n.mul(n.mul(l, vr), s), c = n.mul(l, n.sub(f, n.ONE));
      if (!n.eql(n.sqr(c), o))
        throw new Error("Cannot find square root");
      return c;
    };
  }
  return Gu(e);
}
$e.FpSqrt = Zu;
const yE = (e, t) => (Lt(e, t) & Ge) === Ge;
$e.isNegativeLE = yE;
const wE = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function mE(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = wE.reduce((n, o) => (n[o] = "function", n), t);
  return (0, Nt.validateObject)(e, r);
}
$e.validateField = mE;
function Ku(e, t, r) {
  if (r < dt)
    throw new Error("Expected power > 0");
  if (r === dt)
    return e.ONE;
  if (r === Ge)
    return t;
  let n = e.ONE, o = t;
  for (; r > dt; )
    r & Ge && (n = e.mul(n, o)), o = e.sqr(o), r >>= Ge;
  return n;
}
$e.FpPow = Ku;
function Ju(e, t) {
  const r = new Array(t.length), n = t.reduce((i, s, l) => e.is0(s) ? i : (r[l] = i, e.mul(i, s)), e.ONE), o = e.inv(n);
  return t.reduceRight((i, s, l) => e.is0(s) ? i : (r[l] = e.mul(i, r[l]), e.mul(i, s)), o), r;
}
$e.FpInvertBatch = Ju;
function EE(e, t, r) {
  return e.mul(t, typeof r == "bigint" ? mi(r, e.ORDER) : e.inv(r));
}
$e.FpDiv = EE;
function vE(e) {
  const t = (e.ORDER - Ge) / vr;
  return (r) => {
    const n = e.pow(r, t);
    return e.eql(n, e.ZERO) || e.eql(n, e.ONE);
  };
}
$e.FpIsSquare = vE;
function va(e, t) {
  const r = t !== void 0 ? t : e.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
$e.nLength = va;
function SE(e, t, r = !1, n = {}) {
  if (e <= dt)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: o, nByteLength: i } = va(e, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const s = Zu(e), l = Object.freeze({
    ORDER: e,
    BITS: o,
    BYTES: i,
    MASK: (0, Nt.bitMask)(o),
    ZERO: dt,
    ONE: Ge,
    create: (f) => Lt(f, e),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return dt <= f && f < e;
    },
    is0: (f) => f === dt,
    isOdd: (f) => (f & Ge) === Ge,
    neg: (f) => Lt(-f, e),
    eql: (f, c) => f === c,
    sqr: (f) => Lt(f * f, e),
    add: (f, c) => Lt(f + c, e),
    sub: (f, c) => Lt(f - c, e),
    mul: (f, c) => Lt(f * c, e),
    pow: (f, c) => Ku(l, f, c),
    div: (f, c) => Lt(f * mi(c, e), e),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, c) => f + c,
    subN: (f, c) => f - c,
    mulN: (f, c) => f * c,
    inv: (f) => mi(f, e),
    sqrt: n.sqrt || ((f) => s(l, f)),
    invertBatch: (f) => Ju(l, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, c, u) => u ? c : f,
    toBytes: (f) => r ? (0, Nt.numberToBytesLE)(f, i) : (0, Nt.numberToBytesBE)(f, i),
    fromBytes: (f) => {
      if (f.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${f.length}`);
      return r ? (0, Nt.bytesToNumberLE)(f) : (0, Nt.bytesToNumberBE)(f);
    }
  });
  return Object.freeze(l);
}
$e.Field = SE;
function RE(e, t) {
  if (!e.isOdd)
    throw new Error("Field doesn't have isOdd");
  const r = e.sqrt(t);
  return e.isOdd(r) ? r : e.neg(r);
}
$e.FpSqrtOdd = RE;
function AE(e, t) {
  if (!e.isOdd)
    throw new Error("Field doesn't have isOdd");
  const r = e.sqrt(t);
  return e.isOdd(r) ? e.neg(r) : r;
}
$e.FpSqrtEven = AE;
function IE(e, t, r = !1) {
  e = (0, Nt.ensureBytes)("privateHash", e);
  const n = e.length, o = va(t).nByteLength + 8;
  if (o < 24 || n < o || n > 1024)
    throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${n}`);
  const i = r ? (0, Nt.bytesToNumberLE)(e) : (0, Nt.bytesToNumberBE)(e);
  return Lt(i, t - Ge) + Ge;
}
$e.hashToPrivateScalar = IE;
function Sa(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
$e.getFieldBytesLength = Sa;
function Xu(e) {
  const t = Sa(e);
  return t + Math.ceil(t / 2);
}
$e.getMinHashLength = Xu;
function TE(e, t, r = !1) {
  const n = e.length, o = Sa(t), i = Xu(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const s = r ? (0, Nt.bytesToNumberBE)(e) : (0, Nt.bytesToNumberLE)(e), l = Lt(s, t - Ge) + Ge;
  return r ? (0, Nt.numberToBytesLE)(l, o) : (0, Nt.numberToBytesBE)(l, o);
}
$e.mapHashToField = TE;
var Ra = {}, sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.validateBasic = sn.wNAF = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bc = $e, OE = Ne, LE = BigInt(0), Ko = BigInt(1);
function CE(e, t) {
  const r = (o, i) => {
    const s = i.negate();
    return o ? s : i;
  }, n = (o) => {
    const i = Math.ceil(t / o) + 1, s = 2 ** (o - 1);
    return { windows: i, windowSize: s };
  };
  return {
    constTimeNegate: r,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let s = e.ZERO, l = o;
      for (; i > LE; )
        i & Ko && (s = s.add(l)), l = l.double(), i >>= Ko;
      return s;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(o, i) {
      const { windows: s, windowSize: l } = n(i), f = [];
      let c = o, u = c;
      for (let h = 0; h < s; h++) {
        u = c, f.push(u);
        for (let b = 1; b < l; b++)
          u = u.add(c), f.push(u);
        c = u.double();
      }
      return f;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(o, i, s) {
      const { windows: l, windowSize: f } = n(o);
      let c = e.ZERO, u = e.BASE;
      const h = BigInt(2 ** o - 1), b = 2 ** o, _ = BigInt(o);
      for (let R = 0; R < l; R++) {
        const T = R * f;
        let N = Number(s & h);
        s >>= _, N > f && (N -= b, s += Ko);
        const D = T, L = T + Math.abs(N) - 1, O = R % 2 !== 0, S = N < 0;
        N === 0 ? u = u.add(r(O, i[D])) : c = c.add(r(S, i[L]));
      }
      return { p: c, f: u };
    },
    wNAFCached(o, i, s, l) {
      const f = o._WINDOW_SIZE || 1;
      let c = i.get(o);
      return c || (c = this.precomputeWindow(o, f), f !== 1 && i.set(o, l(c))), this.wNAF(f, c, s);
    }
  };
}
sn.wNAF = CE;
function NE(e) {
  return (0, bc.validateField)(e.Fp), (0, OE.validateObject)(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...(0, bc.nLength)(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
sn.validateBasic = NE;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.mapToCurveSimpleSWU = e.SWUFpSqrtRatio = e.weierstrass = e.weierstrassPoints = e.DER = void 0;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const t = $e, r = Ne, n = Ne, o = sn;
  function i(L) {
    const O = (0, o.validateBasic)(L);
    r.validateObject(O, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo: S, Fp: H, a: X } = O;
    if (S) {
      if (!H.eql(X, H.ZERO))
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      if (typeof S != "object" || typeof S.beta != "bigint" || typeof S.splitScalar != "function")
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
    return Object.freeze({ ...O });
  }
  const { bytesToNumberBE: s, hexToBytes: l } = r;
  e.DER = {
    // asn.1 DER encoding utils
    Err: class extends Error {
      constructor(O = "") {
        super(O);
      }
    },
    _parseInt(L) {
      const { Err: O } = e.DER;
      if (L.length < 2 || L[0] !== 2)
        throw new O("Invalid signature integer tag");
      const S = L[1], H = L.subarray(2, S + 2);
      if (!S || H.length !== S)
        throw new O("Invalid signature integer: wrong length");
      if (H[0] & 128)
        throw new O("Invalid signature integer: negative");
      if (H[0] === 0 && !(H[1] & 128))
        throw new O("Invalid signature integer: unnecessary leading zero");
      return { d: s(H), l: L.subarray(S + 2) };
    },
    toSig(L) {
      const { Err: O } = e.DER, S = typeof L == "string" ? l(L) : L;
      if (!r.isBytes(S))
        throw new Error("ui8a expected");
      let H = S.length;
      if (H < 2 || S[0] != 48)
        throw new O("Invalid signature tag");
      if (S[1] !== H - 2)
        throw new O("Invalid signature: incorrect length");
      const { d: X, l: J } = e.DER._parseInt(S.subarray(2)), { d: j, l: W } = e.DER._parseInt(J);
      if (W.length)
        throw new O("Invalid signature: left bytes after parsing");
      return { r: X, s: j };
    },
    hexFromSig(L) {
      const O = (Q) => Number.parseInt(Q[0], 16) & 8 ? "00" + Q : Q, S = (Q) => {
        const w = Q.toString(16);
        return w.length & 1 ? `0${w}` : w;
      }, H = O(S(L.s)), X = O(S(L.r)), J = H.length / 2, j = X.length / 2, W = S(J), ie = S(j);
      return `30${S(j + J + 4)}02${ie}${X}02${W}${H}`;
    }
  };
  const f = BigInt(0), c = BigInt(1), u = BigInt(2), h = BigInt(3), b = BigInt(4);
  function _(L) {
    const O = i(L), { Fp: S } = O, H = O.toBytes || ((M, P, F) => {
      const C = P.toAffine();
      return r.concatBytes(Uint8Array.from([4]), S.toBytes(C.x), S.toBytes(C.y));
    }), X = O.fromBytes || ((M) => {
      const P = M.subarray(1), F = S.fromBytes(P.subarray(0, S.BYTES)), C = S.fromBytes(P.subarray(S.BYTES, 2 * S.BYTES));
      return { x: F, y: C };
    });
    function J(M) {
      const { a: P, b: F } = O, C = S.sqr(M), U = S.mul(C, M);
      return S.add(S.add(U, S.mul(M, P)), F);
    }
    if (!S.eql(S.sqr(O.Gy), J(O.Gx)))
      throw new Error("bad generator point: equation left != right");
    function j(M) {
      return typeof M == "bigint" && f < M && M < O.n;
    }
    function W(M) {
      if (!j(M))
        throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function ie(M) {
      const { allowedPrivateKeyLengths: P, nByteLength: F, wrapPrivateKey: C, n: U } = O;
      if (P && typeof M != "bigint") {
        if (r.isBytes(M) && (M = r.bytesToHex(M)), typeof M != "string" || !P.includes(M.length))
          throw new Error("Invalid key");
        M = M.padStart(F * 2, "0");
      }
      let q;
      try {
        q = typeof M == "bigint" ? M : r.bytesToNumberBE((0, n.ensureBytes)("private key", M, F));
      } catch {
        throw new Error(`private key must be ${F} bytes, hex or bigint, not ${typeof M}`);
      }
      return C && (q = t.mod(q, U)), W(q), q;
    }
    const Q = /* @__PURE__ */ new Map();
    function w(M) {
      if (!(M instanceof d))
        throw new Error("ProjectivePoint expected");
    }
    class d {
      constructor(P, F, C) {
        if (this.px = P, this.py = F, this.pz = C, P == null || !S.isValid(P))
          throw new Error("x required");
        if (F == null || !S.isValid(F))
          throw new Error("y required");
        if (C == null || !S.isValid(C))
          throw new Error("z required");
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(P) {
        const { x: F, y: C } = P || {};
        if (!P || !S.isValid(F) || !S.isValid(C))
          throw new Error("invalid affine point");
        if (P instanceof d)
          throw new Error("projective point not allowed");
        const U = (q) => S.eql(q, S.ZERO);
        return U(F) && U(C) ? d.ZERO : new d(F, C, S.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(P) {
        const F = S.invertBatch(P.map((C) => C.pz));
        return P.map((C, U) => C.toAffine(F[U])).map(d.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(P) {
        const F = d.fromAffine(X((0, n.ensureBytes)("pointHex", P)));
        return F.assertValidity(), F;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(P) {
        return d.BASE.multiply(ie(P));
      }
      // "Private method", don't use it directly
      _setWindowSize(P) {
        this._WINDOW_SIZE = P, Q.delete(this);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        if (this.is0()) {
          if (O.allowInfinityPoint && !S.is0(this.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x: P, y: F } = this.toAffine();
        if (!S.isValid(P) || !S.isValid(F))
          throw new Error("bad point: x or y not FE");
        const C = S.sqr(F), U = J(P);
        if (!S.eql(C, U))
          throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y: P } = this.toAffine();
        if (S.isOdd)
          return !S.isOdd(P);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(P) {
        w(P);
        const { px: F, py: C, pz: U } = this, { px: q, py: oe, pz: V } = P, ne = S.eql(S.mul(F, V), S.mul(q, U)), ce = S.eql(S.mul(C, V), S.mul(oe, U));
        return ne && ce;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new d(this.px, S.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a: P, b: F } = O, C = S.mul(F, h), { px: U, py: q, pz: oe } = this;
        let V = S.ZERO, ne = S.ZERO, ce = S.ZERO, ue = S.mul(U, U), Ee = S.mul(q, q), ge = S.mul(oe, oe), ye = S.mul(U, q);
        return ye = S.add(ye, ye), ce = S.mul(U, oe), ce = S.add(ce, ce), V = S.mul(P, ce), ne = S.mul(C, ge), ne = S.add(V, ne), V = S.sub(Ee, ne), ne = S.add(Ee, ne), ne = S.mul(V, ne), V = S.mul(ye, V), ce = S.mul(C, ce), ge = S.mul(P, ge), ye = S.sub(ue, ge), ye = S.mul(P, ye), ye = S.add(ye, ce), ce = S.add(ue, ue), ue = S.add(ce, ue), ue = S.add(ue, ge), ue = S.mul(ue, ye), ne = S.add(ne, ue), ge = S.mul(q, oe), ge = S.add(ge, ge), ue = S.mul(ge, ye), V = S.sub(V, ue), ce = S.mul(ge, Ee), ce = S.add(ce, ce), ce = S.add(ce, ce), new d(V, ne, ce);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(P) {
        w(P);
        const { px: F, py: C, pz: U } = this, { px: q, py: oe, pz: V } = P;
        let ne = S.ZERO, ce = S.ZERO, ue = S.ZERO;
        const Ee = O.a, ge = S.mul(O.b, h);
        let ye = S.mul(F, q), Pe = S.mul(C, oe), Be = S.mul(U, V), Re = S.add(F, C), I = S.add(q, oe);
        Re = S.mul(Re, I), I = S.add(ye, Pe), Re = S.sub(Re, I), I = S.add(F, U);
        let B = S.add(q, V);
        return I = S.mul(I, B), B = S.add(ye, Be), I = S.sub(I, B), B = S.add(C, U), ne = S.add(oe, V), B = S.mul(B, ne), ne = S.add(Pe, Be), B = S.sub(B, ne), ue = S.mul(Ee, I), ne = S.mul(ge, Be), ue = S.add(ne, ue), ne = S.sub(Pe, ue), ue = S.add(Pe, ue), ce = S.mul(ne, ue), Pe = S.add(ye, ye), Pe = S.add(Pe, ye), Be = S.mul(Ee, Be), I = S.mul(ge, I), Pe = S.add(Pe, Be), Be = S.sub(ye, Be), Be = S.mul(Ee, Be), I = S.add(I, Be), ye = S.mul(Pe, I), ce = S.add(ce, ye), ye = S.mul(B, I), ne = S.mul(Re, ne), ne = S.sub(ne, ye), ye = S.mul(Re, Pe), ue = S.mul(B, ue), ue = S.add(ue, ye), new d(ne, ce, ue);
      }
      subtract(P) {
        return this.add(P.negate());
      }
      is0() {
        return this.equals(d.ZERO);
      }
      wNAF(P) {
        return $.wNAFCached(this, Q, P, (F) => {
          const C = S.invertBatch(F.map((U) => U.pz));
          return F.map((U, q) => U.toAffine(C[q])).map(d.fromAffine);
        });
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(P) {
        const F = d.ZERO;
        if (P === f)
          return F;
        if (W(P), P === c)
          return this;
        const { endo: C } = O;
        if (!C)
          return $.unsafeLadder(this, P);
        let { k1neg: U, k1: q, k2neg: oe, k2: V } = C.splitScalar(P), ne = F, ce = F, ue = this;
        for (; q > f || V > f; )
          q & c && (ne = ne.add(ue)), V & c && (ce = ce.add(ue)), ue = ue.double(), q >>= c, V >>= c;
        return U && (ne = ne.negate()), oe && (ce = ce.negate()), ce = new d(S.mul(ce.px, C.beta), ce.py, ce.pz), ne.add(ce);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(P) {
        W(P);
        let F = P, C, U;
        const { endo: q } = O;
        if (q) {
          const { k1neg: oe, k1: V, k2neg: ne, k2: ce } = q.splitScalar(F);
          let { p: ue, f: Ee } = this.wNAF(V), { p: ge, f: ye } = this.wNAF(ce);
          ue = $.constTimeNegate(oe, ue), ge = $.constTimeNegate(ne, ge), ge = new d(S.mul(ge.px, q.beta), ge.py, ge.pz), C = ue.add(ge), U = Ee.add(ye);
        } else {
          const { p: oe, f: V } = this.wNAF(F);
          C = oe, U = V;
        }
        return d.normalizeZ([C, U])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(P, F, C) {
        const U = d.BASE, q = (V, ne) => ne === f || ne === c || !V.equals(U) ? V.multiplyUnsafe(ne) : V.multiply(ne), oe = q(this, F).add(q(P, C));
        return oe.is0() ? void 0 : oe;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(P) {
        const { px: F, py: C, pz: U } = this, q = this.is0();
        P == null && (P = q ? S.ONE : S.inv(U));
        const oe = S.mul(F, P), V = S.mul(C, P), ne = S.mul(U, P);
        if (q)
          return { x: S.ZERO, y: S.ZERO };
        if (!S.eql(ne, S.ONE))
          throw new Error("invZ was invalid");
        return { x: oe, y: V };
      }
      isTorsionFree() {
        const { h: P, isTorsionFree: F } = O;
        if (P === c)
          return !0;
        if (F)
          return F(d, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: P, clearCofactor: F } = O;
        return P === c ? this : F ? F(d, this) : this.multiplyUnsafe(O.h);
      }
      toRawBytes(P = !0) {
        return this.assertValidity(), H(d, this, P);
      }
      toHex(P = !0) {
        return r.bytesToHex(this.toRawBytes(P));
      }
    }
    d.BASE = new d(O.Gx, O.Gy, S.ONE), d.ZERO = new d(S.ZERO, S.ONE, S.ZERO);
    const m = O.nBitLength, $ = (0, o.wNAF)(d, O.endo ? Math.ceil(m / 2) : m);
    return {
      CURVE: O,
      ProjectivePoint: d,
      normPrivateKeyToScalar: ie,
      weierstrassEquation: J,
      isWithinCurveOrder: j
    };
  }
  e.weierstrassPoints = _;
  function R(L) {
    const O = (0, o.validateBasic)(L);
    return r.validateObject(O, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    }), Object.freeze({ lowS: !0, ...O });
  }
  function T(L) {
    const O = R(L), { Fp: S, n: H } = O, X = S.BYTES + 1, J = 2 * S.BYTES + 1;
    function j(I) {
      return f < I && I < S.ORDER;
    }
    function W(I) {
      return t.mod(I, H);
    }
    function ie(I) {
      return t.invert(I, H);
    }
    const { ProjectivePoint: Q, normPrivateKeyToScalar: w, weierstrassEquation: d, isWithinCurveOrder: m } = _({
      ...O,
      toBytes(I, B, Z) {
        const le = B.toAffine(), se = S.toBytes(le.x), _e = r.concatBytes;
        return Z ? _e(Uint8Array.from([B.hasEvenY() ? 2 : 3]), se) : _e(Uint8Array.from([4]), se, S.toBytes(le.y));
      },
      fromBytes(I) {
        const B = I.length, Z = I[0], le = I.subarray(1);
        if (B === X && (Z === 2 || Z === 3)) {
          const se = r.bytesToNumberBE(le);
          if (!j(se))
            throw new Error("Point is not on curve");
          const _e = d(se);
          let Ie = S.sqrt(_e);
          const Te = (Ie & c) === c;
          return (Z & 1) === 1 !== Te && (Ie = S.neg(Ie)), { x: se, y: Ie };
        } else if (B === J && Z === 4) {
          const se = S.fromBytes(le.subarray(0, S.BYTES)), _e = S.fromBytes(le.subarray(S.BYTES, 2 * S.BYTES));
          return { x: se, y: _e };
        } else
          throw new Error(`Point of length ${B} was invalid. Expected ${X} compressed bytes or ${J} uncompressed bytes`);
      }
    }), $ = (I) => r.bytesToHex(r.numberToBytesBE(I, O.nByteLength));
    function M(I) {
      const B = H >> c;
      return I > B;
    }
    function P(I) {
      return M(I) ? W(-I) : I;
    }
    const F = (I, B, Z) => r.bytesToNumberBE(I.slice(B, Z));
    class C {
      constructor(B, Z, le) {
        this.r = B, this.s = Z, this.recovery = le, this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(B) {
        const Z = O.nByteLength;
        return B = (0, n.ensureBytes)("compactSignature", B, Z * 2), new C(F(B, 0, Z), F(B, Z, 2 * Z));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(B) {
        const { r: Z, s: le } = e.DER.toSig((0, n.ensureBytes)("DER", B));
        return new C(Z, le);
      }
      assertValidity() {
        if (!m(this.r))
          throw new Error("r must be 0 < r < CURVE.n");
        if (!m(this.s))
          throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(B) {
        return new C(this.r, this.s, B);
      }
      recoverPublicKey(B) {
        const { r: Z, s: le, recovery: se } = this, _e = ce((0, n.ensureBytes)("msgHash", B));
        if (se == null || ![0, 1, 2, 3].includes(se))
          throw new Error("recovery id invalid");
        const Ie = se === 2 || se === 3 ? Z + O.n : Z;
        if (Ie >= S.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const Te = se & 1 ? "03" : "02", ke = Q.fromHex(Te + $(Ie)), me = ie(Ie), je = W(-_e * me), nt = W(le * me), Ze = Q.BASE.multiplyAndAddUnsafe(ke, je, nt);
        if (!Ze)
          throw new Error("point at infinify");
        return Ze.assertValidity(), Ze;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return M(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new C(this.r, W(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return r.hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return e.DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return r.hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return $(this.r) + $(this.s);
      }
    }
    const U = {
      isValidPrivateKey(I) {
        try {
          return w(I), !0;
        } catch {
          return !1;
        }
      },
      normPrivateKeyToScalar: w,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const I = t.getMinHashLength(O.n);
        return t.mapHashToField(O.randomBytes(I), O.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(I = 8, B = Q.BASE) {
        return B._setWindowSize(I), B.multiply(BigInt(3)), B;
      }
    };
    function q(I, B = !0) {
      return Q.fromPrivateKey(I).toRawBytes(B);
    }
    function oe(I) {
      const B = r.isBytes(I), Z = typeof I == "string", le = (B || Z) && I.length;
      return B ? le === X || le === J : Z ? le === 2 * X || le === 2 * J : I instanceof Q;
    }
    function V(I, B, Z = !0) {
      if (oe(I))
        throw new Error("first arg must be private key");
      if (!oe(B))
        throw new Error("second arg must be public key");
      return Q.fromHex(B).multiply(w(I)).toRawBytes(Z);
    }
    const ne = O.bits2int || function(I) {
      const B = r.bytesToNumberBE(I), Z = I.length * 8 - O.nBitLength;
      return Z > 0 ? B >> BigInt(Z) : B;
    }, ce = O.bits2int_modN || function(I) {
      return W(ne(I));
    }, ue = r.bitMask(O.nBitLength);
    function Ee(I) {
      if (typeof I != "bigint")
        throw new Error("bigint expected");
      if (!(f <= I && I < ue))
        throw new Error(`bigint expected < 2^${O.nBitLength}`);
      return r.numberToBytesBE(I, O.nByteLength);
    }
    function ge(I, B, Z = ye) {
      if (["recovered", "canonical"].some((it) => it in Z))
        throw new Error("sign() legacy options not supported");
      const { hash: le, randomBytes: se } = O;
      let { lowS: _e, prehash: Ie, extraEntropy: Te } = Z;
      _e == null && (_e = !0), I = (0, n.ensureBytes)("msgHash", I), Ie && (I = (0, n.ensureBytes)("prehashed msgHash", le(I)));
      const ke = ce(I), me = w(B), je = [Ee(me), Ee(ke)];
      if (Te != null) {
        const it = Te === !0 ? se(S.BYTES) : Te;
        je.push((0, n.ensureBytes)("extraEntropy", it));
      }
      const nt = r.concatBytes(...je), Ze = ke;
      function Rt(it) {
        const Ue = ne(it);
        if (!m(Ue))
          return;
        const ot = ie(Ue), ct = Q.BASE.multiply(Ue).toAffine(), E = W(ct.x);
        if (E === f)
          return;
        const ae = W(ot * W(Ze + E * me));
        if (ae === f)
          return;
        let de = (ct.x === E ? 0 : 2) | Number(ct.y & c), we = ae;
        return _e && M(ae) && (we = P(ae), de ^= 1), new C(E, we, de);
      }
      return { seed: nt, k2sig: Rt };
    }
    const ye = { lowS: O.lowS, prehash: !1 }, Pe = { lowS: O.lowS, prehash: !1 };
    function Be(I, B, Z = ye) {
      const { seed: le, k2sig: se } = ge(I, B, Z), _e = O;
      return r.createHmacDrbg(_e.hash.outputLen, _e.nByteLength, _e.hmac)(le, se);
    }
    Q.BASE._setWindowSize(8);
    function Re(I, B, Z, le = Pe) {
      var ct;
      const se = I;
      if (B = (0, n.ensureBytes)("msgHash", B), Z = (0, n.ensureBytes)("publicKey", Z), "strict" in le)
        throw new Error("options.strict was renamed to lowS");
      const { lowS: _e, prehash: Ie } = le;
      let Te, ke;
      try {
        if (typeof se == "string" || r.isBytes(se))
          try {
            Te = C.fromDER(se);
          } catch (E) {
            if (!(E instanceof e.DER.Err))
              throw E;
            Te = C.fromCompact(se);
          }
        else if (typeof se == "object" && typeof se.r == "bigint" && typeof se.s == "bigint") {
          const { r: E, s: ae } = se;
          Te = new C(E, ae);
        } else
          throw new Error("PARSE");
        ke = Q.fromHex(Z);
      } catch (E) {
        if (E.message === "PARSE")
          throw new Error("signature must be Signature instance, Uint8Array or hex string");
        return !1;
      }
      if (_e && Te.hasHighS())
        return !1;
      Ie && (B = O.hash(B));
      const { r: me, s: je } = Te, nt = ce(B), Ze = ie(je), Rt = W(nt * Ze), it = W(me * Ze), Ue = (ct = Q.BASE.multiplyAndAddUnsafe(ke, Rt, it)) == null ? void 0 : ct.toAffine();
      return Ue ? W(Ue.x) === me : !1;
    }
    return {
      CURVE: O,
      getPublicKey: q,
      getSharedSecret: V,
      sign: Be,
      verify: Re,
      ProjectivePoint: Q,
      Signature: C,
      utils: U
    };
  }
  e.weierstrass = T;
  function N(L, O) {
    const S = L.ORDER;
    let H = f;
    for (let M = S - c; M % u === f; M /= u)
      H += c;
    const X = H, J = u << X - c - c, j = J * u, W = (S - c) / j, ie = (W - c) / u, Q = j - c, w = J, d = L.pow(O, W), m = L.pow(O, (W + c) / u);
    let $ = (M, P) => {
      let F = d, C = L.pow(P, Q), U = L.sqr(C);
      U = L.mul(U, P);
      let q = L.mul(M, U);
      q = L.pow(q, ie), q = L.mul(q, C), C = L.mul(q, P), U = L.mul(q, M);
      let oe = L.mul(U, C);
      q = L.pow(oe, w);
      let V = L.eql(q, L.ONE);
      C = L.mul(U, m), q = L.mul(oe, F), U = L.cmov(C, U, V), oe = L.cmov(q, oe, V);
      for (let ne = X; ne > c; ne--) {
        let ce = ne - u;
        ce = u << ce - c;
        let ue = L.pow(oe, ce);
        const Ee = L.eql(ue, L.ONE);
        C = L.mul(U, F), F = L.mul(F, F), ue = L.mul(oe, F), U = L.cmov(C, U, Ee), oe = L.cmov(ue, oe, Ee);
      }
      return { isValid: V, value: U };
    };
    if (L.ORDER % b === h) {
      const M = (L.ORDER - h) / b, P = L.sqrt(L.neg(O));
      $ = (F, C) => {
        let U = L.sqr(C);
        const q = L.mul(F, C);
        U = L.mul(U, q);
        let oe = L.pow(U, M);
        oe = L.mul(oe, q);
        const V = L.mul(oe, P), ne = L.mul(L.sqr(oe), C), ce = L.eql(ne, F);
        let ue = L.cmov(V, oe, ce);
        return { isValid: ce, value: ue };
      };
    }
    return $;
  }
  e.SWUFpSqrtRatio = N;
  function D(L, O) {
    if (t.validateField(L), !L.isValid(O.A) || !L.isValid(O.B) || !L.isValid(O.Z))
      throw new Error("mapToCurveSimpleSWU: invalid opts");
    const S = N(L, O.Z);
    if (!L.isOdd)
      throw new Error("Fp.isOdd is not implemented!");
    return (H) => {
      let X, J, j, W, ie, Q, w, d;
      X = L.sqr(H), X = L.mul(X, O.Z), J = L.sqr(X), J = L.add(J, X), j = L.add(J, L.ONE), j = L.mul(j, O.B), W = L.cmov(O.Z, L.neg(J), !L.eql(J, L.ZERO)), W = L.mul(W, O.A), J = L.sqr(j), Q = L.sqr(W), ie = L.mul(Q, O.A), J = L.add(J, ie), J = L.mul(J, j), Q = L.mul(Q, W), ie = L.mul(Q, O.B), J = L.add(J, ie), w = L.mul(X, j);
      const { isValid: m, value: $ } = S(J, Q);
      d = L.mul(X, H), d = L.mul(d, $), w = L.cmov(w, j, m), d = L.cmov(d, $, m);
      const M = L.isOdd(H) === L.isOdd(d);
      return d = L.cmov(L.neg(d), d, M), w = L.div(w, W), { x: w, y: d };
    };
  }
  e.mapToCurveSimpleSWU = D;
})(Ra);
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.createHasher = xt.isogenyMap = xt.hash_to_field = xt.expand_message_xof = xt.expand_message_xmd = void 0;
const PE = $e, Ct = Ne;
function BE(e) {
  if ((0, Ct.isBytes)(e))
    return e;
  if (typeof e == "string")
    return (0, Ct.utf8ToBytes)(e);
  throw new Error("DST must be Uint8Array or string");
}
const $E = Ct.bytesToNumberBE;
function Er(e, t) {
  if (e < 0 || e >= 1 << 8 * t)
    throw new Error(`bad I2OSP call: value=${e} length=${t}`);
  const r = Array.from({ length: t }).fill(0);
  for (let n = t - 1; n >= 0; n--)
    r[n] = e & 255, e >>>= 8;
  return new Uint8Array(r);
}
function kE(e, t) {
  const r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n] ^ t[n];
  return r;
}
function Mn(e) {
  if (!(0, Ct.isBytes)(e))
    throw new Error("Uint8Array expected");
}
function Aa(e) {
  if (!Number.isSafeInteger(e))
    throw new Error("number expected");
}
function Yu(e, t, r, n) {
  Mn(e), Mn(t), Aa(r), t.length > 255 && (t = n((0, Ct.concatBytes)((0, Ct.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)));
  const { outputLen: o, blockLen: i } = n, s = Math.ceil(r / o);
  if (s > 255)
    throw new Error("Invalid xmd length");
  const l = (0, Ct.concatBytes)(t, Er(t.length, 1)), f = Er(0, i), c = Er(r, 2), u = new Array(s), h = n((0, Ct.concatBytes)(f, e, c, Er(0, 1), l));
  u[0] = n((0, Ct.concatBytes)(h, Er(1, 1), l));
  for (let _ = 1; _ <= s; _++) {
    const R = [kE(h, u[_ - 1]), Er(_ + 1, 1), l];
    u[_] = n((0, Ct.concatBytes)(...R));
  }
  return (0, Ct.concatBytes)(...u).slice(0, r);
}
xt.expand_message_xmd = Yu;
function Qu(e, t, r, n, o) {
  if (Mn(e), Mn(t), Aa(r), t.length > 255) {
    const i = Math.ceil(2 * n / 8);
    t = o.create({ dkLen: i }).update((0, Ct.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest();
  }
  if (r > 65535 || t.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return o.create({ dkLen: r }).update(e).update(Er(r, 2)).update(t).update(Er(t.length, 1)).digest();
}
xt.expand_message_xof = Qu;
function Cs(e, t, r) {
  (0, Ct.validateObject)(r, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: n, k: o, m: i, hash: s, expand: l, DST: f } = r;
  Mn(e), Aa(t);
  const c = BE(f), u = n.toString(2).length, h = Math.ceil((u + o) / 8), b = t * i * h;
  let _;
  if (l === "xmd")
    _ = Yu(e, c, b, s);
  else if (l === "xof")
    _ = Qu(e, c, b, o, s);
  else if (l === "_internal_pass")
    _ = e;
  else
    throw new Error('expand must be "xmd" or "xof"');
  const R = new Array(t);
  for (let T = 0; T < t; T++) {
    const N = new Array(i);
    for (let D = 0; D < i; D++) {
      const L = h * (D + T * i), O = _.subarray(L, L + h);
      N[D] = (0, PE.mod)($E(O), n);
    }
    R[T] = N;
  }
  return R;
}
xt.hash_to_field = Cs;
function DE(e, t) {
  const r = t.map((n) => Array.from(n).reverse());
  return (n, o) => {
    const [i, s, l, f] = r.map((c) => c.reduce((u, h) => e.add(e.mul(u, n), h)));
    return n = e.div(i, s), o = e.mul(o, e.div(l, f)), { x: n, y: o };
  };
}
xt.isogenyMap = DE;
function xE(e, t, r) {
  if (typeof t != "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(n, o) {
      const i = Cs(n, 2, { ...r, DST: r.DST, ...o }), s = e.fromAffine(t(i[0])), l = e.fromAffine(t(i[1])), f = s.add(l).clearCofactor();
      return f.assertValidity(), f;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(n, o) {
      const i = Cs(n, 1, { ...r, DST: r.encodeDST, ...o }), s = e.fromAffine(t(i[0])).clearCofactor();
      return s.assertValidity(), s;
    }
  };
}
xt.createHasher = xE;
var an = {}, ed = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hmac = e.HMAC = void 0;
  const t = ut, r = _r;
  class n extends r.Hash {
    constructor(s, l) {
      super(), this.finished = !1, this.destroyed = !1, (0, t.hash)(s);
      const f = (0, r.toBytes)(l);
      if (this.iHash = s.create(), typeof this.iHash.update != "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const c = this.blockLen, u = new Uint8Array(c);
      u.set(f.length > c ? s.create().update(f).digest() : f);
      for (let h = 0; h < u.length; h++)
        u[h] ^= 54;
      this.iHash.update(u), this.oHash = s.create();
      for (let h = 0; h < u.length; h++)
        u[h] ^= 106;
      this.oHash.update(u), u.fill(0);
    }
    update(s) {
      return (0, t.exists)(this), this.iHash.update(s), this;
    }
    digestInto(s) {
      (0, t.exists)(this), (0, t.bytes)(s, this.outputLen), this.finished = !0, this.iHash.digestInto(s), this.oHash.update(s), this.oHash.digestInto(s), this.destroy();
    }
    digest() {
      const s = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(s), s;
    }
    _cloneInto(s) {
      s || (s = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: l, iHash: f, finished: c, destroyed: u, blockLen: h, outputLen: b } = this;
      return s = s, s.finished = c, s.destroyed = u, s.blockLen = h, s.outputLen = b, s.oHash = l._cloneInto(s.oHash), s.iHash = f._cloneInto(s.iHash), s;
    }
    destroy() {
      this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  e.HMAC = n;
  const o = (i, s, l) => new n(i, s).update(l).digest();
  e.hmac = o, e.hmac.create = (i, s) => new n(i, s);
})(ed);
Object.defineProperty(an, "__esModule", { value: !0 });
an.createCurve = an.getHash = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ME = ed, pc = _r, jE = Ra;
function td(e) {
  return {
    hash: e,
    hmac: (t, ...r) => (0, ME.hmac)(e, t, (0, pc.concatBytes)(...r)),
    randomBytes: pc.randomBytes
  };
}
an.getHash = td;
function FE(e, t) {
  const r = (n) => (0, jE.weierstrass)({ ...e, ...td(n) });
  return Object.freeze({ ...r(t), create: r });
}
an.createCurve = FE;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const t = on, r = _r, n = $e, o = Ra, i = Ne, s = xt, l = an, f = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), c = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), u = BigInt(1), h = BigInt(2), b = (C, U) => (C + U / h) / U;
  function _(C) {
    const U = f, q = BigInt(3), oe = BigInt(6), V = BigInt(11), ne = BigInt(22), ce = BigInt(23), ue = BigInt(44), Ee = BigInt(88), ge = C * C * C % U, ye = ge * ge * C % U, Pe = (0, n.pow2)(ye, q, U) * ye % U, Be = (0, n.pow2)(Pe, q, U) * ye % U, Re = (0, n.pow2)(Be, h, U) * ge % U, I = (0, n.pow2)(Re, V, U) * Re % U, B = (0, n.pow2)(I, ne, U) * I % U, Z = (0, n.pow2)(B, ue, U) * B % U, le = (0, n.pow2)(Z, Ee, U) * Z % U, se = (0, n.pow2)(le, ue, U) * B % U, _e = (0, n.pow2)(se, q, U) * ye % U, Ie = (0, n.pow2)(_e, ce, U) * I % U, Te = (0, n.pow2)(Ie, oe, U) * ge % U, ke = (0, n.pow2)(Te, h, U);
    if (!R.eql(R.sqr(ke), C))
      throw new Error("Cannot find square root");
    return ke;
  }
  const R = (0, n.Field)(f, void 0, void 0, { sqrt: _ });
  e.secp256k1 = (0, l.createCurve)({
    a: BigInt(0),
    // equation params: a, b
    b: BigInt(7),
    // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp: R,
    // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: c,
    // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    // Cofactor
    lowS: !0,
    // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (C) => {
        const U = c, q = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), oe = -u * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), V = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), ne = q, ce = BigInt("0x100000000000000000000000000000000"), ue = b(ne * C, U), Ee = b(-oe * C, U);
        let ge = (0, n.mod)(C - ue * q - Ee * V, U), ye = (0, n.mod)(-ue * oe - Ee * ne, U);
        const Pe = ge > ce, Be = ye > ce;
        if (Pe && (ge = U - ge), Be && (ye = U - ye), ge > ce || ye > ce)
          throw new Error("splitScalar: Endomorphism failed, k=" + C);
        return { k1neg: Pe, k1: ge, k2neg: Be, k2: ye };
      }
    }
  }, t.sha256);
  const T = BigInt(0), N = (C) => typeof C == "bigint" && T < C && C < f, D = (C) => typeof C == "bigint" && T < C && C < c, L = {};
  function O(C, ...U) {
    let q = L[C];
    if (q === void 0) {
      const oe = (0, t.sha256)(Uint8Array.from(C, (V) => V.charCodeAt(0)));
      q = (0, i.concatBytes)(oe, oe), L[C] = q;
    }
    return (0, t.sha256)((0, i.concatBytes)(q, ...U));
  }
  const S = (C) => C.toRawBytes(!0).slice(1), H = (C) => (0, i.numberToBytesBE)(C, 32), X = (C) => (0, n.mod)(C, f), J = (C) => (0, n.mod)(C, c), j = e.secp256k1.ProjectivePoint, W = (C, U, q) => j.BASE.multiplyAndAddUnsafe(C, U, q);
  function ie(C) {
    let U = e.secp256k1.utils.normPrivateKeyToScalar(C), q = j.fromPrivateKey(U);
    return { scalar: q.hasEvenY() ? U : J(-U), bytes: S(q) };
  }
  function Q(C) {
    if (!N(C))
      throw new Error("bad x: need 0 < x < p");
    const U = X(C * C), q = X(U * C + BigInt(7));
    let oe = _(q);
    oe % h !== T && (oe = X(-oe));
    const V = new j(C, oe, u);
    return V.assertValidity(), V;
  }
  function w(...C) {
    return J((0, i.bytesToNumberBE)(O("BIP0340/challenge", ...C)));
  }
  function d(C) {
    return ie(C).bytes;
  }
  function m(C, U, q = (0, r.randomBytes)(32)) {
    const oe = (0, i.ensureBytes)("message", C), { bytes: V, scalar: ne } = ie(U), ce = (0, i.ensureBytes)("auxRand", q, 32), ue = H(ne ^ (0, i.bytesToNumberBE)(O("BIP0340/aux", ce))), Ee = O("BIP0340/nonce", ue, V, oe), ge = J((0, i.bytesToNumberBE)(Ee));
    if (ge === T)
      throw new Error("sign failed: k is zero");
    const { bytes: ye, scalar: Pe } = ie(ge), Be = w(ye, V, oe), Re = new Uint8Array(64);
    if (Re.set(ye, 0), Re.set(H(J(Pe + Be * ne)), 32), !$(Re, oe, V))
      throw new Error("sign: Invalid signature produced");
    return Re;
  }
  function $(C, U, q) {
    const oe = (0, i.ensureBytes)("signature", C, 64), V = (0, i.ensureBytes)("message", U), ne = (0, i.ensureBytes)("publicKey", q, 32);
    try {
      const ce = Q((0, i.bytesToNumberBE)(ne)), ue = (0, i.bytesToNumberBE)(oe.subarray(0, 32));
      if (!N(ue))
        return !1;
      const Ee = (0, i.bytesToNumberBE)(oe.subarray(32, 64));
      if (!D(Ee))
        return !1;
      const ge = w(H(ue), S(ce), V), ye = W(ce, Ee, J(-ge));
      return !(!ye || !ye.hasEvenY() || ye.toAffine().x !== ue);
    } catch {
      return !1;
    }
  }
  e.schnorr = {
    getPublicKey: d,
    sign: m,
    verify: $,
    utils: {
      randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
      lift_x: Q,
      pointToBytes: S,
      numberToBytesBE: i.numberToBytesBE,
      bytesToNumberBE: i.bytesToNumberBE,
      taggedHash: O,
      mod: n.mod
    }
  };
  const M = (0, s.isogenyMap)(R, [
    // xNum
    [
      "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
      "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
      "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
      "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
    ],
    // xDen
    [
      "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
      "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
      // LAST 1
    ],
    // yNum
    [
      "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
      "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
      "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
      "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
    ],
    // yDen
    [
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
      "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
      "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
      // LAST 1
    ]
  ].map((C) => C.map((U) => BigInt(U)))), P = (0, o.mapToCurveSimpleSWU)(R, {
    A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
    B: BigInt("1771"),
    Z: R.create(BigInt("-11"))
  }), F = (0, s.createHasher)(e.secp256k1.ProjectivePoint, (C) => {
    const { x: U, y: q } = P(R.create(C[0]));
    return M(U, q);
  }, {
    DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
    encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
    p: R.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: t.sha256
  });
  e.hashToCurve = F.hashToCurve, e.encodeToCurve = F.encodeToCurve;
})(Du);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.secp256k1 = void 0;
  var t = Du;
  Object.defineProperty(e, "secp256k1", { enumerable: !0, get: function() {
    return t.secp256k1;
  } });
})(Ki);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.MAX_WITHDRAWALS_PER_PAYLOAD = e.RLP_EMPTY_STRING = e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.SECP256K1_ORDER_DIV_2 = e.SECP256K1_ORDER = e.MAX_INTEGER_BIGINT = e.MAX_INTEGER = e.MAX_UINT64 = void 0;
  const t = or, r = Ki;
  e.MAX_UINT64 = BigInt("0xffffffffffffffff"), e.MAX_INTEGER = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), e.MAX_INTEGER_BIGINT = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"), e.SECP256K1_ORDER = r.secp256k1.CURVE.n, e.SECP256K1_ORDER_DIV_2 = r.secp256k1.CURVE.n / BigInt(2), e.TWO_POW256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.KECCAK256_NULL = t.Buffer.from(e.KECCAK256_NULL_S, "hex"), e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.KECCAK256_RLP_ARRAY = t.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.KECCAK256_RLP = t.Buffer.from(e.KECCAK256_RLP_S, "hex"), e.RLP_EMPTY_STRING = t.Buffer.from([128]), e.MAX_WITHDRAWALS_PER_PAYLOAD = 16;
})(Zi);
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.GWEI_TO_WEI = void 0;
eo.GWEI_TO_WEI = BigInt(1e9);
var Ia = {}, tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.RLP = tr.utils = tr.decode = tr.encode = void 0;
function Ta(e) {
  if (Array.isArray(e)) {
    const r = [];
    let n = 0;
    for (let o = 0; o < e.length; o++) {
      const i = Ta(e[o]);
      r.push(i), n += i.length;
    }
    return Ps(wc(n, 192), ...r);
  }
  const t = ad(e);
  return t.length === 1 && t[0] < 128 ? t : Ps(wc(t.length, 128), t);
}
tr.encode = Ta;
function Gr(e, t, r) {
  if (r > e.length)
    throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
  return e.slice(t, r);
}
function yc(e) {
  if (e[0] === 0)
    throw new Error("invalid RLP: extra zeros");
  return id(nd(e));
}
function wc(e, t) {
  if (e < 56)
    return Uint8Array.from([e + t]);
  const r = Bs(e), n = r.length / 2, o = Bs(t + 55 + n);
  return Uint8Array.from(Ei(o + r));
}
function rd(e, t = !1) {
  if (typeof e > "u" || e === null || e.length === 0)
    return Uint8Array.from([]);
  const r = ad(e), n = Ns(r);
  if (t)
    return n;
  if (n.remainder.length !== 0)
    throw new Error("invalid RLP: remainder must be zero");
  return n.data;
}
tr.decode = rd;
function Ns(e) {
  let t, r, n, o, i;
  const s = [], l = e[0];
  if (l <= 127)
    return {
      data: e.slice(0, 1),
      remainder: e.slice(1)
    };
  if (l <= 183) {
    if (t = l - 127, l === 128 ? n = Uint8Array.from([]) : n = Gr(e, 1, t), t === 2 && n[0] < 128)
      throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
    return {
      data: n,
      remainder: e.slice(t)
    };
  } else if (l <= 191) {
    if (r = l - 182, e.length - 1 < r)
      throw new Error("invalid RLP: not enough bytes for string length");
    if (t = yc(Gr(e, 1, r)), t <= 55)
      throw new Error("invalid RLP: expected string length to be greater than 55");
    return n = Gr(e, r, t + r), {
      data: n,
      remainder: e.slice(t + r)
    };
  } else if (l <= 247) {
    for (t = l - 191, o = Gr(e, 1, t); o.length; )
      i = Ns(o), s.push(i.data), o = i.remainder;
    return {
      data: s,
      remainder: e.slice(t)
    };
  } else {
    if (r = l - 246, t = yc(Gr(e, 1, r)), t < 56)
      throw new Error("invalid RLP: encoded list too short");
    const f = r + t;
    if (f > e.length)
      throw new Error("invalid RLP: total length is larger than the data");
    for (o = Gr(e, r, f); o.length; )
      i = Ns(o), s.push(i.data), o = i.remainder;
    return {
      data: s,
      remainder: e.slice(f)
    };
  }
}
const UE = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function nd(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += UE[e[r]];
  return t;
}
function id(e) {
  const t = Number.parseInt(e, 16);
  if (Number.isNaN(t))
    throw new Error("Invalid byte sequence");
  return t;
}
function Ei(e) {
  if (typeof e != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof e);
  if (e.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const t = new Uint8Array(e.length / 2);
  for (let r = 0; r < t.length; r++) {
    const n = r * 2;
    t[r] = id(e.slice(n, n + 2));
  }
  return t;
}
function Ps(...e) {
  if (e.length === 1)
    return e[0];
  const t = e.reduce((n, o) => n + o.length, 0), r = new Uint8Array(t);
  for (let n = 0, o = 0; n < e.length; n++) {
    const i = e[n];
    r.set(i, o), o += i.length;
  }
  return r;
}
function od(e) {
  return new TextEncoder().encode(e);
}
function Bs(e) {
  if (e < 0)
    throw new Error("Invalid integer as argument, must be unsigned!");
  const t = e.toString(16);
  return t.length % 2 ? `0${t}` : t;
}
function HE(e) {
  return e.length % 2 ? `0${e}` : e;
}
function sd(e) {
  return e.length >= 2 && e[0] === "0" && e[1] === "x";
}
function zE(e) {
  return typeof e != "string" ? e : sd(e) ? e.slice(2) : e;
}
function ad(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    return sd(e) ? Ei(HE(zE(e))) : od(e);
  if (typeof e == "number" || typeof e == "bigint")
    return e ? Ei(Bs(e)) : Uint8Array.from([]);
  if (e == null)
    return Uint8Array.from([]);
  throw new Error("toBytes: received unsupported type " + typeof e);
}
tr.utils = {
  bytesToHex: nd,
  concatBytes: Ps,
  hexToBytes: Ei,
  utf8ToBytes: od
};
tr.RLP = { encode: Ta, decode: rd };
var Vt = {}, Ve = {}, Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.add5L = Ce.add5H = Ce.add4H = Ce.add4L = Ce.add3H = Ce.add3L = Ce.add = Ce.rotlBL = Ce.rotlBH = Ce.rotlSL = Ce.rotlSH = Ce.rotr32L = Ce.rotr32H = Ce.rotrBL = Ce.rotrBH = Ce.rotrSL = Ce.rotrSH = Ce.shrSL = Ce.shrSH = Ce.toBig = Ce.split = Ce.fromBig = void 0;
const fi = /* @__PURE__ */ BigInt(2 ** 32 - 1), $s = /* @__PURE__ */ BigInt(32);
function Oa(e, t = !1) {
  return t ? { h: Number(e & fi), l: Number(e >> $s & fi) } : { h: Number(e >> $s & fi) | 0, l: Number(e & fi) | 0 };
}
Ce.fromBig = Oa;
function fd(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: i, l: s } = Oa(e[o], t);
    [r[o], n[o]] = [i, s];
  }
  return [r, n];
}
Ce.split = fd;
const cd = (e, t) => BigInt(e >>> 0) << $s | BigInt(t >>> 0);
Ce.toBig = cd;
const ld = (e, t, r) => e >>> r;
Ce.shrSH = ld;
const ud = (e, t, r) => e << 32 - r | t >>> r;
Ce.shrSL = ud;
const dd = (e, t, r) => e >>> r | t << 32 - r;
Ce.rotrSH = dd;
const hd = (e, t, r) => e << 32 - r | t >>> r;
Ce.rotrSL = hd;
const gd = (e, t, r) => e << 64 - r | t >>> r - 32;
Ce.rotrBH = gd;
const _d = (e, t, r) => e >>> r - 32 | t << 64 - r;
Ce.rotrBL = _d;
const bd = (e, t) => t;
Ce.rotr32H = bd;
const pd = (e, t) => e;
Ce.rotr32L = pd;
const yd = (e, t, r) => e << r | t >>> 32 - r;
Ce.rotlSH = yd;
const wd = (e, t, r) => t << r | e >>> 32 - r;
Ce.rotlSL = wd;
const md = (e, t, r) => t << r - 32 | e >>> 64 - r;
Ce.rotlBH = md;
const Ed = (e, t, r) => e << r - 32 | t >>> 64 - r;
Ce.rotlBL = Ed;
function vd(e, t, r, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: e + r + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
Ce.add = vd;
const Sd = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
Ce.add3L = Sd;
const Rd = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
Ce.add3H = Rd;
const Ad = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
Ce.add4L = Ad;
const Id = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0;
Ce.add4H = Id;
const Td = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0);
Ce.add5L = Td;
const Od = (e, t, r, n, o, i) => t + r + n + o + i + (e / 2 ** 32 | 0) | 0;
Ce.add5H = Od;
const WE = {
  fromBig: Oa,
  split: fd,
  toBig: cd,
  shrSH: ld,
  shrSL: ud,
  rotrSH: dd,
  rotrSL: hd,
  rotrBH: gd,
  rotrBL: _d,
  rotr32H: bd,
  rotr32L: pd,
  rotlSH: yd,
  rotlSL: wd,
  rotlBH: md,
  rotlBL: Ed,
  add: vd,
  add3L: Sd,
  add3H: Rd,
  add4L: Ad,
  add4H: Id,
  add5H: Od,
  add5L: Td
};
Ce.default = WE;
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.shake256 = Ve.shake128 = Ve.keccak_512 = Ve.keccak_384 = Ve.keccak_256 = Ve.keccak_224 = Ve.sha3_512 = Ve.sha3_384 = Ve.sha3_256 = Ve.sha3_224 = Ve.Keccak = Ve.keccakP = void 0;
const Zr = ut, jn = Ce, Nn = _r, [Ld, Cd, Nd] = [[], [], []], VE = /* @__PURE__ */ BigInt(0), Rn = /* @__PURE__ */ BigInt(1), qE = /* @__PURE__ */ BigInt(2), GE = /* @__PURE__ */ BigInt(7), ZE = /* @__PURE__ */ BigInt(256), KE = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Rn, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Ld.push(2 * (5 * n + r)), Cd.push((e + 1) * (e + 2) / 2 % 64);
  let o = VE;
  for (let i = 0; i < 7; i++)
    t = (t << Rn ^ (t >> GE) * KE) % ZE, t & qE && (o ^= Rn << (Rn << /* @__PURE__ */ BigInt(i)) - Rn);
  Nd.push(o);
}
const [JE, XE] = /* @__PURE__ */ (0, jn.split)(Nd, !0), mc = (e, t, r) => r > 32 ? (0, jn.rotlBH)(e, t, r) : (0, jn.rotlSH)(e, t, r), Ec = (e, t, r) => r > 32 ? (0, jn.rotlBL)(e, t, r) : (0, jn.rotlSL)(e, t, r);
function Pd(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let s = 0; s < 10; s++)
      r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const l = (s + 8) % 10, f = (s + 2) % 10, c = r[f], u = r[f + 1], h = mc(c, u, 1) ^ r[l], b = Ec(c, u, 1) ^ r[l + 1];
      for (let _ = 0; _ < 50; _ += 10)
        e[s + _] ^= h, e[s + _ + 1] ^= b;
    }
    let o = e[2], i = e[3];
    for (let s = 0; s < 24; s++) {
      const l = Cd[s], f = mc(o, i, l), c = Ec(o, i, l), u = Ld[s];
      o = e[u], i = e[u + 1], e[u] = f, e[u + 1] = c;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let l = 0; l < 10; l++)
        r[l] = e[s + l];
      for (let l = 0; l < 10; l++)
        e[s + l] ^= ~r[(l + 2) % 10] & r[(l + 4) % 10];
    }
    e[0] ^= JE[n], e[1] ^= XE[n];
  }
  r.fill(0);
}
Ve.keccakP = Pd;
class Zn extends Nn.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Zr.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Nn.u32)(this.state);
  }
  keccak() {
    Pd(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Zr.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, Nn.toBytes)(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const s = Math.min(r - this.pos, o - i);
      for (let l = 0; l < s; l++)
        n[this.pos++] ^= t[i++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: o } = this;
    t[n] ^= r, r & 128 && n === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    (0, Zr.exists)(this, !1), (0, Zr.bytes)(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let o = 0, i = t.length; o < i; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, i - o);
      t.set(r.subarray(this.posOut, this.posOut + s), o), this.posOut += s, o += s;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, Zr.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Zr.output)(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: o, rounds: i, enableXOF: s } = this;
    return t || (t = new Zn(r, n, o, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = o, t.enableXOF = s, t.destroyed = this.destroyed, t;
  }
}
Ve.Keccak = Zn;
const Or = (e, t, r) => (0, Nn.wrapConstructor)(() => new Zn(t, e, r));
Ve.sha3_224 = Or(6, 144, 224 / 8);
Ve.sha3_256 = Or(6, 136, 256 / 8);
Ve.sha3_384 = Or(6, 104, 384 / 8);
Ve.sha3_512 = Or(6, 72, 512 / 8);
Ve.keccak_224 = Or(1, 144, 224 / 8);
Ve.keccak_256 = Or(1, 136, 256 / 8);
Ve.keccak_384 = Or(1, 104, 384 / 8);
Ve.keccak_512 = Or(1, 72, 512 / 8);
const Bd = (e, t, r) => (0, Nn.wrapXOFConstructorWithOpts)((n = {}) => new Zn(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
Ve.shake128 = Bd(31, 168, 128 / 8);
Ve.shake256 = Bd(31, 136, 256 / 8);
var vi = { exports: {} };
vi.exports;
(function(e, t) {
  var r = Qe && Qe.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.crypto = t.wrapHash = t.equalsBytes = t.hexToBytes = t.bytesToUtf8 = t.utf8ToBytes = t.createView = t.concatBytes = t.toHex = t.bytesToHex = t.assertBytes = t.assertBool = void 0;
  const n = r(ut), o = _r, i = n.default.bool;
  t.assertBool = i;
  const s = n.default.bytes;
  t.assertBytes = s;
  var l = _r;
  Object.defineProperty(t, "bytesToHex", { enumerable: !0, get: function() {
    return l.bytesToHex;
  } }), Object.defineProperty(t, "toHex", { enumerable: !0, get: function() {
    return l.bytesToHex;
  } }), Object.defineProperty(t, "concatBytes", { enumerable: !0, get: function() {
    return l.concatBytes;
  } }), Object.defineProperty(t, "createView", { enumerable: !0, get: function() {
    return l.createView;
  } }), Object.defineProperty(t, "utf8ToBytes", { enumerable: !0, get: function() {
    return l.utf8ToBytes;
  } });
  function f(b) {
    if (!(b instanceof Uint8Array))
      throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof b}`);
    return new TextDecoder().decode(b);
  }
  t.bytesToUtf8 = f;
  function c(b) {
    const _ = b.startsWith("0x") ? b.substring(2) : b;
    return (0, o.hexToBytes)(_);
  }
  t.hexToBytes = c;
  function u(b, _) {
    if (b.length !== _.length)
      return !1;
    for (let R = 0; R < b.length; R++)
      if (b[R] !== _[R])
        return !1;
    return !0;
  }
  t.equalsBytes = u;
  function h(b) {
    return (_) => (n.default.bytes(_), b(_));
  }
  t.wrapHash = h, t.crypto = (() => {
    const b = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0, _ = typeof Va == "function" && Va.bind(e);
    return {
      node: _ && !b ? _("crypto") : void 0,
      web: b
    };
  })();
})(vi, vi.exports);
var $d = vi.exports;
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.keccak512 = Vt.keccak384 = Vt.keccak256 = Vt.keccak224 = void 0;
const Fn = Ve, to = $d;
Vt.keccak224 = (0, to.wrapHash)(Fn.keccak_224);
Vt.keccak256 = (() => {
  const e = (0, to.wrapHash)(Fn.keccak_256);
  return e.create = Fn.keccak_256.create, e;
})();
Vt.keccak384 = (0, to.wrapHash)(Fn.keccak_384);
Vt.keccak512 = (0, to.wrapHash)(Fn.keccak_512);
var Vr = {}, Mt = {}, qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.isHexString = qe.getKeys = qe.fromAscii = qe.fromUtf8 = qe.toAscii = qe.arrayContainsArray = qe.getBinarySize = qe.padToEven = qe.stripHexPrefix = qe.isHexPrefixed = void 0;
function kd(e) {
  if (typeof e != "string")
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof e}`);
  return e[0] === "0" && e[1] === "x";
}
qe.isHexPrefixed = kd;
const YE = (e) => {
  if (typeof e != "string")
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof e}`);
  return kd(e) ? e.slice(2) : e;
};
qe.stripHexPrefix = YE;
function Dd(e) {
  let t = e;
  if (typeof t != "string")
    throw new Error(`[padToEven] value must be type 'string', received ${typeof t}`);
  return t.length % 2 && (t = `0${t}`), t;
}
qe.padToEven = Dd;
function QE(e) {
  if (typeof e != "string")
    throw new Error(`[getBinarySize] method requires input type 'string', received ${typeof e}`);
  return pe.Buffer.byteLength(e, "utf8");
}
qe.getBinarySize = QE;
function ev(e, t, r) {
  if (Array.isArray(e) !== !0)
    throw new Error(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof e}'`);
  if (Array.isArray(t) !== !0)
    throw new Error(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof t}'`);
  return t[r === !0 ? "some" : "every"]((n) => e.indexOf(n) >= 0);
}
qe.arrayContainsArray = ev;
function tv(e) {
  let t = "", r = 0;
  const n = e.length;
  for (e.substring(0, 2) === "0x" && (r = 2); r < n; r += 2) {
    const o = parseInt(e.substr(r, 2), 16);
    t += String.fromCharCode(o);
  }
  return t;
}
qe.toAscii = tv;
function rv(e) {
  const t = pe.Buffer.from(e, "utf8");
  return `0x${Dd(t.toString("hex")).replace(/^0+|0+$/g, "")}`;
}
qe.fromUtf8 = rv;
function nv(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    const o = e.charCodeAt(r).toString(16);
    t += o.length < 2 ? `0${o}` : o;
  }
  return `0x${t}`;
}
qe.fromAscii = nv;
function iv(e, t, r) {
  if (!Array.isArray(e))
    throw new Error(`[getKeys] method expects input 'params' to be an array, got ${typeof e}`);
  if (typeof t != "string")
    throw new Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof e}`);
  const n = [];
  for (let o = 0; o < e.length; o++) {
    let i = e[o][t];
    if (r === !0 && !i)
      i = "";
    else if (typeof i != "string")
      throw new Error(`invalid abi - expected type 'string', received ${typeof i}`);
    n.push(i);
  }
  return n;
}
qe.getKeys = iv;
function ov(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || typeof t < "u" && t > 0 && e.length !== 2 + 2 * t);
}
qe.isHexString = ov;
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.assertIsString = Mt.assertIsArray = Mt.assertIsBuffer = Mt.assertIsHexString = void 0;
const sv = qe, av = function(e) {
  if (!(0, sv.isHexString)(e)) {
    const t = `This method only supports 0x-prefixed hex strings but input was: ${e}`;
    throw new Error(t);
  }
};
Mt.assertIsHexString = av;
const fv = function(e) {
  if (!pe.Buffer.isBuffer(e)) {
    const t = `This method only supports Buffer but input was: ${e}`;
    throw new Error(t);
  }
};
Mt.assertIsBuffer = fv;
const cv = function(e) {
  if (!Array.isArray(e)) {
    const t = `This method only supports number arrays but input was: ${e}`;
    throw new Error(t);
  }
};
Mt.assertIsArray = cv;
const lv = function(e) {
  if (typeof e != "string") {
    const t = `This method only supports strings but input was: ${e}`;
    throw new Error(t);
  }
};
Mt.assertIsString = lv;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.intToUnpaddedBuffer = e.bigIntToUnpaddedBuffer = e.bigIntToHex = e.bufArrToArr = e.arrToBufArr = e.validateNoLeadingZeroes = e.baToJSON = e.toUtf8 = e.short = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToInt = e.bigIntToBuffer = e.bufferToBigInt = e.bufferToHex = e.toBuffer = e.unpadHexString = e.unpadArray = e.unpadBuffer = e.setLengthRight = e.setLengthLeft = e.zeros = e.intToBuffer = e.intToHex = void 0;
  const t = Mt, r = qe, n = function(m) {
    if (!Number.isSafeInteger(m) || m < 0)
      throw new Error(`Received an invalid integer type: ${m}`);
    return `0x${m.toString(16)}`;
  };
  e.intToHex = n;
  const o = function(m) {
    const $ = (0, e.intToHex)(m);
    return pe.Buffer.from((0, r.padToEven)($.slice(2)), "hex");
  };
  e.intToBuffer = o;
  const i = function(m) {
    return pe.Buffer.allocUnsafe(m).fill(0);
  };
  e.zeros = i;
  const s = function(m, $, M) {
    const P = (0, e.zeros)($);
    return M ? m.length < $ ? (m.copy(P), P) : m.slice(0, $) : m.length < $ ? (m.copy(P, $ - m.length), P) : m.slice(-$);
  }, l = function(m, $) {
    return (0, t.assertIsBuffer)(m), s(m, $, !1);
  };
  e.setLengthLeft = l;
  const f = function(m, $) {
    return (0, t.assertIsBuffer)(m), s(m, $, !0);
  };
  e.setLengthRight = f;
  const c = function(m) {
    let $ = m[0];
    for (; m.length > 0 && $.toString() === "0"; )
      m = m.slice(1), $ = m[0];
    return m;
  }, u = function(m) {
    return (0, t.assertIsBuffer)(m), c(m);
  };
  e.unpadBuffer = u;
  const h = function(m) {
    return (0, t.assertIsArray)(m), c(m);
  };
  e.unpadArray = h;
  const b = function(m) {
    return (0, t.assertIsHexString)(m), m = (0, r.stripHexPrefix)(m), "0x" + c(m);
  };
  e.unpadHexString = b;
  const _ = function(m) {
    if (m == null)
      return pe.Buffer.allocUnsafe(0);
    if (pe.Buffer.isBuffer(m))
      return pe.Buffer.from(m);
    if (Array.isArray(m) || m instanceof Uint8Array)
      return pe.Buffer.from(m);
    if (typeof m == "string") {
      if (!(0, r.isHexString)(m))
        throw new Error(`Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${m}`);
      return pe.Buffer.from((0, r.padToEven)((0, r.stripHexPrefix)(m)), "hex");
    }
    if (typeof m == "number")
      return (0, e.intToBuffer)(m);
    if (typeof m == "bigint") {
      if (m < BigInt(0))
        throw new Error(`Cannot convert negative bigint to buffer. Given: ${m}`);
      let $ = m.toString(16);
      return $.length % 2 && ($ = "0" + $), pe.Buffer.from($, "hex");
    }
    if (m.toArray)
      return pe.Buffer.from(m.toArray());
    if (m.toBuffer)
      return pe.Buffer.from(m.toBuffer());
    throw new Error("invalid type");
  };
  e.toBuffer = _;
  const R = function(m) {
    return m = (0, e.toBuffer)(m), "0x" + m.toString("hex");
  };
  e.bufferToHex = R;
  function T(m) {
    const $ = (0, e.bufferToHex)(m);
    return BigInt($ === "0x" ? 0 : $);
  }
  e.bufferToBigInt = T;
  function N(m) {
    return (0, e.toBuffer)("0x" + m.toString(16));
  }
  e.bigIntToBuffer = N;
  const D = function(m) {
    const $ = Number(T(m));
    if (!Number.isSafeInteger($))
      throw new Error("Number exceeds 53 bits");
    return $;
  };
  e.bufferToInt = D;
  const L = function(m) {
    return BigInt.asIntN(256, T(m));
  };
  e.fromSigned = L;
  const O = function(m) {
    return N(BigInt.asUintN(256, m));
  };
  e.toUnsigned = O;
  const S = function(m) {
    return typeof m != "string" || (0, r.isHexPrefixed)(m) ? m : "0x" + m;
  };
  e.addHexPrefix = S;
  function H(m, $ = 50) {
    const M = pe.Buffer.isBuffer(m) ? m.toString("hex") : m;
    return M.length <= $ ? M : M.slice(0, $) + "…";
  }
  e.short = H;
  const X = function(m) {
    const $ = /^(00)+|(00)+$/g;
    if (m = (0, r.stripHexPrefix)(m), m.length % 2 !== 0)
      throw new Error("Invalid non-even hex string input for toUtf8() provided");
    return pe.Buffer.from(m.replace($, ""), "hex").toString("utf8");
  };
  e.toUtf8 = X;
  const J = function(m) {
    if (pe.Buffer.isBuffer(m))
      return `0x${m.toString("hex")}`;
    if (m instanceof Array) {
      const $ = [];
      for (let M = 0; M < m.length; M++)
        $.push((0, e.baToJSON)(m[M]));
      return $;
    }
  };
  e.baToJSON = J;
  const j = function(m) {
    for (const [$, M] of Object.entries(m))
      if (M !== void 0 && M.length > 0 && M[0] === 0)
        throw new Error(`${$} cannot have leading zeroes, received: ${M.toString("hex")}`);
  };
  e.validateNoLeadingZeroes = j;
  function W(m) {
    return Array.isArray(m) ? m.map(($) => W($)) : pe.Buffer.from(m);
  }
  e.arrToBufArr = W;
  function ie(m) {
    return Array.isArray(m) ? m.map(($) => ie($)) : Uint8Array.from(m ?? []);
  }
  e.bufArrToArr = ie;
  const Q = (m) => "0x" + m.toString(16);
  e.bigIntToHex = Q;
  function w(m) {
    return (0, e.unpadBuffer)(N(m));
  }
  e.bigIntToUnpaddedBuffer = w;
  function d(m) {
    return (0, e.unpadBuffer)((0, e.intToBuffer)(m));
  }
  e.intToUnpaddedBuffer = d;
})(Vr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.accountBodyToRLP = e.accountBodyToSlim = e.accountBodyFromSlim = e.isZeroAddress = e.zeroAddress = e.importPublic = e.privateToAddress = e.privateToPublic = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isValidAddress = e.Account = void 0;
  const t = tr, r = Vt, n = Ki, o = $d, i = Vr, s = Zi, l = Mt, f = qe, c = BigInt(0);
  class u {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    constructor(d = c, m = c, $ = s.KECCAK256_RLP, M = s.KECCAK256_NULL) {
      this.nonce = d, this.balance = m, this.storageRoot = $, this.codeHash = M, this._validate();
    }
    static fromAccountData(d) {
      const { nonce: m, balance: $, storageRoot: M, codeHash: P } = d;
      return new u(m !== void 0 ? (0, i.bufferToBigInt)((0, i.toBuffer)(m)) : void 0, $ !== void 0 ? (0, i.bufferToBigInt)((0, i.toBuffer)($)) : void 0, M !== void 0 ? (0, i.toBuffer)(M) : void 0, P !== void 0 ? (0, i.toBuffer)(P) : void 0);
    }
    static fromRlpSerializedAccount(d) {
      const m = (0, i.arrToBufArr)(t.RLP.decode(Uint8Array.from(d)));
      if (!Array.isArray(m))
        throw new Error("Invalid serialized account input. Must be array");
      return this.fromValuesArray(m);
    }
    static fromValuesArray(d) {
      const [m, $, M, P] = d;
      return new u((0, i.bufferToBigInt)(m), (0, i.bufferToBigInt)($), M, P);
    }
    _validate() {
      if (this.nonce < c)
        throw new Error("nonce must be greater than zero");
      if (this.balance < c)
        throw new Error("balance must be greater than zero");
      if (this.storageRoot.length !== 32)
        throw new Error("storageRoot must have a length of 32");
      if (this.codeHash.length !== 32)
        throw new Error("codeHash must have a length of 32");
    }
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */
    raw() {
      return [
        (0, i.bigIntToUnpaddedBuffer)(this.nonce),
        (0, i.bigIntToUnpaddedBuffer)(this.balance),
        this.storageRoot,
        this.codeHash
      ];
    }
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */
    serialize() {
      return pe.Buffer.from(t.RLP.encode((0, i.bufArrToArr)(this.raw())));
    }
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */
    isContract() {
      return !this.codeHash.equals(s.KECCAK256_NULL);
    }
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */
    isEmpty() {
      return this.balance === c && this.nonce === c && this.codeHash.equals(s.KECCAK256_NULL);
    }
  }
  e.Account = u;
  const h = function(w) {
    try {
      (0, l.assertIsString)(w);
    } catch {
      return !1;
    }
    return /^0x[0-9a-fA-F]{40}$/.test(w);
  };
  e.isValidAddress = h;
  const b = function(w, d) {
    (0, l.assertIsHexString)(w);
    const m = (0, f.stripHexPrefix)(w).toLowerCase();
    let $ = "";
    d !== void 0 && ($ = (0, i.bufferToBigInt)((0, i.toBuffer)(d)).toString() + "0x");
    const M = pe.Buffer.from($ + m, "utf8"), P = (0, o.bytesToHex)((0, r.keccak256)(M));
    let F = "0x";
    for (let C = 0; C < m.length; C++)
      parseInt(P[C], 16) >= 8 ? F += m[C].toUpperCase() : F += m[C];
    return F;
  };
  e.toChecksumAddress = b;
  const _ = function(w, d) {
    return (0, e.isValidAddress)(w) && (0, e.toChecksumAddress)(w, d) === w;
  };
  e.isValidChecksumAddress = _;
  const R = function(w, d) {
    return (0, l.assertIsBuffer)(w), (0, l.assertIsBuffer)(d), (0, i.bufferToBigInt)(d) === BigInt(0) ? pe.Buffer.from((0, r.keccak256)(t.RLP.encode((0, i.bufArrToArr)([w, null])))).slice(-20) : pe.Buffer.from((0, r.keccak256)(t.RLP.encode((0, i.bufArrToArr)([w, d])))).slice(-20);
  };
  e.generateAddress = R;
  const T = function(w, d, m) {
    if ((0, l.assertIsBuffer)(w), (0, l.assertIsBuffer)(d), (0, l.assertIsBuffer)(m), w.length !== 20)
      throw new Error("Expected from to be of length 20");
    if (d.length !== 32)
      throw new Error("Expected salt to be of length 32");
    const $ = (0, r.keccak256)(pe.Buffer.concat([pe.Buffer.from("ff", "hex"), w, d, (0, r.keccak256)(m)]));
    return (0, i.toBuffer)($).slice(-20);
  };
  e.generateAddress2 = T;
  const N = function(w) {
    return n.secp256k1.utils.isValidPrivateKey(w);
  };
  e.isValidPrivate = N;
  const D = function(w, d = !1) {
    if ((0, l.assertIsBuffer)(w), w.length === 64)
      try {
        return n.secp256k1.ProjectivePoint.fromHex(pe.Buffer.concat([pe.Buffer.from([4]), w])), !0;
      } catch {
        return !1;
      }
    if (!d)
      return !1;
    try {
      return n.secp256k1.ProjectivePoint.fromHex(w), !0;
    } catch {
      return !1;
    }
  };
  e.isValidPublic = D;
  const L = function(w, d = !1) {
    if ((0, l.assertIsBuffer)(w), d && w.length !== 64 && (w = pe.Buffer.from(n.secp256k1.ProjectivePoint.fromHex(w).toRawBytes(!1).slice(1))), w.length !== 64)
      throw new Error("Expected pubKey to be of length 64");
    return pe.Buffer.from((0, r.keccak256)(w)).slice(-20);
  };
  e.pubToAddress = L, e.publicToAddress = e.pubToAddress;
  const O = function(w) {
    return (0, l.assertIsBuffer)(w), pe.Buffer.from(n.secp256k1.ProjectivePoint.fromPrivateKey(w).toRawBytes(!1).slice(1));
  };
  e.privateToPublic = O;
  const S = function(w) {
    return (0, e.publicToAddress)((0, e.privateToPublic)(w));
  };
  e.privateToAddress = S;
  const H = function(w) {
    return (0, l.assertIsBuffer)(w), w.length !== 64 && (w = pe.Buffer.from(n.secp256k1.ProjectivePoint.fromHex(w).toRawBytes(!1).slice(1))), w;
  };
  e.importPublic = H;
  const X = function() {
    const d = (0, i.zeros)(20);
    return (0, i.bufferToHex)(d);
  };
  e.zeroAddress = X;
  const J = function(w) {
    try {
      (0, l.assertIsString)(w);
    } catch {
      return !1;
    }
    return (0, e.zeroAddress)() === w;
  };
  e.isZeroAddress = J;
  function j(w) {
    const [d, m, $, M] = w;
    return [
      d,
      m,
      (0, i.arrToBufArr)($).length === 0 ? s.KECCAK256_RLP : $,
      (0, i.arrToBufArr)(M).length === 0 ? s.KECCAK256_NULL : M
    ];
  }
  e.accountBodyFromSlim = j;
  const W = new Uint8Array(0);
  function ie(w) {
    const [d, m, $, M] = w;
    return [
      d,
      m,
      (0, i.arrToBufArr)($).equals(s.KECCAK256_RLP) ? W : $,
      (0, i.arrToBufArr)(M).equals(s.KECCAK256_NULL) ? W : M
    ];
  }
  e.accountBodyToSlim = ie;
  function Q(w, d = !0) {
    const m = d ? j(w) : w;
    return (0, i.arrToBufArr)(t.RLP.encode(m));
  }
  e.accountBodyToRLP = Q;
})(Ia);
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.Address = void 0;
const An = Ia, ci = Vr;
class ur {
  constructor(t) {
    if (t.length !== 20)
      throw new Error("Invalid address length");
    this.buf = t;
  }
  /**
   * Returns the zero address.
   */
  static zero() {
    return new ur((0, ci.zeros)(20));
  }
  /**
   * Returns an Address object from a hex-encoded string.
   * @param str - Hex-encoded address
   */
  static fromString(t) {
    if (!(0, An.isValidAddress)(t))
      throw new Error("Invalid address");
    return new ur((0, ci.toBuffer)(t));
  }
  /**
   * Returns an address for a given public key.
   * @param pubKey The two points of an uncompressed key
   */
  static fromPublicKey(t) {
    if (!pe.Buffer.isBuffer(t))
      throw new Error("Public key should be Buffer");
    const r = (0, An.pubToAddress)(t);
    return new ur(r);
  }
  /**
   * Returns an address for a given private key.
   * @param privateKey A private key must be 256 bits wide
   */
  static fromPrivateKey(t) {
    if (!pe.Buffer.isBuffer(t))
      throw new Error("Private key should be Buffer");
    const r = (0, An.privateToAddress)(t);
    return new ur(r);
  }
  /**
   * Generates an address for a newly created contract.
   * @param from The address which is creating this new address
   * @param nonce The nonce of the from account
   */
  static generate(t, r) {
    if (typeof r != "bigint")
      throw new Error("Expected nonce to be a bigint");
    return new ur((0, An.generateAddress)(t.buf, (0, ci.bigIntToBuffer)(r)));
  }
  /**
   * Generates an address for a contract created using CREATE2.
   * @param from The address which is creating this new address
   * @param salt A salt
   * @param initCode The init code of the contract being created
   */
  static generate2(t, r, n) {
    if (!pe.Buffer.isBuffer(r))
      throw new Error("Expected salt to be a Buffer");
    if (!pe.Buffer.isBuffer(n))
      throw new Error("Expected initCode to be a Buffer");
    return new ur((0, An.generateAddress2)(t.buf, r, n));
  }
  /**
   * Is address equal to another.
   */
  equals(t) {
    return this.buf.equals(t.buf);
  }
  /**
   * Is address zero.
   */
  isZero() {
    return this.equals(ur.zero());
  }
  /**
   * True if address is in the address range defined
   * by EIP-1352
   */
  isPrecompileOrSystemAddress() {
    const t = (0, ci.bufferToBigInt)(this.buf), r = BigInt(0), n = BigInt("0xffff");
    return t >= r && t <= n;
  }
  /**
   * Returns hex encoding of address.
   */
  toString() {
    return "0x" + this.buf.toString("hex");
  }
  /**
   * Returns Buffer representation of address.
   */
  toBuffer() {
    return pe.Buffer.from(this.buf);
  }
}
Kn.Address = ur;
var ro = {}, La = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.toType = e.TypeOutput = void 0;
  const t = Vr, r = qe;
  var n;
  (function(i) {
    i[i.Number = 0] = "Number", i[i.BigInt = 1] = "BigInt", i[i.Buffer = 2] = "Buffer", i[i.PrefixedHexString = 3] = "PrefixedHexString";
  })(n = e.TypeOutput || (e.TypeOutput = {}));
  function o(i, s) {
    if (i === null)
      return null;
    if (i === void 0)
      return;
    if (typeof i == "string" && !(0, r.isHexString)(i))
      throw new Error(`A string must be provided with a 0x-prefix, given: ${i}`);
    if (typeof i == "number" && !Number.isSafeInteger(i))
      throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
    const l = (0, t.toBuffer)(i);
    switch (s) {
      case n.Buffer:
        return l;
      case n.BigInt:
        return (0, t.bufferToBigInt)(l);
      case n.Number: {
        const f = (0, t.bufferToBigInt)(l);
        if (f > BigInt(Number.MAX_SAFE_INTEGER))
          throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
        return Number(f);
      }
      case n.PrefixedHexString:
        return (0, t.bufferToHex)(l);
      default:
        throw new Error("unknown outputType");
    }
  }
  e.toType = o;
})(La);
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.Withdrawal = void 0;
const vc = Kn, Jo = Vr, tt = La;
class Pn {
  /**
   * This constructor assigns and validates the values.
   * Use the static factory methods to assist in creating a Withdrawal object from varying data types.
   * Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot
   */
  constructor(t, r, n, o) {
    this.index = t, this.validatorIndex = r, this.address = n, this.amount = o;
  }
  static fromWithdrawalData(t) {
    const { index: r, validatorIndex: n, address: o, amount: i } = t, s = (0, tt.toType)(r, tt.TypeOutput.BigInt), l = (0, tt.toType)(n, tt.TypeOutput.BigInt), f = new vc.Address((0, tt.toType)(o, tt.TypeOutput.Buffer)), c = (0, tt.toType)(i, tt.TypeOutput.BigInt);
    return new Pn(s, l, f, c);
  }
  static fromValuesArray(t) {
    if (t.length !== 4)
      throw Error(`Invalid withdrawalArray length expected=4 actual=${t.length}`);
    const [r, n, o, i] = t;
    return Pn.fromWithdrawalData({ index: r, validatorIndex: n, address: o, amount: i });
  }
  /**
   * Convert a withdrawal to a buffer array
   * @param withdrawal the withdrawal to convert
   * @returns buffer array of the withdrawal
   */
  static toBufferArray(t) {
    const { index: r, validatorIndex: n, address: o, amount: i } = t, s = (0, tt.toType)(r, tt.TypeOutput.BigInt) === BigInt(0) ? pe.Buffer.alloc(0) : (0, tt.toType)(r, tt.TypeOutput.Buffer), l = (0, tt.toType)(n, tt.TypeOutput.BigInt) === BigInt(0) ? pe.Buffer.alloc(0) : (0, tt.toType)(n, tt.TypeOutput.Buffer);
    let f;
    o instanceof vc.Address ? f = o.buf : f = (0, tt.toType)(o, tt.TypeOutput.Buffer);
    const c = (0, tt.toType)(i, tt.TypeOutput.BigInt) === BigInt(0) ? pe.Buffer.alloc(0) : (0, tt.toType)(i, tt.TypeOutput.Buffer);
    return [s, l, f, c];
  }
  raw() {
    return Pn.toBufferArray(this);
  }
  toValue() {
    return {
      index: this.index,
      validatorIndex: this.validatorIndex,
      address: this.address.buf,
      amount: this.amount
    };
  }
  toJSON() {
    return {
      index: (0, Jo.bigIntToHex)(this.index),
      validatorIndex: (0, Jo.bigIntToHex)(this.validatorIndex),
      address: "0x" + this.address.buf.toString("hex"),
      amount: (0, Jo.bigIntToHex)(this.amount)
    };
  }
}
ro.Withdrawal = Pn;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.hashPersonalMessage = wt.isValidSignature = wt.fromRpcSig = wt.toCompactSig = wt.toRpcSig = wt.ecrecover = wt.ecsign = void 0;
const uv = Vt, xd = Ki, At = Vr, Xo = Zi, dv = Mt;
function hv(e, t, r) {
  const n = xd.secp256k1.sign(e, t), o = n.toCompactRawBytes(), i = pe.Buffer.from(o.slice(0, 32)), s = pe.Buffer.from(o.slice(32, 64)), l = r === void 0 ? BigInt(n.recovery + 27) : BigInt(n.recovery + 35) + BigInt(r) * BigInt(2);
  return { r: i, s, v: l };
}
wt.ecsign = hv;
function no(e, t) {
  return e === BigInt(0) || e === BigInt(1) ? e : t === void 0 ? e - BigInt(27) : e - (t * BigInt(2) + BigInt(35));
}
function io(e) {
  return e === BigInt(0) || e === BigInt(1);
}
const gv = function(e, t, r, n, o) {
  const i = pe.Buffer.concat([(0, At.setLengthLeft)(r, 32), (0, At.setLengthLeft)(n, 32)], 64), s = no(t, o);
  if (!io(s))
    throw new Error("Invalid signature v value");
  const f = xd.secp256k1.Signature.fromCompact(i).addRecoveryBit(Number(s)).recoverPublicKey(e);
  return pe.Buffer.from(f.toRawBytes(!1).slice(1));
};
wt.ecrecover = gv;
const _v = function(e, t, r, n) {
  const o = no(e, n);
  if (!io(o))
    throw new Error("Invalid signature v value");
  return (0, At.bufferToHex)(pe.Buffer.concat([(0, At.setLengthLeft)(t, 32), (0, At.setLengthLeft)(r, 32), (0, At.toBuffer)(e)]));
};
wt.toRpcSig = _v;
const bv = function(e, t, r, n) {
  const o = no(e, n);
  if (!io(o))
    throw new Error("Invalid signature v value");
  let i = r;
  return (e > BigInt(28) && e % BigInt(2) === BigInt(1) || e === BigInt(1) || e === BigInt(28)) && (i = pe.Buffer.from(r), i[0] |= 128), (0, At.bufferToHex)(pe.Buffer.concat([(0, At.setLengthLeft)(t, 32), (0, At.setLengthLeft)(i, 32)]));
};
wt.toCompactSig = bv;
const pv = function(e) {
  const t = (0, At.toBuffer)(e);
  let r, n, o;
  if (t.length >= 65)
    r = t.slice(0, 32), n = t.slice(32, 64), o = (0, At.bufferToBigInt)(t.slice(64));
  else if (t.length === 64)
    r = t.slice(0, 32), n = t.slice(32, 64), o = BigInt((0, At.bufferToInt)(t.slice(32, 33)) >> 7), n[0] &= 127;
  else
    throw new Error("Invalid signature length");
  return o < 27 && (o = o + BigInt(27)), {
    v: o,
    r,
    s: n
  };
};
wt.fromRpcSig = pv;
const yv = function(e, t, r, n = !0, o) {
  if (t.length !== 32 || r.length !== 32 || !io(no(e, o)))
    return !1;
  const i = (0, At.bufferToBigInt)(t), s = (0, At.bufferToBigInt)(r);
  return !(i === BigInt(0) || i >= Xo.SECP256K1_ORDER || s === BigInt(0) || s >= Xo.SECP256K1_ORDER || n && s >= Xo.SECP256K1_ORDER_DIV_2);
};
wt.isValidSignature = yv;
const wv = function(e) {
  (0, dv.assertIsBuffer)(e);
  const t = pe.Buffer.from(`Ethereum Signed Message:
${e.length}`, "utf-8");
  return pe.Buffer.from((0, uv.keccak256)(pe.Buffer.concat([t, e])));
};
wt.hashPersonalMessage = wv;
var Md = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.compactBytesToNibbles = e.bytesToNibbles = e.nibblesToCompactBytes = e.nibblesToBytes = e.hasTerminator = void 0;
  const t = (s) => s.length > 0 && s[s.length - 1] === 16;
  e.hasTerminator = t;
  const r = (s, l) => {
    for (let f = 0, c = 0; c < s.length; f += 1, c += 2)
      l[f] = s[c] << 4 | s[c + 1];
  };
  e.nibblesToBytes = r;
  const n = (s) => {
    let l = 0;
    (0, e.hasTerminator)(s) && (l = 1, s = s.subarray(0, s.length - 1));
    const f = new Uint8Array(s.length / 2 + 1);
    return f[0] = l << 5, (s.length & 1) === 1 && (f[0] |= 16, f[0] |= s[0], s = s.subarray(1)), (0, e.nibblesToBytes)(s, f.subarray(1)), f;
  };
  e.nibblesToCompactBytes = n;
  const o = (s) => {
    const l = s.length * 2 + 1, f = new Uint8Array(l);
    for (let c = 0; c < s.length; c++) {
      const u = s[c];
      f[c * 2] = u / 16, f[c * 2 + 1] = u % 16;
    }
    return f[l - 1] = 16, f;
  };
  e.bytesToNibbles = o;
  const i = (s) => {
    if (s.length === 0)
      return s;
    let l = (0, e.bytesToNibbles)(s);
    l[0] < 2 && (l = l.subarray(0, l.length - 1));
    const f = 2 - (l[0] & 1);
    return l.subarray(f);
  };
  e.compactBytesToNibbles = i;
})(Md);
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.AsyncEventEmitter = void 0;
const mv = cn;
async function Ev(e, t, r) {
  let n;
  for await (const o of t)
    try {
      o.length < 2 ? o.call(e, r) : await new Promise((i, s) => {
        o.call(e, r, (l) => {
          l ? s(l) : i();
        });
      });
    } catch (i) {
      n = i;
    }
  if (n)
    throw n;
}
class vv extends mv.EventEmitter {
  emit(t, ...r) {
    let [n, o] = r;
    const i = this;
    let s = i._events[t] ?? [];
    return o === void 0 && typeof n == "function" && (o = n, n = void 0), (t === "newListener" || t === "removeListener") && (n = {
      event: n,
      fn: o
    }, o = void 0), s = Array.isArray(s) ? s : [s], Ev(i, s.slice(), n).then(o).catch(o), i.listenerCount(t) > 0;
  }
  once(t, r) {
    const n = this;
    let o;
    if (typeof r != "function")
      throw new TypeError("listener must be a function");
    return r.length >= 2 ? o = function(i, s) {
      n.removeListener(t, o), r(i, s);
    } : o = function(i) {
      n.removeListener(t, o), r(i, o);
    }, n.on(t, o), n;
  }
  first(t, r) {
    let n = this._events[t] ?? [];
    if (typeof r != "function")
      throw new TypeError("listener must be a function");
    return Array.isArray(n) || (this._events[t] = n = [n]), n.unshift(r), this;
  }
  before(t, r, n) {
    return this.beforeOrAfter(t, r, n);
  }
  after(t, r, n) {
    return this.beforeOrAfter(t, r, n, "after");
  }
  beforeOrAfter(t, r, n, o) {
    let i = this._events[t] ?? [], s, l;
    const f = o === "after" ? 1 : 0;
    if (typeof n != "function")
      throw new TypeError("listener must be a function");
    if (typeof r != "function")
      throw new TypeError("target must be a function");
    for (Array.isArray(i) || (this._events[t] = i = [i]), l = i.length, s = i.length; s--; )
      if (i[s] === r) {
        l = s + f;
        break;
      }
    return i.splice(l, 0, n), this;
  }
  on(t, r) {
    return super.on(t, r);
  }
  addListener(t, r) {
    return super.addListener(t, r);
  }
  prependListener(t, r) {
    return super.prependListener(t, r);
  }
  prependOnceListener(t, r) {
    return super.prependOnceListener(t, r);
  }
  removeAllListeners(t) {
    return super.removeAllListeners(t);
  }
  removeListener(t, r) {
    return super.removeListener(t, r);
  }
  eventNames() {
    return super.eventNames();
  }
  listeners(t) {
    return super.listeners(t);
  }
  listenerCount(t) {
    return super.listenerCount(t);
  }
  getMaxListeners() {
    return super.getMaxListeners();
  }
  setMaxListeners(t) {
    return super.setMaxListeners(t);
  }
}
oo.AsyncEventEmitter = vv;
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.Lock = void 0;
class Sv {
  constructor() {
    this.permits = 1, this.promiseResolverQueue = [];
  }
  /**
   * Returns a promise used to wait for a permit to become available. This method should be awaited on.
   * @returns  A promise that gets resolved when execution is allowed to proceed.
   */
  async acquire() {
    return this.permits > 0 ? (this.permits -= 1, Promise.resolve(!0)) : new Promise((t) => this.promiseResolverQueue.push(t));
  }
  /**
   * Increases the number of permits by one. If there are other functions waiting, one of them will
   * continue to execute in a future iteration of the event loop.
   */
  release() {
    if (this.permits += 1, this.permits > 1 && this.promiseResolverQueue.length > 0)
      console.warn("Lock.permits should never be > 0 when there is someone waiting.");
    else if (this.permits === 1 && this.promiseResolverQueue.length > 0) {
      this.permits -= 1;
      const t = this.promiseResolverQueue.shift();
      t && t(!0);
    }
  }
}
so.Lock = Sv;
var fn = {}, Mr = {}, Yo = {}, Qo = {}, es, Sc;
function Rv() {
  if (Sc)
    return es;
  Sc = 1;
  function e() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return es = e, es;
}
var Wt = {}, ts = {}, Rc;
function ao() {
  return Rc || (Rc = 1, function(e) {
    var t = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function r(i, s) {
      return Object.prototype.hasOwnProperty.call(i, s);
    }
    e.assign = function(i) {
      for (var s = Array.prototype.slice.call(arguments, 1); s.length; ) {
        var l = s.shift();
        if (l) {
          if (typeof l != "object")
            throw new TypeError(l + "must be non-object");
          for (var f in l)
            r(l, f) && (i[f] = l[f]);
        }
      }
      return i;
    }, e.shrinkBuf = function(i, s) {
      return i.length === s ? i : i.subarray ? i.subarray(0, s) : (i.length = s, i);
    };
    var n = {
      arraySet: function(i, s, l, f, c) {
        if (s.subarray && i.subarray) {
          i.set(s.subarray(l, l + f), c);
          return;
        }
        for (var u = 0; u < f; u++)
          i[c + u] = s[l + u];
      },
      // Join array of chunks to single array.
      flattenChunks: function(i) {
        var s, l, f, c, u, h;
        for (f = 0, s = 0, l = i.length; s < l; s++)
          f += i[s].length;
        for (h = new Uint8Array(f), c = 0, s = 0, l = i.length; s < l; s++)
          u = i[s], h.set(u, c), c += u.length;
        return h;
      }
    }, o = {
      arraySet: function(i, s, l, f, c) {
        for (var u = 0; u < f; u++)
          i[c + u] = s[l + u];
      },
      // Join array of chunks to single array.
      flattenChunks: function(i) {
        return [].concat.apply([], i);
      }
    };
    e.setTyped = function(i) {
      i ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, n)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, o));
    }, e.setTyped(t);
  }(ts)), ts;
}
var Nr = {}, Ac;
function Av() {
  if (Ac)
    return Nr;
  Ac = 1;
  var e = ao(), t = 4, r = 0, n = 1, o = 2;
  function i(E) {
    for (var ae = E.length; --ae >= 0; )
      E[ae] = 0;
  }
  var s = 0, l = 1, f = 2, c = 3, u = 258, h = 29, b = 256, _ = b + 1 + h, R = 30, T = 19, N = 2 * _ + 1, D = 15, L = 16, O = 7, S = 256, H = 16, X = 17, J = 18, j = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), W = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), ie = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], w = 512, d = new Array((_ + 2) * 2);
  i(d);
  var m = new Array(R * 2);
  i(m);
  var $ = new Array(w);
  i($);
  var M = new Array(u - c + 1);
  i(M);
  var P = new Array(h);
  i(P);
  var F = new Array(R);
  i(F);
  function C(E, ae, de, we, x) {
    this.static_tree = E, this.extra_bits = ae, this.extra_base = de, this.elems = we, this.max_length = x, this.has_stree = E && E.length;
  }
  var U, q, oe;
  function V(E, ae) {
    this.dyn_tree = E, this.max_code = 0, this.stat_desc = ae;
  }
  function ne(E) {
    return E < 256 ? $[E] : $[256 + (E >>> 7)];
  }
  function ce(E, ae) {
    E.pending_buf[E.pending++] = ae & 255, E.pending_buf[E.pending++] = ae >>> 8 & 255;
  }
  function ue(E, ae, de) {
    E.bi_valid > L - de ? (E.bi_buf |= ae << E.bi_valid & 65535, ce(E, E.bi_buf), E.bi_buf = ae >> L - E.bi_valid, E.bi_valid += de - L) : (E.bi_buf |= ae << E.bi_valid & 65535, E.bi_valid += de);
  }
  function Ee(E, ae, de) {
    ue(
      E,
      de[ae * 2],
      de[ae * 2 + 1]
      /*.Len*/
    );
  }
  function ge(E, ae) {
    var de = 0;
    do
      de |= E & 1, E >>>= 1, de <<= 1;
    while (--ae > 0);
    return de >>> 1;
  }
  function ye(E) {
    E.bi_valid === 16 ? (ce(E, E.bi_buf), E.bi_buf = 0, E.bi_valid = 0) : E.bi_valid >= 8 && (E.pending_buf[E.pending++] = E.bi_buf & 255, E.bi_buf >>= 8, E.bi_valid -= 8);
  }
  function Pe(E, ae) {
    var de = ae.dyn_tree, we = ae.max_code, x = ae.stat_desc.static_tree, te = ae.stat_desc.has_stree, g = ae.stat_desc.extra_bits, fe = ae.stat_desc.extra_base, Oe = ae.stat_desc.max_length, a, K, Y, y, k, G, ve = 0;
    for (y = 0; y <= D; y++)
      E.bl_count[y] = 0;
    for (de[E.heap[E.heap_max] * 2 + 1] = 0, a = E.heap_max + 1; a < N; a++)
      K = E.heap[a], y = de[de[K * 2 + 1] * 2 + 1] + 1, y > Oe && (y = Oe, ve++), de[K * 2 + 1] = y, !(K > we) && (E.bl_count[y]++, k = 0, K >= fe && (k = g[K - fe]), G = de[K * 2], E.opt_len += G * (y + k), te && (E.static_len += G * (x[K * 2 + 1] + k)));
    if (ve !== 0) {
      do {
        for (y = Oe - 1; E.bl_count[y] === 0; )
          y--;
        E.bl_count[y]--, E.bl_count[y + 1] += 2, E.bl_count[Oe]--, ve -= 2;
      } while (ve > 0);
      for (y = Oe; y !== 0; y--)
        for (K = E.bl_count[y]; K !== 0; )
          Y = E.heap[--a], !(Y > we) && (de[Y * 2 + 1] !== y && (E.opt_len += (y - de[Y * 2 + 1]) * de[Y * 2], de[Y * 2 + 1] = y), K--);
    }
  }
  function Be(E, ae, de) {
    var we = new Array(D + 1), x = 0, te, g;
    for (te = 1; te <= D; te++)
      we[te] = x = x + de[te - 1] << 1;
    for (g = 0; g <= ae; g++) {
      var fe = E[g * 2 + 1];
      fe !== 0 && (E[g * 2] = ge(we[fe]++, fe));
    }
  }
  function Re() {
    var E, ae, de, we, x, te = new Array(D + 1);
    for (de = 0, we = 0; we < h - 1; we++)
      for (P[we] = de, E = 0; E < 1 << j[we]; E++)
        M[de++] = we;
    for (M[de - 1] = we, x = 0, we = 0; we < 16; we++)
      for (F[we] = x, E = 0; E < 1 << W[we]; E++)
        $[x++] = we;
    for (x >>= 7; we < R; we++)
      for (F[we] = x << 7, E = 0; E < 1 << W[we] - 7; E++)
        $[256 + x++] = we;
    for (ae = 0; ae <= D; ae++)
      te[ae] = 0;
    for (E = 0; E <= 143; )
      d[E * 2 + 1] = 8, E++, te[8]++;
    for (; E <= 255; )
      d[E * 2 + 1] = 9, E++, te[9]++;
    for (; E <= 279; )
      d[E * 2 + 1] = 7, E++, te[7]++;
    for (; E <= 287; )
      d[E * 2 + 1] = 8, E++, te[8]++;
    for (Be(d, _ + 1, te), E = 0; E < R; E++)
      m[E * 2 + 1] = 5, m[E * 2] = ge(E, 5);
    U = new C(d, j, b + 1, _, D), q = new C(m, W, 0, R, D), oe = new C(new Array(0), ie, 0, T, O);
  }
  function I(E) {
    var ae;
    for (ae = 0; ae < _; ae++)
      E.dyn_ltree[ae * 2] = 0;
    for (ae = 0; ae < R; ae++)
      E.dyn_dtree[ae * 2] = 0;
    for (ae = 0; ae < T; ae++)
      E.bl_tree[ae * 2] = 0;
    E.dyn_ltree[S * 2] = 1, E.opt_len = E.static_len = 0, E.last_lit = E.matches = 0;
  }
  function B(E) {
    E.bi_valid > 8 ? ce(E, E.bi_buf) : E.bi_valid > 0 && (E.pending_buf[E.pending++] = E.bi_buf), E.bi_buf = 0, E.bi_valid = 0;
  }
  function Z(E, ae, de, we) {
    B(E), ce(E, de), ce(E, ~de), e.arraySet(E.pending_buf, E.window, ae, de, E.pending), E.pending += de;
  }
  function le(E, ae, de, we) {
    var x = ae * 2, te = de * 2;
    return E[x] < E[te] || E[x] === E[te] && we[ae] <= we[de];
  }
  function se(E, ae, de) {
    for (var we = E.heap[de], x = de << 1; x <= E.heap_len && (x < E.heap_len && le(ae, E.heap[x + 1], E.heap[x], E.depth) && x++, !le(ae, we, E.heap[x], E.depth)); )
      E.heap[de] = E.heap[x], de = x, x <<= 1;
    E.heap[de] = we;
  }
  function _e(E, ae, de) {
    var we, x, te = 0, g, fe;
    if (E.last_lit !== 0)
      do
        we = E.pending_buf[E.d_buf + te * 2] << 8 | E.pending_buf[E.d_buf + te * 2 + 1], x = E.pending_buf[E.l_buf + te], te++, we === 0 ? Ee(E, x, ae) : (g = M[x], Ee(E, g + b + 1, ae), fe = j[g], fe !== 0 && (x -= P[g], ue(E, x, fe)), we--, g = ne(we), Ee(E, g, de), fe = W[g], fe !== 0 && (we -= F[g], ue(E, we, fe)));
      while (te < E.last_lit);
    Ee(E, S, ae);
  }
  function Ie(E, ae) {
    var de = ae.dyn_tree, we = ae.stat_desc.static_tree, x = ae.stat_desc.has_stree, te = ae.stat_desc.elems, g, fe, Oe = -1, a;
    for (E.heap_len = 0, E.heap_max = N, g = 0; g < te; g++)
      de[g * 2] !== 0 ? (E.heap[++E.heap_len] = Oe = g, E.depth[g] = 0) : de[g * 2 + 1] = 0;
    for (; E.heap_len < 2; )
      a = E.heap[++E.heap_len] = Oe < 2 ? ++Oe : 0, de[a * 2] = 1, E.depth[a] = 0, E.opt_len--, x && (E.static_len -= we[a * 2 + 1]);
    for (ae.max_code = Oe, g = E.heap_len >> 1; g >= 1; g--)
      se(E, de, g);
    a = te;
    do
      g = E.heap[
        1
        /*SMALLEST*/
      ], E.heap[
        1
        /*SMALLEST*/
      ] = E.heap[E.heap_len--], se(
        E,
        de,
        1
        /*SMALLEST*/
      ), fe = E.heap[
        1
        /*SMALLEST*/
      ], E.heap[--E.heap_max] = g, E.heap[--E.heap_max] = fe, de[a * 2] = de[g * 2] + de[fe * 2], E.depth[a] = (E.depth[g] >= E.depth[fe] ? E.depth[g] : E.depth[fe]) + 1, de[g * 2 + 1] = de[fe * 2 + 1] = a, E.heap[
        1
        /*SMALLEST*/
      ] = a++, se(
        E,
        de,
        1
        /*SMALLEST*/
      );
    while (E.heap_len >= 2);
    E.heap[--E.heap_max] = E.heap[
      1
      /*SMALLEST*/
    ], Pe(E, ae), Be(de, Oe, E.bl_count);
  }
  function Te(E, ae, de) {
    var we, x = -1, te, g = ae[0 * 2 + 1], fe = 0, Oe = 7, a = 4;
    for (g === 0 && (Oe = 138, a = 3), ae[(de + 1) * 2 + 1] = 65535, we = 0; we <= de; we++)
      te = g, g = ae[(we + 1) * 2 + 1], !(++fe < Oe && te === g) && (fe < a ? E.bl_tree[te * 2] += fe : te !== 0 ? (te !== x && E.bl_tree[te * 2]++, E.bl_tree[H * 2]++) : fe <= 10 ? E.bl_tree[X * 2]++ : E.bl_tree[J * 2]++, fe = 0, x = te, g === 0 ? (Oe = 138, a = 3) : te === g ? (Oe = 6, a = 3) : (Oe = 7, a = 4));
  }
  function ke(E, ae, de) {
    var we, x = -1, te, g = ae[0 * 2 + 1], fe = 0, Oe = 7, a = 4;
    for (g === 0 && (Oe = 138, a = 3), we = 0; we <= de; we++)
      if (te = g, g = ae[(we + 1) * 2 + 1], !(++fe < Oe && te === g)) {
        if (fe < a)
          do
            Ee(E, te, E.bl_tree);
          while (--fe !== 0);
        else
          te !== 0 ? (te !== x && (Ee(E, te, E.bl_tree), fe--), Ee(E, H, E.bl_tree), ue(E, fe - 3, 2)) : fe <= 10 ? (Ee(E, X, E.bl_tree), ue(E, fe - 3, 3)) : (Ee(E, J, E.bl_tree), ue(E, fe - 11, 7));
        fe = 0, x = te, g === 0 ? (Oe = 138, a = 3) : te === g ? (Oe = 6, a = 3) : (Oe = 7, a = 4);
      }
  }
  function me(E) {
    var ae;
    for (Te(E, E.dyn_ltree, E.l_desc.max_code), Te(E, E.dyn_dtree, E.d_desc.max_code), Ie(E, E.bl_desc), ae = T - 1; ae >= 3 && E.bl_tree[Q[ae] * 2 + 1] === 0; ae--)
      ;
    return E.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
  }
  function je(E, ae, de, we) {
    var x;
    for (ue(E, ae - 257, 5), ue(E, de - 1, 5), ue(E, we - 4, 4), x = 0; x < we; x++)
      ue(E, E.bl_tree[Q[x] * 2 + 1], 3);
    ke(E, E.dyn_ltree, ae - 1), ke(E, E.dyn_dtree, de - 1);
  }
  function nt(E) {
    var ae = 4093624447, de;
    for (de = 0; de <= 31; de++, ae >>>= 1)
      if (ae & 1 && E.dyn_ltree[de * 2] !== 0)
        return r;
    if (E.dyn_ltree[9 * 2] !== 0 || E.dyn_ltree[10 * 2] !== 0 || E.dyn_ltree[13 * 2] !== 0)
      return n;
    for (de = 32; de < b; de++)
      if (E.dyn_ltree[de * 2] !== 0)
        return n;
    return r;
  }
  var Ze = !1;
  function Rt(E) {
    Ze || (Re(), Ze = !0), E.l_desc = new V(E.dyn_ltree, U), E.d_desc = new V(E.dyn_dtree, q), E.bl_desc = new V(E.bl_tree, oe), E.bi_buf = 0, E.bi_valid = 0, I(E);
  }
  function it(E, ae, de, we) {
    ue(E, (s << 1) + (we ? 1 : 0), 3), Z(E, ae, de);
  }
  function Ue(E) {
    ue(E, l << 1, 3), Ee(E, S, d), ye(E);
  }
  function ot(E, ae, de, we) {
    var x, te, g = 0;
    E.level > 0 ? (E.strm.data_type === o && (E.strm.data_type = nt(E)), Ie(E, E.l_desc), Ie(E, E.d_desc), g = me(E), x = E.opt_len + 3 + 7 >>> 3, te = E.static_len + 3 + 7 >>> 3, te <= x && (x = te)) : x = te = de + 5, de + 4 <= x && ae !== -1 ? it(E, ae, de, we) : E.strategy === t || te === x ? (ue(E, (l << 1) + (we ? 1 : 0), 3), _e(E, d, m)) : (ue(E, (f << 1) + (we ? 1 : 0), 3), je(E, E.l_desc.max_code + 1, E.d_desc.max_code + 1, g + 1), _e(E, E.dyn_ltree, E.dyn_dtree)), I(E), we && B(E);
  }
  function ct(E, ae, de) {
    return E.pending_buf[E.d_buf + E.last_lit * 2] = ae >>> 8 & 255, E.pending_buf[E.d_buf + E.last_lit * 2 + 1] = ae & 255, E.pending_buf[E.l_buf + E.last_lit] = de & 255, E.last_lit++, ae === 0 ? E.dyn_ltree[de * 2]++ : (E.matches++, ae--, E.dyn_ltree[(M[de] + b + 1) * 2]++, E.dyn_dtree[ne(ae) * 2]++), E.last_lit === E.lit_bufsize - 1;
  }
  return Nr._tr_init = Rt, Nr._tr_stored_block = it, Nr._tr_flush_block = ot, Nr._tr_tally = ct, Nr._tr_align = Ue, Nr;
}
var rs, Ic;
function jd() {
  if (Ic)
    return rs;
  Ic = 1;
  function e(t, r, n, o) {
    for (var i = t & 65535 | 0, s = t >>> 16 & 65535 | 0, l = 0; n !== 0; ) {
      l = n > 2e3 ? 2e3 : n, n -= l;
      do
        i = i + r[o++] | 0, s = s + i | 0;
      while (--l);
      i %= 65521, s %= 65521;
    }
    return i | s << 16 | 0;
  }
  return rs = e, rs;
}
var ns, Tc;
function Fd() {
  if (Tc)
    return ns;
  Tc = 1;
  function e() {
    for (var n, o = [], i = 0; i < 256; i++) {
      n = i;
      for (var s = 0; s < 8; s++)
        n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      o[i] = n;
    }
    return o;
  }
  var t = e();
  function r(n, o, i, s) {
    var l = t, f = s + i;
    n ^= -1;
    for (var c = s; c < f; c++)
      n = n >>> 8 ^ l[(n ^ o[c]) & 255];
    return n ^ -1;
  }
  return ns = r, ns;
}
var is, Oc;
function Iv() {
  return Oc || (Oc = 1, is = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), is;
}
var Lc;
function Tv() {
  if (Lc)
    return Wt;
  Lc = 1;
  var e = ao(), t = Av(), r = jd(), n = Fd(), o = Iv(), i = 0, s = 1, l = 3, f = 4, c = 5, u = 0, h = 1, b = -2, _ = -3, R = -5, T = -1, N = 1, D = 2, L = 3, O = 4, S = 0, H = 2, X = 8, J = 9, j = 15, W = 8, ie = 29, Q = 256, w = Q + 1 + ie, d = 30, m = 19, $ = 2 * w + 1, M = 15, P = 3, F = 258, C = F + P + 1, U = 32, q = 42, oe = 69, V = 73, ne = 91, ce = 103, ue = 113, Ee = 666, ge = 1, ye = 2, Pe = 3, Be = 4, Re = 3;
  function I(a, K) {
    return a.msg = o[K], K;
  }
  function B(a) {
    return (a << 1) - (a > 4 ? 9 : 0);
  }
  function Z(a) {
    for (var K = a.length; --K >= 0; )
      a[K] = 0;
  }
  function le(a) {
    var K = a.state, Y = K.pending;
    Y > a.avail_out && (Y = a.avail_out), Y !== 0 && (e.arraySet(a.output, K.pending_buf, K.pending_out, Y, a.next_out), a.next_out += Y, K.pending_out += Y, a.total_out += Y, a.avail_out -= Y, K.pending -= Y, K.pending === 0 && (K.pending_out = 0));
  }
  function se(a, K) {
    t._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, K), a.block_start = a.strstart, le(a.strm);
  }
  function _e(a, K) {
    a.pending_buf[a.pending++] = K;
  }
  function Ie(a, K) {
    a.pending_buf[a.pending++] = K >>> 8 & 255, a.pending_buf[a.pending++] = K & 255;
  }
  function Te(a, K, Y, y) {
    var k = a.avail_in;
    return k > y && (k = y), k === 0 ? 0 : (a.avail_in -= k, e.arraySet(K, a.input, a.next_in, k, Y), a.state.wrap === 1 ? a.adler = r(a.adler, K, k, Y) : a.state.wrap === 2 && (a.adler = n(a.adler, K, k, Y)), a.next_in += k, a.total_in += k, k);
  }
  function ke(a, K) {
    var Y = a.max_chain_length, y = a.strstart, k, G, ve = a.prev_length, p = a.nice_match, v = a.strstart > a.w_size - C ? a.strstart - (a.w_size - C) : 0, re = a.window, he = a.w_mask, be = a.prev, Le = a.strstart + F, De = re[y + ve - 1], st = re[y + ve];
    a.prev_length >= a.good_match && (Y >>= 2), p > a.lookahead && (p = a.lookahead);
    do
      if (k = K, !(re[k + ve] !== st || re[k + ve - 1] !== De || re[k] !== re[y] || re[++k] !== re[y + 1])) {
        y += 2, k++;
        do
          ;
        while (re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && re[++y] === re[++k] && y < Le);
        if (G = F - (Le - y), y = Le - F, G > ve) {
          if (a.match_start = K, ve = G, G >= p)
            break;
          De = re[y + ve - 1], st = re[y + ve];
        }
      }
    while ((K = be[K & he]) > v && --Y !== 0);
    return ve <= a.lookahead ? ve : a.lookahead;
  }
  function me(a) {
    var K = a.w_size, Y, y, k, G, ve;
    do {
      if (G = a.window_size - a.lookahead - a.strstart, a.strstart >= K + (K - C)) {
        e.arraySet(a.window, a.window, K, K, 0), a.match_start -= K, a.strstart -= K, a.block_start -= K, y = a.hash_size, Y = y;
        do
          k = a.head[--Y], a.head[Y] = k >= K ? k - K : 0;
        while (--y);
        y = K, Y = y;
        do
          k = a.prev[--Y], a.prev[Y] = k >= K ? k - K : 0;
        while (--y);
        G += K;
      }
      if (a.strm.avail_in === 0)
        break;
      if (y = Te(a.strm, a.window, a.strstart + a.lookahead, G), a.lookahead += y, a.lookahead + a.insert >= P)
        for (ve = a.strstart - a.insert, a.ins_h = a.window[ve], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[ve + 1]) & a.hash_mask; a.insert && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[ve + P - 1]) & a.hash_mask, a.prev[ve & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = ve, ve++, a.insert--, !(a.lookahead + a.insert < P)); )
          ;
    } while (a.lookahead < C && a.strm.avail_in !== 0);
  }
  function je(a, K) {
    var Y = 65535;
    for (Y > a.pending_buf_size - 5 && (Y = a.pending_buf_size - 5); ; ) {
      if (a.lookahead <= 1) {
        if (me(a), a.lookahead === 0 && K === i)
          return ge;
        if (a.lookahead === 0)
          break;
      }
      a.strstart += a.lookahead, a.lookahead = 0;
      var y = a.block_start + Y;
      if ((a.strstart === 0 || a.strstart >= y) && (a.lookahead = a.strstart - y, a.strstart = y, se(a, !1), a.strm.avail_out === 0) || a.strstart - a.block_start >= a.w_size - C && (se(a, !1), a.strm.avail_out === 0))
        return ge;
    }
    return a.insert = 0, K === f ? (se(a, !0), a.strm.avail_out === 0 ? Pe : Be) : (a.strstart > a.block_start && (se(a, !1), a.strm.avail_out === 0), ge);
  }
  function nt(a, K) {
    for (var Y, y; ; ) {
      if (a.lookahead < C) {
        if (me(a), a.lookahead < C && K === i)
          return ge;
        if (a.lookahead === 0)
          break;
      }
      if (Y = 0, a.lookahead >= P && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + P - 1]) & a.hash_mask, Y = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), Y !== 0 && a.strstart - Y <= a.w_size - C && (a.match_length = ke(a, Y)), a.match_length >= P)
        if (y = t._tr_tally(a, a.strstart - a.match_start, a.match_length - P), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= P) {
          a.match_length--;
          do
            a.strstart++, a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + P - 1]) & a.hash_mask, Y = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart;
          while (--a.match_length !== 0);
          a.strstart++;
        } else
          a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
      else
        y = t._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++;
      if (y && (se(a, !1), a.strm.avail_out === 0))
        return ge;
    }
    return a.insert = a.strstart < P - 1 ? a.strstart : P - 1, K === f ? (se(a, !0), a.strm.avail_out === 0 ? Pe : Be) : a.last_lit && (se(a, !1), a.strm.avail_out === 0) ? ge : ye;
  }
  function Ze(a, K) {
    for (var Y, y, k; ; ) {
      if (a.lookahead < C) {
        if (me(a), a.lookahead < C && K === i)
          return ge;
        if (a.lookahead === 0)
          break;
      }
      if (Y = 0, a.lookahead >= P && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + P - 1]) & a.hash_mask, Y = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = P - 1, Y !== 0 && a.prev_length < a.max_lazy_match && a.strstart - Y <= a.w_size - C && (a.match_length = ke(a, Y), a.match_length <= 5 && (a.strategy === N || a.match_length === P && a.strstart - a.match_start > 4096) && (a.match_length = P - 1)), a.prev_length >= P && a.match_length <= a.prev_length) {
        k = a.strstart + a.lookahead - P, y = t._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - P), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
        do
          ++a.strstart <= k && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + P - 1]) & a.hash_mask, Y = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart);
        while (--a.prev_length !== 0);
        if (a.match_available = 0, a.match_length = P - 1, a.strstart++, y && (se(a, !1), a.strm.avail_out === 0))
          return ge;
      } else if (a.match_available) {
        if (y = t._tr_tally(a, 0, a.window[a.strstart - 1]), y && se(a, !1), a.strstart++, a.lookahead--, a.strm.avail_out === 0)
          return ge;
      } else
        a.match_available = 1, a.strstart++, a.lookahead--;
    }
    return a.match_available && (y = t._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < P - 1 ? a.strstart : P - 1, K === f ? (se(a, !0), a.strm.avail_out === 0 ? Pe : Be) : a.last_lit && (se(a, !1), a.strm.avail_out === 0) ? ge : ye;
  }
  function Rt(a, K) {
    for (var Y, y, k, G, ve = a.window; ; ) {
      if (a.lookahead <= F) {
        if (me(a), a.lookahead <= F && K === i)
          return ge;
        if (a.lookahead === 0)
          break;
      }
      if (a.match_length = 0, a.lookahead >= P && a.strstart > 0 && (k = a.strstart - 1, y = ve[k], y === ve[++k] && y === ve[++k] && y === ve[++k])) {
        G = a.strstart + F;
        do
          ;
        while (y === ve[++k] && y === ve[++k] && y === ve[++k] && y === ve[++k] && y === ve[++k] && y === ve[++k] && y === ve[++k] && y === ve[++k] && k < G);
        a.match_length = F - (G - k), a.match_length > a.lookahead && (a.match_length = a.lookahead);
      }
      if (a.match_length >= P ? (Y = t._tr_tally(a, 1, a.match_length - P), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (Y = t._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), Y && (se(a, !1), a.strm.avail_out === 0))
        return ge;
    }
    return a.insert = 0, K === f ? (se(a, !0), a.strm.avail_out === 0 ? Pe : Be) : a.last_lit && (se(a, !1), a.strm.avail_out === 0) ? ge : ye;
  }
  function it(a, K) {
    for (var Y; ; ) {
      if (a.lookahead === 0 && (me(a), a.lookahead === 0)) {
        if (K === i)
          return ge;
        break;
      }
      if (a.match_length = 0, Y = t._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, Y && (se(a, !1), a.strm.avail_out === 0))
        return ge;
    }
    return a.insert = 0, K === f ? (se(a, !0), a.strm.avail_out === 0 ? Pe : Be) : a.last_lit && (se(a, !1), a.strm.avail_out === 0) ? ge : ye;
  }
  function Ue(a, K, Y, y, k) {
    this.good_length = a, this.max_lazy = K, this.nice_length = Y, this.max_chain = y, this.func = k;
  }
  var ot;
  ot = [
    /*      good lazy nice chain */
    new Ue(0, 0, 0, 0, je),
    /* 0 store only */
    new Ue(4, 4, 8, 4, nt),
    /* 1 max speed, no lazy matches */
    new Ue(4, 5, 16, 8, nt),
    /* 2 */
    new Ue(4, 6, 32, 32, nt),
    /* 3 */
    new Ue(4, 4, 16, 16, Ze),
    /* 4 lazy matches */
    new Ue(8, 16, 32, 32, Ze),
    /* 5 */
    new Ue(8, 16, 128, 128, Ze),
    /* 6 */
    new Ue(8, 32, 128, 256, Ze),
    /* 7 */
    new Ue(32, 128, 258, 1024, Ze),
    /* 8 */
    new Ue(32, 258, 258, 4096, Ze)
    /* 9 max compression */
  ];
  function ct(a) {
    a.window_size = 2 * a.w_size, Z(a.head), a.max_lazy_match = ot[a.level].max_lazy, a.good_match = ot[a.level].good_length, a.nice_match = ot[a.level].nice_length, a.max_chain_length = ot[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = P - 1, a.match_available = 0, a.ins_h = 0;
  }
  function E() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = X, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new e.Buf16($ * 2), this.dyn_dtree = new e.Buf16((2 * d + 1) * 2), this.bl_tree = new e.Buf16((2 * m + 1) * 2), Z(this.dyn_ltree), Z(this.dyn_dtree), Z(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new e.Buf16(M + 1), this.heap = new e.Buf16(2 * w + 1), Z(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new e.Buf16(2 * w + 1), Z(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function ae(a) {
    var K;
    return !a || !a.state ? I(a, b) : (a.total_in = a.total_out = 0, a.data_type = H, K = a.state, K.pending = 0, K.pending_out = 0, K.wrap < 0 && (K.wrap = -K.wrap), K.status = K.wrap ? q : ue, a.adler = K.wrap === 2 ? 0 : 1, K.last_flush = i, t._tr_init(K), u);
  }
  function de(a) {
    var K = ae(a);
    return K === u && ct(a.state), K;
  }
  function we(a, K) {
    return !a || !a.state || a.state.wrap !== 2 ? b : (a.state.gzhead = K, u);
  }
  function x(a, K, Y, y, k, G) {
    if (!a)
      return b;
    var ve = 1;
    if (K === T && (K = 6), y < 0 ? (ve = 0, y = -y) : y > 15 && (ve = 2, y -= 16), k < 1 || k > J || Y !== X || y < 8 || y > 15 || K < 0 || K > 9 || G < 0 || G > O)
      return I(a, b);
    y === 8 && (y = 9);
    var p = new E();
    return a.state = p, p.strm = a, p.wrap = ve, p.gzhead = null, p.w_bits = y, p.w_size = 1 << p.w_bits, p.w_mask = p.w_size - 1, p.hash_bits = k + 7, p.hash_size = 1 << p.hash_bits, p.hash_mask = p.hash_size - 1, p.hash_shift = ~~((p.hash_bits + P - 1) / P), p.window = new e.Buf8(p.w_size * 2), p.head = new e.Buf16(p.hash_size), p.prev = new e.Buf16(p.w_size), p.lit_bufsize = 1 << k + 6, p.pending_buf_size = p.lit_bufsize * 4, p.pending_buf = new e.Buf8(p.pending_buf_size), p.d_buf = 1 * p.lit_bufsize, p.l_buf = 3 * p.lit_bufsize, p.level = K, p.strategy = G, p.method = Y, de(a);
  }
  function te(a, K) {
    return x(a, K, X, j, W, S);
  }
  function g(a, K) {
    var Y, y, k, G;
    if (!a || !a.state || K > c || K < 0)
      return a ? I(a, b) : b;
    if (y = a.state, !a.output || !a.input && a.avail_in !== 0 || y.status === Ee && K !== f)
      return I(a, a.avail_out === 0 ? R : b);
    if (y.strm = a, Y = y.last_flush, y.last_flush = K, y.status === q)
      if (y.wrap === 2)
        a.adler = 0, _e(y, 31), _e(y, 139), _e(y, 8), y.gzhead ? (_e(
          y,
          (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)
        ), _e(y, y.gzhead.time & 255), _e(y, y.gzhead.time >> 8 & 255), _e(y, y.gzhead.time >> 16 & 255), _e(y, y.gzhead.time >> 24 & 255), _e(y, y.level === 9 ? 2 : y.strategy >= D || y.level < 2 ? 4 : 0), _e(y, y.gzhead.os & 255), y.gzhead.extra && y.gzhead.extra.length && (_e(y, y.gzhead.extra.length & 255), _e(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (a.adler = n(a.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = oe) : (_e(y, 0), _e(y, 0), _e(y, 0), _e(y, 0), _e(y, 0), _e(y, y.level === 9 ? 2 : y.strategy >= D || y.level < 2 ? 4 : 0), _e(y, Re), y.status = ue);
      else {
        var ve = X + (y.w_bits - 8 << 4) << 8, p = -1;
        y.strategy >= D || y.level < 2 ? p = 0 : y.level < 6 ? p = 1 : y.level === 6 ? p = 2 : p = 3, ve |= p << 6, y.strstart !== 0 && (ve |= U), ve += 31 - ve % 31, y.status = ue, Ie(y, ve), y.strstart !== 0 && (Ie(y, a.adler >>> 16), Ie(y, a.adler & 65535)), a.adler = 1;
      }
    if (y.status === oe)
      if (y.gzhead.extra) {
        for (k = y.pending; y.gzindex < (y.gzhead.extra.length & 65535) && !(y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), le(a), k = y.pending, y.pending === y.pending_buf_size)); )
          _e(y, y.gzhead.extra[y.gzindex] & 255), y.gzindex++;
        y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = V);
      } else
        y.status = V;
    if (y.status === V)
      if (y.gzhead.name) {
        k = y.pending;
        do {
          if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), le(a), k = y.pending, y.pending === y.pending_buf_size)) {
            G = 1;
            break;
          }
          y.gzindex < y.gzhead.name.length ? G = y.gzhead.name.charCodeAt(y.gzindex++) & 255 : G = 0, _e(y, G);
        } while (G !== 0);
        y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), G === 0 && (y.gzindex = 0, y.status = ne);
      } else
        y.status = ne;
    if (y.status === ne)
      if (y.gzhead.comment) {
        k = y.pending;
        do {
          if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), le(a), k = y.pending, y.pending === y.pending_buf_size)) {
            G = 1;
            break;
          }
          y.gzindex < y.gzhead.comment.length ? G = y.gzhead.comment.charCodeAt(y.gzindex++) & 255 : G = 0, _e(y, G);
        } while (G !== 0);
        y.gzhead.hcrc && y.pending > k && (a.adler = n(a.adler, y.pending_buf, y.pending - k, k)), G === 0 && (y.status = ce);
      } else
        y.status = ce;
    if (y.status === ce && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && le(a), y.pending + 2 <= y.pending_buf_size && (_e(y, a.adler & 255), _e(y, a.adler >> 8 & 255), a.adler = 0, y.status = ue)) : y.status = ue), y.pending !== 0) {
      if (le(a), a.avail_out === 0)
        return y.last_flush = -1, u;
    } else if (a.avail_in === 0 && B(K) <= B(Y) && K !== f)
      return I(a, R);
    if (y.status === Ee && a.avail_in !== 0)
      return I(a, R);
    if (a.avail_in !== 0 || y.lookahead !== 0 || K !== i && y.status !== Ee) {
      var v = y.strategy === D ? it(y, K) : y.strategy === L ? Rt(y, K) : ot[y.level].func(y, K);
      if ((v === Pe || v === Be) && (y.status = Ee), v === ge || v === Pe)
        return a.avail_out === 0 && (y.last_flush = -1), u;
      if (v === ye && (K === s ? t._tr_align(y) : K !== c && (t._tr_stored_block(y, 0, 0, !1), K === l && (Z(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), le(a), a.avail_out === 0))
        return y.last_flush = -1, u;
    }
    return K !== f ? u : y.wrap <= 0 ? h : (y.wrap === 2 ? (_e(y, a.adler & 255), _e(y, a.adler >> 8 & 255), _e(y, a.adler >> 16 & 255), _e(y, a.adler >> 24 & 255), _e(y, a.total_in & 255), _e(y, a.total_in >> 8 & 255), _e(y, a.total_in >> 16 & 255), _e(y, a.total_in >> 24 & 255)) : (Ie(y, a.adler >>> 16), Ie(y, a.adler & 65535)), le(a), y.wrap > 0 && (y.wrap = -y.wrap), y.pending !== 0 ? u : h);
  }
  function fe(a) {
    var K;
    return !a || !a.state ? b : (K = a.state.status, K !== q && K !== oe && K !== V && K !== ne && K !== ce && K !== ue && K !== Ee ? I(a, b) : (a.state = null, K === ue ? I(a, _) : u));
  }
  function Oe(a, K) {
    var Y = K.length, y, k, G, ve, p, v, re, he;
    if (!a || !a.state || (y = a.state, ve = y.wrap, ve === 2 || ve === 1 && y.status !== q || y.lookahead))
      return b;
    for (ve === 1 && (a.adler = r(a.adler, K, Y, 0)), y.wrap = 0, Y >= y.w_size && (ve === 0 && (Z(y.head), y.strstart = 0, y.block_start = 0, y.insert = 0), he = new e.Buf8(y.w_size), e.arraySet(he, K, Y - y.w_size, y.w_size, 0), K = he, Y = y.w_size), p = a.avail_in, v = a.next_in, re = a.input, a.avail_in = Y, a.next_in = 0, a.input = K, me(y); y.lookahead >= P; ) {
      k = y.strstart, G = y.lookahead - (P - 1);
      do
        y.ins_h = (y.ins_h << y.hash_shift ^ y.window[k + P - 1]) & y.hash_mask, y.prev[k & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = k, k++;
      while (--G);
      y.strstart = k, y.lookahead = P - 1, me(y);
    }
    return y.strstart += y.lookahead, y.block_start = y.strstart, y.insert = y.lookahead, y.lookahead = 0, y.match_length = y.prev_length = P - 1, y.match_available = 0, a.next_in = v, a.input = re, a.avail_in = p, y.wrap = ve, u;
  }
  return Wt.deflateInit = te, Wt.deflateInit2 = x, Wt.deflateReset = de, Wt.deflateResetKeep = ae, Wt.deflateSetHeader = we, Wt.deflate = g, Wt.deflateEnd = fe, Wt.deflateSetDictionary = Oe, Wt.deflateInfo = "pako deflate (from Nodeca project)", Wt;
}
var kt = {}, os, Cc;
function Ov() {
  if (Cc)
    return os;
  Cc = 1;
  var e = 30, t = 12;
  return os = function(n, o) {
    var i, s, l, f, c, u, h, b, _, R, T, N, D, L, O, S, H, X, J, j, W, ie, Q, w, d;
    i = n.state, s = n.next_in, w = n.input, l = s + (n.avail_in - 5), f = n.next_out, d = n.output, c = f - (o - n.avail_out), u = f + (n.avail_out - 257), h = i.dmax, b = i.wsize, _ = i.whave, R = i.wnext, T = i.window, N = i.hold, D = i.bits, L = i.lencode, O = i.distcode, S = (1 << i.lenbits) - 1, H = (1 << i.distbits) - 1;
    e:
      do {
        D < 15 && (N += w[s++] << D, D += 8, N += w[s++] << D, D += 8), X = L[N & S];
        t:
          for (; ; ) {
            if (J = X >>> 24, N >>>= J, D -= J, J = X >>> 16 & 255, J === 0)
              d[f++] = X & 65535;
            else if (J & 16) {
              j = X & 65535, J &= 15, J && (D < J && (N += w[s++] << D, D += 8), j += N & (1 << J) - 1, N >>>= J, D -= J), D < 15 && (N += w[s++] << D, D += 8, N += w[s++] << D, D += 8), X = O[N & H];
              r:
                for (; ; ) {
                  if (J = X >>> 24, N >>>= J, D -= J, J = X >>> 16 & 255, J & 16) {
                    if (W = X & 65535, J &= 15, D < J && (N += w[s++] << D, D += 8, D < J && (N += w[s++] << D, D += 8)), W += N & (1 << J) - 1, W > h) {
                      n.msg = "invalid distance too far back", i.mode = e;
                      break e;
                    }
                    if (N >>>= J, D -= J, J = f - c, W > J) {
                      if (J = W - J, J > _ && i.sane) {
                        n.msg = "invalid distance too far back", i.mode = e;
                        break e;
                      }
                      if (ie = 0, Q = T, R === 0) {
                        if (ie += b - J, J < j) {
                          j -= J;
                          do
                            d[f++] = T[ie++];
                          while (--J);
                          ie = f - W, Q = d;
                        }
                      } else if (R < J) {
                        if (ie += b + R - J, J -= R, J < j) {
                          j -= J;
                          do
                            d[f++] = T[ie++];
                          while (--J);
                          if (ie = 0, R < j) {
                            J = R, j -= J;
                            do
                              d[f++] = T[ie++];
                            while (--J);
                            ie = f - W, Q = d;
                          }
                        }
                      } else if (ie += R - J, J < j) {
                        j -= J;
                        do
                          d[f++] = T[ie++];
                        while (--J);
                        ie = f - W, Q = d;
                      }
                      for (; j > 2; )
                        d[f++] = Q[ie++], d[f++] = Q[ie++], d[f++] = Q[ie++], j -= 3;
                      j && (d[f++] = Q[ie++], j > 1 && (d[f++] = Q[ie++]));
                    } else {
                      ie = f - W;
                      do
                        d[f++] = d[ie++], d[f++] = d[ie++], d[f++] = d[ie++], j -= 3;
                      while (j > 2);
                      j && (d[f++] = d[ie++], j > 1 && (d[f++] = d[ie++]));
                    }
                  } else if (J & 64) {
                    n.msg = "invalid distance code", i.mode = e;
                    break e;
                  } else {
                    X = O[(X & 65535) + (N & (1 << J) - 1)];
                    continue r;
                  }
                  break;
                }
            } else if (J & 64)
              if (J & 32) {
                i.mode = t;
                break e;
              } else {
                n.msg = "invalid literal/length code", i.mode = e;
                break e;
              }
            else {
              X = L[(X & 65535) + (N & (1 << J) - 1)];
              continue t;
            }
            break;
          }
      } while (s < l && f < u);
    j = D >> 3, s -= j, D -= j << 3, N &= (1 << D) - 1, n.next_in = s, n.next_out = f, n.avail_in = s < l ? 5 + (l - s) : 5 - (s - l), n.avail_out = f < u ? 257 + (u - f) : 257 - (f - u), i.hold = N, i.bits = D;
  }, os;
}
var ss, Nc;
function Lv() {
  if (Nc)
    return ss;
  Nc = 1;
  var e = ao(), t = 15, r = 852, n = 592, o = 0, i = 1, s = 2, l = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], f = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], c = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], u = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return ss = function(b, _, R, T, N, D, L, O) {
    var S = O.bits, H = 0, X = 0, J = 0, j = 0, W = 0, ie = 0, Q = 0, w = 0, d = 0, m = 0, $, M, P, F, C, U = null, q = 0, oe, V = new e.Buf16(t + 1), ne = new e.Buf16(t + 1), ce = null, ue = 0, Ee, ge, ye;
    for (H = 0; H <= t; H++)
      V[H] = 0;
    for (X = 0; X < T; X++)
      V[_[R + X]]++;
    for (W = S, j = t; j >= 1 && V[j] === 0; j--)
      ;
    if (W > j && (W = j), j === 0)
      return N[D++] = 1 << 24 | 64 << 16 | 0, N[D++] = 1 << 24 | 64 << 16 | 0, O.bits = 1, 0;
    for (J = 1; J < j && V[J] === 0; J++)
      ;
    for (W < J && (W = J), w = 1, H = 1; H <= t; H++)
      if (w <<= 1, w -= V[H], w < 0)
        return -1;
    if (w > 0 && (b === o || j !== 1))
      return -1;
    for (ne[1] = 0, H = 1; H < t; H++)
      ne[H + 1] = ne[H] + V[H];
    for (X = 0; X < T; X++)
      _[R + X] !== 0 && (L[ne[_[R + X]]++] = X);
    if (b === o ? (U = ce = L, oe = 19) : b === i ? (U = l, q -= 257, ce = f, ue -= 257, oe = 256) : (U = c, ce = u, oe = -1), m = 0, X = 0, H = J, C = D, ie = W, Q = 0, P = -1, d = 1 << W, F = d - 1, b === i && d > r || b === s && d > n)
      return 1;
    for (; ; ) {
      Ee = H - Q, L[X] < oe ? (ge = 0, ye = L[X]) : L[X] > oe ? (ge = ce[ue + L[X]], ye = U[q + L[X]]) : (ge = 96, ye = 0), $ = 1 << H - Q, M = 1 << ie, J = M;
      do
        M -= $, N[C + (m >> Q) + M] = Ee << 24 | ge << 16 | ye | 0;
      while (M !== 0);
      for ($ = 1 << H - 1; m & $; )
        $ >>= 1;
      if ($ !== 0 ? (m &= $ - 1, m += $) : m = 0, X++, --V[H] === 0) {
        if (H === j)
          break;
        H = _[R + L[X]];
      }
      if (H > W && (m & F) !== P) {
        for (Q === 0 && (Q = W), C += J, ie = H - Q, w = 1 << ie; ie + Q < j && (w -= V[ie + Q], !(w <= 0)); )
          ie++, w <<= 1;
        if (d += 1 << ie, b === i && d > r || b === s && d > n)
          return 1;
        P = m & F, N[P] = W << 24 | ie << 16 | C - D | 0;
      }
    }
    return m !== 0 && (N[C + m] = H - Q << 24 | 64 << 16 | 0), O.bits = W, 0;
  }, ss;
}
var Pc;
function Cv() {
  if (Pc)
    return kt;
  Pc = 1;
  var e = ao(), t = jd(), r = Fd(), n = Ov(), o = Lv(), i = 0, s = 1, l = 2, f = 4, c = 5, u = 6, h = 0, b = 1, _ = 2, R = -2, T = -3, N = -4, D = -5, L = 8, O = 1, S = 2, H = 3, X = 4, J = 5, j = 6, W = 7, ie = 8, Q = 9, w = 10, d = 11, m = 12, $ = 13, M = 14, P = 15, F = 16, C = 17, U = 18, q = 19, oe = 20, V = 21, ne = 22, ce = 23, ue = 24, Ee = 25, ge = 26, ye = 27, Pe = 28, Be = 29, Re = 30, I = 31, B = 32, Z = 852, le = 592, se = 15, _e = se;
  function Ie(x) {
    return (x >>> 24 & 255) + (x >>> 8 & 65280) + ((x & 65280) << 8) + ((x & 255) << 24);
  }
  function Te() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new e.Buf16(320), this.work = new e.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function ke(x) {
    var te;
    return !x || !x.state ? R : (te = x.state, x.total_in = x.total_out = te.total = 0, x.msg = "", te.wrap && (x.adler = te.wrap & 1), te.mode = O, te.last = 0, te.havedict = 0, te.dmax = 32768, te.head = null, te.hold = 0, te.bits = 0, te.lencode = te.lendyn = new e.Buf32(Z), te.distcode = te.distdyn = new e.Buf32(le), te.sane = 1, te.back = -1, h);
  }
  function me(x) {
    var te;
    return !x || !x.state ? R : (te = x.state, te.wsize = 0, te.whave = 0, te.wnext = 0, ke(x));
  }
  function je(x, te) {
    var g, fe;
    return !x || !x.state || (fe = x.state, te < 0 ? (g = 0, te = -te) : (g = (te >> 4) + 1, te < 48 && (te &= 15)), te && (te < 8 || te > 15)) ? R : (fe.window !== null && fe.wbits !== te && (fe.window = null), fe.wrap = g, fe.wbits = te, me(x));
  }
  function nt(x, te) {
    var g, fe;
    return x ? (fe = new Te(), x.state = fe, fe.window = null, g = je(x, te), g !== h && (x.state = null), g) : R;
  }
  function Ze(x) {
    return nt(x, _e);
  }
  var Rt = !0, it, Ue;
  function ot(x) {
    if (Rt) {
      var te;
      for (it = new e.Buf32(512), Ue = new e.Buf32(32), te = 0; te < 144; )
        x.lens[te++] = 8;
      for (; te < 256; )
        x.lens[te++] = 9;
      for (; te < 280; )
        x.lens[te++] = 7;
      for (; te < 288; )
        x.lens[te++] = 8;
      for (o(s, x.lens, 0, 288, it, 0, x.work, { bits: 9 }), te = 0; te < 32; )
        x.lens[te++] = 5;
      o(l, x.lens, 0, 32, Ue, 0, x.work, { bits: 5 }), Rt = !1;
    }
    x.lencode = it, x.lenbits = 9, x.distcode = Ue, x.distbits = 5;
  }
  function ct(x, te, g, fe) {
    var Oe, a = x.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new e.Buf8(a.wsize)), fe >= a.wsize ? (e.arraySet(a.window, te, g - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (Oe = a.wsize - a.wnext, Oe > fe && (Oe = fe), e.arraySet(a.window, te, g - fe, Oe, a.wnext), fe -= Oe, fe ? (e.arraySet(a.window, te, g - fe, fe, 0), a.wnext = fe, a.whave = a.wsize) : (a.wnext += Oe, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += Oe))), 0;
  }
  function E(x, te) {
    var g, fe, Oe, a, K, Y, y, k, G, ve, p, v, re, he, be = 0, Le, De, st, He, fr, pr, Ke, ht, Ye = new e.Buf8(4), ft, bt, Kt = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0)
      return R;
    g = x.state, g.mode === m && (g.mode = $), K = x.next_out, Oe = x.output, y = x.avail_out, a = x.next_in, fe = x.input, Y = x.avail_in, k = g.hold, G = g.bits, ve = Y, p = y, ht = h;
    e:
      for (; ; )
        switch (g.mode) {
          case O:
            if (g.wrap === 0) {
              g.mode = $;
              break;
            }
            for (; G < 16; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if (g.wrap & 2 && k === 35615) {
              g.check = 0, Ye[0] = k & 255, Ye[1] = k >>> 8 & 255, g.check = r(g.check, Ye, 2, 0), k = 0, G = 0, g.mode = S;
              break;
            }
            if (g.flags = 0, g.head && (g.head.done = !1), !(g.wrap & 1) || /* check if zlib header allowed */
            (((k & 255) << 8) + (k >> 8)) % 31) {
              x.msg = "incorrect header check", g.mode = Re;
              break;
            }
            if ((k & 15) !== L) {
              x.msg = "unknown compression method", g.mode = Re;
              break;
            }
            if (k >>>= 4, G -= 4, Ke = (k & 15) + 8, g.wbits === 0)
              g.wbits = Ke;
            else if (Ke > g.wbits) {
              x.msg = "invalid window size", g.mode = Re;
              break;
            }
            g.dmax = 1 << Ke, x.adler = g.check = 1, g.mode = k & 512 ? w : m, k = 0, G = 0;
            break;
          case S:
            for (; G < 16; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if (g.flags = k, (g.flags & 255) !== L) {
              x.msg = "unknown compression method", g.mode = Re;
              break;
            }
            if (g.flags & 57344) {
              x.msg = "unknown header flags set", g.mode = Re;
              break;
            }
            g.head && (g.head.text = k >> 8 & 1), g.flags & 512 && (Ye[0] = k & 255, Ye[1] = k >>> 8 & 255, g.check = r(g.check, Ye, 2, 0)), k = 0, G = 0, g.mode = H;
          case H:
            for (; G < 32; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            g.head && (g.head.time = k), g.flags & 512 && (Ye[0] = k & 255, Ye[1] = k >>> 8 & 255, Ye[2] = k >>> 16 & 255, Ye[3] = k >>> 24 & 255, g.check = r(g.check, Ye, 4, 0)), k = 0, G = 0, g.mode = X;
          case X:
            for (; G < 16; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            g.head && (g.head.xflags = k & 255, g.head.os = k >> 8), g.flags & 512 && (Ye[0] = k & 255, Ye[1] = k >>> 8 & 255, g.check = r(g.check, Ye, 2, 0)), k = 0, G = 0, g.mode = J;
          case J:
            if (g.flags & 1024) {
              for (; G < 16; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              g.length = k, g.head && (g.head.extra_len = k), g.flags & 512 && (Ye[0] = k & 255, Ye[1] = k >>> 8 & 255, g.check = r(g.check, Ye, 2, 0)), k = 0, G = 0;
            } else
              g.head && (g.head.extra = null);
            g.mode = j;
          case j:
            if (g.flags & 1024 && (v = g.length, v > Y && (v = Y), v && (g.head && (Ke = g.head.extra_len - g.length, g.head.extra || (g.head.extra = new Array(g.head.extra_len)), e.arraySet(
              g.head.extra,
              fe,
              a,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              v,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              Ke
            )), g.flags & 512 && (g.check = r(g.check, fe, v, a)), Y -= v, a += v, g.length -= v), g.length))
              break e;
            g.length = 0, g.mode = W;
          case W:
            if (g.flags & 2048) {
              if (Y === 0)
                break e;
              v = 0;
              do
                Ke = fe[a + v++], g.head && Ke && g.length < 65536 && (g.head.name += String.fromCharCode(Ke));
              while (Ke && v < Y);
              if (g.flags & 512 && (g.check = r(g.check, fe, v, a)), Y -= v, a += v, Ke)
                break e;
            } else
              g.head && (g.head.name = null);
            g.length = 0, g.mode = ie;
          case ie:
            if (g.flags & 4096) {
              if (Y === 0)
                break e;
              v = 0;
              do
                Ke = fe[a + v++], g.head && Ke && g.length < 65536 && (g.head.comment += String.fromCharCode(Ke));
              while (Ke && v < Y);
              if (g.flags & 512 && (g.check = r(g.check, fe, v, a)), Y -= v, a += v, Ke)
                break e;
            } else
              g.head && (g.head.comment = null);
            g.mode = Q;
          case Q:
            if (g.flags & 512) {
              for (; G < 16; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              if (k !== (g.check & 65535)) {
                x.msg = "header crc mismatch", g.mode = Re;
                break;
              }
              k = 0, G = 0;
            }
            g.head && (g.head.hcrc = g.flags >> 9 & 1, g.head.done = !0), x.adler = g.check = 0, g.mode = m;
            break;
          case w:
            for (; G < 32; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            x.adler = g.check = Ie(k), k = 0, G = 0, g.mode = d;
          case d:
            if (g.havedict === 0)
              return x.next_out = K, x.avail_out = y, x.next_in = a, x.avail_in = Y, g.hold = k, g.bits = G, _;
            x.adler = g.check = 1, g.mode = m;
          case m:
            if (te === c || te === u)
              break e;
          case $:
            if (g.last) {
              k >>>= G & 7, G -= G & 7, g.mode = ye;
              break;
            }
            for (; G < 3; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            switch (g.last = k & 1, k >>>= 1, G -= 1, k & 3) {
              case 0:
                g.mode = M;
                break;
              case 1:
                if (ot(g), g.mode = oe, te === u) {
                  k >>>= 2, G -= 2;
                  break e;
                }
                break;
              case 2:
                g.mode = C;
                break;
              case 3:
                x.msg = "invalid block type", g.mode = Re;
            }
            k >>>= 2, G -= 2;
            break;
          case M:
            for (k >>>= G & 7, G -= G & 7; G < 32; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if ((k & 65535) !== (k >>> 16 ^ 65535)) {
              x.msg = "invalid stored block lengths", g.mode = Re;
              break;
            }
            if (g.length = k & 65535, k = 0, G = 0, g.mode = P, te === u)
              break e;
          case P:
            g.mode = F;
          case F:
            if (v = g.length, v) {
              if (v > Y && (v = Y), v > y && (v = y), v === 0)
                break e;
              e.arraySet(Oe, fe, a, v, K), Y -= v, a += v, y -= v, K += v, g.length -= v;
              break;
            }
            g.mode = m;
            break;
          case C:
            for (; G < 14; ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if (g.nlen = (k & 31) + 257, k >>>= 5, G -= 5, g.ndist = (k & 31) + 1, k >>>= 5, G -= 5, g.ncode = (k & 15) + 4, k >>>= 4, G -= 4, g.nlen > 286 || g.ndist > 30) {
              x.msg = "too many length or distance symbols", g.mode = Re;
              break;
            }
            g.have = 0, g.mode = U;
          case U:
            for (; g.have < g.ncode; ) {
              for (; G < 3; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              g.lens[Kt[g.have++]] = k & 7, k >>>= 3, G -= 3;
            }
            for (; g.have < 19; )
              g.lens[Kt[g.have++]] = 0;
            if (g.lencode = g.lendyn, g.lenbits = 7, ft = { bits: g.lenbits }, ht = o(i, g.lens, 0, 19, g.lencode, 0, g.work, ft), g.lenbits = ft.bits, ht) {
              x.msg = "invalid code lengths set", g.mode = Re;
              break;
            }
            g.have = 0, g.mode = q;
          case q:
            for (; g.have < g.nlen + g.ndist; ) {
              for (; be = g.lencode[k & (1 << g.lenbits) - 1], Le = be >>> 24, De = be >>> 16 & 255, st = be & 65535, !(Le <= G); ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              if (st < 16)
                k >>>= Le, G -= Le, g.lens[g.have++] = st;
              else {
                if (st === 16) {
                  for (bt = Le + 2; G < bt; ) {
                    if (Y === 0)
                      break e;
                    Y--, k += fe[a++] << G, G += 8;
                  }
                  if (k >>>= Le, G -= Le, g.have === 0) {
                    x.msg = "invalid bit length repeat", g.mode = Re;
                    break;
                  }
                  Ke = g.lens[g.have - 1], v = 3 + (k & 3), k >>>= 2, G -= 2;
                } else if (st === 17) {
                  for (bt = Le + 3; G < bt; ) {
                    if (Y === 0)
                      break e;
                    Y--, k += fe[a++] << G, G += 8;
                  }
                  k >>>= Le, G -= Le, Ke = 0, v = 3 + (k & 7), k >>>= 3, G -= 3;
                } else {
                  for (bt = Le + 7; G < bt; ) {
                    if (Y === 0)
                      break e;
                    Y--, k += fe[a++] << G, G += 8;
                  }
                  k >>>= Le, G -= Le, Ke = 0, v = 11 + (k & 127), k >>>= 7, G -= 7;
                }
                if (g.have + v > g.nlen + g.ndist) {
                  x.msg = "invalid bit length repeat", g.mode = Re;
                  break;
                }
                for (; v--; )
                  g.lens[g.have++] = Ke;
              }
            }
            if (g.mode === Re)
              break;
            if (g.lens[256] === 0) {
              x.msg = "invalid code -- missing end-of-block", g.mode = Re;
              break;
            }
            if (g.lenbits = 9, ft = { bits: g.lenbits }, ht = o(s, g.lens, 0, g.nlen, g.lencode, 0, g.work, ft), g.lenbits = ft.bits, ht) {
              x.msg = "invalid literal/lengths set", g.mode = Re;
              break;
            }
            if (g.distbits = 6, g.distcode = g.distdyn, ft = { bits: g.distbits }, ht = o(l, g.lens, g.nlen, g.ndist, g.distcode, 0, g.work, ft), g.distbits = ft.bits, ht) {
              x.msg = "invalid distances set", g.mode = Re;
              break;
            }
            if (g.mode = oe, te === u)
              break e;
          case oe:
            g.mode = V;
          case V:
            if (Y >= 6 && y >= 258) {
              x.next_out = K, x.avail_out = y, x.next_in = a, x.avail_in = Y, g.hold = k, g.bits = G, n(x, p), K = x.next_out, Oe = x.output, y = x.avail_out, a = x.next_in, fe = x.input, Y = x.avail_in, k = g.hold, G = g.bits, g.mode === m && (g.back = -1);
              break;
            }
            for (g.back = 0; be = g.lencode[k & (1 << g.lenbits) - 1], Le = be >>> 24, De = be >>> 16 & 255, st = be & 65535, !(Le <= G); ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if (De && !(De & 240)) {
              for (He = Le, fr = De, pr = st; be = g.lencode[pr + ((k & (1 << He + fr) - 1) >> He)], Le = be >>> 24, De = be >>> 16 & 255, st = be & 65535, !(He + Le <= G); ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              k >>>= He, G -= He, g.back += He;
            }
            if (k >>>= Le, G -= Le, g.back += Le, g.length = st, De === 0) {
              g.mode = ge;
              break;
            }
            if (De & 32) {
              g.back = -1, g.mode = m;
              break;
            }
            if (De & 64) {
              x.msg = "invalid literal/length code", g.mode = Re;
              break;
            }
            g.extra = De & 15, g.mode = ne;
          case ne:
            if (g.extra) {
              for (bt = g.extra; G < bt; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              g.length += k & (1 << g.extra) - 1, k >>>= g.extra, G -= g.extra, g.back += g.extra;
            }
            g.was = g.length, g.mode = ce;
          case ce:
            for (; be = g.distcode[k & (1 << g.distbits) - 1], Le = be >>> 24, De = be >>> 16 & 255, st = be & 65535, !(Le <= G); ) {
              if (Y === 0)
                break e;
              Y--, k += fe[a++] << G, G += 8;
            }
            if (!(De & 240)) {
              for (He = Le, fr = De, pr = st; be = g.distcode[pr + ((k & (1 << He + fr) - 1) >> He)], Le = be >>> 24, De = be >>> 16 & 255, st = be & 65535, !(He + Le <= G); ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              k >>>= He, G -= He, g.back += He;
            }
            if (k >>>= Le, G -= Le, g.back += Le, De & 64) {
              x.msg = "invalid distance code", g.mode = Re;
              break;
            }
            g.offset = st, g.extra = De & 15, g.mode = ue;
          case ue:
            if (g.extra) {
              for (bt = g.extra; G < bt; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              g.offset += k & (1 << g.extra) - 1, k >>>= g.extra, G -= g.extra, g.back += g.extra;
            }
            if (g.offset > g.dmax) {
              x.msg = "invalid distance too far back", g.mode = Re;
              break;
            }
            g.mode = Ee;
          case Ee:
            if (y === 0)
              break e;
            if (v = p - y, g.offset > v) {
              if (v = g.offset - v, v > g.whave && g.sane) {
                x.msg = "invalid distance too far back", g.mode = Re;
                break;
              }
              v > g.wnext ? (v -= g.wnext, re = g.wsize - v) : re = g.wnext - v, v > g.length && (v = g.length), he = g.window;
            } else
              he = Oe, re = K - g.offset, v = g.length;
            v > y && (v = y), y -= v, g.length -= v;
            do
              Oe[K++] = he[re++];
            while (--v);
            g.length === 0 && (g.mode = V);
            break;
          case ge:
            if (y === 0)
              break e;
            Oe[K++] = g.length, y--, g.mode = V;
            break;
          case ye:
            if (g.wrap) {
              for (; G < 32; ) {
                if (Y === 0)
                  break e;
                Y--, k |= fe[a++] << G, G += 8;
              }
              if (p -= y, x.total_out += p, g.total += p, p && (x.adler = g.check = /*UPDATE(state.check, put - _out, _out);*/
              g.flags ? r(g.check, Oe, p, K - p) : t(g.check, Oe, p, K - p)), p = y, (g.flags ? k : Ie(k)) !== g.check) {
                x.msg = "incorrect data check", g.mode = Re;
                break;
              }
              k = 0, G = 0;
            }
            g.mode = Pe;
          case Pe:
            if (g.wrap && g.flags) {
              for (; G < 32; ) {
                if (Y === 0)
                  break e;
                Y--, k += fe[a++] << G, G += 8;
              }
              if (k !== (g.total & 4294967295)) {
                x.msg = "incorrect length check", g.mode = Re;
                break;
              }
              k = 0, G = 0;
            }
            g.mode = Be;
          case Be:
            ht = b;
            break e;
          case Re:
            ht = T;
            break e;
          case I:
            return N;
          case B:
          default:
            return R;
        }
    return x.next_out = K, x.avail_out = y, x.next_in = a, x.avail_in = Y, g.hold = k, g.bits = G, (g.wsize || p !== x.avail_out && g.mode < Re && (g.mode < ye || te !== f)) && ct(x, x.output, x.next_out, p - x.avail_out), ve -= x.avail_in, p -= x.avail_out, x.total_in += ve, x.total_out += p, g.total += p, g.wrap && p && (x.adler = g.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    g.flags ? r(g.check, Oe, p, x.next_out - p) : t(g.check, Oe, p, x.next_out - p)), x.data_type = g.bits + (g.last ? 64 : 0) + (g.mode === m ? 128 : 0) + (g.mode === oe || g.mode === P ? 256 : 0), (ve === 0 && p === 0 || te === f) && ht === h && (ht = D), ht;
  }
  function ae(x) {
    if (!x || !x.state)
      return R;
    var te = x.state;
    return te.window && (te.window = null), x.state = null, h;
  }
  function de(x, te) {
    var g;
    return !x || !x.state || (g = x.state, !(g.wrap & 2)) ? R : (g.head = te, te.done = !1, h);
  }
  function we(x, te) {
    var g = te.length, fe, Oe, a;
    return !x || !x.state || (fe = x.state, fe.wrap !== 0 && fe.mode !== d) ? R : fe.mode === d && (Oe = 1, Oe = t(Oe, te, g, 0), Oe !== fe.check) ? T : (a = ct(x, te, g, g), a ? (fe.mode = I, N) : (fe.havedict = 1, h));
  }
  return kt.inflateReset = me, kt.inflateReset2 = je, kt.inflateResetKeep = ke, kt.inflateInit = Ze, kt.inflateInit2 = nt, kt.inflate = E, kt.inflateEnd = ae, kt.inflateGetHeader = de, kt.inflateSetDictionary = we, kt.inflateInfo = "pako inflate (from Nodeca project)", kt;
}
var as, Bc;
function Nv() {
  return Bc || (Bc = 1, as = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), as;
}
var $c;
function Pv() {
  return $c || ($c = 1, function(e) {
    var t = Jc(), r = Rv(), n = Tv(), o = Cv(), i = Nv();
    for (var s in i)
      e[s] = i[s];
    e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7;
    var l = 31, f = 139;
    function c(u) {
      if (typeof u != "number" || u < e.DEFLATE || u > e.UNZIP)
        throw new TypeError("Bad argument");
      this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = u, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0;
    }
    c.prototype.close = function() {
      if (this.write_in_progress) {
        this.pending_close = !0;
        return;
      }
      this.pending_close = !1, t(this.init_done, "close before init"), t(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? n.deflateEnd(this.strm) : (this.mode === e.INFLATE || this.mode === e.GUNZIP || this.mode === e.INFLATERAW || this.mode === e.UNZIP) && o.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null;
    }, c.prototype.write = function(u, h, b, _, R, T, N) {
      return this._write(!0, u, h, b, _, R, T, N);
    }, c.prototype.writeSync = function(u, h, b, _, R, T, N) {
      return this._write(!1, u, h, b, _, R, T, N);
    }, c.prototype._write = function(u, h, b, _, R, T, N, D) {
      if (t.equal(arguments.length, 8), t(this.init_done, "write before init"), t(this.mode !== e.NONE, "already finalized"), t.equal(!1, this.write_in_progress, "write already in progress"), t.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, t.equal(!1, h === void 0, "must provide flush value"), this.write_in_progress = !0, h !== e.Z_NO_FLUSH && h !== e.Z_PARTIAL_FLUSH && h !== e.Z_SYNC_FLUSH && h !== e.Z_FULL_FLUSH && h !== e.Z_FINISH && h !== e.Z_BLOCK)
        throw new Error("Invalid flush value");
      if (b == null && (b = pe.Buffer.alloc(0), R = 0, _ = 0), this.strm.avail_in = R, this.strm.input = b, this.strm.next_in = _, this.strm.avail_out = D, this.strm.output = T, this.strm.next_out = N, this.flush = h, !u)
        return this._process(), this._checkError() ? this._afterSync() : void 0;
      var L = this;
      return pe.process.nextTick(function() {
        L._process(), L._after();
      }), this;
    }, c.prototype._afterSync = function() {
      var u = this.strm.avail_out, h = this.strm.avail_in;
      return this.write_in_progress = !1, [h, u];
    }, c.prototype._process = function() {
      var u = null;
      switch (this.mode) {
        case e.DEFLATE:
        case e.GZIP:
        case e.DEFLATERAW:
          this.err = n.deflate(this.strm, this.flush);
          break;
        case e.UNZIP:
          switch (this.strm.avail_in > 0 && (u = this.strm.next_in), this.gzip_id_bytes_read) {
            case 0:
              if (u === null)
                break;
              if (this.strm.input[u] === l) {
                if (this.gzip_id_bytes_read = 1, u++, this.strm.avail_in === 1)
                  break;
              } else {
                this.mode = e.INFLATE;
                break;
              }
            case 1:
              if (u === null)
                break;
              this.strm.input[u] === f ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;
              break;
            default:
              throw new Error("invalid number of gzip magic number bytes read");
          }
        case e.INFLATE:
        case e.GUNZIP:
        case e.INFLATERAW:
          for (this.err = o.inflate(
            this.strm,
            this.flush
            // If data was encoded with dictionary
          ), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = o.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = o.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && this.strm.next_in[0] !== 0; )
            this.reset(), this.err = o.inflate(this.strm, this.flush);
          break;
        default:
          throw new Error("Unknown mode " + this.mode);
      }
    }, c.prototype._checkError = function() {
      switch (this.err) {
        case e.Z_OK:
        case e.Z_BUF_ERROR:
          if (this.strm.avail_out !== 0 && this.flush === e.Z_FINISH)
            return this._error("unexpected end of file"), !1;
          break;
        case e.Z_STREAM_END:
          break;
        case e.Z_NEED_DICT:
          return this.dictionary == null ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;
        default:
          return this._error("Zlib error"), !1;
      }
      return !0;
    }, c.prototype._after = function() {
      if (this._checkError()) {
        var u = this.strm.avail_out, h = this.strm.avail_in;
        this.write_in_progress = !1, this.callback(h, u), this.pending_close && this.close();
      }
    }, c.prototype._error = function(u) {
      this.strm.msg && (u = this.strm.msg), this.onerror(
        u,
        this.err
        // no hope of rescue.
      ), this.write_in_progress = !1, this.pending_close && this.close();
    }, c.prototype.init = function(u, h, b, _, R) {
      t(arguments.length === 4 || arguments.length === 5, "init(windowBits, level, memLevel, strategy, [dictionary])"), t(u >= 8 && u <= 15, "invalid windowBits"), t(h >= -1 && h <= 9, "invalid compression level"), t(b >= 1 && b <= 9, "invalid memlevel"), t(_ === e.Z_FILTERED || _ === e.Z_HUFFMAN_ONLY || _ === e.Z_RLE || _ === e.Z_FIXED || _ === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(h, u, b, _, R), this._setDictionary();
    }, c.prototype.params = function() {
      throw new Error("deflateParams Not supported");
    }, c.prototype.reset = function() {
      this._reset(), this._setDictionary();
    }, c.prototype._init = function(u, h, b, _, R) {
      switch (this.level = u, this.windowBits = h, this.memLevel = b, this.strategy = _, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, (this.mode === e.GZIP || this.mode === e.GUNZIP) && (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), (this.mode === e.DEFLATERAW || this.mode === e.INFLATERAW) && (this.windowBits = -1 * this.windowBits), this.strm = new r(), this.mode) {
        case e.DEFLATE:
        case e.GZIP:
        case e.DEFLATERAW:
          this.err = n.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
          break;
        case e.INFLATE:
        case e.GUNZIP:
        case e.INFLATERAW:
        case e.UNZIP:
          this.err = o.inflateInit2(this.strm, this.windowBits);
          break;
        default:
          throw new Error("Unknown mode " + this.mode);
      }
      this.err !== e.Z_OK && this._error("Init error"), this.dictionary = R, this.write_in_progress = !1, this.init_done = !0;
    }, c.prototype._setDictionary = function() {
      if (this.dictionary != null) {
        switch (this.err = e.Z_OK, this.mode) {
          case e.DEFLATE:
          case e.DEFLATERAW:
            this.err = n.deflateSetDictionary(this.strm, this.dictionary);
            break;
        }
        this.err !== e.Z_OK && this._error("Failed to set dictionary");
      }
    }, c.prototype._reset = function() {
      switch (this.err = e.Z_OK, this.mode) {
        case e.DEFLATE:
        case e.DEFLATERAW:
        case e.GZIP:
          this.err = n.deflateReset(this.strm);
          break;
        case e.INFLATE:
        case e.INFLATERAW:
        case e.GUNZIP:
          this.err = o.inflateReset(this.strm);
          break;
      }
      this.err !== e.Z_OK && this._error("Failed to reset stream");
    }, e.Zlib = c;
  }(Qo)), Qo;
}
var kc;
function Bv() {
  return kc || (kc = 1, function(e) {
    var t = or.Buffer, r = $h().Transform, n = Pv(), o = Xc, i = Jc().ok, s = or.kMaxLength, l = "Cannot create final Buffer. It would be larger than 0x" + s.toString(16) + " bytes";
    n.Z_MIN_WINDOWBITS = 8, n.Z_MAX_WINDOWBITS = 15, n.Z_DEFAULT_WINDOWBITS = 15, n.Z_MIN_CHUNK = 64, n.Z_MAX_CHUNK = 1 / 0, n.Z_DEFAULT_CHUNK = 16 * 1024, n.Z_MIN_MEMLEVEL = 1, n.Z_MAX_MEMLEVEL = 9, n.Z_DEFAULT_MEMLEVEL = 8, n.Z_MIN_LEVEL = -1, n.Z_MAX_LEVEL = 9, n.Z_DEFAULT_LEVEL = n.Z_DEFAULT_COMPRESSION;
    for (var f = Object.keys(n), c = 0; c < f.length; c++) {
      var u = f[c];
      u.match(/^Z/) && Object.defineProperty(e, u, {
        enumerable: !0,
        value: n[u],
        writable: !1
      });
    }
    for (var h = {
      Z_OK: n.Z_OK,
      Z_STREAM_END: n.Z_STREAM_END,
      Z_NEED_DICT: n.Z_NEED_DICT,
      Z_ERRNO: n.Z_ERRNO,
      Z_STREAM_ERROR: n.Z_STREAM_ERROR,
      Z_DATA_ERROR: n.Z_DATA_ERROR,
      Z_MEM_ERROR: n.Z_MEM_ERROR,
      Z_BUF_ERROR: n.Z_BUF_ERROR,
      Z_VERSION_ERROR: n.Z_VERSION_ERROR
    }, b = Object.keys(h), _ = 0; _ < b.length; _++) {
      var R = b[_];
      h[h[R]] = R;
    }
    Object.defineProperty(e, "codes", {
      enumerable: !0,
      value: Object.freeze(h),
      writable: !1
    }), e.Deflate = D, e.Inflate = L, e.Gzip = O, e.Gunzip = S, e.DeflateRaw = H, e.InflateRaw = X, e.Unzip = J, e.createDeflate = function(w) {
      return new D(w);
    }, e.createInflate = function(w) {
      return new L(w);
    }, e.createDeflateRaw = function(w) {
      return new H(w);
    }, e.createInflateRaw = function(w) {
      return new X(w);
    }, e.createGzip = function(w) {
      return new O(w);
    }, e.createGunzip = function(w) {
      return new S(w);
    }, e.createUnzip = function(w) {
      return new J(w);
    }, e.deflate = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new D(d), w, m);
    }, e.deflateSync = function(w, d) {
      return N(new D(d), w);
    }, e.gzip = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new O(d), w, m);
    }, e.gzipSync = function(w, d) {
      return N(new O(d), w);
    }, e.deflateRaw = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new H(d), w, m);
    }, e.deflateRawSync = function(w, d) {
      return N(new H(d), w);
    }, e.unzip = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new J(d), w, m);
    }, e.unzipSync = function(w, d) {
      return N(new J(d), w);
    }, e.inflate = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new L(d), w, m);
    }, e.inflateSync = function(w, d) {
      return N(new L(d), w);
    }, e.gunzip = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new S(d), w, m);
    }, e.gunzipSync = function(w, d) {
      return N(new S(d), w);
    }, e.inflateRaw = function(w, d, m) {
      return typeof d == "function" && (m = d, d = {}), T(new X(d), w, m);
    }, e.inflateRawSync = function(w, d) {
      return N(new X(d), w);
    };
    function T(w, d, m) {
      var $ = [], M = 0;
      w.on("error", F), w.on("end", C), w.end(d), P();
      function P() {
        for (var U; (U = w.read()) !== null; )
          $.push(U), M += U.length;
        w.once("readable", P);
      }
      function F(U) {
        w.removeListener("end", C), w.removeListener("readable", P), m(U);
      }
      function C() {
        var U, q = null;
        M >= s ? q = new RangeError(l) : U = t.concat($, M), $ = [], w.close(), m(q, U);
      }
    }
    function N(w, d) {
      if (typeof d == "string" && (d = t.from(d)), !t.isBuffer(d))
        throw new TypeError("Not a string or buffer");
      var m = w._finishFlushFlag;
      return w._processChunk(d, m);
    }
    function D(w) {
      if (!(this instanceof D))
        return new D(w);
      W.call(this, w, n.DEFLATE);
    }
    function L(w) {
      if (!(this instanceof L))
        return new L(w);
      W.call(this, w, n.INFLATE);
    }
    function O(w) {
      if (!(this instanceof O))
        return new O(w);
      W.call(this, w, n.GZIP);
    }
    function S(w) {
      if (!(this instanceof S))
        return new S(w);
      W.call(this, w, n.GUNZIP);
    }
    function H(w) {
      if (!(this instanceof H))
        return new H(w);
      W.call(this, w, n.DEFLATERAW);
    }
    function X(w) {
      if (!(this instanceof X))
        return new X(w);
      W.call(this, w, n.INFLATERAW);
    }
    function J(w) {
      if (!(this instanceof J))
        return new J(w);
      W.call(this, w, n.UNZIP);
    }
    function j(w) {
      return w === n.Z_NO_FLUSH || w === n.Z_PARTIAL_FLUSH || w === n.Z_SYNC_FLUSH || w === n.Z_FULL_FLUSH || w === n.Z_FINISH || w === n.Z_BLOCK;
    }
    function W(w, d) {
      var m = this;
      if (this._opts = w = w || {}, this._chunkSize = w.chunkSize || e.Z_DEFAULT_CHUNK, r.call(this, w), w.flush && !j(w.flush))
        throw new Error("Invalid flush flag: " + w.flush);
      if (w.finishFlush && !j(w.finishFlush))
        throw new Error("Invalid flush flag: " + w.finishFlush);
      if (this._flushFlag = w.flush || n.Z_NO_FLUSH, this._finishFlushFlag = typeof w.finishFlush < "u" ? w.finishFlush : n.Z_FINISH, w.chunkSize && (w.chunkSize < e.Z_MIN_CHUNK || w.chunkSize > e.Z_MAX_CHUNK))
        throw new Error("Invalid chunk size: " + w.chunkSize);
      if (w.windowBits && (w.windowBits < e.Z_MIN_WINDOWBITS || w.windowBits > e.Z_MAX_WINDOWBITS))
        throw new Error("Invalid windowBits: " + w.windowBits);
      if (w.level && (w.level < e.Z_MIN_LEVEL || w.level > e.Z_MAX_LEVEL))
        throw new Error("Invalid compression level: " + w.level);
      if (w.memLevel && (w.memLevel < e.Z_MIN_MEMLEVEL || w.memLevel > e.Z_MAX_MEMLEVEL))
        throw new Error("Invalid memLevel: " + w.memLevel);
      if (w.strategy && w.strategy != e.Z_FILTERED && w.strategy != e.Z_HUFFMAN_ONLY && w.strategy != e.Z_RLE && w.strategy != e.Z_FIXED && w.strategy != e.Z_DEFAULT_STRATEGY)
        throw new Error("Invalid strategy: " + w.strategy);
      if (w.dictionary && !t.isBuffer(w.dictionary))
        throw new Error("Invalid dictionary: it should be a Buffer instance");
      this._handle = new n.Zlib(d);
      var $ = this;
      this._hadError = !1, this._handle.onerror = function(F, C) {
        ie($), $._hadError = !0;
        var U = new Error(F);
        U.errno = C, U.code = e.codes[C], $.emit("error", U);
      };
      var M = e.Z_DEFAULT_COMPRESSION;
      typeof w.level == "number" && (M = w.level);
      var P = e.Z_DEFAULT_STRATEGY;
      typeof w.strategy == "number" && (P = w.strategy), this._handle.init(w.windowBits || e.Z_DEFAULT_WINDOWBITS, M, w.memLevel || e.Z_DEFAULT_MEMLEVEL, P, w.dictionary), this._buffer = t.allocUnsafe(this._chunkSize), this._offset = 0, this._level = M, this._strategy = P, this.once("end", this.close), Object.defineProperty(this, "_closed", {
        get: function() {
          return !m._handle;
        },
        configurable: !0,
        enumerable: !0
      });
    }
    o.inherits(W, r), W.prototype.params = function(w, d, m) {
      if (w < e.Z_MIN_LEVEL || w > e.Z_MAX_LEVEL)
        throw new RangeError("Invalid compression level: " + w);
      if (d != e.Z_FILTERED && d != e.Z_HUFFMAN_ONLY && d != e.Z_RLE && d != e.Z_FIXED && d != e.Z_DEFAULT_STRATEGY)
        throw new TypeError("Invalid strategy: " + d);
      if (this._level !== w || this._strategy !== d) {
        var $ = this;
        this.flush(n.Z_SYNC_FLUSH, function() {
          i($._handle, "zlib binding closed"), $._handle.params(w, d), $._hadError || ($._level = w, $._strategy = d, m && m());
        });
      } else
        pe.process.nextTick(m);
    }, W.prototype.reset = function() {
      return i(this._handle, "zlib binding closed"), this._handle.reset();
    }, W.prototype._flush = function(w) {
      this._transform(t.alloc(0), "", w);
    }, W.prototype.flush = function(w, d) {
      var m = this, $ = this._writableState;
      (typeof w == "function" || w === void 0 && !d) && (d = w, w = n.Z_FULL_FLUSH), $.ended ? d && pe.process.nextTick(d) : $.ending ? d && this.once("end", d) : $.needDrain ? d && this.once("drain", function() {
        return m.flush(w, d);
      }) : (this._flushFlag = w, this.write(t.alloc(0), "", d));
    }, W.prototype.close = function(w) {
      ie(this, w), pe.process.nextTick(Q, this);
    };
    function ie(w, d) {
      d && pe.process.nextTick(d), w._handle && (w._handle.close(), w._handle = null);
    }
    function Q(w) {
      w.emit("close");
    }
    W.prototype._transform = function(w, d, m) {
      var $, M = this._writableState, P = M.ending || M.ended, F = P && (!w || M.length === w.length);
      if (w !== null && !t.isBuffer(w))
        return m(new Error("invalid input"));
      if (!this._handle)
        return m(new Error("zlib binding closed"));
      F ? $ = this._finishFlushFlag : ($ = this._flushFlag, w.length >= M.length && (this._flushFlag = this._opts.flush || n.Z_NO_FLUSH)), this._processChunk(w, $, m);
    }, W.prototype._processChunk = function(w, d, m) {
      var $ = w && w.length, M = this._chunkSize - this._offset, P = 0, F = this, C = typeof m == "function";
      if (!C) {
        var U = [], q = 0, oe;
        this.on("error", function(Ee) {
          oe = Ee;
        }), i(this._handle, "zlib binding closed");
        do
          var V = this._handle.writeSync(
            d,
            w,
            // in
            P,
            // in_off
            $,
            // in_len
            this._buffer,
            // out
            this._offset,
            //out_off
            M
          );
        while (!this._hadError && ue(V[0], V[1]));
        if (this._hadError)
          throw oe;
        if (q >= s)
          throw ie(this), new RangeError(l);
        var ne = t.concat(U, q);
        return ie(this), ne;
      }
      i(this._handle, "zlib binding closed");
      var ce = this._handle.write(
        d,
        w,
        // in
        P,
        // in_off
        $,
        // in_len
        this._buffer,
        // out
        this._offset,
        //out_off
        M
      );
      ce.buffer = w, ce.callback = ue;
      function ue(Ee, ge) {
        if (this && (this.buffer = null, this.callback = null), !F._hadError) {
          var ye = M - ge;
          if (i(ye >= 0, "have should not go down"), ye > 0) {
            var Pe = F._buffer.slice(F._offset, F._offset + ye);
            F._offset += ye, C ? F.push(Pe) : (U.push(Pe), q += Pe.length);
          }
          if ((ge === 0 || F._offset >= F._chunkSize) && (M = F._chunkSize, F._offset = 0, F._buffer = t.allocUnsafe(F._chunkSize)), ge === 0) {
            if (P += $ - Ee, $ = Ee, !C)
              return !0;
            var Be = F._handle.write(d, w, P, $, F._buffer, F._offset, F._chunkSize);
            Be.callback = ue, Be.buffer = w;
            return;
          }
          if (!C)
            return !1;
          m();
        }
      }
    }, o.inherits(D, W), o.inherits(L, W), o.inherits(O, W), o.inherits(S, W), o.inherits(H, W), o.inherits(X, W), o.inherits(J, W);
  }(Yo)), Yo;
}
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.InvalidStatusCodeError = Mr.InvalidCertError = void 0;
const Ud = Object.freeze({
  redirect: !0,
  expectStatusCode: 200,
  headers: {},
  full: !1,
  keepAlive: !0,
  cors: !1,
  referrer: !1,
  sslAllowSelfSigned: !1,
  _redirectCount: 0
});
class ks extends Error {
  constructor(t, r) {
    super(t), this.fingerprint256 = r;
  }
}
Mr.InvalidCertError = ks;
class Ca extends Error {
  constructor(t) {
    super(`Request Failed. Status Code: ${t}`), this.statusCode = t;
  }
}
Mr.InvalidStatusCodeError = Ca;
function Hd(e, t) {
  if (!t || t === "text" || t === "json")
    try {
      let r = new TextDecoder("utf8", { fatal: !0 }).decode(e);
      if (t === "text")
        return r;
      try {
        return JSON.parse(r);
      } catch (n) {
        if (t === "json")
          throw n;
        return r;
      }
    } catch (r) {
      if (t === "text" || t === "json")
        throw r;
    }
  return e;
}
let Dc = {};
function Ds(e, t) {
  var b;
  let r = { ...Ud, ...t };
  const n = Dh, o = xh, i = Bv(), { promisify: s } = Xc, { resolve: l } = Mh, f = !!/^https/.test(e);
  let c = {
    method: r.method || "GET",
    headers: { "Accept-Encoding": "gzip, deflate, br" }
  };
  const u = (_) => _.replace(/:| /g, "").toLowerCase();
  if (r.keepAlive) {
    const _ = {
      keepAlive: !0,
      keepAliveMsecs: 3e4,
      maxFreeSockets: 1024,
      maxCachedSessions: 1024
    }, R = [
      f,
      f && ((b = r.sslPinnedCertificates) == null ? void 0 : b.map((T) => u(T)).sort())
    ].join();
    c.agent = Dc[R] || (Dc[R] = new (f ? o : n).Agent(_));
  }
  r.type === "json" && (c.headers["Content-Type"] = "application/json"), r.data && (r.method || (c.method = "POST"), c.body = r.type === "json" ? JSON.stringify(r.data) : r.data), c.headers = { ...c.headers, ...r.headers }, r.sslAllowSelfSigned && (c.rejectUnauthorized = !1);
  const h = async (_) => {
    const R = _.statusCode;
    if (r.redirect && 300 <= R && R < 400 && _.headers.location) {
      if (r._redirectCount == 10)
        throw new Error("Request failed. Too much redirects.");
      return r._redirectCount += 1, await Ds(l(e, _.headers.location), r);
    }
    if (r.expectStatusCode && R !== r.expectStatusCode)
      throw _.resume(), new Ca(R);
    let T = [];
    for await (const O of _)
      T.push(O);
    let N = pe.Buffer.concat(T);
    const D = _.headers["content-encoding"];
    D === "br" && (N = await s(i.brotliDecompress)(N)), (D === "gzip" || D === "deflate") && (N = await s(i.unzip)(N));
    const L = Hd(N, r.type);
    return r.full ? { headers: _.headers, status: R, body: L } : L;
  };
  return new Promise((_, R) => {
    var O;
    const T = async (S) => {
      if (S && S.code === "DEPTH_ZERO_SELF_SIGNED_CERT")
        try {
          await Ds(e, { ...r, sslAllowSelfSigned: !0, sslPinnedCertificates: [] });
        } catch (H) {
          H && H.fingerprint256 && (S = new ks(`Self-signed SSL certificate: ${H.fingerprint256}`, H.fingerprint256));
        }
      R(S);
    }, N = (f ? o : n).request(e, c, (S) => {
      S.on("error", T), (async () => {
        try {
          _(await h(S));
        } catch (H) {
          R(H);
        }
      })();
    });
    N.on("error", T);
    const D = (O = r.sslPinnedCertificates) == null ? void 0 : O.map((S) => u(S)), L = (S) => {
      var X;
      const H = u(((X = S.getPeerCertificate()) == null ? void 0 : X.fingerprint256) || "");
      if (!(!H && S.isSessionReused()) && !D.includes(H))
        return N.emit("error", new ks(`Invalid SSL certificate: ${H} Expected: ${D}`, H)), N.abort();
    };
    r.sslPinnedCertificates && N.on("socket", (S) => {
      S.listeners("secureConnect").map((X) => (X.name || "").replace("bound ", "")).includes("mfetchSecureConnect") || S.on("secureConnect", L.bind(null, S));
    }), r.keepAlive && N.setNoDelay(!0), c.body && N.write(c.body), N.end();
  });
}
const $v = new Set(["Accept", "Accept-Language", "Content-Language", "Content-Type"].map((e) => e.toLowerCase())), kv = new Set([
  "Accept-Charset",
  "Accept-Encoding",
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Connection",
  "Content-Length",
  "Cookie",
  "Cookie2",
  "Date",
  "DNT",
  "Expect",
  "Host",
  "Keep-Alive",
  "Origin",
  "Referer",
  "TE",
  "Trailer",
  "Transfer-Encoding",
  "Upgrade",
  "Via"
].map((e) => e.toLowerCase()));
async function Dv(e, t) {
  let r = { ...Ud, ...t };
  const n = new Headers();
  r.type === "json" && n.set("Content-Type", "application/json");
  let o = new URL(e);
  if (o.username) {
    const f = btoa(`${o.username}:${o.password}`);
    n.set("Authorization", `Basic ${f}`), o.username = "", o.password = "";
  }
  e = "" + o;
  for (let f in r.headers) {
    const c = f.toLowerCase();
    ($v.has(c) || r.cors && !kv.has(c)) && n.set(f, r.headers[f]);
  }
  let i = { headers: n, redirect: r.redirect ? "follow" : "manual" };
  r.referrer || (i.referrerPolicy = "no-referrer"), r.cors && (i.mode = "cors"), r.data && (r.method || (i.method = "POST"), i.body = r.type === "json" ? JSON.stringify(r.data) : r.data);
  const s = await fetch(e, i);
  if (r.expectStatusCode && s.status !== r.expectStatusCode)
    throw new Ca(s.status);
  const l = Hd(new Uint8Array(await s.arrayBuffer()), r.type);
  return r.full ? { headers: Object.fromEntries(s.headers.entries()), status: s.status, body: l } : l;
}
const xv = !!(typeof pe.process == "object" && pe.process.versions && pe.process.versions.node && pe.process.versions.v8);
function Mv(e, t) {
  return (xv ? Ds : Dv)(e, t);
}
Mr.default = Mv;
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.getProvider = fn.fetchFromProvider = void 0;
const jv = Mr, Fv = async (e, t) => (await (0, jv.default)(e, {
  headers: {
    "content-type": "application/json"
  },
  type: "json",
  data: {
    method: t.method,
    params: t.params,
    jsonrpc: "2.0",
    id: 1
  }
})).result;
fn.fetchFromProvider = Fv;
const Uv = (e) => {
  var t;
  if (typeof e == "string")
    return e;
  if (((t = e == null ? void 0 : e.connection) == null ? void 0 : t.url) !== void 0)
    return e.connection.url;
  throw new Error("Must provide valid provider URL or Web3Provider");
};
fn.getProvider = Uv;
(function(e) {
  var t = Qe && Qe.__createBinding || (Object.create ? function(o, i, s, l) {
    l === void 0 && (l = s);
    var f = Object.getOwnPropertyDescriptor(i, s);
    (!f || ("get" in f ? !i.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(o, l, f);
  } : function(o, i, s, l) {
    l === void 0 && (l = s), o[l] = i[s];
  }), r = Qe && Qe.__exportStar || function(o, i) {
    for (var s in o)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, o, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.toAscii = e.stripHexPrefix = e.padToEven = e.isHexString = e.isHexPrefixed = e.getKeys = e.getBinarySize = e.fromUtf8 = e.fromAscii = e.arrayContainsArray = void 0, r(Zi, e), r(eo, e), r(Ia, e), r(Kn, e), r(ro, e), r(wt, e), r(Vr, e), r(La, e), r(Md, e), r(oo, e);
  var n = qe;
  Object.defineProperty(e, "arrayContainsArray", { enumerable: !0, get: function() {
    return n.arrayContainsArray;
  } }), Object.defineProperty(e, "fromAscii", { enumerable: !0, get: function() {
    return n.fromAscii;
  } }), Object.defineProperty(e, "fromUtf8", { enumerable: !0, get: function() {
    return n.fromUtf8;
  } }), Object.defineProperty(e, "getBinarySize", { enumerable: !0, get: function() {
    return n.getBinarySize;
  } }), Object.defineProperty(e, "getKeys", { enumerable: !0, get: function() {
    return n.getKeys;
  } }), Object.defineProperty(e, "isHexPrefixed", { enumerable: !0, get: function() {
    return n.isHexPrefixed;
  } }), Object.defineProperty(e, "isHexString", { enumerable: !0, get: function() {
    return n.isHexString;
  } }), Object.defineProperty(e, "padToEven", { enumerable: !0, get: function() {
    return n.padToEven;
  } }), Object.defineProperty(e, "stripHexPrefix", { enumerable: !0, get: function() {
    return n.stripHexPrefix;
  } }), Object.defineProperty(e, "toAscii", { enumerable: !0, get: function() {
    return n.toAscii;
  } }), r(so, e), r(fn, e);
})(Wm);
var zd = { exports: {} };
(function(e) {
  (function(t, r) {
    e.exports ? e.exports = r() : t.log = r();
  })(Qe, function() {
    var t = function() {
    }, r = "undefined", n = typeof window !== r && typeof window.navigator !== r && /Trident\/|MSIE /.test(window.navigator.userAgent), o = [
      "trace",
      "debug",
      "info",
      "warn",
      "error"
    ], i = {}, s = null;
    function l(T, N) {
      var D = T[N];
      if (typeof D.bind == "function")
        return D.bind(T);
      try {
        return Function.prototype.bind.call(D, T);
      } catch {
        return function() {
          return Function.prototype.apply.apply(D, [T, arguments]);
        };
      }
    }
    function f() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function c(T) {
      return T === "debug" && (T = "log"), typeof console === r ? !1 : T === "trace" && n ? f : console[T] !== void 0 ? l(console, T) : console.log !== void 0 ? l(console, "log") : t;
    }
    function u() {
      for (var T = this.getLevel(), N = 0; N < o.length; N++) {
        var D = o[N];
        this[D] = N < T ? t : this.methodFactory(D, T, this.name);
      }
      if (this.log = this.debug, typeof console === r && T < this.levels.SILENT)
        return "No console available for logging";
    }
    function h(T) {
      return function() {
        typeof console !== r && (u.call(this), this[T].apply(this, arguments));
      };
    }
    function b(T, N, D) {
      return c(T) || h.apply(this, arguments);
    }
    function _(T, N) {
      var D = this, L, O, S, H = "loglevel";
      typeof T == "string" ? H += ":" + T : typeof T == "symbol" && (H = void 0);
      function X(Q) {
        var w = (o[Q] || "silent").toUpperCase();
        if (!(typeof window === r || !H)) {
          try {
            window.localStorage[H] = w;
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(H) + "=" + w + ";";
          } catch {
          }
        }
      }
      function J() {
        var Q;
        if (!(typeof window === r || !H)) {
          try {
            Q = window.localStorage[H];
          } catch {
          }
          if (typeof Q === r)
            try {
              var w = window.document.cookie, d = encodeURIComponent(H), m = w.indexOf(d + "=");
              m !== -1 && (Q = /^([^;]+)/.exec(
                w.slice(m + d.length + 1)
              )[1]);
            } catch {
            }
          return D.levels[Q] === void 0 && (Q = void 0), Q;
        }
      }
      function j() {
        if (!(typeof window === r || !H)) {
          try {
            window.localStorage.removeItem(H);
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(H) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {
          }
        }
      }
      function W(Q) {
        var w = Q;
        if (typeof w == "string" && D.levels[w.toUpperCase()] !== void 0 && (w = D.levels[w.toUpperCase()]), typeof w == "number" && w >= 0 && w <= D.levels.SILENT)
          return w;
        throw new TypeError("log.setLevel() called with invalid level: " + Q);
      }
      D.name = T, D.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, D.methodFactory = N || b, D.getLevel = function() {
        return S ?? O ?? L;
      }, D.setLevel = function(Q, w) {
        return S = W(Q), w !== !1 && X(S), u.call(D);
      }, D.setDefaultLevel = function(Q) {
        O = W(Q), J() || D.setLevel(Q, !1);
      }, D.resetLevel = function() {
        S = null, j(), u.call(D);
      }, D.enableAll = function(Q) {
        D.setLevel(D.levels.TRACE, Q);
      }, D.disableAll = function(Q) {
        D.setLevel(D.levels.SILENT, Q);
      }, D.rebuild = function() {
        if (s !== D && (L = W(s.getLevel())), u.call(D), s === D)
          for (var Q in i)
            i[Q].rebuild();
      }, L = W(
        s ? s.getLevel() : "WARN"
      );
      var ie = J();
      ie != null && (S = W(ie)), u.call(D);
    }
    s = new _(), s.getLogger = function(N) {
      if (typeof N != "symbol" && typeof N != "string" || N === "")
        throw new TypeError("You must supply a name when creating a logger.");
      var D = i[N];
      return D || (D = i[N] = new _(
        N,
        s.methodFactory
      )), D;
    };
    var R = typeof window !== r ? window.log : void 0;
    return s.noConflict = function() {
      return typeof window !== r && window.log === s && (window.log = R), s;
    }, s.getLoggers = function() {
      return i;
    }, s.default = s, s;
  });
})(zd);
var Wd = zd.exports;
const Si = /* @__PURE__ */ Ir(Wd);
var Ri = { exports: {} };
Ri.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, s = 9007199254740991, l = "[object Arguments]", f = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", h = "[object Date]", b = "[object Error]", _ = "[object Function]", R = "[object GeneratorFunction]", T = "[object Map]", N = "[object Number]", D = "[object Null]", L = "[object Object]", O = "[object Proxy]", S = "[object RegExp]", H = "[object Set]", X = "[object String]", J = "[object Undefined]", j = "[object WeakMap]", W = "[object ArrayBuffer]", ie = "[object DataView]", Q = "[object Float32Array]", w = "[object Float64Array]", d = "[object Int8Array]", m = "[object Int16Array]", $ = "[object Int32Array]", M = "[object Uint8Array]", P = "[object Uint8ClampedArray]", F = "[object Uint16Array]", C = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, q = /^\[object .+?Constructor\]$/, oe = /^(?:0|[1-9]\d*)$/, V = {};
  V[Q] = V[w] = V[d] = V[m] = V[$] = V[M] = V[P] = V[F] = V[C] = !0, V[l] = V[f] = V[W] = V[u] = V[ie] = V[h] = V[b] = V[_] = V[T] = V[N] = V[L] = V[S] = V[H] = V[X] = V[j] = !1;
  var ne = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, ce = typeof self == "object" && self && self.Object === Object && self, ue = ne || ce || Function("return this")(), Ee = t && !t.nodeType && t, ge = Ee && !0 && e && !e.nodeType && e, ye = ge && ge.exports === Ee, Pe = ye && ne.process, Be = function() {
    try {
      var A = ge && ge.require && ge.require("util").types;
      return A || Pe && Pe.binding && Pe.binding("util");
    } catch {
    }
  }(), Re = Be && Be.isTypedArray;
  function I(A, z, ee) {
    switch (ee.length) {
      case 0:
        return A.call(z);
      case 1:
        return A.call(z, ee[0]);
      case 2:
        return A.call(z, ee[0], ee[1]);
      case 3:
        return A.call(z, ee[0], ee[1], ee[2]);
    }
    return A.apply(z, ee);
  }
  function B(A, z) {
    for (var ee = -1, Se = Array(A); ++ee < A; )
      Se[ee] = z(ee);
    return Se;
  }
  function Z(A) {
    return function(z) {
      return A(z);
    };
  }
  function le(A, z) {
    return A == null ? void 0 : A[z];
  }
  function se(A, z) {
    return function(ee) {
      return A(z(ee));
    };
  }
  var _e = Array.prototype, Ie = Function.prototype, Te = Object.prototype, ke = ue["__core-js_shared__"], me = Ie.toString, je = Te.hasOwnProperty, nt = function() {
    var A = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
    return A ? "Symbol(src)_1." + A : "";
  }(), Ze = Te.toString, Rt = me.call(Object), it = RegExp(
    "^" + me.call(je).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ue = ye ? ue.Buffer : void 0, ot = ue.Symbol, ct = ue.Uint8Array;
  Ue && Ue.allocUnsafe;
  var E = se(Object.getPrototypeOf, Object), ae = Object.create, de = Te.propertyIsEnumerable, we = _e.splice, x = ot ? ot.toStringTag : void 0, te = function() {
    try {
      var A = go(Object, "defineProperty");
      return A({}, "", {}), A;
    } catch {
    }
  }(), g = Ue ? Ue.isBuffer : void 0, fe = Math.max, Oe = Date.now, a = go(ue, "Map"), K = go(Object, "create"), Y = /* @__PURE__ */ function() {
    function A() {
    }
    return function(z) {
      if (!Lr(z))
        return {};
      if (ae)
        return ae(z);
      A.prototype = z;
      var ee = new A();
      return A.prototype = void 0, ee;
    };
  }();
  function y(A) {
    var z = -1, ee = A == null ? 0 : A.length;
    for (this.clear(); ++z < ee; ) {
      var Se = A[z];
      this.set(Se[0], Se[1]);
    }
  }
  function k() {
    this.__data__ = K ? K(null) : {}, this.size = 0;
  }
  function G(A) {
    var z = this.has(A) && delete this.__data__[A];
    return this.size -= z ? 1 : 0, z;
  }
  function ve(A) {
    var z = this.__data__;
    if (K) {
      var ee = z[A];
      return ee === n ? void 0 : ee;
    }
    return je.call(z, A) ? z[A] : void 0;
  }
  function p(A) {
    var z = this.__data__;
    return K ? z[A] !== void 0 : je.call(z, A);
  }
  function v(A, z) {
    var ee = this.__data__;
    return this.size += this.has(A) ? 0 : 1, ee[A] = K && z === void 0 ? n : z, this;
  }
  y.prototype.clear = k, y.prototype.delete = G, y.prototype.get = ve, y.prototype.has = p, y.prototype.set = v;
  function re(A) {
    var z = -1, ee = A == null ? 0 : A.length;
    for (this.clear(); ++z < ee; ) {
      var Se = A[z];
      this.set(Se[0], Se[1]);
    }
  }
  function he() {
    this.__data__ = [], this.size = 0;
  }
  function be(A) {
    var z = this.__data__, ee = Jn(z, A);
    if (ee < 0)
      return !1;
    var Se = z.length - 1;
    return ee == Se ? z.pop() : we.call(z, ee, 1), --this.size, !0;
  }
  function Le(A) {
    var z = this.__data__, ee = Jn(z, A);
    return ee < 0 ? void 0 : z[ee][1];
  }
  function De(A) {
    return Jn(this.__data__, A) > -1;
  }
  function st(A, z) {
    var ee = this.__data__, Se = Jn(ee, A);
    return Se < 0 ? (++this.size, ee.push([A, z])) : ee[Se][1] = z, this;
  }
  re.prototype.clear = he, re.prototype.delete = be, re.prototype.get = Le, re.prototype.has = De, re.prototype.set = st;
  function He(A) {
    var z = -1, ee = A == null ? 0 : A.length;
    for (this.clear(); ++z < ee; ) {
      var Se = A[z];
      this.set(Se[0], Se[1]);
    }
  }
  function fr() {
    this.size = 0, this.__data__ = {
      hash: new y(),
      map: new (a || re)(),
      string: new y()
    };
  }
  function pr(A) {
    var z = Yn(this, A).delete(A);
    return this.size -= z ? 1 : 0, z;
  }
  function Ke(A) {
    return Yn(this, A).get(A);
  }
  function ht(A) {
    return Yn(this, A).has(A);
  }
  function Ye(A, z) {
    var ee = Yn(this, A), Se = ee.size;
    return ee.set(A, z), this.size += ee.size == Se ? 0 : 1, this;
  }
  He.prototype.clear = fr, He.prototype.delete = pr, He.prototype.get = Ke, He.prototype.has = ht, He.prototype.set = Ye;
  function ft(A) {
    var z = this.__data__ = new re(A);
    this.size = z.size;
  }
  function bt() {
    this.__data__ = new re(), this.size = 0;
  }
  function Kt(A) {
    var z = this.__data__, ee = z.delete(A);
    return this.size = z.size, ee;
  }
  function cr(A) {
    return this.__data__.get(A);
  }
  function Ut(A) {
    return this.__data__.has(A);
  }
  function Xd(A, z) {
    var ee = this.__data__;
    if (ee instanceof re) {
      var Se = ee.__data__;
      if (!a || Se.length < r - 1)
        return Se.push([A, z]), this.size = ++ee.size, this;
      ee = this.__data__ = new He(Se);
    }
    return ee.set(A, z), this.size = ee.size, this;
  }
  ft.prototype.clear = bt, ft.prototype.delete = Kt, ft.prototype.get = cr, ft.prototype.has = Ut, ft.prototype.set = Xd;
  function Yd(A, z) {
    var ee = po(A), Se = !ee && bo(A), xe = !ee && !Se && ja(A), ze = !ee && !Se && !xe && Ua(A), Je = ee || Se || xe || ze, Fe = Je ? B(A.length, String) : [], Xe = Fe.length;
    for (var Ht in A)
      Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Ht == "offset" || Ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ze && (Ht == "buffer" || Ht == "byteLength" || Ht == "byteOffset") || // Skip index properties.
      xa(Ht, Xe)) || Fe.push(Ht);
    return Fe;
  }
  function uo(A, z, ee) {
    (ee !== void 0 && !Qn(A[z], ee) || ee === void 0 && !(z in A)) && ho(A, z, ee);
  }
  function Qd(A, z, ee) {
    var Se = A[z];
    (!(je.call(A, z) && Qn(Se, ee)) || ee === void 0 && !(z in A)) && ho(A, z, ee);
  }
  function Jn(A, z) {
    for (var ee = A.length; ee--; )
      if (Qn(A[ee][0], z))
        return ee;
    return -1;
  }
  function ho(A, z, ee) {
    z == "__proto__" && te ? te(A, z, {
      configurable: !0,
      enumerable: !0,
      value: ee,
      writable: !0
    }) : A[z] = ee;
  }
  var eh = hh();
  function Xn(A) {
    return A == null ? A === void 0 ? J : D : x && x in Object(A) ? gh(A) : mh(A);
  }
  function ka(A) {
    return pn(A) && Xn(A) == l;
  }
  function th(A) {
    if (!Lr(A) || yh(A))
      return !1;
    var z = wo(A) ? it : q;
    return z.test(Rh(A));
  }
  function rh(A) {
    return pn(A) && Fa(A.length) && !!V[Xn(A)];
  }
  function nh(A) {
    if (!Lr(A))
      return wh(A);
    var z = Ma(A), ee = [];
    for (var Se in A)
      Se == "constructor" && (z || !je.call(A, Se)) || ee.push(Se);
    return ee;
  }
  function Da(A, z, ee, Se, xe) {
    A !== z && eh(z, function(ze, Je) {
      if (xe || (xe = new ft()), Lr(ze))
        ih(A, z, Je, ee, Da, Se, xe);
      else {
        var Fe = Se ? Se(_o(A, Je), ze, Je + "", A, z, xe) : void 0;
        Fe === void 0 && (Fe = ze), uo(A, Je, Fe);
      }
    }, Ha);
  }
  function ih(A, z, ee, Se, xe, ze, Je) {
    var Fe = _o(A, ee), Xe = _o(z, ee), Ht = Je.get(Xe);
    if (Ht) {
      uo(A, ee, Ht);
      return;
    }
    var Ot = ze ? ze(Fe, Xe, ee + "", A, z, Je) : void 0, yn = Ot === void 0;
    if (yn) {
      var mo = po(Xe), Eo = !mo && ja(Xe), Wa = !mo && !Eo && Ua(Xe);
      Ot = Xe, mo || Eo || Wa ? po(Fe) ? Ot = Fe : Ah(Fe) ? Ot = lh(Fe) : Eo ? (yn = !1, Ot = ah(Xe)) : Wa ? (yn = !1, Ot = ch(Xe)) : Ot = [] : Ih(Xe) || bo(Xe) ? (Ot = Fe, bo(Fe) ? Ot = Th(Fe) : (!Lr(Fe) || wo(Fe)) && (Ot = _h(Xe))) : yn = !1;
    }
    yn && (Je.set(Xe, Ot), xe(Ot, Xe, Se, ze, Je), Je.delete(Xe)), uo(A, ee, Ot);
  }
  function oh(A, z) {
    return vh(Eh(A, z, za), A + "");
  }
  var sh = te ? function(A, z) {
    return te(A, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Lh(z),
      writable: !0
    });
  } : za;
  function ah(A, z) {
    return A.slice();
  }
  function fh(A) {
    var z = new A.constructor(A.byteLength);
    return new ct(z).set(new ct(A)), z;
  }
  function ch(A, z) {
    var ee = fh(A.buffer);
    return new A.constructor(ee, A.byteOffset, A.length);
  }
  function lh(A, z) {
    var ee = -1, Se = A.length;
    for (z || (z = Array(Se)); ++ee < Se; )
      z[ee] = A[ee];
    return z;
  }
  function uh(A, z, ee, Se) {
    var xe = !ee;
    ee || (ee = {});
    for (var ze = -1, Je = z.length; ++ze < Je; ) {
      var Fe = z[ze], Xe = void 0;
      Xe === void 0 && (Xe = A[Fe]), xe ? ho(ee, Fe, Xe) : Qd(ee, Fe, Xe);
    }
    return ee;
  }
  function dh(A) {
    return oh(function(z, ee) {
      var Se = -1, xe = ee.length, ze = xe > 1 ? ee[xe - 1] : void 0, Je = xe > 2 ? ee[2] : void 0;
      for (ze = A.length > 3 && typeof ze == "function" ? (xe--, ze) : void 0, Je && bh(ee[0], ee[1], Je) && (ze = xe < 3 ? void 0 : ze, xe = 1), z = Object(z); ++Se < xe; ) {
        var Fe = ee[Se];
        Fe && A(z, Fe, Se, ze);
      }
      return z;
    });
  }
  function hh(A) {
    return function(z, ee, Se) {
      for (var xe = -1, ze = Object(z), Je = Se(z), Fe = Je.length; Fe--; ) {
        var Xe = Je[++xe];
        if (ee(ze[Xe], Xe, ze) === !1)
          break;
      }
      return z;
    };
  }
  function Yn(A, z) {
    var ee = A.__data__;
    return ph(z) ? ee[typeof z == "string" ? "string" : "hash"] : ee.map;
  }
  function go(A, z) {
    var ee = le(A, z);
    return th(ee) ? ee : void 0;
  }
  function gh(A) {
    var z = je.call(A, x), ee = A[x];
    try {
      A[x] = void 0;
      var Se = !0;
    } catch {
    }
    var xe = Ze.call(A);
    return Se && (z ? A[x] = ee : delete A[x]), xe;
  }
  function _h(A) {
    return typeof A.constructor == "function" && !Ma(A) ? Y(E(A)) : {};
  }
  function xa(A, z) {
    var ee = typeof A;
    return z = z ?? s, !!z && (ee == "number" || ee != "symbol" && oe.test(A)) && A > -1 && A % 1 == 0 && A < z;
  }
  function bh(A, z, ee) {
    if (!Lr(ee))
      return !1;
    var Se = typeof z;
    return (Se == "number" ? yo(ee) && xa(z, ee.length) : Se == "string" && z in ee) ? Qn(ee[z], A) : !1;
  }
  function ph(A) {
    var z = typeof A;
    return z == "string" || z == "number" || z == "symbol" || z == "boolean" ? A !== "__proto__" : A === null;
  }
  function yh(A) {
    return !!nt && nt in A;
  }
  function Ma(A) {
    var z = A && A.constructor, ee = typeof z == "function" && z.prototype || Te;
    return A === ee;
  }
  function wh(A) {
    var z = [];
    if (A != null)
      for (var ee in Object(A))
        z.push(ee);
    return z;
  }
  function mh(A) {
    return Ze.call(A);
  }
  function Eh(A, z, ee) {
    return z = fe(z === void 0 ? A.length - 1 : z, 0), function() {
      for (var Se = arguments, xe = -1, ze = fe(Se.length - z, 0), Je = Array(ze); ++xe < ze; )
        Je[xe] = Se[z + xe];
      xe = -1;
      for (var Fe = Array(z + 1); ++xe < z; )
        Fe[xe] = Se[xe];
      return Fe[z] = ee(Je), I(A, this, Fe);
    };
  }
  function _o(A, z) {
    if (!(z === "constructor" && typeof A[z] == "function") && z != "__proto__")
      return A[z];
  }
  var vh = Sh(sh);
  function Sh(A) {
    var z = 0, ee = 0;
    return function() {
      var Se = Oe(), xe = i - (Se - ee);
      if (ee = Se, xe > 0) {
        if (++z >= o)
          return arguments[0];
      } else
        z = 0;
      return A.apply(void 0, arguments);
    };
  }
  function Rh(A) {
    if (A != null) {
      try {
        return me.call(A);
      } catch {
      }
      try {
        return A + "";
      } catch {
      }
    }
    return "";
  }
  function Qn(A, z) {
    return A === z || A !== A && z !== z;
  }
  var bo = ka(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ka : function(A) {
    return pn(A) && je.call(A, "callee") && !de.call(A, "callee");
  }, po = Array.isArray;
  function yo(A) {
    return A != null && Fa(A.length) && !wo(A);
  }
  function Ah(A) {
    return pn(A) && yo(A);
  }
  var ja = g || Ch;
  function wo(A) {
    if (!Lr(A))
      return !1;
    var z = Xn(A);
    return z == _ || z == R || z == c || z == O;
  }
  function Fa(A) {
    return typeof A == "number" && A > -1 && A % 1 == 0 && A <= s;
  }
  function Lr(A) {
    var z = typeof A;
    return A != null && (z == "object" || z == "function");
  }
  function pn(A) {
    return A != null && typeof A == "object";
  }
  function Ih(A) {
    if (!pn(A) || Xn(A) != L)
      return !1;
    var z = E(A);
    if (z === null)
      return !0;
    var ee = je.call(z, "constructor") && z.constructor;
    return typeof ee == "function" && ee instanceof ee && me.call(ee) == Rt;
  }
  var Ua = Re ? Z(Re) : rh;
  function Th(A) {
    return uh(A, Ha(A));
  }
  function Ha(A) {
    return yo(A) ? Yd(A) : nh(A);
  }
  var Oh = dh(function(A, z, ee) {
    Da(A, z, ee);
  });
  function Lh(A) {
    return function() {
      return A;
    };
  }
  function za(A) {
    return A;
  }
  function Ch() {
    return !1;
  }
  e.exports = Oh;
})(Ri, Ri.exports);
Ri.exports;
const Hv = Si.getLogger("http-helpers");
Hv.setLevel(Wd.levels.INFO);
Uh();
const In = {
  IFRAME_STATUS: "iframe_status",
  // Tell embed to create the window
  CREATE_WINDOW: "create_window",
  // Tell embed to close the window
  CLOSE_WINDOW: "close_window",
  USER_LOGGED_IN: "user_logged_in",
  USER_LOGGED_OUT: "user_logged_out"
}, Yt = {
  LOGOUT: "logout",
  WALLET_INSTANCE_ID: "wallet_instance_id",
  USER_INFO: "user_info",
  SET_PROVIDER: "set_provider",
  TOPUP: "topup",
  IFRAME_STATUS: "iframe_status",
  // embed has opened the window as requested
  OPENED_WINDOW: "opened_window",
  // user has closed the window from embed's side
  CLOSED_WINDOW: "closed_window",
  GET_PROVIDER_STATE: "get_provider_state",
  LOGIN_WITH_PRIVATE_KEY: "login_with_private_key"
}, zv = {
  GET_PROVIDER_STATE: "wallet_get_provider_state"
}, fs = {
  ACCOUNTS_CHANGED: "wallet_accounts_changed",
  CHAIN_CHANGED: "wallet_chain_changed",
  UNLOCK_STATE_CHANGED: "wallet_unlock_state_changed"
};
function Wv(e) {
  return function(r, n, o) {
    o((i) => {
      n.error && Si.warn(`Error in RPC response:
`, n), !r.isTorusInternal && (Si.info(`RPC (${e.origin}):`, r, "->", n), i());
    });
  };
}
var xc;
(function(e) {
  e.approved = "approved", e.cancelled = "cancelled", e.confirmed = "confirmed", e.failed = "failed", e.finalized = "finalized", e.processed = "processed", e.rejected = "rejected", e.signed = "signed", e.submitted = "submitted", e.unapproved = "unapproved", e.dropped = "dropped", e.expired = "expired";
})(xc || (xc = {}));
var Vv = kh();
const qv = /* @__PURE__ */ Ir(Vv);
var Gv = { exports: {} }, Na = {}, Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
function Zv(e) {
  var t = 4, r = e.length, n = r % t;
  if (!n)
    return e;
  var o = r, i = t - n, s = r + i, l = pe.Buffer.alloc(s);
  for (l.write(e); i--; )
    l.write("=", o++);
  return l.toString();
}
Pa.default = Zv;
Object.defineProperty(Na, "__esModule", { value: !0 });
var Kv = Pa;
function Vd(e, t) {
  return t === void 0 && (t = "utf8"), pe.Buffer.isBuffer(e) ? xs(e.toString("base64")) : xs(pe.Buffer.from(e, t).toString("base64"));
}
function Jv(e, t) {
  return t === void 0 && (t = "utf8"), pe.Buffer.from(Ba(e), "base64").toString(t);
}
function Ba(e) {
  return e = e.toString(), Kv.default(e).replace(/\-/g, "+").replace(/_/g, "/");
}
function xs(e) {
  return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function Xv(e) {
  return pe.Buffer.from(Ba(e), "base64");
}
var bn = Vd;
bn.encode = Vd;
bn.decode = Jv;
bn.toBase64 = Ba;
bn.fromBase64 = xs;
bn.toBuffer = Xv;
Na.default = bn;
(function(e) {
  e.exports = Na.default, e.exports.default = e.exports;
})(Gv);
const Yv = () => qv(32).toString("hex");
function li() {
}
const Mc = "SYN", cs = "ACK", jc = "BRK";
class Fc extends Ai.Duplex {
  constructor(t) {
    let {
      name: r,
      target: n,
      targetWindow: o = window,
      targetOrigin: i = "*"
    } = t;
    if (super({
      objectMode: !0
    }), Ae(this, "_init", void 0), Ae(this, "_haveSyn", void 0), Ae(this, "_name", void 0), Ae(this, "_target", void 0), Ae(this, "_targetWindow", void 0), Ae(this, "_targetOrigin", void 0), Ae(this, "_onMessage", void 0), Ae(this, "_synIntervalId", void 0), !r || !n)
      throw new Error("Invalid input.");
    this._init = !1, this._haveSyn = !1, this._name = r, this._target = n, this._targetWindow = o, this._targetOrigin = i, this._onMessage = this.onMessage.bind(this), this._synIntervalId = null, window.addEventListener("message", this._onMessage, !1), this._handShake();
  }
  _break() {
    this.cork(), this._write(jc, null, li), this._haveSyn = !1, this._init = !1;
  }
  _handShake() {
    this._write(Mc, null, li), this.cork();
  }
  _onData(t) {
    if (!this._init)
      t === Mc ? (this._haveSyn = !0, this._write(cs, null, li)) : t === cs && (this._init = !0, this._haveSyn || this._write(cs, null, li), this.uncork());
    else if (t === jc)
      this._break();
    else
      try {
        this.push(t);
      } catch (r) {
        this.emit("error", r);
      }
  }
  _postMessage(t) {
    const r = this._targetOrigin;
    this._targetWindow.postMessage({
      target: this._target,
      data: t
    }, r);
  }
  onMessage(t) {
    const r = t.data;
    this._targetOrigin !== "*" && t.origin !== this._targetOrigin || t.source !== this._targetWindow || typeof r != "object" || r.target !== this._name || !r.data || this._onData(r.data);
  }
  _read() {
  }
  _write(t, r, n) {
    this._postMessage(t), n();
  }
  _destroy() {
    window.removeEventListener("message", this._onMessage, !1);
  }
}
function Uc(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function Qv(e) {
  const t = e.length, r = new Array(t);
  for (let n = 0; n < t; n += 1)
    r[n] = e[n];
  return r;
}
class fo extends cn.EventEmitter {
  emit(t) {
    let r = t === "error";
    const n = this._events;
    if (n !== void 0)
      r = r && n.error === void 0;
    else if (!r)
      return !1;
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    if (r) {
      let f;
      if (i.length > 0 && ([f] = i), f instanceof Error)
        throw f;
      const c = new Error(`Unhandled error.${f ? ` (${f.message})` : ""}`);
      throw c.context = f, c;
    }
    const l = n[t];
    if (l === void 0)
      return !1;
    if (typeof l == "function")
      Uc(l, this, i);
    else {
      const f = l.length, c = Qv(l);
      for (let u = 0; u < f; u += 1)
        Uc(c[u], this, i);
    }
    return !0;
  }
}
class Tn extends Error {
  constructor(t) {
    let {
      code: r,
      message: n,
      data: o
    } = t;
    if (!Number.isInteger(r))
      throw new Error("code must be an integer");
    if (!n || typeof n != "string")
      throw new Error("message must be string");
    super(n), Ae(this, "code", void 0), Ae(this, "data", void 0), this.code = r, o !== void 0 && (this.data = o);
  }
  toString() {
    return Gh({
      code: this.code,
      message: this.message,
      data: this.data,
      stack: this.stack
    });
  }
}
const Ms = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return (n, o) => {
    n || o.error ? t(n || o.error) : !r || Array.isArray(o) ? e(o) : e(o.result);
  };
};
function eS() {
  const e = {};
  function t() {
    return !1;
  }
  const r = new fo();
  function n(f) {
    const c = e[f.id];
    if (!c)
      throw new Error(`StreamMiddleware - Unknown response id "${f.id}"`);
    delete e[f.id], Object.assign(c.res, f), setTimeout(c.end);
  }
  function o(f) {
    r.emit("notification", f);
  }
  function i(f, c, u) {
    let h;
    try {
      !f.id ? o(f) : n(f);
    } catch (b) {
      h = b;
    }
    u(h);
  }
  const s = new Ai.Duplex({
    objectMode: !0,
    read: t,
    write: i
  });
  return {
    events: r,
    middleware: (f, c, u, h) => {
      s.push(f), e[f.id] = {
        req: f,
        res: c,
        next: u,
        end: h
      };
    },
    stream: s
  };
}
function tS() {
  return (e, t, r, n) => {
    const o = e.id, i = Yv();
    e.id = i, t.id = i, r((s) => {
      e.id = o, t.id = o, s();
    });
  };
}
function Hc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hc(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class dr extends fo {
  constructor() {
    super(), Ae(this, "_middleware", void 0), this._middleware = [];
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(t, r, n) {
    const o = [];
    let i = null, s = !1;
    for (const l of n)
      if ([i, s] = await dr._runMiddleware(t, r, l, o), s)
        break;
    return [i, s, o.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(t, r, n, o) {
    return new Promise((i) => {
      const s = (f) => {
        const c = f || r.error;
        c && (r.error = qt.serializeError(c)), i([c, !0]);
      }, l = (f) => {
        r.error ? s(r.error) : (f && (typeof f != "function" && s(new Tn({
          code: -32603,
          message: "JRPCEngine: 'next' return handlers must be functions"
        })), o.push(f)), i([null, !1]));
      };
      try {
        n(t, r, l, s);
      } catch (f) {
        s(f);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, o) => {
        r((i) => i ? o(i) : n());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new Tn({
        code: -32603,
        message: "Response has no error or result for request"
      });
    if (!n)
      throw new Tn({
        code: -32603,
        message: "Nothing ended request"
      });
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (t, r, n, o) => {
      try {
        const [i, s, l] = await dr._runAllMiddleware(t, r, this._middleware);
        return s ? (await dr._runReturnHandlers(l), o(i)) : n(async (f) => {
          try {
            await dr._runReturnHandlers(l);
          } catch (c) {
            return f(c);
          }
          return f();
        });
      } catch (i) {
        return o(i);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(
        // 1. Begin executing each request in the order received
        t.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, o) => {
        r(o);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const s = new Tn({
        code: -32603,
        message: "request must be plain object"
      });
      return r(s, {
        id: void 0,
        jsonrpc: "2.0",
        error: s
      });
    }
    if (typeof t.method != "string") {
      const s = new Tn({
        code: -32603,
        message: "method must be string"
      });
      return r(s, {
        id: t.id,
        jsonrpc: "2.0",
        error: s
      });
    }
    const n = rS({}, t), o = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let i = null;
    try {
      await this._processRequest(n, o);
    } catch (s) {
      i = s;
    }
    return i && (delete o.result, o.error || (o.error = qt.serializeError(i))), r(i, o);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(t, r) {
    const [n, o, i] = await dr._runAllMiddleware(t, r, this._middleware);
    if (dr._checkForCompletion(t, r, o), await dr._runReturnHandlers(i), n)
      throw n;
  }
}
class nS extends Ai.Duplex {
  constructor(t) {
    let {
      parent: r,
      name: n
    } = t;
    super({
      objectMode: !0
    }), Ae(this, "_parent", void 0), Ae(this, "_name", void 0), this._parent = r, this._name = n;
  }
  /**
   * Explicitly sets read operations to a no-op.
   */
  _read() {
  }
  /**
   * Called when data should be written to this writable stream.
   *
   * @param chunk - Arbitrary object to write
   * @param encoding - Encoding to use when writing payload
   * @param callback - Called when writing is complete or an error occurs
   */
  _write(t, r, n) {
    this._parent.push({
      name: this._name,
      data: t
    }), n();
  }
}
function zc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zc(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Vc = Symbol("IGNORE_SUBSTREAM");
class iS extends Ai.Duplex {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(Wc(Wc({}, t), {}, {
      objectMode: !0
    })), Ae(this, "_substreams", void 0), Ae(this, "getStream", void 0), this._substreams = {};
  }
  createStream(t) {
    if (!t)
      throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[t])
      throw new Error(`ObjectMultiplex - Substream for name "${t}" already exists`);
    const r = new nS({
      parent: this,
      name: t
    });
    return this._substreams[t] = r, oS(this, (n) => r.destroy(n || void 0)), r;
  }
  // ignore streams (dont display orphaned data warning)
  ignoreStream(t) {
    if (!t)
      throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[t])
      throw new Error(`ObjectMultiplex - Substream for name "${t}" already exists`);
    this._substreams[t] = Vc;
  }
  _read() {
  }
  _write(t, r, n) {
    const {
      name: o,
      data: i
    } = t;
    if (!o)
      return window.console.warn(`ObjectMultiplex - malformed chunk without name "${t}"`), n();
    const s = this._substreams[o];
    return s ? (s !== Vc && s.push(i), n()) : (window.console.warn(`ObjectMultiplex - orphaned data for stream "${o}"`), n());
  }
}
function oS(e, t) {
  const r = Cm(t);
  cc(e, {
    readable: !1
  }, r), cc(e, {
    writable: !1
  }, r);
}
const ir = (e) => e !== null && typeof e == "object" && typeof e.pipe == "function";
ir.writable = (e) => ir(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
ir.readable = (e) => ir(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object";
ir.duplex = (e) => ir.writable(e) && ir.readable(e);
ir.transform = (e) => ir.duplex(e) && typeof e._transform == "function";
var sS = ir, aS = function e(t, r) {
  if (t === r)
    return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor)
      return !1;
    var n, o, i;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!e(t[o], r[o]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (i = Object.keys(t), n = i.length, n !== Object.keys(r).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      var s = i[o];
      if (!e(t[s], r[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const fS = /* @__PURE__ */ Ir(aS);
var cS = "0.3.4", rr = {
  errors: {
    disconnected: () => "Torus: Lost connection to Torus.",
    permanentlyDisconnected: () => "Torus: Disconnected from iframe. Page reload required.",
    unsupportedSync: (e) => `Torus: The Torus Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
    invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
    invalidOptions: (e) => `Invalid options. Received: { maxEventListeners: ${e}}`,
    invalidRequestArgs: () => "Expected a single, non-array, object argument.",
    invalidRequestMethod: () => "'args.method' must be a non-empty string.",
    invalidRequestParams: () => "'args.params' must be an object or array if provided.",
    invalidLoggerObject: () => "'args.logger' must be an object if provided.",
    invalidLoggerMethod: (e) => `'args.logger' must include required method '${e}'.`
  },
  info: {
    connected: (e) => `Torus: Connected to chain with ID "${e}".`
  },
  warnings: {}
};
const lS = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
  TESTING: "testing"
}, Ln = {
  BOTTOM_LEFT: "bottom-left",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_RIGHT: "top-right"
}, ls = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless"
}, uS = {
  en: {
    embed: {
      continue: "Continue",
      actionRequired: "Authorization required",
      pendingAction: "Click continue to proceed with your request in a popup",
      cookiesRequired: "Cookies Required",
      enableCookies: "Please enable cookies in your browser preferences to access Torus",
      clickHere: "More Info"
    }
  },
  de: {
    embed: {
      continue: "Fortsetzen",
      actionRequired: "Autorisierung erforderlich",
      pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
      cookiesRequired: "Cookies benötigt",
      enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
      clickHere: "Mehr Info"
    }
  },
  ja: {
    embed: {
      continue: "継続する",
      actionRequired: "認証が必要です",
      pendingAction: "続行をクリックして、ポップアップでリクエストを続行します",
      cookiesRequired: "必要なクッキー",
      enableCookies: "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
      clickHere: "詳しくは"
    }
  },
  ko: {
    embed: {
      continue: "계속하다",
      actionRequired: "승인 필요",
      pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
      cookiesRequired: "쿠키 필요",
      enableCookies: "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
      clickHere: "더 많은 정보"
    }
  },
  zh: {
    embed: {
      continue: "继续",
      actionRequired: "需要授权",
      pendingAction: "单击继续以在弹出窗口中继续您的请求",
      cookiesRequired: "必填Cookie",
      enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
      clickHere: "更多信息"
    }
  }
};
var $a = {
  supportedVerifierList: [ls.GOOGLE, ls.REDDIT, ls.DISCORD],
  api: "https://api.tor.us",
  translations: uS,
  prodTorusUrl: "",
  localStorageKeyPrefix: "torus-"
}, We = Si.getLogger("solana-embed");
function dS() {
  return (e, t, r) => {
    (typeof e.method != "string" || !e.method) && (t.error = qt.ethErrors.rpc.invalidRequest({
      message: "The request 'method' must be a non-empty string.",
      data: e
    })), r((n) => {
      const {
        error: o
      } = t;
      return o && We.error(`Torus - RPC Error: ${o.message}`, o), n();
    });
  };
}
function hS(e, t, r) {
  let n = `Torus: Lost connection to "${e}".`;
  t != null && t.stack && (n += `
${t.stack}`), We.warn(n), r && r.listenerCount("error") > 0 && r.emit("error", n);
}
const ui = () => Math.random().toString(36).slice(2), qd = async (e) => {
  let t, r;
  switch (e) {
    case "testing":
      t = "https://solana-testing.tor.us", r = "debug";
      break;
    case "development":
      t = "http://localhost:8080", r = "debug";
      break;
    default:
      t = "https://solana.tor.us", r = "error";
      break;
  }
  return {
    torusUrl: t,
    logLevel: r
  };
}, gS = () => {
  let e = window.navigator.language || "en-US";
  const t = e.split("-");
  return e = Object.prototype.hasOwnProperty.call($a.translations, t[0]) ? t[0] : "en", e;
}, _S = {
  height: 660,
  width: 375
}, bS = {
  height: 740,
  width: 1315
}, pS = {
  height: 700,
  width: 1200
}, Gd = {
  height: 600,
  width: 400
};
function yS(e) {
  let t;
  try {
    t = window[e];
    const r = "__storage_test__";
    return t.setItem(r, r), t.removeItem(r), !0;
  } catch (r) {
    return r && // everything except Firefox
    (r.code === 22 || // Firefox
    r.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    r.name === "QuotaExceededError" || // Firefox
    r.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    t && t.length !== 0;
  }
}
function Bn(e) {
  let {
    width: t,
    height: r
  } = e;
  const n = window.screenLeft !== void 0 ? window.screenLeft : window.screenX, o = window.screenTop !== void 0 ? window.screenTop : window.screenY, i = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width, s = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height, l = 1, f = Math.abs((i - t) / 2 / l + n), c = Math.abs((s - r) / 2 / l + o);
  return `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${r / l},width=${t / l},top=${c},left=${f}`;
}
class Zd extends fo {
  /**
   * Indicating that this provider is a Torus provider.
   */
  constructor(t, r) {
    let {
      maxEventListeners: n = 100,
      jsonRpcStreamName: o = "provider"
    } = r;
    if (super(), Ae(this, "isTorus", void 0), Ae(this, "_rpcEngine", void 0), Ae(this, "jsonRpcConnectionEvents", void 0), Ae(this, "_state", void 0), !sS.duplex(t))
      throw new Error(rr.errors.invalidDuplexStream());
    this.isTorus = !0, this.setMaxListeners(n), this._handleConnect = this._handleConnect.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this._initializeState = this._initializeState.bind(this), this.request = this.request.bind(this), this.sendAsync = this.sendAsync.bind(this);
    const i = new iS();
    uc(t, i, t, this._handleStreamDisconnect.bind(this, "Torus")), i.ignoreStream("phishing");
    const s = eS();
    uc(s.stream, i.createStream(o), s.stream, this._handleStreamDisconnect.bind(this, "Torus RpcProvider"));
    const l = new dr();
    l.push(tS()), l.push(dS()), l.push(Wv({
      origin: location.origin
    })), l.push(s.middleware), this._rpcEngine = l, this.jsonRpcConnectionEvents = s.events;
  }
  /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   */
  async request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw qt.ethErrors.rpc.invalidRequest({
        message: rr.errors.invalidRequestArgs(),
        data: t
      });
    const {
      method: r,
      params: n
    } = t;
    if (typeof r != "string" || r.length === 0)
      throw qt.ethErrors.rpc.invalidRequest({
        message: rr.errors.invalidRequestMethod(),
        data: t
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw qt.ethErrors.rpc.invalidRequest({
        message: rr.errors.invalidRequestParams(),
        data: t
      });
    return new Promise((o, i) => {
      this._rpcRequest({
        method: r,
        params: n
      }, Ms(o, i));
    });
  }
  /**
   * Submits an RPC request per the given JSON-RPC request object.
   */
  send(t, r) {
    this._rpcRequest(t, r);
  }
  /**
   * Submits an RPC request per the given JSON-RPC request object.
   */
  sendAsync(t) {
    return new Promise((r, n) => {
      this._rpcRequest(t, Ms(r, n));
    });
  }
  /**
   * Called when connection is lost to critical streams.
   *
   * emits TorusInpageProvider#disconnect
   */
  _handleStreamDisconnect(t, r) {
    hS(t, r, this), this._handleDisconnect(!1, r ? r.message : void 0);
  }
}
const wS = function(e, t, r) {
  for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
    o[i - 3] = arguments[i];
  const s = () => {
    r(...o), e.removeEventListener(t, s);
  };
  e.addEventListener(t, s);
};
async function Kd() {
  return new Promise((e) => {
    document.readyState !== "loading" ? e() : wS(document, "DOMContentLoaded", e);
  });
}
const Qr = (e) => {
  const t = window.document.createElement("template"), r = e.trim();
  return t.innerHTML = r, t.content.firstChild;
};
function di(e) {
  return e.version === void 0;
}
class Jd extends fo {
  constructor(t) {
    let {
      url: r,
      target: n,
      features: o
    } = t;
    super(), Ae(this, "url", void 0), Ae(this, "target", void 0), Ae(this, "features", void 0), Ae(this, "window", void 0), Ae(this, "windowTimer", void 0), Ae(this, "iClosedWindow", void 0), this.url = r, this.target = n || "_blank", this.features = o || Bn(pS), this.window = void 0, this.windowTimer = void 0, this.iClosedWindow = !1, this._setupTimer();
  }
  _setupTimer() {
    this.windowTimer = Number(setInterval(() => {
      this.window && this.window.closed && (clearInterval(this.windowTimer), this.iClosedWindow || this.emit("close"), this.iClosedWindow = !1, this.window = void 0), this.window === void 0 && clearInterval(this.windowTimer);
    }, 500));
  }
  open() {
    var t;
    return this.window = window.open(this.url.href, this.target, this.features), (t = this.window) != null && t.focus && this.window.focus(), Promise.resolve();
  }
  close() {
    this.iClosedWindow = !0, this.window && this.window.close();
  }
  redirect(t) {
    t ? window.location.replace(this.url.href) : window.location.href = this.url.href;
  }
}
function qc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qc(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class co extends Zd {
  constructor(t, r) {
    let {
      maxEventListeners: n = 100,
      jsonRpcStreamName: o = "provider"
    } = r;
    super(t, {
      maxEventListeners: n,
      jsonRpcStreamName: o
    }), Ae(this, "embedTranslations", void 0), Ae(this, "torusUrl", void 0), Ae(this, "dappStorageKey", void 0), Ae(this, "windowRefs", void 0), Ae(this, "tryWindowHandle", void 0), Ae(this, "torusAlertContainer", void 0), Ae(this, "torusIframe", void 0), this._state = mS({}, co._defaultState), this.torusUrl = "", this.dappStorageKey = "";
    const i = $a.translations[gS()];
    this.embedTranslations = i.embed, this.windowRefs = {}, this.on("connect", () => {
      this._state.isConnected = !0;
    });
    const s = (l) => {
      const {
        method: f,
        params: c
      } = l;
      if (f === In.IFRAME_STATUS) {
        const {
          isFullScreen: u,
          rid: h
        } = c;
        this._displayIframe({
          isFull: u,
          rid: h
        });
      } else if (f === In.CREATE_WINDOW) {
        const {
          windowId: u,
          url: h
        } = c;
        this._createPopupBlockAlert(u, h);
      } else if (f === In.CLOSE_WINDOW)
        this._handleCloseWindow(c);
      else if (f === In.USER_LOGGED_IN) {
        const {
          currentLoginProvider: u
        } = c;
        this._state.isLoggedIn = !0, this._state.currentLoginProvider = u;
      } else
        f === In.USER_LOGGED_OUT && (this._state.isLoggedIn = !1, this._state.currentLoginProvider = null, this._displayIframe());
    };
    this.jsonRpcConnectionEvents.on("notification", s);
  }
  get isLoggedIn() {
    return this._state.isLoggedIn;
  }
  get isIFrameFullScreen() {
    return this._state.isIFrameFullScreen;
  }
  /**
   * Returns whether the inPage provider is connected to Torus.
   */
  isConnected() {
    return this._state.isConnected;
  }
  async _initializeState(t) {
    try {
      const {
        torusUrl: r,
        dappStorageKey: n,
        torusAlertContainer: o,
        torusIframe: i
      } = t;
      this.torusUrl = r, this.dappStorageKey = n, this.torusAlertContainer = o, this.torusIframe = i, this.torusIframe.addEventListener("load", () => {
        this._state.isIFrameFullScreen || this._displayIframe();
      });
      const {
        currentLoginProvider: s,
        isLoggedIn: l
      } = await this.request({
        method: Yt.GET_PROVIDER_STATE,
        params: []
      });
      this._handleConnect(s, l);
    } catch (r) {
      We.error("Torus: Failed to get initial state. Please report this bug.", r);
    } finally {
      We.info("initialized communication state"), this._state.initialized = !0, this.emit("_initialized");
    }
  }
  _handleWindow(t) {
    let {
      url: r,
      target: n,
      features: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new URL(r || `${this.torusUrl}/redirect?windowId=${t}`);
    this.dappStorageKey && (i.hash ? i.hash += `&dappStorageKey=${this.dappStorageKey}` : i.hash = `#dappStorageKey=${this.dappStorageKey}`);
    const s = new Jd({
      url: i,
      target: n,
      features: o
    });
    if (s.open(), !s.window) {
      this._createPopupBlockAlert(t, i.href);
      return;
    }
    this.windowRefs[t] = s, this.request({
      method: Yt.OPENED_WINDOW,
      params: {
        windowId: t
      }
    }), s.once("close", () => {
      delete this.windowRefs[t], this.request({
        method: Yt.CLOSED_WINDOW,
        params: {
          windowId: t
        }
      });
    });
  }
  _displayIframe() {
    let {
      isFull: t = !1,
      rid: r = ""
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = {};
    if (t)
      n.display = "block", n.width = "100%", n.height = "100%", n.top = "0px", n.right = "0px", n.left = "0px", n.bottom = "0px";
    else
      switch (n.display = this._state.torusWidgetVisibility ? "block" : "none", n.height = "70px", n.width = "70px", this._state.buttonPosition) {
        case Ln.TOP_LEFT:
          n.top = "0px", n.left = "0px", n.right = "auto", n.bottom = "auto";
          break;
        case Ln.TOP_RIGHT:
          n.top = "0px", n.right = "0px", n.left = "auto", n.bottom = "auto";
          break;
        case Ln.BOTTOM_RIGHT:
          n.bottom = "0px", n.right = "0px", n.top = "auto", n.left = "auto";
          break;
        case Ln.BOTTOM_LEFT:
        default:
          n.bottom = "0px", n.left = "0px", n.top = "auto", n.right = "auto";
          break;
      }
    Object.assign(this.torusIframe.style, n), this._state.isIFrameFullScreen = t, this.request({
      method: Yt.IFRAME_STATUS,
      params: {
        isIFrameFullScreen: t,
        rid: r
      }
    });
  }
  hideTorusButton() {
    this._state.torusWidgetVisibility = !1, this._displayIframe();
  }
  showTorusButton() {
    this._state.torusWidgetVisibility = !0, this._displayIframe();
  }
  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound
   */
  _rpcRequest(t, r) {
    const n = r, o = t;
    Array.isArray(o) || o.jsonrpc || (o.jsonrpc = "2.0"), this.tryWindowHandle(o, n);
  }
  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param currentLoginProvider - The login Provider
   * emits TorusInpageProvider#connect
   */
  _handleConnect(t, r) {
    this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", {
      currentLoginProvider: t,
      isLoggedIn: r
    }), We.debug(rr.info.connected(t)));
  }
  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits TorusInpageProvider#disconnect
   */
  _handleDisconnect(t, r) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !t) {
      this._state.isConnected = !1;
      let n;
      t ? (n = new qt.EthereumRpcError(
        1013,
        // Try again later
        r || rr.errors.disconnected()
      ), We.debug(n)) : (n = new qt.EthereumRpcError(
        1011,
        // Internal error
        r || rr.errors.permanentlyDisconnected()
      ), We.error(n), this._state.currentLoginProvider = null, this._state.isLoggedIn = !1, this._state.torusWidgetVisibility = !1, this._state.isIFrameFullScreen = !1, this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", n);
    }
  }
  // Called if the iframe wants to close the window cause it is done processing the request
  _handleCloseWindow(t) {
    const {
      windowId: r
    } = t;
    this.windowRefs[r] && (this.windowRefs[r].close(), delete this.windowRefs[r]);
  }
  async _createPopupBlockAlert(t, r) {
    const n = this.getLogoUrl(), o = Qr(`<div id="torusAlert" class="torus-alert--v2"><div id="torusAlert__logo"><img src="${n}" /></div><div><h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1><p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p></div></div>`), i = Qr(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`), s = Qr('<div id="torusAlert__btn-container"></div>');
    s.appendChild(i), o.appendChild(s);
    const l = () => {
      i.addEventListener("click", () => {
        this._handleWindow(t, {
          url: r,
          target: "_blank",
          features: Bn(Gd)
        }), o.remove(), this.torusAlertContainer.children.length === 0 && (this.torusAlertContainer.style.display = "none");
      });
    }, f = () => {
      this.torusAlertContainer.appendChild(o);
    };
    await Kd(), f(), l(), this.torusAlertContainer.style.display = "block";
  }
  getLogoUrl() {
    return `${this.torusUrl}/images/torus_icon-blue.svg`;
  }
}
Ae(co, "_defaultState", {
  buttonPosition: "bottom-left",
  currentLoginProvider: null,
  isIFrameFullScreen: !1,
  hasEmittedConnection: !1,
  torusWidgetVisibility: !1,
  initialized: !1,
  isLoggedIn: !1,
  isPermanentlyDisconnected: !1,
  isConnected: !1
});
function Gc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ES(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gc(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class lo extends Zd {
  /**
   * The chain ID of the currently connected Solana chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */
  /**
   * The user's currently selected Solana address.
   * If null, Torus is either locked or the user has not permitted any
   * addresses to be viewed.
   */
  constructor(t, r) {
    let {
      maxEventListeners: n = 100,
      jsonRpcStreamName: o = "provider"
    } = r;
    super(t, {
      maxEventListeners: n,
      jsonRpcStreamName: o
    }), Ae(this, "chainId", void 0), Ae(this, "selectedAddress", void 0), Ae(this, "tryWindowHandle", void 0), this._state = ES({}, lo._defaultState), this.selectedAddress = null, this.chainId = null, this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this.on("connect", () => {
      this._state.isConnected = !0;
    });
    const i = (s) => {
      const {
        method: l,
        params: f
      } = s;
      l === fs.ACCOUNTS_CHANGED ? this._handleAccountsChanged(f) : l === fs.UNLOCK_STATE_CHANGED ? this._handleUnlockStateChanged(f) : l === fs.CHAIN_CHANGED && this._handleChainChanged(f);
    };
    this.jsonRpcConnectionEvents.on("notification", i);
  }
  /**
   * Returns whether the inpage provider is connected to Torus.
   */
  isConnected() {
    return this._state.isConnected;
  }
  // Private Methods
  //= ===================
  /**
   * Constructor helper.
   * Populates initial state by calling 'wallet_getProviderState' and emits
   * necessary events.
   */
  async _initializeState() {
    try {
      const {
        accounts: t,
        chainId: r,
        isUnlocked: n
      } = await this.request({
        method: zv.GET_PROVIDER_STATE,
        params: []
      });
      this.emit("connect", {
        chainId: r
      }), this._handleChainChanged({
        chainId: r
      }), this._handleUnlockStateChanged({
        accounts: t,
        isUnlocked: n
      }), this._handleAccountsChanged(t);
    } catch (t) {
      We.error("Torus: Failed to get initial state. Please report this bug.", t);
    } finally {
      We.info("initialized provider state"), this._state.initialized = !0, this.emit("_initialized");
    }
  }
  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound
   */
  _rpcRequest(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, o = r;
    const i = t;
    if (!Array.isArray(i)) {
      if (i.jsonrpc || (i.jsonrpc = "2.0"), i.method === "solana_accounts" || i.method === "solana_requestAccounts")
        o = (s, l) => {
          this._handleAccountsChanged(l.result || [], i.method === "solana_accounts", n), r(s, l);
        };
      else if (i.method === "wallet_getProviderState") {
        this._rpcEngine.handle(t, o);
        return;
      }
    }
    this.tryWindowHandle(i, o);
  }
  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * emits TorusInpageProvider#connect
   */
  _handleConnect(t) {
    this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", {
      chainId: t
    }), We.debug(rr.info.connected(t)));
  }
  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits TorusInpageProvider#disconnect
   */
  _handleDisconnect(t, r) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !t) {
      this._state.isConnected = !1;
      let n;
      t ? (n = new qt.EthereumRpcError(
        1013,
        // Try again later
        r || rr.errors.disconnected()
      ), We.debug(n)) : (n = new qt.EthereumRpcError(
        1011,
        // Internal error
        r || rr.errors.permanentlyDisconnected()
      ), We.error(n), this.chainId = null, this._state.accounts = null, this.selectedAddress = null, this._state.isUnlocked = !1, this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", n);
    }
  }
  /**
   * Called when accounts may have changed.
   */
  _handleAccountsChanged(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, o = t;
    Array.isArray(o) || (We.error("Torus: Received non-array accounts parameter. Please report this bug.", o), o = []);
    for (const i of t)
      if (typeof i != "string") {
        We.error("Torus: Received non-string account. Please report this bug.", t), o = [];
        break;
      }
    fS(this._state.accounts, o) || (r && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !n && We.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.', o), this._state.accounts = o, this.emit("accountsChanged", o)), this.selectedAddress !== o[0] && (this.selectedAddress = o[0] || null);
  }
  /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state.
   * Does nothing if neither the chainId nor the networkVersion are different
   * from existing values.
   *
   * emits TorusInpageProvider#chainChanged
   * @param networkInfo - An object with network info.
   */
  _handleChainChanged() {
    let {
      chainId: t
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!t) {
      We.error("Torus: Received invalid network parameters. Please report this bug.", {
        chainId: t
      });
      return;
    }
    t === "loading" ? this._handleDisconnect(!0) : (this._handleConnect(t), t !== this.chainId && (this.chainId = t, this._state.initialized && this.emit("chainChanged", this.chainId)));
  }
  /**
   * Upon receipt of a new isUnlocked state, sets relevant public state.
   * Calls the accounts changed handler with the received accounts, or an empty
   * array.
   *
   * Does nothing if the received value is equal to the existing value.
   * There are no lock/unlock events.
   *
   * @param opts - Options bag.
   */
  _handleUnlockStateChanged() {
    let {
      accounts: t,
      isUnlocked: r
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof r != "boolean") {
      We.error("Torus: Received invalid isUnlocked parameter. Please report this bug.", {
        isUnlocked: r
      });
      return;
    }
    r !== this._state.isUnlocked && (this._state.isUnlocked = r, this._handleAccountsChanged(t || []));
  }
}
Ae(lo, "_defaultState", {
  accounts: null,
  isConnected: !1,
  isUnlocked: !1,
  initialized: !1,
  isPermanentlyDisconnected: !1,
  hasEmittedConnection: !1
});
function Zc(e) {
  return new Promise((t, r) => {
    try {
      const n = document.createElement("img");
      n.onload = () => t(!0), n.onerror = () => t(!1), n.src = e;
    } catch (n) {
      r(n);
    }
  });
}
const vS = (e) => {
  const {
    document: t
  } = e, r = t.querySelector('head > meta[property="og:site_name"]');
  if (r)
    return r.content;
  const n = t.querySelector('head > meta[name="title"]');
  return n ? n.content : t.title && t.title.length > 0 ? t.title : e.location.hostname;
};
async function SS(e) {
  try {
    const {
      document: t
    } = e;
    let r = t.querySelector('head > link[rel="shortcut icon"]');
    return r && await Zc(r.href) || (r = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find((n) => !!n.href), r && await Zc(r.href)) ? r.href : "";
  } catch {
    return "";
  }
}
const RS = async () => ({
  name: vS(window),
  icon: await SS(window)
});
function Kc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kc(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const AS = ["send_transaction", "sign_transaction", "sign_all_transactions", "sign_message", "connect"], IS = [Yt.SET_PROVIDER], TS = yS("localStorage");
(async function() {
  try {
    if (typeof document > "u")
      return;
    const t = document.createElement("link"), {
      torusUrl: r
    } = await qd("production");
    t.href = `${r}/frame`, t.crossOrigin = "anonymous", t.type = "text/html", t.rel = "prefetch", t.relList && t.relList.supports && t.relList.supports("prefetch") && document.head.appendChild(t);
  } catch (t) {
    We.warn(t);
  }
})();
class $S {
  constructor() {
    let {
      modalZIndex: t = 99999
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ae(this, "isInitialized", void 0), Ae(this, "torusAlert", void 0), Ae(this, "modalZIndex", void 0), Ae(this, "alertZIndex", void 0), Ae(this, "requestedLoginProvider", void 0), Ae(this, "provider", void 0), Ae(this, "communicationProvider", void 0), Ae(this, "dappStorageKey", void 0), Ae(this, "isTopupHidden", !1), Ae(this, "torusAlertContainer", void 0), Ae(this, "torusUrl", void 0), Ae(this, "torusIframe", void 0), Ae(this, "styleLink", void 0), this.torusUrl = "", this.isInitialized = !1, this.requestedLoginProvider = null, this.modalZIndex = t, this.alertZIndex = t + 1e3, this.dappStorageKey = "";
  }
  get isLoggedIn() {
    return this.communicationProvider ? this.communicationProvider.isLoggedIn : !1;
  }
  async init() {
    let {
      buildEnv: t = lS.PRODUCTION,
      enableLogging: r = !1,
      network: n,
      showTorusButton: o = !1,
      useLocalStorage: i = !1,
      buttonPosition: s = Ln.BOTTOM_LEFT,
      apiKey: l = "torus-default",
      extraParams: f = {},
      whiteLabel: c
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this.isInitialized)
      throw new Error("Already initialized");
    const {
      torusUrl: u,
      logLevel: h
    } = await qd(t);
    We.enableAll(), We.info(u, "url loaded"), We.info(`Solana Embed Version :${cS}`), this.torusUrl = u, We.setDefaultLevel(h), r ? We.enableAll() : We.disableAll();
    const b = this.handleDappStorageKey(i), _ = new URL(u);
    _.pathname.endsWith("/") ? _.pathname += "frame" : _.pathname += "/frame";
    const R = new URLSearchParams();
    b && R.append("dappStorageKey", b), R.append("origin", window.location.origin), _.hash = R.toString(), this.torusIframe = Qr(`<iframe
        id="torusIframe"
        class="torusIframe"
        src="${_.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex.toString()}"
      ></iframe>`), this.torusAlertContainer = Qr(`<div id="torusAlertContainer" style="display:none; z-index: ${this.alertZIndex.toString()}"></div>`), this.styleLink = Qr(`<link href="${u}/css/widget.css" rel="stylesheet" type="text/css">`);
    const T = async () => new Promise((N, D) => {
      try {
        window.document.head.appendChild(this.styleLink), window.document.body.appendChild(this.torusIframe), window.document.body.appendChild(this.torusAlertContainer), this.torusIframe.addEventListener("load", async () => {
          const L = await RS();
          this.torusIframe.contentWindow.postMessage({
            buttonPosition: s,
            apiKey: l,
            network: n,
            dappMetadata: L,
            extraParams: f,
            whiteLabel: c
          }, _.origin), await this._setupWeb3({
            torusUrl: u
          }), o && this.showTorusButton(), c != null && c.topupHide ? this.isTopupHidden = c.topupHide : this.hideTorusButton(), this.isInitialized = !0, window.torus = this, N();
        });
      } catch (L) {
        D(L);
      }
    });
    await Kd(), await T();
  }
  async login() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.isInitialized)
      throw new Error("Call init() first");
    try {
      this.requestedLoginProvider = t.loginProvider || null, this.requestedLoginProvider || this.communicationProvider._displayIframe({
        isFull: !0
      });
      const r = await new Promise((n, o) => {
        this.provider._rpcRequest({
          method: "solana_requestAccounts",
          params: [this.requestedLoginProvider, t.login_hint]
        }, Ms(n, o));
      });
      if (Array.isArray(r) && r.length > 0)
        return r;
      throw new Error("Login failed");
    } catch (r) {
      throw We.error("login failed", r), r;
    } finally {
      this.communicationProvider.isIFrameFullScreen && this.communicationProvider._displayIframe();
    }
  }
  async loginWithPrivateKey(t) {
    if (!this.isInitialized)
      throw new Error("Call init() first");
    const {
      privateKey: r,
      userInfo: n
    } = t, {
      success: o
    } = await this.communicationProvider.request({
      method: "login_with_private_key",
      params: {
        privateKey: r,
        userInfo: n
      }
    });
    if (!o)
      throw new Error("Login Failed");
  }
  async logout() {
    if (!this.communicationProvider.isLoggedIn)
      throw new Error("Not logged in");
    await this.communicationProvider.request({
      method: Yt.LOGOUT,
      params: []
    }), this.requestedLoginProvider = null;
  }
  async cleanUp() {
    this.communicationProvider.isLoggedIn && await this.logout(), this.clearInit();
  }
  clearInit() {
    function t(r) {
      return r instanceof Element || r instanceof Document;
    }
    t(this.styleLink) && window.document.body.contains(this.styleLink) && (this.styleLink.remove(), this.styleLink = void 0), t(this.torusIframe) && window.document.body.contains(this.torusIframe) && (this.torusIframe.remove(), this.torusIframe = void 0), t(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer) && (this.torusAlert = void 0, this.torusAlertContainer.remove(), this.torusAlertContainer = void 0), this.isInitialized = !1;
  }
  hideTorusButton() {
    this.communicationProvider.hideTorusButton();
  }
  showTorusButton() {
    this.communicationProvider.showTorusButton();
  }
  async setProvider(t) {
    await this.communicationProvider.request({
      method: Yt.SET_PROVIDER,
      params: us({}, t)
    });
  }
  async showWallet(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = await this.communicationProvider.request({
      method: Yt.WALLET_INSTANCE_ID,
      params: []
    }), o = t ? `/${t}` : "", i = new URL(`${this.torusUrl}/wallet${o}`);
    i.searchParams.append("instanceId", n), Object.keys(r).forEach((l) => {
      i.searchParams.append(l, r[l]);
    }), this.dappStorageKey && (i.hash = `#dappStorageKey=${this.dappStorageKey}`), new Jd({
      url: i,
      features: Bn(bS)
    }).open();
  }
  async getUserInfo() {
    return await this.communicationProvider.request({
      method: Yt.USER_INFO,
      params: []
    });
  }
  async initiateTopup(t, r) {
    if (!this.isInitialized)
      throw new Error("Torus is not initialized");
    const n = ui();
    return this.communicationProvider._handleWindow(n), await this.communicationProvider.request({
      method: Yt.TOPUP,
      params: {
        provider: t,
        params: r,
        windowId: n
      }
    });
  }
  // Solana specific API
  async getAccounts() {
    return await this.provider.request({
      method: "getAccounts",
      params: []
    });
  }
  async sendTransaction(t) {
    const r = di(t), n = r ? t.serialize({
      requireAllSignatures: !1
    }).toString("hex") : pe.Buffer.from(t.serialize()).toString("hex");
    return await this.provider.request({
      method: "send_transaction",
      params: {
        message: n,
        isLegacyTransaction: r
      }
    });
  }
  // support sendOptions
  async signAndSendTransaction(t, r) {
    const n = di(t), o = n ? t.serialize({
      requireAllSignatures: !1
    }).toString("hex") : pe.Buffer.from(t.serialize()).toString("hex");
    return {
      signature: await this.provider.request({
        method: "send_transaction",
        params: {
          message: o,
          options: r,
          isLegacyTransaction: n
        }
      })
    };
  }
  async signTransaction(t) {
    const r = di(t), n = r ? t.serializeMessage().toString("hex") : pe.Buffer.from(t.message.serialize()).toString("hex"), o = await this.provider.request({
      method: "sign_transaction",
      params: {
        message: n,
        messageOnly: !0,
        isLegacyTransaction: r
      }
    }), i = JSON.parse(o), s = {
      publicKey: new qa(i.publicKey),
      signature: pe.Buffer.from(i.signature, "hex")
    };
    return t.addSignature(s.publicKey, s.signature), t;
  }
  async signAllTransactions(t) {
    let r;
    const n = t.map((s) => (r = di(s), r ? s.serializeMessage().toString("hex") : pe.Buffer.from(s.message.serialize()).toString("hex"))), i = (await this.provider.request({
      method: "sign_all_transactions",
      params: {
        message: n,
        messageOnly: !0,
        isLegacyTransaction: r
      }
    })).map((s) => {
      const l = JSON.parse(s);
      return {
        publicKey: new qa(l.publicKey),
        signature: pe.Buffer.from(l.signature, "hex")
      };
    });
    return t.forEach((s, l) => (s.addSignature(i[l].publicKey, i[l].signature), s)), t;
  }
  async signMessage(t) {
    return await this.provider.request({
      method: "sign_message",
      params: {
        data: t
      }
    });
  }
  async getGaslessPublicKey() {
    return await this.provider.request({
      method: "get_gasless_public_key",
      params: []
    });
  }
  // async connect(): Promise<boolean> {
  //   const response = (await this.provider.request({
  //     method: "connect",
  //     params: {},
  //   })) as boolean;
  //   return response;
  // }
  handleDappStorageKey(t) {
    const r = `${$a.localStorageKeyPrefix}${window.location.hostname}`;
    let n = "";
    if (TS && t) {
      const o = window.localStorage.getItem(r);
      if (o)
        n = o;
      else {
        const i = `torus-app-${ui()}`;
        window.localStorage.setItem(r, i), n = i;
      }
    }
    return this.dappStorageKey = n, n;
  }
  async _setupWeb3(t) {
    We.info("setupWeb3 running");
    const r = new Fc({
      name: "embed_torus",
      target: "iframe_torus",
      targetWindow: this.torusIframe.contentWindow
    }), n = new Fc({
      name: "embed_communication",
      target: "iframe_communication",
      targetWindow: this.torusIframe.contentWindow
    }), o = new lo(r, {}), i = new co(n, {});
    o.tryWindowHandle = (c, u) => {
      const h = c;
      if (!Array.isArray(h) && AS.includes(h.method)) {
        if (!this.communicationProvider.isLoggedIn)
          throw new Error("User Not Logged In");
        const b = ui();
        i._handleWindow(b, {
          target: "_blank",
          features: Bn(Gd)
        }), h.windowId = b;
      }
      o._rpcEngine.handle(h, u);
    }, i.tryWindowHandle = (c, u) => {
      const h = c;
      if (!Array.isArray(h) && IS.includes(h.method)) {
        const b = ui();
        i._handleWindow(b, {
          target: "_blank",
          features: Bn(_S)
          // todo: are these features generic for all
        }), h.params.windowId = b;
      }
      i._rpcEngine.handle(h, u);
    };
    const s = (c) => {
      const u = o[c], h = this;
      o[c] = function(_, R) {
        const {
          method: T,
          params: N = []
        } = _;
        if (T === "solana_requestAccounts") {
          if (!R)
            return h.login({
              loginProvider: N[0]
            });
          h.login({
            loginProvider: N[0]
          }).then((D) => R(null, D)).catch((D) => R(D));
        }
        return u.apply(this, [_, R]);
      };
    };
    s("request"), s("sendAsync"), s("send");
    const l = new Proxy(o, {
      // straight up lie that we deleted the property so that it doesn't
      // throw an error in strict mode
      deleteProperty: () => !0
    }), f = new Proxy(i, {
      // straight up lie that we deleted the property so that it doesn't
      // throw an error in strict mode
      deleteProperty: () => !0
    });
    this.provider = l, this.communicationProvider = f, await Promise.all([o._initializeState(), i._initializeState(us(us({}, t), {}, {
      dappStorageKey: this.dappStorageKey,
      torusAlertContainer: this.torusAlertContainer,
      torusIframe: this.torusIframe
    }))]), We.debug("Torus - injected provider");
  }
}
export {
  Ln as BUTTON_POSITION,
  ls as LOGIN_PROVIDER,
  lS as TORUS_BUILD_ENV,
  lo as TorusInPageProvider,
  $S as default
};
