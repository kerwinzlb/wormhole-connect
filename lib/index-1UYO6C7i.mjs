var m = Object.defineProperty;
var w = (c, e, r) => e in c ? m(c, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[e] = r;
var a = (c, e, r) => (w(c, typeof e != "symbol" ? e + "" : e, r), r);
import { C as p, _ as g } from "./cosmwasm-DHfd5lcQ.mjs";
import { c as l } from "./create-Du0Xo8xc.mjs";
import { as as u, ar as h } from "./index-DV1w5RNX.mjs";
import { r as f } from "./chain-tk4BDPwT.mjs";
class i {
  constructor(e, r, s, t) {
    a(this, "network");
    a(this, "chain");
    a(this, "rpc");
    a(this, "contracts");
    a(this, "coreAddress");
    this.network = e, this.chain = r, this.rpc = s, this.contracts = t;
    const n = this.contracts.coreBridge;
    if (!n)
      throw new Error(`Wormhole Token Bridge contract for domain ${r} not found`);
    this.coreAddress = n;
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
    const [s, t] = await p.chainFromRpc(e), n = r[t];
    if (n.network !== s)
      throw new Error(`Network mismatch: ${n.network} != ${s}`);
    return new i(s, t, e, n.contracts);
  }
  async *publishMessage(e, r, s, t) {
    throw new Error("Method not implemented.");
  }
  async *verifyMessage(e, r) {
    throw new Error("Not implemented.");
  }
  async parseTransaction(e) {
    const r = await this.rpc.getTx(e);
    if (!r)
      throw new Error("No transaction found for txid: " + e);
    return [i.parseWormholeMessageId(this.chain, this.coreAddress, r)];
  }
  async parseMessages(e) {
    const r = await this.rpc.getTx(e);
    if (!r)
      throw new Error("No transaction found for txid: " + e);
    return [i.parseWormholeMessage(this.chain, this.coreAddress, r)];
  }
  static parseWormholeMessage(e, r, s) {
    const t = s.events.filter((o) => o.type === "wasm" && o.attributes[0].key === "_contract_address" && o.attributes[0].value === r);
    if (t.length === 0)
      throw new Error("No wormhole message found in tx");
    t.length > 1 && console.error(`Expected single message, found ${t.length}`);
    const [n] = t, d = Object.fromEntries(n.attributes.map((o) => [o.key.split(".")[1], o.value]));
    return l("Uint8Array", {
      emitterChain: e,
      emitterAddress: new u(h.decode(d.sender)),
      sequence: BigInt(d.sequence),
      guardianSet: 0,
      // TODO: need to implement guardian set idx
      timestamp: Number(d.block_time),
      consistencyLevel: 0,
      nonce: Number(d.nonce),
      signatures: [],
      payload: h.decode(d.message)
    });
  }
  static parseWormholeMessageId(e, r, s) {
    const t = i.parseWormholeMessage(e, r, s);
    return {
      chain: t.emitterChain,
      emitter: t.emitterAddress,
      sequence: t.sequence
    };
  }
}
f(g, "WormholeCore", i);
export {
  i as CosmwasmWormholeCore
};
