var Ur = Object.defineProperty;
var Sr = (r, t, e) => t in r ? Ur(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var l = (r, t, e) => (Sr(r, typeof t != "symbol" ? t + "" : t, e), e), Ce = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var h = (r, t, e) => (Ce(r, t, "read from private field"), e ? e.call(r) : t.get(r)), T = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, N = (r, t, e, n) => (Ce(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var fn = (r, t, e, n) => ({
  set _(s) {
    N(r, t, s, e);
  },
  get _() {
    return h(r, t, n);
  }
}), v = (r, t, e) => (Ce(r, t, "access private method"), e);
import { ch as rt, cr as Lt, cs as De, c3 as Ve, ct as ce, cu as Bt, ar as Be, cv as Hn, az as Cr, bW as Me, ax as hn, cw as Br, av as dn, ci as Fr, cx as Lr } from "./index-DV1w5RNX.mjs";
import { E as _r, a as $r } from "./index-CqK-5vzL.mjs";
import "./index-BAjif11o.mjs";
import { E as pn, a as gn, b as Fe, c as Dr, _ as Vr } from "./evm-CAEWKa29.mjs";
import { r as Mr } from "./chain-tk4BDPwT.mjs";
const Gr = "6.12.1";
function Hr(r, t, e) {
  const n = t.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === t)
          return;
    }
  const s = new Error(`invalid value for type ${t}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${e}`, s.value = r, s;
}
async function Ge(r) {
  const t = Object.keys(r);
  return (await Promise.all(t.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[t[i]] = s, n), {});
}
function b(r, t, e) {
  for (let n in t) {
    let s = t[n];
    const i = e ? e[n] : null;
    i && Hr(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function _t(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(_t).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const t = "0123456789abcdef";
    let e = "0x";
    for (let n = 0; n < r.length; n++)
      e += t[r[n] >> 4], e += t[r[n] & 15];
    return e;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return _t(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const t = Object.keys(r);
      return t.sort(), "{ " + t.map((e) => `${_t(e)}: ${_t(r[e])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Wt(r, t) {
  return r && r.code === t;
}
function zn(r) {
  return Wt(r, "CALL_EXCEPTION");
}
function qt(r, t, e) {
  let n = r;
  {
    const i = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${_t(e)}`);
      for (const o in e) {
        if (o === "shortMessage")
          continue;
        const a = e[o];
        i.push(o + "=" + _t(a));
      }
    }
    i.push(`code=${t}`), i.push(`version=${Gr}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (t) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return b(s, { code: t }), e && Object.assign(s, e), s.shortMessage == null && b(s, { shortMessage: n }), s;
}
function w(r, t, e, n) {
  if (!r)
    throw qt(t, e, n);
}
function p(r, t, e, n) {
  w(r, t, "INVALID_ARGUMENT", { argument: e, value: n });
}
function Jn(r, t, e) {
  e == null && (e = ""), e && (e = ": " + e), w(r >= t, "missing arguemnt" + e, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: t
  }), w(r <= t, "too many arguments" + e, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: t
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((r, t) => {
  try {
    if ("test".normalize(t) !== "test")
      throw new Error("bad");
    if (t === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(t);
  } catch {
  }
  return r;
}, []);
function je(r, t, e) {
  if (e == null && (e = ""), r !== t) {
    let n = e, s = "new";
    e && (n += ".", s += " " + e), w(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function Wn(r, t, e) {
  if (r instanceof Uint8Array)
    return e ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  p(!1, "invalid BytesLike value", t || "value", r);
}
function ut(r, t) {
  return Wn(r, t, !1);
}
function tt(r, t) {
  return Wn(r, t, !0);
}
function ot(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === !0 && r.length % 2 !== 0);
}
function zr(r) {
  return ot(r, !0) || r instanceof Uint8Array;
}
const yn = "0123456789abcdef";
function R(r) {
  const t = ut(r);
  let e = "0x";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    e += yn[(s & 240) >> 4] + yn[s & 15];
  }
  return e;
}
function Dt(r) {
  return "0x" + r.map((t) => R(t).substring(2)).join("");
}
function Ct(r, t, e) {
  const n = ut(r);
  return e != null && e > n.length && w(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: e
  }), R(n.slice(t ?? 0, e ?? n.length));
}
function Kn(r, t, e) {
  const n = ut(r);
  w(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: t,
    offset: t + 1
  });
  const s = new Uint8Array(t);
  return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), R(s);
}
function Jr(r, t) {
  return Kn(r, t, !0);
}
function Wr(r, t) {
  return Kn(r, t, !1);
}
const ke = BigInt(0), W = BigInt(1), $t = 9007199254740991;
function Kr(r, t) {
  const e = Te(r, "value"), n = BigInt(ft(t, "width"));
  if (w(e >> n === ke, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), e >> n - W) {
    const s = (W << n) - W;
    return -((~e & s) + W);
  }
  return e;
}
function Xr(r, t) {
  let e = wt(r, "value");
  const n = BigInt(ft(t, "width")), s = W << n - W;
  if (e < ke) {
    e = -e, w(e <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (W << n) - W;
    return (~e & i) + W;
  } else
    w(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return e;
}
function ue(r, t) {
  const e = Te(r, "value"), n = BigInt(ft(t, "bits"));
  return e & (W << n) - W;
}
function wt(r, t) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return p(Number.isInteger(r), "underflow", t || "value", r), p(r >= -$t && r <= $t, "overflow", t || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (e) {
        p(!1, `invalid BigNumberish string: ${e.message}`, t || "value", r);
      }
  }
  p(!1, "invalid BigNumberish value", t || "value", r);
}
function Te(r, t) {
  const e = wt(r, t);
  return w(e >= ke, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), e;
}
const mn = "0123456789abcdef";
function Xn(r) {
  if (r instanceof Uint8Array) {
    let t = "0x0";
    for (const e of r)
      t += mn[e >> 4], t += mn[e & 15];
    return BigInt(t);
  }
  return wt(r);
}
function ft(r, t) {
  switch (typeof r) {
    case "bigint":
      return p(r >= -$t && r <= $t, "overflow", t || "value", r), Number(r);
    case "number":
      return p(Number.isInteger(r), "underflow", t || "value", r), p(r >= -$t && r <= $t, "overflow", t || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return ft(BigInt(r), t);
      } catch (e) {
        p(!1, `invalid numeric string: ${e.message}`, t || "value", r);
      }
  }
  p(!1, "invalid numeric value", t || "value", r);
}
function Yr(r) {
  return ft(Xn(r));
}
function Yn(r, t) {
  let n = Te(r, "value").toString(16);
  if (t == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = ft(t, "width");
    for (w(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Zr(r) {
  const t = Te(r, "value");
  if (t === ke)
    return new Uint8Array([]);
  let e = t.toString(16);
  e.length % 2 && (e = "0" + e);
  const n = new Uint8Array(e.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(e.substring(i, i + 2), 16);
  }
  return n;
}
var Vt;
class Qr {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(t, e, n) {
    /**
     *  The event filter.
     */
    l(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    l(this, "emitter");
    T(this, Vt, void 0);
    N(this, Vt, e), b(this, { emitter: t, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    h(this, Vt) != null && await this.emitter.off(this.filter, h(this, Vt));
  }
}
Vt = new WeakMap();
function qr(r, t, e, n, s) {
  p(!1, `invalid codepoint at offset ${t}; ${r}`, "bytes", e);
}
function Zn(r, t, e, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? e.length - t - 1 : 0;
}
function jr(r, t, e, n, s) {
  return r === "OVERLONG" ? (p(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Zn(r, t, e));
}
const ts = Object.freeze({
  error: qr,
  ignore: Zn,
  replace: jr
});
function es(r, t) {
  t == null && (t = ts.error);
  const e = ut(r, "bytes"), n = [];
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let o = null, a = null;
    if ((i & 224) === 192)
      o = 1, a = 127;
    else if ((i & 240) === 224)
      o = 2, a = 2047;
    else if ((i & 248) === 240)
      o = 3, a = 65535;
    else {
      (i & 192) === 128 ? s += t("UNEXPECTED_CONTINUE", s - 1, e, n) : s += t("BAD_PREFIX", s - 1, e, n);
      continue;
    }
    if (s - 1 + o >= e.length) {
      s += t("OVERRUN", s - 1, e, n);
      continue;
    }
    let c = i & (1 << 8 - o - 1) - 1;
    for (let u = 0; u < o; u++) {
      let f = e[s];
      if ((f & 192) != 128) {
        s += t("MISSING_CONTINUE", s, e, n), c = null;
        break;
      }
      c = c << 6 | f & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += t("OUT_OF_RANGE", s - 1 - o, e, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += t("UTF16_SURROGATE", s - 1 - o, e, n, c);
        continue;
      }
      if (c <= a) {
        s += t("OVERLONG", s - 1 - o, e, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function Qn(r, t) {
  p(typeof r == "string", "invalid string value", "str", r);
  let e = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      e.push(s);
    else if (s < 2048)
      e.push(s >> 6 | 192), e.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      p(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const o = 65536 + ((s & 1023) << 10) + (i & 1023);
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
    } else
      e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
  }
  return new Uint8Array(e);
}
function ns(r) {
  return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
}
function rs(r, t) {
  return ns(es(r, t));
}
const F = 32, He = new Uint8Array(F), ss = ["then"], le = {};
function Kt(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw e.error = t, e;
}
var dt;
const Et = class Et extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const n = e[0];
    let s = e[1], i = (e[2] || []).slice(), o = !0;
    n !== le && (s = e, i = [], o = !1);
    super(s.length);
    T(this, dt, void 0);
    s.forEach((c, u) => {
      this[u] = c;
    });
    const a = i.reduce((c, u) => (typeof u == "string" && c.set(u, (c.get(u) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (N(this, dt, Object.freeze(s.map((c, u) => {
      const f = i[u];
      return f != null && a.get(f) === 1 ? f : null;
    }))), !!o)
      return Object.freeze(this), new Proxy(this, {
        get: (c, u, f) => {
          if (typeof u == "string") {
            if (u.match(/^[0-9]+$/)) {
              const g = ft(u, "%index");
              if (g < 0 || g >= this.length)
                throw new RangeError("out of result range");
              const m = c[g];
              return m instanceof Error && Kt(`index ${g}`, m), m;
            }
            if (ss.indexOf(u) >= 0)
              return Reflect.get(c, u, f);
            const d = c[u];
            if (d instanceof Function)
              return function(...g) {
                return d.apply(this === f ? c : this, g);
              };
            if (!(u in c))
              return c.getValue.apply(this === f ? c : this, [u]);
          }
          return Reflect.get(c, u, f);
        }
      });
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(e) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && Kt(`index ${i}`, s), e && s instanceof Et && (s = s.toArray(e)), n.push(s);
    }), n;
  }
  /**
   *  Returns the Result as an Object with each name-value pair. If
   *  %%deep%%, any children which are Result objects are also
   *  converted to an Object.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject(e) {
    return h(this, dt).reduce((n, s, i) => {
      if (w(s != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), !(s in n)) {
        let o = this.getValue(s);
        e && o instanceof Et && (o = o.toObject(e)), n[s] = o;
      }
      return n;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(e, n) {
    e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = [], i = [];
    for (let o = e; o < n; o++)
      s.push(this[o]), i.push(h(this, dt)[o]);
    return new Et(le, s, i);
  }
  /**
   *  @_ignore
   */
  filter(e, n) {
    const s = [], i = [];
    for (let o = 0; o < this.length; o++) {
      const a = this[o];
      a instanceof Error && Kt(`index ${o}`, a), e.call(n, a, o, this) && (s.push(a), i.push(h(this, dt)[o]));
    }
    return new Et(le, s, i);
  }
  /**
   *  @_ignore
   */
  map(e, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && Kt(`index ${i}`, o), s.push(e.call(n, o, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(e) {
    const n = h(this, dt).indexOf(e);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && Kt(`property ${JSON.stringify(e)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, n) {
    return new Et(le, e, n);
  }
};
dt = new WeakMap();
let we = Et;
function wn(r) {
  let t = Zr(r);
  return w(t.length <= F, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: t, length: F, offset: t.length }), t.length !== F && (t = tt(Dt([He.slice(t.length % F), t]))), t;
}
class ht {
  constructor(t, e, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    l(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    l(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    l(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    l(this, "dynamic");
    b(this, { name: t, type: e, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(t, e) {
    p(!1, t, this.localName, e);
  }
}
var it, At, Mt, pe;
class ze {
  constructor() {
    T(this, Mt);
    // An array of WordSize lengthed objects to concatenation
    T(this, it, void 0);
    T(this, At, void 0);
    N(this, it, []), N(this, At, 0);
  }
  get data() {
    return Dt(h(this, it));
  }
  get length() {
    return h(this, At);
  }
  appendWriter(t) {
    return v(this, Mt, pe).call(this, tt(t.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(t) {
    let e = tt(t);
    const n = e.length % F;
    return n && (e = tt(Dt([e, He.slice(n)]))), v(this, Mt, pe).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(t) {
    return v(this, Mt, pe).call(this, wn(t));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const t = h(this, it).length;
    return h(this, it).push(He), N(this, At, h(this, At) + F), (e) => {
      h(this, it)[t] = wn(e);
    };
  }
}
it = new WeakMap(), At = new WeakMap(), Mt = new WeakSet(), pe = function(t) {
  return h(this, it).push(t), N(this, At, h(this, At) + t.length), t.length;
};
var _, M, kt, Tt, pt, re, We, xe, qn;
const an = class an {
  constructor(t, e, n) {
    T(this, re);
    T(this, xe);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    l(this, "allowLoose");
    T(this, _, void 0);
    T(this, M, void 0);
    T(this, kt, void 0);
    T(this, Tt, void 0);
    T(this, pt, void 0);
    b(this, { allowLoose: !!e }), N(this, _, tt(t)), N(this, kt, 0), N(this, Tt, null), N(this, pt, n ?? 1024), N(this, M, 0);
  }
  get data() {
    return R(h(this, _));
  }
  get dataLength() {
    return h(this, _).length;
  }
  get consumed() {
    return h(this, M);
  }
  get bytes() {
    return new Uint8Array(h(this, _));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(t) {
    const e = new an(h(this, _).slice(h(this, M) + t), this.allowLoose, h(this, pt));
    return N(e, Tt, this), e;
  }
  // Read bytes
  readBytes(t, e) {
    let n = v(this, xe, qn).call(this, 0, t, !!e);
    return v(this, re, We).call(this, t), N(this, M, h(this, M) + n.length), n.slice(0, t);
  }
  // Read a numeric values
  readValue() {
    return Xn(this.readBytes(F));
  }
  readIndex() {
    return Yr(this.readBytes(F));
  }
};
_ = new WeakMap(), M = new WeakMap(), kt = new WeakMap(), Tt = new WeakMap(), pt = new WeakMap(), re = new WeakSet(), We = function(t) {
  var e;
  if (h(this, Tt))
    return v(e = h(this, Tt), re, We).call(e, t);
  N(this, kt, h(this, kt) + t), w(h(this, pt) < 1 || h(this, kt) <= h(this, pt) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${h(this, pt)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: tt(h(this, _)),
    offset: h(this, M),
    length: t,
    info: {
      bytesRead: h(this, kt),
      dataLength: this.dataLength
    }
  });
}, xe = new WeakSet(), qn = function(t, e, n) {
  let s = Math.ceil(e / F) * F;
  return h(this, M) + s > h(this, _).length && (this.allowLoose && n && h(this, M) + e <= h(this, _).length ? s = e : w(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: tt(h(this, _)),
    length: h(this, _).length,
    offset: h(this, M) + s
  })), h(this, _).slice(h(this, M), h(this, M) + s);
};
let Je = an;
function bn(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function jn(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function En(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function is(r, t) {
  jn(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const os = (r) => r instanceof Uint8Array, as = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), cs = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!cs)
  throw new Error("Non little-endian hardware is not supported");
function us(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function tr(r) {
  if (typeof r == "string" && (r = us(r)), !os(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
class ls {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function fs(r) {
  const t = (n) => r().update(tr(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
const fe = /* @__PURE__ */ BigInt(2 ** 32 - 1), xn = /* @__PURE__ */ BigInt(32);
function hs(r, t = !1) {
  return t ? { h: Number(r & fe), l: Number(r >> xn & fe) } : { h: Number(r >> xn & fe) | 0, l: Number(r & fe) | 0 };
}
function ds(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = hs(r[s], t);
    [e[s], n[s]] = [i, o];
  }
  return [e, n];
}
const ps = (r, t, e) => r << e | t >>> 32 - e, gs = (r, t, e) => t << e | r >>> 32 - e, ys = (r, t, e) => t << e - 32 | r >>> 64 - e, ms = (r, t, e) => r << e - 32 | t >>> 64 - e, [er, nr, rr] = [[], [], []], ws = /* @__PURE__ */ BigInt(0), Xt = /* @__PURE__ */ BigInt(1), bs = /* @__PURE__ */ BigInt(2), Es = /* @__PURE__ */ BigInt(7), xs = /* @__PURE__ */ BigInt(256), Ns = /* @__PURE__ */ BigInt(113);
for (let r = 0, t = Xt, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], er.push(2 * (5 * n + e)), nr.push((r + 1) * (r + 2) / 2 % 64);
  let s = ws;
  for (let i = 0; i < 7; i++)
    t = (t << Xt ^ (t >> Es) * Ns) % xs, t & bs && (s ^= Xt << (Xt << /* @__PURE__ */ BigInt(i)) - Xt);
  rr.push(s);
}
const [As, ks] = /* @__PURE__ */ ds(rr, !0), Nn = (r, t, e) => e > 32 ? ys(r, t, e) : ps(r, t, e), An = (r, t, e) => e > 32 ? ms(r, t, e) : gs(r, t, e);
function Ts(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = e[c], f = e[c + 1], d = Nn(u, f, 1) ^ e[a], g = An(u, f, 1) ^ e[a + 1];
      for (let m = 0; m < 50; m += 10)
        r[o + m] ^= d, r[o + m + 1] ^= g;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = nr[o], c = Nn(s, i, a), u = An(s, i, a), f = er[o];
      s = r[f], i = r[f + 1], r[f] = c, r[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        e[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    r[0] ^= As[n], r[1] ^= ks[n];
  }
  e.fill(0);
}
class tn extends ls {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, bn(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = as(this.state);
  }
  keccak() {
    Ts(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    En(this);
    const { blockLen: e, state: n } = this;
    t = tr(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(e - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: s } = this;
    t[n] ^= e, e & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    En(this, !1), jn(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(e.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return bn(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (is(t, this), this.finished)
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
    const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return t || (t = new tn(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Os = (r, t, e) => fs(() => new tn(t, r, e)), vs = /* @__PURE__ */ Os(1, 136, 256 / 8);
let sr = !1;
const ir = function(r) {
  return vs(r);
};
let or = ir;
function mt(r) {
  const t = ut(r, "data");
  return R(or(t));
}
mt._ = ir;
mt.lock = function() {
  sr = !0;
};
mt.register = function(r) {
  if (sr)
    throw new TypeError("keccak256 is locked");
  or = r;
};
Object.freeze(mt);
const Ps = BigInt(0), Rs = BigInt(36);
function kn(r) {
  r = r.toLowerCase();
  const t = r.substring(2).split(""), e = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    e[s] = t[s].charCodeAt(0);
  const n = ut(mt(e));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
  return "0x" + t.join("");
}
const en = {};
for (let r = 0; r < 10; r++)
  en[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  en[String.fromCharCode(65 + r)] = String(10 + r);
const Tn = 15;
function Is(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let t = r.split("").map((n) => en[n]).join("");
  for (; t.length >= Tn; ) {
    let n = t.substring(0, Tn);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const Us = function() {
  const r = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    r[e] = BigInt(t);
  }
  return r;
}();
function Ss(r) {
  r = r.toLowerCase();
  let t = Ps;
  for (let e = 0; e < r.length; e++)
    t = t * Rs + Us[r[e]];
  return t;
}
function Pt(r) {
  if (p(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const t = kn(r);
    return p(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    p(r.substring(2, 4) === Is(r), "bad icap checksum", "address", r);
    let t = Ss(r.substring(4)).toString(16);
    for (; t.length < 40; )
      t = "0" + t;
    return kn("0x" + t);
  }
  p(!1, "invalid address", "address", r);
}
function ar(r) {
  return r && typeof r.getAddress == "function";
}
async function Le(r, t) {
  const e = await t;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (w(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), p(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), Pt(e);
}
function jt(r, t) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? Pt(r) : (w(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Le(r, t.resolveName(r)));
  if (ar(r))
    return Le(r, r.getAddress());
  if (r && typeof r.then == "function")
    return Le(r, r);
  p(!1, "unsupported addressable value", "target", r);
}
const et = {};
function y(r, t) {
  let e = !1;
  return t < 0 && (e = !0, t *= -1), new B(et, `${e ? "" : "u"}int${t}`, r, { signed: e, width: t });
}
function A(r, t) {
  return new B(et, `bytes${t || ""}`, r, { size: t });
}
const On = Symbol.for("_ethers_typed");
var Ot;
const nt = class nt {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    l(this, "type");
    /**
     *  The actual value.
     */
    l(this, "value");
    T(this, Ot, void 0);
    /**
     *  @_ignore:
     */
    l(this, "_typedSymbol");
    s == null && (s = null), je(et, t, "Typed"), b(this, { _typedSymbol: On, type: e, value: n }), N(this, Ot, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((t) => t.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return h(this, Ot);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return h(this, Ot) === !0 ? -1 : h(this, Ot) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(t, e) {
    return new nt(et, t, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(t) {
    return y(t, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(t) {
    return y(t, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(t) {
    return y(t, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(t) {
    return y(t, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(t) {
    return y(t, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(t) {
    return y(t, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(t) {
    return y(t, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(t) {
    return y(t, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(t) {
    return y(t, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(t) {
    return y(t, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(t) {
    return y(t, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(t) {
    return y(t, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(t) {
    return y(t, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(t) {
    return y(t, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(t) {
    return y(t, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(t) {
    return y(t, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(t) {
    return y(t, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(t) {
    return y(t, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(t) {
    return y(t, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(t) {
    return y(t, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(t) {
    return y(t, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(t) {
    return y(t, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(t) {
    return y(t, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(t) {
    return y(t, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(t) {
    return y(t, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(t) {
    return y(t, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(t) {
    return y(t, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(t) {
    return y(t, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(t) {
    return y(t, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(t) {
    return y(t, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(t) {
    return y(t, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(t) {
    return y(t, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(t) {
    return y(t, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(t) {
    return y(t, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(t) {
    return y(t, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(t) {
    return y(t, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(t) {
    return y(t, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(t) {
    return y(t, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(t) {
    return y(t, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(t) {
    return y(t, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(t) {
    return y(t, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(t) {
    return y(t, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(t) {
    return y(t, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(t) {
    return y(t, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(t) {
    return y(t, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(t) {
    return y(t, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(t) {
    return y(t, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(t) {
    return y(t, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(t) {
    return y(t, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(t) {
    return y(t, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(t) {
    return y(t, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(t) {
    return y(t, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(t) {
    return y(t, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(t) {
    return y(t, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(t) {
    return y(t, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(t) {
    return y(t, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(t) {
    return y(t, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(t) {
    return y(t, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(t) {
    return y(t, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(t) {
    return y(t, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(t) {
    return y(t, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(t) {
    return y(t, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(t) {
    return y(t, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(t) {
    return y(t, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(t) {
    return y(t, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(t) {
    return y(t, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(t) {
    return A(t, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(t) {
    return A(t, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(t) {
    return A(t, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(t) {
    return A(t, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(t) {
    return A(t, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(t) {
    return A(t, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(t) {
    return A(t, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(t) {
    return A(t, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(t) {
    return A(t, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(t) {
    return A(t, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(t) {
    return A(t, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(t) {
    return A(t, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(t) {
    return A(t, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(t) {
    return A(t, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(t) {
    return A(t, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(t) {
    return A(t, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(t) {
    return A(t, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(t) {
    return A(t, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(t) {
    return A(t, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(t) {
    return A(t, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(t) {
    return A(t, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(t) {
    return A(t, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(t) {
    return A(t, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(t) {
    return A(t, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(t) {
    return A(t, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(t) {
    return A(t, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(t) {
    return A(t, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(t) {
    return A(t, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(t) {
    return A(t, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(t) {
    return A(t, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(t) {
    return A(t, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(t) {
    return A(t, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(t) {
    return new nt(et, "address", t);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(t) {
    return new nt(et, "bool", !!t);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(t) {
    return new nt(et, "bytes", t);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(t) {
    return new nt(et, "string", t);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(t) {
    return new nt(et, "overrides", Object.assign({}, t));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(t) {
    return t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === On;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(t, e) {
    if (nt.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
Ot = new WeakMap();
let B = nt;
class Cs extends ht {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let n = B.dereference(e, "string");
    try {
      n = Pt(n);
    } catch (s) {
      return this._throwError(s.message, e);
    }
    return t.writeValue(n);
  }
  decode(t) {
    return Pt(Yn(t.readValue(), 20));
  }
}
class Bs extends ht {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    l(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, n) {
    return this.coder.encode(e, n);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function cr(r, t, e) {
  let n = [];
  if (Array.isArray(e))
    n = e;
  else if (e && typeof e == "object") {
    let c = {};
    n = t.map((u) => {
      const f = u.localName;
      return w(f, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), w(!c[f], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), c[f] = !0, e[f];
    });
  } else
    p(!1, "invalid tuple value", "tuple", e);
  p(t.length === n.length, "types/value length mismatch", "tuple", e);
  let s = new ze(), i = new ze(), o = [];
  t.forEach((c, u) => {
    let f = n[u];
    if (c.dynamic) {
      let d = i.length;
      c.encode(i, f);
      let g = s.writeUpdatableValue();
      o.push((m) => {
        g(m + d);
      });
    } else
      c.encode(s, f);
  }), o.forEach((c) => {
    c(s.length);
  });
  let a = r.appendWriter(s);
  return a += r.appendWriter(i), a;
}
function ur(r, t) {
  let e = [], n = [], s = r.subReader(0);
  return t.forEach((i) => {
    let o = null;
    if (i.dynamic) {
      let a = r.readIndex(), c = s.subReader(a);
      try {
        o = i.decode(c);
      } catch (u) {
        if (Wt(u, "BUFFER_OVERRUN"))
          throw u;
        o = u, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (Wt(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    e.push(o), n.push(i.localName || null);
  }), we.fromItems(e, n);
}
class Fs extends ht {
  constructor(e, n, s) {
    const i = e.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || e.dynamic;
    super("array", i, s, o);
    l(this, "coder");
    l(this, "length");
    b(this, { coder: e, length: n });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(e);
    return n;
  }
  encode(e, n) {
    const s = B.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, e.writeValue(s.length)), Jn(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let o = [];
    for (let a = 0; a < s.length; a++)
      o.push(this.coder);
    return cr(e, o, s);
  }
  decode(e) {
    let n = this.length;
    n === -1 && (n = e.readIndex(), w(n * F <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: e.bytes, offset: n * F, length: e.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new Bs(this.coder));
    return ur(e, s);
  }
}
class Ls extends ht {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const n = B.dereference(e, "bool");
    return t.writeValue(n ? 1 : 0);
  }
  decode(t) {
    return !!t.readValue();
  }
}
class lr extends ht {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(t, e) {
    e = tt(e);
    let n = t.writeValue(e.length);
    return n += t.writeBytes(e), n;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class _s extends lr {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return R(super.decode(t));
  }
}
class $s extends ht {
  constructor(e, n) {
    let s = "bytes" + String(e);
    super(s, s, n, !1);
    l(this, "size");
    b(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, n) {
    let s = tt(B.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), e.writeBytes(s);
  }
  decode(e) {
    return R(e.readBytes(this.size));
  }
}
const Ds = new Uint8Array([]);
class Vs extends ht {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(Ds);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const Ms = BigInt(0), Gs = BigInt(1), Hs = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class zs extends ht {
  constructor(e, n, s) {
    const i = (n ? "int" : "uint") + e * 8;
    super(i, i, s, !1);
    l(this, "size");
    l(this, "signed");
    b(this, { size: e, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, n) {
    let s = wt(B.dereference(n, this.type)), i = ue(Hs, F * 8);
    if (this.signed) {
      let o = ue(i, this.size * 8 - 1);
      (s > o || s < -(o + Gs)) && this._throwError("value out-of-bounds", n), s = Xr(s, 8 * F);
    } else
      (s < Ms || s > ue(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return e.writeValue(s);
  }
  decode(e) {
    let n = ue(e.readValue(), this.size * 8);
    return this.signed && (n = Kr(n, this.size * 8)), n;
  }
}
class Js extends lr {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, Qn(B.dereference(e, "string")));
  }
  decode(t) {
    return rs(super.decode(t));
  }
}
class he extends ht {
  constructor(e, n) {
    let s = !1;
    const i = [];
    e.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    l(this, "coders");
    b(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((s) => {
      e.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const o = i.localName;
      return o && (s[o] || (s[o] = 0), s[o]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let o = s.localName;
      !o || n[o] !== 1 || (o === "length" && (o = "_length"), e[o] == null && (e[o] = e[i]));
    }), Object.freeze(e);
  }
  encode(e, n) {
    const s = B.dereference(n, "tuple");
    return cr(e, this.coders, s);
  }
  decode(e) {
    return ur(e, this.coders);
  }
}
function te(r) {
  return mt(Qn(r));
}
function _e(r, t) {
  return {
    address: Pt(r),
    storageKeys: t.map((e, n) => (p(ot(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
  };
}
function Ws(r) {
  if (Array.isArray(r))
    return r.map((e, n) => Array.isArray(e) ? (p(e.length === 2, "invalid slot set", `value[${n}]`, e), _e(e[0], e[1])) : (p(e != null && typeof e == "object", "invalid address-slot set", "value", r), _e(e.address, e.storageKeys)));
  p(r != null && typeof r == "object", "invalid access list", "value", r);
  const t = Object.keys(r).map((e) => {
    const n = r[e].reduce((s, i) => (s[i] = !0, s), {});
    return _e(e, Object.keys(n).sort());
  });
  return t.sort((e, n) => e.address.localeCompare(n.address)), t;
}
function L(r) {
  const t = /* @__PURE__ */ new Set();
  return r.forEach((e) => t.add(e)), Object.freeze(t);
}
const Ks = "external public payable override", Xs = L(Ks.split(" ")), fr = "constant external internal payable private public pure view override", Ys = L(fr.split(" ")), hr = "constructor error event fallback function receive struct", dr = L(hr.split(" ")), pr = "calldata memory storage payable indexed", Zs = L(pr.split(" ")), Qs = "tuple returns", qs = [hr, pr, Qs, fr].join(" "), js = L(qs.split(" ")), ti = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, ei = new RegExp("^(\\s*)"), ni = new RegExp("^([0-9]+)"), ri = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), gr = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), yr = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var U, J, se, Ke;
const Ne = class Ne {
  constructor(t) {
    T(this, se);
    T(this, U, void 0);
    T(this, J, void 0);
    N(this, U, 0), N(this, J, t.slice());
  }
  get offset() {
    return h(this, U);
  }
  get length() {
    return h(this, J).length - h(this, U);
  }
  clone() {
    return new Ne(h(this, J));
  }
  reset() {
    N(this, U, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(t) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !t.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(t) {
    if (this.peek().type !== t) {
      const e = this.peek();
      throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = v(this, se, Ke).call(this, h(this, U) + 1, t.match + 1);
    return N(this, U, t.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; h(this, U) < t.match - 1; ) {
      const n = this.peek().linkNext;
      e.push(v(this, se, Ke).call(this, h(this, U) + 1, n)), N(this, U, n);
    }
    return N(this, U, t.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (h(this, U) >= h(this, J).length)
      throw new Error("out-of-bounds");
    return h(this, J)[h(this, U)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(t) {
    const e = this.peekType("KEYWORD");
    return e != null && t.has(e) ? e : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(t) {
    if (this.length === 0)
      return null;
    const e = this.peek();
    return e.type === t ? e.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const t = this.peek();
    return fn(this, U)._++, t;
  }
  toString() {
    const t = [];
    for (let e = h(this, U); e < h(this, J).length; e++) {
      const n = h(this, J)[e];
      t.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
U = new WeakMap(), J = new WeakMap(), se = new WeakSet(), Ke = function(t = 0, e = 0) {
  return new Ne(h(this, J).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - t,
    linkBack: n.linkBack - t,
    linkNext: n.linkNext - t
  }))));
};
let K = Ne;
function bt(r) {
  const t = [], e = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(ei);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    t.push(c);
    let u = ti[o[0]] || "";
    if (u) {
      if (c.type = u, c.text = o[0], i++, u === "OPEN_PAREN")
        n.push(t.length - 1), s.push(t.length - 1);
      else if (u == "CLOSE_PAREN")
        n.length === 0 && e("no matching open bracket"), c.match = n.pop(), t[c.match].match = t.length - 1, c.depth--, c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1;
      else if (u === "COMMA")
        c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1, s.push(t.length - 1);
      else if (u === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (u === "CLOSE_BRACKET") {
        let f = t.pop().text;
        if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
          const d = t.pop().text;
          f = d + f, t[t.length - 1].value = ft(d);
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += f;
      }
      continue;
    }
    if (a = o.match(ri), a) {
      if (c.text = a[1], i += c.text.length, js.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(yr)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (a = o.match(ni), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new K(t.map((o) => Object.freeze(o)));
}
function vn(r, t) {
  let e = [];
  for (const n in t.keys())
    r.has(n) && e.push(n);
  if (e.length > 1)
    throw new Error(`conflicting types: ${e.join(", ")}`);
}
function Oe(r, t) {
  if (t.peekKeyword(dr)) {
    const e = t.pop().text;
    if (e !== r)
      throw new Error(`expected ${r}, got ${e}`);
  }
  return t.popType("ID");
}
function lt(r, t) {
  const e = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || t && !t.has(n))
      break;
    if (r.pop(), e.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    e.add(n);
  }
  return Object.freeze(e);
}
function mr(r) {
  let t = lt(r, Ys);
  return vn(t, L("constant payable nonpayable".split(" "))), vn(t, L("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
}
function ct(r, t) {
  return r.popParams().map((e) => S.from(e, t));
}
function wr(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return wt(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Rt(r) {
  if (r.length)
    throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
}
const si = new RegExp(/^(.*)\[([0-9]*)\]$/);
function Pn(r) {
  const t = r.match(yr);
  if (p(t, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (t[2]) {
    const e = parseInt(t[2]);
    p(e !== 0 && e <= 32, "invalid bytes length", "type", r);
  } else if (t[3]) {
    const e = parseInt(t[3]);
    p(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const P = {}, D = Symbol.for("_ethers_internal"), Rn = "_ParamTypeInternal", In = "_ErrorInternal", Un = "_EventInternal", Sn = "_ConstructorInternal", Cn = "_FallbackInternal", Bn = "_FunctionInternal", Fn = "_StructInternal";
var Gt, ge;
const H = class H {
  /**
   *  @private
   */
  constructor(t, e, n, s, i, o, a, c) {
    T(this, Gt);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    l(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    l(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    l(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    l(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    l(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    l(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    l(this, "arrayChildren");
    if (je(t, P, "ParamType"), Object.defineProperty(this, D, { value: Rn }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    b(this, {
      name: e,
      type: n,
      baseType: s,
      indexed: i,
      components: o,
      arrayLength: a,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(t)))), JSON.stringify(s);
    }
    let e = "";
    return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((n) => n.format(t)).join(t === "full" ? ", " : ",") + ")" : e += this.type, t !== "sighash" && (this.indexed === !0 && (e += " indexed"), t === "full" && this.name && (e += " " + this.name)), e;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(t, e) {
    if (this.isArray()) {
      if (!Array.isArray(t))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s) => n.arrayChildren.walk(s, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(t))
        throw new Error("invalid tuple value");
      if (t.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s, i) => n.components[i].walk(s, e));
    }
    return e(this.type, t);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(t, e) {
    const n = [], s = [t];
    return v(this, Gt, ge).call(this, n, t, e, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(t, e) {
    if (H.isParamType(t))
      return t;
    if (typeof t == "string")
      try {
        return H.from(bt(t), e);
      } catch {
        p(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof K) {
      let a = "", c = "", u = null;
      lt(t, L(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", u = t.popParams().map((k) => H.from(k)), a = `tuple(${u.map((k) => k.format()).join(",")})`) : (a = Pn(t.popType("TYPE")), c = a);
      let f = null, d = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const k = t.pop();
        f = new H(P, "", a, c, null, u, d, f), d = k.value, a += k.text, c = "array", u = null;
      }
      let g = null;
      if (lt(t, Zs).has("indexed")) {
        if (!e)
          throw new Error("");
        g = !0;
      }
      const E = t.peekType("ID") ? t.pop().text : "";
      if (t.length)
        throw new Error("leftover tokens");
      return new H(P, E, a, c, g, u, d, f);
    }
    const n = t.name;
    p(!n || typeof n == "string" && n.match(gr), "invalid name", "obj.name", n);
    let s = t.indexed;
    s != null && (p(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
    let i = t.type, o = i.match(si);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = H.from({
        type: o[1],
        components: t.components
      });
      return new H(P, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = t.components != null ? t.components.map((u) => H.from(u)) : null;
      return new H(P, n || "", i, "tuple", s, a, null, null);
    }
    return i = Pn(t.type), new H(P, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(t) {
    return t && t[D] === Rn;
  }
};
Gt = new WeakSet(), ge = function(t, e, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(e))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && e.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const o = this.arrayChildren, a = e.slice();
    a.forEach((c, u) => {
      var f;
      v(f = o, Gt, ge).call(f, t, c, n, (d) => {
        a[u] = d;
      });
    }), s(a);
    return;
  }
  if (this.isTuple()) {
    const o = this.components;
    let a;
    if (Array.isArray(e))
      a = e.slice();
    else {
      if (e == null || typeof e != "object")
        throw new Error("invalid tuple value");
      a = o.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in e))
          throw new Error(`missing value for component ${c.name}`);
        return e[c.name];
      });
    }
    if (a.length !== this.components.length)
      throw new Error("array is wrong length");
    a.forEach((c, u) => {
      var f;
      v(f = o[u], Gt, ge).call(f, t, c, n, (d) => {
        a[u] = d;
      });
    }), s(a);
    return;
  }
  const i = n(this.type, e);
  i.then ? t.push(async function() {
    s(await i);
  }()) : s(i);
};
let S = H;
class It {
  /**
   *  @private
   */
  constructor(t, e, n) {
    /**
     *  The type of the fragment.
     */
    l(this, "type");
    /**
     *  The inputs for the fragment.
     */
    l(this, "inputs");
    je(t, P, "Fragment"), n = Object.freeze(n.slice()), b(this, { type: e, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(t) {
    if (typeof t == "string") {
      try {
        It.from(JSON.parse(t));
      } catch {
      }
      return It.from(bt(t));
    }
    if (t instanceof K)
      switch (t.peekKeyword(dr)) {
        case "constructor":
          return at.from(t);
        case "error":
          return $.from(t);
        case "event":
          return q.from(t);
        case "fallback":
        case "receive":
          return st.from(t);
        case "function":
          return j.from(t);
        case "struct":
          return vt.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return at.from(t);
        case "error":
          return $.from(t);
        case "event":
          return q.from(t);
        case "fallback":
        case "receive":
          return st.from(t);
        case "function":
          return j.from(t);
        case "struct":
          return vt.from(t);
      }
      w(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    p(!1, "unsupported frgament object", "obj", t);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(t) {
    return at.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(t) {
    return $.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(t) {
    return q.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(t) {
    return j.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(t) {
    return vt.isFragment(t);
  }
}
class ve extends It {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, n, i);
    /**
     *  The name of the fragment.
     */
    l(this, "name");
    p(typeof s == "string" && s.match(gr), "invalid identifier", "name", s), i = Object.freeze(i.slice()), b(this, { name: s });
  }
}
function ee(r, t) {
  return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class $ extends ve {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "error", e, n), Object.defineProperty(this, D, { value: In });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return te(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
    const e = [];
    return t !== "sighash" && e.push("error"), e.push(this.name + ee(t, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(t) {
    if ($.isFragment(t))
      return t;
    if (typeof t == "string")
      return $.from(bt(t));
    if (t instanceof K) {
      const e = Oe("error", t), n = ct(t);
      return Rt(t), new $(P, e, n);
    }
    return new $(P, t.name, t.inputs ? t.inputs.map(S.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(t) {
    return t && t[D] === In;
  }
}
class q extends ve {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    l(this, "anonymous");
    Object.defineProperty(this, D, { value: Un }), b(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return te(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("event"), n.push(this.name + ee(e, this.inputs)), e !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, n) {
    return n = (n || []).map((i) => S.from(i)), new q(P, e, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(e) {
    if (q.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return q.from(bt(e));
      } catch {
        p(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof K) {
      const n = Oe("event", e), s = ct(e, !0), i = !!lt(e, L(["anonymous"])).has("anonymous");
      return Rt(e), new q(P, n, s, i);
    }
    return new q(P, e.name, e.inputs ? e.inputs.map((n) => S.from(n, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[D] === Un;
  }
}
class at extends It {
  /**
   *  @private
   */
  constructor(e, n, s, i, o) {
    super(e, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    l(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    l(this, "gas");
    Object.defineProperty(this, D, { value: Sn }), b(this, { payable: i, gas: o });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(e) {
    if (w(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), e === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [`constructor${ee(e, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(e) {
    if (at.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return at.from(bt(e));
      } catch {
        p(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof K) {
      lt(e, L(["constructor"]));
      const n = ct(e), s = !!lt(e, Xs).has("payable"), i = wr(e);
      return Rt(e), new at(P, "constructor", n, s, i);
    }
    return new at(P, "constructor", e.inputs ? e.inputs.map(S.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[D] === Sn;
  }
}
class st extends It {
  constructor(e, n, s) {
    super(e, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    l(this, "payable");
    Object.defineProperty(this, D, { value: Cn }), b(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(e) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(e) {
    if (st.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return st.from(bt(e));
      } catch {
        p(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof K) {
      const n = e.toString(), s = e.peekKeyword(L(["fallback", "receive"]));
      if (p(s, "type must be fallback or receive", "obj", n), e.popKeyword(L(["fallback", "receive"])) === "receive") {
        const c = ct(e);
        return p(c.length === 0, "receive cannot have arguments", "obj.inputs", c), lt(e, L(["payable"])), Rt(e), new st(P, [], !0);
      }
      let o = ct(e);
      o.length ? p(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [S.from("bytes")];
      const a = mr(e);
      if (p(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), lt(e, L(["returns"])).has("returns")) {
        const c = ct(e);
        p(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((u) => u.format("minimal")).join(", "));
      }
      return Rt(e), new st(P, o, a === "payable");
    }
    if (e.type === "receive")
      return new st(P, [], !0);
    if (e.type === "fallback") {
      const n = [S.from("bytes")], s = e.stateMutability === "payable";
      return new st(P, n, s);
    }
    p(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[D] === Cn;
  }
}
class j extends ve {
  /**
   *  @private
   */
  constructor(e, n, s, i, o, a) {
    super(e, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    l(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    l(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    l(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    l(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    l(this, "gas");
    Object.defineProperty(this, D, { value: Bn }), o = Object.freeze(o.slice()), b(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return te(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("function"), n.push(this.name + ee(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(ee(e, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, n) {
    return n = (n || []).map((i) => S.from(i)), new j(P, e, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (j.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return j.from(bt(e));
      } catch {
        p(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof K) {
      const s = Oe("function", e), i = ct(e), o = mr(e);
      let a = [];
      lt(e, L(["returns"])).has("returns") && (a = ct(e));
      const c = wr(e);
      return Rt(e), new j(P, s, o, i, a, c);
    }
    let n = e.stateMutability;
    return n == null && (n = "payable", typeof e.constant == "boolean" ? (n = "view", e.constant || (n = "payable", typeof e.payable == "boolean" && !e.payable && (n = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (n = "nonpayable")), new j(P, e.name, n, e.inputs ? e.inputs.map(S.from) : [], e.outputs ? e.outputs.map(S.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[D] === Bn;
  }
}
class vt extends ve {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "struct", e, n), Object.defineProperty(this, D, { value: Fn });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(t) {
    if (typeof t == "string")
      try {
        return vt.from(bt(t));
      } catch {
        p(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof K) {
      const e = Oe("struct", t), n = ct(t);
      return Rt(t), new vt(P, e, n);
    }
    return new vt(P, t.name, t.inputs ? t.inputs.map(S.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(t) {
    return t && t[D] === Fn;
  }
}
const X = /* @__PURE__ */ new Map();
X.set(0, "GENERIC_PANIC");
X.set(1, "ASSERT_FALSE");
X.set(17, "OVERFLOW");
X.set(18, "DIVIDE_BY_ZERO");
X.set(33, "ENUM_RANGE_ERROR");
X.set(34, "BAD_STORAGE_DATA");
X.set(49, "STACK_UNDERFLOW");
X.set(50, "ARRAY_RANGE_ERROR");
X.set(65, "OUT_OF_MEMORY");
X.set(81, "UNINITIALIZED_FUNCTION_CALL");
const ii = new RegExp(/^bytes([0-9]*)$/), oi = new RegExp(/^(u?int)([0-9]*)$/);
let $e = null, Ln = 1024;
function ai(r, t, e, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (e) {
    s = "execution reverted";
    const u = ut(e);
    if (e = R(e), u.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (u.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (R(u.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], u.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (R(u.slice(0, 4)) === "0x4e487b71")
      try {
        const f = Number(n.decode(["uint256"], u.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [f]
        }, i = `Panic due to ${X.get(f) || "UNKNOWN"}(${f})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: t.to ? Pt(t.to) : null,
    data: t.data || "0x"
  };
  return t.from && (c.from = Pt(t.from)), qt(s, "CALL_EXCEPTION", {
    action: r,
    data: e,
    reason: i,
    transaction: c,
    invocation: o,
    revert: a
  });
}
var gt, Ft;
const Ae = class Ae {
  constructor() {
    T(this, gt);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(t) {
    const e = t.map((s) => v(this, gt, Ft).call(this, S.from(s)));
    return new he(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(t, e) {
    Jn(e.length, t.length, "types/values length mismatch");
    const n = t.map((o) => v(this, gt, Ft).call(this, S.from(o))), s = new he(n, "_"), i = new ze();
    return s.encode(i, e), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(t, e, n) {
    const s = t.map((o) => v(this, gt, Ft).call(this, S.from(o)));
    return new he(s, "_").decode(new Je(e, n, Ln));
  }
  static _setDefaultMaxInflation(t) {
    p(typeof t == "number" && Number.isInteger(t), "invalid defaultMaxInflation factor", "value", t), Ln = t;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return $e == null && ($e = new Ae()), $e;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(t, e, n) {
    return ai(t, e, n, Ae.defaultAbiCoder());
  }
};
gt = new WeakSet(), Ft = function(t) {
  if (t.isArray())
    return new Fs(v(this, gt, Ft).call(this, t.arrayChildren), t.arrayLength, t.name);
  if (t.isTuple())
    return new he(t.components.map((n) => v(this, gt, Ft).call(this, n)), t.name);
  switch (t.baseType) {
    case "address":
      return new Cs(t.name);
    case "bool":
      return new Ls(t.name);
    case "string":
      return new Js(t.name);
    case "bytes":
      return new _s(t.name);
    case "":
      return new Vs(t.name);
  }
  let e = t.type.match(oi);
  if (e) {
    let n = parseInt(e[2] || "256");
    return p(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new zs(n / 8, e[1] === "int", t.name);
  }
  if (e = t.type.match(ii), e) {
    let n = parseInt(e[1]);
    return p(n !== 0 && n <= 32, "invalid bytes length", "param", t), new $s(n, t.name);
  }
  p(!1, "invalid type", "type", t.type);
};
let be = Ae;
class ci {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    l(this, "fragment");
    /**
     *  The name of the Event.
     */
    l(this, "name");
    /**
     *  The full Event signature.
     */
    l(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    l(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    l(this, "args");
    const s = t.name, i = t.format();
    b(this, {
      fragment: t,
      name: s,
      signature: i,
      topic: e,
      args: n
    });
  }
}
class ui {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    l(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    l(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    l(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    l(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    l(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    l(this, "value");
    const i = t.name, o = t.format();
    b(this, {
      fragment: t,
      name: i,
      args: n,
      signature: o,
      selector: e,
      value: s
    });
  }
}
class li {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment.
     */
    l(this, "fragment");
    /**
     *  The name of the Error.
     */
    l(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    l(this, "args");
    /**
     *  The full Error signature.
     */
    l(this, "signature");
    /**
     *  The selector for the Error.
     */
    l(this, "selector");
    const s = t.name, i = t.format();
    b(this, {
      fragment: t,
      name: s,
      args: n,
      signature: i,
      selector: e
    });
  }
}
class _n {
  /**
   *  @_ignore:
   */
  constructor(t) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    l(this, "hash");
    /**
     *  @_ignore:
     */
    l(this, "_isIndexed");
    b(this, { hash: t, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const $n = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, Dn = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let t = "unknown panic code";
      return r >= 0 && r <= 255 && $n[r.toString()] && (t = $n[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
    }
  }
};
var Y, Z, Q, C, Ht, ye, zt, me;
const xt = class xt {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(t) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    T(this, Ht);
    // Find an event definition by any means necessary (unless it is ambiguous)
    T(this, zt);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    l(this, "fragments");
    /**
     *  The Contract constructor.
     */
    l(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    l(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    l(this, "receive");
    T(this, Y, void 0);
    T(this, Z, void 0);
    T(this, Q, void 0);
    //    #structs: Map<string, StructFragment>;
    T(this, C, void 0);
    let e = [];
    typeof t == "string" ? e = JSON.parse(t) : e = t, N(this, Q, /* @__PURE__ */ new Map()), N(this, Y, /* @__PURE__ */ new Map()), N(this, Z, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of e)
      try {
        n.push(It.from(o));
      } catch (a) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`, a.message);
      }
    b(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    N(this, C, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          b(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (p(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = h(this, Q);
          break;
        case "event":
          c = h(this, Z);
          break;
        case "error":
          c = h(this, Y);
          break;
        default:
          return;
      }
      const u = o.format();
      c.has(u) || c.set(u, o);
    }), this.deploy || b(this, {
      deploy: at.from("constructor()")
    }), b(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(t) {
    const e = t ? "minimal" : "full";
    return this.fragments.map((s) => s.format(e));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const t = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(t.map((e) => JSON.parse(e)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return be.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(t) {
    const e = v(this, Ht, ye).call(this, t, null, !1);
    return p(e, "no matching function", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(t) {
    return !!v(this, Ht, ye).call(this, t, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(t, e) {
    return v(this, Ht, ye).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(t) {
    const e = Array.from(h(this, Q).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(h(this, Q).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(t) {
    const e = v(this, zt, me).call(this, t, null, !1);
    return p(e, "no matching event", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(t) {
    return !!v(this, zt, me).call(this, t, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(t, e) {
    return v(this, zt, me).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(t) {
    const e = Array.from(h(this, Z).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(h(this, Z).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(t, e) {
    if (ot(t)) {
      const s = t.toLowerCase();
      if (Dn[s])
        return $.from(Dn[s].signature);
      for (const i of h(this, Y).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of h(this, Y))
        i.split(
          "("
          /* fix:) */
        )[0] === t && s.push(o);
      if (s.length === 0)
        return t === "Error" ? $.from("error Error(string)") : t === "Panic" ? $.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        p(!1, `ambiguous error description (i.e. ${i})`, "name", t);
      }
      return s[0];
    }
    if (t = $.from(t).format(), t === "Error(string)")
      return $.from("error Error(string)");
    if (t === "Panic(uint256)")
      return $.from("error Panic(uint256)");
    const n = h(this, Y).get(t);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(t) {
    const e = Array.from(h(this, Y).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(h(this, Y).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(t, e) {
    return h(this, C).decode(t, e);
  }
  _encodeParams(t, e) {
    return h(this, C).encode(t, e);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      p(n, "unknown error", "fragment", t), t = n;
    }
    return p(Ct(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, Ct(e, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      p(n, "unknown error", "fragment", t), t = n;
    }
    return Dt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      p(n, "unknown function", "fragment", t), t = n;
    }
    return p(Ct(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, Ct(e, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      p(n, "unknown function", "fragment", t), t = n;
    }
    return Dt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const i = this.getFunction(t);
      p(i, "unknown function", "fragment", t), t = i;
    }
    let n = "invalid length for result data";
    const s = tt(e);
    if (s.length % 32 === 0)
      try {
        return h(this, C).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    w(!1, n, "BAD_DATA", {
      value: R(s),
      info: { method: t.name, signature: t.format() }
    });
  }
  makeError(t, e) {
    const n = ut(t, "data"), s = be.getBuiltinCallException("call", e, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const a = R(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const u = h(this, C).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: u
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(e);
    return o && (s.invocation = {
      method: o.name,
      signature: o.signature,
      args: o.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      p(n, "unknown function", "fragment", t), t = n;
    }
    return R(h(this, C).encode(t.outputs, e || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(t, e) {
    if (typeof t == "string") {
      const i = this.getEvent(t);
      p(i, "unknown event", "eventFragment", t), t = i;
    }
    w(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", { count: e.length, expectedCount: t.inputs.length });
    const n = [];
    t.anonymous || n.push(t.topicHash);
    const s = (i, o) => i.type === "string" ? te(o) : i.type === "bytes" ? mt(R(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = Yn(o) : i.type.match(/^bytes/) ? o = Wr(o, 32) : i.type === "address" && h(this, C).encode(["address"], [o]), Jr(R(o), 32));
    for (e.forEach((i, o) => {
      const a = t.inputs[o];
      if (!a.indexed) {
        p(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
        return;
      }
      i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? p(!1, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(t, e) {
    if (typeof t == "string") {
      const o = this.getEvent(t);
      p(o, "unknown event", "eventFragment", t), t = o;
    }
    const n = [], s = [], i = [];
    return t.anonymous || n.push(t.topicHash), p(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((o, a) => {
      const c = e[a];
      if (o.indexed)
        if (o.type === "string")
          n.push(te(c));
        else if (o.type === "bytes")
          n.push(mt(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(h(this, C).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: h(this, C).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(t, e, n) {
    if (typeof t == "string") {
      const m = this.getEvent(t);
      p(m, "unknown event", "eventFragment", t), t = m;
    }
    if (n != null && !t.anonymous) {
      const m = t.topicHash;
      p(ot(n[0], 32) && n[0].toLowerCase() === m, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    t.inputs.forEach((m, E) => {
      m.indexed ? m.type === "string" || m.type === "bytes" || m.baseType === "tuple" || m.baseType === "array" ? (s.push(S.from({ type: "bytes32", name: m.name })), o.push(!0)) : (s.push(m), o.push(!1)) : (i.push(m), o.push(!1));
    });
    const a = n != null ? h(this, C).decode(s, Dt(n)) : null, c = h(this, C).decode(i, e, !0), u = [], f = [];
    let d = 0, g = 0;
    return t.inputs.forEach((m, E) => {
      let k = null;
      if (m.indexed)
        if (a == null)
          k = new _n(null);
        else if (o[E])
          k = new _n(a[g++]);
        else
          try {
            k = a[g++];
          } catch (O) {
            k = O;
          }
      else
        try {
          k = c[d++];
        } catch (O) {
          k = O;
        }
      u.push(k), f.push(m.name || null);
    }), we.fromItems(u, f);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(t) {
    const e = ut(t.data, "tx.data"), n = wt(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(R(e.slice(0, 4)));
    if (!s)
      return null;
    const i = h(this, C).decode(s.inputs, e.slice(4));
    return new ui(s, s.selector, i, n);
  }
  parseCallResult(t) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(t) {
    const e = this.getEvent(t.topics[0]);
    return !e || e.anonymous ? null : new ci(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(t) {
    const e = R(t), n = this.getError(Ct(e, 0, 4));
    if (!n)
      return null;
    const s = h(this, C).decode(n.inputs, Ct(e, 4));
    return new li(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(t) {
    return t instanceof xt ? t : typeof t == "string" ? new xt(JSON.parse(t)) : typeof t.formatJson == "function" ? new xt(t.formatJson()) : typeof t.format == "function" ? new xt(t.format("json")) : new xt(t);
  }
};
Y = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), C = new WeakMap(), Ht = new WeakSet(), ye = function(t, e, n) {
  if (ot(t)) {
    const i = t.toLowerCase();
    for (const o of h(this, Q).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of h(this, Q))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      const o = e.length > 0 ? e[e.length - 1] : null;
      let a = e.length, c = !0;
      B.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs.length;
        f !== a && (!c || f !== a - 1) && i.splice(u, 1);
      }
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs;
        for (let d = 0; d < e.length; d++)
          if (B.isTyped(e[d])) {
            if (d >= f.length) {
              if (e[d].type === "overrides")
                continue;
              i.splice(u, 1);
              break;
            }
            if (e[d].type !== f[d].baseType) {
              i.splice(u, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && e && e.length !== i[0].inputs.length) {
      const o = e[e.length - 1];
      (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      p(!1, `ambiguous function description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = h(this, Q).get(j.from(t).format());
  return s || null;
}, zt = new WeakSet(), me = function(t, e, n) {
  if (ot(t)) {
    const i = t.toLowerCase();
    for (const o of h(this, Z).values())
      if (i === o.topicHash)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of h(this, Z))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < e.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < e.length; c++)
          if (B.isTyped(e[c]) && e[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      p(!1, `ambiguous event description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = h(this, Z).get(q.from(t).format());
  return s || null;
};
let ne = xt;
const br = BigInt(0);
function z(r) {
  return r == null ? null : r.toString();
}
function fi(r) {
  const t = {};
  r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = R(r.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of e)
    !(s in r) || r[s] == null || (t[s] = wt(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (t[s] = ft(r[s], `request.${s}`));
  return r.accessList && (t.accessList = Ws(r.accessList)), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (t.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (t.kzg = r.kzg), "blobs" in r && r.blobs && (t.blobs = r.blobs.map((s) => zr(s) ? R(s) : Object.assign({}, s))), t;
}
class Pe {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    l(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    l(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    l(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    l(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    l(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    l(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    l(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    l(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    l(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    l(this, "transactionIndex");
    this.provider = e;
    const n = Object.freeze(t.topics.slice());
    b(this, {
      transactionHash: t.transactionHash,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      removed: t.removed,
      address: t.address,
      data: t.data,
      topics: n,
      index: t.index,
      transactionIndex: t.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: t, blockHash: e, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: u } = this;
    return {
      _type: "log",
      address: t,
      blockHash: e,
      blockNumber: n,
      data: s,
      index: i,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: u
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    return w(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.transactionHash);
    return w(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const t = await this.provider.getTransactionReceipt(this.transactionHash);
    return w(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return di(this);
  }
}
var ie;
class hi {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    l(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    l(this, "to");
    /**
     *  The sender of the transaction.
     */
    l(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    l(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    l(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    l(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    l(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    l(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    l(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    l(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    l(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    l(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    l(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    l(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    l(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    l(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    l(this, "root");
    T(this, ie, void 0);
    N(this, ie, Object.freeze(t.logs.map((s) => new Pe(s, e))));
    let n = br;
    t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), b(this, {
      provider: e,
      to: t.to,
      from: t.from,
      contractAddress: t.contractAddress,
      hash: t.hash,
      index: t.index,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      logsBloom: t.logsBloom,
      gasUsed: t.gasUsed,
      cumulativeGasUsed: t.cumulativeGasUsed,
      blobGasUsed: t.blobGasUsed,
      gasPrice: n,
      blobGasPrice: t.blobGasPrice,
      type: t.type,
      //byzantium: tx.byzantium,
      status: t.status,
      root: t.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return h(this, ie);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: t,
      from: e,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: u,
      //byzantium, 
      status: f,
      root: d
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: z(this.cumulativeGasUsed),
      from: e,
      gasPrice: z(this.gasPrice),
      blobGasUsed: z(this.blobGasUsed),
      blobGasPrice: z(this.blobGasPrice),
      gasUsed: z(this.gasUsed),
      hash: s,
      index: i,
      logs: u,
      logsBloom: c,
      root: d,
      status: f,
      to: t
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.length ? { value: this.logs[t++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.hash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return xr(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(t) {
    return w(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Er(this, t);
  }
}
ie = new WeakMap();
var yt;
const cn = class cn {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    l(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    l(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    l(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    l(this, "index");
    /**
     *  The transaction hash.
     */
    l(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    l(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    l(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    l(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    l(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    l(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    l(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    l(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    l(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    l(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    l(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    l(this, "value");
    /**
     *  The chain ID.
     */
    l(this, "chainId");
    /**
     *  The signature.
     */
    l(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    l(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    l(this, "blobVersionedHashes");
    T(this, yt, void 0);
    this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.maxFeePerBlobGas = t.maxFeePerBlobGas != null ? t.maxFeePerBlobGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, this.blobVersionedHashes = t.blobVersionedHashes != null ? t.blobVersionedHashes : null, N(this, yt, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: t, blockHash: e, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: u, signature: f, accessList: d, blobVersionedHashes: g } = this;
    return {
      _type: "TransactionResponse",
      accessList: d,
      blockNumber: t,
      blockHash: e,
      blobVersionedHashes: g,
      chainId: z(this.chainId),
      data: u,
      from: a,
      gasLimit: z(this.gasLimit),
      gasPrice: z(this.gasPrice),
      hash: s,
      maxFeePerGas: z(this.maxFeePerGas),
      maxPriorityFeePerGas: z(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: z(this.maxFeePerBlobGas),
      nonce: c,
      signature: f,
      to: o,
      index: n,
      type: i,
      value: z(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let t = this.blockNumber;
    if (t == null) {
      const n = await this.getTransaction();
      n && (t = n.blockNumber);
    }
    if (t == null)
      return null;
    const e = this.provider.getBlock(t);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: e, blockNumber: n } = await Ge({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return e == null || e.blockNumber == null ? 0 : n - e.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, e) {
    const n = t ?? 1, s = e ?? 0;
    let i = h(this, yt), o = -1, a = i === -1;
    const c = async () => {
      if (a)
        return null;
      const { blockNumber: g, nonce: m } = await Ge({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (m < this.nonce) {
        i = g;
        return;
      }
      if (a)
        return null;
      const E = await this.getTransaction();
      if (!(E && E.blockNumber != null))
        for (o === -1 && (o = i - 3, o < h(this, yt) && (o = h(this, yt))); o <= g; ) {
          if (a)
            return null;
          const k = await this.provider.getBlock(o, !0);
          if (k == null)
            return;
          for (const O of k)
            if (O === this.hash)
              return;
          for (let O = 0; O < k.length; O++) {
            const x = await k.getTransaction(O);
            if (x.from === this.from && x.nonce === this.nonce) {
              if (a)
                return null;
              const I = await this.provider.getTransactionReceipt(x.hash);
              if (I == null || g - I.blockNumber + 1 < n)
                return;
              let G = "replaced";
              x.data === this.data && x.to === this.to && x.value === this.value ? G = "repriced" : x.data === "0x" && x.from === x.to && x.value === br && (G = "cancelled"), w(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: G === "replaced" || G === "cancelled",
                reason: G,
                replacement: x.replaceableTransaction(i),
                hash: x.hash,
                receipt: I
              });
            }
          }
          o++;
        }
    }, u = (g) => {
      if (g == null || g.status !== 0)
        return g;
      w(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: g.to,
          from: g.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: g
      });
    }, f = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return u(f);
    if (f) {
      if (await f.confirmations() >= n)
        return u(f);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((g, m) => {
      const E = [], k = () => {
        E.forEach((x) => x());
      };
      if (E.push(() => {
        a = !0;
      }), s > 0) {
        const x = setTimeout(() => {
          k(), m(qt("wait for transaction timeout", "TIMEOUT"));
        }, s);
        E.push(() => {
          clearTimeout(x);
        });
      }
      const O = async (x) => {
        if (await x.confirmations() >= n) {
          k();
          try {
            g(u(x));
          } catch (I) {
            m(I);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, O);
      }), this.provider.on(this.hash, O), i >= 0) {
        const x = async () => {
          try {
            await c();
          } catch (I) {
            if (Wt(I, "TRANSACTION_REPLACED")) {
              k(), m(I);
              return;
            }
          }
          a || this.provider.once("block", x);
        };
        E.push(() => {
          this.provider.off("block", x);
        }), this.provider.once("block", x);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
   *  transaction. See [[link-eip-4844]].
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return w(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), xr(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(t) {
    return w(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), w(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Er(this, t);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(t) {
    p(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
    const e = new cn(this, this.provider);
    return N(e, yt, t), e;
  }
};
yt = new WeakMap();
let Xe = cn;
function Er(r, t) {
  return { orphan: "reorder-transaction", tx: r, other: t };
}
function xr(r) {
  return { orphan: "drop-transaction", tx: r };
}
function di(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class nn extends Pe {
  /**
   * @_ignore:
   */
  constructor(e, n, s) {
    super(e, e.provider);
    /**
     *  The Contract Interface.
     */
    l(this, "interface");
    /**
     *  The matching event.
     */
    l(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    l(this, "args");
    const i = n.decodeEventLog(s, e.data, e.topics);
    b(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class Nr extends Pe {
  /**
   * @_ignore:
   */
  constructor(e, n) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    l(this, "error");
    b(this, { error: n });
  }
}
var Jt;
class pi extends hi {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    T(this, Jt, void 0);
    N(this, Jt, e);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((e) => {
      const n = e.topics.length ? h(this, Jt).getEvent(e.topics[0]) : null;
      if (n)
        try {
          return new nn(e, h(this, Jt), n);
        } catch (s) {
          return new Nr(e, s);
        }
      return e;
    });
  }
}
Jt = new WeakMap();
var oe;
class rn extends Xe {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    T(this, oe, void 0);
    N(this, oe, e);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e, n) {
    const s = await super.wait(e, n);
    return s == null ? null : new pi(h(this, oe), this.provider, s);
  }
}
oe = new WeakMap();
class Ar extends Qr {
  /**
   *  @_event:
   */
  constructor(e, n, s, i) {
    super(e, n, s);
    /**
     *  The log with no matching events.
     */
    l(this, "log");
    b(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class gi extends Ar {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s, i) {
    super(t, e, n, new nn(i, t.interface, s));
    const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
    b(this, { args: o, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const Vn = BigInt(0);
function kr(r) {
  return r && typeof r.call == "function";
}
function Tr(r) {
  return r && typeof r.estimateGas == "function";
}
function Re(r) {
  return r && typeof r.resolveName == "function";
}
function Or(r) {
  return r && typeof r.sendTransaction == "function";
}
function vr(r) {
  if (r != null) {
    if (Re(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var ae;
class yi {
  constructor(t, e, n) {
    T(this, ae, void 0);
    l(this, "fragment");
    if (b(this, { fragment: e }), e.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = Ut(t.runner, "resolveName"), i = Re(s) ? s : null;
    N(this, ae, async function() {
      const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (f, d) => f === "address" ? Array.isArray(d) ? Promise.all(d.map((g) => jt(g, i))) : jt(d, i) : d)));
      return t.interface.encodeFilterTopics(e, o);
    }());
  }
  getTopicFilter() {
    return h(this, ae);
  }
}
ae = new WeakMap();
function Ut(r, t) {
  return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
}
function Nt(r) {
  return r == null ? null : r.provider || null;
}
async function Pr(r, t) {
  const e = B.dereference(r, "overrides");
  p(typeof e == "object", "invalid overrides parameter", "overrides", r);
  const n = fi(e);
  return p(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), p(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function mi(r, t, e) {
  const n = Ut(r, "resolveName"), s = Re(n) ? n : null;
  return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = B.dereference(c, a), a === "address" ? jt(c, s) : c))));
}
function wi(r) {
  const t = async function(o) {
    const a = await Pr(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await jt(a.from, vr(r.runner)));
    const c = r.interface, u = wt(a.value || Vn, "overrides.value") === Vn, f = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !f && !u && p(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), p(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data);
    const d = c.receive || c.fallback && c.fallback.payable;
    return p(d || u, "cannot send value to non-payable fallback", "overrides.value", a.value), p(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, e = async function(o) {
    const a = Ut(r.runner, "call");
    w(kr(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await t(o);
    try {
      return await a.call(c);
    } catch (u) {
      throw zn(u) && u.data ? r.interface.makeError(u.data, c) : u;
    }
  }, n = async function(o) {
    const a = r.runner;
    w(Or(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await t(o)), u = Nt(r.runner);
    return new rn(r.interface, u, c);
  }, s = async function(o) {
    const a = Ut(r.runner, "estimateGas");
    return w(Tr(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await t(o));
  }, i = async (o) => await n(o);
  return b(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: t,
    send: n,
    staticCall: e
  }), i;
}
function bi(r, t) {
  const e = function(...u) {
    const f = r.interface.getFunction(t, u);
    return w(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: u }
    }), f;
  }, n = async function(...u) {
    const f = e(...u);
    let d = {};
    if (f.inputs.length + 1 === u.length && (d = await Pr(u.pop()), d.from && (d.from = await jt(d.from, vr(r.runner)))), f.inputs.length !== u.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const g = await mi(r.runner, f.inputs, u);
    return Object.assign({}, d, await Ge({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(f, g)
    }));
  }, s = async function(...u) {
    const f = await a(...u);
    return f.length === 1 ? f[0] : f;
  }, i = async function(...u) {
    const f = r.runner;
    w(Or(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const d = await f.sendTransaction(await n(...u)), g = Nt(r.runner);
    return new rn(r.interface, g, d);
  }, o = async function(...u) {
    const f = Ut(r.runner, "estimateGas");
    return w(Tr(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await n(...u));
  }, a = async function(...u) {
    const f = Ut(r.runner, "call");
    w(kr(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const d = await n(...u);
    let g = "0x";
    try {
      g = await f.call(d);
    } catch (E) {
      throw zn(E) && E.data ? r.interface.makeError(E.data, d) : E;
    }
    const m = e(...u);
    return r.interface.decodeFunctionResult(m, g);
  }, c = async (...u) => e(...u).constant ? await s(...u) : await i(...u);
  return b(c, {
    name: r.interface.getFunctionName(t),
    _contract: r,
    _key: t,
    getFragment: e,
    estimateGas: o,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: a
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const u = r.interface.getFunction(t);
      return w(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), u;
    }
  }), c;
}
function Ei(r, t) {
  const e = function(...s) {
    const i = r.interface.getEvent(t, s);
    return w(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: s }
    }), i;
  }, n = function(...s) {
    return new yi(r, e(...s), s);
  };
  return b(n, {
    name: r.interface.getEventName(t),
    _contract: r,
    _key: t,
    getFragment: e
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(t);
      return w(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), s;
    }
  }), n;
}
const Ee = Symbol.for("_ethersInternal_contract"), Rr = /* @__PURE__ */ new WeakMap();
function xi(r, t) {
  Rr.set(r[Ee], t);
}
function V(r) {
  return Rr.get(r[Ee]);
}
function Ni(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function sn(r, t) {
  let e, n = null;
  if (Array.isArray(t)) {
    const i = function(o) {
      if (ot(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return p(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else
    t === "*" ? e = [null] : typeof t == "string" ? ot(t, 32) ? e = [t] : (n = r.interface.getEvent(t), p(n, "unknown fragment", "event", t), e = [n.topicHash]) : Ni(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [n.topicHash]) : p(!1, "unknown event name", "event", t);
  e = e.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return i.toLowerCase();
  });
  const s = e.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: e };
}
async function Yt(r, t) {
  const { subs: e } = V(r);
  return e.get((await sn(r, t)).tag) || null;
}
async function Mn(r, t, e) {
  const n = Nt(r.runner);
  w(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: t });
  const { fragment: s, tag: i, topics: o } = await sn(r, e), { addr: a, subs: c } = V(r);
  let u = c.get(i);
  if (!u) {
    const d = { address: a || r, topics: o }, g = (O) => {
      let x = s;
      if (x == null)
        try {
          x = r.interface.getEvent(O.topics[0]);
        } catch {
        }
      if (x) {
        const I = x, G = s ? r.interface.decodeEventLog(s, O.data, O.topics) : [];
        Ze(r, e, G, (St) => new gi(r, St, e, I, O));
      } else
        Ze(r, e, [], (I) => new Ar(r, I, e, O));
    };
    let m = [];
    u = { tag: i, listeners: [], start: () => {
      m.length || m.push(n.on(d, g));
    }, stop: async () => {
      if (m.length == 0)
        return;
      let O = m;
      m = [], await Promise.all(O), n.off(d, g);
    } }, c.set(i, u);
  }
  return u;
}
let Ye = Promise.resolve();
async function Ai(r, t, e, n) {
  await Ye;
  const s = await Yt(r, t);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
    const c = Array.from(e);
    n && c.push(n(a ? null : o));
    try {
      o.call(r, ...c);
    } catch {
    }
    return !a;
  }), s.listeners.length === 0 && (s.stop(), V(r).subs.delete(s.tag)), i > 0;
}
async function Ze(r, t, e, n) {
  try {
    await Ye;
  } catch {
  }
  const s = Ai(r, t, e, n);
  return Ye = s, await s;
}
const de = ["then"];
var Pi;
const Qt = class Qt {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(t, e, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    l(this, "target");
    /**
     *  The contract Interface.
     */
    l(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    l(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    l(this, "filters");
    /**
     *  @_ignore:
     */
    l(this, Pi);
    /**
     *  The fallback or receive function if any.
     */
    l(this, "fallback");
    p(typeof t == "string" || ar(t), "invalid value for Contract target", "target", t), n == null && (n = null);
    const i = ne.from(e);
    b(this, { target: t, runner: n, interface: i }), Object.defineProperty(this, Ee, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const d = Nt(n);
      c = new rn(this.interface, d, s);
    }
    let u = /* @__PURE__ */ new Map();
    if (typeof t == "string")
      if (ot(t))
        a = t, o = Promise.resolve(t);
      else {
        const d = Ut(n, "resolveName");
        if (!Re(d))
          throw qt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = d.resolveName(t).then((g) => {
          if (g == null)
            throw qt("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: t
            });
          return V(this).addr = g, g;
        });
      }
    else
      o = t.getAddress().then((d) => {
        if (d == null)
          throw new Error("TODO");
        return V(this).addr = d, d;
      });
    xi(this, { addrPromise: o, addr: a, deployTx: c, subs: u });
    const f = new Proxy({}, {
      get: (d, g, m) => {
        if (typeof g == "symbol" || de.indexOf(g) >= 0)
          return Reflect.get(d, g, m);
        try {
          return this.getEvent(g);
        } catch (E) {
          if (!Wt(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (d, g) => de.indexOf(g) >= 0 ? Reflect.has(d, g) : Reflect.has(d, g) || this.interface.hasEvent(String(g))
    });
    return b(this, { filters: f }), b(this, {
      fallback: i.receive || i.fallback ? wi(this) : null
    }), new Proxy(this, {
      get: (d, g, m) => {
        if (typeof g == "symbol" || g in d || de.indexOf(g) >= 0)
          return Reflect.get(d, g, m);
        try {
          return d.getFunction(g);
        } catch (E) {
          if (!Wt(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (d, g) => typeof g == "symbol" || g in d || de.indexOf(g) >= 0 ? Reflect.has(d, g) : d.interface.hasFunction(g)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(t) {
    return new Qt(this.target, this.interface, t);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(t) {
    return new Qt(t, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await V(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const t = Nt(this.runner);
    w(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const e = await t.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const t = this.deploymentTransaction();
    if (t)
      return await t.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Nt(this.runner);
    return w(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const o = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", o);
        } catch (a) {
          i(a);
        }
      };
      o();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return V(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), bi(this, t);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), Ei(this, t);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(t) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(t, e, n) {
    e == null && (e = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = V(this), o = s || await i, { fragment: a, topics: c } = await sn(this, t), u = { address: o, topics: c, fromBlock: e, toBlock: n }, f = Nt(this.runner);
    return w(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await f.getLogs(u)).map((d) => {
      let g = a;
      if (g == null)
        try {
          g = this.interface.getEvent(d.topics[0]);
        } catch {
        }
      if (g)
        try {
          return new nn(d, this.interface, g);
        } catch (m) {
          return new Nr(d, m);
        }
      return new Pe(d, f);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(t, e) {
    const n = await Mn(this, "on", t);
    return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(t, e) {
    const n = await Mn(this, "once", t);
    return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(t, ...e) {
    return await Ze(this, t, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(t) {
    if (t) {
      const s = await Yt(this, t);
      return s ? s.listeners.length : 0;
    }
    const { subs: e } = V(this);
    let n = 0;
    for (const { listeners: s } of e.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(t) {
    if (t) {
      const s = await Yt(this, t);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: e } = V(this);
    let n = [];
    for (const { listeners: s } of e.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(t, e) {
    const n = await Yt(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (e == null || n.listeners.length === 0) && (n.stop(), V(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(t) {
    if (t) {
      const e = await Yt(this, t);
      if (!e)
        return this;
      e.stop(), V(this).subs.delete(e.tag);
    } else {
      const { subs: e } = V(this);
      for (const { tag: n, stop: s } of e.values())
        s(), e.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(t, e) {
    return await this.on(t, e);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(t, e) {
    return await this.off(t, e);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(t) {
    class e extends Qt {
      constructor(s, i = null) {
        super(s, t, i);
      }
    }
    return e;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(t, e, n) {
    return n == null && (n = null), new this(t, e, n);
  }
};
Pi = Ee;
let Qe = Qt;
function ki() {
  return Qe;
}
class Gn extends ki() {
}
const qe = new ne([
  "function start((bytes32,address,address,address,address,address,uint256,uint256,uint256,uint256)) returns (address,uint16,uint64)",
  "function receiveMessageAndSwap(bytes)"
]), Ti = new ne([
  "function quoteExactInputSingle((address,address,uint256,uint24,uint160)) public view returns (uint256,uint160,uint32,uint256)"
]), Zt = 100, Oi = "https://gfx.relayers.xlabs.xyz/api/v1/swap/quote", vi = "https://thermae.fly.dev/api/order/create";
class Ir {
  // Post the order to the portico API
  static async createOrder(t, e, n, s, i, o, a, c) {
    var u, f;
    try {
      const { minAmountStart: d, minAmountFinish: g } = a.swapAmounts, m = rt(n), [E, k] = Lt(t, e, s), [O, x] = Lt(t, n.chain, o), I = rt(k), G = rt(x), St = De.get(t, e).portico, Ie = De.get(t, n.chain).portico, Ue = Ve.get(t, e), Se = Ve.get(t, n.chain), un = {
        startingChainId: Number(Ue),
        startingToken: I.toLowerCase(),
        destinationChainId: Number(Se),
        destinationToken: G.toLowerCase(),
        destinationAddress: m,
        porticoAddress: St,
        destinationPorticoAddress: Ie,
        startingTokenAmount: i.toString(),
        minAmountStart: d.toString(),
        minAmountEnd: g.toString(),
        bridgeNonce: c,
        relayerFee: a.relayerFee.toString(),
        feeTierStart: Zt,
        feeTierEnd: Zt,
        shouldWrapNative: E,
        shouldUnwrapNative: O
      }, ln = await ce.post(vi, un);
      return this.validateCreateOrderResponse(ln.data, un), ln.data;
    } catch (d) {
      if (ce.isAxiosError(d)) {
        const g = `${(u = d.response) == null ? void 0 : u.statusText}: ${(f = d.response) == null ? void 0 : f.data.message}`;
        throw new Error(`Could not create order: ${g},`);
      }
      throw d;
    }
  }
  static async quoteRelayer(t, e, n) {
    var c;
    if (hn(e) || hn(n))
      throw new Error("how did you get here tho?");
    const s = Be.encode(e.toUniversalAddress().toUint8Array(), !1), i = Be.encode(n.toUniversalAddress().toUint8Array(), !1), a = { targetChain: Me(t), sourceToken: s, targetToken: i };
    try {
      const u = await ce.post(Oi, a);
      return BigInt(u.data.fee);
    } catch (u) {
      throw ce.isAxiosError(u) ? new Error(`Error getting relayer fee: ${(c = u.response) == null ? void 0 : c.statusText}`) : u;
    }
  }
}
/**
 * Validates that the response from the order creation API matches the request
 * throws an error if there is a mismatch
 */
l(Ir, "validateCreateOrderResponse", (t, e) => {
  if (!Bt(e.porticoAddress || "", t.transactionTarget))
    throw new Error("portico address mismatch");
  const n = qe.decodeFunctionData("start", t.transactionData);
  if (n.length !== 1 || n[0].length !== 10)
    throw new Error("decoded length mismatch");
  const s = Be.decode(n[0][0]);
  if (s.length !== 32)
    throw new Error("flag set length mismatch");
  const { recipientChain: i, feeTierStart: o, feeTierFinish: a, flags: c } = Hn.deserializeFlagSet(s), { shouldWrapNative: u, shouldUnwrapNative: f } = c, [d, g] = Cr("Evm", BigInt(e.destinationChainId));
  if (i !== Me(g))
    throw new Error("recipient chain mismatch");
  if (o !== e.feeTierStart)
    throw new Error("fee tier start mismatch");
  if (a !== e.feeTierEnd)
    throw new Error("fee tier end mismatch");
  if (!!u !== e.shouldWrapNative)
    throw new Error("should wrap native mismatch");
  if (!!f !== e.shouldUnwrapNative)
    throw new Error("should unwrap native mismatch");
  const m = n[0][1];
  if (!Bt(m, e.startingToken))
    throw new Error("start token address mismatch");
  const E = n[0][3];
  if (!Bt(E, e.destinationToken))
    throw new Error("final token address mismatch");
  const k = n[0][4];
  if (!Bt(k, e.destinationAddress))
    throw new Error("recipient address mismatch");
  const O = n[0][5];
  if (!Bt(O, e.destinationPorticoAddress || ""))
    throw new Error("destination portico address mismatch");
  if (n[0][6].toString() !== e.startingTokenAmount)
    throw new Error("amount mismatch");
  if (n[0][7].toString() !== e.minAmountStart)
    throw new Error("min amount start mismatch");
  if (n[0][8].toString() !== e.minAmountEnd)
    throw new Error("min amount finish mismatch");
  if (n[0][9].toString() !== e.relayerFee)
    throw new Error("relayer fee mismatch");
});
class on {
  constructor(t, e, n, s) {
    l(this, "network");
    l(this, "chain");
    l(this, "provider");
    l(this, "contracts");
    l(this, "chainId");
    l(this, "porticoAddress");
    l(this, "uniswapAddress");
    l(this, "porticoContract");
    l(this, "uniswapContract");
    l(this, "core");
    if (this.network = t, this.chain = e, this.provider = n, this.contracts = s, !s.portico)
      throw new Error("Unsupported chain, no contract addresses for: " + e);
    this.core = new _r(t, e, n, s);
    const { portico: i, uniswapQuoterV2: o } = s.portico;
    this.porticoAddress = i, this.uniswapAddress = o, this.chainId = Ve.get(t, e), this.porticoContract = new Gn(this.porticoAddress, qe.fragments, this.provider), this.uniswapContract = new Gn(this.uniswapAddress, Ti.fragments, this.provider);
  }
  static async fromRpc(t, e) {
    const [n, s] = await pn.chainFromRpc(t), i = e[s];
    if (i.network !== n)
      throw new Error(`Network mismatch: ${i.network} != ${n}`);
    return new on(n, s, t, i.contracts);
  }
  async *transfer(t, e, n, s, i, o) {
    const { minAmountStart: a, minAmountFinish: c } = o.swapAmounts;
    if (a === 0n)
      throw new Error("Invalid min swap amount");
    if (c === 0n)
      throw new Error("Invalid min swap amount");
    const u = new gn(t).toString(), [f, d] = Lt(this.network, this.chain, n), [g, m] = Lt(this.network, e.chain, i), E = rt(d), k = rt(this.getTransferrableToken(E)), O = rt(e), x = rt(m), I = De.get(this.network, e.chain).portico, G = (/* @__PURE__ */ new Date()).valueOf() % 2 ** 4, St = Hn.serializeFlagSet({
      flags: {
        shouldWrapNative: f,
        shouldUnwrapNative: g
      },
      recipientChain: Me(e.chain),
      bridgeNonce: G,
      feeTierStart: Zt,
      feeTierFinish: Zt,
      padding: new Uint8Array(19)
    }), Ie = qe.encodeFunctionData("start", [
      [
        St,
        E.toLowerCase(),
        k,
        x.toLowerCase(),
        O,
        I,
        s.toString(),
        a.toString(),
        c.toString(),
        o.relayerFee.toString()
      ]
    ]);
    f || (yield* this.approve(E, u, s, this.porticoAddress));
    const Ue = await this.core.getMessageFee(), Se = {
      to: this.porticoAddress,
      data: Ie,
      value: Ue + (f ? s : 0n)
    };
    yield this.createUnsignedTransaction(Fe(Se, u), "PorticoBridge.Transfer");
  }
  async *redeem(t, e) {
    const n = await this.porticoContract.getFunction("receiveMessageAndSwap").populateTransaction(Br(e)), s = new gn(t).toString();
    yield this.createUnsignedTransaction(Fe(n, s), "PorticoBridge.Redeem");
  }
  async quoteSwap(t, e, n) {
    const [, s] = Lt(this.network, this.chain, t), [, i] = Lt(this.network, this.chain, e), o = rt(s), a = rt(i);
    return Bt(o, a) ? n : (await this.uniswapContract.getFunction("quoteExactInputSingle").staticCall([o, a, n, Zt, 0]))[0];
  }
  async quoteRelay(t, e) {
    return await Ir.quoteRelayer(this.chain, t, e);
  }
  // For a given token, return the corresponding
  // Wormhole wrapped token that originated on Ethereum
  getTransferrableToken(t) {
    var s;
    if (this.chain === "Ethereum")
      return dn.tokenId("Ethereum", t);
    const e = Fr(this.network, this.chain, t);
    if (!e)
      throw new Error("Unsupported source token: " + t);
    const n = (s = Lr(this.network, this.chain, e.symbol)) == null ? void 0 : s.find((i) => i.original === "Ethereum");
    if (!n)
      throw new Error(`Unsupported symbol for chain ${e.symbol}: ${this.chain} `);
    return dn.tokenId(n.chain, n.address);
  }
  async *approve(t, e, n, s) {
    const i = pn.getTokenImplementation(this.provider, t);
    if (await i.allowance(e, s) < n) {
      const a = await i.approve.populateTransaction(s, n);
      yield this.createUnsignedTransaction(Fe(a, e), "PorticoBridge.Approve");
    }
  }
  createUnsignedTransaction(t, e) {
    return new $r(Dr(t, this.chainId), this.network, this.chain, e, !1);
  }
}
Mr(Vr, "PorticoBridge", on);
export {
  on as EvmPorticoBridge
};
