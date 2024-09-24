var ze = Object.defineProperty;
var We = (n, f, e) => f in n ? ze(n, f, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[f] = e;
var u = (n, f, e) => (We(n, typeof f != "symbol" ? f + "" : f, e), e), Lf = (n, f, e) => {
  if (!f.has(n))
    throw TypeError("Cannot " + e);
};
var d = (n, f, e) => (Lf(n, f, "read from private field"), e ? e.call(n) : f.get(n)), v = (n, f, e) => {
  if (f.has(n))
    throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(n) : f.set(n, e);
}, x = (n, f, e, t) => (Lf(n, f, "write to private field"), t ? t.call(n, e) : f.set(n, e), e);
var b6 = (n, f, e, t) => ({
  set _(r) {
    x(n, f, r, e);
  },
  get _() {
    return d(n, f, t);
  }
}), N = (n, f, e) => (Lf(n, f, "access private method"), e);
import { a as K6 } from "./index-CqK-5vzL.mjs";
import "./index-BAjif11o.mjs";
import { c3 as X6, cy as d6, cz as l6, ar as p6, cA as Y6, cB as y6, bW as Je, cC as Ke } from "./index-DV1w5RNX.mjs";
import { E as Ef, a as Hf, b as K0, c as Z6, _ as Q6 } from "./evm-CAEWKa29.mjs";
import { r as q6 } from "./chain-tk4BDPwT.mjs";
const Xe = "6.12.1";
function Ye(n, f, e) {
  const t = f.split("|").map((a) => a.trim());
  for (let a = 0; a < t.length; a++)
    switch (f) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof n === f)
          return;
    }
  const r = new Error(`invalid value for type ${f}`);
  throw r.code = "INVALID_ARGUMENT", r.argument = `value.${e}`, r.value = n, r;
}
async function Gf(n) {
  const f = Object.keys(n);
  return (await Promise.all(f.map((t) => Promise.resolve(n[t])))).reduce((t, r, a) => (t[f[a]] = r, t), {});
}
function w(n, f, e) {
  for (let t in f) {
    let r = f[t];
    const a = e ? e[t] : null;
    a && Ye(r, a, t), Object.defineProperty(n, t, { enumerable: !0, value: r, writable: !1 });
  }
}
function _0(n) {
  if (n == null)
    return "null";
  if (Array.isArray(n))
    return "[ " + n.map(_0).join(", ") + " ]";
  if (n instanceof Uint8Array) {
    const f = "0123456789abcdef";
    let e = "0x";
    for (let t = 0; t < n.length; t++)
      e += f[n[t] >> 4], e += f[n[t] & 15];
    return e;
  }
  if (typeof n == "object" && typeof n.toJSON == "function")
    return _0(n.toJSON());
  switch (typeof n) {
    case "boolean":
    case "symbol":
      return n.toString();
    case "bigint":
      return BigInt(n).toString();
    case "number":
      return n.toString();
    case "string":
      return JSON.stringify(n);
    case "object": {
      const f = Object.keys(n);
      return f.sort(), "{ " + f.map((e) => `${_0(e)}: ${_0(n[e])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function G0(n, f) {
  return n && n.code === f;
}
function j6(n) {
  return G0(n, "CALL_EXCEPTION");
}
function Q0(n, f, e) {
  let t = n;
  {
    const a = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${_0(e)}`);
      for (const s in e) {
        if (s === "shortMessage")
          continue;
        const i = e[s];
        a.push(s + "=" + _0(i));
      }
    }
    a.push(`code=${f}`), a.push(`version=${Xe}`), a.length && (n += " (" + a.join(", ") + ")");
  }
  let r;
  switch (f) {
    case "INVALID_ARGUMENT":
      r = new TypeError(n);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      r = new RangeError(n);
      break;
    default:
      r = new Error(n);
  }
  return w(r, { code: f }), e && Object.assign(r, e), r.shortMessage == null && w(r, { shortMessage: t }), r;
}
function g(n, f, e, t) {
  if (!n)
    throw Q0(f, e, t);
}
function l(n, f, e, t) {
  g(n, f, "INVALID_ARGUMENT", { argument: e, value: t });
}
function fe(n, f, e) {
  e == null && (e = ""), e && (e = ": " + e), g(n >= f, "missing arguemnt" + e, "MISSING_ARGUMENT", {
    count: n,
    expectedCount: f
  }), g(n <= f, "too many arguments" + e, "UNEXPECTED_ARGUMENT", {
    count: n,
    expectedCount: f
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((n, f) => {
  try {
    if ("test".normalize(f) !== "test")
      throw new Error("bad");
    if (f === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    n.push(f);
  } catch {
  }
  return n;
}, []);
function qf(n, f, e) {
  if (e == null && (e = ""), n !== f) {
    let t = e, r = "new";
    e && (t += ".", r += " " + e), g(!1, `private constructor; use ${t}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: r
    });
  }
}
function ee(n, f, e) {
  if (n instanceof Uint8Array)
    return e ? new Uint8Array(n) : n;
  if (typeof n == "string" && n.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const t = new Uint8Array((n.length - 2) / 2);
    let r = 2;
    for (let a = 0; a < t.length; a++)
      t[a] = parseInt(n.substring(r, r + 2), 16), r += 2;
    return t;
  }
  l(!1, "invalid BytesLike value", f || "value", n);
}
function P(n, f) {
  return ee(n, f, !1);
}
function e0(n, f) {
  return ee(n, f, !0);
}
function f0(n, f) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || typeof f == "number" && n.length !== 2 + 2 * f || f === !0 && n.length % 2 !== 0);
}
function Ze(n) {
  return f0(n, !0) || n instanceof Uint8Array;
}
const h6 = "0123456789abcdef";
function I(n) {
  const f = P(n);
  let e = "0x";
  for (let t = 0; t < f.length; t++) {
    const r = f[t];
    e += h6[(r & 240) >> 4] + h6[r & 15];
  }
  return e;
}
function o0(n) {
  return "0x" + n.map((f) => I(f).substring(2)).join("");
}
function Qe(n) {
  return f0(n, !0) ? (n.length - 2) / 2 : P(n).length;
}
function x0(n, f, e) {
  const t = P(n);
  return e != null && e > t.length && g(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: t,
    length: t.length,
    offset: e
  }), I(t.slice(f ?? 0, e ?? t.length));
}
function te(n, f, e) {
  const t = P(n);
  g(f >= t.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(t),
    length: f,
    offset: f + 1
  });
  const r = new Uint8Array(f);
  return r.fill(0), e ? r.set(t, f - t.length) : r.set(t, 0), I(r);
}
function mf(n, f) {
  return te(n, f, !0);
}
function ne(n, f) {
  return te(n, f, !1);
}
const Sf = BigInt(0), J = BigInt(1), B0 = 9007199254740991;
function qe(n, f) {
  const e = Cf(n, "value"), t = BigInt(l0(f, "width"));
  if (g(e >> t === Sf, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: n
  }), e >> t - J) {
    const r = (J << t) - J;
    return -((~e & r) + J);
  }
  return e;
}
function re(n, f) {
  let e = d0(n, "value");
  const t = BigInt(l0(f, "width")), r = J << t - J;
  if (e < Sf) {
    e = -e, g(e <= r, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: n
    });
    const a = (J << t) - J;
    return (~e & a) + J;
  } else
    g(e < r, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: n
    });
  return e;
}
function of(n, f) {
  const e = Cf(n, "value"), t = BigInt(l0(f, "bits"));
  return e & (J << t) - J;
}
function d0(n, f) {
  switch (typeof n) {
    case "bigint":
      return n;
    case "number":
      return l(Number.isInteger(n), "underflow", f || "value", n), l(n >= -B0 && n <= B0, "overflow", f || "value", n), BigInt(n);
    case "string":
      try {
        if (n === "")
          throw new Error("empty string");
        return n[0] === "-" && n[1] !== "-" ? -BigInt(n.substring(1)) : BigInt(n);
      } catch (e) {
        l(!1, `invalid BigNumberish string: ${e.message}`, f || "value", n);
      }
  }
  l(!1, "invalid BigNumberish value", f || "value", n);
}
function Cf(n, f) {
  const e = d0(n, f);
  return g(e >= Sf, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: n
  }), e;
}
const m6 = "0123456789abcdef";
function ae(n) {
  if (n instanceof Uint8Array) {
    let f = "0x0";
    for (const e of n)
      f += m6[e >> 4], f += m6[e & 15];
    return BigInt(f);
  }
  return d0(n);
}
function l0(n, f) {
  switch (typeof n) {
    case "bigint":
      return l(n >= -B0 && n <= B0, "overflow", f || "value", n), Number(n);
    case "number":
      return l(Number.isInteger(n), "underflow", f || "value", n), l(n >= -B0 && n <= B0, "overflow", f || "value", n), n;
    case "string":
      try {
        if (n === "")
          throw new Error("empty string");
        return l0(BigInt(n), f);
      } catch (e) {
        l(!1, `invalid numeric string: ${e.message}`, f || "value", n);
      }
  }
  l(!1, "invalid numeric value", f || "value", n);
}
function je(n) {
  return l0(ae(n));
}
function se(n, f) {
  let t = Cf(n, "value").toString(16);
  if (f == null)
    t.length % 2 && (t = "0" + t);
  else {
    const r = l0(f, "width");
    for (g(r * 2 >= t.length, `value exceeds width (${r} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: n
    }); t.length < r * 2; )
      t = "0" + t;
  }
  return "0x" + t;
}
function ie(n) {
  const f = Cf(n, "value");
  if (f === Sf)
    return new Uint8Array([]);
  let e = f.toString(16);
  e.length % 2 && (e = "0" + e);
  const t = new Uint8Array(e.length / 2);
  for (let r = 0; r < t.length; r++) {
    const a = r * 2;
    t[r] = parseInt(e.substring(a, a + 2), 16);
  }
  return t;
}
var $0;
class f1 {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(f, e, t) {
    /**
     *  The event filter.
     */
    u(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    u(this, "emitter");
    v(this, $0, void 0);
    x(this, $0, e), w(this, { emitter: f, filter: t });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    d(this, $0) != null && await this.emitter.off(this.filter, d(this, $0));
  }
}
$0 = new WeakMap();
function e1(n, f, e, t, r) {
  l(!1, `invalid codepoint at offset ${f}; ${n}`, "bytes", e);
}
function ce(n, f, e, t, r) {
  if (n === "BAD_PREFIX" || n === "UNEXPECTED_CONTINUE") {
    let a = 0;
    for (let s = f + 1; s < e.length && e[s] >> 6 === 2; s++)
      a++;
    return a;
  }
  return n === "OVERRUN" ? e.length - f - 1 : 0;
}
function t1(n, f, e, t, r) {
  return n === "OVERLONG" ? (l(typeof r == "number", "invalid bad code point for replacement", "badCodepoint", r), t.push(r), 0) : (t.push(65533), ce(n, f, e));
}
const n1 = Object.freeze({
  error: e1,
  ignore: ce,
  replace: t1
});
function r1(n, f) {
  f == null && (f = n1.error);
  const e = P(n, "bytes"), t = [];
  let r = 0;
  for (; r < e.length; ) {
    const a = e[r++];
    if (!(a >> 7)) {
      t.push(a);
      continue;
    }
    let s = null, i = null;
    if ((a & 224) === 192)
      s = 1, i = 127;
    else if ((a & 240) === 224)
      s = 2, i = 2047;
    else if ((a & 248) === 240)
      s = 3, i = 65535;
    else {
      (a & 192) === 128 ? r += f("UNEXPECTED_CONTINUE", r - 1, e, t) : r += f("BAD_PREFIX", r - 1, e, t);
      continue;
    }
    if (r - 1 + s >= e.length) {
      r += f("OVERRUN", r - 1, e, t);
      continue;
    }
    let c = a & (1 << 8 - s - 1) - 1;
    for (let o = 0; o < s; o++) {
      let b = e[r];
      if ((b & 192) != 128) {
        r += f("MISSING_CONTINUE", r, e, t), c = null;
        break;
      }
      c = c << 6 | b & 63, r++;
    }
    if (c !== null) {
      if (c > 1114111) {
        r += f("OUT_OF_RANGE", r - 1 - s, e, t, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        r += f("UTF16_SURROGATE", r - 1 - s, e, t, c);
        continue;
      }
      if (c <= i) {
        r += f("OVERLONG", r - 1 - s, e, t, c);
        continue;
      }
      t.push(c);
    }
  }
  return t;
}
function jf(n, f) {
  l(typeof n == "string", "invalid string value", "str", n);
  let e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n.charCodeAt(t);
    if (r < 128)
      e.push(r);
    else if (r < 2048)
      e.push(r >> 6 | 192), e.push(r & 63 | 128);
    else if ((r & 64512) == 55296) {
      t++;
      const a = n.charCodeAt(t);
      l(t < n.length && (a & 64512) === 56320, "invalid surrogate pair", "str", n);
      const s = 65536 + ((r & 1023) << 10) + (a & 1023);
      e.push(s >> 18 | 240), e.push(s >> 12 & 63 | 128), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
    } else
      e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(r & 63 | 128);
  }
  return new Uint8Array(e);
}
function a1(n) {
  return n.map((f) => f <= 65535 ? String.fromCharCode(f) : (f -= 65536, String.fromCharCode((f >> 10 & 1023) + 55296, (f & 1023) + 56320))).join("");
}
function s1(n, f) {
  return a1(r1(n, f));
}
function g6(n) {
  const f = [];
  for (; n; )
    f.unshift(n & 255), n >>= 8;
  return f;
}
function oe(n) {
  if (Array.isArray(n)) {
    let t = [];
    if (n.forEach(function(a) {
      t = t.concat(oe(a));
    }), t.length <= 55)
      return t.unshift(192 + t.length), t;
    const r = g6(t.length);
    return r.unshift(247 + r.length), r.concat(t);
  }
  const f = Array.prototype.slice.call(P(n, "object"));
  if (f.length === 1 && f[0] <= 127)
    return f;
  if (f.length <= 55)
    return f.unshift(128 + f.length), f;
  const e = g6(f.length);
  return e.unshift(183 + e.length), e.concat(f);
}
const w6 = "0123456789abcdef";
function i1(n) {
  let f = "0x";
  for (const e of oe(n))
    f += w6[e >> 4], f += w6[e & 15];
  return f;
}
const _ = 32, zf = new Uint8Array(_), c1 = ["then"], uf = {};
function z0(n, f) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${n}`);
  throw e.error = f, e;
}
var y0;
const E0 = class E0 extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const t = e[0];
    let r = e[1], a = (e[2] || []).slice(), s = !0;
    t !== uf && (r = e, a = [], s = !1);
    super(r.length);
    v(this, y0, void 0);
    r.forEach((c, o) => {
      this[o] = c;
    });
    const i = a.reduce((c, o) => (typeof o == "string" && c.set(o, (c.get(o) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (x(this, y0, Object.freeze(r.map((c, o) => {
      const b = a[o];
      return b != null && i.get(b) === 1 ? b : null;
    }))), !!s)
      return Object.freeze(this), new Proxy(this, {
        get: (c, o, b) => {
          if (typeof o == "string") {
            if (o.match(/^[0-9]+$/)) {
              const y = l0(o, "%index");
              if (y < 0 || y >= this.length)
                throw new RangeError("out of result range");
              const m = c[y];
              return m instanceof Error && z0(`index ${y}`, m), m;
            }
            if (c1.indexOf(o) >= 0)
              return Reflect.get(c, o, b);
            const p = c[o];
            if (p instanceof Function)
              return function(...y) {
                return p.apply(this === b ? c : this, y);
              };
            if (!(o in c))
              return c.getValue.apply(this === b ? c : this, [o]);
          }
          return Reflect.get(c, o, b);
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
    const t = [];
    return this.forEach((r, a) => {
      r instanceof Error && z0(`index ${a}`, r), e && r instanceof E0 && (r = r.toArray(e)), t.push(r);
    }), t;
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
    return d(this, y0).reduce((t, r, a) => {
      if (g(r != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), !(r in t)) {
        let s = this.getValue(r);
        e && s instanceof E0 && (s = s.toObject(e)), t[r] = s;
      }
      return t;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(e, t) {
    e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), t == null && (t = this.length), t < 0 && (t += this.length, t < 0 && (t = 0)), t > this.length && (t = this.length);
    const r = [], a = [];
    for (let s = e; s < t; s++)
      r.push(this[s]), a.push(d(this, y0)[s]);
    return new E0(uf, r, a);
  }
  /**
   *  @_ignore
   */
  filter(e, t) {
    const r = [], a = [];
    for (let s = 0; s < this.length; s++) {
      const i = this[s];
      i instanceof Error && z0(`index ${s}`, i), e.call(t, i, s, this) && (r.push(i), a.push(d(this, y0)[s]));
    }
    return new E0(uf, r, a);
  }
  /**
   *  @_ignore
   */
  map(e, t) {
    const r = [];
    for (let a = 0; a < this.length; a++) {
      const s = this[a];
      s instanceof Error && z0(`index ${a}`, s), r.push(e.call(t, s, a, this));
    }
    return r;
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
    const t = d(this, y0).indexOf(e);
    if (t === -1)
      return;
    const r = this[t];
    return r instanceof Error && z0(`property ${JSON.stringify(e)}`, r.error), r;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, t) {
    return new E0(uf, e, t);
  }
};
y0 = new WeakMap();
let vf = E0;
function T6(n) {
  let f = ie(n);
  return g(f.length <= _, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: f, length: _, offset: f.length }), f.length !== _ && (f = e0(o0([zf.slice(f.length % _), f]))), f;
}
class p0 {
  constructor(f, e, t, r) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    u(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    u(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    u(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    u(this, "dynamic");
    w(this, { name: f, type: e, localName: t, dynamic: r }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(f, e) {
    l(!1, f, this.localName, e);
  }
}
var i0, A0, L0, gf;
class Wf {
  constructor() {
    v(this, L0);
    // An array of WordSize lengthed objects to concatenation
    v(this, i0, void 0);
    v(this, A0, void 0);
    x(this, i0, []), x(this, A0, 0);
  }
  get data() {
    return o0(d(this, i0));
  }
  get length() {
    return d(this, A0);
  }
  appendWriter(f) {
    return N(this, L0, gf).call(this, e0(f.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(f) {
    let e = e0(f);
    const t = e.length % _;
    return t && (e = e0(o0([e, zf.slice(t)]))), N(this, L0, gf).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(f) {
    return N(this, L0, gf).call(this, T6(f));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const f = d(this, i0).length;
    return d(this, i0).push(zf), x(this, A0, d(this, A0) + _), (e) => {
      d(this, i0)[f] = T6(e);
    };
  }
}
i0 = new WeakMap(), A0 = new WeakMap(), L0 = new WeakSet(), gf = function(f) {
  return d(this, i0).push(f), x(this, A0, d(this, A0) + f.length), f.length;
};
var $, H, N0, R0, h0, tf, Kf, If, ue;
const o6 = class o6 {
  constructor(f, e, t) {
    v(this, tf);
    v(this, If);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    u(this, "allowLoose");
    v(this, $, void 0);
    v(this, H, void 0);
    v(this, N0, void 0);
    v(this, R0, void 0);
    v(this, h0, void 0);
    w(this, { allowLoose: !!e }), x(this, $, e0(f)), x(this, N0, 0), x(this, R0, null), x(this, h0, t ?? 1024), x(this, H, 0);
  }
  get data() {
    return I(d(this, $));
  }
  get dataLength() {
    return d(this, $).length;
  }
  get consumed() {
    return d(this, H);
  }
  get bytes() {
    return new Uint8Array(d(this, $));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(f) {
    const e = new o6(d(this, $).slice(d(this, H) + f), this.allowLoose, d(this, h0));
    return x(e, R0, this), e;
  }
  // Read bytes
  readBytes(f, e) {
    let t = N(this, If, ue).call(this, 0, f, !!e);
    return N(this, tf, Kf).call(this, f), x(this, H, d(this, H) + t.length), t.slice(0, f);
  }
  // Read a numeric values
  readValue() {
    return ae(this.readBytes(_));
  }
  readIndex() {
    return je(this.readBytes(_));
  }
};
$ = new WeakMap(), H = new WeakMap(), N0 = new WeakMap(), R0 = new WeakMap(), h0 = new WeakMap(), tf = new WeakSet(), Kf = function(f) {
  var e;
  if (d(this, R0))
    return N(e = d(this, R0), tf, Kf).call(e, f);
  x(this, N0, d(this, N0) + f), g(d(this, h0) < 1 || d(this, N0) <= d(this, h0) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${d(this, h0)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: e0(d(this, $)),
    offset: d(this, H),
    length: f,
    info: {
      bytesRead: d(this, N0),
      dataLength: this.dataLength
    }
  });
}, If = new WeakSet(), ue = function(f, e, t) {
  let r = Math.ceil(e / _) * _;
  return d(this, H) + r > d(this, $).length && (this.allowLoose && t && d(this, H) + e <= d(this, $).length ? r = e : g(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: e0(d(this, $)),
    length: d(this, $).length,
    offset: d(this, H) + r
  })), d(this, $).slice(d(this, H), d(this, H) + r);
};
let Jf = o6;
function x6(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function be(n, ...f) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (f.length > 0 && !f.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${f}, not of length=${n.length}`);
}
function E6(n, f = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (f && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function o1(n, f) {
  be(n);
  const e = f.outputLen;
  if (n.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u1 = (n) => n instanceof Uint8Array, b1 = (n) => new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4)), d1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!d1)
  throw new Error("Non little-endian hardware is not supported");
function l1(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function de(n) {
  if (typeof n == "string" && (n = l1(n)), !u1(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
class p1 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function y1(n) {
  const f = (t) => n().update(de(t)).digest(), e = n();
  return f.outputLen = e.outputLen, f.blockLen = e.blockLen, f.create = () => n(), f;
}
const bf = /* @__PURE__ */ BigInt(2 ** 32 - 1), v6 = /* @__PURE__ */ BigInt(32);
function h1(n, f = !1) {
  return f ? { h: Number(n & bf), l: Number(n >> v6 & bf) } : { h: Number(n >> v6 & bf) | 0, l: Number(n & bf) | 0 };
}
function m1(n, f = !1) {
  let e = new Uint32Array(n.length), t = new Uint32Array(n.length);
  for (let r = 0; r < n.length; r++) {
    const { h: a, l: s } = h1(n[r], f);
    [e[r], t[r]] = [a, s];
  }
  return [e, t];
}
const g1 = (n, f, e) => n << e | f >>> 32 - e, w1 = (n, f, e) => f << e | n >>> 32 - e, T1 = (n, f, e) => f << e - 32 | n >>> 64 - e, x1 = (n, f, e) => n << e - 32 | f >>> 64 - e, [le, pe, ye] = [[], [], []], E1 = /* @__PURE__ */ BigInt(0), W0 = /* @__PURE__ */ BigInt(1), v1 = /* @__PURE__ */ BigInt(2), k1 = /* @__PURE__ */ BigInt(7), A1 = /* @__PURE__ */ BigInt(256), N1 = /* @__PURE__ */ BigInt(113);
for (let n = 0, f = W0, e = 1, t = 0; n < 24; n++) {
  [e, t] = [t, (2 * e + 3 * t) % 5], le.push(2 * (5 * t + e)), pe.push((n + 1) * (n + 2) / 2 % 64);
  let r = E1;
  for (let a = 0; a < 7; a++)
    f = (f << W0 ^ (f >> k1) * N1) % A1, f & v1 && (r ^= W0 << (W0 << /* @__PURE__ */ BigInt(a)) - W0);
  ye.push(r);
}
const [R1, O1] = /* @__PURE__ */ m1(ye, !0), k6 = (n, f, e) => e > 32 ? T1(n, f, e) : g1(n, f, e), A6 = (n, f, e) => e > 32 ? x1(n, f, e) : w1(n, f, e);
function I1(n, f = 24) {
  const e = new Uint32Array(10);
  for (let t = 24 - f; t < 24; t++) {
    for (let s = 0; s < 10; s++)
      e[s] = n[s] ^ n[s + 10] ^ n[s + 20] ^ n[s + 30] ^ n[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const i = (s + 8) % 10, c = (s + 2) % 10, o = e[c], b = e[c + 1], p = k6(o, b, 1) ^ e[i], y = A6(o, b, 1) ^ e[i + 1];
      for (let m = 0; m < 50; m += 10)
        n[s + m] ^= p, n[s + m + 1] ^= y;
    }
    let r = n[2], a = n[3];
    for (let s = 0; s < 24; s++) {
      const i = pe[s], c = k6(r, a, i), o = A6(r, a, i), b = le[s];
      r = n[b], a = n[b + 1], n[b] = c, n[b + 1] = o;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let i = 0; i < 10; i++)
        e[i] = n[s + i];
      for (let i = 0; i < 10; i++)
        n[s + i] ^= ~e[(i + 2) % 10] & e[(i + 4) % 10];
    }
    n[0] ^= R1[t], n[1] ^= O1[t];
  }
  e.fill(0);
}
class f6 extends p1 {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(f, e, t, r = !1, a = 24) {
    if (super(), this.blockLen = f, this.suffix = e, this.outputLen = t, this.enableXOF = r, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, x6(t), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = b1(this.state);
  }
  keccak() {
    I1(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(f) {
    E6(this);
    const { blockLen: e, state: t } = this;
    f = de(f);
    const r = f.length;
    for (let a = 0; a < r; ) {
      const s = Math.min(e - this.pos, r - a);
      for (let i = 0; i < s; i++)
        t[this.pos++] ^= f[a++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: f, suffix: e, pos: t, blockLen: r } = this;
    f[t] ^= e, e & 128 && t === r - 1 && this.keccak(), f[r - 1] ^= 128, this.keccak();
  }
  writeInto(f) {
    E6(this, !1), be(f), this.finish();
    const e = this.state, { blockLen: t } = this;
    for (let r = 0, a = f.length; r < a; ) {
      this.posOut >= t && this.keccak();
      const s = Math.min(t - this.posOut, a - r);
      f.set(e.subarray(this.posOut, this.posOut + s), r), this.posOut += s, r += s;
    }
    return f;
  }
  xofInto(f) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(f);
  }
  xof(f) {
    return x6(f), this.xofInto(new Uint8Array(f));
  }
  digestInto(f) {
    if (o1(f, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(f), this.destroy(), f;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(f) {
    const { blockLen: e, suffix: t, outputLen: r, rounds: a, enableXOF: s } = this;
    return f || (f = new f6(e, t, r, s, a)), f.state32.set(this.state32), f.pos = this.pos, f.posOut = this.posOut, f.finished = this.finished, f.rounds = a, f.suffix = t, f.outputLen = r, f.enableXOF = s, f.destroyed = this.destroyed, f;
  }
}
const P1 = (n, f, e) => y1(() => new f6(f, n, e)), M1 = /* @__PURE__ */ P1(1, 136, 256 / 8);
let he = !1;
const me = function(n) {
  return M1(n);
};
let ge = me;
function t0(n) {
  const f = P(n, "data");
  return I(ge(f));
}
t0._ = me;
t0.lock = function() {
  he = !0;
};
t0.register = function(n) {
  if (he)
    throw new TypeError("keccak256 is locked");
  ge = n;
};
Object.freeze(t0);
const S1 = BigInt(0), C1 = BigInt(36);
function N6(n) {
  n = n.toLowerCase();
  const f = n.substring(2).split(""), e = new Uint8Array(40);
  for (let r = 0; r < 40; r++)
    e[r] = f[r].charCodeAt(0);
  const t = P(t0(e));
  for (let r = 0; r < 40; r += 2)
    t[r >> 1] >> 4 >= 8 && (f[r] = f[r].toUpperCase()), (t[r >> 1] & 15) >= 8 && (f[r + 1] = f[r + 1].toUpperCase());
  return "0x" + f.join("");
}
const e6 = {};
for (let n = 0; n < 10; n++)
  e6[String(n)] = String(n);
for (let n = 0; n < 26; n++)
  e6[String.fromCharCode(65 + n)] = String(10 + n);
const R6 = 15;
function U1(n) {
  n = n.toUpperCase(), n = n.substring(4) + n.substring(0, 2) + "00";
  let f = n.split("").map((t) => e6[t]).join("");
  for (; f.length >= R6; ) {
    let t = f.substring(0, R6);
    f = parseInt(t, 10) % 97 + f.substring(t.length);
  }
  let e = String(98 - parseInt(f, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const _1 = function() {
  const n = {};
  for (let f = 0; f < 36; f++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[f];
    n[e] = BigInt(f);
  }
  return n;
}();
function B1(n) {
  n = n.toLowerCase();
  let f = S1;
  for (let e = 0; e < n.length; e++)
    f = f * C1 + _1[n[e]];
  return f;
}
function n0(n) {
  if (l(typeof n == "string", "invalid address", "address", n), n.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    n.startsWith("0x") || (n = "0x" + n);
    const f = N6(n);
    return l(!n.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || f === n, "bad address checksum", "address", n), f;
  }
  if (n.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    l(n.substring(2, 4) === U1(n), "bad icap checksum", "address", n);
    let f = B1(n.substring(4)).toString(16);
    for (; f.length < 40; )
      f = "0" + f;
    return N6("0x" + f);
  }
  l(!1, "invalid address", "address", n);
}
function $1(n) {
  const f = n0(n.from);
  let t = d0(n.nonce, "tx.nonce").toString(16);
  return t === "0" ? t = "0x" : t.length % 2 ? t = "0x0" + t : t = "0x" + t, n0(x0(t0(i1([f, t])), 12));
}
function we(n) {
  return n && typeof n.getAddress == "function";
}
async function Ff(n, f) {
  const e = await f;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (g(typeof n != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: n }), l(!1, "invalid AddressLike value; did not resolve to a value address", "target", n)), n0(e);
}
function q0(n, f) {
  if (typeof n == "string")
    return n.match(/^0x[0-9a-f]{40}$/i) ? n0(n) : (g(f != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Ff(n, f.resolveName(n)));
  if (we(n))
    return Ff(n, n.getAddress());
  if (n && typeof n.then == "function")
    return Ff(n, n);
  l(!1, "unsupported addressable value", "target", n);
}
const r0 = {};
function h(n, f) {
  let e = !1;
  return f < 0 && (e = !0, f *= -1), new U(r0, `${e ? "" : "u"}int${f}`, n, { signed: e, width: f });
}
function E(n, f) {
  return new U(r0, `bytes${f || ""}`, n, { size: f });
}
const O6 = Symbol.for("_ethers_typed");
var O0;
const a0 = class a0 {
  /**
   *  @_ignore:
   */
  constructor(f, e, t, r) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    u(this, "type");
    /**
     *  The actual value.
     */
    u(this, "value");
    v(this, O0, void 0);
    /**
     *  @_ignore:
     */
    u(this, "_typedSymbol");
    r == null && (r = null), qf(r0, f, "Typed"), w(this, { _typedSymbol: O6, type: e, value: t }), x(this, O0, r), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((f) => f.format()).join(",")})` : this.type;
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
    return d(this, O0);
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
    return d(this, O0) === !0 ? -1 : d(this, O0) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(f, e) {
    return new a0(r0, f, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(f) {
    return h(f, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(f) {
    return h(f, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(f) {
    return h(f, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(f) {
    return h(f, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(f) {
    return h(f, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(f) {
    return h(f, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(f) {
    return h(f, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(f) {
    return h(f, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(f) {
    return h(f, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(f) {
    return h(f, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(f) {
    return h(f, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(f) {
    return h(f, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(f) {
    return h(f, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(f) {
    return h(f, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(f) {
    return h(f, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(f) {
    return h(f, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(f) {
    return h(f, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(f) {
    return h(f, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(f) {
    return h(f, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(f) {
    return h(f, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(f) {
    return h(f, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(f) {
    return h(f, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(f) {
    return h(f, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(f) {
    return h(f, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(f) {
    return h(f, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(f) {
    return h(f, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(f) {
    return h(f, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(f) {
    return h(f, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(f) {
    return h(f, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(f) {
    return h(f, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(f) {
    return h(f, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(f) {
    return h(f, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(f) {
    return h(f, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(f) {
    return h(f, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(f) {
    return h(f, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(f) {
    return h(f, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(f) {
    return h(f, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(f) {
    return h(f, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(f) {
    return h(f, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(f) {
    return h(f, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(f) {
    return h(f, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(f) {
    return h(f, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(f) {
    return h(f, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(f) {
    return h(f, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(f) {
    return h(f, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(f) {
    return h(f, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(f) {
    return h(f, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(f) {
    return h(f, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(f) {
    return h(f, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(f) {
    return h(f, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(f) {
    return h(f, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(f) {
    return h(f, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(f) {
    return h(f, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(f) {
    return h(f, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(f) {
    return h(f, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(f) {
    return h(f, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(f) {
    return h(f, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(f) {
    return h(f, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(f) {
    return h(f, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(f) {
    return h(f, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(f) {
    return h(f, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(f) {
    return h(f, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(f) {
    return h(f, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(f) {
    return h(f, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(f) {
    return h(f, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(f) {
    return h(f, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(f) {
    return E(f, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(f) {
    return E(f, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(f) {
    return E(f, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(f) {
    return E(f, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(f) {
    return E(f, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(f) {
    return E(f, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(f) {
    return E(f, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(f) {
    return E(f, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(f) {
    return E(f, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(f) {
    return E(f, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(f) {
    return E(f, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(f) {
    return E(f, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(f) {
    return E(f, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(f) {
    return E(f, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(f) {
    return E(f, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(f) {
    return E(f, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(f) {
    return E(f, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(f) {
    return E(f, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(f) {
    return E(f, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(f) {
    return E(f, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(f) {
    return E(f, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(f) {
    return E(f, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(f) {
    return E(f, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(f) {
    return E(f, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(f) {
    return E(f, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(f) {
    return E(f, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(f) {
    return E(f, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(f) {
    return E(f, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(f) {
    return E(f, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(f) {
    return E(f, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(f) {
    return E(f, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(f) {
    return E(f, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(f) {
    return new a0(r0, "address", f);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(f) {
    return new a0(r0, "bool", !!f);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(f) {
    return new a0(r0, "bytes", f);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(f) {
    return new a0(r0, "string", f);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(f, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(f, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(f) {
    return new a0(r0, "overrides", Object.assign({}, f));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(f) {
    return f && typeof f == "object" && "_typedSymbol" in f && f._typedSymbol === O6;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(f, e) {
    if (a0.isTyped(f)) {
      if (f.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${f.type}`);
      return f.value;
    }
    return f;
  }
};
O0 = new WeakMap();
let U = a0;
class L1 extends p0 {
  constructor(f) {
    super("address", "address", f, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(f, e) {
    let t = U.dereference(e, "string");
    try {
      t = n0(t);
    } catch (r) {
      return this._throwError(r.message, e);
    }
    return f.writeValue(t);
  }
  decode(f) {
    return n0(se(f.readValue(), 20));
  }
}
class F1 extends p0 {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    u(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, t) {
    return this.coder.encode(e, t);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function Te(n, f, e) {
  let t = [];
  if (Array.isArray(e))
    t = e;
  else if (e && typeof e == "object") {
    let c = {};
    t = f.map((o) => {
      const b = o.localName;
      return g(b, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: o }, value: e }), g(!c[b], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: o }, value: e }), c[b] = !0, e[b];
    });
  } else
    l(!1, "invalid tuple value", "tuple", e);
  l(f.length === t.length, "types/value length mismatch", "tuple", e);
  let r = new Wf(), a = new Wf(), s = [];
  f.forEach((c, o) => {
    let b = t[o];
    if (c.dynamic) {
      let p = a.length;
      c.encode(a, b);
      let y = r.writeUpdatableValue();
      s.push((m) => {
        y(m + p);
      });
    } else
      c.encode(r, b);
  }), s.forEach((c) => {
    c(r.length);
  });
  let i = n.appendWriter(r);
  return i += n.appendWriter(a), i;
}
function xe(n, f) {
  let e = [], t = [], r = n.subReader(0);
  return f.forEach((a) => {
    let s = null;
    if (a.dynamic) {
      let i = n.readIndex(), c = r.subReader(i);
      try {
        s = a.decode(c);
      } catch (o) {
        if (G0(o, "BUFFER_OVERRUN"))
          throw o;
        s = o, s.baseType = a.name, s.name = a.localName, s.type = a.type;
      }
    } else
      try {
        s = a.decode(n);
      } catch (i) {
        if (G0(i, "BUFFER_OVERRUN"))
          throw i;
        s = i, s.baseType = a.name, s.name = a.localName, s.type = a.type;
      }
    if (s == null)
      throw new Error("investigate");
    e.push(s), t.push(a.localName || null);
  }), vf.fromItems(e, t);
}
class D1 extends p0 {
  constructor(e, t, r) {
    const a = e.type + "[" + (t >= 0 ? t : "") + "]", s = t === -1 || e.dynamic;
    super("array", a, r, s);
    u(this, "coder");
    u(this, "length");
    w(this, { coder: e, length: t });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), t = [];
    for (let r = 0; r < this.length; r++)
      t.push(e);
    return t;
  }
  encode(e, t) {
    const r = U.dereference(t, "array");
    Array.isArray(r) || this._throwError("expected array value", r);
    let a = this.length;
    a === -1 && (a = r.length, e.writeValue(r.length)), fe(r.length, a, "coder array" + (this.localName ? " " + this.localName : ""));
    let s = [];
    for (let i = 0; i < r.length; i++)
      s.push(this.coder);
    return Te(e, s, r);
  }
  decode(e) {
    let t = this.length;
    t === -1 && (t = e.readIndex(), g(t * _ <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: e.bytes, offset: t * _, length: e.dataLength }));
    let r = [];
    for (let a = 0; a < t; a++)
      r.push(new F1(this.coder));
    return xe(e, r);
  }
}
class V1 extends p0 {
  constructor(f) {
    super("bool", "bool", f, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(f, e) {
    const t = U.dereference(e, "bool");
    return f.writeValue(t ? 1 : 0);
  }
  decode(f) {
    return !!f.readValue();
  }
}
class Ee extends p0 {
  constructor(f, e) {
    super(f, f, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(f, e) {
    e = e0(e);
    let t = f.writeValue(e.length);
    return t += f.writeBytes(e), t;
  }
  decode(f) {
    return f.readBytes(f.readIndex(), !0);
  }
}
class H1 extends Ee {
  constructor(f) {
    super("bytes", f);
  }
  decode(f) {
    return I(super.decode(f));
  }
}
class G1 extends p0 {
  constructor(e, t) {
    let r = "bytes" + String(e);
    super(r, r, t, !1);
    u(this, "size");
    w(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, t) {
    let r = e0(U.dereference(t, this.type));
    return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r);
  }
  decode(e) {
    return I(e.readBytes(this.size));
  }
}
const z1 = new Uint8Array([]);
class W1 extends p0 {
  constructor(f) {
    super("null", "", f, !1);
  }
  defaultValue() {
    return null;
  }
  encode(f, e) {
    return e != null && this._throwError("not null", e), f.writeBytes(z1);
  }
  decode(f) {
    return f.readBytes(0), null;
  }
}
const J1 = BigInt(0), K1 = BigInt(1), X1 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Y1 extends p0 {
  constructor(e, t, r) {
    const a = (t ? "int" : "uint") + e * 8;
    super(a, a, r, !1);
    u(this, "size");
    u(this, "signed");
    w(this, { size: e, signed: t }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, t) {
    let r = d0(U.dereference(t, this.type)), a = of(X1, _ * 8);
    if (this.signed) {
      let s = of(a, this.size * 8 - 1);
      (r > s || r < -(s + K1)) && this._throwError("value out-of-bounds", t), r = re(r, 8 * _);
    } else
      (r < J1 || r > of(a, this.size * 8)) && this._throwError("value out-of-bounds", t);
    return e.writeValue(r);
  }
  decode(e) {
    let t = of(e.readValue(), this.size * 8);
    return this.signed && (t = qe(t, this.size * 8)), t;
  }
}
class Z1 extends Ee {
  constructor(f) {
    super("string", f);
  }
  defaultValue() {
    return "";
  }
  encode(f, e) {
    return super.encode(f, jf(U.dereference(e, "string")));
  }
  decode(f) {
    return s1(super.decode(f));
  }
}
class df extends p0 {
  constructor(e, t) {
    let r = !1;
    const a = [];
    e.forEach((i) => {
      i.dynamic && (r = !0), a.push(i.type);
    });
    const s = "tuple(" + a.join(",") + ")";
    super("tuple", s, t, r);
    u(this, "coders");
    w(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((r) => {
      e.push(r.defaultValue());
    });
    const t = this.coders.reduce((r, a) => {
      const s = a.localName;
      return s && (r[s] || (r[s] = 0), r[s]++), r;
    }, {});
    return this.coders.forEach((r, a) => {
      let s = r.localName;
      !s || t[s] !== 1 || (s === "length" && (s = "_length"), e[s] == null && (e[s] = e[a]));
    }), Object.freeze(e);
  }
  encode(e, t) {
    const r = U.dereference(t, "tuple");
    return Te(e, this.coders, r);
  }
  decode(e) {
    return xe(e, this.coders);
  }
}
function j0(n) {
  return t0(jf(n));
}
function Df(n, f) {
  return {
    address: n0(n),
    storageKeys: f.map((e, t) => (l(f0(e, 32), "invalid slot", `storageKeys[${t}]`, e), e.toLowerCase()))
  };
}
function Q1(n) {
  if (Array.isArray(n))
    return n.map((e, t) => Array.isArray(e) ? (l(e.length === 2, "invalid slot set", `value[${t}]`, e), Df(e[0], e[1])) : (l(e != null && typeof e == "object", "invalid address-slot set", "value", n), Df(e.address, e.storageKeys)));
  l(n != null && typeof n == "object", "invalid access list", "value", n);
  const f = Object.keys(n).map((e) => {
    const t = n[e].reduce((r, a) => (r[a] = !0, r), {});
    return Df(e, Object.keys(t).sort());
  });
  return f.sort((e, t) => e.address.localeCompare(t.address)), f;
}
const q1 = new RegExp("^bytes([0-9]+)$"), j1 = new RegExp("^(u?int)([0-9]*)$"), ft = new RegExp("^(.*)\\[([0-9]*)\\]$");
function ve(n, f, e) {
  switch (n) {
    case "address":
      return P(e ? mf(f, 32) : n0(f));
    case "string":
      return jf(f);
    case "bytes":
      return P(f);
    case "bool":
      return f = f ? "0x01" : "0x00", P(e ? mf(f, 32) : f);
  }
  let t = n.match(j1);
  if (t) {
    let r = t[1] === "int", a = parseInt(t[2] || "256");
    return l((!t[2] || t[2] === String(a)) && a % 8 === 0 && a !== 0 && a <= 256, "invalid number type", "type", n), e && (a = 256), r && (f = re(f, a)), P(mf(ie(f), a / 8));
  }
  if (t = n.match(q1), t) {
    const r = parseInt(t[1]);
    return l(String(r) === t[1] && r !== 0 && r <= 32, "invalid bytes type", "type", n), l(Qe(f) === r, `invalid value for ${n}`, "value", f), e ? P(ne(f, 32)) : f;
  }
  if (t = n.match(ft), t && Array.isArray(f)) {
    const r = t[1], a = parseInt(t[2] || String(f.length));
    l(a === f.length, `invalid array length for ${n}`, "value", f);
    const s = [];
    return f.forEach(function(i) {
      s.push(ve(r, i, !0));
    }), P(o0(s));
  }
  l(!1, "invalid type", "type", n);
}
function et(n, f) {
  l(n.length === f.length, "wrong number of values; expected ${ types.length }", "values", f);
  const e = [];
  return n.forEach(function(t, r) {
    e.push(ve(t, f[r]));
  }), I(o0(e));
}
function B(n) {
  const f = /* @__PURE__ */ new Set();
  return n.forEach((e) => f.add(e)), Object.freeze(f);
}
const tt = "external public payable override", nt = B(tt.split(" ")), ke = "constant external internal payable private public pure view override", rt = B(ke.split(" ")), Ae = "constructor error event fallback function receive struct", Ne = B(Ae.split(" ")), Re = "calldata memory storage payable indexed", at = B(Re.split(" ")), st = "tuple returns", it = [Ae, Re, st, ke].join(" "), ct = B(it.split(" ")), ot = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, ut = new RegExp("^(\\s*)"), bt = new RegExp("^([0-9]+)"), dt = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), Oe = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Ie = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var M, W, nf, Xf;
const Pf = class Pf {
  constructor(f) {
    v(this, nf);
    v(this, M, void 0);
    v(this, W, void 0);
    x(this, M, 0), x(this, W, f.slice());
  }
  get offset() {
    return d(this, M);
  }
  get length() {
    return d(this, W).length - d(this, M);
  }
  clone() {
    return new Pf(d(this, W));
  }
  reset() {
    x(this, M, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(f) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !f.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(f) {
    if (this.peek().type !== f) {
      const e = this.peek();
      throw new Error(`expected ${f}; got ${e.type} ${JSON.stringify(e.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const f = this.peek();
    if (f.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = N(this, nf, Xf).call(this, d(this, M) + 1, f.match + 1);
    return x(this, M, f.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const f = this.peek();
    if (f.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; d(this, M) < f.match - 1; ) {
      const t = this.peek().linkNext;
      e.push(N(this, nf, Xf).call(this, d(this, M) + 1, t)), x(this, M, t);
    }
    return x(this, M, f.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (d(this, M) >= d(this, W).length)
      throw new Error("out-of-bounds");
    return d(this, W)[d(this, M)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(f) {
    const e = this.peekType("KEYWORD");
    return e != null && f.has(e) ? e : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(f) {
    if (this.length === 0)
      return null;
    const e = this.peek();
    return e.type === f ? e.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const f = this.peek();
    return b6(this, M)._++, f;
  }
  toString() {
    const f = [];
    for (let e = d(this, M); e < d(this, W).length; e++) {
      const t = d(this, W)[e];
      f.push(`${t.type}:${t.text}`);
    }
    return `<TokenString ${f.join(" ")}>`;
  }
};
M = new WeakMap(), W = new WeakMap(), nf = new WeakSet(), Xf = function(f = 0, e = 0) {
  return new Pf(d(this, W).slice(f, e).map((t) => Object.freeze(Object.assign({}, t, {
    match: t.match - f,
    linkBack: t.linkBack - f,
    linkNext: t.linkNext - f
  }))));
};
let K = Pf;
function w0(n) {
  const f = [], e = (s) => {
    const i = a < n.length ? JSON.stringify(n[a]) : "$EOI";
    throw new Error(`invalid token ${i} at ${a}: ${s}`);
  };
  let t = [], r = [], a = 0;
  for (; a < n.length; ) {
    let s = n.substring(a), i = s.match(ut);
    i && (a += i[1].length, s = n.substring(a));
    const c = { depth: t.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: a, value: -1 };
    f.push(c);
    let o = ot[s[0]] || "";
    if (o) {
      if (c.type = o, c.text = s[0], a++, o === "OPEN_PAREN")
        t.push(f.length - 1), r.push(f.length - 1);
      else if (o == "CLOSE_PAREN")
        t.length === 0 && e("no matching open bracket"), c.match = t.pop(), f[c.match].match = f.length - 1, c.depth--, c.linkBack = r.pop(), f[c.linkBack].linkNext = f.length - 1;
      else if (o === "COMMA")
        c.linkBack = r.pop(), f[c.linkBack].linkNext = f.length - 1, r.push(f.length - 1);
      else if (o === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (o === "CLOSE_BRACKET") {
        let b = f.pop().text;
        if (f.length > 0 && f[f.length - 1].type === "NUMBER") {
          const p = f.pop().text;
          b = p + b, f[f.length - 1].value = l0(p);
        }
        if (f.length === 0 || f[f.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        f[f.length - 1].text += b;
      }
      continue;
    }
    if (i = s.match(dt), i) {
      if (c.text = i[1], a += c.text.length, ct.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Ie)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (i = s.match(bt), i) {
      c.text = i[1], c.type = "NUMBER", a += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(s[0])} at position ${a}`);
  }
  return new K(f.map((s) => Object.freeze(s)));
}
function I6(n, f) {
  let e = [];
  for (const t in f.keys())
    n.has(t) && e.push(t);
  if (e.length > 1)
    throw new Error(`conflicting types: ${e.join(", ")}`);
}
function Uf(n, f) {
  if (f.peekKeyword(Ne)) {
    const e = f.pop().text;
    if (e !== n)
      throw new Error(`expected ${n}, got ${e}`);
  }
  return f.popType("ID");
}
function b0(n, f) {
  const e = /* @__PURE__ */ new Set();
  for (; ; ) {
    const t = n.peekType("KEYWORD");
    if (t == null || f && !f.has(t))
      break;
    if (n.pop(), e.has(t))
      throw new Error(`duplicate keywords: ${JSON.stringify(t)}`);
    e.add(t);
  }
  return Object.freeze(e);
}
function Pe(n) {
  let f = b0(n, rt);
  return I6(f, B("constant payable nonpayable".split(" "))), I6(f, B("pure view payable nonpayable".split(" "))), f.has("view") ? "view" : f.has("pure") ? "pure" : f.has("payable") ? "payable" : f.has("nonpayable") ? "nonpayable" : f.has("constant") ? "view" : "nonpayable";
}
function u0(n, f) {
  return n.popParams().map((e) => S.from(e, f));
}
function Me(n) {
  if (n.peekType("AT")) {
    if (n.pop(), n.peekType("NUMBER"))
      return d0(n.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function P0(n) {
  if (n.length)
    throw new Error(`unexpected tokens at offset ${n.offset}: ${n.toString()}`);
}
const lt = new RegExp(/^(.*)\[([0-9]*)\]$/);
function P6(n) {
  const f = n.match(Ie);
  if (l(f, "invalid type", "type", n), n === "uint")
    return "uint256";
  if (n === "int")
    return "int256";
  if (f[2]) {
    const e = parseInt(f[2]);
    l(e !== 0 && e <= 32, "invalid bytes length", "type", n);
  } else if (f[3]) {
    const e = parseInt(f[3]);
    l(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", n);
  }
  return n;
}
const R = {}, F = Symbol.for("_ethers_internal"), M6 = "_ParamTypeInternal", S6 = "_ErrorInternal", C6 = "_EventInternal", U6 = "_ConstructorInternal", _6 = "_FallbackInternal", B6 = "_FunctionInternal", $6 = "_StructInternal";
var F0, wf;
const G = class G {
  /**
   *  @private
   */
  constructor(f, e, t, r, a, s, i, c) {
    v(this, F0);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    u(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    u(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    u(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    u(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    u(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    u(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    u(this, "arrayChildren");
    if (qf(f, R, "ParamType"), Object.defineProperty(this, F, { value: M6 }), s && (s = Object.freeze(s.slice())), r === "array") {
      if (i == null || c == null)
        throw new Error("");
    } else if (i != null || c != null)
      throw new Error("");
    if (r === "tuple") {
      if (s == null)
        throw new Error("");
    } else if (s != null)
      throw new Error("");
    w(this, {
      name: e,
      type: t,
      baseType: r,
      indexed: a,
      components: s,
      arrayLength: i,
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
  format(f) {
    if (f == null && (f = "sighash"), f === "json") {
      const t = this.name || "";
      if (this.isArray()) {
        const a = JSON.parse(this.arrayChildren.format("json"));
        return a.name = t, a.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(a);
      }
      const r = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: t
      };
      return typeof this.indexed == "boolean" && (r.indexed = this.indexed), this.isTuple() && (r.components = this.components.map((a) => JSON.parse(a.format(f)))), JSON.stringify(r);
    }
    let e = "";
    return this.isArray() ? (e += this.arrayChildren.format(f), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((t) => t.format(f)).join(f === "full" ? ", " : ",") + ")" : e += this.type, f !== "sighash" && (this.indexed === !0 && (e += " indexed"), f === "full" && this.name && (e += " " + this.name)), e;
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
  walk(f, e) {
    if (this.isArray()) {
      if (!Array.isArray(f))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && f.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const t = this;
      return f.map((r) => t.arrayChildren.walk(r, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(f))
        throw new Error("invalid tuple value");
      if (f.length !== this.components.length)
        throw new Error("array is wrong length");
      const t = this;
      return f.map((r, a) => t.components[a].walk(r, e));
    }
    return e(this.type, f);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(f, e) {
    const t = [], r = [f];
    return N(this, F0, wf).call(this, t, f, e, (a) => {
      r[0] = a;
    }), t.length && await Promise.all(t), r[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(f, e) {
    if (G.isParamType(f))
      return f;
    if (typeof f == "string")
      try {
        return G.from(w0(f), e);
      } catch {
        l(!1, "invalid param type", "obj", f);
      }
    else if (f instanceof K) {
      let i = "", c = "", o = null;
      b0(f, B(["tuple"])).has("tuple") || f.peekType("OPEN_PAREN") ? (c = "tuple", o = f.popParams().map((A) => G.from(A)), i = `tuple(${o.map((A) => A.format()).join(",")})`) : (i = P6(f.popType("TYPE")), c = i);
      let b = null, p = null;
      for (; f.length && f.peekType("BRACKET"); ) {
        const A = f.pop();
        b = new G(R, "", i, c, null, o, p, b), p = A.value, i += A.text, c = "array", o = null;
      }
      let y = null;
      if (b0(f, at).has("indexed")) {
        if (!e)
          throw new Error("");
        y = !0;
      }
      const T = f.peekType("ID") ? f.pop().text : "";
      if (f.length)
        throw new Error("leftover tokens");
      return new G(R, T, i, c, y, o, p, b);
    }
    const t = f.name;
    l(!t || typeof t == "string" && t.match(Oe), "invalid name", "obj.name", t);
    let r = f.indexed;
    r != null && (l(e, "parameter cannot be indexed", "obj.indexed", f.indexed), r = !!r);
    let a = f.type, s = a.match(lt);
    if (s) {
      const i = parseInt(s[2] || "-1"), c = G.from({
        type: s[1],
        components: f.components
      });
      return new G(R, t || "", a, "array", r, null, i, c);
    }
    if (a === "tuple" || a.startsWith(
      "tuple("
      /* fix: ) */
    ) || a.startsWith(
      "("
      /* fix: ) */
    )) {
      const i = f.components != null ? f.components.map((o) => G.from(o)) : null;
      return new G(R, t || "", a, "tuple", r, i, null, null);
    }
    return a = P6(f.type), new G(R, t || "", a, a, r, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(f) {
    return f && f[F] === M6;
  }
};
F0 = new WeakSet(), wf = function(f, e, t, r) {
  if (this.isArray()) {
    if (!Array.isArray(e))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && e.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const s = this.arrayChildren, i = e.slice();
    i.forEach((c, o) => {
      var b;
      N(b = s, F0, wf).call(b, f, c, t, (p) => {
        i[o] = p;
      });
    }), r(i);
    return;
  }
  if (this.isTuple()) {
    const s = this.components;
    let i;
    if (Array.isArray(e))
      i = e.slice();
    else {
      if (e == null || typeof e != "object")
        throw new Error("invalid tuple value");
      i = s.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in e))
          throw new Error(`missing value for component ${c.name}`);
        return e[c.name];
      });
    }
    if (i.length !== this.components.length)
      throw new Error("array is wrong length");
    i.forEach((c, o) => {
      var b;
      N(b = s[o], F0, wf).call(b, f, c, t, (p) => {
        i[o] = p;
      });
    }), r(i);
    return;
  }
  const a = t(this.type, e);
  a.then ? f.push(async function() {
    r(await a);
  }()) : r(a);
};
let S = G;
class M0 {
  /**
   *  @private
   */
  constructor(f, e, t) {
    /**
     *  The type of the fragment.
     */
    u(this, "type");
    /**
     *  The inputs for the fragment.
     */
    u(this, "inputs");
    qf(f, R, "Fragment"), t = Object.freeze(t.slice()), w(this, { type: e, inputs: t });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(f) {
    if (typeof f == "string") {
      try {
        M0.from(JSON.parse(f));
      } catch {
      }
      return M0.from(w0(f));
    }
    if (f instanceof K)
      switch (f.peekKeyword(Ne)) {
        case "constructor":
          return c0.from(f);
        case "error":
          return L.from(f);
        case "event":
          return q.from(f);
        case "fallback":
        case "receive":
          return s0.from(f);
        case "function":
          return j.from(f);
        case "struct":
          return I0.from(f);
      }
    else if (typeof f == "object") {
      switch (f.type) {
        case "constructor":
          return c0.from(f);
        case "error":
          return L.from(f);
        case "event":
          return q.from(f);
        case "fallback":
        case "receive":
          return s0.from(f);
        case "function":
          return j.from(f);
        case "struct":
          return I0.from(f);
      }
      g(!1, `unsupported type: ${f.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    l(!1, "unsupported frgament object", "obj", f);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(f) {
    return c0.isFragment(f);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(f) {
    return L.isFragment(f);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(f) {
    return q.isFragment(f);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(f) {
    return j.isFragment(f);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(f) {
    return I0.isFragment(f);
  }
}
class _f extends M0 {
  /**
   *  @private
   */
  constructor(e, t, r, a) {
    super(e, t, a);
    /**
     *  The name of the fragment.
     */
    u(this, "name");
    l(typeof r == "string" && r.match(Oe), "invalid identifier", "name", r), a = Object.freeze(a.slice()), w(this, { name: r });
  }
}
function ff(n, f) {
  return "(" + f.map((e) => e.format(n)).join(n === "full" ? ", " : ",") + ")";
}
class L extends _f {
  /**
   *  @private
   */
  constructor(f, e, t) {
    super(f, "error", e, t), Object.defineProperty(this, F, { value: S6 });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return j0(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(f) {
    if (f == null && (f = "sighash"), f === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((t) => JSON.parse(t.format(f)))
      });
    const e = [];
    return f !== "sighash" && e.push("error"), e.push(this.name + ff(f, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(f) {
    if (L.isFragment(f))
      return f;
    if (typeof f == "string")
      return L.from(w0(f));
    if (f instanceof K) {
      const e = Uf("error", f), t = u0(f);
      return P0(f), new L(R, e, t);
    }
    return new L(R, f.name, f.inputs ? f.inputs.map(S.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(f) {
    return f && f[F] === S6;
  }
}
class q extends _f {
  /**
   *  @private
   */
  constructor(e, t, r, a) {
    super(e, "event", t, r);
    /**
     *  Whether this event is anonymous.
     */
    u(this, "anonymous");
    Object.defineProperty(this, F, { value: C6 }), w(this, { anonymous: a });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return j0(this.format("sighash"));
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
        inputs: this.inputs.map((r) => JSON.parse(r.format(e)))
      });
    const t = [];
    return e !== "sighash" && t.push("event"), t.push(this.name + ff(e, this.inputs)), e !== "sighash" && this.anonymous && t.push("anonymous"), t.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, t) {
    return t = (t || []).map((a) => S.from(a)), new q(R, e, t, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(e) {
    if (q.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return q.from(w0(e));
      } catch {
        l(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof K) {
      const t = Uf("event", e), r = u0(e, !0), a = !!b0(e, B(["anonymous"])).has("anonymous");
      return P0(e), new q(R, t, r, a);
    }
    return new q(R, e.name, e.inputs ? e.inputs.map((t) => S.from(t, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[F] === C6;
  }
}
class c0 extends M0 {
  /**
   *  @private
   */
  constructor(e, t, r, a, s) {
    super(e, t, r);
    /**
     *  Whether the constructor can receive an endowment.
     */
    u(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    u(this, "gas");
    Object.defineProperty(this, F, { value: U6 }), w(this, { payable: a, gas: s });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(e) {
    if (g(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), e === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((r) => JSON.parse(r.format(e)))
      });
    const t = [`constructor${ff(e, this.inputs)}`];
    return this.payable && t.push("payable"), this.gas != null && t.push(`@${this.gas.toString()}`), t.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(e) {
    if (c0.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return c0.from(w0(e));
      } catch {
        l(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof K) {
      b0(e, B(["constructor"]));
      const t = u0(e), r = !!b0(e, nt).has("payable"), a = Me(e);
      return P0(e), new c0(R, "constructor", t, r, a);
    }
    return new c0(R, "constructor", e.inputs ? e.inputs.map(S.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[F] === U6;
  }
}
class s0 extends M0 {
  constructor(e, t, r) {
    super(e, "fallback", t);
    /**
     *  If the function can be sent value during invocation.
     */
    u(this, "payable");
    Object.defineProperty(this, F, { value: _6 }), w(this, { payable: r });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(e) {
    const t = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const r = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: t, stateMutability: r });
    }
    return `${t}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(e) {
    if (s0.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return s0.from(w0(e));
      } catch {
        l(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof K) {
      const t = e.toString(), r = e.peekKeyword(B(["fallback", "receive"]));
      if (l(r, "type must be fallback or receive", "obj", t), e.popKeyword(B(["fallback", "receive"])) === "receive") {
        const c = u0(e);
        return l(c.length === 0, "receive cannot have arguments", "obj.inputs", c), b0(e, B(["payable"])), P0(e), new s0(R, [], !0);
      }
      let s = u0(e);
      s.length ? l(s.length === 1 && s[0].type === "bytes", "invalid fallback inputs", "obj.inputs", s.map((c) => c.format("minimal")).join(", ")) : s = [S.from("bytes")];
      const i = Pe(e);
      if (l(i === "nonpayable" || i === "payable", "fallback cannot be constants", "obj.stateMutability", i), b0(e, B(["returns"])).has("returns")) {
        const c = u0(e);
        l(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((o) => o.format("minimal")).join(", "));
      }
      return P0(e), new s0(R, s, i === "payable");
    }
    if (e.type === "receive")
      return new s0(R, [], !0);
    if (e.type === "fallback") {
      const t = [S.from("bytes")], r = e.stateMutability === "payable";
      return new s0(R, t, r);
    }
    l(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[F] === _6;
  }
}
class j extends _f {
  /**
   *  @private
   */
  constructor(e, t, r, a, s, i) {
    super(e, "function", t, a);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    u(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    u(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    u(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    u(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    u(this, "gas");
    Object.defineProperty(this, F, { value: B6 }), s = Object.freeze(s.slice()), w(this, { constant: r === "view" || r === "pure", gas: i, outputs: s, payable: r === "payable", stateMutability: r });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return j0(this.format("sighash")).substring(0, 10);
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
        inputs: this.inputs.map((r) => JSON.parse(r.format(e))),
        outputs: this.outputs.map((r) => JSON.parse(r.format(e)))
      });
    const t = [];
    return e !== "sighash" && t.push("function"), t.push(this.name + ff(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && t.push(this.stateMutability), this.outputs && this.outputs.length && (t.push("returns"), t.push(ff(e, this.outputs))), this.gas != null && t.push(`@${this.gas.toString()}`)), t.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, t) {
    return t = (t || []).map((a) => S.from(a)), new j(R, e, "view", t, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (j.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return j.from(w0(e));
      } catch {
        l(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof K) {
      const r = Uf("function", e), a = u0(e), s = Pe(e);
      let i = [];
      b0(e, B(["returns"])).has("returns") && (i = u0(e));
      const c = Me(e);
      return P0(e), new j(R, r, s, a, i, c);
    }
    let t = e.stateMutability;
    return t == null && (t = "payable", typeof e.constant == "boolean" ? (t = "view", e.constant || (t = "payable", typeof e.payable == "boolean" && !e.payable && (t = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (t = "nonpayable")), new j(R, e.name, t, e.inputs ? e.inputs.map(S.from) : [], e.outputs ? e.outputs.map(S.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[F] === B6;
  }
}
class I0 extends _f {
  /**
   *  @private
   */
  constructor(f, e, t) {
    super(f, "struct", e, t), Object.defineProperty(this, F, { value: $6 });
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
  static from(f) {
    if (typeof f == "string")
      try {
        return I0.from(w0(f));
      } catch {
        l(!1, "invalid struct fragment", "obj", f);
      }
    else if (f instanceof K) {
      const e = Uf("struct", f), t = u0(f);
      return P0(f), new I0(R, e, t);
    }
    return new I0(R, f.name, f.inputs ? f.inputs.map(S.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(f) {
    return f && f[F] === $6;
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
const pt = new RegExp(/^bytes([0-9]*)$/), yt = new RegExp(/^(u?int)([0-9]*)$/);
let Vf = null, L6 = 1024;
function ht(n, f, e, t) {
  let r = "missing revert data", a = null;
  const s = null;
  let i = null;
  if (e) {
    r = "execution reverted";
    const o = P(e);
    if (e = I(e), o.length === 0)
      r += " (no data present; likely require(false) occurred", a = "require(false)";
    else if (o.length % 32 !== 4)
      r += " (could not decode reason; invalid data length)";
    else if (I(o.slice(0, 4)) === "0x08c379a0")
      try {
        a = t.decode(["string"], o.slice(4))[0], i = {
          signature: "Error(string)",
          name: "Error",
          args: [a]
        }, r += `: ${JSON.stringify(a)}`;
      } catch {
        r += " (could not decode reason; invalid string data)";
      }
    else if (I(o.slice(0, 4)) === "0x4e487b71")
      try {
        const b = Number(t.decode(["uint256"], o.slice(4))[0]);
        i = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [b]
        }, a = `Panic due to ${X.get(b) || "UNKNOWN"}(${b})`, r += `: ${a}`;
      } catch {
        r += " (could not decode panic code)";
      }
    else
      r += " (unknown custom error)";
  }
  const c = {
    to: f.to ? n0(f.to) : null,
    data: f.data || "0x"
  };
  return f.from && (c.from = n0(f.from)), Q0(r, "CALL_EXCEPTION", {
    action: n,
    data: e,
    reason: a,
    transaction: c,
    invocation: s,
    revert: i
  });
}
var m0, U0;
const Mf = class Mf {
  constructor() {
    v(this, m0);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(f) {
    const e = f.map((r) => N(this, m0, U0).call(this, S.from(r)));
    return new df(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(f, e) {
    fe(e.length, f.length, "types/values length mismatch");
    const t = f.map((s) => N(this, m0, U0).call(this, S.from(s))), r = new df(t, "_"), a = new Wf();
    return r.encode(a, e), a.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(f, e, t) {
    const r = f.map((s) => N(this, m0, U0).call(this, S.from(s)));
    return new df(r, "_").decode(new Jf(e, t, L6));
  }
  static _setDefaultMaxInflation(f) {
    l(typeof f == "number" && Number.isInteger(f), "invalid defaultMaxInflation factor", "value", f), L6 = f;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return Vf == null && (Vf = new Mf()), Vf;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(f, e, t) {
    return ht(f, e, t, Mf.defaultAbiCoder());
  }
};
m0 = new WeakSet(), U0 = function(f) {
  if (f.isArray())
    return new D1(N(this, m0, U0).call(this, f.arrayChildren), f.arrayLength, f.name);
  if (f.isTuple())
    return new df(f.components.map((t) => N(this, m0, U0).call(this, t)), f.name);
  switch (f.baseType) {
    case "address":
      return new L1(f.name);
    case "bool":
      return new V1(f.name);
    case "string":
      return new Z1(f.name);
    case "bytes":
      return new H1(f.name);
    case "":
      return new W1(f.name);
  }
  let e = f.type.match(yt);
  if (e) {
    let t = parseInt(e[2] || "256");
    return l(t !== 0 && t <= 256 && t % 8 === 0, "invalid " + e[1] + " bit length", "param", f), new Y1(t / 8, e[1] === "int", f.name);
  }
  if (e = f.type.match(pt), e) {
    let t = parseInt(e[1]);
    return l(t !== 0 && t <= 32, "invalid bytes length", "param", f), new G1(t, f.name);
  }
  l(!1, "invalid type", "type", f.type);
};
let kf = Mf;
class mt {
  /**
   *  @_ignore:
   */
  constructor(f, e, t) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    u(this, "fragment");
    /**
     *  The name of the Event.
     */
    u(this, "name");
    /**
     *  The full Event signature.
     */
    u(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    u(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    u(this, "args");
    const r = f.name, a = f.format();
    w(this, {
      fragment: f,
      name: r,
      signature: a,
      topic: e,
      args: t
    });
  }
}
class gt {
  /**
   *  @_ignore:
   */
  constructor(f, e, t, r) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    u(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    u(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    u(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    u(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    u(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    u(this, "value");
    const a = f.name, s = f.format();
    w(this, {
      fragment: f,
      name: a,
      args: t,
      signature: s,
      selector: e,
      value: r
    });
  }
}
class wt {
  /**
   *  @_ignore:
   */
  constructor(f, e, t) {
    /**
     *  The matching fragment.
     */
    u(this, "fragment");
    /**
     *  The name of the Error.
     */
    u(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    u(this, "args");
    /**
     *  The full Error signature.
     */
    u(this, "signature");
    /**
     *  The selector for the Error.
     */
    u(this, "selector");
    const r = f.name, a = f.format();
    w(this, {
      fragment: f,
      name: r,
      args: t,
      signature: a,
      selector: e
    });
  }
}
class F6 {
  /**
   *  @_ignore:
   */
  constructor(f) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    u(this, "hash");
    /**
     *  @_ignore:
     */
    u(this, "_isIndexed");
    w(this, { hash: f, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(f) {
    return !!(f && f._isIndexed);
  }
}
const D6 = {
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
}, V6 = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (n) => `reverted with reason string ${JSON.stringify(n)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (n) => {
      let f = "unknown panic code";
      return n >= 0 && n <= 255 && D6[n.toString()] && (f = D6[n.toString()]), `reverted with panic code 0x${n.toString(16)} (${f})`;
    }
  }
};
var Y, Z, Q, C, D0, Tf, V0, xf;
const v0 = class v0 {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(f) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    v(this, D0);
    // Find an event definition by any means necessary (unless it is ambiguous)
    v(this, V0);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    u(this, "fragments");
    /**
     *  The Contract constructor.
     */
    u(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    u(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    u(this, "receive");
    v(this, Y, void 0);
    v(this, Z, void 0);
    v(this, Q, void 0);
    //    #structs: Map<string, StructFragment>;
    v(this, C, void 0);
    let e = [];
    typeof f == "string" ? e = JSON.parse(f) : e = f, x(this, Q, /* @__PURE__ */ new Map()), x(this, Y, /* @__PURE__ */ new Map()), x(this, Z, /* @__PURE__ */ new Map());
    const t = [];
    for (const s of e)
      try {
        t.push(M0.from(s));
      } catch (i) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(s)}:`, i.message);
      }
    w(this, {
      fragments: Object.freeze(t)
    });
    let r = null, a = !1;
    x(this, C, this.getAbiCoder()), this.fragments.forEach((s, i) => {
      let c;
      switch (s.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          w(this, { deploy: s });
          return;
        case "fallback":
          s.inputs.length === 0 ? a = !0 : (l(!r || s.payable !== r.payable, "conflicting fallback fragments", `fragments[${i}]`, s), r = s, a = r.payable);
          return;
        case "function":
          c = d(this, Q);
          break;
        case "event":
          c = d(this, Z);
          break;
        case "error":
          c = d(this, Y);
          break;
        default:
          return;
      }
      const o = s.format();
      c.has(o) || c.set(o, s);
    }), this.deploy || w(this, {
      deploy: c0.from("constructor()")
    }), w(this, { fallback: r, receive: a });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(f) {
    const e = f ? "minimal" : "full";
    return this.fragments.map((r) => r.format(e));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const f = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(f.map((e) => JSON.parse(e)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return kf.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(f) {
    const e = N(this, D0, Tf).call(this, f, null, !1);
    return l(e, "no matching function", "key", f), e.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(f) {
    return !!N(this, D0, Tf).call(this, f, null, !1);
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
  getFunction(f, e) {
    return N(this, D0, Tf).call(this, f, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(f) {
    const e = Array.from(d(this, Q).keys());
    e.sort((t, r) => t.localeCompare(r));
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      f(d(this, Q).get(r), t);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(f) {
    const e = N(this, V0, xf).call(this, f, null, !1);
    return l(e, "no matching event", "key", f), e.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(f) {
    return !!N(this, V0, xf).call(this, f, null, !1);
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
  getEvent(f, e) {
    return N(this, V0, xf).call(this, f, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(f) {
    const e = Array.from(d(this, Z).keys());
    e.sort((t, r) => t.localeCompare(r));
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      f(d(this, Z).get(r), t);
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
  getError(f, e) {
    if (f0(f)) {
      const r = f.toLowerCase();
      if (V6[r])
        return L.from(V6[r].signature);
      for (const a of d(this, Y).values())
        if (r === a.selector)
          return a;
      return null;
    }
    if (f.indexOf("(") === -1) {
      const r = [];
      for (const [a, s] of d(this, Y))
        a.split(
          "("
          /* fix:) */
        )[0] === f && r.push(s);
      if (r.length === 0)
        return f === "Error" ? L.from("error Error(string)") : f === "Panic" ? L.from("error Panic(uint256)") : null;
      if (r.length > 1) {
        const a = r.map((s) => JSON.stringify(s.format())).join(", ");
        l(!1, `ambiguous error description (i.e. ${a})`, "name", f);
      }
      return r[0];
    }
    if (f = L.from(f).format(), f === "Error(string)")
      return L.from("error Error(string)");
    if (f === "Panic(uint256)")
      return L.from("error Panic(uint256)");
    const t = d(this, Y).get(f);
    return t || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(f) {
    const e = Array.from(d(this, Y).keys());
    e.sort((t, r) => t.localeCompare(r));
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      f(d(this, Y).get(r), t);
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
  _decodeParams(f, e) {
    return d(this, C).decode(f, e);
  }
  _encodeParams(f, e) {
    return d(this, C).encode(f, e);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(f) {
    return this._encodeParams(this.deploy.inputs, f || []);
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
  decodeErrorResult(f, e) {
    if (typeof f == "string") {
      const t = this.getError(f);
      l(t, "unknown error", "fragment", f), f = t;
    }
    return l(x0(e, 0, 4) === f.selector, `data signature does not match error ${f.name}.`, "data", e), this._decodeParams(f.inputs, x0(e, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(f, e) {
    if (typeof f == "string") {
      const t = this.getError(f);
      l(t, "unknown error", "fragment", f), f = t;
    }
    return o0([
      f.selector,
      this._encodeParams(f.inputs, e || [])
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
  decodeFunctionData(f, e) {
    if (typeof f == "string") {
      const t = this.getFunction(f);
      l(t, "unknown function", "fragment", f), f = t;
    }
    return l(x0(e, 0, 4) === f.selector, `data signature does not match function ${f.name}.`, "data", e), this._decodeParams(f.inputs, x0(e, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(f, e) {
    if (typeof f == "string") {
      const t = this.getFunction(f);
      l(t, "unknown function", "fragment", f), f = t;
    }
    return o0([
      f.selector,
      this._encodeParams(f.inputs, e || [])
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
  decodeFunctionResult(f, e) {
    if (typeof f == "string") {
      const a = this.getFunction(f);
      l(a, "unknown function", "fragment", f), f = a;
    }
    let t = "invalid length for result data";
    const r = e0(e);
    if (r.length % 32 === 0)
      try {
        return d(this, C).decode(f.outputs, r);
      } catch {
        t = "could not decode result data";
      }
    g(!1, t, "BAD_DATA", {
      value: I(r),
      info: { method: f.name, signature: f.format() }
    });
  }
  makeError(f, e) {
    const t = P(f, "data"), r = kf.getBuiltinCallException("call", e, t);
    if (r.message.startsWith("execution reverted (unknown custom error)")) {
      const i = I(t.slice(0, 4)), c = this.getError(i);
      if (c)
        try {
          const o = d(this, C).decode(c.inputs, t.slice(4));
          r.revert = {
            name: c.name,
            signature: c.format(),
            args: o
          }, r.reason = r.revert.signature, r.message = `execution reverted: ${r.reason}`;
        } catch {
          r.message = "execution reverted (coult not decode custom error)";
        }
    }
    const s = this.parseTransaction(e);
    return s && (r.invocation = {
      method: s.name,
      signature: s.signature,
      args: s.args
    }), r;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(f, e) {
    if (typeof f == "string") {
      const t = this.getFunction(f);
      l(t, "unknown function", "fragment", f), f = t;
    }
    return I(d(this, C).encode(f.outputs, e || []));
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
  encodeFilterTopics(f, e) {
    if (typeof f == "string") {
      const a = this.getEvent(f);
      l(a, "unknown event", "eventFragment", f), f = a;
    }
    g(e.length <= f.inputs.length, `too many arguments for ${f.format()}`, "UNEXPECTED_ARGUMENT", { count: e.length, expectedCount: f.inputs.length });
    const t = [];
    f.anonymous || t.push(f.topicHash);
    const r = (a, s) => a.type === "string" ? j0(s) : a.type === "bytes" ? t0(I(s)) : (a.type === "bool" && typeof s == "boolean" ? s = s ? "0x01" : "0x00" : a.type.match(/^u?int/) ? s = se(s) : a.type.match(/^bytes/) ? s = ne(s, 32) : a.type === "address" && d(this, C).encode(["address"], [s]), mf(I(s), 32));
    for (e.forEach((a, s) => {
      const i = f.inputs[s];
      if (!i.indexed) {
        l(a == null, "cannot filter non-indexed parameters; must be null", "contract." + i.name, a);
        return;
      }
      a == null ? t.push(null) : i.baseType === "array" || i.baseType === "tuple" ? l(!1, "filtering with tuples or arrays not supported", "contract." + i.name, a) : Array.isArray(a) ? t.push(a.map((c) => r(i, c))) : t.push(r(i, a));
    }); t.length && t[t.length - 1] === null; )
      t.pop();
    return t;
  }
  encodeEventLog(f, e) {
    if (typeof f == "string") {
      const s = this.getEvent(f);
      l(s, "unknown event", "eventFragment", f), f = s;
    }
    const t = [], r = [], a = [];
    return f.anonymous || t.push(f.topicHash), l(e.length === f.inputs.length, "event arguments/values mismatch", "values", e), f.inputs.forEach((s, i) => {
      const c = e[i];
      if (s.indexed)
        if (s.type === "string")
          t.push(j0(c));
        else if (s.type === "bytes")
          t.push(t0(c));
        else {
          if (s.baseType === "tuple" || s.baseType === "array")
            throw new Error("not implemented");
          t.push(d(this, C).encode([s.type], [c]));
        }
      else
        r.push(s), a.push(c);
    }), {
      data: d(this, C).encode(r, a),
      topics: t
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(f, e, t) {
    if (typeof f == "string") {
      const m = this.getEvent(f);
      l(m, "unknown event", "eventFragment", f), f = m;
    }
    if (t != null && !f.anonymous) {
      const m = f.topicHash;
      l(f0(t[0], 32) && t[0].toLowerCase() === m, "fragment/topic mismatch", "topics[0]", t[0]), t = t.slice(1);
    }
    const r = [], a = [], s = [];
    f.inputs.forEach((m, T) => {
      m.indexed ? m.type === "string" || m.type === "bytes" || m.baseType === "tuple" || m.baseType === "array" ? (r.push(S.from({ type: "bytes32", name: m.name })), s.push(!0)) : (r.push(m), s.push(!1)) : (a.push(m), s.push(!1));
    });
    const i = t != null ? d(this, C).decode(r, o0(t)) : null, c = d(this, C).decode(a, e, !0), o = [], b = [];
    let p = 0, y = 0;
    return f.inputs.forEach((m, T) => {
      let A = null;
      if (m.indexed)
        if (i == null)
          A = new F6(null);
        else if (s[T])
          A = new F6(i[y++]);
        else
          try {
            A = i[y++];
          } catch (O) {
            A = O;
          }
      else
        try {
          A = c[p++];
        } catch (O) {
          A = O;
        }
      o.push(A), b.push(m.name || null);
    }), vf.fromItems(o, b);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(f) {
    const e = P(f.data, "tx.data"), t = d0(f.value != null ? f.value : 0, "tx.value"), r = this.getFunction(I(e.slice(0, 4)));
    if (!r)
      return null;
    const a = d(this, C).decode(r.inputs, e.slice(4));
    return new gt(r, r.selector, a, t);
  }
  parseCallResult(f) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(f) {
    const e = this.getEvent(f.topics[0]);
    return !e || e.anonymous ? null : new mt(e, e.topicHash, this.decodeEventLog(e, f.data, f.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(f) {
    const e = I(f), t = this.getError(x0(e, 0, 4));
    if (!t)
      return null;
    const r = d(this, C).decode(t.inputs, x0(e, 4));
    return new wt(t, t.selector, r);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(f) {
    return f instanceof v0 ? f : typeof f == "string" ? new v0(JSON.parse(f)) : typeof f.formatJson == "function" ? new v0(f.formatJson()) : typeof f.format == "function" ? new v0(f.format("json")) : new v0(f);
  }
};
Y = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), C = new WeakMap(), D0 = new WeakSet(), Tf = function(f, e, t) {
  if (f0(f)) {
    const a = f.toLowerCase();
    for (const s of d(this, Q).values())
      if (a === s.selector)
        return s;
    return null;
  }
  if (f.indexOf("(") === -1) {
    const a = [];
    for (const [s, i] of d(this, Q))
      s.split(
        "("
        /* fix:) */
      )[0] === f && a.push(i);
    if (e) {
      const s = e.length > 0 ? e[e.length - 1] : null;
      let i = e.length, c = !0;
      U.isTyped(s) && s.type === "overrides" && (c = !1, i--);
      for (let o = a.length - 1; o >= 0; o--) {
        const b = a[o].inputs.length;
        b !== i && (!c || b !== i - 1) && a.splice(o, 1);
      }
      for (let o = a.length - 1; o >= 0; o--) {
        const b = a[o].inputs;
        for (let p = 0; p < e.length; p++)
          if (U.isTyped(e[p])) {
            if (p >= b.length) {
              if (e[p].type === "overrides")
                continue;
              a.splice(o, 1);
              break;
            }
            if (e[p].type !== b[p].baseType) {
              a.splice(o, 1);
              break;
            }
          }
      }
    }
    if (a.length === 1 && e && e.length !== a[0].inputs.length) {
      const s = e[e.length - 1];
      (s == null || Array.isArray(s) || typeof s != "object") && a.splice(0, 1);
    }
    if (a.length === 0)
      return null;
    if (a.length > 1 && t) {
      const s = a.map((i) => JSON.stringify(i.format())).join(", ");
      l(!1, `ambiguous function description (i.e. matches ${s})`, "key", f);
    }
    return a[0];
  }
  const r = d(this, Q).get(j.from(f).format());
  return r || null;
}, V0 = new WeakSet(), xf = function(f, e, t) {
  if (f0(f)) {
    const a = f.toLowerCase();
    for (const s of d(this, Z).values())
      if (a === s.topicHash)
        return s;
    return null;
  }
  if (f.indexOf("(") === -1) {
    const a = [];
    for (const [s, i] of d(this, Z))
      s.split(
        "("
        /* fix:) */
      )[0] === f && a.push(i);
    if (e) {
      for (let s = a.length - 1; s >= 0; s--)
        a[s].inputs.length < e.length && a.splice(s, 1);
      for (let s = a.length - 1; s >= 0; s--) {
        const i = a[s].inputs;
        for (let c = 0; c < e.length; c++)
          if (U.isTyped(e[c]) && e[c].type !== i[c].baseType) {
            a.splice(s, 1);
            break;
          }
      }
    }
    if (a.length === 0)
      return null;
    if (a.length > 1 && t) {
      const s = a.map((i) => JSON.stringify(i.format())).join(", ");
      l(!1, `ambiguous event description (i.e. matches ${s})`, "key", f);
    }
    return a[0];
  }
  const r = d(this, Z).get(q.from(f).format());
  return r || null;
};
let S0 = v0;
const Se = BigInt(0);
function z(n) {
  return n == null ? null : n.toString();
}
function Tt(n) {
  const f = {};
  n.to && (f.to = n.to), n.from && (f.from = n.from), n.data && (f.data = I(n.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const r of e)
    !(r in n) || n[r] == null || (f[r] = d0(n[r], `request.${r}`));
  const t = "type,nonce".split(/,/);
  for (const r of t)
    !(r in n) || n[r] == null || (f[r] = l0(n[r], `request.${r}`));
  return n.accessList && (f.accessList = Q1(n.accessList)), "blockTag" in n && (f.blockTag = n.blockTag), "enableCcipRead" in n && (f.enableCcipRead = !!n.enableCcipRead), "customData" in n && (f.customData = n.customData), "blobVersionedHashes" in n && n.blobVersionedHashes && (f.blobVersionedHashes = n.blobVersionedHashes.slice()), "kzg" in n && (f.kzg = n.kzg), "blobs" in n && n.blobs && (f.blobs = n.blobs.map((r) => Ze(r) ? I(r) : Object.assign({}, r))), f;
}
class Bf {
  /**
   *  @_ignore:
   */
  constructor(f, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    u(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    u(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    u(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    u(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    u(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    u(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    u(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    u(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    u(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    u(this, "transactionIndex");
    this.provider = e;
    const t = Object.freeze(f.topics.slice());
    w(this, {
      transactionHash: f.transactionHash,
      blockHash: f.blockHash,
      blockNumber: f.blockNumber,
      removed: f.removed,
      address: f.address,
      data: f.data,
      topics: t,
      index: f.index,
      transactionIndex: f.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: f, blockHash: e, blockNumber: t, data: r, index: a, removed: s, topics: i, transactionHash: c, transactionIndex: o } = this;
    return {
      _type: "log",
      address: f,
      blockHash: e,
      blockNumber: t,
      data: r,
      index: a,
      removed: s,
      topics: i,
      transactionHash: c,
      transactionIndex: o
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const f = await this.provider.getBlock(this.blockHash);
    return g(!!f, "failed to find transaction", "UNKNOWN_ERROR", {}), f;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const f = await this.provider.getTransaction(this.transactionHash);
    return g(!!f, "failed to find transaction", "UNKNOWN_ERROR", {}), f;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const f = await this.provider.getTransactionReceipt(this.transactionHash);
    return g(!!f, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), f;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Et(this);
  }
}
var rf;
class xt {
  /**
   *  @_ignore:
   */
  constructor(f, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    u(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    u(this, "to");
    /**
     *  The sender of the transaction.
     */
    u(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    u(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    u(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    u(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    u(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    u(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    u(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    u(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    u(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    u(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    u(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    u(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    u(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    u(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    u(this, "root");
    v(this, rf, void 0);
    x(this, rf, Object.freeze(f.logs.map((r) => new Bf(r, e))));
    let t = Se;
    f.effectiveGasPrice != null ? t = f.effectiveGasPrice : f.gasPrice != null && (t = f.gasPrice), w(this, {
      provider: e,
      to: f.to,
      from: f.from,
      contractAddress: f.contractAddress,
      hash: f.hash,
      index: f.index,
      blockHash: f.blockHash,
      blockNumber: f.blockNumber,
      logsBloom: f.logsBloom,
      gasUsed: f.gasUsed,
      cumulativeGasUsed: f.cumulativeGasUsed,
      blobGasUsed: f.blobGasUsed,
      gasPrice: t,
      blobGasPrice: f.blobGasPrice,
      type: f.type,
      //byzantium: tx.byzantium,
      status: f.status,
      root: f.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return d(this, rf);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: f,
      from: e,
      contractAddress: t,
      hash: r,
      index: a,
      blockHash: s,
      blockNumber: i,
      logsBloom: c,
      logs: o,
      //byzantium, 
      status: b,
      root: p
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: s,
      blockNumber: i,
      //byzantium, 
      contractAddress: t,
      cumulativeGasUsed: z(this.cumulativeGasUsed),
      from: e,
      gasPrice: z(this.gasPrice),
      blobGasUsed: z(this.blobGasUsed),
      blobGasPrice: z(this.blobGasPrice),
      gasUsed: z(this.gasUsed),
      hash: r,
      index: a,
      logs: o,
      logsBloom: c,
      root: p,
      status: b,
      to: f
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let f = 0;
    return {
      next: () => f < this.length ? { value: this.logs[f++], done: !1 } : { value: void 0, done: !0 }
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
    const f = await this.provider.getBlock(this.blockHash);
    if (f == null)
      throw new Error("TODO");
    return f;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const f = await this.provider.getTransaction(this.hash);
    if (f == null)
      throw new Error("TODO");
    return f;
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
    return Ue(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(f) {
    return g(!f || f.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Ce(this, f);
  }
}
rf = new WeakMap();
var g0;
const u6 = class u6 {
  /**
   *  @_ignore:
   */
  constructor(f, e) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    u(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    u(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    u(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    u(this, "index");
    /**
     *  The transaction hash.
     */
    u(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    u(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    u(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    u(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    u(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    u(this, "gasLimit");
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
    u(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    u(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    u(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    u(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    u(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    u(this, "value");
    /**
     *  The chain ID.
     */
    u(this, "chainId");
    /**
     *  The signature.
     */
    u(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    u(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    u(this, "blobVersionedHashes");
    v(this, g0, void 0);
    this.provider = e, this.blockNumber = f.blockNumber != null ? f.blockNumber : null, this.blockHash = f.blockHash != null ? f.blockHash : null, this.hash = f.hash, this.index = f.index, this.type = f.type, this.from = f.from, this.to = f.to || null, this.gasLimit = f.gasLimit, this.nonce = f.nonce, this.data = f.data, this.value = f.value, this.gasPrice = f.gasPrice, this.maxPriorityFeePerGas = f.maxPriorityFeePerGas != null ? f.maxPriorityFeePerGas : null, this.maxFeePerGas = f.maxFeePerGas != null ? f.maxFeePerGas : null, this.maxFeePerBlobGas = f.maxFeePerBlobGas != null ? f.maxFeePerBlobGas : null, this.chainId = f.chainId, this.signature = f.signature, this.accessList = f.accessList != null ? f.accessList : null, this.blobVersionedHashes = f.blobVersionedHashes != null ? f.blobVersionedHashes : null, x(this, g0, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: f, blockHash: e, index: t, hash: r, type: a, to: s, from: i, nonce: c, data: o, signature: b, accessList: p, blobVersionedHashes: y } = this;
    return {
      _type: "TransactionResponse",
      accessList: p,
      blockNumber: f,
      blockHash: e,
      blobVersionedHashes: y,
      chainId: z(this.chainId),
      data: o,
      from: i,
      gasLimit: z(this.gasLimit),
      gasPrice: z(this.gasPrice),
      hash: r,
      maxFeePerGas: z(this.maxFeePerGas),
      maxPriorityFeePerGas: z(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: z(this.maxFeePerBlobGas),
      nonce: c,
      signature: b,
      to: s,
      index: t,
      type: a,
      value: z(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let f = this.blockNumber;
    if (f == null) {
      const t = await this.getTransaction();
      t && (f = t.blockNumber);
    }
    if (f == null)
      return null;
    const e = this.provider.getBlock(f);
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
      const { tx: e, blockNumber: t } = await Gf({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return e == null || e.blockNumber == null ? 0 : t - e.blockNumber + 1;
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
  async wait(f, e) {
    const t = f ?? 1, r = e ?? 0;
    let a = d(this, g0), s = -1, i = a === -1;
    const c = async () => {
      if (i)
        return null;
      const { blockNumber: y, nonce: m } = await Gf({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (m < this.nonce) {
        a = y;
        return;
      }
      if (i)
        return null;
      const T = await this.getTransaction();
      if (!(T && T.blockNumber != null))
        for (s === -1 && (s = a - 3, s < d(this, g0) && (s = d(this, g0))); s <= y; ) {
          if (i)
            return null;
          const A = await this.provider.getBlock(s, !0);
          if (A == null)
            return;
          for (const O of A)
            if (O === this.hash)
              return;
          for (let O = 0; O < A.length; O++) {
            const k = await A.getTransaction(O);
            if (k.from === this.from && k.nonce === this.nonce) {
              if (i)
                return null;
              const D = await this.provider.getTransactionReceipt(k.hash);
              if (D == null || y - D.blockNumber + 1 < t)
                return;
              let T0 = "replaced";
              k.data === this.data && k.to === this.to && k.value === this.value ? T0 = "repriced" : k.data === "0x" && k.from === k.to && k.value === Se && (T0 = "cancelled"), g(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: T0 === "replaced" || T0 === "cancelled",
                reason: T0,
                replacement: k.replaceableTransaction(a),
                hash: k.hash,
                receipt: D
              });
            }
          }
          s++;
        }
    }, o = (y) => {
      if (y == null || y.status !== 0)
        return y;
      g(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: y.to,
          from: y.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: y
      });
    }, b = await this.provider.getTransactionReceipt(this.hash);
    if (t === 0)
      return o(b);
    if (b) {
      if (await b.confirmations() >= t)
        return o(b);
    } else if (await c(), t === 0)
      return null;
    return await new Promise((y, m) => {
      const T = [], A = () => {
        T.forEach((k) => k());
      };
      if (T.push(() => {
        i = !0;
      }), r > 0) {
        const k = setTimeout(() => {
          A(), m(Q0("wait for transaction timeout", "TIMEOUT"));
        }, r);
        T.push(() => {
          clearTimeout(k);
        });
      }
      const O = async (k) => {
        if (await k.confirmations() >= t) {
          A();
          try {
            y(o(k));
          } catch (D) {
            m(D);
          }
        }
      };
      if (T.push(() => {
        this.provider.off(this.hash, O);
      }), this.provider.on(this.hash, O), a >= 0) {
        const k = async () => {
          try {
            await c();
          } catch (D) {
            if (G0(D, "TRANSACTION_REPLACED")) {
              A(), m(D);
              return;
            }
          }
          i || this.provider.once("block", k);
        };
        T.push(() => {
          this.provider.off("block", k);
        }), this.provider.once("block", k);
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
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Ue(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(f) {
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), g(!f || f.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Ce(this, f);
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
  replaceableTransaction(f) {
    l(Number.isInteger(f) && f >= 0, "invalid startBlock", "startBlock", f);
    const e = new u6(this, this.provider);
    return x(e, g0, f), e;
  }
};
g0 = new WeakMap();
let Yf = u6;
function Ce(n, f) {
  return { orphan: "reorder-transaction", tx: n, other: f };
}
function Ue(n) {
  return { orphan: "drop-transaction", tx: n };
}
function Et(n) {
  return { orphan: "drop-log", log: {
    transactionHash: n.transactionHash,
    blockHash: n.blockHash,
    blockNumber: n.blockNumber,
    address: n.address,
    data: n.data,
    topics: Object.freeze(n.topics.slice()),
    index: n.index
  } };
}
class t6 extends Bf {
  /**
   * @_ignore:
   */
  constructor(e, t, r) {
    super(e, e.provider);
    /**
     *  The Contract Interface.
     */
    u(this, "interface");
    /**
     *  The matching event.
     */
    u(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    u(this, "args");
    const a = t.decodeEventLog(r, e.data, e.topics);
    w(this, { args: a, fragment: r, interface: t });
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
class _e extends Bf {
  /**
   * @_ignore:
   */
  constructor(e, t) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    u(this, "error");
    w(this, { error: t });
  }
}
var H0;
class vt extends xt {
  /**
   *  @_ignore:
   */
  constructor(e, t, r) {
    super(r, t);
    v(this, H0, void 0);
    x(this, H0, e);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((e) => {
      const t = e.topics.length ? d(this, H0).getEvent(e.topics[0]) : null;
      if (t)
        try {
          return new t6(e, d(this, H0), t);
        } catch (r) {
          return new _e(e, r);
        }
      return e;
    });
  }
}
H0 = new WeakMap();
var af;
class n6 extends Yf {
  /**
   *  @_ignore:
   */
  constructor(e, t, r) {
    super(r, t);
    v(this, af, void 0);
    x(this, af, e);
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
  async wait(e, t) {
    const r = await super.wait(e, t);
    return r == null ? null : new vt(d(this, af), this.provider, r);
  }
}
af = new WeakMap();
class Be extends f1 {
  /**
   *  @_event:
   */
  constructor(e, t, r, a) {
    super(e, t, r);
    /**
     *  The log with no matching events.
     */
    u(this, "log");
    w(this, { log: a });
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
class kt extends Be {
  /**
   *  @_ignore:
   */
  constructor(f, e, t, r, a) {
    super(f, e, t, new t6(a, f.interface, r));
    const s = f.interface.decodeEventLog(r, this.log.data, this.log.topics);
    w(this, { args: s, fragment: r });
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
const H6 = BigInt(0);
function $e(n) {
  return n && typeof n.call == "function";
}
function Le(n) {
  return n && typeof n.estimateGas == "function";
}
function $f(n) {
  return n && typeof n.resolveName == "function";
}
function Fe(n) {
  return n && typeof n.sendTransaction == "function";
}
function De(n) {
  if (n != null) {
    if ($f(n))
      return n;
    if (n.provider)
      return n.provider;
  }
}
var sf;
class At {
  constructor(f, e, t) {
    v(this, sf, void 0);
    u(this, "fragment");
    if (w(this, { fragment: e }), e.inputs.length < t.length)
      throw new Error("too many arguments");
    const r = C0(f.runner, "resolveName"), a = $f(r) ? r : null;
    x(this, sf, async function() {
      const s = await Promise.all(e.inputs.map((i, c) => t[c] == null ? null : i.walkAsync(t[c], (b, p) => b === "address" ? Array.isArray(p) ? Promise.all(p.map((y) => q0(y, a))) : q0(p, a) : p)));
      return f.interface.encodeFilterTopics(e, s);
    }());
  }
  getTopicFilter() {
    return d(this, sf);
  }
}
sf = new WeakMap();
function C0(n, f) {
  return n == null ? null : typeof n[f] == "function" ? n : n.provider && typeof n.provider[f] == "function" ? n.provider : null;
}
function k0(n) {
  return n == null ? null : n.provider || null;
}
async function r6(n, f) {
  const e = U.dereference(n, "overrides");
  l(typeof e == "object", "invalid overrides parameter", "overrides", n);
  const t = Tt(e);
  return l(t.to == null || (f || []).indexOf("to") >= 0, "cannot override to", "overrides.to", t.to), l(t.data == null || (f || []).indexOf("data") >= 0, "cannot override data", "overrides.data", t.data), t.from && (t.from = t.from), t;
}
async function Ve(n, f, e) {
  const t = C0(n, "resolveName"), r = $f(t) ? t : null;
  return await Promise.all(f.map((a, s) => a.walkAsync(e[s], (i, c) => (c = U.dereference(c, i), i === "address" ? q0(c, r) : c))));
}
function Nt(n) {
  const f = async function(s) {
    const i = await r6(s, ["data"]);
    i.to = await n.getAddress(), i.from && (i.from = await q0(i.from, De(n.runner)));
    const c = n.interface, o = d0(i.value || H6, "overrides.value") === H6, b = (i.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !b && !o && l(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", s), l(c.fallback || b, "cannot send data to receive-only contract", "overrides.data", i.data);
    const p = c.receive || c.fallback && c.fallback.payable;
    return l(p || o, "cannot send value to non-payable fallback", "overrides.value", i.value), l(c.fallback || b, "cannot send data to receive-only contract", "overrides.data", i.data), i;
  }, e = async function(s) {
    const i = C0(n.runner, "call");
    g($e(i), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await f(s);
    try {
      return await i.call(c);
    } catch (o) {
      throw j6(o) && o.data ? n.interface.makeError(o.data, c) : o;
    }
  }, t = async function(s) {
    const i = n.runner;
    g(Fe(i), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await i.sendTransaction(await f(s)), o = k0(n.runner);
    return new n6(n.interface, o, c);
  }, r = async function(s) {
    const i = C0(n.runner, "estimateGas");
    return g(Le(i), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await i.estimateGas(await f(s));
  }, a = async (s) => await t(s);
  return w(a, {
    _contract: n,
    estimateGas: r,
    populateTransaction: f,
    send: t,
    staticCall: e
  }), a;
}
function Rt(n, f) {
  const e = function(...o) {
    const b = n.interface.getFunction(f, o);
    return g(b, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: f, args: o }
    }), b;
  }, t = async function(...o) {
    const b = e(...o);
    let p = {};
    if (b.inputs.length + 1 === o.length && (p = await r6(o.pop()), p.from && (p.from = await q0(p.from, De(n.runner)))), b.inputs.length !== o.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const y = await Ve(n.runner, b.inputs, o);
    return Object.assign({}, p, await Gf({
      to: n.getAddress(),
      data: n.interface.encodeFunctionData(b, y)
    }));
  }, r = async function(...o) {
    const b = await i(...o);
    return b.length === 1 ? b[0] : b;
  }, a = async function(...o) {
    const b = n.runner;
    g(Fe(b), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const p = await b.sendTransaction(await t(...o)), y = k0(n.runner);
    return new n6(n.interface, y, p);
  }, s = async function(...o) {
    const b = C0(n.runner, "estimateGas");
    return g(Le(b), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await b.estimateGas(await t(...o));
  }, i = async function(...o) {
    const b = C0(n.runner, "call");
    g($e(b), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const p = await t(...o);
    let y = "0x";
    try {
      y = await b.call(p);
    } catch (T) {
      throw j6(T) && T.data ? n.interface.makeError(T.data, p) : T;
    }
    const m = e(...o);
    return n.interface.decodeFunctionResult(m, y);
  }, c = async (...o) => e(...o).constant ? await r(...o) : await a(...o);
  return w(c, {
    name: n.interface.getFunctionName(f),
    _contract: n,
    _key: f,
    getFragment: e,
    estimateGas: s,
    populateTransaction: t,
    send: a,
    staticCall: r,
    staticCallResult: i
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const o = n.interface.getFunction(f);
      return g(o, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: f }
      }), o;
    }
  }), c;
}
function Ot(n, f) {
  const e = function(...r) {
    const a = n.interface.getEvent(f, r);
    return g(a, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: f, args: r }
    }), a;
  }, t = function(...r) {
    return new At(n, e(...r), r);
  };
  return w(t, {
    name: n.interface.getEventName(f),
    _contract: n,
    _key: f,
    getFragment: e
  }), Object.defineProperty(t, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const r = n.interface.getEvent(f);
      return g(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: f }
      }), r;
    }
  }), t;
}
const Af = Symbol.for("_ethersInternal_contract"), He = /* @__PURE__ */ new WeakMap();
function It(n, f) {
  He.set(n[Af], f);
}
function V(n) {
  return He.get(n[Af]);
}
function Pt(n) {
  return n && typeof n == "object" && "getTopicFilter" in n && typeof n.getTopicFilter == "function" && n.fragment;
}
async function a6(n, f) {
  let e, t = null;
  if (Array.isArray(f)) {
    const a = function(s) {
      if (f0(s, 32))
        return s;
      const i = n.interface.getEvent(s);
      return l(i, "unknown fragment", "name", s), i.topicHash;
    };
    e = f.map((s) => s == null ? null : Array.isArray(s) ? s.map(a) : a(s));
  } else
    f === "*" ? e = [null] : typeof f == "string" ? f0(f, 32) ? e = [f] : (t = n.interface.getEvent(f), l(t, "unknown fragment", "event", f), e = [t.topicHash]) : Pt(f) ? e = await f.getTopicFilter() : "fragment" in f ? (t = f.fragment, e = [t.topicHash]) : l(!1, "unknown event name", "event", f);
  e = e.map((a) => {
    if (a == null)
      return null;
    if (Array.isArray(a)) {
      const s = Array.from(new Set(a.map((i) => i.toLowerCase())).values());
      return s.length === 1 ? s[0] : (s.sort(), s);
    }
    return a.toLowerCase();
  });
  const r = e.map((a) => a == null ? "null" : Array.isArray(a) ? a.join("|") : a).join("&");
  return { fragment: t, tag: r, topics: e };
}
async function J0(n, f) {
  const { subs: e } = V(n);
  return e.get((await a6(n, f)).tag) || null;
}
async function G6(n, f, e) {
  const t = k0(n.runner);
  g(t, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: f });
  const { fragment: r, tag: a, topics: s } = await a6(n, e), { addr: i, subs: c } = V(n);
  let o = c.get(a);
  if (!o) {
    const p = { address: i || n, topics: s }, y = (O) => {
      let k = r;
      if (k == null)
        try {
          k = n.interface.getEvent(O.topics[0]);
        } catch {
        }
      if (k) {
        const D = k, T0 = r ? n.interface.decodeEventLog(r, O.data, O.topics) : [];
        Qf(n, e, T0, (Ge) => new kt(n, Ge, e, D, O));
      } else
        Qf(n, e, [], (D) => new Be(n, D, e, O));
    };
    let m = [];
    o = { tag: a, listeners: [], start: () => {
      m.length || m.push(t.on(p, y));
    }, stop: async () => {
      if (m.length == 0)
        return;
      let O = m;
      m = [], await Promise.all(O), t.off(p, y);
    } }, c.set(a, o);
  }
  return o;
}
let Zf = Promise.resolve();
async function Mt(n, f, e, t) {
  await Zf;
  const r = await J0(n, f);
  if (!r)
    return !1;
  const a = r.listeners.length;
  return r.listeners = r.listeners.filter(({ listener: s, once: i }) => {
    const c = Array.from(e);
    t && c.push(t(i ? null : s));
    try {
      s.call(n, ...c);
    } catch {
    }
    return !i;
  }), r.listeners.length === 0 && (r.stop(), V(n).subs.delete(r.tag)), a > 0;
}
async function Qf(n, f, e, t) {
  try {
    await Zf;
  } catch {
  }
  const r = Mt(n, f, e, t);
  return Zf = r, await r;
}
const lf = ["then"];
var Lt;
const X0 = class X0 {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(f, e, t, r) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    u(this, "target");
    /**
     *  The contract Interface.
     */
    u(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    u(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    u(this, "filters");
    /**
     *  @_ignore:
     */
    u(this, Lt);
    /**
     *  The fallback or receive function if any.
     */
    u(this, "fallback");
    l(typeof f == "string" || we(f), "invalid value for Contract target", "target", f), t == null && (t = null);
    const a = S0.from(e);
    w(this, { target: f, runner: t, interface: a }), Object.defineProperty(this, Af, { value: {} });
    let s, i = null, c = null;
    if (r) {
      const p = k0(t);
      c = new n6(this.interface, p, r);
    }
    let o = /* @__PURE__ */ new Map();
    if (typeof f == "string")
      if (f0(f))
        i = f, s = Promise.resolve(f);
      else {
        const p = C0(t, "resolveName");
        if (!$f(p))
          throw Q0("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        s = p.resolveName(f).then((y) => {
          if (y == null)
            throw Q0("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: f
            });
          return V(this).addr = y, y;
        });
      }
    else
      s = f.getAddress().then((p) => {
        if (p == null)
          throw new Error("TODO");
        return V(this).addr = p, p;
      });
    It(this, { addrPromise: s, addr: i, deployTx: c, subs: o });
    const b = new Proxy({}, {
      get: (p, y, m) => {
        if (typeof y == "symbol" || lf.indexOf(y) >= 0)
          return Reflect.get(p, y, m);
        try {
          return this.getEvent(y);
        } catch (T) {
          if (!G0(T, "INVALID_ARGUMENT") || T.argument !== "key")
            throw T;
        }
      },
      has: (p, y) => lf.indexOf(y) >= 0 ? Reflect.has(p, y) : Reflect.has(p, y) || this.interface.hasEvent(String(y))
    });
    return w(this, { filters: b }), w(this, {
      fallback: a.receive || a.fallback ? Nt(this) : null
    }), new Proxy(this, {
      get: (p, y, m) => {
        if (typeof y == "symbol" || y in p || lf.indexOf(y) >= 0)
          return Reflect.get(p, y, m);
        try {
          return p.getFunction(y);
        } catch (T) {
          if (!G0(T, "INVALID_ARGUMENT") || T.argument !== "key")
            throw T;
        }
      },
      has: (p, y) => typeof y == "symbol" || y in p || lf.indexOf(y) >= 0 ? Reflect.has(p, y) : p.interface.hasFunction(y)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(f) {
    return new X0(this.target, this.interface, f);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(f) {
    return new X0(f, this.interface, this.runner);
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
    const f = k0(this.runner);
    g(f, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const e = await f.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const f = this.deploymentTransaction();
    if (f)
      return await f.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const t = k0(this.runner);
    return g(t != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((r, a) => {
      const s = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return r(this);
          t.once("block", s);
        } catch (i) {
          a(i);
        }
      };
      s();
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
  getFunction(f) {
    return typeof f != "string" && (f = f.format()), Rt(this, f);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(f) {
    return typeof f != "string" && (f = f.format()), Ot(this, f);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(f) {
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
  async queryFilter(f, e, t) {
    e == null && (e = 0), t == null && (t = "latest");
    const { addr: r, addrPromise: a } = V(this), s = r || await a, { fragment: i, topics: c } = await a6(this, f), o = { address: s, topics: c, fromBlock: e, toBlock: t }, b = k0(this.runner);
    return g(b, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await b.getLogs(o)).map((p) => {
      let y = i;
      if (y == null)
        try {
          y = this.interface.getEvent(p.topics[0]);
        } catch {
        }
      if (y)
        try {
          return new t6(p, this.interface, y);
        } catch (m) {
          return new _e(p, m);
        }
      return new Bf(p, b);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(f, e) {
    const t = await G6(this, "on", f);
    return t.listeners.push({ listener: e, once: !1 }), t.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(f, e) {
    const t = await G6(this, "once", f);
    return t.listeners.push({ listener: e, once: !0 }), t.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(f, ...e) {
    return await Qf(this, f, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(f) {
    if (f) {
      const r = await J0(this, f);
      return r ? r.listeners.length : 0;
    }
    const { subs: e } = V(this);
    let t = 0;
    for (const { listeners: r } of e.values())
      t += r.length;
    return t;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(f) {
    if (f) {
      const r = await J0(this, f);
      return r ? r.listeners.map(({ listener: a }) => a) : [];
    }
    const { subs: e } = V(this);
    let t = [];
    for (const { listeners: r } of e.values())
      t = t.concat(r.map(({ listener: a }) => a));
    return t;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(f, e) {
    const t = await J0(this, f);
    if (!t)
      return this;
    if (e) {
      const r = t.listeners.map(({ listener: a }) => a).indexOf(e);
      r >= 0 && t.listeners.splice(r, 1);
    }
    return (e == null || t.listeners.length === 0) && (t.stop(), V(this).subs.delete(t.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(f) {
    if (f) {
      const e = await J0(this, f);
      if (!e)
        return this;
      e.stop(), V(this).subs.delete(e.tag);
    } else {
      const { subs: e } = V(this);
      for (const { tag: t, stop: r } of e.values())
        r(), e.delete(t);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(f, e) {
    return await this.on(f, e);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(f, e) {
    return await this.off(f, e);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(f) {
    class e extends X0 {
      constructor(r, a = null) {
        super(r, f, a);
      }
    }
    return e;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(f, e, t) {
    return t == null && (t = null), new this(f, e, t);
  }
};
Lt = Af;
let ef = X0;
function St() {
  return ef;
}
class s6 extends St() {
}
class cf {
  /**
   *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
   *  optionally connected to %%runner%%.
   *
   *  The %%bytecode%% may be the ``bytecode`` property within the
   *  standard Solidity JSON output.
   */
  constructor(f, e, t) {
    /**
     *  The Contract Interface.
     */
    u(this, "interface");
    /**
     *  The Contract deployment bytecode. Often called the initcode.
     */
    u(this, "bytecode");
    /**
     *  The ContractRunner to deploy the Contract as.
     */
    u(this, "runner");
    const r = S0.from(f);
    e instanceof Uint8Array || (typeof e == "object" && (e = e.object), e.startsWith("0x") || (e = "0x" + e)), e = I(P(e)), w(this, {
      bytecode: e,
      interface: r,
      runner: t || null
    });
  }
  attach(f) {
    return new ef(f, this.interface, this.runner);
  }
  /**
   *  Resolves to the transaction to deploy the contract, passing %%args%%
   *  into the constructor.
   */
  async getDeployTransaction(...f) {
    let e = {};
    const t = this.interface.deploy;
    if (t.inputs.length + 1 === f.length && (e = await r6(f.pop())), t.inputs.length !== f.length)
      throw new Error("incorrect number of arguments to constructor");
    const r = await Ve(this.runner, t.inputs, f), a = o0([this.bytecode, this.interface.encodeDeploy(r)]);
    return Object.assign({}, e, { data: a });
  }
  /**
   *  Resolves to the Contract deployed by passing %%args%% into the
   *  constructor.
   *
   *  This will resolve to the Contract before it has been deployed to the
   *  network, so the [[BaseContract-waitForDeployment]] should be used before
   *  sending any transactions to it.
   */
  async deploy(...f) {
    const e = await this.getDeployTransaction(...f);
    g(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
      operation: "sendTransaction"
    });
    const t = await this.runner.sendTransaction(e), r = $1(t);
    return new ef(r, this.interface, this.runner, t);
  }
  /**
   *  Return a new **ContractFactory** with the same ABI and bytecode,
   *  but connected to %%runner%%.
   */
  connect(f) {
    return new cf(this.interface, this.bytecode, f);
  }
  /**
   *  Create a new **ContractFactory** from the standard Solidity JSON output.
   */
  static fromSolidity(f, e) {
    l(f != null, "bad compiler output", "output", f), typeof f == "string" && (f = JSON.parse(f));
    const t = f.abi;
    let r = "";
    return f.bytecode ? r = f.bytecode : f.evm && f.evm.bytecode && (r = f.evm.bytecode), new this(t, r, e);
  }
}
class i6 {
  constructor(f, e, t, r) {
    u(this, "network");
    u(this, "chain");
    u(this, "provider");
    u(this, "contracts");
    u(this, "chainId");
    u(this, "circleChainId");
    u(this, "msgTransmitter");
    u(this, "tokenMessenger");
    u(this, "tokenEventHash");
    u(this, "messageSentEventHash");
    u(this, "messageReceivedEventHash");
    var c, o;
    if (this.network = f, this.chain = e, this.provider = t, this.contracts = r, f === "Devnet")
      throw new Error("CircleBridge not supported on Devnet");
    this.chainId = X6.get(f, e);
    const a = d6.get(f, e);
    if (a === void 0)
      throw new Error(`Circle chain id not found for ${f} ${e}`);
    this.circleChainId = a;
    const s = (c = r.cctp) == null ? void 0 : c.messageTransmitter;
    if (!s)
      throw new Error(`Circle Messenge Transmitter contract for domain ${e} not found`);
    this.msgTransmitter = Of.connect(s, t);
    const i = (o = r.cctp) == null ? void 0 : o.tokenMessenger;
    if (!i)
      throw new Error(`Circle Token Messenger contract for domain ${e} not found`);
    this.tokenMessenger = Rf.connect(i, t), this.tokenEventHash = this.tokenMessenger.getEvent("DepositForBurn").fragment.topicHash, this.messageSentEventHash = this.msgTransmitter.getEvent("MessageSent").fragment.topicHash, this.messageReceivedEventHash = this.msgTransmitter.getEvent("MessageReceived").fragment.topicHash;
  }
  static async fromRpc(f, e) {
    const [t, r] = await Ef.chainFromRpc(f), a = e[r];
    if (a.network !== t)
      throw new Error(`Network mismatch: ${a.network} != ${t}`);
    return new i6(t, r, f, a.contracts);
  }
  async *redeem(f, e, t) {
    const r = new Hf(f).toString(), a = await this.msgTransmitter.receiveMessage.populateTransaction(l6.serialize(e), p6.decode(t));
    yield this.createUnsignedTx(K0(a, r), "CircleBridge.redeem");
  }
  //alternative naming: initiateTransfer
  async *transfer(f, e, t) {
    const r = new Hf(f).toString(), a = e.address.toUniversalAddress().toUint8Array(), s = Y6.get(this.network, this.chain), i = Ef.getTokenImplementation(this.provider, s);
    if (await i.allowance(r, this.tokenMessenger.target) < t) {
      const b = await i.approve.populateTransaction(this.tokenMessenger.target, t);
      yield this.createUnsignedTx(K0(b, r), "ERC20.approve of CircleBridge", !1);
    }
    const o = await this.tokenMessenger.depositForBurn.populateTransaction(t, d6.get(this.network, e.chain), a, s);
    yield this.createUnsignedTx(K0(o, r), "CircleBridge.transfer");
  }
  async isTransferCompleted(f) {
    const e = t0(et(["uint32", "uint64"], [f.sourceDomain, f.nonce]));
    return (await this.msgTransmitter.usedNonces.staticCall(e)).toString() === "1";
  }
  // Fetch the transaction logs and parse the CircleTransferMessage
  async parseTransactionDetails(f) {
    const e = await this.provider.getTransactionReceipt(f);
    if (!e)
      throw new Error(`No receipt for ${f} on ${this.chain}`);
    const t = e.logs.filter((T) => T.topics[0] === this.messageSentEventHash).map((T) => {
      const { topics: A, data: O } = T;
      return this.msgTransmitter.interface.parseLog({
        topics: A.slice(),
        data: O
      });
    }).filter((T) => !!T);
    if (t.length === 0)
      throw new Error(`No log message for message transmitter found in ${f}`);
    t.length > 1 && console.error(`Expected 1 event to be found for transaction, got>${t.length}}`);
    const [r] = t, { message: a } = r.args, [s, i] = l6.deserialize(p6.decode(a)), { payload: c } = s, o = c.messageSender, b = c.mintRecipient, p = y6(this.network, s.sourceDomain), y = y6(this.network, s.destinationDomain), m = { chain: p, address: c.burnToken };
    return {
      from: { chain: p, address: o },
      to: { chain: y, address: b },
      token: m,
      amount: c.amount,
      message: s,
      id: { hash: i }
    };
  }
  createUnsignedTx(f, e, t = !1) {
    return new K6(Z6(f, this.chainId), this.network, this.chain, e, t);
  }
}
class c6 {
  // https://github.com/wormhole-foundation/wormhole-connect/blob/development/sdk/src/contexts/eth/context.ts#L379
  constructor(f, e, t, r) {
    u(this, "network");
    u(this, "chain");
    u(this, "provider");
    u(this, "contracts");
    u(this, "circleRelayer");
    u(this, "chainId");
    u(this, "tokenAddr");
    var i;
    if (this.network = f, this.chain = e, this.provider = t, this.contracts = r, f === "Devnet")
      throw new Error("AutomaticCircleBridge not supported on Devnet");
    this.chainId = X6.get(f, e);
    const a = (i = this.contracts.cctp) == null ? void 0 : i.wormholeRelayer;
    if (!a)
      throw new Error(`Wormhole Circle relayer contract for domain ${e} not found`);
    this.circleRelayer = Nf.connect(a, t);
    const s = Y6.get(this.network, this.chain);
    if (!s)
      throw new Error(`USDC contract not found for ${this.network} ${this.chain}`);
    this.tokenAddr = s;
  }
  static async fromRpc(f, e) {
    const [t, r] = await Ef.chainFromRpc(f), a = e[r];
    if (a.network !== t)
      throw new Error(`Network mismatch: ${a.network} != ${t}`);
    return new c6(t, r, f, a.contracts);
  }
  async getRelayerFee(f) {
    return this.circleRelayer.relayerFee(Je(f), this.tokenAddr);
  }
  async *transfer(f, e, t, r) {
    const a = new Hf(f).toString(), s = Ke(e.chain), i = e.address.toUniversalAddress().toUint8Array(), c = r || 0n, o = Ef.getTokenImplementation(this.provider, this.tokenAddr);
    if (await o.allowance(a, this.circleRelayer.target) < t) {
      const y = await o.approve.populateTransaction(this.circleRelayer.target, t);
      yield this.createUnsignedTx(K0(y, a), "ERC20.approve of CircleRelayer");
    }
    const p = await this.circleRelayer.transferTokensWithRelay.populateTransaction(this.tokenAddr, t, c, s, i);
    yield this.createUnsignedTx(K0(p, a), "CircleRelayer.transfer");
  }
  createUnsignedTx(f, e, t = !1) {
    return new K6(Z6(f, this.chainId), this.network, this.chain, e, t);
  }
}
const pf = [
  {
    inputs: [
      {
        internalType: "address",
        name: "circleIntegration_",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "nativeTokenDecimals_",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "feeRecipient_",
        type: "address"
      },
      {
        internalType: "address",
        name: "ownerAssistant_",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "oldRecipient",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newRecipient",
        type: "address"
      }
    ],
    name: "FeeRecipientUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "oldOwner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransfered",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "relayer",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "nativeAmount",
        type: "uint256"
      }
    ],
    name: "SwapExecuted",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "uint256",
        name: "swapRate",
        type: "uint256"
      }
    ],
    name: "SwapRateUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "address_",
        type: "bytes32"
      }
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "token",
        type: "address"
      }
    ],
    name: "calculateMaxSwapAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAllowed",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "toNativeAmount",
        type: "uint256"
      }
    ],
    name: "calculateNativeSwapAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeAmount",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      }
    ],
    name: "cancelOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "circleIntegration",
    outputs: [
      {
        internalType: "contract ICircleIntegration",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "confirmOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "decodeTransferTokensWithRelay",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadId",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "targetRelayerFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toNativeTokenAmount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "targetRecipientWallet",
            type: "bytes32"
          }
        ],
        internalType: "struct CircleRelayerStructs.TransferTokensWithRelay",
        name: "transfer",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadId",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "targetRelayerFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "toNativeTokenAmount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "targetRecipientWallet",
            type: "bytes32"
          }
        ],
        internalType: "struct CircleRelayerStructs.TransferTokensWithRelay",
        name: "transfer",
        type: "tuple"
      }
    ],
    name: "encodeTransferTokensWithRelay",
    outputs: [
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "feeRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPaused",
    outputs: [
      {
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "emitterChainId",
        type: "uint16"
      }
    ],
    name: "getRegisteredContract",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "maxNativeSwapAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "nativeSwapRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nativeSwapRatePrecision",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nativeTokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ownerAssistant",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "encodedWormholeMessage",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "circleBridgeMessage",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "circleAttestation",
            type: "bytes"
          }
        ],
        internalType: "struct ICircleIntegration.RedeemParameters",
        name: "redeemParams",
        type: "tuple"
      }
    ],
    name: "redeemTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "contractAddress",
        type: "bytes32"
      }
    ],
    name: "registerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "relayerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "setPauseForTransfers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "submitOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "toNativeTokenAmount",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "targetRecipientWallet",
        type: "bytes32"
      }
    ],
    name: "transferTokensWithRelay",
    outputs: [
      {
        internalType: "uint64",
        name: "messageSequence",
        type: "uint64"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "newFeeRecipient",
        type: "address"
      }
    ],
    name: "updateFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256"
      }
    ],
    name: "updateMaxNativeSwapAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "swapRate",
        type: "uint256"
      }
    ],
    name: "updateNativeSwapRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "nativeSwapRatePrecision_",
        type: "uint256"
      }
    ],
    name: "updateNativeSwapRatePrecision",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "newAssistant",
        type: "address"
      }
    ],
    name: "updateOwnerAssistant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "updateRelayerFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], z6 = "0x6080604090808252346200034a5760808162002baa80380380916200002582856200034f565b8339810103126200034a576200003b8162000389565b6020808301519260ff84168085036200034a576200006960606200006188850162000389565b930162000389565b6001600b556001600160a01b03949092908516918215620002fb5715620002b7578416918215620002735784169081156200022f57600092835490640100000000600160c01b0333871b169362ff000060018060a01b031999858b600554161760055560101b1691828663ff010000600160c01b0319861617178755896003541617600355886002541617600255885193634d4502c960e11b85528685600481875afa94851562000225579087949392918796620001d5575b5061ffff600496169263ff000001600160c01b03191617171784558751928380926384acd1bb60e01b82525afa928315620001cb57829362000182575b505050169060045416176004556305f5e1006006555161280b90816200039f8239f35b9080929350813d8311620001c3575b6200019d81836200034f565b81010312620001bf5751908282168203620001bc57503880806200015f565b80fd5b5080fd5b503d62000191565b86513d84823e3d90fd5b8092949650859193953d83116200021d575b620001f381836200034f565b8101031262000219575161ffff8116810362000219579386939092909161ffff62000122565b8580fd5b503d620001e7565b8a513d88823e3d90fd5b865162461bcd60e51b815260048101859052601760248201527f696e76616c6964206f776e657220617373697374616e740000000000000000006044820152606490fd5b865162461bcd60e51b815260048101859052601d60248201527f696e76616c69642066656520726563697069656e7420616464726573730000006044820152606490fd5b865162461bcd60e51b815260048101859052601760248201527f696e76616c6964206e617469766520646563696d616c730000000000000000006044820152606490fd5b875162461bcd60e51b815260048101869052602260248201527f696e76616c696420636972636c6520696e746567726174696f6e206164647265604482015261737360f01b6064820152608490fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200037357604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200034a5756fe60806040526004361015610013575b600080fd5b60003560e01c8063038c0b66146102a7578063086049851461029e5780630a55d735146102955780630e1c863e1461028c57806313d8900b1461028357806316fb440a1461027a5780631a28219514610271578063203c5095146102685780632a88b4251461025f5780632efe4f421461025657806332d9965a1461024d5780633d62cca014610244578063469048401461023b57806351e2d7b51461023257806359b87d8e146102295780635ced058e146102205780636805b84b1461021757806368aa9ef41461020e5780636ddbaff31461020557806384acd1bb146101fc5780638da5cb5b146101f35780638e151dd1146101ea57806394cc743d146101e15780639a8a0592146101d8578063a2f32c8f146101cf578063ad48cb5e146101c6578063b5419523146101bd578063cd601c78146101b4578063dd6522aa146101ab578063e30c3978146101a2578063ea1d2e4a14610199578063ffa1ad74146101905763fff982a81461018857600080fd5b61000e6112e4565b5061000e61129d565b5061000e6111f7565b5061000e6111cd565b5061000e6111a3565b5061000e61117b565b5061000e61113d565b5061000e611118565b5061000e6110c9565b5061000e6110a6565b5061000e61100d565b5061000e610fd9565b5061000e610faf565b5061000e610f85565b5061000e610f22565b5061000e610e94565b5061000e610e6d565b5061000e610e45565b5061000e610bc6565b5061000e610aec565b5061000e610ac2565b5061000e610a88565b5061000e610a69565b5061000e610a2b565b5061000e610943565b5061000e61086b565b5061000e6107f8565b5061000e6107a9565b5061000e6106d3565b5061000e6104a1565b5061000e61042a565b5061000e610392565b503461000e57600080600319360112610383576001546001600160a01b03908116903382900361033e57825460201c6001600160a01b031660008054640100000000600160c01b031916602085901b640100000000600160c01b0316179055600180546001600160a01b0319169055167f0d18b5fd22306e373229b9439188228edca81207d1667f604daf6cef8aa3ee678380a380f35b60405162461bcd60e51b815260206004820152601b60248201527f63616c6c6572206d7573742062652070656e64696e674f776e657200000000006044820152606490fd5b80fd5b61ffff81160361000e57565b503461000e57604036600319011261000e576004356103b081610386565b600054602435916103e291906103d4602083901c6001600160a01b031633146122e6565b61ffff809116911614612329565b80156103ed57600655005b60405162461bcd60e51b81526020600482015260156024820152740707265636973696f6e206d757374206265203e203605c1b6044820152606490fd5b5060031960203682011261000e57600435906001600160401b03821161000e57606090823603011261000e5761046290600401611b89565b005b6001600160a01b0381160361000e57565b606090600319011261000e5760043561048d81610386565b9060243561049a81610464565b9060443590565b503461000e576104626104b336610475565b916104e96000546104da60018060a01b0333818460201c16149081156105d6575b506123bf565b61ffff83811691161415612415565b61050c6105048261ffff16600052600a602052604060002090565b541515612451565b6005546105729061053390610527906001600160a01b031681565b6001600160a01b031690565b604051633b6e750f60e01b81526001600160a01b038516600482015290602090829060249082905afa9081156105c9575b60009161059b575b50612496565b61ffff1660009081526007602090815260408083206001600160a01b0390941683529290522055565b6105bc915060203d81116105c2575b6105b48183610659565b8101906116ff565b3861056c565b503d6105aa565b6105d161158c565b610564565b6002541633149050386104d4565b50634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761061657604052565b61061e6105e4565b604052565b604081019081106001600160401b0382111761061657604052565b60a081019081106001600160401b0382111761061657604052565b90601f801991011681019081106001600160401b0382111761061657604052565b60405190610687826105fb565b565b6040519061010082018281106001600160401b0382111761061657604052565b6020906001600160401b0381116106c6575b601f01601f19160190565b6106ce6105e4565b6106bb565b503461000e57602036600319011261000e576004356001600160401b03811161000e573660238201121561000e57806004013590610710826106a9565b61071d6040519182610659565b828152366024848401011161000e57600060208461077d95602461074996018386013783010152612664565b60405191829182919091606080608083019460ff815116845260208101516020850152604081015160408501520151910152565b0390f35b604090600319011261000e5760043561079981610386565b906024356107a681610464565b90565b503461000e5760206107e561ffff6107c036610781565b91166000526007835260406000209060018060a01b0316600052602052604060002090565b54604051908152f35b8015150361000e57565b503461000e57604036600319011261000e5760043561081681610386565b63ff000000602435610827816107ee565b6000549261085590610847602086901c6001600160a01b031633146122e6565b61ffff858116911614612329565b63ff0000001990921691151560181b1617600055005b503461000e5761087a36610781565b60005490916001600160a01b039161089d916103d4602083901c851633146122e6565b8082169182156108ee57600380546001600160a01b031981166001600160a01b039384161790915516167faaebcf1bfa00580e41d966056b48521fa9f202645c86d4ddf28113e617c1b1d3600080a3005b60405162461bcd60e51b815260206004820152602760248201527f6e6577466565526563697069656e742063616e6e6f7420657175616c206164646044820152667265737328302960c81b6064820152608490fd5b503461000e5761095236610475565b909160009261097c845460018060a01b039333858360201c16148015610a1e575b6103d4906123bf565b600554604051633b6e750f60e01b81526001600160a01b0383811660048301526109c392602091839160249183918916165afa908115610a11575b869161059b5750612496565b6109ce8315156124d7565b6001600160a01b0381166000908152600860205260409020839055167fc6eb9fb936b61b402d503deeffc822f46492e15c2c8f079815cc4850ad7b02b08380a380f35b610a1961158c565b6109b7565b5060025485163314610973565b503461000e57602036600319011261000e57600435610a4981610464565b60018060a01b031660005260096020526020604060002054604051908152f35b503461000e57600036600319011261000e576020600654604051908152f35b503461000e57602036600319011261000e5761ffff600435610aa981610386565b16600052600a6020526020604060002054604051908152f35b503461000e57600036600319011261000e576003546040516001600160a01b039091168152602090f35b503461000e57604036600319011261000e57600435610b0a81610386565b6000549060243590610b2a602084901c6001600160a01b031633146122e6565b8115610b7157610b506104629361ffff808416908115159283610b64575b505050612363565b61ffff16600052600a602052604060002055565b1614159050388080610b48565b60405162461bcd60e51b815260206004820152602760248201527f636f6e7472616374416464726573732063616e6e6f7420657175616c206279746044820152666573333228302960c81b6064820152608490fd5b5060a036600319011261000e57600435610bdf81610464565b6024359060443560643591610bf383610386565b608435926002600b5414610e00576002600b5560ff60005460181c16610dc757610c1e851515611370565b610c298415156113b1565b6001600160a01b038281169590610c418715156113fd565b610c598361ffff16600052600a602052604060002090565b549382610c67861515611449565b610c70916121a5565b9587610c8a8561ffff166000526007602052604060002090565b6001600160a01b039091166000908152602091909152604090205495610cb081886114ba565b8811610cbb906114cf565b610cc361067a565b6001815296602088015260408701526060860152600554166001600160a01b03166001600160a01b031694610cf9908688611613565b610d0161067a565b6001600160a01b039096168652602086015261ffff1660408501526060840152610d2a90612523565b6040516328a87c1360e21b81529283918291610d4a919060048401611543565b03815a602094600091f161077d918115610dba575b600091610d8c575b50610d726001600b55565b6040516001600160401b0390911681529081906020820190565b610dad915060203d8111610db3575b610da58183610659565b81019061152f565b38610d67565b503d610d9b565b610dc261158c565b610d5f565b60405162461bcd60e51b81526020600482015260116024820152701c995b185e595c881a5cc81c185d5cd959607a1b6044820152606490fd5b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b503461000e57602036600319011261000e576040516004356001600160a01b03168152602090f35b503461000e57600036600319011261000e57602060ff60005460181c166040519015158152f35b503461000e57600036600319011261000e576002546040516001600160a01b039091168152602090f35b60ff81160361000e57565b60005b838110610edc5750506000910152565b8181015183820152602001610ecc565b90602091610f0581518092818552858086019101610ec9565b601f01601f1916010190565b9060206107a6928181520190610eec565b503461000e57608036600319011261000e5761077d610f71604051610f46816105fb565b600435610f5281610ebe565b8152602435602082015260443560408201526064356060820152612523565b604051918291602083526020830190610eec565b503461000e57600036600319011261000e576004546040516001600160a01b039091168152602090f35b503461000e57600036600319011261000e57600054604051602091821c6001600160a01b03168152f35b503461000e57604036600319011261000e576020611005600435610ffc81610464565b602435906120d2565b604051908152f35b503461000e5761101c36610781565b6000546001600160a01b039261103e91906103d4602083901c861633146122e6565b168015611062576bffffffffffffffffffffffff60a01b6001541617600155600080f35b606460405162461bcd60e51b815260206004820152602060248201527f6e65774f776e65722063616e6e6f7420657175616c20616464726573732830296044820152fd5b503461000e57600036600319011261000e57602061ffff60005416604051908152f35b503461000e57602036600319011261000e576111066004356110ea81610386565b600054906103d4602083901c6001600160a01b031633146122e6565b600180546001600160a01b0319169055005b503461000e57600036600319011261000e57602060ff60005460101c16604051908152f35b503461000e57602036600319011261000e5760043561115b81610464565b60018060a01b031660005260086020526020604060002054604051908152f35b503461000e57602036600319011261000e57602061100560043561119e81610464565b611fa2565b503461000e57600036600319011261000e576005546040516001600160a01b039091168152602090f35b503461000e57600036600319011261000e576001546040516001600160a01b039091168152602090f35b503461000e5761120636610781565b6000546001600160a01b039261122891906103d4602083901c861633146122e6565b16801561124c576bffffffffffffffffffffffff60a01b6002541617600255600080f35b60405162461bcd60e51b8152602060048201526024808201527f6e6577417373697374616e742063616e6e6f7420657175616c206164647265736044820152637328302960e01b6064820152608490fd5b503461000e57600036600319011261000e5761077d6040516112be81610623565b60058152640302e322e360dc1b6020820152604051918291602083526020830190610eec565b503461000e576104626113566112f936610475565b600054909391926001600160a01b039161131e916103d4602083901c851633146122e6565b6020816005541691602460405180948193633b6e750f60e01b8352881660048301525afa9081156105c95760009161059b5750612496565b6001600160a01b0316600090815260096020526040902055565b1561137757565b60405162461bcd60e51b81526020600482015260126024820152710616d6f756e74206d757374206265203e20360741b6044820152606490fd5b156113b857565b60405162461bcd60e51b815260206004820152601860248201527f696e76616c69642074617267657420726563697069656e7400000000000000006044820152606490fd5b1561140457565b60405162461bcd60e51b815260206004820152601d60248201527f746f6b656e2063616e6e6f7420657175616c20616464726573732830290000006044820152606490fd5b1561145057565b60405162461bcd60e51b815260206004820152602560248201527f434952434c452d52454c415945523a20746172676574206e6f742072656769736044820152641d195c995960da1b6064820152608490fd5b50634e487b7160e01b600052601160045260246000fd5b919082018092116114c757565b6106876114a3565b156114d657565b60405162461bcd60e51b815260206004820152601b60248201527f696e73756666696369656e7420616d6f756e74526563656976656400000000006044820152606490fd5b51906001600160401b038216820361000e57565b9081602091031261000e576107a69061151b565b60c09060606107a6949360018060a01b0381511683526020810151602084015261ffff604082015116604084015201516060820152600060808201528160a08201520190610eec565b506040513d6000823e3d90fd5b9081602091031261000e575190565b156115af57565b60405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608490fd5b61166961068793928315801561166e575b61162d906115a8565b60405163095ea7b360e01b60208201526001600160a01b039091166024820152604481019390935282606481015b03601f198101845283610659565b611714565b50604051636eb1769f60e11b81523060048201526001600160a01b038216602482015261162d90602081806044810103816001600160a01b0389165afa9081156116f2575b6000916116c4575b50159050611624565b6116e5915060203d81116116eb575b6116dd8183610659565b810190611599565b386116bb565b503d6116d3565b6116fa61158c565b6116b3565b9081602091031261000e57516107a6816107ee565b604051611791916001600160a01b031661172d82610623565b6000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af13d15611819573d91611775836106a9565b926117836040519485610659565b83523d60008785013e61181d565b805190828215928315611801575b505050156117aa5750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b61181193508201810191016116ff565b38828161179f565b6060915b9192901561187f5750815115611831575090565b3b1561183a5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156118925750805190602001fd5b60405162461bcd60e51b81529081906118ae9060048301610f11565b0390fd5b519063ffffffff8216820361000e57565b81601f8201121561000e5780516118d9816106a9565b926118e76040519485610659565b8184526020828401011161000e576107a69160208085019101610ec9565b9060208282031261000e5781516001600160401b039283821161000e5701906101008282031261000e57611937610689565b928251845260208301516020850152611952604084016118b2565b6040850152611963606084016118b2565b60608501526119746080840161151b565b608085015260a083015160a085015260c083015160c085015260e083015190811161000e576119a392016118c3565b60e082015290565b9035601e198236030181121561000e5701602081359101916001600160401b03821161000e57813603831361000e57565b908060209392818452848401376000828201840152601f01601f1916010190565b9060606107a69260208152611a25611a1584806119ab565b84602085015260808401916119dc565b90611a58611a4d611a3960208701876119ab565b601f198587038101604087015295916119dc565b9460408101906119ab565b939092828603019101526119dc565b9081602091031261000e57516107a681610386565b15611a8357565b60405162461bcd60e51b815260206004820152602860248201527f66726f6d41646472657373206973206e6f74206120726567697374657265642060448201526718dbdb9d1c9858dd60c21b6064820152608490fd5b15611ae057565b60405162461bcd60e51b815260206004820152602360248201527f726563697069656e742063616e6e6f742073776170206e61746976652061737360448201526265747360e81b6064820152608490fd5b15611b3857565b606460405162461bcd60e51b815260206004820152602060248201527f696e73756666696369656e74206e617469766520617373657420616d6f756e746044820152fd5b919082039182116114c757565b600554611bc3906001600160a01b0390611ba4908216610527565b90604051936357bf927b60e01b855284806000958693600483016119fd565b038183865af1938415611ea1575b8394611e7d575b50611c33611c62611bec60e0870151612664565b93611c5b60a088015191611c0760408a015163ffffffff1690565b6040518092638cf67ba960e01b825281806020998a956004830191909163ffffffff6020820193169052565b03915afa908115611e70575b8891611e43575b5061ffff16600052600a602052604060002090565b5414611a7c565b8451611c76906001600160a01b0316610527565b60608401519094906001600160a01b03169383851691823314611e295761068797928483611cbc938a6040611cca999701948551611ce7575b50505001519051906114ba565b9182611cd1575b0151611b7c565b9216611eae565b611ce2838660035416878a16611eae565b611cc3565b611cf082611fa2565b80875111611e21575b50611d058651836120d2565b92831580611dd557828291611d1c87341015611b31565b82611d278834611b7c565b8015908115611da1575b5050879091611d97575b83928392f115611d8a575b8551604080519182526020820194909452918b169233927f764f0dc063c06f32d89a3f3af80c0db4be8a090901f589a478b447e0a51f09f19190a45b388a81611caf565b611d9261158c565b611d46565b6108fc9150611d3b565b8280929181928290611dcc575b3390f115611dbf575b823880611d31565b611dc761158c565b611db7565b506108fc611dae565b509250505080845234158015611ded575b5050611d82565b81908190611e18575b81809134903390f115611e0b575b3880611de6565b611e1361158c565b611e04565b506108fc611df6565b865238611cf9565b50505061068794611e3a3415611ad9565b01519216611eae565b611e639150853d8711611e69575b611e5b8183610659565b810190611a67565b38611c46565b503d611e51565b611e7861158c565b611c3f565b611e9a9194503d8085833e611e928183610659565b810190611905565b9238611bd8565b611ea961158c565b611bd1565b60405163a9059cbb60e01b60208201526001600160a01b039092166024830152604482019290925261068791611669826064810161165b565b15611eee57565b60405162461bcd60e51b81526020600482015260116024820152701cddd85c081c985d19481b9bdd081cd95d607a1b6044820152606490fd5b9081602091031261000e57516107a681610ebe565b818102929181159184041417156114c757565b9060ff8091169116039060ff82116114c757565b60ff16604d8111611f75575b600a0a90565b611f7d6114a3565b611f6f565b8115611f8c570490565b634e487b7160e01b600052601260045260246000fd5b6001600160a01b031660008181526008602052604090205490611fc6821515611ee7565b60405163313ce56760e01b815291602083600481855afa9283156120c5575b600093612095575b5060ff60005460101c16918260ff8516116000146120535761203f61204a936120396107a696946120336120449560018060a01b03166000526009602052604060002090565b54611f3c565b93611f4f565b611f63565b90611f3c565b60065490611f82565b61203f6107a69461208061208f946120336120869560018060a01b03166000526009602052604060002090565b94611f4f565b60065490611f3c565b90611f82565b6120b791935060203d81116120be575b6120af8183610659565b810190611f27565b9138611fed565b503d6120a5565b6120cd61158c565b611fe5565b6001600160a01b03166000818152600860209081526040909120600492919054916120fe831515611ee7565b60405163313ce56760e01b815293849182905afa918215612198575b600092612178575b5060ff60005460101c168060ff841611600014612159579061204461203f61208f936121536107a697600654611f3c565b95611f4f565b61204461203f61217393946120396107a697600654611f3c565b611f82565b61219191925060203d81116120be576120af8183610659565b9038612122565b6121a061158c565b61211a565b6040516370a0823160e01b8082523060048301526107a69391926020926001600160a01b0390911691908385602481865afa948515612274575b60009561224d575b50906121f68492303386612281565b60405190815230600482015291829060249082905afa918215612240575b600092612223575b5050611b7c565b6122399250803d106116eb576116dd8183610659565b388061221c565b61224861158c565b612214565b849291955061226b6121f691843d86116116eb576116dd8183610659565b959192506121e7565b61227c61158c565b6121df565b6040516323b872dd60e01b60208201526001600160a01b0392831660248201529290911660448301526064808301939093529181526106879160a082018281106001600160401b038211176122d9575b604052611714565b6122e16105e4565b6122d1565b156122ed57565b60405162461bcd60e51b815260206004820152601460248201527331b0b63632b9103737ba103a34329037bbb732b960611b6044820152606490fd5b1561233057565b60405162461bcd60e51b815260206004820152600b60248201526a3bb937b7339031b430b4b760a91b6044820152606490fd5b1561236a57565b60405162461bcd60e51b815260206004820152602760248201527f636861696e49645f2063616e6e6f7420657175616c2030206f7220746869732060448201526618da185a5b925960ca1b6064820152608490fd5b156123c657565b60405162461bcd60e51b815260206004820152602160248201527f63616c6c6572206e6f7420746865206f776e6572206f7220617373697374616e6044820152601d60fa1b6064820152608490fd5b1561241c57565b60405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21031b430b4b760991b6044820152606490fd5b1561245857565b60405162461bcd60e51b815260206004820152601660248201527518dbdb9d1c9858dd08191bd95cdb89dd08195e1a5cdd60521b6044820152606490fd5b1561249d57565b60405162461bcd60e51b81526020600482015260126024820152711d1bdad95b881b9bdd081858d8d95c1d195960721b6044820152606490fd5b156124de57565b60405162461bcd60e51b815260206004820152601960248201527f737761702072617465206d757374206265206e6f6e7a65726f000000000000006044820152606490fd5b600160ff825116036125725780519060208101519060606040820151910151916040519360ff60f81b9060f81b166020850152602184015260418301526061820152606181526107a68161063e565b60405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c185e5b1bd8591259607a1b6044820152606490fd5b156125b257565b60405162461bcd60e51b815260206004820152602960248201527f434952434c455f52454c415945523a20696e76616c6964206d657373616765206044820152681c185e5b1bd859125960ba1b6064820152608490fd5b1561261057565b60405162461bcd60e51b815260206004820152602660248201527f434952434c455f52454c415945523a20696e76616c6964206d657373616765206044820152650d8cadccee8d60d31b6064820152608490fd5b90604051612671816105fb565b600081526020810192600084526040820160008152606083019060008252839560018451106126f0576126c6600160ff6126bf610687986126b8848a0151829060ff169052565b5160ff1690565b16146125ab565b6126cf8461272b565b90526126da83612778565b90526126e582612788565b905251606114612609565b60405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606490fd5b602181511061273b576021015190565b60405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606490fd5b604181511061273b576041015190565b6061815110612798576061015190565b60405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606490fdfea2646970667358221220ce69d4caa8128b752fcc5b0ad82cfd1a64124612c8555100c2e05c2766faa13f64736f6c63430008110033", Ct = (n) => n.length > 1;
class Nf extends cf {
  constructor(...f) {
    Ct(f) ? super(...f) : super(pf, z6, f[0]);
  }
  getDeployTransaction(f, e, t, r, a) {
    return super.getDeployTransaction(f, e, t, r, a || {});
  }
  deploy(f, e, t, r, a) {
    return super.deploy(f, e, t, r, a || {});
  }
  connect(f) {
    return super.connect(f);
  }
  static createInterface() {
    return new S0(pf);
  }
  static connect(f, e) {
    return new s6(f, pf, e);
  }
}
u(Nf, "bytecode", z6), u(Nf, "abi", pf);
const yf = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messageTransmitter",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_messageBodyVersion",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "burnToken",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "depositor",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "mintRecipient",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "destinationTokenMessenger",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "destinationCaller",
        type: "bytes32"
      }
    ],
    name: "DepositForBurn",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "localMinter",
        type: "address"
      }
    ],
    name: "LocalMinterAdded",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "localMinter",
        type: "address"
      }
    ],
    name: "LocalMinterRemoved",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "mintRecipient",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "mintToken",
        type: "address"
      }
    ],
    name: "MintAndWithdraw",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint32",
        name: "domain",
        type: "uint32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "tokenMessenger",
        type: "bytes32"
      }
    ],
    name: "RemoteTokenMessengerAdded",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint32",
        name: "domain",
        type: "uint32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "tokenMessenger",
        type: "bytes32"
      }
    ],
    name: "RemoteTokenMessengerRemoved",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "RescuerChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newLocalMinter",
        type: "address"
      }
    ],
    name: "addLocalMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "tokenMessenger",
        type: "bytes32"
      }
    ],
    name: "addRemoteTokenMessenger",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "mintRecipient",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "burnToken",
        type: "address"
      }
    ],
    name: "depositForBurn",
    outputs: [
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "mintRecipient",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "burnToken",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "destinationCaller",
        type: "bytes32"
      }
    ],
    name: "depositForBurnWithCaller",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "remoteDomain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "sender",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes"
      }
    ],
    name: "handleReceiveMessage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "localMessageTransmitter",
    outputs: [
      {
        internalType: "contract IMessageTransmitter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "localMinter",
    outputs: [
      {
        internalType: "contract ITokenMinter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "messageBodyVersion",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    name: "remoteTokenMessengers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "removeLocalMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32"
      }
    ],
    name: "removeRemoteTokenMessenger",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalMessage",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "originalAttestation",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "newDestinationCaller",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "newMintRecipient",
        type: "bytes32"
      }
    ],
    name: "replaceDepositForBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rescuer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "updateRescuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
], W6 = "0x60c06040523480156200001157600080fd5b506040516200366238038062003662833981810160405260408110156200003757600080fd5b508051602090910151620000546200004e620000d9565b620000dd565b6001600160a01b038216620000b0576040805162461bcd60e51b815260206004820152601a60248201527f4d6573736167655472616e736d6974746572206e6f7420736574000000000000604482015290519081900360640190fd5b60609190911b6001600160601b03191660805260e01b6001600160e01b03191660a05262000157565b3390565b600180546001600160a01b0319169055620001048162000107602090811b6200177c17901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60805160601c60a05160e01c6134b9620001a960003980610819528061114e528061133f5280611fda5250806108455280610c4c52806121fc5280612252528061293f5280612a1652506134b96000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806391f17888116100cd578063da87e44811610081578063f2fde38b11610066578063f2fde38b146104a7578063f79fd08e146104da578063f856ddb6146104fd57610151565b8063da87e44814610476578063e30c39781461049f57610151565b80639cdbb181116100b25780639cdbb1811461040a578063b2118a8d1461042b578063cb75c11c1461046e57610151565b806391f178881461036c57806396abeb701461037457610151565b80636fd3504e116101245780638197beb9116101095780638197beb9146102fc57806382a5e6651461032f5780638da5cb5b1461036457610151565b80636fd3504e1461028c57806379ba5097146102f457610151565b806329a78e33146101565780632ab60045146102205780632c1219211461025357806338a6318314610284575b600080fd5b61021e6004803603608081101561016c57600080fd5b81019060208101813564010000000081111561018757600080fd5b82018360208201111561019957600080fd5b803590602001918460018302840111640100000000831117156101bb57600080fd5b9193909290916020810190356401000000008111156101d957600080fd5b8201836020820111156101eb57600080fd5b8035906020019184600183028401116401000000008311171561020d57600080fd5b91935091508035906020013561054e565b005b61021e6004803603602081101561023657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b67565b61025b610c4a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61025b610c6e565b6102d7600480360360808110156102a257600080fd5b50803590602081013563ffffffff16906040810135906060013573ffffffffffffffffffffffffffffffffffffffff16610c8a565b6040805167ffffffffffffffff9092168252519081900360200190f35b61021e610ca4565b61021e6004803603602081101561031257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d47565b6103526004803603602081101561034557600080fd5b503563ffffffff16610ecf565b60408051918252519081900360200190f35b61025b610ee1565b61021e610efd565b6103f66004803603606081101561038a57600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156103b757600080fd5b8201836020820111156103c957600080fd5b803590602001918460018302840111640100000000831117156103eb57600080fd5b509092509050610ffe565b604080519115158252519081900360200190f35b61041261133d565b6040805163ffffffff9092168252519081900360200190f35b61021e6004803603606081101561044157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135611361565b61025b6113f7565b61021e6004803603604081101561048c57600080fd5b5063ffffffff8135169060200135611413565b61025b61155f565b61021e600480360360208110156104bd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661157b565b61021e600480360360208110156104f057600080fd5b503563ffffffff16611613565b6102d7600480360360a081101561051357600080fd5b5080359063ffffffff6020820135169060408101359073ffffffffffffffffffffffffffffffffffffffff60608201351690608001356116f7565b6000610594600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506117f19050565b90506105c17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611817565b60006105ee7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611955565b905061061b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166119cc565b60006106487fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611b09565b905073__$8c977731748aa4504deed57239565df533$__635ced058e826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561069957600080fd5b505af41580156106ad573d6000803e3d6000fd5b505050506040513d60208110156106c357600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16331461074857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c69642073656e64657220666f72206d657373616765000000000000604482015290519081900360640190fd5b836107b457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d696e7420726563697069656e74206d757374206265206e6f6e7a65726f0000604482015290519081900360640190fd5b60006107e17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611b3a565b905060006108107fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611b6b565b905060006108417f000000000000000000000000000000000000000000000000000000000000000084898588611b9c565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b857b7748d8d8d8d868e6040518763ffffffff1660e01b81526004018080602001806020018060200185815260200184810384528a8a82818152602001925080828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909101858103845288815260200190508888808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038452885181528851602091820193918a019250908190849084905b8381101561096757818101518382015260200161094f565b50505050905090810190601f1680156109945780820380516001836020036101000a031916815260200191505b509950505050505050505050600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff1673__$8c977731748aa4504deed57239565df533$__635ced058e856040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610a3857600080fd5b505af4158015610a4c573d6000803e3d6000fd5b505050506040513d6020811015610a6257600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16610aa57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611bff565b67ffffffffffffffff167f2fa9ca894982930190727e75500a97d8dc500233a5065e0f3126c48fbe0343c0858b610afd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008d16611c30565b610b287fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008e16611c61565b60408051948552602085019390935263ffffffff909116838301526060830152608082018e9052519081900360a00190a4505050505050505050505050565b610b6f611c92565b73ffffffffffffffffffffffffffffffffffffffff8116610bdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613335602a913960400191505060405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a90600090a250565b7f000000000000000000000000000000000000000000000000000000000000000081565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b6000610c998585858585611d3c565b90505b949350505050565b6000610cae6121c3565b90508073ffffffffffffffffffffffffffffffffffffffff16610ccf61155f565b73ffffffffffffffffffffffffffffffffffffffff1614610d3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061330c6029913960400191505060405180910390fd5b610d44816121c7565b50565b610d4f611c92565b73ffffffffffffffffffffffffffffffffffffffff8116610dd157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f5a65726f2061646472657373206e6f7420616c6c6f7765640000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff1615610e5657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4c6f63616c206d696e74657220697320616c7265616479207365742e00000000604482015290519081900360640190fd5b6003805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f109bb3e70cbf1931e295b49e75c67013b85ff80d64e6f1d321f37157b90c38309181900360200190a150565b60046020526000908152604090205481565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b610f05611c92565b60035473ffffffffffffffffffffffffffffffffffffffff1680610f8a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4e6f206c6f63616c206d696e746572206973207365742e000000000000000000604482015290519081900360640190fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001690556040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f2db49fbf671271826a27b02ebc496209c85fffffb4bccc67430d2a0f22b4d1ac9181900360200190a150565b60006110086121f8565b61107357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76616c6964206d657373616765207472616e736d69747465720000000000604482015290519081900360640190fd5b848461107f8282612279565b6110d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061335f6021913960400191505060405180910390fd5b600061111a600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506117f19050565b90506111477fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166119cc565b63ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166111997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166122a5565b63ffffffff161461120b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d65737361676520626f64792076657273696f6e00000000604482015290519081900360640190fd5b60006112387fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166122d5565b905060006112677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611b3a565b905060006112967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611b6b565b905060006112a2612306565b905061132b818d8573__$8c977731748aa4504deed57239565df533$__635ced058e896040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156112f957600080fd5b505af415801561130d573d6000803e3d6000fd5b505050506040513d602081101561132357600080fd5b5051866123aa565b5060019b9a5050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60025473ffffffffffffffffffffffffffffffffffffffff1633146113d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806133c76024913960400191505060405180910390fd5b6113f273ffffffffffffffffffffffffffffffffffffffff841683836124c3565b505050565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b61141b611c92565b8061148757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f62797465733332283029206e6f7420616c6c6f77656400000000000000000000604482015290519081900360640190fd5b63ffffffff82166000908152600460205260409020541561150957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f546f6b656e4d657373656e67657220616c726561647920736574000000000000604482015290519081900360640190fd5b63ffffffff82166000818152600460209081526040918290208490558151928352820183905280517f4bba2b08298cf59661b4895e384cc2ac3962ce2d71f1b7c11bca52e1169f95999281900390910190a15050565b60015473ffffffffffffffffffffffffffffffffffffffff1690565b611583611c92565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556115ce610ee1565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b61161b611c92565b63ffffffff811660009081526004602052604090205461169c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4e6f20546f6b656e4d657373656e676572207365740000000000000000000000604482015290519081900360640190fd5b63ffffffff8116600081815260046020908152604080832080549390558051938452908301829052805191927f3dcea012093dbca2bb8ed7fd2b2ff90305ab70bddda8bbb94d4152735a98f0b1929081900390910190a15050565b60008161176557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c69642064657374696e6174696f6e2063616c6c6572000000000000604482015290519081900360640190fd5b6117728686868686611d3c565b9695505050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b81516000906020840161180c64ffffffffff85168284612550565b925050505b92915050565b6118427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166125af565b6118ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d616c666f726d6564206d657373616765000000000000000000000000000000604482015290519081900360640190fd5b60746118da7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166125ec565b6bffffffffffffffffffffffff161015610d4457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c6964206d6573736167653a20746f6f2073686f7274000000000000604482015290519081900360640190fd5b60006119c46074806119887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000086166125ec565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff9103166000612600565b90505b919050565b6119f77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166125af565b611a6257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d616c666f726d6564206d657373616765000000000000000000000000000000604482015290519081900360640190fd5b6084611a8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166125ec565b6bffffffffffffffffffffffff1614610d4457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c6964206d657373616765206c656e67746800000000000000000000604482015290519081900360640190fd5b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660646020612686565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020612686565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660446020612831565b6040805160e09690961b7fffffffff000000000000000000000000000000000000000000000000000000001660208701526024860194909452604485019290925260648401526084808401919091528151808403909101815260a4909201905290565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600c6008612831565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660086004612831565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660346020612686565b611c9a6121c3565b73ffffffffffffffffffffffffffffffffffffffff16611cb8610ee1565b73ffffffffffffffffffffffffffffffffffffffff1614611d3a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b565b6000808611611dac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416d6f756e74206d757374206265206e6f6e7a65726f00000000000000000000604482015290519081900360640190fd5b83611e1857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d696e7420726563697069656e74206d757374206265206e6f6e7a65726f0000604482015290519081900360640190fd5b6000611e2386612852565b90506000611e2f612306565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8084166024830152604482018c905291519293508792918316916323b872dd916064808201926020929091908290030181600087803b158015611eb357600080fd5b505af1158015611ec7573d6000803e3d6000fd5b505050506040513d6020811015611edd57600080fd5b5051611f4a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f5472616e73666572206f7065726174696f6e206661696c656400000000000000604482015290519081900360640190fd5b8173ffffffffffffffffffffffffffffffffffffffff16639dc29fac878b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015611fbb57600080fd5b505af1158015611fcf573d6000803e3d6000fd5b5050505060006121297f000000000000000000000000000000000000000000000000000000000000000073__$8c977731748aa4504deed57239565df533$__6382c947b78a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561205e57600080fd5b505af4158015612072573d6000803e3d6000fd5b505050506040513d602081101561208857600080fd5b5051604080517f82c947b700000000000000000000000000000000000000000000000000000000815233600482015290518c918f9173__$8c977731748aa4504deed57239565df533$__916382c947b7916024808301926020929190829003018186803b1580156120f857600080fd5b505af415801561210c573d6000803e3d6000fd5b505050506040513d602081101561212257600080fd5b5051611b9c565b905060006121398a8689856128d4565b604080518d8152602081018c905263ffffffff8d168183015260608101889052608081018a90529051919250339173ffffffffffffffffffffffffffffffffffffffff8b169167ffffffffffffffff8516917f2fa9ca894982930190727e75500a97d8dc500233a5065e0f3126c48fbe0343c09181900360a00190a49a9950505050505050505050565b3390565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055610d448161177c565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161580159061227457503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016145b905090565b6000811580159061229e575063ffffffff831660009081526004602052604090205482145b9392505050565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612831565b60006119c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246020612686565b60035460009073ffffffffffffffffffffffffffffffffffffffff1661238d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4c6f63616c206d696e746572206973206e6f7420736574000000000000000000604482015290519081900360640190fd5b5060035473ffffffffffffffffffffffffffffffffffffffff1690565b604080517fd54de06f00000000000000000000000000000000000000000000000000000000815263ffffffff861660048201526024810185905273ffffffffffffffffffffffffffffffffffffffff848116604483015260648201849052915187926000929084169163d54de06f9160848082019260209290919082900301818787803b15801561243a57600080fd5b505af115801561244e573d6000803e3d6000fd5b505050506040513d602081101561246457600080fd5b505160408051858152905191925073ffffffffffffffffffffffffffffffffffffffff80841692908716917f1b2a7ff080b8cb6ff436ce0372e399692bbfb6d4ae5766fd8d58a7b8cc6142e6919081900360200190a350505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526113f2908490612b07565b60008061255d8484612bdf565b905060405181111561256d575060005b8061259b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061229e565b6125a6858585612c51565b95945050505050565b60006125ba82612c64565b64ffffffffff1664ffffffffff14156125d5575060006119c7565b60006125e083612c6a565b60405110199392505050565b60181c6bffffffffffffffffffffffff1690565b60008061260c86612c94565b6bffffffffffffffffffffffff16905061262586612c6a565b612639856126338489612bdf565b90612bdf565b1115612668577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610c9c565b6126728186612bdf565b90506117728364ffffffffff168286612550565b600060ff82166126985750600061229e565b6126a1846125ec565b6bffffffffffffffffffffffff166126bc8460ff8516612bdf565b111561279b576126fd6126ce85612c94565b6bffffffffffffffffffffffff166126e5866125ec565b6bffffffffffffffffffffffff16858560ff16612ca8565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612760578181015183820152602001612748565b50505050905090810190601f16801561278d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff1611156127f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806133eb603a913960400191505060405180910390fd5b60088202600061280786612c94565b6bffffffffffffffffffffffff169050600061282283612e03565b91909501511695945050505050565b60008160200360080260ff16612848858585612686565b901c949350505050565b63ffffffff8116600090815260046020526040812054806119c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4e6f20546f6b656e4d657373656e67657220666f7220646f6d61696e00000000604482015290519081900360640190fd5b600082612a14576040517f0ba469bc00000000000000000000000000000000000000000000000000000000815263ffffffff8616600482019081526024820186905260606044830190815284516064840152845173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693630ba469bc938a938a93899360840190602085019080838360005b8381101561299357818101518382015260200161297b565b50505050905090810190601f1680156129c05780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1580156129e157600080fd5b505af11580156129f5573d6000803e3d6000fd5b505050506040513d6020811015612a0b57600080fd5b50519050610c9c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f7259a75868686866040518563ffffffff1660e01b8152600401808563ffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612ab8578181015183820152602001612aa0565b50505050905090810190601f168015612ae55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156129e157600080fd5b6000612b69826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612e4c9092919063ffffffff16565b8051909150156113f257808060200190516020811015612b8857600080fd5b50516113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613425602a913960400191505060405180910390fd5b8181018281101561181157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60d81c90565b6000612c75826125ec565b612c7e83612c94565b016bffffffffffffffffffffffff169050919050565b60781c6bffffffffffffffffffffffff1690565b60606000612cb586612e5b565b9150506000612cc386612e5b565b9150506000612cd186612e5b565b9150506000612cdf86612e5b565b91505083838383604051602001808061344f603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a82015260500160216133a682397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6060610c9c8484600085612f2f565b600080601f5b600f8160ff161115612ec35760ff600882021684901c612e80816130e9565b61ffff16841793508160ff16601014612e9b57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612e61565b50600f5b60ff8160ff161015612f295760ff600882021684901c612ee6816130e9565b61ffff16831792508160ff16600014612f0157601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612ec7565b50915091565b606082471015612f8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806133806026913960400191505060405180910390fd5b612f9385613119565b612ffe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061306757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161302a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146130c9576040519150601f19603f3d011682016040523d82523d6000602084013e6130ce565b606091505b50915091506130de82828661311f565b979650505050505050565b60006130fb60048360ff16901c61319f565b60ff161760081b62ffff00166131108261319f565b60ff1617919050565b3b151590565b6060831561312e57508161229e565b82511561313e5782518084602001fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152845160248401528451859391928392604401919085019080838360008315612760578181015183820152602001612748565b600060f08083179060ff821614156131bb5760309150506119c7565b8060ff1660f114156131d15760319150506119c7565b8060ff1660f214156131e75760329150506119c7565b8060ff1660f314156131fd5760339150506119c7565b8060ff1660f414156132135760349150506119c7565b8060ff1660f514156132295760359150506119c7565b8060ff1660f6141561323f5760369150506119c7565b8060ff1660f714156132555760379150506119c7565b8060ff1660f8141561326b5760389150506119c7565b8060ff1660f914156132815760399150506119c7565b8060ff1660fa14156132975760619150506119c7565b8060ff1660fb14156132ad5760629150506119c7565b8060ff1660fc14156132c35760639150506119c7565b8060ff1660fd14156132d95760649150506119c7565b8060ff1660fe14156132ef5760659150506119c7565b8060ff1660ff14156133055760669150506119c7565b5091905056fe4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206e6577206f776e6572526573637561626c653a206e6577207265736375657220697320746865207a65726f206164647265737352656d6f746520546f6b656e4d657373656e67657220756e737570706f72746564416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c2e20417474656d7074656420746f20696e646578206174206f6666736574203078526573637561626c653a2063616c6c6572206973206e6f7420746865207265736375657254797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e2033322062797465735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656454797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a26469706673582212206b689f34f4e15f499706461beeb293d1cec2381023fbd21a46dcbc1856ad238864736f6c63430007060033", Ut = (n) => typeof n[0] == "string" || Array.isArray(n[0]) || "_isInterface" in n[0], Y0 = class Y0 extends cf {
  constructor(...f) {
    if (Ut(f))
      super(...f);
    else {
      const [e, t] = f;
      super(yf, Y0.linkBytecode(e), t);
    }
  }
  static linkBytecode(f) {
    let e = W6;
    return e = e.replace(new RegExp("__\\$8c977731748aa4504deed57239565df533\\$__", "g"), f["src/messages/Message.sol:Message"].replace(/^0x/, "").toLowerCase()), e;
  }
  getDeployTransaction(f, e, t) {
    return super.getDeployTransaction(f, e, t || {});
  }
  deploy(f, e, t) {
    return super.deploy(f, e, t || {});
  }
  connect(f) {
    return super.connect(f);
  }
  static createInterface() {
    return new S0(yf);
  }
  static connect(f, e) {
    return new s6(f, yf, e);
  }
};
u(Y0, "bytecode", W6), u(Y0, "abi", yf);
let Rf = Y0;
const hf = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "_attester",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_maxMessageBodySize",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "_version",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "attester",
        type: "address"
      }
    ],
    name: "AttesterDisabled",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "attester",
        type: "address"
      }
    ],
    name: "AttesterEnabled",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousAttesterManager",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newAttesterManager",
        type: "address"
      }
    ],
    name: "AttesterManagerUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "newMaxMessageBodySize",
        type: "uint256"
      }
    ],
    name: "MaxMessageBodySizeUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint32",
        name: "sourceDomain",
        type: "uint32"
      },
      {
        indexed: !0,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "sender",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "messageBody",
        type: "bytes"
      }
    ],
    name: "MessageReceived",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "bytes",
        name: "message",
        type: "bytes"
      }
    ],
    name: "MessageSent",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [],
    name: "Pause",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "PauserChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "RescuerChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "oldSignatureThreshold",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "newSignatureThreshold",
        type: "uint256"
      }
    ],
    name: "SignatureThresholdUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [],
    name: "Unpause",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "attesterManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address"
      }
    ],
    name: "disableAttester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAttester",
        type: "address"
      }
    ],
    name: "enableAttester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "getEnabledAttester",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNumEnabledAttesters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address"
      }
    ],
    name: "isEnabledAttester",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxMessageBodySize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextAvailableNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pauser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "attestation",
        type: "bytes"
      }
    ],
    name: "receiveMessage",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalMessage",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "originalAttestation",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "newMessageBody",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "newDestinationCaller",
        type: "bytes32"
      }
    ],
    name: "replaceMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rescuer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes"
      }
    ],
    name: "sendMessage",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "destinationCaller",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes"
      }
    ],
    name: "sendMessageWithCaller",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxMessageBodySize",
        type: "uint256"
      }
    ],
    name: "setMaxMessageBodySize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSignatureThreshold",
        type: "uint256"
      }
    ],
    name: "setSignatureThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "signatureThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAttesterManager",
        type: "address"
      }
    ],
    name: "updateAttesterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPauser",
        type: "address"
      }
    ],
    name: "updatePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "updateRescuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "usedNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], J6 = "0x60c06040526002805460ff60a01b191690553480156200001e57600080fd5b506040516200481f3803806200481f833981810160405260808110156200004457600080fd5b508051602082015160408301516060909301519192909182620000706200006a620000bb565b620000bf565b6200007b33620000e9565b60016004556200008b816200010b565b506001600160e01b031960e094851b811660805263ffffffff9290921660085590921b90911660a0525062000342565b3390565b600180546001600160a01b0319169055620000e6816200026b602090811b620024b817901c565b50565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6007546001600160a01b031633146200016b576040805162461bcd60e51b815260206004820152601b60248201527f43616c6c6572206e6f74206174746573746572206d616e616765720000000000604482015290519081900360640190fd5b6001600160a01b038116620001c7576040805162461bcd60e51b815260206004820152601c60248201527f4e6577206174746573746572206d757374206265206e6f6e7a65726f00000000604482015290519081900360640190fd5b620001e2816005620002bb60201b6200252d1790919060201c565b62000234576040805162461bcd60e51b815260206004820152601860248201527f417474657374657220616c726561647920656e61626c65640000000000000000604482015290519081900360640190fd5b6040516001600160a01b038216907f5b99bab45c72ce67e89466dbc47480b9c1fde1400e7268bbf463b8354ee4653f90600090a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620002d2836001600160a01b038416620002db565b90505b92915050565b6000620002e983836200032a565b6200032157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002d5565b506000620002d5565b60009081526001919091016020526040902054151590565b60805160e01c60a05160e01c61449a6200038560003980610d325280611173528061267e525080610f5052806118805280611c2c528061269f525061449a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80638da5cb5b1161010f578063bbde5374116100a2578063f2fde38b11610071578063f2fde38b146106da578063f7259a751461070d578063fae3687914610796578063feb61724146107c9576101e5565b8063bbde537414610665578063beb673d814610682578063de7769d41461069f578063e30c3978146106d2576101e5565b8063a82f2e26116100de578063a82f2e26146104fe578063af47b9bb14610506578063b2118a8d1461050e578063b857b77414610551576101e5565b80638da5cb5b146104c957806392492c68146104d15780639b0d94b7146104ee5780639fd0506d146104f6576101e5565b8063554bab3c116101875780637af82f60116101565780637af82f601461047e5780638371744e146104b15780638456cb59146104b95780638d3638f4146104c1576101e5565b8063554bab3c1461036557806357ecfd28146103985780635c975abb1461046e57806379ba509714610476576101e5565b806338a63183116101c357806338a63183146102f15780633f4ba83a1461032257806351079a531461032a57806354fd4d5014610344576101e5565b80630ba469bc146101ea5780632ab60045146102895780632d025080146102be575b600080fd5b61026c6004803603606081101561020057600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561022d57600080fd5b82018360208201111561023f57600080fd5b8035906020019184600183028401116401000000008311171561026157600080fd5b5090925090506107e6565b6040805167ffffffffffffffff9092168252519081900360200190f35b6102bc6004803603602081101561029f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610931565b005b6102bc600480360360208110156102d457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a14565b6102f9610c40565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102bc610c5c565b610332610d1f565b60408051918252519081900360200190f35b61034c610d30565b6040805163ffffffff9092168252519081900360200190f35b6102bc6004803603602081101561037b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d54565b61045a600480360360408110156103ae57600080fd5b8101906020810181356401000000008111156103c957600080fd5b8201836020820111156103db57600080fd5b803590602001918460018302840111640100000000831117156103fd57600080fd5b91939092909160208101903564010000000081111561041b57600080fd5b82018360208201111561042d57600080fd5b8035906020019184600183028401116401000000008311171561044f57600080fd5b509092509050610e3d565b604080519115158252519081900360200190f35b61045a6116bb565b6102bc6116dc565b61045a6004803603602081101561049457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661177f565b61026c611794565b6102bc6117a4565b61034c61187e565b6102f96118a2565b6102bc600480360360208110156104e757600080fd5b50356118be565b6102f9611901565b6102f961191d565b610332611939565b61033261193f565b6102bc6004803603606081101561052457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135611945565b6102bc6004803603608081101561056757600080fd5b81019060208101813564010000000081111561058257600080fd5b82018360208201111561059457600080fd5b803590602001918460018302840111640100000000831117156105b657600080fd5b9193909290916020810190356401000000008111156105d457600080fd5b8201836020820111156105e657600080fd5b8035906020019184600183028401116401000000008311171561060857600080fd5b91939092909160208101903564010000000081111561062657600080fd5b82018360208201111561063857600080fd5b8035906020019184600183028401116401000000008311171561065a57600080fd5b9193509150356119db565b6102bc6004803603602081101561067b57600080fd5b5035611d59565b6102f96004803603602081101561069857600080fd5b5035611f7b565b6102bc600480360360208110156106b557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611f88565b6102f9612092565b6102bc600480360360208110156106f057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166120ae565b61026c6004803603608081101561072357600080fd5b63ffffffff823516916020810135916040820135919081019060808101606082013564010000000081111561075757600080fd5b82018360208201111561076957600080fd5b8035906020019184600183028401116401000000008311171561078b57600080fd5b509092509050612146565b6102bc600480360360208110156107ac57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166122e4565b610332600480360360208110156107df57600080fd5b50356124a6565b60025460009074010000000000000000000000000000000000000000900460ff161561087357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b60008061087e612558565b9050600073__$8c977731748aa4504deed57239565df533$__6382c947b7336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156108e757600080fd5b505af41580156108fb573d6000803e3d6000fd5b505050506040513d602081101561091157600080fd5b5051905061092488888584868b8b61259a565b509150505b949350505050565b6109396127a4565b73ffffffffffffffffffffffffffffffffffffffff81166109a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180614231602a913960400191505060405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a90600090a250565b60075473ffffffffffffffffffffffffffffffffffffffff163314610a9a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616c6c6572206e6f74206174746573746572206d616e616765720000000000604482015290519081900360640190fd5b6000610aa4610d1f565b905060018111610b1557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f546f6f2066657720656e61626c65642061747465737465727300000000000000604482015290519081900360640190fd5b6004548111610b8557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e6174757265207468726573686f6c6420697320746f6f206c6f770000604482015290519081900360640190fd5b610b9060058361284e565b610bfb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f417474657374657220616c72656164792064697361626c656400000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316907f78e573a18c75957b7cadaab01511aa1c19a659f06ecf53e01de37ed92d3261fc90600090a25050565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b60025473ffffffffffffffffffffffffffffffffffffffff163314610ccc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806143916022913960400191505060405180910390fd5b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b6000610d2b6005612870565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610d5c6127a4565b73ffffffffffffffffffffffffffffffffffffffff8116610dc8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806141be6028913960400191505060405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907fb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a60490600090a250565b60025460009074010000000000000000000000000000000000000000900460ff1615610eca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b610ed68585858561287b565b6000610f1c600087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050612a989050565b9050610f497fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216612abc565b63ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610f9b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612bfa565b63ffffffff161461100d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c69642064657374696e6174696f6e20646f6d61696e000000000000604482015290519081900360640190fd5b600061103a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612c2b565b1461116c57604080517f82c947b7000000000000000000000000000000000000000000000000000000008152336004820152905173__$8c977731748aa4504deed57239565df533$__916382c947b7916024808301926020929190829003018186803b1580156110a957600080fd5b505af41580156110bd573d6000803e3d6000fd5b505050506040513d60208110156110d357600080fd5b50516111007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612c2b565b1461116c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c69642063616c6c657220666f72206d657373616765000000000000604482015290519081900360640190fd5b63ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166111be7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612c5c565b63ffffffff161461123057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f496e76616c6964206d6573736167652076657273696f6e000000000000000000604482015290519081900360640190fd5b600061125d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612c8c565b9050600061128c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416612cbc565b9050600061129a8383612ced565b6000818152600a60205260409020549091501561131857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e6f6e636520616c726561647920757365640000000000000000000000000000604482015290519081900360640190fd5b6000818152600a60205260408120600190556113557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616612d68565b905060006113ae6113877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816612d99565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016612e08565b905073__$8c977731748aa4504deed57239565df533$__635ced058e6113f57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916612e4c565b6040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561142957600080fd5b505af415801561143d573d6000803e3d6000fd5b505050506040513d602081101561145357600080fd5b50516040517f96abeb7000000000000000000000000000000000000000000000000000000000815263ffffffff8716600482019081526024820185905260606044830190815284516064840152845173ffffffffffffffffffffffffffffffffffffffff909416936396abeb70938a938893889391929091608490910190602085019080838360005b838110156114f45781810151838201526020016114dc565b50505050905090810190601f1680156115215780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561154257600080fd5b505af1158015611556573d6000803e3d6000fd5b505050506040513d602081101561156c57600080fd5b50516115d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f68616e646c65526563656976654d6573736167652829206661696c6564000000604482015290519081900360640190fd5b8367ffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f58200b4c34ae05ee816d710053fff3fb75af4395915d3d2a771b24aa10e3cc5d878585604051808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561166e578181015183820152602001611656565b50505050905090810190601f16801561169b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a35060019a9950505050505050505050565b60025474010000000000000000000000000000000000000000900460ff1681565b60006116e6612e7d565b90508073ffffffffffffffffffffffffffffffffffffffff16611707612092565b73ffffffffffffffffffffffffffffffffffffffff1614611773576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806142086029913960400191505060405180910390fd5b61177c81612e81565b50565b600061178c600583612eb2565b90505b919050565b60095467ffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff163314611814576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806143916022913960400191505060405180910390fd5b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6118c66127a4565b60088190556040805182815290517fb13bf6bebed03d1b318e3ea32e4b2a3ad9f5e2312cdf340a2f4bbfaee39f928d9181900360200190a150565b60075473ffffffffffffffffffffffffffffffffffffffff1690565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b60045481565b60085481565b60035473ffffffffffffffffffffffffffffffffffffffff1633146119b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806143336024913960400191505060405180910390fd5b6119d673ffffffffffffffffffffffffffffffffffffffff84168383612ed4565b505050565b60025474010000000000000000000000000000000000000000900460ff1615611a6557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b611a718787878761287b565b6000611ab7600089898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050612a989050565b9050611ae47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216612abc565b6000611b117fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316612d68565b905073__$8c977731748aa4504deed57239565df533$__635ced058e826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015611b6257600080fd5b505af4158015611b76573d6000803e3d6000fd5b505050506040513d6020811015611b8c57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff163314611bfb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806142cf6021913960400191505060405180910390fd5b6000611c287fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416612c8c565b90507f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff1614611cae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806142a3602c913960400191505060405180910390fd5b6000611cdb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516612bfa565b90506000611d0a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616612e4c565b90506000611d397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716612cbc565b9050611d4a83838988858e8e61259a565b50505050505050505050505050565b60075473ffffffffffffffffffffffffffffffffffffffff163314611ddf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616c6c6572206e6f74206174746573746572206d616e616765720000000000604482015290519081900360640190fd5b80611e4b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76616c6964207369676e6174757265207468726573686f6c640000000000604482015290519081900360640190fd5b611e556005612870565b811115611ec357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6577207369676e6174757265207468726573686f6c6420746f6f2068696768604482015290519081900360640190fd5b600454811415611f3457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5369676e6174757265207468726573686f6c6420616c72656164792073657400604482015290519081900360640190fd5b6004805490829055604080518281526020810184905281517f149153f58b4da003a8cfd4523709a202402182cb5aa335046911277a1be6eede929181900390910190a15050565b600061178c600583612f61565b611f906127a4565b73ffffffffffffffffffffffffffffffffffffffff811661201257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f496e76616c6964206174746573746572206d616e616765722061646472657373604482015290519081900360640190fd5b60075473ffffffffffffffffffffffffffffffffffffffff1661203482612f6d565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f0cee1b7ae04f3c788dd3a46c6fa677eb95b913611ef7ab59524fdc09d346021960405160405180910390a35050565b60015473ffffffffffffffffffffffffffffffffffffffff1690565b6120b66127a4565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556121016118a2565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60025460009074010000000000000000000000000000000000000000900460ff16156121d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b83612229576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806141e66022913960400191505060405180910390fd5b6000612233612558565b9050600073__$8c977731748aa4504deed57239565df533$__6382c947b7336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561229c57600080fd5b505af41580156122b0573d6000803e3d6000fd5b505050506040513d60208110156122c657600080fd5b505190506122d988888884868a8a61259a565b509695505050505050565b60075473ffffffffffffffffffffffffffffffffffffffff16331461236a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616c6c6572206e6f74206174746573746572206d616e616765720000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166123ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4e6577206174746573746572206d757374206265206e6f6e7a65726f00000000604482015290519081900360640190fd5b6123f760058261252d565b61246257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f417474657374657220616c726561647920656e61626c65640000000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216907f5b99bab45c72ce67e89466dbc47480b9c1fde1400e7268bbf463b8354ee4653f90600090a250565b600a6020526000908152604090205481565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061254f8373ffffffffffffffffffffffffffffffffffffffff8416612fb4565b90505b92915050565b600980547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008116600167ffffffffffffffff9283169081019092161790915590565b60085481111561260b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d65737361676520626f64792065786365656473206d61782073697a65000000604482015290519081900360640190fd5b8561267757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f526563697069656e74206d757374206265206e6f6e7a65726f00000000000000604482015290519081900360640190fd5b60006126ff7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008a87898c8c8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612ffe92505050565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036816040518080602001828103825283818151815260200191508051906020019080838360005b83811015612760578181015183820152602001612748565b50505050905090810190601f16801561278d5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15050505050505050565b6127ac612e7d565b73ffffffffffffffffffffffffffffffffffffffff166127ca6118a2565b73ffffffffffffffffffffffffffffffffffffffff161461284c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b565b600061254f8373ffffffffffffffffffffffffffffffffffffffff84166130f3565b600061178c826131d7565b60045460410281146128ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c6964206174746573746174696f6e206c656e677468000000000000604482015290519081900360640190fd5b60008085856040518083838082843760405192018290039091209450600093505050505b600454811015612a8f5760006129316041838102908101908789614173565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061297492508691508490506131db565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1611612a1057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f496e76616c6964207369676e6174757265206f72646572206f72206475706500604482015290519081900360640190fd5b612a198161177f565b612a8457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f496e76616c6964207369676e61747572653a206e6f7420617474657374657200604482015290519081900360640190fd5b935050600101612912565b50505050505050565b815160009060208401612ab364ffffffffff851682846131e7565b95945050505050565b612ae77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216613248565b612b5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d616c666f726d6564206d657373616765000000000000000000000000000000604482015290519081900360640190fd5b6074612b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316613285565b6bffffffffffffffffffffffff16101561177c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c6964206d6573736167653a20746f6f2073686f7274000000000000604482015290519081900360640190fd5b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660086004613299565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316605460206132ba565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004613299565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600480613299565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600c6008613299565b6040805160e09390931b7fffffffff000000000000000000000000000000000000000000000000000000001660208085019190915260c09290921b7fffffffffffffffff0000000000000000000000000000000000000000000000001660248401528051808403600c018152602c9093019052815191012090565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316601460206132ba565b600061178c607480612dcc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616613285565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff9103166000613465565b6060600080612e1684613285565b6bffffffffffffffffffffffff1690506040519150819250612e3b84836020016134f5565b508181016020016040529052919050565b600061178c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316603460206132ba565b3390565b600180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905561177c816124b8565b600061254f8373ffffffffffffffffffffffffffffffffffffffff8416613621565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526119d6908490613639565b600061254f8383613711565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000612fc08383613621565b612ff657508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155612552565b506000612552565b60608888888888888888604051602001808963ffffffff1660e01b81526004018863ffffffff1660e01b81526004018763ffffffff1660e01b81526004018667ffffffffffffffff1660c01b815260080185815260200184815260200183815260200182805190602001908083835b602083106130aa57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161306d565b6001836020036101000a03801982511681845116808217855250505050505090500198505050505050505050604051602081830303815290604052905098975050505050505050565b600081815260018301602052604081205480156131cd5783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808301919081019060009087908390811061314457fe5b906000526020600020015490508087600001848154811061316157fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061319157fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612552565b6000915050612552565b5490565b600061254f838361378f565b6000806131f4848461381f565b9050604051811115613204575060005b80613232577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050613241565b61323d858585613891565b9150505b9392505050565b6000613253826138a4565b64ffffffffff1664ffffffffff141561326e5750600061178f565b6000613279836138aa565b60405110199392505050565b60181c6bffffffffffffffffffffffff1690565b60008160200360080260ff166132b08585856132ba565b901c949350505050565b600060ff82166132cc57506000613241565b6132d584613285565b6bffffffffffffffffffffffff166132f08460ff851661381f565b11156133cf57613331613302856138d4565b6bffffffffffffffffffffffff1661331986613285565b6bffffffffffffffffffffffff16858560ff166138e8565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561339457818101518382015260200161337c565b50505050905090810190601f1680156133c15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff16111561342c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180614357603a913960400191505060405180910390fd5b60088202600061343b866138d4565b6bffffffffffffffffffffffff169050600061345683613a43565b91909501511695945050505050565b600080613471866138d4565b6bffffffffffffffffffffffff16905061348a866138aa565b61349e85613498848961381f565b9061381f565b11156134cd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610929565b6134d7818661381f565b90506134eb8364ffffffffff1682866131e7565b9695505050505050565b600061350083613a8c565b613555576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806143dd6028913960400191505060405180910390fd5b61355e83613248565b6135b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180614405602b913960400191505060405180910390fd5b60006135be84613285565b6bffffffffffffffffffffffff16905060006135d9856138d4565b6bffffffffffffffffffffffff16905060006040519050848111156135fe5760206060fd5b8285848460045afa506134eb613613876138a4565b64ffffffffff168685613891565b60009081526001919091016020526040902054151590565b600061369b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16613a9e9092919063ffffffff16565b8051909150156119d6578080602001905160208110156136ba57600080fd5b50516119d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806143b3602a913960400191505060405180910390fd5b8154600090821061376d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061419c6022913960400191505060405180910390fd5b82600001828154811061377c57fe5b9060005260206000200154905092915050565b6000815160411461380157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6134eb86828585613aad565b8181018281101561255257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60d81c90565b60006138b582613285565b6138be836138d4565b016bffffffffffffffffffffffff169050919050565b60781c6bffffffffffffffffffffffff1690565b606060006138f586613c9b565b915050600061390386613c9b565b915050600061391186613c9b565b915050600061391f86613c9b565b915050838383836040516020018080614430603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a82015260500160216142f082397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000613a9782613d6f565b1592915050565b60606109298484600085613d97565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115613b28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061425b6022913960400191505060405180910390fd5b8360ff16601b1480613b3d57508360ff16601c145b613b92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806143116022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015613bee573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612ab357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b600080601f5b600f8160ff161115613d035760ff600882021684901c613cc081613f51565b61ffff16841793508160ff16601014613cdb57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01613ca1565b50600f5b60ff8160ff161015613d695760ff600882021684901c613d2681613f51565b61ffff16831792508160ff16600014613d4157601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01613d07565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b606082471015613df2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061427d6026913960400191505060405180910390fd5b613dfb85613f81565b613e6657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310613ecf57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613e92565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613f31576040519150601f19603f3d011682016040523d82523d6000602084013e613f36565b606091505b5091509150613f46828286613f87565b979650505050505050565b6000613f6360048360ff16901c614007565b60ff161760081b62ffff0016613f7882614007565b60ff1617919050565b3b151590565b60608315613f96575081613241565b825115613fa65782518084602001fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815284516024840152845185939192839260440191908501908083836000831561339457818101518382015260200161337c565b600060f08083179060ff8216141561402357603091505061178f565b8060ff1660f1141561403957603191505061178f565b8060ff1660f2141561404f57603291505061178f565b8060ff1660f3141561406557603391505061178f565b8060ff1660f4141561407b57603491505061178f565b8060ff1660f5141561409157603591505061178f565b8060ff1660f614156140a757603691505061178f565b8060ff1660f714156140bd57603791505061178f565b8060ff1660f814156140d357603891505061178f565b8060ff1660f914156140e957603991505061178f565b8060ff1660fa14156140ff57606191505061178f565b8060ff1660fb141561411557606291505061178f565b8060ff1660fc141561412b57606391505061178f565b8060ff1660fd141561414157606491505061178f565b8060ff1660fe141561415757606591505061178f565b8060ff1660ff141561416d57606691505061178f565b50919050565b60008085851115614182578182fd5b8386111561418e578182fd5b505082019391909203915056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64735061757361626c653a206e65772070617573657220697320746865207a65726f206164647265737344657374696e6174696f6e2063616c6c6572206d757374206265206e6f6e7a65726f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206e6577206f776e6572526573637561626c653a206e6577207265736375657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d657373616765206e6f74206f726967696e616c6c792073656e742066726f6d207468697320646f6d61696e53656e646572206e6f74207065726d697474656420746f20757365206e6f6e63652e20417474656d7074656420746f20696e646578206174206f666673657420307845434453413a20696e76616c6964207369676e6174757265202776272076616c7565526573637561626c653a2063616c6c6572206973206e6f7420746865207265736375657254797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e2033322062797465735061757361626c653a2063616c6c6572206973206e6f7420746865207061757365725361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656454797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220e2eab27571cb9d2ecf49a592b1b78e24c28061c662fef829a376f797fcfcd15864736f6c63430007060033", _t = (n) => typeof n[0] == "string" || Array.isArray(n[0]) || "_isInterface" in n[0], Z0 = class Z0 extends cf {
  constructor(...f) {
    if (_t(f))
      super(...f);
    else {
      const [e, t] = f;
      super(hf, Z0.linkBytecode(e), t);
    }
  }
  static linkBytecode(f) {
    let e = J6;
    return e = e.replace(new RegExp("__\\$8c977731748aa4504deed57239565df533\\$__", "g"), f["src/messages/Message.sol:Message"].replace(/^0x/, "").toLowerCase()), e;
  }
  getDeployTransaction(f, e, t, r, a) {
    return super.getDeployTransaction(f, e, t, r, a || {});
  }
  deploy(f, e, t, r, a) {
    return super.deploy(f, e, t, r, a || {});
  }
  connect(f) {
    return super.connect(f);
  }
  static createInterface() {
    return new S0(hf);
  }
  static connect(f, e) {
    return new s6(f, hf, e);
  }
};
u(Z0, "bytecode", J6), u(Z0, "abi", hf);
let Of = Z0;
const Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CircleRelayer__factory: Nf,
  MessageTransmitter: Bt,
  MessageTransmitter__factory: Of,
  TokenMessenger: $t,
  TokenMessenger__factory: Rf
}, Symbol.toStringTag, { value: "Module" }));
q6(Q6, "CircleBridge", i6);
q6(Q6, "AutomaticCircleBridge", c6);
export {
  c6 as EvmAutomaticCircleBridge,
  i6 as EvmCircleBridge,
  Wt as ethers_contracts
};
