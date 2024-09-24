var m0 = Object.defineProperty;
var g0 = (r, e, t) => e in r ? m0(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var u = (r, e, t) => (g0(r, typeof e != "symbol" ? e + "" : e, t), t), It = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var b = (r, e, t) => (It(r, e, "read from private field"), t ? t.call(r) : e.get(r)), x = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, T = (r, e, t, n) => (It(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
var qt = (r, e, t, n) => ({
  set _(s) {
    T(r, e, s, t);
  },
  get _() {
    return b(r, e, n);
  }
}), A = (r, e, t) => (It(r, e, "access private method"), t);
import { r as w0 } from "./chain-tk4BDPwT.mjs";
import { E as T0, a as Pt, b as E0, c as x0, _ as N0 } from "./evm-CAEWKa29.mjs";
import { c as v0 } from "./create-Du0Xo8xc.mjs";
import { c3 as O0, cG as A0, ar as k0 } from "./index-DV1w5RNX.mjs";
class I0 {
  constructor(e, t, n, s, i = !1) {
    u(this, "transaction");
    u(this, "network");
    u(this, "chain");
    u(this, "description");
    u(this, "parallelizable");
    this.transaction = e, this.network = t, this.chain = n, this.description = s, this.parallelizable = i;
  }
}
class Et {
  constructor(e, t, n, s) {
    u(this, "network");
    u(this, "chain");
    u(this, "provider");
    u(this, "contracts");
    u(this, "chainId");
    u(this, "coreAddress");
    u(this, "core");
    u(this, "coreIface");
    this.network = e, this.chain = t, this.provider = n, this.contracts = s, this.chainId = O0.get(e, t), this.coreIface = je.createInterface();
    const i = this.contracts.coreBridge;
    if (!i)
      throw new Error("Core bridge address not found");
    this.coreAddress = i, this.core = je.connect(i, n);
  }
  async getMessageFee() {
    return await this.core.messageFee.staticCall();
  }
  async getGuardianSetIndex() {
    return Number(await this.core.getCurrentGuardianSetIndex.staticCall());
  }
  async getGuardianSet(e) {
    const t = await this.core.getGuardianSet(e);
    return {
      index: e,
      keys: t[0],
      expiry: t[1]
    };
  }
  static async fromRpc(e, t) {
    const [n, s] = await T0.chainFromRpc(e), i = t[s];
    if (i.network !== n)
      throw new Error(`Network mismatch: ${i.network} != ${n}`);
    return new Et(n, s, e, i.contracts);
  }
  async *publishMessage(e, t, n, s) {
    const i = new Pt(e).toString(), a = await this.core.publishMessage.populateTransaction(n, t, s);
    yield this.createUnsignedTx(E0(a, i), "WormholeCore.publishMessage");
  }
  async *verifyMessage(e, t) {
    throw new Error("Not implemented.");
  }
  async parseTransaction(e) {
    const t = await this.provider.getTransactionReceipt(e);
    return t === null ? [] : t.logs.filter((n) => n.address === this.coreAddress).map((n) => {
      const { topics: s, data: i } = n, a = this.coreIface.parseLog({
        topics: s.slice(),
        data: i
      });
      if (a === null)
        return;
      const o = new Pt(a.args.sender);
      return {
        chain: this.chain,
        emitter: o.toUniversalAddress(),
        sequence: a.args.sequence
      };
    }).filter(A0);
  }
  async parseMessages(e) {
    const t = await this.provider.getTransactionReceipt(e);
    if (t === null)
      throw new Error("Could not get transaction receipt");
    const n = await this.getGuardianSetIndex();
    return t.logs.filter((s) => s.address === this.coreAddress).map((s) => {
      const { topics: i, data: a } = s, o = this.coreIface.parseLog({
        topics: i.slice(),
        data: a
      });
      if (o === null)
        return null;
      const c = new Pt(o.args.sender);
      return v0("Uint8Array", {
        guardianSet: n,
        // TODO: should we get this from the contract on init?
        timestamp: 0,
        // TODO: Would need to get the full block to get the timestamp
        emitterChain: this.chain,
        emitterAddress: c.toUniversalAddress(),
        consistencyLevel: Number(o.args.consistencyLevel),
        sequence: BigInt(o.args.sequence),
        nonce: Number(o.args.nonce),
        signatures: [],
        payload: k0.decode(o.args.payload)
      });
    }).filter((s) => !!s);
  }
  createUnsignedTx(e, t, n = !1) {
    return new I0(x0(e, this.chainId), this.network, this.chain, t, n);
  }
}
const P0 = "6.12.1";
function R0(r, e, t) {
  const n = e.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === e)
          return;
    }
  const s = new Error(`invalid value for type ${e}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${t}`, s.value = r, s;
}
async function Ct(r) {
  const e = Object.keys(r);
  return (await Promise.all(e.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[e[i]] = s, n), {});
}
function w(r, e, t) {
  for (let n in e) {
    let s = e[n];
    const i = t ? t[n] : null;
    i && R0(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function Be(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(Be).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let t = "0x";
    for (let n = 0; n < r.length; n++)
      t += e[r[n] >> 4], t += e[r[n] & 15];
    return t;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Be(r.toJSON());
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
      const e = Object.keys(r);
      return e.sort(), "{ " + e.map((t) => `${Be(t)}: ${Be(r[t])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Ve(r, e) {
  return r && r.code === e;
}
function Pn(r) {
  return Ve(r, "CALL_EXCEPTION");
}
function We(r, e, t) {
  let n = r;
  {
    const i = [];
    if (t) {
      if ("message" in t || "code" in t || "name" in t)
        throw new Error(`value will overwrite populated values: ${Be(t)}`);
      for (const a in t) {
        if (a === "shortMessage")
          continue;
        const o = t[a];
        i.push(a + "=" + Be(o));
      }
    }
    i.push(`code=${e}`), i.push(`version=${P0}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (e) {
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
  return w(s, { code: e }), t && Object.assign(s, t), s.shortMessage == null && w(s, { shortMessage: n }), s;
}
function g(r, e, t, n) {
  if (!r)
    throw We(e, t, n);
}
function d(r, e, t, n) {
  g(r, e, "INVALID_ARGUMENT", { argument: t, value: n });
}
function Rn(r, e, t) {
  t == null && (t = ""), t && (t = ": " + t), g(r >= e, "missing arguemnt" + t, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: e
  }), g(r <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: e
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((r, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(e);
  } catch {
  }
  return r;
}, []);
function Vt(r, e, t) {
  if (t == null && (t = ""), r !== e) {
    let n = t, s = "new";
    t && (n += ".", s += " " + t), g(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function Sn(r, e, t) {
  if (r instanceof Uint8Array)
    return t ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  d(!1, "invalid BytesLike value", e || "value", r);
}
function z(r, e) {
  return Sn(r, e, !1);
}
function ee(r, e) {
  return Sn(r, e, !0);
}
function ie(r, e) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && r.length !== 2 + 2 * e || e === !0 && r.length % 2 !== 0);
}
function S0(r) {
  return ie(r, !0) || r instanceof Uint8Array;
}
const jt = "0123456789abcdef";
function I(r) {
  const e = z(r);
  let t = "0x";
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    t += jt[(s & 240) >> 4] + jt[s & 15];
  }
  return t;
}
function Ie(r) {
  return "0x" + r.map((e) => I(e).substring(2)).join("");
}
function Te(r, e, t) {
  const n = z(r);
  return t != null && t > n.length && g(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: t
  }), I(n.slice(e ?? 0, t ?? n.length));
}
function Un(r, e, t) {
  const n = z(r);
  g(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: e,
    offset: e + 1
  });
  const s = new Uint8Array(e);
  return s.fill(0), t ? s.set(n, e - n.length) : s.set(n, 0), I(s);
}
function U0(r, e) {
  return Un(r, e, !0);
}
function C0(r, e) {
  return Un(r, e, !1);
}
const xt = BigInt(0), K = BigInt(1), Le = 9007199254740991;
function B0(r, e) {
  const t = Nt(r, "value"), n = BigInt(be(e, "width"));
  if (g(t >> n === xt, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), t >> n - K) {
    const s = (K << n) - K;
    return -((~t & s) + K);
  }
  return t;
}
function L0(r, e) {
  let t = le(r, "value");
  const n = BigInt(be(e, "width")), s = K << n - K;
  if (t < xt) {
    t = -t, g(t <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (K << n) - K;
    return (~t & i) + K;
  } else
    g(t < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return t;
}
function it(r, e) {
  const t = Nt(r, "value"), n = BigInt(be(e, "bits"));
  return t & (K << n) - K;
}
function le(r, e) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return d(Number.isInteger(r), "underflow", e || "value", r), d(r >= -Le && r <= Le, "overflow", e || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (t) {
        d(!1, `invalid BigNumberish string: ${t.message}`, e || "value", r);
      }
  }
  d(!1, "invalid BigNumberish value", e || "value", r);
}
function Nt(r, e) {
  const t = le(r, e);
  return g(t >= xt, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), t;
}
const en = "0123456789abcdef";
function Cn(r) {
  if (r instanceof Uint8Array) {
    let e = "0x0";
    for (const t of r)
      e += en[t >> 4], e += en[t & 15];
    return BigInt(e);
  }
  return le(r);
}
function be(r, e) {
  switch (typeof r) {
    case "bigint":
      return d(r >= -Le && r <= Le, "overflow", e || "value", r), Number(r);
    case "number":
      return d(Number.isInteger(r), "underflow", e || "value", r), d(r >= -Le && r <= Le, "overflow", e || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return be(BigInt(r), e);
      } catch (t) {
        d(!1, `invalid numeric string: ${t.message}`, e || "value", r);
      }
  }
  d(!1, "invalid numeric value", e || "value", r);
}
function F0(r) {
  return be(Cn(r));
}
function Bn(r, e) {
  let n = Nt(r, "value").toString(16);
  if (e == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = be(e, "width");
    for (g(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function _0(r) {
  const e = Nt(r, "value");
  if (e === xt)
    return new Uint8Array([]);
  let t = e.toString(16);
  t.length % 2 && (t = "0" + t);
  const n = new Uint8Array(t.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(t.substring(i, i + 2), 16);
  }
  return n;
}
var Fe;
class M0 {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(e, t, n) {
    /**
     *  The event filter.
     */
    u(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    u(this, "emitter");
    x(this, Fe, void 0);
    T(this, Fe, t), w(this, { emitter: e, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    b(this, Fe) != null && await this.emitter.off(this.filter, b(this, Fe));
  }
}
Fe = new WeakMap();
function $0(r, e, t, n, s) {
  d(!1, `invalid codepoint at offset ${e}; ${r}`, "bytes", t);
}
function Ln(r, e, t, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let a = e + 1; a < t.length && t[a] >> 6 === 2; a++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? t.length - e - 1 : 0;
}
function D0(r, e, t, n, s) {
  return r === "OVERLONG" ? (d(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Ln(r, e, t));
}
const G0 = Object.freeze({
  error: $0,
  ignore: Ln,
  replace: D0
});
function V0(r, e) {
  e == null && (e = G0.error);
  const t = z(r, "bytes"), n = [];
  let s = 0;
  for (; s < t.length; ) {
    const i = t[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let a = null, o = null;
    if ((i & 224) === 192)
      a = 1, o = 127;
    else if ((i & 240) === 224)
      a = 2, o = 2047;
    else if ((i & 248) === 240)
      a = 3, o = 65535;
    else {
      (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, t, n) : s += e("BAD_PREFIX", s - 1, t, n);
      continue;
    }
    if (s - 1 + a >= t.length) {
      s += e("OVERRUN", s - 1, t, n);
      continue;
    }
    let c = i & (1 << 8 - a - 1) - 1;
    for (let f = 0; f < a; f++) {
      let l = t[s];
      if ((l & 192) != 128) {
        s += e("MISSING_CONTINUE", s, t, n), c = null;
        break;
      }
      c = c << 6 | l & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += e("OUT_OF_RANGE", s - 1 - a, t, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += e("UTF16_SURROGATE", s - 1 - a, t, n, c);
        continue;
      }
      if (c <= o) {
        s += e("OVERLONG", s - 1 - a, t, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function Fn(r, e) {
  d(typeof r == "string", "invalid string value", "str", r);
  let t = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      t.push(s);
    else if (s < 2048)
      t.push(s >> 6 | 192), t.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      d(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const a = 65536 + ((s & 1023) << 10) + (i & 1023);
      t.push(a >> 18 | 240), t.push(a >> 12 & 63 | 128), t.push(a >> 6 & 63 | 128), t.push(a & 63 | 128);
    } else
      t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
  }
  return new Uint8Array(t);
}
function H0(r) {
  return r.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function z0(r, e) {
  return H0(V0(r, e));
}
function tn(r) {
  const e = [];
  for (; r; )
    e.unshift(r & 255), r >>= 8;
  return e;
}
function _n(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(_n(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = tn(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const e = Array.prototype.slice.call(z(r, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = tn(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
const nn = "0123456789abcdef";
function J0(r) {
  let e = "0x";
  for (const t of _n(r))
    e += nn[t >> 4], e += nn[t & 15];
  return e;
}
const B = 32, Bt = new Uint8Array(B), K0 = ["then"], at = {};
function He(r, e) {
  const t = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw t.error = e, t;
}
var pe;
const Ee = class Ee extends Array {
  /**
   *  @private
   */
  constructor(...t) {
    const n = t[0];
    let s = t[1], i = (t[2] || []).slice(), a = !0;
    n !== at && (s = t, i = [], a = !1);
    super(s.length);
    x(this, pe, void 0);
    s.forEach((c, f) => {
      this[f] = c;
    });
    const o = i.reduce((c, f) => (typeof f == "string" && c.set(f, (c.get(f) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (T(this, pe, Object.freeze(s.map((c, f) => {
      const l = i[f];
      return l != null && o.get(l) === 1 ? l : null;
    }))), !!a)
      return Object.freeze(this), new Proxy(this, {
        get: (c, f, l) => {
          if (typeof f == "string") {
            if (f.match(/^[0-9]+$/)) {
              const h = be(f, "%index");
              if (h < 0 || h >= this.length)
                throw new RangeError("out of result range");
              const m = c[h];
              return m instanceof Error && He(`index ${h}`, m), m;
            }
            if (K0.indexOf(f) >= 0)
              return Reflect.get(c, f, l);
            const p = c[f];
            if (p instanceof Function)
              return function(...h) {
                return p.apply(this === l ? c : this, h);
              };
            if (!(f in c))
              return c.getValue.apply(this === l ? c : this, [f]);
          }
          return Reflect.get(c, f, l);
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
  toArray(t) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && He(`index ${i}`, s), t && s instanceof Ee && (s = s.toArray(t)), n.push(s);
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
  toObject(t) {
    return b(this, pe).reduce((n, s, i) => {
      if (g(s != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), !(s in n)) {
        let a = this.getValue(s);
        t && a instanceof Ee && (a = a.toObject(t)), n[s] = a;
      }
      return n;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(t, n) {
    t == null && (t = 0), t < 0 && (t += this.length, t < 0 && (t = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = [], i = [];
    for (let a = t; a < n; a++)
      s.push(this[a]), i.push(b(this, pe)[a]);
    return new Ee(at, s, i);
  }
  /**
   *  @_ignore
   */
  filter(t, n) {
    const s = [], i = [];
    for (let a = 0; a < this.length; a++) {
      const o = this[a];
      o instanceof Error && He(`index ${a}`, o), t.call(n, o, a, this) && (s.push(o), i.push(b(this, pe)[a]));
    }
    return new Ee(at, s, i);
  }
  /**
   *  @_ignore
   */
  map(t, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const a = this[i];
      a instanceof Error && He(`index ${i}`, a), s.push(t.call(n, a, i, this));
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
  getValue(t) {
    const n = b(this, pe).indexOf(t);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && He(`property ${JSON.stringify(t)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(t, n) {
    return new Ee(at, t, n);
  }
};
pe = new WeakMap();
let ht = Ee;
function rn(r) {
  let e = _0(r);
  return g(e.length <= B, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e, length: B, offset: e.length }), e.length !== B && (e = ee(Ie([Bt.slice(e.length % B), e]))), e;
}
class de {
  constructor(e, t, n, s) {
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
    w(this, { name: e, type: t, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(e, t) {
    d(!1, e, this.localName, t);
  }
}
var se, ve, _e, lt;
class Lt {
  constructor() {
    x(this, _e);
    // An array of WordSize lengthed objects to concatenation
    x(this, se, void 0);
    x(this, ve, void 0);
    T(this, se, []), T(this, ve, 0);
  }
  get data() {
    return Ie(b(this, se));
  }
  get length() {
    return b(this, ve);
  }
  appendWriter(e) {
    return A(this, _e, lt).call(this, ee(e.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(e) {
    let t = ee(e);
    const n = t.length % B;
    return n && (t = ee(Ie([t, Bt.slice(n)]))), A(this, _e, lt).call(this, t);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(e) {
    return A(this, _e, lt).call(this, rn(e));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const e = b(this, se).length;
    return b(this, se).push(Bt), T(this, ve, b(this, ve) + B), (t) => {
      b(this, se)[e] = rn(t);
    };
  }
}
se = new WeakMap(), ve = new WeakMap(), _e = new WeakSet(), lt = function(e) {
  return b(this, se).push(e), T(this, ve, b(this, ve) + e.length), e.length;
};
var F, G, Oe, Ae, he, et, _t, gt, Mn;
const Zt = class Zt {
  constructor(e, t, n) {
    x(this, et);
    x(this, gt);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    u(this, "allowLoose");
    x(this, F, void 0);
    x(this, G, void 0);
    x(this, Oe, void 0);
    x(this, Ae, void 0);
    x(this, he, void 0);
    w(this, { allowLoose: !!t }), T(this, F, ee(e)), T(this, Oe, 0), T(this, Ae, null), T(this, he, n ?? 1024), T(this, G, 0);
  }
  get data() {
    return I(b(this, F));
  }
  get dataLength() {
    return b(this, F).length;
  }
  get consumed() {
    return b(this, G);
  }
  get bytes() {
    return new Uint8Array(b(this, F));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(e) {
    const t = new Zt(b(this, F).slice(b(this, G) + e), this.allowLoose, b(this, he));
    return T(t, Ae, this), t;
  }
  // Read bytes
  readBytes(e, t) {
    let n = A(this, gt, Mn).call(this, 0, e, !!t);
    return A(this, et, _t).call(this, e), T(this, G, b(this, G) + n.length), n.slice(0, e);
  }
  // Read a numeric values
  readValue() {
    return Cn(this.readBytes(B));
  }
  readIndex() {
    return F0(this.readBytes(B));
  }
};
F = new WeakMap(), G = new WeakMap(), Oe = new WeakMap(), Ae = new WeakMap(), he = new WeakMap(), et = new WeakSet(), _t = function(e) {
  var t;
  if (b(this, Ae))
    return A(t = b(this, Ae), et, _t).call(t, e);
  T(this, Oe, b(this, Oe) + e), g(b(this, he) < 1 || b(this, Oe) <= b(this, he) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${b(this, he)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: ee(b(this, F)),
    offset: b(this, G),
    length: e,
    info: {
      bytesRead: b(this, Oe),
      dataLength: this.dataLength
    }
  });
}, gt = new WeakSet(), Mn = function(e, t, n) {
  let s = Math.ceil(t / B) * B;
  return b(this, G) + s > b(this, F).length && (this.allowLoose && n && b(this, G) + t <= b(this, F).length ? s = t : g(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: ee(b(this, F)),
    length: b(this, F).length,
    offset: b(this, G) + s
  })), b(this, F).slice(b(this, G), b(this, G) + s);
};
let Ft = Zt;
function sn(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function $n(r, ...e) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function an(r, e = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function W0(r, e) {
  $n(r);
  const t = e.outputLen;
  if (r.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const X0 = (r) => r instanceof Uint8Array, Y0 = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Z0 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Z0)
  throw new Error("Non little-endian hardware is not supported");
function Q0(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Dn(r) {
  if (typeof r == "string" && (r = Q0(r)), !X0(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
class q0 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function j0(r) {
  const e = (n) => r().update(Dn(n)).digest(), t = r();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
}
const ot = /* @__PURE__ */ BigInt(2 ** 32 - 1), on = /* @__PURE__ */ BigInt(32);
function er(r, e = !1) {
  return e ? { h: Number(r & ot), l: Number(r >> on & ot) } : { h: Number(r >> on & ot) | 0, l: Number(r & ot) | 0 };
}
function tr(r, e = !1) {
  let t = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: a } = er(r[s], e);
    [t[s], n[s]] = [i, a];
  }
  return [t, n];
}
const nr = (r, e, t) => r << t | e >>> 32 - t, rr = (r, e, t) => e << t | r >>> 32 - t, sr = (r, e, t) => e << t - 32 | r >>> 64 - t, ir = (r, e, t) => r << t - 32 | e >>> 64 - t, [Gn, Vn, Hn] = [[], [], []], ar = /* @__PURE__ */ BigInt(0), ze = /* @__PURE__ */ BigInt(1), or = /* @__PURE__ */ BigInt(2), cr = /* @__PURE__ */ BigInt(7), fr = /* @__PURE__ */ BigInt(256), ur = /* @__PURE__ */ BigInt(113);
for (let r = 0, e = ze, t = 1, n = 0; r < 24; r++) {
  [t, n] = [n, (2 * t + 3 * n) % 5], Gn.push(2 * (5 * n + t)), Vn.push((r + 1) * (r + 2) / 2 % 64);
  let s = ar;
  for (let i = 0; i < 7; i++)
    e = (e << ze ^ (e >> cr) * ur) % fr, e & or && (s ^= ze << (ze << /* @__PURE__ */ BigInt(i)) - ze);
  Hn.push(s);
}
const [lr, br] = /* @__PURE__ */ tr(Hn, !0), cn = (r, e, t) => t > 32 ? sr(r, e, t) : nr(r, e, t), fn = (r, e, t) => t > 32 ? ir(r, e, t) : rr(r, e, t);
function dr(r, e = 24) {
  const t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let a = 0; a < 10; a++)
      t[a] = r[a] ^ r[a + 10] ^ r[a + 20] ^ r[a + 30] ^ r[a + 40];
    for (let a = 0; a < 10; a += 2) {
      const o = (a + 8) % 10, c = (a + 2) % 10, f = t[c], l = t[c + 1], p = cn(f, l, 1) ^ t[o], h = fn(f, l, 1) ^ t[o + 1];
      for (let m = 0; m < 50; m += 10)
        r[a + m] ^= p, r[a + m + 1] ^= h;
    }
    let s = r[2], i = r[3];
    for (let a = 0; a < 24; a++) {
      const o = Vn[a], c = cn(s, i, o), f = fn(s, i, o), l = Gn[a];
      s = r[l], i = r[l + 1], r[l] = c, r[l + 1] = f;
    }
    for (let a = 0; a < 50; a += 10) {
      for (let o = 0; o < 10; o++)
        t[o] = r[a + o];
      for (let o = 0; o < 10; o++)
        r[a + o] ^= ~t[(o + 2) % 10] & t[(o + 4) % 10];
    }
    r[0] ^= lr[n], r[1] ^= br[n];
  }
  t.fill(0);
}
class Ht extends q0 {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, t, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, sn(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Y0(this.state);
  }
  keccak() {
    dr(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    an(this);
    const { blockLen: t, state: n } = this;
    e = Dn(e);
    const s = e.length;
    for (let i = 0; i < s; ) {
      const a = Math.min(t - this.pos, s - i);
      for (let o = 0; o < a; o++)
        n[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: n, blockLen: s } = this;
    e[n] ^= t, t & 128 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    an(this, !1), $n(e), this.finish();
    const t = this.state, { blockLen: n } = this;
    for (let s = 0, i = e.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const a = Math.min(n - this.posOut, i - s);
      e.set(t.subarray(this.posOut, this.posOut + a), s), this.posOut += a, s += a;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return sn(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (W0(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: t, suffix: n, outputLen: s, rounds: i, enableXOF: a } = this;
    return e || (e = new Ht(t, n, s, a, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = a, e.destroyed = this.destroyed, e;
  }
}
const pr = (r, e, t) => j0(() => new Ht(e, r, t)), hr = /* @__PURE__ */ pr(1, 136, 256 / 8);
let zn = !1;
const Jn = function(r) {
  return hr(r);
};
let Kn = Jn;
function ce(r) {
  const e = z(r, "data");
  return I(Kn(e));
}
ce._ = Jn;
ce.lock = function() {
  zn = !0;
};
ce.register = function(r) {
  if (zn)
    throw new TypeError("keccak256 is locked");
  Kn = r;
};
Object.freeze(ce);
const yr = BigInt(0), mr = BigInt(36);
function un(r) {
  r = r.toLowerCase();
  const e = r.substring(2).split(""), t = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    t[s] = e[s].charCodeAt(0);
  const n = z(ce(t));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const zt = {};
for (let r = 0; r < 10; r++)
  zt[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  zt[String.fromCharCode(65 + r)] = String(10 + r);
const ln = 15;
function gr(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let e = r.split("").map((n) => zt[n]).join("");
  for (; e.length >= ln; ) {
    let n = e.substring(0, ln);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
const wr = function() {
  const r = {};
  for (let e = 0; e < 36; e++) {
    const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    r[t] = BigInt(e);
  }
  return r;
}();
function Tr(r) {
  r = r.toLowerCase();
  let e = yr;
  for (let t = 0; t < r.length; t++)
    e = e * mr + wr[r[t]];
  return e;
}
function fe(r) {
  if (d(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const e = un(r);
    return d(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === r, "bad address checksum", "address", r), e;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    d(r.substring(2, 4) === gr(r), "bad icap checksum", "address", r);
    let e = Tr(r.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return un("0x" + e);
  }
  d(!1, "invalid address", "address", r);
}
function Er(r) {
  const e = fe(r.from);
  let n = le(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, fe(Te(ce(J0([e, n])), 12));
}
function Wn(r) {
  return r && typeof r.getAddress == "function";
}
async function Rt(r, e) {
  const t = await e;
  return (t == null || t === "0x0000000000000000000000000000000000000000") && (g(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), d(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), fe(t);
}
function Xe(r, e) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? fe(r) : (g(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Rt(r, e.resolveName(r)));
  if (Wn(r))
    return Rt(r, r.getAddress());
  if (r && typeof r.then == "function")
    return Rt(r, r);
  d(!1, "unsupported addressable value", "target", r);
}
const te = {};
function y(r, e) {
  let t = !1;
  return e < 0 && (t = !0, e *= -1), new C(te, `${t ? "" : "u"}int${e}`, r, { signed: t, width: e });
}
function E(r, e) {
  return new C(te, `bytes${e || ""}`, r, { size: e });
}
const bn = Symbol.for("_ethers_typed");
var ke;
const ne = class ne {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    u(this, "type");
    /**
     *  The actual value.
     */
    u(this, "value");
    x(this, ke, void 0);
    /**
     *  @_ignore:
     */
    u(this, "_typedSymbol");
    s == null && (s = null), Vt(te, e, "Typed"), w(this, { _typedSymbol: bn, type: t, value: n }), T(this, ke, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((e) => e.format()).join(",")})` : this.type;
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
    return b(this, ke);
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
    return b(this, ke) === !0 ? -1 : b(this, ke) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(e, t) {
    return new ne(te, e, t);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(e) {
    return y(e, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(e) {
    return y(e, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(e) {
    return y(e, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(e) {
    return y(e, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(e) {
    return y(e, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(e) {
    return y(e, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(e) {
    return y(e, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(e) {
    return y(e, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(e) {
    return y(e, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(e) {
    return y(e, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(e) {
    return y(e, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(e) {
    return y(e, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(e) {
    return y(e, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(e) {
    return y(e, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(e) {
    return y(e, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(e) {
    return y(e, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(e) {
    return y(e, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(e) {
    return y(e, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(e) {
    return y(e, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(e) {
    return y(e, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(e) {
    return y(e, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(e) {
    return y(e, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(e) {
    return y(e, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(e) {
    return y(e, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(e) {
    return y(e, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(e) {
    return y(e, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(e) {
    return y(e, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(e) {
    return y(e, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(e) {
    return y(e, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(e) {
    return y(e, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(e) {
    return y(e, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(e) {
    return y(e, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(e) {
    return y(e, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(e) {
    return y(e, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(e) {
    return y(e, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(e) {
    return y(e, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(e) {
    return y(e, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(e) {
    return y(e, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(e) {
    return y(e, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(e) {
    return y(e, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(e) {
    return y(e, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(e) {
    return y(e, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(e) {
    return y(e, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(e) {
    return y(e, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(e) {
    return y(e, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(e) {
    return y(e, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(e) {
    return y(e, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(e) {
    return y(e, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(e) {
    return y(e, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(e) {
    return y(e, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(e) {
    return y(e, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(e) {
    return y(e, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(e) {
    return y(e, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(e) {
    return y(e, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(e) {
    return y(e, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(e) {
    return y(e, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(e) {
    return y(e, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(e) {
    return y(e, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(e) {
    return y(e, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(e) {
    return y(e, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(e) {
    return y(e, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(e) {
    return y(e, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(e) {
    return y(e, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(e) {
    return y(e, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(e) {
    return y(e, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(e) {
    return y(e, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(e) {
    return E(e, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(e) {
    return E(e, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(e) {
    return E(e, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(e) {
    return E(e, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(e) {
    return E(e, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(e) {
    return E(e, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(e) {
    return E(e, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(e) {
    return E(e, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(e) {
    return E(e, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(e) {
    return E(e, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(e) {
    return E(e, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(e) {
    return E(e, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(e) {
    return E(e, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(e) {
    return E(e, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(e) {
    return E(e, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(e) {
    return E(e, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(e) {
    return E(e, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(e) {
    return E(e, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(e) {
    return E(e, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(e) {
    return E(e, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(e) {
    return E(e, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(e) {
    return E(e, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(e) {
    return E(e, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(e) {
    return E(e, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(e) {
    return E(e, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(e) {
    return E(e, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(e) {
    return E(e, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(e) {
    return E(e, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(e) {
    return E(e, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(e) {
    return E(e, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(e) {
    return E(e, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(e) {
    return E(e, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(e) {
    return new ne(te, "address", e);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(e) {
    return new ne(te, "bool", !!e);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(e) {
    return new ne(te, "bytes", e);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(e) {
    return new ne(te, "string", e);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(e) {
    return new ne(te, "overrides", Object.assign({}, e));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(e) {
    return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === bn;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(e, t) {
    if (ne.isTyped(e)) {
      if (e.type !== t)
        throw new Error(`invalid type: expecetd ${t}, got ${e.type}`);
      return e.value;
    }
    return e;
  }
};
ke = new WeakMap();
let C = ne;
class xr extends de {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, t) {
    let n = C.dereference(t, "string");
    try {
      n = fe(n);
    } catch (s) {
      return this._throwError(s.message, t);
    }
    return e.writeValue(n);
  }
  decode(e) {
    return fe(Bn(e.readValue(), 20));
  }
}
class Nr extends de {
  constructor(t) {
    super(t.name, t.type, "_", t.dynamic);
    u(this, "coder");
    this.coder = t;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(t, n) {
    return this.coder.encode(t, n);
  }
  decode(t) {
    return this.coder.decode(t);
  }
}
function Xn(r, e, t) {
  let n = [];
  if (Array.isArray(t))
    n = t;
  else if (t && typeof t == "object") {
    let c = {};
    n = e.map((f) => {
      const l = f.localName;
      return g(l, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: f }, value: t }), g(!c[l], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: f }, value: t }), c[l] = !0, t[l];
    });
  } else
    d(!1, "invalid tuple value", "tuple", t);
  d(e.length === n.length, "types/value length mismatch", "tuple", t);
  let s = new Lt(), i = new Lt(), a = [];
  e.forEach((c, f) => {
    let l = n[f];
    if (c.dynamic) {
      let p = i.length;
      c.encode(i, l);
      let h = s.writeUpdatableValue();
      a.push((m) => {
        h(m + p);
      });
    } else
      c.encode(s, l);
  }), a.forEach((c) => {
    c(s.length);
  });
  let o = r.appendWriter(s);
  return o += r.appendWriter(i), o;
}
function Yn(r, e) {
  let t = [], n = [], s = r.subReader(0);
  return e.forEach((i) => {
    let a = null;
    if (i.dynamic) {
      let o = r.readIndex(), c = s.subReader(o);
      try {
        a = i.decode(c);
      } catch (f) {
        if (Ve(f, "BUFFER_OVERRUN"))
          throw f;
        a = f, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    } else
      try {
        a = i.decode(r);
      } catch (o) {
        if (Ve(o, "BUFFER_OVERRUN"))
          throw o;
        a = o, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    if (a == null)
      throw new Error("investigate");
    t.push(a), n.push(i.localName || null);
  }), ht.fromItems(t, n);
}
class vr extends de {
  constructor(t, n, s) {
    const i = t.type + "[" + (n >= 0 ? n : "") + "]", a = n === -1 || t.dynamic;
    super("array", i, s, a);
    u(this, "coder");
    u(this, "length");
    w(this, { coder: t, length: n });
  }
  defaultValue() {
    const t = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(t);
    return n;
  }
  encode(t, n) {
    const s = C.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, t.writeValue(s.length)), Rn(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let o = 0; o < s.length; o++)
      a.push(this.coder);
    return Xn(t, a, s);
  }
  decode(t) {
    let n = this.length;
    n === -1 && (n = t.readIndex(), g(n * B <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: t.bytes, offset: n * B, length: t.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new Nr(this.coder));
    return Yn(t, s);
  }
}
class Or extends de {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, t) {
    const n = C.dereference(t, "bool");
    return e.writeValue(n ? 1 : 0);
  }
  decode(e) {
    return !!e.readValue();
  }
}
class Zn extends de {
  constructor(e, t) {
    super(e, e, t, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, t) {
    t = ee(t);
    let n = e.writeValue(t.length);
    return n += e.writeBytes(t), n;
  }
  decode(e) {
    return e.readBytes(e.readIndex(), !0);
  }
}
class Ar extends Zn {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return I(super.decode(e));
  }
}
class kr extends de {
  constructor(t, n) {
    let s = "bytes" + String(t);
    super(s, s, n, !1);
    u(this, "size");
    w(this, { size: t }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(t, n) {
    let s = ee(C.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), t.writeBytes(s);
  }
  decode(t) {
    return I(t.readBytes(this.size));
  }
}
const Ir = new Uint8Array([]);
class Pr extends de {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, t) {
    return t != null && this._throwError("not null", t), e.writeBytes(Ir);
  }
  decode(e) {
    return e.readBytes(0), null;
  }
}
const Rr = BigInt(0), Sr = BigInt(1), Ur = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Cr extends de {
  constructor(t, n, s) {
    const i = (n ? "int" : "uint") + t * 8;
    super(i, i, s, !1);
    u(this, "size");
    u(this, "signed");
    w(this, { size: t, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(t, n) {
    let s = le(C.dereference(n, this.type)), i = it(Ur, B * 8);
    if (this.signed) {
      let a = it(i, this.size * 8 - 1);
      (s > a || s < -(a + Sr)) && this._throwError("value out-of-bounds", n), s = L0(s, 8 * B);
    } else
      (s < Rr || s > it(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return t.writeValue(s);
  }
  decode(t) {
    let n = it(t.readValue(), this.size * 8);
    return this.signed && (n = B0(n, this.size * 8)), n;
  }
}
class Br extends Zn {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, t) {
    return super.encode(e, Fn(C.dereference(t, "string")));
  }
  decode(e) {
    return z0(super.decode(e));
  }
}
class ct extends de {
  constructor(t, n) {
    let s = !1;
    const i = [];
    t.forEach((o) => {
      o.dynamic && (s = !0), i.push(o.type);
    });
    const a = "tuple(" + i.join(",") + ")";
    super("tuple", a, n, s);
    u(this, "coders");
    w(this, { coders: Object.freeze(t.slice()) });
  }
  defaultValue() {
    const t = [];
    this.coders.forEach((s) => {
      t.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const a = i.localName;
      return a && (s[a] || (s[a] = 0), s[a]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let a = s.localName;
      !a || n[a] !== 1 || (a === "length" && (a = "_length"), t[a] == null && (t[a] = t[i]));
    }), Object.freeze(t);
  }
  encode(t, n) {
    const s = C.dereference(n, "tuple");
    return Xn(t, this.coders, s);
  }
  decode(t) {
    return Yn(t, this.coders);
  }
}
function Ye(r) {
  return ce(Fn(r));
}
function St(r, e) {
  return {
    address: fe(r),
    storageKeys: e.map((t, n) => (d(ie(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
  };
}
function Lr(r) {
  if (Array.isArray(r))
    return r.map((t, n) => Array.isArray(t) ? (d(t.length === 2, "invalid slot set", `value[${n}]`, t), St(t[0], t[1])) : (d(t != null && typeof t == "object", "invalid address-slot set", "value", r), St(t.address, t.storageKeys)));
  d(r != null && typeof r == "object", "invalid access list", "value", r);
  const e = Object.keys(r).map((t) => {
    const n = r[t].reduce((s, i) => (s[i] = !0, s), {});
    return St(t, Object.keys(n).sort());
  });
  return e.sort((t, n) => t.address.localeCompare(n.address)), e;
}
function L(r) {
  const e = /* @__PURE__ */ new Set();
  return r.forEach((t) => e.add(t)), Object.freeze(e);
}
const Fr = "external public payable override", _r = L(Fr.split(" ")), Qn = "constant external internal payable private public pure view override", Mr = L(Qn.split(" ")), qn = "constructor error event fallback function receive struct", jn = L(qn.split(" ")), e0 = "calldata memory storage payable indexed", $r = L(e0.split(" ")), Dr = "tuple returns", Gr = [qn, e0, Dr, Qn].join(" "), Vr = L(Gr.split(" ")), Hr = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, zr = new RegExp("^(\\s*)"), Jr = new RegExp("^([0-9]+)"), Kr = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), t0 = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), n0 = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var R, J, tt, Mt;
const wt = class wt {
  constructor(e) {
    x(this, tt);
    x(this, R, void 0);
    x(this, J, void 0);
    T(this, R, 0), T(this, J, e.slice());
  }
  get offset() {
    return b(this, R);
  }
  get length() {
    return b(this, J).length - b(this, R);
  }
  clone() {
    return new wt(b(this, J));
  }
  reset() {
    T(this, R, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(e) {
    const t = this.peek();
    if (t.type !== "KEYWORD" || !e.has(t.text))
      throw new Error(`expected keyword ${t.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(e) {
    if (this.peek().type !== e) {
      const t = this.peek();
      throw new Error(`expected ${e}; got ${t.type} ${JSON.stringify(t.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = A(this, tt, Mt).call(this, b(this, R) + 1, e.match + 1);
    return T(this, R, e.match + 1), t;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = [];
    for (; b(this, R) < e.match - 1; ) {
      const n = this.peek().linkNext;
      t.push(A(this, tt, Mt).call(this, b(this, R) + 1, n)), T(this, R, n);
    }
    return T(this, R, e.match + 1), t;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (b(this, R) >= b(this, J).length)
      throw new Error("out-of-bounds");
    return b(this, J)[b(this, R)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(e) {
    const t = this.peekType("KEYWORD");
    return t != null && e.has(t) ? t : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(e) {
    if (this.length === 0)
      return null;
    const t = this.peek();
    return t.type === e ? t.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const e = this.peek();
    return qt(this, R)._++, e;
  }
  toString() {
    const e = [];
    for (let t = b(this, R); t < b(this, J).length; t++) {
      const n = b(this, J)[t];
      e.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${e.join(" ")}>`;
  }
};
R = new WeakMap(), J = new WeakMap(), tt = new WeakSet(), Mt = function(e = 0, t = 0) {
  return new wt(b(this, J).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - e,
    linkBack: n.linkBack - e,
    linkNext: n.linkNext - e
  }))));
};
let W = wt;
function ge(r) {
  const e = [], t = (a) => {
    const o = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${o} at ${i}: ${a}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let a = r.substring(i), o = a.match(zr);
    o && (i += o[1].length, a = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    e.push(c);
    let f = Hr[a[0]] || "";
    if (f) {
      if (c.type = f, c.text = a[0], i++, f === "OPEN_PAREN")
        n.push(e.length - 1), s.push(e.length - 1);
      else if (f == "CLOSE_PAREN")
        n.length === 0 && t("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
      else if (f === "COMMA")
        c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
      else if (f === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (f === "CLOSE_BRACKET") {
        let l = e.pop().text;
        if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
          const p = e.pop().text;
          l = p + l, e[e.length - 1].value = be(p);
        }
        if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        e[e.length - 1].text += l;
      }
      continue;
    }
    if (o = a.match(Kr), o) {
      if (c.text = o[1], i += c.text.length, Vr.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(n0)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (o = a.match(Jr), o) {
      c.text = o[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`);
  }
  return new W(e.map((a) => Object.freeze(a)));
}
function dn(r, e) {
  let t = [];
  for (const n in e.keys())
    r.has(n) && t.push(n);
  if (t.length > 1)
    throw new Error(`conflicting types: ${t.join(", ")}`);
}
function vt(r, e) {
  if (e.peekKeyword(jn)) {
    const t = e.pop().text;
    if (t !== r)
      throw new Error(`expected ${r}, got ${t}`);
  }
  return e.popType("ID");
}
function ue(r, e) {
  const t = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || e && !e.has(n))
      break;
    if (r.pop(), t.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    t.add(n);
  }
  return Object.freeze(t);
}
function r0(r) {
  let e = ue(r, Mr);
  return dn(e, L("constant payable nonpayable".split(" "))), dn(e, L("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
}
function oe(r, e) {
  return r.popParams().map((t) => S.from(t, e));
}
function s0(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return le(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Re(r) {
  if (r.length)
    throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
}
const Wr = new RegExp(/^(.*)\[([0-9]*)\]$/);
function pn(r) {
  const e = r.match(n0);
  if (d(e, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (e[2]) {
    const t = parseInt(e[2]);
    d(t !== 0 && t <= 32, "invalid bytes length", "type", r);
  } else if (e[3]) {
    const t = parseInt(e[3]);
    d(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const k = {}, M = Symbol.for("_ethers_internal"), hn = "_ParamTypeInternal", yn = "_ErrorInternal", mn = "_EventInternal", gn = "_ConstructorInternal", wn = "_FallbackInternal", Tn = "_FunctionInternal", En = "_StructInternal";
var Me, bt;
const V = class V {
  /**
   *  @private
   */
  constructor(e, t, n, s, i, a, o, c) {
    x(this, Me);
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
    if (Vt(e, k, "ParamType"), Object.defineProperty(this, M, { value: hn }), a && (a = Object.freeze(a.slice())), s === "array") {
      if (o == null || c == null)
        throw new Error("");
    } else if (o != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (a == null)
        throw new Error("");
    } else if (a != null)
      throw new Error("");
    w(this, {
      name: t,
      type: n,
      baseType: s,
      indexed: i,
      components: a,
      arrayLength: o,
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
  format(e) {
    if (e == null && (e = "sighash"), e === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(s);
    }
    let t = "";
    return this.isArray() ? (t += this.arrayChildren.format(e), t += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? t += "(" + this.components.map((n) => n.format(e)).join(e === "full" ? ", " : ",") + ")" : t += this.type, e !== "sighash" && (this.indexed === !0 && (t += " indexed"), e === "full" && this.name && (t += " " + this.name)), t;
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
  walk(e, t) {
    if (this.isArray()) {
      if (!Array.isArray(e))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s) => n.arrayChildren.walk(s, t));
    }
    if (this.isTuple()) {
      if (!Array.isArray(e))
        throw new Error("invalid tuple value");
      if (e.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s, i) => n.components[i].walk(s, t));
    }
    return t(this.type, e);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(e, t) {
    const n = [], s = [e];
    return A(this, Me, bt).call(this, n, e, t, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(e, t) {
    if (V.isParamType(e))
      return e;
    if (typeof e == "string")
      try {
        return V.from(ge(e), t);
      } catch {
        d(!1, "invalid param type", "obj", e);
      }
    else if (e instanceof W) {
      let o = "", c = "", f = null;
      ue(e, L(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", f = e.popParams().map((O) => V.from(O)), o = `tuple(${f.map((O) => O.format()).join(",")})`) : (o = pn(e.popType("TYPE")), c = o);
      let l = null, p = null;
      for (; e.length && e.peekType("BRACKET"); ) {
        const O = e.pop();
        l = new V(k, "", o, c, null, f, p, l), p = O.value, o += O.text, c = "array", f = null;
      }
      let h = null;
      if (ue(e, $r).has("indexed")) {
        if (!t)
          throw new Error("");
        h = !0;
      }
      const v = e.peekType("ID") ? e.pop().text : "";
      if (e.length)
        throw new Error("leftover tokens");
      return new V(k, v, o, c, h, f, p, l);
    }
    const n = e.name;
    d(!n || typeof n == "string" && n.match(t0), "invalid name", "obj.name", n);
    let s = e.indexed;
    s != null && (d(t, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
    let i = e.type, a = i.match(Wr);
    if (a) {
      const o = parseInt(a[2] || "-1"), c = V.from({
        type: a[1],
        components: e.components
      });
      return new V(k, n || "", i, "array", s, null, o, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const o = e.components != null ? e.components.map((f) => V.from(f)) : null;
      return new V(k, n || "", i, "tuple", s, o, null, null);
    }
    return i = pn(e.type), new V(k, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(e) {
    return e && e[M] === hn;
  }
};
Me = new WeakSet(), bt = function(e, t, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(t))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && t.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const a = this.arrayChildren, o = t.slice();
    o.forEach((c, f) => {
      var l;
      A(l = a, Me, bt).call(l, e, c, n, (p) => {
        o[f] = p;
      });
    }), s(o);
    return;
  }
  if (this.isTuple()) {
    const a = this.components;
    let o;
    if (Array.isArray(t))
      o = t.slice();
    else {
      if (t == null || typeof t != "object")
        throw new Error("invalid tuple value");
      o = a.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in t))
          throw new Error(`missing value for component ${c.name}`);
        return t[c.name];
      });
    }
    if (o.length !== this.components.length)
      throw new Error("array is wrong length");
    o.forEach((c, f) => {
      var l;
      A(l = a[f], Me, bt).call(l, e, c, n, (p) => {
        o[f] = p;
      });
    }), s(o);
    return;
  }
  const i = n(this.type, t);
  i.then ? e.push(async function() {
    s(await i);
  }()) : s(i);
};
let S = V;
class Se {
  /**
   *  @private
   */
  constructor(e, t, n) {
    /**
     *  The type of the fragment.
     */
    u(this, "type");
    /**
     *  The inputs for the fragment.
     */
    u(this, "inputs");
    Vt(e, k, "Fragment"), n = Object.freeze(n.slice()), w(this, { type: t, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(e) {
    if (typeof e == "string") {
      try {
        Se.from(JSON.parse(e));
      } catch {
      }
      return Se.from(ge(e));
    }
    if (e instanceof W)
      switch (e.peekKeyword(jn)) {
        case "constructor":
          return ae.from(e);
        case "error":
          return _.from(e);
        case "event":
          return q.from(e);
        case "fallback":
        case "receive":
          return re.from(e);
        case "function":
          return j.from(e);
        case "struct":
          return Pe.from(e);
      }
    else if (typeof e == "object") {
      switch (e.type) {
        case "constructor":
          return ae.from(e);
        case "error":
          return _.from(e);
        case "event":
          return q.from(e);
        case "fallback":
        case "receive":
          return re.from(e);
        case "function":
          return j.from(e);
        case "struct":
          return Pe.from(e);
      }
      g(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    d(!1, "unsupported frgament object", "obj", e);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(e) {
    return ae.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(e) {
    return _.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(e) {
    return q.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(e) {
    return j.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(e) {
    return Pe.isFragment(e);
  }
}
class Ot extends Se {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, n, i);
    /**
     *  The name of the fragment.
     */
    u(this, "name");
    d(typeof s == "string" && s.match(t0), "invalid identifier", "name", s), i = Object.freeze(i.slice()), w(this, { name: s });
  }
}
function Ze(r, e) {
  return "(" + e.map((t) => t.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class _ extends Ot {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "error", t, n), Object.defineProperty(this, M, { value: yn });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return Ye(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    const t = [];
    return e !== "sighash" && t.push("error"), t.push(this.name + Ze(e, this.inputs)), t.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(e) {
    if (_.isFragment(e))
      return e;
    if (typeof e == "string")
      return _.from(ge(e));
    if (e instanceof W) {
      const t = vt("error", e), n = oe(e);
      return Re(e), new _(k, t, n);
    }
    return new _(k, e.name, e.inputs ? e.inputs.map(S.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(e) {
    return e && e[M] === yn;
  }
}
class q extends Ot {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    u(this, "anonymous");
    Object.defineProperty(this, M, { value: mn }), w(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return Ye(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("event"), n.push(this.name + Ze(t, this.inputs)), t !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(t, n) {
    return n = (n || []).map((i) => S.from(i)), new q(k, t, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(t) {
    if (q.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return q.from(ge(t));
      } catch {
        d(!1, "invalid event fragment", "obj", t);
      }
    else if (t instanceof W) {
      const n = vt("event", t), s = oe(t, !0), i = !!ue(t, L(["anonymous"])).has("anonymous");
      return Re(t), new q(k, n, s, i);
    }
    return new q(k, t.name, t.inputs ? t.inputs.map((n) => S.from(n, !0)) : [], !!t.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(t) {
    return t && t[M] === mn;
  }
}
class ae extends Se {
  /**
   *  @private
   */
  constructor(t, n, s, i, a) {
    super(t, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    u(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    u(this, "gas");
    Object.defineProperty(this, M, { value: gn }), w(this, { payable: i, gas: a });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(t) {
    if (g(t != null && t !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), t === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [`constructor${Ze(t, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(t) {
    if (ae.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return ae.from(ge(t));
      } catch {
        d(!1, "invalid constuctor fragment", "obj", t);
      }
    else if (t instanceof W) {
      ue(t, L(["constructor"]));
      const n = oe(t), s = !!ue(t, _r).has("payable"), i = s0(t);
      return Re(t), new ae(k, "constructor", n, s, i);
    }
    return new ae(k, "constructor", t.inputs ? t.inputs.map(S.from) : [], !!t.payable, t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(t) {
    return t && t[M] === gn;
  }
}
class re extends Se {
  constructor(t, n, s) {
    super(t, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    u(this, "payable");
    Object.defineProperty(this, M, { value: wn }), w(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(t) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (t === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(t) {
    if (re.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return re.from(ge(t));
      } catch {
        d(!1, "invalid fallback fragment", "obj", t);
      }
    else if (t instanceof W) {
      const n = t.toString(), s = t.peekKeyword(L(["fallback", "receive"]));
      if (d(s, "type must be fallback or receive", "obj", n), t.popKeyword(L(["fallback", "receive"])) === "receive") {
        const c = oe(t);
        return d(c.length === 0, "receive cannot have arguments", "obj.inputs", c), ue(t, L(["payable"])), Re(t), new re(k, [], !0);
      }
      let a = oe(t);
      a.length ? d(a.length === 1 && a[0].type === "bytes", "invalid fallback inputs", "obj.inputs", a.map((c) => c.format("minimal")).join(", ")) : a = [S.from("bytes")];
      const o = r0(t);
      if (d(o === "nonpayable" || o === "payable", "fallback cannot be constants", "obj.stateMutability", o), ue(t, L(["returns"])).has("returns")) {
        const c = oe(t);
        d(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((f) => f.format("minimal")).join(", "));
      }
      return Re(t), new re(k, a, o === "payable");
    }
    if (t.type === "receive")
      return new re(k, [], !0);
    if (t.type === "fallback") {
      const n = [S.from("bytes")], s = t.stateMutability === "payable";
      return new re(k, n, s);
    }
    d(!1, "invalid fallback description", "obj", t);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(t) {
    return t && t[M] === wn;
  }
}
class j extends Ot {
  /**
   *  @private
   */
  constructor(t, n, s, i, a, o) {
    super(t, "function", n, i);
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
    Object.defineProperty(this, M, { value: Tn }), a = Object.freeze(a.slice()), w(this, { constant: s === "view" || s === "pure", gas: o, outputs: a, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return Ye(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("function"), n.push(this.name + Ze(t, this.inputs)), t !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(Ze(t, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(t, n) {
    return n = (n || []).map((i) => S.from(i)), new j(k, t, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(t) {
    if (j.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return j.from(ge(t));
      } catch {
        d(!1, "invalid function fragment", "obj", t);
      }
    else if (t instanceof W) {
      const s = vt("function", t), i = oe(t), a = r0(t);
      let o = [];
      ue(t, L(["returns"])).has("returns") && (o = oe(t));
      const c = s0(t);
      return Re(t), new j(k, s, a, i, o, c);
    }
    let n = t.stateMutability;
    return n == null && (n = "payable", typeof t.constant == "boolean" ? (n = "view", t.constant || (n = "payable", typeof t.payable == "boolean" && !t.payable && (n = "nonpayable"))) : typeof t.payable == "boolean" && !t.payable && (n = "nonpayable")), new j(k, t.name, n, t.inputs ? t.inputs.map(S.from) : [], t.outputs ? t.outputs.map(S.from) : [], t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(t) {
    return t && t[M] === Tn;
  }
}
class Pe extends Ot {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "struct", t, n), Object.defineProperty(this, M, { value: En });
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
  static from(e) {
    if (typeof e == "string")
      try {
        return Pe.from(ge(e));
      } catch {
        d(!1, "invalid struct fragment", "obj", e);
      }
    else if (e instanceof W) {
      const t = vt("struct", e), n = oe(e);
      return Re(e), new Pe(k, t, n);
    }
    return new Pe(k, e.name, e.inputs ? e.inputs.map(S.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(e) {
    return e && e[M] === En;
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
const Xr = new RegExp(/^bytes([0-9]*)$/), Yr = new RegExp(/^(u?int)([0-9]*)$/);
let Ut = null, xn = 1024;
function Zr(r, e, t, n) {
  let s = "missing revert data", i = null;
  const a = null;
  let o = null;
  if (t) {
    s = "execution reverted";
    const f = z(t);
    if (t = I(t), f.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (f.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (I(f.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], f.slice(4))[0], o = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (I(f.slice(0, 4)) === "0x4e487b71")
      try {
        const l = Number(n.decode(["uint256"], f.slice(4))[0]);
        o = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [l]
        }, i = `Panic due to ${X.get(l) || "UNKNOWN"}(${l})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: e.to ? fe(e.to) : null,
    data: e.data || "0x"
  };
  return e.from && (c.from = fe(e.from)), We(s, "CALL_EXCEPTION", {
    action: r,
    data: t,
    reason: i,
    transaction: c,
    invocation: a,
    revert: o
  });
}
var ye, Ce;
const Tt = class Tt {
  constructor() {
    x(this, ye);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(e) {
    const t = e.map((s) => A(this, ye, Ce).call(this, S.from(s)));
    return new ct(t, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(e, t) {
    Rn(t.length, e.length, "types/values length mismatch");
    const n = e.map((a) => A(this, ye, Ce).call(this, S.from(a))), s = new ct(n, "_"), i = new Lt();
    return s.encode(i, t), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(e, t, n) {
    const s = e.map((a) => A(this, ye, Ce).call(this, S.from(a)));
    return new ct(s, "_").decode(new Ft(t, n, xn));
  }
  static _setDefaultMaxInflation(e) {
    d(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), xn = e;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return Ut == null && (Ut = new Tt()), Ut;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(e, t, n) {
    return Zr(e, t, n, Tt.defaultAbiCoder());
  }
};
ye = new WeakSet(), Ce = function(e) {
  if (e.isArray())
    return new vr(A(this, ye, Ce).call(this, e.arrayChildren), e.arrayLength, e.name);
  if (e.isTuple())
    return new ct(e.components.map((n) => A(this, ye, Ce).call(this, n)), e.name);
  switch (e.baseType) {
    case "address":
      return new xr(e.name);
    case "bool":
      return new Or(e.name);
    case "string":
      return new Br(e.name);
    case "bytes":
      return new Ar(e.name);
    case "":
      return new Pr(e.name);
  }
  let t = e.type.match(Yr);
  if (t) {
    let n = parseInt(t[2] || "256");
    return d(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new Cr(n / 8, t[1] === "int", e.name);
  }
  if (t = e.type.match(Xr), t) {
    let n = parseInt(t[1]);
    return d(n !== 0 && n <= 32, "invalid bytes length", "param", e), new kr(n, e.name);
  }
  d(!1, "invalid type", "type", e.type);
};
let yt = Tt;
class Qr {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
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
    const s = e.name, i = e.format();
    w(this, {
      fragment: e,
      name: s,
      signature: i,
      topic: t,
      args: n
    });
  }
}
class qr {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
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
    const i = e.name, a = e.format();
    w(this, {
      fragment: e,
      name: i,
      args: n,
      signature: a,
      selector: t,
      value: s
    });
  }
}
class jr {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
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
    const s = e.name, i = e.format();
    w(this, {
      fragment: e,
      name: s,
      args: n,
      signature: i,
      selector: t
    });
  }
}
class Nn {
  /**
   *  @_ignore:
   */
  constructor(e) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    u(this, "hash");
    /**
     *  @_ignore:
     */
    u(this, "_isIndexed");
    w(this, { hash: e, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const vn = {
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
}, On = {
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
      let e = "unknown panic code";
      return r >= 0 && r <= 255 && vn[r.toString()] && (e = vn[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${e})`;
    }
  }
};
var Y, Z, Q, U, $e, dt, De, pt;
const xe = class xe {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(e) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    x(this, $e);
    // Find an event definition by any means necessary (unless it is ambiguous)
    x(this, De);
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
    x(this, Y, void 0);
    x(this, Z, void 0);
    x(this, Q, void 0);
    //    #structs: Map<string, StructFragment>;
    x(this, U, void 0);
    let t = [];
    typeof e == "string" ? t = JSON.parse(e) : t = e, T(this, Q, /* @__PURE__ */ new Map()), T(this, Y, /* @__PURE__ */ new Map()), T(this, Z, /* @__PURE__ */ new Map());
    const n = [];
    for (const a of t)
      try {
        n.push(Se.from(a));
      } catch (o) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, o.message);
      }
    w(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    T(this, U, this.getAbiCoder()), this.fragments.forEach((a, o) => {
      let c;
      switch (a.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          w(this, { deploy: a });
          return;
        case "fallback":
          a.inputs.length === 0 ? i = !0 : (d(!s || a.payable !== s.payable, "conflicting fallback fragments", `fragments[${o}]`, a), s = a, i = s.payable);
          return;
        case "function":
          c = b(this, Q);
          break;
        case "event":
          c = b(this, Z);
          break;
        case "error":
          c = b(this, Y);
          break;
        default:
          return;
      }
      const f = a.format();
      c.has(f) || c.set(f, a);
    }), this.deploy || w(this, {
      deploy: ae.from("constructor()")
    }), w(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(e) {
    const t = e ? "minimal" : "full";
    return this.fragments.map((s) => s.format(t));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const e = this.fragments.map((t) => t.format("json"));
    return JSON.stringify(e.map((t) => JSON.parse(t)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return yt.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(e) {
    const t = A(this, $e, dt).call(this, e, null, !1);
    return d(t, "no matching function", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(e) {
    return !!A(this, $e, dt).call(this, e, null, !1);
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
  getFunction(e, t) {
    return A(this, $e, dt).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(e) {
    const t = Array.from(b(this, Q).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(b(this, Q).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(e) {
    const t = A(this, De, pt).call(this, e, null, !1);
    return d(t, "no matching event", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(e) {
    return !!A(this, De, pt).call(this, e, null, !1);
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
  getEvent(e, t) {
    return A(this, De, pt).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(e) {
    const t = Array.from(b(this, Z).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(b(this, Z).get(s), n);
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
  getError(e, t) {
    if (ie(e)) {
      const s = e.toLowerCase();
      if (On[s])
        return _.from(On[s].signature);
      for (const i of b(this, Y).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, a] of b(this, Y))
        i.split(
          "("
          /* fix:) */
        )[0] === e && s.push(a);
      if (s.length === 0)
        return e === "Error" ? _.from("error Error(string)") : e === "Panic" ? _.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((a) => JSON.stringify(a.format())).join(", ");
        d(!1, `ambiguous error description (i.e. ${i})`, "name", e);
      }
      return s[0];
    }
    if (e = _.from(e).format(), e === "Error(string)")
      return _.from("error Error(string)");
    if (e === "Panic(uint256)")
      return _.from("error Panic(uint256)");
    const n = b(this, Y).get(e);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(e) {
    const t = Array.from(b(this, Y).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(b(this, Y).get(s), n);
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
  _decodeParams(e, t) {
    return b(this, U).decode(e, t);
  }
  _encodeParams(e, t) {
    return b(this, U).encode(e, t);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
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
  decodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      d(n, "unknown error", "fragment", e), e = n;
    }
    return d(Te(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, Te(t, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      d(n, "unknown error", "fragment", e), e = n;
    }
    return Ie([
      e.selector,
      this._encodeParams(e.inputs, t || [])
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
  decodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      d(n, "unknown function", "fragment", e), e = n;
    }
    return d(Te(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, Te(t, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      d(n, "unknown function", "fragment", e), e = n;
    }
    return Ie([
      e.selector,
      this._encodeParams(e.inputs, t || [])
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
  decodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const i = this.getFunction(e);
      d(i, "unknown function", "fragment", e), e = i;
    }
    let n = "invalid length for result data";
    const s = ee(t);
    if (s.length % 32 === 0)
      try {
        return b(this, U).decode(e.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    g(!1, n, "BAD_DATA", {
      value: I(s),
      info: { method: e.name, signature: e.format() }
    });
  }
  makeError(e, t) {
    const n = z(e, "data"), s = yt.getBuiltinCallException("call", t, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const o = I(n.slice(0, 4)), c = this.getError(o);
      if (c)
        try {
          const f = b(this, U).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: f
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const a = this.parseTransaction(t);
    return a && (s.invocation = {
      method: a.name,
      signature: a.signature,
      args: a.args
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
  encodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      d(n, "unknown function", "fragment", e), e = n;
    }
    return I(b(this, U).encode(e.outputs, t || []));
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
  encodeFilterTopics(e, t) {
    if (typeof e == "string") {
      const i = this.getEvent(e);
      d(i, "unknown event", "eventFragment", e), e = i;
    }
    g(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", { count: t.length, expectedCount: e.inputs.length });
    const n = [];
    e.anonymous || n.push(e.topicHash);
    const s = (i, a) => i.type === "string" ? Ye(a) : i.type === "bytes" ? ce(I(a)) : (i.type === "bool" && typeof a == "boolean" ? a = a ? "0x01" : "0x00" : i.type.match(/^u?int/) ? a = Bn(a) : i.type.match(/^bytes/) ? a = C0(a, 32) : i.type === "address" && b(this, U).encode(["address"], [a]), U0(I(a), 32));
    for (t.forEach((i, a) => {
      const o = e.inputs[a];
      if (!o.indexed) {
        d(i == null, "cannot filter non-indexed parameters; must be null", "contract." + o.name, i);
        return;
      }
      i == null ? n.push(null) : o.baseType === "array" || o.baseType === "tuple" ? d(!1, "filtering with tuples or arrays not supported", "contract." + o.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(o, c))) : n.push(s(o, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, t) {
    if (typeof e == "string") {
      const a = this.getEvent(e);
      d(a, "unknown event", "eventFragment", e), e = a;
    }
    const n = [], s = [], i = [];
    return e.anonymous || n.push(e.topicHash), d(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((a, o) => {
      const c = t[o];
      if (a.indexed)
        if (a.type === "string")
          n.push(Ye(c));
        else if (a.type === "bytes")
          n.push(ce(c));
        else {
          if (a.baseType === "tuple" || a.baseType === "array")
            throw new Error("not implemented");
          n.push(b(this, U).encode([a.type], [c]));
        }
      else
        s.push(a), i.push(c);
    }), {
      data: b(this, U).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, t, n) {
    if (typeof e == "string") {
      const m = this.getEvent(e);
      d(m, "unknown event", "eventFragment", e), e = m;
    }
    if (n != null && !e.anonymous) {
      const m = e.topicHash;
      d(ie(n[0], 32) && n[0].toLowerCase() === m, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], a = [];
    e.inputs.forEach((m, v) => {
      m.indexed ? m.type === "string" || m.type === "bytes" || m.baseType === "tuple" || m.baseType === "array" ? (s.push(S.from({ type: "bytes32", name: m.name })), a.push(!0)) : (s.push(m), a.push(!1)) : (i.push(m), a.push(!1));
    });
    const o = n != null ? b(this, U).decode(s, Ie(n)) : null, c = b(this, U).decode(i, t, !0), f = [], l = [];
    let p = 0, h = 0;
    return e.inputs.forEach((m, v) => {
      let O = null;
      if (m.indexed)
        if (o == null)
          O = new Nn(null);
        else if (a[v])
          O = new Nn(o[h++]);
        else
          try {
            O = o[h++];
          } catch (P) {
            O = P;
          }
      else
        try {
          O = c[p++];
        } catch (P) {
          O = P;
        }
      f.push(O), l.push(m.name || null);
    }), ht.fromItems(f, l);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(e) {
    const t = z(e.data, "tx.data"), n = le(e.value != null ? e.value : 0, "tx.value"), s = this.getFunction(I(t.slice(0, 4)));
    if (!s)
      return null;
    const i = b(this, U).decode(s.inputs, t.slice(4));
    return new qr(s, s.selector, i, n);
  }
  parseCallResult(e) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(e) {
    const t = this.getEvent(e.topics[0]);
    return !t || t.anonymous ? null : new Qr(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(e) {
    const t = I(e), n = this.getError(Te(t, 0, 4));
    if (!n)
      return null;
    const s = b(this, U).decode(n.inputs, Te(t, 4));
    return new jr(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(e) {
    return e instanceof xe ? e : typeof e == "string" ? new xe(JSON.parse(e)) : typeof e.formatJson == "function" ? new xe(e.formatJson()) : typeof e.format == "function" ? new xe(e.format("json")) : new xe(e);
  }
};
Y = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), U = new WeakMap(), $e = new WeakSet(), dt = function(e, t, n) {
  if (ie(e)) {
    const i = e.toLowerCase();
    for (const a of b(this, Q).values())
      if (i === a.selector)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of b(this, Q))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (t) {
      const a = t.length > 0 ? t[t.length - 1] : null;
      let o = t.length, c = !0;
      C.isTyped(a) && a.type === "overrides" && (c = !1, o--);
      for (let f = i.length - 1; f >= 0; f--) {
        const l = i[f].inputs.length;
        l !== o && (!c || l !== o - 1) && i.splice(f, 1);
      }
      for (let f = i.length - 1; f >= 0; f--) {
        const l = i[f].inputs;
        for (let p = 0; p < t.length; p++)
          if (C.isTyped(t[p])) {
            if (p >= l.length) {
              if (t[p].type === "overrides")
                continue;
              i.splice(f, 1);
              break;
            }
            if (t[p].type !== l[p].baseType) {
              i.splice(f, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && t && t.length !== i[0].inputs.length) {
      const a = t[t.length - 1];
      (a == null || Array.isArray(a) || typeof a != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      d(!1, `ambiguous function description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = b(this, Q).get(j.from(e).format());
  return s || null;
}, De = new WeakSet(), pt = function(e, t, n) {
  if (ie(e)) {
    const i = e.toLowerCase();
    for (const a of b(this, Z).values())
      if (i === a.topicHash)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of b(this, Z))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (t) {
      for (let a = i.length - 1; a >= 0; a--)
        i[a].inputs.length < t.length && i.splice(a, 1);
      for (let a = i.length - 1; a >= 0; a--) {
        const o = i[a].inputs;
        for (let c = 0; c < t.length; c++)
          if (C.isTyped(t[c]) && t[c].type !== o[c].baseType) {
            i.splice(a, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      d(!1, `ambiguous event description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = b(this, Z).get(q.from(e).format());
  return s || null;
};
let Qe = xe;
const i0 = BigInt(0);
function H(r) {
  return r == null ? null : r.toString();
}
function es(r) {
  const e = {};
  r.to && (e.to = r.to), r.from && (e.from = r.from), r.data && (e.data = I(r.data));
  const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of t)
    !(s in r) || r[s] == null || (e[s] = le(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (e[s] = be(r[s], `request.${s}`));
  return r.accessList && (e.accessList = Lr(r.accessList)), "blockTag" in r && (e.blockTag = r.blockTag), "enableCcipRead" in r && (e.enableCcipRead = !!r.enableCcipRead), "customData" in r && (e.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (e.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (e.kzg = r.kzg), "blobs" in r && r.blobs && (e.blobs = r.blobs.map((s) => S0(s) ? I(s) : Object.assign({}, s))), e;
}
class At {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
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
    this.provider = t;
    const n = Object.freeze(e.topics.slice());
    w(this, {
      transactionHash: e.transactionHash,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      removed: e.removed,
      address: e.address,
      data: e.data,
      topics: n,
      index: e.index,
      transactionIndex: e.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: e, blockHash: t, blockNumber: n, data: s, index: i, removed: a, topics: o, transactionHash: c, transactionIndex: f } = this;
    return {
      _type: "log",
      address: e,
      blockHash: t,
      blockNumber: n,
      data: s,
      index: i,
      removed: a,
      topics: o,
      transactionHash: c,
      transactionIndex: f
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    return g(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.transactionHash);
    return g(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const e = await this.provider.getTransactionReceipt(this.transactionHash);
    return g(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return ns(this);
  }
}
var nt;
class ts {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
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
    x(this, nt, void 0);
    T(this, nt, Object.freeze(e.logs.map((s) => new At(s, t))));
    let n = i0;
    e.effectiveGasPrice != null ? n = e.effectiveGasPrice : e.gasPrice != null && (n = e.gasPrice), w(this, {
      provider: t,
      to: e.to,
      from: e.from,
      contractAddress: e.contractAddress,
      hash: e.hash,
      index: e.index,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      logsBloom: e.logsBloom,
      gasUsed: e.gasUsed,
      cumulativeGasUsed: e.cumulativeGasUsed,
      blobGasUsed: e.blobGasUsed,
      gasPrice: n,
      blobGasPrice: e.blobGasPrice,
      type: e.type,
      //byzantium: tx.byzantium,
      status: e.status,
      root: e.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return b(this, nt);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: e,
      from: t,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: a,
      blockNumber: o,
      logsBloom: c,
      logs: f,
      //byzantium, 
      status: l,
      root: p
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: a,
      blockNumber: o,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: H(this.cumulativeGasUsed),
      from: t,
      gasPrice: H(this.gasPrice),
      blobGasUsed: H(this.blobGasUsed),
      blobGasPrice: H(this.blobGasPrice),
      gasUsed: H(this.gasUsed),
      hash: s,
      index: i,
      logs: f,
      logsBloom: c,
      root: p,
      status: l,
      to: e
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.length ? { value: this.logs[e++], done: !1 } : { value: void 0, done: !0 }
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
    const e = await this.provider.getBlock(this.blockHash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.hash);
    if (e == null)
      throw new Error("TODO");
    return e;
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
    return o0(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(e) {
    return g(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), a0(this, e);
  }
}
nt = new WeakMap();
var me;
const Qt = class Qt {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
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
    x(this, me, void 0);
    this.provider = t, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, T(this, me, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: e, blockHash: t, index: n, hash: s, type: i, to: a, from: o, nonce: c, data: f, signature: l, accessList: p, blobVersionedHashes: h } = this;
    return {
      _type: "TransactionResponse",
      accessList: p,
      blockNumber: e,
      blockHash: t,
      blobVersionedHashes: h,
      chainId: H(this.chainId),
      data: f,
      from: o,
      gasLimit: H(this.gasLimit),
      gasPrice: H(this.gasPrice),
      hash: s,
      maxFeePerGas: H(this.maxFeePerGas),
      maxPriorityFeePerGas: H(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: H(this.maxFeePerBlobGas),
      nonce: c,
      signature: l,
      to: a,
      index: n,
      type: i,
      value: H(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let e = this.blockNumber;
    if (e == null) {
      const n = await this.getTransaction();
      n && (e = n.blockNumber);
    }
    if (e == null)
      return null;
    const t = this.provider.getBlock(e);
    if (t == null)
      throw new Error("TODO");
    return t;
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
      const { tx: t, blockNumber: n } = await Ct({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return t == null || t.blockNumber == null ? 0 : n - t.blockNumber + 1;
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
  async wait(e, t) {
    const n = e ?? 1, s = t ?? 0;
    let i = b(this, me), a = -1, o = i === -1;
    const c = async () => {
      if (o)
        return null;
      const { blockNumber: h, nonce: m } = await Ct({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (m < this.nonce) {
        i = h;
        return;
      }
      if (o)
        return null;
      const v = await this.getTransaction();
      if (!(v && v.blockNumber != null))
        for (a === -1 && (a = i - 3, a < b(this, me) && (a = b(this, me))); a <= h; ) {
          if (o)
            return null;
          const O = await this.provider.getBlock(a, !0);
          if (O == null)
            return;
          for (const P of O)
            if (P === this.hash)
              return;
          for (let P = 0; P < O.length; P++) {
            const N = await O.getTransaction(P);
            if (N.from === this.from && N.nonce === this.nonce) {
              if (o)
                return null;
              const $ = await this.provider.getTransactionReceipt(N.hash);
              if ($ == null || h - $.blockNumber + 1 < n)
                return;
              let we = "replaced";
              N.data === this.data && N.to === this.to && N.value === this.value ? we = "repriced" : N.data === "0x" && N.from === N.to && N.value === i0 && (we = "cancelled"), g(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: we === "replaced" || we === "cancelled",
                reason: we,
                replacement: N.replaceableTransaction(i),
                hash: N.hash,
                receipt: $
              });
            }
          }
          a++;
        }
    }, f = (h) => {
      if (h == null || h.status !== 0)
        return h;
      g(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: h.to,
          from: h.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: h
      });
    }, l = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return f(l);
    if (l) {
      if (await l.confirmations() >= n)
        return f(l);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((h, m) => {
      const v = [], O = () => {
        v.forEach((N) => N());
      };
      if (v.push(() => {
        o = !0;
      }), s > 0) {
        const N = setTimeout(() => {
          O(), m(We("wait for transaction timeout", "TIMEOUT"));
        }, s);
        v.push(() => {
          clearTimeout(N);
        });
      }
      const P = async (N) => {
        if (await N.confirmations() >= n) {
          O();
          try {
            h(f(N));
          } catch ($) {
            m($);
          }
        }
      };
      if (v.push(() => {
        this.provider.off(this.hash, P);
      }), this.provider.on(this.hash, P), i >= 0) {
        const N = async () => {
          try {
            await c();
          } catch ($) {
            if (Ve($, "TRANSACTION_REPLACED")) {
              O(), m($);
              return;
            }
          }
          o || this.provider.once("block", N);
        };
        v.push(() => {
          this.provider.off("block", N);
        }), this.provider.once("block", N);
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
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), o0(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(e) {
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), g(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), a0(this, e);
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
  replaceableTransaction(e) {
    d(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
    const t = new Qt(this, this.provider);
    return T(t, me, e), t;
  }
};
me = new WeakMap();
let $t = Qt;
function a0(r, e) {
  return { orphan: "reorder-transaction", tx: r, other: e };
}
function o0(r) {
  return { orphan: "drop-transaction", tx: r };
}
function ns(r) {
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
class Jt extends At {
  /**
   * @_ignore:
   */
  constructor(t, n, s) {
    super(t, t.provider);
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
    const i = n.decodeEventLog(s, t.data, t.topics);
    w(this, { args: i, fragment: s, interface: n });
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
class c0 extends At {
  /**
   * @_ignore:
   */
  constructor(t, n) {
    super(t, t.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    u(this, "error");
    w(this, { error: n });
  }
}
var Ge;
class rs extends ts {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    x(this, Ge, void 0);
    T(this, Ge, t);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((t) => {
      const n = t.topics.length ? b(this, Ge).getEvent(t.topics[0]) : null;
      if (n)
        try {
          return new Jt(t, b(this, Ge), n);
        } catch (s) {
          return new c0(t, s);
        }
      return t;
    });
  }
}
Ge = new WeakMap();
var rt;
class Kt extends $t {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    x(this, rt, void 0);
    T(this, rt, t);
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
  async wait(t, n) {
    const s = await super.wait(t, n);
    return s == null ? null : new rs(b(this, rt), this.provider, s);
  }
}
rt = new WeakMap();
class f0 extends M0 {
  /**
   *  @_event:
   */
  constructor(t, n, s, i) {
    super(t, n, s);
    /**
     *  The log with no matching events.
     */
    u(this, "log");
    w(this, { log: i });
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
class ss extends f0 {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s, i) {
    super(e, t, n, new Jt(i, e.interface, s));
    const a = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
    w(this, { args: a, fragment: s });
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
const An = BigInt(0);
function u0(r) {
  return r && typeof r.call == "function";
}
function l0(r) {
  return r && typeof r.estimateGas == "function";
}
function kt(r) {
  return r && typeof r.resolveName == "function";
}
function b0(r) {
  return r && typeof r.sendTransaction == "function";
}
function d0(r) {
  if (r != null) {
    if (kt(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var st;
class is {
  constructor(e, t, n) {
    x(this, st, void 0);
    u(this, "fragment");
    if (w(this, { fragment: t }), t.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = Ue(e.runner, "resolveName"), i = kt(s) ? s : null;
    T(this, st, async function() {
      const a = await Promise.all(t.inputs.map((o, c) => n[c] == null ? null : o.walkAsync(n[c], (l, p) => l === "address" ? Array.isArray(p) ? Promise.all(p.map((h) => Xe(h, i))) : Xe(p, i) : p)));
      return e.interface.encodeFilterTopics(t, a);
    }());
  }
  getTopicFilter() {
    return b(this, st);
  }
}
st = new WeakMap();
function Ue(r, e) {
  return r == null ? null : typeof r[e] == "function" ? r : r.provider && typeof r.provider[e] == "function" ? r.provider : null;
}
function Ne(r) {
  return r == null ? null : r.provider || null;
}
async function Wt(r, e) {
  const t = C.dereference(r, "overrides");
  d(typeof t == "object", "invalid overrides parameter", "overrides", r);
  const n = es(t);
  return d(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), d(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function p0(r, e, t) {
  const n = Ue(r, "resolveName"), s = kt(n) ? n : null;
  return await Promise.all(e.map((i, a) => i.walkAsync(t[a], (o, c) => (c = C.dereference(c, o), o === "address" ? Xe(c, s) : c))));
}
function as(r) {
  const e = async function(a) {
    const o = await Wt(a, ["data"]);
    o.to = await r.getAddress(), o.from && (o.from = await Xe(o.from, d0(r.runner)));
    const c = r.interface, f = le(o.value || An, "overrides.value") === An, l = (o.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !l && !f && d(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", a), d(c.fallback || l, "cannot send data to receive-only contract", "overrides.data", o.data);
    const p = c.receive || c.fallback && c.fallback.payable;
    return d(p || f, "cannot send value to non-payable fallback", "overrides.value", o.value), d(c.fallback || l, "cannot send data to receive-only contract", "overrides.data", o.data), o;
  }, t = async function(a) {
    const o = Ue(r.runner, "call");
    g(u0(o), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await e(a);
    try {
      return await o.call(c);
    } catch (f) {
      throw Pn(f) && f.data ? r.interface.makeError(f.data, c) : f;
    }
  }, n = async function(a) {
    const o = r.runner;
    g(b0(o), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await o.sendTransaction(await e(a)), f = Ne(r.runner);
    return new Kt(r.interface, f, c);
  }, s = async function(a) {
    const o = Ue(r.runner, "estimateGas");
    return g(l0(o), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await o.estimateGas(await e(a));
  }, i = async (a) => await n(a);
  return w(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: e,
    send: n,
    staticCall: t
  }), i;
}
function os(r, e) {
  const t = function(...f) {
    const l = r.interface.getFunction(e, f);
    return g(l, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: f }
    }), l;
  }, n = async function(...f) {
    const l = t(...f);
    let p = {};
    if (l.inputs.length + 1 === f.length && (p = await Wt(f.pop()), p.from && (p.from = await Xe(p.from, d0(r.runner)))), l.inputs.length !== f.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const h = await p0(r.runner, l.inputs, f);
    return Object.assign({}, p, await Ct({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(l, h)
    }));
  }, s = async function(...f) {
    const l = await o(...f);
    return l.length === 1 ? l[0] : l;
  }, i = async function(...f) {
    const l = r.runner;
    g(b0(l), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const p = await l.sendTransaction(await n(...f)), h = Ne(r.runner);
    return new Kt(r.interface, h, p);
  }, a = async function(...f) {
    const l = Ue(r.runner, "estimateGas");
    return g(l0(l), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await l.estimateGas(await n(...f));
  }, o = async function(...f) {
    const l = Ue(r.runner, "call");
    g(u0(l), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const p = await n(...f);
    let h = "0x";
    try {
      h = await l.call(p);
    } catch (v) {
      throw Pn(v) && v.data ? r.interface.makeError(v.data, p) : v;
    }
    const m = t(...f);
    return r.interface.decodeFunctionResult(m, h);
  }, c = async (...f) => t(...f).constant ? await s(...f) : await i(...f);
  return w(c, {
    name: r.interface.getFunctionName(e),
    _contract: r,
    _key: e,
    getFragment: t,
    estimateGas: a,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: o
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const f = r.interface.getFunction(e);
      return g(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), f;
    }
  }), c;
}
function cs(r, e) {
  const t = function(...s) {
    const i = r.interface.getEvent(e, s);
    return g(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: s }
    }), i;
  }, n = function(...s) {
    return new is(r, t(...s), s);
  };
  return w(n, {
    name: r.interface.getEventName(e),
    _contract: r,
    _key: e,
    getFragment: t
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(e);
      return g(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), s;
    }
  }), n;
}
const mt = Symbol.for("_ethersInternal_contract"), h0 = /* @__PURE__ */ new WeakMap();
function fs(r, e) {
  h0.set(r[mt], e);
}
function D(r) {
  return h0.get(r[mt]);
}
function us(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function Xt(r, e) {
  let t, n = null;
  if (Array.isArray(e)) {
    const i = function(a) {
      if (ie(a, 32))
        return a;
      const o = r.interface.getEvent(a);
      return d(o, "unknown fragment", "name", a), o.topicHash;
    };
    t = e.map((a) => a == null ? null : Array.isArray(a) ? a.map(i) : i(a));
  } else
    e === "*" ? t = [null] : typeof e == "string" ? ie(e, 32) ? t = [e] : (n = r.interface.getEvent(e), d(n, "unknown fragment", "event", e), t = [n.topicHash]) : us(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [n.topicHash]) : d(!1, "unknown event name", "event", e);
  t = t.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const a = Array.from(new Set(i.map((o) => o.toLowerCase())).values());
      return a.length === 1 ? a[0] : (a.sort(), a);
    }
    return i.toLowerCase();
  });
  const s = t.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: t };
}
async function Je(r, e) {
  const { subs: t } = D(r);
  return t.get((await Xt(r, e)).tag) || null;
}
async function kn(r, e, t) {
  const n = Ne(r.runner);
  g(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e });
  const { fragment: s, tag: i, topics: a } = await Xt(r, t), { addr: o, subs: c } = D(r);
  let f = c.get(i);
  if (!f) {
    const p = { address: o || r, topics: a }, h = (P) => {
      let N = s;
      if (N == null)
        try {
          N = r.interface.getEvent(P.topics[0]);
        } catch {
        }
      if (N) {
        const $ = N, we = s ? r.interface.decodeEventLog(s, P.data, P.topics) : [];
        Gt(r, t, we, (y0) => new ss(r, y0, t, $, P));
      } else
        Gt(r, t, [], ($) => new f0(r, $, t, P));
    };
    let m = [];
    f = { tag: i, listeners: [], start: () => {
      m.length || m.push(n.on(p, h));
    }, stop: async () => {
      if (m.length == 0)
        return;
      let P = m;
      m = [], await Promise.all(P), n.off(p, h);
    } }, c.set(i, f);
  }
  return f;
}
let Dt = Promise.resolve();
async function ls(r, e, t, n) {
  await Dt;
  const s = await Je(r, e);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: a, once: o }) => {
    const c = Array.from(t);
    n && c.push(n(o ? null : a));
    try {
      a.call(r, ...c);
    } catch {
    }
    return !o;
  }), s.listeners.length === 0 && (s.stop(), D(r).subs.delete(s.tag)), i > 0;
}
async function Gt(r, e, t, n) {
  try {
    await Dt;
  } catch {
  }
  const s = ls(r, e, t, n);
  return Dt = s, await s;
}
const ft = ["then"];
var ys;
const Ke = class Ke {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(e, t, n, s) {
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
    u(this, ys);
    /**
     *  The fallback or receive function if any.
     */
    u(this, "fallback");
    d(typeof e == "string" || Wn(e), "invalid value for Contract target", "target", e), n == null && (n = null);
    const i = Qe.from(t);
    w(this, { target: e, runner: n, interface: i }), Object.defineProperty(this, mt, { value: {} });
    let a, o = null, c = null;
    if (s) {
      const p = Ne(n);
      c = new Kt(this.interface, p, s);
    }
    let f = /* @__PURE__ */ new Map();
    if (typeof e == "string")
      if (ie(e))
        o = e, a = Promise.resolve(e);
      else {
        const p = Ue(n, "resolveName");
        if (!kt(p))
          throw We("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        a = p.resolveName(e).then((h) => {
          if (h == null)
            throw We("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: e
            });
          return D(this).addr = h, h;
        });
      }
    else
      a = e.getAddress().then((p) => {
        if (p == null)
          throw new Error("TODO");
        return D(this).addr = p, p;
      });
    fs(this, { addrPromise: a, addr: o, deployTx: c, subs: f });
    const l = new Proxy({}, {
      get: (p, h, m) => {
        if (typeof h == "symbol" || ft.indexOf(h) >= 0)
          return Reflect.get(p, h, m);
        try {
          return this.getEvent(h);
        } catch (v) {
          if (!Ve(v, "INVALID_ARGUMENT") || v.argument !== "key")
            throw v;
        }
      },
      has: (p, h) => ft.indexOf(h) >= 0 ? Reflect.has(p, h) : Reflect.has(p, h) || this.interface.hasEvent(String(h))
    });
    return w(this, { filters: l }), w(this, {
      fallback: i.receive || i.fallback ? as(this) : null
    }), new Proxy(this, {
      get: (p, h, m) => {
        if (typeof h == "symbol" || h in p || ft.indexOf(h) >= 0)
          return Reflect.get(p, h, m);
        try {
          return p.getFunction(h);
        } catch (v) {
          if (!Ve(v, "INVALID_ARGUMENT") || v.argument !== "key")
            throw v;
        }
      },
      has: (p, h) => typeof h == "symbol" || h in p || ft.indexOf(h) >= 0 ? Reflect.has(p, h) : p.interface.hasFunction(h)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(e) {
    return new Ke(this.target, this.interface, e);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(e) {
    return new Ke(e, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await D(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const e = Ne(this.runner);
    g(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const t = await e.getCode(await this.getAddress());
    return t === "0x" ? null : t;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const e = this.deploymentTransaction();
    if (e)
      return await e.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Ne(this.runner);
    return g(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const a = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", a);
        } catch (o) {
          i(o);
        }
      };
      a();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return D(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(e) {
    return typeof e != "string" && (e = e.format()), os(this, e);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(e) {
    return typeof e != "string" && (e = e.format()), cs(this, e);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(e) {
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
  async queryFilter(e, t, n) {
    t == null && (t = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = D(this), a = s || await i, { fragment: o, topics: c } = await Xt(this, e), f = { address: a, topics: c, fromBlock: t, toBlock: n }, l = Ne(this.runner);
    return g(l, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await l.getLogs(f)).map((p) => {
      let h = o;
      if (h == null)
        try {
          h = this.interface.getEvent(p.topics[0]);
        } catch {
        }
      if (h)
        try {
          return new Jt(p, this.interface, h);
        } catch (m) {
          return new c0(p, m);
        }
      return new At(p, l);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(e, t) {
    const n = await kn(this, "on", e);
    return n.listeners.push({ listener: t, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(e, t) {
    const n = await kn(this, "once", e);
    return n.listeners.push({ listener: t, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(e, ...t) {
    return await Gt(this, e, t, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(e) {
    if (e) {
      const s = await Je(this, e);
      return s ? s.listeners.length : 0;
    }
    const { subs: t } = D(this);
    let n = 0;
    for (const { listeners: s } of t.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(e) {
    if (e) {
      const s = await Je(this, e);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: t } = D(this);
    let n = [];
    for (const { listeners: s } of t.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(e, t) {
    const n = await Je(this, e);
    if (!n)
      return this;
    if (t) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (t == null || n.listeners.length === 0) && (n.stop(), D(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(e) {
    if (e) {
      const t = await Je(this, e);
      if (!t)
        return this;
      t.stop(), D(this).subs.delete(t.tag);
    } else {
      const { subs: t } = D(this);
      for (const { tag: n, stop: s } of t.values())
        s(), t.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(e, t) {
    return await this.on(e, t);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(e, t) {
    return await this.off(e, t);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(e) {
    class t extends Ke {
      constructor(s, i = null) {
        super(s, e, i);
      }
    }
    return t;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(e, t, n) {
    return n == null && (n = null), new this(e, t, n);
  }
};
ys = mt;
let qe = Ke;
function bs() {
  return qe;
}
class ds extends bs() {
}
class Yt {
  /**
   *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
   *  optionally connected to %%runner%%.
   *
   *  The %%bytecode%% may be the ``bytecode`` property within the
   *  standard Solidity JSON output.
   */
  constructor(e, t, n) {
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
    const s = Qe.from(e);
    t instanceof Uint8Array || (typeof t == "object" && (t = t.object), t.startsWith("0x") || (t = "0x" + t)), t = I(z(t)), w(this, {
      bytecode: t,
      interface: s,
      runner: n || null
    });
  }
  attach(e) {
    return new qe(e, this.interface, this.runner);
  }
  /**
   *  Resolves to the transaction to deploy the contract, passing %%args%%
   *  into the constructor.
   */
  async getDeployTransaction(...e) {
    let t = {};
    const n = this.interface.deploy;
    if (n.inputs.length + 1 === e.length && (t = await Wt(e.pop())), n.inputs.length !== e.length)
      throw new Error("incorrect number of arguments to constructor");
    const s = await p0(this.runner, n.inputs, e), i = Ie([this.bytecode, this.interface.encodeDeploy(s)]);
    return Object.assign({}, t, { data: i });
  }
  /**
   *  Resolves to the Contract deployed by passing %%args%% into the
   *  constructor.
   *
   *  This will resolve to the Contract before it has been deployed to the
   *  network, so the [[BaseContract-waitForDeployment]] should be used before
   *  sending any transactions to it.
   */
  async deploy(...e) {
    const t = await this.getDeployTransaction(...e);
    g(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
      operation: "sendTransaction"
    });
    const n = await this.runner.sendTransaction(t), s = Er(n);
    return new qe(s, this.interface, this.runner, n);
  }
  /**
   *  Return a new **ContractFactory** with the same ABI and bytecode,
   *  but connected to %%runner%%.
   */
  connect(e) {
    return new Yt(this.interface, this.bytecode, e);
  }
  /**
   *  Create a new **ContractFactory** from the standard Solidity JSON output.
   */
  static fromSolidity(e, t) {
    d(e != null, "bad compiler output", "output", e), typeof e == "string" && (e = JSON.parse(e));
    const n = e.abi;
    let s = "";
    return e.bytecode ? s = e.bytecode : e.evm && e.evm.bytecode && (s = e.evm.bytecode), new this(n, s, t);
  }
}
const ut = [
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
        name: "oldContract",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newContract",
        type: "address"
      }
    ],
    name: "ContractUpgraded",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "uint32",
        name: "index",
        type: "uint32"
      }
    ],
    name: "GuardianSetAdded",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint64",
        name: "sequence",
        type: "uint64"
      },
      {
        indexed: !1,
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      },
      {
        indexed: !1,
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8"
      }
    ],
    name: "LogMessagePublished",
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
    stateMutability: "payable",
    type: "fallback"
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
    name: "evmChainId",
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
    name: "getCurrentGuardianSetIndex",
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
    inputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32"
      }
    ],
    name: "getGuardianSet",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "keys",
            type: "address[]"
          },
          {
            internalType: "uint32",
            name: "expirationTime",
            type: "uint32"
          }
        ],
        internalType: "struct Structs.GuardianSet",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getGuardianSetExpiry",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "governanceActionIsConsumed",
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
    name: "governanceChainId",
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
    name: "governanceContract",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isFork",
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
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address"
      }
    ],
    name: "isInitialized",
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
    name: "messageFee",
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
        name: "emitter",
        type: "address"
      }
    ],
    name: "nextSequence",
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
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVM",
        type: "bytes"
      }
    ],
    name: "parseAndVerifyVM",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "version",
            type: "uint8"
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "emitterChainId",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64"
          },
          {
            internalType: "uint8",
            name: "consistencyLevel",
            type: "uint8"
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes"
          },
          {
            internalType: "uint32",
            name: "guardianSetIndex",
            type: "uint32"
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "uint8",
                name: "guardianIndex",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Signature[]",
            name: "signatures",
            type: "tuple[]"
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32"
          }
        ],
        internalType: "struct Structs.VM",
        name: "vm",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedUpgrade",
        type: "bytes"
      }
    ],
    name: "parseContractUpgrade",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8"
          },
          {
            internalType: "uint16",
            name: "chain",
            type: "uint16"
          },
          {
            internalType: "address",
            name: "newContract",
            type: "address"
          }
        ],
        internalType: "struct GovernanceStructs.ContractUpgrade",
        name: "cu",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedUpgrade",
        type: "bytes"
      }
    ],
    name: "parseGuardianSetUpgrade",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8"
          },
          {
            internalType: "uint16",
            name: "chain",
            type: "uint16"
          },
          {
            components: [
              {
                internalType: "address[]",
                name: "keys",
                type: "address[]"
              },
              {
                internalType: "uint32",
                name: "expirationTime",
                type: "uint32"
              }
            ],
            internalType: "struct Structs.GuardianSet",
            name: "newGuardianSet",
            type: "tuple"
          },
          {
            internalType: "uint32",
            name: "newGuardianSetIndex",
            type: "uint32"
          }
        ],
        internalType: "struct GovernanceStructs.GuardianSetUpgrade",
        name: "gsu",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedRecoverChainId",
        type: "bytes"
      }
    ],
    name: "parseRecoverChainId",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "evmChainId",
            type: "uint256"
          },
          {
            internalType: "uint16",
            name: "newChainId",
            type: "uint16"
          }
        ],
        internalType: "struct GovernanceStructs.RecoverChainId",
        name: "rci",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSetMessageFee",
        type: "bytes"
      }
    ],
    name: "parseSetMessageFee",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8"
          },
          {
            internalType: "uint16",
            name: "chain",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "messageFee",
            type: "uint256"
          }
        ],
        internalType: "struct GovernanceStructs.SetMessageFee",
        name: "smf",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedTransferFees",
        type: "bytes"
      }
    ],
    name: "parseTransferFees",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8"
          },
          {
            internalType: "uint16",
            name: "chain",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "recipient",
            type: "bytes32"
          }
        ],
        internalType: "struct GovernanceStructs.TransferFees",
        name: "tf",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVM",
        type: "bytes"
      }
    ],
    name: "parseVM",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "version",
            type: "uint8"
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "emitterChainId",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64"
          },
          {
            internalType: "uint8",
            name: "consistencyLevel",
            type: "uint8"
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes"
          },
          {
            internalType: "uint32",
            name: "guardianSetIndex",
            type: "uint32"
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "uint8",
                name: "guardianIndex",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Signature[]",
            name: "signatures",
            type: "tuple[]"
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32"
          }
        ],
        internalType: "struct Structs.VM",
        name: "vm",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      },
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8"
      }
    ],
    name: "publishMessage",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numGuardians",
        type: "uint256"
      }
    ],
    name: "quorum",
    outputs: [
      {
        internalType: "uint256",
        name: "numSignaturesRequiredForQuorum",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_vm",
        type: "bytes"
      }
    ],
    name: "submitContractUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_vm",
        type: "bytes"
      }
    ],
    name: "submitNewGuardianSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_vm",
        type: "bytes"
      }
    ],
    name: "submitRecoverChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_vm",
        type: "bytes"
      }
    ],
    name: "submitSetMessageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_vm",
        type: "bytes"
      }
    ],
    name: "submitTransferFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "uint8",
            name: "guardianIndex",
            type: "uint8"
          }
        ],
        internalType: "struct Structs.Signature[]",
        name: "signatures",
        type: "tuple[]"
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "keys",
            type: "address[]"
          },
          {
            internalType: "uint32",
            name: "expirationTime",
            type: "uint32"
          }
        ],
        internalType: "struct Structs.GuardianSet",
        name: "guardianSet",
        type: "tuple"
      }
    ],
    name: "verifySignatures",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
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
            name: "version",
            type: "uint8"
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "emitterChainId",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32"
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64"
          },
          {
            internalType: "uint8",
            name: "consistencyLevel",
            type: "uint8"
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes"
          },
          {
            internalType: "uint32",
            name: "guardianSetIndex",
            type: "uint32"
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "uint8",
                name: "guardianIndex",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Signature[]",
            name: "signatures",
            type: "tuple[]"
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32"
          }
        ],
        internalType: "struct Structs.VM",
        name: "vm",
        type: "tuple"
      }
    ],
    name: "verifyVM",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
], In = "0x60808060405234610016576130a2908161001c8239f35b600080fdfe60806040526004361015610018575b366120d257612105565b60003560e01c80630319e59c146101e857806304ca84cf146101e3578063178149e7146101de5780631a90a219146101d95780631cfe7951146101d45780632c3c02a4146101cf5780634cf842b5146101ca5780634fdc60fa146101c5578063515f3247146101c05780635cb8cae2146101bb57806364d42b17146101b65780636606b4e0146101b15780638129fc1c146101ac578063875be02a146101a757806393df337e146101a25780639a8a05921461019d578063a0cce1b314610198578063a9e1189314610193578063b172b2221461018e578063b19a437e14610189578063c0fd8bde14610184578063cb4cfea81461017f578063d60b347f1461017a578063e039f22414610175578063eb8d3f1214610170578063f42bc6411461016b578063f8ce560a14610166578063f951975a146101615763fbe3c2cd0361000e576112d5565b61129d565b611277565b611203565b6111dd565b6111bc565b61117d565b611137565b6110d2565b610f96565b610f78565b610f50565b610d51565b610d2f565b610c78565b610b50565b610913565b6107c5565b6107a7565b6106d4565b61068e565b61063f565b6105fc565b61059b565b610577565b610559565b610476565b610409565b610363565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761021e57604052565b6101ed565b604081019081106001600160401b0382111761021e57604052565b60a081019081106001600160401b0382111761021e57604052565b606081019081106001600160401b0382111761021e57604052565b90601f801991011681019081106001600160401b0382111761021e57604052565b6040519061016082018281106001600160401b0382111761021e57604052565b604051906102c282610223565b565b6001600160401b03811161021e57601f01601f191660200190565b9291926102eb826102c4565b916102f96040519384610274565b829481845281830111610316578281602093846000960137010152565b600080fd5b9080601f8301121561031657816020610336933591016102df565b90565b602060031982011261031657600435906001600160401b038211610316576103369160040161031b565b346103165760a061037b61037636610339565b611dc4565b6080604051918051835260ff602082015116602084015261ffff60408201511660408401526060810151606084015201516080820152f35b906040810191805190604083528151809452606083019360208093019060005b8181106103ec5750505081015163ffffffff1691015290565b82516001600160a01b0316875295840195918401916001016103d3565b346103165761041f61041a36610339565b611b9f565b6040518091602082528051602083015260ff602082015116604083015261ffff604082015116606083015263ffffffff6080610469606084015160a08387015260c08601906103b3565b9201511660a08301520390f35b346103165761048436610339565b600854461461052757610513606061049e6105259361287e565b6104b06104aa8261185b565b906113b0565b61050a6104c060e0830151611e9d565b916104d163436f7265845114611459565b61050461014060408501926104e8468551146115ab565b015160005260056020526040600020600160ff19825416179055565b51612ca6565b015161ffff1690565b61ffff1661ffff196000541617600055565b005b60405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b6044820152606490fd5b34610316576000366003190112610316576020600754604051908152f35b3461031657600036600319011261031657602063ffffffff60035416604051908152f35b346103165760203660031901126103165760206105c8600435600052600560205260ff6040600020541690565b6040519015158152f35b600435906001600160a01b038216820361031657565b35906001600160a01b038216820361031657565b34610316576020366003190112610316576001600160a01b0361061d6105d2565b16600052600460205260206001600160401b0360406000205416604051908152f35b3461031657608061065761065236610339565b611a0c565b604051908051825260ff602082015116602083015261ffff6040820151166040830152606060018060a01b03910151166060820152f35b346103165760806106a66106a136610339565b611ce1565b6060604051918051835260ff602082015116602084015261ffff604082015116604084015201516060820152f35b34610316576106e236610339565b60085446036107735761076e60606106fc6105259361287e565b6107086104aa8261185b565b61076061014061071b60e0840151611a0c565b9261072c63436f72658551146113e0565b6104e861073e604086015161ffff1690565b61ffff61075861075160005461ffff1690565b61ffff1690565b91161461141d565b01516001600160a01b031690565b61163e565b60405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b6044820152606490fd5b34610316576000366003190112610316576020600854604051908152f35b34610316576105256108d96107e16107dc36610339565b61287e565b6107ed6104aa8261185b565b6108cf6107fd60e0830151611b9f565b61080d63436f7265825114611459565b61084b61081f604083015161ffff1690565b61ffff61083261075160005461ffff1690565b911690811490816108f8575b81156108ef575b50611496565b6108a9610140608060608401936108668551515115156114d2565b01946104e8610879875163ffffffff1690565b63ffffffff6108a161089861089360035463ffffffff1690565b611534565b63ffffffff1690565b911614611549565b6108c06108bb60035463ffffffff1690565b612b24565b51825163ffffffff1690612c1b565b5163ffffffff1690565b63ffffffff1663ffffffff196003541617600355565b90501538610845565b905061090d61090960085446141590565b1590565b9061083e565b34610316576000806003193601126109cc577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b03168082526006602052604082205460ff16610991576001600160a01b03166000908152600660205260409020805460ff1916600117905561098e611f42565b80f35b60405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606490fd5b80fd5b6044359060ff8216820361031657565b359060ff8216820361031657565b6004359063ffffffff8216820361031657565b359063ffffffff8216820361031657565b359061ffff8216820361031657565b35906001600160401b038216820361031657565b6001600160401b03811161021e5760051b60200190565b81601f8201121561031657803590610a6282610a34565b92604092610a7284519586610274565b808552602091828087019260071b85010193818511610316578301915b848310610a9f5750505050505090565b60808383031261031657836080918751610ab881610203565b853581528286013583820152610acf8987016109df565b898201526060610ae08188016109df565b90820152815201920191610a8f565b60005b838110610b025750506000910152565b8181015183820152602001610af2565b90602091610b2b81518092818552858086019101610aef565b601f01601f1916010190565b6040906103369392151581528160208201520190610b12565b346103165760031960203682011261031657600435906001600160401b03908183116103165761016090833603011261031657610b8b610295565b90610b98836004016109df565b8252610ba660248401610a00565b6020830152610bb760448401610a00565b6040830152610bc860648401610a11565b606083015260848301356080830152610be360a48401610a20565b60a0830152610bf460c484016109df565b60c083015260e483013581811161031657610c15906004369186010161031b565b60e0830152610c276101048401610a00565b61010083015261012483013590811161031657610c6492610c516101449260043691840101610a4b565b61012084015201356101408201526123f9565b90610c7460405192839283610b37565b0390f35b3461031657610ce2610140610c8f6107dc36610339565b610c9b6104aa8261185b565b6104e8610cab60e0830151611dc4565b610cbb63436f7265825114611459565b604081015161ffff1690600095869586958695869561ffff610832610751895461ffff1690565b6080810151606090610d0c90610d009081906001600160a01b031681565b6001600160a01b031690565b91015190828215610d26575bf115610d215780f35b61159f565b506108fc610d18565b3461031657600036600319011261031657602061ffff60005416604051908152f35b3461031657600319606036820112610316576001600160401b0360243581811161031657610d83903690600401610a4b565b604435928284116103165760409084360301126103165760405191610da783610223565b8360040135908111610316578301923660238501121561031657600484013593610dd085610a34565b90610dde6040519283610274565b85825260209560248784019160051b8301019136831161031657602401905b828210610e26575050506024610c649592610e1a92865201610a00565b9083015260043561268d565b878091610e32846105e8565b815201910190610dfd565b90815180825260208080930193019160005b828110610e5d575050505090565b835180518652808301518684015260408082015160ff90811691880191909152606091820151169086015260809094019392810192600101610e4f565b805160ff1682529060208281015163ffffffff169082015260408281015163ffffffff169082015260608281015161ffff169082015260808201516080820152610ef460a083015160a08301906001600160401b03169052565b60c08281015160ff1690820152610f42610f1d60e08401516101608060e0860152840190610b12565b6101008481015163ffffffff1690840152610120808501519084830390850152610e3d565b916101408091015191015290565b3461031657610c74610f646107dc36610339565b604051918291602083526020830190610e9a565b34610316576000366003190112610316576020600154604051908152f35b606036600319011261031657610faa6109ed565b6001600160401b0360243581811161031657610fca90369060040161031b565b91610fd36109cf565b91600754340361107457336000526004602052806040600020541692600184019482861161106f57610c74957f6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b293336000526004602052604060002091166001600160401b031982541617905561105260405192839233968885611f06565b0390a26040516001600160401b0390911681529081906020820190565b61151e565b60405162461bcd60e51b815260206004820152600b60248201526a696e76616c69642066656560a81b6044820152606490fd5b6110bd6103369492606083526060830190610e9a565b92151560208201526040818403910152610b12565b34610316576020366003190112610316576001600160401b03600435818111610316573660238201121561031657806004013591821161031657366024838301011161031657610c7491602461112892016121c5565b604093919351938493846110a7565b3461031657608061114f61114a36610339565b611e9d565b61ffff6060604051928051845260ff6020820151166020850152604081015160408501520151166060820152f35b34610316576020366003190112610316576001600160a01b0361119e6105d2565b166000526006602052602060ff604060002054166040519015158152f35b34610316576000366003190112610316576020600854604051904614158152f35b3461031657600036600319011261031657602060035463ffffffff60405191831c168152f35b346103165760606112166107dc36610339565b6112226104aa8261185b565b61126561014061123560e0840151611ce1565b9261124663436f72658551146113e0565b61ffff806040860151169060005416148061126c575b6104e89061141d565b0151600755005b50600854461461125c565b34610316576020366003190112610316576020611295600435612ac1565b604051908152f35b3461031657602036600319011261031657610c746112c16112bc6109ed565b611314565b6040519182916020835260208301906103b3565b3461031657600036600319011261031657602061ffff60005460101c16604051908152f35b6040519061130782610223565b6000602083606081520152565b63ffffffff906113226112fa565b50166000526020600281526040600020906040519161134083610223565b6040518083835491828152019083600052846000209060005b8181106113935750505061033693928261137a611387946001940382610274565b8652015463ffffffff1690565b63ffffffff1690830152565b82546001600160a01b031684529286019260019283019201611359565b156113b85750565b60405162461bcd60e51b8152602060048201529081906113dc906024830190610b12565b0390fd5b156113e757565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c6964204d6f64756c6560901b6044820152606490fd5b1561142457565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21021b430b4b760991b6044820152606490fd5b1561146057565b60405162461bcd60e51b815260206004820152600e60248201526d696e76616c6964204d6f64756c6560901b6044820152606490fd5b1561149d57565b60405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21021b430b4b760991b6044820152606490fd5b156114d957565b60405162461bcd60e51b815260206004820152601960248201527f6e657720677561726469616e2073657420697320656d707479000000000000006044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b90600163ffffffff8093160191821161106f57565b1561155057565b60405162461bcd60e51b815260206004820152602160248201527f696e646578206d75737420696e63726561736520696e207374657073206f66206044820152603160f81b6064820152608490fd5b6040513d6000823e3d90fd5b156115b257565b60405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b6044820152606490fd5b60405190602082018281106001600160401b0382111761021e5760405260008252565b3d15611639573d9061161f826102c4565b9161162d6040519384610274565b82523d6000602084013e565b606090565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc908154813b1561170d577f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a499060018060a01b039081841694856bffffffffffffffffffffffff60a01b8316179055611707604051600080968192897fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a263204a7f0760e21b6020820190815260048252906116fb81610223565b51915af46104aa61160e565b169180a3565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b6040519061177582610259565b6022825261195d60f21b6040837f6e6f74207369676e65642062792063757272656e7420677561726469616e207360208201520152565b604051906117b982610223565b60168252753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020830152565b604051906117eb82610223565b601982527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020830152565b6040519061182482610259565b6022825261195960f21b6040837f676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d60208201520152565b611864816123f9565b9015611924575061010081015163ffffffff1663ffffffff61188e61089860035463ffffffff1690565b91160361191857606081015161ffff1661ffff6118b561075160005461ffff9060101c1690565b91160361190c57608081015160015403611900576101406118e6910151600052600560205260ff6040600020541690565b6118f5576001906103366115eb565b600090610336611817565b506000906103366117de565b506000906103366117ac565b50600090610336611768565b600092909150565b6040519061193982610203565b60006060838281528260208201528260408201520152565b906020820180921161106f57565b906001820180921161106f57565b906002820180921161106f57565b906004820180921161106f57565b906014820180921161106f57565b906008820180921161106f57565b90601f820180921161106f57565b9190820180921161106f57565b156119c757565b60405162461bcd60e51b815260206004820152601760248201527f696e76616c696420436f6e7472616374557067726164650000000000000000006044820152606490fd5b90611a1561192c565b91611a1f81613030565b8352611a3e600160ff611a3184612e51565b16806020870152146119c0565b61ffff611a4a82612ee8565b1660408401526043815110611a79576043818101516001600160a01b0316606085015290516102c291146119c0565b60405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606490fd5b60405190611ac38261023e565b6000608083828152826020820152826040820152611adf6112fa565b60608201520152565b15611aef57565b60405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e536574557067726164650000000000006044820152606490fd5b90611b3e82610a34565b611b4b6040519182610274565b8281528092611b5c601f1991610a34565b0190602036910137565b600019811461106f5760010190565b8051821015611b895760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b90611ba8611ab6565b91611bb281613030565b8352611bdb600260ff611bd4611bc785612e51565b60ff166020880181905290565b1614611ae8565b611bf2611be782612ee8565b61ffff166040850152565b611c0b611bfe82612fac565b63ffffffff166080850152565b611c1481612ebc565b60ff6028911691611c2483611b34565b92611c2d6102b5565b93845260006020850152606086019384526000935b818510611c575750506102c292505114611ae8565b909192611c8e81611c89611c6e611c949488612df5565b611c7a89875151611b75565b6001600160a01b039091169052565b611989565b94611b66565b93929190611c42565b15611ca457565b60405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b6044820152606490fd5b90611cea61192c565b91611cf481613030565b8352611d13600360ff611d0684612e51565b1680602087015214611c9d565b61ffff611d1f82612ee8565b1660408401526043815110611d4457604381816102c293015160608601525114611c9d565b60405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606490fd5b15611d8857565b60405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b6044820152606490fd5b9060405191611dd28361023e565b60008352602083019060008252604084019060008252606085019160008352611e20600460808801956000875288611e0986613030565b905260ff611e1686612e51565b1680915214611d81565b61ffff611e2c83612ee8565b1690526043815110611d44576102c29260639260438301519052611e4f82613040565b90525114611d81565b15611e5f57565b60405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a5908149958dbdd995c90da185a5b925960521b6044820152606490fd5b90611ea661192c565b91611eb081613030565b8352611ecf600560ff611ec284612e51565b1680602087015214611e58565b6041815110611d445760438160416102c29301516040860152611eff611ef482612f34565b61ffff166060870152565b5114611e58565b92611f3b9063ffffffff6060946001600160401b0360ff95999899168752166020860152608060408601526080850190610b12565b9416910152565b60085415611f4c57565b61ffff611f5c60005461ffff1690565b1660028103611f7057506102c26001612ca6565b60048103611f8357506102c26038612ca6565b60058103611f9657506102c26089612ca6565b60068103611faa57506102c261a86a612ca6565b60078103611fbe57506102c261a516612ca6565b60098103611fd457506102c2634e454152612ca6565b600a8103611fe757506102c260fa612ca6565b600b8103611ffb57506102c26102ae612ca6565b600c810361200f57506102c2610313612ca6565b600d810361202357506102c2612019612ca6565b600e810361203757506102c261a4ec612ca6565b6010810361204b57506102c2610504612ca6565b6011810361206157506102c2630e9ac0d6612ca6565b6017810361207557506102c261a4b1612ca6565b6018810361208857506102c2600a612ca6565b601903612099576102c26064612ca6565b60405162461bcd60e51b81526020600482015260116024820152702ab735b737bbb71031b430b4b71034b21760791b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a1d5b9cdd5c1c1bdc9d195960aa1b6044820152606490fd5b60405162461bcd60e51b815260206004820152602c60248201527f74686520576f726d686f6c6520636f6e747261637420646f6573206e6f74206160448201526b63636570742061737365747360a01b6064820152608490fd5b6040519061016082018281106001600160401b0382111761021e57604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e08201528261010082015260606101208201520152565b6107dc906121dd926121d561215f565b5036916102df565b906121e782612325565b9091565b94929060339796949263ffffffff60e01b809260e01b16875260e01b16600486015261ffff60f01b9060f01b166008850152600a8401526001600160401b0360c01b9060c01b16602a83015260ff60f81b9060f81b1660328201526122598251809360208685019101610aef565b010190565b6040519061226b82610223565b601a82527f766d2e6861736820646f65736e2774206d6174636820626f64790000000000006020830152565b604051906122a482610223565b60148252731a5b9d985b1a590819dd585c991a585b881cd95d60621b6020830152565b604051906122d482610223565b601882527f677561726469616e2073657420686173206578706972656400000000000000006020830152565b6040519061230d82610223565b60098252686e6f2071756f72756d60b81b6020830152565b610100810161233b6112bc825163ffffffff1690565b90815151156123eb575163ffffffff1661235d61089860035463ffffffff1690565b63ffffffff809216141590816123ce575b506123c1576101208201805151612386835151612ac1565b116123b35761014061239c93015190519061268d565b90156123ae57506001906103366115eb565b600091565b505050600090610336612300565b50506000906103366122c7565b90506123e1602083015163ffffffff1690565b429116103861236e565b505050600090610336612297565b6101008101906124106112bc835163ffffffff1690565b90612422602082015163ffffffff1690565b604082015163ffffffff169061243d606084015161ffff1690565b9161247a608085015161245a60a08701516001600160401b031690565b60c087015160ff169060e0880151926040519788966020880198896121eb565b039161248e601f1993848101835282610274565b519020906124b860405191826124ac60208201958660209181520190565b03908101835282610274565b5190209261014082019384510361255e578251511561254f575163ffffffff166124ea61089860035463ffffffff1690565b63ffffffff80921614159081612532575b506125245761012001805151612512835151612ac1565b116123b35761239c925190519061268d565b5050506000906103366122c7565b9050612545602084015163ffffffff1690565b42911610386124fb565b50505050600090610336612297565b5050505060009061033661225e565b1561257457565b60405162461bcd60e51b815260206004820152601f60248201527f65637265636f766572206661696c65642077697468207369676e6174757265006044820152606490fd5b156125c057565b60405162461bcd60e51b815260206004820152602360248201527f7369676e617475726520696e6469636573206d75737420626520617363656e64604482015262696e6760e81b6064820152608490fd5b1561261857565b60405162461bcd60e51b815260206004820152601c60248201527f677561726469616e20696e646578206f7574206f6620626f756e6473000000006044820152606490fd5b6040519061266a82610223565b60148252731593481cda59db985d1d5c99481a5b9d985b1a5960621b6020830152565b825151919260009291835b85518110156127b2576126ab8187611b75565b51604060006126bd8284015160ff1690565b8351602080860151945188815260ff93909316838201526040830191909152606082019390935281805260809060015afa15610d215760005160609190612723906001600160a01b03169761271389151561256d565b8415908115612795575b506125b9565b0194612771610d00612764612739895160ff1690565b986127488960ff8c1610612611565b61275e6127588951925160ff1690565b60ff1690565b90611b75565b516001600160a01b031690565b036127845761277f90611b66565b612698565b50505050505060009061033661265d565b90506127a48484015160ff1690565b60ff9182169116113861271d565b5050505050506001906103366115eb565b156127ca57565b60405162461bcd60e51b815260206004820152601760248201527f564d2076657273696f6e20696e636f6d70617469626c650000000000000000006044820152606490fd5b9061281982610a34565b6128266040519182610274565b8281528092612837601f1991610a34565b019060005b82811061284857505050565b60209061285361192c565b8282850101520161283c565b60ff601b9116019060ff821161106f57565b9190820391821161106f57565b9061288761215f565b9161289b61289482612e9c565b60ff168452565b6128b4600160ff6128ad865160ff1690565b16146127c3565b6128ce6128c082612f60565b63ffffffff16610100850152565b6128da61275882612eac565b6006906128e68161280f565b9061012086019182526000915b818310612a205750505090612a086129ec6129ca6129b661299961297f87612929612922612a199a8a51612871565b828a612d69565b602081519101206040516129578161294960208201948560209181520190565b03601f198101835282610274565b5190206101408c015261297a61296d828a612fbc565b63ffffffff1660208d0152565b61197b565b61297a61298c8289612fbc565b63ffffffff1660408c0152565b6129b16129a68288612f44565b61ffff1660608b0152565b61196d565b6129c08186613050565b6080890152611951565b6129e76129d78286612fd8565b6001600160401b031660a0890152565b611997565b612a036129f98285612ecc565b60ff1660c0880152565b61195f565b612a13818351612871565b91612d69565b60e0830152565b909192612ab4612a92612a73612a5784612a03612a40612aba978c612ecc565b6060612a4d8c8b51611b75565b51019060ff169052565b612a61818a613050565b612a6c898851611b75565b5152611951565b612a7d8189613050565b6020612a8a898851611b75565b510152611951565b612a03612aa7612aa2838a612ecc565b61285f565b6040612a4d898851611b75565b93611b66565b91906128f3565b610100811015612aea578060011b908082046002149015171561106f576003610336910461195f565b60405162461bcd60e51b8152602060048201526012602482015271746f6f206d616e7920677561726469616e7360701b6044820152606490fd5b63ffffffff62015180814216019080821161106f576102c29216600052600260205260016040600020019063ffffffff1663ffffffff19825416179055565b9080519081516001600160401b03811161021e5768010000000000000000811161021e578354818555808210612bf2575b506020809301612ba985600052602060002090565b60005b838110612bd7575050505001516001909101805463ffffffff191663ffffffff909216919091179055565b82516001600160a01b03168282015591850191600101612bac565b6000858152826020822092830192015b828110612c10575050612b94565b818155600101612c02565b9081515160005b818110612c485750509063ffffffff6102c2921660005260026020526040600020612b63565b83516001600160a01b0390612c5e908390611b75565b511615612c7357612c6e90611b66565b612c22565b60405162461bcd60e51b815260206004820152600b60248201526a496e76616c6964206b657960a81b6044820152606490fd5b468103612cb257600855565b60405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b6044820152606490fd5b15612cf357565b60405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606490fd5b15612d3057565b60405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606490fd5b91612d7e81612d77816119a5565b1015612cec565b612d948351612d8d83856119b3565b1115612d29565b80612dad57505050604051600081526020810160405290565b60405192601f821692831560051b80858701019484860193010101905b808410612de25750508252601f01601f191660405290565b9092835181526020809101930190612dca565b908151601482019081831161106f5710612e1457016020015160601c90565b60405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606490fd5b6021815110612e61576021015190565b60405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606490fd5b6001815110612e61576001015190565b6006815110612e61576006015190565b6028815110612e61576028015190565b908151600182019081831161106f5710612e6157016001015190565b6023815110612ef8576023015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606490fd5b6043815110612ef8576043015190565b908151600282019081831161106f5710612ef857016002015190565b6005815110612f70576005015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b6044820152606490fd5b6027815110612f70576027015190565b908151600482019081831161106f5710612f7057016004015190565b908151600882019081831161106f5710612ff457016008015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606490fd5b6020815110611a79576020015190565b6063815110611a79576063015190565b908151602082019081831161106f5710611a795701602001519056fea2646970667358221220e01f3fc19a7b6f650a08aafb55409b8aa16f0ebf4a5804ec4ce7df76358d349364736f6c63430008130033", ps = (r) => r.length > 1;
class je extends Yt {
  constructor(...e) {
    ps(e) ? super(...e) : super(ut, In, e[0]);
  }
  getDeployTransaction(e) {
    return super.getDeployTransaction(e || {});
  }
  deploy(e) {
    return super.deploy(e || {});
  }
  connect(e) {
    return super.connect(e);
  }
  static createInterface() {
    return new Qe(ut);
  }
  static connect(e, t) {
    return new ds(e, ut, t);
  }
}
u(je, "bytecode", In), u(je, "abi", ut);
const hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Implementation__factory: je
}, Symbol.toStringTag, { value: "Module" }));
w0(N0, "WormholeCore", Et);
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EvmWormholeCore: Et,
  ethers_contracts: hs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Et as E,
  I0 as a,
  xs as i
};
