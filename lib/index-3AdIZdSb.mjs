import { cn as Tt, w as Mt, aa as xt } from "./index-DV1w5RNX.mjs";
var Lt = {}, Me = {}, B = {}, _t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function r(f, c) {
    var d = f >>> 16 & 65535, E = f & 65535, y = c >>> 16 & 65535, v = c & 65535;
    return E * v + (d * v + E * y << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || r;
  function n(f, c) {
    return f + c | 0;
  }
  e.add = n;
  function a(f, c) {
    return f - c | 0;
  }
  e.sub = a;
  function D(f, c) {
    return f << c | f >>> 32 - c;
  }
  e.rotl = D;
  function l(f, c) {
    return f << 32 - c | f >>> c;
  }
  e.rotr = l;
  function w(f) {
    return typeof f == "number" && isFinite(f) && Math.floor(f) === f;
  }
  e.isInteger = Number.isInteger || w, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(f) {
    return e.isInteger(f) && f >= -e.MAX_SAFE_INTEGER && f <= e.MAX_SAFE_INTEGER;
  };
})(_t);
Object.defineProperty(B, "__esModule", { value: !0 });
var dt = _t;
function Bt(e, r) {
  return r === void 0 && (r = 0), (e[r + 0] << 8 | e[r + 1]) << 16 >> 16;
}
B.readInt16BE = Bt;
function jt(e, r) {
  return r === void 0 && (r = 0), (e[r + 0] << 8 | e[r + 1]) >>> 0;
}
B.readUint16BE = jt;
function It(e, r) {
  return r === void 0 && (r = 0), (e[r + 1] << 8 | e[r]) << 16 >> 16;
}
B.readInt16LE = It;
function Rt(e, r) {
  return r === void 0 && (r = 0), (e[r + 1] << 8 | e[r]) >>> 0;
}
B.readUint16LE = Rt;
function Et(e, r, n) {
  return r === void 0 && (r = new Uint8Array(2)), n === void 0 && (n = 0), r[n + 0] = e >>> 8, r[n + 1] = e >>> 0, r;
}
B.writeUint16BE = Et;
B.writeInt16BE = Et;
function bt(e, r, n) {
  return r === void 0 && (r = new Uint8Array(2)), n === void 0 && (n = 0), r[n + 0] = e >>> 0, r[n + 1] = e >>> 8, r;
}
B.writeUint16LE = bt;
B.writeInt16LE = bt;
function Ye(e, r) {
  return r === void 0 && (r = 0), e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
}
B.readInt32BE = Ye;
function qe(e, r) {
  return r === void 0 && (r = 0), (e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]) >>> 0;
}
B.readUint32BE = qe;
function $e(e, r) {
  return r === void 0 && (r = 0), e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}
B.readInt32LE = $e;
function Ge(e, r) {
  return r === void 0 && (r = 0), (e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]) >>> 0;
}
B.readUint32LE = Ge;
function Ne(e, r, n) {
  return r === void 0 && (r = new Uint8Array(4)), n === void 0 && (n = 0), r[n + 0] = e >>> 24, r[n + 1] = e >>> 16, r[n + 2] = e >>> 8, r[n + 3] = e >>> 0, r;
}
B.writeUint32BE = Ne;
B.writeInt32BE = Ne;
function Te(e, r, n) {
  return r === void 0 && (r = new Uint8Array(4)), n === void 0 && (n = 0), r[n + 0] = e >>> 0, r[n + 1] = e >>> 8, r[n + 2] = e >>> 16, r[n + 3] = e >>> 24, r;
}
B.writeUint32LE = Te;
B.writeInt32LE = Te;
function Pt(e, r) {
  r === void 0 && (r = 0);
  var n = Ye(e, r), a = Ye(e, r + 4);
  return n * 4294967296 + a - (a >> 31) * 4294967296;
}
B.readInt64BE = Pt;
function Ht(e, r) {
  r === void 0 && (r = 0);
  var n = qe(e, r), a = qe(e, r + 4);
  return n * 4294967296 + a;
}
B.readUint64BE = Ht;
function Kt(e, r) {
  r === void 0 && (r = 0);
  var n = $e(e, r), a = $e(e, r + 4);
  return a * 4294967296 + n - (n >> 31) * 4294967296;
}
B.readInt64LE = Kt;
function zt(e, r) {
  r === void 0 && (r = 0);
  var n = Ge(e, r), a = Ge(e, r + 4);
  return a * 4294967296 + n;
}
B.readUint64LE = zt;
function vt(e, r, n) {
  return r === void 0 && (r = new Uint8Array(8)), n === void 0 && (n = 0), Ne(e / 4294967296 >>> 0, r, n), Ne(e >>> 0, r, n + 4), r;
}
B.writeUint64BE = vt;
B.writeInt64BE = vt;
function wt(e, r, n) {
  return r === void 0 && (r = new Uint8Array(8)), n === void 0 && (n = 0), Te(e >>> 0, r, n), Te(e / 4294967296 >>> 0, r, n + 4), r;
}
B.writeUint64LE = wt;
B.writeInt64LE = wt;
function Yt(e, r, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > r.length - n)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var a = 0, D = 1, l = e / 8 + n - 1; l >= n; l--)
    a += r[l] * D, D *= 256;
  return a;
}
B.readUintBE = Yt;
function qt(e, r, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > r.length - n)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var a = 0, D = 1, l = n; l < n + e / 8; l++)
    a += r[l] * D, D *= 256;
  return a;
}
B.readUintLE = qt;
function $t(e, r, n, a) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), a === void 0 && (a = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!dt.isSafeInteger(r))
    throw new Error("writeUintBE value must be an integer");
  for (var D = 1, l = e / 8 + a - 1; l >= a; l--)
    n[l] = r / D & 255, D *= 256;
  return n;
}
B.writeUintBE = $t;
function Gt(e, r, n, a) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), a === void 0 && (a = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!dt.isSafeInteger(r))
    throw new Error("writeUintLE value must be an integer");
  for (var D = 1, l = a; l < a + e / 8; l++)
    n[l] = r / D & 255, D *= 256;
  return n;
}
B.writeUintLE = Gt;
function Vt(e, r) {
  r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(r);
}
B.readFloat32BE = Vt;
function Wt(e, r) {
  r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(r, !0);
}
B.readFloat32LE = Wt;
function Xt(e, r) {
  r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(r);
}
B.readFloat64BE = Xt;
function Jt(e, r) {
  r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(r, !0);
}
B.readFloat64LE = Jt;
function Qt(e, r, n) {
  r === void 0 && (r = new Uint8Array(4)), n === void 0 && (n = 0);
  var a = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return a.setFloat32(n, e), r;
}
B.writeFloat32BE = Qt;
function Zt(e, r, n) {
  r === void 0 && (r = new Uint8Array(4)), n === void 0 && (n = 0);
  var a = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return a.setFloat32(n, e, !0), r;
}
B.writeFloat32LE = Zt;
function kt(e, r, n) {
  r === void 0 && (r = new Uint8Array(8)), n === void 0 && (n = 0);
  var a = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return a.setFloat64(n, e), r;
}
B.writeFloat64BE = kt;
function er(e, r, n) {
  r === void 0 && (r = new Uint8Array(8)), n === void 0 && (n = 0);
  var a = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return a.setFloat64(n, e, !0), r;
}
B.writeFloat64LE = er;
var de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
function tr(e) {
  for (var r = 0; r < e.length; r++)
    e[r] = 0;
  return e;
}
de.wipe = tr;
Object.defineProperty(Me, "__esModule", { value: !0 });
var _e = B, Ve = de, rr = 20;
function nr(e, r, n) {
  for (var a = 1634760805, D = 857760878, l = 2036477234, w = 1797285236, f = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], c = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], d = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], E = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], y = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], v = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], b = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], g = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], A = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], p = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], O = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], o = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], _ = a, u = D, s = l, h = w, t = f, i = c, S = d, C = E, F = y, x = v, j = b, L = g, T = A, M = p, m = O, N = o, G = 0; G < rr; G += 2)
    _ = _ + t | 0, T ^= _, T = T >>> 16 | T << 16, F = F + T | 0, t ^= F, t = t >>> 20 | t << 12, u = u + i | 0, M ^= u, M = M >>> 16 | M << 16, x = x + M | 0, i ^= x, i = i >>> 20 | i << 12, s = s + S | 0, m ^= s, m = m >>> 16 | m << 16, j = j + m | 0, S ^= j, S = S >>> 20 | S << 12, h = h + C | 0, N ^= h, N = N >>> 16 | N << 16, L = L + N | 0, C ^= L, C = C >>> 20 | C << 12, s = s + S | 0, m ^= s, m = m >>> 24 | m << 8, j = j + m | 0, S ^= j, S = S >>> 25 | S << 7, h = h + C | 0, N ^= h, N = N >>> 24 | N << 8, L = L + N | 0, C ^= L, C = C >>> 25 | C << 7, u = u + i | 0, M ^= u, M = M >>> 24 | M << 8, x = x + M | 0, i ^= x, i = i >>> 25 | i << 7, _ = _ + t | 0, T ^= _, T = T >>> 24 | T << 8, F = F + T | 0, t ^= F, t = t >>> 25 | t << 7, _ = _ + i | 0, N ^= _, N = N >>> 16 | N << 16, j = j + N | 0, i ^= j, i = i >>> 20 | i << 12, u = u + S | 0, T ^= u, T = T >>> 16 | T << 16, L = L + T | 0, S ^= L, S = S >>> 20 | S << 12, s = s + C | 0, M ^= s, M = M >>> 16 | M << 16, F = F + M | 0, C ^= F, C = C >>> 20 | C << 12, h = h + t | 0, m ^= h, m = m >>> 16 | m << 16, x = x + m | 0, t ^= x, t = t >>> 20 | t << 12, s = s + C | 0, M ^= s, M = M >>> 24 | M << 8, F = F + M | 0, C ^= F, C = C >>> 25 | C << 7, h = h + t | 0, m ^= h, m = m >>> 24 | m << 8, x = x + m | 0, t ^= x, t = t >>> 25 | t << 7, u = u + S | 0, T ^= u, T = T >>> 24 | T << 8, L = L + T | 0, S ^= L, S = S >>> 25 | S << 7, _ = _ + i | 0, N ^= _, N = N >>> 24 | N << 8, j = j + N | 0, i ^= j, i = i >>> 25 | i << 7;
  _e.writeUint32LE(_ + a | 0, e, 0), _e.writeUint32LE(u + D | 0, e, 4), _e.writeUint32LE(s + l | 0, e, 8), _e.writeUint32LE(h + w | 0, e, 12), _e.writeUint32LE(t + f | 0, e, 16), _e.writeUint32LE(i + c | 0, e, 20), _e.writeUint32LE(S + d | 0, e, 24), _e.writeUint32LE(C + E | 0, e, 28), _e.writeUint32LE(F + y | 0, e, 32), _e.writeUint32LE(x + v | 0, e, 36), _e.writeUint32LE(j + b | 0, e, 40), _e.writeUint32LE(L + g | 0, e, 44), _e.writeUint32LE(T + A | 0, e, 48), _e.writeUint32LE(M + p | 0, e, 52), _e.writeUint32LE(m + O | 0, e, 56), _e.writeUint32LE(N + o | 0, e, 60);
}
function yt(e, r, n, a, D) {
  if (D === void 0 && (D = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (a.length < n.length)
    throw new Error("ChaCha: destination is shorter than source");
  var l, w;
  if (D === 0) {
    if (r.length !== 8 && r.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    l = new Uint8Array(16), w = l.length - r.length, l.set(r, w);
  } else {
    if (r.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    l = r, w = D;
  }
  for (var f = new Uint8Array(64), c = 0; c < n.length; c += 64) {
    nr(f, l, e);
    for (var d = c; d < c + 64 && d < n.length; d++)
      a[d] = n[d] ^ f[d - c];
    ar(l, 0, w);
  }
  return Ve.wipe(f), D === 0 && Ve.wipe(l), a;
}
Me.streamXOR = yt;
function ir(e, r, n, a) {
  return a === void 0 && (a = 0), Ve.wipe(n), yt(e, r, n, n, a);
}
Me.stream = ir;
function ar(e, r, n) {
  for (var a = 1; n--; )
    a = a + (e[r] & 255) | 0, e[r] = a & 255, a >>>= 8, r++;
  if (a > 0)
    throw new Error("ChaCha: counter overflow");
}
var gt = {}, be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
function ur(e, r, n) {
  return ~(e - 1) & r | e - 1 & n;
}
be.select = ur;
function fr(e, r) {
  return (e | 0) - (r | 0) - 1 >>> 31 & 1;
}
be.lessOrEqual = fr;
function St(e, r) {
  if (e.length !== r.length)
    return 0;
  for (var n = 0, a = 0; a < e.length; a++)
    n |= e[a] ^ r[a];
  return 1 & n - 1 >>> 8;
}
be.compare = St;
function hr(e, r) {
  return e.length === 0 || r.length === 0 ? !1 : St(e, r) !== 0;
}
be.equal = hr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = be, n = de;
  e.DIGEST_LENGTH = 16;
  var a = (
    /** @class */
    function() {
      function w(f) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var c = f[0] | f[1] << 8;
        this._r[0] = c & 8191;
        var d = f[2] | f[3] << 8;
        this._r[1] = (c >>> 13 | d << 3) & 8191;
        var E = f[4] | f[5] << 8;
        this._r[2] = (d >>> 10 | E << 6) & 7939;
        var y = f[6] | f[7] << 8;
        this._r[3] = (E >>> 7 | y << 9) & 8191;
        var v = f[8] | f[9] << 8;
        this._r[4] = (y >>> 4 | v << 12) & 255, this._r[5] = v >>> 1 & 8190;
        var b = f[10] | f[11] << 8;
        this._r[6] = (v >>> 14 | b << 2) & 8191;
        var g = f[12] | f[13] << 8;
        this._r[7] = (b >>> 11 | g << 5) & 8065;
        var A = f[14] | f[15] << 8;
        this._r[8] = (g >>> 8 | A << 8) & 8191, this._r[9] = A >>> 5 & 127, this._pad[0] = f[16] | f[17] << 8, this._pad[1] = f[18] | f[19] << 8, this._pad[2] = f[20] | f[21] << 8, this._pad[3] = f[22] | f[23] << 8, this._pad[4] = f[24] | f[25] << 8, this._pad[5] = f[26] | f[27] << 8, this._pad[6] = f[28] | f[29] << 8, this._pad[7] = f[30] | f[31] << 8;
      }
      return w.prototype._blocks = function(f, c, d) {
        for (var E = this._fin ? 0 : 2048, y = this._h[0], v = this._h[1], b = this._h[2], g = this._h[3], A = this._h[4], p = this._h[5], O = this._h[6], o = this._h[7], _ = this._h[8], u = this._h[9], s = this._r[0], h = this._r[1], t = this._r[2], i = this._r[3], S = this._r[4], C = this._r[5], F = this._r[6], x = this._r[7], j = this._r[8], L = this._r[9]; d >= 16; ) {
          var T = f[c + 0] | f[c + 1] << 8;
          y += T & 8191;
          var M = f[c + 2] | f[c + 3] << 8;
          v += (T >>> 13 | M << 3) & 8191;
          var m = f[c + 4] | f[c + 5] << 8;
          b += (M >>> 10 | m << 6) & 8191;
          var N = f[c + 6] | f[c + 7] << 8;
          g += (m >>> 7 | N << 9) & 8191;
          var G = f[c + 8] | f[c + 9] << 8;
          A += (N >>> 4 | G << 12) & 8191, p += G >>> 1 & 8191;
          var J = f[c + 10] | f[c + 11] << 8;
          O += (G >>> 14 | J << 2) & 8191;
          var X = f[c + 12] | f[c + 13] << 8;
          o += (J >>> 11 | X << 5) & 8191;
          var W = f[c + 14] | f[c + 15] << 8;
          _ += (X >>> 8 | W << 8) & 8191, u += W >>> 5 | E;
          var U = 0, I = U;
          I += y * s, I += v * (5 * L), I += b * (5 * j), I += g * (5 * x), I += A * (5 * F), U = I >>> 13, I &= 8191, I += p * (5 * C), I += O * (5 * S), I += o * (5 * i), I += _ * (5 * t), I += u * (5 * h), U += I >>> 13, I &= 8191;
          var R = U;
          R += y * h, R += v * s, R += b * (5 * L), R += g * (5 * j), R += A * (5 * x), U = R >>> 13, R &= 8191, R += p * (5 * F), R += O * (5 * C), R += o * (5 * S), R += _ * (5 * i), R += u * (5 * t), U += R >>> 13, R &= 8191;
          var P = U;
          P += y * t, P += v * h, P += b * s, P += g * (5 * L), P += A * (5 * j), U = P >>> 13, P &= 8191, P += p * (5 * x), P += O * (5 * F), P += o * (5 * C), P += _ * (5 * S), P += u * (5 * i), U += P >>> 13, P &= 8191;
          var H = U;
          H += y * i, H += v * t, H += b * h, H += g * s, H += A * (5 * L), U = H >>> 13, H &= 8191, H += p * (5 * j), H += O * (5 * x), H += o * (5 * F), H += _ * (5 * C), H += u * (5 * S), U += H >>> 13, H &= 8191;
          var K = U;
          K += y * S, K += v * i, K += b * t, K += g * h, K += A * s, U = K >>> 13, K &= 8191, K += p * (5 * L), K += O * (5 * j), K += o * (5 * x), K += _ * (5 * F), K += u * (5 * C), U += K >>> 13, K &= 8191;
          var z = U;
          z += y * C, z += v * S, z += b * i, z += g * t, z += A * h, U = z >>> 13, z &= 8191, z += p * s, z += O * (5 * L), z += o * (5 * j), z += _ * (5 * x), z += u * (5 * F), U += z >>> 13, z &= 8191;
          var Y = U;
          Y += y * F, Y += v * C, Y += b * S, Y += g * i, Y += A * t, U = Y >>> 13, Y &= 8191, Y += p * h, Y += O * s, Y += o * (5 * L), Y += _ * (5 * j), Y += u * (5 * x), U += Y >>> 13, Y &= 8191;
          var q = U;
          q += y * x, q += v * F, q += b * C, q += g * S, q += A * i, U = q >>> 13, q &= 8191, q += p * t, q += O * h, q += o * s, q += _ * (5 * L), q += u * (5 * j), U += q >>> 13, q &= 8191;
          var $ = U;
          $ += y * j, $ += v * x, $ += b * F, $ += g * C, $ += A * S, U = $ >>> 13, $ &= 8191, $ += p * i, $ += O * t, $ += o * h, $ += _ * s, $ += u * (5 * L), U += $ >>> 13, $ &= 8191;
          var V = U;
          V += y * L, V += v * j, V += b * x, V += g * F, V += A * C, U = V >>> 13, V &= 8191, V += p * S, V += O * i, V += o * t, V += _ * h, V += u * s, U += V >>> 13, V &= 8191, U = (U << 2) + U | 0, U = U + I | 0, I = U & 8191, U = U >>> 13, R += U, y = I, v = R, b = P, g = H, A = K, p = z, O = Y, o = q, _ = $, u = V, c += 16, d -= 16;
        }
        this._h[0] = y, this._h[1] = v, this._h[2] = b, this._h[3] = g, this._h[4] = A, this._h[5] = p, this._h[6] = O, this._h[7] = o, this._h[8] = _, this._h[9] = u;
      }, w.prototype.finish = function(f, c) {
        c === void 0 && (c = 0);
        var d = new Uint16Array(10), E, y, v, b;
        if (this._leftover) {
          for (b = this._leftover, this._buffer[b++] = 1; b < 16; b++)
            this._buffer[b] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (E = this._h[1] >>> 13, this._h[1] &= 8191, b = 2; b < 10; b++)
          this._h[b] += E, E = this._h[b] >>> 13, this._h[b] &= 8191;
        for (this._h[0] += E * 5, E = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += E, E = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += E, d[0] = this._h[0] + 5, E = d[0] >>> 13, d[0] &= 8191, b = 1; b < 10; b++)
          d[b] = this._h[b] + E, E = d[b] >>> 13, d[b] &= 8191;
        for (d[9] -= 8192, y = (E ^ 1) - 1, b = 0; b < 10; b++)
          d[b] &= y;
        for (y = ~y, b = 0; b < 10; b++)
          this._h[b] = this._h[b] & y | d[b];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, v = this._h[0] + this._pad[0], this._h[0] = v & 65535, b = 1; b < 8; b++)
          v = (this._h[b] + this._pad[b] | 0) + (v >>> 16) | 0, this._h[b] = v & 65535;
        return f[c + 0] = this._h[0] >>> 0, f[c + 1] = this._h[0] >>> 8, f[c + 2] = this._h[1] >>> 0, f[c + 3] = this._h[1] >>> 8, f[c + 4] = this._h[2] >>> 0, f[c + 5] = this._h[2] >>> 8, f[c + 6] = this._h[3] >>> 0, f[c + 7] = this._h[3] >>> 8, f[c + 8] = this._h[4] >>> 0, f[c + 9] = this._h[4] >>> 8, f[c + 10] = this._h[5] >>> 0, f[c + 11] = this._h[5] >>> 8, f[c + 12] = this._h[6] >>> 0, f[c + 13] = this._h[6] >>> 8, f[c + 14] = this._h[7] >>> 0, f[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, w.prototype.update = function(f) {
        var c = 0, d = f.length, E;
        if (this._leftover) {
          E = 16 - this._leftover, E > d && (E = d);
          for (var y = 0; y < E; y++)
            this._buffer[this._leftover + y] = f[c + y];
          if (d -= E, c += E, this._leftover += E, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (d >= 16 && (E = d - d % 16, this._blocks(f, c, E), c += E, d -= E), d) {
          for (var y = 0; y < d; y++)
            this._buffer[this._leftover + y] = f[c + y];
          this._leftover += d;
        }
        return this;
      }, w.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var f = new Uint8Array(16);
        return this.finish(f), f;
      }, w.prototype.clean = function() {
        return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, w;
    }()
  );
  e.Poly1305 = a;
  function D(w, f) {
    var c = new a(w);
    c.update(f);
    var d = c.digest();
    return c.clean(), d;
  }
  e.oneTimeAuth = D;
  function l(w, f) {
    return w.length !== e.DIGEST_LENGTH || f.length !== e.DIGEST_LENGTH ? !1 : r.equal(w, f);
  }
  e.equal = l;
})(gt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = Me, n = gt, a = de, D = B, l = be;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var w = new Uint8Array(16), f = (
    /** @class */
    function() {
      function c(d) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, d.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(d);
      }
      return c.prototype.seal = function(d, E, y, v) {
        if (d.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var b = new Uint8Array(16);
        b.set(d, b.length - d.length);
        var g = new Uint8Array(32);
        r.stream(this._key, b, g, 4);
        var A = E.length + this.tagLength, p;
        if (v) {
          if (v.length !== A)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          p = v;
        } else
          p = new Uint8Array(A);
        return r.streamXOR(this._key, b, E, p, 4), this._authenticate(p.subarray(p.length - this.tagLength, p.length), g, p.subarray(0, p.length - this.tagLength), y), a.wipe(b), p;
      }, c.prototype.open = function(d, E, y, v) {
        if (d.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (E.length < this.tagLength)
          return null;
        var b = new Uint8Array(16);
        b.set(d, b.length - d.length);
        var g = new Uint8Array(32);
        r.stream(this._key, b, g, 4);
        var A = new Uint8Array(this.tagLength);
        if (this._authenticate(A, g, E.subarray(0, E.length - this.tagLength), y), !l.equal(A, E.subarray(E.length - this.tagLength, E.length)))
          return null;
        var p = E.length - this.tagLength, O;
        if (v) {
          if (v.length !== p)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          O = v;
        } else
          O = new Uint8Array(p);
        return r.streamXOR(this._key, b, E.subarray(0, E.length - this.tagLength), O, 4), a.wipe(b), O;
      }, c.prototype.clean = function() {
        return a.wipe(this._key), this;
      }, c.prototype._authenticate = function(d, E, y, v) {
        var b = new n.Poly1305(E);
        v && (b.update(v), v.length % 16 > 0 && b.update(w.subarray(v.length % 16))), b.update(y), y.length % 16 > 0 && b.update(w.subarray(y.length % 16));
        var g = new Uint8Array(8);
        v && D.writeUint64LE(v.length, g), b.update(g), D.writeUint64LE(y.length, g), b.update(g);
        for (var A = b.digest(), p = 0; p < A.length; p++)
          d[p] = A[p];
        b.clean(), a.wipe(A), a.wipe(g);
      }, c;
    }()
  );
  e.ChaCha20Poly1305 = f;
})(Lt);
var mt = {}, Ue = {}, Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
function sr(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Ze.isSerializableHash = sr;
Object.defineProperty(Ue, "__esModule", { value: !0 });
var Ee = Ze, or = be, cr = de, Ct = (
  /** @class */
  function() {
    function e(r, n) {
      this._finished = !1, this._inner = new r(), this._outer = new r(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var a = new Uint8Array(this.blockSize);
      n.length > this.blockSize ? this._inner.update(n).finish(a).clean() : a.set(n);
      for (var D = 0; D < a.length; D++)
        a[D] ^= 54;
      this._inner.update(a);
      for (var D = 0; D < a.length; D++)
        a[D] ^= 106;
      this._outer.update(a), Ee.isSerializableHash(this._inner) && Ee.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), cr.wipe(a);
    }
    return e.prototype.reset = function() {
      if (!Ee.isSerializableHash(this._inner) || !Ee.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.clean = function() {
      Ee.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Ee.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, e.prototype.update = function(r) {
      return this._inner.update(r), this;
    }, e.prototype.finish = function(r) {
      return this._finished ? (this._outer.finish(r), this) : (this._inner.finish(r), this._outer.update(r.subarray(0, this.digestLength)).finish(r), this._finished = !0, this);
    }, e.prototype.digest = function() {
      var r = new Uint8Array(this.digestLength);
      return this.finish(r), r;
    }, e.prototype.saveState = function() {
      if (!Ee.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, e.prototype.restoreState = function(r) {
      if (!Ee.isSerializableHash(this._inner) || !Ee.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(r), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.cleanSavedState = function(r) {
      if (!Ee.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(r);
    }, e;
  }()
);
Ue.HMAC = Ct;
function lr(e, r, n) {
  var a = new Ct(e, r);
  a.update(n);
  var D = a.digest();
  return a.clean(), D;
}
Ue.hmac = lr;
Ue.equal = or.equal;
Object.defineProperty(mt, "__esModule", { value: !0 });
var et = Ue, tt = de, Dr = (
  /** @class */
  function() {
    function e(r, n, a, D) {
      a === void 0 && (a = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = r, this._info = D;
      var l = et.hmac(this._hash, a, n);
      this._hmac = new et.HMAC(r, l), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return e.prototype._fillBuffer = function() {
      this._counter[0]++;
      var r = this._counter[0];
      if (r === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), r > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, e.prototype.expand = function(r) {
      for (var n = new Uint8Array(r), a = 0; a < n.length; a++)
        this._bufpos === this._buffer.length && this._fillBuffer(), n[a] = this._buffer[this._bufpos++];
      return n;
    }, e.prototype.clean = function() {
      this._hmac.clean(), tt.wipe(this._buffer), tt.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), Gn = mt.HKDF = Dr, pt = {}, xe = {}, Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.BrowserRandomSource = void 0;
const rt = 65536;
class _r {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const r = typeof self < "u" ? self.crypto || self.msCrypto : null;
    r && r.getRandomValues !== void 0 && (this._crypto = r, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(r) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const n = new Uint8Array(r);
    for (let a = 0; a < n.length; a += rt)
      this._crypto.getRandomValues(n.subarray(a, a + Math.min(n.length - a, rt)));
    return n;
  }
}
Le.BrowserRandomSource = _r;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.NodeRandomSource = void 0;
const dr = de;
class Er {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Tt < "u") {
      const r = Mt();
      r && r.randomBytes && (this._crypto = r, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(r) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let n = this._crypto.randomBytes(r);
    if (n.length !== r)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const a = new Uint8Array(r);
    for (let D = 0; D < a.length; D++)
      a[D] = n[D];
    return (0, dr.wipe)(n), a;
  }
}
Be.NodeRandomSource = Er;
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.SystemRandomSource = void 0;
const br = Le, vr = Be;
class wr {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new br.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new vr.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(r) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(r);
  }
}
xe.SystemRandomSource = wr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const r = xe, n = B, a = de;
  e.defaultRandomSource = new r.SystemRandomSource();
  function D(d, E = e.defaultRandomSource) {
    return E.randomBytes(d);
  }
  e.randomBytes = D;
  function l(d = e.defaultRandomSource) {
    const E = D(4, d), y = (0, n.readUint32LE)(E);
    return (0, a.wipe)(E), y;
  }
  e.randomUint32 = l;
  const w = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function f(d, E = w, y = e.defaultRandomSource) {
    if (E.length < 2)
      throw new Error("randomString charset is too short");
    if (E.length > 256)
      throw new Error("randomString charset is too long");
    let v = "";
    const b = E.length, g = 256 - 256 % b;
    for (; d > 0; ) {
      const A = D(Math.ceil(d * 256 / g), y);
      for (let p = 0; p < A.length && d > 0; p++) {
        const O = A[p];
        O < g && (v += E.charAt(O % b), d--);
      }
      (0, a.wipe)(A);
    }
    return v;
  }
  e.randomString = f;
  function c(d, E = w, y = e.defaultRandomSource) {
    const v = Math.ceil(d / (Math.log(E.length) / Math.LN2));
    return f(v, E, y);
  }
  e.randomStringForEntropy = c;
})(pt);
var yr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = B, n = de;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var a = (
    /** @class */
    function() {
      function f() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return f.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, f.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, f.prototype.clean = function() {
        n.wipe(this._buffer), n.wipe(this._temp), this.reset();
      }, f.prototype.update = function(c, d) {
        if (d === void 0 && (d = c.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var E = 0;
        if (this._bytesHashed += d, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && d > 0; )
            this._buffer[this._bufferLength++] = c[E++], d--;
          this._bufferLength === this.blockSize && (l(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (d >= this.blockSize && (E = l(this._temp, this._state, c, E, d), d %= this.blockSize); d > 0; )
          this._buffer[this._bufferLength++] = c[E++], d--;
        return this;
      }, f.prototype.finish = function(c) {
        if (!this._finished) {
          var d = this._bytesHashed, E = this._bufferLength, y = d / 536870912 | 0, v = d << 3, b = d % 64 < 56 ? 64 : 128;
          this._buffer[E] = 128;
          for (var g = E + 1; g < b - 8; g++)
            this._buffer[g] = 0;
          r.writeUint32BE(y, this._buffer, b - 8), r.writeUint32BE(v, this._buffer, b - 4), l(this._temp, this._state, this._buffer, 0, b), this._finished = !0;
        }
        for (var g = 0; g < this.digestLength / 4; g++)
          r.writeUint32BE(this._state[g], c, g * 4);
        return this;
      }, f.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
      }, f.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, f.prototype.restoreState = function(c) {
        return this._state.set(c.state), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, f.prototype.cleanSavedState = function(c) {
        n.wipe(c.state), c.buffer && n.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
      }, f;
    }()
  );
  e.SHA256 = a;
  var D = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function l(f, c, d, E, y) {
    for (; y >= 64; ) {
      for (var v = c[0], b = c[1], g = c[2], A = c[3], p = c[4], O = c[5], o = c[6], _ = c[7], u = 0; u < 16; u++) {
        var s = E + u * 4;
        f[u] = r.readUint32BE(d, s);
      }
      for (var u = 16; u < 64; u++) {
        var h = f[u - 2], t = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10;
        h = f[u - 15];
        var i = (h >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
        f[u] = (t + f[u - 7] | 0) + (i + f[u - 16] | 0);
      }
      for (var u = 0; u < 64; u++) {
        var t = (((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & O ^ ~p & o) | 0) + (_ + (D[u] + f[u] | 0) | 0) | 0, i = ((v >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10)) + (v & b ^ v & g ^ b & g) | 0;
        _ = o, o = O, O = p, p = A + t | 0, A = g, g = b, b = v, v = t + i | 0;
      }
      c[0] += v, c[1] += b, c[2] += g, c[3] += A, c[4] += p, c[5] += O, c[6] += o, c[7] += _, E += 64, y -= 64;
    }
    return E;
  }
  function w(f) {
    var c = new a();
    c.update(f);
    var d = c.digest();
    return c.clean(), d;
  }
  e.hash = w;
})(yr);
var gr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const r = pt, n = de;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function a(u) {
    const s = new Float64Array(16);
    if (u)
      for (let h = 0; h < u.length; h++)
        s[h] = u[h];
    return s;
  }
  const D = new Uint8Array(32);
  D[0] = 9;
  const l = a([56129, 1]);
  function w(u) {
    let s = 1;
    for (let h = 0; h < 16; h++) {
      let t = u[h] + s + 65535;
      s = Math.floor(t / 65536), u[h] = t - s * 65536;
    }
    u[0] += s - 1 + 37 * (s - 1);
  }
  function f(u, s, h) {
    const t = ~(h - 1);
    for (let i = 0; i < 16; i++) {
      const S = t & (u[i] ^ s[i]);
      u[i] ^= S, s[i] ^= S;
    }
  }
  function c(u, s) {
    const h = a(), t = a();
    for (let i = 0; i < 16; i++)
      t[i] = s[i];
    w(t), w(t), w(t);
    for (let i = 0; i < 2; i++) {
      h[0] = t[0] - 65517;
      for (let C = 1; C < 15; C++)
        h[C] = t[C] - 65535 - (h[C - 1] >> 16 & 1), h[C - 1] &= 65535;
      h[15] = t[15] - 32767 - (h[14] >> 16 & 1);
      const S = h[15] >> 16 & 1;
      h[14] &= 65535, f(t, h, 1 - S);
    }
    for (let i = 0; i < 16; i++)
      u[2 * i] = t[i] & 255, u[2 * i + 1] = t[i] >> 8;
  }
  function d(u, s) {
    for (let h = 0; h < 16; h++)
      u[h] = s[2 * h] + (s[2 * h + 1] << 8);
    u[15] &= 32767;
  }
  function E(u, s, h) {
    for (let t = 0; t < 16; t++)
      u[t] = s[t] + h[t];
  }
  function y(u, s, h) {
    for (let t = 0; t < 16; t++)
      u[t] = s[t] - h[t];
  }
  function v(u, s, h) {
    let t, i, S = 0, C = 0, F = 0, x = 0, j = 0, L = 0, T = 0, M = 0, m = 0, N = 0, G = 0, J = 0, X = 0, W = 0, U = 0, I = 0, R = 0, P = 0, H = 0, K = 0, z = 0, Y = 0, q = 0, $ = 0, V = 0, ve = 0, ge = 0, me = 0, Fe = 0, Re = 0, ke = 0, Z = h[0], k = h[1], ee = h[2], te = h[3], re = h[4], ne = h[5], ie = h[6], ae = h[7], ue = h[8], fe = h[9], he = h[10], se = h[11], oe = h[12], ce = h[13], le = h[14], De = h[15];
    t = s[0], S += t * Z, C += t * k, F += t * ee, x += t * te, j += t * re, L += t * ne, T += t * ie, M += t * ae, m += t * ue, N += t * fe, G += t * he, J += t * se, X += t * oe, W += t * ce, U += t * le, I += t * De, t = s[1], C += t * Z, F += t * k, x += t * ee, j += t * te, L += t * re, T += t * ne, M += t * ie, m += t * ae, N += t * ue, G += t * fe, J += t * he, X += t * se, W += t * oe, U += t * ce, I += t * le, R += t * De, t = s[2], F += t * Z, x += t * k, j += t * ee, L += t * te, T += t * re, M += t * ne, m += t * ie, N += t * ae, G += t * ue, J += t * fe, X += t * he, W += t * se, U += t * oe, I += t * ce, R += t * le, P += t * De, t = s[3], x += t * Z, j += t * k, L += t * ee, T += t * te, M += t * re, m += t * ne, N += t * ie, G += t * ae, J += t * ue, X += t * fe, W += t * he, U += t * se, I += t * oe, R += t * ce, P += t * le, H += t * De, t = s[4], j += t * Z, L += t * k, T += t * ee, M += t * te, m += t * re, N += t * ne, G += t * ie, J += t * ae, X += t * ue, W += t * fe, U += t * he, I += t * se, R += t * oe, P += t * ce, H += t * le, K += t * De, t = s[5], L += t * Z, T += t * k, M += t * ee, m += t * te, N += t * re, G += t * ne, J += t * ie, X += t * ae, W += t * ue, U += t * fe, I += t * he, R += t * se, P += t * oe, H += t * ce, K += t * le, z += t * De, t = s[6], T += t * Z, M += t * k, m += t * ee, N += t * te, G += t * re, J += t * ne, X += t * ie, W += t * ae, U += t * ue, I += t * fe, R += t * he, P += t * se, H += t * oe, K += t * ce, z += t * le, Y += t * De, t = s[7], M += t * Z, m += t * k, N += t * ee, G += t * te, J += t * re, X += t * ne, W += t * ie, U += t * ae, I += t * ue, R += t * fe, P += t * he, H += t * se, K += t * oe, z += t * ce, Y += t * le, q += t * De, t = s[8], m += t * Z, N += t * k, G += t * ee, J += t * te, X += t * re, W += t * ne, U += t * ie, I += t * ae, R += t * ue, P += t * fe, H += t * he, K += t * se, z += t * oe, Y += t * ce, q += t * le, $ += t * De, t = s[9], N += t * Z, G += t * k, J += t * ee, X += t * te, W += t * re, U += t * ne, I += t * ie, R += t * ae, P += t * ue, H += t * fe, K += t * he, z += t * se, Y += t * oe, q += t * ce, $ += t * le, V += t * De, t = s[10], G += t * Z, J += t * k, X += t * ee, W += t * te, U += t * re, I += t * ne, R += t * ie, P += t * ae, H += t * ue, K += t * fe, z += t * he, Y += t * se, q += t * oe, $ += t * ce, V += t * le, ve += t * De, t = s[11], J += t * Z, X += t * k, W += t * ee, U += t * te, I += t * re, R += t * ne, P += t * ie, H += t * ae, K += t * ue, z += t * fe, Y += t * he, q += t * se, $ += t * oe, V += t * ce, ve += t * le, ge += t * De, t = s[12], X += t * Z, W += t * k, U += t * ee, I += t * te, R += t * re, P += t * ne, H += t * ie, K += t * ae, z += t * ue, Y += t * fe, q += t * he, $ += t * se, V += t * oe, ve += t * ce, ge += t * le, me += t * De, t = s[13], W += t * Z, U += t * k, I += t * ee, R += t * te, P += t * re, H += t * ne, K += t * ie, z += t * ae, Y += t * ue, q += t * fe, $ += t * he, V += t * se, ve += t * oe, ge += t * ce, me += t * le, Fe += t * De, t = s[14], U += t * Z, I += t * k, R += t * ee, P += t * te, H += t * re, K += t * ne, z += t * ie, Y += t * ae, q += t * ue, $ += t * fe, V += t * he, ve += t * se, ge += t * oe, me += t * ce, Fe += t * le, Re += t * De, t = s[15], I += t * Z, R += t * k, P += t * ee, H += t * te, K += t * re, z += t * ne, Y += t * ie, q += t * ae, $ += t * ue, V += t * fe, ve += t * he, ge += t * se, me += t * oe, Fe += t * ce, Re += t * le, ke += t * De, S += 38 * R, C += 38 * P, F += 38 * H, x += 38 * K, j += 38 * z, L += 38 * Y, T += 38 * q, M += 38 * $, m += 38 * V, N += 38 * ve, G += 38 * ge, J += 38 * me, X += 38 * Fe, W += 38 * Re, U += 38 * ke, i = 1, t = S + i + 65535, i = Math.floor(t / 65536), S = t - i * 65536, t = C + i + 65535, i = Math.floor(t / 65536), C = t - i * 65536, t = F + i + 65535, i = Math.floor(t / 65536), F = t - i * 65536, t = x + i + 65535, i = Math.floor(t / 65536), x = t - i * 65536, t = j + i + 65535, i = Math.floor(t / 65536), j = t - i * 65536, t = L + i + 65535, i = Math.floor(t / 65536), L = t - i * 65536, t = T + i + 65535, i = Math.floor(t / 65536), T = t - i * 65536, t = M + i + 65535, i = Math.floor(t / 65536), M = t - i * 65536, t = m + i + 65535, i = Math.floor(t / 65536), m = t - i * 65536, t = N + i + 65535, i = Math.floor(t / 65536), N = t - i * 65536, t = G + i + 65535, i = Math.floor(t / 65536), G = t - i * 65536, t = J + i + 65535, i = Math.floor(t / 65536), J = t - i * 65536, t = X + i + 65535, i = Math.floor(t / 65536), X = t - i * 65536, t = W + i + 65535, i = Math.floor(t / 65536), W = t - i * 65536, t = U + i + 65535, i = Math.floor(t / 65536), U = t - i * 65536, t = I + i + 65535, i = Math.floor(t / 65536), I = t - i * 65536, S += i - 1 + 37 * (i - 1), i = 1, t = S + i + 65535, i = Math.floor(t / 65536), S = t - i * 65536, t = C + i + 65535, i = Math.floor(t / 65536), C = t - i * 65536, t = F + i + 65535, i = Math.floor(t / 65536), F = t - i * 65536, t = x + i + 65535, i = Math.floor(t / 65536), x = t - i * 65536, t = j + i + 65535, i = Math.floor(t / 65536), j = t - i * 65536, t = L + i + 65535, i = Math.floor(t / 65536), L = t - i * 65536, t = T + i + 65535, i = Math.floor(t / 65536), T = t - i * 65536, t = M + i + 65535, i = Math.floor(t / 65536), M = t - i * 65536, t = m + i + 65535, i = Math.floor(t / 65536), m = t - i * 65536, t = N + i + 65535, i = Math.floor(t / 65536), N = t - i * 65536, t = G + i + 65535, i = Math.floor(t / 65536), G = t - i * 65536, t = J + i + 65535, i = Math.floor(t / 65536), J = t - i * 65536, t = X + i + 65535, i = Math.floor(t / 65536), X = t - i * 65536, t = W + i + 65535, i = Math.floor(t / 65536), W = t - i * 65536, t = U + i + 65535, i = Math.floor(t / 65536), U = t - i * 65536, t = I + i + 65535, i = Math.floor(t / 65536), I = t - i * 65536, S += i - 1 + 37 * (i - 1), u[0] = S, u[1] = C, u[2] = F, u[3] = x, u[4] = j, u[5] = L, u[6] = T, u[7] = M, u[8] = m, u[9] = N, u[10] = G, u[11] = J, u[12] = X, u[13] = W, u[14] = U, u[15] = I;
  }
  function b(u, s) {
    v(u, s, s);
  }
  function g(u, s) {
    const h = a();
    for (let t = 0; t < 16; t++)
      h[t] = s[t];
    for (let t = 253; t >= 0; t--)
      b(h, h), t !== 2 && t !== 4 && v(h, h, s);
    for (let t = 0; t < 16; t++)
      u[t] = h[t];
  }
  function A(u, s) {
    const h = new Uint8Array(32), t = new Float64Array(80), i = a(), S = a(), C = a(), F = a(), x = a(), j = a();
    for (let m = 0; m < 31; m++)
      h[m] = u[m];
    h[31] = u[31] & 127 | 64, h[0] &= 248, d(t, s);
    for (let m = 0; m < 16; m++)
      S[m] = t[m];
    i[0] = F[0] = 1;
    for (let m = 254; m >= 0; --m) {
      const N = h[m >>> 3] >>> (m & 7) & 1;
      f(i, S, N), f(C, F, N), E(x, i, C), y(i, i, C), E(C, S, F), y(S, S, F), b(F, x), b(j, i), v(i, C, i), v(C, S, x), E(x, i, C), y(i, i, C), b(S, i), y(C, F, j), v(i, C, l), E(i, i, F), v(C, C, i), v(i, F, j), v(F, S, t), b(S, x), f(i, S, N), f(C, F, N);
    }
    for (let m = 0; m < 16; m++)
      t[m + 16] = i[m], t[m + 32] = C[m], t[m + 48] = S[m], t[m + 64] = F[m];
    const L = t.subarray(32), T = t.subarray(16);
    g(L, L), v(T, T, L);
    const M = new Uint8Array(32);
    return c(M, T), M;
  }
  e.scalarMult = A;
  function p(u) {
    return A(u, D);
  }
  e.scalarMultBase = p;
  function O(u) {
    if (u.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const s = new Uint8Array(u);
    return {
      publicKey: p(s),
      secretKey: s
    };
  }
  e.generateKeyPairFromSeed = O;
  function o(u) {
    const s = (0, r.randomBytes)(32, u), h = O(s);
    return (0, n.wipe)(s), h;
  }
  e.generateKeyPair = o;
  function _(u, s, h = !1) {
    if (u.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (s.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const t = A(u, s);
    if (h) {
      let i = 0;
      for (let S = 0; S < t.length; S++)
        i |= t[S];
      if (i === 0)
        throw new Error("X25519: invalid shared key");
    }
    return t;
  }
  e.sharedKey = _;
})(gr);
function Sr(e, r) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), a = 0; a < n.length; a++)
    n[a] = 255;
  for (var D = 0; D < e.length; D++) {
    var l = e.charAt(D), w = l.charCodeAt(0);
    if (n[w] !== 255)
      throw new TypeError(l + " is ambiguous");
    n[w] = D;
  }
  var f = e.length, c = e.charAt(0), d = Math.log(f) / Math.log(256), E = Math.log(256) / Math.log(f);
  function y(g) {
    if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (g.length === 0)
      return "";
    for (var A = 0, p = 0, O = 0, o = g.length; O !== o && g[O] === 0; )
      O++, A++;
    for (var _ = (o - O) * E + 1 >>> 0, u = new Uint8Array(_); O !== o; ) {
      for (var s = g[O], h = 0, t = _ - 1; (s !== 0 || h < p) && t !== -1; t--, h++)
        s += 256 * u[t] >>> 0, u[t] = s % f >>> 0, s = s / f >>> 0;
      if (s !== 0)
        throw new Error("Non-zero carry");
      p = h, O++;
    }
    for (var i = _ - p; i !== _ && u[i] === 0; )
      i++;
    for (var S = c.repeat(A); i < _; ++i)
      S += e.charAt(u[i]);
    return S;
  }
  function v(g) {
    if (typeof g != "string")
      throw new TypeError("Expected String");
    if (g.length === 0)
      return new Uint8Array();
    var A = 0;
    if (g[A] !== " ") {
      for (var p = 0, O = 0; g[A] === c; )
        p++, A++;
      for (var o = (g.length - A) * d + 1 >>> 0, _ = new Uint8Array(o); g[A]; ) {
        var u = n[g.charCodeAt(A)];
        if (u === 255)
          return;
        for (var s = 0, h = o - 1; (u !== 0 || s < O) && h !== -1; h--, s++)
          u += f * _[h] >>> 0, _[h] = u % 256 >>> 0, u = u / 256 >>> 0;
        if (u !== 0)
          throw new Error("Non-zero carry");
        O = s, A++;
      }
      if (g[A] !== " ") {
        for (var t = o - O; t !== o && _[t] === 0; )
          t++;
        for (var i = new Uint8Array(p + (o - t)), S = p; t !== o; )
          i[S++] = _[t++];
        return i;
      }
    }
  }
  function b(g) {
    var A = v(g);
    if (A)
      return A;
    throw new Error(`Non-${r} character`);
  }
  return {
    encode: y,
    decodeUnsafe: v,
    decode: b
  };
}
var mr = Sr, Cr = mr;
const pr = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Ar = (e) => new TextEncoder().encode(e), Ur = (e) => new TextDecoder().decode(e);
class Or {
  constructor(r, n, a) {
    this.name = r, this.prefix = n, this.baseEncode = a;
  }
  encode(r) {
    if (r instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(r)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Fr {
  constructor(r, n, a) {
    if (this.name = r, this.prefix = n, n.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = n.codePointAt(0), this.baseDecode = a;
  }
  decode(r) {
    if (typeof r == "string") {
      if (r.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(r.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(r) {
    return At(this, r);
  }
}
class Nr {
  constructor(r) {
    this.decoders = r;
  }
  or(r) {
    return At(this, r);
  }
  decode(r) {
    const n = r[0], a = this.decoders[n];
    if (a)
      return a.decode(r);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const At = (e, r) => new Nr({
  ...e.decoders || { [e.prefix]: e },
  ...r.decoders || { [r.prefix]: r }
});
class Tr {
  constructor(r, n, a, D) {
    this.name = r, this.prefix = n, this.baseEncode = a, this.baseDecode = D, this.encoder = new Or(r, n, a), this.decoder = new Fr(r, n, D);
  }
  encode(r) {
    return this.encoder.encode(r);
  }
  decode(r) {
    return this.decoder.decode(r);
  }
}
const je = ({ name: e, prefix: r, encode: n, decode: a }) => new Tr(e, r, n, a), Oe = ({ prefix: e, name: r, alphabet: n }) => {
  const { encode: a, decode: D } = Cr(n, r);
  return je({
    prefix: e,
    name: r,
    encode: a,
    decode: (l) => pr(D(l))
  });
}, Mr = (e, r, n, a) => {
  const D = {};
  for (let E = 0; E < r.length; ++E)
    D[r[E]] = E;
  let l = e.length;
  for (; e[l - 1] === "="; )
    --l;
  const w = new Uint8Array(l * n / 8 | 0);
  let f = 0, c = 0, d = 0;
  for (let E = 0; E < l; ++E) {
    const y = D[e[E]];
    if (y === void 0)
      throw new SyntaxError(`Non-${a} character`);
    c = c << n | y, f += n, f >= 8 && (f -= 8, w[d++] = 255 & c >> f);
  }
  if (f >= n || 255 & c << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return w;
}, xr = (e, r, n) => {
  const a = r[r.length - 1] === "=", D = (1 << n) - 1;
  let l = "", w = 0, f = 0;
  for (let c = 0; c < e.length; ++c)
    for (f = f << 8 | e[c], w += 8; w > n; )
      w -= n, l += r[D & f >> w];
  if (w && (l += r[D & f << n - w]), a)
    for (; l.length * n & 7; )
      l += "=";
  return l;
}, Q = ({ name: e, prefix: r, bitsPerChar: n, alphabet: a }) => je({
  prefix: r,
  name: e,
  encode(D) {
    return xr(D, a, n);
  },
  decode(D) {
    return Mr(D, a, n, e);
  }
}), Lr = je({
  prefix: "\0",
  name: "identity",
  encode: (e) => Ur(e),
  decode: (e) => Ar(e)
}), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Lr
}, Symbol.toStringTag, { value: "Module" })), Br = Q({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Br
}, Symbol.toStringTag, { value: "Module" })), jr = Q({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: jr
}, Symbol.toStringTag, { value: "Module" })), Ir = Oe({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Ir
}, Symbol.toStringTag, { value: "Module" })), Rr = Q({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Pr = Q({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Rr,
  base16upper: Pr
}, Symbol.toStringTag, { value: "Module" })), Hr = Q({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Kr = Q({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), zr = Q({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Yr = Q({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), qr = Q({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), $r = Q({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Gr = Q({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Vr = Q({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Wr = Q({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Hr,
  base32hex: qr,
  base32hexpad: Gr,
  base32hexpadupper: Vr,
  base32hexupper: $r,
  base32pad: zr,
  base32padupper: Yr,
  base32upper: Kr,
  base32z: Wr
}, Symbol.toStringTag, { value: "Module" })), Xr = Oe({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Jr = Oe({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Xr,
  base36upper: Jr
}, Symbol.toStringTag, { value: "Module" })), Qr = Oe({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Zr = Oe({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Qr,
  base58flickr: Zr
}, Symbol.toStringTag, { value: "Module" })), kr = Q({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), en = Q({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), tn = Q({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), rn = Q({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: kr,
  base64pad: en,
  base64url: tn,
  base64urlpad: rn
}, Symbol.toStringTag, { value: "Module" })), Ut = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), nn = Ut.reduce((e, r, n) => (e[n] = r, e), []), an = Ut.reduce((e, r, n) => (e[r.codePointAt(0)] = n, e), []);
function un(e) {
  return e.reduce((r, n) => (r += nn[n], r), "");
}
function fn(e) {
  const r = [];
  for (const n of e) {
    const a = an[n.codePointAt(0)];
    if (a === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    r.push(a);
  }
  return new Uint8Array(r);
}
const hn = je({
  prefix: "🚀",
  name: "base256emoji",
  encode: un,
  decode: fn
}), ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: hn
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
var sn = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var We = function(e, r) {
  return We = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
    n.__proto__ = a;
  } || function(n, a) {
    for (var D in a)
      a.hasOwnProperty(D) && (n[D] = a[D]);
  }, We(e, r);
};
function on(e, r) {
  We(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
}
var Xe = function() {
  return Xe = Object.assign || function(r) {
    for (var n, a = 1, D = arguments.length; a < D; a++) {
      n = arguments[a];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
    }
    return r;
  }, Xe.apply(this, arguments);
};
function cn(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var D = 0, a = Object.getOwnPropertySymbols(e); D < a.length; D++)
      r.indexOf(a[D]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[D]) && (n[a[D]] = e[a[D]]);
  return n;
}
function ln(e, r, n, a) {
  var D = arguments.length, l = D < 3 ? r : a === null ? a = Object.getOwnPropertyDescriptor(r, n) : a, w;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(e, r, n, a);
  else
    for (var f = e.length - 1; f >= 0; f--)
      (w = e[f]) && (l = (D < 3 ? w(l) : D > 3 ? w(r, n, l) : w(r, n)) || l);
  return D > 3 && l && Object.defineProperty(r, n, l), l;
}
function Dn(e, r) {
  return function(n, a) {
    r(n, a, e);
  };
}
function _n(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function dn(e, r, n, a) {
  function D(l) {
    return l instanceof n ? l : new n(function(w) {
      w(l);
    });
  }
  return new (n || (n = Promise))(function(l, w) {
    function f(E) {
      try {
        d(a.next(E));
      } catch (y) {
        w(y);
      }
    }
    function c(E) {
      try {
        d(a.throw(E));
      } catch (y) {
        w(y);
      }
    }
    function d(E) {
      E.done ? l(E.value) : D(E.value).then(f, c);
    }
    d((a = a.apply(e, r || [])).next());
  });
}
function En(e, r) {
  var n = { label: 0, sent: function() {
    if (l[0] & 1)
      throw l[1];
    return l[1];
  }, trys: [], ops: [] }, a, D, l, w;
  return w = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
    return this;
  }), w;
  function f(d) {
    return function(E) {
      return c([d, E]);
    };
  }
  function c(d) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (a = 1, D && (l = d[0] & 2 ? D.return : d[0] ? D.throw || ((l = D.return) && l.call(D), 0) : D.next) && !(l = l.call(D, d[1])).done)
          return l;
        switch (D = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
          case 0:
          case 1:
            l = d;
            break;
          case 4:
            return n.label++, { value: d[1], done: !1 };
          case 5:
            n.label++, D = d[1], d = [0];
            continue;
          case 7:
            d = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              n = 0;
              continue;
            }
            if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
              n.label = d[1];
              break;
            }
            if (d[0] === 6 && n.label < l[1]) {
              n.label = l[1], l = d;
              break;
            }
            if (l && n.label < l[2]) {
              n.label = l[2], n.ops.push(d);
              break;
            }
            l[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        d = r.call(e, n);
      } catch (E) {
        d = [6, E], D = 0;
      } finally {
        a = l = 0;
      }
    if (d[0] & 5)
      throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function bn(e, r, n, a) {
  a === void 0 && (a = n), e[a] = r[n];
}
function vn(e, r) {
  for (var n in e)
    n !== "default" && !r.hasOwnProperty(n) && (r[n] = e[n]);
}
function Je(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, n = r && e[r], a = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ot(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var a = n.call(e), D, l = [], w;
  try {
    for (; (r === void 0 || r-- > 0) && !(D = a.next()).done; )
      l.push(D.value);
  } catch (f) {
    w = { error: f };
  } finally {
    try {
      D && !D.done && (n = a.return) && n.call(a);
    } finally {
      if (w)
        throw w.error;
    }
  }
  return l;
}
function wn() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e = e.concat(Ot(arguments[r]));
  return e;
}
function yn() {
  for (var e = 0, r = 0, n = arguments.length; r < n; r++)
    e += arguments[r].length;
  for (var a = Array(e), D = 0, r = 0; r < n; r++)
    for (var l = arguments[r], w = 0, f = l.length; w < f; w++, D++)
      a[D] = l[w];
  return a;
}
function Ae(e) {
  return this instanceof Ae ? (this.v = e, this) : new Ae(e);
}
function gn(e, r, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = n.apply(e, r || []), D, l = [];
  return D = {}, w("next"), w("throw"), w("return"), D[Symbol.asyncIterator] = function() {
    return this;
  }, D;
  function w(v) {
    a[v] && (D[v] = function(b) {
      return new Promise(function(g, A) {
        l.push([v, b, g, A]) > 1 || f(v, b);
      });
    });
  }
  function f(v, b) {
    try {
      c(a[v](b));
    } catch (g) {
      y(l[0][3], g);
    }
  }
  function c(v) {
    v.value instanceof Ae ? Promise.resolve(v.value.v).then(d, E) : y(l[0][2], v);
  }
  function d(v) {
    f("next", v);
  }
  function E(v) {
    f("throw", v);
  }
  function y(v, b) {
    v(b), l.shift(), l.length && f(l[0][0], l[0][1]);
  }
}
function Sn(e) {
  var r, n;
  return r = {}, a("next"), a("throw", function(D) {
    throw D;
  }), a("return"), r[Symbol.iterator] = function() {
    return this;
  }, r;
  function a(D, l) {
    r[D] = e[D] ? function(w) {
      return (n = !n) ? { value: Ae(e[D](w)), done: D === "return" } : l ? l(w) : w;
    } : l;
  }
}
function mn(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], n;
  return r ? r.call(e) : (e = typeof Je == "function" ? Je(e) : e[Symbol.iterator](), n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function a(l) {
    n[l] = e[l] && function(w) {
      return new Promise(function(f, c) {
        w = e[l](w), D(f, c, w.done, w.value);
      });
    };
  }
  function D(l, w, f, c) {
    Promise.resolve(c).then(function(d) {
      l({ value: d, done: f });
    }, w);
  }
}
function Cn(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}
function pn(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r.default = e, r;
}
function An(e) {
  return e && e.__esModule ? e : { default: e };
}
function Un(e, r) {
  if (!r.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return r.get(e);
}
function On(e, r, n) {
  if (!r.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return r.set(e, n), n;
}
const Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Xe;
  },
  __asyncDelegator: Sn,
  __asyncGenerator: gn,
  __asyncValues: mn,
  __await: Ae,
  __awaiter: dn,
  __classPrivateFieldGet: Un,
  __classPrivateFieldSet: On,
  __createBinding: bn,
  __decorate: ln,
  __exportStar: vn,
  __extends: on,
  __generator: En,
  __importDefault: An,
  __importStar: pn,
  __makeTemplateObject: Cn,
  __metadata: _n,
  __param: Dn,
  __read: Ot,
  __rest: cn,
  __spread: wn,
  __spreadArrays: yn,
  __values: Je
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ xt(Fn);
var Pe = {}, Ce = {}, nt;
function Nn() {
  if (nt)
    return Ce;
  nt = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.delay = void 0;
  function e(r) {
    return new Promise((n) => {
      setTimeout(() => {
        n(!0);
      }, r);
    });
  }
  return Ce.delay = e, Ce;
}
var we = {}, He = {}, ye = {}, it;
function Tn() {
  return it || (it = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.ONE_THOUSAND = ye.ONE_HUNDRED = void 0, ye.ONE_HUNDRED = 100, ye.ONE_THOUSAND = 1e3), ye;
}
var Ke = {}, at;
function Mn() {
  return at || (at = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Ke)), Ke;
}
var ut;
function Ft() {
  return ut || (ut = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = Ie;
    r.__exportStar(Tn(), e), r.__exportStar(Mn(), e);
  }(He)), He;
}
var ft;
function xn() {
  if (ft)
    return we;
  ft = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.fromMiliseconds = we.toMiliseconds = void 0;
  const e = Ft();
  function r(a) {
    return a * e.ONE_THOUSAND;
  }
  we.toMiliseconds = r;
  function n(a) {
    return Math.floor(a / e.ONE_THOUSAND);
  }
  return we.fromMiliseconds = n, we;
}
var ht;
function Ln() {
  return ht || (ht = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = Ie;
    r.__exportStar(Nn(), e), r.__exportStar(xn(), e);
  }(Pe)), Pe;
}
var Se = {}, st;
function Bn() {
  if (st)
    return Se;
  st = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.Watch = void 0;
  class e {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(n) {
      if (this.timestamps.has(n))
        throw new Error(`Watch already started for label: ${n}`);
      this.timestamps.set(n, { started: Date.now() });
    }
    stop(n) {
      const a = this.get(n);
      if (typeof a.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${n}`);
      const D = Date.now() - a.started;
      this.timestamps.set(n, { started: a.started, elapsed: D });
    }
    get(n) {
      const a = this.timestamps.get(n);
      if (typeof a > "u")
        throw new Error(`No timestamp found for label: ${n}`);
      return a;
    }
    elapsed(n) {
      const a = this.get(n);
      return a.elapsed || Date.now() - a.started;
    }
  }
  return Se.Watch = e, Se.default = e, Se;
}
var ze = {}, pe = {}, ot;
function jn() {
  if (ot)
    return pe;
  ot = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.IWatch = void 0;
  class e {
  }
  return pe.IWatch = e, pe;
}
var ct;
function In() {
  return ct || (ct = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Ie.__exportStar(jn(), e);
  }(ze)), ze;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const r = Ie;
  r.__exportStar(Ln(), e), r.__exportStar(Bn(), e), r.__exportStar(In(), e), r.__exportStar(Ft(), e);
})(sn);
var Rn = {}, Pn = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`), Nt = "%[a-f0-9]{2}", lt = new RegExp("(" + Nt + ")|([^%]+?)", "gi"), Dt = new RegExp("(" + Nt + ")+", "gi");
function Qe(e, r) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  r = r || 1;
  var n = e.slice(0, r), a = e.slice(r);
  return Array.prototype.concat.call([], Qe(n), Qe(a));
}
function Hn(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var r = e.match(lt) || [], n = 1; n < r.length; n++)
      e = Qe(r, n).join(""), r = e.match(lt) || [];
    return e;
  }
}
function Kn(e) {
  for (var r = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, n = Dt.exec(e); n; ) {
    try {
      r[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var a = Hn(n[0]);
      a !== n[0] && (r[n[0]] = a);
    }
    n = Dt.exec(e);
  }
  r["%C2"] = "�";
  for (var D = Object.keys(r), l = 0; l < D.length; l++) {
    var w = D[l];
    e = e.replace(new RegExp(w, "g"), r[w]);
  }
  return e;
}
var zn = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Kn(e);
  }
}, Yn = (e, r) => {
  if (!(typeof e == "string" && typeof r == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (r === "")
    return [e];
  const n = e.indexOf(r);
  return n === -1 ? [e] : [
    e.slice(0, n),
    e.slice(n + r.length)
  ];
}, qn = function(e, r) {
  for (var n = {}, a = Object.keys(e), D = Array.isArray(r), l = 0; l < a.length; l++) {
    var w = a[l], f = e[w];
    (D ? r.indexOf(w) !== -1 : r(w, f, e)) && (n[w] = f);
  }
  return n;
};
(function(e) {
  const r = Pn, n = zn, a = Yn, D = qn, l = (o) => o == null, w = Symbol("encodeFragmentIdentifier");
  function f(o) {
    switch (o.arrayFormat) {
      case "index":
        return (_) => (u, s) => {
          const h = u.length;
          return s === void 0 || o.skipNull && s === null || o.skipEmptyString && s === "" ? u : s === null ? [...u, [E(_, o), "[", h, "]"].join("")] : [
            ...u,
            [E(_, o), "[", E(h, o), "]=", E(s, o)].join("")
          ];
        };
      case "bracket":
        return (_) => (u, s) => s === void 0 || o.skipNull && s === null || o.skipEmptyString && s === "" ? u : s === null ? [...u, [E(_, o), "[]"].join("")] : [...u, [E(_, o), "[]=", E(s, o)].join("")];
      case "colon-list-separator":
        return (_) => (u, s) => s === void 0 || o.skipNull && s === null || o.skipEmptyString && s === "" ? u : s === null ? [...u, [E(_, o), ":list="].join("")] : [...u, [E(_, o), ":list=", E(s, o)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const _ = o.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (u) => (s, h) => h === void 0 || o.skipNull && h === null || o.skipEmptyString && h === "" ? s : (h = h === null ? "" : h, s.length === 0 ? [[E(u, o), _, E(h, o)].join("")] : [[s, E(h, o)].join(o.arrayFormatSeparator)]);
      }
      default:
        return (_) => (u, s) => s === void 0 || o.skipNull && s === null || o.skipEmptyString && s === "" ? u : s === null ? [...u, E(_, o)] : [...u, [E(_, o), "=", E(s, o)].join("")];
    }
  }
  function c(o) {
    let _;
    switch (o.arrayFormat) {
      case "index":
        return (u, s, h) => {
          if (_ = /\[(\d*)\]$/.exec(u), u = u.replace(/\[\d*\]$/, ""), !_) {
            h[u] = s;
            return;
          }
          h[u] === void 0 && (h[u] = {}), h[u][_[1]] = s;
        };
      case "bracket":
        return (u, s, h) => {
          if (_ = /(\[\])$/.exec(u), u = u.replace(/\[\]$/, ""), !_) {
            h[u] = s;
            return;
          }
          if (h[u] === void 0) {
            h[u] = [s];
            return;
          }
          h[u] = [].concat(h[u], s);
        };
      case "colon-list-separator":
        return (u, s, h) => {
          if (_ = /(:list)$/.exec(u), u = u.replace(/:list$/, ""), !_) {
            h[u] = s;
            return;
          }
          if (h[u] === void 0) {
            h[u] = [s];
            return;
          }
          h[u] = [].concat(h[u], s);
        };
      case "comma":
      case "separator":
        return (u, s, h) => {
          const t = typeof s == "string" && s.includes(o.arrayFormatSeparator), i = typeof s == "string" && !t && y(s, o).includes(o.arrayFormatSeparator);
          s = i ? y(s, o) : s;
          const S = t || i ? s.split(o.arrayFormatSeparator).map((C) => y(C, o)) : s === null ? s : y(s, o);
          h[u] = S;
        };
      case "bracket-separator":
        return (u, s, h) => {
          const t = /(\[\])$/.test(u);
          if (u = u.replace(/\[\]$/, ""), !t) {
            h[u] = s && y(s, o);
            return;
          }
          const i = s === null ? [] : s.split(o.arrayFormatSeparator).map((S) => y(S, o));
          if (h[u] === void 0) {
            h[u] = i;
            return;
          }
          h[u] = [].concat(h[u], i);
        };
      default:
        return (u, s, h) => {
          if (h[u] === void 0) {
            h[u] = s;
            return;
          }
          h[u] = [].concat(h[u], s);
        };
    }
  }
  function d(o) {
    if (typeof o != "string" || o.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(o, _) {
    return _.encode ? _.strict ? r(o) : encodeURIComponent(o) : o;
  }
  function y(o, _) {
    return _.decode ? n(o) : o;
  }
  function v(o) {
    return Array.isArray(o) ? o.sort() : typeof o == "object" ? v(Object.keys(o)).sort((_, u) => Number(_) - Number(u)).map((_) => o[_]) : o;
  }
  function b(o) {
    const _ = o.indexOf("#");
    return _ !== -1 && (o = o.slice(0, _)), o;
  }
  function g(o) {
    let _ = "";
    const u = o.indexOf("#");
    return u !== -1 && (_ = o.slice(u)), _;
  }
  function A(o) {
    o = b(o);
    const _ = o.indexOf("?");
    return _ === -1 ? "" : o.slice(_ + 1);
  }
  function p(o, _) {
    return _.parseNumbers && !Number.isNaN(Number(o)) && typeof o == "string" && o.trim() !== "" ? o = Number(o) : _.parseBooleans && o !== null && (o.toLowerCase() === "true" || o.toLowerCase() === "false") && (o = o.toLowerCase() === "true"), o;
  }
  function O(o, _) {
    _ = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, _), d(_.arrayFormatSeparator);
    const u = c(_), s = /* @__PURE__ */ Object.create(null);
    if (typeof o != "string" || (o = o.trim().replace(/^[?#&]/, ""), !o))
      return s;
    for (const h of o.split("&")) {
      if (h === "")
        continue;
      let [t, i] = a(_.decode ? h.replace(/\+/g, " ") : h, "=");
      i = i === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(_.arrayFormat) ? i : y(i, _), u(y(t, _), i, s);
    }
    for (const h of Object.keys(s)) {
      const t = s[h];
      if (typeof t == "object" && t !== null)
        for (const i of Object.keys(t))
          t[i] = p(t[i], _);
      else
        s[h] = p(t, _);
    }
    return _.sort === !1 ? s : (_.sort === !0 ? Object.keys(s).sort() : Object.keys(s).sort(_.sort)).reduce((h, t) => {
      const i = s[t];
      return i && typeof i == "object" && !Array.isArray(i) ? h[t] = v(i) : h[t] = i, h;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = A, e.parse = O, e.stringify = (o, _) => {
    if (!o)
      return "";
    _ = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, _), d(_.arrayFormatSeparator);
    const u = (i) => _.skipNull && l(o[i]) || _.skipEmptyString && o[i] === "", s = f(_), h = {};
    for (const i of Object.keys(o))
      u(i) || (h[i] = o[i]);
    const t = Object.keys(h);
    return _.sort !== !1 && t.sort(_.sort), t.map((i) => {
      const S = o[i];
      return S === void 0 ? "" : S === null ? E(i, _) : Array.isArray(S) ? S.length === 0 && _.arrayFormat === "bracket-separator" ? E(i, _) + "[]" : S.reduce(s(i), []).join("&") : E(i, _) + "=" + E(S, _);
    }).filter((i) => i.length > 0).join("&");
  }, e.parseUrl = (o, _) => {
    _ = Object.assign({
      decode: !0
    }, _);
    const [u, s] = a(o, "#");
    return Object.assign(
      {
        url: u.split("?")[0] || "",
        query: O(A(o), _)
      },
      _ && _.parseFragmentIdentifier && s ? { fragmentIdentifier: y(s, _) } : {}
    );
  }, e.stringifyUrl = (o, _) => {
    _ = Object.assign({
      encode: !0,
      strict: !0,
      [w]: !0
    }, _);
    const u = b(o.url).split("?")[0] || "", s = e.extract(o.url), h = e.parse(s, { sort: !1 }), t = Object.assign(h, o.query);
    let i = e.stringify(t, _);
    i && (i = `?${i}`);
    let S = g(o.url);
    return o.fragmentIdentifier && (S = `#${_[w] ? E(o.fragmentIdentifier, _) : o.fragmentIdentifier}`), `${u}${i}${S}`;
  }, e.pick = (o, _, u) => {
    u = Object.assign({
      parseFragmentIdentifier: !0,
      [w]: !1
    }, u);
    const { url: s, query: h, fragmentIdentifier: t } = e.parseUrl(o, u);
    return e.stringifyUrl({
      url: s,
      query: D(h, _),
      fragmentIdentifier: t
    }, u);
  }, e.exclude = (o, _, u) => {
    const s = Array.isArray(_) ? (h) => !_.includes(h) : (h, t) => !_(h, t);
    return e.pick(o, s, u);
  };
})(Rn);
export {
  Gn as H,
  Lt as a,
  Wn as b,
  sn as c,
  Xn as d,
  Jn as e,
  Qn as f,
  Zn as g,
  kn as h,
  Vn as i,
  ei as j,
  ti as k,
  ri as l,
  B as m,
  Rn as q,
  pt as r,
  yr as s,
  de as w,
  gr as x
};
