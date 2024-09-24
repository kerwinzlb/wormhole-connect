var yu = Object.defineProperty;
var bu = (e, t, n) => t in e ? yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var at = (e, t, n) => (bu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { o as h, a0 as Vr, A as jt, U as vu, d as et, w as ma, V as wu, X as fa, Y as ku, Z as _u, bb as Su, $ as Pu, r as ha, bc as Fr, bd as Au, be as Tu, bf as Eu, bg as Us, bh as pa, bi as ga, bj as Cu, bk as Mu, ah as Bt, ai as Ou, bl as ju, bm as Bu, bn as Ru, bo as Iu, bp as $u, bq as ya, br as Nu, bs as xu, bt as Du, bu as Uu, bv as qu, bw as Hu, bx as Vu, by as Fu, bz as Wr, bA as Wu, bB as Ju, bC as Gu, bD as Lu, bE as zu, bF as Ku, bG as Qu, bH as Zu, bI as Xu, bJ as Yu, bK as ed, bL as ba, bM as td, bN as nd, bO as rd, bP as od, bQ as sd, aj as id, bR as ad, b2 as vi, aw as cd, bW as wi, ax as ud, cV as dd } from "./index-DV1w5RNX.mjs";
import { CosmwasmWormholeCore as ld } from "./index-1UYO6C7i.mjs";
import { n as ki, G as Nt, C as es, a as _i, I as md, b as Si, c as ts, d as Pi, e as Ai, f as Ti, g as Ei, h as Ci, i as Mi, j as fd, k as hd, _ as pd } from "./cosmwasm-DHfd5lcQ.mjs";
import { c as gd, C as yd } from "./unsignedTransaction-DMQTL-mr.mjs";
import { r as bd } from "./chain-tk4BDPwT.mjs";
function vd(e) {
  return e.id !== void 0 && e.pending !== void 0 && e.data !== void 0;
}
var va = {}, zn = {}, Y = {}, Jr = {}, wd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.Decimal = void 0;
const Ue = wd(Vr), Oi = 100;
class K {
  static fromUserInput(t, n) {
    K.verifyFractionalDigits(n);
    const r = t.match(/[^0-9.]/);
    if (r)
      throw new Error(`Invalid character at position ${r.index + 1}`);
    let o, s;
    if (t === "")
      o = "0", s = "";
    else if (t.search(/\./) === -1)
      o = t, s = "";
    else {
      const c = t.split(".");
      switch (c.length) {
        case 0:
        case 1:
          throw new Error("Fewer than two elements in split result. This must not happen here.");
        case 2:
          if (!c[1])
            throw new Error("Fractional part missing");
          o = c[0], s = c[1].replace(/0+$/, "");
          break;
        default:
          throw new Error("More than one separator found");
      }
    }
    if (s.length > n)
      throw new Error("Got more fractional digits than supported");
    const i = `${o}${s.padEnd(n, "0")}`;
    return new K(i, n);
  }
  static fromAtomics(t, n) {
    return K.verifyFractionalDigits(n), new K(t, n);
  }
  /**
   * Creates a Decimal with value 0.0 and the given number of fractial digits.
   *
   * Fractional digits are not relevant for the value but needed to be able
   * to perform arithmetic operations with other decimals.
   */
  static zero(t) {
    return K.verifyFractionalDigits(t), new K("0", t);
  }
  /**
   * Creates a Decimal with value 1.0 and the given number of fractial digits.
   *
   * Fractional digits are not relevant for the value but needed to be able
   * to perform arithmetic operations with other decimals.
   */
  static one(t) {
    return K.verifyFractionalDigits(t), new K("1" + "0".repeat(t), t);
  }
  static verifyFractionalDigits(t) {
    if (!Number.isInteger(t))
      throw new Error("Fractional digits is not an integer");
    if (t < 0)
      throw new Error("Fractional digits must not be negative");
    if (t > Oi)
      throw new Error(`Fractional digits must not exceed ${Oi}`);
  }
  static compare(t, n) {
    if (t.fractionalDigits !== n.fractionalDigits)
      throw new Error("Fractional digits do not match");
    return t.data.atomics.cmp(new Ue.default(n.atomics));
  }
  get atomics() {
    return this.data.atomics.toString();
  }
  get fractionalDigits() {
    return this.data.fractionalDigits;
  }
  constructor(t, n) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format. Only non-negative integers in decimal representation supported.");
    this.data = {
      atomics: new Ue.default(t),
      fractionalDigits: n
    };
  }
  /** Creates a new instance with the same value */
  clone() {
    return new K(this.atomics, this.fractionalDigits);
  }
  /** Returns the greatest decimal <= this which has no fractional part (rounding down) */
  floor() {
    const t = new Ue.default(10).pow(new Ue.default(this.data.fractionalDigits)), n = this.data.atomics.div(t);
    return this.data.atomics.mod(t).isZero() ? this.clone() : K.fromAtomics(n.mul(t).toString(), this.fractionalDigits);
  }
  /** Returns the smallest decimal >= this which has no fractional part (rounding up) */
  ceil() {
    const t = new Ue.default(10).pow(new Ue.default(this.data.fractionalDigits)), n = this.data.atomics.div(t);
    return this.data.atomics.mod(t).isZero() ? this.clone() : K.fromAtomics(n.addn(1).mul(t).toString(), this.fractionalDigits);
  }
  toString() {
    const t = new Ue.default(10).pow(new Ue.default(this.data.fractionalDigits)), n = this.data.atomics.div(t), r = this.data.atomics.mod(t);
    if (r.isZero())
      return n.toString();
    {
      const s = r.toString().padStart(this.data.fractionalDigits, "0").replace(/0+$/, "");
      return `${n.toString()}.${s}`;
    }
  }
  /**
   * Returns an approximation as a float type. Only use this if no
   * exact calculation is required.
   */
  toFloatApproximation() {
    const t = Number(this.toString());
    if (Number.isNaN(t))
      throw new Error("Conversion to number failed");
    return t;
  }
  /**
   * a.plus(b) returns a+b.
   *
   * Both values need to have the same fractional digits.
   */
  plus(t) {
    if (this.fractionalDigits !== t.fractionalDigits)
      throw new Error("Fractional digits do not match");
    const n = this.data.atomics.add(new Ue.default(t.atomics));
    return new K(n.toString(), this.fractionalDigits);
  }
  /**
   * a.minus(b) returns a-b.
   *
   * Both values need to have the same fractional digits.
   * The resulting difference needs to be non-negative.
   */
  minus(t) {
    if (this.fractionalDigits !== t.fractionalDigits)
      throw new Error("Fractional digits do not match");
    const n = this.data.atomics.sub(new Ue.default(t.atomics));
    if (n.ltn(0))
      throw new Error("Difference must not be negative");
    return new K(n.toString(), this.fractionalDigits);
  }
  /**
   * a.multiply(b) returns a*b.
   *
   * We only allow multiplication by unsigned integers to avoid rounding errors.
   */
  multiply(t) {
    const n = this.data.atomics.mul(new Ue.default(t.toString()));
    return new K(n.toString(), this.fractionalDigits);
  }
  equals(t) {
    return K.compare(this, t) === 0;
  }
  isLessThan(t) {
    return K.compare(this, t) < 0;
  }
  isLessThanOrEqual(t) {
    return K.compare(this, t) <= 0;
  }
  isGreaterThan(t) {
    return K.compare(this, t) > 0;
  }
  isGreaterThanOrEqual(t) {
    return K.compare(this, t) >= 0;
  }
}
Jr.Decimal = K;
var Je = {}, kd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.Uint64 = Je.Uint53 = Je.Int53 = Je.Uint32 = void 0;
const Er = kd(Vr), _d = new Er.default("18446744073709551615", 10, "be");
class Un {
  /** @deprecated use Uint32.fromBytes */
  static fromBigEndianBytes(t) {
    return Un.fromBytes(t);
  }
  /**
   * Creates a Uint32 from a fixed length byte array.
   *
   * @param bytes a list of exactly 4 bytes
   * @param endianess defaults to big endian
   */
  static fromBytes(t, n = "be") {
    if (t.length !== 4)
      throw new Error("Invalid input length. Expected 4 bytes.");
    for (let o = 0; o < t.length; ++o)
      if (!Number.isInteger(t[o]) || t[o] > 255 || t[o] < 0)
        throw new Error("Invalid value in byte. Found: " + t[o]);
    const r = n === "be" ? t : Array.from(t).reverse();
    return new Un(r[0] * 2 ** 24 + r[1] * 2 ** 16 + r[2] * 2 ** 8 + r[3]);
  }
  static fromString(t) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format");
    return new Un(Number.parseInt(t, 10));
  }
  constructor(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    if (t < 0 || t > 4294967295)
      throw new Error("Input not in uint32 range: " + t.toString());
    this.data = t;
  }
  toBytesBigEndian() {
    return new Uint8Array([
      Math.floor(this.data / 2 ** 24) & 255,
      Math.floor(this.data / 2 ** 16) & 255,
      Math.floor(this.data / 2 ** 8) & 255,
      Math.floor(this.data / 2 ** 0) & 255
    ]);
  }
  toBytesLittleEndian() {
    return new Uint8Array([
      Math.floor(this.data / 2 ** 0) & 255,
      Math.floor(this.data / 2 ** 8) & 255,
      Math.floor(this.data / 2 ** 16) & 255,
      Math.floor(this.data / 2 ** 24) & 255
    ]);
  }
  toNumber() {
    return this.data;
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
Je.Uint32 = Un;
class Vn {
  static fromString(t) {
    if (!t.match(/^-?[0-9]+$/))
      throw new Error("Invalid string format");
    return new Vn(Number.parseInt(t, 10));
  }
  constructor(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    if (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER)
      throw new Error("Input not in int53 range: " + t.toString());
    this.data = t;
  }
  toNumber() {
    return this.data;
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
Je.Int53 = Vn;
class qs {
  static fromString(t) {
    const n = Vn.fromString(t);
    return new qs(n.toNumber());
  }
  constructor(t) {
    const n = new Vn(t);
    if (n.toNumber() < 0)
      throw new Error("Input is negative");
    this.data = n;
  }
  toNumber() {
    return this.data.toNumber();
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
Je.Uint53 = qs;
class qt {
  /** @deprecated use Uint64.fromBytes */
  static fromBytesBigEndian(t) {
    return qt.fromBytes(t);
  }
  /**
   * Creates a Uint64 from a fixed length byte array.
   *
   * @param bytes a list of exactly 8 bytes
   * @param endianess defaults to big endian
   */
  static fromBytes(t, n = "be") {
    if (t.length !== 8)
      throw new Error("Invalid input length. Expected 8 bytes.");
    for (let o = 0; o < t.length; ++o)
      if (!Number.isInteger(t[o]) || t[o] > 255 || t[o] < 0)
        throw new Error("Invalid value in byte. Found: " + t[o]);
    const r = n === "be" ? Array.from(t) : Array.from(t).reverse();
    return new qt(new Er.default(r));
  }
  static fromString(t) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format");
    return new qt(new Er.default(t, 10, "be"));
  }
  static fromNumber(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    let n;
    try {
      n = new Er.default(t);
    } catch {
      throw new Error("Input is not a safe integer");
    }
    return new qt(n);
  }
  constructor(t) {
    if (t.isNeg())
      throw new Error("Input is negative");
    if (t.gt(_d))
      throw new Error("Input exceeds uint64 range");
    this.data = t;
  }
  toBytesBigEndian() {
    return Uint8Array.from(this.data.toArray("be", 8));
  }
  toBytesLittleEndian() {
    return Uint8Array.from(this.data.toArray("le", 8));
  }
  toString() {
    return this.data.toString(10);
  }
  toBigInt() {
    return BigInt(this.toString());
  }
  toNumber() {
    return this.data.toNumber();
  }
}
Je.Uint64 = qt;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Uint64 = e.Uint53 = e.Uint32 = e.Int53 = e.Decimal = void 0;
  var t = Jr;
  Object.defineProperty(e, "Decimal", { enumerable: !0, get: function() {
    return t.Decimal;
  } });
  var n = Je;
  Object.defineProperty(e, "Int53", { enumerable: !0, get: function() {
    return n.Int53;
  } }), Object.defineProperty(e, "Uint32", { enumerable: !0, get: function() {
    return n.Uint32;
  } }), Object.defineProperty(e, "Uint53", { enumerable: !0, get: function() {
    return n.Uint53;
  } }), Object.defineProperty(e, "Uint64", { enumerable: !0, get: function() {
    return n.Uint64;
  } });
})(Y);
var vt = {}, Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.decodeTxRaw = void 0;
const ns = jt;
function Sd(e) {
  const t = ns.TxRaw.decode(e);
  return {
    authInfo: ns.AuthInfo.decode(t.authInfoBytes),
    body: ns.TxBody.decode(t.bodyBytes),
    signatures: t.signatures
  };
}
Gr.decodeTxRaw = Sd;
var Jt = {}, ot = {}, Pe = {}, ke = {}, Ge = {}, N = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.fromAscii = Gt.toAscii = void 0;
function Pd(e) {
  const t = (n) => n.split("").map((r) => {
    const o = r.charCodeAt(0);
    if (o < 32 || o > 126)
      throw new Error("Cannot encode character that is out of printable ASCII range: " + o);
    return o;
  });
  return Uint8Array.from(t(e));
}
Gt.toAscii = Pd;
function Ad(e) {
  return ((n) => n.map((r) => {
    if (r < 32 || r > 126)
      throw new Error("Cannot decode character that is out of printable ASCII range: " + r);
    return String.fromCharCode(r);
  }))(Array.from(e)).join("");
}
Gt.fromAscii = Ad;
var Lt = {}, Td = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Ed = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Cd = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Td(t, e, n);
  return Ed(t, e), t;
};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.fromBase64 = Lt.toBase64 = void 0;
const wa = Cd(vu);
function Md(e) {
  return wa.fromByteArray(e);
}
Lt.toBase64 = Md;
function Od(e) {
  if (!e.match(/^[a-zA-Z0-9+/]*={0,2}$/))
    throw new Error("Invalid base64 string format");
  return wa.toByteArray(e);
}
Lt.fromBase64 = Od;
var dt = {}, Or = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", ys = {};
for (var cr = 0; cr < Or.length; cr++) {
  var rs = Or.charAt(cr);
  if (ys[rs] !== void 0)
    throw new TypeError(rs + " is ambiguous");
  ys[rs] = cr;
}
function Wt(e) {
  var t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function ka(e) {
  for (var t = 1, n = 0; n < e.length; ++n) {
    var r = e.charCodeAt(n);
    if (r < 33 || r > 126)
      return "Invalid prefix (" + e + ")";
    t = Wt(t) ^ r >> 5;
  }
  for (t = Wt(t), n = 0; n < e.length; ++n) {
    var o = e.charCodeAt(n);
    t = Wt(t) ^ o & 31;
  }
  return t;
}
function jd(e, t, n) {
  if (n = n || 90, e.length + 7 + t.length > n)
    throw new TypeError("Exceeds length limit");
  e = e.toLowerCase();
  var r = ka(e);
  if (typeof r == "string")
    throw new Error(r);
  for (var o = e + "1", s = 0; s < t.length; ++s) {
    var i = t[s];
    if (i >> 5)
      throw new Error("Non 5-bit word");
    r = Wt(r) ^ i, o += Or.charAt(i);
  }
  for (s = 0; s < 6; ++s)
    r = Wt(r);
  for (r ^= 1, s = 0; s < 6; ++s) {
    var c = r >> (5 - s) * 5 & 31;
    o += Or.charAt(c);
  }
  return o;
}
function _a(e, t) {
  if (t = t || 90, e.length < 8)
    return e + " too short";
  if (e.length > t)
    return "Exceeds length limit";
  var n = e.toLowerCase(), r = e.toUpperCase();
  if (e !== n && e !== r)
    return "Mixed-case string " + e;
  e = n;
  var o = e.lastIndexOf("1");
  if (o === -1)
    return "No separator character for " + e;
  if (o === 0)
    return "Missing prefix for " + e;
  var s = e.slice(0, o), i = e.slice(o + 1);
  if (i.length < 6)
    return "Data too short";
  var c = ka(s);
  if (typeof c == "string")
    return c;
  for (var a = [], u = 0; u < i.length; ++u) {
    var d = i.charAt(u), g = ys[d];
    if (g === void 0)
      return "Unknown character " + d;
    c = Wt(c) ^ g, !(u + 6 >= i.length) && a.push(g);
  }
  return c !== 1 ? "Invalid checksum for " + e : { prefix: s, words: a };
}
function Bd() {
  var e = _a.apply(null, arguments);
  if (typeof e == "object")
    return e;
}
function Rd(e) {
  var t = _a.apply(null, arguments);
  if (typeof t == "object")
    return t;
  throw new Error(t);
}
function Lr(e, t, n, r) {
  for (var o = 0, s = 0, i = (1 << n) - 1, c = [], a = 0; a < e.length; ++a)
    for (o = o << t | e[a], s += t; s >= n; )
      s -= n, c.push(o >> s & i);
  if (r)
    s > 0 && c.push(o << n - s & i);
  else {
    if (s >= t)
      return "Excess padding";
    if (o << n - s & i)
      return "Non-zero padding";
  }
  return c;
}
function Id(e) {
  var t = Lr(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
}
function $d(e) {
  var t = Lr(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function Nd(e) {
  var t = Lr(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function xd(e) {
  var t = Lr(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
var Dd = {
  decodeUnsafe: Bd,
  decode: Rd,
  encode: jd,
  toWordsUnsafe: Id,
  toWords: $d,
  fromWordsUnsafe: Nd,
  fromWords: xd
}, Ud = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), qd = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Hd = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Ud(t, e, n);
  return qd(t, e), t;
};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.normalizeBech32 = dt.fromBech32 = dt.toBech32 = void 0;
const jr = Hd(Dd);
function Sa(e, t, n) {
  return jr.encode(e, jr.toWords(t), n);
}
dt.toBech32 = Sa;
function Pa(e, t = 1 / 0) {
  const n = jr.decode(e, t);
  return {
    prefix: n.prefix,
    data: new Uint8Array(jr.fromWords(n.words))
  };
}
dt.fromBech32 = Pa;
function Vd(e) {
  const { prefix: t, data: n } = Pa(e);
  return Sa(t, n);
}
dt.normalizeBech32 = Vd;
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.fromHex = zt.toHex = void 0;
function Fd(e) {
  let t = "";
  for (const n of e)
    t += ("0" + n.toString(16)).slice(-2);
  return t;
}
zt.toHex = Fd;
function Wd(e) {
  if (e.length % 2 !== 0)
    throw new Error("hex string length must be a multiple of 2");
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < t.length; n++) {
    const r = 2 * n, o = e.slice(r, r + 2);
    if (!o.match(/[0-9a-f]{2}/i))
      throw new Error("hex string contains invalid characters");
    t[n] = parseInt(o, 16);
  }
  return t;
}
zt.fromHex = Wd;
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.toRfc3339 = Kt.fromRfc3339 = void 0;
const Jd = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;
function xt(e, t = 2) {
  return e.toString().padStart(t, "0");
}
function Gd(e) {
  const t = Jd.exec(e);
  if (!t)
    throw new Error("Date string is not in RFC3339 format");
  const n = +t[1], r = +t[2], o = +t[3], s = +t[4], i = +t[5], c = +t[6], a = t[7] ? Math.floor(+t[7] * 1e3) : 0;
  let u, d, g;
  t[8] === "Z" ? (u = 1, d = 0, g = 0) : (u = t[8].substring(0, 1) === "-" ? -1 : 1, d = +t[8].substring(1, 3), g = +t[8].substring(4, 6));
  const M = u * (d * 60 + g) * 60, k = /* @__PURE__ */ new Date();
  return k.setUTCFullYear(n, r - 1, o), k.setUTCHours(s, i, c, a), new Date(k.getTime() - M * 1e3);
}
Kt.fromRfc3339 = Gd;
function Ld(e) {
  const t = e.getUTCFullYear(), n = xt(e.getUTCMonth() + 1), r = xt(e.getUTCDate()), o = xt(e.getUTCHours()), s = xt(e.getUTCMinutes()), i = xt(e.getUTCSeconds()), c = xt(e.getUTCMilliseconds(), 3);
  return `${t}-${n}-${r}T${o}:${s}:${i}.${c}Z`;
}
Kt.toRfc3339 = Ld;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.fromUtf8 = Qt.toUtf8 = void 0;
function zd(e) {
  return new TextEncoder().encode(e);
}
Qt.toUtf8 = zd;
function Kd(e, t = !1) {
  const n = !t;
  return new TextDecoder("utf-8", { fatal: n }).decode(e);
}
Qt.fromUtf8 = Kd;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.toUtf8 = e.fromUtf8 = e.toRfc3339 = e.fromRfc3339 = e.toHex = e.fromHex = e.toBech32 = e.normalizeBech32 = e.fromBech32 = e.toBase64 = e.fromBase64 = e.toAscii = e.fromAscii = void 0;
  var t = Gt;
  Object.defineProperty(e, "fromAscii", { enumerable: !0, get: function() {
    return t.fromAscii;
  } }), Object.defineProperty(e, "toAscii", { enumerable: !0, get: function() {
    return t.toAscii;
  } });
  var n = Lt;
  Object.defineProperty(e, "fromBase64", { enumerable: !0, get: function() {
    return n.fromBase64;
  } }), Object.defineProperty(e, "toBase64", { enumerable: !0, get: function() {
    return n.toBase64;
  } });
  var r = dt;
  Object.defineProperty(e, "fromBech32", { enumerable: !0, get: function() {
    return r.fromBech32;
  } }), Object.defineProperty(e, "normalizeBech32", { enumerable: !0, get: function() {
    return r.normalizeBech32;
  } }), Object.defineProperty(e, "toBech32", { enumerable: !0, get: function() {
    return r.toBech32;
  } });
  var o = zt;
  Object.defineProperty(e, "fromHex", { enumerable: !0, get: function() {
    return o.fromHex;
  } }), Object.defineProperty(e, "toHex", { enumerable: !0, get: function() {
    return o.toHex;
  } });
  var s = Kt;
  Object.defineProperty(e, "fromRfc3339", { enumerable: !0, get: function() {
    return s.fromRfc3339;
  } }), Object.defineProperty(e, "toRfc3339", { enumerable: !0, get: function() {
    return s.toRfc3339;
  } });
  var i = Qt;
  Object.defineProperty(e, "fromUtf8", { enumerable: !0, get: function() {
    return i.fromUtf8;
  } }), Object.defineProperty(e, "toUtf8", { enumerable: !0, get: function() {
    return i.toUtf8;
  } });
})(N);
var fe = {}, Z = {}, Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.arrayContentStartsWith = Zt.arrayContentEquals = void 0;
function Qd(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; ++n)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
Zt.arrayContentEquals = Qd;
function Zd(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; ++n)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
Zt.arrayContentStartsWith = Zd;
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.assertDefinedAndNotNull = lt.assertDefined = lt.assert = void 0;
function Xd(e, t) {
  if (!e)
    throw new Error(t || "condition is not truthy");
}
lt.assert = Xd;
function Yd(e, t) {
  if (e === void 0)
    throw new Error(t ?? "value is undefined");
}
lt.assertDefined = Yd;
function el(e, t) {
  if (e == null)
    throw new Error(t ?? "value is undefined or null");
}
lt.assertDefinedAndNotNull = el;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.sleep = void 0;
async function tl(e) {
  return new Promise((t) => setTimeout(t, e));
}
zr.sleep = tl;
var mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.isDefined = mt.isUint8Array = mt.isNonNullObject = void 0;
function Aa(e) {
  return typeof e == "object" && e !== null;
}
mt.isNonNullObject = Aa;
function nl(e) {
  return !(!Aa(e) || Object.prototype.toString.call(e) !== "[object Uint8Array]" || typeof et.Buffer < "u" && typeof et.Buffer.isBuffer < "u" && et.Buffer.isBuffer(e));
}
mt.isUint8Array = nl;
function rl(e) {
  return e !== void 0;
}
mt.isDefined = rl;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUint8Array = e.isNonNullObject = e.isDefined = e.sleep = e.assertDefinedAndNotNull = e.assertDefined = e.assert = e.arrayContentStartsWith = e.arrayContentEquals = void 0;
  var t = Zt;
  Object.defineProperty(e, "arrayContentEquals", { enumerable: !0, get: function() {
    return t.arrayContentEquals;
  } }), Object.defineProperty(e, "arrayContentStartsWith", { enumerable: !0, get: function() {
    return t.arrayContentStartsWith;
  } });
  var n = lt;
  Object.defineProperty(e, "assert", { enumerable: !0, get: function() {
    return n.assert;
  } }), Object.defineProperty(e, "assertDefined", { enumerable: !0, get: function() {
    return n.assertDefined;
  } }), Object.defineProperty(e, "assertDefinedAndNotNull", { enumerable: !0, get: function() {
    return n.assertDefinedAndNotNull;
  } });
  var r = zr;
  Object.defineProperty(e, "sleep", { enumerable: !0, get: function() {
    return r.sleep;
  } });
  var o = mt;
  Object.defineProperty(e, "isDefined", { enumerable: !0, get: function() {
    return o.isDefined;
  } }), Object.defineProperty(e, "isNonNullObject", { enumerable: !0, get: function() {
    return o.isNonNullObject;
  } }), Object.defineProperty(e, "isUint8Array", { enumerable: !0, get: function() {
    return o.isUint8Array;
  } });
})(Z);
var ol = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), sl = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), il = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && ol(t, e, n);
  return sl(t, e), t;
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.pbkdf2Sha512 = fe.pbkdf2Sha512Noble = fe.pbkdf2Sha512NodeCrypto = fe.pbkdf2Sha512Subtle = fe.getSubtle = fe.getNodeCrypto = void 0;
const Et = Z, al = wu, cl = fa;
async function Ta() {
  try {
    const e = await Promise.resolve().then(() => il(ma()));
    return typeof e == "object" && Object.keys(e).length <= 1 ? void 0 : e;
  } catch {
    return;
  }
}
fe.getNodeCrypto = Ta;
async function Ea() {
  var t, n, r;
  let e = (t = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : t.subtle;
  return e || (e = (r = (n = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : n.webcrypto) == null ? void 0 : r.subtle), e;
}
fe.getSubtle = Ea;
async function Ca(e, t, n, r, o) {
  return (0, Et.assert)(e, "Argument subtle is falsy"), (0, Et.assert)(typeof e == "object", "Argument subtle is not of type object"), (0, Et.assert)(typeof e.importKey == "function", "subtle.importKey is not a function"), (0, Et.assert)(typeof e.deriveBits == "function", "subtle.deriveBits is not a function"), e.importKey("raw", t, { name: "PBKDF2" }, !1, ["deriveBits"]).then((s) => e.deriveBits({
    name: "PBKDF2",
    salt: n,
    iterations: r,
    hash: { name: "SHA-512" }
  }, s, o * 8).then((i) => new Uint8Array(i)));
}
fe.pbkdf2Sha512Subtle = Ca;
async function Ma(e, t, n, r, o) {
  return (0, Et.assert)(e, "Argument nodeCrypto is falsy"), (0, Et.assert)(typeof e == "object", "Argument nodeCrypto is not of type object"), (0, Et.assert)(typeof e.pbkdf2 == "function", "nodeCrypto.pbkdf2 is not a function"), new Promise((s, i) => {
    e.pbkdf2(t, n, r, o, "sha512", (c, a) => {
      c ? i(c) : s(Uint8Array.from(a));
    });
  });
}
fe.pbkdf2Sha512NodeCrypto = Ma;
async function Oa(e, t, n, r) {
  return (0, al.pbkdf2Async)(cl.sha512, e, t, { c: n, dkLen: r });
}
fe.pbkdf2Sha512Noble = Oa;
async function ul(e, t, n, r) {
  const o = await Ea();
  if (o)
    return Ca(o, e, t, n, r);
  {
    const s = await Ta();
    return s ? Ma(s, e, t, n, r) : Oa(e, t, n, r);
  }
}
fe.pbkdf2Sha512 = ul;
var xe = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.toRealUint8Array = void 0;
function dl(e) {
  return e instanceof Uint8Array ? e : Uint8Array.from(e);
}
kn.toRealUint8Array = dl;
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.sha512 = xe.Sha512 = xe.sha256 = xe.Sha256 = void 0;
const ll = ku, ml = fa, ja = kn;
class Ba {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = ll.sha256.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, ja.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
xe.Sha256 = Ba;
function fl(e) {
  return new Ba(e).digest();
}
xe.sha256 = fl;
class Ra {
  constructor(t) {
    this.blockSize = 1024 / 8, this.impl = ml.sha512.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, ja.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
xe.Sha512 = Ra;
function hl(e) {
  return new Ra(e).digest();
}
xe.sha512 = hl;
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.Bip39 = Ge.EnglishMnemonic = Ge.mnemonicToEntropy = Ge.entropyToMnemonic = void 0;
const ji = N, pl = fe, gl = xe, Hs = [
  "abandon",
  "ability",
  "able",
  "about",
  "above",
  "absent",
  "absorb",
  "abstract",
  "absurd",
  "abuse",
  "access",
  "accident",
  "account",
  "accuse",
  "achieve",
  "acid",
  "acoustic",
  "acquire",
  "across",
  "act",
  "action",
  "actor",
  "actress",
  "actual",
  "adapt",
  "add",
  "addict",
  "address",
  "adjust",
  "admit",
  "adult",
  "advance",
  "advice",
  "aerobic",
  "affair",
  "afford",
  "afraid",
  "again",
  "age",
  "agent",
  "agree",
  "ahead",
  "aim",
  "air",
  "airport",
  "aisle",
  "alarm",
  "album",
  "alcohol",
  "alert",
  "alien",
  "all",
  "alley",
  "allow",
  "almost",
  "alone",
  "alpha",
  "already",
  "also",
  "alter",
  "always",
  "amateur",
  "amazing",
  "among",
  "amount",
  "amused",
  "analyst",
  "anchor",
  "ancient",
  "anger",
  "angle",
  "angry",
  "animal",
  "ankle",
  "announce",
  "annual",
  "another",
  "answer",
  "antenna",
  "antique",
  "anxiety",
  "any",
  "apart",
  "apology",
  "appear",
  "apple",
  "approve",
  "april",
  "arch",
  "arctic",
  "area",
  "arena",
  "argue",
  "arm",
  "armed",
  "armor",
  "army",
  "around",
  "arrange",
  "arrest",
  "arrive",
  "arrow",
  "art",
  "artefact",
  "artist",
  "artwork",
  "ask",
  "aspect",
  "assault",
  "asset",
  "assist",
  "assume",
  "asthma",
  "athlete",
  "atom",
  "attack",
  "attend",
  "attitude",
  "attract",
  "auction",
  "audit",
  "august",
  "aunt",
  "author",
  "auto",
  "autumn",
  "average",
  "avocado",
  "avoid",
  "awake",
  "aware",
  "away",
  "awesome",
  "awful",
  "awkward",
  "axis",
  "baby",
  "bachelor",
  "bacon",
  "badge",
  "bag",
  "balance",
  "balcony",
  "ball",
  "bamboo",
  "banana",
  "banner",
  "bar",
  "barely",
  "bargain",
  "barrel",
  "base",
  "basic",
  "basket",
  "battle",
  "beach",
  "bean",
  "beauty",
  "because",
  "become",
  "beef",
  "before",
  "begin",
  "behave",
  "behind",
  "believe",
  "below",
  "belt",
  "bench",
  "benefit",
  "best",
  "betray",
  "better",
  "between",
  "beyond",
  "bicycle",
  "bid",
  "bike",
  "bind",
  "biology",
  "bird",
  "birth",
  "bitter",
  "black",
  "blade",
  "blame",
  "blanket",
  "blast",
  "bleak",
  "bless",
  "blind",
  "blood",
  "blossom",
  "blouse",
  "blue",
  "blur",
  "blush",
  "board",
  "boat",
  "body",
  "boil",
  "bomb",
  "bone",
  "bonus",
  "book",
  "boost",
  "border",
  "boring",
  "borrow",
  "boss",
  "bottom",
  "bounce",
  "box",
  "boy",
  "bracket",
  "brain",
  "brand",
  "brass",
  "brave",
  "bread",
  "breeze",
  "brick",
  "bridge",
  "brief",
  "bright",
  "bring",
  "brisk",
  "broccoli",
  "broken",
  "bronze",
  "broom",
  "brother",
  "brown",
  "brush",
  "bubble",
  "buddy",
  "budget",
  "buffalo",
  "build",
  "bulb",
  "bulk",
  "bullet",
  "bundle",
  "bunker",
  "burden",
  "burger",
  "burst",
  "bus",
  "business",
  "busy",
  "butter",
  "buyer",
  "buzz",
  "cabbage",
  "cabin",
  "cable",
  "cactus",
  "cage",
  "cake",
  "call",
  "calm",
  "camera",
  "camp",
  "can",
  "canal",
  "cancel",
  "candy",
  "cannon",
  "canoe",
  "canvas",
  "canyon",
  "capable",
  "capital",
  "captain",
  "car",
  "carbon",
  "card",
  "cargo",
  "carpet",
  "carry",
  "cart",
  "case",
  "cash",
  "casino",
  "castle",
  "casual",
  "cat",
  "catalog",
  "catch",
  "category",
  "cattle",
  "caught",
  "cause",
  "caution",
  "cave",
  "ceiling",
  "celery",
  "cement",
  "census",
  "century",
  "cereal",
  "certain",
  "chair",
  "chalk",
  "champion",
  "change",
  "chaos",
  "chapter",
  "charge",
  "chase",
  "chat",
  "cheap",
  "check",
  "cheese",
  "chef",
  "cherry",
  "chest",
  "chicken",
  "chief",
  "child",
  "chimney",
  "choice",
  "choose",
  "chronic",
  "chuckle",
  "chunk",
  "churn",
  "cigar",
  "cinnamon",
  "circle",
  "citizen",
  "city",
  "civil",
  "claim",
  "clap",
  "clarify",
  "claw",
  "clay",
  "clean",
  "clerk",
  "clever",
  "click",
  "client",
  "cliff",
  "climb",
  "clinic",
  "clip",
  "clock",
  "clog",
  "close",
  "cloth",
  "cloud",
  "clown",
  "club",
  "clump",
  "cluster",
  "clutch",
  "coach",
  "coast",
  "coconut",
  "code",
  "coffee",
  "coil",
  "coin",
  "collect",
  "color",
  "column",
  "combine",
  "come",
  "comfort",
  "comic",
  "common",
  "company",
  "concert",
  "conduct",
  "confirm",
  "congress",
  "connect",
  "consider",
  "control",
  "convince",
  "cook",
  "cool",
  "copper",
  "copy",
  "coral",
  "core",
  "corn",
  "correct",
  "cost",
  "cotton",
  "couch",
  "country",
  "couple",
  "course",
  "cousin",
  "cover",
  "coyote",
  "crack",
  "cradle",
  "craft",
  "cram",
  "crane",
  "crash",
  "crater",
  "crawl",
  "crazy",
  "cream",
  "credit",
  "creek",
  "crew",
  "cricket",
  "crime",
  "crisp",
  "critic",
  "crop",
  "cross",
  "crouch",
  "crowd",
  "crucial",
  "cruel",
  "cruise",
  "crumble",
  "crunch",
  "crush",
  "cry",
  "crystal",
  "cube",
  "culture",
  "cup",
  "cupboard",
  "curious",
  "current",
  "curtain",
  "curve",
  "cushion",
  "custom",
  "cute",
  "cycle",
  "dad",
  "damage",
  "damp",
  "dance",
  "danger",
  "daring",
  "dash",
  "daughter",
  "dawn",
  "day",
  "deal",
  "debate",
  "debris",
  "decade",
  "december",
  "decide",
  "decline",
  "decorate",
  "decrease",
  "deer",
  "defense",
  "define",
  "defy",
  "degree",
  "delay",
  "deliver",
  "demand",
  "demise",
  "denial",
  "dentist",
  "deny",
  "depart",
  "depend",
  "deposit",
  "depth",
  "deputy",
  "derive",
  "describe",
  "desert",
  "design",
  "desk",
  "despair",
  "destroy",
  "detail",
  "detect",
  "develop",
  "device",
  "devote",
  "diagram",
  "dial",
  "diamond",
  "diary",
  "dice",
  "diesel",
  "diet",
  "differ",
  "digital",
  "dignity",
  "dilemma",
  "dinner",
  "dinosaur",
  "direct",
  "dirt",
  "disagree",
  "discover",
  "disease",
  "dish",
  "dismiss",
  "disorder",
  "display",
  "distance",
  "divert",
  "divide",
  "divorce",
  "dizzy",
  "doctor",
  "document",
  "dog",
  "doll",
  "dolphin",
  "domain",
  "donate",
  "donkey",
  "donor",
  "door",
  "dose",
  "double",
  "dove",
  "draft",
  "dragon",
  "drama",
  "drastic",
  "draw",
  "dream",
  "dress",
  "drift",
  "drill",
  "drink",
  "drip",
  "drive",
  "drop",
  "drum",
  "dry",
  "duck",
  "dumb",
  "dune",
  "during",
  "dust",
  "dutch",
  "duty",
  "dwarf",
  "dynamic",
  "eager",
  "eagle",
  "early",
  "earn",
  "earth",
  "easily",
  "east",
  "easy",
  "echo",
  "ecology",
  "economy",
  "edge",
  "edit",
  "educate",
  "effort",
  "egg",
  "eight",
  "either",
  "elbow",
  "elder",
  "electric",
  "elegant",
  "element",
  "elephant",
  "elevator",
  "elite",
  "else",
  "embark",
  "embody",
  "embrace",
  "emerge",
  "emotion",
  "employ",
  "empower",
  "empty",
  "enable",
  "enact",
  "end",
  "endless",
  "endorse",
  "enemy",
  "energy",
  "enforce",
  "engage",
  "engine",
  "enhance",
  "enjoy",
  "enlist",
  "enough",
  "enrich",
  "enroll",
  "ensure",
  "enter",
  "entire",
  "entry",
  "envelope",
  "episode",
  "equal",
  "equip",
  "era",
  "erase",
  "erode",
  "erosion",
  "error",
  "erupt",
  "escape",
  "essay",
  "essence",
  "estate",
  "eternal",
  "ethics",
  "evidence",
  "evil",
  "evoke",
  "evolve",
  "exact",
  "example",
  "excess",
  "exchange",
  "excite",
  "exclude",
  "excuse",
  "execute",
  "exercise",
  "exhaust",
  "exhibit",
  "exile",
  "exist",
  "exit",
  "exotic",
  "expand",
  "expect",
  "expire",
  "explain",
  "expose",
  "express",
  "extend",
  "extra",
  "eye",
  "eyebrow",
  "fabric",
  "face",
  "faculty",
  "fade",
  "faint",
  "faith",
  "fall",
  "false",
  "fame",
  "family",
  "famous",
  "fan",
  "fancy",
  "fantasy",
  "farm",
  "fashion",
  "fat",
  "fatal",
  "father",
  "fatigue",
  "fault",
  "favorite",
  "feature",
  "february",
  "federal",
  "fee",
  "feed",
  "feel",
  "female",
  "fence",
  "festival",
  "fetch",
  "fever",
  "few",
  "fiber",
  "fiction",
  "field",
  "figure",
  "file",
  "film",
  "filter",
  "final",
  "find",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "first",
  "fiscal",
  "fish",
  "fit",
  "fitness",
  "fix",
  "flag",
  "flame",
  "flash",
  "flat",
  "flavor",
  "flee",
  "flight",
  "flip",
  "float",
  "flock",
  "floor",
  "flower",
  "fluid",
  "flush",
  "fly",
  "foam",
  "focus",
  "fog",
  "foil",
  "fold",
  "follow",
  "food",
  "foot",
  "force",
  "forest",
  "forget",
  "fork",
  "fortune",
  "forum",
  "forward",
  "fossil",
  "foster",
  "found",
  "fox",
  "fragile",
  "frame",
  "frequent",
  "fresh",
  "friend",
  "fringe",
  "frog",
  "front",
  "frost",
  "frown",
  "frozen",
  "fruit",
  "fuel",
  "fun",
  "funny",
  "furnace",
  "fury",
  "future",
  "gadget",
  "gain",
  "galaxy",
  "gallery",
  "game",
  "gap",
  "garage",
  "garbage",
  "garden",
  "garlic",
  "garment",
  "gas",
  "gasp",
  "gate",
  "gather",
  "gauge",
  "gaze",
  "general",
  "genius",
  "genre",
  "gentle",
  "genuine",
  "gesture",
  "ghost",
  "giant",
  "gift",
  "giggle",
  "ginger",
  "giraffe",
  "girl",
  "give",
  "glad",
  "glance",
  "glare",
  "glass",
  "glide",
  "glimpse",
  "globe",
  "gloom",
  "glory",
  "glove",
  "glow",
  "glue",
  "goat",
  "goddess",
  "gold",
  "good",
  "goose",
  "gorilla",
  "gospel",
  "gossip",
  "govern",
  "gown",
  "grab",
  "grace",
  "grain",
  "grant",
  "grape",
  "grass",
  "gravity",
  "great",
  "green",
  "grid",
  "grief",
  "grit",
  "grocery",
  "group",
  "grow",
  "grunt",
  "guard",
  "guess",
  "guide",
  "guilt",
  "guitar",
  "gun",
  "gym",
  "habit",
  "hair",
  "half",
  "hammer",
  "hamster",
  "hand",
  "happy",
  "harbor",
  "hard",
  "harsh",
  "harvest",
  "hat",
  "have",
  "hawk",
  "hazard",
  "head",
  "health",
  "heart",
  "heavy",
  "hedgehog",
  "height",
  "hello",
  "helmet",
  "help",
  "hen",
  "hero",
  "hidden",
  "high",
  "hill",
  "hint",
  "hip",
  "hire",
  "history",
  "hobby",
  "hockey",
  "hold",
  "hole",
  "holiday",
  "hollow",
  "home",
  "honey",
  "hood",
  "hope",
  "horn",
  "horror",
  "horse",
  "hospital",
  "host",
  "hotel",
  "hour",
  "hover",
  "hub",
  "huge",
  "human",
  "humble",
  "humor",
  "hundred",
  "hungry",
  "hunt",
  "hurdle",
  "hurry",
  "hurt",
  "husband",
  "hybrid",
  "ice",
  "icon",
  "idea",
  "identify",
  "idle",
  "ignore",
  "ill",
  "illegal",
  "illness",
  "image",
  "imitate",
  "immense",
  "immune",
  "impact",
  "impose",
  "improve",
  "impulse",
  "inch",
  "include",
  "income",
  "increase",
  "index",
  "indicate",
  "indoor",
  "industry",
  "infant",
  "inflict",
  "inform",
  "inhale",
  "inherit",
  "initial",
  "inject",
  "injury",
  "inmate",
  "inner",
  "innocent",
  "input",
  "inquiry",
  "insane",
  "insect",
  "inside",
  "inspire",
  "install",
  "intact",
  "interest",
  "into",
  "invest",
  "invite",
  "involve",
  "iron",
  "island",
  "isolate",
  "issue",
  "item",
  "ivory",
  "jacket",
  "jaguar",
  "jar",
  "jazz",
  "jealous",
  "jeans",
  "jelly",
  "jewel",
  "job",
  "join",
  "joke",
  "journey",
  "joy",
  "judge",
  "juice",
  "jump",
  "jungle",
  "junior",
  "junk",
  "just",
  "kangaroo",
  "keen",
  "keep",
  "ketchup",
  "key",
  "kick",
  "kid",
  "kidney",
  "kind",
  "kingdom",
  "kiss",
  "kit",
  "kitchen",
  "kite",
  "kitten",
  "kiwi",
  "knee",
  "knife",
  "knock",
  "know",
  "lab",
  "label",
  "labor",
  "ladder",
  "lady",
  "lake",
  "lamp",
  "language",
  "laptop",
  "large",
  "later",
  "latin",
  "laugh",
  "laundry",
  "lava",
  "law",
  "lawn",
  "lawsuit",
  "layer",
  "lazy",
  "leader",
  "leaf",
  "learn",
  "leave",
  "lecture",
  "left",
  "leg",
  "legal",
  "legend",
  "leisure",
  "lemon",
  "lend",
  "length",
  "lens",
  "leopard",
  "lesson",
  "letter",
  "level",
  "liar",
  "liberty",
  "library",
  "license",
  "life",
  "lift",
  "light",
  "like",
  "limb",
  "limit",
  "link",
  "lion",
  "liquid",
  "list",
  "little",
  "live",
  "lizard",
  "load",
  "loan",
  "lobster",
  "local",
  "lock",
  "logic",
  "lonely",
  "long",
  "loop",
  "lottery",
  "loud",
  "lounge",
  "love",
  "loyal",
  "lucky",
  "luggage",
  "lumber",
  "lunar",
  "lunch",
  "luxury",
  "lyrics",
  "machine",
  "mad",
  "magic",
  "magnet",
  "maid",
  "mail",
  "main",
  "major",
  "make",
  "mammal",
  "man",
  "manage",
  "mandate",
  "mango",
  "mansion",
  "manual",
  "maple",
  "marble",
  "march",
  "margin",
  "marine",
  "market",
  "marriage",
  "mask",
  "mass",
  "master",
  "match",
  "material",
  "math",
  "matrix",
  "matter",
  "maximum",
  "maze",
  "meadow",
  "mean",
  "measure",
  "meat",
  "mechanic",
  "medal",
  "media",
  "melody",
  "melt",
  "member",
  "memory",
  "mention",
  "menu",
  "mercy",
  "merge",
  "merit",
  "merry",
  "mesh",
  "message",
  "metal",
  "method",
  "middle",
  "midnight",
  "milk",
  "million",
  "mimic",
  "mind",
  "minimum",
  "minor",
  "minute",
  "miracle",
  "mirror",
  "misery",
  "miss",
  "mistake",
  "mix",
  "mixed",
  "mixture",
  "mobile",
  "model",
  "modify",
  "mom",
  "moment",
  "monitor",
  "monkey",
  "monster",
  "month",
  "moon",
  "moral",
  "more",
  "morning",
  "mosquito",
  "mother",
  "motion",
  "motor",
  "mountain",
  "mouse",
  "move",
  "movie",
  "much",
  "muffin",
  "mule",
  "multiply",
  "muscle",
  "museum",
  "mushroom",
  "music",
  "must",
  "mutual",
  "myself",
  "mystery",
  "myth",
  "naive",
  "name",
  "napkin",
  "narrow",
  "nasty",
  "nation",
  "nature",
  "near",
  "neck",
  "need",
  "negative",
  "neglect",
  "neither",
  "nephew",
  "nerve",
  "nest",
  "net",
  "network",
  "neutral",
  "never",
  "news",
  "next",
  "nice",
  "night",
  "noble",
  "noise",
  "nominee",
  "noodle",
  "normal",
  "north",
  "nose",
  "notable",
  "note",
  "nothing",
  "notice",
  "novel",
  "now",
  "nuclear",
  "number",
  "nurse",
  "nut",
  "oak",
  "obey",
  "object",
  "oblige",
  "obscure",
  "observe",
  "obtain",
  "obvious",
  "occur",
  "ocean",
  "october",
  "odor",
  "off",
  "offer",
  "office",
  "often",
  "oil",
  "okay",
  "old",
  "olive",
  "olympic",
  "omit",
  "once",
  "one",
  "onion",
  "online",
  "only",
  "open",
  "opera",
  "opinion",
  "oppose",
  "option",
  "orange",
  "orbit",
  "orchard",
  "order",
  "ordinary",
  "organ",
  "orient",
  "original",
  "orphan",
  "ostrich",
  "other",
  "outdoor",
  "outer",
  "output",
  "outside",
  "oval",
  "oven",
  "over",
  "own",
  "owner",
  "oxygen",
  "oyster",
  "ozone",
  "pact",
  "paddle",
  "page",
  "pair",
  "palace",
  "palm",
  "panda",
  "panel",
  "panic",
  "panther",
  "paper",
  "parade",
  "parent",
  "park",
  "parrot",
  "party",
  "pass",
  "patch",
  "path",
  "patient",
  "patrol",
  "pattern",
  "pause",
  "pave",
  "payment",
  "peace",
  "peanut",
  "pear",
  "peasant",
  "pelican",
  "pen",
  "penalty",
  "pencil",
  "people",
  "pepper",
  "perfect",
  "permit",
  "person",
  "pet",
  "phone",
  "photo",
  "phrase",
  "physical",
  "piano",
  "picnic",
  "picture",
  "piece",
  "pig",
  "pigeon",
  "pill",
  "pilot",
  "pink",
  "pioneer",
  "pipe",
  "pistol",
  "pitch",
  "pizza",
  "place",
  "planet",
  "plastic",
  "plate",
  "play",
  "please",
  "pledge",
  "pluck",
  "plug",
  "plunge",
  "poem",
  "poet",
  "point",
  "polar",
  "pole",
  "police",
  "pond",
  "pony",
  "pool",
  "popular",
  "portion",
  "position",
  "possible",
  "post",
  "potato",
  "pottery",
  "poverty",
  "powder",
  "power",
  "practice",
  "praise",
  "predict",
  "prefer",
  "prepare",
  "present",
  "pretty",
  "prevent",
  "price",
  "pride",
  "primary",
  "print",
  "priority",
  "prison",
  "private",
  "prize",
  "problem",
  "process",
  "produce",
  "profit",
  "program",
  "project",
  "promote",
  "proof",
  "property",
  "prosper",
  "protect",
  "proud",
  "provide",
  "public",
  "pudding",
  "pull",
  "pulp",
  "pulse",
  "pumpkin",
  "punch",
  "pupil",
  "puppy",
  "purchase",
  "purity",
  "purpose",
  "purse",
  "push",
  "put",
  "puzzle",
  "pyramid",
  "quality",
  "quantum",
  "quarter",
  "question",
  "quick",
  "quit",
  "quiz",
  "quote",
  "rabbit",
  "raccoon",
  "race",
  "rack",
  "radar",
  "radio",
  "rail",
  "rain",
  "raise",
  "rally",
  "ramp",
  "ranch",
  "random",
  "range",
  "rapid",
  "rare",
  "rate",
  "rather",
  "raven",
  "raw",
  "razor",
  "ready",
  "real",
  "reason",
  "rebel",
  "rebuild",
  "recall",
  "receive",
  "recipe",
  "record",
  "recycle",
  "reduce",
  "reflect",
  "reform",
  "refuse",
  "region",
  "regret",
  "regular",
  "reject",
  "relax",
  "release",
  "relief",
  "rely",
  "remain",
  "remember",
  "remind",
  "remove",
  "render",
  "renew",
  "rent",
  "reopen",
  "repair",
  "repeat",
  "replace",
  "report",
  "require",
  "rescue",
  "resemble",
  "resist",
  "resource",
  "response",
  "result",
  "retire",
  "retreat",
  "return",
  "reunion",
  "reveal",
  "review",
  "reward",
  "rhythm",
  "rib",
  "ribbon",
  "rice",
  "rich",
  "ride",
  "ridge",
  "rifle",
  "right",
  "rigid",
  "ring",
  "riot",
  "ripple",
  "risk",
  "ritual",
  "rival",
  "river",
  "road",
  "roast",
  "robot",
  "robust",
  "rocket",
  "romance",
  "roof",
  "rookie",
  "room",
  "rose",
  "rotate",
  "rough",
  "round",
  "route",
  "royal",
  "rubber",
  "rude",
  "rug",
  "rule",
  "run",
  "runway",
  "rural",
  "sad",
  "saddle",
  "sadness",
  "safe",
  "sail",
  "salad",
  "salmon",
  "salon",
  "salt",
  "salute",
  "same",
  "sample",
  "sand",
  "satisfy",
  "satoshi",
  "sauce",
  "sausage",
  "save",
  "say",
  "scale",
  "scan",
  "scare",
  "scatter",
  "scene",
  "scheme",
  "school",
  "science",
  "scissors",
  "scorpion",
  "scout",
  "scrap",
  "screen",
  "script",
  "scrub",
  "sea",
  "search",
  "season",
  "seat",
  "second",
  "secret",
  "section",
  "security",
  "seed",
  "seek",
  "segment",
  "select",
  "sell",
  "seminar",
  "senior",
  "sense",
  "sentence",
  "series",
  "service",
  "session",
  "settle",
  "setup",
  "seven",
  "shadow",
  "shaft",
  "shallow",
  "share",
  "shed",
  "shell",
  "sheriff",
  "shield",
  "shift",
  "shine",
  "ship",
  "shiver",
  "shock",
  "shoe",
  "shoot",
  "shop",
  "short",
  "shoulder",
  "shove",
  "shrimp",
  "shrug",
  "shuffle",
  "shy",
  "sibling",
  "sick",
  "side",
  "siege",
  "sight",
  "sign",
  "silent",
  "silk",
  "silly",
  "silver",
  "similar",
  "simple",
  "since",
  "sing",
  "siren",
  "sister",
  "situate",
  "six",
  "size",
  "skate",
  "sketch",
  "ski",
  "skill",
  "skin",
  "skirt",
  "skull",
  "slab",
  "slam",
  "sleep",
  "slender",
  "slice",
  "slide",
  "slight",
  "slim",
  "slogan",
  "slot",
  "slow",
  "slush",
  "small",
  "smart",
  "smile",
  "smoke",
  "smooth",
  "snack",
  "snake",
  "snap",
  "sniff",
  "snow",
  "soap",
  "soccer",
  "social",
  "sock",
  "soda",
  "soft",
  "solar",
  "soldier",
  "solid",
  "solution",
  "solve",
  "someone",
  "song",
  "soon",
  "sorry",
  "sort",
  "soul",
  "sound",
  "soup",
  "source",
  "south",
  "space",
  "spare",
  "spatial",
  "spawn",
  "speak",
  "special",
  "speed",
  "spell",
  "spend",
  "sphere",
  "spice",
  "spider",
  "spike",
  "spin",
  "spirit",
  "split",
  "spoil",
  "sponsor",
  "spoon",
  "sport",
  "spot",
  "spray",
  "spread",
  "spring",
  "spy",
  "square",
  "squeeze",
  "squirrel",
  "stable",
  "stadium",
  "staff",
  "stage",
  "stairs",
  "stamp",
  "stand",
  "start",
  "state",
  "stay",
  "steak",
  "steel",
  "stem",
  "step",
  "stereo",
  "stick",
  "still",
  "sting",
  "stock",
  "stomach",
  "stone",
  "stool",
  "story",
  "stove",
  "strategy",
  "street",
  "strike",
  "strong",
  "struggle",
  "student",
  "stuff",
  "stumble",
  "style",
  "subject",
  "submit",
  "subway",
  "success",
  "such",
  "sudden",
  "suffer",
  "sugar",
  "suggest",
  "suit",
  "summer",
  "sun",
  "sunny",
  "sunset",
  "super",
  "supply",
  "supreme",
  "sure",
  "surface",
  "surge",
  "surprise",
  "surround",
  "survey",
  "suspect",
  "sustain",
  "swallow",
  "swamp",
  "swap",
  "swarm",
  "swear",
  "sweet",
  "swift",
  "swim",
  "swing",
  "switch",
  "sword",
  "symbol",
  "symptom",
  "syrup",
  "system",
  "table",
  "tackle",
  "tag",
  "tail",
  "talent",
  "talk",
  "tank",
  "tape",
  "target",
  "task",
  "taste",
  "tattoo",
  "taxi",
  "teach",
  "team",
  "tell",
  "ten",
  "tenant",
  "tennis",
  "tent",
  "term",
  "test",
  "text",
  "thank",
  "that",
  "theme",
  "then",
  "theory",
  "there",
  "they",
  "thing",
  "this",
  "thought",
  "three",
  "thrive",
  "throw",
  "thumb",
  "thunder",
  "ticket",
  "tide",
  "tiger",
  "tilt",
  "timber",
  "time",
  "tiny",
  "tip",
  "tired",
  "tissue",
  "title",
  "toast",
  "tobacco",
  "today",
  "toddler",
  "toe",
  "together",
  "toilet",
  "token",
  "tomato",
  "tomorrow",
  "tone",
  "tongue",
  "tonight",
  "tool",
  "tooth",
  "top",
  "topic",
  "topple",
  "torch",
  "tornado",
  "tortoise",
  "toss",
  "total",
  "tourist",
  "toward",
  "tower",
  "town",
  "toy",
  "track",
  "trade",
  "traffic",
  "tragic",
  "train",
  "transfer",
  "trap",
  "trash",
  "travel",
  "tray",
  "treat",
  "tree",
  "trend",
  "trial",
  "tribe",
  "trick",
  "trigger",
  "trim",
  "trip",
  "trophy",
  "trouble",
  "truck",
  "true",
  "truly",
  "trumpet",
  "trust",
  "truth",
  "try",
  "tube",
  "tuition",
  "tumble",
  "tuna",
  "tunnel",
  "turkey",
  "turn",
  "turtle",
  "twelve",
  "twenty",
  "twice",
  "twin",
  "twist",
  "two",
  "type",
  "typical",
  "ugly",
  "umbrella",
  "unable",
  "unaware",
  "uncle",
  "uncover",
  "under",
  "undo",
  "unfair",
  "unfold",
  "unhappy",
  "uniform",
  "unique",
  "unit",
  "universe",
  "unknown",
  "unlock",
  "until",
  "unusual",
  "unveil",
  "update",
  "upgrade",
  "uphold",
  "upon",
  "upper",
  "upset",
  "urban",
  "urge",
  "usage",
  "use",
  "used",
  "useful",
  "useless",
  "usual",
  "utility",
  "vacant",
  "vacuum",
  "vague",
  "valid",
  "valley",
  "valve",
  "van",
  "vanish",
  "vapor",
  "various",
  "vast",
  "vault",
  "vehicle",
  "velvet",
  "vendor",
  "venture",
  "venue",
  "verb",
  "verify",
  "version",
  "very",
  "vessel",
  "veteran",
  "viable",
  "vibrant",
  "vicious",
  "victory",
  "video",
  "view",
  "village",
  "vintage",
  "violin",
  "virtual",
  "virus",
  "visa",
  "visit",
  "visual",
  "vital",
  "vivid",
  "vocal",
  "voice",
  "void",
  "volcano",
  "volume",
  "vote",
  "voyage",
  "wage",
  "wagon",
  "wait",
  "walk",
  "wall",
  "walnut",
  "want",
  "warfare",
  "warm",
  "warrior",
  "wash",
  "wasp",
  "waste",
  "water",
  "wave",
  "way",
  "wealth",
  "weapon",
  "wear",
  "weasel",
  "weather",
  "web",
  "wedding",
  "weekend",
  "weird",
  "welcome",
  "west",
  "wet",
  "whale",
  "what",
  "wheat",
  "wheel",
  "when",
  "where",
  "whip",
  "whisper",
  "wide",
  "width",
  "wife",
  "wild",
  "will",
  "win",
  "window",
  "wine",
  "wing",
  "wink",
  "winner",
  "winter",
  "wire",
  "wisdom",
  "wise",
  "wish",
  "witness",
  "wolf",
  "woman",
  "wonder",
  "wood",
  "wool",
  "word",
  "work",
  "world",
  "worry",
  "worth",
  "wrap",
  "wreck",
  "wrestle",
  "wrist",
  "write",
  "wrong",
  "yard",
  "year",
  "yellow",
  "you",
  "young",
  "youth",
  "zebra",
  "zero",
  "zone",
  "zoo"
];
function Ia(e) {
  return Array.from(e).map((t) => t.toString(2).padStart(8, "0")).join("");
}
function $a(e) {
  const n = e.length * 8 / 32, r = (0, gl.sha256)(e);
  return Ia(r).slice(0, n);
}
function Na(e) {
  return parseInt(e, 2);
}
const yl = [16, 20, 24, 28, 32], bl = [12, 15, 18, 21, 24];
function xa(e) {
  if (yl.indexOf(e.length) === -1)
    throw new Error("invalid input length");
  const t = Ia(e), n = $a(e);
  return (t + n).match(/(.{11})/g).map((i) => {
    const c = Na(i);
    return Hs[c];
  }).join(" ");
}
Ge.entropyToMnemonic = xa;
const vl = "Invalid number of words", wl = "Found word that is not in the wordlist", kl = "Invalid entropy", _l = "Invalid mnemonic checksum";
function bs(e) {
  return e.normalize("NFKD");
}
function Vs(e) {
  const t = bs(e).split(" ");
  if (!bl.includes(t.length))
    throw new Error(vl);
  const n = t.map((u) => {
    const d = Hs.indexOf(u);
    if (d === -1)
      throw new Error(wl);
    return d.toString(2).padStart(11, "0");
  }).join(""), r = Math.floor(n.length / 33) * 32, o = n.slice(0, r), s = n.slice(r), i = o.match(/(.{1,8})/g).map(Na);
  if (i.length < 16 || i.length > 32 || i.length % 4 !== 0)
    throw new Error(kl);
  const c = Uint8Array.from(i);
  if ($a(c) !== s)
    throw new Error(_l);
  return c;
}
Ge.mnemonicToEntropy = Vs;
class Ct {
  constructor(t) {
    if (!Ct.mnemonicMatcher.test(t))
      throw new Error("Invalid mnemonic format");
    const n = t.split(" "), r = [12, 15, 18, 21, 24];
    if (r.indexOf(n.length) === -1)
      throw new Error(`Invalid word count in mnemonic (allowed: ${r} got: ${n.length})`);
    for (const o of n)
      if (Ct.wordlist.indexOf(o) === -1)
        throw new Error("Mnemonic contains invalid word");
    Vs(t), this.data = t;
  }
  toString() {
    return this.data;
  }
}
Ge.EnglishMnemonic = Ct;
Ct.wordlist = Hs;
Ct.mnemonicMatcher = /^[a-z]+( [a-z]+)*$/;
class Sl {
  /**
   * Encodes raw entropy of length 16, 20, 24, 28 or 32 bytes as an English mnemonic between 12 and 24 words.
   *
   * | Entropy            | Words |
   * |--------------------|-------|
   * | 128 bit (16 bytes) |    12 |
   * | 160 bit (20 bytes) |    15 |
   * | 192 bit (24 bytes) |    18 |
   * | 224 bit (28 bytes) |    21 |
   * | 256 bit (32 bytes) |    24 |
   *
   *
   * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic
   * @param entropy The entropy to be encoded. This must be cryptographically secure.
   */
  static encode(t) {
    return new Ct(xa(t));
  }
  static decode(t) {
    return Vs(t.toString());
  }
  static async mnemonicToSeed(t, n) {
    const r = (0, ji.toUtf8)(bs(t.toString())), o = "mnemonic" + (n ? bs(n) : ""), s = (0, ji.toUtf8)(o);
    return (0, pl.pbkdf2Sha512)(r, s, 2048, 64);
  }
}
Ge.Bip39 = Sl;
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.Hmac = void 0;
class Pl {
  constructor(t, n) {
    const r = new t().blockSize;
    this.hash = (s) => new t().update(s).digest();
    let o = n;
    if (o.length > r && (o = this.hash(o)), o.length < r) {
      const s = new Uint8Array(r - o.length);
      o = new Uint8Array([...o, ...s]);
    }
    this.oKeyPad = o.map((s) => s ^ 92), this.iKeyPad = o.map((s) => s ^ 54), this.messageHasher = new t(), this.blockSize = r, this.update(this.iKeyPad);
  }
  update(t) {
    return this.messageHasher.update(t), this;
  }
  digest() {
    const t = this.messageHasher.digest();
    return this.hash(new Uint8Array([...this.oKeyPad, ...t]));
  }
}
Kn.Hmac = Pl;
var Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.keccak256 = Xt.Keccak256 = void 0;
const Al = _u, Tl = kn;
class Da {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = Al.keccak_256.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, Tl.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
Xt.Keccak256 = Da;
function El(e) {
  return new Da(e).digest();
}
Xt.keccak256 = El;
var he = {}, Cl = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(he, "__esModule", { value: !0 });
he.Xchacha20poly1305Ietf = he.xchacha20NonceLength = he.Ed25519 = he.Ed25519Keypair = he.Argon2id = he.isArgon2idOptions = void 0;
const Ml = Z, Se = Cl(Su);
function Ol(e) {
  return !(!(0, Ml.isNonNullObject)(e) || typeof e.outputLength != "number" || typeof e.opsLimit != "number" || typeof e.memLimitKib != "number");
}
he.isArgon2idOptions = Ol;
class jl {
  static async execute(t, n, r) {
    return await Se.default.ready, Se.default.crypto_pwhash(
      r.outputLength,
      t,
      n,
      // libsodium only supports 16 byte salts and will throw when you don't respect that
      r.opsLimit,
      r.memLimitKib * 1024,
      Se.default.crypto_pwhash_ALG_ARGON2ID13
    );
  }
}
he.Argon2id = jl;
class Kr {
  // a libsodium privkey has the format `<ed25519 privkey> + <ed25519 pubkey>`
  static fromLibsodiumPrivkey(t) {
    if (t.length !== 64)
      throw new Error(`Unexpected key length ${t.length}. Must be 64.`);
    return new Kr(t.slice(0, 32), t.slice(32, 64));
  }
  constructor(t, n) {
    this.privkey = t, this.pubkey = n;
  }
  toLibsodiumPrivkey() {
    return new Uint8Array([...this.privkey, ...this.pubkey]);
  }
}
he.Ed25519Keypair = Kr;
class Bl {
  /**
   * Generates a keypair deterministically from a given 32 bytes seed.
   *
   * This seed equals the Ed25519 private key.
   * For implementation details see crypto_sign_seed_keypair in
   * https://download.libsodium.org/doc/public-key_cryptography/public-key_signatures.html
   * and diagram on https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
   */
  static async makeKeypair(t) {
    await Se.default.ready;
    const n = Se.default.crypto_sign_seed_keypair(t);
    return Kr.fromLibsodiumPrivkey(n.privateKey);
  }
  static async createSignature(t, n) {
    return await Se.default.ready, Se.default.crypto_sign_detached(t, n.toLibsodiumPrivkey());
  }
  static async verifySignature(t, n, r) {
    return await Se.default.ready, Se.default.crypto_sign_verify_detached(t, n, r);
  }
}
he.Ed25519 = Bl;
he.xchacha20NonceLength = 24;
class Rl {
  static async encrypt(t, n, r) {
    return await Se.default.ready, Se.default.crypto_aead_xchacha20poly1305_ietf_encrypt(
      t,
      null,
      null,
      // secret nonce: unused and should be null (https://download.libsodium.org/doc/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)
      r,
      n
    );
  }
  static async decrypt(t, n, r) {
    return await Se.default.ready, Se.default.crypto_aead_xchacha20poly1305_ietf_decrypt(
      null,
      // secret nonce: unused and should be null (https://download.libsodium.org/doc/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)
      t,
      null,
      r,
      n
    );
  }
}
he.Xchacha20poly1305Ietf = Rl;
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.Random = void 0;
class Il {
  /**
   * Returns `count` cryptographically secure random bytes
   */
  static getBytes(t) {
    try {
      const n = typeof window == "object" ? window : self, r = typeof n.crypto < "u" ? n.crypto : n.msCrypto, o = new Uint8Array(t);
      return r.getRandomValues(o), o;
    } catch {
      try {
        const n = ma();
        return new Uint8Array([...n.randomBytes(t)]);
      } catch {
        throw new Error("No secure random number generator found");
      }
    }
  }
}
Qr.Random = Il;
var Yt = {};
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.ripemd160 = Yt.Ripemd160 = void 0;
const $l = Pu, Nl = kn;
class Ua {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = $l.ripemd160.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, Nl.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
Yt.Ripemd160 = Ua;
function xl(e) {
  return new Ua(e).digest();
}
Yt.ripemd160 = xl;
var Zr = {}, Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.ExtendedSecp256k1Signature = Mt.Secp256k1Signature = void 0;
function Ht(e) {
  let t = 0;
  for (const n of e)
    if (n === 0)
      t++;
    else
      break;
  return e.slice(t);
}
const ur = 2;
class Fn {
  /**
   * Takes the pair of integers (r, s) as 2x32 byte of binary data.
   *
   * Note: This is the format Cosmos SDK uses natively.
   *
   * @param data a 64 byte value containing integers r and s.
   */
  static fromFixedLength(t) {
    if (t.length !== 64)
      throw new Error(`Got invalid data length: ${t.length}. Expected 2x 32 bytes for the pair (r, s)`);
    return new Fn(Ht(t.slice(0, 32)), Ht(t.slice(32, 64)));
  }
  static fromDer(t) {
    let n = 0;
    if (t[n++] !== 48)
      throw new Error("Prefix 0x30 expected");
    const r = t[n++];
    if (t.length - n !== r)
      throw new Error("Data length mismatch detected");
    if (t[n++] !== ur)
      throw new Error("INTEGER tag expected");
    const s = t[n++];
    if (s >= 128)
      throw new Error("Decoding length values above 127 not supported");
    const i = t.slice(n, n + s);
    if (n += s, t[n++] !== ur)
      throw new Error("INTEGER tag expected");
    const a = t[n++];
    if (a >= 128)
      throw new Error("Decoding length values above 127 not supported");
    const u = t.slice(n, n + a);
    return n += a, new Fn(
      // r/s data can contain leading 0 bytes to express integers being non-negative in DER
      Ht(i),
      Ht(u)
    );
  }
  constructor(t, n) {
    if (t.length > 32 || t.length === 0 || t[0] === 0)
      throw new Error("Unsigned integer r must be encoded as unpadded big endian.");
    if (n.length > 32 || n.length === 0 || n[0] === 0)
      throw new Error("Unsigned integer s must be encoded as unpadded big endian.");
    this.data = {
      r: t,
      s: n
    };
  }
  r(t) {
    if (t === void 0)
      return this.data.r;
    {
      const n = t - this.data.r.length;
      if (n < 0)
        throw new Error("Length too small to hold parameter r");
      const r = new Uint8Array(n);
      return new Uint8Array([...r, ...this.data.r]);
    }
  }
  s(t) {
    if (t === void 0)
      return this.data.s;
    {
      const n = t - this.data.s.length;
      if (n < 0)
        throw new Error("Length too small to hold parameter s");
      const r = new Uint8Array(n);
      return new Uint8Array([...r, ...this.data.s]);
    }
  }
  toFixedLength() {
    return new Uint8Array([...this.r(32), ...this.s(32)]);
  }
  toDer() {
    const t = this.data.r[0] >= 128 ? new Uint8Array([0, ...this.data.r]) : this.data.r, n = this.data.s[0] >= 128 ? new Uint8Array([0, ...this.data.s]) : this.data.s, r = t.length, o = n.length, s = new Uint8Array([ur, r, ...t, ur, o, ...n]);
    return new Uint8Array([48, s.length, ...s]);
  }
}
Mt.Secp256k1Signature = Fn;
class Fs extends Fn {
  /**
   * Decode extended signature from the simple fixed length encoding
   * described in toFixedLength().
   */
  static fromFixedLength(t) {
    if (t.length !== 65)
      throw new Error(`Got invalid data length ${t.length}. Expected 32 + 32 + 1`);
    return new Fs(Ht(t.slice(0, 32)), Ht(t.slice(32, 64)), t[64]);
  }
  constructor(t, n, r) {
    if (super(t, n), !Number.isInteger(r))
      throw new Error("The recovery parameter must be an integer.");
    if (r < 0 || r > 4)
      throw new Error("The recovery parameter must be one of 0, 1, 2, 3.");
    this.recovery = r;
  }
  /**
   * A simple custom encoding that encodes the extended signature as
   * r (32 bytes) | s (32 bytes) | recovery param (1 byte)
   * where | denotes concatenation of bonary data.
   */
  toFixedLength() {
    return new Uint8Array([...this.r(32), ...this.s(32), this.recovery]);
  }
}
Mt.ExtendedSecp256k1Signature = Fs;
var qa = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.Secp256k1 = void 0;
const dr = N, Ha = qa(Vr), Dl = qa(ha()), Ul = Mt, wt = new Dl.default.ec("secp256k1"), ql = new Ha.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "hex");
class Hl {
  /**
   * Takes a 32 byte private key and returns a privkey/pubkey pair.
   *
   * The resulting pubkey is uncompressed. For the use in Cosmos it should
   * be compressed first using `Secp256k1.compressPubkey`.
   */
  static async makeKeypair(t) {
    if (t.length !== 32)
      throw new Error("input data is not a valid secp256k1 private key");
    const n = wt.keyFromPrivate(t);
    if (n.validate().result !== !0)
      throw new Error("input data is not a valid secp256k1 private key");
    if (new Ha.default(t).gte(ql))
      throw new Error("input data is not a valid secp256k1 private key");
    return {
      privkey: (0, dr.fromHex)(n.getPrivate("hex")),
      // encodes uncompressed as
      // - 1-byte prefix "04"
      // - 32-byte x coordinate
      // - 32-byte y coordinate
      pubkey: Uint8Array.from(n.getPublic("array"))
    };
  }
  /**
   * Creates a signature that is
   * - deterministic (RFC 6979)
   * - lowS signature
   * - DER encoded
   */
  static async createSignature(t, n) {
    if (t.length === 0)
      throw new Error("Message hash must not be empty");
    if (t.length > 32)
      throw new Error("Message hash length must not exceed 32 bytes");
    const r = wt.keyFromPrivate(n), { r: o, s, recoveryParam: i } = r.sign(t, { canonical: !0 });
    if (typeof i != "number")
      throw new Error("Recovery param missing");
    return new Ul.ExtendedSecp256k1Signature(Uint8Array.from(o.toArray()), Uint8Array.from(s.toArray()), i);
  }
  static async verifySignature(t, n, r) {
    if (n.length === 0)
      throw new Error("Message hash must not be empty");
    if (n.length > 32)
      throw new Error("Message hash length must not exceed 32 bytes");
    const o = wt.keyFromPublic(r);
    try {
      return o.verify(n, t.toDer());
    } catch {
      return !1;
    }
  }
  static recoverPubkey(t, n) {
    const r = { r: (0, dr.toHex)(t.r()), s: (0, dr.toHex)(t.s()) }, o = wt.recoverPubKey(n, r, t.recovery), s = wt.keyFromPublic(o);
    return (0, dr.fromHex)(s.getPublic(!1, "hex"));
  }
  /**
   * Takes a compressed or uncompressed pubkey and return a compressed one.
   *
   * This function is idempotent.
   */
  static compressPubkey(t) {
    switch (t.length) {
      case 33:
        return t;
      case 65:
        return Uint8Array.from(wt.keyFromPublic(t).getPublic(!0, "array"));
      default:
        throw new Error("Invalid pubkey length");
    }
  }
  /**
   * Takes a compressed or uncompressed pubkey and returns an uncompressed one.
   *
   * This function is idempotent.
   */
  static uncompressPubkey(t) {
    switch (t.length) {
      case 33:
        return Uint8Array.from(wt.keyFromPublic(t).getPublic(!1, "array"));
      case 65:
        return t;
      default:
        throw new Error("Invalid pubkey length");
    }
  }
  static trimRecoveryByte(t) {
    switch (t.length) {
      case 64:
        return t;
      case 65:
        return t.slice(0, 64);
      default:
        throw new Error("Invalid signature length");
    }
  }
}
Zr.Secp256k1 = Hl;
var Va = {};
(function(e) {
  var t = h && h.__importDefault || function(y) {
    return y && y.__esModule ? y : { default: y };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.stringToPath = e.pathToString = e.Slip10 = e.Slip10RawIndex = e.slip10CurveFromString = e.Slip10Curve = void 0;
  const n = N, r = Y, o = t(Vr), s = t(ha()), i = Kn, c = xe;
  var a;
  (function(y) {
    y.Secp256k1 = "Bitcoin seed", y.Ed25519 = "ed25519 seed";
  })(a = e.Slip10Curve || (e.Slip10Curve = {}));
  function u(y) {
    switch (y) {
      case a.Ed25519:
        return a.Ed25519;
      case a.Secp256k1:
        return a.Secp256k1;
      default:
        throw new Error(`Unknown curve string: '${y}'`);
    }
  }
  e.slip10CurveFromString = u;
  class d extends r.Uint32 {
    static hardened(p) {
      return new d(p + 2 ** 31);
    }
    static normal(p) {
      return new d(p);
    }
    isHardened() {
      return this.data >= 2 ** 31;
    }
  }
  e.Slip10RawIndex = d;
  const g = new s.default.ec("secp256k1");
  class M {
    static derivePath(p, v, U) {
      let x = this.master(p, v);
      for (const ae of U)
        x = this.child(p, x.privkey, x.chainCode, ae);
      return x;
    }
    static master(p, v) {
      const U = new i.Hmac(c.Sha512, (0, n.toAscii)(p)).update(v).digest(), x = U.slice(0, 32), ae = U.slice(32, 64);
      return p !== a.Ed25519 && (this.isZero(x) || this.isGteN(p, x)) ? this.master(p, U) : {
        chainCode: ae,
        privkey: x
      };
    }
    static child(p, v, U, x) {
      let ae;
      if (x.isHardened()) {
        const b = new Uint8Array([0, ...v, ...x.toBytesBigEndian()]);
        ae = new i.Hmac(c.Sha512, U).update(b).digest();
      } else {
        if (p === a.Ed25519)
          throw new Error("Normal keys are not allowed with ed25519");
        {
          const b = new Uint8Array([
            ...M.serializedPoint(p, new o.default(v)),
            ...x.toBytesBigEndian()
          ]);
          ae = new i.Hmac(c.Sha512, U).update(b).digest();
        }
      }
      return this.childImpl(p, v, U, x, ae);
    }
    /**
     * Implementation of ser_P(point(k_par)) from BIP-0032
     *
     * @see https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
     */
    static serializedPoint(p, v) {
      switch (p) {
        case a.Secp256k1:
          return (0, n.fromHex)(g.g.mul(v).encodeCompressed("hex"));
        default:
          throw new Error("curve not supported");
      }
    }
    static childImpl(p, v, U, x, ae) {
      const b = ae.slice(0, 32), _ = ae.slice(32, 64), w = _;
      if (p === a.Ed25519)
        return {
          chainCode: w,
          privkey: b
        };
      const D = this.n(p), q = new o.default(b).add(new o.default(v)).mod(D), H = Uint8Array.from(q.toArray("be", 32));
      if (this.isGteN(p, b) || this.isZero(H)) {
        const F = new i.Hmac(c.Sha512, U).update(new Uint8Array([1, ..._, ...x.toBytesBigEndian()])).digest();
        return this.childImpl(p, v, U, x, F);
      }
      return {
        chainCode: w,
        privkey: H
      };
    }
    static isZero(p) {
      return p.every((v) => v === 0);
    }
    static isGteN(p, v) {
      return new o.default(v).gte(this.n(p));
    }
    static n(p) {
      switch (p) {
        case a.Secp256k1:
          return new o.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", 16);
        default:
          throw new Error("curve not supported");
      }
    }
  }
  e.Slip10 = M;
  function k(y) {
    return y.reduce((p, v) => {
      const U = v.isHardened() ? `${v.toNumber() - 2147483648}'` : v.toString();
      return p + "/" + U;
    }, "m");
  }
  e.pathToString = k;
  function V(y) {
    if (!y.startsWith("m"))
      throw new Error("Path string must start with 'm'");
    let p = y.slice(1);
    const v = new Array();
    for (; p; ) {
      const U = p.match(/^\/([0-9]+)('?)/);
      if (!U)
        throw new Error("Syntax error while reading path component");
      const [x, ae, b] = U, _ = r.Uint53.fromString(ae).toNumber();
      if (_ >= 2 ** 31)
        throw new Error("Component value too high. Must not exceed 2**31-1.");
      b ? v.push(d.hardened(_)) : v.push(d.normal(_)), p = p.slice(x.length);
    }
    return v;
  }
  e.stringToPath = V;
})(Va);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.stringToPath = e.Slip10RawIndex = e.slip10CurveFromString = e.Slip10Curve = e.Slip10 = e.pathToString = e.sha512 = e.Sha512 = e.sha256 = e.Sha256 = e.Secp256k1Signature = e.ExtendedSecp256k1Signature = e.Secp256k1 = e.ripemd160 = e.Ripemd160 = e.Random = e.Xchacha20poly1305Ietf = e.xchacha20NonceLength = e.isArgon2idOptions = e.Ed25519Keypair = e.Ed25519 = e.Argon2id = e.keccak256 = e.Keccak256 = e.Hmac = e.EnglishMnemonic = e.Bip39 = void 0;
  var t = Ge;
  Object.defineProperty(e, "Bip39", { enumerable: !0, get: function() {
    return t.Bip39;
  } }), Object.defineProperty(e, "EnglishMnemonic", { enumerable: !0, get: function() {
    return t.EnglishMnemonic;
  } });
  var n = Kn;
  Object.defineProperty(e, "Hmac", { enumerable: !0, get: function() {
    return n.Hmac;
  } });
  var r = Xt;
  Object.defineProperty(e, "Keccak256", { enumerable: !0, get: function() {
    return r.Keccak256;
  } }), Object.defineProperty(e, "keccak256", { enumerable: !0, get: function() {
    return r.keccak256;
  } });
  var o = he;
  Object.defineProperty(e, "Argon2id", { enumerable: !0, get: function() {
    return o.Argon2id;
  } }), Object.defineProperty(e, "Ed25519", { enumerable: !0, get: function() {
    return o.Ed25519;
  } }), Object.defineProperty(e, "Ed25519Keypair", { enumerable: !0, get: function() {
    return o.Ed25519Keypair;
  } }), Object.defineProperty(e, "isArgon2idOptions", { enumerable: !0, get: function() {
    return o.isArgon2idOptions;
  } }), Object.defineProperty(e, "xchacha20NonceLength", { enumerable: !0, get: function() {
    return o.xchacha20NonceLength;
  } }), Object.defineProperty(e, "Xchacha20poly1305Ietf", { enumerable: !0, get: function() {
    return o.Xchacha20poly1305Ietf;
  } });
  var s = Qr;
  Object.defineProperty(e, "Random", { enumerable: !0, get: function() {
    return s.Random;
  } });
  var i = Yt;
  Object.defineProperty(e, "Ripemd160", { enumerable: !0, get: function() {
    return i.Ripemd160;
  } }), Object.defineProperty(e, "ripemd160", { enumerable: !0, get: function() {
    return i.ripemd160;
  } });
  var c = Zr;
  Object.defineProperty(e, "Secp256k1", { enumerable: !0, get: function() {
    return c.Secp256k1;
  } });
  var a = Mt;
  Object.defineProperty(e, "ExtendedSecp256k1Signature", { enumerable: !0, get: function() {
    return a.ExtendedSecp256k1Signature;
  } }), Object.defineProperty(e, "Secp256k1Signature", { enumerable: !0, get: function() {
    return a.Secp256k1Signature;
  } });
  var u = xe;
  Object.defineProperty(e, "Sha256", { enumerable: !0, get: function() {
    return u.Sha256;
  } }), Object.defineProperty(e, "sha256", { enumerable: !0, get: function() {
    return u.sha256;
  } }), Object.defineProperty(e, "Sha512", { enumerable: !0, get: function() {
    return u.Sha512;
  } }), Object.defineProperty(e, "sha512", { enumerable: !0, get: function() {
    return u.sha512;
  } });
  var d = Va;
  Object.defineProperty(e, "pathToString", { enumerable: !0, get: function() {
    return d.pathToString;
  } }), Object.defineProperty(e, "Slip10", { enumerable: !0, get: function() {
    return d.Slip10;
  } }), Object.defineProperty(e, "Slip10Curve", { enumerable: !0, get: function() {
    return d.Slip10Curve;
  } }), Object.defineProperty(e, "slip10CurveFromString", { enumerable: !0, get: function() {
    return d.slip10CurveFromString;
  } }), Object.defineProperty(e, "Slip10RawIndex", { enumerable: !0, get: function() {
    return d.Slip10RawIndex;
  } }), Object.defineProperty(e, "stringToPath", { enumerable: !0, get: function() {
    return d.stringToPath;
  } });
})(ke);
var oe = {}, Qn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isMultisigThresholdPubkey = e.isSinglePubkey = e.pubkeyType = e.isSecp256k1Pubkey = e.isEd25519Pubkey = void 0;
  function t(s) {
    return s.type === "tendermint/PubKeyEd25519";
  }
  e.isEd25519Pubkey = t;
  function n(s) {
    return s.type === "tendermint/PubKeySecp256k1";
  }
  e.isSecp256k1Pubkey = n, e.pubkeyType = {
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/ed25519/ed25519.go#L22 */
    secp256k1: "tendermint/PubKeySecp256k1",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/secp256k1/secp256k1.go#L23 */
    ed25519: "tendermint/PubKeyEd25519",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/sr25519/codec.go#L12 */
    sr25519: "tendermint/PubKeySr25519",
    multisigThreshold: "tendermint/PubKeyMultisigThreshold"
  };
  function r(s) {
    return [e.pubkeyType.ed25519, e.pubkeyType.secp256k1, e.pubkeyType.sr25519].includes(s.type);
  }
  e.isSinglePubkey = r;
  function o(s) {
    return s.type === "tendermint/PubKeyMultisigThreshold";
  }
  e.isMultisigThresholdPubkey = o;
})(Qn);
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.encodeBech32Pubkey = oe.encodeAminoPubkey = oe.decodeBech32Pubkey = oe.decodeAminoPubkey = oe.encodeEd25519Pubkey = oe.encodeSecp256k1Pubkey = void 0;
const ye = N, Vl = Y, xn = Z, tt = Qn;
function Fl(e) {
  if (e.length !== 33 || e[0] !== 2 && e[0] !== 3)
    throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
  return {
    type: tt.pubkeyType.secp256k1,
    value: (0, ye.toBase64)(e)
  };
}
oe.encodeSecp256k1Pubkey = Fl;
function Wl(e) {
  if (e.length !== 32)
    throw new Error("Ed25519 public key must be 32 bytes long");
  return {
    type: tt.pubkeyType.ed25519,
    value: (0, ye.toBase64)(e)
  };
}
oe.encodeEd25519Pubkey = Wl;
const vs = (0, ye.fromHex)(
  "eb5ae98721"
  /* fixed length */
), ws = (0, ye.fromHex)(
  "1624de6420"
  /* fixed length */
), Bi = (0, ye.fromHex)(
  "0dfb100520"
  /* fixed length */
), Br = (0, ye.fromHex)(
  "22c1f7e2"
  /* variable length not included */
);
function Ws(e) {
  if ((0, xn.arrayContentStartsWith)(e, vs)) {
    const t = e.slice(vs.length);
    if (t.length !== 33)
      throw new Error("Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).");
    return {
      type: tt.pubkeyType.secp256k1,
      value: (0, ye.toBase64)(t)
    };
  } else if ((0, xn.arrayContentStartsWith)(e, ws)) {
    const t = e.slice(ws.length);
    if (t.length !== 32)
      throw new Error("Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).");
    return {
      type: tt.pubkeyType.ed25519,
      value: (0, ye.toBase64)(t)
    };
  } else if ((0, xn.arrayContentStartsWith)(e, Bi)) {
    const t = e.slice(Bi.length);
    if (t.length !== 32)
      throw new Error("Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).");
    return {
      type: tt.pubkeyType.sr25519,
      value: (0, ye.toBase64)(t)
    };
  } else {
    if ((0, xn.arrayContentStartsWith)(e, Br))
      return Gl(e);
    throw new Error("Unsupported public key type. Amino data starts with: " + (0, ye.toHex)(e.slice(0, 5)));
  }
}
oe.decodeAminoPubkey = Ws;
function Jl(e) {
  const { data: t } = (0, ye.fromBech32)(e);
  return Ws(t);
}
oe.decodeBech32Pubkey = Jl;
function Ri(e) {
  if (e.length < 1)
    throw new Error("Can't decode varint. EOF");
  if (e[0] > 127)
    throw new Error("Decoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.Varint implementation from the Go standard library and write some tests.");
  return [e[0], 1];
}
function Gl(e) {
  const t = Array.from(e), n = t.splice(0, Br.length);
  if (!(0, xn.arrayContentStartsWith)(n, Br))
    throw new Error("Invalid multisig prefix.");
  if (t.shift() != 8)
    throw new Error("Invalid multisig data. Expecting 0x08 prefix before threshold.");
  const [r, o] = Ri(t);
  t.splice(0, o);
  const s = [];
  for (; t.length > 0; ) {
    if (t.shift() != 18)
      throw new Error("Invalid multisig data. Expecting 0x12 prefix before participant pubkey length.");
    const [i, c] = Ri(t);
    if (t.splice(0, c), t.length < i)
      throw new Error("Invalid multisig data length.");
    const a = t.splice(0, i), u = Ws(Uint8Array.from(a));
    s.push(u);
  }
  return {
    type: tt.pubkeyType.multisigThreshold,
    value: {
      threshold: r.toString(),
      pubkeys: s
    }
  };
}
function Ii(e) {
  const t = Vl.Uint53.fromString(e.toString()).toNumber();
  if (t > 127)
    throw new Error("Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.");
  return [t];
}
function Js(e) {
  if ((0, tt.isMultisigThresholdPubkey)(e)) {
    const t = Array.from(Br);
    t.push(8), t.push(...Ii(e.value.threshold));
    for (const n of e.value.pubkeys.map((r) => Js(r)))
      t.push(18), t.push(...Ii(n.length)), t.push(...n);
    return new Uint8Array(t);
  } else {
    if ((0, tt.isEd25519Pubkey)(e))
      return new Uint8Array([...ws, ...(0, ye.fromBase64)(e.value)]);
    if ((0, tt.isSecp256k1Pubkey)(e))
      return new Uint8Array([...vs, ...(0, ye.fromBase64)(e.value)]);
    throw new Error("Unsupported pubkey type");
  }
}
oe.encodeAminoPubkey = Js;
function Ll(e, t) {
  return (0, ye.toBech32)(t, Js(e));
}
oe.encodeBech32Pubkey = Ll;
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.pubkeyToAddress = Pe.pubkeyToRawAddress = Pe.rawSecp256k1PubkeyToRawAddress = Pe.rawEd25519PubkeyToRawAddress = void 0;
const Rr = ke, ks = N, zl = oe, os = Qn;
function Fa(e) {
  if (e.length !== 32)
    throw new Error(`Invalid Ed25519 pubkey length: ${e.length}`);
  return (0, Rr.sha256)(e).slice(0, 20);
}
Pe.rawEd25519PubkeyToRawAddress = Fa;
function Wa(e) {
  if (e.length !== 33)
    throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${e.length}`);
  return (0, Rr.ripemd160)((0, Rr.sha256)(e));
}
Pe.rawSecp256k1PubkeyToRawAddress = Wa;
function Ja(e) {
  if ((0, os.isSecp256k1Pubkey)(e)) {
    const t = (0, ks.fromBase64)(e.value);
    return Wa(t);
  } else if ((0, os.isEd25519Pubkey)(e)) {
    const t = (0, ks.fromBase64)(e.value);
    return Fa(t);
  } else if ((0, os.isMultisigThresholdPubkey)(e)) {
    const t = (0, zl.encodeAminoPubkey)(e);
    return (0, Rr.sha256)(t).slice(0, 20);
  } else
    throw new Error("Unsupported public key type");
}
Pe.pubkeyToRawAddress = Ja;
function Kl(e, t) {
  return (0, ks.toBech32)(t, Ja(e));
}
Pe.pubkeyToAddress = Kl;
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.addCoins = Le.parseCoins = Le.coins = Le.coin = void 0;
const _s = Y;
function Ga(e, t) {
  let n;
  if (typeof e == "number")
    try {
      n = new _s.Uint53(e).toString();
    } catch {
      throw new Error("Given amount is not a safe integer. Consider using a string instead to overcome the limitations of JS numbers.");
    }
  else {
    if (!e.match(/^[0-9]+$/))
      throw new Error("Invalid unsigned integer string format");
    n = e.replace(/^0*/, "") || "0";
  }
  return {
    amount: n,
    denom: t
  };
}
Le.coin = Ga;
function Ql(e, t) {
  return [Ga(e, t)];
}
Le.coins = Ql;
function Zl(e) {
  return e.replace(/\s/g, "").split(",").filter(Boolean).map((t) => {
    const n = t.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
    if (!n)
      throw new Error("Got an invalid coin string");
    return {
      amount: n[1].replace(/^0+/, "") || "0",
      denom: n[2]
    };
  });
}
Le.parseCoins = Zl;
function Xl(e, t) {
  if (e.denom !== t.denom)
    throw new Error("Trying to add two coins with different denoms");
  return {
    amount: _s.Decimal.fromAtomics(e.amount, 0).plus(_s.Decimal.fromAtomics(t.amount, 0)).atomics,
    denom: e.denom
  };
}
Le.addCoins = Xl;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.createMultisigThresholdPubkey = en.compareArrays = void 0;
const $i = N, Yl = Y, Ni = Pe;
function La(e, t) {
  const n = (0, $i.toHex)(e), r = (0, $i.toHex)(t);
  return n === r ? 0 : n < r ? -1 : 1;
}
en.compareArrays = La;
function em(e, t, n = !1) {
  const r = new Yl.Uint53(t);
  if (r.toNumber() > e.length)
    throw new Error(`Threshold k = ${r.toNumber()} exceeds number of keys n = ${e.length}`);
  const o = n ? e : Array.from(e).sort((s, i) => {
    const c = (0, Ni.pubkeyToRawAddress)(s), a = (0, Ni.pubkeyToRawAddress)(i);
    return La(c, a);
  });
  return {
    type: "tendermint/PubKeyMultisigThreshold",
    value: {
      threshold: r.toString(),
      pubkeys: o
    }
  };
}
en.createMultisigThresholdPubkey = em;
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.omitDefault = void 0;
function tm(e) {
  switch (typeof e) {
    case "string":
      return e === "" ? void 0 : e;
    case "number":
      return e === 0 ? void 0 : e;
    case "bigint":
      return e === BigInt(0) ? void 0 : e;
    case "boolean":
      return e || void 0;
    default:
      throw new Error(`Got unsupported type '${typeof e}'`);
  }
}
Xr.omitDefault = tm;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.makeCosmoshubPath = void 0;
const Pn = ke;
function nm(e) {
  return [
    Pn.Slip10RawIndex.hardened(44),
    Pn.Slip10RawIndex.hardened(118),
    Pn.Slip10RawIndex.hardened(0),
    Pn.Slip10RawIndex.normal(0),
    Pn.Slip10RawIndex.normal(e)
  ];
}
Zn.makeCosmoshubPath = nm;
var tn = {}, bt = {};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.decodeSignature = bt.encodeSecp256k1Signature = void 0;
const Ss = N, rm = oe, om = Qn;
function sm(e, t) {
  if (t.length !== 64)
    throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");
  return {
    pub_key: (0, rm.encodeSecp256k1Pubkey)(e),
    signature: (0, Ss.toBase64)(t)
  };
}
bt.encodeSecp256k1Signature = sm;
function im(e) {
  switch (e.pub_key.type) {
    case om.pubkeyType.secp256k1:
      return {
        pubkey: (0, Ss.fromBase64)(e.pub_key.value),
        signature: (0, Ss.fromBase64)(e.signature)
      };
    default:
      throw new Error("Unsupported pubkey type");
  }
}
bt.decodeSignature = im;
var De = {};
Object.defineProperty(De, "__esModule", { value: !0 });
De.serializeSignDoc = De.escapeCharacters = De.makeSignDoc = De.sortedJsonStringify = void 0;
const am = N, xi = Y;
function Ps(e) {
  if (typeof e != "object" || e === null)
    return e;
  if (Array.isArray(e))
    return e.map(Ps);
  const t = Object.keys(e).sort(), n = {};
  return t.forEach((r) => {
    n[r] = Ps(e[r]);
  }), n;
}
function za(e) {
  return JSON.stringify(Ps(e));
}
De.sortedJsonStringify = za;
function cm(e, t, n, r, o, s, i) {
  return {
    chain_id: n,
    account_number: xi.Uint53.fromString(o.toString()).toString(),
    sequence: xi.Uint53.fromString(s.toString()).toString(),
    fee: t,
    msgs: e,
    memo: r || "",
    ...i && { timeout_height: i.toString() }
  };
}
De.makeSignDoc = cm;
function Ka(e) {
  const t = /&/g, n = /</g, r = />/g;
  return e.replace(t, "\\u0026").replace(n, "\\u003c").replace(r, "\\u003e");
}
De.escapeCharacters = Ka;
function um(e) {
  const t = Ka(za(e));
  return (0, am.toUtf8)(t);
}
De.serializeSignDoc = um;
var Gs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decrypt = e.encrypt = e.supportedAlgorithms = e.executeKdf = e.cosmjsSalt = void 0;
  const t = ke, n = N;
  e.cosmjsSalt = (0, n.toAscii)("The CosmJS salt.");
  async function r(i, c) {
    switch (c.algorithm) {
      case "argon2id": {
        const a = c.params;
        if (!(0, t.isArgon2idOptions)(a))
          throw new Error("Invalid format of argon2id params");
        return t.Argon2id.execute(i, e.cosmjsSalt, a);
      }
      default:
        throw new Error("Unsupported KDF algorithm");
    }
  }
  e.executeKdf = r, e.supportedAlgorithms = {
    xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
  };
  async function o(i, c, a) {
    switch (a.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = t.Random.getBytes(t.xchacha20NonceLength);
        return new Uint8Array([
          ...u,
          ...await t.Xchacha20poly1305Ietf.encrypt(i, c, u)
        ]);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`);
    }
  }
  e.encrypt = o;
  async function s(i, c, a) {
    switch (a.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = i.slice(0, t.xchacha20NonceLength);
        return t.Xchacha20poly1305Ietf.decrypt(i.slice(t.xchacha20NonceLength), c, u);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`);
    }
  }
  e.decrypt = s;
})(Gs);
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.Secp256k1HdWallet = tn.extractKdfConfiguration = void 0;
const Te = ke, An = N, Vt = Z, dm = Pe, lm = Zn, mm = bt, fm = De, Tn = Gs, Cr = "secp256k1wallet-v1", hm = {
  algorithm: "argon2id",
  params: {
    outputLength: 32,
    opsLimit: 24,
    memLimitKib: 12 * 1024
  }
};
function pm(e) {
  return !(!(0, Vt.isNonNullObject)(e) || typeof e.hdPath != "string" || typeof e.prefix != "string");
}
function gm(e) {
  return e.kdf;
}
function ym(e) {
  const t = JSON.parse(e);
  if (!(0, Vt.isNonNullObject)(t))
    throw new Error("Root document is not an object.");
  switch (t.type) {
    case Cr:
      return gm(t);
    default:
      throw new Error("Unsupported serialization type");
  }
}
tn.extractKdfConfiguration = ym;
const Di = {
  bip39Password: "",
  hdPaths: [(0, lm.makeCosmoshubPath)(0)],
  prefix: "cosmos"
};
class Pt {
  /**
   * Restores a wallet from the given BIP39 mnemonic.
   *
   * @param mnemonic Any valid English mnemonic.
   * @param options An optional `Secp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async fromMnemonic(t, n = {}) {
    const r = new Te.EnglishMnemonic(t), o = await Te.Bip39.mnemonicToSeed(r, n.bip39Password);
    return new Pt(r, {
      ...n,
      seed: o
    });
  }
  /**
   * Generates a new wallet with a BIP39 mnemonic of the given length.
   *
   * @param length The number of words in the mnemonic (12, 15, 18, 21 or 24).
   * @param options An optional `Secp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async generate(t = 12, n = {}) {
    const r = 4 * Math.floor(11 * t / 33), o = Te.Random.getBytes(r), s = Te.Bip39.encode(o);
    return Pt.fromMnemonic(s.toString(), n);
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  static async deserialize(t, n) {
    const r = JSON.parse(t);
    if (!(0, Vt.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    switch (r.type) {
      case Cr:
        return Pt.deserializeTypeV1(t, n);
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * This is an advanced alternative to calling `deserialize(serialization, password)` directly, which allows
   * you to offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF configuration. This can be
   * done using `extractKdfConfiguration(serialization)` and `executeKdf(password, kdfConfiguration)` from this package.
   */
  static async deserializeWithEncryptionKey(t, n) {
    const r = JSON.parse(t);
    if (!(0, Vt.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const o = r;
    switch (o.type) {
      case Cr: {
        const s = await (0, Tn.decrypt)((0, An.fromBase64)(o.data), n, o.encryption), i = JSON.parse((0, An.fromUtf8)(s)), { mnemonic: c, accounts: a } = i;
        if ((0, Vt.assert)(typeof c == "string"), !Array.isArray(a))
          throw new Error("Property 'accounts' is not an array");
        if (!a.every((g) => pm(g)))
          throw new Error("Account is not in the correct format.");
        const u = a[0].prefix;
        if (!a.every(({ prefix: g }) => g === u))
          throw new Error("Accounts do not all have the same prefix");
        const d = a.map(({ hdPath: g }) => (0, Te.stringToPath)(g));
        return Pt.fromMnemonic(c, {
          hdPaths: d,
          prefix: u
        });
      }
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  static async deserializeTypeV1(t, n) {
    const r = JSON.parse(t);
    if (!(0, Vt.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const o = await (0, Tn.executeKdf)(n, r.kdf);
    return Pt.deserializeWithEncryptionKey(t, o);
  }
  constructor(t, n) {
    const r = n.hdPaths ?? Di.hdPaths, o = n.prefix ?? Di.prefix;
    this.secret = t, this.seed = n.seed, this.accounts = r.map((s) => ({
      hdPath: s,
      prefix: o
    }));
  }
  get mnemonic() {
    return this.secret.toString();
  }
  async getAccounts() {
    return (await this.getAccountsWithPrivkeys()).map(({ algo: n, pubkey: r, address: o }) => ({
      algo: n,
      pubkey: r,
      address: o
    }));
  }
  async signAmino(t, n) {
    const o = (await this.getAccountsWithPrivkeys()).find(({ address: d }) => d === t);
    if (o === void 0)
      throw new Error(`Address ${t} not found in wallet`);
    const { privkey: s, pubkey: i } = o, c = (0, Te.sha256)((0, fm.serializeSignDoc)(n)), a = await Te.Secp256k1.createSignature(c, s), u = new Uint8Array([...a.r(32), ...a.s(32)]);
    return {
      signed: n,
      signature: (0, mm.encodeSecp256k1Signature)(i, u)
    };
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  async serialize(t) {
    const n = hm, r = await (0, Tn.executeKdf)(t, n);
    return this.serializeWithEncryptionKey(r, n);
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * This is an advanced alternative to calling `serialize(password)` directly, which allows you to
   * offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF options. If this
   * is not the case, the wallet cannot be restored with the original password.
   */
  async serializeWithEncryptionKey(t, n) {
    const r = {
      mnemonic: this.mnemonic,
      accounts: this.accounts.map(({ hdPath: a, prefix: u }) => ({
        hdPath: (0, Te.pathToString)(a),
        prefix: u
      }))
    }, o = (0, An.toUtf8)(JSON.stringify(r)), s = {
      algorithm: Tn.supportedAlgorithms.xchacha20poly1305Ietf
    }, i = await (0, Tn.encrypt)(o, t, s), c = {
      type: Cr,
      kdf: n,
      encryption: s,
      data: (0, An.toBase64)(i)
    };
    return JSON.stringify(c);
  }
  async getKeyPair(t) {
    const { privkey: n } = Te.Slip10.derivePath(Te.Slip10Curve.Secp256k1, this.seed, t), { pubkey: r } = await Te.Secp256k1.makeKeypair(n);
    return {
      privkey: n,
      pubkey: Te.Secp256k1.compressPubkey(r)
    };
  }
  async getAccountsWithPrivkeys() {
    return Promise.all(this.accounts.map(async ({ hdPath: t, prefix: n }) => {
      const { privkey: r, pubkey: o } = await this.getKeyPair(t), s = (0, An.toBech32)(n, (0, dm.rawSecp256k1PubkeyToRawAddress)(o));
      return {
        algo: "secp256k1",
        privkey: r,
        pubkey: o,
        address: s
      };
    }));
  }
}
tn.Secp256k1HdWallet = Pt;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.Secp256k1Wallet = void 0;
const lr = ke, bm = N, vm = Pe, wm = bt, km = De;
class Ls {
  /**
   * Creates a Secp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  static async fromKey(t, n = "cosmos") {
    const r = (await lr.Secp256k1.makeKeypair(t)).pubkey;
    return new Ls(t, lr.Secp256k1.compressPubkey(r), n);
  }
  constructor(t, n, r) {
    this.privkey = t, this.pubkey = n, this.prefix = r;
  }
  get address() {
    return (0, bm.toBech32)(this.prefix, (0, vm.rawSecp256k1PubkeyToRawAddress)(this.pubkey));
  }
  async getAccounts() {
    return [
      {
        algo: "secp256k1",
        address: this.address,
        pubkey: this.pubkey
      }
    ];
  }
  async signAmino(t, n) {
    if (t !== this.address)
      throw new Error(`Address ${t} not found in wallet`);
    const r = new lr.Sha256((0, km.serializeSignDoc)(n)).digest(), o = await lr.Secp256k1.createSignature(r, this.privkey), s = new Uint8Array([...o.r(32), ...o.s(32)]);
    return {
      signed: n,
      signature: (0, wm.encodeSecp256k1Signature)(this.pubkey, s)
    };
  }
}
Yr.Secp256k1Wallet = Ls;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.makeStdTx = nn.isStdTx = void 0;
function _m(e) {
  const { memo: t, msg: n, fee: r, signatures: o } = e;
  return typeof t == "string" && Array.isArray(n) && typeof r == "object" && Array.isArray(o);
}
nn.isStdTx = _m;
function Sm(e, t) {
  return {
    msg: e.msgs,
    fee: e.fee,
    memo: e.memo,
    signatures: Array.isArray(t) ? t : [t]
  };
}
nn.makeStdTx = Sm;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.executeKdf = e.makeStdTx = e.isStdTx = e.serializeSignDoc = e.makeSignDoc = e.encodeSecp256k1Signature = e.decodeSignature = e.Secp256k1Wallet = e.Secp256k1HdWallet = e.extractKdfConfiguration = e.pubkeyType = e.isSinglePubkey = e.isSecp256k1Pubkey = e.isMultisigThresholdPubkey = e.isEd25519Pubkey = e.makeCosmoshubPath = e.omitDefault = e.createMultisigThresholdPubkey = e.encodeSecp256k1Pubkey = e.encodeEd25519Pubkey = e.encodeBech32Pubkey = e.encodeAminoPubkey = e.decodeBech32Pubkey = e.decodeAminoPubkey = e.parseCoins = e.coins = e.coin = e.addCoins = e.rawSecp256k1PubkeyToRawAddress = e.rawEd25519PubkeyToRawAddress = e.pubkeyToRawAddress = e.pubkeyToAddress = void 0;
  var t = Pe;
  Object.defineProperty(e, "pubkeyToAddress", { enumerable: !0, get: function() {
    return t.pubkeyToAddress;
  } }), Object.defineProperty(e, "pubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.pubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawEd25519PubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.rawEd25519PubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawSecp256k1PubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.rawSecp256k1PubkeyToRawAddress;
  } });
  var n = Le;
  Object.defineProperty(e, "addCoins", { enumerable: !0, get: function() {
    return n.addCoins;
  } }), Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return n.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return n.coins;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return n.parseCoins;
  } });
  var r = oe;
  Object.defineProperty(e, "decodeAminoPubkey", { enumerable: !0, get: function() {
    return r.decodeAminoPubkey;
  } }), Object.defineProperty(e, "decodeBech32Pubkey", { enumerable: !0, get: function() {
    return r.decodeBech32Pubkey;
  } }), Object.defineProperty(e, "encodeAminoPubkey", { enumerable: !0, get: function() {
    return r.encodeAminoPubkey;
  } }), Object.defineProperty(e, "encodeBech32Pubkey", { enumerable: !0, get: function() {
    return r.encodeBech32Pubkey;
  } }), Object.defineProperty(e, "encodeEd25519Pubkey", { enumerable: !0, get: function() {
    return r.encodeEd25519Pubkey;
  } }), Object.defineProperty(e, "encodeSecp256k1Pubkey", { enumerable: !0, get: function() {
    return r.encodeSecp256k1Pubkey;
  } });
  var o = en;
  Object.defineProperty(e, "createMultisigThresholdPubkey", { enumerable: !0, get: function() {
    return o.createMultisigThresholdPubkey;
  } });
  var s = Xr;
  Object.defineProperty(e, "omitDefault", { enumerable: !0, get: function() {
    return s.omitDefault;
  } });
  var i = Zn;
  Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return i.makeCosmoshubPath;
  } });
  var c = Qn;
  Object.defineProperty(e, "isEd25519Pubkey", { enumerable: !0, get: function() {
    return c.isEd25519Pubkey;
  } }), Object.defineProperty(e, "isMultisigThresholdPubkey", { enumerable: !0, get: function() {
    return c.isMultisigThresholdPubkey;
  } }), Object.defineProperty(e, "isSecp256k1Pubkey", { enumerable: !0, get: function() {
    return c.isSecp256k1Pubkey;
  } }), Object.defineProperty(e, "isSinglePubkey", { enumerable: !0, get: function() {
    return c.isSinglePubkey;
  } }), Object.defineProperty(e, "pubkeyType", { enumerable: !0, get: function() {
    return c.pubkeyType;
  } });
  var a = tn;
  Object.defineProperty(e, "extractKdfConfiguration", { enumerable: !0, get: function() {
    return a.extractKdfConfiguration;
  } }), Object.defineProperty(e, "Secp256k1HdWallet", { enumerable: !0, get: function() {
    return a.Secp256k1HdWallet;
  } });
  var u = Yr;
  Object.defineProperty(e, "Secp256k1Wallet", { enumerable: !0, get: function() {
    return u.Secp256k1Wallet;
  } });
  var d = bt;
  Object.defineProperty(e, "decodeSignature", { enumerable: !0, get: function() {
    return d.decodeSignature;
  } }), Object.defineProperty(e, "encodeSecp256k1Signature", { enumerable: !0, get: function() {
    return d.encodeSecp256k1Signature;
  } });
  var g = De;
  Object.defineProperty(e, "makeSignDoc", { enumerable: !0, get: function() {
    return g.makeSignDoc;
  } }), Object.defineProperty(e, "serializeSignDoc", { enumerable: !0, get: function() {
    return g.serializeSignDoc;
  } });
  var M = nn;
  Object.defineProperty(e, "isStdTx", { enumerable: !0, get: function() {
    return M.isStdTx;
  } }), Object.defineProperty(e, "makeStdTx", { enumerable: !0, get: function() {
    return M.makeStdTx;
  } });
  var k = Gs;
  Object.defineProperty(e, "executeKdf", { enumerable: !0, get: function() {
    return k.executeKdf;
  } });
})(ot);
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.makeSignBytes = Xe.makeSignDoc = Xe.makeAuthInfoBytes = void 0;
const Ui = Z, Pm = Fr, Ir = jt;
function Am(e, t) {
  return e.map(({ pubkey: n, sequence: r }) => ({
    publicKey: n,
    modeInfo: {
      single: { mode: t }
    },
    sequence: BigInt(r)
  }));
}
function Tm(e, t, n, r, o, s = Pm.SignMode.SIGN_MODE_DIRECT) {
  (0, Ui.assert)(r === void 0 || typeof r == "string", "feeGranter must be undefined or string"), (0, Ui.assert)(o === void 0 || typeof o == "string", "feePayer must be undefined or string");
  const i = Ir.AuthInfo.fromPartial({
    signerInfos: Am(e, s),
    fee: {
      amount: [...t],
      gasLimit: BigInt(n),
      granter: r,
      payer: o
    }
  });
  return Ir.AuthInfo.encode(i).finish();
}
Xe.makeAuthInfoBytes = Tm;
function Em(e, t, n, r) {
  return {
    bodyBytes: e,
    authInfoBytes: t,
    chainId: n,
    accountNumber: BigInt(r)
  };
}
Xe.makeSignDoc = Em;
function Cm({ accountNumber: e, authInfoBytes: t, bodyBytes: n, chainId: r }) {
  const o = Ir.SignDoc.fromPartial({
    accountNumber: e,
    authInfoBytes: t,
    bodyBytes: n,
    chainId: r
  });
  return Ir.SignDoc.encode(o).finish();
}
Xe.makeSignBytes = Cm;
var zs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decrypt = e.encrypt = e.supportedAlgorithms = e.executeKdf = e.cosmjsSalt = void 0;
  const t = ke, n = N;
  e.cosmjsSalt = (0, n.toAscii)("The CosmJS salt.");
  async function r(i, c) {
    switch (c.algorithm) {
      case "argon2id": {
        const a = c.params;
        if (!(0, t.isArgon2idOptions)(a))
          throw new Error("Invalid format of argon2id params");
        return t.Argon2id.execute(i, e.cosmjsSalt, a);
      }
      default:
        throw new Error("Unsupported KDF algorithm");
    }
  }
  e.executeKdf = r, e.supportedAlgorithms = {
    xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
  };
  async function o(i, c, a) {
    switch (a.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = t.Random.getBytes(t.xchacha20NonceLength);
        return new Uint8Array([
          ...u,
          ...await t.Xchacha20poly1305Ietf.encrypt(i, c, u)
        ]);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`);
    }
  }
  e.encrypt = o;
  async function s(i, c, a) {
    switch (a.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = i.slice(0, t.xchacha20NonceLength);
        return t.Xchacha20poly1305Ietf.decrypt(i.slice(t.xchacha20NonceLength), c, u);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`);
    }
  }
  e.decrypt = s;
})(zs);
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.DirectSecp256k1HdWallet = Jt.extractKdfConfiguration = void 0;
const As = ot, Ee = ke, En = N, Ft = Z, Mm = Xe, Cn = zs, Mr = "directsecp256k1hdwallet-v1", Om = {
  algorithm: "argon2id",
  params: {
    outputLength: 32,
    opsLimit: 24,
    memLimitKib: 12 * 1024
  }
};
function jm(e) {
  return !(!(0, Ft.isNonNullObject)(e) || typeof e.hdPath != "string" || typeof e.prefix != "string");
}
function Bm(e) {
  return e.kdf;
}
function Rm(e) {
  const t = JSON.parse(e);
  if (!(0, Ft.isNonNullObject)(t))
    throw new Error("Root document is not an object.");
  switch (t.type) {
    case Mr:
      return Bm(t);
    default:
      throw new Error("Unsupported serialization type");
  }
}
Jt.extractKdfConfiguration = Rm;
const qi = {
  bip39Password: "",
  hdPaths: [(0, As.makeCosmoshubPath)(0)],
  prefix: "cosmos"
};
class At {
  /**
   * Restores a wallet from the given BIP39 mnemonic.
   *
   * @param mnemonic Any valid English mnemonic.
   * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async fromMnemonic(t, n = {}) {
    const r = new Ee.EnglishMnemonic(t), o = await Ee.Bip39.mnemonicToSeed(r, n.bip39Password);
    return new At(r, {
      ...n,
      seed: o
    });
  }
  /**
   * Generates a new wallet with a BIP39 mnemonic of the given length.
   *
   * @param length The number of words in the mnemonic (12, 15, 18, 21 or 24).
   * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async generate(t = 12, n = {}) {
    const r = 4 * Math.floor(11 * t / 33), o = Ee.Random.getBytes(r), s = Ee.Bip39.encode(o);
    return At.fromMnemonic(s.toString(), n);
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  static async deserialize(t, n) {
    const r = JSON.parse(t);
    if (!(0, Ft.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    switch (r.type) {
      case Mr:
        return At.deserializeTypeV1(t, n);
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * This is an advanced alternative to calling `deserialize(serialization, password)` directly, which allows
   * you to offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF configuration. This can be
   * done using `extractKdfConfiguration(serialization)` and `executeKdf(password, kdfConfiguration)` from this package.
   */
  static async deserializeWithEncryptionKey(t, n) {
    const r = JSON.parse(t);
    if (!(0, Ft.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const o = r;
    switch (o.type) {
      case Mr: {
        const s = await (0, Cn.decrypt)((0, En.fromBase64)(o.data), n, o.encryption), i = JSON.parse((0, En.fromUtf8)(s)), { mnemonic: c, accounts: a } = i;
        if ((0, Ft.assert)(typeof c == "string"), !Array.isArray(a))
          throw new Error("Property 'accounts' is not an array");
        if (!a.every((g) => jm(g)))
          throw new Error("Account is not in the correct format.");
        const u = a[0].prefix;
        if (!a.every(({ prefix: g }) => g === u))
          throw new Error("Accounts do not all have the same prefix");
        const d = a.map(({ hdPath: g }) => (0, Ee.stringToPath)(g));
        return At.fromMnemonic(c, {
          hdPaths: d,
          prefix: u
        });
      }
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  static async deserializeTypeV1(t, n) {
    const r = JSON.parse(t);
    if (!(0, Ft.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const o = await (0, Cn.executeKdf)(n, r.kdf);
    return At.deserializeWithEncryptionKey(t, o);
  }
  constructor(t, n) {
    const r = n.prefix ?? qi.prefix, o = n.hdPaths ?? qi.hdPaths;
    this.secret = t, this.seed = n.seed, this.accounts = o.map((s) => ({
      hdPath: s,
      prefix: r
    }));
  }
  get mnemonic() {
    return this.secret.toString();
  }
  async getAccounts() {
    return (await this.getAccountsWithPrivkeys()).map(({ algo: n, pubkey: r, address: o }) => ({
      algo: n,
      pubkey: r,
      address: o
    }));
  }
  async signDirect(t, n) {
    const o = (await this.getAccountsWithPrivkeys()).find(({ address: M }) => M === t);
    if (o === void 0)
      throw new Error(`Address ${t} not found in wallet`);
    const { privkey: s, pubkey: i } = o, c = (0, Mm.makeSignBytes)(n), a = (0, Ee.sha256)(c), u = await Ee.Secp256k1.createSignature(a, s), d = new Uint8Array([...u.r(32), ...u.s(32)]), g = (0, As.encodeSecp256k1Signature)(i, d);
    return {
      signed: n,
      signature: g
    };
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  async serialize(t) {
    const n = Om, r = await (0, Cn.executeKdf)(t, n);
    return this.serializeWithEncryptionKey(r, n);
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * This is an advanced alternative to calling `serialize(password)` directly, which allows you to
   * offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF options. If this
   * is not the case, the wallet cannot be restored with the original password.
   */
  async serializeWithEncryptionKey(t, n) {
    const r = {
      mnemonic: this.mnemonic,
      accounts: this.accounts.map(({ hdPath: a, prefix: u }) => ({
        hdPath: (0, Ee.pathToString)(a),
        prefix: u
      }))
    }, o = (0, En.toUtf8)(JSON.stringify(r)), s = {
      algorithm: Cn.supportedAlgorithms.xchacha20poly1305Ietf
    }, i = await (0, Cn.encrypt)(o, t, s), c = {
      type: Mr,
      kdf: n,
      encryption: s,
      data: (0, En.toBase64)(i)
    };
    return JSON.stringify(c);
  }
  async getKeyPair(t) {
    const { privkey: n } = Ee.Slip10.derivePath(Ee.Slip10Curve.Secp256k1, this.seed, t), { pubkey: r } = await Ee.Secp256k1.makeKeypair(n);
    return {
      privkey: n,
      pubkey: Ee.Secp256k1.compressPubkey(r)
    };
  }
  async getAccountsWithPrivkeys() {
    return Promise.all(this.accounts.map(async ({ hdPath: t, prefix: n }) => {
      const { privkey: r, pubkey: o } = await this.getKeyPair(t), s = (0, En.toBech32)(n, (0, As.rawSecp256k1PubkeyToRawAddress)(o));
      return {
        algo: "secp256k1",
        privkey: r,
        pubkey: o,
        address: s
      };
    }));
  }
}
Jt.DirectSecp256k1HdWallet = At;
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.DirectSecp256k1Wallet = void 0;
const Hi = ot, mr = ke, Im = N, $m = Xe;
class Ks {
  /**
   * Creates a DirectSecp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  static async fromKey(t, n = "cosmos") {
    const r = (await mr.Secp256k1.makeKeypair(t)).pubkey;
    return new Ks(t, mr.Secp256k1.compressPubkey(r), n);
  }
  constructor(t, n, r) {
    this.privkey = t, this.pubkey = n, this.prefix = r;
  }
  get address() {
    return (0, Im.toBech32)(this.prefix, (0, Hi.rawSecp256k1PubkeyToRawAddress)(this.pubkey));
  }
  async getAccounts() {
    return [
      {
        algo: "secp256k1",
        address: this.address,
        pubkey: this.pubkey
      }
    ];
  }
  async signDirect(t, n) {
    const r = (0, $m.makeSignBytes)(n);
    if (t !== this.address)
      throw new Error(`Address ${t} not found in wallet`);
    const o = (0, mr.sha256)(r), s = await mr.Secp256k1.createSignature(o, this.privkey), i = new Uint8Array([...s.r(32), ...s.s(32)]), c = (0, Hi.encodeSecp256k1Signature)(this.pubkey, i);
    return {
      signed: n,
      signature: c
    };
  }
}
eo.DirectSecp256k1Wallet = Ks;
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.makeCosmoshubPath = void 0;
const Mn = ke;
function Nm(e) {
  return [
    Mn.Slip10RawIndex.hardened(44),
    Mn.Slip10RawIndex.hardened(118),
    Mn.Slip10RawIndex.hardened(0),
    Mn.Slip10RawIndex.normal(0),
    Mn.Slip10RawIndex.normal(e)
  ];
}
to.makeCosmoshubPath = Nm;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.decodeOptionalPubkey = ze.decodePubkey = ze.anyToSinglePubkey = ze.encodePubkey = void 0;
const qn = ot, Vi = N, xm = Y, Ts = Au, Es = Tu, Cs = Eu, ss = Us;
function Qa(e) {
  if ((0, qn.isSecp256k1Pubkey)(e)) {
    const t = Cs.PubKey.fromPartial({
      key: (0, Vi.fromBase64)(e.value)
    });
    return ss.Any.fromPartial({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: Uint8Array.from(Cs.PubKey.encode(t).finish())
    });
  } else if ((0, qn.isEd25519Pubkey)(e)) {
    const t = Ts.PubKey.fromPartial({
      key: (0, Vi.fromBase64)(e.value)
    });
    return ss.Any.fromPartial({
      typeUrl: "/cosmos.crypto.ed25519.PubKey",
      value: Uint8Array.from(Ts.PubKey.encode(t).finish())
    });
  } else if ((0, qn.isMultisigThresholdPubkey)(e)) {
    const t = Es.LegacyAminoPubKey.fromPartial({
      threshold: xm.Uint53.fromString(e.value.threshold).toNumber(),
      publicKeys: e.value.pubkeys.map(Qa)
    });
    return ss.Any.fromPartial({
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: Uint8Array.from(Es.LegacyAminoPubKey.encode(t).finish())
    });
  } else
    throw new Error(`Pubkey type ${e.type} not recognized`);
}
ze.encodePubkey = Qa;
function Ms(e) {
  switch (e.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey": {
      const { key: t } = Cs.PubKey.decode(e.value);
      return (0, qn.encodeSecp256k1Pubkey)(t);
    }
    case "/cosmos.crypto.ed25519.PubKey": {
      const { key: t } = Ts.PubKey.decode(e.value);
      return (0, qn.encodeEd25519Pubkey)(t);
    }
    default:
      throw new Error(`Pubkey type_url ${e.typeUrl} not recognized as single public key type`);
  }
}
ze.anyToSinglePubkey = Ms;
function Za(e) {
  switch (e.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey":
    case "/cosmos.crypto.ed25519.PubKey":
      return Ms(e);
    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
      const { threshold: t, publicKeys: n } = Es.LegacyAminoPubKey.decode(e.value);
      return {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: t.toString(),
          pubkeys: n.map(Ms)
        }
      };
    }
    default:
      throw new Error(`Pubkey type URL '${e.typeUrl}' not recognized`);
  }
}
ze.decodePubkey = Za;
function Dm(e) {
  if (!e)
    return null;
  if (e.typeUrl) {
    if (e.value.length)
      return Za(e);
    throw new Error(`Pubkey is an Any with type URL '${e.typeUrl}' but an empty value`);
  } else {
    if (e.value.length)
      throw new Error("Pubkey is an Any with an empty type URL but a value set");
    return null;
  }
}
ze.decodeOptionalPubkey = Dm;
var Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.Registry = Ce.isTxBodyEncodeObject = Ce.isPbjsGeneratedType = Ce.isTsProtoGeneratedType = Ce.isTelescopeGeneratedType = void 0;
const Um = pa, qm = ga, is = jt, Hm = Us;
function Xa(e) {
  const t = e;
  return typeof t.fromPartial == "function" && typeof t.typeUrl == "string";
}
Ce.isTelescopeGeneratedType = Xa;
function Qs(e) {
  return typeof e.fromPartial == "function";
}
Ce.isTsProtoGeneratedType = Qs;
function Vm(e) {
  return !Qs(e);
}
Ce.isPbjsGeneratedType = Vm;
const Fi = {
  cosmosCoin: "/cosmos.base.v1beta1.Coin",
  cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
  cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
  googleAny: "/google.protobuf.Any"
};
function Ya(e) {
  return e.typeUrl === "/cosmos.tx.v1beta1.TxBody";
}
Ce.isTxBodyEncodeObject = Ya;
class Fm {
  /**
   * Creates a new Registry for mapping protobuf type identifiers/type URLs to
   * actual implementations. Those implementations are typically generated with ts-proto
   * but we also support protobuf.js as a type generator.
   *
   * If there is no parameter given, a `new Registry()` adds the types `Coin` and `MsgSend`
   * for historic reasons. Those can be overriden by customTypes.
   *
   * There are currently two methods for adding new types:
   * 1. Passing types to the constructor.
   * 2. Using the `register()` method
   */
  constructor(t) {
    const { cosmosCoin: n, cosmosMsgSend: r } = Fi;
    this.types = t ? new Map([...t]) : /* @__PURE__ */ new Map([
      [n, qm.Coin],
      [r, Um.MsgSend]
    ]);
  }
  register(t, n) {
    this.types.set(t, n);
  }
  /**
   * Looks up a type that was previously added to the registry.
   *
   * The generator information (ts-proto or pbjs) gets lost along the way.
   * If you need to work with the result type in TypeScript, you can use:
   *
   * ```
   * import { assert } from "@cosmjs/utils";
   *
   * const Coin = registry.lookupType("/cosmos.base.v1beta1.Coin");
   * assert(Coin); // Ensures not unset
   * assert(isTsProtoGeneratedType(Coin)); // Ensures this is the type we expect
   *
   * // Coin is typed TsProtoGeneratedType now.
   * ```
   */
  lookupType(t) {
    return this.types.get(t);
  }
  lookupTypeWithError(t) {
    const n = this.lookupType(t);
    if (!n)
      throw new Error(`Unregistered type url: ${t}`);
    return n;
  }
  /**
   * Takes a typeUrl/value pair and encodes the value to protobuf if
   * the given type was previously registered.
   *
   * If the value has to be wrapped in an Any, this needs to be done
   * manually after this call. Or use `encodeAsAny` instead.
   */
  encode(t) {
    const { value: n, typeUrl: r } = t;
    if (Ya(t))
      return this.encodeTxBody(n);
    const o = this.lookupTypeWithError(r), s = Xa(o) || Qs(o) ? o.fromPartial(n) : o.create(n);
    return o.encode(s).finish();
  }
  /**
   * Takes a typeUrl/value pair and encodes the value to an Any if
   * the given type was previously registered.
   */
  encodeAsAny(t) {
    const n = this.encode(t);
    return Hm.Any.fromPartial({
      typeUrl: t.typeUrl,
      value: n
    });
  }
  encodeTxBody(t) {
    var o;
    const n = t.messages.map((s) => this.encodeAsAny(s)), r = is.TxBody.fromPartial({
      ...t,
      timeoutHeight: BigInt(((o = t.timeoutHeight) == null ? void 0 : o.toString()) ?? "0"),
      messages: n
    });
    return is.TxBody.encode(r).finish();
  }
  decode({ typeUrl: t, value: n }) {
    if (t === Fi.cosmosTxBody)
      return this.decodeTxBody(n);
    const o = this.lookupTypeWithError(t).decode(n);
    return Object.entries(o).forEach(([s, i]) => {
      typeof et.Buffer < "u" && typeof et.Buffer.isBuffer < "u" && et.Buffer.isBuffer(i) && (o[s] = Uint8Array.from(i));
    }), o;
  }
  decodeTxBody(t) {
    const n = is.TxBody.decode(t);
    return {
      ...n,
      messages: n.messages.map(({ typeUrl: r, value: o }) => {
        if (!r)
          throw new Error("Missing type_url in Any");
        if (!o)
          throw new Error("Missing value in Any");
        return this.decode({ typeUrl: r, value: o });
      })
    };
  }
}
Ce.Registry = Fm;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.isOfflineDirectSigner = void 0;
function Wm(e) {
  return e.signDirect !== void 0;
}
no.isOfflineDirectSigner = Wm;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseCoins = e.coins = e.coin = e.executeKdf = e.makeSignDoc = e.makeSignBytes = e.makeAuthInfoBytes = e.isOfflineDirectSigner = e.Registry = e.isTxBodyEncodeObject = e.isTsProtoGeneratedType = e.isPbjsGeneratedType = e.encodePubkey = e.decodePubkey = e.decodeOptionalPubkey = e.anyToSinglePubkey = e.makeCosmoshubPath = e.DirectSecp256k1Wallet = e.extractKdfConfiguration = e.DirectSecp256k1HdWallet = e.decodeTxRaw = void 0;
  var t = Gr;
  Object.defineProperty(e, "decodeTxRaw", { enumerable: !0, get: function() {
    return t.decodeTxRaw;
  } });
  var n = Jt;
  Object.defineProperty(e, "DirectSecp256k1HdWallet", { enumerable: !0, get: function() {
    return n.DirectSecp256k1HdWallet;
  } }), Object.defineProperty(e, "extractKdfConfiguration", { enumerable: !0, get: function() {
    return n.extractKdfConfiguration;
  } });
  var r = eo;
  Object.defineProperty(e, "DirectSecp256k1Wallet", { enumerable: !0, get: function() {
    return r.DirectSecp256k1Wallet;
  } });
  var o = to;
  Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return o.makeCosmoshubPath;
  } });
  var s = ze;
  Object.defineProperty(e, "anyToSinglePubkey", { enumerable: !0, get: function() {
    return s.anyToSinglePubkey;
  } }), Object.defineProperty(e, "decodeOptionalPubkey", { enumerable: !0, get: function() {
    return s.decodeOptionalPubkey;
  } }), Object.defineProperty(e, "decodePubkey", { enumerable: !0, get: function() {
    return s.decodePubkey;
  } }), Object.defineProperty(e, "encodePubkey", { enumerable: !0, get: function() {
    return s.encodePubkey;
  } });
  var i = Ce;
  Object.defineProperty(e, "isPbjsGeneratedType", { enumerable: !0, get: function() {
    return i.isPbjsGeneratedType;
  } }), Object.defineProperty(e, "isTsProtoGeneratedType", { enumerable: !0, get: function() {
    return i.isTsProtoGeneratedType;
  } }), Object.defineProperty(e, "isTxBodyEncodeObject", { enumerable: !0, get: function() {
    return i.isTxBodyEncodeObject;
  } }), Object.defineProperty(e, "Registry", { enumerable: !0, get: function() {
    return i.Registry;
  } });
  var c = no;
  Object.defineProperty(e, "isOfflineDirectSigner", { enumerable: !0, get: function() {
    return c.isOfflineDirectSigner;
  } });
  var a = Xe;
  Object.defineProperty(e, "makeAuthInfoBytes", { enumerable: !0, get: function() {
    return a.makeAuthInfoBytes;
  } }), Object.defineProperty(e, "makeSignBytes", { enumerable: !0, get: function() {
    return a.makeSignBytes;
  } }), Object.defineProperty(e, "makeSignDoc", { enumerable: !0, get: function() {
    return a.makeSignDoc;
  } });
  var u = zs;
  Object.defineProperty(e, "executeKdf", { enumerable: !0, get: function() {
    return u.executeKdf;
  } });
  var d = ot;
  Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return d.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return d.coins;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return d.parseCoins;
  } });
})(vt);
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.accountFromAny = void 0;
const Jm = Y, Gm = vt, On = Z, Wi = Cu, fr = Mu;
function Ji(e) {
  return Jm.Uint64.fromString(e.toString());
}
function Dt(e) {
  const { address: t, pubKey: n, accountNumber: r, sequence: o } = e, s = (0, Gm.decodeOptionalPubkey)(n);
  return {
    address: t,
    pubkey: s,
    accountNumber: Ji(r).toNumber(),
    sequence: Ji(o).toNumber()
  };
}
function Lm(e) {
  var r, o, s, i, c, a, u;
  const { typeUrl: t, value: n } = e;
  switch (t) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return Dt(Wi.BaseAccount.decode(n));
    case "/cosmos.auth.v1beta1.ModuleAccount": {
      const d = Wi.ModuleAccount.decode(n).baseAccount;
      return (0, On.assert)(d), Dt(d);
    }
    case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
      const d = (r = fr.BaseVestingAccount.decode(n)) == null ? void 0 : r.baseAccount;
      return (0, On.assert)(d), Dt(d);
    }
    case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
      const d = (s = (o = fr.ContinuousVestingAccount.decode(n)) == null ? void 0 : o.baseVestingAccount) == null ? void 0 : s.baseAccount;
      return (0, On.assert)(d), Dt(d);
    }
    case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
      const d = (c = (i = fr.DelayedVestingAccount.decode(n)) == null ? void 0 : i.baseVestingAccount) == null ? void 0 : c.baseAccount;
      return (0, On.assert)(d), Dt(d);
    }
    case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
      const d = (u = (a = fr.PeriodicVestingAccount.decode(n)) == null ? void 0 : a.baseVestingAccount) == null ? void 0 : u.baseAccount;
      return (0, On.assert)(d), Dt(d);
    }
    default:
      throw new Error(`Unsupported type: '${t}'`);
  }
}
zn.accountFromAny = Lm;
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.AminoTypes = void 0;
class zm {
  constructor(t) {
    this.register = t;
  }
  toAmino({ typeUrl: t, value: n }) {
    const r = this.register[t];
    if (!r)
      throw new Error(`Type URL '${t}' does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.`);
    return {
      type: r.aminoType,
      value: r.toAmino(n)
    };
  }
  fromAmino({ type: t, value: n }) {
    const r = Object.entries(this.register).filter(([o, { aminoType: s }]) => s === t);
    switch (r.length) {
      case 0:
        throw new Error(`Amino type identifier '${t}' does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.`);
      case 1: {
        const [o, s] = r[0];
        return {
          typeUrl: o,
          value: s.fromAmino(n)
        };
      }
      default:
        throw new Error(`Multiple types are registered with Amino type identifier '${t}': '` + r.map(([o, s]) => o).sort().join("', '") + "'. Thus fromAmino cannot be performed.");
    }
  }
}
Xn.AminoTypes = zm;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.fromTendermintEvent = void 0;
const Gi = N;
function Km(e) {
  return {
    type: e.type,
    attributes: e.attributes.map((t) => ({
      key: typeof t.key == "string" ? t.key : (0, Gi.fromUtf8)(t.key, !0),
      value: typeof t.value == "string" ? t.value : (0, Gi.fromUtf8)(t.value, !0)
    }))
  };
}
Yn.fromTendermintEvent = Km;
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.calculateFee = Ot.GasPrice = void 0;
const ec = Y, Qm = vt;
function Zm(e) {
  if (e.length < 3 || e.length > 128)
    throw new Error("Denom must be between 3 and 128 characters");
}
class ro {
  constructor(t, n) {
    this.amount = t, this.denom = n;
  }
  /**
   * Parses a gas price formatted as `<amount><denom>`, e.g. `GasPrice.fromString("0.012utoken")`.
   *
   * The denom must match the Cosmos SDK 0.42 pattern (https://github.com/cosmos/cosmos-sdk/blob/v0.42.4/types/coin.go#L599-L601).
   * See `GasPrice` in @cosmjs/stargate for a more generic matcher.
   *
   * Separators are not yet supported.
   */
  static fromString(t) {
    const n = t.match(/^([0-9.]+)([a-zA-Z][a-zA-Z0-9/:._-]*)$/);
    if (!n)
      throw new Error("Invalid gas price string");
    const [r, o, s] = n;
    Zm(s);
    const c = ec.Decimal.fromUserInput(o, 18);
    return new ro(c, s);
  }
  /**
   * Returns a string representation of this gas price, e.g. "0.025uatom".
   * This can be used as an input to `GasPrice.fromString`.
   */
  toString() {
    return this.amount.toString() + this.denom;
  }
}
Ot.GasPrice = ro;
function Xm(e, t) {
  const n = typeof t == "string" ? ro.fromString(t) : t, { denom: r, amount: o } = n, s = o.multiply(new ec.Uint53(e)).ceil().toString();
  return {
    amount: (0, Qm.coins)(s, r),
    gas: e.toString()
  };
}
Ot.calculateFee = Xm;
var pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.findAttribute = pe.parseRawLog = pe.parseLogs = pe.parseLog = pe.parseEvent = pe.parseAttribute = void 0;
const Zs = Z;
function tc(e) {
  if (!(0, Zs.isNonNullObject)(e))
    throw new Error("Attribute must be a non-null object");
  const { key: t, value: n } = e;
  if (typeof t != "string" || !t)
    throw new Error("Attribute's key must be a non-empty string");
  if (typeof n != "string" && typeof n < "u")
    throw new Error("Attribute's value must be a string or unset");
  return {
    key: t,
    value: n || ""
  };
}
pe.parseAttribute = tc;
function nc(e) {
  if (!(0, Zs.isNonNullObject)(e))
    throw new Error("Event must be a non-null object");
  const { type: t, attributes: n } = e;
  if (typeof t != "string" || t === "")
    throw new Error("Event type must be a non-empty string");
  if (!Array.isArray(n))
    throw new Error("Event's attributes must be an array");
  return {
    type: t,
    attributes: n.map(tc)
  };
}
pe.parseEvent = nc;
function rc(e) {
  if (!(0, Zs.isNonNullObject)(e))
    throw new Error("Log must be a non-null object");
  const { msg_index: t, log: n, events: r } = e;
  if (typeof t != "number")
    throw new Error("Log's msg_index must be a number");
  if (typeof n != "string")
    throw new Error("Log's log must be a string");
  if (!Array.isArray(r))
    throw new Error("Log's events must be an array");
  return {
    msg_index: t,
    log: n,
    events: r.map(nc)
  };
}
pe.parseLog = rc;
function oc(e) {
  if (!Array.isArray(e))
    throw new Error("Logs must be an array");
  return e.map(rc);
}
pe.parseLogs = oc;
function Ym(e) {
  if (!e)
    return [];
  const t = JSON.parse(e).map(({ events: n }, r) => ({
    msg_index: r,
    events: n,
    log: ""
  }));
  return oc(t);
}
pe.parseRawLog = Ym;
function ef(e, t, n) {
  var s;
  const r = e.find(() => !0), o = (s = r == null ? void 0 : r.events.find((i) => i.type === t)) == null ? void 0 : s.attributes.find((i) => i.key === n);
  if (!o)
    throw new Error(`Could not find attribute '${n}' in first event of type '${t}' in first log.`);
  return o;
}
pe.findAttribute = ef;
var Wn = {}, oo = {}, ie = {}, so = {}, er = {}, io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.concat = void 0;
const tf = Bt;
function nf(...e) {
  const t = new Array(), n = new Array(), r = /* @__PURE__ */ new Set();
  let o = 0;
  function s() {
    for (; t.length > 0; )
      t.shift().unsubscribe();
    n.length = 0, r.clear(), o = 0;
  }
  const i = {
    start: (c) => {
      e.forEach((d) => n.push([]));
      function a(d) {
        for (; ; ) {
          const g = n[d].shift();
          if (g === void 0)
            return;
          c.next(g);
        }
      }
      function u() {
        return o >= e.length;
      }
      if (u()) {
        c.complete();
        return;
      }
      e.forEach((d, g) => {
        t.push(d.subscribe({
          next: (M) => {
            g === o ? c.next(M) : n[g].push(M);
          },
          complete: () => {
            for (r.add(g); r.has(o); )
              a(o), o++;
            u() ? c.complete() : a(o);
          },
          error: (M) => {
            c.error(M), s();
          }
        }));
      });
    },
    stop: () => {
      s();
    }
  };
  return tf.Stream.create(i);
}
io.concat = nf;
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.DefaultValueProducer = void 0;
class rf {
  get value() {
    return this.internalValue;
  }
  constructor(t, n) {
    this.callbacks = n, this.internalValue = t;
  }
  /**
   * Update the current value.
   *
   * If producer is active (i.e. someone is listening), this emits an event.
   * If not, just the current value is updated.
   */
  update(t) {
    this.internalValue = t, this.listener && this.listener.next(t);
  }
  /**
   * Produce an error
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  error(t) {
    this.listener && this.listener.error(t);
  }
  /**
   * Called by the stream. Do not call this directly.
   */
  start(t) {
    this.listener = t, t.next(this.internalValue), this.callbacks && this.callbacks.onStarted();
  }
  /**
   * Called by the stream. Do not call this directly.
   */
  stop() {
    this.callbacks && this.callbacks.onStop(), this.listener = void 0;
  }
}
ao.DefaultValueProducer = rf;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.dropDuplicates = void 0;
function of(e) {
  return (n) => {
    const r = /* @__PURE__ */ new Set();
    return n.filter((s) => !r.has(e(s))).debug((s) => r.add(e(s)));
  };
}
co.dropDuplicates = of;
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.firstEvent = ft.toListPromise = ft.fromListPromise = void 0;
const sf = Bt;
function af(e) {
  const t = {
    start: (n) => {
      e.then((r) => {
        for (const o of r)
          n.next(o);
        n.complete();
      }).catch((r) => n.error(r));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    stop: () => {
    }
  };
  return sf.Stream.create(t);
}
ft.fromListPromise = af;
async function sc(e, t) {
  return new Promise((n, r) => {
    if (t === 0) {
      n([]);
      return;
    }
    const o = new Array();
    e.take(t).subscribe({
      next: (s) => {
        o.push(s), o.length === t && n(o);
      },
      complete: () => {
        r(`Stream completed before all events could be collected. Collected ${o.length}, expected ${t}`);
      },
      error: (s) => r(s)
    });
  });
}
ft.toListPromise = sc;
async function cf(e) {
  return (await sc(e, 1))[0];
}
ft.firstEvent = cf;
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.lastValue = Ke.asArray = Ke.countStream = Ke.Reducer = void 0;
class uo {
  constructor(t, n, r) {
    this.stream = t, this.reducer = n, this.state = r, this.completed = new Promise((o, s) => {
      const i = this.stream.subscribe({
        next: (c) => {
          this.state = this.reducer(this.state, c);
        },
        complete: () => {
          o(), i.unsubscribe();
        },
        error: (c) => {
          s(c), i.unsubscribe();
        }
      });
    });
  }
  // value returns current materialized state
  value() {
    return this.state;
  }
  // finished resolves on completed stream, rejects on stream error
  async finished() {
    return this.completed;
  }
}
Ke.Reducer = uo;
function uf(e, t) {
  return e + 1;
}
function df(e) {
  return new uo(e, uf, 0);
}
Ke.countStream = df;
function lf(e, t) {
  return [...e, t];
}
function mf(e) {
  return new uo(e, lf, []);
}
Ke.asArray = mf;
function ff(e, t) {
  return t;
}
function hf(e) {
  return new uo(e, ff, void 0);
}
Ke.lastValue = hf;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.ValueAndUpdates = void 0;
const pf = Bt;
class gf {
  get value() {
    return this.producer.value;
  }
  constructor(t) {
    this.producer = t, this.updates = pf.MemoryStream.createWithMemory(this.producer);
  }
  /**
   * Resolves as soon as search value is found.
   *
   * @param search either a value or a function that must return true when found
   * @returns the value of the update that caused the search match
   */
  async waitFor(t) {
    const n = typeof t == "function" ? t : (r) => r === t;
    return new Promise((r, o) => {
      const s = this.updates.subscribe({
        next: (i) => {
          n(i) && (r(i), setTimeout(() => s.unsubscribe(), 0));
        },
        complete: () => {
          s.unsubscribe(), o("Update stream completed without expected value");
        },
        error: (i) => {
          o(i);
        }
      });
    });
  }
}
lo.ValueAndUpdates = gf;
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(a, u, d, g) {
    g === void 0 && (g = d);
    var M = Object.getOwnPropertyDescriptor(u, d);
    (!M || ("get" in M ? !u.__esModule : M.writable || M.configurable)) && (M = { enumerable: !0, get: function() {
      return u[d];
    } }), Object.defineProperty(a, g, M);
  } : function(a, u, d, g) {
    g === void 0 && (g = d), a[g] = u[d];
  }), n = h && h.__exportStar || function(a, u) {
    for (var d in a)
      d !== "default" && !Object.prototype.hasOwnProperty.call(u, d) && t(u, a, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueAndUpdates = e.toListPromise = e.fromListPromise = e.firstEvent = e.dropDuplicates = e.DefaultValueProducer = e.concat = void 0;
  var r = io;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return r.concat;
  } });
  var o = ao;
  Object.defineProperty(e, "DefaultValueProducer", { enumerable: !0, get: function() {
    return o.DefaultValueProducer;
  } });
  var s = co;
  Object.defineProperty(e, "dropDuplicates", { enumerable: !0, get: function() {
    return s.dropDuplicates;
  } });
  var i = ft;
  Object.defineProperty(e, "firstEvent", { enumerable: !0, get: function() {
    return i.firstEvent;
  } }), Object.defineProperty(e, "fromListPromise", { enumerable: !0, get: function() {
    return i.fromListPromise;
  } }), Object.defineProperty(e, "toListPromise", { enumerable: !0, get: function() {
    return i.toListPromise;
  } }), n(Ke, e);
  var c = lo;
  Object.defineProperty(e, "ValueAndUpdates", { enumerable: !0, get: function() {
    return c.ValueAndUpdates;
  } });
})(er);
Object.defineProperty(so, "__esModule", { value: !0 });
so.QueryClient = void 0;
const St = Ou, Tt = N, yf = er, me = Z;
function hr(e, t, n) {
  if (e.type !== t)
    throw new Error(`Op expected to be ${t}, got "${e.type}`);
  if (!(0, me.arrayContentEquals)(n, e.key))
    throw new Error(`Proven key different than queried key.
Query: ${(0, Tt.toHex)(n)}
Proven: ${(0, Tt.toHex)(e.key)}`);
  return St.ics23.CommitmentProof.decode(e.data);
}
class Xs {
  static withExtensions(t, ...n) {
    const r = new Xs(t), o = n.map((s) => s(r));
    for (const s of o) {
      (0, me.assert)((0, me.isNonNullObject)(s), "Extension must be a non-null object");
      for (const [i, c] of Object.entries(s)) {
        (0, me.assert)((0, me.isNonNullObject)(c), `Module must be a non-null object. Found type ${typeof c} for module "${i}".`);
        const a = r[i] || {};
        r[i] = {
          ...a,
          ...c
        };
      }
    }
    return r;
  }
  constructor(t) {
    this.cometClient = t;
  }
  /**
   * Queries the database store with a proof, which is then verified.
   *
   * Please note: the current implementation trusts block headers it gets from the PRC endpoint.
   */
  async queryStoreVerified(t, n, r) {
    const { height: o, proof: s, key: i, value: c } = await this.queryRawProof(t, n, r), a = hr(s.ops[0], "ics23:iavl", n), u = hr(s.ops[1], "ics23:simple", (0, Tt.toAscii)(t));
    (0, me.assert)(u.exist), (0, me.assert)(u.exist.value), !c || c.length === 0 ? ((0, me.assert)(a.nonexist), (0, St.verifyNonExistence)(a.nonexist, St.iavlSpec, u.exist.value, n)) : ((0, me.assert)(a.exist), (0, me.assert)(a.exist.value), (0, St.verifyExistence)(a.exist, St.iavlSpec, u.exist.value, n, c));
    const d = await this.getNextHeader(o);
    return (0, St.verifyExistence)(u.exist, St.tendermintSpec, d.appHash, (0, Tt.toAscii)(t), u.exist.value), { key: i, value: c, height: o };
  }
  async queryRawProof(t, n, r) {
    const { key: o, value: s, height: i, proof: c, code: a, log: u } = await this.cometClient.abciQuery({
      // we need the StoreKey for the module, not the module name
      // https://github.com/cosmos/cosmos-sdk/blob/8cab43c8120fec5200c3459cbf4a92017bb6f287/x/auth/types/keys.go#L12
      path: `/store/${t}/key`,
      data: n,
      prove: !0,
      height: r
    });
    if (a)
      throw new Error(`Query failed with (${a}): ${u}`);
    if (!(0, me.arrayContentEquals)(n, o))
      throw new Error(`Response key ${(0, Tt.toHex)(o)} doesn't match query key ${(0, Tt.toHex)(n)}`);
    if (!i)
      throw new Error("No query height returned");
    if (!c || c.ops.length !== 2)
      throw new Error(`Expected 2 proof ops, got ${(c == null ? void 0 : c.ops.length) ?? 0}. Are you using stargate?`);
    return hr(c.ops[0], "ics23:iavl", o), hr(c.ops[1], "ics23:simple", (0, Tt.toAscii)(t)), {
      key: o,
      value: s,
      height: i,
      // need to clone this: readonly input / writeable output
      proof: {
        ops: [...c.ops]
      }
    };
  }
  /**
   * Performs an ABCI query to Tendermint without requesting a proof.
   *
   * If the `desiredHeight` is set, a particular height is requested. Otherwise
   * the latest height is requested. The response contains the actual height of
   * the query.
   */
  async queryAbci(t, n, r) {
    const o = await this.cometClient.abciQuery({
      path: t,
      data: n,
      prove: !1,
      height: r
    });
    if (o.code)
      throw new Error(`Query failed with (${o.code}): ${o.log}`);
    if (!o.height)
      throw new Error("No query height returned");
    return {
      value: o.value,
      height: o.height
    };
  }
  // this must return the header for height+1
  // throws an error if height is 0 or undefined
  async getNextHeader(t) {
    if ((0, me.assertDefined)(t), t === 0)
      throw new Error("Query returned height 0, cannot prove it");
    const n = t + 1;
    let r, o;
    try {
      o = this.cometClient.subscribeNewBlockHeader();
    } catch {
    }
    if (o) {
      const s = await (0, yf.firstEvent)(o);
      s.height === n && (r = s);
    }
    for (; !r; ) {
      const s = (await this.cometClient.blockchain(t, n)).blockMetas.map((i) => i.header).find((i) => i.height === n);
      s ? r = s : await (0, me.sleep)(1e3);
    }
    return (0, me.assert)(r.height === n, "Got wrong header. This is a bug in the logic above."), r;
  }
}
so.QueryClient = Xs;
var Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.decodeCosmosSdkDecFromProto = Me.longify = Me.createProtobufRpcClient = Me.createPagination = Me.toAccAddress = void 0;
const ic = N, ac = Y, Li = ju;
function bf(e) {
  return (0, ic.fromBech32)(e).data;
}
Me.toAccAddress = bf;
function vf(e) {
  return e ? Li.PageRequest.fromPartial({ key: e }) : Li.PageRequest.fromPartial({});
}
Me.createPagination = vf;
function wf(e) {
  return {
    request: async (t, n, r) => {
      const o = `/${t}/${n}`;
      return (await e.queryAbci(o, r, void 0)).value;
    }
  };
}
Me.createProtobufRpcClient = wf;
function kf(e) {
  const t = ac.Uint64.fromString(e.toString());
  return BigInt(t.toString());
}
Me.longify = kf;
function _f(e) {
  const t = typeof e == "string" ? e : (0, ic.fromAscii)(e);
  return ac.Decimal.fromAtomics(t, 18);
}
Me.decodeCosmosSdkDecFromProto = _f;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.longify = e.decodeCosmosSdkDecFromProto = e.createProtobufRpcClient = e.createPagination = e.QueryClient = void 0;
  var t = so;
  Object.defineProperty(e, "QueryClient", { enumerable: !0, get: function() {
    return t.QueryClient;
  } });
  var n = Me;
  Object.defineProperty(e, "createPagination", { enumerable: !0, get: function() {
    return n.createPagination;
  } }), Object.defineProperty(e, "createProtobufRpcClient", { enumerable: !0, get: function() {
    return n.createProtobufRpcClient;
  } }), Object.defineProperty(e, "decodeCosmosSdkDecFromProto", { enumerable: !0, get: function() {
    return n.decodeCosmosSdkDecFromProto;
  } }), Object.defineProperty(e, "longify", { enumerable: !0, get: function() {
    return n.longify;
  } });
})(ie);
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.setupAuthExtension = void 0;
const Sf = Bu, Pf = ie;
function Af(e) {
  const t = (0, Pf.createProtobufRpcClient)(e), n = new Sf.QueryClientImpl(t);
  return {
    auth: {
      account: async (r) => {
        const { account: o } = await n.Account({ address: r });
        return o ?? null;
      }
    }
  };
}
oo.setupAuthExtension = Af;
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.createAuthzAminoConverters = void 0;
function Tf() {
  return {
    // For Cosmos SDK < 0.46 the Amino JSON codec was broken on chain and thus inaccessible.
    // Now this can be implemented for 0.46+ chains, see
    // https://github.com/cosmos/cosmjs/issues/1092
    //
    // "/cosmos.authz.v1beta1.MsgGrant": IMPLEMENT ME,
    // "/cosmos.authz.v1beta1.MsgExec": IMPLEMENT ME,
    // "/cosmos.authz.v1beta1.MsgRevoke": IMPLEMENT ME,
  };
}
mo.createAuthzAminoConverters = Tf;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.authzTypes = void 0;
const as = Ru;
fo.authzTypes = [
  ["/cosmos.authz.v1beta1.MsgExec", as.MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", as.MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", as.MsgRevoke]
];
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.setupAuthzExtension = void 0;
const Ef = Iu, pr = ie;
function Cf(e) {
  const t = (0, pr.createProtobufRpcClient)(e), n = new Ef.QueryClientImpl(t);
  return {
    authz: {
      grants: async (r, o, s, i) => await n.Grants({
        granter: r,
        grantee: o,
        msgTypeUrl: s,
        pagination: (0, pr.createPagination)(i)
      }),
      granteeGrants: async (r, o) => await n.GranteeGrants({
        grantee: r,
        pagination: (0, pr.createPagination)(o)
      }),
      granterGrants: async (r, o) => await n.GranterGrants({
        granter: r,
        pagination: (0, pr.createPagination)(o)
      })
    }
  };
}
ho.setupAuthzExtension = Cf;
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.createBankAminoConverters = ht.isAminoMsgMultiSend = ht.isAminoMsgSend = void 0;
function Mf(e) {
  return e.type === "cosmos-sdk/MsgSend";
}
ht.isAminoMsgSend = Mf;
function Of(e) {
  return e.type === "cosmos-sdk/MsgMultiSend";
}
ht.isAminoMsgMultiSend = Of;
function jf() {
  return {
    "/cosmos.bank.v1beta1.MsgSend": {
      aminoType: "cosmos-sdk/MsgSend",
      toAmino: ({ fromAddress: e, toAddress: t, amount: n }) => ({
        from_address: e,
        to_address: t,
        amount: [...n]
      }),
      fromAmino: ({ from_address: e, to_address: t, amount: n }) => ({
        fromAddress: e,
        toAddress: t,
        amount: [...n]
      })
    },
    "/cosmos.bank.v1beta1.MsgMultiSend": {
      aminoType: "cosmos-sdk/MsgMultiSend",
      toAmino: ({ inputs: e, outputs: t }) => ({
        inputs: e.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        })),
        outputs: t.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        }))
      }),
      fromAmino: ({ inputs: e, outputs: t }) => ({
        inputs: e.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        })),
        outputs: t.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        }))
      })
    }
  };
}
ht.createBankAminoConverters = jf;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.isMsgSendEncodeObject = rn.bankTypes = void 0;
const zi = pa;
rn.bankTypes = [
  ["/cosmos.bank.v1beta1.MsgMultiSend", zi.MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", zi.MsgSend]
];
function Bf(e) {
  return e.typeUrl === "/cosmos.bank.v1beta1.MsgSend";
}
rn.isMsgSendEncodeObject = Bf;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.setupBankExtension = void 0;
const cs = Z, us = $u, Ki = ie;
function Rf(e) {
  const t = (0, Ki.createProtobufRpcClient)(e), n = new us.QueryClientImpl(t);
  return {
    bank: {
      balance: async (r, o) => {
        const { balance: s } = await n.Balance({ address: r, denom: o });
        return (0, cs.assert)(s), s;
      },
      allBalances: async (r) => {
        const { balances: o } = await n.AllBalances(us.QueryAllBalancesRequest.fromPartial({ address: r }));
        return o;
      },
      totalSupply: async (r) => await n.TotalSupply({
        pagination: (0, Ki.createPagination)(r)
      }),
      supplyOf: async (r) => {
        const { amount: o } = await n.SupplyOf({ denom: r });
        return (0, cs.assert)(o), o;
      },
      denomMetadata: async (r) => {
        const { metadata: o } = await n.DenomMetadata({ denom: r });
        return (0, cs.assert)(o), o;
      },
      denomsMetadata: async () => {
        const { metadatas: r } = await n.DenomsMetadata(us.QueryDenomsMetadataRequest.fromPartial({
          pagination: void 0
          // Not implemented
        }));
        return r;
      }
    }
  };
}
po.setupBankExtension = Rf;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.createCrysisAminoConverters = on.isAminoMsgVerifyInvariant = void 0;
function If(e) {
  return e.type === "cosmos-sdk/MsgVerifyInvariant";
}
on.isAminoMsgVerifyInvariant = If;
function $f() {
  throw new Error("Not implemented");
}
on.createCrysisAminoConverters = $f;
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.createDistributionAminoConverters = Oe.isAminoMsgFundCommunityPool = Oe.isAminoMsgWithdrawValidatorCommission = Oe.isAminoMsgWithdrawDelegatorReward = Oe.isAminoMsgSetWithdrawAddress = void 0;
function Nf(e) {
  return e.type === "cosmos-sdk/MsgModifyWithdrawAddress";
}
Oe.isAminoMsgSetWithdrawAddress = Nf;
function xf(e) {
  return e.type === "cosmos-sdk/MsgWithdrawDelegationReward";
}
Oe.isAminoMsgWithdrawDelegatorReward = xf;
function Df(e) {
  return e.type === "cosmos-sdk/MsgWithdrawValidatorCommission";
}
Oe.isAminoMsgWithdrawValidatorCommission = Df;
function Uf(e) {
  return e.type === "cosmos-sdk/MsgFundCommunityPool";
}
Oe.isAminoMsgFundCommunityPool = Uf;
function qf() {
  return {
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
      aminoType: "cosmos-sdk/MsgFundCommunityPool",
      toAmino: ({ amount: e, depositor: t }) => ({
        amount: [...e],
        depositor: t
      }),
      fromAmino: ({ amount: e, depositor: t }) => ({
        amount: [...e],
        depositor: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
      aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
      toAmino: ({ delegatorAddress: e, withdrawAddress: t }) => ({
        delegator_address: e,
        withdraw_address: t
      }),
      fromAmino: ({ delegator_address: e, withdraw_address: t }) => ({
        delegatorAddress: e,
        withdrawAddress: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
      aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
      toAmino: ({ delegatorAddress: e, validatorAddress: t }) => ({
        delegator_address: e,
        validator_address: t
      }),
      fromAmino: ({ delegator_address: e, validator_address: t }) => ({
        delegatorAddress: e,
        validatorAddress: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
      aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
      toAmino: ({ validatorAddress: e }) => ({
        validator_address: e
      }),
      fromAmino: ({ validator_address: e }) => ({
        validatorAddress: e
      })
    }
  };
}
Oe.createDistributionAminoConverters = qf;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.isMsgWithdrawDelegatorRewardEncodeObject = sn.distributionTypes = void 0;
const gr = ya;
sn.distributionTypes = [
  ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", gr.MsgFundCommunityPool],
  ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", gr.MsgSetWithdrawAddress],
  ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", gr.MsgWithdrawDelegatorReward],
  ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", gr.MsgWithdrawValidatorCommission]
];
function Hf(e) {
  return e.typeUrl === "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
}
sn.isMsgWithdrawDelegatorRewardEncodeObject = Hf;
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.setupDistributionExtension = void 0;
const Vf = Nu, Qi = ie;
function Ff(e) {
  const t = (0, Qi.createProtobufRpcClient)(e), n = new Vf.QueryClientImpl(t);
  return {
    distribution: {
      communityPool: async () => await n.CommunityPool({}),
      delegationRewards: async (r, o) => await n.DelegationRewards({
        delegatorAddress: r,
        validatorAddress: o
      }),
      delegationTotalRewards: async (r) => await n.DelegationTotalRewards({
        delegatorAddress: r
      }),
      delegatorValidators: async (r) => await n.DelegatorValidators({
        delegatorAddress: r
      }),
      delegatorWithdrawAddress: async (r) => await n.DelegatorWithdrawAddress({
        delegatorAddress: r
      }),
      params: async () => await n.Params({}),
      validatorCommission: async (r) => await n.ValidatorCommission({
        validatorAddress: r
      }),
      validatorOutstandingRewards: async (r) => await n.ValidatorOutstandingRewards({
        validatorAddress: r
      }),
      validatorSlashes: async (r, o, s, i) => await n.ValidatorSlashes({
        validatorAddress: r,
        startingHeight: BigInt(o),
        endingHeight: BigInt(s),
        pagination: (0, Qi.createPagination)(i)
      })
    }
  };
}
go.setupDistributionExtension = Ff;
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.createEvidenceAminoConverters = an.isAminoMsgSubmitEvidence = void 0;
function Wf(e) {
  return e.type === "cosmos-sdk/MsgSubmitEvidence";
}
an.isAminoMsgSubmitEvidence = Wf;
function Jf() {
  throw new Error("Not implemented");
}
an.createEvidenceAminoConverters = Jf;
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.createFeegrantAminoConverters = void 0;
function Gf() {
  return {
    // For Cosmos SDK < 0.46 the Amino JSON codec was broken on chain and thus inaccessible.
    // Now this can be implemented for 0.46+ chains, see
    // https://github.com/cosmos/cosmjs/issues/1092
    //
    // "/cosmos.feegrant.v1beta1.MsgGrantAllowance": IMPLEMENT_ME,
    // "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": IMPLEMENT_ME,
  };
}
yo.createFeegrantAminoConverters = Gf;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.feegrantTypes = void 0;
const Zi = xu;
bo.feegrantTypes = [
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", Zi.MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", Zi.MsgRevokeAllowance]
];
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.setupFeegrantExtension = void 0;
const Lf = Du, Xi = ie;
function zf(e) {
  const t = (0, Xi.createProtobufRpcClient)(e), n = new Lf.QueryClientImpl(t);
  return {
    feegrant: {
      allowance: async (r, o) => await n.Allowance({
        granter: r,
        grantee: o
      }),
      allowances: async (r, o) => await n.Allowances({
        grantee: r,
        pagination: (0, Xi.createPagination)(o)
      })
    }
  };
}
vo.setupFeegrantExtension = zf;
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.createGovAminoConverters = je.isAminoMsgDeposit = je.isAminoMsgVoteWeighted = je.isAminoMsgVote = je.isAminoMsgSubmitProposal = void 0;
const Kf = Y, jn = Z, Bn = Uu, Qf = Us, Zf = ie;
function Xf(e) {
  return e.type === "cosmos-sdk/MsgSubmitProposal";
}
je.isAminoMsgSubmitProposal = Xf;
function Yf(e) {
  return e.type === "cosmos-sdk/MsgVote";
}
je.isAminoMsgVote = Yf;
function eh(e) {
  return e.type === "cosmos-sdk/MsgVoteWeighted";
}
je.isAminoMsgVoteWeighted = eh;
function th(e) {
  return e.type === "cosmos-sdk/MsgDeposit";
}
je.isAminoMsgDeposit = th;
function nh() {
  return {
    "/cosmos.gov.v1beta1.MsgDeposit": {
      aminoType: "cosmos-sdk/MsgDeposit",
      toAmino: ({ amount: e, depositor: t, proposalId: n }) => ({
        amount: e,
        depositor: t,
        proposal_id: n.toString()
      }),
      fromAmino: ({ amount: e, depositor: t, proposal_id: n }) => ({
        amount: Array.from(e),
        depositor: t,
        proposalId: BigInt(n)
      })
    },
    "/cosmos.gov.v1beta1.MsgVote": {
      aminoType: "cosmos-sdk/MsgVote",
      toAmino: ({ option: e, proposalId: t, voter: n }) => ({
        option: e,
        proposal_id: t.toString(),
        voter: n
      }),
      fromAmino: ({ option: e, proposal_id: t, voter: n }) => ({
        option: (0, Bn.voteOptionFromJSON)(e),
        proposalId: BigInt(t),
        voter: n
      })
    },
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
      aminoType: "cosmos-sdk/MsgVoteWeighted",
      toAmino: ({ options: e, proposalId: t, voter: n }) => ({
        options: e.map((r) => ({
          option: r.option,
          // Weight is between 0 and 1, so we always have 20 characters when printing all trailing
          // zeros (e.g. "0.700000000000000000" or "1.000000000000000000")
          weight: (0, Zf.decodeCosmosSdkDecFromProto)(r.weight).toString().padEnd(20, "0")
        })),
        proposal_id: t.toString(),
        voter: n
      }),
      fromAmino: ({ options: e, proposal_id: t, voter: n }) => ({
        proposalId: BigInt(t),
        voter: n,
        options: e.map((r) => ({
          option: (0, Bn.voteOptionFromJSON)(r.option),
          weight: Kf.Decimal.fromUserInput(r.weight, 18).atomics
        }))
      })
    },
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/MsgSubmitProposal",
      toAmino: ({ initialDeposit: e, proposer: t, content: n }) => {
        (0, jn.assertDefinedAndNotNull)(n);
        let r;
        switch (n.typeUrl) {
          case "/cosmos.gov.v1beta1.TextProposal": {
            const o = Bn.TextProposal.decode(n.value);
            r = {
              type: "cosmos-sdk/TextProposal",
              value: {
                description: o.description,
                title: o.title
              }
            };
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${n.typeUrl}'`);
        }
        return {
          initial_deposit: e,
          proposer: t,
          content: r
        };
      },
      fromAmino: ({ initial_deposit: e, proposer: t, content: n }) => {
        let r;
        switch (n.type) {
          case "cosmos-sdk/TextProposal": {
            const { value: o } = n;
            (0, jn.assert)((0, jn.isNonNullObject)(o));
            const { title: s, description: i } = o;
            (0, jn.assert)(typeof s == "string"), (0, jn.assert)(typeof i == "string"), r = Qf.Any.fromPartial({
              typeUrl: "/cosmos.gov.v1beta1.TextProposal",
              value: Bn.TextProposal.encode(Bn.TextProposal.fromPartial({
                title: s,
                description: i
              })).finish()
            });
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${n.type}'`);
        }
        return {
          initialDeposit: Array.from(e),
          proposer: t,
          content: r
        };
      }
    }
  };
}
je.createGovAminoConverters = nh;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.isMsgVoteWeightedEncodeObject = Be.isMsgVoteEncodeObject = Be.isMsgSubmitProposalEncodeObject = Be.isMsgDepositEncodeObject = Be.govTypes = void 0;
const Rn = qu, yr = Hu;
Be.govTypes = [
  ["/cosmos.gov.v1.MsgDeposit", Rn.MsgDeposit],
  ["/cosmos.gov.v1.MsgSubmitProposal", Rn.MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgUpdateParams", Rn.MsgUpdateParams],
  ["/cosmos.gov.v1.MsgVote", Rn.MsgVote],
  ["/cosmos.gov.v1.MsgVoteWeighted", Rn.MsgVoteWeighted],
  ["/cosmos.gov.v1beta1.MsgDeposit", yr.MsgDeposit],
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", yr.MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", yr.MsgVote],
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", yr.MsgVoteWeighted]
];
function rh(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}
Be.isMsgDepositEncodeObject = rh;
function oh(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}
Be.isMsgSubmitProposalEncodeObject = oh;
function sh(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}
Be.isMsgVoteEncodeObject = sh;
function ih(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgVoteWeighted";
}
Be.isMsgVoteWeightedEncodeObject = ih;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.setupGovExtension = void 0;
const ah = Vu, Fe = ie;
function ch(e) {
  const t = (0, Fe.createProtobufRpcClient)(e), n = new ah.QueryClientImpl(t);
  return {
    gov: {
      params: async (r) => await n.Params({ paramsType: r }),
      proposals: async (r, o, s, i) => await n.Proposals({
        proposalStatus: r,
        depositor: o,
        voter: s,
        pagination: (0, Fe.createPagination)(i)
      }),
      proposal: async (r) => await n.Proposal({ proposalId: (0, Fe.longify)(r) }),
      deposits: async (r, o) => await n.Deposits({
        proposalId: (0, Fe.longify)(r),
        pagination: (0, Fe.createPagination)(o)
      }),
      deposit: async (r, o) => await n.Deposit({
        proposalId: (0, Fe.longify)(r),
        depositor: o
      }),
      tally: async (r) => await n.TallyResult({
        proposalId: (0, Fe.longify)(r)
      }),
      votes: async (r, o) => await n.Votes({
        proposalId: (0, Fe.longify)(r),
        pagination: (0, Fe.createPagination)(o)
      }),
      vote: async (r, o) => await n.Vote({
        proposalId: (0, Fe.longify)(r),
        voter: o
      })
    }
  };
}
wo.setupGovExtension = ch;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.createGroupAminoConverters = void 0;
function uh() {
  return {};
}
ko.createGroupAminoConverters = uh;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.groupTypes = void 0;
const ce = Fu;
_o.groupTypes = [
  ["/cosmos.group.v1.MsgCreateGroup", ce.MsgCreateGroup],
  ["/cosmos.group.v1.MsgCreateGroupPolicy", ce.MsgCreateGroupPolicy],
  ["/cosmos.group.v1.MsgCreateGroupWithPolicy", ce.MsgCreateGroupWithPolicy],
  ["/cosmos.group.v1.MsgExec", ce.MsgExec],
  ["/cosmos.group.v1.MsgLeaveGroup", ce.MsgLeaveGroup],
  ["/cosmos.group.v1.MsgSubmitProposal", ce.MsgSubmitProposal],
  ["/cosmos.group.v1.MsgUpdateGroupAdmin", ce.MsgUpdateGroupAdmin],
  ["/cosmos.group.v1.MsgUpdateGroupMembers", ce.MsgUpdateGroupMembers],
  ["/cosmos.group.v1.MsgUpdateGroupMetadata", ce.MsgUpdateGroupMetadata],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", ce.MsgUpdateGroupPolicyAdmin],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", ce.MsgUpdateGroupPolicyDecisionPolicy],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", ce.MsgUpdateGroupPolicyMetadata],
  ["/cosmos.group.v1.MsgVote", ce.MsgVote],
  ["/cosmos.group.v1.MsgWithdrawProposal", ce.MsgWithdrawProposal]
];
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.createIbcAminoConverters = cn.isAminoMsgTransfer = void 0;
const br = ot, dh = Wr;
function lh(e) {
  return e.type === "cosmos-sdk/MsgTransfer";
}
cn.isAminoMsgTransfer = lh;
function mh() {
  return {
    "/ibc.applications.transfer.v1.MsgTransfer": {
      aminoType: "cosmos-sdk/MsgTransfer",
      toAmino: ({ sourcePort: e, sourceChannel: t, token: n, sender: r, receiver: o, timeoutHeight: s, timeoutTimestamp: i, memo: c }) => {
        var a, u, d;
        return {
          source_port: e,
          source_channel: t,
          token: n,
          sender: r,
          receiver: o,
          timeout_height: s ? {
            revision_height: (a = (0, br.omitDefault)(s.revisionHeight)) == null ? void 0 : a.toString(),
            revision_number: (u = (0, br.omitDefault)(s.revisionNumber)) == null ? void 0 : u.toString()
          } : {},
          timeout_timestamp: (d = (0, br.omitDefault)(i)) == null ? void 0 : d.toString(),
          memo: (0, br.omitDefault)(c)
        };
      },
      fromAmino: ({ source_port: e, source_channel: t, token: n, sender: r, receiver: o, timeout_height: s, timeout_timestamp: i, memo: c }) => dh.MsgTransfer.fromPartial({
        sourcePort: e,
        sourceChannel: t,
        token: n,
        sender: r,
        receiver: o,
        timeoutHeight: s ? {
          revisionHeight: BigInt(s.revision_height || "0"),
          revisionNumber: BigInt(s.revision_number || "0")
        } : void 0,
        timeoutTimestamp: BigInt(i || "0"),
        memo: c ?? ""
      })
    }
  };
}
cn.createIbcAminoConverters = mh;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.isMsgTransferEncodeObject = un.ibcTypes = void 0;
const fh = Wr, We = Wu, vr = Ju, wr = Gu;
un.ibcTypes = [
  ["/ibc.applications.transfer.v1.MsgTransfer", fh.MsgTransfer],
  ["/ibc.core.channel.v1.MsgAcknowledgement", We.MsgAcknowledgement],
  ["/ibc.core.channel.v1.MsgChannelCloseConfirm", We.MsgChannelCloseConfirm],
  ["/ibc.core.channel.v1.MsgChannelCloseInit", We.MsgChannelCloseInit],
  ["/ibc.core.channel.v1.MsgChannelOpenAck", We.MsgChannelOpenAck],
  ["/ibc.core.channel.v1.MsgChannelOpenConfirm", We.MsgChannelOpenConfirm],
  ["/ibc.core.channel.v1.MsgChannelOpenInit", We.MsgChannelOpenInit],
  ["/ibc.core.channel.v1.MsgChannelOpenTry", We.MsgChannelOpenTry],
  ["/ibc.core.channel.v1.MsgRecvPacket", We.MsgRecvPacket],
  ["/ibc.core.channel.v1.MsgTimeout", We.MsgTimeout],
  ["/ibc.core.channel.v1.MsgTimeoutOnClose", We.MsgTimeoutOnClose],
  ["/ibc.core.client.v1.MsgCreateClient", vr.MsgCreateClient],
  ["/ibc.core.client.v1.MsgSubmitMisbehaviour", vr.MsgSubmitMisbehaviour],
  ["/ibc.core.client.v1.MsgUpdateClient", vr.MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", vr.MsgUpgradeClient],
  ["/ibc.core.connection.v1.MsgConnectionOpenAck", wr.MsgConnectionOpenAck],
  ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", wr.MsgConnectionOpenConfirm],
  ["/ibc.core.connection.v1.MsgConnectionOpenInit", wr.MsgConnectionOpenInit],
  ["/ibc.core.connection.v1.MsgConnectionOpenTry", wr.MsgConnectionOpenTry]
];
function hh(e) {
  return e.typeUrl === "/ibc.applications.transfer.v1.MsgTransfer";
}
un.isMsgTransferEncodeObject = hh;
var So = {};
Object.defineProperty(So, "__esModule", { value: !0 });
So.setupIbcExtension = void 0;
const kr = N, ph = Y, Yi = Lu, gh = zu, kt = Ku, In = Qu, ds = Zu, cc = Xu, z = ie;
function ls(e) {
  if ((e == null ? void 0 : e.typeUrl) !== "/ibc.lightclients.tendermint.v1.ClientState")
    throw new Error(`Unexpected client state type: ${e == null ? void 0 : e.typeUrl}`);
  return cc.ClientState.decode(e.value);
}
function yh(e) {
  if ((e == null ? void 0 : e.typeUrl) !== "/ibc.lightclients.tendermint.v1.ConsensusState")
    throw new Error(`Unexpected client state type: ${e == null ? void 0 : e.typeUrl}`);
  return cc.ConsensusState.decode(e.value);
}
function bh(e) {
  const t = (0, z.createProtobufRpcClient)(e), n = new kt.QueryClientImpl(t), r = new In.QueryClientImpl(t), o = new ds.QueryClientImpl(t), s = new Yi.QueryClientImpl(t);
  return {
    ibc: {
      channel: {
        channel: async (i, c) => n.Channel({
          portId: i,
          channelId: c
        }),
        channels: async (i) => n.Channels({
          pagination: (0, z.createPagination)(i)
        }),
        allChannels: async () => {
          var u;
          const i = [];
          let c, a;
          do
            c = await n.Channels({
              pagination: (0, z.createPagination)(a)
            }), i.push(...c.channels), a = (u = c.pagination) == null ? void 0 : u.nextKey;
          while (a && a.length);
          return kt.QueryChannelsResponse.fromPartial({
            channels: i,
            height: c.height
          });
        },
        connectionChannels: async (i, c) => n.ConnectionChannels({
          connection: i,
          pagination: (0, z.createPagination)(c)
        }),
        allConnectionChannels: async (i) => {
          var d;
          const c = [];
          let a, u;
          do
            a = await n.ConnectionChannels({
              connection: i,
              pagination: (0, z.createPagination)(u)
            }), c.push(...a.channels), u = (d = a.pagination) == null ? void 0 : d.nextKey;
          while (u && u.length);
          return kt.QueryConnectionChannelsResponse.fromPartial({
            channels: c,
            height: a.height
          });
        },
        clientState: async (i, c) => n.ChannelClientState({
          portId: i,
          channelId: c
        }),
        consensusState: async (i, c, a, u) => n.ChannelConsensusState({
          portId: i,
          channelId: c,
          revisionNumber: BigInt(a),
          revisionHeight: BigInt(u)
        }),
        packetCommitment: async (i, c, a) => n.PacketCommitment({
          portId: i,
          channelId: c,
          sequence: (0, z.longify)(a)
        }),
        packetCommitments: async (i, c, a) => n.PacketCommitments({
          channelId: c,
          portId: i,
          pagination: (0, z.createPagination)(a)
        }),
        allPacketCommitments: async (i, c) => {
          var g;
          const a = [];
          let u, d;
          do
            u = await n.PacketCommitments({
              channelId: c,
              portId: i,
              pagination: (0, z.createPagination)(d)
            }), a.push(...u.commitments), d = (g = u.pagination) == null ? void 0 : g.nextKey;
          while (d && d.length);
          return kt.QueryPacketCommitmentsResponse.fromPartial({
            commitments: a,
            height: u.height
          });
        },
        packetReceipt: async (i, c, a) => n.PacketReceipt({
          portId: i,
          channelId: c,
          sequence: (0, z.longify)(a)
        }),
        packetAcknowledgement: async (i, c, a) => n.PacketAcknowledgement({
          portId: i,
          channelId: c,
          sequence: (0, z.longify)(a)
        }),
        packetAcknowledgements: async (i, c, a) => {
          const u = kt.QueryPacketAcknowledgementsRequest.fromPartial({
            portId: i,
            channelId: c,
            pagination: (0, z.createPagination)(a)
          });
          return n.PacketAcknowledgements(u);
        },
        allPacketAcknowledgements: async (i, c) => {
          var g;
          const a = [];
          let u, d;
          do {
            const M = kt.QueryPacketAcknowledgementsRequest.fromPartial({
              channelId: c,
              portId: i,
              pagination: (0, z.createPagination)(d)
            });
            u = await n.PacketAcknowledgements(M), a.push(...u.acknowledgements), d = (g = u.pagination) == null ? void 0 : g.nextKey;
          } while (d && d.length);
          return kt.QueryPacketAcknowledgementsResponse.fromPartial({
            acknowledgements: a,
            height: u.height
          });
        },
        unreceivedPackets: async (i, c, a) => n.UnreceivedPackets({
          portId: i,
          channelId: c,
          packetCommitmentSequences: a.map((u) => BigInt(u))
        }),
        unreceivedAcks: async (i, c, a) => n.UnreceivedAcks({
          portId: i,
          channelId: c,
          packetAckSequences: a.map((u) => BigInt(u))
        }),
        nextSequenceReceive: async (i, c) => n.NextSequenceReceive({
          portId: i,
          channelId: c
        })
      },
      client: {
        state: async (i) => r.ClientState({ clientId: i }),
        states: async (i) => r.ClientStates({
          pagination: (0, z.createPagination)(i)
        }),
        allStates: async () => {
          var u;
          const i = [];
          let c, a;
          do
            c = await r.ClientStates({
              pagination: (0, z.createPagination)(a)
            }), i.push(...c.clientStates), a = (u = c.pagination) == null ? void 0 : u.nextKey;
          while (a && a.length);
          return In.QueryClientStatesResponse.fromPartial({
            clientStates: i
          });
        },
        consensusState: async (i, c) => r.ConsensusState(In.QueryConsensusStateRequest.fromPartial({
          clientId: i,
          revisionHeight: c !== void 0 ? BigInt(c) : void 0,
          latestHeight: c === void 0
        })),
        consensusStates: async (i, c) => r.ConsensusStates({
          clientId: i,
          pagination: (0, z.createPagination)(c)
        }),
        allConsensusStates: async (i) => {
          var d;
          const c = [];
          let a, u;
          do
            a = await r.ConsensusStates({
              clientId: i,
              pagination: (0, z.createPagination)(u)
            }), c.push(...a.consensusStates), u = (d = a.pagination) == null ? void 0 : d.nextKey;
          while (u && u.length);
          return In.QueryConsensusStatesResponse.fromPartial({
            consensusStates: c
          });
        },
        params: async () => r.ClientParams({}),
        stateTm: async (i) => {
          const c = await r.ClientState({ clientId: i });
          return ls(c.clientState);
        },
        statesTm: async (i) => {
          const { clientStates: c } = await r.ClientStates({
            pagination: (0, z.createPagination)(i)
          });
          return c.map(({ clientState: a }) => ls(a));
        },
        allStatesTm: async () => {
          var u;
          const i = [];
          let c, a;
          do
            c = await r.ClientStates({
              pagination: (0, z.createPagination)(a)
            }), i.push(...c.clientStates), a = (u = c.pagination) == null ? void 0 : u.nextKey;
          while (a && a.length);
          return i.map(({ clientState: d }) => ls(d));
        },
        consensusStateTm: async (i, c) => {
          const a = await r.ConsensusState(In.QueryConsensusStateRequest.fromPartial({
            clientId: i,
            revisionHeight: c == null ? void 0 : c.revisionHeight,
            revisionNumber: c == null ? void 0 : c.revisionNumber,
            latestHeight: c === void 0
          }));
          return yh(a.consensusState);
        }
      },
      connection: {
        connection: async (i) => o.Connection({
          connectionId: i
        }),
        connections: async (i) => o.Connections({
          pagination: (0, z.createPagination)(i)
        }),
        allConnections: async () => {
          var u;
          const i = [];
          let c, a;
          do
            c = await o.Connections({
              pagination: (0, z.createPagination)(a)
            }), i.push(...c.connections), a = (u = c.pagination) == null ? void 0 : u.nextKey;
          while (a && a.length);
          return ds.QueryConnectionsResponse.fromPartial({
            connections: i,
            height: c.height
          });
        },
        clientConnections: async (i) => o.ClientConnections({
          clientId: i
        }),
        clientState: async (i) => o.ConnectionClientState({
          connectionId: i
        }),
        consensusState: async (i, c) => o.ConnectionConsensusState(ds.QueryConnectionConsensusStateRequest.fromPartial({
          connectionId: i,
          revisionHeight: BigInt(c)
        }))
      },
      transfer: {
        denomTrace: async (i) => s.DenomTrace({ hash: i }),
        denomTraces: async (i) => s.DenomTraces({
          pagination: (0, z.createPagination)(i)
        }),
        allDenomTraces: async () => {
          var u;
          const i = [];
          let c, a;
          do
            c = await s.DenomTraces({
              pagination: (0, z.createPagination)(a)
            }), i.push(...c.denomTraces), a = (u = c.pagination) == null ? void 0 : u.nextKey;
          while (a && a.length);
          return Yi.QueryDenomTracesResponse.fromPartial({
            denomTraces: i
          });
        },
        params: async () => s.Params({})
      },
      verified: {
        channel: {
          channel: async (i, c) => {
            const a = (0, kr.toAscii)(`channelEnds/ports/${i}/channels/${c}`), { value: u } = await e.queryStoreVerified("ibc", a);
            return u.length ? gh.Channel.decode(u) : null;
          },
          packetCommitment: async (i, c, a) => {
            const u = (0, kr.toAscii)(`commitments/ports/${i}/channels/${c}/packets/${a}`), { value: d } = await e.queryStoreVerified("ibc", u);
            return d;
          },
          packetAcknowledgement: async (i, c, a) => {
            const u = (0, kr.toAscii)(`acks/ports/${i}/channels/${c}/acknowledgements/${a}`), { value: d } = await e.queryStoreVerified("ibc", u);
            return d;
          },
          nextSequenceReceive: async (i, c) => {
            const a = (0, kr.toAscii)(`seqAcks/ports/${i}/channels/${c}/nextSequenceAck`), { value: u } = await e.queryStoreVerified("ibc", a);
            return u.length ? ph.Uint64.fromBytes(u).toNumber() : null;
          }
        }
      }
    }
  };
}
So.setupIbcExtension = bh;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.setupMintExtension = void 0;
const vh = Z, wh = Yu, _t = ie;
function kh(e) {
  const t = (0, _t.createProtobufRpcClient)(e), n = new wh.QueryClientImpl(t);
  return {
    mint: {
      params: async () => {
        const { params: r } = await n.Params({});
        return (0, vh.assert)(r), {
          blocksPerYear: r.blocksPerYear,
          goalBonded: (0, _t.decodeCosmosSdkDecFromProto)(r.goalBonded),
          inflationMin: (0, _t.decodeCosmosSdkDecFromProto)(r.inflationMin),
          inflationMax: (0, _t.decodeCosmosSdkDecFromProto)(r.inflationMax),
          inflationRateChange: (0, _t.decodeCosmosSdkDecFromProto)(r.inflationRateChange),
          mintDenom: r.mintDenom
        };
      },
      inflation: async () => {
        const { inflation: r } = await n.Inflation({});
        return (0, _t.decodeCosmosSdkDecFromProto)(r);
      },
      annualProvisions: async () => {
        const { annualProvisions: r } = await n.AnnualProvisions({});
        return (0, _t.decodeCosmosSdkDecFromProto)(r);
      }
    }
  };
}
Po.setupMintExtension = kh;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.createSlashingAminoConverters = dn.isAminoMsgUnjail = void 0;
function _h(e) {
  return e.type === "cosmos-sdk/MsgUnjail";
}
dn.isAminoMsgUnjail = _h;
function Sh() {
  throw new Error("Not implemented");
}
dn.createSlashingAminoConverters = Sh;
var Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.setupSlashingExtension = void 0;
const Ph = ed, ea = ie;
function Ah(e) {
  const t = (0, ea.createProtobufRpcClient)(e), n = new Ph.QueryClientImpl(t);
  return {
    slashing: {
      signingInfo: async (r) => await n.SigningInfo({
        consAddress: r
      }),
      signingInfos: async (r) => await n.SigningInfos({
        pagination: (0, ea.createPagination)(r)
      }),
      params: async () => await n.Params({})
    }
  };
}
Ao.setupSlashingExtension = Ah;
var re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.createStakingAminoConverters = re.isAminoMsgUndelegate = re.isAminoMsgBeginRedelegate = re.isAminoMsgDelegate = re.isAminoMsgEditValidator = re.isAminoMsgCreateValidator = re.protoDecimalToJson = void 0;
const uc = Y, ta = vt, ct = Z;
function Dn(e) {
  const t = uc.Decimal.fromAtomics(e, 18), [n, r] = t.toString().split(".");
  return `${n}.${(r ?? "").padEnd(18, "0")}`;
}
re.protoDecimalToJson = Dn;
function _r(e) {
  return uc.Decimal.fromUserInput(e, 18).atomics;
}
function Th(e) {
  return e.type === "cosmos-sdk/MsgCreateValidator";
}
re.isAminoMsgCreateValidator = Th;
function Eh(e) {
  return e.type === "cosmos-sdk/MsgEditValidator";
}
re.isAminoMsgEditValidator = Eh;
function Ch(e) {
  return e.type === "cosmos-sdk/MsgDelegate";
}
re.isAminoMsgDelegate = Ch;
function Mh(e) {
  return e.type === "cosmos-sdk/MsgBeginRedelegate";
}
re.isAminoMsgBeginRedelegate = Mh;
function Oh(e) {
  return e.type === "cosmos-sdk/MsgUndelegate";
}
re.isAminoMsgUndelegate = Oh;
function jh() {
  return {
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
      aminoType: "cosmos-sdk/MsgBeginRedelegate",
      toAmino: ({ delegatorAddress: e, validatorSrcAddress: t, validatorDstAddress: n, amount: r }) => ((0, ct.assertDefinedAndNotNull)(r, "missing amount"), {
        delegator_address: e,
        validator_src_address: t,
        validator_dst_address: n,
        amount: r
      }),
      fromAmino: ({ delegator_address: e, validator_src_address: t, validator_dst_address: n, amount: r }) => ({
        delegatorAddress: e,
        validatorSrcAddress: t,
        validatorDstAddress: n,
        amount: r
      })
    },
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
      aminoType: "cosmos-sdk/MsgCreateValidator",
      toAmino: ({ description: e, commission: t, minSelfDelegation: n, delegatorAddress: r, validatorAddress: o, pubkey: s, value: i }) => ((0, ct.assertDefinedAndNotNull)(e, "missing description"), (0, ct.assertDefinedAndNotNull)(t, "missing commission"), (0, ct.assertDefinedAndNotNull)(s, "missing pubkey"), (0, ct.assertDefinedAndNotNull)(i, "missing value"), {
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          security_contact: e.securityContact,
          details: e.details
        },
        commission: {
          rate: Dn(t.rate),
          max_rate: Dn(t.maxRate),
          max_change_rate: Dn(t.maxChangeRate)
        },
        min_self_delegation: n,
        delegator_address: r,
        validator_address: o,
        pubkey: (0, ta.decodePubkey)(s),
        value: i
      }),
      fromAmino: ({ description: e, commission: t, min_self_delegation: n, delegator_address: r, validator_address: o, pubkey: s, value: i }) => ({
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          securityContact: e.security_contact,
          details: e.details
        },
        commission: {
          rate: _r(t.rate),
          maxRate: _r(t.max_rate),
          maxChangeRate: _r(t.max_change_rate)
        },
        minSelfDelegation: n,
        delegatorAddress: r,
        validatorAddress: o,
        pubkey: (0, ta.encodePubkey)(s),
        value: i
      })
    },
    "/cosmos.staking.v1beta1.MsgDelegate": {
      aminoType: "cosmos-sdk/MsgDelegate",
      toAmino: ({ delegatorAddress: e, validatorAddress: t, amount: n }) => ((0, ct.assertDefinedAndNotNull)(n, "missing amount"), {
        delegator_address: e,
        validator_address: t,
        amount: n
      }),
      fromAmino: ({ delegator_address: e, validator_address: t, amount: n }) => ({
        delegatorAddress: e,
        validatorAddress: t,
        amount: n
      })
    },
    "/cosmos.staking.v1beta1.MsgEditValidator": {
      aminoType: "cosmos-sdk/MsgEditValidator",
      toAmino: ({ description: e, commissionRate: t, minSelfDelegation: n, validatorAddress: r }) => ((0, ct.assertDefinedAndNotNull)(e, "missing description"), {
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          security_contact: e.securityContact,
          details: e.details
        },
        // empty string in the protobuf document means "do not change"
        commission_rate: t ? Dn(t) : void 0,
        // empty string in the protobuf document means "do not change"
        min_self_delegation: n || void 0,
        validator_address: r
      }),
      fromAmino: ({ description: e, commission_rate: t, min_self_delegation: n, validator_address: r }) => ({
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          securityContact: e.security_contact,
          details: e.details
        },
        // empty string in the protobuf document means "do not change"
        commissionRate: t ? _r(t) : "",
        // empty string in the protobuf document means "do not change"
        minSelfDelegation: n ?? "",
        validatorAddress: r
      })
    },
    "/cosmos.staking.v1beta1.MsgUndelegate": {
      aminoType: "cosmos-sdk/MsgUndelegate",
      toAmino: ({ delegatorAddress: e, validatorAddress: t, amount: n }) => ((0, ct.assertDefinedAndNotNull)(n, "missing amount"), {
        delegator_address: e,
        validator_address: t,
        amount: n
      }),
      fromAmino: ({ delegator_address: e, validator_address: t, amount: n }) => ({
        delegatorAddress: e,
        validatorAddress: t,
        amount: n
      })
    }
  };
}
re.createStakingAminoConverters = jh;
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.isMsgUndelegateEncodeObject = ge.isMsgEditValidatorEncodeObject = ge.isMsgDelegateEncodeObject = ge.isMsgCreateValidatorEncodeObject = ge.isMsgBeginRedelegateEncodeObject = ge.stakingTypes = void 0;
const $n = ba;
ge.stakingTypes = [
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", $n.MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgCreateValidator", $n.MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", $n.MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", $n.MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", $n.MsgUndelegate]
];
function Bh(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgBeginRedelegate";
}
ge.isMsgBeginRedelegateEncodeObject = Bh;
function Rh(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgCreateValidator";
}
ge.isMsgCreateValidatorEncodeObject = Rh;
function Ih(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgDelegate";
}
ge.isMsgDelegateEncodeObject = Ih;
function $h(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgEditValidator";
}
ge.isMsgEditValidatorEncodeObject = $h;
function Nh(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgUndelegate";
}
ge.isMsgUndelegateEncodeObject = Nh;
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.setupStakingExtension = void 0;
const xh = td, ut = ie;
function Dh(e) {
  const t = (0, ut.createProtobufRpcClient)(e), n = new xh.QueryClientImpl(t);
  return {
    staking: {
      delegation: async (r, o) => await n.Delegation({
        delegatorAddr: r,
        validatorAddr: o
      }),
      delegatorDelegations: async (r, o) => await n.DelegatorDelegations({
        delegatorAddr: r,
        pagination: (0, ut.createPagination)(o)
      }),
      delegatorUnbondingDelegations: async (r, o) => await n.DelegatorUnbondingDelegations({
        delegatorAddr: r,
        pagination: (0, ut.createPagination)(o)
      }),
      delegatorValidator: async (r, o) => await n.DelegatorValidator({
        delegatorAddr: r,
        validatorAddr: o
      }),
      delegatorValidators: async (r, o) => await n.DelegatorValidators({
        delegatorAddr: r,
        pagination: (0, ut.createPagination)(o)
      }),
      historicalInfo: async (r) => await n.HistoricalInfo({
        height: BigInt(r)
      }),
      params: async () => await n.Params({}),
      pool: async () => await n.Pool({}),
      redelegations: async (r, o, s, i) => await n.Redelegations({
        delegatorAddr: r,
        srcValidatorAddr: o,
        dstValidatorAddr: s,
        pagination: (0, ut.createPagination)(i)
      }),
      unbondingDelegation: async (r, o) => await n.UnbondingDelegation({
        delegatorAddr: r,
        validatorAddr: o
      }),
      validator: async (r) => await n.Validator({ validatorAddr: r }),
      validatorDelegations: async (r, o) => await n.ValidatorDelegations({
        validatorAddr: r,
        pagination: (0, ut.createPagination)(o)
      }),
      validators: async (r, o) => await n.Validators({
        status: r,
        pagination: (0, ut.createPagination)(o)
      }),
      validatorUnbondingDelegations: async (r, o) => await n.ValidatorUnbondingDelegations({
        validatorAddr: r,
        pagination: (0, ut.createPagination)(o)
      })
    }
  };
}
To.setupStakingExtension = Dh;
var Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.setupTxExtension = void 0;
const Uh = vt, qh = Fr, na = nd, Nn = jt, Hh = ie;
function Vh(e) {
  const t = (0, Hh.createProtobufRpcClient)(e), n = new na.ServiceClientImpl(t);
  return {
    tx: {
      getTx: async (r) => {
        const o = {
          hash: r
        };
        return await n.GetTx(o);
      },
      simulate: async (r, o, s, i) => {
        const c = Nn.Tx.fromPartial({
          authInfo: Nn.AuthInfo.fromPartial({
            fee: Nn.Fee.fromPartial({}),
            signerInfos: [
              {
                publicKey: (0, Uh.encodePubkey)(s),
                sequence: BigInt(i),
                modeInfo: { single: { mode: qh.SignMode.SIGN_MODE_UNSPECIFIED } }
              }
            ]
          }),
          body: Nn.TxBody.fromPartial({
            messages: Array.from(r),
            memo: o
          }),
          signatures: [new Uint8Array()]
        }), a = na.SimulateRequest.fromPartial({
          txBytes: Nn.Tx.encode(c).finish()
        });
        return await n.Simulate(a);
      }
    }
  };
}
Eo.setupTxExtension = Vh;
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.createVestingAminoConverters = ln.isAminoMsgCreateVestingAccount = void 0;
function Fh(e) {
  return e.type === "cosmos-sdk/MsgCreateVestingAccount";
}
ln.isAminoMsgCreateVestingAccount = Fh;
function Wh() {
  return {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
      aminoType: "cosmos-sdk/MsgCreateVestingAccount",
      toAmino: ({ fromAddress: e, toAddress: t, amount: n, endTime: r, delayed: o }) => ({
        from_address: e,
        to_address: t,
        amount: [...n],
        end_time: r.toString(),
        delayed: o
      }),
      fromAmino: ({ from_address: e, to_address: t, amount: n, end_time: r, delayed: o }) => ({
        fromAddress: e,
        toAddress: t,
        amount: [...n],
        endTime: BigInt(r),
        delayed: o
      })
    }
  };
}
ln.createVestingAminoConverters = Wh;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.vestingTypes = void 0;
const Jh = rd;
Co.vestingTypes = [
  ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", Jh.MsgCreateVestingAccount]
];
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isAminoMsgCreateValidator = e.isAminoMsgBeginRedelegate = e.createStakingAminoConverters = e.setupSlashingExtension = e.isAminoMsgUnjail = e.createSlashingAminoConverters = e.setupMintExtension = e.setupIbcExtension = e.isMsgTransferEncodeObject = e.ibcTypes = e.isAminoMsgTransfer = e.createIbcAminoConverters = e.groupTypes = e.createGroupAminoConverters = e.setupGovExtension = e.isMsgVoteWeightedEncodeObject = e.isMsgVoteEncodeObject = e.isMsgSubmitProposalEncodeObject = e.isMsgDepositEncodeObject = e.govTypes = e.isAminoMsgVoteWeighted = e.isAminoMsgVote = e.isAminoMsgSubmitProposal = e.isAminoMsgDeposit = e.createGovAminoConverters = e.setupFeegrantExtension = e.feegrantTypes = e.createFeegrantAminoConverters = e.isAminoMsgSubmitEvidence = e.createEvidenceAminoConverters = e.setupDistributionExtension = e.isMsgWithdrawDelegatorRewardEncodeObject = e.distributionTypes = e.isAminoMsgWithdrawValidatorCommission = e.isAminoMsgWithdrawDelegatorReward = e.isAminoMsgSetWithdrawAddress = e.isAminoMsgFundCommunityPool = e.createDistributionAminoConverters = e.isAminoMsgVerifyInvariant = e.createCrysisAminoConverters = e.setupBankExtension = e.isMsgSendEncodeObject = e.bankTypes = e.isAminoMsgSend = e.isAminoMsgMultiSend = e.createBankAminoConverters = e.setupAuthzExtension = e.authzTypes = e.createAuthzAminoConverters = e.setupAuthExtension = void 0, e.vestingTypes = e.isAminoMsgCreateVestingAccount = e.createVestingAminoConverters = e.setupTxExtension = e.setupStakingExtension = e.stakingTypes = e.isMsgUndelegateEncodeObject = e.isMsgEditValidatorEncodeObject = e.isMsgDelegateEncodeObject = e.isMsgCreateValidatorEncodeObject = e.isMsgBeginRedelegateEncodeObject = e.isAminoMsgUndelegate = e.isAminoMsgEditValidator = e.isAminoMsgDelegate = void 0;
  var t = oo;
  Object.defineProperty(e, "setupAuthExtension", { enumerable: !0, get: function() {
    return t.setupAuthExtension;
  } });
  var n = mo;
  Object.defineProperty(e, "createAuthzAminoConverters", { enumerable: !0, get: function() {
    return n.createAuthzAminoConverters;
  } });
  var r = fo;
  Object.defineProperty(e, "authzTypes", { enumerable: !0, get: function() {
    return r.authzTypes;
  } });
  var o = ho;
  Object.defineProperty(e, "setupAuthzExtension", { enumerable: !0, get: function() {
    return o.setupAuthzExtension;
  } });
  var s = ht;
  Object.defineProperty(e, "createBankAminoConverters", { enumerable: !0, get: function() {
    return s.createBankAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgMultiSend", { enumerable: !0, get: function() {
    return s.isAminoMsgMultiSend;
  } }), Object.defineProperty(e, "isAminoMsgSend", { enumerable: !0, get: function() {
    return s.isAminoMsgSend;
  } });
  var i = rn;
  Object.defineProperty(e, "bankTypes", { enumerable: !0, get: function() {
    return i.bankTypes;
  } }), Object.defineProperty(e, "isMsgSendEncodeObject", { enumerable: !0, get: function() {
    return i.isMsgSendEncodeObject;
  } });
  var c = po;
  Object.defineProperty(e, "setupBankExtension", { enumerable: !0, get: function() {
    return c.setupBankExtension;
  } });
  var a = on;
  Object.defineProperty(e, "createCrysisAminoConverters", { enumerable: !0, get: function() {
    return a.createCrysisAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgVerifyInvariant", { enumerable: !0, get: function() {
    return a.isAminoMsgVerifyInvariant;
  } });
  var u = Oe;
  Object.defineProperty(e, "createDistributionAminoConverters", { enumerable: !0, get: function() {
    return u.createDistributionAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgFundCommunityPool", { enumerable: !0, get: function() {
    return u.isAminoMsgFundCommunityPool;
  } }), Object.defineProperty(e, "isAminoMsgSetWithdrawAddress", { enumerable: !0, get: function() {
    return u.isAminoMsgSetWithdrawAddress;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawDelegatorReward", { enumerable: !0, get: function() {
    return u.isAminoMsgWithdrawDelegatorReward;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawValidatorCommission", { enumerable: !0, get: function() {
    return u.isAminoMsgWithdrawValidatorCommission;
  } });
  var d = sn;
  Object.defineProperty(e, "distributionTypes", { enumerable: !0, get: function() {
    return d.distributionTypes;
  } }), Object.defineProperty(e, "isMsgWithdrawDelegatorRewardEncodeObject", { enumerable: !0, get: function() {
    return d.isMsgWithdrawDelegatorRewardEncodeObject;
  } });
  var g = go;
  Object.defineProperty(e, "setupDistributionExtension", { enumerable: !0, get: function() {
    return g.setupDistributionExtension;
  } });
  var M = an;
  Object.defineProperty(e, "createEvidenceAminoConverters", { enumerable: !0, get: function() {
    return M.createEvidenceAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgSubmitEvidence", { enumerable: !0, get: function() {
    return M.isAminoMsgSubmitEvidence;
  } });
  var k = yo;
  Object.defineProperty(e, "createFeegrantAminoConverters", { enumerable: !0, get: function() {
    return k.createFeegrantAminoConverters;
  } });
  var V = bo;
  Object.defineProperty(e, "feegrantTypes", { enumerable: !0, get: function() {
    return V.feegrantTypes;
  } });
  var y = vo;
  Object.defineProperty(e, "setupFeegrantExtension", { enumerable: !0, get: function() {
    return y.setupFeegrantExtension;
  } });
  var p = je;
  Object.defineProperty(e, "createGovAminoConverters", { enumerable: !0, get: function() {
    return p.createGovAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgDeposit", { enumerable: !0, get: function() {
    return p.isAminoMsgDeposit;
  } }), Object.defineProperty(e, "isAminoMsgSubmitProposal", { enumerable: !0, get: function() {
    return p.isAminoMsgSubmitProposal;
  } }), Object.defineProperty(e, "isAminoMsgVote", { enumerable: !0, get: function() {
    return p.isAminoMsgVote;
  } }), Object.defineProperty(e, "isAminoMsgVoteWeighted", { enumerable: !0, get: function() {
    return p.isAminoMsgVoteWeighted;
  } });
  var v = Be;
  Object.defineProperty(e, "govTypes", { enumerable: !0, get: function() {
    return v.govTypes;
  } }), Object.defineProperty(e, "isMsgDepositEncodeObject", { enumerable: !0, get: function() {
    return v.isMsgDepositEncodeObject;
  } }), Object.defineProperty(e, "isMsgSubmitProposalEncodeObject", { enumerable: !0, get: function() {
    return v.isMsgSubmitProposalEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteEncodeObject", { enumerable: !0, get: function() {
    return v.isMsgVoteEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteWeightedEncodeObject", { enumerable: !0, get: function() {
    return v.isMsgVoteWeightedEncodeObject;
  } });
  var U = wo;
  Object.defineProperty(e, "setupGovExtension", { enumerable: !0, get: function() {
    return U.setupGovExtension;
  } });
  var x = ko;
  Object.defineProperty(e, "createGroupAminoConverters", { enumerable: !0, get: function() {
    return x.createGroupAminoConverters;
  } });
  var ae = _o;
  Object.defineProperty(e, "groupTypes", { enumerable: !0, get: function() {
    return ae.groupTypes;
  } });
  var b = cn;
  Object.defineProperty(e, "createIbcAminoConverters", { enumerable: !0, get: function() {
    return b.createIbcAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgTransfer", { enumerable: !0, get: function() {
    return b.isAminoMsgTransfer;
  } });
  var _ = un;
  Object.defineProperty(e, "ibcTypes", { enumerable: !0, get: function() {
    return _.ibcTypes;
  } }), Object.defineProperty(e, "isMsgTransferEncodeObject", { enumerable: !0, get: function() {
    return _.isMsgTransferEncodeObject;
  } });
  var w = So;
  Object.defineProperty(e, "setupIbcExtension", { enumerable: !0, get: function() {
    return w.setupIbcExtension;
  } });
  var D = Po;
  Object.defineProperty(e, "setupMintExtension", { enumerable: !0, get: function() {
    return D.setupMintExtension;
  } });
  var q = dn;
  Object.defineProperty(e, "createSlashingAminoConverters", { enumerable: !0, get: function() {
    return q.createSlashingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgUnjail", { enumerable: !0, get: function() {
    return q.isAminoMsgUnjail;
  } });
  var H = Ao;
  Object.defineProperty(e, "setupSlashingExtension", { enumerable: !0, get: function() {
    return H.setupSlashingExtension;
  } });
  var F = re;
  Object.defineProperty(e, "createStakingAminoConverters", { enumerable: !0, get: function() {
    return F.createStakingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgBeginRedelegate", { enumerable: !0, get: function() {
    return F.isAminoMsgBeginRedelegate;
  } }), Object.defineProperty(e, "isAminoMsgCreateValidator", { enumerable: !0, get: function() {
    return F.isAminoMsgCreateValidator;
  } }), Object.defineProperty(e, "isAminoMsgDelegate", { enumerable: !0, get: function() {
    return F.isAminoMsgDelegate;
  } }), Object.defineProperty(e, "isAminoMsgEditValidator", { enumerable: !0, get: function() {
    return F.isAminoMsgEditValidator;
  } }), Object.defineProperty(e, "isAminoMsgUndelegate", { enumerable: !0, get: function() {
    return F.isAminoMsgUndelegate;
  } });
  var L = ge;
  Object.defineProperty(e, "isMsgBeginRedelegateEncodeObject", { enumerable: !0, get: function() {
    return L.isMsgBeginRedelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgCreateValidatorEncodeObject", { enumerable: !0, get: function() {
    return L.isMsgCreateValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgDelegateEncodeObject", { enumerable: !0, get: function() {
    return L.isMsgDelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgEditValidatorEncodeObject", { enumerable: !0, get: function() {
    return L.isMsgEditValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgUndelegateEncodeObject", { enumerable: !0, get: function() {
    return L.isMsgUndelegateEncodeObject;
  } }), Object.defineProperty(e, "stakingTypes", { enumerable: !0, get: function() {
    return L.stakingTypes;
  } });
  var Q = To;
  Object.defineProperty(e, "setupStakingExtension", { enumerable: !0, get: function() {
    return Q.setupStakingExtension;
  } });
  var _e = Eo;
  Object.defineProperty(e, "setupTxExtension", { enumerable: !0, get: function() {
    return _e.setupTxExtension;
  } });
  var it = ln;
  Object.defineProperty(e, "createVestingAminoConverters", { enumerable: !0, get: function() {
    return it.createVestingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgCreateVestingAccount", { enumerable: !0, get: function() {
    return it.isAminoMsgCreateVestingAccount;
  } });
  var _n = Co;
  Object.defineProperty(e, "vestingTypes", { enumerable: !0, get: function() {
    return _n.vestingTypes;
  } });
})(Wn);
var pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.makeMultisignedTxBytes = pt.makeMultisignedTx = pt.makeCompactBitArray = void 0;
const Gh = ot, Lh = N, zh = vt, Os = od, Kh = Fr, ra = jt, dc = jt;
function lc(e) {
  const t = Math.ceil(e.length / 8), n = e.length - Math.floor(e.length / 8) * 8, r = new Uint8Array(t);
  return e.forEach((o, s) => {
    const i = Math.floor(s / 8), c = s % 8;
    o && (r[i] |= 1 << 7 - c);
  }), Os.CompactBitArray.fromPartial({ elems: r, extraBitsStored: n });
}
pt.makeCompactBitArray = lc;
function mc(e, t, n, r, o) {
  const s = Array.from(o.keys()), i = (0, Lh.fromBech32)(s[0]).prefix, c = Array(e.value.pubkeys.length).fill(!1), a = new Array();
  for (let k = 0; k < e.value.pubkeys.length; k++) {
    const V = (0, Gh.pubkeyToAddress)(e.value.pubkeys[k], i), y = o.get(V);
    y && (c[k] = !0, a.push(y));
  }
  const u = {
    publicKey: (0, zh.encodePubkey)(e),
    modeInfo: {
      multi: {
        bitarray: lc(c),
        modeInfos: a.map((k) => ({ single: { mode: Kh.SignMode.SIGN_MODE_LEGACY_AMINO_JSON } }))
      }
    },
    sequence: BigInt(t)
  }, d = ra.AuthInfo.fromPartial({
    signerInfos: [u],
    fee: {
      amount: [...n.amount],
      gasLimit: BigInt(n.gas)
    }
  }), g = ra.AuthInfo.encode(d).finish();
  return dc.TxRaw.fromPartial({
    bodyBytes: r,
    authInfoBytes: g,
    signatures: [Os.MultiSignature.encode(Os.MultiSignature.fromPartial({ signatures: a })).finish()]
  });
}
pt.makeMultisignedTx = mc;
function Qh(e, t, n, r, o) {
  const s = mc(e, t, n, r, o);
  return Uint8Array.from(dc.TxRaw.encode(s).finish());
}
pt.makeMultisignedTxBytes = Qh;
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.isSearchTxQueryArray = void 0;
function Zh(e) {
  return Array.isArray(e);
}
tr.isSearchTxQueryArray = Zh;
var fc = {}, Ys = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.pubkeyToAddress = Qe.pubkeyToRawAddress = Qe.rawSecp256k1PubkeyToRawAddress = Qe.rawEd25519PubkeyToRawAddress = void 0;
const js = ke, Xh = N;
function hc(e) {
  if (e.length !== 32)
    throw new Error(`Invalid Ed25519 pubkey length: ${e.length}`);
  return (0, js.sha256)(e).slice(0, 20);
}
Qe.rawEd25519PubkeyToRawAddress = hc;
function pc(e) {
  if (e.length !== 33)
    throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${e.length}`);
  return (0, js.ripemd160)((0, js.sha256)(e));
}
Qe.rawSecp256k1PubkeyToRawAddress = pc;
function gc(e, t) {
  switch (e) {
    case "ed25519":
      return hc(t);
    case "secp256k1":
      return pc(t);
    default:
      throw new Error(`Pubkey type ${e} not supported`);
  }
}
Qe.pubkeyToRawAddress = gc;
function Yh(e, t) {
  return (0, Xh.toHex)(gc(e, t)).toUpperCase();
}
Qe.pubkeyToAddress = Yh;
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.DateTime = se.toSeconds = se.fromSeconds = se.toRfc3339WithNanoseconds = se.fromRfc3339WithNanoseconds = void 0;
const ep = N, tp = Y;
function yc(e) {
  const t = (0, ep.fromRfc3339)(e), n = e.match(/\.(\d+)Z$/), r = n ? n[1].slice(3) : "";
  return t.nanoseconds = parseInt(r.padEnd(6, "0"), 10), t;
}
se.fromRfc3339WithNanoseconds = yc;
function bc(e) {
  var r;
  const t = e.toISOString(), n = ((r = e.nanoseconds) == null ? void 0 : r.toString()) ?? "";
  return `${t.slice(0, -1)}${n.padStart(6, "0")}Z`;
}
se.toRfc3339WithNanoseconds = bc;
function np(e, t = 0) {
  const n = new tp.Uint32(t).toNumber();
  if (n > 999999999)
    throw new Error("Nano seconds must not exceed 999999999");
  const r = new Date(e * 1e3 + Math.floor(n / 1e6));
  return r.nanoseconds = n % 1e6, r;
}
se.fromSeconds = np;
function rp(e) {
  return {
    seconds: Math.floor(e.getTime() / 1e3),
    nanos: e.getTime() % 1e3 * 1e6 + (e.nanoseconds ?? 0)
  };
}
se.toSeconds = rp;
class op {
  /** @deprecated Use fromRfc3339WithNanoseconds instead */
  static decode(t) {
    return yc(t);
  }
  /** @deprecated Use toRfc3339WithNanoseconds instead */
  static encode(t) {
    return bc(t);
  }
}
se.DateTime = op;
var $r = {}, Mo = {}, st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
st.createJsonRpcRequest = void 0;
const oa = "123456789";
function sp() {
  return oa[Math.floor(Math.random() * oa.length)];
}
function ip() {
  return parseInt(Array.from({ length: 12 }).map(() => sp()).join(""), 10);
}
function ap(e, t) {
  const n = t ? { ...t } : {};
  return {
    jsonrpc: "2.0",
    id: ip(),
    method: e,
    params: n
  };
}
st.createJsonRpcRequest = ap;
var nr = {}, Oo = {}, jo = {}, Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.makeJsonRpcId = void 0;
let cp = 1e4;
function up() {
  return cp += 1;
}
Bo.makeJsonRpcId = up;
var Ro = {}, nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.jsonRpcCode = nt.isJsonRpcSuccessResponse = nt.isJsonRpcErrorResponse = void 0;
function vc(e) {
  return typeof e.error == "object";
}
nt.isJsonRpcErrorResponse = vc;
function dp(e) {
  return !vc(e);
}
nt.isJsonRpcSuccessResponse = dp;
nt.jsonRpcCode = {
  parseError: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
  internalError: -32603,
  // server error (Reserved for implementation-defined server-errors.):
  // -32000 to -32099
  serverError: {
    default: -32e3
  }
};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.JsonRpcClient = void 0;
const lp = er, mp = nt;
class fp {
  constructor(t) {
    this.connection = t;
  }
  async run(t) {
    const n = this.connection.responseStream.filter((s) => s.id === t.id), r = (0, lp.firstEvent)(n);
    this.connection.sendRequest(t);
    const o = await r;
    if ((0, mp.isJsonRpcErrorResponse)(o)) {
      const s = o.error;
      throw new Error(`JSON RPC error: code=${s.code}; message='${s.message}'`);
    }
    return o;
  }
}
Ro.JsonRpcClient = fp;
var Re = {}, gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
gt.isJsonCompatibleDictionary = gt.isJsonCompatibleArray = gt.isJsonCompatibleValue = void 0;
function ei(e) {
  return !!(typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === null || // eslint-disable-next-line @typescript-eslint/no-use-before-define
  wc(e) || // eslint-disable-next-line @typescript-eslint/no-use-before-define
  kc(e));
}
gt.isJsonCompatibleValue = ei;
function wc(e) {
  if (!Array.isArray(e))
    return !1;
  for (const t of e)
    if (!ei(t))
      return !1;
  return !0;
}
gt.isJsonCompatibleArray = wc;
function kc(e) {
  return typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]" ? !1 : Object.values(e).every(ei);
}
gt.isJsonCompatibleDictionary = kc;
Object.defineProperty(Re, "__esModule", { value: !0 });
Re.parseJsonRpcResponse = Re.parseJsonRpcSuccessResponse = Re.parseJsonRpcErrorResponse = Re.parseJsonRpcRequest = Re.parseJsonRpcId = void 0;
const yt = gt;
function _c(e) {
  if (!(0, yt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  const t = e.id;
  return typeof t != "number" && typeof t != "string" ? null : t;
}
Re.parseJsonRpcId = _c;
function hp(e) {
  if (!(0, yt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${e.jsonrpc}`);
  const t = _c(e);
  if (t === null)
    throw new Error("Invalid id field");
  const n = e.method;
  if (typeof n != "string")
    throw new Error("Invalid method field");
  if (!(0, yt.isJsonCompatibleArray)(e.params) && !(0, yt.isJsonCompatibleDictionary)(e.params))
    throw new Error("Invalid params field");
  return {
    jsonrpc: "2.0",
    id: t,
    method: n,
    params: e.params
  };
}
Re.parseJsonRpcRequest = hp;
function pp(e) {
  if (typeof e.code != "number")
    throw new Error("Error property 'code' is not a number");
  if (typeof e.message != "string")
    throw new Error("Error property 'message' is not a string");
  let t;
  if (e.data === void 0)
    t = void 0;
  else if ((0, yt.isJsonCompatibleValue)(e.data))
    t = e.data;
  else
    throw new Error("Error property 'data' is defined but not a JSON compatible value.");
  return {
    code: e.code,
    message: e.message,
    ...t !== void 0 ? { data: t } : {}
  };
}
function Sc(e) {
  if (!(0, yt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);
  const t = e.id;
  if (typeof t != "number" && typeof t != "string" && t !== null)
    throw new Error("Invalid id field");
  if (typeof e.error > "u" || !(0, yt.isJsonCompatibleDictionary)(e.error))
    throw new Error("Invalid error field");
  return {
    jsonrpc: "2.0",
    id: t,
    error: pp(e.error)
  };
}
Re.parseJsonRpcErrorResponse = Sc;
function Pc(e) {
  if (!(0, yt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);
  const t = e.id;
  if (typeof t != "number" && typeof t != "string")
    throw new Error("Invalid id field");
  if (typeof e.result > "u")
    throw new Error("Invalid result field");
  const n = e.result;
  return {
    jsonrpc: "2.0",
    id: t,
    result: n
  };
}
Re.parseJsonRpcSuccessResponse = Pc;
function gp(e) {
  let t;
  try {
    t = Sc(e);
  } catch {
    t = Pc(e);
  }
  return t;
}
Re.parseJsonRpcResponse = gp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.jsonRpcCode = e.isJsonRpcSuccessResponse = e.isJsonRpcErrorResponse = e.parseJsonRpcSuccessResponse = e.parseJsonRpcResponse = e.parseJsonRpcRequest = e.parseJsonRpcId = e.parseJsonRpcErrorResponse = e.JsonRpcClient = e.makeJsonRpcId = void 0;
  var t = Bo;
  Object.defineProperty(e, "makeJsonRpcId", { enumerable: !0, get: function() {
    return t.makeJsonRpcId;
  } });
  var n = Ro;
  Object.defineProperty(e, "JsonRpcClient", { enumerable: !0, get: function() {
    return n.JsonRpcClient;
  } });
  var r = Re;
  Object.defineProperty(e, "parseJsonRpcErrorResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcErrorResponse;
  } }), Object.defineProperty(e, "parseJsonRpcId", { enumerable: !0, get: function() {
    return r.parseJsonRpcId;
  } }), Object.defineProperty(e, "parseJsonRpcRequest", { enumerable: !0, get: function() {
    return r.parseJsonRpcRequest;
  } }), Object.defineProperty(e, "parseJsonRpcResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcResponse;
  } }), Object.defineProperty(e, "parseJsonRpcSuccessResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcSuccessResponse;
  } });
  var o = nt;
  Object.defineProperty(e, "isJsonRpcErrorResponse", { enumerable: !0, get: function() {
    return o.isJsonRpcErrorResponse;
  } }), Object.defineProperty(e, "isJsonRpcSuccessResponse", { enumerable: !0, get: function() {
    return o.isJsonRpcSuccessResponse;
  } }), Object.defineProperty(e, "jsonRpcCode", { enumerable: !0, get: function() {
    return o.jsonRpcCode;
  } });
})(jo);
var rr = {}, yp = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.http = void 0;
const bp = yp(sd);
function vp(e) {
  if (e.status >= 400)
    throw new Error(`Bad status on response: ${e.status}`);
  return e;
}
function wp(e) {
  return e.toString().includes("emitExperimentalWarning");
}
async function kp(e, t, n, r) {
  if (typeof fetch == "function" && !wp(fetch)) {
    const o = {
      method: e,
      body: r ? JSON.stringify(r) : void 0,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "application/json",
        ...n
      }
    };
    return fetch(t, o).then(vp).then((s) => s.json());
  } else
    return bp.default.request({ url: t, method: e, data: r, headers: n }).then((o) => o.data);
}
rr.http = kp;
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.hasProtocol = rt.instanceOfRpcStreamingClient = void 0;
function _p(e) {
  return typeof e.listen == "function";
}
rt.instanceOfRpcStreamingClient = _p;
function Sp(e) {
  return e.search("://") !== -1;
}
rt.hasProtocol = Sp;
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.HttpBatchClient = void 0;
const sa = jo, Pp = rr, Ap = rt, ia = {
  dispatchInterval: 20,
  batchSizeLimit: 20
};
class Tp {
  constructor(t, n = {}) {
    if (this.queue = [], this.options = {
      batchSizeLimit: n.batchSizeLimit ?? ia.batchSizeLimit,
      dispatchInterval: n.dispatchInterval ?? ia.dispatchInterval
    }, typeof t == "string") {
      if (!(0, Ap.hasProtocol)(t))
        throw new Error("Endpoint URL is missing a protocol. Expected 'https://' or 'http://'.");
      this.url = t;
    } else
      this.url = t.url, this.headers = t.headers;
    this.timer = setInterval(() => this.tick(), n.dispatchInterval), this.validate();
  }
  disconnect() {
    this.timer && clearInterval(this.timer), this.timer = void 0;
  }
  async execute(t) {
    return new Promise((n, r) => {
      this.queue.push({ request: t, resolve: n, reject: r }), this.queue.length >= this.options.batchSizeLimit && this.tick();
    });
  }
  validate() {
    if (!this.options.batchSizeLimit || !Number.isSafeInteger(this.options.batchSizeLimit) || this.options.batchSizeLimit < 1)
      throw new Error("batchSizeLimit must be a safe integer >= 1");
  }
  /**
   * This is called in an interval where promise rejections cannot be handled.
   * So this is not async and HTTP errors need to be handled by the queued promises.
   */
  tick() {
    const t = this.queue.splice(0, this.options.batchSizeLimit);
    if (!t.length)
      return;
    const n = t.map((o) => o.request), r = n.map((o) => o.id);
    (0, Pp.http)("POST", this.url, this.headers, n).then((o) => {
      (Array.isArray(o) ? o : [o]).forEach((i) => {
        const c = t.find((g) => g.request.id === i.id);
        if (!c)
          return;
        const { reject: a, resolve: u } = c, d = (0, sa.parseJsonRpcResponse)(i);
        (0, sa.isJsonRpcErrorResponse)(d) ? a(new Error(JSON.stringify(d.error))) : u(d);
      });
    }, (o) => {
      for (const s of r) {
        const i = t.find((c) => c.request.id === s);
        if (!i)
          return;
        i.reject(o);
      }
    });
  }
}
Oo.HttpBatchClient = Tp;
var Io = {};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.HttpClient = void 0;
const aa = jo, Ep = rr, Cp = rt;
class Mp {
  constructor(t) {
    if (typeof t == "string") {
      if (!(0, Cp.hasProtocol)(t))
        throw new Error("Endpoint URL is missing a protocol. Expected 'https://' or 'http://'.");
      this.url = t;
    } else
      this.url = t.url, this.headers = t.headers;
  }
  disconnect() {
  }
  async execute(t) {
    const n = (0, aa.parseJsonRpcResponse)(await (0, Ep.http)("POST", this.url, this.headers, t));
    if ((0, aa.isJsonRpcErrorResponse)(n))
      throw new Error(JSON.stringify(n.error));
    return n;
  }
}
Io.HttpClient = Mp;
var $o = {}, Ac = {}, ti = {}, or = {}, sr = {}, Op = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.SocketWrapper = void 0;
const Ut = Op(id);
function jp() {
  return typeof et.process < "u" && typeof et.process.versions < "u" && typeof et.process.versions.node < "u";
}
class Bp {
  constructor(t, n, r, o, s, i = 1e4) {
    this.closed = !1, this.connected = new Promise((c, a) => {
      this.connectedResolver = c, this.connectedRejecter = a;
    }), this.url = t, this.messageHandler = n, this.errorHandler = r, this.openHandler = o, this.closeHandler = s, this.timeout = i;
  }
  /**
   * returns a promise that resolves when connection is open
   */
  connect() {
    const t = new Ut.default(this.url);
    t.onerror = (r) => {
      this.clearTimeout(), this.errorHandler && this.errorHandler(r);
    }, t.onmessage = (r) => {
      this.messageHandler({
        type: r.type,
        data: r.data
      });
    }, t.onopen = (r) => {
      this.clearTimeout(), this.connectedResolver(), this.openHandler && this.openHandler();
    }, t.onclose = (r) => {
      this.closed = !0, this.closeHandler && this.closeHandler(r);
    };
    const n = Date.now();
    this.timeoutId = setTimeout(() => {
      t.onmessage = () => 0, t.onerror = () => 0, t.onopen = () => 0, t.onclose = () => 0, t.close(), this.socket = void 0;
      const r = Math.floor(Date.now() - n);
      this.connectedRejecter(`Connection attempt timed out after ${r} ms`);
    }, this.timeout), this.socket = t;
  }
  /**
   * Closes an established connection and aborts other connection states
   */
  disconnect() {
    if (!this.socket)
      throw new Error("Socket undefined. This must be called after connecting.");
    switch (this.clearTimeout(), this.socket.readyState) {
      case Ut.default.OPEN:
        this.socket.close(
          1e3
          /* Normal Closure */
        );
        break;
      case Ut.default.CLOSED:
        break;
      case Ut.default.CONNECTING:
        this.socket.onopen = () => 0, this.socket.onclose = () => 0, this.socket.onerror = () => 0, this.socket.onmessage = () => 0, this.socket = void 0, this.closeHandler && this.closeHandler({ wasClean: !1, code: 4001 });
        break;
      case Ut.default.CLOSING:
        break;
      default:
        throw new Error(`Unknown readyState: ${this.socket.readyState}`);
    }
  }
  async send(t) {
    return new Promise((n, r) => {
      if (!this.socket)
        throw new Error("Socket undefined. This must be called after connecting.");
      if (this.closed)
        throw new Error("Socket was closed, so no data can be sent anymore.");
      if (this.socket.readyState !== Ut.default.OPEN)
        throw new Error("Websocket is not open");
      jp() ? this.socket.send(t, (o) => o ? r(o) : n()) : (this.socket.send(t), n());
    });
  }
  /**
   * Clears the timeout function, such that no timeout error will be raised anymore. This should be
   * called when the connection is established, a connection error occurred or the socket is disconnected.
   *
   * This method must not be called before `connect()`.
   * This method is idempotent.
   */
  clearTimeout() {
    if (!this.timeoutId)
      throw new Error("Timeout ID not set. This should not happen and usually means connect() was not called.");
    clearTimeout(this.timeoutId);
  }
}
sr.SocketWrapper = Bp;
Object.defineProperty(or, "__esModule", { value: !0 });
or.StreamingSocket = void 0;
const Rp = Bt, Ip = sr;
class $p {
  constructor(t, n = 1e4) {
    this.socket = new Ip.SocketWrapper(t, (o) => {
      this.eventProducerListener && this.eventProducerListener.next(o);
    }, (o) => {
      this.eventProducerListener && this.eventProducerListener.error(o);
    }, () => {
    }, (o) => {
      this.eventProducerListener && (o.wasClean ? this.eventProducerListener.complete() : this.eventProducerListener.error("Socket was closed unclean"));
    }, n), this.connected = this.socket.connected;
    const r = {
      start: (o) => this.eventProducerListener = o,
      stop: () => this.eventProducerListener = void 0
    };
    this.events = Rp.Stream.create(r);
  }
  connect() {
    this.socket.connect();
  }
  disconnect() {
    this.socket.disconnect();
  }
  async send(t) {
    return this.socket.send(t);
  }
}
or.StreamingSocket = $p;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.QueueingStreamingSocket = e.ConnectionStatus = void 0;
  const t = er, n = Bt, r = or;
  var o;
  (function(i) {
    i[i.Unconnected = 0] = "Unconnected", i[i.Connecting = 1] = "Connecting", i[i.Connected = 2] = "Connected", i[i.Disconnected = 3] = "Disconnected";
  })(o = e.ConnectionStatus || (e.ConnectionStatus = {}));
  class s {
    constructor(c, a = 1e4, u) {
      this.queue = [], this.isProcessingQueue = !1, this.url = c, this.timeout = a, this.reconnectedHandler = u;
      const d = {
        start: (g) => this.eventProducerListener = g,
        stop: () => this.eventProducerListener = void 0
      };
      this.events = n.Stream.create(d), this.connectionStatusProducer = new t.DefaultValueProducer(o.Unconnected), this.connectionStatus = new t.ValueAndUpdates(this.connectionStatusProducer), this.socket = new r.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
        next: (g) => {
          if (!this.eventProducerListener)
            throw new Error("No event producer listener set");
          this.eventProducerListener.next(g);
        },
        error: () => this.connectionStatusProducer.update(o.Disconnected)
      });
    }
    connect() {
      this.connectionStatusProducer.update(o.Connecting), this.socket.connected.then(async () => (this.connectionStatusProducer.update(o.Connected), this.processQueue()), () => this.connectionStatusProducer.update(o.Disconnected)), this.socket.connect();
    }
    disconnect() {
      this.connectionStatusProducer.update(o.Disconnected), this.socket.disconnect();
    }
    reconnect() {
      this.socket = new r.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
        next: (c) => {
          if (!this.eventProducerListener)
            throw new Error("No event producer listener set");
          this.eventProducerListener.next(c);
        },
        error: () => this.connectionStatusProducer.update(o.Disconnected)
      }), this.socket.connected.then(() => {
        this.reconnectedHandler && this.reconnectedHandler();
      }), this.connect();
    }
    getQueueLength() {
      return this.queue.length;
    }
    queueRequest(c) {
      this.queue.push(c), this.processQueue();
    }
    async processQueue() {
      if (this.isProcessingQueue || this.connectionStatus.value !== o.Connected)
        return;
      this.isProcessingQueue = !0;
      let c;
      for (; c = this.queue.shift(); )
        try {
          await this.socket.send(c), this.isProcessingQueue = !1;
        } catch {
          this.queue.unshift(c), this.isProcessingQueue = !1;
          return;
        }
    }
  }
  e.QueueingStreamingSocket = s;
})(ti);
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.ReconnectingSocket = void 0;
const Np = Bt, ms = ti;
class ni {
  /** Starts with a 0.1 second timeout, then doubles every attempt with a maximum timeout of 5 seconds. */
  static calculateTimeout(t) {
    return Math.min(2 ** t * 100, 5e3);
  }
  constructor(t, n = 1e4, r) {
    this.unconnected = !0, this.disconnected = !1, this.timeoutIndex = 0, this.reconnectTimeout = null;
    const o = {
      start: (s) => this.eventProducerListener = s,
      stop: () => this.eventProducerListener = void 0
    };
    this.events = Np.Stream.create(o), this.socket = new ms.QueueingStreamingSocket(t, n, r), this.socket.events.subscribe({
      next: (s) => {
        this.eventProducerListener && this.eventProducerListener.next(s);
      },
      error: (s) => {
        this.eventProducerListener && this.eventProducerListener.error(s);
      }
    }), this.connectionStatus = this.socket.connectionStatus, this.connectionStatus.updates.subscribe({
      next: (s) => {
        s === ms.ConnectionStatus.Connected && (this.timeoutIndex = 0), s === ms.ConnectionStatus.Disconnected && (this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null), this.reconnectTimeout = setTimeout(() => this.socket.reconnect(), ni.calculateTimeout(this.timeoutIndex++)));
      }
    });
  }
  connect() {
    if (!this.unconnected)
      throw new Error("Cannot connect: socket has already connected");
    this.socket.connect(), this.unconnected = !1;
  }
  disconnect() {
    if (this.unconnected)
      throw new Error("Cannot disconnect: socket has not yet connected");
    this.socket.disconnect(), this.eventProducerListener && this.eventProducerListener.complete(), this.disconnected = !0;
  }
  queueRequest(t) {
    if (this.disconnected)
      throw new Error("Cannot queue request: socket has disconnected");
    this.socket.queueRequest(t);
  }
}
No.ReconnectingSocket = ni;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.StreamingSocket = e.SocketWrapper = e.ReconnectingSocket = e.QueueingStreamingSocket = e.ConnectionStatus = void 0;
  var t = ti;
  Object.defineProperty(e, "ConnectionStatus", { enumerable: !0, get: function() {
    return t.ConnectionStatus;
  } }), Object.defineProperty(e, "QueueingStreamingSocket", { enumerable: !0, get: function() {
    return t.QueueingStreamingSocket;
  } });
  var n = No;
  Object.defineProperty(e, "ReconnectingSocket", { enumerable: !0, get: function() {
    return n.ReconnectingSocket;
  } });
  var r = sr;
  Object.defineProperty(e, "SocketWrapper", { enumerable: !0, get: function() {
    return r.SocketWrapper;
  } });
  var o = or;
  Object.defineProperty(e, "StreamingSocket", { enumerable: !0, get: function() {
    return o.StreamingSocket;
  } });
})(Ac);
Object.defineProperty($o, "__esModule", { value: !0 });
$o.WebsocketClient = void 0;
const Nr = jo, ca = Ac, xp = er, Dp = Bt, Up = rt;
function qp(e) {
  throw e;
}
function Tc(e) {
  if (e.type !== "message")
    throw new Error(`Unexcepted message type on websocket: ${e.type}`);
  return (0, Nr.parseJsonRpcResponse)(JSON.parse(e.data));
}
class Hp {
  constructor(t, n) {
    this.running = !1, this.subscriptions = [], this.request = t, this.socket = n;
  }
  /**
   * Implementation of Producer.start
   */
  start(t) {
    if (this.running)
      throw Error("Already started. Please stop first before restarting.");
    this.running = !0, this.connectToClient(t), this.socket.queueRequest(JSON.stringify(this.request));
  }
  /**
   * Implementation of Producer.stop
   *
   * Called by the stream when the stream's last listener stopped listening
   * or when the producer completed.
   */
  stop() {
    this.running = !1;
    const t = { ...this.request, method: "unsubscribe" };
    try {
      this.socket.queueRequest(JSON.stringify(t));
    } catch (n) {
      if (!(n instanceof Error && n.message.match(/socket has disconnected/i)))
        throw n;
    }
  }
  connectToClient(t) {
    const n = this.socket.events.map(Tc), r = n.filter((i) => i.id === this.request.id).subscribe({
      next: (i) => {
        (0, Nr.isJsonRpcErrorResponse)(i) && (this.closeSubscriptions(), t.error(JSON.stringify(i.error))), r.unsubscribe();
      }
    }), o = n.filter((i) => i.id === this.request.id).subscribe({
      next: (i) => {
        (0, Nr.isJsonRpcErrorResponse)(i) ? (this.closeSubscriptions(), t.error(JSON.stringify(i.error))) : t.next(i.result);
      }
    }), s = n.subscribe({
      error: (i) => {
        this.closeSubscriptions(), t.error(i);
      },
      complete: () => {
        this.closeSubscriptions(), t.complete();
      }
    });
    this.subscriptions.push(r, o, s);
  }
  closeSubscriptions() {
    for (const t of this.subscriptions)
      t.unsubscribe();
    this.subscriptions = [];
  }
}
class Vp {
  constructor(t, n = qp) {
    if (this.subscriptionStreams = /* @__PURE__ */ new Map(), !(0, Up.hasProtocol)(t))
      throw new Error("Base URL is missing a protocol. Expected 'ws://' or 'wss://'.");
    const r = t.endsWith("/") ? "websocket" : "/websocket";
    this.url = t + r, this.socket = new ca.ReconnectingSocket(this.url);
    const o = this.socket.events.subscribe({
      error: (s) => {
        n(s), o.unsubscribe();
      }
    });
    this.jsonRpcResponseStream = this.socket.events.map(Tc), this.socket.connect();
  }
  async execute(t) {
    const n = this.responseForRequestId(t.id);
    this.socket.queueRequest(JSON.stringify(t));
    const r = await n;
    if ((0, Nr.isJsonRpcErrorResponse)(r))
      throw new Error(JSON.stringify(r.error));
    return r;
  }
  listen(t) {
    if (t.method !== "subscribe")
      throw new Error('Request method must be "subscribe" to start event listening');
    const n = t.params.query;
    if (typeof n != "string")
      throw new Error("request.params.query must be a string");
    if (!this.subscriptionStreams.has(n)) {
      const r = new Hp(t, this.socket), o = Dp.Stream.create(r);
      this.subscriptionStreams.set(n, o);
    }
    return this.subscriptionStreams.get(n).filter((r) => r.query !== void 0);
  }
  /**
   * Resolves as soon as websocket is connected. execute() queues requests automatically,
   * so this should be required for testing purposes only.
   */
  async connected() {
    await this.socket.connectionStatus.waitFor(ca.ConnectionStatus.Connected);
  }
  disconnect() {
    this.socket.disconnect();
  }
  async responseForRequestId(t) {
    return (0, xp.firstEvent)(this.jsonRpcResponseStream.filter((n) => n.id === t));
  }
}
$o.WebsocketClient = Vp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebsocketClient = e.instanceOfRpcStreamingClient = e.HttpClient = e.HttpBatchClient = void 0;
  var t = Oo;
  Object.defineProperty(e, "HttpBatchClient", { enumerable: !0, get: function() {
    return t.HttpBatchClient;
  } });
  var n = Io;
  Object.defineProperty(e, "HttpClient", { enumerable: !0, get: function() {
    return n.HttpClient;
  } });
  var r = rt;
  Object.defineProperty(e, "instanceOfRpcStreamingClient", { enumerable: !0, get: function() {
    return r.instanceOfRpcStreamingClient;
  } });
  var o = $o;
  Object.defineProperty(e, "WebsocketClient", { enumerable: !0, get: function() {
    return o.WebsocketClient;
  } });
})(nr);
var Ec = {}, xo = {}, Ae = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.encodeBlockId = R.encodeVersion = R.encodeBytes = R.encodeTime = R.encodeUvarint = R.encodeString = R.dictionaryToStringMap = R.may = R.assertNotEmpty = R.assertObject = R.assertArray = R.assertNumber = R.assertString = R.assertBoolean = R.assertSet = void 0;
const Fp = N;
function Rt(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
R.assertSet = Rt;
function Wp(e) {
  if (Rt(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
R.assertBoolean = Wp;
function Jp(e) {
  if (Rt(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
R.assertString = Jp;
function Gp(e) {
  if (Rt(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
R.assertNumber = Gp;
function Lp(e) {
  if (Rt(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
R.assertArray = Lp;
function zp(e) {
  if (Rt(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
R.assertObject = zp;
function Kp(e) {
  if (Rt(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
R.assertNotEmpty = Kp;
function Qp(e, t) {
  return t == null ? void 0 : e(t);
}
R.may = Qp;
function Zp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
R.dictionaryToStringMap = Zp;
function Xp(e) {
  const t = (0, Fp.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
R.encodeString = Xp;
function mn(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...mn(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
R.encodeUvarint = mn;
function Yp(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...mn(n)] : new Uint8Array(), o = (e.nanoseconds || 0) + t % 1e3 * 1e6, s = o ? [16, ...mn(o)] : new Uint8Array();
  return Uint8Array.from([...r, ...s]);
}
R.encodeTime = Yp;
function eg(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
R.encodeBytes = eg;
function tg(e) {
  const t = e.block ? Uint8Array.from([8, ...mn(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...mn(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
R.encodeVersion = tg;
function ng(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
R.encodeBlockId = ng;
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.smallIntToApi = Ae.apiToBigInt = Ae.apiToSmallInt = void 0;
const Bs = Y, rg = R;
function og(e) {
  return (typeof e == "number" ? new Bs.Int53(e) : Bs.Int53.fromString(e)).toNumber();
}
Ae.apiToSmallInt = og;
function sg(e) {
  if ((0, rg.assertString)(e), !e.match(/^-?[0-9]+$/))
    throw new Error("Invalid string format");
  return BigInt(e);
}
Ae.apiToBigInt = sg;
function ig(e) {
  return new Bs.Int53(e).toString();
}
Ae.smallIntToApi = ig;
var I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.encodeBlockId = I.encodeVersion = I.encodeBytes = I.encodeTime = I.encodeUvarint = I.encodeString = I.dictionaryToStringMap = I.may = I.assertNotEmpty = I.assertObject = I.assertArray = I.assertNumber = I.assertString = I.assertBoolean = I.assertSet = void 0;
const ag = N;
function It(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
I.assertSet = It;
function cg(e) {
  if (It(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
I.assertBoolean = cg;
function ug(e) {
  if (It(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
I.assertString = ug;
function dg(e) {
  if (It(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
I.assertNumber = dg;
function lg(e) {
  if (It(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
I.assertArray = lg;
function mg(e) {
  if (It(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
I.assertObject = mg;
function fg(e) {
  if (It(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
I.assertNotEmpty = fg;
function hg(e, t) {
  return t == null ? void 0 : e(t);
}
I.may = hg;
function pg(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
I.dictionaryToStringMap = pg;
function gg(e) {
  const t = (0, ag.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
I.encodeString = gg;
function fn(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...fn(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
I.encodeUvarint = fn;
function yg(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...fn(n)] : new Uint8Array(), o = (e.nanoseconds || 0) + t % 1e3 * 1e6, s = o ? [16, ...fn(o)] : new Uint8Array();
  return Uint8Array.from([...r, ...s]);
}
I.encodeTime = yg;
function bg(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
I.encodeBytes = bg;
function vg(e) {
  const t = e.block ? Uint8Array.from([8, ...fn(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...fn(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
I.encodeVersion = vg;
function wg(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
I.encodeBlockId = wg;
var Do = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const o = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), s = n.raw ? [n.raw] : [];
    return [...o, ...s].join(" AND ");
  }
  e.buildQuery = t;
})(Do);
var kg = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), _g = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Sg = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && kg(t, e, n);
  return _g(t, e), t;
};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.Params = void 0;
const ri = N, qe = Ae, ee = st, be = I, Pg = Sg(Do);
function fs(e) {
  return {
    height: (0, be.may)(qe.smallIntToApi, e.height)
  };
}
function Ag(e) {
  return {
    minHeight: (0, be.may)(qe.smallIntToApi, e.minHeight),
    maxHeight: (0, be.may)(qe.smallIntToApi, e.maxHeight)
  };
}
function Tg(e) {
  return {
    query: e.query,
    page: (0, be.may)(qe.smallIntToApi, e.page),
    per_page: (0, be.may)(qe.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function Eg(e) {
  return {
    path: (0, be.assertNotEmpty)(e.path),
    data: (0, ri.toHex)(e.data),
    height: (0, be.may)(qe.smallIntToApi, e.height),
    prove: e.prove
  };
}
function Cg(e) {
  return {
    tx: (0, ri.toBase64)((0, be.assertNotEmpty)(e.tx))
  };
}
function Mg(e) {
  return {
    hash: (0, ri.toBase64)((0, be.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function Og(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, be.may)(qe.smallIntToApi, e.page),
    per_page: (0, be.may)(qe.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function jg(e) {
  return {
    height: (0, be.may)(qe.smallIntToApi, e.height),
    page: (0, be.may)(qe.smallIntToApi, e.page),
    per_page: (0, be.may)(qe.smallIntToApi, e.per_page)
  };
}
let Bg = class {
  static encodeAbciInfo(t) {
    return (0, ee.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Eg(t.params));
  }
  static encodeBlock(t) {
    return (0, ee.createJsonRpcRequest)(t.method, fs(t.params));
  }
  static encodeBlockchain(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Ag(t.params));
  }
  static encodeBlockResults(t) {
    return (0, ee.createJsonRpcRequest)(t.method, fs(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Tg(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Cg(t.params));
  }
  static encodeCommit(t) {
    return (0, ee.createJsonRpcRequest)(t.method, fs(t.params));
  }
  static encodeGenesis(t) {
    return (0, ee.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, ee.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, ee.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, ee.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = Pg.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, ee.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Mg(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, ee.createJsonRpcRequest)(t.method, Og(t.params));
  }
  static encodeValidators(t) {
    return (0, ee.createJsonRpcRequest)(t.method, jg(t.params));
  }
};
xo.Params = Bg;
var Ie = {}, ir = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.BlockIdFlag = void 0, function(t) {
    t[t.Unknown = 0] = "Unknown", t[t.Absent = 1] = "Absent", t[t.Commit = 2] = "Commit", t[t.Nil = 3] = "Nil", t[t.Unrecognized = -1] = "Unrecognized";
  }(e.BlockIdFlag || (e.BlockIdFlag = {}));
})(ir);
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.hashBlock = hn.hashTx = void 0;
const oi = ke, ue = I;
function Rg(e) {
  return (0, oi.sha256)(e);
}
hn.hashTx = Rg;
function Ig(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function $g(e) {
  const t = new oi.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function Ng(e, t) {
  const n = new oi.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function Rs(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return $g(e[0]);
    default: {
      const t = Ig(e.length), n = Rs(e.slice(0, t)), r = Rs(e.slice(t));
      return Ng(n, r);
    }
  }
}
function xg(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, ue.encodeVersion)(e.version),
    (0, ue.encodeString)(e.chainId),
    (0, ue.encodeUvarint)(e.height),
    (0, ue.encodeTime)(e.time),
    (0, ue.encodeBlockId)(e.lastBlockId),
    (0, ue.encodeBytes)(e.lastCommitHash),
    (0, ue.encodeBytes)(e.dataHash),
    (0, ue.encodeBytes)(e.validatorsHash),
    (0, ue.encodeBytes)(e.nextValidatorsHash),
    (0, ue.encodeBytes)(e.consensusHash),
    (0, ue.encodeBytes)(e.appHash),
    (0, ue.encodeBytes)(e.lastResultsHash),
    (0, ue.encodeBytes)(e.evidenceHash),
    (0, ue.encodeBytes)(e.proposerAddress)
  ];
  return Rs(t);
}
hn.hashBlock = xg;
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.Responses = Ie.decodeValidatorInfo = Ie.decodeValidatorGenesis = Ie.decodeValidatorUpdate = Ie.decodeEvent = void 0;
const E = N, Cc = Z, Jn = se, P = Ae, Dg = ir, f = I, Ug = hn;
function qg(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, f.may)(P.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, f.may)(E.fromBase64, e.last_block_app_hash)
  };
}
function Hg(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, E.fromBase64)(t.key),
      data: (0, E.fromBase64)(t.data)
    }))
  };
}
function Vg(e) {
  return {
    key: (0, E.fromBase64)((0, f.assertString)(e.key ?? "")),
    value: (0, E.fromBase64)((0, f.assertString)(e.value ?? "")),
    proof: (0, f.may)(Hg, e.proofOps),
    height: (0, f.may)(P.apiToSmallInt, e.height),
    code: (0, f.may)(P.apiToSmallInt, e.code),
    codespace: (0, f.assertString)(e.codespace ?? ""),
    index: (0, f.may)(P.apiToSmallInt, e.index),
    log: e.log,
    info: (0, f.assertString)(e.info ?? "")
  };
}
function Fg(e) {
  return {
    key: (0, f.assertNotEmpty)(e.key),
    value: e.value ?? ""
  };
}
function Wg(e) {
  return (0, f.assertArray)(e).map(Fg);
}
function Mc(e) {
  return {
    type: e.type,
    attributes: e.attributes ? Wg(e.attributes) : []
  };
}
Ie.decodeEvent = Mc;
function Is(e) {
  return (0, f.assertArray)(e).map(Mc);
}
function pn(e) {
  return {
    code: (0, P.apiToSmallInt)((0, f.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, f.may)(E.fromBase64, e.data),
    events: e.events ? Is(e.events) : [],
    gasWanted: (0, P.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, P.apiToBigInt)(e.gas_used ?? "0")
  };
}
function si(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, Cc.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, E.fromBase64)((0, f.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, E.fromBase64)((0, f.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, E.fromBase64)((0, f.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function Jg(e) {
  return {
    maxBytes: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.max_gas))
  };
}
function Gg(e) {
  return {
    maxAgeNumBlocks: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.max_age_duration))
  };
}
function Oc(e) {
  return {
    block: Jg((0, f.assertObject)(e.block)),
    evidence: Gg((0, f.assertObject)(e.evidence))
  };
}
function jc(e) {
  return {
    pubkey: si((0, f.assertObject)(e.pub_key)),
    votingPower: (0, P.apiToBigInt)(e.power ?? "0")
  };
}
Ie.decodeValidatorUpdate = jc;
function Lg(e) {
  return {
    height: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(pn),
    validatorUpdates: (e.validator_updates || []).map(jc),
    consensusUpdates: (0, f.may)(Oc, e.consensus_param_updates),
    beginBlockEvents: Is(e.begin_block_events || []),
    endBlockEvents: Is(e.end_block_events || [])
  };
}
function Uo(e) {
  return {
    hash: (0, E.fromHex)((0, f.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, f.assertNotEmpty)(e.parts.total),
      hash: (0, E.fromHex)((0, f.assertNotEmpty)(e.parts.hash))
    }
  };
}
function zg(e) {
  return {
    block: (0, P.apiToSmallInt)(e.block),
    app: (0, P.apiToSmallInt)(e.app ?? 0)
  };
}
function qo(e) {
  return {
    version: zg(e.version),
    chainId: (0, f.assertNotEmpty)(e.chain_id),
    height: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    time: (0, Jn.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? Uo(e.last_block_id) : null,
    lastCommitHash: (0, E.fromHex)((0, f.assertSet)(e.last_commit_hash)),
    dataHash: (0, E.fromHex)((0, f.assertSet)(e.data_hash)),
    validatorsHash: (0, E.fromHex)((0, f.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, E.fromHex)((0, f.assertSet)(e.next_validators_hash)),
    consensusHash: (0, E.fromHex)((0, f.assertSet)(e.consensus_hash)),
    appHash: (0, E.fromHex)((0, f.assertSet)(e.app_hash)),
    lastResultsHash: (0, E.fromHex)((0, f.assertSet)(e.last_results_hash)),
    evidenceHash: (0, E.fromHex)((0, f.assertSet)(e.evidence_hash)),
    proposerAddress: (0, E.fromHex)((0, f.assertNotEmpty)(e.proposer_address))
  };
}
function Kg(e) {
  return {
    blockId: Uo(e.block_id),
    blockSize: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.block_size)),
    header: qo(e.header),
    numTxs: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.num_txs))
  };
}
function Qg(e) {
  return {
    lastHeight: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.last_height)),
    blockMetas: (0, f.assertArray)(e.block_metas).map(Kg)
  };
}
function Zg(e) {
  return {
    ...pn(e),
    hash: (0, E.fromHex)((0, f.assertNotEmpty)(e.hash))
  };
}
function Xg(e) {
  const t = e.tx_result ? pn(e.tx_result) : void 0;
  return {
    height: (0, P.apiToSmallInt)(e.height),
    hash: (0, E.fromHex)((0, f.assertNotEmpty)(e.hash)),
    checkTx: pn((0, f.assertObject)(e.check_tx)),
    deliverTx: t,
    txResult: t
  };
}
function Yg(e) {
  return (0, Cc.assert)(e in Dg.BlockIdFlag), e;
}
function ey(e) {
  return {
    blockIdFlag: Yg(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, E.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, Jn.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, E.fromBase64)(e.signature) : void 0
  };
}
function Bc(e) {
  return {
    blockId: Uo((0, f.assertObject)(e.block_id)),
    height: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    round: (0, P.apiToSmallInt)(e.round),
    signatures: (0, f.assertArray)(e.signatures).map(ey)
  };
}
function ty(e) {
  return {
    canonical: (0, f.assertBoolean)(e.canonical),
    header: qo(e.signed_header.header),
    commit: Bc(e.signed_header.commit)
  };
}
function Rc(e) {
  return {
    address: (0, E.fromHex)((0, f.assertNotEmpty)(e.address)),
    pubkey: si((0, f.assertObject)(e.pub_key)),
    votingPower: (0, P.apiToBigInt)((0, f.assertNotEmpty)(e.power))
  };
}
Ie.decodeValidatorGenesis = Rc;
function ny(e) {
  return {
    genesisTime: (0, Jn.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.genesis_time)),
    chainId: (0, f.assertNotEmpty)(e.chain_id),
    consensusParams: Oc(e.consensus_params),
    validators: e.validators ? (0, f.assertArray)(e.validators).map(Rc) : [],
    appHash: (0, E.fromHex)((0, f.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function ii(e) {
  return {
    pubkey: si((0, f.assertObject)(e.pub_key)),
    votingPower: (0, P.apiToBigInt)((0, f.assertNotEmpty)(e.voting_power)),
    address: (0, E.fromHex)((0, f.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, P.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
Ie.decodeValidatorInfo = ii;
function ry(e) {
  return {
    id: (0, E.fromHex)((0, f.assertNotEmpty)(e.id)),
    listenAddr: (0, f.assertNotEmpty)(e.listen_addr),
    network: (0, f.assertNotEmpty)(e.network),
    version: (0, f.assertString)(e.version),
    channels: (0, f.assertNotEmpty)(e.channels),
    moniker: (0, f.assertNotEmpty)(e.moniker),
    other: (0, f.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.app)),
      block: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function oy(e) {
  const t = e.earliest_block_height ? (0, P.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, Jn.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, E.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, E.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, E.fromHex)((0, f.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, E.fromHex)((0, f.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, Jn.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, f.assertBoolean)(e.catching_up)
  };
}
function sy(e) {
  return {
    nodeInfo: ry(e.node_info),
    syncInfo: oy(e.sync_info),
    validatorInfo: ii(e.validator_info)
  };
}
function iy(e) {
  return {
    data: (0, E.fromBase64)((0, f.assertNotEmpty)(e.data)),
    rootHash: (0, E.fromHex)((0, f.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.proof.total)),
      index: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.proof.index)),
      leafHash: (0, E.fromBase64)((0, f.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, f.assertArray)(e.proof.aunts).map(E.fromBase64)
    }
  };
}
function Ic(e) {
  return {
    tx: (0, E.fromBase64)((0, f.assertNotEmpty)(e.tx)),
    result: pn((0, f.assertObject)(e.tx_result)),
    height: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    index: (0, P.apiToSmallInt)((0, f.assertNumber)(e.index)),
    hash: (0, E.fromHex)((0, f.assertNotEmpty)(e.hash)),
    proof: (0, f.may)(iy, e.proof)
  };
}
function ay(e) {
  return {
    totalCount: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.total_count)),
    txs: (0, f.assertArray)(e.txs).map(Ic)
  };
}
function cy(e) {
  const t = (0, E.fromBase64)((0, f.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, Ug.hashTx)(t),
    result: pn(e.result),
    height: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.height))
  };
}
function uy(e) {
  return {
    blockHeight: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.block_height)),
    validators: (0, f.assertArray)(e.validators).map(ii),
    count: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.count)),
    total: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.total))
  };
}
function $c(e) {
  var t;
  return {
    header: qo((0, f.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? Bc((0, f.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, f.assertArray)(e.data.txs).map(E.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function Nc(e) {
  return {
    blockId: Uo(e.block_id),
    block: $c(e.block)
  };
}
function dy(e) {
  return {
    totalCount: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.total_count)),
    blocks: (0, f.assertArray)(e.blocks).map(Nc)
  };
}
function ly(e) {
  return {
    total: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.total)),
    totalBytes: (0, P.apiToSmallInt)((0, f.assertNotEmpty)(e.total_bytes))
  };
}
let my = class xc {
  static decodeAbciInfo(t) {
    return qg((0, f.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return Vg((0, f.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return Nc(t.result);
  }
  static decodeBlockResults(t) {
    return Lg(t.result);
  }
  static decodeBlockSearch(t) {
    return dy(t.result);
  }
  static decodeBlockchain(t) {
    return Qg(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return Zg(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return xc.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return Xg(t.result);
  }
  static decodeCommit(t) {
    return ty(t.result);
  }
  static decodeGenesis(t) {
    return ny((0, f.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return ly(t.result);
  }
  static decodeStatus(t) {
    return sy(t.result);
  }
  static decodeNewBlockEvent(t) {
    return $c(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return qo(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return cy(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return Ic(t.result);
  }
  static decodeTxSearch(t) {
    return ay(t.result);
  }
  static decodeValidators(t) {
    return uy(t.result);
  }
};
Ie.Responses = my;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = xo;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = Ie;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(Ec);
var fy = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), hy = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), py = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && fy(t, e, n);
  return hy(t, e), t;
};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.Comet38Client = void 0;
const gy = st, Sr = nr, O = Ec, W = py(Do);
class xr {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new Sr.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new Sr.HttpClient(t) : new Sr.WebsocketClient(t), await this.detectVersion(n), xr.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new xr(t);
  }
  static async detectVersion(t) {
    const n = (0, gy.createJsonRpcRequest)(W.Method.Status), o = (await t.execute(n)).result;
    if (!o || !o.node_info)
      throw new Error("Unrecognized format for status response");
    const s = o.node_info.version;
    if (typeof s != "string")
      throw new Error("Unrecognized version format: must be string");
    return s;
  }
  /**
   * Use `Tendermint37Client.connect` or `Tendermint37Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: W.Method.AbciInfo };
    return this.doCall(t, O.Params.encodeAbciInfo, O.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: W.Method.AbciQuery };
    return this.doCall(n, O.Params.encodeAbciQuery, O.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: W.Method.Block, params: { height: t } };
    return this.doCall(n, O.Params.encodeBlock, O.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: W.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, O.Params.encodeBlockResults, O.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: W.Method.BlockSearch }, r = await this.doCall(n, O.Params.encodeBlockSearch, O.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((o, s) => o.block.header.height - s.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.blockSearch({ ...t, page: n });
      r.push(...s.blocks), r.length < s.totalCount ? n++ : o = !0;
    }
    return r.sort((s, i) => s.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: W.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, O.Params.encodeBlockchain, O.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: W.Method.BroadcastTxSync };
    return this.doCall(n, O.Params.encodeBroadcastTx, O.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: W.Method.BroadcastTxAsync };
    return this.doCall(n, O.Params.encodeBroadcastTx, O.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: W.Method.BroadcastTxCommit };
    return this.doCall(n, O.Params.encodeBroadcastTx, O.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: W.Method.Commit, params: { height: t } };
    return this.doCall(n, O.Params.encodeCommit, O.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: W.Method.Genesis };
    return this.doCall(t, O.Params.encodeGenesis, O.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: W.Method.Health };
    return this.doCall(t, O.Params.encodeHealth, O.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: W.Method.NumUnconfirmedTxs };
    return this.doCall(t, O.Params.encodeNumUnconfirmedTxs, O.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: W.Method.Status };
    return this.doCall(t, O.Params.encodeStatus, O.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: W.Method.Subscribe,
      query: { type: W.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, O.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: W.Method.Subscribe,
      query: { type: W.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, O.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: W.Method.Subscribe,
      query: {
        type: W.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, O.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: W.Method.Tx };
    return this.doCall(n, O.Params.encodeTx, O.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: W.Method.TxSearch };
    return this.doCall(n, O.Params.encodeTxSearch, O.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.txSearch({ ...t, page: n });
      r.push(...s.txs), r.length < s.totalCount ? n++ : o = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: W.Method.Validators,
      params: t
    };
    return this.doCall(n, O.Params.encodeValidators, O.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, o = !1, s = t;
    for (; !o; ) {
      const i = await this.validators({
        per_page: 50,
        height: s,
        page: r
      });
      n.push(...i.validators), s = s || i.blockHeight, n.length < i.total ? r++ : o = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: s ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const o = n(t), s = await this.client.execute(o);
    return r(s);
  }
  subscribe(t, n) {
    if (!(0, Sr.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = O.Params.encodeSubscribe(t);
    return this.client.listen(r).map((s) => n(s));
  }
}
Mo.Comet38Client = xr;
var Dc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(Dc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = e.Comet38Client = void 0;
  var t = Mo;
  Object.defineProperty(e, "Comet38Client", { enumerable: !0, get: function() {
    return t.Comet38Client;
  } });
  var n = Do;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return n.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return n.SubscriptionEventType;
  } });
  var r = Dc;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return r.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return r.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return r.VoteType;
  } });
})($r);
var Hn = {}, Ho = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const o = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), s = n.raw ? [n.raw] : [];
    return [...o, ...s].join(" AND ");
  }
  e.buildQuery = t;
})(Ho);
var Uc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(Uc);
var Vo = {}, qc = {}, Fo = {}, yy = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), by = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), vy = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && yy(t, e, n);
  return by(t, e), t;
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.Params = void 0;
const ai = N, He = Ae, te = st, ve = R, wy = vy(Ho);
function hs(e) {
  return {
    height: (0, ve.may)(He.smallIntToApi, e.height)
  };
}
function ky(e) {
  return {
    minHeight: (0, ve.may)(He.smallIntToApi, e.minHeight),
    maxHeight: (0, ve.may)(He.smallIntToApi, e.maxHeight)
  };
}
function _y(e) {
  return {
    query: e.query,
    page: (0, ve.may)(He.smallIntToApi, e.page),
    per_page: (0, ve.may)(He.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function Sy(e) {
  return {
    path: (0, ve.assertNotEmpty)(e.path),
    data: (0, ai.toHex)(e.data),
    height: (0, ve.may)(He.smallIntToApi, e.height),
    prove: e.prove
  };
}
function Py(e) {
  return {
    tx: (0, ai.toBase64)((0, ve.assertNotEmpty)(e.tx))
  };
}
function Ay(e) {
  return {
    hash: (0, ai.toBase64)((0, ve.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function Ty(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, ve.may)(He.smallIntToApi, e.page),
    per_page: (0, ve.may)(He.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function Ey(e) {
  return {
    height: (0, ve.may)(He.smallIntToApi, e.height),
    page: (0, ve.may)(He.smallIntToApi, e.page),
    per_page: (0, ve.may)(He.smallIntToApi, e.per_page)
  };
}
let Cy = class {
  static encodeAbciInfo(t) {
    return (0, te.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, te.createJsonRpcRequest)(t.method, Sy(t.params));
  }
  static encodeBlock(t) {
    return (0, te.createJsonRpcRequest)(t.method, hs(t.params));
  }
  static encodeBlockchain(t) {
    return (0, te.createJsonRpcRequest)(t.method, ky(t.params));
  }
  static encodeBlockResults(t) {
    return (0, te.createJsonRpcRequest)(t.method, hs(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, te.createJsonRpcRequest)(t.method, _y(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, te.createJsonRpcRequest)(t.method, Py(t.params));
  }
  static encodeCommit(t) {
    return (0, te.createJsonRpcRequest)(t.method, hs(t.params));
  }
  static encodeGenesis(t) {
    return (0, te.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, te.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, te.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, te.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = wy.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, te.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, te.createJsonRpcRequest)(t.method, Ay(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, te.createJsonRpcRequest)(t.method, Ty(t.params));
  }
  static encodeValidators(t) {
    return (0, te.createJsonRpcRequest)(t.method, Ey(t.params));
  }
};
Fo.Params = Cy;
var $e = {}, gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.hashBlock = gn.hashTx = void 0;
const ci = ke, de = R;
function My(e) {
  return (0, ci.sha256)(e);
}
gn.hashTx = My;
function Oy(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function jy(e) {
  const t = new ci.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function By(e, t) {
  const n = new ci.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function $s(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return jy(e[0]);
    default: {
      const t = Oy(e.length), n = $s(e.slice(0, t)), r = $s(e.slice(t));
      return By(n, r);
    }
  }
}
function Ry(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, de.encodeVersion)(e.version),
    (0, de.encodeString)(e.chainId),
    (0, de.encodeUvarint)(e.height),
    (0, de.encodeTime)(e.time),
    (0, de.encodeBlockId)(e.lastBlockId),
    (0, de.encodeBytes)(e.lastCommitHash),
    (0, de.encodeBytes)(e.dataHash),
    (0, de.encodeBytes)(e.validatorsHash),
    (0, de.encodeBytes)(e.nextValidatorsHash),
    (0, de.encodeBytes)(e.consensusHash),
    (0, de.encodeBytes)(e.appHash),
    (0, de.encodeBytes)(e.lastResultsHash),
    (0, de.encodeBytes)(e.evidenceHash),
    (0, de.encodeBytes)(e.proposerAddress)
  ];
  return $s(t);
}
gn.hashBlock = Ry;
Object.defineProperty($e, "__esModule", { value: !0 });
$e.Responses = $e.decodeValidatorInfo = $e.decodeValidatorGenesis = $e.decodeValidatorUpdate = $e.decodeEvent = void 0;
const S = N, Hc = Z, Gn = se, A = Ae, Iy = ir, l = R, $y = gn;
function Ny(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, l.may)(A.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, l.may)(S.fromBase64, e.last_block_app_hash)
  };
}
function xy(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, S.fromBase64)(t.key),
      data: (0, S.fromBase64)(t.data)
    }))
  };
}
function Dy(e) {
  return {
    key: (0, S.fromBase64)((0, l.assertString)(e.key ?? "")),
    value: (0, S.fromBase64)((0, l.assertString)(e.value ?? "")),
    proof: (0, l.may)(xy, e.proofOps),
    height: (0, l.may)(A.apiToSmallInt, e.height),
    code: (0, l.may)(A.apiToSmallInt, e.code),
    codespace: (0, l.assertString)(e.codespace ?? ""),
    index: (0, l.may)(A.apiToSmallInt, e.index),
    log: e.log,
    info: (0, l.assertString)(e.info ?? "")
  };
}
function Uy(e) {
  return {
    key: (0, S.fromBase64)((0, l.assertNotEmpty)(e.key)),
    value: (0, S.fromBase64)((0, l.assertString)(e.value ?? ""))
  };
}
function qy(e) {
  return (0, l.assertArray)(e).map(Uy);
}
function Vc(e) {
  return {
    type: e.type,
    attributes: e.attributes ? qy(e.attributes) : []
  };
}
$e.decodeEvent = Vc;
function Ns(e) {
  return (0, l.assertArray)(e).map(Vc);
}
function yn(e) {
  return {
    code: (0, A.apiToSmallInt)((0, l.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, l.may)(S.fromBase64, e.data),
    events: e.events ? Ns(e.events) : [],
    gasWanted: (0, A.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, A.apiToBigInt)(e.gas_used ?? "0")
  };
}
function ui(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, Hc.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, S.fromBase64)((0, l.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, S.fromBase64)((0, l.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, S.fromBase64)((0, l.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function Hy(e) {
  return {
    maxBytes: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.max_gas))
  };
}
function Vy(e) {
  return {
    maxAgeNumBlocks: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.max_age_duration))
  };
}
function Fc(e) {
  return {
    block: Hy((0, l.assertObject)(e.block)),
    evidence: Vy((0, l.assertObject)(e.evidence))
  };
}
function Wc(e) {
  return {
    pubkey: ui((0, l.assertObject)(e.pub_key)),
    votingPower: (0, A.apiToBigInt)(e.power ?? "0")
  };
}
$e.decodeValidatorUpdate = Wc;
function Fy(e) {
  return {
    height: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(yn),
    validatorUpdates: (e.validator_updates || []).map(Wc),
    consensusUpdates: (0, l.may)(Fc, e.consensus_param_updates),
    beginBlockEvents: Ns(e.begin_block_events || []),
    endBlockEvents: Ns(e.end_block_events || [])
  };
}
function Wo(e) {
  return {
    hash: (0, S.fromHex)((0, l.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, l.assertNotEmpty)(e.parts.total),
      hash: (0, S.fromHex)((0, l.assertNotEmpty)(e.parts.hash))
    }
  };
}
function Wy(e) {
  return {
    block: (0, A.apiToSmallInt)(e.block),
    app: (0, A.apiToSmallInt)(e.app ?? 0)
  };
}
function Jo(e) {
  return {
    version: Wy(e.version),
    chainId: (0, l.assertNotEmpty)(e.chain_id),
    height: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.height)),
    time: (0, Gn.fromRfc3339WithNanoseconds)((0, l.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? Wo(e.last_block_id) : null,
    lastCommitHash: (0, S.fromHex)((0, l.assertSet)(e.last_commit_hash)),
    dataHash: (0, S.fromHex)((0, l.assertSet)(e.data_hash)),
    validatorsHash: (0, S.fromHex)((0, l.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, S.fromHex)((0, l.assertSet)(e.next_validators_hash)),
    consensusHash: (0, S.fromHex)((0, l.assertSet)(e.consensus_hash)),
    appHash: (0, S.fromHex)((0, l.assertSet)(e.app_hash)),
    lastResultsHash: (0, S.fromHex)((0, l.assertSet)(e.last_results_hash)),
    evidenceHash: (0, S.fromHex)((0, l.assertSet)(e.evidence_hash)),
    proposerAddress: (0, S.fromHex)((0, l.assertNotEmpty)(e.proposer_address))
  };
}
function Jy(e) {
  return {
    blockId: Wo(e.block_id),
    blockSize: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.block_size)),
    header: Jo(e.header),
    numTxs: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.num_txs))
  };
}
function Gy(e) {
  return {
    lastHeight: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.last_height)),
    blockMetas: (0, l.assertArray)(e.block_metas).map(Jy)
  };
}
function Ly(e) {
  return {
    ...yn(e),
    hash: (0, S.fromHex)((0, l.assertNotEmpty)(e.hash))
  };
}
function zy(e) {
  return {
    height: (0, A.apiToSmallInt)(e.height),
    hash: (0, S.fromHex)((0, l.assertNotEmpty)(e.hash)),
    checkTx: yn((0, l.assertObject)(e.check_tx)),
    deliverTx: (0, l.may)(yn, e.deliver_tx)
  };
}
function Ky(e) {
  return (0, Hc.assert)(e in Iy.BlockIdFlag), e;
}
function Qy(e) {
  return {
    blockIdFlag: Ky(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, S.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, Gn.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, S.fromBase64)(e.signature) : void 0
  };
}
function Jc(e) {
  return {
    blockId: Wo((0, l.assertObject)(e.block_id)),
    height: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.height)),
    round: (0, A.apiToSmallInt)(e.round),
    signatures: (0, l.assertArray)(e.signatures).map(Qy)
  };
}
function Zy(e) {
  return {
    canonical: (0, l.assertBoolean)(e.canonical),
    header: Jo(e.signed_header.header),
    commit: Jc(e.signed_header.commit)
  };
}
function Gc(e) {
  return {
    address: (0, S.fromHex)((0, l.assertNotEmpty)(e.address)),
    pubkey: ui((0, l.assertObject)(e.pub_key)),
    votingPower: (0, A.apiToBigInt)((0, l.assertNotEmpty)(e.power))
  };
}
$e.decodeValidatorGenesis = Gc;
function Xy(e) {
  return {
    genesisTime: (0, Gn.fromRfc3339WithNanoseconds)((0, l.assertNotEmpty)(e.genesis_time)),
    chainId: (0, l.assertNotEmpty)(e.chain_id),
    consensusParams: Fc(e.consensus_params),
    validators: e.validators ? (0, l.assertArray)(e.validators).map(Gc) : [],
    appHash: (0, S.fromHex)((0, l.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function di(e) {
  return {
    pubkey: ui((0, l.assertObject)(e.pub_key)),
    votingPower: (0, A.apiToBigInt)((0, l.assertNotEmpty)(e.voting_power)),
    address: (0, S.fromHex)((0, l.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, A.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
$e.decodeValidatorInfo = di;
function Yy(e) {
  return {
    id: (0, S.fromHex)((0, l.assertNotEmpty)(e.id)),
    listenAddr: (0, l.assertNotEmpty)(e.listen_addr),
    network: (0, l.assertNotEmpty)(e.network),
    version: (0, l.assertString)(e.version),
    channels: (0, l.assertNotEmpty)(e.channels),
    moniker: (0, l.assertNotEmpty)(e.moniker),
    other: (0, l.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.protocol_version.app)),
      block: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function eb(e) {
  const t = e.earliest_block_height ? (0, A.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, Gn.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, S.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, S.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, S.fromHex)((0, l.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, S.fromHex)((0, l.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, Gn.fromRfc3339WithNanoseconds)((0, l.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, l.assertBoolean)(e.catching_up)
  };
}
function tb(e) {
  return {
    nodeInfo: Yy(e.node_info),
    syncInfo: eb(e.sync_info),
    validatorInfo: di(e.validator_info)
  };
}
function nb(e) {
  return {
    data: (0, S.fromBase64)((0, l.assertNotEmpty)(e.data)),
    rootHash: (0, S.fromHex)((0, l.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.proof.total)),
      index: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.proof.index)),
      leafHash: (0, S.fromBase64)((0, l.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, l.assertArray)(e.proof.aunts).map(S.fromBase64)
    }
  };
}
function Lc(e) {
  return {
    tx: (0, S.fromBase64)((0, l.assertNotEmpty)(e.tx)),
    result: yn((0, l.assertObject)(e.tx_result)),
    height: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.height)),
    index: (0, A.apiToSmallInt)((0, l.assertNumber)(e.index)),
    hash: (0, S.fromHex)((0, l.assertNotEmpty)(e.hash)),
    proof: (0, l.may)(nb, e.proof)
  };
}
function rb(e) {
  return {
    totalCount: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.total_count)),
    txs: (0, l.assertArray)(e.txs).map(Lc)
  };
}
function ob(e) {
  const t = (0, S.fromBase64)((0, l.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, $y.hashTx)(t),
    result: yn(e.result),
    height: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.height))
  };
}
function sb(e) {
  return {
    blockHeight: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.block_height)),
    validators: (0, l.assertArray)(e.validators).map(di),
    count: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.count)),
    total: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.total))
  };
}
function zc(e) {
  var t;
  return {
    header: Jo((0, l.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? Jc((0, l.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, l.assertArray)(e.data.txs).map(S.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function Kc(e) {
  return {
    blockId: Wo(e.block_id),
    block: zc(e.block)
  };
}
function ib(e) {
  return {
    totalCount: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.total_count)),
    blocks: (0, l.assertArray)(e.blocks).map(Kc)
  };
}
function ab(e) {
  return {
    total: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.total)),
    totalBytes: (0, A.apiToSmallInt)((0, l.assertNotEmpty)(e.total_bytes))
  };
}
let cb = class Qc {
  static decodeAbciInfo(t) {
    return Ny((0, l.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return Dy((0, l.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return Kc(t.result);
  }
  static decodeBlockResults(t) {
    return Fy(t.result);
  }
  static decodeBlockSearch(t) {
    return ib(t.result);
  }
  static decodeBlockchain(t) {
    return Gy(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return Ly(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return Qc.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return zy(t.result);
  }
  static decodeCommit(t) {
    return Zy(t.result);
  }
  static decodeGenesis(t) {
    return Xy((0, l.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return ab(t.result);
  }
  static decodeStatus(t) {
    return tb(t.result);
  }
  static decodeNewBlockEvent(t) {
    return zc(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return Jo(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return ob(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return Lc(t.result);
  }
  static decodeTxSearch(t) {
    return rb(t.result);
  }
  static decodeValidators(t) {
    return sb(t.result);
  }
};
$e.Responses = cb;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = Fo;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = $e;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(qc);
var ub = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), db = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), lb = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && ub(t, e, n);
  return db(t, e), t;
};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.Tendermint34Client = void 0;
const mb = st, Pr = nr, j = qc, J = lb(Ho);
class Dr {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new Pr.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new Pr.HttpClient(t) : new Pr.WebsocketClient(t), await this.detectVersion(n), Dr.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new Dr(t);
  }
  static async detectVersion(t) {
    const n = (0, mb.createJsonRpcRequest)(J.Method.Status), o = (await t.execute(n)).result;
    if (!o || !o.node_info)
      throw new Error("Unrecognized format for status response");
    const s = o.node_info.version;
    if (typeof s != "string")
      throw new Error("Unrecognized version format: must be string");
    return s;
  }
  /**
   * Use `Tendermint34Client.connect` or `Tendermint34Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: J.Method.AbciInfo };
    return this.doCall(t, j.Params.encodeAbciInfo, j.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: J.Method.AbciQuery };
    return this.doCall(n, j.Params.encodeAbciQuery, j.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: J.Method.Block, params: { height: t } };
    return this.doCall(n, j.Params.encodeBlock, j.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: J.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, j.Params.encodeBlockResults, j.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: J.Method.BlockSearch }, r = await this.doCall(n, j.Params.encodeBlockSearch, j.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((o, s) => o.block.header.height - s.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.blockSearch({ ...t, page: n });
      r.push(...s.blocks), r.length < s.totalCount ? n++ : o = !0;
    }
    return r.sort((s, i) => s.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: J.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, j.Params.encodeBlockchain, j.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: J.Method.BroadcastTxSync };
    return this.doCall(n, j.Params.encodeBroadcastTx, j.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: J.Method.BroadcastTxAsync };
    return this.doCall(n, j.Params.encodeBroadcastTx, j.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: J.Method.BroadcastTxCommit };
    return this.doCall(n, j.Params.encodeBroadcastTx, j.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: J.Method.Commit, params: { height: t } };
    return this.doCall(n, j.Params.encodeCommit, j.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: J.Method.Genesis };
    return this.doCall(t, j.Params.encodeGenesis, j.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: J.Method.Health };
    return this.doCall(t, j.Params.encodeHealth, j.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: J.Method.NumUnconfirmedTxs };
    return this.doCall(t, j.Params.encodeNumUnconfirmedTxs, j.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: J.Method.Status };
    return this.doCall(t, j.Params.encodeStatus, j.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: J.Method.Subscribe,
      query: { type: J.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, j.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: J.Method.Subscribe,
      query: { type: J.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, j.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: J.Method.Subscribe,
      query: {
        type: J.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, j.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: J.Method.Tx };
    return this.doCall(n, j.Params.encodeTx, j.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: J.Method.TxSearch };
    return this.doCall(n, j.Params.encodeTxSearch, j.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.txSearch({ ...t, page: n });
      r.push(...s.txs), r.length < s.totalCount ? n++ : o = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: J.Method.Validators,
      params: t
    };
    return this.doCall(n, j.Params.encodeValidators, j.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, o = !1, s = t;
    for (; !o; ) {
      const i = await this.validators({
        per_page: 50,
        height: s,
        page: r
      });
      n.push(...i.validators), s = s || i.blockHeight, n.length < i.total ? r++ : o = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: s ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const o = n(t), s = await this.client.execute(o);
    return r(s);
  }
  subscribe(t, n) {
    if (!(0, Pr.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = j.Params.encodeSubscribe(t);
    return this.client.listen(r).map((s) => n(s));
  }
}
Vo.Tendermint34Client = Dr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Tendermint34Client = e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = void 0;
  var t = Ho;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return t.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return t.SubscriptionEventType;
  } });
  var n = Uc;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return n.VoteType;
  } });
  var r = Vo;
  Object.defineProperty(e, "Tendermint34Client", { enumerable: !0, get: function() {
    return r.Tendermint34Client;
  } });
})(Hn);
var Ur = {}, Go = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const o = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), s = n.raw ? [n.raw] : [];
    return [...o, ...s].join(" AND ");
  }
  e.buildQuery = t;
})(Go);
var Zc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(Zc);
var Lo = {}, Xc = {}, zo = {}, $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.encodeBlockId = $.encodeVersion = $.encodeBytes = $.encodeTime = $.encodeUvarint = $.encodeString = $.dictionaryToStringMap = $.may = $.assertNotEmpty = $.assertObject = $.assertArray = $.assertNumber = $.assertString = $.assertBoolean = $.assertSet = void 0;
const fb = N;
function $t(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
$.assertSet = $t;
function hb(e) {
  if ($t(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
$.assertBoolean = hb;
function pb(e) {
  if ($t(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
$.assertString = pb;
function gb(e) {
  if ($t(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
$.assertNumber = gb;
function yb(e) {
  if ($t(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
$.assertArray = yb;
function bb(e) {
  if ($t(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
$.assertObject = bb;
function vb(e) {
  if ($t(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
$.assertNotEmpty = vb;
function wb(e, t) {
  return t == null ? void 0 : e(t);
}
$.may = wb;
function kb(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
$.dictionaryToStringMap = kb;
function _b(e) {
  const t = (0, fb.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
$.encodeString = _b;
function bn(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...bn(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
$.encodeUvarint = bn;
function Sb(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...bn(n)] : new Uint8Array(), o = (e.nanoseconds || 0) + t % 1e3 * 1e6, s = o ? [16, ...bn(o)] : new Uint8Array();
  return Uint8Array.from([...r, ...s]);
}
$.encodeTime = Sb;
function Pb(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
$.encodeBytes = Pb;
function Ab(e) {
  const t = e.block ? Uint8Array.from([8, ...bn(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...bn(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
$.encodeVersion = Ab;
function Tb(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
$.encodeBlockId = Tb;
var Eb = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Cb = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Mb = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Eb(t, e, n);
  return Cb(t, e), t;
};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.Params = void 0;
const li = N, Ve = Ae, ne = st, we = $, Ob = Mb(Go);
function ps(e) {
  return {
    height: (0, we.may)(Ve.smallIntToApi, e.height)
  };
}
function jb(e) {
  return {
    minHeight: (0, we.may)(Ve.smallIntToApi, e.minHeight),
    maxHeight: (0, we.may)(Ve.smallIntToApi, e.maxHeight)
  };
}
function Bb(e) {
  return {
    query: e.query,
    page: (0, we.may)(Ve.smallIntToApi, e.page),
    per_page: (0, we.may)(Ve.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function Rb(e) {
  return {
    path: (0, we.assertNotEmpty)(e.path),
    data: (0, li.toHex)(e.data),
    height: (0, we.may)(Ve.smallIntToApi, e.height),
    prove: e.prove
  };
}
function Ib(e) {
  return {
    tx: (0, li.toBase64)((0, we.assertNotEmpty)(e.tx))
  };
}
function $b(e) {
  return {
    hash: (0, li.toBase64)((0, we.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function Nb(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, we.may)(Ve.smallIntToApi, e.page),
    per_page: (0, we.may)(Ve.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function xb(e) {
  return {
    height: (0, we.may)(Ve.smallIntToApi, e.height),
    page: (0, we.may)(Ve.smallIntToApi, e.page),
    per_page: (0, we.may)(Ve.smallIntToApi, e.per_page)
  };
}
class Db {
  static encodeAbciInfo(t) {
    return (0, ne.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, ne.createJsonRpcRequest)(t.method, Rb(t.params));
  }
  static encodeBlock(t) {
    return (0, ne.createJsonRpcRequest)(t.method, ps(t.params));
  }
  static encodeBlockchain(t) {
    return (0, ne.createJsonRpcRequest)(t.method, jb(t.params));
  }
  static encodeBlockResults(t) {
    return (0, ne.createJsonRpcRequest)(t.method, ps(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, ne.createJsonRpcRequest)(t.method, Bb(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, ne.createJsonRpcRequest)(t.method, Ib(t.params));
  }
  static encodeCommit(t) {
    return (0, ne.createJsonRpcRequest)(t.method, ps(t.params));
  }
  static encodeGenesis(t) {
    return (0, ne.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, ne.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, ne.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, ne.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = Ob.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, ne.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, ne.createJsonRpcRequest)(t.method, $b(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, ne.createJsonRpcRequest)(t.method, Nb(t.params));
  }
  static encodeValidators(t) {
    return (0, ne.createJsonRpcRequest)(t.method, xb(t.params));
  }
}
zo.Params = Db;
var Ne = {}, vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.hashBlock = vn.hashTx = void 0;
const mi = ke, le = $;
function Ub(e) {
  return (0, mi.sha256)(e);
}
vn.hashTx = Ub;
function qb(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function Hb(e) {
  const t = new mi.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function Vb(e, t) {
  const n = new mi.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function xs(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return Hb(e[0]);
    default: {
      const t = qb(e.length), n = xs(e.slice(0, t)), r = xs(e.slice(t));
      return Vb(n, r);
    }
  }
}
function Fb(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, le.encodeVersion)(e.version),
    (0, le.encodeString)(e.chainId),
    (0, le.encodeUvarint)(e.height),
    (0, le.encodeTime)(e.time),
    (0, le.encodeBlockId)(e.lastBlockId),
    (0, le.encodeBytes)(e.lastCommitHash),
    (0, le.encodeBytes)(e.dataHash),
    (0, le.encodeBytes)(e.validatorsHash),
    (0, le.encodeBytes)(e.nextValidatorsHash),
    (0, le.encodeBytes)(e.consensusHash),
    (0, le.encodeBytes)(e.appHash),
    (0, le.encodeBytes)(e.lastResultsHash),
    (0, le.encodeBytes)(e.evidenceHash),
    (0, le.encodeBytes)(e.proposerAddress)
  ];
  return xs(t);
}
vn.hashBlock = Fb;
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.Responses = Ne.decodeValidatorInfo = Ne.decodeValidatorGenesis = Ne.decodeValidatorUpdate = Ne.decodeEvent = void 0;
const C = N, Yc = Z, Ln = se, T = Ae, Wb = ir, m = $, Jb = vn;
function Gb(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, m.may)(T.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, m.may)(C.fromBase64, e.last_block_app_hash)
  };
}
function Lb(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, C.fromBase64)(t.key),
      data: (0, C.fromBase64)(t.data)
    }))
  };
}
function zb(e) {
  return {
    key: (0, C.fromBase64)((0, m.assertString)(e.key ?? "")),
    value: (0, C.fromBase64)((0, m.assertString)(e.value ?? "")),
    proof: (0, m.may)(Lb, e.proofOps),
    height: (0, m.may)(T.apiToSmallInt, e.height),
    code: (0, m.may)(T.apiToSmallInt, e.code),
    codespace: (0, m.assertString)(e.codespace ?? ""),
    index: (0, m.may)(T.apiToSmallInt, e.index),
    log: e.log,
    info: (0, m.assertString)(e.info ?? "")
  };
}
function Kb(e) {
  return {
    key: (0, m.assertNotEmpty)(e.key),
    value: e.value ?? ""
  };
}
function Qb(e) {
  return (0, m.assertArray)(e).map(Kb);
}
function eu(e) {
  return {
    type: e.type,
    attributes: e.attributes ? Qb(e.attributes) : []
  };
}
Ne.decodeEvent = eu;
function Ds(e) {
  return (0, m.assertArray)(e).map(eu);
}
function wn(e) {
  return {
    code: (0, T.apiToSmallInt)((0, m.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, m.may)(C.fromBase64, e.data),
    events: e.events ? Ds(e.events) : [],
    gasWanted: (0, T.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, T.apiToBigInt)(e.gas_used ?? "0")
  };
}
function fi(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, Yc.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, C.fromBase64)((0, m.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, C.fromBase64)((0, m.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, C.fromBase64)((0, m.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function Zb(e) {
  return {
    maxBytes: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.max_gas))
  };
}
function Xb(e) {
  return {
    maxAgeNumBlocks: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.max_age_duration))
  };
}
function tu(e) {
  return {
    block: Zb((0, m.assertObject)(e.block)),
    evidence: Xb((0, m.assertObject)(e.evidence))
  };
}
function nu(e) {
  return {
    pubkey: fi((0, m.assertObject)(e.pub_key)),
    votingPower: (0, T.apiToBigInt)(e.power ?? "0")
  };
}
Ne.decodeValidatorUpdate = nu;
function Yb(e) {
  return {
    height: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(wn),
    validatorUpdates: (e.validator_updates || []).map(nu),
    consensusUpdates: (0, m.may)(tu, e.consensus_param_updates),
    beginBlockEvents: Ds(e.begin_block_events || []),
    endBlockEvents: Ds(e.end_block_events || [])
  };
}
function Ko(e) {
  return {
    hash: (0, C.fromHex)((0, m.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, m.assertNotEmpty)(e.parts.total),
      hash: (0, C.fromHex)((0, m.assertNotEmpty)(e.parts.hash))
    }
  };
}
function ev(e) {
  return {
    block: (0, T.apiToSmallInt)(e.block),
    app: (0, T.apiToSmallInt)(e.app ?? 0)
  };
}
function Qo(e) {
  return {
    version: ev(e.version),
    chainId: (0, m.assertNotEmpty)(e.chain_id),
    height: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.height)),
    time: (0, Ln.fromRfc3339WithNanoseconds)((0, m.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? Ko(e.last_block_id) : null,
    lastCommitHash: (0, C.fromHex)((0, m.assertSet)(e.last_commit_hash)),
    dataHash: (0, C.fromHex)((0, m.assertSet)(e.data_hash)),
    validatorsHash: (0, C.fromHex)((0, m.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, C.fromHex)((0, m.assertSet)(e.next_validators_hash)),
    consensusHash: (0, C.fromHex)((0, m.assertSet)(e.consensus_hash)),
    appHash: (0, C.fromHex)((0, m.assertSet)(e.app_hash)),
    lastResultsHash: (0, C.fromHex)((0, m.assertSet)(e.last_results_hash)),
    evidenceHash: (0, C.fromHex)((0, m.assertSet)(e.evidence_hash)),
    proposerAddress: (0, C.fromHex)((0, m.assertNotEmpty)(e.proposer_address))
  };
}
function tv(e) {
  return {
    blockId: Ko(e.block_id),
    blockSize: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.block_size)),
    header: Qo(e.header),
    numTxs: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.num_txs))
  };
}
function nv(e) {
  return {
    lastHeight: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.last_height)),
    blockMetas: (0, m.assertArray)(e.block_metas).map(tv)
  };
}
function rv(e) {
  return {
    ...wn(e),
    hash: (0, C.fromHex)((0, m.assertNotEmpty)(e.hash))
  };
}
function ov(e) {
  return {
    height: (0, T.apiToSmallInt)(e.height),
    hash: (0, C.fromHex)((0, m.assertNotEmpty)(e.hash)),
    checkTx: wn((0, m.assertObject)(e.check_tx)),
    deliverTx: (0, m.may)(wn, e.deliver_tx)
  };
}
function sv(e) {
  return (0, Yc.assert)(e in Wb.BlockIdFlag), e;
}
function iv(e) {
  return {
    blockIdFlag: sv(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, C.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, Ln.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, C.fromBase64)(e.signature) : void 0
  };
}
function ru(e) {
  return {
    blockId: Ko((0, m.assertObject)(e.block_id)),
    height: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.height)),
    round: (0, T.apiToSmallInt)(e.round),
    signatures: (0, m.assertArray)(e.signatures).map(iv)
  };
}
function av(e) {
  return {
    canonical: (0, m.assertBoolean)(e.canonical),
    header: Qo(e.signed_header.header),
    commit: ru(e.signed_header.commit)
  };
}
function ou(e) {
  return {
    address: (0, C.fromHex)((0, m.assertNotEmpty)(e.address)),
    pubkey: fi((0, m.assertObject)(e.pub_key)),
    votingPower: (0, T.apiToBigInt)((0, m.assertNotEmpty)(e.power))
  };
}
Ne.decodeValidatorGenesis = ou;
function cv(e) {
  return {
    genesisTime: (0, Ln.fromRfc3339WithNanoseconds)((0, m.assertNotEmpty)(e.genesis_time)),
    chainId: (0, m.assertNotEmpty)(e.chain_id),
    consensusParams: tu(e.consensus_params),
    validators: e.validators ? (0, m.assertArray)(e.validators).map(ou) : [],
    appHash: (0, C.fromHex)((0, m.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function hi(e) {
  return {
    pubkey: fi((0, m.assertObject)(e.pub_key)),
    votingPower: (0, T.apiToBigInt)((0, m.assertNotEmpty)(e.voting_power)),
    address: (0, C.fromHex)((0, m.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, T.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
Ne.decodeValidatorInfo = hi;
function uv(e) {
  return {
    id: (0, C.fromHex)((0, m.assertNotEmpty)(e.id)),
    listenAddr: (0, m.assertNotEmpty)(e.listen_addr),
    network: (0, m.assertNotEmpty)(e.network),
    version: (0, m.assertString)(e.version),
    channels: (0, m.assertNotEmpty)(e.channels),
    moniker: (0, m.assertNotEmpty)(e.moniker),
    other: (0, m.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.protocol_version.app)),
      block: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function dv(e) {
  const t = e.earliest_block_height ? (0, T.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, Ln.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, C.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, C.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, C.fromHex)((0, m.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, C.fromHex)((0, m.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, Ln.fromRfc3339WithNanoseconds)((0, m.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, m.assertBoolean)(e.catching_up)
  };
}
function lv(e) {
  return {
    nodeInfo: uv(e.node_info),
    syncInfo: dv(e.sync_info),
    validatorInfo: hi(e.validator_info)
  };
}
function mv(e) {
  return {
    data: (0, C.fromBase64)((0, m.assertNotEmpty)(e.data)),
    rootHash: (0, C.fromHex)((0, m.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.proof.total)),
      index: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.proof.index)),
      leafHash: (0, C.fromBase64)((0, m.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, m.assertArray)(e.proof.aunts).map(C.fromBase64)
    }
  };
}
function su(e) {
  return {
    tx: (0, C.fromBase64)((0, m.assertNotEmpty)(e.tx)),
    result: wn((0, m.assertObject)(e.tx_result)),
    height: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.height)),
    index: (0, T.apiToSmallInt)((0, m.assertNumber)(e.index)),
    hash: (0, C.fromHex)((0, m.assertNotEmpty)(e.hash)),
    proof: (0, m.may)(mv, e.proof)
  };
}
function fv(e) {
  return {
    totalCount: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.total_count)),
    txs: (0, m.assertArray)(e.txs).map(su)
  };
}
function hv(e) {
  const t = (0, C.fromBase64)((0, m.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, Jb.hashTx)(t),
    result: wn(e.result),
    height: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.height))
  };
}
function pv(e) {
  return {
    blockHeight: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.block_height)),
    validators: (0, m.assertArray)(e.validators).map(hi),
    count: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.count)),
    total: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.total))
  };
}
function iu(e) {
  var t;
  return {
    header: Qo((0, m.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? ru((0, m.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, m.assertArray)(e.data.txs).map(C.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function au(e) {
  return {
    blockId: Ko(e.block_id),
    block: iu(e.block)
  };
}
function gv(e) {
  return {
    totalCount: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.total_count)),
    blocks: (0, m.assertArray)(e.blocks).map(au)
  };
}
function yv(e) {
  return {
    total: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.total)),
    totalBytes: (0, T.apiToSmallInt)((0, m.assertNotEmpty)(e.total_bytes))
  };
}
class pi {
  static decodeAbciInfo(t) {
    return Gb((0, m.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return zb((0, m.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return au(t.result);
  }
  static decodeBlockResults(t) {
    return Yb(t.result);
  }
  static decodeBlockSearch(t) {
    return gv(t.result);
  }
  static decodeBlockchain(t) {
    return nv(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return rv(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return pi.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return ov(t.result);
  }
  static decodeCommit(t) {
    return av(t.result);
  }
  static decodeGenesis(t) {
    return cv((0, m.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return yv(t.result);
  }
  static decodeStatus(t) {
    return lv(t.result);
  }
  static decodeNewBlockEvent(t) {
    return iu(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return Qo(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return hv(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return su(t.result);
  }
  static decodeTxSearch(t) {
    return fv(t.result);
  }
  static decodeValidators(t) {
    return pv(t.result);
  }
}
Ne.Responses = pi;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = zo;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = Ne;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(Xc);
var bv = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), vv = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), wv = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && bv(t, e, n);
  return vv(t, e), t;
};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.Tendermint37Client = void 0;
const kv = st, Ar = nr, B = Xc, G = wv(Go);
class qr {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new Ar.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new Ar.HttpClient(t) : new Ar.WebsocketClient(t), await this.detectVersion(n), qr.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new qr(t);
  }
  static async detectVersion(t) {
    const n = (0, kv.createJsonRpcRequest)(G.Method.Status), o = (await t.execute(n)).result;
    if (!o || !o.node_info)
      throw new Error("Unrecognized format for status response");
    const s = o.node_info.version;
    if (typeof s != "string")
      throw new Error("Unrecognized version format: must be string");
    return s;
  }
  /**
   * Use `Tendermint37Client.connect` or `Tendermint37Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: G.Method.AbciInfo };
    return this.doCall(t, B.Params.encodeAbciInfo, B.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: G.Method.AbciQuery };
    return this.doCall(n, B.Params.encodeAbciQuery, B.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: G.Method.Block, params: { height: t } };
    return this.doCall(n, B.Params.encodeBlock, B.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: G.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, B.Params.encodeBlockResults, B.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: G.Method.BlockSearch }, r = await this.doCall(n, B.Params.encodeBlockSearch, B.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((o, s) => o.block.header.height - s.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.blockSearch({ ...t, page: n });
      r.push(...s.blocks), r.length < s.totalCount ? n++ : o = !0;
    }
    return r.sort((s, i) => s.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: G.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, B.Params.encodeBlockchain, B.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: G.Method.BroadcastTxSync };
    return this.doCall(n, B.Params.encodeBroadcastTx, B.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: G.Method.BroadcastTxAsync };
    return this.doCall(n, B.Params.encodeBroadcastTx, B.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: G.Method.BroadcastTxCommit };
    return this.doCall(n, B.Params.encodeBroadcastTx, B.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: G.Method.Commit, params: { height: t } };
    return this.doCall(n, B.Params.encodeCommit, B.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: G.Method.Genesis };
    return this.doCall(t, B.Params.encodeGenesis, B.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: G.Method.Health };
    return this.doCall(t, B.Params.encodeHealth, B.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: G.Method.NumUnconfirmedTxs };
    return this.doCall(t, B.Params.encodeNumUnconfirmedTxs, B.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: G.Method.Status };
    return this.doCall(t, B.Params.encodeStatus, B.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: G.Method.Subscribe,
      query: { type: G.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, B.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: G.Method.Subscribe,
      query: { type: G.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, B.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: G.Method.Subscribe,
      query: {
        type: G.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, B.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: G.Method.Tx };
    return this.doCall(n, B.Params.encodeTx, B.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: G.Method.TxSearch };
    return this.doCall(n, B.Params.encodeTxSearch, B.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let o = !1;
    for (; !o; ) {
      const s = await this.txSearch({ ...t, page: n });
      r.push(...s.txs), r.length < s.totalCount ? n++ : o = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: G.Method.Validators,
      params: t
    };
    return this.doCall(n, B.Params.encodeValidators, B.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, o = !1, s = t;
    for (; !o; ) {
      const i = await this.validators({
        per_page: 50,
        height: s,
        page: r
      });
      n.push(...i.validators), s = s || i.blockHeight, n.length < i.total ? r++ : o = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: s ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const o = n(t), s = await this.client.execute(o);
    return r(s);
  }
  subscribe(t, n) {
    if (!(0, Ar.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = B.Params.encodeSubscribe(t);
    return this.client.listen(r).map((s) => n(s));
  }
}
Lo.Tendermint37Client = qr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Tendermint37Client = e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = void 0;
  var t = Go;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return t.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return t.SubscriptionEventType;
  } });
  var n = Zc;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return n.VoteType;
  } });
  var r = Lo;
  Object.defineProperty(e, "Tendermint37Client", { enumerable: !0, get: function() {
    return r.Tendermint37Client;
  } });
})(Ur);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.connectComet = Ze.isComet38Client = Ze.isTendermint37Client = Ze.isTendermint34Client = void 0;
const cu = $r, uu = Hn, du = Ur;
function _v(e) {
  return e instanceof uu.Tendermint34Client;
}
Ze.isTendermint34Client = _v;
function Sv(e) {
  return e instanceof du.Tendermint37Client;
}
Ze.isTendermint37Client = Sv;
function Pv(e) {
  return e instanceof cu.Comet38Client;
}
Ze.isComet38Client = Pv;
async function Av(e) {
  let t;
  const n = await du.Tendermint37Client.connect(e), r = (await n.status()).nodeInfo.version;
  return r.startsWith("0.37.") ? t = n : r.startsWith("0.38.") ? (n.disconnect(), t = await cu.Comet38Client.connect(e)) : (n.disconnect(), t = await uu.Tendermint34Client.connect(e)), t;
}
Ze.connectComet = Av;
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(k, V, y, p) {
    p === void 0 && (p = y);
    var v = Object.getOwnPropertyDescriptor(V, y);
    (!v || ("get" in v ? !V.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return V[y];
    } }), Object.defineProperty(k, p, v);
  } : function(k, V, y, p) {
    p === void 0 && (p = y), k[p] = V[y];
  }), n = h && h.__setModuleDefault || (Object.create ? function(k, V) {
    Object.defineProperty(k, "default", { enumerable: !0, value: V });
  } : function(k, V) {
    k.default = V;
  }), r = h && h.__importStar || function(k) {
    if (k && k.__esModule)
      return k;
    var V = {};
    if (k != null)
      for (var y in k)
        y !== "default" && Object.prototype.hasOwnProperty.call(k, y) && t(V, k, y);
    return n(V, k), V;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.BlockIdFlag = e.isTendermint37Client = e.isTendermint34Client = e.isComet38Client = e.connectComet = e.Tendermint37Client = e.tendermint37 = e.Tendermint34Client = e.tendermint34 = e.VoteType = e.SubscriptionEventType = e.Method = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.WebsocketClient = e.HttpClient = e.HttpBatchClient = e.Comet38Client = e.comet38 = e.toSeconds = e.toRfc3339WithNanoseconds = e.fromSeconds = e.fromRfc3339WithNanoseconds = e.DateTime = e.rawSecp256k1PubkeyToRawAddress = e.rawEd25519PubkeyToRawAddress = e.pubkeyToRawAddress = e.pubkeyToAddress = void 0;
  var o = Qe;
  Object.defineProperty(e, "pubkeyToAddress", { enumerable: !0, get: function() {
    return o.pubkeyToAddress;
  } }), Object.defineProperty(e, "pubkeyToRawAddress", { enumerable: !0, get: function() {
    return o.pubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawEd25519PubkeyToRawAddress", { enumerable: !0, get: function() {
    return o.rawEd25519PubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawSecp256k1PubkeyToRawAddress", { enumerable: !0, get: function() {
    return o.rawSecp256k1PubkeyToRawAddress;
  } });
  var s = se;
  Object.defineProperty(e, "DateTime", { enumerable: !0, get: function() {
    return s.DateTime;
  } }), Object.defineProperty(e, "fromRfc3339WithNanoseconds", { enumerable: !0, get: function() {
    return s.fromRfc3339WithNanoseconds;
  } }), Object.defineProperty(e, "fromSeconds", { enumerable: !0, get: function() {
    return s.fromSeconds;
  } }), Object.defineProperty(e, "toRfc3339WithNanoseconds", { enumerable: !0, get: function() {
    return s.toRfc3339WithNanoseconds;
  } }), Object.defineProperty(e, "toSeconds", { enumerable: !0, get: function() {
    return s.toSeconds;
  } }), e.comet38 = r($r);
  var i = $r;
  Object.defineProperty(e, "Comet38Client", { enumerable: !0, get: function() {
    return i.Comet38Client;
  } });
  var c = nr;
  Object.defineProperty(e, "HttpBatchClient", { enumerable: !0, get: function() {
    return c.HttpBatchClient;
  } }), Object.defineProperty(e, "HttpClient", { enumerable: !0, get: function() {
    return c.HttpClient;
  } }), Object.defineProperty(e, "WebsocketClient", { enumerable: !0, get: function() {
    return c.WebsocketClient;
  } });
  var a = Hn;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return a.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return a.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return a.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return a.SubscriptionEventType;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return a.VoteType;
  } }), e.tendermint34 = r(Hn);
  var u = Hn;
  Object.defineProperty(e, "Tendermint34Client", { enumerable: !0, get: function() {
    return u.Tendermint34Client;
  } }), e.tendermint37 = r(Ur);
  var d = Ur;
  Object.defineProperty(e, "Tendermint37Client", { enumerable: !0, get: function() {
    return d.Tendermint37Client;
  } });
  var g = Ze;
  Object.defineProperty(e, "connectComet", { enumerable: !0, get: function() {
    return g.connectComet;
  } }), Object.defineProperty(e, "isComet38Client", { enumerable: !0, get: function() {
    return g.isComet38Client;
  } }), Object.defineProperty(e, "isTendermint34Client", { enumerable: !0, get: function() {
    return g.isTendermint34Client;
  } }), Object.defineProperty(e, "isTendermint37Client", { enumerable: !0, get: function() {
    return g.isTendermint37Client;
  } });
  var M = ir;
  Object.defineProperty(e, "BlockIdFlag", { enumerable: !0, get: function() {
    return M.BlockIdFlag;
  } });
})(Ys);
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.StargateClient = X.BroadcastTxError = X.assertIsDeliverTxFailure = X.assertIsDeliverTxSuccess = X.isDeliverTxSuccess = X.isDeliverTxFailure = X.TimeoutError = void 0;
const Tv = ot, gs = N, ua = Y, da = Ys, la = Z, Ev = ad, Cv = zn, Mv = Yn, Tr = Wn, Ov = ie, jv = tr;
class lu extends Error {
  constructor(t, n) {
    super(t), this.txId = n;
  }
}
X.TimeoutError = lu;
function gi(e) {
  return !!e.code;
}
X.isDeliverTxFailure = gi;
function mu(e) {
  return !gi(e);
}
X.isDeliverTxSuccess = mu;
function Bv(e) {
  if (gi(e))
    throw new Error(`Error when broadcasting tx ${e.transactionHash} at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`);
}
X.assertIsDeliverTxSuccess = Bv;
function Rv(e) {
  if (mu(e))
    throw new Error(`Transaction ${e.transactionHash} did not fail at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`);
}
X.assertIsDeliverTxFailure = Rv;
class fu extends Error {
  constructor(t, n, r) {
    super(`Broadcasting transaction failed with code ${t} (codespace: ${n}). Log: ${r}`), this.code = t, this.codespace = n, this.log = r;
  }
}
X.BroadcastTxError = fu;
class Hr {
  /**
   * Creates an instance by connecting to the given CometBFT RPC endpoint.
   *
   * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
   * To set the Comet client explicitly, use `create`.
   */
  static async connect(t, n = {}) {
    const r = await (0, da.connectComet)(t);
    return Hr.create(r, n);
  }
  /**
   * Creates an instance from a manually created Comet client.
   * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
   */
  static async create(t, n = {}) {
    return new Hr(t, n);
  }
  constructor(t, n) {
    t && (this.cometClient = t, this.queryClient = Ov.QueryClient.withExtensions(t, Tr.setupAuthExtension, Tr.setupBankExtension, Tr.setupStakingExtension, Tr.setupTxExtension));
    const { accountParser: r = Cv.accountFromAny } = n;
    this.accountParser = r;
  }
  getCometClient() {
    return this.cometClient;
  }
  forceGetCometClient() {
    if (!this.cometClient)
      throw new Error("Comet client not available. You cannot use online functionality in offline mode.");
    return this.cometClient;
  }
  getQueryClient() {
    return this.queryClient;
  }
  forceGetQueryClient() {
    if (!this.queryClient)
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    return this.queryClient;
  }
  async getChainId() {
    if (!this.chainId) {
      const n = (await this.forceGetCometClient().status()).nodeInfo.network;
      if (!n)
        throw new Error("Chain ID must not be empty");
      this.chainId = n;
    }
    return this.chainId;
  }
  async getHeight() {
    return (await this.forceGetCometClient().status()).syncInfo.latestBlockHeight;
  }
  async getAccount(t) {
    try {
      const n = await this.forceGetQueryClient().auth.account(t);
      return n ? this.accountParser(n) : null;
    } catch (n) {
      if (/rpc error: code = NotFound/i.test(n.toString()))
        return null;
      throw n;
    }
  }
  async getSequence(t) {
    const n = await this.getAccount(t);
    if (!n)
      throw new Error(`Account '${t}' does not exist on chain. Send some tokens there before trying to query sequence.`);
    return {
      accountNumber: n.accountNumber,
      sequence: n.sequence
    };
  }
  async getBlock(t) {
    const n = await this.forceGetCometClient().block(t);
    return {
      id: (0, gs.toHex)(n.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new ua.Uint53(n.block.header.version.block).toString(),
          app: new ua.Uint53(n.block.header.version.app).toString()
        },
        height: n.block.header.height,
        chainId: n.block.header.chainId,
        time: (0, da.toRfc3339WithNanoseconds)(n.block.header.time)
      },
      txs: n.block.txs
    };
  }
  async getBalance(t, n) {
    return this.forceGetQueryClient().bank.balance(t, n);
  }
  /**
   * Queries all balances for all denoms that belong to this address.
   *
   * Uses the grpc queries (which iterates over the store internally), and we cannot get
   * proofs from such a method.
   */
  async getAllBalances(t) {
    return this.forceGetQueryClient().bank.allBalances(t);
  }
  async getBalanceStaked(t) {
    const n = [];
    let r;
    do {
      const { delegationResponses: s, pagination: i } = await this.forceGetQueryClient().staking.delegatorDelegations(t, r), c = s || [];
      n.push(...c), r = i == null ? void 0 : i.nextKey;
    } while (r !== void 0 && r.length !== 0);
    return n.reduce((s, i) => ((0, la.assert)(i.balance), s !== null ? (0, Tv.addCoins)(s, i.balance) : i.balance), null);
  }
  async getDelegation(t, n) {
    var o;
    let r;
    try {
      r = (o = (await this.forceGetQueryClient().staking.delegation(t, n)).delegationResponse) == null ? void 0 : o.balance;
    } catch (s) {
      if (!s.toString().includes("key not found"))
        throw s;
    }
    return r || null;
  }
  async getTx(t) {
    return (await this.txsQuery(`tx.hash='${t}'`))[0] ?? null;
  }
  async searchTx(t) {
    let n;
    if (typeof t == "string")
      n = t;
    else if ((0, jv.isSearchTxQueryArray)(t))
      n = t.map((r) => typeof r.value == "string" ? `${r.key}='${r.value}'` : `${r.key}=${r.value}`).join(" AND ");
    else
      throw new Error("Got unsupported query type. See CosmJS 0.31 CHANGELOG for API breaking changes here.");
    return this.txsQuery(n);
  }
  disconnect() {
    this.cometClient && this.cometClient.disconnect();
  }
  /**
   * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
   *
   * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
   * usually needs to check for execution success or failure.
   */
  async broadcastTx(t, n = 6e4, r = 3e3) {
    let o = !1;
    const s = setTimeout(() => {
      o = !0;
    }, n), i = async (a) => {
      if (o)
        throw new lu(`Transaction with ID ${a} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${n / 1e3} seconds.`, a);
      await (0, la.sleep)(r);
      const u = await this.getTx(a);
      return u ? {
        code: u.code,
        height: u.height,
        txIndex: u.txIndex,
        events: u.events,
        rawLog: u.rawLog,
        transactionHash: a,
        msgResponses: u.msgResponses,
        gasUsed: u.gasUsed,
        gasWanted: u.gasWanted
      } : i(a);
    }, c = await this.broadcastTxSync(t);
    return new Promise((a, u) => i(c).then((d) => {
      clearTimeout(s), a(d);
    }, (d) => {
      clearTimeout(s), u(d);
    }));
  }
  /**
   * Broadcasts a signed transaction to the network without monitoring it.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is broadcasted, a `string` containing the hash of the transaction is returned. The caller then
   * usually needs to check if the transaction was included in a block and was successful.
   *
   * @returns Returns the hash of the transaction
   */
  async broadcastTxSync(t) {
    const n = await this.forceGetCometClient().broadcastTxSync({ tx: t });
    return n.code ? Promise.reject(new fu(n.code, n.codespace ?? "", n.log)) : (0, gs.toHex)(n.hash).toUpperCase();
  }
  async txsQuery(t) {
    return (await this.forceGetCometClient().txSearchAll({ query: t })).txs.map((r) => {
      const o = Ev.TxMsgData.decode(r.result.data ?? new Uint8Array());
      return {
        height: r.height,
        txIndex: r.index,
        hash: (0, gs.toHex)(r.hash).toUpperCase(),
        code: r.result.code,
        events: r.result.events.map(Mv.fromTendermintEvent),
        rawLog: r.result.log || "",
        tx: r.tx,
        msgResponses: o.msgResponses,
        gasUsed: r.result.gasUsed,
        gasWanted: r.result.gasWanted
      };
    });
  }
}
X.StargateClient = Hr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SigningStargateClient = e.createDefaultAminoConverters = e.defaultRegistryTypes = void 0;
  const t = ot, n = N, r = Y, o = vt, s = Ys, i = Z, c = ga, a = ya, u = ba, d = Fr, g = jt, M = Wr, k = Xn, V = Ot, y = Wn, p = Wn, v = X;
  e.defaultRegistryTypes = [
    ["/cosmos.base.v1beta1.Coin", c.Coin],
    ...y.authzTypes,
    ...y.bankTypes,
    ...y.distributionTypes,
    ...y.feegrantTypes,
    ...y.govTypes,
    ...y.groupTypes,
    ...y.stakingTypes,
    ...y.ibcTypes,
    ...y.vestingTypes
  ];
  function U() {
    return {
      ...(0, p.createAuthzAminoConverters)(),
      ...(0, p.createBankAminoConverters)(),
      ...(0, p.createDistributionAminoConverters)(),
      ...(0, p.createGovAminoConverters)(),
      ...(0, p.createStakingAminoConverters)(),
      ...(0, p.createIbcAminoConverters)(),
      ...(0, p.createFeegrantAminoConverters)(),
      ...(0, p.createVestingAminoConverters)()
    };
  }
  e.createDefaultAminoConverters = U;
  class x extends v.StargateClient {
    /**
     * Creates an instance by connecting to the given CometBFT RPC endpoint.
     *
     * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
     * To set the Comet client explicitly, use `createWithSigner`.
     */
    static async connectWithSigner(b, _, w = {}) {
      const D = await (0, s.connectComet)(b);
      return x.createWithSigner(D, _, w);
    }
    /**
     * Creates an instance from a manually created Comet client.
     * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
     */
    static async createWithSigner(b, _, w = {}) {
      return new x(b, _, w);
    }
    /**
     * Creates a client in offline mode.
     *
     * This should only be used in niche cases where you know exactly what you're doing,
     * e.g. when building an offline signing application.
     *
     * When you try to use online functionality with such a signer, an
     * exception will be raised.
     */
    static async offline(b, _ = {}) {
      return new x(void 0, b, _);
    }
    constructor(b, _, w) {
      super(b, w);
      const { registry: D = new o.Registry(e.defaultRegistryTypes), aminoTypes: q = new k.AminoTypes(U()) } = w;
      this.registry = D, this.aminoTypes = q, this.signer = _, this.broadcastTimeoutMs = w.broadcastTimeoutMs, this.broadcastPollIntervalMs = w.broadcastPollIntervalMs, this.gasPrice = w.gasPrice;
    }
    async simulate(b, _, w) {
      const D = _.map((Q) => this.registry.encodeAsAny(Q)), q = (await this.signer.getAccounts()).find((Q) => Q.address === b);
      if (!q)
        throw new Error("Failed to retrieve account from signer");
      const H = (0, t.encodeSecp256k1Pubkey)(q.pubkey), { sequence: F } = await this.getSequence(b), { gasInfo: L } = await this.forceGetQueryClient().tx.simulate(D, w, H, F);
      return (0, i.assertDefined)(L), r.Uint53.fromString(L.gasUsed.toString()).toNumber();
    }
    async sendTokens(b, _, w, D, q = "") {
      const H = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: b,
          toAddress: _,
          amount: [...w]
        }
      };
      return this.signAndBroadcast(b, [H], D, q);
    }
    async delegateTokens(b, _, w, D, q = "") {
      const H = {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: u.MsgDelegate.fromPartial({
          delegatorAddress: b,
          validatorAddress: _,
          amount: w
        })
      };
      return this.signAndBroadcast(b, [H], D, q);
    }
    async undelegateTokens(b, _, w, D, q = "") {
      const H = {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: u.MsgUndelegate.fromPartial({
          delegatorAddress: b,
          validatorAddress: _,
          amount: w
        })
      };
      return this.signAndBroadcast(b, [H], D, q);
    }
    async withdrawRewards(b, _, w, D = "") {
      const q = {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: a.MsgWithdrawDelegatorReward.fromPartial({
          delegatorAddress: b,
          validatorAddress: _
        })
      };
      return this.signAndBroadcast(b, [q], w, D);
    }
    /**
     * @deprecated This API does not support setting the memo field of `MsgTransfer` (only the transaction memo).
     * We'll remove this method at some point because trying to wrap the various message types is a losing strategy.
     * Please migrate to `signAndBroadcast` with an `MsgTransferEncodeObject` created in the caller code instead.
     * @see https://github.com/cosmos/cosmjs/issues/1493
     */
    async sendIbcTokens(b, _, w, D, q, H, F, L, Q = "") {
      const _e = F ? BigInt(F) * BigInt(1e9) : void 0, it = {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: M.MsgTransfer.fromPartial({
          sourcePort: D,
          sourceChannel: q,
          sender: b,
          receiver: _,
          token: w,
          timeoutHeight: H,
          timeoutTimestamp: _e
        })
      };
      return this.signAndBroadcast(b, [it], L, Q);
    }
    async signAndBroadcast(b, _, w, D = "", q) {
      let H;
      if (w == "auto" || typeof w == "number") {
        (0, i.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
        const Q = await this.simulate(b, _, D), _e = typeof w == "number" ? w : 1.4;
        H = (0, V.calculateFee)(Math.round(Q * _e), this.gasPrice);
      } else
        H = w;
      const F = await this.sign(b, _, H, D, void 0, q), L = g.TxRaw.encode(F).finish();
      return this.broadcastTx(L, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
    }
    /**
     * This method is useful if you want to send a transaction in broadcast,
     * without waiting for it to be placed inside a block, because for example
     * I would like to receive the hash to later track the transaction with another tool.
     * @returns Returns the hash of the transaction
     */
    async signAndBroadcastSync(b, _, w, D = "", q) {
      let H;
      if (w == "auto" || typeof w == "number") {
        (0, i.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
        const Q = await this.simulate(b, _, D), _e = typeof w == "number" ? w : 1.3;
        H = (0, V.calculateFee)(Math.round(Q * _e), this.gasPrice);
      } else
        H = w;
      const F = await this.sign(b, _, H, D, void 0, q), L = g.TxRaw.encode(F).finish();
      return this.broadcastTxSync(L);
    }
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
     * (See the SigningStargateClient.offline constructor).
     */
    async sign(b, _, w, D, q, H) {
      let F;
      if (q)
        F = q;
      else {
        const { accountNumber: L, sequence: Q } = await this.getSequence(b), _e = await this.getChainId();
        F = {
          accountNumber: L,
          sequence: Q,
          chainId: _e
        };
      }
      return (0, o.isOfflineDirectSigner)(this.signer) ? this.signDirect(b, _, w, D, F, H) : this.signAmino(b, _, w, D, F, H);
    }
    async signAmino(b, _, w, D, { accountNumber: q, sequence: H, chainId: F }, L) {
      (0, i.assert)(!(0, o.isOfflineDirectSigner)(this.signer));
      const Q = (await this.signer.getAccounts()).find((Sn) => Sn.address === b);
      if (!Q)
        throw new Error("Failed to retrieve account from signer");
      const _e = (0, o.encodePubkey)((0, t.encodeSecp256k1Pubkey)(Q.pubkey)), it = d.SignMode.SIGN_MODE_LEGACY_AMINO_JSON, _n = _.map((Sn) => this.aminoTypes.toAmino(Sn)), Zo = (0, t.makeSignDoc)(_n, w, F, D, q, H, L), { signature: Xo, signed: Ye } = await this.signer.signAmino(b, Zo), ar = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
          messages: Ye.msgs.map((Sn) => this.aminoTypes.fromAmino(Sn)),
          memo: Ye.memo,
          timeoutHeight: L
        }
      }, Yo = this.registry.encode(ar), hu = r.Int53.fromString(Ye.fee.gas).toNumber(), pu = r.Int53.fromString(Ye.sequence).toNumber(), gu = (0, o.makeAuthInfoBytes)([{ pubkey: _e, sequence: pu }], Ye.fee.amount, hu, Ye.fee.granter, Ye.fee.payer, it);
      return g.TxRaw.fromPartial({
        bodyBytes: Yo,
        authInfoBytes: gu,
        signatures: [(0, n.fromBase64)(Xo.signature)]
      });
    }
    async signDirect(b, _, w, D, { accountNumber: q, sequence: H, chainId: F }, L) {
      (0, i.assert)((0, o.isOfflineDirectSigner)(this.signer));
      const Q = (await this.signer.getAccounts()).find((Yo) => Yo.address === b);
      if (!Q)
        throw new Error("Failed to retrieve account from signer");
      const _e = (0, o.encodePubkey)((0, t.encodeSecp256k1Pubkey)(Q.pubkey)), it = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
          messages: _,
          memo: D,
          timeoutHeight: L
        }
      }, _n = this.registry.encode(it), Zo = r.Int53.fromString(w.gas).toNumber(), Xo = (0, o.makeAuthInfoBytes)([{ pubkey: _e, sequence: H }], w.amount, Zo, w.granter, w.payer), Ye = (0, o.makeSignDoc)(_n, Xo, F, q), { signature: bi, signed: ar } = await this.signer.signDirect(b, Ye);
      return g.TxRaw.fromPartial({
        bodyBytes: ar.bodyBytes,
        authInfoBytes: ar.authInfoBytes,
        signatures: [(0, n.fromBase64)(bi.signature)]
      });
    }
  }
  e.SigningStargateClient = x;
})(fc);
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(y, p, v, U) {
    U === void 0 && (U = v);
    var x = Object.getOwnPropertyDescriptor(p, v);
    (!x || ("get" in x ? !p.__esModule : x.writable || x.configurable)) && (x = { enumerable: !0, get: function() {
      return p[v];
    } }), Object.defineProperty(y, U, x);
  } : function(y, p, v, U) {
    U === void 0 && (U = v), y[U] = p[v];
  }), n = h && h.__setModuleDefault || (Object.create ? function(y, p) {
    Object.defineProperty(y, "default", { enumerable: !0, value: p });
  } : function(y, p) {
    y.default = p;
  }), r = h && h.__importStar || function(y) {
    if (y && y.__esModule)
      return y;
    var p = {};
    if (y != null)
      for (var v in y)
        v !== "default" && Object.prototype.hasOwnProperty.call(y, v) && t(p, y, v);
    return n(p, y), p;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isMsgWithdrawDelegatorRewardEncodeObject = e.isMsgVoteWeightedEncodeObject = e.isMsgVoteEncodeObject = e.isMsgUndelegateEncodeObject = e.isMsgTransferEncodeObject = e.isMsgSubmitProposalEncodeObject = e.isMsgSendEncodeObject = e.isMsgEditValidatorEncodeObject = e.isMsgDepositEncodeObject = e.isMsgDelegateEncodeObject = e.isMsgCreateValidatorEncodeObject = e.isMsgBeginRedelegateEncodeObject = e.isAminoMsgWithdrawValidatorCommission = e.isAminoMsgWithdrawDelegatorReward = e.isAminoMsgVoteWeighted = e.isAminoMsgVote = e.isAminoMsgVerifyInvariant = e.isAminoMsgUnjail = e.isAminoMsgUndelegate = e.isAminoMsgTransfer = e.isAminoMsgSubmitProposal = e.isAminoMsgSubmitEvidence = e.isAminoMsgSetWithdrawAddress = e.isAminoMsgSend = e.isAminoMsgMultiSend = e.isAminoMsgFundCommunityPool = e.isAminoMsgEditValidator = e.isAminoMsgDeposit = e.isAminoMsgDelegate = e.isAminoMsgCreateVestingAccount = e.isAminoMsgCreateValidator = e.isAminoMsgBeginRedelegate = e.createVestingAminoConverters = e.createStakingAminoConverters = e.createSlashingAminoConverters = e.createIbcAminoConverters = e.createGroupAminoConverters = e.createGovAminoConverters = e.createFeegrantAminoConverters = e.createEvidenceAminoConverters = e.createDistributionAminoConverters = e.createCrysisAminoConverters = e.createBankAminoConverters = e.createAuthzAminoConverters = e.logs = e.GasPrice = e.calculateFee = e.fromTendermintEvent = e.AminoTypes = e.accountFromAny = void 0, e.parseCoins = e.makeCosmoshubPath = e.coins = e.coin = e.TimeoutError = e.StargateClient = e.isDeliverTxSuccess = e.isDeliverTxFailure = e.BroadcastTxError = e.assertIsDeliverTxSuccess = e.assertIsDeliverTxFailure = e.SigningStargateClient = e.defaultRegistryTypes = e.createDefaultAminoConverters = e.isSearchTxQueryArray = e.QueryClient = e.decodeCosmosSdkDecFromProto = e.createProtobufRpcClient = e.createPagination = e.makeMultisignedTxBytes = e.makeMultisignedTx = e.setupTxExtension = e.setupStakingExtension = e.setupSlashingExtension = e.setupMintExtension = e.setupIbcExtension = e.setupGovExtension = e.setupFeegrantExtension = e.setupDistributionExtension = e.setupBankExtension = e.setupAuthzExtension = e.setupAuthExtension = void 0;
  var o = zn;
  Object.defineProperty(e, "accountFromAny", { enumerable: !0, get: function() {
    return o.accountFromAny;
  } });
  var s = Xn;
  Object.defineProperty(e, "AminoTypes", { enumerable: !0, get: function() {
    return s.AminoTypes;
  } });
  var i = Yn;
  Object.defineProperty(e, "fromTendermintEvent", { enumerable: !0, get: function() {
    return i.fromTendermintEvent;
  } });
  var c = Ot;
  Object.defineProperty(e, "calculateFee", { enumerable: !0, get: function() {
    return c.calculateFee;
  } }), Object.defineProperty(e, "GasPrice", { enumerable: !0, get: function() {
    return c.GasPrice;
  } }), e.logs = r(pe);
  var a = Wn;
  Object.defineProperty(e, "createAuthzAminoConverters", { enumerable: !0, get: function() {
    return a.createAuthzAminoConverters;
  } }), Object.defineProperty(e, "createBankAminoConverters", { enumerable: !0, get: function() {
    return a.createBankAminoConverters;
  } }), Object.defineProperty(e, "createCrysisAminoConverters", { enumerable: !0, get: function() {
    return a.createCrysisAminoConverters;
  } }), Object.defineProperty(e, "createDistributionAminoConverters", { enumerable: !0, get: function() {
    return a.createDistributionAminoConverters;
  } }), Object.defineProperty(e, "createEvidenceAminoConverters", { enumerable: !0, get: function() {
    return a.createEvidenceAminoConverters;
  } }), Object.defineProperty(e, "createFeegrantAminoConverters", { enumerable: !0, get: function() {
    return a.createFeegrantAminoConverters;
  } }), Object.defineProperty(e, "createGovAminoConverters", { enumerable: !0, get: function() {
    return a.createGovAminoConverters;
  } }), Object.defineProperty(e, "createGroupAminoConverters", { enumerable: !0, get: function() {
    return a.createGroupAminoConverters;
  } }), Object.defineProperty(e, "createIbcAminoConverters", { enumerable: !0, get: function() {
    return a.createIbcAminoConverters;
  } }), Object.defineProperty(e, "createSlashingAminoConverters", { enumerable: !0, get: function() {
    return a.createSlashingAminoConverters;
  } }), Object.defineProperty(e, "createStakingAminoConverters", { enumerable: !0, get: function() {
    return a.createStakingAminoConverters;
  } }), Object.defineProperty(e, "createVestingAminoConverters", { enumerable: !0, get: function() {
    return a.createVestingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgBeginRedelegate", { enumerable: !0, get: function() {
    return a.isAminoMsgBeginRedelegate;
  } }), Object.defineProperty(e, "isAminoMsgCreateValidator", { enumerable: !0, get: function() {
    return a.isAminoMsgCreateValidator;
  } }), Object.defineProperty(e, "isAminoMsgCreateVestingAccount", { enumerable: !0, get: function() {
    return a.isAminoMsgCreateVestingAccount;
  } }), Object.defineProperty(e, "isAminoMsgDelegate", { enumerable: !0, get: function() {
    return a.isAminoMsgDelegate;
  } }), Object.defineProperty(e, "isAminoMsgDeposit", { enumerable: !0, get: function() {
    return a.isAminoMsgDeposit;
  } }), Object.defineProperty(e, "isAminoMsgEditValidator", { enumerable: !0, get: function() {
    return a.isAminoMsgEditValidator;
  } }), Object.defineProperty(e, "isAminoMsgFundCommunityPool", { enumerable: !0, get: function() {
    return a.isAminoMsgFundCommunityPool;
  } }), Object.defineProperty(e, "isAminoMsgMultiSend", { enumerable: !0, get: function() {
    return a.isAminoMsgMultiSend;
  } }), Object.defineProperty(e, "isAminoMsgSend", { enumerable: !0, get: function() {
    return a.isAminoMsgSend;
  } }), Object.defineProperty(e, "isAminoMsgSetWithdrawAddress", { enumerable: !0, get: function() {
    return a.isAminoMsgSetWithdrawAddress;
  } }), Object.defineProperty(e, "isAminoMsgSubmitEvidence", { enumerable: !0, get: function() {
    return a.isAminoMsgSubmitEvidence;
  } }), Object.defineProperty(e, "isAminoMsgSubmitProposal", { enumerable: !0, get: function() {
    return a.isAminoMsgSubmitProposal;
  } }), Object.defineProperty(e, "isAminoMsgTransfer", { enumerable: !0, get: function() {
    return a.isAminoMsgTransfer;
  } }), Object.defineProperty(e, "isAminoMsgUndelegate", { enumerable: !0, get: function() {
    return a.isAminoMsgUndelegate;
  } }), Object.defineProperty(e, "isAminoMsgUnjail", { enumerable: !0, get: function() {
    return a.isAminoMsgUnjail;
  } }), Object.defineProperty(e, "isAminoMsgVerifyInvariant", { enumerable: !0, get: function() {
    return a.isAminoMsgVerifyInvariant;
  } }), Object.defineProperty(e, "isAminoMsgVote", { enumerable: !0, get: function() {
    return a.isAminoMsgVote;
  } }), Object.defineProperty(e, "isAminoMsgVoteWeighted", { enumerable: !0, get: function() {
    return a.isAminoMsgVoteWeighted;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawDelegatorReward", { enumerable: !0, get: function() {
    return a.isAminoMsgWithdrawDelegatorReward;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawValidatorCommission", { enumerable: !0, get: function() {
    return a.isAminoMsgWithdrawValidatorCommission;
  } }), Object.defineProperty(e, "isMsgBeginRedelegateEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgBeginRedelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgCreateValidatorEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgCreateValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgDelegateEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgDelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgDepositEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgDepositEncodeObject;
  } }), Object.defineProperty(e, "isMsgEditValidatorEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgEditValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgSendEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgSendEncodeObject;
  } }), Object.defineProperty(e, "isMsgSubmitProposalEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgSubmitProposalEncodeObject;
  } }), Object.defineProperty(e, "isMsgTransferEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgTransferEncodeObject;
  } }), Object.defineProperty(e, "isMsgUndelegateEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgUndelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgVoteEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteWeightedEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgVoteWeightedEncodeObject;
  } }), Object.defineProperty(e, "isMsgWithdrawDelegatorRewardEncodeObject", { enumerable: !0, get: function() {
    return a.isMsgWithdrawDelegatorRewardEncodeObject;
  } }), Object.defineProperty(e, "setupAuthExtension", { enumerable: !0, get: function() {
    return a.setupAuthExtension;
  } }), Object.defineProperty(e, "setupAuthzExtension", { enumerable: !0, get: function() {
    return a.setupAuthzExtension;
  } }), Object.defineProperty(e, "setupBankExtension", { enumerable: !0, get: function() {
    return a.setupBankExtension;
  } }), Object.defineProperty(e, "setupDistributionExtension", { enumerable: !0, get: function() {
    return a.setupDistributionExtension;
  } }), Object.defineProperty(e, "setupFeegrantExtension", { enumerable: !0, get: function() {
    return a.setupFeegrantExtension;
  } }), Object.defineProperty(e, "setupGovExtension", { enumerable: !0, get: function() {
    return a.setupGovExtension;
  } }), Object.defineProperty(e, "setupIbcExtension", { enumerable: !0, get: function() {
    return a.setupIbcExtension;
  } }), Object.defineProperty(e, "setupMintExtension", { enumerable: !0, get: function() {
    return a.setupMintExtension;
  } }), Object.defineProperty(e, "setupSlashingExtension", { enumerable: !0, get: function() {
    return a.setupSlashingExtension;
  } }), Object.defineProperty(e, "setupStakingExtension", { enumerable: !0, get: function() {
    return a.setupStakingExtension;
  } }), Object.defineProperty(e, "setupTxExtension", { enumerable: !0, get: function() {
    return a.setupTxExtension;
  } });
  var u = pt;
  Object.defineProperty(e, "makeMultisignedTx", { enumerable: !0, get: function() {
    return u.makeMultisignedTx;
  } }), Object.defineProperty(e, "makeMultisignedTxBytes", { enumerable: !0, get: function() {
    return u.makeMultisignedTxBytes;
  } });
  var d = ie;
  Object.defineProperty(e, "createPagination", { enumerable: !0, get: function() {
    return d.createPagination;
  } }), Object.defineProperty(e, "createProtobufRpcClient", { enumerable: !0, get: function() {
    return d.createProtobufRpcClient;
  } }), Object.defineProperty(e, "decodeCosmosSdkDecFromProto", { enumerable: !0, get: function() {
    return d.decodeCosmosSdkDecFromProto;
  } }), Object.defineProperty(e, "QueryClient", { enumerable: !0, get: function() {
    return d.QueryClient;
  } });
  var g = tr;
  Object.defineProperty(e, "isSearchTxQueryArray", { enumerable: !0, get: function() {
    return g.isSearchTxQueryArray;
  } });
  var M = fc;
  Object.defineProperty(e, "createDefaultAminoConverters", { enumerable: !0, get: function() {
    return M.createDefaultAminoConverters;
  } }), Object.defineProperty(e, "defaultRegistryTypes", { enumerable: !0, get: function() {
    return M.defaultRegistryTypes;
  } }), Object.defineProperty(e, "SigningStargateClient", { enumerable: !0, get: function() {
    return M.SigningStargateClient;
  } });
  var k = X;
  Object.defineProperty(e, "assertIsDeliverTxFailure", { enumerable: !0, get: function() {
    return k.assertIsDeliverTxFailure;
  } }), Object.defineProperty(e, "assertIsDeliverTxSuccess", { enumerable: !0, get: function() {
    return k.assertIsDeliverTxSuccess;
  } }), Object.defineProperty(e, "BroadcastTxError", { enumerable: !0, get: function() {
    return k.BroadcastTxError;
  } }), Object.defineProperty(e, "isDeliverTxFailure", { enumerable: !0, get: function() {
    return k.isDeliverTxFailure;
  } }), Object.defineProperty(e, "isDeliverTxSuccess", { enumerable: !0, get: function() {
    return k.isDeliverTxSuccess;
  } }), Object.defineProperty(e, "StargateClient", { enumerable: !0, get: function() {
    return k.StargateClient;
  } }), Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
    return k.TimeoutError;
  } });
  var V = vt;
  Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return V.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return V.coins;
  } }), Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return V.makeCosmoshubPath;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return V.parseCoins;
  } });
})(va);
const Iv = (e) => e * 1e6;
class yi {
  constructor(t, n, r, o) {
    at(this, "network");
    at(this, "chain");
    at(this, "rpc");
    at(this, "contracts");
    at(this, "gatewayAddress");
    // map the local channel ids to the remote chain
    at(this, "channelToChain", /* @__PURE__ */ new Map());
    at(this, "chainToChannel", /* @__PURE__ */ new Map());
    if (this.network = t, this.chain = n, this.rpc = r, this.contracts = o, !ki.has(t, n))
      throw new Error("Unsupported IBC Chain, no channels available: " + n);
    this.gatewayAddress = Nt.gatewayAddress(t);
    const s = ki.get(t, n) ?? {};
    for (const [i, c] of Object.entries(s))
      this.channelToChain.set(c, i), this.chainToChannel.set(i, c);
  }
  static async fromRpc(t, n) {
    const [r, o] = await es.chainFromRpc(t), s = n[o];
    if (s.network !== r)
      throw new Error("Network mismatch: " + s.network + " != " + r);
    return new yi(r, o, t, s.contracts);
  }
  getTransferChannel(t) {
    return this.chainToChannel.get(t) ?? null;
  }
  async *transfer(t, n, r, o) {
    const s = new _i(t).toString(), i = Math.round(Math.random() * 1e4), a = {
      gateway_ibc_token_bridge_payload: {
        gateway_transfer: {
          recipient: vi.encode(cd(n.chain) === "Cosmwasm" ? n.address.toString() : n.address.toUniversalAddress().toUint8Array()),
          chain: wi(n.chain),
          nonce: i,
          // TODO: fetch param of which contract?
          fee: "0"
        }
      }
    }, u = BigInt(Iv(Date.now() + hd)), d = JSON.stringify(a), g = ud(r) ? es.getNativeDenom(this.network, this.chain) : Nt.deriveIbcDenom(this.network, this.chain, new _i(r).toString()), M = va.coin(o.toString(), g.toString()), k = {
      typeUrl: md,
      value: Wr.MsgTransfer.fromPartial({
        sourcePort: Si,
        sourceChannel: this.chainToChannel.get(Nt.chain),
        sender: s,
        receiver: this.gatewayAddress,
        token: M,
        timeoutTimestamp: u,
        memo: d
      })
    };
    yield this.createUnsignedTx({
      msgs: [k],
      fee: gd(this.network, this.chain),
      memo: "Wormhole.TransferToGateway"
    }, "IBC.transfer");
  }
  async lookupTransferFromTx(t) {
    const n = await this.rpc.getTx(t);
    if (!n)
      throw new Error(`No IBC transfer found on ${this.chain} with txid: ${t}`);
    if (n.code !== 0)
      throw new Error(`Transaction failed: ${n.rawLog}`);
    const r = await this.fetchTransferInfo(n);
    if (r.length === 0)
      throw new Error(`No IBC transfers found on ${this.chain} with txid: ${t}`);
    return r;
  }
  async lookupMessageFromIbcMsgId(t) {
    const n = await this.lookupTxFromIbcMsgId(t);
    return n ? ld.parseWormholeMessageId(Nt.chain, Nt.coreAddress(this.network), n) : null;
  }
  // Private because we dont want to expose the IndexedTx type
  async lookupTxFromIbcMsgId(t) {
    const n = this.chain === t.chain ? ts : Pi, { srcChannel: r, dstChannel: o, sequence: s, srcPort: i, dstPort: c } = t, a = await this.rpc.searchTx([
      {
        key: `${n}.${Ai}`,
        value: o
      },
      {
        key: `${n}.${Ti}`,
        value: r
      },
      {
        key: `${n}.${Ei}`,
        value: i
      },
      {
        key: `${n}.${Ci}`,
        value: c
      },
      {
        key: `${n}.${Mi}`,
        value: s.toString()
      }
    ]);
    if (a.length === 0)
      return null;
    a.length > 1 && console.error(`Expected 1 transaction, got ${a.length} found for IbcMsgid: ${t}`);
    const [u] = a;
    return u;
  }
  async lookupTransferFromIbcMsgId(t) {
    const n = await this.lookupTxFromIbcMsgId(t);
    if (!n)
      throw new Error(`No transfers found on ${this.chain} for msg: ${JSON.stringify(t)}`);
    const r = await this.fetchTransferInfo(n);
    if (r.length === 0)
      throw new Error(`No transfers found on ${this.chain} for msg: ${JSON.stringify(t)}`);
    return r;
  }
  // Returns the IBC Transfer message content and IBC transfer information
  async lookupTransferFromMsg(t) {
    const n = vi.encode(JSON.stringify(t)), r = await this.rpc.searchTx([
      {
        key: "wasm.transfer_payload",
        value: n
      }
    ]);
    if (r.length === 0)
      throw new Error("Found no transactions for payload: " + JSON.stringify(n));
    r.length !== 1 && console.error("Expected 1 tx, got: ", r.length);
    const [o] = r, s = await this.fetchTransferInfo(o);
    if (s.length === 0)
      throw new Error("Found no transactions for payload: " + JSON.stringify(n));
    return s;
  }
  // fetch whether or not this transfer is pending
  async fetchTransferInfo(t) {
    const n = this.parseIbcTransferInfo(t), r = [];
    for (const o of n) {
      const s = es.getQueryClient(this.rpc);
      try {
        await s.ibc.channel.packetCommitment(Si, o.id.srcChannel, o.id.sequence), o.pending = !0;
      } catch (i) {
        if (!i.message.includes("packet commitment hash not found: key not found"))
          throw i;
      }
      r.push(o);
    }
    return r;
  }
  parseIbcTransferInfo(t) {
    const n = t.events.filter((o) => o.type === ts || o.type === Pi);
    if (n.length === 0)
      throw new Error(`No IBC Transfers on ${this.chain} found in: ${t.hash}`);
    const r = /* @__PURE__ */ new Set();
    for (const o of n) {
      const s = { pending: !1 }, i = {};
      for (const c of o.attributes)
        c.key === Ti && (i.srcChannel = c.value), c.key === Ai && (i.dstChannel = c.value), c.key === Mi && (i.sequence = Number(c.value)), c.key === Ei && (i.srcPort = c.value), c.key === Ci && (i.dstPort = c.value), c.key === fd && (s.data = JSON.parse(c.value));
      if (i.chain = o.type === ts ? this.chain : this.channelToChain.get(i.dstChannel), dd(i))
        s.id = i;
      else
        throw new Error("Invalid IbcMessageId: " + JSON.stringify(i));
      if (vd(s))
        r.add(s);
      else
        throw new Error("Invalid IbcTransferInfo: " + JSON.stringify(s));
    }
    return Array.from(r);
  }
  // Fetches the local channel for the given chain
  async fetchTransferChannel(t) {
    if (this.chain !== Nt.chain)
      throw new Error("Cannot query the transfer channels from a non-gateway chain");
    const { channel: n } = await this.rpc.queryContractSmart(this.gatewayAddress, {
      ibc_channel: { chain_id: wi(t) }
    });
    return n;
  }
  createUnsignedTx(t, n, r = !1) {
    return new yd(t, this.network, this.chain, n, r);
  }
}
bd(pd, "IbcBridge", yi);
export {
  yi as CosmwasmIbcBridge
};
