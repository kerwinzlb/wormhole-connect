var Me = Object.defineProperty;
var _e = (a, e, t) => e in a ? Me(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var o = (a, e, t) => (_e(a, typeof e != "symbol" ? e + "" : e, t), t), F6 = (a, e, t) => {
  if (!e.has(a))
    throw TypeError("Cannot " + t);
};
var u = (a, e, t) => (F6(a, e, "read from private field"), t ? t.call(a) : e.get(a)), x = (a, e, t) => {
  if (e.has(a))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(a) : e.set(a, t);
}, T = (a, e, t, n) => (F6(a, e, "write to private field"), n ? n.call(a, t) : e.set(a, t), t);
var f1 = (a, e, t, n) => ({
  set _(r) {
    T(a, e, r, t);
  },
  get _() {
    return u(a, e, n);
  }
}), N = (a, e, t) => (F6(a, e, "access private method"), t);
import { a as D1 } from "./index-CqK-5vzL.mjs";
import { c3 as W1, cD as b1, bW as Z0, cE as Fe, as as Le, ax as E6, cF as $e, cw as m6, cj as V1 } from "./index-DV1w5RNX.mjs";
import { E as L0, d as De, a as Q, u as c1, e as c6, b as s0, c as H1, _ as G1 } from "./evm-CAEWKa29.mjs";
import { r as z1 } from "./chain-tk4BDPwT.mjs";
class Z6 {
  constructor(e, t, n, r) {
    o(this, "network");
    o(this, "chain");
    o(this, "provider");
    o(this, "contracts");
    o(this, "tokenBridge");
    o(this, "tokenBridgeAddress");
    o(this, "chainId");
    this.network = e, this.chain = t, this.provider = n, this.contracts = r, this.chainId = W1.get(e, t);
    const i = this.contracts.tokenBridge;
    if (!i)
      throw new Error(`Wormhole Token Bridge contract for domain ${t} not found`);
    this.tokenBridgeAddress = i, this.tokenBridge = a6.connect(this.tokenBridgeAddress, n);
  }
  static async fromRpc(e, t) {
    const [n, r] = await L0.chainFromRpc(e), i = t[r];
    if (i.network !== n)
      throw new Error(`Network mismatch: ${i.network} != ${n}`);
    return new Z6(n, r, e, i.contracts);
  }
  async isWrappedAsset(e) {
    return await this.tokenBridge.isWrappedAsset(e.toString());
  }
  async getOriginalAsset(e) {
    if (!await this.isWrappedAsset(e))
      throw b1(e.toString());
    const t = L0.getTokenImplementation(this.provider, e.toString()), [n, r] = await Promise.all([
      t.chainId().then(Number).then(Z0).then(Fe),
      t.nativeContract().then((i) => new Le(i))
    ]);
    return { chain: n, address: r };
  }
  async hasWrappedAsset(e) {
    try {
      return await this.getWrappedAsset(e), !0;
    } catch {
    }
    return !1;
  }
  async getWrappedAsset(e) {
    if (E6(e.address))
      throw new Error("native asset cannot be a wrapped asset");
    const t = await this.tokenBridge.wrappedAsset(Z0(e.chain), e.address.toUniversalAddress().toString());
    if (t === De)
      throw b1(e.address.toUniversalAddress().toString());
    return new Q(t);
  }
  async isTransferCompleted(e) {
    return this.tokenBridge.isTransferCompleted($e(e.hash));
  }
  async *createAttestation(e) {
    yield this.createUnsignedTx(await this.tokenBridge.attestToken.populateTransaction(e.toString(), 0), "TokenBridge.createAttestation");
  }
  async *submitAttestation(e) {
    const t = await this.hasWrappedAsset({
      ...e.payload.token
    }) ? "updateWrapped" : "createWrapped";
    yield this.createUnsignedTx(await this.tokenBridge[t].populateTransaction(m6(e)), "TokenBridge." + t);
  }
  async *transfer(e, t, n, r, i) {
    const s = new Q(e).toString(), f = Z0(t.chain), b = t.address.toUniversalAddress().toUint8Array();
    if (E6(n)) {
      const c = await (i === void 0 ? this.tokenBridge.wrapAndTransferETH.populateTransaction(f, b, c1, c6, { value: r }) : this.tokenBridge.wrapAndTransferETHWithPayload.populateTransaction(f, b, c6, i, { value: r }));
      yield this.createUnsignedTx(s0(c, s), "TokenBridge.wrapAndTransferETH" + (i === void 0 ? "" : "WithPayload"));
    } else {
      const c = new Q(n).toString(), d = L0.getTokenImplementation(this.provider, c);
      if (await d.allowance(s, this.tokenBridge.target) < r) {
        const E = await d.approve.populateTransaction(this.tokenBridge.target, r);
        yield this.createUnsignedTx(s0(E, s), "TokenBridge.Approve");
      }
      const y = [
        c,
        r,
        f,
        b
      ], m = await (i === void 0 ? this.tokenBridge.transferTokens.populateTransaction(...y, c1, c6) : this.tokenBridge.transferTokensWithPayload.populateTransaction(...y, c6, i));
      yield this.createUnsignedTx(s0(m, s), "TokenBridge.transferTokens" + (i === void 0 ? "" : "WithPayload"));
    }
  }
  async *redeem(e, t, n = !0) {
    const r = new Q(e).toString();
    if (t.payloadName === "TransferWithPayload" && t.payload.token.chain !== this.chain) {
      const f = new Q(t.payload.from).unwrap();
      if (f !== r)
        throw new Error(`VAA.from (${f}) does not match sender (${r})`);
    }
    const i = await this.tokenBridge.WETH();
    if (new Q(t.payload.token.address).unwrap() === i && n) {
      const f = await this.tokenBridge.completeTransferAndUnwrapETH.populateTransaction(m6(t));
      yield this.createUnsignedTx(s0(f, r), "TokenBridge.completeTransferAndUnwrapETH");
    } else {
      const f = await this.tokenBridge.completeTransfer.populateTransaction(m6(t));
      yield this.createUnsignedTx(s0(f, r), "TokenBridge.completeTransfer");
    }
  }
  async getWrappedNative() {
    const e = await this.tokenBridge.WETH();
    return V1(this.chain, e);
  }
  createUnsignedTx(e, t, n = !1) {
    return new D1(H1(e, this.chainId), this.network, this.chain, t, n);
  }
}
class q6 {
  constructor(e, t, n, r) {
    o(this, "network");
    o(this, "chain");
    o(this, "provider");
    o(this, "contracts");
    o(this, "tokenBridgeRelayer");
    o(this, "tokenBridge");
    o(this, "chainId");
    if (this.network = e, this.chain = t, this.provider = n, this.contracts = r, e === "Devnet")
      throw new Error("AutomaticTokenBridge not supported on Devnet");
    this.chainId = W1.get(e, t);
    const i = this.contracts.tokenBridge;
    if (!i)
      throw new Error(`Wormhole Token Bridge contract for domain ${t} not found`);
    this.tokenBridge = a6.connect(i, n);
    const s = this.contracts.tokenBridgeRelayer;
    if (!s)
      throw new Error(`Wormhole Token Bridge Relayer contract for domain ${t} not found`);
    this.tokenBridgeRelayer = N6.connect(s, n);
  }
  async *redeem(e, t) {
    const n = new Q(e).toString(), r = await this.tokenBridgeRelayer.completeTransferWithRelay.populateTransaction(m6(t));
    return this.createUnsignedTx(s0(r, n), "TokenBridgeRelayer.completeTransferWithRelay");
  }
  static async fromRpc(e, t) {
    const [n, r] = await L0.chainFromRpc(e), i = t[r];
    if (i.network !== n)
      throw new Error(`Network mismatch: ${i.network} != ${n}`);
    return new q6(n, r, e, i.contracts);
  }
  //alternative naming: initiateTransfer
  async *transfer(e, t, n, r, i) {
    const s = new Q(e).toString(), f = Z0(t.chain), b = t.address.toUniversalAddress().toUint8Array(), c = i || 0n;
    if (E6(n)) {
      const d = await this.tokenBridgeRelayer.wrapAndTransferEthWithRelay.populateTransaction(
        c,
        f,
        b,
        0,
        // skip batching
        { value: r }
      );
      yield this.createUnsignedTx(s0(d, s), "TokenBridgeRelayer.wrapAndTransferETHWithRelay");
    } else {
      const d = new Q(n).toString(), l = L0.getTokenImplementation(this.provider, d);
      if (await l.allowance(s, this.tokenBridgeRelayer.target) < r) {
        const E = await l.approve.populateTransaction(this.tokenBridgeRelayer.target, r);
        yield this.createUnsignedTx(s0(E, s), "AutomaticTokenBridge.Approve");
      }
      const m = await this.tokenBridgeRelayer.transferTokensWithRelay.populateTransaction(d, r, c, f, b, 0);
      yield this.createUnsignedTx(s0(m, s), "TokenBridgeRelayer.TransferTokensWithRelay");
    }
  }
  async getRelayerFee(e, t) {
    const n = Z0(e), r = await this.tokenAddress(t), s = await L0.getTokenImplementation(this.provider, r).decimals();
    return await this.tokenBridgeRelayer.calculateRelayerFee(n, r, s);
  }
  // Return the amount of native gas that will be
  // received when the incoming bridge transfer is redeemed
  // Note: for a quote, this should be called on the destination chain
  async nativeTokenAmount(e, t) {
    const n = await this.tokenAddress(e);
    return this.tokenBridgeRelayer.calculateNativeSwapAmountOut(n, t);
  }
  async maxSwapAmount(e) {
    const t = await this.tokenAddress(e);
    return this.tokenBridgeRelayer.calculateMaxSwapAmountIn(t);
  }
  async getRegisteredTokens() {
    return (await this.tokenBridgeRelayer.getAcceptedTokensList()).map((t) => V1(this.chain, t));
  }
  async isRegisteredToken(e) {
    const t = await this.tokenAddress(e);
    return await this.tokenBridgeRelayer.isAcceptedToken(t);
  }
  async tokenAddress(e) {
    return E6(e) ? await this.tokenBridge.WETH() : new Q(e).toString();
  }
  createUnsignedTx(e, t, n = !1) {
    return new D1(H1(e, this.chainId), this.network, this.chain, t, n);
  }
}
const We = "6.12.1";
function Ve(a, e, t) {
  const n = e.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof a === e)
          return;
    }
  const r = new Error(`invalid value for type ${e}`);
  throw r.code = "INVALID_ARGUMENT", r.argument = `value.${t}`, r.value = a, r;
}
async function W6(a) {
  const e = Object.keys(a);
  return (await Promise.all(e.map((n) => Promise.resolve(a[n])))).reduce((n, r, i) => (n[e[i]] = r, n), {});
}
function w(a, e, t) {
  for (let n in e) {
    let r = e[n];
    const i = t ? t[n] : null;
    i && Ve(r, i, n), Object.defineProperty(a, n, { enumerable: !0, value: r, writable: !1 });
  }
}
function _0(a) {
  if (a == null)
    return "null";
  if (Array.isArray(a))
    return "[ " + a.map(_0).join(", ") + " ]";
  if (a instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let t = "0x";
    for (let n = 0; n < a.length; n++)
      t += e[a[n] >> 4], t += e[a[n] & 15];
    return t;
  }
  if (typeof a == "object" && typeof a.toJSON == "function")
    return _0(a.toJSON());
  switch (typeof a) {
    case "boolean":
    case "symbol":
      return a.toString();
    case "bigint":
      return BigInt(a).toString();
    case "number":
      return a.toString();
    case "string":
      return JSON.stringify(a);
    case "object": {
      const e = Object.keys(a);
      return e.sort(), "{ " + e.map((t) => `${_0(t)}: ${_0(a[t])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function z0(a, e) {
  return a && a.code === e;
}
function J1(a) {
  return z0(a, "CALL_EXCEPTION");
}
function Q0(a, e, t) {
  let n = a;
  {
    const i = [];
    if (t) {
      if ("message" in t || "code" in t || "name" in t)
        throw new Error(`value will overwrite populated values: ${_0(t)}`);
      for (const s in t) {
        if (s === "shortMessage")
          continue;
        const f = t[s];
        i.push(s + "=" + _0(f));
      }
    }
    i.push(`code=${e}`), i.push(`version=${We}`), i.length && (a += " (" + i.join(", ") + ")");
  }
  let r;
  switch (e) {
    case "INVALID_ARGUMENT":
      r = new TypeError(a);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      r = new RangeError(a);
      break;
    default:
      r = new Error(a);
  }
  return w(r, { code: e }), t && Object.assign(r, t), r.shortMessage == null && w(r, { shortMessage: n }), r;
}
function g(a, e, t, n) {
  if (!a)
    throw Q0(e, t, n);
}
function p(a, e, t, n) {
  g(a, e, "INVALID_ARGUMENT", { argument: t, value: n });
}
function K1(a, e, t) {
  t == null && (t = ""), t && (t = ": " + t), g(a >= e, "missing arguemnt" + t, "MISSING_ARGUMENT", {
    count: a,
    expectedCount: e
  }), g(a <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
    count: a,
    expectedCount: e
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((a, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    a.push(e);
  } catch {
  }
  return a;
}, []);
function Q6(a, e, t) {
  if (t == null && (t = ""), a !== e) {
    let n = t, r = "new";
    t && (n += ".", r += " " + t), g(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: r
    });
  }
}
function X1(a, e, t) {
  if (a instanceof Uint8Array)
    return t ? new Uint8Array(a) : a;
  if (typeof a == "string" && a.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((a.length - 2) / 2);
    let r = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(a.substring(r, r + 2), 16), r += 2;
    return n;
  }
  p(!1, "invalid BytesLike value", e || "value", a);
}
function G(a, e) {
  return X1(a, e, !1);
}
function t0(a, e) {
  return X1(a, e, !0);
}
function f0(a, e) {
  return !(typeof a != "string" || !a.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && a.length !== 2 + 2 * e || e === !0 && a.length % 2 !== 0);
}
function He(a) {
  return f0(a, !0) || a instanceof Uint8Array;
}
const o1 = "0123456789abcdef";
function O(a) {
  const e = G(a);
  let t = "0x";
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t += o1[(r & 240) >> 4] + o1[r & 15];
  }
  return t;
}
function P0(a) {
  return "0x" + a.map((e) => O(e).substring(2)).join("");
}
function E0(a, e, t) {
  const n = G(a);
  return t != null && t > n.length && g(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: t
  }), O(n.slice(e ?? 0, t ?? n.length));
}
function Y1(a, e, t) {
  const n = G(a);
  g(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: e,
    offset: e + 1
  });
  const r = new Uint8Array(e);
  return r.fill(0), t ? r.set(n, e - n.length) : r.set(n, 0), O(r);
}
function Ge(a, e) {
  return Y1(a, e, !0);
}
function ze(a, e) {
  return Y1(a, e, !1);
}
const P6 = BigInt(0), J = BigInt(1), F0 = 9007199254740991;
function Je(a, e) {
  const t = U6(a, "value"), n = BigInt(p0(e, "width"));
  if (g(t >> n === P6, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: a
  }), t >> n - J) {
    const r = (J << n) - J;
    return -((~t & r) + J);
  }
  return t;
}
function Ke(a, e) {
  let t = l0(a, "value");
  const n = BigInt(p0(e, "width")), r = J << n - J;
  if (t < P6) {
    t = -t, g(t <= r, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: a
    });
    const i = (J << n) - J;
    return (~t & i) + J;
  } else
    g(t < r, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: a
    });
  return t;
}
function o6(a, e) {
  const t = U6(a, "value"), n = BigInt(p0(e, "bits"));
  return t & (J << n) - J;
}
function l0(a, e) {
  switch (typeof a) {
    case "bigint":
      return a;
    case "number":
      return p(Number.isInteger(a), "underflow", e || "value", a), p(a >= -F0 && a <= F0, "overflow", e || "value", a), BigInt(a);
    case "string":
      try {
        if (a === "")
          throw new Error("empty string");
        return a[0] === "-" && a[1] !== "-" ? -BigInt(a.substring(1)) : BigInt(a);
      } catch (t) {
        p(!1, `invalid BigNumberish string: ${t.message}`, e || "value", a);
      }
  }
  p(!1, "invalid BigNumberish value", e || "value", a);
}
function U6(a, e) {
  const t = l0(a, e);
  return g(t >= P6, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: a
  }), t;
}
const d1 = "0123456789abcdef";
function Z1(a) {
  if (a instanceof Uint8Array) {
    let e = "0x0";
    for (const t of a)
      e += d1[t >> 4], e += d1[t & 15];
    return BigInt(e);
  }
  return l0(a);
}
function p0(a, e) {
  switch (typeof a) {
    case "bigint":
      return p(a >= -F0 && a <= F0, "overflow", e || "value", a), Number(a);
    case "number":
      return p(Number.isInteger(a), "underflow", e || "value", a), p(a >= -F0 && a <= F0, "overflow", e || "value", a), a;
    case "string":
      try {
        if (a === "")
          throw new Error("empty string");
        return p0(BigInt(a), e);
      } catch (t) {
        p(!1, `invalid numeric string: ${t.message}`, e || "value", a);
      }
  }
  p(!1, "invalid numeric value", e || "value", a);
}
function Xe(a) {
  return p0(Z1(a));
}
function q1(a, e) {
  let n = U6(a, "value").toString(16);
  if (e == null)
    n.length % 2 && (n = "0" + n);
  else {
    const r = p0(e, "width");
    for (g(r * 2 >= n.length, `value exceeds width (${r} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: a
    }); n.length < r * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Ye(a) {
  const e = U6(a, "value");
  if (e === P6)
    return new Uint8Array([]);
  let t = e.toString(16);
  t.length % 2 && (t = "0" + t);
  const n = new Uint8Array(t.length / 2);
  for (let r = 0; r < n.length; r++) {
    const i = r * 2;
    n[r] = parseInt(t.substring(i, i + 2), 16);
  }
  return n;
}
var $0;
class Ze {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(e, t, n) {
    /**
     *  The event filter.
     */
    o(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    o(this, "emitter");
    x(this, $0, void 0);
    T(this, $0, t), w(this, { emitter: e, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    u(this, $0) != null && await this.emitter.off(this.filter, u(this, $0));
  }
}
$0 = new WeakMap();
function qe(a, e, t, n, r) {
  p(!1, `invalid codepoint at offset ${e}; ${a}`, "bytes", t);
}
function Q1(a, e, t, n, r) {
  if (a === "BAD_PREFIX" || a === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let s = e + 1; s < t.length && t[s] >> 6 === 2; s++)
      i++;
    return i;
  }
  return a === "OVERRUN" ? t.length - e - 1 : 0;
}
function Qe(a, e, t, n, r) {
  return a === "OVERLONG" ? (p(typeof r == "number", "invalid bad code point for replacement", "badCodepoint", r), n.push(r), 0) : (n.push(65533), Q1(a, e, t));
}
const je = Object.freeze({
  error: qe,
  ignore: Q1,
  replace: Qe
});
function e5(a, e) {
  e == null && (e = je.error);
  const t = G(a, "bytes"), n = [];
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let s = null, f = null;
    if ((i & 224) === 192)
      s = 1, f = 127;
    else if ((i & 240) === 224)
      s = 2, f = 2047;
    else if ((i & 248) === 240)
      s = 3, f = 65535;
    else {
      (i & 192) === 128 ? r += e("UNEXPECTED_CONTINUE", r - 1, t, n) : r += e("BAD_PREFIX", r - 1, t, n);
      continue;
    }
    if (r - 1 + s >= t.length) {
      r += e("OVERRUN", r - 1, t, n);
      continue;
    }
    let b = i & (1 << 8 - s - 1) - 1;
    for (let c = 0; c < s; c++) {
      let d = t[r];
      if ((d & 192) != 128) {
        r += e("MISSING_CONTINUE", r, t, n), b = null;
        break;
      }
      b = b << 6 | d & 63, r++;
    }
    if (b !== null) {
      if (b > 1114111) {
        r += e("OUT_OF_RANGE", r - 1 - s, t, n, b);
        continue;
      }
      if (b >= 55296 && b <= 57343) {
        r += e("UTF16_SURROGATE", r - 1 - s, t, n, b);
        continue;
      }
      if (b <= f) {
        r += e("OVERLONG", r - 1 - s, t, n, b);
        continue;
      }
      n.push(b);
    }
  }
  return n;
}
function j1(a, e) {
  p(typeof a == "string", "invalid string value", "str", a);
  let t = [];
  for (let n = 0; n < a.length; n++) {
    const r = a.charCodeAt(n);
    if (r < 128)
      t.push(r);
    else if (r < 2048)
      t.push(r >> 6 | 192), t.push(r & 63 | 128);
    else if ((r & 64512) == 55296) {
      n++;
      const i = a.charCodeAt(n);
      p(n < a.length && (i & 64512) === 56320, "invalid surrogate pair", "str", a);
      const s = 65536 + ((r & 1023) << 10) + (i & 1023);
      t.push(s >> 18 | 240), t.push(s >> 12 & 63 | 128), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
    } else
      t.push(r >> 12 | 224), t.push(r >> 6 & 63 | 128), t.push(r & 63 | 128);
  }
  return new Uint8Array(t);
}
function t5(a) {
  return a.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function n5(a, e) {
  return t5(e5(a, e));
}
function u1(a) {
  const e = [];
  for (; a; )
    e.unshift(a & 255), a >>= 8;
  return e;
}
function ee(a) {
  if (Array.isArray(a)) {
    let n = [];
    if (a.forEach(function(i) {
      n = n.concat(ee(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const r = u1(n.length);
    return r.unshift(247 + r.length), r.concat(n);
  }
  const e = Array.prototype.slice.call(G(a, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = u1(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
const l1 = "0123456789abcdef";
function a5(a) {
  let e = "0x";
  for (const t of ee(a))
    e += l1[t >> 4], e += l1[t & 15];
  return e;
}
const S = 32, V6 = new Uint8Array(S), r5 = ["then"], d6 = {};
function K0(a, e) {
  const t = new Error(`deferred error during ABI decoding triggered accessing ${a}`);
  throw t.error = e, t;
}
var h0;
const x0 = class x0 extends Array {
  /**
   *  @private
   */
  constructor(...t) {
    const n = t[0];
    let r = t[1], i = (t[2] || []).slice(), s = !0;
    n !== d6 && (r = t, i = [], s = !1);
    super(r.length);
    x(this, h0, void 0);
    r.forEach((b, c) => {
      this[c] = b;
    });
    const f = i.reduce((b, c) => (typeof c == "string" && b.set(c, (b.get(c) || 0) + 1), b), /* @__PURE__ */ new Map());
    if (T(this, h0, Object.freeze(r.map((b, c) => {
      const d = i[c];
      return d != null && f.get(d) === 1 ? d : null;
    }))), !!s)
      return Object.freeze(this), new Proxy(this, {
        get: (b, c, d) => {
          if (typeof c == "string") {
            if (c.match(/^[0-9]+$/)) {
              const y = p0(c, "%index");
              if (y < 0 || y >= this.length)
                throw new RangeError("out of result range");
              const m = b[y];
              return m instanceof Error && K0(`index ${y}`, m), m;
            }
            if (r5.indexOf(c) >= 0)
              return Reflect.get(b, c, d);
            const l = b[c];
            if (l instanceof Function)
              return function(...y) {
                return l.apply(this === d ? b : this, y);
              };
            if (!(c in b))
              return b.getValue.apply(this === d ? b : this, [c]);
          }
          return Reflect.get(b, c, d);
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
    return this.forEach((r, i) => {
      r instanceof Error && K0(`index ${i}`, r), t && r instanceof x0 && (r = r.toArray(t)), n.push(r);
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
    return u(this, h0).reduce((n, r, i) => {
      if (g(r != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), !(r in n)) {
        let s = this.getValue(r);
        t && s instanceof x0 && (s = s.toObject(t)), n[r] = s;
      }
      return n;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(t, n) {
    t == null && (t = 0), t < 0 && (t += this.length, t < 0 && (t = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const r = [], i = [];
    for (let s = t; s < n; s++)
      r.push(this[s]), i.push(u(this, h0)[s]);
    return new x0(d6, r, i);
  }
  /**
   *  @_ignore
   */
  filter(t, n) {
    const r = [], i = [];
    for (let s = 0; s < this.length; s++) {
      const f = this[s];
      f instanceof Error && K0(`index ${s}`, f), t.call(n, f, s, this) && (r.push(f), i.push(u(this, h0)[s]));
    }
    return new x0(d6, r, i);
  }
  /**
   *  @_ignore
   */
  map(t, n) {
    const r = [];
    for (let i = 0; i < this.length; i++) {
      const s = this[i];
      s instanceof Error && K0(`index ${i}`, s), r.push(t.call(n, s, i, this));
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
  getValue(t) {
    const n = u(this, h0).indexOf(t);
    if (n === -1)
      return;
    const r = this[n];
    return r instanceof Error && K0(`property ${JSON.stringify(t)}`, r.error), r;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(t, n) {
    return new x0(d6, t, n);
  }
};
h0 = new WeakMap();
let x6 = x0;
function p1(a) {
  let e = Ye(a);
  return g(e.length <= S, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e, length: S, offset: e.length }), e.length !== S && (e = t0(P0([V6.slice(e.length % S), e]))), e;
}
class y0 {
  constructor(e, t, n, r) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    o(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    o(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    o(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    o(this, "dynamic");
    w(this, { name: e, type: t, localName: n, dynamic: r }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(e, t) {
    p(!1, e, this.localName, t);
  }
}
var i0, N0, D0, g6;
class H6 {
  constructor() {
    x(this, D0);
    // An array of WordSize lengthed objects to concatenation
    x(this, i0, void 0);
    x(this, N0, void 0);
    T(this, i0, []), T(this, N0, 0);
  }
  get data() {
    return P0(u(this, i0));
  }
  get length() {
    return u(this, N0);
  }
  appendWriter(e) {
    return N(this, D0, g6).call(this, t0(e.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(e) {
    let t = t0(e);
    const n = t.length % S;
    return n && (t = t0(P0([t, V6.slice(n)]))), N(this, D0, g6).call(this, t);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(e) {
    return N(this, D0, g6).call(this, p1(e));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const e = u(this, i0).length;
    return u(this, i0).push(V6), T(this, N0, u(this, N0) + S), (t) => {
      u(this, i0)[e] = p1(t);
    };
  }
}
i0 = new WeakMap(), N0 = new WeakMap(), D0 = new WeakSet(), g6 = function(e) {
  return u(this, i0).push(e), T(this, N0, u(this, N0) + e.length), e.length;
};
var _, W, R0, O0, m0, r6, z6, R6, te;
const i1 = class i1 {
  constructor(e, t, n) {
    x(this, r6);
    x(this, R6);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    o(this, "allowLoose");
    x(this, _, void 0);
    x(this, W, void 0);
    x(this, R0, void 0);
    x(this, O0, void 0);
    x(this, m0, void 0);
    w(this, { allowLoose: !!t }), T(this, _, t0(e)), T(this, R0, 0), T(this, O0, null), T(this, m0, n ?? 1024), T(this, W, 0);
  }
  get data() {
    return O(u(this, _));
  }
  get dataLength() {
    return u(this, _).length;
  }
  get consumed() {
    return u(this, W);
  }
  get bytes() {
    return new Uint8Array(u(this, _));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(e) {
    const t = new i1(u(this, _).slice(u(this, W) + e), this.allowLoose, u(this, m0));
    return T(t, O0, this), t;
  }
  // Read bytes
  readBytes(e, t) {
    let n = N(this, R6, te).call(this, 0, e, !!t);
    return N(this, r6, z6).call(this, e), T(this, W, u(this, W) + n.length), n.slice(0, e);
  }
  // Read a numeric values
  readValue() {
    return Z1(this.readBytes(S));
  }
  readIndex() {
    return Xe(this.readBytes(S));
  }
};
_ = new WeakMap(), W = new WeakMap(), R0 = new WeakMap(), O0 = new WeakMap(), m0 = new WeakMap(), r6 = new WeakSet(), z6 = function(e) {
  var t;
  if (u(this, O0))
    return N(t = u(this, O0), r6, z6).call(t, e);
  T(this, R0, u(this, R0) + e), g(u(this, m0) < 1 || u(this, R0) <= u(this, m0) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${u(this, m0)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: t0(u(this, _)),
    offset: u(this, W),
    length: e,
    info: {
      bytesRead: u(this, R0),
      dataLength: this.dataLength
    }
  });
}, R6 = new WeakSet(), te = function(e, t, n) {
  let r = Math.ceil(t / S) * S;
  return u(this, W) + r > u(this, _).length && (this.allowLoose && n && u(this, W) + t <= u(this, _).length ? r = t : g(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: t0(u(this, _)),
    length: u(this, _).length,
    offset: u(this, W) + r
  })), u(this, _).slice(u(this, W), u(this, W) + r);
};
let G6 = i1;
function y1(a) {
  if (!Number.isSafeInteger(a) || a < 0)
    throw new Error(`Wrong positive integer: ${a}`);
}
function ne(a, ...e) {
  if (!(a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(a.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${a.length}`);
}
function h1(a, e = !0) {
  if (a.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && a.finished)
    throw new Error("Hash#digest() has already been called");
}
function i5(a, e) {
  ne(a);
  const t = e.outputLen;
  if (a.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const s5 = (a) => a instanceof Uint8Array, f5 = (a) => new Uint32Array(a.buffer, a.byteOffset, Math.floor(a.byteLength / 4)), b5 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!b5)
  throw new Error("Non little-endian hardware is not supported");
function c5(a) {
  if (typeof a != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof a}`);
  return new Uint8Array(new TextEncoder().encode(a));
}
function ae(a) {
  if (typeof a == "string" && (a = c5(a)), !s5(a))
    throw new Error(`expected Uint8Array, got ${typeof a}`);
  return a;
}
class o5 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function d5(a) {
  const e = (n) => a().update(ae(n)).digest(), t = a();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => a(), e;
}
const u6 = /* @__PURE__ */ BigInt(2 ** 32 - 1), m1 = /* @__PURE__ */ BigInt(32);
function u5(a, e = !1) {
  return e ? { h: Number(a & u6), l: Number(a >> m1 & u6) } : { h: Number(a >> m1 & u6) | 0, l: Number(a & u6) | 0 };
}
function l5(a, e = !1) {
  let t = new Uint32Array(a.length), n = new Uint32Array(a.length);
  for (let r = 0; r < a.length; r++) {
    const { h: i, l: s } = u5(a[r], e);
    [t[r], n[r]] = [i, s];
  }
  return [t, n];
}
const p5 = (a, e, t) => a << t | e >>> 32 - t, y5 = (a, e, t) => e << t | a >>> 32 - t, h5 = (a, e, t) => e << t - 32 | a >>> 64 - t, m5 = (a, e, t) => a << t - 32 | e >>> 64 - t, [re, ie, se] = [[], [], []], g5 = /* @__PURE__ */ BigInt(0), X0 = /* @__PURE__ */ BigInt(1), w5 = /* @__PURE__ */ BigInt(2), T5 = /* @__PURE__ */ BigInt(7), k5 = /* @__PURE__ */ BigInt(256), E5 = /* @__PURE__ */ BigInt(113);
for (let a = 0, e = X0, t = 1, n = 0; a < 24; a++) {
  [t, n] = [n, (2 * t + 3 * n) % 5], re.push(2 * (5 * n + t)), ie.push((a + 1) * (a + 2) / 2 % 64);
  let r = g5;
  for (let i = 0; i < 7; i++)
    e = (e << X0 ^ (e >> T5) * E5) % k5, e & w5 && (r ^= X0 << (X0 << /* @__PURE__ */ BigInt(i)) - X0);
  se.push(r);
}
const [x5, A5] = /* @__PURE__ */ l5(se, !0), g1 = (a, e, t) => t > 32 ? h5(a, e, t) : p5(a, e, t), w1 = (a, e, t) => t > 32 ? m5(a, e, t) : y5(a, e, t);
function v5(a, e = 24) {
  const t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let s = 0; s < 10; s++)
      t[s] = a[s] ^ a[s + 10] ^ a[s + 20] ^ a[s + 30] ^ a[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const f = (s + 8) % 10, b = (s + 2) % 10, c = t[b], d = t[b + 1], l = g1(c, d, 1) ^ t[f], y = w1(c, d, 1) ^ t[f + 1];
      for (let m = 0; m < 50; m += 10)
        a[s + m] ^= l, a[s + m + 1] ^= y;
    }
    let r = a[2], i = a[3];
    for (let s = 0; s < 24; s++) {
      const f = ie[s], b = g1(r, i, f), c = w1(r, i, f), d = re[s];
      r = a[d], i = a[d + 1], a[d] = b, a[d + 1] = c;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let f = 0; f < 10; f++)
        t[f] = a[s + f];
      for (let f = 0; f < 10; f++)
        a[s + f] ^= ~t[(f + 2) % 10] & t[(f + 4) % 10];
    }
    a[0] ^= x5[n], a[1] ^= A5[n];
  }
  t.fill(0);
}
class j6 extends o5 {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, t, n, r = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = r, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, y1(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = f5(this.state);
  }
  keccak() {
    v5(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    h1(this);
    const { blockLen: t, state: n } = this;
    e = ae(e);
    const r = e.length;
    for (let i = 0; i < r; ) {
      const s = Math.min(t - this.pos, r - i);
      for (let f = 0; f < s; f++)
        n[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: n, blockLen: r } = this;
    e[n] ^= t, t & 128 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    h1(this, !1), ne(e), this.finish();
    const t = this.state, { blockLen: n } = this;
    for (let r = 0, i = e.length; r < i; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, i - r);
      e.set(t.subarray(this.posOut, this.posOut + s), r), this.posOut += s, r += s;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return y1(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (i5(e, this), this.finished)
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
    const { blockLen: t, suffix: n, outputLen: r, rounds: i, enableXOF: s } = this;
    return e || (e = new j6(t, n, r, s, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = s, e.destroyed = this.destroyed, e;
  }
}
const N5 = (a, e, t) => d5(() => new j6(e, a, t)), R5 = /* @__PURE__ */ N5(1, 136, 256 / 8);
let fe = !1;
const be = function(a) {
  return R5(a);
};
let ce = be;
function o0(a) {
  const e = G(a, "data");
  return O(ce(e));
}
o0._ = be;
o0.lock = function() {
  fe = !0;
};
o0.register = function(a) {
  if (fe)
    throw new TypeError("keccak256 is locked");
  ce = a;
};
Object.freeze(o0);
const O5 = BigInt(0), I5 = BigInt(36);
function T1(a) {
  a = a.toLowerCase();
  const e = a.substring(2).split(""), t = new Uint8Array(40);
  for (let r = 0; r < 40; r++)
    t[r] = e[r].charCodeAt(0);
  const n = G(o0(t));
  for (let r = 0; r < 40; r += 2)
    n[r >> 1] >> 4 >= 8 && (e[r] = e[r].toUpperCase()), (n[r >> 1] & 15) >= 8 && (e[r + 1] = e[r + 1].toUpperCase());
  return "0x" + e.join("");
}
const e1 = {};
for (let a = 0; a < 10; a++)
  e1[String(a)] = String(a);
for (let a = 0; a < 26; a++)
  e1[String.fromCharCode(65 + a)] = String(10 + a);
const k1 = 15;
function P5(a) {
  a = a.toUpperCase(), a = a.substring(4) + a.substring(0, 2) + "00";
  let e = a.split("").map((n) => e1[n]).join("");
  for (; e.length >= k1; ) {
    let n = e.substring(0, k1);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
const U5 = function() {
  const a = {};
  for (let e = 0; e < 36; e++) {
    const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    a[t] = BigInt(e);
  }
  return a;
}();
function B5(a) {
  a = a.toLowerCase();
  let e = O5;
  for (let t = 0; t < a.length; t++)
    e = e * I5 + U5[a[t]];
  return e;
}
function d0(a) {
  if (p(typeof a == "string", "invalid address", "address", a), a.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    a.startsWith("0x") || (a = "0x" + a);
    const e = T1(a);
    return p(!a.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === a, "bad address checksum", "address", a), e;
  }
  if (a.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    p(a.substring(2, 4) === P5(a), "bad icap checksum", "address", a);
    let e = B5(a.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return T1("0x" + e);
  }
  p(!1, "invalid address", "address", a);
}
function C5(a) {
  const e = d0(a.from);
  let n = l0(a.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, d0(E0(o0(a5([e, n])), 12));
}
function oe(a) {
  return a && typeof a.getAddress == "function";
}
async function L6(a, e) {
  const t = await e;
  return (t == null || t === "0x0000000000000000000000000000000000000000") && (g(typeof a != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: a }), p(!1, "invalid AddressLike value; did not resolve to a value address", "target", a)), d0(t);
}
function j0(a, e) {
  if (typeof a == "string")
    return a.match(/^0x[0-9a-f]{40}$/i) ? d0(a) : (g(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), L6(a, e.resolveName(a)));
  if (oe(a))
    return L6(a, a.getAddress());
  if (a && typeof a.then == "function")
    return L6(a, a);
  p(!1, "unsupported addressable value", "target", a);
}
const n0 = {};
function h(a, e) {
  let t = !1;
  return e < 0 && (t = !0, e *= -1), new C(n0, `${t ? "" : "u"}int${e}`, a, { signed: t, width: e });
}
function k(a, e) {
  return new C(n0, `bytes${e || ""}`, a, { size: e });
}
const E1 = Symbol.for("_ethers_typed");
var I0;
const a0 = class a0 {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, r) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    o(this, "type");
    /**
     *  The actual value.
     */
    o(this, "value");
    x(this, I0, void 0);
    /**
     *  @_ignore:
     */
    o(this, "_typedSymbol");
    r == null && (r = null), Q6(n0, e, "Typed"), w(this, { _typedSymbol: E1, type: t, value: n }), T(this, I0, r), this.format();
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
    return u(this, I0);
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
    return u(this, I0) === !0 ? -1 : u(this, I0) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(e, t) {
    return new a0(n0, e, t);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(e) {
    return h(e, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(e) {
    return h(e, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(e) {
    return h(e, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(e) {
    return h(e, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(e) {
    return h(e, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(e) {
    return h(e, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(e) {
    return h(e, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(e) {
    return h(e, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(e) {
    return h(e, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(e) {
    return h(e, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(e) {
    return h(e, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(e) {
    return h(e, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(e) {
    return h(e, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(e) {
    return h(e, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(e) {
    return h(e, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(e) {
    return h(e, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(e) {
    return h(e, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(e) {
    return h(e, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(e) {
    return h(e, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(e) {
    return h(e, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(e) {
    return h(e, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(e) {
    return h(e, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(e) {
    return h(e, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(e) {
    return h(e, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(e) {
    return h(e, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(e) {
    return h(e, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(e) {
    return h(e, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(e) {
    return h(e, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(e) {
    return h(e, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(e) {
    return h(e, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(e) {
    return h(e, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(e) {
    return h(e, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(e) {
    return h(e, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(e) {
    return h(e, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(e) {
    return h(e, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(e) {
    return h(e, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(e) {
    return h(e, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(e) {
    return h(e, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(e) {
    return h(e, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(e) {
    return h(e, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(e) {
    return h(e, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(e) {
    return h(e, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(e) {
    return h(e, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(e) {
    return h(e, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(e) {
    return h(e, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(e) {
    return h(e, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(e) {
    return h(e, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(e) {
    return h(e, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(e) {
    return h(e, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(e) {
    return h(e, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(e) {
    return h(e, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(e) {
    return h(e, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(e) {
    return h(e, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(e) {
    return h(e, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(e) {
    return h(e, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(e) {
    return h(e, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(e) {
    return h(e, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(e) {
    return h(e, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(e) {
    return h(e, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(e) {
    return h(e, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(e) {
    return h(e, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(e) {
    return h(e, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(e) {
    return h(e, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(e) {
    return h(e, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(e) {
    return h(e, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(e) {
    return h(e, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(e) {
    return k(e, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(e) {
    return k(e, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(e) {
    return k(e, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(e) {
    return k(e, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(e) {
    return k(e, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(e) {
    return k(e, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(e) {
    return k(e, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(e) {
    return k(e, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(e) {
    return k(e, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(e) {
    return k(e, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(e) {
    return k(e, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(e) {
    return k(e, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(e) {
    return k(e, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(e) {
    return k(e, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(e) {
    return k(e, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(e) {
    return k(e, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(e) {
    return k(e, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(e) {
    return k(e, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(e) {
    return k(e, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(e) {
    return k(e, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(e) {
    return k(e, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(e) {
    return k(e, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(e) {
    return k(e, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(e) {
    return k(e, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(e) {
    return k(e, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(e) {
    return k(e, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(e) {
    return k(e, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(e) {
    return k(e, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(e) {
    return k(e, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(e) {
    return k(e, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(e) {
    return k(e, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(e) {
    return k(e, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(e) {
    return new a0(n0, "address", e);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(e) {
    return new a0(n0, "bool", !!e);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(e) {
    return new a0(n0, "bytes", e);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(e) {
    return new a0(n0, "string", e);
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
    return new a0(n0, "overrides", Object.assign({}, e));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(e) {
    return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === E1;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(e, t) {
    if (a0.isTyped(e)) {
      if (e.type !== t)
        throw new Error(`invalid type: expecetd ${t}, got ${e.type}`);
      return e.value;
    }
    return e;
  }
};
I0 = new WeakMap();
let C = a0;
class S5 extends y0 {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, t) {
    let n = C.dereference(t, "string");
    try {
      n = d0(n);
    } catch (r) {
      return this._throwError(r.message, t);
    }
    return e.writeValue(n);
  }
  decode(e) {
    return d0(q1(e.readValue(), 20));
  }
}
class M5 extends y0 {
  constructor(t) {
    super(t.name, t.type, "_", t.dynamic);
    o(this, "coder");
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
function de(a, e, t) {
  let n = [];
  if (Array.isArray(t))
    n = t;
  else if (t && typeof t == "object") {
    let b = {};
    n = e.map((c) => {
      const d = c.localName;
      return g(d, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: c }, value: t }), g(!b[d], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: c }, value: t }), b[d] = !0, t[d];
    });
  } else
    p(!1, "invalid tuple value", "tuple", t);
  p(e.length === n.length, "types/value length mismatch", "tuple", t);
  let r = new H6(), i = new H6(), s = [];
  e.forEach((b, c) => {
    let d = n[c];
    if (b.dynamic) {
      let l = i.length;
      b.encode(i, d);
      let y = r.writeUpdatableValue();
      s.push((m) => {
        y(m + l);
      });
    } else
      b.encode(r, d);
  }), s.forEach((b) => {
    b(r.length);
  });
  let f = a.appendWriter(r);
  return f += a.appendWriter(i), f;
}
function ue(a, e) {
  let t = [], n = [], r = a.subReader(0);
  return e.forEach((i) => {
    let s = null;
    if (i.dynamic) {
      let f = a.readIndex(), b = r.subReader(f);
      try {
        s = i.decode(b);
      } catch (c) {
        if (z0(c, "BUFFER_OVERRUN"))
          throw c;
        s = c, s.baseType = i.name, s.name = i.localName, s.type = i.type;
      }
    } else
      try {
        s = i.decode(a);
      } catch (f) {
        if (z0(f, "BUFFER_OVERRUN"))
          throw f;
        s = f, s.baseType = i.name, s.name = i.localName, s.type = i.type;
      }
    if (s == null)
      throw new Error("investigate");
    t.push(s), n.push(i.localName || null);
  }), x6.fromItems(t, n);
}
class _5 extends y0 {
  constructor(t, n, r) {
    const i = t.type + "[" + (n >= 0 ? n : "") + "]", s = n === -1 || t.dynamic;
    super("array", i, r, s);
    o(this, "coder");
    o(this, "length");
    w(this, { coder: t, length: n });
  }
  defaultValue() {
    const t = this.coder.defaultValue(), n = [];
    for (let r = 0; r < this.length; r++)
      n.push(t);
    return n;
  }
  encode(t, n) {
    const r = C.dereference(n, "array");
    Array.isArray(r) || this._throwError("expected array value", r);
    let i = this.length;
    i === -1 && (i = r.length, t.writeValue(r.length)), K1(r.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let s = [];
    for (let f = 0; f < r.length; f++)
      s.push(this.coder);
    return de(t, s, r);
  }
  decode(t) {
    let n = this.length;
    n === -1 && (n = t.readIndex(), g(n * S <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: t.bytes, offset: n * S, length: t.dataLength }));
    let r = [];
    for (let i = 0; i < n; i++)
      r.push(new M5(this.coder));
    return ue(t, r);
  }
}
class F5 extends y0 {
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
class le extends y0 {
  constructor(e, t) {
    super(e, e, t, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, t) {
    t = t0(t);
    let n = e.writeValue(t.length);
    return n += e.writeBytes(t), n;
  }
  decode(e) {
    return e.readBytes(e.readIndex(), !0);
  }
}
class L5 extends le {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return O(super.decode(e));
  }
}
class $5 extends y0 {
  constructor(t, n) {
    let r = "bytes" + String(t);
    super(r, r, n, !1);
    o(this, "size");
    w(this, { size: t }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(t, n) {
    let r = t0(C.dereference(n, this.type));
    return r.length !== this.size && this._throwError("incorrect data length", n), t.writeBytes(r);
  }
  decode(t) {
    return O(t.readBytes(this.size));
  }
}
const D5 = new Uint8Array([]);
class W5 extends y0 {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, t) {
    return t != null && this._throwError("not null", t), e.writeBytes(D5);
  }
  decode(e) {
    return e.readBytes(0), null;
  }
}
const V5 = BigInt(0), H5 = BigInt(1), G5 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class z5 extends y0 {
  constructor(t, n, r) {
    const i = (n ? "int" : "uint") + t * 8;
    super(i, i, r, !1);
    o(this, "size");
    o(this, "signed");
    w(this, { size: t, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(t, n) {
    let r = l0(C.dereference(n, this.type)), i = o6(G5, S * 8);
    if (this.signed) {
      let s = o6(i, this.size * 8 - 1);
      (r > s || r < -(s + H5)) && this._throwError("value out-of-bounds", n), r = Ke(r, 8 * S);
    } else
      (r < V5 || r > o6(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return t.writeValue(r);
  }
  decode(t) {
    let n = o6(t.readValue(), this.size * 8);
    return this.signed && (n = Je(n, this.size * 8)), n;
  }
}
class J5 extends le {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, t) {
    return super.encode(e, j1(C.dereference(t, "string")));
  }
  decode(e) {
    return n5(super.decode(e));
  }
}
class l6 extends y0 {
  constructor(t, n) {
    let r = !1;
    const i = [];
    t.forEach((f) => {
      f.dynamic && (r = !0), i.push(f.type);
    });
    const s = "tuple(" + i.join(",") + ")";
    super("tuple", s, n, r);
    o(this, "coders");
    w(this, { coders: Object.freeze(t.slice()) });
  }
  defaultValue() {
    const t = [];
    this.coders.forEach((r) => {
      t.push(r.defaultValue());
    });
    const n = this.coders.reduce((r, i) => {
      const s = i.localName;
      return s && (r[s] || (r[s] = 0), r[s]++), r;
    }, {});
    return this.coders.forEach((r, i) => {
      let s = r.localName;
      !s || n[s] !== 1 || (s === "length" && (s = "_length"), t[s] == null && (t[s] = t[i]));
    }), Object.freeze(t);
  }
  encode(t, n) {
    const r = C.dereference(n, "tuple");
    return de(t, this.coders, r);
  }
  decode(t) {
    return ue(t, this.coders);
  }
}
function e6(a) {
  return o0(j1(a));
}
function $6(a, e) {
  return {
    address: d0(a),
    storageKeys: e.map((t, n) => (p(f0(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
  };
}
function K5(a) {
  if (Array.isArray(a))
    return a.map((t, n) => Array.isArray(t) ? (p(t.length === 2, "invalid slot set", `value[${n}]`, t), $6(t[0], t[1])) : (p(t != null && typeof t == "object", "invalid address-slot set", "value", a), $6(t.address, t.storageKeys)));
  p(a != null && typeof a == "object", "invalid access list", "value", a);
  const e = Object.keys(a).map((t) => {
    const n = a[t].reduce((r, i) => (r[i] = !0, r), {});
    return $6(t, Object.keys(n).sort());
  });
  return e.sort((t, n) => t.address.localeCompare(n.address)), e;
}
function M(a) {
  const e = /* @__PURE__ */ new Set();
  return a.forEach((t) => e.add(t)), Object.freeze(e);
}
const X5 = "external public payable override", Y5 = M(X5.split(" ")), pe = "constant external internal payable private public pure view override", Z5 = M(pe.split(" ")), ye = "constructor error event fallback function receive struct", he = M(ye.split(" ")), me = "calldata memory storage payable indexed", q5 = M(me.split(" ")), Q5 = "tuple returns", j5 = [ye, me, Q5, pe].join(" "), et = M(j5.split(" ")), tt = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, nt = new RegExp("^(\\s*)"), at = new RegExp("^([0-9]+)"), rt = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), ge = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), we = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var P, z, i6, J6;
const O6 = class O6 {
  constructor(e) {
    x(this, i6);
    x(this, P, void 0);
    x(this, z, void 0);
    T(this, P, 0), T(this, z, e.slice());
  }
  get offset() {
    return u(this, P);
  }
  get length() {
    return u(this, z).length - u(this, P);
  }
  clone() {
    return new O6(u(this, z));
  }
  reset() {
    T(this, P, 0);
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
    const t = N(this, i6, J6).call(this, u(this, P) + 1, e.match + 1);
    return T(this, P, e.match + 1), t;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = [];
    for (; u(this, P) < e.match - 1; ) {
      const n = this.peek().linkNext;
      t.push(N(this, i6, J6).call(this, u(this, P) + 1, n)), T(this, P, n);
    }
    return T(this, P, e.match + 1), t;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (u(this, P) >= u(this, z).length)
      throw new Error("out-of-bounds");
    return u(this, z)[u(this, P)];
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
    return f1(this, P)._++, e;
  }
  toString() {
    const e = [];
    for (let t = u(this, P); t < u(this, z).length; t++) {
      const n = u(this, z)[t];
      e.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${e.join(" ")}>`;
  }
};
P = new WeakMap(), z = new WeakMap(), i6 = new WeakSet(), J6 = function(e = 0, t = 0) {
  return new O6(u(this, z).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - e,
    linkBack: n.linkBack - e,
    linkNext: n.linkNext - e
  }))));
};
let K = O6;
function T0(a) {
  const e = [], t = (s) => {
    const f = i < a.length ? JSON.stringify(a[i]) : "$EOI";
    throw new Error(`invalid token ${f} at ${i}: ${s}`);
  };
  let n = [], r = [], i = 0;
  for (; i < a.length; ) {
    let s = a.substring(i), f = s.match(nt);
    f && (i += f[1].length, s = a.substring(i));
    const b = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    e.push(b);
    let c = tt[s[0]] || "";
    if (c) {
      if (b.type = c, b.text = s[0], i++, c === "OPEN_PAREN")
        n.push(e.length - 1), r.push(e.length - 1);
      else if (c == "CLOSE_PAREN")
        n.length === 0 && t("no matching open bracket"), b.match = n.pop(), e[b.match].match = e.length - 1, b.depth--, b.linkBack = r.pop(), e[b.linkBack].linkNext = e.length - 1;
      else if (c === "COMMA")
        b.linkBack = r.pop(), e[b.linkBack].linkNext = e.length - 1, r.push(e.length - 1);
      else if (c === "OPEN_BRACKET")
        b.type = "BRACKET";
      else if (c === "CLOSE_BRACKET") {
        let d = e.pop().text;
        if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
          const l = e.pop().text;
          d = l + d, e[e.length - 1].value = p0(l);
        }
        if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        e[e.length - 1].text += d;
      }
      continue;
    }
    if (f = s.match(rt), f) {
      if (b.text = f[1], i += b.text.length, et.has(b.text)) {
        b.type = "KEYWORD";
        continue;
      }
      if (b.text.match(we)) {
        b.type = "TYPE";
        continue;
      }
      b.type = "ID";
      continue;
    }
    if (f = s.match(at), f) {
      b.text = f[1], b.type = "NUMBER", i += b.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(s[0])} at position ${i}`);
  }
  return new K(e.map((s) => Object.freeze(s)));
}
function x1(a, e) {
  let t = [];
  for (const n in e.keys())
    a.has(n) && t.push(n);
  if (t.length > 1)
    throw new Error(`conflicting types: ${t.join(", ")}`);
}
function B6(a, e) {
  if (e.peekKeyword(he)) {
    const t = e.pop().text;
    if (t !== a)
      throw new Error(`expected ${a}, got ${t}`);
  }
  return e.popType("ID");
}
function u0(a, e) {
  const t = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = a.peekType("KEYWORD");
    if (n == null || e && !e.has(n))
      break;
    if (a.pop(), t.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    t.add(n);
  }
  return Object.freeze(t);
}
function Te(a) {
  let e = u0(a, Z5);
  return x1(e, M("constant payable nonpayable".split(" "))), x1(e, M("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
}
function c0(a, e) {
  return a.popParams().map((t) => U.from(t, e));
}
function ke(a) {
  if (a.peekType("AT")) {
    if (a.pop(), a.peekType("NUMBER"))
      return l0(a.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function B0(a) {
  if (a.length)
    throw new Error(`unexpected tokens at offset ${a.offset}: ${a.toString()}`);
}
const it = new RegExp(/^(.*)\[([0-9]*)\]$/);
function A1(a) {
  const e = a.match(we);
  if (p(e, "invalid type", "type", a), a === "uint")
    return "uint256";
  if (a === "int")
    return "int256";
  if (e[2]) {
    const t = parseInt(e[2]);
    p(t !== 0 && t <= 32, "invalid bytes length", "type", a);
  } else if (e[3]) {
    const t = parseInt(e[3]);
    p(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", a);
  }
  return a;
}
const R = {}, L = Symbol.for("_ethers_internal"), v1 = "_ParamTypeInternal", N1 = "_ErrorInternal", R1 = "_EventInternal", O1 = "_ConstructorInternal", I1 = "_FallbackInternal", P1 = "_FunctionInternal", U1 = "_StructInternal";
var W0, w6;
const V = class V {
  /**
   *  @private
   */
  constructor(e, t, n, r, i, s, f, b) {
    x(this, W0);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    o(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    o(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    o(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    o(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    o(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    o(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    o(this, "arrayChildren");
    if (Q6(e, R, "ParamType"), Object.defineProperty(this, L, { value: v1 }), s && (s = Object.freeze(s.slice())), r === "array") {
      if (f == null || b == null)
        throw new Error("");
    } else if (f != null || b != null)
      throw new Error("");
    if (r === "tuple") {
      if (s == null)
        throw new Error("");
    } else if (s != null)
      throw new Error("");
    w(this, {
      name: t,
      type: n,
      baseType: r,
      indexed: i,
      components: s,
      arrayLength: f,
      arrayChildren: b
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
      const r = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (r.indexed = this.indexed), this.isTuple() && (r.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(r);
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
      return e.map((r) => n.arrayChildren.walk(r, t));
    }
    if (this.isTuple()) {
      if (!Array.isArray(e))
        throw new Error("invalid tuple value");
      if (e.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((r, i) => n.components[i].walk(r, t));
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
    const n = [], r = [e];
    return N(this, W0, w6).call(this, n, e, t, (i) => {
      r[0] = i;
    }), n.length && await Promise.all(n), r[0];
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
        return V.from(T0(e), t);
      } catch {
        p(!1, "invalid param type", "obj", e);
      }
    else if (e instanceof K) {
      let f = "", b = "", c = null;
      u0(e, M(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (b = "tuple", c = e.popParams().map((v) => V.from(v)), f = `tuple(${c.map((v) => v.format()).join(",")})`) : (f = A1(e.popType("TYPE")), b = f);
      let d = null, l = null;
      for (; e.length && e.peekType("BRACKET"); ) {
        const v = e.pop();
        d = new V(R, "", f, b, null, c, l, d), l = v.value, f += v.text, b = "array", c = null;
      }
      let y = null;
      if (u0(e, q5).has("indexed")) {
        if (!t)
          throw new Error("");
        y = !0;
      }
      const E = e.peekType("ID") ? e.pop().text : "";
      if (e.length)
        throw new Error("leftover tokens");
      return new V(R, E, f, b, y, c, l, d);
    }
    const n = e.name;
    p(!n || typeof n == "string" && n.match(ge), "invalid name", "obj.name", n);
    let r = e.indexed;
    r != null && (p(t, "parameter cannot be indexed", "obj.indexed", e.indexed), r = !!r);
    let i = e.type, s = i.match(it);
    if (s) {
      const f = parseInt(s[2] || "-1"), b = V.from({
        type: s[1],
        components: e.components
      });
      return new V(R, n || "", i, "array", r, null, f, b);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const f = e.components != null ? e.components.map((c) => V.from(c)) : null;
      return new V(R, n || "", i, "tuple", r, f, null, null);
    }
    return i = A1(e.type), new V(R, n || "", i, i, r, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(e) {
    return e && e[L] === v1;
  }
};
W0 = new WeakSet(), w6 = function(e, t, n, r) {
  if (this.isArray()) {
    if (!Array.isArray(t))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && t.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const s = this.arrayChildren, f = t.slice();
    f.forEach((b, c) => {
      var d;
      N(d = s, W0, w6).call(d, e, b, n, (l) => {
        f[c] = l;
      });
    }), r(f);
    return;
  }
  if (this.isTuple()) {
    const s = this.components;
    let f;
    if (Array.isArray(t))
      f = t.slice();
    else {
      if (t == null || typeof t != "object")
        throw new Error("invalid tuple value");
      f = s.map((b) => {
        if (!b.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(b.name in t))
          throw new Error(`missing value for component ${b.name}`);
        return t[b.name];
      });
    }
    if (f.length !== this.components.length)
      throw new Error("array is wrong length");
    f.forEach((b, c) => {
      var d;
      N(d = s[c], W0, w6).call(d, e, b, n, (l) => {
        f[c] = l;
      });
    }), r(f);
    return;
  }
  const i = n(this.type, t);
  i.then ? e.push(async function() {
    r(await i);
  }()) : r(i);
};
let U = V;
class C0 {
  /**
   *  @private
   */
  constructor(e, t, n) {
    /**
     *  The type of the fragment.
     */
    o(this, "type");
    /**
     *  The inputs for the fragment.
     */
    o(this, "inputs");
    Q6(e, R, "Fragment"), n = Object.freeze(n.slice()), w(this, { type: t, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(e) {
    if (typeof e == "string") {
      try {
        C0.from(JSON.parse(e));
      } catch {
      }
      return C0.from(T0(e));
    }
    if (e instanceof K)
      switch (e.peekKeyword(he)) {
        case "constructor":
          return b0.from(e);
        case "error":
          return F.from(e);
        case "event":
          return j.from(e);
        case "fallback":
        case "receive":
          return r0.from(e);
        case "function":
          return e0.from(e);
        case "struct":
          return U0.from(e);
      }
    else if (typeof e == "object") {
      switch (e.type) {
        case "constructor":
          return b0.from(e);
        case "error":
          return F.from(e);
        case "event":
          return j.from(e);
        case "fallback":
        case "receive":
          return r0.from(e);
        case "function":
          return e0.from(e);
        case "struct":
          return U0.from(e);
      }
      g(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    p(!1, "unsupported frgament object", "obj", e);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(e) {
    return b0.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(e) {
    return F.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(e) {
    return j.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(e) {
    return e0.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(e) {
    return U0.isFragment(e);
  }
}
class C6 extends C0 {
  /**
   *  @private
   */
  constructor(t, n, r, i) {
    super(t, n, i);
    /**
     *  The name of the fragment.
     */
    o(this, "name");
    p(typeof r == "string" && r.match(ge), "invalid identifier", "name", r), i = Object.freeze(i.slice()), w(this, { name: r });
  }
}
function t6(a, e) {
  return "(" + e.map((t) => t.format(a)).join(a === "full" ? ", " : ",") + ")";
}
class F extends C6 {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "error", t, n), Object.defineProperty(this, L, { value: N1 });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return e6(this.format("sighash")).substring(0, 10);
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
    return e !== "sighash" && t.push("error"), t.push(this.name + t6(e, this.inputs)), t.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(e) {
    if (F.isFragment(e))
      return e;
    if (typeof e == "string")
      return F.from(T0(e));
    if (e instanceof K) {
      const t = B6("error", e), n = c0(e);
      return B0(e), new F(R, t, n);
    }
    return new F(R, e.name, e.inputs ? e.inputs.map(U.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(e) {
    return e && e[L] === N1;
  }
}
class j extends C6 {
  /**
   *  @private
   */
  constructor(t, n, r, i) {
    super(t, "event", n, r);
    /**
     *  Whether this event is anonymous.
     */
    o(this, "anonymous");
    Object.defineProperty(this, L, { value: R1 }), w(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return e6(this.format("sighash"));
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
        inputs: this.inputs.map((r) => JSON.parse(r.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("event"), n.push(this.name + t6(t, this.inputs)), t !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(t, n) {
    return n = (n || []).map((i) => U.from(i)), new j(R, t, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(t) {
    if (j.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return j.from(T0(t));
      } catch {
        p(!1, "invalid event fragment", "obj", t);
      }
    else if (t instanceof K) {
      const n = B6("event", t), r = c0(t, !0), i = !!u0(t, M(["anonymous"])).has("anonymous");
      return B0(t), new j(R, n, r, i);
    }
    return new j(R, t.name, t.inputs ? t.inputs.map((n) => U.from(n, !0)) : [], !!t.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(t) {
    return t && t[L] === R1;
  }
}
class b0 extends C0 {
  /**
   *  @private
   */
  constructor(t, n, r, i, s) {
    super(t, n, r);
    /**
     *  Whether the constructor can receive an endowment.
     */
    o(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    o(this, "gas");
    Object.defineProperty(this, L, { value: O1 }), w(this, { payable: i, gas: s });
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
        inputs: this.inputs.map((r) => JSON.parse(r.format(t)))
      });
    const n = [`constructor${t6(t, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(t) {
    if (b0.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return b0.from(T0(t));
      } catch {
        p(!1, "invalid constuctor fragment", "obj", t);
      }
    else if (t instanceof K) {
      u0(t, M(["constructor"]));
      const n = c0(t), r = !!u0(t, Y5).has("payable"), i = ke(t);
      return B0(t), new b0(R, "constructor", n, r, i);
    }
    return new b0(R, "constructor", t.inputs ? t.inputs.map(U.from) : [], !!t.payable, t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(t) {
    return t && t[L] === O1;
  }
}
class r0 extends C0 {
  constructor(t, n, r) {
    super(t, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    o(this, "payable");
    Object.defineProperty(this, L, { value: I1 }), w(this, { payable: r });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(t) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (t === "json") {
      const r = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: r });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(t) {
    if (r0.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return r0.from(T0(t));
      } catch {
        p(!1, "invalid fallback fragment", "obj", t);
      }
    else if (t instanceof K) {
      const n = t.toString(), r = t.peekKeyword(M(["fallback", "receive"]));
      if (p(r, "type must be fallback or receive", "obj", n), t.popKeyword(M(["fallback", "receive"])) === "receive") {
        const b = c0(t);
        return p(b.length === 0, "receive cannot have arguments", "obj.inputs", b), u0(t, M(["payable"])), B0(t), new r0(R, [], !0);
      }
      let s = c0(t);
      s.length ? p(s.length === 1 && s[0].type === "bytes", "invalid fallback inputs", "obj.inputs", s.map((b) => b.format("minimal")).join(", ")) : s = [U.from("bytes")];
      const f = Te(t);
      if (p(f === "nonpayable" || f === "payable", "fallback cannot be constants", "obj.stateMutability", f), u0(t, M(["returns"])).has("returns")) {
        const b = c0(t);
        p(b.length === 1 && b[0].type === "bytes", "invalid fallback outputs", "obj.outputs", b.map((c) => c.format("minimal")).join(", "));
      }
      return B0(t), new r0(R, s, f === "payable");
    }
    if (t.type === "receive")
      return new r0(R, [], !0);
    if (t.type === "fallback") {
      const n = [U.from("bytes")], r = t.stateMutability === "payable";
      return new r0(R, n, r);
    }
    p(!1, "invalid fallback description", "obj", t);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(t) {
    return t && t[L] === I1;
  }
}
class e0 extends C6 {
  /**
   *  @private
   */
  constructor(t, n, r, i, s, f) {
    super(t, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    o(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    o(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    o(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    o(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    o(this, "gas");
    Object.defineProperty(this, L, { value: P1 }), s = Object.freeze(s.slice()), w(this, { constant: r === "view" || r === "pure", gas: f, outputs: s, payable: r === "payable", stateMutability: r });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return e6(this.format("sighash")).substring(0, 10);
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
        inputs: this.inputs.map((r) => JSON.parse(r.format(t))),
        outputs: this.outputs.map((r) => JSON.parse(r.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("function"), n.push(this.name + t6(t, this.inputs)), t !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(t6(t, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(t, n) {
    return n = (n || []).map((i) => U.from(i)), new e0(R, t, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(t) {
    if (e0.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return e0.from(T0(t));
      } catch {
        p(!1, "invalid function fragment", "obj", t);
      }
    else if (t instanceof K) {
      const r = B6("function", t), i = c0(t), s = Te(t);
      let f = [];
      u0(t, M(["returns"])).has("returns") && (f = c0(t));
      const b = ke(t);
      return B0(t), new e0(R, r, s, i, f, b);
    }
    let n = t.stateMutability;
    return n == null && (n = "payable", typeof t.constant == "boolean" ? (n = "view", t.constant || (n = "payable", typeof t.payable == "boolean" && !t.payable && (n = "nonpayable"))) : typeof t.payable == "boolean" && !t.payable && (n = "nonpayable")), new e0(R, t.name, n, t.inputs ? t.inputs.map(U.from) : [], t.outputs ? t.outputs.map(U.from) : [], t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(t) {
    return t && t[L] === P1;
  }
}
class U0 extends C6 {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "struct", t, n), Object.defineProperty(this, L, { value: U1 });
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
        return U0.from(T0(e));
      } catch {
        p(!1, "invalid struct fragment", "obj", e);
      }
    else if (e instanceof K) {
      const t = B6("struct", e), n = c0(e);
      return B0(e), new U0(R, t, n);
    }
    return new U0(R, e.name, e.inputs ? e.inputs.map(U.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(e) {
    return e && e[L] === U1;
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
const st = new RegExp(/^bytes([0-9]*)$/), ft = new RegExp(/^(u?int)([0-9]*)$/);
let D6 = null, B1 = 1024;
function bt(a, e, t, n) {
  let r = "missing revert data", i = null;
  const s = null;
  let f = null;
  if (t) {
    r = "execution reverted";
    const c = G(t);
    if (t = O(t), c.length === 0)
      r += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (c.length % 32 !== 4)
      r += " (could not decode reason; invalid data length)";
    else if (O(c.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], c.slice(4))[0], f = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, r += `: ${JSON.stringify(i)}`;
      } catch {
        r += " (could not decode reason; invalid string data)";
      }
    else if (O(c.slice(0, 4)) === "0x4e487b71")
      try {
        const d = Number(n.decode(["uint256"], c.slice(4))[0]);
        f = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [d]
        }, i = `Panic due to ${X.get(d) || "UNKNOWN"}(${d})`, r += `: ${i}`;
      } catch {
        r += " (could not decode panic code)";
      }
    else
      r += " (unknown custom error)";
  }
  const b = {
    to: e.to ? d0(e.to) : null,
    data: e.data || "0x"
  };
  return e.from && (b.from = d0(e.from)), Q0(r, "CALL_EXCEPTION", {
    action: a,
    data: t,
    reason: i,
    transaction: b,
    invocation: s,
    revert: f
  });
}
var g0, M0;
const I6 = class I6 {
  constructor() {
    x(this, g0);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(e) {
    const t = e.map((r) => N(this, g0, M0).call(this, U.from(r)));
    return new l6(t, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(e, t) {
    K1(t.length, e.length, "types/values length mismatch");
    const n = e.map((s) => N(this, g0, M0).call(this, U.from(s))), r = new l6(n, "_"), i = new H6();
    return r.encode(i, t), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(e, t, n) {
    const r = e.map((s) => N(this, g0, M0).call(this, U.from(s)));
    return new l6(r, "_").decode(new G6(t, n, B1));
  }
  static _setDefaultMaxInflation(e) {
    p(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), B1 = e;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return D6 == null && (D6 = new I6()), D6;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(e, t, n) {
    return bt(e, t, n, I6.defaultAbiCoder());
  }
};
g0 = new WeakSet(), M0 = function(e) {
  if (e.isArray())
    return new _5(N(this, g0, M0).call(this, e.arrayChildren), e.arrayLength, e.name);
  if (e.isTuple())
    return new l6(e.components.map((n) => N(this, g0, M0).call(this, n)), e.name);
  switch (e.baseType) {
    case "address":
      return new S5(e.name);
    case "bool":
      return new F5(e.name);
    case "string":
      return new J5(e.name);
    case "bytes":
      return new L5(e.name);
    case "":
      return new W5(e.name);
  }
  let t = e.type.match(ft);
  if (t) {
    let n = parseInt(t[2] || "256");
    return p(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new z5(n / 8, t[1] === "int", e.name);
  }
  if (t = e.type.match(st), t) {
    let n = parseInt(t[1]);
    return p(n !== 0 && n <= 32, "invalid bytes length", "param", e), new $5(n, e.name);
  }
  p(!1, "invalid type", "type", e.type);
};
let A6 = I6;
class ct {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    o(this, "fragment");
    /**
     *  The name of the Event.
     */
    o(this, "name");
    /**
     *  The full Event signature.
     */
    o(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    o(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    o(this, "args");
    const r = e.name, i = e.format();
    w(this, {
      fragment: e,
      name: r,
      signature: i,
      topic: t,
      args: n
    });
  }
}
class ot {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, r) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    o(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    o(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    o(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    o(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    o(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    o(this, "value");
    const i = e.name, s = e.format();
    w(this, {
      fragment: e,
      name: i,
      args: n,
      signature: s,
      selector: t,
      value: r
    });
  }
}
class dt {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment.
     */
    o(this, "fragment");
    /**
     *  The name of the Error.
     */
    o(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    o(this, "args");
    /**
     *  The full Error signature.
     */
    o(this, "signature");
    /**
     *  The selector for the Error.
     */
    o(this, "selector");
    const r = e.name, i = e.format();
    w(this, {
      fragment: e,
      name: r,
      args: n,
      signature: i,
      selector: t
    });
  }
}
class C1 {
  /**
   *  @_ignore:
   */
  constructor(e) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    o(this, "hash");
    /**
     *  @_ignore:
     */
    o(this, "_isIndexed");
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
const S1 = {
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
}, M1 = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (a) => `reverted with reason string ${JSON.stringify(a)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (a) => {
      let e = "unknown panic code";
      return a >= 0 && a <= 255 && S1[a.toString()] && (e = S1[a.toString()]), `reverted with panic code 0x${a.toString(16)} (${e})`;
    }
  }
};
var Y, Z, q, B, V0, T6, H0, k6;
const A0 = class A0 {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(e) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    x(this, V0);
    // Find an event definition by any means necessary (unless it is ambiguous)
    x(this, H0);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    o(this, "fragments");
    /**
     *  The Contract constructor.
     */
    o(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    o(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    o(this, "receive");
    x(this, Y, void 0);
    x(this, Z, void 0);
    x(this, q, void 0);
    //    #structs: Map<string, StructFragment>;
    x(this, B, void 0);
    let t = [];
    typeof e == "string" ? t = JSON.parse(e) : t = e, T(this, q, /* @__PURE__ */ new Map()), T(this, Y, /* @__PURE__ */ new Map()), T(this, Z, /* @__PURE__ */ new Map());
    const n = [];
    for (const s of t)
      try {
        n.push(C0.from(s));
      } catch (f) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(s)}:`, f.message);
      }
    w(this, {
      fragments: Object.freeze(n)
    });
    let r = null, i = !1;
    T(this, B, this.getAbiCoder()), this.fragments.forEach((s, f) => {
      let b;
      switch (s.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          w(this, { deploy: s });
          return;
        case "fallback":
          s.inputs.length === 0 ? i = !0 : (p(!r || s.payable !== r.payable, "conflicting fallback fragments", `fragments[${f}]`, s), r = s, i = r.payable);
          return;
        case "function":
          b = u(this, q);
          break;
        case "event":
          b = u(this, Z);
          break;
        case "error":
          b = u(this, Y);
          break;
        default:
          return;
      }
      const c = s.format();
      b.has(c) || b.set(c, s);
    }), this.deploy || w(this, {
      deploy: b0.from("constructor()")
    }), w(this, { fallback: r, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(e) {
    const t = e ? "minimal" : "full";
    return this.fragments.map((r) => r.format(t));
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
    return A6.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(e) {
    const t = N(this, V0, T6).call(this, e, null, !1);
    return p(t, "no matching function", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(e) {
    return !!N(this, V0, T6).call(this, e, null, !1);
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
    return N(this, V0, T6).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(e) {
    const t = Array.from(u(this, q).keys());
    t.sort((n, r) => n.localeCompare(r));
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      e(u(this, q).get(r), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(e) {
    const t = N(this, H0, k6).call(this, e, null, !1);
    return p(t, "no matching event", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(e) {
    return !!N(this, H0, k6).call(this, e, null, !1);
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
    return N(this, H0, k6).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(e) {
    const t = Array.from(u(this, Z).keys());
    t.sort((n, r) => n.localeCompare(r));
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      e(u(this, Z).get(r), n);
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
    if (f0(e)) {
      const r = e.toLowerCase();
      if (M1[r])
        return F.from(M1[r].signature);
      for (const i of u(this, Y).values())
        if (r === i.selector)
          return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const r = [];
      for (const [i, s] of u(this, Y))
        i.split(
          "("
          /* fix:) */
        )[0] === e && r.push(s);
      if (r.length === 0)
        return e === "Error" ? F.from("error Error(string)") : e === "Panic" ? F.from("error Panic(uint256)") : null;
      if (r.length > 1) {
        const i = r.map((s) => JSON.stringify(s.format())).join(", ");
        p(!1, `ambiguous error description (i.e. ${i})`, "name", e);
      }
      return r[0];
    }
    if (e = F.from(e).format(), e === "Error(string)")
      return F.from("error Error(string)");
    if (e === "Panic(uint256)")
      return F.from("error Panic(uint256)");
    const n = u(this, Y).get(e);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(e) {
    const t = Array.from(u(this, Y).keys());
    t.sort((n, r) => n.localeCompare(r));
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      e(u(this, Y).get(r), n);
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
    return u(this, B).decode(e, t);
  }
  _encodeParams(e, t) {
    return u(this, B).encode(e, t);
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
      p(n, "unknown error", "fragment", e), e = n;
    }
    return p(E0(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, E0(t, 4));
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
      p(n, "unknown error", "fragment", e), e = n;
    }
    return P0([
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
      p(n, "unknown function", "fragment", e), e = n;
    }
    return p(E0(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, E0(t, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      p(n, "unknown function", "fragment", e), e = n;
    }
    return P0([
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
      p(i, "unknown function", "fragment", e), e = i;
    }
    let n = "invalid length for result data";
    const r = t0(t);
    if (r.length % 32 === 0)
      try {
        return u(this, B).decode(e.outputs, r);
      } catch {
        n = "could not decode result data";
      }
    g(!1, n, "BAD_DATA", {
      value: O(r),
      info: { method: e.name, signature: e.format() }
    });
  }
  makeError(e, t) {
    const n = G(e, "data"), r = A6.getBuiltinCallException("call", t, n);
    if (r.message.startsWith("execution reverted (unknown custom error)")) {
      const f = O(n.slice(0, 4)), b = this.getError(f);
      if (b)
        try {
          const c = u(this, B).decode(b.inputs, n.slice(4));
          r.revert = {
            name: b.name,
            signature: b.format(),
            args: c
          }, r.reason = r.revert.signature, r.message = `execution reverted: ${r.reason}`;
        } catch {
          r.message = "execution reverted (coult not decode custom error)";
        }
    }
    const s = this.parseTransaction(t);
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
  encodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      p(n, "unknown function", "fragment", e), e = n;
    }
    return O(u(this, B).encode(e.outputs, t || []));
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
      p(i, "unknown event", "eventFragment", e), e = i;
    }
    g(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", { count: t.length, expectedCount: e.inputs.length });
    const n = [];
    e.anonymous || n.push(e.topicHash);
    const r = (i, s) => i.type === "string" ? e6(s) : i.type === "bytes" ? o0(O(s)) : (i.type === "bool" && typeof s == "boolean" ? s = s ? "0x01" : "0x00" : i.type.match(/^u?int/) ? s = q1(s) : i.type.match(/^bytes/) ? s = ze(s, 32) : i.type === "address" && u(this, B).encode(["address"], [s]), Ge(O(s), 32));
    for (t.forEach((i, s) => {
      const f = e.inputs[s];
      if (!f.indexed) {
        p(i == null, "cannot filter non-indexed parameters; must be null", "contract." + f.name, i);
        return;
      }
      i == null ? n.push(null) : f.baseType === "array" || f.baseType === "tuple" ? p(!1, "filtering with tuples or arrays not supported", "contract." + f.name, i) : Array.isArray(i) ? n.push(i.map((b) => r(f, b))) : n.push(r(f, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, t) {
    if (typeof e == "string") {
      const s = this.getEvent(e);
      p(s, "unknown event", "eventFragment", e), e = s;
    }
    const n = [], r = [], i = [];
    return e.anonymous || n.push(e.topicHash), p(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((s, f) => {
      const b = t[f];
      if (s.indexed)
        if (s.type === "string")
          n.push(e6(b));
        else if (s.type === "bytes")
          n.push(o0(b));
        else {
          if (s.baseType === "tuple" || s.baseType === "array")
            throw new Error("not implemented");
          n.push(u(this, B).encode([s.type], [b]));
        }
      else
        r.push(s), i.push(b);
    }), {
      data: u(this, B).encode(r, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, t, n) {
    if (typeof e == "string") {
      const m = this.getEvent(e);
      p(m, "unknown event", "eventFragment", e), e = m;
    }
    if (n != null && !e.anonymous) {
      const m = e.topicHash;
      p(f0(n[0], 32) && n[0].toLowerCase() === m, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const r = [], i = [], s = [];
    e.inputs.forEach((m, E) => {
      m.indexed ? m.type === "string" || m.type === "bytes" || m.baseType === "tuple" || m.baseType === "array" ? (r.push(U.from({ type: "bytes32", name: m.name })), s.push(!0)) : (r.push(m), s.push(!1)) : (i.push(m), s.push(!1));
    });
    const f = n != null ? u(this, B).decode(r, P0(n)) : null, b = u(this, B).decode(i, t, !0), c = [], d = [];
    let l = 0, y = 0;
    return e.inputs.forEach((m, E) => {
      let v = null;
      if (m.indexed)
        if (f == null)
          v = new C1(null);
        else if (s[E])
          v = new C1(f[y++]);
        else
          try {
            v = f[y++];
          } catch (I) {
            v = I;
          }
      else
        try {
          v = b[l++];
        } catch (I) {
          v = I;
        }
      c.push(v), d.push(m.name || null);
    }), x6.fromItems(c, d);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(e) {
    const t = G(e.data, "tx.data"), n = l0(e.value != null ? e.value : 0, "tx.value"), r = this.getFunction(O(t.slice(0, 4)));
    if (!r)
      return null;
    const i = u(this, B).decode(r.inputs, t.slice(4));
    return new ot(r, r.selector, i, n);
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
    return !t || t.anonymous ? null : new ct(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(e) {
    const t = O(e), n = this.getError(E0(t, 0, 4));
    if (!n)
      return null;
    const r = u(this, B).decode(n.inputs, E0(t, 4));
    return new dt(n, n.selector, r);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(e) {
    return e instanceof A0 ? e : typeof e == "string" ? new A0(JSON.parse(e)) : typeof e.formatJson == "function" ? new A0(e.formatJson()) : typeof e.format == "function" ? new A0(e.format("json")) : new A0(e);
  }
};
Y = new WeakMap(), Z = new WeakMap(), q = new WeakMap(), B = new WeakMap(), V0 = new WeakSet(), T6 = function(e, t, n) {
  if (f0(e)) {
    const i = e.toLowerCase();
    for (const s of u(this, q).values())
      if (i === s.selector)
        return s;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [s, f] of u(this, q))
      s.split(
        "("
        /* fix:) */
      )[0] === e && i.push(f);
    if (t) {
      const s = t.length > 0 ? t[t.length - 1] : null;
      let f = t.length, b = !0;
      C.isTyped(s) && s.type === "overrides" && (b = !1, f--);
      for (let c = i.length - 1; c >= 0; c--) {
        const d = i[c].inputs.length;
        d !== f && (!b || d !== f - 1) && i.splice(c, 1);
      }
      for (let c = i.length - 1; c >= 0; c--) {
        const d = i[c].inputs;
        for (let l = 0; l < t.length; l++)
          if (C.isTyped(t[l])) {
            if (l >= d.length) {
              if (t[l].type === "overrides")
                continue;
              i.splice(c, 1);
              break;
            }
            if (t[l].type !== d[l].baseType) {
              i.splice(c, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && t && t.length !== i[0].inputs.length) {
      const s = t[t.length - 1];
      (s == null || Array.isArray(s) || typeof s != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const s = i.map((f) => JSON.stringify(f.format())).join(", ");
      p(!1, `ambiguous function description (i.e. matches ${s})`, "key", e);
    }
    return i[0];
  }
  const r = u(this, q).get(e0.from(e).format());
  return r || null;
}, H0 = new WeakSet(), k6 = function(e, t, n) {
  if (f0(e)) {
    const i = e.toLowerCase();
    for (const s of u(this, Z).values())
      if (i === s.topicHash)
        return s;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [s, f] of u(this, Z))
      s.split(
        "("
        /* fix:) */
      )[0] === e && i.push(f);
    if (t) {
      for (let s = i.length - 1; s >= 0; s--)
        i[s].inputs.length < t.length && i.splice(s, 1);
      for (let s = i.length - 1; s >= 0; s--) {
        const f = i[s].inputs;
        for (let b = 0; b < t.length; b++)
          if (C.isTyped(t[b]) && t[b].type !== f[b].baseType) {
            i.splice(s, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const s = i.map((f) => JSON.stringify(f.format())).join(", ");
      p(!1, `ambiguous event description (i.e. matches ${s})`, "key", e);
    }
    return i[0];
  }
  const r = u(this, Z).get(j.from(e).format());
  return r || null;
};
let J0 = A0;
const Ee = BigInt(0);
function H(a) {
  return a == null ? null : a.toString();
}
function ut(a) {
  const e = {};
  a.to && (e.to = a.to), a.from && (e.from = a.from), a.data && (e.data = O(a.data));
  const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const r of t)
    !(r in a) || a[r] == null || (e[r] = l0(a[r], `request.${r}`));
  const n = "type,nonce".split(/,/);
  for (const r of n)
    !(r in a) || a[r] == null || (e[r] = p0(a[r], `request.${r}`));
  return a.accessList && (e.accessList = K5(a.accessList)), "blockTag" in a && (e.blockTag = a.blockTag), "enableCcipRead" in a && (e.enableCcipRead = !!a.enableCcipRead), "customData" in a && (e.customData = a.customData), "blobVersionedHashes" in a && a.blobVersionedHashes && (e.blobVersionedHashes = a.blobVersionedHashes.slice()), "kzg" in a && (e.kzg = a.kzg), "blobs" in a && a.blobs && (e.blobs = a.blobs.map((r) => He(r) ? O(r) : Object.assign({}, r))), e;
}
class S6 {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    o(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    o(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    o(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    o(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    o(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    o(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    o(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    o(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    o(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    o(this, "transactionIndex");
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
    const { address: e, blockHash: t, blockNumber: n, data: r, index: i, removed: s, topics: f, transactionHash: b, transactionIndex: c } = this;
    return {
      _type: "log",
      address: e,
      blockHash: t,
      blockNumber: n,
      data: r,
      index: i,
      removed: s,
      topics: f,
      transactionHash: b,
      transactionIndex: c
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
    return pt(this);
  }
}
var s6;
class lt {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    o(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    o(this, "to");
    /**
     *  The sender of the transaction.
     */
    o(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    o(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    o(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    o(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    o(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    o(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    o(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    o(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    o(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    o(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    o(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    o(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    o(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    o(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    o(this, "root");
    x(this, s6, void 0);
    T(this, s6, Object.freeze(e.logs.map((r) => new S6(r, t))));
    let n = Ee;
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
    return u(this, s6);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: e,
      from: t,
      contractAddress: n,
      hash: r,
      index: i,
      blockHash: s,
      blockNumber: f,
      logsBloom: b,
      logs: c,
      //byzantium, 
      status: d,
      root: l
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: s,
      blockNumber: f,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: H(this.cumulativeGasUsed),
      from: t,
      gasPrice: H(this.gasPrice),
      blobGasUsed: H(this.blobGasUsed),
      blobGasPrice: H(this.blobGasPrice),
      gasUsed: H(this.gasUsed),
      hash: r,
      index: i,
      logs: c,
      logsBloom: b,
      root: l,
      status: d,
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
    return Ae(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(e) {
    return g(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), xe(this, e);
  }
}
s6 = new WeakMap();
var w0;
const s1 = class s1 {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    o(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    o(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    o(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    o(this, "index");
    /**
     *  The transaction hash.
     */
    o(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    o(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    o(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    o(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    o(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    o(this, "gasLimit");
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
    o(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    o(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    o(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    o(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    o(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    o(this, "value");
    /**
     *  The chain ID.
     */
    o(this, "chainId");
    /**
     *  The signature.
     */
    o(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    o(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    o(this, "blobVersionedHashes");
    x(this, w0, void 0);
    this.provider = t, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, T(this, w0, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: e, blockHash: t, index: n, hash: r, type: i, to: s, from: f, nonce: b, data: c, signature: d, accessList: l, blobVersionedHashes: y } = this;
    return {
      _type: "TransactionResponse",
      accessList: l,
      blockNumber: e,
      blockHash: t,
      blobVersionedHashes: y,
      chainId: H(this.chainId),
      data: c,
      from: f,
      gasLimit: H(this.gasLimit),
      gasPrice: H(this.gasPrice),
      hash: r,
      maxFeePerGas: H(this.maxFeePerGas),
      maxPriorityFeePerGas: H(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: H(this.maxFeePerBlobGas),
      nonce: b,
      signature: d,
      to: s,
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
      const { tx: t, blockNumber: n } = await W6({
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
    const n = e ?? 1, r = t ?? 0;
    let i = u(this, w0), s = -1, f = i === -1;
    const b = async () => {
      if (f)
        return null;
      const { blockNumber: y, nonce: m } = await W6({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (m < this.nonce) {
        i = y;
        return;
      }
      if (f)
        return null;
      const E = await this.getTransaction();
      if (!(E && E.blockNumber != null))
        for (s === -1 && (s = i - 3, s < u(this, w0) && (s = u(this, w0))); s <= y; ) {
          if (f)
            return null;
          const v = await this.provider.getBlock(s, !0);
          if (v == null)
            return;
          for (const I of v)
            if (I === this.hash)
              return;
          for (let I = 0; I < v.length; I++) {
            const A = await v.getTransaction(I);
            if (A.from === this.from && A.nonce === this.nonce) {
              if (f)
                return null;
              const $ = await this.provider.getTransactionReceipt(A.hash);
              if ($ == null || y - $.blockNumber + 1 < n)
                return;
              let k0 = "replaced";
              A.data === this.data && A.to === this.to && A.value === this.value ? k0 = "repriced" : A.data === "0x" && A.from === A.to && A.value === Ee && (k0 = "cancelled"), g(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: k0 === "replaced" || k0 === "cancelled",
                reason: k0,
                replacement: A.replaceableTransaction(i),
                hash: A.hash,
                receipt: $
              });
            }
          }
          s++;
        }
    }, c = (y) => {
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
    }, d = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return c(d);
    if (d) {
      if (await d.confirmations() >= n)
        return c(d);
    } else if (await b(), n === 0)
      return null;
    return await new Promise((y, m) => {
      const E = [], v = () => {
        E.forEach((A) => A());
      };
      if (E.push(() => {
        f = !0;
      }), r > 0) {
        const A = setTimeout(() => {
          v(), m(Q0("wait for transaction timeout", "TIMEOUT"));
        }, r);
        E.push(() => {
          clearTimeout(A);
        });
      }
      const I = async (A) => {
        if (await A.confirmations() >= n) {
          v();
          try {
            y(c(A));
          } catch ($) {
            m($);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, I);
      }), this.provider.on(this.hash, I), i >= 0) {
        const A = async () => {
          try {
            await b();
          } catch ($) {
            if (z0($, "TRANSACTION_REPLACED")) {
              v(), m($);
              return;
            }
          }
          f || this.provider.once("block", A);
        };
        E.push(() => {
          this.provider.off("block", A);
        }), this.provider.once("block", A);
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
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Ae(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(e) {
    return g(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), g(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), xe(this, e);
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
    p(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
    const t = new s1(this, this.provider);
    return T(t, w0, e), t;
  }
};
w0 = new WeakMap();
let K6 = s1;
function xe(a, e) {
  return { orphan: "reorder-transaction", tx: a, other: e };
}
function Ae(a) {
  return { orphan: "drop-transaction", tx: a };
}
function pt(a) {
  return { orphan: "drop-log", log: {
    transactionHash: a.transactionHash,
    blockHash: a.blockHash,
    blockNumber: a.blockNumber,
    address: a.address,
    data: a.data,
    topics: Object.freeze(a.topics.slice()),
    index: a.index
  } };
}
class t1 extends S6 {
  /**
   * @_ignore:
   */
  constructor(t, n, r) {
    super(t, t.provider);
    /**
     *  The Contract Interface.
     */
    o(this, "interface");
    /**
     *  The matching event.
     */
    o(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    o(this, "args");
    const i = n.decodeEventLog(r, t.data, t.topics);
    w(this, { args: i, fragment: r, interface: n });
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
class ve extends S6 {
  /**
   * @_ignore:
   */
  constructor(t, n) {
    super(t, t.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    o(this, "error");
    w(this, { error: n });
  }
}
var G0;
class yt extends lt {
  /**
   *  @_ignore:
   */
  constructor(t, n, r) {
    super(r, n);
    x(this, G0, void 0);
    T(this, G0, t);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((t) => {
      const n = t.topics.length ? u(this, G0).getEvent(t.topics[0]) : null;
      if (n)
        try {
          return new t1(t, u(this, G0), n);
        } catch (r) {
          return new ve(t, r);
        }
      return t;
    });
  }
}
G0 = new WeakMap();
var f6;
class n1 extends K6 {
  /**
   *  @_ignore:
   */
  constructor(t, n, r) {
    super(r, n);
    x(this, f6, void 0);
    T(this, f6, t);
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
    const r = await super.wait(t, n);
    return r == null ? null : new yt(u(this, f6), this.provider, r);
  }
}
f6 = new WeakMap();
class Ne extends Ze {
  /**
   *  @_event:
   */
  constructor(t, n, r, i) {
    super(t, n, r);
    /**
     *  The log with no matching events.
     */
    o(this, "log");
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
class ht extends Ne {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, r, i) {
    super(e, t, n, new t1(i, e.interface, r));
    const s = e.interface.decodeEventLog(r, this.log.data, this.log.topics);
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
const _1 = BigInt(0);
function Re(a) {
  return a && typeof a.call == "function";
}
function Oe(a) {
  return a && typeof a.estimateGas == "function";
}
function M6(a) {
  return a && typeof a.resolveName == "function";
}
function Ie(a) {
  return a && typeof a.sendTransaction == "function";
}
function Pe(a) {
  if (a != null) {
    if (M6(a))
      return a;
    if (a.provider)
      return a.provider;
  }
}
var b6;
class mt {
  constructor(e, t, n) {
    x(this, b6, void 0);
    o(this, "fragment");
    if (w(this, { fragment: t }), t.inputs.length < n.length)
      throw new Error("too many arguments");
    const r = S0(e.runner, "resolveName"), i = M6(r) ? r : null;
    T(this, b6, async function() {
      const s = await Promise.all(t.inputs.map((f, b) => n[b] == null ? null : f.walkAsync(n[b], (d, l) => d === "address" ? Array.isArray(l) ? Promise.all(l.map((y) => j0(y, i))) : j0(l, i) : l)));
      return e.interface.encodeFilterTopics(t, s);
    }());
  }
  getTopicFilter() {
    return u(this, b6);
  }
}
b6 = new WeakMap();
function S0(a, e) {
  return a == null ? null : typeof a[e] == "function" ? a : a.provider && typeof a.provider[e] == "function" ? a.provider : null;
}
function v0(a) {
  return a == null ? null : a.provider || null;
}
async function a1(a, e) {
  const t = C.dereference(a, "overrides");
  p(typeof t == "object", "invalid overrides parameter", "overrides", a);
  const n = ut(t);
  return p(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), p(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Ue(a, e, t) {
  const n = S0(a, "resolveName"), r = M6(n) ? n : null;
  return await Promise.all(e.map((i, s) => i.walkAsync(t[s], (f, b) => (b = C.dereference(b, f), f === "address" ? j0(b, r) : b))));
}
function gt(a) {
  const e = async function(s) {
    const f = await a1(s, ["data"]);
    f.to = await a.getAddress(), f.from && (f.from = await j0(f.from, Pe(a.runner)));
    const b = a.interface, c = l0(f.value || _1, "overrides.value") === _1, d = (f.data || "0x") === "0x";
    b.fallback && !b.fallback.payable && b.receive && !d && !c && p(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", s), p(b.fallback || d, "cannot send data to receive-only contract", "overrides.data", f.data);
    const l = b.receive || b.fallback && b.fallback.payable;
    return p(l || c, "cannot send value to non-payable fallback", "overrides.value", f.value), p(b.fallback || d, "cannot send data to receive-only contract", "overrides.data", f.data), f;
  }, t = async function(s) {
    const f = S0(a.runner, "call");
    g(Re(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const b = await e(s);
    try {
      return await f.call(b);
    } catch (c) {
      throw J1(c) && c.data ? a.interface.makeError(c.data, b) : c;
    }
  }, n = async function(s) {
    const f = a.runner;
    g(Ie(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const b = await f.sendTransaction(await e(s)), c = v0(a.runner);
    return new n1(a.interface, c, b);
  }, r = async function(s) {
    const f = S0(a.runner, "estimateGas");
    return g(Oe(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await e(s));
  }, i = async (s) => await n(s);
  return w(i, {
    _contract: a,
    estimateGas: r,
    populateTransaction: e,
    send: n,
    staticCall: t
  }), i;
}
function wt(a, e) {
  const t = function(...c) {
    const d = a.interface.getFunction(e, c);
    return g(d, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: c }
    }), d;
  }, n = async function(...c) {
    const d = t(...c);
    let l = {};
    if (d.inputs.length + 1 === c.length && (l = await a1(c.pop()), l.from && (l.from = await j0(l.from, Pe(a.runner)))), d.inputs.length !== c.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const y = await Ue(a.runner, d.inputs, c);
    return Object.assign({}, l, await W6({
      to: a.getAddress(),
      data: a.interface.encodeFunctionData(d, y)
    }));
  }, r = async function(...c) {
    const d = await f(...c);
    return d.length === 1 ? d[0] : d;
  }, i = async function(...c) {
    const d = a.runner;
    g(Ie(d), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const l = await d.sendTransaction(await n(...c)), y = v0(a.runner);
    return new n1(a.interface, y, l);
  }, s = async function(...c) {
    const d = S0(a.runner, "estimateGas");
    return g(Oe(d), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await d.estimateGas(await n(...c));
  }, f = async function(...c) {
    const d = S0(a.runner, "call");
    g(Re(d), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const l = await n(...c);
    let y = "0x";
    try {
      y = await d.call(l);
    } catch (E) {
      throw J1(E) && E.data ? a.interface.makeError(E.data, l) : E;
    }
    const m = t(...c);
    return a.interface.decodeFunctionResult(m, y);
  }, b = async (...c) => t(...c).constant ? await r(...c) : await i(...c);
  return w(b, {
    name: a.interface.getFunctionName(e),
    _contract: a,
    _key: e,
    getFragment: t,
    estimateGas: s,
    populateTransaction: n,
    send: i,
    staticCall: r,
    staticCallResult: f
  }), Object.defineProperty(b, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const c = a.interface.getFunction(e);
      return g(c, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), c;
    }
  }), b;
}
function Tt(a, e) {
  const t = function(...r) {
    const i = a.interface.getEvent(e, r);
    return g(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: r }
    }), i;
  }, n = function(...r) {
    return new mt(a, t(...r), r);
  };
  return w(n, {
    name: a.interface.getEventName(e),
    _contract: a,
    _key: e,
    getFragment: t
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const r = a.interface.getEvent(e);
      return g(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), r;
    }
  }), n;
}
const v6 = Symbol.for("_ethersInternal_contract"), Be = /* @__PURE__ */ new WeakMap();
function kt(a, e) {
  Be.set(a[v6], e);
}
function D(a) {
  return Be.get(a[v6]);
}
function Et(a) {
  return a && typeof a == "object" && "getTopicFilter" in a && typeof a.getTopicFilter == "function" && a.fragment;
}
async function r1(a, e) {
  let t, n = null;
  if (Array.isArray(e)) {
    const i = function(s) {
      if (f0(s, 32))
        return s;
      const f = a.interface.getEvent(s);
      return p(f, "unknown fragment", "name", s), f.topicHash;
    };
    t = e.map((s) => s == null ? null : Array.isArray(s) ? s.map(i) : i(s));
  } else
    e === "*" ? t = [null] : typeof e == "string" ? f0(e, 32) ? t = [e] : (n = a.interface.getEvent(e), p(n, "unknown fragment", "event", e), t = [n.topicHash]) : Et(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [n.topicHash]) : p(!1, "unknown event name", "event", e);
  t = t.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const s = Array.from(new Set(i.map((f) => f.toLowerCase())).values());
      return s.length === 1 ? s[0] : (s.sort(), s);
    }
    return i.toLowerCase();
  });
  const r = t.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: r, topics: t };
}
async function Y0(a, e) {
  const { subs: t } = D(a);
  return t.get((await r1(a, e)).tag) || null;
}
async function F1(a, e, t) {
  const n = v0(a.runner);
  g(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e });
  const { fragment: r, tag: i, topics: s } = await r1(a, t), { addr: f, subs: b } = D(a);
  let c = b.get(i);
  if (!c) {
    const l = { address: f || a, topics: s }, y = (I) => {
      let A = r;
      if (A == null)
        try {
          A = a.interface.getEvent(I.topics[0]);
        } catch {
        }
      if (A) {
        const $ = A, k0 = r ? a.interface.decodeEventLog(r, I.data, I.topics) : [];
        Y6(a, t, k0, (Se) => new ht(a, Se, t, $, I));
      } else
        Y6(a, t, [], ($) => new Ne(a, $, t, I));
    };
    let m = [];
    c = { tag: i, listeners: [], start: () => {
      m.length || m.push(n.on(l, y));
    }, stop: async () => {
      if (m.length == 0)
        return;
      let I = m;
      m = [], await Promise.all(I), n.off(l, y);
    } }, b.set(i, c);
  }
  return c;
}
let X6 = Promise.resolve();
async function xt(a, e, t, n) {
  await X6;
  const r = await Y0(a, e);
  if (!r)
    return !1;
  const i = r.listeners.length;
  return r.listeners = r.listeners.filter(({ listener: s, once: f }) => {
    const b = Array.from(t);
    n && b.push(n(f ? null : s));
    try {
      s.call(a, ...b);
    } catch {
    }
    return !f;
  }), r.listeners.length === 0 && (r.stop(), D(a).subs.delete(r.tag)), i > 0;
}
async function Y6(a, e, t, n) {
  try {
    await X6;
  } catch {
  }
  const r = xt(a, e, t, n);
  return X6 = r, await r;
}
const p6 = ["then"];
var Rt;
const q0 = class q0 {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(e, t, n, r) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    o(this, "target");
    /**
     *  The contract Interface.
     */
    o(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    o(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    o(this, "filters");
    /**
     *  @_ignore:
     */
    o(this, Rt);
    /**
     *  The fallback or receive function if any.
     */
    o(this, "fallback");
    p(typeof e == "string" || oe(e), "invalid value for Contract target", "target", e), n == null && (n = null);
    const i = J0.from(t);
    w(this, { target: e, runner: n, interface: i }), Object.defineProperty(this, v6, { value: {} });
    let s, f = null, b = null;
    if (r) {
      const l = v0(n);
      b = new n1(this.interface, l, r);
    }
    let c = /* @__PURE__ */ new Map();
    if (typeof e == "string")
      if (f0(e))
        f = e, s = Promise.resolve(e);
      else {
        const l = S0(n, "resolveName");
        if (!M6(l))
          throw Q0("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        s = l.resolveName(e).then((y) => {
          if (y == null)
            throw Q0("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: e
            });
          return D(this).addr = y, y;
        });
      }
    else
      s = e.getAddress().then((l) => {
        if (l == null)
          throw new Error("TODO");
        return D(this).addr = l, l;
      });
    kt(this, { addrPromise: s, addr: f, deployTx: b, subs: c });
    const d = new Proxy({}, {
      get: (l, y, m) => {
        if (typeof y == "symbol" || p6.indexOf(y) >= 0)
          return Reflect.get(l, y, m);
        try {
          return this.getEvent(y);
        } catch (E) {
          if (!z0(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (l, y) => p6.indexOf(y) >= 0 ? Reflect.has(l, y) : Reflect.has(l, y) || this.interface.hasEvent(String(y))
    });
    return w(this, { filters: d }), w(this, {
      fallback: i.receive || i.fallback ? gt(this) : null
    }), new Proxy(this, {
      get: (l, y, m) => {
        if (typeof y == "symbol" || y in l || p6.indexOf(y) >= 0)
          return Reflect.get(l, y, m);
        try {
          return l.getFunction(y);
        } catch (E) {
          if (!z0(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (l, y) => typeof y == "symbol" || y in l || p6.indexOf(y) >= 0 ? Reflect.has(l, y) : l.interface.hasFunction(y)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(e) {
    return new q0(this.target, this.interface, e);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(e) {
    return new q0(e, this.interface, this.runner);
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
    const e = v0(this.runner);
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
    const n = v0(this.runner);
    return g(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((r, i) => {
      const s = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return r(this);
          n.once("block", s);
        } catch (f) {
          i(f);
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
    return D(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(e) {
    return typeof e != "string" && (e = e.format()), wt(this, e);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(e) {
    return typeof e != "string" && (e = e.format()), Tt(this, e);
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
    const { addr: r, addrPromise: i } = D(this), s = r || await i, { fragment: f, topics: b } = await r1(this, e), c = { address: s, topics: b, fromBlock: t, toBlock: n }, d = v0(this.runner);
    return g(d, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await d.getLogs(c)).map((l) => {
      let y = f;
      if (y == null)
        try {
          y = this.interface.getEvent(l.topics[0]);
        } catch {
        }
      if (y)
        try {
          return new t1(l, this.interface, y);
        } catch (m) {
          return new ve(l, m);
        }
      return new S6(l, d);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(e, t) {
    const n = await F1(this, "on", e);
    return n.listeners.push({ listener: t, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(e, t) {
    const n = await F1(this, "once", e);
    return n.listeners.push({ listener: t, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(e, ...t) {
    return await Y6(this, e, t, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(e) {
    if (e) {
      const r = await Y0(this, e);
      return r ? r.listeners.length : 0;
    }
    const { subs: t } = D(this);
    let n = 0;
    for (const { listeners: r } of t.values())
      n += r.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(e) {
    if (e) {
      const r = await Y0(this, e);
      return r ? r.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: t } = D(this);
    let n = [];
    for (const { listeners: r } of t.values())
      n = n.concat(r.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(e, t) {
    const n = await Y0(this, e);
    if (!n)
      return this;
    if (t) {
      const r = n.listeners.map(({ listener: i }) => i).indexOf(t);
      r >= 0 && n.listeners.splice(r, 1);
    }
    return (t == null || n.listeners.length === 0) && (n.stop(), D(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(e) {
    if (e) {
      const t = await Y0(this, e);
      if (!t)
        return this;
      t.stop(), D(this).subs.delete(t.tag);
    } else {
      const { subs: t } = D(this);
      for (const { tag: n, stop: r } of t.values())
        r(), t.delete(n);
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
    class t extends q0 {
      constructor(r, i = null) {
        super(r, e, i);
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
Rt = v6;
let n6 = q0;
function At() {
  return n6;
}
class Ce extends At() {
}
class _6 {
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
    o(this, "interface");
    /**
     *  The Contract deployment bytecode. Often called the initcode.
     */
    o(this, "bytecode");
    /**
     *  The ContractRunner to deploy the Contract as.
     */
    o(this, "runner");
    const r = J0.from(e);
    t instanceof Uint8Array || (typeof t == "object" && (t = t.object), t.startsWith("0x") || (t = "0x" + t)), t = O(G(t)), w(this, {
      bytecode: t,
      interface: r,
      runner: n || null
    });
  }
  attach(e) {
    return new n6(e, this.interface, this.runner);
  }
  /**
   *  Resolves to the transaction to deploy the contract, passing %%args%%
   *  into the constructor.
   */
  async getDeployTransaction(...e) {
    let t = {};
    const n = this.interface.deploy;
    if (n.inputs.length + 1 === e.length && (t = await a1(e.pop())), n.inputs.length !== e.length)
      throw new Error("incorrect number of arguments to constructor");
    const r = await Ue(this.runner, n.inputs, e), i = P0([this.bytecode, this.interface.encodeDeploy(r)]);
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
    const n = await this.runner.sendTransaction(t), r = C5(n);
    return new n6(r, this.interface, this.runner, n);
  }
  /**
   *  Return a new **ContractFactory** with the same ABI and bytecode,
   *  but connected to %%runner%%.
   */
  connect(e) {
    return new _6(this.interface, this.bytecode, e);
  }
  /**
   *  Create a new **ContractFactory** from the standard Solidity JSON output.
   */
  static fromSolidity(e, t) {
    p(e != null, "bad compiler output", "output", e), typeof e == "string" && (e = JSON.parse(e));
    const n = e.abi;
    let r = "";
    return e.bytecode ? r = e.bytecode : e.evm && e.evm.bytecode && (r = e.evm.bytecode), new this(n, r, t);
  }
}
const y6 = [
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
        internalType: "uint16",
        name: "emitterChainId",
        type: "uint16"
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "emitterAddress",
        type: "bytes32"
      },
      {
        indexed: !0,
        internalType: "uint64",
        name: "sequence",
        type: "uint64"
      }
    ],
    name: "TransferRedeemed",
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
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH",
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
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "_parseTransferCommon",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "toChain",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct BridgeStructs.Transfer",
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
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      }
    ],
    name: "attestToken",
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
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      }
    ],
    name: "bridgeContracts",
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
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "completeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "completeTransferAndUnwrapETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "completeTransferAndUnwrapETHWithPayload",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "completeTransferWithPayload",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "createWrapped",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32"
          }
        ],
        internalType: "struct BridgeStructs.AssetMeta",
        name: "meta",
        type: "tuple"
      }
    ],
    name: "encodeAssetMeta",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "toChain",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct BridgeStructs.Transfer",
        name: "transfer",
        type: "tuple"
      }
    ],
    name: "encodeTransfer",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "toChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "fromAddress",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes"
          }
        ],
        internalType: "struct BridgeStructs.TransferWithPayload",
        name: "transfer",
        type: "tuple"
      }
    ],
    name: "encodeTransferWithPayload",
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
    name: "finality",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "isTransferCompleted",
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
        name: "token",
        type: "address"
      }
    ],
    name: "isWrappedAsset",
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
        name: "token",
        type: "address"
      }
    ],
    name: "outstandingBridged",
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
        internalType: "bytes",
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parseAssetMeta",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32"
          }
        ],
        internalType: "struct BridgeStructs.AssetMeta",
        name: "meta",
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
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parsePayloadID",
    outputs: [
      {
        internalType: "uint8",
        name: "payloadID",
        type: "uint8"
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
        internalType: "struct BridgeStructs.RecoverChainId",
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
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parseRegisterChain",
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
            name: "chainId",
            type: "uint16"
          },
          {
            internalType: "uint16",
            name: "emitterChainID",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32"
          }
        ],
        internalType: "struct BridgeStructs.RegisterChain",
        name: "chain",
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
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parseTransfer",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "toChain",
            type: "uint16"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          }
        ],
        internalType: "struct BridgeStructs.Transfer",
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
        internalType: "bytes",
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parseTransferWithPayload",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "payloadID",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "tokenAddress",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "tokenChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32"
          },
          {
            internalType: "uint16",
            name: "toChain",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "fromAddress",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes"
          }
        ],
        internalType: "struct BridgeStructs.TransferWithPayload",
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
        internalType: "bytes",
        name: "encoded",
        type: "bytes"
      }
    ],
    name: "parseUpgrade",
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
            name: "chainId",
            type: "uint16"
          },
          {
            internalType: "bytes32",
            name: "newContract",
            type: "bytes32"
          }
        ],
        internalType: "struct BridgeStructs.UpgradeContract",
        name: "chain",
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
    name: "registerChain",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "submitRecoverChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenImplementation",
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
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "recipientChain",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "arbiterFee",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      }
    ],
    name: "transferTokens",
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
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "recipientChain",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      }
    ],
    name: "transferTokensWithPayload",
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
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes"
      }
    ],
    name: "updateWrapped",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
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
    name: "upgrade",
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
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "recipientChain",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "arbiterFee",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      }
    ],
    name: "wrapAndTransferETH",
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
        internalType: "uint16",
        name: "recipientChain",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32"
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      }
    ],
    name: "wrapAndTransferETHWithPayload",
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
        internalType: "uint16",
        name: "tokenChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "tokenAddress",
        type: "bytes32"
      }
    ],
    name: "wrappedAsset",
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
    stateMutability: "payable",
    type: "receive"
  }
], L1 = "0x6080806040523461001b576001600d5561522990816100218239f35b600080fdfe608060405260043610156200001d575b36156200001b57600080fd5b005b60003560e01c806301f5325514620002fe57806307dfd8fb14620002f85780630f50900814620002f25780630f5287b014620002ec578063178149e714620002e65780631a2be4da14620002e05780631c8475e414620002da5780631ff1e28614620002d45780632539464514620002ce5780632b51137514620002c85780632c3c02a414620002c25780632f3a3d5d14620002bc5780635f85426614620002b657806364d42b1714620002b0578063739fc8d114620002aa57806384acd1bb14620002a45780639981509f146200029e5780639a8a05921462000298578063a5799f931462000292578063aa4efa5b146200028c578063ad5c46481462000286578063ad66a5f11462000280578063b046223b146200027a578063b172b2221462000274578063b96c7e4d146200026e578063bee9cdfc1462000268578063c3f511c11462000262578063c48fa115146200025c578063c5a5ebda1462000256578063c68785191462000250578063cb4cfea8146200024a578063d56e2e241462000244578063d60b347f146200023e578063e039f2241462000238578063e80598101462000232578063e89bc401146200022c578063ea63738d1462000226578063f768441f1462000220578063fbe3c2cd146200021a578063fbeeacd914620002145763ff200cde036200000f5762001a10565b620019c5565b6200199e565b62001903565b6200186e565b6200184f565b6200174c565b62001729565b620016e6565b62001616565b620015cb565b620015b6565b6200150d565b62001305565b620012e6565b620010ae565b62001070565b62001050565b62000fd3565b62000fa4565b62000f79565b62000f49565b62000e2b565b62000e07565b62000bb6565b62000b8b565b62000b66565b62000b46565b62000ab8565b62000a74565b62000a2e565b620009b7565b620008e2565b6200088f565b6200085b565b620007b9565b620006df565b62000632565b620005bb565b62000559565b62000502565b634e487b7160e01b600052604160045260246000fd5b60e081019081106001600160401b038211176200033657604052565b62000304565b60c081019081106001600160401b038211176200033657604052565b6001600160401b0381116200033657604052565b608081019081106001600160401b038211176200033657604052565b60a081019081106001600160401b038211176200033657604052565b604081019081106001600160401b038211176200033657604052565b90601f801991011681019081106001600160401b038211176200033657604052565b60405190620003f1826200033c565b565b6040519061010082018281106001600160401b038211176200033657604052565b60405190620003f18262000388565b60405190620003f1826200031a565b6040519061016082018281106001600160401b038211176200033657604052565b90620003f16040519283620003c0565b6001600160401b0381116200033657601f01601f191660200190565b81601f82011215620004cc57803590620004998262000463565b92620004a96040519485620003c0565b82845260208383010111620004cc57816000926020809301838601378301015290565b600080fd5b6020600319820112620004cc57600435906001600160401b038211620004cc57620004ff916004016200047f565b90565b34620004cc5760a06200051f6200051936620004d1565b62004421565b6080604051918051835260ff602082015116602084015261ffff806040830151166040850152606082015116606084015201516080820152f35b34620004cc5760c0620005766200057036620004d1565b62003a18565b60a06040519160ff81511683526020810151602084015261ffff604082015116604084015260ff606082015116606084015260808101516080840152015160a0820152f35b34620004cc576020620005d8620005d236620004d1565b620047a1565b60ff60405191168152f35b600435906001600160a01b0382168203620004cc57565b61ffff811603620004cc57565b60a43590620003f182620005fa565b3590620003f182620005fa565b63ffffffff811603620004cc57565b60c0366003190112620004cc57620006db620006bc62000651620005e3565b6044356200065f81620005fa565b6200069660a43592620006728462000623565b620006836002600d54141562001cbd565b6002600d5560843590602435906200208d565b61ffff815116602082015192604083015160806060850151940151946064359362002421565b6001600d556040516001600160401b0390911681529081906020820190565b0390f35b34620004cc57620006f036620004d1565b600c54461462000787576200077560606200074f60e062000723620007196200001b966200410f565b909291926200276b565b6200074761014082015160005260056020526040600020600160ff19825416179055565b015162004591565b6200076c60408201620007654682511462003fa3565b5162004645565b015161ffff1690565b61ffff1661ffff196002541617600255565b60405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b6044820152606490fd5b34620004cc576020366003190112620004cc576001600160a01b03620007de620005e3565b166000526009602052602060ff604060002054166040519015158152f35b60005b838110620008105750506000910152565b8181015183820152602001620007ff565b906020916200083c81518092818552858086019101620007fc565b601f01601f1916010190565b906020620004ff92818152019062000821565b34620004cc57620006db6200087a6200087436620004d1565b62002e3d565b60405191829160208352602083019062000821565b34620004cc576040366003190112620004cc5761ffff600435620008b381620005fa565b1660005260086020526040600020602435600052602052602060018060a01b0360406000205416604051908152f35b34620004cc576200094260e062000916620007196200090136620004d1565b62000910600c544614620037ea565b6200410f565b6200093a61014082015160005260056020526040600020600160ff19825416179055565b01516200451f565b61ffff806040830151169060025416036200098157606001516200001b906200097b906001600160a01b03165b6001600160a01b031690565b62004236565b60405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b6044820152606490fd5b34620004cc57620006db620009d6620009d036620004d1565b62003b94565b6040519182918291909160c08060e083019460ff8151168452602081015160208501526040810151604085015261ffff8060608301511660608601526080820151608086015260a08201511660a08501520151910152565b34620004cc576020366003190112620004cc57602062000a5e600435600052600560205260ff6040600020541690565b6040519015158152f35b6000910312620004cc57565b34620004cc576000366003190112620004cc576001546040516001600160a01b039091168152602090f35b60ff811603620004cc57565b3590620003f18262000a9f565b34620004cc5760e0366003190112620004cc57620006db62000b3960405162000ae1816200031a565b60043562000aef8162000a9f565b81526024356020820152604435604082015260643562000b0f81620005fa565b6060820152608435608082015262000b2662000607565b60a082015260c43560c0820152620038c9565b6040519182918262000848565b34620004cc576000366003190112620004cc576020600c54604051908152f35b34620004cc576000366003190112620004cc57602060025460ff60405191831c168152f35b34620004cc576000366003190112620004cc576000546040516001600160a01b039091168152602090f35b6080366003190112620004cc576004803562000bd281620005fa565b604435916064359062000be58262000623565b62000bef62001b7d565b50600080546001600160a01b0394839160209062000c0f9088166200096f565b604051631a90a21960e01b815295869182905afa93841562000d9b57839462000dd0575b5062000c4134851062001bc9565b62000c4d843462001c4d565b9662000c5c8882111562001c5b565b6402540be40080890491049362000c7e62000c77836200238f565b8a62001c4d565b818115801562000da5575b5050845462000cb0919062000ca9908b166001600160a01b03166200096f565b9a62001c4d565b98803b1562000da15784604051809b8193630d0e30db60e41b83525af196871562000d9b5760209862000d6c9862000d7d575b50835462000d0990839062000d039084166001600160a01b03166200096f565b620036f6565b62000d306200096f6200096f6200096f61ffff94856002541698541660018060a01b031690565b9062000d4962000d3f62000414565b61ffff9096168652565b818a86015282604086015285606086015286608086015260243594511662002421565b6001600160401b0360405191168152f35b8062000d8d62000d949262000358565b8062000a68565b3862000ce3565b62001b71565b5080fd5b82829162000dc5575b8280929181923390f11562000d9b57813862000c89565b6108fc915062000dae565b62000df791945060203d811162000dff575b62000dee8183620003c0565b81019062001bb9565b923862000c33565b503d62000de2565b34620004cc576000366003190112620004cc57602061ffff60025416604051908152f35b34620004cc576200001b62000e7a60e062000e4e620007196200091036620004d1565b62000e7261014082015160005260056020526040600020600160ff19825416179055565b015162004421565b62000ec662000e8e604083015161ffff1690565b61ffff62000eaa62000ea360025461ffff1690565b61ffff1690565b9116908114908162000f2b575b811562000f21575b5062003f16565b608062000f096060830162000f0162000efa62000ee5835161ffff1690565b61ffff16600052600b60205260406000205490565b1562003f56565b5161ffff1690565b9101519061ffff16600052600b602052604060002055565b9050153862000ebf565b905062000f4262000f3e600c5446141590565b1590565b9062000eb7565b34620004cc576020366003190112620004cc57602062000a5e600435600052600660205260ff6040600020541690565b34620004cc576000366003190112620004cc576004546040516001600160a01b039091168152602090f35b34620004cc576020366003190112620004cc57602062000fcb60043562000ee581620005fa565b604051908152f35b34620004cc5760c0366003190112620004cc57620006db62000b3960405162000ffc816200033c565b6004356200100a8162000a9f565b815260243560208201526044356200102281620005fa565b6040820152606435620010358162000a9f565b6060820152608435608082015260a43560a082015262003860565b34620004cc576000366003190112620004cc576020600354604051908152f35b34620004cc576020366003190112620004cc576001600160a01b0362001095620005e3565b16600052600a6020526020604060002054604051908152f35b6080366003190112620004cc576004803590620010cb82620005fa565b604435620010d98162000623565b6064356001600160401b038111620004cc57620010fa90369084016200047f565b906200110562001b7d565b506000805490946001600160a01b039491829190602090620011299088166200096f565b604051631a90a21960e01b815294859182905afa92831562000d9b578793620012c1575b506200115b34841062001bc9565b62001167833462001c4d565b966402540be4008804906200118062000c77836200238f565b818115801562001296575b50508454620011ab919062000ca9908b166001600160a01b03166200096f565b98803b1562000da157819085604051809c8193630d0e30db60e41b83525af197881562000d9b57620006db9962001265996200127f575b5084546200120290849062000d039084166001600160a01b03166200096f565b620012296200096f6200096f6200096f61ffff94856002541699541660018060a01b031690565b91620012426200123862000414565b61ffff9097168752565b8260208701528360408701526060860152856080860152602435945116620024fd565b6040516001600160401b0390911681529081906020820190565b8062000d8d6200128f9262000358565b38620011e2565b828291620012b6575b8280929181923390f11562000d9b5781386200118b565b6108fc91506200129f565b620012de91935060203d811162000dff5762000dee8183620003c0565b91386200114d565b34620004cc57620006db6200087a620012ff36620004d1565b62003263565b604080600319360112620004cc576200131d620005e3565b602435916200132c8362000623565b805192602080938186019563313ce56760e01b8752600481526200135081620003a4565b6000809781925190845afa506200136662001a49565b86808651858101906395d89b4160e01b8252600481526200138781620003a4565b5190855afa5060ff6200147d6200096f6200146c88620013a662001a49565b958c8083518b8101906306fdde0360e01b825260048152620013c881620003a4565b51908b5afa5088806200141662001406620013f6620013e662001a49565b9584808251830101910162001a8b565b9a83808251830101910162001aed565b9382808251830101910162001aed565b920151910151906200145c600254986200145262001433620003e2565b60028152956001600160a01b039c8d16878f015261ffff8c1690870152565b60ff166060850152565b608083015260a082015262003860565b8a549095166001600160a01b031690565b91620014a38751968795869485946358cd21bf60e11b8652891c16916004850162001b42565b039134905af192831562000d9b57620006db9493620014d7575b5050516001600160401b0390911681529081906020820190565b620014fc929350803d1062001505575b620014f38183620003c0565b81019062001b2b565b903880620014bd565b503d620014e7565b60c0366003190112620004cc5762001524620005e3565b604435906200153382620005fa565b60843590620015428262000623565b60a435916001600160401b038311620004cc57620006db936200159362001572620006bc9536906004016200047f565b93620015846002600d54141562001cbd565b6002600d556024359062001d2f565b9061ffff82511690602083015192608060408201519101519360643593620024fd565b34620004cc576200001b620012ff36620004d1565b34620004cc576080620015e8620015e236620004d1565b62004591565b61ffff6060604051928051845260ff6020820151166020850152604081015160408501520151166060820152f35b34620004cc57600319602036820112620004cc576004356001600160401b0391828211620004cc57610100908236030112620004cc5762001656620003f3565b620016648260040162000aab565b81526024820135602082015260448201356040820152620016886064830162000616565b606082015260848201356080820152620016a560a4830162000616565b60a082015260c482013560c082015260e4820135928311620004cc57620016db62000b39926004620006db95369201016200047f565b60e08201526200393f565b34620004cc576020366003190112620004cc576001600160a01b036200170b620005e3565b166000526007602052602060ff604060002054166040519015158152f35b34620004cc576000366003190112620004cc576020600c54604051904614158152f35b34620004cc57620017916200176136620004d1565b6000805460405163607ec5ef60e11b8152939192839285926001600160a01b031691839182916004830162000848565b03915afa90811562000d9b57620006db9262001801928291839084926200181b575b50620017c19293506200276b565b620017d6620017d08262003826565b6200279e565b620017fa60a0620017eb60e084015162003a18565b9201516001600160401b031690565b9062002a65565b6040516001600160a01b0390911681529081906020820190565b915050620018439150620017c1923d8091833e6200183a8183620003c0565b81019062002632565b909291928392620017b3565b34620004cc57620006db620009d66200186836620004d1565b62003d2e565b34620004cc5760e06200188b6200188536620004d1565b62003c3f565b620006db6040519283926020845260ff8151166020850152602081015160408501526040810151606085015261ffff6060820151166080850152608081015160a0850152620018e560a082015160c086019061ffff169052565b60c08101518285015201516101008084015261012083019062000821565b34620004cc57620019186200176136620004d1565b03915afa90811562000d9b57620006db92620018019282918390849262001973575b50620019489293506200276b565b62001957620017d08262003826565b6200196c60a0620017eb60e084015162003a18565b9062002813565b91505062001992915062001948923d8091833e6200183a8183620003c0565b9092919283926200193a565b34620004cc576000366003190112620004cc57602061ffff60025460101c16604051908152f35b34620004cc576080620019e2620019dc36620004d1565b6200451f565b6060604051918051835260ff602082015116602084015261ffff604082015116604084015201516060820152f35b34620004cc576200001b6200087436620004d1565b60405190602082018281106001600160401b03821117620003365760405260008252565b3d1562001a79573d9062001a5d8262000463565b9162001a6d6040519384620003c0565b82523d6000602084013e565b606090565b5190620003f18262000a9f565b90816020910312620004cc5751620004ff8162000a9f565b81601f82011215620004cc57805162001abc8162000463565b9262001acc6040519485620003c0565b81845260208284010111620004cc57620004ff9160208085019101620007fc565b90602082820312620004cc5781516001600160401b038111620004cc57620004ff920162001aa3565b51906001600160401b0382168203620004cc57565b90816020910312620004cc57620004ff9062001b16565b9162001b6a60ff9163ffffffff60409497969716855260606020860152606085019062000821565b9416910152565b6040513d6000823e3d90fd5b6040519060a082018281106001600160401b03821117620003365760405260006080838281528260208201528260408201528260608201520152565b90816020910312620004cc575190565b1562001bd157565b60405162461bcd60e51b815260206004820152602260248201527f76616c756520697320736d616c6c6572207468616e20776f726d686f6c652066604482015261656560f01b6064820152608490fd5b634e487b7160e01b600052601160045260246000fd5b60841981019190821162001c4757565b62001c21565b9190820391821162001c4757565b1562001c6357565b60405162461bcd60e51b815260206004820152602c60248201527f66656520697320626967676572207468616e20616d6f756e74206d696e75732060448201526b776f726d686f6c652066656560a01b6064820152608490fd5b1562001cc557565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b5190620003f182620005fa565b90816020910312620004cc5751620004ff81620005fa565b9062001d3a62001b7d565b506001600160a01b038216600090815260096020526040902062001d60905b5460ff1690565b156200206f57604051634d4502c960e11b81526001600160a01b0383169260209290918381600481885afa90811562000d9b5760049185916000916200203b575b509560405192838092633d6c043b60e01b82525afa90811562000d9b5762001e289460009262002019575b5050905b62001e2e604051916000806020948581019063313ce56760e01b82526004815262001dfb81620003a4565b5190885afa5062001e1e62001e0f62001a49565b84808251830101910162001a8b565b958680926200234d565b620023aa565b9261ffff9462001e43866002541661ffff1690565b87871690810362001f935762001f5362001f3e8362001f388660008062001f479c8b62001f0f60405162001eed8382019486806370a0823160e01b978881528562001ea03060248301919091602081019260018060a01b03169052565b039562001eb6601f1997888101835282620003c0565b51908c5afa5062001ed962001eca62001a49565b86808251830101910162001bb9565b98309033906001600160a01b031662004942565b60405192830193845230602484015282604481015b03908101835282620003c0565b51908b5afa5062001f3262001f2362001a49565b8a808251830101910162001bb9565b62001c4d565b6200234d565b96879362002308565b976002541661ffff1690565b1462001f80575b505062001f6a62000d3f62000414565b8401526040830152606082015234608082015290565b62001f8b91620036f6565b388362001f5a565b6001600160a01b0383169562001fac8130338a62004942565b863b15620004cc57604051632770a7eb60e21b815230600482015260248101829052966000908890604490829084905af196871562000d9b578362001f539262001f3e9262001f479a62002002575b506200234d565b8062000d8d620020129262000358565b3862001ffb565b620020339250803d1062000dff5762000dee8183620003c0565b388062001dcc565b620020609150823d841162002067575b620020578183620003c0565b81019062001d17565b3862001da1565b503d6200204b565b60025461ffff169162001e28916001600160a01b0382169062001dd0565b91906200209962001b7d565b506001600160a01b0383166000908152600960205260409020620020bd9062001d59565b15620022c457604051634d4502c960e11b81526001600160a01b0384169360209290918381600481895afa90811562000d9b576004918591600091620022a2575b509660405192838092633d6c043b60e01b82525afa90811562000d9b5762001e289460009262002280575b5050915b6200217b604051926000806020958681019063313ce56760e01b8252600481526200215881620003a4565b5190865afa5062001e1e6200216c62001a49565b85808251830101910162001a8b565b60025461ffff969188881691879085908a16840362002210576040516370a0823160e01b81890181815230602484015262001f539562001f47956200220795909462001f389491936000938493928f92620021e49262001eed9187908190856044810162001ea0565b51908c5afa5062001f32620021f862001a49565b8b808251830101910162001bb9565b9788946200234d565b50506001600160a01b038416906200222b8130338562004942565b813b15620004cc57604051632770a7eb60e21b815230600482015260248101829052916000908390604490829084905af191821562000d9b578862001f4792620022079262001f53956200200257506200234d565b6200229a9250803d1062000dff5762000dee8183620003c0565b388062002129565b620022bd9150823d84116200206757620020578183620003c0565b38620020fe565b60025461ffff169262001e28916001600160a01b038216916200212d565b60ff6007199116019060ff821162001c4757565b60ff16604d811162001c4757600a0a90565b600090600860ff8216116200231b575090565b6200232a6200233091620022e2565b620022f6565b15620023395790565b634e487b7160e01b81526012600452602490fd5b90600860ff8216116200235e575090565b6200232a6200236d91620022e2565b90811562002379570490565b634e487b7160e01b600052601260045260246000fd5b6402540be4009081810291818304149015171562001c475790565b90600860ff821611620023bb575090565b6200232a620023ca91620022e2565b9081810291818304149015171562001c475790565b15620023e757565b60405162461bcd60e51b815260206004820152601260248201527119995948195e18d959591cc8185b5bdd5b9d60721b6044820152606490fd5b92620024c997959294620024696020989562002479946200244589881115620023df565b6200244f62000423565b60018152985b898c0152604089015261ffff166060880152565b608086015261ffff1660a0850152565b60c0830152600054620024a1906200249a906001600160a01b03166200096f565b92620038c9565b6002546040516358cd21bf60e11b81529687958694938593891c60ff16916004850162001b42565b03925af190811562000d9b57600091620024e1575090565b620004ff915060203d81116200150557620014f38183620003c0565b92620024c997929462002469602098979562002528946200251d620003f3565b600381529862002455565b3360c084015260e0830152600054620024a1906200254f906001600160a01b03166200096f565b926200393f565b5190620003f18262000623565b9080601f83011215620004cc578151916001600160401b03831162000336576040918251936020916200259c838360051b0187620003c0565b818652828087019260071b85010193818511620004cc578301915b848310620025c85750505050505090565b608083830312620004cc57836080918751620025e4816200036c565b85518152828601518382015288860151620025ff8162000a9f565b8982015260608087015190620026158262000a9f565b820152815201920191620025b7565b51908115158203620004cc57565b9091606082840312620004cc578151916001600160401b0392838111620004cc57810161016081860312620004cc576200266b62000432565b90620026778162001a7e565b8252620026876020820162002556565b60208301526200269a6040820162002556565b6040830152620026ad6060820162001d0a565b606083015260808101516080830152620026ca60a0820162001b16565b60a0830152620026dd60c0820162001a7e565b60c083015260e0810151858111620004cc5786620026fd91830162001aa3565b60e08301526101006200271281830162002556565b9083015261012080820151868111620004cc57876200273391840162002563565b90830152610140809101519082015293620027516020830162002624565b936040830151908111620004cc57620004ff920162001aa3565b15620027745750565b60405162461bcd60e51b8152602060048201529081906200279a90602483019062000821565b0390fd5b15620027a657565b60405162461bcd60e51b815260206004820152600f60248201526e34b73b30b634b21032b6b4ba3a32b960891b6044820152606490fd5b9162001b6a6001600160401b03916200280460409497969760608752606087019062000821565b90858203602087015262000821565b906200285061ffff60408401511660208401519061ffff16600052600860205260406000209060005260205260018060a01b036040600020541690565b916001600160a01b038316918215620028d5576200288160806200287860a085015162003e8a565b93015162003e8a565b92803b15620004cc57620028b19360008094604051968795869485936350c66be360e11b855260048501620027dd565b03925af1801562000d9b57620028c5575090565b8062000d8d620004ff9262000358565b60405162461bcd60e51b815260206004820152601d60248201527f7772617070656420617373657420646f6573206e6f74206578697374730000006044820152606490fd5b156200292257565b60405162461bcd60e51b815260206004820152602860248201527f63616e206f6e6c79207772617020746f6b656e732066726f6d20666f726569676044820152676e20636861696e7360c01b6064820152608490fd5b156200298057565b60405162461bcd60e51b815260206004820152601c60248201527f7772617070656420617373657420616c726561647920657869737473000000006044820152606490fd5b936001600160401b039060ff62002a0361ffff969b9a9995620029f460c09a9660e08b5260e08b019062000821565b9089820360208b015262000821565b9a1660408701521660608501526001600160a01b031660808401521660a08201520152565b6001600160a01b039091168152604060208201819052620004ff9291019062000821565b9062002a6160209282815194859201620007fc565b0190565b91909162002bb262002b68604083019462002a9962002a86875161ffff1690565b60025461ffff908116911614156200291a565b85516020858101805161ffff909316600090815260088352604080822094825293835292909220549195909162002b75919062002ae0906001600160a01b03161562002978565b62002b4262002af360a083015162003e8a565b9462002b12606062002b09608086015162003e8a565b94015160ff1690565b9562002b208c5161ffff1690565b908a519260405198899663c71f461560e01b8a890152309360248901620029c5565b039262002b58601f1994858101835282620003c0565b6040519485913085840162002a28565b03838101855284620003c0565b62002bbf6106f69362002b8a83860162000453565b9480865262004afe8487013960405195869162002bab858401809862002a4c565b9062002a4c565b03838101865285620003c0565b62002bfd62002bd0885161ffff1690565b865160405160f09290921b6001600160f01b03191693820193845260028401529192826022850162001f02565b5190209151906000f592833b15620004cc5751905161ffff909116600090815260086020908152604080832093835292815282822080546001600160a01b0319166001600160a01b03871690811790915582526009905220805460ff19166001179055565b1562002c6a57565b60405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21039b2b73232b960911b6044820152606490fd5b1562002ca857565b60405162461bcd60e51b815260206004820152601a60248201527f7472616e7366657220616c726561647920636f6d706c657465640000000000006044820152606490fd5b1562002cf557565b60405162461bcd60e51b815260206004820152601460248201527334b73b30b634b2103a30b933b2ba1031b430b4b760611b6044820152606490fd5b1562002d3957565b60405162461bcd60e51b815260206004820152602560248201527f6e6f207772617070657220666f72207468697320746f6b656e2063726561746560448201526419081e595d60da1b6064820152608490fd5b1562002d9457565b60405162461bcd60e51b815260206004820152602360248201527f696e76616c696420746f6b656e2c2063616e206f6e6c7920756e77726170205760448201526208aa8960eb1b6064820152608490fd5b1562002ded57565b60405162461bcd60e51b815260206004820152602260248201527f66656520686967686572207468616e207472616e7366657272656420616d6f756044820152611b9d60f21b6064820152608490fd5b600080546001600160a01b039062002e579082166200096f565b604093838551809363607ec5ef60e11b8252818062002e7b60049687830162000848565b03915afa801562000d9b578492859086926200323c575b509062002e9f916200276b565b62002eae620017d08362003826565b60e082019462002ebf865162003d2e565b8462002ecf608083015162003681565b94600360ff62002ee0855160ff1690565b161462003227575b62002f34610140820162002f1962002f1362000f3e8351600052600660205260ff6040600020541690565b62002ca0565b5160005260066020526040600020600160ff19825416179055565b606081015161ffff16906001600160401b0362002f6060a060808401519301516001600160401b031690565b169061ffff8093167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c1698b80a48062002fbb62002fa160a086015161ffff1690565b62002fb1836002541661ffff1690565b9216821462002ced565b606084015161ffff1691821603620031df575062002fe06200096f8484015162003681565b62002ff26020840151838316620037a9565b1686806200300c6200096f8988541660018060a01b031690565b926200301c898516821462002d8c565b855163313ce56760e01b60208201908152888252906200303c81620003a4565b51915afa506200307e620030636200305362001a49565b6020808251830101910162001a8b565b60c062003075826020870151620023aa565b940151620023aa565b9081151580620031d2575b15620031c3576200309d8383111562002de5565b803b15620031bf578784518092632e1a7d4d60e01b8252818381620030c9888c83019190602083019252565b03925af1801562000d9b57620031a8575b5086808280156200319d575b8280929181923390f11562000d9b57620031009162001c4d565b82549092906200311b9086166001600160a01b03166200096f565b91823b15620031995751632e1a7d4d60e01b815290810183815290939291869185919082908490829060200103925af191821562000d9b5785948594859462003182575b508391831562003177575b1690f11562000d9b575190565b6108fc92506200316a565b8062000d8d620031929262000358565b386200315f565b8680fd5b6108fc9150620030e6565b8062000d8d620031b89262000358565b38620030da565b8780fd5b50506200310090869062001c4d565b5033878716141562003089565b620032138291858501519061ffff16600052600860205260406000209060005260205260018060a01b036040600020541690565b166200322181151562002d31565b62002ff2565b62003236828716331462002c62565b62002ee8565b905062002e9f93506200325b91503d8087833e6200183a8183620003c0565b919362002e92565b600080546001600160a01b03906200327d9082166200096f565b92604093838551809263607ec5ef60e11b82528180620032a260049788830162000848565b03915afa801562000d9b57849085869162003658575b620032c59293506200276b565b620032d4620017d08262003826565b60e0810194620032e5865162003d2e565b92620032f5608085015162003681565b93600360ff62003306835160ff1690565b161462003643575b62003339610140850162002f1962002f1362000f3e8351600052600660205260ff6040600020541690565b606084015161ffff16936001600160401b036200336560a060808401519301516001600160401b031690565b169061ffff8096167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c1698a80a483620033c0620033a660a084015161ffff1690565b620033b6836002541661ffff1690565b9616861462002ced565b866060830195620033d3875161ffff1690565b908382160362003602575050620033f16200096f8584015162003681565b90620034046020840151898416620037a9565b8782169289808751602081019063313ce56760e01b82528881526200342981620003a4565b5190875afa506200345c620034416200305362001a49565b60c062003453826020860151620023aa565b930151620023aa565b998a151580620035f5575b15620035e6576200347b828c111562002de5565b9962003489885161ffff1690565b836200349a816002541661ffff1690565b911614620035d457843b15620004cc5786516340c10f1960e01b81523387820190815260208101839052909290600090849081906040010381838a5af192831562000d9b57620034f193620035bd575b5062001c4d565b9589156200351657505082546200311b925087166001600160a01b031690506200096f565b909295969498506200352d919397505161ffff1690565b906200353e816002541661ffff1690565b911614620035ac5750813b15620004cc5793516340c10f1960e01b81526001600160a01b03909416928401928352602083019190915260009183919082908490829060400103925af1801562000d9b576200359857505190565b8062000d8d620035a89262000358565b5190565b9150919250620035a89350620048fd565b8062000d8d620035cd9262000358565b38620034ea565b620034f19162001f32823387620048fd565b9950620034f1908a9062001c4d565b50338a8a16141562003467565b8386015161ffff909116600090815260086020908152604080832093835292905220546001600160a01b0316166200363c81151562002d31565b9062003404565b62003652868616331462002c62565b6200330e565b50505062003675620032c5913d8087833e6200183a8183620003c0565b919250829190620032b8565b6001600160a01b031981166200369d576001600160a01b031690565b60405162461bcd60e51b8152602060048201526013602482015272696e76616c69642045564d206164647265737360681b6044820152606490fd5b90601f820180921162001c4757565b608501908160851162001c4757565b6001600160a01b0381166000908152600a60205260409020549091810190811062001c47576001600160401b03811162003746576001600160a01b039091166000908152600a6020526040902055565b60405162461bcd60e51b815260206004820152603560248201527f7472616e736665722065786365656473206d6178206f75747374616e64696e6760448201527408189c9a5919d959081d1bdad95b88185b5bdd5b9d605a1b6064820152608490fd5b6001600160a01b0381166000908152600a60205260409020549091810390811162001c47576001600160a01b039091166000908152600a6020526040902055565b15620037f257565b60405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b6044820152606490fd5b62003835600c544614620037ea565b60806200385961ffff60608401511661ffff16600052600b60205260406000205490565b9101511490565b8051602082015191604081015191606082015160a06080840151930151936040519560ff60f81b809460f81b166020880152602187015261ffff60f01b9060f01b16604186015260f81b1660438401526044830152606482015260648152620004ff8162000388565b80519060208101519060408101519060608101519160808201519060c060a0840151930151946040519660ff60f81b9060f81b1660208801526021870152604186015261ffff60f01b809360f01b166061860152606385015260f01b166083830152608582015260858152620004ff816200033c565b620004ff60a582516020840151936040810151906060810151608082015160a08301519060e060c085015194015194604051998a9760ff60f81b9060f81b1660208901526021880152604187015261ffff60f01b809360f01b166061870152606386015260f01b1660838401526085830152620039c68151809260208686019101620007fc565b8101036085810184520182620003c0565b15620039df57565b60405162461bcd60e51b8152602060048201526011602482015270696e76616c69642041737365744d65746160781b6044820152606490fd5b906040519162003a28836200033c565b600090818452602084019082825260408501928084526060860193818552608087019082825260a0880192835262003a7460028960ff62003a6988620047a1565b1680915214620039d7565b602184511062003add57620003f19562003aa962003abb926064976021880151905262003aa18762004831565b61ffff169052565b62003ab485620047fe565b60ff169052565b62003ac683620048b9565b905262003ad382620048db565b90525114620039d7565b60405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606490fd5b6040519062003b29826200031a565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b1562003b5c57565b60405162461bcd60e51b815260206004820152601060248201526f34b73b30b634b2102a3930b739b332b960811b6044820152606490fd5b9062003b9f62003b1a565b9162003bbe600160ff62003bb384620047a1565b168086521462003b54565b62003bc98162004853565b602084015262003bd98162004897565b604084015261ffff62003bec8262004820565b166060840152606381511062003add576085816063620003f1930151608086015262003c2762003c1c8262004842565b61ffff1660a0870152565b62003c328162004864565b60c0860152511462003b54565b906040519161010083018381106001600160401b03821117620003365760405260009081845260208401918083526040850181815260608601828152608087019083825260a088019284845260c0890194855260e0890196606088528962003ca788620047a1565b60ff169081905262003cbc9060031462003b54565b62003cc78762004853565b905262003cd48662004897565b905262003ce18562004820565b61ffff16905262003cf284620048ca565b905262003cff8362004842565b61ffff16905262003d1082620048ec565b9052805162003d1f9062001c37565b62003d2a916200470b565b9052565b9062003d3962003b1a565b9160ff62003d4782620047a1565b166001810362003d5f5750620004ff91925062003b94565b60030362003dda5762003dc660a062003d7c62003dd19362003c3f565b60038652602081015160208701526040810151604087015262003db362003da8606083015161ffff1690565b61ffff166060880152565b60808101516080870152015161ffff1690565b61ffff1660a0840152565b600060c0830152565b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a59081c185e5b1bd859081a5960721b6044820152606490fd5b634e487b7160e01b600052603260045260246000fd5b600019811462001c475760010190565b9062003e468262000463565b62003e556040519182620003c0565b828152809262003e68601f199162000463565b0190602036910137565b90815181101562003e84570160200190565b62003e14565b60005b602081108062003ef8575b1562003eaf5762003ea99062003e2a565b62003e8d565b9062003ebb8262003e3a565b9160005b81811062003ecd5750505090565b602081101562003e8457808362003ef2921a62003eeb828762003e72565b5362003e2a565b62003ebf565b1562003e845781811a60f81b6001600160f81b031916151562003e98565b1562003f1e57565b60405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b6044820152606490fd5b1562003f5e57565b60405162461bcd60e51b815260206004820152601860248201527f636861696e20616c7265616479207265676973746572656400000000000000006044820152606490fd5b1562003fab57565b60405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b6044820152606490fd5b6040519061016082018281106001600160401b038211176200033657604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e08201528261010082015260606101208201520152565b604051906200405a82620003a4565b60168252753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020830152565b604051906200408e82620003a4565b601982527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020830152565b60405190606082018281106001600160401b0382111762000336576040526022825261195960f21b6040837f676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d60208201520152565b62004159906200411e62003fe4565b5060008054909182916200413d906200096f906001600160a01b031681565b604051808096819463607ec5ef60e11b83526004830162000848565b03915afa91821562000d9b5781928291839162004211575b50811562004209575050606082015161ffff1661ffff6200419d62000ea360025461ffff9060101c1690565b911603620041fd57608082015160035403620041f157620041d1610140830151600052600560205260ff6040600020541690565b620041e5575090600190620004ff62001a25565b9091620004ff620040ba565b9091620004ff6200407f565b9091620004ff6200404b565b929390929150565b9150506200422c9192503d8084833e6200183a8183620003c0565b9192913862004171565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc908154813b1562004312577f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a499060018060a01b039081841694856bffffffffffffffffffffffff60a01b83161790556200430c604051600080968192897fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a263204a7f0760e21b602082019081526004825290620042f781620003a4565b51915af46200430562001a49565b906200276b565b169180a3565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b156200437557565b60405162461bcd60e51b815260206004820152600c60248201526b77726f6e67206d6f64756c6560a01b6044820152606490fd5b15620043b157565b60405162461bcd60e51b815260206004820152600c60248201526b3bb937b7339030b1ba34b7b760a11b6044820152606490fd5b15620043ed57565b60405162461bcd60e51b815260206004820152600c60248201526b0eee4dedcce40d8cadccee8d60a31b6044820152606490fd5b906200442c62001b7d565b91620044526a546f6b656e427269646765620044488362004875565b808652146200436d565b62004473600160ff6200446584620047ed565b1680602087015214620043a9565b6023815110620044bc576045620003f19161ffff8060238301511660408701526200449e826200480f565b166060860152620044af81620048a8565b60808601525114620043e5565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606490fd5b6040519062004507826200036c565b60006060838281528260208201528260408201520152565b906200452a620044f8565b91620045466a546f6b656e427269646765620044488362004875565b62004559600260ff6200446584620047ed565b6023815110620044bc57602381015161ffff166040840152620003f190604390620045848162004886565b60608601525114620043e5565b906200459c620044f8565b91620045b86a546f6b656e427269646765620044488362004875565b620045cb600360ff6200446584620047ed565b604181511062004608576043816041620003f1930151604086015262004600620045f58262004820565b61ffff166060870152565b5114620043e5565b60405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606490fd5b4681036200465257600c55565b60405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b6044820152606490fd5b156200469457565b60405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606490fd5b15620046d257565b60405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606490fd5b62004723826200471b81620036d8565b10156200468c565b6200473c81516200473484620036e7565b1115620046ca565b8162004755575050604051600081526020810160405290565b60405191601f8116916085831560051b80858701019484860193010101905b8084106200478d5750508252601f01601f191660405290565b909283518152602080910193019062004774565b6001815110620047b2576001015190565b60405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606490fd5b6021815110620047b2576021015190565b6024815110620047b2576024015190565b6025815110620044bc576025015190565b6043815110620044bc576043015190565b6023815110620044bc576023015190565b6065815110620044bc576065015190565b602181511062004608576021015190565b608581511062004608576085015190565b602081511062003add576020015190565b604381511062003add576043015190565b604181511062003add576041015190565b604581511062003add576045015190565b604481511062003add576044015190565b606381511062003add576063015190565b606481511062003add576064015190565b608581511062003add576085015190565b60405163a9059cbb60e01b60208201526001600160a01b03929092166024830152604480830193909352918152620003f1916200493c606483620003c0565b620049fe565b6040516323b872dd60e01b60208201526001600160a01b039283166024820152929091166044830152606480830193909352918152620003f1916200493c8262000388565b90816020910312620004cc57620004ff9062002624565b15620049a657565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b6040516001600160a01b03919091169162004a1982620003a4565b6020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656484840152803b1562004a9a576000828192828762004a709796519301915af162004a6962001a49565b9062004adf565b8051908162004a7e57505050565b82620003f19362004a9493830101910162004987565b6200499e565b60405162461bcd60e51b815260048101859052601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b9091901562004aec575090565b815115620027745750805190602001fdfe6080604052346100a3576106f6803803809161001a826100be565b60803960408160800191126100a35761003161010c565b60a05191906001600160401b0383116100a35781609f840112156100a35782608001519261005e84610122565b9261006c60405194856100e9565b84845260a085830101116100a3576100949361008f9160a060208601910161013d565b610160565b6040516101f690816105008239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b038211908210176100e457604052565b6100a8565b601f909101601f19168101906001600160401b038211908210176100e457604052565b608051906001600160a01b03821682036100a357565b6001600160401b0381116100e457601f01601f191660200190565b60005b8381106101505750506000910152565b8181015183820152602001610140565b90813b156102c257604051635c60da1b60e01b8082526020939092916001600160a01b038216918582600481865afa918215610298576101ef926101af916000916102a5575b503b1515610340565b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b03909216919091179055565b60405192817f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511580159061029d575b610230575b5050505050565b6004848693819382525afa9182156102985761025e93600093610269575b50506102586103a5565b916103fe565b503880808080610229565b610289929350803d10610291575b61028181836100e9565b810190610315565b90388061024e565b503d610277565b610334565b506000610224565b6102bc9150883d8a116102915761028181836100e9565b386101a6565b60405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b6064820152608490fd5b908160209103126100a357516001600160a01b03811681036100a35790565b6040513d6000823e3d90fd5b1561034757565b60405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608490fd5b60405190606082016001600160401b038111838210176100e45760405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b9190823b15610451576000816104469460208394519201905af43d15610449573d9061042982610122565b9161043760405193846100e9565b82523d6000602084013e6104a5565b90565b6060906104a5565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b909190156104b1575090565b8151156104c15750805190602001fd5b6044604051809262461bcd60e51b8252602060048301526104f1815180928160248601526020868601910161013d565b601f01601f19168101030190fdfe608080604052366100c4577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054635c60da1b60e01b8252602090829060049082906001600160a01b03165afa9081156100b857600091610060575b5061015b565b6020903d82116100b0575b601f8201601f1916810167ffffffffffffffff81118282101761009c5761009693506040520161017a565b3861005a565b634e487b7160e01b84526041600452602484fd5b3d915061006b565b6040513d6000823e3d90fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054604051635c60da1b60e01b815290602090829060049082906001600160a01b03165afa9081156100b85760009161011d575061015b565b60203d8111610154575b601f8101601f1916820167ffffffffffffffff81118382101761009c5761009693506040528101906101a1565b503d610127565b6000808092368280378136915af43d82803e15610176573d90f35b3d90fd5b602090607f19011261019c576080516001600160a01b038116810361019c5790565b600080fd5b9081602091031261019c57516001600160a01b038116810361019c579056fea2646970667358221220a928e3b00b7d19d8e2f067361e93c7712de3e243b0b8be428e9ac989960b767464736f6c63430008130033a26469706673582212200ab8408b24ad8ea6b955a8d00252b04da580f860c567cd433865e841fd49531564736f6c63430008130033", vt = (a) => a.length > 1;
class a6 extends _6 {
  constructor(...e) {
    vt(e) ? super(...e) : super(y6, L1, e[0]);
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
    return new J0(y6);
  }
  static connect(e, t) {
    return new Ce(e, y6, t);
  }
}
o(a6, "bytecode", L1), o(a6, "abi", y6);
const h6 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenBridge_",
        type: "address"
      },
      {
        internalType: "address",
        name: "wethAddress",
        type: "address"
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
      },
      {
        internalType: "bool",
        name: "unwrapWeth_",
        type: "bool"
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
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        indexed: !0,
        internalType: "struct TokenBridgeRelayerStructs.SwapRateUpdate[]",
        name: "swapRates",
        type: "tuple[]"
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
        internalType: "uint16",
        name: "emitterChainId",
        type: "uint16"
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "emitterAddress",
        type: "bytes32"
      },
      {
        indexed: !0,
        internalType: "uint64",
        name: "sequence",
        type: "uint64"
      }
    ],
    name: "TransferRedeemed",
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
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH",
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
        internalType: "address",
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
        name: "targetChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8"
      }
    ],
    name: "calculateRelayerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "feeInTokenDenomination",
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
    inputs: [
      {
        internalType: "bytes",
        name: "encodedTransferMessage",
        type: "bytes"
      }
    ],
    name: "completeTransferWithRelay",
    outputs: [],
    stateMutability: "payable",
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
    name: "decodeTransferWithRelay",
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
            name: "targetRecipient",
            type: "bytes32"
          }
        ],
        internalType: "struct TokenBridgeRelayerStructs.TransferWithRelay",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8"
      }
    ],
    name: "denormalizeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
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
    name: "deregisterToken",
    outputs: [],
    stateMutability: "nonpayable",
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
            name: "targetRecipient",
            type: "bytes32"
          }
        ],
        internalType: "struct TokenBridgeRelayerStructs.TransferWithRelay",
        name: "transfer",
        type: "tuple"
      }
    ],
    name: "encodeTransferWithRelay",
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
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      }
    ],
    name: "fetchLocalAddressFromTransferMessage",
    outputs: [
      {
        internalType: "address",
        name: "localAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAcceptedTokensList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
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
    name: "isAcceptedToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8"
      }
    ],
    name: "normalizeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
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
    name: "registerToken",
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
    inputs: [],
    name: "relayerFeePrecision",
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
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "swapRate",
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
    name: "swapRatePrecision",
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
    name: "tokenBridge",
    outputs: [
      {
        internalType: "contract ITokenBridge",
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
        name: "targetRecipient",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "batchId",
        type: "uint32"
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
    inputs: [],
    name: "unwrapWeth",
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
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "relayerFeePrecision_",
        type: "uint256"
      }
    ],
    name: "updateRelayerFeePrecision",
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
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        internalType: "struct TokenBridgeRelayerStructs.SwapRateUpdate[]",
        name: "swapRateUpdate",
        type: "tuple[]"
      }
    ],
    name: "updateSwapRate",
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
        name: "swapRatePrecision_",
        type: "uint256"
      }
    ],
    name: "updateSwapRatePrecision",
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
        internalType: "bool",
        name: "unwrapWeth_",
        type: "bool"
      }
    ],
    name: "updateUnwrapWethFlag",
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
  },
  {
    inputs: [
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
        name: "targetRecipient",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "batchId",
        type: "uint32"
      }
    ],
    name: "wrapAndTransferEthWithRelay",
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
    stateMutability: "payable",
    type: "receive"
  }
], $1 = "0x60806040523480156200001157600080fd5b50604051620049823803806200498283398101604081905262000034916200038c565b6001600f556001600160a01b038516620000955760405162461bcd60e51b815260206004820152601c60248201527f696e76616c696420746f6b656e2062726964676520616464726573730000000060448201526064015b60405180910390fd5b6001600160a01b038416620000ed5760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642077657468206164647265737300000000000000000000000060448201526064016200008c565b6001600160a01b038316620001455760405162461bcd60e51b815260206004820152601560248201527f696e76616c69642066656520726563697069656e74000000000000000000000060448201526064016200008c565b6001600160a01b0382166200019d5760405162461bcd60e51b815260206004820152601760248201527f696e76616c6964206f776e657220617373697374616e7400000000000000000060448201526064016200008c565b600180546001600160a01b03191633179055600380546001600160a01b0319166001600160a01b038516179055600680546001600160a01b0319166001600160a01b03871617905560008054600160201b600160c01b0319166401000000006001600160a01b03871602179055600280546001600160a01b0319166001600160a01b0384161790556000805462ff0000191662010000831515021790556000859050620002c0816001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000282573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a8919062000410565b6000805461ffff191661ffff92909216919091179055565b6200034b816001600160a01b03166384acd1bb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200032991906200043d565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b620003596305f5e100600755565b620003676305f5e100600855565b5050505050506200045d565b6001600160a01b03811681146200038957600080fd5b50565b600080600080600060a08688031215620003a557600080fd5b8551620003b28162000373565b6020870151909550620003c58162000373565b6040870151909450620003d88162000373565b6060870151909350620003eb8162000373565b608087015190925080151581146200040257600080fd5b809150509295509295909350565b6000602082840312156200042357600080fd5b815161ffff811681146200043657600080fd5b9392505050565b6000602082840312156200045057600080fd5b8151620004368162000373565b614515806200046d6000396000f3fe6080604052600436106102815760003560e01c80636805b84b1161014f5780639fe089ad116100c1578063cd601c781161007a578063cd601c781461083b578063df160d761461085b578063e30c39781461087d578063ea1d2e4a1461089b578063ffa1ad74146108bb578063fff982a8146108ec57600080fd5b80639fe089ad1461076b578063a2f32c8f14610798578063ad5c4648146107b8578063b5419523146107dd578063c6328a46146107fd578063c9c22f9f1461081b57600080fd5b80638da5cb5b116101135780638da5cb5b146106ac5780638e151dd1146106ca57806390a1afaa146106ea57806394cc743d1461070a5780639a8a05921461072a5780639cf278cd1461074d57600080fd5b80636805b84b146105db57806368aa9ef4146105fa5780637c9dec7a146106185780638335572f1461066e57806384acd1bb1461068e57600080fd5b80632def3e16116101f3578063415828bf116101ac578063415828bf14610517578063469048401461052c57806351e2d7b51461054a5780635b9cf0e11461056a578063640d946b1461058a57806366775a6b146105aa57600080fd5b80632def3e16146104145780632efe4f42146104345780632f25e25f1461046a57806339ba66111461047d5780633b6e750f1461049d5780633d62cca0146104e657600080fd5b8063203c509511610245578063203c50951461033357806327105ab91461035357806328ded8e31461037357806329ac8361146103935780632ca8008c146103a65780632d77e8fe146103dc57600080fd5b8063016aa2051461028d578063038c0b66146102af5780631019d654146102c45780631a282195146102f45780631acdab4b1461031457600080fd5b3661028857005b600080fd5b34801561029957600080fd5b506102ad6102a83660046137da565b61090c565b005b3480156102bb57600080fd5b506102ad6109d6565b6102d76102d2366004613825565b610ac3565b6040516001600160401b0390911681526020015b60405180910390f35b34801561030057600080fd5b506102ad61030f36600461389a565b610c63565b34801561032057600080fd5b506007545b6040519081526020016102eb565b34801561033f57600080fd5b506102ad61034e3660046137da565b610cec565b34801561035f57600080fd5b5061032561036e3660046138d7565b610e36565b34801561037f57600080fd5b5061032561038e3660046138d7565b610e70565b6102d76103a13660046138fc565b610e9e565b3480156103b257600080fd5b506103256103c1366004613946565b6001600160a01b03166000908152600a602052604090205490565b3480156103e857600080fd5b506103fc6103f7366004613a3e565b61113c565b6040516001600160a01b0390911681526020016102eb565b34801561042057600080fd5b506102ad61042f366004613abd565b61125c565b34801561044057600080fd5b5061032561044f366004613946565b6001600160a01b03166000908152600b602052604090205490565b6102ad610478366004613ae9565b61131a565b34801561048957600080fd5b50610325610498366004613b5a565b611647565b3480156104a957600080fd5b506104d66104b8366004613946565b6001600160a01b03166000908152600d602052604090205460ff1690565b60405190151581526020016102eb565b3480156104f257600080fd5b50610325610501366004613ba5565b61ffff1660009081526009602052604090205490565b34801561052357600080fd5b50600854610325565b34801561053857600080fd5b506003546001600160a01b03166103fc565b34801561055657600080fd5b506102ad610565366004613abd565b6116fa565b34801561057657600080fd5b506102ad610585366004613abd565b611824565b34801561059657600080fd5b506102ad6105a5366004613bc2565b61193f565b3480156105b657600080fd5b506103256105c5366004613ba5565b61ffff166000908152600c602052604090205490565b3480156105e757600080fd5b506000546301000000900460ff166104d6565b34801561060657600080fd5b506002546001600160a01b03166103fc565b34801561062457600080fd5b50610638610633366004613a3e565b611b83565b6040516102eb9190815160ff16815260208083015190820152604080830151908201526060918201519181019190915260800190565b34801561067a57600080fd5b506102ad61068936600461389a565b611cb4565b34801561069a57600080fd5b506005546001600160a01b03166103fc565b3480156106b857600080fd5b506001546001600160a01b03166103fc565b3480156106d657600080fd5b506103256106e5366004613c49565b611d3b565b3480156106f657600080fd5b506102ad610705366004613abd565b611e1b565b34801561071657600080fd5b506102ad6107253660046137da565b611ed9565b34801561073657600080fd5b5060005460405161ffff90911681526020016102eb565b34801561075957600080fd5b5060005462010000900460ff166104d6565b34801561077757600080fd5b5061078b610786366004613c67565b611fa5565b6040516102eb9190613d25565b3480156107a457600080fd5b506102ad6107b3366004613ba5565b612050565b3480156107c457600080fd5b50600054600160201b90046001600160a01b03166103fc565b3480156107e957600080fd5b506103256107f8366004613946565b6120c7565b34801561080957600080fd5b506006546001600160a01b03166103fc565b34801561082757600080fd5b506102ad6108363660046137da565b612161565b34801561084757600080fd5b50610325610856366004613946565b61221d565b34801561086757600080fd5b50610870612302565b6040516102eb9190613d38565b34801561088957600080fd5b506004546001600160a01b03166103fc565b3480156108a757600080fd5b506102ad6108b63660046137da565b612367565b3480156108c757600080fd5b5061078b604051806040016040528060058152602001640302e322e360dc1b81525081565b3480156108f857600080fd5b506102ad610907366004613d85565b612456565b3361091f6001546001600160a01b031690565b6001600160a01b03161461094e5760405162461bcd60e51b815260040161094590613dc6565b60405180910390fd5b818061ffff1661096160005461ffff1690565b61ffff16146109825760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166109c85760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b2103a37b5b2b760991b6044820152606401610945565b6109d18261251d565b505050565b60006109ea6004546001600160a01b031690565b9050336001600160a01b03821614610a445760405162461bcd60e51b815260206004820152601b60248201527f63616c6c6572206d7573742062652070656e64696e674f776e657200000000006044820152606401610945565b6000610a586001546001600160a01b031690565b600180546001600160a01b0319166001600160a01b0385161790559050610a7f60006126c2565b816001600160a01b0316816001600160a01b03167f0d18b5fd22306e373229b9439188228edca81207d1667f604daf6cef8aa3ee6760405160405180910390a35050565b6000610acd6126e4565b6000546301000000900460ff1615610b1b5760405162461bcd60e51b81526020600482015260116024820152701c995b185e595c881a5cc81c185d5cd959607a1b6044820152606401610945565b6000610b2f6005546001600160a01b031690565b6001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b909190613e19565b9050803414610bd65760405162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742076616c756560701b6044820152606401610945565b6000610be18961273d565b9050610bf6610bf08983610e36565b82610e70565b9750610c0289896127df565b9750610c4b6040518060c001604052808b6001600160a01b031681526020018360ff1681526020018a81526020018981526020018861ffff168152602001878152508584612815565b92505050610c596001600f55565b9695505050505050565b33610c766001546001600160a01b031690565b6001600160a01b031614610c9c5760405162461bcd60e51b815260040161094590613dc6565b818061ffff16610caf60005461ffff1690565b61ffff1614610cd05760405162461bcd60e51b815260040161094590613df4565b6000805463ff0000001916630100000084151502179055505050565b33610cff6001546001600160a01b031690565b6001600160a01b031614610d255760405162461bcd60e51b815260040161094590613dc6565b818061ffff16610d3860005461ffff1690565b61ffff1614610d595760405162461bcd60e51b815260040161094590613df4565b6001600160a01b038216610dbf5760405162461bcd60e51b815260206004820152602760248201527f6e6577466565526563697069656e742063616e6e6f7420657175616c206164646044820152667265737328302960c81b6064820152608401610945565b6000610dd36003546001600160a01b031690565b600380546001600160a01b0319166001600160a01b0386161790559050826001600160a01b0316816001600160a01b03167faaebcf1bfa00580e41d966056b48521fa9f202645c86d4ddf28113e617c1b1d360405160405180910390a350505050565b600060088260ff161115610e6757610e4f600883613e48565b610e5a90600a613f45565b610e649084613f54565b92505b50815b92915050565b600060088260ff161115610e6757610e89600883613e48565b610e9490600a613f45565b610e649084613f76565b600080546301000000900460ff1615610eed5760405162461bcd60e51b81526020600482015260116024820152701c995b185e595c881a5cc81c185d5cd959607a1b6044820152606401610945565b60005462010000900460ff16610f455760405162461bcd60e51b815260206004820181905260248201527f574554482066756e6374696f6e616c697479206e6f7420737570706f727465646044820152606401610945565b6000610f596005546001600160a01b031690565b6001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fba9190613e19565b90508034116110005760405162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742076616c756560701b6044820152606401610945565b600061100c8234613f8d565b9050600061102561101e836012610e36565b6012610e70565b61102f9083613f8d565b9050801561106657604051339082156108fc029083906000818181858888f19350505050158015611064573d6000803e3d6000fd5b505b60006110728284613f8d565b905060006110906000546001600160a01b03600160201b9091041690565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156110cd57600080fd5b505af11580156110e1573d6000803e3d6000fd5b505050505061112e6040518060c00160405280836001600160a01b03168152602001601260ff1681526020018481526020018c81526020018b61ffff1681526020018a8152508887612815565b9a9950505050505050505050565b60008061114a836021612b3d565b90506000611159846041612b9b565b905061116860005461ffff1690565b61ffff168161ffff1614611249576006546001600160a01b0316604051630ff8f14360e11b815261ffff83166004820152602481018490526001600160a01b039190911690631ff1e28690604401602060405180830381865afa1580156111d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f79190613fa0565b92506001600160a01b0383166112445760405162461bcd60e51b81526020600482015260126024820152711d1bdad95b881b9bdd08185d1d195cdd195960721b6044820152606401610945565b611255565b61125282612bf8565b92505b5050919050565b3361126f6001546001600160a01b031690565b6001600160a01b0316146112955760405162461bcd60e51b815260040161094590613dc6565b818061ffff166112a860005461ffff1690565b61ffff16146112c95760405162461bcd60e51b815260040161094590613df4565b600082116113115760405162461bcd60e51b81526020600482015260156024820152740707265636973696f6e206d757374206265203e203605c1b6044820152606401610945565b6109d182600755565b600080600061135e85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612c4c92505050565b925092509250600061136f84611b83565b905060006113808260600151612bf8565b9050600061139760005460ff620100009091041690565b90506001600160a01b03821633036113bf576113b584838784612f41565b5050505050505050565b60006113ca8561273d565b90506113da846020015182610e70565b6020850152600054600160201b90046001600160a01b03166001600160a01b0316856001600160a01b0316036114255761141a868486602001518561306b565b505050505050505050565b6040840151156115ed5761143d846040015182610e70565b6040850152600061144d8661221d565b9050808560400151111561146357604085018190525b6000611473878760400151611d3b565b905080156115af57803410156114cb5760405162461bcd60e51b815260206004820181905260248201527f696e73756666696369656e74206e617469766520617373657420616d6f756e746044820152606401610945565b60006114d78234613f8d565b9050801561150e57604051339082156108fc029083906000818181858888f1935050505015801561150c573d6000803e3d6000fd5b505b6040516001600160a01b0387169083156108fc029084906000818181858888f19350505050158015611544573d6000803e3d6000fd5b50876001600160a01b0316336001600160a01b0316876001600160a01b03167f764f0dc063c06f32d89a3f3af80c0db4be8a090901f589a478b447e0a51f09f18a60400151866040516115a1929190918252602082015260400190565b60405180910390a4506115ea565b6000604087015234156115ea5760405133903480156108fc02916000818181858888f193505050501580156115e8573d6000803e3d6000fd5b505b50505b6000846040015185602001516116039190613fbd565b9050801561162757611627866116216003546001600160a01b031690565b836131e1565b61163b8685611636848b613f8d565b6131e1565b50505050505050505050565b6001600160a01b0382166000908152600a6020526040812054806000036116a45760405162461bcd60e51b81526020600482015260116024820152701cddd85c081c985d19481b9bdd081cd95d607a1b6044820152606401610945565b6008546116b19082613f76565b60075461ffff87166000908152600c60205260409020546116d386600a613f45565b6116dd9190613f76565b6116e79190613f76565b6116f19190613f54565b95945050505050565b3361170d6001546001600160a01b031690565b6001600160a01b0316146117335760405162461bcd60e51b815260040161094590613dc6565b806117905760405162461bcd60e51b815260206004820152602760248201527f636f6e7472616374416464726573732063616e6e6f7420657175616c206279746044820152666573333228302960c81b6064820152608401610945565b61ffff8216158015906117ac575060005461ffff838116911614155b6118085760405162461bcd60e51b815260206004820152602760248201527f636861696e49645f2063616e6e6f7420657175616c2030206f7220746869732060448201526618da185a5b925960ca1b6064820152608401610945565b61ffff91909116600090815260096020526040902055565b5050565b336118376001546001600160a01b031690565b6001600160a01b0316148061186557503361185a6002546001600160a01b031690565b6001600160a01b0316145b6118815760405162461bcd60e51b815260040161094590613fd0565b60005461ffff1661ffff168261ffff16036118ce5760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21031b430b4b760991b6044820152606401610945565b61ffff82166000908152600960205260409020546119275760405162461bcd60e51b815260206004820152601660248201527518dbdb9d1c9858dd08191bd95cdb89dd08195e1a5cdd60521b6044820152606401610945565b61ffff919091166000908152600c6020526040902055565b336119526001546001600160a01b031690565b6001600160a01b031614806119805750336119756002546001600160a01b031690565b6001600160a01b0316145b61199c5760405162461bcd60e51b815260040161094590613fd0565b828061ffff166119af60005461ffff1690565b61ffff16146119d05760405162461bcd60e51b815260040161094590613df4565b8180611a135760405162461bcd60e51b8152602060048201526012602482015271696e76616c69642061727261792073697a6560701b6044820152606401610945565b60005b81811015611b3b57611a49858583818110611a3357611a33614011565b6104b89260206040909202019081019150613946565b611a655760405162461bcd60e51b815260040161094590614027565b6000858583818110611a7957611a79614011565b9050604002016020013511611ad05760405162461bcd60e51b815260206004820152601960248201527f737761702072617465206d757374206265206e6f6e7a65726f000000000000006044820152606401610945565b611b33858583818110611ae557611ae5614011565b611afb9260206040909202019081019150613946565b868684818110611b0d57611b0d614011565b905060400201602001356001600160a01b039091166000908152600a6020526040902055565b600101611a16565b508383604051611b4c929190614053565b604051908190038120907f7abf49a6ebb116bc314846377cd82a3d2c8c1ea48149a652356009fc37100dd790600090a25050505050565b604080516080810182526000808252602082018190529181018290526060810182905290611bb18382613244565b60ff168252611bc1600182613fbd565b9050816000015160ff16600114611c0e5760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c185e5b1bd8591259607a1b6044820152606401610945565b611c1883826132a0565b602080840191909152611c2b9082613fbd565b9050611c3783826132a0565b6040830152611c47602082613fbd565b9050611c538382612b3d565b6060830152611c63602082613fbd565b905082518114611cae5760405162461bcd60e51b81526020600482015260166024820152750d2dcecc2d8d2c840dacae6e6c2ceca40d8cadccee8d60531b6044820152606401610945565b50919050565b33611cc76001546001600160a01b031690565b6001600160a01b031614611ced5760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611d0060005461ffff1690565b61ffff1614611d215760405162461bcd60e51b815260040161094590613df4565b6000805462ff000019166201000084151502179055505050565b600080611d478461273d565b90506000611d6d611d686000546001600160a01b03600160201b9091041690565b61273d565b90508060ff168260ff161115611dca57611d878183613e48565b611d9290600a613f45565b611d9b866120c7565b611da59190613f76565b84611daf60075490565b611db99190613f76565b611dc39190613f54565b9250611e13565b611dd3856120c7565b611ddd8383613e48565b611de890600a613f45565b85611df260075490565b611dfc9190613f76565b611e069190613f76565b611e109190613f54565b92505b505092915050565b33611e2e6001546001600160a01b031690565b6001600160a01b031614611e545760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611e6760005461ffff1690565b61ffff1614611e885760405162461bcd60e51b815260040161094590613df4565b60008211611ed05760405162461bcd60e51b81526020600482015260156024820152740707265636973696f6e206d757374206265203e203605c1b6044820152606401610945565b6109d182600855565b33611eec6001546001600160a01b031690565b6001600160a01b031614611f125760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611f2560005461ffff1690565b61ffff1614611f465760405162461bcd60e51b815260040161094590613df4565b6001600160a01b038216611f9c5760405162461bcd60e51b815260206004820181905260248201527f6e65774f776e65722063616e6e6f7420657175616c20616464726573732830296044820152606401610945565b6109d1826126c2565b6060816000015160ff16600114611ff25760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c185e5b1bd8591259607a1b6044820152606401610945565b81516020808401516040808601516060870151915161203a95949192910160f89490941b6001600160f81b031916845260018401929092526021830152604182015260610190565b6040516020818303038152906040529050919050565b336120636001546001600160a01b031690565b6001600160a01b0316146120895760405162461bcd60e51b815260040161094590613dc6565b808061ffff1661209c60005461ffff1690565b61ffff16146120bd5760405162461bcd60e51b815260040161094590613df4565b61182060006126c2565b600080546001600160a01b03600160201b90910481168252600a60205260408083205491841683528220546000821180156121025750600081115b6121425760405162461bcd60e51b81526020600482015260116024820152701cddd85c081c985d19481b9bdd081cd95d607a1b6044820152606401610945565b808261214d60075490565b6121579190613f76565b6112529190613f54565b336121746001546001600160a01b031690565b6001600160a01b03161461219a5760405162461bcd60e51b815260040161094590613dc6565b818061ffff166121ad60005461ffff1690565b61ffff16146121ce5760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166122145760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b2103a37b5b2b760991b6044820152606401610945565b6109d1826132f5565b6000806122298361273d565b9050600061224a611d686000546001600160a01b03600160201b9091041690565b90508060ff168260ff1611156122b9576007546122678284613e48565b61227290600a613f45565b61227b866120c7565b6001600160a01b0387166000908152600b602052604090205461229e9190613f76565b6122a89190613f76565b6122b29190613f54565b9250611255565b6007546122c68383613e48565b6122d190600a613f45565b6122db9190613f76565b6122e4856120c7565b6001600160a01b0386166000908152600b602052604090205461214d565b60606000600e0180548060200260200160405190810160405280929190818152602001828054801561235d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161233f575b5050505050905090565b3361237a6001546001600160a01b031690565b6001600160a01b0316146123a05760405162461bcd60e51b815260040161094590613dc6565b818061ffff166123b360005461ffff1690565b61ffff16146123d45760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166124365760405162461bcd60e51b8152602060048201526024808201527f6e6577417373697374616e742063616e6e6f7420657175616c206164647265736044820152637328302960e01b6064820152608401610945565b600280546001600160a01b0319166001600160a01b038416179055505050565b336124696001546001600160a01b031690565b6001600160a01b03161461248f5760405162461bcd60e51b815260040161094590613dc6565b828061ffff166124a260005461ffff1690565b61ffff16146124c35760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0383166000908152600d602052604090205460ff166124fb5760405162461bcd60e51b815260040161094590614027565b6001600160a01b0383166000908152600b602052604090208290555b50505050565b6001600160a01b0381166000908152600d602052604090205460ff1661257c5760405162461bcd60e51b81526020600482015260146024820152731d1bdad95b881b9bdd081c9959da5cdd195c995960621b6044820152606401610945565b6001600160a01b0381166000908152600d60209081526040808320805460ff19169055600a8252808320839055600b9091528120819055600e54905b8181101561260257826001600160a01b03166000600e0182815481106125e0576125e0614011565b6000918252602090912001546001600160a01b031614612602576001016125b8565b8181146109d157600182111561268a57600e61261f600184613f8d565b8154811061262f5761262f614011565b600091825260209091200154600e80546001600160a01b03909216918390811061265b5761265b614011565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b600e80548061269b5761269b61409e565b600082815260209020810160001990810180546001600160a01b0319169055019055505050565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6002600f54036127365760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610945565b6002600f55565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b179052905160009182916001600160a01b03851691612780916140b4565b600060405180830381855afa9150503d80600081146127bb576040519150601f19603f3d011682016040523d82523d6000602084013e6127c0565b606091505b50915050808060200190518101906127d891906140e0565b9392505050565b6000806127eb846133c4565b90506127f984333086613470565b80612803856133c4565b61280d9190613f8d565b949350505050565b82516001600160a01b03166000908152600d602052604081205460ff1661284e5760405162461bcd60e51b815260040161094590614027565b60a08401516128ab5760405162461bcd60e51b8152602060048201526024808201527f746172676574526563697069656e742063616e6e6f74206265206279746573336044820152633228302960e01b6064820152608401610945565b60006128bf85604001518660200151610e36565b9050600081116129115760405162461bcd60e51b815260206004820152601d60248201527f6e6f726d616c697a656420616d6f756e74206d757374206265203e20300000006044820152606401610945565b600061292586606001518760200151610e36565b905085606001516000148061293a5750600081115b6129865760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420746f4e6174697665546f6b656e416d6f756e7400000000006044820152606401610945565b608086015161ffff16600090815260096020526040902054806129e35760405162461bcd60e51b81526020600482015260156024820152741d185c99d95d081b9bdd081c9959da5cdd195c9959605a1b6044820152606401610945565b6000612a096129ff89608001518a600001518b60200151611647565b8960200151610e36565b9050612a158382613fbd565b8411612a595760405162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d08185b5bdd5b9d606a1b6044820152606401610945565b6000612a8c6040518060800160405280600160ff1681526020018481526020018681526020018b60a00151815250611fa5565b90506000612aa26006546001600160a01b031690565b9050612ab78a60000151828c604001516134a8565b806001600160a01b031663c5a5ebda898c600001518d604001518e60800151898f896040518863ffffffff1660e01b8152600401612afa969594939291906140fd565b60206040518083038185885af1158015612b18573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061112e9190614163565b6000612b4a826020613fbd565b83511015612b925760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610945565b50016020015190565b6000612ba8826002613fbd565b83511015612bef5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610945565b50016002015190565b60006001600160a01b0319821615612c485760405162461bcd60e51b8152602060048201526013602482015272696e76616c69642045564d206164647265737360681b6044820152606401610945565b5090565b60606000806000612c656005546001600160a01b031690565b6001600160a01b031663a9e11893866040518263ffffffff1660e01b8152600401612c909190613d25565b600060405180830381865afa158015612cad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612cd591908101906142a2565b90506000612ce68260e0015161113c565b9050612d0a816001600160a01b03166000908152600d602052604090205460ff1690565b612d4d5760405162461bcd60e51b81526020600482015260146024820152731d1bdad95b881b9bdd081c9959da5cdd195c995960621b6044820152606401610945565b6000612d58826133c4565b90506000612d6e6006546001600160a01b031690565b90506000816001600160a01b031663c3f511c18a6040518263ffffffff1660e01b8152600401612d9e9190613d25565b6000604051808303816000875af1158015612dbd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612de591908101906143c6565b9050600083612df3866133c4565b612dfd9190613f8d565b90506000836001600160a01b031663ea63738d846040518263ffffffff1660e01b8152600401612e2d9190613d25565b600060405180830381865afa158015612e4a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612e7291908101906143fa565b9050612e92876060015161ffff1660009081526009602052604090205490565b8160c0015114612ee45760405162461bcd60e51b815260206004820152601760248201527f636f6e7472616374206e6f7420726567697374657265640000000000000000006044820152606401610945565b8660a001516001600160401b03168760800151886060015161ffff167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c16960405160405180910390a460e001519a9099509397509295505050505050565b3415612f9b5760405162461bcd60e51b815260206004820152602360248201527f726563697069656e742063616e6e6f742073776170206e61746976652061737360448201526265747360e81b6064820152608401610945565b6000546001600160a01b03600160201b909104811690851681148015612fbe5750815b1561305957604051632e1a7d4d60e01b8152600481018490526001600160a01b03821690632e1a7d4d90602401600060405180830381600087803b15801561300557600080fd5b505af1158015613019573d6000803e3d6000fd5b50506040516001600160a01b038716925085156108fc02915085906000818181858888f19350505050158015613053573d6000803e3d6000fd5b50613064565b6130648585856131e1565b5050505050565b34156130ae5760405162461bcd60e51b815260206004820152601260248201527176616c7565206d757374206265207a65726f60701b6044820152606401610945565b80156131a157600054604051632e1a7d4d60e01b815260048101869052600160201b9091046001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561310057600080fd5b505af1158015613114573d6000803e3d6000fd5b50505050826001600160a01b03166108fc83866131319190613f8d565b6040518115909202916000818181858888f19350505050158015613159573d6000803e3d6000fd5b50811561319c576003546040516001600160a01b039091169083156108fc029084906000818181858888f1935050505015801561319a573d6000803e3d6000fd5b505b612517565b600054600160201b90046001600160a01b03166131c381856116368689613f8d565b821561306457613064816131df6003546001600160a01b031690565b855b6040516001600160a01b0383166024820152604481018290526109d190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526135bd565b6000613251826001613fbd565b835110156132975760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610945565b50016001015190565b60006132ad826020613fbd565b83511015612b925760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610945565b6001600160a01b0381166000908152600d602052604090205460ff161561335e5760405162461bcd60e51b815260206004820152601860248201527f746f6b656e20616c7265616479207265676973746572656400000000000000006044820152606401610945565b6001600160a01b03166000818152600d60205260408120805460ff19166001908117909155600e805491820181559091527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0180546001600160a01b0319169091179055565b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b179052905160009182916001600160a01b03851691613418916140b4565b600060405180830381855afa9150503d8060008114613453576040519150601f19603f3d011682016040523d82523d6000602084013e613458565b606091505b50915050808060200190518101906127d89190613e19565b6040516001600160a01b03808516602483015283166044820152606481018290526125179085906323b872dd60e01b9060840161320d565b8015806135225750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156134fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135209190613e19565b155b61358d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610945565b6040516001600160a01b0383166024820152604481018290526109d190849063095ea7b360e01b9060640161320d565b6000613612826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661368f9092919063ffffffff16565b8051909150156109d1578080602001905181019061363091906144c2565b6109d15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610945565b606061280d848460008585600080866001600160a01b031685876040516136b691906140b4565b60006040518083038185875af1925050503d80600081146136f3576040519150601f19603f3d011682016040523d82523d6000602084013e6136f8565b606091505b509150915061370987838387613714565b979650505050505050565b6060831561378357825160000361377c576001600160a01b0385163b61377c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610945565b508161280d565b61280d83838151156137985781518083602001fd5b8060405162461bcd60e51b81526004016109459190613d25565b61ffff811681146137c257600080fd5b50565b6001600160a01b03811681146137c257600080fd5b600080604083850312156137ed57600080fd5b82356137f8816137b2565b91506020830135613808816137c5565b809150509250929050565b63ffffffff811681146137c257600080fd5b60008060008060008060c0878903121561383e57600080fd5b8635613849816137c5565b955060208701359450604087013593506060870135613867816137b2565b92506080870135915060a087013561387e81613813565b809150509295509295509295565b80151581146137c257600080fd5b600080604083850312156138ad57600080fd5b82356138b8816137b2565b915060208301356138088161388c565b60ff811681146137c257600080fd5b600080604083850312156138ea57600080fd5b823591506020830135613808816138c8565b6000806000806080858703121561391257600080fd5b843593506020850135613924816137b2565b925060408501359150606085013561393b81613813565b939692955090935050565b60006020828403121561395857600080fd5b81356127d8816137c5565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561399b5761399b613963565b60405290565b60405161016081016001600160401b038111828210171561399b5761399b613963565b60405161010081016001600160401b038111828210171561399b5761399b613963565b604051601f8201601f191681016001600160401b0381118282101715613a0f57613a0f613963565b604052919050565b60006001600160401b03821115613a3057613a30613963565b50601f01601f191660200190565b600060208284031215613a5057600080fd5b81356001600160401b03811115613a6657600080fd5b8201601f81018413613a7757600080fd5b8035613a8a613a8582613a17565b6139e7565b818152856020838501011115613a9f57600080fd5b81602084016020830137600091810160200191909152949350505050565b60008060408385031215613ad057600080fd5b8235613adb816137b2565b946020939093013593505050565b60008060208385031215613afc57600080fd5b82356001600160401b0380821115613b1357600080fd5b818501915085601f830112613b2757600080fd5b813581811115613b3657600080fd5b866020828501011115613b4857600080fd5b60209290920196919550909350505050565b600080600060608486031215613b6f57600080fd5b8335613b7a816137b2565b92506020840135613b8a816137c5565b91506040840135613b9a816138c8565b809150509250925092565b600060208284031215613bb757600080fd5b81356127d8816137b2565b600080600060408486031215613bd757600080fd5b8335613be2816137b2565b925060208401356001600160401b0380821115613bfe57600080fd5b818601915086601f830112613c1257600080fd5b813581811115613c2157600080fd5b8760208260061b8501011115613c3657600080fd5b6020830194508093505050509250925092565b60008060408385031215613c5c57600080fd5b8235613adb816137c5565b600060808284031215613c7957600080fd5b604051608081018181106001600160401b0382111715613c9b57613c9b613963565b6040528235613ca9816138c8565b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b60005b83811015613cf0578181015183820152602001613cd8565b50506000910152565b60008151808452613d11816020860160208601613cd5565b601f01601f19169290920160200192915050565b6020815260006127d86020830184613cf9565b6020808252825182820181905260009190848201906040850190845b81811015613d795783516001600160a01b031683529284019291840191600101613d54565b50909695505050505050565b600080600060608486031215613d9a57600080fd5b8335613da5816137b2565b92506020840135613db5816137c5565b929592945050506040919091013590565b60208082526014908201527331b0b63632b9103737ba103a34329037bbb732b960611b604082015260600190565b6020808252600b908201526a3bb937b7339031b430b4b760a91b604082015260600190565b600060208284031215613e2b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60ff8281168282160390811115610e6a57610e6a613e32565b600181815b80851115613e9c578160001904821115613e8257613e82613e32565b80851615613e8f57918102915b93841c9390800290613e66565b509250929050565b600082613eb357506001610e6a565b81613ec057506000610e6a565b8160018114613ed65760028114613ee057613efc565b6001915050610e6a565b60ff841115613ef157613ef1613e32565b50506001821b610e6a565b5060208310610133831016604e8410600b8410161715613f1f575081810a610e6a565b613f298383613e61565b8060001904821115613f3d57613f3d613e32565b029392505050565b60006127d860ff841683613ea4565b600082613f7157634e487b7160e01b600052601260045260246000fd5b500490565b8082028115828204841417610e6a57610e6a613e32565b81810381811115610e6a57610e6a613e32565b600060208284031215613fb257600080fd5b81516127d8816137c5565b80820180821115610e6a57610e6a613e32565b60208082526021908201527f63616c6c6572206e6f7420746865206f776e6572206f7220617373697374616e6040820152601d60fa1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252601290820152711d1bdad95b881b9bdd081858d8d95c1d195960721b604082015260600190565b60008184825b8581101561409357813561406c816137c5565b6001600160a01b031683526020828101359084015260409283019290910190600101614059565b509095945050505050565b634e487b7160e01b600052603160045260246000fd5b600082516140c6818460208701613cd5565b9190910192915050565b80516140db816138c8565b919050565b6000602082840312156140f257600080fd5b81516127d8816138c8565b60018060a01b038716815285602082015261ffff8516604082015283606082015263ffffffff8316608082015260c060a0820152600061414060c0830184613cf9565b98975050505050505050565b80516001600160401b03811681146140db57600080fd5b60006020828403121561417557600080fd5b6127d88261414c565b80516140db81613813565b80516140db816137b2565b600082601f8301126141a557600080fd5b81516141b3613a8582613a17565b8181528460208386010111156141c857600080fd5b61280d826020830160208701613cd5565b600082601f8301126141ea57600080fd5b815160206001600160401b0382111561420557614205613963565b614213818360051b016139e7565b82815260079290921b8401810191818101908684111561423257600080fd5b8286015b84811015614297576080818903121561424f5760008081fd5b614257613979565b815181528482015185820152604080830151614272816138c8565b90820152606082810151614285816138c8565b90820152835291830191608001614236565b509695505050505050565b6000602082840312156142b457600080fd5b81516001600160401b03808211156142cb57600080fd5b9083019061016082860312156142e057600080fd5b6142e86139a1565b6142f1836140d0565b81526142ff6020840161417e565b60208201526143106040840161417e565b604082015261432160608401614189565b60608201526080830151608082015261433c60a0840161414c565b60a082015261434d60c084016140d0565b60c082015260e08301518281111561436457600080fd5b61437087828601614194565b60e08301525061010061438481850161417e565b90820152610120838101518381111561439c57600080fd5b6143a8888287016141d9565b91830191909152506101409283015192810192909252509392505050565b6000602082840312156143d857600080fd5b81516001600160401b038111156143ee57600080fd5b61280d84828501614194565b60006020828403121561440c57600080fd5b81516001600160401b038082111561442357600080fd5b90830190610100828603121561443857600080fd5b6144406139c4565b614449836140d0565b8152602083015160208201526040830151604082015261446b60608401614189565b60608201526080830151608082015261448660a08401614189565b60a082015260c083015160c082015260e0830151828111156144a757600080fd5b6144b387828601614194565b60e08301525095945050505050565b6000602082840312156144d457600080fd5b81516127d88161388c56fea26469706673582212204380a2c16f3d3a94e16ceec8dd417389a415486e9286774f1ba51d1e17ea374064736f6c63430008110033", Nt = (a) => a.length > 1;
class N6 extends _6 {
  constructor(...e) {
    Nt(e) ? super(...e) : super(h6, $1, e[0]);
  }
  getDeployTransaction(e, t, n, r, i, s) {
    return super.getDeployTransaction(e, t, n, r, i, s || {});
  }
  deploy(e, t, n, r, i, s) {
    return super.deploy(e, t, n, r, i, s || {});
  }
  connect(e) {
    return super.connect(e);
  }
  static createInterface() {
    return new J0(h6);
  }
  static connect(e, t) {
    return new Ce(e, h6, t);
  }
}
o(N6, "bytecode", $1), o(N6, "abi", h6);
const Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bridge__factory: a6,
  TokenBridgeRelayer__factory: N6
}, Symbol.toStringTag, { value: "Module" }));
z1(G1, "TokenBridge", Z6);
z1(G1, "AutomaticTokenBridge", q6);
export {
  q6 as EvmAutomaticTokenBridge,
  Z6 as EvmTokenBridge,
  Ct as ethers_contracts
};
