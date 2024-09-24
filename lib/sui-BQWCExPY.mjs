var An = Object.defineProperty;
var On = (t, e, r) => e in t ? An(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ee = (t, e, r) => (On(t, typeof e != "symbol" ? e + "" : e, r), r);
import { a$ as Cn, b0 as Nt, g as Bn, b1 as Le, b2 as jn, au as Mn, av as Rn, aw as $n, ax as bt, ay as Pn, az as Un, as as wr, ar as De, at as Nn, b3 as Dn, b4 as zn, b5 as Br, b6 as br, b7 as jr, b8 as be, aC as Vn } from "./index-DV1w5RNX.mjs";
import { C as Ln, P as qn } from "./chain-tk4BDPwT.mjs";
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */
function Mr(t) {
  if (typeof t != "string")
    throw new TypeError(`Invalid mnemonic type: ${typeof t}`);
  return t.normalize("NFKD");
}
function Fn(t) {
  const e = Mr(t), r = e.split(" ");
  if (![12, 15, 18, 21, 24].includes(r.length))
    throw new Error("Invalid mnemonic");
  return { nfkd: e, words: r };
}
const Wn = (t) => Mr(`mnemonic${t}`);
function Kn(t, e = "") {
  return Cn(Nt, Fn(t).nfkd, Wn(e), { c: 2048, dkLen: 64 });
}
function Gn(t) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), r = 0; r < e.length; r++)
    e[r] = 255;
  for (var n = 0; n < t.length; n++) {
    var s = t.charAt(n), i = s.charCodeAt(0);
    if (e[i] !== 255)
      throw new TypeError(s + " is ambiguous");
    e[i] = n;
  }
  var a = t.length, c = t.charAt(0), u = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function f(p) {
    if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (p.length === 0)
      return "";
    for (var m = 0, S = 0, E = 0, B = p.length; E !== B && p[E] === 0; )
      E++, m++;
    for (var M = (B - E) * d + 1 >>> 0, V = new Uint8Array(M); E !== B; ) {
      for (var Q = p[E], he = 0, W = M - 1; (Q !== 0 || he < S) && W !== -1; W--, he++)
        Q += 256 * V[W] >>> 0, V[W] = Q % a >>> 0, Q = Q / a >>> 0;
      if (Q !== 0)
        throw new Error("Non-zero carry");
      S = he, E++;
    }
    for (var se = M - S; se !== M && V[se] === 0; )
      se++;
    for (var et = c.repeat(m); se < M; ++se)
      et += t.charAt(V[se]);
    return et;
  }
  function g(p) {
    if (typeof p != "string")
      throw new TypeError("Expected String");
    if (p.length === 0)
      return new Uint8Array();
    for (var m = 0, S = 0, E = 0; p[m] === c; )
      S++, m++;
    for (var B = (p.length - m) * u + 1 >>> 0, M = new Uint8Array(B); p[m]; ) {
      var V = e[p.charCodeAt(m)];
      if (V === 255)
        return;
      for (var Q = 0, he = B - 1; (V !== 0 || Q < E) && he !== -1; he--, Q++)
        V += a * M[he] >>> 0, M[he] = V % 256 >>> 0, V = V / 256 >>> 0;
      if (V !== 0)
        throw new Error("Non-zero carry");
      E = Q, m++;
    }
    for (var W = B - E; W !== B && M[W] === 0; )
      W++;
    for (var se = new Uint8Array(S + (B - W)), et = S; W !== B; )
      se[et++] = M[W++];
    return se;
  }
  function y(p) {
    var m = g(p);
    if (m)
      return m;
    throw new Error("Non-base" + a + " character");
  }
  return {
    encode: f,
    decodeUnsafe: g,
    decode: y
  };
}
var Hn = Gn;
const Zn = Hn, Jn = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Xn = Zn(Jn);
const Rr = /* @__PURE__ */ Bn(Xn), Ze = (t) => Rr.encode(t), Je = (t) => Rr.decode(t);
function X(t) {
  return Uint8Array.from(atob(t), (e) => e.charCodeAt(0));
}
const St = 8192;
function N(t) {
  if (t.length < St)
    return btoa(String.fromCharCode(...t));
  let e = "";
  for (var r = 0; r < t.length; r += St) {
    const n = t.slice(r, r + St);
    e += String.fromCharCode(...n);
  }
  return btoa(e);
}
function Xe(t) {
  var s;
  const e = t.startsWith("0x") ? t.slice(2) : t, n = ((s = (e.length % 2 === 0 ? e : `0${e}}`).match(/.{2}/g)) == null ? void 0 : s.map((i) => parseInt(i, 16))) ?? [];
  return Uint8Array.from(n);
}
function xe(t) {
  return t.reduce((e, r) => e + r.toString(16).padStart(2, "0"), "");
}
function Dt(t) {
  let e = [], r = 0;
  if (t === 0)
    return [0];
  for (; t > 0; )
    e[r] = t & 127, (t >>= 7) && (e[r] |= 128), r += 1;
  return e;
}
function Yn(t) {
  let e = 0, r = 0, n = 0;
  for (; ; ) {
    let s = t[n];
    if (n += 1, e |= (s & 127) << r, !(s & 128))
      break;
    r += 7;
  }
  return {
    value: e,
    length: n
  };
}
class $r {
  /**
   * @param {Uint8Array} data Data to use as a buffer.
   */
  constructor(e) {
    this.bytePosition = 0, this.dataView = new DataView(e.buffer);
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(e) {
    return this.bytePosition += e, this;
  }
  /**
   * Read U8 value from the buffer and shift cursor by 1.
   * @returns
   */
  read8() {
    let e = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), e;
  }
  /**
   * Read U16 value from the buffer and shift cursor by 2.
   * @returns
   */
  read16() {
    let e = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), e;
  }
  /**
   * Read U32 value from the buffer and shift cursor by 4.
   * @returns
   */
  read32() {
    let e = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), e;
  }
  /**
   * Read U64 value from the buffer and shift cursor by 8.
   * @returns
   */
  read64() {
    let e = this.read32(), n = this.read32().toString(16) + e.toString(16).padStart(8, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 16.
   */
  read128() {
    let e = BigInt(this.read64()), n = BigInt(this.read64()).toString(16) + e.toString(16).padStart(16, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 32.
   * @returns
   */
  read256() {
    let e = BigInt(this.read128()), n = BigInt(this.read128()).toString(16) + e.toString(16).padStart(32, "0");
    return BigInt("0x" + n).toString(10);
  }
  /**
   * Read `num` number of bytes from the buffer and shift cursor by `num`.
   * @param num Number of bytes to read.
   */
  readBytes(e) {
    let r = this.bytePosition + this.dataView.byteOffset, n = new Uint8Array(this.dataView.buffer, r, e);
    return this.shift(e), n;
  }
  /**
   * Read ULEB value - an integer of varying size. Used for enum indexes and
   * vector lengths.
   * @returns {Number} The ULEB value.
   */
  readULEB() {
    let e = this.bytePosition + this.dataView.byteOffset, r = new Uint8Array(this.dataView.buffer, e), { value: n, length: s } = Yn(r);
    return this.shift(s), n;
  }
  /**
   * Read a BCS vector: read a length and then apply function `cb` X times
   * where X is the length of the vector, defined as ULEB in BCS bytes.
   * @param cb Callback to process elements of vector.
   * @returns {Array<Any>} Array of the resulting values, returned by callback.
   */
  readVec(e) {
    let r = this.readULEB(), n = [];
    for (let s = 0; s < r; s++)
      n.push(e(this, s, r));
    return n;
  }
}
function Qn(t, e) {
  switch (e) {
    case "base58":
      return Ze(t);
    case "base64":
      return N(t);
    case "hex":
      return xe(t);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function es(t, e) {
  switch (e) {
    case "base58":
      return Je(t);
    case "base64":
      return X(t);
    case "hex":
      return Xe(t);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function Pr(t, e = ["<", ">"]) {
  const [r, n] = e, s = [];
  let i = "", a = 0;
  for (let c = 0; c < t.length; c++) {
    const u = t[c];
    if (u === r && a++, u === n && a--, a === 0 && u === ",") {
      s.push(i.trim()), i = "";
      continue;
    }
    i += u;
  }
  return s.push(i.trim()), s;
}
class Ur {
  constructor({ size: e = 1024, maxSize: r, allocateSize: n = 1024 } = {}) {
    this.bytePosition = 0, this.size = e, this.maxSize = r || e, this.allocateSize = n, this.dataView = new DataView(new ArrayBuffer(e));
  }
  ensureSizeOrGrow(e) {
    const r = this.bytePosition + e;
    if (r > this.size) {
      const n = Math.min(this.maxSize, this.size + this.allocateSize);
      if (r > n)
        throw new Error(
          `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${r}`
        );
      this.size = n;
      const s = new ArrayBuffer(this.size);
      new Uint8Array(s).set(new Uint8Array(this.dataView.buffer)), this.dataView = new DataView(s);
    }
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(e) {
    return this.bytePosition += e, this;
  }
  /**
   * Write a U8 value into a buffer and shift cursor position by 1.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write8(e) {
    return this.ensureSizeOrGrow(1), this.dataView.setUint8(this.bytePosition, Number(e)), this.shift(1);
  }
  /**
   * Write a U16 value into a buffer and shift cursor position by 2.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write16(e) {
    return this.ensureSizeOrGrow(2), this.dataView.setUint16(this.bytePosition, Number(e), !0), this.shift(2);
  }
  /**
   * Write a U32 value into a buffer and shift cursor position by 4.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write32(e) {
    return this.ensureSizeOrGrow(4), this.dataView.setUint32(this.bytePosition, Number(e), !0), this.shift(4);
  }
  /**
   * Write a U64 value into a buffer and shift cursor position by 8.
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write64(e) {
    return Tt(BigInt(e), 8).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a U128 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write128(e) {
    return Tt(BigInt(e), 16).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a U256 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write256(e) {
    return Tt(BigInt(e), 32).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a ULEB value into a buffer and shift cursor position by number of bytes
   * written.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  writeULEB(e) {
    return Dt(e).forEach((r) => this.write8(r)), this;
  }
  /**
   * Write a vector into a buffer by first writing the vector length and then calling
   * a callback on each passed value.
   *
   * @param {Array<Any>} vector Array of elements to write.
   * @param {WriteVecCb} cb Callback to call on each element of the vector.
   * @returns {this}
   */
  writeVec(e, r) {
    return this.writeULEB(e.length), Array.from(e).forEach((n, s) => r(this, n, s, e.length)), this;
  }
  /**
   * Adds support for iterations over the object.
   * @returns {Uint8Array}
   */
  *[Symbol.iterator]() {
    for (let e = 0; e < this.bytePosition; e++)
      yield this.dataView.getUint8(e);
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
  toString(e) {
    return Qn(this.toBytes(), e);
  }
}
function Tt(t, e) {
  let r = new Uint8Array(e), n = 0;
  for (; t > 0; )
    r[n] = Number(t % BigInt(256)), t = t / BigInt(256), n += 1;
  return r;
}
var Nr = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, G = (t, e, r) => (Nr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), lt = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ht = (t, e, r, n) => (Nr(t, e, "write to private field"), e.set(t, r), r), Ie, Re, at, ge;
const Dr = class {
  constructor(t) {
    lt(this, Ie, void 0), lt(this, Re, void 0), this.name = t.name, this.read = t.read, this.serializedSize = t.serializedSize ?? (() => null), ht(this, Ie, t.write), ht(this, Re, t.serialize ?? ((e, r) => {
      const n = new Ur({ size: this.serializedSize(e) ?? void 0, ...r });
      return G(this, Ie).call(this, e, n), n.toBytes();
    })), this.validate = t.validate ?? (() => {
    });
  }
  write(t, e) {
    this.validate(t), G(this, Ie).call(this, t, e);
  }
  serialize(t, e) {
    return this.validate(t), new ts(this, G(this, Re).call(this, t, e));
  }
  parse(t) {
    const e = new $r(t);
    return this.read(e);
  }
  transform({
    name: t,
    input: e,
    output: r
  }) {
    return new Dr({
      name: t ?? this.name,
      read: (n) => r(this.read(n)),
      write: (n, s) => G(this, Ie).call(this, e(n), s),
      serializedSize: (n) => this.serializedSize(e(n)),
      serialize: (n, s) => G(this, Re).call(this, e(n), s),
      validate: (n) => this.validate(e(n))
    });
  }
};
let Z = Dr;
Ie = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
const zr = Symbol.for("@mysten/serialized-bcs");
function zt(t) {
  return !!t && typeof t == "object" && t[zr] === !0;
}
class ts {
  constructor(e, r) {
    lt(this, at, void 0), lt(this, ge, void 0), ht(this, at, e), ht(this, ge, r);
  }
  // Used to brand SerializedBcs so that they can be identified, even between multiple copies
  // of the @mysten/bcs package are installed
  get [zr]() {
    return !0;
  }
  toBytes() {
    return G(this, ge);
  }
  toHex() {
    return xe(G(this, ge));
  }
  toBase64() {
    return N(G(this, ge));
  }
  toBase58() {
    return Ze(G(this, ge));
  }
  parse() {
    return G(this, at).parse(G(this, ge));
  }
}
at = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
function ft({
  size: t,
  ...e
}) {
  return new Z({
    ...e,
    serializedSize: () => t
  });
}
function vt({
  readMethod: t,
  writeMethod: e,
  ...r
}) {
  return ft({
    ...r,
    read: (n) => n[t](),
    write: (n, s) => s[e](n),
    validate: (n) => {
      var s;
      if (n < 0 || n > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${n}. Expected value in range 0-${r.maxValue}`
        );
      (s = r.validate) == null || s.call(r, n);
    }
  });
}
function Et({
  readMethod: t,
  writeMethod: e,
  ...r
}) {
  return ft({
    ...r,
    read: (n) => n[t](),
    write: (n, s) => s[e](BigInt(n)),
    validate: (n) => {
      var i;
      const s = BigInt(n);
      if (s < 0 || s > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${s}. Expected value in range 0-${r.maxValue}`
        );
      (i = r.validate) == null || i.call(r, s);
    }
  });
}
function rs({
  serialize: t,
  ...e
}) {
  const r = new Z({
    ...e,
    serialize: t,
    write: (n, s) => {
      for (const i of r.serialize(n).toBytes())
        s.write8(i);
    }
  });
  return r;
}
function ns({
  toBytes: t,
  fromBytes: e,
  ...r
}) {
  return new Z({
    ...r,
    read: (n) => {
      const s = n.readULEB(), i = n.readBytes(s);
      return e(i);
    },
    write: (n, s) => {
      const i = t(n);
      s.writeULEB(i.length);
      for (let a = 0; a < i.length; a++)
        s.write8(i[a]);
    },
    serialize: (n) => {
      const s = t(n), i = Dt(s.length), a = new Uint8Array(i.length + s.length);
      return a.set(i, 0), a.set(s, i.length), a;
    },
    validate: (n) => {
      var s;
      if (typeof n != "string")
        throw new TypeError(`Invalid ${r.name} value: ${n}. Expected string`);
      (s = r.validate) == null || s.call(r, n);
    }
  });
}
function ss(t) {
  let e = null;
  function r() {
    return e || (e = t()), e;
  }
  return new Z({
    name: "lazy",
    read: (n) => r().read(n),
    serializedSize: (n) => r().serializedSize(n),
    write: (n, s) => r().write(n, s),
    serialize: (n, s) => r().serialize(n, s).toBytes()
  });
}
const o = {
  /**
   * Creates a BcsType that can be used to read and write an 8-bit unsigned integer.
   * @example
   * bcs.u8().serialize(255).toBytes() // Uint8Array [ 255 ]
   */
  u8(t) {
    return vt({
      name: "u8",
      readMethod: "read8",
      writeMethod: "write8",
      size: 1,
      maxValue: 2 ** 8 - 1,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 16-bit unsigned integer.
   * @example
   * bcs.u16().serialize(65535).toBytes() // Uint8Array [ 255, 255 ]
   */
  u16(t) {
    return vt({
      name: "u16",
      readMethod: "read16",
      writeMethod: "write16",
      size: 2,
      maxValue: 2 ** 16 - 1,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 32-bit unsigned integer.
   * @example
   * bcs.u32().serialize(4294967295).toBytes() // Uint8Array [ 255, 255, 255, 255 ]
   */
  u32(t) {
    return vt({
      name: "u32",
      readMethod: "read32",
      writeMethod: "write32",
      size: 4,
      maxValue: 2 ** 32 - 1,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 64-bit unsigned integer.
   * @example
   * bcs.u64().serialize(1).toBytes() // Uint8Array [ 1, 0, 0, 0, 0, 0, 0, 0 ]
   */
  u64(t) {
    return Et({
      name: "u64",
      readMethod: "read64",
      writeMethod: "write64",
      size: 8,
      maxValue: 2n ** 64n - 1n,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 128-bit unsigned integer.
   * @example
   * bcs.u128().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u128(t) {
    return Et({
      name: "u128",
      readMethod: "read128",
      writeMethod: "write128",
      size: 16,
      maxValue: 2n ** 128n - 1n,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 256-bit unsigned integer.
   * @example
   * bcs.u256().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u256(t) {
    return Et({
      name: "u256",
      readMethod: "read256",
      writeMethod: "write256",
      size: 32,
      maxValue: 2n ** 256n - 1n,
      ...t
    });
  },
  /**
   * Creates a BcsType that can be used to read and write boolean values.
   * @example
   * bcs.bool().serialize(true).toBytes() // Uint8Array [ 1 ]
   */
  bool(t) {
    return ft({
      name: "bool",
      size: 1,
      read: (e) => e.read8() === 1,
      write: (e, r) => r.write8(e ? 1 : 0),
      ...t,
      validate: (e) => {
        var r;
        if ((r = t == null ? void 0 : t.validate) == null || r.call(t, e), typeof e != "boolean")
          throw new TypeError(`Expected boolean, found ${typeof e}`);
      }
    });
  },
  /**
   * Creates a BcsType that can be used to read and write unsigned LEB encoded integers
   * @example
   *
   */
  uleb128(t) {
    return rs({
      name: "uleb128",
      read: (e) => e.readULEB(),
      serialize: (e) => Uint8Array.from(Dt(e)),
      ...t
    });
  },
  /**
   * Creates a BcsType representing a fixed length byte array
   * @param size The number of bytes this types represents
   * @example
   * bcs.bytes(3).serialize(new Uint8Array([1, 2, 3])).toBytes() // Uint8Array [1, 2, 3]
   */
  bytes(t, e) {
    return ft({
      name: `bytes[${t}]`,
      size: t,
      read: (r) => r.readBytes(t),
      write: (r, n) => {
        for (let s = 0; s < t; s++)
          n.write8(r[s] ?? 0);
      },
      ...e,
      validate: (r) => {
        var n;
        if ((n = e == null ? void 0 : e.validate) == null || n.call(e, r), !("length" in r))
          throw new TypeError(`Expected array, found ${typeof r}`);
        if (r.length !== t)
          throw new TypeError(`Expected array of length ${t}, found ${r.length}`);
      }
    });
  },
  /**
   * Creates a BcsType that can ser/de string values.  Strings will be UTF-8 encoded
   * @example
   * bcs.string().serialize('a').toBytes() // Uint8Array [ 1, 97 ]
   */
  string(t) {
    return ns({
      name: "string",
      toBytes: (e) => new TextEncoder().encode(e),
      fromBytes: (e) => new TextDecoder().decode(e),
      ...t
    });
  },
  /**
   * Creates a BcsType that represents a fixed length array of a given type
   * @param size The number of elements in the array
   * @param type The BcsType of each element in the array
   * @example
   * bcs.fixedArray(3, bcs.u8()).serialize([1, 2, 3]).toBytes() // Uint8Array [ 1, 2, 3 ]
   */
  fixedArray(t, e, r) {
    return new Z({
      name: `${e.name}[${t}]`,
      read: (n) => {
        const s = new Array(t);
        for (let i = 0; i < t; i++)
          s[i] = e.read(n);
        return s;
      },
      write: (n, s) => {
        for (const i of n)
          e.write(i, s);
      },
      ...r,
      validate: (n) => {
        var s;
        if ((s = r == null ? void 0 : r.validate) == null || s.call(r, n), !("length" in n))
          throw new TypeError(`Expected array, found ${typeof n}`);
        if (n.length !== t)
          throw new TypeError(`Expected array of length ${t}, found ${n.length}`);
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
  option(t) {
    return o.enum(`Option<${t.name}>`, {
      None: null,
      Some: t
    }).transform({
      input: (e) => e == null ? { None: !0 } : { Some: e },
      output: (e) => "Some" in e ? e.Some : null
    });
  },
  /**
   * Creates a BcsType representing a variable length vector of a given type
   * @param type The BcsType of each element in the vector
   *
   * @example
   * bcs.vector(bcs.u8()).toBytes([1, 2, 3]) // Uint8Array [ 3, 1, 2, 3 ]
   */
  vector(t, e) {
    return new Z({
      name: `vector<${t.name}>`,
      read: (r) => {
        const n = r.readULEB(), s = new Array(n);
        for (let i = 0; i < n; i++)
          s[i] = t.read(r);
        return s;
      },
      write: (r, n) => {
        n.writeULEB(r.length);
        for (const s of r)
          t.write(s, n);
      },
      ...e,
      validate: (r) => {
        var n;
        if ((n = e == null ? void 0 : e.validate) == null || n.call(e, r), !("length" in r))
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
  tuple(t, e) {
    return new Z({
      name: `(${t.map((r) => r.name).join(", ")})`,
      serializedSize: (r) => {
        let n = 0;
        for (let s = 0; s < t.length; s++) {
          const i = t[s].serializedSize(r[s]);
          if (i == null)
            return null;
          n += i;
        }
        return n;
      },
      read: (r) => {
        const n = [];
        for (const s of t)
          n.push(s.read(r));
        return n;
      },
      write: (r, n) => {
        for (let s = 0; s < t.length; s++)
          t[s].write(r[s], n);
      },
      ...e,
      validate: (r) => {
        var n;
        if ((n = e == null ? void 0 : e.validate) == null || n.call(e, r), !Array.isArray(r))
          throw new TypeError(`Expected array, found ${typeof r}`);
        if (r.length !== t.length)
          throw new TypeError(`Expected array of length ${t.length}, found ${r.length}`);
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
  struct(t, e, r) {
    const n = Object.entries(e);
    return new Z({
      name: t,
      serializedSize: (s) => {
        let i = 0;
        for (const [a, c] of n) {
          const u = c.serializedSize(s[a]);
          if (u == null)
            return null;
          i += u;
        }
        return i;
      },
      read: (s) => {
        const i = {};
        for (const [a, c] of n)
          i[a] = c.read(s);
        return i;
      },
      write: (s, i) => {
        for (const [a, c] of n)
          c.write(s[a], i);
      },
      ...r,
      validate: (s) => {
        var i;
        if ((i = r == null ? void 0 : r.validate) == null || i.call(r, s), typeof s != "object" || s == null)
          throw new TypeError(`Expected object, found ${typeof s}`);
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
  enum(t, e, r) {
    const n = Object.entries(e);
    return new Z({
      name: t,
      read: (s) => {
        const i = s.readULEB(), [a, c] = n[i];
        return {
          [a]: (c == null ? void 0 : c.read(s)) ?? !0
        };
      },
      write: (s, i) => {
        const [a, c] = Object.entries(s)[0];
        for (let u = 0; u < n.length; u++) {
          const [d, f] = n[u];
          if (d === a) {
            i.writeULEB(u), f == null || f.write(c, i);
            return;
          }
        }
      },
      ...r,
      validate: (s) => {
        var c;
        if ((c = r == null ? void 0 : r.validate) == null || c.call(r, s), typeof s != "object" || s == null)
          throw new TypeError(`Expected object, found ${typeof s}`);
        const i = Object.keys(s);
        if (i.length !== 1)
          throw new TypeError(`Expected object with one key, found ${i.length}`);
        const [a] = i;
        if (!Object.hasOwn(e, a))
          throw new TypeError(`Invalid enum variant ${a}`);
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
  map(t, e) {
    return o.vector(o.tuple([t, e])).transform({
      name: `Map<${t.name}, ${e.name}>`,
      input: (r) => [...r.entries()],
      output: (r) => {
        const n = /* @__PURE__ */ new Map();
        for (const [s, i] of r)
          n.set(s, i);
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
  generic(t, e) {
    return (...r) => e(...r).transform({
      name: `${e.name}<${r.map((n) => n.name).join(", ")}>`,
      input: (n) => n,
      output: (n) => n
    });
  },
  /**
   * Creates a BcsType that wraps another BcsType which is lazily evaluated. This is useful for creating recursive types.
   * @param cb A callback that returns the BcsType
   */
  lazy(t) {
    return ss(t);
  }
}, is = 32, $e = class {
  /**
   * Construct a BCS instance with a prepared schema.
   *
   * @param schema A prepared schema with type definitions
   * @param withPrimitives Whether to register primitive types by default
   */
  constructor(t) {
    if (this.types = /* @__PURE__ */ new Map(), this.counter = 0, t instanceof $e) {
      this.schema = t.schema, this.types = new Map(t.types);
      return;
    }
    if (this.schema = t, this.registerAddressType($e.ADDRESS, t.addressLength, t.addressEncoding), this.registerVectorType(t.vectorType), t.types && t.types.structs)
      for (let e of Object.keys(t.types.structs))
        this.registerStructType(e, t.types.structs[e]);
    if (t.types && t.types.enums)
      for (let e of Object.keys(t.types.enums))
        this.registerEnumType(e, t.types.enums[e]);
    if (t.types && t.types.aliases)
      for (let e of Object.keys(t.types.aliases))
        this.registerAlias(e, t.types.aliases[e]);
    t.withPrimitives !== !1 && as(this);
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
  ser(t, e, r) {
    if (typeof t == "string" || Array.isArray(t)) {
      const { name: n, params: s } = this.parseTypeName(t);
      return this.getTypeInterface(n).encode(this, e, r, s);
    }
    if (typeof t == "object") {
      const n = this.tempKey();
      return new $e(this).registerStructType(n, t).ser(n, e, r);
    }
    throw new Error(`Incorrect type passed into the '.ser()' function. 
${JSON.stringify(t)}`);
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
  de(t, e, r) {
    if (typeof e == "string")
      if (r)
        e = es(e, r);
      else
        throw new Error("To pass a string to `bcs.de`, specify encoding");
    if (typeof t == "string" || Array.isArray(t)) {
      const { name: n, params: s } = this.parseTypeName(t);
      return this.getTypeInterface(n).decode(this, e, s);
    }
    if (typeof t == "object") {
      const n = new $e(this), s = this.tempKey();
      return n.registerStructType(s, t).de(s, e, r);
    }
    throw new Error(`Incorrect type passed into the '.de()' function. 
${JSON.stringify(t)}`);
  }
  /**
   * Check whether a `TypeInterface` has been loaded for a `type`.
   * @param type Name of the type to check.
   * @returns
   */
  hasType(t) {
    return this.types.has(t);
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
  registerAlias(t, e) {
    return this.types.set(t, e), this;
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
  registerType(t, e, r, n = () => !0) {
    const { name: s, params: i } = this.parseTypeName(t);
    return this.types.set(s, {
      encode(a, c, u, d) {
        const f = i.reduce((g, y, p) => Object.assign(g, { [y]: d[p] }), {});
        return this._encodeRaw.call(a, new Ur(u), c, d, f);
      },
      decode(a, c, u) {
        const d = i.reduce((f, g, y) => Object.assign(f, { [g]: u[y] }), {});
        return this._decodeRaw.call(a, new $r(c), u, d);
      },
      // these methods should always be used with caution as they require pre-defined
      // reader and writer and mainly exist to allow multi-field (de)serialization;
      _encodeRaw(a, c, u, d) {
        if (n(c))
          return e.call(this, a, c, u, d);
        throw new Error(`Validation failed for type ${s}, data: ${c}`);
      },
      _decodeRaw(a, c, u) {
        return r.call(this, a, c, u);
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
  registerBcsType(t, e) {
    return this.registerType(
      t,
      (r, n, s) => {
        const i = s.map(
          (a) => new Z({
            name: String(a),
            write: (c, u) => {
              const { name: d, params: f } = this.parseTypeName(a), g = this.getTypeInterface(d), y = f.reduce((p, m, S) => Object.assign(p, { [m]: s[S] }), {});
              return g._encodeRaw.call(this, u, c, f, y);
            },
            read: () => {
              throw new Error("Not implemented");
            }
          })
        );
        return e(...i).write(n, r), r;
      },
      (r, n) => {
        const s = n.map(
          (i) => new Z({
            name: String(i),
            write: (a, c) => {
              throw new Error("Not implemented");
            },
            read: (a) => {
              const { name: c, params: u } = this.parseTypeName(i), d = this.getTypeInterface(c), f = u.reduce((g, y, p) => Object.assign(g, { [y]: n[p] }), {});
              return d._decodeRaw.call(this, a, u, f);
            }
          })
        );
        return e(...s).read(r);
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
  registerAddressType(t, e, r = "hex") {
    switch (r) {
      case "base64":
        return this.registerType(
          t,
          function(s, i) {
            return X(i).reduce((a, c) => a.write8(c), s);
          },
          function(s) {
            return N(s.readBytes(e));
          }
        );
      case "hex":
        return this.registerType(
          t,
          function(s, i) {
            return Xe(i).reduce((a, c) => a.write8(c), s);
          },
          function(s) {
            return xe(s.readBytes(e));
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
  registerVectorType(t) {
    let { name: e, params: r } = this.parseTypeName(t);
    if (r.length > 1)
      throw new Error("Vector can have only one type parameter; got " + e);
    return this.registerType(
      t,
      function(s, i, a, c) {
        return s.writeVec(i, (u, d) => {
          let f = a[0];
          if (!f)
            throw new Error(`Incorrect number of type parameters passed a to vector '${t}'`);
          let { name: g, params: y } = this.parseTypeName(f);
          if (this.hasType(g))
            return this.getTypeInterface(g)._encodeRaw.call(this, u, d, y, c);
          if (!(g in c))
            throw new Error(
              `Unable to find a matching type definition for ${g} in vector; make sure you passed a generic`
            );
          let { name: p, params: m } = this.parseTypeName(c[g]);
          return this.getTypeInterface(p)._encodeRaw.call(
            this,
            u,
            d,
            m,
            c
          );
        });
      },
      function(s, i, a) {
        return s.readVec((c) => {
          let u = i[0];
          if (!u)
            throw new Error(`Incorrect number of type parameters passed to a vector '${t}'`);
          let { name: d, params: f } = this.parseTypeName(u);
          if (this.hasType(d))
            return this.getTypeInterface(d)._decodeRaw.call(this, c, f, a);
          if (!(d in a))
            throw new Error(
              `Unable to find a matching type definition for ${d} in vector; make sure you passed a generic`
            );
          let { name: g, params: y } = this.parseTypeName(a[d]);
          return this.getTypeInterface(g)._decodeRaw.call(
            this,
            c,
            y,
            a
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
  registerStructType(t, e) {
    for (let a in e) {
      let c = this.tempKey(), u = e[a];
      !Array.isArray(u) && typeof u != "string" && (e[a] = c, this.registerStructType(c, u));
    }
    let r = Object.freeze(e), n = Object.keys(r), { name: s, params: i } = this.parseTypeName(t);
    return this.registerType(
      t,
      function(c, u, d, f) {
        if (!u || u.constructor !== Object)
          throw new Error(`Expected ${s} to be an Object, got: ${u}`);
        if (d.length !== i.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${i.length}, got: ${d.length}`
          );
        for (let g of n) {
          if (!(g in u))
            throw new Error(`Struct ${s} requires field ${g}:${r[g]}`);
          const { name: y, params: p } = this.parseTypeName(
            r[g]
          );
          if (!i.includes(y))
            this.getTypeInterface(y)._encodeRaw.call(
              this,
              c,
              u[g],
              p,
              f
            );
          else {
            const m = i.indexOf(y);
            let { name: S, params: E } = this.parseTypeName(d[m]);
            if (this.hasType(S)) {
              this.getTypeInterface(S)._encodeRaw.call(
                this,
                c,
                u[g],
                E,
                f
              );
              continue;
            }
            if (!(S in f))
              throw new Error(
                `Unable to find a matching type definition for ${S} in ${s}; make sure you passed a generic`
              );
            let { name: B, params: M } = this.parseTypeName(f[S]);
            this.getTypeInterface(B)._encodeRaw.call(
              this,
              c,
              u[g],
              M,
              f
            );
          }
        }
        return c;
      },
      function(c, u, d) {
        if (u.length !== i.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${i.length}, got: ${u.length}`
          );
        let f = {};
        for (let g of n) {
          const { name: y, params: p } = this.parseTypeName(
            r[g]
          );
          if (!i.includes(y))
            f[g] = this.getTypeInterface(y)._decodeRaw.call(
              this,
              c,
              p,
              d
            );
          else {
            const m = i.indexOf(y);
            let { name: S, params: E } = this.parseTypeName(u[m]);
            if (this.hasType(S)) {
              f[g] = this.getTypeInterface(S)._decodeRaw.call(
                this,
                c,
                E,
                d
              );
              continue;
            }
            if (!(S in d))
              throw new Error(
                `Unable to find a matching type definition for ${S} in ${s}; make sure you passed a generic`
              );
            let { name: B, params: M } = this.parseTypeName(d[S]);
            f[g] = this.getTypeInterface(B)._decodeRaw.call(
              this,
              c,
              M,
              d
            );
          }
        }
        return f;
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
  registerEnumType(t, e) {
    for (let a in e) {
      let c = this.tempKey(), u = e[a];
      u !== null && !Array.isArray(u) && typeof u != "string" && (e[a] = c, this.registerStructType(c, u));
    }
    let r = Object.freeze(e), n = Object.keys(r), { name: s, params: i } = this.parseTypeName(t);
    return this.registerType(
      t,
      function(c, u, d, f) {
        if (!u)
          throw new Error(`Unable to write enum "${s}", missing data.
Received: "${u}"`);
        if (typeof u != "object")
          throw new Error(
            `Incorrect data passed into enum "${s}", expected object with properties: "${n.join(
              " | "
            )}".
Received: "${JSON.stringify(u)}"`
          );
        let g = Object.keys(u)[0];
        if (g === void 0)
          throw new Error(`Empty object passed as invariant of the enum "${s}"`);
        let y = n.indexOf(g);
        if (y === -1)
          throw new Error(
            `Unknown invariant of the enum "${s}", allowed values: "${n.join(
              " | "
            )}"; received "${g}"`
          );
        let p = n[y], m = r[p];
        if (c.write8(y), m === null)
          return c;
        let S = i.indexOf(m), E = S === -1 ? m : d[S];
        {
          let { name: B, params: M } = this.parseTypeName(E);
          return this.getTypeInterface(B)._encodeRaw.call(
            this,
            c,
            u[g],
            M,
            f
          );
        }
      },
      function(c, u, d) {
        let f = c.readULEB(), g = n[f], y = r[g];
        if (f === -1)
          throw new Error(
            `Decoding type mismatch, expected enum "${s}" invariant index, received "${f}"`
          );
        if (y === null)
          return { [g]: !0 };
        let p = i.indexOf(y), m = p === -1 ? y : u[p];
        {
          let { name: S, params: E } = this.parseTypeName(m);
          return {
            [g]: this.getTypeInterface(S)._decodeRaw.call(this, c, E, d)
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
  getTypeInterface(t) {
    let e = this.types.get(t);
    if (typeof e == "string") {
      let r = [];
      for (; typeof e == "string"; ) {
        if (r.includes(e))
          throw new Error(`Recursive definition found: ${r.join(" -> ")} -> ${e}`);
        r.push(e), e = this.types.get(e);
      }
    }
    if (e === void 0)
      throw new Error(`Type ${t} is not registered`);
    return e;
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
  parseTypeName(t) {
    if (Array.isArray(t)) {
      let [c, ...u] = t;
      return { name: c, params: u };
    }
    if (typeof t != "string")
      throw new Error(`Illegal type passed as a name of the type: ${t}`);
    let [e, r] = this.schema.genericSeparators || ["<", ">"], n = t.indexOf(e), s = Array.from(t).reverse().indexOf(r);
    if (n === -1 && s === -1)
      return { name: t, params: [] };
    if (n === -1 || s === -1)
      throw new Error(`Unclosed generic in name '${t}'`);
    let i = t.slice(0, n), a = Pr(
      t.slice(n + 1, t.length - s - 1),
      this.schema.genericSeparators
    );
    return { name: i, params: a };
  }
};
let I = $e;
I.U8 = "u8";
I.U16 = "u16";
I.U32 = "u32";
I.U64 = "u64";
I.U128 = "u128";
I.U256 = "u256";
I.BOOL = "bool";
I.VECTOR = "vector";
I.ADDRESS = "address";
I.STRING = "string";
I.HEX = "hex-string";
I.BASE58 = "base58-string";
I.BASE64 = "base64-string";
function as(t) {
  t.registerType(
    I.U8,
    function(e, r) {
      return e.write8(r);
    },
    function(e) {
      return e.read8();
    },
    (e) => e < 256
  ), t.registerType(
    I.U16,
    function(e, r) {
      return e.write16(r);
    },
    function(e) {
      return e.read16();
    },
    (e) => e < 65536
  ), t.registerType(
    I.U32,
    function(e, r) {
      return e.write32(r);
    },
    function(e) {
      return e.read32();
    },
    (e) => e <= 4294967296n
  ), t.registerType(
    I.U64,
    function(e, r) {
      return e.write64(r);
    },
    function(e) {
      return e.read64();
    }
  ), t.registerType(
    I.U128,
    function(e, r) {
      return e.write128(r);
    },
    function(e) {
      return e.read128();
    }
  ), t.registerType(
    I.U256,
    function(e, r) {
      return e.write256(r);
    },
    function(e) {
      return e.read256();
    }
  ), t.registerType(
    I.BOOL,
    function(e, r) {
      return e.write8(r);
    },
    function(e) {
      return e.read8().toString(10) === "1";
    }
  ), t.registerType(
    I.STRING,
    function(e, r) {
      return e.writeVec(Array.from(r), (n, s) => n.write8(s.charCodeAt(0)));
    },
    function(e) {
      return e.readVec((r) => r.read8()).map((r) => String.fromCharCode(Number(r))).join("");
    },
    (e) => !0
  ), t.registerType(
    I.HEX,
    function(e, r) {
      return e.writeVec(Array.from(Xe(r)), (n, s) => n.write8(s));
    },
    function(e) {
      let r = e.readVec((n) => n.read8());
      return xe(new Uint8Array(r));
    }
  ), t.registerType(
    I.BASE58,
    function(e, r) {
      return e.writeVec(Array.from(Je(r)), (n, s) => n.write8(s));
    },
    function(e) {
      let r = e.readVec((n) => n.read8());
      return Ze(new Uint8Array(r));
    }
  ), t.registerType(
    I.BASE64,
    function(e, r) {
      return e.writeVec(Array.from(X(r)), (n, s) => n.write8(s));
    },
    function(e) {
      let r = e.readVec((n) => n.read8());
      return N(new Uint8Array(r));
    }
  );
}
function os() {
  return {
    genericSeparators: ["<", ">"],
    vectorType: "vector",
    addressLength: is,
    addressEncoding: "hex"
  };
}
const cs = 32;
function Sr(t) {
  try {
    return Je(t).length === cs;
  } catch {
    return !1;
  }
}
const Ye = 32;
function oe(t) {
  return us(t) && ds(t) === Ye;
}
function tt(t) {
  return oe(t);
}
function _(t, e = !1) {
  let r = t.toLowerCase();
  return !e && r.startsWith("0x") && (r = r.slice(2)), `0x${r.padStart(Ye * 2, "0")}`;
}
function te(t, e = !1) {
  return _(t, e);
}
function us(t) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(t) && t.length % 2 === 0;
}
function ds(t) {
  return /^(0x|0X)/.test(t) ? (t.length - 2) / 2 : t.length / 2;
}
class ls extends TypeError {
  constructor(e, r) {
    let n;
    const { message: s, explanation: i, ...a } = e, { path: c } = e, u = c.length === 0 ? s : `At path: ${c.join(".")} -- ${s}`;
    super(i ?? u), i != null && (this.cause = u), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...r()]);
  }
}
function hs(t) {
  return q(t) && typeof t[Symbol.iterator] == "function";
}
function q(t) {
  return typeof t == "object" && t != null;
}
function F(t) {
  return typeof t == "symbol" ? t.toString() : typeof t == "string" ? JSON.stringify(t) : `${t}`;
}
function fs(t) {
  const { done: e, value: r } = t.next();
  return e ? void 0 : r;
}
function gs(t, e, r, n) {
  if (t === !0)
    return;
  t === !1 ? t = {} : typeof t == "string" && (t = { message: t });
  const { path: s, branch: i } = e, { type: a } = r, { refinement: c, message: u = `Expected a value of type \`${a}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${F(n)}\`` } = t;
  return {
    value: n,
    type: a,
    refinement: c,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...t,
    message: u
  };
}
function* Tr(t, e, r, n) {
  hs(t) || (t = [t]);
  for (const s of t) {
    const i = gs(s, e, r, n);
    i && (yield i);
  }
}
function* Vt(t, e, r = {}) {
  const { path: n = [], branch: s = [t], coerce: i = !1, mask: a = !1 } = r, c = { path: n, branch: s };
  if (i && (t = e.coercer(t, c), a && e.type !== "type" && q(e.schema) && q(t) && !Array.isArray(t)))
    for (const d in t)
      e.schema[d] === void 0 && delete t[d];
  let u = "valid";
  for (const d of e.validator(t, c))
    d.explanation = r.message, u = "not_valid", yield [d, void 0];
  for (let [d, f, g] of e.entries(t, c)) {
    const y = Vt(f, g, {
      path: d === void 0 ? n : [...n, d],
      branch: d === void 0 ? s : [...s, f],
      coerce: i,
      mask: a,
      message: r.message
    });
    for (const p of y)
      p[0] ? (u = p[0].refinement != null ? "not_refined" : "not_valid", yield [p[0], void 0]) : i && (f = p[1], d === void 0 ? t = f : t instanceof Map ? t.set(d, f) : t instanceof Set ? t.add(f) : q(t) && (f !== void 0 || d in t) && (t[d] = f));
  }
  if (u !== "not_valid")
    for (const d of e.refiner(t, c))
      d.explanation = r.message, u = "not_refined", yield [d, void 0];
  u === "valid" && (yield [void 0, t]);
}
class ne {
  constructor(e) {
    const { type: r, schema: n, validator: s, refiner: i, coercer: a = (u) => u, entries: c = function* () {
    } } = e;
    this.type = r, this.schema = n, this.entries = c, this.coercer = a, s ? this.validator = (u, d) => {
      const f = s(u, d);
      return Tr(f, d, this, u);
    } : this.validator = () => [], i ? this.refiner = (u, d) => {
      const f = i(u, d);
      return Tr(f, d, this, u);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e, r) {
    return _t(e, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e, r) {
    return Vr(e, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return D(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e, r) {
    return Lr(e, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, r = {}) {
    return Qe(e, this, r);
  }
}
function _t(t, e, r) {
  const n = Qe(t, e, { message: r });
  if (n[0])
    throw n[0];
}
function Vr(t, e, r) {
  const n = Qe(t, e, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function Lr(t, e, r) {
  const n = Qe(t, e, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function D(t, e) {
  return !Qe(t, e)[0];
}
function Qe(t, e, r = {}) {
  const n = Vt(t, e, r), s = fs(n);
  return s[0] ? [new ls(s[0], function* () {
    for (const a of n)
      a[0] && (yield a[0]);
  }), void 0] : [void 0, s[1]];
}
function qe(...t) {
  const e = t[0].type === "type", r = t.map((s) => s.schema), n = Object.assign({}, ...r);
  return e ? ys(n) : h(n);
}
function z(t, e) {
  return new ne({ type: t, schema: null, validator: e });
}
function At() {
  return z("any", () => !0);
}
function v(t) {
  return new ne({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [r, n] of e.entries())
          yield [r, n, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array value, but received: ${F(e)}`;
    }
  });
}
function ps() {
  return z("bigint", (t) => typeof t == "bigint");
}
function $() {
  return z("boolean", (t) => typeof t == "boolean");
}
function re() {
  return z("integer", (t) => typeof t == "number" && !isNaN(t) && Number.isInteger(t) || `Expected an integer, but received: ${F(t)}`);
}
function b(t) {
  const e = F(t), r = typeof t;
  return new ne({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? t : null,
    validator(n) {
      return n === t || `Expected the literal \`${e}\`, but received: ${F(n)}`;
    }
  });
}
function qr() {
  return z("never", () => !1);
}
function C(t) {
  return new ne({
    ...t,
    validator: (e, r) => e === null || t.validator(e, r),
    refiner: (e, r) => e === null || t.refiner(e, r)
  });
}
function Ee() {
  return z("number", (t) => typeof t == "number" && !isNaN(t) || `Expected a number, but received: ${F(t)}`);
}
function h(t) {
  const e = t ? Object.keys(t) : [], r = qr();
  return new ne({
    type: "object",
    schema: t || null,
    *entries(n) {
      if (t && q(n)) {
        const s = new Set(Object.keys(n));
        for (const i of e)
          s.delete(i), yield [i, n[i], t[i]];
        for (const i of s)
          yield [i, n[i], r];
      }
    },
    validator(n) {
      return q(n) || `Expected an object, but received: ${F(n)}`;
    },
    coercer(n) {
      return q(n) ? { ...n } : n;
    }
  });
}
function w(t) {
  return new ne({
    ...t,
    validator: (e, r) => e === void 0 || t.validator(e, r),
    refiner: (e, r) => e === void 0 || t.refiner(e, r)
  });
}
function Y(t, e) {
  return new ne({
    type: "record",
    schema: null,
    *entries(r) {
      if (q(r))
        for (const n in r) {
          const s = r[n];
          yield [n, n, t], yield [n, s, e];
        }
    },
    validator(r) {
      return q(r) || `Expected an object, but received: ${F(r)}`;
    }
  });
}
function l() {
  return z("string", (t) => typeof t == "string" || `Expected a string, but received: ${F(t)}`);
}
function Fr(t) {
  const e = qr();
  return new ne({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(t.length, r.length);
        for (let s = 0; s < n; s++)
          yield [s, r[s], t[s] || e];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${F(r)}`;
    }
  });
}
function ys(t) {
  const e = Object.keys(t);
  return new ne({
    type: "type",
    schema: t,
    *entries(r) {
      if (q(r))
        for (const n of e)
          yield [n, r[n], t[n]];
    },
    validator(r) {
      return q(r) || `Expected an object, but received: ${F(r)}`;
    },
    coercer(r) {
      return q(r) ? { ...r } : r;
    }
  });
}
function j(t) {
  const e = t.map((r) => r.type).join(" | ");
  return new ne({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of t) {
        const [s, i] = n.validate(r, { coerce: !0 });
        if (!s)
          return i;
      }
      return r;
    },
    validator(r, n) {
      const s = [];
      for (const i of t) {
        const [...a] = Vt(r, i, n), [c] = a;
        if (c[0])
          for (const [u] of a)
            u && s.push(u);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${F(r)}`,
        ...s
      ];
    }
  });
}
function Wr() {
  return z("unknown", () => !0);
}
BigInt(1e9);
const Lt = "0x1", Kr = "0x2";
te("0x6");
const ms = `${Kr}::sui::SUI`;
te("0x5");
const _e = "::", ws = "0x2::sui::SUI", bs = "0.50.1", Ss = "1.19.0", Ts = {
  "-32700": "ParseError",
  "-32600": "InvalidRequest",
  "-32601": "MethodNotFound",
  "-32602": "InvalidParams",
  "-32603": "InternalError"
};
class Gr extends Error {
}
class Hr extends Gr {
  constructor(e, r) {
    super(e), this.code = r, this.type = Ts[r] ?? "ServerError";
  }
}
class vs extends Gr {
  constructor(e, r, n) {
    super(e), this.status = r, this.statusText = n;
  }
}
var qt = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, A = (t, e, r) => (qt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), fe = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Oe = (t, e, r, n) => (qt(t, e, "write to private field"), e.set(t, r), r), Es = (t, e, r, n) => ({
  set _(s) {
    Oe(t, e, s);
  },
  get _() {
    return A(t, e, n);
  }
}), Zr = (t, e, r) => (qt(t, e, "access private method"), r), Se, ze, ce, ve, Fe, Ce, Ot, Jr, Ft, Xr;
function ks(t) {
  const e = new URL(t);
  return e.protocol = e.protocol.replace("http", "ws"), e.toString();
}
const xs = {
  // We fudge the typing because we also check for undefined in the constructor:
  WebSocketConstructor: typeof WebSocket < "u" ? WebSocket : void 0,
  callTimeout: 3e4,
  reconnectTimeout: 3e3,
  maxReconnects: 5
};
class Is {
  constructor(e, r = {}) {
    if (fe(this, Ot), fe(this, Ft), fe(this, Se, 0), fe(this, ze, 0), fe(this, ce, null), fe(this, ve, null), fe(this, Fe, /* @__PURE__ */ new Set()), fe(this, Ce, /* @__PURE__ */ new Map()), this.endpoint = e, this.options = { ...xs, ...r }, !this.options.WebSocketConstructor)
      throw new Error("Missing WebSocket constructor");
    this.endpoint.startsWith("http") && (this.endpoint = ks(this.endpoint));
  }
  async makeRequest(e, r) {
    const n = await Zr(this, Ot, Jr).call(this);
    return new Promise((s, i) => {
      Oe(this, Se, A(this, Se) + 1), A(this, Ce).set(A(this, Se), {
        resolve: s,
        reject: i,
        timeout: setTimeout(() => {
          A(this, Ce).delete(A(this, Se)), i(new Error(`Request timeout: ${e}`));
        }, this.options.callTimeout)
      }), n.send(JSON.stringify({ jsonrpc: "2.0", id: A(this, Se), method: e, params: r }));
    }).then(({ error: s, result: i }) => {
      if (s)
        throw new Hr(s.message, s.code);
      return i;
    });
  }
  async subscribe(e) {
    const r = new _s(e);
    return A(this, Fe).add(r), await r.subscribe(this), () => r.unsubscribe(this);
  }
}
Se = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
ve = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakSet();
Jr = function() {
  return A(this, ve) ? A(this, ve) : (Oe(this, ve, new Promise((t) => {
    var e;
    (e = A(this, ce)) == null || e.close(), Oe(this, ce, new this.options.WebSocketConstructor(this.endpoint)), A(this, ce).addEventListener("open", () => {
      Oe(this, ze, 0), t(A(this, ce));
    }), A(this, ce).addEventListener("close", () => {
      Es(this, ze)._++, A(this, ze) <= this.options.maxReconnects && setTimeout(() => {
        Zr(this, Ft, Xr).call(this);
      }, this.options.reconnectTimeout);
    }), A(this, ce).addEventListener("message", ({ data: r }) => {
      let n;
      try {
        n = JSON.parse(r);
      } catch (s) {
        console.error(new Error(`Failed to parse RPC message: ${r}`, { cause: s }));
        return;
      }
      if ("id" in n && n.id != null && A(this, Ce).has(n.id)) {
        const { resolve: s, timeout: i } = A(this, Ce).get(n.id);
        clearTimeout(i), s(n);
      } else if ("params" in n) {
        const { params: s } = n;
        A(this, Fe).forEach((i) => {
          i.subscriptionId === s.subscription && s.subscription === i.subscriptionId && i.onMessage(s.result);
        });
      }
    });
  })), A(this, ve));
};
Ft = /* @__PURE__ */ new WeakSet();
Xr = async function() {
  var t;
  return (t = A(this, ce)) == null || t.close(), Oe(this, ve, null), Promise.allSettled(
    [...A(this, Fe)].map((e) => e.subscribe(this))
  );
};
class _s {
  constructor(e) {
    this.subscriptionId = null, this.subscribed = !1, this.input = e;
  }
  onMessage(e) {
    this.subscribed && this.input.onMessage(e);
  }
  async unsubscribe(e) {
    const { subscriptionId: r } = this;
    return this.subscribed = !1, r == null ? !1 : (this.subscriptionId = null, e.makeRequest(this.input.unsubscribe, [r]));
  }
  async subscribe(e) {
    this.subscriptionId = null, this.subscribed = !0;
    const r = await e.makeRequest(
      this.input.method,
      this.input.params
    );
    this.subscribed && (this.subscriptionId = r);
  }
}
var Wt = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, L = (t, e, r) => (Wt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), rt = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ct = (t, e, r, n) => (Wt(t, e, "write to private field"), e.set(t, r), r), As = (t, e, r) => (Wt(t, e, "access private method"), r), Pe, H, Ve, Bt, Yr;
class Os {
  constructor(e) {
    rt(this, Bt), rt(this, Pe, 0), rt(this, H, void 0), rt(this, Ve, void 0), Ct(this, H, e);
  }
  fetch(e, r) {
    const n = L(this, H).fetch ?? globalThis.fetch;
    if (!this.fetch)
      throw new Error(
        "The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport."
      );
    return n(e, r);
  }
  async request(e) {
    var s, i;
    Ct(this, Pe, L(this, Pe) + 1);
    const r = await this.fetch(((s = L(this, H).rpc) == null ? void 0 : s.url) ?? L(this, H).url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Sdk-Type": "typescript",
        "Client-Sdk-Version": bs,
        "Client-Target-Api-Version": Ss,
        ...(i = L(this, H).rpc) == null ? void 0 : i.headers
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: L(this, Pe),
        method: e.method,
        params: e.params
      })
    });
    if (!r.ok)
      throw new vs(
        `Unexpected status code: ${r.status}`,
        r.status,
        r.statusText
      );
    const n = await r.json();
    if ("error" in n && n.error != null)
      throw new Hr(n.error.message, n.error.code);
    return n.result;
  }
  async subscribe(e) {
    const r = await As(this, Bt, Yr).call(this).subscribe(e);
    return async () => !!await r();
  }
}
Pe = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakSet();
Yr = function() {
  var t;
  if (!L(this, Ve)) {
    const e = L(this, H).WebSocketConstructor ?? globalThis.WebSocket;
    if (!e)
      throw new Error(
        "The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport."
      );
    Ct(this, Ve, new Is(
      ((t = L(this, H).websocket) == null ? void 0 : t.url) ?? L(this, H).url,
      {
        WebSocketConstructor: e,
        ...L(this, H).websocket
      }
    ));
  }
  return L(this, Ve);
};
const Cs = /^vector<(.+)>$/, Bs = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class ue {
  static parseFromStr(e, r = !1) {
    if (e === "address")
      return { address: null };
    if (e === "bool")
      return { bool: null };
    if (e === "u8")
      return { u8: null };
    if (e === "u16")
      return { u16: null };
    if (e === "u32")
      return { u32: null };
    if (e === "u64")
      return { u64: null };
    if (e === "u128")
      return { u128: null };
    if (e === "u256")
      return { u256: null };
    if (e === "signer")
      return { signer: null };
    const n = e.match(Cs);
    if (n)
      return {
        vector: ue.parseFromStr(n[1], r)
      };
    const s = e.match(Bs);
    if (s)
      return {
        struct: {
          address: r ? _(s[1]) : s[1],
          module: s[2],
          name: s[3],
          typeParams: s[5] === void 0 ? [] : ue.parseStructTypeArgs(s[5], r)
        }
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${e}`);
  }
  static parseStructTypeArgs(e, r = !1) {
    return Pr(e).map(
      (n) => ue.parseFromStr(n, r)
    );
  }
  static tagToString(e) {
    if ("bool" in e)
      return "bool";
    if ("u8" in e)
      return "u8";
    if ("u16" in e)
      return "u16";
    if ("u32" in e)
      return "u32";
    if ("u64" in e)
      return "u64";
    if ("u128" in e)
      return "u128";
    if ("u256" in e)
      return "u256";
    if ("address" in e)
      return "address";
    if ("signer" in e)
      return "signer";
    if ("vector" in e)
      return `vector<${ue.tagToString(e.vector)}>`;
    if ("struct" in e) {
      const r = e.struct, n = r.typeParams.map(ue.tagToString).join(", ");
      return `${r.address}::${r.module}::${r.name}${n ? `<${n}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
}
const x = new I({
  ...os(),
  types: {
    enums: {
      "Option<T>": {
        None: null,
        Some: "T"
      }
    }
  }
});
function Qr(t) {
  return o.u64({
    name: "unsafe_u64",
    ...t
  }).transform({
    input: (e) => e,
    output: (e) => Number(e)
  });
}
function js(t) {
  return o.enum("Option", {
    None: null,
    Some: t
  });
}
function Kt(t) {
  return t.transform({
    input: (e) => ({
      [e.kind]: e
    }),
    output: (e) => {
      const r = Object.keys(e)[0];
      return { kind: r, ...e[r] };
    }
  });
}
const J = o.bytes(Ye).transform({
  input: (t) => typeof t == "string" ? Xe(_(t)) : t,
  output: (t) => _(xe(t))
}), Gt = o.vector(o.u8()).transform({
  name: "ObjectDigest",
  input: (t) => Je(t),
  output: (t) => Ze(new Uint8Array(t))
}), We = o.struct("SuiObjectRef", {
  objectId: J,
  version: o.u64(),
  digest: Gt
}), Ht = o.struct("SharedObjectRef", {
  objectId: J,
  initialSharedVersion: o.u64(),
  mutable: o.bool()
}), gt = o.enum("ObjectArg", {
  ImmOrOwned: We,
  Shared: Ht,
  Receiving: We
}), Zt = o.enum("CallArg", {
  Pure: o.vector(o.u8()),
  Object: gt,
  ObjVec: o.vector(gt)
}), Me = o.enum("TypeTag", {
  bool: null,
  u8: null,
  u64: null,
  u128: null,
  address: null,
  signer: null,
  vector: o.lazy(() => Me),
  struct: o.lazy(() => tr),
  u16: null,
  u32: null,
  u256: null
}), K = Kt(
  o.enum("Argument", {
    GasCoin: null,
    Input: o.struct("Input", { index: o.u16() }),
    Result: o.struct("Result", { index: o.u16() }),
    NestedResult: o.struct("NestedResult", { index: o.u16(), resultIndex: o.u16() })
  })
), Jt = o.struct("ProgrammableMoveCall", {
  package: J,
  module: o.string(),
  function: o.string(),
  type_arguments: o.vector(Me),
  arguments: o.vector(K)
}).transform({
  input: (t) => {
    const [e, r, n] = t.target.split("::"), s = t.typeArguments.map(
      (i) => ue.parseFromStr(i, !0)
    );
    return {
      package: _(e),
      module: r,
      function: n,
      type_arguments: s,
      arguments: t.arguments
    };
  },
  output: (t) => ({
    target: [t.package, t.module, t.function].join(
      "::"
    ),
    arguments: t.arguments,
    typeArguments: t.type_arguments.map(ue.tagToString)
  })
}), Xt = Kt(
  o.enum("Transaction", {
    /**
     * A Move Call - any public Move function can be called via
     * this transaction. The results can be used that instant to pass
     * into the next transaction.
     */
    MoveCall: Jt,
    /**
     * Transfer vector of objects to a receiver.
     */
    TransferObjects: o.struct("TransferObjects", {
      objects: o.vector(K),
      address: K
    }),
    /**
     * Split `amount` from a `coin`.
     */
    SplitCoins: o.struct("SplitCoins", { coin: K, amounts: o.vector(K) }),
    /**
     * Merge Vector of Coins (`sources`) into a `destination`.
     */
    MergeCoins: o.struct("MergeCoins", { destination: K, sources: o.vector(K) }),
    /**
     * Publish a Move module.
     */
    Publish: o.struct("Publish", {
      modules: o.vector(o.vector(o.u8())),
      dependencies: o.vector(J)
    }),
    /**
     * Build a vector of objects using the input arguments.
     * It is impossible to construct a `vector<T: key>` otherwise,
     * so this call serves a utility function.
     */
    MakeMoveVec: o.struct("MakeMoveVec", {
      type: js(Me),
      objects: o.vector(K)
    }),
    /**  */
    Upgrade: o.struct("Upgrade", {
      modules: o.vector(o.vector(o.u8())),
      dependencies: o.vector(J),
      packageId: J,
      ticket: K
    })
  })
), Yt = o.struct("ProgrammableTransaction", {
  inputs: o.vector(Zt),
  transactions: o.vector(Xt)
}), Qt = o.enum("TransactionKind", {
  ProgrammableTransaction: Yt,
  ChangeEpoch: null,
  Genesis: null,
  ConsensusCommitPrologue: null
}), er = o.enum("TransactionExpiration", {
  None: null,
  Epoch: Qr()
}), tr = o.struct("StructTag", {
  address: J,
  module: o.string(),
  name: o.string(),
  typeParams: o.vector(Me)
}), rr = o.struct("GasData", {
  payment: o.vector(We),
  owner: J,
  price: o.u64(),
  budget: o.u64()
}), nr = o.struct("TransactionDataV1", {
  kind: Qt,
  sender: J,
  gasData: rr,
  expiration: er
}), sr = o.enum("TransactionData", {
  V1: nr
}), Ms = o.enum("IntentScope", {
  TransactionData: null,
  TransactionEffects: null,
  CheckpointSummary: null,
  PersonalMessage: null
}), Rs = o.enum("IntentVersion", {
  V0: null
}), $s = o.enum("AppId", {
  Sui: null
}), Ps = o.struct("Intent", {
  scope: Ms,
  version: Rs,
  appId: $s
}), Us = o.generic(
  ["T"],
  (t) => o.struct("IntentMessage<T>", {
    intent: Ps,
    value: t
  })
), ir = o.enum("CompressedSignature", {
  ED25519: o.fixedArray(64, o.u8()),
  Secp256k1: o.fixedArray(64, o.u8()),
  Secp256r1: o.fixedArray(64, o.u8()),
  ZkLogin: o.vector(o.u8())
}), ar = o.enum("PublicKey", {
  ED25519: o.fixedArray(32, o.u8()),
  Secp256k1: o.fixedArray(33, o.u8()),
  Secp256r1: o.fixedArray(33, o.u8()),
  ZkLogin: o.vector(o.u8())
}), or = o.struct("MultiSigPkMap", {
  pubKey: ar,
  weight: o.u8()
}), cr = o.struct("MultiSigPublicKey", {
  pk_map: o.vector(or),
  threshold: o.u16()
}), en = o.struct("MultiSig", {
  sigs: o.vector(ir),
  bitmap: o.u16(),
  multisig_pk: cr
}), Ns = o.vector(o.u8()).transform({
  input: (t) => typeof t == "string" ? X(t) : t,
  output: (t) => N(new Uint8Array(t))
}), tn = o.struct("SenderSignedTransaction", {
  intentMessage: Us(sr),
  txSignatures: o.vector(Ns)
}), rn = o.vector(tn, {
  name: "SenderSignedData"
}), O = {
  ...o,
  U8: o.u8(),
  U16: o.u16(),
  U32: o.u32(),
  U64: o.u64(),
  U128: o.u128(),
  U256: o.u256(),
  ULEB128: o.uleb128(),
  Bool: o.bool(),
  String: o.string(),
  Address: J,
  Argument: K,
  CallArg: Zt,
  CompressedSignature: ir,
  GasData: rr,
  MultiSig: en,
  MultiSigPkMap: or,
  MultiSigPublicKey: cr,
  ObjectArg: gt,
  ObjectDigest: Gt,
  ProgrammableMoveCall: Jt,
  ProgrammableTransaction: Yt,
  PublicKey: ar,
  SenderSignedData: rn,
  SenderSignedTransaction: tn,
  SharedObjectRef: Ht,
  StructTag: tr,
  SuiObjectRef: We,
  Transaction: Xt,
  TransactionData: sr,
  TransactionDataV1: nr,
  TransactionExpiration: er,
  TransactionKind: Qt,
  TypeTag: Me,
  // preserve backwards compatibility with old bcs export
  ser: x.ser.bind(x),
  de: x.de.bind(x),
  getTypeInterface: x.getTypeInterface.bind(x),
  hasType: x.hasType.bind(x),
  parseTypeName: x.parseTypeName.bind(x),
  registerAddressType: x.registerAddressType.bind(x),
  registerAlias: x.registerAlias.bind(x),
  registerBcsType: x.registerBcsType.bind(x),
  registerEnumType: x.registerEnumType.bind(x),
  registerStructType: x.registerStructType.bind(x),
  registerType: x.registerType.bind(x),
  types: x.types
};
x.registerBcsType("utf8string", () => o.string({ name: "utf8string" }));
x.registerBcsType("unsafe_u64", () => Qr());
x.registerBcsType("enumKind", (t) => Kt(t));
[
  J,
  K,
  Zt,
  ir,
  rr,
  en,
  or,
  cr,
  gt,
  Gt,
  Jt,
  Yt,
  ar,
  rn,
  Ht,
  tr,
  We,
  Xt,
  sr,
  nr,
  er,
  Qt,
  Me
].forEach((t) => {
  x.registerBcsType(t.name, () => t);
});
const ur = j([
  h({
    AddressOwner: l()
  }),
  h({
    ObjectOwner: l()
  }),
  h({
    Shared: h({
      initial_shared_version: C(l())
    })
  }),
  b("Immutable")
]);
z("SuiJsonValue", () => !0);
const Ds = j([
  h({ u32: l() }),
  h({ u64: l() }),
  h({ f64: l() })
]);
h({
  attributes: Y(l(), C(Ds)),
  featureFlags: Y(l(), $()),
  maxSupportedProtocolVersion: l(),
  minSupportedProtocolVersion: l(),
  protocolVersion: l()
});
j([l(), b("package")]);
const pe = h({
  /** Base64 string representing the object digest */
  digest: l(),
  /** Hex code as string representing the object id */
  objectId: l(),
  /** Object version */
  version: j([Ee(), l(), ps()])
});
h({
  owner: ur,
  reference: pe
});
h({
  objectId: l(),
  sequenceNumber: l()
});
h({
  payment: v(pe),
  /** Gas Object's owner */
  owner: l(),
  price: l(),
  budget: l()
});
const zs = qe(
  pe,
  h({
    type: l(),
    owner: ur,
    previousTransaction: l()
  })
), Vs = Y(l(), At()), Ls = Y(l(), Wr()), qs = h({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: l(),
  /** Fields and values stored inside the Move object */
  fields: Vs,
  hasPublicTransfer: $()
}), Fs = h({
  /** A mapping from module name to disassembled Move bytecode */
  disassembled: Ls
}), Ws = j([
  qe(qs, h({ dataType: b("moveObject") })),
  qe(Fs, h({ dataType: b("package") }))
]), Ks = h({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: l(),
  hasPublicTransfer: $(),
  version: l(),
  bcsBytes: l()
}), Gs = h({
  id: l(),
  /** A mapping from module name to Move bytecode enocded in base64*/
  moduleMap: Y(l(), l())
}), Hs = j([
  qe(Ks, h({ dataType: b("moveObject") })),
  qe(Gs, h({ dataType: b("package") }))
]);
BigInt(1e9);
const nn = h({
  code: l(),
  error: w(l()),
  object_id: w(l()),
  parent_object_id: w(l()),
  version: w(l()),
  digest: w(l())
}), Zs = h({
  data: C(w(Y(l(), l()))),
  error: C(w(nn))
}), Js = j([
  Zs,
  w(Y(l(), l()))
]), sn = h({
  objectId: l(),
  version: l(),
  digest: l(),
  /**
   * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
   */
  type: C(w(l())),
  /**
   * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
   */
  content: C(w(Ws)),
  /**
   * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
   */
  bcs: C(w(Hs)),
  /**
   * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
   */
  owner: C(w(ur)),
  /**
   * The digest of the transaction that created or last mutated this object.
   * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
   */
  previousTransaction: C(w(l())),
  /**
   * The amount of SUI we would rebate if this object gets deleted.
   * This number is re-calculated each time the object is mutated based on
   * the present storage gas price.
   * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
   */
  storageRebate: C(w(l())),
  /**
   * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
   * This can also be None if the struct type does not have Display defined
   * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
   */
  display: C(w(Js))
});
h({
  /* Whether to fetch the object type, default to be true */
  showType: C(w($())),
  /* Whether to fetch the object content, default to be false */
  showContent: C(w($())),
  /* Whether to fetch the object content in BCS bytes, default to be false */
  showBcs: C(w($())),
  /* Whether to fetch the object owner, default to be false */
  showOwner: C(w($())),
  /* Whether to fetch the previous transaction digest, default to be false */
  showPreviousTransaction: C(w($())),
  /* Whether to fetch the storage rebate, default to be false */
  showStorageRebate: C(w($())),
  /* Whether to fetch the display metadata, default to be false */
  showDisplay: C(w($()))
});
j([b("Exists"), b("notExists"), b("Deleted")]);
v(zs);
const Xs = h({
  data: C(w(sn)),
  error: C(w(nn))
});
function Ys(t) {
  return t.data;
}
function Qs(t) {
  if (t.error && "object_id" in t.error && "version" in t.error && "digest" in t.error) {
    const e = t.error;
    return {
      objectId: e.object_id,
      version: e.version,
      digest: e.digest
    };
  }
}
function vr(t) {
  if ("reference" in t)
    return t.reference;
  const e = Ys(t);
  return e ? {
    objectId: e.objectId,
    version: e.version,
    digest: e.digest
  } : Qs(t);
}
h({
  objectId: l(),
  atCheckpoint: w(Ee())
});
h({
  data: v(Xs),
  nextCursor: w(C(l())),
  hasNextPage: $()
});
j([
  h({
    details: sn,
    status: b("VersionFound")
  }),
  h({
    details: l(),
    status: b("ObjectNotExists")
  }),
  h({
    details: pe,
    status: b("ObjectDeleted")
  }),
  h({
    details: Fr([l(), Ee()]),
    status: b("VersionNotFound")
  }),
  h({
    details: h({
      asked_version: Ee(),
      latest_version: Ee(),
      object_id: l()
    }),
    status: b("VersionTooHigh")
  })
]);
const ei = j([l(), h({ Object: l() })]);
v(ei);
const ti = h({
  address: l(),
  name: l()
}), ri = j([b("Private"), b("Public"), b("Friend")]), dr = h({
  abilities: v(l())
}), ni = h({
  constraints: dr,
  isPhantom: $()
}), si = h({
  TypeParameter: Ee()
}), kt = Fr([
  h({
    module: l(),
    package: l(),
    function: l()
  }),
  l()
]);
h({
  rank3Days: v(kt),
  rank7Days: v(kt),
  rank30Days: v(kt)
});
function an(t) {
  if (!t)
    return !1;
  if (typeof t == "string" || D(t, si) || on(t))
    return !0;
  if (typeof t != "object")
    return !1;
  const e = t;
  return !!(D(e.Reference, Be) || D(e.MutableReference, Be) || D(e.Vector, Be));
}
const Be = z(
  "SuiMoveNormalizedType",
  an
);
function on(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  if (!e.Struct || typeof e.Struct != "object")
    return !1;
  const r = e.Struct;
  return !(typeof r.address != "string" || typeof r.module != "string" || typeof r.name != "string" || !Array.isArray(r.typeArguments) || !r.typeArguments.every((n) => an(n)));
}
z(
  "SuiMoveNormalizedStructType",
  on
);
const ii = h({
  visibility: ri,
  isEntry: $(),
  typeParameters: v(dr),
  parameters: v(Be),
  return: v(Be)
}), ai = h({
  name: l(),
  type: Be
}), oi = h({
  abilities: dr,
  typeParameters: v(ni),
  fields: v(ai)
}), ci = h({
  fileFormatVersion: Ee(),
  address: l(),
  name: l(),
  friends: v(ti),
  structs: Y(l(), oi),
  exposedFunctions: Y(l(), ii)
});
Y(l(), ci);
function jt(t) {
  return typeof t == "object" && "MutableReference" in t ? t.MutableReference : void 0;
}
function cn(t) {
  return typeof t == "object" && "Reference" in t ? t.Reference : void 0;
}
function lr(t) {
  if (typeof t == "object" && "Struct" in t)
    return t;
  const e = cn(t), r = jt(t);
  if (typeof e == "object" && "Struct" in e)
    return e;
  if (typeof r == "object" && "Struct" in r)
    return r;
}
const ui = j([
  h({ ImmOrOwned: pe }),
  h({
    Shared: h({
      objectId: l(),
      initialSharedVersion: j([re(), l()]),
      mutable: $()
    })
  }),
  h({ Receiving: pe })
]), pt = h({ Pure: v(re()) }), Mt = h({ Object: ui }), yt = j([pt, Mt]);
function di(t, e) {
  return {
    Pure: Array.from(
      t instanceof Uint8Array ? t : zt(t) ? t.toBytes() : (
        // NOTE: We explicitly set this to be growable to infinity, because we have maxSize validation at the builder-level:
        O.ser(e, t, { maxSize: 1 / 0 }).toBytes()
      )
    )
  };
}
const U = {
  Pure: di,
  ObjectRef({ objectId: t, digest: e, version: r }) {
    return {
      Object: {
        ImmOrOwned: {
          digest: e,
          version: r,
          objectId: _(t)
        }
      }
    };
  },
  SharedObjectRef({ objectId: t, mutable: e, initialSharedVersion: r }) {
    return {
      Object: {
        Shared: {
          mutable: e,
          initialSharedVersion: r,
          objectId: _(t)
        }
      }
    };
  },
  ReceivingRef({ objectId: t, digest: e, version: r }) {
    return {
      Object: {
        Receiving: {
          digest: e,
          version: r,
          objectId: _(t)
        }
      }
    };
  }
};
function Er(t) {
  return typeof t == "string" ? _(t) : "ImmOrOwned" in t.Object ? _(t.Object.ImmOrOwned.objectId) : "Receiving" in t.Object ? _(t.Object.Receiving.objectId) : _(t.Object.Shared.objectId);
}
function li(t) {
  return typeof t == "object" && "Object" in t && "Shared" in t.Object ? t.Object.Shared : void 0;
}
function hi(t) {
  var e;
  return ((e = li(t)) == null ? void 0 : e.mutable) ?? !1;
}
function fi(t) {
  function e(r, n) {
    return t(r, n);
  }
  return e.u8 = (r) => t(O.U8.serialize(r)), e.u16 = (r) => t(O.U16.serialize(r)), e.u32 = (r) => t(O.U32.serialize(r)), e.u64 = (r) => t(O.U64.serialize(r)), e.u128 = (r) => t(O.U128.serialize(r)), e.u256 = (r) => t(O.U256.serialize(r)), e.bool = (r) => t(O.Bool.serialize(r)), e.string = (r) => t(O.String.serialize(r)), e.address = (r) => t(O.Address.serialize(r)), e.id = e.address, e;
}
const gi = "object", pi = "ID", yi = "ascii", mi = "String", wi = "string", bi = "String", Si = "option", Ti = "Option", vi = {
  address: Kr,
  module: gi,
  name: pi
}, Ei = {
  address: Lt,
  module: yi,
  name: mi
}, ki = {
  address: Lt,
  module: wi,
  name: bi
}, xi = {
  address: Lt,
  module: Si,
  name: Ti
}, nt = (t, e) => t.address === e.address && t.module === e.module && t.name === e.name;
function Ii(t) {
  var r;
  const e = (r = lr(t)) == null ? void 0 : r.Struct;
  return (e == null ? void 0 : e.address) === "0x2" && (e == null ? void 0 : e.module) === "tx_context" && (e == null ? void 0 : e.name) === "TxContext";
}
function xt(t, e) {
  if (!(typeof e > "u") && typeof e !== t)
    throw new Error(`Expect ${e} to be ${t}, received ${typeof e}`);
}
const _i = ["Address", "Bool", "U8", "U16", "U32", "U64", "U128", "U256"];
function Rt(t, e) {
  if (typeof t == "string" && _i.includes(t)) {
    if (t in ["U8", "U16", "U32", "U64", "U128", "U256"])
      xt("number", e);
    else if (t === "Bool")
      xt("boolean", e);
    else if (t === "Address" && (xt("string", e), e && !oe(e)))
      throw new Error("Invalid Sui Address");
    return t.toLowerCase();
  } else if (typeof t == "string")
    throw new Error(`Unknown pure normalized type ${JSON.stringify(t, null, 2)}`);
  if ("Vector" in t) {
    if ((e === void 0 || typeof e == "string") && t.Vector === "U8")
      return "string";
    if (e !== void 0 && !Array.isArray(e))
      throw new Error(`Expect ${e} to be a array, received ${typeof e}`);
    const r = Rt(
      t.Vector,
      // undefined when argVal is empty
      e ? e[0] : void 0
    );
    return r === void 0 ? void 0 : `vector<${r}>`;
  }
  if ("Struct" in t) {
    if (nt(t.Struct, Ei))
      return "string";
    if (nt(t.Struct, ki))
      return "utf8string";
    if (nt(t.Struct, vi))
      return "address";
    if (nt(t.Struct, xi)) {
      const r = {
        Vector: t.Struct.typeArguments[0]
      };
      return Rt(r, e);
    }
  }
}
function Ai(t, e) {
  const r = Array.from(`${t}::`).map((s) => s.charCodeAt(0)), n = new Uint8Array(r.length + e.length);
  return n.set(r), n.set(e, r.length), Le(n, { dkLen: 32 });
}
function P(t, e) {
  return Vr(t, e);
}
const Oi = (t) => j([h({ None: j([b(!0), b(null)]) }), h({ Some: t })]), Ke = j([
  h({
    kind: b("Input"),
    index: re(),
    value: w(At()),
    type: w(b("object"))
  }),
  h({
    kind: b("Input"),
    index: re(),
    value: w(At()),
    type: b("pure")
  })
]), Ci = [
  Ke,
  h({ kind: b("GasCoin") }),
  h({ kind: b("Result"), index: re() }),
  h({
    kind: b("NestedResult"),
    index: re(),
    resultIndex: re()
  })
], le = j([...Ci]), un = h({
  kind: b("MoveCall"),
  target: z("target", l().validator),
  typeArguments: v(l()),
  arguments: v(le)
}), dn = h({
  kind: b("TransferObjects"),
  objects: v(le),
  address: le
}), ln = h({
  kind: b("SplitCoins"),
  coin: le,
  amounts: v(le)
}), hn = h({
  kind: b("MergeCoins"),
  destination: le,
  sources: v(le)
}), fn = h({
  kind: b("MakeMoveVec"),
  // TODO: ideally we should use `TypeTag` instead of `record()` here,
  // but TypeTag is recursively defined and it's tricky to define a
  // recursive struct in superstruct
  type: w(Oi(Y(l(), Wr()))),
  objects: v(le)
}), gn = h({
  kind: b("Publish"),
  modules: v(v(re())),
  dependencies: v(l())
}), pn = h({
  kind: b("Upgrade"),
  modules: v(v(re())),
  dependencies: v(l()),
  packageId: l(),
  ticket: le
}), Bi = [
  un,
  dn,
  ln,
  hn,
  gn,
  pn,
  fn
], ji = j([...Bi]), we = {
  MoveCall(t) {
    return P(
      {
        kind: "MoveCall",
        target: t.target,
        arguments: t.arguments ?? [],
        typeArguments: t.typeArguments ?? []
      },
      un
    );
  },
  TransferObjects(t, e) {
    return e.kind === "Input" && e.type === "pure" && typeof e.value != "object" && (e.value = U.Pure(O.Address.serialize(e.value))), P({ kind: "TransferObjects", objects: t, address: e }, dn);
  },
  SplitCoins(t, e) {
    return e.forEach((r) => {
      r.kind === "Input" && r.type === "pure" && typeof r.value != "object" && (r.value = U.Pure(O.U64.serialize(r.value)));
    }), P(
      {
        kind: "SplitCoins",
        coin: t,
        amounts: e
      },
      ln
    );
  },
  MergeCoins(t, e) {
    return P({ kind: "MergeCoins", destination: t, sources: e }, hn);
  },
  Publish({
    modules: t,
    dependencies: e
  }) {
    return P(
      {
        kind: "Publish",
        modules: t.map(
          (r) => typeof r == "string" ? Array.from(X(r)) : r
        ),
        dependencies: e.map((r) => te(r))
      },
      gn
    );
  },
  Upgrade({
    modules: t,
    dependencies: e,
    packageId: r,
    ticket: n
  }) {
    return P(
      {
        kind: "Upgrade",
        modules: t.map(
          (s) => typeof s == "string" ? Array.from(X(s)) : s
        ),
        dependencies: e.map((s) => te(s)),
        packageId: r,
        ticket: n
      },
      pn
    );
  },
  MakeMoveVec({
    type: t,
    objects: e
  }) {
    return P(
      {
        kind: "MakeMoveVec",
        type: t ? { Some: ue.parseFromStr(t) } : { None: null },
        objects: e
      },
      fn
    );
  }
}, Mi = w(
  C(
    j([h({ Epoch: re() }), h({ None: j([b(!0), b(null)]) })])
  )
), kr = z("StringEncodedBigint", (t) => {
  if (!["string", "number", "bigint"].includes(typeof t))
    return !1;
  try {
    return BigInt(t), !0;
  } catch {
    return !1;
  }
}), Ri = h({
  budget: w(kr),
  price: w(kr),
  payment: w(v(pe)),
  owner: w(l())
}), st = h({
  version: b(1),
  sender: w(l()),
  expiration: Mi,
  gasConfig: Ri,
  inputs: v(Ke),
  transactions: v(ji)
});
function xr(t) {
  return _(t).replace("0x", "");
}
class de {
  constructor(e) {
    this.version = 1, this.sender = e == null ? void 0 : e.sender, this.expiration = e == null ? void 0 : e.expiration, this.gasConfig = (e == null ? void 0 : e.gasConfig) ?? {}, this.inputs = (e == null ? void 0 : e.inputs) ?? [], this.transactions = (e == null ? void 0 : e.transactions) ?? [];
  }
  static fromKindBytes(e) {
    const r = O.TransactionKind.parse(e), n = "ProgrammableTransaction" in r ? r.ProgrammableTransaction : null;
    if (!n)
      throw new Error("Unable to deserialize from bytes.");
    const s = P(
      {
        version: 1,
        gasConfig: {},
        inputs: n.inputs.map(
          (i, a) => P(
            {
              kind: "Input",
              value: i,
              index: a,
              type: D(i, pt) ? "pure" : "object"
            },
            Ke
          )
        ),
        transactions: n.transactions
      },
      st
    );
    return de.restore(s);
  }
  static fromBytes(e) {
    var a;
    const r = O.TransactionData.parse(e), n = r == null ? void 0 : r.V1, s = "ProgrammableTransaction" in n.kind ? (a = n == null ? void 0 : n.kind) == null ? void 0 : a.ProgrammableTransaction : null;
    if (!n || !s)
      throw new Error("Unable to deserialize from bytes.");
    const i = P(
      {
        version: 1,
        sender: n.sender,
        expiration: n.expiration,
        gasConfig: n.gasData,
        inputs: s.inputs.map(
          (c, u) => P(
            {
              kind: "Input",
              value: c,
              index: u,
              type: D(c, pt) ? "pure" : "object"
            },
            Ke
          )
        ),
        transactions: s.transactions
      },
      st
    );
    return de.restore(i);
  }
  static restore(e) {
    _t(e, st);
    const r = new de();
    return Object.assign(r, e), r;
  }
  /**
   * Generate transaction digest.
   *
   * @param bytes BCS serialized transaction data
   * @returns transaction digest.
   */
  static getDigestFromBytes(e) {
    const r = Ai("TransactionData", e);
    return Ze(r);
  }
  build({
    maxSizeBytes: e = 1 / 0,
    overrides: r,
    onlyTransactionKind: n
  } = {}) {
    const s = this.inputs.map((f) => (_t(f.value, yt), f.value)), i = {
      ProgrammableTransaction: {
        inputs: s,
        transactions: this.transactions
      }
    };
    if (n)
      return O.TransactionKind.serialize(i, { maxSize: e }).toBytes();
    const a = (r == null ? void 0 : r.expiration) ?? this.expiration, c = (r == null ? void 0 : r.sender) ?? this.sender, u = { ...this.gasConfig, ...r == null ? void 0 : r.gasConfig };
    if (!c)
      throw new Error("Missing transaction sender");
    if (!u.budget)
      throw new Error("Missing gas budget");
    if (!u.payment)
      throw new Error("Missing gas payment");
    if (!u.price)
      throw new Error("Missing gas price");
    const d = {
      sender: xr(c),
      expiration: a || { None: !0 },
      gasData: {
        payment: u.payment,
        owner: xr(this.gasConfig.owner ?? c),
        price: BigInt(u.price),
        budget: BigInt(u.budget)
      },
      kind: {
        ProgrammableTransaction: {
          inputs: s,
          transactions: this.transactions
        }
      }
    };
    return O.TransactionData.serialize(
      { V1: d },
      { maxSize: e }
    ).toBytes();
  }
  getDigest() {
    const e = this.build({ onlyTransactionKind: !1 });
    return de.getDigestFromBytes(e);
  }
  snapshot() {
    return P(this, st);
  }
}
var hr = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, k = (t, e, r) => (hr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ie = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, it = (t, e, r, n) => (hr(t, e, "write to private field"), e.set(t, r), r), R = (t, e, r) => (hr(t, e, "access private method"), r), T, Ue, ot, Ne, ct, ye, ke, fr, yn, gr, mn, pr, wn, yr, bn, ut, $t;
const $i = {
  maxPureArgumentSize: 16 * 1024,
  maxTxGas: 5e10,
  maxGasObjects: 256,
  maxTxSizeBytes: 128 * 1024
};
function Pi(t) {
  const e = { kind: "Result", index: t }, r = [], n = (s) => r[s] ?? (r[s] = {
    kind: "NestedResult",
    index: t,
    resultIndex: s
  });
  return new Proxy(e, {
    set() {
      throw new Error(
        "The transaction result is a proxy, and does not support setting properties directly"
      );
    },
    // TODO: Instead of making this return a concrete argument, we should ideally
    // make it reference-based (so that this gets resolved at build-time), which
    // allows re-ordering transactions.
    get(s, i) {
      if (i in s)
        return Reflect.get(s, i);
      if (i === Symbol.iterator)
        return function* () {
          let c = 0;
          for (; ; )
            yield n(c), c++;
        };
      if (typeof i == "symbol")
        return;
      const a = parseInt(i, 10);
      if (!(Number.isNaN(a) || a < 0))
        return n(a);
    }
  });
}
function Ui(t) {
  const e = lr(t);
  return e ? e.Struct.address === "0x2" && e.Struct.module === "transfer" && e.Struct.name === "Receiving" : !1;
}
function Ge(t) {
  if (!t.client)
    throw new Error(
      "No provider passed to Transaction#build, but transaction data was not sufficient to build offline."
    );
  return t.client;
}
const Sn = Symbol.for("@mysten/transaction"), It = {
  // The maximum gas that is allowed.
  maxTxGas: "max_tx_gas",
  // The maximum number of gas objects that can be selected for one transaction.
  maxGasObjects: "max_gas_payment_objects",
  // The maximum size (in bytes) that the transaction can be:
  maxTxSizeBytes: "max_tx_size_bytes",
  // The maximum size (in bytes) that pure arguments can be:
  maxPureArgumentSize: "max_pure_argument_size"
}, Ni = 1000n, Di = 50, zi = (t, e) => Array.from(
  { length: Math.ceil(t.length / e) },
  (r, n) => t.slice(n * e, n * e + e)
);
function Vi(t) {
  return !!t && typeof t == "object" && t[Sn] === !0;
}
const Pt = class {
  constructor(t) {
    ie(this, Ue), ie(this, Ne), ie(this, ye), ie(this, fr), ie(this, gr), ie(this, pr), ie(this, yr), ie(this, ut), ie(this, T, void 0), it(this, T, new de(
      t ? t.blockData : void 0
    ));
  }
  /**
   * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
   * Supports either a byte array, or base64-encoded bytes.
   */
  static fromKind(t) {
    const e = new Pt();
    return it(e, T, de.fromKindBytes(
      typeof t == "string" ? X(t) : t
    )), e;
  }
  /**
   * Converts from a serialized transaction format to a `Transaction` class.
   * There are two supported serialized formats:
   * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
   * - A byte array (or base64-encoded bytes) containing BCS transaction data.
   */
  static from(t) {
    const e = new Pt();
    return typeof t != "string" || !t.startsWith("{") ? it(e, T, de.fromBytes(
      typeof t == "string" ? X(t) : t
    )) : it(e, T, de.restore(JSON.parse(t))), e;
  }
  setSender(t) {
    k(this, T).sender = t;
  }
  /**
   * Sets the sender only if it has not already been set.
   * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
   */
  setSenderIfNotSet(t) {
    k(this, T).sender || (k(this, T).sender = t);
  }
  setExpiration(t) {
    k(this, T).expiration = t;
  }
  setGasPrice(t) {
    k(this, T).gasConfig.price = String(t);
  }
  setGasBudget(t) {
    k(this, T).gasConfig.budget = String(t);
  }
  setGasOwner(t) {
    k(this, T).gasConfig.owner = t;
  }
  setGasPayment(t) {
    k(this, T).gasConfig.payment = t.map((e) => Lr(e, pe));
  }
  /** Get a snapshot of the transaction data, in JSON form: */
  get blockData() {
    return k(this, T).snapshot();
  }
  // Used to brand transaction classes so that they can be identified, even between multiple copies
  // of the builder.
  get [Sn]() {
    return !0;
  }
  // Temporary workaround for the wallet interface accidentally serializing transaction blocks via postMessage
  get pure() {
    return Object.defineProperty(this, "pure", {
      enumerable: !1,
      value: fi((t, e) => zt(t) ? R(this, Ue, ot).call(this, "pure", {
        Pure: Array.from(t.toBytes())
      }) : R(this, Ue, ot).call(this, "pure", t instanceof Uint8Array ? U.Pure(t) : e ? U.Pure(t, e) : t))
    }), this.pure;
  }
  /** Returns an argument for the gas coin, to be used in a transaction. */
  get gas() {
    return { kind: "GasCoin" };
  }
  /**
   * Add a new object input to the transaction.
   */
  object(t) {
    if (typeof t == "object" && "kind" in t)
      return t;
    const e = Er(t), r = k(this, T).inputs.find(
      (n) => n.type === "object" && e === Er(n.value)
    );
    return r && D(r.value, Mt) && "Shared" in r.value.Object && D(t, Mt) && "Shared" in t.Object && (r.value.Object.Shared.mutable = r.value.Object.Shared.mutable || t.Object.Shared.mutable), r ?? R(this, Ue, ot).call(this, "object", typeof t == "string" ? _(t) : t);
  }
  /**
   * Add a new object input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  objectRef(...t) {
    return this.object(U.ObjectRef(...t));
  }
  /**
   * Add a new receiving input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  receivingRef(...t) {
    return this.object(U.ReceivingRef(...t));
  }
  /**
   * Add a new shared object input to the transaction using the fully-resolved shared object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */
  sharedObjectRef(...t) {
    return this.object(U.SharedObjectRef(...t));
  }
  /** Add a transaction to the transaction block. */
  add(t) {
    const e = k(this, T).transactions.push(t);
    return Pi(e - 1);
  }
  // Method shorthands:
  splitCoins(t, e) {
    return this.add(
      we.SplitCoins(
        typeof t == "string" ? this.object(t) : t,
        e.map(
          (r) => typeof r == "number" || typeof r == "bigint" || typeof r == "string" ? this.pure.u64(r) : R(this, Ne, ct).call(this, r)
        )
      )
    );
  }
  mergeCoins(t, e) {
    return this.add(
      we.MergeCoins(
        typeof t == "string" ? this.object(t) : t,
        e.map((r) => typeof r == "string" ? this.object(r) : r)
      )
    );
  }
  publish({ modules: t, dependencies: e }) {
    return this.add(
      we.Publish({
        modules: t,
        dependencies: e
      })
    );
  }
  upgrade({
    modules: t,
    dependencies: e,
    packageId: r,
    ticket: n
  }) {
    return this.add(
      we.Upgrade({
        modules: t,
        dependencies: e,
        packageId: r,
        ticket: typeof n == "string" ? this.object(n) : n
      })
    );
  }
  moveCall({
    arguments: t,
    typeArguments: e,
    target: r
  }) {
    return this.add(
      we.MoveCall({
        arguments: t == null ? void 0 : t.map((n) => R(this, Ne, ct).call(this, n)),
        typeArguments: e,
        target: r
      })
    );
  }
  transferObjects(t, e) {
    return this.add(
      we.TransferObjects(
        t.map((r) => typeof r == "string" ? this.object(r) : r),
        typeof e == "string" ? this.pure.address(e) : R(this, Ne, ct).call(this, e)
      )
    );
  }
  makeMoveVec({
    type: t,
    objects: e
  }) {
    return this.add(
      we.MakeMoveVec({
        type: t,
        objects: e.map((r) => typeof r == "string" ? this.object(r) : r)
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
    return JSON.stringify(k(this, T).snapshot());
  }
  /** Build the transaction to BCS bytes, and sign it with the provided keypair. */
  async sign(t) {
    const { signer: e, ...r } = t, n = await this.build(r);
    return e.signTransactionBlock(n);
  }
  /** Build the transaction to BCS bytes. */
  async build(t = {}) {
    return await R(this, ut, $t).call(this, t), k(this, T).build({
      maxSizeBytes: R(this, ye, ke).call(this, "maxTxSizeBytes", t),
      onlyTransactionKind: t.onlyTransactionKind
    });
  }
  /** Derive transaction digest */
  async getDigest(t = {}) {
    return await R(this, ut, $t).call(this, t), k(this, T).getDigest();
  }
};
let Li = Pt;
T = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakSet();
ot = function(t, e) {
  const r = k(this, T).inputs.length, n = P(
    {
      kind: "Input",
      // bigints can't be serialized to JSON, so just string-convert them here:
      value: typeof e == "bigint" ? String(e) : e,
      index: r,
      type: t
    },
    Ke
  );
  return k(this, T).inputs.push(n), n;
};
Ne = /* @__PURE__ */ new WeakSet();
ct = function(t) {
  return zt(t) ? this.pure(t) : t;
};
ye = /* @__PURE__ */ new WeakSet();
ke = function(t, { protocolConfig: e, limits: r }) {
  if (r && typeof r[t] == "number")
    return r[t];
  if (!e)
    return $i[t];
  const n = e == null ? void 0 : e.attributes[It[t]];
  if (!n)
    throw new Error(`Missing expected protocol config: "${It[t]}"`);
  const s = "u64" in n ? n.u64 : "u32" in n ? n.u32 : n.f64;
  if (!s)
    throw new Error(`Unexpected protocol config value found for: "${It[t]}"`);
  return Number(s);
};
fr = /* @__PURE__ */ new WeakSet();
yn = function(t) {
  const e = R(this, ye, ke).call(this, "maxPureArgumentSize", t);
  k(this, T).inputs.forEach((r, n) => {
    if (D(r.value, pt) && r.value.Pure.length > e)
      throw new Error(
        `Input at index ${n} is too large, max pure input size is ${e} bytes, got ${r.value.Pure.length} bytes`
      );
  });
};
gr = /* @__PURE__ */ new WeakSet();
mn = async function(t) {
  if (k(this, T).gasConfig.payment) {
    const s = R(this, ye, ke).call(this, "maxGasObjects", t);
    if (k(this, T).gasConfig.payment.length > s)
      throw new Error(`Payment objects exceed maximum amount: ${s}`);
  }
  if (t.onlyTransactionKind || k(this, T).gasConfig.payment)
    return;
  const e = k(this, T).gasConfig.owner ?? k(this, T).sender, n = (await Ge(t).getCoins({
    owner: e,
    coinType: ms
  })).data.filter((s) => !k(this, T).inputs.find((a) => D(a.value, yt) && "Object" in a.value && "ImmOrOwned" in a.value.Object ? s.coinObjectId === a.value.Object.ImmOrOwned.objectId : !1)).slice(0, R(this, ye, ke).call(this, "maxGasObjects", t) - 1).map((s) => ({
    objectId: s.coinObjectId,
    digest: s.digest,
    version: s.version
  }));
  if (!n.length)
    throw new Error("No valid gas coins found for the transaction.");
  this.setGasPayment(n);
};
pr = /* @__PURE__ */ new WeakSet();
wn = async function(t) {
  t.onlyTransactionKind || k(this, T).gasConfig.price || this.setGasPrice(await Ge(t).getReferenceGasPrice());
};
yr = /* @__PURE__ */ new WeakSet();
bn = async function(t) {
  const { inputs: e, transactions: r } = k(this, T), n = [], s = [];
  if (e.forEach((i) => {
    if (i.type === "object" && typeof i.value == "string") {
      s.push({ id: _(i.value), input: i });
      return;
    }
  }), r.forEach((i) => {
    if (i.kind === "MoveCall" && i.arguments.some(
      (c) => c.kind === "Input" && !D(e[c.index].value, yt)
    ) && n.push(i), i.kind === "SplitCoins" && i.amounts.forEach((a) => {
      if (a.kind === "Input") {
        const c = e[a.index];
        typeof c.value != "object" && (c.value = U.Pure(O.U64.serialize(c.value)));
      }
    }), i.kind === "TransferObjects" && i.address.kind === "Input") {
      const a = e[i.address.index];
      typeof a.value != "object" && (a.value = U.Pure(O.Address.serialize(a.value)));
    }
  }), n.length && await Promise.all(
    n.map(async (i) => {
      const [a, c, u] = i.target.split("::"), d = await Ge(t).getNormalizedMoveFunction({
        package: te(a),
        module: c,
        function: u
      }), g = d.parameters.length > 0 && Ii(d.parameters.at(-1)) ? d.parameters.slice(0, d.parameters.length - 1) : d.parameters;
      if (g.length !== i.arguments.length)
        throw new Error("Incorrect number of arguments.");
      g.forEach((y, p) => {
        const m = i.arguments[p];
        if (m.kind !== "Input")
          return;
        const S = e[m.index];
        if (D(S.value, yt))
          return;
        const E = S.value, B = Rt(y, E);
        if (B) {
          S.value = U.Pure(E, B);
          return;
        }
        if (lr(y) != null || typeof y == "object" && "TypeParameter" in y) {
          if (typeof E != "string")
            throw new Error(
              `Expect the argument to be an object id string, got ${JSON.stringify(
                E,
                null,
                2
              )}`
            );
          s.push({
            id: E,
            input: S,
            normalizedType: y
          });
          return;
        }
        throw new Error(
          `Unknown call arg type ${JSON.stringify(y, null, 2)} for value ${JSON.stringify(
            E,
            null,
            2
          )}`
        );
      });
    })
  ), s.length) {
    const i = [...new Set(s.map(({ id: f }) => f))], a = zi(i, Di), c = (await Promise.all(
      a.map(
        (f) => Ge(t).multiGetObjects({
          ids: f,
          options: { showOwner: !0 }
        })
      )
    )).flat();
    let u = new Map(
      i.map((f, g) => [f, c[g]])
    );
    const d = Array.from(u).filter(([f, g]) => g.error).map(([f, g]) => f);
    if (d.length)
      throw new Error(`The following input objects are invalid: ${d.join(", ")}`);
    s.forEach(({ id: f, input: g, normalizedType: y }) => {
      var E;
      const p = u.get(f), m = (E = p.data) == null ? void 0 : E.owner, S = m && typeof m == "object" && "Shared" in m ? m.Shared.initial_shared_version : void 0;
      if (S) {
        const B = y != null && jt(y) == null && cn(y) == null, M = hi(g.value) || B || y != null && jt(y) != null;
        g.value = U.SharedObjectRef({
          objectId: f,
          initialSharedVersion: S,
          mutable: M
        });
      } else
        y && Ui(y) ? g.value = U.ReceivingRef(vr(p)) : g.value = U.ObjectRef(vr(p));
    });
  }
};
ut = /* @__PURE__ */ new WeakSet();
$t = async function(t) {
  if (!t.onlyTransactionKind && !k(this, T).sender)
    throw new Error("Missing transaction sender");
  if (!t.protocolConfig && !t.limits && t.client && (t.protocolConfig = await t.client.getProtocolConfig()), await Promise.all([R(this, pr, wn).call(this, t), R(this, yr, bn).call(this, t)]), !t.onlyTransactionKind && (await R(this, gr, mn).call(this, t), !k(this, T).gasConfig.budget)) {
    const e = await Ge(t).dryRunTransactionBlock({
      transactionBlock: k(this, T).build({
        maxSizeBytes: R(this, ye, ke).call(this, "maxTxSizeBytes", t),
        overrides: {
          gasConfig: {
            budget: String(R(this, ye, ke).call(this, "maxTxGas", t)),
            payment: []
          }
        }
      })
    });
    if (e.effects.status.status !== "success")
      throw new Error(
        `Dry run failed, could not automatically determine a budget: ${e.effects.status.error}`,
        { cause: e }
      );
    const r = Ni * BigInt(this.blockData.gasConfig.price || 1n), n = BigInt(e.effects.gasUsed.computationCost) + r, s = n + BigInt(e.effects.gasUsed.storageCost) - BigInt(e.effects.gasUsed.storageRebate);
    this.setGasBudget(
      s > n ? s : n
    );
  }
  R(this, fr, yn).call(this, t);
};
const qi = Symbol.for("@mysten/SuiClient");
class Fi {
  get [qi]() {
    return !0;
  }
  /**
   * Establish a connection to a Sui RPC endpoint
   *
   * @param options configuration options for the API Client
   */
  constructor(e) {
    this.transport = e.transport ?? new Os({ url: e.url });
  }
  async getRpcApiVersion() {
    return (await this.transport.request({
      method: "rpc.discover",
      params: []
    })).info.version;
  }
  /**
   * Get all Coin<`coin_type`> objects owned by an address.
   */
  async getCoins(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({
      method: "suix_getCoins",
      params: [e.owner, e.coinType, e.cursor, e.limit]
    });
  }
  /**
   * Get all Coin objects owned by an address.
   */
  async getAllCoins(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({
      method: "suix_getAllCoins",
      params: [e.owner, e.cursor, e.limit]
    });
  }
  /**
   * Get the total coin balance for one coin type, owned by the address owner.
   */
  async getBalance(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({
      method: "suix_getBalance",
      params: [e.owner, e.coinType]
    });
  }
  /**
   * Get the total coin balance for all coin types, owned by the address owner.
   */
  async getAllBalances(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({ method: "suix_getAllBalances", params: [e.owner] });
  }
  /**
   * Fetch CoinMetadata for a given coin type
   */
  async getCoinMetadata(e) {
    return await this.transport.request({
      method: "suix_getCoinMetadata",
      params: [e.coinType]
    });
  }
  /**
   *  Fetch total supply for a coin
   */
  async getTotalSupply(e) {
    return await this.transport.request({
      method: "suix_getTotalSupply",
      params: [e.coinType]
    });
  }
  /**
   * Invoke any RPC method
   * @param method the method to be invoked
   * @param args the arguments to be passed to the RPC request
   */
  async call(e, r) {
    return await this.transport.request({ method: e, params: r });
  }
  /**
   * Get Move function argument types like read, write and full access
   */
  async getMoveFunctionArgTypes(e) {
    return await this.transport.request({
      method: "sui_getMoveFunctionArgTypes",
      params: [e.package, e.module, e.function]
    });
  }
  /**
   * Get a map from module name to
   * structured representations of Move modules
   */
  async getNormalizedMoveModulesByPackage(e) {
    return await this.transport.request({
      method: "sui_getNormalizedMoveModulesByPackage",
      params: [e.package]
    });
  }
  /**
   * Get a structured representation of Move module
   */
  async getNormalizedMoveModule(e) {
    return await this.transport.request({
      method: "sui_getNormalizedMoveModule",
      params: [e.package, e.module]
    });
  }
  /**
   * Get a structured representation of Move function
   */
  async getNormalizedMoveFunction(e) {
    return await this.transport.request({
      method: "sui_getNormalizedMoveFunction",
      params: [e.package, e.module, e.function]
    });
  }
  /**
   * Get a structured representation of Move struct
   */
  async getNormalizedMoveStruct(e) {
    return await this.transport.request({
      method: "sui_getNormalizedMoveStruct",
      params: [e.package, e.module, e.struct]
    });
  }
  /**
   * Get all objects owned by an address
   */
  async getOwnedObjects(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({
      method: "suix_getOwnedObjects",
      params: [
        e.owner,
        {
          filter: e.filter,
          options: e.options
        },
        e.cursor,
        e.limit
      ]
    });
  }
  /**
   * Get details about an object
   */
  async getObject(e) {
    if (!e.id || !tt(te(e.id)))
      throw new Error("Invalid Sui Object id");
    return await this.transport.request({
      method: "sui_getObject",
      params: [e.id, e.options]
    });
  }
  async tryGetPastObject(e) {
    return await this.transport.request({
      method: "sui_tryGetPastObject",
      params: [e.id, e.version, e.options]
    });
  }
  /**
   * Batch get details about a list of objects. If any of the object ids are duplicates the call will fail
   */
  async multiGetObjects(e) {
    if (e.ids.forEach((n) => {
      if (!n || !tt(te(n)))
        throw new Error(`Invalid Sui Object id ${n}`);
    }), e.ids.length !== new Set(e.ids).size)
      throw new Error(`Duplicate object ids in batch call ${e.ids}`);
    return await this.transport.request({
      method: "sui_multiGetObjects",
      params: [e.ids, e.options]
    });
  }
  /**
   * Get transaction blocks for a given query criteria
   */
  async queryTransactionBlocks(e) {
    return await this.transport.request({
      method: "suix_queryTransactionBlocks",
      params: [
        {
          filter: e.filter,
          options: e.options
        },
        e.cursor,
        e.limit,
        (e.order || "descending") === "descending"
      ]
    });
  }
  async getTransactionBlock(e) {
    if (!Sr(e.digest))
      throw new Error("Invalid Transaction digest");
    return await this.transport.request({
      method: "sui_getTransactionBlock",
      params: [e.digest, e.options]
    });
  }
  async multiGetTransactionBlocks(e) {
    if (e.digests.forEach((n) => {
      if (!Sr(n))
        throw new Error(`Invalid Transaction digest ${n}`);
    }), e.digests.length !== new Set(e.digests).size)
      throw new Error(`Duplicate digests in batch call ${e.digests}`);
    return await this.transport.request({
      method: "sui_multiGetTransactionBlocks",
      params: [e.digests, e.options]
    });
  }
  async executeTransactionBlock(e) {
    return await this.transport.request({
      method: "sui_executeTransactionBlock",
      params: [
        typeof e.transactionBlock == "string" ? e.transactionBlock : N(e.transactionBlock),
        Array.isArray(e.signature) ? e.signature : [e.signature],
        e.options,
        e.requestType
      ]
    });
  }
  async signAndExecuteTransactionBlock({
    transactionBlock: e,
    signer: r,
    ...n
  }) {
    let s;
    e instanceof Uint8Array ? s = e : (e.setSenderIfNotSet(r.toSuiAddress()), s = await e.build({ client: this }));
    const { signature: i, bytes: a } = await r.signTransactionBlock(s);
    return this.executeTransactionBlock({
      transactionBlock: a,
      signature: i,
      ...n
    });
  }
  /**
   * Get total number of transactions
   */
  async getTotalTransactionBlocks() {
    const e = await this.transport.request({
      method: "sui_getTotalTransactionBlocks",
      params: []
    });
    return BigInt(e);
  }
  /**
   * Getting the reference gas price for the network
   */
  async getReferenceGasPrice() {
    const e = await this.transport.request({
      method: "suix_getReferenceGasPrice",
      params: []
    });
    return BigInt(e);
  }
  /**
   * Return the delegated stakes for an address
   */
  async getStakes(e) {
    if (!e.owner || !oe(_(e.owner)))
      throw new Error("Invalid Sui address");
    return await this.transport.request({ method: "suix_getStakes", params: [e.owner] });
  }
  /**
   * Return the delegated stakes queried by id.
   */
  async getStakesByIds(e) {
    return e.stakedSuiIds.forEach((r) => {
      if (!r || !tt(te(r)))
        throw new Error(`Invalid Sui Stake id ${r}`);
    }), await this.transport.request({
      method: "suix_getStakesByIds",
      params: [e.stakedSuiIds]
    });
  }
  /**
   * Return the latest system state content.
   */
  async getLatestSuiSystemState() {
    return await this.transport.request({ method: "suix_getLatestSuiSystemState", params: [] });
  }
  /**
   * Get events for a given query criteria
   */
  async queryEvents(e) {
    return await this.transport.request({
      method: "suix_queryEvents",
      params: [
        e.query,
        e.cursor,
        e.limit,
        (e.order || "descending") === "descending"
      ]
    });
  }
  /**
   * Subscribe to get notifications whenever an event matching the filter occurs
   */
  async subscribeEvent(e) {
    return this.transport.subscribe({
      method: "suix_subscribeEvent",
      unsubscribe: "suix_unsubscribeEvent",
      params: [e.filter],
      onMessage: e.onMessage
    });
  }
  async subscribeTransaction(e) {
    return this.transport.subscribe({
      method: "suix_subscribeTransaction",
      unsubscribe: "suix_unsubscribeTransaction",
      params: [e.filter],
      onMessage: e.onMessage
    });
  }
  /**
   * Runs the transaction block in dev-inspect mode. Which allows for nearly any
   * transaction (or Move call) with any arguments. Detailed results are
   * provided, including both the transaction effects and any return values.
   */
  async devInspectTransactionBlock(e) {
    var n;
    let r;
    if (Vi(e.transactionBlock))
      e.transactionBlock.setSenderIfNotSet(e.sender), r = N(
        await e.transactionBlock.build({
          client: this,
          onlyTransactionKind: !0
        })
      );
    else if (typeof e.transactionBlock == "string")
      r = e.transactionBlock;
    else if (e.transactionBlock instanceof Uint8Array)
      r = N(e.transactionBlock);
    else
      throw new Error("Unknown transaction block format.");
    return await this.transport.request({
      method: "sui_devInspectTransactionBlock",
      params: [e.sender, r, (n = e.gasPrice) == null ? void 0 : n.toString(), e.epoch]
    });
  }
  /**
   * Dry run a transaction block and return the result.
   */
  async dryRunTransactionBlock(e) {
    return await this.transport.request({
      method: "sui_dryRunTransactionBlock",
      params: [
        typeof e.transactionBlock == "string" ? e.transactionBlock : N(e.transactionBlock)
      ]
    });
  }
  /**
   * Return the list of dynamic field objects owned by an object
   */
  async getDynamicFields(e) {
    if (!e.parentId || !tt(te(e.parentId)))
      throw new Error("Invalid Sui Object id");
    return await this.transport.request({
      method: "suix_getDynamicFields",
      params: [e.parentId, e.cursor, e.limit]
    });
  }
  /**
   * Return the dynamic field object information for a specified object
   */
  async getDynamicFieldObject(e) {
    return await this.transport.request({
      method: "suix_getDynamicFieldObject",
      params: [e.parentId, e.name]
    });
  }
  /**
   * Get the sequence number of the latest checkpoint that has been executed
   */
  async getLatestCheckpointSequenceNumber() {
    const e = await this.transport.request({
      method: "sui_getLatestCheckpointSequenceNumber",
      params: []
    });
    return String(e);
  }
  /**
   * Returns information about a given checkpoint
   */
  async getCheckpoint(e) {
    return await this.transport.request({ method: "sui_getCheckpoint", params: [e.id] });
  }
  /**
   * Returns historical checkpoints paginated
   */
  async getCheckpoints(e) {
    return await this.transport.request({
      method: "sui_getCheckpoints",
      params: [e.cursor, e == null ? void 0 : e.limit, e.descendingOrder]
    });
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getCommitteeInfo(e) {
    return await this.transport.request({
      method: "suix_getCommitteeInfo",
      params: [e == null ? void 0 : e.epoch]
    });
  }
  async getNetworkMetrics() {
    return await this.transport.request({ method: "suix_getNetworkMetrics", params: [] });
  }
  async getAddressMetrics() {
    return await this.transport.request({ method: "suix_getLatestAddressMetrics", params: [] });
  }
  async getEpochMetrics(e) {
    return await this.transport.request({
      method: "suix_getEpochMetrics",
      params: [e == null ? void 0 : e.cursor, e == null ? void 0 : e.limit, e == null ? void 0 : e.descendingOrder]
    });
  }
  async getAllEpochAddressMetrics(e) {
    return await this.transport.request({
      method: "suix_getAllEpochAddressMetrics",
      params: [e == null ? void 0 : e.descendingOrder]
    });
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getEpochs(e) {
    return await this.transport.request({
      method: "suix_getEpochs",
      params: [e == null ? void 0 : e.cursor, e == null ? void 0 : e.limit, e == null ? void 0 : e.descendingOrder]
    });
  }
  /**
   * Returns list of top move calls by usage
   */
  async getMoveCallMetrics() {
    return await this.transport.request({ method: "suix_getMoveCallMetrics", params: [] });
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getCurrentEpoch() {
    return await this.transport.request({ method: "suix_getCurrentEpoch", params: [] });
  }
  /**
   * Return the Validators APYs
   */
  async getValidatorsApy() {
    return await this.transport.request({ method: "suix_getValidatorsApy", params: [] });
  }
  // TODO: Migrate this to `sui_getChainIdentifier` once it is widely available.
  async getChainIdentifier() {
    const e = await this.getCheckpoint({ id: "0" }), r = Je(e.digest);
    return xe(r.slice(0, 4));
  }
  async resolveNameServiceAddress(e) {
    return await this.transport.request({
      method: "suix_resolveNameServiceAddress",
      params: [e.name]
    });
  }
  async resolveNameServiceNames(e) {
    return await this.transport.request({
      method: "suix_resolveNameServiceNames",
      params: [e.address, e.cursor, e.limit]
    });
  }
  async getProtocolConfig(e) {
    return await this.transport.request({
      method: "sui_getProtocolConfig",
      params: [e == null ? void 0 : e.version]
    });
  }
  /**
   * Wait for a transaction block result to be available over the API.
   * This can be used in conjunction with `executeTransactionBlock` to wait for the transaction to
   * be available via the API.
   * This currently polls the `getTransactionBlock` API to check for the transaction.
   */
  async waitForTransactionBlock({
    signal: e,
    timeout: r = 60 * 1e3,
    pollInterval: n = 2 * 1e3,
    ...s
  }) {
    const i = AbortSignal.timeout(r), a = new Promise((c, u) => {
      i.addEventListener("abort", () => u(i.reason));
    });
    for (a.catch(() => {
    }); !i.aborted; ) {
      e == null || e.throwIfAborted();
      try {
        return await this.getTransactionBlock(s);
      } catch {
        await Promise.race([
          new Promise((u) => setTimeout(u, n)),
          a
        ]);
      }
    }
    throw i.throwIfAborted(), new Error("Unexpected error while waiting for transaction block.");
  }
}
class Tn extends Ln {
}
const mt = "Sui", vn = (t) => {
  var r;
  const e = (r = t.data) == null ? void 0 : r.content;
  return e && e.dataType === "moveObject" ? e.fields : null;
}, ja = (t, e) => {
  try {
    return _r(t) === _r(e);
  } catch {
    return !1;
  }
}, Ma = (t) => (t == null ? void 0 : t.type) === "created", Ra = (t) => (t == null ? void 0 : t.type) === "published";
function Wi(t) {
  return Array.isArray(t);
}
function mr(t) {
  return !Array.isArray(t) && typeof t == "object" && "fields" in t && "type" in t;
}
function Ki(t) {
  return typeof t == "object" && !Wi(t) && !mr(t);
}
const Gi = 16 * 1024, $a = (t) => O.ser("vector<u8>", t, { maxSize: Gi }).toBytes(), Pa = async (t, e) => {
  const { data: r, error: n } = await t.getObject({
    id: e,
    options: { showContent: !0 }
  });
  if (n)
    throw new Error("Error getting object: " + n);
  if (!r || !mr(r.content))
    throw new Error(`Cannot get oject for state id ${e}: ` + r);
  return Ji(r.content.type);
}, Hi = async (t, e) => {
  if (!oe(e))
    throw new Error(`Invalid object ID: ${e}`);
  const r = await t.getObject({
    id: e,
    options: {
      showContent: !0
    }
  });
  return vn(r);
};
async function Ua(t, e) {
  let r, n;
  do {
    const a = await t.getDynamicFields({
      parentId: e,
      cursor: n
    });
    r = a.data.find((c) => c.name.type.endsWith("CurrentPackage")), n = a.hasNextPage ? a.nextCursor : null;
  } while (n && !r);
  if (!r)
    throw new Error("CurrentPackage not found");
  const s = await t.getObject({
    id: r.objectId,
    options: {
      showContent: !0
    }
  }), i = vn(s);
  if (!i || !Ki(i))
    throw new Error("Unable to get fields from object response");
  if (!("value" in i) || !mr(i.value))
    throw new Error("Unable to get package id");
  return i.value.fields.package;
}
const Na = async (t, e, r) => {
  let n = null, s = null, i = null, a;
  do {
    if (i = await t.getOwnedObjects({
      owner: r,
      filter: {
        StructType: `${e}::emitter::EmitterCap`
      },
      options: {
        showContent: !0
      },
      cursor: a
    }), !i || !i.data)
      throw Error("Failed to get owned objects");
    for (const c of i.data) {
      if (!c.data)
        continue;
      const { version: u, objectId: d } = c.data;
      (n === null || u < n) && (n = u, s = d);
    }
    a = i.hasNextPage ? i.nextCursor : void 0;
  } while (a);
  return s;
}, Da = async (t, e) => {
  const r = new Li(), [n] = r.publish({
    modules: t.modules.map((s) => Array.from(jn.decode(s))),
    dependencies: t.dependencies.map((s) => te(s))
  });
  return r.transferObjects([n], r.pure(e)), r;
}, ae = class ae extends qn {
  constructor(e, r) {
    super(e, r ?? Mn(e, ae._platform));
  }
  getRpc(e) {
    if (e in this.config)
      return new Fi({ url: this.config[e].rpc });
    throw new Error("No configuration available for chain: " + e);
  }
  getChain(e) {
    if (e in this.config)
      return new Tn(e, this);
    throw new Error("No configuration available for chain: " + e);
  }
  static nativeTokenId(e, r) {
    if (!ae.isSupportedChain(r))
      throw new Error(`invalid chain for ${mt}: ${r}`);
    return Rn.tokenId(r, ws);
  }
  static isNativeTokenId(e, r, n) {
    return !ae.isSupportedChain(r) || n.chain !== r ? !1 : this.nativeTokenId(e, r) === n;
  }
  static isSupportedChain(e) {
    return $n(e) === ae._platform;
  }
  static async getDecimals(e, r, n) {
    if (bt(n))
      return Pn(ae._platform);
    const s = new me(n);
    try {
      const a = await Hi(r, s.toString());
      if (a && "decimals" in a)
        return a.decimals;
    } catch {
    }
    const i = await r.getCoinMetadata({ coinType: s.getCoinType() });
    if (i === null)
      throw new Error(`Can't fetch decimals for token ${s.toString()}`);
    return i.decimals;
  }
  static async getBalance(e, r, n, s) {
    if (bt(s)) {
      const { totalBalance: a } = await r.getBalance({
        owner: n
      });
      return BigInt(a);
    }
    const { totalBalance: i } = await r.getBalance({
      owner: n,
      coinType: s.toString()
    });
    return BigInt(i);
  }
  static async getBalances(e, r, n, s) {
    return (await Promise.all(s.map(async (a) => {
      const c = await this.getBalance(e, r, n, a);
      return { [bt(a) ? "native" : new me(a).toString()]: c };
    }))).reduce((a, c) => Object.assign(a, c), {});
  }
  static async sendWait(e, r, n) {
    const s = [];
    for (const i of n) {
      const a = await r.executeTransactionBlock(i);
      await r.waitForTransactionBlock({ digest: a.digest }), s.push(a.digest);
    }
    return s;
  }
  static async getLatestBlock(e) {
    return Number(await e.getLatestCheckpointSequenceNumber());
  }
  static async getLatestFinalizedBlock(e) {
    return this.getLatestBlock(e);
  }
  static chainFromChainId(e) {
    const r = Un(ae._platform, e);
    if (r === void 0)
      throw new Error(`Unknown native chain id ${e}`);
    const [n, s] = r;
    return [n, s];
  }
  static async chainFromRpc(e) {
    const r = await e.call("sui_getChainIdentifier", []);
    return this.chainFromChainId(r);
  }
};
ee(ae, "_platform", mt);
let je = ae;
const En = (t) => /^(0x)?[0-9a-fA-F]+::\w+::\w+$/.test(t), Zi = (t) => t.replace(/(0x)(0*)/g, "0x");
function Ir(t) {
  return t = t.startsWith("0x") ? t.slice(2) : t, t = t.length % 2 === 0 ? t : "0" + t, `0x${t.length === 64 ? t : De.encode(Dn.zpad(De.decode(t), 32))}`;
}
const _r = (t) => {
  const e = t.split(_e);
  if (e.length !== 3)
    throw new Error(`Invalid Sui type: ${t}`);
  return [_(e[0]), e[1], e[2]].join(_e);
}, za = (t) => new me(t).getCoinType(), Ji = (t) => new me(t).getPackageId(), Va = (t) => {
  const e = Zi(t).match(/0x2::table::Table<(.*)>/);
  if (!e)
    throw new Error(`Invalid table type: ${t}`);
  if (e.length < 2)
    throw new Error(`Invalid table type: ${t}`);
  const [r] = e[1].split(",");
  if (!r || !En(r))
    throw new Error(`Invalid key type: ${r}`);
  return r;
}, Te = class Te {
  constructor(e) {
    // Full 32 bytes of Address
    ee(this, "address");
    // Optional module and contract name
    ee(this, "module");
    if (Te.instanceof(e))
      this.address = e.address, this.module = e.module;
    else if (wr.instanceof(e))
      this.address = e.toUint8Array();
    else if (typeof e == "string") {
      if (En(e)) {
        const r = e.split(_e);
        this.module = r.slice(1).join(_e), e = r[0];
      }
      if (e = Ir(e), !De.valid(e))
        throw new Error("Invalid Sui address: " + e);
      this.address = De.decode(e);
    } else
      this.address = e;
  }
  unwrap() {
    const e = this.getPackageId(), r = this.module ? _e + this.module : "";
    return `${e}${r}`;
  }
  toString() {
    return this.unwrap();
  }
  toNative() {
    return this;
  }
  toUint8Array() {
    return this.address;
  }
  toUniversalAddress() {
    return new wr(this.toUint8Array());
  }
  getPackageId() {
    return Ir(De.encode(this.address));
  }
  getCoinType() {
    return [this.getPackageId(), "coin", "COIN"].join(_e);
  }
  static instanceof(e) {
    return e.constructor.platform === Te.platform;
  }
  equals(e) {
    return Te.instanceof(e) ? e.unwrap() === this.unwrap() : this.toUniversalAddress().equals(e);
  }
};
ee(Te, "byteSize", 32), ee(Te, "platform", je._platform);
let me = Te;
Nn(mt, me);
var He = /* @__PURE__ */ ((t) => (t[t.TransactionData = 0] = "TransactionData", t[t.TransactionEffects = 1] = "TransactionEffects", t[t.CheckpointSummary = 2] = "CheckpointSummary", t[t.PersonalMessage = 3] = "PersonalMessage", t))(He || {});
function Xi(t) {
  return [
    t,
    0,
    0
    /* Sui */
  ];
}
function kn(t, e) {
  const r = Xi(t), n = new Uint8Array(r.length + e.length);
  return n.set(r), n.set(e, r.length), n;
}
const wt = {
  ED25519: 0,
  Secp256k1: 1,
  Secp256r1: 2,
  MultiSig: 3,
  ZkLogin: 5
}, Yi = {
  ED25519: 32,
  Secp256k1: 33,
  Secp256r1: 33
}, Qi = {
  0: "ED25519",
  1: "Secp256k1",
  2: "Secp256r1",
  3: "MultiSig",
  5: "ZkLogin"
};
function ea(t) {
  for (let e = 0; e < t.length; e++)
    if (t[e] !== 0)
      return e;
  return -1;
}
function ta(t, e) {
  const r = t.toString(16);
  return zn(r.padStart(e * 2, "0").slice(-e * 2));
}
function ra(t, e) {
  const r = ta(t, e), n = ea(r);
  return n === -1 ? new Uint8Array([0]) : r.slice(n);
}
function na(t, e) {
  const r = ra(t, 32);
  e === "accounts.google.com" && (e = "https://accounts.google.com");
  const n = new TextEncoder().encode(e), s = new Uint8Array(2 + r.length + n.length);
  return s.set([wt.ZkLogin]), s.set([n.length], 1), s.set(n, 2), s.set(r, 2 + n.length), _(
    Br(Le(s, { dkLen: 32 })).slice(0, Ye * 2)
  );
}
function sa(t) {
  if (t.length !== 1)
    throw new Error("Invalid base64Url character: " + t);
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t);
  if (r === -1)
    throw new Error("Invalid base64Url character: " + t);
  const n = r.toString(2).padStart(6, "0");
  return Array.from(n).map(Number);
}
function ia(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    const n = t.charAt(r), s = sa(n);
    e = e.concat(s);
  }
  return e;
}
function aa(t, e) {
  if (t.length < 2)
    throw new Error(`Input (s = ${t}) is not tightly packed because s.length < 2`);
  let r = ia(t);
  const n = e % 4;
  if (n !== 0)
    if (n === 1)
      r = r.slice(2);
    else if (n === 2)
      r = r.slice(4);
    else
      throw new Error(`Input (s = ${t}) is not tightly packed because i%4 = 3 (i = ${e}))`);
  const s = (e + t.length - 1) % 4;
  if (s !== 3)
    if (s === 2)
      r = r.slice(0, r.length - 2);
    else if (s === 1)
      r = r.slice(0, r.length - 4);
    else
      throw new Error(
        `Input (s = ${t}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${e}))`
      );
  if (r.length % 8 !== 0)
    throw new Error("We should never reach here...");
  const i = new Uint8Array(Math.floor(r.length / 8));
  let a = 0;
  for (let c = 0; c < r.length; c += 8) {
    const u = r.slice(c, c + 8), d = parseInt(u.join(""), 2);
    i[a++] = d;
  }
  return new TextDecoder().decode(i);
}
function oa(t) {
  if (!(t.slice(-1) === "}" || t.slice(-1) === ","))
    throw new Error("Invalid claim");
  const e = JSON.parse("{" + t.slice(0, -1) + "}");
  if (Object.keys(e).length !== 1)
    throw new Error("Invalid claim");
  const r = Object.keys(e)[0];
  return [r, e[r]];
}
function ca(t, e) {
  const r = aa(t.value, t.indexMod4), [n, s] = oa(r);
  if (n !== e)
    throw new Error(`Invalid field name: found ${n} expected ${e}`);
  return s;
}
const ua = o.struct("ZkLoginSignature", {
  inputs: o.struct("ZkLoginSignatureInputs", {
    proofPoints: o.struct("ZkLoginSignatureInputsProofPoints", {
      a: o.vector(o.string()),
      b: o.vector(o.vector(o.string())),
      c: o.vector(o.string())
    }),
    issBase64Details: o.struct("ZkLoginSignatureInputsClaim", {
      value: o.string(),
      indexMod4: o.u8()
    }),
    headerBase64: o.string(),
    addressSeed: o.string()
  }),
  maxEpoch: o.u64(),
  userSignature: o.vector(o.u8())
});
function da(t) {
  return ua.parse(typeof t == "string" ? X(t) : t);
}
function la({
  signature: t,
  signatureScheme: e,
  publicKey: r
}) {
  if (!r)
    throw new Error("`publicKey` is required");
  const n = r.toRawBytes(), s = new Uint8Array(1 + t.length + n.length);
  return s.set([wt[e]]), s.set(t, 1), s.set(n, 1 + t.length), N(s);
}
function ha(t) {
  const e = X(t), r = Qi[e[0]];
  switch (r) {
    case "MultiSig":
      const n = O.MultiSig.parse(e.slice(1));
      return {
        serializedSignature: t,
        signatureScheme: r,
        multisig: n,
        bytes: e
      };
    case "ZkLogin":
      const s = e.slice(1), { inputs: i, maxEpoch: a, userSignature: c } = da(s), { issBase64Details: u, addressSeed: d } = i, f = ca(u, "iss"), g = na(BigInt(d), f);
      return {
        serializedSignature: t,
        signatureScheme: r,
        zkLogin: {
          inputs: i,
          maxEpoch: a,
          userSignature: c,
          iss: f,
          address: g,
          addressSeed: BigInt(d)
        },
        signature: e
      };
    case "ED25519":
    case "Secp256k1":
    case "Secp256r1":
      const y = Yi[r], p = e.slice(1, e.length - y), m = e.slice(1 + p.length);
      return {
        serializedSignature: t,
        signatureScheme: r,
        signature: p,
        publicKey: m,
        bytes: e
      };
    default:
      throw new Error("Unsupported signature scheme");
  }
}
const dt = 32, fa = "suiprivkey";
class ga {
  /**
   * Sign messages with a specific intent. By combining the message bytes with the intent before hashing and signing,
   * it ensures that a signed message is tied to a specific purpose and domain separator is provided
   */
  async signWithIntent(e, r) {
    const n = kn(r, e), s = Le(n, { dkLen: 32 });
    return {
      signature: la({
        signature: await this.sign(s),
        signatureScheme: this.getKeyScheme(),
        publicKey: this.getPublicKey()
      }),
      bytes: N(e)
    };
  }
  /**
   * Signs provided transaction block by calling `signWithIntent()` with a `TransactionData` provided as intent scope
   */
  async signTransactionBlock(e) {
    return this.signWithIntent(e, He.TransactionData);
  }
  /**
   * Signs provided personal message by calling `signWithIntent()` with a `PersonalMessage` provided as intent scope
   */
  async signPersonalMessage(e) {
    return this.signWithIntent(
      o.vector(o.u8()).serialize(e).toBytes(),
      He.PersonalMessage
    );
  }
  toSuiAddress() {
    return this.getPublicKey().toSuiAddress();
  }
}
class pa extends ga {
  /**
   * @deprecated use {@link Keypair.getSecretKey} instead
   * This returns an exported keypair object, schema is the signature
   * scheme name, and the private key field is a Bech32 encoded string
   * of 33-byte `flag || private_key` that starts with `suiprivkey`.
   */
  export() {
    return {
      schema: this.getKeyScheme(),
      privateKey: this.getSecretKey()
    };
  }
}
function ya(t, e) {
  if (t.length !== dt)
    throw new Error("Invalid bytes length");
  const r = wt[e], n = new Uint8Array(t.length + 1);
  return n.set([r]), n.set(t, 1), br.encode(fa, br.toWords(n));
}
function Ar(t) {
  return !!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(t);
}
function ma(t) {
  return Kn(t, "");
}
function wa(t) {
  return xe(ma(t));
}
const ba = "ed25519 seed", Sa = 2147483648, Ta = new RegExp("^m(\\/[0-9]+')+$"), xn = (t) => t.replace("'", ""), va = (t) => {
  const r = jr.create(Nt, ba).update(Xe(t)).digest(), n = r.slice(0, 32), s = r.slice(32);
  return {
    key: n,
    chainCode: s
  };
}, Ea = ({ key: t, chainCode: e }, r) => {
  const n = new ArrayBuffer(4);
  new DataView(n).setUint32(0, r);
  const i = new Uint8Array(1 + t.length + n.byteLength);
  i.set(new Uint8Array(1).fill(0)), i.set(t, 1), i.set(new Uint8Array(n, 0, n.byteLength), t.length + 1);
  const a = jr.create(Nt, e).update(i).digest(), c = a.slice(0, 32), u = a.slice(32);
  return {
    key: c,
    chainCode: u
  };
}, ka = (t) => Ta.test(t) ? !t.split("/").slice(1).map(xn).some(
  isNaN
  /* ts T_T*/
) : !1, Or = (t, e, r = Sa) => {
  if (!ka(t))
    throw new Error("Invalid derivation path");
  const { key: n, chainCode: s } = va(e);
  return t.split("/").slice(1).map(xn).map((a) => parseInt(a, 10)).reduce((a, c) => Ea(a, c + r), {
    key: n,
    chainCode: s
  });
};
function In(t, e) {
  if (t === e)
    return !0;
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
class xa {
  /**
   * Checks if two public keys are equal
   */
  equals(e) {
    return In(this.toRawBytes(), e.toRawBytes());
  }
  /**
   * Return the base-64 representation of the public key
   */
  toBase64() {
    return N(this.toRawBytes());
  }
  toString() {
    throw new Error(
      "`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead."
    );
  }
  /**
   * Return the Sui representation of the public key encoded in
   * base-64. A Sui public key is formed by the concatenation
   * of the scheme flag with the raw bytes of the public key
   */
  toSuiPublicKey() {
    const e = this.toSuiBytes();
    return N(e);
  }
  verifyWithIntent(e, r, n) {
    const s = kn(n, e), i = Le(s, { dkLen: 32 });
    return this.verify(i, r);
  }
  /**
   * Verifies that the signature is valid for for the provided PersonalMessage
   */
  verifyPersonalMessage(e, r) {
    return this.verifyWithIntent(
      O.vector(O.u8()).serialize(e).toBytes(),
      r,
      He.PersonalMessage
    );
  }
  /**
   * Verifies that the signature is valid for for the provided TransactionBlock
   */
  verifyTransactionBlock(e, r) {
    return this.verifyWithIntent(e, r, He.TransactionData);
  }
  /**
   * Returns the bytes representation of the public key
   * prefixed with the signature scheme flag
   */
  toSuiBytes() {
    const e = this.toRawBytes(), r = new Uint8Array(e.length + 1);
    return r.set([this.flag()]), r.set(e, 1), r;
  }
  /**
   * Return the Sui address associated with this Ed25519 public key
   */
  toSuiAddress() {
    return _(
      Br(Le(this.toSuiBytes(), { dkLen: 32 })).slice(0, Ye * 2)
    );
  }
}
const Ut = 32;
class _n extends xa {
  /**
   * Create a new Ed25519PublicKey object
   * @param value ed25519 public key as buffer or base-64 encoded string
   */
  constructor(e) {
    if (super(), typeof e == "string" ? this.data = X(e) : e instanceof Uint8Array ? this.data = e : this.data = Uint8Array.from(e), this.data.length !== Ut)
      throw new Error(
        `Invalid public key input. Expected ${Ut} bytes, got ${this.data.length}`
      );
  }
  /**
   * Checks if two Ed25519 public keys are equal
   */
  equals(e) {
    return super.equals(e);
  }
  /**
   * Return the byte array representation of the Ed25519 public key
   */
  toRawBytes() {
    return this.data;
  }
  /**
   * Return the Sui address associated with this Ed25519 public key
   */
  flag() {
    return wt.ED25519;
  }
  /**
   * Verifies that the signature is valid for for the provided message
   */
  async verify(e, r) {
    let n;
    if (typeof r == "string") {
      const s = ha(r);
      if (s.signatureScheme !== "ED25519")
        throw new Error("Invalid signature scheme");
      if (!In(this.toRawBytes(), s.publicKey))
        throw new Error("Signature does not match public key");
      n = s.signature;
    } else
      n = r;
    return be.sign.detached.verify(e, n, this.toRawBytes());
  }
}
_n.SIZE = Ut;
const Cr = "m/44'/784'/0'/0'/0'";
class Ae extends pa {
  /**
   * Create a new Ed25519 keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair Ed25519 keypair
   */
  constructor(e) {
    super(), e ? this.keypair = e : this.keypair = be.sign.keyPair();
  }
  /**
   * Get the key scheme of the keypair ED25519
   */
  getKeyScheme() {
    return "ED25519";
  }
  /**
   * Generate a new random Ed25519 keypair
   */
  static generate() {
    return new Ae(be.sign.keyPair());
  }
  /**
   * Create a Ed25519 keypair from a raw secret key byte array, also known as seed.
   * This is NOT the private scalar which is result of hashing and bit clamping of
   * the raw secret key.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */
  static fromSecretKey(e, r) {
    const n = e.length;
    if (n !== dt)
      throw new Error(
        `Wrong secretKey size. Expected ${dt} bytes, got ${n}.`
      );
    const s = be.sign.keyPair.fromSeed(e);
    if (!r || !r.skipValidation) {
      const a = new TextEncoder().encode("sui validation"), c = be.sign.detached(a, s.secretKey);
      if (!be.sign.detached.verify(a, c, s.publicKey))
        throw new Error("provided secretKey is invalid");
    }
    return new Ae(s);
  }
  /**
   * The public key for this Ed25519 keypair
   */
  getPublicKey() {
    return new _n(this.keypair.publicKey);
  }
  /**
   * The Bech32 secret key string for this Ed25519 keypair
   */
  getSecretKey() {
    return ya(
      this.keypair.secretKey.slice(0, dt),
      this.getKeyScheme()
    );
  }
  async sign(e) {
    return this.signData(e);
  }
  /**
   * Return the signature for the provided data using Ed25519.
   */
  signData(e) {
    return be.sign.detached(e, this.keypair.secretKey);
  }
  /**
   * Derive Ed25519 keypair from mnemonics and path. The mnemonics must be normalized
   * and validated against the english wordlist.
   *
   * If path is none, it will default to m/44'/784'/0'/0'/0', otherwise the path must
   * be compliant to SLIP-0010 in form m/44'/784'/{account_index}'/{change_index}'/{address_index}'.
   */
  static deriveKeypair(e, r) {
    if (r == null && (r = Cr), !Ar(r))
      throw new Error("Invalid derivation path");
    const { key: n } = Or(r, wa(e));
    return Ae.fromSecretKey(n);
  }
  /**
   * Derive Ed25519 keypair from mnemonicSeed and path.
   *
   * If path is none, it will default to m/44'/784'/0'/0'/0', otherwise the path must
   * be compliant to SLIP-0010 in form m/44'/784'/{account_index}'/{change_index}'/{address_index}'.
   */
  static deriveKeypairFromSeed(e, r) {
    if (r == null && (r = Cr), !Ar(r))
      throw new Error("Invalid derivation path");
    const { key: n } = Or(r, e);
    return Ae.fromSecretKey(n);
  }
}
async function Ia(t, e) {
  const [, r] = await je.chainFromRpc(t);
  return new _a(r, t, Ae.deriveKeypair(e, "m/44'/784'/0'/0'/0'"));
}
class _a {
  constructor(e, r, n, s) {
    ee(this, "_chain");
    ee(this, "_client");
    ee(this, "_signer");
    ee(this, "_debug");
    this._chain = e, this._client = r, this._signer = n, this._debug = s;
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._signer.toSuiAddress();
  }
  async signAndSend(e) {
    const r = [];
    for (const n of e) {
      const { description: s, transaction: i } = n;
      this._debug && console.log(`Signing ${s} for ${this.address()}`);
      const a = await this._client.signAndExecuteTransactionBlock({
        transactionBlock: i,
        signer: this._signer
      });
      r.push(a.digest);
    }
    return r;
  }
}
const Aa = {
  Address: me,
  Platform: je,
  getSigner: Ia,
  protocols: {
    WormholeCore: () => import("./index-B512u2Lt.mjs"),
    TokenBridge: () => import("./index-KGOWSQot.mjs")
  },
  getChain: (t, e, r) => new Tn(e, new je(t, Vn(t, mt, { [e]: r })))
}, La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aa
}, Symbol.toStringTag, { value: "Module" }));
export {
  je as S,
  mt as _,
  Ji as a,
  Va as b,
  vn as c,
  Ki as d,
  mr as e,
  Ra as f,
  Hi as g,
  Ma as h,
  En as i,
  za as j,
  ja as k,
  Na as l,
  Ua as m,
  Pa as n,
  me as o,
  Da as p,
  La as s,
  Zi as t,
  $a as u
};
