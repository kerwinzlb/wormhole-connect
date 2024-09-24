var se = Object.defineProperty;
var oe = (s, e, t) => e in s ? se(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var d = (s, e, t) => (oe(s, typeof e != "symbol" ? e + "" : e, t), t);
import { cb as T, d1 as m, aA as _, bW as C, b3 as f, ax as re, ar as M, d2 as Q, d3 as ae, b2 as S, d4 as ie, d as ce, d5 as X, d6 as N, d7 as de, d8 as Z, d9 as pe, da as ge, db as J, cF as ue, cw as fe } from "./index-DV1w5RNX.mjs";
import { s as l, A as P, a as le } from "./algorand-CuJwCvKw.mjs";
import { c as he } from "./create-Du0Xo8xc.mjs";
import { r as Ae } from "./chain-tk4BDPwT.mjs";
class me {
  constructor(e, t, o, n, r = !1) {
    d(this, "transaction");
    d(this, "network");
    d(this, "chain");
    d(this, "description");
    d(this, "parallelizable");
    this.transaction = e, this.network = t, this.chain = o, this.description = n, this.parallelizable = r;
  }
}
const W = 1002e3, j = 15, Y = 127, F = 8, K = Y * F, ee = Y * j, V = F * ee, x = {
  // Forever grateful to https://github.com/joeltg/big-varint/blob/main/src/unsigned.ts
  _limit: 127,
  encodingLength: (s) => {
    let e = 0;
    for (; s >= 128; e++)
      s >>= 7;
    return e + 1;
  },
  encode: (s, e, t) => {
    if (typeof s == "bigint" && (s = l(s)), s < 0)
      throw new RangeError("value must be unsigned");
    const o = x.encodingLength(s);
    if (e = e || new ArrayBuffer(o), t = t || 0, e.byteLength < t + o)
      throw new RangeError("the buffer is too small to encode the number at the offset");
    const n = new Uint8Array(e, t);
    let r = 0;
    for (; x._limit < s; )
      n[r++] = s & x._limit | 128, s >>= 7;
    return n[r] = Number(s), n;
  },
  decode: (s, e = 0) => {
    let t = 0, o = 0, n;
    do {
      if (n = s[e + o], n === void 0)
        throw new RangeError("offset out of range");
      t += (n & x._limit) << o * 7, o++;
    } while (128 <= n);
    return t;
  }
}, g = {
  // Get the storage lsig for a Wormhole message ID
  forMessageId: (s, e) => {
    const t = T(m(s)).publicKey, o = e.emitter.toUniversalAddress().toUint8Array(), n = _.toBytes(BigInt(C(e.chain)), 2), r = f.concat(n, o);
    return g.fromData({
      appId: s,
      appAddress: t,
      idx: e.sequence / BigInt(V),
      address: r
    });
  },
  // Get the storage lsig for a wrapped asset
  forWrappedAsset: (s, e) => {
    if (re(e.address))
      throw new Error("native asset cannot be a wrapped asset");
    const t = T(m(s)).publicKey;
    return g.fromData({
      appId: s,
      appAddress: t,
      idx: BigInt(C(e.chain)),
      address: e.address.toUniversalAddress().toUint8Array()
    });
  },
  // Get the storage lsig for a native asset
  forNativeAsset: (s, e) => {
    const t = T(m(s)).publicKey;
    return g.fromData({
      appId: s,
      appAddress: t,
      idx: e,
      address: f.encode("native")
    });
  },
  // Get the storage lsig for the guardian set
  forGuardianSet: (s, e) => {
    const t = T(m(s)).publicKey;
    return g.fromData({
      appId: s,
      appAddress: t,
      idx: BigInt(e),
      address: f.encode("guardian")
    });
  },
  forEmitter: (s, e) => {
    const t = T(m(s)).publicKey;
    return g.fromData({
      appId: s,
      appAddress: t,
      idx: 0n,
      address: e
    });
  },
  _encode: (s) => typeof s == "bigint" ? [M.encode(x.encode(s))] : [M.encode(x.encode(s.length)), M.encode(s)],
  fromData: (s) => {
    const e = [
      "0620010181",
      ...g._encode(s.idx),
      "4880",
      ...g._encode(s.address),
      "483110810612443119221244311881",
      ...g._encode(s.appId),
      "1244312080",
      ...g._encode(s.appAddress),
      "124431018100124431093203124431153203124422"
    ], t = M.decode(e.join(""));
    return new Q(t);
  },
  /**
   * Returns the local data for an application ID
   * @param client Algodv2 client
   * @param appId Application ID of interest
   * @param address Address of the account
   * @returns Promise with Uint8Array of data squirreled away
   */
  decodeLocalState: async (s, e, t) => {
    let o;
    try {
      const a = await s.accountApplicationInformation(t, l(e)).do();
      o = ae.from_obj_for_encoding(a).appLocalState;
    } catch {
      return new Uint8Array();
    }
    const n = S.encode("meta");
    let r = /* @__PURE__ */ new Map();
    for (const a of o.keyValue) {
      if (a.key === n)
        continue;
      const p = S.decode(a.key)[0], u = S.decode(a.value.bytes);
      r.set(p, u);
    }
    const c = [];
    for (let a = 0; a < j; a++)
      r.has(a) && c.push(r.get(a));
    return f.concat(...c);
  },
  /**
   * This function is used to check if a VAA has been redeemed by looking at a specific bit
   * @param client AlgodV2 client
   * @param appId Application Id
   * @param addr Wallet address. Someone has to pay for this
   * @param seq The sequence number of the redemption
   * @returns True, if the bit was set and VAA was redeemed, False otherwise
   */
  checkBitsSet: async (s, e, t, o) => {
    let n = !1, r;
    const c = await s.accountInformation(t).do(), p = ie.from_obj_for_encoding(c).appsLocalState;
    if (p && p.forEach((y) => {
      BigInt(y.id) === e && (r = y.keyValue);
    }), (r == null ? void 0 : r.length) === 0)
      return n;
    const u = BigInt(V), A = BigInt(8), I = o / u * u, w = l(o - I), B = Math.floor(w / K), b = Math.floor((w - B * K) / 8), U = S.encode(_.toBytes(B, 1));
    return r == null || r.forEach((y) => {
      if (y.key === U) {
        const v = ce.Buffer.from(y.value.bytes, "base64"), E = 1 << l(o % A);
        n = (v[b] & E) != 0;
        return;
      }
    }), n;
  },
  /**
   * Checks to see if the account exists for the application
   * @param client An Algodv2 client
   * @param appId Application ID
   * @param acctAddr Account address to check
   * @returns True, if account exists for application, False otherwise
   */
  storageAccountExists: async (s, e, t) => {
    try {
      const o = await s.accountApplicationInformation(e, l(t)).do();
      return Object.keys(o).length > 0;
    } catch {
    }
    return !1;
  }
}, i = class i {
  constructor(e, t, o, n) {
    d(this, "network");
    d(this, "chain");
    d(this, "connection");
    d(this, "contracts");
    d(this, "chainId");
    d(this, "coreAppId");
    d(this, "coreAppAddress");
    d(this, "tokenBridgeAppId");
    d(this, "tokenBridgeAppAddress");
    if (this.network = e, this.chain = t, this.connection = o, this.contracts = n, this.chainId = C(t), !n.coreBridge)
      throw new Error(`Core contract address for chain ${t} not found`);
    const r = BigInt(n.coreBridge);
    if (this.coreAppId = r, this.coreAppAddress = m(r), !n.tokenBridge)
      throw new Error(`TokenBridge contract address for chain ${t} not found`);
    const c = BigInt(n.tokenBridge);
    this.tokenBridgeAppId = c, this.tokenBridgeAppAddress = m(c);
  }
  getGuardianSet(e) {
    throw new Error("Method not implemented.");
  }
  async *verifyMessage(e, t, o) {
    const n = new P(e).toString(), r = await i.submitVAAHeader(this.connection, this.coreAppId, o ?? this.coreAppId, t, n);
    for (const c of r.txs)
      yield this.createUnsignedTx(c, "Core.verifyMessage");
  }
  static async fromRpc(e, t) {
    const [o, n] = await le.chainFromRpc(e), r = t[n];
    if (r.network !== o)
      throw new Error(`Network mismatch: ${r.network} !== ${o}`);
    return new i(o, n, e, r.contracts);
  }
  async *publishMessage(e, t) {
    const o = new P(e), n = o.toString(), r = await this.connection.getTransactionParams().do(), c = g.forEmitter(this.coreAppId, o.toUint8Array()), { accounts: a, txs: p } = await i.maybeCreateStorageTx(this.connection, n, this.coreAppId, c, r);
    for (const A of p)
      yield this.createUnsignedTx(A, "Core.publishMessage", !0);
    const u = X({
      from: n,
      appIndex: l(this.coreAppId),
      appArgs: [i.publishMessage, t, _.toBytes(0n, 8)],
      accounts: a,
      onComplete: N.NoOpOC,
      suggestedParams: r
    });
    yield this.createUnsignedTx({ tx: u }, "Core.publishMessage", !0);
  }
  /**
   * Return the message fee for the core bridge
   * @param client An Algodv2 client
   * @param bridgeId The application ID of the core bridge
   * @returns Promise with the message fee for the core bridge
   */
  async getMessageFee() {
    var n;
    const e = await this.connection.getApplicationByID(l(this.coreAppId)).do(), o = (n = de.from_obj_for_encoding(e).params.globalState) == null ? void 0 : n.find((r) => r.key === i.feeKey);
    return o ? BigInt(o.value.uint) : 0n;
  }
  async getGuardianSetIndex() {
    throw new Error("Not implemented");
  }
  async parseTransaction(e) {
    const t = await this.connection.pendingTransactionInformation(e).do(), o = Z.from_obj_for_encoding(t);
    return this.parseTx(o).map((n) => ({
      chain: n.emitterChain,
      emitter: n.emitterAddress,
      sequence: n.sequence
    }));
  }
  async parseMessages(e) {
    const t = await this.connection.pendingTransactionInformation(e).do(), o = Z.from_obj_for_encoding(t);
    return this.parseTx(o);
  }
  parseTx(e) {
    const t = [];
    if (e.innerTxns && e.innerTxns.length > 0 && t.push(...e.innerTxns.flatMap((p) => this.parseTx(p))), BigInt(e.txn.txn.apid ?? 0) !== this.coreAppId || !e.logs || e.logs.length === 0)
      return t;
    const o = e.txn.txn.apaa ?? [];
    if (o.length !== 3 || !f.equals(new Uint8Array(o[0]), i.publishMessage))
      return t;
    const n = _.decode(e.logs[0]), r = new P(e.txn.txn.snd).toUniversalAddress(), c = new Uint8Array(o[1]), a = _.decode(o[2]);
    return t.push(he("Uint8Array", {
      emitterChain: this.chain,
      emitterAddress: r,
      sequence: n,
      guardianSet: 0,
      // TODO: should we get this from the contract on init?
      timestamp: 0,
      // TODO: Would need to get the full block to get the timestamp
      consistencyLevel: 0,
      nonce: Number(a),
      payload: c,
      signatures: []
    })), t;
  }
  /**
   * Constructs opt in transactions
   * @param client An Algodv2 client
   * @param senderAddr Sender address
   * @param appId Application ID
   * @param storage StorageLogicSig
   * @returns Address and array of TransactionSignerPairs
   */
  static async maybeCreateStorageTx(e, t, o, n, r) {
    const c = m(o), a = n.address(), p = [];
    if (await g.storageAccountExists(e, a, o))
      return { accounts: [a], txs: p };
    r = r ?? await e.getTransactionParams().do();
    const u = pe({
      from: t,
      to: a,
      amount: W,
      suggestedParams: r
    });
    u.fee = u.fee * 2, p.push({ tx: u });
    const A = ge({
      from: a,
      appIndex: l(o),
      rekeyTo: c,
      suggestedParams: r
    });
    return A.fee = 0, p.push({
      tx: A,
      signer: {
        address: n.address(),
        signTxn: (I) => Promise.resolve(J(I, n).blob)
      }
    }), {
      accounts: [a],
      txs: p
    };
  }
  /**
   * Submits just the header of the VAA
   * @param client AlgodV2 client
   * @param bridgeId Application ID of the core bridge
   * @param vaa The VAA (just the header is used)
   * @param senderAddr Sending account address
   * @param appid Application ID
   * @returns Promise with current VAA state
   */
  static async submitVAAHeader(e, t, o, n, r, c) {
    c = c ?? await e.getTransactionParams().do();
    let a = [];
    const p = g.forMessageId(o, {
      chain: n.emitterChain,
      sequence: n.sequence,
      emitter: n.emitterAddress
    }), { accounts: u, txs: A } = await i.maybeCreateStorageTx(e, r, o, p, c);
    a.push(...A);
    const I = g.forGuardianSet(t, n.guardianSet), { accounts: [w], txs: B } = await i.maybeCreateStorageTx(e, r, t, I, c);
    a.push(...B);
    let b = [...u, w];
    const U = await g.decodeLocalState(e, t, w), y = ue(n.hash), v = n.signatures.length, E = Math.ceil(v / i.MAX_SIGS_PER_TXN), G = 20, D = new Q(i.ALGO_VERIFY);
    for (let O = 0; O < E; O++) {
      const H = O * i.MAX_SIGS_PER_TXN, k = n.signatures.slice(H, H + i.MAX_SIGS_PER_TXN), te = k.length * G, q = new Uint8Array(te);
      for (let h = 0; h < k.length; h++) {
        const $ = k[h], ne = U.slice($.guardianIndex * G + 1, ($.guardianIndex + 1) * G + 1);
        q.set(ne, h * 20);
      }
      const z = X({
        appArgs: [
          i.verifySigs,
          f.concat(...k.map((h) => f.concat(new Uint8Array([h.guardianIndex]), h.signature.encode()))),
          q,
          y
        ],
        accounts: b,
        appIndex: l(t),
        from: i.ALGO_VERIFY_HASH,
        onComplete: N.NoOpOC,
        suggestedParams: c
      });
      z.fee = 0, a.push({
        tx: z,
        signer: {
          address: D.address(),
          signTxn: (h) => Promise.resolve(J(h, D).blob)
        }
      });
    }
    const L = X({
      appArgs: [i.verifyVaa, fe(n)],
      accounts: b,
      appIndex: l(t),
      from: r,
      onComplete: N.NoOpOC,
      suggestedParams: c
    });
    return L.fee = L.fee * (2 + E), a.push({ tx: L }), { accounts: b, txs: a };
  }
  createUnsignedTx(e, t, o = !0) {
    return new me(e, this.network, this.chain, t, o);
  }
};
d(i, "MAX_SIGS_PER_TXN", 6), d(i, "ALGO_VERIFY_HASH", "EZATROXX2HISIRZDRGXW4LRQ46Z6IUJYYIHU3PJGP7P5IQDPKVX42N767A"), d(i, "ALGO_VERIFY", new Uint8Array([
  6,
  32,
  4,
  1,
  0,
  32,
  20,
  38,
  1,
  0,
  49,
  32,
  50,
  3,
  18,
  68,
  49,
  1,
  35,
  18,
  68,
  49,
  16,
  129,
  6,
  18,
  68,
  54,
  26,
  1,
  54,
  26,
  3,
  54,
  26,
  2,
  136,
  0,
  3,
  68,
  34,
  67,
  53,
  2,
  53,
  1,
  53,
  0,
  40,
  53,
  240,
  40,
  53,
  241,
  52,
  0,
  21,
  53,
  5,
  35,
  53,
  3,
  35,
  53,
  4,
  52,
  3,
  52,
  5,
  12,
  65,
  0,
  68,
  52,
  1,
  52,
  0,
  52,
  3,
  129,
  65,
  8,
  34,
  88,
  23,
  52,
  0,
  52,
  3,
  34,
  8,
  36,
  88,
  52,
  0,
  52,
  3,
  129,
  33,
  8,
  36,
  88,
  7,
  0,
  53,
  241,
  53,
  240,
  52,
  2,
  52,
  4,
  37,
  88,
  52,
  240,
  52,
  241,
  80,
  2,
  87,
  12,
  20,
  18,
  68,
  52,
  3,
  129,
  66,
  8,
  53,
  3,
  52,
  4,
  37,
  8,
  53,
  4,
  66,
  255,
  180,
  34,
  137
])), // global state key for message fee
d(i, "feeKey", S.encode("MessageFee")), // method selector for verifying a VAA
d(i, "verifyVaa", f.encode("verifyVAA")), // method selector for verifying signatures of a VAA
d(i, "verifySigs", f.encode("verifySigs")), // method selector string for publishing a message
d(i, "publishMessage", f.encode("publishMessage"));
let R = i;
Ae("Algorand", "WormholeCore", R);
const Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlgorandWormholeCore: R,
  BITS_PER_BYTE: F,
  BITS_PER_KEY: K,
  MAX_BITS: V,
  MAX_BYTES: ee,
  MAX_BYTES_PER_KEY: Y,
  MAX_KEYS: j,
  SEED_AMT: W,
  StorageLogicSig: g,
  varint: x
}, Symbol.toStringTag, { value: "Module" }));
export {
  R as A,
  g as S,
  me as a,
  Te as i
};
