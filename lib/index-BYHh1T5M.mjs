var Hs = Object.defineProperty;
var Gs = (i, e, t) => e in i ? Hs(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var M = (i, e, t) => (Gs(i, typeof e != "symbol" ? e + "" : e, t), t);
import { n as B, aF as se, aG as P, aH as R, aI as he, aJ as q, aK as re, aL as ze, aM as ge, aN as Gt, aO as J, a3 as ne, aD as bt, aE as Sn, aP as je, aQ as js, aR as Ys, aS as Js, aT as Xs, aU as Vn, cF as wn, aV as Zs, aW as Qs, aX as er, cN as In, cO as tr, d as F, aa as nr, o as An, a0 as sr, cP as _n, aY as rr, cM as ir, bW as Ye, cQ as or, cE as ar } from "./index-DV1w5RNX.mjs";
import { c as cr } from "./index-DpFNxVts.mjs";
import { P as He, a as yt, S as ur, b as dr, _ as lr } from "./solana-Bbeh0ipO.mjs";
import { c as hr } from "./create-Du0Xo8xc.mjs";
import { r as fr } from "./chain-tk4BDPwT.mjs";
function Te(i, e) {
  return He.findProgramAddressSync(i, new He(e))[0];
}
function pa(i, e) {
  return {
    pubkey: new He(i),
    isWritable: !0,
    isSigner: e
  };
}
function ma(i, e) {
  return {
    pubkey: new He(i),
    isWritable: !1,
    isSigner: e
  };
}
function ut(i) {
  if (i === null)
    throw Error("account info is null");
  return i.data;
}
class jt {
}
M(jt, "programId", new He("BPFLoaderUpgradeab1e11111111111111111111111"));
function gr(i) {
  return Te([new He(i).toBuffer()], jt.programId);
}
class yr extends Error {
  constructor(e) {
    super(e), this.name = "IdlError";
  }
}
function $n(i, e) {
  switch (e.type.kind) {
    case "struct":
      return e.type.fields.map((t) => xe(i, t.type)).reduce((t, n) => t + n, 0);
    case "enum": {
      const t = e.type.variants.map((n) => n.fields ? n.fields.map((s) => typeof s == "object" && "name" in s ? xe(i, s.type) : xe(i, s)).reduce((s, r) => s + r, 0) : 0);
      return Math.max(...t) + 1;
    }
    case "alias":
      return xe(i, e.type.value);
  }
}
function xe(i, e) {
  var t;
  switch (e) {
    case "bool":
      return 1;
    case "u8":
      return 1;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "u16":
      return 2;
    case "u32":
      return 4;
    case "i32":
      return 4;
    case "f32":
      return 4;
    case "u64":
      return 8;
    case "i64":
      return 8;
    case "f64":
      return 8;
    case "u128":
      return 16;
    case "i128":
      return 16;
    case "u256":
      return 32;
    case "i256":
      return 32;
    case "bytes":
      return 1;
    case "string":
      return 1;
    case "publicKey":
      return 32;
    default:
      if ("vec" in e)
        return 1;
      if ("option" in e)
        return 1 + xe(i, e.option);
      if ("coption" in e)
        return 4 + xe(i, e.coption);
      if ("defined" in e) {
        const n = ((t = i.types) == null ? void 0 : t.filter((r) => r.name === e.defined)) ?? [];
        if (n.length !== 1)
          throw new yr(`Type not found: ${JSON.stringify(e)}`);
        let s = n[0];
        return $n(i, s);
      }
      if ("array" in e) {
        let n = e.array[0], s = e.array[1];
        return xe(i, n) * s;
      }
      throw new Error(`Invalid type ${JSON.stringify(e)}`);
  }
}
function tt(i) {
  return i.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, t) {
    return t === 0 ? e.toLowerCase() : e.toUpperCase();
  }).replace(/[\s\-_]+/g, "");
}
function pr(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
class mr extends TypeError {
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
function br(i) {
  return Be(i) && typeof i[Symbol.iterator] == "function";
}
function Be(i) {
  return typeof i == "object" && i != null;
}
function ye(i) {
  return typeof i == "string" ? JSON.stringify(i) : "" + i;
}
function kr(i) {
  const {
    done: e,
    value: t
  } = i.next();
  return e ? void 0 : t;
}
function Sr(i, e, t, n) {
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
    message: c = "Expected a value of type `" + o + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + ye(n) + "`"
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
function* Pn(i, e, t, n) {
  br(i) || (i = [i]);
  for (const s of i) {
    const r = Sr(s, e, t, n);
    r && (yield r);
  }
}
function* Yt(i, e, t = {}) {
  const {
    path: n = [],
    branch: s = [i],
    coerce: r = !1,
    mask: o = !1
  } = t, a = {
    path: n,
    branch: s
  };
  if (r && (i = e.coercer(i, a), o && e.type !== "type" && Be(e.schema) && Be(i) && !Array.isArray(i)))
    for (const d in i)
      e.schema[d] === void 0 && delete i[d];
  let c = !0;
  for (const d of e.validator(i, a))
    c = !1, yield [d, void 0];
  for (let [d, l, f] of e.entries(i, a)) {
    const k = Yt(l, f, {
      path: d === void 0 ? n : [...n, d],
      branch: d === void 0 ? s : [...s, l],
      coerce: r,
      mask: o
    });
    for (const h of k)
      h[0] ? (c = !1, yield [h[0], void 0]) : r && (l = h[1], d === void 0 ? i = l : i instanceof Map ? i.set(d, l) : i instanceof Set ? i.add(l) : Be(i) && (i[d] = l));
  }
  if (c)
    for (const d of e.refiner(i, a))
      c = !1, yield [d, void 0];
  c && (yield [void 0, i]);
}
let Ae = class {
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
    this.type = t, this.schema = n, this.entries = a, this.coercer = o, s ? this.validator = (c, d) => {
      const l = s(c, d);
      return Pn(l, d, this, c);
    } : this.validator = () => [], r ? this.refiner = (c, d) => {
      const l = r(c, d);
      return Pn(l, d, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e) {
    return Hn(e, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e) {
    return S(e, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return Gn(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e) {
    return wr(e, this);
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
    return dt(e, this, t);
  }
};
function Hn(i, e) {
  const t = dt(i, e);
  if (t[0])
    throw t[0];
}
function S(i, e) {
  const t = dt(i, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function wr(i, e) {
  const t = dt(i, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function Gn(i, e) {
  return !dt(i, e)[0];
}
function dt(i, e, t = {}) {
  const n = Yt(i, e, t), s = kr(n);
  return s[0] ? [new mr(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function Ue(i, e) {
  return new Ae({
    type: i,
    schema: null,
    validator: e
  });
}
function Ir() {
  return Ue("any", () => !0);
}
function I(i) {
  return new Ae({
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
      return Array.isArray(e) || "Expected an array value, but received: " + ye(e);
    }
  });
}
function Ie() {
  return Ue("boolean", (i) => typeof i == "boolean");
}
function Jt(i) {
  return Ue("instance", (e) => e instanceof i || "Expected a `" + i.name + "` instance, but received: " + ye(e));
}
function X(i) {
  const e = ye(i), t = typeof i;
  return new Ae({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? i : null,
    validator(n) {
      return n === i || "Expected the literal `" + e + "`, but received: " + ye(n);
    }
  });
}
function Ar() {
  return Ue("never", () => !1);
}
function w(i) {
  return new Ae({
    ...i,
    validator: (e, t) => e === null || i.validator(e, t),
    refiner: (e, t) => e === null || i.refiner(e, t)
  });
}
function u() {
  return Ue("number", (i) => typeof i == "number" && !isNaN(i) || "Expected a number, but received: " + ye(i));
}
function v(i) {
  return new Ae({
    ...i,
    validator: (e, t) => e === void 0 || i.validator(e, t),
    refiner: (e, t) => e === void 0 || i.refiner(e, t)
  });
}
function jn(i, e) {
  return new Ae({
    type: "record",
    schema: null,
    *entries(t) {
      if (Be(t))
        for (const n in t) {
          const s = t[n];
          yield [n, n, i], yield [n, s, e];
        }
    },
    validator(t) {
      return Be(t) || "Expected an object, but received: " + ye(t);
    }
  });
}
function b() {
  return Ue("string", (i) => typeof i == "string" || "Expected a string, but received: " + ye(i));
}
function Xt(i) {
  const e = Ar();
  return new Ae({
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
      return Array.isArray(t) || "Expected an array, but received: " + ye(t);
    }
  });
}
function y(i) {
  const e = Object.keys(i);
  return new Ae({
    type: "type",
    schema: i,
    *entries(t) {
      if (Be(t))
        for (const n of e)
          yield [n, t[n], i[n]];
    },
    validator(t) {
      return Be(t) || "Expected an object, but received: " + ye(t);
    }
  });
}
function ce(i) {
  const e = i.map((t) => t.type).join(" | ");
  return new Ae({
    type: "union",
    schema: null,
    validator(t, n) {
      const s = [];
      for (const r of i) {
        const [...o] = Yt(t, r, n), [a] = o;
        if (a[0])
          for (const [c] of o)
            c && s.push(c);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + ye(t), ...s];
    }
  });
}
function lt() {
  return Ue("unknown", () => !0);
}
function ht(i, e, t) {
  return new Ae({
    ...i,
    coercer: (n, s) => Gn(n, e) ? i.coercer(t(n, s), s) : i.coercer(n, s)
  });
}
const _r = je.utils.randomPrivateKey, Rn = () => {
  const i = je.utils.randomPrivateKey(), e = kt(i), t = new Uint8Array(64);
  return t.set(i), t.set(e, 32), {
    publicKey: e,
    secretKey: t
  };
}, kt = je.getPublicKey;
function En(i) {
  try {
    return je.ExtendedPoint.fromHex(i), !0;
  } catch {
    return !1;
  }
}
const Zt = (i, e) => je.sign(i, e.slice(0, 32)), Pr = je.verify, z = (i) => B.Buffer.isBuffer(i) ? i : i instanceof Uint8Array ? B.Buffer.from(i.buffer, i.byteOffset, i.byteLength) : B.Buffer.from(i);
class Qt {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return B.Buffer.from(js(st, this));
  }
  static decode(e) {
    return Ys(st, this, e);
  }
  static decodeUnchecked(e) {
    return Js(st, this, e);
  }
}
class Rr extends Qt {
  constructor(e) {
    if (super(e), this.enum = "", Object.keys(e).length !== 1)
      throw new Error("Enum can only take single value");
    Object.keys(e).map((t) => {
      this.enum = t;
    });
  }
}
const st = /* @__PURE__ */ new Map();
var Yn;
let Jn;
const Xn = 32, we = 32;
function Er(i) {
  return i._bn !== void 0;
}
let Tn = 1;
Jn = Symbol.toStringTag;
class g extends Qt {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(e) {
    if (super({}), this._bn = void 0, Er(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = ne.decode(e);
        if (t.length != we)
          throw new Error("Invalid public key input");
        this._bn = new bt(t);
      } else
        this._bn = new bt(e);
      if (this._bn.byteLength() > we)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const e = new g(Tn);
    return Tn += 1, new g(e.toBuffer());
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
    return ne.encode(this.toBytes());
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
    const e = this._bn.toArrayLike(B.Buffer);
    if (e.length === we)
      return e;
    const t = B.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  get [Jn]() {
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
    const s = B.Buffer.concat([e.toBuffer(), B.Buffer.from(t), n.toBuffer()]), r = Sn(s);
    return new g(r);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(e, t) {
    let n = B.Buffer.alloc(0);
    e.forEach(function(r) {
      if (r.length > Xn)
        throw new TypeError("Max seed length exceeded");
      n = B.Buffer.concat([n, z(r)]);
    }), n = B.Buffer.concat([n, t.toBuffer(), B.Buffer.from("ProgramDerivedAddress")]);
    const s = Sn(n);
    if (En(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new g(s);
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
        const r = e.concat(B.Buffer.from([n]));
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
    const t = new g(e);
    return En(t.toBytes());
  }
}
Yn = g;
g.default = new Yn("11111111111111111111111111111111");
st.set(g, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
class Tr {
  /**
   * Create a new Account object
   *
   * If the secretKey parameter is not provided a new key pair is randomly
   * created for the account
   *
   * @param secretKey Secret key for the account
   */
  constructor(e) {
    if (this._publicKey = void 0, this._secretKey = void 0, e) {
      const t = z(e);
      if (e.length !== 64)
        throw new Error("bad secret key size");
      this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32);
    } else
      this._secretKey = z(_r()), this._publicKey = z(kt(this._secretKey));
  }
  /**
   * The public key for this account
   */
  get publicKey() {
    return new g(this._publicKey);
  }
  /**
   * The **unencrypted** secret key for this account. The first 32 bytes
   * is the private scalar and the last 32 bytes is the public key.
   * Read more: https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
   */
  get secretKey() {
    return B.Buffer.concat([this._secretKey, this._publicKey], 64);
  }
}
const Br = new g("BPFLoader1111111111111111111111111111111111"), ve = 1232, It = 127, it = 64;
class en extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(en.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class tn extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(tn.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class Ve extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(Ve.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
class ot {
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
const N = (i = "publicKey") => J(32, i), vr = (i = "signature") => J(64, i), Ke = (i = "string") => {
  const e = P([R("length"), R("lengthPadding"), J(ze(R(), -8), "chars")], i), t = e.decode.bind(e), n = e.encode.bind(e), s = e;
  return s.decode = (r, o) => t(r, o).chars.toString(), s.encode = (r, o, a) => {
    const c = {
      chars: B.Buffer.from(r, "utf8")
    };
    return n(c, o, a);
  }, s.alloc = (r) => R().span + R().span + B.Buffer.from(r, "utf8").length, s;
}, Lr = (i = "authorized") => P([N("staker"), N("withdrawer")], i), Cr = (i = "lockup") => P([he("unixTimestamp"), he("epoch"), N("custodian")], i), xr = (i = "voteInit") => P([N("nodePubkey"), N("authorizedVoter"), N("authorizedWithdrawer"), q("commission")], i), Kr = (i = "voteAuthorizeWithSeedArgs") => P([R("voteAuthorizationType"), N("currentAuthorityDerivedKeyOwnerPubkey"), Ke("currentAuthorityDerivedKeySeed"), N("newAuthorized")], i);
function Zn(i, e) {
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
      return Zn({
        layout: s
      }, e[s.property]);
    return 0;
  };
  let n = 0;
  return i.layout.fields.forEach((s) => {
    n += t(s);
  }), n;
}
function ie(i) {
  let e = 0, t = 0;
  for (; ; ) {
    let n = i.shift();
    if (e |= (n & 127) << t * 7, t += 1, !(n & 128))
      break;
  }
  return e;
}
function de(i, e) {
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
function U(i, e) {
  if (!i)
    throw new Error(e || "Assertion failed");
}
class At {
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
    return new At(t, n);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    U(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, c]) => c.isSigner && c.isWritable), n = e.filter(([, c]) => c.isSigner && !c.isWritable), s = e.filter(([, c]) => !c.isSigner && c.isWritable), r = e.filter(([, c]) => !c.isSigner && !c.isWritable), o = {
      numRequiredSignatures: t.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: r.length
    };
    {
      U(t.length > 0, "Expected at least one writable signer key");
      const [c] = t[0];
      U(c === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const a = [...t.map(([c]) => new g(c)), ...n.map(([c]) => new g(c)), ...s.map(([c]) => new g(c)), ...r.map(([c]) => new g(c))];
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
        const a = new g(r), c = e.findIndex((d) => d.equals(a));
        c >= 0 && (U(c < 256, "Max lookup table index exceeded"), n.push(c), s.push(a), this.keyMetaMap.delete(r));
      }
    return [n, s];
  }
}
const Qn = "Reached end of buffer unexpectedly";
function be(i) {
  if (i.length === 0)
    throw new Error(Qn);
  return i.shift();
}
function oe(i, ...e) {
  const [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > i.length : t >= i.length)
    throw new Error(Qn);
  return i.splice(...e);
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
      data: ne.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new ot(this.staticAccountKeys);
  }
  static compile(e) {
    const t = At.compile(e.instructions, e.payerKey), [n, s] = t.getMessageComponents(), o = new ot(s).compileInstructions(e.instructions).map((a) => ({
      programIdIndex: a.programIdIndex,
      accounts: a.accountKeyIndexes,
      data: ne.encode(a.data)
    }));
    return new pe({
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
    de(t, e);
    const n = this.instructions.map((f) => {
      const {
        accounts: k,
        programIdIndex: h
      } = f, m = Array.from(ne.decode(f.data));
      let p = [];
      de(p, k.length);
      let _ = [];
      return de(_, m.length), {
        programIdIndex: h,
        keyIndicesCount: B.Buffer.from(p),
        keyIndices: k,
        dataLength: B.Buffer.from(_),
        data: m
      };
    });
    let s = [];
    de(s, n.length);
    let r = B.Buffer.alloc(ve);
    B.Buffer.from(s).copy(r);
    let o = s.length;
    n.forEach((f) => {
      const h = P([q("programIdIndex"), J(f.keyIndicesCount.length, "keyIndicesCount"), re(q("keyIndex"), f.keyIndices.length, "keyIndices"), J(f.dataLength.length, "dataLength"), re(q("userdatum"), f.data.length, "data")]).encode(f, r, o);
      o += h;
    }), r = r.slice(0, o);
    const a = P([J(1, "numRequiredSignatures"), J(1, "numReadonlySignedAccounts"), J(1, "numReadonlyUnsignedAccounts"), J(t.length, "keyCount"), re(N("key"), e, "keys"), N("recentBlockhash")]), c = {
      numRequiredSignatures: B.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: B.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: B.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: B.Buffer.from(t),
      keys: this.accountKeys.map((f) => z(f.toBytes())),
      recentBlockhash: ne.decode(this.recentBlockhash)
    };
    let d = B.Buffer.alloc(2048);
    const l = a.encode(c, d);
    return r.copy(d, l), d.slice(0, l + r.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(e) {
    let t = [...e];
    const n = be(t);
    if (n !== (n & It))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = be(t), r = be(t), o = ie(t);
    let a = [];
    for (let k = 0; k < o; k++) {
      const h = oe(t, 0, we);
      a.push(new g(B.Buffer.from(h)));
    }
    const c = oe(t, 0, we), d = ie(t);
    let l = [];
    for (let k = 0; k < d; k++) {
      const h = be(t), m = ie(t), p = oe(t, 0, m), _ = ie(t), L = oe(t, 0, _), V = ne.encode(B.Buffer.from(L));
      l.push({
        programIdIndex: h,
        accounts: p,
        data: V
      });
    }
    const f = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: r
      },
      recentBlockhash: ne.encode(B.Buffer.from(c)),
      accountKeys: a,
      instructions: l
    };
    return new pe(f);
  }
}
class We {
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
    return new ot(this.staticAccountKeys, t);
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
    const t = At.compile(e.instructions, e.payerKey), n = new Array(), s = {
      writable: new Array(),
      readonly: new Array()
    }, r = e.addressLookupTableAccounts || [];
    for (const l of r) {
      const f = t.extractTableLookup(l);
      if (f !== void 0) {
        const [k, {
          writable: h,
          readonly: m
        }] = f;
        n.push(k), s.writable.push(...h), s.readonly.push(...m);
      }
    }
    const [o, a] = t.getMessageComponents(), d = new ot(a, s).compileInstructions(e.instructions);
    return new We({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: d,
      addressTableLookups: n
    });
  }
  serialize() {
    const e = Array();
    de(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(), n = Array();
    de(n, this.compiledInstructions.length);
    const s = this.serializeAddressTableLookups(), r = Array();
    de(r, this.addressTableLookups.length);
    const o = P([q("prefix"), P([q("numRequiredSignatures"), q("numReadonlySignedAccounts"), q("numReadonlyUnsignedAccounts")], "header"), J(e.length, "staticAccountKeysLength"), re(N(), this.staticAccountKeys.length, "staticAccountKeys"), N("recentBlockhash"), J(n.length, "instructionsLength"), J(t.length, "serializedInstructions"), J(r.length, "addressTableLookupsLength"), J(s.length, "serializedAddressTableLookups")]), a = new Uint8Array(ve), d = o.encode({
      prefix: 128,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(e),
      staticAccountKeys: this.staticAccountKeys.map((l) => l.toBytes()),
      recentBlockhash: ne.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: t,
      addressTableLookupsLength: new Uint8Array(r),
      serializedAddressTableLookups: s
    }, a);
    return a.slice(0, d);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(ve);
    for (const n of this.compiledInstructions) {
      const s = Array();
      de(s, n.accountKeyIndexes.length);
      const r = Array();
      de(r, n.data.length);
      const o = P([q("programIdIndex"), J(s.length, "encodedAccountKeyIndexesLength"), re(q(), n.accountKeyIndexes.length, "accountKeyIndexes"), J(r.length, "encodedDataLength"), J(n.data.length, "data")]);
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
    const t = new Uint8Array(ve);
    for (const n of this.addressTableLookups) {
      const s = Array();
      de(s, n.writableIndexes.length);
      const r = Array();
      de(r, n.readonlyIndexes.length);
      const o = P([N("accountKey"), J(s.length, "encodedWritableIndexesLength"), re(q(), n.writableIndexes.length, "writableIndexes"), J(r.length, "encodedReadonlyIndexesLength"), re(q(), n.readonlyIndexes.length, "readonlyIndexes")]);
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
    const n = be(t), s = n & It;
    U(n !== s, "Expected versioned message but received legacy message");
    const r = s;
    U(r === 0, `Expected versioned message with version 0 but found version ${r}`);
    const o = {
      numRequiredSignatures: be(t),
      numReadonlySignedAccounts: be(t),
      numReadonlyUnsignedAccounts: be(t)
    }, a = [], c = ie(t);
    for (let m = 0; m < c; m++)
      a.push(new g(oe(t, 0, we)));
    const d = ne.encode(oe(t, 0, we)), l = ie(t), f = [];
    for (let m = 0; m < l; m++) {
      const p = be(t), _ = ie(t), L = oe(t, 0, _), V = ie(t), ue = new Uint8Array(oe(t, 0, V));
      f.push({
        programIdIndex: p,
        accountKeyIndexes: L,
        data: ue
      });
    }
    const k = ie(t), h = [];
    for (let m = 0; m < k; m++) {
      const p = new g(oe(t, 0, we)), _ = ie(t), L = oe(t, 0, _), V = ie(t), ue = oe(t, 0, V);
      h.push({
        accountKey: p,
        writableIndexes: L,
        readonlyIndexes: ue
      });
    }
    return new We({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: d,
      compiledInstructions: f,
      addressTableLookups: h
    });
  }
}
const nn = {
  deserializeMessageVersion(i) {
    const e = i[0], t = e & It;
    return t === e ? "legacy" : t;
  },
  deserialize: (i) => {
    const e = nn.deserializeMessageVersion(i);
    if (e === "legacy")
      return pe.from(i);
    if (e === 0)
      return We.deserialize(i);
    throw new Error(`Transaction message version ${e} deserialization is not supported`);
  }
};
let Re = /* @__PURE__ */ function(i) {
  return i[i.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", i[i.PROCESSED = 1] = "PROCESSED", i[i.TIMED_OUT = 2] = "TIMED_OUT", i[i.NONCE_INVALID = 3] = "NONCE_INVALID", i;
}({});
const zr = B.Buffer.alloc(it).fill(0);
class $ {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = B.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
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
class O {
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
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new $(t));
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
    for (let p = 0; p < t.length; p++)
      if (t[p].programId === void 0)
        throw new Error(`Transaction instruction index ${p} has undefined program id`);
    const s = [], r = [];
    t.forEach((p) => {
      p.keys.forEach((L) => {
        r.push({
          ...L
        });
      });
      const _ = p.programId.toString();
      s.includes(_) || s.push(_);
    }), s.forEach((p) => {
      r.push({
        pubkey: new g(p),
        isSigner: !1,
        isWritable: !1
      });
    });
    const o = [];
    r.forEach((p) => {
      const _ = p.pubkey.toString(), L = o.findIndex((V) => V.pubkey.toString() === _);
      L > -1 ? (o[L].isWritable = o[L].isWritable || p.isWritable, o[L].isSigner = o[L].isSigner || p.isSigner) : o.push(p);
    }), o.sort(function(p, _) {
      if (p.isSigner !== _.isSigner)
        return p.isSigner ? -1 : 1;
      if (p.isWritable !== _.isWritable)
        return p.isWritable ? -1 : 1;
      const L = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return p.pubkey.toBase58().localeCompare(_.pubkey.toBase58(), "en", L);
    });
    const a = o.findIndex((p) => p.pubkey.equals(n));
    if (a > -1) {
      const [p] = o.splice(a, 1);
      p.isSigner = !0, p.isWritable = !0, o.unshift(p);
    } else
      o.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const p of this.signatures) {
      const _ = o.findIndex((L) => L.pubkey.equals(p.publicKey));
      if (_ > -1)
        o[_].isSigner || (o[_].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${p.publicKey.toString()}`);
    }
    let c = 0, d = 0, l = 0;
    const f = [], k = [];
    o.forEach(({
      pubkey: p,
      isSigner: _,
      isWritable: L
    }) => {
      _ ? (f.push(p.toString()), c += 1, L || (d += 1)) : (k.push(p.toString()), L || (l += 1));
    });
    const h = f.concat(k), m = t.map((p) => {
      const {
        data: _,
        programId: L
      } = p;
      return {
        programIdIndex: h.indexOf(L.toString()),
        accounts: p.keys.map((V) => h.indexOf(V.pubkey.toString())),
        data: ne.encode(_)
      };
    });
    return m.forEach((p) => {
      U(p.programIdIndex >= 0), p.accounts.forEach((_) => U(_ >= 0));
    }), new pe({
      header: {
        numRequiredSignatures: c,
        numReadonlySignedAccounts: d,
        numReadonlyUnsignedAccounts: l
      },
      accountKeys: h,
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
      const r = Zt(n, s.secretKey);
      this._addSignature(s.publicKey, z(r));
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
    U(t.length === 64);
    const n = this.signatures.findIndex((s) => e.equals(s.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[n].signature = B.Buffer.from(t);
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
      s === null ? t && (n.missing || (n.missing = [])).push(r) : Pr(s, e, r.toBytes()) || (n.invalid || (n.invalid = [])).push(r);
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
    de(n, t.length);
    const s = n.length + t.length * 64 + e.length, r = B.Buffer.alloc(s);
    return U(t.length < 256), B.Buffer.from(n).copy(r, 0), t.forEach(({
      signature: o
    }, a) => {
      o !== null && (U(o.length === 64, "signature has invalid length"), B.Buffer.from(o).copy(r, n.length + a * 64));
    }), e.copy(r, n.length + t.length * 64), U(r.length <= ve, `Transaction too large: ${r.length} > ${ve}`), r;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return U(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return U(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return U(this.instructions.length === 1), this.instructions[0].data;
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
    const n = ie(t);
    let s = [];
    for (let r = 0; r < n; r++) {
      const o = oe(t, 0, it);
      s.push(ne.encode(B.Buffer.from(o)));
    }
    return O.populate(pe.from(t), s);
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
    const n = new O();
    return n.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]), t.forEach((s, r) => {
      const o = {
        signature: s == ne.encode(zr) ? null : ne.decode(s),
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
      n.instructions.push(new $({
        keys: r,
        programId: e.accountKeys[s.programIdIndex],
        data: ne.decode(s.data)
      }));
    }), n._message = e, n._json = n.toJSON(), n;
  }
}
class sn {
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
    } = n, d = o - a;
    U(d > 0, "Message header is invalid");
    const l = e.staticAccountKeys.length - o - c;
    U(l >= 0, "Message header is invalid");
    const f = e.getAccountKeys(t), k = f.get(0);
    if (k === void 0)
      throw new Error("Failed to decompile message because no account keys were found");
    const h = [];
    for (const m of s) {
      const p = [];
      for (const L of m.accountKeyIndexes) {
        const V = f.get(L);
        if (V === void 0)
          throw new Error(`Failed to find key for account key index ${L}`);
        const ue = L < o;
        let me;
        ue ? me = L < d : L < f.staticAccountKeys.length ? me = L - o < l : me = L - f.staticAccountKeys.length < // accountKeysFromLookups cannot be undefined because we already found a pubkey for this index above
        f.accountKeysFromLookups.writable.length, p.push({
          pubkey: V,
          isSigner: L < n.numRequiredSignatures,
          isWritable: me
        });
      }
      const _ = f.get(m.programIdIndex);
      if (_ === void 0)
        throw new Error(`Failed to find program id for program id index ${m.programIdIndex}`);
      h.push(new $({
        programId: _,
        data: z(m.data),
        keys: p
      }));
    }
    return new sn({
      payerKey: k,
      instructions: h,
      recentBlockhash: r
    });
  }
  compileToLegacyMessage() {
    return pe.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions
    });
  }
  compileToV0Message(e) {
    return We.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts: e
    });
  }
}
class rn {
  get version() {
    return this.message.version;
  }
  constructor(e, t) {
    if (this.signatures = void 0, this.message = void 0, t !== void 0)
      U(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
    else {
      const n = [];
      for (let s = 0; s < e.header.numRequiredSignatures; s++)
        n.push(new Uint8Array(it));
      this.signatures = n;
    }
    this.message = e;
  }
  serialize() {
    const e = this.message.serialize(), t = Array();
    de(t, this.signatures.length);
    const n = P([J(t.length, "encodedSignaturesLength"), re(vr(), this.signatures.length, "signatures"), J(e.length, "serializedMessage")]), s = new Uint8Array(2048), r = n.encode({
      encodedSignaturesLength: new Uint8Array(t),
      signatures: this.signatures,
      serializedMessage: e
    }, s);
    return s.slice(0, r);
  }
  static deserialize(e) {
    let t = [...e];
    const n = [], s = ie(t);
    for (let o = 0; o < s; o++)
      n.push(new Uint8Array(oe(t, 0, it)));
    const r = nn.deserialize(new Uint8Array(t));
    return new rn(r, n);
  }
  sign(e) {
    const t = this.message.serialize(), n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const s of e) {
      const r = n.findIndex((o) => o.equals(s.publicKey));
      U(r >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`), this.signatures[r] = Zt(t, s.secretKey);
    }
  }
  addSignature(e, t) {
    U(t.byteLength === 64, "Signature must be 64 bytes long");
    const s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((r) => r.equals(e));
    U(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[s] = t;
  }
}
const Nr = 160, Wr = 64, Or = Nr / Wr, es = 1e3 / Or, ae = new g("SysvarC1ock11111111111111111111111111111111"), Mr = new g("SysvarEpochSchedu1e111111111111111111111111"), ts = new g("Sysvar1nstructions1111111111111111111111111"), pt = new g("SysvarRecentB1ockHashes11111111111111111111"), fe = new g("SysvarRent111111111111111111111111111111111"), Ur = new g("SysvarRewards111111111111111111111111111111"), qr = new g("SysvarS1otHashes111111111111111111111111111"), Dr = new g("SysvarS1otHistory11111111111111111111111111"), mt = new g("SysvarStakeHistory1111111111111111111111111");
async function Ut(i, e, t, n) {
  const s = n && {
    skipPreflight: n.skipPreflight,
    preflightCommitment: n.preflightCommitment || n.commitment,
    maxRetries: n.maxRetries,
    minContextSlot: n.minContextSlot
  }, r = await i.sendTransaction(e, t, s);
  let o;
  if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
    o = (await i.confirmTransaction({
      abortSignal: n == null ? void 0 : n.abortSignal,
      signature: r,
      blockhash: e.recentBlockhash,
      lastValidBlockHeight: e.lastValidBlockHeight
    }, n && n.commitment)).value;
  else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
    const {
      nonceInstruction: a
    } = e.nonceInfo, c = a.keys[0].pubkey;
    o = (await i.confirmTransaction({
      abortSignal: n == null ? void 0 : n.abortSignal,
      minContextSlot: e.minNonceContextSlot,
      nonceAccountPubkey: c,
      nonceValue: e.nonceInfo.nonce,
      signature: r
    }, n && n.commitment)).value;
  } else
    (n == null ? void 0 : n.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), o = (await i.confirmTransaction(r, n && n.commitment)).value;
  if (o.err)
    throw new Error(`Transaction ${r} failed (${JSON.stringify(o)})`);
  return r;
}
function Ce(i) {
  return new Promise((e) => setTimeout(e, i));
}
function W(i, e) {
  const t = i.layout.span >= 0 ? i.layout.span : Zn(i, e), n = B.Buffer.alloc(t), s = Object.assign({
    instruction: i.index
  }, e);
  return i.layout.encode(s, n), n;
}
function D(i, e) {
  let t;
  try {
    t = i.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.instruction !== i.index)
    throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${i.index}`);
  return t;
}
const ns = se("lamportsPerSignature"), ss = P([R("version"), R("state"), N("authorizedPubkey"), N("nonce"), P([ns], "feeCalculator")]), qt = ss.span;
class _t {
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
    const t = ss.decode(z(e), 0);
    return new _t({
      authorizedPubkey: new g(t.authorizedPubkey),
      nonce: new g(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
const Fr = (i) => {
  const e = i.decode.bind(i), t = i.encode.bind(i);
  return {
    decode: e,
    encode: t
  };
}, Vr = (i) => (e) => {
  const t = J(i, e), {
    encode: n,
    decode: s
  } = Fr(t), r = t;
  return r.decode = (o, a) => {
    const c = s(o, a);
    return Xs(B.Buffer.from(c));
  }, r.encode = (o, a, c) => {
    const d = Vn(o, i);
    return n(d, a, c);
  }, r;
}, Ge = Vr(8);
class $r {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Decode a system instruction and retrieve the instruction type.
   */
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R("instruction").decode(e.data);
    let s;
    for (const [r, o] of Object.entries(G))
      if (o.index == n) {
        s = r;
        break;
      }
    if (!s)
      throw new Error("Instruction type incorrect; not a SystemInstruction");
    return s;
  }
  /**
   * Decode a create account system instruction and retrieve the instruction params.
   */
  static decodeCreateAccount(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      lamports: t,
      space: n,
      programId: s
    } = D(G.Create, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      newAccountPubkey: e.keys[1].pubkey,
      lamports: t,
      space: n,
      programId: new g(s)
    };
  }
  /**
   * Decode a transfer system instruction and retrieve the instruction params.
   */
  static decodeTransfer(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      lamports: t
    } = D(G.Transfer, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      toPubkey: e.keys[1].pubkey,
      lamports: t
    };
  }
  /**
   * Decode a transfer with seed system instruction and retrieve the instruction params.
   */
  static decodeTransferWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      lamports: t,
      seed: n,
      programId: s
    } = D(G.TransferWithSeed, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      basePubkey: e.keys[1].pubkey,
      toPubkey: e.keys[2].pubkey,
      lamports: t,
      seed: n,
      programId: new g(s)
    };
  }
  /**
   * Decode an allocate system instruction and retrieve the instruction params.
   */
  static decodeAllocate(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const {
      space: t
    } = D(G.Allocate, e.data);
    return {
      accountPubkey: e.keys[0].pubkey,
      space: t
    };
  }
  /**
   * Decode an allocate with seed system instruction and retrieve the instruction params.
   */
  static decodeAllocateWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const {
      base: t,
      seed: n,
      space: s,
      programId: r
    } = D(G.AllocateWithSeed, e.data);
    return {
      accountPubkey: e.keys[0].pubkey,
      basePubkey: new g(t),
      seed: n,
      space: s,
      programId: new g(r)
    };
  }
  /**
   * Decode an assign system instruction and retrieve the instruction params.
   */
  static decodeAssign(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const {
      programId: t
    } = D(G.Assign, e.data);
    return {
      accountPubkey: e.keys[0].pubkey,
      programId: new g(t)
    };
  }
  /**
   * Decode an assign with seed system instruction and retrieve the instruction params.
   */
  static decodeAssignWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const {
      base: t,
      seed: n,
      programId: s
    } = D(G.AssignWithSeed, e.data);
    return {
      accountPubkey: e.keys[0].pubkey,
      basePubkey: new g(t),
      seed: n,
      programId: new g(s)
    };
  }
  /**
   * Decode a create account with seed system instruction and retrieve the instruction params.
   */
  static decodeCreateWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      base: t,
      seed: n,
      lamports: s,
      space: r,
      programId: o
    } = D(G.CreateWithSeed, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      newAccountPubkey: e.keys[1].pubkey,
      basePubkey: new g(t),
      seed: n,
      lamports: s,
      space: r,
      programId: new g(o)
    };
  }
  /**
   * Decode a nonce initialize system instruction and retrieve the instruction params.
   */
  static decodeNonceInitialize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      authorized: t
    } = D(G.InitializeNonceAccount, e.data);
    return {
      noncePubkey: e.keys[0].pubkey,
      authorizedPubkey: new g(t)
    };
  }
  /**
   * Decode a nonce advance system instruction and retrieve the instruction params.
   */
  static decodeNonceAdvance(e) {
    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), D(G.AdvanceNonceAccount, e.data), {
      noncePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[2].pubkey
    };
  }
  /**
   * Decode a nonce withdraw system instruction and retrieve the instruction params.
   */
  static decodeNonceWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
    const {
      lamports: t
    } = D(G.WithdrawNonceAccount, e.data);
    return {
      noncePubkey: e.keys[0].pubkey,
      toPubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[4].pubkey,
      lamports: t
    };
  }
  /**
   * Decode a nonce authorize system instruction and retrieve the instruction params.
   */
  static decodeNonceAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      authorized: t
    } = D(G.AuthorizeNonceAccount, e.data);
    return {
      noncePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[1].pubkey,
      newAuthorizedPubkey: new g(t)
    };
  }
  /**
   * @internal
   */
  static checkProgramId(e) {
    if (!e.equals(H.programId))
      throw new Error("invalid instruction; programId is not SystemProgram");
  }
  /**
   * @internal
   */
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const G = Object.freeze({
  Create: {
    index: 0,
    layout: P([R("instruction"), he("lamports"), he("space"), N("programId")])
  },
  Assign: {
    index: 1,
    layout: P([R("instruction"), N("programId")])
  },
  Transfer: {
    index: 2,
    layout: P([R("instruction"), Ge("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: P([R("instruction"), N("base"), Ke("seed"), he("lamports"), he("space"), N("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: P([R("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: P([R("instruction"), he("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: P([R("instruction"), N("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: P([R("instruction"), N("authorized")])
  },
  Allocate: {
    index: 8,
    layout: P([R("instruction"), he("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: P([R("instruction"), N("base"), Ke("seed"), he("space"), N("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: P([R("instruction"), N("base"), Ke("seed"), N("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: P([R("instruction"), Ge("lamports"), Ke("seed"), N("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: P([R("instruction")])
  }
});
class H {
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
    const t = G.Create, n = W(t, {
      lamports: e.lamports,
      space: e.space,
      programId: z(e.programId.toBuffer())
    });
    return new $({
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
      const s = G.TransferWithSeed;
      t = W(s, {
        lamports: BigInt(e.lamports),
        seed: e.seed,
        programId: z(e.programId.toBuffer())
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
      const s = G.Transfer;
      t = W(s, {
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
    return new $({
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
      const s = G.AssignWithSeed;
      t = W(s, {
        base: z(e.basePubkey.toBuffer()),
        seed: e.seed,
        programId: z(e.programId.toBuffer())
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
      const s = G.Assign;
      t = W(s, {
        programId: z(e.programId.toBuffer())
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new $({
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
    const t = G.CreateWithSeed, n = W(t, {
      base: z(e.basePubkey.toBuffer()),
      seed: e.seed,
      lamports: e.lamports,
      space: e.space,
      programId: z(e.programId.toBuffer())
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
    }), new $({
      keys: s,
      programId: this.programId,
      data: n
    });
  }
  /**
   * Generate a transaction that creates a new Nonce account
   */
  static createNonceAccount(e) {
    const t = new O();
    "basePubkey" in e && "seed" in e ? t.add(H.createAccountWithSeed({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      basePubkey: e.basePubkey,
      seed: e.seed,
      lamports: e.lamports,
      space: qt,
      programId: this.programId
    })) : t.add(H.createAccount({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.noncePubkey,
      lamports: e.lamports,
      space: qt,
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
    const t = G.InitializeNonceAccount, n = W(t, {
      authorized: z(e.authorizedPubkey.toBuffer())
    }), s = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: pt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: fe,
        isSigner: !1,
        isWritable: !1
      }],
      programId: this.programId,
      data: n
    };
    return new $(s);
  }
  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */
  static nonceAdvance(e) {
    const t = G.AdvanceNonceAccount, n = W(t), s = {
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: pt,
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
    return new $(s);
  }
  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */
  static nonceWithdraw(e) {
    const t = G.WithdrawNonceAccount, n = W(t, {
      lamports: e.lamports
    });
    return new $({
      keys: [{
        pubkey: e.noncePubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: e.toPubkey,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: pt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: fe,
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
    const t = G.AuthorizeNonceAccount, n = W(t, {
      authorized: z(e.newAuthorizedPubkey.toBuffer())
    });
    return new $({
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
      const s = G.AllocateWithSeed;
      t = W(s, {
        base: z(e.basePubkey.toBuffer()),
        seed: e.seed,
        space: e.space,
        programId: z(e.programId.toBuffer())
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
      const s = G.Allocate;
      t = W(s, {
        space: e.space
      }), n = [{
        pubkey: e.accountPubkey,
        isSigner: !0,
        isWritable: !0
      }];
    }
    return new $({
      keys: n,
      programId: this.programId,
      data: t
    });
  }
}
H.programId = new g("11111111111111111111111111111111");
const Hr = ve - 300;
class Oe {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Amount of program data placed in each load Transaction
   */
  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(e) {
    return 2 * // Every transaction requires two signatures (payer + program)
    (Math.ceil(e / Oe.chunkSize) + 1 + // Add one for Create transaction
    1);
  }
  /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */
  static async load(e, t, n, s, r) {
    {
      const f = await e.getMinimumBalanceForRentExemption(r.length), k = await e.getAccountInfo(n.publicKey, "confirmed");
      let h = null;
      if (k !== null) {
        if (k.executable)
          return console.error("Program load failed, account is already executable"), !1;
        k.data.length !== r.length && (h = h || new O(), h.add(H.allocate({
          accountPubkey: n.publicKey,
          space: r.length
        }))), k.owner.equals(s) || (h = h || new O(), h.add(H.assign({
          accountPubkey: n.publicKey,
          programId: s
        }))), k.lamports < f && (h = h || new O(), h.add(H.transfer({
          fromPubkey: t.publicKey,
          toPubkey: n.publicKey,
          lamports: f - k.lamports
        })));
      } else
        h = new O().add(H.createAccount({
          fromPubkey: t.publicKey,
          newAccountPubkey: n.publicKey,
          lamports: f > 0 ? f : 1,
          space: r.length,
          programId: s
        }));
      h !== null && await Ut(e, h, [t, n], {
        commitment: "confirmed"
      });
    }
    const o = P([R("instruction"), R("offset"), R("bytesLength"), R("bytesLengthPadding"), re(q("byte"), ze(R(), -8), "bytes")]), a = Oe.chunkSize;
    let c = 0, d = r, l = [];
    for (; d.length > 0; ) {
      const f = d.slice(0, a), k = B.Buffer.alloc(a + 16);
      o.encode({
        instruction: 0,
        // Load instruction
        offset: c,
        bytes: f,
        bytesLength: 0,
        bytesLengthPadding: 0
      }, k);
      const h = new O().add({
        keys: [{
          pubkey: n.publicKey,
          isSigner: !0,
          isWritable: !0
        }],
        programId: s,
        data: k
      });
      l.push(Ut(e, h, [t, n], {
        commitment: "confirmed"
      })), e._rpcEndpoint.includes("solana.com") && await Ce(1e3 / 4), c += a, d = d.slice(a);
    }
    await Promise.all(l);
    {
      const f = P([R("instruction")]), k = B.Buffer.alloc(f.span);
      f.encode({
        instruction: 1
        // Finalize instruction
      }, k);
      const h = new O().add({
        keys: [{
          pubkey: n.publicKey,
          isSigner: !0,
          isWritable: !0
        }, {
          pubkey: fe,
          isSigner: !1,
          isWritable: !1
        }],
        programId: s,
        data: k
      }), m = "processed", p = await e.sendTransaction(h, [t, n], {
        preflightCommitment: m
      }), {
        context: _,
        value: L
      } = await e.confirmTransaction({
        signature: p,
        lastValidBlockHeight: h.lastValidBlockHeight,
        blockhash: h.recentBlockhash
      }, m);
      if (L.err)
        throw new Error(`Transaction ${p} failed (${JSON.stringify(L)})`);
      for (; ; ) {
        try {
          if (await e.getSlot({
            commitment: m
          }) > _.slot)
            break;
        } catch {
        }
        await new Promise((V) => setTimeout(V, Math.round(es / 2)));
      }
    }
    return !0;
  }
}
Oe.chunkSize = Hr;
const Gr = new g("BPFLoader2111111111111111111111111111111111");
class jr {
  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(e) {
    return Oe.getMinNumSignatures(e);
  }
  /**
   * Load a SBF program
   *
   * @param connection The connection to use
   * @param payer Account that will pay program loading fees
   * @param program Account to load the program into
   * @param elf The entire ELF containing the SBF program
   * @param loaderProgramId The program id of the BPF loader to use
   * @return true if program was loaded successfully, false if program was already loaded
   */
  static load(e, t, n, s, r) {
    return Oe.load(e, t, n, r, s);
  }
}
function Yr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Jr = Object.prototype.toString, Xr = Object.keys || function(i) {
  var e = [];
  for (var t in i)
    e.push(t);
  return e;
};
function nt(i, e) {
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
        return nt(i.toJSON(), e);
      if (c = Jr.call(i), c === "[object Array]") {
        for (s = "[", n = i.length - 1, t = 0; t < n; t++)
          s += nt(i[t], !0) + ",";
        return n > -1 && (s += nt(i[t], !0)), s + "]";
      } else if (c === "[object Object]") {
        for (r = Xr(i).sort(), n = r.length, s = "", t = 0; t < n; )
          o = r[t], a = nt(i[o], !1), a !== void 0 && (s && (s += ","), s += JSON.stringify(o) + ":" + a), t++;
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
var Zr = function(i) {
  var e = nt(i, !1);
  if (e !== void 0)
    return "" + e;
}, Bn = /* @__PURE__ */ Yr(Zr);
const et = 32;
function zt(i) {
  let e = 0;
  for (; i > 1; )
    i /= 2, e++;
  return e;
}
function Qr(i) {
  return i === 0 ? 1 : (i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i |= i >> 32, i + 1);
}
class rs {
  constructor(e, t, n, s, r) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = n, this.firstNormalEpoch = s, this.firstNormalSlot = r;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = zt(Qr(e + et + 1)) - zt(et) - 1, n = this.getSlotsInEpoch(t), s = e - (n - et);
      return [t, s];
    } else {
      const t = e - this.firstNormalSlot, n = Math.floor(t / this.slotsPerEpoch), s = this.firstNormalEpoch + n, r = t % this.slotsPerEpoch;
      return [s, r];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * et : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + zt(et)) : this.slotsPerEpoch;
  }
}
class Dt extends Error {
  constructor(e, t) {
    super(e), this.logs = void 0, this.logs = t;
  }
}
const ei = {
  JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
  JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
  JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
  JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
  JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
  JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
  JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
  JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
  JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
  JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
  JSON_RPC_SCAN_ERROR: -32012,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
  JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
  JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
  JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
};
class E extends Error {
  constructor({
    code: e,
    message: t,
    data: n
  }, s) {
    super(s != null ? `${s}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
var ti = globalThis.fetch;
class ni extends Zs {
  constructor(e, t, n) {
    const s = (r) => {
      const o = er(r, {
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
function si(i, e) {
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
const vn = 56;
class Ft {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = si(ri, e), n = e.length - vn;
    U(n >= 0, "lookup table is invalid"), U(n % 32 === 0, "lookup table is invalid");
    const s = n / 32, {
      addresses: r
    } = P([re(N(), s, "addresses")]).decode(e.slice(vn));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new g(t.authority[0]) : void 0,
      addresses: r.map((o) => new g(o))
    };
  }
}
const ri = {
  index: 1,
  layout: P([
    R("typeIndex"),
    Ge("deactivationSlot"),
    se("lastExtendedSlot"),
    q("lastExtendedStartIndex"),
    q(),
    // option
    re(N(), ze(q(), -1), "authority")
  ])
}, ii = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function oi(i) {
  const e = i.match(ii);
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
const ee = ht(Jt(g), b(), (i) => new g(i)), is = Xt([b(), X("base64")]), on = ht(Jt(B.Buffer), is, (i) => B.Buffer.from(i[0], "base64")), os = 30 * 1e3;
function ai(i) {
  if (/^https?:/.test(i) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return i;
}
function j(i) {
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
function as(i) {
  return ce([y({
    jsonrpc: X("2.0"),
    id: b(),
    result: i
  }), y({
    jsonrpc: X("2.0"),
    id: b(),
    error: y({
      code: lt(),
      message: b(),
      data: v(Ir())
    })
  })]);
}
const ci = as(lt());
function K(i) {
  return ht(as(i), ci, (e) => "error" in e ? e : {
    ...e,
    result: S(e.result, i)
  });
}
function Z(i) {
  return K(y({
    context: y({
      slot: u()
    }),
    value: i
  }));
}
function Pt(i) {
  return y({
    context: y({
      slot: u()
    }),
    value: i
  });
}
function Nt(i, e) {
  return i === 0 ? new We({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new g(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: ne.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new pe(e);
}
const ui = y({
  foundation: u(),
  foundationTerm: u(),
  initial: u(),
  taper: u(),
  terminal: u()
}), di = K(I(w(y({
  epoch: u(),
  effectiveSlot: u(),
  amount: u(),
  postBalance: u(),
  commission: v(w(u()))
})))), li = I(y({
  slot: u(),
  prioritizationFee: u()
})), hi = y({
  total: u(),
  validator: u(),
  foundation: u(),
  epoch: u()
}), fi = y({
  epoch: u(),
  slotIndex: u(),
  slotsInEpoch: u(),
  absoluteSlot: u(),
  blockHeight: v(u()),
  transactionCount: v(u())
}), gi = y({
  slotsPerEpoch: u(),
  leaderScheduleSlotOffset: u(),
  warmup: Ie(),
  firstNormalEpoch: u(),
  firstNormalSlot: u()
}), yi = jn(b(), I(u())), qe = w(ce([y({}), b()])), pi = y({
  err: qe
}), mi = X("receivedSignature"), bi = y({
  "solana-core": b(),
  "feature-set": v(u())
}), Ln = Z(y({
  err: w(ce([y({}), b()])),
  logs: w(I(b())),
  accounts: v(w(I(w(y({
    executable: Ie(),
    owner: b(),
    lamports: u(),
    data: I(b()),
    rentEpoch: v(u())
  }))))),
  unitsConsumed: v(u()),
  returnData: v(w(y({
    programId: b(),
    data: Xt([b(), X("base64")])
  })))
})), ki = Z(y({
  byIdentity: jn(b(), I(u())),
  range: y({
    firstSlot: u(),
    lastSlot: u()
  })
}));
function Si(i, e, t, n, s, r) {
  const o = t || ti;
  let a;
  r != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
  let c;
  return n && (c = async (l, f) => {
    const k = await new Promise((h, m) => {
      try {
        n(l, f, (p, _) => h([p, _]));
      } catch (p) {
        m(p);
      }
    });
    return await o(...k);
  }), new Qs(async (l, f) => {
    const k = {
      method: "POST",
      body: l,
      agent: a,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, Io)
    };
    try {
      let h = 5, m, p = 500;
      for (; c ? m = await c(i, k) : m = await o(i, k), !(m.status !== 429 || s === !0 || (h -= 1, h === 0)); )
        console.error(`Server responded with ${m.status} ${m.statusText}.  Retrying after ${p}ms delay...`), await Ce(p), p *= 2;
      const _ = await m.text();
      m.ok ? f(null, _) : f(new Error(`${m.status} ${m.statusText}: ${_}`));
    } catch (h) {
      h instanceof Error && f(h);
    }
  }, {});
}
function wi(i) {
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
function Ii(i) {
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
const Ai = K(ui), _i = K(hi), Pi = K(li), Ri = K(fi), Ei = K(gi), Ti = K(yi), Bi = K(u()), vi = Z(y({
  total: u(),
  circulating: u(),
  nonCirculating: u(),
  nonCirculatingAccounts: I(ee)
})), Vt = y({
  amount: b(),
  uiAmount: w(u()),
  decimals: u(),
  uiAmountString: v(b())
}), Li = Z(I(y({
  address: ee,
  amount: b(),
  uiAmount: w(u()),
  decimals: u(),
  uiAmountString: v(b())
}))), Ci = Z(I(y({
  pubkey: ee,
  account: y({
    executable: Ie(),
    owner: ee,
    lamports: u(),
    data: on,
    rentEpoch: u()
  })
}))), $t = y({
  program: b(),
  parsed: lt(),
  space: u()
}), xi = Z(I(y({
  pubkey: ee,
  account: y({
    executable: Ie(),
    owner: ee,
    lamports: u(),
    data: $t,
    rentEpoch: u()
  })
}))), Ki = Z(I(y({
  lamports: u(),
  address: ee
}))), at = y({
  executable: Ie(),
  owner: ee,
  lamports: u(),
  data: on,
  rentEpoch: u()
}), zi = y({
  pubkey: ee,
  account: at
}), Ni = ht(ce([Jt(B.Buffer), $t]), ce([is, $t]), (i) => Array.isArray(i) ? S(i, on) : i), Ht = y({
  executable: Ie(),
  owner: ee,
  lamports: u(),
  data: Ni,
  rentEpoch: u()
}), Wi = y({
  pubkey: ee,
  account: Ht
}), Oi = y({
  state: ce([X("active"), X("inactive"), X("activating"), X("deactivating")]),
  active: u(),
  inactive: u()
}), Mi = K(I(y({
  signature: b(),
  slot: u(),
  err: qe,
  memo: w(b()),
  blockTime: v(w(u()))
}))), Ui = K(I(y({
  signature: b(),
  slot: u(),
  err: qe,
  memo: w(b()),
  blockTime: v(w(u()))
}))), qi = y({
  subscription: u(),
  result: Pt(at)
}), Di = y({
  pubkey: ee,
  account: at
}), Fi = y({
  subscription: u(),
  result: Pt(Di)
}), Vi = y({
  parent: u(),
  slot: u(),
  root: u()
}), $i = y({
  subscription: u(),
  result: Vi
}), Hi = ce([y({
  type: ce([X("firstShredReceived"), X("completed"), X("optimisticConfirmation"), X("root")]),
  slot: u(),
  timestamp: u()
}), y({
  type: X("createdBank"),
  parent: u(),
  slot: u(),
  timestamp: u()
}), y({
  type: X("frozen"),
  slot: u(),
  timestamp: u(),
  stats: y({
    numTransactionEntries: u(),
    numSuccessfulTransactions: u(),
    numFailedTransactions: u(),
    maxTransactionsPerEntry: u()
  })
}), y({
  type: X("dead"),
  slot: u(),
  timestamp: u(),
  err: b()
})]), Gi = y({
  subscription: u(),
  result: Hi
}), ji = y({
  subscription: u(),
  result: Pt(ce([pi, mi]))
}), Yi = y({
  subscription: u(),
  result: u()
}), Ji = y({
  pubkey: b(),
  gossip: w(b()),
  tpu: w(b()),
  rpc: w(b()),
  version: w(b())
}), Cn = y({
  votePubkey: b(),
  nodePubkey: b(),
  activatedStake: u(),
  epochVoteAccount: Ie(),
  epochCredits: I(Xt([u(), u(), u()])),
  commission: u(),
  lastVote: u(),
  rootSlot: w(u())
}), Xi = K(y({
  current: I(Cn),
  delinquent: I(Cn)
})), Zi = ce([X("processed"), X("confirmed"), X("finalized")]), Qi = y({
  slot: u(),
  confirmations: w(u()),
  err: qe,
  confirmationStatus: v(Zi)
}), eo = Z(I(w(Qi))), to = K(u()), cs = y({
  accountKey: ee,
  writableIndexes: I(u()),
  readonlyIndexes: I(u())
}), an = y({
  signatures: I(b()),
  message: y({
    accountKeys: I(b()),
    header: y({
      numRequiredSignatures: u(),
      numReadonlySignedAccounts: u(),
      numReadonlyUnsignedAccounts: u()
    }),
    instructions: I(y({
      accounts: I(u()),
      data: b(),
      programIdIndex: u()
    })),
    recentBlockhash: b(),
    addressTableLookups: v(I(cs))
  })
}), us = y({
  pubkey: ee,
  signer: Ie(),
  writable: Ie(),
  source: v(ce([X("transaction"), X("lookupTable")]))
}), ds = y({
  accountKeys: I(us),
  signatures: I(b())
}), ls = y({
  parsed: lt(),
  program: b(),
  programId: ee
}), hs = y({
  accounts: I(ee),
  data: b(),
  programId: ee
}), no = ce([hs, ls]), so = ce([y({
  parsed: lt(),
  program: b(),
  programId: b()
}), y({
  accounts: I(b()),
  data: b(),
  programId: b()
})]), fs = ht(no, so, (i) => "accounts" in i ? S(i, hs) : S(i, ls)), gs = y({
  signatures: I(b()),
  message: y({
    accountKeys: I(us),
    instructions: I(fs),
    recentBlockhash: b(),
    addressTableLookups: v(w(I(cs)))
  })
}), St = y({
  accountIndex: u(),
  mint: b(),
  owner: v(b()),
  uiTokenAmount: Vt
}), ys = y({
  writable: I(ee),
  readonly: I(ee)
}), Rt = y({
  err: qe,
  fee: u(),
  innerInstructions: v(w(I(y({
    index: u(),
    instructions: I(y({
      accounts: I(u()),
      data: b(),
      programIdIndex: u()
    }))
  })))),
  preBalances: I(u()),
  postBalances: I(u()),
  logMessages: v(w(I(b()))),
  preTokenBalances: v(w(I(St))),
  postTokenBalances: v(w(I(St))),
  loadedAddresses: v(ys),
  computeUnitsConsumed: v(u())
}), cn = y({
  err: qe,
  fee: u(),
  innerInstructions: v(w(I(y({
    index: u(),
    instructions: I(fs)
  })))),
  preBalances: I(u()),
  postBalances: I(u()),
  logMessages: v(w(I(b()))),
  preTokenBalances: v(w(I(St))),
  postTokenBalances: v(w(I(St))),
  loadedAddresses: v(ys),
  computeUnitsConsumed: v(u())
}), Je = ce([X(0), X("legacy")]), De = y({
  pubkey: b(),
  lamports: u(),
  postBalance: w(u()),
  rewardType: w(b()),
  commission: v(w(u()))
}), ro = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  transactions: I(y({
    transaction: an,
    meta: w(Rt),
    version: v(Je)
  })),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), io = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), oo = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  transactions: I(y({
    transaction: ds,
    meta: w(Rt),
    version: v(Je)
  })),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), ao = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  transactions: I(y({
    transaction: gs,
    meta: w(cn),
    version: v(Je)
  })),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), co = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  transactions: I(y({
    transaction: ds,
    meta: w(cn),
    version: v(Je)
  })),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), uo = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  rewards: v(I(De)),
  blockTime: w(u()),
  blockHeight: w(u())
}))), lo = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  transactions: I(y({
    transaction: an,
    meta: w(Rt)
  })),
  rewards: v(I(De)),
  blockTime: w(u())
}))), xn = K(w(y({
  blockhash: b(),
  previousBlockhash: b(),
  parentSlot: u(),
  signatures: I(b()),
  blockTime: w(u())
}))), Wt = K(w(y({
  slot: u(),
  meta: w(Rt),
  blockTime: v(w(u())),
  transaction: an,
  version: v(Je)
}))), gt = K(w(y({
  slot: u(),
  transaction: gs,
  meta: w(cn),
  blockTime: v(w(u())),
  version: v(Je)
}))), ho = Z(y({
  blockhash: b(),
  feeCalculator: y({
    lamportsPerSignature: u()
  })
})), fo = Z(y({
  blockhash: b(),
  lastValidBlockHeight: u()
})), go = Z(Ie()), yo = y({
  slot: u(),
  numTransactions: u(),
  numSlots: u(),
  samplePeriodSecs: u()
}), po = K(I(yo)), mo = Z(w(y({
  feeCalculator: y({
    lamportsPerSignature: u()
  })
}))), bo = K(b()), ko = K(b()), So = y({
  err: qe,
  logs: I(b()),
  signature: b()
}), wo = y({
  result: Pt(So),
  subscription: u()
}), Io = {
  "solana-client": "js/0.0.0-development"
};
class Ao {
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
      const d = {};
      return async (l) => {
        const {
          commitment: f,
          config: k
        } = j(l), h = this._buildArgs([], f, void 0, k), m = Bn(h);
        return d[m] = d[m] ?? (async () => {
          try {
            const p = await this._rpcRequest("getBlockHeight", h), _ = S(p, K(u()));
            if ("error" in _)
              throw new E(_.error, "failed to get block height information");
            return _.result;
          } finally {
            delete d[m];
          }
        })(), await d[m];
      };
    })();
    let n, s, r, o, a, c;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, n = t.wsEndpoint, s = t.httpHeaders, r = t.fetch, o = t.fetchMiddleware, a = t.disableRetryOnRateLimit, c = t.httpAgent), this._rpcEndpoint = ai(e), this._rpcWsEndpoint = n || oi(e), this._rpcClient = Si(e, s, r, o, a, c), this._rpcRequest = wi(this._rpcClient), this._rpcBatchRequest = Ii(this._rpcClient), this._rpcWebSocket = new ni(this._rpcWsEndpoint, {
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
    } = j(t), r = this._buildArgs([e.toBase58()], n, void 0, s), o = await this._rpcRequest("getBalance", r), a = S(o, Z(u()));
    if ("error" in a)
      throw new E(a.error, `failed to get balance for ${e.toBase58()}`);
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
    const t = await this._rpcRequest("getBlockTime", [e]), n = S(t, K(w(u())));
    if ("error" in n)
      throw new E(n.error, `failed to get block time for slot ${e}`);
    return n.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = S(e, K(u()));
    if ("error" in t)
      throw new E(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = S(e, Bi);
    if ("error" in t)
      throw new E(t.error, "failed to get first available block");
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
    const n = await this._rpcRequest("getSupply", [t]), s = S(n, vi);
    if ("error" in s)
      throw new E(s.error, "failed to get supply");
    return s.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenSupply", n), r = S(s, Z(Vt));
    if ("error" in r)
      throw new E(r.error, "failed to get token supply");
    return r.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenAccountBalance", n), r = S(s, Z(Vt));
    if ("error" in r)
      throw new E(r.error, "failed to get token account balance");
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
    } = j(n);
    let o = [e.toBase58()];
    "mint" in t ? o.push({
      mint: t.mint.toBase58()
    }) : o.push({
      programId: t.programId.toBase58()
    });
    const a = this._buildArgs(o, s, "base64", r), c = await this._rpcRequest("getTokenAccountsByOwner", a), d = S(c, Ci);
    if ("error" in d)
      throw new E(d.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return d.result;
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
    const r = this._buildArgs(s, n, "jsonParsed"), o = await this._rpcRequest("getTokenAccountsByOwner", r), a = S(o, xi);
    if ("error" in a)
      throw new E(a.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, n = t.filter || t.commitment ? [t] : [], s = await this._rpcRequest("getLargestAccounts", n), r = S(s, Ki);
    if ("error" in r)
      throw new E(r.error, "failed to get largest accounts");
    return r.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenLargestAccounts", n), r = S(s, Li);
    if ("error" in r)
      throw new E(r.error, "failed to get token largest accounts");
    return r.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = j(t), r = this._buildArgs([e.toBase58()], n, "base64", s), o = await this._rpcRequest("getAccountInfo", r), a = S(o, Z(w(at)));
    if ("error" in a)
      throw new E(a.error, `failed to get info about account ${e.toBase58()}`);
    return a.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(e, t) {
    const {
      commitment: n,
      config: s
    } = j(t), r = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getAccountInfo", r), a = S(o, Z(w(Ht)));
    if ("error" in a)
      throw new E(a.error, `failed to get info about account ${e.toBase58()}`);
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
    } = j(t), r = e.map((d) => d.toBase58()), o = this._buildArgs([r], n, "jsonParsed", s), a = await this._rpcRequest("getMultipleAccounts", o), c = S(a, Z(I(w(Ht))));
    if ("error" in c)
      throw new E(c.error, `failed to get info for accounts ${r}`);
    return c.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = j(t), r = e.map((d) => d.toBase58()), o = this._buildArgs([r], n, "base64", s), a = await this._rpcRequest("getMultipleAccounts", o), c = S(a, Z(I(w(at))));
    if ("error" in c)
      throw new E(c.error, `failed to get info for accounts ${r}`);
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
    } = j(t), o = this._buildArgs([e.toBase58()], s, void 0, {
      ...r,
      epoch: n ?? (r == null ? void 0 : r.epoch)
    }), a = await this._rpcRequest("getStakeActivation", o), c = S(a, K(Oi));
    if ("error" in c)
      throw new E(c.error, `failed to get Stake Activation ${e.toBase58()}`);
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
    } = j(t), {
      encoding: r,
      ...o
    } = s || {}, a = this._buildArgs([e.toBase58()], n, r || "base64", o), c = await this._rpcRequest("getProgramAccounts", a), d = I(zi), l = o.withContext === !0 ? S(c, Z(d)) : S(c, K(d));
    if ("error" in l)
      throw new E(l.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return l.result;
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
    } = j(t), r = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getProgramAccounts", r), a = S(o, K(I(Wi)));
    if ("error" in a)
      throw new E(a.error, `failed to get accounts owned by program ${e.toBase58()}`);
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
      s = ne.decode(n);
    } catch {
      throw new Error("signature must be base58 encoded: " + n);
    }
    return U(s.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
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
    const o = new Promise((c, d) => {
      try {
        n = this.onSignature(t, (f, k) => {
          n = void 0;
          const h = {
            context: k,
            value: f
          };
          c({
            __type: Re.PROCESSED,
            response: h
          });
        }, e);
        const l = new Promise((f) => {
          n == null ? f() : s = this._onSubscriptionStateChange(n, (k) => {
            k === "subscribed" && f();
          });
        });
        (async () => {
          if (await l, r)
            return;
          const f = await this.getSignatureStatus(t);
          if (r || f == null)
            return;
          const {
            context: k,
            value: h
          } = f;
          if (h != null)
            if (h != null && h.err)
              d(h.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (h.confirmationStatus === "processed")
                    return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (h.confirmationStatus === "processed" || h.confirmationStatus === "confirmed")
                    return;
                  break;
                }
                case "processed":
                case "recent":
              }
              r = !0, c({
                __type: Re.PROCESSED,
                response: {
                  context: k,
                  value: h
                }
              });
            }
        })();
      } catch (l) {
        d(l);
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
    const o = new Promise((f) => {
      const k = async () => {
        try {
          return await this.getBlockHeight(e);
        } catch {
          return -1;
        }
      };
      (async () => {
        let h = await k();
        if (!r) {
          for (; h <= n; )
            if (await Ce(1e3), r || (h = await k(), r))
              return;
          f({
            __type: Re.BLOCKHEIGHT_EXCEEDED
          });
        }
      })();
    }), {
      abortConfirmation: a,
      confirmationPromise: c
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: s
    }), d = this.getCancellationPromise(t);
    let l;
    try {
      const f = await Promise.race([d, c, o]);
      if (f.__type === Re.PROCESSED)
        l = f.response;
      else
        throw new en(s);
    } finally {
      r = !0, a();
    }
    return l;
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
    const c = new Promise((h) => {
      let m = r, p = null;
      const _ = async () => {
        try {
          const {
            context: L,
            value: V
          } = await this.getNonceAndContext(s, {
            commitment: e,
            minContextSlot: n
          });
          return p = L.slot, V == null ? void 0 : V.nonce;
        } catch {
          return m;
        }
      };
      (async () => {
        if (m = await _(), !a)
          for (; ; ) {
            if (r !== m) {
              h({
                __type: Re.NONCE_INVALID,
                slotInWhichNonceDidAdvance: p
              });
              return;
            }
            if (await Ce(2e3), a || (m = await _(), a))
              return;
          }
      })();
    }), {
      abortConfirmation: d,
      confirmationPromise: l
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: o
    }), f = this.getCancellationPromise(t);
    let k;
    try {
      const h = await Promise.race([f, l, c]);
      if (h.__type === Re.PROCESSED)
        k = h.response;
      else {
        let m;
        for (; ; ) {
          const p = await this.getSignatureStatus(o);
          if (p == null)
            break;
          if (p.context.slot < (h.slotInWhichNonceDidAdvance ?? n)) {
            await Ce(400);
            continue;
          }
          m = p;
          break;
        }
        if (m != null && m.value) {
          const p = e || "finalized", {
            confirmationStatus: _
          } = m.value;
          switch (p) {
            case "processed":
            case "recent":
              if (_ !== "processed" && _ !== "confirmed" && _ !== "finalized")
                throw new Ve(o);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (_ !== "confirmed" && _ !== "finalized")
                throw new Ve(o);
              break;
            case "finalized":
            case "max":
            case "root":
              if (_ !== "finalized")
                throw new Ve(o);
              break;
            default:
          }
          k = {
            context: m.context,
            value: {
              err: m.value.err
            }
          };
        } else
          throw new Ve(o);
      }
    } finally {
      a = !0, d();
    }
    return k;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: e,
    signature: t
  }) {
    let n;
    const s = new Promise((c) => {
      let d = this._confirmTransactionInitialTimeout || 6e4;
      switch (e) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          d = this._confirmTransactionInitialTimeout || 3e4;
          break;
        }
      }
      n = setTimeout(() => c({
        __type: Re.TIMED_OUT,
        timeoutMs: d
      }), d);
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
      if (c.__type === Re.PROCESSED)
        a = c.response;
      else
        throw new tn(t, c.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), r();
    }
    return a;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = S(e, K(I(Ji)));
    if ("error" in t)
      throw new E(t.error, "failed to get cluster nodes");
    return t.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getVoteAccounts", t), s = S(n, Xi);
    if ("error" in s)
      throw new E(s.error, "failed to get vote accounts");
    return s.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(e) {
    const {
      commitment: t,
      config: n
    } = j(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getSlot", s), o = S(r, K(u()));
    if ("error" in o)
      throw new E(o.error, "failed to get slot");
    return o.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(e) {
    const {
      commitment: t,
      config: n
    } = j(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getSlotLeader", s), o = S(r, K(b()));
    if ("error" in o)
      throw new E(o.error, "failed to get slot leader");
    return o.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(e, t) {
    const n = [e, t], s = await this._rpcRequest("getSlotLeaders", n), r = S(s, K(I(ee)));
    if ("error" in r)
      throw new E(r.error, "failed to get slot leaders");
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
    U(s.length === 1);
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
    const s = await this._rpcRequest("getSignatureStatuses", n), r = S(s, eo);
    if ("error" in r)
      throw new E(r.error, "failed to get signature status");
    return r.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(e) {
    const {
      commitment: t,
      config: n
    } = j(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getTransactionCount", s), o = S(r, K(u()));
    if ("error" in o)
      throw new E(o.error, "failed to get transaction count");
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
    const t = this._buildArgs([], e), n = await this._rpcRequest("getInflationGovernor", t), s = S(n, Ai);
    if ("error" in s)
      throw new E(s.error, "failed to get inflation");
    return s.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(e, t, n) {
    const {
      commitment: s,
      config: r
    } = j(n), o = this._buildArgs([e.map((d) => d.toBase58())], s, void 0, {
      ...r,
      epoch: t ?? (r == null ? void 0 : r.epoch)
    }), a = await this._rpcRequest("getInflationReward", o), c = S(a, di);
    if ("error" in c)
      throw new E(c.error, "failed to get inflation reward");
    return c.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const e = await this._rpcRequest("getInflationRate", []), t = S(e, _i);
    if ("error" in t)
      throw new E(t.error, "failed to get inflation rate");
    return t.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(e) {
    const {
      commitment: t,
      config: n
    } = j(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getEpochInfo", s), o = S(r, Ri);
    if ("error" in o)
      throw new E(o.error, "failed to get epoch info");
    return o.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = S(e, Ei);
    if ("error" in t)
      throw new E(t.error, "failed to get epoch schedule");
    const n = t.result;
    return new rs(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = S(e, Ti);
    if ("error" in t)
      throw new E(t.error, "failed to get leader schedule");
    return t.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getMinimumBalanceForRentExemption", n), r = S(s, to);
    return "error" in r ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : r.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getRecentBlockhash", t), s = S(n, ho);
    if ("error" in s)
      throw new E(s.error, "failed to get recent blockhash");
    return s.result;
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), n = S(t, po);
    if ("error" in n)
      throw new E(n.error, "failed to get recent performance samples");
    return n.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getFeeCalculatorForBlockhash", n), r = S(s, mo);
    if ("error" in r)
      throw new E(r.error, "failed to get fee calculator");
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
    const n = z(e.serialize()).toString("base64"), s = this._buildArgs([n], t), r = await this._rpcRequest("getFeeForMessage", s), o = S(r, Z(w(u())));
    if ("error" in o)
      throw new E(o.error, "failed to get fee for message");
    if (o.result === null)
      throw new Error("invalid blockhash");
    return o.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(e) {
    var o;
    const t = (o = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : o.map((a) => a.toBase58()), n = t != null && t.length ? [t] : [], s = await this._rpcRequest("getRecentPrioritizationFees", n), r = S(s, Pi);
    if ("error" in r)
      throw new E(r.error, "failed to get recent prioritization fees");
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
    } = j(e), s = this._buildArgs([], t, void 0, n), r = await this._rpcRequest("getLatestBlockhash", s), o = S(r, fo);
    if ("error" in o)
      throw new E(o.error, "failed to get latest blockhash");
    return o.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(e, t) {
    const {
      commitment: n,
      config: s
    } = j(t), r = this._buildArgs([e], n, void 0, s), o = await this._rpcRequest("isBlockhashValid", r), a = S(o, go);
    if ("error" in a)
      throw new E(a.error, "failed to determine if the blockhash `" + e + "`is valid");
    return a.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = S(e, K(bi));
    if ("error" in t)
      throw new E(t.error, "failed to get version");
    return t.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = S(e, K(b()));
    if ("error" in t)
      throw new E(t.error, "failed to get genesis hash");
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
    } = j(t), r = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getBlock", r);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const a = S(o, oo);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        case "none": {
          const a = S(o, io);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        default: {
          const a = S(o, ro);
          if ("error" in a)
            throw a.error;
          const {
            result: c
          } = a;
          return c ? {
            ...c,
            transactions: c.transactions.map(({
              transaction: d,
              meta: l,
              version: f
            }) => ({
              meta: l,
              transaction: {
                ...d,
                message: Nt(f, d.message)
              },
              version: f
            }))
          } : null;
        }
      }
    } catch (a) {
      throw new E(a, "failed to get confirmed block");
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
    } = j(t), r = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getBlock", r);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const a = S(o, co);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        case "none": {
          const a = S(o, uo);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
        default: {
          const a = S(o, ao);
          if ("error" in a)
            throw a.error;
          return a.result;
        }
      }
    } catch (a) {
      throw new E(a, "failed to get block");
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
    const s = this._buildArgs([], n, "base64", t), r = await this._rpcRequest("getBlockProduction", s), o = S(r, ki);
    if ("error" in o)
      throw new E(o.error, "failed to get block production information");
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
    } = j(t), r = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getTransaction", r), a = S(o, Wt);
    if ("error" in a)
      throw new E(a.error, "failed to get transaction");
    const c = a.result;
    return c && {
      ...c,
      transaction: {
        ...c.transaction,
        message: Nt(c.version, c.transaction.message)
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
    } = j(t), r = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getTransaction", r), a = S(o, gt);
    if ("error" in a)
      throw new E(a.error, "failed to get transaction");
    return a.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(e, t) {
    const {
      commitment: n,
      config: s
    } = j(t), r = e.map((c) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([c], n, "jsonParsed", s)
    }));
    return (await this._rpcBatchRequest(r)).map((c) => {
      const d = S(c, gt);
      if ("error" in d)
        throw new E(d.error, "failed to get transactions");
      return d.result;
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
    } = j(t), r = e.map((c) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([c], n, void 0, s)
    }));
    return (await this._rpcBatchRequest(r)).map((c) => {
      const d = S(c, Wt);
      if ("error" in d)
        throw new E(d.error, "failed to get transactions");
      const l = d.result;
      return l && {
        ...l,
        transaction: {
          ...l.transaction,
          message: Nt(l.version, l.transaction.message)
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
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getConfirmedBlock", n), r = S(s, lo);
    if ("error" in r)
      throw new E(r.error, "failed to get confirmed block");
    const o = r.result;
    if (!o)
      throw new Error("Confirmed block " + e + " not found");
    const a = {
      ...o,
      transactions: o.transactions.map(({
        transaction: c,
        meta: d
      }) => {
        const l = new pe(c.message);
        return {
          meta: d,
          transaction: {
            ...c,
            message: l
          }
        };
      })
    };
    return {
      ...a,
      transactions: a.transactions.map(({
        transaction: c,
        meta: d
      }) => ({
        meta: d,
        transaction: O.populate(c.message, c.signatures)
      }))
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n), r = await this._rpcRequest("getBlocks", s), o = S(r, K(I(u())));
    if ("error" in o)
      throw new E(o.error, "failed to get blocks");
    return o.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), r = S(s, xn);
    if ("error" in r)
      throw new E(r.error, "failed to get block");
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
    }), s = await this._rpcRequest("getConfirmedBlock", n), r = S(s, xn);
    if ("error" in r)
      throw new E(r.error, "failed to get confirmed block");
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
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getConfirmedTransaction", n), r = S(s, Wt);
    if ("error" in r)
      throw new E(r.error, "failed to get transaction");
    const o = r.result;
    if (!o)
      return o;
    const a = new pe(o.transaction.message), c = o.transaction.signatures;
    return {
      ...o,
      transaction: O.populate(a, c)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), s = await this._rpcRequest("getConfirmedTransaction", n), r = S(s, gt);
    if ("error" in r)
      throw new E(r.error, "failed to get confirmed transaction");
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
      const a = S(o, gt);
      if ("error" in a)
        throw new E(a.error, "failed to get confirmed transactions");
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
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), r = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), o = S(r, Mi);
    if ("error" in o)
      throw new E(o.error, "failed to get confirmed signatures for address");
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
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), r = await this._rpcRequest("getSignaturesForAddress", s), o = S(r, Ui);
    if ("error" in o)
      throw new E(o.error, "failed to get signatures for address");
    return o.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(e, t);
    let r = null;
    return s !== null && (r = new Ft({
      key: e,
      state: Ft.deserialize(s.data)
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
    return s !== null && (r = _t.fromAccountData(s.data)), {
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
    const n = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), s = S(n, bo);
    if ("error" in s)
      throw new E(s.error, `airdrop to ${e.toBase58()} failed`);
    return s.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await Ce(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= os;
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
        await Ce(es / 2);
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
    } = j(e), s = this._buildArgs([], t, "base64", n), r = await this._rpcRequest("getStakeMinimumDelegation", s), o = S(r, Z(u()));
    if ("error" in o)
      throw new E(o.error, "failed to get stake minimum delegation");
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
      const p = e.serialize(), _ = B.Buffer.from(p).toString("base64");
      if (Array.isArray(t) || n !== void 0)
        throw new Error("Invalid arguments");
      const L = t || {};
      L.encoding = "base64", "commitment" in L || (L.commitment = this.commitment);
      const V = [_, L], ue = await this._rpcRequest("simulateTransaction", V), me = S(ue, Ln);
      if ("error" in me)
        throw new Error("failed to simulate transaction: " + me.error.message);
      return me.result;
    }
    let s;
    if (e instanceof O) {
      let m = e;
      s = new O(), s.feePayer = m.feePayer, s.instructions = e.instructions, s.nonceInfo = m.nonceInfo, s.signatures = m.signatures;
    } else
      s = O.populate(e), s._message = s._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const r = t;
    if (s.nonceInfo && r)
      s.sign(...r);
    else {
      let m = this._disableBlockhashCaching;
      for (; ; ) {
        const p = await this._blockhashWithExpiryBlockHeight(m);
        if (s.lastValidBlockHeight = p.lastValidBlockHeight, s.recentBlockhash = p.blockhash, !r)
          break;
        if (s.sign(...r), !s.signature)
          throw new Error("!signature");
        const _ = s.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(_) && !this._blockhashInfo.transactionSignatures.includes(_)) {
          this._blockhashInfo.simulatedSignatures.push(_);
          break;
        } else
          m = !0;
      }
    }
    const o = s._compile(), a = o.serialize(), d = s._serialize(a).toString("base64"), l = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const m = (Array.isArray(n) ? n : o.nonProgramIds()).map((p) => p.toBase58());
      l.accounts = {
        encoding: "base64",
        addresses: m
      };
    }
    r && (l.sigVerify = !0);
    const f = [d, l], k = await this._rpcRequest("simulateTransaction", f), h = S(k, Ln);
    if ("error" in h) {
      let m;
      if ("data" in h.error && (m = h.error.data.logs, m && Array.isArray(m))) {
        const p = `
    `, _ = p + m.join(p);
        console.error(h.error.message, _);
      }
      throw new Dt("failed to simulate transaction: " + h.error.message, m);
    }
    return h.result;
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
    const n = z(e).toString("base64");
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
    const o = [e, n], a = await this._rpcRequest("sendTransaction", o), c = S(a, ko);
    if ("error" in c) {
      let d;
      throw "data" in c.error && (d = c.error.data.logs), new Dt("failed to send transaction: " + c.error.message, d);
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
    } = S(e, qi);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(e, t) {
    const n = this._nextClientSubscriptionId++, s = Bn([e.method, t]), r = this._subscriptionsByHash[s];
    return r === void 0 ? this._subscriptionsByHash[s] = {
      ...e,
      args: t,
      callbacks: /* @__PURE__ */ new Set([e.callback]),
      state: "pending"
    } : r.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[n] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
      const o = this._subscriptionsByHash[s];
      U(o !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), o.callbacks.delete(e.callback), await this._updateSubscriptions();
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
    } = S(e, Fi);
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
    } = S(e, wo);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: n
    } = S(e, $i);
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
    } = S(e, Gi);
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
    } = S(e, ji);
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
      callback: (c, d) => {
        t(c, d);
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
    } = S(e, Yi);
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
class Le {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param {Ed25519Keypair} keypair ed25519 keypair
   */
  constructor(e) {
    this._keypair = void 0, this._keypair = e ?? Rn();
  }
  /**
   * Generate a new random keypair
   *
   * @returns {Keypair} Keypair
   */
  static generate() {
    return new Le(Rn());
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
      const s = e.slice(0, 32), r = kt(s);
      for (let o = 0; o < 32; o++)
        if (n[o] !== r[o])
          throw new Error("provided secretKey is invalid");
    }
    return new Le({
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
    const t = kt(e), n = new Uint8Array(64);
    return n.set(e), n.set(t, 32), new Le({
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
const Ee = Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: P([R("instruction"), Ge("recentSlot"), q("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: P([R("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: P([R("instruction"), Ge(), re(N(), ze(R(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: P([R("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: P([R("instruction")])
  }
});
class _o {
  /**
   * @internal
   */
  constructor() {
  }
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R("instruction").decode(e.data);
    let s;
    for (const [r, o] of Object.entries(Ee))
      if (o.index == n) {
        s = r;
        break;
      }
    if (!s)
      throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
    return s;
  }
  static decodeCreateLookupTable(e) {
    this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
    const {
      recentSlot: t
    } = D(Ee.CreateLookupTable, e.data);
    return {
      authority: e.keys[1].pubkey,
      payer: e.keys[2].pubkey,
      recentSlot: Number(t)
    };
  }
  static decodeExtendLookupTable(e) {
    if (this.checkProgramId(e.programId), e.keys.length < 2)
      throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
    const {
      addresses: t
    } = D(Ee.ExtendLookupTable, e.data);
    return {
      lookupTable: e.keys[0].pubkey,
      authority: e.keys[1].pubkey,
      payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
      addresses: t.map((n) => new g(n))
    };
  }
  static decodeCloseLookupTable(e) {
    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
      lookupTable: e.keys[0].pubkey,
      authority: e.keys[1].pubkey,
      recipient: e.keys[2].pubkey
    };
  }
  static decodeFreezeLookupTable(e) {
    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
      lookupTable: e.keys[0].pubkey,
      authority: e.keys[1].pubkey
    };
  }
  static decodeDeactivateLookupTable(e) {
    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
      lookupTable: e.keys[0].pubkey,
      authority: e.keys[1].pubkey
    };
  }
  /**
   * @internal
   */
  static checkProgramId(e) {
    if (!e.equals(un.programId))
      throw new Error("invalid instruction; programId is not AddressLookupTable Program");
  }
  /**
   * @internal
   */
  static checkKeysLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
class un {
  /**
   * @internal
   */
  constructor() {
  }
  static createLookupTable(e) {
    const [t, n] = g.findProgramAddressSync([e.authority.toBuffer(), Vn(BigInt(e.recentSlot), 8)], this.programId), s = Ee.CreateLookupTable, r = W(s, {
      recentSlot: BigInt(e.recentSlot),
      bumpSeed: n
    }), o = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: e.authority,
      isSigner: !0,
      isWritable: !1
    }, {
      pubkey: e.payer,
      isSigner: !0,
      isWritable: !0
    }, {
      pubkey: H.programId,
      isSigner: !1,
      isWritable: !1
    }];
    return [new $({
      programId: this.programId,
      keys: o,
      data: r
    }), t];
  }
  static freezeLookupTable(e) {
    const t = Ee.FreezeLookupTable, n = W(t), s = [{
      pubkey: e.lookupTable,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: e.authority,
      isSigner: !0,
      isWritable: !1
    }];
    return new $({
      programId: this.programId,
      keys: s,
      data: n
    });
  }
  static extendLookupTable(e) {
    const t = Ee.ExtendLookupTable, n = W(t, {
      addresses: e.addresses.map((r) => r.toBytes())
    }), s = [{
      pubkey: e.lookupTable,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: e.authority,
      isSigner: !0,
      isWritable: !1
    }];
    return e.payer && s.push({
      pubkey: e.payer,
      isSigner: !0,
      isWritable: !0
    }, {
      pubkey: H.programId,
      isSigner: !1,
      isWritable: !1
    }), new $({
      programId: this.programId,
      keys: s,
      data: n
    });
  }
  static deactivateLookupTable(e) {
    const t = Ee.DeactivateLookupTable, n = W(t), s = [{
      pubkey: e.lookupTable,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: e.authority,
      isSigner: !0,
      isWritable: !1
    }];
    return new $({
      programId: this.programId,
      keys: s,
      data: n
    });
  }
  static closeLookupTable(e) {
    const t = Ee.CloseLookupTable, n = W(t), s = [{
      pubkey: e.lookupTable,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: e.authority,
      isSigner: !0,
      isWritable: !1
    }, {
      pubkey: e.recipient,
      isSigner: !1,
      isWritable: !0
    }];
    return new $({
      programId: this.programId,
      keys: s,
      data: n
    });
  }
}
un.programId = new g("AddressLookupTab1e1111111111111111111111111");
class Po {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Decode a compute budget instruction and retrieve the instruction type.
   */
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = q("instruction").decode(e.data);
    let s;
    for (const [r, o] of Object.entries(ke))
      if (o.index == n) {
        s = r;
        break;
      }
    if (!s)
      throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
    return s;
  }
  /**
   * Decode request units compute budget instruction and retrieve the instruction params.
   */
  static decodeRequestUnits(e) {
    this.checkProgramId(e.programId);
    const {
      units: t,
      additionalFee: n
    } = D(ke.RequestUnits, e.data);
    return {
      units: t,
      additionalFee: n
    };
  }
  /**
   * Decode request heap frame compute budget instruction and retrieve the instruction params.
   */
  static decodeRequestHeapFrame(e) {
    this.checkProgramId(e.programId);
    const {
      bytes: t
    } = D(ke.RequestHeapFrame, e.data);
    return {
      bytes: t
    };
  }
  /**
   * Decode set compute unit limit compute budget instruction and retrieve the instruction params.
   */
  static decodeSetComputeUnitLimit(e) {
    this.checkProgramId(e.programId);
    const {
      units: t
    } = D(ke.SetComputeUnitLimit, e.data);
    return {
      units: t
    };
  }
  /**
   * Decode set compute unit price compute budget instruction and retrieve the instruction params.
   */
  static decodeSetComputeUnitPrice(e) {
    this.checkProgramId(e.programId);
    const {
      microLamports: t
    } = D(ke.SetComputeUnitPrice, e.data);
    return {
      microLamports: t
    };
  }
  /**
   * @internal
   */
  static checkProgramId(e) {
    if (!e.equals(dn.programId))
      throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
  }
}
const ke = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: P([q("instruction"), R("units"), R("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: P([q("instruction"), R("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: P([q("instruction"), R("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: P([q("instruction"), Ge("microLamports")])
  }
});
class dn {
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
    const t = ke.RequestUnits, n = W(t, e);
    return new $({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static requestHeapFrame(e) {
    const t = ke.RequestHeapFrame, n = W(t, e);
    return new $({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static setComputeUnitLimit(e) {
    const t = ke.SetComputeUnitLimit, n = W(t, e);
    return new $({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
  static setComputeUnitPrice(e) {
    const t = ke.SetComputeUnitPrice, n = W(t, {
      microLamports: BigInt(e.microLamports)
    });
    return new $({
      keys: [],
      programId: this.programId,
      data: n
    });
  }
}
dn.programId = new g("ComputeBudget111111111111111111111111111111");
const Kn = 64, zn = 32, Nn = 64, Wn = P([q("numSignatures"), q("padding"), ge("signatureOffset"), ge("signatureInstructionIndex"), ge("publicKeyOffset"), ge("publicKeyInstructionIndex"), ge("messageDataOffset"), ge("messageDataSize"), ge("messageInstructionIndex")]);
class Et {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the ed25519 program
   */
  /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */
  static createInstructionWithPublicKey(e) {
    const {
      publicKey: t,
      message: n,
      signature: s,
      instructionIndex: r
    } = e;
    U(t.length === zn, `Public Key must be ${zn} bytes but received ${t.length} bytes`), U(s.length === Nn, `Signature must be ${Nn} bytes but received ${s.length} bytes`);
    const o = Wn.span, a = o + t.length, c = a + s.length, d = 1, l = B.Buffer.alloc(c + n.length), f = r ?? 65535;
    return Wn.encode({
      numSignatures: d,
      padding: 0,
      signatureOffset: a,
      signatureInstructionIndex: f,
      publicKeyOffset: o,
      publicKeyInstructionIndex: f,
      messageDataOffset: c,
      messageDataSize: n.length,
      messageInstructionIndex: f
    }, l), l.fill(t, o), l.fill(s, a), l.fill(n, c), new $({
      keys: [],
      programId: Et.programId,
      data: l
    });
  }
  /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPrivateKey(e) {
    const {
      privateKey: t,
      message: n,
      instructionIndex: s
    } = e;
    U(t.length === Kn, `Private key must be ${Kn} bytes but received ${t.length} bytes`);
    try {
      const r = Le.fromSecretKey(t), o = r.publicKey.toBytes(), a = Zt(n, r.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: n,
        signature: a,
        instructionIndex: s
      });
    } catch (r) {
      throw new Error(`Error creating instruction; ${r}`);
    }
  }
}
Et.programId = new g("Ed25519SigVerify111111111111111111111111111");
const Ro = (i, e) => {
  const t = Gt.sign(i, e);
  return [t.toCompactRawBytes(), t.recovery];
};
Gt.utils.isValidPrivateKey;
const Eo = Gt.getPublicKey, On = 32, Ot = 20, Mn = 64, To = 11, Mt = P([q("numSignatures"), ge("signatureOffset"), q("signatureInstructionIndex"), ge("ethAddressOffset"), q("ethAddressInstructionIndex"), ge("messageDataOffset"), ge("messageDataSize"), q("messageInstructionIndex"), J(20, "ethAddress"), J(64, "signature"), q("recoveryId")]);
class Ne {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the secp256k1 program
   */
  /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */
  static publicKeyToEthAddress(e) {
    U(e.length === Mn, `Public key must be ${Mn} bytes but received ${e.length} bytes`);
    try {
      return B.Buffer.from(wn(z(e))).slice(-Ot);
    } catch (t) {
      throw new Error(`Error constructing Ethereum address: ${t}`);
    }
  }
  /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPublicKey(e) {
    const {
      publicKey: t,
      message: n,
      signature: s,
      recoveryId: r,
      instructionIndex: o
    } = e;
    return Ne.createInstructionWithEthAddress({
      ethAddress: Ne.publicKeyToEthAddress(t),
      message: n,
      signature: s,
      recoveryId: r,
      instructionIndex: o
    });
  }
  /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */
  static createInstructionWithEthAddress(e) {
    const {
      ethAddress: t,
      message: n,
      signature: s,
      recoveryId: r,
      instructionIndex: o = 0
    } = e;
    let a;
    typeof t == "string" ? t.startsWith("0x") ? a = B.Buffer.from(t.substr(2), "hex") : a = B.Buffer.from(t, "hex") : a = t, U(a.length === Ot, `Address must be ${Ot} bytes but received ${a.length} bytes`);
    const c = 1 + To, d = c, l = c + a.length, f = l + s.length + 1, k = 1, h = B.Buffer.alloc(Mt.span + n.length);
    return Mt.encode({
      numSignatures: k,
      signatureOffset: l,
      signatureInstructionIndex: o,
      ethAddressOffset: d,
      ethAddressInstructionIndex: o,
      messageDataOffset: f,
      messageDataSize: n.length,
      messageInstructionIndex: o,
      signature: z(s),
      ethAddress: z(a),
      recoveryId: r
    }, h), h.fill(z(n), Mt.span), new $({
      keys: [],
      programId: Ne.programId,
      data: h
    });
  }
  /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */
  static createInstructionWithPrivateKey(e) {
    const {
      privateKey: t,
      message: n,
      instructionIndex: s
    } = e;
    U(t.length === On, `Private key must be ${On} bytes but received ${t.length} bytes`);
    try {
      const r = z(t), o = Eo(
        r,
        !1
        /* isCompressed */
      ).slice(1), a = B.Buffer.from(wn(z(n))), [c, d] = Ro(a, r);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: n,
        signature: c,
        recoveryId: d,
        instructionIndex: s
      });
    } catch (r) {
      throw new Error(`Error creating instruction; ${r}`);
    }
  }
}
Ne.programId = new g("KeccakSecp256k11111111111111111111111111111");
var ps;
const ms = new g("StakeConfig11111111111111111111111111111111");
class bs {
  /**
   * Create a new Authorized object
   * @param staker the stake authority
   * @param withdrawer the withdraw authority
   */
  constructor(e, t) {
    this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t;
  }
}
class ft {
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
ps = ft;
ft.default = new ps(0, 0, g.default);
class Bo {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Decode a stake instruction and retrieve the instruction type.
   */
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R("instruction").decode(e.data);
    let s;
    for (const [r, o] of Object.entries(te))
      if (o.index == n) {
        s = r;
        break;
      }
    if (!s)
      throw new Error("Instruction type incorrect; not a StakeInstruction");
    return s;
  }
  /**
   * Decode a initialize stake instruction and retrieve the instruction params.
   */
  static decodeInitialize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      authorized: t,
      lockup: n
    } = D(te.Initialize, e.data);
    return {
      stakePubkey: e.keys[0].pubkey,
      authorized: new bs(new g(t.staker), new g(t.withdrawer)),
      lockup: new ft(n.unixTimestamp, n.epoch, new g(n.custodian))
    };
  }
  /**
   * Decode a delegate stake instruction and retrieve the instruction params.
   */
  static decodeDelegate(e) {
    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), D(te.Delegate, e.data), {
      stakePubkey: e.keys[0].pubkey,
      votePubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[5].pubkey
    };
  }
  /**
   * Decode an authorize stake instruction and retrieve the instruction params.
   */
  static decodeAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      newAuthorized: t,
      stakeAuthorizationType: n
    } = D(te.Authorize, e.data), s = {
      stakePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[2].pubkey,
      newAuthorizedPubkey: new g(t),
      stakeAuthorizationType: {
        index: n
      }
    };
    return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
  }
  /**
   * Decode an authorize-with-seed stake instruction and retrieve the instruction params.
   */
  static decodeAuthorizeWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
      newAuthorized: t,
      stakeAuthorizationType: n,
      authoritySeed: s,
      authorityOwner: r
    } = D(te.AuthorizeWithSeed, e.data), o = {
      stakePubkey: e.keys[0].pubkey,
      authorityBase: e.keys[1].pubkey,
      authoritySeed: s,
      authorityOwner: new g(r),
      newAuthorizedPubkey: new g(t),
      stakeAuthorizationType: {
        index: n
      }
    };
    return e.keys.length > 3 && (o.custodianPubkey = e.keys[3].pubkey), o;
  }
  /**
   * Decode a split stake instruction and retrieve the instruction params.
   */
  static decodeSplit(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      lamports: t
    } = D(te.Split, e.data);
    return {
      stakePubkey: e.keys[0].pubkey,
      splitStakePubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[2].pubkey,
      lamports: t
    };
  }
  /**
   * Decode a merge stake instruction and retrieve the instruction params.
   */
  static decodeMerge(e) {
    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), D(te.Merge, e.data), {
      stakePubkey: e.keys[0].pubkey,
      sourceStakePubKey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[4].pubkey
    };
  }
  /**
   * Decode a withdraw stake instruction and retrieve the instruction params.
   */
  static decodeWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
    const {
      lamports: t
    } = D(te.Withdraw, e.data), n = {
      stakePubkey: e.keys[0].pubkey,
      toPubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[4].pubkey,
      lamports: t
    };
    return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey), n;
  }
  /**
   * Decode a deactivate stake instruction and retrieve the instruction params.
   */
  static decodeDeactivate(e) {
    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), D(te.Deactivate, e.data), {
      stakePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[2].pubkey
    };
  }
  /**
   * @internal
   */
  static checkProgramId(e) {
    if (!e.equals(Tt.programId))
      throw new Error("invalid instruction; programId is not StakeProgram");
  }
  /**
   * @internal
   */
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const te = Object.freeze({
  Initialize: {
    index: 0,
    layout: P([R("instruction"), Lr(), Cr()])
  },
  Authorize: {
    index: 1,
    layout: P([R("instruction"), N("newAuthorized"), R("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: P([R("instruction")])
  },
  Split: {
    index: 3,
    layout: P([R("instruction"), he("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: P([R("instruction"), he("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: P([R("instruction")])
  },
  Merge: {
    index: 7,
    layout: P([R("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: P([R("instruction"), N("newAuthorized"), R("stakeAuthorizationType"), Ke("authoritySeed"), N("authorityOwner")])
  }
}), vo = Object.freeze({
  Staker: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
class Tt {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Stake program
   */
  /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */
  static initialize(e) {
    const {
      stakePubkey: t,
      authorized: n,
      lockup: s
    } = e, r = s || ft.default, o = te.Initialize, a = W(o, {
      authorized: {
        staker: z(n.staker.toBuffer()),
        withdrawer: z(n.withdrawer.toBuffer())
      },
      lockup: {
        unixTimestamp: r.unixTimestamp,
        epoch: r.epoch,
        custodian: z(r.custodian.toBuffer())
      }
    }), c = {
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: fe,
        isSigner: !1,
        isWritable: !1
      }],
      programId: this.programId,
      data: a
    };
    return new $(c);
  }
  /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */
  static createAccountWithSeed(e) {
    const t = new O();
    t.add(H.createAccountWithSeed({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.stakePubkey,
      basePubkey: e.basePubkey,
      seed: e.seed,
      lamports: e.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey: n,
      authorized: s,
      lockup: r
    } = e;
    return t.add(this.initialize({
      stakePubkey: n,
      authorized: s,
      lockup: r
    }));
  }
  /**
   * Generate a Transaction that creates a new Stake account
   */
  static createAccount(e) {
    const t = new O();
    t.add(H.createAccount({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.stakePubkey,
      lamports: e.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey: n,
      authorized: s,
      lockup: r
    } = e;
    return t.add(this.initialize({
      stakePubkey: n,
      authorized: s,
      lockup: r
    }));
  }
  /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */
  static delegate(e) {
    const {
      stakePubkey: t,
      authorizedPubkey: n,
      votePubkey: s
    } = e, r = te.Delegate, o = W(r);
    return new O().add({
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: s,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: ae,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: mt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: ms,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: n,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: o
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorize(e) {
    const {
      stakePubkey: t,
      authorizedPubkey: n,
      newAuthorizedPubkey: s,
      stakeAuthorizationType: r,
      custodianPubkey: o
    } = e, a = te.Authorize, c = W(a, {
      newAuthorized: z(s.toBuffer()),
      stakeAuthorizationType: r.index
    }), d = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: ae,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }];
    return o && d.push({
      pubkey: o,
      isSigner: !0,
      isWritable: !1
    }), new O().add({
      keys: d,
      programId: this.programId,
      data: c
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorizeWithSeed(e) {
    const {
      stakePubkey: t,
      authorityBase: n,
      authoritySeed: s,
      authorityOwner: r,
      newAuthorizedPubkey: o,
      stakeAuthorizationType: a,
      custodianPubkey: c
    } = e, d = te.AuthorizeWithSeed, l = W(d, {
      newAuthorized: z(o.toBuffer()),
      stakeAuthorizationType: a.index,
      authoritySeed: s,
      authorityOwner: z(r.toBuffer())
    }), f = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }, {
      pubkey: ae,
      isSigner: !1,
      isWritable: !1
    }];
    return c && f.push({
      pubkey: c,
      isSigner: !0,
      isWritable: !1
    }), new O().add({
      keys: f,
      programId: this.programId,
      data: l
    });
  }
  /**
   * @internal
   */
  static splitInstruction(e) {
    const {
      stakePubkey: t,
      authorizedPubkey: n,
      splitStakePubkey: s,
      lamports: r
    } = e, o = te.Split, a = W(o, {
      lamports: r
    });
    return new $({
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: s,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: n,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: a
    });
  }
  /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */
  static split(e, t) {
    const n = new O();
    return n.add(H.createAccount({
      fromPubkey: e.authorizedPubkey,
      newAccountPubkey: e.splitStakePubkey,
      lamports: t,
      space: this.space,
      programId: this.programId
    })), n.add(this.splitInstruction(e));
  }
  /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */
  static splitWithSeed(e, t) {
    const {
      stakePubkey: n,
      authorizedPubkey: s,
      splitStakePubkey: r,
      basePubkey: o,
      seed: a,
      lamports: c
    } = e, d = new O();
    return d.add(H.allocate({
      accountPubkey: r,
      basePubkey: o,
      seed: a,
      space: this.space,
      programId: this.programId
    })), t && t > 0 && d.add(H.transfer({
      fromPubkey: e.authorizedPubkey,
      toPubkey: r,
      lamports: t
    })), d.add(this.splitInstruction({
      stakePubkey: n,
      authorizedPubkey: s,
      splitStakePubkey: r,
      lamports: c
    }));
  }
  /**
   * Generate a Transaction that merges Stake accounts.
   */
  static merge(e) {
    const {
      stakePubkey: t,
      sourceStakePubKey: n,
      authorizedPubkey: s
    } = e, r = te.Merge, o = W(r);
    return new O().add({
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: n,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: ae,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: mt,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: s,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: o
    });
  }
  /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */
  static withdraw(e) {
    const {
      stakePubkey: t,
      authorizedPubkey: n,
      toPubkey: s,
      lamports: r,
      custodianPubkey: o
    } = e, a = te.Withdraw, c = W(a, {
      lamports: r
    }), d = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: s,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: ae,
      isSigner: !1,
      isWritable: !1
    }, {
      pubkey: mt,
      isSigner: !1,
      isWritable: !1
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }];
    return o && d.push({
      pubkey: o,
      isSigner: !0,
      isWritable: !1
    }), new O().add({
      keys: d,
      programId: this.programId,
      data: c
    });
  }
  /**
   * Generate a Transaction that deactivates Stake tokens.
   */
  static deactivate(e) {
    const {
      stakePubkey: t,
      authorizedPubkey: n
    } = e, s = te.Deactivate, r = W(s);
    return new O().add({
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: ae,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: n,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: r
    });
  }
}
Tt.programId = new g("Stake11111111111111111111111111111111111111");
Tt.space = 200;
class ks {
  /** [0, 100] */
  constructor(e, t, n, s) {
    this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = n, this.commission = s;
  }
}
class Lo {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Decode a vote instruction and retrieve the instruction type.
   */
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R("instruction").decode(e.data);
    let s;
    for (const [r, o] of Object.entries(Se))
      if (o.index == n) {
        s = r;
        break;
      }
    if (!s)
      throw new Error("Instruction type incorrect; not a VoteInstruction");
    return s;
  }
  /**
   * Decode an initialize vote instruction and retrieve the instruction params.
   */
  static decodeInitializeAccount(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
    const {
      voteInit: t
    } = D(Se.InitializeAccount, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      nodePubkey: e.keys[3].pubkey,
      voteInit: new ks(new g(t.nodePubkey), new g(t.authorizedVoter), new g(t.authorizedWithdrawer), t.commission)
    };
  }
  /**
   * Decode an authorize instruction and retrieve the instruction params.
   */
  static decodeAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      newAuthorized: t,
      voteAuthorizationType: n
    } = D(Se.Authorize, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[2].pubkey,
      newAuthorizedPubkey: new g(t),
      voteAuthorizationType: {
        index: n
      }
    };
  }
  /**
   * Decode an authorize instruction and retrieve the instruction params.
   */
  static decodeAuthorizeWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: t,
        currentAuthorityDerivedKeySeed: n,
        newAuthorized: s,
        voteAuthorizationType: r
      }
    } = D(Se.AuthorizeWithSeed, e.data);
    return {
      currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
      currentAuthorityDerivedKeyOwnerPubkey: new g(t),
      currentAuthorityDerivedKeySeed: n,
      newAuthorizedPubkey: new g(s),
      voteAuthorizationType: {
        index: r
      },
      votePubkey: e.keys[0].pubkey
    };
  }
  /**
   * Decode a withdraw instruction and retrieve the instruction params.
   */
  static decodeWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      lamports: t
    } = D(Se.Withdraw, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      authorizedWithdrawerPubkey: e.keys[2].pubkey,
      lamports: t,
      toPubkey: e.keys[1].pubkey
    };
  }
  /**
   * @internal
   */
  static checkProgramId(e) {
    if (!e.equals(Xe.programId))
      throw new Error("invalid instruction; programId is not VoteProgram");
  }
  /**
   * @internal
   */
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const Se = Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: P([R("instruction"), xr()])
  },
  Authorize: {
    index: 1,
    layout: P([R("instruction"), N("newAuthorized"), R("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: P([R("instruction"), he("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: P([R("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: P([R("instruction"), Kr()])
  }
}), Co = Object.freeze({
  Voter: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
class Xe {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Vote program
   */
  /**
   * Generate an Initialize instruction.
   */
  static initializeAccount(e) {
    const {
      votePubkey: t,
      nodePubkey: n,
      voteInit: s
    } = e, r = Se.InitializeAccount, o = W(r, {
      voteInit: {
        nodePubkey: z(s.nodePubkey.toBuffer()),
        authorizedVoter: z(s.authorizedVoter.toBuffer()),
        authorizedWithdrawer: z(s.authorizedWithdrawer.toBuffer()),
        commission: s.commission
      }
    }), a = {
      keys: [{
        pubkey: t,
        isSigner: !1,
        isWritable: !0
      }, {
        pubkey: fe,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: ae,
        isSigner: !1,
        isWritable: !1
      }, {
        pubkey: n,
        isSigner: !0,
        isWritable: !1
      }],
      programId: this.programId,
      data: o
    };
    return new $(a);
  }
  /**
   * Generate a transaction that creates a new Vote account.
   */
  static createAccount(e) {
    const t = new O();
    return t.add(H.createAccount({
      fromPubkey: e.fromPubkey,
      newAccountPubkey: e.votePubkey,
      lamports: e.lamports,
      space: this.space,
      programId: this.programId
    })), t.add(this.initializeAccount({
      votePubkey: e.votePubkey,
      nodePubkey: e.voteInit.nodePubkey,
      voteInit: e.voteInit
    }));
  }
  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */
  static authorize(e) {
    const {
      votePubkey: t,
      authorizedPubkey: n,
      newAuthorizedPubkey: s,
      voteAuthorizationType: r
    } = e, o = Se.Authorize, a = W(o, {
      newAuthorized: z(s.toBuffer()),
      voteAuthorizationType: r.index
    }), c = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: ae,
      isSigner: !1,
      isWritable: !1
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }];
    return new O().add({
      keys: c,
      programId: this.programId,
      data: a
    });
  }
  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account
   * where the current Voter or Withdrawer authority is a derived key.
   */
  static authorizeWithSeed(e) {
    const {
      currentAuthorityDerivedKeyBasePubkey: t,
      currentAuthorityDerivedKeyOwnerPubkey: n,
      currentAuthorityDerivedKeySeed: s,
      newAuthorizedPubkey: r,
      voteAuthorizationType: o,
      votePubkey: a
    } = e, c = Se.AuthorizeWithSeed, d = W(c, {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: z(n.toBuffer()),
        currentAuthorityDerivedKeySeed: s,
        newAuthorized: z(r.toBuffer()),
        voteAuthorizationType: o.index
      }
    }), l = [{
      pubkey: a,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: ae,
      isSigner: !1,
      isWritable: !1
    }, {
      pubkey: t,
      isSigner: !0,
      isWritable: !1
    }];
    return new O().add({
      keys: l,
      programId: this.programId,
      data: d
    });
  }
  /**
   * Generate a transaction to withdraw from a Vote account.
   */
  static withdraw(e) {
    const {
      votePubkey: t,
      authorizedWithdrawerPubkey: n,
      lamports: s,
      toPubkey: r
    } = e, o = Se.Withdraw, a = W(o, {
      lamports: s
    }), c = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: r,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }];
    return new O().add({
      keys: c,
      programId: this.programId,
      data: a
    });
  }
  /**
   * Generate a transaction to withdraw safely from a Vote account.
   *
   * This function was created as a safeguard for vote accounts running validators, `safeWithdraw`
   * checks that the withdraw amount will not exceed the specified balance while leaving enough left
   * to cover rent. If you wish to close the vote account by withdrawing the full amount, call the
   * `withdraw` method directly.
   */
  static safeWithdraw(e, t, n) {
    if (e.lamports > t - n)
      throw new Error("Withdraw will leave vote account with insufficient funds.");
    return Xe.withdraw(e);
  }
  /**
   * Generate a transaction to update the validator identity (node pubkey) of a Vote account.
   */
  static updateValidatorIdentity(e) {
    const {
      votePubkey: t,
      authorizedWithdrawerPubkey: n,
      nodePubkey: s
    } = e, r = Se.UpdateValidatorIdentity, o = W(r), a = [{
      pubkey: t,
      isSigner: !1,
      isWritable: !0
    }, {
      pubkey: s,
      isSigner: !0,
      isWritable: !1
    }, {
      pubkey: n,
      isSigner: !0,
      isWritable: !1
    }];
    return new O().add({
      keys: a,
      programId: this.programId,
      data: o
    });
  }
}
Xe.programId = new g("Vote111111111111111111111111111111111111111");
Xe.space = 3762;
const Ss = new g("Va1idator1nfo111111111111111111111111111111"), xo = y({
  name: b(),
  website: v(b()),
  details: v(b()),
  keybaseUsername: v(b())
});
class ln {
  /**
   * Construct a valid ValidatorInfo
   *
   * @param key validator public key
   * @param info validator information
   */
  constructor(e, t) {
    this.key = void 0, this.info = void 0, this.key = e, this.info = t;
  }
  /**
   * Deserialize ValidatorInfo from the config account data. Exactly two config
   * keys are required in the data.
   *
   * @param buffer config account data
   * @return null if info was not found
   */
  static fromConfigData(e) {
    let t = [...e];
    if (ie(t) !== 2)
      return null;
    const s = [];
    for (let r = 0; r < 2; r++) {
      const o = new g(oe(t, 0, we)), a = be(t) === 1;
      s.push({
        publicKey: o,
        isSigner: a
      });
    }
    if (s[0].publicKey.equals(Ss) && s[1].isSigner) {
      const r = Ke().decode(B.Buffer.from(t)), o = JSON.parse(r);
      return Hn(o, xo), new ln(s[1].publicKey, o);
    }
    return null;
  }
}
const Ko = new g("Vote111111111111111111111111111111111111111"), zo = P([
  N("nodePubkey"),
  N("authorizedWithdrawer"),
  q("commission"),
  se(),
  // votes.length
  re(P([se("slot"), R("confirmationCount")]), ze(R(), -8), "votes"),
  q("rootSlotValid"),
  se("rootSlot"),
  se(),
  // authorizedVoters.length
  re(P([se("epoch"), N("authorizedVoter")]), ze(R(), -8), "authorizedVoters"),
  P([re(P([N("authorizedPubkey"), se("epochOfLastAuthorizedSwitch"), se("targetEpoch")]), 32, "buf"), se("idx"), q("isEmpty")], "priorVoters"),
  se(),
  // epochCredits.length
  re(P([se("epoch"), se("credits"), se("prevCredits")]), ze(R(), -8), "epochCredits"),
  P([se("slot"), se("timestamp")], "lastTimestamp")
]);
class hn {
  /**
   * @internal
   */
  constructor(e) {
    this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp;
  }
  /**
   * Deserialize VoteAccount from the account data.
   *
   * @param buffer account data
   * @return VoteAccount
   */
  static fromAccountData(e) {
    const n = zo.decode(z(e), 4);
    let s = n.rootSlot;
    return n.rootSlotValid || (s = null), new hn({
      nodePubkey: new g(n.nodePubkey),
      authorizedWithdrawer: new g(n.authorizedWithdrawer),
      commission: n.commission,
      votes: n.votes,
      rootSlot: s,
      authorizedVoters: n.authorizedVoters.map(No),
      priorVoters: Wo(n.priorVoters),
      epochCredits: n.epochCredits,
      lastTimestamp: n.lastTimestamp
    });
  }
}
function No({
  authorizedVoter: i,
  epoch: e
}) {
  return {
    epoch: e,
    authorizedVoter: new g(i)
  };
}
function Un({
  authorizedPubkey: i,
  epochOfLastAuthorizedSwitch: e,
  targetEpoch: t
}) {
  return {
    authorizedPubkey: new g(i),
    epochOfLastAuthorizedSwitch: e,
    targetEpoch: t
  };
}
function Wo({
  buf: i,
  idx: e,
  isEmpty: t
}) {
  return t ? [] : [...i.slice(e + 1).map(Un), ...i.slice(0, e).map(Un)];
}
const qn = {
  http: {
    devnet: "http://api.devnet.solana.com",
    testnet: "http://api.testnet.solana.com",
    "mainnet-beta": "http://api.mainnet-beta.solana.com/"
  },
  https: {
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
    "mainnet-beta": "https://api.mainnet-beta.solana.com/"
  }
};
function Oo(i, e) {
  const t = e === !1 ? "http" : "https";
  if (!i)
    return qn[t].devnet;
  const n = qn[t][i];
  if (!n)
    throw new Error(`Unknown ${t} cluster: ${i}`);
  return n;
}
async function Mo(i, e, t, n) {
  let s, r;
  t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (s = t, r = n) : r = t;
  const o = r && {
    skipPreflight: r.skipPreflight,
    preflightCommitment: r.preflightCommitment || r.commitment,
    minContextSlot: r.minContextSlot
  }, a = await i.sendRawTransaction(e, o), c = r && r.commitment, l = (await (s ? i.confirmTransaction(s, c) : i.confirmTransaction(a, c))).value;
  if (l.err)
    throw new Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
  return a;
}
const Uo = 1e9, qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Account: Tr,
  AddressLookupTableAccount: Ft,
  AddressLookupTableInstruction: _o,
  AddressLookupTableProgram: un,
  Authorized: bs,
  BLOCKHASH_CACHE_TIMEOUT_MS: os,
  BPF_LOADER_DEPRECATED_PROGRAM_ID: Br,
  BPF_LOADER_PROGRAM_ID: Gr,
  BpfLoader: jr,
  COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: ke,
  ComputeBudgetInstruction: Po,
  ComputeBudgetProgram: dn,
  Connection: Ao,
  Ed25519Program: Et,
  Enum: Rr,
  EpochSchedule: rs,
  FeeCalculatorLayout: ns,
  Keypair: Le,
  LAMPORTS_PER_SOL: Uo,
  LOOKUP_TABLE_INSTRUCTION_LAYOUTS: Ee,
  Loader: Oe,
  Lockup: ft,
  MAX_SEED_LENGTH: Xn,
  Message: pe,
  MessageAccountKeys: ot,
  MessageV0: We,
  NONCE_ACCOUNT_LENGTH: qt,
  NonceAccount: _t,
  PACKET_DATA_SIZE: ve,
  PUBLIC_KEY_LENGTH: we,
  PublicKey: g,
  SIGNATURE_LENGTH_IN_BYTES: it,
  SOLANA_SCHEMA: st,
  STAKE_CONFIG_ID: ms,
  STAKE_INSTRUCTION_LAYOUTS: te,
  SYSTEM_INSTRUCTION_LAYOUTS: G,
  SYSVAR_CLOCK_PUBKEY: ae,
  SYSVAR_EPOCH_SCHEDULE_PUBKEY: Mr,
  SYSVAR_INSTRUCTIONS_PUBKEY: ts,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY: pt,
  SYSVAR_RENT_PUBKEY: fe,
  SYSVAR_REWARDS_PUBKEY: Ur,
  SYSVAR_SLOT_HASHES_PUBKEY: qr,
  SYSVAR_SLOT_HISTORY_PUBKEY: Dr,
  SYSVAR_STAKE_HISTORY_PUBKEY: mt,
  Secp256k1Program: Ne,
  SendTransactionError: Dt,
  SolanaJSONRPCError: E,
  SolanaJSONRPCErrorCode: ei,
  StakeAuthorizationLayout: vo,
  StakeInstruction: Bo,
  StakeProgram: Tt,
  Struct: Qt,
  SystemInstruction: $r,
  SystemProgram: H,
  Transaction: O,
  TransactionExpiredBlockheightExceededError: en,
  TransactionExpiredNonceInvalidError: Ve,
  TransactionExpiredTimeoutError: tn,
  TransactionInstruction: $,
  TransactionMessage: sn,
  TransactionStatus: Re,
  VALIDATOR_INFO_KEY: Ss,
  VERSION_PREFIX_MASK: It,
  VOTE_PROGRAM_ID: Ko,
  ValidatorInfo: ln,
  VersionedMessage: nn,
  VersionedTransaction: rn,
  VoteAccount: hn,
  VoteAuthorizationLayout: Co,
  VoteInit: ks,
  VoteInstruction: Lo,
  VoteProgram: Xe,
  clusterApiUrl: Oo,
  sendAndConfirmRawTransaction: Mo,
  sendAndConfirmTransaction: Ut
}, Symbol.toStringTag, { value: "Module" })), ws = [
  { name: "discriminator", binary: "bytes", size: 4 },
  { name: "consistencyLevel", binary: "uint", size: 1, endianness: "little" },
  { name: "emitterAuthority", ...In },
  { name: "messageStatus", binary: "uint", size: 1, endianness: "little" },
  { name: "gap", binary: "uint", size: 3 },
  { name: "timestamp", binary: "uint", size: 4, endianness: "little" },
  { name: "nonce", binary: "uint", size: 4, endianness: "little" },
  { name: "sequence", binary: "uint", size: 8, endianness: "little" },
  { name: "emitterChain", binary: "uint", size: 2, endianness: "little" },
  { name: "emitterAddress", ...In },
  { name: "payloadLength", binary: "uint", size: 4, endianness: "little" },
  { name: "payload", binary: "bytes" }
];
function Is(i) {
  return tr(ws, i);
}
function Ze(i, e, t, n) {
  const s = typeof e == "string" ? F.Buffer.from(e, "hex") : F.Buffer.from(e);
  if (s.length != 32)
    throw Error("address.length != 32");
  const r = F.Buffer.alloc(8);
  return r.writeBigUInt64BE(typeof n == "number" ? BigInt(n) : n), Te([
    s,
    (() => {
      const o = F.Buffer.alloc(2);
      return o.writeUInt16BE(t), o;
    })(),
    r
  ], i);
}
async function Do(i, e, t, n, s, r) {
  return i.getAccountInfo(Ze(e, t, n, s), r).then((o) => !!ut(o)[0]);
}
function _e(i) {
  return Te([F.Buffer.from("Bridge")], i);
}
async function As(i, e, t) {
  return i.getAccountInfo(_e(e), t).then((n) => vt.deserialize(ut(n)));
}
class Bt {
  constructor(e, t) {
    M(this, "guardianSetExpirationTime");
    M(this, "fee");
    this.guardianSetExpirationTime = e, this.fee = t;
  }
  static deserialize(e) {
    if (e.length != 12)
      throw new Error("data.length != 12");
    const t = e.readUInt32LE(0), n = e.readBigUInt64LE(4);
    return new Bt(t, n);
  }
}
class vt {
  constructor(e, t, n) {
    M(this, "guardianSetIndex");
    M(this, "lastLamports");
    M(this, "config");
    this.guardianSetIndex = e, this.lastLamports = t, this.config = n;
  }
  static deserialize(e) {
    if (e.length != 24)
      throw new Error("data.length != 24");
    const t = e.readUInt32LE(0), n = e.readBigUInt64LE(4), s = Bt.deserialize(e.subarray(12));
    return new vt(t, n, s);
  }
}
function Lt(i, e) {
  return Te([F.Buffer.from("Sequence"), new g(i).toBytes()], e);
}
async function _s(i, e, t, n) {
  return i.getAccountInfo(Lt(e, t), n).then((s) => Ct.deserialize(ut(s)));
}
class Ct {
  constructor(e, t, n) {
    M(this, "sequence");
    M(this, "bump");
    M(this, "emitterType");
    this.sequence = e, this.bump = t, this.emitterType = n;
  }
  static deserialize(e) {
    if (e.length !== 8 && e.length !== 10)
      throw new Error("data.length != 8 or data.length != 10");
    let t, n;
    const s = e.readBigUInt64LE(0);
    return e.length === 10 && (t = e[8], n = e[9]), new Ct(s, t, n);
  }
  value() {
    return this.sequence;
  }
}
function fn(i) {
  return Te([F.Buffer.from("emitter")], i);
}
function gn(i, e) {
  const t = fn(i);
  return {
    emitter: t,
    sequence: Lt(t, e)
  };
}
async function Fo(i, e, t, n) {
  return _s(i, fn(e), t, n);
}
function Qe(i) {
  return Te([F.Buffer.from("fee_collector")], i);
}
const Dn = 65, rt = 20;
function Vo(i, e, t) {
  return new $({
    keys: [],
    programId: Ne.programId,
    data: $o.serialize(i, e, t)
  });
}
class $o {
  // https://docs.solana.com/developing/runtime-facilities/programs#secp256k1-program
  //
  // struct Secp256k1SignatureOffsets {
  //     secp_signature_key_offset: u16,        // offset to [signature,recovery_id,etherum_address] of 64+1+20 bytes
  //     secp_signature_instruction_index: u8,  // instruction index to find data
  //     secp_pubkey_offset: u16,               // offset to [signature,recovery_id] of 64+1 bytes
  //     secp_signature_instruction_index: u8,  // instruction index to find data
  //     secp_message_data_offset: u16,         // offset to start of message data
  //     secp_message_data_size: u16,           // size of message data
  //     secp_message_instruction_index: u8,    // index of instruction data to get message data
  // }
  //
  // Pseudo code of the operation:
  //
  // process_instruction() {
  //     for i in 0..count {
  //         // i'th index values referenced:
  //         instructions = &transaction.message().instructions
  //         signature = instructions[secp_signature_instruction_index].data[secp_signature_offset..secp_signature_offset + 64]
  //         recovery_id = instructions[secp_signature_instruction_index].data[secp_signature_offset + 64]
  //         ref_eth_pubkey = instructions[secp_pubkey_instruction_index].data[secp_pubkey_offset..secp_pubkey_offset + 32]
  //         message_hash = keccak256(instructions[secp_message_instruction_index].data[secp_message_data_offset..secp_message_data_offset + secp_message_data_size])
  //         pubkey = ecrecover(signature, recovery_id, message_hash)
  //         eth_pubkey = keccak256(pubkey[1..])[12..]
  //         if eth_pubkey != ref_eth_pubkey {
  //             return Error
  //         }
  //     }
  //     return Success
  //   }
  /**
   * Serialize multiple signatures, ethereum public keys and message as Secp256k1 instruction data.
   *
   * @param {Buffer[]} signatures - 65-byte signatures (64 + 1 recovery id)
   * @param {Buffer[]} keys - ethereum public keys
   * @param {Buffer} message - 32-byte hash
   * @returns serialized Secp256k1 instruction data
   */
  static serialize(e, t, n) {
    if (e.length == 0)
      throw Error("signatures.length == 0");
    if (e.length != t.length)
      throw Error("signatures.length != keys.length");
    if (n.length != 32)
      throw Error("message.length != 32");
    const s = e.length, r = 11, o = 1 + s * r, a = Dn + rt, c = o + s * a, d = 32, l = F.Buffer.alloc(c + d);
    l.writeUInt8(s, 0), l.write(n.toString("hex"), c, "hex");
    for (let f = 0; f < s; ++f) {
      const k = e.at(f);
      if ((k == null ? void 0 : k.length) != Dn)
        throw Error(`signatures[${f}].length != 65`);
      const h = t.at(f);
      if ((h == null ? void 0 : h.length) != rt)
        throw Error(`keys[${f}].length != 20`);
      const m = o + a * f, p = m + 65;
      l.writeUInt16LE(m, 1 + f * r), l.writeUInt8(0, 3 + f * r), l.writeUInt16LE(p, 4 + f * r), l.writeUInt8(0, 6 + f * r), l.writeUInt16LE(c, 7 + f * r), l.writeUInt16LE(d, 9 + f * r), l.writeUInt8(0, 10 + f * r), l.write(k.toString("hex"), m, "hex"), l.write(h.toString("hex"), p, "hex");
    }
    return l;
  }
}
function Me(i, e) {
  return Te([
    F.Buffer.from("GuardianSet"),
    (() => {
      const t = F.Buffer.alloc(4);
      return t.writeUInt32BE(e), t;
    })()
  ], i);
}
async function yn(i, e, t, n) {
  return i.getAccountInfo(Me(e, t), n).then((s) => xt.deserialize(ut(s)));
}
class xt {
  constructor(e, t, n, s) {
    M(this, "index");
    M(this, "keys");
    M(this, "creationTime");
    M(this, "expirationTime");
    this.index = e, this.keys = t, this.creationTime = n, this.expirationTime = s;
  }
  static deserialize(e) {
    const t = e.readUInt32LE(0), n = e.readUInt32LE(4), s = 8 + n * rt, r = e.readUInt32LE(s), o = e.readUInt32LE(4 + s), a = [];
    for (let c = 0; c < n; ++c) {
      const d = 8 + c * rt;
      a.push(e.subarray(d, d + rt));
    }
    return new xt(t, a, r, o);
  }
}
function Fe(i, e) {
  return Te([F.Buffer.from("PostedVAA"), e], i);
}
async function Ho(i, e, t) {
  return i.getAccountInfo(new g(e), t).then((n) => Kt.deserialize(ut(n)));
}
class Kt {
  constructor(e, t, n) {
    M(this, "signatures");
    M(this, "hash");
    M(this, "guardianSetIndex");
    this.signatures = e, this.hash = t, this.guardianSetIndex = n;
  }
  static deserialize(e) {
    const t = e.readUInt32LE(0), n = [...e.subarray(4, 4 + t)].map((a) => a != 0), s = 4 + t, r = e.subarray(s, s + 32), o = e.readUInt32LE(s + 32);
    return new Kt(n, r, o);
  }
}
function Ps(i) {
  return Te([F.Buffer.from("upgrade")], i);
}
function Rs(i, e, t) {
  return H.transfer({
    fromPubkey: new g(e),
    toPubkey: Qe(i),
    lamports: t
  });
}
class Go {
  constructor(e) {
    M(this, "idl");
    this.idl = e;
  }
  async encode(e, t) {
    switch (e) {
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  decode(e, t) {
    return this.decodeUnchecked(e, t);
  }
  decodeUnchecked(e, t) {
    switch (e) {
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  memcmp(e, t) {
    switch (e) {
      case "postVaa":
        return {
          dataSize: 56
          // + 4 + payload.length
        };
      default:
        throw new Error(`Invalid account name: ${e}`);
    }
  }
  size(e) {
    return $n(this.idl, e) ?? 0;
  }
}
class jo {
  constructor(e) {
  }
  decode(e) {
    throw new Error("Wormhole program does not have events");
  }
}
var Y = {};
const Yo = /* @__PURE__ */ nr(qo);
(function(i) {
  var e = An && An.__importDefault || function(C) {
    return C && C.__esModule ? C : { default: C };
  };
  Object.defineProperty(i, "__esModule", { value: !0 }), i.map = i.array = i.rustEnum = i.str = i.vecU8 = i.tagged = i.vec = i.bool = i.option = i.publicKey = i.i256 = i.u256 = i.i128 = i.u128 = i.i64 = i.u64 = i.struct = i.f64 = i.f32 = i.i32 = i.u32 = i.i16 = i.u16 = i.i8 = i.u8 = void 0;
  const t = _n, n = Yo, s = e(sr);
  var r = _n;
  Object.defineProperty(i, "u8", { enumerable: !0, get: function() {
    return r.u8;
  } }), Object.defineProperty(i, "i8", { enumerable: !0, get: function() {
    return r.s8;
  } }), Object.defineProperty(i, "u16", { enumerable: !0, get: function() {
    return r.u16;
  } }), Object.defineProperty(i, "i16", { enumerable: !0, get: function() {
    return r.s16;
  } }), Object.defineProperty(i, "u32", { enumerable: !0, get: function() {
    return r.u32;
  } }), Object.defineProperty(i, "i32", { enumerable: !0, get: function() {
    return r.s32;
  } }), Object.defineProperty(i, "f32", { enumerable: !0, get: function() {
    return r.f32;
  } }), Object.defineProperty(i, "f64", { enumerable: !0, get: function() {
    return r.f64;
  } }), Object.defineProperty(i, "struct", { enumerable: !0, get: function() {
    return r.struct;
  } });
  class o extends t.Layout {
    constructor(A, T, x) {
      super(A, x), this.blob = (0, t.blob)(A), this.signed = T;
    }
    decode(A, T = 0) {
      const x = new s.default(this.blob.decode(A, T), 10, "le");
      return this.signed ? x.fromTwos(this.span * 8).clone() : x;
    }
    encode(A, T, x = 0) {
      return this.signed && (A = A.toTwos(this.span * 8)), this.blob.encode(A.toArrayLike(F.Buffer, "le", this.span), T, x);
    }
  }
  function a(C) {
    return new o(8, !1, C);
  }
  i.u64 = a;
  function c(C) {
    return new o(8, !0, C);
  }
  i.i64 = c;
  function d(C) {
    return new o(16, !1, C);
  }
  i.u128 = d;
  function l(C) {
    return new o(16, !0, C);
  }
  i.i128 = l;
  function f(C) {
    return new o(32, !1, C);
  }
  i.u256 = f;
  function k(C) {
    return new o(32, !0, C);
  }
  i.i256 = k;
  class h extends t.Layout {
    constructor(A, T, x, Q) {
      super(A.span, Q), this.layout = A, this.decoder = T, this.encoder = x;
    }
    decode(A, T) {
      return this.decoder(this.layout.decode(A, T));
    }
    encode(A, T, x) {
      return this.layout.encode(this.encoder(A), T, x);
    }
    getSpan(A, T) {
      return this.layout.getSpan(A, T);
    }
  }
  function m(C) {
    return new h((0, t.blob)(32), (A) => new n.PublicKey(A), (A) => A.toBuffer(), C);
  }
  i.publicKey = m;
  class p extends t.Layout {
    constructor(A, T) {
      super(-1, T), this.layout = A, this.discriminator = (0, t.u8)();
    }
    encode(A, T, x = 0) {
      return A == null ? this.discriminator.encode(0, T, x) : (this.discriminator.encode(1, T, x), this.layout.encode(A, T, x + 1) + 1);
    }
    decode(A, T = 0) {
      const x = this.discriminator.decode(A, T);
      if (x === 0)
        return null;
      if (x === 1)
        return this.layout.decode(A, T + 1);
      throw new Error("Invalid option " + this.property);
    }
    getSpan(A, T = 0) {
      const x = this.discriminator.decode(A, T);
      if (x === 0)
        return 1;
      if (x === 1)
        return this.layout.getSpan(A, T + 1) + 1;
      throw new Error("Invalid option " + this.property);
    }
  }
  function _(C, A) {
    return new p(C, A);
  }
  i.option = _;
  function L(C) {
    return new h((0, t.u8)(), V, ue, C);
  }
  i.bool = L;
  function V(C) {
    if (C === 0)
      return !1;
    if (C === 1)
      return !0;
    throw new Error("Invalid bool: " + C);
  }
  function ue(C) {
    return C ? 1 : 0;
  }
  function me(C, A) {
    const T = (0, t.u32)("length"), x = (0, t.struct)([
      T,
      (0, t.seq)(C, (0, t.offset)(T, -T.span), "values")
    ]);
    return new h(x, ({ values: Q }) => Q, (Q) => ({ values: Q }), A);
  }
  i.vec = me;
  function Ms(C, A, T) {
    const x = (0, t.struct)([
      a("tag"),
      A.replicate("data")
    ]);
    function Q({ tag: le, data: $s }) {
      if (!le.eq(C))
        throw new Error("Invalid tag, expected: " + C.toString("hex") + ", got: " + le.toString("hex"));
      return $s;
    }
    return new h(x, Q, (le) => ({ tag: C, data: le }), T);
  }
  i.tagged = Ms;
  function kn(C) {
    const A = (0, t.u32)("length"), T = (0, t.struct)([
      A,
      (0, t.blob)((0, t.offset)(A, -A.span), "data")
    ]);
    return new h(T, ({ data: x }) => x, (x) => ({ data: x }), C);
  }
  i.vecU8 = kn;
  function Us(C) {
    return new h(kn(), (A) => A.toString("utf-8"), (A) => F.Buffer.from(A, "utf-8"), C);
  }
  i.str = Us;
  function qs(C, A, T) {
    const x = (0, t.union)(T ?? (0, t.u8)(), A);
    return C.forEach((Q, le) => x.addVariant(le, Q, Q.property)), x;
  }
  i.rustEnum = qs;
  function Ds(C, A, T) {
    const x = (0, t.struct)([
      (0, t.seq)(C, A, "values")
    ]);
    return new h(x, ({ values: Q }) => Q, (Q) => ({ values: Q }), T);
  }
  i.array = Ds;
  class Fs extends t.Layout {
    constructor(A, T, x) {
      super(A.span + T.span, x), this.keyLayout = A, this.valueLayout = T;
    }
    decode(A, T) {
      T = T || 0;
      const x = this.keyLayout.decode(A, T), Q = this.valueLayout.decode(A, T + this.keyLayout.getSpan(A, T));
      return [x, Q];
    }
    encode(A, T, x) {
      x = x || 0;
      const Q = this.keyLayout.encode(A[0], T, x), le = this.valueLayout.encode(A[1], T, x + Q);
      return Q + le;
    }
    getSpan(A, T) {
      return this.keyLayout.getSpan(A, T) + this.valueLayout.getSpan(A, T);
    }
  }
  function Vs(C, A, T) {
    const x = (0, t.u32)("length"), Q = (0, t.struct)([
      x,
      (0, t.seq)(new Fs(C, A), (0, t.offset)(x, -x.span), "values")
    ]);
    return new h(Q, ({ values: le }) => new Map(le), (le) => ({ values: Array.from(le.entries()) }), T);
  }
  i.map = Vs;
})(Y);
class $e {
  static fieldLayout(e, t) {
    const n = e.name !== void 0 ? tt(e.name) : void 0;
    switch (e.type) {
      case "bool":
        return Y.bool(n);
      case "u8":
        return Y.u8(n);
      case "i8":
        return Y.i8(n);
      case "u16":
        return Y.u16(n);
      case "i16":
        return Y.i16(n);
      case "u32":
        return Y.u32(n);
      case "i32":
        return Y.i32(n);
      case "f32":
        return Y.f32(n);
      case "u64":
        return Y.u64(n);
      case "i64":
        return Y.i64(n);
      case "f64":
        return Y.f64(n);
      case "u128":
        return Y.u128(n);
      case "i128":
        return Y.i128(n);
      case "u256":
        return Y.u256(n);
      case "i256":
        return Y.i256(n);
      case "bytes":
        return Y.vecU8(n);
      case "string":
        return Y.str(n);
      case "publicKey":
        return Y.publicKey(n);
      default: {
        if ("vec" in e.type)
          return Y.vec($e.fieldLayout({
            name: void 0,
            type: e.type.vec
          }, t), n);
        if ("option" in e.type)
          return Y.option($e.fieldLayout({
            name: void 0,
            type: e.type.option
          }, t), n);
        if ("array" in e.type) {
          let s = e.type.array[0], r = e.type.array[1], o = $e.fieldLayout({
            name: void 0,
            type: s
          }, t);
          return Y.array(o, r, n);
        } else
          throw new Error(`Not yet implemented: ${e}`);
      }
    }
  }
}
class pn {
  constructor(e) {
    M(this, "ixLayout");
    this.ixLayout = pn.parseIxLayout(e);
  }
  static parseIxLayout(e) {
    const n = (e.instructions ? e.instructions : []).map((s) => {
      let r = s.args.map((a) => $e.fieldLayout(a, Array.from([...e.accounts ?? [], ...e.types ?? []])));
      const o = tt(s.name);
      return [o, Y.struct(r, o)];
    }).concat(e.instructions.map((s) => {
      let r = s.args.map((a) => $e.fieldLayout(a, Array.from([...e.accounts ?? [], ...e.types ?? []])));
      const o = tt(s.name);
      return [o, Y.struct(r, o)];
    }));
    return new Map(n);
  }
  encode(e, t) {
    const n = F.Buffer.alloc(1e3), s = tt(e), r = this.ixLayout.get(s);
    if (!r)
      throw new Error(`Unknown method: ${s}`);
    const o = r.encode(t, n), a = n.slice(0, o);
    return Jo(wt[pr(s)], a);
  }
  encodeState(e, t) {
    throw new Error("Wormhole program does not have state");
  }
  decode(e, t = "hex") {
    var a;
    typeof e == "string" && (e = t === "hex" ? F.Buffer.from(e, "hex") : rr.decode(e));
    let n = F.Buffer.from(e.slice(0, 1)).readInt8(), s = F.Buffer.from(e.slice(1)), r = tt(wt[n] ?? "");
    return this.ixLayout.get(r) ? { data: (a = this.ixLayout.get(r)) == null ? void 0 : a.decode(s), name: r } : null;
  }
}
var wt;
(function(i) {
  i[i.Initialize = 0] = "Initialize", i[i.PostMessage = 1] = "PostMessage", i[i.PostVaa = 2] = "PostVaa", i[i.SetFees = 3] = "SetFees", i[i.TransferFees = 4] = "TransferFees", i[i.UpgradeContract = 5] = "UpgradeContract", i[i.UpgradeGuardianSet = 6] = "UpgradeGuardianSet", i[i.VerifySignatures = 7] = "VerifySignatures", i[i.PostMessageUnreliable = 8] = "PostMessageUnreliable";
})(wt || (wt = {}));
function Jo(i, e) {
  const t = F.Buffer.alloc(1 + (e === void 0 ? 0 : e.length));
  return t.writeUInt8(i, 0), e !== void 0 && t.write(e.toString("hex"), 1, "hex"), t;
}
class Xo {
  constructor(e) {
  }
  encode(e, t) {
    throw new Error("Wormhole program does not have state");
  }
  decode(e) {
    throw new Error("Wormhole program does not have state");
  }
}
class Zo {
  constructor(e) {
  }
  encode(e, t) {
    throw new Error("Wormhole program does not have user-defined types");
  }
  decode(e, t) {
    throw new Error("Wormhole program does not have user-defined types");
  }
}
class Qo {
  constructor(e) {
    M(this, "instruction");
    M(this, "accounts");
    M(this, "state");
    M(this, "events");
    M(this, "types");
    this.instruction = new pn(e), this.accounts = new Go(e), this.state = new Xo(e), this.events = new jo(e), this.types = new Zo(e);
  }
}
const mn = {
  version: "0.1.0",
  name: "wormhole",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "bridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "guardianSet",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "feeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
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
        }
      ],
      args: [
        {
          name: "guardianSetExpirationTime",
          type: "u32"
        },
        {
          name: "fee",
          type: "u64"
        },
        {
          name: "initialGuardians",
          type: {
            vec: {
              array: ["u8", 20]
            }
          }
        }
      ]
    },
    {
      name: "postMessage",
      accounts: [
        {
          name: "bridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "message",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "emitter",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "sequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "feeCollector",
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
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "payload",
          type: "bytes"
        },
        {
          name: "consistencyLevel",
          type: "u8"
        }
      ]
    },
    {
      name: "postVaa",
      accounts: [
        {
          name: "guardianSet",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "bridge",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "signatureSet",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "vaa",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
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
        }
      ],
      args: [
        {
          name: "version",
          type: "u8"
        },
        {
          name: "guardianSetIndex",
          type: "u32"
        },
        {
          name: "timestamp",
          type: "u32"
        },
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "emitterChain",
          type: "u16"
        },
        {
          name: "emitterAddress",
          type: {
            array: ["u8", 32]
          }
        },
        {
          name: "sequence",
          type: "u64"
        },
        {
          name: "consistencyLevel",
          type: "u8"
        },
        {
          name: "payload",
          type: "bytes"
        }
      ]
    },
    {
      name: "setFees",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "bridge",
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
          name: "systemProgram",
          isMut: !1,
          isSigner: !1
        }
      ],
      args: []
    },
    {
      name: "transferFees",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "bridge",
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
          name: "feeCollector",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "recipient",
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
          name: "bridge",
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
          name: "wormholeProgram",
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
      name: "upgradeGuardianSet",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "bridge",
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
          name: "guardianSetOld",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "guardianSetNew",
          isMut: !0,
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
      name: "verifySignatures",
      accounts: [
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "guardianSet",
          isMut: !1,
          isSigner: !1
        },
        {
          name: "signatureSet",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "instructions",
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
        }
      ],
      args: [
        {
          name: "signatureStatus",
          type: {
            array: ["i8", 19]
          }
        }
      ]
    },
    {
      name: "postMessageUnreliable",
      accounts: [
        {
          name: "bridge",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "message",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "emitter",
          isMut: !1,
          isSigner: !0
        },
        {
          name: "sequence",
          isMut: !0,
          isSigner: !1
        },
        {
          name: "payer",
          isMut: !0,
          isSigner: !0
        },
        {
          name: "feeCollector",
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
        }
      ],
      args: [
        {
          name: "nonce",
          type: "u32"
        },
        {
          name: "payload",
          type: "bytes"
        },
        {
          name: "consistencyLevel",
          type: "u8"
        }
      ]
    }
  ],
  accounts: [
    {
      name: "PostedMessage",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaaVersion",
            type: "u8"
          },
          {
            name: "consistencyLevel",
            type: "u8"
          },
          {
            name: "vaaTime",
            type: "u32"
          },
          {
            name: "vaaSignatureAccount",
            type: "publicKey"
          },
          {
            name: "submissionTime",
            type: "u32"
          },
          {
            name: "nonce",
            type: "u32"
          },
          {
            name: "sequence",
            type: "u64"
          },
          {
            name: "emitterChain",
            type: "u16"
          },
          {
            name: "emitterAddress",
            type: {
              array: ["u8", 32]
            }
          },
          {
            name: "payload",
            type: "bytes"
          }
        ]
      }
    },
    {
      name: "PostedVAA",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaaVersion",
            type: "u8"
          },
          {
            name: "consistencyLevel",
            type: "u8"
          },
          {
            name: "vaaTime",
            type: "u32"
          },
          {
            name: "vaaSignatureAccount",
            type: "publicKey"
          },
          {
            name: "submissionTime",
            type: "u32"
          },
          {
            name: "nonce",
            type: "u32"
          },
          {
            name: "sequence",
            type: "u64"
          },
          {
            name: "emitterChain",
            type: "u16"
          },
          {
            name: "emitterAddress",
            type: {
              array: ["u8", 32]
            }
          },
          {
            name: "payload",
            type: "bytes"
          }
        ]
      }
    }
  ]
};
function Es(i, e) {
  return new ir(mn, new g(i), e === void 0 ? { connection: null } : e, Ts());
}
function Pe(i, e) {
  return Es(i, cr(e));
}
function Ts() {
  return new Qo(mn);
}
function ea(i, e, t, n) {
  const s = Pe(e, i).methods.setFees();
  return s._ixFn(...s._args, {
    accounts: Bs(e, t, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Bs(i, e, t) {
  return {
    payer: new g(e),
    bridge: _e(i),
    vaa: Fe(i, F.Buffer.from(t.hash)),
    claim: Ze(i, t.emitterAddress.toString(), Ye(t.emitterChain), t.sequence),
    systemProgram: H.programId
  };
}
function ta(i, e, t, n, s) {
  const r = Pe(e, i).methods.transferFees();
  return r._ixFn(...r._args, {
    accounts: vs(e, t, n, s),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function vs(i, e, t, n) {
  return {
    payer: new g(e),
    bridge: _e(i),
    vaa: Fe(i, F.Buffer.from(n.hash)),
    claim: Ze(i, n.emitterAddress.toString(), Ye(n.emitterChain), n.sequence),
    feeCollector: Qe(i),
    recipient: new g(t),
    rent: fe,
    systemProgram: H.programId
  };
}
function na(i, e, t, n) {
  const s = Pe(e, i).methods.upgradeGuardianSet();
  return s._ixFn(...s._args, {
    accounts: Ls(e, t, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Ls(i, e, t) {
  return {
    payer: new g(e),
    bridge: _e(i),
    vaa: Fe(i, F.Buffer.from(t.hash)),
    claim: Ze(i, t.emitterAddress.toString(), Ye(t.emitterChain), t.sequence),
    guardianSetOld: Me(i, t.guardianSet),
    guardianSetNew: Me(i, t.guardianSet + 1),
    systemProgram: H.programId
  };
}
function sa(i, e, t, n) {
  const s = Pe(e, i).methods.upgradeContract();
  return s._ixFn(...s._args, {
    accounts: Cs(e, t, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Cs(i, e, t, n) {
  const { newContract: s } = t.payload;
  return {
    payer: new g(e),
    bridge: _e(i),
    vaa: Fe(i, F.Buffer.from(t.hash)),
    claim: Ze(i, t.emitterAddress.toString(), Ye(t.emitterChain), t.sequence),
    upgradeAuthority: Ps(i),
    spill: new g(n === void 0 ? e : n),
    implementation: new yt(s).unwrap(),
    programData: gr(i),
    wormholeProgram: new g(i),
    rent: fe,
    clock: ae,
    bpfLoaderUpgradeable: jt.programId,
    systemProgram: H.programId
  };
}
function ra(i, e, t, n, s, r) {
  const o = Pe(e, i).methods.initialize(n, new bt(s.toString()), [
    ...r.map((a) => [...new Uint8Array(a)])
  ]);
  return o._ixFn(...o._args, {
    accounts: xs(e, t),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function xs(i, e) {
  return {
    bridge: _e(i),
    guardianSet: Me(i, 0),
    feeCollector: Qe(i),
    payer: new g(e),
    clock: ae,
    rent: fe,
    systemProgram: H.programId
  };
}
function Ks(i, e, t, n, s, r, o) {
  const a = Pe(e, i).methods.postMessage(r, F.Buffer.from(s), o);
  return a._ixFn(...a._args, {
    accounts: bn(e, t, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function bn(i, e, t, n) {
  let s;
  return n ? { emitter: n, sequence: s } = gn(n, i) : (n = e, s = Lt(n, i)), {
    bridge: _e(i),
    message: new g(t),
    emitter: new g(n),
    sequence: s,
    payer: new g(e),
    feeCollector: Qe(i),
    clock: ae,
    rent: fe,
    systemProgram: H.programId
  };
}
function zs(i, e, t, n, s) {
  const r = Pe(e, i).methods.postVaa(
    1,
    // TODO: hardcoded VAA version
    n.guardianSet,
    n.timestamp,
    n.nonce,
    Ye(n.emitterChain),
    [...n.emitterAddress.toUint8Array()],
    new bt(n.sequence.toString()),
    n.consistencyLevel,
    // Note: This _must_ be a Buffer, a Uint8Array does not work
    F.Buffer.from(or(n.payloadLiteral, n.payload))
  );
  return r._ixFn(...r._args, {
    accounts: Ns(e, t, s, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Ns(i, e, t, n) {
  return {
    guardianSet: Me(i, n.guardianSet),
    bridge: _e(i),
    signatureSet: new g(t),
    vaa: Fe(i, F.Buffer.from(n.hash)),
    payer: new g(e),
    clock: ae,
    rent: fe,
    systemProgram: H.programId
  };
}
const ia = 19;
async function Ws(i, e, t, n, s, r) {
  const o = n.guardianSet, a = await yn(i, e, o, r), c = n.signatures, d = a.keys, l = 7, f = [];
  for (let k = 0; k < Math.ceil(c.length / l); ++k) {
    const h = k * l, m = Math.min(c.length, (k + 1) * l), p = new Array(ia).fill(-1), _ = [], L = [];
    for (let V = 0; V < m - h; ++V) {
      const ue = c.at(V + h);
      _.push(F.Buffer.from(ue.signature.encode())), L.push(d.at(ue.guardianIndex)), p[ue.guardianIndex] = V;
    }
    f.push(Vo(_, L, F.Buffer.from(n.hash))), f.push(oa(i, e, t, n, s, p));
  }
  return f;
}
function oa(i, e, t, n, s, r) {
  const o = Pe(e, i).methods.verifySignatures(r);
  return o._ixFn(...o._args, {
    accounts: Os(e, t, s, n),
    signers: void 0,
    remainingAccounts: void 0,
    preInstructions: void 0,
    postInstructions: void 0
  });
}
function Os(i, e, t, n) {
  return {
    payer: new g(e),
    guardianSet: Me(i, n.guardianSet),
    signatureSet: new g(t),
    instructions: ts,
    rent: fe,
    systemProgram: H.programId
  };
}
function aa(i, e) {
  const { emitter: t, sequence: n } = gn(i, e);
  return {
    wormholeBridge: _e(e),
    wormholeEmitter: t,
    wormholeSequence: n,
    wormholeFeeCollector: Qe(e)
  };
}
function ca(i, e, t, n) {
  const s = bn(e, t, n, i);
  return {
    payer: s.payer,
    wormholeBridge: s.bridge,
    wormholeMessage: s.message,
    wormholeEmitter: s.emitter,
    wormholeSequence: s.sequence,
    wormholeFeeCollector: s.feeCollector,
    clock: s.clock,
    rent: s.rent,
    systemProgram: s.systemProgram
  };
}
const ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BridgeConfig: Bt,
  BridgeData: vt,
  GuardianSetData: xt,
  SequenceTracker: Ct,
  SignatureSetData: Kt,
  coder: Ts,
  createBridgeFeeTransferInstruction: Rs,
  createInitializeInstruction: ra,
  createPostMessageInstruction: Ks,
  createPostVaaInstruction: zs,
  createReadOnlyWormholeProgramInterface: Pe,
  createSetFeesInstruction: ea,
  createTransferFeesInstruction: ta,
  createUpgradeContractInstruction: sa,
  createUpgradeGuardianSetInstruction: na,
  createVerifySignaturesInstructions: Ws,
  createWormholeProgramInterface: Es,
  deriveClaimKey: Ze,
  deriveEmitterSequenceKey: Lt,
  deriveFeeCollectorKey: Qe,
  deriveGuardianSetKey: Me,
  derivePostedVaaKey: Fe,
  deriveUpgradeAuthorityKey: Ps,
  deriveWormholeBridgeDataKey: _e,
  deriveWormholeEmitterKey: fn,
  getClaim: Do,
  getEmitterKeys: gn,
  getGuardianSet: yn,
  getInitializeAccounts: xs,
  getPostMessageAccounts: bn,
  getPostMessageCpiAccounts: ca,
  getPostVaaAccounts: Ns,
  getProgramSequenceTracker: Fo,
  getSequenceTracker: _s,
  getSetFeesAccounts: Bs,
  getSignatureSetData: Ho,
  getTransferFeesAccounts: vs,
  getUpgradeContractAccounts: Cs,
  getUpgradeGuardianSetAccounts: Ls,
  getVerifySignatureAccounts: Os,
  getWormholeBridgeData: As,
  getWormholeDerivedAccounts: aa
}, Symbol.toStringTag, { value: "Module" })), Fn = "Program log: Sequence: ";
class ct {
  constructor(e, t, n, s) {
    M(this, "network");
    M(this, "chain");
    M(this, "connection");
    M(this, "contracts");
    M(this, "chainId");
    M(this, "coreBridge");
    M(this, "address");
    M(this, "bridgeData");
    this.network = e, this.chain = t, this.connection = n, this.contracts = s, this.chainId = Ye(t);
    const r = s.coreBridge;
    if (!r)
      throw new Error(`CoreBridge contract Address for chain ${t} not found`);
    this.address = r, this.coreBridge = Pe(r, n);
  }
  async getGuardianSet(e) {
    const t = await yn(this.connection, this.coreBridge.programId, e);
    return {
      index: t.index,
      keys: t.keys.map((n) => n.toString("hex")),
      expiry: BigInt(t.expirationTime)
    };
  }
  static async fromRpc(e, t) {
    const [n, s] = await ur.chainFromRpc(e), r = t[s];
    if (r.network !== n)
      throw new Error(`Network mismatch for chain ${s}: ${r.network} != ${n}`);
    return new ct(n, s, e, t[s].contracts);
  }
  async ensureBridgeConfig() {
    this.bridgeData || (this.bridgeData = await As(this.connection, this.coreBridge.programId));
  }
  async getMessageFee() {
    return await this.ensureBridgeConfig(), this.bridgeData.config.fee;
  }
  async getGuardianSetIndex() {
    return await this.ensureBridgeConfig(), this.bridgeData.guardianSetIndex;
  }
  async *publishMessage(e, t, n, s) {
    const r = Le.generate(), o = new yt(e).unwrap(), a = Ks(this.connection, this.coreBridge.programId, o, r.publicKey, t, n, s), c = await this.getMessageFee(), d = Rs(this.coreBridge.programId, o, c), l = new O();
    l.feePayer = o, l.add(d, a), yield this.createUnsignedTx({ transaction: l, signers: [r] }, "Core.PublishMessage");
  }
  async *verifyMessage(e, t) {
    yield* this.postVaa(e, t);
  }
  async *postVaa(e, t) {
    const n = Fe(this.coreBridge.programId, F.Buffer.from(t.hash));
    if (await this.connection.getAccountInfo(n))
      return;
    const r = new yt(e).unwrap(), o = Le.generate(), a = await Ws(this.connection, this.coreBridge.programId, r, t, o.publicKey);
    for (let d = 0; d < a.length; d += 2) {
      const l = new O().add(...a.slice(d, d + 2));
      l.feePayer = r, yield this.createUnsignedTx({ transaction: l, signers: [o] }, "Core.VerifySignature", !0);
    }
    const c = new O().add(zs(this.connection, this.coreBridge.programId, r, t, o.publicKey));
    c.feePayer = r, yield this.createUnsignedTx({ transaction: c }, "Core.PostVAA");
  }
  static parseSequenceFromLog(e, t) {
    var c, d, l, f;
    const { meta: n, transaction: { message: s } } = t;
    if (!((c = n == null ? void 0 : n.innerInstructions) != null && c.length))
      return [];
    const r = s.staticAccountKeys;
    if (r.filter((k) => k.toString() === e).length === 0)
      return [];
    const o = (f = (l = (d = n == null ? void 0 : n.logMessages) == null ? void 0 : d.filter((k) => k.startsWith(Fn))) == null ? void 0 : l[0]) == null ? void 0 : f.replace(Fn, "");
    if (!o)
      return [];
    const a = [];
    for (const k of n == null ? void 0 : n.innerInstructions) {
      const h = k.instructions;
      a.push(...h.filter((m) => m.programIdIndex in r && r[m.programIdIndex].toString() === e));
    }
    return a.length < 1 ? [] : r.length < 3 ? [] : a.map((k) => [new yt(r[k.accounts[2]]).toUniversalAddress(), BigInt(o)]).filter((k) => k !== null);
  }
  async getMessageAccountKeys(e) {
    let t;
    if (typeof e.transaction.message.version != "string")
      if (e.meta.loadedAddresses)
        t = e.transaction.message.getAccountKeys({
          accountKeysFromLookups: e.meta.loadedAddresses
        });
      else {
        const n = await Promise.all(e.transaction.message.addressTableLookups.map(async (s) => {
          const r = await this.connection.getAddressLookupTable(s.accountKey);
          if (!r || !r.value)
            throw new Error("Could not resolve lookup table: " + s.accountKey.toBase58());
          return r.value;
        }));
        t = e.transaction.message.getAccountKeys({
          addressLookupTableAccounts: n
        });
      }
    else
      t = e.transaction.message.getAccountKeys();
    return t;
  }
  async findInstructions(e, t) {
    var c;
    const { meta: n, transaction: { message: s } } = t, r = this.coreBridge.programId, o = (c = n.innerInstructions) == null ? void 0 : c.flatMap((d) => d.instructions.filter(
      // find the instructions where the programId equals the Wormhole ProgramId
      (l) => r.toString() === e.get(l.programIdIndex).toString()
    )).map((d) => ({
      programIdIndex: d.programIdIndex,
      accountKeyIndexes: d.accounts
    })), a = s.compiledInstructions.filter((d) => r.toString() === e.get(d.programIdIndex).toString());
    return [...o, ...a];
  }
  async parsePostMessageAccount(e) {
    const t = await this.connection.getAccountInfo(e);
    if (!(t != null && t.data))
      throw new Error("No data found in message account");
    const { timestamp: n, emitterAddress: s, emitterChain: r, consistencyLevel: o, sequence: a, nonce: c, payload: d } = Is(new Uint8Array(t == null ? void 0 : t.data));
    return hr("Uint8Array", {
      guardianSet: await this.getGuardianSetIndex(),
      emitterChain: ar(r),
      timestamp: n,
      emitterAddress: s,
      consistencyLevel: o,
      sequence: a,
      nonce: c,
      payload: d,
      signatures: []
    });
  }
  async parseTransaction(e) {
    const t = await this.connection.getTransaction(e, {
      maxSupportedTransactionVersion: 0
    });
    if (!t || !t.meta || !t.meta.innerInstructions)
      throw new Error("transaction not found");
    try {
      const o = ct.parseSequenceFromLog(this.coreBridge.programId.toBase58(), t);
      if (o.length > 0) {
        const [a, c] = o[0];
        return [
          {
            chain: this.chain,
            emitter: a,
            sequence: c
          }
        ];
      }
    } catch {
    }
    const n = await this.getMessageAccountKeys(t), s = await this.findInstructions(n, t);
    if (!s || s.length === 0)
      throw new Error("no bridge messages found");
    const r = s.map(async (o) => {
      const a = n.get(o.accountKeyIndexes[1]), c = await this.parsePostMessageAccount(a);
      return {
        chain: c.emitterChain,
        emitter: c.emitterAddress,
        sequence: c.sequence
      };
    });
    return await Promise.all(r);
  }
  async parseMessages(e) {
    const t = await this.connection.getTransaction(e, {
      maxSupportedTransactionVersion: 0
    });
    if (!t || !t.meta || !t.meta.innerInstructions)
      throw new Error("transaction not found");
    const n = await this.getMessageAccountKeys(t), s = await this.findInstructions(n, t);
    if (!s || s.length === 0)
      throw new Error("no bridge messages found");
    const r = s.map(async (o) => {
      const a = n.get(o.accountKeyIndexes[1]);
      return await this.parsePostMessageAccount(a);
    });
    return await Promise.all(r);
  }
  createUnsignedTx(e, t, n = !1) {
    return new dr(e, this.network, this.chain, t, n);
  }
}
fr(lr, "WormholeCore", ct);
const ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IDL: mn,
  SolanaWormholeCore: ct,
  deserializePostMessage: Is,
  postMessageLayout: ws,
  utils: ua
}, Symbol.toStringTag, { value: "Module" }));
export {
  jt as B,
  ct as S,
  $n as a,
  ma as b,
  bn as c,
  Te as d,
  Fe as e,
  Ze as f,
  ut as g,
  Ps as h,
  gr as i,
  ca as j,
  aa as k,
  Do as l,
  Rs as m,
  pa as n,
  ka as o
};
