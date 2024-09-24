import { y as er, d as Y, aa as qc, n as Tu, g as Lc, ck as Uc, a2 as Ou, a5 as Bu } from "./index-DV1w5RNX.mjs";
import { d as ku } from "./dijkstra-BZM-8g-B.mjs";
import { r as Fu, h as ei, i as Dr, j as Ct, l as Nn, c as Du, a as qu, g as $o, s as Lu, d as Uu, k as $u, b as zu, I as zr, f as Tt, t as It, e as zo, C as Ku, G as ju, E as ft, y as yt, m as Zs, F as Vu, n as Ko, p as Hu, q as Wu, o as $c, u as Qu, v as eo, w as to, x as zc, z as Qt, Y as Gu, A as Qr } from "./browser-DYtGpZK7.mjs";
import { c as K, s as ro, x as Kc, r as jc, H as Yu, a as Vc, q as dn } from "./index-3AdIZdSb.mjs";
let Ju = class extends Fu {
  constructor(e) {
    super(e), this.events = new er.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async request(e, r) {
    return this.requestStrict(ei(e.method, e.params || [], e.id || Dr().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (i, n) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          n(s);
        }
      this.events.on(`${e.id}`, (s) => {
        Ct(s) ? n(s.error) : i(s.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (s) {
        n(s);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Nn(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
};
var Xu = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, r = [], i = 0; i < t.rangeCount; i++)
    r.push(t.getRangeAt(i));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(n) {
      t.addRange(n);
    }), e && e.focus();
  };
}, Zu = Xu, jo = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, ef = "Copy to clipboard: #{key}, Enter";
function tf(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function rf(t, e) {
  var r, i, n, s, o, c, h = !1;
  e || (e = {}), r = e.debug || !1;
  try {
    n = Zu(), s = document.createRange(), o = document.getSelection(), c = document.createElement("span"), c.textContent = t, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", function(d) {
      if (d.stopPropagation(), e.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var m = jo[e.format] || jo.default;
          window.clipboardData.setData(m, t);
        } else
          d.clipboardData.clearData(), d.clipboardData.setData(e.format, t);
      e.onCopy && (d.preventDefault(), e.onCopy(d.clipboardData));
    }), document.body.appendChild(c), s.selectNodeContents(c), o.addRange(s);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    h = !0;
  } catch (d) {
    r && console.error("unable to copy using execCommand: ", d), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), h = !0;
    } catch (m) {
      r && console.error("unable to copy using clipboardData: ", m), r && console.error("falling back to prompt"), i = tf("message" in e ? e.message : ef), window.prompt(i, t);
    }
  } finally {
    o && (typeof o.removeRange == "function" ? o.removeRange(s) : o.removeAllRanges()), c && document.body.removeChild(c), n();
  }
  return h;
}
var nf = rf, sf = {}.toString, io = Array.isArray || function(t) {
  return sf.call(t) == "[object Array]";
}, no = {}, ce = {};
Object.defineProperty(ce, "__esModule", { value: !0 });
var Hc = ce.getLocalStorage = ih = ce.getLocalStorageOrThrow = rh = ce.getCrypto = th = ce.getCryptoOrThrow = eh = ce.getLocation = Zc = ce.getLocationOrThrow = Xc = ce.getNavigator = Jc = ce.getNavigatorOrThrow = Yc = ce.getDocument = Gc = ce.getDocumentOrThrow = Qc = ce.getFromWindowOrThrow = Wc = ce.getFromWindow = void 0;
function Kr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var Wc = ce.getFromWindow = Kr;
function di(t) {
  const e = Kr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
var Qc = ce.getFromWindowOrThrow = di;
function of() {
  return di("document");
}
var Gc = ce.getDocumentOrThrow = of;
function af() {
  return Kr("document");
}
var Yc = ce.getDocument = af;
function cf() {
  return di("navigator");
}
var Jc = ce.getNavigatorOrThrow = cf;
function hf() {
  return Kr("navigator");
}
var Xc = ce.getNavigator = hf;
function lf() {
  return di("location");
}
var Zc = ce.getLocationOrThrow = lf;
function uf() {
  return Kr("location");
}
var eh = ce.getLocation = uf;
function ff() {
  return di("crypto");
}
var th = ce.getCryptoOrThrow = ff;
function df() {
  return Kr("crypto");
}
var rh = ce.getCrypto = df;
function pf() {
  return di("localStorage");
}
var ih = ce.getLocalStorageOrThrow = pf;
function gf() {
  return Kr("localStorage");
}
Hc = ce.getLocalStorage = gf;
Object.defineProperty(no, "__esModule", { value: !0 });
var nh = no.getWindowMetadata = void 0;
const Vo = ce;
function mf() {
  let t, e;
  try {
    t = Vo.getDocumentOrThrow(), e = Vo.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const m = t.getElementsByTagName("link"), b = [];
    for (let A = 0; A < m.length; A++) {
      const E = m[A], N = E.getAttribute("rel");
      if (N && N.toLowerCase().indexOf("icon") > -1) {
        const I = E.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let x = e.protocol + "//" + e.host;
            if (I.indexOf("/") === 0)
              x += I;
            else {
              const R = e.pathname.split("/");
              R.pop();
              const P = R.join("/");
              x += P + "/" + I;
            }
            b.push(x);
          } else if (I.indexOf("//") === 0) {
            const x = e.protocol + I;
            b.push(x);
          } else
            b.push(I);
      }
    }
    return b;
  }
  function i(...m) {
    const b = t.getElementsByTagName("meta");
    for (let A = 0; A < b.length; A++) {
      const E = b[A], N = ["itemprop", "property", "name"].map((I) => E.getAttribute(I)).filter((I) => I ? m.includes(I) : !1);
      if (N.length && N) {
        const I = E.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function n() {
    let m = i("name", "og:site_name", "og:title", "twitter:title");
    return m || (m = t.title), m;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const o = n(), c = s(), h = e.origin, u = r();
  return {
    description: c,
    url: h,
    icons: u,
    name: o
  };
}
nh = no.getWindowMetadata = mf;
var yf = function() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), n = 0, e = 0; e < r; e++)
    for (var s = arguments[e], o = 0, c = s.length; o < c; o++, n++)
      i[n] = s[o];
  return i;
}, vf = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), wf = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = Y.process.platform;
    }
    return t;
  }()
), bf = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i, n) {
      this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return t;
  }()
), _f = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Af = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Ef = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Sf = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ho = 3, If = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FBAV\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["searchbot", Ef]
], Wo = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Mf(t) {
  return t ? Qo(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Af() : typeof navigator < "u" ? Qo(navigator.userAgent) : Cf();
}
function Nf(t) {
  return t !== "" && If.reduce(function(e, r) {
    var i = r[0], n = r[1];
    if (e)
      return e;
    var s = n.exec(t);
    return !!s && [i, s];
  }, !1);
}
function Qo(t) {
  var e = Nf(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new _f();
  var n = i[1] && i[1].split(/[._]/).slice(0, 3);
  n ? n.length < Ho && (n = yf(n, Rf(Ho - n.length))) : n = [];
  var s = n.join("."), o = xf(t), c = Sf.exec(t);
  return c && c[1] ? new bf(r, s, o, c[1]) : new vf(r, s, o);
}
function xf(t) {
  for (var e = 0, r = Wo.length; e < r; e++) {
    var i = Wo[e], n = i[0], s = i[1], o = s.exec(t);
    if (o)
      return n;
  }
  return null;
}
function Cf() {
  var t = typeof Y.process < "u" && Y.process.version;
  return t ? new wf(Y.process.version.slice(1)) : null;
}
function Rf(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
function so(t) {
  return Mf(t);
}
function xn() {
  const t = so();
  return t && t.os ? t.os : void 0;
}
function sh() {
  const t = xn();
  return t ? t.toLowerCase().includes("android") : !1;
}
function oh() {
  const t = xn();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function Pf() {
  return xn() ? sh() || oh() : !1;
}
function ah() {
  const t = so();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function Tf() {
  return !ah() && !!ch();
}
const Of = Wc, Bf = Qc, kf = Gc, Ff = Yc, Df = Jc, ch = Xc, qf = Zc, Lf = eh, Uf = th, $f = rh, zf = ih, Cn = Hc;
function Kf() {
  return nh();
}
function jf(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Vf(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
const hh = jf, lh = Vf;
function uh(t, e) {
  const r = lh(e), i = Cn();
  i && i.setItem(t, r);
}
function Hf(t) {
  let e = null, r = null;
  const i = Cn();
  return i && (r = i.getItem(t)), e = r && hh(r), e;
}
function Wf(t) {
  const e = Cn();
  e && e.removeItem(t);
}
const fh = "WALLETCONNECT_DEEPLINK_CHOICE";
function Qf(t, e) {
  const r = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
}
function Gf(t) {
  const e = t.href.split("?")[0];
  uh(fh, Object.assign(Object.assign({}, t), { href: e }));
}
function dh(t, e) {
  return t.filter((r) => r.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function Yf(t, e) {
  let r = t;
  return e && (r = e.map((i) => dh(t, i)).filter(Boolean)), r;
}
const ph = "https://registry.walletconnect.com";
function Jf() {
  return ph + "/api/v2/wallets";
}
function Xf() {
  return ph + "/api/v2/dapps";
}
function gh(t, e = "mobile") {
  var r;
  return {
    name: t.name || "",
    shortName: t.metadata.shortName || "",
    color: t.metadata.colors.primary || "",
    logo: (r = t.image_url.sm) !== null && r !== void 0 ? r : "",
    universalLink: t[e].universal || "",
    deepLink: t[e].native || ""
  };
}
function Zf(t, e = "mobile") {
  return Object.values(t).filter((r) => !!r[e].universal || !!r[e].native).map((r) => gh(r, e));
}
const ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  detectEnv: so,
  detectOS: xn,
  formatIOSMobile: Qf,
  formatMobileRegistry: Zf,
  formatMobileRegistryEntry: gh,
  getClientMeta: Kf,
  getCrypto: $f,
  getCryptoOrThrow: Uf,
  getDappRegistryUrl: Xf,
  getDocument: Ff,
  getDocumentOrThrow: kf,
  getFromWindow: Of,
  getFromWindowOrThrow: Bf,
  getLocal: Hf,
  getLocalStorage: Cn,
  getLocalStorageOrThrow: zf,
  getLocation: Lf,
  getLocationOrThrow: qf,
  getMobileLinkRegistry: Yf,
  getMobileRegistryEntry: dh,
  getNavigator: ch,
  getNavigatorOrThrow: Df,
  getWalletRegistryUrl: Jf,
  isAndroid: sh,
  isBrowser: Tf,
  isIOS: oh,
  isMobile: Pf,
  isNode: ah,
  mobileLinkChoiceKey: fh,
  removeLocal: Wf,
  safeJsonParse: hh,
  safeJsonStringify: lh,
  saveMobileLinkInfo: Gf,
  setLocal: uh
}, Symbol.toStringTag, { value: "Module" })), td = /* @__PURE__ */ qc(ed);
var zi = {}, rd = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, mh = {}, yr = {}, id = io;
function nd() {
  try {
    var t = new Uint8Array(1);
    return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, t.foo() === 42;
  } catch {
    return !1;
  }
}
ie.TYPED_ARRAY_SUPPORT = nd();
var Go = ie.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ie(t, e, r) {
  return !ie.TYPED_ARRAY_SUPPORT && !(this instanceof ie) ? new ie(t, e, r) : typeof t == "number" ? yh(this, t) : ud(this, t, e, r);
}
ie.TYPED_ARRAY_SUPPORT && (ie.prototype.__proto__ = Uint8Array.prototype, ie.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ie[Symbol.species] === ie && Object.defineProperty(ie, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
}));
function oo(t) {
  if (t >= Go)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Go.toString(16) + " bytes");
  return t | 0;
}
function sd(t) {
  return t !== t;
}
function ni(t, e) {
  var r;
  return ie.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = ie.prototype) : (r = t, r === null && (r = new ie(e)), r.length = e), r;
}
function yh(t, e) {
  var r = ni(t, e < 0 ? 0 : oo(e) | 0);
  if (!ie.TYPED_ARRAY_SUPPORT)
    for (var i = 0; i < e; ++i)
      r[i] = 0;
  return r;
}
function od(t, e) {
  var r = wh(e) | 0, i = ni(t, r), n = i.write(e);
  return n !== r && (i = i.slice(0, n)), i;
}
function Rs(t, e) {
  for (var r = e.length < 0 ? 0 : oo(e.length) | 0, i = ni(t, r), n = 0; n < r; n += 1)
    i[n] = e[n] & 255;
  return i;
}
function ad(t, e, r, i) {
  if (r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (i || 0))
    throw new RangeError("'length' is out of bounds");
  var n;
  return r === void 0 && i === void 0 ? n = new Uint8Array(e) : i === void 0 ? n = new Uint8Array(e, r) : n = new Uint8Array(e, r, i), ie.TYPED_ARRAY_SUPPORT ? n.__proto__ = ie.prototype : n = Rs(t, n), n;
}
function cd(t, e) {
  if (ie.isBuffer(e)) {
    var r = oo(e.length) | 0, i = ni(t, r);
    return i.length === 0 || e.copy(i, 0, 0, r), i;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || sd(e.length) ? ni(t, 0) : Rs(t, e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return Rs(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function vh(t, e) {
  e = e || 1 / 0;
  for (var r, i = t.length, n = null, s = [], o = 0; o < i; ++o) {
    if (r = t.charCodeAt(o), r > 55295 && r < 57344) {
      if (!n) {
        if (r > 56319) {
          (e -= 3) > -1 && s.push(239, 191, 189);
          continue;
        } else if (o + 1 === i) {
          (e -= 3) > -1 && s.push(239, 191, 189);
          continue;
        }
        n = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && s.push(239, 191, 189), n = r;
        continue;
      }
      r = (n - 55296 << 10 | r - 56320) + 65536;
    } else
      n && (e -= 3) > -1 && s.push(239, 191, 189);
    if (n = null, r < 128) {
      if ((e -= 1) < 0)
        break;
      s.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0)
        break;
      s.push(
        r >> 6 | 192,
        r & 63 | 128
      );
    } else if (r < 65536) {
      if ((e -= 3) < 0)
        break;
      s.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((e -= 4) < 0)
        break;
      s.push(
        r >> 18 | 240,
        r >> 12 & 63 | 128,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return s;
}
function wh(t) {
  if (ie.isBuffer(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var e = t.length;
  return e === 0 ? 0 : vh(t).length;
}
function hd(t, e, r, i) {
  for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n)
    e[n + r] = t[n];
  return n;
}
function ld(t, e, r, i) {
  return hd(vh(e, t.length - r), t, r, i);
}
function ud(t, e, r, i) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? ad(t, e, r, i) : typeof e == "string" ? od(t, e) : cd(t, e);
}
ie.prototype.write = function(e, r, i) {
  r === void 0 ? (i = this.length, r = 0) : i === void 0 && typeof r == "string" ? (i = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(i) ? i = i | 0 : i = void 0);
  var n = this.length - r;
  if ((i === void 0 || i > n) && (i = n), e.length > 0 && (i < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return ld(this, e, r, i);
};
ie.prototype.slice = function(e, r) {
  var i = this.length;
  e = ~~e, r = r === void 0 ? i : ~~r, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), r < 0 ? (r += i, r < 0 && (r = 0)) : r > i && (r = i), r < e && (r = e);
  var n;
  if (ie.TYPED_ARRAY_SUPPORT)
    n = this.subarray(e, r), n.__proto__ = ie.prototype;
  else {
    var s = r - e;
    n = new ie(s, void 0);
    for (var o = 0; o < s; ++o)
      n[o] = this[o + e];
  }
  return n;
};
ie.prototype.copy = function(e, r, i, n) {
  if (i || (i = 0), !n && n !== 0 && (n = this.length), r >= e.length && (r = e.length), r || (r = 0), n > 0 && n < i && (n = i), n === i || e.length === 0 || this.length === 0)
    return 0;
  if (r < 0)
    throw new RangeError("targetStart out of bounds");
  if (i < 0 || i >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (n < 0)
    throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), e.length - r < n - i && (n = e.length - r + i);
  var s = n - i, o;
  if (this === e && i < r && r < n)
    for (o = s - 1; o >= 0; --o)
      e[o + r] = this[o + i];
  else if (s < 1e3 || !ie.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < s; ++o)
      e[o + r] = this[o + i];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(i, i + s),
      r
    );
  return s;
};
ie.prototype.fill = function(e, r, i) {
  if (typeof e == "string") {
    if (typeof r == "string" ? (r = 0, i = this.length) : typeof i == "string" && (i = this.length), e.length === 1) {
      var n = e.charCodeAt(0);
      n < 256 && (e = n);
    }
  } else
    typeof e == "number" && (e = e & 255);
  if (r < 0 || this.length < r || this.length < i)
    throw new RangeError("Out of range index");
  if (i <= r)
    return this;
  r = r >>> 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0);
  var s;
  if (typeof e == "number")
    for (s = r; s < i; ++s)
      this[s] = e;
  else {
    var o = ie.isBuffer(e) ? e : new ie(e), c = o.length;
    for (s = 0; s < i - r; ++s)
      this[s + r] = o[s % c];
  }
  return this;
};
ie.concat = function(e, r) {
  if (!id(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return ni(null, 0);
  var i;
  if (r === void 0)
    for (r = 0, i = 0; i < e.length; ++i)
      r += e[i].length;
  var n = yh(null, r), s = 0;
  for (i = 0; i < e.length; ++i) {
    var o = e[i];
    if (!ie.isBuffer(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, s), s += o.length;
  }
  return n;
};
ie.byteLength = wh;
ie.prototype._isBuffer = !0;
ie.isBuffer = function(e) {
  return !!(e != null && e._isBuffer);
};
yr.alloc = function(t) {
  var e = new ie(t);
  return e.fill(0), e;
};
yr.from = function(t) {
  return new ie(t);
};
var vt = {}, ao, fd = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
vt.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
vt.getSymbolTotalCodewords = function(e) {
  return fd[e];
};
vt.getBCHDigit = function(t) {
  for (var e = 0; t !== 0; )
    e++, t >>>= 1;
  return e;
};
vt.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  ao = e;
};
vt.isKanjiModeEnabled = function() {
  return typeof ao < "u";
};
vt.toSJIS = function(e) {
  return ao(e);
};
var Rn = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    var i = r.toLowerCase();
    switch (i) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  t.isValid = function(i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }, t.from = function(i, n) {
    if (t.isValid(i))
      return i;
    try {
      return e(i);
    } catch {
      return n;
    }
  };
})(Rn);
function bh() {
  this.buffer = [], this.length = 0;
}
bh.prototype = {
  get: function(t) {
    var e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (var r = 0; r < e; r++)
      this.putBit((t >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    var e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var dd = bh, Yo = yr;
function Ki(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = Yo.alloc(t * t), this.reservedBit = Yo.alloc(t * t);
}
Ki.prototype.set = function(t, e, r, i) {
  var n = t * this.size + e;
  this.data[n] = r, i && (this.reservedBit[n] = !0);
};
Ki.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
Ki.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
};
Ki.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var pd = Ki, _h = {};
(function(t) {
  var e = vt.getSymbolSize;
  t.getRowColCoords = function(i) {
    if (i === 1)
      return [];
    for (var n = Math.floor(i / 7) + 2, s = e(i), o = s === 145 ? 26 : Math.ceil((s - 13) / (2 * n - 2)) * 2, c = [s - 7], h = 1; h < n - 1; h++)
      c[h] = c[h - 1] - o;
    return c.push(6), c.reverse();
  }, t.getPositions = function(i) {
    for (var n = [], s = t.getRowColCoords(i), o = s.length, c = 0; c < o; c++)
      for (var h = 0; h < o; h++)
        c === 0 && h === 0 || // top-left
        c === 0 && h === o - 1 || // bottom-left
        c === o - 1 && h === 0 || n.push([s[c], s[h]]);
    return n;
  };
})(_h);
var Ah = {}, gd = vt.getSymbolSize, Jo = 7;
Ah.getPositions = function(e) {
  var r = gd(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - Jo, 0],
    // bottom-left
    [0, r - Jo]
  ];
};
var Eh = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, t.from = function(n) {
    return t.isValid(n) ? parseInt(n, 10) : void 0;
  }, t.getPenaltyN1 = function(n) {
    for (var s = n.size, o = 0, c = 0, h = 0, u = null, d = null, m = 0; m < s; m++) {
      c = h = 0, u = d = null;
      for (var b = 0; b < s; b++) {
        var A = n.get(m, b);
        A === u ? c++ : (c >= 5 && (o += e.N1 + (c - 5)), u = A, c = 1), A = n.get(b, m), A === d ? h++ : (h >= 5 && (o += e.N1 + (h - 5)), d = A, h = 1);
      }
      c >= 5 && (o += e.N1 + (c - 5)), h >= 5 && (o += e.N1 + (h - 5));
    }
    return o;
  }, t.getPenaltyN2 = function(n) {
    for (var s = n.size, o = 0, c = 0; c < s - 1; c++)
      for (var h = 0; h < s - 1; h++) {
        var u = n.get(c, h) + n.get(c, h + 1) + n.get(c + 1, h) + n.get(c + 1, h + 1);
        (u === 4 || u === 0) && o++;
      }
    return o * e.N2;
  }, t.getPenaltyN3 = function(n) {
    for (var s = n.size, o = 0, c = 0, h = 0, u = 0; u < s; u++) {
      c = h = 0;
      for (var d = 0; d < s; d++)
        c = c << 1 & 2047 | n.get(u, d), d >= 10 && (c === 1488 || c === 93) && o++, h = h << 1 & 2047 | n.get(d, u), d >= 10 && (h === 1488 || h === 93) && o++;
    }
    return o * e.N3;
  }, t.getPenaltyN4 = function(n) {
    for (var s = 0, o = n.data.length, c = 0; c < o; c++)
      s += n.data[c];
    var h = Math.abs(Math.ceil(s * 100 / o / 5) - 10);
    return h * e.N4;
  };
  function r(i, n, s) {
    switch (i) {
      case t.Patterns.PATTERN000:
        return (n + s) % 2 === 0;
      case t.Patterns.PATTERN001:
        return n % 2 === 0;
      case t.Patterns.PATTERN010:
        return s % 3 === 0;
      case t.Patterns.PATTERN011:
        return (n + s) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return n * s % 2 + n * s % 3 === 0;
      case t.Patterns.PATTERN110:
        return (n * s % 2 + n * s % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (n * s % 3 + (n + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  t.applyMask = function(n, s) {
    for (var o = s.size, c = 0; c < o; c++)
      for (var h = 0; h < o; h++)
        s.isReserved(h, c) || s.xor(h, c, r(n, h, c));
  }, t.getBestMask = function(n, s) {
    for (var o = Object.keys(t.Patterns).length, c = 0, h = 1 / 0, u = 0; u < o; u++) {
      s(u), t.applyMask(u, n);
      var d = t.getPenaltyN1(n) + t.getPenaltyN2(n) + t.getPenaltyN3(n) + t.getPenaltyN4(n);
      t.applyMask(u, n), d < h && (h = d, c = u);
    }
    return c;
  };
})(Eh);
var Pn = {}, dr = Rn, Ji = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Xi = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
Pn.getBlocksCount = function(e, r) {
  switch (r) {
    case dr.L:
      return Ji[(e - 1) * 4 + 0];
    case dr.M:
      return Ji[(e - 1) * 4 + 1];
    case dr.Q:
      return Ji[(e - 1) * 4 + 2];
    case dr.H:
      return Ji[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Pn.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case dr.L:
      return Xi[(e - 1) * 4 + 0];
    case dr.M:
      return Xi[(e - 1) * 4 + 1];
    case dr.Q:
      return Xi[(e - 1) * 4 + 2];
    case dr.H:
      return Xi[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Sh = {}, Tn = {}, Ih = yr, Pi = Ih.alloc(512), pn = Ih.alloc(256);
(function() {
  for (var e = 1, r = 0; r < 255; r++)
    Pi[r] = e, pn[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (r = 255; r < 512; r++)
    Pi[r] = Pi[r - 255];
})();
Tn.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return pn[e];
};
Tn.exp = function(e) {
  return Pi[e];
};
Tn.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : Pi[pn[e] + pn[r]];
};
(function(t) {
  var e = yr, r = Tn;
  t.mul = function(n, s) {
    for (var o = e.alloc(n.length + s.length - 1), c = 0; c < n.length; c++)
      for (var h = 0; h < s.length; h++)
        o[c + h] ^= r.mul(n[c], s[h]);
    return o;
  }, t.mod = function(n, s) {
    for (var o = e.from(n); o.length - s.length >= 0; ) {
      for (var c = o[0], h = 0; h < s.length; h++)
        o[h] ^= r.mul(s[h], c);
      for (var u = 0; u < o.length && o[u] === 0; )
        u++;
      o = o.slice(u);
    }
    return o;
  }, t.generateECPolynomial = function(n) {
    for (var s = e.from([1]), o = 0; o < n; o++)
      s = t.mul(s, [1, r.exp(o)]);
    return s;
  };
})(Sh);
var Xo = yr, Mh = Sh, md = Tu.Buffer;
function co(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
co.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Mh.generateECPolynomial(this.degree);
};
co.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var r = Xo.alloc(this.degree), i = md.concat([e, r], e.length + this.degree), n = Mh.mod(i, this.genPoly), s = this.degree - n.length;
  if (s > 0) {
    var o = Xo.alloc(this.degree);
    return n.copy(o, s), o;
  }
  return n;
};
var yd = co, Nh = {}, vr = {}, ho = {};
ho.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var jt = {}, xh = "[0-9]+", vd = "[A-Z $%*+\\-./:]+", Fi = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Fi = Fi.replace(/u/g, "\\u");
var wd = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Fi + `)(?:.|[\r
]))+`;
jt.KANJI = new RegExp(Fi, "g");
jt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
jt.BYTE = new RegExp(wd, "g");
jt.NUMERIC = new RegExp(xh, "g");
jt.ALPHANUMERIC = new RegExp(vd, "g");
var bd = new RegExp("^" + Fi + "$"), _d = new RegExp("^" + xh + "$"), Ad = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
jt.testKanji = function(e) {
  return bd.test(e);
};
jt.testNumeric = function(e) {
  return _d.test(e);
};
jt.testAlphanumeric = function(e) {
  return Ad.test(e);
};
(function(t) {
  var e = ho, r = jt;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(s, o) {
    if (!s.ccBits)
      throw new Error("Invalid mode: " + s);
    if (!e.isValid(o))
      throw new Error("Invalid version: " + o);
    return o >= 1 && o < 10 ? s.ccBits[0] : o < 27 ? s.ccBits[1] : s.ccBits[2];
  }, t.getBestModeForData = function(s) {
    return r.testNumeric(s) ? t.NUMERIC : r.testAlphanumeric(s) ? t.ALPHANUMERIC : r.testKanji(s) ? t.KANJI : t.BYTE;
  }, t.toString = function(s) {
    if (s && s.id)
      return s.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(s) {
    return s && s.bit && s.ccBits;
  };
  function i(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    var s = n.toLowerCase();
    switch (s) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + n);
    }
  }
  t.from = function(s, o) {
    if (t.isValid(s))
      return s;
    try {
      return i(s);
    } catch {
      return o;
    }
  };
})(vr);
(function(t) {
  var e = vt, r = Pn, i = Rn, n = vr, s = ho, o = io, c = 7973, h = e.getBCHDigit(c);
  function u(A, E, N) {
    for (var I = 1; I <= 40; I++)
      if (E <= t.getCapacity(I, N, A))
        return I;
  }
  function d(A, E) {
    return n.getCharCountIndicator(A, E) + 4;
  }
  function m(A, E) {
    var N = 0;
    return A.forEach(function(I) {
      var x = d(I.mode, E);
      N += x + I.getBitsLength();
    }), N;
  }
  function b(A, E) {
    for (var N = 1; N <= 40; N++) {
      var I = m(A, N);
      if (I <= t.getCapacity(N, E, n.MIXED))
        return N;
    }
  }
  t.from = function(E, N) {
    return s.isValid(E) ? parseInt(E, 10) : N;
  }, t.getCapacity = function(E, N, I) {
    if (!s.isValid(E))
      throw new Error("Invalid QR Code version");
    typeof I > "u" && (I = n.BYTE);
    var x = e.getSymbolTotalCodewords(E), R = r.getTotalCodewordsCount(E, N), P = (x - R) * 8;
    if (I === n.MIXED)
      return P;
    var C = P - d(I, E);
    switch (I) {
      case n.NUMERIC:
        return Math.floor(C / 10 * 3);
      case n.ALPHANUMERIC:
        return Math.floor(C / 11 * 2);
      case n.KANJI:
        return Math.floor(C / 13);
      case n.BYTE:
      default:
        return Math.floor(C / 8);
    }
  }, t.getBestVersionForData = function(E, N) {
    var I, x = i.from(N, i.M);
    if (o(E)) {
      if (E.length > 1)
        return b(E, x);
      if (E.length === 0)
        return 1;
      I = E[0];
    } else
      I = E;
    return u(I.mode, I.getLength(), x);
  }, t.getEncodedBits = function(E) {
    if (!s.isValid(E) || E < 7)
      throw new Error("Invalid QR Code version");
    for (var N = E << 12; e.getBCHDigit(N) - h >= 0; )
      N ^= c << e.getBCHDigit(N) - h;
    return E << 12 | N;
  };
})(Nh);
var Ch = {}, Ps = vt, Rh = 1335, Ed = 21522, Zo = Ps.getBCHDigit(Rh);
Ch.getEncodedBits = function(e, r) {
  for (var i = e.bit << 3 | r, n = i << 10; Ps.getBCHDigit(n) - Zo >= 0; )
    n ^= Rh << Ps.getBCHDigit(n) - Zo;
  return (i << 10 | n) ^ Ed;
};
var Ph = {}, Sd = vr;
function si(t) {
  this.mode = Sd.NUMERIC, this.data = t.toString();
}
si.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
si.prototype.getLength = function() {
  return this.data.length;
};
si.prototype.getBitsLength = function() {
  return si.getBitsLength(this.data.length);
};
si.prototype.write = function(e) {
  var r, i, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    i = this.data.substr(r, 3), n = parseInt(i, 10), e.put(n, 10);
  var s = this.data.length - r;
  s > 0 && (i = this.data.substr(r), n = parseInt(i, 10), e.put(n, s * 3 + 1));
};
var Id = si, Md = vr, Xn = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function oi(t) {
  this.mode = Md.ALPHANUMERIC, this.data = t;
}
oi.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
oi.prototype.getLength = function() {
  return this.data.length;
};
oi.prototype.getBitsLength = function() {
  return oi.getBitsLength(this.data.length);
};
oi.prototype.write = function(e) {
  var r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    var i = Xn.indexOf(this.data[r]) * 45;
    i += Xn.indexOf(this.data[r + 1]), e.put(i, 11);
  }
  this.data.length % 2 && e.put(Xn.indexOf(this.data[r]), 6);
};
var Nd = oi, xd = yr, Cd = vr;
function ai(t) {
  this.mode = Cd.BYTE, this.data = xd.from(t);
}
ai.getBitsLength = function(e) {
  return e * 8;
};
ai.prototype.getLength = function() {
  return this.data.length;
};
ai.prototype.getBitsLength = function() {
  return ai.getBitsLength(this.data.length);
};
ai.prototype.write = function(t) {
  for (var e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var Rd = ai, Pd = vr, Td = vt;
function ci(t) {
  this.mode = Pd.KANJI, this.data = t;
}
ci.getBitsLength = function(e) {
  return e * 13;
};
ci.prototype.getLength = function() {
  return this.data.length;
};
ci.prototype.getBitsLength = function() {
  return ci.getBitsLength(this.data.length);
};
ci.prototype.write = function(t) {
  var e;
  for (e = 0; e < this.data.length; e++) {
    var r = Td.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var Od = ci;
(function(t) {
  var e = vr, r = Id, i = Nd, n = Rd, s = Od, o = jt, c = vt, h = ku;
  function u(x) {
    return unescape(encodeURIComponent(x)).length;
  }
  function d(x, R, P) {
    for (var C = [], k; (k = x.exec(P)) !== null; )
      C.push({
        data: k[0],
        index: k.index,
        mode: R,
        length: k[0].length
      });
    return C;
  }
  function m(x) {
    var R = d(o.NUMERIC, e.NUMERIC, x), P = d(o.ALPHANUMERIC, e.ALPHANUMERIC, x), C, k;
    c.isKanjiModeEnabled() ? (C = d(o.BYTE, e.BYTE, x), k = d(o.KANJI, e.KANJI, x)) : (C = d(o.BYTE_KANJI, e.BYTE, x), k = []);
    var F = R.concat(P, C, k);
    return F.sort(function(q, $) {
      return q.index - $.index;
    }).map(function(q) {
      return {
        data: q.data,
        mode: q.mode,
        length: q.length
      };
    });
  }
  function b(x, R) {
    switch (R) {
      case e.NUMERIC:
        return r.getBitsLength(x);
      case e.ALPHANUMERIC:
        return i.getBitsLength(x);
      case e.KANJI:
        return s.getBitsLength(x);
      case e.BYTE:
        return n.getBitsLength(x);
    }
  }
  function A(x) {
    return x.reduce(function(R, P) {
      var C = R.length - 1 >= 0 ? R[R.length - 1] : null;
      return C && C.mode === P.mode ? (R[R.length - 1].data += P.data, R) : (R.push(P), R);
    }, []);
  }
  function E(x) {
    for (var R = [], P = 0; P < x.length; P++) {
      var C = x[P];
      switch (C.mode) {
        case e.NUMERIC:
          R.push([
            C,
            { data: C.data, mode: e.ALPHANUMERIC, length: C.length },
            { data: C.data, mode: e.BYTE, length: C.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          R.push([
            C,
            { data: C.data, mode: e.BYTE, length: C.length }
          ]);
          break;
        case e.KANJI:
          R.push([
            C,
            { data: C.data, mode: e.BYTE, length: u(C.data) }
          ]);
          break;
        case e.BYTE:
          R.push([
            { data: C.data, mode: e.BYTE, length: u(C.data) }
          ]);
      }
    }
    return R;
  }
  function N(x, R) {
    for (var P = {}, C = { start: {} }, k = ["start"], F = 0; F < x.length; F++) {
      for (var q = x[F], $ = [], X = 0; X < q.length; X++) {
        var se = q[X], Z = "" + F + X;
        $.push(Z), P[Z] = { node: se, lastCount: 0 }, C[Z] = {};
        for (var oe = 0; oe < k.length; oe++) {
          var a = k[oe];
          P[a] && P[a].node.mode === se.mode ? (C[a][Z] = b(P[a].lastCount + se.length, se.mode) - b(P[a].lastCount, se.mode), P[a].lastCount += se.length) : (P[a] && (P[a].lastCount = se.length), C[a][Z] = b(se.length, se.mode) + 4 + e.getCharCountIndicator(se.mode, R));
        }
      }
      k = $;
    }
    for (oe = 0; oe < k.length; oe++)
      C[k[oe]].end = 0;
    return { map: C, table: P };
  }
  function I(x, R) {
    var P, C = e.getBestModeForData(x);
    if (P = e.from(R, C), P !== e.BYTE && P.bit < C.bit)
      throw new Error('"' + x + '" cannot be encoded with mode ' + e.toString(P) + `.
 Suggested mode is: ` + e.toString(C));
    switch (P === e.KANJI && !c.isKanjiModeEnabled() && (P = e.BYTE), P) {
      case e.NUMERIC:
        return new r(x);
      case e.ALPHANUMERIC:
        return new i(x);
      case e.KANJI:
        return new s(x);
      case e.BYTE:
        return new n(x);
    }
  }
  t.fromArray = function(R) {
    return R.reduce(function(P, C) {
      return typeof C == "string" ? P.push(I(C, null)) : C.data && P.push(I(C.data, C.mode)), P;
    }, []);
  }, t.fromString = function(R, P) {
    for (var C = m(R, c.isKanjiModeEnabled()), k = E(C), F = N(k, P), q = h.find_path(F.map, "start", "end"), $ = [], X = 1; X < q.length - 1; X++)
      $.push(F.table[q[X]].node);
    return t.fromArray(A($));
  }, t.rawSplit = function(R) {
    return t.fromArray(
      m(R, c.isKanjiModeEnabled())
    );
  };
})(Ph);
var ea = yr, On = vt, Zn = Rn, Bd = dd, kd = pd, Fd = _h, Dd = Ah, Ts = Eh, Os = Pn, qd = yd, gn = Nh, Ld = Ch, Ud = vr, es = Ph, $d = io;
function zd(t, e) {
  for (var r = t.size, i = Dd.getPositions(e), n = 0; n < i.length; n++)
    for (var s = i[n][0], o = i[n][1], c = -1; c <= 7; c++)
      if (!(s + c <= -1 || r <= s + c))
        for (var h = -1; h <= 7; h++)
          o + h <= -1 || r <= o + h || (c >= 0 && c <= 6 && (h === 0 || h === 6) || h >= 0 && h <= 6 && (c === 0 || c === 6) || c >= 2 && c <= 4 && h >= 2 && h <= 4 ? t.set(s + c, o + h, !0, !0) : t.set(s + c, o + h, !1, !0));
}
function Kd(t) {
  for (var e = t.size, r = 8; r < e - 8; r++) {
    var i = r % 2 === 0;
    t.set(r, 6, i, !0), t.set(6, r, i, !0);
  }
}
function jd(t, e) {
  for (var r = Fd.getPositions(e), i = 0; i < r.length; i++)
    for (var n = r[i][0], s = r[i][1], o = -2; o <= 2; o++)
      for (var c = -2; c <= 2; c++)
        o === -2 || o === 2 || c === -2 || c === 2 || o === 0 && c === 0 ? t.set(n + o, s + c, !0, !0) : t.set(n + o, s + c, !1, !0);
}
function Vd(t, e) {
  for (var r = t.size, i = gn.getEncodedBits(e), n, s, o, c = 0; c < 18; c++)
    n = Math.floor(c / 3), s = c % 3 + r - 8 - 3, o = (i >> c & 1) === 1, t.set(n, s, o, !0), t.set(s, n, o, !0);
}
function ts(t, e, r) {
  var i = t.size, n = Ld.getEncodedBits(e, r), s, o;
  for (s = 0; s < 15; s++)
    o = (n >> s & 1) === 1, s < 6 ? t.set(s, 8, o, !0) : s < 8 ? t.set(s + 1, 8, o, !0) : t.set(i - 15 + s, 8, o, !0), s < 8 ? t.set(8, i - s - 1, o, !0) : s < 9 ? t.set(8, 15 - s - 1 + 1, o, !0) : t.set(8, 15 - s - 1, o, !0);
  t.set(i - 8, 8, 1, !0);
}
function Hd(t, e) {
  for (var r = t.size, i = -1, n = r - 1, s = 7, o = 0, c = r - 1; c > 0; c -= 2)
    for (c === 6 && c--; ; ) {
      for (var h = 0; h < 2; h++)
        if (!t.isReserved(n, c - h)) {
          var u = !1;
          o < e.length && (u = (e[o] >>> s & 1) === 1), t.set(n, c - h, u), s--, s === -1 && (o++, s = 7);
        }
      if (n += i, n < 0 || r <= n) {
        n -= i, i = -i;
        break;
      }
    }
}
function Wd(t, e, r) {
  var i = new Bd();
  r.forEach(function(u) {
    i.put(u.mode.bit, 4), i.put(u.getLength(), Ud.getCharCountIndicator(u.mode, t)), u.write(i);
  });
  var n = On.getSymbolTotalCodewords(t), s = Os.getTotalCodewordsCount(t, e), o = (n - s) * 8;
  for (i.getLengthInBits() + 4 <= o && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  for (var c = (o - i.getLengthInBits()) / 8, h = 0; h < c; h++)
    i.put(h % 2 ? 17 : 236, 8);
  return Qd(i, t, e);
}
function Qd(t, e, r) {
  for (var i = On.getSymbolTotalCodewords(e), n = Os.getTotalCodewordsCount(e, r), s = i - n, o = Os.getBlocksCount(e, r), c = i % o, h = o - c, u = Math.floor(i / o), d = Math.floor(s / o), m = d + 1, b = u - d, A = new qd(b), E = 0, N = new Array(o), I = new Array(o), x = 0, R = ea.from(t.buffer), P = 0; P < o; P++) {
    var C = P < h ? d : m;
    N[P] = R.slice(E, E + C), I[P] = A.encode(N[P]), E += C, x = Math.max(x, C);
  }
  var k = ea.alloc(i), F = 0, q, $;
  for (q = 0; q < x; q++)
    for ($ = 0; $ < o; $++)
      q < N[$].length && (k[F++] = N[$][q]);
  for (q = 0; q < b; q++)
    for ($ = 0; $ < o; $++)
      k[F++] = I[$][q];
  return k;
}
function Gd(t, e, r, i) {
  var n;
  if ($d(t))
    n = es.fromArray(t);
  else if (typeof t == "string") {
    var s = e;
    if (!s) {
      var o = es.rawSplit(t);
      s = gn.getBestVersionForData(
        o,
        r
      );
    }
    n = es.fromString(t, s || 40);
  } else
    throw new Error("Invalid data");
  var c = gn.getBestVersionForData(
    n,
    r
  );
  if (!c)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = c;
  else if (e < c)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + c + `.
`
    );
  var h = Wd(e, r, n), u = On.getSymbolSize(e), d = new kd(u);
  return zd(d, e), Kd(d), jd(d, e), ts(d, r, 0), e >= 7 && Vd(d, e), Hd(d, h), isNaN(i) && (i = Ts.getBestMask(
    d,
    ts.bind(null, d, r)
  )), Ts.applyMask(i, d), ts(d, r, i), {
    modules: d,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: i,
    segments: n
  };
}
mh.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  var i = Zn.M, n, s;
  return typeof r < "u" && (i = Zn.from(r.errorCorrectionLevel, Zn.M), n = gn.from(r.version), s = Ts.from(r.maskPattern), r.toSJISFunc && On.setToSJISFunction(r.toSJISFunc)), Gd(e, n, i, s);
};
var Th = {}, lo = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    var i = r.slice().replace("#", "").split("");
    if (i.length < 3 || i.length === 5 || i.length > 8)
      throw new Error("Invalid hex color: " + r);
    (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(s) {
      return [s, s];
    }))), i.length === 6 && i.push("F", "F");
    var n = parseInt(i.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + i.slice(0, 6).join("")
    };
  }
  t.getOptions = function(i) {
    i || (i = {}), i.color || (i.color = {});
    var n = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, s = i.width && i.width >= 21 ? i.width : void 0, o = i.scale || 4;
    return {
      width: s,
      scale: s ? 4 : o,
      margin: n,
      color: {
        dark: e(i.color.dark || "#000000ff"),
        light: e(i.color.light || "#ffffffff")
      },
      type: i.type,
      rendererOpts: i.rendererOpts || {}
    };
  }, t.getScale = function(i, n) {
    return n.width && n.width >= i + n.margin * 2 ? n.width / (i + n.margin * 2) : n.scale;
  }, t.getImageWidth = function(i, n) {
    var s = t.getScale(i, n);
    return Math.floor((i + n.margin * 2) * s);
  }, t.qrToImageData = function(i, n, s) {
    for (var o = n.modules.size, c = n.modules.data, h = t.getScale(o, s), u = Math.floor((o + s.margin * 2) * h), d = s.margin * h, m = [s.color.light, s.color.dark], b = 0; b < u; b++)
      for (var A = 0; A < u; A++) {
        var E = (b * u + A) * 4, N = s.color.light;
        if (b >= d && A >= d && b < u - d && A < u - d) {
          var I = Math.floor((b - d) / h), x = Math.floor((A - d) / h);
          N = m[c[I * o + x] ? 1 : 0];
        }
        i[E++] = N.r, i[E++] = N.g, i[E++] = N.b, i[E] = N.a;
      }
  };
})(lo);
(function(t) {
  var e = lo;
  function r(n, s, o) {
    n.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = o, s.width = o, s.style.height = o + "px", s.style.width = o + "px";
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(s, o, c) {
    var h = c, u = o;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), o || (u = i()), h = e.getOptions(h);
    var d = e.getImageWidth(s.modules.size, h), m = u.getContext("2d"), b = m.createImageData(d, d);
    return e.qrToImageData(b.data, s, h), r(m, u, d), m.putImageData(b, 0, 0), u;
  }, t.renderToDataURL = function(s, o, c) {
    var h = c;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), h || (h = {});
    var u = t.render(s, o, h), d = h.type || "image/png", m = h.rendererOpts || {};
    return u.toDataURL(d, m.quality);
  };
})(Th);
var Oh = {}, Yd = lo;
function ta(t, e) {
  var r = t.a / 255, i = e + '="' + t.hex + '"';
  return r < 1 ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : i;
}
function rs(t, e, r) {
  var i = t + e;
  return typeof r < "u" && (i += " " + r), i;
}
function Jd(t, e, r) {
  for (var i = "", n = 0, s = !1, o = 0, c = 0; c < t.length; c++) {
    var h = Math.floor(c % e), u = Math.floor(c / e);
    !h && !s && (s = !0), t[c] ? (o++, c > 0 && h > 0 && t[c - 1] || (i += s ? rs("M", h + r, 0.5 + u + r) : rs("m", n, 0), n = 0, s = !1), h + 1 < e && t[c + 1] || (i += rs("h", o), o = 0)) : n++;
  }
  return i;
}
Oh.render = function(e, r, i) {
  var n = Yd.getOptions(r), s = e.modules.size, o = e.modules.data, c = s + n.margin * 2, h = n.color.light.a ? "<path " + ta(n.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "", u = "<path " + ta(n.color.dark, "stroke") + ' d="' + Jd(o, s, n.margin) + '"/>', d = 'viewBox="0 0 ' + c + " " + c + '"', m = n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "", b = '<svg xmlns="http://www.w3.org/2000/svg" ' + m + d + ' shape-rendering="crispEdges">' + h + u + `</svg>
`;
  return typeof i == "function" && i(null, b), b;
};
var Xd = rd, Bs = mh, Bh = Th, Zd = Oh;
function uo(t, e, r, i, n) {
  var s = [].slice.call(arguments, 1), o = s.length, c = typeof s[o - 1] == "function";
  if (!c && !Xd())
    throw new Error("Callback required as last argument");
  if (c) {
    if (o < 2)
      throw new Error("Too few arguments provided");
    o === 2 ? (n = r, r = e, e = i = void 0) : o === 3 && (e.getContext && typeof n > "u" ? (n = i, i = void 0) : (n = i, i = r, r = e, e = void 0));
  } else {
    if (o < 1)
      throw new Error("Too few arguments provided");
    return o === 1 ? (r = e, e = i = void 0) : o === 2 && !e.getContext && (i = r, r = e, e = void 0), new Promise(function(u, d) {
      try {
        var m = Bs.create(r, i);
        u(t(m, e, i));
      } catch (b) {
        d(b);
      }
    });
  }
  try {
    var h = Bs.create(r, i);
    n(null, t(h, e, i));
  } catch (u) {
    n(u);
  }
}
zi.create = Bs.create;
zi.toCanvas = uo.bind(null, Bh.render);
zi.toDataURL = uo.bind(null, Bh.renderToDataURL);
zi.toString = uo.bind(null, function(t, e, r) {
  return Zd.render(t, r);
});
var G, Ti, fo, kh, ra, po, Fh, Zt = {}, Bn = [], e0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function Xt(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Dh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function tr(t, e, r) {
  var i, n = arguments, s = {};
  for (i in e)
    i !== "key" && i !== "ref" && (s[i] = e[i]);
  if (arguments.length > 3)
    for (r = [r], i = 3; i < arguments.length; i++)
      r.push(n[i]);
  if (r != null && (s.children = r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return mn(t, s, e && e.key, e && e.ref, null);
}
function mn(t, e, r, i, n) {
  var s = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n };
  return n == null && (s.__v = s), G.vnode && G.vnode(s), s;
}
function qh() {
  return {};
}
function ji(t) {
  return t.children;
}
function Bt(t, e) {
  this.props = t, this.context = e;
}
function Di(t, e) {
  if (e == null)
    return t.__ ? Di(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Di(t) : null;
}
function Lh(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Lh(t);
  }
}
function sn(t) {
  (!t.__d && (t.__d = !0) && Ti.push(t) && !fo++ || ra !== G.debounceRendering) && ((ra = G.debounceRendering) || kh)(t0);
}
function t0() {
  for (var t; fo = Ti.length; )
    t = Ti.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), Ti = [], t.some(function(e) {
      var r, i, n, s, o, c, h;
      e.__d && (c = (o = (r = e).__v).__e, (h = r.__P) && (i = [], (n = Xt({}, o)).__v = n, s = go(h, o, n, r.__n, h.ownerSVGElement !== void 0, null, i, c ?? Di(o)), $h(i, o), s != c && Lh(o)));
    });
}
function Uh(t, e, r, i, n, s, o, c, h) {
  var u, d, m, b, A, E, N, I = r && r.__k || Bn, x = I.length;
  if (c == Zt && (c = s != null ? s[0] : x ? Di(r, 0) : null), u = 0, e.__k = pr(e.__k, function(R) {
    if (R != null) {
      if (R.__ = e, R.__b = e.__b + 1, (m = I[u]) === null || m && R.key == m.key && R.type === m.type)
        I[u] = void 0;
      else
        for (d = 0; d < x; d++) {
          if ((m = I[d]) && R.key == m.key && R.type === m.type) {
            I[d] = void 0;
            break;
          }
          m = null;
        }
      if (b = go(t, R, m = m || Zt, i, n, s, o, c, h), (d = R.ref) && m.ref != d && (N || (N = []), m.ref && N.push(m.ref, null, R), N.push(d, R.__c || b, R)), b != null) {
        var P;
        if (E == null && (E = b), R.__d !== void 0)
          P = R.__d, R.__d = void 0;
        else if (s == m || b != c || b.parentNode == null) {
          e:
            if (c == null || c.parentNode !== t)
              t.appendChild(b), P = null;
            else {
              for (A = c, d = 0; (A = A.nextSibling) && d < x; d += 2)
                if (A == b)
                  break e;
              t.insertBefore(b, c), P = c;
            }
          e.type == "option" && (t.value = "");
        }
        c = P !== void 0 ? P : b.nextSibling, typeof e.type == "function" && (e.__d = c);
      } else
        c && m.__e == c && c.parentNode != t && (c = Di(m));
    }
    return u++, R;
  }), e.__e = E, s != null && typeof e.type != "function")
    for (u = s.length; u--; )
      s[u] != null && Dh(s[u]);
  for (u = x; u--; )
    I[u] != null && Oi(I[u], I[u]);
  if (N)
    for (u = 0; u < N.length; u++)
      zh(N[u], N[++u], N[++u]);
}
function pr(t, e, r) {
  if (r == null && (r = []), t == null || typeof t == "boolean")
    e && r.push(e(null));
  else if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      pr(t[i], e, r);
  else
    r.push(e ? e(typeof t == "string" || typeof t == "number" ? mn(null, t, null, null, t) : t.__e != null || t.__c != null ? mn(t.type, t.props, t.key, null, t.__v) : t) : t);
  return r;
}
function r0(t, e, r, i, n) {
  var s;
  for (s in r)
    s === "children" || s === "key" || s in e || yn(t, s, null, r[s], i);
  for (s in e)
    n && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || r[s] === e[s] || yn(t, s, e[s], r[s], i);
}
function ia(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = typeof r == "number" && e0.test(e) === !1 ? r + "px" : r ?? "";
}
function yn(t, e, r, i, n) {
  var s, o, c, h, u;
  if (n ? e === "className" && (e = "class") : e === "class" && (e = "className"), e === "style")
    if (s = t.style, typeof r == "string")
      s.cssText = r;
    else {
      if (typeof i == "string" && (s.cssText = "", i = null), i)
        for (h in i)
          r && h in r || ia(s, h, "");
      if (r)
        for (u in r)
          i && r[u] === i[u] || ia(s, u, r[u]);
    }
  else
    e[0] === "o" && e[1] === "n" ? (o = e !== (e = e.replace(/Capture$/, "")), c = e.toLowerCase(), e = (c in t ? c : e).slice(2), r ? (i || t.addEventListener(e, na, o), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, na, o)) : e !== "list" && e !== "tagName" && e !== "form" && e !== "type" && e !== "size" && !n && e in t ? t[e] = r ?? "" : typeof r != "function" && e !== "dangerouslySetInnerHTML" && (e !== (e = e.replace(/^xlink:?/, "")) ? r == null || r === !1 ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function na(t) {
  this.l[t.type](G.event ? G.event(t) : t);
}
function go(t, e, r, i, n, s, o, c, h) {
  var u, d, m, b, A, E, N, I, x, R, P = e.type;
  if (e.constructor !== void 0)
    return null;
  (u = G.__b) && u(e);
  try {
    e:
      if (typeof P == "function") {
        if (I = e.props, x = (u = P.contextType) && i[u.__c], R = u ? x ? x.props.value : u.__ : i, r.__c ? N = (d = e.__c = r.__c).__ = d.__E : ("prototype" in P && P.prototype.render ? e.__c = d = new P(I, R) : (e.__c = d = new Bt(I, R), d.constructor = P, d.render = n0), x && x.sub(d), d.props = I, d.state || (d.state = {}), d.context = R, d.__n = i, m = d.__d = !0, d.__h = []), d.__s == null && (d.__s = d.state), P.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Xt({}, d.__s)), Xt(d.__s, P.getDerivedStateFromProps(I, d.__s))), b = d.props, A = d.state, m)
          P.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && I !== b && d.componentWillReceiveProps != null && d.componentWillReceiveProps(I, R), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(I, d.__s, R) === !1 || e.__v === r.__v && !d.__) {
            for (d.props = I, d.state = d.__s, e.__v !== r.__v && (d.__d = !1), d.__v = e, e.__e = r.__e, e.__k = r.__k, d.__h.length && o.push(d), u = 0; u < e.__k.length; u++)
              e.__k[u] && (e.__k[u].__ = e);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(I, d.__s, R), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(b, A, E);
          });
        }
        d.context = R, d.props = I, d.state = d.__s, (u = G.__r) && u(e), d.__d = !1, d.__v = e, d.__P = t, u = d.render(d.props, d.state, d.context), e.__k = u != null && u.type == ji && u.key == null ? u.props.children : Array.isArray(u) ? u : [u], d.getChildContext != null && (i = Xt(Xt({}, i), d.getChildContext())), m || d.getSnapshotBeforeUpdate == null || (E = d.getSnapshotBeforeUpdate(b, A)), Uh(t, e, r, i, n, s, o, c, h), d.base = e.__e, d.__h.length && o.push(d), N && (d.__E = d.__ = null), d.__e = !1;
      } else
        s == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = i0(r.__e, e, r, i, n, s, o, h);
    (u = G.diffed) && u(e);
  } catch (C) {
    e.__v = null, G.__e(C, e, r);
  }
  return e.__e;
}
function $h(t, e) {
  G.__c && G.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(i) {
        i.call(r);
      });
    } catch (i) {
      G.__e(i, r.__v);
    }
  });
}
function i0(t, e, r, i, n, s, o, c) {
  var h, u, d, m, b, A = r.props, E = e.props;
  if (n = e.type === "svg" || n, s != null) {
    for (h = 0; h < s.length; h++)
      if ((u = s[h]) != null && ((e.type === null ? u.nodeType === 3 : u.localName === e.type) || t == u)) {
        t = u, s[h] = null;
        break;
      }
  }
  if (t == null) {
    if (e.type === null)
      return document.createTextNode(E);
    t = n ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, E.is && { is: E.is }), s = null, c = !1;
  }
  if (e.type === null)
    A !== E && t.data != E && (t.data = E);
  else {
    if (s != null && (s = Bn.slice.call(t.childNodes)), d = (A = r.props || Zt).dangerouslySetInnerHTML, m = E.dangerouslySetInnerHTML, !c) {
      if (A === Zt)
        for (A = {}, b = 0; b < t.attributes.length; b++)
          A[t.attributes[b].name] = t.attributes[b].value;
      (m || d) && (m && d && m.__html == d.__html || (t.innerHTML = m && m.__html || ""));
    }
    r0(t, E, A, n, c), m ? e.__k = [] : (e.__k = e.props.children, Uh(t, e, r, i, e.type !== "foreignObject" && n, s, o, Zt, c)), c || ("value" in E && (h = E.value) !== void 0 && h !== t.value && yn(t, "value", h, A.value, !1), "checked" in E && (h = E.checked) !== void 0 && h !== t.checked && yn(t, "checked", h, A.checked, !1));
  }
  return t;
}
function zh(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (i) {
    G.__e(i, r);
  }
}
function Oi(t, e, r) {
  var i, n, s;
  if (G.unmount && G.unmount(t), (i = t.ref) && (i.current && i.current !== t.__e || zh(i, null, e)), r || typeof t.type == "function" || (r = (n = t.__e) != null), t.__e = t.__d = void 0, (i = t.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        G.__e(o, e);
      }
    i.base = i.__P = null;
  }
  if (i = t.__k)
    for (s = 0; s < i.length; s++)
      i[s] && Oi(i[s], e, r);
  n != null && Dh(n);
}
function n0(t, e, r) {
  return this.constructor(t, r);
}
function qi(t, e, r) {
  var i, n, s;
  G.__ && G.__(t, e), n = (i = r === po) ? null : r && r.__k || e.__k, t = tr(ji, null, [t]), s = [], go(e, (i ? e : r || e).__k = t, n || Zt, Zt, e.ownerSVGElement !== void 0, r && !i ? [r] : n ? null : Bn.slice.call(e.childNodes), s, r || Zt, i), $h(s, t);
}
function Kh(t, e) {
  qi(t, e, po);
}
function s0(t, e) {
  var r, i;
  for (i in e = Xt(Xt({}, t.props), e), arguments.length > 2 && (e.children = Bn.slice.call(arguments, 2)), r = {}, e)
    i !== "key" && i !== "ref" && (r[i] = e[i]);
  return mn(t.type, r, e.key || t.key, e.ref || t.ref, null);
}
function jh(t) {
  var e = {}, r = { __c: "__cC" + Fh++, __: t, Consumer: function(i, n) {
    return i.children(n);
  }, Provider: function(i) {
    var n, s = this;
    return this.getChildContext || (n = [], this.getChildContext = function() {
      return e[r.__c] = s, e;
    }, this.shouldComponentUpdate = function(o) {
      s.props.value !== o.value && n.some(function(c) {
        c.context = o.value, sn(c);
      });
    }, this.sub = function(o) {
      n.push(o);
      var c = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        n.splice(n.indexOf(o), 1), c && c.call(o);
      };
    }), i.children;
  } };
  return r.Consumer.contextType = r, r.Provider.__ = r, r;
}
G = { __e: function(t, e) {
  for (var r, i; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (i = !0, r.setState(r.constructor.getDerivedStateFromError(t))), r.componentDidCatch != null && (i = !0, r.componentDidCatch(t)), i)
          return sn(r.__E = r);
      } catch (n) {
        t = n;
      }
  throw t;
} }, Bt.prototype.setState = function(t, e) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof t == "function" && (t = t(r, this.props)), t && Xt(r, t), t != null && this.__v && (e && this.__h.push(e), sn(this));
}, Bt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), sn(this));
}, Bt.prototype.render = ji, Ti = [], fo = 0, kh = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, po = Zt, Fh = 0;
var jr, lt, sa, hi = 0, ks = [], oa = G.__r, aa = G.diffed, ca = G.__c, ha = G.unmount;
function pi(t, e) {
  G.__h && G.__h(lt, t, hi || e), hi = 0;
  var r = lt.__H || (lt.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function mo(t) {
  return hi = 1, yo(Jh, t);
}
function yo(t, e, r) {
  var i = pi(jr++, 2);
  return i.__c || (i.__c = lt, i.__ = [r ? r(e) : Jh(void 0, e), function(n) {
    var s = t(i.__[0], n);
    i.__[0] !== s && (i.__[0] = s, i.__c.setState({}));
  }]), i.__;
}
function Vh(t, e) {
  var r = pi(jr++, 3);
  !G.__s && wo(r.__H, e) && (r.__ = t, r.__H = e, lt.__H.__h.push(r));
}
function vo(t, e) {
  var r = pi(jr++, 4);
  !G.__s && wo(r.__H, e) && (r.__ = t, r.__H = e, lt.__h.push(r));
}
function Hh(t) {
  return hi = 5, kn(function() {
    return { current: t };
  }, []);
}
function Wh(t, e, r) {
  hi = 6, vo(function() {
    typeof t == "function" ? t(e()) : t && (t.current = e());
  }, r == null ? r : r.concat(t));
}
function kn(t, e) {
  var r = pi(jr++, 7);
  return wo(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
}
function Qh(t, e) {
  return hi = 8, kn(function() {
    return t;
  }, e);
}
function Gh(t) {
  var e = lt.context[t.__c], r = pi(jr++, 9);
  return r.__c = t, e ? (r.__ == null && (r.__ = !0, e.sub(lt)), e.props.value) : t.__;
}
function Yh(t, e) {
  G.useDebugValue && G.useDebugValue(e ? e(t) : t);
}
function o0(t) {
  var e = pi(jr++, 10), r = mo();
  return e.__ = t, lt.componentDidCatch || (lt.componentDidCatch = function(i) {
    e.__ && e.__(i), r[1](i);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function a0() {
  ks.some(function(t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(Fs), t.__H.__h.forEach(Ds), t.__H.__h = [];
      } catch (e) {
        return t.__H.__h = [], G.__e(e, t.__v), !0;
      }
  }), ks = [];
}
function Fs(t) {
  t.t && t.t();
}
function Ds(t) {
  var e = t.__();
  typeof e == "function" && (t.t = e);
}
function wo(t, e) {
  return !t || e.some(function(r, i) {
    return r !== t[i];
  });
}
function Jh(t, e) {
  return typeof e == "function" ? e(t) : e;
}
G.__r = function(t) {
  oa && oa(t), jr = 0, (lt = t.__c).__H && (lt.__H.__h.forEach(Fs), lt.__H.__h.forEach(Ds), lt.__H.__h = []);
}, G.diffed = function(t) {
  aa && aa(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    r && r.__h.length && (ks.push(e) !== 1 && sa === G.requestAnimationFrame || ((sa = G.requestAnimationFrame) || function(i) {
      var n, s = function() {
        clearTimeout(o), cancelAnimationFrame(n), setTimeout(i);
      }, o = setTimeout(s, 100);
      typeof window < "u" && (n = requestAnimationFrame(s));
    })(a0));
  }
}, G.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Fs), r.__h = r.__h.filter(function(i) {
        return !i.__ || Ds(i);
      });
    } catch (i) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], G.__e(i, r.__v);
    }
  }), ca && ca(t, e);
}, G.unmount = function(t) {
  ha && ha(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    if (r)
      try {
        r.__.forEach(function(i) {
          return i.t && i.t();
        });
      } catch (i) {
        G.__e(i, e.__v);
      }
  }
};
function bo(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function qs(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var i in e)
    if (i !== "__source" && t[i] !== e[i])
      return !0;
  return !1;
}
var Xh = function(t) {
  var e, r;
  function i(n) {
    var s;
    return (s = t.call(this, n) || this).isPureReactComponent = !0, s;
  }
  return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, i.prototype.shouldComponentUpdate = function(n, s) {
    return qs(this.props, n) || qs(this.state, s);
  }, i;
}(Bt);
function Zh(t, e) {
  function r(n) {
    var s = this.props.ref, o = s == n.ref;
    return !o && s && (s.call ? s(null) : s.current = null), e ? !e(this.props, n) || !o : qs(this.props, n);
  }
  function i(n) {
    return this.shouldComponentUpdate = r, tr(t, bo({}, n));
  }
  return i.prototype.isReactComponent = !0, i.displayName = "Memo(" + (t.displayName || t.name) + ")", i.t = !0, i;
}
var la = G.__b;
function el(t) {
  function e(r) {
    var i = bo({}, r);
    return delete i.ref, t(i, r.ref);
  }
  return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
G.__b = function(t) {
  t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), la && la(t);
};
var ua = function(t, e) {
  return t ? pr(t).reduce(function(r, i, n) {
    return r.concat(e(i, n));
  }, []) : null;
}, tl = { map: ua, forEach: ua, count: function(t) {
  return t ? pr(t).length : 0;
}, only: function(t) {
  if ((t = pr(t)).length !== 1)
    throw new Error("Children.only() expects only one child.");
  return t[0];
}, toArray: pr }, c0 = G.__e;
function rl(t) {
  return t && ((t = bo({}, t)).__c = null, t.__k = t.__k && t.__k.map(rl)), t;
}
function vn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function il(t) {
  var e = t.__.__c;
  return e && e.u && e.u(t);
}
function nl(t) {
  var e, r, i;
  function n(s) {
    if (e || (e = t()).then(function(o) {
      r = o.default || o;
    }, function(o) {
      i = o;
    }), i)
      throw i;
    if (!r)
      throw e;
    return tr(r, s);
  }
  return n.displayName = "Lazy", n.t = !0, n;
}
function Jr() {
  this.i = null, this.l = null;
}
G.__e = function(t, e, r) {
  if (t.then) {
    for (var i, n = e; n = n.__; )
      if ((i = n.__c) && i.__c)
        return i.__c(t, e.__c);
  }
  c0(t, e, r);
}, (vn.prototype = new Bt()).__c = function(t, e) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(e);
  var i = il(r.__v), n = !1, s = function() {
    n || (n = !0, i ? i(o) : o());
  };
  e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
    s(), e.__c && e.__c();
  };
  var o = function() {
    var c;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); c = r.o.pop(); )
        c.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), t.then(s, s);
}, vn.prototype.render = function(t, e) {
  return this.__b && (this.__v.__k[0] = rl(this.__b), this.__b = null), [tr(Bt, null, e.u ? null : t.children), e.u && t.fallback];
};
var fa = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
    for (r = t.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.i = r = r[2];
    }
};
(Jr.prototype = new Bt()).u = function(t) {
  var e = this, r = il(e.__v), i = e.l.get(t);
  return i[0]++, function(n) {
    var s = function() {
      e.props.revealOrder ? (i.push(n), fa(e, t, i)) : n();
    };
    r ? r(s) : s();
  };
}, Jr.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = pr(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, Jr.prototype.componentDidUpdate = Jr.prototype.componentDidMount = function() {
  var t = this;
  t.l.forEach(function(e, r) {
    fa(t, r, e);
  });
};
var h0 = function() {
  function t() {
  }
  var e = t.prototype;
  return e.getChildContext = function() {
    return this.props.context;
  }, e.render = function(r) {
    return r.children;
  }, t;
}();
function l0(t) {
  var e = this, r = t.container, i = tr(h0, { context: e.context }, t.vnode);
  return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), Oi(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, qi(i, r), e.__k = r.__k) : (e.v = document.createTextNode(""), Kh("", r), r.appendChild(e.v), e.p = !0, e.s = r, qi(i, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), Oi(e.h)), e.h = i, e.componentWillUnmount = function() {
    e.v.parentNode && e.s.removeChild(e.v), Oi(e.h);
  }, null;
}
function sl(t, e) {
  return tr(l0, { vnode: t, container: e });
}
var da = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Bt.prototype.isReactComponent = {};
var ol = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
function Ls(t, e, r) {
  if (e.__k == null)
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  return qi(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function u0(t, e, r) {
  return Kh(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
var pa = G.event;
function is(t, e) {
  t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, { configurable: !1, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    this["UNSAFE_" + e] = r;
  } });
}
G.event = function(t) {
  pa && (t = pa(t)), t.persist = function() {
  };
  var e = !1, r = !1, i = t.stopPropagation;
  t.stopPropagation = function() {
    i.call(t), e = !0;
  };
  var n = t.preventDefault;
  return t.preventDefault = function() {
    n.call(t), r = !0;
  }, t.isPropagationStopped = function() {
    return e;
  }, t.isDefaultPrevented = function() {
    return r;
  }, t.nativeEvent = t;
};
var ga = { configurable: !0, get: function() {
  return this.class;
} }, ma = G.vnode;
G.vnode = function(t) {
  t.$$typeof = ol;
  var e = t.type, r = t.props;
  if (e) {
    if (r.class != r.className && (ga.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", ga)), typeof e != "function") {
      var i, n, s;
      for (s in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && e === "select" && (pr(r.children).forEach(function(o) {
        r.value.indexOf(o.props.value) != -1 && (o.props.selected = !0);
      }), delete r.value), r)
        if (i = da.test(s))
          break;
      if (i)
        for (s in n = t.props = {}, r)
          n[da.test(s) ? s.replace(/[A-Z0-9]/, "-$&").toLowerCase() : s] = r[s];
    }
    (function(o) {
      var c = t.type, h = t.props;
      if (h && typeof c == "string") {
        var u = {};
        for (var d in h)
          /^on(Ani|Tra|Tou)/.test(d) && (h[d.toLowerCase()] = h[d], delete h[d]), u[d.toLowerCase()] = d;
        if (u.ondoubleclick && (h.ondblclick = h[u.ondoubleclick], delete h[u.ondoubleclick]), u.onbeforeinput && (h.onbeforeinput = h[u.onbeforeinput], delete h[u.onbeforeinput]), u.onchange && (c === "textarea" || c.toLowerCase() === "input" && !/^fil|che|ra/i.test(h.type))) {
          var m = u.oninput || "oninput";
          h[m] || (h[m] = h[u.onchange], delete h[u.onchange]);
        }
      }
    })(), typeof e == "function" && !e.m && e.prototype && (is(e.prototype, "componentWillMount"), is(e.prototype, "componentWillReceiveProps"), is(e.prototype, "componentWillUpdate"), e.m = !0);
  }
  ma && ma(t);
};
var f0 = "16.8.0";
function al(t) {
  return tr.bind(null, t);
}
function _o(t) {
  return !!t && t.$$typeof === ol;
}
function cl(t) {
  return _o(t) ? s0.apply(null, arguments) : t;
}
function hl(t) {
  return !!t.__k && (qi(null, t), !0);
}
function ll(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ul = function(t, e) {
  return t(e);
};
const d0 = { useState: mo, useReducer: yo, useEffect: Vh, useLayoutEffect: vo, useRef: Hh, useImperativeHandle: Wh, useMemo: kn, useCallback: Qh, useContext: Gh, useDebugValue: Yh, version: "16.8.0", Children: tl, render: Ls, hydrate: Ls, unmountComponentAtNode: hl, createPortal: sl, createElement: tr, createContext: jh, createFactory: al, cloneElement: cl, createRef: qh, Fragment: ji, isValidElement: _o, findDOMNode: ll, Component: Bt, PureComponent: Xh, memo: Zh, forwardRef: el, unstable_batchedUpdates: ul, Suspense: vn, SuspenseList: Jr, lazy: nl }, p0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: tl,
  Component: Bt,
  Fragment: ji,
  PureComponent: Xh,
  Suspense: vn,
  SuspenseList: Jr,
  cloneElement: cl,
  createContext: jh,
  createElement: tr,
  createFactory: al,
  createPortal: sl,
  createRef: qh,
  default: d0,
  findDOMNode: ll,
  forwardRef: el,
  hydrate: u0,
  isValidElement: _o,
  lazy: nl,
  memo: Zh,
  render: Ls,
  unmountComponentAtNode: hl,
  unstable_batchedUpdates: ul,
  useCallback: Qh,
  useContext: Gh,
  useDebugValue: Yh,
  useEffect: Vh,
  useErrorBoundary: o0,
  useImperativeHandle: Wh,
  useLayoutEffect: vo,
  useMemo: kn,
  useReducer: yo,
  useRef: Hh,
  useState: mo,
  version: f0
}, Symbol.toStringTag, { value: "Module" })), g0 = /* @__PURE__ */ qc(p0);
function fl(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var tt = td, dl = fl(zi), m0 = fl(nf), U = g0;
function y0(t) {
  dl.toString(t, {
    type: "terminal"
  }).then(console.log);
}
var v0 = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function w0(t, e) {
  try {
    var r = t();
  } catch (i) {
    return e(i);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
var b0 = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E", _0 = "WalletConnect", A0 = 300, E0 = "rgb(64, 153, 255)", pl = "walletconnect-wrapper", ya = "walletconnect-style-sheet", gl = "walletconnect-qrcode-modal", S0 = "walletconnect-qrcode-close", ml = "walletconnect-qrcode-text", I0 = "walletconnect-connect-button";
function M0(t) {
  return U.createElement("div", {
    className: "walletconnect-modal__header"
  }, U.createElement("img", {
    src: b0,
    className: "walletconnect-modal__headerLogo"
  }), U.createElement("p", null, _0), U.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: t.onClose
  }, U.createElement("div", {
    id: S0,
    className: "walletconnect-modal__close__icon"
  }, U.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), U.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}
function N0(t) {
  return U.createElement("a", {
    className: "walletconnect-connect__button",
    href: t.href,
    id: I0 + "-" + t.name,
    onClick: t.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: t.color
    },
    target: "_blank"
  }, t.name);
}
var x0 = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
function C0(t) {
  var e = t.color, r = t.href, i = t.name, n = t.logo, s = t.onClick;
  return U.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: r,
    onClick: s,
    rel: "noopener noreferrer",
    target: "_blank"
  }, U.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, i), U.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, U.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: "url('" + n + "') " + e,
      backgroundSize: "100%"
    }
  }), U.createElement("img", {
    src: x0,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}
function R0(t) {
  var e = t.color, r = t.href, i = t.name, n = t.logo, s = t.onClick, o = window.innerWidth < 768 ? (i.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
  return U.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: r,
    onClick: s,
    rel: "noopener noreferrer",
    target: "_blank"
  }, U.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: "url('" + n + "') " + e,
      backgroundSize: "100%"
    }
  }), U.createElement("div", {
    style: {
      fontSize: o
    },
    className: "walletconnect-connect__button__text"
  }, i));
}
var P0 = 5, ns = 12;
function T0(t) {
  var e = tt.isAndroid(), r = U.useState(""), i = r[0], n = r[1], s = U.useState(""), o = s[0], c = s[1], h = U.useState(1), u = h[0], d = h[1], m = o ? t.links.filter(function(C) {
    return C.name.toLowerCase().includes(o.toLowerCase());
  }) : t.links, b = t.errorMessage, A = o || m.length > P0, E = Math.ceil(m.length / ns), N = [(u - 1) * ns + 1, u * ns], I = m.length ? m.filter(function(C, k) {
    return k + 1 >= N[0] && k + 1 <= N[1];
  }) : [], x = !e && E > 1, R = void 0;
  function P(C) {
    n(C.target.value), clearTimeout(R), C.target.value ? R = setTimeout(function() {
      c(C.target.value), d(1);
    }, 1e3) : (n(""), c(""), d(1));
  }
  return U.createElement("div", null, U.createElement("p", {
    id: ml,
    className: "walletconnect-qrcode__text"
  }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && U.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: i,
    onChange: P
  }), U.createElement("div", {
    className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : A && m.length ? "__wrap" : "")
  }, e ? U.createElement(N0, {
    name: t.text.connect,
    color: E0,
    href: t.uri,
    onClick: U.useCallback(function() {
      tt.saveMobileLinkInfo({
        name: "Unknown",
        href: t.uri
      });
    }, [])
  }) : I.length ? I.map(function(C) {
    var k = C.color, F = C.name, q = C.shortName, $ = C.logo, X = tt.formatIOSMobile(t.uri, C), se = U.useCallback(function() {
      tt.saveMobileLinkInfo({
        name: F,
        href: X
      });
    }, [I]);
    return A ? U.createElement(R0, {
      color: k,
      href: X,
      name: q || F,
      logo: $,
      onClick: se
    }) : U.createElement(C0, {
      color: k,
      href: X,
      name: F,
      logo: $,
      onClick: se
    });
  }) : U.createElement(U.Fragment, null, U.createElement("p", null, b.length ? t.errorMessage : t.links.length && !m.length ? t.text.no_wallets_found : t.text.loading))), x && U.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(E).fill(0).map(function(C, k) {
    var F = k + 1, q = u === F;
    return U.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: q ? "bold" : "normal"
      },
      onClick: function() {
        return d(F);
      }
    }, F);
  })));
}
function O0(t) {
  var e = !!t.message.trim();
  return U.createElement("div", {
    className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
  }, t.message);
}
var B0 = function(t) {
  try {
    var e = "";
    return Promise.resolve(dl.toString(t, {
      margin: 0,
      type: "svg"
    })).then(function(r) {
      return typeof r == "string" && (e = r.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e;
    });
  } catch (r) {
    return Promise.reject(r);
  }
};
function k0(t) {
  var e = U.useState(""), r = e[0], i = e[1], n = U.useState(""), s = n[0], o = n[1];
  U.useEffect(function() {
    try {
      return Promise.resolve(B0(t.uri)).then(function(h) {
        o(h);
      });
    } catch (h) {
      Promise.reject(h);
    }
  }, []);
  var c = function() {
    var h = m0(t.uri);
    h ? (i(t.text.copied_to_clipboard), setInterval(function() {
      return i("");
    }, 1200)) : (i("Error"), setInterval(function() {
      return i("");
    }, 1200));
  };
  return U.createElement("div", null, U.createElement("p", {
    id: ml,
    className: "walletconnect-qrcode__text"
  }, t.text.scan_qrcode_with_wallet), U.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: s
    }
  }), U.createElement("div", {
    className: "walletconnect-modal__footer"
  }, U.createElement("a", {
    onClick: c
  }, t.text.copy_to_clipboard)), U.createElement(O0, {
    message: r
  }));
}
function F0(t) {
  var e = tt.isAndroid(), r = tt.isMobile(), i = r ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0, n = U.useState(!1), s = n[0], o = n[1], c = U.useState(!1), h = c[0], u = c[1], d = U.useState(!r), m = d[0], b = d[1], A = {
    mobile: r,
    text: t.text,
    uri: t.uri,
    qrcodeModalOptions: t.qrcodeModalOptions
  }, E = U.useState(""), N = E[0], I = E[1], x = U.useState(!1), R = x[0], P = x[1], C = U.useState([]), k = C[0], F = C[1], q = U.useState(""), $ = q[0], X = q[1], se = function() {
    h || s || i && !i.length || k.length > 0 || U.useEffect(function() {
      var oe = function() {
        try {
          if (e)
            return Promise.resolve();
          o(!0);
          var a = w0(function() {
            var f = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : tt.getWalletRegistryUrl();
            return Promise.resolve(fetch(f)).then(function(g) {
              return Promise.resolve(g.json()).then(function(v) {
                var _ = v.listings, S = r ? "mobile" : "desktop", M = tt.getMobileLinkRegistry(tt.formatMobileRegistry(_, S), i);
                o(!1), u(!0), X(M.length ? "" : t.text.no_supported_wallets), F(M);
                var w = M.length === 1;
                w && (I(tt.formatIOSMobile(t.uri, M[0])), b(!0)), P(w);
              });
            });
          }, function(f) {
            o(!1), u(!0), X(t.text.something_went_wrong), console.error(f);
          });
          return Promise.resolve(a && a.then ? a.then(function() {
          }) : void 0);
        } catch (f) {
          return Promise.reject(f);
        }
      };
      oe();
    });
  };
  se();
  var Z = r ? m : !m;
  return U.createElement("div", {
    id: gl,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, U.createElement("div", {
    className: "walletconnect-modal__base"
  }, U.createElement(M0, {
    onClose: t.onClose
  }), R && m ? U.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, U.createElement("a", {
    onClick: function() {
      return tt.saveMobileLinkInfo({
        name: k[0].name,
        href: N
      });
    },
    href: N,
    rel: "noopener noreferrer",
    target: "_blank"
  }, t.text.connect_with + " " + (R ? k[0].name : "") + " ›")) : e || s || !s && k.length ? U.createElement("div", {
    className: "walletconnect-modal__mobile__toggle" + (Z ? " right__selected" : "")
  }, U.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), r ? U.createElement(U.Fragment, null, U.createElement("a", {
    onClick: function() {
      return b(!1), se();
    }
  }, t.text.mobile), U.createElement("a", {
    onClick: function() {
      return b(!0);
    }
  }, t.text.qrcode)) : U.createElement(U.Fragment, null, U.createElement("a", {
    onClick: function() {
      return b(!0);
    }
  }, t.text.qrcode), U.createElement("a", {
    onClick: function() {
      return b(!1), se();
    }
  }, t.text.desktop))) : null, U.createElement("div", null, m || !e && !s && !k.length ? U.createElement(k0, Object.assign({}, A)) : U.createElement(T0, Object.assign(
    {},
    A,
    {
      links: k,
      errorMessage: $
    }
  )))));
}
var D0 = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
  no_wallets_found: "keine Wallet gefunden"
}, q0 = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
}, L0 = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo salió mal",
  no_supported_wallets: "Todavía no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
}, U0 = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  connect_with: "Connectez-vous à l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourné",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouvé"
}, $0 = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  desktop: "데스크탑",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  connect_with: "와 연결하다",
  loading: "로드 중...",
  something_went_wrong: "문제가 발생했습니다.",
  no_supported_wallets: "아직 지원되는 지갑이 없습니다",
  no_wallets_found: "지갑을 찾을 수 없습니다"
}, z0 = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda não há carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
}, K0 = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  desktop: "桌面",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  connect_with: "通过以下方式连接",
  loading: "正在加载...",
  something_went_wrong: "出了问题",
  no_supported_wallets: "目前还没有支持的钱包",
  no_wallets_found: "没有找到钱包"
}, j0 = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  desktop: "دسکتاپ",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  connect_with: "ارتباط با",
  loading: "...بارگذاری",
  something_went_wrong: "مشکلی پیش آمد",
  no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
  no_wallets_found: "هیچ کیف پولی پیدا نشد"
}, va = {
  de: D0,
  en: q0,
  es: L0,
  fr: U0,
  ko: $0,
  pt: z0,
  zh: K0,
  fa: j0
};
function V0() {
  var t = tt.getDocumentOrThrow(), e = t.getElementById(ya);
  e && t.head.removeChild(e);
  var r = t.createElement("style");
  r.setAttribute("id", ya), r.innerText = v0, t.head.appendChild(r);
}
function H0() {
  var t = tt.getDocumentOrThrow(), e = t.createElement("div");
  return e.setAttribute("id", pl), t.body.appendChild(e), e;
}
function yl() {
  var t = tt.getDocumentOrThrow(), e = t.getElementById(gl);
  e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
    var r = t.getElementById(pl);
    r && t.body.removeChild(r);
  }, A0));
}
function W0(t) {
  return function() {
    yl(), t && t();
  };
}
function Q0() {
  var t = tt.getNavigatorOrThrow().language.split("-")[0] || "en";
  return va[t] || va.en;
}
function G0(t, e, r) {
  V0();
  var i = H0();
  U.render(U.createElement(F0, {
    text: Q0(),
    uri: t,
    onClose: W0(e),
    qrcodeModalOptions: r
  }), i);
}
function Y0() {
  yl();
}
var vl = function() {
  return typeof Y.process < "u" && typeof Y.process.versions < "u" && typeof Y.process.versions.node < "u";
};
function J0(t, e, r) {
  console.log(t), vl() ? y0(t) : G0(t, e, r);
}
function X0() {
  vl() || Y0();
}
var Z0 = {
  open: J0,
  close: X0
}, ep = Z0;
const wa = /* @__PURE__ */ Lc(ep), tp = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), rp = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Ao(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return rp(t);
  } catch {
    return t;
  }
}
function Eo(t) {
  return typeof t == "string" ? t : tp(t) || "";
}
const ip = "idb-keyval";
var np = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (n) => e + n;
  let i;
  return t.dbName && t.storeName && (i = qu(t.dbName, t.storeName)), { name: ip, options: t, async hasItem(n) {
    return !(typeof await $o(r(n), i) > "u");
  }, async getItem(n) {
    return await $o(r(n), i) ?? null;
  }, setItem(n, s) {
    return Lu(r(n), s, i);
  }, removeItem(n) {
    return Uu(r(n), i);
  }, getKeys() {
    return $u(i);
  }, clear() {
    return zu(i);
  } };
};
const sp = "WALLET_CONNECT_V2_INDEXED_DB", op = "keyvaluestorage";
class ap {
  constructor() {
    this.indexedDb = Du({ driver: np({ dbName: sp, storeName: op }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const r = await this.indexedDb.getItem(e);
    if (r !== null)
      return r;
  }
  async setItem(e, r) {
    await this.indexedDb.setItem(e, Eo(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
}
var ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Y.global < "u" ? Y.global : typeof self < "u" ? self : {}, on = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, i) {
    this[r] = String(i);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(i) {
      r[i] = void 0, delete r[i];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof ss < "u" && ss.localStorage ? on.exports = ss.localStorage : typeof window < "u" && window.localStorage ? on.exports = window.localStorage : on.exports = new e();
})();
function cp(t) {
  var e;
  return [t[0], Ao((e = t[1]) != null ? e : "")];
}
let hp = class {
  constructor() {
    this.localStorage = on.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(cp);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Ao(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Eo(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const lp = "wc_storage_version", ba = 1, up = async (t, e, r) => {
  const i = lp, n = await e.getItem(i);
  if (n && n >= ba) {
    r(e);
    return;
  }
  const s = await t.getKeys();
  if (!s.length) {
    r(e);
    return;
  }
  const o = [];
  for (; s.length; ) {
    const c = s.shift();
    if (!c)
      continue;
    const h = c.toLowerCase();
    if (h.includes("wc@") || h.includes("walletconnect") || h.includes("wc_") || h.includes("wallet_connect")) {
      const u = await t.getItem(c);
      await e.setItem(c, u), o.push(c);
    }
  }
  await e.setItem(i, ba), r(e), fp(t, o);
}, fp = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let dp = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new hp();
    this.storage = e;
    try {
      const r = new ap();
      up(e, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, r) {
    return await this.initialize(), this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), e());
      }, 20);
    });
  }
}, pp = class extends zr {
  constructor(e) {
    super();
  }
};
const _a = K.FIVE_SECONDS, Vi = { pulse: "heartbeat_pulse" };
class So extends pp {
  constructor(e) {
    super(e), this.events = new er.EventEmitter(), this.interval = _a, this.interval = (e == null ? void 0 : e.interval) || _a;
  }
  static async init(e) {
    const r = new So(e);
    return await r.init(), r;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), K.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(Vi.pulse);
  }
}
class gp extends zr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class mp extends zr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class yp {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class vp extends zr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class wp extends zr {
  constructor(e) {
    super();
  }
}
class bp {
  constructor(e, r, i, n) {
    this.core = e, this.logger = r, this.name = i;
  }
}
class _p extends zr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let Ap = class extends zr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Ep = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
};
class Sp {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
var Aa = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = e.length, s; i < n; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Ip = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Mp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = Y.process.platform;
    }
    return t;
  }()
), Np = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i, n) {
      this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return t;
  }()
), xp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Cp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Rp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Pp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ea = 3, Tp = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", Rp]
], Sa = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Op(t) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Cp() : typeof navigator < "u" ? kp(navigator.userAgent) : Dp();
}
function Bp(t) {
  return t !== "" && Tp.reduce(function(e, r) {
    var i = r[0], n = r[1];
    if (e)
      return e;
    var s = n.exec(t);
    return !!s && [i, s];
  }, !1);
}
function kp(t) {
  var e = Bp(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new xp();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < Ea && (n = Aa(Aa([], n, !0), qp(Ea - n.length), !0)) : n = [];
  var s = n.join("."), o = Fp(t), c = Pp.exec(t);
  return c && c[1] ? new Np(r, s, o, c[1]) : new Ip(r, s, o);
}
function Fp(t) {
  for (var e = 0, r = Sa.length; e < r; e++) {
    var i = Sa[e], n = i[0], s = i[1], o = s.exec(t);
    if (o)
      return n;
  }
  return null;
}
function Dp() {
  var t = typeof Y.process < "u" && Y.process.version;
  return t ? new Mp(Y.process.version.slice(1)) : null;
}
function qp(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.getLocalStorage = he.getLocalStorageOrThrow = he.getCrypto = he.getCryptoOrThrow = wl = he.getLocation = he.getLocationOrThrow = Mo = he.getNavigator = he.getNavigatorOrThrow = Io = he.getDocument = he.getDocumentOrThrow = he.getFromWindowOrThrow = he.getFromWindow = void 0;
function Vr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
he.getFromWindow = Vr;
function gi(t) {
  const e = Vr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
he.getFromWindowOrThrow = gi;
function Lp() {
  return gi("document");
}
he.getDocumentOrThrow = Lp;
function Up() {
  return Vr("document");
}
var Io = he.getDocument = Up;
function $p() {
  return gi("navigator");
}
he.getNavigatorOrThrow = $p;
function zp() {
  return Vr("navigator");
}
var Mo = he.getNavigator = zp;
function Kp() {
  return gi("location");
}
he.getLocationOrThrow = Kp;
function jp() {
  return Vr("location");
}
var wl = he.getLocation = jp;
function Vp() {
  return gi("crypto");
}
he.getCryptoOrThrow = Vp;
function Hp() {
  return Vr("crypto");
}
he.getCrypto = Hp;
function Wp() {
  return gi("localStorage");
}
he.getLocalStorageOrThrow = Wp;
function Qp() {
  return Vr("localStorage");
}
he.getLocalStorage = Qp;
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
var bl = No.getWindowMetadata = void 0;
const Ia = he;
function Gp() {
  let t, e;
  try {
    t = Ia.getDocumentOrThrow(), e = Ia.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const m = t.getElementsByTagName("link"), b = [];
    for (let A = 0; A < m.length; A++) {
      const E = m[A], N = E.getAttribute("rel");
      if (N && N.toLowerCase().indexOf("icon") > -1) {
        const I = E.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let x = e.protocol + "//" + e.host;
            if (I.indexOf("/") === 0)
              x += I;
            else {
              const R = e.pathname.split("/");
              R.pop();
              const P = R.join("/");
              x += P + "/" + I;
            }
            b.push(x);
          } else if (I.indexOf("//") === 0) {
            const x = e.protocol + I;
            b.push(x);
          } else
            b.push(I);
      }
    }
    return b;
  }
  function i(...m) {
    const b = t.getElementsByTagName("meta");
    for (let A = 0; A < b.length; A++) {
      const E = b[A], N = ["itemprop", "property", "name"].map((I) => E.getAttribute(I)).filter((I) => I ? m.includes(I) : !1);
      if (N.length && N) {
        const I = E.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function n() {
    let m = i("name", "og:site_name", "og:title", "twitter:title");
    return m || (m = t.title), m;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const o = n(), c = s(), h = e.origin, u = r();
  return {
    description: c,
    url: h,
    icons: u,
    name: o
  };
}
bl = No.getWindowMetadata = Gp;
const _l = ":";
function os(t) {
  const [e, r] = t.split(_l);
  return { namespace: e, reference: r };
}
function Yp(t) {
  const [e, r, i] = t.split(_l);
  return { namespace: e, reference: r, address: i };
}
function Al(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Jp = Object.defineProperty, Ma = Object.getOwnPropertySymbols, Xp = Object.prototype.hasOwnProperty, Zp = Object.prototype.propertyIsEnumerable, Na = (t, e, r) => e in t ? Jp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xa = (t, e) => {
  for (var r in e || (e = {}))
    Xp.call(e, r) && Na(t, r, e[r]);
  if (Ma)
    for (var r of Ma(e))
      Zp.call(e, r) && Na(t, r, e[r]);
  return t;
};
const eg = "ReactNative", pt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, tg = "js";
function Li() {
  return typeof Y.process < "u" && typeof Y.process.versions < "u" && typeof Y.process.versions.node < "u";
}
function mi() {
  return !Io() && !!Mo() && navigator.product === eg;
}
function yi() {
  return !Li() && !!Mo() && !!Io();
}
function Hi() {
  return mi() ? pt.reactNative : Li() ? pt.node : yi() ? pt.browser : pt.unknown;
}
function rg() {
  var t;
  try {
    return mi() && typeof Y.global < "u" && typeof (Y.global == null ? void 0 : Y.global.Application) < "u" ? (t = Y.global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function ig(t, e) {
  let r = dn.parse(t);
  return r = xa(xa({}, r), e), t = dn.stringify(r), t;
}
function ng() {
  return bl() || { name: "", description: "", url: "", icons: [""] };
}
function sg() {
  if (Hi() === pt.reactNative && typeof Y.global < "u" && typeof (Y.global == null ? void 0 : Y.global.Platform) < "u") {
    const { OS: r, Version: i } = Y.global.Platform;
    return [r, i].join("-");
  }
  const t = Op();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function og() {
  var t;
  const e = Hi();
  return e === pt.browser ? [e, ((t = wl()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function ag(t, e, r) {
  const i = sg(), n = og();
  return [[t, e].join("-"), [tg, r].join("-"), i, n].join("/");
}
function cg({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: o, bundleId: c }) {
  const h = r.split("?"), u = ag(t, e, i), d = { auth: n, ua: u, projectId: s, useOnCloseEvent: o || void 0, origin: c || void 0 }, m = ig(h[1] || "", d);
  return h[0] + "?" + m;
}
function qr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function El(t) {
  return Object.fromEntries(t.entries());
}
function Sl(t) {
  return new Map(Object.entries(t));
}
function kr(t = K.FIVE_MINUTES, e) {
  const r = K.toMiliseconds(t || K.FIVE_MINUTES);
  let i, n, s;
  return { resolve: (o) => {
    s && i && (clearTimeout(s), i(o));
  }, reject: (o) => {
    s && n && (clearTimeout(s), n(o));
  }, done: () => new Promise((o, c) => {
    s = setTimeout(() => {
      c(new Error(e));
    }, r), i = o, n = c;
  }) };
}
function ti(t, e, r) {
  return new Promise(async (i, n) => {
    const s = setTimeout(() => n(new Error(r)), e);
    try {
      const o = await t;
      i(o);
    } catch (o) {
      n(o);
    }
    clearTimeout(s);
  });
}
function Il(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`))
    return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function hg(t) {
  return Il("topic", t);
}
function lg(t) {
  return Il("id", t);
}
function Ml(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function Ye(t, e) {
  return K.fromMiliseconds(Date.now() + K.toMiliseconds(t));
}
function hr(t) {
  return Date.now() >= K.toMiliseconds(t);
}
function te(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function ug(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function fg({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${t}&sessionTopic=${e}`, o = Hi();
    o === pt.browser ? s.startsWith("https://") || s.startsWith("http://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === pt.reactNative && typeof (Y.global == null ? void 0 : Y.global.Linking) < "u" && await Y.global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
async function dg(t, e) {
  try {
    return await t.getItem(e) || (yi() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
var Nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Y.global < "u" ? Y.global : typeof self < "u" ? self : {};
function pg(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(r, i, n.get ? n : { enumerable: !0, get: function() {
      return t[i];
    } });
  }), r;
}
var xl = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", i = typeof window == "object", n = i ? window : {};
    n.JS_SHA3_NO_WINDOW && (i = !1);
    var s = !i && typeof self == "object", o = !n.JS_SHA3_NO_NODE_JS && typeof Y.process == "object" && Y.process.versions && Y.process.versions.node;
    o ? n = Nl : s && (n = self);
    var c = !n.JS_SHA3_NO_COMMON_JS && !0 && t.exports, h = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), d = [31, 7936, 2031616, 520093696], m = [4, 1024, 262144, 67108864], b = [1, 256, 65536, 16777216], A = [6, 1536, 393216, 100663296], E = [0, 8, 16, 24], N = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], I = [224, 256, 384, 512], x = [128, 256], R = ["hex", "buffer", "arrayBuffer", "array", "digest"], P = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    }), h && (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(p) {
      return typeof p == "object" && p.buffer && p.buffer.constructor === ArrayBuffer;
    });
    for (var C = function(p, O, T) {
      return function(B) {
        return new y(p, O, p).update(B)[T]();
      };
    }, k = function(p, O, T) {
      return function(B, V) {
        return new y(p, O, V).update(B)[T]();
      };
    }, F = function(p, O, T) {
      return function(B, V, L, z) {
        return f["cshake" + p].update(B, V, L, z)[T]();
      };
    }, q = function(p, O, T) {
      return function(B, V, L, z) {
        return f["kmac" + p].update(B, V, L, z)[T]();
      };
    }, $ = function(p, O, T, B) {
      for (var V = 0; V < R.length; ++V) {
        var L = R[V];
        p[L] = O(T, B, L);
      }
      return p;
    }, X = function(p, O) {
      var T = C(p, O, "hex");
      return T.create = function() {
        return new y(p, O, p);
      }, T.update = function(B) {
        return T.create().update(B);
      }, $(T, C, p, O);
    }, se = function(p, O) {
      var T = k(p, O, "hex");
      return T.create = function(B) {
        return new y(p, O, B);
      }, T.update = function(B, V) {
        return T.create(V).update(B);
      }, $(T, k, p, O);
    }, Z = function(p, O) {
      var T = P[p], B = F(p, O, "hex");
      return B.create = function(V, L, z) {
        return !L && !z ? f["shake" + p].create(V) : new y(p, O, V).bytepad([L, z], T);
      }, B.update = function(V, L, z, W) {
        return B.create(L, z, W).update(V);
      }, $(B, F, p, O);
    }, oe = function(p, O) {
      var T = P[p], B = q(p, O, "hex");
      return B.create = function(V, L, z) {
        return new Q(p, O, L).bytepad(["KMAC", z], T).bytepad([V], T);
      }, B.update = function(V, L, z, W) {
        return B.create(V, z, W).update(L);
      }, $(B, q, p, O);
    }, a = [{ name: "keccak", padding: b, bits: I, createMethod: X }, { name: "sha3", padding: A, bits: I, createMethod: X }, { name: "shake", padding: d, bits: x, createMethod: se }, { name: "cshake", padding: m, bits: x, createMethod: Z }, { name: "kmac", padding: m, bits: x, createMethod: oe }], f = {}, g = [], v = 0; v < a.length; ++v)
      for (var _ = a[v], S = _.bits, M = 0; M < S.length; ++M) {
        var w = _.name + "_" + S[M];
        if (g.push(w), f[w] = _.createMethod(S[M], _.padding), _.name !== "sha3") {
          var l = _.name + S[M];
          g.push(l), f[l] = f[w];
        }
      }
    function y(p, O, T) {
      this.blocks = [], this.s = [], this.padding = O, this.outputBits = T, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (p << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = T >> 5, this.extraBytes = (T & 31) >> 3;
      for (var B = 0; B < 50; ++B)
        this.s[B] = 0;
    }
    y.prototype.update = function(p) {
      if (this.finalized)
        throw new Error(r);
      var O, T = typeof p;
      if (T !== "string") {
        if (T === "object") {
          if (p === null)
            throw new Error(e);
          if (h && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!h || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        O = !0;
      }
      for (var B = this.blocks, V = this.byteCount, L = p.length, z = this.blockCount, W = 0, ee = this.s, j, le; W < L; ) {
        if (this.reset)
          for (this.reset = !1, B[0] = this.block, j = 1; j < z + 1; ++j)
            B[j] = 0;
        if (O)
          for (j = this.start; W < L && j < V; ++W)
            B[j >> 2] |= p[W] << E[j++ & 3];
        else
          for (j = this.start; W < L && j < V; ++W)
            le = p.charCodeAt(W), le < 128 ? B[j >> 2] |= le << E[j++ & 3] : le < 2048 ? (B[j >> 2] |= (192 | le >> 6) << E[j++ & 3], B[j >> 2] |= (128 | le & 63) << E[j++ & 3]) : le < 55296 || le >= 57344 ? (B[j >> 2] |= (224 | le >> 12) << E[j++ & 3], B[j >> 2] |= (128 | le >> 6 & 63) << E[j++ & 3], B[j >> 2] |= (128 | le & 63) << E[j++ & 3]) : (le = 65536 + ((le & 1023) << 10 | p.charCodeAt(++W) & 1023), B[j >> 2] |= (240 | le >> 18) << E[j++ & 3], B[j >> 2] |= (128 | le >> 12 & 63) << E[j++ & 3], B[j >> 2] |= (128 | le >> 6 & 63) << E[j++ & 3], B[j >> 2] |= (128 | le & 63) << E[j++ & 3]);
        if (this.lastByteIndex = j, j >= V) {
          for (this.start = j - V, this.block = B[z], j = 0; j < z; ++j)
            ee[j] ^= B[j];
          H(ee), this.reset = !0;
        } else
          this.start = j;
      }
      return this;
    }, y.prototype.encode = function(p, O) {
      var T = p & 255, B = 1, V = [T];
      for (p = p >> 8, T = p & 255; T > 0; )
        V.unshift(T), p = p >> 8, T = p & 255, ++B;
      return O ? V.push(B) : V.unshift(B), this.update(V), V.length;
    }, y.prototype.encodeString = function(p) {
      var O, T = typeof p;
      if (T !== "string") {
        if (T === "object") {
          if (p === null)
            throw new Error(e);
          if (h && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!h || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        O = !0;
      }
      var B = 0, V = p.length;
      if (O)
        B = V;
      else
        for (var L = 0; L < p.length; ++L) {
          var z = p.charCodeAt(L);
          z < 128 ? B += 1 : z < 2048 ? B += 2 : z < 55296 || z >= 57344 ? B += 3 : (z = 65536 + ((z & 1023) << 10 | p.charCodeAt(++L) & 1023), B += 4);
        }
      return B += this.encode(B * 8), this.update(p), B;
    }, y.prototype.bytepad = function(p, O) {
      for (var T = this.encode(O), B = 0; B < p.length; ++B)
        T += this.encodeString(p[B]);
      var V = O - T % O, L = [];
      return L.length = V, this.update(L), this;
    }, y.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var p = this.blocks, O = this.lastByteIndex, T = this.blockCount, B = this.s;
        if (p[O >> 2] |= this.padding[O & 3], this.lastByteIndex === this.byteCount)
          for (p[0] = p[T], O = 1; O < T + 1; ++O)
            p[O] = 0;
        for (p[T - 1] |= 2147483648, O = 0; O < T; ++O)
          B[O] ^= p[O];
        H(B);
      }
    }, y.prototype.toString = y.prototype.hex = function() {
      this.finalize();
      for (var p = this.blockCount, O = this.s, T = this.outputBlocks, B = this.extraBytes, V = 0, L = 0, z = "", W; L < T; ) {
        for (V = 0; V < p && L < T; ++V, ++L)
          W = O[V], z += u[W >> 4 & 15] + u[W & 15] + u[W >> 12 & 15] + u[W >> 8 & 15] + u[W >> 20 & 15] + u[W >> 16 & 15] + u[W >> 28 & 15] + u[W >> 24 & 15];
        L % p === 0 && (H(O), V = 0);
      }
      return B && (W = O[V], z += u[W >> 4 & 15] + u[W & 15], B > 1 && (z += u[W >> 12 & 15] + u[W >> 8 & 15]), B > 2 && (z += u[W >> 20 & 15] + u[W >> 16 & 15])), z;
    }, y.prototype.arrayBuffer = function() {
      this.finalize();
      var p = this.blockCount, O = this.s, T = this.outputBlocks, B = this.extraBytes, V = 0, L = 0, z = this.outputBits >> 3, W;
      B ? W = new ArrayBuffer(T + 1 << 2) : W = new ArrayBuffer(z);
      for (var ee = new Uint32Array(W); L < T; ) {
        for (V = 0; V < p && L < T; ++V, ++L)
          ee[L] = O[V];
        L % p === 0 && H(O);
      }
      return B && (ee[V] = O[V], W = W.slice(0, z)), W;
    }, y.prototype.buffer = y.prototype.arrayBuffer, y.prototype.digest = y.prototype.array = function() {
      this.finalize();
      for (var p = this.blockCount, O = this.s, T = this.outputBlocks, B = this.extraBytes, V = 0, L = 0, z = [], W, ee; L < T; ) {
        for (V = 0; V < p && L < T; ++V, ++L)
          W = L << 2, ee = O[V], z[W] = ee & 255, z[W + 1] = ee >> 8 & 255, z[W + 2] = ee >> 16 & 255, z[W + 3] = ee >> 24 & 255;
        L % p === 0 && H(O);
      }
      return B && (W = L << 2, ee = O[V], z[W] = ee & 255, B > 1 && (z[W + 1] = ee >> 8 & 255), B > 2 && (z[W + 2] = ee >> 16 & 255)), z;
    };
    function Q(p, O, T) {
      y.call(this, p, O, T);
    }
    Q.prototype = new y(), Q.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), y.prototype.finalize.call(this);
    };
    var H = function(p) {
      var O, T, B, V, L, z, W, ee, j, le, ue, fe, wr, de, pe, br, ge, me, _r, ye, ve, Ar, we, be, Er, _e, Ae, Sr, Ee, Se, Ir, Ie, Me, Mr, Ne, xe, Nr, Ce, Re, xr, Pe, Te, Cr, Oe, Be, Rr, ke, Fe, Pr, De, qe, Tr, Le, Ue, Or, $e, ze, rr, ir, nr, sr, or, ar;
      for (B = 0; B < 48; B += 2)
        V = p[0] ^ p[10] ^ p[20] ^ p[30] ^ p[40], L = p[1] ^ p[11] ^ p[21] ^ p[31] ^ p[41], z = p[2] ^ p[12] ^ p[22] ^ p[32] ^ p[42], W = p[3] ^ p[13] ^ p[23] ^ p[33] ^ p[43], ee = p[4] ^ p[14] ^ p[24] ^ p[34] ^ p[44], j = p[5] ^ p[15] ^ p[25] ^ p[35] ^ p[45], le = p[6] ^ p[16] ^ p[26] ^ p[36] ^ p[46], ue = p[7] ^ p[17] ^ p[27] ^ p[37] ^ p[47], fe = p[8] ^ p[18] ^ p[28] ^ p[38] ^ p[48], wr = p[9] ^ p[19] ^ p[29] ^ p[39] ^ p[49], O = fe ^ (z << 1 | W >>> 31), T = wr ^ (W << 1 | z >>> 31), p[0] ^= O, p[1] ^= T, p[10] ^= O, p[11] ^= T, p[20] ^= O, p[21] ^= T, p[30] ^= O, p[31] ^= T, p[40] ^= O, p[41] ^= T, O = V ^ (ee << 1 | j >>> 31), T = L ^ (j << 1 | ee >>> 31), p[2] ^= O, p[3] ^= T, p[12] ^= O, p[13] ^= T, p[22] ^= O, p[23] ^= T, p[32] ^= O, p[33] ^= T, p[42] ^= O, p[43] ^= T, O = z ^ (le << 1 | ue >>> 31), T = W ^ (ue << 1 | le >>> 31), p[4] ^= O, p[5] ^= T, p[14] ^= O, p[15] ^= T, p[24] ^= O, p[25] ^= T, p[34] ^= O, p[35] ^= T, p[44] ^= O, p[45] ^= T, O = ee ^ (fe << 1 | wr >>> 31), T = j ^ (wr << 1 | fe >>> 31), p[6] ^= O, p[7] ^= T, p[16] ^= O, p[17] ^= T, p[26] ^= O, p[27] ^= T, p[36] ^= O, p[37] ^= T, p[46] ^= O, p[47] ^= T, O = le ^ (V << 1 | L >>> 31), T = ue ^ (L << 1 | V >>> 31), p[8] ^= O, p[9] ^= T, p[18] ^= O, p[19] ^= T, p[28] ^= O, p[29] ^= T, p[38] ^= O, p[39] ^= T, p[48] ^= O, p[49] ^= T, de = p[0], pe = p[1], Rr = p[11] << 4 | p[10] >>> 28, ke = p[10] << 4 | p[11] >>> 28, Sr = p[20] << 3 | p[21] >>> 29, Ee = p[21] << 3 | p[20] >>> 29, nr = p[31] << 9 | p[30] >>> 23, sr = p[30] << 9 | p[31] >>> 23, Te = p[40] << 18 | p[41] >>> 14, Cr = p[41] << 18 | p[40] >>> 14, Mr = p[2] << 1 | p[3] >>> 31, Ne = p[3] << 1 | p[2] >>> 31, br = p[13] << 12 | p[12] >>> 20, ge = p[12] << 12 | p[13] >>> 20, Fe = p[22] << 10 | p[23] >>> 22, Pr = p[23] << 10 | p[22] >>> 22, Se = p[33] << 13 | p[32] >>> 19, Ir = p[32] << 13 | p[33] >>> 19, or = p[42] << 2 | p[43] >>> 30, ar = p[43] << 2 | p[42] >>> 30, Ue = p[5] << 30 | p[4] >>> 2, Or = p[4] << 30 | p[5] >>> 2, xe = p[14] << 6 | p[15] >>> 26, Nr = p[15] << 6 | p[14] >>> 26, me = p[25] << 11 | p[24] >>> 21, _r = p[24] << 11 | p[25] >>> 21, De = p[34] << 15 | p[35] >>> 17, qe = p[35] << 15 | p[34] >>> 17, Ie = p[45] << 29 | p[44] >>> 3, Me = p[44] << 29 | p[45] >>> 3, be = p[6] << 28 | p[7] >>> 4, Er = p[7] << 28 | p[6] >>> 4, $e = p[17] << 23 | p[16] >>> 9, ze = p[16] << 23 | p[17] >>> 9, Ce = p[26] << 25 | p[27] >>> 7, Re = p[27] << 25 | p[26] >>> 7, ye = p[36] << 21 | p[37] >>> 11, ve = p[37] << 21 | p[36] >>> 11, Tr = p[47] << 24 | p[46] >>> 8, Le = p[46] << 24 | p[47] >>> 8, Oe = p[8] << 27 | p[9] >>> 5, Be = p[9] << 27 | p[8] >>> 5, _e = p[18] << 20 | p[19] >>> 12, Ae = p[19] << 20 | p[18] >>> 12, rr = p[29] << 7 | p[28] >>> 25, ir = p[28] << 7 | p[29] >>> 25, xr = p[38] << 8 | p[39] >>> 24, Pe = p[39] << 8 | p[38] >>> 24, Ar = p[48] << 14 | p[49] >>> 18, we = p[49] << 14 | p[48] >>> 18, p[0] = de ^ ~br & me, p[1] = pe ^ ~ge & _r, p[10] = be ^ ~_e & Sr, p[11] = Er ^ ~Ae & Ee, p[20] = Mr ^ ~xe & Ce, p[21] = Ne ^ ~Nr & Re, p[30] = Oe ^ ~Rr & Fe, p[31] = Be ^ ~ke & Pr, p[40] = Ue ^ ~$e & rr, p[41] = Or ^ ~ze & ir, p[2] = br ^ ~me & ye, p[3] = ge ^ ~_r & ve, p[12] = _e ^ ~Sr & Se, p[13] = Ae ^ ~Ee & Ir, p[22] = xe ^ ~Ce & xr, p[23] = Nr ^ ~Re & Pe, p[32] = Rr ^ ~Fe & De, p[33] = ke ^ ~Pr & qe, p[42] = $e ^ ~rr & nr, p[43] = ze ^ ~ir & sr, p[4] = me ^ ~ye & Ar, p[5] = _r ^ ~ve & we, p[14] = Sr ^ ~Se & Ie, p[15] = Ee ^ ~Ir & Me, p[24] = Ce ^ ~xr & Te, p[25] = Re ^ ~Pe & Cr, p[34] = Fe ^ ~De & Tr, p[35] = Pr ^ ~qe & Le, p[44] = rr ^ ~nr & or, p[45] = ir ^ ~sr & ar, p[6] = ye ^ ~Ar & de, p[7] = ve ^ ~we & pe, p[16] = Se ^ ~Ie & be, p[17] = Ir ^ ~Me & Er, p[26] = xr ^ ~Te & Mr, p[27] = Pe ^ ~Cr & Ne, p[36] = De ^ ~Tr & Oe, p[37] = qe ^ ~Le & Be, p[46] = nr ^ ~or & Ue, p[47] = sr ^ ~ar & Or, p[8] = Ar ^ ~de & br, p[9] = we ^ ~pe & ge, p[18] = Ie ^ ~be & _e, p[19] = Me ^ ~Er & Ae, p[28] = Te ^ ~Mr & xe, p[29] = Cr ^ ~Ne & Nr, p[38] = Tr ^ ~Oe & Rr, p[39] = Le ^ ~Be & ke, p[48] = or ^ ~Ue & $e, p[49] = ar ^ ~Or & ze, p[0] ^= N[B], p[1] ^= N[B + 1];
    };
    if (c)
      t.exports = f;
    else
      for (v = 0; v < g.length; ++v)
        n[g[v]] = f[g[v]];
  })();
})(xl);
var gg = xl.exports;
const mg = "logger/5.7.0";
let Ca = !1, Ra = !1;
const an = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Pa = an.default, as = null;
function yg() {
  try {
    const t = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test")
          throw new Error("bad normalize");
      } catch {
        t.push(e);
      }
    }), t.length)
      throw new Error("missing " + t.join(", "));
    if ("é".normalize("NFD") !== "é")
      throw new Error("broken implementation");
  } catch (t) {
    return t.message;
  }
  return null;
}
const Ta = yg();
var Us;
(function(t) {
  t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
})(Us || (Us = {}));
var Rt;
(function(t) {
  t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED";
})(Rt || (Rt = {}));
const Oa = "0123456789abcdef";
let Je = class We {
  constructor(e) {
    Object.defineProperty(this, "version", { enumerable: !0, value: e, writable: !1 });
  }
  _log(e, r) {
    const i = e.toLowerCase();
    an[i] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(Pa > an[i]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(We.levels.DEBUG, e);
  }
  info(...e) {
    this._log(We.levels.INFO, e);
  }
  warn(...e) {
    this._log(We.levels.WARNING, e);
  }
  makeError(e, r, i) {
    if (Ra)
      return this.makeError("censored error", r, {});
    r || (r = We.errors.UNKNOWN_ERROR), i || (i = {});
    const n = [];
    Object.keys(i).forEach((h) => {
      const u = i[h];
      try {
        if (u instanceof Uint8Array) {
          let d = "";
          for (let m = 0; m < u.length; m++)
            d += Oa[u[m] >> 4], d += Oa[u[m] & 15];
          n.push(h + "=Uint8Array(0x" + d + ")");
        } else
          n.push(h + "=" + JSON.stringify(u));
      } catch {
        n.push(h + "=" + JSON.stringify(i[h].toString()));
      }
    }), n.push(`code=${r}`), n.push(`version=${this.version}`);
    const s = e;
    let o = "";
    switch (r) {
      case Rt.NUMERIC_FAULT: {
        o = "NUMERIC_FAULT";
        const h = e;
        switch (h) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            o += "-" + h;
            break;
          case "negative-power":
          case "negative-width":
            o += "-unsupported";
            break;
          case "unbound-bitwise-result":
            o += "-unbound-result";
            break;
        }
        break;
      }
      case Rt.CALL_EXCEPTION:
      case Rt.INSUFFICIENT_FUNDS:
      case Rt.MISSING_NEW:
      case Rt.NONCE_EXPIRED:
      case Rt.REPLACEMENT_UNDERPRICED:
      case Rt.TRANSACTION_REPLACED:
      case Rt.UNPREDICTABLE_GAS_LIMIT:
        o = r;
        break;
    }
    o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (e += " (" + n.join(", ") + ")");
    const c = new Error(e);
    return c.reason = s, c.code = r, Object.keys(i).forEach(function(h) {
      c[h] = i[h];
    }), c;
  }
  throwError(e, r, i) {
    throw this.makeError(e, r, i);
  }
  throwArgumentError(e, r, i) {
    return this.throwError(e, We.errors.INVALID_ARGUMENT, { argument: r, value: i });
  }
  assert(e, r, i, n) {
    e || this.throwError(r, i, n);
  }
  assertArgument(e, r, i, n) {
    e || this.throwArgumentError(r, i, n);
  }
  checkNormalize(e) {
    Ta && this.throwError("platform missing String.prototype.normalize", We.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Ta });
  }
  checkSafeUint53(e, r) {
    typeof e == "number" && (r == null && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, We.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: e }), e % 1 && this.throwError(r, We.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: e }));
  }
  checkArgumentCount(e, r, i) {
    i ? i = ": " + i : i = "", e < r && this.throwError("missing argument" + i, We.errors.MISSING_ARGUMENT, { count: e, expectedCount: r }), e > r && this.throwError("too many arguments" + i, We.errors.UNEXPECTED_ARGUMENT, { count: e, expectedCount: r });
  }
  checkNew(e, r) {
    (e === Object || e == null) && this.throwError("missing new", We.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", We.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", We.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return as || (as = new We(mg)), as;
  }
  static setCensorship(e, r) {
    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", We.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Ca) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", We.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Ra = !!e, Ca = !!r;
  }
  static setLogLevel(e) {
    const r = an[e.toLowerCase()];
    if (r == null) {
      We.globalLogger().warn("invalid log level - " + e);
      return;
    }
    Pa = r;
  }
  static from(e) {
    return new We(e);
  }
};
Je.errors = Rt, Je.levels = Us;
const vg = "bytes/5.7.0", je = new Je(vg);
function Cl(t) {
  return !!t.toHexString;
}
function ri(t) {
  return t.slice || (t.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return ri(new Uint8Array(Array.prototype.slice.apply(t, e)));
  }), t;
}
function wg(t) {
  return gt(t) && !(t.length % 2) || vi(t);
}
function Ba(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function vi(t) {
  if (t == null)
    return !1;
  if (t.constructor === Uint8Array)
    return !0;
  if (typeof t == "string" || !Ba(t.length) || t.length < 0)
    return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!Ba(r) || r < 0 || r >= 256)
      return !1;
  }
  return !0;
}
function Ke(t, e) {
  if (e || (e = {}), typeof t == "number") {
    je.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; )
      r.unshift(t & 255), t = parseInt(String(t / 256));
    return r.length === 0 && r.push(0), ri(new Uint8Array(r));
  }
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Cl(t) && (t = t.toHexString()), gt(t)) {
    let r = t.substring(2);
    r.length % 2 && (e.hexPad === "left" ? r = "0" + r : e.hexPad === "right" ? r += "0" : je.throwArgumentError("hex data is odd-length", "value", t));
    const i = [];
    for (let n = 0; n < r.length; n += 2)
      i.push(parseInt(r.substring(n, n + 2), 16));
    return ri(new Uint8Array(i));
  }
  return vi(t) ? ri(new Uint8Array(t)) : je.throwArgumentError("invalid arrayify value", "value", t);
}
function bg(t) {
  const e = t.map((n) => Ke(n)), r = e.reduce((n, s) => n + s.length, 0), i = new Uint8Array(r);
  return e.reduce((n, s) => (i.set(s, n), n + s.length), 0), ri(i);
}
function _g(t, e) {
  t = Ke(t), t.length > e && je.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(e);
  return r.set(t, e - t.length), ri(r);
}
function gt(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
const cs = "0123456789abcdef";
function at(t, e) {
  if (e || (e = {}), typeof t == "number") {
    je.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; )
      r = cs[t & 15] + r, t = Math.floor(t / 16);
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
  if (e.allowMissingPrefix && typeof t == "string" && t.substring(0, 2) !== "0x" && (t = "0x" + t), Cl(t))
    return t.toHexString();
  if (gt(t))
    return t.length % 2 && (e.hexPad === "left" ? t = "0x0" + t.substring(2) : e.hexPad === "right" ? t += "0" : je.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
  if (vi(t)) {
    let r = "0x";
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      r += cs[(n & 240) >> 4] + cs[n & 15];
    }
    return r;
  }
  return je.throwArgumentError("invalid hexlify value", "value", t);
}
function Ag(t) {
  if (typeof t != "string")
    t = at(t);
  else if (!gt(t) || t.length % 2)
    return null;
  return (t.length - 2) / 2;
}
function ka(t, e, r) {
  return typeof t != "string" ? t = at(t) : (!gt(t) || t.length % 2) && je.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, r != null ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
}
function Ut(t, e) {
  for (typeof t != "string" ? t = at(t) : gt(t) || je.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && je.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
    t = "0x0" + t.substring(2);
  return t;
}
function Rl(t) {
  const e = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (wg(t)) {
    let r = Ke(t);
    r.length === 64 ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = at(r.slice(0, 32)), e.s = at(r.slice(32, 64))) : r.length === 65 ? (e.r = at(r.slice(0, 32)), e.s = at(r.slice(32, 64)), e.v = r[64]) : je.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : je.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = at(r.slice(32, 64));
  } else {
    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, e._vs != null) {
      const n = _g(Ke(e._vs), 32);
      e._vs = at(n);
      const s = n[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = s : e.recoveryParam !== s && je.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), n[0] &= 127;
      const o = at(n);
      e.s == null ? e.s = o : e.s !== o && je.throwArgumentError("signature v mismatch _vs", "signature", t);
    }
    if (e.recoveryParam == null)
      e.v == null ? je.throwArgumentError("signature missing v and recoveryParam", "signature", t) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const n = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== n && je.throwArgumentError("signature recoveryParam mismatch v", "signature", t);
    }
    e.r == null || !gt(e.r) ? je.throwArgumentError("signature missing or invalid r", "signature", t) : e.r = Ut(e.r, 32), e.s == null || !gt(e.s) ? je.throwArgumentError("signature missing or invalid s", "signature", t) : e.s = Ut(e.s, 32);
    const r = Ke(e.s);
    r[0] >= 128 && je.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
    const i = at(r);
    e._vs && (gt(e._vs) || je.throwArgumentError("signature invalid _vs", "signature", t), e._vs = Ut(e._vs, 32)), e._vs == null ? e._vs = i : e._vs !== i && je.throwArgumentError("signature _vs mismatch v and s", "signature", t);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function xo(t) {
  return "0x" + gg.keccak_256(Ke(t));
}
var Pl = { exports: {} }, Eg = {}, Sg = Object.freeze({ __proto__: null, default: Eg }), Ig = pg(Sg);
(function(t) {
  (function(e, r) {
    function i(a, f) {
      if (!a)
        throw new Error(f || "Assertion failed");
    }
    function n(a, f) {
      a.super_ = f;
      var g = function() {
      };
      g.prototype = f.prototype, a.prototype = new g(), a.prototype.constructor = a;
    }
    function s(a, f, g) {
      if (s.isBN(a))
        return a;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, a !== null && ((f === "le" || f === "be") && (g = f, f = 10), this._init(a || 0, f || 10, g || "be"));
    }
    typeof e == "object" ? e.exports = s : r.BN = s, s.BN = s, s.wordSize = 26;
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = Ig.Buffer;
    } catch {
    }
    s.isBN = function(a) {
      return a instanceof s ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === s.wordSize && Array.isArray(a.words);
    }, s.max = function(a, f) {
      return a.cmp(f) > 0 ? a : f;
    }, s.min = function(a, f) {
      return a.cmp(f) < 0 ? a : f;
    }, s.prototype._init = function(a, f, g) {
      if (typeof a == "number")
        return this._initNumber(a, f, g);
      if (typeof a == "object")
        return this._initArray(a, f, g);
      f === "hex" && (f = 16), i(f === (f | 0) && f >= 2 && f <= 36), a = a.toString().replace(/\s+/g, "");
      var v = 0;
      a[0] === "-" && (v++, this.negative = 1), v < a.length && (f === 16 ? this._parseHex(a, v, g) : (this._parseBase(a, f, v), g === "le" && this._initArray(this.toArray(), f, g)));
    }, s.prototype._initNumber = function(a, f, g) {
      a < 0 && (this.negative = 1, a = -a), a < 67108864 ? (this.words = [a & 67108863], this.length = 1) : a < 4503599627370496 ? (this.words = [a & 67108863, a / 67108864 & 67108863], this.length = 2) : (i(a < 9007199254740992), this.words = [a & 67108863, a / 67108864 & 67108863, 1], this.length = 3), g === "le" && this._initArray(this.toArray(), f, g);
    }, s.prototype._initArray = function(a, f, g) {
      if (i(typeof a.length == "number"), a.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var _, S, M = 0;
      if (g === "be")
        for (v = a.length - 1, _ = 0; v >= 0; v -= 3)
          S = a[v] | a[v - 1] << 8 | a[v - 2] << 16, this.words[_] |= S << M & 67108863, this.words[_ + 1] = S >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, _++);
      else if (g === "le")
        for (v = 0, _ = 0; v < a.length; v += 3)
          S = a[v] | a[v + 1] << 8 | a[v + 2] << 16, this.words[_] |= S << M & 67108863, this.words[_ + 1] = S >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, _++);
      return this._strip();
    };
    function c(a, f) {
      var g = a.charCodeAt(f);
      if (g >= 48 && g <= 57)
        return g - 48;
      if (g >= 65 && g <= 70)
        return g - 55;
      if (g >= 97 && g <= 102)
        return g - 87;
      i(!1, "Invalid character in " + a);
    }
    function h(a, f, g) {
      var v = c(a, g);
      return g - 1 >= f && (v |= c(a, g - 1) << 4), v;
    }
    s.prototype._parseHex = function(a, f, g) {
      this.length = Math.ceil((a.length - f) / 6), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var _ = 0, S = 0, M;
      if (g === "be")
        for (v = a.length - 1; v >= f; v -= 2)
          M = h(a, f, v) << _, this.words[S] |= M & 67108863, _ >= 18 ? (_ -= 18, S += 1, this.words[S] |= M >>> 26) : _ += 8;
      else {
        var w = a.length - f;
        for (v = w % 2 === 0 ? f + 1 : f; v < a.length; v += 2)
          M = h(a, f, v) << _, this.words[S] |= M & 67108863, _ >= 18 ? (_ -= 18, S += 1, this.words[S] |= M >>> 26) : _ += 8;
      }
      this._strip();
    };
    function u(a, f, g, v) {
      for (var _ = 0, S = 0, M = Math.min(a.length, g), w = f; w < M; w++) {
        var l = a.charCodeAt(w) - 48;
        _ *= v, l >= 49 ? S = l - 49 + 10 : l >= 17 ? S = l - 17 + 10 : S = l, i(l >= 0 && S < v, "Invalid character"), _ += S;
      }
      return _;
    }
    s.prototype._parseBase = function(a, f, g) {
      this.words = [0], this.length = 1;
      for (var v = 0, _ = 1; _ <= 67108863; _ *= f)
        v++;
      v--, _ = _ / f | 0;
      for (var S = a.length - g, M = S % v, w = Math.min(S, S - M) + g, l = 0, y = g; y < w; y += v)
        l = u(a, y, y + v, f), this.imuln(_), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      if (M !== 0) {
        var Q = 1;
        for (l = u(a, y, a.length, f), y = 0; y < M; y++)
          Q *= f;
        this.imuln(Q), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      }
      this._strip();
    }, s.prototype.copy = function(a) {
      a.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        a.words[f] = this.words[f];
      a.length = this.length, a.negative = this.negative, a.red = this.red;
    };
    function d(a, f) {
      a.words = f.words, a.length = f.length, a.negative = f.negative, a.red = f.red;
    }
    if (s.prototype._move = function(a) {
      d(a, this);
    }, s.prototype.clone = function() {
      var a = new s(null);
      return this.copy(a), a;
    }, s.prototype._expand = function(a) {
      for (; this.length < a; )
        this.words[this.length++] = 0;
      return this;
    }, s.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, s.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = m;
      } catch {
        s.prototype.inspect = m;
      }
    else
      s.prototype.inspect = m;
    function m() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var b = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], A = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    s.prototype.toString = function(a, f) {
      a = a || 10, f = f | 0 || 1;
      var g;
      if (a === 16 || a === "hex") {
        g = "";
        for (var v = 0, _ = 0, S = 0; S < this.length; S++) {
          var M = this.words[S], w = ((M << v | _) & 16777215).toString(16);
          _ = M >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, S--), _ !== 0 || S !== this.length - 1 ? g = b[6 - w.length] + w + g : g = w + g;
        }
        for (_ !== 0 && (g = _.toString(16) + g); g.length % f !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      if (a === (a | 0) && a >= 2 && a <= 36) {
        var l = A[a], y = E[a];
        g = "";
        var Q = this.clone();
        for (Q.negative = 0; !Q.isZero(); ) {
          var H = Q.modrn(y).toString(a);
          Q = Q.idivn(y), Q.isZero() ? g = H + g : g = b[l - H.length] + H + g;
        }
        for (this.isZero() && (g = "0" + g); g.length % f !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      i(!1, "Base should be between 2 and 36");
    }, s.prototype.toNumber = function() {
      var a = this.words[0];
      return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -a : a;
    }, s.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, o && (s.prototype.toBuffer = function(a, f) {
      return this.toArrayLike(o, a, f);
    }), s.prototype.toArray = function(a, f) {
      return this.toArrayLike(Array, a, f);
    };
    var N = function(a, f) {
      return a.allocUnsafe ? a.allocUnsafe(f) : new a(f);
    };
    s.prototype.toArrayLike = function(a, f, g) {
      this._strip();
      var v = this.byteLength(), _ = g || Math.max(1, v);
      i(v <= _, "byte array longer than desired length"), i(_ > 0, "Requested array length <= 0");
      var S = N(a, _), M = f === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M](S, v), S;
    }, s.prototype._toArrayLikeLE = function(a, f) {
      for (var g = 0, v = 0, _ = 0, S = 0; _ < this.length; _++) {
        var M = this.words[_] << S | v;
        a[g++] = M & 255, g < a.length && (a[g++] = M >> 8 & 255), g < a.length && (a[g++] = M >> 16 & 255), S === 6 ? (g < a.length && (a[g++] = M >> 24 & 255), v = 0, S = 0) : (v = M >>> 24, S += 2);
      }
      if (g < a.length)
        for (a[g++] = v; g < a.length; )
          a[g++] = 0;
    }, s.prototype._toArrayLikeBE = function(a, f) {
      for (var g = a.length - 1, v = 0, _ = 0, S = 0; _ < this.length; _++) {
        var M = this.words[_] << S | v;
        a[g--] = M & 255, g >= 0 && (a[g--] = M >> 8 & 255), g >= 0 && (a[g--] = M >> 16 & 255), S === 6 ? (g >= 0 && (a[g--] = M >> 24 & 255), v = 0, S = 0) : (v = M >>> 24, S += 2);
      }
      if (g >= 0)
        for (a[g--] = v; g >= 0; )
          a[g--] = 0;
    }, Math.clz32 ? s.prototype._countBits = function(a) {
      return 32 - Math.clz32(a);
    } : s.prototype._countBits = function(a) {
      var f = a, g = 0;
      return f >= 4096 && (g += 13, f >>>= 13), f >= 64 && (g += 7, f >>>= 7), f >= 8 && (g += 4, f >>>= 4), f >= 2 && (g += 2, f >>>= 2), g + f;
    }, s.prototype._zeroBits = function(a) {
      if (a === 0)
        return 26;
      var f = a, g = 0;
      return f & 8191 || (g += 13, f >>>= 13), f & 127 || (g += 7, f >>>= 7), f & 15 || (g += 4, f >>>= 4), f & 3 || (g += 2, f >>>= 2), f & 1 || g++, g;
    }, s.prototype.bitLength = function() {
      var a = this.words[this.length - 1], f = this._countBits(a);
      return (this.length - 1) * 26 + f;
    };
    function I(a) {
      for (var f = new Array(a.bitLength()), g = 0; g < f.length; g++) {
        var v = g / 26 | 0, _ = g % 26;
        f[g] = a.words[v] >>> _ & 1;
      }
      return f;
    }
    s.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var a = 0, f = 0; f < this.length; f++) {
        var g = this._zeroBits(this.words[f]);
        if (a += g, g !== 26)
          break;
      }
      return a;
    }, s.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, s.prototype.toTwos = function(a) {
      return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone();
    }, s.prototype.fromTwos = function(a) {
      return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
    }, s.prototype.isNeg = function() {
      return this.negative !== 0;
    }, s.prototype.neg = function() {
      return this.clone().ineg();
    }, s.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, s.prototype.iuor = function(a) {
      for (; this.length < a.length; )
        this.words[this.length++] = 0;
      for (var f = 0; f < a.length; f++)
        this.words[f] = this.words[f] | a.words[f];
      return this._strip();
    }, s.prototype.ior = function(a) {
      return i((this.negative | a.negative) === 0), this.iuor(a);
    }, s.prototype.or = function(a) {
      return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this);
    }, s.prototype.uor = function(a) {
      return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this);
    }, s.prototype.iuand = function(a) {
      var f;
      this.length > a.length ? f = a : f = this;
      for (var g = 0; g < f.length; g++)
        this.words[g] = this.words[g] & a.words[g];
      return this.length = f.length, this._strip();
    }, s.prototype.iand = function(a) {
      return i((this.negative | a.negative) === 0), this.iuand(a);
    }, s.prototype.and = function(a) {
      return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this);
    }, s.prototype.uand = function(a) {
      return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this);
    }, s.prototype.iuxor = function(a) {
      var f, g;
      this.length > a.length ? (f = this, g = a) : (f = a, g = this);
      for (var v = 0; v < g.length; v++)
        this.words[v] = f.words[v] ^ g.words[v];
      if (this !== f)
        for (; v < f.length; v++)
          this.words[v] = f.words[v];
      return this.length = f.length, this._strip();
    }, s.prototype.ixor = function(a) {
      return i((this.negative | a.negative) === 0), this.iuxor(a);
    }, s.prototype.xor = function(a) {
      return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this);
    }, s.prototype.uxor = function(a) {
      return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this);
    }, s.prototype.inotn = function(a) {
      i(typeof a == "number" && a >= 0);
      var f = Math.ceil(a / 26) | 0, g = a % 26;
      this._expand(f), g > 0 && f--;
      for (var v = 0; v < f; v++)
        this.words[v] = ~this.words[v] & 67108863;
      return g > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - g), this._strip();
    }, s.prototype.notn = function(a) {
      return this.clone().inotn(a);
    }, s.prototype.setn = function(a, f) {
      i(typeof a == "number" && a >= 0);
      var g = a / 26 | 0, v = a % 26;
      return this._expand(g + 1), f ? this.words[g] = this.words[g] | 1 << v : this.words[g] = this.words[g] & ~(1 << v), this._strip();
    }, s.prototype.iadd = function(a) {
      var f;
      if (this.negative !== 0 && a.negative === 0)
        return this.negative = 0, f = this.isub(a), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && a.negative !== 0)
        return a.negative = 0, f = this.isub(a), a.negative = 1, f._normSign();
      var g, v;
      this.length > a.length ? (g = this, v = a) : (g = a, v = this);
      for (var _ = 0, S = 0; S < v.length; S++)
        f = (g.words[S] | 0) + (v.words[S] | 0) + _, this.words[S] = f & 67108863, _ = f >>> 26;
      for (; _ !== 0 && S < g.length; S++)
        f = (g.words[S] | 0) + _, this.words[S] = f & 67108863, _ = f >>> 26;
      if (this.length = g.length, _ !== 0)
        this.words[this.length] = _, this.length++;
      else if (g !== this)
        for (; S < g.length; S++)
          this.words[S] = g.words[S];
      return this;
    }, s.prototype.add = function(a) {
      var f;
      return a.negative !== 0 && this.negative === 0 ? (a.negative = 0, f = this.sub(a), a.negative ^= 1, f) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0, f = a.sub(this), this.negative = 1, f) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this);
    }, s.prototype.isub = function(a) {
      if (a.negative !== 0) {
        a.negative = 0;
        var f = this.iadd(a);
        return a.negative = 1, f._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
      var g = this.cmp(a);
      if (g === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var v, _;
      g > 0 ? (v = this, _ = a) : (v = a, _ = this);
      for (var S = 0, M = 0; M < _.length; M++)
        f = (v.words[M] | 0) - (_.words[M] | 0) + S, S = f >> 26, this.words[M] = f & 67108863;
      for (; S !== 0 && M < v.length; M++)
        f = (v.words[M] | 0) + S, S = f >> 26, this.words[M] = f & 67108863;
      if (S === 0 && M < v.length && v !== this)
        for (; M < v.length; M++)
          this.words[M] = v.words[M];
      return this.length = Math.max(this.length, M), v !== this && (this.negative = 1), this._strip();
    }, s.prototype.sub = function(a) {
      return this.clone().isub(a);
    };
    function x(a, f, g) {
      g.negative = f.negative ^ a.negative;
      var v = a.length + f.length | 0;
      g.length = v, v = v - 1 | 0;
      var _ = a.words[0] | 0, S = f.words[0] | 0, M = _ * S, w = M & 67108863, l = M / 67108864 | 0;
      g.words[0] = w;
      for (var y = 1; y < v; y++) {
        for (var Q = l >>> 26, H = l & 67108863, p = Math.min(y, f.length - 1), O = Math.max(0, y - a.length + 1); O <= p; O++) {
          var T = y - O | 0;
          _ = a.words[T] | 0, S = f.words[O] | 0, M = _ * S + H, Q += M / 67108864 | 0, H = M & 67108863;
        }
        g.words[y] = H | 0, l = Q | 0;
      }
      return l !== 0 ? g.words[y] = l | 0 : g.length--, g._strip();
    }
    var R = function(a, f, g) {
      var v = a.words, _ = f.words, S = g.words, M = 0, w, l, y, Q = v[0] | 0, H = Q & 8191, p = Q >>> 13, O = v[1] | 0, T = O & 8191, B = O >>> 13, V = v[2] | 0, L = V & 8191, z = V >>> 13, W = v[3] | 0, ee = W & 8191, j = W >>> 13, le = v[4] | 0, ue = le & 8191, fe = le >>> 13, wr = v[5] | 0, de = wr & 8191, pe = wr >>> 13, br = v[6] | 0, ge = br & 8191, me = br >>> 13, _r = v[7] | 0, ye = _r & 8191, ve = _r >>> 13, Ar = v[8] | 0, we = Ar & 8191, be = Ar >>> 13, Er = v[9] | 0, _e = Er & 8191, Ae = Er >>> 13, Sr = _[0] | 0, Ee = Sr & 8191, Se = Sr >>> 13, Ir = _[1] | 0, Ie = Ir & 8191, Me = Ir >>> 13, Mr = _[2] | 0, Ne = Mr & 8191, xe = Mr >>> 13, Nr = _[3] | 0, Ce = Nr & 8191, Re = Nr >>> 13, xr = _[4] | 0, Pe = xr & 8191, Te = xr >>> 13, Cr = _[5] | 0, Oe = Cr & 8191, Be = Cr >>> 13, Rr = _[6] | 0, ke = Rr & 8191, Fe = Rr >>> 13, Pr = _[7] | 0, De = Pr & 8191, qe = Pr >>> 13, Tr = _[8] | 0, Le = Tr & 8191, Ue = Tr >>> 13, Or = _[9] | 0, $e = Or & 8191, ze = Or >>> 13;
      g.negative = a.negative ^ f.negative, g.length = 19, w = Math.imul(H, Ee), l = Math.imul(H, Se), l = l + Math.imul(p, Ee) | 0, y = Math.imul(p, Se);
      var rr = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, w = Math.imul(T, Ee), l = Math.imul(T, Se), l = l + Math.imul(B, Ee) | 0, y = Math.imul(B, Se), w = w + Math.imul(H, Ie) | 0, l = l + Math.imul(H, Me) | 0, l = l + Math.imul(p, Ie) | 0, y = y + Math.imul(p, Me) | 0;
      var ir = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, w = Math.imul(L, Ee), l = Math.imul(L, Se), l = l + Math.imul(z, Ee) | 0, y = Math.imul(z, Se), w = w + Math.imul(T, Ie) | 0, l = l + Math.imul(T, Me) | 0, l = l + Math.imul(B, Ie) | 0, y = y + Math.imul(B, Me) | 0, w = w + Math.imul(H, Ne) | 0, l = l + Math.imul(H, xe) | 0, l = l + Math.imul(p, Ne) | 0, y = y + Math.imul(p, xe) | 0;
      var nr = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, w = Math.imul(ee, Ee), l = Math.imul(ee, Se), l = l + Math.imul(j, Ee) | 0, y = Math.imul(j, Se), w = w + Math.imul(L, Ie) | 0, l = l + Math.imul(L, Me) | 0, l = l + Math.imul(z, Ie) | 0, y = y + Math.imul(z, Me) | 0, w = w + Math.imul(T, Ne) | 0, l = l + Math.imul(T, xe) | 0, l = l + Math.imul(B, Ne) | 0, y = y + Math.imul(B, xe) | 0, w = w + Math.imul(H, Ce) | 0, l = l + Math.imul(H, Re) | 0, l = l + Math.imul(p, Ce) | 0, y = y + Math.imul(p, Re) | 0;
      var sr = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, w = Math.imul(ue, Ee), l = Math.imul(ue, Se), l = l + Math.imul(fe, Ee) | 0, y = Math.imul(fe, Se), w = w + Math.imul(ee, Ie) | 0, l = l + Math.imul(ee, Me) | 0, l = l + Math.imul(j, Ie) | 0, y = y + Math.imul(j, Me) | 0, w = w + Math.imul(L, Ne) | 0, l = l + Math.imul(L, xe) | 0, l = l + Math.imul(z, Ne) | 0, y = y + Math.imul(z, xe) | 0, w = w + Math.imul(T, Ce) | 0, l = l + Math.imul(T, Re) | 0, l = l + Math.imul(B, Ce) | 0, y = y + Math.imul(B, Re) | 0, w = w + Math.imul(H, Pe) | 0, l = l + Math.imul(H, Te) | 0, l = l + Math.imul(p, Pe) | 0, y = y + Math.imul(p, Te) | 0;
      var or = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, w = Math.imul(de, Ee), l = Math.imul(de, Se), l = l + Math.imul(pe, Ee) | 0, y = Math.imul(pe, Se), w = w + Math.imul(ue, Ie) | 0, l = l + Math.imul(ue, Me) | 0, l = l + Math.imul(fe, Ie) | 0, y = y + Math.imul(fe, Me) | 0, w = w + Math.imul(ee, Ne) | 0, l = l + Math.imul(ee, xe) | 0, l = l + Math.imul(j, Ne) | 0, y = y + Math.imul(j, xe) | 0, w = w + Math.imul(L, Ce) | 0, l = l + Math.imul(L, Re) | 0, l = l + Math.imul(z, Ce) | 0, y = y + Math.imul(z, Re) | 0, w = w + Math.imul(T, Pe) | 0, l = l + Math.imul(T, Te) | 0, l = l + Math.imul(B, Pe) | 0, y = y + Math.imul(B, Te) | 0, w = w + Math.imul(H, Oe) | 0, l = l + Math.imul(H, Be) | 0, l = l + Math.imul(p, Oe) | 0, y = y + Math.imul(p, Be) | 0;
      var ar = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, w = Math.imul(ge, Ee), l = Math.imul(ge, Se), l = l + Math.imul(me, Ee) | 0, y = Math.imul(me, Se), w = w + Math.imul(de, Ie) | 0, l = l + Math.imul(de, Me) | 0, l = l + Math.imul(pe, Ie) | 0, y = y + Math.imul(pe, Me) | 0, w = w + Math.imul(ue, Ne) | 0, l = l + Math.imul(ue, xe) | 0, l = l + Math.imul(fe, Ne) | 0, y = y + Math.imul(fe, xe) | 0, w = w + Math.imul(ee, Ce) | 0, l = l + Math.imul(ee, Re) | 0, l = l + Math.imul(j, Ce) | 0, y = y + Math.imul(j, Re) | 0, w = w + Math.imul(L, Pe) | 0, l = l + Math.imul(L, Te) | 0, l = l + Math.imul(z, Pe) | 0, y = y + Math.imul(z, Te) | 0, w = w + Math.imul(T, Oe) | 0, l = l + Math.imul(T, Be) | 0, l = l + Math.imul(B, Oe) | 0, y = y + Math.imul(B, Be) | 0, w = w + Math.imul(H, ke) | 0, l = l + Math.imul(H, Fe) | 0, l = l + Math.imul(p, ke) | 0, y = y + Math.imul(p, Fe) | 0;
      var Ln = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Ln >>> 26) | 0, Ln &= 67108863, w = Math.imul(ye, Ee), l = Math.imul(ye, Se), l = l + Math.imul(ve, Ee) | 0, y = Math.imul(ve, Se), w = w + Math.imul(ge, Ie) | 0, l = l + Math.imul(ge, Me) | 0, l = l + Math.imul(me, Ie) | 0, y = y + Math.imul(me, Me) | 0, w = w + Math.imul(de, Ne) | 0, l = l + Math.imul(de, xe) | 0, l = l + Math.imul(pe, Ne) | 0, y = y + Math.imul(pe, xe) | 0, w = w + Math.imul(ue, Ce) | 0, l = l + Math.imul(ue, Re) | 0, l = l + Math.imul(fe, Ce) | 0, y = y + Math.imul(fe, Re) | 0, w = w + Math.imul(ee, Pe) | 0, l = l + Math.imul(ee, Te) | 0, l = l + Math.imul(j, Pe) | 0, y = y + Math.imul(j, Te) | 0, w = w + Math.imul(L, Oe) | 0, l = l + Math.imul(L, Be) | 0, l = l + Math.imul(z, Oe) | 0, y = y + Math.imul(z, Be) | 0, w = w + Math.imul(T, ke) | 0, l = l + Math.imul(T, Fe) | 0, l = l + Math.imul(B, ke) | 0, y = y + Math.imul(B, Fe) | 0, w = w + Math.imul(H, De) | 0, l = l + Math.imul(H, qe) | 0, l = l + Math.imul(p, De) | 0, y = y + Math.imul(p, qe) | 0;
      var Un = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Un >>> 26) | 0, Un &= 67108863, w = Math.imul(we, Ee), l = Math.imul(we, Se), l = l + Math.imul(be, Ee) | 0, y = Math.imul(be, Se), w = w + Math.imul(ye, Ie) | 0, l = l + Math.imul(ye, Me) | 0, l = l + Math.imul(ve, Ie) | 0, y = y + Math.imul(ve, Me) | 0, w = w + Math.imul(ge, Ne) | 0, l = l + Math.imul(ge, xe) | 0, l = l + Math.imul(me, Ne) | 0, y = y + Math.imul(me, xe) | 0, w = w + Math.imul(de, Ce) | 0, l = l + Math.imul(de, Re) | 0, l = l + Math.imul(pe, Ce) | 0, y = y + Math.imul(pe, Re) | 0, w = w + Math.imul(ue, Pe) | 0, l = l + Math.imul(ue, Te) | 0, l = l + Math.imul(fe, Pe) | 0, y = y + Math.imul(fe, Te) | 0, w = w + Math.imul(ee, Oe) | 0, l = l + Math.imul(ee, Be) | 0, l = l + Math.imul(j, Oe) | 0, y = y + Math.imul(j, Be) | 0, w = w + Math.imul(L, ke) | 0, l = l + Math.imul(L, Fe) | 0, l = l + Math.imul(z, ke) | 0, y = y + Math.imul(z, Fe) | 0, w = w + Math.imul(T, De) | 0, l = l + Math.imul(T, qe) | 0, l = l + Math.imul(B, De) | 0, y = y + Math.imul(B, qe) | 0, w = w + Math.imul(H, Le) | 0, l = l + Math.imul(H, Ue) | 0, l = l + Math.imul(p, Le) | 0, y = y + Math.imul(p, Ue) | 0;
      var $n = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + ($n >>> 26) | 0, $n &= 67108863, w = Math.imul(_e, Ee), l = Math.imul(_e, Se), l = l + Math.imul(Ae, Ee) | 0, y = Math.imul(Ae, Se), w = w + Math.imul(we, Ie) | 0, l = l + Math.imul(we, Me) | 0, l = l + Math.imul(be, Ie) | 0, y = y + Math.imul(be, Me) | 0, w = w + Math.imul(ye, Ne) | 0, l = l + Math.imul(ye, xe) | 0, l = l + Math.imul(ve, Ne) | 0, y = y + Math.imul(ve, xe) | 0, w = w + Math.imul(ge, Ce) | 0, l = l + Math.imul(ge, Re) | 0, l = l + Math.imul(me, Ce) | 0, y = y + Math.imul(me, Re) | 0, w = w + Math.imul(de, Pe) | 0, l = l + Math.imul(de, Te) | 0, l = l + Math.imul(pe, Pe) | 0, y = y + Math.imul(pe, Te) | 0, w = w + Math.imul(ue, Oe) | 0, l = l + Math.imul(ue, Be) | 0, l = l + Math.imul(fe, Oe) | 0, y = y + Math.imul(fe, Be) | 0, w = w + Math.imul(ee, ke) | 0, l = l + Math.imul(ee, Fe) | 0, l = l + Math.imul(j, ke) | 0, y = y + Math.imul(j, Fe) | 0, w = w + Math.imul(L, De) | 0, l = l + Math.imul(L, qe) | 0, l = l + Math.imul(z, De) | 0, y = y + Math.imul(z, qe) | 0, w = w + Math.imul(T, Le) | 0, l = l + Math.imul(T, Ue) | 0, l = l + Math.imul(B, Le) | 0, y = y + Math.imul(B, Ue) | 0, w = w + Math.imul(H, $e) | 0, l = l + Math.imul(H, ze) | 0, l = l + Math.imul(p, $e) | 0, y = y + Math.imul(p, ze) | 0;
      var zn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (zn >>> 26) | 0, zn &= 67108863, w = Math.imul(_e, Ie), l = Math.imul(_e, Me), l = l + Math.imul(Ae, Ie) | 0, y = Math.imul(Ae, Me), w = w + Math.imul(we, Ne) | 0, l = l + Math.imul(we, xe) | 0, l = l + Math.imul(be, Ne) | 0, y = y + Math.imul(be, xe) | 0, w = w + Math.imul(ye, Ce) | 0, l = l + Math.imul(ye, Re) | 0, l = l + Math.imul(ve, Ce) | 0, y = y + Math.imul(ve, Re) | 0, w = w + Math.imul(ge, Pe) | 0, l = l + Math.imul(ge, Te) | 0, l = l + Math.imul(me, Pe) | 0, y = y + Math.imul(me, Te) | 0, w = w + Math.imul(de, Oe) | 0, l = l + Math.imul(de, Be) | 0, l = l + Math.imul(pe, Oe) | 0, y = y + Math.imul(pe, Be) | 0, w = w + Math.imul(ue, ke) | 0, l = l + Math.imul(ue, Fe) | 0, l = l + Math.imul(fe, ke) | 0, y = y + Math.imul(fe, Fe) | 0, w = w + Math.imul(ee, De) | 0, l = l + Math.imul(ee, qe) | 0, l = l + Math.imul(j, De) | 0, y = y + Math.imul(j, qe) | 0, w = w + Math.imul(L, Le) | 0, l = l + Math.imul(L, Ue) | 0, l = l + Math.imul(z, Le) | 0, y = y + Math.imul(z, Ue) | 0, w = w + Math.imul(T, $e) | 0, l = l + Math.imul(T, ze) | 0, l = l + Math.imul(B, $e) | 0, y = y + Math.imul(B, ze) | 0;
      var Kn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Kn >>> 26) | 0, Kn &= 67108863, w = Math.imul(_e, Ne), l = Math.imul(_e, xe), l = l + Math.imul(Ae, Ne) | 0, y = Math.imul(Ae, xe), w = w + Math.imul(we, Ce) | 0, l = l + Math.imul(we, Re) | 0, l = l + Math.imul(be, Ce) | 0, y = y + Math.imul(be, Re) | 0, w = w + Math.imul(ye, Pe) | 0, l = l + Math.imul(ye, Te) | 0, l = l + Math.imul(ve, Pe) | 0, y = y + Math.imul(ve, Te) | 0, w = w + Math.imul(ge, Oe) | 0, l = l + Math.imul(ge, Be) | 0, l = l + Math.imul(me, Oe) | 0, y = y + Math.imul(me, Be) | 0, w = w + Math.imul(de, ke) | 0, l = l + Math.imul(de, Fe) | 0, l = l + Math.imul(pe, ke) | 0, y = y + Math.imul(pe, Fe) | 0, w = w + Math.imul(ue, De) | 0, l = l + Math.imul(ue, qe) | 0, l = l + Math.imul(fe, De) | 0, y = y + Math.imul(fe, qe) | 0, w = w + Math.imul(ee, Le) | 0, l = l + Math.imul(ee, Ue) | 0, l = l + Math.imul(j, Le) | 0, y = y + Math.imul(j, Ue) | 0, w = w + Math.imul(L, $e) | 0, l = l + Math.imul(L, ze) | 0, l = l + Math.imul(z, $e) | 0, y = y + Math.imul(z, ze) | 0;
      var jn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (jn >>> 26) | 0, jn &= 67108863, w = Math.imul(_e, Ce), l = Math.imul(_e, Re), l = l + Math.imul(Ae, Ce) | 0, y = Math.imul(Ae, Re), w = w + Math.imul(we, Pe) | 0, l = l + Math.imul(we, Te) | 0, l = l + Math.imul(be, Pe) | 0, y = y + Math.imul(be, Te) | 0, w = w + Math.imul(ye, Oe) | 0, l = l + Math.imul(ye, Be) | 0, l = l + Math.imul(ve, Oe) | 0, y = y + Math.imul(ve, Be) | 0, w = w + Math.imul(ge, ke) | 0, l = l + Math.imul(ge, Fe) | 0, l = l + Math.imul(me, ke) | 0, y = y + Math.imul(me, Fe) | 0, w = w + Math.imul(de, De) | 0, l = l + Math.imul(de, qe) | 0, l = l + Math.imul(pe, De) | 0, y = y + Math.imul(pe, qe) | 0, w = w + Math.imul(ue, Le) | 0, l = l + Math.imul(ue, Ue) | 0, l = l + Math.imul(fe, Le) | 0, y = y + Math.imul(fe, Ue) | 0, w = w + Math.imul(ee, $e) | 0, l = l + Math.imul(ee, ze) | 0, l = l + Math.imul(j, $e) | 0, y = y + Math.imul(j, ze) | 0;
      var Vn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Vn >>> 26) | 0, Vn &= 67108863, w = Math.imul(_e, Pe), l = Math.imul(_e, Te), l = l + Math.imul(Ae, Pe) | 0, y = Math.imul(Ae, Te), w = w + Math.imul(we, Oe) | 0, l = l + Math.imul(we, Be) | 0, l = l + Math.imul(be, Oe) | 0, y = y + Math.imul(be, Be) | 0, w = w + Math.imul(ye, ke) | 0, l = l + Math.imul(ye, Fe) | 0, l = l + Math.imul(ve, ke) | 0, y = y + Math.imul(ve, Fe) | 0, w = w + Math.imul(ge, De) | 0, l = l + Math.imul(ge, qe) | 0, l = l + Math.imul(me, De) | 0, y = y + Math.imul(me, qe) | 0, w = w + Math.imul(de, Le) | 0, l = l + Math.imul(de, Ue) | 0, l = l + Math.imul(pe, Le) | 0, y = y + Math.imul(pe, Ue) | 0, w = w + Math.imul(ue, $e) | 0, l = l + Math.imul(ue, ze) | 0, l = l + Math.imul(fe, $e) | 0, y = y + Math.imul(fe, ze) | 0;
      var Hn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Hn >>> 26) | 0, Hn &= 67108863, w = Math.imul(_e, Oe), l = Math.imul(_e, Be), l = l + Math.imul(Ae, Oe) | 0, y = Math.imul(Ae, Be), w = w + Math.imul(we, ke) | 0, l = l + Math.imul(we, Fe) | 0, l = l + Math.imul(be, ke) | 0, y = y + Math.imul(be, Fe) | 0, w = w + Math.imul(ye, De) | 0, l = l + Math.imul(ye, qe) | 0, l = l + Math.imul(ve, De) | 0, y = y + Math.imul(ve, qe) | 0, w = w + Math.imul(ge, Le) | 0, l = l + Math.imul(ge, Ue) | 0, l = l + Math.imul(me, Le) | 0, y = y + Math.imul(me, Ue) | 0, w = w + Math.imul(de, $e) | 0, l = l + Math.imul(de, ze) | 0, l = l + Math.imul(pe, $e) | 0, y = y + Math.imul(pe, ze) | 0;
      var Wn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Wn >>> 26) | 0, Wn &= 67108863, w = Math.imul(_e, ke), l = Math.imul(_e, Fe), l = l + Math.imul(Ae, ke) | 0, y = Math.imul(Ae, Fe), w = w + Math.imul(we, De) | 0, l = l + Math.imul(we, qe) | 0, l = l + Math.imul(be, De) | 0, y = y + Math.imul(be, qe) | 0, w = w + Math.imul(ye, Le) | 0, l = l + Math.imul(ye, Ue) | 0, l = l + Math.imul(ve, Le) | 0, y = y + Math.imul(ve, Ue) | 0, w = w + Math.imul(ge, $e) | 0, l = l + Math.imul(ge, ze) | 0, l = l + Math.imul(me, $e) | 0, y = y + Math.imul(me, ze) | 0;
      var Qn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Qn >>> 26) | 0, Qn &= 67108863, w = Math.imul(_e, De), l = Math.imul(_e, qe), l = l + Math.imul(Ae, De) | 0, y = Math.imul(Ae, qe), w = w + Math.imul(we, Le) | 0, l = l + Math.imul(we, Ue) | 0, l = l + Math.imul(be, Le) | 0, y = y + Math.imul(be, Ue) | 0, w = w + Math.imul(ye, $e) | 0, l = l + Math.imul(ye, ze) | 0, l = l + Math.imul(ve, $e) | 0, y = y + Math.imul(ve, ze) | 0;
      var Gn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Gn >>> 26) | 0, Gn &= 67108863, w = Math.imul(_e, Le), l = Math.imul(_e, Ue), l = l + Math.imul(Ae, Le) | 0, y = Math.imul(Ae, Ue), w = w + Math.imul(we, $e) | 0, l = l + Math.imul(we, ze) | 0, l = l + Math.imul(be, $e) | 0, y = y + Math.imul(be, ze) | 0;
      var Yn = (M + w | 0) + ((l & 8191) << 13) | 0;
      M = (y + (l >>> 13) | 0) + (Yn >>> 26) | 0, Yn &= 67108863, w = Math.imul(_e, $e), l = Math.imul(_e, ze), l = l + Math.imul(Ae, $e) | 0, y = Math.imul(Ae, ze);
      var Jn = (M + w | 0) + ((l & 8191) << 13) | 0;
      return M = (y + (l >>> 13) | 0) + (Jn >>> 26) | 0, Jn &= 67108863, S[0] = rr, S[1] = ir, S[2] = nr, S[3] = sr, S[4] = or, S[5] = ar, S[6] = Ln, S[7] = Un, S[8] = $n, S[9] = zn, S[10] = Kn, S[11] = jn, S[12] = Vn, S[13] = Hn, S[14] = Wn, S[15] = Qn, S[16] = Gn, S[17] = Yn, S[18] = Jn, M !== 0 && (S[19] = M, g.length++), g;
    };
    Math.imul || (R = x);
    function P(a, f, g) {
      g.negative = f.negative ^ a.negative, g.length = a.length + f.length;
      for (var v = 0, _ = 0, S = 0; S < g.length - 1; S++) {
        var M = _;
        _ = 0;
        for (var w = v & 67108863, l = Math.min(S, f.length - 1), y = Math.max(0, S - a.length + 1); y <= l; y++) {
          var Q = S - y, H = a.words[Q] | 0, p = f.words[y] | 0, O = H * p, T = O & 67108863;
          M = M + (O / 67108864 | 0) | 0, T = T + w | 0, w = T & 67108863, M = M + (T >>> 26) | 0, _ += M >>> 26, M &= 67108863;
        }
        g.words[S] = w, v = M, M = _;
      }
      return v !== 0 ? g.words[S] = v : g.length--, g._strip();
    }
    function C(a, f, g) {
      return P(a, f, g);
    }
    s.prototype.mulTo = function(a, f) {
      var g, v = this.length + a.length;
      return this.length === 10 && a.length === 10 ? g = R(this, a, f) : v < 63 ? g = x(this, a, f) : v < 1024 ? g = P(this, a, f) : g = C(this, a, f), g;
    }, s.prototype.mul = function(a) {
      var f = new s(null);
      return f.words = new Array(this.length + a.length), this.mulTo(a, f);
    }, s.prototype.mulf = function(a) {
      var f = new s(null);
      return f.words = new Array(this.length + a.length), C(this, a, f);
    }, s.prototype.imul = function(a) {
      return this.clone().mulTo(a, this);
    }, s.prototype.imuln = function(a) {
      var f = a < 0;
      f && (a = -a), i(typeof a == "number"), i(a < 67108864);
      for (var g = 0, v = 0; v < this.length; v++) {
        var _ = (this.words[v] | 0) * a, S = (_ & 67108863) + (g & 67108863);
        g >>= 26, g += _ / 67108864 | 0, g += S >>> 26, this.words[v] = S & 67108863;
      }
      return g !== 0 && (this.words[v] = g, this.length++), f ? this.ineg() : this;
    }, s.prototype.muln = function(a) {
      return this.clone().imuln(a);
    }, s.prototype.sqr = function() {
      return this.mul(this);
    }, s.prototype.isqr = function() {
      return this.imul(this.clone());
    }, s.prototype.pow = function(a) {
      var f = I(a);
      if (f.length === 0)
        return new s(1);
      for (var g = this, v = 0; v < f.length && f[v] === 0; v++, g = g.sqr())
        ;
      if (++v < f.length)
        for (var _ = g.sqr(); v < f.length; v++, _ = _.sqr())
          f[v] !== 0 && (g = g.mul(_));
      return g;
    }, s.prototype.iushln = function(a) {
      i(typeof a == "number" && a >= 0);
      var f = a % 26, g = (a - f) / 26, v = 67108863 >>> 26 - f << 26 - f, _;
      if (f !== 0) {
        var S = 0;
        for (_ = 0; _ < this.length; _++) {
          var M = this.words[_] & v, w = (this.words[_] | 0) - M << f;
          this.words[_] = w | S, S = M >>> 26 - f;
        }
        S && (this.words[_] = S, this.length++);
      }
      if (g !== 0) {
        for (_ = this.length - 1; _ >= 0; _--)
          this.words[_ + g] = this.words[_];
        for (_ = 0; _ < g; _++)
          this.words[_] = 0;
        this.length += g;
      }
      return this._strip();
    }, s.prototype.ishln = function(a) {
      return i(this.negative === 0), this.iushln(a);
    }, s.prototype.iushrn = function(a, f, g) {
      i(typeof a == "number" && a >= 0);
      var v;
      f ? v = (f - f % 26) / 26 : v = 0;
      var _ = a % 26, S = Math.min((a - _) / 26, this.length), M = 67108863 ^ 67108863 >>> _ << _, w = g;
      if (v -= S, v = Math.max(0, v), w) {
        for (var l = 0; l < S; l++)
          w.words[l] = this.words[l];
        w.length = S;
      }
      if (S !== 0)
        if (this.length > S)
          for (this.length -= S, l = 0; l < this.length; l++)
            this.words[l] = this.words[l + S];
        else
          this.words[0] = 0, this.length = 1;
      var y = 0;
      for (l = this.length - 1; l >= 0 && (y !== 0 || l >= v); l--) {
        var Q = this.words[l] | 0;
        this.words[l] = y << 26 - _ | Q >>> _, y = Q & M;
      }
      return w && y !== 0 && (w.words[w.length++] = y), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, s.prototype.ishrn = function(a, f, g) {
      return i(this.negative === 0), this.iushrn(a, f, g);
    }, s.prototype.shln = function(a) {
      return this.clone().ishln(a);
    }, s.prototype.ushln = function(a) {
      return this.clone().iushln(a);
    }, s.prototype.shrn = function(a) {
      return this.clone().ishrn(a);
    }, s.prototype.ushrn = function(a) {
      return this.clone().iushrn(a);
    }, s.prototype.testn = function(a) {
      i(typeof a == "number" && a >= 0);
      var f = a % 26, g = (a - f) / 26, v = 1 << f;
      if (this.length <= g)
        return !1;
      var _ = this.words[g];
      return !!(_ & v);
    }, s.prototype.imaskn = function(a) {
      i(typeof a == "number" && a >= 0);
      var f = a % 26, g = (a - f) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
        return this;
      if (f !== 0 && g++, this.length = Math.min(g, this.length), f !== 0) {
        var v = 67108863 ^ 67108863 >>> f << f;
        this.words[this.length - 1] &= v;
      }
      return this._strip();
    }, s.prototype.maskn = function(a) {
      return this.clone().imaskn(a);
    }, s.prototype.iaddn = function(a) {
      return i(typeof a == "number"), i(a < 67108864), a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= a ? (this.words[0] = a - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a);
    }, s.prototype._iaddn = function(a) {
      this.words[0] += a;
      for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
        this.words[f] -= 67108864, f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
      return this.length = Math.max(this.length, f + 1), this;
    }, s.prototype.isubn = function(a) {
      if (i(typeof a == "number"), i(a < 67108864), a < 0)
        return this.iaddn(-a);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(a), this.negative = 1, this;
      if (this.words[0] -= a, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var f = 0; f < this.length && this.words[f] < 0; f++)
          this.words[f] += 67108864, this.words[f + 1] -= 1;
      return this._strip();
    }, s.prototype.addn = function(a) {
      return this.clone().iaddn(a);
    }, s.prototype.subn = function(a) {
      return this.clone().isubn(a);
    }, s.prototype.iabs = function() {
      return this.negative = 0, this;
    }, s.prototype.abs = function() {
      return this.clone().iabs();
    }, s.prototype._ishlnsubmul = function(a, f, g) {
      var v = a.length + g, _;
      this._expand(v);
      var S, M = 0;
      for (_ = 0; _ < a.length; _++) {
        S = (this.words[_ + g] | 0) + M;
        var w = (a.words[_] | 0) * f;
        S -= w & 67108863, M = (S >> 26) - (w / 67108864 | 0), this.words[_ + g] = S & 67108863;
      }
      for (; _ < this.length - g; _++)
        S = (this.words[_ + g] | 0) + M, M = S >> 26, this.words[_ + g] = S & 67108863;
      if (M === 0)
        return this._strip();
      for (i(M === -1), M = 0, _ = 0; _ < this.length; _++)
        S = -(this.words[_] | 0) + M, M = S >> 26, this.words[_] = S & 67108863;
      return this.negative = 1, this._strip();
    }, s.prototype._wordDiv = function(a, f) {
      var g = this.length - a.length, v = this.clone(), _ = a, S = _.words[_.length - 1] | 0, M = this._countBits(S);
      g = 26 - M, g !== 0 && (_ = _.ushln(g), v.iushln(g), S = _.words[_.length - 1] | 0);
      var w = v.length - _.length, l;
      if (f !== "mod") {
        l = new s(null), l.length = w + 1, l.words = new Array(l.length);
        for (var y = 0; y < l.length; y++)
          l.words[y] = 0;
      }
      var Q = v.clone()._ishlnsubmul(_, 1, w);
      Q.negative === 0 && (v = Q, l && (l.words[w] = 1));
      for (var H = w - 1; H >= 0; H--) {
        var p = (v.words[_.length + H] | 0) * 67108864 + (v.words[_.length + H - 1] | 0);
        for (p = Math.min(p / S | 0, 67108863), v._ishlnsubmul(_, p, H); v.negative !== 0; )
          p--, v.negative = 0, v._ishlnsubmul(_, 1, H), v.isZero() || (v.negative ^= 1);
        l && (l.words[H] = p);
      }
      return l && l._strip(), v._strip(), f !== "div" && g !== 0 && v.iushrn(g), { div: l || null, mod: v };
    }, s.prototype.divmod = function(a, f, g) {
      if (i(!a.isZero()), this.isZero())
        return { div: new s(0), mod: new s(0) };
      var v, _, S;
      return this.negative !== 0 && a.negative === 0 ? (S = this.neg().divmod(a, f), f !== "mod" && (v = S.div.neg()), f !== "div" && (_ = S.mod.neg(), g && _.negative !== 0 && _.iadd(a)), { div: v, mod: _ }) : this.negative === 0 && a.negative !== 0 ? (S = this.divmod(a.neg(), f), f !== "mod" && (v = S.div.neg()), { div: v, mod: S.mod }) : this.negative & a.negative ? (S = this.neg().divmod(a.neg(), f), f !== "div" && (_ = S.mod.neg(), g && _.negative !== 0 && _.isub(a)), { div: S.div, mod: _ }) : a.length > this.length || this.cmp(a) < 0 ? { div: new s(0), mod: this } : a.length === 1 ? f === "div" ? { div: this.divn(a.words[0]), mod: null } : f === "mod" ? { div: null, mod: new s(this.modrn(a.words[0])) } : { div: this.divn(a.words[0]), mod: new s(this.modrn(a.words[0])) } : this._wordDiv(a, f);
    }, s.prototype.div = function(a) {
      return this.divmod(a, "div", !1).div;
    }, s.prototype.mod = function(a) {
      return this.divmod(a, "mod", !1).mod;
    }, s.prototype.umod = function(a) {
      return this.divmod(a, "mod", !0).mod;
    }, s.prototype.divRound = function(a) {
      var f = this.divmod(a);
      if (f.mod.isZero())
        return f.div;
      var g = f.div.negative !== 0 ? f.mod.isub(a) : f.mod, v = a.ushrn(1), _ = a.andln(1), S = g.cmp(v);
      return S < 0 || _ === 1 && S === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1);
    }, s.prototype.modrn = function(a) {
      var f = a < 0;
      f && (a = -a), i(a <= 67108863);
      for (var g = (1 << 26) % a, v = 0, _ = this.length - 1; _ >= 0; _--)
        v = (g * v + (this.words[_] | 0)) % a;
      return f ? -v : v;
    }, s.prototype.modn = function(a) {
      return this.modrn(a);
    }, s.prototype.idivn = function(a) {
      var f = a < 0;
      f && (a = -a), i(a <= 67108863);
      for (var g = 0, v = this.length - 1; v >= 0; v--) {
        var _ = (this.words[v] | 0) + g * 67108864;
        this.words[v] = _ / a | 0, g = _ % a;
      }
      return this._strip(), f ? this.ineg() : this;
    }, s.prototype.divn = function(a) {
      return this.clone().idivn(a);
    }, s.prototype.egcd = function(a) {
      i(a.negative === 0), i(!a.isZero());
      var f = this, g = a.clone();
      f.negative !== 0 ? f = f.umod(a) : f = f.clone();
      for (var v = new s(1), _ = new s(0), S = new s(0), M = new s(1), w = 0; f.isEven() && g.isEven(); )
        f.iushrn(1), g.iushrn(1), ++w;
      for (var l = g.clone(), y = f.clone(); !f.isZero(); ) {
        for (var Q = 0, H = 1; !(f.words[0] & H) && Q < 26; ++Q, H <<= 1)
          ;
        if (Q > 0)
          for (f.iushrn(Q); Q-- > 0; )
            (v.isOdd() || _.isOdd()) && (v.iadd(l), _.isub(y)), v.iushrn(1), _.iushrn(1);
        for (var p = 0, O = 1; !(g.words[0] & O) && p < 26; ++p, O <<= 1)
          ;
        if (p > 0)
          for (g.iushrn(p); p-- > 0; )
            (S.isOdd() || M.isOdd()) && (S.iadd(l), M.isub(y)), S.iushrn(1), M.iushrn(1);
        f.cmp(g) >= 0 ? (f.isub(g), v.isub(S), _.isub(M)) : (g.isub(f), S.isub(v), M.isub(_));
      }
      return { a: S, b: M, gcd: g.iushln(w) };
    }, s.prototype._invmp = function(a) {
      i(a.negative === 0), i(!a.isZero());
      var f = this, g = a.clone();
      f.negative !== 0 ? f = f.umod(a) : f = f.clone();
      for (var v = new s(1), _ = new s(0), S = g.clone(); f.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
        for (var M = 0, w = 1; !(f.words[0] & w) && M < 26; ++M, w <<= 1)
          ;
        if (M > 0)
          for (f.iushrn(M); M-- > 0; )
            v.isOdd() && v.iadd(S), v.iushrn(1);
        for (var l = 0, y = 1; !(g.words[0] & y) && l < 26; ++l, y <<= 1)
          ;
        if (l > 0)
          for (g.iushrn(l); l-- > 0; )
            _.isOdd() && _.iadd(S), _.iushrn(1);
        f.cmp(g) >= 0 ? (f.isub(g), v.isub(_)) : (g.isub(f), _.isub(v));
      }
      var Q;
      return f.cmpn(1) === 0 ? Q = v : Q = _, Q.cmpn(0) < 0 && Q.iadd(a), Q;
    }, s.prototype.gcd = function(a) {
      if (this.isZero())
        return a.abs();
      if (a.isZero())
        return this.abs();
      var f = this.clone(), g = a.clone();
      f.negative = 0, g.negative = 0;
      for (var v = 0; f.isEven() && g.isEven(); v++)
        f.iushrn(1), g.iushrn(1);
      do {
        for (; f.isEven(); )
          f.iushrn(1);
        for (; g.isEven(); )
          g.iushrn(1);
        var _ = f.cmp(g);
        if (_ < 0) {
          var S = f;
          f = g, g = S;
        } else if (_ === 0 || g.cmpn(1) === 0)
          break;
        f.isub(g);
      } while (!0);
      return g.iushln(v);
    }, s.prototype.invm = function(a) {
      return this.egcd(a).a.umod(a);
    }, s.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, s.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, s.prototype.andln = function(a) {
      return this.words[0] & a;
    }, s.prototype.bincn = function(a) {
      i(typeof a == "number");
      var f = a % 26, g = (a - f) / 26, v = 1 << f;
      if (this.length <= g)
        return this._expand(g + 1), this.words[g] |= v, this;
      for (var _ = v, S = g; _ !== 0 && S < this.length; S++) {
        var M = this.words[S] | 0;
        M += _, _ = M >>> 26, M &= 67108863, this.words[S] = M;
      }
      return _ !== 0 && (this.words[S] = _, this.length++), this;
    }, s.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, s.prototype.cmpn = function(a) {
      var f = a < 0;
      if (this.negative !== 0 && !f)
        return -1;
      if (this.negative === 0 && f)
        return 1;
      this._strip();
      var g;
      if (this.length > 1)
        g = 1;
      else {
        f && (a = -a), i(a <= 67108863, "Number is too big");
        var v = this.words[0] | 0;
        g = v === a ? 0 : v < a ? -1 : 1;
      }
      return this.negative !== 0 ? -g | 0 : g;
    }, s.prototype.cmp = function(a) {
      if (this.negative !== 0 && a.negative === 0)
        return -1;
      if (this.negative === 0 && a.negative !== 0)
        return 1;
      var f = this.ucmp(a);
      return this.negative !== 0 ? -f | 0 : f;
    }, s.prototype.ucmp = function(a) {
      if (this.length > a.length)
        return 1;
      if (this.length < a.length)
        return -1;
      for (var f = 0, g = this.length - 1; g >= 0; g--) {
        var v = this.words[g] | 0, _ = a.words[g] | 0;
        if (v !== _) {
          v < _ ? f = -1 : v > _ && (f = 1);
          break;
        }
      }
      return f;
    }, s.prototype.gtn = function(a) {
      return this.cmpn(a) === 1;
    }, s.prototype.gt = function(a) {
      return this.cmp(a) === 1;
    }, s.prototype.gten = function(a) {
      return this.cmpn(a) >= 0;
    }, s.prototype.gte = function(a) {
      return this.cmp(a) >= 0;
    }, s.prototype.ltn = function(a) {
      return this.cmpn(a) === -1;
    }, s.prototype.lt = function(a) {
      return this.cmp(a) === -1;
    }, s.prototype.lten = function(a) {
      return this.cmpn(a) <= 0;
    }, s.prototype.lte = function(a) {
      return this.cmp(a) <= 0;
    }, s.prototype.eqn = function(a) {
      return this.cmpn(a) === 0;
    }, s.prototype.eq = function(a) {
      return this.cmp(a) === 0;
    }, s.red = function(a) {
      return new Z(a);
    }, s.prototype.toRed = function(a) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), a.convertTo(this)._forceRed(a);
    }, s.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, s.prototype._forceRed = function(a) {
      return this.red = a, this;
    }, s.prototype.forceRed = function(a) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(a);
    }, s.prototype.redAdd = function(a) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, a);
    }, s.prototype.redIAdd = function(a) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a);
    }, s.prototype.redSub = function(a) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, a);
    }, s.prototype.redISub = function(a) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, a);
    }, s.prototype.redShl = function(a) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, a);
    }, s.prototype.redMul = function(a) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a);
    }, s.prototype.redIMul = function(a) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a);
    }, s.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, s.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, s.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, s.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, s.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, s.prototype.redPow = function(a) {
      return i(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a);
    };
    var k = { k256: null, p224: null, p192: null, p25519: null };
    function F(a, f) {
      this.name = a, this.p = new s(f, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    F.prototype._tmp = function() {
      var a = new s(null);
      return a.words = new Array(Math.ceil(this.n / 13)), a;
    }, F.prototype.ireduce = function(a) {
      var f = a, g;
      do
        this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), g = f.bitLength();
      while (g > this.n);
      var v = g < this.n ? -1 : f.ucmp(this.p);
      return v === 0 ? (f.words[0] = 0, f.length = 1) : v > 0 ? f.isub(this.p) : f.strip !== void 0 ? f.strip() : f._strip(), f;
    }, F.prototype.split = function(a, f) {
      a.iushrn(this.n, 0, f);
    }, F.prototype.imulK = function(a) {
      return a.imul(this.k);
    };
    function q() {
      F.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n(q, F), q.prototype.split = function(a, f) {
      for (var g = 4194303, v = Math.min(a.length, 9), _ = 0; _ < v; _++)
        f.words[_] = a.words[_];
      if (f.length = v, a.length <= 9) {
        a.words[0] = 0, a.length = 1;
        return;
      }
      var S = a.words[9];
      for (f.words[f.length++] = S & g, _ = 10; _ < a.length; _++) {
        var M = a.words[_] | 0;
        a.words[_ - 10] = (M & g) << 4 | S >>> 22, S = M;
      }
      S >>>= 22, a.words[_ - 10] = S, S === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9;
    }, q.prototype.imulK = function(a) {
      a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
      for (var f = 0, g = 0; g < a.length; g++) {
        var v = a.words[g] | 0;
        f += v * 977, a.words[g] = f & 67108863, f = v * 64 + (f / 67108864 | 0);
      }
      return a.words[a.length - 1] === 0 && (a.length--, a.words[a.length - 1] === 0 && a.length--), a;
    };
    function $() {
      F.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n($, F);
    function X() {
      F.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n(X, F);
    function se() {
      F.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n(se, F), se.prototype.imulK = function(a) {
      for (var f = 0, g = 0; g < a.length; g++) {
        var v = (a.words[g] | 0) * 19 + f, _ = v & 67108863;
        v >>>= 26, a.words[g] = _, f = v;
      }
      return f !== 0 && (a.words[a.length++] = f), a;
    }, s._prime = function(a) {
      if (k[a])
        return k[a];
      var f;
      if (a === "k256")
        f = new q();
      else if (a === "p224")
        f = new $();
      else if (a === "p192")
        f = new X();
      else if (a === "p25519")
        f = new se();
      else
        throw new Error("Unknown prime " + a);
      return k[a] = f, f;
    };
    function Z(a) {
      if (typeof a == "string") {
        var f = s._prime(a);
        this.m = f.p, this.prime = f;
      } else
        i(a.gtn(1), "modulus must be greater than 1"), this.m = a, this.prime = null;
    }
    Z.prototype._verify1 = function(a) {
      i(a.negative === 0, "red works only with positives"), i(a.red, "red works only with red numbers");
    }, Z.prototype._verify2 = function(a, f) {
      i((a.negative | f.negative) === 0, "red works only with positives"), i(a.red && a.red === f.red, "red works only with red numbers");
    }, Z.prototype.imod = function(a) {
      return this.prime ? this.prime.ireduce(a)._forceRed(this) : (d(a, a.umod(this.m)._forceRed(this)), a);
    }, Z.prototype.neg = function(a) {
      return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
    }, Z.prototype.add = function(a, f) {
      this._verify2(a, f);
      var g = a.add(f);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
    }, Z.prototype.iadd = function(a, f) {
      this._verify2(a, f);
      var g = a.iadd(f);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g;
    }, Z.prototype.sub = function(a, f) {
      this._verify2(a, f);
      var g = a.sub(f);
      return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
    }, Z.prototype.isub = function(a, f) {
      this._verify2(a, f);
      var g = a.isub(f);
      return g.cmpn(0) < 0 && g.iadd(this.m), g;
    }, Z.prototype.shl = function(a, f) {
      return this._verify1(a), this.imod(a.ushln(f));
    }, Z.prototype.imul = function(a, f) {
      return this._verify2(a, f), this.imod(a.imul(f));
    }, Z.prototype.mul = function(a, f) {
      return this._verify2(a, f), this.imod(a.mul(f));
    }, Z.prototype.isqr = function(a) {
      return this.imul(a, a.clone());
    }, Z.prototype.sqr = function(a) {
      return this.mul(a, a);
    }, Z.prototype.sqrt = function(a) {
      if (a.isZero())
        return a.clone();
      var f = this.m.andln(3);
      if (i(f % 2 === 1), f === 3) {
        var g = this.m.add(new s(1)).iushrn(2);
        return this.pow(a, g);
      }
      for (var v = this.m.subn(1), _ = 0; !v.isZero() && v.andln(1) === 0; )
        _++, v.iushrn(1);
      i(!v.isZero());
      var S = new s(1).toRed(this), M = S.redNeg(), w = this.m.subn(1).iushrn(1), l = this.m.bitLength();
      for (l = new s(2 * l * l).toRed(this); this.pow(l, w).cmp(M) !== 0; )
        l.redIAdd(M);
      for (var y = this.pow(l, v), Q = this.pow(a, v.addn(1).iushrn(1)), H = this.pow(a, v), p = _; H.cmp(S) !== 0; ) {
        for (var O = H, T = 0; O.cmp(S) !== 0; T++)
          O = O.redSqr();
        i(T < p);
        var B = this.pow(y, new s(1).iushln(p - T - 1));
        Q = Q.redMul(B), y = B.redSqr(), H = H.redMul(y), p = T;
      }
      return Q;
    }, Z.prototype.invm = function(a) {
      var f = a._invmp(this.m);
      return f.negative !== 0 ? (f.negative = 0, this.imod(f).redNeg()) : this.imod(f);
    }, Z.prototype.pow = function(a, f) {
      if (f.isZero())
        return new s(1).toRed(this);
      if (f.cmpn(1) === 0)
        return a.clone();
      var g = 4, v = new Array(1 << g);
      v[0] = new s(1).toRed(this), v[1] = a;
      for (var _ = 2; _ < v.length; _++)
        v[_] = this.mul(v[_ - 1], a);
      var S = v[0], M = 0, w = 0, l = f.bitLength() % 26;
      for (l === 0 && (l = 26), _ = f.length - 1; _ >= 0; _--) {
        for (var y = f.words[_], Q = l - 1; Q >= 0; Q--) {
          var H = y >> Q & 1;
          if (S !== v[0] && (S = this.sqr(S)), H === 0 && M === 0) {
            w = 0;
            continue;
          }
          M <<= 1, M |= H, w++, !(w !== g && (_ !== 0 || Q !== 0)) && (S = this.mul(S, v[M]), w = 0, M = 0);
        }
        l = 26;
      }
      return S;
    }, Z.prototype.convertTo = function(a) {
      var f = a.umod(this.m);
      return f === a ? f.clone() : f;
    }, Z.prototype.convertFrom = function(a) {
      var f = a.clone();
      return f.red = null, f;
    }, s.mont = function(a) {
      return new oe(a);
    };
    function oe(a) {
      Z.call(this, a), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n(oe, Z), oe.prototype.convertTo = function(a) {
      return this.imod(a.ushln(this.shift));
    }, oe.prototype.convertFrom = function(a) {
      var f = this.imod(a.mul(this.rinv));
      return f.red = null, f;
    }, oe.prototype.imul = function(a, f) {
      if (a.isZero() || f.isZero())
        return a.words[0] = 0, a.length = 1, a;
      var g = a.imul(f), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(v).iushrn(this.shift), S = _;
      return _.cmp(this.m) >= 0 ? S = _.isub(this.m) : _.cmpn(0) < 0 && (S = _.iadd(this.m)), S._forceRed(this);
    }, oe.prototype.mul = function(a, f) {
      if (a.isZero() || f.isZero())
        return new s(0)._forceRed(this);
      var g = a.mul(f), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(v).iushrn(this.shift), S = _;
      return _.cmp(this.m) >= 0 ? S = _.isub(this.m) : _.cmpn(0) < 0 && (S = _.iadd(this.m)), S._forceRed(this);
    }, oe.prototype.invm = function(a) {
      var f = this.imod(a._invmp(this.m).mul(this.r2));
      return f._forceRed(this);
    };
  })(t, Nl);
})(Pl);
var J = Pl.exports;
const Tl = "bignumber/5.7.0";
var wn = J.BN;
const Gt = new Je(Tl), hs = {}, Fa = 9007199254740991;
function Mg(t) {
  return t != null && (nt.isBigNumber(t) || typeof t == "number" && t % 1 === 0 || typeof t == "string" && !!t.match(/^-?[0-9]+$/) || gt(t) || typeof t == "bigint" || vi(t));
}
let Da = !1, nt = class xt {
  constructor(e, r) {
    e !== hs && Gt.throwError("cannot call constructor directly; use BigNumber.from", Je.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return st(re(this).fromTwos(e));
  }
  toTwos(e) {
    return st(re(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? xt.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return st(re(this).add(re(e)));
  }
  sub(e) {
    return st(re(this).sub(re(e)));
  }
  div(e) {
    return xt.from(e).isZero() && wt("division-by-zero", "div"), st(re(this).div(re(e)));
  }
  mul(e) {
    return st(re(this).mul(re(e)));
  }
  mod(e) {
    const r = re(e);
    return r.isNeg() && wt("division-by-zero", "mod"), st(re(this).umod(r));
  }
  pow(e) {
    const r = re(e);
    return r.isNeg() && wt("negative-power", "pow"), st(re(this).pow(r));
  }
  and(e) {
    const r = re(e);
    return (this.isNegative() || r.isNeg()) && wt("unbound-bitwise-result", "and"), st(re(this).and(r));
  }
  or(e) {
    const r = re(e);
    return (this.isNegative() || r.isNeg()) && wt("unbound-bitwise-result", "or"), st(re(this).or(r));
  }
  xor(e) {
    const r = re(e);
    return (this.isNegative() || r.isNeg()) && wt("unbound-bitwise-result", "xor"), st(re(this).xor(r));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && wt("negative-width", "mask"), st(re(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && wt("negative-width", "shl"), st(re(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && wt("negative-width", "shr"), st(re(this).shrn(e));
  }
  eq(e) {
    return re(this).eq(re(e));
  }
  lt(e) {
    return re(this).lt(re(e));
  }
  lte(e) {
    return re(this).lte(re(e));
  }
  gt(e) {
    return re(this).gt(re(e));
  }
  gte(e) {
    return re(this).gte(re(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return re(this).isZero();
  }
  toNumber() {
    try {
      return re(this).toNumber();
    } catch {
      wt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Gt.throwError("this platform does not support BigInt", Je.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Da || (Da = !0, Gt.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Gt.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", Je.errors.UNEXPECTED_ARGUMENT, {}) : Gt.throwError("BigNumber.toString does not accept parameters", Je.errors.UNEXPECTED_ARGUMENT, {})), re(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof xt)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new xt(hs, Ui(e)) : e.match(/^-?[0-9]+$/) ? new xt(hs, Ui(new wn(e))) : Gt.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && wt("underflow", "BigNumber.from", e), (e >= Fa || e <= -Fa) && wt("overflow", "BigNumber.from", e), xt.from(String(e));
    const r = e;
    if (typeof r == "bigint")
      return xt.from(r.toString());
    if (vi(r))
      return xt.from(at(r));
    if (r)
      if (r.toHexString) {
        const i = r.toHexString();
        if (typeof i == "string")
          return xt.from(i);
      } else {
        let i = r._hex;
        if (i == null && r.type === "BigNumber" && (i = r.hex), typeof i == "string" && (gt(i) || i[0] === "-" && gt(i.substring(1))))
          return xt.from(i);
      }
    return Gt.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
};
function Ui(t) {
  if (typeof t != "string")
    return Ui(t.toString(16));
  if (t[0] === "-")
    return t = t.substring(1), t[0] === "-" && Gt.throwArgumentError("invalid hex", "value", t), t = Ui(t), t === "0x00" ? t : "-" + t;
  if (t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")
    return "0x00";
  for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && t.substring(0, 4) === "0x00"; )
    t = "0x" + t.substring(4);
  return t;
}
function st(t) {
  return nt.from(Ui(t));
}
function re(t) {
  const e = nt.from(t).toHexString();
  return e[0] === "-" ? new wn("-" + e.substring(3), 16) : new wn(e.substring(2), 16);
}
function wt(t, e, r) {
  const i = { fault: t, operation: e };
  return r != null && (i.value = r), Gt.throwError(t, Je.errors.NUMERIC_FAULT, i);
}
function Ng(t) {
  return new wn(t, 36).toString(16);
}
const rt = new Je(Tl), Bi = {}, Ol = nt.from(0), Bl = nt.from(-1);
function kl(t, e, r, i) {
  const n = { fault: e, operation: r };
  return i !== void 0 && (n.value = i), rt.throwError(t, Je.errors.NUMERIC_FAULT, n);
}
let ki = "0";
for (; ki.length < 256; )
  ki += ki;
function Co(t) {
  if (typeof t != "number")
    try {
      t = nt.from(t).toNumber();
    } catch {
    }
  return typeof t == "number" && t >= 0 && t <= 256 && !(t % 1) ? "1" + ki.substring(0, t) : rt.throwArgumentError("invalid decimal size", "decimals", t);
}
function ls(t, e) {
  e == null && (e = 0);
  const r = Co(e);
  t = nt.from(t);
  const i = t.lt(Ol);
  i && (t = t.mul(Bl));
  let n = t.mod(r).toString();
  for (; n.length < r.length - 1; )
    n = "0" + n;
  n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const s = t.div(r).toString();
  return r.length === 1 ? t = s : t = s + "." + n, i && (t = "-" + t), t;
}
function Ht(t, e) {
  e == null && (e = 0);
  const r = Co(e);
  (typeof t != "string" || !t.match(/^-?[0-9.]+$/)) && rt.throwArgumentError("invalid decimal value", "value", t);
  const i = t.substring(0, 1) === "-";
  i && (t = t.substring(1)), t === "." && rt.throwArgumentError("missing value", "value", t);
  const n = t.split(".");
  n.length > 2 && rt.throwArgumentError("too many decimal points", "value", t);
  let s = n[0], o = n[1];
  for (s || (s = "0"), o || (o = "0"); o[o.length - 1] === "0"; )
    o = o.substring(0, o.length - 1);
  for (o.length > r.length - 1 && kl("fractional component exceeds decimals", "underflow", "parseFixed"), o === "" && (o = "0"); o.length < r.length - 1; )
    o += "0";
  const c = nt.from(s), h = nt.from(o);
  let u = c.mul(r).add(h);
  return i && (u = u.mul(Bl)), u;
}
let us = class $s {
  constructor(e, r, i, n) {
    e !== Bi && rt.throwError("cannot use FixedFormat constructor; use FixedFormat.from", Je.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r, this.width = i, this.decimals = n, this.name = (r ? "" : "u") + "fixed" + String(i) + "x" + String(n), this._multiplier = Co(n), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof $s)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let r = !0, i = 128, n = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          r = !1;
        else {
          const s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          s || rt.throwArgumentError("invalid fixed format", "format", e), r = s[1] !== "u", i = parseInt(s[2]), n = parseInt(s[3]);
        }
    } else if (e) {
      const s = (o, c, h) => e[o] == null ? h : (typeof e[o] !== c && rt.throwArgumentError("invalid fixed format (" + o + " not " + c + ")", "format." + o, e[o]), e[o]);
      r = s("signed", "boolean", r), i = s("width", "number", i), n = s("decimals", "number", n);
    }
    return i % 8 && rt.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n > 80 && rt.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new $s(Bi, r, i, n);
  }
}, Fl = class et {
  constructor(e, r, i, n) {
    e !== Bi && rt.throwError("cannot use FixedNumber constructor; use FixedNumber.from", Je.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n, this._hex = r, this._value = i, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && rt.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const r = Ht(this._value, this.format.decimals), i = Ht(e._value, e.format.decimals);
    return et.fromValue(r.add(i), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const r = Ht(this._value, this.format.decimals), i = Ht(e._value, e.format.decimals);
    return et.fromValue(r.sub(i), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const r = Ht(this._value, this.format.decimals), i = Ht(e._value, e.format.decimals);
    return et.fromValue(r.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const r = Ht(this._value, this.format.decimals), i = Ht(e._value, e.format.decimals);
    return et.fromValue(r.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = et.from(e[0], this.format);
    const i = !e[1].match(/^(0*)$/);
    return this.isNegative() && i && (r = r.subUnsafe(qa.toFormat(r.format))), r;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let r = et.from(e[0], this.format);
    const i = !e[1].match(/^(0*)$/);
    return !this.isNegative() && i && (r = r.addUnsafe(qa.toFormat(r.format))), r;
  }
  round(e) {
    e == null && (e = 0);
    const r = this.toString().split(".");
    if (r.length === 1 && r.push("0"), (e < 0 || e > 80 || e % 1) && rt.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e)
      return this;
    const i = et.from("1" + ki.substring(0, e), this.format), n = xg.toFormat(this.format);
    return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(e) {
    if (e == null)
      return this._hex;
    e % 8 && rt.throwArgumentError("invalid byte width", "width", e);
    const r = nt.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return Ut(r, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return et.fromString(this._value, e);
  }
  static fromValue(e, r, i) {
    return i == null && r != null && !Mg(r) && (i = r, r = null), r == null && (r = 0), i == null && (i = "fixed"), et.fromString(ls(e, r), us.from(i));
  }
  static fromString(e, r) {
    r == null && (r = "fixed");
    const i = us.from(r), n = Ht(e, i.decimals);
    !i.signed && n.lt(Ol) && kl("unsigned value cannot be negative", "overflow", "value", e);
    let s = null;
    i.signed ? s = n.toTwos(i.width).toHexString() : (s = n.toHexString(), s = Ut(s, i.width / 8));
    const o = ls(n, i.decimals);
    return new et(Bi, s, o, i);
  }
  static fromBytes(e, r) {
    r == null && (r = "fixed");
    const i = us.from(r);
    if (Ke(e).length > i.width / 8)
      throw new Error("overflow");
    let n = nt.from(e);
    i.signed && (n = n.fromTwos(i.width));
    const s = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), o = ls(n, i.decimals);
    return new et(Bi, s, o, i);
  }
  static from(e, r) {
    if (typeof e == "string")
      return et.fromString(e, r);
    if (vi(e))
      return et.fromBytes(e, r);
    try {
      return et.fromValue(e, 0, r);
    } catch (i) {
      if (i.code !== Je.errors.INVALID_ARGUMENT)
        throw i;
    }
    return rt.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
};
const qa = Fl.from(1), xg = Fl.from("0.5"), Cg = "strings/5.7.0", Rg = new Je(Cg);
var bn;
(function(t) {
  t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD";
})(bn || (bn = {}));
var La;
(function(t) {
  t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation";
})(La || (La = {}));
function fs(t, e = bn.current) {
  e != bn.current && (Rg.checkNormalize(), t = t.normalize(e));
  let r = [];
  for (let i = 0; i < t.length; i++) {
    const n = t.charCodeAt(i);
    if (n < 128)
      r.push(n);
    else if (n < 2048)
      r.push(n >> 6 | 192), r.push(n & 63 | 128);
    else if ((n & 64512) == 55296) {
      i++;
      const s = t.charCodeAt(i);
      if (i >= t.length || (s & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const o = 65536 + ((n & 1023) << 10) + (s & 1023);
      r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(o & 63 | 128);
    } else
      r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(n & 63 | 128);
  }
  return Ke(r);
}
function Pg(t) {
  if (t.length % 4 !== 0)
    throw new Error("bad data");
  let e = [];
  for (let r = 0; r < t.length; r += 4)
    e.push(parseInt(t.substring(r, r + 4), 16));
  return e;
}
function ds(t, e) {
  e || (e = function(n) {
    return [parseInt(n, 16)];
  });
  let r = 0, i = {};
  return t.split(",").forEach((n) => {
    let s = n.split(":");
    r += parseInt(s[0], 16), i[r] = e(s[1]);
  }), i;
}
function Ua(t) {
  let e = 0;
  return t.split(",").map((r) => {
    let i = r.split("-");
    i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
    let n = e + parseInt(i[0], 16);
    return e = parseInt(i[1], 16), { l: n, h: e };
  });
}
Ua("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t) => parseInt(t, 16)), ds("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), ds("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), ds("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Pg), Ua("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function Tg(t) {
  t = atob(t);
  const e = [];
  for (let r = 0; r < t.length; r++)
    e.push(t.charCodeAt(r));
  return Ke(e);
}
function Dl(t, e) {
  e == null && (e = 1);
  const r = [], i = r.forEach, n = function(s, o) {
    i.call(s, function(c) {
      o > 0 && Array.isArray(c) ? n(c, o - 1) : r.push(c);
    });
  };
  return n(t, e), r;
}
function Og(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    e[i[0]] = i[1];
  }
  return e;
}
function Bg(t) {
  let e = 0;
  function r() {
    return t[e++] << 8 | t[e++];
  }
  let i = r(), n = 1, s = [0, 1];
  for (let k = 1; k < i; k++)
    s.push(n += r());
  let o = r(), c = e;
  e += o;
  let h = 0, u = 0;
  function d() {
    return h == 0 && (u = u << 8 | t[e++], h = 8), u >> --h & 1;
  }
  const m = 31, b = Math.pow(2, m), A = b >>> 1, E = A >> 1, N = b - 1;
  let I = 0;
  for (let k = 0; k < m; k++)
    I = I << 1 | d();
  let x = [], R = 0, P = b;
  for (; ; ) {
    let k = Math.floor(((I - R + 1) * n - 1) / P), F = 0, q = i;
    for (; q - F > 1; ) {
      let se = F + q >>> 1;
      k < s[se] ? q = se : F = se;
    }
    if (F == 0)
      break;
    x.push(F);
    let $ = R + Math.floor(P * s[F] / n), X = R + Math.floor(P * s[F + 1] / n) - 1;
    for (; !(($ ^ X) & A); )
      I = I << 1 & N | d(), $ = $ << 1 & N, X = X << 1 & N | 1;
    for (; $ & ~X & E; )
      I = I & A | I << 1 & N >>> 1 | d(), $ = $ << 1 ^ A, X = (X ^ A) << 1 | A | 1;
    R = $, P = 1 + X - $;
  }
  let C = i - 4;
  return x.map((k) => {
    switch (k - C) {
      case 3:
        return C + 65792 + (t[c++] << 16 | t[c++] << 8 | t[c++]);
      case 2:
        return C + 256 + (t[c++] << 8 | t[c++]);
      case 1:
        return C + t[c++];
      default:
        return k - 1;
    }
  });
}
function kg(t) {
  let e = 0;
  return () => t[e++];
}
function Fg(t) {
  return kg(Bg(t));
}
function Dg(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function qg(t, e) {
  let r = Array(t);
  for (let i = 0; i < t; i++)
    r[i] = 1 + e();
  return r;
}
function $a(t, e) {
  let r = Array(t);
  for (let i = 0, n = -1; i < t; i++)
    r[i] = n += 1 + e();
  return r;
}
function Lg(t, e) {
  let r = Array(t);
  for (let i = 0, n = 0; i < t; i++)
    r[i] = n += Dg(e());
  return r;
}
function _n(t, e) {
  let r = $a(t(), t), i = t(), n = $a(i, t), s = qg(i, t);
  for (let o = 0; o < i; o++)
    for (let c = 0; c < s[o]; c++)
      r.push(n[o] + c);
  return e ? r.map((o) => e[o]) : r;
}
function Ug(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(zg(r, t));
  }
  for (; ; ) {
    let r = t() - 1;
    if (r < 0)
      break;
    e.push(Kg(r, t));
  }
  return Og(Dl(e));
}
function $g(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0)
      break;
    e.push(r);
  }
  return e;
}
function ql(t, e, r) {
  let i = Array(t).fill(void 0).map(() => []);
  for (let n = 0; n < e; n++)
    Lg(t, r).forEach((s, o) => i[o].push(s));
  return i;
}
function zg(t, e) {
  let r = 1 + e(), i = e(), n = $g(e), s = ql(n.length, 1 + t, e);
  return Dl(s.map((o, c) => {
    const h = o[0], u = o.slice(1);
    return Array(n[c]).fill(void 0).map((d, m) => {
      let b = m * i;
      return [h + m * r, u.map((A) => A + b)];
    });
  }));
}
function Kg(t, e) {
  let r = 1 + e();
  return ql(r, 1 + t, e).map((i) => [i[0], i.slice(1)]);
}
function jg(t) {
  let e = _n(t).sort((i, n) => i - n);
  return r();
  function r() {
    let i = [];
    for (; ; ) {
      let u = _n(t, e);
      if (u.length == 0)
        break;
      i.push({ set: new Set(u), node: r() });
    }
    i.sort((u, d) => d.set.size - u.set.size);
    let n = t(), s = n % 3;
    n = n / 3 | 0;
    let o = !!(n & 1);
    n >>= 1;
    let c = n == 1, h = n == 2;
    return { branches: i, valid: s, fe0f: o, save: c, check: h };
  }
}
function Vg() {
  return Fg(Tg("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Zi = Vg();
new Set(_n(Zi)), new Set(_n(Zi)), Ug(Zi), jg(Zi);
const Hg = new Uint8Array(32);
Hg.fill(0);
const Wg = `Ethereum Signed Message:
`;
function Ll(t) {
  return typeof t == "string" && (t = fs(t)), xo(bg([fs(Wg), fs(String(t.length)), t]));
}
const Qg = "address/5.7.0", Ci = new Je(Qg);
function za(t) {
  gt(t, 20) || Ci.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
  const e = t.substring(2).split(""), r = new Uint8Array(40);
  for (let n = 0; n < 40; n++)
    r[n] = e[n].charCodeAt(0);
  const i = Ke(xo(r));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (i[n >> 1] & 15) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
  return "0x" + e.join("");
}
const Gg = 9007199254740991;
function Yg(t) {
  return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
}
const Ro = {};
for (let t = 0; t < 10; t++)
  Ro[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  Ro[String.fromCharCode(65 + t)] = String(10 + t);
const Ka = Math.floor(Yg(Gg));
function Jg(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((i) => Ro[i]).join("");
  for (; e.length >= Ka; ) {
    let i = e.substring(0, Ka);
    e = parseInt(i, 10) % 97 + e.substring(i.length);
  }
  let r = String(98 - parseInt(e, 10) % 97);
  for (; r.length < 2; )
    r = "0" + r;
  return r;
}
function Xg(t) {
  let e = null;
  if (typeof t != "string" && Ci.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/))
    t.substring(0, 2) !== "0x" && (t = "0x" + t), e = za(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && Ci.throwArgumentError("bad address checksum", "address", t);
  else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (t.substring(2, 4) !== Jg(t) && Ci.throwArgumentError("bad icap checksum", "address", t), e = Ng(t.substring(4)); e.length < 40; )
      e = "0" + e;
    e = za("0x" + e);
  } else
    Ci.throwArgumentError("invalid address", "address", t);
  return e;
}
function Ei(t, e, r) {
  Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
}
const Zg = new Uint8Array(32);
Zg.fill(0), nt.from(-1);
const e1 = nt.from(0), t1 = nt.from(1);
nt.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), Ut(t1.toHexString(), 32), Ut(e1.toHexString(), 32);
var kt = {}, ne = {}, Wi = Ul;
function Ul(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
Ul.equal = function(t, e, r) {
  if (t != e)
    throw new Error(r || "Assertion failed: " + t + " != " + e);
};
var zs = { exports: {} };
typeof Object.create == "function" ? zs.exports = function(t, e) {
  e && (t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
} : zs.exports = function(t, e) {
  if (e) {
    t.super_ = e;
    var r = function() {
    };
    r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
  }
};
var r1 = Wi, i1 = zs.exports;
ne.inherits = i1;
function n1(t, e) {
  return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320;
}
function s1(t, e) {
  if (Array.isArray(t))
    return t.slice();
  if (!t)
    return [];
  var r = [];
  if (typeof t == "string")
    if (e) {
      if (e === "hex")
        for (t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t), n = 0; n < t.length; n += 2)
          r.push(parseInt(t[n] + t[n + 1], 16));
    } else
      for (var i = 0, n = 0; n < t.length; n++) {
        var s = t.charCodeAt(n);
        s < 128 ? r[i++] = s : s < 2048 ? (r[i++] = s >> 6 | 192, r[i++] = s & 63 | 128) : n1(t, n) ? (s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++n) & 1023), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128, r[i++] = s >> 6 & 63 | 128, r[i++] = s & 63 | 128) : (r[i++] = s >> 12 | 224, r[i++] = s >> 6 & 63 | 128, r[i++] = s & 63 | 128);
      }
  else
    for (n = 0; n < t.length; n++)
      r[n] = t[n] | 0;
  return r;
}
ne.toArray = s1;
function o1(t) {
  for (var e = "", r = 0; r < t.length; r++)
    e += zl(t[r].toString(16));
  return e;
}
ne.toHex = o1;
function $l(t) {
  var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
  return e >>> 0;
}
ne.htonl = $l;
function a1(t, e) {
  for (var r = "", i = 0; i < t.length; i++) {
    var n = t[i];
    e === "little" && (n = $l(n)), r += Kl(n.toString(16));
  }
  return r;
}
ne.toHex32 = a1;
function zl(t) {
  return t.length === 1 ? "0" + t : t;
}
ne.zero2 = zl;
function Kl(t) {
  return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
}
ne.zero8 = Kl;
function c1(t, e, r, i) {
  var n = r - e;
  r1(n % 4 === 0);
  for (var s = new Array(n / 4), o = 0, c = e; o < s.length; o++, c += 4) {
    var h;
    i === "big" ? h = t[c] << 24 | t[c + 1] << 16 | t[c + 2] << 8 | t[c + 3] : h = t[c + 3] << 24 | t[c + 2] << 16 | t[c + 1] << 8 | t[c], s[o] = h >>> 0;
  }
  return s;
}
ne.join32 = c1;
function h1(t, e) {
  for (var r = new Array(t.length * 4), i = 0, n = 0; i < t.length; i++, n += 4) {
    var s = t[i];
    e === "big" ? (r[n] = s >>> 24, r[n + 1] = s >>> 16 & 255, r[n + 2] = s >>> 8 & 255, r[n + 3] = s & 255) : (r[n + 3] = s >>> 24, r[n + 2] = s >>> 16 & 255, r[n + 1] = s >>> 8 & 255, r[n] = s & 255);
  }
  return r;
}
ne.split32 = h1;
function l1(t, e) {
  return t >>> e | t << 32 - e;
}
ne.rotr32 = l1;
function u1(t, e) {
  return t << e | t >>> 32 - e;
}
ne.rotl32 = u1;
function f1(t, e) {
  return t + e >>> 0;
}
ne.sum32 = f1;
function d1(t, e, r) {
  return t + e + r >>> 0;
}
ne.sum32_3 = d1;
function p1(t, e, r, i) {
  return t + e + r + i >>> 0;
}
ne.sum32_4 = p1;
function g1(t, e, r, i, n) {
  return t + e + r + i + n >>> 0;
}
ne.sum32_5 = g1;
function m1(t, e, r, i) {
  var n = t[e], s = t[e + 1], o = i + s >>> 0, c = (o < i ? 1 : 0) + r + n;
  t[e] = c >>> 0, t[e + 1] = o;
}
ne.sum64 = m1;
function y1(t, e, r, i) {
  var n = e + i >>> 0, s = (n < e ? 1 : 0) + t + r;
  return s >>> 0;
}
ne.sum64_hi = y1;
function v1(t, e, r, i) {
  var n = e + i;
  return n >>> 0;
}
ne.sum64_lo = v1;
function w1(t, e, r, i, n, s, o, c) {
  var h = 0, u = e;
  u = u + i >>> 0, h += u < e ? 1 : 0, u = u + s >>> 0, h += u < s ? 1 : 0, u = u + c >>> 0, h += u < c ? 1 : 0;
  var d = t + r + n + o + h;
  return d >>> 0;
}
ne.sum64_4_hi = w1;
function b1(t, e, r, i, n, s, o, c) {
  var h = e + i + s + c;
  return h >>> 0;
}
ne.sum64_4_lo = b1;
function _1(t, e, r, i, n, s, o, c, h, u) {
  var d = 0, m = e;
  m = m + i >>> 0, d += m < e ? 1 : 0, m = m + s >>> 0, d += m < s ? 1 : 0, m = m + c >>> 0, d += m < c ? 1 : 0, m = m + u >>> 0, d += m < u ? 1 : 0;
  var b = t + r + n + o + h + d;
  return b >>> 0;
}
ne.sum64_5_hi = _1;
function A1(t, e, r, i, n, s, o, c, h, u) {
  var d = e + i + s + c + u;
  return d >>> 0;
}
ne.sum64_5_lo = A1;
function E1(t, e, r) {
  var i = e << 32 - r | t >>> r;
  return i >>> 0;
}
ne.rotr64_hi = E1;
function S1(t, e, r) {
  var i = t << 32 - r | e >>> r;
  return i >>> 0;
}
ne.rotr64_lo = S1;
function I1(t, e, r) {
  return t >>> r;
}
ne.shr64_hi = I1;
function M1(t, e, r) {
  var i = t << 32 - r | e >>> r;
  return i >>> 0;
}
ne.shr64_lo = M1;
var wi = {}, ja = ne, N1 = Wi;
function en() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
wi.BlockHash = en, en.prototype.update = function(t, e) {
  if (t = ja.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var r = t.length % this._delta8;
    this.pending = t.slice(t.length - r, t.length), this.pending.length === 0 && (this.pending = null), t = ja.join32(t, 0, t.length - r, this.endian);
    for (var i = 0; i < t.length; i += this._delta32)
      this._update(t, i, i + this._delta32);
  }
  return this;
}, en.prototype.digest = function(t) {
  return this.update(this._pad()), N1(this.pending === null), this._digest(t);
}, en.prototype._pad = function() {
  var t = this.pendingTotal, e = this._delta8, r = e - (t + this.padLength) % e, i = new Array(r + this.padLength);
  i[0] = 128;
  for (var n = 1; n < r; n++)
    i[n] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var s = 8; s < this.padLength; s++)
      i[n++] = 0;
    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = t & 255;
  } else
    for (i[n++] = t & 255, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, s = 8; s < this.padLength; s++)
      i[n++] = 0;
  return i;
};
var Yr = {}, Vt = {}, x1 = ne, $t = x1.rotr32;
function C1(t, e, r, i) {
  if (t === 0)
    return jl(e, r, i);
  if (t === 1 || t === 3)
    return Hl(e, r, i);
  if (t === 2)
    return Vl(e, r, i);
}
Vt.ft_1 = C1;
function jl(t, e, r) {
  return t & e ^ ~t & r;
}
Vt.ch32 = jl;
function Vl(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
Vt.maj32 = Vl;
function Hl(t, e, r) {
  return t ^ e ^ r;
}
Vt.p32 = Hl;
function R1(t) {
  return $t(t, 2) ^ $t(t, 13) ^ $t(t, 22);
}
Vt.s0_256 = R1;
function P1(t) {
  return $t(t, 6) ^ $t(t, 11) ^ $t(t, 25);
}
Vt.s1_256 = P1;
function T1(t) {
  return $t(t, 7) ^ $t(t, 18) ^ t >>> 3;
}
Vt.g0_256 = T1;
function O1(t) {
  return $t(t, 17) ^ $t(t, 19) ^ t >>> 10;
}
Vt.g1_256 = O1;
var li = ne, B1 = wi, k1 = Vt, ps = li.rotl32, Si = li.sum32, F1 = li.sum32_5, D1 = k1.ft_1, Wl = B1.BlockHash, q1 = [1518500249, 1859775393, 2400959708, 3395469782];
function qt() {
  if (!(this instanceof qt))
    return new qt();
  Wl.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
li.inherits(qt, Wl);
var L1 = qt;
qt.blockSize = 512, qt.outSize = 160, qt.hmacStrength = 80, qt.padLength = 64, qt.prototype._update = function(t, e) {
  for (var r = this.W, i = 0; i < 16; i++)
    r[i] = t[e + i];
  for (; i < r.length; i++)
    r[i] = ps(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
  var n = this.h[0], s = this.h[1], o = this.h[2], c = this.h[3], h = this.h[4];
  for (i = 0; i < r.length; i++) {
    var u = ~~(i / 20), d = F1(ps(n, 5), D1(u, s, o, c), h, r[i], q1[u]);
    h = c, c = o, o = ps(s, 30), s = n, n = d;
  }
  this.h[0] = Si(this.h[0], n), this.h[1] = Si(this.h[1], s), this.h[2] = Si(this.h[2], o), this.h[3] = Si(this.h[3], c), this.h[4] = Si(this.h[4], h);
}, qt.prototype._digest = function(t) {
  return t === "hex" ? li.toHex32(this.h, "big") : li.split32(this.h, "big");
};
var ui = ne, U1 = wi, bi = Vt, $1 = Wi, Mt = ui.sum32, z1 = ui.sum32_4, K1 = ui.sum32_5, j1 = bi.ch32, V1 = bi.maj32, H1 = bi.s0_256, W1 = bi.s1_256, Q1 = bi.g0_256, G1 = bi.g1_256, Ql = U1.BlockHash, Y1 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function Lt() {
  if (!(this instanceof Lt))
    return new Lt();
  Ql.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = Y1, this.W = new Array(64);
}
ui.inherits(Lt, Ql);
var Gl = Lt;
Lt.blockSize = 512, Lt.outSize = 256, Lt.hmacStrength = 192, Lt.padLength = 64, Lt.prototype._update = function(t, e) {
  for (var r = this.W, i = 0; i < 16; i++)
    r[i] = t[e + i];
  for (; i < r.length; i++)
    r[i] = z1(G1(r[i - 2]), r[i - 7], Q1(r[i - 15]), r[i - 16]);
  var n = this.h[0], s = this.h[1], o = this.h[2], c = this.h[3], h = this.h[4], u = this.h[5], d = this.h[6], m = this.h[7];
  for ($1(this.k.length === r.length), i = 0; i < r.length; i++) {
    var b = K1(m, W1(h), j1(h, u, d), this.k[i], r[i]), A = Mt(H1(n), V1(n, s, o));
    m = d, d = u, u = h, h = Mt(c, b), c = o, o = s, s = n, n = Mt(b, A);
  }
  this.h[0] = Mt(this.h[0], n), this.h[1] = Mt(this.h[1], s), this.h[2] = Mt(this.h[2], o), this.h[3] = Mt(this.h[3], c), this.h[4] = Mt(this.h[4], h), this.h[5] = Mt(this.h[5], u), this.h[6] = Mt(this.h[6], d), this.h[7] = Mt(this.h[7], m);
}, Lt.prototype._digest = function(t) {
  return t === "hex" ? ui.toHex32(this.h, "big") : ui.split32(this.h, "big");
};
var Ks = ne, Yl = Gl;
function Yt() {
  if (!(this instanceof Yt))
    return new Yt();
  Yl.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Ks.inherits(Yt, Yl);
var J1 = Yt;
Yt.blockSize = 512, Yt.outSize = 224, Yt.hmacStrength = 192, Yt.padLength = 64, Yt.prototype._digest = function(t) {
  return t === "hex" ? Ks.toHex32(this.h.slice(0, 7), "big") : Ks.split32(this.h.slice(0, 7), "big");
};
var ut = ne, X1 = wi, Z1 = Wi, zt = ut.rotr64_hi, Kt = ut.rotr64_lo, Jl = ut.shr64_hi, Xl = ut.shr64_lo, cr = ut.sum64, gs = ut.sum64_hi, ms = ut.sum64_lo, em = ut.sum64_4_hi, tm = ut.sum64_4_lo, rm = ut.sum64_5_hi, im = ut.sum64_5_lo, Zl = X1.BlockHash, nm = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function Pt() {
  if (!(this instanceof Pt))
    return new Pt();
  Zl.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = nm, this.W = new Array(160);
}
ut.inherits(Pt, Zl);
var eu = Pt;
Pt.blockSize = 1024, Pt.outSize = 512, Pt.hmacStrength = 192, Pt.padLength = 128, Pt.prototype._prepareBlock = function(t, e) {
  for (var r = this.W, i = 0; i < 32; i++)
    r[i] = t[e + i];
  for (; i < r.length; i += 2) {
    var n = gm(r[i - 4], r[i - 3]), s = mm(r[i - 4], r[i - 3]), o = r[i - 14], c = r[i - 13], h = dm(r[i - 30], r[i - 29]), u = pm(r[i - 30], r[i - 29]), d = r[i - 32], m = r[i - 31];
    r[i] = em(n, s, o, c, h, u, d, m), r[i + 1] = tm(n, s, o, c, h, u, d, m);
  }
}, Pt.prototype._update = function(t, e) {
  this._prepareBlock(t, e);
  var r = this.W, i = this.h[0], n = this.h[1], s = this.h[2], o = this.h[3], c = this.h[4], h = this.h[5], u = this.h[6], d = this.h[7], m = this.h[8], b = this.h[9], A = this.h[10], E = this.h[11], N = this.h[12], I = this.h[13], x = this.h[14], R = this.h[15];
  Z1(this.k.length === r.length);
  for (var P = 0; P < r.length; P += 2) {
    var C = x, k = R, F = um(m, b), q = fm(m, b), $ = sm(m, b, A, E, N), X = om(m, b, A, E, N, I), se = this.k[P], Z = this.k[P + 1], oe = r[P], a = r[P + 1], f = rm(C, k, F, q, $, X, se, Z, oe, a), g = im(C, k, F, q, $, X, se, Z, oe, a);
    C = hm(i, n), k = lm(i, n), F = am(i, n, s, o, c), q = cm(i, n, s, o, c, h);
    var v = gs(C, k, F, q), _ = ms(C, k, F, q);
    x = N, R = I, N = A, I = E, A = m, E = b, m = gs(u, d, f, g), b = ms(d, d, f, g), u = c, d = h, c = s, h = o, s = i, o = n, i = gs(f, g, v, _), n = ms(f, g, v, _);
  }
  cr(this.h, 0, i, n), cr(this.h, 2, s, o), cr(this.h, 4, c, h), cr(this.h, 6, u, d), cr(this.h, 8, m, b), cr(this.h, 10, A, E), cr(this.h, 12, N, I), cr(this.h, 14, x, R);
}, Pt.prototype._digest = function(t) {
  return t === "hex" ? ut.toHex32(this.h, "big") : ut.split32(this.h, "big");
};
function sm(t, e, r, i, n) {
  var s = t & r ^ ~t & n;
  return s < 0 && (s += 4294967296), s;
}
function om(t, e, r, i, n, s) {
  var o = e & i ^ ~e & s;
  return o < 0 && (o += 4294967296), o;
}
function am(t, e, r, i, n) {
  var s = t & r ^ t & n ^ r & n;
  return s < 0 && (s += 4294967296), s;
}
function cm(t, e, r, i, n, s) {
  var o = e & i ^ e & s ^ i & s;
  return o < 0 && (o += 4294967296), o;
}
function hm(t, e) {
  var r = zt(t, e, 28), i = zt(e, t, 2), n = zt(e, t, 7), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function lm(t, e) {
  var r = Kt(t, e, 28), i = Kt(e, t, 2), n = Kt(e, t, 7), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function um(t, e) {
  var r = zt(t, e, 14), i = zt(t, e, 18), n = zt(e, t, 9), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function fm(t, e) {
  var r = Kt(t, e, 14), i = Kt(t, e, 18), n = Kt(e, t, 9), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function dm(t, e) {
  var r = zt(t, e, 1), i = zt(t, e, 8), n = Jl(t, e, 7), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function pm(t, e) {
  var r = Kt(t, e, 1), i = Kt(t, e, 8), n = Xl(t, e, 7), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function gm(t, e) {
  var r = zt(t, e, 19), i = zt(e, t, 29), n = Jl(t, e, 6), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
function mm(t, e) {
  var r = Kt(t, e, 19), i = Kt(e, t, 29), n = Xl(t, e, 6), s = r ^ i ^ n;
  return s < 0 && (s += 4294967296), s;
}
var js = ne, tu = eu;
function Jt() {
  if (!(this instanceof Jt))
    return new Jt();
  tu.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
js.inherits(Jt, tu);
var ym = Jt;
Jt.blockSize = 1024, Jt.outSize = 384, Jt.hmacStrength = 192, Jt.padLength = 128, Jt.prototype._digest = function(t) {
  return t === "hex" ? js.toHex32(this.h.slice(0, 12), "big") : js.split32(this.h.slice(0, 12), "big");
}, Yr.sha1 = L1, Yr.sha224 = J1, Yr.sha256 = Gl, Yr.sha384 = ym, Yr.sha512 = eu;
var ru = {}, Ur = ne, vm = wi, tn = Ur.rotl32, Va = Ur.sum32, Ii = Ur.sum32_3, Ha = Ur.sum32_4, iu = vm.BlockHash;
function Ft() {
  if (!(this instanceof Ft))
    return new Ft();
  iu.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Ur.inherits(Ft, iu), ru.ripemd160 = Ft, Ft.blockSize = 512, Ft.outSize = 160, Ft.hmacStrength = 192, Ft.padLength = 64, Ft.prototype._update = function(t, e) {
  for (var r = this.h[0], i = this.h[1], n = this.h[2], s = this.h[3], o = this.h[4], c = r, h = i, u = n, d = s, m = o, b = 0; b < 80; b++) {
    var A = Va(tn(Ha(r, Wa(b, i, n, s), t[_m[b] + e], wm(b)), Em[b]), o);
    r = o, o = s, s = tn(n, 10), n = i, i = A, A = Va(tn(Ha(c, Wa(79 - b, h, u, d), t[Am[b] + e], bm(b)), Sm[b]), m), c = m, m = d, d = tn(u, 10), u = h, h = A;
  }
  A = Ii(this.h[1], n, d), this.h[1] = Ii(this.h[2], s, m), this.h[2] = Ii(this.h[3], o, c), this.h[3] = Ii(this.h[4], r, h), this.h[4] = Ii(this.h[0], i, u), this.h[0] = A;
}, Ft.prototype._digest = function(t) {
  return t === "hex" ? Ur.toHex32(this.h, "little") : Ur.split32(this.h, "little");
};
function Wa(t, e, r, i) {
  return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i);
}
function wm(t) {
  return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
}
function bm(t) {
  return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
}
var _m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], Am = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Em = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Sm = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], Im = ne, Mm = Wi;
function ii(t, e, r) {
  if (!(this instanceof ii))
    return new ii(t, e, r);
  this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(Im.toArray(e, r));
}
var Nm = ii;
ii.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Mm(t.length <= this.blockSize);
  for (var e = t.length; e < this.blockSize; e++)
    t.push(0);
  for (e = 0; e < t.length; e++)
    t[e] ^= 54;
  for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
    t[e] ^= 106;
  this.outer = new this.Hash().update(t);
}, ii.prototype.update = function(t, e) {
  return this.inner.update(t, e), this;
}, ii.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(t) {
  var e = t;
  e.utils = ne, e.common = wi, e.sha = Yr, e.ripemd = ru, e.hmac = Nm, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
}(kt);
function _i(t, e, r) {
  return r = { path: e, exports: {}, require: function(i, n) {
    return xm(i, n ?? r.path);
  } }, t(r, r.exports), r.exports;
}
function xm() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Po = nu;
function nu(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
nu.equal = function(t, e, r) {
  if (t != e)
    throw new Error(r || "Assertion failed: " + t + " != " + e);
};
var Ot = _i(function(t, e) {
  var r = e;
  function i(o, c) {
    if (Array.isArray(o))
      return o.slice();
    if (!o)
      return [];
    var h = [];
    if (typeof o != "string") {
      for (var u = 0; u < o.length; u++)
        h[u] = o[u] | 0;
      return h;
    }
    if (c === "hex") {
      o = o.replace(/[^a-z0-9]+/ig, ""), o.length % 2 !== 0 && (o = "0" + o);
      for (var u = 0; u < o.length; u += 2)
        h.push(parseInt(o[u] + o[u + 1], 16));
    } else
      for (var u = 0; u < o.length; u++) {
        var d = o.charCodeAt(u), m = d >> 8, b = d & 255;
        m ? h.push(m, b) : h.push(b);
      }
    return h;
  }
  r.toArray = i;
  function n(o) {
    return o.length === 1 ? "0" + o : o;
  }
  r.zero2 = n;
  function s(o) {
    for (var c = "", h = 0; h < o.length; h++)
      c += n(o[h].toString(16));
    return c;
  }
  r.toHex = s, r.encode = function(o, c) {
    return c === "hex" ? s(o) : o;
  };
}), mt = _i(function(t, e) {
  var r = e;
  r.assert = Po, r.toArray = Ot.toArray, r.zero2 = Ot.zero2, r.toHex = Ot.toHex, r.encode = Ot.encode;
  function i(h, u, d) {
    var m = new Array(Math.max(h.bitLength(), d) + 1);
    m.fill(0);
    for (var b = 1 << u + 1, A = h.clone(), E = 0; E < m.length; E++) {
      var N, I = A.andln(b - 1);
      A.isOdd() ? (I > (b >> 1) - 1 ? N = (b >> 1) - I : N = I, A.isubn(N)) : N = 0, m[E] = N, A.iushrn(1);
    }
    return m;
  }
  r.getNAF = i;
  function n(h, u) {
    var d = [[], []];
    h = h.clone(), u = u.clone();
    for (var m = 0, b = 0, A; h.cmpn(-m) > 0 || u.cmpn(-b) > 0; ) {
      var E = h.andln(3) + m & 3, N = u.andln(3) + b & 3;
      E === 3 && (E = -1), N === 3 && (N = -1);
      var I;
      E & 1 ? (A = h.andln(7) + m & 7, (A === 3 || A === 5) && N === 2 ? I = -E : I = E) : I = 0, d[0].push(I);
      var x;
      N & 1 ? (A = u.andln(7) + b & 7, (A === 3 || A === 5) && E === 2 ? x = -N : x = N) : x = 0, d[1].push(x), 2 * m === I + 1 && (m = 1 - m), 2 * b === x + 1 && (b = 1 - b), h.iushrn(1), u.iushrn(1);
    }
    return d;
  }
  r.getJSF = n;
  function s(h, u, d) {
    var m = "_" + u;
    h.prototype[u] = function() {
      return this[m] !== void 0 ? this[m] : this[m] = d.call(this);
    };
  }
  r.cachedProperty = s;
  function o(h) {
    return typeof h == "string" ? r.toArray(h, "hex") : h;
  }
  r.parseBytes = o;
  function c(h) {
    return new J(h, "hex", "le");
  }
  r.intFromLE = c;
}), rn = mt.getNAF, Cm = mt.getJSF, An = mt.assert;
function ur(t, e) {
  this.type = t, this.p = new J(e.p, 16), this.red = e.prime ? J.red(e.prime) : J.mont(this.p), this.zero = new J(0).toRed(this.red), this.one = new J(1).toRed(this.red), this.two = new J(2).toRed(this.red), this.n = e.n && new J(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Hr = ur;
ur.prototype.point = function() {
  throw new Error("Not implemented");
}, ur.prototype.validate = function() {
  throw new Error("Not implemented");
}, ur.prototype._fixedNafMul = function(t, e) {
  An(t.precomputed);
  var r = t._getDoubles(), i = rn(e, 1, this._bitLength), n = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
  n /= 3;
  var s = [], o, c;
  for (o = 0; o < i.length; o += r.step) {
    c = 0;
    for (var h = o + r.step - 1; h >= o; h--)
      c = (c << 1) + i[h];
    s.push(c);
  }
  for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), m = n; m > 0; m--) {
    for (o = 0; o < s.length; o++)
      c = s[o], c === m ? d = d.mixedAdd(r.points[o]) : c === -m && (d = d.mixedAdd(r.points[o].neg()));
    u = u.add(d);
  }
  return u.toP();
}, ur.prototype._wnafMul = function(t, e) {
  var r = 4, i = t._getNAFPoints(r);
  r = i.wnd;
  for (var n = i.points, s = rn(e, r, this._bitLength), o = this.jpoint(null, null, null), c = s.length - 1; c >= 0; c--) {
    for (var h = 0; c >= 0 && s[c] === 0; c--)
      h++;
    if (c >= 0 && h++, o = o.dblp(h), c < 0)
      break;
    var u = s[c];
    An(u !== 0), t.type === "affine" ? u > 0 ? o = o.mixedAdd(n[u - 1 >> 1]) : o = o.mixedAdd(n[-u - 1 >> 1].neg()) : u > 0 ? o = o.add(n[u - 1 >> 1]) : o = o.add(n[-u - 1 >> 1].neg());
  }
  return t.type === "affine" ? o.toP() : o;
}, ur.prototype._wnafMulAdd = function(t, e, r, i, n) {
  var s = this._wnafT1, o = this._wnafT2, c = this._wnafT3, h = 0, u, d, m;
  for (u = 0; u < i; u++) {
    m = e[u];
    var b = m._getNAFPoints(t);
    s[u] = b.wnd, o[u] = b.points;
  }
  for (u = i - 1; u >= 1; u -= 2) {
    var A = u - 1, E = u;
    if (s[A] !== 1 || s[E] !== 1) {
      c[A] = rn(r[A], s[A], this._bitLength), c[E] = rn(r[E], s[E], this._bitLength), h = Math.max(c[A].length, h), h = Math.max(c[E].length, h);
      continue;
    }
    var N = [e[A], null, null, e[E]];
    e[A].y.cmp(e[E].y) === 0 ? (N[1] = e[A].add(e[E]), N[2] = e[A].toJ().mixedAdd(e[E].neg())) : e[A].y.cmp(e[E].y.redNeg()) === 0 ? (N[1] = e[A].toJ().mixedAdd(e[E]), N[2] = e[A].add(e[E].neg())) : (N[1] = e[A].toJ().mixedAdd(e[E]), N[2] = e[A].toJ().mixedAdd(e[E].neg()));
    var I = [-3, -1, -5, -7, 0, 7, 5, 1, 3], x = Cm(r[A], r[E]);
    for (h = Math.max(x[0].length, h), c[A] = new Array(h), c[E] = new Array(h), d = 0; d < h; d++) {
      var R = x[0][d] | 0, P = x[1][d] | 0;
      c[A][d] = I[(R + 1) * 3 + (P + 1)], c[E][d] = 0, o[A] = N;
    }
  }
  var C = this.jpoint(null, null, null), k = this._wnafT4;
  for (u = h; u >= 0; u--) {
    for (var F = 0; u >= 0; ) {
      var q = !0;
      for (d = 0; d < i; d++)
        k[d] = c[d][u] | 0, k[d] !== 0 && (q = !1);
      if (!q)
        break;
      F++, u--;
    }
    if (u >= 0 && F++, C = C.dblp(F), u < 0)
      break;
    for (d = 0; d < i; d++) {
      var $ = k[d];
      $ !== 0 && ($ > 0 ? m = o[d][$ - 1 >> 1] : $ < 0 && (m = o[d][-$ - 1 >> 1].neg()), m.type === "affine" ? C = C.mixedAdd(m) : C = C.add(m));
    }
  }
  for (u = 0; u < i; u++)
    o[u] = null;
  return n ? C : C.toP();
};
function bt(t, e) {
  this.curve = t, this.type = e, this.precomputed = null;
}
ur.BasePoint = bt, bt.prototype.eq = function() {
  throw new Error("Not implemented");
}, bt.prototype.validate = function() {
  return this.curve.validate(this);
}, ur.prototype.decodePoint = function(t, e) {
  t = mt.toArray(t, e);
  var r = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * r) {
    t[0] === 6 ? An(t[t.length - 1] % 2 === 0) : t[0] === 7 && An(t[t.length - 1] % 2 === 1);
    var i = this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
    return i;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === r)
    return this.pointFromX(t.slice(1, 1 + r), t[0] === 3);
  throw new Error("Unknown point format");
}, bt.prototype.encodeCompressed = function(t) {
  return this.encode(t, !0);
}, bt.prototype._encode = function(t) {
  var e = this.curve.p.byteLength(), r = this.getX().toArray("be", e);
  return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e));
}, bt.prototype.encode = function(t, e) {
  return mt.encode(this._encode(e), t);
}, bt.prototype.precompute = function(t) {
  if (this.precomputed)
    return this;
  var e = { doubles: null, naf: null, beta: null };
  return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this;
}, bt.prototype._hasDoubles = function(t) {
  if (!this.precomputed)
    return !1;
  var e = this.precomputed.doubles;
  return e ? e.points.length >= Math.ceil((t.bitLength() + 1) / e.step) : !1;
}, bt.prototype._getDoubles = function(t, e) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var r = [this], i = this, n = 0; n < e; n += t) {
    for (var s = 0; s < t; s++)
      i = i.dbl();
    r.push(i);
  }
  return { step: t, points: r };
}, bt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var e = [this], r = (1 << t) - 1, i = r === 1 ? null : this.dbl(), n = 1; n < r; n++)
    e[n] = e[n - 1].add(i);
  return { wnd: t, points: e };
}, bt.prototype._getBeta = function() {
  return null;
}, bt.prototype.dblp = function(t) {
  for (var e = this, r = 0; r < t; r++)
    e = e.dbl();
  return e;
};
var To = _i(function(t) {
  typeof Object.create == "function" ? t.exports = function(e, r) {
    r && (e.super_ = r, e.prototype = Object.create(r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
  } : t.exports = function(e, r) {
    if (r) {
      e.super_ = r;
      var i = function() {
      };
      i.prototype = r.prototype, e.prototype = new i(), e.prototype.constructor = e;
    }
  };
}), Rm = mt.assert;
function St(t) {
  Hr.call(this, "short", t), this.a = new J(t.a, 16).toRed(this.red), this.b = new J(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
To(St, Hr);
var Pm = St;
St.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, r;
    if (t.beta)
      e = new J(t.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      e = i[0].cmp(i[1]) < 0 ? i[0] : i[1], e = e.toRed(this.red);
    }
    if (t.lambda)
      r = new J(t.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(e)) === 0 ? r = n[0] : (r = n[1], Rm(this.g.mul(r).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var s;
    return t.basis ? s = t.basis.map(function(o) {
      return { a: new J(o.a, 16), b: new J(o.b, 16) };
    }) : s = this._getEndoBasis(r), { beta: e, lambda: r, basis: s };
  }
}, St.prototype._getEndoRoots = function(t) {
  var e = t === this.p ? this.red : J.mont(t), r = new J(2).toRed(e).redInvm(), i = r.redNeg(), n = new J(3).toRed(e).redNeg().redSqrt().redMul(r), s = i.redAdd(n).fromRed(), o = i.redSub(n).fromRed();
  return [s, o];
}, St.prototype._getEndoBasis = function(t) {
  for (var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), r = t, i = this.n.clone(), n = new J(1), s = new J(0), o = new J(0), c = new J(1), h, u, d, m, b, A, E, N = 0, I, x; r.cmpn(0) !== 0; ) {
    var R = i.div(r);
    I = i.sub(R.mul(r)), x = o.sub(R.mul(n));
    var P = c.sub(R.mul(s));
    if (!d && I.cmp(e) < 0)
      h = E.neg(), u = n, d = I.neg(), m = x;
    else if (d && ++N === 2)
      break;
    E = I, i = r, r = I, o = n, n = x, c = s, s = P;
  }
  b = I.neg(), A = x;
  var C = d.sqr().add(m.sqr()), k = b.sqr().add(A.sqr());
  return k.cmp(C) >= 0 && (b = h, A = u), d.negative && (d = d.neg(), m = m.neg()), b.negative && (b = b.neg(), A = A.neg()), [{ a: d, b: m }, { a: b, b: A }];
}, St.prototype._endoSplit = function(t) {
  var e = this.endo.basis, r = e[0], i = e[1], n = i.b.mul(t).divRound(this.n), s = r.b.neg().mul(t).divRound(this.n), o = n.mul(r.a), c = s.mul(i.a), h = n.mul(r.b), u = s.mul(i.b), d = t.sub(o).sub(c), m = h.add(u).neg();
  return { k1: d, k2: m };
}, St.prototype.pointFromX = function(t, e) {
  t = new J(t, 16), t.red || (t = t.toRed(this.red));
  var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), i = r.redSqrt();
  if (i.redSqr().redSub(r).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var n = i.fromRed().isOdd();
  return (e && !n || !e && n) && (i = i.redNeg()), this.point(t, i);
}, St.prototype.validate = function(t) {
  if (t.inf)
    return !0;
  var e = t.x, r = t.y, i = this.a.redMul(e), n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
  return r.redSqr().redISub(n).cmpn(0) === 0;
}, St.prototype._endoWnafMulAdd = function(t, e, r) {
  for (var i = this._endoWnafT1, n = this._endoWnafT2, s = 0; s < t.length; s++) {
    var o = this._endoSplit(e[s]), c = t[s], h = c._getBeta();
    o.k1.negative && (o.k1.ineg(), c = c.neg(!0)), o.k2.negative && (o.k2.ineg(), h = h.neg(!0)), i[s * 2] = c, i[s * 2 + 1] = h, n[s * 2] = o.k1, n[s * 2 + 1] = o.k2;
  }
  for (var u = this._wnafMulAdd(1, i, n, s * 2, r), d = 0; d < s * 2; d++)
    i[d] = null, n[d] = null;
  return u;
};
function Qe(t, e, r, i) {
  Hr.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new J(e, 16), this.y = new J(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
To(Qe, Hr.BasePoint), St.prototype.point = function(t, e, r) {
  return new Qe(this, t, e, r);
}, St.prototype.pointFromJSON = function(t, e) {
  return Qe.fromJSON(this, t, e);
}, Qe.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta)
      return t.beta;
    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var r = this.curve, i = function(n) {
        return r.point(n.x.redMul(r.endo.beta), n.y);
      };
      t.beta = e, e.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(i) } };
    }
    return e;
  }
}, Qe.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Qe.fromJSON = function(t, e, r) {
  typeof e == "string" && (e = JSON.parse(e));
  var i = t.point(e[0], e[1], r);
  if (!e[2])
    return i;
  function n(o) {
    return t.point(o[0], o[1], r);
  }
  var s = e[2];
  return i.precomputed = { beta: null, doubles: s.doubles && { step: s.doubles.step, points: [i].concat(s.doubles.points.map(n)) }, naf: s.naf && { wnd: s.naf.wnd, points: [i].concat(s.naf.points.map(n)) } }, i;
}, Qe.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Qe.prototype.isInfinity = function() {
  return this.inf;
}, Qe.prototype.add = function(t) {
  if (this.inf)
    return t;
  if (t.inf)
    return this;
  if (this.eq(t))
    return this.dbl();
  if (this.neg().eq(t))
    return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0)
    return this.curve.point(null, null);
  var e = this.y.redSub(t.y);
  e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(t.x).redInvm()));
  var r = e.redSqr().redISub(this.x).redISub(t.x), i = e.redMul(this.x.redSub(r)).redISub(this.y);
  return this.curve.point(r, i);
}, Qe.prototype.dbl = function() {
  if (this.inf)
    return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0)
    return this.curve.point(null, null);
  var e = this.curve.a, r = this.x.redSqr(), i = t.redInvm(), n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i), s = n.redSqr().redISub(this.x.redAdd(this.x)), o = n.redMul(this.x.redSub(s)).redISub(this.y);
  return this.curve.point(s, o);
}, Qe.prototype.getX = function() {
  return this.x.fromRed();
}, Qe.prototype.getY = function() {
  return this.y.fromRed();
}, Qe.prototype.mul = function(t) {
  return t = new J(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Qe.prototype.mulAdd = function(t, e, r) {
  var i = [this, e], n = [t, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2);
}, Qe.prototype.jmulAdd = function(t, e, r) {
  var i = [this, e], n = [t, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0);
}, Qe.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Qe.prototype.neg = function(t) {
  if (this.inf)
    return this;
  var e = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var r = this.precomputed, i = function(n) {
      return n.neg();
    };
    e.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(i) } };
  }
  return e;
}, Qe.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Ge(t, e, r, i) {
  Hr.BasePoint.call(this, t, "jacobian"), e === null && r === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new J(0)) : (this.x = new J(e, 16), this.y = new J(r, 16), this.z = new J(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
To(Ge, Hr.BasePoint), St.prototype.jpoint = function(t, e, r) {
  return new Ge(this, t, e, r);
}, Ge.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var t = this.z.redInvm(), e = t.redSqr(), r = this.x.redMul(e), i = this.y.redMul(e).redMul(t);
  return this.curve.point(r, i);
}, Ge.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Ge.prototype.add = function(t) {
  if (this.isInfinity())
    return t;
  if (t.isInfinity())
    return this;
  var e = t.z.redSqr(), r = this.z.redSqr(), i = this.x.redMul(e), n = t.x.redMul(r), s = this.y.redMul(e.redMul(t.z)), o = t.y.redMul(r.redMul(this.z)), c = i.redSub(n), h = s.redSub(o);
  if (c.cmpn(0) === 0)
    return h.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var u = c.redSqr(), d = u.redMul(c), m = i.redMul(u), b = h.redSqr().redIAdd(d).redISub(m).redISub(m), A = h.redMul(m.redISub(b)).redISub(s.redMul(d)), E = this.z.redMul(t.z).redMul(c);
  return this.curve.jpoint(b, A, E);
}, Ge.prototype.mixedAdd = function(t) {
  if (this.isInfinity())
    return t.toJ();
  if (t.isInfinity())
    return this;
  var e = this.z.redSqr(), r = this.x, i = t.x.redMul(e), n = this.y, s = t.y.redMul(e).redMul(this.z), o = r.redSub(i), c = n.redSub(s);
  if (o.cmpn(0) === 0)
    return c.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var h = o.redSqr(), u = h.redMul(o), d = r.redMul(h), m = c.redSqr().redIAdd(u).redISub(d).redISub(d), b = c.redMul(d.redISub(m)).redISub(n.redMul(u)), A = this.z.redMul(o);
  return this.curve.jpoint(m, b, A);
}, Ge.prototype.dblp = function(t) {
  if (t === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!t)
    return this.dbl();
  var e;
  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (e = 0; e < t; e++)
      r = r.dbl();
    return r;
  }
  var i = this.curve.a, n = this.curve.tinv, s = this.x, o = this.y, c = this.z, h = c.redSqr().redSqr(), u = o.redAdd(o);
  for (e = 0; e < t; e++) {
    var d = s.redSqr(), m = u.redSqr(), b = m.redSqr(), A = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(h)), E = s.redMul(m), N = A.redSqr().redISub(E.redAdd(E)), I = E.redISub(N), x = A.redMul(I);
    x = x.redIAdd(x).redISub(b);
    var R = u.redMul(c);
    e + 1 < t && (h = h.redMul(b)), s = N, c = R, u = x;
  }
  return this.curve.jpoint(s, u.redMul(n), c);
}, Ge.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Ge.prototype._zeroDbl = function() {
  var t, e, r;
  if (this.zOne) {
    var i = this.x.redSqr(), n = this.y.redSqr(), s = n.redSqr(), o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
    o = o.redIAdd(o);
    var c = i.redAdd(i).redIAdd(i), h = c.redSqr().redISub(o).redISub(o), u = s.redIAdd(s);
    u = u.redIAdd(u), u = u.redIAdd(u), t = h, e = c.redMul(o.redISub(h)).redISub(u), r = this.y.redAdd(this.y);
  } else {
    var d = this.x.redSqr(), m = this.y.redSqr(), b = m.redSqr(), A = this.x.redAdd(m).redSqr().redISub(d).redISub(b);
    A = A.redIAdd(A);
    var E = d.redAdd(d).redIAdd(d), N = E.redSqr(), I = b.redIAdd(b);
    I = I.redIAdd(I), I = I.redIAdd(I), t = N.redISub(A).redISub(A), e = E.redMul(A.redISub(t)).redISub(I), r = this.y.redMul(this.z), r = r.redIAdd(r);
  }
  return this.curve.jpoint(t, e, r);
}, Ge.prototype._threeDbl = function() {
  var t, e, r;
  if (this.zOne) {
    var i = this.x.redSqr(), n = this.y.redSqr(), s = n.redSqr(), o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
    o = o.redIAdd(o);
    var c = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a), h = c.redSqr().redISub(o).redISub(o);
    t = h;
    var u = s.redIAdd(s);
    u = u.redIAdd(u), u = u.redIAdd(u), e = c.redMul(o.redISub(h)).redISub(u), r = this.y.redAdd(this.y);
  } else {
    var d = this.z.redSqr(), m = this.y.redSqr(), b = this.x.redMul(m), A = this.x.redSub(d).redMul(this.x.redAdd(d));
    A = A.redAdd(A).redIAdd(A);
    var E = b.redIAdd(b);
    E = E.redIAdd(E);
    var N = E.redAdd(E);
    t = A.redSqr().redISub(N), r = this.y.redAdd(this.z).redSqr().redISub(m).redISub(d);
    var I = m.redSqr();
    I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I), e = A.redMul(E.redISub(t)).redISub(I);
  }
  return this.curve.jpoint(t, e, r);
}, Ge.prototype._dbl = function() {
  var t = this.curve.a, e = this.x, r = this.y, i = this.z, n = i.redSqr().redSqr(), s = e.redSqr(), o = r.redSqr(), c = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(n)), h = e.redAdd(e);
  h = h.redIAdd(h);
  var u = h.redMul(o), d = c.redSqr().redISub(u.redAdd(u)), m = u.redISub(d), b = o.redSqr();
  b = b.redIAdd(b), b = b.redIAdd(b), b = b.redIAdd(b);
  var A = c.redMul(m).redISub(b), E = r.redAdd(r).redMul(i);
  return this.curve.jpoint(d, A, E);
}, Ge.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var t = this.x.redSqr(), e = this.y.redSqr(), r = this.z.redSqr(), i = e.redSqr(), n = t.redAdd(t).redIAdd(t), s = n.redSqr(), o = this.x.redAdd(e).redSqr().redISub(t).redISub(i);
  o = o.redIAdd(o), o = o.redAdd(o).redIAdd(o), o = o.redISub(s);
  var c = o.redSqr(), h = i.redIAdd(i);
  h = h.redIAdd(h), h = h.redIAdd(h), h = h.redIAdd(h);
  var u = n.redIAdd(o).redSqr().redISub(s).redISub(c).redISub(h), d = e.redMul(u);
  d = d.redIAdd(d), d = d.redIAdd(d);
  var m = this.x.redMul(c).redISub(d);
  m = m.redIAdd(m), m = m.redIAdd(m);
  var b = this.y.redMul(u.redMul(h.redISub(u)).redISub(o.redMul(c)));
  b = b.redIAdd(b), b = b.redIAdd(b), b = b.redIAdd(b);
  var A = this.z.redAdd(o).redSqr().redISub(r).redISub(c);
  return this.curve.jpoint(m, b, A);
}, Ge.prototype.mul = function(t, e) {
  return t = new J(t, e), this.curve._wnafMul(this, t);
}, Ge.prototype.eq = function(t) {
  if (t.type === "affine")
    return this.eq(t.toJ());
  if (this === t)
    return !0;
  var e = this.z.redSqr(), r = t.z.redSqr();
  if (this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0) !== 0)
    return !1;
  var i = e.redMul(this.z), n = r.redMul(t.z);
  return this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0) === 0;
}, Ge.prototype.eqXToP = function(t) {
  var e = this.z.redSqr(), r = t.toRed(this.curve.red).redMul(e);
  if (this.x.cmp(r) === 0)
    return !0;
  for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)
      return !1;
    if (r.redIAdd(n), this.x.cmp(r) === 0)
      return !0;
  }
}, Ge.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Ge.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var cn = _i(function(t, e) {
  var r = e;
  r.base = Hr, r.short = Pm, r.mont = null, r.edwards = null;
}), hn = _i(function(t, e) {
  var r = e, i = mt.assert;
  function n(c) {
    c.type === "short" ? this.curve = new cn.short(c) : c.type === "edwards" ? this.curve = new cn.edwards(c) : this.curve = new cn.mont(c), this.g = this.curve.g, this.n = this.curve.n, this.hash = c.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r.PresetCurve = n;
  function s(c, h) {
    Object.defineProperty(r, c, { configurable: !0, enumerable: !0, get: function() {
      var u = new n(h);
      return Object.defineProperty(r, c, { configurable: !0, enumerable: !0, value: u }), u;
    } });
  }
  s("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: kt.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), s("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: kt.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), s("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: kt.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), s("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: kt.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), s("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: kt.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), s("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: kt.sha256, gRed: !1, g: ["9"] }), s("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: kt.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var o;
  try {
    o = null.crash();
  } catch {
    o = void 0;
  }
  s("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: kt.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", o] });
});
function fr(t) {
  if (!(this instanceof fr))
    return new fr(t);
  this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = Ot.toArray(t.entropy, t.entropyEnc || "hex"), r = Ot.toArray(t.nonce, t.nonceEnc || "hex"), i = Ot.toArray(t.pers, t.persEnc || "hex");
  Po(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i);
}
var Qa = fr;
fr.prototype._init = function(t, e, r) {
  var i = t.concat(e).concat(r);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var n = 0; n < this.V.length; n++)
    this.K[n] = 0, this.V[n] = 1;
  this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
}, fr.prototype._hmac = function() {
  return new kt.hmac(this.hash, this.K);
}, fr.prototype._update = function(t) {
  var e = this._hmac().update(this.V).update([0]);
  t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, fr.prototype.reseed = function(t, e, r, i) {
  typeof e != "string" && (i = r, r = e, e = null), t = Ot.toArray(t, e), r = Ot.toArray(r, i), Po(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1;
}, fr.prototype.generate = function(t, e, r, i) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof e != "string" && (i = r, r = e, e = null), r && (r = Ot.toArray(r, i || "hex"), this._update(r));
  for (var n = []; n.length < t; )
    this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
  var s = n.slice(0, t);
  return this._update(r), this._reseed++, Ot.encode(s, e);
};
var ys = mt.assert;
function Ze(t, e) {
  this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var vs = Ze;
Ze.fromPublic = function(t, e, r) {
  return e instanceof Ze ? e : new Ze(t, { pub: e, pubEnc: r });
}, Ze.fromPrivate = function(t, e, r) {
  return e instanceof Ze ? e : new Ze(t, { priv: e, privEnc: r });
}, Ze.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: !1, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
}, Ze.prototype.getPublic = function(t, e) {
  return typeof t == "string" && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
}, Ze.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, Ze.prototype._importPrivate = function(t, e) {
  this.priv = new J(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, Ze.prototype._importPublic = function(t, e) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? ys(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && ys(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, e);
}, Ze.prototype.derive = function(t) {
  return t.validate() || ys(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, Ze.prototype.sign = function(t, e, r) {
  return this.ec.sign(t, this, e, r);
}, Ze.prototype.verify = function(t, e) {
  return this.ec.verify(t, e, this);
}, Ze.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Tm = mt.assert;
function Fn(t, e) {
  if (t instanceof Fn)
    return t;
  this._importDER(t, e) || (Tm(t.r && t.s, "Signature without r or s"), this.r = new J(t.r, 16), this.s = new J(t.s, 16), t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
}
var nn = Fn;
function Om() {
  this.place = 0;
}
function ws(t, e) {
  var r = t[e.place++];
  if (!(r & 128))
    return r;
  var i = r & 15;
  if (i === 0 || i > 4)
    return !1;
  for (var n = 0, s = 0, o = e.place; s < i; s++, o++)
    n <<= 8, n |= t[o], n >>>= 0;
  return n <= 127 ? !1 : (e.place = o, n);
}
function Ga(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; )
    e++;
  return e === 0 ? t : t.slice(e);
}
Fn.prototype._importDER = function(t, e) {
  t = mt.toArray(t, e);
  var r = new Om();
  if (t[r.place++] !== 48)
    return !1;
  var i = ws(t, r);
  if (i === !1 || i + r.place !== t.length || t[r.place++] !== 2)
    return !1;
  var n = ws(t, r);
  if (n === !1)
    return !1;
  var s = t.slice(r.place, n + r.place);
  if (r.place += n, t[r.place++] !== 2)
    return !1;
  var o = ws(t, r);
  if (o === !1 || t.length !== o + r.place)
    return !1;
  var c = t.slice(r.place, o + r.place);
  if (s[0] === 0)
    if (s[1] & 128)
      s = s.slice(1);
    else
      return !1;
  if (c[0] === 0)
    if (c[1] & 128)
      c = c.slice(1);
    else
      return !1;
  return this.r = new J(s), this.s = new J(c), this.recoveryParam = null, !0;
};
function bs(t, e) {
  if (e < 128) {
    t.push(e);
    return;
  }
  var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (t.push(r | 128); --r; )
    t.push(e >>> (r << 3) & 255);
  t.push(e);
}
Fn.prototype.toDER = function(t) {
  var e = this.r.toArray(), r = this.s.toArray();
  for (e[0] & 128 && (e = [0].concat(e)), r[0] & 128 && (r = [0].concat(r)), e = Ga(e), r = Ga(r); !r[0] && !(r[1] & 128); )
    r = r.slice(1);
  var i = [2];
  bs(i, e.length), i = i.concat(e), i.push(2), bs(i, r.length);
  var n = i.concat(r), s = [48];
  return bs(s, n.length), s = s.concat(n), mt.encode(s, t);
};
var Bm = function() {
  throw new Error("unsupported");
}, su = mt.assert;
function Et(t) {
  if (!(this instanceof Et))
    return new Et(t);
  typeof t == "string" && (su(Object.prototype.hasOwnProperty.call(hn, t), "Unknown curve " + t), t = hn[t]), t instanceof hn.PresetCurve && (t = { curve: t }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
}
var km = Et;
Et.prototype.keyPair = function(t) {
  return new vs(this, t);
}, Et.prototype.keyFromPrivate = function(t, e) {
  return vs.fromPrivate(this, t, e);
}, Et.prototype.keyFromPublic = function(t, e) {
  return vs.fromPublic(this, t, e);
}, Et.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var e = new Qa({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Bm(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), r = this.n.byteLength(), i = this.n.sub(new J(2)); ; ) {
    var n = new J(e.generate(r));
    if (!(n.cmp(i) > 0))
      return n.iaddn(1), this.keyFromPrivate(n);
  }
}, Et.prototype._truncateToN = function(t, e) {
  var r = t.byteLength() * 8 - this.n.bitLength();
  return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, Et.prototype.sign = function(t, e, r, i) {
  typeof r == "object" && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new J(t, 16));
  for (var n = this.n.byteLength(), s = e.getPrivate().toArray("be", n), o = t.toArray("be", n), c = new Qa({ hash: this.hash, entropy: s, nonce: o, pers: i.pers, persEnc: i.persEnc || "utf8" }), h = this.n.sub(new J(1)), u = 0; ; u++) {
    var d = i.k ? i.k(u) : new J(c.generate(this.n.byteLength()));
    if (d = this._truncateToN(d, !0), !(d.cmpn(1) <= 0 || d.cmp(h) >= 0)) {
      var m = this.g.mul(d);
      if (!m.isInfinity()) {
        var b = m.getX(), A = b.umod(this.n);
        if (A.cmpn(0) !== 0) {
          var E = d.invm(this.n).mul(A.mul(e.getPrivate()).iadd(t));
          if (E = E.umod(this.n), E.cmpn(0) !== 0) {
            var N = (m.getY().isOdd() ? 1 : 0) | (b.cmp(A) !== 0 ? 2 : 0);
            return i.canonical && E.cmp(this.nh) > 0 && (E = this.n.sub(E), N ^= 1), new nn({ r: A, s: E, recoveryParam: N });
          }
        }
      }
    }
  }
}, Et.prototype.verify = function(t, e, r, i) {
  t = this._truncateToN(new J(t, 16)), r = this.keyFromPublic(r, i), e = new nn(e, "hex");
  var n = e.r, s = e.s;
  if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0 || s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return !1;
  var o = s.invm(this.n), c = o.mul(t).umod(this.n), h = o.mul(n).umod(this.n), u;
  return this.curve._maxwellTrick ? (u = this.g.jmulAdd(c, r.getPublic(), h), u.isInfinity() ? !1 : u.eqXToP(n)) : (u = this.g.mulAdd(c, r.getPublic(), h), u.isInfinity() ? !1 : u.getX().umod(this.n).cmp(n) === 0);
}, Et.prototype.recoverPubKey = function(t, e, r, i) {
  su((3 & r) === r, "The recovery param is more than two bits"), e = new nn(e, i);
  var n = this.n, s = new J(t), o = e.r, c = e.s, h = r & 1, u = r >> 1;
  if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
    throw new Error("Unable to find sencond key candinate");
  u ? o = this.curve.pointFromX(o.add(this.curve.n), h) : o = this.curve.pointFromX(o, h);
  var d = e.r.invm(n), m = n.sub(s).mul(d).umod(n), b = c.mul(d).umod(n);
  return this.g.mulAdd(m, o, b);
}, Et.prototype.getKeyRecoveryParam = function(t, e, r, i) {
  if (e = new nn(e, i), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var n = 0; n < 4; n++) {
    var s;
    try {
      s = this.recoverPubKey(t, e, n);
    } catch {
      continue;
    }
    if (s.eq(r))
      return n;
  }
  throw new Error("Unable to find valid recovery factor");
};
var Fm = _i(function(t, e) {
  var r = e;
  r.version = "6.5.4", r.utils = mt, r.rand = function() {
    throw new Error("unsupported");
  }, r.curve = cn, r.curves = hn, r.ec = km, r.eddsa = null;
}), Dm = Fm.ec;
const qm = "signing-key/5.7.0", Vs = new Je(qm);
let _s = null;
function lr() {
  return _s || (_s = new Dm("secp256k1")), _s;
}
class Lm {
  constructor(e) {
    Ei(this, "curve", "secp256k1"), Ei(this, "privateKey", at(e)), Ag(this.privateKey) !== 32 && Vs.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r = lr().keyFromPrivate(Ke(this.privateKey));
    Ei(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Ei(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Ei(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const r = lr().keyFromPublic(Ke(this.publicKey)), i = lr().keyFromPublic(Ke(e));
    return "0x" + r.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const r = lr().keyFromPrivate(Ke(this.privateKey)), i = Ke(e);
    i.length !== 32 && Vs.throwArgumentError("bad digest length", "digest", e);
    const n = r.sign(i, { canonical: !0 });
    return Rl({ recoveryParam: n.recoveryParam, r: Ut("0x" + n.r.toString(16), 32), s: Ut("0x" + n.s.toString(16), 32) });
  }
  computeSharedSecret(e) {
    const r = lr().keyFromPrivate(Ke(this.privateKey)), i = lr().keyFromPublic(Ke(ou(e)));
    return Ut("0x" + r.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function Um(t, e) {
  const r = Rl(e), i = { r: Ke(r.r), s: Ke(r.s) };
  return "0x" + lr().recoverPubKey(Ke(t), i, r.recoveryParam).encode("hex", !1);
}
function ou(t, e) {
  const r = Ke(t);
  return r.length === 32 ? new Lm(r).publicKey : r.length === 33 ? "0x" + lr().keyFromPublic(r).getPublic(!1, "hex") : r.length === 65 ? at(r) : Vs.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var Ya;
(function(t) {
  t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559";
})(Ya || (Ya = {}));
function $m(t) {
  const e = ou(t);
  return Xg(ka(xo(ka(e, 1)), 12));
}
function zm(t, e) {
  return $m(Um(Ke(t), e));
}
const Km = "https://rpc.walletconnect.com/v1";
async function jm(t, e, r, i, n, s) {
  switch (r.t) {
    case "eip191":
      return Vm(t, e, r.s);
    case "eip1271":
      return await Hm(t, e, r.s, i, n, s);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`);
  }
}
function Vm(t, e, r) {
  return zm(Ll(e), r).toLowerCase() === t.toLowerCase();
}
async function Hm(t, e, r, i, n, s) {
  try {
    const o = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", h = "0000000000000000000000000000000000000000000000000000000000000041", u = r.substring(2), d = Ll(e).substring(2), m = o + d + c + h + u, b = await fetch(`${s || Km}/?chainId=${i}&projectId=${n}`, { method: "POST", body: JSON.stringify({ id: Wm(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: m }, "latest"] }) }), { result: A } = await b.json();
    return A ? A.slice(0, o.length).toLowerCase() === o.toLowerCase() : !1;
  } catch (o) {
    return console.error("isValidEip1271Signature: ", o), !1;
  }
}
function Wm() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var Qm = Object.defineProperty, Gm = Object.defineProperties, Ym = Object.getOwnPropertyDescriptors, Ja = Object.getOwnPropertySymbols, Jm = Object.prototype.hasOwnProperty, Xm = Object.prototype.propertyIsEnumerable, Xa = (t, e, r) => e in t ? Qm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zm = (t, e) => {
  for (var r in e || (e = {}))
    Jm.call(e, r) && Xa(t, r, e[r]);
  if (Ja)
    for (var r of Ja(e))
      Xm.call(e, r) && Xa(t, r, e[r]);
  return t;
}, ey = (t, e) => Gm(t, Ym(e));
const ty = "did:pkh:", Oo = (t) => t == null ? void 0 : t.split(":"), au = (t) => {
  const e = t && Oo(t);
  if (e)
    return t.includes(ty) ? e[3] : e[1];
}, Za = (t) => {
  const e = t && Oo(t);
  if (e)
    return e[2] + ":" + e[3];
}, En = (t) => {
  const e = t && Oo(t);
  if (e)
    return e.pop();
};
async function ec(t) {
  const { cacao: e, projectId: r } = t, { s: i, p: n } = e, s = cu(n, n.iss), o = En(n.iss);
  return await jm(o, s, i, au(n.iss), r);
}
const cu = (t, e) => {
  const r = `${t.domain} wants you to sign in with your Ethereum account:`, i = En(e);
  if (!t.aud && !t.uri)
    throw new Error("Either `aud` or `uri` is required to construct the message");
  let n = t.statement || void 0;
  const s = `URI: ${t.aud || t.uri}`, o = `Version: ${t.version}`, c = `Chain ID: ${au(e)}`, h = `Nonce: ${t.nonce}`, u = `Issued At: ${t.iat}`, d = t.resources ? `Resources:${t.resources.map((b) => `
- ${b}`).join("")}` : void 0, m = ln(t.resources);
  if (m) {
    const b = $i(m);
    n = ly(n, b);
  }
  return [r, i, "", n, "", s, o, c, h, u, d].filter((b) => b != null).join(`
`);
};
function ry(t) {
  return Y.Buffer.from(JSON.stringify(t)).toString("base64");
}
function iy(t) {
  return JSON.parse(Y.Buffer.from(t, "base64").toString("utf-8"));
}
function $r(t) {
  if (!t)
    throw new Error("No recap provided, value is undefined");
  if (!t.att)
    throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((r) => {
    const i = t.att[r];
    if (Array.isArray(i))
      throw new Error(`Resource must be an object: ${r}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${r}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${r}`);
    Object.keys(i).forEach((n) => {
      const s = i[n];
      if (!Array.isArray(s))
        throw new Error(`Ability limits ${n} must be an array of objects, found: ${s}`);
      if (!s.length)
        throw new Error(`Value of ${n} is empty array, must be an array with objects`);
      s.forEach((o) => {
        if (typeof o != "object")
          throw new Error(`Ability limits (${n}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function ny(t, e, r, i = {}) {
  return r == null || r.sort((n, s) => n.localeCompare(s)), { att: { [t]: sy(e, r, i) } };
}
function sy(t, e, r = {}) {
  e = e == null ? void 0 : e.sort((n, s) => n.localeCompare(s));
  const i = e.map((n) => ({ [`${t}/${n}`]: [r] }));
  return Object.assign({}, ...i);
}
function hu(t) {
  return $r(t), `urn:recap:${ry(t).replace(/=/g, "")}`;
}
function $i(t) {
  const e = iy(t.replace("urn:recap:", ""));
  return $r(e), e;
}
function oy(t, e, r) {
  const i = ny(t, e, r);
  return hu(i);
}
function ay(t) {
  return t && t.includes("urn:recap:");
}
function cy(t, e) {
  const r = $i(t), i = $i(e), n = hy(r, i);
  return hu(n);
}
function hy(t, e) {
  $r(t), $r(e);
  const r = Object.keys(t.att).concat(Object.keys(e.att)).sort((n, s) => n.localeCompare(s)), i = { att: {} };
  return r.forEach((n) => {
    var s, o;
    Object.keys(((s = t.att) == null ? void 0 : s[n]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[n]) || {})).sort((c, h) => c.localeCompare(h)).forEach((c) => {
      var h, u;
      i.att[n] = ey(Zm({}, i.att[n]), { [c]: ((h = t.att[n]) == null ? void 0 : h[c]) || ((u = e.att[n]) == null ? void 0 : u[c]) });
    });
  }), i;
}
function ly(t = "", e) {
  $r(e);
  const r = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(r))
    return t;
  const i = [];
  let n = 0;
  Object.keys(e.att).forEach((c) => {
    const h = Object.keys(e.att[c]).map((m) => ({ ability: m.split("/")[0], action: m.split("/")[1] }));
    h.sort((m, b) => m.action.localeCompare(b.action));
    const u = {};
    h.forEach((m) => {
      u[m.ability] || (u[m.ability] = []), u[m.ability].push(m.action);
    });
    const d = Object.keys(u).map((m) => (n++, `(${n}) '${m}': '${u[m].join("', '")}' for '${c}'.`));
    i.push(d.join(", ").replace(".,", "."));
  });
  const s = i.join(" "), o = `${r}${s}`;
  return `${t ? t + " " : ""}${o}`;
}
function tc(t) {
  var e;
  const r = $i(t);
  $r(r);
  const i = (e = r.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((n) => n.split("/")[1]) : [];
}
function rc(t) {
  const e = $i(t);
  $r(e);
  const r = [];
  return Object.values(e.att).forEach((i) => {
    Object.values(i).forEach((n) => {
      var s;
      (s = n == null ? void 0 : n[0]) != null && s.chains && r.push(n[0].chains);
    });
  }), [...new Set(r.flat())];
}
function ln(t) {
  if (!t)
    return;
  const e = t == null ? void 0 : t[t.length - 1];
  return ay(e) ? e : void 0;
}
const lu = "base10", it = "base16", Hs = "base64pad", Bo = "utf8", uu = 0, gr = 1, uy = 0, ic = 1, Ws = 12, ko = 32;
function fy() {
  const t = Kc.generateKeyPair();
  return { privateKey: It(t.secretKey, it), publicKey: It(t.publicKey, it) };
}
function Qs() {
  const t = jc.randomBytes(ko);
  return It(t, it);
}
function dy(t, e) {
  const r = Kc.sharedKey(Tt(t, it), Tt(e, it), !0), i = new Yu(ro.SHA256, r).expand(ko);
  return It(i, it);
}
function un(t) {
  const e = ro.hash(Tt(t, it));
  return It(e, it);
}
function Lr(t) {
  const e = ro.hash(Tt(t, Bo));
  return It(e, it);
}
function py(t) {
  return Tt(`${t}`, lu);
}
function Qi(t) {
  return Number(It(t, lu));
}
function gy(t) {
  const e = py(typeof t.type < "u" ? t.type : uu);
  if (Qi(e) === gr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Tt(t.senderPublicKey, it) : void 0, i = typeof t.iv < "u" ? Tt(t.iv, it) : jc.randomBytes(Ws), n = new Vc.ChaCha20Poly1305(Tt(t.symKey, it)).seal(i, Tt(t.message, Bo));
  return yy({ type: e, sealed: n, iv: i, senderPublicKey: r });
}
function my(t) {
  const e = new Vc.ChaCha20Poly1305(Tt(t.symKey, it)), { sealed: r, iv: i } = Sn(t.encoded), n = e.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return It(n, Bo);
}
function yy(t) {
  if (Qi(t.type) === gr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return It(zo([t.type, t.senderPublicKey, t.iv, t.sealed]), Hs);
  }
  return It(zo([t.type, t.iv, t.sealed]), Hs);
}
function Sn(t) {
  const e = Tt(t, Hs), r = e.slice(uy, ic), i = ic;
  if (Qi(r) === gr) {
    const c = i + ko, h = c + Ws, u = e.slice(i, c), d = e.slice(c, h), m = e.slice(h);
    return { type: r, sealed: m, iv: d, senderPublicKey: u };
  }
  const n = i + Ws, s = e.slice(i, n), o = e.slice(n);
  return { type: r, sealed: o, iv: s };
}
function vy(t, e) {
  const r = Sn(t);
  return fu({ type: Qi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? It(r.senderPublicKey, it) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function fu(t) {
  const e = (t == null ? void 0 : t.type) || uu;
  if (e === gr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function nc(t) {
  return t.type === gr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
const wy = "irn";
function Gs(t) {
  return (t == null ? void 0 : t.relay) || { protocol: wy };
}
function Ri(t) {
  const e = Ku[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var by = Object.defineProperty, _y = Object.defineProperties, Ay = Object.getOwnPropertyDescriptors, sc = Object.getOwnPropertySymbols, Ey = Object.prototype.hasOwnProperty, Sy = Object.prototype.propertyIsEnumerable, oc = (t, e, r) => e in t ? by(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ac = (t, e) => {
  for (var r in e || (e = {}))
    Ey.call(e, r) && oc(t, r, e[r]);
  if (sc)
    for (var r of sc(e))
      Sy.call(e, r) && oc(t, r, e[r]);
  return t;
}, Iy = (t, e) => _y(t, Ay(e));
function My(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), o = t[n];
      r[s] = o;
    }
  }), r;
}
function cc(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), n = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", o = dn.parse(s), c = typeof o.methods == "string" ? o.methods.split(",") : void 0;
  return { protocol: i, topic: Ny(n[0]), version: parseInt(n[1], 10), symKey: o.symKey, relay: My(o), methods: c, expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0 };
}
function Ny(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function xy(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((n) => {
    const s = r + e + n;
    t[n] && (i[s] = t[n]);
  }), i;
}
function Cy(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + dn.stringify(ac(Iy(ac({ symKey: t.symKey }, xy(t.relay)), { expiryTimestamp: t.expiryTimestamp }), t.methods ? { methods: t.methods.join(",") } : {}));
}
function Ai(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, n] = r.split(":");
    e.push(`${i}:${n}`);
  }), e;
}
function Ry(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Ai(r.accounts));
  }), e;
}
function Py(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Ai(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function Ty(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Ai(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function Oy(t) {
  const e = {};
  return t == null || t.forEach((r) => {
    const [i, n] = r.split(":");
    e[i] || (e[i] = { accounts: [], chains: [], events: [] }), e[i].accounts.push(r), e[i].chains.push(`${i}:${n}`);
  }), e;
}
function hc(t, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const r = Oy(e);
  for (const [i, n] of Object.entries(r))
    n.methods ? n.methods = ug(n.methods, t) : n.methods = t, n.events = ["chainChanged", "accountsChanged"];
  return r;
}
const By = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, ky = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function D(t, e) {
  const { message: r, code: i } = ky[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function ae(t, e) {
  const { message: r, code: i } = By[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function Gi(t, e) {
  return !!Array.isArray(t);
}
function In(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function ct(t) {
  return typeof t > "u";
}
function Ve(t, e) {
  return e && ct(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Fo(t, e) {
  return typeof t == "number" && !isNaN(t);
}
function Fy(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
  let s = !0;
  return qr(n, i) ? (i.forEach((o) => {
    const { accounts: c, methods: h, events: u } = t.namespaces[o], d = Ai(c), m = r[o];
    (!qr(Al(o, m), d) || !qr(m.methods, h) || !qr(m.events, u)) && (s = !1);
  }), s) : !1;
}
function Mn(t) {
  return Ve(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Dy(t) {
  if (Ve(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Mn(r);
    }
  }
  return !1;
}
function qy(t) {
  if (Ve(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Ly(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Uy(t) {
  return t == null ? void 0 : t.topic;
}
function $y(t, e) {
  let r = null;
  return Ve(t == null ? void 0 : t.publicKey, !1) || (r = D("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function lc(t) {
  let e = !0;
  return Gi(t) ? t.length && (e = t.every((r) => Ve(r, !1))) : e = !1, e;
}
function zy(t, e, r) {
  let i = null;
  return Gi(e) && e.length ? e.forEach((n) => {
    i || Mn(n) || (i = ae("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : Mn(t) || (i = ae("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function Ky(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([n, s]) => {
    if (i)
      return;
    const o = zy(n, Al(n, s), `${e} ${r}`);
    o && (i = o);
  }), i;
}
function jy(t, e) {
  let r = null;
  return Gi(t) ? t.forEach((i) => {
    r || Dy(i) || (r = ae("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ae("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Vy(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = jy(i == null ? void 0 : i.accounts, `${e} namespace`);
    n && (r = n);
  }), r;
}
function Hy(t, e) {
  let r = null;
  return lc(t == null ? void 0 : t.methods) ? lc(t == null ? void 0 : t.events) || (r = ae("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = ae("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function du(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = Hy(i, `${e}, namespace`);
    n && (r = n);
  }), r;
}
function Wy(t, e, r) {
  let i = null;
  if (t && In(t)) {
    const n = du(t, e);
    n && (i = n);
    const s = Ky(t, e, r);
    s && (i = s);
  } else
    i = D("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function As(t, e) {
  let r = null;
  if (t && In(t)) {
    const i = du(t, e);
    i && (r = i);
    const n = Vy(t, e);
    n && (r = n);
  } else
    r = D("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function pu(t) {
  return Ve(t.protocol, !0);
}
function Qy(t, e) {
  let r = !1;
  return t ? t && Gi(t) && t.length && t.forEach((i) => {
    r = pu(i);
  }) : r = !0, r;
}
function Gy(t) {
  return typeof t == "number";
}
function ot(t) {
  return typeof t < "u" && typeof t !== null;
}
function Yy(t) {
  return !(!t || typeof t != "object" || !t.code || !Fo(t.code) || !t.message || !Ve(t.message, !1));
}
function Jy(t) {
  return !(ct(t) || !Ve(t.method, !1));
}
function Xy(t) {
  return !(ct(t) || ct(t.result) && ct(t.error) || !Fo(t.id) || !Ve(t.jsonrpc, !1));
}
function Zy(t) {
  return !(ct(t) || !Ve(t.name, !1));
}
function uc(t, e) {
  return !(!Mn(e) || !Ry(t).includes(e));
}
function ev(t, e, r) {
  return Ve(r, !1) ? Py(t, e).includes(r) : !1;
}
function tv(t, e, r) {
  return Ve(r, !1) ? Ty(t, e).includes(r) : !1;
}
function fc(t, e, r) {
  let i = null;
  const n = rv(t), s = iv(e), o = Object.keys(n), c = Object.keys(s), h = dc(Object.keys(t)), u = dc(Object.keys(e)), d = h.filter((m) => !u.includes(m));
  return d.length && (i = D("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), qr(o, c) || (i = D("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((m) => {
    if (!m.includes(":") || i)
      return;
    const b = Ai(e[m].accounts);
    b.includes(m) || (i = D("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${m}
        Required: ${m}
        Approved: ${b.toString()}`));
  }), o.forEach((m) => {
    i || (qr(n[m].methods, s[m].methods) ? qr(n[m].events, s[m].events) || (i = D("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${m}`)) : i = D("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${m}`));
  }), i;
}
function rv(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((n) => {
      e[n] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function dc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function iv(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = Ai(t[r].accounts);
      i == null || i.forEach((n) => {
        e[n] = { accounts: t[r].accounts.filter((s) => s.includes(`${n}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function nv(t, e) {
  return Fo(t) && t <= e.max && t >= e.min;
}
function pc() {
  const t = Hi();
  return new Promise((e) => {
    switch (t) {
      case pt.browser:
        e(sv());
        break;
      case pt.reactNative:
        e(ov());
        break;
      case pt.node:
        e(av());
        break;
      default:
        e(!0);
    }
  });
}
function sv() {
  return yi() && (navigator == null ? void 0 : navigator.onLine);
}
async function ov() {
  if (mi() && typeof Y.global < "u" && Y.global != null && Y.global.NetInfo) {
    const t = await (Y.global == null ? void 0 : Y.global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function av() {
  return !0;
}
function cv(t) {
  switch (Hi()) {
    case pt.browser:
      hv(t);
      break;
    case pt.reactNative:
      lv(t);
      break;
  }
}
function hv(t) {
  !mi() && yi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function lv(t) {
  var e;
  mi() && typeof Y.global < "u" && Y.global != null && Y.global.NetInfo && ((e = Y.global) == null || e.NetInfo.addEventListener((r) => t(r == null ? void 0 : r.isConnected)));
}
const Es = {};
class Mi {
  static get(e) {
    return Es[e];
  }
  static set(e, r) {
    Es[e] = r;
  }
  static delete(e) {
    delete Es[e];
  }
}
function uv(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < t.length; n++) {
    var s = t.charAt(n), o = s.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[o] = n;
  }
  var c = t.length, h = t.charAt(0), u = Math.log(c) / Math.log(256), d = Math.log(256) / Math.log(c);
  function m(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var N = 0, I = 0, x = 0, R = E.length; x !== R && E[x] === 0; )
      x++, N++;
    for (var P = (R - x) * d + 1 >>> 0, C = new Uint8Array(P); x !== R; ) {
      for (var k = E[x], F = 0, q = P - 1; (k !== 0 || F < I) && q !== -1; q--, F++)
        k += 256 * C[q] >>> 0, C[q] = k % c >>> 0, k = k / c >>> 0;
      if (k !== 0)
        throw new Error("Non-zero carry");
      I = F, x++;
    }
    for (var $ = P - I; $ !== P && C[$] === 0; )
      $++;
    for (var X = h.repeat(N); $ < P; ++$)
      X += t.charAt(C[$]);
    return X;
  }
  function b(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var N = 0;
    if (E[N] !== " ") {
      for (var I = 0, x = 0; E[N] === h; )
        I++, N++;
      for (var R = (E.length - N) * u + 1 >>> 0, P = new Uint8Array(R); E[N]; ) {
        var C = r[E.charCodeAt(N)];
        if (C === 255)
          return;
        for (var k = 0, F = R - 1; (C !== 0 || k < x) && F !== -1; F--, k++)
          C += c * P[F] >>> 0, P[F] = C % 256 >>> 0, C = C / 256 >>> 0;
        if (C !== 0)
          throw new Error("Non-zero carry");
        x = k, N++;
      }
      if (E[N] !== " ") {
        for (var q = R - x; q !== R && P[q] === 0; )
          q++;
        for (var $ = new Uint8Array(I + (R - q)), X = I; q !== R; )
          $[X++] = P[q++];
        return $;
      }
    }
  }
  function A(E) {
    var N = b(E);
    if (N)
      return N;
    throw new Error(`Non-${e} character`);
  }
  return { encode: m, decodeUnsafe: b, decode: A };
}
var fv = uv, dv = fv;
const gu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, pv = (t) => new TextEncoder().encode(t), gv = (t) => new TextDecoder().decode(t);
class mv {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
let yv = class {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return mu(this, e);
  }
}, vv = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return mu(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const mu = (t, e) => new vv({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
let wv = class {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new mv(e, r, i), this.decoder = new yv(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
const Dn = ({ name: t, prefix: e, encode: r, decode: i }) => new wv(t, e, r, i), Yi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = dv(r, e);
  return Dn({ prefix: t, name: e, encode: i, decode: (s) => gu(n(s)) });
}, bv = (t, e, r, i) => {
  const n = {};
  for (let d = 0; d < e.length; ++d)
    n[e[d]] = d;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let c = 0, h = 0, u = 0;
  for (let d = 0; d < s; ++d) {
    const m = n[t[d]];
    if (m === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h = h << r | m, c += r, c >= 8 && (c -= 8, o[u++] = 255 & h >> c);
  }
  if (c >= r || 255 & h << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, _v = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", o = 0, c = 0;
  for (let h = 0; h < t.length; ++h)
    for (c = c << 8 | t[h], o += 8; o > r; )
      o -= r, s += e[n & c >> o];
  if (o && (s += e[n & c << r - o]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Xe = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Dn({ prefix: e, name: t, encode(n) {
  return _v(n, i, r);
}, decode(n) {
  return bv(n, i, r, t);
} }), Av = Dn({ prefix: "\0", name: "identity", encode: (t) => gv(t), decode: (t) => pv(t) });
var Ev = Object.freeze({ __proto__: null, identity: Av });
const Sv = Xe({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Iv = Object.freeze({ __proto__: null, base2: Sv });
const Mv = Xe({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Nv = Object.freeze({ __proto__: null, base8: Mv });
const xv = Yi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Cv = Object.freeze({ __proto__: null, base10: xv });
const Rv = Xe({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Pv = Xe({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Tv = Object.freeze({ __proto__: null, base16: Rv, base16upper: Pv });
const Ov = Xe({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Bv = Xe({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), kv = Xe({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Fv = Xe({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Dv = Xe({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), qv = Xe({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Lv = Xe({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Uv = Xe({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), $v = Xe({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var zv = Object.freeze({ __proto__: null, base32: Ov, base32upper: Bv, base32pad: kv, base32padupper: Fv, base32hex: Dv, base32hexupper: qv, base32hexpad: Lv, base32hexpadupper: Uv, base32z: $v });
const Kv = Yi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), jv = Yi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Vv = Object.freeze({ __proto__: null, base36: Kv, base36upper: jv });
const Hv = Yi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Wv = Yi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Qv = Object.freeze({ __proto__: null, base58btc: Hv, base58flickr: Wv });
const Gv = Xe({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Yv = Xe({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Jv = Xe({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Xv = Xe({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Zv = Object.freeze({ __proto__: null, base64: Gv, base64pad: Yv, base64url: Jv, base64urlpad: Xv });
const yu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), ew = yu.reduce((t, e, r) => (t[r] = e, t), []), tw = yu.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function rw(t) {
  return t.reduce((e, r) => (e += ew[r], e), "");
}
function iw(t) {
  const e = [];
  for (const r of t) {
    const i = tw[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const nw = Dn({ prefix: "🚀", name: "base256emoji", encode: rw, decode: iw });
var sw = Object.freeze({ __proto__: null, base256emoji: nw }), ow = vu, gc = 128, aw = 127, cw = ~aw, hw = Math.pow(2, 31);
function vu(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= hw; )
    e[r++] = t & 255 | gc, t /= 128;
  for (; t & cw; )
    e[r++] = t & 255 | gc, t >>>= 7;
  return e[r] = t | 0, vu.bytes = r - i + 1, e;
}
var lw = Ys, uw = 128, mc = 127;
function Ys(t, i) {
  var r = 0, i = i || 0, n = 0, s = i, o, c = t.length;
  do {
    if (s >= c)
      throw Ys.bytes = 0, new RangeError("Could not decode varint");
    o = t[s++], r += n < 28 ? (o & mc) << n : (o & mc) * Math.pow(2, n), n += 7;
  } while (o >= uw);
  return Ys.bytes = s - i, r;
}
var fw = Math.pow(2, 7), dw = Math.pow(2, 14), pw = Math.pow(2, 21), gw = Math.pow(2, 28), mw = Math.pow(2, 35), yw = Math.pow(2, 42), vw = Math.pow(2, 49), ww = Math.pow(2, 56), bw = Math.pow(2, 63), _w = function(t) {
  return t < fw ? 1 : t < dw ? 2 : t < pw ? 3 : t < gw ? 4 : t < mw ? 5 : t < yw ? 6 : t < vw ? 7 : t < ww ? 8 : t < bw ? 9 : 10;
}, Aw = { encode: ow, decode: lw, encodingLength: _w }, wu = Aw;
const yc = (t, e, r = 0) => (wu.encode(t, e, r), e), vc = (t) => wu.encodingLength(t), Js = (t, e) => {
  const r = e.byteLength, i = vc(t), n = i + vc(r), s = new Uint8Array(n + r);
  return yc(t, s, 0), yc(r, s, i), s.set(e, n), new Ew(t, r, e, s);
};
class Ew {
  constructor(e, r, i, n) {
    this.code = e, this.size = r, this.digest = i, this.bytes = n;
  }
}
const bu = ({ name: t, code: e, encode: r }) => new Sw(t, e, r);
class Sw {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Js(this.code, r) : r.then((i) => Js(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const _u = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Iw = bu({ name: "sha2-256", code: 18, encode: _u("SHA-256") }), Mw = bu({ name: "sha2-512", code: 19, encode: _u("SHA-512") });
var Nw = Object.freeze({ __proto__: null, sha256: Iw, sha512: Mw });
const Au = 0, xw = "identity", Eu = gu, Cw = (t) => Js(Au, Eu(t)), Rw = { code: Au, name: xw, encode: Eu, digest: Cw };
var Pw = Object.freeze({ __proto__: null, identity: Rw });
new TextEncoder(), new TextDecoder();
const wc = { ...Ev, ...Iv, ...Nv, ...Cv, ...Tv, ...zv, ...Vv, ...Qv, ...Zv, ...sw };
({ ...Nw, ...Pw });
function Tw(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t);
}
function Su(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const bc = Su("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ss = Su("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Tw(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Ow = { utf8: bc, "utf-8": bc, hex: wc.base16, latin1: Ss, ascii: Ss, binary: Ss, ...wc };
function Bw(t, e = "utf8") {
  const r = Ow[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : r.decoder.decode(`${r.prefix}${t}`);
}
const Iu = "wc", kw = 2, Do = "core", mr = `${Iu}@2:${Do}:`, Fw = { name: Do, logger: "error" }, Dw = { database: ":memory:" }, qw = "crypto", _c = "client_ed25519_seed", Lw = K.ONE_DAY, Uw = "keychain", $w = "0.3", zw = "messages", Kw = "0.3", jw = K.SIX_HOURS, Vw = "publisher", Mu = "irn", Hw = "error", Nu = "wss://relay.walletconnect.com", Ac = "wss://relay.walletconnect.org", Ww = "relayer", ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Qw = "_subscription", _t = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Gw = K.ONE_SECOND, Yw = "2.13.0", Jw = 1e4, Xw = "0.3", Zw = "WALLETCONNECT_CLIENT_ID", Dt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, e2 = "subscription", t2 = "0.3", r2 = K.FIVE_SECONDS * 1e3, i2 = "pairing", n2 = "0.3", Ni = { wc_pairingDelete: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: K.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: K.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 0 } } }, Xr = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Nt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, s2 = "history", o2 = "0.3", a2 = "expirer", At = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, c2 = "0.3", Is = "verify-api", Zr = "https://verify.walletconnect.com", Xs = "https://verify.walletconnect.org", h2 = [Zr, Xs], l2 = "echo", u2 = "https://echo.walletconnect.com";
class f2 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Uw, this.version = $w, this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, n) => {
      this.isInitialized(), this.keychain.set(i, n), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.keychain.get(i);
      if (typeof n > "u") {
        const { message: s } = D("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(s);
      }
      return n;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = ft(r, this.name);
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, El(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Sl(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class d2 {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = qw, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = Ko(n);
      return Hu(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = fy();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), o = Ko(s), c = Qs();
      return await Wu(c, n, Lw, o);
    }, this.generateSharedKey = (n, s, o) => {
      this.isInitialized();
      const c = this.getPrivateKey(n), h = dy(c, s);
      return this.setSymKey(h, o);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const o = s || un(n);
      return await this.keychain.set(o, n), o;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, o) => {
      this.isInitialized();
      const c = fu(o), h = Eo(s);
      if (nc(c)) {
        const b = c.senderPublicKey, A = c.receiverPublicKey;
        n = await this.generateSharedKey(b, A);
      }
      const u = this.getSymKey(n), { type: d, senderPublicKey: m } = c;
      return gy({ type: d, symKey: u, message: h, senderPublicKey: m });
    }, this.decode = async (n, s, o) => {
      this.isInitialized();
      const c = vy(s, o);
      if (nc(c)) {
        const h = c.receiverPublicKey, u = c.senderPublicKey;
        n = await this.generateSharedKey(h, u);
      }
      try {
        const h = this.getSymKey(n), u = my({ symKey: h, encoded: s });
        return Ao(u);
      } catch (h) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
      }
    }, this.getPayloadType = (n) => {
      const s = Sn(n);
      return Qi(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Sn(n);
      return s.senderPublicKey ? It(s.senderPublicKey, it) : void 0;
    }, this.core = e, this.logger = ft(r, this.name), this.keychain = i || new f2(this.core, this.logger);
  }
  get context() {
    return yt(this.logger);
  }
  async setPrivateKey(e, r) {
    return await this.keychain.set(e, r), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(_c);
    } catch {
      e = Qs(), await this.keychain.set(_c, e);
    }
    return Bw(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class p2 extends yp {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = zw, this.version = Kw, this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, n) => {
      this.isInitialized();
      const s = Lr(n);
      let o = this.messages.get(i);
      return typeof o > "u" && (o = {}), typeof o[s] < "u" || (o[s] = n, this.messages.set(i, o), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), o = Lr(n);
      return typeof s[o] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = ft(e, this.name), this.core = r;
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, El(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Sl(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class g2 extends vp {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new er.EventEmitter(), this.name = Vw, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = K.toMiliseconds(K.ONE_MINUTE), this.failedPublishTimeout = K.toMiliseconds(K.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      const c = (s == null ? void 0 : s.ttl) || jw, h = Gs(s), u = (s == null ? void 0 : s.prompt) || !1, d = (s == null ? void 0 : s.tag) || 0, m = (s == null ? void 0 : s.id) || Dr().toString(), b = { topic: i, message: n, opts: { ttl: c, relay: h, prompt: u, tag: d, id: m } }, A = `Failed to publish payload, please try again. id:${m} tag:${d}`, E = Date.now();
      let N, I = 1;
      try {
        for (; N === void 0; ) {
          if (Date.now() - E > this.publishTimeout)
            throw new Error(A);
          this.logger.trace({ id: m, attempts: I }, `publisher.publish - attempt ${I}`), N = await await ti(this.rpcPublish(i, n, c, h, u, d, m).catch((x) => this.logger.warn(x)), this.publishTimeout, A), I++, N || await new Promise((x) => setTimeout(x, this.failedPublishTimeout));
        }
        this.relayer.events.emit(ht.publish, b), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: m, topic: i, message: n, opts: s } });
      } catch (x) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(x), (o = s == null ? void 0 : s.internal) != null && o.throwOnFailedPublish)
          throw x;
        this.queue.set(m, b);
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.relayer = e, this.logger = ft(r, this.name), this.registerEventListeners();
  }
  get context() {
    return yt(this.logger);
  }
  rpcPublish(e, r, i, n, s, o, c) {
    var h, u, d, m;
    const b = { method: Ri(n.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: s, tag: o }, id: c };
    return ct((h = b.params) == null ? void 0 : h.prompt) && ((u = b.params) == null || delete u.prompt), ct((d = b.params) == null ? void 0 : d.tag) && ((m = b.params) == null || delete m.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: b }), this.relayer.request(b);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: i, opts: n } = e;
      await this.publish(r, i, n);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Vi.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(ht.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(ht.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class m2 {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const i = this.get(e);
      this.exists(e, r) || this.map.set(e, [...i, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, r))
        return;
      const n = i.filter((s) => s !== r);
      if (!n.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, n);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var y2 = Object.defineProperty, v2 = Object.defineProperties, w2 = Object.getOwnPropertyDescriptors, Ec = Object.getOwnPropertySymbols, b2 = Object.prototype.hasOwnProperty, _2 = Object.prototype.propertyIsEnumerable, Sc = (t, e, r) => e in t ? y2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xi = (t, e) => {
  for (var r in e || (e = {}))
    b2.call(e, r) && Sc(t, r, e[r]);
  if (Ec)
    for (var r of Ec(e))
      _2.call(e, r) && Sc(t, r, e[r]);
  return t;
}, Ms = (t, e) => v2(t, w2(e));
class A2 extends _p {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new m2(), this.events = new er.EventEmitter(), this.name = e2, this.version = t2, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = mr, this.subscribeTimeout = K.toMiliseconds(K.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = Gs(n), o = { topic: i, relay: s };
        this.pending.set(i, o);
        const c = await this.rpcSubscribe(i, s);
        return typeof c == "string" && (this.onSubscribe(c, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } })), c;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), typeof (n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n);
    }, this.isSubscribed = async (i) => {
      if (this.topics.includes(i))
        return !0;
      const n = `${this.pendingSubscriptionWatchLabel}_${i}`;
      return await new Promise((s, o) => {
        const c = new K.Watch();
        c.start(n);
        const h = setInterval(() => {
          !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h), c.stop(n), s(!0)), c.elapsed(n) >= r2 && (clearInterval(h), c.stop(n), o(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = ft(r, this.name), this.clientId = "";
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, r) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === r;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (n) => await this.unsubscribeById(e, n, r)));
  }
  async unsubscribeById(e, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    try {
      const n = Gs(i);
      await this.rpcUnsubscribe(e, r, n);
      const s = ae("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: Ri(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ti(this.relayer.request(i).catch((n) => this.logger.warn(n)), this.subscribeTimeout) ? Lr(e + this.clientId) : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: Ri(r.protocol).batchSubscribe, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ti(this.relayer.request(i).catch((n) => this.logger.warn(n)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(ht.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: Ri(r.protocol).batchFetchMessages, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let n;
    try {
      n = await await ti(this.relayer.request(i).catch((s) => this.logger.warn(s)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(ht.connection_stalled);
    }
    return n;
  }
  rpcUnsubscribe(e, r, i) {
    const n = { method: Ri(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ms(xi({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, xi({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, i) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, r) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: r }), this.addSubscription(e, r);
  }
  addSubscription(e, r) {
    this.subscriptions.set(e, xi({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Dt.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: i } = D("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Dt.deleted, Ms(xi({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Dt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i), await this.batchSubscribe(i);
      }
    }
    this.events.emit(Dt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = D("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const r = await this.rpcBatchSubscribe(e);
    Gi(r) && this.onBatchSubscribe(r.map((i, n) => Ms(xi({}, e[n]), { id: i })));
  }
  async batchFetchMessages(e) {
    if (!e.length)
      return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const r = await this.rpcBatchFetchMessages(e);
    r && r.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(r.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected)
      return;
    const e = [];
    this.pending.forEach((r) => {
      e.push(r);
    }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Vi.pulse, async () => {
      await this.checkPending();
    }), this.events.on(Dt.created, async (e) => {
      const r = Dt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Dt.deleted, async (e) => {
      const r = Dt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), e());
      }, this.pollingInterval);
    });
  }
}
var E2 = Object.defineProperty, Ic = Object.getOwnPropertySymbols, S2 = Object.prototype.hasOwnProperty, I2 = Object.prototype.propertyIsEnumerable, Mc = (t, e, r) => e in t ? E2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, M2 = (t, e) => {
  for (var r in e || (e = {}))
    S2.call(e, r) && Mc(t, r, e[r]);
  if (Ic)
    for (var r of Ic(e))
      I2.call(e, r) && Mc(t, r, e[r]);
  return t;
};
class N2 extends wp {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new er.EventEmitter(), this.name = Ww, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = K.toMiliseconds(K.THIRTY_SECONDS + K.ONE_SECOND), this.request = async (r) => {
      var i, n;
      this.logger.debug("Publishing Request Payload");
      const s = r.id || Dr().toString();
      await this.toEstablishConnection();
      try {
        const o = this.provider.request(r);
        this.requestsInFlight.set(s, { promise: o, request: r }), this.logger.trace({ id: s, method: r.method, topic: (i = r.params) == null ? void 0 : i.topic }, "relayer.request - attempt to publish...");
        const c = await new Promise(async (h, u) => {
          const d = () => {
            u(new Error(`relayer.request - publish interrupted, id: ${s}`));
          };
          this.provider.on(_t.disconnect, d);
          const m = await o;
          this.provider.off(_t.disconnect, d), h(m);
        });
        return this.logger.trace({ id: s, method: r.method, topic: (n = r.params) == null ? void 0 : n.topic }, "relayer.request - published"), c;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${s}`), o;
      } finally {
        this.requestsInFlight.delete(s);
      }
    }, this.resetPingTimeout = () => {
      if (Li())
        try {
          clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
            var r, i, n;
            (n = (i = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : i.socket) == null || n.terminate();
          }, this.heartBeatTimeout);
        } catch (r) {
          this.logger.warn(r);
        }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.startPingTimeout(), this.events.emit(ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(ht.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(_t.payload, this.onPayloadHandler), this.provider.on(_t.connect, this.onConnectHandler), this.provider.on(_t.disconnect, this.onDisconnectHandler), this.provider.on(_t.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ft(e.logger, this.name) : $c(Zs({ level: e.logger || Hw })), this.messages = new p2(this.logger, e.core), this.subscriber = new A2(this, this.logger), this.publisher = new g2(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Nu, this.projectId = e.projectId, this.bundleId = rg(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ac}...`), await this.restartTransport(Ac);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Jw);
  }
  get context() {
    return yt(this.logger);
  }
  get connected() {
    var e, r, i;
    return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 1;
  }
  get connecting() {
    var e, r, i;
    return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 0;
  }
  async publish(e, r, i) {
    this.isInitialized(), await this.publisher.publish(e, r, i), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var i;
    this.isInitialized();
    let n = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", s;
    const o = (c) => {
      c.topic === e && (this.subscriber.off(Dt.created, o), s());
    };
    return await Promise.all([new Promise((c) => {
      s = c, this.subscriber.on(Dt.created, o);
    }), new Promise(async (c) => {
      n = await this.subscriber.subscribe(e, r) || n, c();
    })]), n;
  }
  async unsubscribe(e, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, r);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0)
      try {
        await Promise.all(Array.from(this.requestsInFlight.values()).map((e) => e.promise));
      } catch (e) {
        this.logger.warn(e);
      }
    this.hasExperiencedNetworkDisruption || this.connected ? await ti(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    try {
      await new Promise(async (r, i) => {
        const n = () => {
          this.provider.off(_t.disconnect, n), i(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(_t.disconnect, n), await ti(this.provider.connect(), K.toMiliseconds(K.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((s) => {
          i(s);
        }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, r();
      });
    } catch (r) {
      this.logger.error(r);
      const i = r;
      if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(i.message))
        throw r;
    } finally {
      this.connectionAttemptInProgress = !1;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await pc())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const r = e.sort((i, n) => i.publishedAt - n.publishedAt);
    this.logger.trace(`Batch of ${r.length} message events sorted`);
    for (const i of r)
      try {
        await this.onMessageEvent(i);
      } catch (n) {
        this.logger.warn(n);
      }
    this.logger.trace(`Batch of ${r.length} message events processed`);
  }
  startPingTimeout() {
    var e, r, i, n, s;
    if (Li())
      try {
        (r = (e = this.provider) == null ? void 0 : e.connection) != null && r.socket && ((s = (n = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : n.socket) == null || s.once("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (o) {
        this.logger.warn(o);
      }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Ju(new Qu(cg({ sdkVersion: Yw, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: i } = e;
    await this.messages.set(r, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const n = this.messages.has(r, i);
    return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), eo(e)) {
      if (!e.method.endsWith(Qw))
        return;
      const r = e.params, { topic: i, message: n, publishedAt: s } = r.data, o = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(M2({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      Nn(e) && this.events.emit(ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = to(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(_t.payload, this.onPayloadHandler), this.provider.off(_t.connect, this.onConnectHandler), this.provider.off(_t.disconnect, this.onDisconnectHandler), this.provider.off(_t.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await pc();
    cv(async (r) => {
      e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(ht.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e));
    }, K.toMiliseconds(Gw));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e) => {
      const r = setInterval(() => {
        this.connected && (clearInterval(r), e());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
}
var x2 = Object.defineProperty, Nc = Object.getOwnPropertySymbols, C2 = Object.prototype.hasOwnProperty, R2 = Object.prototype.propertyIsEnumerable, xc = (t, e, r) => e in t ? x2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cc = (t, e) => {
  for (var r in e || (e = {}))
    C2.call(e, r) && xc(t, r, e[r]);
  if (Nc)
    for (var r of Nc(e))
      R2.call(e, r) && xc(t, r, e[r]);
  return t;
};
class Wr extends bp {
  constructor(e, r, i, n = mr, s = void 0) {
    super(e, r, i, n), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = Xw, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !ct(o) ? this.map.set(this.getKey(o), o) : Ly(o) ? this.map.set(o.id, o) : Uy(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, c) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: c }), this.map.set(o, c), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((c) => Object.keys(o).every((h) => ju(c[h], o[h]))) : this.values), this.update = async (o, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: c });
      const h = Cc(Cc({}, this.getData(o)), c);
      this.map.set(o, h), await this.persist();
    }, this.delete = async (o, c) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: c }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }, this.logger = ft(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const r = this.map.get(e);
    if (!r) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: n } = D("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(n), new Error(n);
      }
      const { message: i } = D("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: r } = D("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class P2 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = i2, this.version = n2, this.events = new Uc(), this.initialized = !1, this.storagePrefix = mr, this.ignoredPayloadTypes = [gr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async (i) => {
      this.isInitialized();
      const n = Qs(), s = await this.core.crypto.setSymKey(n), o = Ye(K.FIVE_MINUTES), c = { protocol: Mu }, h = { topic: s, expiry: o, relay: c, active: !1 }, u = Cy({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: c, expiryTimestamp: o, methods: i == null ? void 0 : i.methods });
      return this.core.expirer.set(s, o), await this.pairings.set(s, h), await this.core.relayer.subscribe(s), { topic: s, uri: u };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: o, expiryTimestamp: c, methods: h } = cc(i.uri);
      let u;
      if (this.pairings.keys.includes(n) && (u = this.pairings.get(n), u.active))
        throw new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
      const d = c || Ye(K.FIVE_MINUTES), m = { topic: n, relay: o, expiry: d, active: !1, methods: h };
      return this.core.expirer.set(n, d), await this.pairings.set(n, m), i.activatePairing && await this.activate({ topic: n }), this.events.emit(Xr.create, m), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: o }), m;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Ye(K.THIRTY_DAYS);
      this.core.expirer.set(i, n), await this.pairings.update(i, { active: !0, expiry: n });
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: o, resolve: c, reject: h } = kr();
        this.events.once(te("pairing_ping", s), ({ error: u }) => {
          u ? h(u) : c();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: n }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: n });
    }, this.updateMetadata = async ({ topic: i, metadata: n }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: n });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: n } = i;
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", ae("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const o = ei(n, s), c = await this.core.crypto.encode(i, o), h = Ni[n].req;
      return this.core.history.set(i, o), this.core.relayer.publish(i, c, h), o.id;
    }, this.sendResult = async (i, n, s) => {
      const o = to(i, s), c = await this.core.crypto.encode(n, o), h = await this.core.history.get(n, i), u = Ni[h.request.method].res;
      await this.core.relayer.publish(n, c, u), await this.core.history.resolve(o);
    }, this.sendError = async (i, n, s) => {
      const o = zc(i, s), c = await this.core.crypto.encode(n, o), h = await this.core.history.get(n, i), u = Ni[h.request.method] ? Ni[h.request.method].res : Ni.unregistered_method.res;
      await this.core.relayer.publish(n, c, u), await this.core.history.resolve(o);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, ae("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => hr(n.expiry));
      await Promise.all(i.map((n) => this.deletePairing(n.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: n, payload: s } = i;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(n, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(n, s);
        default:
          return this.onUnknownRpcMethodRequest(n, s);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: n, payload: s } = i, o = (await this.core.history.get(n, s.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(n, s);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(s, i, !0), this.events.emit(Xr.ping, { id: s, topic: i });
      } catch (o) {
        await this.sendError(s, i, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (i, n) => {
      const { id: s } = n;
      setTimeout(() => {
        Qt(n) ? this.events.emit(te("pairing_ping", s), {}) : Ct(n) && this.events.emit(te("pairing_ping", s), { error: n.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(Xr.delete, { id: s, topic: i });
      } catch (o) {
        await this.sendError(s, i, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (i, n) => {
      const { id: s, method: o } = n;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const c = ae("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(s, i, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(s, i, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(ae("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      var n;
      if (!ot(i)) {
        const { message: o } = D("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(o);
      }
      if (!qy(i.uri)) {
        const { message: o } = D("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(o);
      }
      const s = cc(i.uri);
      if (!((n = s == null ? void 0 : s.relay) != null && n.protocol)) {
        const { message: o } = D("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(s != null && s.symKey)) {
        const { message: o } = D("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
      if (s != null && s.expiryTimestamp && K.toMiliseconds(s == null ? void 0 : s.expiryTimestamp) < Date.now()) {
        const { message: o } = D("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o);
      }
    }, this.isValidPing = async (i) => {
      if (!ot(i)) {
        const { message: s } = D("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!ot(i)) {
        const { message: s } = D("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidPairingTopic = async (i) => {
      if (!Ve(i, !1)) {
        const { message: n } = D("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = D("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (hr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = D("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = e, this.logger = ft(r, this.name), this.pairings = new Wr(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return yt(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: i } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      try {
        eo(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Nn(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(At.expired, async (e) => {
      const { topic: r } = Ml(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Xr.expire, { topic: r }));
    });
  }
}
class T2 extends mp {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new er.EventEmitter(), this.name = s2, this.version = o2, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const o = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Ye(K.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(Nt.created, o);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Ct(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.persist(), this.events.emit(Nt.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(Nt.deleted, s);
        }
      }), this.persist();
    }, this.exists = async (i, n) => (this.isInitialized(), this.records.has(n) ? (await this.getRecord(n)).topic === i : !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = ft(r, this.name);
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const i = { topic: r.topic, request: ei(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const r = this.records.get(e);
    if (!r) {
      const { message: i } = D("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Nt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = D("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Nt.created, (e) => {
      const r = Nt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.events.on(Nt.updated, (e) => {
      const r = Nt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.events.on(Nt.deleted, (e) => {
      const r = Nt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.core.heartbeat.on(Vi.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((r) => {
        K.toMiliseconds(r.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${r.id}`), this.records.delete(r.id), this.events.emit(Nt.deleted, r, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class O2 extends Ap {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new er.EventEmitter(), this.name = a2, this.version = c2, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const n = this.formatTarget(i);
        return typeof this.getExpiration(n) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, n) => {
      this.isInitialized();
      const s = this.formatTarget(i), o = { target: s, expiry: n };
      this.expirations.set(s, o), this.checkExpiry(s, o), this.events.emit(At.created, { target: s, expiration: o });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(At.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = ft(r, this.name);
  }
  get context() {
    return yt(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return hg(e);
    if (typeof e == "number")
      return lg(e);
    const { message: r } = D("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(At.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = D("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const r = this.expirations.get(e);
    if (!r) {
      const { message: i } = D("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: i } = r;
    K.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(At.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Vi.pulse, () => this.checkExpirations()), this.events.on(At.created, (e) => {
      const r = At.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(At.expired, (e) => {
      const r = At.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(At.deleted, (e) => {
      const r = At.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class B2 extends Ep {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Is, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || mi() || !yi())
        return;
      const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Xs;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      let s;
      try {
        s = await this.fetchAttestation(i.attestationId, n);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.info(o), s = await this.fetchAttestation(i.attestationId, Xs);
      }
      return s;
    }, this.fetchAttestation = async (i, n) => {
      this.logger.info(`resolving attestation: ${i} from url: ${n}`);
      const s = this.startAbortTimer(K.ONE_SECOND * 2), o = await fetch(`${n}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(s), o.status === 200 ? await o.json() : void 0;
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var n;
      try {
        if (!this.iframe)
          return;
        (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const n = (s) => {
        s.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", n), i());
      };
      await Promise.race([new Promise((s) => {
        const o = document.getElementById(Is);
        if (o)
          return this.iframe = o, this.onInit(), s();
        window.addEventListener("message", n);
        const c = document.createElement("iframe");
        c.id = Is, c.src = `${this.verifyUrl}/${this.projectId}`, c.style.display = "none", document.body.append(c), this.iframe = c, i = s;
      }), new Promise((s, o) => setTimeout(() => {
        window.removeEventListener("message", n), o("verify iframe load timeout");
      }, K.toMiliseconds(K.FIVE_SECONDS)))]);
    }, this.onInit = () => {
      this.initialized = !0, this.processQueue();
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (i) => {
      let n = i || Zr;
      return h2.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Zr}`), n = Zr), n;
    }, this.logger = ft(r, this.name), this.verifyUrl = Zr, this.abortController = new AbortController(), this.isDevEnv = Li() && Y.process.env.IS_VITEST;
  }
  get context() {
    return yt(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), K.toMiliseconds(e));
  }
}
let k2 = class extends Sp {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = l2, this.registerDeviceToken = async (i) => {
      const { clientId: n, token: s, notificationType: o, enableEncrypted: c = !1 } = i, h = `${u2}/${this.projectId}/clients`;
      await Gu(h, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: n, type: o, token: s, always_raw: c }) });
    }, this.logger = ft(r, this.context);
  }
};
var F2 = Object.defineProperty, Rc = Object.getOwnPropertySymbols, D2 = Object.prototype.hasOwnProperty, q2 = Object.prototype.propertyIsEnumerable, Pc = (t, e, r) => e in t ? F2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tc = (t, e) => {
  for (var r in e || (e = {}))
    D2.call(e, r) && Pc(t, r, e[r]);
  if (Rc)
    for (var r of Rc(e))
      q2.call(e, r) && Pc(t, r, e[r]);
  return t;
};
let L2 = class xu extends gp {
  constructor(e) {
    var r;
    super(e), this.protocol = Iu, this.version = kw, this.name = Do, this.events = new er.EventEmitter(), this.initialized = !1, this.on = (o, c) => this.events.on(o, c), this.once = (o, c) => this.events.once(o, c), this.off = (o, c) => this.events.off(o, c), this.removeListener = (o, c) => this.events.removeListener(o, c), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Nu, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = Zs({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : Fw.logger }), { logger: n, chunkLoggerController: s } = Vu({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = s, (r = this.logChunkController) != null && r.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var o, c;
      (o = this.logChunkController) != null && o.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = ft(n, this.name), this.heartbeat = new So(), this.crypto = new d2(this, this.logger, e == null ? void 0 : e.keychain), this.history = new T2(this, this.logger), this.expirer = new O2(this, this.logger), this.storage = e != null && e.storage ? e.storage : new dp(Tc(Tc({}, Dw), e == null ? void 0 : e.storageOptions)), this.relayer = new N2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new P2(this, this.logger), this.verify = new B2(this.projectId || "", this.logger), this.echoClient = new k2(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new xu(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(Zw, i), r;
  }
  get context() {
    return yt(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
const U2 = L2;
class $2 {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class z2 {
  constructor(e) {
    this.client = e;
  }
}
const Cu = "wc", Ru = 2, Pu = "client", qo = `${Cu}@${Ru}:${Pu}:`, Ns = { name: Pu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Oc = "WALLETCONNECT_DEEPLINK_CHOICE", K2 = "proposal", j2 = "Proposal expired", V2 = "session", Gr = K.SEVEN_DAYS, H2 = "engine", dt = { wc_sessionPropose: { req: { ttl: K.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: K.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: K.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: K.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: K.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: K.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: K.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: K.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: K.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: K.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: K.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: K.ONE_HOUR, prompt: !1, tag: 1117 } } }, xs = { min: K.FIVE_MINUTES, max: K.SEVEN_DAYS }, Wt = { idle: "IDLE", active: "ACTIVE" }, W2 = "request", Q2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"], G2 = "wc", Y2 = "auth", J2 = "authKeys", X2 = "pairingTopics", Z2 = "requests", qn = `${G2}@${1.5}:${Y2}:`, fn = `${qn}:PUB_KEY`;
var eb = Object.defineProperty, tb = Object.defineProperties, rb = Object.getOwnPropertyDescriptors, Bc = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, nb = Object.prototype.propertyIsEnumerable, kc = (t, e, r) => e in t ? eb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, He = (t, e) => {
  for (var r in e || (e = {}))
    ib.call(e, r) && kc(t, r, e[r]);
  if (Bc)
    for (var r of Bc(e))
      nb.call(e, r) && kc(t, r, e[r]);
  return t;
}, Br = (t, e) => tb(t, rb(e));
class sb extends z2 {
  constructor(e) {
    super(e), this.name = H2, this.events = new Uc(), this.initialized = !1, this.requestQueue = { state: Wt.idle, queue: [] }, this.sessionRequestQueue = { state: Wt.idle, queue: [] }, this.requestQueueDelay = K.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(dt) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, K.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = Br(He({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: o, sessionProperties: c, relays: h } = i;
      let u = n, d, m = !1;
      try {
        u && (m = this.client.core.pairing.pairings.get(u).active);
      } catch (C) {
        throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`), C;
      }
      if (!u || !m) {
        const { topic: C, uri: k } = await this.client.core.pairing.create();
        u = C, d = k;
      }
      if (!u) {
        const { message: C } = D("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(C);
      }
      const b = await this.client.core.crypto.generateKeyPair(), A = dt.wc_sessionPropose.req.ttl || K.FIVE_MINUTES, E = Ye(A), N = He({ requiredNamespaces: s, optionalNamespaces: o, relays: h ?? [{ protocol: Mu }], proposer: { publicKey: b, metadata: this.client.metadata }, expiryTimestamp: E }, c && { sessionProperties: c }), { reject: I, resolve: x, done: R } = kr(A, j2);
      this.events.once(te("session_connect"), async ({ error: C, session: k }) => {
        if (C)
          I(C);
        else if (k) {
          k.self.publicKey = b;
          const F = Br(He({}, k), { requiredNamespaces: N.requiredNamespaces, optionalNamespaces: N.optionalNamespaces });
          await this.client.session.set(k.topic, F), await this.setExpiry(k.topic, k.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: k.peer.metadata }), x(F);
        }
      });
      const P = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: N, throwOnFailedPublish: !0 });
      return await this.setProposal(P, He({ id: P }, N)), { uri: d, approval: R };
    }, this.pair = async (r) => {
      await this.isInitialized();
      try {
        return await this.client.core.pairing.pair(r);
      } catch (i) {
        throw this.client.logger.error("pair() failed"), i;
      }
    }, this.approve = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidApprove(r);
      } catch (R) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), R;
      }
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: o, sessionConfig: c } = r;
      let h;
      try {
        h = this.client.proposal.get(i);
      } catch (R) {
        throw this.client.logger.error(`approve() -> proposal.get(${i}) failed`), R;
      }
      let { pairingTopic: u, proposer: d, requiredNamespaces: m, optionalNamespaces: b } = h;
      u = u || "";
      const A = await this.client.core.crypto.generateKeyPair(), E = d.publicKey, N = await this.client.core.crypto.generateSharedKey(A, E), I = He(He({ relay: { protocol: n ?? "irn" }, namespaces: s, pairingTopic: u, controller: { publicKey: A, metadata: this.client.metadata }, expiry: Ye(Gr) }, o && { sessionProperties: o }), c && { sessionConfig: c });
      await this.client.core.relayer.subscribe(N);
      const x = Br(He({}, I), { topic: N, requiredNamespaces: m, optionalNamespaces: b, pairingTopic: u, acknowledged: !1, self: I.controller, peer: { publicKey: d.publicKey, metadata: d.metadata }, controller: A });
      await this.client.session.set(N, x);
      try {
        await this.sendResult({ id: i, topic: u, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: A }, throwOnFailedPublish: !0 }), await this.sendRequest({ topic: N, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      } catch (R) {
        throw this.client.logger.error(R), this.client.session.delete(N, ae("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(N), R;
      }
      return await this.client.core.pairing.updateMetadata({ topic: u, metadata: d.metadata }), await this.client.proposal.delete(i, ae("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }), await this.setExpiry(N, Ye(Gr)), { topic: N, acknowledged: () => new Promise((R) => setTimeout(() => R(this.client.session.get(N)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidReject(r);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: i, reason: n } = r;
      let s;
      try {
        s = this.client.proposal.get(i).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`), o;
      }
      s && (await this.sendError({ id: i, topic: s, error: n }), await this.client.proposal.delete(i, ae("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidUpdate(r);
      } catch (m) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), m;
      }
      const { topic: i, namespaces: n } = r, { done: s, resolve: o, reject: c } = kr(), h = Qr(), u = Dr().toString(), d = this.client.session.get(i).namespaces;
      return this.events.once(te("session_update", h), ({ error: m }) => {
        m ? c(m) : o();
      }), await this.client.session.update(i, { namespaces: n }), await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n }, throwOnFailedPublish: !0, clientRpcId: h, relayRpcId: u }).catch((m) => {
        this.client.logger.error(m), this.client.session.update(i, { namespaces: d }), c(m);
      }), { acknowledged: s };
    }, this.extend = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidExtend(r);
      } catch (h) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), h;
      }
      const { topic: i } = r, n = Qr(), { done: s, resolve: o, reject: c } = kr();
      return this.events.once(te("session_extend", n), ({ error: h }) => {
        h ? c(h) : o();
      }), await this.setExpiry(i, Ye(Gr)), this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {}, clientRpcId: n, throwOnFailedPublish: !0 }).catch((h) => {
        c(h);
      }), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidRequest(r);
      } catch (A) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), A;
      }
      const { chainId: i, request: n, topic: s, expiry: o = dt.wc_sessionRequest.req.ttl } = r, c = this.client.session.get(s), h = Qr(), u = Dr().toString(), { done: d, resolve: m, reject: b } = kr(o, "Request expired. Please try again.");
      return this.events.once(te("session_request", h), ({ error: A, result: E }) => {
        A ? b(A) : m(E);
      }), await Promise.all([new Promise(async (A) => {
        await this.sendRequest({ clientRpcId: h, relayRpcId: u, topic: s, method: "wc_sessionRequest", params: { request: Br(He({}, n), { expiryTimestamp: Ye(o) }), chainId: i }, expiry: o, throwOnFailedPublish: !0 }).catch((E) => b(E)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: h }), A();
      }), new Promise(async (A) => {
        var E;
        if (!((E = c.sessionConfig) != null && E.disableDeepLink)) {
          const N = await dg(this.client.core.storage, Oc);
          fg({ id: h, topic: s, wcDeepLink: N });
        }
        A();
      }), d()]).then((A) => A[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      Qt(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Ct(n) && await this.sendError({ id: s, topic: i, error: n.error }), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized();
      try {
        await this.isValidPing(r);
      } catch (n) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), n;
      }
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = Qr(), s = Dr().toString(), { done: o, resolve: c, reject: h } = kr();
        this.events.once(te("session_ping", n), ({ error: u }) => {
          u ? h(u) : c();
        }), await Promise.all([this.sendRequest({ topic: i, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: n, relayRpcId: s }), o()]);
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: n, chainId: s } = r, o = Dr().toString();
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: n, chainId: s }, throwOnFailedPublish: !0, relayRpcId: o });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i))
        await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: ae("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: i, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(i))
        await this.client.core.pairing.disconnect({ topic: i });
      else {
        const { message: n } = D("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
        throw new Error(n);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Fy(i, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (r) => {
      this.isInitialized(), this.isValidAuthenticate(r);
      const { chains: i, statement: n = "", uri: s, domain: o, nonce: c, type: h, exp: u, nbf: d, methods: m = [], expiry: b } = r, A = [...r.resources || []], { topic: E, uri: N } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"] });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: E, uri: N } });
      const I = await this.client.core.crypto.generateKeyPair(), x = un(I);
      if (await Promise.all([this.client.auth.authKeys.set(fn, { responseTopic: x, publicKey: I }), this.client.auth.pairingTopics.set(x, { topic: x, pairingTopic: E })]), await this.client.core.relayer.subscribe(x), this.client.logger.info(`sending request to new pairing topic: ${E}`), m.length > 0) {
        const { namespace: a } = os(i[0]);
        let f = oy(a, "request", m);
        ln(A) && (f = cy(f, A.pop())), A.push(f);
      }
      const R = b && b > dt.wc_sessionAuthenticate.req.ttl ? b : dt.wc_sessionAuthenticate.req.ttl, P = { authPayload: { type: h ?? "caip122", chains: i, statement: n, aud: s, domain: o, version: "1", nonce: c, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: u, nbf: d, resources: A }, requester: { publicKey: I, metadata: this.client.metadata }, expiryTimestamp: Ye(R) }, C = { eip155: { chains: i, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m])], events: ["chainChanged", "accountsChanged"] } }, k = { requiredNamespaces: {}, optionalNamespaces: C, relays: [{ protocol: "irn" }], proposer: { publicKey: I, metadata: this.client.metadata }, expiryTimestamp: Ye(dt.wc_sessionPropose.req.ttl) }, { done: F, resolve: q, reject: $ } = kr(R, "Request expired"), X = async ({ error: a, session: f }) => {
        if (this.events.off(te("session_request", Z), se), a)
          $(a);
        else if (f) {
          f.self.publicKey = I, await this.client.session.set(f.topic, f), await this.setExpiry(f.topic, f.expiry), E && await this.client.core.pairing.updateMetadata({ topic: E, metadata: f.peer.metadata });
          const g = this.client.session.get(f.topic);
          await this.deleteProposal(oe), q({ session: g });
        }
      }, se = async (a) => {
        if (await this.deletePendingAuthRequest(Z, { message: "fulfilled", code: 0 }), a.error) {
          const w = ae("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return a.error.code === w.code ? void 0 : (this.events.off(te("session_connect"), X), $(a.error.message));
        }
        await this.deleteProposal(oe), this.events.off(te("session_connect"), X);
        const { cacaos: f, responder: g } = a.result, v = [], _ = [];
        for (const w of f) {
          await ec({ cacao: w, projectId: this.client.core.projectId }) || (this.client.logger.error(w, "Signature verification failed"), $(ae("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: l } = w, y = ln(l.resources), Q = [Za(l.iss)], H = En(l.iss);
          if (y) {
            const p = tc(y), O = rc(y);
            v.push(...p), Q.push(...O);
          }
          for (const p of Q)
            _.push(`${p}:${H}`);
        }
        const S = await this.client.core.crypto.generateSharedKey(I, g.publicKey);
        let M;
        v.length > 0 && (M = { topic: S, acknowledged: !0, self: { publicKey: I, metadata: this.client.metadata }, peer: g, controller: g.publicKey, expiry: Ye(Gr), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: E, namespaces: hc([...new Set(v)], [...new Set(_)]) }, await this.client.core.relayer.subscribe(S), await this.client.session.set(S, M), M = this.client.session.get(S)), q({ auths: f, session: M });
      }, Z = Qr(), oe = Qr();
      this.events.once(te("session_connect"), X), this.events.once(te("session_request", Z), se);
      try {
        await Promise.all([this.sendRequest({ topic: E, method: "wc_sessionAuthenticate", params: P, expiry: r.expiry, throwOnFailedPublish: !0, clientRpcId: Z }), this.sendRequest({ topic: E, method: "wc_sessionPropose", params: k, expiry: dt.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: oe })]);
      } catch (a) {
        throw this.events.off(te("session_connect"), X), this.events.off(te("session_request", Z), se), a;
      }
      return await this.setProposal(oe, He({ id: oe }, k)), await this.setAuthRequest(Z, { request: Br(He({}, P), { verifyContext: {} }), pairingTopic: E }), { uri: N, response: F };
    }, this.approveSessionAuthenticate = async (r) => {
      this.isInitialized();
      const { id: i, auths: n } = r, s = this.getPendingAuthRequest(i);
      if (!s)
        throw new Error(`Could not find pending auth request with id ${i}`);
      const o = s.requester.publicKey, c = await this.client.core.crypto.generateKeyPair(), h = un(o), u = { type: gr, receiverPublicKey: o, senderPublicKey: c }, d = [], m = [];
      for (const E of n) {
        if (!await ec({ cacao: E, projectId: this.client.core.projectId })) {
          const P = ae("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: i, topic: h, error: P, encodeOpts: u }), new Error(P.message);
        }
        const { p: N } = E, I = ln(N.resources), x = [Za(N.iss)], R = En(N.iss);
        if (I) {
          const P = tc(I), C = rc(I);
          d.push(...P), x.push(...C);
        }
        for (const P of x)
          m.push(`${P}:${R}`);
      }
      const b = await this.client.core.crypto.generateSharedKey(c, o);
      let A;
      return (d == null ? void 0 : d.length) > 0 && (A = { topic: b, acknowledged: !0, self: { publicKey: c, metadata: this.client.metadata }, peer: { publicKey: o, metadata: s.requester.metadata }, controller: o, expiry: Ye(Gr), authentication: n, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: "", namespaces: hc([...new Set(d)], [...new Set(m)]) }, await this.client.core.relayer.subscribe(b), await this.client.session.set(b, A)), await this.sendResult({ topic: h, id: i, result: { cacaos: n, responder: { publicKey: c, metadata: this.client.metadata } }, encodeOpts: u, throwOnFailedPublish: !0 }), await this.client.auth.requests.delete(i, { message: "fullfilled", code: 0 }), await this.client.core.pairing.activate({ topic: s.pairingTopic }), { session: A };
    }, this.rejectSessionAuthenticate = async (r) => {
      await this.isInitialized();
      const { id: i, reason: n } = r, s = this.getPendingAuthRequest(i);
      if (!s)
        throw new Error(`Could not find pending auth request with id ${i}`);
      const o = s.requester.publicKey, c = await this.client.core.crypto.generateKeyPair(), h = un(o), u = { type: gr, receiverPublicKey: o, senderPublicKey: c };
      await this.sendError({ id: i, topic: h, error: n, encodeOpts: u }), await this.client.auth.requests.delete(i, { message: "rejected", code: 0 }), await this.client.proposal.delete(i, ae("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (r) => {
      this.isInitialized();
      const { request: i, iss: n } = r;
      return cu(i, n);
    }, this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), n = this.client.core.pairing.pairings.getAll().filter((s) => {
            var o, c;
            return ((o = s.peerMetadata) == null ? void 0 : o.url) && ((c = s.peerMetadata) == null ? void 0 : c.url) === r.peer.metadata.url && s.topic && s.topic !== i.topic;
          });
          if (n.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`), await Promise.all(n.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r) => {
      const { topic: i, expirerHasDeleted: n = !1, emitEvent: s = !0, id: o = 0 } = r, { self: c } = this.client.session.get(i);
      await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, ae("USER_DISCONNECTED")), this.addToRecentlyDeleted(i, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), n || this.client.core.expirer.del(i), this.client.core.storage.removeItem(Oc).catch((h) => this.client.logger.warn(h)), this.getPendingSessionRequests().forEach((h) => {
        h.topic === i && this.deletePendingSessionRequest(h.id, ae("USER_DISCONNECTED"));
      }), s && this.client.events.emit("session_delete", { id: o, topic: i });
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, ae("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.addToRecentlyDeleted(r, "proposal");
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.addToRecentlyDeleted(r, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = Wt.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.deletePendingAuthRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.auth.requests.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && (this.client.core.expirer.set(r, i), await this.client.session.update(r, { expiry: i }));
    }, this.setProposal = async (r, i) => {
      this.client.core.expirer.set(r, Ye(dt.wc_sessionPropose.req.ttl)), await this.client.proposal.set(r, i);
    }, this.setAuthRequest = async (r, i) => {
      const { request: n, pairingTopic: s } = i;
      this.client.core.expirer.set(r, n.expiryTimestamp), await this.client.auth.requests.set(r, { authPayload: n.authPayload, requester: n.requester, expiryTimestamp: n.expiryTimestamp, id: r, pairingTopic: s, verifyContext: n.verifyContext });
    }, this.setPendingSessionRequest = async (r) => {
      const { id: i, topic: n, params: s, verifyContext: o } = r, c = s.request.expiryTimestamp || Ye(dt.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(i, c), await this.client.pendingRequest.set(i, { id: i, topic: n, params: s, verifyContext: o });
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: o, relayRpcId: c, clientRpcId: h, throwOnFailedPublish: u } = r, d = ei(n, s, h);
      if (yi() && Q2.includes(n)) {
        const A = Lr(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: A });
      }
      let m;
      try {
        m = await this.client.core.crypto.encode(i, d);
      } catch (A) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`), A;
      }
      const b = dt[n].req;
      return o && (b.ttl = o), c && (b.id = c), this.client.core.history.set(i, d), u ? (b.internal = Br(He({}, b.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, m, b)) : this.client.core.relayer.publish(i, m, b).catch((A) => this.client.logger.error(A)), d.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: o, encodeOpts: c } = r, h = to(i, s);
      let u;
      try {
        u = await this.client.core.crypto.encode(n, h, c);
      } catch (b) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${n} failed`), b;
      }
      let d;
      try {
        d = await this.client.core.history.get(n, i);
      } catch (b) {
        throw this.client.logger.error(`sendResult() -> history.get(${n}, ${i}) failed`), b;
      }
      const m = dt[d.request.method].res;
      o ? (m.internal = Br(He({}, m.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, u, m)) : this.client.core.relayer.publish(n, u, m).catch((b) => this.client.logger.error(b)), await this.client.core.history.resolve(h);
    }, this.sendError = async (r) => {
      const { id: i, topic: n, error: s, encodeOpts: o } = r, c = zc(i, s);
      let h;
      try {
        h = await this.client.core.crypto.encode(n, c, o);
      } catch (m) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${n} failed`), m;
      }
      let u;
      try {
        u = await this.client.core.history.get(n, i);
      } catch (m) {
        throw this.client.logger.error(`sendError() -> history.get(${n}, ${i}) failed`), m;
      }
      const d = dt[u.request.method].res;
      this.client.core.relayer.publish(n, h, d), await this.client.core.history.resolve(c);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        let s = !1;
        hr(n.expiry) && (s = !0), this.client.core.crypto.keychain.has(n.topic) || (s = !0), s && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        hr(n.expiryTimestamp) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession({ topic: n })), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Wt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Wt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = Wt.idle;
    }, this.processRequest = (r) => {
      const { topic: i, payload: n } = r, s = n.method;
      if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: s }))
        switch (s) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(i, n);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(i, n);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(i, n);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(i, n);
          case "wc_sessionPing":
            return this.onSessionPingRequest(i, n);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(i, n);
          case "wc_sessionRequest":
            return this.onSessionRequest(i, n);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(i, n);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateRequest(i, n);
          default:
            return this.client.logger.info(`Unsupported request method ${s}`);
        }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: i, payload: n } = r, s = (await this.client.core.history.get(i, n.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, n);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, n);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(i, n);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: i } = r, { message: n } = D("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(n);
    }, this.shouldIgnorePairingRequest = (r) => {
      const { topic: i, requestMethod: n } = r, s = this.expectedPairingMethodMap.get(i);
      return !s || s.includes(n) ? !1 : !!(s.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidConnect(He({}, i.params));
        const o = n.expiryTimestamp || Ye(dt.wc_sessionPropose.req.ttl), c = He({ id: s, pairingTopic: r, expiryTimestamp: o }, n);
        await this.setProposal(s, c);
        const h = Lr(JSON.stringify(i)), u = await this.getVerifyContext(h, c.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: c, verifyContext: u });
      } catch (o) {
        await this.sendError({ id: s, topic: r, error: o }), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (Qt(i)) {
        const { result: s } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const o = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const c = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const h = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const u = await this.client.core.crypto.generateSharedKey(c, h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: u });
        const d = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else if (Ct(i)) {
        await this.client.proposal.delete(n, ae("USER_DISCONNECTED"));
        const s = te("session_connect");
        if (this.events.listenerCount(s) === 0)
          throw new Error(`emitting ${s} without any listeners, 954`);
        this.events.emit(te("session_connect"), { error: i.error });
      }
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: o, controller: c, expiry: h, namespaces: u, sessionProperties: d, pairingTopic: m, sessionConfig: b } = i.params, A = He(He({ topic: r, relay: o, expiry: h, namespaces: u, acknowledged: !0, pairingTopic: m, requiredNamespaces: {}, optionalNamespaces: {}, controller: c.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: c.publicKey, metadata: c.metadata } }, d && { sessionProperties: d }), b && { sessionConfig: b });
        await this.sendResult({ id: i.id, topic: r, result: !0, throwOnFailedPublish: !0 });
        const E = te("session_connect");
        if (this.events.listenerCount(E) === 0)
          throw new Error(`emitting ${E} without any listeners 997`);
        this.events.emit(te("session_connect"), { session: A }), this.cleanupDuplicatePairings(A);
      } catch (o) {
        await this.sendError({ id: n, topic: r, error: o }), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      Qt(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(te("session_approve", n), {})) : Ct(i) && (await this.client.session.delete(r, ae("USER_DISCONNECTED")), this.events.emit(te("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const o = `${r}_session_update`, c = Mi.get(o);
        if (c && this.isRequestOutOfSync(c, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`), this.sendError({ id: s, topic: r, error: ae("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(He({ topic: r }, n));
        try {
          Mi.set(o, s), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0, throwOnFailedPublish: !0 });
        } catch (h) {
          throw Mi.delete(o), h;
        }
        this.client.events.emit("session_update", { id: s, topic: r, params: n });
      } catch (o) {
        await this.sendError({ id: s, topic: r, error: o }), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i, s = te("session_update", n);
      if (this.events.listenerCount(s) === 0)
        throw new Error(`emitting ${s} without any listeners`);
      Qt(i) ? this.events.emit(te("session_update", n), {}) : Ct(i) && this.events.emit(te("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ye(Gr)), await this.sendResult({ id: n, topic: r, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError({ id: n, topic: r, error: s }), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i, s = te("session_extend", n);
      if (this.events.listenerCount(s) === 0)
        throw new Error(`emitting ${s} without any listeners`);
      Qt(i) ? this.events.emit(te("session_extend", n), {}) : Ct(i) && this.events.emit(te("session_extend", n), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: n, topic: r, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: n, topic: r });
      } catch (s) {
        await this.sendError({ id: n, topic: r, error: s }), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: n } = i, s = te("session_ping", n);
      if (this.events.listenerCount(s) === 0)
        throw new Error(`emitting ${s} without any listeners`);
      setTimeout(() => {
        Qt(i) ? this.events.emit(te("session_ping", n), {}) : Ct(i) && this.events.emit(te("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(ht.publish, async () => {
            s(await this.deleteSession({ topic: r, id: n }));
          });
        }), this.sendResult({ id: n, topic: r, result: !0, throwOnFailedPublish: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: ae("USER_DISCONNECTED") })]);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      var n;
      const { id: s, params: o } = i;
      try {
        await this.isValidRequest(He({ topic: r }, o));
        const c = Lr(JSON.stringify(ei("wc_sessionRequest", o, s))), h = this.client.session.get(r), u = await this.getVerifyContext(c, h.peer.metadata), d = { id: s, topic: r, params: o, verifyContext: u };
        await this.setPendingSessionRequest(d), (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(d) : (this.addSessionRequestToSessionRequestQueue(d), this.processSessionRequestQueue());
      } catch (c) {
        await this.sendError({ id: s, topic: r, error: c }), this.client.logger.error(c);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i, s = te("session_request", n);
      if (this.events.listenerCount(s) === 0)
        throw new Error(`emitting ${s} without any listeners`);
      Qt(i) ? this.events.emit(te("session_request", n), { result: i.result }) : Ct(i) && this.events.emit(te("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const o = `${r}_session_event_${s.event.name}`, c = Mi.get(o);
        if (c && this.isRequestOutOfSync(c, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(He({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), Mi.set(o, n);
      } catch (o) {
        await this.sendError({ id: n, topic: r, error: o }), this.client.logger.error(o);
      }
    }, this.onSessionAuthenticateResponse = (r, i) => {
      const { id: n } = i;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: r, payload: i }), Qt(i) ? this.events.emit(te("session_request", n), { result: i.result }) : Ct(i) && this.events.emit(te("session_request", n), { error: i.error });
    }, this.onSessionAuthenticateRequest = async (r, i) => {
      const { requester: n, authPayload: s, expiryTimestamp: o } = i.params, c = Lr(JSON.stringify(i)), h = await this.getVerifyContext(c, this.client.metadata), u = { requester: n, pairingTopic: r, id: i.id, authPayload: s, verifyContext: h, expiryTimestamp: o };
      await this.setAuthRequest(i.id, { request: u, pairingTopic: r }), this.client.events.emit("session_authenticate", { topic: r, params: i.params, id: i.id });
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Wt.idle, this.processSessionRequestQueue();
      }, K.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: i }) => {
      const n = this.client.core.history.pending;
      n.length > 0 && n.filter((s) => s.topic === r && s.request.method === "wc_sessionRequest").forEach((s) => {
        const o = s.request.id, c = te("session_request", o);
        if (this.events.listenerCount(c) === 0)
          throw new Error(`emitting ${c} without any listeners`);
        this.events.emit(te("session_request", s.request.id), { error: i });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Wt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Wt.active, this.emitSessionRequest(r);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.emitSessionRequest = (r) => {
      this.client.events.emit("session_request", r);
    }, this.onPairingCreated = (r) => {
      if (r.methods && this.expectedPairingMethodMap.set(r.topic, r.methods), r.active)
        return;
      const i = this.client.proposal.getAll().find((n) => n.pairingTopic === r.topic);
      i && this.onSessionProposeRequest(r.topic, ei("wc_sessionPropose", { requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer, sessionProperties: i.sessionProperties }, i.id));
    }, this.isValidConnect = async (r) => {
      if (!ot(r)) {
        const { message: h } = D("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: o, relays: c } = r;
      if (ct(i) || await this.isValidPairingTopic(i), !Qy(c)) {
        const { message: h } = D("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(h);
      }
      !ct(n) && In(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !ct(s) && In(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), ct(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Wy(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!ot(r))
        throw new Error(D("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: o } = r;
      this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), h = As(n, "approve()");
      if (h)
        throw new Error(h.message);
      const u = fc(c.requiredNamespaces, n, "approve()");
      if (u)
        throw new Error(u.message);
      if (!Ve(s, !0)) {
        const { message: d } = D("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(d);
      }
      ct(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!ot(r)) {
        const { message: s } = D("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (this.checkRecentlyDeleted(i), await this.isValidProposalId(i), !Yy(n)) {
        const { message: s } = D("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!ot(r)) {
        const { message: u } = D("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: i, controller: n, namespaces: s, expiry: o } = r;
      if (!pu(i)) {
        const { message: u } = D("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const c = $y(n, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const h = As(s, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      if (hr(o)) {
        const { message: u } = D("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (r) => {
      if (!ot(r)) {
        const { message: h } = D("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, namespaces: n } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), o = As(n, "update()");
      if (o)
        throw new Error(o.message);
      const c = fc(s.requiredNamespaces, n, "update()");
      if (c)
        throw new Error(c.message);
    }, this.isValidExtend = async (r) => {
      if (!ot(r)) {
        const { message: n } = D("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!ot(r)) {
        const { message: h } = D("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, request: n, chainId: s, expiry: o } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const { namespaces: c } = this.client.session.get(i);
      if (!uc(c, s)) {
        const { message: h } = D("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(h);
      }
      if (!Jy(n)) {
        const { message: h } = D("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(h);
      }
      if (!ev(c, s, n.method)) {
        const { message: h } = D("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(h);
      }
      if (o && !nv(o, xs)) {
        const { message: h } = D("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${xs.min} and ${xs.max}`);
        throw new Error(h);
      }
    }, this.isValidRespond = async (r) => {
      var i;
      if (!ot(r)) {
        const { message: o } = D("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, response: s } = r;
      try {
        await this.isValidSessionTopic(n);
      } catch (o) {
        throw (i = r == null ? void 0 : r.response) != null && i.id && this.cleanupAfterResponse(r), o;
      }
      if (!Xy(s)) {
        const { message: o } = D("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidPing = async (r) => {
      if (!ot(r)) {
        const { message: n } = D("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!ot(r)) {
        const { message: c } = D("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(c);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: o } = this.client.session.get(i);
      if (!uc(o, s)) {
        const { message: c } = D("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(c);
      }
      if (!Zy(n)) {
        const { message: c } = D("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(c);
      }
      if (!tv(o, s, n.name)) {
        const { message: c } = D("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(c);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!ot(r)) {
        const { message: n } = D("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidAuthenticate = (r) => {
      const { chains: i, uri: n, domain: s, nonce: o } = r;
      if (!Array.isArray(i) || i.length === 0)
        throw new Error("chains is required and must be a non-empty array");
      if (!Ve(n, !1))
        throw new Error("uri is required parameter");
      if (!Ve(s, !1))
        throw new Error("domain is required parameter");
      if (!Ve(o, !1))
        throw new Error("nonce is required parameter");
      if ([...new Set(i.map((h) => os(h).namespace))].length > 1)
        throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: c } = os(i[0]);
      if (c !== "eip155")
        throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (r, i) => {
      const n = { verified: { verifyUrl: i.verifyUrl || Zr, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        s && (n.verified.origin = s.origin, n.verified.isScam = s.isScam, n.verified.validation = s.origin === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.info(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((n) => {
        if (!Ve(n, !1)) {
          const { message: s } = D("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    }, this.getPendingAuthRequest = (r) => {
      const i = this.client.auth.requests.get(r);
      return typeof i == "object" ? i : void 0;
    }, this.addToRecentlyDeleted = (r, i) => {
      if (this.recentlyDeletedMap.set(r, i), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let n = 0;
        const s = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (n++ >= s)
            break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }, this.checkRecentlyDeleted = (r) => {
      const i = this.recentlyDeletedMap.get(r);
      if (i) {
        const { message: n } = D("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${r}`);
        throw new Error(n);
      }
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = D("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: i } = e, { publicKey: n } = this.client.auth.authKeys.keys.includes(fn) ? this.client.auth.authKeys.get(fn) : { responseTopic: void 0, publicKey: void 0 }, s = await this.client.core.crypto.decode(r, i, { receiverPublicKey: n });
      try {
        eo(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Nn(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (o) {
        this.client.logger.error(o);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(At.expired, async (e) => {
      const { topic: r, id: i } = Ml(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, D("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i))
        return await this.deletePendingAuthRequest(i, D("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Xr.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(Xr.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!Ve(e, !1)) {
      const { message: r } = D("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = D("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (hr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = D("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ve(e, !1)) {
      const { message: r } = D("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: r } = D("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (hr(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = D("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = D("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Ve(e, !1)) {
      const { message: r } = D("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = D("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!Gy(e)) {
      const { message: r } = D("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = D("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (hr(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = D("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class ob extends Wr {
  constructor(e, r) {
    super(e, r, K2, qo), this.core = e, this.logger = r;
  }
}
class ab extends Wr {
  constructor(e, r) {
    super(e, r, V2, qo), this.core = e, this.logger = r;
  }
}
class cb extends Wr {
  constructor(e, r) {
    super(e, r, W2, qo, (i) => i.id), this.core = e, this.logger = r;
  }
}
class hb extends Wr {
  constructor(e, r) {
    super(e, r, J2, qn, () => fn), this.core = e, this.logger = r;
  }
}
class lb extends Wr {
  constructor(e, r) {
    super(e, r, X2, qn), this.core = e, this.logger = r;
  }
}
class ub extends Wr {
  constructor(e, r) {
    super(e, r, Z2, qn, (i) => i.id), this.core = e, this.logger = r;
  }
}
class fb {
  constructor(e, r) {
    this.core = e, this.logger = r, this.authKeys = new hb(this.core, this.logger), this.pairingTopics = new lb(this.core, this.logger), this.requests = new ub(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
class Lo extends $2 {
  constructor(e) {
    super(e), this.protocol = Cu, this.version = Ru, this.name = Ns.name, this.events = new er.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.authenticate = async (i) => {
      try {
        return await this.engine.authenticate(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.formatAuthMessage = (i) => {
      try {
        return this.engine.formatAuthMessage(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.approveSessionAuthenticate = async (i) => {
      try {
        return await this.engine.approveSessionAuthenticate(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.rejectSessionAuthenticate = async (i) => {
      try {
        return await this.engine.rejectSessionAuthenticate(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (e == null ? void 0 : e.name) || Ns.name, this.metadata = (e == null ? void 0 : e.metadata) || ng(), this.signConfig = e == null ? void 0 : e.signConfig;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : $c(Zs({ level: (e == null ? void 0 : e.logger) || Ns.logger }));
    this.core = (e == null ? void 0 : e.core) || new U2(e), this.logger = ft(r, this.name), this.session = new ab(this.core, this.logger), this.proposal = new ob(this.core, this.logger), this.pendingRequest = new cb(this.core, this.logger), this.engine = new sb(this), this.auth = new fb(this.core, this.logger);
  }
  static async init(e) {
    const r = new Lo(e);
    return await r.initialize(), r;
  }
  get context() {
    return yt(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
}
function db(t) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), r = 0; r < e.length; r++)
    e[r] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), s = n.charCodeAt(0);
    if (e[s] !== 255)
      throw new TypeError(n + " is ambiguous");
    e[s] = i;
  }
  var o = t.length, c = t.charAt(0), h = Math.log(o) / Math.log(256), u = Math.log(256) / Math.log(o);
  function d(A) {
    if (A instanceof Uint8Array || (ArrayBuffer.isView(A) ? A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength) : Array.isArray(A) && (A = Uint8Array.from(A))), !(A instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (A.length === 0)
      return "";
    for (var E = 0, N = 0, I = 0, x = A.length; I !== x && A[I] === 0; )
      I++, E++;
    for (var R = (x - I) * u + 1 >>> 0, P = new Uint8Array(R); I !== x; ) {
      for (var C = A[I], k = 0, F = R - 1; (C !== 0 || k < N) && F !== -1; F--, k++)
        C += 256 * P[F] >>> 0, P[F] = C % o >>> 0, C = C / o >>> 0;
      if (C !== 0)
        throw new Error("Non-zero carry");
      N = k, I++;
    }
    for (var q = R - N; q !== R && P[q] === 0; )
      q++;
    for (var $ = c.repeat(E); q < R; ++q)
      $ += t.charAt(P[q]);
    return $;
  }
  function m(A) {
    if (typeof A != "string")
      throw new TypeError("Expected String");
    if (A.length === 0)
      return new Uint8Array();
    for (var E = 0, N = 0, I = 0; A[E] === c; )
      N++, E++;
    for (var x = (A.length - E) * h + 1 >>> 0, R = new Uint8Array(x); A[E]; ) {
      var P = e[A.charCodeAt(E)];
      if (P === 255)
        return;
      for (var C = 0, k = x - 1; (P !== 0 || C < I) && k !== -1; k--, C++)
        P += o * R[k] >>> 0, R[k] = P % 256 >>> 0, P = P / 256 >>> 0;
      if (P !== 0)
        throw new Error("Non-zero carry");
      I = C, E++;
    }
    for (var F = x - I; F !== x && R[F] === 0; )
      F++;
    for (var q = new Uint8Array(N + (x - F)), $ = N; F !== x; )
      q[$++] = R[F++];
    return q;
  }
  function b(A) {
    var E = m(A);
    if (E)
      return E;
    throw new Error("Non-base" + o + " character");
  }
  return {
    encode: d,
    decodeUnsafe: m,
    decode: b
  };
}
var pb = db;
const gb = pb, mb = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var yb = gb(mb);
const Cs = /* @__PURE__ */ Lc(yb);
class Fr extends Error {
  constructor() {
    super(), Object.setPrototypeOf(this, Fr.prototype);
  }
}
class Uo extends Error {
  constructor() {
    super(), Object.setPrototypeOf(this, Uo.prototype);
  }
}
var Fc;
(function(t) {
  t.Mainnet = "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ", t.Devnet = "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K";
})(Fc || (Fc = {}));
var fi;
(function(t) {
  t.signTransaction = "solana_signTransaction", t.signMessage = "solana_signMessage";
})(fi || (fi = {}));
const Dc = (t) => ({
  requiredNamespaces: {
    solana: {
      chains: [t],
      methods: [fi.signTransaction, fi.signMessage],
      events: []
    }
  }
}), vb = (t) => "version" in t;
class Ob {
  constructor(e) {
    this._options = e.options, this._network = e.network;
  }
  async connect() {
    const e = this._client ?? await Lo.init(this._options), r = e.find(Dc(this._network)).filter((i) => i.acknowledged);
    if (r.length)
      return this._session = r[r.length - 1], this._client = e, {
        publicKey: this.publicKey
      };
    {
      const { uri: i, approval: n } = await e.connect(Dc(this._network));
      return new Promise((s, o) => {
        i && wa.open(i, () => {
          o(new Uo());
        }), n().then((c) => {
          this._session = c, this._client = e, s({ publicKey: this.publicKey });
        }).catch(o).finally(() => {
          wa.close();
        });
      });
    }
  }
  async disconnect() {
    if (this._client && this._session)
      await this._client.disconnect({
        topic: this._session.topic,
        reason: ae("USER_DISCONNECTED")
      }), this._session = void 0;
    else
      throw new Fr();
  }
  get client() {
    if (this._client)
      return Object.assign({}, this._client, { off: this._client.removeListener });
    throw new Fr();
  }
  get publicKey() {
    if (this._client && this._session) {
      const { address: e } = Yp(this._session.namespaces.solana.accounts[0]);
      return new Ou(e);
    } else
      throw new Fr();
  }
  async signTransaction(e) {
    if (this._client && this._session) {
      let r, i;
      vb(e) ? (r = Y.Buffer.from(e.serialize()).toString("base64"), e.version === "legacy" && (i = Bu.from(e.serialize()))) : (r = e.serialize({
        requireAllSignatures: !1,
        verifySignatures: !1
      }).toString("base64"), i = e);
      const { signature: n } = await this._client.request({
        chainId: this._network,
        topic: this._session.topic,
        request: {
          method: fi.signTransaction,
          params: {
            // Passing ...legacyTransaction is deprecated.
            // All new clients should rely on the `transaction` parameter.
            // The future versions will stop passing ...legacyTransaction.
            ...i,
            // New base64-encoded serialized transaction request parameter
            transaction: r
          }
        }
      });
      return e.addSignature(this.publicKey, Y.Buffer.from(Cs.decode(n))), e;
    } else
      throw new Fr();
  }
  async signMessage(e) {
    if (this._client && this._session) {
      const { signature: r } = await this._client.request({
        // The network does not change the output of message signing, but this is a required parameter for SignClient
        chainId: this._network,
        topic: this._session.topic,
        request: {
          method: fi.signMessage,
          params: { pubkey: this.publicKey.toString(), message: Cs.encode(e) }
        }
      });
      return Cs.decode(r);
    } else
      throw new Fr();
  }
}
export {
  Fr as ClientNotInitializedError,
  Uo as QRCodeModalError,
  Fc as WalletConnectChainID,
  Lo as WalletConnectClient,
  fi as WalletConnectRPCMethods,
  Ob as WalletConnectWallet
};
