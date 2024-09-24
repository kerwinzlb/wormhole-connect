var Ed = Object.defineProperty;
var Nd = (r, e, t) => e in r ? Ed(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var y = (r, e, t) => (Nd(r, typeof e != "symbol" ? e + "" : e, t), t), R0 = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var l = (r, e, t) => (R0(r, e, "read from private field"), t ? t.call(r) : e.get(r)), w = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, h = (r, e, t, n) => (R0(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
var Dr = (r, e, t, n) => ({
  set _(s) {
    h(r, e, s, t);
  },
  get _() {
    return l(r, e, n);
  }
}), I = (r, e, t) => (R0(r, e, "access private method"), t);
import { d as Tc, ar as B0, as as Ic, at as Pd, au as Td, av as Id, aw as Cd, ax as v0, ay as kd, az as Od, aA as Rd, aB as Bd, aC as vd } from "./index-DV1w5RNX.mjs";
import { C as Sd, P as Ud } from "./chain-tk4BDPwT.mjs";
const Zf = "6.12.1";
function Ld(r, e, t) {
  const n = e.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === e)
          return;
    }
  const s = new Error(`invalid value for type ${e}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${t}`, s.value = r, s;
}
async function Ie(r) {
  const e = Object.keys(r);
  return (await Promise.all(e.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[e[i]] = s, n), {});
}
function D(r, e, t) {
  for (let n in e) {
    let s = e[n];
    const i = t ? t[n] : null;
    i && Ld(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function zr(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(zr).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let t = "0x";
    for (let n = 0; n < r.length; n++)
      t += e[r[n] >> 4], t += e[r[n] & 15];
    return t;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return zr(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const e = Object.keys(r);
      return e.sort(), "{ " + e.map((t) => `${zr(t)}: ${zr(r[t])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Ce(r, e) {
  return r && r.code === e;
}
function Vo(r) {
  return Ce(r, "CALL_EXCEPTION");
}
function ue(r, e, t) {
  let n = r;
  {
    const i = [];
    if (t) {
      if ("message" in t || "code" in t || "name" in t)
        throw new Error(`value will overwrite populated values: ${zr(t)}`);
      for (const a in t) {
        if (a === "shortMessage")
          continue;
        const o = t[a];
        i.push(a + "=" + zr(o));
      }
    }
    i.push(`code=${e}`), i.push(`version=${Zf}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (e) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return D(s, { code: e }), t && Object.assign(s, t), s.shortMessage == null && D(s, { shortMessage: n }), s;
}
function N(r, e, t, n) {
  if (!r)
    throw ue(e, t, n);
}
function b(r, e, t, n) {
  N(r, e, "INVALID_ARGUMENT", { argument: t, value: n });
}
function Yf(r, e, t) {
  t == null && (t = ""), t && (t = ": " + t), N(r >= e, "missing arguemnt" + t, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: e
  }), N(r <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: e
  });
}
const Dd = ["NFD", "NFC", "NFKD", "NFKC"].reduce((r, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(e);
  } catch {
  }
  return r;
}, []);
function Xf(r) {
  N(Dd.indexOf(r) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form: r }
  });
}
function Rr(r, e, t) {
  if (t == null && (t = ""), r !== e) {
    let n = t, s = "new";
    t && (n += ".", s += " " + t), N(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function $f(r, e, t) {
  if (r instanceof Uint8Array)
    return t ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  b(!1, "invalid BytesLike value", e || "value", r);
}
function v(r, e) {
  return $f(r, e, !1);
}
function me(r, e) {
  return $f(r, e, !0);
}
function ee(r, e) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && r.length !== 2 + 2 * e || e === !0 && r.length % 2 !== 0);
}
function l0(r) {
  return ee(r, !0) || r instanceof Uint8Array;
}
const Cc = "0123456789abcdef";
function P(r) {
  const e = v(r);
  let t = "0x";
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    t += Cc[(s & 240) >> 4] + Cc[s & 15];
  }
  return t;
}
function X(r) {
  return "0x" + r.map((e) => P(e).substring(2)).join("");
}
function Yr(r) {
  return ee(r, !0) ? (r.length - 2) / 2 : v(r).length;
}
function ne(r, e, t) {
  const n = v(r);
  return t != null && t > n.length && N(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: t
  }), P(n.slice(e ?? 0, t ?? n.length));
}
function qf(r, e, t) {
  const n = v(r);
  N(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: e,
    offset: e + 1
  });
  const s = new Uint8Array(e);
  return s.fill(0), t ? s.set(n, e - n.length) : s.set(n, 0), P(s);
}
function Pr(r, e) {
  return qf(r, e, !0);
}
function Fd(r, e) {
  return qf(r, e, !1);
}
const u0 = BigInt(0), pt = BigInt(1), Jr = 9007199254740991;
function Md(r, e) {
  const t = d0(r, "value"), n = BigInt(K(e, "width"));
  if (N(t >> n === u0, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), t >> n - pt) {
    const s = (pt << n) - pt;
    return -((~t & s) + pt);
  }
  return t;
}
function el(r, e) {
  let t = L(r, "value");
  const n = BigInt(K(e, "width")), s = pt << n - pt;
  if (t < u0) {
    t = -t, N(t <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (pt << n) - pt;
    return (~t & i) + pt;
  } else
    N(t < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return t;
}
function ui(r, e) {
  const t = d0(r, "value"), n = BigInt(K(e, "bits"));
  return t & (pt << n) - pt;
}
function L(r, e) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return b(Number.isInteger(r), "underflow", e || "value", r), b(r >= -Jr && r <= Jr, "overflow", e || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (t) {
        b(!1, `invalid BigNumberish string: ${t.message}`, e || "value", r);
      }
  }
  b(!1, "invalid BigNumberish value", e || "value", r);
}
function d0(r, e) {
  const t = L(r, e);
  return N(t >= u0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), t;
}
const kc = "0123456789abcdef";
function h0(r) {
  if (r instanceof Uint8Array) {
    let e = "0x0";
    for (const t of r)
      e += kc[t >> 4], e += kc[t & 15];
    return BigInt(e);
  }
  return L(r);
}
function K(r, e) {
  switch (typeof r) {
    case "bigint":
      return b(r >= -Jr && r <= Jr, "overflow", e || "value", r), Number(r);
    case "number":
      return b(Number.isInteger(r), "underflow", e || "value", r), b(r >= -Jr && r <= Jr, "overflow", e || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return K(BigInt(r), e);
      } catch (t) {
        b(!1, `invalid numeric string: ${t.message}`, e || "value", r);
      }
  }
  b(!1, "invalid numeric value", e || "value", r);
}
function Gd(r) {
  return K(h0(r));
}
function nn(r, e) {
  let n = d0(r, "value").toString(16);
  if (e == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = K(e, "width");
    for (N(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function ke(r) {
  const e = d0(r, "value");
  if (e === u0)
    return new Uint8Array([]);
  let t = e.toString(16);
  t.length % 2 && (t = "0" + t);
  const n = new Uint8Array(t.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(t.substring(i, i + 2), 16);
  }
  return n;
}
function jr(r) {
  let e = P(l0(r) ? r : ke(r)).substring(2);
  for (; e.startsWith("0"); )
    e = e.substring(1);
  return e === "" && (e = "0"), "0x" + e;
}
const Va = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
let da = null;
function Hd(r) {
  if (da == null) {
    da = {};
    for (let t = 0; t < Va.length; t++)
      da[Va[t]] = BigInt(t);
  }
  const e = da[r];
  return b(e != null, "invalid base58 value", "letter", r), e;
}
const Vd = BigInt(0), no = BigInt(58);
function tl(r) {
  const e = v(r);
  let t = h0(e), n = "";
  for (; t; )
    n = Va[Number(t % no)] + n, t /= no;
  for (let s = 0; s < e.length && !e[s]; s++)
    n = Va[0] + n;
  return n;
}
function Qd(r) {
  let e = Vd;
  for (let t = 0; t < r.length; t++)
    e *= no, e += Hd(r[t]);
  return e;
}
function Kd(r) {
  r = atob(r);
  const e = new Uint8Array(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return v(e);
}
function _d(r) {
  const e = v(r);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += String.fromCharCode(e[n]);
  return btoa(t);
}
var ts;
class nl {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(e, t, n) {
    /**
     *  The event filter.
     */
    y(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    y(this, "emitter");
    w(this, ts, void 0);
    h(this, ts, t), D(this, { emitter: e, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    l(this, ts) != null && await this.emitter.off(this.filter, l(this, ts));
  }
}
ts = new WeakMap();
function zd(r, e, t, n, s) {
  b(!1, `invalid codepoint at offset ${e}; ${r}`, "bytes", t);
}
function rl(r, e, t, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let a = e + 1; a < t.length && t[a] >> 6 === 2; a++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? t.length - e - 1 : 0;
}
function Jd(r, e, t, n, s) {
  return r === "OVERLONG" ? (b(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), rl(r, e, t));
}
const jd = Object.freeze({
  error: zd,
  ignore: rl,
  replace: Jd
});
function Wd(r, e) {
  e == null && (e = jd.error);
  const t = v(r, "bytes"), n = [];
  let s = 0;
  for (; s < t.length; ) {
    const i = t[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let a = null, o = null;
    if ((i & 224) === 192)
      a = 1, o = 127;
    else if ((i & 240) === 224)
      a = 2, o = 2047;
    else if ((i & 248) === 240)
      a = 3, o = 65535;
    else {
      (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, t, n) : s += e("BAD_PREFIX", s - 1, t, n);
      continue;
    }
    if (s - 1 + a >= t.length) {
      s += e("OVERRUN", s - 1, t, n);
      continue;
    }
    let c = i & (1 << 8 - a - 1) - 1;
    for (let f = 0; f < a; f++) {
      let u = t[s];
      if ((u & 192) != 128) {
        s += e("MISSING_CONTINUE", s, t, n), c = null;
        break;
      }
      c = c << 6 | u & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += e("OUT_OF_RANGE", s - 1 - a, t, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += e("UTF16_SURROGATE", s - 1 - a, t, n, c);
        continue;
      }
      if (c <= o) {
        s += e("OVERLONG", s - 1 - a, t, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function Ue(r, e) {
  b(typeof r == "string", "invalid string value", "str", r), e != null && (Xf(e), r = r.normalize(e));
  let t = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      t.push(s);
    else if (s < 2048)
      t.push(s >> 6 | 192), t.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      b(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const a = 65536 + ((s & 1023) << 10) + (i & 1023);
      t.push(a >> 18 | 240), t.push(a >> 12 & 63 | 128), t.push(a >> 6 & 63 | 128), t.push(a & 63 | 128);
    } else
      t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
  }
  return new Uint8Array(t);
}
function Zd(r) {
  return r.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function Qa(r, e) {
  return Zd(Wd(r, e));
}
function sl(r) {
  async function e(t, n) {
    const s = t.url.split(":")[0].toLowerCase();
    N(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), N(s === "https" || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i;
    if (n) {
      const d = new AbortController();
      i = d.signal, n.addListener(() => {
        d.abort();
      });
    }
    const a = {
      method: t.method,
      headers: new Headers(Array.from(t)),
      body: t.body || void 0,
      signal: i
    }, o = await fetch(t.url, a), c = {};
    o.headers.forEach((d, x) => {
      c[x.toLowerCase()] = d;
    });
    const f = await o.arrayBuffer(), u = f == null ? null : new Uint8Array(f);
    return {
      statusCode: o.status,
      statusMessage: o.statusText,
      headers: c,
      body: u
    };
  }
  return e;
}
const Yd = 12, Xd = 250;
let Oc = sl();
const $d = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), qd = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let S0 = !1;
async function il(r, e) {
  try {
    const t = r.match($d);
    if (!t)
      throw new Error("invalid data");
    return new Ln(200, "OK", {
      "content-type": t[1] || "text/plain"
    }, t[2] ? Kd(t[3]) : t1(t[3]));
  } catch {
    return new Ln(599, "BAD REQUEST (invalid data: URI)", {}, null, new rn(r));
  }
}
function al(r) {
  async function e(t, n) {
    try {
      const s = t.match(qd);
      if (!s)
        throw new Error("invalid link");
      return new rn(`${r}${s[2]}`);
    } catch {
      return new Ln(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new rn(t));
    }
  }
  return e;
}
const ha = {
  data: il,
  ipfs: al("https://gateway.ipfs.io/ipfs/")
}, ol = /* @__PURE__ */ new WeakMap();
var Yn, pn;
class e1 {
  constructor(e) {
    w(this, Yn, void 0);
    w(this, pn, void 0);
    h(this, Yn, []), h(this, pn, !1), ol.set(e, () => {
      if (!l(this, pn)) {
        h(this, pn, !0);
        for (const t of l(this, Yn))
          setTimeout(() => {
            t();
          }, 0);
        h(this, Yn, []);
      }
    });
  }
  addListener(e) {
    N(!l(this, pn), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), l(this, Yn).push(e);
  }
  get cancelled() {
    return l(this, pn);
  }
  checkSignal() {
    N(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
Yn = new WeakMap(), pn = new WeakMap();
function xa(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var ns, rs, dt, Ht, ss, is, he, Qe, Vt, Xn, $n, qn, Nt, ht, gn, er, di;
const n0 = class n0 {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(e) {
    w(this, er);
    w(this, ns, void 0);
    w(this, rs, void 0);
    w(this, dt, void 0);
    w(this, Ht, void 0);
    w(this, ss, void 0);
    w(this, is, void 0);
    w(this, he, void 0);
    w(this, Qe, void 0);
    w(this, Vt, void 0);
    // Hooks
    w(this, Xn, void 0);
    w(this, $n, void 0);
    w(this, qn, void 0);
    w(this, Nt, void 0);
    w(this, ht, void 0);
    w(this, gn, void 0);
    h(this, is, String(e)), h(this, ns, !1), h(this, rs, !0), h(this, dt, {}), h(this, Ht, ""), h(this, ss, 3e5), h(this, ht, {
      slotInterval: Xd,
      maxAttempts: Yd
    }), h(this, gn, null);
  }
  /**
   *  The fetch URL to request.
   */
  get url() {
    return l(this, is);
  }
  set url(e) {
    h(this, is, String(e));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``).
   *
   *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    return l(this, he) == null ? null : new Uint8Array(l(this, he));
  }
  set body(e) {
    if (e == null)
      h(this, he, void 0), h(this, Qe, void 0);
    else if (typeof e == "string")
      h(this, he, Ue(e)), h(this, Qe, "text/plain");
    else if (e instanceof Uint8Array)
      h(this, he, e), h(this, Qe, "application/octet-stream");
    else if (typeof e == "object")
      h(this, he, Ue(JSON.stringify(e))), h(this, Qe, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return l(this, he) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return l(this, Ht) ? l(this, Ht) : this.hasBody() ? "POST" : "GET";
  }
  set method(e) {
    e == null && (e = ""), h(this, Ht, String(e).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any changes will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const e = Object.assign({}, l(this, dt));
    return l(this, Vt) && (e.authorization = `Basic ${_d(Ue(l(this, Vt)))}`), this.allowGzip && (e["accept-encoding"] = "gzip"), e["content-type"] == null && l(this, Qe) && (e["content-type"] = l(this, Qe)), this.body && (e["content-length"] = String(this.body.length)), e;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(e, t) {
    l(this, dt)[String(e).toLowerCase()] = String(t);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    h(this, dt, {});
  }
  [Symbol.iterator]() {
    const e = this.headers, t = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < t.length) {
          const s = t[n++];
          return {
            value: [s, e[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return l(this, Vt) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(e, t) {
    b(!e.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), h(this, Vt, `${e}:${t}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return l(this, rs);
  }
  set allowGzip(e) {
    h(this, rs, !!e);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!l(this, ns);
  }
  set allowInsecureAuthentication(e) {
    h(this, ns, !!e);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complete response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return l(this, ss);
  }
  set timeout(e) {
    b(e >= 0, "timeout must be non-zero", "timeout", e), h(this, ss, e);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return l(this, Xn) || null;
  }
  set preflightFunc(e) {
    h(this, Xn, e);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return l(this, $n) || null;
  }
  set processFunc(e) {
    h(this, $n, e);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return l(this, qn) || null;
  }
  set retryFunc(e) {
    h(this, qn, e);
  }
  /**
   *  This function is called to fetch content from HTTP and
   *  HTTPS URLs and is platform specific (e.g. nodejs vs
   *  browsers).
   *
   *  This is by default the currently registered global getUrl
   *  function, which can be changed using [[registerGetUrl]].
   *  If this has been set, setting is to ``null`` will cause
   *  this FetchRequest (and any future clones) to revert back to
   *  using the currently registered global getUrl function.
   *
   *  Setting this is generally not necessary, but may be useful
   *  for developers that wish to intercept requests or to
   *  configurege a proxy or other agent.
   */
  get getUrlFunc() {
    return l(this, gn) || Oc;
  }
  set getUrlFunc(e) {
    h(this, gn, e);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${l(this, he) ? P(l(this, he)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(e) {
    e.slotInterval != null && (l(this, ht).slotInterval = e.slotInterval), e.maxAttempts != null && (l(this, ht).maxAttempts = e.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return N(l(this, Nt) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), h(this, Nt, new e1(this)), I(this, er, di).call(this, 0, Rc() + this.timeout, 0, this, new Ln(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    N(l(this, Nt) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const e = ol.get(this);
    if (!e)
      throw new Error("missing signal; should not happen");
    e();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(e) {
    const t = this.url.split(":")[0].toLowerCase(), n = e.split(":")[0].toLowerCase();
    N(this.method === "GET" && (t !== "https" || n !== "http") && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
    });
    const s = new n0(e);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, h(s, dt, Object.assign({}, l(this, dt))), l(this, he) && h(s, he, new Uint8Array(l(this, he))), h(s, Qe, l(this, Qe)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const e = new n0(this.url);
    return h(e, Ht, l(this, Ht)), l(this, he) && h(e, he, l(this, he)), h(e, Qe, l(this, Qe)), h(e, dt, Object.assign({}, l(this, dt))), h(e, Vt, l(this, Vt)), this.allowGzip && (e.allowGzip = !0), e.timeout = this.timeout, this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0), h(e, Xn, l(this, Xn)), h(e, $n, l(this, $n)), h(e, qn, l(this, qn)), h(e, ht, Object.assign({}, l(this, ht))), h(e, gn, l(this, gn)), e;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    S0 = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(e) {
    return ha[e.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(e, t) {
    if (e = e.toLowerCase(), e === "http" || e === "https")
      throw new Error(`cannot intercept ${e}; use registerGetUrl`);
    if (S0)
      throw new Error("gateways locked");
    ha[e] = t;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(e) {
    if (S0)
      throw new Error("gateways locked");
    Oc = e;
  }
  /**
   *  Creates a getUrl function that fetches content from HTTP and
   *  HTTPS URLs.
   *
   *  The available %%options%% are dependent on the platform
   *  implementation of the default getUrl function.
   *
   *  This is not generally something that is needed, but is useful
   *  when trying to customize simple behaviour when fetching HTTP
   *  content.
   */
  static createGetUrlFunc(e) {
    return sl();
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return il;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(e) {
    return al(e);
  }
};
ns = new WeakMap(), rs = new WeakMap(), dt = new WeakMap(), Ht = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), he = new WeakMap(), Qe = new WeakMap(), Vt = new WeakMap(), Xn = new WeakMap(), $n = new WeakMap(), qn = new WeakMap(), Nt = new WeakMap(), ht = new WeakMap(), gn = new WeakMap(), er = new WeakSet(), di = async function(e, t, n, s, i) {
  var u, d, x;
  if (e >= l(this, ht).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  N(Rc() <= t, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await n1(n);
  let a = this.clone();
  const o = (a.url.split(":")[0] || "").toLowerCase();
  if (o in ha) {
    const p = await ha[o](a.url, xa(l(s, Nt)));
    if (p instanceof Ln) {
      let m = p;
      if (this.processFunc) {
        xa(l(s, Nt));
        try {
          m = await this.processFunc(a, m);
        } catch (g) {
          (g.throttle == null || typeof g.stall != "number") && m.makeServerError("error in post-processing function", g).assertOk();
        }
      }
      return m;
    }
    a = p;
  }
  this.preflightFunc && (a = await this.preflightFunc(a));
  const c = await this.getUrlFunc(a, xa(l(s, Nt)));
  let f = new Ln(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (f.statusCode === 301 || f.statusCode === 302) {
    try {
      const p = f.headers.location || "";
      return I(u = a.redirect(p), er, di).call(u, e + 1, t, 0, s, f);
    } catch {
    }
    return f;
  } else if (f.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(a, f, e))) {
    const p = f.headers["retry-after"];
    let m = l(this, ht).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
    return typeof p == "string" && p.match(/^[1-9][0-9]*$/) && (m = parseInt(p)), I(d = a.clone(), er, di).call(d, e + 1, t, m, s, f);
  }
  if (this.processFunc) {
    xa(l(s, Nt));
    try {
      f = await this.processFunc(a, f);
    } catch (p) {
      (p.throttle == null || typeof p.stall != "number") && f.makeServerError("error in post-processing function", p).assertOk();
      let m = l(this, ht).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
      return p.stall >= 0 && (m = p.stall), I(x = a.clone(), er, di).call(x, e + 1, t, m, s, f);
    }
  }
  return f;
};
let rn = n0;
var Fi, Mi, Gi, Ke, as, tr;
const pc = class pc {
  constructor(e, t, n, s, i) {
    w(this, Fi, void 0);
    w(this, Mi, void 0);
    w(this, Gi, void 0);
    w(this, Ke, void 0);
    w(this, as, void 0);
    w(this, tr, void 0);
    h(this, Fi, e), h(this, Mi, t), h(this, Gi, Object.keys(n).reduce((a, o) => (a[o.toLowerCase()] = String(n[o]), a), {})), h(this, Ke, s == null ? null : new Uint8Array(s)), h(this, as, i || null), h(this, tr, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${l(this, Ke) ? P(l(this, Ke)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return l(this, Fi);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return l(this, Mi);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, l(this, Gi));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return l(this, Ke) == null ? null : new Uint8Array(l(this, Ke));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return l(this, Ke) == null ? "" : Qa(l(this, Ke));
    } catch {
      N(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      N(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const e = this.headers, t = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < t.length) {
          const s = t[n++];
          return {
            value: [s, e[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(e, t) {
    let n;
    e ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : (e = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${e})`);
    const s = new pc(599, n, this.headers, this.body, l(this, as) || void 0);
    return h(s, tr, { message: e, error: t }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(e, t) {
    t == null ? t = -1 : b(Number.isInteger(t) && t >= 0, "invalid stall timeout", "stall", t);
    const n = new Error(e || "throttling requests");
    throw D(n, { stall: t, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Returns true if the response has a body.
   */
  hasBody() {
    return l(this, Ke) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return l(this, as);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return l(this, tr).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: e, error: t } = l(this, tr);
    e === "" && (e = `server response ${this.statusCode} ${this.statusMessage}`);
    let n = null;
    this.request && (n = this.request.url);
    let s = null;
    try {
      l(this, Ke) && (s = Qa(l(this, Ke)));
    } catch {
    }
    N(!1, e, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: t,
      info: {
        requestUrl: n,
        responseBody: s,
        responseStatus: `${this.statusCode} ${this.statusMessage}`
      }
    });
  }
};
Fi = new WeakMap(), Mi = new WeakMap(), Gi = new WeakMap(), Ke = new WeakMap(), as = new WeakMap(), tr = new WeakMap();
let Ln = pc;
function Rc() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function t1(r) {
  return Ue(r.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16))));
}
function n1(r) {
  return new Promise((e) => setTimeout(e, r));
}
function r1(r) {
  let e = r.toString(16);
  for (; e.length < 2; )
    e = "0" + e;
  return "0x" + e;
}
function Bc(r, e, t) {
  let n = 0;
  for (let s = 0; s < t; s++)
    n = n * 256 + r[e + s];
  return n;
}
function vc(r, e, t, n) {
  const s = [];
  for (; t < e + 1 + n; ) {
    const i = cl(r, t);
    s.push(i.result), t += i.consumed, N(t <= e + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: n,
      offset: e
    });
  }
  return { consumed: 1 + n, result: s };
}
function cl(r, e) {
  N(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: r,
    length: 0,
    offset: 1
  });
  const t = (n) => {
    N(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: r.length,
      offset: n
    });
  };
  if (r[e] >= 248) {
    const n = r[e] - 247;
    t(e + 1 + n);
    const s = Bc(r, e + 1, n);
    return t(e + 1 + n + s), vc(r, e, e + 1 + n, n + s);
  } else if (r[e] >= 192) {
    const n = r[e] - 192;
    return t(e + 1 + n), vc(r, e, e + 1, n);
  } else if (r[e] >= 184) {
    const n = r[e] - 183;
    t(e + 1 + n);
    const s = Bc(r, e + 1, n);
    t(e + 1 + n + s);
    const i = P(r.slice(e + 1 + n, e + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[e] >= 128) {
    const n = r[e] - 128;
    t(e + 1 + n);
    const s = P(r.slice(e + 1, e + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: r1(r[e]) };
}
function x0(r) {
  const e = v(r, "data"), t = cl(e, 0);
  return b(t.consumed === e.length, "unexpected junk after rlp payload", "data", r), t.result;
}
function Sc(r) {
  const e = [];
  for (; r; )
    e.unshift(r & 255), r >>= 8;
  return e;
}
function fl(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(fl(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = Sc(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const e = Array.prototype.slice.call(v(r, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = Sc(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
const Uc = "0123456789abcdef";
function Tr(r) {
  let e = "0x";
  for (const t of fl(r))
    e += Uc[t >> 4], e += Uc[t & 15];
  return e;
}
function s1(r) {
  const e = v(r, "randomBytes");
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const t = P(e);
  return [
    t.substring(2, 10),
    t.substring(10, 14),
    t.substring(14, 18),
    t.substring(18, 22),
    t.substring(22, 34)
  ].join("-");
}
const ve = 32, ro = new Uint8Array(ve), i1 = ["then"], ba = {};
function ci(r, e) {
  const t = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw t.error = e, t;
}
var yn;
const Kn = class Kn extends Array {
  /**
   *  @private
   */
  constructor(...t) {
    const n = t[0];
    let s = t[1], i = (t[2] || []).slice(), a = !0;
    n !== ba && (s = t, i = [], a = !1);
    super(s.length);
    w(this, yn, void 0);
    s.forEach((c, f) => {
      this[f] = c;
    });
    const o = i.reduce((c, f) => (typeof f == "string" && c.set(f, (c.get(f) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (h(this, yn, Object.freeze(s.map((c, f) => {
      const u = i[f];
      return u != null && o.get(u) === 1 ? u : null;
    }))), !!a)
      return Object.freeze(this), new Proxy(this, {
        get: (c, f, u) => {
          if (typeof f == "string") {
            if (f.match(/^[0-9]+$/)) {
              const x = K(f, "%index");
              if (x < 0 || x >= this.length)
                throw new RangeError("out of result range");
              const p = c[x];
              return p instanceof Error && ci(`index ${x}`, p), p;
            }
            if (i1.indexOf(f) >= 0)
              return Reflect.get(c, f, u);
            const d = c[f];
            if (d instanceof Function)
              return function(...x) {
                return d.apply(this === u ? c : this, x);
              };
            if (!(f in c))
              return c.getValue.apply(this === u ? c : this, [f]);
          }
          return Reflect.get(c, f, u);
        }
      });
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(t) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && ci(`index ${i}`, s), t && s instanceof Kn && (s = s.toArray(t)), n.push(s);
    }), n;
  }
  /**
   *  Returns the Result as an Object with each name-value pair. If
   *  %%deep%%, any children which are Result objects are also
   *  converted to an Object.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject(t) {
    return l(this, yn).reduce((n, s, i) => {
      if (N(s != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), !(s in n)) {
        let a = this.getValue(s);
        t && a instanceof Kn && (a = a.toObject(t)), n[s] = a;
      }
      return n;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(t, n) {
    t == null && (t = 0), t < 0 && (t += this.length, t < 0 && (t = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = [], i = [];
    for (let a = t; a < n; a++)
      s.push(this[a]), i.push(l(this, yn)[a]);
    return new Kn(ba, s, i);
  }
  /**
   *  @_ignore
   */
  filter(t, n) {
    const s = [], i = [];
    for (let a = 0; a < this.length; a++) {
      const o = this[a];
      o instanceof Error && ci(`index ${a}`, o), t.call(n, o, a, this) && (s.push(o), i.push(l(this, yn)[a]));
    }
    return new Kn(ba, s, i);
  }
  /**
   *  @_ignore
   */
  map(t, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const a = this[i];
      a instanceof Error && ci(`index ${i}`, a), s.push(t.call(n, a, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(t) {
    const n = l(this, yn).indexOf(t);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && ci(`property ${JSON.stringify(t)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(t, n) {
    return new Kn(ba, t, n);
  }
};
yn = new WeakMap();
let Ka = Kn;
function Lc(r) {
  let e = ke(r);
  return N(e.length <= ve, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e, length: ve, offset: e.length }), e.length !== ve && (e = me(X([ro.slice(e.length % ve), e]))), e;
}
class on {
  constructor(e, t, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    y(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    y(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    y(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    y(this, "dynamic");
    D(this, { name: e, type: t, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(e, t) {
    b(!1, e, this.localName, t);
  }
}
var Qt, nr, os, Ca;
class so {
  constructor() {
    w(this, os);
    // An array of WordSize lengthed objects to concatenation
    w(this, Qt, void 0);
    w(this, nr, void 0);
    h(this, Qt, []), h(this, nr, 0);
  }
  get data() {
    return X(l(this, Qt));
  }
  get length() {
    return l(this, nr);
  }
  appendWriter(e) {
    return I(this, os, Ca).call(this, me(e.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(e) {
    let t = me(e);
    const n = t.length % ve;
    return n && (t = me(X([t, ro.slice(n)]))), I(this, os, Ca).call(this, t);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(e) {
    return I(this, os, Ca).call(this, Lc(e));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const e = l(this, Qt).length;
    return l(this, Qt).push(ro), h(this, nr, l(this, nr) + ve), (t) => {
      l(this, Qt)[e] = Lc(t);
    };
  }
}
Qt = new WeakMap(), nr = new WeakMap(), os = new WeakSet(), Ca = function(e) {
  return l(this, Qt).push(e), h(this, nr, l(this, nr) + e.length), e.length;
};
var Le, _e, rr, sr, mn, Hi, ao, r0, ll;
const gc = class gc {
  constructor(e, t, n) {
    w(this, Hi);
    w(this, r0);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    y(this, "allowLoose");
    w(this, Le, void 0);
    w(this, _e, void 0);
    w(this, rr, void 0);
    w(this, sr, void 0);
    w(this, mn, void 0);
    D(this, { allowLoose: !!t }), h(this, Le, me(e)), h(this, rr, 0), h(this, sr, null), h(this, mn, n ?? 1024), h(this, _e, 0);
  }
  get data() {
    return P(l(this, Le));
  }
  get dataLength() {
    return l(this, Le).length;
  }
  get consumed() {
    return l(this, _e);
  }
  get bytes() {
    return new Uint8Array(l(this, Le));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(e) {
    const t = new gc(l(this, Le).slice(l(this, _e) + e), this.allowLoose, l(this, mn));
    return h(t, sr, this), t;
  }
  // Read bytes
  readBytes(e, t) {
    let n = I(this, r0, ll).call(this, 0, e, !!t);
    return I(this, Hi, ao).call(this, e), h(this, _e, l(this, _e) + n.length), n.slice(0, e);
  }
  // Read a numeric values
  readValue() {
    return h0(this.readBytes(ve));
  }
  readIndex() {
    return Gd(this.readBytes(ve));
  }
};
Le = new WeakMap(), _e = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), mn = new WeakMap(), Hi = new WeakSet(), ao = function(e) {
  var t;
  if (l(this, sr))
    return I(t = l(this, sr), Hi, ao).call(t, e);
  h(this, rr, l(this, rr) + e), N(l(this, mn) < 1 || l(this, rr) <= l(this, mn) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${l(this, mn)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: me(l(this, Le)),
    offset: l(this, _e),
    length: e,
    info: {
      bytesRead: l(this, rr),
      dataLength: this.dataLength
    }
  });
}, r0 = new WeakSet(), ll = function(e, t, n) {
  let s = Math.ceil(t / ve) * ve;
  return l(this, _e) + s > l(this, Le).length && (this.allowLoose && n && l(this, _e) + t <= l(this, Le).length ? s = t : N(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: me(l(this, Le)),
    length: l(this, Le).length,
    offset: l(this, _e) + s
  })), l(this, Le).slice(l(this, _e), l(this, _e) + s);
};
let io = gc;
function Je(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function Qo(r, ...e) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function ul(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Je(r.outputLen), Je(r.blockLen);
}
function zs(r, e = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function dl(r, e) {
  Qo(r);
  const t = e.outputLen;
  if (r.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const U0 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const hl = (r) => r instanceof Uint8Array, ka = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Oa = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), wt = (r, e) => r << 32 - e | r >>> e, a1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!a1)
  throw new Error("Non little-endian hardware is not supported");
const o1 = async () => {
};
async function Dc(r, e, t) {
  let n = Date.now();
  for (let s = 0; s < r; s++) {
    t(s);
    const i = Date.now() - n;
    i >= 0 && i < e || (await o1(), n += i);
  }
}
function c1(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Js(r) {
  if (typeof r == "string" && (r = c1(r)), !hl(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function f1(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!hl(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
class Ko {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
const l1 = {}.toString;
function xl(r, e) {
  if (e !== void 0 && l1.call(e) !== "[object Object]")
    throw new Error("Options should be object or undefined");
  return Object.assign(r, e);
}
function b0(r) {
  const e = (n) => r().update(Js(n)).digest(), t = r();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
}
function u1(r = 32) {
  if (U0 && typeof U0.getRandomValues == "function")
    return U0.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class bl extends Ko {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, ul(e);
    const n = Js(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? e.create().update(n).digest() : n);
    for (let a = 0; a < i.length; a++)
      i[a] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let a = 0; a < i.length; a++)
      i[a] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return zs(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    zs(this), Qo(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: n, finished: s, destroyed: i, blockLen: a, outputLen: o } = this;
    return e = e, e.finished = s, e.destroyed = i, e.blockLen = a, e.outputLen = o, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const p0 = (r, e, t) => new bl(r, e).update(t).digest();
p0.create = (r, e) => new bl(r, e);
function d1(r, e, t, n) {
  ul(r);
  const s = xl({ dkLen: 32, asyncTick: 10 }, n), { c: i, dkLen: a, asyncTick: o } = s;
  if (Je(i), Je(a), Je(o), i < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const c = Js(e), f = Js(t), u = new Uint8Array(a), d = p0.create(r, c), x = d._cloneInto().update(f);
  return { c: i, dkLen: a, asyncTick: o, DK: u, PRF: d, PRFSalt: x };
}
function h1(r, e, t, n, s) {
  return r.destroy(), e.destroy(), n && n.destroy(), s.fill(0), t;
}
function _o(r, e, t, n) {
  const { c: s, dkLen: i, DK: a, PRF: o, PRFSalt: c } = d1(r, e, t, n);
  let f;
  const u = new Uint8Array(4), d = Oa(u), x = new Uint8Array(o.outputLen);
  for (let p = 1, m = 0; m < i; p++, m += o.outputLen) {
    const g = a.subarray(m, m + o.outputLen);
    d.setInt32(0, p, !1), (f = c._cloneInto(f)).update(u).digestInto(x), g.set(x.subarray(0, g.length));
    for (let A = 1; A < s; A++) {
      o._cloneInto(f).update(x).digestInto(x);
      for (let E = 0; E < g.length; E++)
        g[E] ^= x[E];
    }
  }
  return h1(o, c, a, f, x);
}
function x1(r, e, t, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(e, t, n);
  const s = BigInt(32), i = BigInt(4294967295), a = Number(t >> s & i), o = Number(t & i), c = n ? 4 : 0, f = n ? 0 : 4;
  r.setUint32(e + c, a, n), r.setUint32(e + f, o, n);
}
class zo extends Ko {
  constructor(e, t, n, s) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Oa(this.buffer);
  }
  update(e) {
    zs(this);
    const { view: t, buffer: n, blockLen: s } = this;
    e = Js(e);
    const i = e.length;
    for (let a = 0; a < i; ) {
      const o = Math.min(s - this.pos, i - a);
      if (o === s) {
        const c = Oa(e);
        for (; s <= i - a; a += s)
          this.process(c, a);
        continue;
      }
      n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    zs(this), dl(e, this), this.finished = !0;
    const { buffer: t, view: n, blockLen: s, isLE: i } = this;
    let { pos: a } = this;
    t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > s - a && (this.process(n, 0), a = 0);
    for (let d = a; d < s; d++)
      t[d] = 0;
    x1(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const o = Oa(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const f = c / 4, u = this.get();
    if (f > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < f; d++)
      o.setUint32(4 * d, u[d], i);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: n, length: s, finished: i, destroyed: a, pos: o } = this;
    return e.length = s, e.pos = o, e.finished = i, e.destroyed = a, s % t && e.buffer.set(n), e;
  }
}
const b1 = (r, e, t) => r & e ^ ~r & t, p1 = (r, e, t) => r & e ^ r & t ^ e & t, g1 = /* @__PURE__ */ new Uint32Array([
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
]), un = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), dn = /* @__PURE__ */ new Uint32Array(64);
class y1 extends zo {
  constructor() {
    super(64, 32, 8, !1), this.A = un[0] | 0, this.B = un[1] | 0, this.C = un[2] | 0, this.D = un[3] | 0, this.E = un[4] | 0, this.F = un[5] | 0, this.G = un[6] | 0, this.H = un[7] | 0;
  }
  get() {
    const { A: e, B: t, C: n, D: s, E: i, F: a, G: o, H: c } = this;
    return [e, t, n, s, i, a, o, c];
  }
  // prettier-ignore
  set(e, t, n, s, i, a, o, c) {
    this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = a | 0, this.G = o | 0, this.H = c | 0;
  }
  process(e, t) {
    for (let d = 0; d < 16; d++, t += 4)
      dn[d] = e.getUint32(t, !1);
    for (let d = 16; d < 64; d++) {
      const x = dn[d - 15], p = dn[d - 2], m = wt(x, 7) ^ wt(x, 18) ^ x >>> 3, g = wt(p, 17) ^ wt(p, 19) ^ p >>> 10;
      dn[d] = g + dn[d - 7] + m + dn[d - 16] | 0;
    }
    let { A: n, B: s, C: i, D: a, E: o, F: c, G: f, H: u } = this;
    for (let d = 0; d < 64; d++) {
      const x = wt(o, 6) ^ wt(o, 11) ^ wt(o, 25), p = u + x + b1(o, c, f) + g1[d] + dn[d] | 0, g = (wt(n, 2) ^ wt(n, 13) ^ wt(n, 22)) + p1(n, s, i) | 0;
      u = f, f = c, c = o, o = a + p | 0, a = i, i = s, s = n, n = p + g | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, c = c + this.F | 0, f = f + this.G | 0, u = u + this.H | 0, this.set(n, s, i, a, o, c, f, u);
  }
  roundClean() {
    dn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const ni = /* @__PURE__ */ b0(() => new y1()), pa = /* @__PURE__ */ BigInt(2 ** 32 - 1), oo = /* @__PURE__ */ BigInt(32);
function pl(r, e = !1) {
  return e ? { h: Number(r & pa), l: Number(r >> oo & pa) } : { h: Number(r >> oo & pa) | 0, l: Number(r & pa) | 0 };
}
function gl(r, e = !1) {
  let t = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: a } = pl(r[s], e);
    [t[s], n[s]] = [i, a];
  }
  return [t, n];
}
const m1 = (r, e) => BigInt(r >>> 0) << oo | BigInt(e >>> 0), w1 = (r, e, t) => r >>> t, A1 = (r, e, t) => r << 32 - t | e >>> t, E1 = (r, e, t) => r >>> t | e << 32 - t, N1 = (r, e, t) => r << 32 - t | e >>> t, P1 = (r, e, t) => r << 64 - t | e >>> t - 32, T1 = (r, e, t) => r >>> t - 32 | e << 64 - t, I1 = (r, e) => e, C1 = (r, e) => r, yl = (r, e, t) => r << t | e >>> 32 - t, ml = (r, e, t) => e << t | r >>> 32 - t, wl = (r, e, t) => e << t - 32 | r >>> 64 - t, Al = (r, e, t) => r << t - 32 | e >>> 64 - t;
function k1(r, e, t, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: r + t + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const O1 = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0), R1 = (r, e, t, n) => e + t + n + (r / 2 ** 32 | 0) | 0, B1 = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0), v1 = (r, e, t, n, s) => e + t + n + s + (r / 2 ** 32 | 0) | 0, S1 = (r, e, t, n, s) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (s >>> 0), U1 = (r, e, t, n, s, i) => e + t + n + s + i + (r / 2 ** 32 | 0) | 0, Q = {
  fromBig: pl,
  split: gl,
  toBig: m1,
  shrSH: w1,
  shrSL: A1,
  rotrSH: E1,
  rotrSL: N1,
  rotrBH: P1,
  rotrBL: T1,
  rotr32H: I1,
  rotr32L: C1,
  rotlSH: yl,
  rotlSL: ml,
  rotlBH: wl,
  rotlBL: Al,
  add: k1,
  add3L: O1,
  add3H: R1,
  add4L: B1,
  add4H: v1,
  add5H: U1,
  add5L: S1
}, [L1, D1] = Q.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))), hn = /* @__PURE__ */ new Uint32Array(80), xn = /* @__PURE__ */ new Uint32Array(80);
class F1 extends zo {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: n, Bl: s, Ch: i, Cl: a, Dh: o, Dl: c, Eh: f, El: u, Fh: d, Fl: x, Gh: p, Gl: m, Hh: g, Hl: A } = this;
    return [e, t, n, s, i, a, o, c, f, u, d, x, p, m, g, A];
  }
  // prettier-ignore
  set(e, t, n, s, i, a, o, c, f, u, d, x, p, m, g, A) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = a | 0, this.Dh = o | 0, this.Dl = c | 0, this.Eh = f | 0, this.El = u | 0, this.Fh = d | 0, this.Fl = x | 0, this.Gh = p | 0, this.Gl = m | 0, this.Hh = g | 0, this.Hl = A | 0;
  }
  process(e, t) {
    for (let T = 0; T < 16; T++, t += 4)
      hn[T] = e.getUint32(t), xn[T] = e.getUint32(t += 4);
    for (let T = 16; T < 80; T++) {
      const M = hn[T - 15] | 0, O = xn[T - 15] | 0, R = Q.rotrSH(M, O, 1) ^ Q.rotrSH(M, O, 8) ^ Q.shrSH(M, O, 7), F = Q.rotrSL(M, O, 1) ^ Q.rotrSL(M, O, 8) ^ Q.shrSL(M, O, 7), U = hn[T - 2] | 0, _ = xn[T - 2] | 0, H = Q.rotrSH(U, _, 19) ^ Q.rotrBH(U, _, 61) ^ Q.shrSH(U, _, 6), V = Q.rotrSL(U, _, 19) ^ Q.rotrBL(U, _, 61) ^ Q.shrSL(U, _, 6), $ = Q.add4L(F, V, xn[T - 7], xn[T - 16]), te = Q.add4H($, R, H, hn[T - 7], hn[T - 16]);
      hn[T] = te | 0, xn[T] = $ | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: a, Ch: o, Cl: c, Dh: f, Dl: u, Eh: d, El: x, Fh: p, Fl: m, Gh: g, Gl: A, Hh: E, Hl: C } = this;
    for (let T = 0; T < 80; T++) {
      const M = Q.rotrSH(d, x, 14) ^ Q.rotrSH(d, x, 18) ^ Q.rotrBH(d, x, 41), O = Q.rotrSL(d, x, 14) ^ Q.rotrSL(d, x, 18) ^ Q.rotrBL(d, x, 41), R = d & p ^ ~d & g, F = x & m ^ ~x & A, U = Q.add5L(C, O, F, D1[T], xn[T]), _ = Q.add5H(U, E, M, R, L1[T], hn[T]), H = U | 0, V = Q.rotrSH(n, s, 28) ^ Q.rotrBH(n, s, 34) ^ Q.rotrBH(n, s, 39), $ = Q.rotrSL(n, s, 28) ^ Q.rotrBL(n, s, 34) ^ Q.rotrBL(n, s, 39), te = n & i ^ n & o ^ i & o, de = s & a ^ s & c ^ a & c;
      E = g | 0, C = A | 0, g = p | 0, A = m | 0, p = d | 0, m = x | 0, { h: d, l: x } = Q.add(f | 0, u | 0, _ | 0, H | 0), f = o | 0, u = c | 0, o = i | 0, c = a | 0, i = n | 0, a = s | 0;
      const k = Q.add3L(H, $, de);
      n = Q.add3H(k, _, V, te), s = k | 0;
    }
    ({ h: n, l: s } = Q.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: a } = Q.add(this.Bh | 0, this.Bl | 0, i | 0, a | 0), { h: o, l: c } = Q.add(this.Ch | 0, this.Cl | 0, o | 0, c | 0), { h: f, l: u } = Q.add(this.Dh | 0, this.Dl | 0, f | 0, u | 0), { h: d, l: x } = Q.add(this.Eh | 0, this.El | 0, d | 0, x | 0), { h: p, l: m } = Q.add(this.Fh | 0, this.Fl | 0, p | 0, m | 0), { h: g, l: A } = Q.add(this.Gh | 0, this.Gl | 0, g | 0, A | 0), { h: E, l: C } = Q.add(this.Hh | 0, this.Hl | 0, E | 0, C | 0), this.set(n, s, i, a, o, c, f, u, d, x, p, m, g, A, E, C);
  }
  roundClean() {
    hn.fill(0), xn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Jo = /* @__PURE__ */ b0(() => new F1());
function M1() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof Tc.global < "u")
    return Tc.global;
  throw new Error("unable to locate global object");
}
const Fc = M1(), Mc = Fc.crypto || Fc.msCrypto;
function G1(r) {
  switch (r) {
    case "sha256":
      return ni.create();
    case "sha512":
      return Jo.create();
  }
  b(!1, "invalid hashing algorithm name", "algorithm", r);
}
function H1(r, e) {
  const t = { sha256: ni, sha512: Jo }[r];
  return b(t != null, "invalid hmac algorithm", "algorithm", r), p0.create(t, e);
}
function V1(r, e, t, n, s) {
  const i = { sha256: ni, sha512: Jo }[s];
  return b(i != null, "invalid pbkdf2 algorithm", "algorithm", s), _o(i, r, e, { c: t, dkLen: n });
}
function Q1(r) {
  N(Mc != null, "platform does not support secure random numbers", "UNSUPPORTED_OPERATION", {
    operation: "randomBytes"
  }), b(Number.isInteger(r) && r > 0 && r <= 1024, "invalid length", "length", r);
  const e = new Uint8Array(r);
  return Mc.getRandomValues(e), e;
}
let El = !1;
const Nl = function(r, e, t) {
  return H1(r, e).update(t).digest();
};
let Pl = Nl;
function ri(r, e, t) {
  const n = v(e, "key"), s = v(t, "data");
  return P(Pl(r, n, s));
}
ri._ = Nl;
ri.lock = function() {
  El = !0;
};
ri.register = function(r) {
  if (El)
    throw new Error("computeHmac is locked");
  Pl = r;
};
Object.freeze(ri);
const [Tl, Il, Cl] = [[], [], []], K1 = /* @__PURE__ */ BigInt(0), fi = /* @__PURE__ */ BigInt(1), _1 = /* @__PURE__ */ BigInt(2), z1 = /* @__PURE__ */ BigInt(7), J1 = /* @__PURE__ */ BigInt(256), j1 = /* @__PURE__ */ BigInt(113);
for (let r = 0, e = fi, t = 1, n = 0; r < 24; r++) {
  [t, n] = [n, (2 * t + 3 * n) % 5], Tl.push(2 * (5 * n + t)), Il.push((r + 1) * (r + 2) / 2 % 64);
  let s = K1;
  for (let i = 0; i < 7; i++)
    e = (e << fi ^ (e >> z1) * j1) % J1, e & _1 && (s ^= fi << (fi << /* @__PURE__ */ BigInt(i)) - fi);
  Cl.push(s);
}
const [W1, Z1] = /* @__PURE__ */ gl(Cl, !0), Gc = (r, e, t) => t > 32 ? wl(r, e, t) : yl(r, e, t), Hc = (r, e, t) => t > 32 ? Al(r, e, t) : ml(r, e, t);
function Y1(r, e = 24) {
  const t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let a = 0; a < 10; a++)
      t[a] = r[a] ^ r[a + 10] ^ r[a + 20] ^ r[a + 30] ^ r[a + 40];
    for (let a = 0; a < 10; a += 2) {
      const o = (a + 8) % 10, c = (a + 2) % 10, f = t[c], u = t[c + 1], d = Gc(f, u, 1) ^ t[o], x = Hc(f, u, 1) ^ t[o + 1];
      for (let p = 0; p < 50; p += 10)
        r[a + p] ^= d, r[a + p + 1] ^= x;
    }
    let s = r[2], i = r[3];
    for (let a = 0; a < 24; a++) {
      const o = Il[a], c = Gc(s, i, o), f = Hc(s, i, o), u = Tl[a];
      s = r[u], i = r[u + 1], r[u] = c, r[u + 1] = f;
    }
    for (let a = 0; a < 50; a += 10) {
      for (let o = 0; o < 10; o++)
        t[o] = r[a + o];
      for (let o = 0; o < 10; o++)
        r[a + o] ^= ~t[(o + 2) % 10] & t[(o + 4) % 10];
    }
    r[0] ^= W1[n], r[1] ^= Z1[n];
  }
  t.fill(0);
}
class jo extends Ko {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, t, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Je(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = ka(this.state);
  }
  keccak() {
    Y1(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    zs(this);
    const { blockLen: t, state: n } = this;
    e = Js(e);
    const s = e.length;
    for (let i = 0; i < s; ) {
      const a = Math.min(t - this.pos, s - i);
      for (let o = 0; o < a; o++)
        n[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: n, blockLen: s } = this;
    e[n] ^= t, t & 128 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    zs(this, !1), Qo(e), this.finish();
    const t = this.state, { blockLen: n } = this;
    for (let s = 0, i = e.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const a = Math.min(n - this.posOut, i - s);
      e.set(t.subarray(this.posOut, this.posOut + a), s), this.posOut += a, s += a;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Je(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (dl(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: t, suffix: n, outputLen: s, rounds: i, enableXOF: a } = this;
    return e || (e = new jo(t, n, s, a, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = a, e.destroyed = this.destroyed, e;
  }
}
const X1 = (r, e, t) => b0(() => new jo(e, r, t)), $1 = /* @__PURE__ */ X1(1, 136, 256 / 8);
let kl = !1;
const Ol = function(r) {
  return $1(r);
};
let Rl = Ol;
function ie(r) {
  const e = v(r, "data");
  return P(Rl(e));
}
ie._ = Ol;
ie.lock = function() {
  kl = !0;
};
ie.register = function(r) {
  if (kl)
    throw new TypeError("keccak256 is locked");
  Rl = r;
};
Object.freeze(ie);
const q1 = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), Bl = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (r, e) => e), eh = /* @__PURE__ */ Bl.map((r) => (9 * r + 5) % 16);
let Wo = [Bl], Zo = [eh];
for (let r = 0; r < 4; r++)
  for (let e of [Wo, Zo])
    e.push(e[r].map((t) => q1[t]));
const vl = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((r) => new Uint8Array(r)), th = /* @__PURE__ */ Wo.map((r, e) => r.map((t) => vl[e][t])), nh = /* @__PURE__ */ Zo.map((r, e) => r.map((t) => vl[e][t])), rh = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), sh = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]), ga = (r, e) => r << e | r >>> 32 - e;
function Vc(r, e, t, n) {
  return r === 0 ? e ^ t ^ n : r === 1 ? e & t | ~e & n : r === 2 ? (e | ~t) ^ n : r === 3 ? e & n | t & ~n : e ^ (t | ~n);
}
const ya = /* @__PURE__ */ new Uint32Array(16);
class ih extends zo {
  constructor() {
    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: e, h1: t, h2: n, h3: s, h4: i } = this;
    return [e, t, n, s, i];
  }
  set(e, t, n, s, i) {
    this.h0 = e | 0, this.h1 = t | 0, this.h2 = n | 0, this.h3 = s | 0, this.h4 = i | 0;
  }
  process(e, t) {
    for (let p = 0; p < 16; p++, t += 4)
      ya[p] = e.getUint32(t, !0);
    let n = this.h0 | 0, s = n, i = this.h1 | 0, a = i, o = this.h2 | 0, c = o, f = this.h3 | 0, u = f, d = this.h4 | 0, x = d;
    for (let p = 0; p < 5; p++) {
      const m = 4 - p, g = rh[p], A = sh[p], E = Wo[p], C = Zo[p], T = th[p], M = nh[p];
      for (let O = 0; O < 16; O++) {
        const R = ga(n + Vc(p, i, o, f) + ya[E[O]] + g, T[O]) + d | 0;
        n = d, d = f, f = ga(o, 10) | 0, o = i, i = R;
      }
      for (let O = 0; O < 16; O++) {
        const R = ga(s + Vc(m, a, c, u) + ya[C[O]] + A, M[O]) + x | 0;
        s = x, x = u, u = ga(c, 10) | 0, c = a, a = R;
      }
    }
    this.set(this.h1 + o + u | 0, this.h2 + f + x | 0, this.h3 + d + s | 0, this.h4 + n + a | 0, this.h0 + i + c | 0);
  }
  roundClean() {
    ya.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const ah = /* @__PURE__ */ b0(() => new ih());
let Sl = !1;
const Ul = function(r) {
  return ah(r);
};
let Ll = Ul;
function si(r) {
  const e = v(r, "data");
  return P(Ll(e));
}
si._ = Ul;
si.lock = function() {
  Sl = !0;
};
si.register = function(r) {
  if (Sl)
    throw new TypeError("ripemd160 is locked");
  Ll = r;
};
Object.freeze(si);
let Dl = !1;
const Fl = function(r, e, t, n, s) {
  return V1(r, e, t, n, s);
};
let Ml = Fl;
function Fn(r, e, t, n, s) {
  const i = v(r, "password"), a = v(e, "salt");
  return P(Ml(i, a, t, n, s));
}
Fn._ = Fl;
Fn.lock = function() {
  Dl = !0;
};
Fn.register = function(r) {
  if (Dl)
    throw new Error("pbkdf2 is locked");
  Ml = r;
};
Object.freeze(Fn);
let Gl = !1;
const Hl = function(r) {
  return new Uint8Array(Q1(r));
};
let Vl = Hl;
function en(r) {
  return Vl(r);
}
en._ = Hl;
en.lock = function() {
  Gl = !0;
};
en.register = function(r) {
  if (Gl)
    throw new Error("randomBytes is locked");
  Vl = r;
};
Object.freeze(en);
const Z = (r, e) => r << e | r >>> 32 - e;
function Qc(r, e, t, n, s, i) {
  let a = r[e++] ^ t[n++], o = r[e++] ^ t[n++], c = r[e++] ^ t[n++], f = r[e++] ^ t[n++], u = r[e++] ^ t[n++], d = r[e++] ^ t[n++], x = r[e++] ^ t[n++], p = r[e++] ^ t[n++], m = r[e++] ^ t[n++], g = r[e++] ^ t[n++], A = r[e++] ^ t[n++], E = r[e++] ^ t[n++], C = r[e++] ^ t[n++], T = r[e++] ^ t[n++], M = r[e++] ^ t[n++], O = r[e++] ^ t[n++], R = a, F = o, U = c, _ = f, H = u, V = d, $ = x, te = p, de = m, k = g, B = A, G = E, W = C, z = T, q = M, ae = O;
  for (let Ee = 0; Ee < 8; Ee += 2)
    H ^= Z(R + W | 0, 7), de ^= Z(H + R | 0, 9), W ^= Z(de + H | 0, 13), R ^= Z(W + de | 0, 18), k ^= Z(V + F | 0, 7), z ^= Z(k + V | 0, 9), F ^= Z(z + k | 0, 13), V ^= Z(F + z | 0, 18), q ^= Z(B + $ | 0, 7), U ^= Z(q + B | 0, 9), $ ^= Z(U + q | 0, 13), B ^= Z($ + U | 0, 18), _ ^= Z(ae + G | 0, 7), te ^= Z(_ + ae | 0, 9), G ^= Z(te + _ | 0, 13), ae ^= Z(G + te | 0, 18), F ^= Z(R + _ | 0, 7), U ^= Z(F + R | 0, 9), _ ^= Z(U + F | 0, 13), R ^= Z(_ + U | 0, 18), $ ^= Z(V + H | 0, 7), te ^= Z($ + V | 0, 9), H ^= Z(te + $ | 0, 13), V ^= Z(H + te | 0, 18), G ^= Z(B + k | 0, 7), de ^= Z(G + B | 0, 9), k ^= Z(de + G | 0, 13), B ^= Z(k + de | 0, 18), W ^= Z(ae + q | 0, 7), z ^= Z(W + ae | 0, 9), q ^= Z(z + W | 0, 13), ae ^= Z(q + z | 0, 18);
  s[i++] = a + R | 0, s[i++] = o + F | 0, s[i++] = c + U | 0, s[i++] = f + _ | 0, s[i++] = u + H | 0, s[i++] = d + V | 0, s[i++] = x + $ | 0, s[i++] = p + te | 0, s[i++] = m + de | 0, s[i++] = g + k | 0, s[i++] = A + B | 0, s[i++] = E + G | 0, s[i++] = C + W | 0, s[i++] = T + z | 0, s[i++] = M + q | 0, s[i++] = O + ae | 0;
}
function Xr(r, e, t, n, s) {
  let i = n + 0, a = n + 16 * s;
  for (let o = 0; o < 16; o++)
    t[a + o] = r[e + (2 * s - 1) * 16 + o];
  for (let o = 0; o < s; o++, i += 16, e += 16)
    Qc(t, a, r, e, t, i), o > 0 && (a += 16), Qc(t, i, r, e += 16, t, a);
}
function Ql(r, e, t) {
  const n = xl({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1073742848
  }, t), { N: s, r: i, p: a, dkLen: o, asyncTick: c, maxmem: f, onProgress: u } = n;
  if (Je(s), Je(i), Je(a), Je(o), Je(c), Je(f), u !== void 0 && typeof u != "function")
    throw new Error("progressCb should be function");
  const d = 128 * i, x = d / 4;
  if (s <= 1 || s & s - 1 || s >= 2 ** (d / 8) || s > 2 ** 32)
    throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  if (a < 0 || a > (2 ** 32 - 1) * 32 / d)
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (o < 0 || o > (2 ** 32 - 1) * 32)
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  const p = d * (s + a);
  if (p > f)
    throw new Error(`Scrypt: parameters too large, ${p} (128 * r * (N + p)) > ${f} (maxmem)`);
  const m = _o(ni, r, e, { c: 1, dkLen: d * a }), g = ka(m), A = ka(new Uint8Array(d * s)), E = ka(new Uint8Array(d));
  let C = () => {
  };
  if (u) {
    const T = 2 * s * a, M = Math.max(Math.floor(T / 1e4), 1);
    let O = 0;
    C = () => {
      O++, u && (!(O % M) || O === T) && u(O / T);
    };
  }
  return { N: s, r: i, p: a, dkLen: o, blockSize32: x, V: A, B32: g, B: m, tmp: E, blockMixCb: C, asyncTick: c };
}
function Kl(r, e, t, n, s) {
  const i = _o(ni, r, t, { c: 1, dkLen: e });
  return t.fill(0), n.fill(0), s.fill(0), i;
}
function oh(r, e, t) {
  const { N: n, r: s, p: i, dkLen: a, blockSize32: o, V: c, B32: f, B: u, tmp: d, blockMixCb: x } = Ql(r, e, t);
  for (let p = 0; p < i; p++) {
    const m = o * p;
    for (let g = 0; g < o; g++)
      c[g] = f[m + g];
    for (let g = 0, A = 0; g < n - 1; g++)
      Xr(c, A, c, A += o, s), x();
    Xr(c, (n - 1) * o, f, m, s), x();
    for (let g = 0; g < n; g++) {
      const A = f[m + o - 16] % n;
      for (let E = 0; E < o; E++)
        d[E] = f[m + E] ^ c[A * o + E];
      Xr(d, 0, f, m, s), x();
    }
  }
  return Kl(r, a, u, c, d);
}
async function ch(r, e, t) {
  const { N: n, r: s, p: i, dkLen: a, blockSize32: o, V: c, B32: f, B: u, tmp: d, blockMixCb: x, asyncTick: p } = Ql(r, e, t);
  for (let m = 0; m < i; m++) {
    const g = o * m;
    for (let E = 0; E < o; E++)
      c[E] = f[g + E];
    let A = 0;
    await Dc(n - 1, p, () => {
      Xr(c, A, c, A += o, s), x();
    }), Xr(c, (n - 1) * o, f, g, s), x(), await Dc(n, p, () => {
      const E = f[g + o - 16] % n;
      for (let C = 0; C < o; C++)
        d[C] = f[g + C] ^ c[E * o + C];
      Xr(d, 0, f, g, s), x();
    });
  }
  return Kl(r, a, u, c, d);
}
let _l = !1, zl = !1;
const Jl = async function(r, e, t, n, s, i, a) {
  return await ch(r, e, { N: t, r: n, p: s, dkLen: i, onProgress: a });
}, jl = function(r, e, t, n, s, i) {
  return oh(r, e, { N: t, r: n, p: s, dkLen: i });
};
let Wl = Jl, Zl = jl;
async function ii(r, e, t, n, s, i, a) {
  const o = v(r, "passwd"), c = v(e, "salt");
  return P(await Wl(o, c, t, n, s, i, a));
}
ii._ = Jl;
ii.lock = function() {
  zl = !0;
};
ii.register = function(r) {
  if (zl)
    throw new Error("scrypt is locked");
  Wl = r;
};
Object.freeze(ii);
function ai(r, e, t, n, s, i) {
  const a = v(r, "passwd"), o = v(e, "salt");
  return P(Zl(a, o, t, n, s, i));
}
ai._ = jl;
ai.lock = function() {
  _l = !0;
};
ai.register = function(r) {
  if (_l)
    throw new Error("scryptSync is locked");
  Zl = r;
};
Object.freeze(ai);
const Yl = function(r) {
  return G1("sha256").update(r).digest();
};
let Xl = Yl, $l = !1;
function at(r) {
  const e = v(r, "data");
  return P(Xl(e));
}
at._ = Yl;
at.lock = function() {
  $l = !0;
};
at.register = function(r) {
  if ($l)
    throw new Error("sha256 is locked");
  Xl = r;
};
Object.freeze(at);
Object.freeze(at);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ql = BigInt(0), g0 = BigInt(1), fh = BigInt(2), y0 = (r) => r instanceof Uint8Array, lh = /* @__PURE__ */ Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, "0"));
function js(r) {
  if (!y0(r))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += lh[r[t]];
  return e;
}
function eu(r) {
  const e = r.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function Yo(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function Ws(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const e = r.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const t = new Uint8Array(e / 2);
  for (let n = 0; n < t.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), a = Number.parseInt(i, 16);
    if (Number.isNaN(a) || a < 0)
      throw new Error("Invalid byte sequence");
    t[n] = a;
  }
  return t;
}
function Ar(r) {
  return Yo(js(r));
}
function Xo(r) {
  if (!y0(r))
    throw new Error("Uint8Array expected");
  return Yo(js(Uint8Array.from(r).reverse()));
}
function Zs(r, e) {
  return Ws(r.toString(16).padStart(e * 2, "0"));
}
function $o(r, e) {
  return Zs(r, e).reverse();
}
function uh(r) {
  return Ws(eu(r));
}
function ut(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = Ws(e);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${e}". Cause: ${i}`);
    }
  else if (y0(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${r} expected ${t} bytes, got ${s}`);
  return n;
}
function Ni(...r) {
  const e = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let t = 0;
  return r.forEach((n) => {
    if (!y0(n))
      throw new Error("Uint8Array expected");
    e.set(n, t), t += n.length;
  }), e;
}
function dh(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function hh(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function xh(r) {
  let e;
  for (e = 0; r > ql; r >>= g0, e += 1)
    ;
  return e;
}
function bh(r, e) {
  return r >> BigInt(e) & g0;
}
const ph = (r, e, t) => r | (t ? g0 : ql) << BigInt(e), qo = (r) => (fh << BigInt(r - 1)) - g0, L0 = (r) => new Uint8Array(r), Kc = (r) => Uint8Array.from(r);
function tu(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function")
    throw new Error("hmacFn must be a function");
  let n = L0(r), s = L0(r), i = 0;
  const a = () => {
    n.fill(1), s.fill(0), i = 0;
  }, o = (...d) => t(s, n, ...d), c = (d = L0()) => {
    s = o(Kc([0]), d), n = o(), d.length !== 0 && (s = o(Kc([1]), d), n = o());
  }, f = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const x = [];
    for (; d < e; ) {
      n = o();
      const p = n.slice();
      x.push(p), d += n.length;
    }
    return Ni(...x);
  };
  return (d, x) => {
    a(), c(d);
    let p;
    for (; !(p = x(f())); )
      c();
    return a(), p;
  };
}
const gh = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, e) => e.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function ia(r, e, t = {}) {
  const n = (s, i, a) => {
    const o = gh[i];
    if (typeof o != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(a && c === void 0) && !o(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(e))
    n(s, i, !1);
  for (const [s, i] of Object.entries(t))
    n(s, i, !0);
  return r;
}
const yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: bh,
  bitLen: xh,
  bitMask: qo,
  bitSet: ph,
  bytesToHex: js,
  bytesToNumberBE: Ar,
  bytesToNumberLE: Xo,
  concatBytes: Ni,
  createHmacDrbg: tu,
  ensureBytes: ut,
  equalBytes: dh,
  hexToBytes: Ws,
  hexToNumber: Yo,
  numberToBytesBE: Zs,
  numberToBytesLE: $o,
  numberToHexUnpadded: eu,
  numberToVarBytesBE: uh,
  utf8ToBytes: hh,
  validateObject: ia
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const be = BigInt(0), fe = BigInt(1), Qn = BigInt(2), mh = BigInt(3), co = BigInt(4), _c = BigInt(5), zc = BigInt(8);
BigInt(9);
BigInt(16);
function Fe(r, e) {
  const t = r % e;
  return t >= be ? t : e + t;
}
function wh(r, e, t) {
  if (t <= be || e < be)
    throw new Error("Expected power/modulo > 0");
  if (t === fe)
    return be;
  let n = fe;
  for (; e > be; )
    e & fe && (n = n * r % t), r = r * r % t, e >>= fe;
  return n;
}
function je(r, e, t) {
  let n = r;
  for (; e-- > be; )
    n *= n, n %= t;
  return n;
}
function fo(r, e) {
  if (r === be || e <= be)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
  let t = Fe(r, e), n = e, s = be, i = fe;
  for (; t !== be; ) {
    const o = n / t, c = n % t, f = s - i * o;
    n = t, t = c, s = i, i = f;
  }
  if (n !== fe)
    throw new Error("invert: does not exist");
  return Fe(s, e);
}
function Ah(r) {
  const e = (r - fe) / Qn;
  let t, n, s;
  for (t = r - fe, n = 0; t % Qn === be; t /= Qn, n++)
    ;
  for (s = Qn; s < r && wh(s, e, r) !== r - fe; s++)
    ;
  if (n === 1) {
    const a = (r + fe) / co;
    return function(c, f) {
      const u = c.pow(f, a);
      if (!c.eql(c.sqr(u), f))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const i = (t + fe) / Qn;
  return function(o, c) {
    if (o.pow(c, e) === o.neg(o.ONE))
      throw new Error("Cannot find square root");
    let f = n, u = o.pow(o.mul(o.ONE, s), t), d = o.pow(c, i), x = o.pow(c, t);
    for (; !o.eql(x, o.ONE); ) {
      if (o.eql(x, o.ZERO))
        return o.ZERO;
      let p = 1;
      for (let g = o.sqr(x); p < f && !o.eql(g, o.ONE); p++)
        g = o.sqr(g);
      const m = o.pow(u, fe << BigInt(f - p - 1));
      u = o.sqr(m), d = o.mul(d, m), x = o.mul(x, u), f = p;
    }
    return d;
  };
}
function Eh(r) {
  if (r % co === mh) {
    const e = (r + fe) / co;
    return function(n, s) {
      const i = n.pow(s, e);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % zc === _c) {
    const e = (r - _c) / zc;
    return function(n, s) {
      const i = n.mul(s, Qn), a = n.pow(i, e), o = n.mul(s, a), c = n.mul(n.mul(o, Qn), a), f = n.mul(o, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(f), s))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  return Ah(r);
}
const Nh = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Ph(r) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = Nh.reduce((n, s) => (n[s] = "function", n), e);
  return ia(r, t);
}
function Th(r, e, t) {
  if (t < be)
    throw new Error("Expected power > 0");
  if (t === be)
    return r.ONE;
  if (t === fe)
    return e;
  let n = r.ONE, s = e;
  for (; t > be; )
    t & fe && (n = r.mul(n, s)), s = r.sqr(s), t >>= fe;
  return n;
}
function Ih(r, e) {
  const t = new Array(e.length), n = e.reduce((i, a, o) => r.is0(a) ? i : (t[o] = i, r.mul(i, a)), r.ONE), s = r.inv(n);
  return e.reduceRight((i, a, o) => r.is0(a) ? i : (t[o] = r.mul(i, t[o]), r.mul(i, a)), s), t;
}
function nu(r, e) {
  const t = e !== void 0 ? e : r.toString(2).length, n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function Ch(r, e, t = !1, n = {}) {
  if (r <= be)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = nu(r, e);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const a = Eh(r), o = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: qo(s),
    ZERO: be,
    ONE: fe,
    create: (c) => Fe(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return be <= c && c < r;
    },
    is0: (c) => c === be,
    isOdd: (c) => (c & fe) === fe,
    neg: (c) => Fe(-c, r),
    eql: (c, f) => c === f,
    sqr: (c) => Fe(c * c, r),
    add: (c, f) => Fe(c + f, r),
    sub: (c, f) => Fe(c - f, r),
    mul: (c, f) => Fe(c * f, r),
    pow: (c, f) => Th(o, c, f),
    div: (c, f) => Fe(c * fo(f, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, f) => c + f,
    subN: (c, f) => c - f,
    mulN: (c, f) => c * f,
    inv: (c) => fo(c, r),
    sqrt: n.sqrt || ((c) => a(o, c)),
    invertBatch: (c) => Ih(o, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, f, u) => u ? f : c,
    toBytes: (c) => t ? $o(c, i) : Zs(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return t ? Xo(c) : Ar(c);
    }
  });
  return Object.freeze(o);
}
function ru(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function su(r) {
  const e = ru(r);
  return e + Math.ceil(e / 2);
}
function kh(r, e, t = !1) {
  const n = r.length, s = ru(e), i = su(e);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const a = t ? Ar(r) : Xo(r), o = Fe(a, e - fe) + fe;
  return t ? $o(o, s) : Zs(o, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Oh = BigInt(0), D0 = BigInt(1);
function Rh(r, e) {
  const t = (s, i) => {
    const a = i.negate();
    return s ? a : i;
  }, n = (s) => {
    const i = Math.ceil(e / s) + 1, a = 2 ** (s - 1);
    return { windows: i, windowSize: a };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let a = r.ZERO, o = s;
      for (; i > Oh; )
        i & D0 && (a = a.add(o)), o = o.double(), i >>= D0;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: a, windowSize: o } = n(i), c = [];
      let f = s, u = f;
      for (let d = 0; d < a; d++) {
        u = f, c.push(u);
        for (let x = 1; x < o; x++)
          u = u.add(f), c.push(u);
        f = u.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, a) {
      const { windows: o, windowSize: c } = n(s);
      let f = r.ZERO, u = r.BASE;
      const d = BigInt(2 ** s - 1), x = 2 ** s, p = BigInt(s);
      for (let m = 0; m < o; m++) {
        const g = m * c;
        let A = Number(a & d);
        a >>= p, A > c && (A -= x, a += D0);
        const E = g, C = g + Math.abs(A) - 1, T = m % 2 !== 0, M = A < 0;
        A === 0 ? u = u.add(t(T, i[E])) : f = f.add(t(M, i[C]));
      }
      return { p: f, f: u };
    },
    wNAFCached(s, i, a, o) {
      const c = s._WINDOW_SIZE || 1;
      let f = i.get(s);
      return f || (f = this.precomputeWindow(s, c), c !== 1 && i.set(s, o(f))), this.wNAF(c, f, a);
    }
  };
}
function iu(r) {
  return Ph(r.Fp), ia(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...nu(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Bh(r) {
  const e = iu(r);
  ia(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: t, Fp: n, a: s } = e;
  if (t) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: vh, hexToBytes: Sh } = yh, jn = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(r) {
    const { Err: e } = jn;
    if (r.length < 2 || r[0] !== 2)
      throw new e("Invalid signature integer tag");
    const t = r[1], n = r.subarray(2, t + 2);
    if (!t || n.length !== t)
      throw new e("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: vh(n), l: r.subarray(t + 2) };
  },
  toSig(r) {
    const { Err: e } = jn, t = typeof r == "string" ? Sh(r) : r;
    if (!(t instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = t.length;
    if (n < 2 || t[0] != 48)
      throw new e("Invalid signature tag");
    if (t[1] !== n - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: s, l: i } = jn._parseInt(t.subarray(2)), { d: a, l: o } = jn._parseInt(i);
    if (o.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: s, s: a };
  },
  hexFromSig(r) {
    const e = (f) => Number.parseInt(f[0], 16) & 8 ? "00" + f : f, t = (f) => {
      const u = f.toString(16);
      return u.length & 1 ? `0${u}` : u;
    }, n = e(t(r.s)), s = e(t(r.r)), i = n.length / 2, a = s.length / 2, o = t(i), c = t(a);
    return `30${t(a + i + 4)}02${c}${s}02${o}${n}`;
  }
}, $t = BigInt(0), it = BigInt(1);
BigInt(2);
const Jc = BigInt(3);
BigInt(4);
function Uh(r) {
  const e = Bh(r), { Fp: t } = e, n = e.toBytes || ((m, g, A) => {
    const E = g.toAffine();
    return Ni(Uint8Array.from([4]), t.toBytes(E.x), t.toBytes(E.y));
  }), s = e.fromBytes || ((m) => {
    const g = m.subarray(1), A = t.fromBytes(g.subarray(0, t.BYTES)), E = t.fromBytes(g.subarray(t.BYTES, 2 * t.BYTES));
    return { x: A, y: E };
  });
  function i(m) {
    const { a: g, b: A } = e, E = t.sqr(m), C = t.mul(E, m);
    return t.add(t.add(C, t.mul(m, g)), A);
  }
  if (!t.eql(t.sqr(e.Gy), i(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(m) {
    return typeof m == "bigint" && $t < m && m < e.n;
  }
  function o(m) {
    if (!a(m))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(m) {
    const { allowedPrivateKeyLengths: g, nByteLength: A, wrapPrivateKey: E, n: C } = e;
    if (g && typeof m != "bigint") {
      if (m instanceof Uint8Array && (m = js(m)), typeof m != "string" || !g.includes(m.length))
        throw new Error("Invalid key");
      m = m.padStart(A * 2, "0");
    }
    let T;
    try {
      T = typeof m == "bigint" ? m : Ar(ut("private key", m, A));
    } catch {
      throw new Error(`private key must be ${A} bytes, hex or bigint, not ${typeof m}`);
    }
    return E && (T = Fe(T, C)), o(T), T;
  }
  const f = /* @__PURE__ */ new Map();
  function u(m) {
    if (!(m instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  class d {
    constructor(g, A, E) {
      if (this.px = g, this.py = A, this.pz = E, g == null || !t.isValid(g))
        throw new Error("x required");
      if (A == null || !t.isValid(A))
        throw new Error("y required");
      if (E == null || !t.isValid(E))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(g) {
      const { x: A, y: E } = g || {};
      if (!g || !t.isValid(A) || !t.isValid(E))
        throw new Error("invalid affine point");
      if (g instanceof d)
        throw new Error("projective point not allowed");
      const C = (T) => t.eql(T, t.ZERO);
      return C(A) && C(E) ? d.ZERO : new d(A, E, t.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(g) {
      const A = t.invertBatch(g.map((E) => E.pz));
      return g.map((E, C) => E.toAffine(A[C])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(g) {
      const A = d.fromAffine(s(ut("pointHex", g)));
      return A.assertValidity(), A;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(g) {
      return d.BASE.multiply(c(g));
    }
    // "Private method", don't use it directly
    _setWindowSize(g) {
      this._WINDOW_SIZE = g, f.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !t.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: g, y: A } = this.toAffine();
      if (!t.isValid(g) || !t.isValid(A))
        throw new Error("bad point: x or y not FE");
      const E = t.sqr(A), C = i(g);
      if (!t.eql(E, C))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: g } = this.toAffine();
      if (t.isOdd)
        return !t.isOdd(g);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(g) {
      u(g);
      const { px: A, py: E, pz: C } = this, { px: T, py: M, pz: O } = g, R = t.eql(t.mul(A, O), t.mul(T, C)), F = t.eql(t.mul(E, O), t.mul(M, C));
      return R && F;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, t.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: g, b: A } = e, E = t.mul(A, Jc), { px: C, py: T, pz: M } = this;
      let O = t.ZERO, R = t.ZERO, F = t.ZERO, U = t.mul(C, C), _ = t.mul(T, T), H = t.mul(M, M), V = t.mul(C, T);
      return V = t.add(V, V), F = t.mul(C, M), F = t.add(F, F), O = t.mul(g, F), R = t.mul(E, H), R = t.add(O, R), O = t.sub(_, R), R = t.add(_, R), R = t.mul(O, R), O = t.mul(V, O), F = t.mul(E, F), H = t.mul(g, H), V = t.sub(U, H), V = t.mul(g, V), V = t.add(V, F), F = t.add(U, U), U = t.add(F, U), U = t.add(U, H), U = t.mul(U, V), R = t.add(R, U), H = t.mul(T, M), H = t.add(H, H), U = t.mul(H, V), O = t.sub(O, U), F = t.mul(H, _), F = t.add(F, F), F = t.add(F, F), new d(O, R, F);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(g) {
      u(g);
      const { px: A, py: E, pz: C } = this, { px: T, py: M, pz: O } = g;
      let R = t.ZERO, F = t.ZERO, U = t.ZERO;
      const _ = e.a, H = t.mul(e.b, Jc);
      let V = t.mul(A, T), $ = t.mul(E, M), te = t.mul(C, O), de = t.add(A, E), k = t.add(T, M);
      de = t.mul(de, k), k = t.add(V, $), de = t.sub(de, k), k = t.add(A, C);
      let B = t.add(T, O);
      return k = t.mul(k, B), B = t.add(V, te), k = t.sub(k, B), B = t.add(E, C), R = t.add(M, O), B = t.mul(B, R), R = t.add($, te), B = t.sub(B, R), U = t.mul(_, k), R = t.mul(H, te), U = t.add(R, U), R = t.sub($, U), U = t.add($, U), F = t.mul(R, U), $ = t.add(V, V), $ = t.add($, V), te = t.mul(_, te), k = t.mul(H, k), $ = t.add($, te), te = t.sub(V, te), te = t.mul(_, te), k = t.add(k, te), V = t.mul($, k), F = t.add(F, V), V = t.mul(B, k), R = t.mul(de, R), R = t.sub(R, V), V = t.mul(de, $), U = t.mul(B, U), U = t.add(U, V), new d(R, F, U);
    }
    subtract(g) {
      return this.add(g.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(g) {
      return p.wNAFCached(this, f, g, (A) => {
        const E = t.invertBatch(A.map((C) => C.pz));
        return A.map((C, T) => C.toAffine(E[T])).map(d.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(g) {
      const A = d.ZERO;
      if (g === $t)
        return A;
      if (o(g), g === it)
        return this;
      const { endo: E } = e;
      if (!E)
        return p.unsafeLadder(this, g);
      let { k1neg: C, k1: T, k2neg: M, k2: O } = E.splitScalar(g), R = A, F = A, U = this;
      for (; T > $t || O > $t; )
        T & it && (R = R.add(U)), O & it && (F = F.add(U)), U = U.double(), T >>= it, O >>= it;
      return C && (R = R.negate()), M && (F = F.negate()), F = new d(t.mul(F.px, E.beta), F.py, F.pz), R.add(F);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(g) {
      o(g);
      let A = g, E, C;
      const { endo: T } = e;
      if (T) {
        const { k1neg: M, k1: O, k2neg: R, k2: F } = T.splitScalar(A);
        let { p: U, f: _ } = this.wNAF(O), { p: H, f: V } = this.wNAF(F);
        U = p.constTimeNegate(M, U), H = p.constTimeNegate(R, H), H = new d(t.mul(H.px, T.beta), H.py, H.pz), E = U.add(H), C = _.add(V);
      } else {
        const { p: M, f: O } = this.wNAF(A);
        E = M, C = O;
      }
      return d.normalizeZ([E, C])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(g, A, E) {
      const C = d.BASE, T = (O, R) => R === $t || R === it || !O.equals(C) ? O.multiplyUnsafe(R) : O.multiply(R), M = T(this, A).add(T(g, E));
      return M.is0() ? void 0 : M;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(g) {
      const { px: A, py: E, pz: C } = this, T = this.is0();
      g == null && (g = T ? t.ONE : t.inv(C));
      const M = t.mul(A, g), O = t.mul(E, g), R = t.mul(C, g);
      if (T)
        return { x: t.ZERO, y: t.ZERO };
      if (!t.eql(R, t.ONE))
        throw new Error("invZ was invalid");
      return { x: M, y: O };
    }
    isTorsionFree() {
      const { h: g, isTorsionFree: A } = e;
      if (g === it)
        return !0;
      if (A)
        return A(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: g, clearCofactor: A } = e;
      return g === it ? this : A ? A(d, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(g = !0) {
      return this.assertValidity(), n(d, this, g);
    }
    toHex(g = !0) {
      return js(this.toRawBytes(g));
    }
  }
  d.BASE = new d(e.Gx, e.Gy, t.ONE), d.ZERO = new d(t.ZERO, t.ONE, t.ZERO);
  const x = e.nBitLength, p = Rh(d, e.endo ? Math.ceil(x / 2) : x);
  return {
    CURVE: e,
    ProjectivePoint: d,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: a
  };
}
function Lh(r) {
  const e = iu(r);
  return ia(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function Dh(r) {
  const e = Lh(r), { Fp: t, n } = e, s = t.BYTES + 1, i = 2 * t.BYTES + 1;
  function a(k) {
    return $t < k && k < t.ORDER;
  }
  function o(k) {
    return Fe(k, n);
  }
  function c(k) {
    return fo(k, n);
  }
  const { ProjectivePoint: f, normPrivateKeyToScalar: u, weierstrassEquation: d, isWithinCurveOrder: x } = Uh({
    ...e,
    toBytes(k, B, G) {
      const W = B.toAffine(), z = t.toBytes(W.x), q = Ni;
      return G ? q(Uint8Array.from([B.hasEvenY() ? 2 : 3]), z) : q(Uint8Array.from([4]), z, t.toBytes(W.y));
    },
    fromBytes(k) {
      const B = k.length, G = k[0], W = k.subarray(1);
      if (B === s && (G === 2 || G === 3)) {
        const z = Ar(W);
        if (!a(z))
          throw new Error("Point is not on curve");
        const q = d(z);
        let ae = t.sqrt(q);
        const Ee = (ae & it) === it;
        return (G & 1) === 1 !== Ee && (ae = t.neg(ae)), { x: z, y: ae };
      } else if (B === i && G === 4) {
        const z = t.fromBytes(W.subarray(0, t.BYTES)), q = t.fromBytes(W.subarray(t.BYTES, 2 * t.BYTES));
        return { x: z, y: q };
      } else
        throw new Error(`Point of length ${B} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), p = (k) => js(Zs(k, e.nByteLength));
  function m(k) {
    const B = n >> it;
    return k > B;
  }
  function g(k) {
    return m(k) ? o(-k) : k;
  }
  const A = (k, B, G) => Ar(k.slice(B, G));
  class E {
    constructor(B, G, W) {
      this.r = B, this.s = G, this.recovery = W, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(B) {
      const G = e.nByteLength;
      return B = ut("compactSignature", B, G * 2), new E(A(B, 0, G), A(B, G, 2 * G));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(B) {
      const { r: G, s: W } = jn.toSig(ut("DER", B));
      return new E(G, W);
    }
    assertValidity() {
      if (!x(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!x(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(B) {
      return new E(this.r, this.s, B);
    }
    recoverPublicKey(B) {
      const { r: G, s: W, recovery: z } = this, q = F(ut("msgHash", B));
      if (z == null || ![0, 1, 2, 3].includes(z))
        throw new Error("recovery id invalid");
      const ae = z === 2 || z === 3 ? G + e.n : G;
      if (ae >= t.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const Ee = z & 1 ? "03" : "02", cn = f.fromHex(Ee + p(ae)), fn = c(ae), vr = o(-q * fn), oi = o(W * fn), ln = f.BASE.multiplyAndAddUnsafe(cn, vr, oi);
      if (!ln)
        throw new Error("point at infinify");
      return ln.assertValidity(), ln;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new E(this.r, o(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Ws(this.toDERHex());
    }
    toDERHex() {
      return jn.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Ws(this.toCompactHex());
    }
    toCompactHex() {
      return p(this.r) + p(this.s);
    }
  }
  const C = {
    isValidPrivateKey(k) {
      try {
        return u(k), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const k = su(e.n);
      return kh(e.randomBytes(k), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(k = 8, B = f.BASE) {
      return B._setWindowSize(k), B.multiply(BigInt(3)), B;
    }
  };
  function T(k, B = !0) {
    return f.fromPrivateKey(k).toRawBytes(B);
  }
  function M(k) {
    const B = k instanceof Uint8Array, G = typeof k == "string", W = (B || G) && k.length;
    return B ? W === s || W === i : G ? W === 2 * s || W === 2 * i : k instanceof f;
  }
  function O(k, B, G = !0) {
    if (M(k))
      throw new Error("first arg must be private key");
    if (!M(B))
      throw new Error("second arg must be public key");
    return f.fromHex(B).multiply(u(k)).toRawBytes(G);
  }
  const R = e.bits2int || function(k) {
    const B = Ar(k), G = k.length * 8 - e.nBitLength;
    return G > 0 ? B >> BigInt(G) : B;
  }, F = e.bits2int_modN || function(k) {
    return o(R(k));
  }, U = qo(e.nBitLength);
  function _(k) {
    if (typeof k != "bigint")
      throw new Error("bigint expected");
    if (!($t <= k && k < U))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Zs(k, e.nByteLength);
  }
  function H(k, B, G = V) {
    if (["recovered", "canonical"].some((Gn) => Gn in G))
      throw new Error("sign() legacy options not supported");
    const { hash: W, randomBytes: z } = e;
    let { lowS: q, prehash: ae, extraEntropy: Ee } = G;
    q == null && (q = !0), k = ut("msgHash", k), ae && (k = ut("prehashed msgHash", W(k)));
    const cn = F(k), fn = u(B), vr = [_(fn), _(cn)];
    if (Ee != null) {
      const Gn = Ee === !0 ? z(t.BYTES) : Ee;
      vr.push(ut("extraEntropy", Gn));
    }
    const oi = Ni(...vr), ln = cn;
    function O0(Gn) {
      const Sr = R(Gn);
      if (!x(Sr))
        return;
      const Ec = c(Sr), Ur = f.BASE.multiply(Sr).toAffine(), ot = o(Ur.x);
      if (ot === $t)
        return;
      const Lr = o(Ec * o(ln + ot * fn));
      if (Lr === $t)
        return;
      let Nc = (Ur.x === ot ? 0 : 2) | Number(Ur.y & it), Pc = Lr;
      return q && m(Lr) && (Pc = g(Lr), Nc ^= 1), new E(ot, Pc, Nc);
    }
    return { seed: oi, k2sig: O0 };
  }
  const V = { lowS: e.lowS, prehash: !1 }, $ = { lowS: e.lowS, prehash: !1 };
  function te(k, B, G = V) {
    const { seed: W, k2sig: z } = H(k, B, G), q = e;
    return tu(q.hash.outputLen, q.nByteLength, q.hmac)(W, z);
  }
  f.BASE._setWindowSize(8);
  function de(k, B, G, W = $) {
    var Ur;
    const z = k;
    if (B = ut("msgHash", B), G = ut("publicKey", G), "strict" in W)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: q, prehash: ae } = W;
    let Ee, cn;
    try {
      if (typeof z == "string" || z instanceof Uint8Array)
        try {
          Ee = E.fromDER(z);
        } catch (ot) {
          if (!(ot instanceof jn.Err))
            throw ot;
          Ee = E.fromCompact(z);
        }
      else if (typeof z == "object" && typeof z.r == "bigint" && typeof z.s == "bigint") {
        const { r: ot, s: Lr } = z;
        Ee = new E(ot, Lr);
      } else
        throw new Error("PARSE");
      cn = f.fromHex(G);
    } catch (ot) {
      if (ot.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (q && Ee.hasHighS())
      return !1;
    ae && (B = e.hash(B));
    const { r: fn, s: vr } = Ee, oi = F(B), ln = c(vr), O0 = o(oi * ln), Gn = o(fn * ln), Sr = (Ur = f.BASE.multiplyAndAddUnsafe(cn, O0, Gn)) == null ? void 0 : Ur.toAffine();
    return Sr ? o(Sr.x) === fn : !1;
  }
  return {
    CURVE: e,
    getPublicKey: T,
    getSharedSecret: O,
    sign: te,
    verify: de,
    ProjectivePoint: f,
    Signature: E,
    utils: C
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Fh(r) {
  return {
    hash: r,
    hmac: (e, ...t) => p0(r, e, f1(...t)),
    randomBytes: u1
  };
}
function Mh(r, e) {
  const t = (n) => Dh({ ...r, ...Fh(n) });
  return Object.freeze({ ...t(e), create: t });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const au = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), jc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Gh = BigInt(1), lo = BigInt(2), Wc = (r, e) => (r + e / lo) / e;
function Hh(r) {
  const e = au, t = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), a = BigInt(23), o = BigInt(44), c = BigInt(88), f = r * r * r % e, u = f * f * r % e, d = je(u, t, e) * u % e, x = je(d, t, e) * u % e, p = je(x, lo, e) * f % e, m = je(p, s, e) * p % e, g = je(m, i, e) * m % e, A = je(g, o, e) * g % e, E = je(A, c, e) * A % e, C = je(E, o, e) * g % e, T = je(C, t, e) * u % e, M = je(T, a, e) * m % e, O = je(M, n, e) * f % e, R = je(O, lo, e);
  if (!uo.eql(uo.sqr(R), r))
    throw new Error("Cannot find square root");
  return R;
}
const uo = Ch(au, void 0, void 0, { sqrt: Hh }), bn = Mh({
  a: BigInt(0),
  b: BigInt(7),
  Fp: uo,
  n: jc,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const e = jc, t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Gh * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = t, a = BigInt("0x100000000000000000000000000000000"), o = Wc(i * r, e), c = Wc(-n * r, e);
      let f = Fe(r - o * t - c * s, e), u = Fe(-o * n - c * i, e);
      const d = f > a, x = u > a;
      if (d && (f = e - f), x && (u = e - u), f > a || u > a)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: d, k1: f, k2neg: x, k2: u };
    }
  }
}, ni);
BigInt(0);
bn.ProjectivePoint;
const Pi = "0x0000000000000000000000000000000000000000", Zc = "0x0000000000000000000000000000000000000000000000000000000000000000", Vh = `Ethereum Signed Message:
`, Yc = BigInt(0), Xc = BigInt(1), $c = BigInt(2), qc = BigInt(27), ef = BigInt(28), ma = BigInt(35), Fr = {};
function tf(r) {
  return Pr(ke(r), 32);
}
var cs, fs, ls, ir;
const ct = class ct {
  /**
   *  @private
   */
  constructor(e, t, n, s) {
    w(this, cs, void 0);
    w(this, fs, void 0);
    w(this, ls, void 0);
    w(this, ir, void 0);
    Rr(e, Fr, "Signature"), h(this, cs, t), h(this, fs, n), h(this, ls, s), h(this, ir, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return l(this, cs);
  }
  set r(e) {
    b(Yr(e) === 32, "invalid r", "value", e), h(this, cs, P(e));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return l(this, fs);
  }
  set s(e) {
    b(Yr(e) === 32, "invalid s", "value", e);
    const t = P(e);
    b(parseInt(t.substring(0, 3)) < 8, "non-canonical s", "value", t), h(this, fs, t);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return l(this, ls);
  }
  set v(e) {
    const t = K(e, "value");
    b(t === 27 || t === 28, "invalid v", "v", e), h(this, ls, t);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return l(this, ir);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const e = this.networkV;
    return e == null ? null : ct.getChainId(e);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const e = v(this.s);
    return this.yParity && (e[0] |= 128), P(e);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return X([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return X([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const e = new ct(Fr, this.r, this.s, this.v);
    return this.networkV && h(e, ir, this.networkV), e;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const e = this.networkV;
    return {
      _type: "signature",
      networkV: e != null ? e.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(e) {
    const t = L(e, "v");
    return t == qc || t == ef ? Yc : (b(t >= ma, "invalid EIP-155 v", "v", e), (t - ma) / $c);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(e, t) {
    return L(e) * $c + BigInt(35 + t - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(e) {
    const t = L(e);
    return t === Yc || t === qc ? 27 : t === Xc || t === ef ? 28 : (b(t >= ma, "invalid v", "v", e), t & Xc ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(e) {
    function t(f, u) {
      b(f, u, "signature", e);
    }
    if (e == null)
      return new ct(Fr, Zc, Zc, 27);
    if (typeof e == "string") {
      const f = v(e, "signature");
      if (f.length === 64) {
        const u = P(f.slice(0, 32)), d = f.slice(32, 64), x = d[0] & 128 ? 28 : 27;
        return d[0] &= 127, new ct(Fr, u, P(d), x);
      }
      if (f.length === 65) {
        const u = P(f.slice(0, 32)), d = f.slice(32, 64);
        t((d[0] & 128) === 0, "non-canonical s");
        const x = ct.getNormalizedV(f[64]);
        return new ct(Fr, u, P(d), x);
      }
      t(!1, "invalid raw signature length");
    }
    if (e instanceof ct)
      return e.clone();
    const n = e.r;
    t(n != null, "missing r");
    const s = tf(n), i = function(f, u) {
      if (f != null)
        return tf(f);
      if (u != null) {
        t(ee(u, 32), "invalid yParityAndS");
        const d = v(u);
        return d[0] &= 127, P(d);
      }
      t(!1, "missing s");
    }(e.s, e.yParityAndS);
    t((v(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: a, v: o } = function(f, u, d) {
      if (f != null) {
        const x = L(f);
        return {
          networkV: x >= ma ? x : void 0,
          v: ct.getNormalizedV(x)
        };
      }
      if (u != null)
        return t(ee(u, 32), "invalid yParityAndS"), { v: v(u)[0] & 128 ? 28 : 27 };
      if (d != null) {
        switch (K(d, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        t(!1, "invalid yParity");
      }
      t(!1, "missing v");
    }(e.v, e.yParityAndS, e.yParity), c = new ct(Fr, s, i, o);
    return a && h(c, ir, a), t(e.yParity == null || K(e.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), t(e.yParityAndS == null || e.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
cs = new WeakMap(), fs = new WeakMap(), ls = new WeakMap(), ir = new WeakMap();
let gt = ct;
var Kt;
const _n = class _n {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(e) {
    w(this, Kt, void 0);
    b(Yr(e) === 32, "invalid private key", "privateKey", "[REDACTED]"), h(this, Kt, P(e));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return l(this, Kt);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return _n.computePublicKey(l(this, Kt));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return _n.computePublicKey(l(this, Kt), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(e) {
    b(Yr(e) === 32, "invalid digest length", "digest", e);
    const t = bn.sign(me(e), me(l(this, Kt)), {
      lowS: !0
    });
    return gt.from({
      r: nn(t.r, 32),
      s: nn(t.s, 32),
      v: t.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(e) {
    const t = _n.computePublicKey(e);
    return P(bn.getSharedSecret(me(l(this, Kt)), v(t), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(e, t) {
    let n = v(e, "key");
    if (n.length === 32) {
      const i = bn.getPublicKey(n, !!t);
      return P(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = bn.ProjectivePoint.fromHex(n);
    return P(s.toRawBytes(t));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(e, t) {
    b(Yr(e) === 32, "invalid digest length", "digest", e);
    const n = gt.from(t);
    let s = bn.Signature.fromCompact(me(X([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(me(e));
    return b(i != null, "invalid signautre for digest", "signature", t), "0x" + i.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(e, t, n) {
    const s = bn.ProjectivePoint.fromHex(_n.computePublicKey(e).substring(2)), i = bn.ProjectivePoint.fromHex(_n.computePublicKey(t).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
Kt = new WeakMap();
let Ut = _n;
const Qh = BigInt(0), Kh = BigInt(36);
function nf(r) {
  r = r.toLowerCase();
  const e = r.substring(2).split(""), t = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    t[s] = e[s].charCodeAt(0);
  const n = v(ie(t));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const ec = {};
for (let r = 0; r < 10; r++)
  ec[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  ec[String.fromCharCode(65 + r)] = String(10 + r);
const rf = 15;
function _h(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let e = r.split("").map((n) => ec[n]).join("");
  for (; e.length >= rf; ) {
    let n = e.substring(0, rf);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
const zh = function() {
  const r = {};
  for (let e = 0; e < 36; e++) {
    const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    r[t] = BigInt(e);
  }
  return r;
}();
function Jh(r) {
  r = r.toLowerCase();
  let e = Qh;
  for (let t = 0; t < r.length; t++)
    e = e * Kh + zh[r[t]];
  return e;
}
function J(r) {
  if (b(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const e = nf(r);
    return b(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === r, "bad address checksum", "address", r), e;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    b(r.substring(2, 4) === _h(r), "bad icap checksum", "address", r);
    let e = Jh(r.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return nf("0x" + e);
  }
  b(!1, "invalid address", "address", r);
}
function ou(r) {
  const e = J(r.from);
  let n = L(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, J(ne(ie(Tr([e, n])), 12));
}
function cu(r) {
  return r && typeof r.getAddress == "function";
}
function jh(r) {
  try {
    return J(r), !0;
  } catch {
  }
  return !1;
}
async function F0(r, e) {
  const t = await e;
  return (t == null || t === "0x0000000000000000000000000000000000000000") && (N(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), b(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), J(t);
}
function we(r, e) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? J(r) : (N(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), F0(r, e.resolveName(r)));
  if (cu(r))
    return F0(r, r.getAddress());
  if (r && typeof r.then == "function")
    return F0(r, r);
  b(!1, "unsupported addressable value", "target", r);
}
const Dt = {};
function S(r, e) {
  let t = !1;
  return e < 0 && (t = !0, e *= -1), new Oe(Dt, `${t ? "" : "u"}int${e}`, r, { signed: t, width: e });
}
function Y(r, e) {
  return new Oe(Dt, `bytes${e || ""}`, r, { size: e });
}
const sf = Symbol.for("_ethers_typed");
var ar;
const Ft = class Ft {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    y(this, "type");
    /**
     *  The actual value.
     */
    y(this, "value");
    w(this, ar, void 0);
    /**
     *  @_ignore:
     */
    y(this, "_typedSymbol");
    s == null && (s = null), Rr(Dt, e, "Typed"), D(this, { _typedSymbol: sf, type: t, value: n }), h(this, ar, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((e) => e.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return l(this, ar);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return l(this, ar) === !0 ? -1 : l(this, ar) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(e, t) {
    return new Ft(Dt, e, t);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(e) {
    return S(e, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(e) {
    return S(e, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(e) {
    return S(e, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(e) {
    return S(e, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(e) {
    return S(e, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(e) {
    return S(e, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(e) {
    return S(e, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(e) {
    return S(e, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(e) {
    return S(e, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(e) {
    return S(e, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(e) {
    return S(e, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(e) {
    return S(e, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(e) {
    return S(e, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(e) {
    return S(e, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(e) {
    return S(e, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(e) {
    return S(e, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(e) {
    return S(e, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(e) {
    return S(e, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(e) {
    return S(e, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(e) {
    return S(e, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(e) {
    return S(e, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(e) {
    return S(e, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(e) {
    return S(e, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(e) {
    return S(e, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(e) {
    return S(e, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(e) {
    return S(e, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(e) {
    return S(e, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(e) {
    return S(e, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(e) {
    return S(e, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(e) {
    return S(e, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(e) {
    return S(e, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(e) {
    return S(e, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(e) {
    return S(e, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(e) {
    return S(e, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(e) {
    return S(e, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(e) {
    return S(e, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(e) {
    return S(e, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(e) {
    return S(e, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(e) {
    return S(e, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(e) {
    return S(e, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(e) {
    return S(e, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(e) {
    return S(e, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(e) {
    return S(e, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(e) {
    return S(e, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(e) {
    return S(e, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(e) {
    return S(e, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(e) {
    return S(e, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(e) {
    return S(e, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(e) {
    return S(e, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(e) {
    return S(e, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(e) {
    return S(e, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(e) {
    return S(e, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(e) {
    return S(e, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(e) {
    return S(e, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(e) {
    return S(e, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(e) {
    return S(e, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(e) {
    return S(e, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(e) {
    return S(e, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(e) {
    return S(e, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(e) {
    return S(e, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(e) {
    return S(e, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(e) {
    return S(e, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(e) {
    return S(e, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(e) {
    return S(e, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(e) {
    return S(e, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(e) {
    return S(e, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(e) {
    return Y(e, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(e) {
    return Y(e, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(e) {
    return Y(e, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(e) {
    return Y(e, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(e) {
    return Y(e, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(e) {
    return Y(e, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(e) {
    return Y(e, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(e) {
    return Y(e, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(e) {
    return Y(e, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(e) {
    return Y(e, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(e) {
    return Y(e, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(e) {
    return Y(e, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(e) {
    return Y(e, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(e) {
    return Y(e, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(e) {
    return Y(e, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(e) {
    return Y(e, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(e) {
    return Y(e, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(e) {
    return Y(e, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(e) {
    return Y(e, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(e) {
    return Y(e, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(e) {
    return Y(e, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(e) {
    return Y(e, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(e) {
    return Y(e, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(e) {
    return Y(e, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(e) {
    return Y(e, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(e) {
    return Y(e, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(e) {
    return Y(e, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(e) {
    return Y(e, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(e) {
    return Y(e, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(e) {
    return Y(e, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(e) {
    return Y(e, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(e) {
    return Y(e, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(e) {
    return new Ft(Dt, "address", e);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(e) {
    return new Ft(Dt, "bool", !!e);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(e) {
    return new Ft(Dt, "bytes", e);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(e) {
    return new Ft(Dt, "string", e);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(e, t) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(e) {
    return new Ft(Dt, "overrides", Object.assign({}, e));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(e) {
    return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === sf;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(e, t) {
    if (Ft.isTyped(e)) {
      if (e.type !== t)
        throw new Error(`invalid type: expecetd ${t}, got ${e.type}`);
      return e.value;
    }
    return e;
  }
};
ar = new WeakMap();
let Oe = Ft;
class Wh extends on {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, t) {
    let n = Oe.dereference(t, "string");
    try {
      n = J(n);
    } catch (s) {
      return this._throwError(s.message, t);
    }
    return e.writeValue(n);
  }
  decode(e) {
    return J(nn(e.readValue(), 20));
  }
}
class Zh extends on {
  constructor(t) {
    super(t.name, t.type, "_", t.dynamic);
    y(this, "coder");
    this.coder = t;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(t, n) {
    return this.coder.encode(t, n);
  }
  decode(t) {
    return this.coder.decode(t);
  }
}
function fu(r, e, t) {
  let n = [];
  if (Array.isArray(t))
    n = t;
  else if (t && typeof t == "object") {
    let c = {};
    n = e.map((f) => {
      const u = f.localName;
      return N(u, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: f }, value: t }), N(!c[u], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: f }, value: t }), c[u] = !0, t[u];
    });
  } else
    b(!1, "invalid tuple value", "tuple", t);
  b(e.length === n.length, "types/value length mismatch", "tuple", t);
  let s = new so(), i = new so(), a = [];
  e.forEach((c, f) => {
    let u = n[f];
    if (c.dynamic) {
      let d = i.length;
      c.encode(i, u);
      let x = s.writeUpdatableValue();
      a.push((p) => {
        x(p + d);
      });
    } else
      c.encode(s, u);
  }), a.forEach((c) => {
    c(s.length);
  });
  let o = r.appendWriter(s);
  return o += r.appendWriter(i), o;
}
function lu(r, e) {
  let t = [], n = [], s = r.subReader(0);
  return e.forEach((i) => {
    let a = null;
    if (i.dynamic) {
      let o = r.readIndex(), c = s.subReader(o);
      try {
        a = i.decode(c);
      } catch (f) {
        if (Ce(f, "BUFFER_OVERRUN"))
          throw f;
        a = f, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    } else
      try {
        a = i.decode(r);
      } catch (o) {
        if (Ce(o, "BUFFER_OVERRUN"))
          throw o;
        a = o, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    if (a == null)
      throw new Error("investigate");
    t.push(a), n.push(i.localName || null);
  }), Ka.fromItems(t, n);
}
class Yh extends on {
  constructor(t, n, s) {
    const i = t.type + "[" + (n >= 0 ? n : "") + "]", a = n === -1 || t.dynamic;
    super("array", i, s, a);
    y(this, "coder");
    y(this, "length");
    D(this, { coder: t, length: n });
  }
  defaultValue() {
    const t = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(t);
    return n;
  }
  encode(t, n) {
    const s = Oe.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, t.writeValue(s.length)), Yf(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let o = 0; o < s.length; o++)
      a.push(this.coder);
    return fu(t, a, s);
  }
  decode(t) {
    let n = this.length;
    n === -1 && (n = t.readIndex(), N(n * ve <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: t.bytes, offset: n * ve, length: t.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new Zh(this.coder));
    return lu(t, s);
  }
}
class Xh extends on {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, t) {
    const n = Oe.dereference(t, "bool");
    return e.writeValue(n ? 1 : 0);
  }
  decode(e) {
    return !!e.readValue();
  }
}
class uu extends on {
  constructor(e, t) {
    super(e, e, t, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, t) {
    t = me(t);
    let n = e.writeValue(t.length);
    return n += e.writeBytes(t), n;
  }
  decode(e) {
    return e.readBytes(e.readIndex(), !0);
  }
}
class $h extends uu {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return P(super.decode(e));
  }
}
class qh extends on {
  constructor(t, n) {
    let s = "bytes" + String(t);
    super(s, s, n, !1);
    y(this, "size");
    D(this, { size: t }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(t, n) {
    let s = me(Oe.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), t.writeBytes(s);
  }
  decode(t) {
    return P(t.readBytes(this.size));
  }
}
const ex = new Uint8Array([]);
class tx extends on {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, t) {
    return t != null && this._throwError("not null", t), e.writeBytes(ex);
  }
  decode(e) {
    return e.readBytes(0), null;
  }
}
const nx = BigInt(0), rx = BigInt(1), sx = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class ix extends on {
  constructor(t, n, s) {
    const i = (n ? "int" : "uint") + t * 8;
    super(i, i, s, !1);
    y(this, "size");
    y(this, "signed");
    D(this, { size: t, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(t, n) {
    let s = L(Oe.dereference(n, this.type)), i = ui(sx, ve * 8);
    if (this.signed) {
      let a = ui(i, this.size * 8 - 1);
      (s > a || s < -(a + rx)) && this._throwError("value out-of-bounds", n), s = el(s, 8 * ve);
    } else
      (s < nx || s > ui(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return t.writeValue(s);
  }
  decode(t) {
    let n = ui(t.readValue(), this.size * 8);
    return this.signed && (n = Md(n, this.size * 8)), n;
  }
}
class ax extends uu {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, t) {
    return super.encode(e, Ue(Oe.dereference(t, "string")));
  }
  decode(e) {
    return Qa(super.decode(e));
  }
}
class wa extends on {
  constructor(t, n) {
    let s = !1;
    const i = [];
    t.forEach((o) => {
      o.dynamic && (s = !0), i.push(o.type);
    });
    const a = "tuple(" + i.join(",") + ")";
    super("tuple", a, n, s);
    y(this, "coders");
    D(this, { coders: Object.freeze(t.slice()) });
  }
  defaultValue() {
    const t = [];
    this.coders.forEach((s) => {
      t.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const a = i.localName;
      return a && (s[a] || (s[a] = 0), s[a]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let a = s.localName;
      !a || n[a] !== 1 || (a === "length" && (a = "_length"), t[a] == null && (t[a] = t[i]));
    }), Object.freeze(t);
  }
  encode(t, n) {
    const s = Oe.dereference(n, "tuple");
    return fu(t, this.coders, s);
  }
  decode(t) {
    return lu(t, this.coders);
  }
}
function sn(r) {
  return ie(Ue(r));
}
var ox = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const af = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), of = 4;
function cx(r) {
  let e = 0;
  function t() {
    return r[e++] << 8 | r[e++];
  }
  let n = t(), s = 1, i = [0, 1];
  for (let O = 1; O < n; O++)
    i.push(s += t());
  let a = t(), o = e;
  e += a;
  let c = 0, f = 0;
  function u() {
    return c == 0 && (f = f << 8 | r[e++], c = 8), f >> --c & 1;
  }
  const d = 31, x = 2 ** d, p = x >>> 1, m = p >> 1, g = x - 1;
  let A = 0;
  for (let O = 0; O < d; O++)
    A = A << 1 | u();
  let E = [], C = 0, T = x;
  for (; ; ) {
    let O = Math.floor(((A - C + 1) * s - 1) / T), R = 0, F = n;
    for (; F - R > 1; ) {
      let H = R + F >>> 1;
      O < i[H] ? F = H : R = H;
    }
    if (R == 0)
      break;
    E.push(R);
    let U = C + Math.floor(T * i[R] / s), _ = C + Math.floor(T * i[R + 1] / s) - 1;
    for (; !((U ^ _) & p); )
      A = A << 1 & g | u(), U = U << 1 & g, _ = _ << 1 & g | 1;
    for (; U & ~_ & m; )
      A = A & p | A << 1 & g >>> 1 | u(), U = U << 1 ^ p, _ = (_ ^ p) << 1 | p | 1;
    C = U, T = 1 + _ - U;
  }
  let M = n - 4;
  return E.map((O) => {
    switch (O - M) {
      case 3:
        return M + 65792 + (r[o++] << 16 | r[o++] << 8 | r[o++]);
      case 2:
        return M + 256 + (r[o++] << 8 | r[o++]);
      case 1:
        return M + r[o++];
      default:
        return O - 1;
    }
  });
}
function fx(r) {
  let e = 0;
  return () => r[e++];
}
function du(r) {
  return fx(cx(lx(r)));
}
function lx(r) {
  let e = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => e[s.charCodeAt(0)] = i);
  let t = r.length, n = new Uint8Array(6 * t >> 3);
  for (let s = 0, i = 0, a = 0, o = 0; s < t; s++)
    o = o << 6 | e[r.charCodeAt(s)], a += 6, a >= 8 && (n[i++] = o >> (a -= 8));
  return n;
}
function ux(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function dx(r, e) {
  let t = Array(r);
  for (let n = 0, s = 0; n < r; n++)
    t[n] = s += ux(e());
  return t;
}
function Ti(r, e = 0) {
  let t = [];
  for (; ; ) {
    let n = r(), s = r();
    if (!s)
      break;
    e += n;
    for (let i = 0; i < s; i++)
      t.push(e + i);
    e += s + 1;
  }
  return t;
}
function hu(r) {
  return Ii(() => {
    let e = Ti(r);
    if (e.length)
      return e;
  });
}
function xu(r) {
  let e = [];
  for (; ; ) {
    let t = r();
    if (t == 0)
      break;
    e.push(hx(t, r));
  }
  for (; ; ) {
    let t = r() - 1;
    if (t < 0)
      break;
    e.push(xx(t, r));
  }
  return e.flat();
}
function Ii(r) {
  let e = [];
  for (; ; ) {
    let t = r(e.length);
    if (!t)
      break;
    e.push(t);
  }
  return e;
}
function bu(r, e, t) {
  let n = Array(r).fill().map(() => []);
  for (let s = 0; s < e; s++)
    dx(r, t).forEach((i, a) => n[a].push(i));
  return n;
}
function hx(r, e) {
  let t = 1 + e(), n = e(), s = Ii(e);
  return bu(s.length, 1 + r, e).flatMap((a, o) => {
    let [c, ...f] = a;
    return Array(s[o]).fill().map((u, d) => {
      let x = d * n;
      return [c + d * t, f.map((p) => p + x)];
    });
  });
}
function xx(r, e) {
  let t = 1 + e();
  return bu(t, 1 + r, e).map((s) => [s[0], s.slice(1)]);
}
function bx(r) {
  let e = [], t = Ti(r);
  return s(n([]), []), e;
  function n(i) {
    let a = r(), o = Ii(() => {
      let c = Ti(r).map((f) => t[f]);
      if (c.length)
        return n(c);
    });
    return { S: a, B: o, Q: i };
  }
  function s({ S: i, B: a }, o, c) {
    if (!(i & 4 && c === o[o.length - 1])) {
      i & 2 && (c = o[o.length - 1]), i & 1 && e.push(o);
      for (let f of a)
        for (let u of f.Q)
          s(f, [...o, u], c);
    }
  }
}
function px(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function pu(r) {
  return `{${px(r)}}`;
}
function gx(r) {
  let e = [];
  for (let t = 0, n = r.length; t < n; ) {
    let s = r.codePointAt(t);
    t += s < 65536 ? 1 : 2, e.push(s);
  }
  return e;
}
function Ys(r) {
  let t = r.length;
  if (t < 4096)
    return String.fromCodePoint(...r);
  let n = [];
  for (let s = 0; s < t; )
    n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
  return n.join("");
}
function yx(r, e) {
  let t = r.length, n = t - e.length;
  for (let s = 0; n == 0 && s < t; s++)
    n = r[s] - e[s];
  return n;
}
var mx = "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";
const Ci = 44032, _a = 4352, za = 4449, Ja = 4519, gu = 19, yu = 21, Xs = 28, ja = yu * Xs, wx = gu * ja, Ax = Ci + wx, Ex = _a + gu, Nx = za + yu, Px = Ja + Xs;
function hi(r) {
  return r >> 24 & 255;
}
function mu(r) {
  return r & 16777215;
}
let ho, cf, xo, Ra;
function Tx() {
  let r = du(mx);
  ho = new Map(hu(r).flatMap((e, t) => e.map((n) => [n, t + 1 << 24]))), cf = new Set(Ti(r)), xo = /* @__PURE__ */ new Map(), Ra = /* @__PURE__ */ new Map();
  for (let [e, t] of xu(r)) {
    if (!cf.has(e) && t.length == 2) {
      let [n, s] = t, i = Ra.get(n);
      i || (i = /* @__PURE__ */ new Map(), Ra.set(n, i)), i.set(s, e);
    }
    xo.set(e, t.reverse());
  }
}
function wu(r) {
  return r >= Ci && r < Ax;
}
function Ix(r, e) {
  if (r >= _a && r < Ex && e >= za && e < Nx)
    return Ci + (r - _a) * ja + (e - za) * Xs;
  if (wu(r) && e > Ja && e < Px && (r - Ci) % Xs == 0)
    return r + (e - Ja);
  {
    let t = Ra.get(r);
    return t && (t = t.get(e), t) ? t : -1;
  }
}
function Au(r) {
  ho || Tx();
  let e = [], t = [], n = !1;
  function s(i) {
    let a = ho.get(i);
    a && (n = !0, i |= a), e.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        e.push(i);
      else if (wu(i)) {
        let a = i - Ci, o = a / ja | 0, c = a % ja / Xs | 0, f = a % Xs;
        s(_a + o), s(za + c), f > 0 && s(Ja + f);
      } else {
        let a = xo.get(i);
        a ? t.push(...a) : s(i);
      }
      if (!t.length)
        break;
      i = t.pop();
    }
  if (n && e.length > 1) {
    let i = hi(e[0]);
    for (let a = 1; a < e.length; a++) {
      let o = hi(e[a]);
      if (o == 0 || i <= o) {
        i = o;
        continue;
      }
      let c = a - 1;
      for (; ; ) {
        let f = e[c + 1];
        if (e[c + 1] = e[c], e[c] = f, !c || (i = hi(e[--c]), i <= o))
          break;
      }
      i = hi(e[a]);
    }
  }
  return e;
}
function Cx(r) {
  let e = [], t = [], n = -1, s = 0;
  for (let i of r) {
    let a = hi(i), o = mu(i);
    if (n == -1)
      a == 0 ? n = o : e.push(o);
    else if (s > 0 && s >= a)
      a == 0 ? (e.push(n, ...t), t.length = 0, n = o) : t.push(o), s = a;
    else {
      let c = Ix(n, o);
      c >= 0 ? n = c : s == 0 && a == 0 ? (e.push(n), n = o) : (t.push(o), s = a);
    }
  }
  return n >= 0 && e.push(n, ...t), e;
}
function Eu(r) {
  return Au(r).map(mu);
}
function kx(r) {
  return Cx(Au(r));
}
const ff = 45, Nu = ".", Pu = 65039, Tu = 1, Wa = (r) => Array.from(r);
function ki(r, e) {
  return r.P.has(e) || r.Q.has(e);
}
class Ox extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let bo, Iu, Wn, po, Cu, $r, M0, Qr, Hn, lf, go;
function tc() {
  if (bo)
    return;
  let r = du(ox);
  const e = () => Ti(r), t = () => new Set(e()), n = (u, d) => d.forEach((x) => u.add(x));
  bo = new Map(xu(r)), Iu = t(), Wn = e(), po = new Set(e().map((u) => Wn[u])), Wn = new Set(Wn), Cu = t(), t();
  let s = hu(r), i = r();
  const a = () => {
    let u = /* @__PURE__ */ new Set();
    return e().forEach((d) => n(u, s[d])), n(u, e()), u;
  };
  $r = Ii((u) => {
    let d = Ii(r).map((x) => x + 96);
    if (d.length) {
      let x = u >= i;
      d[0] -= 32, d = Ys(d), x && (d = `Restricted[${d}]`);
      let p = a(), m = a(), g = !r();
      return { N: d, P: p, Q: m, M: g, R: x };
    }
  }), M0 = t(), Qr = /* @__PURE__ */ new Map();
  let o = e().concat(Wa(M0)).sort((u, d) => u - d);
  o.forEach((u, d) => {
    let x = r(), p = o[d] = x ? o[d - x] : { V: [], M: /* @__PURE__ */ new Map() };
    p.V.push(u), M0.has(u) || Qr.set(u, p);
  });
  for (let { V: u, M: d } of new Set(Qr.values())) {
    let x = [];
    for (let m of u) {
      let g = $r.filter((E) => ki(E, m)), A = x.find(({ G: E }) => g.some((C) => E.has(C)));
      A || (A = { G: /* @__PURE__ */ new Set(), V: [] }, x.push(A)), A.V.push(m), n(A.G, g);
    }
    let p = x.flatMap((m) => Wa(m.G));
    for (let { G: m, V: g } of x) {
      let A = new Set(p.filter((E) => !m.has(E)));
      for (let E of g)
        d.set(E, A);
    }
  }
  Hn = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set();
  const f = (u) => Hn.has(u) ? c.add(u) : Hn.add(u);
  for (let u of $r) {
    for (let d of u.P)
      f(d);
    for (let d of u.Q)
      f(d);
  }
  for (let u of Hn)
    !Qr.has(u) && !c.has(u) && Qr.set(u, Tu);
  n(Hn, Eu(Hn)), lf = bx(r).map((u) => Ox.from(u)).sort(yx), go = /* @__PURE__ */ new Map();
  for (let u of lf) {
    let d = [go];
    for (let x of u) {
      let p = d.map((m) => {
        let g = m.get(x);
        return g || (g = /* @__PURE__ */ new Map(), m.set(x, g)), g;
      });
      x === Pu ? d.push(...p) : d = p;
    }
    for (let x of d)
      x.V = u;
  }
}
function nc(r) {
  return (ku(r) ? "" : `${rc(m0([r]))} `) + pu(r);
}
function rc(r) {
  return `"${r}"‎`;
}
function Rx(r) {
  if (r.length >= 4 && r[2] == ff && r[3] == ff)
    throw new Error(`invalid label extension: "${Ys(r.slice(0, 4))}"`);
}
function Bx(r) {
  for (let t = r.lastIndexOf(95); t > 0; )
    if (r[--t] !== 95)
      throw new Error("underscore allowed only at start");
}
function vx(r) {
  let e = r[0], t = af.get(e);
  if (t)
    throw wi(`leading ${t}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    e = r[i];
    let a = af.get(e);
    if (a) {
      if (s == i)
        throw wi(`${t} + ${a}`);
      s = i + 1, t = a;
    }
  }
  if (s == n)
    throw wi(`trailing ${t}`);
}
function m0(r, e = 1 / 0, t = pu) {
  let n = [];
  Sx(r[0]) && n.push("◌"), r.length > e && (e >>= 1, r = [...r.slice(0, e), 8230, ...r.slice(-e)]);
  let s = 0, i = r.length;
  for (let a = 0; a < i; a++) {
    let o = r[a];
    ku(o) && (n.push(Ys(r.slice(s, a))), n.push(t(o)), s = a + 1);
  }
  return n.push(Ys(r.slice(s, i))), n.join("");
}
function Sx(r) {
  return tc(), Wn.has(r);
}
function ku(r) {
  return tc(), Cu.has(r);
}
function Ux(r) {
  return Mx(Lx(r, kx, Vx));
}
function Lx(r, e, t) {
  if (!r)
    return [];
  tc();
  let n = 0;
  return r.split(Nu).map((s) => {
    let i = gx(s), a = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let o = a.tokens = Hx(i, e, t), c = o.length, f;
      if (!c)
        throw new Error("empty label");
      let u = a.output = o.flat();
      if (Bx(u), !(a.emoji = c > 1 || o[0].is_emoji) && u.every((x) => x < 128))
        Rx(u), f = "ASCII";
      else {
        let x = o.flatMap((p) => p.is_emoji ? [] : p);
        if (!x.length)
          f = "Emoji";
        else {
          if (Wn.has(u[0]))
            throw wi("leading combining mark");
          for (let g = 1; g < c; g++) {
            let A = o[g];
            if (!A.is_emoji && Wn.has(A[0]))
              throw wi(`emoji + combining mark: "${Ys(o[g - 1])} + ${m0([A[0]])}"`);
          }
          vx(u);
          let p = Wa(new Set(x)), [m] = Fx(p);
          Gx(m, x), Dx(m, p), f = m.N;
        }
      }
      a.type = f;
    } catch (o) {
      a.error = o;
    }
    return a;
  });
}
function Dx(r, e) {
  let t, n = [];
  for (let s of e) {
    let i = Qr.get(s);
    if (i === Tu)
      return;
    if (i) {
      let a = i.M.get(s);
      if (t = t ? t.filter((o) => a.has(o)) : Wa(a), !t.length)
        return;
    } else
      n.push(s);
  }
  if (t) {
    for (let s of t)
      if (n.every((i) => ki(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function Fx(r) {
  let e = $r;
  for (let t of r) {
    let n = e.filter((s) => ki(s, t));
    if (!n.length)
      throw $r.some((s) => ki(s, t)) ? Ru(e[0], t) : Ou(t);
    if (e = n, n.length == 1)
      break;
  }
  return e;
}
function Mx(r) {
  return r.map(({ input: e, error: t, output: n }) => {
    if (t) {
      let s = t.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${rc(m0(e, 63))}: ${s}`);
    }
    return Ys(n);
  }).join(Nu);
}
function Ou(r) {
  return new Error(`disallowed character: ${nc(r)}`);
}
function Ru(r, e) {
  let t = nc(e), n = $r.find((s) => s.P.has(e));
  return n && (t = `${n.N} ${t}`), new Error(`illegal mixture: ${r.N} + ${t}`);
}
function wi(r) {
  return new Error(`illegal placement: ${r}`);
}
function Gx(r, e) {
  for (let t of e)
    if (!ki(r, t))
      throw Ru(r, t);
  if (r.M) {
    let t = Eu(e);
    for (let n = 1, s = t.length; n < s; n++)
      if (po.has(t[n])) {
        let i = n + 1;
        for (let a; i < s && po.has(a = t[i]); i++)
          for (let o = n; o < i; o++)
            if (t[o] == a)
              throw new Error(`duplicate non-spacing marks: ${nc(a)}`);
        if (i - n > of)
          throw new Error(`excessive non-spacing marks: ${rc(m0(t.slice(n - 1, i)))} (${i - n}/${of})`);
        n = i;
      }
  }
}
function Hx(r, e, t) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = Qx(r);
    if (i)
      s.length && (n.push(e(s)), s = []), n.push(t(i));
    else {
      let a = r.pop();
      if (Hn.has(a))
        s.push(a);
      else {
        let o = bo.get(a);
        if (o)
          s.push(...o);
        else if (!Iu.has(a))
          throw Ou(a);
      }
    }
  }
  return s.length && n.push(e(s)), n;
}
function Vx(r) {
  return r.filter((e) => e != Pu);
}
function Qx(r, e) {
  let t = go, n, s = r.length;
  for (; s && (t = t.get(r[--s]), !!t); ) {
    let { V: i } = t;
    i && (n = i, r.length = s);
  }
  return n;
}
const Bu = new Uint8Array(32);
Bu.fill(0);
function uf(r) {
  return b(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function vu(r) {
  const e = Ue(Kx(r)), t = [];
  if (r.length === 0)
    return t;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    e[s] === 46 && (t.push(uf(e.slice(n, s))), n = s + 1);
  return b(n < e.length, "invalid ENS name; empty component", "name", r), t.push(uf(e.slice(n))), t;
}
function Kx(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return Ux(r);
  } catch (e) {
    b(!1, `invalid ENS name (${e.message})`, "name", r);
  }
}
function yo(r) {
  b(typeof r == "string", "invalid ENS name; not a string", "name", r), b(r.length, "invalid ENS name (empty label)", "name", r);
  let e = Bu;
  const t = vu(r);
  for (; t.length; )
    e = ie(X([e, ie(t.pop())]));
  return P(e);
}
function _x(r, e) {
  const t = e;
  return b(t <= 255, "DNS encoded label cannot exceed 255", "length", t), P(X(vu(r).map((n) => {
    b(n.length <= t, `label ${JSON.stringify(r)} exceeds ${t} bytes`, "name", r);
    const s = new Uint8Array(n.length + 1);
    return s.set(n, 1), s[0] = s.length - 1, s;
  }))) + "00";
}
function G0(r, e) {
  return {
    address: J(r),
    storageKeys: e.map((t, n) => (b(ee(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
  };
}
function Br(r) {
  if (Array.isArray(r))
    return r.map((t, n) => Array.isArray(t) ? (b(t.length === 2, "invalid slot set", `value[${n}]`, t), G0(t[0], t[1])) : (b(t != null && typeof t == "object", "invalid address-slot set", "value", r), G0(t.address, t.storageKeys)));
  b(r != null && typeof r == "object", "invalid access list", "value", r);
  const e = Object.keys(r).map((t) => {
    const n = r[t].reduce((s, i) => (s[i] = !0, s), {});
    return G0(t, Object.keys(n).sort());
  });
  return e.sort((t, n) => t.address.localeCompare(n.address)), e;
}
function aa(r) {
  let e;
  return typeof r == "string" ? e = Ut.computePublicKey(r, !1) : e = r.publicKey, J(ie("0x" + e.substring(4)).substring(26));
}
function zx(r, e) {
  return aa(Ut.recoverPublicKey(r, e));
}
const xe = BigInt(0), Jx = BigInt(2), jx = BigInt(27), Wx = BigInt(28), Zx = BigInt(35), Yx = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), H0 = 4096 * 32;
function df(r, e) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return t += at(e).substring(4), "0x" + t;
}
function w0(r) {
  return r === "0x" ? null : J(r);
}
function sc(r, e) {
  try {
    return Br(r);
  } catch (t) {
    b(!1, t.message, e, r);
  }
}
function oa(r, e) {
  return r === "0x" ? 0 : K(r, e);
}
function le(r, e) {
  if (r === "0x")
    return xe;
  const t = L(r, e);
  return b(t <= Yx, "value exceeds uint size", e, t), t;
}
function re(r, e) {
  const t = L(r, "value"), n = ke(t);
  return b(n.length <= 32, "value too large", `tx.${e}`, t), n;
}
function ic(r) {
  return Br(r).map((e) => [e.address, e.storageKeys]);
}
function Xx(r, e) {
  b(Array.isArray(r), `invalid ${e}`, "value", r);
  for (let t = 0; t < r.length; t++)
    b(ee(r[t], 32), "invalid ${ param } hash", `value[${t}]`, r[t]);
  return r;
}
function $x(r) {
  const e = x0(r);
  b(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", r);
  const t = {
    type: 0,
    nonce: oa(e[0], "nonce"),
    gasPrice: le(e[1], "gasPrice"),
    gasLimit: le(e[2], "gasLimit"),
    to: w0(e[3]),
    value: le(e[4], "value"),
    data: P(e[5]),
    chainId: xe
  };
  if (e.length === 6)
    return t;
  const n = le(e[6], "v"), s = le(e[7], "r"), i = le(e[8], "s");
  if (s === xe && i === xe)
    t.chainId = n;
  else {
    let a = (n - Zx) / Jx;
    a < xe && (a = xe), t.chainId = a, b(a !== xe || n === jx || n === Wx, "non-canonical legacy v", "v", e[6]), t.signature = gt.from({
      r: Pr(e[7], 32),
      s: Pr(e[8], 32),
      v: n
    });
  }
  return t;
}
function qx(r, e) {
  const t = [
    re(r.nonce, "nonce"),
    re(r.gasPrice || 0, "gasPrice"),
    re(r.gasLimit, "gasLimit"),
    r.to || "0x",
    re(r.value, "value"),
    r.data
  ];
  let n = xe;
  if (r.chainId != xe)
    n = L(r.chainId, "tx.chainId"), b(!e || e.networkV == null || e.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", e);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!e)
    return n !== xe && (t.push(ke(n)), t.push("0x"), t.push("0x")), Tr(t);
  let s = BigInt(27 + e.yParity);
  return n !== xe ? s = gt.getChainIdV(n, e.v) : BigInt(e.v) !== s && b(!1, "tx.chainId/sig.v mismatch", "sig", e), t.push(ke(s)), t.push(ke(e.r)), t.push(ke(e.s)), Tr(t);
}
function ac(r, e) {
  let t;
  try {
    if (t = oa(e[0], "yParity"), t !== 0 && t !== 1)
      throw new Error("bad yParity");
  } catch {
    b(!1, "invalid yParity", "yParity", e[0]);
  }
  const n = Pr(e[1], 32), s = Pr(e[2], 32), i = gt.from({ r: n, s, yParity: t });
  r.signature = i;
}
function e6(r) {
  const e = x0(v(r).slice(1));
  b(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", P(r));
  const t = {
    type: 2,
    chainId: le(e[0], "chainId"),
    nonce: oa(e[1], "nonce"),
    maxPriorityFeePerGas: le(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: le(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: le(e[4], "gasLimit"),
    to: w0(e[5]),
    value: le(e[6], "value"),
    data: P(e[7]),
    accessList: sc(e[8], "accessList")
  };
  return e.length === 9 || ac(t, e.slice(9)), t;
}
function t6(r, e) {
  const t = [
    re(r.chainId, "chainId"),
    re(r.nonce, "nonce"),
    re(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    re(r.maxFeePerGas || 0, "maxFeePerGas"),
    re(r.gasLimit, "gasLimit"),
    r.to || "0x",
    re(r.value, "value"),
    r.data,
    ic(r.accessList || [])
  ];
  return e && (t.push(re(e.yParity, "yParity")), t.push(ke(e.r)), t.push(ke(e.s))), X(["0x02", Tr(t)]);
}
function n6(r) {
  const e = x0(v(r).slice(1));
  b(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", P(r));
  const t = {
    type: 1,
    chainId: le(e[0], "chainId"),
    nonce: oa(e[1], "nonce"),
    gasPrice: le(e[2], "gasPrice"),
    gasLimit: le(e[3], "gasLimit"),
    to: w0(e[4]),
    value: le(e[5], "value"),
    data: P(e[6]),
    accessList: sc(e[7], "accessList")
  };
  return e.length === 8 || ac(t, e.slice(8)), t;
}
function r6(r, e) {
  const t = [
    re(r.chainId, "chainId"),
    re(r.nonce, "nonce"),
    re(r.gasPrice || 0, "gasPrice"),
    re(r.gasLimit, "gasLimit"),
    r.to || "0x",
    re(r.value, "value"),
    r.data,
    ic(r.accessList || [])
  ];
  return e && (t.push(re(e.yParity, "recoveryParam")), t.push(ke(e.r)), t.push(ke(e.s))), X(["0x01", Tr(t)]);
}
function s6(r) {
  let e = x0(v(r).slice(1)), t = "3", n = null;
  if (e.length === 4 && Array.isArray(e[0])) {
    t = "3 (network format)";
    const i = e[1], a = e[2], o = e[3];
    b(Array.isArray(i), "invalid network format: blobs not an array", "fields[1]", i), b(Array.isArray(a), "invalid network format: commitments not an array", "fields[2]", a), b(Array.isArray(o), "invalid network format: proofs not an array", "fields[3]", o), b(i.length === a.length, "invalid network format: blobs/commitments length mismatch", "fields", e), b(i.length === o.length, "invalid network format: blobs/proofs length mismatch", "fields", e), n = [];
    for (let c = 0; c < e[1].length; c++)
      n.push({
        data: i[c],
        commitment: a[c],
        proof: o[c]
      });
    e = e[0];
  }
  b(Array.isArray(e) && (e.length === 11 || e.length === 14), `invalid field count for transaction type: ${t}`, "data", P(r));
  const s = {
    type: 3,
    chainId: le(e[0], "chainId"),
    nonce: oa(e[1], "nonce"),
    maxPriorityFeePerGas: le(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: le(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: le(e[4], "gasLimit"),
    to: w0(e[5]),
    value: le(e[6], "value"),
    data: P(e[7]),
    accessList: sc(e[8], "accessList"),
    maxFeePerBlobGas: le(e[9], "maxFeePerBlobGas"),
    blobVersionedHashes: e[10]
  };
  n && (s.blobs = n), b(s.to != null, `invalid address for transaction type: ${t}`, "data", r), b(Array.isArray(s.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", r);
  for (let i = 0; i < s.blobVersionedHashes.length; i++)
    b(ee(s.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", r);
  return e.length === 11 || ac(s, e.slice(11)), s;
}
function i6(r, e, t) {
  const n = [
    re(r.chainId, "chainId"),
    re(r.nonce, "nonce"),
    re(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    re(r.maxFeePerGas || 0, "maxFeePerGas"),
    re(r.gasLimit, "gasLimit"),
    r.to || Pi,
    re(r.value, "value"),
    r.data,
    ic(r.accessList || []),
    re(r.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    Xx(r.blobVersionedHashes || [], "blobVersionedHashes")
  ];
  return e && (n.push(re(e.yParity, "yParity")), n.push(ke(e.r)), n.push(ke(e.s)), t) ? X([
    "0x03",
    Tr([
      n,
      t.map((s) => s.data),
      t.map((s) => s.commitment),
      t.map((s) => s.proof)
    ])
  ]) : X(["0x03", Tr(n)]);
}
var Pt, us, ds, hs, xs, bs, ps, gs, ys, ms, ws, As, or, wn, _t, An, Es, Ba;
const Mt = class Mt {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    w(this, Es);
    w(this, Pt, void 0);
    w(this, us, void 0);
    w(this, ds, void 0);
    w(this, hs, void 0);
    w(this, xs, void 0);
    w(this, bs, void 0);
    w(this, ps, void 0);
    w(this, gs, void 0);
    w(this, ys, void 0);
    w(this, ms, void 0);
    w(this, ws, void 0);
    w(this, As, void 0);
    w(this, or, void 0);
    w(this, wn, void 0);
    w(this, _t, void 0);
    w(this, An, void 0);
    h(this, Pt, null), h(this, us, null), h(this, hs, 0), h(this, xs, xe), h(this, bs, null), h(this, ps, null), h(this, gs, null), h(this, ds, "0x"), h(this, ys, xe), h(this, ms, xe), h(this, ws, null), h(this, As, null), h(this, or, null), h(this, wn, null), h(this, An, null), h(this, _t, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return l(this, Pt);
  }
  set type(e) {
    switch (e) {
      case null:
        h(this, Pt, null);
        break;
      case 0:
      case "legacy":
        h(this, Pt, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        h(this, Pt, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        h(this, Pt, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        h(this, Pt, 3);
        break;
      default:
        b(!1, "unsupported transaction type", "type", e);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    const e = l(this, us);
    return e == null && this.type === 3 ? Pi : e;
  }
  set to(e) {
    h(this, us, e == null ? null : J(e));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return l(this, hs);
  }
  set nonce(e) {
    h(this, hs, K(e, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return l(this, xs);
  }
  set gasLimit(e) {
    h(this, xs, L(e));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const e = l(this, bs);
    return e == null && (this.type === 0 || this.type === 1) ? xe : e;
  }
  set gasPrice(e) {
    h(this, bs, e == null ? null : L(e, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const e = l(this, ps);
    return e ?? (this.type === 2 || this.type === 3 ? xe : null);
  }
  set maxPriorityFeePerGas(e) {
    h(this, ps, e == null ? null : L(e, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const e = l(this, gs);
    return e ?? (this.type === 2 || this.type === 3 ? xe : null);
  }
  set maxFeePerGas(e) {
    h(this, gs, e == null ? null : L(e, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return l(this, ds);
  }
  set data(e) {
    h(this, ds, P(e));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return l(this, ys);
  }
  set value(e) {
    h(this, ys, L(e, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return l(this, ms);
  }
  set chainId(e) {
    h(this, ms, L(e));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return l(this, ws) || null;
  }
  set signature(e) {
    h(this, ws, e == null ? null : gt.from(e));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const e = l(this, As) || null;
    return e ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(e) {
    h(this, As, e == null ? null : Br(e));
  }
  /**
   *  The max fee per blob gas for Cancun transactions.
   */
  get maxFeePerBlobGas() {
    const e = l(this, or);
    return e == null && this.type === 3 ? xe : e;
  }
  set maxFeePerBlobGas(e) {
    h(this, or, e == null ? null : L(e, "maxFeePerBlobGas"));
  }
  /**
   *  The BLOb versioned hashes for Cancun transactions.
   */
  get blobVersionedHashes() {
    let e = l(this, wn);
    return e == null && this.type === 3 ? [] : e;
  }
  set blobVersionedHashes(e) {
    if (e != null) {
      b(Array.isArray(e), "blobVersionedHashes must be an Array", "value", e), e = e.slice();
      for (let t = 0; t < e.length; t++)
        b(ee(e[t], 32), "invalid blobVersionedHash", `value[${t}]`, e[t]);
    }
    h(this, wn, e);
  }
  /**
   *  The BLObs for the Transaction, if any.
   *
   *  If ``blobs`` is non-``null``, then the [[seriailized]]
   *  will return the network formatted sidecar, otherwise it
   *  will return the standard [[link-eip-2718]] payload. The
   *  [[unsignedSerialized]] is unaffected regardless.
   *
   *  When setting ``blobs``, either fully valid [[Blob]] objects
   *  may be specified (i.e. correctly padded, with correct
   *  committments and proofs) or a raw [[BytesLike]] may
   *  be provided.
   *
   *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
   *  be already set. The blob will be correctly padded and the
   *  [[KzgLibrary]] will be used to compute the committment and
   *  proof for the blob.
   *
   *  A BLOb is a sequence of field elements, each of which must
   *  be within the BLS field modulo, so some additional processing
   *  may be required to encode arbitrary data to ensure each 32 byte
   *  field is within the valid range.
   *
   *  Setting this automatically populates [[blobVersionedHashes]],
   *  overwriting any existing values. Setting this to ``null``
   *  does **not** remove the [[blobVersionedHashes]], leaving them
   *  present.
   */
  get blobs() {
    return l(this, An) == null ? null : l(this, An).map((e) => Object.assign({}, e));
  }
  set blobs(e) {
    if (e == null) {
      h(this, An, null);
      return;
    }
    const t = [], n = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (l0(i)) {
        N(l(this, _t), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
          operation: "set blobs()"
        });
        let a = v(i);
        if (b(a.length <= H0, "blob is too large", `blobs[${s}]`, i), a.length !== H0) {
          const f = new Uint8Array(H0);
          f.set(a), a = f;
        }
        const o = l(this, _t).blobToKzgCommitment(a), c = P(l(this, _t).computeBlobKzgProof(a, o));
        t.push({
          data: P(a),
          commitment: P(o),
          proof: c
        }), n.push(df(1, o));
      } else {
        const a = P(i.commitment);
        t.push({
          data: P(i.data),
          commitment: a,
          proof: P(i.proof)
        }), n.push(df(1, a));
      }
    }
    h(this, An, t), h(this, wn, n);
  }
  get kzg() {
    return l(this, _t);
  }
  set kzg(e) {
    h(this, _t, e);
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : ie(I(this, Es, Ba).call(this, !0, !1));
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return ie(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : zx(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : Ut.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    return I(this, Es, Ba).call(this, !0, !0);
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    return I(this, Es, Ba).call(this, !1, !1);
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    const e = this.inferTypes();
    return e.indexOf(2) >= 0 ? 2 : e.pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const e = this.gasPrice != null, t = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, s = l(this, or) != null || l(this, wn);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && N(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), N(!t || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), N(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const i = [];
    return this.type != null ? i.push(this.type) : t ? i.push(2) : e ? (i.push(1), n || i.push(0)) : n ? (i.push(1), i.push(2)) : (s && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if this transaction is an [[link-eip-4844]] BLOB
   *  transaction.
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return Mt.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const e = (t) => t == null ? null : t.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: e(this.gasLimit),
      gasPrice: e(this.gasPrice),
      maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
      maxFeePerGas: e(this.maxFeePerGas),
      value: e(this.value),
      chainId: e(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(e) {
    if (e == null)
      return new Mt();
    if (typeof e == "string") {
      const n = v(e);
      if (n[0] >= 127)
        return Mt.from($x(n));
      switch (n[0]) {
        case 1:
          return Mt.from(n6(n));
        case 2:
          return Mt.from(e6(n));
        case 3:
          return Mt.from(s6(n));
      }
      N(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const t = new Mt();
    return e.type != null && (t.type = e.type), e.to != null && (t.to = e.to), e.nonce != null && (t.nonce = e.nonce), e.gasLimit != null && (t.gasLimit = e.gasLimit), e.gasPrice != null && (t.gasPrice = e.gasPrice), e.maxPriorityFeePerGas != null && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas), e.maxFeePerGas != null && (t.maxFeePerGas = e.maxFeePerGas), e.maxFeePerBlobGas != null && (t.maxFeePerBlobGas = e.maxFeePerBlobGas), e.data != null && (t.data = e.data), e.value != null && (t.value = e.value), e.chainId != null && (t.chainId = e.chainId), e.signature != null && (t.signature = gt.from(e.signature)), e.accessList != null && (t.accessList = e.accessList), e.blobVersionedHashes != null && (t.blobVersionedHashes = e.blobVersionedHashes), e.kzg != null && (t.kzg = e.kzg), e.blobs != null && (t.blobs = e.blobs), e.hash != null && (b(t.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), b(t.hash === e.hash, "hash mismatch", "tx", e)), e.from != null && (b(t.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), b(t.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), t;
  }
};
Pt = new WeakMap(), us = new WeakMap(), ds = new WeakMap(), hs = new WeakMap(), xs = new WeakMap(), bs = new WeakMap(), ps = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), ms = new WeakMap(), ws = new WeakMap(), As = new WeakMap(), or = new WeakMap(), wn = new WeakMap(), _t = new WeakMap(), An = new WeakMap(), Es = new WeakSet(), Ba = function(e, t) {
  N(!e || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const n = e ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return qx(this, n);
    case 1:
      return r6(this, n);
    case 2:
      return t6(this, n);
    case 3:
      return i6(this, n, t ? this.blobs : null);
  }
  N(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let Oi = Mt;
function a6(r) {
  return typeof r == "string" && (r = Ue(r)), ie(X([
    Ue(Vh),
    Ue(String(r.length)),
    r
  ]));
}
const Su = new Uint8Array(32);
Su.fill(0);
const o6 = BigInt(-1), Uu = BigInt(0), Lu = BigInt(1), c6 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function f6(r) {
  const e = v(r), t = e.length % 32;
  return t ? X([e, Su.slice(t)]) : P(e);
}
const l6 = nn(Lu, 32), u6 = nn(Uu, 32), hf = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, V0 = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function xf(r) {
  return function(e) {
    return b(typeof e == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, e), e;
  };
}
const d6 = {
  name: xf("name"),
  version: xf("version"),
  chainId: function(r) {
    const e = L(r, "domain.chainId");
    return b(e >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(e) ? Number(e) : jr(e);
  },
  verifyingContract: function(r) {
    try {
      return J(r).toLowerCase();
    } catch {
    }
    b(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const e = v(r, "domain.salt");
    return b(e.length === 32, 'invalid domain value "salt"', "domain.salt", r), P(e);
  }
};
function Q0(r) {
  {
    const e = r.match(/^(u?)int(\d+)$/);
    if (e) {
      const t = e[1] === "", n = parseInt(e[2]);
      b(n % 8 === 0 && n !== 0 && n <= 256 && e[2] === String(n), "invalid numeric width", "type", r);
      const s = ui(c6, t ? n - 1 : n), i = t ? (s + Lu) * o6 : Uu;
      return function(a) {
        const o = L(a, "value");
        return b(o >= i && o <= s, `value out-of-bounds for ${r}`, "value", o), nn(t ? el(o, 256) : o, 32);
      };
    }
  }
  {
    const e = r.match(/^bytes(\d+)$/);
    if (e) {
      const t = parseInt(e[1]);
      return b(t !== 0 && t <= 32 && e[1] === String(t), "invalid bytes width", "type", r), function(n) {
        const s = v(n);
        return b(s.length === t, `invalid length for ${r}`, "value", n), f6(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(e) {
        return Pr(J(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? l6 : u6;
      };
    case "bytes":
      return function(e) {
        return ie(e);
      };
    case "string":
      return function(e) {
        return sn(e);
      };
  }
  return null;
}
function bf(r, e) {
  return `${r}(${e.map(({ name: t, type: n }) => n + " " + t).join(",")})`;
}
function Aa(r) {
  const e = r.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return e ? {
    base: e[1],
    index: e[2] + e[4],
    array: {
      base: e[1],
      prefix: e[1] + e[2],
      count: e[5] ? parseInt(e[5]) : -1
    }
  } : { base: r };
}
var Vi, zt, Ns, s0, Du;
const $e = class $e {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(e) {
    w(this, s0);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    y(this, "primaryType");
    w(this, Vi, void 0);
    w(this, zt, void 0);
    w(this, Ns, void 0);
    h(this, zt, /* @__PURE__ */ new Map()), h(this, Ns, /* @__PURE__ */ new Map());
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {};
    Object.keys(e).forEach((c) => {
      i[c] = e[c].map(({ name: f, type: u }) => {
        let { base: d, index: x } = Aa(u);
        return d === "int" && !e.int && (d = "int256"), d === "uint" && !e.uint && (d = "uint256"), { name: f, type: d + (x || "") };
      }), t.set(c, /* @__PURE__ */ new Set()), n.set(c, []), s.set(c, /* @__PURE__ */ new Set());
    }), h(this, Vi, JSON.stringify(i));
    for (const c in i) {
      const f = /* @__PURE__ */ new Set();
      for (const u of i[c]) {
        b(!f.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(c)}`, "types", e), f.add(u.name);
        const d = Aa(u.type).base;
        b(d !== c, `circular type reference to ${JSON.stringify(d)}`, "types", e), !Q0(d) && (b(n.has(d), `unknown type ${JSON.stringify(d)}`, "types", e), n.get(d).push(c), t.get(c).add(d));
      }
    }
    const a = Array.from(n.keys()).filter((c) => n.get(c).length === 0);
    b(a.length !== 0, "missing primary type", "types", e), b(a.length === 1, `ambiguous primary types or unused types: ${a.map((c) => JSON.stringify(c)).join(", ")}`, "types", e), D(this, { primaryType: a[0] });
    function o(c, f) {
      b(!f.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", e), f.add(c);
      for (const u of t.get(c))
        if (n.has(u)) {
          o(u, f);
          for (const d of f)
            s.get(d).add(u);
        }
      f.delete(c);
    }
    o(this.primaryType, /* @__PURE__ */ new Set());
    for (const [c, f] of s) {
      const u = Array.from(f);
      u.sort(), l(this, zt).set(c, bf(c, i[c]) + u.map((d) => bf(d, i[d])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(l(this, Vi));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(e) {
    let t = l(this, Ns).get(e);
    return t || (t = I(this, s0, Du).call(this, e), l(this, Ns).set(e, t)), t;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(e) {
    const t = l(this, zt).get(e);
    return b(t, `unknown type: ${JSON.stringify(e)}`, "name", e), t;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(e, t) {
    return this.getEncoder(e)(t);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(e, t) {
    return ie(this.encodeData(e, t));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  /**
   *  @_ignore:
   */
  _visit(e, t, n) {
    if (Q0(e))
      return n(e, t);
    const s = Aa(e).array;
    if (s)
      return b(s.count === -1 || s.count === t.length, `array length mismatch; expected length ${s.count}`, "value", t), t.map((a) => this._visit(s.prefix, a, n));
    const i = this.types[e];
    if (i)
      return i.reduce((a, { name: o, type: c }) => (a[o] = this._visit(c, t[o], n), a), {});
    b(!1, `unknown type: ${e}`, "type", e);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(e, t) {
    return this._visit(this.primaryType, e, t);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(e) {
    return new $e(e);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(e) {
    return $e.from(e).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(e, t, n) {
    return $e.from(t).hashStruct(e, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(e) {
    const t = [];
    for (const n in e) {
      if (e[n] == null)
        continue;
      const s = hf[n];
      b(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), t.push({ name: n, type: s });
    }
    return t.sort((n, s) => V0.indexOf(n.name) - V0.indexOf(s.name)), $e.hashStruct("EIP712Domain", { EIP712Domain: t }, e);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(e, t, n) {
    return X([
      "0x1901",
      $e.hashDomain(e),
      $e.from(t).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(e, t, n) {
    return ie($e.encode(e, t, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(e, t, n, s) {
    e = Object.assign({}, e);
    for (const o in e)
      e[o] == null && delete e[o];
    const i = {};
    e.verifyingContract && !ee(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
    const a = $e.from(t);
    a.visit(n, (o, c) => (o === "address" && !ee(c, 20) && (i[c] = "0x"), c));
    for (const o in i)
      i[o] = await s(o);
    return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), n = a.visit(n, (o, c) => o === "address" && i[c] ? i[c] : c), { domain: e, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(e, t, n) {
    $e.hashDomain(e);
    const s = {}, i = [];
    V0.forEach((c) => {
      const f = e[c];
      f != null && (s[c] = d6[c](f), i.push({ name: c, type: hf[c] }));
    });
    const a = $e.from(t);
    t = a.types;
    const o = Object.assign({}, t);
    return b(o.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", t), o.EIP712Domain = i, a.encode(n), {
      types: o,
      domain: s,
      primaryType: a.primaryType,
      message: a.visit(n, (c, f) => {
        if (c.match(/^bytes(\d*)/))
          return P(v(f));
        if (c.match(/^u?int/))
          return L(f).toString();
        switch (c) {
          case "address":
            return f.toLowerCase();
          case "bool":
            return !!f;
          case "string":
            return b(typeof f == "string", "invalid string", "value", f), f;
        }
        b(!1, "unsupported type", "type", c);
      })
    };
  }
};
Vi = new WeakMap(), zt = new WeakMap(), Ns = new WeakMap(), s0 = new WeakSet(), Du = function(e) {
  {
    const s = Q0(e);
    if (s)
      return s;
  }
  const t = Aa(e).array;
  if (t) {
    const s = t.prefix, i = this.getEncoder(s);
    return (a) => {
      b(t.count === -1 || t.count === a.length, `array length mismatch; expected length ${t.count}`, "value", a);
      let o = a.map(i);
      return l(this, zt).has(s) && (o = o.map(ie)), ie(X(o));
    };
  }
  const n = this.types[e];
  if (n) {
    const s = sn(l(this, zt).get(e));
    return (i) => {
      const a = n.map(({ name: o, type: c }) => {
        const f = this.getEncoder(c)(i[o]);
        return l(this, zt).has(c) ? ie(f) : f;
      });
      return a.unshift(s), X(a);
    };
  }
  b(!1, `unknown type: ${e}`, "type", e);
};
let $s = $e;
function Se(r) {
  const e = /* @__PURE__ */ new Set();
  return r.forEach((t) => e.add(t)), Object.freeze(e);
}
const h6 = "external public payable override", x6 = Se(h6.split(" ")), Fu = "constant external internal payable private public pure view override", b6 = Se(Fu.split(" ")), Mu = "constructor error event fallback function receive struct", Gu = Se(Mu.split(" ")), Hu = "calldata memory storage payable indexed", p6 = Se(Hu.split(" ")), g6 = "tuple returns", y6 = [Mu, Hu, g6, Fu].join(" "), m6 = Se(y6.split(" ")), w6 = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, A6 = new RegExp("^(\\s*)"), E6 = new RegExp("^([0-9]+)"), N6 = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), Vu = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Qu = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var ge, xt, Qi, mo;
const i0 = class i0 {
  constructor(e) {
    w(this, Qi);
    w(this, ge, void 0);
    w(this, xt, void 0);
    h(this, ge, 0), h(this, xt, e.slice());
  }
  get offset() {
    return l(this, ge);
  }
  get length() {
    return l(this, xt).length - l(this, ge);
  }
  clone() {
    return new i0(l(this, xt));
  }
  reset() {
    h(this, ge, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(e) {
    const t = this.peek();
    if (t.type !== "KEYWORD" || !e.has(t.text))
      throw new Error(`expected keyword ${t.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(e) {
    if (this.peek().type !== e) {
      const t = this.peek();
      throw new Error(`expected ${e}; got ${t.type} ${JSON.stringify(t.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = I(this, Qi, mo).call(this, l(this, ge) + 1, e.match + 1);
    return h(this, ge, e.match + 1), t;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const t = [];
    for (; l(this, ge) < e.match - 1; ) {
      const n = this.peek().linkNext;
      t.push(I(this, Qi, mo).call(this, l(this, ge) + 1, n)), h(this, ge, n);
    }
    return h(this, ge, e.match + 1), t;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (l(this, ge) >= l(this, xt).length)
      throw new Error("out-of-bounds");
    return l(this, xt)[l(this, ge)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(e) {
    const t = this.peekType("KEYWORD");
    return t != null && e.has(t) ? t : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(e) {
    if (this.length === 0)
      return null;
    const t = this.peek();
    return t.type === e ? t.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const e = this.peek();
    return Dr(this, ge)._++, e;
  }
  toString() {
    const e = [];
    for (let t = l(this, ge); t < l(this, xt).length; t++) {
      const n = l(this, xt)[t];
      e.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${e.join(" ")}>`;
  }
};
ge = new WeakMap(), xt = new WeakMap(), Qi = new WeakSet(), mo = function(e = 0, t = 0) {
  return new i0(l(this, xt).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - e,
    linkBack: n.linkBack - e,
    linkNext: n.linkNext - e
  }))));
};
let yt = i0;
function Mn(r) {
  const e = [], t = (a) => {
    const o = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${o} at ${i}: ${a}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let a = r.substring(i), o = a.match(A6);
    o && (i += o[1].length, a = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    e.push(c);
    let f = w6[a[0]] || "";
    if (f) {
      if (c.type = f, c.text = a[0], i++, f === "OPEN_PAREN")
        n.push(e.length - 1), s.push(e.length - 1);
      else if (f == "CLOSE_PAREN")
        n.length === 0 && t("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
      else if (f === "COMMA")
        c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
      else if (f === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (f === "CLOSE_BRACKET") {
        let u = e.pop().text;
        if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
          const d = e.pop().text;
          u = d + u, e[e.length - 1].value = K(d);
        }
        if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        e[e.length - 1].text += u;
      }
      continue;
    }
    if (o = a.match(N6), o) {
      if (c.text = o[1], i += c.text.length, m6.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Qu)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (o = a.match(E6), o) {
      c.text = o[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`);
  }
  return new yt(e.map((a) => Object.freeze(a)));
}
function pf(r, e) {
  let t = [];
  for (const n in e.keys())
    r.has(n) && t.push(n);
  if (t.length > 1)
    throw new Error(`conflicting types: ${t.join(", ")}`);
}
function A0(r, e) {
  if (e.peekKeyword(Gu)) {
    const t = e.pop().text;
    if (t !== r)
      throw new Error(`expected ${r}, got ${t}`);
  }
  return e.popType("ID");
}
function an(r, e) {
  const t = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || e && !e.has(n))
      break;
    if (r.pop(), t.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    t.add(n);
  }
  return Object.freeze(t);
}
function Ku(r) {
  let e = an(r, b6);
  return pf(e, Se("constant payable nonpayable".split(" "))), pf(e, Se("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
}
function tn(r, e) {
  return r.popParams().map((t) => Ae.from(t, e));
}
function _u(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return L(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Ir(r) {
  if (r.length)
    throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
}
const P6 = new RegExp(/^(.*)\[([0-9]*)\]$/);
function gf(r) {
  const e = r.match(Qu);
  if (b(e, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (e[2]) {
    const t = parseInt(e[2]);
    b(t !== 0 && t <= 32, "invalid bytes length", "type", r);
  } else if (e[3]) {
    const t = parseInt(e[3]);
    b(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const se = {}, Ge = Symbol.for("_ethers_internal"), yf = "_ParamTypeInternal", mf = "_ErrorInternal", wf = "_EventInternal", Af = "_ConstructorInternal", Ef = "_FallbackInternal", Nf = "_FunctionInternal", Pf = "_StructInternal";
var Ps, va;
const qe = class qe {
  /**
   *  @private
   */
  constructor(e, t, n, s, i, a, o, c) {
    w(this, Ps);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    y(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    y(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    y(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    y(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    y(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    y(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    y(this, "arrayChildren");
    if (Rr(e, se, "ParamType"), Object.defineProperty(this, Ge, { value: yf }), a && (a = Object.freeze(a.slice())), s === "array") {
      if (o == null || c == null)
        throw new Error("");
    } else if (o != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (a == null)
        throw new Error("");
    } else if (a != null)
      throw new Error("");
    D(this, {
      name: t,
      type: n,
      baseType: s,
      indexed: i,
      components: a,
      arrayLength: o,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(s);
    }
    let t = "";
    return this.isArray() ? (t += this.arrayChildren.format(e), t += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? t += "(" + this.components.map((n) => n.format(e)).join(e === "full" ? ", " : ",") + ")" : t += this.type, e !== "sighash" && (this.indexed === !0 && (t += " indexed"), e === "full" && this.name && (t += " " + this.name)), t;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(e, t) {
    if (this.isArray()) {
      if (!Array.isArray(e))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s) => n.arrayChildren.walk(s, t));
    }
    if (this.isTuple()) {
      if (!Array.isArray(e))
        throw new Error("invalid tuple value");
      if (e.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s, i) => n.components[i].walk(s, t));
    }
    return t(this.type, e);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(e, t) {
    const n = [], s = [e];
    return I(this, Ps, va).call(this, n, e, t, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(e, t) {
    if (qe.isParamType(e))
      return e;
    if (typeof e == "string")
      try {
        return qe.from(Mn(e), t);
      } catch {
        b(!1, "invalid param type", "obj", e);
      }
    else if (e instanceof yt) {
      let o = "", c = "", f = null;
      an(e, Se(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", f = e.popParams().map((g) => qe.from(g)), o = `tuple(${f.map((g) => g.format()).join(",")})`) : (o = gf(e.popType("TYPE")), c = o);
      let u = null, d = null;
      for (; e.length && e.peekType("BRACKET"); ) {
        const g = e.pop();
        u = new qe(se, "", o, c, null, f, d, u), d = g.value, o += g.text, c = "array", f = null;
      }
      let x = null;
      if (an(e, p6).has("indexed")) {
        if (!t)
          throw new Error("");
        x = !0;
      }
      const m = e.peekType("ID") ? e.pop().text : "";
      if (e.length)
        throw new Error("leftover tokens");
      return new qe(se, m, o, c, x, f, d, u);
    }
    const n = e.name;
    b(!n || typeof n == "string" && n.match(Vu), "invalid name", "obj.name", n);
    let s = e.indexed;
    s != null && (b(t, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
    let i = e.type, a = i.match(P6);
    if (a) {
      const o = parseInt(a[2] || "-1"), c = qe.from({
        type: a[1],
        components: e.components
      });
      return new qe(se, n || "", i, "array", s, null, o, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const o = e.components != null ? e.components.map((f) => qe.from(f)) : null;
      return new qe(se, n || "", i, "tuple", s, o, null, null);
    }
    return i = gf(e.type), new qe(se, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(e) {
    return e && e[Ge] === yf;
  }
};
Ps = new WeakSet(), va = function(e, t, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(t))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && t.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const a = this.arrayChildren, o = t.slice();
    o.forEach((c, f) => {
      var u;
      I(u = a, Ps, va).call(u, e, c, n, (d) => {
        o[f] = d;
      });
    }), s(o);
    return;
  }
  if (this.isTuple()) {
    const a = this.components;
    let o;
    if (Array.isArray(t))
      o = t.slice();
    else {
      if (t == null || typeof t != "object")
        throw new Error("invalid tuple value");
      o = a.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in t))
          throw new Error(`missing value for component ${c.name}`);
        return t[c.name];
      });
    }
    if (o.length !== this.components.length)
      throw new Error("array is wrong length");
    o.forEach((c, f) => {
      var u;
      I(u = a[f], Ps, va).call(u, e, c, n, (d) => {
        o[f] = d;
      });
    }), s(o);
    return;
  }
  const i = n(this.type, t);
  i.then ? e.push(async function() {
    s(await i);
  }()) : s(i);
};
let Ae = qe;
class Cr {
  /**
   *  @private
   */
  constructor(e, t, n) {
    /**
     *  The type of the fragment.
     */
    y(this, "type");
    /**
     *  The inputs for the fragment.
     */
    y(this, "inputs");
    Rr(e, se, "Fragment"), n = Object.freeze(n.slice()), D(this, { type: t, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(e) {
    if (typeof e == "string") {
      try {
        Cr.from(JSON.parse(e));
      } catch {
      }
      return Cr.from(Mn(e));
    }
    if (e instanceof yt)
      switch (e.peekKeyword(Gu)) {
        case "constructor":
          return qt.from(e);
        case "error":
          return Me.from(e);
        case "event":
          return Bt.from(e);
        case "fallback":
        case "receive":
          return Gt.from(e);
        case "function":
          return vt.from(e);
        case "struct":
          return Er.from(e);
      }
    else if (typeof e == "object") {
      switch (e.type) {
        case "constructor":
          return qt.from(e);
        case "error":
          return Me.from(e);
        case "event":
          return Bt.from(e);
        case "fallback":
        case "receive":
          return Gt.from(e);
        case "function":
          return vt.from(e);
        case "struct":
          return Er.from(e);
      }
      N(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    b(!1, "unsupported frgament object", "obj", e);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(e) {
    return qt.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(e) {
    return Me.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(e) {
    return Bt.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(e) {
    return vt.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(e) {
    return Er.isFragment(e);
  }
}
class E0 extends Cr {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, n, i);
    /**
     *  The name of the fragment.
     */
    y(this, "name");
    b(typeof s == "string" && s.match(Vu), "invalid identifier", "name", s), i = Object.freeze(i.slice()), D(this, { name: s });
  }
}
function Ri(r, e) {
  return "(" + e.map((t) => t.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class Me extends E0 {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "error", t, n), Object.defineProperty(this, Ge, { value: mf });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return sn(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    const t = [];
    return e !== "sighash" && t.push("error"), t.push(this.name + Ri(e, this.inputs)), t.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(e) {
    if (Me.isFragment(e))
      return e;
    if (typeof e == "string")
      return Me.from(Mn(e));
    if (e instanceof yt) {
      const t = A0("error", e), n = tn(e);
      return Ir(e), new Me(se, t, n);
    }
    return new Me(se, e.name, e.inputs ? e.inputs.map(Ae.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(e) {
    return e && e[Ge] === mf;
  }
}
class Bt extends E0 {
  /**
   *  @private
   */
  constructor(t, n, s, i) {
    super(t, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    y(this, "anonymous");
    Object.defineProperty(this, Ge, { value: wf }), D(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return sn(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("event"), n.push(this.name + Ri(t, this.inputs)), t !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(t, n) {
    return n = (n || []).map((i) => Ae.from(i)), new Bt(se, t, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(t) {
    if (Bt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return Bt.from(Mn(t));
      } catch {
        b(!1, "invalid event fragment", "obj", t);
      }
    else if (t instanceof yt) {
      const n = A0("event", t), s = tn(t, !0), i = !!an(t, Se(["anonymous"])).has("anonymous");
      return Ir(t), new Bt(se, n, s, i);
    }
    return new Bt(se, t.name, t.inputs ? t.inputs.map((n) => Ae.from(n, !0)) : [], !!t.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(t) {
    return t && t[Ge] === wf;
  }
}
class qt extends Cr {
  /**
   *  @private
   */
  constructor(t, n, s, i, a) {
    super(t, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    y(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    y(this, "gas");
    Object.defineProperty(this, Ge, { value: Af }), D(this, { payable: i, gas: a });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(t) {
    if (N(t != null && t !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), t === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [`constructor${Ri(t, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(t) {
    if (qt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return qt.from(Mn(t));
      } catch {
        b(!1, "invalid constuctor fragment", "obj", t);
      }
    else if (t instanceof yt) {
      an(t, Se(["constructor"]));
      const n = tn(t), s = !!an(t, x6).has("payable"), i = _u(t);
      return Ir(t), new qt(se, "constructor", n, s, i);
    }
    return new qt(se, "constructor", t.inputs ? t.inputs.map(Ae.from) : [], !!t.payable, t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(t) {
    return t && t[Ge] === Af;
  }
}
class Gt extends Cr {
  constructor(t, n, s) {
    super(t, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    y(this, "payable");
    Object.defineProperty(this, Ge, { value: Ef }), D(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(t) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (t === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(t) {
    if (Gt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return Gt.from(Mn(t));
      } catch {
        b(!1, "invalid fallback fragment", "obj", t);
      }
    else if (t instanceof yt) {
      const n = t.toString(), s = t.peekKeyword(Se(["fallback", "receive"]));
      if (b(s, "type must be fallback or receive", "obj", n), t.popKeyword(Se(["fallback", "receive"])) === "receive") {
        const c = tn(t);
        return b(c.length === 0, "receive cannot have arguments", "obj.inputs", c), an(t, Se(["payable"])), Ir(t), new Gt(se, [], !0);
      }
      let a = tn(t);
      a.length ? b(a.length === 1 && a[0].type === "bytes", "invalid fallback inputs", "obj.inputs", a.map((c) => c.format("minimal")).join(", ")) : a = [Ae.from("bytes")];
      const o = Ku(t);
      if (b(o === "nonpayable" || o === "payable", "fallback cannot be constants", "obj.stateMutability", o), an(t, Se(["returns"])).has("returns")) {
        const c = tn(t);
        b(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((f) => f.format("minimal")).join(", "));
      }
      return Ir(t), new Gt(se, a, o === "payable");
    }
    if (t.type === "receive")
      return new Gt(se, [], !0);
    if (t.type === "fallback") {
      const n = [Ae.from("bytes")], s = t.stateMutability === "payable";
      return new Gt(se, n, s);
    }
    b(!1, "invalid fallback description", "obj", t);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(t) {
    return t && t[Ge] === Ef;
  }
}
class vt extends E0 {
  /**
   *  @private
   */
  constructor(t, n, s, i, a, o) {
    super(t, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    y(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    y(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    y(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    y(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    y(this, "gas");
    Object.defineProperty(this, Ge, { value: Nf }), a = Object.freeze(a.slice()), D(this, { constant: s === "view" || s === "pure", gas: o, outputs: a, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return sn(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(t))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(t)))
      });
    const n = [];
    return t !== "sighash" && n.push("function"), n.push(this.name + Ri(t, this.inputs)), t !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(Ri(t, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(t, n) {
    return n = (n || []).map((i) => Ae.from(i)), new vt(se, t, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(t) {
    if (vt.isFragment(t))
      return t;
    if (typeof t == "string")
      try {
        return vt.from(Mn(t));
      } catch {
        b(!1, "invalid function fragment", "obj", t);
      }
    else if (t instanceof yt) {
      const s = A0("function", t), i = tn(t), a = Ku(t);
      let o = [];
      an(t, Se(["returns"])).has("returns") && (o = tn(t));
      const c = _u(t);
      return Ir(t), new vt(se, s, a, i, o, c);
    }
    let n = t.stateMutability;
    return n == null && (n = "payable", typeof t.constant == "boolean" ? (n = "view", t.constant || (n = "payable", typeof t.payable == "boolean" && !t.payable && (n = "nonpayable"))) : typeof t.payable == "boolean" && !t.payable && (n = "nonpayable")), new vt(se, t.name, n, t.inputs ? t.inputs.map(Ae.from) : [], t.outputs ? t.outputs.map(Ae.from) : [], t.gas != null ? t.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(t) {
    return t && t[Ge] === Nf;
  }
}
class Er extends E0 {
  /**
   *  @private
   */
  constructor(e, t, n) {
    super(e, "struct", t, n), Object.defineProperty(this, Ge, { value: Pf });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(e) {
    if (typeof e == "string")
      try {
        return Er.from(Mn(e));
      } catch {
        b(!1, "invalid struct fragment", "obj", e);
      }
    else if (e instanceof yt) {
      const t = A0("struct", e), n = tn(e);
      return Ir(e), new Er(se, t, n);
    }
    return new Er(se, e.name, e.inputs ? e.inputs.map(Ae.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(e) {
    return e && e[Ge] === Pf;
  }
}
const mt = /* @__PURE__ */ new Map();
mt.set(0, "GENERIC_PANIC");
mt.set(1, "ASSERT_FALSE");
mt.set(17, "OVERFLOW");
mt.set(18, "DIVIDE_BY_ZERO");
mt.set(33, "ENUM_RANGE_ERROR");
mt.set(34, "BAD_STORAGE_DATA");
mt.set(49, "STACK_UNDERFLOW");
mt.set(50, "ARRAY_RANGE_ERROR");
mt.set(65, "OUT_OF_MEMORY");
mt.set(81, "UNINITIALIZED_FUNCTION_CALL");
const T6 = new RegExp(/^bytes([0-9]*)$/), I6 = new RegExp(/^(u?int)([0-9]*)$/);
let K0 = null, Tf = 1024;
function C6(r, e, t, n) {
  let s = "missing revert data", i = null;
  const a = null;
  let o = null;
  if (t) {
    s = "execution reverted";
    const f = v(t);
    if (t = P(t), f.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (f.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (P(f.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], f.slice(4))[0], o = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (P(f.slice(0, 4)) === "0x4e487b71")
      try {
        const u = Number(n.decode(["uint256"], f.slice(4))[0]);
        o = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [u]
        }, i = `Panic due to ${mt.get(u) || "UNKNOWN"}(${u})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: e.to ? J(e.to) : null,
    data: e.data || "0x"
  };
  return e.from && (c.from = J(e.from)), ue(s, "CALL_EXCEPTION", {
    action: r,
    data: t,
    reason: i,
    transaction: c,
    invocation: a,
    revert: o
  });
}
var En, Kr;
const a0 = class a0 {
  constructor() {
    w(this, En);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(e) {
    const t = e.map((s) => I(this, En, Kr).call(this, Ae.from(s)));
    return new wa(t, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(e, t) {
    Yf(t.length, e.length, "types/values length mismatch");
    const n = e.map((a) => I(this, En, Kr).call(this, Ae.from(a))), s = new wa(n, "_"), i = new so();
    return s.encode(i, t), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(e, t, n) {
    const s = e.map((a) => I(this, En, Kr).call(this, Ae.from(a)));
    return new wa(s, "_").decode(new io(t, n, Tf));
  }
  static _setDefaultMaxInflation(e) {
    b(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), Tf = e;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return K0 == null && (K0 = new a0()), K0;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(e, t, n) {
    return C6(e, t, n, a0.defaultAbiCoder());
  }
};
En = new WeakSet(), Kr = function(e) {
  if (e.isArray())
    return new Yh(I(this, En, Kr).call(this, e.arrayChildren), e.arrayLength, e.name);
  if (e.isTuple())
    return new wa(e.components.map((n) => I(this, En, Kr).call(this, n)), e.name);
  switch (e.baseType) {
    case "address":
      return new Wh(e.name);
    case "bool":
      return new Xh(e.name);
    case "string":
      return new ax(e.name);
    case "bytes":
      return new $h(e.name);
    case "":
      return new tx(e.name);
  }
  let t = e.type.match(I6);
  if (t) {
    let n = parseInt(t[2] || "256");
    return b(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new ix(n / 8, t[1] === "int", e.name);
  }
  if (t = e.type.match(T6), t) {
    let n = parseInt(t[1]);
    return b(n !== 0 && n <= 32, "invalid bytes length", "param", e), new qh(n, e.name);
  }
  b(!1, "invalid type", "type", e.type);
};
let Bi = a0;
class k6 {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    y(this, "fragment");
    /**
     *  The name of the Event.
     */
    y(this, "name");
    /**
     *  The full Event signature.
     */
    y(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    y(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    y(this, "args");
    const s = e.name, i = e.format();
    D(this, {
      fragment: e,
      name: s,
      signature: i,
      topic: t,
      args: n
    });
  }
}
class O6 {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    y(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    y(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    y(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    y(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    y(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    y(this, "value");
    const i = e.name, a = e.format();
    D(this, {
      fragment: e,
      name: i,
      args: n,
      signature: a,
      selector: t,
      value: s
    });
  }
}
class R6 {
  /**
   *  @_ignore:
   */
  constructor(e, t, n) {
    /**
     *  The matching fragment.
     */
    y(this, "fragment");
    /**
     *  The name of the Error.
     */
    y(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    y(this, "args");
    /**
     *  The full Error signature.
     */
    y(this, "signature");
    /**
     *  The selector for the Error.
     */
    y(this, "selector");
    const s = e.name, i = e.format();
    D(this, {
      fragment: e,
      name: s,
      args: n,
      signature: i,
      selector: t
    });
  }
}
class If {
  /**
   *  @_ignore:
   */
  constructor(e) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    y(this, "hash");
    /**
     *  @_ignore:
     */
    y(this, "_isIndexed");
    D(this, { hash: e, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const Cf = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, kf = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let e = "unknown panic code";
      return r >= 0 && r <= 255 && Cf[r.toString()] && (e = Cf[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${e})`;
    }
  }
};
var Tt, It, Ct, Ne, Ts, Sa, Is, Ua;
const zn = class zn {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(e) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    w(this, Ts);
    // Find an event definition by any means necessary (unless it is ambiguous)
    w(this, Is);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    y(this, "fragments");
    /**
     *  The Contract constructor.
     */
    y(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    y(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    y(this, "receive");
    w(this, Tt, void 0);
    w(this, It, void 0);
    w(this, Ct, void 0);
    //    #structs: Map<string, StructFragment>;
    w(this, Ne, void 0);
    let t = [];
    typeof e == "string" ? t = JSON.parse(e) : t = e, h(this, Ct, /* @__PURE__ */ new Map()), h(this, Tt, /* @__PURE__ */ new Map()), h(this, It, /* @__PURE__ */ new Map());
    const n = [];
    for (const a of t)
      try {
        n.push(Cr.from(a));
      } catch (o) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, o.message);
      }
    D(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    h(this, Ne, this.getAbiCoder()), this.fragments.forEach((a, o) => {
      let c;
      switch (a.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          D(this, { deploy: a });
          return;
        case "fallback":
          a.inputs.length === 0 ? i = !0 : (b(!s || a.payable !== s.payable, "conflicting fallback fragments", `fragments[${o}]`, a), s = a, i = s.payable);
          return;
        case "function":
          c = l(this, Ct);
          break;
        case "event":
          c = l(this, It);
          break;
        case "error":
          c = l(this, Tt);
          break;
        default:
          return;
      }
      const f = a.format();
      c.has(f) || c.set(f, a);
    }), this.deploy || D(this, {
      deploy: qt.from("constructor()")
    }), D(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(e) {
    const t = e ? "minimal" : "full";
    return this.fragments.map((s) => s.format(t));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const e = this.fragments.map((t) => t.format("json"));
    return JSON.stringify(e.map((t) => JSON.parse(t)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return Bi.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(e) {
    const t = I(this, Ts, Sa).call(this, e, null, !1);
    return b(t, "no matching function", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(e) {
    return !!I(this, Ts, Sa).call(this, e, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(e, t) {
    return I(this, Ts, Sa).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(e) {
    const t = Array.from(l(this, Ct).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(l(this, Ct).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(e) {
    const t = I(this, Is, Ua).call(this, e, null, !1);
    return b(t, "no matching event", "key", e), t.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(e) {
    return !!I(this, Is, Ua).call(this, e, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(e, t) {
    return I(this, Is, Ua).call(this, e, t || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(e) {
    const t = Array.from(l(this, It).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(l(this, It).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(e, t) {
    if (ee(e)) {
      const s = e.toLowerCase();
      if (kf[s])
        return Me.from(kf[s].signature);
      for (const i of l(this, Tt).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, a] of l(this, Tt))
        i.split(
          "("
          /* fix:) */
        )[0] === e && s.push(a);
      if (s.length === 0)
        return e === "Error" ? Me.from("error Error(string)") : e === "Panic" ? Me.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((a) => JSON.stringify(a.format())).join(", ");
        b(!1, `ambiguous error description (i.e. ${i})`, "name", e);
      }
      return s[0];
    }
    if (e = Me.from(e).format(), e === "Error(string)")
      return Me.from("error Error(string)");
    if (e === "Panic(uint256)")
      return Me.from("error Panic(uint256)");
    const n = l(this, Tt).get(e);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(e) {
    const t = Array.from(l(this, Tt).keys());
    t.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(l(this, Tt).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(e, t) {
    return l(this, Ne).decode(e, t);
  }
  _encodeParams(e, t) {
    return l(this, Ne).encode(e, t);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      b(n, "unknown error", "fragment", e), e = n;
    }
    return b(ne(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, ne(t, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(e, t) {
    if (typeof e == "string") {
      const n = this.getError(e);
      b(n, "unknown error", "fragment", e), e = n;
    }
    return X([
      e.selector,
      this._encodeParams(e.inputs, t || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      b(n, "unknown function", "fragment", e), e = n;
    }
    return b(ne(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, ne(t, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      b(n, "unknown function", "fragment", e), e = n;
    }
    return X([
      e.selector,
      this._encodeParams(e.inputs, t || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const i = this.getFunction(e);
      b(i, "unknown function", "fragment", e), e = i;
    }
    let n = "invalid length for result data";
    const s = me(t);
    if (s.length % 32 === 0)
      try {
        return l(this, Ne).decode(e.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    N(!1, n, "BAD_DATA", {
      value: P(s),
      info: { method: e.name, signature: e.format() }
    });
  }
  makeError(e, t) {
    const n = v(e, "data"), s = Bi.getBuiltinCallException("call", t, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const o = P(n.slice(0, 4)), c = this.getError(o);
      if (c)
        try {
          const f = l(this, Ne).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: f
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const a = this.parseTransaction(t);
    return a && (s.invocation = {
      method: a.name,
      signature: a.signature,
      args: a.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(e, t) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      b(n, "unknown function", "fragment", e), e = n;
    }
    return P(l(this, Ne).encode(e.outputs, t || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(e, t) {
    if (typeof e == "string") {
      const i = this.getEvent(e);
      b(i, "unknown event", "eventFragment", e), e = i;
    }
    N(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", { count: t.length, expectedCount: e.inputs.length });
    const n = [];
    e.anonymous || n.push(e.topicHash);
    const s = (i, a) => i.type === "string" ? sn(a) : i.type === "bytes" ? ie(P(a)) : (i.type === "bool" && typeof a == "boolean" ? a = a ? "0x01" : "0x00" : i.type.match(/^u?int/) ? a = nn(a) : i.type.match(/^bytes/) ? a = Fd(a, 32) : i.type === "address" && l(this, Ne).encode(["address"], [a]), Pr(P(a), 32));
    for (t.forEach((i, a) => {
      const o = e.inputs[a];
      if (!o.indexed) {
        b(i == null, "cannot filter non-indexed parameters; must be null", "contract." + o.name, i);
        return;
      }
      i == null ? n.push(null) : o.baseType === "array" || o.baseType === "tuple" ? b(!1, "filtering with tuples or arrays not supported", "contract." + o.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(o, c))) : n.push(s(o, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, t) {
    if (typeof e == "string") {
      const a = this.getEvent(e);
      b(a, "unknown event", "eventFragment", e), e = a;
    }
    const n = [], s = [], i = [];
    return e.anonymous || n.push(e.topicHash), b(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((a, o) => {
      const c = t[o];
      if (a.indexed)
        if (a.type === "string")
          n.push(sn(c));
        else if (a.type === "bytes")
          n.push(ie(c));
        else {
          if (a.baseType === "tuple" || a.baseType === "array")
            throw new Error("not implemented");
          n.push(l(this, Ne).encode([a.type], [c]));
        }
      else
        s.push(a), i.push(c);
    }), {
      data: l(this, Ne).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, t, n) {
    if (typeof e == "string") {
      const p = this.getEvent(e);
      b(p, "unknown event", "eventFragment", e), e = p;
    }
    if (n != null && !e.anonymous) {
      const p = e.topicHash;
      b(ee(n[0], 32) && n[0].toLowerCase() === p, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], a = [];
    e.inputs.forEach((p, m) => {
      p.indexed ? p.type === "string" || p.type === "bytes" || p.baseType === "tuple" || p.baseType === "array" ? (s.push(Ae.from({ type: "bytes32", name: p.name })), a.push(!0)) : (s.push(p), a.push(!1)) : (i.push(p), a.push(!1));
    });
    const o = n != null ? l(this, Ne).decode(s, X(n)) : null, c = l(this, Ne).decode(i, t, !0), f = [], u = [];
    let d = 0, x = 0;
    return e.inputs.forEach((p, m) => {
      let g = null;
      if (p.indexed)
        if (o == null)
          g = new If(null);
        else if (a[m])
          g = new If(o[x++]);
        else
          try {
            g = o[x++];
          } catch (A) {
            g = A;
          }
      else
        try {
          g = c[d++];
        } catch (A) {
          g = A;
        }
      f.push(g), u.push(p.name || null);
    }), Ka.fromItems(f, u);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(e) {
    const t = v(e.data, "tx.data"), n = L(e.value != null ? e.value : 0, "tx.value"), s = this.getFunction(P(t.slice(0, 4)));
    if (!s)
      return null;
    const i = l(this, Ne).decode(s.inputs, t.slice(4));
    return new O6(s, s.selector, i, n);
  }
  parseCallResult(e) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(e) {
    const t = this.getEvent(e.topics[0]);
    return !t || t.anonymous ? null : new k6(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(e) {
    const t = P(e), n = this.getError(ne(t, 0, 4));
    if (!n)
      return null;
    const s = l(this, Ne).decode(n.inputs, ne(t, 4));
    return new R6(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(e) {
    return e instanceof zn ? e : typeof e == "string" ? new zn(JSON.parse(e)) : typeof e.formatJson == "function" ? new zn(e.formatJson()) : typeof e.format == "function" ? new zn(e.format("json")) : new zn(e);
  }
};
Tt = new WeakMap(), It = new WeakMap(), Ct = new WeakMap(), Ne = new WeakMap(), Ts = new WeakSet(), Sa = function(e, t, n) {
  if (ee(e)) {
    const i = e.toLowerCase();
    for (const a of l(this, Ct).values())
      if (i === a.selector)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of l(this, Ct))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (t) {
      const a = t.length > 0 ? t[t.length - 1] : null;
      let o = t.length, c = !0;
      Oe.isTyped(a) && a.type === "overrides" && (c = !1, o--);
      for (let f = i.length - 1; f >= 0; f--) {
        const u = i[f].inputs.length;
        u !== o && (!c || u !== o - 1) && i.splice(f, 1);
      }
      for (let f = i.length - 1; f >= 0; f--) {
        const u = i[f].inputs;
        for (let d = 0; d < t.length; d++)
          if (Oe.isTyped(t[d])) {
            if (d >= u.length) {
              if (t[d].type === "overrides")
                continue;
              i.splice(f, 1);
              break;
            }
            if (t[d].type !== u[d].baseType) {
              i.splice(f, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && t && t.length !== i[0].inputs.length) {
      const a = t[t.length - 1];
      (a == null || Array.isArray(a) || typeof a != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      b(!1, `ambiguous function description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = l(this, Ct).get(vt.from(e).format());
  return s || null;
}, Is = new WeakSet(), Ua = function(e, t, n) {
  if (ee(e)) {
    const i = e.toLowerCase();
    for (const a of l(this, It).values())
      if (i === a.topicHash)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of l(this, It))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (t) {
      for (let a = i.length - 1; a >= 0; a--)
        i[a].inputs.length < t.length && i.splice(a, 1);
      for (let a = i.length - 1; a >= 0; a--) {
        const o = i[a].inputs;
        for (let c = 0; c < t.length; c++)
          if (Oe.isTyped(t[c]) && t[c].type !== o[c].baseType) {
            i.splice(a, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      b(!1, `ambiguous event description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = l(this, It).get(Bt.from(e).format());
  return s || null;
};
let vi = zn;
const zu = BigInt(0);
function qr(r) {
  return r ?? null;
}
function ce(r) {
  return r == null ? null : r.toString();
}
class Of {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(e, t, n) {
    /**
     *  The gas price for legacy networks.
     */
    y(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    y(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    y(this, "maxPriorityFeePerGas");
    D(this, {
      gasPrice: qr(e),
      maxFeePerGas: qr(t),
      maxPriorityFeePerGas: qr(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: e, maxFeePerGas: t, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: ce(e),
      maxFeePerGas: ce(t),
      maxPriorityFeePerGas: ce(n)
    };
  }
}
function Za(r) {
  const e = {};
  r.to && (e.to = r.to), r.from && (e.from = r.from), r.data && (e.data = P(r.data));
  const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of t)
    !(s in r) || r[s] == null || (e[s] = L(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (e[s] = K(r[s], `request.${s}`));
  return r.accessList && (e.accessList = Br(r.accessList)), "blockTag" in r && (e.blockTag = r.blockTag), "enableCcipRead" in r && (e.enableCcipRead = !!r.enableCcipRead), "customData" in r && (e.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (e.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (e.kzg = r.kzg), "blobs" in r && r.blobs && (e.blobs = r.blobs.map((s) => l0(s) ? P(s) : Object.assign({}, s))), e;
}
var Jt;
class B6 {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(e, t) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    y(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    y(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    y(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    y(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    y(this, "parentHash");
    /**
     *  The hash tree root of the parent beacon block for the given
     *  execution block. See [[link-eip-4788]].
     */
    y(this, "parentBeaconBlockRoot");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    y(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    y(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    y(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    y(this, "gasUsed");
    /**
     *  The root hash for the global state after applying changes
     *  in this block.
     */
    y(this, "stateRoot");
    /**
     *  The hash of the transaction receipts trie.
     */
    y(this, "receiptsRoot");
    /**
     *  The total amount of blob gas consumed by the transactions
     *  within the block. See [[link-eip-4844]].
     */
    y(this, "blobGasUsed");
    /**
     *  The running total of blob gas consumed in excess of the
     *  target, prior to the block. See [[link-eip-4844]].
     */
    y(this, "excessBlobGas");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    y(this, "miner");
    /**
     *  The latest RANDAO mix of the post beacon state of
     *  the previous block.
     */
    y(this, "prevRandao");
    /**
     *  Any extra data the validator wished to include.
     */
    y(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    y(this, "baseFeePerGas");
    w(this, Jt, void 0);
    h(this, Jt, e.transactions.map((n) => typeof n != "string" ? new Si(n, t) : n)), D(this, {
      provider: t,
      hash: qr(e.hash),
      number: e.number,
      timestamp: e.timestamp,
      parentHash: e.parentHash,
      parentBeaconBlockRoot: e.parentBeaconBlockRoot,
      nonce: e.nonce,
      difficulty: e.difficulty,
      gasLimit: e.gasLimit,
      gasUsed: e.gasUsed,
      blobGasUsed: e.blobGasUsed,
      excessBlobGas: e.excessBlobGas,
      miner: e.miner,
      prevRandao: qr(e.prevRandao),
      extraData: e.extraData,
      baseFeePerGas: qr(e.baseFeePerGas),
      stateRoot: e.stateRoot,
      receiptsRoot: e.receiptsRoot
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return l(this, Jt).map((e) => typeof e == "string" ? e : e.hash);
  }
  /**
   *  Returns the complete transactions, in the order they
   *  were executed within the block.
   *
   *  This is only available for blocks which prefetched
   *  transactions, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const e = l(this, Jt).slice();
    return e.length === 0 ? [] : (N(typeof e[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), e);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: e, difficulty: t, extraData: n, gasLimit: s, gasUsed: i, hash: a, miner: o, prevRandao: c, nonce: f, number: u, parentHash: d, parentBeaconBlockRoot: x, stateRoot: p, receiptsRoot: m, timestamp: g, transactions: A } = this;
    return {
      _type: "Block",
      baseFeePerGas: ce(e),
      difficulty: ce(t),
      extraData: n,
      gasLimit: ce(s),
      gasUsed: ce(i),
      blobGasUsed: ce(this.blobGasUsed),
      excessBlobGas: ce(this.excessBlobGas),
      hash: a,
      miner: o,
      prevRandao: c,
      nonce: f,
      number: u,
      parentHash: d,
      timestamp: g,
      parentBeaconBlockRoot: x,
      stateRoot: p,
      receiptsRoot: m,
      transactions: A
    };
  }
  [Symbol.iterator]() {
    let e = 0;
    const t = this.transactions;
    return {
      next: () => e < this.length ? {
        value: t[e++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return l(this, Jt).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(e) {
    let t;
    if (typeof e == "number")
      t = l(this, Jt)[e];
    else {
      const n = e.toLowerCase();
      for (const s of l(this, Jt))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          t = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          t = s;
          break;
        }
    }
    if (t == null)
      throw new Error("no such tx");
    return typeof t == "string" ? await this.provider.getTransaction(t) : t;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(e) {
    const t = this.prefetchedTransactions;
    if (typeof e == "number")
      return t[e];
    e = e.toLowerCase();
    for (const n of t)
      if (n.hash === e)
        return n;
    b(!1, "no matching transaction", "indexOrHash", e);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined())
      throw new Error("");
    return v6(this);
  }
}
Jt = new WeakMap();
class ca {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    y(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    y(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    y(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    y(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    y(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    y(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    y(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    y(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    y(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    y(this, "transactionIndex");
    this.provider = t;
    const n = Object.freeze(e.topics.slice());
    D(this, {
      transactionHash: e.transactionHash,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      removed: e.removed,
      address: e.address,
      data: e.data,
      topics: n,
      index: e.index,
      transactionIndex: e.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: e, blockHash: t, blockNumber: n, data: s, index: i, removed: a, topics: o, transactionHash: c, transactionIndex: f } = this;
    return {
      _type: "log",
      address: e,
      blockHash: t,
      blockNumber: n,
      data: s,
      index: i,
      removed: a,
      topics: o,
      transactionHash: c,
      transactionIndex: f
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    return N(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.transactionHash);
    return N(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const e = await this.provider.getTransactionReceipt(this.transactionHash);
    return N(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return S6(this);
  }
}
var Ki;
class Ju {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    y(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    y(this, "to");
    /**
     *  The sender of the transaction.
     */
    y(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    y(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    y(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    y(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    y(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    y(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    y(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    y(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    y(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    y(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    y(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    y(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    y(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    y(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    y(this, "root");
    w(this, Ki, void 0);
    h(this, Ki, Object.freeze(e.logs.map((s) => new ca(s, t))));
    let n = zu;
    e.effectiveGasPrice != null ? n = e.effectiveGasPrice : e.gasPrice != null && (n = e.gasPrice), D(this, {
      provider: t,
      to: e.to,
      from: e.from,
      contractAddress: e.contractAddress,
      hash: e.hash,
      index: e.index,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      logsBloom: e.logsBloom,
      gasUsed: e.gasUsed,
      cumulativeGasUsed: e.cumulativeGasUsed,
      blobGasUsed: e.blobGasUsed,
      gasPrice: n,
      blobGasPrice: e.blobGasPrice,
      type: e.type,
      //byzantium: tx.byzantium,
      status: e.status,
      root: e.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return l(this, Ki);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: e,
      from: t,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: a,
      blockNumber: o,
      logsBloom: c,
      logs: f,
      //byzantium, 
      status: u,
      root: d
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: a,
      blockNumber: o,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: ce(this.cumulativeGasUsed),
      from: t,
      gasPrice: ce(this.gasPrice),
      blobGasUsed: ce(this.blobGasUsed),
      blobGasPrice: ce(this.blobGasPrice),
      gasUsed: ce(this.gasUsed),
      hash: s,
      index: i,
      logs: f,
      logsBloom: c,
      root: d,
      status: u,
      to: e
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.length ? { value: this.logs[e++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.hash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Wu(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(e) {
    return N(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), ju(this, e);
  }
}
Ki = new WeakMap();
var Nn;
const yc = class yc {
  /**
   *  @_ignore:
   */
  constructor(e, t) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    y(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    y(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    y(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    y(this, "index");
    /**
     *  The transaction hash.
     */
    y(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    y(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    y(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    y(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    y(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    y(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    y(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    y(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    y(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    y(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    y(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    y(this, "value");
    /**
     *  The chain ID.
     */
    y(this, "chainId");
    /**
     *  The signature.
     */
    y(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    y(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    y(this, "blobVersionedHashes");
    w(this, Nn, void 0);
    this.provider = t, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, h(this, Nn, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: e, blockHash: t, index: n, hash: s, type: i, to: a, from: o, nonce: c, data: f, signature: u, accessList: d, blobVersionedHashes: x } = this;
    return {
      _type: "TransactionResponse",
      accessList: d,
      blockNumber: e,
      blockHash: t,
      blobVersionedHashes: x,
      chainId: ce(this.chainId),
      data: f,
      from: o,
      gasLimit: ce(this.gasLimit),
      gasPrice: ce(this.gasPrice),
      hash: s,
      maxFeePerGas: ce(this.maxFeePerGas),
      maxPriorityFeePerGas: ce(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: ce(this.maxFeePerBlobGas),
      nonce: c,
      signature: u,
      to: a,
      index: n,
      type: i,
      value: ce(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let e = this.blockNumber;
    if (e == null) {
      const n = await this.getTransaction();
      n && (e = n.blockNumber);
    }
    if (e == null)
      return null;
    const t = this.provider.getBlock(e);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: t, blockNumber: n } = await Ie({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return t == null || t.blockNumber == null ? 0 : n - t.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e, t) {
    const n = e ?? 1, s = t ?? 0;
    let i = l(this, Nn), a = -1, o = i === -1;
    const c = async () => {
      if (o)
        return null;
      const { blockNumber: x, nonce: p } = await Ie({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (p < this.nonce) {
        i = x;
        return;
      }
      if (o)
        return null;
      const m = await this.getTransaction();
      if (!(m && m.blockNumber != null))
        for (a === -1 && (a = i - 3, a < l(this, Nn) && (a = l(this, Nn))); a <= x; ) {
          if (o)
            return null;
          const g = await this.provider.getBlock(a, !0);
          if (g == null)
            return;
          for (const A of g)
            if (A === this.hash)
              return;
          for (let A = 0; A < g.length; A++) {
            const E = await g.getTransaction(A);
            if (E.from === this.from && E.nonce === this.nonce) {
              if (o)
                return null;
              const C = await this.provider.getTransactionReceipt(E.hash);
              if (C == null || x - C.blockNumber + 1 < n)
                return;
              let T = "replaced";
              E.data === this.data && E.to === this.to && E.value === this.value ? T = "repriced" : E.data === "0x" && E.from === E.to && E.value === zu && (T = "cancelled"), N(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: T === "replaced" || T === "cancelled",
                reason: T,
                replacement: E.replaceableTransaction(i),
                hash: E.hash,
                receipt: C
              });
            }
          }
          a++;
        }
    }, f = (x) => {
      if (x == null || x.status !== 0)
        return x;
      N(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: x.to,
          from: x.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: x
      });
    }, u = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return f(u);
    if (u) {
      if (await u.confirmations() >= n)
        return f(u);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((x, p) => {
      const m = [], g = () => {
        m.forEach((E) => E());
      };
      if (m.push(() => {
        o = !0;
      }), s > 0) {
        const E = setTimeout(() => {
          g(), p(ue("wait for transaction timeout", "TIMEOUT"));
        }, s);
        m.push(() => {
          clearTimeout(E);
        });
      }
      const A = async (E) => {
        if (await E.confirmations() >= n) {
          g();
          try {
            x(f(E));
          } catch (C) {
            p(C);
          }
        }
      };
      if (m.push(() => {
        this.provider.off(this.hash, A);
      }), this.provider.on(this.hash, A), i >= 0) {
        const E = async () => {
          try {
            await c();
          } catch (C) {
            if (Ce(C, "TRANSACTION_REPLACED")) {
              g(), p(C);
              return;
            }
          }
          o || this.provider.once("block", E);
        };
        m.push(() => {
          this.provider.off("block", E);
        }), this.provider.once("block", E);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
   *  transaction. See [[link-eip-4844]].
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return N(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Wu(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(e) {
    return N(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), N(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), ju(this, e);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(e) {
    b(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
    const t = new yc(this, this.provider);
    return h(t, Nn, e), t;
  }
};
Nn = new WeakMap();
let Si = yc;
function v6(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function ju(r, e) {
  return { orphan: "reorder-transaction", tx: r, other: e };
}
function Wu(r) {
  return { orphan: "drop-transaction", tx: r };
}
function S6(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class oc extends ca {
  /**
   * @_ignore:
   */
  constructor(t, n, s) {
    super(t, t.provider);
    /**
     *  The Contract Interface.
     */
    y(this, "interface");
    /**
     *  The matching event.
     */
    y(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    y(this, "args");
    const i = n.decodeEventLog(s, t.data, t.topics);
    D(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class Zu extends ca {
  /**
   * @_ignore:
   */
  constructor(t, n) {
    super(t, t.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    y(this, "error");
    D(this, { error: n });
  }
}
var Cs;
class U6 extends Ju {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    w(this, Cs, void 0);
    h(this, Cs, t);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((t) => {
      const n = t.topics.length ? l(this, Cs).getEvent(t.topics[0]) : null;
      if (n)
        try {
          return new oc(t, l(this, Cs), n);
        } catch (s) {
          return new Zu(t, s);
        }
      return t;
    });
  }
}
Cs = new WeakMap();
var _i;
class cc extends Si {
  /**
   *  @_ignore:
   */
  constructor(t, n, s) {
    super(s, n);
    w(this, _i, void 0);
    h(this, _i, t);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, n) {
    const s = await super.wait(t, n);
    return s == null ? null : new U6(l(this, _i), this.provider, s);
  }
}
_i = new WeakMap();
class Yu extends nl {
  /**
   *  @_event:
   */
  constructor(t, n, s, i) {
    super(t, n, s);
    /**
     *  The log with no matching events.
     */
    y(this, "log");
    D(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class L6 extends Yu {
  /**
   *  @_ignore:
   */
  constructor(e, t, n, s, i) {
    super(e, t, n, new oc(i, e.interface, s));
    const a = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
    D(this, { args: a, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const Rf = BigInt(0);
function Xu(r) {
  return r && typeof r.call == "function";
}
function $u(r) {
  return r && typeof r.estimateGas == "function";
}
function N0(r) {
  return r && typeof r.resolveName == "function";
}
function qu(r) {
  return r && typeof r.sendTransaction == "function";
}
function ed(r) {
  if (r != null) {
    if (N0(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var zi;
class D6 {
  constructor(e, t, n) {
    w(this, zi, void 0);
    y(this, "fragment");
    if (D(this, { fragment: t }), t.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = kr(e.runner, "resolveName"), i = N0(s) ? s : null;
    h(this, zi, async function() {
      const a = await Promise.all(t.inputs.map((o, c) => n[c] == null ? null : o.walkAsync(n[c], (u, d) => u === "address" ? Array.isArray(d) ? Promise.all(d.map((x) => we(x, i))) : we(d, i) : d)));
      return e.interface.encodeFilterTopics(t, a);
    }());
  }
  getTopicFilter() {
    return l(this, zi);
  }
}
zi = new WeakMap();
function kr(r, e) {
  return r == null ? null : typeof r[e] == "function" ? r : r.provider && typeof r.provider[e] == "function" ? r.provider : null;
}
function Zn(r) {
  return r == null ? null : r.provider || null;
}
async function fc(r, e) {
  const t = Oe.dereference(r, "overrides");
  b(typeof t == "object", "invalid overrides parameter", "overrides", r);
  const n = Za(t);
  return b(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), b(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function td(r, e, t) {
  const n = kr(r, "resolveName"), s = N0(n) ? n : null;
  return await Promise.all(e.map((i, a) => i.walkAsync(t[a], (o, c) => (c = Oe.dereference(c, o), o === "address" ? we(c, s) : c))));
}
function F6(r) {
  const e = async function(a) {
    const o = await fc(a, ["data"]);
    o.to = await r.getAddress(), o.from && (o.from = await we(o.from, ed(r.runner)));
    const c = r.interface, f = L(o.value || Rf, "overrides.value") === Rf, u = (o.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !u && !f && b(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", a), b(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", o.data);
    const d = c.receive || c.fallback && c.fallback.payable;
    return b(d || f, "cannot send value to non-payable fallback", "overrides.value", o.value), b(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", o.data), o;
  }, t = async function(a) {
    const o = kr(r.runner, "call");
    N(Xu(o), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await e(a);
    try {
      return await o.call(c);
    } catch (f) {
      throw Vo(f) && f.data ? r.interface.makeError(f.data, c) : f;
    }
  }, n = async function(a) {
    const o = r.runner;
    N(qu(o), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await o.sendTransaction(await e(a)), f = Zn(r.runner);
    return new cc(r.interface, f, c);
  }, s = async function(a) {
    const o = kr(r.runner, "estimateGas");
    return N($u(o), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await o.estimateGas(await e(a));
  }, i = async (a) => await n(a);
  return D(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: e,
    send: n,
    staticCall: t
  }), i;
}
function M6(r, e) {
  const t = function(...f) {
    const u = r.interface.getFunction(e, f);
    return N(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: f }
    }), u;
  }, n = async function(...f) {
    const u = t(...f);
    let d = {};
    if (u.inputs.length + 1 === f.length && (d = await fc(f.pop()), d.from && (d.from = await we(d.from, ed(r.runner)))), u.inputs.length !== f.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const x = await td(r.runner, u.inputs, f);
    return Object.assign({}, d, await Ie({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(u, x)
    }));
  }, s = async function(...f) {
    const u = await o(...f);
    return u.length === 1 ? u[0] : u;
  }, i = async function(...f) {
    const u = r.runner;
    N(qu(u), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const d = await u.sendTransaction(await n(...f)), x = Zn(r.runner);
    return new cc(r.interface, x, d);
  }, a = async function(...f) {
    const u = kr(r.runner, "estimateGas");
    return N($u(u), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await u.estimateGas(await n(...f));
  }, o = async function(...f) {
    const u = kr(r.runner, "call");
    N(Xu(u), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const d = await n(...f);
    let x = "0x";
    try {
      x = await u.call(d);
    } catch (m) {
      throw Vo(m) && m.data ? r.interface.makeError(m.data, d) : m;
    }
    const p = t(...f);
    return r.interface.decodeFunctionResult(p, x);
  }, c = async (...f) => t(...f).constant ? await s(...f) : await i(...f);
  return D(c, {
    name: r.interface.getFunctionName(e),
    _contract: r,
    _key: e,
    getFragment: t,
    estimateGas: a,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: o
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const f = r.interface.getFunction(e);
      return N(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), f;
    }
  }), c;
}
function G6(r, e) {
  const t = function(...s) {
    const i = r.interface.getEvent(e, s);
    return N(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: s }
    }), i;
  }, n = function(...s) {
    return new D6(r, t(...s), s);
  };
  return D(n, {
    name: r.interface.getEventName(e),
    _contract: r,
    _key: e,
    getFragment: t
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(e);
      return N(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), s;
    }
  }), n;
}
const Ya = Symbol.for("_ethersInternal_contract"), nd = /* @__PURE__ */ new WeakMap();
function H6(r, e) {
  nd.set(r[Ya], e);
}
function Ve(r) {
  return nd.get(r[Ya]);
}
function V6(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function lc(r, e) {
  let t, n = null;
  if (Array.isArray(e)) {
    const i = function(a) {
      if (ee(a, 32))
        return a;
      const o = r.interface.getEvent(a);
      return b(o, "unknown fragment", "name", a), o.topicHash;
    };
    t = e.map((a) => a == null ? null : Array.isArray(a) ? a.map(i) : i(a));
  } else
    e === "*" ? t = [null] : typeof e == "string" ? ee(e, 32) ? t = [e] : (n = r.interface.getEvent(e), b(n, "unknown fragment", "event", e), t = [n.topicHash]) : V6(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [n.topicHash]) : b(!1, "unknown event name", "event", e);
  t = t.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const a = Array.from(new Set(i.map((o) => o.toLowerCase())).values());
      return a.length === 1 ? a[0] : (a.sort(), a);
    }
    return i.toLowerCase();
  });
  const s = t.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: t };
}
async function xi(r, e) {
  const { subs: t } = Ve(r);
  return t.get((await lc(r, e)).tag) || null;
}
async function Bf(r, e, t) {
  const n = Zn(r.runner);
  N(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e });
  const { fragment: s, tag: i, topics: a } = await lc(r, t), { addr: o, subs: c } = Ve(r);
  let f = c.get(i);
  if (!f) {
    const d = { address: o || r, topics: a }, x = (A) => {
      let E = s;
      if (E == null)
        try {
          E = r.interface.getEvent(A.topics[0]);
        } catch {
        }
      if (E) {
        const C = E, T = s ? r.interface.decodeEventLog(s, A.data, A.topics) : [];
        Ao(r, t, T, (M) => new L6(r, M, t, C, A));
      } else
        Ao(r, t, [], (C) => new Yu(r, C, t, A));
    };
    let p = [];
    f = { tag: i, listeners: [], start: () => {
      p.length || p.push(n.on(d, x));
    }, stop: async () => {
      if (p.length == 0)
        return;
      let A = p;
      p = [], await Promise.all(A), n.off(d, x);
    } }, c.set(i, f);
  }
  return f;
}
let wo = Promise.resolve();
async function Q6(r, e, t, n) {
  await wo;
  const s = await xi(r, e);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: a, once: o }) => {
    const c = Array.from(t);
    n && c.push(n(o ? null : a));
    try {
      a.call(r, ...c);
    } catch {
    }
    return !o;
  }), s.listeners.length === 0 && (s.stop(), Ve(r).subs.delete(s.tag)), i > 0;
}
async function Ao(r, e, t, n) {
  try {
    await wo;
  } catch {
  }
  const s = Q6(r, e, t, n);
  return wo = s, await s;
}
const Ea = ["then"];
var i2;
const Ei = class Ei {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(e, t, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    y(this, "target");
    /**
     *  The contract Interface.
     */
    y(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    y(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    y(this, "filters");
    /**
     *  @_ignore:
     */
    y(this, i2);
    /**
     *  The fallback or receive function if any.
     */
    y(this, "fallback");
    b(typeof e == "string" || cu(e), "invalid value for Contract target", "target", e), n == null && (n = null);
    const i = vi.from(t);
    D(this, { target: e, runner: n, interface: i }), Object.defineProperty(this, Ya, { value: {} });
    let a, o = null, c = null;
    if (s) {
      const d = Zn(n);
      c = new cc(this.interface, d, s);
    }
    let f = /* @__PURE__ */ new Map();
    if (typeof e == "string")
      if (ee(e))
        o = e, a = Promise.resolve(e);
      else {
        const d = kr(n, "resolveName");
        if (!N0(d))
          throw ue("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        a = d.resolveName(e).then((x) => {
          if (x == null)
            throw ue("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: e
            });
          return Ve(this).addr = x, x;
        });
      }
    else
      a = e.getAddress().then((d) => {
        if (d == null)
          throw new Error("TODO");
        return Ve(this).addr = d, d;
      });
    H6(this, { addrPromise: a, addr: o, deployTx: c, subs: f });
    const u = new Proxy({}, {
      get: (d, x, p) => {
        if (typeof x == "symbol" || Ea.indexOf(x) >= 0)
          return Reflect.get(d, x, p);
        try {
          return this.getEvent(x);
        } catch (m) {
          if (!Ce(m, "INVALID_ARGUMENT") || m.argument !== "key")
            throw m;
        }
      },
      has: (d, x) => Ea.indexOf(x) >= 0 ? Reflect.has(d, x) : Reflect.has(d, x) || this.interface.hasEvent(String(x))
    });
    return D(this, { filters: u }), D(this, {
      fallback: i.receive || i.fallback ? F6(this) : null
    }), new Proxy(this, {
      get: (d, x, p) => {
        if (typeof x == "symbol" || x in d || Ea.indexOf(x) >= 0)
          return Reflect.get(d, x, p);
        try {
          return d.getFunction(x);
        } catch (m) {
          if (!Ce(m, "INVALID_ARGUMENT") || m.argument !== "key")
            throw m;
        }
      },
      has: (d, x) => typeof x == "symbol" || x in d || Ea.indexOf(x) >= 0 ? Reflect.has(d, x) : d.interface.hasFunction(x)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(e) {
    return new Ei(this.target, this.interface, e);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(e) {
    return new Ei(e, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await Ve(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const e = Zn(this.runner);
    N(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const t = await e.getCode(await this.getAddress());
    return t === "0x" ? null : t;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const e = this.deploymentTransaction();
    if (e)
      return await e.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Zn(this.runner);
    return N(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const a = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", a);
        } catch (o) {
          i(o);
        }
      };
      a();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return Ve(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(e) {
    return typeof e != "string" && (e = e.format()), M6(this, e);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(e) {
    return typeof e != "string" && (e = e.format()), G6(this, e);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(e) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(e, t, n) {
    t == null && (t = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = Ve(this), a = s || await i, { fragment: o, topics: c } = await lc(this, e), f = { address: a, topics: c, fromBlock: t, toBlock: n }, u = Zn(this.runner);
    return N(u, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await u.getLogs(f)).map((d) => {
      let x = o;
      if (x == null)
        try {
          x = this.interface.getEvent(d.topics[0]);
        } catch {
        }
      if (x)
        try {
          return new oc(d, this.interface, x);
        } catch (p) {
          return new Zu(d, p);
        }
      return new ca(d, u);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(e, t) {
    const n = await Bf(this, "on", e);
    return n.listeners.push({ listener: t, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(e, t) {
    const n = await Bf(this, "once", e);
    return n.listeners.push({ listener: t, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(e, ...t) {
    return await Ao(this, e, t, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(e) {
    if (e) {
      const s = await xi(this, e);
      return s ? s.listeners.length : 0;
    }
    const { subs: t } = Ve(this);
    let n = 0;
    for (const { listeners: s } of t.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(e) {
    if (e) {
      const s = await xi(this, e);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: t } = Ve(this);
    let n = [];
    for (const { listeners: s } of t.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(e, t) {
    const n = await xi(this, e);
    if (!n)
      return this;
    if (t) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (t == null || n.listeners.length === 0) && (n.stop(), Ve(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(e) {
    if (e) {
      const t = await xi(this, e);
      if (!t)
        return this;
      t.stop(), Ve(this).subs.delete(t.tag);
    } else {
      const { subs: t } = Ve(this);
      for (const { tag: n, stop: s } of t.values())
        s(), t.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(e, t) {
    return await this.on(e, t);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(e, t) {
    return await this.off(e, t);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(e) {
    class t extends Ei {
      constructor(s, i = null) {
        super(s, e, i);
      }
    }
    return t;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(e, t, n) {
    return n == null && (n = null), new this(e, t, n);
  }
};
i2 = Ya;
let Ui = Ei;
function K6() {
  return Ui;
}
class es extends K6() {
}
class uc {
  /**
   *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
   *  optionally connected to %%runner%%.
   *
   *  The %%bytecode%% may be the ``bytecode`` property within the
   *  standard Solidity JSON output.
   */
  constructor(e, t, n) {
    /**
     *  The Contract Interface.
     */
    y(this, "interface");
    /**
     *  The Contract deployment bytecode. Often called the initcode.
     */
    y(this, "bytecode");
    /**
     *  The ContractRunner to deploy the Contract as.
     */
    y(this, "runner");
    const s = vi.from(e);
    t instanceof Uint8Array || (typeof t == "object" && (t = t.object), t.startsWith("0x") || (t = "0x" + t)), t = P(v(t)), D(this, {
      bytecode: t,
      interface: s,
      runner: n || null
    });
  }
  attach(e) {
    return new Ui(e, this.interface, this.runner);
  }
  /**
   *  Resolves to the transaction to deploy the contract, passing %%args%%
   *  into the constructor.
   */
  async getDeployTransaction(...e) {
    let t = {};
    const n = this.interface.deploy;
    if (n.inputs.length + 1 === e.length && (t = await fc(e.pop())), n.inputs.length !== e.length)
      throw new Error("incorrect number of arguments to constructor");
    const s = await td(this.runner, n.inputs, e), i = X([this.bytecode, this.interface.encodeDeploy(s)]);
    return Object.assign({}, t, { data: i });
  }
  /**
   *  Resolves to the Contract deployed by passing %%args%% into the
   *  constructor.
   *
   *  This will resolve to the Contract before it has been deployed to the
   *  network, so the [[BaseContract-waitForDeployment]] should be used before
   *  sending any transactions to it.
   */
  async deploy(...e) {
    const t = await this.getDeployTransaction(...e);
    N(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
      operation: "sendTransaction"
    });
    const n = await this.runner.sendTransaction(t), s = ou(n);
    return new Ui(s, this.interface, this.runner, n);
  }
  /**
   *  Return a new **ContractFactory** with the same ABI and bytecode,
   *  but connected to %%runner%%.
   */
  connect(e) {
    return new uc(this.interface, this.bytecode, e);
  }
  /**
   *  Create a new **ContractFactory** from the standard Solidity JSON output.
   */
  static fromSolidity(e, t) {
    b(e != null, "bad compiler output", "output", e), typeof e == "string" && (e = JSON.parse(e));
    const n = e.abi;
    let s = "";
    return e.bytecode ? s = e.bytecode : e.evm && e.evm.bytecode && (s = e.evm.bytecode), new this(n, s, t);
  }
}
function _0(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : b(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class _6 {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(e) {
    /**
     *  The name.
     */
    y(this, "name");
    D(this, { name: e });
  }
  connect(e) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(e) {
    return !1;
  }
  /**
   *  Resolves to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(e, t) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resolves to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(e, t) {
    throw new Error("unsupported coin");
  }
}
const rd = new RegExp("^(ipfs)://(.*)$", "i"), vf = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  rd,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var Pn, cr, Tn, _r, o0, sd;
const Wr = class Wr {
  constructor(e, t, n) {
    w(this, Tn);
    /**
     *  The connected provider.
     */
    y(this, "provider");
    /**
     *  The address of the resolver.
     */
    y(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    y(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    w(this, Pn, void 0);
    w(this, cr, void 0);
    D(this, { provider: e, address: t, name: n }), h(this, Pn, null), h(this, cr, new es(t, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], e));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return l(this, Pn) == null && h(this, Pn, (async () => {
      try {
        return await l(this, cr).supportsInterface("0x9061b923");
      } catch (e) {
        if (Ce(e, "CALL_EXCEPTION"))
          return !1;
        throw h(this, Pn, null), e;
      }
    })()), await l(this, Pn);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(e) {
    if (e == null && (e = 60), e === 60)
      try {
        const i = await I(this, Tn, _r).call(this, "addr(bytes32)");
        return i == null || i === Pi ? null : i;
      } catch (i) {
        if (Ce(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (e >= 0 && e < 2147483648) {
      let i = e + 2147483648;
      const a = await I(this, Tn, _r).call(this, "addr(bytes32,uint)", [i]);
      if (ee(a, 20))
        return J(a);
    }
    let t = null;
    for (const i of this.provider.plugins)
      if (i instanceof _6 && i.supportsCoinType(e)) {
        t = i;
        break;
      }
    if (t == null)
      return null;
    const n = await I(this, Tn, _r).call(this, "addr(bytes32,uint)", [e]);
    if (n == null || n === "0x")
      return null;
    const s = await t.decodeAddress(e, n);
    if (s != null)
      return s;
    N(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${e})`,
      info: { coinType: e, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(e) {
    const t = await I(this, Tn, _r).call(this, "text(bytes32,string)", [e]);
    return t == null || t === "0x" ? null : t;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const e = await I(this, Tn, _r).call(this, "contenthash(bytes32)");
    if (e == null || e === "0x")
      return null;
    const t = e.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (t) {
      const s = t[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(t[4], 16);
      if (t[5].length === i * 2)
        return `${s}://${tl("0x" + t[2])}`;
    }
    const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    N(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: e }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const e = [{ type: "name", value: this.name }];
    try {
      const t = await this.getText("avatar");
      if (t == null)
        return e.push({ type: "!avatar", value: "" }), { url: null, linkage: e };
      e.push({ type: "avatar", value: t });
      for (let n = 0; n < vf.length; n++) {
        const s = t.match(vf[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return e.push({ type: "url", value: t }), { linkage: e, url: t };
          case "ipfs": {
            const a = _0(t);
            return e.push({ type: "ipfs", value: t }), e.push({ type: "url", value: a }), { linkage: e, url: a };
          }
          case "erc721":
          case "erc1155": {
            const a = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            e.push({ type: i, value: t });
            const o = await this.getAddress();
            if (o == null)
              return e.push({ type: "!owner", value: "" }), { url: null, linkage: e };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return e.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: e };
            const f = c[1], u = new es(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const g = await u.ownerOf(f);
              if (o !== g)
                return e.push({ type: "!owner", value: g }), { url: null, linkage: e };
              e.push({ type: "owner", value: g });
            } else if (i === "erc1155") {
              const g = await u.balanceOf(o, f);
              if (!g)
                return e.push({ type: "!balance", value: "0" }), { url: null, linkage: e };
              e.push({ type: "balance", value: g.toString() });
            }
            let d = await u[a](f);
            if (d == null || d === "0x")
              return e.push({ type: "!metadata-url", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata-url-base", value: d }), i === "erc1155" && (d = d.replace("{id}", nn(f, 32).substring(2)), e.push({ type: "metadata-url-expanded", value: d })), d.match(/^ipfs:/i) && (d = _0(d)), e.push({ type: "metadata-url", value: d });
            let x = {};
            const p = await new rn(d).send();
            p.assertOk();
            try {
              x = p.bodyJson;
            } catch {
              try {
                e.push({ type: "!metadata", value: p.bodyText });
              } catch {
                const E = p.body;
                return E && e.push({ type: "!metadata", value: P(E) }), { url: null, linkage: e };
              }
              return { url: null, linkage: e };
            }
            if (!x)
              return e.push({ type: "!metadata", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata", value: JSON.stringify(x) });
            let m = x.image;
            if (typeof m != "string")
              return e.push({ type: "!imageUrl", value: "" }), { url: null, linkage: e };
            if (!m.match(/^(https:\/\/|data:)/i)) {
              if (m.match(rd) == null)
                return e.push({ type: "!imageUrl-ipfs", value: m }), { url: null, linkage: e };
              e.push({ type: "imageUrl-ipfs", value: m }), m = _0(m);
            }
            return e.push({ type: "url", value: m }), { linkage: e, url: m };
          }
        }
      }
    } catch {
    }
    return { linkage: e, url: null };
  }
  static async getEnsAddress(e) {
    const t = await e.getNetwork(), n = t.getPlugin("org.ethers.plugins.network.Ens");
    return N(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: t }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(e, t) {
    var s;
    let n = t;
    for (; ; ) {
      if (n === "" || n === "." || t !== "eth" && n === "eth")
        return null;
      const i = await I(s = Wr, o0, sd).call(s, e, n);
      if (i != null) {
        const a = new Wr(e, i, t);
        return n !== t && !await a.supportsWildcard() ? null : a;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
Pn = new WeakMap(), cr = new WeakMap(), Tn = new WeakSet(), _r = async function(e, t) {
  t = (t || []).slice();
  const n = l(this, cr).interface;
  t.unshift(yo(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(e), N(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: e }
  }), t = [
    _x(this.name, 255),
    n.encodeFunctionData(s, t)
  ], e = "resolve(bytes,bytes)"), t.push({
    enableCcipRead: !0
  });
  try {
    const i = await l(this, cr)[e](...t);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!Ce(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, o0 = new WeakSet(), sd = async function(e, t) {
  const n = await Wr.getEnsAddress(e);
  try {
    const i = await new es(n, [
      "function resolver(bytes32) view returns (address)"
    ], e).resolver(yo(t), {
      enableCcipRead: !0
    });
    return i === Pi ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, w(Wr, o0);
let Xa = Wr;
const Sf = BigInt(0);
function j(r, e) {
  return function(t) {
    return t == null ? e : r(t);
  };
}
function P0(r, e) {
  return (t) => {
    if (e && t == null)
      return null;
    if (!Array.isArray(t))
      throw new Error("not an array");
    return t.map((n) => r(n));
  };
}
function fa(r, e) {
  return (t) => {
    const n = {};
    for (const s in r) {
      let i = s;
      if (e && s in e && !(i in t)) {
        for (const a of e[s])
          if (a in t) {
            i = a;
            break;
          }
      }
      try {
        const a = r[s](t[i]);
        a !== void 0 && (n[s] = a);
      } catch (a) {
        const o = a instanceof Error ? a.message : "not-an-error";
        N(!1, `invalid value for value.${s} (${o})`, "BAD_DATA", { value: t });
      }
    }
    return n;
  };
}
function z6(r) {
  switch (r) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  b(!1, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
}
function qs(r) {
  return b(ee(r, !0), "invalid data", "value", r), r;
}
function ye(r) {
  return b(ee(r, 32), "invalid hash", "value", r), r;
}
const J6 = fa({
  address: J,
  blockHash: ye,
  blockNumber: K,
  data: qs,
  index: K,
  removed: j(z6, !1),
  topics: P0(ye),
  transactionHash: ye,
  transactionIndex: K
}, {
  index: ["logIndex"]
});
function j6(r) {
  return J6(r);
}
const W6 = fa({
  hash: j(ye),
  parentHash: ye,
  parentBeaconBlockRoot: j(ye, null),
  number: K,
  timestamp: K,
  nonce: j(qs),
  difficulty: L,
  gasLimit: L,
  gasUsed: L,
  stateRoot: j(ye, null),
  receiptsRoot: j(ye, null),
  blobGasUsed: j(L, null),
  excessBlobGas: j(L, null),
  miner: j(J),
  prevRandao: j(ye, null),
  extraData: qs,
  baseFeePerGas: j(L)
}, {
  prevRandao: ["mixHash"]
});
function Z6(r) {
  const e = W6(r);
  return e.transactions = r.transactions.map((t) => typeof t == "string" ? t : id(t)), e;
}
const Y6 = fa({
  transactionIndex: K,
  blockNumber: K,
  transactionHash: ye,
  address: J,
  topics: P0(ye),
  data: qs,
  index: K,
  blockHash: ye
}, {
  index: ["logIndex"]
});
function X6(r) {
  return Y6(r);
}
const $6 = fa({
  to: j(J, null),
  from: j(J, null),
  contractAddress: j(J, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: K,
  root: j(P),
  gasUsed: L,
  blobGasUsed: j(L, null),
  logsBloom: j(qs),
  blockHash: ye,
  hash: ye,
  logs: P0(X6),
  blockNumber: K,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: L,
  effectiveGasPrice: j(L),
  blobGasPrice: j(L, null),
  status: j(K),
  type: j(K, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function q6(r) {
  return $6(r);
}
function id(r) {
  r.to && L(r.to) === Sf && (r.to = "0x0000000000000000000000000000000000000000");
  const e = fa({
    hash: ye,
    // Some nodes do not return this, usually test nodes (like Ganache)
    index: j(K, void 0),
    type: (t) => t === "0x" || t == null ? 0 : K(t),
    accessList: j(Br, null),
    blobVersionedHashes: j(P0(ye, !0), null),
    blockHash: j(ye, null),
    blockNumber: j(K, null),
    transactionIndex: j(K, null),
    from: J,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: j(L),
    maxPriorityFeePerGas: j(L),
    maxFeePerGas: j(L),
    maxFeePerBlobGas: j(L, null),
    gasLimit: L,
    to: j(J, null),
    value: L,
    nonce: K,
    data: qs,
    creates: j(J, null),
    chainId: j(L, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"],
    index: ["transactionIndex"]
  })(r);
  if (e.to == null && e.creates == null && (e.creates = ou(e)), (r.type === 1 || r.type === 2) && r.accessList == null && (e.accessList = []), r.signature ? e.signature = gt.from(r.signature) : e.signature = gt.from(r), e.chainId == null) {
    const t = e.signature.legacyChainId;
    t != null && (e.chainId = t);
  }
  return e.blockHash && L(e.blockHash) === Sf && (e.blockHash = null), e;
}
const eb = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class la {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(e) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    y(this, "name");
    D(this, { name: e });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new la(this.name);
  }
}
class T0 extends la {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(t, n) {
    t == null && (t = 0);
    super(`org.ethers.network.plugins.GasCost#${t || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    y(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    y(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    y(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    y(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    y(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    y(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    y(this, "txAccessListAddress");
    const s = { effectiveBlock: t };
    function i(a, o) {
      let c = (n || {})[a];
      c == null && (c = o), b(typeof c == "number", `invalud value for ${a}`, "costs", n), s[a] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), D(this, s);
  }
  clone() {
    return new T0(this.effectiveBlock, this);
  }
}
class I0 extends la {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(t, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    y(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    y(this, "targetNetwork");
    D(this, {
      address: t || eb,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new I0(this.address, this.targetNetwork);
  }
}
var Ji, ji;
class tb extends la {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(t, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    w(this, Ji, void 0);
    w(this, ji, void 0);
    h(this, Ji, t), h(this, ji, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return l(this, Ji);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return l(this, ji);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
Ji = new WeakMap(), ji = new WeakMap();
const z0 = /* @__PURE__ */ new Map();
var ks, Os, In;
const Zr = class Zr {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(e, t) {
    w(this, ks, void 0);
    w(this, Os, void 0);
    w(this, In, void 0);
    h(this, ks, e), h(this, Os, L(t)), h(this, In, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return l(this, ks);
  }
  set name(e) {
    h(this, ks, e);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return l(this, Os);
  }
  set chainId(e) {
    h(this, Os, L(e, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(e) {
    if (e == null)
      return !1;
    if (typeof e == "string") {
      try {
        return this.chainId === L(e);
      } catch {
      }
      return this.name === e;
    }
    if (typeof e == "number" || typeof e == "bigint") {
      try {
        return this.chainId === L(e);
      } catch {
      }
      return !1;
    }
    if (typeof e == "object") {
      if (e.chainId != null) {
        try {
          return this.chainId === L(e.chainId);
        } catch {
        }
        return !1;
      }
      return e.name != null ? this.name === e.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(l(this, In).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(e) {
    if (l(this, In).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return l(this, In).set(e.name, e.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(e) {
    return l(this, In).get(e) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(e) {
    return this.plugins.filter((t) => t.name.split("#")[0] === e);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const e = new Zr(this.name, this.chainId);
    return this.plugins.forEach((t) => {
      e.attachPlugin(t.clone());
    }), e;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(e) {
    const t = this.getPlugin("org.ethers.plugins.network.GasCost") || new T0();
    let n = t.txBase;
    if (e.to == null && (n += t.txCreate), e.data)
      for (let s = 2; s < e.data.length; s += 2)
        e.data.substring(s, s + 2) === "00" ? n += t.txDataZero : n += t.txDataNonzero;
    if (e.accessList) {
      const s = Br(e.accessList);
      for (const i in s)
        n += t.txAccessListAddress + t.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(e) {
    if (nb(), e == null)
      return Zr.from("mainnet");
    if (typeof e == "number" && (e = BigInt(e)), typeof e == "string" || typeof e == "bigint") {
      const t = z0.get(e);
      if (t)
        return t();
      if (typeof e == "bigint")
        return new Zr("unknown", e);
      b(!1, "unknown network", "network", e);
    }
    if (typeof e.clone == "function")
      return e.clone();
    if (typeof e == "object") {
      b(typeof e.name == "string" && typeof e.chainId == "number", "invalid network object name or chainId", "network", e);
      const t = new Zr(e.name, e.chainId);
      return (e.ensAddress || e.ensNetwork != null) && t.attachPlugin(new I0(e.ensAddress, e.ensNetwork)), t;
    }
    b(!1, "invalid network", "network", e);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(e, t) {
    typeof e == "number" && (e = BigInt(e));
    const n = z0.get(e);
    n && b(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", e), z0.set(e, t);
  }
};
ks = new WeakMap(), Os = new WeakMap(), In = new WeakMap();
let St = Zr;
function Uf(r, e) {
  const t = String(r);
  if (!t.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${r}`);
  const n = t.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${r}`);
  for (; n[1].length < e; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function Lf(r) {
  return new tb(r, async (e, t, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, a] = await Promise.all([
        n.send(),
        e()
      ]);
      s = i;
      const o = s.bodyJson.standard;
      return {
        gasPrice: a.gasPrice,
        maxFeePerGas: Uf(o.maxFee, 9),
        maxPriorityFeePerGas: Uf(o.maxPriorityFee, 9)
      };
    } catch (i) {
      N(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
let Df = !1;
function nb() {
  if (Df)
    return;
  Df = !0;
  function r(e, t, n) {
    const s = function() {
      const i = new St(e, t);
      return n.ensNetwork != null && i.attachPlugin(new I0(null, n.ensNetwork)), i.attachPlugin(new T0()), (n.plugins || []).forEach((a) => {
        i.attachPlugin(a);
      }), i;
    };
    St.register(e, s), St.register(t, s), n.altNames && n.altNames.forEach((i) => {
      St.register(i, s);
    });
  }
  r("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), r("ropsten", 3, { ensNetwork: 3 }), r("rinkeby", 4, { ensNetwork: 4 }), r("goerli", 5, { ensNetwork: 5 }), r("kovan", 42, { ensNetwork: 42 }), r("sepolia", 11155111, { ensNetwork: 11155111 }), r("holesky", 17e3, { ensNetwork: 17e3 }), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
    ensNetwork: 1
  }), r("arbitrum-goerli", 421613, {}), r("arbitrum-sepolia", 421614, {}), r("base", 8453, { ensNetwork: 1 }), r("base-goerli", 84531, {}), r("base-sepolia", 84532, {}), r("bnb", 56, { ensNetwork: 1 }), r("bnbt", 97, {}), r("linea", 59144, { ensNetwork: 1 }), r("linea-goerli", 59140, {}), r("linea-sepolia", 59141, {}), r("matic", 137, {
    ensNetwork: 1,
    plugins: [
      Lf("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-amoy", 80002, {}), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      Lf("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: []
  }), r("optimism-goerli", 420, {}), r("optimism-sepolia", 11155420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function Eo(r) {
  return JSON.parse(JSON.stringify(r));
}
var jt, tt, Cn, kt, Rs, La;
class rb {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    w(this, Rs);
    w(this, jt, void 0);
    w(this, tt, void 0);
    w(this, Cn, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    w(this, kt, void 0);
    h(this, jt, e), h(this, tt, null), h(this, Cn, 4e3), h(this, kt, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return l(this, Cn);
  }
  set pollingInterval(e) {
    h(this, Cn, e);
  }
  start() {
    l(this, tt) || (h(this, tt, l(this, jt)._setTimeout(I(this, Rs, La).bind(this), l(this, Cn))), I(this, Rs, La).call(this));
  }
  stop() {
    l(this, tt) && (l(this, jt)._clearTimeout(l(this, tt)), h(this, tt, null));
  }
  pause(e) {
    this.stop(), e && h(this, kt, -2);
  }
  resume() {
    this.start();
  }
}
jt = new WeakMap(), tt = new WeakMap(), Cn = new WeakMap(), kt = new WeakMap(), Rs = new WeakSet(), La = async function() {
  try {
    const e = await l(this, jt).getBlockNumber();
    if (l(this, kt) === -2) {
      h(this, kt, e);
      return;
    }
    if (e !== l(this, kt)) {
      for (let t = l(this, kt) + 1; t <= e; t++) {
        if (l(this, tt) == null)
          return;
        await l(this, jt).emit("block", t);
      }
      h(this, kt, e);
    }
  } catch {
  }
  l(this, tt) != null && h(this, tt, l(this, jt)._setTimeout(I(this, Rs, La).bind(this), l(this, Cn)));
};
var fr, lr, kn;
class dc {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    w(this, fr, void 0);
    w(this, lr, void 0);
    w(this, kn, void 0);
    h(this, fr, e), h(this, kn, !1), h(this, lr, (t) => {
      this._poll(t, l(this, fr));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(e, t) {
    throw new Error("sub-classes must override this");
  }
  start() {
    l(this, kn) || (h(this, kn, !0), l(this, lr).call(this, -2), l(this, fr).on("block", l(this, lr)));
  }
  stop() {
    l(this, kn) && (h(this, kn, !1), l(this, fr).off("block", l(this, lr)));
  }
  pause(e) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
fr = new WeakMap(), lr = new WeakMap(), kn = new WeakMap();
var Bs, Wt;
class sb extends dc {
  constructor(t, n) {
    super(t);
    w(this, Bs, void 0);
    w(this, Wt, void 0);
    h(this, Bs, n), h(this, Wt, -2);
  }
  pause(t) {
    t && h(this, Wt, -2), super.pause(t);
  }
  async _poll(t, n) {
    const s = await n.getBlock(l(this, Bs));
    s != null && (l(this, Wt) === -2 ? h(this, Wt, s.number) : s.number > l(this, Wt) && (n.emit(l(this, Bs), s.number), h(this, Wt, s.number)));
  }
}
Bs = new WeakMap(), Wt = new WeakMap();
var c0;
class ib extends dc {
  constructor(t, n) {
    super(t);
    w(this, c0, void 0);
    h(this, c0, Eo(n));
  }
  async _poll(t, n) {
    throw new Error("@TODO");
  }
}
c0 = new WeakMap();
var vs;
class ab extends dc {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(t, n) {
    super(t);
    w(this, vs, void 0);
    h(this, vs, n);
  }
  async _poll(t, n) {
    const s = await n.getTransactionReceipt(l(this, vs));
    s && n.emit(l(this, vs), s);
  }
}
vs = new WeakMap();
var Zt, Ss, Us, On, nt, f0, ad;
class hc {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(e, t) {
    w(this, f0);
    w(this, Zt, void 0);
    w(this, Ss, void 0);
    w(this, Us, void 0);
    w(this, On, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    w(this, nt, void 0);
    h(this, Zt, e), h(this, Ss, Eo(t)), h(this, Us, I(this, f0, ad).bind(this)), h(this, On, !1), h(this, nt, -2);
  }
  start() {
    l(this, On) || (h(this, On, !0), l(this, nt) === -2 && l(this, Zt).getBlockNumber().then((e) => {
      h(this, nt, e);
    }), l(this, Zt).on("block", l(this, Us)));
  }
  stop() {
    l(this, On) && (h(this, On, !1), l(this, Zt).off("block", l(this, Us)));
  }
  pause(e) {
    this.stop(), e && h(this, nt, -2);
  }
  resume() {
    this.start();
  }
}
Zt = new WeakMap(), Ss = new WeakMap(), Us = new WeakMap(), On = new WeakMap(), nt = new WeakMap(), f0 = new WeakSet(), ad = async function(e) {
  if (l(this, nt) === -2)
    return;
  const t = Eo(l(this, Ss));
  t.fromBlock = l(this, nt) + 1, t.toBlock = e;
  const n = await l(this, Zt).getLogs(t);
  if (n.length === 0) {
    l(this, nt) < e - 60 && h(this, nt, e - 60);
    return;
  }
  for (const s of n)
    l(this, Zt).emit(l(this, Ss), s), h(this, nt, s.blockNumber);
};
const ob = BigInt(2), cb = 10;
function Na(r) {
  return r && typeof r.then == "function";
}
function Da(r, e) {
  return r + ":" + JSON.stringify(e, (t, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, a) => (i[a] = n[a], i), {});
    }
    return n;
  });
}
class od {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(e) {
    /**
     *  The name fof the event.
     */
    y(this, "name");
    D(this, { name: e });
  }
  start() {
  }
  stop() {
  }
  pause(e) {
  }
  resume() {
  }
}
function fb(r) {
  return JSON.parse(JSON.stringify(r));
}
function No(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function J0(r, e) {
  if (r == null)
    throw new Error("invalid event");
  if (Array.isArray(r) && (r = { topics: r }), typeof r == "string")
    switch (r) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: r, tag: r };
    }
  if (ee(r, 32)) {
    const t = r.toLowerCase();
    return { type: "transaction", tag: Da("tx", { hash: t }), hash: t };
  }
  if (r.orphan) {
    const t = r;
    return { type: "orphan", tag: Da("orphan", t), filter: fb(t) };
  }
  if (r.address || r.topics) {
    const t = r, n = {
      topics: (t.topics || []).map((s) => s == null ? null : Array.isArray(s) ? No(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (t.address) {
      const s = [], i = [], a = (o) => {
        ee(o) ? s.push(o) : i.push((async () => {
          s.push(await we(o, e));
        })());
      };
      Array.isArray(t.address) ? t.address.forEach(a) : a(t.address), i.length && await Promise.all(i), n.address = No(s.map((o) => o.toLowerCase()));
    }
    return { filter: n, tag: Da("event", n), type: "event" };
  }
  b(!1, "unknown ProviderEvent", "event", r);
}
function j0() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const lb = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Pe, Rn, Te, Ls, ze, ur, Bn, Yt, Wi, rt, Ds, Fs, Re, He, Zi, Po, Yi, To, dr, bi, Xi, Io, hr, pi, Ms, Fa;
class ub {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(e, t) {
    // Shares multiple identical requests made during the same 250ms
    w(this, Re);
    w(this, Zi);
    w(this, Yi);
    // Account
    w(this, dr);
    w(this, Xi);
    w(this, hr);
    w(this, Ms);
    w(this, Pe, void 0);
    w(this, Rn, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    w(this, Te, void 0);
    w(this, Ls, void 0);
    w(this, ze, void 0);
    w(this, ur, void 0);
    w(this, Bn, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    w(this, Yt, void 0);
    w(this, Wi, void 0);
    w(this, rt, void 0);
    w(this, Ds, void 0);
    w(this, Fs, void 0);
    if (h(this, Fs, Object.assign({}, lb, t || {})), e === "any")
      h(this, ur, !0), h(this, ze, null);
    else if (e) {
      const n = St.from(e);
      h(this, ur, !1), h(this, ze, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      h(this, ur, !1), h(this, ze, null);
    h(this, Yt, -1), h(this, Bn, /* @__PURE__ */ new Map()), h(this, Pe, /* @__PURE__ */ new Map()), h(this, Rn, /* @__PURE__ */ new Map()), h(this, Te, null), h(this, Ls, !1), h(this, Wi, 1), h(this, rt, /* @__PURE__ */ new Map()), h(this, Ds, !1);
  }
  get pollingInterval() {
    return l(this, Fs).pollingInterval;
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(l(this, Rn).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(e) {
    if (l(this, Rn).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return l(this, Rn).set(e.name, e.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(e) {
    return l(this, Rn).get(e) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return l(this, Ds);
  }
  set disableCcipRead(e) {
    h(this, Ds, !!e);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(e, t, n) {
    if (this.disableCcipRead || n.length === 0 || e.to == null)
      return null;
    const s = e.to.toLowerCase(), i = t.toLowerCase(), a = [];
    for (let o = 0; o < n.length; o++) {
      const c = n[o], f = c.replace("{sender}", s).replace("{data}", i), u = new rn(f);
      c.indexOf("{data}") === -1 && (u.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: u, index: o, urls: n });
      let d = "unknown error";
      const x = await u.send();
      try {
        const p = x.bodyJson;
        if (p.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: u, result: p }), p.data;
        p.message && (d = p.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: u, result: p });
      } catch {
      }
      N(x.statusCode < 400 || x.statusCode >= 500, `response not found during CCIP fetch: ${d}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: e, info: { url: c, errorMessage: d } }), a.push(d);
    }
    N(!1, `error encountered during CCIP fetch: ${a.map((o) => JSON.stringify(o)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: e,
      info: { urls: n, errorMessages: a }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(e, t) {
    return new B6(Z6(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(e, t) {
    return new ca(j6(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(e, t) {
    return new Ju(q6(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(e, t) {
    return new Si(id(e), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    N(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(e) {
    N(!1, `unsupported method: ${e.method}`, "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: e
    });
  }
  // State
  async getBlockNumber() {
    const e = K(await I(this, Re, He).call(this, { method: "getBlockNumber" }), "%response");
    return l(this, Yt) >= 0 && h(this, Yt, e), e;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(e) {
    return we(e, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(e) {
    if (e == null)
      return "latest";
    switch (e) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return e;
    }
    if (ee(e))
      return ee(e, 32) ? e : jr(e);
    if (typeof e == "bigint" && (e = K(e, "blockTag")), typeof e == "number")
      return e >= 0 ? jr(e) : l(this, Yt) >= 0 ? jr(l(this, Yt) + e) : this.getBlockNumber().then((t) => jr(t + e));
    b(!1, "invalid blockTag", "blockTag", e);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(e) {
    const t = (e.topics || []).map((c) => c == null ? null : Array.isArray(c) ? No(c.map((f) => f.toLowerCase())) : c.toLowerCase()), n = "blockHash" in e ? e.blockHash : void 0, s = (c, f, u) => {
      let d;
      switch (c.length) {
        case 0:
          break;
        case 1:
          d = c[0];
          break;
        default:
          c.sort(), d = c;
      }
      if (n && (f != null || u != null))
        throw new Error("invalid filter");
      const x = {};
      return d && (x.address = d), t.length && (x.topics = t), f && (x.fromBlock = f), u && (x.toBlock = u), n && (x.blockHash = n), x;
    };
    let i = [];
    if (e.address)
      if (Array.isArray(e.address))
        for (const c of e.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(e.address));
    let a;
    "fromBlock" in e && (a = this._getBlockTag(e.fromBlock));
    let o;
    return "toBlock" in e && (o = this._getBlockTag(e.toBlock)), i.filter((c) => typeof c != "string").length || a != null && typeof a != "string" || o != null && typeof o != "string" ? Promise.all([Promise.all(i), a, o]).then((c) => s(c[0], c[1], c[2])) : s(i, a, o);
  }
  /**
   *  Returns or resolves to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(e) {
    const t = Za(e), n = [];
    if (["to", "from"].forEach((s) => {
      if (t[s] == null)
        return;
      const i = we(t[s], this);
      Na(i) ? n.push(async function() {
        t[s] = await i;
      }()) : t[s] = i;
    }), t.blockTag != null) {
      const s = this._getBlockTag(t.blockTag);
      Na(s) ? n.push(async function() {
        t.blockTag = await s;
      }()) : t.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), t;
    }() : t;
  }
  async getNetwork() {
    if (l(this, ze) == null) {
      const s = (async () => {
        try {
          const i = await this._detectNetwork();
          return this.emit("network", i, null), i;
        } catch (i) {
          throw l(this, ze) === s && h(this, ze, null), i;
        }
      })();
      return h(this, ze, s), (await s).clone();
    }
    const e = l(this, ze), [t, n] = await Promise.all([
      e,
      this._detectNetwork()
      // The actual connected network
    ]);
    return t.chainId !== n.chainId && (l(this, ur) ? (this.emit("network", n, t), l(this, ze) === e && h(this, ze, Promise.resolve(n))) : N(!1, `network changed: ${t.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), t.clone();
  }
  async getFeeData() {
    const e = await this.getNetwork(), t = async () => {
      const { _block: s, gasPrice: i, priorityFee: a } = await Ie({
        _block: I(this, Xi, Io).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const u = await I(this, Re, He).call(this, { method: "getGasPrice" });
            return L(u, "%response");
          } catch {
          }
          return null;
        })(),
        priorityFee: (async () => {
          try {
            const u = await I(this, Re, He).call(this, { method: "getPriorityFee" });
            return L(u, "%response");
          } catch {
          }
          return null;
        })()
      });
      let o = null, c = null;
      const f = this._wrapBlock(s, e);
      return f && f.baseFeePerGas && (c = a ?? BigInt("1000000000"), o = f.baseFeePerGas * ob + c), new Of(i, o, c);
    }, n = e.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new rn(n.url), i = await n.processFunc(t, this, s);
      return new Of(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await t();
  }
  async estimateGas(e) {
    let t = this._getTransactionRequest(e);
    return Na(t) && (t = await t), L(await I(this, Re, He).call(this, {
      method: "estimateGas",
      transaction: t
    }), "%response");
  }
  async call(e) {
    const { tx: t, blockTag: n } = await Ie({
      tx: this._getTransactionRequest(e),
      blockTag: this._getBlockTag(e.blockTag)
    });
    return await I(this, Yi, To).call(this, I(this, Zi, Po).call(this, t, n, e.enableCcipRead ? 0 : -1));
  }
  async getBalance(e, t) {
    return L(await I(this, dr, bi).call(this, { method: "getBalance" }, e, t), "%response");
  }
  async getTransactionCount(e, t) {
    return K(await I(this, dr, bi).call(this, { method: "getTransactionCount" }, e, t), "%response");
  }
  async getCode(e, t) {
    return P(await I(this, dr, bi).call(this, { method: "getCode" }, e, t));
  }
  async getStorage(e, t, n) {
    const s = L(t, "position");
    return P(await I(this, dr, bi).call(this, { method: "getStorage", position: s }, e, n));
  }
  // Write
  async broadcastTransaction(e) {
    const { blockNumber: t, hash: n, network: s } = await Ie({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: e
      }),
      network: this.getNetwork()
    }), i = Oi.from(e);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(t);
  }
  // Queries
  async getBlock(e, t) {
    const { network: n, params: s } = await Ie({
      network: this.getNetwork(),
      params: I(this, Xi, Io).call(this, e, !!t)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(e) {
    const { network: t, params: n } = await Ie({
      network: this.getNetwork(),
      params: I(this, Re, He).call(this, { method: "getTransaction", hash: e })
    });
    return n == null ? null : this._wrapTransactionResponse(n, t);
  }
  async getTransactionReceipt(e) {
    const { network: t, params: n } = await Ie({
      network: this.getNetwork(),
      params: I(this, Re, He).call(this, { method: "getTransactionReceipt", hash: e })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await I(this, Re, He).call(this, { method: "getTransaction", hash: e });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, t);
  }
  async getTransactionResult(e) {
    const { result: t } = await Ie({
      network: this.getNetwork(),
      result: I(this, Re, He).call(this, { method: "getTransactionResult", hash: e })
    });
    return t == null ? null : P(t);
  }
  // Bloom-filter Queries
  async getLogs(e) {
    let t = this._getFilter(e);
    Na(t) && (t = await t);
    const { network: n, params: s } = await Ie({
      network: this.getNetwork(),
      params: I(this, Re, He).call(this, { method: "getLogs", filter: t })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(e) {
    N(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(e) {
    return await Xa.fromName(this, e);
  }
  async getAvatar(e) {
    const t = await this.getResolver(e);
    return t ? await t.getAvatar() : null;
  }
  async resolveName(e) {
    const t = await this.getResolver(e);
    return t ? await t.getAddress() : null;
  }
  async lookupAddress(e) {
    e = J(e);
    const t = yo(e.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await Xa.getEnsAddress(this), i = await new es(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(t);
      if (i == null || i === Pi)
        return null;
      const o = await new es(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(t);
      return await this.resolveName(o) !== e ? null : o;
    } catch (n) {
      if (Ce(n, "BAD_DATA") && n.value === "0x" || Ce(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(e, t, n) {
    const s = t ?? 1;
    return s === 0 ? this.getTransactionReceipt(e) : new Promise(async (i, a) => {
      let o = null;
      const c = async (f) => {
        try {
          const u = await this.getTransactionReceipt(e);
          if (u != null && f - u.blockNumber + 1 >= s) {
            i(u), o && (clearTimeout(o), o = null);
            return;
          }
        } catch (u) {
          console.log("EEE", u);
        }
        this.once("block", c);
      };
      n != null && (o = setTimeout(() => {
        o != null && (o = null, this.off("block", c), a(ue("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(e) {
    N(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(e) {
    const t = l(this, rt).get(e);
    t && (t.timer && clearTimeout(t.timer), l(this, rt).delete(e));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(e, t) {
    t == null && (t = 0);
    const n = Dr(this, Wi)._++, s = () => {
      l(this, rt).delete(n), e();
    };
    if (this.paused)
      l(this, rt).set(n, { timer: null, func: s, time: t });
    else {
      const i = setTimeout(s, t);
      l(this, rt).set(n, { timer: i, func: s, time: j0() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(e) {
    for (const t of l(this, Pe).values())
      e(t.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(e) {
    switch (e.type) {
      case "debug":
      case "error":
      case "network":
        return new od(e.type);
      case "block": {
        const t = new rb(this);
        return t.pollingInterval = this.pollingInterval, t;
      }
      case "safe":
      case "finalized":
        return new sb(this, e.type);
      case "event":
        return new hc(this, e.filter);
      case "transaction":
        return new ab(this, e.hash);
      case "orphan":
        return new ib(this, e.filter);
    }
    throw new Error(`unsupported event: ${e.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(e, t) {
    for (const n of l(this, Pe).values())
      if (n.subscriber === e) {
        n.started && n.subscriber.stop(), n.subscriber = t, n.started && t.start(), l(this, Te) != null && t.pause(l(this, Te));
        break;
      }
  }
  async on(e, t) {
    const n = await I(this, Ms, Fa).call(this, e);
    return n.listeners.push({ listener: t, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Te) != null && n.subscriber.pause(l(this, Te))), this;
  }
  async once(e, t) {
    const n = await I(this, Ms, Fa).call(this, e);
    return n.listeners.push({ listener: t, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, l(this, Te) != null && n.subscriber.pause(l(this, Te))), this;
  }
  async emit(e, ...t) {
    const n = await I(this, hr, pi).call(this, e, t);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: a }) => {
      const o = new nl(this, a ? null : i, e);
      try {
        i.call(this, ...t, o);
      } catch {
      }
      return !a;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), l(this, Pe).delete(n.tag)), s > 0;
  }
  async listenerCount(e) {
    if (e) {
      const n = await I(this, hr, pi).call(this, e);
      return n ? n.listeners.length : 0;
    }
    let t = 0;
    for (const { listeners: n } of l(this, Pe).values())
      t += n.length;
    return t;
  }
  async listeners(e) {
    if (e) {
      const n = await I(this, hr, pi).call(this, e);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let t = [];
    for (const { listeners: n } of l(this, Pe).values())
      t = t.concat(n.map(({ listener: s }) => s));
    return t;
  }
  async off(e, t) {
    const n = await I(this, hr, pi).call(this, e);
    if (!n)
      return this;
    if (t) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!t || n.listeners.length === 0) && (n.started && n.subscriber.stop(), l(this, Pe).delete(n.tag)), this;
  }
  async removeAllListeners(e) {
    if (e) {
      const { tag: t, started: n, subscriber: s } = await I(this, Ms, Fa).call(this, e);
      n && s.stop(), l(this, Pe).delete(t);
    } else
      for (const [t, { started: n, subscriber: s }] of l(this, Pe))
        n && s.stop(), l(this, Pe).delete(t);
    return this;
  }
  // Alias for "on"
  async addListener(e, t) {
    return await this.on(e, t);
  }
  // Alias for "off"
  async removeListener(e, t) {
    return this.off(e, t);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return l(this, Ls);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const e of l(this, rt).keys())
      this._clearTimeout(e);
    h(this, Ls, !0);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return l(this, Te) != null;
  }
  set paused(e) {
    !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(e) {
    if (h(this, Yt, -1), l(this, Te) != null) {
      if (l(this, Te) == !!e)
        return;
      N(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((t) => t.pause(e)), h(this, Te, !!e);
    for (const t of l(this, rt).values())
      t.timer && clearTimeout(t.timer), t.time = j0() - t.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (l(this, Te) != null) {
      this._forEachSubscriber((e) => e.resume()), h(this, Te, null);
      for (const e of l(this, rt).values()) {
        let t = e.time;
        t < 0 && (t = 0), e.time = j0(), setTimeout(e.func, t);
      }
    }
  }
}
Pe = new WeakMap(), Rn = new WeakMap(), Te = new WeakMap(), Ls = new WeakMap(), ze = new WeakMap(), ur = new WeakMap(), Bn = new WeakMap(), Yt = new WeakMap(), Wi = new WeakMap(), rt = new WeakMap(), Ds = new WeakMap(), Fs = new WeakMap(), Re = new WeakSet(), He = async function(e) {
  const t = l(this, Fs).cacheTimeout;
  if (t < 0)
    return await this._perform(e);
  const n = Da(e.method, e);
  let s = l(this, Bn).get(n);
  return s || (s = this._perform(e), l(this, Bn).set(n, s), setTimeout(() => {
    l(this, Bn).get(n) === s && l(this, Bn).delete(n);
  }, t)), await s;
}, Zi = new WeakSet(), Po = async function(e, t, n) {
  N(n < cb, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, e, { blockTag: t, enableCcipRead: !0 })
  });
  const s = Za(e);
  try {
    return P(await this._perform({ method: "call", transaction: s, blockTag: t }));
  } catch (i) {
    if (!this.disableCcipRead && Vo(i) && i.data && n >= 0 && t === "latest" && s.to != null && ne(i.data, 0, 4) === "0x556f1830") {
      const a = i.data, o = await we(s.to, this);
      let c;
      try {
        c = pb(ne(i.data, 4));
      } catch (d) {
        N(!1, d.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: a }
        });
      }
      N(c.sender.toLowerCase() === o.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: a,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const f = await this.ccipReadFetch(s, c.calldata, c.urls);
      N(f != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const u = {
        to: o,
        data: X([c.selector, bb([f, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: u });
      try {
        const d = await I(this, Zi, Po).call(this, u, t, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, u), result: d }), d;
      } catch (d) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, u), error: d }), d;
      }
    }
    throw i;
  }
}, Yi = new WeakSet(), To = async function(e) {
  const { value: t } = await Ie({
    network: this.getNetwork(),
    value: e
  });
  return t;
}, dr = new WeakSet(), bi = async function(e, t, n) {
  let s = this._getAddress(t), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await I(this, Yi, To).call(this, I(this, Re, He).call(this, Object.assign(e, { address: s, blockTag: i })));
}, Xi = new WeakSet(), Io = async function(e, t) {
  if (ee(e, 32))
    return await I(this, Re, He).call(this, {
      method: "getBlock",
      blockHash: e,
      includeTransactions: t
    });
  let n = this._getBlockTag(e);
  return typeof n != "string" && (n = await n), await I(this, Re, He).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: t
  });
}, hr = new WeakSet(), pi = async function(e, t) {
  let n = await J0(e, this);
  return n.type === "event" && t && t.length > 0 && t[0].removed === !0 && (n = await J0({ orphan: "drop-log", log: t[0] }, this)), l(this, Pe).get(n.tag) || null;
}, Ms = new WeakSet(), Fa = async function(e) {
  const t = await J0(e, this), n = t.tag;
  let s = l(this, Pe).get(n);
  return s || (s = { subscriber: this._getSubscriber(t), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, l(this, Pe).set(n, s)), s;
};
function db(r, e) {
  try {
    const t = Co(r, e);
    if (t)
      return Qa(t);
  } catch {
  }
  return null;
}
function Co(r, e) {
  if (r === "0x")
    return null;
  try {
    const t = K(ne(r, e, e + 32)), n = K(ne(r, t, t + 32));
    return ne(r, t + 32, t + 32 + n);
  } catch {
  }
  return null;
}
function Ff(r) {
  const e = ke(r);
  if (e.length > 32)
    throw new Error("internal; should not happen");
  const t = new Uint8Array(32);
  return t.set(e, 32 - e.length), t;
}
function hb(r) {
  if (r.length % 32 === 0)
    return r;
  const e = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return e.set(r), e;
}
const xb = new Uint8Array([]);
function bb(r) {
  const e = [];
  let t = 0;
  for (let n = 0; n < r.length; n++)
    e.push(xb), t += 32;
  for (let n = 0; n < r.length; n++) {
    const s = v(r[n]);
    e[n] = Ff(t), e.push(Ff(s.length)), e.push(hb(s)), t += 32 + Math.ceil(s.length / 32) * 32;
  }
  return X(e);
}
const Mf = "0x0000000000000000000000000000000000000000000000000000000000000000";
function pb(r) {
  const e = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  N(Yr(r) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const t = ne(r, 0, 32);
  N(ne(t, 0, 12) === ne(Mf, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), e.sender = ne(t, 12);
  try {
    const n = [], s = K(ne(r, 32, 64)), i = K(ne(r, s, s + 32)), a = ne(r, s + 32);
    for (let o = 0; o < i; o++) {
      const c = db(a, o * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    e.urls = n;
  } catch {
    N(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = Co(r, 64);
    if (n == null)
      throw new Error("abort");
    e.calldata = n;
  } catch {
    N(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  N(ne(r, 100, 128) === ne(Mf, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), e.selector = ne(r, 96, 100);
  try {
    const n = Co(r, 128);
    if (n == null)
      throw new Error("abort");
    e.extraData = n;
  } catch {
    N(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => e[n]), e;
}
function Mr(r, e) {
  if (r.provider)
    return r.provider;
  N(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: e });
}
async function Gf(r, e) {
  let t = Za(e);
  if (t.to != null && (t.to = we(t.to, r)), t.from != null) {
    const n = t.from;
    t.from = Promise.all([
      r.getAddress(),
      we(n, r)
    ]).then(([s, i]) => (b(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    t.from = r.getAddress();
  return await Ie(t);
}
class C0 {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(e) {
    /**
     *  The provider this signer is connected to.
     */
    y(this, "provider");
    D(this, { provider: e || null });
  }
  async getNonce(e) {
    return Mr(this, "getTransactionCount").getTransactionCount(await this.getAddress(), e);
  }
  async populateCall(e) {
    return await Gf(this, e);
  }
  async populateTransaction(e) {
    const t = Mr(this, "populateTransaction"), n = await Gf(this, e);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const a = L(n.chainId);
      b(a === s.chainId, "transaction chainId mismatch", "tx.chainId", e.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? b(!1, "eip-1559 transaction do not support gasPrice", "tx", e) : (n.type === 0 || n.type === 1) && i && b(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", e), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const a = await t.getFeeData();
      N(a.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = a.gasPrice);
    } else {
      const a = await t.getFeeData();
      if (n.type == null)
        if (a.maxFeePerGas != null && a.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const o = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = o, n.maxPriorityFeePerGas = o;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = a.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = a.maxPriorityFeePerGas);
        else
          a.gasPrice != null ? (N(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          }), n.gasPrice == null && (n.gasPrice = a.gasPrice), n.type = 0) : N(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
      else
        (n.type === 2 || n.type === 3) && (n.maxFeePerGas == null && (n.maxFeePerGas = a.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = a.maxPriorityFeePerGas));
    }
    return await Ie(n);
  }
  async estimateGas(e) {
    return Mr(this, "estimateGas").estimateGas(await this.populateCall(e));
  }
  async call(e) {
    return Mr(this, "call").call(await this.populateCall(e));
  }
  async resolveName(e) {
    return await Mr(this, "resolveName").resolveName(e);
  }
  async sendTransaction(e) {
    const t = Mr(this, "sendTransaction"), n = await this.populateTransaction(e);
    delete n.from;
    const s = Oi.from(n);
    return await t.broadcastTransaction(await this.signTransaction(s));
  }
}
var Gs, Ma;
const mc = class mc extends C0 {
  /**
   *  Creates a new **VoidSigner** with %%address%% attached to
   *  %%provider%%.
   */
  constructor(t, n) {
    super(n);
    w(this, Gs);
    /**
     *  The signer address.
     */
    y(this, "address");
    D(this, { address: t });
  }
  async getAddress() {
    return this.address;
  }
  connect(t) {
    return new mc(this.address, t);
  }
  async signTransaction(t) {
    I(this, Gs, Ma).call(this, "transactions", "signTransaction");
  }
  async signMessage(t) {
    I(this, Gs, Ma).call(this, "messages", "signMessage");
  }
  async signTypedData(t, n, s) {
    I(this, Gs, Ma).call(this, "typed-data", "signTypedData");
  }
};
Gs = new WeakSet(), Ma = function(t, n) {
  N(!1, `VoidSigner cannot sign ${t}`, "UNSUPPORTED_OPERATION", { operation: n });
};
let ko = mc;
function gb(r) {
  return JSON.parse(JSON.stringify(r));
}
var Be, Ot, xr, vn, br, Hs, $i, Oo, qi, Ro;
class cd {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(e) {
    w(this, $i);
    w(this, qi);
    w(this, Be, void 0);
    w(this, Ot, void 0);
    w(this, xr, void 0);
    w(this, vn, void 0);
    w(this, br, void 0);
    w(this, Hs, void 0);
    h(this, Be, e), h(this, Ot, null), h(this, xr, I(this, $i, Oo).bind(this)), h(this, vn, !1), h(this, br, null), h(this, Hs, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(e, t) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(e) {
    throw new Error("subclasses must override this");
  }
  start() {
    l(this, vn) || (h(this, vn, !0), I(this, $i, Oo).call(this, -2));
  }
  stop() {
    l(this, vn) && (h(this, vn, !1), h(this, Hs, !0), I(this, qi, Ro).call(this), l(this, Be).off("block", l(this, xr)));
  }
  pause(e) {
    e && I(this, qi, Ro).call(this), l(this, Be).off("block", l(this, xr));
  }
  resume() {
    this.start();
  }
}
Be = new WeakMap(), Ot = new WeakMap(), xr = new WeakMap(), vn = new WeakMap(), br = new WeakMap(), Hs = new WeakMap(), $i = new WeakSet(), Oo = async function(e) {
  try {
    l(this, Ot) == null && h(this, Ot, this._subscribe(l(this, Be)));
    let t = null;
    try {
      t = await l(this, Ot);
    } catch (i) {
      if (!Ce(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (t == null) {
      h(this, Ot, null), l(this, Be)._recoverSubscriber(this, this._recover(l(this, Be)));
      return;
    }
    const n = await l(this, Be).getNetwork();
    if (l(this, br) || h(this, br, n), l(this, br).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (l(this, Hs))
      return;
    const s = await l(this, Be).send("eth_getFilterChanges", [t]);
    await this._emitResults(l(this, Be), s);
  } catch (t) {
    console.log("@TODO", t);
  }
  l(this, Be).once("block", l(this, xr));
}, qi = new WeakSet(), Ro = function() {
  const e = l(this, Ot);
  e && (h(this, Ot, null), e.then((t) => {
    l(this, Be).destroyed || l(this, Be).send("eth_uninstallFilter", [t]);
  }));
};
var pr;
class yb extends cd {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(t, n) {
    super(t);
    w(this, pr, void 0);
    h(this, pr, gb(n));
  }
  _recover(t) {
    return new hc(t, l(this, pr));
  }
  async _subscribe(t) {
    return await t.send("eth_newFilter", [l(this, pr)]);
  }
  async _emitResults(t, n) {
    for (const s of n)
      t.emit(l(this, pr), t._wrapLog(s, t._network));
  }
}
pr = new WeakMap();
class mb extends cd {
  async _subscribe(e) {
    return await e.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(e, t) {
    for (const n of t)
      e.emit("pending", n);
  }
}
const wb = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Ga(r) {
  if (r == null || wb.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(Ga);
  if (typeof r == "object")
    return Object.keys(r).reduce((e, t) => (e[t] = r[t], e), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function Ab(r) {
  return new Promise((e) => {
    setTimeout(e, r);
  });
}
function Gr(r) {
  return r && r.toLowerCase();
}
function Hf(r) {
  return r && typeof r.pollingInterval == "number";
}
const fd = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class W0 extends C0 {
  constructor(t, n) {
    super(t);
    y(this, "address");
    n = J(n), D(this, { address: n });
  }
  connect(t) {
    N(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(t) {
    return await this.populateCall(t);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(t) {
    const n = Ga(t), s = [];
    if (n.from) {
      const a = n.from;
      s.push((async () => {
        const o = await we(a, this.provider);
        b(o != null && o.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), n.from = o;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const a = n.to;
      s.push((async () => {
        n.to = await we(a, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(t) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(t);
    return await new Promise((i, a) => {
      const o = [1e3, 100];
      let c = 0;
      const f = async () => {
        try {
          const u = await this.provider.getTransaction(s);
          if (u != null) {
            i(u.replaceableTransaction(n));
            return;
          }
        } catch (u) {
          if (Ce(u, "CANCELLED") || Ce(u, "BAD_DATA") || Ce(u, "NETWORK_ERROR")) {
            u.info == null && (u.info = {}), u.info.sendTransactionHash = s, a(u);
            return;
          }
          if (Ce(u, "INVALID_ARGUMENT") && (c++, u.info == null && (u.info = {}), u.info.sendTransactionHash = s, c > 10)) {
            a(u);
            return;
          }
          this.provider.emit("error", ue("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error: u }));
        }
        this.provider._setTimeout(() => {
          f();
        }, o.pop() || 4e3);
      };
      f();
    });
  }
  async signTransaction(t) {
    const n = Ga(t);
    if (n.from) {
      const i = await we(n.from, this.provider);
      b(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(t) {
    const n = typeof t == "string" ? Ue(t) : t;
    return await this.provider.send("personal_sign", [
      P(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(t, n, s) {
    const i = Ga(s), a = await $s.resolveNames(t, n, i, async (o) => {
      const c = await we(o);
      return b(c != null, "TypedData does not support null address", "value", o), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify($s.getPayload(a.domain, n, a.value))
    ]);
  }
  async unlock(t) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      t,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(t) {
    const n = typeof t == "string" ? Ue(t) : t;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      P(n)
    ]);
  }
}
var gr, Vs, Xt, Rt, bt, st, De, ea, Bo;
class Eb extends ub {
  constructor(t, n) {
    super(t, n);
    w(this, ea);
    w(this, gr, void 0);
    // The next ID to use for the JSON-RPC ID field
    w(this, Vs, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    w(this, Xt, void 0);
    w(this, Rt, void 0);
    w(this, bt, void 0);
    w(this, st, void 0);
    w(this, De, void 0);
    h(this, Vs, 1), h(this, gr, Object.assign({}, fd, n || {})), h(this, Xt, []), h(this, Rt, null), h(this, st, null), h(this, De, null);
    {
      let i = null;
      const a = new Promise((o) => {
        i = o;
      });
      h(this, bt, { promise: a, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    typeof s == "boolean" ? (b(!s || t !== "any", "staticNetwork cannot be used on special network 'any'", "options", n), s && t != null && h(this, st, St.from(t))) : s && (b(t == null || s.matches(t), "staticNetwork MUST match network object", "options", n), h(this, st, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(t) {
    return l(this, gr)[t];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return N(l(this, st), "network is not available yet", "NETWORK_ERROR"), l(this, st);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(t) {
    if (t.method === "call" || t.method === "estimateGas") {
      let s = t.transaction;
      if (s && s.type != null && L(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (t = Object.assign({}, t, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(t);
    return n != null ? await this.send(n.method, n.args) : super._perform(t);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const t = this._getOption("staticNetwork");
    if (t)
      if (t === !0) {
        if (l(this, st))
          return l(this, st);
      } else
        return t;
    return l(this, De) ? await l(this, De) : this.ready ? (h(this, De, (async () => {
      try {
        const n = St.from(L(await this.send("eth_chainId", [])));
        return h(this, De, null), n;
      } catch (n) {
        throw h(this, De, null), n;
      }
    })()), await l(this, De)) : (h(this, De, (async () => {
      const n = {
        id: Dr(this, Vs)._++,
        method: "eth_chainId",
        params: [],
        jsonrpc: "2.0"
      };
      this.emit("debug", { action: "sendRpcPayload", payload: n });
      let s;
      try {
        s = (await this._send(n))[0], h(this, De, null);
      } catch (i) {
        throw h(this, De, null), this.emit("debug", { action: "receiveRpcError", error: i }), i;
      }
      if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
        return St.from(L(s.result));
      throw this.getRpcError(n, s);
    })()), await l(this, De));
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    l(this, bt) == null || l(this, bt).resolve == null || (l(this, bt).resolve(), h(this, bt, null), (async () => {
      for (; l(this, st) == null && !this.destroyed; )
        try {
          h(this, st, await this._detectNetwork());
        } catch (t) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", ue("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: t } })), await Ab(1e3);
        }
      I(this, ea, Bo).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (l(this, bt) != null)
      return await l(this, bt).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(t) {
    return t.type === "pending" ? new mb(this) : t.type === "event" ? this._getOption("polling") ? new hc(this, t.filter) : new yb(this, t.filter) : t.type === "orphan" && t.filter.orphan === "drop-log" ? new od("orphan") : super._getSubscriber(t);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return l(this, bt) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(t) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (t[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = jr(L(t[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      t[s] != null && (n[s] = P(t[s]));
    }), t.accessList && (n.accessList = Br(t.accessList)), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(t) {
    switch (t.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getPriorityFee":
        return { method: "eth_maxPriorityFeePerGas", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [Gr(t.address), t.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [Gr(t.address), t.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [Gr(t.address), t.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            Gr(t.address),
            "0x" + t.position.toString(16),
            t.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [t.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in t)
          return {
            method: "eth_getBlockByNumber",
            args: [t.blockTag, !!t.includeTransactions]
          };
        if ("blockHash" in t)
          return {
            method: "eth_getBlockByHash",
            args: [t.blockHash, !!t.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [t.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [t.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(t.transaction), t.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(t.transaction)]
        };
      case "getLogs":
        return t.filter && t.filter.address != null && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(Gr) : t.filter.address = Gr(t.filter.address)), { method: "eth_getLogs", args: [t.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(t, n) {
    const { method: s } = t, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return ue("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: t.params[0],
          info: { payload: t, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = vo(i), f = Bi.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", t.params[0], c ? c.data : null);
      return f.info = { error: i, payload: t }, f;
    }
    const a = JSON.stringify(Tb(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return ue("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[s] || "unknown",
        reason: "rejected",
        info: { payload: t, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = t.params[0];
      if (a.match(/insufficient funds|base fee exceeds gas limit/i))
        return ue("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (a.match(/nonce/i) && a.match(/too low/i))
        return ue("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (a.match(/replacement transaction/i) && a.match(/underpriced/i))
        return ue("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (a.match(/only replay-protected/i))
        return ue("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let o = !!a.match(/the method .* does not exist/i);
    return o || i && i.details && i.details.startsWith("Unauthorized method:") && (o = !0), o ? ue("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: { error: i, payload: t }
    }) : ue("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: t });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(t, n) {
    if (this.destroyed)
      return Promise.reject(ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t }));
    const s = Dr(this, Vs)._++, i = new Promise((a, o) => {
      l(this, Xt).push({
        resolve: a,
        reject: o,
        payload: { method: t, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return I(this, ea, Bo).call(this), i;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(t) {
    t == null && (t = 0);
    const n = this.send("eth_accounts", []);
    if (typeof t == "number") {
      const i = await n;
      if (t >= i.length)
        throw new Error("no such account");
      return new W0(this, i[t]);
    }
    const { accounts: s } = await Ie({
      network: this.getNetwork(),
      accounts: n
    });
    t = J(t);
    for (const i of s)
      if (J(i) === t)
        return new W0(this, t);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new W0(this, n));
  }
  destroy() {
    l(this, Rt) && (clearTimeout(l(this, Rt)), h(this, Rt, null));
    for (const { payload: t, reject: n } of l(this, Xt))
      n(ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t.method }));
    h(this, Xt, []), super.destroy();
  }
}
gr = new WeakMap(), Vs = new WeakMap(), Xt = new WeakMap(), Rt = new WeakMap(), bt = new WeakMap(), st = new WeakMap(), De = new WeakMap(), ea = new WeakSet(), Bo = function() {
  if (l(this, Rt))
    return;
  const t = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  h(this, Rt, setTimeout(() => {
    h(this, Rt, null);
    const n = l(this, Xt);
    for (h(this, Xt, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== l(this, gr).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((a) => a.payload)).length > l(this, gr).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((a) => a.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const a = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: a });
          for (const { resolve: o, reject: c, payload: f } of s) {
            if (this.destroyed) {
              c(ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: f.method }));
              continue;
            }
            const u = a.filter((d) => d.id === f.id)[0];
            if (u == null) {
              const d = ue("missing response for request", "BAD_DATA", {
                value: a,
                info: { payload: f }
              });
              this.emit("error", d), c(d);
              continue;
            }
            if ("error" in u) {
              c(this.getRpcError(f, u));
              continue;
            }
            o(u.result);
          }
        } catch (a) {
          this.emit("debug", { action: "receiveRpcError", error: a });
          for (const { reject: o } of s)
            o(a);
        }
      })();
    }
  }, t));
};
var Sn;
class Nb extends Eb {
  constructor(t, n) {
    super(t, n);
    w(this, Sn, void 0);
    let s = this._getOption("pollingInterval");
    s == null && (s = fd.pollingInterval), h(this, Sn, s);
  }
  _getSubscriber(t) {
    const n = super._getSubscriber(t);
    return Hf(n) && (n.pollingInterval = l(this, Sn)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return l(this, Sn);
  }
  set pollingInterval(t) {
    if (!Number.isInteger(t) || t < 0)
      throw new Error("invalid interval");
    h(this, Sn, t), this._forEachSubscriber((n) => {
      Hf(n) && (n.pollingInterval = l(this, Sn));
    });
  }
}
Sn = new WeakMap();
var Qs;
class Pb extends Nb {
  constructor(t, n, s) {
    t == null && (t = "http://localhost:8545");
    super(n, s);
    w(this, Qs, void 0);
    typeof t == "string" ? h(this, Qs, new rn(t)) : h(this, Qs, t.clone());
  }
  _getConnection() {
    return l(this, Qs).clone();
  }
  async send(t, n) {
    return await this._start(), await super.send(t, n);
  }
  async _send(t) {
    const n = this._getConnection();
    n.body = JSON.stringify(t), n.setHeader("content-type", "application/json");
    const s = await n.send();
    s.assertOk();
    let i = s.bodyJson;
    return Array.isArray(i) || (i = [i]), i;
  }
}
Qs = new WeakMap();
function vo(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && ee(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const e in r) {
      const t = vo(r[e]);
      if (t)
        return t;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return vo(JSON.parse(r));
    } catch {
    }
  return null;
}
function So(r, e) {
  if (r != null) {
    if (typeof r.message == "string" && e.push(r.message), typeof r == "object")
      for (const t in r)
        So(r[t], e);
    if (typeof r == "string")
      try {
        return So(JSON.parse(r), e);
      } catch {
      }
  }
}
function Tb(r) {
  const e = [];
  return So(r, e), e;
}
var Un, yr;
const wc = class wc extends C0 {
  /**
   *  Creates a new **NonceManager** to manage %%signer%%.
   */
  constructor(t) {
    super(t.provider);
    /**
     *  The Signer being managed.
     */
    y(this, "signer");
    w(this, Un, void 0);
    w(this, yr, void 0);
    D(this, { signer: t }), h(this, Un, null), h(this, yr, 0);
  }
  async getAddress() {
    return this.signer.getAddress();
  }
  connect(t) {
    return new wc(this.signer.connect(t));
  }
  async getNonce(t) {
    if (t === "pending") {
      l(this, Un) == null && h(this, Un, super.getNonce("pending"));
      const n = l(this, yr);
      return await l(this, Un) + n;
    }
    return super.getNonce(t);
  }
  /**
   *  Manually increment the nonce. This may be useful when managng
   *  offline transactions.
   */
  increment() {
    Dr(this, yr)._++;
  }
  /**
   *  Resets the nonce, causing the **NonceManager** to reload the current
   *  nonce from the blockchain on the next transaction.
   */
  reset() {
    h(this, yr, 0), h(this, Un, null);
  }
  async sendTransaction(t) {
    const n = this.getNonce("pending");
    return this.increment(), t = await this.signer.populateTransaction(t), t.nonce = await n, await this.signer.sendTransaction(t);
  }
  signTransaction(t) {
    return this.signer.signTransaction(t);
  }
  signMessage(t) {
    return this.signer.signMessage(t);
  }
  signTypedData(t, n, s) {
    return this.signer.signTypedData(t, n, s);
  }
};
Un = new WeakMap(), yr = new WeakMap();
let Uo = wc;
var Ks;
const Ac = class Ac extends C0 {
  /**
   *  Creates a new BaseWallet for %%privateKey%%, optionally
   *  connected to %%provider%%.
   *
   *  If %%provider%% is not specified, only offline methods can
   *  be used.
   */
  constructor(t, n) {
    super(n);
    /**
     *  The wallet address.
     */
    y(this, "address");
    w(this, Ks, void 0);
    b(t && typeof t.sign == "function", "invalid private key", "privateKey", "[ REDACTED ]"), h(this, Ks, t);
    const s = aa(this.signingKey.publicKey);
    D(this, { address: s });
  }
  // Store private values behind getters to reduce visibility
  // in console.log
  /**
   *  The [[SigningKey]] used for signing payloads.
   */
  get signingKey() {
    return l(this, Ks);
  }
  /**
   *  The private key for this wallet.
   */
  get privateKey() {
    return this.signingKey.privateKey;
  }
  async getAddress() {
    return this.address;
  }
  connect(t) {
    return new Ac(l(this, Ks), t);
  }
  async signTransaction(t) {
    const { to: n, from: s } = await Ie({
      to: t.to ? we(t.to, this.provider) : void 0,
      from: t.from ? we(t.from, this.provider) : void 0
    });
    n != null && (t.to = n), s != null && (t.from = s), t.from != null && (b(J(t.from) === this.address, "transaction from address mismatch", "tx.from", t.from), delete t.from);
    const i = Oi.from(t);
    return i.signature = this.signingKey.sign(i.unsignedHash), i.serialized;
  }
  async signMessage(t) {
    return this.signMessageSync(t);
  }
  // @TODO: Add a secialized signTx and signTyped sync that enforces
  // all parameters are known?
  /**
   *  Returns the signature for %%message%% signed with this wallet.
   */
  signMessageSync(t) {
    return this.signingKey.sign(a6(t)).serialized;
  }
  async signTypedData(t, n, s) {
    const i = await $s.resolveNames(t, n, s, async (a) => {
      N(this.provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", {
        operation: "resolveName",
        info: { name: a }
      });
      const o = await this.provider.resolveName(a);
      return N(o != null, "unconfigured ENS name", "UNCONFIGURED_NAME", {
        value: a
      }), o;
    });
    return this.signingKey.sign($s.hash(i.domain, n, i.value)).serialized;
  }
};
Ks = new WeakMap();
let $a = Ac;
const qa = " !#$%&'()*+,-./<=>?@[]^_`{|}~", Ib = /^[a-z]*$/i;
function Vf(r, e) {
  let t = 97;
  return r.reduce((n, s) => (s === e ? t++ : s.match(Ib) ? n.push(String.fromCharCode(t) + s) : (t = 97, n.push(s)), n), []);
}
function Cb(r, e) {
  for (let s = qa.length - 1; s >= 0; s--)
    r = r.split(qa[s]).join(e.substring(2 * s, 2 * s + 2));
  const t = [], n = r.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (s, i, a, o) => {
    if (a)
      for (let c = parseInt(a); c >= 0; c--)
        t.push(";");
    else
      t.push(i.toLowerCase());
    return "";
  });
  if (n)
    throw new Error(`leftovers: ${JSON.stringify(n)}`);
  return Vf(Vf(t, ";"), ":");
}
function kb(r) {
  return b(r[0] === "0", "unsupported auwl data", "data", r), Cb(r.substring(1 + 2 * qa.length), r.substring(1, 1 + 2 * qa.length));
}
class Ob {
  /**
   *  Creates a new Wordlist instance.
   *
   *  Sub-classes MUST call this if they provide their own constructor,
   *  passing in the locale string of the language.
   *
   *  Generally there is no need to create instances of a Wordlist,
   *  since each language-specific Wordlist creates an instance and
   *  there is no state kept internally, so they are safe to share.
   */
  constructor(e) {
    y(this, "locale");
    D(this, { locale: e });
  }
  /**
   *  Sub-classes may override this to provide a language-specific
   *  method for spliting %%phrase%% into individual words.
   *
   *  By default, %%phrase%% is split using any sequences of
   *  white-space as defined by regular expressions (i.e. ``/\s+/``).
   */
  split(e) {
    return e.toLowerCase().split(/\s+/g);
  }
  /**
   *  Sub-classes may override this to provider a language-specific
   *  method for joining %%words%% into a phrase.
   *
   *  By default, %%words%% are joined by a single space.
   */
  join(e) {
    return e.join(" ");
  }
}
var _s, ta, mr, na, Lo;
class Rb extends Ob {
  /**
   *  Creates a new Wordlist for %%locale%% using the OWL %%data%%
   *  and validated against the %%checksum%%.
   */
  constructor(t, n, s) {
    super(t);
    w(this, na);
    w(this, _s, void 0);
    w(this, ta, void 0);
    w(this, mr, void 0);
    h(this, _s, n), h(this, ta, s), h(this, mr, null);
  }
  /**
   *  The OWL-encoded data.
   */
  get _data() {
    return l(this, _s);
  }
  /**
   *  Decode all the words for the wordlist.
   */
  _decodeWords() {
    return kb(l(this, _s));
  }
  getWord(t) {
    const n = I(this, na, Lo).call(this);
    return b(t >= 0 && t < n.length, `invalid word index: ${t}`, "index", t), n[t];
  }
  getWordIndex(t) {
    return I(this, na, Lo).call(this).indexOf(t);
  }
}
_s = new WeakMap(), ta = new WeakMap(), mr = new WeakMap(), na = new WeakSet(), Lo = function() {
  if (l(this, mr) == null) {
    const t = this._decodeWords();
    if (sn(t.join(`
`) + `
`) !== l(this, ta))
      throw new Error(`BIP39 Wordlist for ${this.locale} FAILED`);
    h(this, mr, t);
  }
  return l(this, mr);
};
const Bb = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO", vb = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
let Z0 = null;
class Or extends Rb {
  /**
   *  Creates a new instance of the English language Wordlist.
   *
   *  This should be unnecessary most of the time as the exported
   *  [[langEn]] should suffice.
   *
   *  @_ignore:
   */
  constructor() {
    super("en", Bb, vb);
  }
  /**
   *  Returns a singleton instance of a ``LangEn``, creating it
   *  if this is the first time being called.
   */
  static wordlist() {
    return Z0 == null && (Z0 = new Or()), Z0;
  }
}
function ld(r) {
  return (1 << r) - 1 << 8 - r & 255;
}
function Sb(r) {
  return (1 << r) - 1 & 255;
}
function Y0(r, e) {
  Xf("NFKD"), e == null && (e = Or.wordlist());
  const t = e.split(r);
  b(t.length % 3 === 0 && t.length >= 12 && t.length <= 24, "invalid mnemonic length", "mnemonic", "[ REDACTED ]");
  const n = new Uint8Array(Math.ceil(11 * t.length / 8));
  let s = 0;
  for (let f = 0; f < t.length; f++) {
    let u = e.getWordIndex(t[f].normalize("NFKD"));
    b(u >= 0, `invalid mnemonic word at index ${f}`, "mnemonic", "[ REDACTED ]");
    for (let d = 0; d < 11; d++)
      u & 1 << 10 - d && (n[s >> 3] |= 1 << 7 - s % 8), s++;
  }
  const i = 32 * t.length / 3, a = t.length / 3, o = ld(a), c = v(at(n.slice(0, i / 8)))[0] & o;
  return b(c === (n[n.length - 1] & o), "invalid mnemonic checksum", "mnemonic", "[ REDACTED ]"), P(n.slice(0, i / 8));
}
function X0(r, e) {
  b(r.length % 4 === 0 && r.length >= 16 && r.length <= 32, "invalid entropy size", "entropy", "[ REDACTED ]"), e == null && (e = Or.wordlist());
  const t = [0];
  let n = 11;
  for (let a = 0; a < r.length; a++)
    n > 8 ? (t[t.length - 1] <<= 8, t[t.length - 1] |= r[a], n -= 8) : (t[t.length - 1] <<= n, t[t.length - 1] |= r[a] >> 8 - n, t.push(r[a] & Sb(8 - n)), n += 3);
  const s = r.length / 4, i = parseInt(at(r).substring(2, 4), 16) & ld(s);
  return t[t.length - 1] <<= s, t[t.length - 1] |= i >> 8 - s, e.join(t.map((a) => e.getWord(a)));
}
const $0 = {};
class ei {
  /**
   *  @private
   */
  constructor(e, t, n, s, i) {
    /**
     *  The mnemonic phrase of 12, 15, 18, 21 or 24 words.
     *
     *  Use the [[wordlist]] ``split`` method to get the individual words.
     */
    y(this, "phrase");
    /**
     *  The password used for this mnemonic. If no password is used this
     *  is the empty string (i.e. ``""``) as per the specification.
     */
    y(this, "password");
    /**
     *  The wordlist for this mnemonic.
     */
    y(this, "wordlist");
    /**
     *  The underlying entropy which the mnemonic encodes.
     */
    y(this, "entropy");
    s == null && (s = ""), i == null && (i = Or.wordlist()), Rr(e, $0, "Mnemonic"), D(this, { phrase: n, password: s, wordlist: i, entropy: t });
  }
  /**
   *  Returns the seed for the mnemonic.
   */
  computeSeed() {
    const e = Ue("mnemonic" + this.password, "NFKD");
    return Fn(Ue(this.phrase, "NFKD"), e, 2048, 64, "sha512");
  }
  /**
   *  Creates a new Mnemonic for the %%phrase%%.
   *
   *  The default %%password%% is the empty string and the default
   *  wordlist is the [English wordlists](LangEn).
   */
  static fromPhrase(e, t, n) {
    const s = Y0(e, n);
    return e = X0(v(s), n), new ei($0, s, e, t, n);
  }
  /**
   *  Create a new **Mnemonic** from the %%entropy%%.
   *
   *  The default %%password%% is the empty string and the default
   *  wordlist is the [English wordlists](LangEn).
   */
  static fromEntropy(e, t, n) {
    const s = v(e, "entropy"), i = X0(s, n);
    return new ei($0, P(s), i, t, n);
  }
  /**
   *  Returns the phrase for %%mnemonic%%.
   */
  static entropyToPhrase(e, t) {
    const n = v(e, "entropy");
    return X0(n, t);
  }
  /**
   *  Returns the entropy for %%phrase%%.
   */
  static phraseToEntropy(e, t) {
    return Y0(e, t);
  }
  /**
   *  Returns true if %%phrase%% is a valid [[link-bip-39]] phrase.
   *
   *  This checks all the provided words belong to the %%wordlist%%,
   *  that the length is valid and the checksum is correct.
   */
  static isValidMnemonic(e, t) {
    try {
      return Y0(e, t), !0;
    } catch {
    }
    return !1;
  }
}
/*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
var pe = function(r, e, t, n) {
  if (t === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !n : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? n : t === "a" ? n.call(r) : n ? n.value : e.get(r);
}, q0 = function(r, e, t, n, s) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Ha, Ye, At;
const Ub = { 16: 10, 24: 12, 32: 14 }, Lb = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], We = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], Pa = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], Db = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], Fb = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], Mb = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], Gb = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], Hb = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], Vb = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], Qb = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], Kb = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], _b = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], zb = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], Jb = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], jb = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function eo(r) {
  const e = [];
  for (let t = 0; t < r.length; t += 4)
    e.push(r[t] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3]);
  return e;
}
class xc {
  get key() {
    return pe(this, Ha, "f").slice();
  }
  constructor(e) {
    if (Ha.set(this, void 0), Ye.set(this, void 0), At.set(this, void 0), !(this instanceof xc))
      throw Error("AES must be instanitated with `new`");
    q0(this, Ha, new Uint8Array(e), "f");
    const t = Ub[this.key.length];
    if (t == null)
      throw new TypeError("invalid key size (must be 16, 24 or 32 bytes)");
    q0(this, At, [], "f"), q0(this, Ye, [], "f");
    for (let u = 0; u <= t; u++)
      pe(this, At, "f").push([0, 0, 0, 0]), pe(this, Ye, "f").push([0, 0, 0, 0]);
    const n = (t + 1) * 4, s = this.key.length / 4, i = eo(this.key);
    let a;
    for (let u = 0; u < s; u++)
      a = u >> 2, pe(this, At, "f")[a][u % 4] = i[u], pe(this, Ye, "f")[t - a][u % 4] = i[u];
    let o = 0, c = s, f;
    for (; c < n; ) {
      if (f = i[s - 1], i[0] ^= We[f >> 16 & 255] << 24 ^ We[f >> 8 & 255] << 16 ^ We[f & 255] << 8 ^ We[f >> 24 & 255] ^ Lb[o] << 24, o += 1, s != 8)
        for (let p = 1; p < s; p++)
          i[p] ^= i[p - 1];
      else {
        for (let p = 1; p < s / 2; p++)
          i[p] ^= i[p - 1];
        f = i[s / 2 - 1], i[s / 2] ^= We[f & 255] ^ We[f >> 8 & 255] << 8 ^ We[f >> 16 & 255] << 16 ^ We[f >> 24 & 255] << 24;
        for (let p = s / 2 + 1; p < s; p++)
          i[p] ^= i[p - 1];
      }
      let u = 0, d, x;
      for (; u < s && c < n; )
        d = c >> 2, x = c % 4, pe(this, At, "f")[d][x] = i[u], pe(this, Ye, "f")[t - d][x] = i[u++], c++;
    }
    for (let u = 1; u < t; u++)
      for (let d = 0; d < 4; d++)
        f = pe(this, Ye, "f")[u][d], pe(this, Ye, "f")[u][d] = _b[f >> 24 & 255] ^ zb[f >> 16 & 255] ^ Jb[f >> 8 & 255] ^ jb[f & 255];
  }
  encrypt(e) {
    if (e.length != 16)
      throw new TypeError("invalid plaintext size (must be 16 bytes)");
    const t = pe(this, At, "f").length - 1, n = [0, 0, 0, 0];
    let s = eo(e);
    for (let o = 0; o < 4; o++)
      s[o] ^= pe(this, At, "f")[0][o];
    for (let o = 1; o < t; o++) {
      for (let c = 0; c < 4; c++)
        n[c] = Db[s[c] >> 24 & 255] ^ Fb[s[(c + 1) % 4] >> 16 & 255] ^ Mb[s[(c + 2) % 4] >> 8 & 255] ^ Gb[s[(c + 3) % 4] & 255] ^ pe(this, At, "f")[o][c];
      s = n.slice();
    }
    const i = new Uint8Array(16);
    let a = 0;
    for (let o = 0; o < 4; o++)
      a = pe(this, At, "f")[t][o], i[4 * o] = (We[s[o] >> 24 & 255] ^ a >> 24) & 255, i[4 * o + 1] = (We[s[(o + 1) % 4] >> 16 & 255] ^ a >> 16) & 255, i[4 * o + 2] = (We[s[(o + 2) % 4] >> 8 & 255] ^ a >> 8) & 255, i[4 * o + 3] = (We[s[(o + 3) % 4] & 255] ^ a) & 255;
    return i;
  }
  decrypt(e) {
    if (e.length != 16)
      throw new TypeError("invalid ciphertext size (must be 16 bytes)");
    const t = pe(this, Ye, "f").length - 1, n = [0, 0, 0, 0];
    let s = eo(e);
    for (let o = 0; o < 4; o++)
      s[o] ^= pe(this, Ye, "f")[0][o];
    for (let o = 1; o < t; o++) {
      for (let c = 0; c < 4; c++)
        n[c] = Hb[s[c] >> 24 & 255] ^ Vb[s[(c + 3) % 4] >> 16 & 255] ^ Qb[s[(c + 2) % 4] >> 8 & 255] ^ Kb[s[(c + 1) % 4] & 255] ^ pe(this, Ye, "f")[o][c];
      s = n.slice();
    }
    const i = new Uint8Array(16);
    let a = 0;
    for (let o = 0; o < 4; o++)
      a = pe(this, Ye, "f")[t][o], i[4 * o] = (Pa[s[o] >> 24 & 255] ^ a >> 24) & 255, i[4 * o + 1] = (Pa[s[(o + 3) % 4] >> 16 & 255] ^ a >> 16) & 255, i[4 * o + 2] = (Pa[s[(o + 2) % 4] >> 8 & 255] ^ a >> 8) & 255, i[4 * o + 3] = (Pa[s[(o + 1) % 4] & 255] ^ a) & 255;
    return i;
  }
}
Ha = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap();
class ud {
  constructor(e, t, n) {
    if (n && !(this instanceof n))
      throw new Error(`${e} must be instantiated with "new"`);
    Object.defineProperties(this, {
      aes: { enumerable: !0, value: new xc(t) },
      name: { enumerable: !0, value: e }
    });
  }
}
var Ta = function(r, e, t, n, s) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Hr = function(r, e, t, n) {
  if (t === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !n : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? n : t === "a" ? n.call(r) : n ? n.value : e.get(r);
}, gi, Lt;
class bc extends ud {
  constructor(e, t) {
    if (super("ECC", e, bc), gi.set(this, void 0), Lt.set(this, void 0), t) {
      if (t.length % 16)
        throw new TypeError("invalid iv size (must be 16 bytes)");
      Ta(this, gi, new Uint8Array(t), "f");
    } else
      Ta(this, gi, new Uint8Array(16), "f");
    Ta(this, Lt, this.iv, "f");
  }
  get iv() {
    return new Uint8Array(Hr(this, gi, "f"));
  }
  encrypt(e) {
    if (e.length % 16)
      throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
    const t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n += 16) {
      for (let s = 0; s < 16; s++)
        Hr(this, Lt, "f")[s] ^= e[n + s];
      Ta(this, Lt, this.aes.encrypt(Hr(this, Lt, "f")), "f"), t.set(Hr(this, Lt, "f"), n);
    }
    return t;
  }
  decrypt(e) {
    if (e.length % 16)
      throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
    const t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n += 16) {
      const s = this.aes.decrypt(e.subarray(n, n + 16));
      for (let i = 0; i < 16; i++)
        t[n + i] = s[i] ^ Hr(this, Lt, "f")[i], Hr(this, Lt, "f")[i] = e[n + i];
    }
    return t;
  }
}
gi = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap();
var Vr = function(r, e, t, n, s) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(r, t) : s ? s.value = t : e.set(r, t), t;
}, Ze = function(r, e, t, n) {
  if (t === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !n : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? n : t === "a" ? n.call(r) : n ? n.value : e.get(r);
}, yi, Vn, Xe;
class ti extends ud {
  constructor(e, t) {
    super("CTR", e, ti), yi.set(this, void 0), Vn.set(this, void 0), Xe.set(this, void 0), Vr(this, Xe, new Uint8Array(16), "f"), Ze(this, Xe, "f").fill(0), Vr(this, yi, Ze(this, Xe, "f"), "f"), Vr(this, Vn, 16, "f"), t == null && (t = 1), typeof t == "number" ? this.setCounterValue(t) : this.setCounterBytes(t);
  }
  get counter() {
    return new Uint8Array(Ze(this, Xe, "f"));
  }
  setCounterValue(e) {
    if (!Number.isInteger(e) || e < 0 || e > Number.MAX_SAFE_INTEGER)
      throw new TypeError("invalid counter initial integer value");
    for (let t = 15; t >= 0; --t)
      Ze(this, Xe, "f")[t] = e % 256, e = Math.floor(e / 256);
  }
  setCounterBytes(e) {
    if (e.length !== 16)
      throw new TypeError("invalid counter initial Uint8Array value length");
    Ze(this, Xe, "f").set(e);
  }
  increment() {
    for (let e = 15; e >= 0; e--)
      if (Ze(this, Xe, "f")[e] === 255)
        Ze(this, Xe, "f")[e] = 0;
      else {
        Ze(this, Xe, "f")[e]++;
        break;
      }
  }
  encrypt(e) {
    var t, n;
    const s = new Uint8Array(e);
    for (let i = 0; i < s.length; i++)
      Ze(this, Vn, "f") === 16 && (Vr(this, yi, this.aes.encrypt(Ze(this, Xe, "f")), "f"), Vr(this, Vn, 0, "f"), this.increment()), s[i] ^= Ze(this, yi, "f")[Vr(this, Vn, (n = Ze(this, Vn, "f"), t = n++, n), "f"), t];
    return s;
  }
  decrypt(e) {
    return this.encrypt(e);
  }
}
yi = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap();
function Wb(r) {
  if (r.length < 16)
    throw new TypeError("PKCS#7 invalid length");
  const e = r[r.length - 1];
  if (e > 16)
    throw new TypeError("PKCS#7 padding byte out of range");
  const t = r.length - e;
  for (let n = 0; n < e; n++)
    if (r[t + n] !== e)
      throw new TypeError("PKCS#7 invalid padding byte");
  return new Uint8Array(r.subarray(0, t));
}
function dd(r) {
  return typeof r == "string" && !r.startsWith("0x") && (r = "0x" + r), me(r);
}
function li(r, e) {
  for (r = String(r); r.length < e; )
    r = "0" + r;
  return r;
}
function ua(r) {
  return typeof r == "string" ? Ue(r, "NFKC") : me(r);
}
function oe(r, e) {
  const t = e.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
  b(t != null, "invalid path", "path", e);
  const n = t[1], s = t[3], i = t[4] === "!";
  let a = r;
  for (const o of n.toLowerCase().split(".")) {
    if (Array.isArray(a)) {
      if (!o.match(/^[0-9]+$/))
        break;
      a = a[parseInt(o)];
    } else if (typeof a == "object") {
      let c = null;
      for (const f in a)
        if (f.toLowerCase() === o) {
          c = a[f];
          break;
        }
      a = c;
    } else
      a = null;
    if (a == null)
      break;
  }
  if (b(!i || a != null, "missing required value", "path", n), s && a != null) {
    if (s === "int") {
      if (typeof a == "string" && a.match(/^-?[0-9]+$/))
        return parseInt(a);
      if (Number.isSafeInteger(a))
        return a;
    }
    if (s === "number" && typeof a == "string" && a.match(/^-?[0-9.]*$/))
      return parseFloat(a);
    if (s === "data" && typeof a == "string")
      return dd(a);
    if (s === "array" && Array.isArray(a) || s === typeof a)
      return a;
    b(!1, `wrong type found for ${s} `, "path", n);
  }
  return a;
}
const hd = "m/44'/60'/0'/0/0";
function Qf(r) {
  try {
    const e = JSON.parse(r);
    if ((e.version != null ? parseInt(e.version) : 0) === 3)
      return !0;
  } catch {
  }
  return !1;
}
function Zb(r, e, t) {
  if (oe(r, "crypto.cipher:string") === "aes-128-ctr") {
    const s = oe(r, "crypto.cipherparams.iv:data!"), i = new ti(e, s);
    return P(i.decrypt(t));
  }
  N(!1, "unsupported cipher", "UNSUPPORTED_OPERATION", {
    operation: "decrypt"
  });
}
function e0(r, e) {
  const t = v(e), n = oe(r, "crypto.ciphertext:data!"), s = P(ie(X([t.slice(16, 32), n]))).substring(2);
  b(s === oe(r, "crypto.mac:string!").toLowerCase(), "incorrect password", "password", "[ REDACTED ]");
  const i = Zb(r, t.slice(0, 16), n), a = aa(i);
  if (r.address) {
    let f = r.address.toLowerCase();
    f.startsWith("0x") || (f = "0x" + f), b(J(f) === a, "keystore address/privateKey mismatch", "address", r.address);
  }
  const o = { address: a, privateKey: i };
  if (oe(r, "x-ethers.version:string") === "0.1") {
    const f = t.slice(32, 64), u = oe(r, "x-ethers.mnemonicCiphertext:data!"), d = oe(r, "x-ethers.mnemonicCounter:data!"), x = new ti(f, d);
    o.mnemonic = {
      path: oe(r, "x-ethers.path:string") || hd,
      locale: oe(r, "x-ethers.locale:string") || "en",
      entropy: P(v(x.decrypt(u)))
    };
  }
  return o;
}
function xd(r) {
  const e = oe(r, "crypto.kdf:string");
  if (e && typeof e == "string") {
    if (e.toLowerCase() === "scrypt") {
      const t = oe(r, "crypto.kdfparams.salt:data!"), n = oe(r, "crypto.kdfparams.n:int!"), s = oe(r, "crypto.kdfparams.r:int!"), i = oe(r, "crypto.kdfparams.p:int!");
      b(n > 0 && (n & n - 1) === 0, "invalid kdf.N", "kdf.N", n), b(s > 0 && i > 0, "invalid kdf", "kdf", e);
      const a = oe(r, "crypto.kdfparams.dklen:int!");
      return b(a === 32, "invalid kdf.dklen", "kdf.dflen", a), { name: "scrypt", salt: t, N: n, r: s, p: i, dkLen: 64 };
    } else if (e.toLowerCase() === "pbkdf2") {
      const t = oe(r, "crypto.kdfparams.salt:data!"), n = oe(r, "crypto.kdfparams.prf:string!"), s = n.split("-").pop();
      b(s === "sha256" || s === "sha512", "invalid kdf.pdf", "kdf.pdf", n);
      const i = oe(r, "crypto.kdfparams.c:int!"), a = oe(r, "crypto.kdfparams.dklen:int!");
      return b(a === 32, "invalid kdf.dklen", "kdf.dklen", a), { name: "pbkdf2", salt: t, count: i, dkLen: a, algorithm: s };
    }
  }
  b(!1, "unsupported key-derivation function", "kdf", e);
}
function Yb(r, e) {
  const t = JSON.parse(r), n = ua(e), s = xd(t);
  if (s.name === "pbkdf2") {
    const { salt: d, count: x, dkLen: p, algorithm: m } = s, g = Fn(n, d, x, p, m);
    return e0(t, g);
  }
  N(s.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params: s });
  const { salt: i, N: a, r: o, p: c, dkLen: f } = s, u = ai(n, i, a, o, c, f);
  return e0(t, u);
}
function Kf(r) {
  return new Promise((e) => {
    setTimeout(() => {
      e();
    }, r);
  });
}
async function Xb(r, e, t) {
  const n = JSON.parse(r), s = ua(e), i = xd(n);
  if (i.name === "pbkdf2") {
    t && (t(0), await Kf(0));
    const { salt: x, count: p, dkLen: m, algorithm: g } = i, A = Fn(s, x, p, m, g);
    return t && (t(1), await Kf(0)), e0(n, A);
  }
  N(i.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params: i });
  const { salt: a, N: o, r: c, p: f, dkLen: u } = i, d = await ii(s, a, o, c, f, u, t);
  return e0(n, d);
}
function bd(r) {
  const e = r.salt != null ? v(r.salt, "options.salt") : en(32);
  let t = 1 << 17, n = 8, s = 1;
  return r.scrypt && (r.scrypt.N && (t = r.scrypt.N), r.scrypt.r && (n = r.scrypt.r), r.scrypt.p && (s = r.scrypt.p)), b(typeof t == "number" && t > 0 && Number.isSafeInteger(t) && (BigInt(t) & BigInt(t - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", t), b(typeof n == "number" && n > 0 && Number.isSafeInteger(n), "invalid scrypt r parameter", "options.r", n), b(typeof s == "number" && s > 0 && Number.isSafeInteger(s), "invalid scrypt p parameter", "options.p", s), { name: "scrypt", dkLen: 32, salt: e, N: t, r: n, p: s };
}
function pd(r, e, t, n) {
  const s = v(t.privateKey, "privateKey"), i = n.iv != null ? v(n.iv, "options.iv") : en(16);
  b(i.length === 16, "invalid options.iv length", "options.iv", n.iv);
  const a = n.uuid != null ? v(n.uuid, "options.uuid") : en(16);
  b(a.length === 16, "invalid options.uuid length", "options.uuid", n.iv);
  const o = r.slice(0, 16), c = r.slice(16, 32), f = new ti(o, i), u = v(f.encrypt(s)), d = ie(X([c, u])), x = {
    address: t.address.substring(2).toLowerCase(),
    id: s1(a),
    version: 3,
    Crypto: {
      cipher: "aes-128-ctr",
      cipherparams: {
        iv: P(i).substring(2)
      },
      ciphertext: P(u).substring(2),
      kdf: "scrypt",
      kdfparams: {
        salt: P(e.salt).substring(2),
        n: e.N,
        dklen: 32,
        p: e.p,
        r: e.r
      },
      mac: d.substring(2)
    }
  };
  if (t.mnemonic) {
    const p = n.client != null ? n.client : `ethers/${Zf}`, m = t.mnemonic.path || hd, g = t.mnemonic.locale || "en", A = r.slice(32, 64), E = v(t.mnemonic.entropy, "account.mnemonic.entropy"), C = en(16), T = new ti(A, C), M = v(T.encrypt(E)), O = /* @__PURE__ */ new Date(), F = "UTC--" + (O.getUTCFullYear() + "-" + li(O.getUTCMonth() + 1, 2) + "-" + li(O.getUTCDate(), 2) + "T" + li(O.getUTCHours(), 2) + "-" + li(O.getUTCMinutes(), 2) + "-" + li(O.getUTCSeconds(), 2) + ".0Z") + "--" + x.address;
    x["x-ethers"] = {
      client: p,
      gethFilename: F,
      path: m,
      locale: g,
      mnemonicCounter: P(C).substring(2),
      mnemonicCiphertext: P(M).substring(2),
      version: "0.1"
    };
  }
  return JSON.stringify(x);
}
function gd(r, e, t) {
  t == null && (t = {});
  const n = ua(e), s = bd(t), i = ai(n, s.salt, s.N, s.r, s.p, 64);
  return pd(v(i), s, r, t);
}
async function yd(r, e, t) {
  t == null && (t = {});
  const n = ua(e), s = bd(t), i = await ii(n, s.salt, s.N, s.r, s.p, 64, t.progressCallback);
  return pd(v(i), s, r, t);
}
const to = "m/44'/60'/0'/0/0", $b = new Uint8Array([66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100]), Dn = 2147483648, qb = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), e2 = "0123456789abcdef";
function t0(r, e) {
  let t = "";
  for (; r; )
    t = e2[r % 16] + t, r = Math.trunc(r / 16);
  for (; t.length < e * 2; )
    t = "0" + t;
  return "0x" + t;
}
function Do(r) {
  const e = v(r), t = ne(at(at(e)), 0, 4), n = X([e, t]);
  return tl(n);
}
const Et = {};
function md(r, e, t, n) {
  const s = new Uint8Array(37);
  r & Dn ? (N(n != null, "cannot derive child of neutered node", "UNSUPPORTED_OPERATION", {
    operation: "deriveChild"
  }), s.set(v(n), 1)) : s.set(v(t));
  for (let a = 24; a >= 0; a -= 8)
    s[33 + (a >> 3)] = r >> 24 - a & 255;
  const i = v(ri("sha512", e, s));
  return { IL: i.slice(0, 32), IR: i.slice(32) };
}
function wd(r, e) {
  const t = e.split("/");
  b(t.length > 0, "invalid path", "path", e), t[0] === "m" && (b(r.depth === 0, `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${r.depth}`, "path", e), t.shift());
  let n = r;
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    if (i.match(/^[0-9]+'$/)) {
      const a = parseInt(i.substring(0, i.length - 1));
      b(a < Dn, "invalid path index", `path[${s}]`, i), n = n.deriveChild(Dn + a);
    } else if (i.match(/^[0-9]+$/)) {
      const a = parseInt(i);
      b(a < Dn, "invalid path index", `path[${s}]`, i), n = n.deriveChild(a);
    } else
      b(!1, "invalid path component", `path[${s}]`, i);
  }
  return n;
}
var ra, Fo, wr, mi;
const ft = class ft extends $a {
  /**
   *  @private
   */
  constructor(t, n, s, i, a, o, c, f, u) {
    super(n, u);
    w(this, ra);
    /**
     *  The compressed public key.
     */
    y(this, "publicKey");
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    y(this, "fingerprint");
    /**
     *  The parent fingerprint.
     */
    y(this, "parentFingerprint");
    /**
     *  The mnemonic used to create this HD Node, if available.
     *
     *  Sources such as extended keys do not encode the mnemonic, in
     *  which case this will be ``null``.
     */
    y(this, "mnemonic");
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    y(this, "chainCode");
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provide full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  encode it.
     */
    y(this, "path");
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    y(this, "index");
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    y(this, "depth");
    Rr(t, Et, "HDNodeWallet"), D(this, { publicKey: n.compressedPublicKey });
    const d = ne(si(at(this.publicKey)), 0, 4);
    D(this, {
      parentFingerprint: s,
      fingerprint: d,
      chainCode: i,
      path: a,
      index: o,
      depth: c
    }), D(this, { mnemonic: f });
  }
  connect(t) {
    return new ft(Et, this.signingKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.mnemonic, t);
  }
  /**
   *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
   *  %%password%%.
   *
   *  If %%progressCallback%% is specified, it will receive periodic
   *  updates as the encryption process progreses.
   */
  async encrypt(t, n) {
    return await yd(I(this, ra, Fo).call(this), t, { progressCallback: n });
  }
  /**
   *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
   *  %%password%%.
   *
   *  It is preferred to use the [async version](encrypt) instead,
   *  which allows a [[ProgressCallback]] to keep the user informed.
   *
   *  This method will block the event loop (freezing all UI) until
   *  it is complete, which may be a non-trivial duration.
   */
  encryptSync(t) {
    return gd(I(this, ra, Fo).call(this), t);
  }
  /**
   *  The extended key.
   *
   *  This key will begin with the prefix ``xpriv`` and can be used to
   *  reconstruct this HD Node to derive its children.
   */
  get extendedKey() {
    return N(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" }), Do(X([
      "0x0488ADE4",
      t0(this.depth, 1),
      this.parentFingerprint,
      t0(this.index, 4),
      this.chainCode,
      X(["0x00", this.privateKey])
    ]));
  }
  /**
   *  Returns true if this wallet has a path, providing a Type Guard
   *  that the path is non-null.
   */
  hasPath() {
    return this.path != null;
  }
  /**
   *  Returns a neutered HD Node, which removes the private details
   *  of an HD Node.
   *
   *  A neutered node has no private key, but can be used to derive
   *  child addresses and other public data about the HD Node.
   */
  neuter() {
    return new Li(Et, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.provider);
  }
  /**
   *  Return the child for %%index%%.
   */
  deriveChild(t) {
    const n = K(t, "index");
    b(n <= 4294967295, "invalid index", "index", n);
    let s = this.path;
    s && (s += "/" + (n & ~Dn), n & Dn && (s += "'"));
    const { IR: i, IL: a } = md(n, this.chainCode, this.publicKey, this.privateKey), o = new Ut(nn((h0(a) + BigInt(this.privateKey)) % qb, 32));
    return new ft(Et, o, this.fingerprint, P(i), s, n, this.depth + 1, this.mnemonic, this.provider);
  }
  /**
   *  Return the HDNode for %%path%% from this node.
   */
  derivePath(t) {
    return wd(this, t);
  }
  /**
   *  Creates a new HD Node from %%extendedKey%%.
   *
   *  If the %%extendedKey%% will either have a prefix or ``xpub`` or
   *  ``xpriv``, returning a neutered HD Node ([[HDNodeVoidWallet]])
   *  or full HD Node ([[HDNodeWallet) respectively.
   */
  static fromExtendedKey(t) {
    const n = ke(Qd(t));
    b(n.length === 82 || Do(n.slice(0, 78)) === t, "invalid extended key", "extendedKey", "[ REDACTED ]");
    const s = n[4], i = P(n.slice(5, 9)), a = parseInt(P(n.slice(9, 13)).substring(2), 16), o = P(n.slice(13, 45)), c = n.slice(45, 78);
    switch (P(n.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf": {
        const f = P(c);
        return new Li(Et, aa(f), f, i, o, null, a, s, null);
      }
      case "0x0488ade4":
      case "0x04358394 ":
        if (c[0] !== 0)
          break;
        return new ft(Et, new Ut(c.slice(1)), i, o, null, a, s, null, null);
    }
    b(!1, "invalid extended key prefix", "extendedKey", "[ REDACTED ]");
  }
  /**
   *  Creates a new random HDNode.
   */
  static createRandom(t, n, s) {
    var a;
    t == null && (t = ""), n == null && (n = to), s == null && (s = Or.wordlist());
    const i = ei.fromEntropy(en(16), t, s);
    return I(a = ft, wr, mi).call(a, i.computeSeed(), i).derivePath(n);
  }
  /**
   *  Create an HD Node from %%mnemonic%%.
   */
  static fromMnemonic(t, n) {
    var s;
    return n || (n = to), I(s = ft, wr, mi).call(s, t.computeSeed(), t).derivePath(n);
  }
  /**
   *  Creates an HD Node from a mnemonic %%phrase%%.
   */
  static fromPhrase(t, n, s, i) {
    var o;
    n == null && (n = ""), s == null && (s = to), i == null && (i = Or.wordlist());
    const a = ei.fromPhrase(t, n, i);
    return I(o = ft, wr, mi).call(o, a.computeSeed(), a).derivePath(s);
  }
  /**
   *  Creates an HD Node from a %%seed%%.
   */
  static fromSeed(t) {
    var n;
    return I(n = ft, wr, mi).call(n, t, null);
  }
};
ra = new WeakSet(), Fo = function() {
  const t = { address: this.address, privateKey: this.privateKey }, n = this.mnemonic;
  return this.path && n && n.wordlist.locale === "en" && n.password === "" && (t.mnemonic = {
    path: this.path,
    locale: "en",
    entropy: n.entropy
  }), t;
}, wr = new WeakSet(), mi = function(t, n) {
  b(l0(t), "invalid seed", "seed", "[REDACTED]");
  const s = v(t, "seed");
  b(s.length >= 16 && s.length <= 64, "invalid seed", "seed", "[REDACTED]");
  const i = v(ri("sha512", $b, s)), a = new Ut(P(i.slice(0, 32)));
  return new ft(Et, a, "0x00000000", P(i.slice(32)), "m", 0, 0, n, null);
}, w(ft, wr);
let Ai = ft;
class Li extends ko {
  /**
   *  @private
   */
  constructor(t, n, s, i, a, o, c, f, u) {
    super(n, u);
    /**
     *  The compressed public key.
     */
    y(this, "publicKey");
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    y(this, "fingerprint");
    /**
     *  The parent node fingerprint.
     */
    y(this, "parentFingerprint");
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    y(this, "chainCode");
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provider full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  enocde it.
     */
    y(this, "path");
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    y(this, "index");
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    y(this, "depth");
    Rr(t, Et, "HDNodeVoidWallet"), D(this, { publicKey: s });
    const d = ne(si(at(s)), 0, 4);
    D(this, {
      publicKey: s,
      fingerprint: d,
      parentFingerprint: i,
      chainCode: a,
      path: o,
      index: c,
      depth: f
    });
  }
  connect(t) {
    return new Li(Et, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, t);
  }
  /**
   *  The extended key.
   *
   *  This key will begin with the prefix ``xpub`` and can be used to
   *  reconstruct this neutered key to derive its children addresses.
   */
  get extendedKey() {
    return N(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" }), Do(X([
      "0x0488B21E",
      t0(this.depth, 1),
      this.parentFingerprint,
      t0(this.index, 4),
      this.chainCode,
      this.publicKey
    ]));
  }
  /**
   *  Returns true if this wallet has a path, providing a Type Guard
   *  that the path is non-null.
   */
  hasPath() {
    return this.path != null;
  }
  /**
   *  Return the child for %%index%%.
   */
  deriveChild(t) {
    const n = K(t, "index");
    b(n <= 4294967295, "invalid index", "index", n);
    let s = this.path;
    s && (s += "/" + (n & ~Dn), n & Dn && (s += "'"));
    const { IR: i, IL: a } = md(n, this.chainCode, this.publicKey, null), o = Ut.addPoints(a, this.publicKey, !0), c = aa(o);
    return new Li(Et, c, o, this.fingerprint, P(i), s, n, this.depth + 1, this.provider);
  }
  /**
   *  Return the signer for %%path%% from this node.
   */
  derivePath(t) {
    return wd(this, t);
  }
}
function _f(r) {
  try {
    if (JSON.parse(r).encseed)
      return !0;
  } catch {
  }
  return !1;
}
function zf(r, e) {
  const t = JSON.parse(r), n = ua(e), s = J(oe(t, "ethaddr:string!")), i = dd(oe(t, "encseed:string!"));
  b(i && i.length % 16 === 0, "invalid encseed", "json", r);
  const a = v(Fn(n, n, 2e3, 32, "sha256")).slice(0, 16), o = i.slice(0, 16), c = i.slice(16), f = new bc(a, o), u = Wb(v(f.decrypt(c)));
  let d = "";
  for (let x = 0; x < u.length; x++)
    d += String.fromCharCode(u[x]);
  return { address: s, privateKey: sn(d) };
}
function Jf(r) {
  return new Promise((e) => {
    setTimeout(() => {
      e();
    }, r);
  });
}
var sa, Go;
const Jn = class Jn extends $a {
  /**
   *  Create a new wallet for the private %%key%%, optionally connected
   *  to %%provider%%.
   */
  constructor(e, t) {
    typeof e == "string" && !e.startsWith("0x") && (e = "0x" + e);
    let n = typeof e == "string" ? new Ut(e) : e;
    super(n, t);
  }
  connect(e) {
    return new Jn(this.signingKey, e);
  }
  /**
   *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
   *  %%password%%.
   *
   *  If %%progressCallback%% is specified, it will receive periodic
   *  updates as the encryption process progreses.
   */
  async encrypt(e, t) {
    const n = { address: this.address, privateKey: this.privateKey };
    return await yd(n, e, { progressCallback: t });
  }
  /**
   *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
   *  %%password%%.
   *
   *  It is preferred to use the [async version](encrypt) instead,
   *  which allows a [[ProgressCallback]] to keep the user informed.
   *
   *  This method will block the event loop (freezing all UI) until
   *  it is complete, which may be a non-trivial duration.
   */
  encryptSync(e) {
    const t = { address: this.address, privateKey: this.privateKey };
    return gd(t, e);
  }
  /**
   *  Creates (asynchronously) a **Wallet** by decrypting the %%json%%
   *  with %%password%%.
   *
   *  If %%progress%% is provided, it is called periodically during
   *  decryption so that any UI can be updated.
   */
  static async fromEncryptedJson(e, t, n) {
    var i;
    let s = null;
    return Qf(e) ? s = await Xb(e, t, n) : _f(e) && (n && (n(0), await Jf(0)), s = zf(e, t), n && (n(1), await Jf(0))), I(i = Jn, sa, Go).call(i, s);
  }
  /**
   *  Creates a **Wallet** by decrypting the %%json%% with %%password%%.
   *
   *  The [[fromEncryptedJson]] method is preferred, as this method
   *  will lock up and freeze the UI during decryption, which may take
   *  some time.
   */
  static fromEncryptedJsonSync(e, t) {
    var s;
    let n = null;
    return Qf(e) ? n = Yb(e, t) : _f(e) ? n = zf(e, t) : b(!1, "invalid JSON wallet", "json", "[ REDACTED ]"), I(s = Jn, sa, Go).call(s, n);
  }
  /**
   *  Creates a new random [[HDNodeWallet]] using the available
   *  [cryptographic random source](randomBytes).
   *
   *  If there is no crytographic random source, this will throw.
   */
  static createRandom(e) {
    const t = Ai.createRandom();
    return e ? t.connect(e) : t;
  }
  /**
   *  Creates a [[HDNodeWallet]] for %%phrase%%.
   */
  static fromPhrase(e, t) {
    const n = Ai.fromPhrase(e);
    return t ? n.connect(t) : n;
  }
};
sa = new WeakSet(), Go = function(e) {
  if (b(e, "invalid JSON wallet", "json", "[ REDACTED ]"), "mnemonic" in e && e.mnemonic && e.mnemonic.locale === "en") {
    const n = ei.fromEntropy(e.mnemonic.entropy), s = Ai.fromMnemonic(n, e.mnemonic.path);
    if (s.address === e.address && s.privateKey === e.privateKey)
      return s;
    console.log("WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key");
  }
  const t = new Jn(e.privateKey);
  return b(t.address === e.address, "address/privateKey mismatch", "json", "[ REDACTED ]"), t;
}, w(Jn, sa);
let Mo = Jn;
const l2 = 0, u2 = 0n, k0 = "Evm", d2 = (r, e) => ({
  ...r,
  from: e
}), h2 = (r, e) => ({
  ...r,
  chainId: e
}), jf = "0x0000000000000000000000000000000000000000", lt = class lt {
  constructor(e) {
    y(this, "type", "Native");
    // stored as checksum address
    y(this, "address");
    if (lt.instanceof(e)) {
      const t = e;
      this.address = t.address;
      return;
    }
    if (typeof e == "string") {
      if (!lt.isValidAddress(e))
        throw new Error(`Invalid EVM address, expected ${lt.byteSize}-byte hex string but got ${e}`);
      this.address = J(e);
    } else if (e instanceof Uint8Array) {
      if (e.length !== lt.byteSize)
        throw new Error(`Invalid EVM address, expected ${lt.byteSize} bytes but got ${e.length}`);
      this.address = J(B0.encode(e));
    } else if (Ic.instanceof(e)) {
      const t = e.toUint8Array();
      if (t.slice(0, 12).some((s) => {
      }))
        throw new Error(`Invalid EVM address ${e}`);
      const n = B0.encode(t.slice(12));
      this.address = J(n);
    } else
      throw new Error(`Invalid EVM address ${e}`);
  }
  unwrap() {
    return this.address;
  }
  toString() {
    return this.address;
  }
  toNative() {
    return this;
  }
  toUint8Array() {
    return B0.decode(this.address);
  }
  toUniversalAddress() {
    return new Ic(this.address, "hex");
  }
  static isValidAddress(e) {
    return jh(e);
  }
  static instanceof(e) {
    return e.constructor.platform === lt.platform;
  }
  equals(e) {
    return lt.instanceof(e) ? e.address === this.address : e.equals(this.toUniversalAddress());
  }
};
y(lt, "byteSize", 20), y(lt, "platform", k0);
let Nr = lt;
Pd(k0, Nr);
const Ia = [
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender_",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue_",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "domainFields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "domainName",
        type: "string"
      },
      {
        internalType: "string",
        name: "domainVersion",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "domainChainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "domainVerifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "domainSalt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "domainExtensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue_",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8"
      },
      {
        internalType: "uint64",
        name: "sequence_",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "nativeContract_",
        type: "bytes32"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nativeContract",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline_",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v_",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r_",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s_",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender_",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      },
      {
        internalType: "uint64",
        name: "sequence_",
        type: "uint64"
      }
    ],
    name: "updateDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
], Wf = "0x6080806040523461001657611af2908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c90816306fdde0314611136578163095ea7b31461110c57816318160ddd146110ed57816323b872dd14611026578163313ce567146110055781633644e51514610fe15781633950935114610f985781633d6c043b14610f7957816340c10f1914610ea157816370a0823114610e695781637ecebe0014610e3157816384b0196e14610d575781638da5cb5b14610d2e57816395d89b4114610c595781639a8a059214610c335781639dc29fac14610af1578163a18cd7c6146107bf578163a457c2d71461070f578163a9059cbb146106de578163c71f461514610335578163d505accf14610160575063dd62ed3e1461011557600080fd5b3461015c578060031936011261015c57806020926101316111af565b6101396111ca565b6001600160a01b0391821683526006865283832091168252845220549051908152f35b5080fd5b8391503461015c5760e036600319011261015c5761017c6111af565b6101846111ca565b906044359260643560843560ff81168103610331576101a16112e1565b8142116102ee5760018060a01b039081851692838952600e602052898920908154916001830190558a519060208201927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98452868d840152858a1660608401528a608084015260a083015260c082015260c0815261021e81611212565b519020610229611798565b918a5191602083019361190160f01b855260228401526042830152604282526080820182811067ffffffffffffffff8211176102db5791610283939161027b938d5260c4359260a435925190206119c7565b919091611855565b160361029857506102959394506115e0565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b9050346106da5760e03660031901126106da5767ffffffffffffffff81358181116106d6576103679036908401611250565b916024358281116106d25761037f9036908301611250565b6044359060ff821680920361033157606435938085168095036106ce576084356001600160a01b03811696908790036106ca5760a4359761ffff891689036106c6576007549060ff8260a01c1661068e575060ff60a01b1916600160a01b17600755805182811161067b57806103f58b546112a7565b92601f93848111610622575b506020908483116001146105b3578c926105a8575b50508160011b916000199060031b1c19161789555b825191821161059557819060019361044385546112a7565b828111610538575b5060209183116001146104cd578a926104c2575b5050600019600383901b1c191690821b1790555b60ff1982541617905567ffffffffffffffff1960025416176002556007549161ffff60a81b9060a81b16916bffffffffffffffffff0000ff60a01b16171760075560c4356008556102956112e1565b01519050388061045f565b848b52849350600080516020611a9d8339815191529190601f1984168c5b81811061052057508411610507575b505050811b019055610473565b015160001960f88460031b161c191690553880806104fa565b828401518555879690940193602093840193016104eb565b90919250848b52600080516020611a9d8339815191528380860160051c8201926020871061058c575b91869588929594930160051c01915b82811061057e57505061044b565b8d8155869550879101610570565b92508192610561565b634e487b7160e01b895260418552602489fd5b015190503880610416565b8c8052600080516020611a7d8339815191529250601f1984168d5b81811061060a57509084600195949392106105f1575b505050811b01895561042b565b015160001960f88460031b161c191690553880806105e4565b929360206001819287860151815501950193016105ce565b9091508b8052600080516020611a7d8339815191528480850160051c82019260208610610672575b9085949392910160051c01905b8181106106645750610401565b8d8155849350600101610657565b9250819261064a565b634e487b7160e01b8a526041865260248afd5b5162461bcd60e51b81526020818801526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606490fd5b8980fd5b8880fd5b8780fd5b8580fd5b8480fd5b8280fd5b50503461015c578060031936011261015c576020906107086106fe6111af565b6024359033611416565b5160018152f35b905082346107bc57826003193601126107bc5761072a6111af565b918360243592338152600660205281812060018060a01b038616825260205220549082821061076b576020856107088661076487876113e6565b90336115e0565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b83833461015c57606036600319011261015c5767ffffffffffffffff928035848111610aed576107f29036908301611250565b936024358181116106d65761080a9036908401611250565b91604435938285168095036106d25761082e60018060a01b03600754163314611594565b8483600254161015610aaa57508551828111610a97578061084f87546112a7565b97601f98898111610a3e575b506020908983116001146109cf5788926109c4575b50508160011b916000199060031b1c19161785555b82519182116109b1575060019161089c83546112a7565b868111610961575b5060209582116001146108f75794849582939495926108ec575b5050600019600383901b1c191690821b1790555b67ffffffffffffffff1960025416176002556102956112e1565b0151905085806108be565b828552601f19821695600080516020611a9d83398151915291865b88811061094b5750838596979810610932575b505050811b0190556108d2565b015160001960f88460031b161c19169055858080610925565b8183015184559285019260209283019201610912565b838652600080516020611a9d8339815191528780850160051c820192602086106109a8575b0160051c019084905b82811061099d5750506108a4565b87815501849061098f565b92508192610986565b634e487b7160e01b855260419052602484fd5b015190508880610870565b888052600080516020611a7d8339815191529250601f198416895b818110610a265750908460019594939210610a0d575b505050811b018555610885565b015160001960f88460031b161c19169055888080610a00565b929360206001819287860151815501950193016109ea565b909150878052600080516020611a7d8339815191528980850160051c82019260208610610a8e575b9085949392910160051c01905b818110610a80575061085b565b898155849350600101610a73565b92508192610a66565b634e487b7160e01b865260418252602486fd5b906020606492519162461bcd60e51b8352820152601e60248201527f63757272656e74206d6574616461746120697320757020746f206461746500006044820152fd5b8380fd5b8391503461015c578260031936011261015c57610b0c6111af565b600754602435916001600160a01b0391610b299083163314611594565b16918215610be65782845260056020528484205490828210610b985750818495610b767fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef946020946113e6565b8587526005845281872055610b8d826003546113e6565b60035551908152a380f35b608490602087519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152fd5b608490602086519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b50503461015c578160031936011261015c5760209061ffff60075460a81c169051908152f35b50503461015c578160031936011261015c57805190826001805491610c7d836112a7565b80865292828116908115610d065750600114610cbc575b505050610ca682610cb894038361122e565b5191829160208352602083019061118a565b0390f35b9450808552600080516020611a9d8339815191525b828610610cee57505050610ca6826020610cb89582010194610c94565b80546020878701810191909152909501948101610cd1565b610cb8975086935060209250610ca694915060ff191682840152151560051b82010194610c94565b50503461015c578160031936011261015c5760075490516001600160a01b039091168152602090f35b9050346106da57826003193601126106da57610d7161133d565b918051610d7d816111e0565b600194858252602091603160f81b83820152610d97611810565b938051918483019683881067ffffffffffffffff8911176109b1575093879592610dee838b978a859652878452610de182519a601f60f81b8c5260e0878d015260e08c019061118a565b918a8303908b015261118a565b9346606089015230608089015260a088015286840360c088015251928381520195925b828110610e1e5785870386f35b8351875295810195928101928401610e11565b50503461015c57602036600319011261015c5760209181906001600160a01b03610e596111af565b168152600e845220549051908152f35b50503461015c57602036600319011261015c5760209181906001600160a01b03610e916111af565b1681526005845220549051908152f35b919050346106da57806003193601126106da57610ebc6111af565b60075460243592916001600160a01b0391610eda9083163314611594565b16928315610f3757506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92610f158795600354611409565b60035585855260058352808520610f2d838254611409565b905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b50503461015c578160031936011261015c576020906008549051908152f35b50503461015c578060031936011261015c57610708602092610764610fbb6111af565b338352600686528483206001600160a01b03821684528652918490205460243590611409565b50503461015c578160031936011261015c57602090610ffe611798565b9051908152f35b8284346107bc57806003193601126107bc575060ff60209254169051908152f35b905082346107bc5760603660031901126107bc576110426111af565b918361104c6111ca565b9261105b604435809587611416565b6001600160a01b0385168152600660209081528282203383529052205490828210611099576020856107088661109187876113e6565b9033906115e0565b608490602086519162461bcd60e51b8352820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152fd5b50503461015c578160031936011261015c576020906003549051908152f35b50503461015c578060031936011261015c5760209061070861112c6111af565b60243590336115e0565b50503461015c578160031936011261015c57610cb89061115461133d565b905191829160208352602083019061118a565b60005b83811061117a5750506000910152565b818101518382015260200161116a565b906020916111a381518092818552858086019101611167565b601f01601f1916010190565b600435906001600160a01b03821682036111c557565b600080fd5b602435906001600160a01b03821682036111c557565b6040810190811067ffffffffffffffff8211176111fc57604052565b634e487b7160e01b600052604160045260246000fd5b60e0810190811067ffffffffffffffff8211176111fc57604052565b90601f8019910116810190811067ffffffffffffffff8211176111fc57604052565b81601f820112156111c55780359067ffffffffffffffff82116111fc5760405192611285601f8401601f19166020018561122e565b828452602083830101116111c557816000926020809301838601378301015290565b90600182811c921680156112d7575b60208310146112c157565b634e487b7160e01b600052602260045260246000fd5b91607f16916112b6565b6112e96117de565b6112f1611810565b81600d5414801590611331575b611306575050565b46600a55600b80546001600160a01b0319163017905561132681836116e2565b600955600c55600d55565b5080600c5414156112fe565b60405190600082815491611350836112a7565b808352926001908181169081156113c45750600114611379575b506113779250038361122e565b565b60008080529150600080516020611a7d8339815191525b8483106113a9575061137793505081016020013861136a565b81935090816020925483858a01015201910190918592611390565b90506020925061137794915060ff191682840152151560051b8201013861136a565b919082039182116113f357565b634e487b7160e01b600052601160045260246000fd5b919082018092116113f357565b6001600160a01b0390811691821561154157169182156114f0576000828152600560205260408120549180831061149c576040602092611477837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef966113e6565b868252600585528282205586815220611491828254611409565b9055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b1561159b57565b60405162461bcd60e51b815260206004820152601760248201527f63616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152606490fd5b6001600160a01b0390811691821561169157169182156116415760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260068252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b90604051906116f0826111e0565b600191828152602092603160f81b84830152604051918460005b83811061178457505050600060218301528152611726816111e0565b828151910120604051928301937fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac564728552604084015260608301524660808301523060a083015260c082015260c0815261177e81611212565b51902090565b81818401015182828701015201859061170a565b600b546001600160a01b03163014806117d3575b156117b75760095490565b6117d06117c26117de565b6117ca611810565b906116e2565b90565b50600a5446146117ac565b6117e661133d565b60405161177e602082816118038183019687815193849201611167565b810103808452018261122e565b60075460085460405190602082019261ffff60f01b9060481b1683526022820152602281526060810181811067ffffffffffffffff8211176111fc5760405251902090565b60058110156119b157806118665750565b600181036118b35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036119005760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600381036119585760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b60041461196157565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611a705760ff16601b81141580611a65575b611a59579160809493916020936040519384528484015260408301526060820152600093849182805260015afa15611a4c5781516001600160a01b03811615611a46579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600490565b50601c8114156119ff565b5050505060009060039056fe290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6a26469706673582212209c2a6ab851b98b79f450a0f6c6580132088da5913ef53a145eab9f7b320248f664736f6c63430008130033", t2 = (r) => r.length > 1;
class Ho extends uc {
  constructor(...e) {
    t2(e) ? super(...e) : super(Ia, Wf, e[0]);
  }
  getDeployTransaction(e) {
    return super.getDeployTransaction(e || {});
  }
  deploy(e) {
    return super.deploy(e || {});
  }
  connect(e) {
    return super.connect(e);
  }
  static createInterface() {
    return new vi(Ia);
  }
  static connect(e, t) {
    return new es(e, Ia, t);
  }
}
y(Ho, "bytecode", Wf), y(Ho, "abi", Ia);
class Ad extends Sd {
}
const et = class et extends Ud {
  constructor(e, t) {
    super(e, t ?? Td(e, et._platform));
  }
  getRpc(e) {
    if (e in this.config && this.config[e].rpc)
      return new Pb(this.config[e].rpc);
    throw new Error("No configuration available for chain: " + e);
  }
  getChain(e, t) {
    if (e in this.config)
      return new Ad(e, this, t);
    throw new Error("No configuration available for chain: " + e);
  }
  static nativeTokenId(e, t) {
    if (!et.isSupportedChain(t))
      throw new Error(`invalid chain for EVM: ${t}`);
    return Id.tokenId(t, jf);
  }
  static isNativeTokenId(e, t, n) {
    return !et.isSupportedChain(t) || n.chain !== t ? !1 : n.address.toString() === jf;
  }
  static isSupportedChain(e) {
    return Cd(e) === et._platform;
  }
  static async getDecimals(e, t, n) {
    if (v0(n))
      return kd(et._platform);
    const s = et.getTokenImplementation(t, new Nr(n).toString());
    return Number(await s.decimals());
  }
  static async getBalance(e, t, n, s) {
    return v0(s) ? t.getBalance(n) : et.getTokenImplementation(t, new Nr(s).toString()).balanceOf(n);
  }
  static async getBalances(e, t, n, s) {
    return (await Promise.all(s.map(async (a) => {
      const o = await this.getBalance(e, t, n, a);
      return { [v0(a) ? "native" : new Nr(a).toString()]: o };
    }))).reduce((a, o) => Object.assign(a, o), {});
  }
  static async sendWait(e, t, n) {
    const s = [];
    for (const i of n) {
      const a = await t.broadcastTransaction(i);
      if (s.push(a.hash), e === "Celo") {
        console.error("TODO: override celo block fetching");
        continue;
      }
      if (await a.wait() === null)
        throw new Error("Received null TxReceipt");
    }
    return s;
  }
  static async getLatestBlock(e) {
    return await e.getBlockNumber();
  }
  static async getLatestFinalizedBlock(e) {
    const t = await e.getBlock("finalized");
    if (!t)
      throw new Error("Could not get finalized block");
    return t == null ? void 0 : t.number;
  }
  // Look up the Wormhole Canonical Network and Chain from the EVM chainId
  static chainFromChainId(e) {
    const t = Od(et._platform, BigInt(e));
    if (t === void 0)
      throw new Error(`Unknown EVM chainId ${e}`);
    const [n, s] = t;
    return [n, s];
  }
  static async chainFromRpc(e) {
    const { chainId: t } = await e.getNetwork();
    return et.chainFromChainId(Rd.encode(t, !0));
  }
  static getTokenImplementation(e, t) {
    const n = Ho.connect(t, e);
    if (!n)
      throw new Error(`No token implementation available for: ${t}`);
    return n;
  }
};
y(et, "_platform", k0);
let Di = et;
async function n2(r, e, t) {
  const n = typeof e == "string" ? new Mo(e, r) : e, s = (t == null ? void 0 : t.chain) ?? (await Di.chainFromRpc(r))[1], i = new Uo(n);
  if (i.provider === null)
    try {
      i.connect(r);
    } catch (a) {
      console.error("Cannot connect to network for signer", a);
    }
  return new r2(s, await n.getAddress(), i, t);
}
class r2 extends Bd {
  constructor(t, n, s, i) {
    super(t, n, s);
    y(this, "opts");
    this.opts = i;
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._address;
  }
  async sign(t) {
    var u, d;
    const n = this.chain(), s = [], i = ((u = this.opts) == null ? void 0 : u.maxGasLimit) ?? 500000n;
    let a = 100000000000n, o = 1500000000n, c = 100000000n;
    if (n !== "Celo") {
      const x = await this._signer.provider.getFeeData();
      a = x.gasPrice ?? a, o = x.maxFeePerGas ?? o, c = x.maxPriorityFeePerGas ?? c;
    }
    const f = n === "Oasis" ? {
      gasLimit: i,
      gasPrice: a,
      // Hardcode type
      type: 0
    } : {
      maxFeePerGas: o,
      maxPriorityFeePerGas: c,
      gasLimit: i
    };
    for (const x of t) {
      const { transaction: p, description: m } = x;
      (d = this.opts) != null && d.debug && console.log(`Signing: ${m} for ${this.address()}`);
      const g = {
        ...p,
        ...f,
        from: this.address(),
        nonce: await this._signer.getNonce()
      };
      s.push(await this._signer.signTransaction(g));
    }
    return s;
  }
}
const s2 = {
  Address: Nr,
  Platform: Di,
  getSigner: n2,
  protocols: {
    WormholeCore: () => import("./index-CqK-5vzL.mjs").then((r) => r.i),
    TokenBridge: () => import("./index-BAjif11o.mjs"),
    PorticoBridge: () => import("./index-CrkCIyW_.mjs"),
    CircleBridge: () => import("./index-wEDCup5x.mjs")
  },
  getChain: (r, e, t) => new Ad(e, new Di(r, vd(r, k0, {
    [e]: t
  })))
}, x2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s2
}, Symbol.toStringTag, { value: "Module" }));
export {
  Di as E,
  k0 as _,
  Nr as a,
  d2 as b,
  h2 as c,
  jf as d,
  l2 as e,
  x2 as f,
  u2 as u
};
