var p = Object.defineProperty;
var u = (o, t, i) => t in o ? p(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var e = (o, t, i) => (u(o, typeof t != "symbol" ? t + "" : t, i), i);
import { cg as d, aw as f, ax as m, ch as w, ci as B, cj as k } from "./index-DV1w5RNX.mjs";
function P(o) {
  return "getVersion" in o;
}
const s = {};
function R(o, t, i) {
  t in s || (s[t] = {});
  const r = s[t];
  if (o in r)
    throw new Error(`Protocol ${o} for protocol ${t} has already registered`);
  s[t][o] = i;
}
function C(o, t) {
  const i = d(o) ? f.get(o) : o;
  return t in s ? i in s[t] : !1;
}
function g(o, t) {
  if (t in s) {
    const i = s[t];
    if (i && o in i) {
      const r = i[o];
      if (r)
        return r;
    }
  }
  throw new Error(`No protocols registered for ${o}:${t}. This may be because the platform specific protocol implementation is not registered (by installing and importing it) or no implementation exists for this platform`);
}
const T = (o, t, i, r) => g(o, t).fromRpc(i, r);
class W {
  constructor(t, i) {
    e(this, "network");
    e(this, "config");
    this.network = t, this.config = i;
  }
  /** provides access to the static attributes of the PlatformContext class */
  utils() {
    return this.constructor;
  }
  /** Create a new Protocol Client instance by protocol name using the RPC connection to determine the network */
  getProtocol(t, i) {
    return T(this.utils()._platform, t, i, this.config);
  }
  /** Get the underlying ProtocolInitializer to construct yourself */
  getProtocolInitializer(t) {
    return g(this.utils()._platform, t);
  }
  /** Look up transaction logs and parse out Wormhole messages */
  async parseWormholeMessages(t, i, r) {
    return (await this.getProtocol("WormholeCore", i)).parseTransaction(r);
  }
}
class I {
  constructor(t, i, r) {
    e(this, "network");
    e(this, "chain");
    e(this, "config");
    e(this, "platform");
    e(this, "rpc");
    // Cached Protocol clients
    e(this, "protocols", /* @__PURE__ */ new Map());
    /**
     * Check to see if the Wormhole Core protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the Wormhole Core protocol
     */
    e(this, "supportsWormholeCore", () => this.supportsProtocol("WormholeCore"));
    /**
     * Get the Wormhole Core protocol client for this chain
     * @returns the Wormhole Core protocol client for this chain
     */
    e(this, "getWormholeCore", () => this.getProtocol("WormholeCore"));
    /**
     * Check to see if the Token Bridge protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the Token Bridge protocol
     */
    e(this, "supportsTokenBridge", () => this.supportsProtocol("TokenBridge"));
    /**
     * Get the Token Bridge protocol client for this chain
     * @returns the Token Bridge protocol client for this chain
     */
    e(this, "getTokenBridge", () => this.getProtocol("TokenBridge"));
    /**
     * Check to see if the Automatic Token Bridge protocol is supported by this chain
     * @returns  a boolean indicating if this chain supports the Automatic Token Bridge protocol
     */
    e(this, "supportsAutomaticTokenBridge", () => this.supportsProtocol("AutomaticTokenBridge"));
    /**
     * Get the Automatic Token Bridge protocol client for this chain
     * @returns the Automatic Token Bridge protocol client for this chain
     */
    e(this, "getAutomaticTokenBridge", () => this.getProtocol("AutomaticTokenBridge"));
    /**
     * Check to see if the Circle Bridge protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the Circle Bridge protocol
     */
    e(this, "supportsCircleBridge", () => this.supportsProtocol("CircleBridge"));
    /**
     * Get the Circle Bridge protocol client for this chain
     * @returns the Circle Bridge protocol client for this chain
     */
    e(this, "getCircleBridge", () => this.getProtocol("CircleBridge"));
    /**
     * Check to see if the Automatic Circle Bridge protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the Automatic Circle Bridge protocol
     */
    e(this, "supportsAutomaticCircleBridge", () => this.supportsProtocol("AutomaticCircleBridge"));
    /**
     * Get the Automatic Circle Bridge protocol client for this chain
     * @returns the Automatic Circle Bridge protocol client for this chain
     */
    e(this, "getAutomaticCircleBridge", () => this.getProtocol("AutomaticCircleBridge"));
    /**
     * Check to see if the IBC Bridge protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the IBC Bridge protocol
     */
    e(this, "supportsIbcBridge", () => this.supportsProtocol("IbcBridge"));
    /**
     * Get the IBC Bridge protocol client for this chain
     * @returns the IBC Bridge protocol client for this chain
     */
    e(this, "getIbcBridge", () => this.getProtocol("IbcBridge"));
    /**
     * Check to see if the Portico Bridge protocol is supported by this chain
     * @returns a boolean indicating if this chain supports the Portico Bridge protocol
     */
    e(this, "supportsPorticoBridge", () => this.supportsProtocol("PorticoBridge"));
    /**
     * Get the Portico Bridge protocol client for this chain
     * @returns the Portico Bridge protocol client for this chain
     */
    e(this, "getPorticoBridge", () => this.getProtocol("PorticoBridge"));
    this.config = i.config[t], this.platform = i, this.chain = this.config.key, this.network = this.config.network, this.rpc = r;
  }
  /**
   * Get an RPC connection for this chain, uses the configuration passed in
   * the initial constructor
   *
   * @returns the RPC connection for this chain
   */
  getRpc() {
    return this.rpc = this.rpc ? this.rpc : this.platform.getRpc(this.chain), this.rpc;
  }
  /**
   *  Get the number of decimals for a token
   *
   *  @param token the token to get the decimals for
   *  @returns the number of decimals for the token
   */
  async getDecimals(t) {
    if (m(t))
      return this.config.nativeTokenDecimals;
    if (this.config.tokenMap) {
      const i = w({ chain: this.chain, address: t }), r = B(this.network, this.chain, i);
      if (r)
        return r.decimals;
    }
    return this.platform.utils().getDecimals(this.chain, await this.getRpc(), t);
  }
  /**
   * Get the balance of a token for a given address
   *
   * @param walletAddr the address to get the balance for
   * @param token the token to get the balance for
   * @returns the balance of the token for the address
   *
   */
  async getBalance(t, i) {
    return this.platform.utils().getBalance(this.chain, await this.getRpc(), t, i);
  }
  /**
   * Get the latest block number seen by the chain according to the RPC
   *
   * @returns the latest block number
   */
  async getLatestBlock() {
    return this.platform.utils().getLatestBlock(await this.getRpc());
  }
  /**
   * Get the latest _finalized_ block number seen by the chain according to the RPC
   *
   * @returns the latest finalized block number
   */
  async getLatestFinalizedBlock() {
    return this.platform.utils().getLatestFinalizedBlock(await this.getRpc());
  }
  /**
   * Parse the Wormhole Core messages from a transaction
   *
   * @param txid the transaction to parse
   * @returns the Wormhole Core messages emitted by the transaction
   */
  async parseTransaction(t) {
    return this.platform.parseWormholeMessages(this.chain, await this.getRpc(), t);
  }
  /**
   *  Send a transaction and wait for it to be confirmed
   *
   * @param stxns the signed transaction to send
   * @returns the transaction hashes of the sent transactions
   */
  async sendWait(t) {
    return this.platform.utils().sendWait(this.chain, await this.getRpc(), t);
  }
  /**
   * Get the token data from the local cache if available
   * @param symbol the symbol of the token to get
   * @returns the token data if available
   */
  getToken(t) {
    if (this.config.tokenMap && t in this.config.tokenMap)
      return this.config.tokenMap[t];
  }
  /**
   * Get the token id of the wrapped token for the native gas token
   *
   * @returns the wrapped token for the native gas token
   */
  async getNativeWrappedTokenId() {
    if (this.config.wrappedNative) {
      const { address: i } = this.config.wrappedNative;
      return { chain: this.chain, address: k(this.chain, i) };
    }
    const t = await this.getTokenBridge();
    return { chain: this.chain, address: await t.getWrappedNative() };
  }
  /**
   * Get the token account for a given address and token
   *
   * @remarks
   * This is really only useful in the context of Solana but in order
   * to provide a consistent interface, we provide it here.
   *
   * @param address the address to get the token account for
   * @param token the token to get the token account for
   * @returns the token account for the address and token
   */
  async getTokenAccount(t, i) {
    return { chain: this.chain, address: t };
  }
  /**
   * Check to see if a given protocol is supported by this chain
   * by checking if it is registered in the platform and the configuration
   * is available and correct
   *
   * @param protocolName the name of the Protocol to check for support
   * @returns a boolean indicating if this protocol is supported
   */
  supportsProtocol(t) {
    return C(this.chain, t);
  }
  /**
   * Construct a protocol client for the given protocol
   *
   * Note: If no contracts are passed, we assume the default contracts should be used
   * and that the protocol client is cacheable
   *
   * @param protocolName The name of the protocol to construct a client for
   * @returns An instance of the protocol client that implements the protocol interface for the chain
   */
  async getProtocol(t, i, r) {
    if (!i && this.protocols.has(t))
      return this.protocols.get(t);
    const n = i ? { ...this.config.contracts, ...i } : this.config.contracts, a = r ?? await this.getRpc(), h = this.platform.getProtocolInitializer(t);
    let c;
    if (r) {
      if (i)
        throw new Error("Custom contracts are currently not supported with custom rpc connection. Add the contracts to the base config.");
      c = await this.platform.getProtocol(t, a);
    } else if (P(h)) {
      const l = await h.getVersion(a, n);
      c = new h(this.network, this.chain, a, n, l);
    } else
      c = new h(this.network, this.chain, a, n);
    return i || this.protocols.set(t, c), c;
  }
}
export {
  I as C,
  W as P,
  R as r
};
