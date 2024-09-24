import { d as qe, g as er, aa as jr, o as Ze, y as $n } from "./index-DV1w5RNX.mjs";
import { i as Gn, b as Fn, d as kn, e as Jn, f as Wn, g as Vn, h as Yn, j as qn, k as Xn, l as Zn, m as Qn, w as Mr, r as Nr, c as ei } from "./index-3AdIZdSb.mjs";
function Br(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e);
}
function ti(e, r) {
  r || (r = e.reduce((o, b) => o + b.length, 0));
  const n = Br(r);
  let c = 0;
  for (const o of e)
    n.set(o, c), c += o.length;
  return n;
}
const yr = {
  ...Gn,
  ...Fn,
  ...kn,
  ...Jn,
  ...Wn,
  ...Vn,
  ...Yn,
  ...qn,
  ...Xn,
  ...Zn
};
function zr(e, r, n, c) {
  return {
    name: e,
    prefix: r,
    encoder: {
      name: e,
      prefix: r,
      encode: n
    },
    decoder: { decode: c }
  };
}
const pr = zr("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Jt = zr("ascii", "a", (e) => {
  let r = "a";
  for (let n = 0; n < e.length; n++)
    r += String.fromCharCode(e[n]);
  return r;
}, (e) => {
  e = e.substring(1);
  const r = Br(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e.charCodeAt(n);
  return r;
}), Dr = {
  utf8: pr,
  "utf-8": pr,
  hex: yr.base16,
  latin1: Jt,
  ascii: Jt,
  binary: Jt,
  ...yr
};
function tr(e, r = "utf8") {
  const n = Dr[r];
  if (!n)
    throw new Error(`Unsupported encoding "${r}"`);
  return (r === "utf8" || r === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e, "utf8") : n.decoder.decode(`${n.prefix}${e}`);
}
function rr(e, r = "utf8") {
  const n = Dr[r];
  if (!n)
    throw new Error(`Unsupported encoding "${r}"`);
  return (r === "utf8" || r === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : n.encoder.encode(e).substring(1);
}
const fo = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } }, ri = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, ni = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, ii = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function si(e, r) {
  if (e === "__proto__" || e === "constructor" && r && typeof r == "object" && "prototype" in r) {
    oi(e);
    return;
  }
  return r;
}
function oi(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Bt(e, r = {}) {
  if (typeof e != "string")
    return e;
  const n = e.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    e[0] === '"' && e.endsWith('"') && !e.includes("\\")
  )
    return n.slice(1, -1);
  if (n.length <= 9) {
    const c = n.toLowerCase();
    if (c === "true")
      return !0;
    if (c === "false")
      return !1;
    if (c === "undefined")
      return;
    if (c === "null")
      return null;
    if (c === "nan")
      return Number.NaN;
    if (c === "infinity")
      return Number.POSITIVE_INFINITY;
    if (c === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!ii.test(e)) {
    if (r.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (ri.test(e) || ni.test(e)) {
      if (r.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, si);
    }
    return JSON.parse(e);
  } catch (c) {
    if (r.strict)
      throw c;
    return e;
  }
}
function ai(e) {
  return !e || typeof e.then != "function" ? Promise.resolve(e) : e;
}
function Ie(e, ...r) {
  try {
    return ai(e(...r));
  } catch (n) {
    return Promise.reject(n);
  }
}
function fi(e) {
  const r = typeof e;
  return e === null || r !== "object" && r !== "function";
}
function ci(e) {
  const r = Object.getPrototypeOf(e);
  return !r || r.isPrototypeOf(Object);
}
function Ut(e) {
  if (fi(e))
    return String(e);
  if (ci(e) || Array.isArray(e))
    return JSON.stringify(e);
  if (typeof e.toJSON == "function")
    return Ut(e.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Ur() {
  if (typeof qe.Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Yt = "base64:";
function ui(e) {
  if (typeof e == "string")
    return e;
  Ur();
  const r = qe.Buffer.from(e).toString("base64");
  return Yt + r;
}
function li(e) {
  return typeof e != "string" || !e.startsWith(Yt) ? e : (Ur(), qe.Buffer.from(e.slice(Yt.length), "base64"));
}
function De(e) {
  return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function hi(...e) {
  return De(e.join(":"));
}
function zt(e) {
  return e = De(e), e ? e + ":" : "";
}
const di = "memory", bi = () => {
  const e = /* @__PURE__ */ new Map();
  return {
    name: di,
    options: {},
    hasItem(r) {
      return e.has(r);
    },
    getItem(r) {
      return e.get(r) ?? null;
    },
    getItemRaw(r) {
      return e.get(r) ?? null;
    },
    setItem(r, n) {
      e.set(r, n);
    },
    setItemRaw(r, n) {
      e.set(r, n);
    },
    removeItem(r) {
      e.delete(r);
    },
    getKeys() {
      return Array.from(e.keys());
    },
    clear() {
      e.clear();
    },
    dispose() {
      e.clear();
    }
  };
};
function co(e = {}) {
  const r = {
    mounts: { "": e.driver || bi() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, n = (s) => {
    for (const u of r.mountpoints)
      if (s.startsWith(u))
        return {
          base: u,
          relativeKey: s.slice(u.length),
          driver: r.mounts[u]
        };
    return {
      base: "",
      relativeKey: s,
      driver: r.mounts[""]
    };
  }, c = (s, u) => r.mountpoints.filter(
    (g) => g.startsWith(s) || u && s.startsWith(g)
  ).map((g) => ({
    relativeBase: s.length > g.length ? s.slice(g.length) : void 0,
    mountpoint: g,
    driver: r.mounts[g]
  })), o = (s, u) => {
    if (r.watching) {
      u = De(u);
      for (const g of r.watchListeners)
        g(s, u);
    }
  }, b = async () => {
    if (!r.watching) {
      r.watching = !0;
      for (const s in r.mounts)
        r.unwatch[s] = await _r(
          r.mounts[s],
          o,
          s
        );
    }
  }, S = async () => {
    if (r.watching) {
      for (const s in r.unwatch)
        await r.unwatch[s]();
      r.unwatch = {}, r.watching = !1;
    }
  }, E = (s, u, g) => {
    const v = /* @__PURE__ */ new Map(), m = (w) => {
      let M = v.get(w.base);
      return M || (M = {
        driver: w.driver,
        base: w.base,
        items: []
      }, v.set(w.base, M)), M;
    };
    for (const w of s) {
      const M = typeof w == "string", J = De(M ? w : w.key), Y = M ? void 0 : w.value, N = M || !w.options ? u : { ...u, ...w.options }, Te = n(J);
      m(Te).items.push({
        key: J,
        value: Y,
        relativeKey: Te.relativeKey,
        options: N
      });
    }
    return Promise.all([...v.values()].map((w) => g(w))).then(
      (w) => w.flat()
    );
  }, y = {
    // Item
    hasItem(s, u = {}) {
      s = De(s);
      const { relativeKey: g, driver: v } = n(s);
      return Ie(v.hasItem, g, u);
    },
    getItem(s, u = {}) {
      s = De(s);
      const { relativeKey: g, driver: v } = n(s);
      return Ie(v.getItem, g, u).then(
        (m) => Bt(m)
      );
    },
    getItems(s, u) {
      return E(s, u, (g) => g.driver.getItems ? Ie(
        g.driver.getItems,
        g.items.map((v) => ({
          key: v.relativeKey,
          options: v.options
        })),
        u
      ).then(
        (v) => v.map((m) => ({
          key: hi(g.base, m.key),
          value: Bt(m.value)
        }))
      ) : Promise.all(
        g.items.map((v) => Ie(
          g.driver.getItem,
          v.relativeKey,
          v.options
        ).then((m) => ({
          key: v.key,
          value: Bt(m)
        })))
      ));
    },
    getItemRaw(s, u = {}) {
      s = De(s);
      const { relativeKey: g, driver: v } = n(s);
      return v.getItemRaw ? Ie(v.getItemRaw, g, u) : Ie(v.getItem, g, u).then(
        (m) => li(m)
      );
    },
    async setItem(s, u, g = {}) {
      if (u === void 0)
        return y.removeItem(s);
      s = De(s);
      const { relativeKey: v, driver: m } = n(s);
      m.setItem && (await Ie(m.setItem, v, Ut(u), g), m.watch || o("update", s));
    },
    async setItems(s, u) {
      await E(s, u, async (g) => {
        if (g.driver.setItems)
          return Ie(
            g.driver.setItems,
            g.items.map((v) => ({
              key: v.relativeKey,
              value: Ut(v.value),
              options: v.options
            })),
            u
          );
        g.driver.setItem && await Promise.all(
          g.items.map((v) => Ie(
            g.driver.setItem,
            v.relativeKey,
            Ut(v.value),
            v.options
          ))
        );
      });
    },
    async setItemRaw(s, u, g = {}) {
      if (u === void 0)
        return y.removeItem(s, g);
      s = De(s);
      const { relativeKey: v, driver: m } = n(s);
      if (m.setItemRaw)
        await Ie(m.setItemRaw, v, u, g);
      else if (m.setItem)
        await Ie(m.setItem, v, ui(u), g);
      else
        return;
      m.watch || o("update", s);
    },
    async removeItem(s, u = {}) {
      typeof u == "boolean" && (u = { removeMeta: u }), s = De(s);
      const { relativeKey: g, driver: v } = n(s);
      v.removeItem && (await Ie(v.removeItem, g, u), (u.removeMeta || u.removeMata) && await Ie(v.removeItem, g + "$", u), v.watch || o("remove", s));
    },
    // Meta
    async getMeta(s, u = {}) {
      typeof u == "boolean" && (u = { nativeOnly: u }), s = De(s);
      const { relativeKey: g, driver: v } = n(s), m = /* @__PURE__ */ Object.create(null);
      if (v.getMeta && Object.assign(m, await Ie(v.getMeta, g, u)), !u.nativeOnly) {
        const w = await Ie(
          v.getItem,
          g + "$",
          u
        ).then((M) => Bt(M));
        w && typeof w == "object" && (typeof w.atime == "string" && (w.atime = new Date(w.atime)), typeof w.mtime == "string" && (w.mtime = new Date(w.mtime)), Object.assign(m, w));
      }
      return m;
    },
    setMeta(s, u, g = {}) {
      return this.setItem(s + "$", u, g);
    },
    removeMeta(s, u = {}) {
      return this.removeItem(s + "$", u);
    },
    // Keys
    async getKeys(s, u = {}) {
      s = zt(s);
      const g = c(s, !0);
      let v = [];
      const m = [];
      for (const w of g) {
        const J = (await Ie(
          w.driver.getKeys,
          w.relativeBase,
          u
        )).map((Y) => w.mountpoint + De(Y)).filter((Y) => !v.some((N) => Y.startsWith(N)));
        m.push(...J), v = [
          w.mountpoint,
          ...v.filter((Y) => !Y.startsWith(w.mountpoint))
        ];
      }
      return s ? m.filter((w) => w.startsWith(s) && !w.endsWith("$")) : m.filter((w) => !w.endsWith("$"));
    },
    // Utils
    async clear(s, u = {}) {
      s = zt(s), await Promise.all(
        c(s, !1).map(async (g) => {
          if (g.driver.clear)
            return Ie(g.driver.clear, g.relativeBase, u);
          if (g.driver.removeItem) {
            const v = await g.driver.getKeys(g.relativeBase || "", u);
            return Promise.all(
              v.map((m) => g.driver.removeItem(m, u))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(r.mounts).map((s) => xr(s))
      );
    },
    async watch(s) {
      return await b(), r.watchListeners.push(s), async () => {
        r.watchListeners = r.watchListeners.filter(
          (u) => u !== s
        ), r.watchListeners.length === 0 && await S();
      };
    },
    async unwatch() {
      r.watchListeners = [], await S();
    },
    // Mount
    mount(s, u) {
      if (s = zt(s), s && r.mounts[s])
        throw new Error(`already mounted at ${s}`);
      return s && (r.mountpoints.push(s), r.mountpoints.sort((g, v) => v.length - g.length)), r.mounts[s] = u, r.watching && Promise.resolve(_r(u, o, s)).then((g) => {
        r.unwatch[s] = g;
      }).catch(console.error), y;
    },
    async unmount(s, u = !0) {
      s = zt(s), !(!s || !r.mounts[s]) && (r.watching && s in r.unwatch && (r.unwatch[s](), delete r.unwatch[s]), u && await xr(r.mounts[s]), r.mountpoints = r.mountpoints.filter((g) => g !== s), delete r.mounts[s]);
    },
    getMount(s = "") {
      s = De(s) + ":";
      const u = n(s);
      return {
        driver: u.driver,
        base: u.base
      };
    },
    getMounts(s = "", u = {}) {
      return s = De(s), c(s, u.parents).map((v) => ({
        driver: v.driver,
        base: v.mountpoint
      }));
    }
  };
  return y;
}
function _r(e, r, n) {
  return e.watch ? e.watch((c, o) => r(c, n + o)) : () => {
  };
}
async function xr(e) {
  typeof e.dispose == "function" && await Ie(e.dispose);
}
function dt(e) {
  return new Promise((r, n) => {
    e.oncomplete = e.onsuccess = () => r(e.result), e.onabort = e.onerror = () => n(e.error);
  });
}
function gi(e, r) {
  const n = indexedDB.open(e);
  n.onupgradeneeded = () => n.result.createObjectStore(r);
  const c = dt(n);
  return (o, b) => c.then((S) => b(S.transaction(r, o).objectStore(r)));
}
let Wt;
function Tt() {
  return Wt || (Wt = gi("keyval-store", "keyval")), Wt;
}
function uo(e, r = Tt()) {
  return r("readonly", (n) => dt(n.get(e)));
}
function lo(e, r, n = Tt()) {
  return n("readwrite", (c) => (c.put(r, e), dt(c.transaction)));
}
function ho(e, r = Tt()) {
  return r("readwrite", (n) => (n.delete(e), dt(n.transaction)));
}
function bo(e = Tt()) {
  return e("readwrite", (r) => (r.clear(), dt(r.transaction)));
}
function yi(e, r) {
  return e.openCursor().onsuccess = function() {
    this.result && (r(this.result), this.result.continue());
  }, dt(e.transaction);
}
function go(e = Tt()) {
  return e("readonly", (r) => {
    if (r.getAllKeys)
      return dt(r.getAllKeys());
    const n = [];
    return yi(r, (c) => n.push(c.key)).then(() => n);
  });
}
class yo {
}
function pi(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var _i = xi;
function xi(e, r, n) {
  var c = n && n.stringify || pi, o = 1;
  if (typeof e == "object" && e !== null) {
    var b = r.length + o;
    if (b === 1)
      return e;
    var S = new Array(b);
    S[0] = c(e);
    for (var E = 1; E < b; E++)
      S[E] = c(r[E]);
    return S.join(" ");
  }
  if (typeof e != "string")
    return e;
  var y = r.length;
  if (y === 0)
    return e;
  for (var s = "", u = 1 - o, g = -1, v = e && e.length || 0, m = 0; m < v; ) {
    if (e.charCodeAt(m) === 37 && m + 1 < v) {
      switch (g = g > -1 ? g : 0, e.charCodeAt(m + 1)) {
        case 100:
        case 102:
          if (u >= y || r[u] == null)
            break;
          g < m && (s += e.slice(g, m)), s += Number(r[u]), g = m + 2, m++;
          break;
        case 105:
          if (u >= y || r[u] == null)
            break;
          g < m && (s += e.slice(g, m)), s += Math.floor(Number(r[u])), g = m + 2, m++;
          break;
        case 79:
        case 111:
        case 106:
          if (u >= y || r[u] === void 0)
            break;
          g < m && (s += e.slice(g, m));
          var w = typeof r[u];
          if (w === "string") {
            s += "'" + r[u] + "'", g = m + 2, m++;
            break;
          }
          if (w === "function") {
            s += r[u].name || "<anonymous>", g = m + 2, m++;
            break;
          }
          s += c(r[u]), g = m + 2, m++;
          break;
        case 115:
          if (u >= y)
            break;
          g < m && (s += e.slice(g, m)), s += String(r[u]), g = m + 2, m++;
          break;
        case 37:
          g < m && (s += e.slice(g, m)), s += "%", g = m + 2, m++, u--;
          break;
      }
      ++u;
    }
    ++m;
  }
  return g === -1 ? e : (g < v && (s += e.slice(g)), s);
}
const vr = _i;
var _t = Qe;
const St = Ai().console || {}, vi = {
  mapHttpRequest: Dt,
  mapHttpResponse: Dt,
  wrapRequestSerializer: Vt,
  wrapResponseSerializer: Vt,
  wrapErrorSerializer: Vt,
  req: Dt,
  res: Dt,
  err: Oi
};
function wi(e, r) {
  return Array.isArray(e) ? e.filter(function(c) {
    return c !== "!stdSerializers.err";
  }) : e === !0 ? Object.keys(r) : !1;
}
function Qe(e) {
  e = e || {}, e.browser = e.browser || {};
  const r = e.browser.transmit;
  if (r && typeof r.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = e.browser.write || St;
  e.browser.write && (e.browser.asObject = !0);
  const c = e.serializers || {}, o = wi(e.browser.serialize, c);
  let b = e.browser.serialize;
  Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (b = !1);
  const S = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof n == "function" && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), e.enabled === !1 && (e.level = "silent");
  const E = e.level || "info", y = Object.create(n);
  y.log || (y.log = Ot), Object.defineProperty(y, "levelVal", {
    get: u
  }), Object.defineProperty(y, "level", {
    get: g,
    set: v
  });
  const s = {
    transmit: r,
    serialize: o,
    asObject: e.browser.asObject,
    levels: S,
    timestamp: Ii(e)
  };
  y.levels = Qe.levels, y.level = E, y.setMaxListeners = y.getMaxListeners = y.emit = y.addListener = y.on = y.prependListener = y.once = y.prependOnceListener = y.removeListener = y.removeAllListeners = y.listeners = y.listenerCount = y.eventNames = y.write = y.flush = Ot, y.serializers = c, y._serialize = o, y._stdErrSerialize = b, y.child = m, r && (y._logEvent = qt());
  function u() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function g() {
    return this._level;
  }
  function v(w) {
    if (w !== "silent" && !this.levels.values[w])
      throw Error("unknown level " + w);
    this._level = w, yt(s, y, "error", "log"), yt(s, y, "fatal", "error"), yt(s, y, "warn", "error"), yt(s, y, "info", "log"), yt(s, y, "debug", "log"), yt(s, y, "trace", "log");
  }
  function m(w, M) {
    if (!w)
      throw new Error("missing bindings for child Pino");
    M = M || {}, o && w.serializers && (M.serializers = w.serializers);
    const J = M.serializers;
    if (o && J) {
      var Y = Object.assign({}, c, J), N = e.browser.serialize === !0 ? Object.keys(Y) : o;
      delete w.serializers, Ft([w], N, Y, this._stdErrSerialize);
    }
    function Te(be) {
      this._childLevel = (be._childLevel | 0) + 1, this.error = pt(be, w, "error"), this.fatal = pt(be, w, "fatal"), this.warn = pt(be, w, "warn"), this.info = pt(be, w, "info"), this.debug = pt(be, w, "debug"), this.trace = pt(be, w, "trace"), Y && (this.serializers = Y, this._serialize = N), r && (this._logEvent = qt(
        [].concat(be._logEvent.bindings, w)
      ));
    }
    return Te.prototype = this, new Te(this);
  }
  return y;
}
Qe.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
Qe.stdSerializers = vi;
Qe.stdTimeFunctions = Object.assign({}, { nullTime: Hr, epochTime: Kr, unixTime: Ti, isoTime: Li });
function yt(e, r, n, c) {
  const o = Object.getPrototypeOf(r);
  r[n] = r.levelVal > r.levels.values[n] ? Ot : o[n] ? o[n] : St[n] || St[c] || Ot, mi(e, r, n);
}
function mi(e, r, n) {
  !e.transmit && r[n] === Ot || (r[n] = /* @__PURE__ */ function(c) {
    return function() {
      const b = e.timestamp(), S = new Array(arguments.length), E = Object.getPrototypeOf && Object.getPrototypeOf(this) === St ? St : this;
      for (var y = 0; y < S.length; y++)
        S[y] = arguments[y];
      if (e.serialize && !e.asObject && Ft(S, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? c.call(E, Ei(this, n, S, b)) : c.apply(E, S), e.transmit) {
        const s = e.transmit.level || r.level, u = Qe.levels.values[s], g = Qe.levels.values[n];
        if (g < u)
          return;
        Si(this, {
          ts: b,
          methodLevel: n,
          methodValue: g,
          transmitLevel: s,
          transmitValue: Qe.levels.values[e.transmit.level || r.level],
          send: e.transmit.send,
          val: r.levelVal
        }, S);
      }
    };
  }(r[n]));
}
function Ei(e, r, n, c) {
  e._serialize && Ft(n, e._serialize, e.serializers, e._stdErrSerialize);
  const o = n.slice();
  let b = o[0];
  const S = {};
  c && (S.time = c), S.level = Qe.levels.values[r];
  let E = (e._childLevel | 0) + 1;
  if (E < 1 && (E = 1), b !== null && typeof b == "object") {
    for (; E-- && typeof o[0] == "object"; )
      Object.assign(S, o.shift());
    b = o.length ? vr(o.shift(), o) : void 0;
  } else
    typeof b == "string" && (b = vr(o.shift(), o));
  return b !== void 0 && (S.msg = b), S;
}
function Ft(e, r, n, c) {
  for (const o in e)
    if (c && e[o] instanceof Error)
      e[o] = Qe.stdSerializers.err(e[o]);
    else if (typeof e[o] == "object" && !Array.isArray(e[o]))
      for (const b in e[o])
        r && r.indexOf(b) > -1 && b in n && (e[o][b] = n[b](e[o][b]));
}
function pt(e, r, n) {
  return function() {
    const c = new Array(1 + arguments.length);
    c[0] = r;
    for (var o = 1; o < c.length; o++)
      c[o] = arguments[o - 1];
    return e[n].apply(this, c);
  };
}
function Si(e, r, n) {
  const c = r.send, o = r.ts, b = r.methodLevel, S = r.methodValue, E = r.val, y = e._logEvent.bindings;
  Ft(
    n,
    e._serialize || Object.keys(e.serializers),
    e.serializers,
    e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize
  ), e._logEvent.ts = o, e._logEvent.messages = n.filter(function(s) {
    return y.indexOf(s) === -1;
  }), e._logEvent.level.label = b, e._logEvent.level.value = S, c(b, e._logEvent, E), e._logEvent = qt(y);
}
function qt(e) {
  return {
    ts: 0,
    messages: [],
    bindings: e || [],
    level: { label: "", value: 0 }
  };
}
function Oi(e) {
  const r = {
    type: e.constructor.name,
    msg: e.message,
    stack: e.stack
  };
  for (const n in e)
    r[n] === void 0 && (r[n] = e[n]);
  return r;
}
function Ii(e) {
  return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? Hr : Kr;
}
function Dt() {
  return {};
}
function Vt(e) {
  return e;
}
function Ot() {
}
function Hr() {
  return !1;
}
function Kr() {
  return Date.now();
}
function Ti() {
  return Math.round(Date.now() / 1e3);
}
function Li() {
  return new Date(Date.now()).toISOString();
}
function Ai() {
  function e(r) {
    return typeof r < "u" && r;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        return delete Object.prototype.globalThis, this.globalThis = this;
      },
      configurable: !0
    }), globalThis;
  } catch {
    return e(self) || e(window) || e(this) || {};
  }
}
const $r = /* @__PURE__ */ er(_t), Ri = (e) => JSON.stringify(e, (r, n) => typeof n == "bigint" ? n.toString() + "n" : n);
function wr(e) {
  return typeof e == "string" ? e : Ri(e) || "";
}
const Pi = { level: "info" }, Lt = "custom_context", nr = 1e3 * 1024;
class Ci {
  constructor(r) {
    this.nodeValue = r, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}
class mr {
  constructor(r) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = r, this.sizeInBytes = 0;
  }
  append(r) {
    const n = new Ci(r);
    if (n.size > this.maxSizeInBytes)
      throw new Error(`[LinkedList] Value too big to insert into list: ${r} with size ${n.size}`);
    for (; this.size + n.size > this.maxSizeInBytes; )
      this.shift();
    this.head ? (this.tail && (this.tail.next = n), this.tail = n) : (this.head = n, this.tail = n), this.lengthInNodes++, this.sizeInBytes += n.size;
  }
  shift() {
    if (!this.head)
      return;
    const r = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= r.size;
  }
  toArray() {
    const r = [];
    let n = this.head;
    for (; n !== null; )
      r.push(n.value), n = n.next;
    return r;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let r = this.head;
    return { next: () => {
      if (!r)
        return { done: !0, value: null };
      const n = r.value;
      return r = r.next, { done: !1, value: n };
    } };
  }
}
class Gr {
  constructor(r, n = nr) {
    this.level = r ?? "error", this.levelValue = _t.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = n, this.logs = new mr(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(r, n) {
    n === _t.levels.values.error ? console.error(r) : n === _t.levels.values.warn ? console.warn(r) : n === _t.levels.values.debug ? console.debug(r) : n === _t.levels.values.trace ? console.trace(r) : console.log(r);
  }
  appendToLogs(r) {
    this.logs.append(wr({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: r }));
    const n = typeof r == "string" ? JSON.parse(r).level : r.level;
    n >= this.levelValue && this.forwardToConsole(r, n);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new mr(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(r) {
    const n = this.getLogArray();
    return n.push(wr({ extraMetadata: r })), new Blob(n, { type: "application/json" });
  }
}
class ji {
  constructor(r, n = nr) {
    this.baseChunkLogger = new Gr(r, n);
  }
  write(r) {
    this.baseChunkLogger.appendToLogs(r);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(r) {
    return this.baseChunkLogger.logsToBlob(r);
  }
  downloadLogsBlobInBrowser(r) {
    const n = URL.createObjectURL(this.logsToBlob(r)), c = document.createElement("a");
    c.href = n, c.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(n);
  }
}
class Mi {
  constructor(r, n = nr) {
    this.baseChunkLogger = new Gr(r, n);
  }
  write(r) {
    this.baseChunkLogger.appendToLogs(r);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(r) {
    return this.baseChunkLogger.logsToBlob(r);
  }
}
var Ni = Object.defineProperty, Bi = Object.defineProperties, zi = Object.getOwnPropertyDescriptors, Er = Object.getOwnPropertySymbols, Di = Object.prototype.hasOwnProperty, Ui = Object.prototype.propertyIsEnumerable, Sr = (e, r, n) => r in e ? Ni(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, Ht = (e, r) => {
  for (var n in r || (r = {}))
    Di.call(r, n) && Sr(e, n, r[n]);
  if (Er)
    for (var n of Er(r))
      Ui.call(r, n) && Sr(e, n, r[n]);
  return e;
}, Kt = (e, r) => Bi(e, zi(r));
function po(e) {
  return Kt(Ht({}, e), { level: (e == null ? void 0 : e.level) || Pi.level });
}
function Hi(e, r = Lt) {
  return e[r] || "";
}
function Ki(e, r, n = Lt) {
  return e[n] = r, e;
}
function $i(e, r = Lt) {
  let n = "";
  return typeof e.bindings > "u" ? n = Hi(e, r) : n = e.bindings().context || "", n;
}
function Gi(e, r, n = Lt) {
  const c = $i(e, n);
  return c.trim() ? `${c}/${r}` : r;
}
function _o(e, r, n = Lt) {
  const c = Gi(e, r, n), o = e.child({ context: c });
  return Ki(o, c, n);
}
function Fi(e) {
  var r, n;
  const c = new ji((r = e.opts) == null ? void 0 : r.level, e.maxSizeInBytes);
  return { logger: $r(Kt(Ht({}, e.opts), { level: "trace", browser: Kt(Ht({}, (n = e.opts) == null ? void 0 : n.browser), { write: (o) => c.write(o) }) })), chunkLoggerController: c };
}
function ki(e) {
  var r;
  const n = new Mi((r = e.opts) == null ? void 0 : r.level, e.maxSizeInBytes);
  return { logger: $r(Kt(Ht({}, e.opts), { level: "trace" }), n), chunkLoggerController: n };
}
function xo(e) {
  return typeof e.loggerOverride < "u" && typeof e.loggerOverride != "string" ? { logger: e.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? Fi(e) : ki(e);
}
var ir = {}, Fr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = Qn, n = Mr;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var c = (
    /** @class */
    function() {
      function E() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return E.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, E.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, E.prototype.clean = function() {
        n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset();
      }, E.prototype.update = function(y, s) {
        if (s === void 0 && (s = y.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var u = 0;
        if (this._bytesHashed += s, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && s > 0; )
            this._buffer[this._bufferLength++] = y[u++], s--;
          this._bufferLength === this.blockSize && (b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (s >= this.blockSize && (u = b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, y, u, s), s %= this.blockSize); s > 0; )
          this._buffer[this._bufferLength++] = y[u++], s--;
        return this;
      }, E.prototype.finish = function(y) {
        if (!this._finished) {
          var s = this._bytesHashed, u = this._bufferLength, g = s / 536870912 | 0, v = s << 3, m = s % 128 < 112 ? 128 : 256;
          this._buffer[u] = 128;
          for (var w = u + 1; w < m - 8; w++)
            this._buffer[w] = 0;
          r.writeUint32BE(g, this._buffer, m - 8), r.writeUint32BE(v, this._buffer, m - 4), b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 8; w++)
          r.writeUint32BE(this._stateHi[w], y, w * 8), r.writeUint32BE(this._stateLo[w], y, w * 8 + 4);
        return this;
      }, E.prototype.digest = function() {
        var y = new Uint8Array(this.digestLength);
        return this.finish(y), y;
      }, E.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, E.prototype.restoreState = function(y) {
        return this._stateHi.set(y.stateHi), this._stateLo.set(y.stateLo), this._bufferLength = y.bufferLength, y.buffer && this._buffer.set(y.buffer), this._bytesHashed = y.bytesHashed, this._finished = !1, this;
      }, E.prototype.cleanSavedState = function(y) {
        n.wipe(y.stateHi), n.wipe(y.stateLo), y.buffer && n.wipe(y.buffer), y.bufferLength = 0, y.bytesHashed = 0;
      }, E;
    }()
  );
  e.SHA512 = c;
  var o = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function b(E, y, s, u, g, v, m) {
    for (var w = s[0], M = s[1], J = s[2], Y = s[3], N = s[4], Te = s[5], be = s[6], Ce = s[7], $ = u[0], j = u[1], je = u[2], et = u[3], ge = u[4], Fe = u[5], Ue = u[6], We = u[7], x, _, q, ue, A, O, I, L; m >= 128; ) {
      for (var Le = 0; Le < 16; Le++) {
        var re = 8 * Le + v;
        E[Le] = r.readUint32BE(g, re), y[Le] = r.readUint32BE(g, re + 4);
      }
      for (var Le = 0; Le < 80; Le++) {
        var xt = w, B = M, bt = J, d = Y, h = N, l = Te, t = be, a = Ce, R = $, P = j, D = je, U = et, z = ge, H = Fe, Ae = Ue, le = We;
        if (x = Ce, _ = We, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = (N >>> 14 | ge << 18) ^ (N >>> 18 | ge << 14) ^ (ge >>> 9 | N << 23), _ = (ge >>> 14 | N << 18) ^ (ge >>> 18 | N << 14) ^ (N >>> 9 | ge << 23), A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, x = N & Te ^ ~N & be, _ = ge & Fe ^ ~ge & Ue, A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, x = o[Le * 2], _ = o[Le * 2 + 1], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, x = E[Le % 16], _ = y[Le % 16], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, q = I & 65535 | L << 16, ue = A & 65535 | O << 16, x = q, _ = ue, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = (w >>> 28 | $ << 4) ^ ($ >>> 2 | w << 30) ^ ($ >>> 7 | w << 25), _ = ($ >>> 28 | w << 4) ^ (w >>> 2 | $ << 30) ^ (w >>> 7 | $ << 25), A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, x = w & M ^ w & J ^ M & J, _ = $ & j ^ $ & je ^ j & je, A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, a = I & 65535 | L << 16, le = A & 65535 | O << 16, x = d, _ = U, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = q, _ = ue, A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, d = I & 65535 | L << 16, U = A & 65535 | O << 16, M = xt, J = B, Y = bt, N = d, Te = h, be = l, Ce = t, w = a, j = R, je = P, et = D, ge = U, Fe = z, Ue = H, We = Ae, $ = le, Le % 16 === 15)
          for (var re = 0; re < 16; re++)
            x = E[re], _ = y[re], A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = E[(re + 9) % 16], _ = y[(re + 9) % 16], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, q = E[(re + 1) % 16], ue = y[(re + 1) % 16], x = (q >>> 1 | ue << 31) ^ (q >>> 8 | ue << 24) ^ q >>> 7, _ = (ue >>> 1 | q << 31) ^ (ue >>> 8 | q << 24) ^ (ue >>> 7 | q << 25), A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, q = E[(re + 14) % 16], ue = y[(re + 14) % 16], x = (q >>> 19 | ue << 13) ^ (ue >>> 29 | q << 3) ^ q >>> 6, _ = (ue >>> 19 | q << 13) ^ (q >>> 29 | ue << 3) ^ (ue >>> 6 | q << 26), A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, E[re] = I & 65535 | L << 16, y[re] = A & 65535 | O << 16;
      }
      x = w, _ = $, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[0], _ = u[0], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[0] = w = I & 65535 | L << 16, u[0] = $ = A & 65535 | O << 16, x = M, _ = j, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[1], _ = u[1], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[1] = M = I & 65535 | L << 16, u[1] = j = A & 65535 | O << 16, x = J, _ = je, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[2], _ = u[2], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[2] = J = I & 65535 | L << 16, u[2] = je = A & 65535 | O << 16, x = Y, _ = et, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[3], _ = u[3], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[3] = Y = I & 65535 | L << 16, u[3] = et = A & 65535 | O << 16, x = N, _ = ge, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[4], _ = u[4], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[4] = N = I & 65535 | L << 16, u[4] = ge = A & 65535 | O << 16, x = Te, _ = Fe, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[5], _ = u[5], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[5] = Te = I & 65535 | L << 16, u[5] = Fe = A & 65535 | O << 16, x = be, _ = Ue, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[6], _ = u[6], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[6] = be = I & 65535 | L << 16, u[6] = Ue = A & 65535 | O << 16, x = Ce, _ = We, A = _ & 65535, O = _ >>> 16, I = x & 65535, L = x >>> 16, x = s[7], _ = u[7], A += _ & 65535, O += _ >>> 16, I += x & 65535, L += x >>> 16, O += A >>> 16, I += O >>> 16, L += I >>> 16, s[7] = Ce = I & 65535 | L << 16, u[7] = We = A & 65535 | O << 16, v += 128, m -= 128;
    }
    return v;
  }
  function S(E) {
    var y = new c();
    y.update(E);
    var s = y.digest();
    return y.clean(), s;
  }
  e.hash = S;
})(Fr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const r = Nr, n = Fr, c = Mr;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function o(d) {
    const h = new Float64Array(16);
    if (d)
      for (let l = 0; l < d.length; l++)
        h[l] = d[l];
    return h;
  }
  const b = new Uint8Array(32);
  b[0] = 9;
  const S = o(), E = o([1]), y = o([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), s = o([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), u = o([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), g = o([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), v = o([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function m(d, h) {
    for (let l = 0; l < 16; l++)
      d[l] = h[l] | 0;
  }
  function w(d) {
    let h = 1;
    for (let l = 0; l < 16; l++) {
      let t = d[l] + h + 65535;
      h = Math.floor(t / 65536), d[l] = t - h * 65536;
    }
    d[0] += h - 1 + 37 * (h - 1);
  }
  function M(d, h, l) {
    const t = ~(l - 1);
    for (let a = 0; a < 16; a++) {
      const R = t & (d[a] ^ h[a]);
      d[a] ^= R, h[a] ^= R;
    }
  }
  function J(d, h) {
    const l = o(), t = o();
    for (let a = 0; a < 16; a++)
      t[a] = h[a];
    w(t), w(t), w(t);
    for (let a = 0; a < 2; a++) {
      l[0] = t[0] - 65517;
      for (let P = 1; P < 15; P++)
        l[P] = t[P] - 65535 - (l[P - 1] >> 16 & 1), l[P - 1] &= 65535;
      l[15] = t[15] - 32767 - (l[14] >> 16 & 1);
      const R = l[15] >> 16 & 1;
      l[14] &= 65535, M(t, l, 1 - R);
    }
    for (let a = 0; a < 16; a++)
      d[2 * a] = t[a] & 255, d[2 * a + 1] = t[a] >> 8;
  }
  function Y(d, h) {
    let l = 0;
    for (let t = 0; t < 32; t++)
      l |= d[t] ^ h[t];
    return (1 & l - 1 >>> 8) - 1;
  }
  function N(d, h) {
    const l = new Uint8Array(32), t = new Uint8Array(32);
    return J(l, d), J(t, h), Y(l, t);
  }
  function Te(d) {
    const h = new Uint8Array(32);
    return J(h, d), h[0] & 1;
  }
  function be(d, h) {
    for (let l = 0; l < 16; l++)
      d[l] = h[2 * l] + (h[2 * l + 1] << 8);
    d[15] &= 32767;
  }
  function Ce(d, h, l) {
    for (let t = 0; t < 16; t++)
      d[t] = h[t] + l[t];
  }
  function $(d, h, l) {
    for (let t = 0; t < 16; t++)
      d[t] = h[t] - l[t];
  }
  function j(d, h, l) {
    let t, a, R = 0, P = 0, D = 0, U = 0, z = 0, H = 0, Ae = 0, le = 0, Re = 0, ye = 0, he = 0, ne = 0, te = 0, X = 0, W = 0, K = 0, ie = 0, pe = 0, G = 0, Me = 0, Be = 0, He = 0, Ke = 0, ze = 0, Ve = 0, Xe = 0, st = 0, $e = 0, ct = 0, vt = 0, At = 0, se = l[0], Z = l[1], oe = l[2], ae = l[3], fe = l[4], Q = l[5], _e = l[6], xe = l[7], ve = l[8], we = l[9], me = l[10], de = l[11], ce = l[12], k = l[13], Ee = l[14], Se = l[15];
    t = h[0], R += t * se, P += t * Z, D += t * oe, U += t * ae, z += t * fe, H += t * Q, Ae += t * _e, le += t * xe, Re += t * ve, ye += t * we, he += t * me, ne += t * de, te += t * ce, X += t * k, W += t * Ee, K += t * Se, t = h[1], P += t * se, D += t * Z, U += t * oe, z += t * ae, H += t * fe, Ae += t * Q, le += t * _e, Re += t * xe, ye += t * ve, he += t * we, ne += t * me, te += t * de, X += t * ce, W += t * k, K += t * Ee, ie += t * Se, t = h[2], D += t * se, U += t * Z, z += t * oe, H += t * ae, Ae += t * fe, le += t * Q, Re += t * _e, ye += t * xe, he += t * ve, ne += t * we, te += t * me, X += t * de, W += t * ce, K += t * k, ie += t * Ee, pe += t * Se, t = h[3], U += t * se, z += t * Z, H += t * oe, Ae += t * ae, le += t * fe, Re += t * Q, ye += t * _e, he += t * xe, ne += t * ve, te += t * we, X += t * me, W += t * de, K += t * ce, ie += t * k, pe += t * Ee, G += t * Se, t = h[4], z += t * se, H += t * Z, Ae += t * oe, le += t * ae, Re += t * fe, ye += t * Q, he += t * _e, ne += t * xe, te += t * ve, X += t * we, W += t * me, K += t * de, ie += t * ce, pe += t * k, G += t * Ee, Me += t * Se, t = h[5], H += t * se, Ae += t * Z, le += t * oe, Re += t * ae, ye += t * fe, he += t * Q, ne += t * _e, te += t * xe, X += t * ve, W += t * we, K += t * me, ie += t * de, pe += t * ce, G += t * k, Me += t * Ee, Be += t * Se, t = h[6], Ae += t * se, le += t * Z, Re += t * oe, ye += t * ae, he += t * fe, ne += t * Q, te += t * _e, X += t * xe, W += t * ve, K += t * we, ie += t * me, pe += t * de, G += t * ce, Me += t * k, Be += t * Ee, He += t * Se, t = h[7], le += t * se, Re += t * Z, ye += t * oe, he += t * ae, ne += t * fe, te += t * Q, X += t * _e, W += t * xe, K += t * ve, ie += t * we, pe += t * me, G += t * de, Me += t * ce, Be += t * k, He += t * Ee, Ke += t * Se, t = h[8], Re += t * se, ye += t * Z, he += t * oe, ne += t * ae, te += t * fe, X += t * Q, W += t * _e, K += t * xe, ie += t * ve, pe += t * we, G += t * me, Me += t * de, Be += t * ce, He += t * k, Ke += t * Ee, ze += t * Se, t = h[9], ye += t * se, he += t * Z, ne += t * oe, te += t * ae, X += t * fe, W += t * Q, K += t * _e, ie += t * xe, pe += t * ve, G += t * we, Me += t * me, Be += t * de, He += t * ce, Ke += t * k, ze += t * Ee, Ve += t * Se, t = h[10], he += t * se, ne += t * Z, te += t * oe, X += t * ae, W += t * fe, K += t * Q, ie += t * _e, pe += t * xe, G += t * ve, Me += t * we, Be += t * me, He += t * de, Ke += t * ce, ze += t * k, Ve += t * Ee, Xe += t * Se, t = h[11], ne += t * se, te += t * Z, X += t * oe, W += t * ae, K += t * fe, ie += t * Q, pe += t * _e, G += t * xe, Me += t * ve, Be += t * we, He += t * me, Ke += t * de, ze += t * ce, Ve += t * k, Xe += t * Ee, st += t * Se, t = h[12], te += t * se, X += t * Z, W += t * oe, K += t * ae, ie += t * fe, pe += t * Q, G += t * _e, Me += t * xe, Be += t * ve, He += t * we, Ke += t * me, ze += t * de, Ve += t * ce, Xe += t * k, st += t * Ee, $e += t * Se, t = h[13], X += t * se, W += t * Z, K += t * oe, ie += t * ae, pe += t * fe, G += t * Q, Me += t * _e, Be += t * xe, He += t * ve, Ke += t * we, ze += t * me, Ve += t * de, Xe += t * ce, st += t * k, $e += t * Ee, ct += t * Se, t = h[14], W += t * se, K += t * Z, ie += t * oe, pe += t * ae, G += t * fe, Me += t * Q, Be += t * _e, He += t * xe, Ke += t * ve, ze += t * we, Ve += t * me, Xe += t * de, st += t * ce, $e += t * k, ct += t * Ee, vt += t * Se, t = h[15], K += t * se, ie += t * Z, pe += t * oe, G += t * ae, Me += t * fe, Be += t * Q, He += t * _e, Ke += t * xe, ze += t * ve, Ve += t * we, Xe += t * me, st += t * de, $e += t * ce, ct += t * k, vt += t * Ee, At += t * Se, R += 38 * ie, P += 38 * pe, D += 38 * G, U += 38 * Me, z += 38 * Be, H += 38 * He, Ae += 38 * Ke, le += 38 * ze, Re += 38 * Ve, ye += 38 * Xe, he += 38 * st, ne += 38 * $e, te += 38 * ct, X += 38 * vt, W += 38 * At, a = 1, t = R + a + 65535, a = Math.floor(t / 65536), R = t - a * 65536, t = P + a + 65535, a = Math.floor(t / 65536), P = t - a * 65536, t = D + a + 65535, a = Math.floor(t / 65536), D = t - a * 65536, t = U + a + 65535, a = Math.floor(t / 65536), U = t - a * 65536, t = z + a + 65535, a = Math.floor(t / 65536), z = t - a * 65536, t = H + a + 65535, a = Math.floor(t / 65536), H = t - a * 65536, t = Ae + a + 65535, a = Math.floor(t / 65536), Ae = t - a * 65536, t = le + a + 65535, a = Math.floor(t / 65536), le = t - a * 65536, t = Re + a + 65535, a = Math.floor(t / 65536), Re = t - a * 65536, t = ye + a + 65535, a = Math.floor(t / 65536), ye = t - a * 65536, t = he + a + 65535, a = Math.floor(t / 65536), he = t - a * 65536, t = ne + a + 65535, a = Math.floor(t / 65536), ne = t - a * 65536, t = te + a + 65535, a = Math.floor(t / 65536), te = t - a * 65536, t = X + a + 65535, a = Math.floor(t / 65536), X = t - a * 65536, t = W + a + 65535, a = Math.floor(t / 65536), W = t - a * 65536, t = K + a + 65535, a = Math.floor(t / 65536), K = t - a * 65536, R += a - 1 + 37 * (a - 1), a = 1, t = R + a + 65535, a = Math.floor(t / 65536), R = t - a * 65536, t = P + a + 65535, a = Math.floor(t / 65536), P = t - a * 65536, t = D + a + 65535, a = Math.floor(t / 65536), D = t - a * 65536, t = U + a + 65535, a = Math.floor(t / 65536), U = t - a * 65536, t = z + a + 65535, a = Math.floor(t / 65536), z = t - a * 65536, t = H + a + 65535, a = Math.floor(t / 65536), H = t - a * 65536, t = Ae + a + 65535, a = Math.floor(t / 65536), Ae = t - a * 65536, t = le + a + 65535, a = Math.floor(t / 65536), le = t - a * 65536, t = Re + a + 65535, a = Math.floor(t / 65536), Re = t - a * 65536, t = ye + a + 65535, a = Math.floor(t / 65536), ye = t - a * 65536, t = he + a + 65535, a = Math.floor(t / 65536), he = t - a * 65536, t = ne + a + 65535, a = Math.floor(t / 65536), ne = t - a * 65536, t = te + a + 65535, a = Math.floor(t / 65536), te = t - a * 65536, t = X + a + 65535, a = Math.floor(t / 65536), X = t - a * 65536, t = W + a + 65535, a = Math.floor(t / 65536), W = t - a * 65536, t = K + a + 65535, a = Math.floor(t / 65536), K = t - a * 65536, R += a - 1 + 37 * (a - 1), d[0] = R, d[1] = P, d[2] = D, d[3] = U, d[4] = z, d[5] = H, d[6] = Ae, d[7] = le, d[8] = Re, d[9] = ye, d[10] = he, d[11] = ne, d[12] = te, d[13] = X, d[14] = W, d[15] = K;
  }
  function je(d, h) {
    j(d, h, h);
  }
  function et(d, h) {
    const l = o();
    let t;
    for (t = 0; t < 16; t++)
      l[t] = h[t];
    for (t = 253; t >= 0; t--)
      je(l, l), t !== 2 && t !== 4 && j(l, l, h);
    for (t = 0; t < 16; t++)
      d[t] = l[t];
  }
  function ge(d, h) {
    const l = o();
    let t;
    for (t = 0; t < 16; t++)
      l[t] = h[t];
    for (t = 250; t >= 0; t--)
      je(l, l), t !== 1 && j(l, l, h);
    for (t = 0; t < 16; t++)
      d[t] = l[t];
  }
  function Fe(d, h) {
    const l = o(), t = o(), a = o(), R = o(), P = o(), D = o(), U = o(), z = o(), H = o();
    $(l, d[1], d[0]), $(H, h[1], h[0]), j(l, l, H), Ce(t, d[0], d[1]), Ce(H, h[0], h[1]), j(t, t, H), j(a, d[3], h[3]), j(a, a, s), j(R, d[2], h[2]), Ce(R, R, R), $(P, t, l), $(D, R, a), Ce(U, R, a), Ce(z, t, l), j(d[0], P, D), j(d[1], z, U), j(d[2], U, D), j(d[3], P, z);
  }
  function Ue(d, h, l) {
    for (let t = 0; t < 4; t++)
      M(d[t], h[t], l);
  }
  function We(d, h) {
    const l = o(), t = o(), a = o();
    et(a, h[2]), j(l, h[0], a), j(t, h[1], a), J(d, t), d[31] ^= Te(l) << 7;
  }
  function x(d, h, l) {
    m(d[0], S), m(d[1], E), m(d[2], E), m(d[3], S);
    for (let t = 255; t >= 0; --t) {
      const a = l[t / 8 | 0] >> (t & 7) & 1;
      Ue(d, h, a), Fe(h, d), Fe(d, d), Ue(d, h, a);
    }
  }
  function _(d, h) {
    const l = [o(), o(), o(), o()];
    m(l[0], u), m(l[1], g), m(l[2], E), j(l[3], u, g), x(d, l, h);
  }
  function q(d) {
    if (d.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const h = (0, n.hash)(d);
    h[0] &= 248, h[31] &= 127, h[31] |= 64;
    const l = new Uint8Array(32), t = [o(), o(), o(), o()];
    _(t, h), We(l, t);
    const a = new Uint8Array(64);
    return a.set(d), a.set(l, 32), {
      publicKey: l,
      secretKey: a
    };
  }
  e.generateKeyPairFromSeed = q;
  function ue(d) {
    const h = (0, r.randomBytes)(32, d), l = q(h);
    return (0, c.wipe)(h), l;
  }
  e.generateKeyPair = ue;
  function A(d) {
    if (d.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(d.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = A;
  const O = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function I(d, h) {
    let l, t, a, R;
    for (t = 63; t >= 32; --t) {
      for (l = 0, a = t - 32, R = t - 12; a < R; ++a)
        h[a] += l - 16 * h[t] * O[a - (t - 32)], l = Math.floor((h[a] + 128) / 256), h[a] -= l * 256;
      h[a] += l, h[t] = 0;
    }
    for (l = 0, a = 0; a < 32; a++)
      h[a] += l - (h[31] >> 4) * O[a], l = h[a] >> 8, h[a] &= 255;
    for (a = 0; a < 32; a++)
      h[a] -= l * O[a];
    for (t = 0; t < 32; t++)
      h[t + 1] += h[t] >> 8, d[t] = h[t] & 255;
  }
  function L(d) {
    const h = new Float64Array(64);
    for (let l = 0; l < 64; l++)
      h[l] = d[l];
    for (let l = 0; l < 64; l++)
      d[l] = 0;
    I(d, h);
  }
  function Le(d, h) {
    const l = new Float64Array(64), t = [o(), o(), o(), o()], a = (0, n.hash)(d.subarray(0, 32));
    a[0] &= 248, a[31] &= 127, a[31] |= 64;
    const R = new Uint8Array(64);
    R.set(a.subarray(32), 32);
    const P = new n.SHA512();
    P.update(R.subarray(32)), P.update(h);
    const D = P.digest();
    P.clean(), L(D), _(t, D), We(R, t), P.reset(), P.update(R.subarray(0, 32)), P.update(d.subarray(32)), P.update(h);
    const U = P.digest();
    L(U);
    for (let z = 0; z < 32; z++)
      l[z] = D[z];
    for (let z = 0; z < 32; z++)
      for (let H = 0; H < 32; H++)
        l[z + H] += U[z] * a[H];
    return I(R.subarray(32), l), R;
  }
  e.sign = Le;
  function re(d, h) {
    const l = o(), t = o(), a = o(), R = o(), P = o(), D = o(), U = o();
    return m(d[2], E), be(d[1], h), je(a, d[1]), j(R, a, y), $(a, a, d[2]), Ce(R, d[2], R), je(P, R), je(D, P), j(U, D, P), j(l, U, a), j(l, l, R), ge(l, l), j(l, l, a), j(l, l, R), j(l, l, R), j(d[0], l, R), je(t, d[0]), j(t, t, R), N(t, a) && j(d[0], d[0], v), je(t, d[0]), j(t, t, R), N(t, a) ? -1 : (Te(d[0]) === h[31] >> 7 && $(d[0], S, d[0]), j(d[3], d[0], d[1]), 0);
  }
  function xt(d, h, l) {
    const t = new Uint8Array(32), a = [o(), o(), o(), o()], R = [o(), o(), o(), o()];
    if (l.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (re(R, d))
      return !1;
    const P = new n.SHA512();
    P.update(l.subarray(0, 32)), P.update(d), P.update(h);
    const D = P.digest();
    return L(D), x(a, R, D), _(R, l.subarray(32)), Fe(a, R), We(t, a), !Y(l, t);
  }
  e.verify = xt;
  function B(d) {
    let h = [o(), o(), o(), o()];
    if (re(h, d))
      throw new Error("Ed25519: invalid public key");
    let l = o(), t = o(), a = h[1];
    Ce(l, E, a), $(t, E, a), et(t, t), j(l, l, t);
    let R = new Uint8Array(32);
    return J(R, l), R;
  }
  e.convertPublicKeyToX25519 = B;
  function bt(d) {
    const h = (0, n.hash)(d.subarray(0, 32));
    h[0] &= 248, h[31] &= 127, h[31] |= 64;
    const l = new Uint8Array(h.subarray(0, 32));
    return (0, c.wipe)(h), l;
  }
  e.convertSecretKeyToX25519 = bt;
})(ir);
const Ji = "EdDSA", Wi = "JWT", kr = ".", Jr = "base64url", Vi = "utf8", Yi = "utf8", qi = ":", Xi = "did", Zi = "key", Or = "base58btc", Qi = "z", es = "K36", ts = 32, rs = (e) => JSON.stringify(e, (r, n) => typeof n == "bigint" ? n.toString() + "n" : n);
function ns(e) {
  return typeof e == "string" ? e : rs(e) || "";
}
function $t(e) {
  return rr(tr(ns(e), Vi), Jr);
}
function is(e) {
  const r = tr(es, Or), n = Qi + rr(ti([r, e]), Or);
  return [Xi, Zi, n].join(qi);
}
function ss(e) {
  return rr(e, Jr);
}
function os(e) {
  return tr([$t(e.header), $t(e.payload)].join(kr), Yi);
}
function as(e) {
  return [
    $t(e.header),
    $t(e.payload),
    ss(e.signature)
  ].join(kr);
}
function vo(e = Nr.randomBytes(ts)) {
  return ir.generateKeyPairFromSeed(e);
}
async function wo(e, r, n, c, o = ei.fromMiliseconds(Date.now())) {
  const b = { alg: Ji, typ: Wi }, S = is(c.publicKey), E = o + n, y = { iss: S, sub: e, aud: r, iat: o, exp: E }, s = os({ header: b, payload: y }), u = ir.sign(c.secretKey, s);
  return as({ header: b, payload: y, signature: u });
}
const fs = "PARSE_ERROR", cs = "INVALID_REQUEST", us = "METHOD_NOT_FOUND", ls = "INVALID_PARAMS", Wr = "INTERNAL_ERROR", sr = "SERVER_ERROR", hs = [-32700, -32600, -32601, -32602, -32603], Et = {
  [fs]: { code: -32700, message: "Parse error" },
  [cs]: { code: -32600, message: "Invalid Request" },
  [us]: { code: -32601, message: "Method not found" },
  [ls]: { code: -32602, message: "Invalid params" },
  [Wr]: { code: -32603, message: "Internal error" },
  [sr]: { code: -32e3, message: "Server error" }
}, Vr = sr;
function ds(e) {
  return hs.includes(e);
}
function Ir(e) {
  return Object.keys(Et).includes(e) ? Et[e] : Et[Vr];
}
function bs(e) {
  const r = Object.values(Et).find((n) => n.code === e);
  return r || Et[Vr];
}
function gs(e, r, n) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${r}`) : e;
}
var Yr = {};
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
var Xt = function(e, r) {
  return Xt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, c) {
    n.__proto__ = c;
  } || function(n, c) {
    for (var o in c)
      c.hasOwnProperty(o) && (n[o] = c[o]);
  }, Xt(e, r);
};
function ys(e, r) {
  Xt(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
}
var Zt = function() {
  return Zt = Object.assign || function(r) {
    for (var n, c = 1, o = arguments.length; c < o; c++) {
      n = arguments[c];
      for (var b in n)
        Object.prototype.hasOwnProperty.call(n, b) && (r[b] = n[b]);
    }
    return r;
  }, Zt.apply(this, arguments);
};
function ps(e, r) {
  var n = {};
  for (var c in e)
    Object.prototype.hasOwnProperty.call(e, c) && r.indexOf(c) < 0 && (n[c] = e[c]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, c = Object.getOwnPropertySymbols(e); o < c.length; o++)
      r.indexOf(c[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[o]) && (n[c[o]] = e[c[o]]);
  return n;
}
function _s(e, r, n, c) {
  var o = arguments.length, b = o < 3 ? r : c === null ? c = Object.getOwnPropertyDescriptor(r, n) : c, S;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    b = Reflect.decorate(e, r, n, c);
  else
    for (var E = e.length - 1; E >= 0; E--)
      (S = e[E]) && (b = (o < 3 ? S(b) : o > 3 ? S(r, n, b) : S(r, n)) || b);
  return o > 3 && b && Object.defineProperty(r, n, b), b;
}
function xs(e, r) {
  return function(n, c) {
    r(n, c, e);
  };
}
function vs(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function ws(e, r, n, c) {
  function o(b) {
    return b instanceof n ? b : new n(function(S) {
      S(b);
    });
  }
  return new (n || (n = Promise))(function(b, S) {
    function E(u) {
      try {
        s(c.next(u));
      } catch (g) {
        S(g);
      }
    }
    function y(u) {
      try {
        s(c.throw(u));
      } catch (g) {
        S(g);
      }
    }
    function s(u) {
      u.done ? b(u.value) : o(u.value).then(E, y);
    }
    s((c = c.apply(e, r || [])).next());
  });
}
function ms(e, r) {
  var n = { label: 0, sent: function() {
    if (b[0] & 1)
      throw b[1];
    return b[1];
  }, trys: [], ops: [] }, c, o, b, S;
  return S = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
    return this;
  }), S;
  function E(s) {
    return function(u) {
      return y([s, u]);
    };
  }
  function y(s) {
    if (c)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (c = 1, o && (b = s[0] & 2 ? o.return : s[0] ? o.throw || ((b = o.return) && b.call(o), 0) : o.next) && !(b = b.call(o, s[1])).done)
          return b;
        switch (o = 0, b && (s = [s[0] & 2, b.value]), s[0]) {
          case 0:
          case 1:
            b = s;
            break;
          case 4:
            return n.label++, { value: s[1], done: !1 };
          case 5:
            n.label++, o = s[1], s = [0];
            continue;
          case 7:
            s = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (b = n.trys, !(b = b.length > 0 && b[b.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!b || s[1] > b[0] && s[1] < b[3])) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < b[1]) {
              n.label = b[1], b = s;
              break;
            }
            if (b && n.label < b[2]) {
              n.label = b[2], n.ops.push(s);
              break;
            }
            b[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        s = r.call(e, n);
      } catch (u) {
        s = [6, u], o = 0;
      } finally {
        c = b = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function Es(e, r, n, c) {
  c === void 0 && (c = n), e[c] = r[n];
}
function Ss(e, r) {
  for (var n in e)
    n !== "default" && !r.hasOwnProperty(n) && (r[n] = e[n]);
}
function Qt(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, n = r && e[r], c = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && c >= e.length && (e = void 0), { value: e && e[c++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qr(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var c = n.call(e), o, b = [], S;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = c.next()).done; )
      b.push(o.value);
  } catch (E) {
    S = { error: E };
  } finally {
    try {
      o && !o.done && (n = c.return) && n.call(c);
    } finally {
      if (S)
        throw S.error;
    }
  }
  return b;
}
function Os() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e = e.concat(qr(arguments[r]));
  return e;
}
function Is() {
  for (var e = 0, r = 0, n = arguments.length; r < n; r++)
    e += arguments[r].length;
  for (var c = Array(e), o = 0, r = 0; r < n; r++)
    for (var b = arguments[r], S = 0, E = b.length; S < E; S++, o++)
      c[o] = b[S];
  return c;
}
function It(e) {
  return this instanceof It ? (this.v = e, this) : new It(e);
}
function Ts(e, r, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var c = n.apply(e, r || []), o, b = [];
  return o = {}, S("next"), S("throw"), S("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function S(v) {
    c[v] && (o[v] = function(m) {
      return new Promise(function(w, M) {
        b.push([v, m, w, M]) > 1 || E(v, m);
      });
    });
  }
  function E(v, m) {
    try {
      y(c[v](m));
    } catch (w) {
      g(b[0][3], w);
    }
  }
  function y(v) {
    v.value instanceof It ? Promise.resolve(v.value.v).then(s, u) : g(b[0][2], v);
  }
  function s(v) {
    E("next", v);
  }
  function u(v) {
    E("throw", v);
  }
  function g(v, m) {
    v(m), b.shift(), b.length && E(b[0][0], b[0][1]);
  }
}
function Ls(e) {
  var r, n;
  return r = {}, c("next"), c("throw", function(o) {
    throw o;
  }), c("return"), r[Symbol.iterator] = function() {
    return this;
  }, r;
  function c(o, b) {
    r[o] = e[o] ? function(S) {
      return (n = !n) ? { value: It(e[o](S)), done: o === "return" } : b ? b(S) : S;
    } : b;
  }
}
function As(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], n;
  return r ? r.call(e) : (e = typeof Qt == "function" ? Qt(e) : e[Symbol.iterator](), n = {}, c("next"), c("throw"), c("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function c(b) {
    n[b] = e[b] && function(S) {
      return new Promise(function(E, y) {
        S = e[b](S), o(E, y, S.done, S.value);
      });
    };
  }
  function o(b, S, E, y) {
    Promise.resolve(y).then(function(s) {
      b({ value: s, done: E });
    }, S);
  }
}
function Rs(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}
function Ps(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r.default = e, r;
}
function Cs(e) {
  return e && e.__esModule ? e : { default: e };
}
function js(e, r) {
  if (!r.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return r.get(e);
}
function Ms(e, r, n) {
  if (!r.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return r.set(e, n), n;
}
const Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Zt;
  },
  __asyncDelegator: Ls,
  __asyncGenerator: Ts,
  __asyncValues: As,
  __await: It,
  __awaiter: ws,
  __classPrivateFieldGet: js,
  __classPrivateFieldSet: Ms,
  __createBinding: Es,
  __decorate: _s,
  __exportStar: Ss,
  __extends: ys,
  __generator: ms,
  __importDefault: Cs,
  __importStar: Ps,
  __makeTemplateObject: Rs,
  __metadata: vs,
  __param: xs,
  __read: qr,
  __rest: ps,
  __spread: Os,
  __spreadArrays: Is,
  __values: Qt
}, Symbol.toStringTag, { value: "Module" })), Bs = /* @__PURE__ */ jr(Ns);
var nt = {}, Tr;
function zs() {
  if (Tr)
    return nt;
  Tr = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.isBrowserCryptoAvailable = nt.getSubtleCrypto = nt.getBrowerCrypto = void 0;
  function e() {
    return (Ze === null || Ze === void 0 ? void 0 : Ze.crypto) || (Ze === null || Ze === void 0 ? void 0 : Ze.msCrypto) || {};
  }
  nt.getBrowerCrypto = e;
  function r() {
    const c = e();
    return c.subtle || c.webkitSubtle;
  }
  nt.getSubtleCrypto = r;
  function n() {
    return !!e() && !!r();
  }
  return nt.isBrowserCryptoAvailable = n, nt;
}
var it = {}, Lr;
function Ds() {
  if (Lr)
    return it;
  Lr = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.isBrowser = it.isNode = it.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  it.isReactNative = e;
  function r() {
    return typeof qe.process < "u" && typeof qe.process.versions < "u" && typeof qe.process.versions.node < "u";
  }
  it.isNode = r;
  function n() {
    return !e() && !r();
  }
  return it.isBrowser = n, it;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const r = Bs;
  r.__exportStar(zs(), e), r.__exportStar(Ds(), e);
})(Yr);
function Xr(e = 3) {
  const r = Date.now() * Math.pow(10, e), n = Math.floor(Math.random() * Math.pow(10, e));
  return r + n;
}
function mo(e = 6) {
  return BigInt(Xr(e));
}
function Eo(e, r, n) {
  return {
    id: n || Xr(),
    jsonrpc: "2.0",
    method: e,
    params: r
  };
}
function So(e, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: r
  };
}
function Us(e, r, n) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: Hs(r)
  };
}
function Hs(e, r) {
  return typeof e > "u" ? Ir(Wr) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Ir(sr)), { message: e })), ds(e.code) && (e = bs(e.code)), e);
}
class Ks {
}
class $s extends Ks {
  constructor() {
    super();
  }
}
class Oo extends $s {
  constructor(r) {
    super();
  }
}
const Gs = "^https?:", Fs = "^wss?:";
function ks(e) {
  const r = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!r || !r.length))
    return r[0];
}
function Zr(e, r) {
  const n = ks(e);
  return typeof n > "u" ? !1 : new RegExp(r).test(n);
}
function Io(e) {
  return Zr(e, Gs);
}
function Ar(e) {
  return Zr(e, Fs);
}
function Js(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Qr(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function To(e) {
  return Qr(e) && "method" in e;
}
function Lo(e) {
  return Qr(e) && (Ws(e) || Vs(e));
}
function Ws(e) {
  return "result" in e;
}
function Vs(e) {
  return "error" in e;
}
const Ys = (e) => JSON.stringify(e, (r, n) => typeof n == "bigint" ? n.toString() + "n" : n), qs = (e) => {
  const r = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, n = e.replace(r, '$1"$2n"$3');
  return JSON.parse(n, (c, o) => typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o);
};
function Xs(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return qs(e);
  } catch {
    return e;
  }
}
function Zs(e) {
  return typeof e == "string" ? e : Ys(e) || "";
}
const Qs = () => typeof WebSocket < "u" ? WebSocket : typeof qe.global < "u" && typeof qe.global.WebSocket < "u" ? qe.global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), eo = () => typeof WebSocket < "u" || typeof qe.global < "u" && typeof qe.global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Rr = (e) => e.split("?")[0], Pr = 10, to = Qs();
class Ao {
  constructor(r) {
    if (this.url = r, this.events = new $n.EventEmitter(), this.registering = !1, !Ar(r))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
    this.url = r;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(r, n) {
    this.events.on(r, n);
  }
  once(r, n) {
    this.events.once(r, n);
  }
  off(r, n) {
    this.events.off(r, n);
  }
  removeListener(r, n) {
    this.events.removeListener(r, n);
  }
  async open(r = this.url) {
    await this.register(r);
  }
  async close() {
    return new Promise((r, n) => {
      if (typeof this.socket > "u") {
        n(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (c) => {
        this.onClose(c), r();
      }, this.socket.close();
    });
  }
  async send(r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Zs(r));
    } catch (n) {
      this.onError(r.id, n);
    }
  }
  register(r = this.url) {
    if (!Ar(r))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
    if (this.registering) {
      const n = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= n || this.events.listenerCount("open") >= n) && this.events.setMaxListeners(n + 1), new Promise((c, o) => {
        this.events.once("register_error", (b) => {
          this.resetMaxListeners(), o(b);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o(new Error("WebSocket connection is missing or invalid"));
          c(this.socket);
        });
      });
    }
    return this.url = r, this.registering = !0, new Promise((n, c) => {
      const o = new URLSearchParams(r).get("origin"), b = Yr.isReactNative() ? { headers: { origin: o } } : { rejectUnauthorized: !Js(r) }, S = new to(r, [], b);
      eo() ? S.onerror = (E) => {
        const y = E;
        c(this.emitError(y.error));
      } : S.on("error", (E) => {
        c(this.emitError(E));
      }), S.onopen = () => {
        this.onOpen(S), n(S);
      };
    });
  }
  onOpen(r) {
    r.onmessage = (n) => this.onPayload(n), r.onclose = (n) => this.onClose(n), this.socket = r, this.registering = !1, this.events.emit("open");
  }
  onClose(r) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", r);
  }
  onPayload(r) {
    if (typeof r.data > "u")
      return;
    const n = typeof r.data == "string" ? Xs(r.data) : r.data;
    this.events.emit("payload", n);
  }
  onError(r, n) {
    const c = this.parseError(n), o = c.message || c.toString(), b = Us(r, o);
    this.events.emit("payload", b);
  }
  parseError(r, n = this.url) {
    return gs(r, Rr(n), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Pr && this.events.setMaxListeners(Pr);
  }
  emitError(r) {
    const n = this.parseError(new Error((r == null ? void 0 : r.message) || `WebSocket connection failed for host: ${Rr(this.url)}`));
    return this.events.emit("register_error", n), n;
  }
}
var Gt = { exports: {} };
Gt.exports;
(function(e, r) {
  var n = 200, c = "__lodash_hash_undefined__", o = 1, b = 2, S = 9007199254740991, E = "[object Arguments]", y = "[object Array]", s = "[object AsyncFunction]", u = "[object Boolean]", g = "[object Date]", v = "[object Error]", m = "[object Function]", w = "[object GeneratorFunction]", M = "[object Map]", J = "[object Number]", Y = "[object Null]", N = "[object Object]", Te = "[object Promise]", be = "[object Proxy]", Ce = "[object RegExp]", $ = "[object Set]", j = "[object String]", je = "[object Symbol]", et = "[object Undefined]", ge = "[object WeakMap]", Fe = "[object ArrayBuffer]", Ue = "[object DataView]", We = "[object Float32Array]", x = "[object Float64Array]", _ = "[object Int8Array]", q = "[object Int16Array]", ue = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", I = "[object Uint16Array]", L = "[object Uint32Array]", Le = /[\\^$.*+?()[\]{}|]/g, re = /^\[object .+?Constructor\]$/, xt = /^(?:0|[1-9]\d*)$/, B = {};
  B[We] = B[x] = B[_] = B[q] = B[ue] = B[A] = B[O] = B[I] = B[L] = !0, B[E] = B[y] = B[Fe] = B[u] = B[Ue] = B[g] = B[v] = B[m] = B[M] = B[J] = B[N] = B[Ce] = B[$] = B[j] = B[ge] = !1;
  var bt = typeof Ze == "object" && Ze && Ze.Object === Object && Ze, d = typeof self == "object" && self && self.Object === Object && self, h = bt || d || Function("return this")(), l = r && !r.nodeType && r, t = l && !0 && e && !e.nodeType && e, a = t && t.exports === l, R = a && bt.process, P = function() {
    try {
      return R && R.binding && R.binding("util");
    } catch {
    }
  }(), D = P && P.isTypedArray;
  function U(i, f) {
    for (var p = -1, T = i == null ? 0 : i.length, F = 0, C = []; ++p < T; ) {
      var ee = i[p];
      f(ee, p, i) && (C[F++] = ee);
    }
    return C;
  }
  function z(i, f) {
    for (var p = -1, T = f.length, F = i.length; ++p < T; )
      i[F + p] = f[p];
    return i;
  }
  function H(i, f) {
    for (var p = -1, T = i == null ? 0 : i.length; ++p < T; )
      if (f(i[p], p, i))
        return !0;
    return !1;
  }
  function Ae(i, f) {
    for (var p = -1, T = Array(i); ++p < i; )
      T[p] = f(p);
    return T;
  }
  function le(i) {
    return function(f) {
      return i(f);
    };
  }
  function Re(i, f) {
    return i.has(f);
  }
  function ye(i, f) {
    return i == null ? void 0 : i[f];
  }
  function he(i) {
    var f = -1, p = Array(i.size);
    return i.forEach(function(T, F) {
      p[++f] = [F, T];
    }), p;
  }
  function ne(i, f) {
    return function(p) {
      return i(f(p));
    };
  }
  function te(i) {
    var f = -1, p = Array(i.size);
    return i.forEach(function(T) {
      p[++f] = T;
    }), p;
  }
  var X = Array.prototype, W = Function.prototype, K = Object.prototype, ie = h["__core-js_shared__"], pe = W.toString, G = K.hasOwnProperty, Me = function() {
    var i = /[^.]+$/.exec(ie && ie.keys && ie.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Be = K.toString, He = RegExp(
    "^" + pe.call(G).replace(Le, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ke = a ? h.Buffer : void 0, ze = h.Symbol, Ve = h.Uint8Array, Xe = K.propertyIsEnumerable, st = X.splice, $e = ze ? ze.toStringTag : void 0, ct = Object.getOwnPropertySymbols, vt = Ke ? Ke.isBuffer : void 0, At = ne(Object.keys, Object), se = gt(h, "DataView"), Z = gt(h, "Map"), oe = gt(h, "Promise"), ae = gt(h, "Set"), fe = gt(h, "WeakMap"), Q = gt(Object, "create"), _e = lt(se), xe = lt(Z), ve = lt(oe), we = lt(ae), me = lt(fe), de = ze ? ze.prototype : void 0, ce = de ? de.valueOf : void 0;
  function k(i) {
    var f = -1, p = i == null ? 0 : i.length;
    for (this.clear(); ++f < p; ) {
      var T = i[f];
      this.set(T[0], T[1]);
    }
  }
  function Ee() {
    this.__data__ = Q ? Q(null) : {}, this.size = 0;
  }
  function Se(i) {
    var f = this.has(i) && delete this.__data__[i];
    return this.size -= f ? 1 : 0, f;
  }
  function en(i) {
    var f = this.__data__;
    if (Q) {
      var p = f[i];
      return p === c ? void 0 : p;
    }
    return G.call(f, i) ? f[i] : void 0;
  }
  function tn(i) {
    var f = this.__data__;
    return Q ? f[i] !== void 0 : G.call(f, i);
  }
  function rn(i, f) {
    var p = this.__data__;
    return this.size += this.has(i) ? 0 : 1, p[i] = Q && f === void 0 ? c : f, this;
  }
  k.prototype.clear = Ee, k.prototype.delete = Se, k.prototype.get = en, k.prototype.has = tn, k.prototype.set = rn;
  function tt(i) {
    var f = -1, p = i == null ? 0 : i.length;
    for (this.clear(); ++f < p; ) {
      var T = i[f];
      this.set(T[0], T[1]);
    }
  }
  function nn() {
    this.__data__ = [], this.size = 0;
  }
  function sn(i) {
    var f = this.__data__, p = Pt(f, i);
    if (p < 0)
      return !1;
    var T = f.length - 1;
    return p == T ? f.pop() : st.call(f, p, 1), --this.size, !0;
  }
  function on(i) {
    var f = this.__data__, p = Pt(f, i);
    return p < 0 ? void 0 : f[p][1];
  }
  function an(i) {
    return Pt(this.__data__, i) > -1;
  }
  function fn(i, f) {
    var p = this.__data__, T = Pt(p, i);
    return T < 0 ? (++this.size, p.push([i, f])) : p[T][1] = f, this;
  }
  tt.prototype.clear = nn, tt.prototype.delete = sn, tt.prototype.get = on, tt.prototype.has = an, tt.prototype.set = fn;
  function ut(i) {
    var f = -1, p = i == null ? 0 : i.length;
    for (this.clear(); ++f < p; ) {
      var T = i[f];
      this.set(T[0], T[1]);
    }
  }
  function cn() {
    this.size = 0, this.__data__ = {
      hash: new k(),
      map: new (Z || tt)(),
      string: new k()
    };
  }
  function un(i) {
    var f = Ct(this, i).delete(i);
    return this.size -= f ? 1 : 0, f;
  }
  function ln(i) {
    return Ct(this, i).get(i);
  }
  function hn(i) {
    return Ct(this, i).has(i);
  }
  function dn(i, f) {
    var p = Ct(this, i), T = p.size;
    return p.set(i, f), this.size += p.size == T ? 0 : 1, this;
  }
  ut.prototype.clear = cn, ut.prototype.delete = un, ut.prototype.get = ln, ut.prototype.has = hn, ut.prototype.set = dn;
  function Rt(i) {
    var f = -1, p = i == null ? 0 : i.length;
    for (this.__data__ = new ut(); ++f < p; )
      this.add(i[f]);
  }
  function bn(i) {
    return this.__data__.set(i, c), this;
  }
  function gn(i) {
    return this.__data__.has(i);
  }
  Rt.prototype.add = Rt.prototype.push = bn, Rt.prototype.has = gn;
  function ot(i) {
    var f = this.__data__ = new tt(i);
    this.size = f.size;
  }
  function yn() {
    this.__data__ = new tt(), this.size = 0;
  }
  function pn(i) {
    var f = this.__data__, p = f.delete(i);
    return this.size = f.size, p;
  }
  function _n(i) {
    return this.__data__.get(i);
  }
  function xn(i) {
    return this.__data__.has(i);
  }
  function vn(i, f) {
    var p = this.__data__;
    if (p instanceof tt) {
      var T = p.__data__;
      if (!Z || T.length < n - 1)
        return T.push([i, f]), this.size = ++p.size, this;
      p = this.__data__ = new ut(T);
    }
    return p.set(i, f), this.size = p.size, this;
  }
  ot.prototype.clear = yn, ot.prototype.delete = pn, ot.prototype.get = _n, ot.prototype.has = xn, ot.prototype.set = vn;
  function wn(i, f) {
    var p = jt(i), T = !p && Bn(i), F = !p && !T && kt(i), C = !p && !T && !F && br(i), ee = p || T || F || C, Oe = ee ? Ae(i.length, String) : [], Pe = Oe.length;
    for (var V in i)
      G.call(i, V) && !(ee && // Safari 9 has enumerable `arguments.length` in strict mode.
      (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      F && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
      Pn(V, Pe))) && Oe.push(V);
    return Oe;
  }
  function Pt(i, f) {
    for (var p = i.length; p--; )
      if (ur(i[p][0], f))
        return p;
    return -1;
  }
  function mn(i, f, p) {
    var T = f(i);
    return jt(i) ? T : z(T, p(i));
  }
  function wt(i) {
    return i == null ? i === void 0 ? et : Y : $e && $e in Object(i) ? An(i) : Nn(i);
  }
  function or(i) {
    return mt(i) && wt(i) == E;
  }
  function ar(i, f, p, T, F) {
    return i === f ? !0 : i == null || f == null || !mt(i) && !mt(f) ? i !== i && f !== f : En(i, f, p, T, ar, F);
  }
  function En(i, f, p, T, F, C) {
    var ee = jt(i), Oe = jt(f), Pe = ee ? y : at(i), V = Oe ? y : at(f);
    Pe = Pe == E ? N : Pe, V = V == E ? N : V;
    var Ge = Pe == N, Ye = V == N, Ne = Pe == V;
    if (Ne && kt(i)) {
      if (!kt(f))
        return !1;
      ee = !0, Ge = !1;
    }
    if (Ne && !Ge)
      return C || (C = new ot()), ee || br(i) ? fr(i, f, p, T, F, C) : Tn(i, f, Pe, p, T, F, C);
    if (!(p & o)) {
      var ke = Ge && G.call(i, "__wrapped__"), Je = Ye && G.call(f, "__wrapped__");
      if (ke || Je) {
        var ft = ke ? i.value() : i, rt = Je ? f.value() : f;
        return C || (C = new ot()), F(ft, rt, p, T, C);
      }
    }
    return Ne ? (C || (C = new ot()), Ln(i, f, p, T, F, C)) : !1;
  }
  function Sn(i) {
    if (!dr(i) || jn(i))
      return !1;
    var f = lr(i) ? He : re;
    return f.test(lt(i));
  }
  function On(i) {
    return mt(i) && hr(i.length) && !!B[wt(i)];
  }
  function In(i) {
    if (!Mn(i))
      return At(i);
    var f = [];
    for (var p in Object(i))
      G.call(i, p) && p != "constructor" && f.push(p);
    return f;
  }
  function fr(i, f, p, T, F, C) {
    var ee = p & o, Oe = i.length, Pe = f.length;
    if (Oe != Pe && !(ee && Pe > Oe))
      return !1;
    var V = C.get(i);
    if (V && C.get(f))
      return V == f;
    var Ge = -1, Ye = !0, Ne = p & b ? new Rt() : void 0;
    for (C.set(i, f), C.set(f, i); ++Ge < Oe; ) {
      var ke = i[Ge], Je = f[Ge];
      if (T)
        var ft = ee ? T(Je, ke, Ge, f, i, C) : T(ke, Je, Ge, i, f, C);
      if (ft !== void 0) {
        if (ft)
          continue;
        Ye = !1;
        break;
      }
      if (Ne) {
        if (!H(f, function(rt, ht) {
          if (!Re(Ne, ht) && (ke === rt || F(ke, rt, p, T, C)))
            return Ne.push(ht);
        })) {
          Ye = !1;
          break;
        }
      } else if (!(ke === Je || F(ke, Je, p, T, C))) {
        Ye = !1;
        break;
      }
    }
    return C.delete(i), C.delete(f), Ye;
  }
  function Tn(i, f, p, T, F, C, ee) {
    switch (p) {
      case Ue:
        if (i.byteLength != f.byteLength || i.byteOffset != f.byteOffset)
          return !1;
        i = i.buffer, f = f.buffer;
      case Fe:
        return !(i.byteLength != f.byteLength || !C(new Ve(i), new Ve(f)));
      case u:
      case g:
      case J:
        return ur(+i, +f);
      case v:
        return i.name == f.name && i.message == f.message;
      case Ce:
      case j:
        return i == f + "";
      case M:
        var Oe = he;
      case $:
        var Pe = T & o;
        if (Oe || (Oe = te), i.size != f.size && !Pe)
          return !1;
        var V = ee.get(i);
        if (V)
          return V == f;
        T |= b, ee.set(i, f);
        var Ge = fr(Oe(i), Oe(f), T, F, C, ee);
        return ee.delete(i), Ge;
      case je:
        if (ce)
          return ce.call(i) == ce.call(f);
    }
    return !1;
  }
  function Ln(i, f, p, T, F, C) {
    var ee = p & o, Oe = cr(i), Pe = Oe.length, V = cr(f), Ge = V.length;
    if (Pe != Ge && !ee)
      return !1;
    for (var Ye = Pe; Ye--; ) {
      var Ne = Oe[Ye];
      if (!(ee ? Ne in f : G.call(f, Ne)))
        return !1;
    }
    var ke = C.get(i);
    if (ke && C.get(f))
      return ke == f;
    var Je = !0;
    C.set(i, f), C.set(f, i);
    for (var ft = ee; ++Ye < Pe; ) {
      Ne = Oe[Ye];
      var rt = i[Ne], ht = f[Ne];
      if (T)
        var gr = ee ? T(ht, rt, Ne, f, i, C) : T(rt, ht, Ne, i, f, C);
      if (!(gr === void 0 ? rt === ht || F(rt, ht, p, T, C) : gr)) {
        Je = !1;
        break;
      }
      ft || (ft = Ne == "constructor");
    }
    if (Je && !ft) {
      var Mt = i.constructor, Nt = f.constructor;
      Mt != Nt && "constructor" in i && "constructor" in f && !(typeof Mt == "function" && Mt instanceof Mt && typeof Nt == "function" && Nt instanceof Nt) && (Je = !1);
    }
    return C.delete(i), C.delete(f), Je;
  }
  function cr(i) {
    return mn(i, Un, Rn);
  }
  function Ct(i, f) {
    var p = i.__data__;
    return Cn(f) ? p[typeof f == "string" ? "string" : "hash"] : p.map;
  }
  function gt(i, f) {
    var p = ye(i, f);
    return Sn(p) ? p : void 0;
  }
  function An(i) {
    var f = G.call(i, $e), p = i[$e];
    try {
      i[$e] = void 0;
      var T = !0;
    } catch {
    }
    var F = Be.call(i);
    return T && (f ? i[$e] = p : delete i[$e]), F;
  }
  var Rn = ct ? function(i) {
    return i == null ? [] : (i = Object(i), U(ct(i), function(f) {
      return Xe.call(i, f);
    }));
  } : Hn, at = wt;
  (se && at(new se(new ArrayBuffer(1))) != Ue || Z && at(new Z()) != M || oe && at(oe.resolve()) != Te || ae && at(new ae()) != $ || fe && at(new fe()) != ge) && (at = function(i) {
    var f = wt(i), p = f == N ? i.constructor : void 0, T = p ? lt(p) : "";
    if (T)
      switch (T) {
        case _e:
          return Ue;
        case xe:
          return M;
        case ve:
          return Te;
        case we:
          return $;
        case me:
          return ge;
      }
    return f;
  });
  function Pn(i, f) {
    return f = f ?? S, !!f && (typeof i == "number" || xt.test(i)) && i > -1 && i % 1 == 0 && i < f;
  }
  function Cn(i) {
    var f = typeof i;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? i !== "__proto__" : i === null;
  }
  function jn(i) {
    return !!Me && Me in i;
  }
  function Mn(i) {
    var f = i && i.constructor, p = typeof f == "function" && f.prototype || K;
    return i === p;
  }
  function Nn(i) {
    return Be.call(i);
  }
  function lt(i) {
    if (i != null) {
      try {
        return pe.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function ur(i, f) {
    return i === f || i !== i && f !== f;
  }
  var Bn = or(/* @__PURE__ */ function() {
    return arguments;
  }()) ? or : function(i) {
    return mt(i) && G.call(i, "callee") && !Xe.call(i, "callee");
  }, jt = Array.isArray;
  function zn(i) {
    return i != null && hr(i.length) && !lr(i);
  }
  var kt = vt || Kn;
  function Dn(i, f) {
    return ar(i, f);
  }
  function lr(i) {
    if (!dr(i))
      return !1;
    var f = wt(i);
    return f == m || f == w || f == s || f == be;
  }
  function hr(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= S;
  }
  function dr(i) {
    var f = typeof i;
    return i != null && (f == "object" || f == "function");
  }
  function mt(i) {
    return i != null && typeof i == "object";
  }
  var br = D ? le(D) : On;
  function Un(i) {
    return zn(i) ? wn(i) : In(i);
  }
  function Hn() {
    return [];
  }
  function Kn() {
    return !1;
  }
  e.exports = Dn;
})(Gt, Gt.exports);
var ro = Gt.exports;
const Ro = /* @__PURE__ */ er(ro);
function no(e, r) {
  return r = r || {}, new Promise(function(n, c) {
    var o = new XMLHttpRequest(), b = [], S = [], E = {}, y = function() {
      return { ok: (o.status / 100 | 0) == 2, statusText: o.statusText, status: o.status, url: o.responseURL, text: function() {
        return Promise.resolve(o.responseText);
      }, json: function() {
        return Promise.resolve(o.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([o.response]));
      }, clone: y, headers: { keys: function() {
        return b;
      }, entries: function() {
        return S;
      }, get: function(u) {
        return E[u.toLowerCase()];
      }, has: function(u) {
        return u.toLowerCase() in E;
      } } };
    };
    for (var s in o.open(r.method || "get", e, !0), o.onload = function() {
      o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(u, g, v) {
        b.push(g = g.toLowerCase()), S.push([g, v]), E[g] = E[g] ? E[g] + "," + v : v;
      }), n(y());
    }, o.onerror = c, o.withCredentials = r.credentials == "include", r.headers)
      o.setRequestHeader(s, r.headers[s]);
    o.send(r.body || null);
  });
}
const io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: no
}, Symbol.toStringTag, { value: "Module" })), Cr = /* @__PURE__ */ jr(io);
var so = self.fetch || (self.fetch = Cr.default || Cr);
const Po = /* @__PURE__ */ er(so);
export {
  Xr as A,
  Io as B,
  fo as C,
  gs as D,
  _o as E,
  xo as F,
  Ro as G,
  yo as I,
  Po as Y,
  gi as a,
  bo as b,
  co as c,
  ho as d,
  ti as e,
  tr as f,
  uo as g,
  Eo as h,
  mo as i,
  Vs as j,
  go as k,
  Lo as l,
  po as m,
  vo as n,
  $r as o,
  is as p,
  wo as q,
  Oo as r,
  lo as s,
  rr as t,
  Ao as u,
  To as v,
  So as w,
  Us as x,
  $i as y,
  Ws as z
};
