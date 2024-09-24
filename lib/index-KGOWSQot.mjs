var Dr = Object.defineProperty;
var zr = (e, t, r) => t in e ? Dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var D = (e, t, r) => (zr(e, typeof t != "symbol" ? t + "" : t, r), r);
import { g as Vr, b1 as Fr, c3 as Gr, cD as Je, cE as Lr, as as Wr, ax as Kt, bW as Ae, ch as Kr, cj as Jt, cF as Jr, cw as Ht, b2 as Hr, ar as Xr } from "./index-DV1w5RNX.mjs";
import { i as rr, g as ft, a as qr, b as nr, c as ir, d as nt, t as it, S as Zr, e as _e, p as Yr, f as Qr, h as He, j as en, u as Xe, k as tn, l as rn, m as Xt, n as nn, _ as sn } from "./sui-BQWCExPY.mjs";
import "./index-B512u2Lt.mjs";
import { r as an } from "./chain-tk4BDPwT.mjs";
class on {
  constructor(t, r, n, i, s = !1) {
    D(this, "transaction");
    D(this, "network");
    D(this, "chain");
    D(this, "description");
    D(this, "parallelizable");
    this.transaction = t, this.network = r, this.chain = n, this.description = i, this.parallelizable = s;
  }
}
class cn extends TypeError {
  constructor(t, r) {
    let n;
    const { message: i, explanation: s, ...o } = t, { path: a } = t, c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? c), s != null && (this.cause = c), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [t, ...r()]);
  }
}
function un(e) {
  return L(e) && typeof e[Symbol.iterator] == "function";
}
function L(e) {
  return typeof e == "object" && e != null;
}
function W(e) {
  return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`;
}
function dn(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function ln(e, t, r, n) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = { message: e });
  const { path: i, branch: s } = t, { type: o } = r, { refinement: a, message: c = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${W(n)}\`` } = e;
  return {
    value: n,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...e,
    message: c
  };
}
function* qt(e, t, r, n) {
  un(e) || (e = [e]);
  for (const i of e) {
    const s = ln(i, t, r, n);
    s && (yield s);
  }
}
function* ht(e, t, r = {}) {
  const { path: n = [], branch: i = [e], coerce: s = !1, mask: o = !1 } = r, a = { path: n, branch: i };
  if (s && (e = t.coercer(e, a), o && t.type !== "type" && L(t.schema) && L(e) && !Array.isArray(e)))
    for (const d in e)
      t.schema[d] === void 0 && delete e[d];
  let c = "valid";
  for (const d of t.validator(e, a))
    d.explanation = r.message, c = "not_valid", yield [d, void 0];
  for (let [d, l, g] of t.entries(e, a)) {
    const m = ht(l, g, {
      path: d === void 0 ? n : [...n, d],
      branch: d === void 0 ? i : [...i, l],
      coerce: s,
      mask: o,
      message: r.message
    });
    for (const y of m)
      y[0] ? (c = y[0].refinement != null ? "not_refined" : "not_valid", yield [y[0], void 0]) : s && (l = y[1], d === void 0 ? e = l : e instanceof Map ? e.set(d, l) : e instanceof Set ? e.add(l) : L(e) && (l !== void 0 || d in e) && (e[d] = l));
  }
  if (c !== "not_valid")
    for (const d of t.refiner(e, a))
      d.explanation = r.message, c = "not_refined", yield [d, void 0];
  c === "valid" && (yield [void 0, e]);
}
class Q {
  constructor(t) {
    const { type: r, schema: n, validator: i, refiner: s, coercer: o = (c) => c, entries: a = function* () {
    } } = t;
    this.type = r, this.schema = n, this.entries = a, this.coercer = o, i ? this.validator = (c, d) => {
      const l = i(c, d);
      return qt(l, d, this, c);
    } : this.validator = () => [], s ? this.refiner = (c, d) => {
      const l = s(c, d);
      return qt(l, d, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t, r) {
    return st(t, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t, r) {
    return sr(t, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return F(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t, r) {
    return ar(t, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, r = {}) {
    return ke(t, this, r);
  }
}
function st(e, t, r) {
  const n = ke(e, t, { message: r });
  if (n[0])
    throw n[0];
}
function sr(e, t, r) {
  const n = ke(e, t, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function ar(e, t, r) {
  const n = ke(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function F(e, t) {
  return !ke(e, t)[0];
}
function ke(e, t, r = {}) {
  const n = ht(e, t, r), i = dn(n);
  return i[0] ? [new cn(i[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, i[1]];
}
function Te(...e) {
  const t = e[0].type === "type", r = e.map((i) => i.schema), n = Object.assign({}, ...r);
  return t ? hn(n) : p(n);
}
function G(e, t) {
  return new Q({ type: e, schema: null, validator: t });
}
function at() {
  return G("any", () => !0);
}
function j(e) {
  return new Q({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries())
          yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array value, but received: ${W(t)}`;
    }
  });
}
function fn() {
  return G("bigint", (e) => typeof e == "bigint");
}
function N() {
  return G("boolean", (e) => typeof e == "boolean");
}
function Y() {
  return G("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${W(e)}`);
}
function T(e) {
  const t = W(e), r = typeof e;
  return new Q({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${W(n)}`;
    }
  });
}
function or() {
  return G("never", () => !1);
}
function C(e) {
  return new Q({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r)
  });
}
function ue() {
  return G("number", (e) => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${W(e)}`);
}
function p(e) {
  const t = e ? Object.keys(e) : [], r = or();
  return new Q({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && L(n)) {
        const i = new Set(Object.keys(n));
        for (const s of t)
          i.delete(s), yield [s, n[s], e[s]];
        for (const s of i)
          yield [s, n[s], r];
      }
    },
    validator(n) {
      return L(n) || `Expected an object, but received: ${W(n)}`;
    },
    coercer(n) {
      return L(n) ? { ...n } : n;
    }
  });
}
function S(e) {
  return new Q({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r)
  });
}
function Z(e, t) {
  return new Q({
    type: "record",
    schema: null,
    *entries(r) {
      if (L(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, e], yield [n, i, t];
        }
    },
    validator(r) {
      return L(r) || `Expected an object, but received: ${W(r)}`;
    }
  });
}
function h() {
  return G("string", (e) => typeof e == "string" || `Expected a string, but received: ${W(e)}`);
}
function cr(e) {
  const t = or();
  return new Q({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let i = 0; i < n; i++)
          yield [i, r[i], e[i] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${W(r)}`;
    }
  });
}
function hn(e) {
  const t = Object.keys(e);
  return new Q({
    type: "type",
    schema: e,
    *entries(r) {
      if (L(r))
        for (const n of t)
          yield [n, r[n], e[n]];
    },
    validator(r) {
      return L(r) || `Expected an object, but received: ${W(r)}`;
    },
    coercer(r) {
      return L(r) ? { ...r } : r;
    }
  });
}
function B(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new Q({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i)
          return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of e) {
        const [...o] = ht(r, s, n), [a] = o;
        if (a[0])
          for (const [c] of o)
            c && i.push(c);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${W(r)}`,
        ...i
      ];
    }
  });
}
function ur() {
  return G("unknown", () => !0);
}
const gt = B([
  p({
    AddressOwner: h()
  }),
  p({
    ObjectOwner: h()
  }),
  p({
    Shared: p({
      initial_shared_version: C(h())
    })
  }),
  T("Immutable")
]);
G("SuiJsonValue", () => !0);
const gn = B([
  p({ u32: h() }),
  p({ u64: h() }),
  p({ f64: h() })
]);
p({
  attributes: Z(h(), C(gn)),
  featureFlags: Z(h(), N()),
  maxSupportedProtocolVersion: h(),
  minSupportedProtocolVersion: h(),
  protocolVersion: h()
});
B([h(), T("package")]);
const se = p({
  /** Base64 string representing the object digest */
  digest: h(),
  /** Hex code as string representing the object id */
  objectId: h(),
  /** Object version */
  version: B([ue(), h(), fn()])
});
p({
  owner: gt,
  reference: se
});
p({
  objectId: h(),
  sequenceNumber: h()
});
p({
  payment: j(se),
  /** Gas Object's owner */
  owner: h(),
  price: h(),
  budget: h()
});
const pn = Te(
  se,
  p({
    type: h(),
    owner: gt,
    previousTransaction: h()
  })
), yn = Z(h(), at()), mn = Z(h(), ur()), wn = p({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: h(),
  /** Fields and values stored inside the Move object */
  fields: yn,
  hasPublicTransfer: N()
}), bn = p({
  /** A mapping from module name to disassembled Move bytecode */
  disassembled: mn
}), Sn = B([
  Te(wn, p({ dataType: T("moveObject") })),
  Te(bn, p({ dataType: T("package") }))
]), Tn = p({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: h(),
  hasPublicTransfer: N(),
  version: h(),
  bcsBytes: h()
}), vn = p({
  id: h(),
  /** A mapping from module name to Move bytecode enocded in base64*/
  moduleMap: Z(h(), h())
}), jn = B([
  Te(Tn, p({ dataType: T("moveObject") })),
  Te(vn, p({ dataType: T("package") }))
]);
BigInt(1e9);
const dr = p({
  code: h(),
  error: S(h()),
  object_id: S(h()),
  parent_object_id: S(h()),
  version: S(h()),
  digest: S(h())
}), En = p({
  data: C(S(Z(h(), h()))),
  error: C(S(dr))
}), kn = B([
  En,
  S(Z(h(), h()))
]), lr = p({
  objectId: h(),
  version: h(),
  digest: h(),
  /**
   * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
   */
  type: C(S(h())),
  /**
   * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
   */
  content: C(S(Sn)),
  /**
   * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
   */
  bcs: C(S(jn)),
  /**
   * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
   */
  owner: C(S(gt)),
  /**
   * The digest of the transaction that created or last mutated this object.
   * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
   */
  previousTransaction: C(S(h())),
  /**
   * The amount of SUI we would rebate if this object gets deleted.
   * This number is re-calculated each time the object is mutated based on
   * the present storage gas price.
   * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
   */
  storageRebate: C(S(h())),
  /**
   * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
   * This can also be None if the struct type does not have Display defined
   * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
   */
  display: C(S(kn))
});
p({
  /* Whether to fetch the object type, default to be true */
  showType: C(S(N())),
  /* Whether to fetch the object content, default to be false */
  showContent: C(S(N())),
  /* Whether to fetch the object content in BCS bytes, default to be false */
  showBcs: C(S(N())),
  /* Whether to fetch the object owner, default to be false */
  showOwner: C(S(N())),
  /* Whether to fetch the previous transaction digest, default to be false */
  showPreviousTransaction: C(S(N())),
  /* Whether to fetch the storage rebate, default to be false */
  showStorageRebate: C(S(N())),
  /* Whether to fetch the display metadata, default to be false */
  showDisplay: C(S(N()))
});
B([T("Exists"), T("notExists"), T("Deleted")]);
j(pn);
const In = p({
  data: C(S(lr)),
  error: C(S(dr))
});
function On(e) {
  return e.data;
}
function xn(e) {
  if (e.error && "object_id" in e.error && "version" in e.error && "digest" in e.error) {
    const t = e.error;
    return {
      objectId: t.object_id,
      version: t.version,
      digest: t.digest
    };
  }
}
function Zt(e) {
  if ("reference" in e)
    return e.reference;
  const t = On(e);
  return t ? {
    objectId: t.objectId,
    version: t.version,
    digest: t.digest
  } : xn(e);
}
p({
  objectId: h(),
  atCheckpoint: S(ue())
});
p({
  data: j(In),
  nextCursor: S(C(h())),
  hasNextPage: N()
});
B([
  p({
    details: lr,
    status: T("VersionFound")
  }),
  p({
    details: h(),
    status: T("ObjectNotExists")
  }),
  p({
    details: se,
    status: T("ObjectDeleted")
  }),
  p({
    details: cr([h(), ue()]),
    status: T("VersionNotFound")
  }),
  p({
    details: p({
      asked_version: ue(),
      latest_version: ue(),
      object_id: h()
    }),
    status: T("VersionTooHigh")
  })
]);
const An = B([h(), p({ Object: h() })]);
j(An);
const _n = p({
  address: h(),
  name: h()
}), Cn = B([T("Private"), T("Public"), T("Friend")]), pt = p({
  abilities: j(h())
}), Bn = p({
  constraints: pt,
  isPhantom: N()
}), $n = p({
  TypeParameter: ue()
}), qe = cr([
  p({
    module: h(),
    package: h(),
    function: h()
  }),
  h()
]);
p({
  rank3Days: j(qe),
  rank7Days: j(qe),
  rank30Days: j(qe)
});
function fr(e) {
  if (!e)
    return !1;
  if (typeof e == "string" || F(e, $n) || hr(e))
    return !0;
  if (typeof e != "object")
    return !1;
  const t = e;
  return !!(F(t.Reference, he) || F(t.MutableReference, he) || F(t.Vector, he));
}
const he = G(
  "SuiMoveNormalizedType",
  fr
);
function hr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = e;
  if (!t.Struct || typeof t.Struct != "object")
    return !1;
  const r = t.Struct;
  return !(typeof r.address != "string" || typeof r.module != "string" || typeof r.name != "string" || !Array.isArray(r.typeArguments) || !r.typeArguments.every((n) => fr(n)));
}
G(
  "SuiMoveNormalizedStructType",
  hr
);
const Un = p({
  visibility: Cn,
  isEntry: N(),
  typeParameters: j(pt),
  parameters: j(he),
  return: j(he)
}), Mn = p({
  name: h(),
  type: he
}), Rn = p({
  abilities: pt,
  typeParameters: j(Bn),
  fields: j(Mn)
}), Pn = p({
  fileFormatVersion: ue(),
  address: h(),
  name: h(),
  friends: j(_n),
  structs: Z(h(), Rn),
  exposedFunctions: Z(h(), Un)
});
Z(h(), Pn);
function ot(e) {
  return typeof e == "object" && "MutableReference" in e ? e.MutableReference : void 0;
}
function gr(e) {
  return typeof e == "object" && "Reference" in e ? e.Reference : void 0;
}
function yt(e) {
  if (typeof e == "object" && "Struct" in e)
    return e;
  const t = gr(e), r = ot(e);
  if (typeof t == "object" && "Struct" in t)
    return t;
  if (typeof r == "object" && "Struct" in r)
    return r;
}
function Nn(e) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
    t[r] = 255;
  for (var n = 0; n < e.length; n++) {
    var i = e.charAt(n), s = i.charCodeAt(0);
    if (t[s] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[s] = n;
  }
  var o = e.length, a = e.charAt(0), c = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function l(y) {
    if (y instanceof Uint8Array || (ArrayBuffer.isView(y) ? y = new Uint8Array(y.buffer, y.byteOffset, y.byteLength) : Array.isArray(y) && (y = Uint8Array.from(y))), !(y instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (y.length === 0)
      return "";
    for (var w = 0, b = 0, f = 0, O = y.length; f !== O && y[f] === 0; )
      f++, w++;
    for (var _ = (O - f) * d + 1 >>> 0, M = new Uint8Array(_); f !== O; ) {
      for (var x = y[f], E = 0, R = _ - 1; (x !== 0 || E < b) && R !== -1; R--, E++)
        x += 256 * M[R] >>> 0, M[R] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      b = E, f++;
    }
    for (var K = _ - b; K !== _ && M[K] === 0; )
      K++;
    for (var le = a.repeat(w); K < _; ++K)
      le += e.charAt(M[K]);
    return le;
  }
  function g(y) {
    if (typeof y != "string")
      throw new TypeError("Expected String");
    if (y.length === 0)
      return new Uint8Array();
    for (var w = 0, b = 0, f = 0; y[w] === a; )
      b++, w++;
    for (var O = (y.length - w) * c + 1 >>> 0, _ = new Uint8Array(O); y[w]; ) {
      var M = t[y.charCodeAt(w)];
      if (M === 255)
        return;
      for (var x = 0, E = O - 1; (M !== 0 || x < f) && E !== -1; E--, x++)
        M += o * _[E] >>> 0, _[E] = M % 256 >>> 0, M = M / 256 >>> 0;
      if (M !== 0)
        throw new Error("Non-zero carry");
      f = x, w++;
    }
    for (var R = O - f; R !== O && _[R] === 0; )
      R++;
    for (var K = new Uint8Array(b + (O - R)), le = b; R !== O; )
      K[le++] = _[R++];
    return K;
  }
  function m(y) {
    var w = g(y);
    if (w)
      return w;
    throw new Error("Non-base" + o + " character");
  }
  return {
    encode: l,
    decodeUnsafe: g,
    decode: m
  };
}
var Dn = Nn;
const zn = Dn, Vn = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Fn = zn(Vn);
const pr = /* @__PURE__ */ Vr(Fn), Ie = (e) => pr.encode(e), mt = (e) => pr.decode(e);
function ae(e) {
  return Uint8Array.from(atob(e), (t) => t.charCodeAt(0));
}
const Ze = 8192;
function Oe(e) {
  if (e.length < Ze)
    return btoa(String.fromCharCode(...e));
  let t = "";
  for (var r = 0; r < e.length; r += Ze) {
    const n = e.slice(r, r + Ze);
    t += String.fromCharCode(...n);
  }
  return btoa(t);
}
function Ke(e) {
  var i;
  const t = e.startsWith("0x") ? e.slice(2) : e, n = ((i = (t.length % 2 === 0 ? t : `0${t}}`).match(/.{2}/g)) == null ? void 0 : i.map((s) => parseInt(s, 16))) ?? [];
  return Uint8Array.from(n);
}
function xe(e) {
  return e.reduce((t, r) => t + r.toString(16).padStart(2, "0"), "");
}
function wt(e) {
  let t = [], r = 0;
  if (e === 0)
    return [0];
  for (; e > 0; )
    t[r] = e & 127, (e >>= 7) && (t[r] |= 128), r += 1;
  return t;
}
function Gn(e) {
  let t = 0, r = 0, n = 0;
  for (; ; ) {
    let i = e[n];
    if (n += 1, t |= (i & 127) << r, !(i & 128))
      break;
    r += 7;
  }
  return {
    value: t,
    length: n
  };
}
class yr {
  /**
   * @param {Uint8Array} data Data to use as a buffer.
   */
  constructor(t) {
    this.bytePosition = 0, this.dataView = new DataView(t.buffer);
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(t) {
    return this.bytePosition += t, this;
  }
  /**
   * Read U8 value from the buffer and shift cursor by 1.
   * @returns
   */
  read8() {
    let t = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), t;
  }
  /**
   * Read U16 value from the buffer and shift cursor by 2.
   * @returns
   */
  read16() {
    let t = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), t;
  }
  /**
   * Read U32 value from the buffer and shift cursor by 4.
   * @returns
   */
  read32() {
    let t = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), t;
  }
  /**
   * Read U64 value from the buffer and shift cursor by 8.
   * @returns
   */
  read64() {
    let t = this.read32(), n = this.read32().toString(16) + t.toString(16).padStart(8, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 16.
   */
  read128() {
    let t = BigInt(this.read64()), n = BigInt(this.read64()).toString(16) + t.toString(16).padStart(16, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 32.
   * @returns
   */
  read256() {
    let t = BigInt(this.read128()), n = BigInt(this.read128()).toString(16) + t.toString(16).padStart(32, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read `num` number of bytes from the buffer and shift cursor by `num`.
   * @param num Number of bytes to read.
   */
  readBytes(t) {
    let r = this.bytePosition + this.dataView.byteOffset, n = new Uint8Array(this.dataView.buffer, r, t);
    return this.shift(t), n;
  }
  /**
   * Read ULEB value - an integer of varying size. Used for enum indexes and
   * vector lengths.
   * @returns {Number} The ULEB value.
   */
  readULEB() {
    let t = this.bytePosition + this.dataView.byteOffset, r = new Uint8Array(this.dataView.buffer, t), { value: n, length: i } = Gn(r);
    return this.shift(i), n;
  }
  /**
   * Read a BCS vector: read a length and then apply function `cb` X times
   * where X is the length of the vector, defined as ULEB in BCS bytes.
   * @param cb Callback to process elements of vector.
   * @returns {Array<Any>} Array of the resulting values, returned by callback.
   */
  readVec(t) {
    let r = this.readULEB(), n = [];
    for (let i = 0; i < r; i++)
      n.push(t(this, i, r));
    return n;
  }
}
function Ln(e, t) {
  switch (t) {
    case "base58":
      return Ie(e);
    case "base64":
      return Oe(e);
    case "hex":
      return xe(e);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function Wn(e, t) {
  switch (t) {
    case "base58":
      return mt(e);
    case "base64":
      return ae(e);
    case "hex":
      return Ke(e);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function mr(e, t = ["<", ">"]) {
  const [r, n] = t, i = [];
  let s = "", o = 0;
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    if (c === r && o++, c === n && o--, o === 0 && c === ",") {
      i.push(s.trim()), s = "";
      continue;
    }
    s += c;
  }
  return i.push(s.trim()), i;
}
class wr {
  constructor({ size: t = 1024, maxSize: r, allocateSize: n = 1024 } = {}) {
    this.bytePosition = 0, this.size = t, this.maxSize = r || t, this.allocateSize = n, this.dataView = new DataView(new ArrayBuffer(t));
  }
  ensureSizeOrGrow(t) {
    const r = this.bytePosition + t;
    if (r > this.size) {
      const n = Math.min(this.maxSize, this.size + this.allocateSize);
      if (r > n)
        throw new Error(
          `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${r}`
        );
      this.size = n;
      const i = new ArrayBuffer(this.size);
      new Uint8Array(i).set(new Uint8Array(this.dataView.buffer)), this.dataView = new DataView(i);
    }
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(t) {
    return this.bytePosition += t, this;
  }
  /**
   * Write a U8 value into a buffer and shift cursor position by 1.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write8(t) {
    return this.ensureSizeOrGrow(1), this.dataView.setUint8(this.bytePosition, Number(t)), this.shift(1);
  }
  /**
   * Write a U16 value into a buffer and shift cursor position by 2.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write16(t) {
    return this.ensureSizeOrGrow(2), this.dataView.setUint16(this.bytePosition, Number(t), !0), this.shift(2);
  }
  /**
   * Write a U32 value into a buffer and shift cursor position by 4.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write32(t) {
    return this.ensureSizeOrGrow(4), this.dataView.setUint32(this.bytePosition, Number(t), !0), this.shift(4);
  }
  /**
   * Write a U64 value into a buffer and shift cursor position by 8.
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write64(t) {
    return Ye(BigInt(t), 8).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a U128 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write128(t) {
    return Ye(BigInt(t), 16).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a U256 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write256(t) {
    return Ye(BigInt(t), 32).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a ULEB value into a buffer and shift cursor position by number of bytes
   * written.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  writeULEB(t) {
    return wt(t).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a vector into a buffer by first writing the vector length and then calling
   * a callback on each passed value.
   *
   * @param {Array<Any>} vector Array of elements to write.
   * @param {WriteVecCb} cb Callback to call on each element of the vector.
   * @returns {this}
   */
  writeVec(t, r) {
    return this.writeULEB(t.length), Array.from(t).forEach((n, i) => r(this, n, i, t.length)), this;
  }
  /**
   * Adds support for iterations over the object.
   * @returns {Uint8Array}
   */
  *[Symbol.iterator]() {
    for (let t = 0; t < this.bytePosition; t++)
      yield this.dataView.getUint8(t);
    return this.toBytes();
  }
  /**
   * Get underlying buffer taking only value bytes (in case initial buffer size was bigger).
   * @returns {Uint8Array} Resulting bcs.
   */
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  /**
   * Represent data as 'hex' or 'base64'
   * @param encoding Encoding to use: 'base64' or 'hex'
   */
  toString(t) {
    return Ln(this.toBytes(), t);
  }
}
function Ye(e, t) {
  let r = new Uint8Array(t), n = 0;
  for (; e > 0; )
    r[n] = Number(e % BigInt(256)), e = e / BigInt(256), n += 1;
  return r;
}
var br = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, H = (e, t, r) => (br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ze = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Ve = (e, t, r, n) => (br(e, t, "write to private field"), t.set(e, r), r), fe, me, Me, ie;
const Sr = class {
  constructor(e) {
    ze(this, fe, void 0), ze(this, me, void 0), this.name = e.name, this.read = e.read, this.serializedSize = e.serializedSize ?? (() => null), Ve(this, fe, e.write), Ve(this, me, e.serialize ?? ((t, r) => {
      const n = new wr({ size: this.serializedSize(t) ?? void 0, ...r });
      return H(this, fe).call(this, t, n), n.toBytes();
    })), this.validate = e.validate ?? (() => {
    });
  }
  write(e, t) {
    this.validate(e), H(this, fe).call(this, e, t);
  }
  serialize(e, t) {
    return this.validate(e), new Kn(this, H(this, me).call(this, e, t));
  }
  parse(e) {
    const t = new yr(e);
    return this.read(t);
  }
  transform({
    name: e,
    input: t,
    output: r
  }) {
    return new Sr({
      name: e ?? this.name,
      read: (n) => r(this.read(n)),
      write: (n, i) => H(this, fe).call(this, t(n), i),
      serializedSize: (n) => this.serializedSize(t(n)),
      serialize: (n, i) => H(this, me).call(this, t(n), i),
      validate: (n) => this.validate(t(n))
    });
  }
};
let X = Sr;
fe = /* @__PURE__ */ new WeakMap();
me = /* @__PURE__ */ new WeakMap();
const Tr = Symbol.for("@mysten/serialized-bcs");
function bt(e) {
  return !!e && typeof e == "object" && e[Tr] === !0;
}
class Kn {
  constructor(t, r) {
    ze(this, Me, void 0), ze(this, ie, void 0), Ve(this, Me, t), Ve(this, ie, r);
  }
  // Used to brand SerializedBcs so that they can be identified, even between multiple copies
  // of the @mysten/bcs package are installed
  get [Tr]() {
    return !0;
  }
  toBytes() {
    return H(this, ie);
  }
  toHex() {
    return xe(H(this, ie));
  }
  toBase64() {
    return Oe(H(this, ie));
  }
  toBase58() {
    return Ie(H(this, ie));
  }
  parse() {
    return H(this, Me).parse(H(this, ie));
  }
}
Me = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
function Fe({
  size: e,
  ...t
}) {
  return new X({
    ...t,
    serializedSize: () => e
  });
}
function Qe({
  readMethod: e,
  writeMethod: t,
  ...r
}) {
  return Fe({
    ...r,
    read: (n) => n[e](),
    write: (n, i) => i[t](n),
    validate: (n) => {
      var i;
      if (n < 0 || n > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${n}. Expected value in range 0-${r.maxValue}`
        );
      (i = r.validate) == null || i.call(r, n);
    }
  });
}
function et({
  readMethod: e,
  writeMethod: t,
  ...r
}) {
  return Fe({
    ...r,
    read: (n) => n[e](),
    write: (n, i) => i[t](BigInt(n)),
    validate: (n) => {
      var s;
      const i = BigInt(n);
      if (i < 0 || i > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${i}. Expected value in range 0-${r.maxValue}`
        );
      (s = r.validate) == null || s.call(r, i);
    }
  });
}
function Jn({
  serialize: e,
  ...t
}) {
  const r = new X({
    ...t,
    serialize: e,
    write: (n, i) => {
      for (const s of r.serialize(n).toBytes())
        i.write8(s);
    }
  });
  return r;
}
function Hn({
  toBytes: e,
  fromBytes: t,
  ...r
}) {
  return new X({
    ...r,
    read: (n) => {
      const i = n.readULEB(), s = n.readBytes(i);
      return t(s);
    },
    write: (n, i) => {
      const s = e(n);
      i.writeULEB(s.length);
      for (let o = 0; o < s.length; o++)
        i.write8(s[o]);
    },
    serialize: (n) => {
      const i = e(n), s = wt(i.length), o = new Uint8Array(s.length + i.length);
      return o.set(s, 0), o.set(i, s.length), o;
    },
    validate: (n) => {
      var i;
      if (typeof n != "string")
        throw new TypeError(`Invalid ${r.name} value: ${n}. Expected string`);
      (i = r.validate) == null || i.call(r, n);
    }
  });
}
function Xn(e) {
  let t = null;
  function r() {
    return t || (t = e()), t;
  }
  return new X({
    name: "lazy",
    read: (n) => r().read(n),
    serializedSize: (n) => r().serializedSize(n),
    write: (n, i) => r().write(n, i),
    serialize: (n, i) => r().serialize(n, i).toBytes()
  });
}
const u = {
  /**
   * Creates a BcsType that can be used to read and write an 8-bit unsigned integer.
   * @example
   * bcs.u8().serialize(255).toBytes() // Uint8Array [ 255 ]
   */
  u8(e) {
    return Qe({
      name: "u8",
      readMethod: "read8",
      writeMethod: "write8",
      size: 1,
      maxValue: 2 ** 8 - 1,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 16-bit unsigned integer.
   * @example
   * bcs.u16().serialize(65535).toBytes() // Uint8Array [ 255, 255 ]
   */
  u16(e) {
    return Qe({
      name: "u16",
      readMethod: "read16",
      writeMethod: "write16",
      size: 2,
      maxValue: 2 ** 16 - 1,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 32-bit unsigned integer.
   * @example
   * bcs.u32().serialize(4294967295).toBytes() // Uint8Array [ 255, 255, 255, 255 ]
   */
  u32(e) {
    return Qe({
      name: "u32",
      readMethod: "read32",
      writeMethod: "write32",
      size: 4,
      maxValue: 2 ** 32 - 1,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 64-bit unsigned integer.
   * @example
   * bcs.u64().serialize(1).toBytes() // Uint8Array [ 1, 0, 0, 0, 0, 0, 0, 0 ]
   */
  u64(e) {
    return et({
      name: "u64",
      readMethod: "read64",
      writeMethod: "write64",
      size: 8,
      maxValue: 2n ** 64n - 1n,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 128-bit unsigned integer.
   * @example
   * bcs.u128().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u128(e) {
    return et({
      name: "u128",
      readMethod: "read128",
      writeMethod: "write128",
      size: 16,
      maxValue: 2n ** 128n - 1n,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 256-bit unsigned integer.
   * @example
   * bcs.u256().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u256(e) {
    return et({
      name: "u256",
      readMethod: "read256",
      writeMethod: "write256",
      size: 32,
      maxValue: 2n ** 256n - 1n,
      ...e
    });
  },
  /**
   * Creates a BcsType that can be used to read and write boolean values.
   * @example
   * bcs.bool().serialize(true).toBytes() // Uint8Array [ 1 ]
   */
  bool(e) {
    return Fe({
      name: "bool",
      size: 1,
      read: (t) => t.read8() === 1,
      write: (t, r) => r.write8(t ? 1 : 0),
      ...e,
      validate: (t) => {
        var r;
        if ((r = e == null ? void 0 : e.validate) == null || r.call(e, t), typeof t != "boolean")
          throw new TypeError(`Expected boolean, found ${typeof t}`);
      }
    });
  },
  /**
   * Creates a BcsType that can be used to read and write unsigned LEB encoded integers
   * @example
   *
   */
  uleb128(e) {
    return Jn({
      name: "uleb128",
      read: (t) => t.readULEB(),
      serialize: (t) => Uint8Array.from(wt(t)),
      ...e
    });
  },
  /**
   * Creates a BcsType representing a fixed length byte array
   * @param size The number of bytes this types represents
   * @example
   * bcs.bytes(3).serialize(new Uint8Array([1, 2, 3])).toBytes() // Uint8Array [1, 2, 3]
   */
  bytes(e, t) {
    return Fe({
      name: `bytes[${e}]`,
      size: e,
      read: (r) => r.readBytes(e),
      write: (r, n) => {
        for (let i = 0; i < e; i++)
          n.write8(r[i] ?? 0);
      },
      ...t,
      validate: (r) => {
        var n;
        if ((n = t == null ? void 0 : t.validate) == null || n.call(t, r), !("length" in r))
          throw new TypeError(`Expected array, found ${typeof r}`);
        if (r.length !== e)
          throw new TypeError(`Expected array of length ${e}, found ${r.length}`);
      }
    });
  },
  /**
   * Creates a BcsType that can ser/de string values.  Strings will be UTF-8 encoded
   * @example
   * bcs.string().serialize('a').toBytes() // Uint8Array [ 1, 97 ]
   */
  string(e) {
    return Hn({
      name: "string",
      toBytes: (t) => new TextEncoder().encode(t),
      fromBytes: (t) => new TextDecoder().decode(t),
      ...e
    });
  },
  /**
   * Creates a BcsType that represents a fixed length array of a given type
   * @param size The number of elements in the array
   * @param type The BcsType of each element in the array
   * @example
   * bcs.fixedArray(3, bcs.u8()).serialize([1, 2, 3]).toBytes() // Uint8Array [ 1, 2, 3 ]
   */
  fixedArray(e, t, r) {
    return new X({
      name: `${t.name}[${e}]`,
      read: (n) => {
        const i = new Array(e);
        for (let s = 0; s < e; s++)
          i[s] = t.read(n);
        return i;
      },
      write: (n, i) => {
        for (const s of n)
          t.write(s, i);
      },
      ...r,
      validate: (n) => {
        var i;
        if ((i = r == null ? void 0 : r.validate) == null || i.call(r, n), !("length" in n))
          throw new TypeError(`Expected array, found ${typeof n}`);
        if (n.length !== e)
          throw new TypeError(`Expected array of length ${e}, found ${n.length}`);
      }
    });
  },
  /**
   * Creates a BcsType representing an optional value
   * @param type The BcsType of the optional value
   * @example
   * bcs.option(bcs.u8()).serialize(null).toBytes() // Uint8Array [ 0 ]
   * bcs.option(bcs.u8()).serialize(1).toBytes() // Uint8Array [ 1, 1 ]
   */
  option(e) {
    return u.enum(`Option<${e.name}>`, {
      None: null,
      Some: e
    }).transform({
      input: (t) => t == null ? { None: !0 } : { Some: t },
      output: (t) => "Some" in t ? t.Some : null
    });
  },
  /**
   * Creates a BcsType representing a variable length vector of a given type
   * @param type The BcsType of each element in the vector
   *
   * @example
   * bcs.vector(bcs.u8()).toBytes([1, 2, 3]) // Uint8Array [ 3, 1, 2, 3 ]
   */
  vector(e, t) {
    return new X({
      name: `vector<${e.name}>`,
      read: (r) => {
        const n = r.readULEB(), i = new Array(n);
        for (let s = 0; s < n; s++)
          i[s] = e.read(r);
        return i;
      },
      write: (r, n) => {
        n.writeULEB(r.length);
        for (const i of r)
          e.write(i, n);
      },
      ...t,
      validate: (r) => {
        var n;
        if ((n = t == null ? void 0 : t.validate) == null || n.call(t, r), !("length" in r))
          throw new TypeError(`Expected array, found ${typeof r}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a tuple of a given set of types
   * @param types The BcsTypes for each element in the tuple
   *
   * @example
   * const tuple = bcs.tuple([bcs.u8(), bcs.string(), bcs.bool()])
   * tuple.serialize([1, 'a', true]).toBytes() // Uint8Array [ 1, 1, 97, 1 ]
   */
  tuple(e, t) {
    return new X({
      name: `(${e.map((r) => r.name).join(", ")})`,
      serializedSize: (r) => {
        let n = 0;
        for (let i = 0; i < e.length; i++) {
          const s = e[i].serializedSize(r[i]);
          if (s == null)
            return null;
          n += s;
        }
        return n;
      },
      read: (r) => {
        const n = [];
        for (const i of e)
          n.push(i.read(r));
        return n;
      },
      write: (r, n) => {
        for (let i = 0; i < e.length; i++)
          e[i].write(r[i], n);
      },
      ...t,
      validate: (r) => {
        var n;
        if ((n = t == null ? void 0 : t.validate) == null || n.call(t, r), !Array.isArray(r))
          throw new TypeError(`Expected array, found ${typeof r}`);
        if (r.length !== e.length)
          throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a struct of a given set of fields
   * @param name The name of the struct
   * @param fields The fields of the struct. The order of the fields affects how data is serialized and deserialized
   *
   * @example
   * const struct = bcs.struct('MyStruct', {
   *  a: bcs.u8(),
   *  b: bcs.string(),
   * })
   * struct.serialize({ a: 1, b: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
   */
  struct(e, t, r) {
    const n = Object.entries(t);
    return new X({
      name: e,
      serializedSize: (i) => {
        let s = 0;
        for (const [o, a] of n) {
          const c = a.serializedSize(i[o]);
          if (c == null)
            return null;
          s += c;
        }
        return s;
      },
      read: (i) => {
        const s = {};
        for (const [o, a] of n)
          s[o] = a.read(i);
        return s;
      },
      write: (i, s) => {
        for (const [o, a] of n)
          a.write(i[o], s);
      },
      ...r,
      validate: (i) => {
        var s;
        if ((s = r == null ? void 0 : r.validate) == null || s.call(r, i), typeof i != "object" || i == null)
          throw new TypeError(`Expected object, found ${typeof i}`);
      }
    });
  },
  /**
   * Creates a BcsType representing an enum of a given set of options
   * @param name The name of the enum
   * @param values The values of the enum. The order of the values affects how data is serialized and deserialized.
   * null can be used to represent a variant with no data.
   *
   * @example
   * const enum = bcs.enum('MyEnum', {
   *   A: bcs.u8(),
   *   B: bcs.string(),
   *   C: null,
   * })
   * enum.serialize({ A: 1 }).toBytes() // Uint8Array [ 0, 1 ]
   * enum.serialize({ B: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
   * enum.serialize({ C: true }).toBytes() // Uint8Array [ 2 ]
   */
  enum(e, t, r) {
    const n = Object.entries(t);
    return new X({
      name: e,
      read: (i) => {
        const s = i.readULEB(), [o, a] = n[s];
        return {
          [o]: (a == null ? void 0 : a.read(i)) ?? !0
        };
      },
      write: (i, s) => {
        const [o, a] = Object.entries(i)[0];
        for (let c = 0; c < n.length; c++) {
          const [d, l] = n[c];
          if (d === o) {
            s.writeULEB(c), l == null || l.write(a, s);
            return;
          }
        }
      },
      ...r,
      validate: (i) => {
        var a;
        if ((a = r == null ? void 0 : r.validate) == null || a.call(r, i), typeof i != "object" || i == null)
          throw new TypeError(`Expected object, found ${typeof i}`);
        const s = Object.keys(i);
        if (s.length !== 1)
          throw new TypeError(`Expected object with one key, found ${s.length}`);
        const [o] = s;
        if (!Object.hasOwn(t, o))
          throw new TypeError(`Invalid enum variant ${o}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a map of a given key and value type
   * @param keyType The BcsType of the key
   * @param valueType The BcsType of the value
   * @example
   * const map = bcs.map(bcs.u8(), bcs.string())
   * map.serialize(new Map([[2, 'a']])).toBytes() // Uint8Array [ 1, 2, 1, 97 ]
   */
  map(e, t) {
    return u.vector(u.tuple([e, t])).transform({
      name: `Map<${e.name}, ${t.name}>`,
      input: (r) => [...r.entries()],
      output: (r) => {
        const n = /* @__PURE__ */ new Map();
        for (const [i, s] of r)
          n.set(i, s);
        return n;
      }
    });
  },
  /**
   * @deprecated
   *
   * Generics should be implemented as generic typescript functions instead:
   *
   * ```ts
   * function VecMap<K, V>, (K: BcsType<K>, V: BcsType<V>) {
   *   return bcs.struct('VecMap<K, V>', {
   *     keys: bcs.vector(K),
   *     values: bcs.vector(V),
   *   })
   * }
   * ```
   */
  generic(e, t) {
    return (...r) => t(...r).transform({
      name: `${t.name}<${r.map((n) => n.name).join(", ")}>`,
      input: (n) => n,
      output: (n) => n
    });
  },
  /**
   * Creates a BcsType that wraps another BcsType which is lazily evaluated. This is useful for creating recursive types.
   * @param cb A callback that returns the BcsType
   */
  lazy(e) {
    return Xn(e);
  }
}, qn = 32, we = class {
  /**
   * Construct a BCS instance with a prepared schema.
   *
   * @param schema A prepared schema with type definitions
   * @param withPrimitives Whether to register primitive types by default
   */
  constructor(e) {
    if (this.types = /* @__PURE__ */ new Map(), this.counter = 0, e instanceof we) {
      this.schema = e.schema, this.types = new Map(e.types);
      return;
    }
    if (this.schema = e, this.registerAddressType(we.ADDRESS, e.addressLength, e.addressEncoding), this.registerVectorType(e.vectorType), e.types && e.types.structs)
      for (let t of Object.keys(e.types.structs))
        this.registerStructType(t, e.types.structs[t]);
    if (e.types && e.types.enums)
      for (let t of Object.keys(e.types.enums))
        this.registerEnumType(t, e.types.enums[t]);
    if (e.types && e.types.aliases)
      for (let t of Object.keys(e.types.aliases))
        this.registerAlias(t, e.types.aliases[t]);
    e.withPrimitives !== !1 && Zn(this);
  }
  /**
   * Name of the key to use for temporary struct definitions.
   * Returns a temp key + index (for a case when multiple temp
   * structs are processed).
   */
  tempKey() {
    return `bcs-struct-${++this.counter}`;
  }
  /**
   * Serialize data into bcs.
   *
   * @example
   * bcs.registerVectorType('vector<u8>', 'u8');
   *
   * let serialized = BCS
   *   .set('vector<u8>', [1,2,3,4,5,6])
   *   .toBytes();
   *
   * console.assert(toHex(serialized) === '06010203040506');
   *
   * @param type Name of the type to serialize (must be registered) or a struct type.
   * @param data Data to serialize.
   * @param size Serialization buffer size. Default 1024 = 1KB.
   * @return A BCS reader instance. Usually you'd want to call `.toBytes()`
   */
  ser(e, t, r) {
    if (typeof e == "string" || Array.isArray(e)) {
      const { name: n, params: i } = this.parseTypeName(e);
      return this.getTypeInterface(n).encode(this, t, r, i);
    }
    if (typeof e == "object") {
      const n = this.tempKey();
      return new we(this).registerStructType(n, e).ser(n, t, r);
    }
    throw new Error(`Incorrect type passed into the '.ser()' function. 
${JSON.stringify(e)}`);
  }
  /**
   * Deserialize BCS into a JS type.
   *
   * @example
   * let num = bcs.ser('u64', '4294967295').toString('hex');
   * let deNum = bcs.de('u64', num, 'hex');
   * console.assert(deNum.toString(10) === '4294967295');
   *
   * @param type Name of the type to deserialize (must be registered) or a struct type definition.
   * @param data Data to deserialize.
   * @param encoding Optional - encoding to use if data is of type String
   * @return Deserialized data.
   */
  de(e, t, r) {
    if (typeof t == "string")
      if (r)
        t = Wn(t, r);
      else
        throw new Error("To pass a string to `bcs.de`, specify encoding");
    if (typeof e == "string" || Array.isArray(e)) {
      const { name: n, params: i } = this.parseTypeName(e);
      return this.getTypeInterface(n).decode(this, t, i);
    }
    if (typeof e == "object") {
      const n = new we(this), i = this.tempKey();
      return n.registerStructType(i, e).de(i, t, r);
    }
    throw new Error(`Incorrect type passed into the '.de()' function. 
${JSON.stringify(e)}`);
  }
  /**
   * Check whether a `TypeInterface` has been loaded for a `type`.
   * @param type Name of the type to check.
   * @returns
   */
  hasType(e) {
    return this.types.has(e);
  }
  /**
   * Create an alias for a type.
   * WARNING: this can potentially lead to recursion
   * @param name Alias to use
   * @param forType Type to reference
   * @returns
   *
   * @example
   * ```
   * let bcs = new BCS(getSuiMoveConfig());
   * bcs.registerAlias('ObjectDigest', BCS.BASE58);
   * let b58_digest = bcs.de('ObjectDigest', '<digest_bytes>', 'base64');
   * ```
   */
  registerAlias(e, t) {
    return this.types.set(e, t), this;
  }
  /**
   * Method to register new types for BCS internal representation.
   * For each registered type 2 callbacks must be specified and one is optional:
   *
   * - encodeCb(writer, data) - write a way to serialize data with BcsWriter;
   * - decodeCb(reader) - write a way to deserialize data with BcsReader;
   * - validateCb(data) - validate data - either return bool or throw an error
   *
   * @example
   * // our type would be a string that consists only of numbers
   * bcs.registerType('number_string',
   *    (writer, data) => writer.writeVec(data, (w, el) => w.write8(el)),
   *    (reader) => reader.readVec((r) => r.read8()).join(''), // read each value as u8
   *    (value) => /[0-9]+/.test(value) // test that it has at least one digit
   * );
   * console.log(Array.from(bcs.ser('number_string', '12345').toBytes()) == [5,1,2,3,4,5]);
   *
   * @param name
   * @param encodeCb Callback to encode a value.
   * @param decodeCb Callback to decode a value.
   * @param validateCb Optional validator Callback to check type before serialization.
   */
  registerType(e, t, r, n = () => !0) {
    const { name: i, params: s } = this.parseTypeName(e);
    return this.types.set(i, {
      encode(o, a, c, d) {
        const l = s.reduce((g, m, y) => Object.assign(g, { [m]: d[y] }), {});
        return this._encodeRaw.call(o, new wr(c), a, d, l);
      },
      decode(o, a, c) {
        const d = s.reduce((l, g, m) => Object.assign(l, { [g]: c[m] }), {});
        return this._decodeRaw.call(o, new yr(a), c, d);
      },
      // these methods should always be used with caution as they require pre-defined
      // reader and writer and mainly exist to allow multi-field (de)serialization;
      _encodeRaw(o, a, c, d) {
        if (n(a))
          return t.call(this, o, a, c, d);
        throw new Error(`Validation failed for type ${i}, data: ${a}`);
      },
      _decodeRaw(o, a, c) {
        return r.call(this, o, a, c);
      }
    }), this;
  }
  /**
  	 * Method to register BcsType instances to the registry
  	 * Types are registered with a callback that provides BcsType instances for each generic
  	 * passed to the type.
  	 *
  	 * - createType(...generics) - Return a BcsType instance
  	 *
  	 * @example
  	 * // our type would be a string that consists only of numbers
  	 * bcs.registerType('Box<T>', (T) => {
  	 * 		return bcs.struct({
  	 * 			value: T
  	 * 		});
  	 * });
  
  	 * console.log(Array.from(bcs.ser('Box<string>', '12345').toBytes()) == [5,1,2,3,4,5]);
  	 *
  	 * @param name
  	 * @param createType a Callback to create the BcsType with any passed in generics
  	 */
  registerBcsType(e, t) {
    return this.registerType(
      e,
      (r, n, i) => {
        const s = i.map(
          (o) => new X({
            name: String(o),
            write: (a, c) => {
              const { name: d, params: l } = this.parseTypeName(o), g = this.getTypeInterface(d), m = l.reduce((y, w, b) => Object.assign(y, { [w]: i[b] }), {});
              return g._encodeRaw.call(this, c, a, l, m);
            },
            read: () => {
              throw new Error("Not implemented");
            }
          })
        );
        return t(...s).write(n, r), r;
      },
      (r, n) => {
        const i = n.map(
          (s) => new X({
            name: String(s),
            write: (o, a) => {
              throw new Error("Not implemented");
            },
            read: (o) => {
              const { name: a, params: c } = this.parseTypeName(s), d = this.getTypeInterface(a), l = c.reduce((g, m, y) => Object.assign(g, { [m]: n[y] }), {});
              return d._decodeRaw.call(this, o, c, l);
            }
          })
        );
        return t(...i).read(r);
      }
    ), this;
  }
  /**
   * Register an address type which is a sequence of U8s of specified length.
   * @example
   * bcs.registerAddressType('address', SUI_ADDRESS_LENGTH);
   * let addr = bcs.de('address', 'c3aca510c785c7094ac99aeaa1e69d493122444df50bb8a99dfa790c654a79af');
   *
   * @param name Name of the address type.
   * @param length Byte length of the address.
   * @param encoding Encoding to use for the address type
   * @returns
   */
  registerAddressType(e, t, r = "hex") {
    switch (r) {
      case "base64":
        return this.registerType(
          e,
          function(i, s) {
            return ae(s).reduce((o, a) => o.write8(a), i);
          },
          function(i) {
            return Oe(i.readBytes(t));
          }
        );
      case "hex":
        return this.registerType(
          e,
          function(i, s) {
            return Ke(s).reduce((o, a) => o.write8(a), i);
          },
          function(i) {
            return xe(i.readBytes(t));
          }
        );
      default:
        throw new Error("Unsupported encoding! Use either hex or base64");
    }
  }
  /**
   * Register custom vector type inside the bcs.
   *
   * @example
   * bcs.registerVectorType('vector<T>'); // generic registration
   * let array = bcs.de('vector<u8>', '06010203040506', 'hex'); // [1,2,3,4,5,6];
   * let again = bcs.ser('vector<u8>', [1,2,3,4,5,6]).toString('hex');
   *
   * @param name Name of the type to register
   * @param elementType Optional name of the inner type of the vector
   * @return Returns self for chaining.
   */
  registerVectorType(e) {
    let { name: t, params: r } = this.parseTypeName(e);
    if (r.length > 1)
      throw new Error("Vector can have only one type parameter; got " + t);
    return this.registerType(
      e,
      function(i, s, o, a) {
        return i.writeVec(s, (c, d) => {
          let l = o[0];
          if (!l)
            throw new Error(`Incorrect number of type parameters passed a to vector '${e}'`);
          let { name: g, params: m } = this.parseTypeName(l);
          if (this.hasType(g))
            return this.getTypeInterface(g)._encodeRaw.call(this, c, d, m, a);
          if (!(g in a))
            throw new Error(
              `Unable to find a matching type definition for ${g} in vector; make sure you passed a generic`
            );
          let { name: y, params: w } = this.parseTypeName(a[g]);
          return this.getTypeInterface(y)._encodeRaw.call(
            this,
            c,
            d,
            w,
            a
          );
        });
      },
      function(i, s, o) {
        return i.readVec((a) => {
          let c = s[0];
          if (!c)
            throw new Error(`Incorrect number of type parameters passed to a vector '${e}'`);
          let { name: d, params: l } = this.parseTypeName(c);
          if (this.hasType(d))
            return this.getTypeInterface(d)._decodeRaw.call(this, a, l, o);
          if (!(d in o))
            throw new Error(
              `Unable to find a matching type definition for ${d} in vector; make sure you passed a generic`
            );
          let { name: g, params: m } = this.parseTypeName(o[d]);
          return this.getTypeInterface(g)._decodeRaw.call(
            this,
            a,
            m,
            o
          );
        });
      }
    );
  }
  /**
   * Safe method to register a custom Move struct. The first argument is a name of the
   * struct which is only used on the FrontEnd and has no affect on serialization results,
   * and the second is a struct description passed as an Object.
   *
   * The description object MUST have the same order on all of the platforms (ie in Move
   * or in Rust).
   *
   * @example
   * // Move / Rust struct
   * // struct Coin {
   * //   value: u64,
   * //   owner: vector<u8>, // name // Vec<u8> in Rust
   * //   is_locked: bool,
   * // }
   *
   * bcs.registerStructType('Coin', {
   *   value: bcs.U64,
   *   owner: bcs.STRING,
   *   is_locked: bcs.BOOL
   * });
   *
   * // Created in Rust with diem/bcs
   * // let rust_bcs_str = '80d1b105600000000e4269672057616c6c65742047757900';
   * let rust_bcs_str = [ // using an Array here as BCS works with Uint8Array
   *  128, 209, 177,   5,  96,  0,  0,
   *    0,  14,  66, 105, 103, 32, 87,
   *   97, 108, 108, 101, 116, 32, 71,
   *  117, 121,   0
   * ];
   *
   * // Let's encode the value as well
   * let test_set = bcs.ser('Coin', {
   *   owner: 'Big Wallet Guy',
   *   value: '412412400000',
   *   is_locked: false,
   * });
   *
   * console.assert(Array.from(test_set.toBytes()) === rust_bcs_str, 'Whoopsie, result mismatch');
   *
   * @param name Name of the type to register.
   * @param fields Fields of the struct. Must be in the correct order.
   * @return Returns BCS for chaining.
   */
  registerStructType(e, t) {
    for (let o in t) {
      let a = this.tempKey(), c = t[o];
      !Array.isArray(c) && typeof c != "string" && (t[o] = a, this.registerStructType(a, c));
    }
    let r = Object.freeze(t), n = Object.keys(r), { name: i, params: s } = this.parseTypeName(e);
    return this.registerType(
      e,
      function(a, c, d, l) {
        if (!c || c.constructor !== Object)
          throw new Error(`Expected ${i} to be an Object, got: ${c}`);
        if (d.length !== s.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${s.length}, got: ${d.length}`
          );
        for (let g of n) {
          if (!(g in c))
            throw new Error(`Struct ${i} requires field ${g}:${r[g]}`);
          const { name: m, params: y } = this.parseTypeName(
            r[g]
          );
          if (!s.includes(m))
            this.getTypeInterface(m)._encodeRaw.call(
              this,
              a,
              c[g],
              y,
              l
            );
          else {
            const w = s.indexOf(m);
            let { name: b, params: f } = this.parseTypeName(d[w]);
            if (this.hasType(b)) {
              this.getTypeInterface(b)._encodeRaw.call(
                this,
                a,
                c[g],
                f,
                l
              );
              continue;
            }
            if (!(b in l))
              throw new Error(
                `Unable to find a matching type definition for ${b} in ${i}; make sure you passed a generic`
              );
            let { name: O, params: _ } = this.parseTypeName(l[b]);
            this.getTypeInterface(O)._encodeRaw.call(
              this,
              a,
              c[g],
              _,
              l
            );
          }
        }
        return a;
      },
      function(a, c, d) {
        if (c.length !== s.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${s.length}, got: ${c.length}`
          );
        let l = {};
        for (let g of n) {
          const { name: m, params: y } = this.parseTypeName(
            r[g]
          );
          if (!s.includes(m))
            l[g] = this.getTypeInterface(m)._decodeRaw.call(
              this,
              a,
              y,
              d
            );
          else {
            const w = s.indexOf(m);
            let { name: b, params: f } = this.parseTypeName(c[w]);
            if (this.hasType(b)) {
              l[g] = this.getTypeInterface(b)._decodeRaw.call(
                this,
                a,
                f,
                d
              );
              continue;
            }
            if (!(b in d))
              throw new Error(
                `Unable to find a matching type definition for ${b} in ${i}; make sure you passed a generic`
              );
            let { name: O, params: _ } = this.parseTypeName(d[b]);
            l[g] = this.getTypeInterface(O)._decodeRaw.call(
              this,
              a,
              _,
              d
            );
          }
        }
        return l;
      }
    );
  }
  /**
   * Safe method to register custom enum type where each invariant holds the value of another type.
   * @example
   * bcs.registerStructType('Coin', { value: 'u64' });
   * bcs.registerEnumType('MyEnum', {
   *  single: 'Coin',
   *  multi: 'vector<Coin>',
   *  empty: null
   * });
   *
   * console.log(
   *  bcs.de('MyEnum', 'AICWmAAAAAAA', 'base64'), // { single: { value: 10000000 } }
   *  bcs.de('MyEnum', 'AQIBAAAAAAAAAAIAAAAAAAAA', 'base64')  // { multi: [ { value: 1 }, { value: 2 } ] }
   * )
   *
   * // and serialization
   * bcs.ser('MyEnum', { single: { value: 10000000 } }).toBytes();
   * bcs.ser('MyEnum', { multi: [ { value: 1 }, { value: 2 } ] });
   *
   * @param name
   * @param variants
   */
  registerEnumType(e, t) {
    for (let o in t) {
      let a = this.tempKey(), c = t[o];
      c !== null && !Array.isArray(c) && typeof c != "string" && (t[o] = a, this.registerStructType(a, c));
    }
    let r = Object.freeze(t), n = Object.keys(r), { name: i, params: s } = this.parseTypeName(e);
    return this.registerType(
      e,
      function(a, c, d, l) {
        if (!c)
          throw new Error(`Unable to write enum "${i}", missing data.
Received: "${c}"`);
        if (typeof c != "object")
          throw new Error(
            `Incorrect data passed into enum "${i}", expected object with properties: "${n.join(
              " | "
            )}".
Received: "${JSON.stringify(c)}"`
          );
        let g = Object.keys(c)[0];
        if (g === void 0)
          throw new Error(`Empty object passed as invariant of the enum "${i}"`);
        let m = n.indexOf(g);
        if (m === -1)
          throw new Error(
            `Unknown invariant of the enum "${i}", allowed values: "${n.join(
              " | "
            )}"; received "${g}"`
          );
        let y = n[m], w = r[y];
        if (a.write8(m), w === null)
          return a;
        let b = s.indexOf(w), f = b === -1 ? w : d[b];
        {
          let { name: O, params: _ } = this.parseTypeName(f);
          return this.getTypeInterface(O)._encodeRaw.call(
            this,
            a,
            c[g],
            _,
            l
          );
        }
      },
      function(a, c, d) {
        let l = a.readULEB(), g = n[l], m = r[g];
        if (l === -1)
          throw new Error(
            `Decoding type mismatch, expected enum "${i}" invariant index, received "${l}"`
          );
        if (m === null)
          return { [g]: !0 };
        let y = s.indexOf(m), w = y === -1 ? m : c[y];
        {
          let { name: b, params: f } = this.parseTypeName(w);
          return {
            [g]: this.getTypeInterface(b)._decodeRaw.call(this, a, f, d)
          };
        }
      }
    );
  }
  /**
   * Get a set of encoders/decoders for specific type.
   * Mainly used to define custom type de/serialization logic.
   *
   * @param type
   * @returns {TypeInterface}
   */
  getTypeInterface(e) {
    let t = this.types.get(e);
    if (typeof t == "string") {
      let r = [];
      for (; typeof t == "string"; ) {
        if (r.includes(t))
          throw new Error(`Recursive definition found: ${r.join(" -> ")} -> ${t}`);
        r.push(t), t = this.types.get(t);
      }
    }
    if (t === void 0)
      throw new Error(`Type ${e} is not registered`);
    return t;
  }
  /**
   * Parse a type name and get the type's generics.
   * @example
   * let { typeName, typeParams } = parseTypeName('Option<Coin<SUI>>');
   * // typeName: Option
   * // typeParams: [ 'Coin<SUI>' ]
   *
   * @param name Name of the type to process
   * @returns Object with typeName and typeParams listed as Array
   */
  parseTypeName(e) {
    if (Array.isArray(e)) {
      let [a, ...c] = e;
      return { name: a, params: c };
    }
    if (typeof e != "string")
      throw new Error(`Illegal type passed as a name of the type: ${e}`);
    let [t, r] = this.schema.genericSeparators || ["<", ">"], n = e.indexOf(t), i = Array.from(e).reverse().indexOf(r);
    if (n === -1 && i === -1)
      return { name: e, params: [] };
    if (n === -1 || i === -1)
      throw new Error(`Unclosed generic in name '${e}'`);
    let s = e.slice(0, n), o = mr(
      e.slice(n + 1, e.length - i - 1),
      this.schema.genericSeparators
    );
    return { name: s, params: o };
  }
};
let A = we;
A.U8 = "u8";
A.U16 = "u16";
A.U32 = "u32";
A.U64 = "u64";
A.U128 = "u128";
A.U256 = "u256";
A.BOOL = "bool";
A.VECTOR = "vector";
A.ADDRESS = "address";
A.STRING = "string";
A.HEX = "hex-string";
A.BASE58 = "base58-string";
A.BASE64 = "base64-string";
function Zn(e) {
  e.registerType(
    A.U8,
    function(t, r) {
      return t.write8(r);
    },
    function(t) {
      return t.read8();
    },
    (t) => t < 256
  ), e.registerType(
    A.U16,
    function(t, r) {
      return t.write16(r);
    },
    function(t) {
      return t.read16();
    },
    (t) => t < 65536
  ), e.registerType(
    A.U32,
    function(t, r) {
      return t.write32(r);
    },
    function(t) {
      return t.read32();
    },
    (t) => t <= 4294967296n
  ), e.registerType(
    A.U64,
    function(t, r) {
      return t.write64(r);
    },
    function(t) {
      return t.read64();
    }
  ), e.registerType(
    A.U128,
    function(t, r) {
      return t.write128(r);
    },
    function(t) {
      return t.read128();
    }
  ), e.registerType(
    A.U256,
    function(t, r) {
      return t.write256(r);
    },
    function(t) {
      return t.read256();
    }
  ), e.registerType(
    A.BOOL,
    function(t, r) {
      return t.write8(r);
    },
    function(t) {
      return t.read8().toString(10) === "1";
    }
  ), e.registerType(
    A.STRING,
    function(t, r) {
      return t.writeVec(Array.from(r), (n, i) => n.write8(i.charCodeAt(0)));
    },
    function(t) {
      return t.readVec((r) => r.read8()).map((r) => String.fromCharCode(Number(r))).join("");
    },
    (t) => !0
  ), e.registerType(
    A.HEX,
    function(t, r) {
      return t.writeVec(Array.from(Ke(r)), (n, i) => n.write8(i));
    },
    function(t) {
      let r = t.readVec((n) => n.read8());
      return xe(new Uint8Array(r));
    }
  ), e.registerType(
    A.BASE58,
    function(t, r) {
      return t.writeVec(Array.from(mt(r)), (n, i) => n.write8(i));
    },
    function(t) {
      let r = t.readVec((n) => n.read8());
      return Ie(new Uint8Array(r));
    }
  ), e.registerType(
    A.BASE64,
    function(t, r) {
      return t.writeVec(Array.from(ae(r)), (n, i) => n.write8(i));
    },
    function(t) {
      let r = t.readVec((n) => n.read8());
      return Oe(new Uint8Array(r));
    }
  );
}
function Yn() {
  return {
    genericSeparators: ["<", ">"],
    vectorType: "vector",
    addressLength: qn,
    addressEncoding: "hex"
  };
}
const St = 32;
function Qn(e) {
  return ei(e) && ti(e) === St;
}
function P(e, t = !1) {
  let r = e.toLowerCase();
  return !t && r.startsWith("0x") && (r = r.slice(2)), `0x${r.padStart(St * 2, "0")}`;
}
function ge(e, t = !1) {
  return P(e, t);
}
function ei(e) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(e) && e.length % 2 === 0;
}
function ti(e) {
  return /^(0x|0X)/.test(e) ? (e.length - 2) / 2 : e.length / 2;
}
BigInt(1e9);
const Tt = "0x1", vr = "0x2", ye = ge("0x6"), Re = `${vr}::sui::SUI`;
ge("0x5");
const ri = "object", ni = "ID", ii = "ascii", si = "String", ai = "string", oi = "String", ci = "option", ui = "Option", di = {
  address: vr,
  module: ri,
  name: ni
}, li = {
  address: Tt,
  module: ii,
  name: si
}, fi = {
  address: Tt,
  module: ai,
  name: oi
}, hi = {
  address: Tt,
  module: ci,
  name: ui
}, Ce = (e, t) => e.address === t.address && e.module === t.module && e.name === t.name;
function gi(e) {
  var r;
  const t = (r = yt(e)) == null ? void 0 : r.Struct;
  return (t == null ? void 0 : t.address) === "0x2" && (t == null ? void 0 : t.module) === "tx_context" && (t == null ? void 0 : t.name) === "TxContext";
}
function tt(e, t) {
  if (!(typeof t > "u") && typeof t !== e)
    throw new Error(`Expect ${t} to be ${e}, received ${typeof t}`);
}
const pi = ["Address", "Bool", "U8", "U16", "U32", "U64", "U128", "U256"];
function ct(e, t) {
  if (typeof e == "string" && pi.includes(e)) {
    if (e in ["U8", "U16", "U32", "U64", "U128", "U256"])
      tt("number", t);
    else if (e === "Bool")
      tt("boolean", t);
    else if (e === "Address" && (tt("string", t), t && !Qn(t)))
      throw new Error("Invalid Sui Address");
    return e.toLowerCase();
  } else if (typeof e == "string")
    throw new Error(`Unknown pure normalized type ${JSON.stringify(e, null, 2)}`);
  if ("Vector" in e) {
    if ((t === void 0 || typeof t == "string") && e.Vector === "U8")
      return "string";
    if (t !== void 0 && !Array.isArray(t))
      throw new Error(`Expect ${t} to be a array, received ${typeof t}`);
    const r = ct(
      e.Vector,
      // undefined when argVal is empty
      t ? t[0] : void 0
    );
    return r === void 0 ? void 0 : `vector<${r}>`;
  }
  if ("Struct" in e) {
    if (Ce(e.Struct, li))
      return "string";
    if (Ce(e.Struct, fi))
      return "utf8string";
    if (Ce(e.Struct, di))
      return "address";
    if (Ce(e.Struct, hi)) {
      const r = {
        Vector: e.Struct.typeArguments[0]
      };
      return ct(r, t);
    }
  }
}
const yi = /^vector<(.+)>$/, mi = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class te {
  static parseFromStr(t, r = !1) {
    if (t === "address")
      return { address: null };
    if (t === "bool")
      return { bool: null };
    if (t === "u8")
      return { u8: null };
    if (t === "u16")
      return { u16: null };
    if (t === "u32")
      return { u32: null };
    if (t === "u64")
      return { u64: null };
    if (t === "u128")
      return { u128: null };
    if (t === "u256")
      return { u256: null };
    if (t === "signer")
      return { signer: null };
    const n = t.match(yi);
    if (n)
      return {
        vector: te.parseFromStr(n[1], r)
      };
    const i = t.match(mi);
    if (i)
      return {
        struct: {
          address: r ? P(i[1]) : i[1],
          module: i[2],
          name: i[3],
          typeParams: i[5] === void 0 ? [] : te.parseStructTypeArgs(i[5], r)
        }
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${t}`);
  }
  static parseStructTypeArgs(t, r = !1) {
    return mr(t).map(
      (n) => te.parseFromStr(n, r)
    );
  }
  static tagToString(t) {
    if ("bool" in t)
      return "bool";
    if ("u8" in t)
      return "u8";
    if ("u16" in t)
      return "u16";
    if ("u32" in t)
      return "u32";
    if ("u64" in t)
      return "u64";
    if ("u128" in t)
      return "u128";
    if ("u256" in t)
      return "u256";
    if ("address" in t)
      return "address";
    if ("signer" in t)
      return "signer";
    if ("vector" in t)
      return `vector<${te.tagToString(t.vector)}>`;
    if ("struct" in t) {
      const r = t.struct, n = r.typeParams.map(te.tagToString).join(", ");
      return `${r.address}::${r.module}::${r.name}${n ? `<${n}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
}
const I = new A({
  ...Yn(),
  types: {
    enums: {
      "Option<T>": {
        None: null,
        Some: "T"
      }
    }
  }
});
function jr(e) {
  return u.u64({
    name: "unsafe_u64",
    ...e
  }).transform({
    input: (t) => t,
    output: (t) => Number(t)
  });
}
function wi(e) {
  return u.enum("Option", {
    None: null,
    Some: e
  });
}
function vt(e) {
  return e.transform({
    input: (t) => ({
      [t.kind]: t
    }),
    output: (t) => {
      const r = Object.keys(t)[0];
      return { kind: r, ...t[r] };
    }
  });
}
const q = u.bytes(St).transform({
  input: (e) => typeof e == "string" ? Ke(P(e)) : e,
  output: (e) => P(xe(e))
}), jt = u.vector(u.u8()).transform({
  name: "ObjectDigest",
  input: (e) => mt(e),
  output: (e) => Ie(new Uint8Array(e))
}), ve = u.struct("SuiObjectRef", {
  objectId: q,
  version: u.u64(),
  digest: jt
}), Et = u.struct("SharedObjectRef", {
  objectId: q,
  initialSharedVersion: u.u64(),
  mutable: u.bool()
}), Ge = u.enum("ObjectArg", {
  ImmOrOwned: ve,
  Shared: Et,
  Receiving: ve
}), kt = u.enum("CallArg", {
  Pure: u.vector(u.u8()),
  Object: Ge,
  ObjVec: u.vector(Ge)
}), pe = u.enum("TypeTag", {
  bool: null,
  u8: null,
  u64: null,
  u128: null,
  address: null,
  signer: null,
  vector: u.lazy(() => pe),
  struct: u.lazy(() => Ct),
  u16: null,
  u32: null,
  u256: null
}), J = vt(
  u.enum("Argument", {
    GasCoin: null,
    Input: u.struct("Input", { index: u.u16() }),
    Result: u.struct("Result", { index: u.u16() }),
    NestedResult: u.struct("NestedResult", { index: u.u16(), resultIndex: u.u16() })
  })
), It = u.struct("ProgrammableMoveCall", {
  package: q,
  module: u.string(),
  function: u.string(),
  type_arguments: u.vector(pe),
  arguments: u.vector(J)
}).transform({
  input: (e) => {
    const [t, r, n] = e.target.split("::"), i = e.typeArguments.map(
      (s) => te.parseFromStr(s, !0)
    );
    return {
      package: P(t),
      module: r,
      function: n,
      type_arguments: i,
      arguments: e.arguments
    };
  },
  output: (e) => ({
    target: [e.package, e.module, e.function].join(
      "::"
    ),
    arguments: e.arguments,
    typeArguments: e.type_arguments.map(te.tagToString)
  })
}), Ot = vt(
  u.enum("Transaction", {
    /**
     * A Move Call - any public Move function can be called via
     * this transaction. The results can be used that instant to pass
     * into the next transaction.
     */
    MoveCall: It,
    /**
     * Transfer vector of objects to a receiver.
     */
    TransferObjects: u.struct("TransferObjects", {
      objects: u.vector(J),
      address: J
    }),
    /**
     * Split `amount` from a `coin`.
     */
    SplitCoins: u.struct("SplitCoins", { coin: J, amounts: u.vector(J) }),
    /**
     * Merge Vector of Coins (`sources`) into a `destination`.
     */
    MergeCoins: u.struct("MergeCoins", { destination: J, sources: u.vector(J) }),
    /**
     * Publish a Move module.
     */
    Publish: u.struct("Publish", {
      modules: u.vector(u.vector(u.u8())),
      dependencies: u.vector(q)
    }),
    /**
     * Build a vector of objects using the input arguments.
     * It is impossible to construct a `vector<T: key>` otherwise,
     * so this call serves a utility function.
     */
    MakeMoveVec: u.struct("MakeMoveVec", {
      type: wi(pe),
      objects: u.vector(J)
    }),
    /**  */
    Upgrade: u.struct("Upgrade", {
      modules: u.vector(u.vector(u.u8())),
      dependencies: u.vector(q),
      packageId: q,
      ticket: J
    })
  })
), xt = u.struct("ProgrammableTransaction", {
  inputs: u.vector(kt),
  transactions: u.vector(Ot)
}), At = u.enum("TransactionKind", {
  ProgrammableTransaction: xt,
  ChangeEpoch: null,
  Genesis: null,
  ConsensusCommitPrologue: null
}), _t = u.enum("TransactionExpiration", {
  None: null,
  Epoch: jr()
}), Ct = u.struct("StructTag", {
  address: q,
  module: u.string(),
  name: u.string(),
  typeParams: u.vector(pe)
}), Bt = u.struct("GasData", {
  payment: u.vector(ve),
  owner: q,
  price: u.u64(),
  budget: u.u64()
}), $t = u.struct("TransactionDataV1", {
  kind: At,
  sender: q,
  gasData: Bt,
  expiration: _t
}), Ut = u.enum("TransactionData", {
  V1: $t
}), bi = u.enum("IntentScope", {
  TransactionData: null,
  TransactionEffects: null,
  CheckpointSummary: null,
  PersonalMessage: null
}), Si = u.enum("IntentVersion", {
  V0: null
}), Ti = u.enum("AppId", {
  Sui: null
}), vi = u.struct("Intent", {
  scope: bi,
  version: Si,
  appId: Ti
}), ji = u.generic(
  ["T"],
  (e) => u.struct("IntentMessage<T>", {
    intent: vi,
    value: e
  })
), Mt = u.enum("CompressedSignature", {
  ED25519: u.fixedArray(64, u.u8()),
  Secp256k1: u.fixedArray(64, u.u8()),
  Secp256r1: u.fixedArray(64, u.u8()),
  ZkLogin: u.vector(u.u8())
}), Rt = u.enum("PublicKey", {
  ED25519: u.fixedArray(32, u.u8()),
  Secp256k1: u.fixedArray(33, u.u8()),
  Secp256r1: u.fixedArray(33, u.u8()),
  ZkLogin: u.vector(u.u8())
}), Pt = u.struct("MultiSigPkMap", {
  pubKey: Rt,
  weight: u.u8()
}), Nt = u.struct("MultiSigPublicKey", {
  pk_map: u.vector(Pt),
  threshold: u.u16()
}), Er = u.struct("MultiSig", {
  sigs: u.vector(Mt),
  bitmap: u.u16(),
  multisig_pk: Nt
}), Ei = u.vector(u.u8()).transform({
  input: (e) => typeof e == "string" ? ae(e) : e,
  output: (e) => Oe(new Uint8Array(e))
}), kr = u.struct("SenderSignedTransaction", {
  intentMessage: ji(Ut),
  txSignatures: u.vector(Ei)
}), Ir = u.vector(kr, {
  name: "SenderSignedData"
}), $ = {
  ...u,
  U8: u.u8(),
  U16: u.u16(),
  U32: u.u32(),
  U64: u.u64(),
  U128: u.u128(),
  U256: u.u256(),
  ULEB128: u.uleb128(),
  Bool: u.bool(),
  String: u.string(),
  Address: q,
  Argument: J,
  CallArg: kt,
  CompressedSignature: Mt,
  GasData: Bt,
  MultiSig: Er,
  MultiSigPkMap: Pt,
  MultiSigPublicKey: Nt,
  ObjectArg: Ge,
  ObjectDigest: jt,
  ProgrammableMoveCall: It,
  ProgrammableTransaction: xt,
  PublicKey: Rt,
  SenderSignedData: Ir,
  SenderSignedTransaction: kr,
  SharedObjectRef: Et,
  StructTag: Ct,
  SuiObjectRef: ve,
  Transaction: Ot,
  TransactionData: Ut,
  TransactionDataV1: $t,
  TransactionExpiration: _t,
  TransactionKind: At,
  TypeTag: pe,
  // preserve backwards compatibility with old bcs export
  ser: I.ser.bind(I),
  de: I.de.bind(I),
  getTypeInterface: I.getTypeInterface.bind(I),
  hasType: I.hasType.bind(I),
  parseTypeName: I.parseTypeName.bind(I),
  registerAddressType: I.registerAddressType.bind(I),
  registerAlias: I.registerAlias.bind(I),
  registerBcsType: I.registerBcsType.bind(I),
  registerEnumType: I.registerEnumType.bind(I),
  registerStructType: I.registerStructType.bind(I),
  registerType: I.registerType.bind(I),
  types: I.types
};
I.registerBcsType("utf8string", () => u.string({ name: "utf8string" }));
I.registerBcsType("unsafe_u64", () => jr());
I.registerBcsType("enumKind", (e) => vt(e));
[
  q,
  J,
  kt,
  Mt,
  Bt,
  Er,
  Pt,
  Nt,
  Ge,
  jt,
  It,
  xt,
  Rt,
  Ir,
  Et,
  Ct,
  ve,
  Ot,
  Ut,
  $t,
  _t,
  At,
  pe
].forEach((e) => {
  I.registerBcsType(e.name, () => e);
});
const ki = B([
  p({ ImmOrOwned: se }),
  p({
    Shared: p({
      objectId: h(),
      initialSharedVersion: B([Y(), h()]),
      mutable: N()
    })
  }),
  p({ Receiving: se })
]), Le = p({ Pure: j(Y()) }), ut = p({ Object: ki }), We = B([Le, ut]);
function Ii(e, t) {
  return {
    Pure: Array.from(
      e instanceof Uint8Array ? e : bt(e) ? e.toBytes() : (
        // NOTE: We explicitly set this to be growable to infinity, because we have maxSize validation at the builder-level:
        $.ser(t, e, { maxSize: 1 / 0 }).toBytes()
      )
    )
  };
}
const V = {
  Pure: Ii,
  ObjectRef({ objectId: e, digest: t, version: r }) {
    return {
      Object: {
        ImmOrOwned: {
          digest: t,
          version: r,
          objectId: P(e)
        }
      }
    };
  },
  SharedObjectRef({ objectId: e, mutable: t, initialSharedVersion: r }) {
    return {
      Object: {
        Shared: {
          mutable: t,
          initialSharedVersion: r,
          objectId: P(e)
        }
      }
    };
  },
  ReceivingRef({ objectId: e, digest: t, version: r }) {
    return {
      Object: {
        Receiving: {
          digest: t,
          version: r,
          objectId: P(e)
        }
      }
    };
  }
};
function Yt(e) {
  return typeof e == "string" ? P(e) : "ImmOrOwned" in e.Object ? P(e.Object.ImmOrOwned.objectId) : "Receiving" in e.Object ? P(e.Object.Receiving.objectId) : P(e.Object.Shared.objectId);
}
function Oi(e) {
  return typeof e == "object" && "Object" in e && "Shared" in e.Object ? e.Object.Shared : void 0;
}
function xi(e) {
  var t;
  return ((t = Oi(e)) == null ? void 0 : t.mutable) ?? !1;
}
function z(e, t) {
  return sr(e, t);
}
const Ai = (e) => B([p({ None: B([T(!0), T(null)]) }), p({ Some: e })]), je = B([
  p({
    kind: T("Input"),
    index: Y(),
    value: S(at()),
    type: S(T("object"))
  }),
  p({
    kind: T("Input"),
    index: Y(),
    value: S(at()),
    type: T("pure")
  })
]), _i = [
  je,
  p({ kind: T("GasCoin") }),
  p({ kind: T("Result"), index: Y() }),
  p({
    kind: T("NestedResult"),
    index: Y(),
    resultIndex: Y()
  })
], ne = B([..._i]), Or = p({
  kind: T("MoveCall"),
  target: G("target", h().validator),
  typeArguments: j(h()),
  arguments: j(ne)
}), xr = p({
  kind: T("TransferObjects"),
  objects: j(ne),
  address: ne
}), Ar = p({
  kind: T("SplitCoins"),
  coin: ne,
  amounts: j(ne)
}), _r = p({
  kind: T("MergeCoins"),
  destination: ne,
  sources: j(ne)
}), Cr = p({
  kind: T("MakeMoveVec"),
  // TODO: ideally we should use `TypeTag` instead of `record()` here,
  // but TypeTag is recursively defined and it's tricky to define a
  // recursive struct in superstruct
  type: S(Ai(Z(h(), ur()))),
  objects: j(ne)
}), Br = p({
  kind: T("Publish"),
  modules: j(j(Y())),
  dependencies: j(h())
}), $r = p({
  kind: T("Upgrade"),
  modules: j(j(Y())),
  dependencies: j(h()),
  packageId: h(),
  ticket: ne
}), Ci = [
  Or,
  xr,
  Ar,
  _r,
  Br,
  $r,
  Cr
], Bi = B([...Ci]), ce = {
  MoveCall(e) {
    return z(
      {
        kind: "MoveCall",
        target: e.target,
        arguments: e.arguments ?? [],
        typeArguments: e.typeArguments ?? []
      },
      Or
    );
  },
  TransferObjects(e, t) {
    return t.kind === "Input" && t.type === "pure" && typeof t.value != "object" && (t.value = V.Pure($.Address.serialize(t.value))), z({ kind: "TransferObjects", objects: e, address: t }, xr);
  },
  SplitCoins(e, t) {
    return t.forEach((r) => {
      r.kind === "Input" && r.type === "pure" && typeof r.value != "object" && (r.value = V.Pure($.U64.serialize(r.value)));
    }), z(
      {
        kind: "SplitCoins",
        coin: e,
        amounts: t
      },
      Ar
    );
  },
  MergeCoins(e, t) {
    return z({ kind: "MergeCoins", destination: e, sources: t }, _r);
  },
  Publish({
    modules: e,
    dependencies: t
  }) {
    return z(
      {
        kind: "Publish",
        modules: e.map(
          (r) => typeof r == "string" ? Array.from(ae(r)) : r
        ),
        dependencies: t.map((r) => ge(r))
      },
      Br
    );
  },
  Upgrade({
    modules: e,
    dependencies: t,
    packageId: r,
    ticket: n
  }) {
    return z(
      {
        kind: "Upgrade",
        modules: e.map(
          (i) => typeof i == "string" ? Array.from(ae(i)) : i
        ),
        dependencies: t.map((i) => ge(i)),
        packageId: r,
        ticket: n
      },
      $r
    );
  },
  MakeMoveVec({
    type: e,
    objects: t
  }) {
    return z(
      {
        kind: "MakeMoveVec",
        type: e ? { Some: te.parseFromStr(e) } : { None: null },
        objects: t
      },
      Cr
    );
  }
};
function $i(e) {
  function t(r, n) {
    return e(r, n);
  }
  return t.u8 = (r) => e($.U8.serialize(r)), t.u16 = (r) => e($.U16.serialize(r)), t.u32 = (r) => e($.U32.serialize(r)), t.u64 = (r) => e($.U64.serialize(r)), t.u128 = (r) => e($.U128.serialize(r)), t.u256 = (r) => e($.U256.serialize(r)), t.bool = (r) => e($.Bool.serialize(r)), t.string = (r) => e($.String.serialize(r)), t.address = (r) => e($.Address.serialize(r)), t.id = t.address, t;
}
function Ui(e, t) {
  const r = Array.from(`${e}::`).map((i) => i.charCodeAt(0)), n = new Uint8Array(r.length + t.length);
  return n.set(r), n.set(t, r.length), Fr(n, { dkLen: 32 });
}
const Mi = S(
  C(
    B([p({ Epoch: Y() }), p({ None: B([T(!0), T(null)]) })])
  )
), Qt = G("StringEncodedBigint", (e) => {
  if (!["string", "number", "bigint"].includes(typeof e))
    return !1;
  try {
    return BigInt(e), !0;
  } catch {
    return !1;
  }
}), Ri = p({
  budget: S(Qt),
  price: S(Qt),
  payment: S(j(se)),
  owner: S(h())
}), Be = p({
  version: T(1),
  sender: S(h()),
  expiration: Mi,
  gasConfig: Ri,
  inputs: j(je),
  transactions: j(Bi)
});
function er(e) {
  return P(e).replace("0x", "");
}
class re {
  constructor(t) {
    this.version = 1, this.sender = t == null ? void 0 : t.sender, this.expiration = t == null ? void 0 : t.expiration, this.gasConfig = (t == null ? void 0 : t.gasConfig) ?? {}, this.inputs = (t == null ? void 0 : t.inputs) ?? [], this.transactions = (t == null ? void 0 : t.transactions) ?? [];
  }
  static fromKindBytes(t) {
    const r = $.TransactionKind.parse(t), n = "ProgrammableTransaction" in r ? r.ProgrammableTransaction : null;
    if (!n)
      throw new Error("Unable to deserialize from bytes.");
    const i = z(
      {
        version: 1,
        gasConfig: {},
        inputs: n.inputs.map(
          (s, o) => z(
            {
              kind: "Input",
              value: s,
              index: o,
              type: F(s, Le) ? "pure" : "object"
            },
            je
          )
        ),
        transactions: n.transactions
      },
      Be
    );
    return re.restore(i);
  }
  static fromBytes(t) {
    var o;
    const r = $.TransactionData.parse(t), n = r == null ? void 0 : r.V1, i = "ProgrammableTransaction" in n.kind ? (o = n == null ? void 0 : n.kind) == null ? void 0 : o.ProgrammableTransaction : null;
    if (!n || !i)
      throw new Error("Unable to deserialize from bytes.");
    const s = z(
      {
        version: 1,
        sender: n.sender,
        expiration: n.expiration,
        gasConfig: n.gasData,
        inputs: i.inputs.map(
          (a, c) => z(
            {
              kind: "Input",
              value: a,
              index: c,
              type: F(a, Le) ? "pure" : "object"
            },
            je
          )
        ),
        transactions: i.transactions
      },
      Be
    );
    return re.restore(s);
  }
  static restore(t) {
    st(t, Be);
    const r = new re();
    return Object.assign(r, t), r;
  }
  /**
   * Generate transaction digest.
   *
   * @param bytes BCS serialized transaction data
   * @returns transaction digest.
   */
  static getDigestFromBytes(t) {
    const r = Ui("TransactionData", t);
    return Ie(r);
  }
  build({
    maxSizeBytes: t = 1 / 0,
    overrides: r,
    onlyTransactionKind: n
  } = {}) {
    const i = this.inputs.map((l) => (st(l.value, We), l.value)), s = {
      ProgrammableTransaction: {
        inputs: i,
        transactions: this.transactions
      }
    };
    if (n)
      return $.TransactionKind.serialize(s, { maxSize: t }).toBytes();
    const o = (r == null ? void 0 : r.expiration) ?? this.expiration, a = (r == null ? void 0 : r.sender) ?? this.sender, c = { ...this.gasConfig, ...r == null ? void 0 : r.gasConfig };
    if (!a)
      throw new Error("Missing transaction sender");
    if (!c.budget)
      throw new Error("Missing gas budget");
    if (!c.payment)
      throw new Error("Missing gas payment");
    if (!c.price)
      throw new Error("Missing gas price");
    const d = {
      sender: er(a),
      expiration: o || { None: !0 },
      gasData: {
        payment: c.payment,
        owner: er(this.gasConfig.owner ?? a),
        price: BigInt(c.price),
        budget: BigInt(c.budget)
      },
      kind: {
        ProgrammableTransaction: {
          inputs: i,
          transactions: this.transactions
        }
      }
    };
    return $.TransactionData.serialize(
      { V1: d },
      { maxSize: t }
    ).toBytes();
  }
  getDigest() {
    const t = this.build({ onlyTransactionKind: !1 });
    return re.getDigestFromBytes(t);
  }
  snapshot() {
    return z(this, Be);
  }
}
var Dt = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, k = (e, t, r) => (Dt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ee = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, $e = (e, t, r, n) => (Dt(e, t, "write to private field"), t.set(e, r), r), U = (e, t, r) => (Dt(e, t, "access private method"), r), v, be, Pe, Se, Ne, oe, de, zt, Ur, Vt, Mr, Ft, Rr, Gt, Pr, De, dt;
const Pi = {
  maxPureArgumentSize: 16 * 1024,
  maxTxGas: 5e10,
  maxGasObjects: 256,
  maxTxSizeBytes: 128 * 1024
};
function Ni(e) {
  const t = { kind: "Result", index: e }, r = [], n = (i) => r[i] ?? (r[i] = {
    kind: "NestedResult",
    index: e,
    resultIndex: i
  });
  return new Proxy(t, {
    set() {
      throw new Error(
        "The transaction result is a proxy, and does not support setting properties directly"
      );
    },
    // TODO: Instead of making this return a concrete argument, we should ideally
    // make it reference-based (so that this gets resolved at build-time), which
    // allows re-ordering transactions.
    get(i, s) {
      if (s in i)
        return Reflect.get(i, s);
      if (s === Symbol.iterator)
        return function* () {
          let a = 0;
          for (; ; )
            yield n(a), a++;
        };
      if (typeof s == "symbol")
        return;
      const o = parseInt(s, 10);
      if (!(Number.isNaN(o) || o < 0))
        return n(o);
    }
  });
}
function Di(e) {
  const t = yt(e);
  return t ? t.Struct.address === "0x2" && t.Struct.module === "transfer" && t.Struct.name === "Receiving" : !1;
}
function Ee(e) {
  if (!e.client)
    throw new Error(
      "No provider passed to Transaction#build, but transaction data was not sufficient to build offline."
    );
  return e.client;
}
const zi = Symbol.for("@mysten/transaction"), rt = {
  // The maximum gas that is allowed.
  maxTxGas: "max_tx_gas",
  // The maximum number of gas objects that can be selected for one transaction.
  maxGasObjects: "max_gas_payment_objects",
  // The maximum size (in bytes) that the transaction can be:
  maxTxSizeBytes: "max_tx_size_bytes",
  // The maximum size (in bytes) that pure arguments can be:
  maxPureArgumentSize: "max_pure_argument_size"
}, Vi = 1000n, Fi = 50, Gi = (e, t) => Array.from(
  { length: Math.ceil(e.length / t) },
  (r, n) => e.slice(n * t, n * t + t)
), lt = class {
  constructor(e) {
    ee(this, be), ee(this, Se), ee(this, oe), ee(this, zt), ee(this, Vt), ee(this, Ft), ee(this, Gt), ee(this, De), ee(this, v, void 0), $e(this, v, new re(
      e ? e.blockData : void 0
    ));
  }
  /**
   * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
   * Supports either a byte array, or base64-encoded bytes.
   */
  static fromKind(e) {
    const t = new lt();
    return $e(t, v, re.fromKindBytes(
      typeof e == "string" ? ae(e) : e
    )), t;
  }
  /**
   * Converts from a serialized transaction format to a `Transaction` class.
   * There are two supported serialized formats:
   * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
   * - A byte array (or base64-encoded bytes) containing BCS transaction data.
   */
  static from(e) {
    const t = new lt();
    return typeof e != "string" || !e.startsWith("{") ? $e(t, v, re.fromBytes(
      typeof e == "string" ? ae(e) : e
    )) : $e(t, v, re.restore(JSON.parse(e))), t;
  }
  setSender(e) {
    k(this, v).sender = e;
  }
  /**
   * Sets the sender only if it has not already been set.
   * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
   */
  setSenderIfNotSet(e) {
    k(this, v).sender || (k(this, v).sender = e);
  }
  setExpiration(e) {
    k(this, v).expiration = e;
  }
  setGasPrice(e) {
    k(this, v).gasConfig.price = String(e);
  }
  setGasBudget(e) {
    k(this, v).gasConfig.budget = String(e);
  }
  setGasOwner(e) {
    k(this, v).gasConfig.owner = e;
  }
  setGasPayment(e) {
    k(this, v).gasConfig.payment = e.map((t) => ar(t, se));
  }
  /** Get a snapshot of the transaction data, in JSON form: */
  get blockData() {
    return k(this, v).snapshot();
  }
  // Used to brand transaction classes so that they can be identified, even between multiple copies
  // of the builder.
  get [zi]() {
    return !0;
  }
  // Temporary workaround for the wallet interface accidentally serializing transaction blocks via postMessage
  get pure() {
    return Object.defineProperty(this, "pure", {
      enumerable: !1,
      value: $i((e, t) => bt(e) ? U(this, be, Pe).call(this, "pure", {
        Pure: Array.from(e.toBytes())
      }) : U(this, be, Pe).call(this, "pure", e instanceof Uint8Array ? V.Pure(e) : t ? V.Pure(e, t) : e))
    }), this.pure;
  }
  /** Returns an argument for the gas coin, to be used in a transaction. */
  get gas() {
    return { kind: "GasCoin" };
  }
  /**
   * Add a new object input to the transaction.
   */
  object(e) {
    if (typeof e == "object" && "kind" in e)
      return e;
    const t = Yt(e), r = k(this, v).inputs.find(
      (n) => n.type === "object" && t === Yt(n.value)
    );
    return r && F(r.value, ut) && "Shared" in r.value.Object && F(e, ut) && "Shared" in e.Object && (r.value.Object.Shared.mutable = r.value.Object.Shared.mutable || e.Object.Shared.mutable), r ?? U(this, be, Pe).call(this, "object", typeof e == "string" ? P(e) : e);
  }
  /**
   * Add a new object input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  objectRef(...e) {
    return this.object(V.ObjectRef(...e));
  }
  /**
   * Add a new receiving input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  receivingRef(...e) {
    return this.object(V.ReceivingRef(...e));
  }
  /**
   * Add a new shared object input to the transaction using the fully-resolved shared object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  sharedObjectRef(...e) {
    return this.object(V.SharedObjectRef(...e));
  }
  /** Add a transaction to the transaction block. */
  add(e) {
    const t = k(this, v).transactions.push(e);
    return Ni(t - 1);
  }
  // Method shorthands:
  splitCoins(e, t) {
    return this.add(
      ce.SplitCoins(
        typeof e == "string" ? this.object(e) : e,
        t.map(
          (r) => typeof r == "number" || typeof r == "bigint" || typeof r == "string" ? this.pure.u64(r) : U(this, Se, Ne).call(this, r)
        )
      )
    );
  }
  mergeCoins(e, t) {
    return this.add(
      ce.MergeCoins(
        typeof e == "string" ? this.object(e) : e,
        t.map((r) => typeof r == "string" ? this.object(r) : r)
      )
    );
  }
  publish({ modules: e, dependencies: t }) {
    return this.add(
      ce.Publish({
        modules: e,
        dependencies: t
      })
    );
  }
  upgrade({
    modules: e,
    dependencies: t,
    packageId: r,
    ticket: n
  }) {
    return this.add(
      ce.Upgrade({
        modules: e,
        dependencies: t,
        packageId: r,
        ticket: typeof n == "string" ? this.object(n) : n
      })
    );
  }
  moveCall({
    arguments: e,
    typeArguments: t,
    target: r
  }) {
    return this.add(
      ce.MoveCall({
        arguments: e == null ? void 0 : e.map((n) => U(this, Se, Ne).call(this, n)),
        typeArguments: t,
        target: r
      })
    );
  }
  transferObjects(e, t) {
    return this.add(
      ce.TransferObjects(
        e.map((r) => typeof r == "string" ? this.object(r) : r),
        typeof t == "string" ? this.pure.address(t) : U(this, Se, Ne).call(this, t)
      )
    );
  }
  makeMoveVec({
    type: e,
    objects: t
  }) {
    return this.add(
      ce.MakeMoveVec({
        type: e,
        objects: t.map((r) => typeof r == "string" ? this.object(r) : r)
      })
    );
  }
  /**
   * Serialize the transaction to a string so that it can be sent to a separate context.
   * This is different from `build` in that it does not serialize to BCS bytes, and instead
   * uses a separate format that is unique to the transaction builder. This allows
   * us to serialize partially-complete transactions, that can then be completed and
   * built in a separate context.
   *
   * For example, a dapp can construct a transaction, but not provide gas objects
   * or a gas budget. The transaction then can be sent to the wallet, where this
   * information is automatically filled in (e.g. by querying for coin objects
   * and performing a dry run).
   */
  serialize() {
    return JSON.stringify(k(this, v).snapshot());
  }
  /** Build the transaction to BCS bytes, and sign it with the provided keypair. */
  async sign(e) {
    const { signer: t, ...r } = e, n = await this.build(r);
    return t.signTransactionBlock(n);
  }
  /** Build the transaction to BCS bytes. */
  async build(e = {}) {
    return await U(this, De, dt).call(this, e), k(this, v).build({
      maxSizeBytes: U(this, oe, de).call(this, "maxTxSizeBytes", e),
      onlyTransactionKind: e.onlyTransactionKind
    });
  }
  /** Derive transaction digest */
  async getDigest(e = {}) {
    return await U(this, De, dt).call(this, e), k(this, v).getDigest();
  }
};
let Ue = lt;
v = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakSet();
Pe = function(e, t) {
  const r = k(this, v).inputs.length, n = z(
    {
      kind: "Input",
      // bigints can't be serialized to JSON, so just string-convert them here:
      value: typeof t == "bigint" ? String(t) : t,
      index: r,
      type: e
    },
    je
  );
  return k(this, v).inputs.push(n), n;
};
Se = /* @__PURE__ */ new WeakSet();
Ne = function(e) {
  return bt(e) ? this.pure(e) : e;
};
oe = /* @__PURE__ */ new WeakSet();
de = function(e, { protocolConfig: t, limits: r }) {
  if (r && typeof r[e] == "number")
    return r[e];
  if (!t)
    return Pi[e];
  const n = t == null ? void 0 : t.attributes[rt[e]];
  if (!n)
    throw new Error(`Missing expected protocol config: "${rt[e]}"`);
  const i = "u64" in n ? n.u64 : "u32" in n ? n.u32 : n.f64;
  if (!i)
    throw new Error(`Unexpected protocol config value found for: "${rt[e]}"`);
  return Number(i);
};
zt = /* @__PURE__ */ new WeakSet();
Ur = function(e) {
  const t = U(this, oe, de).call(this, "maxPureArgumentSize", e);
  k(this, v).inputs.forEach((r, n) => {
    if (F(r.value, Le) && r.value.Pure.length > t)
      throw new Error(
        `Input at index ${n} is too large, max pure input size is ${t} bytes, got ${r.value.Pure.length} bytes`
      );
  });
};
Vt = /* @__PURE__ */ new WeakSet();
Mr = async function(e) {
  if (k(this, v).gasConfig.payment) {
    const i = U(this, oe, de).call(this, "maxGasObjects", e);
    if (k(this, v).gasConfig.payment.length > i)
      throw new Error(`Payment objects exceed maximum amount: ${i}`);
  }
  if (e.onlyTransactionKind || k(this, v).gasConfig.payment)
    return;
  const t = k(this, v).gasConfig.owner ?? k(this, v).sender, n = (await Ee(e).getCoins({
    owner: t,
    coinType: Re
  })).data.filter((i) => !k(this, v).inputs.find((o) => F(o.value, We) && "Object" in o.value && "ImmOrOwned" in o.value.Object ? i.coinObjectId === o.value.Object.ImmOrOwned.objectId : !1)).slice(0, U(this, oe, de).call(this, "maxGasObjects", e) - 1).map((i) => ({
    objectId: i.coinObjectId,
    digest: i.digest,
    version: i.version
  }));
  if (!n.length)
    throw new Error("No valid gas coins found for the transaction.");
  this.setGasPayment(n);
};
Ft = /* @__PURE__ */ new WeakSet();
Rr = async function(e) {
  e.onlyTransactionKind || k(this, v).gasConfig.price || this.setGasPrice(await Ee(e).getReferenceGasPrice());
};
Gt = /* @__PURE__ */ new WeakSet();
Pr = async function(e) {
  const { inputs: t, transactions: r } = k(this, v), n = [], i = [];
  if (t.forEach((s) => {
    if (s.type === "object" && typeof s.value == "string") {
      i.push({ id: P(s.value), input: s });
      return;
    }
  }), r.forEach((s) => {
    if (s.kind === "MoveCall" && s.arguments.some(
      (a) => a.kind === "Input" && !F(t[a.index].value, We)
    ) && n.push(s), s.kind === "SplitCoins" && s.amounts.forEach((o) => {
      if (o.kind === "Input") {
        const a = t[o.index];
        typeof a.value != "object" && (a.value = V.Pure($.U64.serialize(a.value)));
      }
    }), s.kind === "TransferObjects" && s.address.kind === "Input") {
      const o = t[s.address.index];
      typeof o.value != "object" && (o.value = V.Pure($.Address.serialize(o.value)));
    }
  }), n.length && await Promise.all(
    n.map(async (s) => {
      const [o, a, c] = s.target.split("::"), d = await Ee(e).getNormalizedMoveFunction({
        package: ge(o),
        module: a,
        function: c
      }), g = d.parameters.length > 0 && gi(d.parameters.at(-1)) ? d.parameters.slice(0, d.parameters.length - 1) : d.parameters;
      if (g.length !== s.arguments.length)
        throw new Error("Incorrect number of arguments.");
      g.forEach((m, y) => {
        const w = s.arguments[y];
        if (w.kind !== "Input")
          return;
        const b = t[w.index];
        if (F(b.value, We))
          return;
        const f = b.value, O = ct(m, f);
        if (O) {
          b.value = V.Pure(f, O);
          return;
        }
        if (yt(m) != null || typeof m == "object" && "TypeParameter" in m) {
          if (typeof f != "string")
            throw new Error(
              `Expect the argument to be an object id string, got ${JSON.stringify(
                f,
                null,
                2
              )}`
            );
          i.push({
            id: f,
            input: b,
            normalizedType: m
          });
          return;
        }
        throw new Error(
          `Unknown call arg type ${JSON.stringify(m, null, 2)} for value ${JSON.stringify(
            f,
            null,
            2
          )}`
        );
      });
    })
  ), i.length) {
    const s = [...new Set(i.map(({ id: l }) => l))], o = Gi(s, Fi), a = (await Promise.all(
      o.map(
        (l) => Ee(e).multiGetObjects({
          ids: l,
          options: { showOwner: !0 }
        })
      )
    )).flat();
    let c = new Map(
      s.map((l, g) => [l, a[g]])
    );
    const d = Array.from(c).filter(([l, g]) => g.error).map(([l, g]) => l);
    if (d.length)
      throw new Error(`The following input objects are invalid: ${d.join(", ")}`);
    i.forEach(({ id: l, input: g, normalizedType: m }) => {
      var f;
      const y = c.get(l), w = (f = y.data) == null ? void 0 : f.owner, b = w && typeof w == "object" && "Shared" in w ? w.Shared.initial_shared_version : void 0;
      if (b) {
        const O = m != null && ot(m) == null && gr(m) == null, _ = xi(g.value) || O || m != null && ot(m) != null;
        g.value = V.SharedObjectRef({
          objectId: l,
          initialSharedVersion: b,
          mutable: _
        });
      } else
        m && Di(m) ? g.value = V.ReceivingRef(Zt(y)) : g.value = V.ObjectRef(Zt(y));
    });
  }
};
De = /* @__PURE__ */ new WeakSet();
dt = async function(e) {
  if (!e.onlyTransactionKind && !k(this, v).sender)
    throw new Error("Missing transaction sender");
  if (!e.protocolConfig && !e.limits && e.client && (e.protocolConfig = await e.client.getProtocolConfig()), await Promise.all([U(this, Ft, Rr).call(this, e), U(this, Gt, Pr).call(this, e)]), !e.onlyTransactionKind && (await U(this, Vt, Mr).call(this, e), !k(this, v).gasConfig.budget)) {
    const t = await Ee(e).dryRunTransactionBlock({
      transactionBlock: k(this, v).build({
        maxSizeBytes: U(this, oe, de).call(this, "maxTxSizeBytes", e),
        overrides: {
          gasConfig: {
            budget: String(U(this, oe, de).call(this, "maxTxGas", e)),
            payment: []
          }
        }
      })
    });
    if (t.effects.status.status !== "success")
      throw new Error(
        `Dry run failed, could not automatically determine a budget: ${t.effects.status.error}`,
        { cause: t }
      );
    const r = Vi * BigInt(this.blockData.gasConfig.price || 1n), n = BigInt(t.effects.gasUsed.computationCost) + r, i = n + BigInt(t.effects.gasUsed.storageCost) - BigInt(t.effects.gasUsed.storageRebate);
    this.setGasBudget(
      i > n ? i : n
    );
  }
  U(this, zt, Ur).call(this, e);
};
const Li = async (e, t, r) => {
  var o, a, c;
  if (!rr(r))
    throw new Error(`Invalid Sui type: ${r}`);
  const n = await ft(e, t);
  if (!n)
    throw new Error(`Unable to fetch object fields from token bridge state. Object ID: ${t}`);
  const i = (a = (o = n.token_registry.fields) == null ? void 0 : o.id) == null ? void 0 : a.id;
  if (!i)
    throw new Error("Unable to fetch token registry object ID");
  const s = qr((c = n.token_registry) == null ? void 0 : c.type);
  if (!s)
    throw new Error("Unable to fetch token registry package ID");
  return e.getDynamicFieldObject({
    parentId: i,
    name: {
      type: `${s}::token_registry::Key<${r}>`,
      value: {
        dummy_field: !1
      }
    }
  });
}, tr = async (e, t, r, n) => {
  var l, g, m, y;
  const i = await ft(e, t);
  if (!i)
    throw new Error("Unable to fetch object fields from token bridge state");
  const s = (g = (l = i.token_registry) == null ? void 0 : l.fields) == null ? void 0 : g.coin_types, o = (y = (m = s == null ? void 0 : s.fields) == null ? void 0 : m.id) == null ? void 0 : y.id;
  if (!o)
    throw new Error("Unable to fetch coin types");
  const a = nr(s == null ? void 0 : s.type);
  if (!a)
    throw new Error("Unable to get key type");
  const c = await e.getDynamicFieldObject({
    parentId: o,
    name: {
      type: a,
      value: {
        addr: [...r],
        chain: n
      }
    }
  });
  if (c.error) {
    if (c.error.code === "dynamicFieldNotFound")
      return null;
    throw new Error(`Unexpected getDynamicFieldObject response ${c.error}`);
  }
  const d = ir(c);
  if (!d)
    return null;
  if (!nt(d))
    throw new Error("What?");
  return "value" in d ? it(d.value) : null;
};
class Lt {
  constructor(t, r, n, i) {
    D(this, "network");
    D(this, "chain");
    D(this, "provider");
    D(this, "contracts");
    D(this, "coreBridgeObjectId");
    D(this, "tokenBridgeObjectId");
    D(this, "chainId");
    this.network = t, this.chain = r, this.provider = n, this.contracts = i, this.chainId = Gr.get(t, r);
    const s = this.contracts.tokenBridge;
    if (!s)
      throw new Error(`Wormhole Token Bridge contract for domain ${r} not found`);
    const o = this.contracts.coreBridge;
    if (!o)
      throw new Error(`Wormhole Token Bridge contract for domain ${r} not found`);
    this.tokenBridgeObjectId = s, this.coreBridgeObjectId = o;
  }
  static async fromRpc(t, r) {
    const [n, i] = await Zr.chainFromRpc(t), s = r[i];
    if (s.network !== n)
      throw new Error(`Network mismatch: ${s.network} != ${n}`);
    return new Lt(n, i, t, s.contracts);
  }
  async isWrappedAsset(t) {
    try {
      return await this.getOriginalAsset(t), !0;
    } catch {
      return !1;
    }
  }
  async getOriginalAsset(t) {
    let r = t.getCoinType();
    if (!rr(r))
      throw new Error(`Invalid Sui type: ${r}`);
    const n = await Li(this.provider, this.tokenBridgeObjectId, r), i = ir(n);
    if (!i)
      throw Je(r);
    if (!nt(i))
      throw new Error("Expected fields to be a MoveStruct");
    if (!("value" in i))
      throw new Error("Expected a `value` key in fields of MoveStruct");
    const s = i.value;
    if (!_e(s))
      throw new Error("Expected fields to be a MoveStruct");
    const o = it(s.type);
    if (r = it(r), o.includes(`wrapped_asset::WrappedAsset<${r}>`)) {
      const a = s.fields.info;
      if (!_e(a))
        throw new Error("Expected fields to be a MoveStruct");
      const c = a.fields.token_address;
      if (!_e(c))
        throw new Error("Expected fields to be a MoveStruct");
      if (!nt(c.fields))
        throw new Error("Expected address data to be a MoveObject");
      if (!("value" in c.fields))
        throw new Error("Expected a `value` key in fields of MoveStruct");
      const d = c.fields.value;
      if (!_e(d))
        throw new Error("Expected fields to be a MoveStruct");
      return {
        chain: Lr(Number(a.fields.token_chain)),
        // @ts-ignore TODO
        address: new Wr(d.fields.data)
      };
    }
    throw Je(r);
  }
  async hasWrappedAsset(t) {
    try {
      return await this.getWrappedAsset(t), !0;
    } catch {
    }
    return !1;
  }
  async getWrappedAsset(t) {
    if (Kt(t.address))
      throw new Error("Token Address required, 'native' literal not supported");
    const r = await tr(this.provider, this.tokenBridgeObjectId, t.address.toUniversalAddress().toUint8Array(), Ae(t.chain));
    if (!r)
      throw Je(Kr(t));
    return Jt(this.chain, r);
  }
  async isTransferCompleted(t) {
    var a, c, d, l, g, m, y, w;
    const r = await ft(this.provider, this.tokenBridgeObjectId);
    if (!r)
      throw new Error("Unable to fetch object fields from token bridge state");
    const n = (c = (a = r.consumed_vaas) == null ? void 0 : a.fields) == null ? void 0 : c.hashes, i = nr((l = (d = n == null ? void 0 : n.fields) == null ? void 0 : d.items) == null ? void 0 : l.type);
    if (!i)
      throw new Error("Unable to get key type");
    const s = (w = (y = (m = (g = n == null ? void 0 : n.fields) == null ? void 0 : g.items) == null ? void 0 : m.fields) == null ? void 0 : y.id) == null ? void 0 : w.id;
    if (!s)
      throw new Error("Unable to fetch consumed VAAs table");
    const o = await this.provider.getDynamicFieldObject({
      parentId: s,
      name: {
        type: i,
        value: {
          data: [...Jr(t.hash)]
        }
      }
    });
    if (!o.error)
      return !0;
    if (o.error.code === "dynamicFieldNotFound")
      return !1;
    throw new Error(`Unexpected getDynamicFieldObject response ${o.error}`);
  }
  async *createAttestation(t) {
    const r = 0n, n = 0n, i = t.toString(), s = await this.provider.getCoinMetadata({ coinType: i });
    if (s === null || s.id === null)
      throw new Error(`Coin metadata ID for type ${i} not found`);
    const [o, a] = await this.getPackageIds(), c = new Ue(), [d] = c.splitCoins(c.gas, [c.pure(r)]), [l] = c.moveCall({
      target: `${a}::attest_token::attest_token`,
      arguments: [c.object(this.tokenBridgeObjectId), c.object(s.id), c.pure(n)],
      typeArguments: [i]
    });
    c.moveCall({
      target: `${o}::publish_message::publish_message`,
      arguments: [
        c.object(this.coreBridgeObjectId),
        d,
        l,
        c.object(ye)
      ]
    }), yield this.createUnsignedTx(c, "Sui.TokenBridge.CreateAttestation");
  }
  async *submitAttestation(t, r) {
    const [n, i] = await this.getPackageIds(), s = r.toString(), o = Math.min(t.payload.decimals, 8), a = await this.getCoinBuildOutput(n, i, o), c = await Yr(a, s);
    yield this.createUnsignedTx(c, "Sui.TokenBridge.PrepareCreateWrapped");
    let d = "", l = "", g = "", m = "", y = "", w = !1;
    for (; !w; ) {
      await new Promise((x) => setTimeout(x, 500));
      const M = await this.provider.queryTransactionBlocks({
        filter: { FromAddress: s },
        options: { showObjectChanges: !0 },
        limit: 3
      });
      for (const x of M.data)
        if ("objectChanges" in x) {
          for (const E of x.objectChanges)
            Qr(E) && E.packageId !== void 0 ? d = E.packageId : He(E) && E.objectType.includes("WrappedAssetSetup") ? (l = E.objectId, y = E.objectType.split(", ")[1].replace(">", "")) : He(E) && E.objectType.includes("UpgradeCap") ? g = E.objectId : He(E) && E.objectType.includes("CoinMetadata") && (m = E.objectId);
          if (d !== "" && l !== "" && g !== "" && m !== "") {
            w = !0;
            break;
          } else
            d = "", l = "", g = "", m = "";
        }
    }
    const b = en(d), f = new Ue(), [O] = f.moveCall({
      target: `${n}::vaa::parse_and_verify`,
      arguments: [
        f.object(this.coreBridgeObjectId),
        f.pure(Xe(Ht(t))),
        f.object(ye)
      ]
    }), [_] = f.moveCall({
      target: `${i}::vaa::verify_only_once`,
      arguments: [f.object(this.tokenBridgeObjectId), O]
    });
    f.moveCall({
      target: `${i}::create_wrapped::complete_registration`,
      arguments: [
        f.object(this.tokenBridgeObjectId),
        f.object(m),
        f.object(l),
        f.object(g),
        _
      ],
      typeArguments: [b, y]
    }), yield this.createUnsignedTx(f, "Sui.TokenBridge.SubmitAttestation");
  }
  async *transfer(t, r, n, i, s) {
    const o = 0n, a = 0n, d = t.toString(), l = (Kt(n) ? Re : n).toString(), g = (await this.provider.getCoins({
      owner: d,
      coinType: l
    })).data, [m, ...y] = g.filter((x) => tn(x.coinType, l));
    if (m === void 0)
      throw new Error(`Coins array doesn't contain any coins of type ${l}`);
    const [w, b] = await this.getPackageIds(), f = new Ue(), [O] = (() => {
      if (l === Re)
        return f.splitCoins(f.gas, [f.pure(i)]);
      {
        const x = f.object(m.coinObjectId);
        return y.length && f.mergeCoins(x, y.map((E) => f.object(E.coinObjectId))), f.splitCoins(x, [f.pure(i)]);
      }
    })(), [_] = f.splitCoins(f.gas, [f.pure(o)]), [M] = f.moveCall({
      target: `${b}::state::verified_asset`,
      arguments: [f.object(this.tokenBridgeObjectId)],
      typeArguments: [l]
    });
    if (s) {
      if (!d)
        throw new Error("senderAddress is required for transfer with payload");
      let x = !1;
      const E = await (async () => {
        const Wt = await rn(this.provider, w, d);
        if (Wt !== null)
          return f.object(Wt);
        {
          const [Nr] = f.moveCall({
            target: `${w}::emitter::new`,
            arguments: [f.object(this.coreBridgeObjectId)]
          });
          return x = !0, Nr;
        }
      })(), [R, K] = f.moveCall({
        target: `${b}::transfer_tokens_with_payload::prepare_transfer`,
        arguments: [
          E,
          M,
          O,
          f.pure(Ae(r.chain)),
          f.pure(r.address.toUint8Array()),
          f.pure([...s]),
          f.pure(0)
        ],
        typeArguments: [l]
      });
      f.moveCall({
        target: `${b}::coin_utils::return_nonzero`,
        arguments: [K],
        typeArguments: [l]
      });
      const [le] = f.moveCall({
        target: `${b}::transfer_tokens_with_payload::transfer_tokens_with_payload`,
        arguments: [f.object(this.tokenBridgeObjectId), R],
        typeArguments: [l]
      });
      f.moveCall({
        target: `${w}::publish_message::publish_message`,
        arguments: [
          f.object(this.coreBridgeObjectId),
          _,
          le,
          f.object(ye)
        ]
      }), x && f.transferObjects([E], f.pure(d)), yield this.createUnsignedTx(f, "Sui.TokenBridge.TransferWithPayload");
    } else {
      const [x, E] = f.moveCall({
        target: `${b}::transfer_tokens::prepare_transfer`,
        arguments: [
          M,
          O,
          f.pure(Ae(r.chain)),
          f.pure(Xe(r.address.toUint8Array())),
          f.pure(a),
          f.pure(0)
        ],
        typeArguments: [l]
      });
      f.moveCall({
        target: `${b}::coin_utils::return_nonzero`,
        arguments: [E],
        typeArguments: [l]
      });
      const [R] = f.moveCall({
        target: `${b}::transfer_tokens::transfer_tokens`,
        arguments: [f.object(this.tokenBridgeObjectId), x],
        typeArguments: [l]
      });
      f.moveCall({
        target: `${w}::publish_message::publish_message`,
        arguments: [
          f.object(this.coreBridgeObjectId),
          _,
          R,
          f.object(ye)
        ]
      }), yield this.createUnsignedTx(f, "Sui.TokenBridge.Transfer");
    }
  }
  async *redeem(t, r, n = !0) {
    const i = await tr(this.provider, this.tokenBridgeObjectId, r.payload.token.address.toUint8Array(), Ae(r.payload.token.chain));
    if (!i)
      throw new Error("Unable to fetch token coinType");
    const [s, o] = await this.getPackageIds(), a = new Ue(), [c] = a.moveCall({
      target: `${s}::vaa::parse_and_verify`,
      arguments: [
        a.object(this.coreBridgeObjectId),
        a.pure(Xe(Ht(r))),
        a.object(ye)
      ]
    }), [d] = a.moveCall({
      target: `${o}::vaa::verify_only_once`,
      arguments: [a.object(this.tokenBridgeObjectId), c]
    }), [l] = a.moveCall({
      target: `${o}::complete_transfer::authorize_transfer`,
      arguments: [a.object(this.tokenBridgeObjectId), d],
      typeArguments: [i]
    }), [g] = a.moveCall({
      target: `${o}::complete_transfer::redeem_relayer_payout`,
      arguments: [l],
      typeArguments: [i]
    });
    a.moveCall({
      target: `${o}::coin_utils::return_nonzero`,
      arguments: [g],
      typeArguments: [i]
    }), yield this.createUnsignedTx(a, "Sui.TokenBridge.Redeem");
  }
  async getWrappedNative() {
    const t = await this.provider.getCoinMetadata({ coinType: Re });
    if (!t)
      throw new Error("Coin metadata not found");
    return Jt(this.chain, t.id);
  }
  async getPackageIds() {
    return Promise.all([
      Xt(this.provider, this.coreBridgeObjectId),
      Xt(this.provider, this.tokenBridgeObjectId)
    ]);
  }
  async getCoinBuildOutput(t, r, n) {
    var a;
    if (n > 8)
      throw new Error("Decimals is capped at 8");
    const i = (a = await nn(this.provider, this.tokenBridgeObjectId)) == null ? void 0 : a.replace("0x", "");
    if (!i)
      throw new Error(`Original token bridge package ID not found for object ID ${this.tokenBridgeObjectId}`);
    const s = "a11ceb0b060000000901000a020a14031e1704350405392d07669f01088502600ae502050cea02160004010b010c0205020d000002000201020003030c020001000104020700000700010001090801010c020a050600030803040202000302010702080007080100020800080303090002070801010b020209000901010608010105010b0202080008030209000504434f494e095478436f6e7465787408565f5f305f325f3011577261707065644173736574536574757004636f696e0e6372656174655f777261707065640b64756d6d795f6669656c6404696e697414707265706172655f726567697374726174696f6e0f7075626c69635f7472616e736665720673656e646572087472616e736665720a74785f636f6e746578740f76657273696f6e5f636f6e74726f6c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002" + i + "00020106010000000001090b0031" + n.toString(16).padStart(2, "0") + "0a0138000b012e110238010200";
    return {
      modules: [Hr.encode(Xr.decode(s))],
      dependencies: ["0x1", "0x2", r, t].map((c) => ge(c))
    };
  }
  createUnsignedTx(t, r, n = !1) {
    return new on(t, this.network, this.chain, r, n);
  }
}
an(sn, "TokenBridge", Lt);
export {
  Lt as SuiTokenBridge,
  tr as getTokenCoinType,
  Li as getTokenFromTokenRegistry
};
