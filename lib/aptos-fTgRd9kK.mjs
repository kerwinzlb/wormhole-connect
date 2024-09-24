var A = Object.defineProperty;
var S = (a, t, n) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n;
var r = (a, t, n) => (S(a, typeof t != "symbol" ? t + "" : t, n), n);
import { au as v, ae as b, av as T, aw as x, ax as d, ay as I, aZ as N, az as k, as as _, ar as g, at as $, a_ as O, aC as B } from "./index-DV1w5RNX.mjs";
import { C as F, P as E } from "./chain-tk4BDPwT.mjs";
const C = "0x1::aptos_coin::AptosCoin", u = "::";
class y extends F {
}
const m = "Aptos", P = (a) => /^(0x)?[0-9a-fA-F]+::\w+::\w+$/.test(a), q = (a) => a.split(u)[0], h = class h extends E {
  constructor(t, n) {
    super(t, n ?? v(t, h._platform));
  }
  getRpc(t) {
    if (t in this.config)
      return new b(this.config[t].rpc);
    throw new Error("No configuration available for chain: " + t);
  }
  getChain(t, n) {
    if (t in this.config)
      return new y(t, this);
    throw new Error("No configuration available for chain: " + t);
  }
  static nativeTokenId(t, n) {
    if (!this.isSupportedChain(n))
      throw new Error(`invalid chain: ${n}`);
    return T.tokenId(n, C);
  }
  static isNativeTokenId(t, n, i) {
    return !this.isSupportedChain(n) || i.chain !== n ? !1 : this.nativeTokenId(t, n) == i;
  }
  static isSupportedChain(t) {
    return x(t) === h._platform;
  }
  static async getDecimals(t, n, i) {
    if (d(i))
      return I(h._platform);
    const s = i.toString(), c = `0x1::coin::CoinInfo<${s}>`;
    return (await n.getAccountResource(s.split(u)[0], c)).data.decimals;
  }
  static async getBalance(t, n, i, s) {
    const c = d(s) ? C : s.toString(), e = new N(n);
    try {
      return await e.checkBalance(i, {
        coinType: c
      });
    } catch (o) {
      if (o.errorCode === "resource_not_found" && o.status === 404)
        return null;
      throw o;
    }
  }
  static async getBalances(t, n, i, s) {
    return (await Promise.all(s.map(async (e) => {
      const o = await this.getBalance(t, n, i, e);
      return { [d(e) ? "native" : new f(e).toString()]: o };
    }))).reduce((e, o) => Object.assign(e, o), {});
  }
  static async sendWait(t, n, i) {
    const s = [];
    for (const c of i) {
      const e = await n.submitTransaction(c), o = await n.waitForTransactionWithResult(e.hash);
      s.push(o.hash);
    }
    return s;
  }
  static async getLatestBlock(t) {
    const n = await t.getLedgerInfo();
    return Number(n.block_height);
  }
  static async getLatestFinalizedBlock(t) {
    const n = await t.getLedgerInfo();
    return Number(n.block_height);
  }
  static chainFromChainId(t) {
    const n = k(h._platform, BigInt(t));
    if (!n)
      throw new Error(`No matching chainId to determine network and chain: ${t}`);
    const [i, s] = n;
    return [i, s];
  }
  static async chainFromRpc(t) {
    const i = await t.getChainId();
    return this.chainFromChainId(i.toString());
  }
};
r(h, "_platform", m);
let l = h;
function R(a) {
  return a.length % 2 !== 0 || a.length < 66 ? (a = a.startsWith("0x") ? a.slice(2) : a, "0x" + a.padStart(64, "0")) : a;
}
const p = class p {
  constructor(t) {
    r(this, "platform", l._platform);
    r(this, "type", "Native");
    // Full 32 bytes of Address
    r(this, "address");
    // Optional module and contract name
    r(this, "module");
    if (p.instanceof(t))
      this.address = t.address, this.module = t.module;
    else if (_.instanceof(t))
      this.address = t.toUint8Array();
    else if (typeof t == "string") {
      if (P(t)) {
        const n = t.split(u);
        this.module = n.slice(1).join(u), t = n[0];
      }
      if (t = R(t), !g.valid(t))
        throw new Error("Invalid Aptos address: " + t);
      this.address = g.decode(t);
    } else
      this.address = t;
  }
  unwrap() {
    const t = g.encode(this.address).replace(/^0+/, ""), n = this.module ? u + this.module : "";
    return `0x${t}${n}`;
  }
  toString() {
    return this.unwrap();
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
  static instanceof(t) {
    return t.platform === l._platform;
  }
  equals(t) {
    return p.instanceof(t) ? t.unwrap() === this.unwrap() : this.toUniversalAddress().equals(t);
  }
};
r(p, "byteSize", 32);
let f = p;
$(m, f);
async function U(a, t) {
  const [n, i] = await l.chainFromRpc(a);
  return new W(i, new O(g.decode(t)), a);
}
class W {
  constructor(t, n, i, s) {
    r(this, "_chain");
    r(this, "_account");
    r(this, "_rpc");
    r(this, "_debug");
    this._chain = t, this._account = n, this._rpc = i, this._debug = s;
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._account.address().hex();
  }
  async signAndSend(t) {
    const n = [];
    for (const i of t) {
      const { description: s, transaction: c } = i;
      this._debug && console.log(`Signing: ${s} for ${this.address()}`);
      const e = {
        gas_unit_price: "100",
        max_gas_amount: "30000",
        expiration_timestamp_secs: (BigInt(Date.now() + 8 * 60 * 60 * 1e3) / 1000n).toString()
      }, o = await this._rpc.generateTransaction(this._account.address(), c, e), { hash: w } = await this._simSignSend(o);
      n.push(w);
    }
    return n;
  }
  async _simSignSend(t) {
    return await this._rpc.simulateTransaction(this._account, t).then((n) => n.forEach((i) => {
      if (!i.success)
        throw new Error(`Transaction failed: ${i.vm_status}
${JSON.stringify(i, null, 2)}`);
    })), this._rpc.signTransaction(this._account, t).then((n) => this._rpc.submitTransaction(n)).then((n) => this._rpc.waitForTransactionWithResult(n.hash));
  }
}
const j = {
  Address: f,
  Platform: l,
  getSigner: U,
  protocols: {
    WormholeCore: () => import("./index-Dxa4Ra4a.mjs"),
    TokenBridge: () => import("./index-Dwpsg6Mq.mjs")
  },
  getChain: (a, t, n) => new y(t, new l(a, B(a, m, {
    [t]: n
  })))
}, M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j
}, Symbol.toStringTag, { value: "Module" }));
export {
  l as A,
  u as a,
  C as b,
  q as c,
  f as d,
  M as e,
  P as i
};
