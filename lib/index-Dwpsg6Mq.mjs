var T = Object.defineProperty;
var B = (i, e, t) => e in i ? T(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var a = (i, e, t) => (B(i, typeof e != "symbol" ? e + "" : e, t), t);
import { cN as g, cS as x, b3 as I, cT as S, bW as A, cD as b, cE as v, as as U, cj as f, d as $, cF as F, cw as d, ax as w, ar as c, cU as E } from "./index-DV1w5RNX.mjs";
import { a as h, A as C, c as W, b as m, d as k, i as N } from "./aptos-fTgRd9kK.mjs";
import { r as O } from "./chain-tk4BDPwT.mjs";
class R {
  constructor(e, t, s, n, r = !1) {
    a(this, "transaction");
    a(this, "network");
    a(this, "chain");
    a(this, "description");
    a(this, "parallelizable");
    this.transaction = e, this.network = t, this.chain = s, this.description = n, this.parallelizable = r;
  }
}
const Q = [
  { name: "tokenBridgeAddress", ...g },
  { name: "chain", ...x() },
  {
    name: "domainSeparator",
    binary: "bytes",
    custom: I.encode(h),
    omit: !0
  },
  { name: "tokenId", ...g },
  // from https://github.com/aptos-labs/aptos-core/blob/25696fd266498d81d346fe86e01c330705a71465/aptos-move/framework/aptos-framework/sources/account.move#L90-L95
  { name: "domainSeparator", binary: "bytes", custom: new Uint8Array([255]), omit: !0 }
], P = (i) => S(Q, i);
class o {
  constructor(e, t, s, n) {
    a(this, "network");
    a(this, "chain");
    a(this, "connection");
    a(this, "contracts");
    a(this, "chainId");
    a(this, "tokenBridgeAddress");
    this.network = e, this.chain = t, this.connection = s, this.contracts = n, this.chainId = A(t);
    const r = n.tokenBridge;
    if (!r)
      throw new Error(`TokenBridge contract Address for chain ${t} not found`);
    this.tokenBridgeAddress = r;
  }
  static async fromRpc(e, t) {
    const [s, n] = await C.chainFromRpc(e), r = t[n];
    if (r.network !== s)
      throw new Error("Network mismatch " + r.network + " !== " + s);
    return new o(s, n, e, r.contracts);
  }
  async isWrappedAsset(e) {
    try {
      return await this.getOriginalAsset(e), !0;
    } catch {
      return !1;
    }
  }
  async getOriginalAsset(e) {
    const t = e.toString().split(h);
    let s;
    if (s = (await this.connection.getAccountResource(t[0], `${this.tokenBridgeAddress}::state::OriginInfo`)).data, !s)
      throw b;
    const n = v(parseInt(s.token_chain.number)), r = new U(s.token_address.external_address);
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
    const t = await this.getAssetFullyQualifiedType(e);
    if (!t)
      throw new Error("Invalid asset address.");
    return await this.connection.getAccountResource(W(t), `${this.tokenBridgeAddress}::state::OriginInfo`), f(this.chain, t);
  }
  async isTransferCompleted(e) {
    const s = (await this.connection.getAccountResource(this.tokenBridgeAddress, `${this.tokenBridgeAddress}::state::State`)).data.consumed_vaas.elems.handle;
    try {
      return await this.connection.getTableItem(s, {
        key_type: "vector<u8>",
        value_type: "u8",
        key: `0x${$.Buffer.from(F(e.hash)).toString("hex")}`
      }), !0;
    } catch {
      return !1;
    }
  }
  async getWrappedNative() {
    return f(this.chain, m);
  }
  async *createAttestation(e, t) {
    const s = { chain: this.chain, address: new k(e) }, n = await this.getAssetFullyQualifiedType(s);
    if (!n)
      throw new Error("Invalid asset address.");
    yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::attest_token::attest_token_entry`,
      type_arguments: [n],
      arguments: []
    }, "Aptos.AttestToken");
  }
  async *submitAttestation(e, t) {
    yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::wrapped::create_wrapped_coin_type`,
      type_arguments: [],
      arguments: [d(e)]
    }, "Aptos.CreateWrappedCoinType");
    const s = await this.getAssetFullyQualifiedType(e.payload.token);
    if (!s)
      throw new Error("Invalid asset address.");
    yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::wrapped::create_wrapped_coin`,
      type_arguments: [s],
      arguments: [d(e)]
    }, "Aptos.CreateWrappedCoin");
  }
  async *transfer(e, t, s, n, r) {
    const _ = 0n, l = 0n, p = w(s) ? m : s.toString(), u = t.address.toUniversalAddress().toUint8Array(), y = A(t.chain);
    r ? yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::transfer_tokens::transfer_tokens_with_payload_entry`,
      type_arguments: [p],
      arguments: [n, y, u, l, r]
    }, "Aptos.TransferTokensWithPayload") : yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::transfer_tokens::transfer_tokens_entry`,
      type_arguments: [p],
      arguments: [n, y, u, _, l]
    }, "Aptos.TransferTokens");
  }
  async *redeem(e, t, s = !0) {
    const n = t.payload.token.chain === this.chain ? await this.getTypeFromExternalAddress(t.payload.token.address.toString()) : await this.getAssetFullyQualifiedType(t.payload.token);
    if (!n)
      throw new Error("Invalid asset address.");
    yield this.createUnsignedTx({
      function: `${this.tokenBridgeAddress}::complete_transfer::submit_vaa_and_register_entry`,
      type_arguments: [n],
      arguments: [d(t)]
    }, "Aptos.CompleteTransfer");
  }
  async getAssetFullyQualifiedType(e) {
    return e.chain === this.chain ? N(e.address.toString()) ? e.address.toString() : null : `${o.getForeignAssetAddress(this.chain, this.tokenBridgeAddress, e)}::coin::T`;
  }
  /**
   * Given a hash, returns the fully qualified type by querying the corresponding TypeInfo.
   * @param address Hash of fully qualified type
   * @returns The fully qualified type associated with the given hash
   */
  async getTypeFromExternalAddress(e) {
    try {
      const t = (await this.connection.getAccountResource(this.tokenBridgeAddress, `${this.tokenBridgeAddress}::state::State`)).data, { handle: s } = t.native_infos, n = await this.connection.getTableItem(s, {
        key_type: `${this.tokenBridgeAddress}::token_hash::TokenHash`,
        value_type: "0x1::type_info::TypeInfo",
        key: { hash: e }
      });
      return n ? [
        n.account_address,
        c.decode(n.module_name),
        c.decode(n.struct_name)
      ].join(h) : null;
    } catch {
      return null;
    }
  }
  /**
   * Derive the module address for an asset defined by the given origin chain and address.
   * @param tokenBridgeAddress Address of token bridge (32 bytes)
   * @param originChain Chain ID of chain that original asset is from
   * @param originAddress Native address of asset
   * @returns The module address for the given asset
   */
  static getForeignAssetAddress(e, t, s) {
    if (w(s.address))
      throw new Error("Invalid token address");
    const n = P({
      chain: s.chain,
      tokenBridgeAddress: new k(t).toUniversalAddress(),
      tokenId: s.address.toUniversalAddress()
    });
    return c.encode(E(n), !0);
  }
  createUnsignedTx(e, t, s = !1) {
    return new R(e, this.network, this.chain, t, s);
  }
}
O("Aptos", "TokenBridge", o);
export {
  o as AptosTokenBridge
};
