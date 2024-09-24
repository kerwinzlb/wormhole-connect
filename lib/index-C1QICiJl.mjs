var J = Object.defineProperty;
var Q = (O, s, t) => s in O ? J(O, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : O[s] = t;
var d = (O, s, t) => (Q(O, typeof s != "symbol" ? s + "" : s, t), t);
import { A as b, S as g, a as X } from "./index-FlkP7OMm.mjs";
import { dc as Y, b3 as C, bW as $, d1 as q, dd as _, d4 as L, cE as Z, aA as S, as as tt, cj as H, d5 as y, d6 as k, d9 as W, cw as D, ax as et, cb as K, de as st, df as z, dg as ot } from "./index-DV1w5RNX.mjs";
import { a as nt, A as l, s as u, _ as rt } from "./algorand-CuJwCvKw.mjs";
import { r as at } from "./chain-tk4BDPwT.mjs";
const V = Y.fromSignature("portal_transfer(byte[])byte[]"), c = class c {
  constructor(s, t, n, o) {
    d(this, "network");
    d(this, "chain");
    d(this, "connection");
    d(this, "contracts");
    d(this, "chainId");
    d(this, "coreBridge");
    d(this, "coreAppId");
    d(this, "coreAppAddress");
    d(this, "tokenBridgeAppId");
    d(this, "tokenBridgeAddress");
    if (this.network = s, this.chain = t, this.connection = n, this.contracts = o, this.chainId = $(t), !o.coreBridge)
      throw new Error(`Core contract address for chain ${t} not found`);
    const r = BigInt(o.coreBridge);
    if (this.coreAppId = r, this.coreAppAddress = q(r), this.coreBridge = new b(s, t, n, o), !o.tokenBridge)
      throw new Error(`TokenBridge contract address for chain ${t} not found`);
    const a = BigInt(o.tokenBridge);
    this.tokenBridgeAppId = a, this.tokenBridgeAddress = q(a);
  }
  static async fromRpc(s, t) {
    const [n, o] = await nt.chainFromRpc(s), r = t[o];
    if (r.network !== n)
      throw new Error(`Network mismatch: ${r.network} != ${n}`);
    return new c(n, o, s, r.contracts);
  }
  // Checks a native address to see if it's a wrapped version
  async isWrappedAsset(s) {
    const t = new l(s).toInt();
    if (t === 0)
      return !1;
    const n = await this.connection.getAssetByID(t).do(), r = _.from_obj_for_encoding(n).params.creator, a = await this.connection.accountInformation(r).exclude("all").do(), e = L.from_obj_for_encoding(a);
    return (e == null ? void 0 : e.authAddr) === this.tokenBridgeAddress;
  }
  // Returns the original asset with its foreign chain
  async getOriginalAsset(s) {
    const t = new l(s).toInt(), n = await this.connection.getAssetByID(t).do(), o = _.from_obj_for_encoding(n), r = await g.decodeLocalState(this.connection, this.tokenBridgeAppId, o.params.creator);
    if (r.length < 94)
      throw new Error("Invalid local state data");
    const a = r.slice(92, 94), e = Z(S.decode(a)), p = new tt(r.slice(60, 92));
    return { chain: e, address: p };
  }
  // Returns the address of the native version of this asset
  async getWrappedAsset(s) {
    const t = g.forWrappedAsset(this.tokenBridgeAppId, s), n = await g.decodeLocalState(this.connection, this.tokenBridgeAppId, t.address());
    if (n.length < 8)
      throw new Error("Invalid wrapped asset data");
    return H(this.chain, S.decode(n.slice(0, 8)).toString());
  }
  // Checks if a wrapped version exists
  async hasWrappedAsset(s) {
    try {
      return await this.getWrappedAsset(s), !0;
    } catch {
    }
    return !1;
  }
  async getWrappedNative() {
    return H(this.chain, "0");
  }
  async isTransferCompleted(s) {
    const t = g.forMessageId(this.tokenBridgeAppId, {
      sequence: s.sequence,
      chain: s.emitterChain,
      emitter: s.emitterAddress
    });
    try {
      return await g.checkBitsSet(this.connection, this.tokenBridgeAppId, t.address(), s.sequence);
    } catch {
    }
    return !1;
  }
  // Creates a Token Attestation VAA containing metadata about
  // the token that may be submitted to a Token Bridge on another chain
  // to allow it to create a wrapped version of the token
  async *createAttestation(s, t) {
    if (!t)
      throw new Error("Payer required to create attestation");
    const n = new l(t).toString(), o = new l(s).toInt(), r = [], a = await this.connection.getTransactionParams().do(), e = g.forEmitter(this.coreAppId, new l(this.tokenBridgeAddress).toUint8Array()), { accounts: [p], txs: w } = await b.maybeCreateStorageTx(this.connection, n, this.coreAppId, e, a);
    r.push(...w);
    let f = "", i;
    if (o !== 0) {
      const m = await this.connection.getAssetByID(o).do(), U = _.from_obj_for_encoding(m), E = await this.connection.accountInformation(U.params.creator).do();
      if (i = L.from_obj_for_encoding(E), i.authAddr === this.tokenBridgeAddress.toString())
        throw new Error("Cannot re-attest wormhole assets");
    }
    const T = g.forNativeAsset(this.tokenBridgeAppId, BigInt(o)), B = await b.maybeCreateStorageTx(this.connection, n, this.tokenBridgeAppId, T);
    f = B.accounts[0], r.push(...B.txs);
    const I = y({
      from: n,
      appIndex: u(this.tokenBridgeAppId),
      onComplete: k.NoOpOC,
      appArgs: [c.noop],
      suggestedParams: a
    });
    r.push({ tx: I });
    const A = await this.coreBridge.getMessageFee();
    if (A > BigInt(0)) {
      const m = W({
        from: n,
        suggestedParams: a,
        to: this.tokenBridgeAddress,
        amount: A
      });
      r.push({ tx: m });
    }
    let j = [p, f, this.coreAppAddress];
    i && j.push(i.address);
    let h = y({
      appArgs: [c.attestToken, S.toBytes(o, 8)],
      accounts: j,
      appIndex: u(this.tokenBridgeAppId),
      foreignApps: [u(this.coreAppId)],
      foreignAssets: [o],
      from: n,
      onComplete: k.NoOpOC,
      suggestedParams: a
    });
    A > BigInt(0) ? h.fee *= 3 : h.fee *= 2, r.push({ tx: h });
    for (const m of r)
      yield this.createUnsignedTx(m, "TokenBridge.createAttestation", !0);
  }
  // Submits the Token Attestation VAA to the Token Bridge
  // to create the wrapped token represented by the data in the VAA
  async *submitAttestation(s, t, n) {
    if (!t)
      throw new Error("Sender required to submit attestation");
    n || (n = await this.connection.getTransactionParams().do());
    const o = t.toString(), a = g.forWrappedAsset(this.tokenBridgeAppId, s.payload.token).address(), e = [], p = [], w = await g.decodeLocalState(this.connection, this.tokenBridgeAppId, a);
    w.length > 8 && p.push(new l(w.slice(0, 8)).toInt()), e.push({
      tx: W({
        from: o,
        to: a,
        amount: 1e5,
        suggestedParams: n
      })
    });
    let f = new Uint8Array(1);
    f[0] = 1, e.push({
      tx: y({
        appArgs: [c.noop, f],
        appIndex: u(this.tokenBridgeAppId),
        from: o,
        onComplete: k.NoOpOC,
        suggestedParams: n
      })
    }), f = new Uint8Array(1), f[0] = 2, e.push({
      tx: y({
        appArgs: [c.noop, f],
        appIndex: u(this.tokenBridgeAppId),
        from: o,
        onComplete: k.NoOpOC,
        suggestedParams: n
      })
    }), e.push({
      tx: y({
        accounts: [],
        appArgs: [c.receiveAttest, D(s)],
        appIndex: u(this.tokenBridgeAppId),
        foreignAssets: p,
        from: o,
        onComplete: k.NoOpOC,
        suggestedParams: n
      })
    }), e[e.length - 1].tx.fee = e[e.length - 1].tx.fee * 2;
    for (const i of e)
      yield this.createUnsignedTx(i, "TokenBridge.submitAttestation", !0);
  }
  async *transfer(s, t, n, o, r) {
    const a = s.toString(), e = et(n) ? 0 : new l(n).toInt(), p = o, w = $(t.chain), f = t.address.toUniversalAddress().toUint8Array(), i = await this.connection.getTransactionParams().do(), T = BigInt(0), B = g.fromData({
      appId: this.coreAppId,
      appAddress: K(this.coreAppAddress).publicKey,
      idx: BigInt(0),
      address: K(this.tokenBridgeAddress).publicKey
    }), I = [], { accounts: [A], txs: j } = await b.maybeCreateStorageTx(this.connection, a, this.coreAppId, B, i);
    I.push(...j);
    let h = "", m, U = !1;
    if (e !== 0) {
      const x = await this.connection.getAssetByID(e).do();
      h = _.from_obj_for_encoding(x).params.creator;
      const R = await this.connection.accountInformation(h).do();
      m = L.from_obj_for_encoding(R), U = m.authAddr === this.tokenBridgeAddress.toString();
    }
    const E = await this.coreBridge.getMessageFee();
    if (E > 0 && I.push({
      tx: W({
        from: a,
        to: this.tokenBridgeAddress,
        amount: E,
        suggestedParams: i
      })
    }), !U) {
      const x = g.forNativeAsset(this.tokenBridgeAppId, BigInt(e)), { accounts: [N], txs: R } = await b.maybeCreateStorageTx(this.connection, a, this.tokenBridgeAppId, x, i);
      h = N, R.push(...R);
    }
    if (e !== 0 && !await c.isOptedInToAsset(this.connection, h, e)) {
      const x = W({
        from: a,
        to: h,
        amount: 1e5,
        suggestedParams: i
      });
      let N = y({
        from: a,
        appIndex: u(this.tokenBridgeAppId),
        onComplete: k.NoOpOC,
        appArgs: [c.optIn, st(e, 8)],
        foreignAssets: [e],
        accounts: [h],
        suggestedParams: i
      });
      N.fee *= 2, I.unshift({ tx: x }, { tx: N });
    }
    const G = y({
      from: a,
      appIndex: u(this.tokenBridgeAppId),
      onComplete: k.NoOpOC,
      appArgs: [c.noop],
      suggestedParams: i
    });
    I.push({ tx: G });
    let F = [];
    if (e === 0) {
      const x = W({
        from: a,
        to: h,
        amount: p,
        suggestedParams: i
      });
      I.push({ tx: x }), F = [A, h, h];
    } else {
      const x = z({
        from: a,
        to: h,
        amount: p,
        assetIndex: e,
        suggestedParams: i
      });
      I.push({ tx: x }), F = m != null && m.address ? [A, h, m.address] : [A, h];
    }
    const P = [
      c.sendTransfer,
      S.toBytes(e, 8),
      S.toBytes(p, 8),
      f,
      S.toBytes(w, 8),
      S.toBytes(T, 8)
    ];
    r && P.push(r);
    const v = y({
      from: a,
      appIndex: u(this.tokenBridgeAppId),
      onComplete: k.NoOpOC,
      appArgs: P,
      foreignApps: [u(this.coreAppId)],
      foreignAssets: [e],
      accounts: F,
      suggestedParams: i
    });
    v.fee *= 2, I.push({ tx: v });
    for (const x of I)
      yield this.createUnsignedTx(x, "TokenBridge.transfer", !0);
  }
  async *redeem(s, t, n = !0, o) {
    o || (o = await this.connection.getTransactionParams().do());
    const r = new l(s).toString(), { accounts: a, txs: e } = await b.submitVAAHeader(this.connection, this.coreAppId, this.tokenBridgeAppId, t, r);
    let p, w = "", f = [], i = 0;
    if (t.payload.token.chain !== this.chain) {
      p = g.forWrappedAsset(this.tokenBridgeAppId, t.payload.token), w = p.address();
      const A = await g.decodeLocalState(this.connection, this.tokenBridgeAppId, w);
      i = new l(A.slice(0, 8)).toInt();
    } else {
      const A = new l(t.payload.token.address).toBigInt();
      p = g.forNativeAsset(this.tokenBridgeAppId, A), w = p.address(), i = u(A);
    }
    a.push(w);
    let T = 0, B = "";
    if (t.payloadName === "TransferWithPayload" ? (T = new l(t.payload.to.address).toInt(), B = q(T)) : B = new l(t.payload.to.address.toUint8Array()).toString(), a.push(B), i !== 0 && (f.push(i), !await c.isOptedInToAsset(this.connection, B, i))) {
      if (r != B)
        throw new Error("Cannot ASA optin for somebody else (asset " + i.toString() + ")");
      e.unshift({
        tx: z({
          amount: 0,
          assetIndex: i,
          from: r,
          suggestedParams: o,
          to: r
        })
      });
    }
    const I = {
      accounts: a,
      appArgs: [c.completeTransfer, D(t)],
      appIndex: u(this.tokenBridgeAppId),
      foreignAssets: f,
      from: r,
      onComplete: k.NoOpOC,
      suggestedParams: o
    };
    e.push({
      tx: y(I)
    }), e[e.length - 1].tx.fee = e[e.length - 1].tx.fee * (t.payloadName === "Transfer" && t.payload.fee !== void 0 && t.payload.fee === 0n ? 2 : 3), t.payloadName === "TransferWithPayload" && (e[e.length - 1].tx.appForeignApps = [T], e.push({
      tx: y({
        appArgs: [
          V.getSelector(),
          V.args[0].type.encode(D(t))
        ],
        appIndex: T,
        foreignAssets: f,
        from: r,
        onComplete: k.NoOpOC,
        suggestedParams: o
      })
    }));
    for (const A of e)
      yield this.createUnsignedTx(A, "TokenBridge.redeem", !0);
  }
  /**
   * Checks if the asset has been opted in by the receiver
   * @param client Algodv2 client
   * @param asset Algorand asset index
   * @param receiver Account address
   * @returns Promise with True if the asset was opted in, False otherwise
   */
  static async isOptedInToAsset(s, t, n) {
    var o;
    try {
      const r = await s.accountAssetInformation(t, n).do();
      return (((o = ot.from_obj_for_encoding(r).assetHolding) == null ? void 0 : o.amount) ?? 0) > 0;
    } catch {
    }
    return !1;
  }
  createUnsignedTx(s, t, n = !0) {
    return new X(s, this.network, this.chain, t, n);
  }
};
d(c, "sendTransfer", C.encode("sendTransfer")), d(c, "attestToken", C.encode("attestToken")), d(c, "noop", C.encode("nop")), d(c, "optIn", C.encode("optin")), d(c, "completeTransfer", C.encode("completeTransfer")), d(c, "receiveAttest", C.encode("receiveAttest"));
let M = c;
at(rt, "TokenBridge", M);
export {
  M as AlgorandTokenBridge,
  V as TransferMethodSelector
};
