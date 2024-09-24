var d = Object.defineProperty;
var h = (i, e, r) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var n = (i, e, r) => (h(i, typeof e != "symbol" ? e + "" : e, r), r);
import { S as m, o as w, _ as p } from "./sui-BQWCExPY.mjs";
import { bW as g } from "./index-DV1w5RNX.mjs";
import { c as l } from "./create-Du0Xo8xc.mjs";
import { r as u } from "./chain-tk4BDPwT.mjs";
class c {
  constructor(e, r, t, o) {
    n(this, "network");
    n(this, "chain");
    n(this, "provider");
    n(this, "contracts");
    n(this, "chainId");
    n(this, "coreBridgePackageId");
    this.network = e, this.chain = r, this.provider = t, this.contracts = o, this.chainId = g(r);
    const s = o.coreBridge;
    if (!s)
      throw new Error(`CoreBridge contract Address for chain ${r} not found`);
    this.coreBridgePackageId = s;
  }
  getGuardianSet(e) {
    throw new Error("Method not implemented.");
  }
  getMessageFee() {
    throw new Error("Method not implemented.");
  }
  static async fromRpc(e, r) {
    const [t, o] = await m.chainFromRpc(e), s = r[o];
    if (s.network !== t)
      throw new Error(`Network mismatch: ${s.network} !== ${t}`);
    return new c(t, o, e, s.contracts);
  }
  async *verifyMessage(e, r) {
    throw new Error("Method not implemented.");
  }
  async *publishMessage(e, r) {
    throw new Error("Method not implemented.");
  }
  async parseTransaction(e) {
    return (await this.parseMessages(e)).map((t) => ({
      emitter: t.emitterAddress,
      sequence: t.sequence,
      chain: this.chain
    }));
  }
  async getGuardianSetIndex() {
    throw new Error("Method not implemented.");
  }
  async parseMessages(e) {
    var o;
    const t = (o = (await this.provider.getTransactionBlock({
      digest: e,
      options: { showEvents: !0, showEffects: !0, showInput: !0 }
    })).events) == null ? void 0 : o.filter((s) => s.type.endsWith("WormholeMessage"));
    if (!t || t.length == 0)
      throw new Error("WormholeMessage not found");
    return t.map((s) => {
      const a = s.parsedJson;
      return l("Uint8Array", {
        emitterChain: this.chain,
        emitterAddress: new w(a.sender).toUniversalAddress(),
        sequence: BigInt(a.sequence),
        guardianSet: 0,
        // TODO: need to implement guardian set idx
        timestamp: Number(a.timestamp),
        consistencyLevel: a.consistency_level,
        nonce: a.nonce,
        signatures: [],
        payload: new Uint8Array(a.payload)
      });
    });
  }
}
u(p, "WormholeCore", c);
export {
  c as SuiWormholeCore
};
