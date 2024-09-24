var C = Object.defineProperty;
var x = (s, t, n) => t in s ? C(s, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[t] = n;
var l = (s, t, n) => (x(s, typeof t != "symbol" ? t + "" : t, n), n);
import { as as _, ca as N, cb as R, b3 as w, aA as I, cc as E, at as T, au as B, cd as i, av as j, aw as U, ax as b, ay as z, az as k, ce as F, cf as $, aC as D } from "./index-DV1w5RNX.mjs";
import { C as P, P as L } from "./chain-tk4BDPwT.mjs";
const h = "Algorand";
function O(s) {
  if (s < BigInt(Number.MIN_SAFE_INTEGER) || s > BigInt(Number.MAX_SAFE_INTEGER))
    throw new Error("Integer is unsafe");
  return Number(s);
}
const G = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ", u = class u {
  constructor(t) {
    l(this, "type", "Native");
    l(this, "address");
    if (u.instanceof(t))
      this.address = t.address;
    else if (_.instanceof(t))
      this.address = t.toUint8Array();
    else if (t instanceof Uint8Array && t.byteLength === u.byteSize)
      this.address = t;
    else if (typeof t == "string" && N(t))
      this.address = R(t).publicKey;
    else if (typeof t == "string" && !isNaN(parseInt(t)))
      this.address = w.zpad(I.toBytes(BigInt(t), 8), u.byteSize);
    else if (typeof t == "bigint")
      this.address = w.zpad(I.toBytes(t, 8), u.byteSize);
    else if (t instanceof Uint8Array && t.byteLength === 8)
      this.address = w.zpad(t, u.byteSize);
    else
      throw new Error(`Invalid Algorand address or ASA ID: ${t}`);
  }
  unwrap() {
    return this.toString();
  }
  toString() {
    return E(this.address);
  }
  toNative() {
    return this;
  }
  toUint8Array() {
    return this.address;
  }
  toUniversalAddress() {
    return new _(this.toUint8Array());
  }
  toBigInt() {
    return I.decode(this.toUint8Array().slice(24, 32));
  }
  toInt() {
    return O(this.toBigInt());
  }
  equals(t) {
    return u.instanceof(t) ? t.address === this.address : this.toUniversalAddress().equals(t);
  }
  static instanceof(t) {
    return t.constructor.platform === h;
  }
};
l(u, "byteSize", 32), l(u, "platform", h);
let m = u;
T(h, m);
class y extends P {
}
const A = class A extends L {
  constructor(t, n) {
    super(t, n ?? B(t, A._platform));
  }
  getRpc(t) {
    if (t in this.config)
      return new i.Algodv2("", this.config[t].rpc);
    throw new Error("No configuration available for chain: " + t);
  }
  getChain(t) {
    if (t in this.config)
      return new y(t, this);
    throw new Error("No configuration available for chain: " + t);
  }
  static nativeTokenId(t, n) {
    if (!A.isSupportedChain(n))
      throw new Error(`invalid chain for Algorand: ${n}`);
    return j.chainAddress(n, G);
  }
  static isNativeTokenId(t, n, o) {
    return !A.isSupportedChain(n) || o.chain !== n ? !1 : this.nativeTokenId(t, n) == o;
  }
  static isSupportedChain(t) {
    return U(t) === A._platform;
  }
  static async getDecimals(t, n, o) {
    const r = b(o) ? 0 : new m(o).toInt();
    if (r === 0)
      return z(A._platform);
    const d = await n.getAssetByID(r).do(), a = i.modelsv2.Asset.from_obj_for_encoding(d);
    if (!a.params || !a.params.decimals)
      throw new Error("Could not fetch token details");
    return Number(a.params.decimals);
  }
  static async getBalance(t, n, o, r) {
    const d = b(r) ? 0 : new m(r).toInt();
    if (d === 0) {
      const c = await n.accountInformation(o).do(), f = i.modelsv2.Account.from_obj_for_encoding(c);
      return BigInt(f.amount);
    }
    const a = await n.accountAssetInformation(o, d).do(), e = i.modelsv2.AssetHolding.from_obj_for_encoding(a);
    return BigInt(e.amount);
  }
  static async getBalances(t, n, o, r) {
    let d;
    if (r.includes("native")) {
      const e = await n.accountInformation(o).do(), c = i.modelsv2.Account.from_obj_for_encoding(e);
      d = BigInt(c.amount);
    }
    return r.map(async (e) => {
      if (b(e))
        return { native: d };
      const c = new m(e).toInt(), f = await n.accountAssetInformation(o, c).do(), g = i.modelsv2.AssetHolding.from_obj_for_encoding(f);
      return BigInt(g.amount);
    }).reduce((e, c) => Object.assign(e, c), {});
  }
  static async sendWait(t, n, o) {
    const a = o.map((g, v) => i.decodeSignedTransaction(g)).map((g, v) => g.txn.txID()), { txId: e } = await n.sendRawTransaction(o).do();
    if (!e)
      throw new Error("Transaction(s) failed to send");
    const c = await i.waitForConfirmation(n, e, 4);
    if (!i.modelsv2.PendingTransactionResponse.from_obj_for_encoding(c).confirmedRound)
      throw new Error("Transaction(s) could not be confirmed in 4 rounds");
    return a;
  }
  static async getLatestBlock(t) {
    const n = await t.status().do(), o = i.modelsv2.NodeStatusResponse.from_obj_for_encoding(n);
    if (!o.lastRound)
      throw new Error("Error getting status from node");
    return Number(o.lastRound);
  }
  static async getLatestFinalizedBlock(t) {
    const n = await t.status().do(), o = i.modelsv2.NodeStatusResponse.from_obj_for_encoding(n);
    if (!o.lastRound)
      throw new Error("Error getting status from node");
    return Number(o.lastRound);
  }
  static chainFromChainId(t) {
    const n = k(A._platform, t);
    if (n === void 0)
      throw new Error(`Unknown native chain id ${t}`);
    const [o, r] = n;
    return [o, r];
  }
  static async chainFromRpc(t) {
    const n = await t.versionsCheck().do(), o = i.modelsv2.Version.from_obj_for_encoding(n);
    return this.chainFromChainId(o.genesisId);
  }
};
l(A, "_platform", h);
let p = A;
async function H(s, t) {
  const [n, o] = await p.chainFromRpc(s);
  return new K(o, s, t);
}
class K {
  constructor(t, n, o, r = !1) {
    l(this, "_chain");
    l(this, "_debug");
    l(this, "_account");
    this._chain = t, this._debug = r, this._account = F(o);
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._account.addr;
  }
  async sign(t) {
    const n = [], o = t.map((a, e) => a.transaction.tx), r = $(o), d = t.map((a, e) => (a.transaction.tx = r[e], a));
    for (const a of d) {
      const { description: e, transaction: c } = a, { tx: f, signer: g } = c;
      this._debug && (console.log(f._getDictForDisplay()), console.log(f.txID())), g ? (this._debug && console.log(`Signing: ${e} with signer ${g.address} for address ${this.address()}`), n.push(await g.signTxn(f))) : (this._debug && console.log(`Signing: ${e} without signer for address ${this.address()}`), n.push(f.signTxn(this._account.sk)));
    }
    return n;
  }
}
const M = {
  Address: m,
  Platform: p,
  getSigner: H,
  protocols: {
    WormholeCore: () => import("./index-FlkP7OMm.mjs").then((s) => s.i),
    TokenBridge: () => import("./index-C1QICiJl.mjs")
  },
  getChain: (s, t, n) => new y(t, new p(s, D(s, h, {
    [t]: n
  })))
}, Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as A,
  h as _,
  p as a,
  Q as b,
  O as s
};
