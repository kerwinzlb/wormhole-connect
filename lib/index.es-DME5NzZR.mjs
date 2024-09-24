import { d as te, aa as el, y as It, ck as Bo, o as Nw, g as Tw } from "./index-DV1w5RNX.mjs";
import { c as U, s as Vo, x as tl, r as rl, H as Cw, a as il, q as xs } from "./index-3AdIZdSb.mjs";
import { c as $w, a as xw, g as ku, s as Dw, d as Fw, k as qw, b as jw, I as mr, f as Et, t as dt, e as zu, C as Uw, r as Mw, h as Lr, i as sl, j as Nt, l as js, G as Lw, E as Ge, y as rt, o as Us, m as Ms, n as Hu, p as kw, q as zw, u as Hw, v as Ko, w as Ls, x as Wo, z as er, Y as Bw, A as Vw, B as Bu, D as Kw } from "./browser-DYtGpZK7.mjs";
var he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.getLocalStorage = he.getLocalStorageOrThrow = he.getCrypto = he.getCryptoOrThrow = he.getLocation = he.getLocationOrThrow = he.getNavigator = he.getNavigatorOrThrow = he.getDocument = he.getDocumentOrThrow = he.getFromWindowOrThrow = he.getFromWindow = void 0;
function vr(o) {
  let t;
  return typeof window < "u" && typeof window[o] < "u" && (t = window[o]), t;
}
he.getFromWindow = vr;
function Hr(o) {
  const t = vr(o);
  if (!t)
    throw new Error(`${o} is not defined in Window`);
  return t;
}
he.getFromWindowOrThrow = Hr;
function Ww() {
  return Hr("document");
}
he.getDocumentOrThrow = Ww;
function Gw() {
  return vr("document");
}
he.getDocument = Gw;
function Qw() {
  return Hr("navigator");
}
he.getNavigatorOrThrow = Qw;
function Jw() {
  return vr("navigator");
}
he.getNavigator = Jw;
function Yw() {
  return Hr("location");
}
he.getLocationOrThrow = Yw;
function Zw() {
  return vr("location");
}
he.getLocation = Zw;
function Xw() {
  return Hr("crypto");
}
he.getCryptoOrThrow = Xw;
function e0() {
  return vr("crypto");
}
he.getCrypto = e0;
function t0() {
  return Hr("localStorage");
}
he.getLocalStorageOrThrow = t0;
function r0() {
  return vr("localStorage");
}
he.getLocalStorage = r0;
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.getWindowMetadata = void 0;
const Vu = he;
function i0() {
  let o, t;
  try {
    o = Vu.getDocumentOrThrow(), t = Vu.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const O = o.getElementsByTagName("link"), A = [];
    for (let j = 0; j < O.length; j++) {
      const T = O[j], H = T.getAttribute("rel");
      if (H && H.toLowerCase().indexOf("icon") > -1) {
        const F = T.getAttribute("href");
        if (F)
          if (F.toLowerCase().indexOf("https:") === -1 && F.toLowerCase().indexOf("http:") === -1 && F.indexOf("//") !== 0) {
            let Q = t.protocol + "//" + t.host;
            if (F.indexOf("/") === 0)
              Q += F;
            else {
              const ye = t.pathname.split("/");
              ye.pop();
              const X = ye.join("/");
              Q += X + "/" + F;
            }
            A.push(Q);
          } else if (F.indexOf("//") === 0) {
            const Q = t.protocol + F;
            A.push(Q);
          } else
            A.push(F);
      }
    }
    return A;
  }
  function s(...O) {
    const A = o.getElementsByTagName("meta");
    for (let j = 0; j < A.length; j++) {
      const T = A[j], H = ["itemprop", "property", "name"].map((F) => T.getAttribute(F)).filter((F) => F ? O.includes(F) : !1);
      if (H.length && H) {
        const F = T.getAttribute("content");
        if (F)
          return F;
      }
    }
    return "";
  }
  function a() {
    let O = s("name", "og:site_name", "og:title", "twitter:title");
    return O || (O = o.title), O;
  }
  function u() {
    return s("description", "og:description", "twitter:description", "keywords");
  }
  const l = a(), f = u(), w = t.origin, _ = r();
  return {
    description: f,
    url: w,
    icons: _,
    name: l
  };
}
Go.getWindowMetadata = i0;
function s0(o, t = []) {
  const r = [];
  return Object.keys(o).forEach((s) => {
    if (t.length && !t.includes(s))
      return;
    const a = o[s];
    r.push(...a.accounts);
  }), r;
}
const n0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function o0(o, t) {
  const { message: r, code: s } = n0[o];
  return { message: r, code: s };
}
function No(o, t) {
  return !!Array.isArray(o);
}
const a0 = (o) => JSON.stringify(o, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), c0 = (o) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = o.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (s, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a);
};
function Qo(o) {
  if (typeof o != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof o}`);
  try {
    return c0(o);
  } catch {
    return o;
  }
}
function Jo(o) {
  return typeof o == "string" ? o : a0(o) || "";
}
const u0 = "idb-keyval";
var h0 = (o = {}) => {
  const t = o.base && o.base.length > 0 ? `${o.base}:` : "", r = (a) => t + a;
  let s;
  return o.dbName && o.storeName && (s = xw(o.dbName, o.storeName)), { name: u0, options: o, async hasItem(a) {
    return !(typeof await ku(r(a), s) > "u");
  }, async getItem(a) {
    return await ku(r(a), s) ?? null;
  }, setItem(a, u) {
    return Dw(r(a), u, s);
  }, removeItem(a) {
    return Fw(r(a), s);
  }, getKeys() {
    return qw(s);
  }, clear() {
    return jw(s);
  } };
};
const l0 = "WALLET_CONNECT_V2_INDEXED_DB", p0 = "keyvaluestorage";
let d0 = class {
  constructor() {
    this.indexedDb = $w({ driver: h0({ dbName: l0, storeName: p0 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null)
      return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Jo(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof te.global < "u" ? te.global : typeof self < "u" ? self : {}, Ts = { exports: {} };
(function() {
  let o;
  function t() {
  }
  o = t, o.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, o.prototype.setItem = function(r, s) {
    this[r] = String(s);
  }, o.prototype.removeItem = function(r) {
    delete this[r];
  }, o.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(s) {
      r[s] = void 0, delete r[s];
    });
  }, o.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, o.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof go < "u" && go.localStorage ? Ts.exports = go.localStorage : typeof window < "u" && window.localStorage ? Ts.exports = window.localStorage : Ts.exports = new t();
})();
function f0(o) {
  var t;
  return [o[0], Qo((t = o[1]) != null ? t : "")];
}
let g0 = class {
  constructor() {
    this.localStorage = Ts.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(f0);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null)
      return Qo(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Jo(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const y0 = "wc_storage_version", Ku = 1, m0 = async (o, t, r) => {
  const s = y0, a = await t.getItem(s);
  if (a && a >= Ku) {
    r(t);
    return;
  }
  const u = await o.getKeys();
  if (!u.length) {
    r(t);
    return;
  }
  const l = [];
  for (; u.length; ) {
    const f = u.shift();
    if (!f)
      continue;
    const w = f.toLowerCase();
    if (w.includes("wc@") || w.includes("walletconnect") || w.includes("wc_") || w.includes("wallet_connect")) {
      const _ = await o.getItem(f);
      await t.setItem(f, _), l.push(f);
    }
  }
  await t.setItem(s, Ku), r(t), v0(o, l);
}, v0 = async (o, t) => {
  t.length && t.forEach(async (r) => {
    await o.removeItem(r);
  });
};
let w0 = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const t = new g0();
    this.storage = t;
    try {
      const r = new d0();
      m0(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), t());
      }, 20);
    });
  }
};
var Br = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var To = function(o, t) {
  return To = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s)
      s.hasOwnProperty(a) && (r[a] = s[a]);
  }, To(o, t);
};
function b0(o, t) {
  To(o, t);
  function r() {
    this.constructor = o;
  }
  o.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Co = function() {
  return Co = Object.assign || function(t) {
    for (var r, s = 1, a = arguments.length; s < a; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
    }
    return t;
  }, Co.apply(this, arguments);
};
function _0(o, t) {
  var r = {};
  for (var s in o)
    Object.prototype.hasOwnProperty.call(o, s) && t.indexOf(s) < 0 && (r[s] = o[s]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(o); a < s.length; a++)
      t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[a]) && (r[s[a]] = o[s[a]]);
  return r;
}
function E0(o, t, r, s) {
  var a = arguments.length, u = a < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, r) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(o, t, r, s);
  else
    for (var f = o.length - 1; f >= 0; f--)
      (l = o[f]) && (u = (a < 3 ? l(u) : a > 3 ? l(t, r, u) : l(t, r)) || u);
  return a > 3 && u && Object.defineProperty(t, r, u), u;
}
function I0(o, t) {
  return function(r, s) {
    t(r, s, o);
  };
}
function P0(o, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(o, t);
}
function S0(o, t, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(l) {
      l(u);
    });
  }
  return new (r || (r = Promise))(function(u, l) {
    function f(N) {
      try {
        _(s.next(N));
      } catch (O) {
        l(O);
      }
    }
    function w(N) {
      try {
        _(s.throw(N));
      } catch (O) {
        l(O);
      }
    }
    function _(N) {
      N.done ? u(N.value) : a(N.value).then(f, w);
    }
    _((s = s.apply(o, t || [])).next());
  });
}
function O0(o, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, s, a, u, l;
  return l = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function f(_) {
    return function(N) {
      return w([_, N]);
    };
  }
  function w(_) {
    if (s)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (s = 1, a && (u = _[0] & 2 ? a.return : _[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, _[1])).done)
          return u;
        switch (a = 0, u && (_ = [_[0] & 2, u.value]), _[0]) {
          case 0:
          case 1:
            u = _;
            break;
          case 4:
            return r.label++, { value: _[1], done: !1 };
          case 5:
            r.label++, a = _[1], _ = [0];
            continue;
          case 7:
            _ = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (_[0] === 6 || _[0] === 2)) {
              r = 0;
              continue;
            }
            if (_[0] === 3 && (!u || _[1] > u[0] && _[1] < u[3])) {
              r.label = _[1];
              break;
            }
            if (_[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = _;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(_);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        _ = t.call(o, r);
      } catch (N) {
        _ = [6, N], a = 0;
      } finally {
        s = u = 0;
      }
    if (_[0] & 5)
      throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
function R0(o, t, r, s) {
  s === void 0 && (s = r), o[s] = t[r];
}
function A0(o, t) {
  for (var r in o)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = o[r]);
}
function $o(o) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && o[t], s = 0;
  if (r)
    return r.call(o);
  if (o && typeof o.length == "number")
    return {
      next: function() {
        return o && s >= o.length && (o = void 0), { value: o && o[s++], done: !o };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function nl(o, t) {
  var r = typeof Symbol == "function" && o[Symbol.iterator];
  if (!r)
    return o;
  var s = r.call(o), a, u = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = s.next()).done; )
      u.push(a.value);
  } catch (f) {
    l = { error: f };
  } finally {
    try {
      a && !a.done && (r = s.return) && r.call(s);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return u;
}
function N0() {
  for (var o = [], t = 0; t < arguments.length; t++)
    o = o.concat(nl(arguments[t]));
  return o;
}
function T0() {
  for (var o = 0, t = 0, r = arguments.length; t < r; t++)
    o += arguments[t].length;
  for (var s = Array(o), a = 0, t = 0; t < r; t++)
    for (var u = arguments[t], l = 0, f = u.length; l < f; l++, a++)
      s[a] = u[l];
  return s;
}
function Ni(o) {
  return this instanceof Ni ? (this.v = o, this) : new Ni(o);
}
function C0(o, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(o, t || []), a, u = [];
  return a = {}, l("next"), l("throw"), l("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function l(A) {
    s[A] && (a[A] = function(j) {
      return new Promise(function(T, H) {
        u.push([A, j, T, H]) > 1 || f(A, j);
      });
    });
  }
  function f(A, j) {
    try {
      w(s[A](j));
    } catch (T) {
      O(u[0][3], T);
    }
  }
  function w(A) {
    A.value instanceof Ni ? Promise.resolve(A.value.v).then(_, N) : O(u[0][2], A);
  }
  function _(A) {
    f("next", A);
  }
  function N(A) {
    f("throw", A);
  }
  function O(A, j) {
    A(j), u.shift(), u.length && f(u[0][0], u[0][1]);
  }
}
function $0(o) {
  var t, r;
  return t = {}, s("next"), s("throw", function(a) {
    throw a;
  }), s("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function s(a, u) {
    t[a] = o[a] ? function(l) {
      return (r = !r) ? { value: Ni(o[a](l)), done: a === "return" } : u ? u(l) : l;
    } : u;
  }
}
function x0(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = o[Symbol.asyncIterator], r;
  return t ? t.call(o) : (o = typeof $o == "function" ? $o(o) : o[Symbol.iterator](), r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function s(u) {
    r[u] = o[u] && function(l) {
      return new Promise(function(f, w) {
        l = o[u](l), a(f, w, l.done, l.value);
      });
    };
  }
  function a(u, l, f, w) {
    Promise.resolve(w).then(function(_) {
      u({ value: _, done: f });
    }, l);
  }
}
function D0(o, t) {
  return Object.defineProperty ? Object.defineProperty(o, "raw", { value: t }) : o.raw = t, o;
}
function F0(o) {
  if (o && o.__esModule)
    return o;
  var t = {};
  if (o != null)
    for (var r in o)
      Object.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t.default = o, t;
}
function q0(o) {
  return o && o.__esModule ? o : { default: o };
}
function j0(o, t) {
  if (!t.has(o))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(o);
}
function U0(o, t, r) {
  if (!t.has(o))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(o, r), r;
}
const M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Co;
  },
  __asyncDelegator: $0,
  __asyncGenerator: C0,
  __asyncValues: x0,
  __await: Ni,
  __awaiter: S0,
  __classPrivateFieldGet: j0,
  __classPrivateFieldSet: U0,
  __createBinding: R0,
  __decorate: E0,
  __exportStar: A0,
  __extends: b0,
  __generator: O0,
  __importDefault: q0,
  __importStar: F0,
  __makeTemplateObject: D0,
  __metadata: P0,
  __param: I0,
  __read: nl,
  __rest: _0,
  __spread: N0,
  __spreadArrays: T0,
  __values: $o
}, Symbol.toStringTag, { value: "Module" })), ks = /* @__PURE__ */ el(M0);
var wi = {}, yo = {}, bi = {};
const L0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: mr
}, Symbol.toStringTag, { value: "Module" })), k0 = /* @__PURE__ */ el(L0);
var Wu;
function z0() {
  if (Wu)
    return bi;
  Wu = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.IHeartBeat = void 0;
  const o = k0;
  class t extends o.IEvents {
    constructor(s) {
      super();
    }
  }
  return bi.IHeartBeat = t, bi;
}
var Gu;
function ol() {
  return Gu || (Gu = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), ks.__exportStar(z0(), o);
  }(yo)), yo;
}
var mo = {}, fr = {}, Qu;
function H0() {
  if (Qu)
    return fr;
  Qu = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.HEARTBEAT_EVENTS = fr.HEARTBEAT_INTERVAL = void 0;
  const o = U;
  return fr.HEARTBEAT_INTERVAL = o.FIVE_SECONDS, fr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, fr;
}
var Ju;
function al() {
  return Ju || (Ju = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), ks.__exportStar(H0(), o);
  }(mo)), mo;
}
var Yu;
function B0() {
  if (Yu)
    return wi;
  Yu = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.HeartBeat = void 0;
  const o = ks, t = It, r = U, s = ol(), a = al();
  class u extends s.IHeartBeat {
    constructor(f) {
      super(f), this.events = new t.EventEmitter(), this.interval = a.HEARTBEAT_INTERVAL, this.interval = (f == null ? void 0 : f.interval) || a.HEARTBEAT_INTERVAL;
    }
    static init(f) {
      return o.__awaiter(this, void 0, void 0, function* () {
        const w = new u(f);
        return yield w.init(), w;
      });
    }
    init() {
      return o.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(f, w) {
      this.events.on(f, w);
    }
    once(f, w) {
      this.events.once(f, w);
    }
    off(f, w) {
      this.events.off(f, w);
    }
    removeListener(f, w) {
      this.events.removeListener(f, w);
    }
    initialize() {
      return o.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return wi.HeartBeat = u, wi;
}
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  const t = ks;
  t.__exportStar(B0(), o), t.__exportStar(ol(), o), t.__exportStar(al(), o);
})(Br);
class V0 extends mr {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}
let K0 = class extends mr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
};
class W0 {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}
let G0 = class extends mr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Q0 = class extends mr {
  constructor(t) {
    super();
  }
}, J0 = class {
  constructor(t, r, s, a) {
    this.core = t, this.logger = r, this.name = s;
  }
}, Y0 = class extends mr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Z0 = class extends mr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, X0 = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, e1 = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, t1 = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, r1 = class {
  constructor(t) {
    this.client = t;
  }
};
var Zu = function(o, t, r) {
  if (r || arguments.length === 2)
    for (var s = 0, a = t.length, u; s < a; s++)
      (u || !(s in t)) && (u || (u = Array.prototype.slice.call(t, 0, s)), u[s] = t[s]);
  return o.concat(u || Array.prototype.slice.call(t));
}, i1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(t, r, s) {
      this.name = t, this.version = r, this.os = s, this.type = "browser";
    }
    return o;
  }()
), s1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = te.process.platform;
    }
    return o;
  }()
), n1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(t, r, s, a) {
      this.name = t, this.version = r, this.os = s, this.bot = a, this.type = "bot-device";
    }
    return o;
  }()
), o1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function o() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return o;
  }()
), a1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function o() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return o;
  }()
), c1 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, u1 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Xu = 3, h1 = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", c1]
], eh = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function l1(o) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new a1() : typeof navigator < "u" ? d1(navigator.userAgent) : g1();
}
function p1(o) {
  return o !== "" && h1.reduce(function(t, r) {
    var s = r[0], a = r[1];
    if (t)
      return t;
    var u = a.exec(o);
    return !!u && [s, u];
  }, !1);
}
function d1(o) {
  var t = p1(o);
  if (!t)
    return null;
  var r = t[0], s = t[1];
  if (r === "searchbot")
    return new o1();
  var a = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < Xu && (a = Zu(Zu([], a, !0), y1(Xu - a.length), !0)) : a = [];
  var u = a.join("."), l = f1(o), f = u1.exec(o);
  return f && f[1] ? new n1(r, u, l, f[1]) : new i1(r, u, l);
}
function f1(o) {
  for (var t = 0, r = eh.length; t < r; t++) {
    var s = eh[t], a = s[0], u = s[1], l = u.exec(o);
    if (l)
      return a;
  }
  return null;
}
function g1() {
  var o = typeof te.process < "u" && te.process.version;
  return o ? new s1(te.process.version.slice(1)) : null;
}
function y1(o) {
  for (var t = [], r = 0; r < o; r++)
    t.push("0");
  return t;
}
var le = {};
Object.defineProperty(le, "__esModule", { value: !0 });
le.getLocalStorage = le.getLocalStorageOrThrow = le.getCrypto = le.getCryptoOrThrow = cl = le.getLocation = le.getLocationOrThrow = Zo = le.getNavigator = le.getNavigatorOrThrow = Yo = le.getDocument = le.getDocumentOrThrow = le.getFromWindowOrThrow = le.getFromWindow = void 0;
function wr(o) {
  let t;
  return typeof window < "u" && typeof window[o] < "u" && (t = window[o]), t;
}
le.getFromWindow = wr;
function Vr(o) {
  const t = wr(o);
  if (!t)
    throw new Error(`${o} is not defined in Window`);
  return t;
}
le.getFromWindowOrThrow = Vr;
function m1() {
  return Vr("document");
}
le.getDocumentOrThrow = m1;
function v1() {
  return wr("document");
}
var Yo = le.getDocument = v1;
function w1() {
  return Vr("navigator");
}
le.getNavigatorOrThrow = w1;
function b1() {
  return wr("navigator");
}
var Zo = le.getNavigator = b1;
function _1() {
  return Vr("location");
}
le.getLocationOrThrow = _1;
function E1() {
  return wr("location");
}
var cl = le.getLocation = E1;
function I1() {
  return Vr("crypto");
}
le.getCryptoOrThrow = I1;
function P1() {
  return wr("crypto");
}
le.getCrypto = P1;
function S1() {
  return Vr("localStorage");
}
le.getLocalStorageOrThrow = S1;
function O1() {
  return wr("localStorage");
}
le.getLocalStorage = O1;
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
var ul = Xo.getWindowMetadata = void 0;
const th = le;
function R1() {
  let o, t;
  try {
    o = th.getDocumentOrThrow(), t = th.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const O = o.getElementsByTagName("link"), A = [];
    for (let j = 0; j < O.length; j++) {
      const T = O[j], H = T.getAttribute("rel");
      if (H && H.toLowerCase().indexOf("icon") > -1) {
        const F = T.getAttribute("href");
        if (F)
          if (F.toLowerCase().indexOf("https:") === -1 && F.toLowerCase().indexOf("http:") === -1 && F.indexOf("//") !== 0) {
            let Q = t.protocol + "//" + t.host;
            if (F.indexOf("/") === 0)
              Q += F;
            else {
              const ye = t.pathname.split("/");
              ye.pop();
              const X = ye.join("/");
              Q += X + "/" + F;
            }
            A.push(Q);
          } else if (F.indexOf("//") === 0) {
            const Q = t.protocol + F;
            A.push(Q);
          } else
            A.push(F);
      }
    }
    return A;
  }
  function s(...O) {
    const A = o.getElementsByTagName("meta");
    for (let j = 0; j < A.length; j++) {
      const T = A[j], H = ["itemprop", "property", "name"].map((F) => T.getAttribute(F)).filter((F) => F ? O.includes(F) : !1);
      if (H.length && H) {
        const F = T.getAttribute("content");
        if (F)
          return F;
      }
    }
    return "";
  }
  function a() {
    let O = s("name", "og:site_name", "og:title", "twitter:title");
    return O || (O = o.title), O;
  }
  function u() {
    return s("description", "og:description", "twitter:description", "keywords");
  }
  const l = a(), f = u(), w = t.origin, _ = r();
  return {
    description: f,
    url: w,
    icons: _,
    name: l
  };
}
ul = Xo.getWindowMetadata = R1;
const A1 = ":";
function N1(o) {
  const [t, r] = o.split(A1);
  return { namespace: t, reference: r };
}
function hl(o, t) {
  return o.includes(":") ? [o] : t.chains || [];
}
const ll = "base10", Le = "base16", xo = "base64pad", ea = "utf8", pl = 0, br = 1, T1 = 0, rh = 1, Do = 12, ta = 32;
function C1() {
  const o = tl.generateKeyPair();
  return { privateKey: dt(o.secretKey, Le), publicKey: dt(o.publicKey, Le) };
}
function Fo() {
  const o = rl.randomBytes(ta);
  return dt(o, Le);
}
function $1(o, t) {
  const r = tl.sharedKey(Et(o, Le), Et(t, Le), !0), s = new Cw(Vo.SHA256, r).expand(ta);
  return dt(s, Le);
}
function x1(o) {
  const t = Vo.hash(Et(o, Le));
  return dt(t, Le);
}
function kr(o) {
  const t = Vo.hash(Et(o, ea));
  return dt(t, Le);
}
function D1(o) {
  return Et(`${o}`, ll);
}
function Ci(o) {
  return Number(dt(o, ll));
}
function F1(o) {
  const t = D1(typeof o.type < "u" ? o.type : pl);
  if (Ci(t) === br && typeof o.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof o.senderPublicKey < "u" ? Et(o.senderPublicKey, Le) : void 0, s = typeof o.iv < "u" ? Et(o.iv, Le) : rl.randomBytes(Do), a = new il.ChaCha20Poly1305(Et(o.symKey, Le)).seal(s, Et(o.message, ea));
  return j1({ type: t, sealed: a, iv: s, senderPublicKey: r });
}
function q1(o) {
  const t = new il.ChaCha20Poly1305(Et(o.symKey, Le)), { sealed: r, iv: s } = Ds(o.encoded), a = t.open(s, r);
  if (a === null)
    throw new Error("Failed to decrypt");
  return dt(a, ea);
}
function j1(o) {
  if (Ci(o.type) === br) {
    if (typeof o.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return dt(zu([o.type, o.senderPublicKey, o.iv, o.sealed]), xo);
  }
  return dt(zu([o.type, o.iv, o.sealed]), xo);
}
function Ds(o) {
  const t = Et(o, xo), r = t.slice(T1, rh), s = rh;
  if (Ci(r) === br) {
    const f = s + ta, w = f + Do, _ = t.slice(s, f), N = t.slice(f, w), O = t.slice(w);
    return { type: r, sealed: O, iv: N, senderPublicKey: _ };
  }
  const a = s + Do, u = t.slice(s, a), l = t.slice(a);
  return { type: r, sealed: l, iv: u };
}
function U1(o, t) {
  const r = Ds(o);
  return dl({ type: Ci(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? dt(r.senderPublicKey, Le) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function dl(o) {
  const t = (o == null ? void 0 : o.type) || pl;
  if (t === br) {
    if (typeof (o == null ? void 0 : o.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (o == null ? void 0 : o.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: o == null ? void 0 : o.senderPublicKey, receiverPublicKey: o == null ? void 0 : o.receiverPublicKey };
}
function ih(o) {
  return o.type === br && typeof o.senderPublicKey == "string" && typeof o.receiverPublicKey == "string";
}
var M1 = Object.defineProperty, sh = Object.getOwnPropertySymbols, L1 = Object.prototype.hasOwnProperty, k1 = Object.prototype.propertyIsEnumerable, nh = (o, t, r) => t in o ? M1(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, oh = (o, t) => {
  for (var r in t || (t = {}))
    L1.call(t, r) && nh(o, r, t[r]);
  if (sh)
    for (var r of sh(t))
      k1.call(t, r) && nh(o, r, t[r]);
  return o;
};
const z1 = "ReactNative", tt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, H1 = "js";
function ra() {
  return typeof te.process < "u" && typeof te.process.versions < "u" && typeof te.process.versions.node < "u";
}
function Kr() {
  return !Yo() && !!Zo() && navigator.product === z1;
}
function Wr() {
  return !ra() && !!Zo() && !!Yo();
}
function $i() {
  return Kr() ? tt.reactNative : ra() ? tt.node : Wr() ? tt.browser : tt.unknown;
}
function B1() {
  var o;
  try {
    return Kr() && typeof te.global < "u" && typeof (te.global == null ? void 0 : te.global.Application) < "u" ? (o = te.global.Application) == null ? void 0 : o.applicationId : void 0;
  } catch {
    return;
  }
}
function V1(o, t) {
  let r = xs.parse(o);
  return r = oh(oh({}, r), t), o = xs.stringify(r), o;
}
function K1() {
  return ul() || { name: "", description: "", url: "", icons: [""] };
}
function W1() {
  if ($i() === tt.reactNative && typeof te.global < "u" && typeof (te.global == null ? void 0 : te.global.Platform) < "u") {
    const { OS: r, Version: s } = te.global.Platform;
    return [r, s].join("-");
  }
  const o = l1();
  if (o === null)
    return "unknown";
  const t = o.os ? o.os.replace(" ", "").toLowerCase() : "unknown";
  return o.type === "browser" ? [t, o.name, o.version].join("-") : [t, o.version].join("-");
}
function G1() {
  var o;
  const t = $i();
  return t === tt.browser ? [t, ((o = cl()) == null ? void 0 : o.host) || "unknown"].join(":") : t;
}
function Q1(o, t, r) {
  const s = W1(), a = G1();
  return [[o, t].join("-"), [H1, r].join("-"), s, a].join("/");
}
function J1({ protocol: o, version: t, relayUrl: r, sdkVersion: s, auth: a, projectId: u, useOnCloseEvent: l, bundleId: f }) {
  const w = r.split("?"), _ = Q1(o, t, s), N = { auth: a, ua: _, projectId: u, useOnCloseEvent: l || void 0, origin: f || void 0 }, O = V1(w[1] || "", N);
  return w[0] + "?" + O;
}
function gr(o, t) {
  return o.filter((r) => t.includes(r)).length === o.length;
}
function fl(o) {
  return Object.fromEntries(o.entries());
}
function gl(o) {
  return new Map(Object.entries(o));
}
function Ur(o = U.FIVE_MINUTES, t) {
  const r = U.toMiliseconds(o || U.FIVE_MINUTES);
  let s, a, u;
  return { resolve: (l) => {
    u && s && (clearTimeout(u), s(l));
  }, reject: (l) => {
    u && a && (clearTimeout(u), a(l));
  }, done: () => new Promise((l, f) => {
    u = setTimeout(() => {
      f(new Error(t));
    }, r), s = l, a = f;
  }) };
}
function Ti(o, t, r) {
  return new Promise(async (s, a) => {
    const u = setTimeout(() => a(new Error(r)), t);
    try {
      const l = await o;
      s(l);
    } catch (l) {
      a(l);
    }
    clearTimeout(u);
  });
}
function yl(o, t) {
  if (typeof t == "string" && t.startsWith(`${o}:`))
    return t;
  if (o.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (o.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${o}`);
}
function Y1(o) {
  return yl("topic", o);
}
function Z1(o) {
  return yl("id", o);
}
function ml(o) {
  const [t, r] = o.split(":"), s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    s.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    s.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return s;
}
function _t(o, t) {
  return U.fromMiliseconds(Date.now() + U.toMiliseconds(o));
}
function tr(o) {
  return Date.now() >= U.toMiliseconds(o);
}
function Pe(o, t) {
  return `${o}${t ? `:${t}` : ""}`;
}
function vo(o = [], t = []) {
  return [.../* @__PURE__ */ new Set([...o, ...t])];
}
async function X1({ id: o, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let a = s == null ? void 0 : s.href;
    if (typeof a != "string")
      return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const u = `${a}/wc?requestId=${o}&sessionTopic=${t}`, l = $i();
    l === tt.browser ? u.startsWith("https://") ? window.open(u, "_blank", "noreferrer noopener") : window.open(u, "_self", "noreferrer noopener") : l === tt.reactNative && typeof (te.global == null ? void 0 : te.global.Linking) < "u" && await te.global.Linking.openURL(u);
  } catch (s) {
    console.error(s);
  }
}
async function eb(o, t) {
  try {
    return await o.getItem(t) || (Wr() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const tb = "irn";
function qo(o) {
  return (o == null ? void 0 : o.relay) || { protocol: tb };
}
function Cs(o) {
  const t = Uw[o];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${o}`);
  return t;
}
var rb = Object.defineProperty, ah = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, sb = Object.prototype.propertyIsEnumerable, ch = (o, t, r) => t in o ? rb(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, nb = (o, t) => {
  for (var r in t || (t = {}))
    ib.call(t, r) && ch(o, r, t[r]);
  if (ah)
    for (var r of ah(t))
      sb.call(t, r) && ch(o, r, t[r]);
  return o;
};
function ob(o, t = "-") {
  const r = {}, s = "relay" + t;
  return Object.keys(o).forEach((a) => {
    if (a.startsWith(s)) {
      const u = a.replace(s, ""), l = o[a];
      r[u] = l;
    }
  }), r;
}
function uh(o) {
  o = o.includes("wc://") ? o.replace("wc://", "") : o, o = o.includes("wc:") ? o.replace("wc:", "") : o;
  const t = o.indexOf(":"), r = o.indexOf("?") !== -1 ? o.indexOf("?") : void 0, s = o.substring(0, t), a = o.substring(t + 1, r).split("@"), u = typeof r < "u" ? o.substring(r) : "", l = xs.parse(u);
  return { protocol: s, topic: ab(a[0]), version: parseInt(a[1], 10), symKey: l.symKey, relay: ob(l) };
}
function ab(o) {
  return o.startsWith("//") ? o.substring(2) : o;
}
function cb(o, t = "-") {
  const r = "relay", s = {};
  return Object.keys(o).forEach((a) => {
    const u = r + t + a;
    o[a] && (s[u] = o[a]);
  }), s;
}
function ub(o) {
  return `${o.protocol}:${o.topic}@${o.version}?` + xs.stringify(nb({ symKey: o.symKey }, cb(o.relay)));
}
function Gr(o) {
  const t = [];
  return o.forEach((r) => {
    const [s, a] = r.split(":");
    t.push(`${s}:${a}`);
  }), t;
}
function hb(o) {
  const t = [];
  return Object.values(o).forEach((r) => {
    t.push(...Gr(r.accounts));
  }), t;
}
function lb(o, t) {
  const r = [];
  return Object.values(o).forEach((s) => {
    Gr(s.accounts).includes(t) && r.push(...s.methods);
  }), r;
}
function pb(o, t) {
  const r = [];
  return Object.values(o).forEach((s) => {
    Gr(s.accounts).includes(t) && r.push(...s.events);
  }), r;
}
function db(o, t) {
  const r = $s(o, t);
  if (r)
    throw new Error(r.message);
  const s = {};
  for (const [a, u] of Object.entries(o))
    s[a] = { methods: u.methods, events: u.events, chains: u.accounts.map((l) => `${l.split(":")[0]}:${l.split(":")[1]}`) };
  return s;
}
function ia(o) {
  return o.includes(":");
}
function Oi(o) {
  return ia(o) ? o.split(":")[0] : o;
}
const fb = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, gb = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function $(o, t) {
  const { message: r, code: s } = gb[o];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Ie(o, t) {
  const { message: r, code: s } = fb[o];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function yr(o, t) {
  return !!Array.isArray(o);
}
function zr(o) {
  return Object.getPrototypeOf(o) === Object.prototype && Object.keys(o).length;
}
function We(o) {
  return typeof o > "u";
}
function Ae(o, t) {
  return t && We(o) ? !0 : typeof o == "string" && !!o.trim().length;
}
function sa(o, t) {
  return typeof o == "number" && !isNaN(o);
}
function yb(o, t) {
  const { requiredNamespaces: r } = t, s = Object.keys(o.namespaces), a = Object.keys(r);
  let u = !0;
  return gr(a, s) ? (s.forEach((l) => {
    const { accounts: f, methods: w, events: _ } = o.namespaces[l], N = Gr(f), O = r[l];
    (!gr(hl(l, O), N) || !gr(O.methods, w) || !gr(O.events, _)) && (u = !1);
  }), u) : !1;
}
function Fs(o) {
  return Ae(o, !1) && o.includes(":") ? o.split(":").length === 2 : !1;
}
function mb(o) {
  if (Ae(o, !1) && o.includes(":")) {
    const t = o.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Fs(r);
    }
  }
  return !1;
}
function vb(o) {
  if (Ae(o, !1))
    try {
      return typeof new URL(o) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function wb(o) {
  var t;
  return (t = o == null ? void 0 : o.proposer) == null ? void 0 : t.publicKey;
}
function bb(o) {
  return o == null ? void 0 : o.topic;
}
function _b(o, t) {
  let r = null;
  return Ae(o == null ? void 0 : o.publicKey, !1) || (r = $("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function hh(o) {
  let t = !0;
  return yr(o) ? o.length && (t = o.every((r) => Ae(r, !1))) : t = !1, t;
}
function Eb(o, t, r) {
  let s = null;
  return yr(t) && t.length ? t.forEach((a) => {
    s || Fs(a) || (s = Ie("UNSUPPORTED_CHAINS", `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`));
  }) : Fs(o) || (s = Ie("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function Ib(o, t, r) {
  let s = null;
  return Object.entries(o).forEach(([a, u]) => {
    if (s)
      return;
    const l = Eb(a, hl(a, u), `${t} ${r}`);
    l && (s = l);
  }), s;
}
function Pb(o, t) {
  let r = null;
  return yr(o) ? o.forEach((s) => {
    r || mb(s) || (r = Ie("UNSUPPORTED_ACCOUNTS", `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Ie("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Sb(o, t) {
  let r = null;
  return Object.values(o).forEach((s) => {
    if (r)
      return;
    const a = Pb(s == null ? void 0 : s.accounts, `${t} namespace`);
    a && (r = a);
  }), r;
}
function Ob(o, t) {
  let r = null;
  return hh(o == null ? void 0 : o.methods) ? hh(o == null ? void 0 : o.events) || (r = Ie("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Ie("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function vl(o, t) {
  let r = null;
  return Object.values(o).forEach((s) => {
    if (r)
      return;
    const a = Ob(s, `${t}, namespace`);
    a && (r = a);
  }), r;
}
function Rb(o, t, r) {
  let s = null;
  if (o && zr(o)) {
    const a = vl(o, t);
    a && (s = a);
    const u = Ib(o, t, r);
    u && (s = u);
  } else
    s = $("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return s;
}
function $s(o, t) {
  let r = null;
  if (o && zr(o)) {
    const s = vl(o, t);
    s && (r = s);
    const a = Sb(o, t);
    a && (r = a);
  } else
    r = $("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function wl(o) {
  return Ae(o.protocol, !0);
}
function Ab(o, t) {
  let r = !1;
  return o ? o && yr(o) && o.length && o.forEach((s) => {
    r = wl(s);
  }) : r = !0, r;
}
function Nb(o) {
  return typeof o == "number";
}
function Ke(o) {
  return typeof o < "u" && typeof o !== null;
}
function Tb(o) {
  return !(!o || typeof o != "object" || !o.code || !sa(o.code) || !o.message || !Ae(o.message, !1));
}
function Cb(o) {
  return !(We(o) || !Ae(o.method, !1));
}
function $b(o) {
  return !(We(o) || We(o.result) && We(o.error) || !sa(o.id) || !Ae(o.jsonrpc, !1));
}
function xb(o) {
  return !(We(o) || !Ae(o.name, !1));
}
function lh(o, t) {
  return !(!Fs(t) || !hb(o).includes(t));
}
function Db(o, t, r) {
  return Ae(r, !1) ? lb(o, t).includes(r) : !1;
}
function Fb(o, t, r) {
  return Ae(r, !1) ? pb(o, t).includes(r) : !1;
}
function ph(o, t, r) {
  let s = null;
  const a = qb(o), u = jb(t), l = Object.keys(a), f = Object.keys(u), w = dh(Object.keys(o)), _ = dh(Object.keys(t)), N = w.filter((O) => !_.includes(O));
  return N.length && (s = $("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${N.toString()}
      Received: ${Object.keys(t).toString()}`)), gr(l, f) || (s = $("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${l.toString()}
      Approved: ${f.toString()}`)), Object.keys(t).forEach((O) => {
    if (!O.includes(":") || s)
      return;
    const A = Gr(t[O].accounts);
    A.includes(O) || (s = $("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${O}
        Required: ${O}
        Approved: ${A.toString()}`));
  }), l.forEach((O) => {
    s || (gr(a[O].methods, u[O].methods) ? gr(a[O].events, u[O].events) || (s = $("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${O}`)) : s = $("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${O}`));
  }), s;
}
function qb(o) {
  const t = {};
  return Object.keys(o).forEach((r) => {
    var s;
    r.includes(":") ? t[r] = o[r] : (s = o[r].chains) == null || s.forEach((a) => {
      t[a] = { methods: o[r].methods, events: o[r].events };
    });
  }), t;
}
function dh(o) {
  return [...new Set(o.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function jb(o) {
  const t = {};
  return Object.keys(o).forEach((r) => {
    if (r.includes(":"))
      t[r] = o[r];
    else {
      const s = Gr(o[r].accounts);
      s == null || s.forEach((a) => {
        t[a] = { accounts: o[r].accounts.filter((u) => u.includes(`${a}:`)), methods: o[r].methods, events: o[r].events };
      });
    }
  }), t;
}
function Ub(o, t) {
  return sa(o) && o <= t.max && o >= t.min;
}
function fh() {
  const o = $i();
  return new Promise((t) => {
    switch (o) {
      case tt.browser:
        t(Mb());
        break;
      case tt.reactNative:
        t(Lb());
        break;
      case tt.node:
        t(kb());
        break;
      default:
        t(!0);
    }
  });
}
function Mb() {
  return Wr() && (navigator == null ? void 0 : navigator.onLine);
}
async function Lb() {
  if (Kr() && typeof te.global < "u" && te.global != null && te.global.NetInfo) {
    const o = await (te.global == null ? void 0 : te.global.NetInfo.fetch());
    return o == null ? void 0 : o.isConnected;
  }
  return !0;
}
function kb() {
  return !0;
}
function zb(o) {
  switch ($i()) {
    case tt.browser:
      Hb(o);
      break;
    case tt.reactNative:
      Bb(o);
      break;
  }
}
function Hb(o) {
  !Kr() && Wr() && (window.addEventListener("online", () => o(!0)), window.addEventListener("offline", () => o(!1)));
}
function Bb(o) {
  var t;
  Kr() && typeof te.global < "u" && te.global != null && te.global.NetInfo && ((t = te.global) == null || t.NetInfo.addEventListener((r) => o(r == null ? void 0 : r.isConnected)));
}
const wo = {};
let Os = class {
  static get(t) {
    return wo[t];
  }
  static set(t, r) {
    wo[t] = r;
  }
  static delete(t) {
    delete wo[t];
  }
};
class Ht extends Mw {
  constructor(t) {
    super(t), this.events = new It.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(Lr(t.method, t.params || [], t.id || sl().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (s, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (u) {
          a(u);
        }
      this.events.on(`${t.id}`, (u) => {
        Nt(u) ? a(u.error) : s(u.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (u) {
        a(u);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), js(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
      type: t.method,
      data: t.params
    });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
function Vb(o, t) {
  if (o.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var a = 0; a < o.length; a++) {
    var u = o.charAt(a), l = u.charCodeAt(0);
    if (r[l] !== 255)
      throw new TypeError(u + " is ambiguous");
    r[l] = a;
  }
  var f = o.length, w = o.charAt(0), _ = Math.log(f) / Math.log(256), N = Math.log(256) / Math.log(f);
  function O(T) {
    if (T instanceof Uint8Array || (ArrayBuffer.isView(T) ? T = new Uint8Array(T.buffer, T.byteOffset, T.byteLength) : Array.isArray(T) && (T = Uint8Array.from(T))), !(T instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (T.length === 0)
      return "";
    for (var H = 0, F = 0, Q = 0, ye = T.length; Q !== ye && T[Q] === 0; )
      Q++, H++;
    for (var X = (ye - Q) * N + 1 >>> 0, ee = new Uint8Array(X); Q !== ye; ) {
      for (var oe = T[Q], Ne = 0, me = X - 1; (oe !== 0 || Ne < F) && me !== -1; me--, Ne++)
        oe += 256 * ee[me] >>> 0, ee[me] = oe % f >>> 0, oe = oe / f >>> 0;
      if (oe !== 0)
        throw new Error("Non-zero carry");
      F = Ne, Q++;
    }
    for (var ve = X - F; ve !== X && ee[ve] === 0; )
      ve++;
    for (var Pt = w.repeat(H); ve < X; ++ve)
      Pt += o.charAt(ee[ve]);
    return Pt;
  }
  function A(T) {
    if (typeof T != "string")
      throw new TypeError("Expected String");
    if (T.length === 0)
      return new Uint8Array();
    var H = 0;
    if (T[H] !== " ") {
      for (var F = 0, Q = 0; T[H] === w; )
        F++, H++;
      for (var ye = (T.length - H) * _ + 1 >>> 0, X = new Uint8Array(ye); T[H]; ) {
        var ee = r[T.charCodeAt(H)];
        if (ee === 255)
          return;
        for (var oe = 0, Ne = ye - 1; (ee !== 0 || oe < Q) && Ne !== -1; Ne--, oe++)
          ee += f * X[Ne] >>> 0, X[Ne] = ee % 256 >>> 0, ee = ee / 256 >>> 0;
        if (ee !== 0)
          throw new Error("Non-zero carry");
        Q = oe, H++;
      }
      if (T[H] !== " ") {
        for (var me = ye - Q; me !== ye && X[me] === 0; )
          me++;
        for (var ve = new Uint8Array(F + (ye - me)), Pt = F; me !== ye; )
          ve[Pt++] = X[me++];
        return ve;
      }
    }
  }
  function j(T) {
    var H = A(T);
    if (H)
      return H;
    throw new Error(`Non-${t} character`);
  }
  return { encode: O, decodeUnsafe: A, decode: j };
}
var Kb = Vb, Wb = Kb;
const bl = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o))
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Gb = (o) => new TextEncoder().encode(o), Qb = (o) => new TextDecoder().decode(o);
class Jb {
  constructor(t, r, s) {
    this.name = t, this.prefix = r, this.baseEncode = s;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Yb {
  constructor(t, r, s) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return _l(this, t);
  }
}
class Zb {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return _l(this, t);
  }
  decode(t) {
    const r = t[0], s = this.decoders[r];
    if (s)
      return s.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const _l = (o, t) => new Zb({ ...o.decoders || { [o.prefix]: o }, ...t.decoders || { [t.prefix]: t } });
class Xb {
  constructor(t, r, s, a) {
    this.name = t, this.prefix = r, this.baseEncode = s, this.baseDecode = a, this.encoder = new Jb(t, r, s), this.decoder = new Yb(t, r, a);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const zs = ({ name: o, prefix: t, encode: r, decode: s }) => new Xb(o, t, r, s), xi = ({ prefix: o, name: t, alphabet: r }) => {
  const { encode: s, decode: a } = Wb(r, t);
  return zs({ prefix: o, name: t, encode: s, decode: (u) => bl(a(u)) });
}, e_ = (o, t, r, s) => {
  const a = {};
  for (let N = 0; N < t.length; ++N)
    a[t[N]] = N;
  let u = o.length;
  for (; o[u - 1] === "="; )
    --u;
  const l = new Uint8Array(u * r / 8 | 0);
  let f = 0, w = 0, _ = 0;
  for (let N = 0; N < u; ++N) {
    const O = a[o[N]];
    if (O === void 0)
      throw new SyntaxError(`Non-${s} character`);
    w = w << r | O, f += r, f >= 8 && (f -= 8, l[_++] = 255 & w >> f);
  }
  if (f >= r || 255 & w << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return l;
}, t_ = (o, t, r) => {
  const s = t[t.length - 1] === "=", a = (1 << r) - 1;
  let u = "", l = 0, f = 0;
  for (let w = 0; w < o.length; ++w)
    for (f = f << 8 | o[w], l += 8; l > r; )
      l -= r, u += t[a & f >> l];
  if (l && (u += t[a & f << r - l]), s)
    for (; u.length * r & 7; )
      u += "=";
  return u;
}, $e = ({ name: o, prefix: t, bitsPerChar: r, alphabet: s }) => zs({ prefix: t, name: o, encode(a) {
  return t_(a, s, r);
}, decode(a) {
  return e_(a, s, r, o);
} }), r_ = zs({ prefix: "\0", name: "identity", encode: (o) => Qb(o), decode: (o) => Gb(o) });
var i_ = Object.freeze({ __proto__: null, identity: r_ });
const s_ = $e({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var n_ = Object.freeze({ __proto__: null, base2: s_ });
const o_ = $e({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var a_ = Object.freeze({ __proto__: null, base8: o_ });
const c_ = xi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var u_ = Object.freeze({ __proto__: null, base10: c_ });
const h_ = $e({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), l_ = $e({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var p_ = Object.freeze({ __proto__: null, base16: h_, base16upper: l_ });
const d_ = $e({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), f_ = $e({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), g_ = $e({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), y_ = $e({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), m_ = $e({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), v_ = $e({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), w_ = $e({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), b_ = $e({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), __ = $e({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var E_ = Object.freeze({ __proto__: null, base32: d_, base32upper: f_, base32pad: g_, base32padupper: y_, base32hex: m_, base32hexupper: v_, base32hexpad: w_, base32hexpadupper: b_, base32z: __ });
const I_ = xi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), P_ = xi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var S_ = Object.freeze({ __proto__: null, base36: I_, base36upper: P_ });
const O_ = xi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), R_ = xi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var A_ = Object.freeze({ __proto__: null, base58btc: O_, base58flickr: R_ });
const N_ = $e({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), T_ = $e({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), C_ = $e({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), $_ = $e({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var x_ = Object.freeze({ __proto__: null, base64: N_, base64pad: T_, base64url: C_, base64urlpad: $_ });
const El = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), D_ = El.reduce((o, t, r) => (o[r] = t, o), []), F_ = El.reduce((o, t, r) => (o[t.codePointAt(0)] = r, o), []);
function q_(o) {
  return o.reduce((t, r) => (t += D_[r], t), "");
}
function j_(o) {
  const t = [];
  for (const r of o) {
    const s = F_[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const U_ = zs({ prefix: "🚀", name: "base256emoji", encode: q_, decode: j_ });
var M_ = Object.freeze({ __proto__: null, base256emoji: U_ }), L_ = Il, gh = 128, k_ = 127, z_ = ~k_, H_ = Math.pow(2, 31);
function Il(o, t, r) {
  t = t || [], r = r || 0;
  for (var s = r; o >= H_; )
    t[r++] = o & 255 | gh, o /= 128;
  for (; o & z_; )
    t[r++] = o & 255 | gh, o >>>= 7;
  return t[r] = o | 0, Il.bytes = r - s + 1, t;
}
var B_ = jo, V_ = 128, yh = 127;
function jo(o, s) {
  var r = 0, s = s || 0, a = 0, u = s, l, f = o.length;
  do {
    if (u >= f)
      throw jo.bytes = 0, new RangeError("Could not decode varint");
    l = o[u++], r += a < 28 ? (l & yh) << a : (l & yh) * Math.pow(2, a), a += 7;
  } while (l >= V_);
  return jo.bytes = u - s, r;
}
var K_ = Math.pow(2, 7), W_ = Math.pow(2, 14), G_ = Math.pow(2, 21), Q_ = Math.pow(2, 28), J_ = Math.pow(2, 35), Y_ = Math.pow(2, 42), Z_ = Math.pow(2, 49), X_ = Math.pow(2, 56), eE = Math.pow(2, 63), tE = function(o) {
  return o < K_ ? 1 : o < W_ ? 2 : o < G_ ? 3 : o < Q_ ? 4 : o < J_ ? 5 : o < Y_ ? 6 : o < Z_ ? 7 : o < X_ ? 8 : o < eE ? 9 : 10;
}, rE = { encode: L_, decode: B_, encodingLength: tE }, Pl = rE;
const mh = (o, t, r = 0) => (Pl.encode(o, t, r), t), vh = (o) => Pl.encodingLength(o), Uo = (o, t) => {
  const r = t.byteLength, s = vh(o), a = s + vh(r), u = new Uint8Array(a + r);
  return mh(o, u, 0), mh(r, u, s), u.set(t, a), new iE(o, r, t, u);
};
class iE {
  constructor(t, r, s, a) {
    this.code = t, this.size = r, this.digest = s, this.bytes = a;
  }
}
const Sl = ({ name: o, code: t, encode: r }) => new sE(o, t, r);
class sE {
  constructor(t, r, s) {
    this.name = t, this.code = r, this.encode = s;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Uo(this.code, r) : r.then((s) => Uo(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Ol = (o) => async (t) => new Uint8Array(await crypto.subtle.digest(o, t)), nE = Sl({ name: "sha2-256", code: 18, encode: Ol("SHA-256") }), oE = Sl({ name: "sha2-512", code: 19, encode: Ol("SHA-512") });
var aE = Object.freeze({ __proto__: null, sha256: nE, sha512: oE });
const Rl = 0, cE = "identity", Al = bl, uE = (o) => Uo(Rl, Al(o)), hE = { code: Rl, name: cE, encode: Al, digest: uE };
var lE = Object.freeze({ __proto__: null, identity: hE });
new TextEncoder(), new TextDecoder();
const wh = { ...i_, ...n_, ...a_, ...u_, ...p_, ...E_, ...S_, ...A_, ...x_, ...M_ };
({ ...aE, ...lE });
function Nl(o) {
  return globalThis.Buffer != null ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength) : o;
}
function pE(o = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Nl(globalThis.Buffer.allocUnsafe(o)) : new Uint8Array(o);
}
function Tl(o, t, r, s) {
  return { name: o, prefix: t, encoder: { name: o, prefix: t, encode: r }, decoder: { decode: s } };
}
const bh = Tl("utf8", "u", (o) => "u" + new TextDecoder("utf8").decode(o), (o) => new TextEncoder().encode(o.substring(1))), bo = Tl("ascii", "a", (o) => {
  let t = "a";
  for (let r = 0; r < o.length; r++)
    t += String.fromCharCode(o[r]);
  return t;
}, (o) => {
  o = o.substring(1);
  const t = pE(o.length);
  for (let r = 0; r < o.length; r++)
    t[r] = o.charCodeAt(r);
  return t;
}), dE = { utf8: bh, "utf-8": bh, hex: wh.base16, latin1: bo, ascii: bo, binary: bo, ...wh };
function fE(o, t = "utf8") {
  const r = dE[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Nl(globalThis.Buffer.from(o, "utf-8")) : r.decoder.decode(`${r.prefix}${o}`);
}
const Cl = "wc", gE = 2, na = "core", rr = `${Cl}@2:${na}:`, yE = { name: na, logger: "error" }, mE = { database: ":memory:" }, vE = "crypto", _h = "client_ed25519_seed", wE = U.ONE_DAY, bE = "keychain", _E = "0.3", EE = "messages", IE = "0.3", PE = U.SIX_HOURS, SE = "publisher", $l = "irn", OE = "error", xl = "wss://relay.walletconnect.com", Eh = "wss://relay.walletconnect.org", RE = "relayer", qe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, AE = "_subscription", kt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, NE = U.ONE_SECOND, TE = "2.11.0", CE = 1e4, $E = "0.3", xE = "WALLETCONNECT_CLIENT_ID", bt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, DE = "subscription", FE = "0.3", qE = U.FIVE_SECONDS * 1e3, jE = "pairing", UE = "0.3", _i = { wc_pairingDelete: { req: { ttl: U.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: U.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: U.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: U.ONE_DAY, prompt: !1, tag: 0 } } }, Ri = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, At = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, ME = "history", LE = "0.3", kE = "expirer", pt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, zE = "0.3", _o = "verify-api", Mr = "https://verify.walletconnect.com", Mo = "https://verify.walletconnect.org", HE = [Mr, Mo], BE = "echo", VE = "https://echo.walletconnect.com";
class KE {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = bE, this.version = _E, this.initialized = !1, this.storagePrefix = rr, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, a) => {
      this.isInitialized(), this.keychain.set(s, a), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.keychain.get(s);
      if (typeof a > "u") {
        const { message: u } = $("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(u);
      }
      return a;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = t, this.logger = Ge(r, this.name);
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, fl(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? gl(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class WE {
  constructor(t, r, s) {
    this.core = t, this.logger = r, this.name = vE, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a)), this.getClientId = async () => {
      this.isInitialized();
      const a = await this.getClientSeed(), u = Hu(a);
      return kw(u.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const a = C1();
      return this.setPrivateKey(a.publicKey, a.privateKey);
    }, this.signJWT = async (a) => {
      this.isInitialized();
      const u = await this.getClientSeed(), l = Hu(u), f = Fo();
      return await zw(f, a, wE, l);
    }, this.generateSharedKey = (a, u, l) => {
      this.isInitialized();
      const f = this.getPrivateKey(a), w = $1(f, u);
      return this.setSymKey(w, l);
    }, this.setSymKey = async (a, u) => {
      this.isInitialized();
      const l = u || x1(a);
      return await this.keychain.set(l, a), l;
    }, this.deleteKeyPair = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.deleteSymKey = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.encode = async (a, u, l) => {
      this.isInitialized();
      const f = dl(l), w = Jo(u);
      if (ih(f)) {
        const A = f.senderPublicKey, j = f.receiverPublicKey;
        a = await this.generateSharedKey(A, j);
      }
      const _ = this.getSymKey(a), { type: N, senderPublicKey: O } = f;
      return F1({ type: N, symKey: _, message: w, senderPublicKey: O });
    }, this.decode = async (a, u, l) => {
      this.isInitialized();
      const f = U1(u, l);
      if (ih(f)) {
        const w = f.receiverPublicKey, _ = f.senderPublicKey;
        a = await this.generateSharedKey(w, _);
      }
      try {
        const w = this.getSymKey(a), _ = q1({ symKey: w, encoded: u });
        return Qo(_);
      } catch (w) {
        this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`), this.logger.error(w);
      }
    }, this.getPayloadType = (a) => {
      const u = Ds(a);
      return Ci(u.type);
    }, this.getPayloadSenderPublicKey = (a) => {
      const u = Ds(a);
      return u.senderPublicKey ? dt(u.senderPublicKey, Le) : void 0;
    }, this.core = t, this.logger = Ge(r, this.name), this.keychain = s || new KE(this.core, this.logger);
  }
  get context() {
    return rt(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(_h);
    } catch {
      t = Fo(), await this.keychain.set(_h, t);
    }
    return fE(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class GE extends W0 {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = EE, this.version = IE, this.initialized = !1, this.storagePrefix = rr, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, a) => {
      this.isInitialized();
      const u = kr(a);
      let l = this.messages.get(s);
      return typeof l > "u" && (l = {}), typeof l[u] < "u" || (l[u] = a, this.messages.set(s, l), await this.persist()), u;
    }, this.get = (s) => {
      this.isInitialized();
      let a = this.messages.get(s);
      return typeof a > "u" && (a = {}), a;
    }, this.has = (s, a) => {
      this.isInitialized();
      const u = this.get(s), l = kr(a);
      return typeof u[l] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = Ge(t, this.name), this.core = r;
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, fl(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? gl(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class QE extends G0 {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new It.EventEmitter(), this.name = SE, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = U.toMiliseconds(U.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (s, a, u) => {
      var l;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: u } });
      try {
        const f = (u == null ? void 0 : u.ttl) || PE, w = qo(u), _ = (u == null ? void 0 : u.prompt) || !1, N = (u == null ? void 0 : u.tag) || 0, O = (u == null ? void 0 : u.id) || sl().toString(), A = { topic: s, message: a, opts: { ttl: f, relay: w, prompt: _, tag: N, id: O } }, j = setTimeout(() => this.queue.set(O, A), this.publishTimeout);
        try {
          await await Ti(this.rpcPublish(s, a, f, w, _, N, O), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(O), this.relayer.events.emit(qe.publish, A);
        } catch (T) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (l = u == null ? void 0 : u.internal) != null && l.throwOnFailedPublish)
            throw this.removeRequestFromQueue(O), T;
          return;
        } finally {
          clearTimeout(j);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: u } });
      } catch (f) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(f), f;
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.relayer = t, this.logger = Ge(r, this.name), this.registerEventListeners();
  }
  get context() {
    return rt(this.logger);
  }
  rpcPublish(t, r, s, a, u, l, f) {
    var w, _, N, O;
    const A = { method: Cs(a.protocol).publish, params: { topic: t, message: r, ttl: s, prompt: u, tag: l }, id: f };
    return We((w = A.params) == null ? void 0 : w.prompt) && ((_ = A.params) == null || delete _.prompt), We((N = A.params) == null ? void 0 : N.tag) && ((O = A.params) == null || delete O.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: A }), this.relayer.request(A);
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: a } = t;
      await this.publish(r, s, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Br.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(qe.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(qe.message_ack, (t) => {
      this.removeRequestFromQueue(t.id.toString());
    });
  }
}
class JE {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const s = this.get(t);
      this.exists(t, r) || this.map.set(t, [...s, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const s = this.get(t);
      if (!this.exists(t, r))
        return;
      const a = s.filter((u) => u !== r);
      if (!a.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, a);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var YE = Object.defineProperty, ZE = Object.defineProperties, XE = Object.getOwnPropertyDescriptors, Ih = Object.getOwnPropertySymbols, eI = Object.prototype.hasOwnProperty, tI = Object.prototype.propertyIsEnumerable, Ph = (o, t, r) => t in o ? YE(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Ei = (o, t) => {
  for (var r in t || (t = {}))
    eI.call(t, r) && Ph(o, r, t[r]);
  if (Ih)
    for (var r of Ih(t))
      tI.call(t, r) && Ph(o, r, t[r]);
  return o;
}, Eo = (o, t) => ZE(o, XE(t));
class rI extends Y0 {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new JE(), this.events = new It.EventEmitter(), this.name = DE, this.version = FE, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = rr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } });
      try {
        const u = qo(a), l = { topic: s, relay: u };
        this.pending.set(s, l);
        const f = await this.rpcSubscribe(s, u);
        return this.onSubscribe(f, l), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } }), f;
      } catch (u) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(u), u;
      }
    }, this.unsubscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), typeof (a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(s, a.id, a) : await this.unsubscribeByTopic(s, a);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? !0 : await new Promise((a, u) => {
      const l = new U.Watch();
      l.start(this.pendingSubscriptionWatchLabel);
      const f = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(f), l.stop(this.pendingSubscriptionWatchLabel), a(!0)), l.elapsed(this.pendingSubscriptionWatchLabel) >= qE && (clearInterval(f), l.stop(this.pendingSubscriptionWatchLabel), u(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = Ge(r, this.name), this.clientId = "";
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    try {
      const a = qo(s);
      await this.rpcUnsubscribe(t, r, a);
      const u = Ie("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, u), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    } catch (a) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(a), a;
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: Cs(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Ti(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(qe.connection_stalled);
    }
    return kr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, s = { method: Cs(r.protocol).batchSubscribe, params: { topics: t.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Ti(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(qe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const a = { method: Cs(s.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a }), this.relayer.request(a);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Eo(Ei({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, Ei({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, s), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: r }), this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, Ei({}, r)), this.topicMap.set(r.topic, t), this.events.emit(bt.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = $("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(s.topic, t), this.events.emit(bt.deleted, Eo(Ei({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(bt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(bt.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = $("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length)
      return;
    const r = await this.rpcBatchSubscribe(t);
    yr(r) && this.onBatchSubscribe(r.map((s, a) => Eo(Ei({}, t[a]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Br.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(qe.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(qe.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(bt.created, async (t) => {
      const r = bt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(bt.deleted, async (t) => {
      const r = bt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), t());
      }, this.pollingInterval);
    });
  }
}
var iI = Object.defineProperty, Sh = Object.getOwnPropertySymbols, sI = Object.prototype.hasOwnProperty, nI = Object.prototype.propertyIsEnumerable, Oh = (o, t, r) => t in o ? iI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, oI = (o, t) => {
  for (var r in t || (t = {}))
    sI.call(t, r) && Oh(o, r, t[r]);
  if (Sh)
    for (var r of Sh(t))
      nI.call(t, r) && Oh(o, r, t[r]);
  return o;
};
class aI extends Q0 {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new It.EventEmitter(), this.name = RE, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(qe.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(qe.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(kt.payload, this.onPayloadHandler), this.provider.on(kt.connect, this.onConnectHandler), this.provider.on(kt.disconnect, this.onDisconnectHandler), this.provider.on(kt.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Ge(t.logger, this.name) : Us(Ms({ level: t.logger || OE })), this.messages = new GE(this.logger, t.core), this.subscriber = new rI(this, this.logger), this.publisher = new QE(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || xl, this.projectId = t.projectId, this.bundleId = B1(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Eh}...`), await this.restartTransport(Eh);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, CE);
  }
  get context() {
    return rt(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(), await this.publisher.publish(t, r, s), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let a = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
    if (a)
      return a;
    let u;
    const l = (f) => {
      f.topic === t && (this.subscriber.off(bt.created, l), u());
    };
    return await Promise.all([new Promise((f) => {
      u = f, this.subscriber.on(bt.created, l);
    }), new Promise(async (f) => {
      a = await this.subscriber.subscribe(t, r), f();
    })]), a;
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Ti(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(bt.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, s) => {
          try {
            await Ti(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (a) {
            s(a);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message))
          throw r;
        this.provider.events.emit(kt.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await fh())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Ht(new Hw(J1({ sdkVersion: TE, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const a = this.messages.has(r, s);
    return a && this.logger.debug(`Ignoring duplicate message: ${s}`), a;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Ko(t)) {
      if (!t.method.endsWith(AE))
        return;
      const r = t.params, { topic: s, message: a, publishedAt: u } = r.data, l = { topic: s, message: a, publishedAt: u };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(oI({ type: "event", event: r.id }, l)), this.events.emit(r.id, l), await this.acknowledgePayload(t), await this.onMessageEvent(l);
    } else
      js(t) && this.events.emit(qe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(qe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Ls(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(kt.payload, this.onPayloadHandler), this.provider.off(kt.connect, this.onConnectHandler), this.provider.off(kt.disconnect, this.onDisconnectHandler), this.provider.off(kt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(qe.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await fh();
    zb(async (r) => {
      this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(qe.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((t) => this.logger.error(t));
    }, U.toMiliseconds(NE)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var cI = Object.defineProperty, Rh = Object.getOwnPropertySymbols, uI = Object.prototype.hasOwnProperty, hI = Object.prototype.propertyIsEnumerable, Ah = (o, t, r) => t in o ? cI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Nh = (o, t) => {
  for (var r in t || (t = {}))
    uI.call(t, r) && Ah(o, r, t[r]);
  if (Rh)
    for (var r of Rh(t))
      hI.call(t, r) && Ah(o, r, t[r]);
  return o;
};
class Hs extends J0 {
  constructor(t, r, s, a = rr, u = void 0) {
    super(t, r, s, a), this.core = t, this.logger = r, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = $E, this.cached = [], this.initialized = !1, this.storagePrefix = rr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((l) => {
        this.getKey && l !== null && !We(l) ? this.map.set(this.getKey(l), l) : wb(l) ? this.map.set(l.id, l) : bb(l) && this.map.set(l.topic, l);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (l, f) => {
      this.isInitialized(), this.map.has(l) ? await this.update(l, f) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: l, value: f }), this.map.set(l, f), await this.persist());
    }, this.get = (l) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: l }), this.getData(l)), this.getAll = (l) => (this.isInitialized(), l ? this.values.filter((f) => Object.keys(l).every((w) => Lw(f[w], l[w]))) : this.values), this.update = async (l, f) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: l, update: f });
      const w = Nh(Nh({}, this.getData(l)), f);
      this.map.set(l, w), await this.persist();
    }, this.delete = async (l, f) => {
      this.isInitialized(), this.map.has(l) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: l, reason: f }), this.map.delete(l), await this.persist());
    }, this.logger = Ge(r, this.name), this.storagePrefix = a, this.getKey = u;
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = $("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length)
        return;
      if (this.map.size) {
        const { message: r } = $("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class lI {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = jE, this.version = UE, this.events = new Bo(), this.initialized = !1, this.storagePrefix = rr, this.ignoredPayloadTypes = [br], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = Fo(), a = await this.core.crypto.setSymKey(s), u = _t(U.FIVE_MINUTES), l = { protocol: $l }, f = { topic: a, expiry: u, relay: l, active: !1 }, w = ub({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: s, relay: l });
      return await this.pairings.set(a, f), await this.core.relayer.subscribe(a), this.core.expirer.set(a, u), { topic: a, uri: w };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: a, symKey: u, relay: l } = uh(s.uri);
      let f;
      if (this.pairings.keys.includes(a) && (f = this.pairings.get(a), f.active))
        throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
      const w = _t(U.FIVE_MINUTES), _ = { topic: a, relay: l, expiry: w, active: !1 };
      return await this.pairings.set(a, _), this.core.expirer.set(a, w), s.activatePairing && await this.activate({ topic: a }), this.events.emit(Ri.create, _), this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(u, a), await this.core.relayer.subscribe(a, { relay: l })), _;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const a = _t(U.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: a }), this.core.expirer.set(s, a);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: a } = s;
      if (this.pairings.keys.includes(a)) {
        const u = await this.sendRequest(a, "wc_pairingPing", {}), { done: l, resolve: f, reject: w } = Ur();
        this.events.once(Pe("pairing_ping", u), ({ error: _ }) => {
          _ ? w(_) : f();
        }), await l();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: a }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: a });
    }, this.updateMetadata = async ({ topic: s, metadata: a }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: a });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: a } = s;
      this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", Ie("USER_DISCONNECTED")), await this.deletePairing(a));
    }, this.sendRequest = async (s, a, u) => {
      const l = Lr(a, u), f = await this.core.crypto.encode(s, l), w = _i[a].req;
      return this.core.history.set(s, l), this.core.relayer.publish(s, f, w), l.id;
    }, this.sendResult = async (s, a, u) => {
      const l = Ls(s, u), f = await this.core.crypto.encode(a, l), w = await this.core.history.get(a, s), _ = _i[w.request.method].res;
      await this.core.relayer.publish(a, f, _), await this.core.history.resolve(l);
    }, this.sendError = async (s, a, u) => {
      const l = Wo(s, u), f = await this.core.crypto.encode(a, l), w = await this.core.history.get(a, s), _ = _i[w.request.method] ? _i[w.request.method].res : _i.unregistered_method.res;
      await this.core.relayer.publish(a, f, _), await this.core.history.resolve(l);
    }, this.deletePairing = async (s, a) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, Ie("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), a ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((a) => tr(a.expiry));
      await Promise.all(s.map((a) => this.deletePairing(a.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: a, payload: u } = s;
      switch (u.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(a, u);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(a, u);
        default:
          return this.onUnknownRpcMethodRequest(a, u);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: a, payload: u } = s, l = (await this.core.history.get(a, u.id)).request.method;
      switch (l) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(a, u);
        default:
          return this.onUnknownRpcMethodResponse(l);
      }
    }, this.onPairingPingRequest = async (s, a) => {
      const { id: u } = a;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(u, s, !0), this.events.emit(Ri.ping, { id: u, topic: s });
      } catch (l) {
        await this.sendError(u, s, l), this.logger.error(l);
      }
    }, this.onPairingPingResponse = (s, a) => {
      const { id: u } = a;
      setTimeout(() => {
        er(a) ? this.events.emit(Pe("pairing_ping", u), {}) : Nt(a) && this.events.emit(Pe("pairing_ping", u), { error: a.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, a) => {
      const { id: u } = a;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(Ri.delete, { id: u, topic: s });
      } catch (l) {
        await this.sendError(u, s, l), this.logger.error(l);
      }
    }, this.onUnknownRpcMethodRequest = async (s, a) => {
      const { id: u, method: l } = a;
      try {
        if (this.registeredMethods.includes(l))
          return;
        const f = Ie("WC_METHOD_UNSUPPORTED", l);
        await this.sendError(u, s, f), this.logger.error(f);
      } catch (f) {
        await this.sendError(u, s, f), this.logger.error(f);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(Ie("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      var a;
      if (!Ke(s)) {
        const { message: l } = $("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(l);
      }
      if (!vb(s.uri)) {
        const { message: l } = $("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(l);
      }
      const u = uh(s.uri);
      if (!((a = u == null ? void 0 : u.relay) != null && a.protocol)) {
        const { message: l } = $("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(l);
      }
      if (!(u != null && u.symKey)) {
        const { message: l } = $("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(l);
      }
    }, this.isValidPing = async (s) => {
      if (!Ke(s)) {
        const { message: u } = $("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(u);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidDisconnect = async (s) => {
      if (!Ke(s)) {
        const { message: u } = $("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(u);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidPairingTopic = async (s) => {
      if (!Ae(s, !1)) {
        const { message: a } = $("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(a);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: a } = $("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(a);
      }
      if (tr(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: a } = $("EXPIRED", `pairing topic: ${s}`);
        throw new Error(a);
      }
    }, this.core = t, this.logger = Ge(r, this.name), this.pairings = new Hs(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return rt(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(qe.message, async (t) => {
      const { topic: r, message: s } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const a = await this.core.crypto.decode(r, s);
      try {
        Ko(a) ? (this.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : js(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.core.history.delete(r, a.id));
      } catch (u) {
        this.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(pt.expired, async (t) => {
      const { topic: r } = ml(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ri.expire, { topic: r }));
    });
  }
}
class pI extends K0 {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new It.EventEmitter(), this.name = ME, this.version = LE, this.cached = [], this.initialized = !1, this.storagePrefix = rr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, a, u) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: a, chainId: u }), this.records.has(a.id))
        return;
      const l = { id: a.id, topic: s, request: { method: a.method, params: a.params || null }, chainId: u, expiry: _t(U.THIRTY_DAYS) };
      this.records.set(l.id, l), this.events.emit(At.created, l);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const a = await this.getRecord(s.id);
      typeof a.response > "u" && (a.response = Nt(s) ? { error: s.error } : { result: s.result }, this.records.set(a.id, a), this.events.emit(At.updated, a));
    }, this.get = async (s, a) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: a }), await this.getRecord(a)), this.delete = (s, a) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: a }), this.values.forEach((u) => {
        if (u.topic === s) {
          if (typeof a < "u" && u.id !== a)
            return;
          this.records.delete(u.id), this.events.emit(At.deleted, u);
        }
      });
    }, this.exists = async (s, a) => (this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === s : !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = Ge(r, this.name);
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const s = { topic: r.topic, request: Lr(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(s);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = $("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(At.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length)
        return;
      if (this.records.size) {
        const { message: r } = $("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(At.created, (t) => {
      const r = At.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(At.updated, (t) => {
      const r = At.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(At.deleted, (t) => {
      const r = At.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(Br.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        U.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class dI extends Z0 {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new It.EventEmitter(), this.name = kE, this.version = zE, this.cached = [], this.initialized = !1, this.storagePrefix = rr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const a = this.formatTarget(s);
        return typeof this.getExpiration(a) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, a) => {
      this.isInitialized();
      const u = this.formatTarget(s), l = { target: u, expiry: a };
      this.expirations.set(u, l), this.checkExpiry(u, l), this.events.emit(pt.created, { target: u, expiration: l });
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.formatTarget(s);
      return this.getExpiration(a);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const a = this.formatTarget(s), u = this.getExpiration(a);
        this.expirations.delete(a), this.events.emit(pt.deleted, { target: a, expiration: u });
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = Ge(r, this.name);
  }
  get context() {
    return rt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string")
      return Y1(t);
    if (typeof t == "number")
      return Z1(t);
    const { message: r } = $("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(pt.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: r } = $("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = $("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    U.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(pt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Br.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(pt.created, (t) => {
      const r = pt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(pt.expired, (t) => {
      const r = pt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(pt.deleted, (t) => {
      const r = pt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class fI extends X0 {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = _o, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || Kr() || !Wr())
        return;
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      this.verifyUrl !== a && this.removeIframe(), this.verifyUrl = a;
      try {
        await this.createIframe();
      } catch (u) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(u);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Mo;
        try {
          await this.createIframe();
        } catch (u) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(u), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      let u;
      try {
        u = await this.fetchAttestation(s.attestationId, a);
      } catch (l) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`), this.logger.info(l), u = await this.fetchAttestation(s.attestationId, Mo);
      }
      return u;
    }, this.fetchAttestation = async (s, a) => {
      this.logger.info(`resolving attestation: ${s} from url: ${a}`);
      const u = this.startAbortTimer(U.ONE_SECOND * 2), l = await fetch(`${a}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(u), l.status === 200 ? await l.json() : void 0;
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var a;
      try {
        if (!this.iframe)
          return;
        (a = this.iframe.contentWindow) == null || a.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const a = (u) => {
        u.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", a), s());
      };
      await Promise.race([new Promise((u) => {
        if (document.getElementById(_o))
          return u();
        window.addEventListener("message", a);
        const l = document.createElement("iframe");
        l.id = _o, l.src = `${this.verifyUrl}/${this.projectId}`, l.style.display = "none", document.body.append(l), this.iframe = l, s = u;
      }), new Promise((u, l) => setTimeout(() => {
        window.removeEventListener("message", a), l("verify iframe load timeout");
      }, U.toMiliseconds(U.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (s) => {
      let a = s || Mr;
      return HE.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${Mr}`), a = Mr), a;
    }, this.logger = Ge(r, this.name), this.verifyUrl = Mr, this.abortController = new AbortController(), this.isDevEnv = ra() && te.process.env.IS_VITEST;
  }
  get context() {
    return rt(this.logger);
  }
  startAbortTimer(t) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), U.toMiliseconds(t));
  }
}
class gI extends e1 {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.context = BE, this.registerDeviceToken = async (s) => {
      const { clientId: a, token: u, notificationType: l, enableEncrypted: f = !1 } = s, w = `${VE}/${this.projectId}/clients`;
      await Bw(w, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: a, type: l, token: u, always_raw: f }) });
    }, this.logger = Ge(r, this.context);
  }
}
var yI = Object.defineProperty, Th = Object.getOwnPropertySymbols, mI = Object.prototype.hasOwnProperty, vI = Object.prototype.propertyIsEnumerable, Ch = (o, t, r) => t in o ? yI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, $h = (o, t) => {
  for (var r in t || (t = {}))
    mI.call(t, r) && Ch(o, r, t[r]);
  if (Th)
    for (var r of Th(t))
      vI.call(t, r) && Ch(o, r, t[r]);
  return o;
};
class oa extends V0 {
  constructor(t) {
    super(t), this.protocol = Cl, this.version = gE, this.name = na, this.events = new It.EventEmitter(), this.initialized = !1, this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || xl, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Us(Ms({ level: (t == null ? void 0 : t.logger) || yE.logger }));
    this.logger = Ge(r, this.name), this.heartbeat = new Br.HeartBeat(), this.crypto = new WE(this, this.logger, t == null ? void 0 : t.keychain), this.history = new pI(this, this.logger), this.expirer = new dI(this, this.logger), this.storage = t != null && t.storage ? t.storage : new w0($h($h({}, mE), t == null ? void 0 : t.storageOptions)), this.relayer = new aI({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new lI(this, this.logger), this.verify = new fI(this.projectId || "", this.logger), this.echoClient = new gI(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new oa(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(xE, s), r;
  }
  get context() {
    return rt(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
}
const wI = oa, Dl = "wc", Fl = 2, ql = "client", aa = `${Dl}@${Fl}:${ql}:`, Io = { name: ql, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, xh = "WALLETCONNECT_DEEPLINK_CHOICE", bI = "proposal", jl = "Proposal expired", _I = "session", Rs = U.SEVEN_DAYS, EI = "engine", Ii = { wc_sessionPropose: { req: { ttl: U.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: U.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: U.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: U.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: U.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: U.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: U.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: U.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: U.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: U.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: U.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: U.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: U.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: U.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Po = { min: U.FIVE_MINUTES, max: U.SEVEN_DAYS }, zt = { idle: "IDLE", active: "ACTIVE" }, II = "request", PI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var SI = Object.defineProperty, OI = Object.defineProperties, RI = Object.getOwnPropertyDescriptors, Dh = Object.getOwnPropertySymbols, AI = Object.prototype.hasOwnProperty, NI = Object.prototype.propertyIsEnumerable, Fh = (o, t, r) => t in o ? SI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Ve = (o, t) => {
  for (var r in t || (t = {}))
    AI.call(t, r) && Fh(o, r, t[r]);
  if (Dh)
    for (var r of Dh(t))
      NI.call(t, r) && Fh(o, r, t[r]);
  return o;
}, Pi = (o, t) => OI(o, RI(t));
class TI extends r1 {
  constructor(t) {
    super(t), this.name = EI, this.events = new Bo(), this.initialized = !1, this.ignoredPayloadTypes = [br], this.requestQueue = { state: zt.idle, queue: [] }, this.sessionRequestQueue = { state: zt.idle, queue: [] }, this.requestQueueDelay = U.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Ii) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, U.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const s = Pi(Ve({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: a, requiredNamespaces: u, optionalNamespaces: l, sessionProperties: f, relays: w } = s;
      let _ = a, N, O = !1;
      if (_ && (O = this.client.core.pairing.pairings.get(_).active), !_ || !O) {
        const { topic: X, uri: ee } = await this.client.core.pairing.create();
        _ = X, N = ee;
      }
      const A = await this.client.core.crypto.generateKeyPair(), j = Ve({ requiredNamespaces: u, optionalNamespaces: l, relays: w ?? [{ protocol: $l }], proposer: { publicKey: A, metadata: this.client.metadata } }, f && { sessionProperties: f }), { reject: T, resolve: H, done: F } = Ur(U.FIVE_MINUTES, jl);
      if (this.events.once(Pe("session_connect"), async ({ error: X, session: ee }) => {
        if (X)
          T(X);
        else if (ee) {
          ee.self.publicKey = A;
          const oe = Pi(Ve({}, ee), { requiredNamespaces: ee.requiredNamespaces, optionalNamespaces: ee.optionalNamespaces });
          await this.client.session.set(ee.topic, oe), await this.setExpiry(ee.topic, ee.expiry), _ && await this.client.core.pairing.updateMetadata({ topic: _, metadata: ee.peer.metadata }), H(oe);
        }
      }), !_) {
        const { message: X } = $("NO_MATCHING_KEY", `connect() pairing topic: ${_}`);
        throw new Error(X);
      }
      const Q = await this.sendRequest({ topic: _, method: "wc_sessionPropose", params: j }), ye = _t(U.FIVE_MINUTES);
      return await this.setProposal(Q, Ve({ id: Q, expiry: ye }, j)), { uri: N, approval: F };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: s, relayProtocol: a, namespaces: u, sessionProperties: l } = r, f = this.client.proposal.get(s);
      let { pairingTopic: w, proposer: _, requiredNamespaces: N, optionalNamespaces: O } = f;
      w = w || "", zr(N) || (N = db(u, "approve()"));
      const A = await this.client.core.crypto.generateKeyPair(), j = _.publicKey, T = await this.client.core.crypto.generateSharedKey(A, j);
      w && s && (await this.client.core.pairing.updateMetadata({ topic: w, metadata: _.metadata }), await this.sendResult({ id: s, topic: w, result: { relay: { protocol: a ?? "irn" }, responderPublicKey: A } }), await this.client.proposal.delete(s, Ie("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w }));
      const H = Ve({ relay: { protocol: a ?? "irn" }, namespaces: u, requiredNamespaces: N, optionalNamespaces: O, pairingTopic: w, controller: { publicKey: A, metadata: this.client.metadata }, expiry: _t(Rs) }, l && { sessionProperties: l });
      await this.client.core.relayer.subscribe(T), await this.sendRequest({ topic: T, method: "wc_sessionSettle", params: H, throwOnFailedPublish: !0 });
      const F = Pi(Ve({}, H), { topic: T, pairingTopic: w, acknowledged: !1, self: H.controller, peer: { publicKey: _.publicKey, metadata: _.metadata }, controller: A });
      return await this.client.session.set(T, F), await this.setExpiry(T, _t(Rs)), { topic: T, acknowledged: () => new Promise((Q) => setTimeout(() => Q(this.client.session.get(T)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: s, reason: a } = r, { pairingTopic: u } = this.client.proposal.get(s);
      u && (await this.sendError(s, u, a), await this.client.proposal.delete(s, Ie("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: s, namespaces: a } = r, u = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: a } }), { done: l, resolve: f, reject: w } = Ur();
      return this.events.once(Pe("session_update", u), ({ error: _ }) => {
        _ ? w(_) : f();
      }), await this.client.session.update(s, { namespaces: a }), { acknowledged: l };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: s } = r, a = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: u, resolve: l, reject: f } = Ur();
      return this.events.once(Pe("session_extend", a), ({ error: w }) => {
        w ? f(w) : l();
      }), await this.setExpiry(s, _t(Rs)), { acknowledged: u };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: s, request: a, topic: u, expiry: l } = r, f = Vw(), { done: w, resolve: _, reject: N } = Ur(l, "Request expired. Please try again.");
      return this.events.once(Pe("session_request", f), ({ error: O, result: A }) => {
        O ? N(O) : _(A);
      }), await Promise.all([new Promise(async (O) => {
        await this.sendRequest({ clientRpcId: f, topic: u, method: "wc_sessionRequest", params: { request: a, chainId: s }, expiry: l, throwOnFailedPublish: !0 }).catch((A) => N(A)), this.client.events.emit("session_request_sent", { topic: u, request: a, chainId: s, id: f }), O();
      }), new Promise(async (O) => {
        const A = await eb(this.client.core.storage, xh);
        X1({ id: f, topic: u, wcDeepLink: A }), O();
      }), w()]).then((O) => O[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: s, response: a } = r, { id: u } = a;
      er(a) ? await this.sendResult({ id: u, topic: s, result: a.result, throwOnFailedPublish: !0 }) : Nt(a) && await this.sendError(u, s, a.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: s } = r;
      if (this.client.session.keys.includes(s)) {
        const a = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: u, resolve: l, reject: f } = Ur();
        this.events.once(Pe("session_ping", a), ({ error: w }) => {
          w ? f(w) : l();
        }), await u();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: s, event: a, chainId: u } = r;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: a, chainId: u } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: s } = r;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: Ie("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((s) => yb(s, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(r.pairingTopic), a = this.client.core.pairing.pairings.getAll().filter((u) => {
            var l, f;
            return ((l = u.peerMetadata) == null ? void 0 : l.url) && ((f = u.peerMetadata) == null ? void 0 : f.url) === r.peer.metadata.url && u.topic && u.topic !== s.topic;
          });
          if (a.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), await Promise.all(a.map((u) => this.client.core.pairing.disconnect({ topic: u.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (r, s) => {
      const { self: a } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Ie("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), s || this.client.core.expirer.del(r), this.client.core.storage.removeItem(xh).catch((u) => this.client.logger.warn(u)), this.getPendingSessionRequests().forEach((u) => {
        u.topic === r && this.deletePendingSessionRequest(u.id, Ie("USER_DISCONNECTED"));
      });
    }, this.deleteProposal = async (r, s) => {
      await Promise.all([this.client.proposal.delete(r, Ie("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, s, a = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, s), a ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((u) => u.id !== r), a && (this.sessionRequestQueue.state = zt.idle);
    }, this.setExpiry = async (r, s) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: s }), this.client.core.expirer.set(r, s);
    }, this.setProposal = async (r, s) => {
      await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const s = Ii.wc_sessionRequest.req.ttl, { id: a, topic: u, params: l, verifyContext: f } = r;
      await this.client.pendingRequest.set(a, { id: a, topic: u, params: l, verifyContext: f }), s && this.client.core.expirer.set(a, _t(s));
    }, this.sendRequest = async (r) => {
      const { topic: s, method: a, params: u, expiry: l, relayRpcId: f, clientRpcId: w, throwOnFailedPublish: _ } = r, N = Lr(a, u, w);
      if (Wr() && PI.includes(a)) {
        const j = kr(JSON.stringify(N));
        this.client.core.verify.register({ attestationId: j });
      }
      const O = await this.client.core.crypto.encode(s, N), A = Ii[a].req;
      return l && (A.ttl = l), f && (A.id = f), this.client.core.history.set(s, N), _ ? (A.internal = Pi(Ve({}, A.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, O, A)) : this.client.core.relayer.publish(s, O, A).catch((j) => this.client.logger.error(j)), N.id;
    }, this.sendResult = async (r) => {
      const { id: s, topic: a, result: u, throwOnFailedPublish: l } = r, f = Ls(s, u), w = await this.client.core.crypto.encode(a, f), _ = await this.client.core.history.get(a, s), N = Ii[_.request.method].res;
      l ? (N.internal = Pi(Ve({}, N.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(a, w, N)) : this.client.core.relayer.publish(a, w, N).catch((O) => this.client.logger.error(O)), await this.client.core.history.resolve(f);
    }, this.sendError = async (r, s, a) => {
      const u = Wo(r, a), l = await this.client.core.crypto.encode(s, u), f = await this.client.core.history.get(s, r), w = Ii[f.request.method].res;
      this.client.core.relayer.publish(s, l, w), await this.client.core.history.resolve(u);
    }, this.cleanup = async () => {
      const r = [], s = [];
      this.client.session.getAll().forEach((a) => {
        tr(a.expiry) && r.push(a.topic);
      }), this.client.proposal.getAll().forEach((a) => {
        tr(a.expiry) && s.push(a.id);
      }), await Promise.all([...r.map((a) => this.deleteSession(a)), ...s.map((a) => this.deleteProposal(a))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === zt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = zt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = zt.idle;
    }, this.processRequest = (r) => {
      const { topic: s, payload: a } = r, u = a.method;
      switch (u) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, a);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, a);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, a);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, a);
        default:
          return this.client.logger.info(`Unsupported request method ${u}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: s, payload: a } = r, u = (await this.client.core.history.get(s, a.id)).request.method;
      switch (u) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, a);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, a);
        default:
          return this.client.logger.info(`Unsupported response method ${u}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: s } = r, { message: a } = $("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(a);
    }, this.onSessionProposeRequest = async (r, s) => {
      const { params: a, id: u } = s;
      try {
        this.isValidConnect(Ve({}, s.params));
        const l = _t(U.FIVE_MINUTES), f = Ve({ id: u, pairingTopic: r, expiry: l }, a);
        await this.setProposal(u, f);
        const w = kr(JSON.stringify(s)), _ = await this.getVerifyContext(w, f.proposer.metadata);
        this.client.events.emit("session_proposal", { id: u, params: f, verifyContext: _ });
      } catch (l) {
        await this.sendError(u, r, l), this.client.logger.error(l);
      }
    }, this.onSessionProposeResponse = async (r, s) => {
      const { id: a } = s;
      if (er(s)) {
        const { result: u } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: u });
        const l = this.client.proposal.get(a);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: l });
        const f = l.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: f });
        const w = u.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: w });
        const _ = await this.client.core.crypto.generateSharedKey(f, w);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: _ });
        const N = await this.client.core.relayer.subscribe(_);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: N }), await this.client.core.pairing.activate({ topic: r });
      } else
        Nt(s) && (await this.client.proposal.delete(a, Ie("USER_DISCONNECTED")), this.events.emit(Pe("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        this.isValidSessionSettleRequest(u);
        const { relay: l, controller: f, expiry: w, namespaces: _, requiredNamespaces: N, optionalNamespaces: O, sessionProperties: A, pairingTopic: j } = s.params, T = Ve({ topic: r, relay: l, expiry: w, namespaces: _, acknowledged: !0, pairingTopic: j, requiredNamespaces: N, optionalNamespaces: O, controller: f.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: f.publicKey, metadata: f.metadata } }, A && { sessionProperties: A });
        await this.sendResult({ id: s.id, topic: r, result: !0 }), this.events.emit(Pe("session_connect"), { session: T }), this.cleanupDuplicatePairings(T);
      } catch (l) {
        await this.sendError(a, r, l), this.client.logger.error(l);
      }
    }, this.onSessionSettleResponse = async (r, s) => {
      const { id: a } = s;
      er(s) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Pe("session_approve", a), {})) : Nt(s) && (await this.client.session.delete(r, Ie("USER_DISCONNECTED")), this.events.emit(Pe("session_approve", a), { error: s.error }));
    }, this.onSessionUpdateRequest = async (r, s) => {
      const { params: a, id: u } = s;
      try {
        const l = `${r}_session_update`, f = Os.get(l);
        if (f && this.isRequestOutOfSync(f, u)) {
          this.client.logger.info(`Discarding out of sync request - ${u}`);
          return;
        }
        this.isValidUpdate(Ve({ topic: r }, a)), await this.client.session.update(r, { namespaces: a.namespaces }), await this.sendResult({ id: u, topic: r, result: !0 }), this.client.events.emit("session_update", { id: u, topic: r, params: a }), Os.set(l, u);
      } catch (l) {
        await this.sendError(u, r, l), this.client.logger.error(l);
      }
    }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
      const { id: a } = s;
      er(s) ? this.events.emit(Pe("session_update", a), {}) : Nt(s) && this.events.emit(Pe("session_update", a), { error: s.error });
    }, this.onSessionExtendRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, _t(Rs)), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: a, topic: r });
      } catch (u) {
        await this.sendError(a, r, u), this.client.logger.error(u);
      }
    }, this.onSessionExtendResponse = (r, s) => {
      const { id: a } = s;
      er(s) ? this.events.emit(Pe("session_extend", a), {}) : Nt(s) && this.events.emit(Pe("session_extend", a), { error: s.error });
    }, this.onSessionPingRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: a, topic: r });
      } catch (u) {
        await this.sendError(a, r, u), this.client.logger.error(u);
      }
    }, this.onSessionPingResponse = (r, s) => {
      const { id: a } = s;
      setTimeout(() => {
        er(s) ? this.events.emit(Pe("session_ping", a), {}) : Nt(s) && this.events.emit(Pe("session_ping", a), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidDisconnect({ topic: r, reason: s.params }), await Promise.all([new Promise((u) => {
          this.client.core.relayer.once(qe.publish, async () => {
            u(await this.deleteSession(r));
          });
        }), this.sendResult({ id: a, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: a, topic: r });
      } catch (u) {
        this.client.logger.error(u);
      }
    }, this.onSessionRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        this.isValidRequest(Ve({ topic: r }, u));
        const l = kr(JSON.stringify(Lr("wc_sessionRequest", u, a))), f = this.client.session.get(r), w = await this.getVerifyContext(l, f.peer.metadata), _ = { id: a, topic: r, params: u, verifyContext: w };
        await this.setPendingSessionRequest(_), this.addSessionRequestToSessionRequestQueue(_), this.processSessionRequestQueue();
      } catch (l) {
        await this.sendError(a, r, l), this.client.logger.error(l);
      }
    }, this.onSessionRequestResponse = (r, s) => {
      const { id: a } = s;
      er(s) ? this.events.emit(Pe("session_request", a), { result: s.result }) : Nt(s) && this.events.emit(Pe("session_request", a), { error: s.error });
    }, this.onSessionEventRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        const l = `${r}_session_event_${u.event.name}`, f = Os.get(l);
        if (f && this.isRequestOutOfSync(f, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`);
          return;
        }
        this.isValidEmit(Ve({ topic: r }, u)), this.client.events.emit("session_event", { id: a, topic: r, params: u }), Os.set(l, a);
      } catch (l) {
        await this.sendError(a, r, l), this.client.logger.error(l);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = zt.idle, this.processSessionRequestQueue();
      }, U.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === zt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = zt.active, this.client.events.emit("session_request", r);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const s = this.client.proposal.getAll().find((a) => a.pairingTopic === r.topic);
      s && this.onSessionProposeRequest(r.topic, Lr("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (r) => {
      if (!Ke(r)) {
        const { message: w } = $("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(w);
      }
      const { pairingTopic: s, requiredNamespaces: a, optionalNamespaces: u, sessionProperties: l, relays: f } = r;
      if (We(s) || await this.isValidPairingTopic(s), !Ab(f)) {
        const { message: w } = $("MISSING_OR_INVALID", `connect() relays: ${f}`);
        throw new Error(w);
      }
      !We(a) && zr(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"), !We(u) && zr(u) !== 0 && this.validateNamespaces(u, "optionalNamespaces"), We(l) || this.validateSessionProps(l, "sessionProperties");
    }, this.validateNamespaces = (r, s) => {
      const a = Rb(r, "connect()", s);
      if (a)
        throw new Error(a.message);
    }, this.isValidApprove = async (r) => {
      if (!Ke(r))
        throw new Error($("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: s, namespaces: a, relayProtocol: u, sessionProperties: l } = r;
      await this.isValidProposalId(s);
      const f = this.client.proposal.get(s), w = $s(a, "approve()");
      if (w)
        throw new Error(w.message);
      const _ = ph(f.requiredNamespaces, a, "approve()");
      if (_)
        throw new Error(_.message);
      if (!Ae(u, !0)) {
        const { message: N } = $("MISSING_OR_INVALID", `approve() relayProtocol: ${u}`);
        throw new Error(N);
      }
      We(l) || this.validateSessionProps(l, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Ke(r)) {
        const { message: u } = $("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(u);
      }
      const { id: s, reason: a } = r;
      if (await this.isValidProposalId(s), !Tb(a)) {
        const { message: u } = $("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
        throw new Error(u);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Ke(r)) {
        const { message: _ } = $("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(_);
      }
      const { relay: s, controller: a, namespaces: u, expiry: l } = r;
      if (!wl(s)) {
        const { message: _ } = $("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(_);
      }
      const f = _b(a, "onSessionSettleRequest()");
      if (f)
        throw new Error(f.message);
      const w = $s(u, "onSessionSettleRequest()");
      if (w)
        throw new Error(w.message);
      if (tr(l)) {
        const { message: _ } = $("EXPIRED", "onSessionSettleRequest()");
        throw new Error(_);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Ke(r)) {
        const { message: w } = $("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(w);
      }
      const { topic: s, namespaces: a } = r;
      await this.isValidSessionTopic(s);
      const u = this.client.session.get(s), l = $s(a, "update()");
      if (l)
        throw new Error(l.message);
      const f = ph(u.requiredNamespaces, a, "update()");
      if (f)
        throw new Error(f.message);
    }, this.isValidExtend = async (r) => {
      if (!Ke(r)) {
        const { message: a } = $("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (r) => {
      if (!Ke(r)) {
        const { message: w } = $("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(w);
      }
      const { topic: s, request: a, chainId: u, expiry: l } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: f } = this.client.session.get(s);
      if (!lh(f, u)) {
        const { message: w } = $("MISSING_OR_INVALID", `request() chainId: ${u}`);
        throw new Error(w);
      }
      if (!Cb(a)) {
        const { message: w } = $("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
        throw new Error(w);
      }
      if (!Db(f, u, a.method)) {
        const { message: w } = $("MISSING_OR_INVALID", `request() method: ${a.method}`);
        throw new Error(w);
      }
      if (l && !Ub(l, Po)) {
        const { message: w } = $("MISSING_OR_INVALID", `request() expiry: ${l}. Expiry must be a number (in seconds) between ${Po.min} and ${Po.max}`);
        throw new Error(w);
      }
    }, this.isValidRespond = async (r) => {
      var s;
      if (!Ke(r)) {
        const { message: l } = $("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(l);
      }
      const { topic: a, response: u } = r;
      try {
        await this.isValidSessionTopic(a);
      } catch (l) {
        throw (s = r == null ? void 0 : r.response) != null && s.id && this.cleanupAfterResponse(r), l;
      }
      if (!$b(u)) {
        const { message: l } = $("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(u)}`);
        throw new Error(l);
      }
    }, this.isValidPing = async (r) => {
      if (!Ke(r)) {
        const { message: a } = $("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (r) => {
      if (!Ke(r)) {
        const { message: f } = $("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(f);
      }
      const { topic: s, event: a, chainId: u } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: l } = this.client.session.get(s);
      if (!lh(l, u)) {
        const { message: f } = $("MISSING_OR_INVALID", `emit() chainId: ${u}`);
        throw new Error(f);
      }
      if (!xb(a)) {
        const { message: f } = $("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(f);
      }
      if (!Fb(l, u, a.name)) {
        const { message: f } = $("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(f);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Ke(r)) {
        const { message: a } = $("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (r, s) => {
      const a = { verified: { verifyUrl: s.verifyUrl || Mr, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const u = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: s.verifyUrl });
        u && (a.verified.origin = u.origin, a.verified.isScam = u.isScam, a.verified.validation = u.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (u) {
        this.client.logger.info(u);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a;
    }, this.validateSessionProps = (r, s) => {
      Object.values(r).forEach((a) => {
        if (!Ae(a, !1)) {
          const { message: u } = $("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
          throw new Error(u);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = $("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(qe.message, async (t) => {
      const { topic: r, message: s } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const a = await this.client.core.crypto.decode(r, s);
      try {
        Ko(a) ? (this.client.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : js(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (u) {
        this.client.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(pt.expired, async (t) => {
      const { topic: r, id: s } = ml(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, $("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ri.create, (t) => this.onPairingCreated(t));
  }
  isValidPairingTopic(t) {
    if (!Ae(t, !1)) {
      const { message: r } = $("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = $("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (tr(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = $("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!Ae(t, !1)) {
      const { message: r } = $("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = $("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (tr(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = $("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (Ae(t, !1)) {
      const { message: r } = $("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = $("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Nb(t)) {
      const { message: r } = $("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = $("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (tr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = $("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class CI extends Hs {
  constructor(t, r) {
    super(t, r, bI, aa), this.core = t, this.logger = r;
  }
}
class $I extends Hs {
  constructor(t, r) {
    super(t, r, _I, aa), this.core = t, this.logger = r;
  }
}
class xI extends Hs {
  constructor(t, r) {
    super(t, r, II, aa, (s) => s.id), this.core = t, this.logger = r;
  }
}
let DI = class Ul extends t1 {
  constructor(t) {
    super(t), this.protocol = Dl, this.version = Fl, this.name = Io.name, this.events = new It.EventEmitter(), this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (t == null ? void 0 : t.name) || Io.name, this.metadata = (t == null ? void 0 : t.metadata) || K1();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Us(Ms({ level: (t == null ? void 0 : t.logger) || Io.logger }));
    this.core = (t == null ? void 0 : t.core) || new wI(t), this.logger = Ge(r, this.name), this.session = new $I(this.core, this.logger), this.proposal = new CI(this.core, this.logger), this.pendingRequest = new xI(this.core, this.logger), this.engine = new TI(this);
  }
  static async init(t) {
    const r = new Ul(t);
    return await r.initialize(), r;
  }
  get context() {
    return rt(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
};
var Lo = { exports: {} };
(function(o, t) {
  var r = typeof self < "u" ? self : Nw, s = function() {
    function u() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return u.prototype = r, new u();
  }();
  (function(u) {
    (function(l) {
      var f = {
        searchParams: "URLSearchParams" in u,
        iterable: "Symbol" in u && "iterator" in Symbol,
        blob: "FileReader" in u && "Blob" in u && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in u,
        arrayBuffer: "ArrayBuffer" in u
      };
      function w(E) {
        return E && DataView.prototype.isPrototypeOf(E);
      }
      if (f.arrayBuffer)
        var _ = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], N = ArrayBuffer.isView || function(E) {
          return E && _.indexOf(Object.prototype.toString.call(E)) > -1;
        };
      function O(E) {
        if (typeof E != "string" && (E = String(E)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(E))
          throw new TypeError("Invalid character in header field name");
        return E.toLowerCase();
      }
      function A(E) {
        return typeof E != "string" && (E = String(E)), E;
      }
      function j(E) {
        var C = {
          next: function() {
            var K = E.shift();
            return { done: K === void 0, value: K };
          }
        };
        return f.iterable && (C[Symbol.iterator] = function() {
          return C;
        }), C;
      }
      function T(E) {
        this.map = {}, E instanceof T ? E.forEach(function(C, K) {
          this.append(K, C);
        }, this) : Array.isArray(E) ? E.forEach(function(C) {
          this.append(C[0], C[1]);
        }, this) : E && Object.getOwnPropertyNames(E).forEach(function(C) {
          this.append(C, E[C]);
        }, this);
      }
      T.prototype.append = function(E, C) {
        E = O(E), C = A(C);
        var K = this.map[E];
        this.map[E] = K ? K + ", " + C : C;
      }, T.prototype.delete = function(E) {
        delete this.map[O(E)];
      }, T.prototype.get = function(E) {
        return E = O(E), this.has(E) ? this.map[E] : null;
      }, T.prototype.has = function(E) {
        return this.map.hasOwnProperty(O(E));
      }, T.prototype.set = function(E, C) {
        this.map[O(E)] = A(C);
      }, T.prototype.forEach = function(E, C) {
        for (var K in this.map)
          this.map.hasOwnProperty(K) && E.call(C, this.map[K], K, this);
      }, T.prototype.keys = function() {
        var E = [];
        return this.forEach(function(C, K) {
          E.push(K);
        }), j(E);
      }, T.prototype.values = function() {
        var E = [];
        return this.forEach(function(C) {
          E.push(C);
        }), j(E);
      }, T.prototype.entries = function() {
        var E = [];
        return this.forEach(function(C, K) {
          E.push([K, C]);
        }), j(E);
      }, f.iterable && (T.prototype[Symbol.iterator] = T.prototype.entries);
      function H(E) {
        if (E.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        E.bodyUsed = !0;
      }
      function F(E) {
        return new Promise(function(C, K) {
          E.onload = function() {
            C(E.result);
          }, E.onerror = function() {
            K(E.error);
          };
        });
      }
      function Q(E) {
        var C = new FileReader(), K = F(C);
        return C.readAsArrayBuffer(E), K;
      }
      function ye(E) {
        var C = new FileReader(), K = F(C);
        return C.readAsText(E), K;
      }
      function X(E) {
        for (var C = new Uint8Array(E), K = new Array(C.length), de = 0; de < C.length; de++)
          K[de] = String.fromCharCode(C[de]);
        return K.join("");
      }
      function ee(E) {
        if (E.slice)
          return E.slice(0);
        var C = new Uint8Array(E.byteLength);
        return C.set(new Uint8Array(E)), C.buffer;
      }
      function oe() {
        return this.bodyUsed = !1, this._initBody = function(E) {
          this._bodyInit = E, E ? typeof E == "string" ? this._bodyText = E : f.blob && Blob.prototype.isPrototypeOf(E) ? this._bodyBlob = E : f.formData && FormData.prototype.isPrototypeOf(E) ? this._bodyFormData = E : f.searchParams && URLSearchParams.prototype.isPrototypeOf(E) ? this._bodyText = E.toString() : f.arrayBuffer && f.blob && w(E) ? (this._bodyArrayBuffer = ee(E.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(E) || N(E)) ? this._bodyArrayBuffer = ee(E) : this._bodyText = E = Object.prototype.toString.call(E) : this._bodyText = "", this.headers.get("content-type") || (typeof E == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(E) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, f.blob && (this.blob = function() {
          var E = H(this);
          if (E)
            return E;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? H(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Q);
        }), this.text = function() {
          var E = H(this);
          if (E)
            return E;
          if (this._bodyBlob)
            return ye(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(X(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, f.formData && (this.formData = function() {
          return this.text().then(Pt);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var Ne = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function me(E) {
        var C = E.toUpperCase();
        return Ne.indexOf(C) > -1 ? C : E;
      }
      function ve(E, C) {
        C = C || {};
        var K = C.body;
        if (E instanceof ve) {
          if (E.bodyUsed)
            throw new TypeError("Already read");
          this.url = E.url, this.credentials = E.credentials, C.headers || (this.headers = new T(E.headers)), this.method = E.method, this.mode = E.mode, this.signal = E.signal, !K && E._bodyInit != null && (K = E._bodyInit, E.bodyUsed = !0);
        } else
          this.url = String(E);
        if (this.credentials = C.credentials || this.credentials || "same-origin", (C.headers || !this.headers) && (this.headers = new T(C.headers)), this.method = me(C.method || this.method || "GET"), this.mode = C.mode || this.mode || null, this.signal = C.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && K)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(K);
      }
      ve.prototype.clone = function() {
        return new ve(this, { body: this._bodyInit });
      };
      function Pt(E) {
        var C = new FormData();
        return E.trim().split("&").forEach(function(K) {
          if (K) {
            var de = K.split("="), ce = de.shift().replace(/\+/g, " "), se = de.join("=").replace(/\+/g, " ");
            C.append(decodeURIComponent(ce), decodeURIComponent(se));
          }
        }), C;
      }
      function Bs(E) {
        var C = new T(), K = E.replace(/\r?\n[\t ]+/g, " ");
        return K.split(/\r?\n/).forEach(function(de) {
          var ce = de.split(":"), se = ce.shift().trim();
          if (se) {
            var Tt = ce.join(":").trim();
            C.append(se, Tt);
          }
        }), C;
      }
      oe.call(ve.prototype);
      function it(E, C) {
        C || (C = {}), this.type = "default", this.status = C.status === void 0 ? 200 : C.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in C ? C.statusText : "OK", this.headers = new T(C.headers), this.url = C.url || "", this._initBody(E);
      }
      oe.call(it.prototype), it.prototype.clone = function() {
        return new it(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new T(this.headers),
          url: this.url
        });
      }, it.error = function() {
        var E = new it(null, { status: 0, statusText: "" });
        return E.type = "error", E;
      };
      var Vs = [301, 302, 303, 307, 308];
      it.redirect = function(E, C) {
        if (Vs.indexOf(C) === -1)
          throw new RangeError("Invalid status code");
        return new it(null, { status: C, headers: { location: E } });
      }, l.DOMException = u.DOMException;
      try {
        new l.DOMException();
      } catch {
        l.DOMException = function(C, K) {
          this.message = C, this.name = K;
          var de = Error(C);
          this.stack = de.stack;
        }, l.DOMException.prototype = Object.create(Error.prototype), l.DOMException.prototype.constructor = l.DOMException;
      }
      function Qr(E, C) {
        return new Promise(function(K, de) {
          var ce = new ve(E, C);
          if (ce.signal && ce.signal.aborted)
            return de(new l.DOMException("Aborted", "AbortError"));
          var se = new XMLHttpRequest();
          function Tt() {
            se.abort();
          }
          se.onload = function() {
            var xe = {
              status: se.status,
              statusText: se.statusText,
              headers: Bs(se.getAllResponseHeaders() || "")
            };
            xe.url = "responseURL" in se ? se.responseURL : xe.headers.get("X-Request-URL");
            var Jr = "response" in se ? se.response : se.responseText;
            K(new it(Jr, xe));
          }, se.onerror = function() {
            de(new TypeError("Network request failed"));
          }, se.ontimeout = function() {
            de(new TypeError("Network request failed"));
          }, se.onabort = function() {
            de(new l.DOMException("Aborted", "AbortError"));
          }, se.open(ce.method, ce.url, !0), ce.credentials === "include" ? se.withCredentials = !0 : ce.credentials === "omit" && (se.withCredentials = !1), "responseType" in se && f.blob && (se.responseType = "blob"), ce.headers.forEach(function(xe, Jr) {
            se.setRequestHeader(Jr, xe);
          }), ce.signal && (ce.signal.addEventListener("abort", Tt), se.onreadystatechange = function() {
            se.readyState === 4 && ce.signal.removeEventListener("abort", Tt);
          }), se.send(typeof ce._bodyInit > "u" ? null : ce._bodyInit);
        });
      }
      return Qr.polyfill = !0, u.fetch || (u.fetch = Qr, u.Headers = T, u.Request = ve, u.Response = it), l.Headers = T, l.Request = ve, l.Response = it, l.fetch = Qr, Object.defineProperty(l, "__esModule", { value: !0 }), l;
    })({});
  })(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
  var a = s;
  t = a.fetch, t.default = a.fetch, t.fetch = a.fetch, t.Headers = a.Headers, t.Request = a.Request, t.Response = a.Response, o.exports = t;
})(Lo, Lo.exports);
var FI = Lo.exports;
const qh = /* @__PURE__ */ Tw(FI), qI = (o) => JSON.stringify(o, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), jI = (o) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = o.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (s, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a);
};
function UI(o) {
  if (typeof o != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof o}`);
  try {
    return jI(o);
  } catch {
    return o;
  }
}
function jh(o) {
  return typeof o == "string" ? o : qI(o) || "";
}
var MI = Object.defineProperty, LI = Object.defineProperties, kI = Object.getOwnPropertyDescriptors, Uh = Object.getOwnPropertySymbols, zI = Object.prototype.hasOwnProperty, HI = Object.prototype.propertyIsEnumerable, Mh = (o, t, r) => t in o ? MI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Lh = (o, t) => {
  for (var r in t || (t = {}))
    zI.call(t, r) && Mh(o, r, t[r]);
  if (Uh)
    for (var r of Uh(t))
      HI.call(t, r) && Mh(o, r, t[r]);
  return o;
}, kh = (o, t) => LI(o, kI(t));
const BI = { Accept: "application/json", "Content-Type": "application/json" }, VI = "POST", zh = { headers: BI, method: VI }, Hh = 10;
let sr = class {
  constructor(t, r = !1) {
    if (this.url = t, this.disableProviderPing = r, this.events = new It.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Bu(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = r;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const r = jh(t), s = await (await qh(this.url, kh(Lh({}, zh), { body: r }))).json();
      this.onPayload({ data: s });
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  async register(t = this.url) {
    if (!Bu(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
        this.events.once("register_error", (u) => {
          this.resetMaxListeners(), a(u);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return a(new Error("HTTP connection is missing or invalid"));
          s();
        });
      });
    }
    this.url = t, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const r = jh({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await qh(t, kh(Lh({}, zh), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const s = this.parseError(r);
      throw this.events.emit("register_error", s), this.onClose(), s;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const r = typeof t.data == "string" ? UI(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r), a = s.message || s.toString(), u = Wo(t, a);
    this.events.emit("payload", u);
  }
  parseError(t, r = this.url) {
    return Kw(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Hh && this.events.setMaxListeners(Hh);
  }
};
const Bh = "error", KI = "wss://relay.walletconnect.com", WI = "wc", GI = "universal_provider", Vh = `${WI}@2:${GI}:`, QI = "https://rpc.walletconnect.com/v1/", Bt = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof te.global < "u" ? te.global : typeof self < "u" ? self : {}, ko = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(o, t) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", _ = 500, N = "__lodash_placeholder__", O = 1, A = 2, j = 4, T = 1, H = 2, F = 1, Q = 2, ye = 4, X = 8, ee = 16, oe = 32, Ne = 64, me = 128, ve = 256, Pt = 512, Bs = 30, it = "...", Vs = 800, Qr = 16, E = 1, C = 2, K = 3, de = 1 / 0, ce = 9007199254740991, se = 17976931348623157e292, Tt = NaN, xe = 4294967295, Jr = xe - 1, kl = xe >>> 1, zl = [["ary", me], ["bind", F], ["bindKey", Q], ["curry", X], ["curryRight", ee], ["flip", Pt], ["partial", oe], ["partialRight", Ne], ["rearg", ve]], Er = "[object Arguments]", Di = "[object Array]", Hl = "[object AsyncFunction]", Yr = "[object Boolean]", Zr = "[object Date]", Bl = "[object DOMException]", Fi = "[object Error]", qi = "[object Function]", ha = "[object GeneratorFunction]", ft = "[object Map]", Xr = "[object Number]", Vl = "[object Null]", Ct = "[object Object]", la = "[object Promise]", Kl = "[object Proxy]", ei = "[object RegExp]", gt = "[object Set]", ti = "[object String]", ji = "[object Symbol]", Wl = "[object Undefined]", ri = "[object WeakMap]", Gl = "[object WeakSet]", ii = "[object ArrayBuffer]", Ir = "[object DataView]", Ks = "[object Float32Array]", Ws = "[object Float64Array]", Gs = "[object Int8Array]", Qs = "[object Int16Array]", Js = "[object Int32Array]", Ys = "[object Uint8Array]", Zs = "[object Uint8ClampedArray]", Xs = "[object Uint16Array]", en = "[object Uint32Array]", Ql = /\b__p \+= '';/g, Jl = /\b(__p \+=) '' \+/g, Yl = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pa = /&(?:amp|lt|gt|quot|#39);/g, da = /[&<>"']/g, Zl = RegExp(pa.source), Xl = RegExp(da.source), ep = /<%-([\s\S]+?)%>/g, tp = /<%([\s\S]+?)%>/g, fa = /<%=([\s\S]+?)%>/g, rp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ip = /^\w*$/, sp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tn = /[\\^$.*+?()[\]{}|]/g, np = RegExp(tn.source), rn = /^\s+/, op = /\s/, ap = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, cp = /\{\n\/\* \[wrapped with (.+)\] \*/, up = /,? & /, hp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lp = /[()=,{}\[\]\/\s]/, pp = /\\(\\)?/g, dp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ga = /\w*$/, fp = /^[-+]0x[0-9a-f]+$/i, gp = /^0b[01]+$/i, yp = /^\[object .+?Constructor\]$/, mp = /^0o[0-7]+$/i, vp = /^(?:0|[1-9]\d*)$/, wp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ui = /($^)/, bp = /['\n\r\u2028\u2029\\]/g, Mi = "\\ud800-\\udfff", _p = "\\u0300-\\u036f", Ep = "\\ufe20-\\ufe2f", Ip = "\\u20d0-\\u20ff", ya = _p + Ep + Ip, ma = "\\u2700-\\u27bf", va = "a-z\\xdf-\\xf6\\xf8-\\xff", Pp = "\\xac\\xb1\\xd7\\xf7", Sp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Op = "\\u2000-\\u206f", Rp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wa = "A-Z\\xc0-\\xd6\\xd8-\\xde", ba = "\\ufe0e\\ufe0f", _a = Pp + Sp + Op + Rp, sn = "['’]", Ap = "[" + Mi + "]", Ea = "[" + _a + "]", Li = "[" + ya + "]", Ia = "\\d+", Np = "[" + ma + "]", Pa = "[" + va + "]", Sa = "[^" + Mi + _a + Ia + ma + va + wa + "]", nn = "\\ud83c[\\udffb-\\udfff]", Tp = "(?:" + Li + "|" + nn + ")", Oa = "[^" + Mi + "]", on = "(?:\\ud83c[\\udde6-\\uddff]){2}", an = "[\\ud800-\\udbff][\\udc00-\\udfff]", Pr = "[" + wa + "]", Ra = "\\u200d", Aa = "(?:" + Pa + "|" + Sa + ")", Cp = "(?:" + Pr + "|" + Sa + ")", Na = "(?:" + sn + "(?:d|ll|m|re|s|t|ve))?", Ta = "(?:" + sn + "(?:D|LL|M|RE|S|T|VE))?", Ca = Tp + "?", $a = "[" + ba + "]?", $p = "(?:" + Ra + "(?:" + [Oa, on, an].join("|") + ")" + $a + Ca + ")*", xp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Dp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xa = $a + Ca + $p, Fp = "(?:" + [Np, on, an].join("|") + ")" + xa, qp = "(?:" + [Oa + Li + "?", Li, on, an, Ap].join("|") + ")", jp = RegExp(sn, "g"), Up = RegExp(Li, "g"), cn = RegExp(nn + "(?=" + nn + ")|" + qp + xa, "g"), Mp = RegExp([Pr + "?" + Pa + "+" + Na + "(?=" + [Ea, Pr, "$"].join("|") + ")", Cp + "+" + Ta + "(?=" + [Ea, Pr + Aa, "$"].join("|") + ")", Pr + "?" + Aa + "+" + Na, Pr + "+" + Ta, Dp, xp, Ia, Fp].join("|"), "g"), Lp = RegExp("[" + Ra + Mi + ya + ba + "]"), kp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zp = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Hp = -1, pe = {};
    pe[Ks] = pe[Ws] = pe[Gs] = pe[Qs] = pe[Js] = pe[Ys] = pe[Zs] = pe[Xs] = pe[en] = !0, pe[Er] = pe[Di] = pe[ii] = pe[Yr] = pe[Ir] = pe[Zr] = pe[Fi] = pe[qi] = pe[ft] = pe[Xr] = pe[Ct] = pe[ei] = pe[gt] = pe[ti] = pe[ri] = !1;
    var ue = {};
    ue[Er] = ue[Di] = ue[ii] = ue[Ir] = ue[Yr] = ue[Zr] = ue[Ks] = ue[Ws] = ue[Gs] = ue[Qs] = ue[Js] = ue[ft] = ue[Xr] = ue[Ct] = ue[ei] = ue[gt] = ue[ti] = ue[ji] = ue[Ys] = ue[Zs] = ue[Xs] = ue[en] = !0, ue[Fi] = ue[qi] = ue[ri] = !1;
    var Bp = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Vp = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Kp = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Wp = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Gp = parseFloat, Qp = parseInt, Da = typeof Si == "object" && Si && Si.Object === Object && Si, Jp = typeof self == "object" && self && self.Object === Object && self, Te = Da || Jp || Function("return this")(), un = t && !t.nodeType && t, nr = un && !0 && o && !o.nodeType && o, Fa = nr && nr.exports === un, hn = Fa && Da.process, st = function() {
      try {
        var m = nr && nr.require && nr.require("util").types;
        return m || hn && hn.binding && hn.binding("util");
      } catch {
      }
    }(), qa = st && st.isArrayBuffer, ja = st && st.isDate, Ua = st && st.isMap, Ma = st && st.isRegExp, La = st && st.isSet, ka = st && st.isTypedArray;
    function Qe(m, I, b) {
      switch (b.length) {
        case 0:
          return m.call(I);
        case 1:
          return m.call(I, b[0]);
        case 2:
          return m.call(I, b[0], b[1]);
        case 3:
          return m.call(I, b[0], b[1], b[2]);
      }
      return m.apply(I, b);
    }
    function Yp(m, I, b, D) {
      for (var z = -1, re = m == null ? 0 : m.length; ++z < re; ) {
        var Se = m[z];
        I(D, Se, b(Se), m);
      }
      return D;
    }
    function nt(m, I) {
      for (var b = -1, D = m == null ? 0 : m.length; ++b < D && I(m[b], b, m) !== !1; )
        ;
      return m;
    }
    function Zp(m, I) {
      for (var b = m == null ? 0 : m.length; b-- && I(m[b], b, m) !== !1; )
        ;
      return m;
    }
    function za(m, I) {
      for (var b = -1, D = m == null ? 0 : m.length; ++b < D; )
        if (!I(m[b], b, m))
          return !1;
      return !0;
    }
    function Vt(m, I) {
      for (var b = -1, D = m == null ? 0 : m.length, z = 0, re = []; ++b < D; ) {
        var Se = m[b];
        I(Se, b, m) && (re[z++] = Se);
      }
      return re;
    }
    function ki(m, I) {
      var b = m == null ? 0 : m.length;
      return !!b && Sr(m, I, 0) > -1;
    }
    function ln(m, I, b) {
      for (var D = -1, z = m == null ? 0 : m.length; ++D < z; )
        if (b(I, m[D]))
          return !0;
      return !1;
    }
    function fe(m, I) {
      for (var b = -1, D = m == null ? 0 : m.length, z = Array(D); ++b < D; )
        z[b] = I(m[b], b, m);
      return z;
    }
    function Kt(m, I) {
      for (var b = -1, D = I.length, z = m.length; ++b < D; )
        m[z + b] = I[b];
      return m;
    }
    function pn(m, I, b, D) {
      var z = -1, re = m == null ? 0 : m.length;
      for (D && re && (b = m[++z]); ++z < re; )
        b = I(b, m[z], z, m);
      return b;
    }
    function Xp(m, I, b, D) {
      var z = m == null ? 0 : m.length;
      for (D && z && (b = m[--z]); z--; )
        b = I(b, m[z], z, m);
      return b;
    }
    function dn(m, I) {
      for (var b = -1, D = m == null ? 0 : m.length; ++b < D; )
        if (I(m[b], b, m))
          return !0;
      return !1;
    }
    var ed = fn("length");
    function td(m) {
      return m.split("");
    }
    function rd(m) {
      return m.match(hp) || [];
    }
    function Ha(m, I, b) {
      var D;
      return b(m, function(z, re, Se) {
        if (I(z, re, Se))
          return D = re, !1;
      }), D;
    }
    function zi(m, I, b, D) {
      for (var z = m.length, re = b + (D ? 1 : -1); D ? re-- : ++re < z; )
        if (I(m[re], re, m))
          return re;
      return -1;
    }
    function Sr(m, I, b) {
      return I === I ? fd(m, I, b) : zi(m, Ba, b);
    }
    function id(m, I, b, D) {
      for (var z = b - 1, re = m.length; ++z < re; )
        if (D(m[z], I))
          return z;
      return -1;
    }
    function Ba(m) {
      return m !== m;
    }
    function Va(m, I) {
      var b = m == null ? 0 : m.length;
      return b ? yn(m, I) / b : Tt;
    }
    function fn(m) {
      return function(I) {
        return I == null ? r : I[m];
      };
    }
    function gn(m) {
      return function(I) {
        return m == null ? r : m[I];
      };
    }
    function Ka(m, I, b, D, z) {
      return z(m, function(re, Se, ae) {
        b = D ? (D = !1, re) : I(b, re, Se, ae);
      }), b;
    }
    function sd(m, I) {
      var b = m.length;
      for (m.sort(I); b--; )
        m[b] = m[b].value;
      return m;
    }
    function yn(m, I) {
      for (var b, D = -1, z = m.length; ++D < z; ) {
        var re = I(m[D]);
        re !== r && (b = b === r ? re : b + re);
      }
      return b;
    }
    function mn(m, I) {
      for (var b = -1, D = Array(m); ++b < m; )
        D[b] = I(b);
      return D;
    }
    function nd(m, I) {
      return fe(I, function(b) {
        return [b, m[b]];
      });
    }
    function Wa(m) {
      return m && m.slice(0, Ya(m) + 1).replace(rn, "");
    }
    function Je(m) {
      return function(I) {
        return m(I);
      };
    }
    function vn(m, I) {
      return fe(I, function(b) {
        return m[b];
      });
    }
    function si(m, I) {
      return m.has(I);
    }
    function Ga(m, I) {
      for (var b = -1, D = m.length; ++b < D && Sr(I, m[b], 0) > -1; )
        ;
      return b;
    }
    function Qa(m, I) {
      for (var b = m.length; b-- && Sr(I, m[b], 0) > -1; )
        ;
      return b;
    }
    function od(m, I) {
      for (var b = m.length, D = 0; b--; )
        m[b] === I && ++D;
      return D;
    }
    var ad = gn(Bp), cd = gn(Vp);
    function ud(m) {
      return "\\" + Wp[m];
    }
    function hd(m, I) {
      return m == null ? r : m[I];
    }
    function Or(m) {
      return Lp.test(m);
    }
    function ld(m) {
      return kp.test(m);
    }
    function pd(m) {
      for (var I, b = []; !(I = m.next()).done; )
        b.push(I.value);
      return b;
    }
    function wn(m) {
      var I = -1, b = Array(m.size);
      return m.forEach(function(D, z) {
        b[++I] = [z, D];
      }), b;
    }
    function Ja(m, I) {
      return function(b) {
        return m(I(b));
      };
    }
    function Wt(m, I) {
      for (var b = -1, D = m.length, z = 0, re = []; ++b < D; ) {
        var Se = m[b];
        (Se === I || Se === N) && (m[b] = N, re[z++] = b);
      }
      return re;
    }
    function Hi(m) {
      var I = -1, b = Array(m.size);
      return m.forEach(function(D) {
        b[++I] = D;
      }), b;
    }
    function dd(m) {
      var I = -1, b = Array(m.size);
      return m.forEach(function(D) {
        b[++I] = [D, D];
      }), b;
    }
    function fd(m, I, b) {
      for (var D = b - 1, z = m.length; ++D < z; )
        if (m[D] === I)
          return D;
      return -1;
    }
    function gd(m, I, b) {
      for (var D = b + 1; D--; )
        if (m[D] === I)
          return D;
      return D;
    }
    function Rr(m) {
      return Or(m) ? md(m) : ed(m);
    }
    function yt(m) {
      return Or(m) ? vd(m) : td(m);
    }
    function Ya(m) {
      for (var I = m.length; I-- && op.test(m.charAt(I)); )
        ;
      return I;
    }
    var yd = gn(Kp);
    function md(m) {
      for (var I = cn.lastIndex = 0; cn.test(m); )
        ++I;
      return I;
    }
    function vd(m) {
      return m.match(cn) || [];
    }
    function wd(m) {
      return m.match(Mp) || [];
    }
    var bd = function m(I) {
      I = I == null ? Te : Ar.defaults(Te.Object(), I, Ar.pick(Te, zp));
      var b = I.Array, D = I.Date, z = I.Error, re = I.Function, Se = I.Math, ae = I.Object, bn = I.RegExp, _d = I.String, ot = I.TypeError, Bi = b.prototype, Ed = re.prototype, Nr = ae.prototype, Vi = I["__core-js_shared__"], Ki = Ed.toString, ne = Nr.hasOwnProperty, Id = 0, Za = function() {
        var e = /[^.]+$/.exec(Vi && Vi.keys && Vi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Wi = Nr.toString, Pd = Ki.call(ae), Sd = Te._, Od = bn("^" + Ki.call(ne).replace(tn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Gi = Fa ? I.Buffer : r, Gt = I.Symbol, Qi = I.Uint8Array, Xa = Gi ? Gi.allocUnsafe : r, Ji = Ja(ae.getPrototypeOf, ae), ec = ae.create, tc = Nr.propertyIsEnumerable, Yi = Bi.splice, rc = Gt ? Gt.isConcatSpreadable : r, ni = Gt ? Gt.iterator : r, or = Gt ? Gt.toStringTag : r, Zi = function() {
        try {
          var e = lr(ae, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Rd = I.clearTimeout !== Te.clearTimeout && I.clearTimeout, Ad = D && D.now !== Te.Date.now && D.now, Nd = I.setTimeout !== Te.setTimeout && I.setTimeout, Xi = Se.ceil, es = Se.floor, _n = ae.getOwnPropertySymbols, Td = Gi ? Gi.isBuffer : r, ic = I.isFinite, Cd = Bi.join, $d = Ja(ae.keys, ae), Oe = Se.max, De = Se.min, xd = D.now, Dd = I.parseInt, sc = Se.random, Fd = Bi.reverse, En = lr(I, "DataView"), oi = lr(I, "Map"), In = lr(I, "Promise"), Tr = lr(I, "Set"), ai = lr(I, "WeakMap"), ci = lr(ae, "create"), ts = ai && new ai(), Cr = {}, qd = pr(En), jd = pr(oi), Ud = pr(In), Md = pr(Tr), Ld = pr(ai), rs = Gt ? Gt.prototype : r, ui = rs ? rs.valueOf : r, nc = rs ? rs.toString : r;
      function p(e) {
        if (be(e) && !B(e) && !(e instanceof Y)) {
          if (e instanceof at)
            return e;
          if (ne.call(e, "__wrapped__"))
            return ou(e);
        }
        return new at(e);
      }
      var $r = /* @__PURE__ */ function() {
        function e() {
        }
        return function(i) {
          if (!we(i))
            return {};
          if (ec)
            return ec(i);
          e.prototype = i;
          var n = new e();
          return e.prototype = r, n;
        };
      }();
      function is() {
      }
      function at(e, i) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = { escape: ep, evaluate: tp, interpolate: fa, variable: "", imports: { _: p } }, p.prototype = is.prototype, p.prototype.constructor = p, at.prototype = $r(is.prototype), at.prototype.constructor = at;
      function Y(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = xe, this.__views__ = [];
      }
      function kd() {
        var e = new Y(this.__wrapped__);
        return e.__actions__ = ke(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ke(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ke(this.__views__), e;
      }
      function zd() {
        if (this.__filtered__) {
          var e = new Y(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Hd() {
        var e = this.__wrapped__.value(), i = this.__dir__, n = B(e), c = i < 0, h = n ? e.length : 0, d = rg(0, h, this.__views__), g = d.start, y = d.end, v = y - g, P = c ? y : g - 1, S = this.__iteratees__, R = S.length, x = 0, q = De(v, this.__takeCount__);
        if (!n || !c && h == v && q == v)
          return Nc(e, this.__actions__);
        var L = [];
        e:
          for (; v-- && x < q; ) {
            P += i;
            for (var W = -1, k = e[P]; ++W < R; ) {
              var J = S[W], Z = J.iteratee, Xe = J.type, Me = Z(k);
              if (Xe == C)
                k = Me;
              else if (!Me) {
                if (Xe == E)
                  continue e;
                break e;
              }
            }
            L[x++] = k;
          }
        return L;
      }
      Y.prototype = $r(is.prototype), Y.prototype.constructor = Y;
      function ar(e) {
        var i = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++i < n; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Bd() {
        this.__data__ = ci ? ci(null) : {}, this.size = 0;
      }
      function Vd(e) {
        var i = this.has(e) && delete this.__data__[e];
        return this.size -= i ? 1 : 0, i;
      }
      function Kd(e) {
        var i = this.__data__;
        if (ci) {
          var n = i[e];
          return n === w ? r : n;
        }
        return ne.call(i, e) ? i[e] : r;
      }
      function Wd(e) {
        var i = this.__data__;
        return ci ? i[e] !== r : ne.call(i, e);
      }
      function Gd(e, i) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = ci && i === r ? w : i, this;
      }
      ar.prototype.clear = Bd, ar.prototype.delete = Vd, ar.prototype.get = Kd, ar.prototype.has = Wd, ar.prototype.set = Gd;
      function $t(e) {
        var i = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++i < n; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Qd() {
        this.__data__ = [], this.size = 0;
      }
      function Jd(e) {
        var i = this.__data__, n = ss(i, e);
        if (n < 0)
          return !1;
        var c = i.length - 1;
        return n == c ? i.pop() : Yi.call(i, n, 1), --this.size, !0;
      }
      function Yd(e) {
        var i = this.__data__, n = ss(i, e);
        return n < 0 ? r : i[n][1];
      }
      function Zd(e) {
        return ss(this.__data__, e) > -1;
      }
      function Xd(e, i) {
        var n = this.__data__, c = ss(n, e);
        return c < 0 ? (++this.size, n.push([e, i])) : n[c][1] = i, this;
      }
      $t.prototype.clear = Qd, $t.prototype.delete = Jd, $t.prototype.get = Yd, $t.prototype.has = Zd, $t.prototype.set = Xd;
      function xt(e) {
        var i = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++i < n; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function ef() {
        this.size = 0, this.__data__ = { hash: new ar(), map: new (oi || $t)(), string: new ar() };
      }
      function tf(e) {
        var i = ys(this, e).delete(e);
        return this.size -= i ? 1 : 0, i;
      }
      function rf(e) {
        return ys(this, e).get(e);
      }
      function sf(e) {
        return ys(this, e).has(e);
      }
      function nf(e, i) {
        var n = ys(this, e), c = n.size;
        return n.set(e, i), this.size += n.size == c ? 0 : 1, this;
      }
      xt.prototype.clear = ef, xt.prototype.delete = tf, xt.prototype.get = rf, xt.prototype.has = sf, xt.prototype.set = nf;
      function cr(e) {
        var i = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new xt(); ++i < n; )
          this.add(e[i]);
      }
      function of(e) {
        return this.__data__.set(e, w), this;
      }
      function af(e) {
        return this.__data__.has(e);
      }
      cr.prototype.add = cr.prototype.push = of, cr.prototype.has = af;
      function mt(e) {
        var i = this.__data__ = new $t(e);
        this.size = i.size;
      }
      function cf() {
        this.__data__ = new $t(), this.size = 0;
      }
      function uf(e) {
        var i = this.__data__, n = i.delete(e);
        return this.size = i.size, n;
      }
      function hf(e) {
        return this.__data__.get(e);
      }
      function lf(e) {
        return this.__data__.has(e);
      }
      function pf(e, i) {
        var n = this.__data__;
        if (n instanceof $t) {
          var c = n.__data__;
          if (!oi || c.length < a - 1)
            return c.push([e, i]), this.size = ++n.size, this;
          n = this.__data__ = new xt(c);
        }
        return n.set(e, i), this.size = n.size, this;
      }
      mt.prototype.clear = cf, mt.prototype.delete = uf, mt.prototype.get = hf, mt.prototype.has = lf, mt.prototype.set = pf;
      function oc(e, i) {
        var n = B(e), c = !n && dr(e), h = !n && !c && Xt(e), d = !n && !c && !h && qr(e), g = n || c || h || d, y = g ? mn(e.length, _d) : [], v = y.length;
        for (var P in e)
          (i || ne.call(e, P)) && !(g && (P == "length" || h && (P == "offset" || P == "parent") || d && (P == "buffer" || P == "byteLength" || P == "byteOffset") || jt(P, v))) && y.push(P);
        return y;
      }
      function ac(e) {
        var i = e.length;
        return i ? e[Dn(0, i - 1)] : r;
      }
      function df(e, i) {
        return ms(ke(e), ur(i, 0, e.length));
      }
      function ff(e) {
        return ms(ke(e));
      }
      function Pn(e, i, n) {
        (n !== r && !vt(e[i], n) || n === r && !(i in e)) && Dt(e, i, n);
      }
      function hi(e, i, n) {
        var c = e[i];
        (!(ne.call(e, i) && vt(c, n)) || n === r && !(i in e)) && Dt(e, i, n);
      }
      function ss(e, i) {
        for (var n = e.length; n--; )
          if (vt(e[n][0], i))
            return n;
        return -1;
      }
      function gf(e, i, n, c) {
        return Qt(e, function(h, d, g) {
          i(c, h, n(h), g);
        }), c;
      }
      function cc(e, i) {
        return e && Ot(i, Re(i), e);
      }
      function yf(e, i) {
        return e && Ot(i, He(i), e);
      }
      function Dt(e, i, n) {
        i == "__proto__" && Zi ? Zi(e, i, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[i] = n;
      }
      function Sn(e, i) {
        for (var n = -1, c = i.length, h = b(c), d = e == null; ++n < c; )
          h[n] = d ? r : no(e, i[n]);
        return h;
      }
      function ur(e, i, n) {
        return e === e && (n !== r && (e = e <= n ? e : n), i !== r && (e = e >= i ? e : i)), e;
      }
      function ct(e, i, n, c, h, d) {
        var g, y = i & O, v = i & A, P = i & j;
        if (n && (g = h ? n(e, c, h, d) : n(e)), g !== r)
          return g;
        if (!we(e))
          return e;
        var S = B(e);
        if (S) {
          if (g = sg(e), !y)
            return ke(e, g);
        } else {
          var R = Fe(e), x = R == qi || R == ha;
          if (Xt(e))
            return $c(e, y);
          if (R == Ct || R == Er || x && !h) {
            if (g = v || x ? {} : Yc(e), !y)
              return v ? Wf(e, yf(g, e)) : Kf(e, cc(g, e));
          } else {
            if (!ue[R])
              return h ? e : {};
            g = ng(e, R, y);
          }
        }
        d || (d = new mt());
        var q = d.get(e);
        if (q)
          return q;
        d.set(e, g), Ou(e) ? e.forEach(function(k) {
          g.add(ct(k, i, n, k, e, d));
        }) : Pu(e) && e.forEach(function(k, J) {
          g.set(J, ct(k, i, n, J, e, d));
        });
        var L = P ? v ? Vn : Bn : v ? He : Re, W = S ? r : L(e);
        return nt(W || e, function(k, J) {
          W && (J = k, k = e[J]), hi(g, J, ct(k, i, n, J, e, d));
        }), g;
      }
      function mf(e) {
        var i = Re(e);
        return function(n) {
          return uc(n, e, i);
        };
      }
      function uc(e, i, n) {
        var c = n.length;
        if (e == null)
          return !c;
        for (e = ae(e); c--; ) {
          var h = n[c], d = i[h], g = e[h];
          if (g === r && !(h in e) || !d(g))
            return !1;
        }
        return !0;
      }
      function hc(e, i, n) {
        if (typeof e != "function")
          throw new ot(l);
        return mi(function() {
          e.apply(r, n);
        }, i);
      }
      function li(e, i, n, c) {
        var h = -1, d = ki, g = !0, y = e.length, v = [], P = i.length;
        if (!y)
          return v;
        n && (i = fe(i, Je(n))), c ? (d = ln, g = !1) : i.length >= a && (d = si, g = !1, i = new cr(i));
        e:
          for (; ++h < y; ) {
            var S = e[h], R = n == null ? S : n(S);
            if (S = c || S !== 0 ? S : 0, g && R === R) {
              for (var x = P; x--; )
                if (i[x] === R)
                  continue e;
              v.push(S);
            } else
              d(i, R, c) || v.push(S);
          }
        return v;
      }
      var Qt = jc(St), lc = jc(Rn, !0);
      function vf(e, i) {
        var n = !0;
        return Qt(e, function(c, h, d) {
          return n = !!i(c, h, d), n;
        }), n;
      }
      function ns(e, i, n) {
        for (var c = -1, h = e.length; ++c < h; ) {
          var d = e[c], g = i(d);
          if (g != null && (y === r ? g === g && !Ze(g) : n(g, y)))
            var y = g, v = d;
        }
        return v;
      }
      function wf(e, i, n, c) {
        var h = e.length;
        for (n = V(n), n < 0 && (n = -n > h ? 0 : h + n), c = c === r || c > h ? h : V(c), c < 0 && (c += h), c = n > c ? 0 : Au(c); n < c; )
          e[n++] = i;
        return e;
      }
      function pc(e, i) {
        var n = [];
        return Qt(e, function(c, h, d) {
          i(c, h, d) && n.push(c);
        }), n;
      }
      function Ce(e, i, n, c, h) {
        var d = -1, g = e.length;
        for (n || (n = ag), h || (h = []); ++d < g; ) {
          var y = e[d];
          i > 0 && n(y) ? i > 1 ? Ce(y, i - 1, n, c, h) : Kt(h, y) : c || (h[h.length] = y);
        }
        return h;
      }
      var On = Uc(), dc = Uc(!0);
      function St(e, i) {
        return e && On(e, i, Re);
      }
      function Rn(e, i) {
        return e && dc(e, i, Re);
      }
      function os(e, i) {
        return Vt(i, function(n) {
          return Ut(e[n]);
        });
      }
      function hr(e, i) {
        i = Yt(i, e);
        for (var n = 0, c = i.length; e != null && n < c; )
          e = e[Rt(i[n++])];
        return n && n == c ? e : r;
      }
      function fc(e, i, n) {
        var c = i(e);
        return B(e) ? c : Kt(c, n(e));
      }
      function je(e) {
        return e == null ? e === r ? Wl : Vl : or && or in ae(e) ? tg(e) : fg(e);
      }
      function An(e, i) {
        return e > i;
      }
      function bf(e, i) {
        return e != null && ne.call(e, i);
      }
      function _f(e, i) {
        return e != null && i in ae(e);
      }
      function Ef(e, i, n) {
        return e >= De(i, n) && e < Oe(i, n);
      }
      function Nn(e, i, n) {
        for (var c = n ? ln : ki, h = e[0].length, d = e.length, g = d, y = b(d), v = 1 / 0, P = []; g--; ) {
          var S = e[g];
          g && i && (S = fe(S, Je(i))), v = De(S.length, v), y[g] = !n && (i || h >= 120 && S.length >= 120) ? new cr(g && S) : r;
        }
        S = e[0];
        var R = -1, x = y[0];
        e:
          for (; ++R < h && P.length < v; ) {
            var q = S[R], L = i ? i(q) : q;
            if (q = n || q !== 0 ? q : 0, !(x ? si(x, L) : c(P, L, n))) {
              for (g = d; --g; ) {
                var W = y[g];
                if (!(W ? si(W, L) : c(e[g], L, n)))
                  continue e;
              }
              x && x.push(L), P.push(q);
            }
          }
        return P;
      }
      function If(e, i, n, c) {
        return St(e, function(h, d, g) {
          i(c, n(h), d, g);
        }), c;
      }
      function pi(e, i, n) {
        i = Yt(i, e), e = tu(e, i);
        var c = e == null ? e : e[Rt(ht(i))];
        return c == null ? r : Qe(c, e, n);
      }
      function gc(e) {
        return be(e) && je(e) == Er;
      }
      function Pf(e) {
        return be(e) && je(e) == ii;
      }
      function Sf(e) {
        return be(e) && je(e) == Zr;
      }
      function di(e, i, n, c, h) {
        return e === i ? !0 : e == null || i == null || !be(e) && !be(i) ? e !== e && i !== i : Of(e, i, n, c, di, h);
      }
      function Of(e, i, n, c, h, d) {
        var g = B(e), y = B(i), v = g ? Di : Fe(e), P = y ? Di : Fe(i);
        v = v == Er ? Ct : v, P = P == Er ? Ct : P;
        var S = v == Ct, R = P == Ct, x = v == P;
        if (x && Xt(e)) {
          if (!Xt(i))
            return !1;
          g = !0, S = !1;
        }
        if (x && !S)
          return d || (d = new mt()), g || qr(e) ? Gc(e, i, n, c, h, d) : Xf(e, i, v, n, c, h, d);
        if (!(n & T)) {
          var q = S && ne.call(e, "__wrapped__"), L = R && ne.call(i, "__wrapped__");
          if (q || L) {
            var W = q ? e.value() : e, k = L ? i.value() : i;
            return d || (d = new mt()), h(W, k, n, c, d);
          }
        }
        return x ? (d || (d = new mt()), eg(e, i, n, c, h, d)) : !1;
      }
      function Rf(e) {
        return be(e) && Fe(e) == ft;
      }
      function Tn(e, i, n, c) {
        var h = n.length, d = h, g = !c;
        if (e == null)
          return !d;
        for (e = ae(e); h--; ) {
          var y = n[h];
          if (g && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++h < d; ) {
          y = n[h];
          var v = y[0], P = e[v], S = y[1];
          if (g && y[2]) {
            if (P === r && !(v in e))
              return !1;
          } else {
            var R = new mt();
            if (c)
              var x = c(P, S, v, e, i, R);
            if (!(x === r ? di(S, P, T | H, c, R) : x))
              return !1;
          }
        }
        return !0;
      }
      function yc(e) {
        if (!we(e) || ug(e))
          return !1;
        var i = Ut(e) ? Od : yp;
        return i.test(pr(e));
      }
      function Af(e) {
        return be(e) && je(e) == ei;
      }
      function Nf(e) {
        return be(e) && Fe(e) == gt;
      }
      function Tf(e) {
        return be(e) && Is(e.length) && !!pe[je(e)];
      }
      function mc(e) {
        return typeof e == "function" ? e : e == null ? Be : typeof e == "object" ? B(e) ? bc(e[0], e[1]) : wc(e) : Mu(e);
      }
      function Cn(e) {
        if (!yi(e))
          return $d(e);
        var i = [];
        for (var n in ae(e))
          ne.call(e, n) && n != "constructor" && i.push(n);
        return i;
      }
      function Cf(e) {
        if (!we(e))
          return dg(e);
        var i = yi(e), n = [];
        for (var c in e)
          c == "constructor" && (i || !ne.call(e, c)) || n.push(c);
        return n;
      }
      function $n(e, i) {
        return e < i;
      }
      function vc(e, i) {
        var n = -1, c = ze(e) ? b(e.length) : [];
        return Qt(e, function(h, d, g) {
          c[++n] = i(h, d, g);
        }), c;
      }
      function wc(e) {
        var i = Wn(e);
        return i.length == 1 && i[0][2] ? Xc(i[0][0], i[0][1]) : function(n) {
          return n === e || Tn(n, e, i);
        };
      }
      function bc(e, i) {
        return Qn(e) && Zc(i) ? Xc(Rt(e), i) : function(n) {
          var c = no(n, e);
          return c === r && c === i ? oo(n, e) : di(i, c, T | H);
        };
      }
      function as(e, i, n, c, h) {
        e !== i && On(i, function(d, g) {
          if (h || (h = new mt()), we(d))
            $f(e, i, g, n, as, c, h);
          else {
            var y = c ? c(Yn(e, g), d, g + "", e, i, h) : r;
            y === r && (y = d), Pn(e, g, y);
          }
        }, He);
      }
      function $f(e, i, n, c, h, d, g) {
        var y = Yn(e, n), v = Yn(i, n), P = g.get(v);
        if (P) {
          Pn(e, n, P);
          return;
        }
        var S = d ? d(y, v, n + "", e, i, g) : r, R = S === r;
        if (R) {
          var x = B(v), q = !x && Xt(v), L = !x && !q && qr(v);
          S = v, x || q || L ? B(y) ? S = y : _e(y) ? S = ke(y) : q ? (R = !1, S = $c(v, !0)) : L ? (R = !1, S = xc(v, !0)) : S = [] : vi(v) || dr(v) ? (S = y, dr(y) ? S = Nu(y) : (!we(y) || Ut(y)) && (S = Yc(v))) : R = !1;
        }
        R && (g.set(v, S), h(S, v, c, d, g), g.delete(v)), Pn(e, n, S);
      }
      function _c(e, i) {
        var n = e.length;
        if (n)
          return i += i < 0 ? n : 0, jt(i, n) ? e[i] : r;
      }
      function Ec(e, i, n) {
        i.length ? i = fe(i, function(d) {
          return B(d) ? function(g) {
            return hr(g, d.length === 1 ? d[0] : d);
          } : d;
        }) : i = [Be];
        var c = -1;
        i = fe(i, Je(M()));
        var h = vc(e, function(d, g, y) {
          var v = fe(i, function(P) {
            return P(d);
          });
          return { criteria: v, index: ++c, value: d };
        });
        return sd(h, function(d, g) {
          return Vf(d, g, n);
        });
      }
      function xf(e, i) {
        return Ic(e, i, function(n, c) {
          return oo(e, c);
        });
      }
      function Ic(e, i, n) {
        for (var c = -1, h = i.length, d = {}; ++c < h; ) {
          var g = i[c], y = hr(e, g);
          n(y, g) && fi(d, Yt(g, e), y);
        }
        return d;
      }
      function Df(e) {
        return function(i) {
          return hr(i, e);
        };
      }
      function xn(e, i, n, c) {
        var h = c ? id : Sr, d = -1, g = i.length, y = e;
        for (e === i && (i = ke(i)), n && (y = fe(e, Je(n))); ++d < g; )
          for (var v = 0, P = i[d], S = n ? n(P) : P; (v = h(y, S, v, c)) > -1; )
            y !== e && Yi.call(y, v, 1), Yi.call(e, v, 1);
        return e;
      }
      function Pc(e, i) {
        for (var n = e ? i.length : 0, c = n - 1; n--; ) {
          var h = i[n];
          if (n == c || h !== d) {
            var d = h;
            jt(h) ? Yi.call(e, h, 1) : jn(e, h);
          }
        }
        return e;
      }
      function Dn(e, i) {
        return e + es(sc() * (i - e + 1));
      }
      function Ff(e, i, n, c) {
        for (var h = -1, d = Oe(Xi((i - e) / (n || 1)), 0), g = b(d); d--; )
          g[c ? d : ++h] = e, e += n;
        return g;
      }
      function Fn(e, i) {
        var n = "";
        if (!e || i < 1 || i > ce)
          return n;
        do
          i % 2 && (n += e), i = es(i / 2), i && (e += e);
        while (i);
        return n;
      }
      function G(e, i) {
        return Zn(eu(e, i, Be), e + "");
      }
      function qf(e) {
        return ac(jr(e));
      }
      function jf(e, i) {
        var n = jr(e);
        return ms(n, ur(i, 0, n.length));
      }
      function fi(e, i, n, c) {
        if (!we(e))
          return e;
        i = Yt(i, e);
        for (var h = -1, d = i.length, g = d - 1, y = e; y != null && ++h < d; ) {
          var v = Rt(i[h]), P = n;
          if (v === "__proto__" || v === "constructor" || v === "prototype")
            return e;
          if (h != g) {
            var S = y[v];
            P = c ? c(S, v, y) : r, P === r && (P = we(S) ? S : jt(i[h + 1]) ? [] : {});
          }
          hi(y, v, P), y = y[v];
        }
        return e;
      }
      var Sc = ts ? function(e, i) {
        return ts.set(e, i), e;
      } : Be, Uf = Zi ? function(e, i) {
        return Zi(e, "toString", { configurable: !0, enumerable: !1, value: co(i), writable: !0 });
      } : Be;
      function Mf(e) {
        return ms(jr(e));
      }
      function ut(e, i, n) {
        var c = -1, h = e.length;
        i < 0 && (i = -i > h ? 0 : h + i), n = n > h ? h : n, n < 0 && (n += h), h = i > n ? 0 : n - i >>> 0, i >>>= 0;
        for (var d = b(h); ++c < h; )
          d[c] = e[c + i];
        return d;
      }
      function Lf(e, i) {
        var n;
        return Qt(e, function(c, h, d) {
          return n = i(c, h, d), !n;
        }), !!n;
      }
      function cs(e, i, n) {
        var c = 0, h = e == null ? c : e.length;
        if (typeof i == "number" && i === i && h <= kl) {
          for (; c < h; ) {
            var d = c + h >>> 1, g = e[d];
            g !== null && !Ze(g) && (n ? g <= i : g < i) ? c = d + 1 : h = d;
          }
          return h;
        }
        return qn(e, i, Be, n);
      }
      function qn(e, i, n, c) {
        var h = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        i = n(i);
        for (var g = i !== i, y = i === null, v = Ze(i), P = i === r; h < d; ) {
          var S = es((h + d) / 2), R = n(e[S]), x = R !== r, q = R === null, L = R === R, W = Ze(R);
          if (g)
            var k = c || L;
          else
            P ? k = L && (c || x) : y ? k = L && x && (c || !q) : v ? k = L && x && !q && (c || !W) : q || W ? k = !1 : k = c ? R <= i : R < i;
          k ? h = S + 1 : d = S;
        }
        return De(d, Jr);
      }
      function Oc(e, i) {
        for (var n = -1, c = e.length, h = 0, d = []; ++n < c; ) {
          var g = e[n], y = i ? i(g) : g;
          if (!n || !vt(y, v)) {
            var v = y;
            d[h++] = g === 0 ? 0 : g;
          }
        }
        return d;
      }
      function Rc(e) {
        return typeof e == "number" ? e : Ze(e) ? Tt : +e;
      }
      function Ye(e) {
        if (typeof e == "string")
          return e;
        if (B(e))
          return fe(e, Ye) + "";
        if (Ze(e))
          return nc ? nc.call(e) : "";
        var i = e + "";
        return i == "0" && 1 / e == -de ? "-0" : i;
      }
      function Jt(e, i, n) {
        var c = -1, h = ki, d = e.length, g = !0, y = [], v = y;
        if (n)
          g = !1, h = ln;
        else if (d >= a) {
          var P = i ? null : Yf(e);
          if (P)
            return Hi(P);
          g = !1, h = si, v = new cr();
        } else
          v = i ? [] : y;
        e:
          for (; ++c < d; ) {
            var S = e[c], R = i ? i(S) : S;
            if (S = n || S !== 0 ? S : 0, g && R === R) {
              for (var x = v.length; x--; )
                if (v[x] === R)
                  continue e;
              i && v.push(R), y.push(S);
            } else
              h(v, R, n) || (v !== y && v.push(R), y.push(S));
          }
        return y;
      }
      function jn(e, i) {
        return i = Yt(i, e), e = tu(e, i), e == null || delete e[Rt(ht(i))];
      }
      function Ac(e, i, n, c) {
        return fi(e, i, n(hr(e, i)), c);
      }
      function us(e, i, n, c) {
        for (var h = e.length, d = c ? h : -1; (c ? d-- : ++d < h) && i(e[d], d, e); )
          ;
        return n ? ut(e, c ? 0 : d, c ? d + 1 : h) : ut(e, c ? d + 1 : 0, c ? h : d);
      }
      function Nc(e, i) {
        var n = e;
        return n instanceof Y && (n = n.value()), pn(i, function(c, h) {
          return h.func.apply(h.thisArg, Kt([c], h.args));
        }, n);
      }
      function Un(e, i, n) {
        var c = e.length;
        if (c < 2)
          return c ? Jt(e[0]) : [];
        for (var h = -1, d = b(c); ++h < c; )
          for (var g = e[h], y = -1; ++y < c; )
            y != h && (d[h] = li(d[h] || g, e[y], i, n));
        return Jt(Ce(d, 1), i, n);
      }
      function Tc(e, i, n) {
        for (var c = -1, h = e.length, d = i.length, g = {}; ++c < h; ) {
          var y = c < d ? i[c] : r;
          n(g, e[c], y);
        }
        return g;
      }
      function Mn(e) {
        return _e(e) ? e : [];
      }
      function Ln(e) {
        return typeof e == "function" ? e : Be;
      }
      function Yt(e, i) {
        return B(e) ? e : Qn(e, i) ? [e] : nu(ie(e));
      }
      var kf = G;
      function Zt(e, i, n) {
        var c = e.length;
        return n = n === r ? c : n, !i && n >= c ? e : ut(e, i, n);
      }
      var Cc = Rd || function(e) {
        return Te.clearTimeout(e);
      };
      function $c(e, i) {
        if (i)
          return e.slice();
        var n = e.length, c = Xa ? Xa(n) : new e.constructor(n);
        return e.copy(c), c;
      }
      function kn(e) {
        var i = new e.constructor(e.byteLength);
        return new Qi(i).set(new Qi(e)), i;
      }
      function zf(e, i) {
        var n = i ? kn(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function Hf(e) {
        var i = new e.constructor(e.source, ga.exec(e));
        return i.lastIndex = e.lastIndex, i;
      }
      function Bf(e) {
        return ui ? ae(ui.call(e)) : {};
      }
      function xc(e, i) {
        var n = i ? kn(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function Dc(e, i) {
        if (e !== i) {
          var n = e !== r, c = e === null, h = e === e, d = Ze(e), g = i !== r, y = i === null, v = i === i, P = Ze(i);
          if (!y && !P && !d && e > i || d && g && v && !y && !P || c && g && v || !n && v || !h)
            return 1;
          if (!c && !d && !P && e < i || P && n && h && !c && !d || y && n && h || !g && h || !v)
            return -1;
        }
        return 0;
      }
      function Vf(e, i, n) {
        for (var c = -1, h = e.criteria, d = i.criteria, g = h.length, y = n.length; ++c < g; ) {
          var v = Dc(h[c], d[c]);
          if (v) {
            if (c >= y)
              return v;
            var P = n[c];
            return v * (P == "desc" ? -1 : 1);
          }
        }
        return e.index - i.index;
      }
      function Fc(e, i, n, c) {
        for (var h = -1, d = e.length, g = n.length, y = -1, v = i.length, P = Oe(d - g, 0), S = b(v + P), R = !c; ++y < v; )
          S[y] = i[y];
        for (; ++h < g; )
          (R || h < d) && (S[n[h]] = e[h]);
        for (; P--; )
          S[y++] = e[h++];
        return S;
      }
      function qc(e, i, n, c) {
        for (var h = -1, d = e.length, g = -1, y = n.length, v = -1, P = i.length, S = Oe(d - y, 0), R = b(S + P), x = !c; ++h < S; )
          R[h] = e[h];
        for (var q = h; ++v < P; )
          R[q + v] = i[v];
        for (; ++g < y; )
          (x || h < d) && (R[q + n[g]] = e[h++]);
        return R;
      }
      function ke(e, i) {
        var n = -1, c = e.length;
        for (i || (i = b(c)); ++n < c; )
          i[n] = e[n];
        return i;
      }
      function Ot(e, i, n, c) {
        var h = !n;
        n || (n = {});
        for (var d = -1, g = i.length; ++d < g; ) {
          var y = i[d], v = c ? c(n[y], e[y], y, n, e) : r;
          v === r && (v = e[y]), h ? Dt(n, y, v) : hi(n, y, v);
        }
        return n;
      }
      function Kf(e, i) {
        return Ot(e, Gn(e), i);
      }
      function Wf(e, i) {
        return Ot(e, Qc(e), i);
      }
      function hs(e, i) {
        return function(n, c) {
          var h = B(n) ? Yp : gf, d = i ? i() : {};
          return h(n, e, M(c, 2), d);
        };
      }
      function xr(e) {
        return G(function(i, n) {
          var c = -1, h = n.length, d = h > 1 ? n[h - 1] : r, g = h > 2 ? n[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (h--, d) : r, g && Ue(n[0], n[1], g) && (d = h < 3 ? r : d, h = 1), i = ae(i); ++c < h; ) {
            var y = n[c];
            y && e(i, y, c, d);
          }
          return i;
        });
      }
      function jc(e, i) {
        return function(n, c) {
          if (n == null)
            return n;
          if (!ze(n))
            return e(n, c);
          for (var h = n.length, d = i ? h : -1, g = ae(n); (i ? d-- : ++d < h) && c(g[d], d, g) !== !1; )
            ;
          return n;
        };
      }
      function Uc(e) {
        return function(i, n, c) {
          for (var h = -1, d = ae(i), g = c(i), y = g.length; y--; ) {
            var v = g[e ? y : ++h];
            if (n(d[v], v, d) === !1)
              break;
          }
          return i;
        };
      }
      function Gf(e, i, n) {
        var c = i & F, h = gi(e);
        function d() {
          var g = this && this !== Te && this instanceof d ? h : e;
          return g.apply(c ? n : this, arguments);
        }
        return d;
      }
      function Mc(e) {
        return function(i) {
          i = ie(i);
          var n = Or(i) ? yt(i) : r, c = n ? n[0] : i.charAt(0), h = n ? Zt(n, 1).join("") : i.slice(1);
          return c[e]() + h;
        };
      }
      function Dr(e) {
        return function(i) {
          return pn(ju(qu(i).replace(jp, "")), e, "");
        };
      }
      function gi(e) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new e();
            case 1:
              return new e(i[0]);
            case 2:
              return new e(i[0], i[1]);
            case 3:
              return new e(i[0], i[1], i[2]);
            case 4:
              return new e(i[0], i[1], i[2], i[3]);
            case 5:
              return new e(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var n = $r(e.prototype), c = e.apply(n, i);
          return we(c) ? c : n;
        };
      }
      function Qf(e, i, n) {
        var c = gi(e);
        function h() {
          for (var d = arguments.length, g = b(d), y = d, v = Fr(h); y--; )
            g[y] = arguments[y];
          var P = d < 3 && g[0] !== v && g[d - 1] !== v ? [] : Wt(g, v);
          if (d -= P.length, d < n)
            return Bc(e, i, ls, h.placeholder, r, g, P, r, r, n - d);
          var S = this && this !== Te && this instanceof h ? c : e;
          return Qe(S, this, g);
        }
        return h;
      }
      function Lc(e) {
        return function(i, n, c) {
          var h = ae(i);
          if (!ze(i)) {
            var d = M(n, 3);
            i = Re(i), n = function(y) {
              return d(h[y], y, h);
            };
          }
          var g = e(i, n, c);
          return g > -1 ? h[d ? i[g] : g] : r;
        };
      }
      function kc(e) {
        return qt(function(i) {
          var n = i.length, c = n, h = at.prototype.thru;
          for (e && i.reverse(); c--; ) {
            var d = i[c];
            if (typeof d != "function")
              throw new ot(l);
            if (h && !g && gs(d) == "wrapper")
              var g = new at([], !0);
          }
          for (c = g ? c : n; ++c < n; ) {
            d = i[c];
            var y = gs(d), v = y == "wrapper" ? Kn(d) : r;
            v && Jn(v[0]) && v[1] == (me | X | oe | ve) && !v[4].length && v[9] == 1 ? g = g[gs(v[0])].apply(g, v[3]) : g = d.length == 1 && Jn(d) ? g[y]() : g.thru(d);
          }
          return function() {
            var P = arguments, S = P[0];
            if (g && P.length == 1 && B(S))
              return g.plant(S).value();
            for (var R = 0, x = n ? i[R].apply(this, P) : S; ++R < n; )
              x = i[R].call(this, x);
            return x;
          };
        });
      }
      function ls(e, i, n, c, h, d, g, y, v, P) {
        var S = i & me, R = i & F, x = i & Q, q = i & (X | ee), L = i & Pt, W = x ? r : gi(e);
        function k() {
          for (var J = arguments.length, Z = b(J), Xe = J; Xe--; )
            Z[Xe] = arguments[Xe];
          if (q)
            var Me = Fr(k), et = od(Z, Me);
          if (c && (Z = Fc(Z, c, h, q)), d && (Z = qc(Z, d, g, q)), J -= et, q && J < P) {
            var Ee = Wt(Z, Me);
            return Bc(e, i, ls, k.placeholder, n, Z, Ee, y, v, P - J);
          }
          var wt = R ? n : this, Lt = x ? wt[e] : e;
          return J = Z.length, y ? Z = gg(Z, y) : L && J > 1 && Z.reverse(), S && v < J && (Z.length = v), this && this !== Te && this instanceof k && (Lt = W || gi(Lt)), Lt.apply(wt, Z);
        }
        return k;
      }
      function zc(e, i) {
        return function(n, c) {
          return If(n, e, i(c), {});
        };
      }
      function ps(e, i) {
        return function(n, c) {
          var h;
          if (n === r && c === r)
            return i;
          if (n !== r && (h = n), c !== r) {
            if (h === r)
              return c;
            typeof n == "string" || typeof c == "string" ? (n = Ye(n), c = Ye(c)) : (n = Rc(n), c = Rc(c)), h = e(n, c);
          }
          return h;
        };
      }
      function zn(e) {
        return qt(function(i) {
          return i = fe(i, Je(M())), G(function(n) {
            var c = this;
            return e(i, function(h) {
              return Qe(h, c, n);
            });
          });
        });
      }
      function ds(e, i) {
        i = i === r ? " " : Ye(i);
        var n = i.length;
        if (n < 2)
          return n ? Fn(i, e) : i;
        var c = Fn(i, Xi(e / Rr(i)));
        return Or(i) ? Zt(yt(c), 0, e).join("") : c.slice(0, e);
      }
      function Jf(e, i, n, c) {
        var h = i & F, d = gi(e);
        function g() {
          for (var y = -1, v = arguments.length, P = -1, S = c.length, R = b(S + v), x = this && this !== Te && this instanceof g ? d : e; ++P < S; )
            R[P] = c[P];
          for (; v--; )
            R[P++] = arguments[++y];
          return Qe(x, h ? n : this, R);
        }
        return g;
      }
      function Hc(e) {
        return function(i, n, c) {
          return c && typeof c != "number" && Ue(i, n, c) && (n = c = r), i = Mt(i), n === r ? (n = i, i = 0) : n = Mt(n), c = c === r ? i < n ? 1 : -1 : Mt(c), Ff(i, n, c, e);
        };
      }
      function fs(e) {
        return function(i, n) {
          return typeof i == "string" && typeof n == "string" || (i = lt(i), n = lt(n)), e(i, n);
        };
      }
      function Bc(e, i, n, c, h, d, g, y, v, P) {
        var S = i & X, R = S ? g : r, x = S ? r : g, q = S ? d : r, L = S ? r : d;
        i |= S ? oe : Ne, i &= ~(S ? Ne : oe), i & ye || (i &= ~(F | Q));
        var W = [e, i, h, q, R, L, x, y, v, P], k = n.apply(r, W);
        return Jn(e) && ru(k, W), k.placeholder = c, iu(k, e, i);
      }
      function Hn(e) {
        var i = Se[e];
        return function(n, c) {
          if (n = lt(n), c = c == null ? 0 : De(V(c), 292), c && ic(n)) {
            var h = (ie(n) + "e").split("e"), d = i(h[0] + "e" + (+h[1] + c));
            return h = (ie(d) + "e").split("e"), +(h[0] + "e" + (+h[1] - c));
          }
          return i(n);
        };
      }
      var Yf = Tr && 1 / Hi(new Tr([, -0]))[1] == de ? function(e) {
        return new Tr(e);
      } : lo;
      function Vc(e) {
        return function(i) {
          var n = Fe(i);
          return n == ft ? wn(i) : n == gt ? dd(i) : nd(i, e(i));
        };
      }
      function Ft(e, i, n, c, h, d, g, y) {
        var v = i & Q;
        if (!v && typeof e != "function")
          throw new ot(l);
        var P = c ? c.length : 0;
        if (P || (i &= ~(oe | Ne), c = h = r), g = g === r ? g : Oe(V(g), 0), y = y === r ? y : V(y), P -= h ? h.length : 0, i & Ne) {
          var S = c, R = h;
          c = h = r;
        }
        var x = v ? r : Kn(e), q = [e, i, n, c, h, S, R, d, g, y];
        if (x && pg(q, x), e = q[0], i = q[1], n = q[2], c = q[3], h = q[4], y = q[9] = q[9] === r ? v ? 0 : e.length : Oe(q[9] - P, 0), !y && i & (X | ee) && (i &= ~(X | ee)), !i || i == F)
          var L = Gf(e, i, n);
        else
          i == X || i == ee ? L = Qf(e, i, y) : (i == oe || i == (F | oe)) && !h.length ? L = Jf(e, i, n, c) : L = ls.apply(r, q);
        var W = x ? Sc : ru;
        return iu(W(L, q), e, i);
      }
      function Kc(e, i, n, c) {
        return e === r || vt(e, Nr[n]) && !ne.call(c, n) ? i : e;
      }
      function Wc(e, i, n, c, h, d) {
        return we(e) && we(i) && (d.set(i, e), as(e, i, r, Wc, d), d.delete(i)), e;
      }
      function Zf(e) {
        return vi(e) ? r : e;
      }
      function Gc(e, i, n, c, h, d) {
        var g = n & T, y = e.length, v = i.length;
        if (y != v && !(g && v > y))
          return !1;
        var P = d.get(e), S = d.get(i);
        if (P && S)
          return P == i && S == e;
        var R = -1, x = !0, q = n & H ? new cr() : r;
        for (d.set(e, i), d.set(i, e); ++R < y; ) {
          var L = e[R], W = i[R];
          if (c)
            var k = g ? c(W, L, R, i, e, d) : c(L, W, R, e, i, d);
          if (k !== r) {
            if (k)
              continue;
            x = !1;
            break;
          }
          if (q) {
            if (!dn(i, function(J, Z) {
              if (!si(q, Z) && (L === J || h(L, J, n, c, d)))
                return q.push(Z);
            })) {
              x = !1;
              break;
            }
          } else if (!(L === W || h(L, W, n, c, d))) {
            x = !1;
            break;
          }
        }
        return d.delete(e), d.delete(i), x;
      }
      function Xf(e, i, n, c, h, d, g) {
        switch (n) {
          case Ir:
            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
              return !1;
            e = e.buffer, i = i.buffer;
          case ii:
            return !(e.byteLength != i.byteLength || !d(new Qi(e), new Qi(i)));
          case Yr:
          case Zr:
          case Xr:
            return vt(+e, +i);
          case Fi:
            return e.name == i.name && e.message == i.message;
          case ei:
          case ti:
            return e == i + "";
          case ft:
            var y = wn;
          case gt:
            var v = c & T;
            if (y || (y = Hi), e.size != i.size && !v)
              return !1;
            var P = g.get(e);
            if (P)
              return P == i;
            c |= H, g.set(e, i);
            var S = Gc(y(e), y(i), c, h, d, g);
            return g.delete(e), S;
          case ji:
            if (ui)
              return ui.call(e) == ui.call(i);
        }
        return !1;
      }
      function eg(e, i, n, c, h, d) {
        var g = n & T, y = Bn(e), v = y.length, P = Bn(i), S = P.length;
        if (v != S && !g)
          return !1;
        for (var R = v; R--; ) {
          var x = y[R];
          if (!(g ? x in i : ne.call(i, x)))
            return !1;
        }
        var q = d.get(e), L = d.get(i);
        if (q && L)
          return q == i && L == e;
        var W = !0;
        d.set(e, i), d.set(i, e);
        for (var k = g; ++R < v; ) {
          x = y[R];
          var J = e[x], Z = i[x];
          if (c)
            var Xe = g ? c(Z, J, x, i, e, d) : c(J, Z, x, e, i, d);
          if (!(Xe === r ? J === Z || h(J, Z, n, c, d) : Xe)) {
            W = !1;
            break;
          }
          k || (k = x == "constructor");
        }
        if (W && !k) {
          var Me = e.constructor, et = i.constructor;
          Me != et && "constructor" in e && "constructor" in i && !(typeof Me == "function" && Me instanceof Me && typeof et == "function" && et instanceof et) && (W = !1);
        }
        return d.delete(e), d.delete(i), W;
      }
      function qt(e) {
        return Zn(eu(e, r, uu), e + "");
      }
      function Bn(e) {
        return fc(e, Re, Gn);
      }
      function Vn(e) {
        return fc(e, He, Qc);
      }
      var Kn = ts ? function(e) {
        return ts.get(e);
      } : lo;
      function gs(e) {
        for (var i = e.name + "", n = Cr[i], c = ne.call(Cr, i) ? n.length : 0; c--; ) {
          var h = n[c], d = h.func;
          if (d == null || d == e)
            return h.name;
        }
        return i;
      }
      function Fr(e) {
        var i = ne.call(p, "placeholder") ? p : e;
        return i.placeholder;
      }
      function M() {
        var e = p.iteratee || uo;
        return e = e === uo ? mc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ys(e, i) {
        var n = e.__data__;
        return cg(i) ? n[typeof i == "string" ? "string" : "hash"] : n.map;
      }
      function Wn(e) {
        for (var i = Re(e), n = i.length; n--; ) {
          var c = i[n], h = e[c];
          i[n] = [c, h, Zc(h)];
        }
        return i;
      }
      function lr(e, i) {
        var n = hd(e, i);
        return yc(n) ? n : r;
      }
      function tg(e) {
        var i = ne.call(e, or), n = e[or];
        try {
          e[or] = r;
          var c = !0;
        } catch {
        }
        var h = Wi.call(e);
        return c && (i ? e[or] = n : delete e[or]), h;
      }
      var Gn = _n ? function(e) {
        return e == null ? [] : (e = ae(e), Vt(_n(e), function(i) {
          return tc.call(e, i);
        }));
      } : po, Qc = _n ? function(e) {
        for (var i = []; e; )
          Kt(i, Gn(e)), e = Ji(e);
        return i;
      } : po, Fe = je;
      (En && Fe(new En(new ArrayBuffer(1))) != Ir || oi && Fe(new oi()) != ft || In && Fe(In.resolve()) != la || Tr && Fe(new Tr()) != gt || ai && Fe(new ai()) != ri) && (Fe = function(e) {
        var i = je(e), n = i == Ct ? e.constructor : r, c = n ? pr(n) : "";
        if (c)
          switch (c) {
            case qd:
              return Ir;
            case jd:
              return ft;
            case Ud:
              return la;
            case Md:
              return gt;
            case Ld:
              return ri;
          }
        return i;
      });
      function rg(e, i, n) {
        for (var c = -1, h = n.length; ++c < h; ) {
          var d = n[c], g = d.size;
          switch (d.type) {
            case "drop":
              e += g;
              break;
            case "dropRight":
              i -= g;
              break;
            case "take":
              i = De(i, e + g);
              break;
            case "takeRight":
              e = Oe(e, i - g);
              break;
          }
        }
        return { start: e, end: i };
      }
      function ig(e) {
        var i = e.match(cp);
        return i ? i[1].split(up) : [];
      }
      function Jc(e, i, n) {
        i = Yt(i, e);
        for (var c = -1, h = i.length, d = !1; ++c < h; ) {
          var g = Rt(i[c]);
          if (!(d = e != null && n(e, g)))
            break;
          e = e[g];
        }
        return d || ++c != h ? d : (h = e == null ? 0 : e.length, !!h && Is(h) && jt(g, h) && (B(e) || dr(e)));
      }
      function sg(e) {
        var i = e.length, n = new e.constructor(i);
        return i && typeof e[0] == "string" && ne.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function Yc(e) {
        return typeof e.constructor == "function" && !yi(e) ? $r(Ji(e)) : {};
      }
      function ng(e, i, n) {
        var c = e.constructor;
        switch (i) {
          case ii:
            return kn(e);
          case Yr:
          case Zr:
            return new c(+e);
          case Ir:
            return zf(e, n);
          case Ks:
          case Ws:
          case Gs:
          case Qs:
          case Js:
          case Ys:
          case Zs:
          case Xs:
          case en:
            return xc(e, n);
          case ft:
            return new c();
          case Xr:
          case ti:
            return new c(e);
          case ei:
            return Hf(e);
          case gt:
            return new c();
          case ji:
            return Bf(e);
        }
      }
      function og(e, i) {
        var n = i.length;
        if (!n)
          return e;
        var c = n - 1;
        return i[c] = (n > 1 ? "& " : "") + i[c], i = i.join(n > 2 ? ", " : " "), e.replace(ap, `{
/* [wrapped with ` + i + `] */
`);
      }
      function ag(e) {
        return B(e) || dr(e) || !!(rc && e && e[rc]);
      }
      function jt(e, i) {
        var n = typeof e;
        return i = i ?? ce, !!i && (n == "number" || n != "symbol" && vp.test(e)) && e > -1 && e % 1 == 0 && e < i;
      }
      function Ue(e, i, n) {
        if (!we(n))
          return !1;
        var c = typeof i;
        return (c == "number" ? ze(n) && jt(i, n.length) : c == "string" && i in n) ? vt(n[i], e) : !1;
      }
      function Qn(e, i) {
        if (B(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Ze(e) ? !0 : ip.test(e) || !rp.test(e) || i != null && e in ae(i);
      }
      function cg(e) {
        var i = typeof e;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
      }
      function Jn(e) {
        var i = gs(e), n = p[i];
        if (typeof n != "function" || !(i in Y.prototype))
          return !1;
        if (e === n)
          return !0;
        var c = Kn(n);
        return !!c && e === c[0];
      }
      function ug(e) {
        return !!Za && Za in e;
      }
      var hg = Vi ? Ut : fo;
      function yi(e) {
        var i = e && e.constructor, n = typeof i == "function" && i.prototype || Nr;
        return e === n;
      }
      function Zc(e) {
        return e === e && !we(e);
      }
      function Xc(e, i) {
        return function(n) {
          return n == null ? !1 : n[e] === i && (i !== r || e in ae(n));
        };
      }
      function lg(e) {
        var i = _s(e, function(c) {
          return n.size === _ && n.clear(), c;
        }), n = i.cache;
        return i;
      }
      function pg(e, i) {
        var n = e[1], c = i[1], h = n | c, d = h < (F | Q | me), g = c == me && n == X || c == me && n == ve && e[7].length <= i[8] || c == (me | ve) && i[7].length <= i[8] && n == X;
        if (!(d || g))
          return e;
        c & F && (e[2] = i[2], h |= n & F ? 0 : ye);
        var y = i[3];
        if (y) {
          var v = e[3];
          e[3] = v ? Fc(v, y, i[4]) : y, e[4] = v ? Wt(e[3], N) : i[4];
        }
        return y = i[5], y && (v = e[5], e[5] = v ? qc(v, y, i[6]) : y, e[6] = v ? Wt(e[5], N) : i[6]), y = i[7], y && (e[7] = y), c & me && (e[8] = e[8] == null ? i[8] : De(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = h, e;
      }
      function dg(e) {
        var i = [];
        if (e != null)
          for (var n in ae(e))
            i.push(n);
        return i;
      }
      function fg(e) {
        return Wi.call(e);
      }
      function eu(e, i, n) {
        return i = Oe(i === r ? e.length - 1 : i, 0), function() {
          for (var c = arguments, h = -1, d = Oe(c.length - i, 0), g = b(d); ++h < d; )
            g[h] = c[i + h];
          h = -1;
          for (var y = b(i + 1); ++h < i; )
            y[h] = c[h];
          return y[i] = n(g), Qe(e, this, y);
        };
      }
      function tu(e, i) {
        return i.length < 2 ? e : hr(e, ut(i, 0, -1));
      }
      function gg(e, i) {
        for (var n = e.length, c = De(i.length, n), h = ke(e); c--; ) {
          var d = i[c];
          e[c] = jt(d, n) ? h[d] : r;
        }
        return e;
      }
      function Yn(e, i) {
        if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
          return e[i];
      }
      var ru = su(Sc), mi = Nd || function(e, i) {
        return Te.setTimeout(e, i);
      }, Zn = su(Uf);
      function iu(e, i, n) {
        var c = i + "";
        return Zn(e, og(c, yg(ig(c), n)));
      }
      function su(e) {
        var i = 0, n = 0;
        return function() {
          var c = xd(), h = Qr - (c - n);
          if (n = c, h > 0) {
            if (++i >= Vs)
              return arguments[0];
          } else
            i = 0;
          return e.apply(r, arguments);
        };
      }
      function ms(e, i) {
        var n = -1, c = e.length, h = c - 1;
        for (i = i === r ? c : i; ++n < i; ) {
          var d = Dn(n, h), g = e[d];
          e[d] = e[n], e[n] = g;
        }
        return e.length = i, e;
      }
      var nu = lg(function(e) {
        var i = [];
        return e.charCodeAt(0) === 46 && i.push(""), e.replace(sp, function(n, c, h, d) {
          i.push(h ? d.replace(pp, "$1") : c || n);
        }), i;
      });
      function Rt(e) {
        if (typeof e == "string" || Ze(e))
          return e;
        var i = e + "";
        return i == "0" && 1 / e == -de ? "-0" : i;
      }
      function pr(e) {
        if (e != null) {
          try {
            return Ki.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function yg(e, i) {
        return nt(zl, function(n) {
          var c = "_." + n[0];
          i & n[1] && !ki(e, c) && e.push(c);
        }), e.sort();
      }
      function ou(e) {
        if (e instanceof Y)
          return e.clone();
        var i = new at(e.__wrapped__, e.__chain__);
        return i.__actions__ = ke(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i;
      }
      function mg(e, i, n) {
        (n ? Ue(e, i, n) : i === r) ? i = 1 : i = Oe(V(i), 0);
        var c = e == null ? 0 : e.length;
        if (!c || i < 1)
          return [];
        for (var h = 0, d = 0, g = b(Xi(c / i)); h < c; )
          g[d++] = ut(e, h, h += i);
        return g;
      }
      function vg(e) {
        for (var i = -1, n = e == null ? 0 : e.length, c = 0, h = []; ++i < n; ) {
          var d = e[i];
          d && (h[c++] = d);
        }
        return h;
      }
      function wg() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var i = b(e - 1), n = arguments[0], c = e; c--; )
          i[c - 1] = arguments[c];
        return Kt(B(n) ? ke(n) : [n], Ce(i, 1));
      }
      var bg = G(function(e, i) {
        return _e(e) ? li(e, Ce(i, 1, _e, !0)) : [];
      }), _g = G(function(e, i) {
        var n = ht(i);
        return _e(n) && (n = r), _e(e) ? li(e, Ce(i, 1, _e, !0), M(n, 2)) : [];
      }), Eg = G(function(e, i) {
        var n = ht(i);
        return _e(n) && (n = r), _e(e) ? li(e, Ce(i, 1, _e, !0), r, n) : [];
      });
      function Ig(e, i, n) {
        var c = e == null ? 0 : e.length;
        return c ? (i = n || i === r ? 1 : V(i), ut(e, i < 0 ? 0 : i, c)) : [];
      }
      function Pg(e, i, n) {
        var c = e == null ? 0 : e.length;
        return c ? (i = n || i === r ? 1 : V(i), i = c - i, ut(e, 0, i < 0 ? 0 : i)) : [];
      }
      function Sg(e, i) {
        return e && e.length ? us(e, M(i, 3), !0, !0) : [];
      }
      function Og(e, i) {
        return e && e.length ? us(e, M(i, 3), !0) : [];
      }
      function Rg(e, i, n, c) {
        var h = e == null ? 0 : e.length;
        return h ? (n && typeof n != "number" && Ue(e, i, n) && (n = 0, c = h), wf(e, i, n, c)) : [];
      }
      function au(e, i, n) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var h = n == null ? 0 : V(n);
        return h < 0 && (h = Oe(c + h, 0)), zi(e, M(i, 3), h);
      }
      function cu(e, i, n) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var h = c - 1;
        return n !== r && (h = V(n), h = n < 0 ? Oe(c + h, 0) : De(h, c - 1)), zi(e, M(i, 3), h, !0);
      }
      function uu(e) {
        var i = e == null ? 0 : e.length;
        return i ? Ce(e, 1) : [];
      }
      function Ag(e) {
        var i = e == null ? 0 : e.length;
        return i ? Ce(e, de) : [];
      }
      function Ng(e, i) {
        var n = e == null ? 0 : e.length;
        return n ? (i = i === r ? 1 : V(i), Ce(e, i)) : [];
      }
      function Tg(e) {
        for (var i = -1, n = e == null ? 0 : e.length, c = {}; ++i < n; ) {
          var h = e[i];
          c[h[0]] = h[1];
        }
        return c;
      }
      function hu(e) {
        return e && e.length ? e[0] : r;
      }
      function Cg(e, i, n) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var h = n == null ? 0 : V(n);
        return h < 0 && (h = Oe(c + h, 0)), Sr(e, i, h);
      }
      function $g(e) {
        var i = e == null ? 0 : e.length;
        return i ? ut(e, 0, -1) : [];
      }
      var xg = G(function(e) {
        var i = fe(e, Mn);
        return i.length && i[0] === e[0] ? Nn(i) : [];
      }), Dg = G(function(e) {
        var i = ht(e), n = fe(e, Mn);
        return i === ht(n) ? i = r : n.pop(), n.length && n[0] === e[0] ? Nn(n, M(i, 2)) : [];
      }), Fg = G(function(e) {
        var i = ht(e), n = fe(e, Mn);
        return i = typeof i == "function" ? i : r, i && n.pop(), n.length && n[0] === e[0] ? Nn(n, r, i) : [];
      });
      function qg(e, i) {
        return e == null ? "" : Cd.call(e, i);
      }
      function ht(e) {
        var i = e == null ? 0 : e.length;
        return i ? e[i - 1] : r;
      }
      function jg(e, i, n) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var h = c;
        return n !== r && (h = V(n), h = h < 0 ? Oe(c + h, 0) : De(h, c - 1)), i === i ? gd(e, i, h) : zi(e, Ba, h, !0);
      }
      function Ug(e, i) {
        return e && e.length ? _c(e, V(i)) : r;
      }
      var Mg = G(lu);
      function lu(e, i) {
        return e && e.length && i && i.length ? xn(e, i) : e;
      }
      function Lg(e, i, n) {
        return e && e.length && i && i.length ? xn(e, i, M(n, 2)) : e;
      }
      function kg(e, i, n) {
        return e && e.length && i && i.length ? xn(e, i, r, n) : e;
      }
      var zg = qt(function(e, i) {
        var n = e == null ? 0 : e.length, c = Sn(e, i);
        return Pc(e, fe(i, function(h) {
          return jt(h, n) ? +h : h;
        }).sort(Dc)), c;
      });
      function Hg(e, i) {
        var n = [];
        if (!(e && e.length))
          return n;
        var c = -1, h = [], d = e.length;
        for (i = M(i, 3); ++c < d; ) {
          var g = e[c];
          i(g, c, e) && (n.push(g), h.push(c));
        }
        return Pc(e, h), n;
      }
      function Xn(e) {
        return e == null ? e : Fd.call(e);
      }
      function Bg(e, i, n) {
        var c = e == null ? 0 : e.length;
        return c ? (n && typeof n != "number" && Ue(e, i, n) ? (i = 0, n = c) : (i = i == null ? 0 : V(i), n = n === r ? c : V(n)), ut(e, i, n)) : [];
      }
      function Vg(e, i) {
        return cs(e, i);
      }
      function Kg(e, i, n) {
        return qn(e, i, M(n, 2));
      }
      function Wg(e, i) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var c = cs(e, i);
          if (c < n && vt(e[c], i))
            return c;
        }
        return -1;
      }
      function Gg(e, i) {
        return cs(e, i, !0);
      }
      function Qg(e, i, n) {
        return qn(e, i, M(n, 2), !0);
      }
      function Jg(e, i) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var c = cs(e, i, !0) - 1;
          if (vt(e[c], i))
            return c;
        }
        return -1;
      }
      function Yg(e) {
        return e && e.length ? Oc(e) : [];
      }
      function Zg(e, i) {
        return e && e.length ? Oc(e, M(i, 2)) : [];
      }
      function Xg(e) {
        var i = e == null ? 0 : e.length;
        return i ? ut(e, 1, i) : [];
      }
      function ey(e, i, n) {
        return e && e.length ? (i = n || i === r ? 1 : V(i), ut(e, 0, i < 0 ? 0 : i)) : [];
      }
      function ty(e, i, n) {
        var c = e == null ? 0 : e.length;
        return c ? (i = n || i === r ? 1 : V(i), i = c - i, ut(e, i < 0 ? 0 : i, c)) : [];
      }
      function ry(e, i) {
        return e && e.length ? us(e, M(i, 3), !1, !0) : [];
      }
      function iy(e, i) {
        return e && e.length ? us(e, M(i, 3)) : [];
      }
      var sy = G(function(e) {
        return Jt(Ce(e, 1, _e, !0));
      }), ny = G(function(e) {
        var i = ht(e);
        return _e(i) && (i = r), Jt(Ce(e, 1, _e, !0), M(i, 2));
      }), oy = G(function(e) {
        var i = ht(e);
        return i = typeof i == "function" ? i : r, Jt(Ce(e, 1, _e, !0), r, i);
      });
      function ay(e) {
        return e && e.length ? Jt(e) : [];
      }
      function cy(e, i) {
        return e && e.length ? Jt(e, M(i, 2)) : [];
      }
      function uy(e, i) {
        return i = typeof i == "function" ? i : r, e && e.length ? Jt(e, r, i) : [];
      }
      function eo(e) {
        if (!(e && e.length))
          return [];
        var i = 0;
        return e = Vt(e, function(n) {
          if (_e(n))
            return i = Oe(n.length, i), !0;
        }), mn(i, function(n) {
          return fe(e, fn(n));
        });
      }
      function pu(e, i) {
        if (!(e && e.length))
          return [];
        var n = eo(e);
        return i == null ? n : fe(n, function(c) {
          return Qe(i, r, c);
        });
      }
      var hy = G(function(e, i) {
        return _e(e) ? li(e, i) : [];
      }), ly = G(function(e) {
        return Un(Vt(e, _e));
      }), py = G(function(e) {
        var i = ht(e);
        return _e(i) && (i = r), Un(Vt(e, _e), M(i, 2));
      }), dy = G(function(e) {
        var i = ht(e);
        return i = typeof i == "function" ? i : r, Un(Vt(e, _e), r, i);
      }), fy = G(eo);
      function gy(e, i) {
        return Tc(e || [], i || [], hi);
      }
      function yy(e, i) {
        return Tc(e || [], i || [], fi);
      }
      var my = G(function(e) {
        var i = e.length, n = i > 1 ? e[i - 1] : r;
        return n = typeof n == "function" ? (e.pop(), n) : r, pu(e, n);
      });
      function du(e) {
        var i = p(e);
        return i.__chain__ = !0, i;
      }
      function vy(e, i) {
        return i(e), e;
      }
      function vs(e, i) {
        return i(e);
      }
      var wy = qt(function(e) {
        var i = e.length, n = i ? e[0] : 0, c = this.__wrapped__, h = function(d) {
          return Sn(d, e);
        };
        return i > 1 || this.__actions__.length || !(c instanceof Y) || !jt(n) ? this.thru(h) : (c = c.slice(n, +n + (i ? 1 : 0)), c.__actions__.push({ func: vs, args: [h], thisArg: r }), new at(c, this.__chain__).thru(function(d) {
          return i && !d.length && d.push(r), d;
        }));
      });
      function by() {
        return du(this);
      }
      function _y() {
        return new at(this.value(), this.__chain__);
      }
      function Ey() {
        this.__values__ === r && (this.__values__ = Ru(this.value()));
        var e = this.__index__ >= this.__values__.length, i = e ? r : this.__values__[this.__index__++];
        return { done: e, value: i };
      }
      function Iy() {
        return this;
      }
      function Py(e) {
        for (var i, n = this; n instanceof is; ) {
          var c = ou(n);
          c.__index__ = 0, c.__values__ = r, i ? h.__wrapped__ = c : i = c;
          var h = c;
          n = n.__wrapped__;
        }
        return h.__wrapped__ = e, i;
      }
      function Sy() {
        var e = this.__wrapped__;
        if (e instanceof Y) {
          var i = e;
          return this.__actions__.length && (i = new Y(this)), i = i.reverse(), i.__actions__.push({ func: vs, args: [Xn], thisArg: r }), new at(i, this.__chain__);
        }
        return this.thru(Xn);
      }
      function Oy() {
        return Nc(this.__wrapped__, this.__actions__);
      }
      var Ry = hs(function(e, i, n) {
        ne.call(e, n) ? ++e[n] : Dt(e, n, 1);
      });
      function Ay(e, i, n) {
        var c = B(e) ? za : vf;
        return n && Ue(e, i, n) && (i = r), c(e, M(i, 3));
      }
      function Ny(e, i) {
        var n = B(e) ? Vt : pc;
        return n(e, M(i, 3));
      }
      var Ty = Lc(au), Cy = Lc(cu);
      function $y(e, i) {
        return Ce(ws(e, i), 1);
      }
      function xy(e, i) {
        return Ce(ws(e, i), de);
      }
      function Dy(e, i, n) {
        return n = n === r ? 1 : V(n), Ce(ws(e, i), n);
      }
      function fu(e, i) {
        var n = B(e) ? nt : Qt;
        return n(e, M(i, 3));
      }
      function gu(e, i) {
        var n = B(e) ? Zp : lc;
        return n(e, M(i, 3));
      }
      var Fy = hs(function(e, i, n) {
        ne.call(e, n) ? e[n].push(i) : Dt(e, n, [i]);
      });
      function qy(e, i, n, c) {
        e = ze(e) ? e : jr(e), n = n && !c ? V(n) : 0;
        var h = e.length;
        return n < 0 && (n = Oe(h + n, 0)), Ps(e) ? n <= h && e.indexOf(i, n) > -1 : !!h && Sr(e, i, n) > -1;
      }
      var jy = G(function(e, i, n) {
        var c = -1, h = typeof i == "function", d = ze(e) ? b(e.length) : [];
        return Qt(e, function(g) {
          d[++c] = h ? Qe(i, g, n) : pi(g, i, n);
        }), d;
      }), Uy = hs(function(e, i, n) {
        Dt(e, n, i);
      });
      function ws(e, i) {
        var n = B(e) ? fe : vc;
        return n(e, M(i, 3));
      }
      function My(e, i, n, c) {
        return e == null ? [] : (B(i) || (i = i == null ? [] : [i]), n = c ? r : n, B(n) || (n = n == null ? [] : [n]), Ec(e, i, n));
      }
      var Ly = hs(function(e, i, n) {
        e[n ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function ky(e, i, n) {
        var c = B(e) ? pn : Ka, h = arguments.length < 3;
        return c(e, M(i, 4), n, h, Qt);
      }
      function zy(e, i, n) {
        var c = B(e) ? Xp : Ka, h = arguments.length < 3;
        return c(e, M(i, 4), n, h, lc);
      }
      function Hy(e, i) {
        var n = B(e) ? Vt : pc;
        return n(e, Es(M(i, 3)));
      }
      function By(e) {
        var i = B(e) ? ac : qf;
        return i(e);
      }
      function Vy(e, i, n) {
        (n ? Ue(e, i, n) : i === r) ? i = 1 : i = V(i);
        var c = B(e) ? df : jf;
        return c(e, i);
      }
      function Ky(e) {
        var i = B(e) ? ff : Mf;
        return i(e);
      }
      function Wy(e) {
        if (e == null)
          return 0;
        if (ze(e))
          return Ps(e) ? Rr(e) : e.length;
        var i = Fe(e);
        return i == ft || i == gt ? e.size : Cn(e).length;
      }
      function Gy(e, i, n) {
        var c = B(e) ? dn : Lf;
        return n && Ue(e, i, n) && (i = r), c(e, M(i, 3));
      }
      var Qy = G(function(e, i) {
        if (e == null)
          return [];
        var n = i.length;
        return n > 1 && Ue(e, i[0], i[1]) ? i = [] : n > 2 && Ue(i[0], i[1], i[2]) && (i = [i[0]]), Ec(e, Ce(i, 1), []);
      }), bs = Ad || function() {
        return Te.Date.now();
      };
      function Jy(e, i) {
        if (typeof i != "function")
          throw new ot(l);
        return e = V(e), function() {
          if (--e < 1)
            return i.apply(this, arguments);
        };
      }
      function yu(e, i, n) {
        return i = n ? r : i, i = e && i == null ? e.length : i, Ft(e, me, r, r, r, r, i);
      }
      function mu(e, i) {
        var n;
        if (typeof i != "function")
          throw new ot(l);
        return e = V(e), function() {
          return --e > 0 && (n = i.apply(this, arguments)), e <= 1 && (i = r), n;
        };
      }
      var to = G(function(e, i, n) {
        var c = F;
        if (n.length) {
          var h = Wt(n, Fr(to));
          c |= oe;
        }
        return Ft(e, c, i, n, h);
      }), vu = G(function(e, i, n) {
        var c = F | Q;
        if (n.length) {
          var h = Wt(n, Fr(vu));
          c |= oe;
        }
        return Ft(i, c, e, n, h);
      });
      function wu(e, i, n) {
        i = n ? r : i;
        var c = Ft(e, X, r, r, r, r, r, i);
        return c.placeholder = wu.placeholder, c;
      }
      function bu(e, i, n) {
        i = n ? r : i;
        var c = Ft(e, ee, r, r, r, r, r, i);
        return c.placeholder = bu.placeholder, c;
      }
      function _u(e, i, n) {
        var c, h, d, g, y, v, P = 0, S = !1, R = !1, x = !0;
        if (typeof e != "function")
          throw new ot(l);
        i = lt(i) || 0, we(n) && (S = !!n.leading, R = "maxWait" in n, d = R ? Oe(lt(n.maxWait) || 0, i) : d, x = "trailing" in n ? !!n.trailing : x);
        function q(Ee) {
          var wt = c, Lt = h;
          return c = h = r, P = Ee, g = e.apply(Lt, wt), g;
        }
        function L(Ee) {
          return P = Ee, y = mi(J, i), S ? q(Ee) : g;
        }
        function W(Ee) {
          var wt = Ee - v, Lt = Ee - P, Lu = i - wt;
          return R ? De(Lu, d - Lt) : Lu;
        }
        function k(Ee) {
          var wt = Ee - v, Lt = Ee - P;
          return v === r || wt >= i || wt < 0 || R && Lt >= d;
        }
        function J() {
          var Ee = bs();
          if (k(Ee))
            return Z(Ee);
          y = mi(J, W(Ee));
        }
        function Z(Ee) {
          return y = r, x && c ? q(Ee) : (c = h = r, g);
        }
        function Xe() {
          y !== r && Cc(y), P = 0, c = v = h = y = r;
        }
        function Me() {
          return y === r ? g : Z(bs());
        }
        function et() {
          var Ee = bs(), wt = k(Ee);
          if (c = arguments, h = this, v = Ee, wt) {
            if (y === r)
              return L(v);
            if (R)
              return Cc(y), y = mi(J, i), q(v);
          }
          return y === r && (y = mi(J, i)), g;
        }
        return et.cancel = Xe, et.flush = Me, et;
      }
      var Yy = G(function(e, i) {
        return hc(e, 1, i);
      }), Zy = G(function(e, i, n) {
        return hc(e, lt(i) || 0, n);
      });
      function Xy(e) {
        return Ft(e, Pt);
      }
      function _s(e, i) {
        if (typeof e != "function" || i != null && typeof i != "function")
          throw new ot(l);
        var n = function() {
          var c = arguments, h = i ? i.apply(this, c) : c[0], d = n.cache;
          if (d.has(h))
            return d.get(h);
          var g = e.apply(this, c);
          return n.cache = d.set(h, g) || d, g;
        };
        return n.cache = new (_s.Cache || xt)(), n;
      }
      _s.Cache = xt;
      function Es(e) {
        if (typeof e != "function")
          throw new ot(l);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, i[0]);
            case 2:
              return !e.call(this, i[0], i[1]);
            case 3:
              return !e.call(this, i[0], i[1], i[2]);
          }
          return !e.apply(this, i);
        };
      }
      function em(e) {
        return mu(2, e);
      }
      var tm = kf(function(e, i) {
        i = i.length == 1 && B(i[0]) ? fe(i[0], Je(M())) : fe(Ce(i, 1), Je(M()));
        var n = i.length;
        return G(function(c) {
          for (var h = -1, d = De(c.length, n); ++h < d; )
            c[h] = i[h].call(this, c[h]);
          return Qe(e, this, c);
        });
      }), ro = G(function(e, i) {
        var n = Wt(i, Fr(ro));
        return Ft(e, oe, r, i, n);
      }), Eu = G(function(e, i) {
        var n = Wt(i, Fr(Eu));
        return Ft(e, Ne, r, i, n);
      }), rm = qt(function(e, i) {
        return Ft(e, ve, r, r, r, i);
      });
      function im(e, i) {
        if (typeof e != "function")
          throw new ot(l);
        return i = i === r ? i : V(i), G(e, i);
      }
      function sm(e, i) {
        if (typeof e != "function")
          throw new ot(l);
        return i = i == null ? 0 : Oe(V(i), 0), G(function(n) {
          var c = n[i], h = Zt(n, 0, i);
          return c && Kt(h, c), Qe(e, this, h);
        });
      }
      function nm(e, i, n) {
        var c = !0, h = !0;
        if (typeof e != "function")
          throw new ot(l);
        return we(n) && (c = "leading" in n ? !!n.leading : c, h = "trailing" in n ? !!n.trailing : h), _u(e, i, { leading: c, maxWait: i, trailing: h });
      }
      function om(e) {
        return yu(e, 1);
      }
      function am(e, i) {
        return ro(Ln(i), e);
      }
      function cm() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return B(e) ? e : [e];
      }
      function um(e) {
        return ct(e, j);
      }
      function hm(e, i) {
        return i = typeof i == "function" ? i : r, ct(e, j, i);
      }
      function lm(e) {
        return ct(e, O | j);
      }
      function pm(e, i) {
        return i = typeof i == "function" ? i : r, ct(e, O | j, i);
      }
      function dm(e, i) {
        return i == null || uc(e, i, Re(i));
      }
      function vt(e, i) {
        return e === i || e !== e && i !== i;
      }
      var fm = fs(An), gm = fs(function(e, i) {
        return e >= i;
      }), dr = gc(/* @__PURE__ */ function() {
        return arguments;
      }()) ? gc : function(e) {
        return be(e) && ne.call(e, "callee") && !tc.call(e, "callee");
      }, B = b.isArray, ym = qa ? Je(qa) : Pf;
      function ze(e) {
        return e != null && Is(e.length) && !Ut(e);
      }
      function _e(e) {
        return be(e) && ze(e);
      }
      function mm(e) {
        return e === !0 || e === !1 || be(e) && je(e) == Yr;
      }
      var Xt = Td || fo, vm = ja ? Je(ja) : Sf;
      function wm(e) {
        return be(e) && e.nodeType === 1 && !vi(e);
      }
      function bm(e) {
        if (e == null)
          return !0;
        if (ze(e) && (B(e) || typeof e == "string" || typeof e.splice == "function" || Xt(e) || qr(e) || dr(e)))
          return !e.length;
        var i = Fe(e);
        if (i == ft || i == gt)
          return !e.size;
        if (yi(e))
          return !Cn(e).length;
        for (var n in e)
          if (ne.call(e, n))
            return !1;
        return !0;
      }
      function _m(e, i) {
        return di(e, i);
      }
      function Em(e, i, n) {
        n = typeof n == "function" ? n : r;
        var c = n ? n(e, i) : r;
        return c === r ? di(e, i, r, n) : !!c;
      }
      function io(e) {
        if (!be(e))
          return !1;
        var i = je(e);
        return i == Fi || i == Bl || typeof e.message == "string" && typeof e.name == "string" && !vi(e);
      }
      function Im(e) {
        return typeof e == "number" && ic(e);
      }
      function Ut(e) {
        if (!we(e))
          return !1;
        var i = je(e);
        return i == qi || i == ha || i == Hl || i == Kl;
      }
      function Iu(e) {
        return typeof e == "number" && e == V(e);
      }
      function Is(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ce;
      }
      function we(e) {
        var i = typeof e;
        return e != null && (i == "object" || i == "function");
      }
      function be(e) {
        return e != null && typeof e == "object";
      }
      var Pu = Ua ? Je(Ua) : Rf;
      function Pm(e, i) {
        return e === i || Tn(e, i, Wn(i));
      }
      function Sm(e, i, n) {
        return n = typeof n == "function" ? n : r, Tn(e, i, Wn(i), n);
      }
      function Om(e) {
        return Su(e) && e != +e;
      }
      function Rm(e) {
        if (hg(e))
          throw new z(u);
        return yc(e);
      }
      function Am(e) {
        return e === null;
      }
      function Nm(e) {
        return e == null;
      }
      function Su(e) {
        return typeof e == "number" || be(e) && je(e) == Xr;
      }
      function vi(e) {
        if (!be(e) || je(e) != Ct)
          return !1;
        var i = Ji(e);
        if (i === null)
          return !0;
        var n = ne.call(i, "constructor") && i.constructor;
        return typeof n == "function" && n instanceof n && Ki.call(n) == Pd;
      }
      var so = Ma ? Je(Ma) : Af;
      function Tm(e) {
        return Iu(e) && e >= -ce && e <= ce;
      }
      var Ou = La ? Je(La) : Nf;
      function Ps(e) {
        return typeof e == "string" || !B(e) && be(e) && je(e) == ti;
      }
      function Ze(e) {
        return typeof e == "symbol" || be(e) && je(e) == ji;
      }
      var qr = ka ? Je(ka) : Tf;
      function Cm(e) {
        return e === r;
      }
      function $m(e) {
        return be(e) && Fe(e) == ri;
      }
      function xm(e) {
        return be(e) && je(e) == Gl;
      }
      var Dm = fs($n), Fm = fs(function(e, i) {
        return e <= i;
      });
      function Ru(e) {
        if (!e)
          return [];
        if (ze(e))
          return Ps(e) ? yt(e) : ke(e);
        if (ni && e[ni])
          return pd(e[ni]());
        var i = Fe(e), n = i == ft ? wn : i == gt ? Hi : jr;
        return n(e);
      }
      function Mt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = lt(e), e === de || e === -de) {
          var i = e < 0 ? -1 : 1;
          return i * se;
        }
        return e === e ? e : 0;
      }
      function V(e) {
        var i = Mt(e), n = i % 1;
        return i === i ? n ? i - n : i : 0;
      }
      function Au(e) {
        return e ? ur(V(e), 0, xe) : 0;
      }
      function lt(e) {
        if (typeof e == "number")
          return e;
        if (Ze(e))
          return Tt;
        if (we(e)) {
          var i = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = we(i) ? i + "" : i;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Wa(e);
        var n = gp.test(e);
        return n || mp.test(e) ? Qp(e.slice(2), n ? 2 : 8) : fp.test(e) ? Tt : +e;
      }
      function Nu(e) {
        return Ot(e, He(e));
      }
      function qm(e) {
        return e ? ur(V(e), -ce, ce) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : Ye(e);
      }
      var jm = xr(function(e, i) {
        if (yi(i) || ze(i)) {
          Ot(i, Re(i), e);
          return;
        }
        for (var n in i)
          ne.call(i, n) && hi(e, n, i[n]);
      }), Tu = xr(function(e, i) {
        Ot(i, He(i), e);
      }), Ss = xr(function(e, i, n, c) {
        Ot(i, He(i), e, c);
      }), Um = xr(function(e, i, n, c) {
        Ot(i, Re(i), e, c);
      }), Mm = qt(Sn);
      function Lm(e, i) {
        var n = $r(e);
        return i == null ? n : cc(n, i);
      }
      var km = G(function(e, i) {
        e = ae(e);
        var n = -1, c = i.length, h = c > 2 ? i[2] : r;
        for (h && Ue(i[0], i[1], h) && (c = 1); ++n < c; )
          for (var d = i[n], g = He(d), y = -1, v = g.length; ++y < v; ) {
            var P = g[y], S = e[P];
            (S === r || vt(S, Nr[P]) && !ne.call(e, P)) && (e[P] = d[P]);
          }
        return e;
      }), zm = G(function(e) {
        return e.push(r, Wc), Qe(Cu, r, e);
      });
      function Hm(e, i) {
        return Ha(e, M(i, 3), St);
      }
      function Bm(e, i) {
        return Ha(e, M(i, 3), Rn);
      }
      function Vm(e, i) {
        return e == null ? e : On(e, M(i, 3), He);
      }
      function Km(e, i) {
        return e == null ? e : dc(e, M(i, 3), He);
      }
      function Wm(e, i) {
        return e && St(e, M(i, 3));
      }
      function Gm(e, i) {
        return e && Rn(e, M(i, 3));
      }
      function Qm(e) {
        return e == null ? [] : os(e, Re(e));
      }
      function Jm(e) {
        return e == null ? [] : os(e, He(e));
      }
      function no(e, i, n) {
        var c = e == null ? r : hr(e, i);
        return c === r ? n : c;
      }
      function Ym(e, i) {
        return e != null && Jc(e, i, bf);
      }
      function oo(e, i) {
        return e != null && Jc(e, i, _f);
      }
      var Zm = zc(function(e, i, n) {
        i != null && typeof i.toString != "function" && (i = Wi.call(i)), e[i] = n;
      }, co(Be)), Xm = zc(function(e, i, n) {
        i != null && typeof i.toString != "function" && (i = Wi.call(i)), ne.call(e, i) ? e[i].push(n) : e[i] = [n];
      }, M), ev = G(pi);
      function Re(e) {
        return ze(e) ? oc(e) : Cn(e);
      }
      function He(e) {
        return ze(e) ? oc(e, !0) : Cf(e);
      }
      function tv(e, i) {
        var n = {};
        return i = M(i, 3), St(e, function(c, h, d) {
          Dt(n, i(c, h, d), c);
        }), n;
      }
      function rv(e, i) {
        var n = {};
        return i = M(i, 3), St(e, function(c, h, d) {
          Dt(n, h, i(c, h, d));
        }), n;
      }
      var iv = xr(function(e, i, n) {
        as(e, i, n);
      }), Cu = xr(function(e, i, n, c) {
        as(e, i, n, c);
      }), sv = qt(function(e, i) {
        var n = {};
        if (e == null)
          return n;
        var c = !1;
        i = fe(i, function(d) {
          return d = Yt(d, e), c || (c = d.length > 1), d;
        }), Ot(e, Vn(e), n), c && (n = ct(n, O | A | j, Zf));
        for (var h = i.length; h--; )
          jn(n, i[h]);
        return n;
      });
      function nv(e, i) {
        return $u(e, Es(M(i)));
      }
      var ov = qt(function(e, i) {
        return e == null ? {} : xf(e, i);
      });
      function $u(e, i) {
        if (e == null)
          return {};
        var n = fe(Vn(e), function(c) {
          return [c];
        });
        return i = M(i), Ic(e, n, function(c, h) {
          return i(c, h[0]);
        });
      }
      function av(e, i, n) {
        i = Yt(i, e);
        var c = -1, h = i.length;
        for (h || (h = 1, e = r); ++c < h; ) {
          var d = e == null ? r : e[Rt(i[c])];
          d === r && (c = h, d = n), e = Ut(d) ? d.call(e) : d;
        }
        return e;
      }
      function cv(e, i, n) {
        return e == null ? e : fi(e, i, n);
      }
      function uv(e, i, n, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : fi(e, i, n, c);
      }
      var xu = Vc(Re), Du = Vc(He);
      function hv(e, i, n) {
        var c = B(e), h = c || Xt(e) || qr(e);
        if (i = M(i, 4), n == null) {
          var d = e && e.constructor;
          h ? n = c ? new d() : [] : we(e) ? n = Ut(d) ? $r(Ji(e)) : {} : n = {};
        }
        return (h ? nt : St)(e, function(g, y, v) {
          return i(n, g, y, v);
        }), n;
      }
      function lv(e, i) {
        return e == null ? !0 : jn(e, i);
      }
      function pv(e, i, n) {
        return e == null ? e : Ac(e, i, Ln(n));
      }
      function dv(e, i, n, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : Ac(e, i, Ln(n), c);
      }
      function jr(e) {
        return e == null ? [] : vn(e, Re(e));
      }
      function fv(e) {
        return e == null ? [] : vn(e, He(e));
      }
      function gv(e, i, n) {
        return n === r && (n = i, i = r), n !== r && (n = lt(n), n = n === n ? n : 0), i !== r && (i = lt(i), i = i === i ? i : 0), ur(lt(e), i, n);
      }
      function yv(e, i, n) {
        return i = Mt(i), n === r ? (n = i, i = 0) : n = Mt(n), e = lt(e), Ef(e, i, n);
      }
      function mv(e, i, n) {
        if (n && typeof n != "boolean" && Ue(e, i, n) && (i = n = r), n === r && (typeof i == "boolean" ? (n = i, i = r) : typeof e == "boolean" && (n = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = Mt(e), i === r ? (i = e, e = 0) : i = Mt(i)), e > i) {
          var c = e;
          e = i, i = c;
        }
        if (n || e % 1 || i % 1) {
          var h = sc();
          return De(e + h * (i - e + Gp("1e-" + ((h + "").length - 1))), i);
        }
        return Dn(e, i);
      }
      var vv = Dr(function(e, i, n) {
        return i = i.toLowerCase(), e + (n ? Fu(i) : i);
      });
      function Fu(e) {
        return ao(ie(e).toLowerCase());
      }
      function qu(e) {
        return e = ie(e), e && e.replace(wp, ad).replace(Up, "");
      }
      function wv(e, i, n) {
        e = ie(e), i = Ye(i);
        var c = e.length;
        n = n === r ? c : ur(V(n), 0, c);
        var h = n;
        return n -= i.length, n >= 0 && e.slice(n, h) == i;
      }
      function bv(e) {
        return e = ie(e), e && Xl.test(e) ? e.replace(da, cd) : e;
      }
      function _v(e) {
        return e = ie(e), e && np.test(e) ? e.replace(tn, "\\$&") : e;
      }
      var Ev = Dr(function(e, i, n) {
        return e + (n ? "-" : "") + i.toLowerCase();
      }), Iv = Dr(function(e, i, n) {
        return e + (n ? " " : "") + i.toLowerCase();
      }), Pv = Mc("toLowerCase");
      function Sv(e, i, n) {
        e = ie(e), i = V(i);
        var c = i ? Rr(e) : 0;
        if (!i || c >= i)
          return e;
        var h = (i - c) / 2;
        return ds(es(h), n) + e + ds(Xi(h), n);
      }
      function Ov(e, i, n) {
        e = ie(e), i = V(i);
        var c = i ? Rr(e) : 0;
        return i && c < i ? e + ds(i - c, n) : e;
      }
      function Rv(e, i, n) {
        e = ie(e), i = V(i);
        var c = i ? Rr(e) : 0;
        return i && c < i ? ds(i - c, n) + e : e;
      }
      function Av(e, i, n) {
        return n || i == null ? i = 0 : i && (i = +i), Dd(ie(e).replace(rn, ""), i || 0);
      }
      function Nv(e, i, n) {
        return (n ? Ue(e, i, n) : i === r) ? i = 1 : i = V(i), Fn(ie(e), i);
      }
      function Tv() {
        var e = arguments, i = ie(e[0]);
        return e.length < 3 ? i : i.replace(e[1], e[2]);
      }
      var Cv = Dr(function(e, i, n) {
        return e + (n ? "_" : "") + i.toLowerCase();
      });
      function $v(e, i, n) {
        return n && typeof n != "number" && Ue(e, i, n) && (i = n = r), n = n === r ? xe : n >>> 0, n ? (e = ie(e), e && (typeof i == "string" || i != null && !so(i)) && (i = Ye(i), !i && Or(e)) ? Zt(yt(e), 0, n) : e.split(i, n)) : [];
      }
      var xv = Dr(function(e, i, n) {
        return e + (n ? " " : "") + ao(i);
      });
      function Dv(e, i, n) {
        return e = ie(e), n = n == null ? 0 : ur(V(n), 0, e.length), i = Ye(i), e.slice(n, n + i.length) == i;
      }
      function Fv(e, i, n) {
        var c = p.templateSettings;
        n && Ue(e, i, n) && (i = r), e = ie(e), i = Ss({}, i, c, Kc);
        var h = Ss({}, i.imports, c.imports, Kc), d = Re(h), g = vn(h, d), y, v, P = 0, S = i.interpolate || Ui, R = "__p += '", x = bn((i.escape || Ui).source + "|" + S.source + "|" + (S === fa ? dp : Ui).source + "|" + (i.evaluate || Ui).source + "|$", "g"), q = "//# sourceURL=" + (ne.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Hp + "]") + `
`;
        e.replace(x, function(k, J, Z, Xe, Me, et) {
          return Z || (Z = Xe), R += e.slice(P, et).replace(bp, ud), J && (y = !0, R += `' +
__e(` + J + `) +
'`), Me && (v = !0, R += `';
` + Me + `;
__p += '`), Z && (R += `' +
((__t = (` + Z + `)) == null ? '' : __t) +
'`), P = et + k.length, k;
        }), R += `';
`;
        var L = ne.call(i, "variable") && i.variable;
        if (!L)
          R = `with (obj) {
` + R + `
}
`;
        else if (lp.test(L))
          throw new z(f);
        R = (v ? R.replace(Ql, "") : R).replace(Jl, "$1").replace(Yl, "$1;"), R = "function(" + (L || "obj") + `) {
` + (L ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (v ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + R + `return __p
}`;
        var W = Uu(function() {
          return re(d, q + "return " + R).apply(r, g);
        });
        if (W.source = R, io(W))
          throw W;
        return W;
      }
      function qv(e) {
        return ie(e).toLowerCase();
      }
      function jv(e) {
        return ie(e).toUpperCase();
      }
      function Uv(e, i, n) {
        if (e = ie(e), e && (n || i === r))
          return Wa(e);
        if (!e || !(i = Ye(i)))
          return e;
        var c = yt(e), h = yt(i), d = Ga(c, h), g = Qa(c, h) + 1;
        return Zt(c, d, g).join("");
      }
      function Mv(e, i, n) {
        if (e = ie(e), e && (n || i === r))
          return e.slice(0, Ya(e) + 1);
        if (!e || !(i = Ye(i)))
          return e;
        var c = yt(e), h = Qa(c, yt(i)) + 1;
        return Zt(c, 0, h).join("");
      }
      function Lv(e, i, n) {
        if (e = ie(e), e && (n || i === r))
          return e.replace(rn, "");
        if (!e || !(i = Ye(i)))
          return e;
        var c = yt(e), h = Ga(c, yt(i));
        return Zt(c, h).join("");
      }
      function kv(e, i) {
        var n = Bs, c = it;
        if (we(i)) {
          var h = "separator" in i ? i.separator : h;
          n = "length" in i ? V(i.length) : n, c = "omission" in i ? Ye(i.omission) : c;
        }
        e = ie(e);
        var d = e.length;
        if (Or(e)) {
          var g = yt(e);
          d = g.length;
        }
        if (n >= d)
          return e;
        var y = n - Rr(c);
        if (y < 1)
          return c;
        var v = g ? Zt(g, 0, y).join("") : e.slice(0, y);
        if (h === r)
          return v + c;
        if (g && (y += v.length - y), so(h)) {
          if (e.slice(y).search(h)) {
            var P, S = v;
            for (h.global || (h = bn(h.source, ie(ga.exec(h)) + "g")), h.lastIndex = 0; P = h.exec(S); )
              var R = P.index;
            v = v.slice(0, R === r ? y : R);
          }
        } else if (e.indexOf(Ye(h), y) != y) {
          var x = v.lastIndexOf(h);
          x > -1 && (v = v.slice(0, x));
        }
        return v + c;
      }
      function zv(e) {
        return e = ie(e), e && Zl.test(e) ? e.replace(pa, yd) : e;
      }
      var Hv = Dr(function(e, i, n) {
        return e + (n ? " " : "") + i.toUpperCase();
      }), ao = Mc("toUpperCase");
      function ju(e, i, n) {
        return e = ie(e), i = n ? r : i, i === r ? ld(e) ? wd(e) : rd(e) : e.match(i) || [];
      }
      var Uu = G(function(e, i) {
        try {
          return Qe(e, r, i);
        } catch (n) {
          return io(n) ? n : new z(n);
        }
      }), Bv = qt(function(e, i) {
        return nt(i, function(n) {
          n = Rt(n), Dt(e, n, to(e[n], e));
        }), e;
      });
      function Vv(e) {
        var i = e == null ? 0 : e.length, n = M();
        return e = i ? fe(e, function(c) {
          if (typeof c[1] != "function")
            throw new ot(l);
          return [n(c[0]), c[1]];
        }) : [], G(function(c) {
          for (var h = -1; ++h < i; ) {
            var d = e[h];
            if (Qe(d[0], this, c))
              return Qe(d[1], this, c);
          }
        });
      }
      function Kv(e) {
        return mf(ct(e, O));
      }
      function co(e) {
        return function() {
          return e;
        };
      }
      function Wv(e, i) {
        return e == null || e !== e ? i : e;
      }
      var Gv = kc(), Qv = kc(!0);
      function Be(e) {
        return e;
      }
      function uo(e) {
        return mc(typeof e == "function" ? e : ct(e, O));
      }
      function Jv(e) {
        return wc(ct(e, O));
      }
      function Yv(e, i) {
        return bc(e, ct(i, O));
      }
      var Zv = G(function(e, i) {
        return function(n) {
          return pi(n, e, i);
        };
      }), Xv = G(function(e, i) {
        return function(n) {
          return pi(e, n, i);
        };
      });
      function ho(e, i, n) {
        var c = Re(i), h = os(i, c);
        n == null && !(we(i) && (h.length || !c.length)) && (n = i, i = e, e = this, h = os(i, Re(i)));
        var d = !(we(n) && "chain" in n) || !!n.chain, g = Ut(e);
        return nt(h, function(y) {
          var v = i[y];
          e[y] = v, g && (e.prototype[y] = function() {
            var P = this.__chain__;
            if (d || P) {
              var S = e(this.__wrapped__), R = S.__actions__ = ke(this.__actions__);
              return R.push({ func: v, args: arguments, thisArg: e }), S.__chain__ = P, S;
            }
            return v.apply(e, Kt([this.value()], arguments));
          });
        }), e;
      }
      function ew() {
        return Te._ === this && (Te._ = Sd), this;
      }
      function lo() {
      }
      function tw(e) {
        return e = V(e), G(function(i) {
          return _c(i, e);
        });
      }
      var rw = zn(fe), iw = zn(za), sw = zn(dn);
      function Mu(e) {
        return Qn(e) ? fn(Rt(e)) : Df(e);
      }
      function nw(e) {
        return function(i) {
          return e == null ? r : hr(e, i);
        };
      }
      var ow = Hc(), aw = Hc(!0);
      function po() {
        return [];
      }
      function fo() {
        return !1;
      }
      function cw() {
        return {};
      }
      function uw() {
        return "";
      }
      function hw() {
        return !0;
      }
      function lw(e, i) {
        if (e = V(e), e < 1 || e > ce)
          return [];
        var n = xe, c = De(e, xe);
        i = M(i), e -= xe;
        for (var h = mn(c, i); ++n < e; )
          i(n);
        return h;
      }
      function pw(e) {
        return B(e) ? fe(e, Rt) : Ze(e) ? [e] : ke(nu(ie(e)));
      }
      function dw(e) {
        var i = ++Id;
        return ie(e) + i;
      }
      var fw = ps(function(e, i) {
        return e + i;
      }, 0), gw = Hn("ceil"), yw = ps(function(e, i) {
        return e / i;
      }, 1), mw = Hn("floor");
      function vw(e) {
        return e && e.length ? ns(e, Be, An) : r;
      }
      function ww(e, i) {
        return e && e.length ? ns(e, M(i, 2), An) : r;
      }
      function bw(e) {
        return Va(e, Be);
      }
      function _w(e, i) {
        return Va(e, M(i, 2));
      }
      function Ew(e) {
        return e && e.length ? ns(e, Be, $n) : r;
      }
      function Iw(e, i) {
        return e && e.length ? ns(e, M(i, 2), $n) : r;
      }
      var Pw = ps(function(e, i) {
        return e * i;
      }, 1), Sw = Hn("round"), Ow = ps(function(e, i) {
        return e - i;
      }, 0);
      function Rw(e) {
        return e && e.length ? yn(e, Be) : 0;
      }
      function Aw(e, i) {
        return e && e.length ? yn(e, M(i, 2)) : 0;
      }
      return p.after = Jy, p.ary = yu, p.assign = jm, p.assignIn = Tu, p.assignInWith = Ss, p.assignWith = Um, p.at = Mm, p.before = mu, p.bind = to, p.bindAll = Bv, p.bindKey = vu, p.castArray = cm, p.chain = du, p.chunk = mg, p.compact = vg, p.concat = wg, p.cond = Vv, p.conforms = Kv, p.constant = co, p.countBy = Ry, p.create = Lm, p.curry = wu, p.curryRight = bu, p.debounce = _u, p.defaults = km, p.defaultsDeep = zm, p.defer = Yy, p.delay = Zy, p.difference = bg, p.differenceBy = _g, p.differenceWith = Eg, p.drop = Ig, p.dropRight = Pg, p.dropRightWhile = Sg, p.dropWhile = Og, p.fill = Rg, p.filter = Ny, p.flatMap = $y, p.flatMapDeep = xy, p.flatMapDepth = Dy, p.flatten = uu, p.flattenDeep = Ag, p.flattenDepth = Ng, p.flip = Xy, p.flow = Gv, p.flowRight = Qv, p.fromPairs = Tg, p.functions = Qm, p.functionsIn = Jm, p.groupBy = Fy, p.initial = $g, p.intersection = xg, p.intersectionBy = Dg, p.intersectionWith = Fg, p.invert = Zm, p.invertBy = Xm, p.invokeMap = jy, p.iteratee = uo, p.keyBy = Uy, p.keys = Re, p.keysIn = He, p.map = ws, p.mapKeys = tv, p.mapValues = rv, p.matches = Jv, p.matchesProperty = Yv, p.memoize = _s, p.merge = iv, p.mergeWith = Cu, p.method = Zv, p.methodOf = Xv, p.mixin = ho, p.negate = Es, p.nthArg = tw, p.omit = sv, p.omitBy = nv, p.once = em, p.orderBy = My, p.over = rw, p.overArgs = tm, p.overEvery = iw, p.overSome = sw, p.partial = ro, p.partialRight = Eu, p.partition = Ly, p.pick = ov, p.pickBy = $u, p.property = Mu, p.propertyOf = nw, p.pull = Mg, p.pullAll = lu, p.pullAllBy = Lg, p.pullAllWith = kg, p.pullAt = zg, p.range = ow, p.rangeRight = aw, p.rearg = rm, p.reject = Hy, p.remove = Hg, p.rest = im, p.reverse = Xn, p.sampleSize = Vy, p.set = cv, p.setWith = uv, p.shuffle = Ky, p.slice = Bg, p.sortBy = Qy, p.sortedUniq = Yg, p.sortedUniqBy = Zg, p.split = $v, p.spread = sm, p.tail = Xg, p.take = ey, p.takeRight = ty, p.takeRightWhile = ry, p.takeWhile = iy, p.tap = vy, p.throttle = nm, p.thru = vs, p.toArray = Ru, p.toPairs = xu, p.toPairsIn = Du, p.toPath = pw, p.toPlainObject = Nu, p.transform = hv, p.unary = om, p.union = sy, p.unionBy = ny, p.unionWith = oy, p.uniq = ay, p.uniqBy = cy, p.uniqWith = uy, p.unset = lv, p.unzip = eo, p.unzipWith = pu, p.update = pv, p.updateWith = dv, p.values = jr, p.valuesIn = fv, p.without = hy, p.words = ju, p.wrap = am, p.xor = ly, p.xorBy = py, p.xorWith = dy, p.zip = fy, p.zipObject = gy, p.zipObjectDeep = yy, p.zipWith = my, p.entries = xu, p.entriesIn = Du, p.extend = Tu, p.extendWith = Ss, ho(p, p), p.add = fw, p.attempt = Uu, p.camelCase = vv, p.capitalize = Fu, p.ceil = gw, p.clamp = gv, p.clone = um, p.cloneDeep = lm, p.cloneDeepWith = pm, p.cloneWith = hm, p.conformsTo = dm, p.deburr = qu, p.defaultTo = Wv, p.divide = yw, p.endsWith = wv, p.eq = vt, p.escape = bv, p.escapeRegExp = _v, p.every = Ay, p.find = Ty, p.findIndex = au, p.findKey = Hm, p.findLast = Cy, p.findLastIndex = cu, p.findLastKey = Bm, p.floor = mw, p.forEach = fu, p.forEachRight = gu, p.forIn = Vm, p.forInRight = Km, p.forOwn = Wm, p.forOwnRight = Gm, p.get = no, p.gt = fm, p.gte = gm, p.has = Ym, p.hasIn = oo, p.head = hu, p.identity = Be, p.includes = qy, p.indexOf = Cg, p.inRange = yv, p.invoke = ev, p.isArguments = dr, p.isArray = B, p.isArrayBuffer = ym, p.isArrayLike = ze, p.isArrayLikeObject = _e, p.isBoolean = mm, p.isBuffer = Xt, p.isDate = vm, p.isElement = wm, p.isEmpty = bm, p.isEqual = _m, p.isEqualWith = Em, p.isError = io, p.isFinite = Im, p.isFunction = Ut, p.isInteger = Iu, p.isLength = Is, p.isMap = Pu, p.isMatch = Pm, p.isMatchWith = Sm, p.isNaN = Om, p.isNative = Rm, p.isNil = Nm, p.isNull = Am, p.isNumber = Su, p.isObject = we, p.isObjectLike = be, p.isPlainObject = vi, p.isRegExp = so, p.isSafeInteger = Tm, p.isSet = Ou, p.isString = Ps, p.isSymbol = Ze, p.isTypedArray = qr, p.isUndefined = Cm, p.isWeakMap = $m, p.isWeakSet = xm, p.join = qg, p.kebabCase = Ev, p.last = ht, p.lastIndexOf = jg, p.lowerCase = Iv, p.lowerFirst = Pv, p.lt = Dm, p.lte = Fm, p.max = vw, p.maxBy = ww, p.mean = bw, p.meanBy = _w, p.min = Ew, p.minBy = Iw, p.stubArray = po, p.stubFalse = fo, p.stubObject = cw, p.stubString = uw, p.stubTrue = hw, p.multiply = Pw, p.nth = Ug, p.noConflict = ew, p.noop = lo, p.now = bs, p.pad = Sv, p.padEnd = Ov, p.padStart = Rv, p.parseInt = Av, p.random = mv, p.reduce = ky, p.reduceRight = zy, p.repeat = Nv, p.replace = Tv, p.result = av, p.round = Sw, p.runInContext = m, p.sample = By, p.size = Wy, p.snakeCase = Cv, p.some = Gy, p.sortedIndex = Vg, p.sortedIndexBy = Kg, p.sortedIndexOf = Wg, p.sortedLastIndex = Gg, p.sortedLastIndexBy = Qg, p.sortedLastIndexOf = Jg, p.startCase = xv, p.startsWith = Dv, p.subtract = Ow, p.sum = Rw, p.sumBy = Aw, p.template = Fv, p.times = lw, p.toFinite = Mt, p.toInteger = V, p.toLength = Au, p.toLower = qv, p.toNumber = lt, p.toSafeInteger = qm, p.toString = ie, p.toUpper = jv, p.trim = Uv, p.trimEnd = Mv, p.trimStart = Lv, p.truncate = kv, p.unescape = zv, p.uniqueId = dw, p.upperCase = Hv, p.upperFirst = ao, p.each = fu, p.eachRight = gu, p.first = hu, ho(p, function() {
        var e = {};
        return St(p, function(i, n) {
          ne.call(p.prototype, n) || (e[n] = i);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, nt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), nt(["drop", "take"], function(e, i) {
        Y.prototype[e] = function(n) {
          n = n === r ? 1 : Oe(V(n), 0);
          var c = this.__filtered__ && !i ? new Y(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = De(n, c.__takeCount__) : c.__views__.push({ size: De(n, xe), type: e + (c.__dir__ < 0 ? "Right" : "") }), c;
        }, Y.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), nt(["filter", "map", "takeWhile"], function(e, i) {
        var n = i + 1, c = n == E || n == K;
        Y.prototype[e] = function(h) {
          var d = this.clone();
          return d.__iteratees__.push({ iteratee: M(h, 3), type: n }), d.__filtered__ = d.__filtered__ || c, d;
        };
      }), nt(["head", "last"], function(e, i) {
        var n = "take" + (i ? "Right" : "");
        Y.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), nt(["initial", "tail"], function(e, i) {
        var n = "drop" + (i ? "" : "Right");
        Y.prototype[e] = function() {
          return this.__filtered__ ? new Y(this) : this[n](1);
        };
      }), Y.prototype.compact = function() {
        return this.filter(Be);
      }, Y.prototype.find = function(e) {
        return this.filter(e).head();
      }, Y.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Y.prototype.invokeMap = G(function(e, i) {
        return typeof e == "function" ? new Y(this) : this.map(function(n) {
          return pi(n, e, i);
        });
      }), Y.prototype.reject = function(e) {
        return this.filter(Es(M(e)));
      }, Y.prototype.slice = function(e, i) {
        e = V(e);
        var n = this;
        return n.__filtered__ && (e > 0 || i < 0) ? new Y(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), i !== r && (i = V(i), n = i < 0 ? n.dropRight(-i) : n.take(i - e)), n);
      }, Y.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Y.prototype.toArray = function() {
        return this.take(xe);
      }, St(Y.prototype, function(e, i) {
        var n = /^(?:filter|find|map|reject)|While$/.test(i), c = /^(?:head|last)$/.test(i), h = p[c ? "take" + (i == "last" ? "Right" : "") : i], d = c || /^find/.test(i);
        h && (p.prototype[i] = function() {
          var g = this.__wrapped__, y = c ? [1] : arguments, v = g instanceof Y, P = y[0], S = v || B(g), R = function(J) {
            var Z = h.apply(p, Kt([J], y));
            return c && x ? Z[0] : Z;
          };
          S && n && typeof P == "function" && P.length != 1 && (v = S = !1);
          var x = this.__chain__, q = !!this.__actions__.length, L = d && !x, W = v && !q;
          if (!d && S) {
            g = W ? g : new Y(this);
            var k = e.apply(g, y);
            return k.__actions__.push({ func: vs, args: [R], thisArg: r }), new at(k, x);
          }
          return L && W ? e.apply(this, y) : (k = this.thru(R), L ? c ? k.value()[0] : k.value() : k);
        });
      }), nt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var i = Bi[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var h = arguments;
          if (c && !this.__chain__) {
            var d = this.value();
            return i.apply(B(d) ? d : [], h);
          }
          return this[n](function(g) {
            return i.apply(B(g) ? g : [], h);
          });
        };
      }), St(Y.prototype, function(e, i) {
        var n = p[i];
        if (n) {
          var c = n.name + "";
          ne.call(Cr, c) || (Cr[c] = []), Cr[c].push({ name: i, func: n });
        }
      }), Cr[ls(r, Q).name] = [{ name: "wrapper", func: r }], Y.prototype.clone = kd, Y.prototype.reverse = zd, Y.prototype.value = Hd, p.prototype.at = wy, p.prototype.chain = by, p.prototype.commit = _y, p.prototype.next = Ey, p.prototype.plant = Py, p.prototype.reverse = Sy, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Oy, p.prototype.first = p.prototype.head, ni && (p.prototype[ni] = Iy), p;
    }, Ar = bd();
    nr ? ((nr.exports = Ar)._ = Ar, un._ = Ar) : Te._ = Ar;
  }).call(Si);
})(ko, ko.exports);
var JI = Object.defineProperty, YI = Object.defineProperties, ZI = Object.getOwnPropertyDescriptors, Kh = Object.getOwnPropertySymbols, XI = Object.prototype.hasOwnProperty, eP = Object.prototype.propertyIsEnumerable, Wh = (o, t, r) => t in o ? JI(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, As = (o, t) => {
  for (var r in t || (t = {}))
    XI.call(t, r) && Wh(o, r, t[r]);
  if (Kh)
    for (var r of Kh(t))
      eP.call(t, r) && Wh(o, r, t[r]);
  return o;
}, tP = (o, t) => YI(o, ZI(t));
function ir(o, t, r) {
  var s;
  const a = N1(o);
  return ((s = t.rpcMap) == null ? void 0 : s[a.reference]) || `${QI}?chainId=${a.namespace}:${a.reference}&projectId=${r}`;
}
function _r(o) {
  return o.includes(":") ? o.split(":")[1] : o;
}
function Ml(o) {
  return o.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function rP(o, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(o));
  if (!r.length)
    return [];
  const s = [];
  return r.forEach((a) => {
    const u = t.namespaces[a].accounts;
    s.push(...u);
  }), s;
}
function iP(o = {}, t = {}) {
  const r = Gh(o), s = Gh(t);
  return ko.exports.merge(r, s);
}
function Gh(o) {
  var t, r, s, a;
  const u = {};
  if (!zr(o))
    return u;
  for (const [l, f] of Object.entries(o)) {
    const w = ia(l) ? [l] : f.chains, _ = f.methods || [], N = f.events || [], O = f.rpcMap || {}, A = Oi(l);
    u[A] = tP(As(As({}, u[A]), f), { chains: vo(w, (t = u[A]) == null ? void 0 : t.chains), methods: vo(_, (r = u[A]) == null ? void 0 : r.methods), events: vo(N, (s = u[A]) == null ? void 0 : s.events), rpcMap: As(As({}, O), (a = u[A]) == null ? void 0 : a.rpcMap) });
  }
  return u;
}
function sP(o) {
  return o.includes(":") ? o.split(":")[2] : o;
}
function nP(o) {
  const t = {};
  for (const [r, s] of Object.entries(o)) {
    const a = s.methods || [], u = s.events || [], l = s.accounts || [], f = ia(r) ? [r] : s.chains ? s.chains : Ml(s.accounts);
    t[r] = { chains: f, methods: a, events: u, accounts: l };
  }
  return t;
}
function So(o) {
  return typeof o == "number" ? o : o.includes("0x") ? parseInt(o, 16) : o.includes(":") ? Number(o.split(":")[1]) : Number(o);
}
const Ll = {}, ge = (o) => Ll[o], Oo = (o, t) => {
  Ll[o] = t;
};
class oP {
  constructor(t) {
    this.name = "polkadot", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = _r(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class aP {
  constructor(t) {
    this.name = "eip155", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const s = r || ir(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = parseInt(_r(r));
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let a = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const u = parseInt(a, 16);
    if (this.isChainApproved(u))
      this.setDefaultChain(`${u}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: a }] }, chainId: (s = this.namespace.chains) == null ? void 0 : s[0] }), this.setDefaultChain(`${u}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${u}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class cP {
  constructor(t) {
    this.name = "solana", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = _r(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class uP {
  constructor(t) {
    this.name = "cosmos", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = _r(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class hP {
  constructor(t) {
    this.name = "cip34", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      const s = this.getCardanoRPCUrl(r), a = _r(r);
      t[a] = this.createHttpProvider(a, s);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r)
      return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class lP {
  constructor(t) {
    this.name = "elrond", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = _r(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class pP {
  constructor(t) {
    this.name = "multiversx", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = _r(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Ht(new sr(s, ge("disableProviderPing")));
  }
}
class dP {
  constructor(t) {
    this.name = "near", this.namespace = t.namespace, this.events = ge("events"), this.client = ge("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = r || ir(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(Bt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      t[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || ir(t, this.namespace);
    return typeof s > "u" ? void 0 : new Ht(new sr(s, ge("disableProviderPing")));
  }
}
var fP = Object.defineProperty, gP = Object.defineProperties, yP = Object.getOwnPropertyDescriptors, Qh = Object.getOwnPropertySymbols, mP = Object.prototype.hasOwnProperty, vP = Object.prototype.propertyIsEnumerable, Jh = (o, t, r) => t in o ? fP(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Ns = (o, t) => {
  for (var r in t || (t = {}))
    mP.call(t, r) && Jh(o, r, t[r]);
  if (Qh)
    for (var r of Qh(t))
      vP.call(t, r) && Jh(o, r, t[r]);
  return o;
}, Ro = (o, t) => gP(o, yP(t));
class ca {
  constructor(t) {
    this.events = new Bo(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Us(Ms({ level: (t == null ? void 0 : t.logger) || Bh })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1;
  }
  static async init(t) {
    const r = new ca(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, a] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: Ns({}, t), chainId: `${s}:${a}`, topic: this.session.topic });
  }
  sendAsync(t, r, s) {
    const a = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, s).then((u) => r(null, Ls(a, u))).catch((u) => r(u, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Ie("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing)
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: a } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      s && (this.uri = s, this.events.emit("display_uri", s)), await a().then((u) => {
        this.session = u, this.namespaces || (this.namespaces = nP(u.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((u) => {
        if (u.message !== jl)
          throw u;
        r++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session)
        return;
      const [s, a] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(a, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message))
        throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (yr(r)) {
      for (const s of r)
        t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const t = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await DI.init({ logger: this.providerOpts.logger || Bh, relayUrl: this.providerOpts.relayUrl || KI, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((r) => Oi(r)))];
    Oo("client", this.client), Oo("events", this.events), Oo("disableProviderPing", this.disableProviderPing), t.forEach((r) => {
      if (!this.session)
        return;
      const s = rP(r, this.session), a = Ml(s), u = iP(this.namespaces, this.optionalNamespaces), l = Ro(Ns({}, u[r]), { accounts: s, chains: a });
      switch (r) {
        case "eip155":
          this.rpcProviders[r] = new aP({ namespace: l });
          break;
        case "solana":
          this.rpcProviders[r] = new cP({ namespace: l });
          break;
        case "cosmos":
          this.rpcProviders[r] = new uP({ namespace: l });
          break;
        case "polkadot":
          this.rpcProviders[r] = new oP({ namespace: l });
          break;
        case "cip34":
          this.rpcProviders[r] = new hP({ namespace: l });
          break;
        case "elrond":
          this.rpcProviders[r] = new lP({ namespace: l });
          break;
        case "multiversx":
          this.rpcProviders[r] = new pP({ namespace: l });
          break;
        case "near":
          this.rpcProviders[r] = new dP({ namespace: l });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      if (s.name === "accountsChanged") {
        const a = s.data;
        a && yr(a) && this.events.emit("accountsChanged", a.map(sP));
      } else if (s.name === "chainChanged") {
        const a = r.chainId, u = r.event.data, l = Oi(a), f = So(a) !== So(u) ? `${l}:${So(u)}` : a;
        this.onChainChanged(f);
      } else
        this.events.emit(s.name, s.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: r }) => {
      var s;
      const { namespaces: a } = r, u = (s = this.client) == null ? void 0 : s.session.get(t);
      this.session = Ro(Ns({}, u), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: r });
    }), this.client.on("session_delete", async (t) => {
      await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Ro(Ns({}, Ie("USER_DISCONNECTED")), { data: t.topic }));
    }), this.on(Bt.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, !0);
    });
  }
  getProvider(t) {
    if (!this.rpcProviders[t])
      throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = a, this.persist("namespaces", r), this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [r, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [r, s];
    if (r && !Object.keys(this.namespaces || {}).map((l) => Oi(l)).includes(r))
      throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
    if (r && s)
      return [r, s];
    const a = Oi(Object.keys(this.namespaces)[0]), u = this.rpcProviders[a].getDefaultChain();
    return [a, u];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces)
      return;
    const [a, u] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(u), ((s = this.namespaces[a]) != null ? s : this.namespaces[`${a}:${u}`]).defaultChain = u, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", u);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Vh}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Vh}/${t}`);
  }
}
const wP = ca, bP = "wc", _P = "ethereum_provider", EP = `${bP}@2:${_P}:`, IP = "https://rpc.walletconnect.com/v1/", zo = ["eth_sendTransaction", "personal_sign"], PP = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], Ho = ["chainChanged", "accountsChanged"], SP = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var OP = Object.defineProperty, RP = Object.defineProperties, AP = Object.getOwnPropertyDescriptors, Yh = Object.getOwnPropertySymbols, NP = Object.prototype.hasOwnProperty, TP = Object.prototype.propertyIsEnumerable, Zh = (o, t, r) => t in o ? OP(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, Ai = (o, t) => {
  for (var r in t || (t = {}))
    NP.call(t, r) && Zh(o, r, t[r]);
  if (Yh)
    for (var r of Yh(t))
      TP.call(t, r) && Zh(o, r, t[r]);
  return o;
}, Xh = (o, t) => RP(o, AP(t));
function qs(o) {
  return Number(o[0].split(":")[1]);
}
function Ao(o) {
  return `0x${o.toString(16)}`;
}
function CP(o) {
  const { chains: t, optionalChains: r, methods: s, optionalMethods: a, events: u, optionalEvents: l, rpcMap: f } = o;
  if (!No(t))
    throw new Error("Invalid chains");
  const w = { chains: t, methods: s || zo, events: u || Ho, rpcMap: Ai({}, t.length ? { [qs(t)]: f[qs(t)] } : {}) }, _ = u == null ? void 0 : u.filter((j) => !Ho.includes(j)), N = s == null ? void 0 : s.filter((j) => !zo.includes(j));
  if (!r && !l && !a && !(_ != null && _.length) && !(N != null && N.length))
    return { required: t.length ? w : void 0 };
  const O = (_ == null ? void 0 : _.length) && (N == null ? void 0 : N.length) || !r, A = { chains: [...new Set(O ? w.chains.concat(r || []) : r)], methods: [...new Set(w.methods.concat(a != null && a.length ? a : PP))], events: [...new Set(w.events.concat(l != null && l.length ? l : SP))], rpcMap: f };
  return { required: t.length ? w : void 0, optional: r.length ? A : void 0 };
}
class ua {
  constructor() {
    this.events = new It.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = EP, this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const r = new ua();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: s } = CP(this.rpc);
    try {
      const a = await new Promise(async (l, f) => {
        var w;
        this.rpc.showQrModal && ((w = this.modal) == null || w.subscribeModal((_) => {
          !_.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(Xh(Ai({ namespaces: Ai({}, r && { [this.namespace]: r }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((_) => {
          l(_);
        }).catch((_) => {
          f(new Error(_.message));
        });
      });
      if (!a)
        return;
      const u = s0(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : u), this.setAccounts(u), this.events.emit("connect", { chainId: Ao(this.chainId) });
    } catch (a) {
      throw this.signer.logger.error(a), a;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const r = parseInt(t);
      this.chainId = r, this.events.emit("chainChanged", Ao(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Xh(Ai({}, o0("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var r, s;
      this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (s = this.modal) == null || s.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", Ao(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, a] = t.split(":");
    return { chainId: `${r}:${s}`, address: a };
  }
  setAccounts(t) {
    this.accounts = t.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [], u = (s = t == null ? void 0 : t.optionalChains) != null ? s : [], l = a.concat(u);
    if (!l.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const f = a.length ? (t == null ? void 0 : t.methods) || zo : [], w = a.length ? (t == null ? void 0 : t.events) || Ho : [], _ = (t == null ? void 0 : t.optionalMethods) || [], N = (t == null ? void 0 : t.optionalEvents) || [], O = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(l, t.projectId), A = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: a == null ? void 0 : a.map((j) => this.formatChainId(j)), optionalChains: u.map((j) => this.formatChainId(j)), methods: f, events: w, optionalMethods: _, optionalEvents: N, rpcMap: O, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: A, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, r) {
    const s = {};
    return t.forEach((a) => {
      s[a] = this.getRpcUrl(a, r);
    }), s;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? qs(this.rpc.chains) : qs(this.rpc.optionalChains), this.signer = await wP.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const { WalletConnectModal: s } = await import("./index-BDHMKkfb.mjs").then((a) => a.i);
        r = s;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (r)
        try {
          this.modal = new r(Ai({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (s) {
          throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: r, optionalChains: s, rpcMap: a } = t;
    r && No(r) && (this.rpc.chains = r.map((u) => this.formatChainId(u)), r.forEach((u) => {
      this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
    })), s && No(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map((u) => this.formatChainId(u)), s.forEach((u) => {
      this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
    }));
  }
  getRpcUrl(t, r) {
    var s;
    return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${IP}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((r) => this.parseAccount(r));
  }
}
const JP = ua;
export {
  JP as EthereumProvider,
  SP as OPTIONAL_EVENTS,
  PP as OPTIONAL_METHODS,
  Ho as REQUIRED_EVENTS,
  zo as REQUIRED_METHODS,
  ua as default
};
