var N = Object.defineProperty;
var W = (h, t, e) => t in h ? N(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var c = (h, t, e) => (W(h, typeof t != "symbol" ? t + "" : t, e), e);
import "./index-1UYO6C7i.mjs";
import { C as p, a as i, G as v, _ as x } from "./cosmwasm-DHfd5lcQ.mjs";
import { b as o, c as w, C as E } from "./unsignedTransaction-DMQTL-mr.mjs";
import { ax as u, b2 as d, bW as B, cj as S, cE as q, as as I, cw as y } from "./index-DV1w5RNX.mjs";
import { r as D } from "./chain-tk4BDPwT.mjs";
class k {
  constructor(t, e, r, s) {
    c(this, "network");
    c(this, "chain");
    c(this, "rpc");
    c(this, "contracts");
    c(this, "tokenBridge");
    c(this, "translator");
    this.network = t, this.chain = e, this.rpc = r, this.contracts = s;
    const n = this.contracts.tokenBridge;
    if (!n)
      throw new Error(`Wormhole Token Bridge contract for domain ${e} not found`);
    if (this.tokenBridge = n, this.translator = this.contracts.translator, this.translator !== void 0 && this.translator === "")
      throw new Error("Translator address may be undefined but not empty string");
  }
  static async fromRpc(t, e) {
    const [r, s] = await p.chainFromRpc(t), n = e[s];
    if (n.network !== r)
      throw new Error(`Network mismatch: ${n.network} != ${r}`);
    return new k(r, s, t, e[s].contracts);
  }
  async isWrappedAsset(t) {
    try {
      return await this.getOriginalAsset(t), !0;
    } catch {
    }
    return !1;
  }
  async hasWrappedAsset(t) {
    try {
      return await this.getWrappedAsset(t), !0;
    } catch {
    }
    return !1;
  }
  async getWrappedAsset(t) {
    if (t.chain === this.chain)
      throw new Error(`Expected foreign chain, got ${t.chain}`);
    if (u(t.address))
      throw new Error("Native asset cannot be a wrapped asset");
    const e = d.encode(t.address.toUniversalAddress().toUint8Array()), { address: r } = await this.rpc.queryContractSmart(this.tokenBridge, {
      wrapped_registry: {
        chain: B(t.chain),
        address: e
      }
    });
    return S(this.chain, r);
  }
  async getOriginalAsset(t) {
    let e = new i(t);
    e.denomType === "factory" && (e = v.factoryToCw20(e));
    const r = await this.rpc.queryContractSmart(e.toString(), {
      wrapped_asset_info: {}
    }), s = q(r.asset_chain), n = d.decode(r.asset_address);
    return {
      chain: s,
      address: new I(new Uint8Array(n))
    };
  }
  async isTransferCompleted(t) {
    const e = d.encode(y(t));
    return (await this.rpc.queryContractSmart(this.tokenBridge, {
      is_vaa_redeemed: { vaa: e }
    })).is_redeemed;
  }
  async *createAttestation(t, e) {
    if (!e)
      throw new Error("Payer required to create attestation");
    const r = new i(t).toString(), s = new i(e).toString(), n = 0, g = u(t) ? {
      native_token: {
        denom: p.getNativeDenom(this.network, this.chain)
      }
    } : {
      token: { contract_addr: r }
    };
    yield this.createUnsignedTx({
      msgs: [
        o(s, this.tokenBridge, {
          create_asset_meta: { asset_info: g, nonce: n }
        })
      ],
      fee: w(this.network, this.chain),
      memo: "Wormhole - Create Attestation"
    }, "TokenBridge.createAttestation");
  }
  async *submitAttestation(t, e) {
    if (!e)
      throw new Error("Payer required to submit attestation");
    const r = new i(e).toString();
    yield this.createUnsignedTx({
      msgs: [
        o(r, this.tokenBridge, {
          submit_vaa: { data: y(t) }
        })
      ],
      fee: w(this.network, this.chain),
      memo: "Wormhole - Submit Attestation"
    }, "TokenBridge.submitAttestation");
  }
  async *transfer(t, e, r, s, n) {
    const g = Math.round(Math.random() * 1e5), f = "0", C = B(e.chain), b = d.encode(e.address.toUniversalAddress().toUint8Array()), U = p.getNativeDenom(this.network, this.chain), _ = u(r);
    let a = _ ? U : r.toString();
    a.startsWith("factory") && (a = v.factoryToCw20(new i(a)).toString());
    const l = new i(t).toString(), A = (m) => {
      const T = {
        asset: {
          amount: s.toString(),
          info: m
        },
        recipient_chain: C,
        recipient: b,
        fee: f,
        nonce: g
      };
      return n ? {
        initiate_transfer_with_payload: { ...T, payload: d.encode(n) }
      } : {
        initiate_transfer: T
      };
    };
    if (_) {
      const m = [
        o(l, this.tokenBridge, { deposit_tokens: {} }, [
          { amount: s.toString(), denom: a }
        ]),
        o(l, this.tokenBridge, A({
          native_token: { denom: a }
        }))
      ];
      yield this.createUnsignedTx({
        msgs: m,
        fee: w(this.network, this.chain),
        memo: "Wormhole - Initiate Native Transfer"
      }, "TokenBridge.transferNative");
    } else {
      const m = [
        o(l, a, {
          increase_allowance: {
            spender: this.tokenBridge,
            amount: s.toString(),
            expires: { never: {} }
          }
        }),
        o(l, this.tokenBridge, A({
          token: { contract_addr: a }
        }), [{ amount: s.toString(), denom: a }])
      ];
      yield this.createUnsignedTx({
        msgs: m,
        fee: w(this.network, this.chain),
        memo: "Wormhole - Initiate Transfer"
      }, "TokenBridge.transfer");
    }
  }
  async *redeem(t, e, r = !0) {
    const s = d.encode(y(e)), n = new i(t).toString(), f = this.translator && new i(this.translator).toUniversalAddress().equals(e.payload.to.address) ? o(n, this.translator, {
      complete_transfer_and_convert: {
        vaa: s
      }
    }) : o(n, this.tokenBridge, {
      submit_vaa: { data: s }
    });
    yield this.createUnsignedTx({
      msgs: [f],
      fee: w(this.network, this.chain),
      memo: "Wormhole - Complete Transfer"
    }, "TokenBridge.redeem");
  }
  async parseTransactionDetails(t) {
    throw new Error("Not implemented");
  }
  async getWrappedNative() {
    return S(this.chain, p.getNativeDenom(this.network, this.chain));
  }
  createUnsignedTx(t, e, r = !1) {
    return new E(t, this.network, this.chain, e, r);
  }
}
D(x, "TokenBridge", k);
export {
  k as CosmwasmTokenBridge
};
