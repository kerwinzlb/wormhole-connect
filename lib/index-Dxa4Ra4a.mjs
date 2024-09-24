var d = Object.defineProperty;
var h = (i, e, r) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var o = (i, e, r) => (h(i, typeof e != "symbol" ? e + "" : e, r), r);
import { bW as w, as as p, ar as g } from "./index-DV1w5RNX.mjs";
import { A as u } from "./aptos-fTgRd9kK.mjs";
import { c as l } from "./create-Du0Xo8xc.mjs";
import { r as f } from "./chain-tk4BDPwT.mjs";
class c {
  constructor(e, r, t, s) {
    o(this, "network");
    o(this, "chain");
    o(this, "connection");
    o(this, "contracts");
    o(this, "chainId");
    o(this, "coreBridge");
    this.network = e, this.chain = r, this.connection = t, this.contracts = s, this.chainId = w(r);
    const n = s.coreBridge;
    if (!n)
      throw new Error(`CoreBridge contract Address for chain ${r} not found`);
    this.coreBridge = n;
  }
  getGuardianSet(e) {
    throw new Error("Method not implemented.");
  }
  getGuardianSetIndex() {
    throw new Error("Method not implemented.");
  }
  getMessageFee() {
    throw new Error("Method not implemented.");
  }
  static async fromRpc(e, r) {
    const [t, s] = await u.chainFromRpc(e), n = r[s];
    if (n.network !== t)
      throw new Error(`Network mismatch: ${n.network} !== ${t}`);
    return new c(t, s, e, n.contracts);
  }
  async *publishMessage(e, r) {
    throw new Error("Method not implemented.");
  }
  async *verifyMessage(e, r) {
    throw new Error("Not implemented.");
  }
  async parseTransaction(e) {
    return (await this.parseMessages(e)).map((t) => ({
      chain: t.emitterChain,
      emitter: t.emitterAddress,
      sequence: t.sequence
    }));
  }
  async parseMessages(e) {
    const r = await this.connection.getTransactionByHash(e);
    if (r.type !== "user_transaction")
      throw new Error(`${e} is not a user_transaction`);
    const s = r.events.filter((n) => n.type.endsWith("WormholeMessage"));
    if (!s || s.length === 0)
      throw new Error(`WormholeMessage not found for ${e}`);
    return s.map((n) => {
      const a = n.data, m = new p(BigInt(a.sender).toString(16).padStart(64, "0"));
      return l("Uint8Array", {
        guardianSet: 0,
        // TODO: need to implement guardian set idx
        emitterChain: this.chain,
        emitterAddress: m,
        sequence: BigInt(a.sequence),
        timestamp: Number(a.timestamp),
        consistencyLevel: a.consistency_level,
        nonce: Number(a.nonce),
        signatures: [],
        payload: g.decode(a.payload)
      });
    });
  }
}
f("Aptos", "WormholeCore", c);
export {
  c as AptosWormholeCore
};
