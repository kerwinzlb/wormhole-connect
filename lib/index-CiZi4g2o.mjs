var Nt = Object.defineProperty;
var Dt = (s, e, t) => e in s ? Nt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var Z = (s, e, t) => (Dt(s, typeof e != "symbol" ? e + "" : e, t), t);
import { n as b, aF as C, aG as p, aH as y, aI as U, aJ as T, aK as X, aL as ae, aM as V, aN as st, aO as j, a3 as z, aD as Ae, aE as qe, aP as he, aQ as zt, aR as Wt, aS as Lt, aT as Ut, aU as Ft, cJ as He, cH as qt, cI as Ht, cM as rt, d as se, cR as Ve, cz as at, ar as Vt, cA as je, cy as jt, cB as Ge } from "./index-DV1w5RNX.mjs";
import { r as Gt } from "./chain-tk4BDPwT.mjs";
import { a as xe, S as Jt, b as $t, _ as Xt } from "./solana-Bbeh0ipO.mjs";
import { c as it } from "./index-DpFNxVts.mjs";
class Yt extends TypeError {
  constructor(e, t) {
    let n;
    const {
      message: r,
      ...a
    } = e, {
      path: o
    } = e, d = o.length === 0 ? r : "At path: " + o.join(".") + " -- " + r;
    super(d), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => {
      var c;
      return (c = n) != null ? c : n = [e, ...t()];
    };
  }
}
function Qt(s) {
  return Y(s) && typeof s[Symbol.iterator] == "function";
}
function Y(s) {
  return typeof s == "object" && s != null;
}
function G(s) {
  return typeof s == "string" ? JSON.stringify(s) : "" + s;
}
function Zt(s) {
  const {
    done: e,
    value: t
  } = s.next();
  return e ? void 0 : t;
}
function en(s, e, t, n) {
  if (s === !0)
    return;
  s === !1 ? s = {} : typeof s == "string" && (s = {
    message: s
  });
  const {
    path: r,
    branch: a
  } = e, {
    type: o
  } = t, {
    refinement: d,
    message: c = "Expected a value of type `" + o + "`" + (d ? " with refinement `" + d + "`" : "") + ", but received: `" + G(n) + "`"
  } = s;
  return {
    value: n,
    type: o,
    refinement: d,
    key: r[r.length - 1],
    path: r,
    branch: a,
    ...s,
    message: c
  };
}
function* Je(s, e, t, n) {
  Qt(s) || (s = [s]);
  for (const r of s) {
    const a = en(r, e, t, n);
    a && (yield a);
  }
}
function* Ee(s, e, t = {}) {
  const {
    path: n = [],
    branch: r = [s],
    coerce: a = !1,
    mask: o = !1
  } = t, d = {
    path: n,
    branch: r
  };
  if (a && (s = e.coercer(s, d), o && e.type !== "type" && Y(e.schema) && Y(s) && !Array.isArray(s)))
    for (const k in s)
      e.schema[k] === void 0 && delete s[k];
  let c = !0;
  for (const k of e.validator(s, d))
    c = !1, yield [k, void 0];
  for (let [k, w, A] of e.entries(s, d)) {
    const x = Ee(w, A, {
      path: k === void 0 ? n : [...n, k],
      branch: k === void 0 ? r : [...r, w],
      coerce: a,
      mask: o
    });
    for (const B of x)
      B[0] ? (c = !1, yield [B[0], void 0]) : a && (w = B[1], k === void 0 ? s = w : s instanceof Map ? s.set(k, w) : s instanceof Set ? s.add(w) : Y(s) && (s[k] = w));
  }
  if (c)
    for (const k of e.refiner(s, d))
      c = !1, yield [k, void 0];
  c && (yield [void 0, s]);
}
let $ = class {
  constructor(e) {
    const {
      type: t,
      schema: n,
      validator: r,
      refiner: a,
      coercer: o = (c) => c,
      entries: d = function* () {
      }
    } = e;
    this.type = t, this.schema = n, this.entries = d, this.coercer = o, r ? this.validator = (c, k) => {
      const w = r(c, k);
      return Je(w, k, this, c);
    } : this.validator = () => [], a ? this.refiner = (c, k) => {
      const w = a(c, k);
      return Je(w, k, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e) {
    return tn(e, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e) {
    return ge(e, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return ot(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e) {
    return nn(e, this);
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
    return Se(e, this, t);
  }
};
function tn(s, e) {
  const t = Se(s, e);
  if (t[0])
    throw t[0];
}
function ge(s, e) {
  const t = Se(s, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function nn(s, e) {
  const t = Se(s, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function ot(s, e) {
  return !Se(s, e)[0];
}
function Se(s, e, t = {}) {
  const n = Ee(s, e, t), r = Zt(n);
  return r[0] ? [new Yt(r[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, r[1]];
}
function ee(s, e) {
  return new $({
    type: s,
    schema: null,
    validator: e
  });
}
function sn() {
  return ee("any", () => !0);
}
function f(s) {
  return new $({
    type: "array",
    schema: s,
    *entries(e) {
      if (s && Array.isArray(e))
        for (const [t, n] of e.entries())
          yield [t, n, s];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array value, but received: " + G(e);
    }
  });
}
function J() {
  return ee("boolean", (s) => typeof s == "boolean");
}
function Ce(s) {
  return ee("instance", (e) => e instanceof s || "Expected a `" + s.name + "` instance, but received: " + G(e));
}
function v(s) {
  const e = G(s), t = typeof s;
  return new $({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? s : null,
    validator(n) {
      return n === s || "Expected the literal `" + e + "`, but received: " + G(n);
    }
  });
}
function rn() {
  return ee("never", () => !1);
}
function m(s) {
  return new $({
    ...s,
    validator: (e, t) => e === null || s.validator(e, t),
    refiner: (e, t) => e === null || s.refiner(e, t)
  });
}
function i() {
  return ee("number", (s) => typeof s == "number" && !isNaN(s) || "Expected a number, but received: " + G(s));
}
function h(s) {
  return new $({
    ...s,
    validator: (e, t) => e === void 0 || s.validator(e, t),
    refiner: (e, t) => e === void 0 || s.refiner(e, t)
  });
}
function ut(s, e) {
  return new $({
    type: "record",
    schema: null,
    *entries(t) {
      if (Y(t))
        for (const n in t) {
          const r = t[n];
          yield [n, n, s], yield [n, r, e];
        }
    },
    validator(t) {
      return Y(t) || "Expected an object, but received: " + G(t);
    }
  });
}
function l() {
  return ee("string", (s) => typeof s == "string" || "Expected a string, but received: " + G(s));
}
function Oe(s) {
  const e = rn();
  return new $({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        const n = Math.max(s.length, t.length);
        for (let r = 0; r < n; r++)
          yield [r, t[r], s[r] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array, but received: " + G(t);
    }
  });
}
function u(s) {
  const e = Object.keys(s);
  return new $({
    type: "type",
    schema: s,
    *entries(t) {
      if (Y(t))
        for (const n of e)
          yield [n, t[n], s[n]];
    },
    validator(t) {
      return Y(t) || "Expected an object, but received: " + G(t);
    }
  });
}
function _(s) {
  const e = s.map((t) => t.type).join(" | ");
  return new $({
    type: "union",
    schema: null,
    validator(t, n) {
      const r = [];
      for (const a of s) {
        const [...o] = Ee(t, a, n), [d] = o;
        if (d[0])
          for (const [c] of o)
            c && r.push(c);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + G(t), ...r];
    }
  });
}
function ke() {
  return ee("unknown", () => !0);
}
function be(s, e, t) {
  return new $({
    ...s,
    coercer: (n, r) => ot(n, e) ? s.coercer(t(n, r), r) : s.coercer(n, r)
  });
}
const $e = () => {
  const s = he.utils.randomPrivateKey(), e = Be(s), t = new Uint8Array(64);
  return t.set(s), t.set(e, 32), {
    publicKey: e,
    secretKey: t
  };
}, Be = he.getPublicKey;
function Xe(s) {
  try {
    return he.ExtendedPoint.fromHex(s), !0;
  } catch {
    return !1;
  }
}
const an = (s, e) => he.sign(s, e.slice(0, 32)), on = he.verify, O = (s) => b.Buffer.isBuffer(s) ? s : s instanceof Uint8Array ? b.Buffer.from(s.buffer, s.byteOffset, s.byteLength) : b.Buffer.from(s);
class un {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return b.Buffer.from(zt(we, this));
  }
  static decode(e) {
    return Wt(we, this, e);
  }
  static decodeUnchecked(e) {
    return Lt(we, this, e);
  }
}
const we = /* @__PURE__ */ new Map();
var ct;
let lt;
const cn = 32, me = 32;
function ln(s) {
  return s._bn !== void 0;
}
let Ye = 1;
lt = Symbol.toStringTag;
class g extends un {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(e) {
    if (super({}), this._bn = void 0, ln(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = z.decode(e);
        if (t.length != me)
          throw new Error("Invalid public key input");
        this._bn = new Ae(t);
      } else
        this._bn = new Ae(e);
      if (this._bn.byteLength() > me)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const e = new g(Ye);
    return Ye += 1, new g(e.toBuffer());
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
    return z.encode(this.toBytes());
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
    const e = this._bn.toArrayLike(b.Buffer);
    if (e.length === me)
      return e;
    const t = b.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  get [lt]() {
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
    const r = b.Buffer.concat([e.toBuffer(), b.Buffer.from(t), n.toBuffer()]), a = qe(r);
    return new g(a);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(e, t) {
    let n = b.Buffer.alloc(0);
    e.forEach(function(a) {
      if (a.length > cn)
        throw new TypeError("Max seed length exceeded");
      n = b.Buffer.concat([n, O(a)]);
    }), n = b.Buffer.concat([n, t.toBuffer(), b.Buffer.from("ProgramDerivedAddress")]);
    const r = qe(n);
    if (Xe(r))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new g(r);
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
    let n = 255, r;
    for (; n != 0; ) {
      try {
        const a = e.concat(b.Buffer.from([n]));
        r = this.createProgramAddressSync(a, t);
      } catch (a) {
        if (a instanceof TypeError)
          throw a;
        n--;
        continue;
      }
      return [r, n];
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
    const t = new g(e);
    return Xe(t.toBytes());
  }
}
ct = g;
g.default = new ct("11111111111111111111111111111111");
we.set(g, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new g("BPFLoader1111111111111111111111111111111111");
const Ke = 1232, dn = 127, dt = 64;
class Qe {
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
    this.keySegments().flat().forEach((a, o) => {
      n.set(a.toBase58(), o);
    });
    const r = (a) => {
      const o = n.get(a.toBase58());
      if (o === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return o;
    };
    return e.map((a) => ({
      programIdIndex: r(a.programId),
      accountKeyIndexes: a.keys.map((o) => r(o.pubkey)),
      data: a.data
    }));
  }
}
const M = (s = "publicKey") => j(32, s), re = (s = "string") => {
  const e = p([y("length"), y("lengthPadding"), j(ae(y(), -8), "chars")], s), t = e.decode.bind(e), n = e.encode.bind(e), r = e;
  return r.decode = (a, o) => t(a, o).chars.toString(), r.encode = (a, o, d) => {
    const c = {
      chars: b.Buffer.from(a, "utf8")
    };
    return n(c, o, d);
  }, r.alloc = (a) => y().span + y().span + b.Buffer.from(a, "utf8").length, r;
}, mn = (s = "authorized") => p([M("staker"), M("withdrawer")], s), fn = (s = "lockup") => p([U("unixTimestamp"), U("epoch"), M("custodian")], s), gn = (s = "voteInit") => p([M("nodePubkey"), M("authorizedVoter"), M("authorizedWithdrawer"), T("commission")], s), pn = (s = "voteAuthorizeWithSeedArgs") => p([y("voteAuthorizationType"), M("currentAuthorityDerivedKeyOwnerPubkey"), re("currentAuthorityDerivedKeySeed"), M("newAuthorized")], s);
function mt(s, e) {
  const t = (r) => {
    if (r.span >= 0)
      return r.span;
    if (typeof r.alloc == "function")
      return r.alloc(e[r.property]);
    if ("count" in r && "elementLayout" in r) {
      const a = e[r.property];
      if (Array.isArray(a))
        return a.length * t(r.elementLayout);
    } else if ("fields" in r)
      return mt({
        layout: r
      }, e[r.property]);
    return 0;
  };
  let n = 0;
  return s.layout.fields.forEach((r) => {
    n += t(r);
  }), n;
}
function ce(s) {
  let e = 0, t = 0;
  for (; ; ) {
    let n = s.shift();
    if (e |= (n & 127) << t * 7, t += 1, !(n & 128))
      break;
  }
  return e;
}
function le(s, e) {
  let t = e;
  for (; ; ) {
    let n = t & 127;
    if (t >>= 7, t == 0) {
      s.push(n);
      break;
    } else
      n |= 128, s.push(n);
  }
}
function D(s, e) {
  if (!s)
    throw new Error(e || "Assertion failed");
}
class _e {
  constructor(e, t) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
  }
  static compile(e, t) {
    const n = /* @__PURE__ */ new Map(), r = (o) => {
      const d = o.toBase58();
      let c = n.get(d);
      return c === void 0 && (c = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(d, c)), c;
    }, a = r(t);
    a.isSigner = !0, a.isWritable = !0;
    for (const o of e) {
      r(o.programId).isInvoked = !0;
      for (const d of o.keys) {
        const c = r(d.pubkey);
        c.isSigner || (c.isSigner = d.isSigner), c.isWritable || (c.isWritable = d.isWritable);
      }
    }
    return new _e(t, n);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    D(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, c]) => c.isSigner && c.isWritable), n = e.filter(([, c]) => c.isSigner && !c.isWritable), r = e.filter(([, c]) => !c.isSigner && c.isWritable), a = e.filter(([, c]) => !c.isSigner && !c.isWritable), o = {
      numRequiredSignatures: t.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: a.length
    };
    {
      D(t.length > 0, "Expected at least one writable signer key");
      const [c] = t[0];
      D(c === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const d = [...t.map(([c]) => new g(c)), ...n.map(([c]) => new g(c)), ...r.map(([c]) => new g(c)), ...a.map(([c]) => new g(c))];
    return [o, d];
  }
  extractTableLookup(e) {
    const [t, n] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && o.isWritable), [r, a] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && !o.isWritable);
    if (!(t.length === 0 && r.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: t,
        readonlyIndexes: r
      }, {
        writable: n,
        readonly: a
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(e, t) {
    const n = new Array(), r = new Array();
    for (const [a, o] of this.keyMetaMap.entries())
      if (t(o)) {
        const d = new g(a), c = e.findIndex((k) => k.equals(d));
        c >= 0 && (D(c < 256, "Max lookup table index exceeded"), n.push(c), r.push(d), this.keyMetaMap.delete(a));
      }
    return [n, r];
  }
}
const ft = "Reached end of buffer unexpectedly";
function Me(s) {
  if (s.length === 0)
    throw new Error(ft);
  return s.shift();
}
function de(s, ...e) {
  const [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > s.length : t >= s.length)
    throw new Error(ft);
  return s.splice(...e);
}
class pe {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new g(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
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
      data: z.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new Qe(this.staticAccountKeys);
  }
  static compile(e) {
    const t = _e.compile(e.instructions, e.payerKey), [n, r] = t.getMessageComponents(), o = new Qe(r).compileInstructions(e.instructions).map((d) => ({
      programIdIndex: d.programIdIndex,
      accounts: d.accountKeyIndexes,
      data: z.encode(d.data)
    }));
    return new pe({
      header: n,
      accountKeys: r,
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
      const n = e - t, a = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return n < a;
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
    le(t, e);
    const n = this.instructions.map((A) => {
      const {
        accounts: x,
        programIdIndex: B
      } = A, N = Array.from(z.decode(A.data));
      let S = [];
      le(S, x.length);
      let I = [];
      return le(I, N.length), {
        programIdIndex: B,
        keyIndicesCount: b.Buffer.from(S),
        keyIndices: x,
        dataLength: b.Buffer.from(I),
        data: N
      };
    });
    let r = [];
    le(r, n.length);
    let a = b.Buffer.alloc(Ke);
    b.Buffer.from(r).copy(a);
    let o = r.length;
    n.forEach((A) => {
      const B = p([T("programIdIndex"), j(A.keyIndicesCount.length, "keyIndicesCount"), X(T("keyIndex"), A.keyIndices.length, "keyIndices"), j(A.dataLength.length, "dataLength"), X(T("userdatum"), A.data.length, "data")]).encode(A, a, o);
      o += B;
    }), a = a.slice(0, o);
    const d = p([j(1, "numRequiredSignatures"), j(1, "numReadonlySignedAccounts"), j(1, "numReadonlyUnsignedAccounts"), j(t.length, "keyCount"), X(M("key"), e, "keys"), M("recentBlockhash")]), c = {
      numRequiredSignatures: b.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: b.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: b.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: b.Buffer.from(t),
      keys: this.accountKeys.map((A) => O(A.toBytes())),
      recentBlockhash: z.decode(this.recentBlockhash)
    };
    let k = b.Buffer.alloc(2048);
    const w = d.encode(c, k);
    return a.copy(k, w), k.slice(0, w + a.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(e) {
    let t = [...e];
    const n = Me(t);
    if (n !== (n & dn))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const r = Me(t), a = Me(t), o = ce(t);
    let d = [];
    for (let x = 0; x < o; x++) {
      const B = de(t, 0, me);
      d.push(new g(b.Buffer.from(B)));
    }
    const c = de(t, 0, me), k = ce(t);
    let w = [];
    for (let x = 0; x < k; x++) {
      const B = Me(t), N = ce(t), S = de(t, 0, N), I = ce(t), K = de(t, 0, I), Q = z.encode(b.Buffer.from(K));
      w.push({
        programIdIndex: B,
        accounts: S,
        data: Q
      });
    }
    const A = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: r,
        numReadonlyUnsignedAccounts: a
      },
      recentBlockhash: z.encode(b.Buffer.from(c)),
      accountKeys: d,
      instructions: w
    };
    return new pe(A);
  }
}
const yn = b.Buffer.alloc(dt).fill(0);
class H {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = b.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
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
class ie {
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
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new H(t));
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
    for (let S = 0; S < t.length; S++)
      if (t[S].programId === void 0)
        throw new Error(`Transaction instruction index ${S} has undefined program id`);
    const r = [], a = [];
    t.forEach((S) => {
      S.keys.forEach((K) => {
        a.push({
          ...K
        });
      });
      const I = S.programId.toString();
      r.includes(I) || r.push(I);
    }), r.forEach((S) => {
      a.push({
        pubkey: new g(S),
        isSigner: !1,
        isWritable: !1
      });
    });
    const o = [];
    a.forEach((S) => {
      const I = S.pubkey.toString(), K = o.findIndex((Q) => Q.pubkey.toString() === I);
      K > -1 ? (o[K].isWritable = o[K].isWritable || S.isWritable, o[K].isSigner = o[K].isSigner || S.isSigner) : o.push(S);
    }), o.sort(function(S, I) {
      if (S.isSigner !== I.isSigner)
        return S.isSigner ? -1 : 1;
      if (S.isWritable !== I.isWritable)
        return S.isWritable ? -1 : 1;
      const K = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return S.pubkey.toBase58().localeCompare(I.pubkey.toBase58(), "en", K);
    });
    const d = o.findIndex((S) => S.pubkey.equals(n));
    if (d > -1) {
      const [S] = o.splice(d, 1);
      S.isSigner = !0, S.isWritable = !0, o.unshift(S);
    } else
      o.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const S of this.signatures) {
      const I = o.findIndex((K) => K.pubkey.equals(S.publicKey));
      if (I > -1)
        o[I].isSigner || (o[I].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${S.publicKey.toString()}`);
    }
    let c = 0, k = 0, w = 0;
    const A = [], x = [];
    o.forEach(({
      pubkey: S,
      isSigner: I,
      isWritable: K
    }) => {
      I ? (A.push(S.toString()), c += 1, K || (k += 1)) : (x.push(S.toString()), K || (w += 1));
    });
    const B = A.concat(x), N = t.map((S) => {
      const {
        data: I,
        programId: K
      } = S;
      return {
        programIdIndex: B.indexOf(K.toString()),
        accounts: S.keys.map((Q) => B.indexOf(Q.pubkey.toString())),
        data: z.encode(I)
      };
    });
    return N.forEach((S) => {
      D(S.programIdIndex >= 0), S.accounts.forEach((I) => D(I >= 0));
    }), new pe({
      header: {
        numRequiredSignatures: c,
        numReadonlySignedAccounts: k,
        numReadonlyUnsignedAccounts: w
      },
      accountKeys: B,
      recentBlockhash: e,
      instructions: N
    });
  }
  /**
   * @internal
   */
  _compile() {
    const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === t.length && this.signatures.every((r, a) => t[a].equals(r.publicKey)) || (this.signatures = t.map((n) => ({
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
      const r = n.toString();
      return t.has(r) ? !1 : (t.add(r), !0);
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
    for (const a of e) {
      const o = a.publicKey.toString();
      t.has(o) || (t.add(o), n.push(a));
    }
    this.signatures = n.map((a) => ({
      signature: null,
      publicKey: a.publicKey
    }));
    const r = this._compile();
    this._partialSign(r, ...n);
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
    for (const a of e) {
      const o = a.publicKey.toString();
      t.has(o) || (t.add(o), n.push(a));
    }
    const r = this._compile();
    this._partialSign(r, ...n);
  }
  /**
   * @internal
   */
  _partialSign(e, ...t) {
    const n = e.serialize();
    t.forEach((r) => {
      const a = an(n, r.secretKey);
      this._addSignature(r.publicKey, O(a));
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
    D(t.length === 64);
    const n = this.signatures.findIndex((r) => e.equals(r.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[n].signature = b.Buffer.from(t);
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
      signature: r,
      publicKey: a
    } of this.signatures)
      r === null ? t && (n.missing || (n.missing = [])).push(a) : on(r, e, a.toBytes()) || (n.invalid || (n.invalid = [])).push(a);
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
    }, e), r = this.serializeMessage();
    if (n) {
      const a = this._getMessageSignednessErrors(r, t);
      if (a) {
        let o = "Signature verification failed.";
        throw a.invalid && (o += `
Invalid signature for public key${a.invalid.length === 1 ? "" : "(s)"} [\`${a.invalid.map((d) => d.toBase58()).join("`, `")}\`].`), a.missing && (o += `
Missing signature for public key${a.missing.length === 1 ? "" : "(s)"} [\`${a.missing.map((d) => d.toBase58()).join("`, `")}\`].`), new Error(o);
      }
    }
    return this._serialize(r);
  }
  /**
   * @internal
   */
  _serialize(e) {
    const {
      signatures: t
    } = this, n = [];
    le(n, t.length);
    const r = n.length + t.length * 64 + e.length, a = b.Buffer.alloc(r);
    return D(t.length < 256), b.Buffer.from(n).copy(a, 0), t.forEach(({
      signature: o
    }, d) => {
      o !== null && (D(o.length === 64, "signature has invalid length"), b.Buffer.from(o).copy(a, n.length + d * 64));
    }), e.copy(a, n.length + t.length * 64), D(a.length <= Ke, `Transaction too large: ${a.length} > ${Ke}`), a;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return D(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return D(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return D(this.instructions.length === 1), this.instructions[0].data;
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
    const n = ce(t);
    let r = [];
    for (let a = 0; a < n; a++) {
      const o = de(t, 0, dt);
      r.push(z.encode(b.Buffer.from(o)));
    }
    return ie.populate(pe.from(t), r);
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
    const n = new ie();
    return n.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]), t.forEach((r, a) => {
      const o = {
        signature: r == z.encode(yn) ? null : z.decode(r),
        publicKey: e.accountKeys[a]
      };
      n.signatures.push(o);
    }), e.instructions.forEach((r) => {
      const a = r.accounts.map((o) => {
        const d = e.accountKeys[o];
        return {
          pubkey: d,
          isSigner: n.signatures.some((c) => c.publicKey.toString() === d.toString()) || e.isAccountSigner(o),
          isWritable: e.isAccountWritable(o)
        };
      });
      n.instructions.push(new H({
        keys: a,
        programId: e.accountKeys[r.programIdIndex],
        data: z.decode(r.data)
      }));
    }), n._message = e, n._json = n.toJSON(), n;
  }
}
new g("SysvarC1ock11111111111111111111111111111111");
new g("SysvarEpochSchedu1e111111111111111111111111");
new g("Sysvar1nstructions1111111111111111111111111");
const Te = new g("SysvarRecentB1ockHashes11111111111111111111"), Ze = new g("SysvarRent111111111111111111111111111111111");
new g("SysvarRewards111111111111111111111111111111");
new g("SysvarS1otHashes111111111111111111111111111");
new g("SysvarS1otHistory11111111111111111111111111");
new g("SysvarStakeHistory1111111111111111111111111");
function W(s, e) {
  const t = s.layout.span >= 0 ? s.layout.span : mt(s, e), n = b.Buffer.alloc(t), r = Object.assign({
    instruction: s.index
  }, e);
  return s.layout.encode(r, n), n;
}
const hn = C("lamportsPerSignature"), Sn = p([y("version"), y("state"), M("authorizedPubkey"), M("nonce"), p([hn], "feeCalculator")]), et = Sn.span, kn = (s) => {
  const e = s.decode.bind(s), t = s.encode.bind(s);
  return {
    decode: e,
    encode: t
  };
}, bn = (s) => (e) => {
  const t = j(s, e), {
    encode: n,
    decode: r
  } = kn(t), a = t;
  return a.decode = (o, d) => {
    const c = r(o, d);
    return Ut(b.Buffer.from(c));
  }, a.encode = (o, d, c) => {
    const k = Ft(o, s);
    return n(k, d, c);
  }, a;
}, oe = bn(8), L = Object.freeze({
  Create: {
    index: 0,
    layout: p([y("instruction"), U("lamports"), U("space"), M("programId")])
  },
  Assign: {
    index: 1,
    layout: p([y("instruction"), M("programId")])
  },
  Transfer: {
    index: 2,
    layout: p([y("instruction"), oe("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: p([y("instruction"), M("base"), re("seed"), U("lamports"), U("space"), M("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: p([y("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: p([y("instruction"), U("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: p([y("instruction"), M("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: p([y("instruction"), M("authorized")])
  },
  Allocate: {
    index: 8,
    layout: p([y("instruction"), U("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: p([y("instruction"), M("base"), re("seed"), U("space"), M("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: p([y("instruction"), M("base"), re("seed"), M("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: p([y("instruction"), oe("lamports"), re("seed"), M("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: p([y("instruction")])
  }
});
class ye {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the System program
   */
  /**
   * Generate a transaction instruction that creates a new account
   */
  static createAccount(e) {
    const t = L.Create, n = W(t, {
      lamports: e.lamports,
      space: e.space,
      programId: O(e.programId.toBuffer())
    });
    return new H({
      keys: [{
        pubkey: e.fromPubkey,
        isSigner: !0,
        isWritable: !0
      }, {
        pubkey: e.newAccountPubkey,
        isSigner: !0,
        isWritable: !0
      }],
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */
  static transfer(e) {
    let t, n;
    if ("basePubkey" in e) {
      const r = L.TransferWithSeed;
      t = W(r, {
        lamports: BigInt(e.lamports),
        seed: e.seed,
        programId: O(e.programId.toBuffer())
      }), n = [{
        pubkey: e.fromPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.basePubkey,
        isSigner: !0,
        isWritable: !1
      }, {
        pubkey: e.toPubkey,
        isSigner: !1,
        isWritable: !0
      }];
    } else {
      const r = L.Transfer;
      t = W(r, {
        lamports: BigInt(e.lamports)
      }), n = [{
        pubkey: e.fromPubkey,
        isSigner: !0,
        isWritable: !0
      }, {
        pubkey: e.toPubkey,
        isSigner: !1,
        isWritable: !0
      }];
    }
    return new H({
      keys: n,
      programId: this.programId,
      data: t
    });
  }
  /**
   * Generate a transaction instruction that assigns an account to a program
   */
  static assign(e) {
    let t, n;
    if ("basePubkey" in e) {
      const r = L.AssignWithSeed;
      t = W(r, {
        base: O(e.basePubkey.toBuffer()),
        seed: e.seed,
        programId: O(e.programId.toBuffer())
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.basePubkey,
        isSigner: !0,
        isWritable: !1
      }];
    } else {
      const r = L.Assign;
      t = W(r, {
        programId: O(e.programId.toBuffer())
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new H({
      keys: n,
      programId: this.programId,
      data: t
    });
  }
  /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */
  static createAccountWithSeed(e) {
    const t = L.CreateWithSeed, n = W(t, {
      base: O(e.basePubkey.toBuffer()),
      seed: e.seed,
      lamports: e.lamports,
      space: e.space,
      programId: O(e.programId.toBuffer())
    });
    let r = [{
      pubkey: e.fromPubkey,
      isSigner: !0,
      isWritable: !0
    }, {
      pubkey: e.newAccountPubkey,
      isSigner: !1,
      isWritable: !0
    }];
    return e.basePubkey != e.fromPubkey && r.push({
      pubkey: e.basePubkey,
      isSigner: !0,
      isWritable: !1
    }), new H({
      keys: r,
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction that creates a new Nonce account
   */
  static createNonceAccount(e) {
    const t = new ie();
    "basePubkey" in e && "seed" in e ? t.add(ye.createAccountWithSeed({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      basePubkey: e.basePubkey,
      seed: e.seed,
      lamports: e.lamports,
      space: et,
      programId: this.programId
    })) : t.add(ye.createAccount({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      lamports: e.lamports,
      space: et,
      programId: this.programId
    }));
    const n = {
      noncePubkey: e.noncePubkey,
      authorizedPubkey: e.authorizedPubkey
    };
    return t.add(this.nonceInitialize(n)), t;
  }
  /**
   * Generate an instruction to initialize a Nonce account
   */
  static nonceInitialize(e) {
    const t = L.InitializeNonceAccount, n = W(t, {
      authorized: O(e.authorizedPubkey.toBuffer())
    }), r = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: Te,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: Ze,
        isSigner: !1,
        isWritable: !1
      }],
      programId: this.programId,
      data: n
    };
    return new H(r);
  }
  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */
  static nonceAdvance(e) {
    const t = L.AdvanceNonceAccount, n = W(t), r = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: Te,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: e.authorizedPubkey,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: n
    };
    return new H(r);
  }
  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */
  static nonceWithdraw(e) {
    const t = L.WithdrawNonceAccount, n = W(t, {
      lamports: e.lamports
    });
    return new H({
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.toPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: Te,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: Ze,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: e.authorizedPubkey,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */
  static nonceAuthorize(e) {
    const t = L.AuthorizeNonceAccount, n = W(t, {
      authorized: O(e.newAuthorizedPubkey.toBuffer())
    });
    return new H({
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.authorizedPubkey,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction instruction that allocates space in an account without funding
   */
  static allocate(e) {
    let t, n;
    if ("basePubkey" in e) {
      const r = L.AllocateWithSeed;
      t = W(r, {
        base: O(e.basePubkey.toBuffer()),
        seed: e.seed,
        space: e.space,
        programId: O(e.programId.toBuffer())
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.basePubkey,
        isSigner: !0,
        isWritable: !1
      }];
    } else {
      const r = L.Allocate;
      t = W(r, {
        space: e.space
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new H({
      keys: n,
      programId: this.programId,
      data: t
    });
  }
}
ye.programId = new g("11111111111111111111111111111111");
new g("BPFLoader2111111111111111111111111111111111");
p([
  y("typeIndex"),
  oe("deactivationSlot"),
  C("lastExtendedSlot"),
  T("lastExtendedStartIndex"),
  T(),
  // option
  X(M(), ae(T(), -1), "authority")
]);
const R = be(Ce(g), l(), (s) => new g(s)), gt = Oe([l(), v("base64")]), Ne = be(Ce(b.Buffer), gt, (s) => b.Buffer.from(s[0], "base64"));
function pt(s) {
  return _([u({
    jsonrpc: v("2.0"),
    id: l(),
    result: s
  }), u({
    jsonrpc: v("2.0"),
    id: l(),
    error: u({
      code: ke(),
      message: l(),
      data: h(sn())
    })
  })]);
}
const Mn = pt(ke());
function P(s) {
  return be(pt(s), Mn, (e) => "error" in e ? e : {
    ...e,
    result: ge(e.result, s)
  });
}
function F(s) {
  return P(u({
    context: u({
      slot: i()
    }),
    value: s
  }));
}
function Pe(s) {
  return u({
    context: u({
      slot: i()
    }),
    value: s
  });
}
const wn = u({
  foundation: i(),
  foundationTerm: i(),
  initial: i(),
  taper: i(),
  terminal: i()
});
P(f(m(u({
  epoch: i(),
  effectiveSlot: i(),
  amount: i(),
  postBalance: i(),
  commission: h(m(i()))
}))));
const An = f(u({
  slot: i(),
  prioritizationFee: i()
})), In = u({
  total: i(),
  validator: i(),
  foundation: i(),
  epoch: i()
}), Pn = u({
  epoch: i(),
  slotIndex: i(),
  slotsInEpoch: i(),
  absoluteSlot: i(),
  blockHeight: h(i()),
  transactionCount: h(i())
}), vn = u({
  slotsPerEpoch: i(),
  leaderScheduleSlotOffset: i(),
  warmup: J(),
  firstNormalEpoch: i(),
  firstNormalSlot: i()
}), Tn = ut(l(), f(i())), te = m(_([u({}), l()])), xn = u({
  err: te
}), Bn = v("receivedSignature");
u({
  "solana-core": l(),
  "feature-set": h(i())
});
F(u({
  err: m(_([u({}), l()])),
  logs: m(f(l())),
  accounts: h(m(f(m(u({
    executable: J(),
    owner: l(),
    lamports: i(),
    data: f(l()),
    rentEpoch: h(i())
  }))))),
  unitsConsumed: h(i()),
  returnData: h(m(u({
    programId: l(),
    data: Oe([l(), v("base64")])
  })))
}));
F(u({
  byIdentity: ut(l(), f(i())),
  range: u({
    firstSlot: i(),
    lastSlot: i()
  })
}));
P(wn);
P(In);
P(An);
P(Pn);
P(vn);
P(Tn);
P(i());
F(u({
  total: i(),
  circulating: i(),
  nonCirculating: i(),
  nonCirculatingAccounts: f(R)
}));
const Kn = u({
  amount: l(),
  uiAmount: m(i()),
  decimals: i(),
  uiAmountString: h(l())
});
F(f(u({
  address: R,
  amount: l(),
  uiAmount: m(i()),
  decimals: i(),
  uiAmountString: h(l())
})));
F(f(u({
  pubkey: R,
  account: u({
    executable: J(),
    owner: R,
    lamports: i(),
    data: Ne,
    rentEpoch: i()
  })
})));
const Re = u({
  program: l(),
  parsed: ke(),
  space: i()
});
F(f(u({
  pubkey: R,
  account: u({
    executable: J(),
    owner: R,
    lamports: i(),
    data: Re,
    rentEpoch: i()
  })
})));
F(f(u({
  lamports: i(),
  address: R
})));
const De = u({
  executable: J(),
  owner: R,
  lamports: i(),
  data: Ne,
  rentEpoch: i()
});
u({
  pubkey: R,
  account: De
});
const Rn = be(_([Ce(b.Buffer), Re]), _([gt, Re]), (s) => Array.isArray(s) ? ge(s, Ne) : s), En = u({
  executable: J(),
  owner: R,
  lamports: i(),
  data: Rn,
  rentEpoch: i()
});
u({
  pubkey: R,
  account: En
});
u({
  state: _([v("active"), v("inactive"), v("activating"), v("deactivating")]),
  active: i(),
  inactive: i()
});
P(f(u({
  signature: l(),
  slot: i(),
  err: te,
  memo: m(l()),
  blockTime: h(m(i()))
})));
P(f(u({
  signature: l(),
  slot: i(),
  err: te,
  memo: m(l()),
  blockTime: h(m(i()))
})));
u({
  subscription: i(),
  result: Pe(De)
});
const Cn = u({
  pubkey: R,
  account: De
});
u({
  subscription: i(),
  result: Pe(Cn)
});
const On = u({
  parent: i(),
  slot: i(),
  root: i()
});
u({
  subscription: i(),
  result: On
});
const _n = _([u({
  type: _([v("firstShredReceived"), v("completed"), v("optimisticConfirmation"), v("root")]),
  slot: i(),
  timestamp: i()
}), u({
  type: v("createdBank"),
  parent: i(),
  slot: i(),
  timestamp: i()
}), u({
  type: v("frozen"),
  slot: i(),
  timestamp: i(),
  stats: u({
    numTransactionEntries: i(),
    numSuccessfulTransactions: i(),
    numFailedTransactions: i(),
    maxTransactionsPerEntry: i()
  })
}), u({
  type: v("dead"),
  slot: i(),
  timestamp: i(),
  err: l()
})]);
u({
  subscription: i(),
  result: _n
});
u({
  subscription: i(),
  result: Pe(_([xn, Bn]))
});
u({
  subscription: i(),
  result: i()
});
u({
  pubkey: l(),
  gossip: m(l()),
  tpu: m(l()),
  rpc: m(l()),
  version: m(l())
});
const tt = u({
  votePubkey: l(),
  nodePubkey: l(),
  activatedStake: i(),
  epochVoteAccount: J(),
  epochCredits: f(Oe([i(), i(), i()])),
  commission: i(),
  lastVote: i(),
  rootSlot: m(i())
});
P(u({
  current: f(tt),
  delinquent: f(tt)
}));
const Nn = _([v("processed"), v("confirmed"), v("finalized")]), Dn = u({
  slot: i(),
  confirmations: m(i()),
  err: te,
  confirmationStatus: h(Nn)
});
F(f(m(Dn)));
P(i());
const yt = u({
  accountKey: R,
  writableIndexes: f(i()),
  readonlyIndexes: f(i())
}), ze = u({
  signatures: f(l()),
  message: u({
    accountKeys: f(l()),
    header: u({
      numRequiredSignatures: i(),
      numReadonlySignedAccounts: i(),
      numReadonlyUnsignedAccounts: i()
    }),
    instructions: f(u({
      accounts: f(i()),
      data: l(),
      programIdIndex: i()
    })),
    recentBlockhash: l(),
    addressTableLookups: h(f(yt))
  })
}), ht = u({
  pubkey: R,
  signer: J(),
  writable: J(),
  source: h(_([v("transaction"), v("lookupTable")]))
}), St = u({
  accountKeys: f(ht),
  signatures: f(l())
}), kt = u({
  parsed: ke(),
  program: l(),
  programId: R
}), bt = u({
  accounts: f(R),
  data: l(),
  programId: R
}), zn = _([bt, kt]), Wn = _([u({
  parsed: ke(),
  program: l(),
  programId: l()
}), u({
  accounts: f(l()),
  data: l(),
  programId: l()
})]), Mt = be(zn, Wn, (s) => "accounts" in s ? ge(s, bt) : ge(s, kt)), wt = u({
  signatures: f(l()),
  message: u({
    accountKeys: f(ht),
    instructions: f(Mt),
    recentBlockhash: l(),
    addressTableLookups: h(m(f(yt)))
  })
}), Ie = u({
  accountIndex: i(),
  mint: l(),
  owner: h(l()),
  uiTokenAmount: Kn
}), At = u({
  writable: f(R),
  readonly: f(R)
}), ve = u({
  err: te,
  fee: i(),
  innerInstructions: h(m(f(u({
    index: i(),
    instructions: f(u({
      accounts: f(i()),
      data: l(),
      programIdIndex: i()
    }))
  })))),
  preBalances: f(i()),
  postBalances: f(i()),
  logMessages: h(m(f(l()))),
  preTokenBalances: h(m(f(Ie))),
  postTokenBalances: h(m(f(Ie))),
  loadedAddresses: h(At),
  computeUnitsConsumed: h(i())
}), We = u({
  err: te,
  fee: i(),
  innerInstructions: h(m(f(u({
    index: i(),
    instructions: f(Mt)
  })))),
  preBalances: f(i()),
  postBalances: f(i()),
  logMessages: h(m(f(l()))),
  preTokenBalances: h(m(f(Ie))),
  postTokenBalances: h(m(f(Ie))),
  loadedAddresses: h(At),
  computeUnitsConsumed: h(i())
}), ue = _([v(0), v("legacy")]), ne = u({
  pubkey: l(),
  lamports: i(),
  postBalance: m(i()),
  rewardType: m(l()),
  commission: h(m(i()))
});
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  transactions: f(u({
    transaction: ze,
    meta: m(ve),
    version: h(ue)
  })),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  transactions: f(u({
    transaction: St,
    meta: m(ve),
    version: h(ue)
  })),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  transactions: f(u({
    transaction: wt,
    meta: m(We),
    version: h(ue)
  })),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  transactions: f(u({
    transaction: St,
    meta: m(We),
    version: h(ue)
  })),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  rewards: h(f(ne)),
  blockTime: m(i()),
  blockHeight: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  transactions: f(u({
    transaction: ze,
    meta: m(ve)
  })),
  rewards: h(f(ne)),
  blockTime: m(i())
})));
P(m(u({
  blockhash: l(),
  previousBlockhash: l(),
  parentSlot: i(),
  signatures: f(l()),
  blockTime: m(i())
})));
P(m(u({
  slot: i(),
  meta: m(ve),
  blockTime: h(m(i())),
  transaction: ze,
  version: h(ue)
})));
P(m(u({
  slot: i(),
  transaction: wt,
  meta: m(We),
  blockTime: h(m(i())),
  version: h(ue)
})));
F(u({
  blockhash: l(),
  feeCalculator: u({
    lamportsPerSignature: i()
  })
}));
F(u({
  blockhash: l(),
  lastValidBlockHeight: i()
}));
F(J());
const Ln = u({
  slot: i(),
  numTransactions: i(),
  numSlots: i(),
  samplePeriodSecs: i()
});
P(f(Ln));
F(m(u({
  feeCalculator: u({
    lamportsPerSignature: i()
  })
})));
P(l());
P(l());
const Un = u({
  err: te,
  logs: f(l()),
  signature: l()
});
u({
  result: Pe(Un),
  subscription: i()
});
class fe {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param {Ed25519Keypair} keypair ed25519 keypair
   */
  constructor(e) {
    this._keypair = void 0, this._keypair = e ?? $e();
  }
  /**
   * Generate a new random keypair
   *
   * @returns {Keypair} Keypair
   */
  static generate() {
    return new fe($e());
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
      const r = e.slice(0, 32), a = Be(r);
      for (let o = 0; o < 32; o++)
        if (n[o] !== a[o])
          throw new Error("provided secretKey is invalid");
    }
    return new fe({
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
    const t = Be(e), n = new Uint8Array(64);
    return n.set(e), n.set(t, 32), new fe({
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
    return new g(this._keypair.publicKey);
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
    layout: p([y("instruction"), oe("recentSlot"), T("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: p([y("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: p([y("instruction"), oe(), X(M(), ae(y(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: p([y("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: p([y("instruction")])
  }
});
new g("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: p([T("instruction"), y("units"), y("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: p([T("instruction"), y("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: p([T("instruction"), y("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: p([T("instruction"), oe("microLamports")])
  }
});
new g("ComputeBudget111111111111111111111111111111");
p([T("numSignatures"), T("padding"), V("signatureOffset"), V("signatureInstructionIndex"), V("publicKeyOffset"), V("publicKeyInstructionIndex"), V("messageDataOffset"), V("messageDataSize"), V("messageInstructionIndex")]);
new g("Ed25519SigVerify111111111111111111111111111");
st.utils.isValidPrivateKey;
st.getPublicKey;
p([T("numSignatures"), V("signatureOffset"), T("signatureInstructionIndex"), V("ethAddressOffset"), T("ethAddressInstructionIndex"), V("messageDataOffset"), V("messageDataSize"), T("messageInstructionIndex"), j(20, "ethAddress"), j(64, "signature"), T("recoveryId")]);
new g("KeccakSecp256k11111111111111111111111111111");
var It;
new g("StakeConfig11111111111111111111111111111111");
class Pt {
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
It = Pt;
Pt.default = new It(0, 0, g.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: p([y("instruction"), mn(), fn()])
  },
  Authorize: {
    index: 1,
    layout: p([y("instruction"), M("newAuthorized"), y("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: p([y("instruction")])
  },
  Split: {
    index: 3,
    layout: p([y("instruction"), U("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: p([y("instruction"), U("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: p([y("instruction")])
  },
  Merge: {
    index: 7,
    layout: p([y("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: p([y("instruction"), M("newAuthorized"), y("stakeAuthorizationType"), re("authoritySeed"), M("authorityOwner")])
  }
});
new g("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: p([y("instruction"), gn()])
  },
  Authorize: {
    index: 1,
    layout: p([y("instruction"), M("newAuthorized"), y("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: p([y("instruction"), U("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: p([y("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: p([y("instruction"), pn()])
  }
});
new g("Vote111111111111111111111111111111111111111");
new g("Va1idator1nfo111111111111111111111111111111");
u({
  name: l(),
  website: h(l()),
  details: h(l()),
  keybaseUsername: h(l())
});
new g("Vote111111111111111111111111111111111111111");
p([
  M("nodePubkey"),
  M("authorizedWithdrawer"),
  T("commission"),
  C(),
  // votes.length
  X(p([C("slot"), y("confirmationCount")]), ae(y(), -8), "votes"),
  T("rootSlotValid"),
  C("rootSlot"),
  C(),
  // authorizedVoters.length
  X(p([C("epoch"), M("authorizedVoter")]), ae(y(), -8), "authorizedVoters"),
  p([X(p([M("authorizedPubkey"), C("epochOfLastAuthorizedSwitch"), C("targetEpoch")]), 32, "buf"), C("idx"), T("isEmpty")], "priorVoters"),
  C(),
  // epochCredits.length
  X(p([C("epoch"), C("credits"), C("prevCredits")]), ae(y(), -8), "epochCredits"),
  p([C("slot"), C("timestamp")], "lastTimestamp")
]);
const Le = new g("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
new g("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const Fn = new g("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
new g("So11111111111111111111111111111111111111112");
new g("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
class qn extends Error {
  constructor(e) {
    super(e);
  }
}
class Hn extends qn {
  constructor() {
    super(...arguments), this.name = "TokenOwnerOffCurveError";
  }
}
const Vn = p([
  y("mintAuthorityOption"),
  He("mintAuthority"),
  qt("supply"),
  T("decimals"),
  Ht("isInitialized"),
  y("freezeAuthorityOption"),
  He("freezeAuthority")
]);
Vn.span;
function jn(s, e, t = !1, n = Le, r = Fn) {
  if (!t && !g.isOnCurve(e.toBuffer()))
    throw new Hn();
  const [a] = g.findProgramAddressSync([e.toBuffer(), n.toBuffer(), s.toBuffer()], r);
  return a;
}
function vt(s, e) {
  return new rt(Kt.TokenMessengerIdl, new g(s), e === void 0 ? { connection: null } : e);
}
function Gn(s, e) {
  return vt(s, it(e));
}
function Tt(s, e) {
  return new rt(Kt.MessageTransmitterIdl, new g(s), e === void 0 ? { connection: null } : e);
}
function Jn(s, e) {
  return Tt(s, it(e));
}
const E = (s, e, t) => {
  const n = [se.Buffer.from(Ve.bytes.utf8.encode(s))];
  if (t)
    for (const a of t)
      typeof a == "string" ? n.push(se.Buffer.from(Ve.bytes.utf8.encode(a))) : Array.isArray(a) ? n.push(se.Buffer.from(a)) : se.Buffer.isBuffer(a) ? n.push(a) : n.push(a.toBuffer());
  const r = g.findProgramAddressSync(n, e);
  return { publicKey: r[0], bump: r[1] };
};
function $n(s, e, t, n, r, a, o, d, c) {
  const k = E("message_transmitter", s), w = E("token_messenger", e), A = E("token_minter", e), x = E("local_token", e, [t]), B = E("remote_token_messenger", e, [n.toString()]), N = E("sender_authority", e), S = vt(e), I = E("__event_authority", e);
  return S.methods.depositForBurn({
    amount: new Ae(d.toString()),
    destinationDomain: n,
    mintRecipient: new g(o.toUint8Array())
  }).accounts({
    owner: r,
    senderAuthorityPda: N.publicKey,
    burnTokenAccount: a,
    messageTransmitter: k.publicKey,
    tokenMessenger: w.publicKey,
    remoteTokenMessenger: B.publicKey,
    tokenMinter: A.publicKey,
    localToken: x.publicKey,
    burnTokenMint: t,
    messageTransmitterProgram: s,
    tokenMessengerMinterProgram: e,
    tokenProgram: Le,
    eventAuthority: I.publicKey,
    eventRentPayer: r,
    messageSentEventData: c
  }).instruction();
}
const nt = 6400n;
function xt(s) {
  return (s - BigInt(1)) / nt * nt + BigInt(1);
}
function Bt(s, e, t) {
  const n = e.toString();
  return E("used_nonces", t, [n, xt(s).toString()]).publicKey;
}
async function Xn(s, e, t, n, r, a) {
  const o = se.Buffer.from(at.serialize(n)), d = se.Buffer.from(Vt.decode(r)), c = new g(t), k = new g(n.payload.burnToken.toUint8Array()), w = new xe(n.payload.mintRecipient).unwrap(), A = a ? new g(a) : w, x = n.sourceDomain.toString(), B = E("message_transmitter", s), N = E("token_messenger", e), S = E("token_minter", e), I = E("local_token", e, [c]), K = E("remote_token_messenger", e, [x]), Q = E("token_pair", e, [
    x,
    k
  ]), Rt = E("custody", e, [c]), Et = E("message_transmitter_authority", s, [e]).publicKey, Ct = Bt(n.nonce, n.sourceDomain, s), Ot = E("__event_authority", s), _t = E("__event_authority", e), q = [];
  q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: N.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: K.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !0,
    pubkey: S.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !0,
    pubkey: I.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: Q.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !0,
    pubkey: w
  }), q.push({
    isSigner: !1,
    isWritable: !0,
    pubkey: Rt.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: Le
  }), q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: _t.publicKey
  }), q.push({
    isSigner: !1,
    isWritable: !1,
    pubkey: e
  });
  const Fe = Tt(s);
  return Fe.methods.receiveMessage({
    message: o,
    attestation: d
  }).accounts({
    payer: A,
    caller: A,
    authorityPda: Et,
    messageTransmitter: B.publicKey,
    usedNonces: Ct,
    receiver: e,
    systemProgram: ye.programId,
    eventAuthority: Ot.publicKey,
    program: Fe.programId
  }).remainingAccounts(q).transaction();
}
class Ue {
  constructor(e, t, n, r) {
    Z(this, "network");
    Z(this, "chain");
    Z(this, "connection");
    Z(this, "contracts");
    Z(this, "tokenMessenger");
    Z(this, "messageTransmitter");
    var d, c;
    if (this.network = e, this.chain = t, this.connection = n, this.contracts = r, e === "Devnet")
      throw new Error("CircleBridge not supported on Devnet");
    const a = (d = r.cctp) == null ? void 0 : d.messageTransmitter;
    if (!a)
      throw new Error(`Circle Messenge Transmitter contract for domain ${t} not found`);
    this.messageTransmitter = Jn(new g(a), this.connection);
    const o = (c = r.cctp) == null ? void 0 : c.tokenMessenger;
    if (!o)
      throw new Error(`Circle Token Messenger contract for domain ${t} not found`);
    this.tokenMessenger = Gn(new g(o), this.connection);
  }
  static async fromRpc(e, t) {
    const [n, r] = await Jt.chainFromRpc(e), a = t[r];
    if (a.network !== n)
      throw new Error(`Network mismatch: ${a.network} != ${n}`);
    return new Ue(n, r, e, a.contracts);
  }
  async *redeem(e, t, n) {
    const r = new g(je.get(this.network, this.chain)), a = new xe(e).unwrap(), o = await Xn(this.messageTransmitter.programId, this.tokenMessenger.programId, r, t, n, a), d = new ie();
    d.feePayer = a, d.add(o), yield this.createUnsignedTx({ transaction: d }, "CircleBridge.Redeem");
  }
  async *transfer(e, t, n) {
    const r = new g(je.get(this.network, this.chain)), a = new xe(e).unwrap(), o = jn(r, a), d = jt.get(this.network, t.chain), c = t.address.toUniversalAddress(), k = fe.generate(), w = await $n(this.messageTransmitter.programId, this.tokenMessenger.programId, r, d, a, o, c, n, k.publicKey), A = new ie();
    A.feePayer = a, A.add(w), yield this.createUnsignedTx({ transaction: A, signers: [k] }, "CircleBridge.Transfer");
  }
  async isTransferCompleted(e) {
    const t = Bt(e.nonce, e.sourceDomain, this.messageTransmitter.programId), n = xt(e.nonce), { usedNonces: r } = await this.messageTransmitter.account.usedNonces.fetch(t), a = Number(e.nonce - n), o = r[Math.floor(a / 64)];
    if (!o)
      throw new Error("Invalid nonce byte index");
    const d = a % 64, c = new Ae((BigInt(1) << BigInt(d)).toString());
    return !o.and(c).isZero();
  }
  // Fetch the transaction logs and parse the CircleTransferMessage
  async parseTransactionDetails(e) {
    const t = await this.connection.getTransaction(e);
    if (!t || !t.meta)
      throw new Error("Transaction not found");
    const n = t.transaction.message.getAccountKeys();
    if (n.length < 2)
      throw new Error("No message account found");
    const r = n.get(1), a = await this.connection.getAccountInfo(r);
    if (!a)
      throw new Error("No account data found");
    const o = new Uint8Array(a.data).slice(44), [d, c] = at.deserialize(o), { payload: k } = d, w = k.messageSender, A = k.mintRecipient, x = Ge(this.network, d.sourceDomain), B = Ge(this.network, d.destinationDomain), N = { chain: x, address: k.burnToken };
    return {
      from: { chain: x, address: w },
      to: { chain: B, address: A },
      token: N,
      amount: k.amount,
      message: d,
      id: { hash: c }
    };
  }
  createUnsignedTx(e, t, n = !1) {
    return new $t(e, this.network, this.chain, t, n);
  }
}
const Yn = {
  version: "0.1.0",
  name: "token_messenger_minter",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "upgradeAuthority",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "authorityPda",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMessenger",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenMessengerMinterProgramData",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMessengerMinterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "InitializeParams"
          }
        }
      ]
    },
    {
      name: "transferOwnership",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TransferOwnershipParams"
          }
        }
      ]
    },
    {
      name: "acceptOwnership",
      accounts: [
        {
          name: "pendingOwner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AcceptOwnershipParams"
          }
        }
      ]
    },
    {
      name: "addRemoteTokenMessenger",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "remoteTokenMessenger",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AddRemoteTokenMessengerParams"
          }
        }
      ]
    },
    {
      name: "removeRemoteTokenMessenger",
      accounts: [
        {
          name: "payee",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "remoteTokenMessenger",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "RemoveRemoteTokenMessengerParams"
          }
        }
      ]
    },
    {
      name: "depositForBurn",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "burnTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "remoteTokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "burnTokenMint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "messageTransmitterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMessengerMinterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "DepositForBurnParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "depositForBurnWithCaller",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "burnTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "remoteTokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "burnTokenMint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "messageTransmitterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMessengerMinterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "DepositForBurnWithCallerParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "replaceDepositForBurn",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "messageTransmitterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMessengerMinterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReplaceDepositForBurnParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "handleReceiveMessage",
      accounts: [
        {
          name: "authorityPda",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "remoteTokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenPair",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "recipientTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custodyTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "HandleReceiveMessageParams"
          }
        }
      ]
    },
    {
      name: "setTokenController",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SetTokenControllerParams"
          }
        }
      ]
    },
    {
      name: "pause",
      accounts: [
        {
          name: "pauser",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "PauseParams"
          }
        }
      ]
    },
    {
      name: "unpause",
      accounts: [
        {
          name: "pauser",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UnpauseParams"
          }
        }
      ]
    },
    {
      name: "updatePauser",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMessenger",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenMinter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UpdatePauserParams"
          }
        }
      ]
    },
    {
      name: "setMaxBurnAmountPerMessage",
      accounts: [
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SetMaxBurnAmountPerMessageParams"
          }
        }
      ]
    },
    {
      name: "addLocalToken",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custodyTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "localTokenMint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AddLocalTokenParams"
          }
        }
      ]
    },
    {
      name: "removeLocalToken",
      accounts: [
        {
          name: "payee",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custodyTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "RemoveLocalTokenParams"
          }
        }
      ]
    },
    {
      name: "linkTokenPair",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenPair",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "LinkTokenPairParams"
          }
        }
      ]
    },
    {
      name: "unlinkTokenPair",
      accounts: [
        {
          name: "payee",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenPair",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UninkTokenPairParams"
          }
        }
      ]
    },
    {
      name: "burnTokenCustody",
      accounts: [
        {
          name: "payee",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "tokenController",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "tokenMinter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "localToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "custodyTokenAccount",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custodyTokenMint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "BurnTokenCustodyParams"
          }
        }
      ]
    }
  ],
  accounts: [
    {
      name: "tokenMessenger",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey"
          },
          {
            name: "pendingOwner",
            type: "publicKey"
          },
          {
            name: "localMessageTransmitter",
            type: "publicKey"
          },
          {
            name: "messageBodyVersion",
            type: "u32"
          },
          {
            name: "authorityBump",
            type: "u8"
          }
        ]
      }
    },
    {
      name: "remoteTokenMessenger",
      type: {
        kind: "struct",
        fields: [
          {
            name: "domain",
            type: "u32"
          },
          {
            name: "tokenMessenger",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "tokenMinter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenController",
            type: "publicKey"
          },
          {
            name: "pauser",
            type: "publicKey"
          },
          {
            name: "paused",
            type: "bool"
          },
          {
            name: "bump",
            type: "u8"
          }
        ]
      }
    },
    {
      name: "tokenPair",
      type: {
        kind: "struct",
        fields: [
          {
            name: "remoteDomain",
            type: "u32"
          },
          {
            name: "remoteToken",
            type: "publicKey"
          },
          {
            name: "localToken",
            type: "publicKey"
          },
          {
            name: "bump",
            type: "u8"
          }
        ]
      }
    },
    {
      name: "localToken",
      type: {
        kind: "struct",
        fields: [
          {
            name: "custody",
            type: "publicKey"
          },
          {
            name: "mint",
            type: "publicKey"
          },
          {
            name: "burnLimitPerMessage",
            type: "u64"
          },
          {
            name: "messagesSent",
            type: "u64"
          },
          {
            name: "messagesReceived",
            type: "u64"
          },
          {
            name: "amountSent",
            type: "u128"
          },
          {
            name: "amountReceived",
            type: "u128"
          },
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "custodyBump",
            type: "u8"
          }
        ]
      }
    }
  ],
  types: [
    {
      name: "AcceptOwnershipParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "AddRemoteTokenMessengerParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "domain",
            type: "u32"
          },
          {
            name: "tokenMessenger",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "DepositForBurnWithCallerParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64"
          },
          {
            name: "destinationDomain",
            type: "u32"
          },
          {
            name: "mintRecipient",
            type: "publicKey"
          },
          {
            name: "destinationCaller",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "DepositForBurnParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64"
          },
          {
            name: "destinationDomain",
            type: "u32"
          },
          {
            name: "mintRecipient",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "HandleReceiveMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "remoteDomain",
            type: "u32"
          },
          {
            name: "sender",
            type: "publicKey"
          },
          {
            name: "messageBody",
            type: "bytes"
          },
          {
            name: "authorityBump",
            type: "u8"
          }
        ]
      }
    },
    {
      name: "InitializeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenController",
            type: "publicKey"
          },
          {
            name: "localMessageTransmitter",
            type: "publicKey"
          },
          {
            name: "messageBodyVersion",
            type: "u32"
          }
        ]
      }
    },
    {
      name: "RemoveRemoteTokenMessengerParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "ReplaceDepositForBurnParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "originalMessage",
            type: "bytes"
          },
          {
            name: "originalAttestation",
            type: "bytes"
          },
          {
            name: "newDestinationCaller",
            type: "publicKey"
          },
          {
            name: "newMintRecipient",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "TransferOwnershipParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newOwner",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "AddLocalTokenParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "BurnTokenCustodyParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "LinkTokenPairParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "localToken",
            type: "publicKey"
          },
          {
            name: "remoteDomain",
            type: "u32"
          },
          {
            name: "remoteToken",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "PauseParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "RemoveLocalTokenParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "SetMaxBurnAmountPerMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "burnLimitPerMessage",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "SetTokenControllerParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenController",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "UninkTokenPairParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "UnpauseParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "UpdatePauserParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newPauser",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "TokenMinterError",
      type: {
        kind: "enum",
        variants: [
          {
            name: "InvalidAuthority"
          },
          {
            name: "InvalidTokenMinterState"
          },
          {
            name: "ProgramPaused"
          },
          {
            name: "InvalidTokenPairState"
          },
          {
            name: "InvalidLocalTokenState"
          },
          {
            name: "InvalidPauser"
          },
          {
            name: "InvalidTokenController"
          },
          {
            name: "BurnAmountExceeded"
          },
          {
            name: "InvalidAmount"
          }
        ]
      }
    }
  ],
  events: [
    {
      name: "OwnershipTransferStarted",
      fields: [
        {
          name: "previousOwner",
          type: "publicKey",
          index: !1
        },
        {
          name: "newOwner",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "OwnershipTransferred",
      fields: [
        {
          name: "previousOwner",
          type: "publicKey",
          index: !1
        },
        {
          name: "newOwner",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "DepositForBurn",
      fields: [
        {
          name: "nonce",
          type: "u64",
          index: !1
        },
        {
          name: "burnToken",
          type: "publicKey",
          index: !1
        },
        {
          name: "amount",
          type: "u64",
          index: !1
        },
        {
          name: "depositor",
          type: "publicKey",
          index: !1
        },
        {
          name: "mintRecipient",
          type: "publicKey",
          index: !1
        },
        {
          name: "destinationDomain",
          type: "u32",
          index: !1
        },
        {
          name: "destinationTokenMessenger",
          type: "publicKey",
          index: !1
        },
        {
          name: "destinationCaller",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "MintAndWithdraw",
      fields: [
        {
          name: "mintRecipient",
          type: "publicKey",
          index: !1
        },
        {
          name: "amount",
          type: "u64",
          index: !1
        },
        {
          name: "mintToken",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "RemoteTokenMessengerAdded",
      fields: [
        {
          name: "domain",
          type: "u32",
          index: !1
        },
        {
          name: "tokenMessenger",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "RemoteTokenMessengerRemoved",
      fields: [
        {
          name: "domain",
          type: "u32",
          index: !1
        },
        {
          name: "tokenMessenger",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "SetTokenController",
      fields: [
        {
          name: "tokenController",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "PauserChanged",
      fields: [
        {
          name: "newAddress",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "SetBurnLimitPerMessage",
      fields: [
        {
          name: "token",
          type: "publicKey",
          index: !1
        },
        {
          name: "burnLimitPerMessage",
          type: "u64",
          index: !1
        }
      ]
    },
    {
      name: "LocalTokenAdded",
      fields: [
        {
          name: "custody",
          type: "publicKey",
          index: !1
        },
        {
          name: "mint",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "LocalTokenRemoved",
      fields: [
        {
          name: "custody",
          type: "publicKey",
          index: !1
        },
        {
          name: "mint",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "TokenPairLinked",
      fields: [
        {
          name: "localToken",
          type: "publicKey",
          index: !1
        },
        {
          name: "remoteDomain",
          type: "u32",
          index: !1
        },
        {
          name: "remoteToken",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "TokenPairUnlinked",
      fields: [
        {
          name: "localToken",
          type: "publicKey",
          index: !1
        },
        {
          name: "remoteDomain",
          type: "u32",
          index: !1
        },
        {
          name: "remoteToken",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "Pause",
      fields: []
    },
    {
      name: "Unpause",
      fields: []
    },
    {
      name: "TokenCustodyBurned",
      fields: [
        {
          name: "custodyTokenAccount",
          type: "publicKey",
          index: !1
        },
        {
          name: "amount",
          type: "u64",
          index: !1
        }
      ]
    }
  ],
  errors: [
    {
      code: 6e3,
      name: "InvalidAuthority",
      msg: "Invalid authority"
    },
    {
      code: 6001,
      name: "InvalidTokenMessengerState",
      msg: "Invalid token messenger state"
    },
    {
      code: 6002,
      name: "InvalidTokenMessenger",
      msg: "Invalid token messenger"
    },
    {
      code: 6003,
      name: "InvalidOwner",
      msg: "Invalid owner"
    },
    {
      code: 6004,
      name: "MalformedMessage",
      msg: "Malformed message"
    },
    {
      code: 6005,
      name: "InvalidMessageBodyVersion",
      msg: "Invalid message body version"
    },
    {
      code: 6006,
      name: "InvalidAmount",
      msg: "Invalid amount"
    },
    {
      code: 6007,
      name: "InvalidDestinationDomain",
      msg: "Invalid destination domain"
    },
    {
      code: 6008,
      name: "InvalidDestinationCaller",
      msg: "Invalid destination caller"
    },
    {
      code: 6009,
      name: "InvalidMintRecipient",
      msg: "Invalid mint recipient"
    },
    {
      code: 6010,
      name: "InvalidSender",
      msg: "Invalid sender"
    },
    {
      code: 6011,
      name: "InvalidTokenPair",
      msg: "Invalid token pair"
    },
    {
      code: 6012,
      name: "InvalidTokenMint",
      msg: "Invalid token mint"
    }
  ]
}, Qn = {
  version: "0.1.0",
  name: "message_transmitter",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "upgradeAuthority",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageTransmitterProgramData",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "messageTransmitterProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "InitializeParams"
          }
        }
      ]
    },
    {
      name: "transferOwnership",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "TransferOwnershipParams"
          }
        }
      ]
    },
    {
      name: "acceptOwnership",
      accounts: [
        {
          name: "pendingOwner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AcceptOwnershipParams"
          }
        }
      ]
    },
    {
      name: "updatePauser",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UpdatePauserParams"
          }
        }
      ]
    },
    {
      name: "updateAttesterManager",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UpdateAttesterManagerParams"
          }
        }
      ]
    },
    {
      name: "pause",
      accounts: [
        {
          name: "pauser",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "PauseParams"
          }
        }
      ]
    },
    {
      name: "unpause",
      accounts: [
        {
          name: "pauser",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "UnpauseParams"
          }
        }
      ]
    },
    {
      name: "setMaxMessageBodySize",
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SetMaxMessageBodySizeParams"
          }
        }
      ]
    },
    {
      name: "enableAttester",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "attesterManager",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "EnableAttesterParams"
          }
        }
      ]
    },
    {
      name: "disableAttester",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "attesterManager",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "DisableAttesterParams"
          }
        }
      ]
    },
    {
      name: "setSignatureThreshold",
      accounts: [
        {
          name: "attesterManager",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SetSignatureThresholdParams"
          }
        }
      ]
    },
    {
      name: "sendMessage",
      accounts: [
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SendMessageParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "sendMessageWithCaller",
      accounts: [
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SendMessageWithCallerParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "replaceMessage",
      accounts: [
        {
          name: "eventRentPayer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderAuthorityPda",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "senderProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReplaceMessageParams"
          }
        }
      ],
      returns: "u64"
    },
    {
      name: "receiveMessage",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "caller",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "authorityPda",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "messageTransmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "usedNonces",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "receiver",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "eventAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "program",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReceiveMessageParams"
          }
        }
      ]
    },
    {
      name: "reclaimEventAccount",
      accounts: [
        {
          name: "payee",
          isMut: !0,
          isSigner: !0,
          docs: ["rent SOL receiver, should match original rent payer"]
        },
        {
          name: "messageTransmitter",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "messageSentEventData",
          isMut: !0,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ReclaimEventAccountParams"
          }
        }
      ]
    },
    {
      name: "getNoncePda",
      accounts: [
        {
          name: "messageTransmitter",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "GetNoncePDAParams"
          }
        }
      ],
      returns: "publicKey"
    },
    {
      name: "isNonceUsed",
      accounts: [
        {
          name: "usedNonces",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Account will be explicitly loaded to avoid error when it's not initialized"
          ]
        }
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "IsNonceUsedParams"
          }
        }
      ],
      returns: "bool"
    }
  ],
  accounts: [
    {
      name: "messageSent",
      type: {
        kind: "struct",
        fields: [
          {
            name: "rentPayer",
            type: "publicKey"
          },
          {
            name: "message",
            type: "bytes"
          }
        ]
      }
    },
    {
      name: "messageTransmitter",
      docs: ["Main state of the MessageTransmitter program"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey"
          },
          {
            name: "pendingOwner",
            type: "publicKey"
          },
          {
            name: "attesterManager",
            type: "publicKey"
          },
          {
            name: "pauser",
            type: "publicKey"
          },
          {
            name: "paused",
            type: "bool"
          },
          {
            name: "localDomain",
            type: "u32"
          },
          {
            name: "version",
            type: "u32"
          },
          {
            name: "signatureThreshold",
            type: "u32"
          },
          {
            name: "enabledAttesters",
            type: {
              vec: "publicKey"
            }
          },
          {
            name: "maxMessageBodySize",
            type: "u64"
          },
          {
            name: "nextAvailableNonce",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "usedNonces",
      docs: [
        "UsedNonces account holds an array of bits that indicate which nonces were already used",
        "so they can't be resused to receive new messages. Array starts with the first_nonce and",
        "holds flags for UsedNonces::MAX_NONCES. Nonces are recorded separately for each remote_domain."
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "remoteDomain",
            type: "u32"
          },
          {
            name: "firstNonce",
            type: "u64"
          },
          {
            name: "usedNonces",
            type: {
              array: ["u64", 100]
            }
          }
        ]
      }
    }
  ],
  types: [
    {
      name: "AcceptOwnershipParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "DisableAttesterParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "attester",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "EnableAttesterParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newAttester",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "GetNoncePDAParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nonce",
            type: "u64"
          },
          {
            name: "sourceDomain",
            type: "u32"
          }
        ]
      }
    },
    {
      name: "InitializeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "localDomain",
            type: "u32"
          },
          {
            name: "attester",
            type: "publicKey"
          },
          {
            name: "maxMessageBodySize",
            type: "u64"
          },
          {
            name: "version",
            type: "u32"
          }
        ]
      }
    },
    {
      name: "IsNonceUsedParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nonce",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "PauseParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "ReceiveMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "message",
            type: "bytes"
          },
          {
            name: "attestation",
            type: "bytes"
          }
        ]
      }
    },
    {
      name: "HandleReceiveMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "remoteDomain",
            type: "u32"
          },
          {
            name: "sender",
            type: "publicKey"
          },
          {
            name: "messageBody",
            type: "bytes"
          },
          {
            name: "authorityBump",
            type: "u8"
          }
        ]
      }
    },
    {
      name: "ReclaimEventAccountParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "attestation",
            type: "bytes"
          }
        ]
      }
    },
    {
      name: "ReplaceMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "originalMessage",
            type: "bytes"
          },
          {
            name: "originalAttestation",
            type: "bytes"
          },
          {
            name: "newMessageBody",
            type: "bytes"
          },
          {
            name: "newDestinationCaller",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "SendMessageWithCallerParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "destinationDomain",
            type: "u32"
          },
          {
            name: "recipient",
            type: "publicKey"
          },
          {
            name: "messageBody",
            type: "bytes"
          },
          {
            name: "destinationCaller",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "SendMessageParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "destinationDomain",
            type: "u32"
          },
          {
            name: "recipient",
            type: "publicKey"
          },
          {
            name: "messageBody",
            type: "bytes"
          }
        ]
      }
    },
    {
      name: "SetMaxMessageBodySizeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newMaxMessageBodySize",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "SetSignatureThresholdParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newSignatureThreshold",
            type: "u32"
          }
        ]
      }
    },
    {
      name: "TransferOwnershipParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newOwner",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "UnpauseParams",
      type: {
        kind: "struct",
        fields: []
      }
    },
    {
      name: "UpdateAttesterManagerParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newAttesterManager",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "UpdatePauserParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newPauser",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "MathError",
      type: {
        kind: "enum",
        variants: [
          {
            name: "MathOverflow"
          },
          {
            name: "MathUnderflow"
          },
          {
            name: "ErrorInDivision"
          }
        ]
      }
    }
  ],
  events: [
    {
      name: "OwnershipTransferStarted",
      fields: [
        {
          name: "previousOwner",
          type: "publicKey",
          index: !1
        },
        {
          name: "newOwner",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "OwnershipTransferred",
      fields: [
        {
          name: "previousOwner",
          type: "publicKey",
          index: !1
        },
        {
          name: "newOwner",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "PauserChanged",
      fields: [
        {
          name: "newAddress",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "AttesterManagerUpdated",
      fields: [
        {
          name: "previousAttesterManager",
          type: "publicKey",
          index: !1
        },
        {
          name: "newAttesterManager",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "MessageReceived",
      fields: [
        {
          name: "caller",
          type: "publicKey",
          index: !1
        },
        {
          name: "sourceDomain",
          type: "u32",
          index: !1
        },
        {
          name: "nonce",
          type: "u64",
          index: !1
        },
        {
          name: "sender",
          type: "publicKey",
          index: !1
        },
        {
          name: "messageBody",
          type: "bytes",
          index: !1
        }
      ]
    },
    {
      name: "SignatureThresholdUpdated",
      fields: [
        {
          name: "oldSignatureThreshold",
          type: "u32",
          index: !1
        },
        {
          name: "newSignatureThreshold",
          type: "u32",
          index: !1
        }
      ]
    },
    {
      name: "AttesterEnabled",
      fields: [
        {
          name: "attester",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "AttesterDisabled",
      fields: [
        {
          name: "attester",
          type: "publicKey",
          index: !1
        }
      ]
    },
    {
      name: "MaxMessageBodySizeUpdated",
      fields: [
        {
          name: "newMaxMessageBodySize",
          type: "u64",
          index: !1
        }
      ]
    },
    {
      name: "Pause",
      fields: []
    },
    {
      name: "Unpause",
      fields: []
    }
  ],
  errors: [
    {
      code: 6e3,
      name: "InvalidAuthority",
      msg: "Invalid authority"
    },
    {
      code: 6001,
      name: "ProgramPaused",
      msg: "Instruction is not allowed at this time"
    },
    {
      code: 6002,
      name: "InvalidMessageTransmitterState",
      msg: "Invalid message transmitter state"
    },
    {
      code: 6003,
      name: "InvalidSignatureThreshold",
      msg: "Invalid signature threshold"
    },
    {
      code: 6004,
      name: "SignatureThresholdAlreadySet",
      msg: "Signature threshold already set"
    },
    {
      code: 6005,
      name: "InvalidOwner",
      msg: "Invalid owner"
    },
    {
      code: 6006,
      name: "InvalidPauser",
      msg: "Invalid pauser"
    },
    {
      code: 6007,
      name: "InvalidAttesterManager",
      msg: "Invalid attester manager"
    },
    {
      code: 6008,
      name: "InvalidAttester",
      msg: "Invalid attester"
    },
    {
      code: 6009,
      name: "AttesterAlreadyEnabled",
      msg: "Attester already enabled"
    },
    {
      code: 6010,
      name: "TooFewEnabledAttesters",
      msg: "Too few enabled attesters"
    },
    {
      code: 6011,
      name: "SignatureThresholdTooLow",
      msg: "Signature threshold is too low"
    },
    {
      code: 6012,
      name: "AttesterAlreadyDisabled",
      msg: "Attester already disabled"
    },
    {
      code: 6013,
      name: "MessageBodyLimitExceeded",
      msg: "Message body exceeds max size"
    },
    {
      code: 6014,
      name: "InvalidDestinationCaller",
      msg: "Invalid destination caller"
    },
    {
      code: 6015,
      name: "InvalidRecipient",
      msg: "Invalid message recipient"
    },
    {
      code: 6016,
      name: "SenderNotPermitted",
      msg: "Sender is not permitted"
    },
    {
      code: 6017,
      name: "InvalidSourceDomain",
      msg: "Invalid source domain"
    },
    {
      code: 6018,
      name: "InvalidDestinationDomain",
      msg: "Invalid destination domain"
    },
    {
      code: 6019,
      name: "InvalidMessageVersion",
      msg: "Invalid message version"
    },
    {
      code: 6020,
      name: "InvalidUsedNoncesAccount",
      msg: "Invalid used nonces account"
    },
    {
      code: 6021,
      name: "InvalidRecipientProgram",
      msg: "Invalid recipient program"
    },
    {
      code: 6022,
      name: "InvalidNonce",
      msg: "Invalid nonce"
    },
    {
      code: 6023,
      name: "NonceAlreadyUsed",
      msg: "Nonce already used"
    },
    {
      code: 6024,
      name: "MessageTooShort",
      msg: "Message is too short"
    },
    {
      code: 6025,
      name: "MalformedMessage",
      msg: "Malformed message"
    },
    {
      code: 6026,
      name: "InvalidSignatureOrderOrDupe",
      msg: "Invalid signature order or dupe"
    },
    {
      code: 6027,
      name: "InvalidAttesterSignature",
      msg: "Invalid attester signature"
    },
    {
      code: 6028,
      name: "InvalidAttestationLength",
      msg: "Invalid attestation length"
    },
    {
      code: 6029,
      name: "InvalidSignatureRecoveryId",
      msg: "Invalid signature recovery ID"
    },
    {
      code: 6030,
      name: "InvalidSignatureSValue",
      msg: "Invalid signature S value"
    },
    {
      code: 6031,
      name: "InvalidMessageHash",
      msg: "Invalid message hash"
    }
  ]
};
Gt(Xt, "CircleBridge", Ue);
const Kt = {
  TokenMessengerIdl: Yn,
  MessageTransmitterIdl: Qn
};
export {
  Ue as SolanaCircleBridge,
  Kt as idl
};
