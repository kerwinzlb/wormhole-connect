var o = function(t, e, r, n, a) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !a : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(t, r) : a ? a.value = r : e.set(t, r), r;
}, i = function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, d, c, u, f, h, w;
class b {
  /**
   * Create and freeze a read-only account.
   *
   * @param account Account to copy properties from.
   */
  constructor(e) {
    d.set(this, void 0), c.set(this, void 0), u.set(this, void 0), f.set(this, void 0), h.set(this, void 0), w.set(this, void 0), new.target === b && Object.freeze(this), o(this, d, e.address, "f"), o(this, c, e.publicKey.slice(), "f"), o(this, u, e.chains.slice(), "f"), o(this, f, e.features.slice(), "f"), o(this, h, e.label, "f"), o(this, w, e.icon, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */
  get address() {
    return i(this, d, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */
  get publicKey() {
    return i(this, c, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */
  get chains() {
    return i(this, u, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */
  get features() {
    return i(this, f, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */
  get label() {
    return i(this, h, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */
  get icon() {
    return i(this, w, "f");
  }
}
d = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
function R(t, e) {
  if (t === e)
    return !0;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var E = function(t, e, r, n, a) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !a : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(t, r) : a ? a.value = r : e.set(t, r), r;
}, m = function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, p;
let l;
const y = /* @__PURE__ */ new Set(), s = {};
function A() {
  if (l || (l = Object.freeze({ register: g, get: P, on: W }), typeof window > "u"))
    return l;
  const t = Object.freeze({ register: g });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: e }) => e(t));
  } catch (e) {
    console.error(`wallet-standard:register-wallet event listener could not be added
`, e);
  }
  try {
    window.dispatchEvent(new T(t));
  } catch (e) {
    console.error(`wallet-standard:app-ready event could not be dispatched
`, e);
  }
  return l;
}
function g(...t) {
  var e;
  return t = t.filter((r) => !y.has(r)), t.length ? (t.forEach((r) => y.add(r)), (e = s.register) == null || e.forEach((r) => _(() => r(...t))), function() {
    var n;
    t.forEach((a) => y.delete(a)), (n = s.unregister) == null || n.forEach((a) => _(() => a(...t)));
  }) : () => {
  };
}
function P() {
  return [...y];
}
function W(t, e) {
  var r;
  return (r = s[t]) != null && r.push(e) || (s[t] = [e]), function() {
    var a;
    s[t] = (a = s[t]) == null ? void 0 : a.filter((v) => e !== v);
  };
}
function _(t) {
  try {
    t();
  } catch (e) {
    console.error(e);
  }
}
class T extends Event {
  constructor(e) {
    super("wallet-standard:app-ready", {
      bubbles: !1,
      cancelable: !1,
      composed: !1
    }), p.set(this, void 0), E(this, p, e, "f");
  }
  get detail() {
    return m(this, p, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  /** @deprecated */
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  /** @deprecated */
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  /** @deprecated */
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
}
p = /* @__PURE__ */ new WeakMap();
export {
  b as R,
  R as a,
  A as g
};
