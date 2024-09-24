var Yt = Object.defineProperty;
var Zt = (i, e, t) => e in i ? Yt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var z = (i, e, t) => (Zt(i, typeof e != "symbol" ? e + "" : e, t), t);
import { a3 as M, aD as ut, n as v, aE as lt, aF as W, aG as I, aH as B, aI as G, aJ as L, aK as D, aL as be, aM as J, aN as _t, aO as O, aP as Te, aQ as Qt, aR as en, aS as tn, aT as nn, aU as sn, aV as rn, aW as on, aX as an, as as dt, ar as je, at as cn, au as un, av as ln, aw as dn, ax as De, ay as hn, az as fn, aY as gn, aC as pn } from "./index-DV1w5RNX.mjs";
import { C as mn, P as yn } from "./chain-tk4BDPwT.mjs";
class bn extends TypeError {
  constructor(e, t) {
    let n;
    const {
      message: s,
      ...r
    } = e, {
      path: o
    } = e, a = o.length === 0 ? s : "At path: " + o.join(".") + " -- " + s;
    super(a), Object.assign(this, r), this.name = this.constructor.name, this.failures = () => {
      var c;
      return (c = n) != null ? c : n = [e, ...t()];
    };
  }
}
function wn(i) {
  return ie(i) && typeof i[Symbol.iterator] == "function";
}
function ie(i) {
  return typeof i == "object" && i != null;
}
function X(i) {
  return typeof i == "string" ? JSON.stringify(i) : "" + i;
}
function kn(i) {
  const {
    done: e,
    value: t
  } = i.next();
  return e ? void 0 : t;
}
function Sn(i, e, t, n) {
  if (i === !0)
    return;
  i === !1 ? i = {} : typeof i == "string" && (i = {
    message: i
  });
  const {
    path: s,
    branch: r
  } = e, {
    type: o
  } = t, {
    refinement: a,
    message: c = "Expected a value of type `" + o + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + X(n) + "`"
  } = i;
  return {
    value: n,
    type: o,
    refinement: a,
    key: s[s.length - 1],
    path: s,
    branch: r,
    ...i,
    message: c
  };
}
function* ht(i, e, t, n) {
  wn(i) || (i = [i]);
  for (const s of i) {
    const r = Sn(s, e, t, n);
    r && (yield r);
  }
}
function* et(i, e, t = {}) {
  const {
    path: n = [],
    branch: s = [i],
    coerce: r = !1,
    mask: o = !1
  } = t, a = {
    path: n,
    branch: s
  };
  if (r && (i = e.coercer(i, a), o && e.type !== "type" && ie(e.schema) && ie(i) && !Array.isArray(i)))
    for (const l in i)
      e.schema[l] === void 0 && delete i[l];
  let c = !0;
  for (const l of e.validator(i, a))
    c = !1, yield [l, void 0];
  for (let [l, h, k] of e.entries(i, a)) {
    const R = et(h, k, {
      path: l === void 0 ? n : [...n, l],
      branch: l === void 0 ? s : [...s, h],
      coerce: r,
      mask: o
    });
    for (const b of R)
      b[0] ? (c = !1, yield [b[0], void 0]) : r && (h = b[1], l === void 0 ? i = h : i instanceof Map ? i.set(l, h) : i instanceof Set ? i.add(h) : ie(i) && (i[l] = h));
  }
  if (c)
    for (const l of e.refiner(i, a))
      c = !1, yield [l, void 0];
  c && (yield [void 0, i]);
}
let Q = class {
  constructor(e) {
    const {
      type: t,
      schema: n,
      validator: s,
      refiner: r,
      coercer: o = (c) => c,
      entries: a = function* () {
      }
    } = e;
    this.type = t, this.schema = n, this.entries = a, this.coercer = o, s ? this.validator = (c, l) => {
      const h = s(c, l);
      return ht(h, l, this, c);
    } : this.validator = () => [], r ? this.refiner = (c, l) => {
      const h = r(c, l);
      return ht(h, l, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e) {
    return _n(e, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e) {
    return p(e, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return At(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e) {
    return An(e, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, t = {}) {
    return xe(e, this, t);
  }
};
function _n(i, e) {
  const t = xe(i, e);
  if (t[0])
    throw t[0];
}
function p(i, e) {
  const t = xe(i, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function An(i, e) {
  const t = xe(i, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function At(i, e) {
  return !xe(i, e)[0];
}
function xe(i, e, t = {}) {
  const n = et(i, e, t), s = kn(n);
  return s[0] ? [new bn(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function fe(i, e) {
  return new Q({
    type: i,
    schema: null,
    validator: e
  });
}
function In() {
  return fe("any", () => !0);
}
function w(i) {
  return new Q({
    type: "array",
    schema: i,
    *entries(e) {
      if (i && Array.isArray(e))
        for (const [t, n] of e.entries())
          yield [t, n, i];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array value, but received: " + X(e);
    }
  });
}
function Z() {
  return fe("boolean", (i) => typeof i == "boolean");
}
function tt(i) {
  return fe("instance", (e) => e instanceof i || "Expected a `" + i.name + "` instance, but received: " + X(e));
}
function N(i) {
  const e = X(i), t = typeof i;
  return new Q({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? i : null,
    validator(n) {
      return n === i || "Expected the literal `" + e + "`, but received: " + X(n);
    }
  });
}
function Rn() {
  return fe("never", () => !1);
}
function y(i) {
  return new Q({
    ...i,
    validator: (e, t) => e === null || i.validator(e, t),
    refiner: (e, t) => e === null || i.refiner(e, t)
  });
}
function u() {
  return fe("number", (i) => typeof i == "number" && !isNaN(i) || "Expected a number, but received: " + X(i));
}
function E(i) {
  return new Q({
    ...i,
    validator: (e, t) => e === void 0 || i.validator(e, t),
    refiner: (e, t) => e === void 0 || i.refiner(e, t)
  });
}
function It(i, e) {
  return new Q({
    type: "record",
    schema: null,
    *entries(t) {
      if (ie(t))
        for (const n in t) {
          const s = t[n];
          yield [n, n, i], yield [n, s, e];
        }
    },
    validator(t) {
      return ie(t) || "Expected an object, but received: " + X(t);
    }
  });
}
function g() {
  return fe("string", (i) => typeof i == "string" || "Expected a string, but received: " + X(i));
}
function nt(i) {
  const e = Rn();
  return new Q({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        const n = Math.max(i.length, t.length);
        for (let s = 0; s < n; s++)
          yield [s, t[s], i[s] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array, but received: " + X(t);
    }
  });
}
function d(i) {
  const e = Object.keys(i);
  return new Q({
    type: "type",
    schema: i,
    *entries(t) {
      if (ie(t))
        for (const n of e)
          yield [n, t[n], i[n]];
    },
    validator(t) {
      return ie(t) || "Expected an object, but received: " + X(t);
    }
  });
}
function H(i) {
  const e = i.map((t) => t.type).join(" | ");
  return new Q({
    type: "union",
    schema: null,
    validator(t, n) {
      const s = [];
      for (const r of i) {
        const [...o] = et(t, r, n), [a] = o;
        if (a[0])
          for (const [c] of o)
            c && s.push(c);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + X(t), ...s];
    }
  });
}
function ve() {
  return fe("unknown", () => !0);
}
function Ce(i, e, t) {
  return new Q({
    ...i,
    coercer: (n, s) => At(n, e) ? i.coercer(t(n, s), s) : i.coercer(n, s)
  });
}
const ft = () => {
  const i = Te.utils.randomPrivateKey(), e = Ve(i), t = new Uint8Array(64);
  return t.set(i), t.set(e, 32), {
    publicKey: e,
    secretKey: t
  };
}, Ve = Te.getPublicKey;
function gt(i) {
  try {
    return Te.ExtendedPoint.fromHex(i), !0;
  } catch {
    return !1;
  }
}
const Bn = (i, e) => Te.sign(i, e.slice(0, 32)), En = Te.verify, de = (i) => v.Buffer.isBuffer(i) ? i : i instanceof Uint8Array ? v.Buffer.from(i.buffer, i.byteOffset, i.byteLength) : v.Buffer.from(i);
class Tn {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return v.Buffer.from(Qt(Ke, this));
  }
  static decode(e) {
    return en(Ke, this, e);
  }
  static decodeUnchecked(e) {
    return tn(Ke, this, e);
  }
}
const Ke = /* @__PURE__ */ new Map();
var Rt;
let Bt;
const xn = 32, ae = 32;
function vn(i) {
  return i._bn !== void 0;
}
let pt = 1;
Bt = Symbol.toStringTag;
class _ extends Tn {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(e) {
    if (super({}), this._bn = void 0, vn(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = M.decode(e);
        if (t.length != ae)
          throw new Error("Invalid public key input");
        this._bn = new ut(t);
      } else
        this._bn = new ut(e);
      if (this._bn.byteLength() > ae)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const e = new _(pt);
    return pt += 1, new _(e.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(e) {
    return this._bn.eq(e._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return M.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const e = this.toBuffer();
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const e = this._bn.toArrayLike(v.Buffer);
    if (e.length === ae)
      return e;
    const t = v.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  get [Bt]() {
    return `PublicKey(${this.toString()})`;
  }
  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(e, t, n) {
    const s = v.Buffer.concat([e.toBuffer(), v.Buffer.from(t), n.toBuffer()]), r = lt(s);
    return new _(r);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(e, t) {
    let n = v.Buffer.alloc(0);
    e.forEach(function(r) {
      if (r.length > xn)
        throw new TypeError("Max seed length exceeded");
      n = v.Buffer.concat([n, de(r)]);
    }), n = v.Buffer.concat([n, t.toBuffer(), v.Buffer.from("ProgramDerivedAddress")]);
    const s = lt(n);
    if (gt(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new _(s);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(e, t) {
    let n = 255, s;
    for (; n != 0; ) {
      try {
        const r = e.concat(v.Buffer.from([n]));
        s = this.createProgramAddressSync(r, t);
      } catch (r) {
        if (r instanceof TypeError)
          throw r;
        n--;
        continue;
      }
      return [s, n];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(e) {
    const t = new _(e);
    return gt(t.toBytes());
  }
}
Rt = _;
_.default = new Rt("11111111111111111111111111111111");
Ke.set(_, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new _("BPFLoader1111111111111111111111111111111111");
const we = 1232, Et = 127, Tt = 64;
class st extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(st.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class xt extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(xt.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class Ae extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(Ae.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
class Fe {
  constructor(e, t) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t;
  }
  keySegments() {
    const e = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
  }
  get(e) {
    for (const t of this.keySegments()) {
      if (e < t.length)
        return t[e];
      e -= t.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(e) {
    if (this.length > 256)
      throw new Error("Account index overflow encountered during compilation");
    const n = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((r, o) => {
      n.set(r.toBase58(), o);
    });
    const s = (r) => {
      const o = n.get(r.toBase58());
      if (o === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return o;
    };
    return e.map((r) => ({
      programIdIndex: s(r.programId),
      accountKeyIndexes: r.keys.map((o) => s(o.pubkey)),
      data: r.data
    }));
  }
}
const C = (i = "publicKey") => O(32, i), ye = (i = "string") => {
  const e = I([B("length"), B("lengthPadding"), O(be(B(), -8), "chars")], i), t = e.decode.bind(e), n = e.encode.bind(e), s = e;
  return s.decode = (r, o) => t(r, o).chars.toString(), s.encode = (r, o, a) => {
    const c = {
      chars: v.Buffer.from(r, "utf8")
    };
    return n(c, o, a);
  }, s.alloc = (r) => B().span + B().span + v.Buffer.from(r, "utf8").length, s;
}, Cn = (i = "authorized") => I([C("staker"), C("withdrawer")], i), Ln = (i = "lockup") => I([G("unixTimestamp"), G("epoch"), C("custodian")], i), Pn = (i = "voteInit") => I([C("nodePubkey"), C("authorizedVoter"), C("authorizedWithdrawer"), L("commission")], i), Nn = (i = "voteAuthorizeWithSeedArgs") => I([B("voteAuthorizationType"), C("currentAuthorityDerivedKeyOwnerPubkey"), ye("currentAuthorityDerivedKeySeed"), C("newAuthorized")], i);
function vt(i, e) {
  const t = (s) => {
    if (s.span >= 0)
      return s.span;
    if (typeof s.alloc == "function")
      return s.alloc(e[s.property]);
    if ("count" in s && "elementLayout" in s) {
      const r = e[s.property];
      if (Array.isArray(r))
        return r.length * t(s.elementLayout);
    } else if ("fields" in s)
      return vt({
        layout: s
      }, e[s.property]);
    return 0;
  };
  let n = 0;
  return i.layout.fields.forEach((s) => {
    n += t(s);
  }), n;
}
function $(i) {
  let e = 0, t = 0;
  for (; ; ) {
    let n = i.shift();
    if (e |= (n & 127) << t * 7, t += 1, !(n & 128))
      break;
  }
  return e;
}
function j(i, e) {
  let t = e;
  for (; ; ) {
    let n = t & 127;
    if (t >>= 7, t == 0) {
      i.push(n);
      break;
    } else
      n |= 128, i.push(n);
  }
}
function F(i, e) {
  if (!i)
    throw new Error(e || "Assertion failed");
}
class qe {
  constructor(e, t) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
  }
  static compile(e, t) {
    const n = /* @__PURE__ */ new Map(), s = (o) => {
      const a = o.toBase58();
      let c = n.get(a);
      return c === void 0 && (c = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(a, c)), c;
    }, r = s(t);
    r.isSigner = !0, r.isWritable = !0;
    for (const o of e) {
      s(o.programId).isInvoked = !0;
      for (const a of o.keys) {
        const c = s(a.pubkey);
        c.isSigner || (c.isSigner = a.isSigner), c.isWritable || (c.isWritable = a.isWritable);
      }
    }
    return new qe(t, n);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    F(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, c]) => c.isSigner && c.isWritable), n = e.filter(([, c]) => c.isSigner && !c.isWritable), s = e.filter(([, c]) => !c.isSigner && c.isWritable), r = e.filter(([, c]) => !c.isSigner && !c.isWritable), o = {
      numRequiredSignatures: t.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: r.length
    };
    {
      F(t.length > 0, "Expected at least one writable signer key");
      const [c] = t[0];
      F(c === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const a = [...t.map(([c]) => new _(c)), ...n.map(([c]) => new _(c)), ...s.map(([c]) => new _(c)), ...r.map(([c]) => new _(c))];
    return [o, a];
  }
  extractTableLookup(e) {
    const [t, n] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && o.isWritable), [s, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && !o.isWritable);
    if (!(t.length === 0 && s.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: t,
        readonlyIndexes: s
      }, {
        writable: n,
        readonly: r
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(e, t) {
    const n = new Array(), s = new Array();
    for (const [r, o] of this.keyMetaMap.entries())
      if (t(o)) {
        const a = new _(r), c = e.findIndex((l) => l.equals(a));
        c >= 0 && (F(c < 256, "Max lookup table index exceeded"), n.push(c), s.push(a), this.keyMetaMap.delete(r));
      }
    return [n, s];
  }
}
const Ct = "Reached end of buffer unexpectedly";
function te(i) {
  if (i.length === 0)
    throw new Error(Ct);
  return i.shift();
}
function V(i, ...e) {
  const [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > i.length : t >= i.length)
    throw new Error(Ct);
  return i.splice(...e);
}
class ne {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new _(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: M.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new Fe(this.staticAccountKeys);
  }
  static compile(e) {
    const t = qe.compile(e.instructions, e.payerKey), [n, s] = t.getMessageComponents(), o = new Fe(s).compileInstructions(e.instructions).map((a) => ({
      programIdIndex: a.programIdIndex,
      accounts: a.accountKeyIndexes,
      data: M.encode(a.data)
    }));
    return new ne({
      header: n,
      accountKeys: s,
      recentBlockhash: e.recentBlockhash,
      instructions: o
    });
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures;
    if (e >= this.header.numRequiredSignatures) {
      const n = e - t, r = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return n < r;
    } else {
      const n = t - this.header.numReadonlySignedAccounts;
      return e < n;
    }
  }
  isProgramId(e) {
    return this.indexToProgramIds.has(e);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((e, t) => !this.isProgramId(t));
  }
  serialize() {
    const e = this.accountKeys.length;
    let t = [];
    j(t, e);
    const n = this.instructions.map((k) => {
      const {
        accounts: R,
        programIdIndex: b
      } = k, m = Array.from(M.decode(k.data));
      let f = [];
      j(f, R.length);
      let S = [];
      return j(S, m.length), {
        programIdIndex: b,
        keyIndicesCount: v.Buffer.from(f),
        keyIndices: R,
        dataLength: v.Buffer.from(S),
        data: m
      };
    });
    let s = [];
    j(s, n.length);
    let r = v.Buffer.alloc(we);
    v.Buffer.from(s).copy(r);
    let o = s.length;
    n.forEach((k) => {
      const b = I([L("programIdIndex"), O(k.keyIndicesCount.length, "keyIndicesCount"), D(L("keyIndex"), k.keyIndices.length, "keyIndices"), O(k.dataLength.length, "dataLength"), D(L("userdatum"), k.data.length, "data")]).encode(k, r, o);
      o += b;
    }), r = r.slice(0, o);
    const a = I([O(1, "numRequiredSignatures"), O(1, "numReadonlySignedAccounts"), O(1, "numReadonlyUnsignedAccounts"), O(t.length, "keyCount"), D(C("key"), e, "keys"), C("recentBlockhash")]), c = {
      numRequiredSignatures: v.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: v.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: v.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: v.Buffer.from(t),
      keys: this.accountKeys.map((k) => de(k.toBytes())),
      recentBlockhash: M.decode(this.recentBlockhash)
    };
    let l = v.Buffer.alloc(2048);
    const h = a.encode(c, l);
    return r.copy(l, h), l.slice(0, h + r.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(e) {
    let t = [...e];
    const n = te(t);
    if (n !== (n & Et))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = te(t), r = te(t), o = $(t);
    let a = [];
    for (let R = 0; R < o; R++) {
      const b = V(t, 0, ae);
      a.push(new _(v.Buffer.from(b)));
    }
    const c = V(t, 0, ae), l = $(t);
    let h = [];
    for (let R = 0; R < l; R++) {
      const b = te(t), m = $(t), f = V(t, 0, m), S = $(t), T = V(t, 0, S), U = M.encode(v.Buffer.from(T));
      h.push({
        programIdIndex: b,
        accounts: f,
        data: U
      });
    }
    const k = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: r
      },
      recentBlockhash: M.encode(v.Buffer.from(c)),
      accountKeys: a,
      instructions: h
    };
    return new ne(k);
  }
}
class Be {
  constructor(e) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let e = 0;
    for (const t of this.addressTableLookups)
      e += t.readonlyIndexes.length + t.writableIndexes.length;
    return e;
  }
  getAccountKeys(e) {
    let t;
    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      t = e.accountKeysFromLookups;
    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts)
      t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new Fe(this.staticAccountKeys, t);
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures, n = this.staticAccountKeys.length;
    if (e >= n) {
      const s = e - n, r = this.addressTableLookups.reduce((o, a) => o + a.writableIndexes.length, 0);
      return s < r;
    } else if (e >= this.header.numRequiredSignatures) {
      const s = e - t, o = n - t - this.header.numReadonlyUnsignedAccounts;
      return s < o;
    } else {
      const s = t - this.header.numReadonlySignedAccounts;
      return e < s;
    }
  }
  resolveAddressTableLookups(e) {
    const t = {
      writable: [],
      readonly: []
    };
    for (const n of this.addressTableLookups) {
      const s = e.find((r) => r.key.equals(n.accountKey));
      if (!s)
        throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
      for (const r of n.writableIndexes)
        if (r < s.state.addresses.length)
          t.writable.push(s.state.addresses[r]);
        else
          throw new Error(`Failed to find address for index ${r} in address lookup table ${n.accountKey.toBase58()}`);
      for (const r of n.readonlyIndexes)
        if (r < s.state.addresses.length)
          t.readonly.push(s.state.addresses[r]);
        else
          throw new Error(`Failed to find address for index ${r} in address lookup table ${n.accountKey.toBase58()}`);
    }
    return t;
  }
  static compile(e) {
    const t = qe.compile(e.instructions, e.payerKey), n = new Array(), s = {
      writable: new Array(),
      readonly: new Array()
    }, r = e.addressLookupTableAccounts || [];
    for (const h of r) {
      const k = t.extractTableLookup(h);
      if (k !== void 0) {
        const [R, {
          writable: b,
          readonly: m
        }] = k;
        n.push(R), s.writable.push(...b), s.readonly.push(...m);
      }
    }
    const [o, a] = t.getMessageComponents(), l = new Fe(a, s).compileInstructions(e.instructions);
    return new Be({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: l,
      addressTableLookups: n
    });
  }
  serialize() {
    const e = Array();
    j(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(), n = Array();
    j(n, this.compiledInstructions.length);
    const s = this.serializeAddressTableLookups(), r = Array();
    j(r, this.addressTableLookups.length);
    const o = I([L("prefix"), I([L("numRequiredSignatures"), L("numReadonlySignedAccounts"), L("numReadonlyUnsignedAccounts")], "header"), O(e.length, "staticAccountKeysLength"), D(C(), this.staticAccountKeys.length, "staticAccountKeys"), C("recentBlockhash"), O(n.length, "instructionsLength"), O(t.length, "serializedInstructions"), O(r.length, "addressTableLookupsLength"), O(s.length, "serializedAddressTableLookups")]), a = new Uint8Array(we), l = o.encode({
      prefix: 128,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(e),
      staticAccountKeys: this.staticAccountKeys.map((h) => h.toBytes()),
      recentBlockhash: M.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: t,
      addressTableLookupsLength: new Uint8Array(r),
      serializedAddressTableLookups: s
    }, a);
    return a.slice(0, l);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(we);
    for (const n of this.compiledInstructions) {
      const s = Array();
      j(s, n.accountKeyIndexes.length);
      const r = Array();
      j(r, n.data.length);
      const o = I([L("programIdIndex"), O(s.length, "encodedAccountKeyIndexesLength"), D(L(), n.accountKeyIndexes.length, "accountKeyIndexes"), O(r.length, "encodedDataLength"), O(n.data.length, "data")]);
      e += o.encode({
        programIdIndex: n.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(s),
        accountKeyIndexes: n.accountKeyIndexes,
        encodedDataLength: new Uint8Array(r),
        data: n.data
      }, t, e);
    }
    return t.slice(0, e);
  }
  serializeAddressTableLookups() {
    let e = 0;
    const t = new Uint8Array(we);
    for (const n of this.addressTableLookups) {
      const s = Array();
      j(s, n.writableIndexes.length);
      const r = Array();
      j(r, n.readonlyIndexes.length);
      const o = I([C("accountKey"), O(s.length, "encodedWritableIndexesLength"), D(L(), n.writableIndexes.length, "writableIndexes"), O(r.length, "encodedReadonlyIndexesLength"), D(L(), n.readonlyIndexes.length, "readonlyIndexes")]);
      e += o.encode({
        accountKey: n.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(s),
        writableIndexes: n.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(r),
        readonlyIndexes: n.readonlyIndexes
      }, t, e);
    }
    return t.slice(0, e);
  }
  static deserialize(e) {
    let t = [...e];
    const n = te(t), s = n & Et;
    F(n !== s, "Expected versioned message but received legacy message");
    const r = s;
    F(r === 0, `Expected versioned message with version 0 but found version ${r}`);
    const o = {
      numRequiredSignatures: te(t),
      numReadonlySignedAccounts: te(t),
      numReadonlyUnsignedAccounts: te(t)
    }, a = [], c = $(t);
    for (let m = 0; m < c; m++)
      a.push(new _(V(t, 0, ae)));
    const l = M.encode(V(t, 0, ae)), h = $(t), k = [];
    for (let m = 0; m < h; m++) {
      const f = te(t), S = $(t), T = V(t, 0, S), U = $(t), ce = new Uint8Array(V(t, 0, U));
      k.push({
        programIdIndex: f,
        accountKeyIndexes: T,
        data: ce
      });
    }
    const R = $(t), b = [];
    for (let m = 0; m < R; m++) {
      const f = new _(V(t, 0, ae)), S = $(t), T = V(t, 0, S), U = $(t), ce = V(t, 0, U);
      b.push({
        accountKey: f,
        writableIndexes: T,
        readonlyIndexes: ce
      });
    }
    return new Be({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: l,
      compiledInstructions: k,
      addressTableLookups: b
    });
  }
}
let re = /* @__PURE__ */ function(i) {
  return i[i.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", i[i.PROCESSED = 1] = "PROCESSED", i[i.TIMED_OUT = 2] = "TIMED_OUT", i[i.NONCE_INVALID = 3] = "NONCE_INVALID", i;
}({});
const Kn = v.Buffer.alloc(Tt).fill(0);
class le {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = v.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: e,
        isSigner: t,
        isWritable: n
      }) => ({
        pubkey: e.toJSON(),
        isSigner: t,
        isWritable: n
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class oe {
  /**
   * The first (payer) Transaction signature
   *
   * @returns {Buffer | null} Buffer of payer's signature
   */
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  /**
   * The transaction fee payer
   */
  // Construct a transaction with a blockhash and lastValidBlockHeight
  // Construct a transaction using a durable nonce
  /**
   * @deprecated `TransactionCtorFields` has been deprecated and will be removed in a future version.
   * Please supply a `TransactionBlockhashCtor` instead.
   */
  /**
   * Construct an empty Transaction
   */
  constructor(e) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e)
      if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
        const {
          minContextSlot: t,
          nonceInfo: n
        } = e;
        this.minNonceContextSlot = t, this.nonceInfo = n;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const {
          blockhash: t,
          lastValidBlockHeight: n
        } = e;
        this.recentBlockhash = t, this.lastValidBlockHeight = n;
      } else {
        const {
          recentBlockhash: t,
          nonceInfo: n
        } = e;
        n && (this.nonceInfo = n), this.recentBlockhash = t;
      }
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map((e) => e.toJSON()),
      signers: this.signatures.map(({
        publicKey: e
      }) => e.toJSON())
    };
  }
  /**
   * Add one or more instructions to this Transaction
   *
   * @param {Array< Transaction | TransactionInstruction | TransactionInstructionCtorFields >} items - Instructions to add to the Transaction
   */
  add(...e) {
    if (e.length === 0)
      throw new Error("No instructions");
    return e.forEach((t) => {
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new le(t));
    }), this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let e, t;
    if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e)
      throw new Error("Transaction recentBlockhash required");
    t.length < 1 && console.warn("No instructions provided");
    let n;
    if (this.feePayer)
      n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let f = 0; f < t.length; f++)
      if (t[f].programId === void 0)
        throw new Error(`Transaction instruction index ${f} has undefined program id`);
    const s = [], r = [];
    t.forEach((f) => {
      f.keys.forEach((T) => {
        r.push({
          ...T
        });
      });
      const S = f.programId.toString();
      s.includes(S) || s.push(S);
    }), s.forEach((f) => {
      r.push({
        pubkey: new _(f),
        isSigner: !1,
        isWritable: !1
      });
    });
    const o = [];
    r.forEach((f) => {
      const S = f.pubkey.toString(), T = o.findIndex((U) => U.pubkey.toString() === S);
      T > -1 ? (o[T].isWritable = o[T].isWritable || f.isWritable, o[T].isSigner = o[T].isSigner || f.isSigner) : o.push(f);
    }), o.sort(function(f, S) {
      if (f.isSigner !== S.isSigner)
        return f.isSigner ? -1 : 1;
      if (f.isWritable !== S.isWritable)
        return f.isWritable ? -1 : 1;
      const T = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return f.pubkey.toBase58().localeCompare(S.pubkey.toBase58(), "en", T);
    });
    const a = o.findIndex((f) => f.pubkey.equals(n));
    if (a > -1) {
      const [f] = o.splice(a, 1);
      f.isSigner = !0, f.isWritable = !0, o.unshift(f);
    } else
      o.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const f of this.signatures) {
      const S = o.findIndex((T) => T.pubkey.equals(f.publicKey));
      if (S > -1)
        o[S].isSigner || (o[S].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${f.publicKey.toString()}`);
    }
    let c = 0, l = 0, h = 0;
    const k = [], R = [];
    o.forEach(({
      pubkey: f,
      isSigner: S,
      isWritable: T
    }) => {
      S ? (k.push(f.toString()), c += 1, T || (l += 1)) : (R.push(f.toString()), T || (h += 1));
    });
    const b = k.concat(R), m = t.map((f) => {
      const {
        data: S,
        programId: T
      } = f;
      return {
        programIdIndex: b.indexOf(T.toString()),
        accounts: f.keys.map((U) => b.indexOf(U.pubkey.toString())),
        data: M.encode(S)
      };
    });
    return m.forEach((f) => {
      F(f.programIdIndex >= 0), f.accounts.forEach((S) => F(S >= 0));
    }), new ne({
      header: {
        numRequiredSignatures: c,
        numReadonlySignedAccounts: l,
        numReadonlyUnsignedAccounts: h
      },
      accountKeys: b,
      recentBlockhash: e,
      instructions: m
    });
  }
  /**
   * @internal
   */
  _compile() {
    const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === t.length && this.signatures.every((s, r) => t[r].equals(s.publicKey)) || (this.signatures = t.map((n) => ({
      signature: null,
      publicKey: n
    }))), e;
  }
  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */
  serializeMessage() {
    return this._compile().serialize();
  }
  /**
   * Get the estimated fee associated with a transaction
   *
   * @param {Connection} connection Connection to RPC Endpoint.
   *
   * @returns {Promise<number | null>} The estimated fee for the transaction
   */
  async getEstimatedFee(e) {
    return (await e.getFeeForMessage(this.compileMessage())).value;
  }
  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */
  setSigners(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set();
    this.signatures = e.filter((n) => {
      const s = n.toString();
      return t.has(s) ? !1 : (t.add(s), !0);
    }).map((n) => ({
      signature: null,
      publicKey: n
    }));
  }
  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  sign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const r of e) {
      const o = r.publicKey.toString();
      t.has(o) || (t.add(o), n.push(r));
    }
    this.signatures = n.map((r) => ({
      signature: null,
      publicKey: r.publicKey
    }));
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  partialSign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const r of e) {
      const o = r.publicKey.toString();
      t.has(o) || (t.add(o), n.push(r));
    }
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  /**
   * @internal
   */
  _partialSign(e, ...t) {
    const n = e.serialize();
    t.forEach((s) => {
      const r = Bn(n, s.secretKey);
      this._addSignature(s.publicKey, de(r));
    });
  }
  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * @param {PublicKey} pubkey Public key that will be added to the transaction.
   * @param {Buffer} signature An externally created signature to add to the transaction.
   */
  addSignature(e, t) {
    this._compile(), this._addSignature(e, t);
  }
  /**
   * @internal
   */
  _addSignature(e, t) {
    F(t.length === 64);
    const n = this.signatures.findIndex((s) => e.equals(s.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[n].signature = v.Buffer.from(t);
  }
  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   *
   * @param {boolean} [requireAllSignatures=true] Require a fully signed Transaction
   */
  verifySignatures(e = !0) {
    return !this._getMessageSignednessErrors(this.serializeMessage(), e);
  }
  /**
   * @internal
   */
  _getMessageSignednessErrors(e, t) {
    const n = {};
    for (const {
      signature: s,
      publicKey: r
    } of this.signatures)
      s === null ? t && (n.missing || (n.missing = [])).push(r) : En(s, e, r.toBytes()) || (n.invalid || (n.invalid = [])).push(r);
    return n.invalid || n.missing ? n : void 0;
  }
  /**
   * Serialize the Transaction in the wire format.
   *
   * @param {Buffer} [config] Config of transaction.
   *
   * @returns {Buffer} Signature of transaction in wire format.
   */
  serialize(e) {
    const {
      requireAllSignatures: t,
      verifySignatures: n
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, e), s = this.serializeMessage();
    if (n) {
      const r = this._getMessageSignednessErrors(s, t);
      if (r) {
        let o = "Signature verification failed.";
        throw r.invalid && (o += `
Invalid signature for public key${r.invalid.length === 1 ? "" : "(s)"} [\`${r.invalid.map((a) => a.toBase58()).join("`, `")}\`].`), r.missing && (o += `
Missing signature for public key${r.missing.length === 1 ? "" : "(s)"} [\`${r.missing.map((a) => a.toBase58()).join("`, `")}\`].`), new Error(o);
      }
    }
    return this._serialize(s);
  }
  /**
   * @internal
   */
  _serialize(e) {
    const {
      signatures: t
    } = this, n = [];
    j(n, t.length);
    const s = n.length + t.length * 64 + e.length, r = v.Buffer.alloc(s);
    return F(t.length < 256), v.Buffer.from(n).copy(r, 0), t.forEach(({
      signature: o
    }, a) => {
      o !== null && (F(o.length === 64, "signature has invalid length"), v.Buffer.from(o).copy(r, n.length + a * 64));
    }), e.copy(r, n.length + t.length * 64), F(r.length <= we, `Transaction too large: ${r.length} > ${we}`), r;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return F(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return F(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return F(this.instructions.length === 1), this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   *
   * @param {Buffer | Uint8Array | Array<number>} buffer Signature of wire Transaction
   *
   * @returns {Transaction} Transaction associated with the signature
   */
  static from(e) {
    let t = [...e];
    const n = $(t);
    let s = [];
    for (let r = 0; r < n; r++) {
      const o = V(t, 0, Tt);
      s.push(M.encode(v.Buffer.from(o)));
    }
    return oe.populate(ne.from(t), s);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(e, t = []) {
    const n = new oe();
    return n.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]), t.forEach((s, r) => {
      const o = {
        signature: s == M.encode(Kn) ? null : M.decode(s),
        publicKey: e.accountKeys[r]
      };
      n.signatures.push(o);
    }), e.instructions.forEach((s) => {
      const r = s.accounts.map((o) => {
        const a = e.accountKeys[o];
        return {
          pubkey: a,
          isSigner: n.signatures.some((c) => c.publicKey.toString() === a.toString()) || e.isAccountSigner(o),
          isWritable: e.isAccountWritable(o)
        };
      });
      n.instructions.push(new le({
        keys: r,
        programId: e.accountKeys[s.programIdIndex],
        data: M.decode(s.data)
      }));
    }), n._message = e, n._json = n.toJSON(), n;
  }
}
class rt {
  constructor(e) {
    this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash;
  }
  static decompile(e, t) {
    const {
      header: n,
      compiledInstructions: s,
      recentBlockhash: r
    } = e, {
      numRequiredSignatures: o,
      numReadonlySignedAccounts: a,
      numReadonlyUnsignedAccounts: c
    } = n, l = o - a;
    F(l > 0, "Message header is invalid");
    const h = e.staticAccountKeys.length - o - c;
    F(h >= 0, "Message header is invalid");
    const k = e.getAccountKeys(t), R = k.get(0);
    if (R === void 0)
      throw new Error("Failed to decompile message because no account keys were found");
    const b = [];
    for (const m of s) {
      const f = [];
      for (const T of m.accountKeyIndexes) {
        const U = k.get(T);
        if (U === void 0)
          throw new Error(`Failed to find key for account key index ${T}`);
        const ce = T < o;
        let se;
        ce ? se = T < l : T < k.staticAccountKeys.length ? se = T - o < h : se = T - k.staticAccountKeys.length < // accountKeysFromLookups cannot be undefined because we already found a pubkey for this index above
        k.accountKeysFromLookups.writable.length, f.push({
          pubkey: U,
          isSigner: T < n.numRequiredSignatures,
          isWritable: se
        });
      }
      const S = k.get(m.programIdIndex);
      if (S === void 0)
        throw new Error(`Failed to find program id for program id index ${m.programIdIndex}`);
      b.push(new le({
        programId: S,
        data: de(m.data),
        keys: f
      }));
    }
    return new rt({
      payerKey: R,
      instructions: b,
      recentBlockhash: r
    });
  }
  compileToLegacyMessage() {
    return ne.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions
    });
  }
  compileToV0Message(e) {
    return Be.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts: e
    });
  }
}
const Fn = 160, On = 64, qn = Fn / On, Un = 1e3 / qn;
new _("SysvarC1ock11111111111111111111111111111111");
new _("SysvarEpochSchedu1e111111111111111111111111");
new _("Sysvar1nstructions1111111111111111111111111");
new _("SysvarRecentB1ockHashes11111111111111111111");
new _("SysvarRent111111111111111111111111111111111");
new _("SysvarRewards111111111111111111111111111111");
new _("SysvarS1otHashes111111111111111111111111111");
new _("SysvarS1otHistory11111111111111111111111111");
new _("SysvarStakeHistory1111111111111111111111111");
function me(i) {
  return new Promise((e) => setTimeout(e, i));
}
function Le(i, e) {
  const t = i.layout.span >= 0 ? i.layout.span : vt(i, e), n = v.Buffer.alloc(t), s = Object.assign({
    instruction: i.index
  }, e);
  return i.layout.encode(s, n), n;
}
const zn = W("lamportsPerSignature"), Lt = I([B("version"), B("state"), C("authorizedPubkey"), C("nonce"), I([zn], "feeCalculator")]);
Lt.span;
class ot {
  /**
   * @internal
   */
  constructor(e) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(e) {
    const t = Lt.decode(de(e), 0);
    return new ot({
      authorizedPubkey: new _(t.authorizedPubkey),
      nonce: new _(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
const Mn = (i) => {
  const e = i.decode.bind(i), t = i.encode.bind(i);
  return {
    decode: e,
    encode: t
  };
}, Wn = (i) => (e) => {
  const t = O(i, e), {
    encode: n,
    decode: s
  } = Mn(t), r = t;
  return r.decode = (o, a) => {
    const c = s(o, a);
    return nn(v.Buffer.from(c));
  }, r.encode = (o, a, c) => {
    const l = sn(o, i);
    return n(l, a, c);
  }, r;
}, ke = Wn(8);
Object.freeze({
  Create: {
    index: 0,
    layout: I([B("instruction"), G("lamports"), G("space"), C("programId")])
  },
  Assign: {
    index: 1,
    layout: I([B("instruction"), C("programId")])
  },
  Transfer: {
    index: 2,
    layout: I([B("instruction"), ke("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: I([B("instruction"), C("base"), ye("seed"), G("lamports"), G("space"), C("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: I([B("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: I([B("instruction"), G("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: I([B("instruction"), C("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: I([B("instruction"), C("authorized")])
  },
  Allocate: {
    index: 8,
    layout: I([B("instruction"), G("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: I([B("instruction"), C("base"), ye("seed"), G("space"), C("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: I([B("instruction"), C("base"), ye("seed"), C("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: I([B("instruction"), ke("lamports"), ye("seed"), C("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: I([B("instruction")])
  }
});
new _("11111111111111111111111111111111");
new _("BPFLoader2111111111111111111111111111111111");
function Dn(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Hn = Object.prototype.toString, Gn = Object.keys || function(i) {
  var e = [];
  for (var t in i)
    e.push(t);
  return e;
};
function Ie(i, e) {
  var t, n, s, r, o, a, c;
  if (i === !0)
    return "true";
  if (i === !1)
    return "false";
  switch (typeof i) {
    case "object":
      if (i === null)
        return null;
      if (i.toJSON && typeof i.toJSON == "function")
        return Ie(i.toJSON(), e);
      if (c = Hn.call(i), c === "[object Array]") {
        for (s = "[", n = i.length - 1, t = 0; t < n; t++)
          s += Ie(i[t], !0) + ",";
        return n > -1 && (s += Ie(i[t], !0)), s + "]";
      } else if (c === "[object Object]") {
        for (r = Gn(i).sort(), n = r.length, s = "", t = 0; t < n; )
          o = r[t], a = Ie(i[o], !1), a !== void 0 && (s && (s += ","), s += JSON.stringify(o) + ":" + a), t++;
        return "{" + s + "}";
      } else
        return JSON.stringify(i);
    case "function":
    case "undefined":
      return e ? null : void 0;
    case "string":
      return JSON.stringify(i);
    default:
      return isFinite(i) ? i : null;
  }
}
var $n = function(i) {
  var e = Ie(i, !1);
  if (e !== void 0)
    return "" + e;
}, mt = /* @__PURE__ */ Dn($n);
const _e = 32;
function He(i) {
  let e = 0;
  for (; i > 1; )
    i /= 2, e++;
  return e;
}
function jn(i) {
  return i === 0 ? 1 : (i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i |= i >> 32, i + 1);
}
class Vn {
  constructor(e, t, n, s, r) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = n, this.firstNormalEpoch = s, this.firstNormalSlot = r;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = He(jn(e + _e + 1)) - He(_e) - 1, n = this.getSlotsInEpoch(t), s = e - (n - _e);
      return [t, s];
    } else {
      const t = e - this.firstNormalSlot, n = Math.floor(t / this.slotsPerEpoch), s = this.firstNormalEpoch + n, r = t % this.slotsPerEpoch;
      return [s, r];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * _e : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + He(_e)) : this.slotsPerEpoch;
  }
}
class Je extends Error {
  constructor(e, t) {
    super(e), this.logs = void 0, this.logs = t;
  }
}
class A extends Error {
  constructor({
    code: e,
    message: t,
    data: n
  }, s) {
    super(s != null ? `${s}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
var Jn = globalThis.fetch;
class Xn extends rn {
  constructor(e, t, n) {
    const s = (r) => {
      const o = an(r, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...t
      });
      return "socket" in o ? this.underlyingSocket = o.socket : this.underlyingSocket = o, o;
    };
    super(s, e, t, n), this.underlyingSocket = void 0;
  }
  call(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
  }
  notify(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
  }
}
function Yn(i, e) {
  let t;
  try {
    t = i.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.typeIndex !== i.index)
    throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${i.index}`);
  return t;
}
const yt = 56;
class bt {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = Yn(Zn, e), n = e.length - yt;
    F(n >= 0, "lookup table is invalid"), F(n % 32 === 0, "lookup table is invalid");
    const s = n / 32, {
      addresses: r
    } = I([D(C(), s, "addresses")]).decode(e.slice(yt));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new _(t.authority[0]) : void 0,
      addresses: r.map((o) => new _(o))
    };
  }
}
const Zn = {
  index: 1,
  layout: I([
    B("typeIndex"),
    ke("deactivationSlot"),
    W("lastExtendedSlot"),
    L("lastExtendedStartIndex"),
    L(),
    // option
    D(C(), be(L(), -1), "authority")
  ])
}, Qn = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function es(i) {
  const e = i.match(Qn);
  if (e == null)
    throw TypeError(`Failed to validate endpoint URL \`${i}\``);
  const [
    t,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    n,
    s,
    r
  ] = e, o = i.startsWith("https:") ? "wss:" : "ws:", a = s == null ? null : parseInt(s.slice(1), 10), c = (
    // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explicitly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to solana-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    a == null ? "" : `:${a + 1}`
  );
  return `${o}//${n}${c}${r}`;
}
const q = Ce(tt(_), g(), (i) => new _(i)), Pt = nt([g(), N("base64")]), it = Ce(tt(v.Buffer), Pt, (i) => v.Buffer.from(i[0], "base64")), ts = 30 * 1e3;
function ns(i) {
  if (/^https?:/.test(i) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return i;
}
function P(i) {
  let e, t;
  if (typeof i == "string")
    e = i;
  else if (i) {
    const {
      commitment: n,
      ...s
    } = i;
    e = n, t = s;
  }
  return {
    commitment: e,
    config: t
  };
}
function Nt(i) {
  return H([d({
    jsonrpc: N("2.0"),
    id: g(),
    result: i
  }), d({
    jsonrpc: N("2.0"),
    id: g(),
    error: d({
      code: ve(),
      message: g(),
      data: E(In())
    })
  })]);
}
const ss = Nt(ve());
function x(i) {
  return Ce(Nt(i), ss, (e) => "error" in e ? e : {
    ...e,
    result: p(e.result, i)
  });
}
function K(i) {
  return x(d({
    context: d({
      slot: u()
    }),
    value: i
  }));
}
function Ue(i) {
  return d({
    context: d({
      slot: u()
    }),
    value: i
  });
}
function Ge(i, e) {
  return i === 0 ? new Be({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new _(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: M.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new ne(e);
}
const rs = d({
  foundation: u(),
  foundationTerm: u(),
  initial: u(),
  taper: u(),
  terminal: u()
}), os = x(w(y(d({
  epoch: u(),
  effectiveSlot: u(),
  amount: u(),
  postBalance: u(),
  commission: E(y(u()))
})))), is = w(d({
  slot: u(),
  prioritizationFee: u()
})), as = d({
  total: u(),
  validator: u(),
  foundation: u(),
  epoch: u()
}), cs = d({
  epoch: u(),
  slotIndex: u(),
  slotsInEpoch: u(),
  absoluteSlot: u(),
  blockHeight: E(u()),
  transactionCount: E(u())
}), us = d({
  slotsPerEpoch: u(),
  leaderScheduleSlotOffset: u(),
  warmup: Z(),
  firstNormalEpoch: u(),
  firstNormalSlot: u()
}), ls = It(g(), w(u())), ge = y(H([d({}), g()])), ds = d({
  err: ge
}), hs = N("receivedSignature"), fs = d({
  "solana-core": g(),
  "feature-set": E(u())
}), wt = K(d({
  err: y(H([d({}), g()])),
  logs: y(w(g())),
  accounts: E(y(w(y(d({
    executable: Z(),
    owner: g(),
    lamports: u(),
    data: w(g()),
    rentEpoch: E(u())
  }))))),
  unitsConsumed: E(u()),
  returnData: E(y(d({
    programId: g(),
    data: nt([g(), N("base64")])
  })))
})), gs = K(d({
  byIdentity: It(g(), w(u())),
  range: d({
    firstSlot: u(),
    lastSlot: u()
  })
}));
function ps(i, e, t, n, s, r) {
  const o = t || Jn;
  let a;
  r != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
  let c;
  return n && (c = async (h, k) => {
    const R = await new Promise((b, m) => {
      try {
        n(h, k, (f, S) => b([f, S]));
      } catch (f) {
        m(f);
      }
    });
    return await o(...R);
  }), new on(async (h, k) => {
    const R = {
      method: "POST",
      body: h,
      agent: a,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, mr)
    };
    try {
      let b = 5, m, f = 500;
      for (; c ? m = await c(i, R) : m = await o(i, R), !(m.status !== 429 || s === !0 || (b -= 1, b === 0)); )
        console.error(`Server responded with ${m.status} ${m.statusText}.  Retrying after ${f}ms delay...`), await me(f), f *= 2;
      const S = await m.text();
      m.ok ? k(null, S) : k(new Error(`${m.status} ${m.statusText}: ${S}`));
    } catch (b) {
      b instanceof Error && k(b);
    }
  }, {});
}
function ms(i) {
  return (e, t) => new Promise((n, s) => {
    i.request(e, t, (r, o) => {
      if (r) {
        s(r);
        return;
      }
      n(o);
    });
  });
}
function ys(i) {
  return (e) => new Promise((t, n) => {
    e.length === 0 && t([]);
    const s = e.map((r) => i.request(r.methodName, r.args));
    i.request(s, (r, o) => {
      if (r) {
        n(r);
        return;
      }
      t(o);
    });
  });
}
const bs = x(rs), ws = x(as), ks = x(is), Ss = x(cs), _s = x(us), As = x(ls), Is = x(u()), Rs = K(d({
  total: u(),
  circulating: u(),
  nonCirculating: u(),
  nonCirculatingAccounts: w(q)
})), Xe = d({
  amount: g(),
  uiAmount: y(u()),
  decimals: u(),
  uiAmountString: E(g())
}), Bs = K(w(d({
  address: q,
  amount: g(),
  uiAmount: y(u()),
  decimals: u(),
  uiAmountString: E(g())
}))), Es = K(w(d({
  pubkey: q,
  account: d({
    executable: Z(),
    owner: q,
    lamports: u(),
    data: it,
    rentEpoch: u()
  })
}))), Ye = d({
  program: g(),
  parsed: ve(),
  space: u()
}), Ts = K(w(d({
  pubkey: q,
  account: d({
    executable: Z(),
    owner: q,
    lamports: u(),
    data: Ye,
    rentEpoch: u()
  })
}))), xs = K(w(d({
  lamports: u(),
  address: q
}))), Ee = d({
  executable: Z(),
  owner: q,
  lamports: u(),
  data: it,
  rentEpoch: u()
}), vs = d({
  pubkey: q,
  account: Ee
}), Cs = Ce(H([tt(v.Buffer), Ye]), H([Pt, Ye]), (i) => Array.isArray(i) ? p(i, it) : i), Ze = d({
  executable: Z(),
  owner: q,
  lamports: u(),
  data: Cs,
  rentEpoch: u()
}), Ls = d({
  pubkey: q,
  account: Ze
}), Ps = d({
  state: H([N("active"), N("inactive"), N("activating"), N("deactivating")]),
  active: u(),
  inactive: u()
}), Ns = x(w(d({
  signature: g(),
  slot: u(),
  err: ge,
  memo: y(g()),
  blockTime: E(y(u()))
}))), Ks = x(w(d({
  signature: g(),
  slot: u(),
  err: ge,
  memo: y(g()),
  blockTime: E(y(u()))
}))), Fs = d({
  subscription: u(),
  result: Ue(Ee)
}), Os = d({
  pubkey: q,
  account: Ee
}), qs = d({
  subscription: u(),
  result: Ue(Os)
}), Us = d({
  parent: u(),
  slot: u(),
  root: u()
}), zs = d({
  subscription: u(),
  result: Us
}), Ms = H([d({
  type: H([N("firstShredReceived"), N("completed"), N("optimisticConfirmation"), N("root")]),
  slot: u(),
  timestamp: u()
}), d({
  type: N("createdBank"),
  parent: u(),
  slot: u(),
  timestamp: u()
}), d({
  type: N("frozen"),
  slot: u(),
  timestamp: u(),
  stats: d({
    numTransactionEntries: u(),
    numSuccessfulTransactions: u(),
    numFailedTransactions: u(),
    maxTransactionsPerEntry: u()
  })
}), d({
  type: N("dead"),
  slot: u(),
  timestamp: u(),
  err: g()
})]), Ws = d({
  subscription: u(),
  result: Ms
}), Ds = d({
  subscription: u(),
  result: Ue(H([ds, hs]))
}), Hs = d({
  subscription: u(),
  result: u()
}), Gs = d({
  pubkey: g(),
  gossip: y(g()),
  tpu: y(g()),
  rpc: y(g()),
  version: y(g())
}), kt = d({
  votePubkey: g(),
  nodePubkey: g(),
  activatedStake: u(),
  epochVoteAccount: Z(),
  epochCredits: w(nt([u(), u(), u()])),
  commission: u(),
  lastVote: u(),
  rootSlot: y(u())
}), $s = x(d({
  current: w(kt),
  delinquent: w(kt)
})), js = H([N("processed"), N("confirmed"), N("finalized")]), Vs = d({
  slot: u(),
  confirmations: y(u()),
  err: ge,
  confirmationStatus: E(js)
}), Js = K(w(y(Vs))), Xs = x(u()), Kt = d({
  accountKey: q,
  writableIndexes: w(u()),
  readonlyIndexes: w(u())
}), at = d({
  signatures: w(g()),
  message: d({
    accountKeys: w(g()),
    header: d({
      numRequiredSignatures: u(),
      numReadonlySignedAccounts: u(),
      numReadonlyUnsignedAccounts: u()
    }),
    instructions: w(d({
      accounts: w(u()),
      data: g(),
      programIdIndex: u()
    })),
    recentBlockhash: g(),
    addressTableLookups: E(w(Kt))
  })
}), Ft = d({
  pubkey: q,
  signer: Z(),
  writable: Z(),
  source: E(H([N("transaction"), N("lookupTable")]))
}), Ot = d({
  accountKeys: w(Ft),
  signatures: w(g())
}), qt = d({
  parsed: ve(),
  program: g(),
  programId: q
}), Ut = d({
  accounts: w(q),
  data: g(),
  programId: q
}), Ys = H([Ut, qt]), Zs = H([d({
  parsed: ve(),
  program: g(),
  programId: g()
}), d({
  accounts: w(g()),
  data: g(),
  programId: g()
})]), zt = Ce(Ys, Zs, (i) => "accounts" in i ? p(i, Ut) : p(i, qt)), Mt = d({
  signatures: w(g()),
  message: d({
    accountKeys: w(Ft),
    instructions: w(zt),
    recentBlockhash: g(),
    addressTableLookups: E(y(w(Kt)))
  })
}), Oe = d({
  accountIndex: u(),
  mint: g(),
  owner: E(g()),
  uiTokenAmount: Xe
}), Wt = d({
  writable: w(q),
  readonly: w(q)
}), ze = d({
  err: ge,
  fee: u(),
  innerInstructions: E(y(w(d({
    index: u(),
    instructions: w(d({
      accounts: w(u()),
      data: g(),
      programIdIndex: u()
    }))
  })))),
  preBalances: w(u()),
  postBalances: w(u()),
  logMessages: E(y(w(g()))),
  preTokenBalances: E(y(w(Oe))),
  postTokenBalances: E(y(w(Oe))),
  loadedAddresses: E(Wt),
  computeUnitsConsumed: E(u())
}), ct = d({
  err: ge,
  fee: u(),
  innerInstructions: E(y(w(d({
    index: u(),
    instructions: w(zt)
  })))),
  preBalances: w(u()),
  postBalances: w(u()),
  logMessages: E(y(w(g()))),
  preTokenBalances: E(y(w(Oe))),
  postTokenBalances: E(y(w(Oe))),
  loadedAddresses: E(Wt),
  computeUnitsConsumed: E(u())
}), Se = H([N(0), N("legacy")]), pe = d({
  pubkey: g(),
  lamports: u(),
  postBalance: y(u()),
  rewardType: y(g()),
  commission: E(y(u()))
}), Qs = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  transactions: w(d({
    transaction: at,
    meta: y(ze),
    version: E(Se)
  })),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), er = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), tr = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  transactions: w(d({
    transaction: Ot,
    meta: y(ze),
    version: E(Se)
  })),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), nr = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  transactions: w(d({
    transaction: Mt,
    meta: y(ct),
    version: E(Se)
  })),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), sr = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  transactions: w(d({
    transaction: Ot,
    meta: y(ct),
    version: E(Se)
  })),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), rr = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  rewards: E(w(pe)),
  blockTime: y(u()),
  blockHeight: y(u())
}))), or = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  transactions: w(d({
    transaction: at,
    meta: y(ze)
  })),
  rewards: E(w(pe)),
  blockTime: y(u())
}))), St = x(y(d({
  blockhash: g(),
  previousBlockhash: g(),
  parentSlot: u(),
  signatures: w(g()),
  blockTime: y(u())
}))), $e = x(y(d({
  slot: u(),
  meta: y(ze),
  blockTime: E(y(u())),
  transaction: at,
  version: E(Se)
}))), Pe = x(y(d({
  slot: u(),
  transaction: Mt,
  meta: y(ct),
  blockTime: E(y(u())),
  version: E(Se)
}))), ir = K(d({
  blockhash: g(),
  feeCalculator: d({
    lamportsPerSignature: u()
  })
})), ar = K(d({
  blockhash: g(),
  lastValidBlockHeight: u()
})), cr = K(Z()), ur = d({
  slot: u(),
  numTransactions: u(),
  numSlots: u(),
  samplePeriodSecs: u()
}), lr = x(w(ur)), dr = K(y(d({
  feeCalculator: d({
    lamportsPerSignature: u()
  })
}))), hr = x(g()), fr = x(g()), gr = d({
  err: ge,
  logs: w(g()),
  signature: g()
}), pr = d({
  result: Ue(gr),
  subscription: u()
}), mr = {
  "solana-client": "js/0.0.0-development"
};
class yr {
  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(e, t) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
      const l = {};
      return async (h) => {
        const {
          commitment: k,
          config: R
        } = P(h), b = this._buildArgs([], k, void 0, R), m = mt(b);
        return l[m] = l[m] ?? (async () => {
          try {
            const f = await this._rpcRequest("getBlockHeight", b), S = p(f, x(u()));
            if ("error" in S)
              throw new A(S.error, "failed to get block height information");
            return S.result;
          } finally {
            delete l[m];
          }
        })(), await l[m];
      };
    })();
    let n, s, r, o, a, c;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, n = t.wsEndpoint, s = t.httpHeaders, r = t.fetch, o = t.fetchMiddleware, a = t.disableRetryOnRateLimit, c = t.httpAgent), this._rpcEndpoint = ns(e), this._rpcWsEndpoint = n || es(e), this._rpcClient = ps(e, s, r, o, a, c), this._rpcRequest = ms(this._rpcClient), this._rpcBatchRequest = ys(this._rpcClient), this._rpcWebSocket = new Xn(this._rpcWsEndpoint, {
      autoconnect: !1,
      max_reconnects: 1 / 0
    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
  }
  /**
   * The default commitment used for requests
   */
  get commitment() {
    return this._commitment;
  }
  /**
   * The RPC endpoint
   */
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  /**
   * Fetch the balance for the specified public key, return with context
   */
  async getBalanceAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgs([e.toBase58()], n, void 0, s), o = await this._rpcRequest("getBalance", r), a = p(o, K(u()));
    if ("error" in a)
      throw new A(a.error, `failed to get balance for ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(e, t) {
    return await this.getBalanceAndContext(e, t).then((n) => n.value).catch((n) => {
      throw new Error("failed to get balance of account " + e.toBase58() + ": " + n);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(e) {
    const t = await this._rpcRequest("getBlockTime", [e]), n = p(t, x(y(u())));
    if ("error" in n)
      throw new A(n.error, `failed to get block time for slot ${e}`);
    return n.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = p(e, x(u()));
    if ("error" in t)
      throw new A(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = p(e, Is);
    if ("error" in t)
      throw new A(t.error, "failed to get first available block");
    return t.result;
  }
  /**
   * Fetch information about the current supply
   */
  async getSupply(e) {
    let t = {};
    typeof e == "string" ? t = {
      commitment: e
    } : e ? t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    } : t = {
      commitment: this.commitment
    };
    const n = await this._rpcRequest("getSupply", [t]), s = p(n, Rs);
    if ("error" in s)
      throw new A(s.error, "failed to get supply");
    return s.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenSupply", n), r = p(s, K(Xe));
    if ("error" in r)
      throw new A(r.error, "failed to get token supply");
    return r.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenAccountBalance", n), r = p(s, K(Xe));
    if ("error" in r)
      throw new A(r.error, "failed to get token account balance");
    return r.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<GetProgramAccountsResponse>}
   */
  async getTokenAccountsByOwner(e, t, n) {
    const {
      commitment: s,
      config: r
    } = P(n);
    let o = [e.toBase58()];
    "mint" in t ? o.push({
      mint: t.mint.toBase58()
    }) : o.push({
      programId: t.programId.toBase58()
    });
    const a = this._buildArgs(o, s, "base64", r), c = await this._rpcRequest("getTokenAccountsByOwner", a), l = p(c, Es);
    if ("error" in l)
      throw new A(l.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return l.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(e, t, n) {
    let s = [e.toBase58()];
    "mint" in t ? s.push({
      mint: t.mint.toBase58()
    }) : s.push({
      programId: t.programId.toBase58()
    });
    const r = this._buildArgs(s, n, "jsonParsed"), o = await this._rpcRequest("getTokenAccountsByOwner", r), a = p(o, Ts);
    if ("error" in a)
      throw new A(a.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, n = t.filter || t.commitment ? [t] : [], s = await this._rpcRequest("getLargestAccounts", n), r = p(s, xs);
    if ("error" in r)
      throw new A(r.error, "failed to get largest accounts");
    return r.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenLargestAccounts", n), r = p(s, Bs);
    if ("error" in r)
      throw new A(r.error, "failed to get token largest accounts");
    return r.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgs([e.toBase58()], n, "base64", s), o = await this._rpcRequest("getAccountInfo", r), a = p(o, K(y(Ee)));
    if ("error" in a)
      throw new A(a.error, `failed to get info about account ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getAccountInfo", r), a = p(o, K(y(Ze)));
    if ("error" in a)
      throw new A(a.error, `failed to get info about account ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(e, t) {
    try {
      return (await this.getAccountInfoAndContext(e, t)).value;
    } catch (n) {
      throw new Error("failed to get info about account " + e.toBase58() + ": " + n);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = e.map((l) => l.toBase58()), o = this._buildArgs([r], n, "jsonParsed", s), a = await this._rpcRequest("getMultipleAccounts", o), c = p(a, K(w(y(Ze))));
    if ("error" in c)
      throw new A(c.error, `failed to get info for accounts ${r}`);
    return c.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = e.map((l) => l.toBase58()), o = this._buildArgs([r], n, "base64", s), a = await this._rpcRequest("getMultipleAccounts", o), c = p(a, K(w(y(Ee))));
    if ("error" in c)
      throw new A(c.error, `failed to get info for accounts ${r}`);
    return c.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(e, t) {
    return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   */
  async getStakeActivation(e, t, n) {
    const {
      commitment: s,
      config: r
    } = P(t), o = this._buildArgs([e.toBase58()], s, void 0, {
      ...r,
      epoch: n ?? (r == null ? void 0 : r.epoch)
    }), a = await this._rpcRequest("getStakeActivation", o), c = p(a, x(Ps));
    if ("error" in c)
      throw new A(c.error, `failed to get Stake Activation ${e.toBase58()}`);
    return c.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getProgramAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), {
      encoding: r,
      ...o
    } = s || {}, a = this._buildArgs([e.toBase58()], n, r || "base64", o), c = await this._rpcRequest("getProgramAccounts", a), l = w(vs), h = o.withContext === !0 ? p(c, K(l)) : p(c, x(l));
    if ("error" in h)
      throw new A(h.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return h.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getProgramAccounts", r), a = p(o, x(w(Ls)));
    if ("error" in a)
      throw new A(a.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return a.result;
  }
  /** @deprecated Instead, call `confirmTransaction` and pass in {@link TransactionConfirmationStrategy} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(e, t) {
    var r;
    let n;
    if (typeof e == "string")
      n = e;
    else {
      const o = e;
      if ((r = o.abortSignal) != null && r.aborted)
        return Promise.reject(o.abortSignal.reason);
      n = o.signature;
    }
    let s;
    try {
      s = M.decode(n);
    } catch {
      throw new Error("signature must be base58 encoded: " + n);
    }
    return F(s.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
      commitment: t || this.commitment,
      signature: n
    }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
      commitment: t || this.commitment,
      strategy: e
    }) : await this.confirmTransactionUsingDurableNonceStrategy({
      commitment: t || this.commitment,
      strategy: e
    });
  }
  getCancellationPromise(e) {
    return new Promise((t, n) => {
      e != null && (e.aborted ? n(e.reason) : e.addEventListener("abort", () => {
        n(e.reason);
      }));
    });
  }
  getTransactionConfirmationPromise({
    commitment: e,
    signature: t
  }) {
    let n, s, r = !1;
    const o = new Promise((c, l) => {
      try {
        n = this.onSignature(t, (k, R) => {
          n = void 0;
          const b = {
            context: R,
            value: k
          };
          c({
            __type: re.PROCESSED,
            response: b
          });
        }, e);
        const h = new Promise((k) => {
          n == null ? k() : s = this._onSubscriptionStateChange(n, (R) => {
            R === "subscribed" && k();
          });
        });
        (async () => {
          if (await h, r)
            return;
          const k = await this.getSignatureStatus(t);
          if (r || k == null)
            return;
          const {
            context: R,
            value: b
          } = k;
          if (b != null)
            if (b != null && b.err)
              l(b.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (b.confirmationStatus === "processed")
                    return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (b.confirmationStatus === "processed" || b.confirmationStatus === "confirmed")
                    return;
                  break;
                }
                case "processed":
                case "recent":
              }
              r = !0, c({
                __type: re.PROCESSED,
                response: {
                  context: R,
                  value: b
                }
              });
            }
        })();
      } catch (h) {
        l(h);
      }
    });
    return {
      abortConfirmation: () => {
        s && (s(), s = void 0), n != null && (this.removeSignatureListener(n), n = void 0);
      },
      confirmationPromise: o
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: e,
    strategy: {
      abortSignal: t,
      lastValidBlockHeight: n,
      signature: s
    }
  }) {
    let r = !1;
    const o = new Promise((k) => {
      const R = async () => {
        try {
          return await this.getBlockHeight(e);
        } catch {
          return -1;
        }
      };
      (async () => {
        let b = await R();
        if (!r) {
          for (; b <= n; )
            if (await me(1e3), r || (b = await R(), r))
              return;
          k({
            __type: re.BLOCKHEIGHT_EXCEEDED
          });
        }
      })();
    }), {
      abortConfirmation: a,
      confirmationPromise: c
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: s
    }), l = this.getCancellationPromise(t);
    let h;
    try {
      const k = await Promise.race([l, c, o]);
      if (k.__type === re.PROCESSED)
        h = k.response;
      else
        throw new st(s);
    } finally {
      r = !0, a();
    }
    return h;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: e,
    strategy: {
      abortSignal: t,
      minContextSlot: n,
      nonceAccountPubkey: s,
      nonceValue: r,
      signature: o
    }
  }) {
    let a = !1;
    const c = new Promise((b) => {
      let m = r, f = null;
      const S = async () => {
        try {
          const {
            context: T,
            value: U
          } = await this.getNonceAndContext(s, {
            commitment: e,
            minContextSlot: n
          });
          return f = T.slot, U == null ? void 0 : U.nonce;
        } catch {
          return m;
        }
      };
      (async () => {
        if (m = await S(), !a)
          for (; ; ) {
            if (r !== m) {
              b({
                __type: re.NONCE_INVALID,
                slotInWhichNonceDidAdvance: f
              });
              return;
            }
            if (await me(2e3), a || (m = await S(), a))
              return;
          }
      })();
    }), {
      abortConfirmation: l,
      confirmationPromise: h
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: o
    }), k = this.getCancellationPromise(t);
    let R;
    try {
      const b = await Promise.race([k, h, c]);
      if (b.__type === re.PROCESSED)
        R = b.response;
      else {
        let m;
        for (; ; ) {
          const f = await this.getSignatureStatus(o);
          if (f == null)
            break;
          if (f.context.slot < (b.slotInWhichNonceDidAdvance ?? n)) {
            await me(400);
            continue;
          }
          m = f;
          break;
        }
        if (m != null && m.value) {
          const f = e || "finalized", {
            confirmationStatus: S
          } = m.value;
          switch (f) {
            case "processed":
            case "recent":
              if (S !== "processed" && S !== "confirmed" && S !== "finalized")
                throw new Ae(o);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (S !== "confirmed" && S !== "finalized")
                throw new Ae(o);
              break;
            case "finalized":
            case "max":
            case "root":
              if (S !== "finalized")
                throw new Ae(o);
              break;
            default:
          }
          R = {
            context: m.context,
            value: {
              err: m.value.err
            }
          };
        } else
          throw new Ae(o);
      }
    } finally {
      a = !0, l();
    }
    return R;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: e,
    signature: t
  }) {
    let n;
    const s = new Promise((c) => {
      let l = this._confirmTransactionInitialTimeout || 6e4;
      switch (e) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          l = this._confirmTransactionInitialTimeout || 3e4;
          break;
        }
      }
      n = setTimeout(() => c({
        __type: re.TIMED_OUT,
        timeoutMs: l
      }), l);
    }), {
      abortConfirmation: r,
      confirmationPromise: o
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: t
    });
    let a;
    try {
      const c = await Promise.race([o, s]);
      if (c.__type === re.PROCESSED)
        a = c.response;
      else
        throw new xt(t, c.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), r();
    }
    return a;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = p(e, x(w(Gs)));
    if ("error" in t)
      throw new A(t.error, "failed to get cluster nodes");
    return t.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getVoteAccounts", t), s = p(n, $s);
    if ("error" in s)
      throw new A(s.error, "failed to get vote accounts");
    return s.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getSlot", s), o = p(r, x(u()));
    if ("error" in o)
      throw new A(o.error, "failed to get slot");
    return o.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getSlotLeader", s), o = p(r, x(g()));
    if ("error" in o)
      throw new A(o.error, "failed to get slot leader");
    return o.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(e, t) {
    const n = [e, t], s = await this._rpcRequest("getSlotLeaders", n), r = p(s, x(w(q)));
    if ("error" in r)
      throw new A(r.error, "failed to get slot leaders");
    return r.result;
  }
  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(e, t) {
    const {
      context: n,
      value: s
    } = await this.getSignatureStatuses([e], t);
    F(s.length === 1);
    const r = s[0];
    return {
      context: n,
      value: r
    };
  }
  /**
   * Fetch the current statuses of a batch of signatures
   */
  async getSignatureStatuses(e, t) {
    const n = [e];
    t && n.push(t);
    const s = await this._rpcRequest("getSignatureStatuses", n), r = p(s, Js);
    if ("error" in r)
      throw new A(r.error, "failed to get signature status");
    return r.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getTransactionCount", s), o = p(r, x(u()));
    if ("error" in o)
      throw new A(o.error, "failed to get transaction count");
    return o.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(e) {
    return (await this.getSupply({
      commitment: e,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getInflationGovernor", t), s = p(n, bs);
    if ("error" in s)
      throw new A(s.error, "failed to get inflation");
    return s.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(e, t, n) {
    const {
      commitment: s,
      config: r
    } = P(n), o = this._buildArgs([e.map((l) => l.toBase58())], s, void 0, {
      ...r,
      epoch: t ?? (r == null ? void 0 : r.epoch)
    }), a = await this._rpcRequest("getInflationReward", o), c = p(a, os);
    if ("error" in c)
      throw new A(c.error, "failed to get inflation reward");
    return c.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const e = await this._rpcRequest("getInflationRate", []), t = p(e, ws);
    if ("error" in t)
      throw new A(t.error, "failed to get inflation rate");
    return t.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getEpochInfo", s), o = p(r, Ss);
    if ("error" in o)
      throw new A(o.error, "failed to get epoch info");
    return o.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = p(e, _s);
    if ("error" in t)
      throw new A(t.error, "failed to get epoch schedule");
    const n = t.result;
    return new Vn(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = p(e, As);
    if ("error" in t)
      throw new A(t.error, "failed to get leader schedule");
    return t.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getMinimumBalanceForRentExemption", n), r = p(s, Xs);
    return "error" in r ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : r.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getRecentBlockhash", t), s = p(n, ir);
    if ("error" in s)
      throw new A(s.error, "failed to get recent blockhash");
    return s.result;
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), n = p(t, lr);
    if ("error" in n)
      throw new A(n.error, "failed to get recent performance samples");
    return n.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getFeeCalculatorForBlockhash", n), r = p(s, dr);
    if ("error" in r)
      throw new A(r.error, "failed to get fee calculator");
    const {
      context: o,
      value: a
    } = r.result;
    return {
      context: o,
      value: a !== null ? a.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(e, t) {
    const n = de(e.serialize()).toString("base64"), s = this._buildArgs([n], t), r = await this._rpcRequest("getFeeForMessage", s), o = p(r, K(y(u())));
    if ("error" in o)
      throw new A(o.error, "failed to get fee for message");
    if (o.result === null)
      throw new Error("invalid blockhash");
    return o.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(e) {
    var o;
    const t = (o = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : o.map((a) => a.toBase58()), n = t != null && t.length ? [t] : [], s = await this._rpcRequest("getRecentPrioritizationFees", n), r = p(s, ks);
    if ("error" in r)
      throw new A(r.error, "failed to get recent prioritization fees");
    return r.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(e) {
    try {
      return (await this.getRecentBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(e) {
    try {
      return (await this.getLatestBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getLatestBlockhash", s), o = p(r, ar);
    if ("error" in o)
      throw new A(o.error, "failed to get latest blockhash");
    return o.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgs([e], n, void 0, s), o = await this._rpcRequest("isBlockhashValid", r), a = p(o, cr);
    if ("error" in a)
      throw new A(a.error, "failed to determine if the blockhash `" + e + "`is valid");
    return a.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = p(e, x(fs));
    if ("error" in t)
      throw new A(t.error, "failed to get version");
    return t.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = p(e, x(g()));
    if ("error" in t)
      throw new A(t.error, "failed to get genesis hash");
    return t.result;
  }
  /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getBlock(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getBlock", r);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const a = p(o, tr);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        case "none": {
          const a = p(o, er);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        default: {
          const a = p(o, Qs);
          if ("error" in a)
            throw a.error;
          const {
            result: c
          } = a;
          return c ? {
            ...c,
            transactions: c.transactions.map(({
              transaction: l,
              meta: h,
              version: k
            }) => ({
              meta: h,
              transaction: {
                ...l,
                message: Ge(k, l.message)
              },
              version: k
            }))
          } : null;
        }
      }
    } catch (a) {
      throw new A(a, "failed to get confirmed block");
    }
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getBlock", r);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const a = p(o, sr);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        case "none": {
          const a = p(o, rr);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        default: {
          const a = p(o, nr);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
      }
    } catch (a) {
      throw new A(a, "failed to get block");
    }
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(e) {
    let t, n;
    if (typeof e == "string")
      n = e;
    else if (e) {
      const {
        commitment: a,
        ...c
      } = e;
      n = a, t = c;
    }
    const s = this._buildArgs([], n, "base64", t), r = await this._rpcRequest("getBlockProduction", s), o = p(r, gs);
    if ("error" in o)
      throw new A(o.error, "failed to get block production information");
    return o.result;
  }
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransaction(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getTransaction", r), a = p(o, $e);
    if ("error" in a)
      throw new A(a.error, "failed to get transaction");
    const c = a.result;
    return c && {
      ...c,
      transaction: {
        ...c.transaction,
        message: Ge(c.version, c.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getTransaction", r), a = p(o, Pe);
    if ("error" in a)
      throw new A(a.error, "failed to get transaction");
    return a.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = e.map((c) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([c], n, "jsonParsed", s)
    }));
    return (await this._rpcBatchRequest(r)).map((c) => {
      const l = p(c, Pe);
      if ("error" in l)
        throw new A(l.error, "failed to get transactions");
      return l.result;
    });
  }
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransactions(e, t) {
    const {
      commitment: n,
      config: s
    } = P(t), r = e.map((c) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([c], n, void 0, s)
    }));
    return (await this._rpcBatchRequest(r)).map((c) => {
      const l = p(c, $e);
      if ("error" in l)
        throw new A(l.error, "failed to get transactions");
      const h = l.result;
      return h && {
        ...h,
        transaction: {
          ...h.transaction,
          message: Ge(h.version, h.transaction.message)
        }
      };
    });
  }
  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */
  async getConfirmedBlock(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getConfirmedBlock", n), r = p(s, or);
    if ("error" in r)
      throw new A(r.error, "failed to get confirmed block");
    const o = r.result;
    if (!o)
      throw new Error("Confirmed block " + e + " not found");
    const a = {
      ...o,
      transactions: o.transactions.map(({
        transaction: c,
        meta: l
      }) => {
        const h = new ne(c.message);
        return {
          meta: l,
          transaction: {
            ...c,
            message: h
          }
        };
      })
    };
    return {
      ...a,
      transactions: a.transactions.map(({
        transaction: c,
        meta: l
      }) => ({
        meta: l,
        transaction: oe.populate(c.message, c.signatures)
      }))
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n), r = await this._rpcRequest("getBlocks", s), o = p(r, x(w(u())));
    if ("error" in o)
      throw new A(o.error, "failed to get blocks");
    return o.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), r = p(s, St);
    if ("error" in r)
      throw new A(r.error, "failed to get block");
    const o = r.result;
    if (!o)
      throw new Error("Block " + e + " not found");
    return o;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getConfirmedBlock", n), r = p(s, St);
    if ("error" in r)
      throw new A(r.error, "failed to get confirmed block");
    const o = r.result;
    if (!o)
      throw new Error("Confirmed block " + e + " not found");
    return o;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getConfirmedTransaction", n), r = p(s, $e);
    if ("error" in r)
      throw new A(r.error, "failed to get transaction");
    const o = r.result;
    if (!o)
      return o;
    const a = new ne(o.transaction.message), c = o.transaction.signatures;
    return {
      ...o,
      transaction: oe.populate(a, c)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), s = await this._rpcRequest("getConfirmedTransaction", n), r = p(s, Pe);
    if ("error" in r)
      throw new A(r.error, "failed to get confirmed transaction");
    return r.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(e, t) {
    const n = e.map((o) => ({
      methodName: "getConfirmedTransaction",
      args: this._buildArgsAtLeastConfirmed([o], t, "jsonParsed")
    }));
    return (await this._rpcBatchRequest(n)).map((o) => {
      const a = p(o, Pe);
      if ("error" in a)
        throw new A(a.error, "failed to get confirmed transactions");
      return a.result;
    });
  }
  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */
  async getConfirmedSignaturesForAddress(e, t, n) {
    let s = {}, r = await this.getFirstAvailableBlock();
    for (; !("until" in s) && (t--, !(t <= 0 || t < r)); )
      try {
        const c = await this.getConfirmedBlockSignatures(t, "finalized");
        c.signatures.length > 0 && (s.until = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes("skipped"))
          continue;
        throw c;
      }
    let o = await this.getSlot("finalized");
    for (; !("before" in s) && (n++, !(n > o)); )
      try {
        const c = await this.getConfirmedBlockSignatures(n);
        c.signatures.length > 0 && (s.before = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes("skipped"))
          continue;
        throw c;
      }
    return (await this.getConfirmedSignaturesForAddress2(e, s)).map((c) => c.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getConfirmedSignaturesForAddress2(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), r = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), o = p(r, Ns);
    if ("error" in o)
      throw new A(o.error, "failed to get confirmed signatures for address");
    return o.result;
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getSignaturesForAddress(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), r = await this._rpcRequest("getSignaturesForAddress", s), o = p(r, Ks);
    if ("error" in o)
      throw new A(o.error, "failed to get signatures for address");
    return o.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(e, t);
    let r = null;
    return s !== null && (r = new bt({
      key: e,
      state: bt.deserialize(s.data)
    })), {
      context: n,
      value: r
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(e, t) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(e, t);
    let r = null;
    return s !== null && (r = ot.fromAccountData(s.data)), {
      context: n,
      value: r
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(e, t) {
    return await this.getNonceAndContext(e, t).then((n) => n.value).catch((n) => {
      throw new Error("failed to get nonce for account " + e.toBase58() + ": " + n);
    });
  }
  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */
  async requestAirdrop(e, t) {
    const n = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), s = p(n, hr);
    if ("error" in s)
      throw new A(s.error, `airdrop to ${e.toBase58()} failed`);
    return s.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await me(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= ts;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  /**
   * @internal
   */
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const e = Date.now(), t = this._blockhashInfo.latestBlockhash, n = t ? t.blockhash : null;
      for (let s = 0; s < 50; s++) {
        const r = await this.getLatestBlockhash("finalized");
        if (n !== r.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: r,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, r;
        await me(Un / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(e) {
    const {
      commitment: t,
      config: n
    } = P(e), s = this._buildArgs([], t, "base64", n), r = await this._rpcRequest("getStakeMinimumDelegation", s), o = p(r, K(u()));
    if ("error" in o)
      throw new A(o.error, "failed to get stake minimum delegation");
    return o.result;
  }
  /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async simulateTransaction(e, t, n) {
    if ("message" in e) {
      const f = e.serialize(), S = v.Buffer.from(f).toString("base64");
      if (Array.isArray(t) || n !== void 0)
        throw new Error("Invalid arguments");
      const T = t || {};
      T.encoding = "base64", "commitment" in T || (T.commitment = this.commitment);
      const U = [S, T], ce = await this._rpcRequest("simulateTransaction", U), se = p(ce, wt);
      if ("error" in se)
        throw new Error("failed to simulate transaction: " + se.error.message);
      return se.result;
    }
    let s;
    if (e instanceof oe) {
      let m = e;
      s = new oe(), s.feePayer = m.feePayer, s.instructions = e.instructions, s.nonceInfo = m.nonceInfo, s.signatures = m.signatures;
    } else
      s = oe.populate(e), s._message = s._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const r = t;
    if (s.nonceInfo && r)
      s.sign(...r);
    else {
      let m = this._disableBlockhashCaching;
      for (; ; ) {
        const f = await this._blockhashWithExpiryBlockHeight(m);
        if (s.lastValidBlockHeight = f.lastValidBlockHeight, s.recentBlockhash = f.blockhash, !r)
          break;
        if (s.sign(...r), !s.signature)
          throw new Error("!signature");
        const S = s.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(S) && !this._blockhashInfo.transactionSignatures.includes(S)) {
          this._blockhashInfo.simulatedSignatures.push(S);
          break;
        } else
          m = !0;
      }
    }
    const o = s._compile(), a = o.serialize(), l = s._serialize(a).toString("base64"), h = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const m = (Array.isArray(n) ? n : o.nonProgramIds()).map((f) => f.toBase58());
      h.accounts = {
        encoding: "base64",
        addresses: m
      };
    }
    r && (h.sigVerify = !0);
    const k = [l, h], R = await this._rpcRequest("simulateTransaction", k), b = p(R, wt);
    if ("error" in b) {
      let m;
      if ("data" in b.error && (m = b.error.data.logs, m && Array.isArray(m))) {
        const f = `
    `, S = f + m.join(f);
        console.error(b.error.message, S);
      }
      throw new Je("failed to simulate transaction: " + b.error.message, m);
    }
    return b.result;
  }
  /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */
  /**
   * Send a signed transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Sign and send a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async sendTransaction(e, t, n) {
    if ("version" in e) {
      if (t && Array.isArray(t))
        throw new Error("Invalid arguments");
      const o = e.serialize();
      return await this.sendRawTransaction(o, t);
    }
    if (t === void 0 || !Array.isArray(t))
      throw new Error("Invalid arguments");
    const s = t;
    if (e.nonceInfo)
      e.sign(...s);
    else {
      let o = this._disableBlockhashCaching;
      for (; ; ) {
        const a = await this._blockhashWithExpiryBlockHeight(o);
        if (e.lastValidBlockHeight = a.lastValidBlockHeight, e.recentBlockhash = a.blockhash, e.sign(...s), !e.signature)
          throw new Error("!signature");
        const c = e.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(c))
          o = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(c);
          break;
        }
      }
    }
    const r = e.serialize();
    return await this.sendRawTransaction(r, n);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(e, t) {
    const n = de(e).toString("base64");
    return await this.sendEncodedTransaction(n, t);
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(e, t) {
    const n = {
      encoding: "base64"
    }, s = t && t.skipPreflight, r = s === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
    t && t.maxRetries != null && (n.maxRetries = t.maxRetries), t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot), s && (n.skipPreflight = s), r && (n.preflightCommitment = r);
    const o = [e, n], a = await this._rpcRequest("sendTransaction", o), c = p(a, fr);
    if ("error" in c) {
      let l;
      throw "data" in c.error && (l = c.error.data.logs), new Je("failed to send transaction: " + c.error.message, l);
    }
    return c.result;
  }
  /**
   * @internal
   */
  _wsOnOpen() {
    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
      (async () => {
        try {
          await this._rpcWebSocket.notify("ping");
        } catch {
        }
      })();
    }, 5e3), this._updateSubscriptions();
  }
  /**
   * @internal
   */
  _wsOnError(e) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message);
  }
  /**
   * @internal
   */
  _wsOnClose(e) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
      this._setSubscription(t, {
        ...n,
        state: "pending"
      });
    });
  }
  /**
   * @internal
   */
  _setSubscription(e, t) {
    var s;
    const n = (s = this._subscriptionsByHash[e]) == null ? void 0 : s.state;
    if (this._subscriptionsByHash[e] = t, n !== t.state) {
      const r = this._subscriptionStateChangeCallbacksByHash[e];
      r && r.forEach((o) => {
        try {
          o(t.state);
        } catch {
        }
      });
    }
  }
  /**
   * @internal
   */
  _onSubscriptionStateChange(e, t) {
    var r;
    const n = this._subscriptionHashByClientSubscriptionId[e];
    if (n == null)
      return () => {
      };
    const s = (r = this._subscriptionStateChangeCallbacksByHash)[n] || (r[n] = /* @__PURE__ */ new Set());
    return s.add(t), () => {
      s.delete(t), s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
    };
  }
  /**
   * @internal
   */
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
        this._rpcWebSocketIdleTimeout = null;
        try {
          this._rpcWebSocket.close();
        } catch (n) {
          n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`);
        }
      }, 500));
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const e = this._rpcWebSocketGeneration, t = () => e === this._rpcWebSocketGeneration;
    await Promise.all(
      // Don't be tempted to change this to `Object.entries`. We call
      // `_updateSubscriptions` recursively when processing the state,
      // so it's important that we look up the *current* version of
      // each subscription, every time we process a hash.
      Object.keys(this._subscriptionsByHash).map(async (n) => {
        const s = this._subscriptionsByHash[n];
        if (s !== void 0)
          switch (s.state) {
            case "pending":
            case "unsubscribed":
              if (s.callbacks.size === 0) {
                delete this._subscriptionsByHash[n], s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: r,
                  method: o
                } = s;
                try {
                  this._setSubscription(n, {
                    ...s,
                    state: "subscribing"
                  });
                  const a = await this._rpcWebSocket.call(o, r);
                  this._setSubscription(n, {
                    ...s,
                    serverSubscriptionId: a,
                    state: "subscribed"
                  }), this._subscriptionCallbacksByServerSubscriptionId[a] = s.callbacks, await this._updateSubscriptions();
                } catch (a) {
                  if (a instanceof Error && console.error(`${o} error for argument`, r, a.message), !t())
                    return;
                  this._setSubscription(n, {
                    ...s,
                    state: "pending"
                  }), await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              s.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: r,
                  unsubscribeMethod: o
                } = s;
                if (this._subscriptionsAutoDisposedByRpc.has(r))
                  this._subscriptionsAutoDisposedByRpc.delete(r);
                else {
                  this._setSubscription(n, {
                    ...s,
                    state: "unsubscribing"
                  }), this._setSubscription(n, {
                    ...s,
                    state: "unsubscribing"
                  });
                  try {
                    await this._rpcWebSocket.call(o, [r]);
                  } catch (a) {
                    if (a instanceof Error && console.error(`${o} error:`, a.message), !t())
                      return;
                    this._setSubscription(n, {
                      ...s,
                      state: "subscribed"
                    }), await this._updateSubscriptions();
                    return;
                  }
                }
                this._setSubscription(n, {
                  ...s,
                  state: "unsubscribed"
                }), await this._updateSubscriptions();
              })();
              break;
          }
      })
    );
  }
  /**
   * @internal
   */
  _handleServerNotification(e, t) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[e];
    n !== void 0 && n.forEach((s) => {
      try {
        s(
          ...t
        );
      } catch (r) {
        console.error(r);
      }
    });
  }
  /**
   * @internal
   */
  _wsOnAccountNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, Fs);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(e, t) {
    const n = this._nextClientSubscriptionId++, s = mt([e.method, t]), r = this._subscriptionsByHash[s];
    return r === void 0 ? this._subscriptionsByHash[s] = {
      ...e,
      args: t,
      callbacks: /* @__PURE__ */ new Set([e.callback]),
      state: "pending"
    } : r.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[n] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
      const o = this._subscriptionsByHash[s];
      F(o !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), o.callbacks.delete(e.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), n;
  }
  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */
  onAccountChange(e, t, n) {
    const s = this._buildArgs(
      [e.toBase58()],
      n || this._commitment || "finalized",
      // Apply connection/server default.
      "base64"
    );
    return this._makeSubscription({
      callback: t,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, s);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "account change");
  }
  /**
   * @internal
   */
  _wsOnProgramAccountNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, qs);
    this._handleServerNotification(n, [{
      accountId: t.value.pubkey,
      accountInfo: t.value.account
    }, t.context]);
  }
  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */
  onProgramAccountChange(e, t, n, s) {
    const r = this._buildArgs(
      [e.toBase58()],
      n || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      s ? {
        filters: s
      } : void 0
      /* extra */
    );
    return this._makeSubscription({
      callback: t,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, r);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeProgramAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "program account change");
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(e, t, n) {
    const s = this._buildArgs(
      [typeof e == "object" ? {
        mentions: [e.toString()]
      } : e],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    );
    return this._makeSubscription({
      callback: t,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, s);
  }
  /**
   * Deregister a logs callback.
   *
   * @param clientSubscriptionId client subscription id to deregister.
   */
  async removeOnLogsListener(e) {
    await this._unsubscribeClientSubscription(e, "logs");
  }
  /**
   * @internal
   */
  _wsOnLogsNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, pr);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, zs);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "slot change");
  }
  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, Ws);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot update notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotUpdateListener(e) {
    await this._unsubscribeClientSubscription(e, "slot update");
  }
  /**
   * @internal
   */
  async _unsubscribeClientSubscription(e, t) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
    n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`);
  }
  _buildArgs(e, t, n, s) {
    const r = t || this._commitment;
    if (r || n || s) {
      let o = {};
      n && (o.encoding = n), r && (o.commitment = r), s && (o = Object.assign(o, s)), e.push(o);
    }
    return e;
  }
  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(e, t, n, s) {
    const r = t || this._commitment;
    if (r && !["confirmed", "finalized"].includes(r))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(e, t, n, s);
  }
  /**
   * @internal
   */
  _wsOnSignatureNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, Ds);
    t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, t.value === "receivedSignature" ? [{
      type: "received"
    }, t.context] : [{
      type: "status",
      result: t.value
    }, t.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(e, t, n) {
    const s = this._buildArgs(
      [e],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    ), r = this._makeSubscription({
      callback: (o, a) => {
        if (o.type === "status") {
          t(o.result, a);
          try {
            this.removeSignatureListener(r);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, s);
    return r;
  }
  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */
  onSignatureWithOptions(e, t, n) {
    const {
      commitment: s,
      ...r
    } = {
      ...n,
      commitment: n && n.commitment || this._commitment || "finalized"
      // Apply connection/server default.
    }, o = this._buildArgs([e], s, void 0, r), a = this._makeSubscription({
      callback: (c, l) => {
        t(c, l);
        try {
          this.removeSignatureListener(a);
        } catch {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, o);
    return a;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSignatureListener(e) {
    await this._unsubscribeClientSubscription(e, "signature result");
  }
  /**
   * @internal
   */
  _wsOnRootNotification(e) {
    const {
      result: t,
      subscription: n
    } = p(e, Hs);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a root notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeRootChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "root change");
  }
}
class Re {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param {Ed25519Keypair} keypair ed25519 keypair
   */
  constructor(e) {
    this._keypair = void 0, this._keypair = e ?? ft();
  }
  /**
   * Generate a new random keypair
   *
   * @returns {Keypair} Keypair
   */
  static generate() {
    return new Re(ft());
  }
  /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options skip secret key validation
   *
   * @returns {Keypair} Keypair
   */
  static fromSecretKey(e, t) {
    if (e.byteLength !== 64)
      throw new Error("bad secret key size");
    const n = e.slice(32, 64);
    if (!t || !t.skipValidation) {
      const s = e.slice(0, 32), r = Ve(s);
      for (let o = 0; o < 32; o++)
        if (n[o] !== r[o])
          throw new Error("provided secretKey is invalid");
    }
    return new Re({
      publicKey: n,
      secretKey: e
    });
  }
  /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   *
   * @returns {Keypair} Keypair
   */
  static fromSeed(e) {
    const t = Ve(e), n = new Uint8Array(64);
    return n.set(e), n.set(t, 32), new Re({
      publicKey: t,
      secretKey: n
    });
  }
  /**
   * The public key for this keypair
   *
   * @returns {PublicKey} PublicKey
   */
  get publicKey() {
    return new _(this._keypair.publicKey);
  }
  /**
   * The raw secret key for this keypair
   * @returns {Uint8Array} Secret key in an array of Uint8 bytes
   */
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: I([B("instruction"), ke("recentSlot"), L("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: I([B("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: I([B("instruction"), ke(), D(C(), be(B(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: I([B("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: I([B("instruction")])
  }
});
new _("AddressLookupTab1e1111111111111111111111111");
const Ne = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: I([L("instruction"), B("units"), B("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: I([L("instruction"), B("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: I([L("instruction"), B("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: I([L("instruction"), ke("microLamports")])
  }
});
class Qe {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Compute Budget program
   */
  /**
   * @deprecated Instead, call {@link setComputeUnitLimit} and/or {@link setComputeUnitPrice}
   */
  static requestUnits(e) {
    const t = Ne.RequestUnits, n = Le(t, e);
    return new le({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static requestHeapFrame(e) {
    const t = Ne.RequestHeapFrame, n = Le(t, e);
    return new le({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static setComputeUnitLimit(e) {
    const t = Ne.SetComputeUnitLimit, n = Le(t, e);
    return new le({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static setComputeUnitPrice(e) {
    const t = Ne.SetComputeUnitPrice, n = Le(t, {
      microLamports: BigInt(e.microLamports)
    });
    return new le({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
}
Qe.programId = new _("ComputeBudget111111111111111111111111111111");
I([L("numSignatures"), L("padding"), J("signatureOffset"), J("signatureInstructionIndex"), J("publicKeyOffset"), J("publicKeyInstructionIndex"), J("messageDataOffset"), J("messageDataSize"), J("messageInstructionIndex")]);
new _("Ed25519SigVerify111111111111111111111111111");
_t.utils.isValidPrivateKey;
_t.getPublicKey;
I([L("numSignatures"), J("signatureOffset"), L("signatureInstructionIndex"), J("ethAddressOffset"), L("ethAddressInstructionIndex"), J("messageDataOffset"), J("messageDataSize"), L("messageInstructionIndex"), O(20, "ethAddress"), O(64, "signature"), L("recoveryId")]);
new _("KeccakSecp256k11111111111111111111111111111");
var Dt;
new _("StakeConfig11111111111111111111111111111111");
class Ht {
  /**
   * Create a new Lockup object
   */
  constructor(e, t, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = n;
  }
  /**
   * Default, inactive Lockup value
   */
}
Dt = Ht;
Ht.default = new Dt(0, 0, _.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: I([B("instruction"), Cn(), Ln()])
  },
  Authorize: {
    index: 1,
    layout: I([B("instruction"), C("newAuthorized"), B("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: I([B("instruction")])
  },
  Split: {
    index: 3,
    layout: I([B("instruction"), G("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: I([B("instruction"), G("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: I([B("instruction")])
  },
  Merge: {
    index: 7,
    layout: I([B("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: I([B("instruction"), C("newAuthorized"), B("stakeAuthorizationType"), ye("authoritySeed"), C("authorityOwner")])
  }
});
new _("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: I([B("instruction"), Pn()])
  },
  Authorize: {
    index: 1,
    layout: I([B("instruction"), C("newAuthorized"), B("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: I([B("instruction"), G("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: I([B("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: I([B("instruction"), Nn()])
  }
});
new _("Vote111111111111111111111111111111111111111");
new _("Va1idator1nfo111111111111111111111111111111");
d({
  name: g(),
  website: E(g()),
  details: E(g()),
  keybaseUsername: E(g())
});
new _("Vote111111111111111111111111111111111111111");
I([
  C("nodePubkey"),
  C("authorizedWithdrawer"),
  L("commission"),
  W(),
  // votes.length
  D(I([W("slot"), B("confirmationCount")]), be(B(), -8), "votes"),
  L("rootSlotValid"),
  W("rootSlot"),
  W(),
  // authorizedVoters.length
  D(I([W("epoch"), C("authorizedVoter")]), be(B(), -8), "authorizedVoters"),
  I([D(I([C("authorizedPubkey"), W("epochOfLastAuthorizedSwitch"), W("targetEpoch")]), 32, "buf"), W("idx"), L("isEmpty")], "priorVoters"),
  W(),
  // epochCredits.length
  D(I([W("epoch"), W("credits"), W("prevCredits")]), be(B(), -8), "epochCredits"),
  I([W("slot"), W("timestamp")], "lastTimestamp")
]);
const Me = "Solana", br = "11111111111111111111111111111111", ue = class ue {
  constructor(e) {
    z(this, "type", "Native");
    z(this, "address");
    ue.instanceof(e) ? this.address = e.address : dt.instanceof(e) ? this.address = new _(e.toUint8Array()) : typeof e == "string" && je.valid(e) ? this.address = new _(je.decode(e)) : this.address = new _(e);
  }
  unwrap() {
    return this.address;
  }
  toString() {
    return this.address.toBase58();
  }
  toUint8Array() {
    return new Uint8Array(this.address.toBytes());
  }
  toNative() {
    return this;
  }
  toUniversalAddress() {
    return new dt(this.toUint8Array());
  }
  static instanceof(e) {
    return e.constructor.platform === ue.platform;
  }
  equals(e) {
    return ue.instanceof(e) ? e.unwrap().equals(this.unwrap()) : this.toUniversalAddress().equals(e);
  }
};
z(ue, "byteSize", 32), z(ue, "platform", Me);
let Y = ue;
cn(Me, Y);
class Gt extends mn {
  async getTokenAccount(e, t) {
    const { getAssociatedTokenAddress: n } = await import("./index-BWCR_X9D.mjs"), s = new Y(t).unwrap(), r = new Y(e).unwrap(), o = await n(s, r);
    return {
      chain: this.chain,
      address: new Y(o.toString())
    };
  }
}
const wr = new _("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
new _("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const Lr = new _("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
new _("So11111111111111111111111111111111111111112");
new _("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
const ee = class ee extends yn {
  constructor(e, t) {
    super(e, t ?? un(e, ee._platform));
  }
  getRpc(e, t = {
    commitment: "confirmed",
    disableRetryOnRateLimit: !0
  }) {
    if (e in this.config)
      return new yr(this.config[e].rpc, t);
    throw new Error("No configuration available for chain: " + e);
  }
  getChain(e, t) {
    if (e in this.config)
      return new Gt(e, this, t);
    throw new Error("No configuration available for chain: " + e);
  }
  static nativeTokenId(e, t) {
    if (!ee.isSupportedChain(t))
      throw new Error(`invalid chain: ${t}`);
    return ln.chainAddress(t, br);
  }
  static isNativeTokenId(e, t, n) {
    return !this.isSupportedChain(t) || n.chain !== t ? !1 : this.nativeTokenId(e, t) == n;
  }
  static isSupportedChain(e) {
    return dn(e) === ee._platform;
  }
  static async getDecimals(e, t, n) {
    if (De(n))
      return hn(ee._platform);
    let s = await t.getParsedAccountInfo(new Y(n).unwrap());
    if (!s || !s.value)
      throw new Error("could not fetch token details");
    const { decimals: r } = s.value.data.parsed.info;
    return r;
  }
  static async getBalance(e, t, n, s) {
    const r = new _(n);
    if (De(s))
      return BigInt(await t.getBalance(r));
    const o = await t.getTokenAccountsByOwner(r, {
      mint: new Y(s).unwrap()
    }), a = o.value.length > 0 ? o.value[0].pubkey : r, c = await t.getTokenAccountBalance(a);
    return BigInt(c.value.amount);
  }
  static async getBalances(e, t, n, s) {
    let r;
    s.includes("native") && (r = BigInt(await t.getBalance(new _(n))));
    const o = await t.getParsedTokenAccountsByOwner(new _(n), {
      programId: new _(wr)
    });
    return s.map((c) => {
      var k, R, b, m;
      if (De(c))
        return { native: r };
      const l = new Y(c).toString(), h = (m = (b = (R = (k = o.value.find((f) => {
        var S, T;
        return ((T = (S = f == null ? void 0 : f.account.data.parsed) == null ? void 0 : S.info) == null ? void 0 : T.mint) === c;
      })) == null ? void 0 : k.account.data.parsed) == null ? void 0 : R.info) == null ? void 0 : b.tokenAmount) == null ? void 0 : m.amount;
      return h ? { [l]: BigInt(h) } : { [l]: null };
    }).reduce((c, l) => Object.assign(c, l), {});
  }
  static async sendWait(e, t, n, s) {
    const { blockhash: r, lastValidBlockHeight: o } = await this.latestBlock(t), a = await Promise.all(n.map((h) => t.sendRawTransaction(
      h,
      // Set the commitment level to match the rpc commitment level
      // otherwise, it defaults to finalized
      s ?? { preflightCommitment: t.commitment }
    ))), l = (await Promise.all(a.map((h) => t.confirmTransaction({
      signature: h,
      blockhash: r,
      lastValidBlockHeight: o
    }, t.commitment)))).filter((h) => h.value.err).map((h) => h.value.err);
    if (l.length > 0)
      throw new Error(`Failed to confirm transaction: ${l}`);
    return a;
  }
  static async latestBlock(e, t) {
    return e.getLatestBlockhash(t ?? e.commitment);
  }
  static async getLatestBlock(e) {
    return await e.getSlot();
  }
  static async getLatestFinalizedBlock(e) {
    const { lastValidBlockHeight: t } = await this.latestBlock(e, "finalized");
    return t;
  }
  static chainFromChainId(e) {
    const t = fn(ee._platform, e);
    if (!t)
      throw new Error(`No matching genesis hash to determine network and chain: ${e}`);
    const [n, s] = t;
    return [n, s];
  }
  static async chainFromRpc(e) {
    try {
      const t = await e.getGenesisHash();
      return ee.chainFromChainId(t);
    } catch (t) {
      if (e.rpcEndpoint.includes("http://127") || e.rpcEndpoint.includes("http://localhost") || e.rpcEndpoint === "http://solana-devnet:8899")
        return ["Devnet", "Solana"];
      throw t;
    }
  }
};
z(ee, "_platform", Me);
let he = ee;
class Pr {
  constructor(e, t, n, s, r = !1) {
    z(this, "transaction");
    z(this, "network");
    z(this, "chain");
    z(this, "description");
    z(this, "parallelizable");
    this.transaction = e, this.network = t, this.chain = n, this.description = s, this.parallelizable = r;
  }
}
function We(i) {
  return i.signatures !== void 0 && i.message !== void 0;
}
const $t = 0.5, jt = 1, Vt = 1, Jt = 1e9, Xt = 5, kr = 25e4;
async function Sr(i, e, t) {
  const [n, s] = await he.chainFromRpc(i), r = typeof e == "string" ? Re.fromSecretKey(gn.decode(e)) : e;
  if (t != null && t.priorityFee && t.priorityFee.percentile && t.priorityFee.percentile > 1)
    throw new Error("priorityFeePercentile must be a number between 0 and 1");
  return new _r(i, s, r, (t == null ? void 0 : t.debug) ?? !1, (t == null ? void 0 : t.priorityFee) ?? {}, (t == null ? void 0 : t.retries) ?? Xt, t == null ? void 0 : t.sendOpts);
}
class _r {
  constructor(e, t, n, s = !1, r, o = Xt, a) {
    z(this, "_rpc");
    z(this, "_chain");
    z(this, "_keypair");
    z(this, "_debug");
    z(this, "_priorityFee");
    z(this, "_maxResubmits");
    z(this, "_sendOpts");
    this._rpc = e, this._chain = t, this._keypair = n, this._debug = s, this._priorityFee = r, this._maxResubmits = o, this._sendOpts = a, this._sendOpts = this._sendOpts ?? {
      preflightCommitment: this._rpc.commitment
    };
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._keypair.publicKey.toBase58();
  }
  // Handles retrying a Transaction if the error is deemed to be
  // recoverable. Currently handles:
  // - Transaction expired
  // - Blockhash not found
  // - Not enough bytes (storage account not seen yet)
  retryable(e) {
    var n;
    if (e instanceof st)
      return !0;
    if (!(e instanceof Je) || !e.message.includes("Transaction simulation failed"))
      return !1;
    if (e.message.includes("Blockhash not found"))
      return !0;
    const t = (n = e.logs) == null ? void 0 : n.find((s) => s.startsWith("Program log: Error: "));
    return t ? !!(t.includes("Not enough bytes") || t.includes("Unexpected length of input")) : !1;
  }
  async signAndSend(e) {
    var a;
    let { blockhash: t, lastValidBlockHeight: n } = await he.latestBlock(this._rpc);
    const s = [];
    for (const c of e) {
      const { description: l, transaction: { transaction: h, signers: k } } = c;
      this._debug && console.log(`Signing: ${l} for ${this.address()}`);
      let R;
      (a = this._priorityFee) != null && a.percentile && this._priorityFee.percentile > 0 && (R = await Ir(this._rpc, h, this._priorityFee.percentile, this._priorityFee.percentileMultiple, this._priorityFee.min, this._priorityFee.max)), this._debug && Ar(h);
      for (let b = 0; b < this._maxResubmits; b++)
        try {
          if (We(h)) {
            if (R) {
              const f = rt.decompile(h.message);
              f.instructions.push(...R), h.message = f.compileToV0Message();
            }
            h.message.recentBlockhash = t, h.sign([this._keypair, ...k ?? []]);
          } else
            R && h.add(...R), h.recentBlockhash = t, h.partialSign(this._keypair, ...k ?? []);
          this._debug && console.log("Submitting transactions ");
          const m = await this._rpc.sendRawTransaction(h.serialize(), this._sendOpts);
          s.push(m);
          break;
        } catch (m) {
          if (b === this._maxResubmits - 1 || !this.retryable(m))
            throw m;
          this._debug && console.log(`Failed to send transaction on attempt ${b}, retrying: `, m);
          const { blockhash: f, lastValidBlockHeight: S } = await he.latestBlock(this._rpc);
          n = S, t = f;
        }
    }
    this._debug && console.log("Waiting for confirmation for: ", s);
    const o = (await Promise.all(s.map(async (c) => {
      try {
        return await this._rpc.confirmTransaction({
          signature: c,
          blockhash: t,
          lastValidBlockHeight: n
        }, this._rpc.commitment);
      } catch (l) {
        throw console.error("Failed to confirm transaction: ", l), l;
      }
    }))).filter((c) => c.value.err).map((c) => c.value.err);
    if (o.length > 0)
      throw new Error(`Failed to confirm transaction: ${o}`);
    return s;
  }
}
function Ar(i) {
  if (We(i)) {
    console.log(i.signatures);
    const e = i.message, t = e.getAccountKeys();
    e.compiledInstructions.forEach((n) => {
      console.log("Program", t.get(n.programIdIndex).toBase58()), console.log("Data: ", je.encode(n.data)), console.log("Keys: ", n.accountKeyIndexes.map((s) => [s, t.get(s).toBase58()]));
    });
  } else
    console.log(i.signatures), console.log(i.feePayer), i.instructions.forEach((e) => {
      console.log("Program", e.programId.toBase58()), console.log("Data: ", e.data.toString("hex")), console.log("Keys: ", e.keys.map((t) => [t, t.pubkey.toBase58()]));
    });
}
async function Ir(i, e, t = $t, n = jt, s = Vt, r = Jt) {
  const [o, a] = await Promise.all([
    Rr(i, e),
    Br(i, e, t, n, s, r)
  ]);
  return [
    Qe.setComputeUnitLimit({
      units: o
    }),
    Qe.setComputeUnitPrice({
      microLamports: a
    })
  ];
}
async function Rr(i, e) {
  var n;
  let t = kr;
  try {
    const s = await (We(e), i.simulateTransaction(e));
    s.value.err && console.error(`Error simulating Solana transaction: ${s.value.err}`), (n = s == null ? void 0 : s.value) != null && n.unitsConsumed && (t = Math.round(s.value.unitsConsumed * 1.2));
  } catch (s) {
    console.error(`Failed to calculate compute unit limit for Solana transaction: ${s}`);
  }
  return t;
}
async function Br(i, e, t = $t, n = jt, s = Vt, r = Jt) {
  let o = s, a = [];
  if (We(e)) {
    const c = e.message, l = c.getAccountKeys();
    a = c.compiledInstructions.flatMap((h) => h.accountKeyIndexes).map((h) => c.isAccountWritable(h) ? l.get(h) : null).filter((h) => h !== null);
  } else
    a = e.instructions.flatMap((c) => c.keys).map((c) => c.isWritable ? c.pubkey : null).filter((c) => c !== null);
  try {
    const c = await i.getRecentPrioritizationFees({
      lockedWritableAccounts: a
    });
    if (c) {
      const l = c.map((k) => k.prioritizationFee).sort((k, R) => k - R), h = Math.ceil(l.length * t);
      if (l.length > h) {
        let k = l[h];
        n > 0 && (k *= n), o = Math.max(o, k);
      }
    }
  } catch (c) {
    console.error("Error fetching Solana recent fees", c);
  }
  return Math.min(Math.max(o, s), r);
}
const Er = {
  Address: Y,
  Platform: he,
  getSigner: Sr,
  protocols: {
    WormholeCore: () => import("./index-BYHh1T5M.mjs").then((i) => i.o),
    TokenBridge: () => import("./index-awuTq1u9.mjs"),
    CircleBridge: () => import("./index-CiZi4g2o.mjs")
  },
  getChain: (i, e, t) => new Gt(e, new he(i, pn(i, Me, { [e]: t })))
}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lr as A,
  _ as P,
  he as S,
  wr as T,
  Me as _,
  Y as a,
  Pr as b,
  Nr as s
};
