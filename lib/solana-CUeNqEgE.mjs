import { g as xt, a2 as x, a3 as $, a4 as gt, a5 as ut, m as P, a6 as Ct, a7 as Et } from "./index-DV1w5RNX.mjs";
import { W as Ot, C as It, a as Nt, B as q } from "./constants-Ds9NM_7b.mjs";
import { a as Zt, g as bt } from "./wallets-BrkMAo24.mjs";
var zt = { exports: {} };
(function(a) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (t = !1));
  function n(u, M, o) {
    this.fn = u, this.context = M, this.once = o || !1;
  }
  function s(u, M, o, I, m) {
    if (typeof o != "function")
      throw new TypeError("The listener must be a function");
    var L = new n(o, I || u, m), h = t ? t + M : M;
    return u._events[h] ? u._events[h].fn ? u._events[h] = [u._events[h], L] : u._events[h].push(L) : (u._events[h] = L, u._eventsCount++), u;
  }
  function D(u, M) {
    --u._eventsCount === 0 ? u._events = new i() : delete u._events[M];
  }
  function c() {
    this._events = new i(), this._eventsCount = 0;
  }
  c.prototype.eventNames = function() {
    var M = [], o, I;
    if (this._eventsCount === 0)
      return M;
    for (I in o = this._events)
      e.call(o, I) && M.push(t ? I.slice(1) : I);
    return Object.getOwnPropertySymbols ? M.concat(Object.getOwnPropertySymbols(o)) : M;
  }, c.prototype.listeners = function(M) {
    var o = t ? t + M : M, I = this._events[o];
    if (!I)
      return [];
    if (I.fn)
      return [I.fn];
    for (var m = 0, L = I.length, h = new Array(L); m < L; m++)
      h[m] = I[m].fn;
    return h;
  }, c.prototype.listenerCount = function(M) {
    var o = t ? t + M : M, I = this._events[o];
    return I ? I.fn ? 1 : I.length : 0;
  }, c.prototype.emit = function(M, o, I, m, L, h) {
    var p = t ? t + M : M;
    if (!this._events[p])
      return !1;
    var l = this._events[p], C = arguments.length, b, y;
    if (l.fn) {
      switch (l.once && this.removeListener(M, l.fn, void 0, !0), C) {
        case 1:
          return l.fn.call(l.context), !0;
        case 2:
          return l.fn.call(l.context, o), !0;
        case 3:
          return l.fn.call(l.context, o, I), !0;
        case 4:
          return l.fn.call(l.context, o, I, m), !0;
        case 5:
          return l.fn.call(l.context, o, I, m, L), !0;
        case 6:
          return l.fn.call(l.context, o, I, m, L, h), !0;
      }
      for (y = 1, b = new Array(C - 1); y < C; y++)
        b[y - 1] = arguments[y];
      l.fn.apply(l.context, b);
    } else {
      var pt = l.length, v;
      for (y = 0; y < pt; y++)
        switch (l[y].once && this.removeListener(M, l[y].fn, void 0, !0), C) {
          case 1:
            l[y].fn.call(l[y].context);
            break;
          case 2:
            l[y].fn.call(l[y].context, o);
            break;
          case 3:
            l[y].fn.call(l[y].context, o, I);
            break;
          case 4:
            l[y].fn.call(l[y].context, o, I, m);
            break;
          default:
            if (!b)
              for (v = 1, b = new Array(C - 1); v < C; v++)
                b[v - 1] = arguments[v];
            l[y].fn.apply(l[y].context, b);
        }
    }
    return !0;
  }, c.prototype.on = function(M, o, I) {
    return s(this, M, o, I, !1);
  }, c.prototype.once = function(M, o, I) {
    return s(this, M, o, I, !0);
  }, c.prototype.removeListener = function(M, o, I, m) {
    var L = t ? t + M : M;
    if (!this._events[L])
      return this;
    if (!o)
      return D(this, L), this;
    var h = this._events[L];
    if (h.fn)
      h.fn === o && (!m || h.once) && (!I || h.context === I) && D(this, L);
    else {
      for (var p = 0, l = [], C = h.length; p < C; p++)
        (h[p].fn !== o || m && !h[p].once || I && h[p].context !== I) && l.push(h[p]);
      l.length ? this._events[L] = l.length === 1 ? l[0] : l : D(this, L);
    }
    return this;
  }, c.prototype.removeAllListeners = function(M) {
    var o;
    return M ? (o = t ? t + M : M, this._events[o] && D(this, o)) : (this._events = new i(), this._eventsCount = 0), this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = t, c.EventEmitter = c, a.exports = c;
})(zt);
var Yt = zt.exports;
const Qt = /* @__PURE__ */ xt(Yt);
class z extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(e, t) {
    super(e), this.error = t;
  }
}
class Z extends z {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class Lt extends z {
  constructor() {
    super(...arguments), this.name = "WalletLoadError";
  }
}
class _ extends z {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
class nt extends z {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class ot extends z {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class X extends z {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class S extends z {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class G extends z {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class w extends z {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class Q extends z {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class j extends z {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
class R extends z {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Dt extends z {
  constructor() {
    super(...arguments), this.name = "WalletSignInError";
  }
}
class Wt extends z {
  constructor() {
    super(...arguments), this.name = "WalletWindowClosedError";
  }
}
var g;
(function(a) {
  a.Installed = "Installed", a.NotDetected = "NotDetected", a.Loadable = "Loadable", a.Unsupported = "Unsupported";
})(g || (g = {}));
class mt extends Qt {
  get connected() {
    return !!this.publicKey;
  }
  async autoConnect() {
    await this.connect();
  }
  async prepareTransaction(e, t, i = {}) {
    const n = this.publicKey;
    if (!n)
      throw new w();
    return e.feePayer = e.feePayer || n, e.recentBlockhash = e.recentBlockhash || (await t.getLatestBlockhash({
      commitment: i.preflightCommitment,
      minContextSlot: i.minContextSlot
    })).blockhash, e;
  }
}
function K(a) {
  if (typeof window > "u" || typeof document > "u")
    return;
  const e = [];
  function t() {
    if (a())
      for (const s of e)
        s();
  }
  const i = (
    // TODO: #334 Replace with idle callback strategy.
    setInterval(t, 1e3)
  );
  e.push(() => clearInterval(i)), // Implies that `DOMContentLoaded` has not yet fired.
  document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", t, { once: !0 }), e.push(() => document.removeEventListener("DOMContentLoaded", t))), // If the `complete` state has been reached, we're too late.
  document.readyState !== "complete" && (window.addEventListener("load", t, { once: !0 }), e.push(() => window.removeEventListener("load", t))), t();
}
function W(a) {
  return "version" in a;
}
class lt extends mt {
  async sendTransaction(e, t, i = {}) {
    let n = !0;
    try {
      if (W(e)) {
        if (!this.supportedTransactionVersions)
          throw new Q("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(e.version))
          throw new Q(`Sending transaction version ${e.version} isn't supported by this wallet`);
        try {
          e = await this.signTransaction(e);
          const s = e.serialize();
          return await t.sendRawTransaction(s, i);
        } catch (s) {
          throw s instanceof j ? (n = !1, s) : new Q(s == null ? void 0 : s.message, s);
        }
      } else
        try {
          const { signers: s, ...D } = i;
          e = await this.prepareTransaction(e, t, D), s != null && s.length && e.partialSign(...s), e = await this.signTransaction(e);
          const c = e.serialize();
          return await t.sendRawTransaction(c, D);
        } catch (s) {
          throw s instanceof j ? (n = !1, s) : new Q(s == null ? void 0 : s.message, s);
        }
    } catch (s) {
      throw n && this.emit("error", s), s;
    }
  }
  async signAllTransactions(e) {
    for (const i of e)
      if (W(i)) {
        if (!this.supportedTransactionVersions)
          throw new j("Signing versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(i.version))
          throw new j(`Signing transaction version ${i.version} isn't supported by this wallet`);
      }
    const t = [];
    for (const i of e)
      t.push(await this.signTransaction(i));
    return t;
  }
}
class F extends lt {
}
const O = "solana:signAndSendTransaction", st = "solana:signIn", V = "solana:signMessage", A = "solana:signTransaction", ft = "standard:connect", wt = "standard:disconnect", St = "standard:events";
function Ut(a) {
  return ft in a.features && St in a.features && (O in a.features || A in a.features);
}
var J;
(function(a) {
  a.Mainnet = "mainnet-beta", a.Testnet = "testnet", a.Devnet = "devnet";
})(J || (J = {}));
const kt = "Bitget";
class Gt extends F {
  constructor(e = {}) {
    super(), this.name = kt, this.url = "https://web3.bitget.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxmaWx0ZXIgaWQ9ImEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBoZWlnaHQ9IjQ1MS40MzEiIHdpZHRoPSI1NjkuNTU4IiB4PSItOTAuMjQxMSIgeT0iLTY5LjczNjkiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiBtb2RlPSJub3JtYWwiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIgc3RkRGV2aWF0aW9uPSI0OS4yMzA4Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0iYiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGhlaWdodD0iMzcxLjUwNyIgd2lkdGg9IjM1MS41OTYiIHg9Ii0xNjAuNTExIiB5PSItMTY1Ljk4NyI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIG1vZGU9Im5vcm1hbCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjAzNV8xMTA2IiBzdGREZXZpYXRpb249IjQ5LjIzMDgiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJjIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaGVpZ2h0PSI0MjQuNDUyIiB3aWR0aD0iNDQ0Ljg1MSIgeD0iLTI0MS4wNzgiIHk9IjY3LjY0MiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIG1vZGU9Im5vcm1hbCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjAzNV8xMTA2IiBzdGREZXZpYXRpb249IjQ5LjIzMDgiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJkIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaGVpZ2h0PSIzODUuMTA1IiB3aWR0aD0iNDMwLjE5MSIgeD0iLTIwLjM5NjgiIHk9Ii0yNDIuNzU4Ij48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgbW9kZT0ibm9ybWFsIiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIvPjwvZmlsdGVyPjxjbGlwUGF0aCBpZD0iZSI+PHBhdGggZD0ibTAgMGgyNTZ2MjU2aC0yNTZ6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjZSkiPjxwYXRoIGQ9Im0wIDBoMjU2djI1NmgtMjU2eiIgZmlsbD0iIzU0ZmZmNSIvPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTEzLjQ4MDYgMTk4LjYwNWMtNDIuODA4MiAxMjAuNDM4IDE4Ni4xODA0IDg2LjQyMiAzMDYuMDI2NCA1NC4zNTkgMTIyLjY1OC00MC43MDUgMzcuODc5LTIyMC4xMzcxLTUwLjA5Mi0yMjQuMTA4Mi04Ny45NzItMy45NzExIDEwLjkwNyA4Mi45NjgyLTYzLjgyIDEwNy44MDAyLTc0LjcyNyAyNC44MzEtMTM4LjYwNDMtODguNTk3Ny0xOTIuMTE0NCA2MS45NDl6IiBmaWxsPSIjZmZmIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNiKSI+PHBhdGggZD0ibTg1LjUxMTgtNDUuODIyNWMtMjIuNDU1Ni02MS4zNTM1LTEwMi40MzA3IDIxLjgyNzItMTM5LjYxMTMgNzEuMDg2OC0zNS40NjU3IDUzLjU4MzYgNTcuMTA4ODcgOTkuODg3NyA5My40MjAzIDc0Ljc3MjcgMzYuMzExNS0yNS4xMTQzLTMxLjU0NjMyLTMwLjAwMDctOS45NS02Mi42NTg1IDIxLjU5NjMtMzIuNjU3NzQgODQuMjEwMi02LjUwOSA1Ni4xNDEtODMuMjAxeiIgZmlsbD0iIzAwZmZmMCIgZmlsbC1vcGFjaXR5PSIuNjciLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2MpIj48cGF0aCBkPSJtOTYuNDc5NiAyMjUuNDI0Yy0zMC42Mjk0LTEwMy4wNjEtMTYyLjU2MTQtNDguNzg3LTIyNC42OTg2LTguNzY3LTU5Ljc3MSA0Ny4zODUgODIuMTQ3OSAxODMuNjkxIDE0MS4wOTE1IDE3Ni43MTkgNTguOTQzNi02Ljk3My00Ny4yODQzLTY2LjMxMS0xMC44ODU0OC05NS4yMDYgMzYuMzk4NzgtMjguODk0IDEzMi43Nzg5OCA1Ni4wNzkgOTQuNDkyNTgtNzIuNzQ2eiIgZmlsbD0iIzlkODFmZiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZCkiPjxwYXRoIGQ9Im0yODIuMTItMTA3LjM1M2MtNjYuMDczLTc4LjY3OC0xNjAuNjU3LTEzLjYxNy0xOTkuNjkwNCAyOC43NDgzLTM0LjE1NTcgNDcuOTYwMSAxNDEuODQ1NCAxMzUuODM1OSAxOTAuNjkxNCAxMjAuNzc2MSA0OC44NDctMTUuMDU5OS02Ni42MDktNDYuMjIxNzgtNDUuODI0LTc1LjQ1OTMgMjAuNzg1LTI5LjIzNzYgMTM3LjQxNSAyNC4yODIyNCA1NC44MjMtNzQuMDY1MXoiIGZpbGw9IiM0ZDk0ZmYiLz48L2c+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOTMuMTg5IDE1Mi44MzZoNDMuNDg1bC00OS40NjU0LTQ5Ljc4NSA1MC4xMDE0LTQ5Ljc4NDcgMTMuNjQ1LTEzLjI2NjNoLTQ1LjEzNmwtNTcuNDgzMSA1Ny43NzczYy0yLjkwMSAyLjkxMTctMi44ODYxIDcuNjI0Ny4wMjk3IDEwLjUyMTd6bTI2LjE0MS00OS42NjhoLS4zMzVsLjMzMS0uMDA0em0wIDAgNDkuNDYxIDQ5Ljc4MS01MC4xMDEgNDkuNzg1LTEzLjY0NSAxMy4yNjZoNDUuMTM1bDU3LjQ4NC01Ny43NzRjMi45MDEtMi45MTIgMi44ODYtNy42MjQtLjAzLTEwLjUyMWwtNDQuODIzLTQ0LjUzN3oiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48L3N2Zz4=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== g.Unsupported && K(() => {
      var t, i;
      return (i = (t = window.bitkeep) == null ? void 0 : t.solana) != null && i.isBitKeep ? (this._readyState = g.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Installed)
        throw new Z();
      this._connecting = !0;
      const e = window.bitkeep.solana;
      let t;
      try {
        t = await e.getAccount();
      } catch (n) {
        throw new S(n == null ? void 0 : n.message, n);
      }
      let i;
      try {
        i = new x(t);
      } catch (n) {
        throw new G(n == null ? void 0 : n.message, n);
      }
      this._wallet = e, this._publicKey = i, this.emit("connect", i);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new X(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signAllTransactions(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        const { signature: i } = await t.signMessage(e);
        return i;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const _t = "Clover";
class vt extends F {
  constructor(e = {}) {
    super(), this.name = _t, this.url = "https://clv.org", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjQ4IDBIMTEuNTJDNS4xNTc2OCAwIDAgNS4xNTc2OCAwIDExLjUyVjM2LjQ4QzAgNDIuODQyMyA1LjE1NzY4IDQ4IDExLjUyIDQ4SDM2LjQ4QzQyLjg0MjMgNDggNDggNDIuODQyMyA0OCAzNi40OFYxMS41MkM0OCA1LjE1NzY4IDQyLjg0MjMgMCAzNi40OCAwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc5MTBfMTYzMzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjAwMDYgMzkuMzYwNkMzMi40ODM3IDM5LjM2MDYgMzkuMzYwNiAzMi40ODM3IDM5LjM2MDYgMjQuMDAwNkMzOS4zNjA2IDE1LjUxNzUgMzIuNDgzNyA4LjY0MDYyIDI0LjAwMDYgOC42NDA2MkMxNS41MTc1IDguNjQwNjIgOC42NDA2MiAxNS41MTc1IDguNjQwNjIgMjQuMDAwNkM4LjY0MDYyIDMyLjQ4MzcgMTUuNTE3NSAzOS4zNjA2IDI0LjAwMDYgMzkuMzYwNlpNMjEuMjg5OSAxNS44Njg4SDI2LjcxMVYyMS4zNDdIMjEuMjkwNFYyNi42NTRIMjYuNzExVjMyLjEzMjJIMjEuMjg5OVYyNi44MjUySDE1Ljg2OTNWMjEuMzQ3SDIxLjI4OTlWMTUuODY4OFpNMjYuNzEyIDIxLjM0N0gzMi4xMzMxVjI2LjgyNTJIMjYuNzEyVjIxLjM0N1oiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNzkxMF8xNjMzNTEiIHgxPSI0OCIgeTE9Ii0xLjQzMDUxZS0wNiIgeDI9IjEuNDMwNTFlLTA2IiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0E5RkZFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NkQ1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== g.Unsupported && K(() => {
      var t;
      return (t = window.clover_solana) != null && t.isCloverWallet ? (this._readyState = g.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Installed)
        throw new Z();
      this._connecting = !0;
      const e = window.clover_solana;
      let t;
      try {
        t = await e.getAccount();
      } catch (n) {
        throw new S(n == null ? void 0 : n.message, n);
      }
      let i;
      try {
        i = new x(t);
      } catch (n) {
        throw new G(n == null ? void 0 : n.message, n);
      }
      this._wallet = e, this._publicKey = i, this.emit("connect", i);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    this._wallet && (this._wallet = null, this._publicKey = null), this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signAllTransactions(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        const { signature: i } = await t.signMessage(e);
        return Uint8Array.from(i);
      } catch (i) {
        throw new R(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const Pt = "Coin98";
class Vt extends F {
  constructor(e = {}) {
    super(), this.name = Pt, this.url = "https://coin98.com", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== g.Unsupported && K(() => {
      var t;
      return (t = window.coin98) != null && t.sol ? (this._readyState = g.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.isConnected());
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Installed)
        throw new Z();
      this._connecting = !0;
      const e = window.coin98.sol;
      let t;
      try {
        t = (await e.connect())[0];
      } catch (n) {
        throw new S(n == null ? void 0 : n.message, n);
      }
      let i;
      try {
        i = new x(t);
      } catch (n) {
        throw new G(n == null ? void 0 : n.message, n);
      }
      this._wallet = e, this._publicKey = i, this.emit("connect", i);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new X(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        const i = await t.request({ method: "sol_sign", params: [e] }), n = new x(i.publicKey), s = $.decode(i.signature);
        return e.addSignature(n, s), e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        const i = await t.request({ method: "sol_signAllTransactions", params: [e] }), n = new x(i.publicKey), s = i.signatures;
        return e.map((D, c) => {
          const u = $.decode(s[c]);
          return D.addSignature(n, u), D;
        });
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        const i = await t.request({ method: "sol_signMessage", params: [e] });
        return $.decode(i.signature);
      } catch (i) {
        throw new R(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const Bt = "Nightly";
class Ht extends F {
  constructor() {
    super(), this.name = Bt, this.url = "https://nightly.app", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.NotDetected, this._connecting = !1, this._publicKey = null, this._wallet = null, this._readyState !== g.Unsupported && K(() => {
      var e;
      return (e = window == null ? void 0 : window.nightly) != null && e.solana ? (this._readyState = g.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  get publicKey() {
    return this._publicKey;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Installed)
        throw new Z();
      this._connecting = !0;
      const e = window.nightly.solana;
      try {
        await e.connect();
      } catch (i) {
        throw new nt(i == null ? void 0 : i.message, i);
      }
      if (e.publicKey.toString() === "11111111111111111111111111111111")
        throw new S();
      let t;
      try {
        t = new x(e.publicKey.toBytes());
      } catch (i) {
        throw new G(i == null ? void 0 : i.message, i);
      }
      this._wallet = e, this._publicKey = t, this.emit("connect", t);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch {
        this.emit("error", new ot());
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e);
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signAllTransactions(e);
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return t.signMessage(new TextDecoder().decode(e));
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const ht = "solana:mainnet", Jt = "solana:devnet", Xt = "solana:testnet", Rt = "solana:localnet", Kt = "Solong";
class Ft extends lt {
  constructor(e = {}) {
    super(), this.name = Kt, this.url = "https://solongwallet.io", this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAGlklEQVR4Ae3bA5DsyhfH8TNr49r2/du2bdu2bdu2zcdNrm3b9toz533rvctUn3Umk9p01WfdvVW/6nROBxJVS1rSkpa0pCUtaUlLWtKSpl4VXos3GJ4sujQFuUKfWl+qT730arzB8Ex9YksKcgXjFOCVeIPhBYydB8mawQ+yiGC8n0EN6zAVcgXhpQjoq1DDdsyDAAB9Pwo1HMC9INk0FIM8Bt1Qh9WohQQCvD+BtEMdtmC8I7y5aIE67MV0SBwDvB3qsE/UHwMJIpC/QB1OYiLEEeCPoQ7nMRcSwwDrao3Zl8aTIEGEUYlL0IAMXuQOr66UvsegDm+ExDJAPNiafSg0AlyIbmjAWX1aQzEkiH6T0QkNaEdpnAN8NNRhPcSF9e9el2ebBhyAuNBvGtLQgIuQOAd4D6jDMRQbM3AmOqEBDfq0xjJIEP3GohkakEFVjAP0y401sAsLnAE+pb6EsC5AA9J4sHsG+kX0PQR1eFJ8AwTWQh0+DjFm4a1Qh2/AOoz/BHX4ZdwD/CDU4aioX2GUMW+AOnB2bqiBBDHe86EOTYw5GRKJwQ/ijUM91OGTxgysxSmowzeNw7j08m5DHX4l7Igg2TY0g9hbLBZ+f7oxC98CdWjDvYzD+MVQh07GfEQsZyDgVWA71OGvorfnQQCAcqaYUFZDHW6j/itAoB70GcergzqsEa0rhGTTEA7mP0koK4xdyeOMmvBBhJU2zsjPMw7lu9O3zShpXheHk4hhcZ4w26AOG4RSxDiUfwZ12KdPqy+FBDHeV6EOZxizIg6HsMGbiQ5jdjzBXRfeefGg3tgbv9BYC0fhZE7sjUMY9Pf9rdcI5XtQh39BjBA/C3VYnM0zcgiDek+GOhzh93mQoMs7kIxze/eMhnxIEOPNM9bcFtTEeAb6I419axu/m2CsgxU4Aw1A/UxIUM/bO/9+cVkDDd5x42x8N1iH8Taow0NhHcZLoQ5Pi/MMzDMW+DTu7g6vIY9AdkAdHmaUMyn6roA6PD22AeLB6DbWplHG7LubfY+kfiIkiH5T0AJ1uFtMA1xUzOc1UIclzvCeXF+o7DygDlvds29RgVVzYj+K4xhgEX4NdcjgecE++rSL+ZdLmIxRB77Ose7l4XPIQB3eF8M60C/n8++ghltE/QLIFfqUiyUE8kOoYSW7jmLIFXeN4X0NaajDDlG/NG6XswrxKdxu+G/weh27j3wCej9uN9zEOjc3sObl4S243XBLhDfWE0mAMQjwZfhxDng7pG/8Sj4/ER/Gd/BdfBhPRGW2A/wxNAfcBOnFCHwZZ6GGs/gqapMAb/QEnIT20Uk8IQkQeB7aof3UihcM9wDvhyboANHXv1+IdWBOB2hsIftto+iSPEif8aGPcjrA50GHyPMiOIT9B/N5apaMgQT8D2poxMdwt8s+hkao4X9ZDxBTIdHwy/h8AeqQxhMhAU9BB9ThPMqHTYCYjU6owy3uPstSfL4Z6uZPC+Mk8gOomz8DEg3vXshAHb4MMXwZarhXGDPwa739w2j48623BPAniOFPUMPsMAL8INTw9AgDrLZOCmjFPEjA3WD1aUJVGAG+CGr4ECRCy6GGg3iyaF0+n/PwFByEGpaJ+qkw1sB7QA3/hUTozdBetFymvXhTWGVMOc7bp36/FhKRamNW9dcxZmpZiI+32ad+vAQSoWejGzpAXXh22Fek3wY1rDD2kVnijR3ExYQMPgkJOUB/nFW0Is3vnw6JhlHX9a4N70Iq/ACBv0MNu7J9WxHw7jaA2deFOtw32zeVHtHLWvMN0dtSkOzwS3spYy7iH1hx2d/wYdyTvnkR3BdeQjjerVBDN14JyZIfQWH5RC7e1rw32npZV54LCc+SPD5/HgqYD3WW5+gTqt6X+rA4v0701hRkKF0+bL+HTM9Hgv/MHH60wyvHWigsafwA1ZAhMguLoL34kbDcQEI1uAH8mcbuxPHImf8i5EMGxqvER9EI7cUqVMTl0Y6HoxHaBzvxNkyC9EEe7oEv4Sy0D/YQ+IS4ver1JNT38z7sWnwbb8TT8Cg8Gs/Gu/Ar7EEXtI/2ud7Ni0GAYCbiJDQiazA57k9nTcdqaJb9UtSvitXbmjavCJ9AMzRkJ/B80boUJBLhDe7Nw1/QCR1i9fgKRg6HByzvjZ/hInQQMjiCT2PSMHxC1a/l8wvwGxyG9kEaW/EtPI4xiiE5JcLrd6PxcLwM78SH8EG8Fc/H/UUXVUByGh8SSYBJgEmASYCJJMAkwBi6A3xCqZhiBz8+AAAAAElFTkSuQmCC", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== g.Unsupported && K(() => window.solong ? (this._readyState = g.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.currentAccount);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Installed)
        throw new Z();
      this._connecting = !0;
      const e = window.solong;
      let t;
      try {
        t = await e.selectAccount();
      } catch (n) {
        throw new S(n == null ? void 0 : n.message, n);
      }
      let i;
      try {
        i = new x(t);
      } catch (n) {
        throw new G(n == null ? void 0 : n.message, n);
      }
      this._wallet = e, this._publicKey = i, this.emit("connect", i);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    this._wallet && (this._wallet = null, this._publicKey = null), this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const qt = "Torus";
class $t extends F {
  constructor({ params: e = { showTorusButton: !1 } } = { params: { showTorusButton: !1 } }) {
    super(), this.name = qt, this.url = "https://tor.us", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? g.Unsupported : g.Loadable, this._connecting = !1, this._wallet = null, this._publicKey = null, this._params = e;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.isLoggedIn);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Loadable)
        throw new Z();
      this._connecting = !0;
      let e;
      try {
        e = (await import("./solanaEmbed.esm-DBS05fJl.mjs")).default;
      } catch (s) {
        throw new Lt(s == null ? void 0 : s.message, s);
      }
      let t;
      try {
        t = window.torus || new e();
      } catch (s) {
        throw new _(s == null ? void 0 : s.message, s);
      }
      if (!t.isInitialized)
        try {
          await t.init(this._params);
        } catch (s) {
          throw new nt(s == null ? void 0 : s.message, s);
        }
      let i;
      try {
        i = await t.login();
      } catch (s) {
        throw new S(s == null ? void 0 : s.message, s);
      }
      let n;
      try {
        n = new x(i[0]);
      } catch (s) {
        throw new G(s == null ? void 0 : s.message, s);
      }
      this._wallet = t, this._publicKey = n, this.emit("connect", n);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      this._wallet = null, this._publicKey = null;
      try {
        e.isLoggedIn && await e.cleanUp();
      } catch (t) {
        this.emit("error", new X(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(e, t, i = {}) {
    try {
      const n = this._wallet;
      if (!n)
        throw new w();
      try {
        const { signers: s, ...D } = i;
        e = await this.prepareTransaction(e, t, D), s != null && s.length && e.partialSign(...s), D.preflightCommitment = D.preflightCommitment || t.commitment;
        const { signature: c } = await n.signAndSendTransaction(e, D);
        return c;
      } catch (s) {
        throw s instanceof z ? s : new Q(s == null ? void 0 : s.message, s);
      }
    } catch (n) {
      throw this.emit("error", n), n;
    }
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signAllTransactions(e) || e;
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signMessage(e);
      } catch (i) {
        throw new R(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
function at(a) {
  switch (a) {
    case "processed":
    case "confirmed":
    case "finalized":
    case void 0:
      return a;
    case "recent":
      return "processed";
    case "single":
    case "singleGossip":
      return "confirmed";
    case "max":
    case "root":
      return "finalized";
    default:
      return;
  }
}
const te = "https://api.mainnet-beta.solana.com";
function ee(a) {
  return a.includes(te) ? ht : /\bdevnet\b/i.test(a) ? Jt : /\btestnet\b/i.test(a) ? Xt : /\blocalhost\b/i.test(a) || /\b127\.0\.0\.1\b/.test(a) ? Rt : ht;
}
const ie = "WalletConnect";
class ne extends lt {
  constructor(e) {
    super(), this.name = ie, this.url = "https://walletconnect.org", this.icon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" ? g.Unsupported : g.Loadable, this._disconnected = () => {
      const t = this._wallet;
      t && (t.client.off("session_delete", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new ot()), this.emit("disconnect"));
    }, this._publicKey = null, this._connecting = !1, this._wallet = null, this._config = e;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== g.Loadable)
        throw new Z();
      this._connecting = !0;
      let e, t;
      try {
        ({ WalletConnectWallet: e, WalletConnectChainID: t } = await import("./index-DxCOP1Ek.mjs"));
      } catch (s) {
        throw new Lt(s == null ? void 0 : s.message, s);
      }
      let i, n;
      try {
        i = new e({
          network: this._config.network === J.Mainnet ? t.Mainnet : t.Devnet,
          options: this._config.options
        }), { publicKey: n } = await i.connect();
      } catch (s) {
        throw s.constructor.name === "QRCodeModalError" ? new Wt() : new nt(s == null ? void 0 : s.message, s);
      }
      i.client.on("session_delete", this._disconnected), this._wallet = i, this._publicKey = n, this.emit("connect", n);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      e.client.off("session_delete", this._disconnected), this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new X(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signTransaction(e);
      } catch (i) {
        throw new j(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new w();
      try {
        return await t.signMessage(e);
      } catch (i) {
        throw new R(i == null ? void 0 : i.message, i);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const se = {
  icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMDM1XzExMDYpIj4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiM1NEZGRjUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTEzLjQ4MDYgMTk4LjYwNUMtMjkuMzI3NiAzMTkuMDQzIDE5OS42NjEgMjg1LjAyNyAzMTkuNTA3IDI1Mi45NjRDNDQyLjE2NSAyMTIuMjU5IDM1Ny4zODYgMzIuODI2OSAyNjkuNDE1IDI4Ljg1NThDMTgxLjQ0MyAyNC44ODQ3IDI4MC4zMjIgMTExLjgyNCAyMDUuNTk1IDEzNi42NTZDMTMwLjg2OCAxNjEuNDg3IDY2Ljk5MDcgNDguMDU4MyAxMy40ODA2IDE5OC42MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMjAzNV8xMTA2KSI+CjxwYXRoIGQ9Ik04NS41MTE4IC00NS44MjI1QzYzLjA1NjIgLTEwNy4xNzYgLTE2LjkxODkgLTIzLjk5NTMgLTU0LjA5OTUgMjUuMjY0M0MtODkuNTY1MiA3OC44NDc5IDMuMDA5MzcgMTI1LjE1MiAzOS4zMjA4IDEwMC4wMzdDNzUuNjMyMyA3NC45MjI3IDcuNzc0NDggNzAuMDM2MyAyOS4zNzA4IDM3LjM3ODVDNTAuOTY3MSA0LjcyMDc2IDExMy41ODEgMzAuODY5NSA4NS41MTE4IC00NS44MjI1WiIgZmlsbD0iIzAwRkZGMCIgZmlsbC1vcGFjaXR5PSIwLjY3Ii8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTk2LjQ3OTYgMjI1LjQyNEM2NS44NTAyIDEyMi4zNjMgLTY2LjA4MTggMTc2LjYzNyAtMTI4LjIxOSAyMTYuNjU3Qy0xODcuOTkgMjY0LjA0MiAtNDYuMDcxMSA0MDAuMzQ4IDEyLjg3MjUgMzkzLjM3NkM3MS44MTYxIDM4Ni40MDMgLTM0LjQxMTggMzI3LjA2NSAxLjk4NzAyIDI5OC4xN0MzOC4zODU4IDI2OS4yNzYgMTM0Ljc2NiAzNTQuMjQ5IDk2LjQ3OTYgMjI1LjQyNFoiIGZpbGw9IiM5RDgxRkYiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19mXzIwMzVfMTEwNikiPgo8cGF0aCBkPSJNMjgyLjEyIC0xMDcuMzUzQzIxNi4wNDcgLTE4Ni4wMzEgMTIxLjQ2MyAtMTIwLjk3IDgyLjQyOTYgLTc4LjYwNDdDNDguMjczOSAtMzAuNjQ0NiAyMjQuMjc1IDU3LjIzMTIgMjczLjEyMSA0Mi4xNzE0QzMyMS45NjggMjcuMTExNSAyMDYuNTEyIC00LjA1MDM4IDIyNy4yOTcgLTMzLjI4NzlDMjQ4LjA4MiAtNjIuNTI1NSAzNjQuNzEyIC05LjAwNTY2IDI4Mi4xMiAtMTA3LjM1M1oiIGZpbGw9IiM0RDk0RkYiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkzLjE4OSAxNTIuODM2SDEzNi42NzRMODcuMjA4NiAxMDMuMDUxTDEzNy4zMSA1My4yNjYzTDE1MC45NTUgNDBIMTA1LjgxOUw0OC4zMzU5IDk3Ljc3NzNDNDUuNDM0OSAxMDAuNjg5IDQ1LjQ0OTggMTA1LjQwMiA0OC4zNjU2IDEwOC4yOTlMOTMuMTg5IDE1Mi44MzZaTTExOS4zMyAxMDMuMTY4SDExOC45OTVMMTE5LjMyNiAxMDMuMTY0TDExOS4zMyAxMDMuMTY4Wk0xMTkuMzMgMTAzLjE2OEwxNjguNzkxIDE1Mi45NDlMMTE4LjY5IDIwMi43MzRMMTA1LjA0NSAyMTZIMTUwLjE4TDIwNy42NjQgMTU4LjIyNkMyMTAuNTY1IDE1NS4zMTQgMjEwLjU1IDE1MC42MDIgMjA3LjYzNCAxNDcuNzA1TDE2Mi44MTEgMTAzLjE2OEgxMTkuMzNaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMjAzNV8xMTA2IiB4PSItOTAuMjQxMSIgeT0iLTY5LjczNjkiIHdpZHRoPSI1NjkuNTU4IiBoZWlnaHQ9IjQ1MS40MzEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9mXzIwMzVfMTEwNiIgeD0iLTE2MC41MTEiIHk9Ii0xNjUuOTg3IiB3aWR0aD0iMzUxLjU5NiIgaGVpZ2h0PSIzNzEuNTA3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZl8yMDM1XzExMDYiIHg9Ii0yNDEuMDc4IiB5PSI2Ny42NDIiIHdpZHRoPSI0NDQuODUxIiBoZWlnaHQ9IjQyNC40NTIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyM19mXzIwMzVfMTEwNiIgeD0iLTIwLjM5NjgiIHk9Ii0yNDIuNzU4IiB3aWR0aD0iNDMwLjE5MSIgaGVpZ2h0PSIzODUuMTA1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjAzNV8xMTA2Ij4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
  name: "Bitget Wallet"
}, ae = [se], re = (a) => ae.find((e) => e.name.toLocaleLowerCase().includes(a.name.toLocaleLowerCase())) || a, ce = (a, e, t) => e[a] || t[a], yt = (a, e) => ce(a, re(e), e);
class E extends Ot {
  constructor(e, t) {
    super(), this.adapter = e, this.connection = t;
  }
  /** Retrieve the underlying solana adapter */
  getAdapter() {
    return this.adapter;
  }
  getName() {
    return yt("name", this.adapter);
  }
  getUrl() {
    return this.adapter.url;
  }
  async connect() {
    if (this.isConnected())
      return this.getAddresses();
    const e = await new Promise((t, i) => {
      this.adapter.on("connect", () => {
        this.adapter.off("connect"), this.adapter.off("error"), t(this.getAddresses());
      }), this.adapter.on("error", (n) => {
        this.adapter.off("connect"), this.adapter.off("error"), i(n);
      }), this.adapter.connect().catch(i);
    });
    return this.emit("connect"), this.adapter.on("disconnect", () => this.emit("disconnect")), e;
  }
  getNetworkInfo() {
    return {};
  }
  isConnected() {
    return this.adapter.connected;
  }
  async disconnect() {
    this.isConnected() && (await new Promise((e, t) => {
      this.adapter.on("disconnect", () => {
        this.adapter.off("disconnect"), this.adapter.off("error"), e(void 0);
      }), this.adapter.on("error", (i) => {
        this.adapter.off("disconnect"), this.adapter.off("error"), t(i);
      }), this.adapter.disconnect().catch(t);
    }), this.adapter.removeAllListeners(), this.emit("disconnect"));
  }
  getChainId() {
    return It;
  }
  getAddress() {
    var e;
    return (e = this.adapter.publicKey) == null ? void 0 : e.toString();
  }
  getAddresses() {
    const e = this.getAddress();
    return e ? [e] : [];
  }
  setMainAddress() {
    throw new Error("Not supported");
  }
  getBalance() {
    throw new Error("Not supported");
  }
  async signTransaction(e) {
    if (!this.adapter.signTransaction || !this.adapter.signAllTransactions)
      throw new Error("Not supported");
    return Array.isArray(e) ? this.adapter.signAllTransactions(e) : this.adapter.signTransaction(e);
  }
  async sendTransaction(e) {
    var s;
    const { transaction: t } = e, i = Array.isArray(t) ? t : [t];
    if (i.length === 0)
      throw new Error("Empty transactions array");
    const n = [];
    for (const D of i) {
      const c = await this.adapter.sendTransaction(D, this.connection, {
        ...e.options
      });
      n.push(c);
    }
    return await this.connection.confirmTransaction(n[0], (s = e.options) == null ? void 0 : s.commitment), {
      id: n[0],
      data: n.length === 1 ? n[0] : n
    };
  }
  async signAndSendTransaction(e) {
    return this.sendTransaction(e);
  }
  signMessage(e) {
    if (!this.adapter.signMessage)
      throw new Error("Not supported");
    return this.adapter.signMessage(e);
  }
  getIcon() {
    return yt("icon", this.adapter);
  }
  getWalletState() {
    const e = this.adapter.readyState;
    if (!(e in Nt))
      throw new Error(`Unknown wallet state ${e}`);
    return Nt[e];
  }
  getFeatures() {
    const e = [
      q.SendTransaction,
      q.SignAndSendTransaction
    ];
    return this.adapter.signTransaction && this.adapter.signAllTransactions && e.push(q.SignTransaction), this.adapter.signMessage && e.push(q.SignMessage), e;
  }
  supportsChain(e) {
    return e === It;
  }
}
var d = function(a, e, t, i, n) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !n)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? a !== e || !n : !e.has(a))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? n.call(a, t) : n ? n.value = t : e.set(a, t), t;
}, r = function(a, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? a !== e || !i : !e.has(a))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(a) : i ? i.value : e.get(a);
}, T, f, U, k, Y, B, et, N, it, rt, tt, ct, H, Mt, dt, jt, At, Tt;
class Me extends mt {
  constructor({ wallet: e }) {
    super(), T.add(this), f.set(this, void 0), U.set(this, void 0), k.set(this, void 0), Y.set(this, void 0), B.set(this, void 0), et.set(this, void 0), N.set(this, void 0), it.set(this, typeof window > "u" || typeof document > "u" ? g.Unsupported : g.Installed), Mt.set(this, (t) => {
      if ("accounts" in t) {
        const i = r(this, N, "f").accounts[0];
        r(this, f, "f") && !r(this, Y, "f") && i !== r(this, f, "f") && (i ? r(this, T, "m", tt).call(this, i) : (this.emit("error", new ot()), r(this, T, "m", ct).call(this)));
      }
      "features" in t && r(this, T, "m", H).call(this);
    }), d(this, N, e, "f"), d(this, f, null, "f"), d(this, U, null, "f"), d(this, k, !1, "f"), d(this, Y, !1, "f"), d(this, B, r(this, N, "f").features[St].on("change", r(this, Mt, "f")), "f"), r(this, T, "m", H).call(this);
  }
  get name() {
    return r(this, N, "f").name;
  }
  get url() {
    return "https://github.com/solana-labs/wallet-standard";
  }
  get icon() {
    return r(this, N, "f").icon;
  }
  get readyState() {
    return r(this, it, "f");
  }
  get publicKey() {
    return r(this, U, "f");
  }
  get connecting() {
    return r(this, k, "f");
  }
  get supportedTransactionVersions() {
    return r(this, et, "f");
  }
  get wallet() {
    return r(this, N, "f");
  }
  get standard() {
    return !0;
  }
  destroy() {
    d(this, f, null, "f"), d(this, U, null, "f"), d(this, k, !1, "f"), d(this, Y, !1, "f");
    const e = r(this, B, "f");
    e && (d(this, B, null, "f"), e());
  }
  async autoConnect() {
    return r(this, T, "m", rt).call(this, { silent: !0 });
  }
  async connect() {
    return r(this, T, "m", rt).call(this);
  }
  async disconnect() {
    if (wt in r(this, N, "f").features)
      try {
        d(this, Y, !0, "f"), await r(this, N, "f").features[wt].disconnect();
      } catch (e) {
        this.emit("error", new X(e == null ? void 0 : e.message, e));
      } finally {
        d(this, Y, !1, "f");
      }
    r(this, T, "m", ct).call(this);
  }
  async sendTransaction(e, t, i = {}) {
    try {
      const n = r(this, f, "f");
      if (!n)
        throw new w();
      let s;
      if (O in r(this, N, "f").features)
        if (n.features.includes(O))
          s = O;
        else if (A in r(this, N, "f").features && n.features.includes(A))
          s = A;
        else
          throw new S();
      else if (A in r(this, N, "f").features) {
        if (!n.features.includes(A))
          throw new S();
        s = A;
      } else
        throw new _();
      const D = ee(t.rpcEndpoint);
      if (!n.chains.includes(D))
        throw new Q();
      try {
        const { signers: c, ...u } = i;
        let M;
        if (W(e) ? (c != null && c.length && e.sign(c), M = e.serialize()) : (e = await this.prepareTransaction(e, t, u), c != null && c.length && e.partialSign(...c), M = new Uint8Array(e.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))), s === O) {
          const [o] = await r(this, N, "f").features[O].signAndSendTransaction({
            account: n,
            chain: D,
            transaction: M,
            options: {
              preflightCommitment: at(u.preflightCommitment || t.commitment),
              skipPreflight: u.skipPreflight,
              maxRetries: u.maxRetries,
              minContextSlot: u.minContextSlot
            }
          });
          return $.encode(o.signature);
        } else {
          const [o] = await r(this, N, "f").features[A].signTransaction({
            account: n,
            chain: D,
            transaction: M,
            options: {
              preflightCommitment: at(u.preflightCommitment || t.commitment),
              minContextSlot: u.minContextSlot
            }
          });
          return await t.sendRawTransaction(o.signedTransaction, {
            ...u,
            preflightCommitment: at(u.preflightCommitment || t.commitment)
          });
        }
      } catch (c) {
        throw c instanceof z ? c : new Q(c == null ? void 0 : c.message, c);
      }
    } catch (n) {
      throw this.emit("error", n), n;
    }
  }
}
f = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakSet(), rt = async function(e) {
  try {
    if (this.connected || this.connecting)
      return;
    if (r(this, it, "f") !== g.Installed)
      throw new Z();
    if (d(this, k, !0, "f"), !r(this, N, "f").accounts.length)
      try {
        await r(this, N, "f").features[ft].connect(e);
      } catch (i) {
        throw new nt(i == null ? void 0 : i.message, i);
      }
    const t = r(this, N, "f").accounts[0];
    if (!t)
      throw new S();
    r(this, T, "m", tt).call(this, t);
  } catch (t) {
    throw this.emit("error", t), t;
  } finally {
    d(this, k, !1, "f");
  }
}, tt = function(e) {
  let t;
  try {
    t = new x(e.address);
  } catch (i) {
    throw new G(i == null ? void 0 : i.message, i);
  }
  d(this, f, e, "f"), d(this, U, t, "f"), r(this, T, "m", H).call(this), this.emit("connect", t);
}, ct = function() {
  d(this, f, null, "f"), d(this, U, null, "f"), r(this, T, "m", H).call(this), this.emit("disconnect");
}, H = function() {
  var t, i;
  const e = O in r(this, N, "f").features ? r(this, N, "f").features[O].supportedTransactionVersions : r(this, N, "f").features[A].supportedTransactionVersions;
  d(this, et, Zt(e, ["legacy"]) ? null : new Set(e), "f"), A in r(this, N, "f").features && ((t = r(this, f, "f")) != null && t.features.includes(A)) ? (this.signTransaction = r(this, T, "m", dt), this.signAllTransactions = r(this, T, "m", jt)) : (delete this.signTransaction, delete this.signAllTransactions), V in r(this, N, "f").features && ((i = r(this, f, "f")) != null && i.features.includes(V)) ? this.signMessage = r(this, T, "m", At) : delete this.signMessage, st in r(this, N, "f").features ? this.signIn = r(this, T, "m", Tt) : delete this.signIn;
}, dt = async function(e) {
  try {
    const t = r(this, f, "f");
    if (!t)
      throw new w();
    if (!(A in r(this, N, "f").features))
      throw new _();
    if (!t.features.includes(A))
      throw new S();
    try {
      const n = (await r(this, N, "f").features[A].signTransaction({
        account: t,
        transaction: W(e) ? e.serialize() : new Uint8Array(e.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))
      }))[0].signedTransaction;
      return W(e) ? gt.deserialize(n) : ut.from(n);
    } catch (i) {
      throw i instanceof z ? i : new j(i == null ? void 0 : i.message, i);
    }
  } catch (t) {
    throw this.emit("error", t), t;
  }
}, jt = async function(e) {
  try {
    const t = r(this, f, "f");
    if (!t)
      throw new w();
    if (!(A in r(this, N, "f").features))
      throw new _();
    if (!t.features.includes(A))
      throw new S();
    try {
      const i = await r(this, N, "f").features[A].signTransaction(...e.map((n) => ({
        account: t,
        transaction: W(n) ? n.serialize() : new Uint8Array(n.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))
      })));
      return e.map((n, s) => {
        const D = i[s].signedTransaction;
        return W(n) ? gt.deserialize(D) : ut.from(D);
      });
    } catch (i) {
      throw new j(i == null ? void 0 : i.message, i);
    }
  } catch (t) {
    throw this.emit("error", t), t;
  }
}, At = async function(e) {
  try {
    const t = r(this, f, "f");
    if (!t)
      throw new w();
    if (!(V in r(this, N, "f").features))
      throw new _();
    if (!t.features.includes(V))
      throw new S();
    try {
      return (await r(this, N, "f").features[V].signMessage({
        account: t,
        message: e
      }))[0].signature;
    } catch (i) {
      throw new R(i == null ? void 0 : i.message, i);
    }
  } catch (t) {
    throw this.emit("error", t), t;
  }
}, Tt = async function(e = {}) {
  try {
    if (!(st in r(this, N, "f").features))
      throw new _();
    let t;
    try {
      [t] = await r(this, N, "f").features[st].signIn(e);
    } catch (i) {
      throw new Dt(i == null ? void 0 : i.message, i);
    }
    if (!t)
      throw new Dt();
    return r(this, T, "m", tt).call(this, t.account), t;
  } catch (t) {
    throw this.emit("error", t), t;
  }
};
function oe(a) {
  return bt().get().filter(Ut).map((e) => new E(new Me({ wallet: e }), a));
}
const le = (a) => a.getName().toLowerCase().replaceAll("wallet", "").trim();
function Ne() {
  const a = P.isMainnet ? "mainnet-beta" : "devnet", e = new Ct(P.rpcs.solana || Et(a));
  return {
    ...oe(e).reduce((t, i) => (t[le(i)] = i, t), {}),
    bitget: new E(new Gt(), e),
    clover: new E(new vt(), e),
    coin98: new E(new Vt(), e),
    solong: new E(new Ft(), e),
    torus: new E(new $t(), e),
    nightly: new E(new Ht(), e),
    ...P.walletConnectProjectId ? {
      walletConnect: new E(
        new ne({
          network: P.isMainnet ? J.Mainnet : J.Devnet,
          options: {
            projectId: P.walletConnectProjectId
          }
        }),
        e
      )
    } : {}
  };
}
async function De(a, e, t) {
  if (!e || !e.signAndSendTransaction)
    throw new Error("wallet.signAndSendTransaction is undefined");
  return await e.signAndSendTransaction({
    transaction: a,
    options: t
  });
}
export {
  Ne as fetchOptions,
  De as signAndSendTransaction
};
