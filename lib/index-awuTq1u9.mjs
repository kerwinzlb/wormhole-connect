var lr = Object.defineProperty;
var fr = (t, e, n) => e in t ? lr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var B = (t, e, n) => (fr(t, typeof e != "symbol" ? e + "" : e, n), n);
import { d as L, g as lt, a as hr, n as gr, b as Ce, c as mr, e as be, f as Ae, h as pr, i as yr, B as wr, j as ft, k as Sr, S as kr, l as br, m as Ar } from "./index-BYHh1T5M.mjs";
import { n as C, aF as V, aG as g, aH as S, aI as j, aJ as P, aK as fe, aL as Re, aM as ne, aN as Bn, aO as re, a3 as X, aD as O, aE as Xt, aP as Xe, aQ as Mr, aR as Tr, aS as Br, aT as Ir, aU as Cr, cH as ce, d as A, cI as ke, cJ as W, cK as Qt, cL as vr, bW as x, aA as Er, as as In, cM as Cn, cD as kt, cE as Pr, ax as xe, cj as Mt, b3 as Rr } from "./index-DV1w5RNX.mjs";
import { c as xr } from "./index-DpFNxVts.mjs";
import { S as qe, a as q, b as vn, _ as En } from "./solana-Bbeh0ipO.mjs";
import { r as Pn } from "./chain-tk4BDPwT.mjs";
class Wr extends TypeError {
  constructor(e, n) {
    let r;
    const {
      message: s,
      ...i
    } = e, {
      path: a
    } = e, o = a.length === 0 ? s : "At path: " + a.join(".") + " -- " + s;
    super(o), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
      var u;
      return (u = r) != null ? u : r = [e, ...n()];
    };
  }
}
function _r(t) {
  return ye(t) && typeof t[Symbol.iterator] == "function";
}
function ye(t) {
  return typeof t == "object" && t != null;
}
function ue(t) {
  return typeof t == "string" ? JSON.stringify(t) : "" + t;
}
function Nr(t) {
  const {
    done: e,
    value: n
  } = t.next();
  return e ? void 0 : n;
}
function Ur(t, e, n, r) {
  if (t === !0)
    return;
  t === !1 ? t = {} : typeof t == "string" && (t = {
    message: t
  });
  const {
    path: s,
    branch: i
  } = e, {
    type: a
  } = n, {
    refinement: o,
    message: u = "Expected a value of type `" + a + "`" + (o ? " with refinement `" + o + "`" : "") + ", but received: `" + ue(r) + "`"
  } = t;
  return {
    value: r,
    type: a,
    refinement: o,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...t,
    message: u
  };
}
function* en(t, e, n, r) {
  _r(t) || (t = [t]);
  for (const s of t) {
    const i = Ur(s, e, n, r);
    i && (yield i);
  }
}
function* Ct(t, e, n = {}) {
  const {
    path: r = [],
    branch: s = [t],
    coerce: i = !1,
    mask: a = !1
  } = n, o = {
    path: r,
    branch: s
  };
  if (i && (t = e.coercer(t, o), a && e.type !== "type" && ye(e.schema) && ye(t) && !Array.isArray(t)))
    for (const l in t)
      e.schema[l] === void 0 && delete t[l];
  let u = !0;
  for (const l of e.validator(t, o))
    u = !1, yield [l, void 0];
  for (let [l, y, k] of e.entries(t, o)) {
    const b = Ct(y, k, {
      path: l === void 0 ? r : [...r, l],
      branch: l === void 0 ? s : [...s, y],
      coerce: i,
      mask: a
    });
    for (const T of b)
      T[0] ? (u = !1, yield [T[0], void 0]) : i && (y = T[1], l === void 0 ? t = y : t instanceof Map ? t.set(l, y) : t instanceof Set ? t.add(y) : ye(t) && (t[l] = y));
  }
  if (u)
    for (const l of e.refiner(t, o))
      u = !1, yield [l, void 0];
  u && (yield [void 0, t]);
}
let ge = class {
  constructor(e) {
    const {
      type: n,
      schema: r,
      validator: s,
      refiner: i,
      coercer: a = (u) => u,
      entries: o = function* () {
      }
    } = e;
    this.type = n, this.schema = r, this.entries = o, this.coercer = a, s ? this.validator = (u, l) => {
      const y = s(u, l);
      return en(y, l, this, u);
    } : this.validator = () => [], i ? this.refiner = (u, l) => {
      const y = i(u, l);
      return en(y, l, this, u);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e) {
    return zr(e, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e) {
    return Je(e, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return Rn(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e) {
    return Fr(e, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, n = {}) {
    return Qe(e, this, n);
  }
};
function zr(t, e) {
  const n = Qe(t, e);
  if (n[0])
    throw n[0];
}
function Je(t, e) {
  const n = Qe(t, e, {
    coerce: !0
  });
  if (n[0])
    throw n[0];
  return n[1];
}
function Fr(t, e) {
  const n = Qe(t, e, {
    coerce: !0,
    mask: !0
  });
  if (n[0])
    throw n[0];
  return n[1];
}
function Rn(t, e) {
  return !Qe(t, e)[0];
}
function Qe(t, e, n = {}) {
  const r = Ct(t, e, n), s = Nr(r);
  return s[0] ? [new Wr(s[0], function* () {
    for (const a of r)
      a[0] && (yield a[0]);
  }), void 0] : [void 0, s[1]];
}
function Me(t, e) {
  return new ge({
    type: t,
    schema: null,
    validator: e
  });
}
function Or() {
  return Me("any", () => !0);
}
function p(t) {
  return new ge({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [n, r] of e.entries())
          yield [n, r, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array value, but received: " + ue(e);
    }
  });
}
function he() {
  return Me("boolean", (t) => typeof t == "boolean");
}
function vt(t) {
  return Me("instance", (e) => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + ue(e));
}
function N(t) {
  const e = ue(t), n = typeof t;
  return new ge({
    type: "literal",
    schema: n === "string" || n === "number" || n === "boolean" ? t : null,
    validator(r) {
      return r === t || "Expected the literal `" + e + "`, but received: " + ue(r);
    }
  });
}
function Lr() {
  return Me("never", () => !1);
}
function m(t) {
  return new ge({
    ...t,
    validator: (e, n) => e === null || t.validator(e, n),
    refiner: (e, n) => e === null || t.refiner(e, n)
  });
}
function c() {
  return Me("number", (t) => typeof t == "number" && !isNaN(t) || "Expected a number, but received: " + ue(t));
}
function M(t) {
  return new ge({
    ...t,
    validator: (e, n) => e === void 0 || t.validator(e, n),
    refiner: (e, n) => e === void 0 || t.refiner(e, n)
  });
}
function xn(t, e) {
  return new ge({
    type: "record",
    schema: null,
    *entries(n) {
      if (ye(n))
        for (const r in n) {
          const s = n[r];
          yield [r, r, t], yield [r, s, e];
        }
    },
    validator(n) {
      return ye(n) || "Expected an object, but received: " + ue(n);
    }
  });
}
function h() {
  return Me("string", (t) => typeof t == "string" || "Expected a string, but received: " + ue(t));
}
function Et(t) {
  const e = Lr();
  return new ge({
    type: "tuple",
    schema: null,
    *entries(n) {
      if (Array.isArray(n)) {
        const r = Math.max(t.length, n.length);
        for (let s = 0; s < r; s++)
          yield [s, n[s], t[s] || e];
      }
    },
    validator(n) {
      return Array.isArray(n) || "Expected an array, but received: " + ue(n);
    }
  });
}
function f(t) {
  const e = Object.keys(t);
  return new ge({
    type: "type",
    schema: t,
    *entries(n) {
      if (ye(n))
        for (const r of e)
          yield [r, n[r], t[r]];
    },
    validator(n) {
      return ye(n) || "Expected an object, but received: " + ue(n);
    }
  });
}
function Z(t) {
  const e = t.map((n) => n.type).join(" | ");
  return new ge({
    type: "union",
    schema: null,
    validator(n, r) {
      const s = [];
      for (const i of t) {
        const [...a] = Ct(n, i, r), [o] = a;
        if (o[0])
          for (const [u] of a)
            u && s.push(u);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + ue(n), ...s];
    }
  });
}
function et() {
  return Me("unknown", () => !0);
}
function tt(t, e, n) {
  return new ge({
    ...t,
    coercer: (r, s) => Rn(r, e) ? t.coercer(n(r, s), s) : t.coercer(r, s)
  });
}
const tn = () => {
  const t = Xe.utils.randomPrivateKey(), e = Tt(t), n = new Uint8Array(64);
  return n.set(t), n.set(e, 32), {
    publicKey: e,
    secretKey: n
  };
}, Tt = Xe.getPublicKey;
function nn(t) {
  try {
    return Xe.ExtendedPoint.fromHex(t), !0;
  } catch {
    return !1;
  }
}
const Kr = (t, e) => Xe.sign(t, e.slice(0, 32)), qr = Xe.verify, G = (t) => C.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? C.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : C.Buffer.from(t);
class Dr {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return C.Buffer.from(Mr(st, this));
  }
  static decode(e) {
    return Tr(st, this, e);
  }
  static decodeUnchecked(e) {
    return Br(st, this, e);
  }
}
const st = /* @__PURE__ */ new Map();
var Wn;
let _n;
const Vr = 32, Ge = 32;
function Hr(t) {
  return t._bn !== void 0;
}
let rn = 1;
_n = Symbol.toStringTag;
class d extends Dr {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(e) {
    if (super({}), this._bn = void 0, Hr(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const n = X.decode(e);
        if (n.length != Ge)
          throw new Error("Invalid public key input");
        this._bn = new O(n);
      } else
        this._bn = new O(e);
      if (this._bn.byteLength() > Ge)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const e = new d(rn);
    return rn += 1, new d(e.toBuffer());
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
    return X.encode(this.toBytes());
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
    const e = this._bn.toArrayLike(C.Buffer);
    if (e.length === Ge)
      return e;
    const n = C.Buffer.alloc(32);
    return e.copy(n, 32 - e.length), n;
  }
  get [_n]() {
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
  static async createWithSeed(e, n, r) {
    const s = C.Buffer.concat([e.toBuffer(), C.Buffer.from(n), r.toBuffer()]), i = Xt(s);
    return new d(i);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(e, n) {
    let r = C.Buffer.alloc(0);
    e.forEach(function(i) {
      if (i.length > Vr)
        throw new TypeError("Max seed length exceeded");
      r = C.Buffer.concat([r, G(i)]);
    }), r = C.Buffer.concat([r, n.toBuffer(), C.Buffer.from("ProgramDerivedAddress")]);
    const s = Xt(r);
    if (nn(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new d(s);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(e, n) {
    return this.createProgramAddressSync(e, n);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(e, n) {
    let r = 255, s;
    for (; r != 0; ) {
      try {
        const i = e.concat(C.Buffer.from([r]));
        s = this.createProgramAddressSync(i, n);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        r--;
        continue;
      }
      return [s, r];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(e, n) {
    return this.findProgramAddressSync(e, n);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(e) {
    const n = new d(e);
    return nn(n.toBytes());
  }
}
Wn = d;
d.default = new Wn("11111111111111111111111111111111");
st.set(d, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new d("BPFLoader1111111111111111111111111111111111");
const Bt = 1232, Gr = 127, Nn = 64;
class sn {
  constructor(e, n) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = n;
  }
  keySegments() {
    const e = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
  }
  get(e) {
    for (const n of this.keySegments()) {
      if (e < n.length)
        return n[e];
      e -= n.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(e) {
    if (this.length > 256)
      throw new Error("Account index overflow encountered during compilation");
    const r = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((i, a) => {
      r.set(i.toBase58(), a);
    });
    const s = (i) => {
      const a = r.get(i.toBase58());
      if (a === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return a;
    };
    return e.map((i) => ({
      programIdIndex: s(i.programId),
      accountKeyIndexes: i.keys.map((a) => s(a.pubkey)),
      data: i.data
    }));
  }
}
const E = (t = "publicKey") => re(32, t), Pe = (t = "string") => {
  const e = g([S("length"), S("lengthPadding"), re(Re(S(), -8), "chars")], t), n = e.decode.bind(e), r = e.encode.bind(e), s = e;
  return s.decode = (i, a) => n(i, a).chars.toString(), s.encode = (i, a, o) => {
    const u = {
      chars: C.Buffer.from(i, "utf8")
    };
    return r(u, a, o);
  }, s.alloc = (i) => S().span + S().span + C.Buffer.from(i, "utf8").length, s;
}, jr = (t = "authorized") => g([E("staker"), E("withdrawer")], t), Zr = (t = "lockup") => g([j("unixTimestamp"), j("epoch"), E("custodian")], t), Jr = (t = "voteInit") => g([E("nodePubkey"), E("authorizedVoter"), E("authorizedWithdrawer"), P("commission")], t), $r = (t = "voteAuthorizeWithSeedArgs") => g([S("voteAuthorizationType"), E("currentAuthorityDerivedKeyOwnerPubkey"), Pe("currentAuthorityDerivedKeySeed"), E("newAuthorized")], t);
function Un(t, e) {
  const n = (s) => {
    if (s.span >= 0)
      return s.span;
    if (typeof s.alloc == "function")
      return s.alloc(e[s.property]);
    if ("count" in s && "elementLayout" in s) {
      const i = e[s.property];
      if (Array.isArray(i))
        return i.length * n(s.elementLayout);
    } else if ("fields" in s)
      return Un({
        layout: s
      }, e[s.property]);
    return 0;
  };
  let r = 0;
  return t.layout.fields.forEach((s) => {
    r += n(s);
  }), r;
}
function De(t) {
  let e = 0, n = 0;
  for (; ; ) {
    let r = t.shift();
    if (e |= (r & 127) << n * 7, n += 1, !(r & 128))
      break;
  }
  return e;
}
function Ve(t, e) {
  let n = e;
  for (; ; ) {
    let r = n & 127;
    if (n >>= 7, n == 0) {
      t.push(r);
      break;
    } else
      r |= 128, t.push(r);
  }
}
function $(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
class Pt {
  constructor(e, n) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = n;
  }
  static compile(e, n) {
    const r = /* @__PURE__ */ new Map(), s = (a) => {
      const o = a.toBase58();
      let u = r.get(o);
      return u === void 0 && (u = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, r.set(o, u)), u;
    }, i = s(n);
    i.isSigner = !0, i.isWritable = !0;
    for (const a of e) {
      s(a.programId).isInvoked = !0;
      for (const o of a.keys) {
        const u = s(o.pubkey);
        u.isSigner || (u.isSigner = o.isSigner), u.isWritable || (u.isWritable = o.isWritable);
      }
    }
    return new Pt(n, r);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    $(e.length <= 256, "Max static account keys length exceeded");
    const n = e.filter(([, u]) => u.isSigner && u.isWritable), r = e.filter(([, u]) => u.isSigner && !u.isWritable), s = e.filter(([, u]) => !u.isSigner && u.isWritable), i = e.filter(([, u]) => !u.isSigner && !u.isWritable), a = {
      numRequiredSignatures: n.length + r.length,
      numReadonlySignedAccounts: r.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      $(n.length > 0, "Expected at least one writable signer key");
      const [u] = n[0];
      $(u === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const o = [...n.map(([u]) => new d(u)), ...r.map(([u]) => new d(u)), ...s.map(([u]) => new d(u)), ...i.map(([u]) => new d(u))];
    return [a, o];
  }
  extractTableLookup(e) {
    const [n, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && a.isWritable), [s, i] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && !a.isWritable);
    if (!(n.length === 0 && s.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: n,
        readonlyIndexes: s
      }, {
        writable: r,
        readonly: i
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(e, n) {
    const r = new Array(), s = new Array();
    for (const [i, a] of this.keyMetaMap.entries())
      if (n(a)) {
        const o = new d(i), u = e.findIndex((l) => l.equals(o));
        u >= 0 && ($(u < 256, "Max lookup table index exceeded"), r.push(u), s.push(o), this.keyMetaMap.delete(i));
      }
    return [r, s];
  }
}
const zn = "Reached end of buffer unexpectedly";
function rt(t) {
  if (t.length === 0)
    throw new Error(zn);
  return t.shift();
}
function He(t, ...e) {
  const [n] = e;
  if (e.length === 2 ? n + (e[1] ?? 0) > t.length : n >= t.length)
    throw new Error(zn);
  return t.splice(...e);
}
class $e {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((n) => new d(n)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((n) => this.indexToProgramIds.set(n.programIdIndex, this.accountKeys[n.programIdIndex]));
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
      data: X.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new sn(this.staticAccountKeys);
  }
  static compile(e) {
    const n = Pt.compile(e.instructions, e.payerKey), [r, s] = n.getMessageComponents(), a = new sn(s).compileInstructions(e.instructions).map((o) => ({
      programIdIndex: o.programIdIndex,
      accounts: o.accountKeyIndexes,
      data: X.encode(o.data)
    }));
    return new $e({
      header: r,
      accountKeys: s,
      recentBlockhash: e.recentBlockhash,
      instructions: a
    });
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const n = this.header.numRequiredSignatures;
    if (e >= this.header.numRequiredSignatures) {
      const r = e - n, i = this.accountKeys.length - n - this.header.numReadonlyUnsignedAccounts;
      return r < i;
    } else {
      const r = n - this.header.numReadonlySignedAccounts;
      return e < r;
    }
  }
  isProgramId(e) {
    return this.indexToProgramIds.has(e);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((e, n) => !this.isProgramId(n));
  }
  serialize() {
    const e = this.accountKeys.length;
    let n = [];
    Ve(n, e);
    const r = this.instructions.map((k) => {
      const {
        accounts: b,
        programIdIndex: T
      } = k, I = Array.from(X.decode(k.data));
      let w = [];
      Ve(w, b.length);
      let v = [];
      return Ve(v, I.length), {
        programIdIndex: T,
        keyIndicesCount: C.Buffer.from(w),
        keyIndices: b,
        dataLength: C.Buffer.from(v),
        data: I
      };
    });
    let s = [];
    Ve(s, r.length);
    let i = C.Buffer.alloc(Bt);
    C.Buffer.from(s).copy(i);
    let a = s.length;
    r.forEach((k) => {
      const T = g([P("programIdIndex"), re(k.keyIndicesCount.length, "keyIndicesCount"), fe(P("keyIndex"), k.keyIndices.length, "keyIndices"), re(k.dataLength.length, "dataLength"), fe(P("userdatum"), k.data.length, "data")]).encode(k, i, a);
      a += T;
    }), i = i.slice(0, a);
    const o = g([re(1, "numRequiredSignatures"), re(1, "numReadonlySignedAccounts"), re(1, "numReadonlyUnsignedAccounts"), re(n.length, "keyCount"), fe(E("key"), e, "keys"), E("recentBlockhash")]), u = {
      numRequiredSignatures: C.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: C.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: C.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: C.Buffer.from(n),
      keys: this.accountKeys.map((k) => G(k.toBytes())),
      recentBlockhash: X.decode(this.recentBlockhash)
    };
    let l = C.Buffer.alloc(2048);
    const y = o.encode(u, l);
    return i.copy(l, y), l.slice(0, y + i.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(e) {
    let n = [...e];
    const r = rt(n);
    if (r !== (r & Gr))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = rt(n), i = rt(n), a = De(n);
    let o = [];
    for (let b = 0; b < a; b++) {
      const T = He(n, 0, Ge);
      o.push(new d(C.Buffer.from(T)));
    }
    const u = He(n, 0, Ge), l = De(n);
    let y = [];
    for (let b = 0; b < l; b++) {
      const T = rt(n), I = De(n), w = He(n, 0, I), v = De(n), R = He(n, 0, v), K = X.encode(C.Buffer.from(R));
      y.push({
        programIdIndex: T,
        accounts: w,
        data: K
      });
    }
    const k = {
      header: {
        numRequiredSignatures: r,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: X.encode(C.Buffer.from(u)),
      accountKeys: o,
      instructions: y
    };
    return new $e(k);
  }
}
const Yr = C.Buffer.alloc(Nn).fill(0);
class H {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = C.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: e,
        isSigner: n,
        isWritable: r
      }) => ({
        pubkey: e.toJSON(),
        isSigner: n,
        isWritable: r
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class Y {
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
          minContextSlot: n,
          nonceInfo: r
        } = e;
        this.minNonceContextSlot = n, this.nonceInfo = r;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const {
          blockhash: n,
          lastValidBlockHeight: r
        } = e;
        this.recentBlockhash = n, this.lastValidBlockHeight = r;
      } else {
        const {
          recentBlockhash: n,
          nonceInfo: r
        } = e;
        r && (this.nonceInfo = r), this.recentBlockhash = n;
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
    return e.forEach((n) => {
      "instructions" in n ? this.instructions = this.instructions.concat(n.instructions) : "data" in n && "programId" in n && "keys" in n ? this.instructions.push(n) : this.instructions.push(new H(n));
    }), this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let e, n;
    if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? n = [this.nonceInfo.nonceInstruction, ...this.instructions] : n = this.instructions) : (e = this.recentBlockhash, n = this.instructions), !e)
      throw new Error("Transaction recentBlockhash required");
    n.length < 1 && console.warn("No instructions provided");
    let r;
    if (this.feePayer)
      r = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      r = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let w = 0; w < n.length; w++)
      if (n[w].programId === void 0)
        throw new Error(`Transaction instruction index ${w} has undefined program id`);
    const s = [], i = [];
    n.forEach((w) => {
      w.keys.forEach((R) => {
        i.push({
          ...R
        });
      });
      const v = w.programId.toString();
      s.includes(v) || s.push(v);
    }), s.forEach((w) => {
      i.push({
        pubkey: new d(w),
        isSigner: !1,
        isWritable: !1
      });
    });
    const a = [];
    i.forEach((w) => {
      const v = w.pubkey.toString(), R = a.findIndex((K) => K.pubkey.toString() === v);
      R > -1 ? (a[R].isWritable = a[R].isWritable || w.isWritable, a[R].isSigner = a[R].isSigner || w.isSigner) : a.push(w);
    }), a.sort(function(w, v) {
      if (w.isSigner !== v.isSigner)
        return w.isSigner ? -1 : 1;
      if (w.isWritable !== v.isWritable)
        return w.isWritable ? -1 : 1;
      const R = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return w.pubkey.toBase58().localeCompare(v.pubkey.toBase58(), "en", R);
    });
    const o = a.findIndex((w) => w.pubkey.equals(r));
    if (o > -1) {
      const [w] = a.splice(o, 1);
      w.isSigner = !0, w.isWritable = !0, a.unshift(w);
    } else
      a.unshift({
        pubkey: r,
        isSigner: !0,
        isWritable: !0
      });
    for (const w of this.signatures) {
      const v = a.findIndex((R) => R.pubkey.equals(w.publicKey));
      if (v > -1)
        a[v].isSigner || (a[v].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${w.publicKey.toString()}`);
    }
    let u = 0, l = 0, y = 0;
    const k = [], b = [];
    a.forEach(({
      pubkey: w,
      isSigner: v,
      isWritable: R
    }) => {
      v ? (k.push(w.toString()), u += 1, R || (l += 1)) : (b.push(w.toString()), R || (y += 1));
    });
    const T = k.concat(b), I = n.map((w) => {
      const {
        data: v,
        programId: R
      } = w;
      return {
        programIdIndex: T.indexOf(R.toString()),
        accounts: w.keys.map((K) => T.indexOf(K.pubkey.toString())),
        data: X.encode(v)
      };
    });
    return I.forEach((w) => {
      $(w.programIdIndex >= 0), w.accounts.forEach((v) => $(v >= 0));
    }), new $e({
      header: {
        numRequiredSignatures: u,
        numReadonlySignedAccounts: l,
        numReadonlyUnsignedAccounts: y
      },
      accountKeys: T,
      recentBlockhash: e,
      instructions: I
    });
  }
  /**
   * @internal
   */
  _compile() {
    const e = this.compileMessage(), n = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === n.length && this.signatures.every((s, i) => n[i].equals(s.publicKey)) || (this.signatures = n.map((r) => ({
      signature: null,
      publicKey: r
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
    const n = /* @__PURE__ */ new Set();
    this.signatures = e.filter((r) => {
      const s = r.toString();
      return n.has(s) ? !1 : (n.add(s), !0);
    }).map((r) => ({
      signature: null,
      publicKey: r
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
    const n = /* @__PURE__ */ new Set(), r = [];
    for (const i of e) {
      const a = i.publicKey.toString();
      n.has(a) || (n.add(a), r.push(i));
    }
    this.signatures = r.map((i) => ({
      signature: null,
      publicKey: i.publicKey
    }));
    const s = this._compile();
    this._partialSign(s, ...r);
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
    const n = /* @__PURE__ */ new Set(), r = [];
    for (const i of e) {
      const a = i.publicKey.toString();
      n.has(a) || (n.add(a), r.push(i));
    }
    const s = this._compile();
    this._partialSign(s, ...r);
  }
  /**
   * @internal
   */
  _partialSign(e, ...n) {
    const r = e.serialize();
    n.forEach((s) => {
      const i = Kr(r, s.secretKey);
      this._addSignature(s.publicKey, G(i));
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
  addSignature(e, n) {
    this._compile(), this._addSignature(e, n);
  }
  /**
   * @internal
   */
  _addSignature(e, n) {
    $(n.length === 64);
    const r = this.signatures.findIndex((s) => e.equals(s.publicKey));
    if (r < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[r].signature = C.Buffer.from(n);
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
  _getMessageSignednessErrors(e, n) {
    const r = {};
    for (const {
      signature: s,
      publicKey: i
    } of this.signatures)
      s === null ? n && (r.missing || (r.missing = [])).push(i) : qr(s, e, i.toBytes()) || (r.invalid || (r.invalid = [])).push(i);
    return r.invalid || r.missing ? r : void 0;
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
      requireAllSignatures: n,
      verifySignatures: r
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, e), s = this.serializeMessage();
    if (r) {
      const i = this._getMessageSignednessErrors(s, n);
      if (i) {
        let a = "Signature verification failed.";
        throw i.invalid && (a += `
Invalid signature for public key${i.invalid.length === 1 ? "" : "(s)"} [\`${i.invalid.map((o) => o.toBase58()).join("`, `")}\`].`), i.missing && (a += `
Missing signature for public key${i.missing.length === 1 ? "" : "(s)"} [\`${i.missing.map((o) => o.toBase58()).join("`, `")}\`].`), new Error(a);
      }
    }
    return this._serialize(s);
  }
  /**
   * @internal
   */
  _serialize(e) {
    const {
      signatures: n
    } = this, r = [];
    Ve(r, n.length);
    const s = r.length + n.length * 64 + e.length, i = C.Buffer.alloc(s);
    return $(n.length < 256), C.Buffer.from(r).copy(i, 0), n.forEach(({
      signature: a
    }, o) => {
      a !== null && ($(a.length === 64, "signature has invalid length"), C.Buffer.from(a).copy(i, r.length + o * 64));
    }), e.copy(i, r.length + n.length * 64), $(i.length <= Bt, `Transaction too large: ${i.length} > ${Bt}`), i;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return $(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return $(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return $(this.instructions.length === 1), this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   *
   * @param {Buffer | Uint8Array | Array<number>} buffer Signature of wire Transaction
   *
   * @returns {Transaction} Transaction associated with the signature
   */
  static from(e) {
    let n = [...e];
    const r = De(n);
    let s = [];
    for (let i = 0; i < r; i++) {
      const a = He(n, 0, Nn);
      s.push(X.encode(C.Buffer.from(a)));
    }
    return Y.populate($e.from(n), s);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(e, n = []) {
    const r = new Y();
    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), n.forEach((s, i) => {
      const a = {
        signature: s == X.encode(Yr) ? null : X.decode(s),
        publicKey: e.accountKeys[i]
      };
      r.signatures.push(a);
    }), e.instructions.forEach((s) => {
      const i = s.accounts.map((a) => {
        const o = e.accountKeys[a];
        return {
          pubkey: o,
          isSigner: r.signatures.some((u) => u.publicKey.toString() === o.toString()) || e.isAccountSigner(a),
          isWritable: e.isAccountWritable(a)
        };
      });
      r.instructions.push(new H({
        keys: i,
        programId: e.accountKeys[s.programIdIndex],
        data: X.decode(s.data)
      }));
    }), r._message = e, r._json = r.toJSON(), r;
  }
}
const Xr = new d("SysvarC1ock11111111111111111111111111111111");
new d("SysvarEpochSchedu1e111111111111111111111111");
new d("Sysvar1nstructions1111111111111111111111111");
const bt = new d("SysvarRecentB1ockHashes11111111111111111111"), ie = new d("SysvarRent111111111111111111111111111111111");
new d("SysvarRewards111111111111111111111111111111");
new d("SysvarS1otHashes111111111111111111111111111");
new d("SysvarS1otHistory11111111111111111111111111");
new d("SysvarStakeHistory1111111111111111111111111");
function ee(t, e) {
  const n = t.layout.span >= 0 ? t.layout.span : Un(t, e), r = C.Buffer.alloc(n), s = Object.assign({
    instruction: t.index
  }, e);
  return t.layout.encode(s, r), r;
}
const Qr = V("lamportsPerSignature"), es = g([S("version"), S("state"), E("authorizedPubkey"), E("nonce"), g([Qr], "feeCalculator")]), an = es.span, ts = (t) => {
  const e = t.decode.bind(t), n = t.encode.bind(t);
  return {
    decode: e,
    encode: n
  };
}, ns = (t) => (e) => {
  const n = re(t, e), {
    encode: r,
    decode: s
  } = ts(n), i = n;
  return i.decode = (a, o) => {
    const u = s(a, o);
    return Ir(C.Buffer.from(u));
  }, i.encode = (a, o, u) => {
    const l = Cr(a, t);
    return r(l, o, u);
  }, i;
}, We = ns(8), te = Object.freeze({
  Create: {
    index: 0,
    layout: g([S("instruction"), j("lamports"), j("space"), E("programId")])
  },
  Assign: {
    index: 1,
    layout: g([S("instruction"), E("programId")])
  },
  Transfer: {
    index: 2,
    layout: g([S("instruction"), We("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: g([S("instruction"), E("base"), Pe("seed"), j("lamports"), j("space"), E("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: g([S("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: g([S("instruction"), j("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: g([S("instruction"), E("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: g([S("instruction"), E("authorized")])
  },
  Allocate: {
    index: 8,
    layout: g([S("instruction"), j("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: g([S("instruction"), E("base"), Pe("seed"), j("space"), E("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: g([S("instruction"), E("base"), Pe("seed"), E("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: g([S("instruction"), We("lamports"), Pe("seed"), E("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: g([S("instruction")])
  }
});
class D {
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
    const n = te.Create, r = ee(n, {
      lamports: e.lamports,
      space: e.space,
      programId: G(e.programId.toBuffer())
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
      data: r
    });
  }
  /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */
  static transfer(e) {
    let n, r;
    if ("basePubkey" in e) {
      const s = te.TransferWithSeed;
      n = ee(s, {
        lamports: BigInt(e.lamports),
        seed: e.seed,
        programId: G(e.programId.toBuffer())
      }), r = [{
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
      const s = te.Transfer;
      n = ee(s, {
        lamports: BigInt(e.lamports)
      }), r = [{
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
      keys: r,
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction instruction that assigns an account to a program
   */
  static assign(e) {
    let n, r;
    if ("basePubkey" in e) {
      const s = te.AssignWithSeed;
      n = ee(s, {
        base: G(e.basePubkey.toBuffer()),
        seed: e.seed,
        programId: G(e.programId.toBuffer())
      }), r = [{
        pubkey: e.accountPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.basePubkey,
        isSigner: !0,
        isWritable: !1
      }];
    } else {
      const s = te.Assign;
      n = ee(s, {
        programId: G(e.programId.toBuffer())
      }), r = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new H({
      keys: r,
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */
  static createAccountWithSeed(e) {
    const n = te.CreateWithSeed, r = ee(n, {
      base: G(e.basePubkey.toBuffer()),
      seed: e.seed,
      lamports: e.lamports,
      space: e.space,
      programId: G(e.programId.toBuffer())
    });
    let s = [{
      pubkey: e.fromPubkey,
      isSigner: !0,
      isWritable: !0
    }, {
      pubkey: e.newAccountPubkey,
      isSigner: !1,
      isWritable: !0
    }];
    return e.basePubkey != e.fromPubkey && s.push({
      pubkey: e.basePubkey,
      isSigner: !0,
      isWritable: !1
    }), new H({
      keys: s,
      programId: this.programId,
      data: r
    });
  }
  /**
   * Generate a transaction that creates a new Nonce account
   */
  static createNonceAccount(e) {
    const n = new Y();
    "basePubkey" in e && "seed" in e ? n.add(D.createAccountWithSeed({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      basePubkey: e.basePubkey,
      seed: e.seed,
      lamports: e.lamports,
      space: an,
      programId: this.programId
    })) : n.add(D.createAccount({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      lamports: e.lamports,
      space: an,
      programId: this.programId
    }));
    const r = {
      noncePubkey: e.noncePubkey,
      authorizedPubkey: e.authorizedPubkey
    };
    return n.add(this.nonceInitialize(r)), n;
  }
  /**
   * Generate an instruction to initialize a Nonce account
   */
  static nonceInitialize(e) {
    const n = te.InitializeNonceAccount, r = ee(n, {
      authorized: G(e.authorizedPubkey.toBuffer())
    }), s = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: bt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: ie,
        isSigner: !1,
        isWritable: !1
      }],
      programId: this.programId,
      data: r
    };
    return new H(s);
  }
  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */
  static nonceAdvance(e) {
    const n = te.AdvanceNonceAccount, r = ee(n), s = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: bt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: e.authorizedPubkey,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: r
    };
    return new H(s);
  }
  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */
  static nonceWithdraw(e) {
    const n = te.WithdrawNonceAccount, r = ee(n, {
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
        pubkey: bt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: ie,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: e.authorizedPubkey,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: r
    });
  }
  /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */
  static nonceAuthorize(e) {
    const n = te.AuthorizeNonceAccount, r = ee(n, {
      authorized: G(e.newAuthorizedPubkey.toBuffer())
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
      data: r
    });
  }
  /**
   * Generate a transaction instruction that allocates space in an account without funding
   */
  static allocate(e) {
    let n, r;
    if ("basePubkey" in e) {
      const s = te.AllocateWithSeed;
      n = ee(s, {
        base: G(e.basePubkey.toBuffer()),
        seed: e.seed,
        space: e.space,
        programId: G(e.programId.toBuffer())
      }), r = [{
        pubkey: e.accountPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.basePubkey,
        isSigner: !0,
        isWritable: !1
      }];
    } else {
      const s = te.Allocate;
      n = ee(s, {
        space: e.space
      }), r = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new H({
      keys: r,
      programId: this.programId,
      data: n
    });
  }
}
D.programId = new d("11111111111111111111111111111111");
new d("BPFLoader2111111111111111111111111111111111");
g([
  S("typeIndex"),
  We("deactivationSlot"),
  V("lastExtendedSlot"),
  P("lastExtendedStartIndex"),
  P(),
  // option
  fe(E(), Re(P(), -1), "authority")
]);
const F = tt(vt(d), h(), (t) => new d(t)), Fn = Et([h(), N("base64")]), Rt = tt(vt(C.Buffer), Fn, (t) => C.Buffer.from(t[0], "base64"));
function On(t) {
  return Z([f({
    jsonrpc: N("2.0"),
    id: h(),
    result: t
  }), f({
    jsonrpc: N("2.0"),
    id: h(),
    error: f({
      code: et(),
      message: h(),
      data: M(Or())
    })
  })]);
}
const rs = On(et());
function _(t) {
  return tt(On(t), rs, (e) => "error" in e ? e : {
    ...e,
    result: Je(e.result, t)
  });
}
function ae(t) {
  return _(f({
    context: f({
      slot: c()
    }),
    value: t
  }));
}
function ht(t) {
  return f({
    context: f({
      slot: c()
    }),
    value: t
  });
}
const ss = f({
  foundation: c(),
  foundationTerm: c(),
  initial: c(),
  taper: c(),
  terminal: c()
});
_(p(m(f({
  epoch: c(),
  effectiveSlot: c(),
  amount: c(),
  postBalance: c(),
  commission: M(m(c()))
}))));
const is = p(f({
  slot: c(),
  prioritizationFee: c()
})), as = f({
  total: c(),
  validator: c(),
  foundation: c(),
  epoch: c()
}), os = f({
  epoch: c(),
  slotIndex: c(),
  slotsInEpoch: c(),
  absoluteSlot: c(),
  blockHeight: M(c()),
  transactionCount: M(c())
}), cs = f({
  slotsPerEpoch: c(),
  leaderScheduleSlotOffset: c(),
  warmup: he(),
  firstNormalEpoch: c(),
  firstNormalSlot: c()
}), us = xn(h(), p(c())), Te = m(Z([f({}), h()])), ds = f({
  err: Te
}), ls = N("receivedSignature");
f({
  "solana-core": h(),
  "feature-set": M(c())
});
ae(f({
  err: m(Z([f({}), h()])),
  logs: m(p(h())),
  accounts: M(m(p(m(f({
    executable: he(),
    owner: h(),
    lamports: c(),
    data: p(h()),
    rentEpoch: M(c())
  }))))),
  unitsConsumed: M(c()),
  returnData: M(m(f({
    programId: h(),
    data: Et([h(), N("base64")])
  })))
}));
ae(f({
  byIdentity: xn(h(), p(c())),
  range: f({
    firstSlot: c(),
    lastSlot: c()
  })
}));
_(ss);
_(as);
_(is);
_(os);
_(cs);
_(us);
_(c());
ae(f({
  total: c(),
  circulating: c(),
  nonCirculating: c(),
  nonCirculatingAccounts: p(F)
}));
const fs = f({
  amount: h(),
  uiAmount: m(c()),
  decimals: c(),
  uiAmountString: M(h())
});
ae(p(f({
  address: F,
  amount: h(),
  uiAmount: m(c()),
  decimals: c(),
  uiAmountString: M(h())
})));
ae(p(f({
  pubkey: F,
  account: f({
    executable: he(),
    owner: F,
    lamports: c(),
    data: Rt,
    rentEpoch: c()
  })
})));
const It = f({
  program: h(),
  parsed: et(),
  space: c()
});
ae(p(f({
  pubkey: F,
  account: f({
    executable: he(),
    owner: F,
    lamports: c(),
    data: It,
    rentEpoch: c()
  })
})));
ae(p(f({
  lamports: c(),
  address: F
})));
const xt = f({
  executable: he(),
  owner: F,
  lamports: c(),
  data: Rt,
  rentEpoch: c()
});
f({
  pubkey: F,
  account: xt
});
const hs = tt(Z([vt(C.Buffer), It]), Z([Fn, It]), (t) => Array.isArray(t) ? Je(t, Rt) : t), gs = f({
  executable: he(),
  owner: F,
  lamports: c(),
  data: hs,
  rentEpoch: c()
});
f({
  pubkey: F,
  account: gs
});
f({
  state: Z([N("active"), N("inactive"), N("activating"), N("deactivating")]),
  active: c(),
  inactive: c()
});
_(p(f({
  signature: h(),
  slot: c(),
  err: Te,
  memo: m(h()),
  blockTime: M(m(c()))
})));
_(p(f({
  signature: h(),
  slot: c(),
  err: Te,
  memo: m(h()),
  blockTime: M(m(c()))
})));
f({
  subscription: c(),
  result: ht(xt)
});
const ms = f({
  pubkey: F,
  account: xt
});
f({
  subscription: c(),
  result: ht(ms)
});
const ps = f({
  parent: c(),
  slot: c(),
  root: c()
});
f({
  subscription: c(),
  result: ps
});
const ys = Z([f({
  type: Z([N("firstShredReceived"), N("completed"), N("optimisticConfirmation"), N("root")]),
  slot: c(),
  timestamp: c()
}), f({
  type: N("createdBank"),
  parent: c(),
  slot: c(),
  timestamp: c()
}), f({
  type: N("frozen"),
  slot: c(),
  timestamp: c(),
  stats: f({
    numTransactionEntries: c(),
    numSuccessfulTransactions: c(),
    numFailedTransactions: c(),
    maxTransactionsPerEntry: c()
  })
}), f({
  type: N("dead"),
  slot: c(),
  timestamp: c(),
  err: h()
})]);
f({
  subscription: c(),
  result: ys
});
f({
  subscription: c(),
  result: ht(Z([ds, ls]))
});
f({
  subscription: c(),
  result: c()
});
f({
  pubkey: h(),
  gossip: m(h()),
  tpu: m(h()),
  rpc: m(h()),
  version: m(h())
});
const on = f({
  votePubkey: h(),
  nodePubkey: h(),
  activatedStake: c(),
  epochVoteAccount: he(),
  epochCredits: p(Et([c(), c(), c()])),
  commission: c(),
  lastVote: c(),
  rootSlot: m(c())
});
_(f({
  current: p(on),
  delinquent: p(on)
}));
const ws = Z([N("processed"), N("confirmed"), N("finalized")]), Ss = f({
  slot: c(),
  confirmations: m(c()),
  err: Te,
  confirmationStatus: M(ws)
});
ae(p(m(Ss)));
_(c());
const Ln = f({
  accountKey: F,
  writableIndexes: p(c()),
  readonlyIndexes: p(c())
}), Wt = f({
  signatures: p(h()),
  message: f({
    accountKeys: p(h()),
    header: f({
      numRequiredSignatures: c(),
      numReadonlySignedAccounts: c(),
      numReadonlyUnsignedAccounts: c()
    }),
    instructions: p(f({
      accounts: p(c()),
      data: h(),
      programIdIndex: c()
    })),
    recentBlockhash: h(),
    addressTableLookups: M(p(Ln))
  })
}), Kn = f({
  pubkey: F,
  signer: he(),
  writable: he(),
  source: M(Z([N("transaction"), N("lookupTable")]))
}), qn = f({
  accountKeys: p(Kn),
  signatures: p(h())
}), Dn = f({
  parsed: et(),
  program: h(),
  programId: F
}), Vn = f({
  accounts: p(F),
  data: h(),
  programId: F
}), ks = Z([Vn, Dn]), bs = Z([f({
  parsed: et(),
  program: h(),
  programId: h()
}), f({
  accounts: p(h()),
  data: h(),
  programId: h()
})]), Hn = tt(ks, bs, (t) => "accounts" in t ? Je(t, Vn) : Je(t, Dn)), Gn = f({
  signatures: p(h()),
  message: f({
    accountKeys: p(Kn),
    instructions: p(Hn),
    recentBlockhash: h(),
    addressTableLookups: M(m(p(Ln)))
  })
}), at = f({
  accountIndex: c(),
  mint: h(),
  owner: M(h()),
  uiTokenAmount: fs
}), jn = f({
  writable: p(F),
  readonly: p(F)
}), gt = f({
  err: Te,
  fee: c(),
  innerInstructions: M(m(p(f({
    index: c(),
    instructions: p(f({
      accounts: p(c()),
      data: h(),
      programIdIndex: c()
    }))
  })))),
  preBalances: p(c()),
  postBalances: p(c()),
  logMessages: M(m(p(h()))),
  preTokenBalances: M(m(p(at))),
  postTokenBalances: M(m(p(at))),
  loadedAddresses: M(jn),
  computeUnitsConsumed: M(c())
}), _t = f({
  err: Te,
  fee: c(),
  innerInstructions: M(m(p(f({
    index: c(),
    instructions: p(Hn)
  })))),
  preBalances: p(c()),
  postBalances: p(c()),
  logMessages: M(m(p(h()))),
  preTokenBalances: M(m(p(at))),
  postTokenBalances: M(m(p(at))),
  loadedAddresses: M(jn),
  computeUnitsConsumed: M(c())
}), Ne = Z([N(0), N("legacy")]), Be = f({
  pubkey: h(),
  lamports: c(),
  postBalance: m(c()),
  rewardType: m(h()),
  commission: M(m(c()))
});
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  transactions: p(f({
    transaction: Wt,
    meta: m(gt),
    version: M(Ne)
  })),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  transactions: p(f({
    transaction: qn,
    meta: m(gt),
    version: M(Ne)
  })),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  transactions: p(f({
    transaction: Gn,
    meta: m(_t),
    version: M(Ne)
  })),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  transactions: p(f({
    transaction: qn,
    meta: m(_t),
    version: M(Ne)
  })),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  rewards: M(p(Be)),
  blockTime: m(c()),
  blockHeight: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  transactions: p(f({
    transaction: Wt,
    meta: m(gt)
  })),
  rewards: M(p(Be)),
  blockTime: m(c())
})));
_(m(f({
  blockhash: h(),
  previousBlockhash: h(),
  parentSlot: c(),
  signatures: p(h()),
  blockTime: m(c())
})));
_(m(f({
  slot: c(),
  meta: m(gt),
  blockTime: M(m(c())),
  transaction: Wt,
  version: M(Ne)
})));
_(m(f({
  slot: c(),
  transaction: Gn,
  meta: m(_t),
  blockTime: M(m(c())),
  version: M(Ne)
})));
ae(f({
  blockhash: h(),
  feeCalculator: f({
    lamportsPerSignature: c()
  })
}));
ae(f({
  blockhash: h(),
  lastValidBlockHeight: c()
}));
ae(he());
const As = f({
  slot: c(),
  numTransactions: c(),
  numSlots: c(),
  samplePeriodSecs: c()
});
_(p(As));
ae(m(f({
  feeCalculator: f({
    lamportsPerSignature: c()
  })
})));
_(h());
_(h());
const Ms = f({
  err: Te,
  logs: p(h()),
  signature: h()
});
f({
  result: ht(Ms),
  subscription: c()
});
class pe {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param {Ed25519Keypair} keypair ed25519 keypair
   */
  constructor(e) {
    this._keypair = void 0, this._keypair = e ?? tn();
  }
  /**
   * Generate a new random keypair
   *
   * @returns {Keypair} Keypair
   */
  static generate() {
    return new pe(tn());
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
  static fromSecretKey(e, n) {
    if (e.byteLength !== 64)
      throw new Error("bad secret key size");
    const r = e.slice(32, 64);
    if (!n || !n.skipValidation) {
      const s = e.slice(0, 32), i = Tt(s);
      for (let a = 0; a < 32; a++)
        if (r[a] !== i[a])
          throw new Error("provided secretKey is invalid");
    }
    return new pe({
      publicKey: r,
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
    const n = Tt(e), r = new Uint8Array(64);
    return r.set(e), r.set(n, 32), new pe({
      publicKey: n,
      secretKey: r
    });
  }
  /**
   * The public key for this keypair
   *
   * @returns {PublicKey} PublicKey
   */
  get publicKey() {
    return new d(this._keypair.publicKey);
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
    layout: g([S("instruction"), We("recentSlot"), P("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: g([S("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: g([S("instruction"), We(), fe(E(), Re(S(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: g([S("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: g([S("instruction")])
  }
});
new d("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: g([P("instruction"), S("units"), S("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: g([P("instruction"), S("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: g([P("instruction"), S("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: g([P("instruction"), We("microLamports")])
  }
});
new d("ComputeBudget111111111111111111111111111111");
g([P("numSignatures"), P("padding"), ne("signatureOffset"), ne("signatureInstructionIndex"), ne("publicKeyOffset"), ne("publicKeyInstructionIndex"), ne("messageDataOffset"), ne("messageDataSize"), ne("messageInstructionIndex")]);
new d("Ed25519SigVerify111111111111111111111111111");
Bn.utils.isValidPrivateKey;
Bn.getPublicKey;
g([P("numSignatures"), ne("signatureOffset"), P("signatureInstructionIndex"), ne("ethAddressOffset"), P("ethAddressInstructionIndex"), ne("messageDataOffset"), ne("messageDataSize"), P("messageInstructionIndex"), re(20, "ethAddress"), re(64, "signature"), P("recoveryId")]);
new d("KeccakSecp256k11111111111111111111111111111");
var Zn;
new d("StakeConfig11111111111111111111111111111111");
class Jn {
  /**
   * Create a new Lockup object
   */
  constructor(e, n, r) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = n, this.custodian = r;
  }
  /**
   * Default, inactive Lockup value
   */
}
Zn = Jn;
Jn.default = new Zn(0, 0, d.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: g([S("instruction"), jr(), Zr()])
  },
  Authorize: {
    index: 1,
    layout: g([S("instruction"), E("newAuthorized"), S("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: g([S("instruction")])
  },
  Split: {
    index: 3,
    layout: g([S("instruction"), j("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: g([S("instruction"), j("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: g([S("instruction")])
  },
  Merge: {
    index: 7,
    layout: g([S("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: g([S("instruction"), E("newAuthorized"), S("stakeAuthorizationType"), Pe("authoritySeed"), E("authorityOwner")])
  }
});
new d("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: g([S("instruction"), Jr()])
  },
  Authorize: {
    index: 1,
    layout: g([S("instruction"), E("newAuthorized"), S("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: g([S("instruction"), j("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: g([S("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: g([S("instruction"), $r()])
  }
});
new d("Vote111111111111111111111111111111111111111");
new d("Va1idator1nfo111111111111111111111111111111");
f({
  name: h(),
  website: M(h()),
  details: M(h()),
  keybaseUsername: M(h())
});
new d("Vote111111111111111111111111111111111111111");
g([
  E("nodePubkey"),
  E("authorizedWithdrawer"),
  P("commission"),
  V(),
  // votes.length
  fe(g([V("slot"), S("confirmationCount")]), Re(S(), -8), "votes"),
  P("rootSlotValid"),
  V("rootSlot"),
  V(),
  // authorizedVoters.length
  fe(g([V("epoch"), E("authorizedVoter")]), Re(S(), -8), "authorizedVoters"),
  g([fe(g([E("authorizedPubkey"), V("epochOfLastAuthorizedSwitch"), V("targetEpoch")]), 32, "buf"), V("idx"), P("isEmpty")], "priorVoters"),
  V(),
  // epochCredits.length
  fe(g([V("epoch"), V("credits"), V("prevCredits")]), Re(S(), -8), "epochCredits"),
  g([V("slot"), V("timestamp")], "lastTimestamp")
]);
const U = new d("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
new d("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const mt = new d("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), me = new d("So11111111111111111111111111111111111111112");
new d("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
class Ue extends Error {
  constructor(e) {
    super(e);
  }
}
class Nt extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenAccountNotFoundError";
  }
}
class Ts extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenInvalidAccountError";
  }
}
class $n extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenInvalidAccountOwnerError";
  }
}
class je extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenInvalidAccountSizeError";
  }
}
class Bs extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenInvalidMintError";
  }
}
class Yn extends Ue {
  constructor() {
    super(...arguments), this.name = "TokenOwnerOffCurveError";
  }
}
var _e;
(function(t) {
  t[t.InitializeMint = 0] = "InitializeMint", t[t.InitializeAccount = 1] = "InitializeAccount", t[t.InitializeMultisig = 2] = "InitializeMultisig", t[t.Transfer = 3] = "Transfer", t[t.Approve = 4] = "Approve", t[t.Revoke = 5] = "Revoke", t[t.SetAuthority = 6] = "SetAuthority", t[t.MintTo = 7] = "MintTo", t[t.Burn = 8] = "Burn", t[t.CloseAccount = 9] = "CloseAccount", t[t.FreezeAccount = 10] = "FreezeAccount", t[t.ThawAccount = 11] = "ThawAccount", t[t.TransferChecked = 12] = "TransferChecked", t[t.ApproveChecked = 13] = "ApproveChecked", t[t.MintToChecked = 14] = "MintToChecked", t[t.BurnChecked = 15] = "BurnChecked", t[t.InitializeAccount2 = 16] = "InitializeAccount2", t[t.SyncNative = 17] = "SyncNative", t[t.InitializeAccount3 = 18] = "InitializeAccount3", t[t.InitializeMultisig2 = 19] = "InitializeMultisig2", t[t.InitializeMint2 = 20] = "InitializeMint2", t[t.GetAccountDataSize = 21] = "GetAccountDataSize", t[t.InitializeImmutableOwner = 22] = "InitializeImmutableOwner", t[t.AmountToUiAmount = 23] = "AmountToUiAmount", t[t.UiAmountToAmount = 24] = "UiAmountToAmount", t[t.InitializeMintCloseAuthority = 25] = "InitializeMintCloseAuthority", t[t.TransferFeeExtension = 26] = "TransferFeeExtension", t[t.ConfidentialTransferExtension = 27] = "ConfidentialTransferExtension", t[t.DefaultAccountStateExtension = 28] = "DefaultAccountStateExtension", t[t.Reallocate = 29] = "Reallocate", t[t.MemoTransferExtension = 30] = "MemoTransferExtension", t[t.CreateNativeMint = 31] = "CreateNativeMint", t[t.InitializeNonTransferableMint = 32] = "InitializeNonTransferableMint", t[t.InterestBearingMintExtension = 33] = "InterestBearingMintExtension", t[t.CpiGuardExtension = 34] = "CpiGuardExtension", t[t.InitializePermanentDelegate = 35] = "InitializePermanentDelegate", t[t.TransferHookExtension = 36] = "TransferHookExtension", t[t.MetadataPointerExtension = 39] = "MetadataPointerExtension";
})(_e || (_e = {}));
function Ut(t, e, n) {
  if (n.length) {
    t.push({ pubkey: e, isSigner: !1, isWritable: !1 });
    for (const r of n)
      t.push({
        pubkey: r instanceof d ? r : r.publicKey,
        isSigner: !0,
        isWritable: !1
      });
  } else
    t.push({ pubkey: e, isSigner: !0, isWritable: !1 });
  return t;
}
const cn = g([P("instruction"), ce("amount")]);
function Is(t, e, n, r, s = [], i = U) {
  const a = Ut([
    { pubkey: t, isSigner: !1, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !1 }
  ], n, s), o = A.Buffer.alloc(cn.span);
  return cn.encode({
    instruction: _e.Approve,
    amount: BigInt(r)
  }, o), new H({ keys: a, programId: i, data: o });
}
const un = g([P("instruction")]);
function dn(t, e, n, r = [], s = U) {
  const i = Ut([
    { pubkey: t, isSigner: !1, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !0 }
  ], n, r), a = A.Buffer.alloc(un.span);
  return un.encode({ instruction: _e.CloseAccount }, a), new H({ keys: i, programId: s, data: a });
}
var ot;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.Mint = 1] = "Mint", t[t.Account = 2] = "Account";
})(ot || (ot = {}));
const zt = 1, Cs = g([
  P("m"),
  P("n"),
  ke("isInitialized"),
  W("signer1"),
  W("signer2"),
  W("signer3"),
  W("signer4"),
  W("signer5"),
  W("signer6"),
  W("signer7"),
  W("signer8"),
  W("signer9"),
  W("signer10"),
  W("signer11")
]), Ft = Cs.span;
var ct;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.Initialized = 1] = "Initialized", t[t.Frozen = 2] = "Frozen";
})(ct || (ct = {}));
const Xn = g([
  W("mint"),
  W("owner"),
  ce("amount"),
  S("delegateOption"),
  W("delegate"),
  P("state"),
  S("isNativeOption"),
  ce("isNative"),
  ce("delegatedAmount"),
  S("closeAuthorityOption"),
  W("closeAuthority")
]), se = Xn.span;
async function vs(t, e, n, r = U) {
  const s = await t.getAccountInfo(e, n);
  return Ps(e, s, r);
}
async function ln(t, e) {
  return await Es(t, [], e);
}
async function Es(t, e, n) {
  const r = di(e);
  return await t.getMinimumBalanceForRentExemption(r, n);
}
function Ps(t, e, n = U) {
  if (!e)
    throw new Nt();
  if (!e.owner.equals(n))
    throw new $n();
  if (e.data.length < se)
    throw new je();
  const r = Xn.decode(e.data.slice(0, se));
  let s = A.Buffer.alloc(0);
  if (e.data.length > se) {
    if (e.data.length === Ft)
      throw new je();
    if (e.data[se] != ot.Account)
      throw new Ts();
    s = e.data.slice(se + zt);
  }
  return {
    address: t,
    mint: r.mint,
    owner: r.owner,
    amount: r.amount,
    delegate: r.delegateOption ? r.delegate : null,
    delegatedAmount: r.delegatedAmount,
    isInitialized: r.state !== ct.Uninitialized,
    isFrozen: r.state === ct.Frozen,
    isNative: !!r.isNativeOption,
    rentExemptReserve: r.isNativeOption ? r.isNative : null,
    closeAuthority: r.closeAuthorityOption ? r.closeAuthority : null,
    tlvData: s
  };
}
const Qn = g([
  S("mintAuthorityOption"),
  W("mintAuthority"),
  ce("supply"),
  P("decimals"),
  ke("isInitialized"),
  S("freezeAuthorityOption"),
  W("freezeAuthority")
]), At = Qn.span;
async function Rs(t, e, n, r = U) {
  const s = await t.getAccountInfo(e, n);
  return xs(e, s, r);
}
function xs(t, e, n = U) {
  if (!e)
    throw new Nt();
  if (!e.owner.equals(n))
    throw new $n();
  if (e.data.length < At)
    throw new je();
  const r = Qn.decode(e.data.slice(0, At));
  let s = A.Buffer.alloc(0);
  if (e.data.length > At) {
    if (e.data.length <= se)
      throw new je();
    if (e.data.length === Ft)
      throw new je();
    if (e.data[se] != ot.Mint)
      throw new Bs();
    s = e.data.slice(se + zt);
  }
  return {
    address: t,
    mintAuthority: r.mintAuthorityOption ? r.mintAuthority : null,
    supply: r.supply,
    decimals: r.decimals,
    isInitialized: r.isInitialized,
    freezeAuthority: r.freezeAuthorityOption ? r.freezeAuthority : null,
    tlvData: s
  };
}
async function fn(t, e, n = !1, r = U, s = mt) {
  if (!n && !d.isOnCurve(e.toBuffer()))
    throw new Yn();
  const [i] = await d.findProgramAddress([e.toBuffer(), r.toBuffer(), t.toBuffer()], s);
  return i;
}
function Ot(t, e, n = !1, r = U, s = mt) {
  if (!n && !d.isOnCurve(e.toBuffer()))
    throw new Yn();
  const [i] = d.findProgramAddressSync([e.toBuffer(), r.toBuffer(), t.toBuffer()], s);
  return i;
}
const Ws = g([ke("lockCpi")]), _s = Ws.span, Ns = g([P("state")]), Us = Ns.span, zs = g([]), Fs = zs.span, Os = g([
  W("rateAuthority"),
  j("initializationTimestamp"),
  Qt("preUpdateAverageRate"),
  j("lastUpdateTimestamp"),
  Qt("currentRate")
]), Ls = Os.span, Ks = g([ke("requireIncomingTransferMemos")]), qs = Ks.span, Ds = g([
  W("authority"),
  W("metadataAddress")
]), Vs = Ds.span, Hs = g([W("closeAuthority")]), Gs = Hs.span, er = g([]), js = er.span, Zs = er.span, Js = g([W("delegate")]), $s = Js.span, Ys = 1e4;
BigInt(Ys);
function hn(t) {
  return g([ce("epoch"), ce("maximumFee"), ne("transferFeeBasisPoints")], t);
}
const Xs = g([
  W("transferFeeConfigAuthority"),
  W("withdrawWithheldAuthority"),
  ce("withheldAmount"),
  hn("olderTransferFee"),
  hn("newerTransferFee")
]), Qs = Xs.span, ei = g([ce("withheldAmount")]), ti = ei.span, ni = g([W("authority"), W("programId")]), ri = ni.span, si = g([ke("transferring")]), ii = si.span, gn = g([
  P("discriminator"),
  re(32, "addressConfig"),
  ke("isSigner"),
  ke("isWritable")
]), ai = g([
  S("count"),
  fe(gn, vr(gn.span), "extraAccounts")
]);
g([
  ce("instructionDiscriminator"),
  S("length"),
  ai.replicate("extraAccountsList")
]);
var z;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.TransferFeeConfig = 1] = "TransferFeeConfig", t[t.TransferFeeAmount = 2] = "TransferFeeAmount", t[t.MintCloseAuthority = 3] = "MintCloseAuthority", t[t.ConfidentialTransferMint = 4] = "ConfidentialTransferMint", t[t.ConfidentialTransferAccount = 5] = "ConfidentialTransferAccount", t[t.DefaultAccountState = 6] = "DefaultAccountState", t[t.ImmutableOwner = 7] = "ImmutableOwner", t[t.MemoTransfer = 8] = "MemoTransfer", t[t.NonTransferable = 9] = "NonTransferable", t[t.InterestBearingConfig = 10] = "InterestBearingConfig", t[t.CpiGuard = 11] = "CpiGuard", t[t.PermanentDelegate = 12] = "PermanentDelegate", t[t.NonTransferableAccount = 13] = "NonTransferableAccount", t[t.TransferHook = 14] = "TransferHook", t[t.TransferHookAccount = 15] = "TransferHookAccount", t[t.MetadataPointer = 18] = "MetadataPointer";
})(z || (z = {}));
const mn = 2, oi = 2;
function ci(t) {
  switch (t) {
    case z.Uninitialized:
      return 0;
    case z.TransferFeeConfig:
      return Qs;
    case z.TransferFeeAmount:
      return ti;
    case z.MintCloseAuthority:
      return Gs;
    case z.ConfidentialTransferMint:
      return 97;
    case z.ConfidentialTransferAccount:
      return 286;
    case z.CpiGuard:
      return _s;
    case z.DefaultAccountState:
      return Us;
    case z.ImmutableOwner:
      return Fs;
    case z.MemoTransfer:
      return qs;
    case z.MetadataPointer:
      return Vs;
    case z.NonTransferable:
      return js;
    case z.InterestBearingConfig:
      return Ls;
    case z.PermanentDelegate:
      return $s;
    case z.NonTransferableAccount:
      return Zs;
    case z.TransferHook:
      return ri;
    case z.TransferHookAccount:
      return ii;
    default:
      throw Error(`Unknown extension type: ${t}`);
  }
}
function ui(t, e) {
  if (t.length === 0)
    return e;
  {
    const n = se + zt + t.filter((r, s) => s === t.indexOf(r)).map((r) => ci(r) + mn + oi).reduce((r, s) => r + s);
    return n === Ft ? n + mn : n;
  }
}
function di(t) {
  return ui(t, se);
}
const pn = g([P("instruction")]);
function yn(t, e, n, r = U) {
  const s = [
    { pubkey: t, isSigner: !1, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !1 },
    { pubkey: n, isSigner: !1, isWritable: !1 },
    { pubkey: ie, isSigner: !1, isWritable: !1 }
  ], i = A.Buffer.alloc(pn.span);
  return pn.encode({ instruction: _e.InitializeAccount }, i), new H({ keys: s, programId: r, data: i });
}
function tr(t, e, n, r, s = U, i = mt) {
  return li(t, e, n, r, A.Buffer.alloc(0), s, i);
}
function li(t, e, n, r, s, i = U, a = mt) {
  const o = [
    { pubkey: t, isSigner: !0, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !0 },
    { pubkey: n, isSigner: !1, isWritable: !1 },
    { pubkey: r, isSigner: !1, isWritable: !1 },
    { pubkey: D.programId, isSigner: !1, isWritable: !1 },
    { pubkey: i, isSigner: !1, isWritable: !1 }
  ];
  return new H({
    keys: o,
    programId: a,
    data: s
  });
}
const wn = g([P("instruction"), ce("amount")]);
function fi(t, e, n, r, s = [], i = U) {
  const a = Ut([
    { pubkey: t, isSigner: !1, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !0 }
  ], n, s), o = A.Buffer.alloc(wn.span);
  return wn.encode({
    instruction: _e.Transfer,
    amount: BigInt(r)
  }, o), new H({ keys: a, programId: i, data: o });
}
function Lt(t, e) {
  const n = A.Buffer.alloc(2);
  return n.writeUInt16BE(x(e)), L([A.Buffer.from("foreign_contract"), n], t);
}
function hi(t) {
  return L([A.Buffer.from("redeemer")], t);
}
function Kt(t, e) {
  return L([A.Buffer.from("mint"), new d(e).toBuffer()], t);
}
function nr(t) {
  return L([A.Buffer.from("sender")], t);
}
function rr(t, e) {
  return L([A.Buffer.from("tmp"), new d(e).toBuffer()], t);
}
function sr(t, e, n) {
  return L([
    A.Buffer.from("bridged"),
    new d(e).toBuffer(),
    A.Buffer.from(Er.toBytes(BigInt(n.toString()), 8))
  ], t);
}
function J(t) {
  return L([A.Buffer.from("config")], t);
}
async function ia(t, e, n) {
  return t.getAccountInfo(J(e), n).then((r) => qt.deserialize(lt(r)));
}
class qt {
  constructor(e) {
    B(this, "wormhole");
    this.wormhole = new d(e);
  }
  static deserialize(e) {
    if (e.length != 32)
      throw new Error("data.length != 32");
    const n = e.subarray(0, 32);
    return new qt(n);
  }
}
function pt(t, e) {
  return L([new d(e).toBuffer()], t);
}
function ze(t, e, n) {
  if (e == x("Solana"))
    throw new Error("emitterChain == CHAIN_ID_SOLANA cannot exist as foreign token bridge emitter");
  const r = typeof n == "string" ? new In(n).toUint8Array() : n;
  return L([
    (() => {
      const s = A.Buffer.alloc(2);
      return s.writeUInt16BE(e), s;
    })(),
    r
  ], t);
}
async function aa(t, e, n) {
  return t.getAccountInfo(new d(e), n).then((r) => Dt.deserialize(lt(r)));
}
class Dt {
  constructor(e, n) {
    B(this, "chain");
    B(this, "contract");
    this.chain = e, this.contract = n;
  }
  static deserialize(e) {
    if (e.length != 34)
      throw new Error("data.length != 34");
    const n = e.readUInt16LE(0), r = e.subarray(2, 34);
    return new Dt(n, r);
  }
}
function Vt(t) {
  return L([A.Buffer.from("sender")], t);
}
function Ht(t) {
  return L([A.Buffer.from("redeemer")], t);
}
function Fe(t) {
  return L([A.Buffer.from("authority_signer")], t);
}
function nt(t) {
  return L([A.Buffer.from("custody_signer")], t);
}
function yt(t) {
  return L([A.Buffer.from("mint_signer")], t);
}
function Oe(t, e, n) {
  if (e == x("Solana"))
    throw new Error("tokenChain == CHAIN_ID_SOLANA does not have wrapped mint key");
  return L([
    A.Buffer.from("wrapped"),
    (() => {
      const r = A.Buffer.alloc(2);
      return r.writeUInt16BE(e), r;
    })(),
    n
  ], t);
}
function Ie(t, e) {
  return L([A.Buffer.from("meta"), new d(e).toBuffer()], t);
}
async function it(t, e, n, r) {
  return t.getAccountInfo(Ie(e, n), r).then((s) => Gt.deserialize(lt(s)));
}
class Gt {
  constructor(e, n, r, s) {
    B(this, "chain");
    B(this, "tokenAddress");
    B(this, "originalDecimals");
    B(this, "lastUpdatedSequence");
    this.chain = e, this.tokenAddress = n, this.originalDecimals = r, this.lastUpdatedSequence = s;
  }
  static deserialize(e) {
    if (e.length !== 35 && e.length !== 43)
      throw new Error(`invalid wrapped meta length: ${e.length}`);
    const n = e.readUInt16LE(0), r = e.subarray(2, 34), s = e.readUInt8(34), i = e.length === 43 ? e.readBigUInt64LE(35) : void 0;
    return new Gt(n, r, s, i);
  }
}
function Sn(t, e, n, r) {
  return Is(new d(e), Fe(t), new d(n), r);
}
class gi {
  constructor(e) {
    B(this, "idl");
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  decode(e, n) {
    return this.decodeUnchecked(e, n);
  }
  decodeUnchecked(e, n) {
    switch (e) {
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  memcmp(e, n) {
    switch (e) {
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  size(e) {
    return hr(this.idl, e) ?? 0;
  }
}
class mi {
  constructor(e) {
  }
  decode(e) {
    throw new Error("Token Bridge program does not have events");
  }
}
class pi {
  constructor(e) {
  }
  encode(e, n) {
    switch (e) {
      case "initialize":
        return yi(n);
      case "attestToken":
        return wi(n);
      case "completeNative":
        return Si(n);
      case "completeWrapped":
        return ki(n);
      case "transferWrapped":
        return bi(n);
      case "transferNative":
        return Ai(n);
      case "registerChain":
        return Mi(n);
      case "createWrapped":
        return Ti(n);
      case "upgradeContract":
        return Bi(n);
      case "transferWrappedWithPayload":
        return Ii(n);
      case "transferNativeWithPayload":
        return Ci(n);
      default:
        throw new Error(`Invalid instruction: ${e}`);
    }
  }
  encodeState(e, n) {
    throw new Error("Token Bridge program does not have state");
  }
}
var Q;
(function(t) {
  t[t.Initialize = 0] = "Initialize", t[t.AttestToken = 1] = "AttestToken", t[t.CompleteNative = 2] = "CompleteNative", t[t.CompleteWrapped = 3] = "CompleteWrapped", t[t.TransferWrapped = 4] = "TransferWrapped", t[t.TransferNative = 5] = "TransferNative", t[t.RegisterChain = 6] = "RegisterChain", t[t.CreateWrapped = 7] = "CreateWrapped", t[t.UpgradeContract = 8] = "UpgradeContract", t[t.CompleteNativeWithPayload = 9] = "CompleteNativeWithPayload", t[t.CompleteWrappedWithPayload = 10] = "CompleteWrappedWithPayload", t[t.TransferWrappedWithPayload = 11] = "TransferWrappedWithPayload", t[t.TransferNativeWithPayload = 12] = "TransferNativeWithPayload";
})(Q || (Q = {}));
function de(t, e) {
  const n = e === void 0 ? 0 : e.length, r = A.Buffer.alloc(1 + n);
  return r.writeUInt8(t, 0), n > 0 && r.write(e.toString("hex"), 1, "hex"), r;
}
function yi({ wormhole: t }) {
  const e = A.Buffer.alloc(32);
  return e.write(new d(t).toBuffer().toString("hex"), 0, "hex"), de(Q.Initialize, e);
}
function wi({ nonce: t }) {
  const e = A.Buffer.alloc(4);
  return e.writeUInt32LE(t, 0), de(Q.AttestToken, e);
}
function Si({}) {
  return de(Q.CompleteNative);
}
function ki({}) {
  return de(Q.CompleteWrapped);
}
function ir({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s }) {
  if (typeof e != "bigint" && (e = BigInt(e)), typeof n != "bigint" && (n = BigInt(n)), !A.Buffer.isBuffer(r))
    throw new Error("targetAddress must be Buffer");
  const i = A.Buffer.alloc(54);
  return i.writeUInt32LE(t, 0), i.writeBigUInt64LE(e, 4), i.writeBigUInt64LE(n, 12), i.write(r.toString("hex"), 20, "hex"), i.writeUInt16LE(s, 52), i;
}
function bi({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s }) {
  return de(Q.TransferWrapped, ir({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s }));
}
function Ai({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s }) {
  return de(Q.TransferNative, ir({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s }));
}
function Mi({}) {
  return de(Q.RegisterChain);
}
function Ti({}) {
  return de(Q.CreateWrapped);
}
function Bi({}) {
  return de(Q.UpgradeContract);
}
function ar({ nonce: t, amount: e, targetAddress: n, targetChain: r, payload: s }) {
  if (typeof e != "bigint" && (e = BigInt(e)), !A.Buffer.isBuffer(n))
    throw new Error("targetAddress must be Buffer");
  if (!A.Buffer.isBuffer(s))
    throw new Error("payload must be Buffer");
  const i = A.Buffer.alloc(50);
  return i.writeUInt32LE(t, 0), i.writeBigUInt64LE(e, 4), i.write(n.toString("hex"), 12, "hex"), i.writeUInt16LE(r, 44), i.writeUInt32LE(s.length, 46), A.Buffer.concat([
    i,
    s,
    A.Buffer.alloc(1)
    // option == None
  ]);
}
function Ii({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s, payload: i }) {
  return de(Q.TransferWrappedWithPayload, ar({
    nonce: t,
    amount: e,
    fee: n,
    targetAddress: r,
    targetChain: s,
    payload: i
  }));
}
function Ci({ nonce: t, amount: e, fee: n, targetAddress: r, targetChain: s, payload: i }) {
  return de(Q.TransferNativeWithPayload, ar({
    nonce: t,
    amount: e,
    fee: n,
    targetAddress: r,
    targetChain: s,
    payload: i
  }));
}
class vi {
  constructor(e) {
  }
  encode(e, n) {
    throw new Error("Token Bridge program does not have state");
  }
  decode(e) {
    throw new Error("Token Bridge program does not have state");
  }
}
class Ei {
  constructor(e) {
  }
  encode(e, n) {
    throw new Error("Token Bridge program does not have user-defined types");
  }
  decode(e, n) {
    throw new Error("Token Bridge program does not have user-defined types");
  }
}
class Pi {
  constructor(e) {
    B(this, "instruction");
    B(this, "accounts");
    B(this, "state");
    B(this, "events");
    B(this, "types");
    this.instruction = new pi(e), this.accounts = new gi(e), this.state = new vi(e), this.events = new mi(e), this.types = new Ei(e);
  }
}
const or = {
  version: "0.1.0",
  name: "wormhole",
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
          name: "config",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "rent",
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
          name: "wormhole",
          type: "publicKey"
        }
      ]
    },
    {
      name: "attestToken",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wrappedMeta",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "splMetadata",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "wormholeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        }
      ]
    },
    {
      name: "completeNative",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "claim",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "endpoint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "to",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "toFees",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custody",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "custodySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "completeWrapped",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "claim",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "endpoint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "to",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "toFees",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wrappedMeta",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "mintAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "transferWrapped",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "from",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "fromOwner",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wrappedMeta",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "authoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "wormholeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "fee",
          type: "u64"
        },
        {
          name: "targetAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "targetChain",
          type: "u16"
        }
      ]
    },
    {
      name: "transferNative",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "from",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custody",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "authoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "custodySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "wormholeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "fee",
          type: "u64"
        },
        {
          name: "targetAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "targetChain",
          type: "u16"
        }
      ]
    },
    {
      name: "registerChain",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "endpoint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "claim",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "createWrapped",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "endpoint",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "claim",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wrappedMeta",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "splMetadata",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mintAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "splMetadataProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "upgradeContract",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "claim",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "upgradeAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "spill",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "implementation",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "programData",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "tokenBridgeProgram",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "bpfLoaderUpgradeable",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "transferWrappedWithPayload",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "from",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "fromOwner",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wrappedMeta",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "authoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "wormholeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "sender",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "targetAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "targetChain",
          type: "u16"
        },
        {
          name: "payload",
          type: "bytes"
        },
        {
          name: "cpiProgramId",
          type: {
            option: "publicKey"
          }
        }
      ]
    },
    {
      name: "transferNativeWithPayload",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "from",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "custody",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "authoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "custodySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "wormholeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "sender",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "targetAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "targetChain",
          type: "u16"
        },
        {
          name: "payload",
          type: "bytes"
        },
        {
          name: "cpiProgramId",
          type: {
            option: "publicKey"
          }
        }
      ]
    }
  ],
  accounts: []
};
function Ri(t, e) {
  return new Cn(or, new d(t), e === void 0 ? { connection: null } : e, xi());
}
function oe(t, e) {
  return Ri(t, xr(e));
}
function xi() {
  return new Pi(or);
}
const Ze = class Ze {
  constructor(e, n, r) {
    B(this, "address");
    B(this, "verified");
    B(this, "share");
    this.address = new d(e), this.verified = n, this.share = r;
  }
  serialize() {
    const e = A.Buffer.alloc(Ze.size);
    return e.write(this.address.toBuffer().toString("hex"), 0, "hex"), this.verified && e.writeUInt8(1, 32), e.writeUInt8(this.share, 33), e;
  }
  static deserialize(e) {
    const n = e.subarray(0, 32), r = e.readUInt8(32) > 0, s = e.readUInt8(33);
    return new Ze(n, r, s);
  }
};
B(Ze, "size", 34);
let Se = Ze;
class wt {
  constructor(e, n, r, s, i) {
    B(this, "name");
    B(this, "symbol");
    B(this, "uri");
    B(this, "sellerFeeBasisPoints");
    B(this, "creators");
    this.name = e, this.symbol = n, this.uri = r, this.sellerFeeBasisPoints = s, this.creators = i;
  }
  serialize() {
    const e = this.name.length, n = this.symbol.length, r = this.uri.length, s = this.creators, [i, a] = (() => {
      if (s === null)
        return [0, 0];
      const u = s.length;
      return [u, 4 + u * Se.size];
    })(), o = A.Buffer.alloc(15 + e + n + r + a);
    if (o.writeUInt32LE(e, 0), o.write(this.name, 4), o.writeUInt32LE(n, 4 + e), o.write(this.symbol, 8 + e), o.writeUInt32LE(r, 8 + e + n), o.write(this.uri, 12 + e + n), o.writeUInt16LE(this.sellerFeeBasisPoints, 12 + e + n + r), s === null)
      o.writeUInt8(0, 14 + e + n + r);
    else {
      o.writeUInt8(1, 14 + e + n + r), o.writeUInt32LE(i, 15 + e + n + r);
      for (let u = 0; u < i; ++u) {
        const l = s.at(u), y = 19 + e + n + r + u * Se.size;
        o.write(l.serialize().toString("hex"), y, "hex");
      }
    }
    return o;
  }
  static deserialize(e) {
    const n = e.readUInt32LE(0), r = e.subarray(4, 4 + n).toString(), s = e.readUInt32LE(4 + n), i = e.subarray(8 + n, 8 + n + s).toString(), a = e.readUInt32LE(8 + n + s), o = e.subarray(12 + n + s, 12 + n + s + a).toString(), u = e.readUInt16LE(12 + n + s + a), l = e.readUInt8(14 + n + s + a), y = (() => {
      if (l == 0)
        return null;
      const k = [], b = e.readUInt32LE(15 + n + s + a);
      for (let T = 0; T < b; ++T) {
        const I = 19 + n + s + a + T * Se.size;
        k.push(Se.deserialize(e.subarray(I, I + Se.size)));
      }
      return k;
    })();
    return new wt(r, i, o, u, y);
  }
}
class ut extends wt {
  constructor(n, r, s, i, a, o) {
    super(n, r, s, i, a);
    B(this, "isMutable");
    this.isMutable = o;
  }
  static serialize(n, r, s, i, a, o) {
    return new ut(n, r, s, i, a, o).serialize();
  }
  static serializeInstructionData(n, r, s, i, a, o) {
    return A.Buffer.concat([
      A.Buffer.alloc(1, 0),
      ut.serialize(n, r, s, i, a, o)
    ]);
  }
  serialize() {
    return A.Buffer.concat([
      super.serialize(),
      A.Buffer.alloc(1, this.isMutable ? 1 : 0)
    ]);
  }
}
const dt = class dt {
  /**
   * @internal
   */
  constructor() {
  }
  static createMetadataAccounts(e, n, r, s, i, a, o = !1, u, l, y, k = !1, b = St(n)) {
    const T = [
      gr(b, !1),
      Ce(n, !1),
      Ce(r, !0),
      Ce(e, !0),
      Ce(a, o),
      Ce(D.programId, !1),
      Ce(ie, !1)
    ], I = ut.serializeInstructionData(s, i, u === void 0 ? "" : u, y === void 0 ? 0 : y, l === void 0 ? null : l, k);
    return {
      programId: dt.programId,
      keys: T,
      data: I
    };
  }
};
/**
 * Public key that identifies the SPL Token Metadata program
 */
B(dt, "programId", new d("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"));
let Ye = dt;
function St(t) {
  return L([
    A.Buffer.from("metadata"),
    Ye.programId.toBuffer(),
    new d(t).toBuffer()
  ], Ye.programId);
}
var kn;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.EditionV1 = 1] = "EditionV1", t[t.MasterEditionV1 = 2] = "MasterEditionV1", t[t.ReservationListV1 = 3] = "ReservationListV1", t[t.MetadataV1 = 4] = "MetadataV1", t[t.ReservationListV2 = 5] = "ReservationListV2", t[t.MasterEditionV2 = 6] = "MasterEditionV2", t[t.EditionMarker = 7] = "EditionMarker";
})(kn || (kn = {}));
class jt {
  constructor(e, n, r, s, i, a) {
    B(this, "key");
    B(this, "updateAuthority");
    B(this, "mint");
    B(this, "data");
    B(this, "primarySaleHappened");
    B(this, "isMutable");
    this.key = e, this.updateAuthority = new d(n), this.mint = new d(r), this.data = s, this.primarySaleHappened = i, this.isMutable = a;
  }
  static deserialize(e) {
    const n = e.readUInt8(0), r = e.subarray(1, 33), s = e.subarray(33, 65), i = wt.deserialize(e.subarray(65)), a = i.serialize().length, o = e.readUInt8(65 + a) > 0, u = e.readUInt8(66 + a) > 0;
    return new jt(n, r, s, i, o, u);
  }
}
async function oa(t, e, n) {
  return t.getAccountInfo(St(e), n).then((r) => jt.deserialize(lt(r)));
}
function Wi(t, e, n, r, s, i, a) {
  const o = oe(e, t).methods.attestToken(a);
  return console.log(bn(e, n, r, s, i)), o._ixFn(...o._args, {
    accounts: bn(e, n, r, s, i),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function bn(t, e, n, r, s) {
  const { bridge: i, emitter: a, sequence: o, feeCollector: u, clock: l, rent: y, systemProgram: k } = mr(e, n, s, t);
  return {
    payer: new d(n),
    config: J(t),
    mint: new d(r),
    wrappedMeta: Ie(t, r),
    splMetadata: St(r),
    wormholeBridge: i,
    wormholeMessage: new d(s),
    wormholeEmitter: a,
    wormholeSequence: o,
    wormholeFeeCollector: u,
    clock: l,
    rent: y,
    systemProgram: k,
    wormholeProgram: new d(e)
  };
}
function An(t, e, n, r, s, i) {
  const a = oe(e, t).methods.completeNative();
  return a._ixFn(...a._args, {
    accounts: _i(e, n, r, s, i),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function _i(t, e, n, r, s) {
  const i = new d(r.payload.token.address.toUint8Array());
  return {
    payer: new d(n),
    config: J(t),
    vaa: be(e, A.Buffer.from(r.hash)),
    claim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    endpoint: ze(t, x(r.emitterChain), r.emitterAddress.toUint8Array()),
    to: new d(r.payload.to.address.toUint8Array()),
    toFees: new d(s === void 0 ? r.payload.to.address.toUint8Array() : s),
    custody: pt(t, i),
    mint: i,
    custodySigner: nt(t),
    rent: ie,
    systemProgram: D.programId,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
function Ni(t, e, n, r, s, i) {
  const a = oe(e, t).methods.completeWrapped();
  return a._ixFn(...a._args, {
    accounts: Ui(e, n, r, s, i),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Ui(t, e, n, r, s) {
  const i = Oe(t, x(r.payload.token.chain), r.payload.token.address.toUint8Array());
  return {
    payer: new d(n),
    config: J(t),
    vaa: be(e, A.Buffer.from(r.hash)),
    claim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    endpoint: ze(t, x(r.emitterChain), r.emitterAddress.toUint8Array()),
    to: new d(r.payload.to.address.toUint8Array()),
    toFees: new d(s === void 0 ? r.payload.to.address.toUint8Array() : s),
    mint: i,
    wrappedMeta: Ie(t, i),
    mintAuthority: yt(t),
    rent: ie,
    systemProgram: D.programId,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
function zi(t, e, n, r, s) {
  const i = oe(e, t).methods.createWrapped();
  return i._ixFn(...i._args, {
    accounts: Fi(e, n, r, s),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Fi(t, e, n, r) {
  const s = Oe(t, x(r.payload.token.chain), r.payload.token.address.toUint8Array());
  return {
    payer: new d(n),
    config: J(t),
    endpoint: ze(t, x(r.emitterChain), r.emitterAddress.toUint8Array()),
    vaa: be(e, A.Buffer.from(r.hash)),
    claim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    mint: s,
    wrappedMeta: Ie(t, s),
    splMetadata: St(s),
    mintAuthority: yt(t),
    rent: ie,
    systemProgram: D.programId,
    tokenProgram: U,
    splMetadataProgram: Ye.programId,
    wormholeProgram: new d(e)
  };
}
function ca(t, e, n) {
  const r = oe(t).methods.initialize(n);
  return r._ixFn(...r._args, {
    accounts: Oi(t, e),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Oi(t, e) {
  return {
    payer: new d(e),
    config: J(t),
    rent: ie,
    systemProgram: D.programId
  };
}
function ua(t, e, n, r) {
  const s = oe(t).methods.registerChain();
  return s._ixFn(...s._args, {
    accounts: Li(t, e, n, r),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Li(t, e, n, r) {
  return {
    payer: new d(n),
    config: J(t),
    endpoint: ze(t, x(r.payload.foreignChain), r.payload.foreignAddress.toUint8Array()),
    vaa: be(e, A.Buffer.from(r.hash)),
    claim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    rent: ie,
    systemProgram: D.programId,
    wormholeProgram: new d(e)
  };
}
function da(t, e, n, r, s) {
  const i = oe(t).methods.upgradeContract();
  return i._ixFn(...i._args, {
    accounts: Ki(t, e, n, r, s),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Ki(t, e, n, r, s) {
  return {
    payer: new d(n),
    vaa: be(e, A.Buffer.from(r.hash)),
    claim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    upgradeAuthority: pr(t),
    spill: new d(s === void 0 ? n : s),
    implementation: new d(r.payload.newContract),
    programData: yr(t),
    tokenBridgeProgram: new d(t),
    rent: ie,
    clock: Xr,
    bpfLoaderUpgradeable: wr.programId,
    systemProgram: D.programId
  };
}
function Mn(t, e, n, r, s, i, a, o, u, l, y, k) {
  const b = oe(e, t).methods.transferNative(o, u, l, A.Buffer.from(y), k);
  return b._ixFn(...b._args, {
    accounts: qi(e, n, r, s, i, a),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function qi(t, e, n, r, s, i) {
  const { wormholeBridge: a, wormholeMessage: o, wormholeEmitter: u, wormholeSequence: l, wormholeFeeCollector: y, clock: k, rent: b, systemProgram: T } = ft(t, e, n, r);
  return {
    payer: new d(n),
    config: J(t),
    from: new d(s),
    mint: new d(i),
    custody: pt(t, i),
    authoritySigner: Fe(t),
    custodySigner: nt(t),
    wormholeBridge: a,
    wormholeMessage: o,
    wormholeEmitter: u,
    wormholeSequence: l,
    wormholeFeeCollector: y,
    clock: k,
    rent: b,
    systemProgram: T,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
function Tn(t, e, n, r, s, i, a, o, u, l, y, k) {
  const b = oe(e, t).methods.transferNativeWithPayload(o, u, A.Buffer.from(l), y, A.Buffer.from(k), null);
  return b._ixFn(...b._args, {
    accounts: cr(e, n, r, s, i, a),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function cr(t, e, n, r, s, i, a) {
  const { wormholeBridge: o, wormholeMessage: u, wormholeEmitter: l, wormholeSequence: y, wormholeFeeCollector: k, clock: b, rent: T, systemProgram: I } = ft(t, e, n, r);
  return {
    payer: new d(n),
    config: J(t),
    from: new d(s),
    mint: new d(i),
    custody: pt(t, i),
    authoritySigner: Fe(t),
    custodySigner: nt(t),
    wormholeBridge: o,
    wormholeMessage: u,
    wormholeEmitter: l,
    wormholeSequence: y,
    wormholeFeeCollector: k,
    clock: b,
    sender: new d(a === void 0 ? n : Vt(a)),
    rent: T,
    systemProgram: I,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
function Di(t, e, n, r, s, i, a, o, u, l, y, k, b, T) {
  const I = oe(e, t).methods.transferWrapped(l, y, k, A.Buffer.from(b), T);
  return I._ixFn(...I._args, {
    accounts: Vi(e, n, r, s, i, a, o, u),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Vi(t, e, n, r, s, i, a, o) {
  const u = Oe(t, a, o), { wormholeBridge: l, wormholeMessage: y, wormholeEmitter: k, wormholeSequence: b, wormholeFeeCollector: T, clock: I, rent: w, systemProgram: v } = ft(t, e, n, r);
  return {
    payer: new d(n),
    config: J(t),
    from: new d(s),
    fromOwner: new d(i),
    mint: u,
    wrappedMeta: Ie(t, u),
    authoritySigner: Fe(t),
    wormholeBridge: l,
    wormholeMessage: y,
    wormholeEmitter: k,
    wormholeSequence: b,
    wormholeFeeCollector: T,
    clock: I,
    rent: w,
    systemProgram: v,
    wormholeProgram: new d(e),
    tokenProgram: U
  };
}
function Hi(t, e, n, r, s, i, a, o, u, l, y, k, b, T) {
  const I = oe(e, t).methods.transferWrappedWithPayload(l, y, A.Buffer.from(k), b, A.Buffer.from(T), null);
  return I._ixFn(...I._args, {
    accounts: ur(e, n, r, s, i, a, o, u),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function ur(t, e, n, r, s, i, a, o, u) {
  const l = Oe(t, a, o), { wormholeBridge: y, wormholeMessage: k, wormholeEmitter: b, wormholeSequence: T, wormholeFeeCollector: I, clock: w, rent: v, systemProgram: R } = ft(t, e, n, r);
  return {
    payer: new d(n),
    config: J(t),
    from: new d(s),
    fromOwner: new d(i),
    mint: l,
    wrappedMeta: Ie(t, l),
    authoritySigner: Fe(t),
    wormholeBridge: y,
    wormholeMessage: k,
    wormholeEmitter: b,
    wormholeSequence: T,
    wormholeFeeCollector: I,
    clock: w,
    sender: new d(u === void 0 ? n : Vt(u)),
    rent: v,
    systemProgram: R,
    wormholeProgram: new d(e),
    tokenProgram: U
  };
}
function la(t, e, n) {
  const { wormholeEmitter: r, wormholeBridge: s, wormholeFeeCollector: i, wormholeSequence: a } = Sr(e, n);
  return {
    tokenBridgeConfig: J(e),
    tokenBridgeAuthoritySigner: Fe(e),
    tokenBridgeCustodySigner: nt(e),
    tokenBridgeMintAuthority: yt(e),
    tokenBridgeSender: Vt(t),
    tokenBridgeRedeemer: Ht(t),
    wormholeBridge: s,
    tokenBridgeEmitter: r,
    wormholeFeeCollector: i,
    tokenBridgeSequence: a
  };
}
function Gi(t, e, n, r, s, i, a) {
  const o = cr(e, n, r, s, i, a, t);
  return {
    payer: o.payer,
    tokenBridgeConfig: o.config,
    fromTokenAccount: o.from,
    mint: o.mint,
    tokenBridgeCustody: o.custody,
    tokenBridgeAuthoritySigner: o.authoritySigner,
    tokenBridgeCustodySigner: o.custodySigner,
    wormholeBridge: o.wormholeBridge,
    wormholeMessage: o.wormholeMessage,
    tokenBridgeEmitter: o.wormholeEmitter,
    tokenBridgeSequence: o.wormholeSequence,
    wormholeFeeCollector: o.wormholeFeeCollector,
    clock: o.clock,
    tokenBridgeSender: o.sender,
    rent: o.rent,
    systemProgram: o.systemProgram,
    tokenProgram: o.tokenProgram,
    wormholeProgram: o.wormholeProgram
  };
}
function ji(t, e, n, r, s, i, a, o, u) {
  const l = ur(e, n, r, s, i, u === void 0 ? t : u, a, o, t);
  return {
    payer: l.payer,
    tokenBridgeConfig: l.config,
    fromTokenAccount: l.from,
    fromTokenAccountOwner: l.fromOwner,
    tokenBridgeWrappedMint: l.mint,
    tokenBridgeWrappedMeta: l.wrappedMeta,
    tokenBridgeAuthoritySigner: l.authoritySigner,
    wormholeBridge: l.wormholeBridge,
    wormholeMessage: l.wormholeMessage,
    tokenBridgeEmitter: l.wormholeEmitter,
    tokenBridgeSequence: l.wormholeSequence,
    wormholeFeeCollector: l.wormholeFeeCollector,
    clock: l.clock,
    tokenBridgeSender: l.sender,
    rent: l.rent,
    systemProgram: l.systemProgram,
    tokenProgram: l.tokenProgram,
    wormholeProgram: l.wormholeProgram
  };
}
function fa(t, e, n, r, s) {
  const i = new d(r.payload.token.address.toUint8Array()), a = new d(r.payload.to.address.toUint8Array());
  return {
    payer: new d(n),
    tokenBridgeConfig: J(t),
    vaa: be(e, A.Buffer.from(r.hash)),
    tokenBridgeClaim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    tokenBridgeForeignEndpoint: ze(t, x(r.emitterChain), r.emitterAddress.toUint8Array()),
    toTokenAccount: new d(s),
    tokenBridgeRedeemer: Ht(a),
    toFeesTokenAccount: new d(s),
    tokenBridgeCustody: pt(t, i),
    mint: i,
    tokenBridgeCustodySigner: nt(t),
    rent: ie,
    systemProgram: D.programId,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
function ha(t, e, n, r, s) {
  const i = Oe(t, x(r.payload.token.chain), r.payload.token.address.toUint8Array()), a = new d(r.payload.to.address.toUint8Array());
  return {
    payer: new d(n),
    tokenBridgeConfig: J(t),
    vaa: be(e, A.Buffer.from(r.hash)),
    tokenBridgeClaim: Ae(t, r.emitterAddress.toUint8Array(), x(r.emitterChain), r.sequence),
    tokenBridgeForeignEndpoint: ze(t, x(r.emitterChain), r.emitterAddress.toUint8Array()),
    toTokenAccount: new d(s),
    tokenBridgeRedeemer: Ht(a),
    toFeesTokenAccount: new d(s),
    tokenBridgeWrappedMint: i,
    tokenBridgeWrappedMeta: Ie(t, i),
    tokenBridgeMintAuthority: yt(t),
    rent: ie,
    systemProgram: D.programId,
    tokenProgram: U,
    wormholeProgram: new d(e)
  };
}
const Zi = {
  version: "0.1.0",
  name: "token_bridge_relayer",
  constants: [
    {
      name: "SEED_PREFIX_BRIDGED",
      type: "bytes",
      value: "[98, 114, 105, 100, 103, 101, 100]"
    },
    {
      name: "SEED_PREFIX_TMP",
      type: "bytes",
      value: "[116, 109, 112]"
    },
    {
      name: "SWAP_RATE_PRECISION",
      type: "u32",
      value: "100_000_000"
    }
  ],
  instructions: [
    {
      name: "initialize",
      docs: [
        "This instruction is be used to generate your program's config.",
        "And for convenience, we will store Wormhole-related PDAs in the",
        "config so we can verify these accounts with a simple == constraint.",
        "# Arguments",
        "",
        "* `ctx`           - `Initialize` context",
        "* `fee_recipient` - Recipient of all relayer fees and swap proceeds",
        "* `assistant`     - Privileged key to manage certain accounts"
      ],
      accounts: [
        {
          name: "owner",
          isMut: !0,
          isSigner: !0,
          docs: ["Deployer of the program."]
        },
        {
          name: "senderConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Sender Config account, which saves program data useful for other",
            "instructions, specifically for outbound transfers. Also saves the payer",
            "of the [`initialize`](crate::initialize) instruction as the program's",
            "owner."
          ]
        },
        {
          name: "redeemerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Redeemer Config account, which saves program data useful for other",
            "instructions, specifically for inbound transfers. Also saves the payer",
            "of the [`initialize`](crate::initialize) instruction as the program's",
            "owner."
          ]
        },
        {
          name: "ownerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Owner config account, which saves the owner, assistant and",
            "pending owner keys. This account is used to manage the ownership of the",
            "program."
          ]
        },
        {
          name: "tokenBridgeEmitter",
          isMut: !1,
          isSigner: !1,
          docs: [
            "that holds data; it is purely just a signer for posting Wormhole",
            "messages on behalf of the Token Bridge program."
          ]
        },
        {
          name: "tokenBridgeSequence",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Token Bridge emitter's sequence account. Like with all Wormhole",
            "emitters, this account keeps track of the sequence number of the last",
            "posted message."
          ]
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1,
          docs: ["System program."]
        },
        {
          name: "programData",
          isMut: !0,
          isSigner: !1,
          docs: [
            "upgrade authority. We check this PDA address just in case there is another program that this",
            "deployer has deployed.",
            "",
            "NOTE: Set upgrade authority is scary because any public key can be used to set as the",
            "authority."
          ]
        },
        {
          name: "bpfLoaderUpgradeableProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "feeRecipient",
          type: "publicKey"
        },
        {
          name: "assistant",
          type: "publicKey"
        }
      ]
    },
    {
      name: "registerForeignContract",
      docs: [
        "This instruction registers a new foreign contract (from another",
        "network) and saves the emitter information in a ForeignEmitter account.",
        "This instruction is owner-only, meaning that only the owner of the",
        "program (defined in the [Config] account) can add and update foreign",
        "contracts.",
        "",
        "# Arguments",
        "",
        "* `ctx`     - `RegisterForeignContract` context",
        "* `chain`   - Wormhole Chain ID",
        "* `address` - Wormhole Emitter Address",
        "* `relayer_fee` - Relayer fee scaled by the `relayer_fee_precision`"
      ],
      accounts: [
        {
          name: "owner",
          isMut: !0,
          isSigner: !0,
          docs: [
            "Owner of the program set in the [`SenderConfig`] account. Signer for",
            "creating [`ForeignContract`] account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Read-only."
          ]
        },
        {
          name: "foreignContract",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Foreign Contract account. Create this account if an emitter has not been",
            "registered yet for this Wormhole chain ID. If there already is a",
            "contract address saved in this account, overwrite it."
          ]
        },
        {
          name: "tokenBridgeForeignEndpoint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Token Bridge foreign endpoint. This account should really be one",
            "endpoint per chain, but Token Bridge's PDA allows for multiple",
            "endpoints for each chain. We store the proper endpoint for the",
            "emitter chain."
          ]
        },
        {
          name: "tokenBridgeProgram",
          isMut: !1,
          isSigner: !1,
          docs: ["Token Bridge program."]
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1,
          docs: ["System program."]
        }
      ],
      args: [
        {
          name: "chain",
          type: "u16"
        },
        {
          name: "address",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "relayerFee",
          type: "u64"
        }
      ]
    },
    {
      name: "registerToken",
      docs: [
        "This instruction registers a new token and saves the initial `swap_rate`",
        "and `max_native_token_amount` in a RegisteredToken account.",
        "This instruction is owner-only, meaning that only the owner of the",
        "program (defined in the [Config] account) can register a token.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `RegisterToken` context",
        "* `swap_rate`:",
        "- USD conversion rate scaled by the `swap_rate_precision`. For example,",
        "- if the conversion rate is $15 and the `swap_rate_precision` is",
        "- 1000000, the `swap_rate` should be set to 15000000.",
        "* `max_native_swap_amount`:",
        "- Maximum amount of native tokens that can be swapped for this token",
        "- on this chain."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !0,
          isSigner: !0,
          docs: [
            "Owner of the program set in the [`SenderConfig`] account. Signer for",
            "creating [`ForeignContract`] account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Read-only."
          ]
        },
        {
          name: "registeredToken",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Registered Token account. This account stores information about the",
            "token, including the swap rate and max native swap amount. Create this",
            "account if the mint has not been registered yet. Mutable."
          ]
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over to the",
            "foreign contract."
          ]
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1,
          docs: ["System program."]
        }
      ],
      args: [
        {
          name: "swapRate",
          type: "u64"
        },
        {
          name: "maxNativeSwapAmount",
          type: "u64"
        }
      ]
    },
    {
      name: "deregisterToken",
      docs: [
        "This instruction deregisters a token by closing the existing",
        "`RegisteredToken` account for a particular mint. This instruction is",
        "owner-only, meaning that only the owner of the program (defined in the",
        "[Config] account) can deregister a token."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: [
            "Owner of the program set in the [`SenderConfig`] account. Signer for",
            "closing [`RegisteredToken`] account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Read-only."
          ]
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over to the",
            "foreign contract."
          ]
        },
        {
          name: "registeredToken",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Registered Token account. This account stores information about the",
            "token, including the swap rate and max native swap amount. This account",
            "also determines if a mint is registered or not."
          ]
        }
      ],
      args: []
    },
    {
      name: "updateRelayerFee",
      docs: [
        "This instruction updates the `relayer_fee` in the `ForeignContract` account.",
        "The `relayer_fee` is scaled by the `relayer_fee_precision`. For example,",
        "if the `relayer_fee` is $15 and the `relayer_fee_precision` is 1000000,",
        "the `relayer_fee` should be set to 15000000. This instruction can",
        "only be called by the owner or assistant, which are defined in the",
        "[OwnerConfig] account.",
        "",
        "# Arguments",
        "",
        "* `ctx`   - `UpdateRelayerFee` context",
        "* `chain` - Wormhole Chain ID",
        "* `fee`   - Relayer fee scaled by the `relayer_fee_precision`"
      ],
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0,
          docs: ["Signer of the transaction. Must be the owner or assistant."]
        },
        {
          name: "ownerConfig",
          isMut: !1,
          isSigner: !1,
          docs: [
            "The owner_config is used when updating the swap rate",
            "so that the assistant key can be used in addition to the",
            "owner key."
          ]
        },
        {
          name: "foreignContract",
          isMut: !0,
          isSigner: !1,
          docs: [
            "This account holds the USD denominated relayer fee for the specified",
            "`chain`. This account is used to determine the cost of relaying",
            "a transfer to a target chain. If there already is a relayer fee",
            "saved in this account, overwrite it."
          ]
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1,
          docs: ["System program."]
        }
      ],
      args: [
        {
          name: "chain",
          type: "u16"
        },
        {
          name: "fee",
          type: "u64"
        }
      ]
    },
    {
      name: "updateRelayerFeePrecision",
      docs: [
        "This instruction updates the `relayer_fee_precision` in the",
        "`SenderConfig` and `RedeemerConfig` accounts. The `relayer_fee_precision`",
        "is used to scale the `relayer_fee`. This instruction is owner-only,",
        "meaning that only the owner of the program (defined in the [Config]",
        "account) can register a token.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `UpdatePrecision` context",
        "* `relayer_fee_precision` - Precision used to scale the relayer fee."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: [
            "Owner of the program set in the [`RedeemerConfig`] and [`SenderConfig`] account."
          ]
        },
        {
          name: "redeemerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Redeemer Config account. This program requires that the `owner`",
            "specified in the context equals the pubkey specified in this account.",
            "Mutable."
          ]
        },
        {
          name: "senderConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner`",
            "specified in the context equals the pubkey specified in this account.",
            "Mutable. The `owner` check is redundant here, but we keep it as an",
            "extra protection for future changes to the context. Mutable."
          ]
        }
      ],
      args: [
        {
          name: "relayerFeePrecision",
          type: "u32"
        }
      ]
    },
    {
      name: "updateSwapRate",
      docs: [
        "This instruction updates the `swap_rate` in the `RegisteredToken`",
        "account. This instruction can only be called by the owner or",
        "assistant, which are defined in the [OwnerConfig] account.",
        "",
        "# Arguments",
        "",
        "* `ctx`       - `UpdateSwapRate` context",
        "* `swap_rate` - USD conversion rate for the specified token."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: [
            "The signer of the transaction. Must be the owner or assistant."
          ]
        },
        {
          name: "ownerConfig",
          isMut: !1,
          isSigner: !1,
          docs: [
            "The owner_config is used when updating the swap rate so that the",
            "assistant key can be used in additional to the owner key."
          ]
        },
        {
          name: "registeredToken",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Registered Token account. This account stores information about the",
            "token, including the swap rate and max native swap amount. The program",
            "will modify this account to update the swap rate. Mutable."
          ]
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over to the",
            "foreign contract."
          ]
        }
      ],
      args: [
        {
          name: "swapRate",
          type: "u64"
        }
      ]
    },
    {
      name: "updateMaxNativeSwapAmount",
      docs: [
        "This instruction updates the `max_native_swap_amount` in the",
        "`RegisteredToken` account. This instruction is owner-only,",
        "meaning that only the owner of the program (defined in the [Config]",
        "account) can register a token.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `UpdateMaxNativeSwapAmount` context",
        "* `max_native_swap_amount`:",
        "- Maximum amount of native tokens that can be swapped for this token",
        "- on this chain."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: [
            "Owner of the program set in the [`SenderConfig`] account. Signer for",
            "creating [`ForeignContract`] account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Read-only."
          ]
        },
        {
          name: "registeredToken",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Registered Token account. This account stores information about the",
            "token, including the swap rate and max native swap amount. The program",
            "will modify this account when the swap rate or max native swap amount",
            "changes. Mutable."
          ]
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over to the",
            "foreign contract."
          ]
        }
      ],
      args: [
        {
          name: "maxNativeSwapAmount",
          type: "u64"
        }
      ]
    },
    {
      name: "setPauseForTransfers",
      docs: [
        "This instruction updates the `paused` boolean in the `SenderConfig`",
        "account. This instruction is owner-only, meaning that only the owner",
        "of the program (defined in the [Config] account) can pause outbound",
        "transfers.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `PauseOutboundTransfers` context",
        "* `paused` - Boolean indicating whether outbound transfers are paused."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: ["Owner of the program set in the [`SenderConfig`] account."]
        },
        {
          name: "config",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Sender Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Mutable."
          ]
        }
      ],
      args: [
        {
          name: "paused",
          type: "bool"
        }
      ]
    },
    {
      name: "submitOwnershipTransferRequest",
      docs: [
        "This instruction sets the `pending_owner` field in the `OwnerConfig`",
        "account. This instruction is owner-only, meaning that only the owner",
        "of the program (defined in the [Config] account) can submit an",
        "ownership transfer request.",
        "",
        "# Arguments",
        "",
        "* `ctx`       - `ManageOwnership` context",
        "* `new_owner` - Pubkey of the pending owner."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: ["Owner of the program set in the [`OwnerConfig`] account."]
        },
        {
          name: "ownerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Owner Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Mutable."
          ]
        }
      ],
      args: [
        {
          name: "newOwner",
          type: "publicKey"
        }
      ]
    },
    {
      name: "confirmOwnershipTransferRequest",
      docs: [
        "This instruction confirms that the `pending_owner` is the signer of",
        "the transaction and updates the `owner` field in the `SenderConfig`,",
        "`RedeemerConfig`, and `OwnerConfig` accounts."
      ],
      accounts: [
        {
          name: "pendingOwner",
          isMut: !1,
          isSigner: !0,
          docs: [
            "Must be the pending owner of the program set in the [`OwnerConfig`]",
            "account."
          ]
        },
        {
          name: "ownerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Owner Config account. This program requires that the `pending_owner`",
            "specified in the context equals the pubkey specified in this account."
          ]
        },
        {
          name: "senderConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Sender Config account. This instruction will update the `owner`",
            "specified in this account to the `pending_owner` specified in the",
            "[`OwnerConfig`] account. Mutable."
          ]
        },
        {
          name: "redeemerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Redeemer Config account. This instruction will update the `owner`",
            "specified in this account to the `pending_owner` specified in the",
            "[`OwnerConfig`] account. Mutable."
          ]
        }
      ],
      args: []
    },
    {
      name: "cancelOwnershipTransferRequest",
      docs: [
        "This instruction cancels the ownership transfer request by setting",
        "the `pending_owner` field in the `OwnerConfig` account to `None`.",
        "This instruction is owner-only, meaning that only the owner of the",
        "program (defined in the [Config] account) can cancel an ownership",
        "transfer request."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: ["Owner of the program set in the [`OwnerConfig`] account."]
        },
        {
          name: "ownerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Owner Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Mutable."
          ]
        }
      ],
      args: []
    },
    {
      name: "updateAssistant",
      docs: [
        "This instruction updates the `assistant` field in the `OwnerConfig`",
        "account. This instruction is owner-only, meaning that only the owner",
        "of the program (defined in the [Config] account) can update the",
        "assistant.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `ManageOwnership` context",
        "* `new_assistant` - Pubkey of the new assistant."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: ["Owner of the program set in the [`OwnerConfig`] account."]
        },
        {
          name: "ownerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Owner Config account. This program requires that the `owner` specified",
            "in the context equals the pubkey specified in this account. Mutable."
          ]
        }
      ],
      args: [
        {
          name: "newAssistant",
          type: "publicKey"
        }
      ]
    },
    {
      name: "updateFeeRecipient",
      docs: [
        "This instruction updates the `fee_recipient` field in the `RedeemerConfig`",
        "account. This instruction is owner-only, meaning that only the owner",
        "of the program (defined in the [Config] account) can update the",
        "fee recipient.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `UpdateFeeRecipient` context",
        "* `new_fee_recipient` - Pubkey of the new fee recipient."
      ],
      accounts: [
        {
          name: "owner",
          isMut: !1,
          isSigner: !0,
          docs: ["Owner of the program set in the [`RedeemerConfig`] account."]
        },
        {
          name: "redeemerConfig",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Redeemer Config account, which saves program data useful for other",
            "instructions, specifically for inbound transfers. Also saves the payer",
            "of the [`initialize`](crate::initialize) instruction as the program's",
            "owner."
          ]
        }
      ],
      args: [
        {
          name: "newFeeRecipient",
          type: "publicKey"
        }
      ]
    },
    {
      name: "transferNativeTokensWithRelay",
      docs: [
        "This instruction is used to transfer native tokens from Solana to a",
        "foreign blockchain. The user can optionally specify a",
        "`to_native_token_amount` to swap some of the tokens for the native",
        "asset on the target chain. For a fee, an off-chain relayer will redeem",
        "the transfer on the target chain. If the user is transferring native",
        "SOL, the contract will automatically wrap the lamports into a WSOL.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `TransferNativeWithRelay` context",
        "* `amount` - Amount of tokens to send",
        "* `to_native_token_amount`:",
        "- Amount of tokens to swap for native assets on the target chain",
        "* `recipient_chain` - Chain ID of the target chain",
        "* `recipient_address` - Address of the target wallet on the target chain",
        "* `batch_id` - Nonce of Wormhole message",
        "* `wrap_native` - Whether to wrap native SOL"
      ],
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0,
          docs: [
            "Payer will pay Wormhole fee to transfer tokens and create temporary",
            "token account."
          ]
        },
        {
          name: "payerSequence",
          isMut: !0,
          isSigner: !1,
          docs: ["Used to keep track of payer's Wormhole sequence number."]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. Acts as the signer for the Token Bridge token",
            "transfer. Read-only."
          ]
        },
        {
          name: "foreignContract",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Foreign Contract account. Send tokens to the contract specified in this",
            "account. Funnily enough, the Token Bridge program does not have any",
            "requirements for outbound transfers for the recipient chain to be",
            "registered. This account provides extra protection against sending",
            "tokens to an unregistered Wormhole chain ID. Read-only."
          ]
        },
        {
          name: "mint",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over to the",
            "foreign contract. Mutable."
          ]
        },
        {
          name: "fromTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Payer's associated token account. We may want to make this a generic",
            "token account in the future."
          ]
        },
        {
          name: "registeredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tmpTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Program's temporary token account. This account is created before the",
            "instruction is invoked to temporarily take custody of the payer's",
            "tokens. When the tokens are finally bridged out, the token account",
            "will have zero balance and can be closed."
          ]
        },
        {
          name: "tokenBridgeConfig",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeCustody",
          isMut: !0,
          isSigner: !1,
          docs: [
            "account that holds this mint's balance. This account needs to be",
            "unchecked because a token account may not have been created for this",
            "mint yet. Mutable."
          ]
        },
        {
          name: "tokenBridgeAuthoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeCustodySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !1,
          docs: [
            "tokens transferred in this account for our program. Mutable."
          ]
        },
        {
          name: "tokenBridgeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "toNativeTokenAmount",
          type: "u64"
        },
        {
          name: "recipientChain",
          type: "u16"
        },
        {
          name: "recipientAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "batchId",
          type: "u32"
        },
        {
          name: "wrapNative",
          type: "bool"
        }
      ]
    },
    {
      name: "transferWrappedTokensWithRelay",
      docs: [
        "This instruction is used to transfer wrapped tokens from Solana to a",
        "foreign blockchain. The user can optionally specify a",
        "`to_native_token_amount` to swap some of the tokens for the native",
        "assets on the target chain. For a fee, an off-chain relayer will redeem",
        "the transfer on the target chain. This instruction should only be called",
        "when the user is transferring a wrapped token.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `TransferWrappedWithRelay` context",
        "* `amount` - Amount of tokens to send",
        "* `to_native_token_amount`:",
        "- Amount of tokens to swap for native assets on the target chain",
        "* `recipient_chain` - Chain ID of the target chain",
        "* `recipient_address` - Address of the target wallet on the target chain",
        "* `batch_id` - Nonce of Wormhole message"
      ],
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0,
          docs: ["Payer will pay Wormhole fee to transfer tokens."]
        },
        {
          name: "payerSequence",
          isMut: !0,
          isSigner: !1,
          docs: ["Used to keep track of payer's Wormhole sequence number."]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Sender Config account. Acts as the Token Bridge sender PDA. Mutable."
          ]
        },
        {
          name: "foreignContract",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Foreign Contract account. Send tokens to the contract specified in this",
            "account. Funnily enough, the Token Bridge program does not have any",
            "requirements for outbound transfers for the recipient chain to be",
            "registered. This account provides extra protection against sending",
            "tokens to an unregistered Wormhole chain ID. Read-only."
          ]
        },
        {
          name: "tokenBridgeWrappedMint",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Token Bridge wrapped mint info. This is the SPL token that will be",
            "bridged to the foreign contract. The wrapped mint PDA must agree",
            "with the native token's metadata. Mutable."
          ]
        },
        {
          name: "fromTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Payer's associated token account. We may want to make this a generic",
            "token account in the future."
          ]
        },
        {
          name: "registeredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tmpTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Program's temporary token account. This account is created before the",
            "instruction is invoked to temporarily take custody of the payer's",
            "tokens. When the tokens are finally bridged out, the token account",
            "will have zero balance and can be closed."
          ]
        },
        {
          name: "tokenBridgeWrappedMeta",
          isMut: !1,
          isSigner: !1,
          docs: [
            "about the token from its native chain:",
            "* Wormhole Chain ID",
            "* Token's native contract address",
            "* Token's native decimals"
          ]
        },
        {
          name: "tokenBridgeConfig",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeAuthoritySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeBridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeMessage",
          isMut: !0,
          isSigner: !1,
          docs: ["tokens transferred in this account."]
        },
        {
          name: "tokenBridgeEmitter",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeSequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeFeeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "clock",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "amount",
          type: "u64"
        },
        {
          name: "toNativeTokenAmount",
          type: "u64"
        },
        {
          name: "recipientChain",
          type: "u16"
        },
        {
          name: "recipientAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "batchId",
          type: "u32"
        }
      ]
    },
    {
      name: "completeNativeTransferWithRelay",
      docs: [
        "This instruction is used to redeem token transfers from foreign emitters.",
        "It takes custody of the released native tokens and sends the tokens to the",
        "encoded `recipient`. It pays the `fee_recipient` in the token",
        "denomination. If requested by the user, it will perform a swap with the",
        "off-chain relayer to provide the user with lamports. If the token",
        "being transferred is WSOL, the contract will unwrap the WSOL and send",
        "the lamports to the recipient and pay the relayer in lamports.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `CompleteNativeWithRelay` context",
        "* `vaa_hash` - Hash of the VAA that triggered the transfer"
      ],
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0,
          docs: [
            "Payer will pay Wormhole fee to transfer tokens and create temporary",
            "token account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Redeemer Config account. Acts as the Token Bridge redeemer, which signs",
            "for the complete transfer instruction. Read-only."
          ]
        },
        {
          name: "feeRecipientTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Fee recipient's token account. Must be an associated token account. Mutable."
          ]
        },
        {
          name: "foreignContract",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Foreign Contract account. The registered contract specified in this",
            "account must agree with the target address for the Token Bridge's token",
            "transfer. Read-only."
          ]
        },
        {
          name: "mint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Mint info. This is the SPL token that will be bridged over from the",
            "foreign contract. This must match the token address specified in the",
            "signed Wormhole message. Read-only."
          ]
        },
        {
          name: "recipientTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Recipient associated token account. The recipient authority check",
            "is necessary to ensure that the recipient is the intended recipient",
            "of the bridged tokens. Mutable."
          ]
        },
        {
          name: "recipient",
          isMut: !0,
          isSigner: !1,
          docs: [
            "transaction. This instruction verifies that the recipient key",
            "passed in this context matches the intended recipient in the vaa."
          ]
        },
        {
          name: "registeredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "nativeRegisteredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tmpTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Program's temporary token account. This account is created before the",
            "instruction is invoked to temporarily take custody of the payer's",
            "tokens. When the tokens are finally bridged in, the tokens will be",
            "transferred to the destination token accounts. This account will have",
            "zero balance and can be closed."
          ]
        },
        {
          name: "tokenBridgeConfig",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Verified Wormhole message account. The Wormhole program verified",
            "signatures and posted the account data here. Read-only."
          ]
        },
        {
          name: "tokenBridgeClaim",
          isMut: !0,
          isSigner: !1,
          docs: [
            "is true if the bridged assets have been claimed. If the transfer has",
            "not been redeemed, this account will not exist yet.",
            "",
            "NOTE: The Token Bridge program's claim account is only initialized when",
            "a transfer is redeemed (and the boolean value `true` is written as",
            "its data).",
            "",
            "The Token Bridge program will automatically fail if this transfer",
            "is redeemed again. But we choose to short-circuit the failure as the",
            "first evaluation of this instruction."
          ]
        },
        {
          name: "tokenBridgeForeignEndpoint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "endpoint per chain, but the PDA allows for multiple endpoints for each",
            "chain! We store the proper endpoint for the emitter chain."
          ]
        },
        {
          name: "tokenBridgeCustody",
          isMut: !0,
          isSigner: !1,
          docs: ["account that holds this mint's balance."]
        },
        {
          name: "tokenBridgeCustodySigner",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "vaaHash",
          type: {
            array: ["u8", 32]
          }
        }
      ]
    },
    {
      name: "completeWrappedTransferWithRelay",
      docs: [
        "This instruction is used to redeem token transfers from foreign emitters.",
        "It takes custody of the minted wrapped tokens and sends the tokens to the",
        "encoded `recipient`. It pays the `fee_recipient` in the wrapped-token",
        "denomination. If requested by the user, it will perform a swap with the",
        "off-chain relayer to provide the user with lamports.",
        "",
        "# Arguments",
        "",
        "* `ctx` - `CompleteWrappedWithRelay` context",
        "* `vaa_hash` - Hash of the VAA that triggered the transfer"
      ],
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0,
          docs: [
            "Payer will pay Wormhole fee to transfer tokens and create temporary",
            "token account."
          ]
        },
        {
          name: "config",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Redeemer Config account. Acts as the Token Bridge redeemer, which signs",
            "for the complete transfer instruction. Read-only."
          ]
        },
        {
          name: "feeRecipientTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Fee recipient's token account. Must be an associated token account. Mutable."
          ]
        },
        {
          name: "foreignContract",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Foreign Contract account. The registered contract specified in this",
            "account must agree with the target address for the Token Bridge's token",
            "transfer. Read-only."
          ]
        },
        {
          name: "tokenBridgeWrappedMint",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Token Bridge wrapped mint info. This is the SPL token that will be",
            "bridged from the foreign contract. The wrapped mint PDA must agree",
            "with the native token's metadata in the wormhole message. Mutable."
          ]
        },
        {
          name: "recipientTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Recipient associated token account. The recipient authority check",
            "is necessary to ensure that the recipient is the intended recipient",
            "of the bridged tokens. Mutable."
          ]
        },
        {
          name: "recipient",
          isMut: !0,
          isSigner: !1,
          docs: [
            "transaction. This instruction verifies that the recipient key",
            "passed in this context matches the intended recipient in the vaa."
          ]
        },
        {
          name: "registeredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "nativeRegisteredToken",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tmpTokenAccount",
          isMut: !0,
          isSigner: !1,
          docs: [
            "Program's temporary token account. This account is created before the",
            "instruction is invoked to temporarily take custody of the payer's",
            "tokens. When the tokens are finally bridged in, the tokens will be",
            "transferred to the destination token accounts. This account will have",
            "zero balance and can be closed."
          ]
        },
        {
          name: "tokenBridgeWrappedMeta",
          isMut: !1,
          isSigner: !1,
          docs: [
            "about the token from its native chain:",
            "* Wormhole Chain ID",
            "* Token's native contract address",
            "* Token's native decimals"
          ]
        },
        {
          name: "tokenBridgeConfig",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !1,
          isSigner: !1,
          docs: [
            "Verified Wormhole message account. The Wormhole program verified",
            "signatures and posted the account data here. Read-only."
          ]
        },
        {
          name: "tokenBridgeClaim",
          isMut: !0,
          isSigner: !1,
          docs: [
            "is true if the bridged assets have been claimed. If the transfer has",
            "not been redeemed, this account will not exist yet.",
            "",
            "NOTE: The Token Bridge program's claim account is only initialized when",
            "a transfer is redeemed (and the boolean value `true` is written as",
            "its data).",
            "",
            "The Token Bridge program will automatically fail if this transfer",
            "is redeemed again. But we choose to short-circuit the failure as the",
            "first evaluation of this instruction."
          ]
        },
        {
          name: "tokenBridgeForeignEndpoint",
          isMut: !1,
          isSigner: !1,
          docs: [
            "endpoint per chain, but the PDA allows for multiple endpoints for each",
            "chain! We store the proper endpoint for the emitter chain."
          ]
        },
        {
          name: "tokenBridgeMintAuthority",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "wormholeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenBridgeProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "tokenProgram",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "rent",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: [
        {
          name: "vaaHash",
          type: {
            array: ["u8", 32]
          }
        }
      ]
    }
  ],
  accounts: [
    {
      name: "foreignContract",
      docs: ["Foreign emitter account data."],
      type: {
        kind: "struct",
        fields: [
          {
            name: "chain",
            docs: ["Emitter chain. Cannot equal `1` (Solana's Chain ID)."],
            type: "u16"
          },
          {
            name: "address",
            docs: ["Emitter address. Cannot be zero address."],
            type: {
              array: ["u8", 32]
            }
          },
          {
            name: "tokenBridgeForeignEndpoint",
            docs: ["Token Bridge program's foreign endpoint account key."],
            type: "publicKey"
          },
          {
            name: "fee",
            docs: [
              "The fee that is paid to the `fee_recipient` upon redeeming a transfer.",
              "This value is set in terms of USD and scaled by the `relayer_fee_precision`.",
              "For example, if the `relayer_fee_precision` is `100000000` and the intended",
              "fee is $5, then the `fee` value should be `500000000`."
            ],
            type: "u64"
          }
        ]
      }
    },
    {
      name: "ownerConfig",
      docs: ["Owner account data."],
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            docs: ["Program's owner."],
            type: "publicKey"
          },
          {
            name: "assistant",
            docs: [
              "Program's assistant. Can be used to update the relayer fee and swap rate."
            ],
            type: "publicKey"
          },
          {
            name: "pendingOwner",
            docs: [
              "Intermediate storage for the pending owner. Is used to transfer ownership."
            ],
            type: {
              option: "publicKey"
            }
          }
        ]
      }
    },
    {
      name: "redeemerConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            docs: ["Program's owner."],
            type: "publicKey"
          },
          {
            name: "bump",
            docs: ["PDA bump."],
            type: "u8"
          },
          {
            name: "relayerFeePrecision",
            docs: ["Relayer fee and swap rate precision."],
            type: "u32"
          },
          {
            name: "feeRecipient",
            docs: ["Recipient of all relayer fees and swap proceeds."],
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "registeredToken",
      docs: ["Registered token account data."],
      type: {
        kind: "struct",
        fields: [
          {
            name: "swapRate",
            docs: [
              "Token swap rate. The swap rate is the USD conversion rate of the token."
            ],
            type: "u64"
          },
          {
            name: "maxNativeSwapAmount",
            docs: [
              "Maximum amount of native SOL the contract will swap for each transfer."
            ],
            type: "u64"
          }
        ]
      }
    },
    {
      name: "senderConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            docs: ["Program's owner."],
            type: "publicKey"
          },
          {
            name: "bump",
            docs: ["PDA bump."],
            type: "u8"
          },
          {
            name: "tokenBridge",
            docs: ["Token Bridge program's relevant addresses."],
            type: {
              defined: "OutboundTokenBridgeAddresses"
            }
          },
          {
            name: "relayerFeePrecision",
            docs: ["Relayer fee and swap rate precision."],
            type: "u32"
          },
          {
            name: "paused",
            docs: ["Boolean indicating whether outbound transfers are paused."],
            type: "bool"
          }
        ]
      }
    },
    {
      name: "signerSequence",
      type: {
        kind: "struct",
        fields: [
          {
            name: "value",
            type: "u64"
          }
        ]
      }
    }
  ],
  types: [
    {
      name: "OutboundTokenBridgeAddresses",
      type: {
        kind: "struct",
        fields: [
          {
            name: "sequence",
            type: "publicKey"
          }
        ]
      }
    },
    {
      name: "TokenBridgeRelayerMessage",
      docs: [
        "Expected message types for this program. Only valid payloads are:",
        "* `TransferWithRelay`: Payload ID == 1.",
        "",
        "Payload IDs are encoded as u8."
      ],
      type: {
        kind: "enum",
        variants: [
          {
            name: "TransferWithRelay",
            fields: [
              {
                name: "target_relayer_fee",
                type: "u64"
              },
              {
                name: "to_native_token_amount",
                type: "u64"
              },
              {
                name: "recipient",
                type: {
                  array: ["u8", 32]
                }
              }
            ]
          }
        ]
      }
    }
  ],
  errors: [
    {
      code: 6e3,
      name: "InvalidWormholeBridge",
      msg: "InvalidWormholeBridge"
    },
    {
      code: 6001,
      name: "InvalidWormholeFeeCollector",
      msg: "InvalidWormholeFeeCollector"
    },
    {
      code: 6002,
      name: "OwnerOnly",
      msg: "OwnerOnly"
    },
    {
      code: 6003,
      name: "OutboundTransfersPaused",
      msg: "OutboundTransfersPaused"
    },
    {
      code: 6004,
      name: "OwnerOrAssistantOnly",
      msg: "OwnerOrAssistantOnly"
    },
    {
      code: 6005,
      name: "NotPendingOwner",
      msg: "NotPendingOwner"
    },
    {
      code: 6006,
      name: "AlreadyTheOwner",
      msg: "AlreadyTheOwner"
    },
    {
      code: 6007,
      name: "AlreadyTheAssistant",
      msg: "AlreadyTheAssistant"
    },
    {
      code: 6008,
      name: "AlreadyTheFeeRecipient",
      msg: "AlreadyTheFeeRecipient"
    },
    {
      code: 6009,
      name: "BumpNotFound",
      msg: "BumpNotFound"
    },
    {
      code: 6010,
      name: "FailedToMakeImmutable",
      msg: "FailedToMakeImmutable"
    },
    {
      code: 6011,
      name: "InvalidForeignContract",
      msg: "InvalidForeignContract"
    },
    {
      code: 6012,
      name: "ZeroBridgeAmount",
      msg: "ZeroBridgeAmount"
    },
    {
      code: 6013,
      name: "InvalidToNativeAmount",
      msg: "InvalidToNativeAmount"
    },
    {
      code: 6014,
      name: "NativeMintRequired",
      msg: "NativeMintRequired"
    },
    {
      code: 6015,
      name: "SwapsNotAllowedForNativeMint",
      msg: "SwapsNotAllowedForNativeMint"
    },
    {
      code: 6016,
      name: "InvalidTokenBridgeConfig",
      msg: "InvalidTokenBridgeConfig"
    },
    {
      code: 6017,
      name: "InvalidTokenBridgeAuthoritySigner",
      msg: "InvalidTokenBridgeAuthoritySigner"
    },
    {
      code: 6018,
      name: "InvalidTokenBridgeCustodySigner",
      msg: "InvalidTokenBridgeCustodySigner"
    },
    {
      code: 6019,
      name: "InvalidTokenBridgeEmitter",
      msg: "InvalidTokenBridgeEmitter"
    },
    {
      code: 6020,
      name: "InvalidTokenBridgeSequence",
      msg: "InvalidTokenBridgeSequence"
    },
    {
      code: 6021,
      name: "InvalidRecipient",
      msg: "InvalidRecipient"
    },
    {
      code: 6022,
      name: "InvalidTransferToChain",
      msg: "InvalidTransferToChain"
    },
    {
      code: 6023,
      name: "InvalidTransferTokenChain",
      msg: "InvalidTransferTokenChain"
    },
    {
      code: 6024,
      name: "InvalidPrecision",
      msg: "InvalidPrecision"
    },
    {
      code: 6025,
      name: "InvalidTransferToAddress",
      msg: "InvalidTransferToAddress"
    },
    {
      code: 6026,
      name: "AlreadyRedeemed",
      msg: "AlreadyRedeemed"
    },
    {
      code: 6027,
      name: "InvalidTokenBridgeForeignEndpoint",
      msg: "InvalidTokenBridgeForeignEndpoint"
    },
    {
      code: 6028,
      name: "InvalidTokenBridgeMintAuthority",
      msg: "InvalidTokenBridgeMintAuthority"
    },
    {
      code: 6029,
      name: "InvalidPublicKey",
      msg: "InvalidPublicKey"
    },
    {
      code: 6030,
      name: "ZeroSwapRate",
      msg: "ZeroSwapRate"
    },
    {
      code: 6031,
      name: "TokenNotRegistered",
      msg: "TokenNotRegistered"
    },
    {
      code: 6032,
      name: "ChainNotRegistered",
      msg: "ChainNotRegistered"
    },
    {
      code: 6033,
      name: "TokenAlreadyRegistered",
      msg: "TokenAlreadyRegistered"
    },
    {
      code: 6034,
      name: "FeeCalculationError",
      msg: "TokenFeeCalculationError"
    },
    {
      code: 6035,
      name: "InvalidSwapCalculation",
      msg: "InvalidSwapCalculation"
    },
    {
      code: 6036,
      name: "InsufficientFunds",
      msg: "InsufficientFunds"
    }
  ]
};
function Zt(t, e) {
  return new Cn(Zi, new d(t), { connection: e });
}
function dr(t, e) {
  return L([A.Buffer.from("seq"), new d(e).toBuffer()], t);
}
async function Ji(t, e, n, r, s, i, a, o, u, l, y, k) {
  const { methods: { transferNativeTokensWithRelay: b }, account: { signerSequence: T } } = Zt(e, t), I = dr(e, n), w = await T.fetch(I).then(({ value: le }) => le).catch((le) => {
    var we;
    if ((we = le.message) != null && we.includes("Account does not exist"))
      return new O(0);
    throw le;
  }), v = sr(e, n, w), R = Ot(new d(i), new d(n)), K = rr(e, i), Le = Gi(e, r, s, n, v, R, i);
  return b(new O(a.toString()), new O(o.toString()), x(l), [...u], y, k).accounts({
    config: nr(e),
    payerSequence: I,
    foreignContract: Lt(e, l),
    registeredToken: Kt(e, i),
    tmpTokenAccount: K,
    tokenBridgeProgram: new d(r),
    ...Le
  }).instruction();
}
async function $i(t, e, n, r, s, i, a, o, u, l, y) {
  const { methods: { transferWrappedTokensWithRelay: k }, account: { signerSequence: b } } = Zt(e, t), T = dr(e, n), I = await b.fetch(T).then(({ value: we }) => we).catch((we) => {
    var Yt;
    if ((Yt = we.message) != null && Yt.includes("Account does not exist"))
      return new O(0);
    throw we;
  }), w = sr(e, n, I), v = Ot(new d(i), new d(n)), { chain: R, tokenAddress: K } = await it(t, r, i), Le = rr(e, i), le = ji(e, r, s, n, w, v, R, K);
  return k(new O(a.toString()), new O(o.toString()), x(l), [...u], y).accounts({
    config: nr(e),
    payerSequence: T,
    foreignContract: Lt(e, l),
    registeredToken: Kt(e, new d(i)),
    tmpTokenAccount: Le,
    tokenBridgeProgram: new d(r),
    ...le
  }).instruction();
}
class Jt {
  constructor(e, n, r, s) {
    B(this, "network");
    B(this, "chain");
    B(this, "connection");
    B(this, "contracts");
    B(this, "chainId");
    B(this, "coreBridge");
    B(this, "tokenBridge");
    this.network = e, this.chain = n, this.connection = r, this.contracts = s, this.chainId = x(n);
    const i = s.tokenBridge;
    if (!i)
      throw new Error(`TokenBridge contract Address for chain ${n} not found`);
    this.tokenBridge = oe(i, r), this.coreBridge = new kr(e, n, r, s);
  }
  static async fromRpc(e, n) {
    const [r, s] = await qe.chainFromRpc(e), i = n[s];
    if (i.network !== r)
      throw new Error(`Network mismatch for chain ${s}: ${i.network} != ${r}`);
    return new Jt(r, s, e, i.contracts);
  }
  async isWrappedAsset(e) {
    return it(this.connection, this.tokenBridge.programId, new q(e).toUint8Array()).catch((n) => null).then((n) => n != null);
  }
  async getOriginalAsset(e) {
    if (!await this.isWrappedAsset(e))
      throw kt(e.toString());
    const n = new q(e).toUint8Array(), r = new d(n);
    try {
      const s = await it(this.connection, this.tokenBridge.programId, n);
      return s === null ? {
        chain: this.chain,
        address: new q(r.toBytes()).toUniversalAddress()
      } : {
        chain: Pr(s.chain),
        address: new In(s.tokenAddress)
      };
    } catch {
      throw kt(e.toString());
    }
  }
  async hasWrappedAsset(e) {
    try {
      return await this.getWrappedAsset(e), !0;
    } catch {
    }
    return !1;
  }
  async getWrappedAsset(e) {
    if (xe(e.address))
      throw new Error("Native cannot be a wrapped asset");
    const n = Oe(this.tokenBridge.programId, x(e.chain), e.address.toUniversalAddress().toUint8Array());
    try {
      return await it(this.connection, this.tokenBridge.programId, n), Mt(this.chain, n.toBase58());
    } catch {
    }
    throw kt(`${n}: ${e.address.toUniversalAddress().toString()}`);
  }
  async isTransferCompleted(e) {
    return br(this.connection, this.tokenBridge.programId, e.emitterAddress.toUint8Array(), x(e.emitterChain), e.sequence, this.connection.commitment).catch(() => !1);
  }
  async getWrappedNative() {
    return Mt(this.chain, me.toBase58());
  }
  async *createAttestation(e, n) {
    if (!n)
      throw new Error("Payer required to create attestation");
    const r = new q(n).unwrap(), s = 0, i = await this.coreBridge.getMessageFee(), a = Ar(this.coreBridge.coreBridge.programId, r, i), o = pe.generate(), u = Wi(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, new q(e).unwrap(), o.publicKey, s), l = new Y().add(a, u);
    l.feePayer = r, yield this.createUnsignedTx({ transaction: l, signers: [o] }, "Solana.AttestToken");
  }
  async *submitAttestation(e, n) {
    if (!n)
      throw new Error("Payer required to create attestation");
    const r = new q(n).unwrap();
    yield* this.coreBridge.postVaa(r, e);
    const s = new Y().add(zi(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, e));
    s.feePayer = r, yield this.createUnsignedTx({ transaction: s }, "Solana.CreateWrapped");
  }
  async transferSol(e, n, r, s) {
    const i = new q(e).unwrap(), a = i, o = n.address.toUniversalAddress().toUint8Array(), u = x(n.chain), l = 0, y = 0n, k = pe.generate(), b = pe.generate(), T = await ln(this.connection), I = D.createAccount({
      fromPubkey: a,
      newAccountPubkey: b.publicKey,
      lamports: T,
      //spl token accounts need rent exemption
      space: se,
      programId: U
    }), w = D.transfer({
      fromPubkey: a,
      lamports: r,
      toPubkey: b.publicKey
    }), v = yn(b.publicKey, me, a), R = Sn(this.tokenBridge.programId, b.publicKey, a, r), K = s ? Tn(this.connection, this.tokenBridge.programId, this.coreBridge.address, i, k.publicKey, b.publicKey, me, l, r, o, u, s) : Mn(this.connection, this.tokenBridge.programId, this.coreBridge.address, i, k.publicKey, b.publicKey, me, l, r, y, o, u), Le = dn(
      b.publicKey,
      //account to close
      a,
      //Remaining funds destination
      a
    ), le = new Y();
    return le.feePayer = a, le.add(I, w, v, R, K, Le), this.createUnsignedTx({ transaction: le, signers: [k, b] }, "TokenBridge.TransferNative");
  }
  async *transfer(e, n, r, s, i) {
    if (xe(r)) {
      yield await this.transferSol(e, n, s, i);
      return;
    }
    const a = new q(r).unwrap(), o = new q(e).unwrap(), u = await fn(a, o), l = n.address.toUniversalAddress().toUint8Array(), y = x(n.chain), k = 0, b = 0n, T = !await this.isWrappedAsset(r), I = pe.generate();
    let w;
    if (T)
      w = i ? Tn(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, I.publicKey, u, a, k, s, l, y, i) : Mn(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, I.publicKey, u, a, k, s, b, l, y);
    else {
      const K = await this.getOriginalAsset(r);
      if (xe(K.address))
        throw new Error("Native cannot be an original asset");
      w = i ? Hi(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, I.publicKey, u, o, x(K.chain), K.address.toUint8Array(), k, s, l, y, i) : Di(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, I.publicKey, u, o, x(K.chain), K.address.toUint8Array(), k, s, b, l, y);
    }
    const v = Sn(this.tokenBridge.programId, u, o, s), R = new Y().add(v, w);
    R.feePayer = o, yield this.createUnsignedTx({ transaction: R, signers: [I] }, "TokenBridge.TransferTokens");
  }
  async *redeemAndUnwrap(e, n) {
    const r = new q(e).unwrap(), s = new q(n.payload.to.address).unwrap(), i = await Rs(this.connection, me).then((I) => n.payload.token.amount * BigInt(Math.pow(10, I.decimals - 8))), a = await ln(this.connection), o = pe.generate(), u = An(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, n), l = D.createAccount({
      fromPubkey: r,
      newAccountPubkey: o.publicKey,
      lamports: a,
      //spl token accounts need rent exemption
      space: se,
      programId: U
    }), y = yn(o.publicKey, me, r), k = fi(s, o.publicKey, r, i.valueOf()), b = dn(
      o.publicKey,
      //account to close
      r,
      //Remaining funds destination
      r
    ), T = new Y();
    T.feePayer = r, T.add(u, l, y, k, b), yield this.createUnsignedTx({ transaction: T, signers: [o] }, "TokenBridge.RedeemAndUnwrap");
  }
  async *createAta(e, n) {
    const r = new q(e).unwrap(), s = new q(n).unwrap(), i = await fn(s, r);
    if (await this.connection.getAccountInfo(i) === null) {
      const o = new Y().add(tr(r, i, r, s));
      o.feePayer = r, yield this.createUnsignedTx({ transaction: o }, "Redeem.CreateATA");
    }
  }
  async *redeem(e, n, r = !0) {
    const s = n.payload.token.chain === this.chain ? n.payload.token.address : (await this.getWrappedAsset(n.payload.token)).toUniversalAddress();
    if (yield* this.createAta(e, s), yield* this.coreBridge.postVaa(e, n), r) {
      const u = new q(await this.getWrappedNative());
      if (Rr.equals(s.toUint8Array(), u.toUint8Array())) {
        yield* this.redeemAndUnwrap(e, n);
        return;
      }
    }
    const i = new q(e).unwrap(), a = n.payload.token.chain == this.chain ? An : Ni, o = new Y().add(a(this.connection, this.tokenBridge.programId, this.coreBridge.address, i, n));
    o.feePayer = i, yield this.createUnsignedTx({ transaction: o }, "Solana.RedeemTransfer");
  }
  createUnsignedTx(e, n, r = !1) {
    return new vn(e, this.network, this.chain, n, r);
  }
}
const Yi = {
  Testnet: [
    "7VPWjBhCXrpYYBiRKZh1ubh9tLZZNkZGp2ReRphEV4Mc",
    "3WK3mEDNPrNuQReBvM28NcsqrExMnPxD9pPJmgrUeKKH",
    "BaGfF51MQ3a61papTRDYaNefBgTQ9ywnVne5fCff4bxT",
    "ACbmcQxbbhiXWM1GmapUSMmBYKMvnFLfAAXKqdo8xKwo",
    "GQtMXZxnuacCFTXVeTvyHi6P9F6chbtzhVc8JgD8hv7c",
    "3Ftc5hTz9sG4huk79onufGiebJNDMZNL8HYgdMJ9E7JR",
    "DMw2tLaq1bVoAEKtkoUtieSk9bfCPUvubYLatTMsSVop",
    "84F2QX9278ToDmA98u4A86xSV9hz1ovazr8zwGaX6qjS",
    "So11111111111111111111111111111111111111112",
    "8987WGkYa5viiZ9DD8sS3PB5XghKmWjkEgmzvwDuoAEc",
    "BJZ72CjPQojVoH68mzrd4VQ4nr6KuhbAGnhZEZCujKxY"
  ],
  Mainnet: [
    "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
    "A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM",
    "Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1",
    "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
    "9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa",
    "Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG",
    "KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE",
    "DRQBDBEWmwWGK13fRTLhSPzjbvMSUavhV6nW4RUH8W6T",
    "9kvAcwQbqejuJMd59mKuw2bfSsLRaQ7zuvaTVHEeBBec",
    "7ixSaXGsHAFy34wogPk2YXiUX3BMmQMFdercdaHLnBby",
    "G1vJEgzepqhnVu35BN4jrkv3wVwkujYWFFCxhbEZ1CZr",
    "So11111111111111111111111111111111111111112"
  ],
  Devnet: []
}, ve = 9, Ke = new O(10), Ee = new O(1e8);
class $t {
  constructor(e, n, r, s) {
    B(this, "network");
    B(this, "chain");
    B(this, "connection");
    B(this, "contracts");
    B(this, "chainId");
    B(this, "coreBridgeProgramId");
    B(this, "tokenBridgeProgramId");
    B(this, "tokenBridgeRelayer");
    this.network = e, this.chain = n, this.connection = r, this.contracts = s, this.chainId = x(n);
    const i = s.tokenBridgeRelayer;
    if (!i)
      throw new Error(`TokenBridge contract Address for chain ${n} not found`);
    this.tokenBridgeRelayer = Zt(i, r), this.tokenBridgeProgramId = new d(s.tokenBridge), this.coreBridgeProgramId = new d(s.coreBridge);
  }
  static async fromRpc(e, n) {
    const [r, s] = await qe.chainFromRpc(e), i = n[s];
    if (i.network !== r)
      throw new Error(`Network mismatch for chain ${s}: ${i.network} != ${r}`);
    return new $t(r, s, e, i.contracts);
  }
  async *transfer(e, n, r, s, i) {
    const o = new q(e).unwrap(), u = n.address.toUniversalAddress().toUint8Array(), l = this.mintAddress(r), y = new Y();
    if (xe(r)) {
      const I = Ot(l, o);
      try {
        await vs(this.connection, I);
      } catch (w) {
        if (w instanceof Nt) {
          const v = tr(o, I, o, l);
          y.add(v);
        } else
          throw w;
      }
    }
    const k = i || 0n, b = xe(r), T = b ? await Ji(this.connection, this.tokenBridgeRelayer.programId, o, this.tokenBridgeProgramId, this.coreBridgeProgramId, l, s, k, u, n.chain, 0, b) : await $i(this.connection, this.tokenBridgeRelayer.programId, o, this.tokenBridgeProgramId, this.coreBridgeProgramId, l, s, k, u, n.chain, 0);
    y.add(T), y.feePayer = o, yield this.createUnsignedTx({ transaction: y }, "AutomaticTokenBridge.Transfer");
  }
  async *redeem(e, n) {
    const r = new Y();
    throw yield this.createUnsignedTx({ transaction: r }, "AutomaticTokenBridge.Redeem"), new Error("Method not implemented.");
  }
  async getRelayerFee(e, n) {
    const r = this.mintAddress(n), [{ fee: s }, { swapRate: i }, { relayerFeePrecision: a }] = await Promise.all([
      this.getForeignContract(e),
      this.getRegisteredToken(r),
      this.getRedeemerConfig()
    ]), o = Number(await qe.getDecimals(this.chain, this.connection, n)), u = Ke.pow(new O(o)).mul(s).mul(Ee).div(new O(a).mul(i));
    return BigInt(u.toString());
  }
  async maxSwapAmount(e) {
    const n = this.mintAddress(e), [{ swapRate: r, maxNativeSwapAmount: s }, { swapRate: i }] = await Promise.all([
      this.getRegisteredToken(n),
      this.getRegisteredToken(me)
    ]), a = Number(await qe.getDecimals(this.chain, this.connection, e)), o = this.calculateNativeSwapRate(i, r), u = a > ve ? s.mul(o).mul(Ke.pow(new O(a - ve))).div(Ee) : s.mul(o).div(Ke.pow(new O(ve - a)).mul(Ee));
    return BigInt(u.toString());
  }
  async nativeTokenAmount(e, n) {
    if (n === 0n)
      return 0n;
    const r = this.mintAddress(e), s = Number(await qe.getDecimals(this.chain, this.connection, e)), [{ swapRate: i }, { swapRate: a }] = await Promise.all([
      this.getRegisteredToken(r),
      this.getRegisteredToken(me)
    ]), o = this.calculateNativeSwapRate(a, i), u = s > ve ? Ee.mul(new O(n.toString())).div(o.mul(Ke.pow(new O(s - ve)))) : Ee.mul(new O(n.toString())).mul(Ke.pow(new O(ve - s))).div(o);
    return BigInt(u.toString());
  }
  async isRegisteredToken(e) {
    var r;
    const n = this.mintAddress(e);
    try {
      return await this.getRegisteredToken(n), !0;
    } catch (s) {
      if ((r = s.message) != null && r.includes("Account does not exist"))
        return !1;
      throw s;
    }
  }
  mintAddress(e) {
    return xe(e) ? new d(me) : new q(e).unwrap();
  }
  async getRegisteredTokens() {
    return Yi[this.network].map((e) => Mt(this.chain, e));
  }
  calculateNativeSwapRate(e, n) {
    return Ee.mul(e).div(n);
  }
  async getForeignContract(e) {
    return await this.tokenBridgeRelayer.account.foreignContract.fetch(Lt(this.tokenBridgeRelayer.programId, e));
  }
  async getRegisteredToken(e) {
    return await this.tokenBridgeRelayer.account.registeredToken.fetch(Kt(this.tokenBridgeRelayer.programId, e));
  }
  async getRedeemerConfig() {
    return await this.tokenBridgeRelayer.account.redeemerConfig.fetch(hi(this.tokenBridgeRelayer.programId));
  }
  createUnsignedTx(e, n, r = !1) {
    return new vn(e, this.network, this.chain, n, r);
  }
}
Pn(En, "TokenBridge", Jt);
Pn(En, "AutomaticTokenBridge", $t);
export {
  ut as CreateMetadataAccountArgs,
  Se as Creator,
  wt as Data,
  Dt as EndpointRegistration,
  kn as Key,
  jt as Metadata,
  $t as SolanaAutomaticTokenBridge,
  Jt as SolanaTokenBridge,
  Ye as SplTokenMetadataProgram,
  or as TOKEN_BRIDGE_IDL,
  Zi as TOKEN_BRIDGE_RELAYER_IDL,
  qt as TokenBridgeConfig,
  Gt as WrappedMeta,
  xi as coder,
  Sn as createApproveAuthoritySignerInstruction,
  Wi as createAttestTokenInstruction,
  An as createCompleteTransferNativeInstruction,
  Ni as createCompleteTransferWrappedInstruction,
  zi as createCreateWrappedInstruction,
  ca as createInitializeInstruction,
  oe as createReadOnlyTokenBridgeProgramInterface,
  ua as createRegisterChainInstruction,
  Ri as createTokenBridgeProgramInterface,
  Zt as createTokenBridgeRelayerProgramInterface,
  Mn as createTransferNativeInstruction,
  Ji as createTransferNativeTokensWithRelayInstruction,
  Tn as createTransferNativeWithPayloadInstruction,
  Di as createTransferWrappedInstruction,
  $i as createTransferWrappedTokensWithRelayInstruction,
  Hi as createTransferWrappedWithPayloadInstruction,
  da as createUpgradeContractInstruction,
  Fe as deriveAuthoritySignerKey,
  pt as deriveCustodyKey,
  nt as deriveCustodySignerKey,
  ze as deriveEndpointKey,
  Lt as deriveForeignContractAddress,
  yt as deriveMintAuthorityKey,
  Ht as deriveRedeemerAccountKey,
  hi as deriveRedeemerConfigAddress,
  Kt as deriveRegisteredTokenAddress,
  Vt as deriveSenderAccountKey,
  nr as deriveSenderConfigAddress,
  St as deriveSplTokenMetadataKey,
  rr as deriveTmpTokenAccountAddress,
  J as deriveTokenBridgeConfigKey,
  sr as deriveTokenTransferMessageAddress,
  Ie as deriveWrappedMetaKey,
  Oe as deriveWrappedMintKey,
  bn as getAttestTokenAccounts,
  _i as getCompleteTransferNativeAccounts,
  fa as getCompleteTransferNativeWithPayloadCpiAccounts,
  Ui as getCompleteTransferWrappedAccounts,
  ha as getCompleteTransferWrappedWithPayloadCpiAccounts,
  Fi as getCreateWrappedAccounts,
  aa as getEndpointRegistration,
  Oi as getInitializeAccounts,
  oa as getMetadata,
  Li as getRegisterChainAccounts,
  ia as getTokenBridgeConfig,
  la as getTokenBridgeDerivedAccounts,
  qi as getTransferNativeAccounts,
  cr as getTransferNativeWithPayloadAccounts,
  Gi as getTransferNativeWithPayloadCpiAccounts,
  Vi as getTransferWrappedAccounts,
  ur as getTransferWrappedWithPayloadAccounts,
  ji as getTransferWrappedWithPayloadCpiAccounts,
  Ki as getUpgradeContractAccounts,
  it as getWrappedMeta
};
