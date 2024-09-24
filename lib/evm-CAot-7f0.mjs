import { d as dn, g as Ca, C as Na, W as Da, a as ja, N as Ar, b as Ta, c as oe, h as va, e as kr, f as za, i as Sa, j as Oa, k as La, B as Pa, l as Ua, m as Tt } from "./index-DV1w5RNX.mjs";
import "./index-3AdIZdSb.mjs";
function m(e, t = {}) {
  const { fees: n = e.fees, formatters: r = e.formatters, serializers: s = e.serializers } = t;
  return {
    ...e,
    fees: n,
    formatters: r,
    serializers: s
  };
}
const Ba = /* @__PURE__ */ m({
  id: 787,
  name: "Acala",
  network: "acala",
  nativeCurrency: {
    name: "Acala",
    symbol: "ACA",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-acala.aca-api.network"],
      webSocket: ["wss://eth-rpc-acala.aca-api.network"]
    },
    default: {
      http: ["https://eth-rpc-acala.aca-api.network"],
      webSocket: ["wss://eth-rpc-acala.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Acala Blockscout",
      url: "https://blockscout.acala.network"
    }
  },
  testnet: !1
}), Qa = /* @__PURE__ */ m({
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
    default: { name: "Arbiscan", url: "https://arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
}), Fa = /* @__PURE__ */ m({
  id: 421613,
  name: "Arbitrum Goerli",
  network: "arbitrum-goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://arb-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-goerli.infura.io/v3"],
      webSocket: ["wss://arbitrum-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
    default: { name: "Arbiscan", url: "https://goerli.arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114
    }
  },
  testnet: !0
}), Ga = /* @__PURE__ */ m({
  id: 42170,
  name: "Arbitrum Nova",
  network: "arbitrum-nova",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    blast: {
      http: ["https://arbitrum-nova.public.blastapi.io"],
      webSocket: ["wss://arbitrum-nova.public.blastapi.io"]
    },
    default: {
      http: ["https://nova.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://nova.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
    blockScout: {
      name: "BlockScout",
      url: "https://nova-explorer.arbitrum.io/"
    },
    default: { name: "Arbiscan", url: "https://nova.arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1746963
    }
  }
}), Ya = /* @__PURE__ */ m({
  id: 592,
  name: "Astar",
  network: "astar-mainnet",
  nativeCurrency: {
    name: "Astar",
    symbol: "ASTR",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://astar.api.onfinality.io/public"] },
    default: { http: ["https://astar.api.onfinality.io/public"] }
  },
  blockExplorers: {
    default: { name: "Astar Subscan", url: "https://astar.subscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 761794
    }
  },
  testnet: !1
}), Ra = /* @__PURE__ */ m({
  id: 421614,
  name: "Arbitrum Sepolia",
  network: "arbitrum-sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://arb-sepolia.g.alchemy.com/v2"]
    },
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" },
    default: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 81930
    }
  },
  testnet: !0
}), Wa = /* @__PURE__ */ m({
  id: 1261120,
  name: "Astar zkEVM Testnet zKatana",
  network: "zKatana",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.zkatana.gelato.digital",
        "https://rpc.startale.com/zkatana"
      ]
    },
    public: {
      http: [
        "https://rpc.zkatana.gelato.digital",
        "https://rpc.startale.com/zkatana"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout zKatana chain explorer",
      url: "https://zkatana.blockscout.com"
    },
    default: {
      name: "zKatana Explorer",
      url: "https://zkatana.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 31317
    }
  },
  testnet: !0
}), Ha = /* @__PURE__ */ m({
  id: 1313161554,
  name: "Aurora",
  network: "aurora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    infura: { http: ["https://aurora-mainnet.infura.io/v3"] },
    default: { http: ["https://mainnet.aurora.dev"] },
    public: { http: ["https://mainnet.aurora.dev"] }
  },
  blockExplorers: {
    etherscan: { name: "Aurorascan", url: "https://aurorascan.dev" },
    default: { name: "Aurorascan", url: "https://aurorascan.dev" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 62907816
    }
  }
}), Za = /* @__PURE__ */ m({
  id: 1313161555,
  name: "Aurora Testnet",
  network: "aurora-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    infura: { http: ["https://aurora-testnet.infura.io/v3"] },
    default: { http: ["https://testnet.aurora.dev"] },
    public: { http: ["https://testnet.aurora.dev"] }
  },
  blockExplorers: {
    etherscan: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" },
    default: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" }
  },
  testnet: !0
}), Va = /* @__PURE__ */ m({
  id: 43114,
  name: "Avalanche",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
    default: { name: "SnowTrace", url: "https://snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
}), Ja = /* @__PURE__ */ m({
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
    default: { name: "SnowTrace", url: "https://testnet.snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: !0
}), Ka = /* @__PURE__ */ m({
  id: 5165,
  network: "bahamut",
  name: "Bahamut",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc1.bahamut.io",
        "https://bahamut.publicnode.com",
        "https://rpc2.bahamut.io"
      ],
      webSocket: [
        "wss://ws1.sahara.bahamutchain.com",
        "wss://bahamut.publicnode.com",
        "wss://ws2.sahara.bahamutchain.com"
      ]
    },
    public: {
      http: [
        "https://rpc1.bahamut.io",
        "https://bahamut.publicnode.com",
        "https://rpc2.bahamut.io"
      ],
      webSocket: [
        "wss://ws1.sahara.bahamutchain.com",
        "wss://bahamut.publicnode.com",
        "wss://ws2.sahara.bahamutchain.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://www.ftnscan.com"
    }
  }
}), Xa = "1.21.3", qa = (e) => e, Qt = (e) => e, $a = () => `viem@${Xa}`;
class x extends Error {
  constructor(t, n = {}) {
    var a;
    super(), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ViemError"
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: $a()
    });
    const r = n.cause instanceof x ? n.cause.details : (a = n.cause) != null && a.message ? n.cause.message : n.details, s = n.cause instanceof x && n.cause.docsPath || n.docsPath;
    this.message = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [
        `Docs: https://viem.sh${s}.html${n.docsSlug ? `#${n.docsSlug}` : ""}`
      ] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${this.version}`
    ].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return ts(this, t);
  }
}
function ts(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? ts(e.cause, t) : t ? null : e;
}
class _a extends x {
  constructor({ max: t, min: n, signed: r, size: s, value: a }) {
    super(`Number "${a}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntegerOutOfRangeError"
    });
  }
}
class eo extends x {
  constructor(t) {
    super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidHexBooleanError"
    });
  }
}
class to extends x {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeOverflowError"
    });
  }
}
function ee(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function P(e) {
  return ee(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function Y(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e, r = 0;
  for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
class ns extends x {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SliceOffsetOutOfBoundsError"
    });
  }
}
class rs extends x {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeExceedsPaddingSizeError"
    });
  }
}
function ve(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? ce(e, { dir: t, size: n }) : no(e, { dir: t, size: n });
}
function ce(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new rs({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function no(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new rs({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const a = t === "right";
    r[a ? s : n - s - 1] = e[a ? s : e.length - s - 1];
  }
  return r;
}
const ro = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function k(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? D(e, t) : typeof e == "string" ? Un(e, t) : typeof e == "boolean" ? ss(e, t) : Ne(e, t);
}
function ss(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (pe(n, { size: t.size }), ve(n, { size: t.size })) : n;
}
function Ne(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += ro[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (pe(r, { size: t.size }), ve(r, { dir: "right", size: t.size })) : r;
}
function D(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let a;
  r ? n ? a = (1n << BigInt(r) * 8n - 1n) - 1n : a = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (a = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof a == "bigint" && n ? -a - 1n : 0;
  if (a && s > a || s < o) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new _a({
      max: a ? `${a}${c}` : void 0,
      min: `${o}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`
    });
  }
  const i = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? ve(i, { size: r }) : i;
}
const so = /* @__PURE__ */ new TextEncoder();
function Un(e, t = {}) {
  const n = so.encode(e);
  return Ne(n, t);
}
const ao = /* @__PURE__ */ new TextEncoder();
function le(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? io(e, t) : typeof e == "boolean" ? oo(e, t) : ee(e) ? dt(e, t) : ne(e, t);
}
function oo(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (pe(n, { size: t.size }), ve(n, { size: t.size })) : n;
}
const te = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Er(e) {
  if (e >= te.zero && e <= te.nine)
    return e - te.zero;
  if (e >= te.A && e <= te.F)
    return e - (te.A - 10);
  if (e >= te.a && e <= te.f)
    return e - (te.a - 10);
}
function dt(e, t = {}) {
  let n = e;
  t.size && (pe(n, { size: t.size }), n = ve(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, a = new Uint8Array(s);
  for (let o = 0, i = 0; o < s; o++) {
    const c = Er(r.charCodeAt(i++)), l = Er(r.charCodeAt(i++));
    if (c === void 0 || l === void 0)
      throw new x(`Invalid byte sequence ("${r[i - 2]}${r[i - 1]}" in "${r}").`);
    a[o] = c * 16 + l;
  }
  return a;
}
function io(e, t) {
  const n = D(e, t);
  return dt(n);
}
function ne(e, t = {}) {
  const n = ao.encode(e);
  return typeof t.size == "number" ? (pe(n, { size: t.size }), ve(n, { dir: "right", size: t.size })) : n;
}
function pe(e, { size: t }) {
  if (P(e) > t)
    throw new to({
      givenSize: P(e),
      maxSize: t
    });
}
function v(e, t = {}) {
  const { signed: n } = t;
  t.size && pe(e, { size: t.size });
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, a = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= a ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function co(e, t = {}) {
  let n = e;
  if (t.size && (pe(n, { size: t.size }), n = Y(n)), Y(n) === "0x00")
    return !1;
  if (Y(n) === "0x01")
    return !0;
  throw new eo(n);
}
function G(e, t = {}) {
  return Number(v(e, t));
}
function lo(e, t = {}) {
  let n = dt(e);
  return t.size && (pe(n, { size: t.size }), n = Y(n, { dir: "right" })), new TextDecoder().decode(n);
}
function Ft(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const a = t(s);
      if (n)
        for (const o of n)
          delete a[o];
      return {
        ...a,
        ...r(s)
      };
    },
    type: e
  });
}
const as = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559"
};
function pt(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? G(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? G(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? as[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return t.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n)
        return 0;
      if (t.v === 1n || t.v === 28n)
        return 1;
      if (t.v >= 35n)
        return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t;
}
const Bn = /* @__PURE__ */ Ft("transaction", pt);
function Qn(e) {
  var n;
  const t = (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : pt(r));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
const Fn = /* @__PURE__ */ Ft("block", Qn);
function X(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
const uo = {
  "0x0": "reverted",
  "0x1": "success"
};
function os(e) {
  return {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((t) => X(t)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? G(e.transactionIndex) : null,
    status: e.status ? uo[e.status] : null,
    type: e.type ? as[e.type] || e.type : null
  };
}
const is = /* @__PURE__ */ Ft("transactionReceipt", os), _ = {
  block: /* @__PURE__ */ Fn({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => {
          if (typeof r == "string")
            return r;
          const s = pt(r);
          return s.typeHex === "0x7e" && (s.isSystemTx = r.isSystemTx, s.mint = r.mint ? v(r.mint) : void 0, s.sourceHash = r.sourceHash, s.type = "deposit"), s;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Bn({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? v(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ is({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? v(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? v(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? v(e.l1Fee) : null,
        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
      };
    }
  })
}, po = /* @__PURE__ */ m({
  id: 8453,
  network: "base",
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://base-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://base-mainnet.infura.io/v3"],
      webSocket: ["wss://base-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.base.org"]
    },
    public: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Basescout",
      url: "https://base.blockscout.com"
    },
    default: {
      name: "Basescan",
      url: "https://basescan.org"
    },
    etherscan: {
      name: "Basescan",
      url: "https://basescan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    }
  }
}, {
  formatters: _
}), ho = /* @__PURE__ */ m({
  id: 84531,
  network: "base-goerli",
  name: "Base Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://base-goerli.g.alchemy.com/v2"]
    },
    default: {
      http: ["https://goerli.base.org"]
    },
    public: {
      http: ["https://goerli.base.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    },
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1376988
    }
  },
  testnet: !0,
  sourceId: 5
  // goerli
}, {
  formatters: _
}), mo = /* @__PURE__ */ m({
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://base-sepolia.g.alchemy.com/v2"]
    },
    default: {
      http: ["https://sepolia.base.org"]
    },
    public: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://base-sepolia.blockscout.com"
    },
    default: {
      name: "Blockscout",
      url: "https://base-sepolia.blockscout.com"
    }
  },
  testnet: !0,
  sourceId: 11155111
  // sepolia
}, {
  formatters: _
}), bo = /* @__PURE__ */ m({
  id: 641230,
  name: "Bear Network Chain Mainnet",
  network: "BearNetworkChainMainnet",
  nativeCurrency: {
    decimals: 18,
    name: "BearNetworkChain",
    symbol: "BRNKC"
  },
  rpcUrls: {
    public: { http: ["https://brnkc-mainnet.bearnetwork.net"] },
    default: { http: ["https://brnkc-mainnet.bearnetwork.net"] }
  },
  blockExplorers: {
    default: { name: "BrnkScan", url: "https://brnkscan.bearnetwork.net" }
  }
}), fo = /* @__PURE__ */ m({
  id: 751230,
  name: "Bear Network Chain Testnet",
  network: "BearNetworkChainTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBRNKC",
    symbol: "tBRNKC"
  },
  rpcUrls: {
    public: { http: ["https://brnkc-test.bearnetwork.net"] },
    default: { http: ["https://brnkc-test.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkTestScan",
      url: "https://brnktest-scan.bearnetwork.net"
    }
  },
  testnet: !0
}), go = /* @__PURE__ */ m({
  id: 199,
  name: "BitTorrent",
  network: "bittorrent-chain-mainnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.bittorrentchain.io"] },
    public: { http: ["https://rpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    etherscan: { name: "Bttcscan", url: "https://bttcscan.com" },
    default: { name: "Bttcscan", url: "https://bttcscan.com" }
  }
}), yo = /* @__PURE__ */ m({
  id: 1028,
  name: "BitTorrent Chain Testnet",
  network: "bittorrent-chain-testnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testrpc.bittorrentchain.io"] },
    public: { http: ["https://testrpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    etherscan: { name: "Bttcscan", url: "https://testnet.bttcscan.com" },
    default: { name: "Bttcscan", url: "https://testnet.bttcscan.com" }
  },
  testnet: !0
}), wo = /* @__PURE__ */ m({
  id: 288,
  name: "Boba Network",
  network: "boba",
  nativeCurrency: {
    decimals: 18,
    name: "Boba",
    symbol: "BOBA"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.boba.network"] },
    public: { http: ["https://mainnet.boba.network"] }
  },
  blockExplorers: {
    etherscan: { name: "BOBAScan", url: "https://bobascan.com" },
    default: { name: "BOBAScan", url: "https://bobascan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 446859
    }
  }
}), Mo = /* @__PURE__ */ m({
  id: 1039,
  name: "Bronos",
  network: "bronos",
  nativeCurrency: {
    decimals: 18,
    name: "BRO",
    symbol: "BRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.bronos.org"] },
    public: { http: ["https://evm.bronos.org"] }
  },
  blockExplorers: {
    default: { name: "BronoScan", url: "https://broscan.bronos.org" }
  }
}), xo = /* @__PURE__ */ m({
  id: 1038,
  name: "Bronos Testnet",
  network: "bronos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bronos Coin",
    symbol: "tBRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-testnet.bronos.org"] },
    public: { http: ["https://evm-testnet.bronos.org"] }
  },
  blockExplorers: {
    default: { name: "BronoScan", url: "https://tbroscan.bronos.org" }
  },
  testnet: !0
}), Io = /* @__PURE__ */ m({
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/bsc"] },
    public: { http: ["https://rpc.ankr.com/bsc"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://bscscan.com" },
    default: { name: "BscScan", url: "https://bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
}), Ao = /* @__PURE__ */ m({
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] },
    public: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" },
    default: { name: "BscScan", url: "https://testnet.bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: !0
}), ko = /* @__PURE__ */ m({
  id: 4999,
  name: "BlackFort Exchange Network",
  network: "bxn",
  nativeCurrency: { name: "BlackFort Token", symbol: "BXN", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.blackfort.network/rpc"]
    },
    public: {
      http: ["https://mainnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.blackfort.network"
    }
  }
}), Eo = /* @__PURE__ */ m({
  id: 4777,
  name: "BlackFort Exchange Network Testnet",
  network: "bxnTestnet",
  nativeCurrency: {
    name: "BlackFort Testnet Token",
    symbol: "TBXN",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.blackfort.network/rpc"]
    },
    public: {
      http: ["https://testnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer.blackfort.network"
    }
  }
}), Co = /* @__PURE__ */ m({
  id: 7700,
  name: "Canto",
  network: "canto",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO"
  },
  rpcUrls: {
    default: { http: ["https://canto.gravitychain.io"] },
    public: { http: ["https://canto.gravitychain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Tuber.Build (Blockscout)",
      url: "https://tuber.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2905789
    }
  }
}), No = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2"
};
function ht(e) {
  return {
    ...e,
    gas: typeof e.gas < "u" ? D(e.gas) : void 0,
    gasPrice: typeof e.gasPrice < "u" ? D(e.gasPrice) : void 0,
    maxFeePerGas: typeof e.maxFeePerGas < "u" ? D(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: typeof e.maxPriorityFeePerGas < "u" ? D(e.maxPriorityFeePerGas) : void 0,
    nonce: typeof e.nonce < "u" ? D(e.nonce) : void 0,
    type: typeof e.type < "u" ? No[e.type] : void 0,
    value: typeof e.value < "u" ? D(e.value) : void 0
  };
}
const cs = /* @__PURE__ */ Ft("transactionRequest", ht);
function ie(e) {
  return e === 0 || e === 0n || e === void 0 || e === null || e === "0" || e === "" || typeof e == "string" && (Y(e).toLowerCase() === "0x" || Y(e).toLowerCase() === "0x00");
}
function F(e) {
  return !ie(e);
}
function ls(e) {
  return F(e.maxFeePerGas) && F(e.maxPriorityFeePerGas);
}
function us(e) {
  return e.type === "cip42" ? !0 : ls(e) && (F(e.feeCurrency) || F(e.gatewayFeeRecipient) || F(e.gatewayFee));
}
function ds(e) {
  return e.type === "cip64" ? !0 : ls(e) && F(e.feeCurrency) && ie(e.gatewayFee) && ie(e.gatewayFeeRecipient);
}
const Gn = {
  block: /* @__PURE__ */ Fn({
    exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
    format(e) {
      var n;
      const t = (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : {
        ...pt(r),
        feeCurrency: r.feeCurrency,
        ...r.type !== "0x7b" ? {
          gatewayFee: r.gatewayFee ? v(r.gatewayFee) : null,
          gatewayFeeRecipient: r.gatewayFeeRecipient || null
        } : {}
      });
      return {
        randomness: e.randomness,
        transactions: t
      };
    }
  }),
  transaction: /* @__PURE__ */ Bn({
    format(e) {
      const t = { feeCurrency: e.feeCurrency };
      return e.type === "0x7b" ? t.type = "cip64" : (e.type === "0x7c" && (t.type = "cip42"), t.gatewayFee = e.gatewayFee ? v(e.gatewayFee) : null, t.gatewayFeeRecipient = e.gatewayFeeRecipient), t;
    }
  }),
  transactionRequest: /* @__PURE__ */ cs({
    format(e) {
      const t = {
        feeCurrency: e.feeCurrency
      };
      return ds(e) ? t.type = "0x7b" : (us(e) && (t.type = "0x7c"), t.gatewayFee = typeof e.gatewayFee < "u" ? D(e.gatewayFee) : void 0, t.gatewayFeeRecipient = e.gatewayFeeRecipient), t;
    }
  })
};
class W extends x {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAddressError"
    });
  }
}
class pn extends x {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && r.blockCreated && r.blockCreated > t ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDoesNotSupportContract"
    });
  }
}
class Do extends x {
  constructor({ chain: t, currentChainId: n }) {
    super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${t.id} – ${t.name}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainMismatchError"
    });
  }
}
class jo extends x {
  constructor() {
    super([
      "No chain was provided to the request.",
      "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainNotFoundError"
    });
  }
}
class ps extends x {
  constructor() {
    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ClientChainNotConfiguredError"
    });
  }
}
class ze extends x {
  constructor({ chainId: t }) {
    super(`Chain ID "${t}" is invalid.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidChainIdError"
    });
  }
}
const To = {
  gwei: 9,
  wei: 18
}, vo = {
  ether: -9,
  wei: 9
};
function hs(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(t, "0");
  let [s, a] = [
    n.slice(0, n.length - t),
    n.slice(n.length - t)
  ];
  return a = a.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${a ? `.${a}` : ""}`;
}
function Z(e, t = "wei") {
  return hs(e, vo[t]);
}
class ke extends x {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(ke, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(ke, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class re extends x {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${Z(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooHigh"
    });
  }
}
Object.defineProperty(re, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class hn extends x {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${Z(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooLow"
    });
  }
}
Object.defineProperty(hn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class mn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooHighError"
    });
  }
}
Object.defineProperty(mn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class bn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooLowError"
    });
  }
}
Object.defineProperty(bn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class fn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceMaxValueError"
    });
  }
}
Object.defineProperty(fn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class gn extends x {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(gn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/
});
class yn extends x {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(yn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class wn extends x {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(wn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Mn extends x {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(Mn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class ge extends x {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${Z(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${Z(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(ge, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class Gt extends x {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownNodeError"
    });
  }
}
const zo = /^0x[a-fA-F0-9]{40}$/;
function L(e) {
  return zo.test(e);
}
function se(e) {
  return typeof e[0] == "string" ? he(e) : So(e);
}
function So(e) {
  let t = 0;
  for (const s of e)
    t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r), r += s.length;
  return n;
}
function he(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function Oo(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const Cr = /^tuple(?<array>(\[(\d*)\])*)$/;
function xn(e) {
  let t = e.type;
  if (Cr.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const a = e.components[s];
      t += xn(a), s < n - 1 && (t += ", ");
    }
    const r = Oo(Cr, e.type);
    return t += `)${(r == null ? void 0 : r.array) ?? ""}`, xn({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function Ge(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    t += xn(s), r !== n - 1 && (t += ", ");
  }
  return t;
}
function Lo(e) {
  return e.type === "function" ? `function ${e.name}(${Ge(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs.length ? ` returns (${Ge(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${Ge(e.inputs)})` : e.type === "error" ? `error ${e.name}(${Ge(e.inputs)})` : e.type === "constructor" ? `constructor(${Ge(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? "fallback()" : "receive() external payable";
}
function E(e, t, n) {
  return (r) => {
    var s;
    return ((s = e[t.name || n]) == null ? void 0 : s.call(e, r)) ?? t(e, r);
  };
}
function ae(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Ko(e.type);
  return `${e.name}(${Yt(e.inputs, { includeName: t })})`;
}
function Yt(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => Po(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function Po(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${Yt(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
class Uo extends x {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorNotFoundError"
    });
  }
}
class Nr extends x {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorParamsNotFoundError"
    });
  }
}
class Yn extends x {
  constructor({ data: t, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Yt(n, { includeName: !0 })})`,
        `Data:   ${t} (${r} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t, this.params = n, this.size = r;
  }
}
class Rt extends x {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingZeroDataError"
    });
  }
}
class Bo extends x {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${t}`,
      `Given length: ${n}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingArrayLengthMismatchError"
    });
  }
}
class Qo extends x {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${P(n)}) does not match expected size (bytes${t}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingBytesSizeMismatchError"
    });
  }
}
class Fo extends x {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingLengthMismatchError"
    });
  }
}
class ms extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class Go extends x {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class Yo extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureNotFoundError"
    });
  }
}
class Dr extends x {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventNotFoundError"
    });
  }
}
class vt extends x {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionNotFoundError"
    });
  }
}
class Ro extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class Wo extends x {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${ae(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${ae(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiItemAmbiguityError"
    });
  }
}
class Ho extends x {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BytesSizeMismatchError"
    });
  }
}
class ye extends x {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Yt(r, { includeName: !0 })})`,
        `Data:   ${n} (${s} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t, this.data = n, this.params = r, this.size = s;
  }
}
class Se extends x {
  constructor({ abiItem: t, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${ae(t, { includeName: !0 })}".`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogTopicsMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class Zo extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiEncodingType"
    });
  }
}
class Vo extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiDecodingType"
    });
  }
}
class Jo extends x {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidArrayError"
    });
  }
}
class Ko extends x {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidDefinitionTypeError"
    });
  }
}
class Xo extends x {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FilterTypeNotSupportedError"
    });
  }
}
function qo(e) {
  let t = !0, n = "", r = 0, s = "", a = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (["(", ")", ","].includes(i) && (t = !0), i === "(" && r++, i === ")" && r--, !!t) {
      if (r === 0) {
        if (i === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += i, i === ")") {
          a = !0;
          break;
        }
        continue;
      }
      if (i === " ") {
        e[o - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += i, n += i;
    }
  }
  if (!a)
    throw new x("Unable to normalize signature.");
  return s;
}
const bs = (e) => {
  const t = typeof e == "string" ? e : Lo(e);
  return qo(t);
}, $o = (e) => bs(e);
function jr(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function fs(e, ...t) {
  if (!(e instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function Tr(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function _o(e, t) {
  fs(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const It = /* @__PURE__ */ BigInt(2 ** 32 - 1), vr = /* @__PURE__ */ BigInt(32);
function ei(e, t = !1) {
  return t ? { h: Number(e & It), l: Number(e >> vr & It) } : { h: Number(e >> vr & It) | 0, l: Number(e & It) | 0 };
}
function ti(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: a, l: o } = ei(e[s], t);
    [n[s], r[s]] = [a, o];
  }
  return [n, r];
}
const ni = (e, t, n) => e << n | t >>> 32 - n, ri = (e, t, n) => t << n | e >>> 32 - n, si = (e, t, n) => t << n - 32 | e >>> 64 - n, ai = (e, t, n) => e << n - 32 | t >>> 64 - n;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const oi = (e) => e instanceof Uint8Array, ii = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), ci = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ci)
  throw new Error("Non little-endian hardware is not supported");
function li(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function gs(e) {
  if (typeof e == "string" && (e = li(e)), !oi(e))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
class ui {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function di(e) {
  const t = (r) => e().update(gs(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
const [ys, ws, Ms] = [[], [], []], pi = /* @__PURE__ */ BigInt(0), Ye = /* @__PURE__ */ BigInt(1), hi = /* @__PURE__ */ BigInt(2), mi = /* @__PURE__ */ BigInt(7), bi = /* @__PURE__ */ BigInt(256), fi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Ye, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], ys.push(2 * (5 * r + n)), ws.push((e + 1) * (e + 2) / 2 % 64);
  let s = pi;
  for (let a = 0; a < 7; a++)
    t = (t << Ye ^ (t >> mi) * fi) % bi, t & hi && (s ^= Ye << (Ye << /* @__PURE__ */ BigInt(a)) - Ye);
  Ms.push(s);
}
const [gi, yi] = /* @__PURE__ */ ti(Ms, !0), zr = (e, t, n) => n > 32 ? si(e, t, n) : ni(e, t, n), Sr = (e, t, n) => n > 32 ? ai(e, t, n) : ri(e, t, n);
function wi(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const i = (o + 8) % 10, c = (o + 2) % 10, l = n[c], u = n[c + 1], d = zr(l, u, 1) ^ n[i], h = Sr(l, u, 1) ^ n[i + 1];
      for (let f = 0; f < 50; f += 10)
        e[o + f] ^= d, e[o + f + 1] ^= h;
    }
    let s = e[2], a = e[3];
    for (let o = 0; o < 24; o++) {
      const i = ws[o], c = zr(s, a, i), l = Sr(s, a, i), u = ys[o];
      s = e[u], a = e[u + 1], e[u] = c, e[u + 1] = l;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let i = 0; i < 10; i++)
        n[i] = e[o + i];
      for (let i = 0; i < 10; i++)
        e[o + i] ^= ~n[(i + 2) % 10] & n[(i + 4) % 10];
    }
    e[0] ^= gi[r], e[1] ^= yi[r];
  }
  n.fill(0);
}
class Rn extends ui {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, a = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, jr(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = ii(this.state);
  }
  keccak() {
    wi(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    Tr(this);
    const { blockLen: n, state: r } = this;
    t = gs(t);
    const s = t.length;
    for (let a = 0; a < s; ) {
      const o = Math.min(n - this.pos, s - a);
      for (let i = 0; i < o; i++)
        r[this.pos++] ^= t[a++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, n & 128 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    Tr(this, !1), fs(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, a = t.length; s < a; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, a - s);
      t.set(n.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return jr(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (_o(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: a, enableXOF: o } = this;
    return t || (t = new Rn(n, r, s, o, a)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = a, t.suffix = r, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Mi = (e, t, n) => di(() => new Rn(t, e, n)), xi = /* @__PURE__ */ Mi(1, 136, 256 / 8);
function R(e, t) {
  const n = t || "hex", r = xi(ee(e, { strict: !1 }) ? le(e) : e);
  return n === "bytes" ? r : k(r);
}
const Ii = (e) => R(le(e)), Wn = (e) => Ii($o(e));
function O(e, t, n, { strict: r } = {}) {
  return ee(e, { strict: !1 }) ? ki(e, t, n, {
    strict: r
  }) : Ai(e, t, n, {
    strict: r
  });
}
function xs(e, t) {
  if (typeof t == "number" && t > 0 && t > P(e) - 1)
    throw new ns({
      offset: t,
      position: "start",
      size: P(e)
    });
}
function Is(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && P(e) !== n - t)
    throw new ns({
      offset: n,
      position: "end",
      size: P(e)
    });
}
function Ai(e, t, n, { strict: r } = {}) {
  xs(e, t);
  const s = e.slice(t, n);
  return r && Is(s, t, n), s;
}
function ki(e, t, n, { strict: r } = {}) {
  xs(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && Is(s, t, n), s;
}
function mt(e, t) {
  if (e.length !== t.length)
    throw new Fo({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = Ei({
    params: e,
    values: t
  }), r = Zn(n);
  return r.length === 0 ? "0x" : r;
}
function Ei({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    n.push(Hn({ param: e[r], value: t[r] }));
  return n;
}
function Hn({ param: e, value: t }) {
  const n = Wt(e.type);
  if (n) {
    const [r, s] = n;
    return Ni(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return zi(t, {
      param: e
    });
  if (e.type === "address")
    return Ci(t);
  if (e.type === "bool")
    return ji(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int");
    return Ti(t, { signed: r });
  }
  if (e.type.startsWith("bytes"))
    return Di(t, { param: e });
  if (e.type === "string")
    return vi(t);
  throw new Zo(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function Zn(e) {
  let t = 0;
  for (let a = 0; a < e.length; a++) {
    const { dynamic: o, encoded: i } = e[a];
    o ? t += 32 : t += P(i);
  }
  const n = [], r = [];
  let s = 0;
  for (let a = 0; a < e.length; a++) {
    const { dynamic: o, encoded: i } = e[a];
    o ? (n.push(D(t + s, { size: 32 })), r.push(i), s += P(i)) : n.push(i);
  }
  return se([...n, ...r]);
}
function Ci(e) {
  if (!L(e))
    throw new W({ address: e });
  return { dynamic: !1, encoded: ce(e.toLowerCase()) };
}
function Ni(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e))
    throw new Jo(e);
  if (!r && e.length !== t)
    throw new Bo({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`
    });
  let s = !1;
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = Hn({ param: n, value: e[o] });
    i.dynamic && (s = !0), a.push(i);
  }
  if (r || s) {
    const o = Zn(a);
    if (r) {
      const i = D(a.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: a.length > 0 ? se([i, o]) : i
      };
    }
    if (s)
      return { dynamic: !0, encoded: o };
  }
  return {
    dynamic: !1,
    encoded: se(a.map(({ encoded: o }) => o))
  };
}
function Di(e, { param: t }) {
  const [, n] = t.type.split("bytes"), r = P(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = ce(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: se([ce(D(r, { size: 32 })), s])
    };
  }
  if (r !== parseInt(n))
    throw new Qo({
      expectedSize: parseInt(n),
      value: e
    });
  return { dynamic: !1, encoded: ce(e, { dir: "right" }) };
}
function ji(e) {
  return { dynamic: !1, encoded: ce(ss(e)) };
}
function Ti(e, { signed: t }) {
  return {
    dynamic: !1,
    encoded: D(e, {
      size: 32,
      signed: t
    })
  };
}
function vi(e) {
  const t = Un(e), n = Math.ceil(P(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(ce(O(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: se([
      ce(D(P(t), { size: 32 })),
      ...r
    ])
  };
}
function zi(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const a = t.components[s], o = Array.isArray(e) ? s : a.name, i = Hn({
      param: a,
      value: e[o]
    });
    r.push(i), i.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? Zn(r) : se(r.map(({ encoded: s }) => s))
  };
}
function Wt(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const Si = (e) => R(le(e)), Vn = (e) => O(Si(bs(e)), 0, 4);
function bt({ abi: e, args: t = [], name: n }) {
  const r = ee(n, { strict: !1 }), s = e.filter((o) => r ? o.type === "function" ? Vn(o) === n : o.type === "event" ? Wn(o) === n : !1 : "name" in o && o.name === n);
  if (s.length === 0)
    return;
  if (s.length === 1)
    return s[0];
  let a;
  for (const o of s) {
    if (!("inputs" in o))
      continue;
    if (!t || t.length === 0) {
      if (!o.inputs || o.inputs.length === 0)
        return o;
      continue;
    }
    if (!o.inputs || o.inputs.length === 0 || o.inputs.length !== t.length)
      continue;
    if (t.every((c, l) => {
      const u = "inputs" in o && o.inputs[l];
      return u ? In(c, u) : !1;
    })) {
      if (a && "inputs" in a && a.inputs) {
        const c = As(o.inputs, a.inputs, t);
        if (c)
          throw new Wo({
            abiItem: o,
            type: c[0]
          }, {
            abiItem: a,
            type: c[1]
          });
      }
      a = o;
    }
  }
  return a || s[0];
}
function In(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return L(e);
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, a) => In(Object.values(e)[a], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => In(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function As(e, t, n) {
  for (const r in e) {
    const s = e[r], a = t[r];
    if (s.type === "tuple" && a.type === "tuple" && "components" in s && "components" in a)
      return As(s.components, a.components, n[r]);
    const o = [s.type, a.type];
    if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") || o.includes("address") && o.includes("bytes") ? L(n[r]) : !1)
      return o;
  }
}
function ft({ abi: e, eventName: t, args: n }) {
  var i;
  let r = e[0];
  if (t && (r = bt({
    abi: e,
    args: n,
    name: t
  }), !r))
    throw new Dr(t, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  if (r.type !== "event")
    throw new Dr(void 0, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  const s = ae(r), a = Wn(s);
  let o = [];
  if (n && "inputs" in r) {
    const c = (i = r.inputs) == null ? void 0 : i.filter((u) => "indexed" in u && u.indexed), l = Array.isArray(n) ? n : Object.values(n).length > 0 ? (c == null ? void 0 : c.map((u) => n[u.name])) ?? [] : [];
    l.length > 0 && (o = (c == null ? void 0 : c.map((u, d) => Array.isArray(l[d]) ? l[d].map((h, f) => Or({ param: u, value: l[d][f] })) : l[d] ? Or({ param: u, value: l[d] }) : null)) ?? []);
  }
  return [a, ...o];
}
function Or({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return R(le(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Xo(e.type);
  return mt([e], [t]);
}
function Ht(e, { method: t }) {
  var r, s;
  const n = {};
  return e.transport.type === "fallback" && ((s = (r = e.transport).onResponse) == null || s.call(r, ({ method: a, response: o, status: i, transport: c }) => {
    i === "success" && t === a && (n[o] = c.request);
  })), (a) => n[a] || e.request;
}
async function ks(e, { address: t, abi: n, args: r, eventName: s, fromBlock: a, strict: o, toBlock: i }) {
  const c = Ht(e, {
    method: "eth_newFilter"
  }), l = s ? ft({
    abi: n,
    args: r,
    eventName: s
  }) : void 0, u = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof a == "bigint" ? D(a) : a,
        toBlock: typeof i == "bigint" ? D(i) : i,
        topics: l
      }
    ]
  });
  return {
    abi: n,
    args: r,
    eventName: s,
    id: u,
    request: c(u),
    strict: o,
    type: "event"
  };
}
function q(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
function me({ abi: e, args: t, functionName: n }) {
  let r = e[0];
  if (n && (r = bt({
    abi: e,
    args: t,
    name: n
  }), !r))
    throw new vt(n, {
      docsPath: "/docs/contract/encodeFunctionData"
    });
  if (r.type !== "function")
    throw new vt(void 0, {
      docsPath: "/docs/contract/encodeFunctionData"
    });
  const s = ae(r), a = Vn(s), o = "inputs" in r && r.inputs ? mt(r.inputs, t ?? []) : void 0;
  return he([a, o ?? "0x"]);
}
const Es = {
  1: "An `assert` condition failed.",
  17: "Arithmic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, Oi = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, Li = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
function Jn(e, t) {
  const n = e.substring(2).toLowerCase(), r = R(ne(n), "bytes"), s = n.split("");
  for (let a = 0; a < 40; a += 2)
    r[a >> 1] >> 4 >= 8 && s[a] && (s[a] = s[a].toUpperCase()), (r[a >> 1] & 15) >= 8 && s[a + 1] && (s[a + 1] = s[a + 1].toUpperCase());
  return `0x${s.join("")}`;
}
function fe(e, t) {
  if (!L(e))
    throw new W({ address: e });
  return Jn(e);
}
function Zt(e, t) {
  if (t === "0x" && e.length > 0)
    throw new Rt();
  if (P(t) && P(t) < 32)
    throw new Yn({
      data: t,
      params: e,
      size: P(t)
    });
  return Pi({
    data: t,
    params: e
  });
}
function Pi({ data: e, params: t }) {
  const n = [];
  let r = 0;
  for (let s = 0; s < t.length; s++) {
    if (r >= P(e))
      throw new Yn({
        data: e,
        params: t,
        size: P(e)
      });
    const a = t[s], { consumed: o, value: i } = Ee({ data: e, param: a, position: r });
    n.push(i), r += o;
  }
  return n;
}
function Ee({ data: e, param: t, position: n }) {
  const r = Wt(t.type);
  if (r) {
    const [a, o] = r;
    return Bi(e, {
      length: a,
      param: { ...t, type: o },
      position: n
    });
  }
  if (t.type === "tuple")
    return Ri(e, { param: t, position: n });
  if (t.type === "string")
    return Yi(e, { position: n });
  if (t.type.startsWith("bytes"))
    return Fi(e, { param: t, position: n });
  const s = O(e, n, n + 32, { strict: !0 });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return Gi(s, { param: t });
  if (t.type === "address")
    return Ui(s);
  if (t.type === "bool")
    return Qi(s);
  throw new Vo(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
function Ui(e) {
  return { consumed: 32, value: Jn(O(e, -20)) };
}
function Bi(e, { param: t, length: n, position: r }) {
  if (!n) {
    const o = G(O(e, r, r + 32, { strict: !0 })), i = G(O(e, o, o + 32, { strict: !0 }));
    let c = 0;
    const l = [];
    for (let u = 0; u < i; ++u) {
      const d = Ee({
        data: O(e, o + 32),
        param: t,
        position: c
      });
      c += d.consumed, l.push(d.value);
    }
    return { value: l, consumed: 32 };
  }
  if (zt(t)) {
    const o = Wt(t.type), i = !(o != null && o[0]);
    let c = 0;
    const l = [];
    for (let u = 0; u < n; ++u) {
      const d = G(O(e, r, r + 32, { strict: !0 })), h = Ee({
        data: O(e, d),
        param: t,
        position: i ? c : u * 32
      });
      c += h.consumed, l.push(h.value);
    }
    return { value: l, consumed: 32 };
  }
  let s = 0;
  const a = [];
  for (let o = 0; o < n; ++o) {
    const i = Ee({
      data: e,
      param: t,
      position: r + s
    });
    s += i.consumed, a.push(i.value);
  }
  return { value: a, consumed: s };
}
function Qi(e) {
  return { consumed: 32, value: co(e) };
}
function Fi(e, { param: t, position: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const o = G(O(e, n, n + 32, { strict: !0 })), i = G(O(e, o, o + 32, { strict: !0 }));
    return i === 0 ? { consumed: 32, value: "0x" } : { consumed: 32, value: O(e, o + 32, o + 32 + i, {
      strict: !0
    }) };
  }
  return { consumed: 32, value: O(e, n, n + parseInt(s), {
    strict: !0
  }) };
}
function Gi(e, { param: t }) {
  const n = t.type.startsWith("int");
  return {
    consumed: 32,
    value: parseInt(t.type.split("int")[1] || "256") > 48 ? v(e, { signed: n }) : G(e, { signed: n })
  };
}
function Yi(e, { position: t }) {
  const n = G(O(e, t, t + 32, { strict: !0 })), r = G(O(e, n, n + 32, { strict: !0 }));
  return r === 0 ? { consumed: 32, value: "" } : { consumed: 32, value: lo(Y(O(e, n + 32, n + 32 + r, { strict: !0 }))) };
}
function Ri(e, { param: t, position: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: o }) => !o), s = r ? [] : {};
  let a = 0;
  if (zt(t)) {
    const o = G(O(e, n, n + 32, { strict: !0 }));
    for (let i = 0; i < t.components.length; ++i) {
      const c = t.components[i], l = Ee({
        data: O(e, o),
        param: c,
        position: a
      });
      a += l.consumed, s[r ? i : c == null ? void 0 : c.name] = l.value;
    }
    return { consumed: 32, value: s };
  }
  for (let o = 0; o < t.components.length; ++o) {
    const i = t.components[o], c = Ee({
      data: e,
      param: i,
      position: n + a
    });
    a += c.consumed, s[r ? o : i == null ? void 0 : i.name] = c.value;
  }
  return { consumed: a, value: s };
}
function zt(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(zt);
  const n = Wt(e.type);
  return !!(n && zt({ ...e, type: n[1] }));
}
function Wi({ abi: e, data: t }) {
  const n = O(t, 0, 4);
  if (n === "0x")
    throw new Rt();
  const s = [...e || [], Oi, Li].find((a) => a.type === "error" && n === Vn(ae(a)));
  if (!s)
    throw new ms(n, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: s,
    args: "inputs" in s && s.inputs && s.inputs.length > 0 ? Zt(s.inputs, O(t, 4)) : void 0,
    errorName: s.name
  };
}
const H = (e, t, n) => JSON.stringify(e, (r, s) => {
  const a = typeof s == "bigint" ? s.toString() : s;
  return typeof t == "function" ? t(r, a) : a;
}, n);
function Cs({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs.map((s, a) => `${r && s.name ? `${s.name}: ` : ""}${typeof t[a] == "object" ? H(t[a]) : t[a]}`).join(", ")})`;
}
function Kn(e, t = "wei") {
  return hs(e, To[t]);
}
function gt(e) {
  const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class Hi extends x {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeConflictError"
    });
  }
}
class Zi extends x {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidLegacyVError"
    });
  }
}
class Vi extends x {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        gt(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSerializableTransactionError"
    });
  }
}
class Ji extends x {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStorageKeySizeError"
    });
  }
}
class Ki extends x {
  constructor(t, { account: n, docsPath: r, chain: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: h }) {
    var p;
    const f = gt({
      chain: s && `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof h < "u" && `${Kn(h)} ${((p = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : p.symbol) || "ETH"}`,
      data: a,
      gas: o,
      gasPrice: typeof i < "u" && `${Z(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Z(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${Z(l)} gwei`,
      nonce: u
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Request Arguments:",
        f
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionExecutionError"
    }), this.cause = t;
  }
}
class Ns extends x {
  constructor({ blockHash: t, blockNumber: n, blockTag: r, hash: s, index: a }) {
    let o = "Transaction";
    r && a !== void 0 && (o = `Transaction at block time "${r}" at index "${a}"`), t && a !== void 0 && (o = `Transaction at block hash "${t}" at index "${a}"`), n && a !== void 0 && (o = `Transaction at block number "${n}" at index "${a}"`), s && (o = `Transaction with hash "${s}"`), super(`${o} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionNotFoundError"
    });
  }
}
class Ds extends x {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionReceiptNotFoundError"
    });
  }
}
class Xi extends x {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WaitForTransactionReceiptTimeoutError"
    });
  }
}
class js extends x {
  constructor(t, { account: n, docsPath: r, chain: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: h }) {
    var b;
    const f = n ? q(n) : void 0, p = gt({
      from: f == null ? void 0 : f.address,
      to: d,
      value: typeof h < "u" && `${Kn(h)} ${((b = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : b.symbol) || "ETH"}`,
      data: a,
      gas: o,
      gasPrice: typeof i < "u" && `${Z(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Z(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${Z(l)} gwei`,
      nonce: u
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        p
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CallExecutionError"
    }), this.cause = t;
  }
}
class qi extends x {
  constructor(t, { abi: n, args: r, contractAddress: s, docsPath: a, functionName: o, sender: i }) {
    const c = bt({ abi: n, args: r, name: o }), l = c ? Cs({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, u = c ? ae(c, { includeName: !0 }) : void 0, d = gt({
      address: s && qa(s),
      function: u,
      args: l && l !== "()" && `${[...Array((o == null ? void 0 : o.length) ?? 0).keys()].map(() => " ").join("")}${l}`,
      sender: i
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
      cause: t,
      docsPath: a,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Contract Call:",
        d
      ].filter(Boolean)
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionExecutionError"
    }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = o, this.sender = i;
  }
}
class An extends x {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let a, o, i, c;
    if (n && n !== "0x")
      try {
        o = Wi({ abi: t, data: n });
        const { abiItem: u, errorName: d, args: h } = o;
        if (d === "Error")
          c = h[0];
        else if (d === "Panic") {
          const [f] = h;
          c = Es[f];
        } else {
          const f = u ? ae(u, { includeName: !0 }) : void 0, p = u && h ? Cs({
            abiItem: u,
            args: h,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          i = [
            f ? `Error: ${f}` : "",
            p && p !== "()" ? `       ${[...Array((d == null ? void 0 : d.length) ?? 0).keys()].map(() => " ").join("")}${p}` : ""
          ];
        }
      } catch (u) {
        a = u;
      }
    else
      s && (c = s);
    let l;
    a instanceof ms && (l = a.signature, i = [
      `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`
    ]), super(c && c !== "execution reverted" || l ? [
      `The contract function "${r}" reverted with the following ${l ? "signature" : "reason"}:`,
      c || l
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: a,
      metaMessages: i
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = o, this.reason = c, this.signature = l;
  }
}
class $i extends x {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionZeroDataError"
    });
  }
}
class Xn extends x {
  constructor({ data: t, message: n }) {
    super(n || ""), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RawContractError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t;
  }
}
class Ze extends x {
  constructor({ body: t, details: n, headers: r, status: s, url: a }) {
    super("HTTP request failed.", {
      details: n,
      metaMessages: [
        s && `Status: ${s}`,
        `URL: ${Qt(a)}`,
        t && `Request body: ${H(t)}`
      ].filter(Boolean)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = t, this.headers = r, this.status = s, this.url = a;
  }
}
class _i extends x {
  constructor({ body: t, details: n, url: r }) {
    super("WebSocket request failed.", {
      details: n,
      metaMessages: [`URL: ${Qt(r)}`, `Request body: ${H(t)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WebSocketRequestError"
    });
  }
}
class qn extends x {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${Qt(r)}`, `Request body: ${H(t)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class kn extends x {
  constructor({ body: t, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Qt(n)}`, `Request body: ${H(t)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TimeoutError"
    });
  }
}
const ec = -1;
class V extends x {
  constructor(t, { code: n, docsPath: r, metaMessages: s, shortMessage: a }) {
    super(a, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = t.name, this.code = t instanceof qn ? t.code : n ?? ec;
  }
}
class Oe extends V {
  constructor(t, n) {
    super(t, n), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderRpcError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class Ke extends V {
  constructor(t) {
    super(t, {
      code: Ke.code,
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ParseRpcError"
    });
  }
}
Object.defineProperty(Ke, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Xe extends V {
  constructor(t) {
    super(t, {
      code: Xe.code,
      shortMessage: "JSON is not a valid request object."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidRequestRpcError"
    });
  }
}
Object.defineProperty(Xe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class qe extends V {
  constructor(t) {
    super(t, {
      code: qe.code,
      shortMessage: "The method does not exist / is not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotFoundRpcError"
    });
  }
}
Object.defineProperty(qe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class $e extends V {
  constructor(t) {
    super(t, {
      code: $e.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParamsRpcError"
    });
  }
}
Object.defineProperty($e, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class De extends V {
  constructor(t) {
    super(t, {
      code: De.code,
      shortMessage: "An internal error was received."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InternalRpcError"
    });
  }
}
Object.defineProperty(De, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class we extends V {
  constructor(t) {
    super(t, {
      code: we.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidInputRpcError"
    });
  }
}
Object.defineProperty(we, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class _e extends V {
  constructor(t) {
    super(t, {
      code: _e.code,
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(_e, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class je extends V {
  constructor(t) {
    super(t, {
      code: je.code,
      shortMessage: "Requested resource not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceUnavailableRpcError"
    });
  }
}
Object.defineProperty(je, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class et extends V {
  constructor(t) {
    super(t, {
      code: et.code,
      shortMessage: "Transaction creation failed."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionRejectedRpcError"
    });
  }
}
Object.defineProperty(et, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class tt extends V {
  constructor(t) {
    super(t, {
      code: tt.code,
      shortMessage: "Method is not implemented."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotSupportedRpcError"
    });
  }
}
Object.defineProperty(tt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class nt extends V {
  constructor(t) {
    super(t, {
      code: nt.code,
      shortMessage: "Request exceeds defined limit."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "LimitExceededRpcError"
    });
  }
}
Object.defineProperty(nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class rt extends V {
  constructor(t) {
    super(t, {
      code: rt.code,
      shortMessage: "Version of JSON-RPC protocol is not supported."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "JsonRpcVersionUnsupportedError"
    });
  }
}
Object.defineProperty(rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class K extends Oe {
  constructor(t) {
    super(t, {
      code: K.code,
      shortMessage: "User rejected the request."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UserRejectedRequestError"
    });
  }
}
Object.defineProperty(K, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class st extends Oe {
  constructor(t) {
    super(t, {
      code: st.code,
      shortMessage: "The requested method and/or account has not been authorized by the user."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnauthorizedProviderError"
    });
  }
}
Object.defineProperty(st, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class at extends Oe {
  constructor(t) {
    super(t, {
      code: at.code,
      shortMessage: "The Provider does not support the requested method."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnsupportedProviderMethodError"
    });
  }
}
Object.defineProperty(at, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class ot extends Oe {
  constructor(t) {
    super(t, {
      code: ot.code,
      shortMessage: "The Provider is disconnected from all chains."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderDisconnectedError"
    });
  }
}
Object.defineProperty(ot, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class it extends Oe {
  constructor(t) {
    super(t, {
      code: it.code,
      shortMessage: "The Provider is not connected to the requested chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDisconnectedError"
    });
  }
}
Object.defineProperty(it, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
let Te = class Ts extends Oe {
  constructor(t) {
    super(t, {
      code: Ts.code,
      shortMessage: "An error occurred when attempting to switch chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SwitchChainError"
    });
  }
};
Object.defineProperty(Te, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class tc extends V {
  constructor(t) {
    super(t, {
      shortMessage: "An unknown RPC error occurred."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownRpcError"
    });
  }
}
const nc = 3;
function ct(e, { abi: t, address: n, args: r, docsPath: s, functionName: a, sender: o }) {
  const { code: i, data: c, message: l, shortMessage: u } = e instanceof Xn ? e : e instanceof x ? e.walk((h) => "data" in h) || e.walk() : {}, d = e instanceof Rt ? new $i({ functionName: a }) : [nc, De.code].includes(i) && (c || l || u) ? new An({
    abi: t,
    data: typeof c == "object" ? c.data : c,
    functionName: a,
    message: u ?? l
  }) : e;
  return new qi(d, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: a,
    sender: o
  });
}
class Le extends x {
  constructor({ docsPath: t } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."
    ].join(`
`), {
      docsPath: t,
      docsSlug: "account"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AccountNotFoundError"
    });
  }
}
class rc extends x {
  constructor(t, { account: n, docsPath: r, chain: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: h }) {
    var p;
    const f = gt({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof h < "u" && `${Kn(h)} ${((p = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : p.symbol) || "ETH"}`,
      data: a,
      gas: o,
      gasPrice: typeof i < "u" && `${Z(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Z(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${Z(l)} gwei`,
      nonce: u
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        f
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EstimateGasExecutionError"
    }), this.cause = t;
  }
}
function $n(e, t) {
  const n = (e.details || "").toLowerCase(), r = e.walk((s) => s.code === ke.code);
  return r instanceof x ? new ke({
    cause: e,
    message: r.details
  }) : ke.nodeMessage.test(n) ? new ke({
    cause: e,
    message: e.details
  }) : re.nodeMessage.test(n) ? new re({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : hn.nodeMessage.test(n) ? new hn({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : mn.nodeMessage.test(n) ? new mn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : bn.nodeMessage.test(n) ? new bn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : fn.nodeMessage.test(n) ? new fn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : gn.nodeMessage.test(n) ? new gn({ cause: e }) : yn.nodeMessage.test(n) ? new yn({ cause: e, gas: t == null ? void 0 : t.gas }) : wn.nodeMessage.test(n) ? new wn({ cause: e, gas: t == null ? void 0 : t.gas }) : Mn.nodeMessage.test(n) ? new Mn({ cause: e }) : ge.nodeMessage.test(n) ? new ge({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new Gt({
    cause: e
  });
}
function sc(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = $n(e, n);
    return s instanceof Gt ? e : s;
  })();
  return new rc(r, {
    docsPath: t,
    ...n
  });
}
function _n(e, { format: t }) {
  if (!t)
    return {};
  const n = {};
  function r(a) {
    const o = Object.keys(a);
    for (const i of o)
      i in e && (n[i] = e[i]), a[i] && typeof a[i] == "object" && !Array.isArray(a[i]) && r(a[i]);
  }
  const s = t(e || {});
  return r(s), n;
}
function yt(e) {
  const { account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: s, to: a } = e, o = t ? q(t) : void 0;
  if (o && !L(o.address))
    throw new W({ address: o.address });
  if (a && !L(a))
    throw new W({ address: a });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u"))
    throw new Hi();
  if (r && r > 2n ** 256n - 1n)
    throw new re({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new ge({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
class ac extends x {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseFeeScalarError"
    });
  }
}
class er extends x {
  constructor() {
    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Eip1559FeesNotSupportedError"
    });
  }
}
class oc extends x {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Z(t)} gwei).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MaxFeePerGasTooLowError"
    });
  }
}
class vs extends x {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BlockNotFoundError"
    });
  }
}
async function ue(e, { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: s } = {}) {
  var u, d, h;
  const a = r ?? "latest", o = s ?? !1, i = n !== void 0 ? D(n) : void 0;
  let c = null;
  if (t ? c = await e.request({
    method: "eth_getBlockByHash",
    params: [t, o]
  }) : c = await e.request({
    method: "eth_getBlockByNumber",
    params: [i || a, o]
  }), !c)
    throw new vs({ blockHash: t, blockNumber: n });
  return (((h = (d = (u = e.chain) == null ? void 0 : u.formatters) == null ? void 0 : d.block) == null ? void 0 : h.format) || Qn)(c);
}
async function tr(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function ic(e, t) {
  return zs(e, t);
}
async function zs(e, t) {
  var a, o, i;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  if (typeof ((a = r == null ? void 0 : r.fees) == null ? void 0 : a.defaultPriorityFee) == "function") {
    const c = n || await E(e, ue, "getBlock")({});
    return r.fees.defaultPriorityFee({
      block: c,
      client: e,
      request: s
    });
  }
  if (typeof ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.defaultPriorityFee) < "u")
    return (i = r == null ? void 0 : r.fees) == null ? void 0 : i.defaultPriorityFee;
  try {
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return v(c);
  } catch {
    const [c, l] = await Promise.all([
      n ? Promise.resolve(n) : E(e, ue, "getBlock")({}),
      E(e, tr, "getGasPrice")({})
    ]);
    if (typeof c.baseFeePerGas != "bigint")
      throw new er();
    const u = l - c.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function cc(e, t) {
  return En(e, t);
}
async function En(e, t) {
  var h, f;
  const { block: n, chain: r = e.chain, request: s, type: a = "eip1559" } = t || {}, o = await (async () => {
    var p, b;
    return typeof ((p = r == null ? void 0 : r.fees) == null ? void 0 : p.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: e,
      request: s
    }) : ((b = r == null ? void 0 : r.fees) == null ? void 0 : b.baseFeeMultiplier) ?? 1.2;
  })();
  if (o < 1)
    throw new ac();
  const c = 10 ** (((h = o.toString().split(".")[1]) == null ? void 0 : h.length) ?? 0), l = (p) => p * BigInt(Math.ceil(o * c)) / BigInt(c), u = n || await E(e, ue, "getBlock")({});
  if (typeof ((f = r == null ? void 0 : r.fees) == null ? void 0 : f.estimateFeesPerGas) == "function")
    return r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: l,
      request: s,
      type: a
    });
  if (a === "eip1559") {
    if (typeof u.baseFeePerGas != "bigint")
      throw new er();
    const p = s != null && s.maxPriorityFeePerGas ? s.maxPriorityFeePerGas : await zs(e, {
      block: u,
      chain: r,
      request: s
    }), b = l(u.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? b + p,
      maxPriorityFeePerGas: p
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? l(await E(e, tr, "getGasPrice")({}))
  };
}
async function Ss(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, r ? D(r) : n]
  });
  return G(s);
}
function Os(e) {
  if (e.type)
    return e.type;
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Vi({ transaction: e });
}
async function Vt(e, t) {
  const { account: n = e.account, chain: r, gas: s, nonce: a, type: o } = t;
  if (!n)
    throw new Le();
  const i = q(n), c = await E(e, ue, "getBlock")({ blockTag: "latest" }), l = { ...t, from: i.address };
  if (typeof a > "u" && (l.nonce = await E(e, Ss, "getTransactionCount")({
    address: i.address,
    blockTag: "pending"
  })), typeof o > "u")
    try {
      l.type = Os(l);
    } catch {
      l.type = typeof c.baseFeePerGas == "bigint" ? "eip1559" : "legacy";
    }
  if (l.type === "eip1559") {
    const { maxFeePerGas: u, maxPriorityFeePerGas: d } = await En(e, {
      block: c,
      chain: r,
      request: l
    });
    if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < d)
      throw new oc({
        maxPriorityFeePerGas: d
      });
    l.maxPriorityFeePerGas = d, l.maxFeePerGas = u;
  } else {
    if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
      throw new er();
    const { gasPrice: u } = await En(e, {
      block: c,
      chain: r,
      request: l,
      type: "legacy"
    });
    l.gasPrice = u;
  }
  return typeof s > "u" && (l.gas = await E(e, nr, "estimateGas")({
    ...l,
    account: { address: i.address, type: "json-rpc" }
  })), yt(l), l;
}
async function nr(e, t) {
  var s, a, o;
  const n = t.account ?? e.account;
  if (!n)
    throw new Le({
      docsPath: "/docs/actions/public/estimateGas"
    });
  const r = q(n);
  try {
    const { accessList: i, blockNumber: c, blockTag: l, data: u, gas: d, gasPrice: h, maxFeePerGas: f, maxPriorityFeePerGas: p, nonce: b, to: g, value: w, ...y } = r.type === "local" ? await Vt(e, t) : t, N = (c ? D(c) : void 0) || l;
    yt(t);
    const A = (o = (a = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : a.transactionRequest) == null ? void 0 : o.format, C = (A || ht)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ..._n(y, { format: A }),
      from: r.address,
      accessList: i,
      data: u,
      gas: d,
      gasPrice: h,
      maxFeePerGas: f,
      maxPriorityFeePerGas: p,
      nonce: b,
      to: g,
      value: w
    }), B = await e.request({
      method: "eth_estimateGas",
      params: N ? [C, N] : [C]
    });
    return BigInt(B);
  } catch (i) {
    throw sc(i, {
      ...t,
      account: r,
      chain: e.chain
    });
  }
}
async function lc(e, { abi: t, address: n, args: r, functionName: s, ...a }) {
  const o = me({
    abi: t,
    args: r,
    functionName: s
  });
  try {
    return await E(e, nr, "estimateGas")({
      data: o,
      to: n,
      ...a
    });
  } catch (i) {
    const c = a.account ? q(a.account) : void 0;
    throw ct(i, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: s,
      sender: c == null ? void 0 : c.address
    });
  }
}
const Lr = "/docs/contract/decodeEventLog";
function wt({ abi: e, data: t, strict: n, topics: r }) {
  const s = n ?? !0, [a, ...o] = r;
  if (!a)
    throw new Go({
      docsPath: Lr
    });
  const i = e.find((p) => p.type === "event" && a === Wn(ae(p)));
  if (!(i && "name" in i) || i.type !== "event")
    throw new Yo(a, {
      docsPath: Lr
    });
  const { name: c, inputs: l } = i, u = l == null ? void 0 : l.some((p) => !("name" in p && p.name));
  let d = u ? [] : {};
  const h = l.filter((p) => "indexed" in p && p.indexed);
  for (let p = 0; p < h.length; p++) {
    const b = h[p], g = o[p];
    if (!g)
      throw new Se({
        abiItem: i,
        param: b
      });
    d[b.name || p] = uc({ param: b, value: g });
  }
  const f = l.filter((p) => !("indexed" in p && p.indexed));
  if (f.length > 0) {
    if (t && t !== "0x")
      try {
        const p = Zt(f, t);
        if (p)
          if (u)
            d = [...d, ...p];
          else
            for (let b = 0; b < f.length; b++)
              d[f[b].name] = p[b];
      } catch (p) {
        if (s)
          throw p instanceof Yn ? new ye({
            abiItem: i,
            data: p.data,
            params: p.params,
            size: p.size
          }) : p;
      }
    else if (s)
      throw new ye({
        abiItem: i,
        data: "0x",
        params: f,
        size: 0
      });
  }
  return {
    eventName: c,
    args: Object.values(d).length > 0 ? d : void 0
  };
}
function uc({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (Zt([e], t) || [])[0];
}
async function rr(e, { address: t, blockHash: n, fromBlock: r, toBlock: s, event: a, events: o, args: i, strict: c } = {}) {
  const l = c ?? !1, u = o ?? (a ? [a] : void 0);
  let d = [];
  u && (d = [
    u.flatMap((f) => ft({
      abi: [f],
      eventName: f.name,
      args: i
    }))
  ], a && (d = d[0]));
  let h;
  return n ? h = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: d, blockHash: n }]
  }) : h = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: d,
        fromBlock: typeof r == "bigint" ? D(r) : r,
        toBlock: typeof s == "bigint" ? D(s) : s
      }
    ]
  }), h.map((f) => {
    var p;
    try {
      const { eventName: b, args: g } = u ? wt({
        abi: u,
        data: f.data,
        topics: f.topics,
        strict: l
      }) : { eventName: void 0, args: void 0 };
      return X(f, { args: g, eventName: b });
    } catch (b) {
      let g, w;
      if (b instanceof ye || b instanceof Se) {
        if (l)
          return;
        g = b.abiItem.name, w = (p = b.abiItem.inputs) == null ? void 0 : p.some((y) => !("name" in y && y.name));
      }
      return X(f, { args: w ? [] : {}, eventName: g });
    }
  }).filter(Boolean);
}
async function Ls(e, { abi: t, address: n, args: r, blockHash: s, eventName: a, fromBlock: o, toBlock: i, strict: c }) {
  const l = a ? bt({ abi: t, name: a }) : void 0, u = l ? void 0 : t.filter((d) => d.type === "event");
  return E(e, rr, "getLogs")({
    address: n,
    args: r,
    blockHash: s,
    event: l,
    events: u,
    fromBlock: o,
    toBlock: i,
    strict: c
  });
}
const tn = "/docs/contract/decodeFunctionResult";
function Pe({ abi: e, args: t, functionName: n, data: r }) {
  let s = e[0];
  if (n && (s = bt({
    abi: e,
    args: t,
    name: n
  }), !s))
    throw new vt(n, { docsPath: tn });
  if (s.type !== "function")
    throw new vt(void 0, { docsPath: tn });
  if (!s.outputs)
    throw new Ro(s.name, { docsPath: tn });
  const a = Zt(s.outputs, r);
  if (a && a.length > 1)
    return a;
  if (a && a.length === 1)
    return a[0];
}
const Cn = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Ps = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  }
], Us = [
  ...Ps,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], dc = [
  ...Ps,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], Pr = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Ur = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], pc = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  }
], hc = "0x82ad56cb";
function Ue({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new pn({
      chain: t,
      contract: { name: n }
    });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new pn({
      blockNumber: e,
      chain: t,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function mc(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = $n(e, n);
    return s instanceof Gt ? e : s;
  })();
  return new js(r, {
    docsPath: t,
    ...n
  });
}
const nn = /* @__PURE__ */ new Map();
function sr({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const a = async () => {
    const u = c();
    o();
    const d = u.map(({ args: h }) => h);
    d.length !== 0 && e(d).then((h) => {
      var f;
      s && Array.isArray(h) && h.sort(s);
      for (let p = 0; p < u.length; p++) {
        const { pendingPromise: b } = u[p];
        (f = b.resolve) == null || f.call(b, [h[p], h]);
      }
    }).catch((h) => {
      var f;
      for (let p = 0; p < u.length; p++) {
        const { pendingPromise: b } = u[p];
        (f = b.reject) == null || f.call(b, h);
      }
    });
  }, o = () => nn.delete(t), i = () => c().map(({ args: u }) => u), c = () => nn.get(t) || [], l = (u) => nn.set(t, [...c(), u]);
  return {
    flush: o,
    async schedule(u) {
      const d = {}, h = new Promise((b, g) => {
        d.resolve = b, d.reject = g;
      });
      return (n == null ? void 0 : n([...i(), u])) && a(), c().length > 0 ? (l({ args: u, pendingPromise: d }), h) : (l({ args: u, pendingPromise: d }), setTimeout(a, r), h);
    }
  };
}
async function Jt(e, t) {
  var w, y, M, N;
  const { account: n = e.account, batch: r = !!((w = e.batch) != null && w.multicall), blockNumber: s, blockTag: a = "latest", accessList: o, data: i, gas: c, gasPrice: l, maxFeePerGas: u, maxPriorityFeePerGas: d, nonce: h, to: f, value: p, ...b } = t, g = n ? q(n) : void 0;
  try {
    yt(t);
    const I = (s ? D(s) : void 0) || a, C = (N = (M = (y = e.chain) == null ? void 0 : y.formatters) == null ? void 0 : M.transactionRequest) == null ? void 0 : N.format, Q = (C || ht)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ..._n(b, { format: C }),
      from: g == null ? void 0 : g.address,
      accessList: o,
      data: i,
      gas: c,
      gasPrice: l,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      nonce: h,
      to: f,
      value: p
    });
    if (r && bc({ request: Q }))
      try {
        return await fc(e, {
          ...Q,
          blockNumber: s,
          blockTag: a
        });
      } catch ($) {
        if (!($ instanceof ps) && !($ instanceof pn))
          throw $;
      }
    const be = await e.request({
      method: "eth_call",
      params: I ? [Q, I] : [Q]
    });
    return be === "0x" ? { data: void 0 } : { data: be };
  } catch (A) {
    const I = gc(A), { offchainLookup: C, offchainLookupSignature: B } = await import("./ccip-BXvqi053.mjs");
    if ((I == null ? void 0 : I.slice(0, 10)) === B && f)
      return { data: await C(e, { data: I, to: f }) };
    throw mc(A, {
      ...t,
      account: g,
      chain: e.chain
    });
  }
}
function bc({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(!t || t.startsWith(hc) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function fc(e, t) {
  var b;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((b = e.batch) == null ? void 0 : b.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: s, blockTag: a = "latest", data: o, multicallAddress: i, to: c } = t;
  let l = i;
  if (!l) {
    if (!e.chain)
      throw new ps();
    l = Ue({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = (s ? D(s) : void 0) || a, { schedule: h } = sr({
    id: `${e.uid}.${d}`,
    wait: r,
    shouldSplitBatch(g) {
      return g.reduce((y, { data: M }) => y + (M.length - 2), 0) > n * 2;
    },
    fn: async (g) => {
      const w = g.map((N) => ({
        allowFailure: !0,
        callData: N.data,
        target: N.to
      })), y = me({
        abi: Cn,
        args: [w],
        functionName: "aggregate3"
      }), M = await e.request({
        method: "eth_call",
        params: [
          {
            data: y,
            to: l
          },
          d
        ]
      });
      return Pe({
        abi: Cn,
        args: [w],
        functionName: "aggregate3",
        data: M || "0x"
      });
    }
  }), [{ returnData: f, success: p }] = await h({ data: o, to: c });
  if (!p)
    throw new Xn({ data: f });
  return f === "0x" ? { data: void 0 } : { data: f };
}
function gc(e) {
  if (!(e instanceof x))
    return;
  const t = e.walk();
  return typeof t.data == "object" ? t.data.data : t.data;
}
async function de(e, { abi: t, address: n, args: r, functionName: s, ...a }) {
  const o = me({
    abi: t,
    args: r,
    functionName: s
  });
  try {
    const { data: i } = await E(e, Jt, "call")({
      data: o,
      to: n,
      ...a
    });
    return Pe({
      abi: t,
      args: r,
      functionName: s,
      data: i || "0x"
    });
  } catch (i) {
    throw ct(i, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/readContract",
      functionName: s
    });
  }
}
async function yc(e, { abi: t, address: n, args: r, dataSuffix: s, functionName: a, ...o }) {
  const i = o.account ? q(o.account) : void 0, c = me({
    abi: t,
    args: r,
    functionName: a
  });
  try {
    const { data: l } = await E(e, Jt, "call")({
      batch: !1,
      data: `${c}${s ? s.replace("0x", "") : ""}`,
      to: n,
      ...o
    });
    return {
      result: Pe({
        abi: t,
        args: r,
        functionName: a,
        data: l || "0x"
      }),
      request: {
        abi: t,
        address: n,
        args: r,
        dataSuffix: s,
        functionName: a,
        ...o
      }
    };
  } catch (l) {
    throw ct(l, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/simulateContract",
      functionName: a,
      sender: i == null ? void 0 : i.address
    });
  }
}
const rn = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map();
let wc = 0;
function Be(e, t, n) {
  const r = ++wc, s = () => rn.get(e) || [], a = () => {
    const u = s();
    rn.set(e, u.filter((d) => d.id !== r));
  }, o = () => {
    const u = Br.get(e);
    s().length === 1 && u && u(), a();
  }, i = s();
  if (rn.set(e, [
    ...i,
    { id: r, fns: t }
  ]), i && i.length > 0)
    return o;
  const c = {};
  for (const u in t)
    c[u] = (...d) => {
      var f, p;
      const h = s();
      if (h.length !== 0)
        for (const b of h)
          (p = (f = b.fns)[u]) == null || p.call(f, ...d);
    };
  const l = n(c);
  return typeof l == "function" && Br.set(e, l), o;
}
async function St(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Mt(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const a = () => s = !1;
  return (async () => {
    let i;
    t && (i = await e({ unpoll: a }));
    const c = await (n == null ? void 0 : n(i)) ?? r;
    await St(c);
    const l = async () => {
      s && (await e({ unpoll: a }), await St(r), l());
    };
    l();
  })(), a;
}
const Mc = /* @__PURE__ */ new Map(), xc = /* @__PURE__ */ new Map();
function Ic(e) {
  const t = (s, a) => ({
    clear: () => a.delete(s),
    get: () => a.get(s),
    set: (o) => a.set(s, o)
  }), n = t(e, Mc), r = t(e, xc);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function Ac(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  const r = Ic(t), s = r.response.get();
  if (s && n > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < n)
    return s.data;
  let a = r.promise.get();
  a || (a = e(), r.promise.set(a));
  try {
    const o = await a;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: o }), o;
  } finally {
    r.promise.clear();
  }
}
const kc = (e) => `blockNumber.${e}`;
async function xt(e, { cacheTime: t = e.cacheTime, maxAge: n } = {}) {
  const r = await Ac(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: kc(e.uid), cacheTime: n ?? t });
  return BigInt(r);
}
async function Kt(e, { filter: t }) {
  const n = "strict" in t && t.strict;
  return (await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  })).map((s) => {
    var a;
    if (typeof s == "string")
      return s;
    try {
      const { eventName: o, args: i } = "abi" in t && t.abi ? wt({
        abi: t.abi,
        data: s.data,
        topics: s.topics,
        strict: n
      }) : { eventName: void 0, args: void 0 };
      return X(s, { args: i, eventName: o });
    } catch (o) {
      let i, c;
      if (o instanceof ye || o instanceof Se) {
        if ("strict" in t && t.strict)
          return;
        i = o.abiItem.name, c = (a = o.abiItem.inputs) == null ? void 0 : a.some((l) => !("name" in l && l.name));
      }
      return X(s, { args: c ? [] : {}, eventName: i });
    }
  }).filter(Boolean);
}
async function Xt(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function Ec(e, { abi: t, address: n, args: r, batch: s = !0, eventName: a, onError: o, onLogs: i, poll: c, pollingInterval: l = e.pollingInterval, strict: u }) {
  return (typeof c < "u" ? c : e.transport.type !== "webSocket") ? (() => {
    const p = H([
      "watchContractEvent",
      n,
      r,
      s,
      e.uid,
      a,
      l
    ]), b = u ?? !1;
    return Be(p, { onLogs: i, onError: o }, (g) => {
      let w, y, M = !1;
      const N = Mt(async () => {
        var A;
        if (!M) {
          try {
            y = await E(e, ks, "createContractEventFilter")({
              abi: t,
              address: n,
              args: r,
              eventName: a,
              strict: b
            });
          } catch {
          }
          M = !0;
          return;
        }
        try {
          let I;
          if (y)
            I = await E(e, Kt, "getFilterChanges")({ filter: y });
          else {
            const C = await E(e, xt, "getBlockNumber")({});
            w && w !== C ? I = await E(e, Ls, "getContractEvents")({
              abi: t,
              address: n,
              args: r,
              eventName: a,
              fromBlock: w + 1n,
              toBlock: C,
              strict: b
            }) : I = [], w = C;
          }
          if (I.length === 0)
            return;
          if (s)
            g.onLogs(I);
          else
            for (const C of I)
              g.onLogs([C]);
        } catch (I) {
          y && I instanceof we && (M = !1), (A = g.onError) == null || A.call(g, I);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        y && await E(e, Xt, "uninstallFilter")({ filter: y }), N();
      };
    });
  })() : (() => {
    let p = !0, b = () => p = !1;
    return (async () => {
      try {
        const g = a ? ft({
          abi: t,
          eventName: a,
          args: r
        }) : [], { unsubscribe: w } = await e.transport.subscribe({
          params: ["logs", { address: n, topics: g }],
          onData(y) {
            var N;
            if (!p)
              return;
            const M = y.result;
            try {
              const { eventName: A, args: I } = wt({
                abi: t,
                data: M.data,
                topics: M.topics,
                strict: u
              }), C = X(M, {
                args: I,
                eventName: A
              });
              i([C]);
            } catch (A) {
              let I, C;
              if (A instanceof ye || A instanceof Se) {
                if (u)
                  return;
                I = A.abiItem.name, C = (N = A.abiItem.inputs) == null ? void 0 : N.some((Q) => !("name" in Q && Q.name));
              }
              const B = X(M, {
                args: C ? [] : {},
                eventName: I
              });
              i([B]);
            }
          },
          onError(y) {
            o == null || o(y);
          }
        });
        b = w, p || b();
      } catch (g) {
        o == null || o(g);
      }
    })(), b;
  })();
}
function Bs({ chain: e, currentChainId: t }) {
  if (!e)
    throw new jo();
  if (t !== e.id)
    throw new Do({ chain: e, currentChainId: t });
}
function Cc(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = $n(e, n);
    return s instanceof Gt ? e : s;
  })();
  return new Ki(r, {
    docsPath: t,
    ...n
  });
}
async function lt(e) {
  const t = await e.request({
    method: "eth_chainId"
  });
  return G(t);
}
async function ar(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  });
}
async function or(e, t) {
  var b, g, w, y;
  const { account: n = e.account, chain: r = e.chain, accessList: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: u, to: d, value: h, ...f } = t;
  if (!n)
    throw new Le({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const p = q(n);
  try {
    yt(t);
    let M;
    if (r !== null && (M = await E(e, lt, "getChainId")({}), Bs({
      currentChainId: M,
      chain: r
    })), p.type === "local") {
      const C = await E(e, Vt, "prepareTransactionRequest")({
        account: p,
        accessList: s,
        chain: r,
        data: a,
        gas: o,
        gasPrice: i,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        nonce: u,
        to: d,
        value: h,
        ...f
      });
      M || (M = await E(e, lt, "getChainId")({}));
      const B = (b = r == null ? void 0 : r.serializers) == null ? void 0 : b.transaction, Q = await p.signTransaction({
        ...C,
        chainId: M
      }, { serializer: B });
      return await E(e, ar, "sendRawTransaction")({
        serializedTransaction: Q
      });
    }
    const N = (y = (w = (g = e.chain) == null ? void 0 : g.formatters) == null ? void 0 : w.transactionRequest) == null ? void 0 : y.format, I = (N || ht)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ..._n(f, { format: N }),
      accessList: s,
      data: a,
      from: p.address,
      gas: o,
      gasPrice: i,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      nonce: u,
      to: d,
      value: h
    });
    return await e.request({
      method: "eth_sendTransaction",
      params: [I]
    });
  } catch (M) {
    throw Cc(M, {
      ...t,
      account: p,
      chain: t.chain || void 0
    });
  }
}
async function Nc(e, { abi: t, address: n, args: r, dataSuffix: s, functionName: a, ...o }) {
  const i = me({
    abi: t,
    args: r,
    functionName: a
  });
  return await E(e, or, "sendTransaction")({
    data: `${i}${s ? s.replace("0x", "") : ""}`,
    to: n,
    ...o
  });
}
async function Dc(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: s, rpcUrls: a, blockExplorers: o } = t;
  await e.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: D(n),
        chainName: r,
        nativeCurrency: s,
        rpcUrls: a.default.http,
        blockExplorerUrls: o ? Object.values(o).map(({ url: i }) => i) : void 0
      }
    ]
  });
}
const Nn = 256;
let At = Nn, kt;
function jc(e = 11) {
  if (!kt || At + e > Nn * 2) {
    kt = "", At = 0;
    for (let t = 0; t < Nn; t++)
      kt += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return kt.substring(At, At++ + e);
}
function Qs(e) {
  const { batch: t, cacheTime: n = e.pollingInterval ?? 4e3, key: r = "base", name: s = "Base Client", pollingInterval: a = 4e3, type: o = "base" } = e, i = e.chain, c = e.account ? q(e.account) : void 0, { config: l, request: u, value: d } = e.transport({
    chain: i,
    pollingInterval: a
  }), h = { ...l, ...d }, f = {
    account: c,
    batch: t,
    cacheTime: n,
    chain: i,
    key: r,
    name: s,
    pollingInterval: a,
    request: u,
    transport: h,
    type: o,
    uid: jc()
  };
  function p(b) {
    return (g) => {
      const w = g(b);
      for (const M in f)
        delete w[M];
      const y = { ...b, ...w };
      return Object.assign(y, { extend: p(y) });
    };
  }
  return Object.assign(f, { extend: p(f) });
}
function Dn(e, { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, a) => {
    const o = async ({ count: i = 0 } = {}) => {
      const c = async ({ error: l }) => {
        const u = typeof t == "function" ? t({ count: i, error: l }) : t;
        u && await St(u), o({ count: i + 1 });
      };
      try {
        const l = await e();
        s(l);
      } catch (l) {
        if (i < n && await r({ count: i, error: l }))
          return c({ error: l });
        a(l);
      }
    };
    o();
  });
}
const Fs = (e) => "code" in e ? e.code !== -1 && e.code !== -32004 && e.code !== -32005 && e.code !== -32042 && e.code !== -32603 : e instanceof Ze && e.status ? e.status !== 403 && e.status !== 408 && e.status !== 413 && e.status !== 429 && e.status !== 500 && e.status !== 502 && e.status !== 503 && e.status !== 504 : !1;
function Tc(e, { retryDelay: t = 150, retryCount: n = 3 } = {}) {
  return async (r) => Dn(async () => {
    try {
      return await e(r);
    } catch (s) {
      const a = s;
      switch (a.code) {
        case Ke.code:
          throw new Ke(a);
        case Xe.code:
          throw new Xe(a);
        case qe.code:
          throw new qe(a);
        case $e.code:
          throw new $e(a);
        case De.code:
          throw new De(a);
        case we.code:
          throw new we(a);
        case _e.code:
          throw new _e(a);
        case je.code:
          throw new je(a);
        case et.code:
          throw new et(a);
        case tt.code:
          throw new tt(a);
        case nt.code:
          throw new nt(a);
        case rt.code:
          throw new rt(a);
        case K.code:
          throw new K(a);
        case st.code:
          throw new st(a);
        case at.code:
          throw new at(a);
        case ot.code:
          throw new ot(a);
        case it.code:
          throw new it(a);
        case Te.code:
          throw new Te(a);
        case 5e3:
          throw new K(a);
        default:
          throw s instanceof x ? s : new tc(a);
      }
    }
  }, {
    delay: ({ count: s, error: a }) => {
      var o;
      if (a && a instanceof Ze) {
        const i = (o = a == null ? void 0 : a.headers) == null ? void 0 : o.get("Retry-After");
        if (i != null && i.match(/\d/))
          return parseInt(i) * 1e3;
      }
      return ~~(1 << s) * t;
    },
    retryCount: n,
    shouldRetry: ({ error: s }) => !Fs(s)
  });
}
function qt({ key: e, name: t, request: n, retryCount: r = 3, retryDelay: s = 150, timeout: a, type: o }, i) {
  return {
    config: { key: e, name: t, request: n, retryCount: r, retryDelay: s, timeout: a, type: o },
    request: Tc(n, { retryCount: r, retryDelay: s }),
    value: i
  };
}
function Gs(e, t = {}) {
  const { key: n = "custom", name: r = "Custom Provider", retryDelay: s } = t;
  return ({ retryCount: a }) => qt({
    key: n,
    name: r,
    request: e.request.bind(e),
    retryCount: t.retryCount ?? a,
    retryDelay: s,
    type: "custom"
  });
}
function Qr(e, t = {}) {
  const { key: n = "fallback", name: r = "Fallback", rank: s = !1, retryCount: a, retryDelay: o } = t;
  return ({ chain: i, pollingInterval: c = 4e3, timeout: l }) => {
    let u = e, d = () => {
    };
    const h = qt({
      key: n,
      name: r,
      async request({ method: f, params: p }) {
        const b = async (g = 0) => {
          const w = u[g]({ chain: i, retryCount: 0, timeout: l });
          try {
            const y = await w.request({
              method: f,
              params: p
            });
            return d({
              method: f,
              params: p,
              response: y,
              transport: w,
              status: "success"
            }), y;
          } catch (y) {
            if (d({
              error: y,
              method: f,
              params: p,
              transport: w,
              status: "error"
            }), Fs(y) || g === u.length - 1)
              throw y;
            return b(g + 1);
          }
        };
        return b();
      },
      retryCount: a,
      retryDelay: o,
      type: "fallback"
    }, {
      onResponse: (f) => d = f,
      transports: u.map((f) => f({ chain: i, retryCount: 0 }))
    });
    if (s) {
      const f = typeof s == "object" ? s : {};
      vc({
        chain: i,
        interval: f.interval ?? c,
        onTransports: (p) => u = p,
        sampleCount: f.sampleCount,
        timeout: f.timeout,
        transports: u,
        weights: f.weights
      });
    }
    return h;
  };
}
function vc({ chain: e, interval: t = 4e3, onTransports: n, sampleCount: r = 10, timeout: s = 1e3, transports: a, weights: o = {} }) {
  const { stability: i = 0.7, latency: c = 0.3 } = o, l = [], u = async () => {
    const d = await Promise.all(a.map(async (p) => {
      const b = p({ chain: e, retryCount: 0, timeout: s }), g = Date.now();
      let w, y;
      try {
        await b.request({ method: "net_listening" }), y = 1;
      } catch {
        y = 0;
      } finally {
        w = Date.now();
      }
      return { latency: w - g, success: y };
    }));
    l.push(d), l.length > r && l.shift();
    const h = Math.max(...l.map((p) => Math.max(...p.map(({ latency: b }) => b)))), f = a.map((p, b) => {
      const g = l.map((A) => A[b].latency), y = 1 - g.reduce((A, I) => A + I, 0) / g.length / h, M = l.map((A) => A[b].success), N = M.reduce((A, I) => A + I, 0) / M.length;
      return N === 0 ? [0, b] : [
        c * y + i * N,
        b
      ];
    }).sort((p, b) => b[0] - p[0]);
    n(f.map(([, p]) => a[p])), await St(t), u();
  };
  u();
}
class Ys extends x {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
}
function zc() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof dn.global.WebSocket < "u")
    return dn.global.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const Fr = zc();
function Rs(e, { errorInstance: t = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((s, a) => {
    (async () => {
      let o;
      try {
        const i = new AbortController();
        n > 0 && (o = setTimeout(() => {
          r ? i.abort() : a(t);
        }, n)), s(await e({ signal: i == null ? void 0 : i.signal }));
      } catch (i) {
        i.name === "AbortError" && a(t), a(i);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
let jn = 0;
async function Sc(e, { body: t, fetchOptions: n = {}, timeout: r = 1e4 }) {
  var i;
  const { headers: s, method: a, signal: o } = n;
  try {
    const c = await Rs(async ({ signal: u }) => await fetch(e, {
      ...n,
      body: Array.isArray(t) ? H(t.map((h) => ({
        jsonrpc: "2.0",
        id: h.id ?? jn++,
        ...h
      }))) : H({ jsonrpc: "2.0", id: t.id ?? jn++, ...t }),
      headers: {
        ...s,
        "Content-Type": "application/json"
      },
      method: a || "POST",
      signal: o || (r > 0 ? u : void 0)
    }), {
      errorInstance: new kn({ body: t, url: e }),
      timeout: r,
      signal: !0
    });
    let l;
    if ((i = c.headers.get("Content-Type")) != null && i.startsWith("application/json") ? l = await c.json() : l = await c.text(), !c.ok)
      throw new Ze({
        body: t,
        details: H(l.error) || c.statusText,
        headers: c.headers,
        status: c.status,
        url: e
      });
    return l;
  } catch (c) {
    throw c instanceof Ze || c instanceof kn ? c : new Ze({
      body: t,
      details: c.message,
      url: e
    });
  }
}
const sn = /* @__PURE__ */ new Map();
async function an(e) {
  let t = sn.get(e);
  if (t)
    return t;
  const { schedule: n } = sr({
    id: e,
    fn: async () => {
      const a = new Fr(e), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = ({ data: u }) => {
        const d = JSON.parse(u), h = d.method === "eth_subscription", f = h ? d.params.subscription : d.id, p = h ? i : o, b = p.get(f);
        b && b({ data: u }), h || p.delete(f);
      }, l = () => {
        sn.delete(e), a.removeEventListener("close", l), a.removeEventListener("message", c);
      };
      return a.addEventListener("close", l), a.addEventListener("message", c), a.readyState === Fr.CONNECTING && await new Promise((u, d) => {
        a && (a.onopen = u, a.onerror = d);
      }), t = Object.assign(a, {
        requests: o,
        subscriptions: i
      }), sn.set(e, t), [t];
    }
  }), [r, [s]] = await n();
  return s;
}
function Oc(e, { body: t, onResponse: n }) {
  if (e.readyState === e.CLOSED || e.readyState === e.CLOSING)
    throw new _i({
      body: t,
      url: e.url,
      details: "Socket is closed."
    });
  const r = jn++, s = ({ data: a }) => {
    var i;
    const o = JSON.parse(a);
    typeof o.id == "number" && r !== o.id || (n == null || n(o), t.method === "eth_subscribe" && typeof o.result == "string" && e.subscriptions.set(o.result, s), t.method === "eth_unsubscribe" && e.subscriptions.delete((i = t.params) == null ? void 0 : i[0]));
  };
  return e.requests.set(r, s), e.send(JSON.stringify({ jsonrpc: "2.0", ...t, id: r })), e;
}
async function Lc(e, { body: t, timeout: n = 1e4 }) {
  return Rs(() => new Promise((r) => Ce.webSocket(e, {
    body: t,
    onResponse: r
  })), {
    errorInstance: new kn({ body: t, url: e.url }),
    timeout: n
  });
}
const Ce = {
  http: Sc,
  webSocket: Oc,
  webSocketAsync: Lc
};
function Pc(e, t = {}) {
  const { batch: n, fetchOptions: r, key: s = "http", name: a = "HTTP JSON-RPC", retryDelay: o } = t;
  return ({ chain: i, retryCount: c, timeout: l }) => {
    const { batchSize: u = 1e3, wait: d = 0 } = typeof n == "object" ? n : {}, h = t.retryCount ?? c, f = l ?? t.timeout ?? 1e4, p = e || (i == null ? void 0 : i.rpcUrls.default.http[0]);
    if (!p)
      throw new Ys();
    return qt({
      key: s,
      name: a,
      async request({ method: b, params: g }) {
        const w = { method: b, params: g }, { schedule: y } = sr({
          id: `${e}`,
          wait: d,
          shouldSplitBatch(I) {
            return I.length > u;
          },
          fn: (I) => Ce.http(p, {
            body: I,
            fetchOptions: r,
            timeout: f
          }),
          sort: (I, C) => I.id - C.id
        }), M = async (I) => n ? y(I) : [await Ce.http(p, { body: I, fetchOptions: r, timeout: f })], [{ error: N, result: A }] = await M(w);
        if (N)
          throw new qn({
            body: w,
            error: N,
            url: p
          });
        return A;
      },
      retryCount: h,
      retryDelay: o,
      timeout: f,
      type: "http"
    }, {
      fetchOptions: r,
      url: e
    });
  };
}
function ir(e, t) {
  var r, s, a;
  if (!(e instanceof x))
    return !1;
  const n = e.walk((o) => o instanceof An);
  return n instanceof An ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || (a = n.reason) != null && a.includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && n.reason === Es[50]) : !1;
}
function Ws(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return ee(t) ? t : null;
}
function Ct(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return Ne(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = Ws(n[r]), a = s ? le(s) : R(ne(n[r]), "bytes");
    t = R(se([t, a]), "bytes");
  }
  return Ne(t);
}
function Uc(e) {
  return `[${e.slice(2)}]`;
}
function Bc(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? Ws(e) || R(ne(e)) : Ne(t);
}
function $t(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(ne(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let a = 0; a < s.length; a++) {
    let o = ne(s[a]);
    o.byteLength > 255 && (o = ne(Uc(Bc(s[a])))), n[r] = o.length, n.set(o, r + 1), r += o.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function Qc(e, { blockNumber: t, blockTag: n, coinType: r, name: s, universalResolverAddress: a }) {
  let o = a;
  if (!o) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = Ue({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const i = me({
      abi: Ur,
      functionName: "addr",
      ...r != null ? { args: [Ct(s), BigInt(r)] } : { args: [Ct(s)] }
    }), c = await E(e, de, "readContract")({
      address: o,
      abi: Us,
      functionName: "resolve",
      args: [k($t(s)), i],
      blockNumber: t,
      blockTag: n
    });
    if (c[0] === "0x")
      return null;
    const l = Pe({
      abi: Ur,
      args: r != null ? [Ct(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: c[0]
    });
    return l === "0x" || Y(l) === "0x00" ? null : l;
  } catch (i) {
    if (ir(i, "resolve"))
      return null;
    throw i;
  }
}
class Fc extends x {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidMetadataError"
    });
  }
}
class Re extends x {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidNftUriError"
    });
  }
}
class cr extends x {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUriResolutionError"
    });
  }
}
class Gc extends x {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUnsupportedNamespaceError"
    });
  }
}
const Yc = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, Rc = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, Wc = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, Hc = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function Zc(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = e;
    });
  }
}
function Gr(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function Hs({ uri: e, gatewayUrls: t }) {
  const n = Wc.test(e);
  if (n)
    return { uri: e, isOnChain: !0, isEncoded: n };
  const r = Gr(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = Gr(t == null ? void 0 : t.arweave, "https://arweave.net"), a = e.match(Yc), { protocol: o, subpath: i, target: c, subtarget: l = "" } = (a == null ? void 0 : a.groups) || {}, u = o === "ipns:/" || i === "ipns/", d = o === "ipfs:/" || i === "ipfs/" || Rc.test(e);
  if (e.startsWith("http") && !u && !d) {
    let f = e;
    return t != null && t.arweave && (f = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: f, isOnChain: !1, isEncoded: !1 };
  }
  if ((u || d) && c)
    return {
      uri: `${r}/${u ? "ipns" : "ipfs"}/${c}${l}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (o === "ar:/" && c)
    return {
      uri: `${s}/${c}${l || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let h = e.replace(Hc, "");
  if (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`), h.startsWith("data:") || h.startsWith("{"))
    return {
      uri: h,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new cr({ uri: e });
}
function Zs(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new Fc({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function Vc({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await lr({
      gatewayUrls: e,
      uri: Zs(n)
    });
  } catch {
    throw new cr({ uri: t });
  }
}
async function lr({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = Hs({ uri: t, gatewayUrls: e });
  if (r || await Zc(n))
    return n;
  throw new cr({ uri: t });
}
function Jc(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"), [a, o] = n.split(":"), [i, c] = r.split(":");
  if (!a || a.toLowerCase() !== "eip155")
    throw new Re({ reason: "Only EIP-155 supported" });
  if (!o)
    throw new Re({ reason: "Chain ID not found" });
  if (!c)
    throw new Re({
      reason: "Contract address not found"
    });
  if (!s)
    throw new Re({ reason: "Token ID not found" });
  if (!i)
    throw new Re({ reason: "ERC namespace not found" });
  return {
    chainID: parseInt(o),
    namespace: i.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function Kc(e, { nft: t }) {
  if (t.namespace === "erc721")
    return de(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return de(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)]
    });
  throw new Gc({ namespace: t.namespace });
}
async function Xc(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n) ? qc(e, { gatewayUrls: t, record: n }) : lr({ uri: n, gatewayUrls: t });
}
async function qc(e, { gatewayUrls: t, record: n }) {
  const r = Jc(n), s = await Kc(e, { nft: r }), { uri: a, isOnChain: o, isEncoded: i } = Hs({ uri: s, gatewayUrls: t });
  if (o && (a.includes("data:application/json;base64,") || a.startsWith("{"))) {
    const l = i ? (
      // if it is encoded, decode it
      atob(a.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      a
    ), u = JSON.parse(l);
    return lr({ uri: Zs(u), gatewayUrls: t });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), Vc({
    gatewayUrls: t,
    uri: a.replace(/(?:0x)?{id}/, c)
  });
}
async function Vs(e, { blockNumber: t, blockTag: n, name: r, key: s, universalResolverAddress: a }) {
  let o = a;
  if (!o) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = Ue({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const i = await E(e, de, "readContract")({
      address: o,
      abi: Us,
      functionName: "resolve",
      args: [
        k($t(r)),
        me({
          abi: Pr,
          functionName: "text",
          args: [Ct(r), s]
        })
      ],
      blockNumber: t,
      blockTag: n
    });
    if (i[0] === "0x")
      return null;
    const c = Pe({
      abi: Pr,
      functionName: "text",
      data: i[0]
    });
    return c === "" ? null : c;
  } catch (i) {
    if (ir(i, "resolve"))
      return null;
    throw i;
  }
}
async function $c(e, { blockNumber: t, blockTag: n, gatewayUrls: r, name: s, universalResolverAddress: a }) {
  const o = await E(e, Vs, "getEnsText")({
    blockNumber: t,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: a
  });
  if (!o)
    return null;
  try {
    return await Xc(e, { record: o, gatewayUrls: r });
  } catch {
    return null;
  }
}
async function _c(e, { address: t, blockNumber: n, blockTag: r, universalResolverAddress: s }) {
  let a = s;
  if (!a) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = Ue({
      blockNumber: n,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const o = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const [i, c] = await E(e, de, "readContract")({
      address: a,
      abi: dc,
      functionName: "reverse",
      args: [k($t(o))],
      blockNumber: n,
      blockTag: r
    });
    return t.toLowerCase() !== c.toLowerCase() ? null : i;
  } catch (i) {
    if (ir(i, "reverse"))
      return null;
    throw i;
  }
}
async function el(e, { blockNumber: t, blockTag: n, name: r, universalResolverAddress: s }) {
  let a = s;
  if (!a) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = Ue({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [o] = await E(e, de, "readContract")({
    address: a,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [k($t(r))],
    blockNumber: t,
    blockTag: n
  });
  return o;
}
async function tl(e) {
  const t = Ht(e, {
    method: "eth_newBlockFilter"
  }), n = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: t(n), type: "block" };
}
async function Js(e, { address: t, args: n, event: r, events: s, fromBlock: a, strict: o, toBlock: i } = {}) {
  const c = s ?? (r ? [r] : void 0), l = Ht(e, {
    method: "eth_newFilter"
  });
  let u = [];
  c && (u = [
    c.flatMap((h) => ft({
      abi: [h],
      eventName: h.name,
      args: n
    }))
  ], r && (u = u[0]));
  const d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof a == "bigint" ? D(a) : a,
        toBlock: typeof i == "bigint" ? D(i) : i,
        ...u.length ? { topics: u } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: a,
    id: d,
    request: l(d),
    strict: o,
    toBlock: i,
    type: "event"
  };
}
async function Ks(e) {
  const t = Ht(e, {
    method: "eth_newPendingTransactionFilter"
  }), n = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: t(n), type: "transaction" };
}
async function nl(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? D(n) : void 0, a = await e.request({
    method: "eth_getBalance",
    params: [t, s || r]
  });
  return BigInt(a);
}
async function rl(e, { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? D(n) : void 0;
  let a;
  return t ? a = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }) : a = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }), G(a);
}
async function sl(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? D(n) : void 0, a = await e.request({
    method: "eth_getCode",
    params: [t, s || r]
  });
  if (a !== "0x")
    return a;
}
function al(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r)))
  };
}
async function ol(e, { blockCount: t, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const a = n ? D(n) : void 0, o = await e.request({
    method: "eth_feeHistory",
    params: [
      D(t),
      a || r,
      s
    ]
  });
  return al(o);
}
async function il(e, { filter: t }) {
  const n = t.strict ?? !1;
  return (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((s) => {
    var a;
    try {
      const { eventName: o, args: i } = "abi" in t && t.abi ? wt({
        abi: t.abi,
        data: s.data,
        topics: s.topics,
        strict: n
      }) : { eventName: void 0, args: void 0 };
      return X(s, { args: i, eventName: o });
    } catch (o) {
      let i, c;
      if (o instanceof ye || o instanceof Se) {
        if ("strict" in t && t.strict)
          return;
        i = o.abiItem.name, c = (a = o.abiItem.inputs) == null ? void 0 : a.some((l) => !("name" in l && l.name));
      }
      return X(s, { args: c ? [] : {}, eventName: i });
    }
  }).filter(Boolean);
}
const cl = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, ll = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function ul({ domain: e, message: t, primaryType: n, types: r }) {
  const s = typeof e > "u" ? {} : e, a = {
    EIP712Domain: ta({ domain: s }),
    ...r
  };
  ea({
    domain: s,
    message: t,
    primaryType: n,
    types: a
  });
  const o = ["0x1901"];
  return s && o.push(dl({
    domain: s,
    types: a
  })), n !== "EIP712Domain" && o.push(Xs({
    data: t,
    primaryType: n,
    types: a
  })), R(se(o));
}
function dl({ domain: e, types: t }) {
  return Xs({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function Xs({ data: e, primaryType: t, types: n }) {
  const r = qs({
    data: e,
    primaryType: t,
    types: n
  });
  return R(r);
}
function qs({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }], s = [pl({ primaryType: t, types: n })];
  for (const a of n[t]) {
    const [o, i] = _s({
      types: n,
      name: a.name,
      type: a.type,
      value: e[a.name]
    });
    r.push(o), s.push(i);
  }
  return mt(r, s);
}
function pl({ primaryType: e, types: t }) {
  const n = k(hl({ primaryType: e, types: t }));
  return R(n);
}
function hl({ primaryType: e, types: t }) {
  let n = "";
  const r = $s({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const a of s)
    n += `${a}(${t[a].map(({ name: o, type: i }) => `${i} ${o}`).join(",")})`;
  return n;
}
function $s({ primaryType: e, types: t }, n = /* @__PURE__ */ new Set()) {
  const r = e.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0)
    return n;
  n.add(s);
  for (const a of t[s])
    $s({ primaryType: a.type, types: t }, n);
  return n;
}
function _s({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [
      { type: "bytes32" },
      R(qs({ data: r, primaryType: n, types: e }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, R(r)];
  if (n === "string")
    return [{ type: "bytes32" }, R(k(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), a = r.map((o) => _s({
      name: t,
      type: s,
      types: e,
      value: o
    }));
    return [
      { type: "bytes32" },
      R(mt(a.map(([o]) => o), a.map(([, o]) => o)))
    ];
  }
  return [{ type: n }, r];
}
function ea({ domain: e, message: t, primaryType: n, types: r }) {
  const s = r, a = (o, i) => {
    for (const c of o) {
      const { name: l, type: u } = c, d = u, h = i[l], f = d.match(ll);
      if (f && (typeof h == "number" || typeof h == "bigint")) {
        const [g, w, y] = f;
        D(h, {
          signed: w === "int",
          size: parseInt(y) / 8
        });
      }
      if (d === "address" && typeof h == "string" && !L(h))
        throw new W({ address: h });
      const p = d.match(cl);
      if (p) {
        const [g, w] = p;
        if (w && P(h) !== parseInt(w))
          throw new Ho({
            expectedSize: parseInt(w),
            givenSize: P(h)
          });
      }
      const b = s[d];
      b && a(b, h);
    }
  };
  if (s.EIP712Domain && e && a(s.EIP712Domain, e), n !== "EIP712Domain") {
    const o = s[n];
    a(o, t);
  }
}
function ta({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
const on = "/docs/contract/encodeDeployData";
function na({ abi: e, args: t, bytecode: n }) {
  if (!t || t.length === 0)
    return n;
  const r = e.find((a) => "type" in a && a.type === "constructor");
  if (!r)
    throw new Uo({ docsPath: on });
  if (!("inputs" in r))
    throw new Nr({ docsPath: on });
  if (!r.inputs || r.inputs.length === 0)
    throw new Nr({ docsPath: on });
  const s = mt(r.inputs, t);
  return he([n, s]);
}
class Yr extends x {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NegativeOffsetError"
    });
  }
}
class ml extends x {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PositionOutOfBoundsError"
    });
  }
}
const bl = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new ml({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new Yr({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new Yr({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e) {
    const t = this.inspectBytes(e);
    return this.position += e, t;
  },
  readUint8() {
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  setPosition(e) {
    this.assertPosition(e), this.position = e;
  }
};
function fl(e) {
  const t = Object.create(bl);
  return t.bytes = e, t.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), t;
}
const gl = `Ethereum Signed Message:
`;
function yl(e, t) {
  const n = typeof e == "string" ? ne(e) : e.raw instanceof Uint8Array ? e.raw : le(e.raw), r = ne(`${gl}${n.length}`);
  return R(se([r, n]), t);
}
function wl(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: a } = e;
  if (t <= 0)
    throw new ze({ chainId: t });
  if (a && !L(a))
    throw new W({ address: a });
  if (r)
    throw new x("`gasPrice` is not a valid EIP-1559 Transaction attribute.");
  if (s && s > 2n ** 256n - 1n)
    throw new re({ maxFeePerGas: s });
  if (n && s && n > s)
    throw new ge({ maxFeePerGas: s, maxPriorityFeePerGas: n });
}
function Ml(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: a } = e;
  if (t <= 0)
    throw new ze({ chainId: t });
  if (a && !L(a))
    throw new W({ address: a });
  if (n || s)
    throw new x("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (r && r > 2n ** 256n - 1n)
    throw new re({ maxFeePerGas: r });
}
function xl(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: a, accessList: o } = e;
  if (a && !L(a))
    throw new W({ address: a });
  if (typeof t < "u" && t <= 0)
    throw new ze({ chainId: t });
  if (n || s)
    throw new x("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (r && r > 2n ** 256n - 1n)
    throw new re({ maxFeePerGas: r });
  if (o)
    throw new x("`accessList` is not a valid Legacy Transaction attribute.");
}
function _t(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: s } = e[n];
    for (let a = 0; a < s.length; a++)
      if (s[a].length - 2 !== 64)
        throw new Ji({ storageKey: s[a] });
    if (!L(r))
      throw new W({ address: r });
    t.push([r, s]);
  }
  return t;
}
function ra(e, t) {
  const n = Os(e);
  return n === "eip1559" ? Il(e, t) : n === "eip2930" ? Al(e, t) : kl(e, t);
}
function Il(e, t) {
  const { chainId: n, gas: r, nonce: s, to: a, value: o, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: l, data: u } = e;
  wl(e);
  const d = _t(l), h = [
    k(n),
    s ? k(s) : "0x",
    c ? k(c) : "0x",
    i ? k(i) : "0x",
    r ? k(r) : "0x",
    a ?? "0x",
    o ? k(o) : "0x",
    u ?? "0x",
    d
  ];
  if (t) {
    const f = t.v === 0n ? "0x" : t.v === 1n ? k(1) : t.v === 27n ? "0x" : k(1);
    h.push(f, Y(t.r), Y(t.s));
  }
  return he([
    "0x02",
    Qe(h)
  ]);
}
function Al(e, t) {
  const { chainId: n, gas: r, data: s, nonce: a, to: o, value: i, accessList: c, gasPrice: l } = e;
  Ml(e);
  const u = _t(c), d = [
    k(n),
    a ? k(a) : "0x",
    l ? k(l) : "0x",
    r ? k(r) : "0x",
    o ?? "0x",
    i ? k(i) : "0x",
    s ?? "0x",
    u
  ];
  if (t) {
    const h = t.v === 0n ? "0x" : t.v === 1n ? k(1) : t.v === 27n ? "0x" : k(1);
    d.push(h, Y(t.r), Y(t.s));
  }
  return he([
    "0x01",
    Qe(d)
  ]);
}
function kl(e, t) {
  const { chainId: n = 0, gas: r, data: s, nonce: a, to: o, value: i, gasPrice: c } = e;
  xl(e);
  let l = [
    a ? k(a) : "0x",
    c ? k(c) : "0x",
    r ? k(r) : "0x",
    o ?? "0x",
    i ? k(i) : "0x",
    s ?? "0x"
  ];
  if (t) {
    const u = (() => {
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      const d = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== d)
        throw new Zi({ v: t.v });
      return d;
    })();
    l = [
      ...l,
      k(u),
      t.r,
      t.s
    ];
  } else
    n > 0 && (l = [
      ...l,
      k(n),
      "0x",
      "0x"
    ]);
  return Qe(l);
}
function El(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function Cl(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? G(e.nonce) : void 0,
    storageProof: e.storageProof ? El(e.storageProof) : void 0
  };
}
async function Nl(e, { address: t, blockNumber: n, blockTag: r, storageKeys: s }) {
  const a = r ?? "latest", o = n !== void 0 ? D(n) : void 0, i = await e.request({
    method: "eth_getProof",
    params: [t, s, o || a]
  });
  return Cl(i);
}
async function Dl(e, { address: t, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const a = n !== void 0 ? D(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, a || r]
  });
}
async function ur(e, { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: a }) {
  var u, d, h;
  const o = r || "latest", i = n !== void 0 ? D(n) : void 0;
  let c = null;
  if (s ? c = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }) : t ? c = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, D(a)]
  }) : (i || o) && (c = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [i || o, D(a)]
  })), !c)
    throw new Ns({
      blockHash: t,
      blockNumber: n,
      blockTag: o,
      hash: s,
      index: a
    });
  return (((h = (d = (u = e.chain) == null ? void 0 : u.formatters) == null ? void 0 : d.transaction) == null ? void 0 : h.format) || pt)(c);
}
async function jl(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    E(e, xt, "getBlockNumber")({}),
    t ? E(e, ur, "getBlockNumber")({ hash: t }) : void 0
  ]), a = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return a ? r - a + 1n : 0n;
}
async function Tn(e, { hash: t }) {
  var s, a, o;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  });
  if (!n)
    throw new Ds({ hash: t });
  return (((o = (a = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : a.transactionReceipt) == null ? void 0 : o.format) || os)(n);
}
async function Tl(e, t) {
  var b;
  const { allowFailure: n = !0, batchSize: r, blockNumber: s, blockTag: a, contracts: o, multicallAddress: i } = t, c = r ?? (typeof ((b = e.batch) == null ? void 0 : b.multicall) == "object" && e.batch.multicall.batchSize || 1024);
  let l = i;
  if (!l) {
    if (!e.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    l = Ue({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const u = [[]];
  let d = 0, h = 0;
  for (let g = 0; g < o.length; g++) {
    const { abi: w, address: y, args: M, functionName: N } = o[g];
    try {
      const A = me({
        abi: w,
        args: M,
        functionName: N
      });
      h += (A.length - 2) / 2, // Check if batching is enabled.
      c > 0 && // Check if the current size of the batch exceeds the size limit.
      h > c && // Check if the current chunk is not already empty.
      u[d].length > 0 && (d++, h = (A.length - 2) / 2, u[d] = []), u[d] = [
        ...u[d],
        {
          allowFailure: !0,
          callData: A,
          target: y
        }
      ];
    } catch (A) {
      const I = ct(A, {
        abi: w,
        address: y,
        args: M,
        docsPath: "/docs/contract/multicall",
        functionName: N
      });
      if (!n)
        throw I;
      u[d] = [
        ...u[d],
        {
          allowFailure: !0,
          callData: "0x",
          target: y
        }
      ];
    }
  }
  const f = await Promise.allSettled(u.map((g) => E(e, de, "readContract")({
    abi: Cn,
    address: l,
    args: [g],
    blockNumber: s,
    blockTag: a,
    functionName: "aggregate3"
  }))), p = [];
  for (let g = 0; g < f.length; g++) {
    const w = f[g];
    if (w.status === "rejected") {
      if (!n)
        throw w.reason;
      for (let M = 0; M < u[g].length; M++)
        p.push({
          status: "failure",
          error: w.reason,
          result: void 0
        });
      continue;
    }
    const y = w.value;
    for (let M = 0; M < y.length; M++) {
      const { returnData: N, success: A } = y[M], { callData: I } = u[g][M], { abi: C, address: B, functionName: Q, args: be } = o[p.length];
      try {
        if (I === "0x")
          throw new Rt();
        if (!A)
          throw new Xn({ data: N });
        const $ = Pe({
          abi: C,
          args: be,
          data: N,
          functionName: Q
        });
        p.push(n ? { result: $, status: "success" } : $);
      } catch ($) {
        const Ir = ct($, {
          abi: C,
          address: B,
          args: be,
          docsPath: "/docs/contract/multicall",
          functionName: Q
        });
        if (!n)
          throw Ir;
        p.push({ error: Ir, result: void 0, status: "failure" });
      }
    }
  }
  if (p.length !== o.length)
    throw new x("multicall results mismatch");
  return p;
}
const vl = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
BigInt(1);
BigInt(2);
function zl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Sl(e, t) {
  const n = ee(e) ? le(e) : e, r = ee(t) ? le(t) : t;
  return zl(n, r);
}
async function sa(e, { address: t, hash: n, signature: r, ...s }) {
  const a = ee(r) ? r : k(r);
  try {
    const { data: o } = await E(e, Jt, "call")({
      data: na({
        abi: pc,
        args: [t, n, a],
        bytecode: vl
      }),
      ...s
    });
    return Sl(o ?? "0x0", "0x1");
  } catch (o) {
    if (o instanceof js)
      return !1;
    throw o;
  }
}
async function Ol(e, { address: t, message: n, signature: r, ...s }) {
  const a = yl(n);
  return sa(e, {
    address: t,
    hash: a,
    signature: r,
    ...s
  });
}
async function Ll(e, { address: t, signature: n, message: r, primaryType: s, types: a, domain: o, ...i }) {
  const c = ul({ message: r, primaryType: s, types: a, domain: o });
  return sa(e, {
    address: t,
    hash: c,
    signature: n,
    ...i
  });
}
function aa(e, { emitOnBegin: t = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: a, pollingInterval: o = e.pollingInterval }) {
  const i = typeof a < "u" ? a : e.transport.type !== "webSocket";
  let c;
  return i ? (() => {
    const d = H([
      "watchBlockNumber",
      e.uid,
      t,
      n,
      o
    ]);
    return Be(d, { onBlockNumber: r, onError: s }, (h) => Mt(async () => {
      var f;
      try {
        const p = await E(e, xt, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (p === c)
            return;
          if (p - c > 1 && n)
            for (let b = c + 1n; b < p; b++)
              h.onBlockNumber(b, c), c = b;
        }
        (!c || p > c) && (h.onBlockNumber(p, c), c = p);
      } catch (p) {
        (f = h.onError) == null || f.call(h, p);
      }
    }, {
      emitOnBegin: t,
      interval: o
    }));
  })() : (() => {
    let d = !0, h = () => d = !1;
    return (async () => {
      try {
        const { unsubscribe: f } = await e.transport.subscribe({
          params: ["newHeads"],
          onData(p) {
            var g;
            if (!d)
              return;
            const b = v((g = p.result) == null ? void 0 : g.number);
            r(b, c), c = b;
          },
          onError(p) {
            s == null || s(p);
          }
        });
        h = f, d || h();
      } catch (f) {
        s == null || s(f);
      }
    })(), h;
  })();
}
async function Pl(e, { confirmations: t = 1, hash: n, onReplaced: r, pollingInterval: s = e.pollingInterval, timeout: a }) {
  const o = H(["waitForTransactionReceipt", e.uid, n]);
  let i, c, l, u = !1;
  return new Promise((d, h) => {
    a && setTimeout(() => h(new Xi({ hash: n })), a);
    const f = Be(o, { onReplaced: r, resolve: d, reject: h }, (p) => {
      const b = E(e, aa, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(g) {
          if (u)
            return;
          let w = g;
          const y = (M) => {
            b(), M(), f();
          };
          try {
            if (l) {
              if (t > 1 && (!l.blockNumber || w - l.blockNumber + 1n < t))
                return;
              y(() => p.resolve(l));
              return;
            }
            if (i || (u = !0, await Dn(async () => {
              i = await E(e, ur, "getTransaction")({ hash: n }), i.blockNumber && (w = i.blockNumber);
            }, {
              // exponential backoff
              delay: ({ count: M }) => ~~(1 << M) * 200,
              retryCount: 6
            }), u = !1), l = await E(e, Tn, "getTransactionReceipt")({ hash: n }), t > 1 && (!l.blockNumber || w - l.blockNumber + 1n < t))
              return;
            y(() => p.resolve(l));
          } catch (M) {
            if (i && (M instanceof Ns || M instanceof Ds))
              try {
                c = i, u = !0;
                const N = await Dn(() => E(e, ue, "getBlock")({
                  blockNumber: w,
                  includeTransactions: !0
                }), {
                  // exponential backoff
                  delay: ({ count: C }) => ~~(1 << C) * 200,
                  retryCount: 6,
                  shouldRetry: ({ error: C }) => C instanceof vs
                });
                u = !1;
                const A = N.transactions.find(({ from: C, nonce: B }) => C === c.from && B === c.nonce);
                if (!A || (l = await E(e, Tn, "getTransactionReceipt")({
                  hash: A.hash
                }), t > 1 && (!l.blockNumber || w - l.blockNumber + 1n < t)))
                  return;
                let I = "replaced";
                A.to === c.to && A.value === c.value ? I = "repriced" : A.from === A.to && A.value === 0n && (I = "cancelled"), y(() => {
                  var C;
                  (C = p.onReplaced) == null || C.call(p, {
                    reason: I,
                    replacedTransaction: c,
                    transaction: A,
                    transactionReceipt: l
                  }), p.resolve(l);
                });
              } catch (N) {
                y(() => p.reject(N));
              }
            else
              y(() => p.reject(M));
          }
        }
      });
    });
  });
}
function Ul(e, { blockTag: t = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: a, includeTransactions: o, poll: i, pollingInterval: c = e.pollingInterval }) {
  const l = typeof i < "u" ? i : e.transport.type !== "webSocket", u = o ?? !1;
  let d;
  return l ? (() => {
    const p = H([
      "watchBlocks",
      e.uid,
      n,
      r,
      u,
      c
    ]);
    return Be(p, { onBlock: s, onError: a }, (b) => Mt(async () => {
      var g;
      try {
        const w = await E(e, ue, "getBlock")({
          blockTag: t,
          includeTransactions: u
        });
        if (w.number && (d != null && d.number)) {
          if (w.number === d.number)
            return;
          if (w.number - d.number > 1 && n)
            for (let y = (d == null ? void 0 : d.number) + 1n; y < w.number; y++) {
              const M = await E(e, ue, "getBlock")({
                blockNumber: y,
                includeTransactions: u
              });
              b.onBlock(M, d), d = M;
            }
        }
        // If no previous block exists, emit.
        (!(d != null && d.number) || // If the block tag is "pending" with no block number, emit.
        t === "pending" && !(w != null && w.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        w.number && w.number > d.number) && (b.onBlock(w, d), d = w);
      } catch (w) {
        (g = b.onError) == null || g.call(b, w);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let p = !0, b = () => p = !1;
    return (async () => {
      try {
        const { unsubscribe: g } = await e.transport.subscribe({
          params: ["newHeads"],
          onData(w) {
            var N, A, I;
            if (!p)
              return;
            const M = (((I = (A = (N = e.chain) == null ? void 0 : N.formatters) == null ? void 0 : A.block) == null ? void 0 : I.format) || Qn)(w.result);
            s(M, d), d = M;
          },
          onError(w) {
            a == null || a(w);
          }
        });
        b = g, p || b();
      } catch (g) {
        a == null || a(g);
      }
    })(), b;
  })();
}
function Bl(e, { address: t, args: n, batch: r = !0, event: s, events: a, onError: o, onLogs: i, poll: c, pollingInterval: l = e.pollingInterval, strict: u }) {
  const d = typeof c < "u" ? c : e.transport.type !== "webSocket", h = u ?? !1;
  return d ? (() => {
    const b = H([
      "watchEvent",
      t,
      n,
      r,
      e.uid,
      s,
      l
    ]);
    return Be(b, { onLogs: i, onError: o }, (g) => {
      let w, y, M = !1;
      const N = Mt(async () => {
        var A;
        if (!M) {
          try {
            y = await E(e, Js, "createEventFilter")({
              address: t,
              args: n,
              event: s,
              events: a,
              strict: h
            });
          } catch {
          }
          M = !0;
          return;
        }
        try {
          let I;
          if (y)
            I = await E(e, Kt, "getFilterChanges")({ filter: y });
          else {
            const C = await E(e, xt, "getBlockNumber")({});
            w && w !== C ? I = await E(e, rr, "getLogs")({
              address: t,
              args: n,
              event: s,
              events: a,
              fromBlock: w + 1n,
              toBlock: C
            }) : I = [], w = C;
          }
          if (I.length === 0)
            return;
          if (r)
            g.onLogs(I);
          else
            for (const C of I)
              g.onLogs([C]);
        } catch (I) {
          y && I instanceof we && (M = !1), (A = g.onError) == null || A.call(g, I);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        y && await E(e, Xt, "uninstallFilter")({ filter: y }), N();
      };
    });
  })() : (() => {
    let b = !0, g = () => b = !1;
    return (async () => {
      try {
        const w = a ?? (s ? [s] : void 0);
        let y = [];
        w && (y = [
          w.flatMap((N) => ft({
            abi: [N],
            eventName: N.name,
            args: n
          }))
        ], s && (y = y[0]));
        const { unsubscribe: M } = await e.transport.subscribe({
          params: ["logs", { address: t, topics: y }],
          onData(N) {
            var I;
            if (!b)
              return;
            const A = N.result;
            try {
              const { eventName: C, args: B } = wt({
                abi: w,
                data: A.data,
                topics: A.topics,
                strict: h
              }), Q = X(A, {
                args: B,
                eventName: C
              });
              i([Q]);
            } catch (C) {
              let B, Q;
              if (C instanceof ye || C instanceof Se) {
                if (u)
                  return;
                B = C.abiItem.name, Q = (I = C.abiItem.inputs) == null ? void 0 : I.some(($) => !("name" in $ && $.name));
              }
              const be = X(A, {
                args: Q ? [] : {},
                eventName: B
              });
              i([be]);
            }
          },
          onError(N) {
            o == null || o(N);
          }
        });
        g = M, b || g();
      } catch (w) {
        o == null || o(w);
      }
    })(), g;
  })();
}
function Ql(e, { batch: t = !0, onError: n, onTransactions: r, poll: s, pollingInterval: a = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket") ? (() => {
    const l = H([
      "watchPendingTransactions",
      e.uid,
      t,
      a
    ]);
    return Be(l, { onTransactions: r, onError: n }, (u) => {
      let d;
      const h = Mt(async () => {
        var f;
        try {
          if (!d)
            try {
              d = await E(e, Ks, "createPendingTransactionFilter")({});
              return;
            } catch (b) {
              throw h(), b;
            }
          const p = await E(e, Kt, "getFilterChanges")({ filter: d });
          if (p.length === 0)
            return;
          if (t)
            u.onTransactions(p);
          else
            for (const b of p)
              u.onTransactions([b]);
        } catch (p) {
          (f = u.onError) == null || f.call(u, p);
        }
      }, {
        emitOnBegin: !0,
        interval: a
      });
      return async () => {
        d && await E(e, Xt, "uninstallFilter")({ filter: d }), h();
      };
    });
  })() : (() => {
    let l = !0, u = () => l = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await e.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(h) {
            if (!l)
              return;
            const f = h.result;
            r([f]);
          },
          onError(h) {
            n == null || n(h);
          }
        });
        u = d, l || u();
      } catch (d) {
        n == null || n(d);
      }
    })(), u;
  })();
}
function Fl(e) {
  return {
    call: (t) => Jt(e, t),
    createBlockFilter: () => tl(e),
    createContractEventFilter: (t) => ks(e, t),
    createEventFilter: (t) => Js(e, t),
    createPendingTransactionFilter: () => Ks(e),
    estimateContractGas: (t) => lc(e, t),
    estimateGas: (t) => nr(e, t),
    getBalance: (t) => nl(e, t),
    getBlock: (t) => ue(e, t),
    getBlockNumber: (t) => xt(e, t),
    getBlockTransactionCount: (t) => rl(e, t),
    getBytecode: (t) => sl(e, t),
    getChainId: () => lt(e),
    getContractEvents: (t) => Ls(e, t),
    getEnsAddress: (t) => Qc(e, t),
    getEnsAvatar: (t) => $c(e, t),
    getEnsName: (t) => _c(e, t),
    getEnsResolver: (t) => el(e, t),
    getEnsText: (t) => Vs(e, t),
    getFeeHistory: (t) => ol(e, t),
    estimateFeesPerGas: (t) => cc(e, t),
    getFilterChanges: (t) => Kt(e, t),
    getFilterLogs: (t) => il(e, t),
    getGasPrice: () => tr(e),
    getLogs: (t) => rr(e, t),
    getProof: (t) => Nl(e, t),
    estimateMaxPriorityFeePerGas: (t) => ic(e, t),
    getStorageAt: (t) => Dl(e, t),
    getTransaction: (t) => ur(e, t),
    getTransactionConfirmations: (t) => jl(e, t),
    getTransactionCount: (t) => Ss(e, t),
    getTransactionReceipt: (t) => Tn(e, t),
    multicall: (t) => Tl(e, t),
    prepareTransactionRequest: (t) => Vt(e, t),
    readContract: (t) => de(e, t),
    sendRawTransaction: (t) => ar(e, t),
    simulateContract: (t) => yc(e, t),
    verifyMessage: (t) => Ol(e, t),
    verifyTypedData: (t) => Ll(e, t),
    uninstallFilter: (t) => Xt(e, t),
    waitForTransactionReceipt: (t) => Pl(e, t),
    watchBlocks: (t) => Ul(e, t),
    watchBlockNumber: (t) => aa(e, t),
    watchContractEvent: (t) => Ec(e, t),
    watchEvent: (t) => Bl(e, t),
    watchPendingTransactions: (t) => Ql(e, t)
  };
}
function Rr(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return Qs({
    ...e,
    key: t,
    name: n,
    type: "publicClient"
  }).extend(Fl);
}
function Gl(e, { abi: t, args: n, bytecode: r, ...s }) {
  const a = na({
    abi: t,
    args: n,
    bytecode: r
  });
  return or(e, {
    ...s,
    data: a
  });
}
async function Yl(e) {
  var n;
  return ((n = e.account) == null ? void 0 : n.type) === "local" ? [e.account.address] : (await e.request({ method: "eth_accounts" })).map((r) => Jn(r));
}
async function Rl(e) {
  return await e.request({ method: "wallet_getPermissions" });
}
async function Wl(e) {
  return (await e.request({ method: "eth_requestAccounts" })).map((n) => fe(n));
}
async function Hl(e, t) {
  return e.request({
    method: "wallet_requestPermissions",
    params: [t]
  });
}
async function Zl(e, { account: t = e.account, message: n }) {
  if (!t)
    throw new Le({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const r = q(t);
  if (r.type === "local")
    return r.signMessage({ message: n });
  const s = typeof n == "string" ? Un(n) : n.raw instanceof Uint8Array ? k(n.raw) : n.raw;
  return e.request({
    method: "personal_sign",
    params: [s, r.address]
  });
}
async function Vl(e, t) {
  var l, u, d, h;
  const { account: n = e.account, chain: r = e.chain, ...s } = t;
  if (!n)
    throw new Le({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const a = q(n);
  yt({
    account: a,
    ...t
  });
  const o = await E(e, lt, "getChainId")({});
  r !== null && Bs({
    currentChainId: o,
    chain: r
  });
  const i = (r == null ? void 0 : r.formatters) || ((l = e.chain) == null ? void 0 : l.formatters), c = ((u = i == null ? void 0 : i.transactionRequest) == null ? void 0 : u.format) || ht;
  return a.type === "local" ? a.signTransaction({
    ...s,
    chainId: o
  }, { serializer: (h = (d = e.chain) == null ? void 0 : d.serializers) == null ? void 0 : h.transaction }) : await e.request({
    method: "eth_signTransaction",
    params: [
      {
        ...c(s),
        chainId: D(o),
        from: a.address
      }
    ]
  });
}
async function Jl(e, { account: t = e.account, domain: n, message: r, primaryType: s, types: a }) {
  if (!t)
    throw new Le({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const o = q(t), i = {
    EIP712Domain: ta({ domain: n }),
    ...a
  };
  if (ea({
    domain: n,
    message: r,
    primaryType: s,
    types: i
  }), o.type === "local")
    return o.signTypedData({
      domain: n,
      primaryType: s,
      types: i,
      message: r
    });
  const c = H({ domain: n ?? {}, primaryType: s, types: i, message: r }, (l, u) => ee(u) ? u.toLowerCase() : u);
  return e.request({
    method: "eth_signTypedData_v4",
    params: [o.address, c]
  });
}
async function Kl(e, { id: t }) {
  await e.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: D(t)
      }
    ]
  });
}
async function Xl(e, t) {
  return await e.request({
    method: "wallet_watchAsset",
    params: t
  });
}
function ql(e) {
  return {
    addChain: (t) => Dc(e, t),
    deployContract: (t) => Gl(e, t),
    getAddresses: () => Yl(e),
    getChainId: () => lt(e),
    getPermissions: () => Rl(e),
    prepareTransactionRequest: (t) => Vt(e, t),
    requestAddresses: () => Wl(e),
    requestPermissions: (t) => Hl(e, t),
    sendRawTransaction: (t) => ar(e, t),
    sendTransaction: (t) => or(e, t),
    signMessage: (t) => Zl(e, t),
    signTransaction: (t) => Vl(e, t),
    signTypedData: (t) => Jl(e, t),
    switchChain: (t) => Kl(e, t),
    watchAsset: (t) => Xl(e, t),
    writeContract: (t) => Nc(e, t)
  };
}
function oa(e) {
  const { key: t = "wallet", name: n = "Wallet Client", transport: r } = e;
  return Qs({
    ...e,
    key: t,
    name: n,
    transport: (a) => r({ ...a, retryCount: 0 }),
    type: "walletClient"
  }).extend(ql);
}
function $l(e, t = {}) {
  const { key: n = "webSocket", name: r = "WebSocket JSON-RPC", retryDelay: s } = t;
  return ({ chain: a, retryCount: o, timeout: i }) => {
    var d;
    const c = t.retryCount ?? o, l = i ?? t.timeout ?? 1e4, u = e || ((d = a == null ? void 0 : a.rpcUrls.default.webSocket) == null ? void 0 : d[0]);
    if (!u)
      throw new Ys();
    return qt({
      key: n,
      name: r,
      async request({ method: h, params: f }) {
        const p = { method: h, params: f }, b = await an(u), { error: g, result: w } = await Ce.webSocketAsync(b, {
          body: p,
          timeout: l
        });
        if (g)
          throw new qn({
            body: p,
            error: g,
            url: u
          });
        return w;
      },
      retryCount: c,
      retryDelay: s,
      timeout: l,
      type: "webSocket"
    }, {
      getSocket() {
        return an(u);
      },
      async subscribe({ params: h, onData: f, onError: p }) {
        const b = await an(u), { result: g } = await new Promise((w, y) => Ce.webSocket(b, {
          body: {
            method: "eth_subscribe",
            params: h
          },
          onResponse(M) {
            if (M.error) {
              y(M.error), p == null || p(M.error);
              return;
            }
            if (typeof M.id == "number") {
              w(M);
              return;
            }
            M.method === "eth_subscription" && f(M.params);
          }
        }));
        return {
          subscriptionId: g,
          async unsubscribe() {
            return new Promise((w) => Ce.webSocket(b, {
              body: {
                method: "eth_unsubscribe",
                params: [g]
              },
              onResponse: w
            }));
          }
        };
      }
    });
  };
}
function Qe(e, t = "hex") {
  const n = ia(e), r = fl(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? Ne(r.bytes) : r.bytes;
}
function ia(e) {
  return Array.isArray(e) ? _l(e.map((t) => ia(t))) : eu(e);
}
function _l(e) {
  const t = e.reduce((s, a) => s + a.length, 0), n = ca(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(s) {
      t <= 55 ? s.pushByte(192 + t) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
      for (const { encode: a } of e)
        a(s);
    }
  };
}
function eu(e) {
  const t = typeof e == "string" ? dt(e) : e, n = ca(t.length);
  return {
    length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
    encode(s) {
      t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t));
    }
  };
}
function ca(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new x("Length is too large.");
}
const tu = (e, t) => ds(e) ? ru(e, t) : us(e) ? nu(e, t) : ra(e, t), dr = {
  transaction: tu
};
function nu(e, t) {
  su(e);
  const { chainId: n, gas: r, nonce: s, to: a, value: o, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: l, feeCurrency: u, gatewayFeeRecipient: d, gatewayFee: h, data: f } = e, p = [
    k(n),
    s ? k(s) : "0x",
    c ? k(c) : "0x",
    i ? k(i) : "0x",
    r ? k(r) : "0x",
    u ?? "0x",
    d ?? "0x",
    h ? k(h) : "0x",
    a ?? "0x",
    o ? k(o) : "0x",
    f ?? "0x",
    _t(l)
  ];
  return t && p.push(
    t.v === 27n ? "0x" : k(1),
    // yParity
    Y(t.r),
    Y(t.s)
  ), he([
    "0x7c",
    Qe(p)
  ]);
}
function ru(e, t) {
  au(e);
  const { chainId: n, gas: r, nonce: s, to: a, value: o, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: l, feeCurrency: u, data: d } = e, h = [
    k(n),
    s ? k(s) : "0x",
    c ? k(c) : "0x",
    i ? k(i) : "0x",
    r ? k(r) : "0x",
    a ?? "0x",
    o ? k(o) : "0x",
    d ?? "0x",
    _t(l),
    u
  ];
  return t && h.push(
    t.v === 27n ? "0x" : k(1),
    // yParity
    Y(t.r),
    Y(t.s)
  ), he([
    "0x7b",
    Qe(h)
  ]);
}
const la = 2n ** 256n - 1n;
function su(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: a, feeCurrency: o, gatewayFee: i, gatewayFeeRecipient: c } = e;
  if (t <= 0)
    throw new ze({ chainId: t });
  if (a && !L(a))
    throw new W({ address: a });
  if (r)
    throw new x("`gasPrice` is not a valid CIP-42 Transaction attribute.");
  if (F(s) && s > la)
    throw new re({ maxFeePerGas: s });
  if (F(n) && F(s) && n > s)
    throw new ge({ maxFeePerGas: s, maxPriorityFeePerGas: n });
  if (F(i) && ie(c) || F(c) && ie(i))
    throw new x("`gatewayFee` and `gatewayFeeRecipient` must be provided together.");
  if (F(o) && !L(o))
    throw new x("`feeCurrency` MUST be a token address for CIP-42 transactions.");
  if (F(c) && !L(c))
    throw new W(c);
  if (ie(o) && ie(c))
    throw new x("Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.");
}
function au(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: a, feeCurrency: o } = e;
  if (t <= 0)
    throw new ze({ chainId: t });
  if (a && !L(a))
    throw new W({ address: a });
  if (r)
    throw new x("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (F(s) && s > la)
    throw new re({ maxFeePerGas: s });
  if (F(n) && F(s) && n > s)
    throw new ge({ maxFeePerGas: s, maxPriorityFeePerGas: n });
  if (F(o) && !L(o))
    throw new x("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  if (ie(o))
    throw new x("`feeCurrency` must be provided for CIP-64 transactions.");
}
const ou = /* @__PURE__ */ m({
  id: 42220,
  name: "Celo",
  network: "celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] },
    infura: {
      http: ["https://celo-mainnet.infura.io/v3"]
    },
    public: {
      http: ["https://forno.celo.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/mainnet"
    },
    etherscan: { name: "CeloScan", url: "https://celoscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599
    }
  },
  testnet: !1
}, {
  formatters: Gn,
  serializers: dr
}), iu = /* @__PURE__ */ m({
  id: 44787,
  name: "Alfajores",
  network: "celo-alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    },
    infura: {
      http: ["https://celo-alfajores.infura.io/v3"]
    },
    public: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores"
    },
    etherscan: { name: "CeloScan", url: "https://alfajores.celoscan.io/" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    }
  },
  testnet: !0
}, {
  formatters: Gn,
  serializers: dr
}), cu = /* @__PURE__ */ m({
  id: 88888,
  name: "Chiliz Chain",
  network: "chiliz-chain",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"]
    },
    public: {
      http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "https://scan.chiliz.com"
    }
  }
}), lu = /* @__PURE__ */ m({
  id: 17323,
  name: "Cannoli",
  network: "celo-cannoli",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "C-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://forno.cannoli.celo-testnet.org"]
    },
    public: {
      http: ["https://forno.cannoli.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/cannoli"
    }
  },
  contracts: {
    multicall3: {
      address: "0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",
      blockCreated: 87429
    }
  },
  testnet: !0
}, {
  formatters: Gn,
  serializers: dr
}), uu = /* @__PURE__ */ m({
  id: 61,
  name: "Ethereum Classic",
  network: "classic",
  nativeCurrency: {
    decimals: 18,
    name: "ETC",
    symbol: "ETC"
  },
  rpcUrls: {
    default: { http: ["https://etc.rivet.link"] },
    public: { http: ["https://etc.rivet.link"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.com/etc/mainnet"
    }
  }
}), du = /* @__PURE__ */ m({
  id: 1030,
  name: "Conflux eSpace",
  network: "cfx-espace",
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.org"],
      webSocket: ["wss://evm.confluxrpc.org/ws"]
    },
    public: {
      http: ["https://evm.confluxrpc.org"],
      webSocket: ["wss://evm.confluxrpc.org/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evm.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 68602935
    }
  }
}), pu = /* @__PURE__ */ m({
  id: 71,
  name: "Conflux eSpace Testnet",
  network: "cfx-espace-testnet",
  testnet: !0,
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evmtestnet.confluxrpc.org"],
      webSocket: ["wss://evmtestnet.confluxrpc.org/ws"]
    },
    public: {
      http: ["https://evmtestnet.confluxrpc.org"],
      webSocket: ["wss://evmtestnet.confluxrpc.org/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evmtestnet.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 117499050
    }
  }
}), hu = /* @__PURE__ */ m({
  id: 1116,
  name: "Core Dao",
  network: "coreDao",
  nativeCurrency: {
    decimals: 18,
    name: "Core",
    symbol: "CORE"
  },
  rpcUrls: {
    public: { http: ["https://rpc.coredao.org"] },
    default: { http: ["https://rpc.coredao.org"] }
  },
  blockExplorers: {
    default: { name: "CoreDao", url: "https://scan.coredao.org" },
    etherscan: { name: "CoreDao", url: "https://scan.coredao.org" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 11907934
    }
  },
  testnet: !1
}), mu = /* @__PURE__ */ m({
  id: 25,
  name: "Cronos Mainnet",
  network: "cronos",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.cronos.org"] },
    public: { http: ["https://evm.cronos.org"] }
  },
  blockExplorers: {
    default: { name: "Cronoscan", url: "https://cronoscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1963112
    }
  }
}), bu = /* @__PURE__ */ m({
  id: 338,
  name: "Cronos Testnet",
  network: "cronos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CRO",
    symbol: "tCRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-t3.cronos.org"] },
    public: { http: ["https://evm-t3.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://cronos.org/explorer/testnet3"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 10191251
    }
  },
  testnet: !0
}), fu = /* @__PURE__ */ m({
  id: 3737,
  network: "crossbell",
  name: "Crossbell",
  nativeCurrency: {
    decimals: 18,
    name: "CSB",
    symbol: "CSB"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.crossbell.io"]
    },
    public: {
      http: ["https://rpc.crossbell.io"]
    }
  },
  blockExplorers: {
    default: { name: "CrossScan", url: "https://scan.crossbell.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 38246031
    }
  }
}), gu = /* @__PURE__ */ m({
  id: 53935,
  name: "DFK Chain",
  network: "dfk",
  nativeCurrency: {
    decimals: 18,
    name: "Jewel",
    symbol: "JEWEL"
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    },
    public: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    },
    default: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    }
  }
}), yu = /* @__PURE__ */ m({
  id: 2e3,
  name: "Dogechain",
  network: "dogechain",
  nativeCurrency: {
    decimals: 18,
    name: "Dogechain",
    symbol: "DC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.dogechain.dog"] },
    public: { http: ["https://rpc.dogechain.dog"] }
  },
  blockExplorers: {
    etherscan: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog"
    },
    default: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog"
    }
  }
}), wu = /* @__PURE__ */ m({
  id: 2021,
  name: "Edgeware EdgeEVM Mainnet",
  network: "edgeware",
  nativeCurrency: {
    decimals: 18,
    name: "Edgeware",
    symbol: "EDG"
  },
  rpcUrls: {
    default: { http: ["https://edgeware-evm.jelliedowl.net"] },
    public: { http: ["https://edgeware-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    etherscan: { name: "Edgscan by Bharathcoorg", url: "https://edgscan.live" },
    default: { name: "Edgscan by Bharathcoorg", url: "https://edgscan.live" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18117872
    }
  }
}), Mu = /* @__PURE__ */ m({
  id: 2022,
  name: "Beresheet BereEVM Testnet",
  network: "edgewareTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet EDG",
    symbol: "tEDG"
  },
  rpcUrls: {
    default: { http: ["https://beresheet-evm.jelliedowl.net"] },
    public: { http: ["https://beresheet-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live"
    },
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live"
    }
  }
}), xu = /* @__PURE__ */ m({
  id: 17777,
  name: "EOS EVM",
  network: "eos",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.evm.eosnetwork.com"] },
    public: { http: ["https://api.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    etherscan: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com"
    },
    default: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7943933
    }
  }
}), Iu = /* @__PURE__ */ m({
  id: 15557,
  name: "EOS EVM Testnet",
  network: "eos",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.testnet.evm.eosnetwork.com"] },
    public: { http: ["https://api.testnet.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    etherscan: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com"
    },
    default: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9067940
    }
  },
  testnet: !0
}), Au = /* @__PURE__ */ m({
  id: 9001,
  name: "Evmos",
  network: "evmos",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.org:8545"] },
    public: { http: ["https://eth.bd.evmos.org:8545"] }
  },
  blockExplorers: {
    default: { name: "Evmos Block Explorer", url: "https://escan.live" }
  }
}), ku = /* @__PURE__ */ m({
  id: 9e3,
  name: "Evmos Testnet",
  network: "evmos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.dev:8545"] },
    public: { http: ["https://eth.bd.evmos.dev:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Testnet Block Explorer",
      url: "https://evm.evmos.dev/"
    }
  }
}), Eu = /* @__PURE__ */ m({
  id: 1994,
  name: "Ekta",
  network: "ekta",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    public: { http: ["https://main.ekta.io"] },
    default: { http: ["https://main.ekta.io"] }
  },
  blockExplorers: {
    default: { name: "Ektascan", url: "https://ektascan.io" }
  }
}), Cu = /* @__PURE__ */ m({
  id: 1004,
  name: "Ekta Testnet",
  network: "ekta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    public: { http: ["https://test.ekta.io:8545"] },
    default: { http: ["https://test.ekta.io:8545"] }
  },
  blockExplorers: {
    default: { name: "Test Ektascan", url: "https://test.ektascan.io" }
  },
  testnet: !0
}), Nu = /* @__PURE__ */ m({
  id: 250,
  name: "Fantom",
  network: "fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/fantom"] },
    public: { http: ["https://rpc.ankr.com/fantom"] }
  },
  blockExplorers: {
    etherscan: { name: "FTMScan", url: "https://ftmscan.com" },
    default: { name: "FTMScan", url: "https://ftmscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987
    }
  }
}), Du = /* @__PURE__ */ m({
  id: 64240,
  name: "Fantom Sonic Open Testnet",
  network: "fantom-sonic-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpcapi.sonic.fantom.network"] },
    public: { http: ["https://rpcapi.sonic.fantom.network"] }
  },
  blockExplorers: {
    default: {
      name: "Fantom Sonic Open Testnet Explorer",
      url: "https://public-sonic.fantom.network"
    }
  },
  testnet: !0
}), ju = /* @__PURE__ */ m({
  id: 4002,
  name: "Fantom Testnet",
  network: "fantom-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.fantom.network"] },
    public: { http: ["https://rpc.testnet.fantom.network"] }
  },
  blockExplorers: {
    etherscan: { name: "FTMScan", url: "https://testnet.ftmscan.com" },
    default: { name: "FTMScan", url: "https://testnet.ftmscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688
    }
  }
}), Tu = /* @__PURE__ */ m({
  id: 12306,
  name: "Fibo Chain",
  network: "fibochain",
  nativeCurrency: {
    decimals: 18,
    name: "fibo",
    symbol: "FIBO"
  },
  rpcUrls: {
    default: { http: ["https://network.hzroc.art"] },
    public: { http: ["https://network.hzroc.art"] }
  },
  blockExplorers: {
    default: { name: "FiboScan", url: "https://scan.fibochain.org" }
  }
}), vu = /* @__PURE__ */ m({
  id: 314,
  name: "Filecoin Mainnet",
  network: "filecoin-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "filecoin",
    symbol: "FIL"
  },
  rpcUrls: {
    default: { http: ["https://api.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filfox", url: "https://filfox.info/en" },
    filscan: { name: "Filscan", url: "https://filscan.io" },
    filscout: { name: "Filscout", url: "https://filscout.io/en" },
    glif: { name: "Glif", url: "https://explorer.glif.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3328594
    }
  }
}), zu = /* @__PURE__ */ m({
  id: 314159,
  name: "Filecoin Calibration",
  network: "filecoin-calibration",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.calibration.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filscan", url: "https://calibration.filscan.io" }
  }
}), Su = /* @__PURE__ */ m({
  id: 3141,
  name: "Filecoin Hyperspace",
  network: "filecoin-hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filfox", url: "https://hyperspace.filfox.info/en" },
    filscan: { name: "Filscan", url: "https://hyperspace.filscan.io" }
  }
}), Ou = /* @__PURE__ */ m({
  id: 14,
  name: "Flare Mainnet",
  network: "flare-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "flare",
    symbol: "FLR"
  },
  rpcUrls: {
    default: { http: ["https://flare-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://flare-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://flare-explorer.flare.network"
    }
  }
}), Lu = /* @__PURE__ */ m({
  id: 114,
  name: "Coston2",
  network: "coston2",
  nativeCurrency: {
    decimals: 18,
    name: "coston2flare",
    symbol: "C2FLR"
  },
  rpcUrls: {
    default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://coston2-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2-explorer.flare.network"
    }
  },
  testnet: !0
}), Pu = /* @__PURE__ */ m({
  id: 31337,
  name: "Foundry",
  network: "foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    },
    public: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
}), Uu = /* @__PURE__ */ m({
  id: 122,
  name: "Fuse",
  network: "fuse",
  nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fuse.io"] },
    public: { http: ["https://rpc.fuse.io"] }
  },
  blockExplorers: {
    default: { name: "Fuse Explorer", url: "https://explorer.fuse.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 16146628
    }
  }
}), Bu = /* @__PURE__ */ m({
  id: 123,
  name: "Fuse Sparknet",
  network: "fuse",
  nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fusespark.io"] },
    public: { http: ["https://rpc.fusespark.io"] }
  },
  blockExplorers: {
    default: {
      name: "Sparkent Explorer",
      url: "https://explorer.fusespark.io"
    }
  }
}), Qu = /* @__PURE__ */ m({
  id: 4689,
  name: "IoTeX",
  network: "iotex",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    },
    public: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: { name: "IoTeXScan", url: "https://iotexscan.io" }
  }
}), Fu = /* @__PURE__ */ m({
  id: 4690,
  name: "IoTeX Testnet",
  network: "iotex-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    },
    public: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: { name: "IoTeXScan", url: "https://testnet.iotexscan.io" }
  }
}), Gu = /* @__PURE__ */ m({
  id: 8899,
  name: "JIBCHAIN L1",
  network: "jbc",
  nativeCurrency: { name: "JBC", symbol: "JBC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-l1.jibchain.net"]
    },
    public: {
      http: ["https://rpc-l1.jibchain.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp-l1.jibchain.net"
    }
  },
  contracts: {
    multicall3: {
      address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
      blockCreated: 2299048
    }
  },
  testnet: !1
}), Yu = /* @__PURE__ */ m({
  id: 686,
  name: "Karura",
  network: "karura",
  nativeCurrency: {
    name: "Karura",
    symbol: "KAR",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-karura.aca-api.network"],
      webSocket: ["wss://eth-rpc-karura.aca-api.network"]
    },
    default: {
      http: ["https://eth-rpc-karura.aca-api.network"],
      webSocket: ["wss://eth-rpc-karura.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Karura Blockscout",
      url: "https://blockscout.karura.network"
    }
  },
  testnet: !1
}), Ru = /* @__PURE__ */ m({
  id: 1663,
  name: "Horizen Gobi Testnet",
  network: "gobi",
  nativeCurrency: {
    decimals: 18,
    name: "Test ZEN",
    symbol: "tZEN"
  },
  rpcUrls: {
    public: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] },
    default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] }
  },
  blockExplorers: {
    default: { name: "Gobi Explorer", url: "https://gobi-explorer.horizen.io" }
  },
  contracts: {},
  testnet: !0
}), ua = /* @__PURE__ */ m({
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0x56522D00C410a43BFfDF00a9A569489297385790",
      blockCreated: 8765204
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: !0
}), Wu = /* @__PURE__ */ m({
  id: 100,
  name: "Gnosis",
  network: "gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    },
    public: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Gnosisscan",
      url: "https://gnosisscan.io"
    },
    default: {
      name: "Gnosis Chain Explorer",
      url: "https://blockscout.com/xdai/mainnet"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 21022491
    }
  }
}), Hu = /* @__PURE__ */ m({
  id: 10200,
  name: "Gnosis Chiado",
  network: "chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    },
    public: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4967313
    }
  },
  testnet: !0
}), Zu = /* @__PURE__ */ m({
  id: 31337,
  name: "Hardhat",
  network: "hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] }
  }
}), Vu = /* @__PURE__ */ m({
  id: 16666e5,
  name: "Harmony One",
  network: "harmony",
  nativeCurrency: {
    name: "Harmony",
    symbol: "ONE",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://rpc.ankr.com/harmony"] },
    default: { http: ["https://rpc.ankr.com/harmony"] }
  },
  blockExplorers: {
    default: { name: "Harmony Explorer", url: "https://explorer.harmony.one" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 24185753
    }
  }
}), Ju = /* @__PURE__ */ m({
  id: 11235,
  name: "HAQQ Mainnet",
  network: "haqq-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.haqq.network"]
    },
    public: {
      http: ["https://rpc.eth.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.haqq.network"
    }
  }
}), Ku = /* @__PURE__ */ m({
  id: 54211,
  name: "HAQQ Testedge 2",
  network: "haqq-testedge-2",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLMT"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    },
    public: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.testedge2.haqq.network"
    }
  }
}), Xu = /* @__PURE__ */ m({
  id: 17e3,
  network: "holesky",
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky.publicnode.com"]
    },
    public: {
      http: ["https://ethereum-holesky.publicnode.com"]
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 77
    }
  },
  testnet: !0
}), qu = /* @__PURE__ */ m({
  id: 2222,
  name: "Kava EVM",
  network: "kava-mainnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://evm.kava.io"] },
    default: { http: ["https://evm.kava.io"] }
  },
  blockExplorers: {
    default: { name: "Kava EVM Explorer", url: "https://kavascan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3661165
    }
  },
  testnet: !1
}), $u = /* @__PURE__ */ m({
  id: 2221,
  name: "Kava EVM Testnet",
  network: "kava-testnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://evm.testnet.kava.io"] },
    default: { http: ["https://evm.testnet.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Testnet Explorer",
      url: "https://testnet.kavascan.com/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
      blockCreated: 7242179
    }
  },
  testnet: !0
}), _u = /* @__PURE__ */ m({
  id: 8217,
  name: "Klaytn",
  network: "klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-cypress.klaytn.net"] },
    public: { http: ["https://public-en-cypress.klaytn.net"] }
  },
  blockExplorers: {
    etherscan: { name: "KlaytnScope", url: "https://scope.klaytn.com" },
    default: { name: "KlaytnScope", url: "https://scope.klaytn.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 96002415
    }
  }
}), ed = /* @__PURE__ */ m({
  id: 1001,
  name: "Klaytn Baobab Testnet",
  network: "klaytn-baobab",
  nativeCurrency: {
    decimals: 18,
    name: "Baobab Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-baobab.klaytn.net"] },
    public: { http: ["https://public-en-baobab.klaytn.net"] }
  },
  blockExplorers: {
    etherscan: { name: "KlaytnScope", url: "https://baobab.klaytnscope.com" },
    default: { name: "KlaytnScope", url: "https://baobab.klaytnscope.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 123390593
    }
  },
  testnet: !0
}), td = /* @__PURE__ */ m({
  id: 255,
  network: "kroma",
  name: "Kroma",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.kroma.network"]
    },
    public: {
      http: ["https://api.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Explorer",
      url: "https://blockscout.kroma.network"
    }
  },
  testnet: !1
}), nd = /* @__PURE__ */ m({
  id: 2358,
  network: "kroma-sepolia",
  name: "Kroma Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.sepolia.kroma.network"]
    },
    public: {
      http: ["https://api.sepolia.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Sepolia Explorer",
      url: "https://blockscout.sepolia.kroma.network"
    }
  },
  testnet: !0
}), rd = /* @__PURE__ */ m({
  id: 59144,
  name: "Linea Mainnet",
  network: "linea-mainnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    infura: {
      http: ["https://linea-mainnet.infura.io/v3"],
      webSocket: ["wss://linea-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    },
    public: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://lineascan.build"
    },
    etherscan: {
      name: "Etherscan",
      url: "https://lineascan.build"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.linea.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 42
    }
  },
  testnet: !1
}), sd = /* @__PURE__ */ m({
  id: 59140,
  name: "Linea Goerli Testnet",
  network: "linea-testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    infura: {
      http: ["https://linea-goerli.infura.io/v3"],
      webSocket: ["wss://linea-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    },
    public: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build"
    },
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.goerli.linea.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623
    }
  },
  testnet: !0
}), ad = /* @__PURE__ */ m({
  id: 1337,
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] }
  }
}), od = /* @__PURE__ */ m({
  id: 42,
  network: "lukso",
  name: "LUKSO",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    },
    public: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "LUKSO Mainnet Explorer",
      url: "https://explorer.execution.mainnet.lukso.network"
    }
  }
}), da = /* @__PURE__ */ m({
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://cloudflare-eth.com"]
    },
    public: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
      blockCreated: 16966585
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), id = /* @__PURE__ */ m({
  id: 595,
  name: "Mandala TC9",
  network: "mandala",
  nativeCurrency: {
    name: "Mandala",
    symbol: "mACA",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-tc9.aca-staging.network"],
      webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
    },
    default: {
      http: ["https://eth-rpc-tc9.aca-staging.network"],
      webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mandala Blockscout",
      url: "https://blockscout.mandala.aca-staging.network"
    }
  },
  testnet: !0
}), cd = /* @__PURE__ */ m({
  id: 169,
  name: "Manta Pacific Mainnet",
  network: "manta",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://pacific-rpc.manta.network/http"] },
    public: { http: ["https://pacific-rpc.manta.network/http"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network"
    },
    default: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 332890
    }
  }
}), ld = /* @__PURE__ */ m({
  id: 3441005,
  name: "Manta Pacific Testnet",
  network: "manta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
    public: { http: ["https://manta-testnet.calderachain.xyz/http"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network"
    },
    default: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
      blockCreated: 419915
    }
  },
  testnet: !0
}), ud = /* @__PURE__ */ m({
  id: 5e3,
  name: "Mantle",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.mantle.xyz"] },
    public: { http: ["https://rpc.mantle.xyz"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz"
    },
    default: {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 304717
    }
  }
}), dd = /* @__PURE__ */ m({
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.mantle.xyz"] },
    public: { http: ["https://rpc.testnet.mantle.xyz"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz"
    },
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz"
    }
  },
  testnet: !0
}), pd = /* @__PURE__ */ m({
  id: 82,
  name: "Meter",
  network: "meter",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpc.meter.io"] },
    public: { http: ["https://rpc.meter.io"] }
  },
  blockExplorers: {
    default: { name: "MeterScan", url: "https://scan.meter.io" }
  }
}), hd = /* @__PURE__ */ m({
  id: 83,
  name: "Meter Testnet",
  network: "meter-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpctest.meter.io"] },
    public: { http: ["https://rpctest.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterTestnetScan",
      url: "https://scan-warringstakes.meter.io"
    }
  }
}), md = /* @__PURE__ */ m({
  id: 1088,
  name: "Metis",
  network: "andromeda",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://andromeda.metis.io/?owner=1088"] },
    public: { http: ["https://andromeda.metis.io/?owner=1088"] }
  },
  blockExplorers: {
    default: {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552
    }
  }
}), bd = /* @__PURE__ */ m({
  id: 599,
  name: "Metis Goerli",
  network: "metis-goerli",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Goerli",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://goerli.gateway.metisdevops.link"] },
    public: { http: ["https://goerli.gateway.metisdevops.link"] }
  },
  blockExplorers: {
    default: {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1006207
    }
  }
}), fd = /* @__PURE__ */ m({
  id: 7518,
  network: "MEVerse",
  name: "MEVerse Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversemainnet.io"]
    },
    public: {
      http: ["https://rpc.meversemainnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://www.meversescan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 86881340
    }
  }
}), gd = /* @__PURE__ */ m({
  id: 4759,
  network: "MEVerse Testnet",
  name: "MEVerse Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversetestnet.io"]
    },
    public: {
      http: ["https://rpc.meversetestnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.meversescan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 64371115
    }
  },
  testnet: !0
}), yd = /* @__PURE__ */ m({
  id: 919,
  name: "Mode Testnet",
  network: "mode-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"]
    },
    public: {
      http: ["https://sepolia.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
      blockCreated: 3019007
    }
  },
  testnet: !0
}), wd = /* @__PURE__ */ m({
  id: 1287,
  name: "Moonbase Alpha",
  network: "moonbase-alpha",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    },
    public: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1850686
    }
  },
  testnet: !0
}), Md = /* @__PURE__ */ m({
  id: 1284,
  name: "Moonbeam",
  network: "moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "GLMR",
    symbol: "GLMR"
  },
  rpcUrls: {
    public: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    },
    default: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 609002
    }
  },
  testnet: !1
}), xd = /* @__PURE__ */ m({
  id: 1281,
  name: "Moonbeam Development Node",
  network: "development",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    },
    public: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    }
  }
}), Id = /* @__PURE__ */ m({
  id: 1285,
  name: "Moonriver",
  network: "moonriver",
  nativeCurrency: {
    decimals: 18,
    name: "MOVR",
    symbol: "MOVR"
  },
  rpcUrls: {
    public: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    },
    default: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1597904
    }
  },
  testnet: !1
}), Ad = /* @__PURE__ */ m({
  id: 245022926,
  network: "neonDevnet",
  name: "Neon EVM DevNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://devnet.neonevm.org"]
    },
    public: {
      http: ["https://devnet.neonevm.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://devnet.neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 205206112
    }
  },
  testnet: !0
}), kd = /* @__PURE__ */ m({
  id: 245022934,
  network: "neonMainnet",
  name: "Neon EVM MainNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    },
    public: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://neonscan.org"
    }
  },
  contracts: {},
  testnet: !1
}), Ed = /* @__PURE__ */ m({
  id: 4242,
  name: "Nexi",
  network: "nexi",
  nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.chain.nexi.technology"]
    },
    public: {
      http: ["https://rpc.chain.nexi.technology"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "NexiScan",
      url: "https://www.nexiscan.com"
    },
    default: {
      name: "NexiScan",
      url: "https://www.nexiscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
      blockCreated: 25770160
    }
  }
}), Cd = /* @__PURE__ */ m({
  id: 240,
  name: "Nexilix Smart Chain",
  network: "nexilix",
  nativeCurrency: {
    decimals: 18,
    name: "Nexilix",
    symbol: "NEXILIX"
  },
  rpcUrls: {
    default: { http: ["https://rpcurl.pos.nexilix.com"] },
    public: { http: ["https://rpcurl.pos.nexilix.com"] }
  },
  blockExplorers: {
    etherscan: { name: "NexilixScan", url: "https://scan.nexilix.com" },
    default: { name: "NexilixScan", url: "https://scan.nexilix.com" }
  },
  contracts: {
    multicall3: {
      address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
      blockCreated: 74448
    }
  }
}), Nd = /* @__PURE__ */ m({
  id: 248,
  name: "Oasys",
  network: "oasys",
  nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"]
    },
    public: {
      http: ["https://rpc.mainnet.oasys.games"]
    }
  },
  blockExplorers: {
    default: {
      name: "OasysScan",
      url: "https://scan.oasys.games"
    }
  }
}), Dd = /* @__PURE__ */ m({
  id: 4090,
  network: "oasis-testnet",
  name: "Oasis Testnet",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc1.oasis.bahamutchain.com"] },
    public: { http: ["https://rpc1.oasis.bahamutchain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://oasis.ftnscan.com"
    }
  },
  testnet: !0
}), jd = /* @__PURE__ */ m({
  id: 66,
  name: "OKC",
  network: "okc",
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT"
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] },
    public: { http: ["https://exchainrpc.okex.org"] }
  },
  blockExplorers: {
    default: { name: "oklink", url: "https://www.oklink.com/okc" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 10364792
    }
  }
}), Td = /* @__PURE__ */ m({
  id: 10,
  name: "OP Mainnet",
  network: "optimism",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-mainnet.infura.io/v3"],
      webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.optimism.io"]
    },
    public: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io"
    },
    default: {
      name: "Optimism Explorer",
      url: "https://explorer.optimism.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    }
  }
}, {
  formatters: _
}), vd = /* @__PURE__ */ m({
  id: 420,
  name: "Optimism Goerli",
  network: "optimism-goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-goerli.infura.io/v3"],
      webSocket: ["wss://optimism-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli.optimism.io"]
    },
    public: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461
    }
  },
  testnet: !0
}, {
  formatters: _
}), zd = /* @__PURE__ */ m({
  id: 11155420,
  name: "Optimism Sepolia",
  network: "optimism-sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://opt-sepolia.g.alchemy.com/v2"]
    },
    default: {
      http: ["https://sepolia.optimism.io"]
    },
    public: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    },
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    }
  },
  testnet: !0
}, {
  formatters: _
}), Sd = /* @__PURE__ */ m({
  id: 204,
  name: "opBNB",
  network: "opBNB Mainnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] },
    default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: { name: "opbnbscan", url: "https://mainnet.opbnbscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 512881
    }
  }
}), Od = /* @__PURE__ */ m({
  id: 5611,
  name: "opBNB Testnet",
  network: "opBNB Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    public: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: { name: "opbnbscan", url: "https://testnet.opbnbscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3705108
    }
  },
  testnet: !0
}), Ld = /* @__PURE__ */ m({
  id: 424,
  network: "pgn",
  name: "PGN",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.publicgoods.network"]
    },
    public: {
      http: ["https://rpc.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network"
    },
    blocksout: {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3380209
    }
  }
}, {
  formatters: _
}), Pd = /* @__PURE__ */ m({
  id: 58008,
  network: "pgn-testnet",
  name: "PGN ",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.publicgoods.network"]
    },
    public: {
      http: ["https://sepolia.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network"
    },
    blocksout: {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3754925
    }
  },
  testnet: !0
}, {
  formatters: _
}), Ud = /* @__PURE__ */ m({
  id: 242,
  name: "Plinga",
  network: "plinga",
  nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    },
    public: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Plgscan",
      url: "https://www.plgscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0989576160f2e7092908BB9479631b901060b6e4",
      blockCreated: 204489
    }
  }
}), Bd = /* @__PURE__ */ m({
  id: 137,
  name: "Polygon",
  network: "matic",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mainnet.infura.io/v3"],
      webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://polygon-rpc.com"]
    },
    public: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
}), Qd = /* @__PURE__ */ m({
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    },
    public: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: !0
}), Fd = /* @__PURE__ */ m({
  id: 1442,
  name: "Polygon zkEVM Testnet",
  network: "polygon-zkevm-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"]
    },
    public: {
      http: ["https://rpc.public.zkevm-test.net"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.public.zkevm-test.net"
    },
    default: {
      name: "PolygonScan",
      url: "https://testnet-zkevm.polygonscan.com"
    }
  },
  testnet: !0,
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 525686
    }
  }
}), Gd = /* @__PURE__ */ m({
  id: 1101,
  name: "Polygon zkEVM",
  network: "polygon-zkevm",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"]
    },
    public: {
      http: ["https://zkevm-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 57746
    }
  }
}), Yd = /* @__PURE__ */ m({
  id: 369,
  network: "pulsechain",
  name: "PulseChain",
  nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
  testnet: !1,
  rpcUrls: {
    default: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    },
    public: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.pulsechain.com"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), Rd = /* @__PURE__ */ m({
  id: 943,
  network: "pulsechainV4",
  name: "PulseChain V4",
  testnet: !0,
  nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    },
    public: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.v4.testnet.pulsechain.com"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
}), Wd = /* @__PURE__ */ m({
  id: 35441,
  name: "Q Mainnet",
  network: "q-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.q.org"] },
    public: { http: ["https://rpc.q.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Mainnet Explorer",
      url: "https://explorer.q.org"
    }
  }
}), Hd = /* @__PURE__ */ m({
  id: 35443,
  name: "Q Testnet",
  network: "q-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.qtestnet.org"] },
    public: { http: ["https://rpc.qtestnet.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Testnet Explorer",
      url: "https://explorer.qtestnet.org"
    }
  },
  testnet: !0
}), Zd = /* @__PURE__ */ m({
  id: 570,
  name: "Rollux Mainnet",
  network: "rollux",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.rollux.com"],
      webSocket: ["wss://rpc.rollux.com/wss"]
    },
    public: { http: ["https://rollux.public-rpc.com"] }
  },
  blockExplorers: {
    default: { name: "RolluxExplorer", url: "https://explorer.rollux.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 119222
    }
  }
}), Vd = /* @__PURE__ */ m({
  id: 57e3,
  name: "Rollux Testnet",
  network: "rollux-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-tanenbaum.rollux.com/"],
      webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"]
    },
    public: { http: ["https://rpc-tanenbaum.rollux.com/"] }
  },
  blockExplorers: {
    default: {
      name: "RolluxTestnetExplorer",
      url: "https://rollux.tanenbaum.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1813675
    }
  }
}), Jd = /* @__PURE__ */ m({
  id: 2020,
  name: "Ronin",
  network: "ronin",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.roninchain.com/rpc"]
    },
    public: {
      http: ["https://api.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: { name: "Ronin Explorer", url: "https://app.roninchain.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 26023535
    }
  }
}), Kd = /* @__PURE__ */ m({
  id: 30,
  name: "Rootstock Mainnet",
  network: "rootstock",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "RBTC"
  },
  rpcUrls: {
    public: { http: ["https://public-node.rsk.co"] },
    default: { http: ["https://public-node.rsk.co"] }
  },
  blockExplorers: {
    blockscout: { name: "Blockscout", url: "https://rootstock.blockscout.com" },
    default: { name: "RSK Explorer", url: "https://explorer.rsk.co" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4249540
    }
  }
}), Xd = /* @__PURE__ */ m({
  id: 2021,
  name: "Saigon Testnet",
  network: "saigon",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    },
    public: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Saigon Explorer",
      url: "https://saigon-explorer.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18736871
    }
  },
  testnet: !0
}), qd = /* @__PURE__ */ m({
  id: 23294,
  name: "Oasis Sapphire",
  network: "sapphire",
  nativeCurrency: { name: "Sapphire Rose", symbol: "ROSE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sapphire.oasis.io"],
      webSocket: ["wss://sapphire.oasis.io/ws"]
    },
    public: {
      http: ["https://sapphire.oasis.io"],
      webSocket: ["wss://sapphire.oasis.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Sapphire Explorer",
      url: "https://explorer.sapphire.oasis.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 734531
    }
  }
}), $d = /* @__PURE__ */ m({
  id: 23295,
  name: "Oasis Sapphire Testnet",
  network: "sapphire-testnet",
  nativeCurrency: { name: "Sapphire Test Rose", symbol: "TEST", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.sapphire.oasis.dev"],
      webSocket: ["wss://testnet.sapphire.oasis.dev/ws"]
    },
    public: {
      http: ["https://testnet.sapphire.oasis.dev"],
      webSocket: ["wss://testnet.sapphire.oasis.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Sapphire Testnet Explorer",
      url: "https://testnet.explorer.sapphire.oasis.dev"
    }
  },
  testnet: !0
}), _d = /* @__PURE__ */ m({
  id: 534352,
  name: "Scroll",
  network: "scroll",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    },
    public: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14
    }
  },
  testnet: !1
}), ep = /* @__PURE__ */ m({
  id: 534351,
  name: "Scroll Sepolia",
  network: "scroll-sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io"]
    },
    public: {
      http: ["https://sepolia-rpc.scroll.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.scroll.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473
    }
  },
  testnet: !0
}), tp = /* @__PURE__ */ m({
  id: 534353,
  name: "Scroll Testnet",
  network: "scroll-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
    },
    public: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io"
    }
  },
  testnet: !0
}), np = /* @__PURE__ */ m({
  id: 11155111,
  network: "sepolia",
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://sepolia.infura.io/v3"],
      webSocket: ["wss://sepolia.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.sepolia.org"]
    },
    public: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
      blockCreated: 3914906
    }
  },
  testnet: !0
}), rp = /* @__PURE__ */ m({
  id: 148,
  name: "Shimmer",
  network: "shimmer",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    public: {
      http: ["https://json-rpc.evm.shimmer.network"]
    },
    default: {
      http: ["https://json-rpc.evm.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.shimmer.network"
    }
  }
}), sp = /* @__PURE__ */ m({
  id: 1073,
  name: "Shimmer Testnet",
  network: "shimmer-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    public: {
      http: ["https://json-rpc.evm.testnet.shimmer.network"]
    },
    default: {
      http: ["https://json-rpc.evm.testnet.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.testnet.shimmer.network"
    }
  },
  testnet: !0
}), ap = /* @__PURE__ */ m({
  id: 391845894,
  name: "SKALE | Block Brawlers",
  network: "skale-brawl",
  nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), op = /* @__PURE__ */ m({
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  network: "skale-calypso",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3107626
    }
  }
}), ip = /* @__PURE__ */ m({
  id: 344106930,
  name: "SKALE | Calypso NFT Hub Testnet",
  network: "skale-calypso-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2131424
    }
  },
  testnet: !0
}), cp = /* @__PURE__ */ m({
  id: 1351057110,
  name: "SKALE | Chaos Testnet",
  network: "skale-chaos-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1192202
    }
  },
  testnet: !0
}), lp = /* @__PURE__ */ m({
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  network: "skale-cryptoblades",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), up = /* @__PURE__ */ m({
  id: 2046399126,
  name: "SKALE | Crypto Colosseum",
  network: "skale-crypto-coloseeum",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), dp = /* @__PURE__ */ m({
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  network: "skale-europa",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3113495
    }
  }
}), pp = /* @__PURE__ */ m({
  id: 476158412,
  name: "SKALE | Europa Liquidity Hub Testnet",
  network: "skale-europa-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
      ]
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2071911
    }
  },
  testnet: !0
}), hp = /* @__PURE__ */ m({
  id: 2139927552,
  name: "SKALE | Exorde",
  network: "skale-exorde",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), mp = /* @__PURE__ */ m({
  id: 1273227453,
  name: "SKALE | Human Protocol",
  network: "skale-human-protocol",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), bp = /* @__PURE__ */ m({
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  network: "skale-nebula",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2372986
    }
  }
}), fp = /* @__PURE__ */ m({
  id: 503129905,
  name: "SKALE | Nebula Gaming Hub Testnet",
  network: "skale-nebula-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
      ]
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2205882
    }
  },
  testnet: !0
}), gp = /* @__PURE__ */ m({
  id: 278611351,
  name: "SKALE | Razor Network",
  network: "skale-razor",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
}), yp = /* @__PURE__ */ m({
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  network: "skale-titan",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2076458
    }
  }
}), wp = /* @__PURE__ */ m({
  id: 1517929550,
  name: "SKALE | Titan Community Hub Testnet",
  network: "skale-titan-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2085155
    }
  },
  testnet: !0
}), Mp = /* @__PURE__ */ m({
  id: 19,
  name: "Songbird Mainnet",
  network: "songbird-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "songbird",
    symbol: "SGB"
  },
  rpcUrls: {
    default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://songbird-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Songbird Explorer",
      url: "https://songbird-explorer.flare.network"
    }
  }
}), xp = /* @__PURE__ */ m({
  id: 16,
  name: "Coston",
  network: "coston",
  nativeCurrency: {
    decimals: 18,
    name: "costonflare",
    symbol: "CFLR"
  },
  rpcUrls: {
    default: { http: ["https://coston-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://coston-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston Explorer",
      url: "https://coston-explorer.flare.network"
    }
  },
  testnet: !0
}), Ip = /* @__PURE__ */ m({
  id: 88882,
  name: "Chiliz Spicy Testnet",
  network: "chiliz-spicy-Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy.publicnode.com"
      ]
    },
    public: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy.publicnode.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "http://spicy-explorer.chiliz.com"
    }
  },
  testnet: !0
}), Ap = /* @__PURE__ */ m({
  id: 8082,
  name: "Shardeum Sphinx",
  network: "shmSphinx",
  nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sphinx.shardeum.org"]
    },
    public: {
      http: ["https://sphinx.shardeum.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shardeum Explorer",
      url: "https://explorer-sphinx.shardeum.org"
    }
  },
  testnet: !0
}), kp = /* @__PURE__ */ m({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: { name: "Bone", symbol: "BONE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"]
    },
    public: {
      http: ["https://rpc.shibrpc.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Blockscout",
      url: "https://shibariumscan.io"
    },
    default: {
      name: "Blockscout",
      url: "https://shibariumscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
      blockCreated: 265900
    }
  }
}), Ep = /* @__PURE__ */ m({
  id: 57,
  name: "Syscoin Mainnet",
  network: "syscoin",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    },
    public: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    }
  },
  blockExplorers: {
    default: { name: "SyscoinExplorer", url: "https://explorer.syscoin.org" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 287139
    }
  }
}), Cp = /* @__PURE__ */ m({
  id: 5700,
  name: "Syscoin Tanenbaum Testnet",
  network: "syscoin-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    },
    public: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    }
  },
  blockExplorers: {
    default: { name: "SyscoinTestnetExplorer", url: "https://tanenbaum.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 271288
    }
  }
}), Np = /* @__PURE__ */ m({
  id: 841,
  name: "Taraxa Mainnet",
  network: "taraxa",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taraxa.io"]
    },
    public: {
      http: ["https://rpc.mainnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.mainnet.taraxa.io"
    }
  }
}), Dp = /* @__PURE__ */ m({
  id: 167007,
  name: "Taiko Jolnir (Alpha-5 Testnet)",
  network: "tko-jolnir",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.jolnir.taiko.xyz"]
    },
    public: {
      http: ["https://rpc.jolnir.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.jolnir.taiko.xyz"
    }
  }
}), jp = /* @__PURE__ */ m({
  id: 167005,
  name: "Taiko (Alpha-3 Testnet)",
  network: "taiko-sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.taiko.xyz"]
    },
    public: {
      http: ["https://rpc.test.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.test.taiko.xyz"
    }
  }
}), Tp = /* @__PURE__ */ m({
  id: 842,
  name: "Taraxa Testnet",
  network: "taraxa-testnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.taraxa.io"]
    },
    public: {
      http: ["https://rpc.testnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.testnet.taraxa.io"
    }
  },
  testnet: !0
}), vp = /* @__PURE__ */ m({
  id: 40,
  name: "Telos",
  network: "telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.telos.net/evm"] },
    public: { http: ["https://mainnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan",
      url: "https://www.teloscan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 246530709
    }
  }
}), zp = /* @__PURE__ */ m({
  id: 41,
  name: "Telos",
  network: "telosTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://testnet.telos.net/evm"] },
    public: { http: ["https://testnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io/"
    }
  },
  testnet: !0
}), Sp = /* @__PURE__ */ m({
  id: 1559,
  name: "Tenet",
  network: "tenet-mainnet",
  nativeCurrency: {
    name: "TENET",
    symbol: "TENET",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://rpc.tenet.org"] },
    default: { http: ["https://rpc.tenet.org"] }
  },
  blockExplorers: {
    default: { name: "TenetScan Mainnet", url: "https://tenetscan.io" }
  },
  testnet: !1
}), Op = /* @__PURE__ */ m({
  id: 997,
  name: "5ireChain Thunder Testnet",
  network: "5ireChain",
  nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"]
    },
    public: {
      http: ["https://rpc-testnet.5ire.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network"
    }
  },
  testnet: !0
}), Lp = /* @__PURE__ */ m({
  id: 100009,
  name: "Vechain",
  network: "vechain",
  nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.vechain.org"]
    },
    public: {
      http: ["https://mainnet.vechain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Vechain Explorer",
      url: "https://explore.vechain.org"
    },
    vechainStats: {
      name: "Vechain Stats",
      url: "https://vechainstats.com"
    }
  }
}), Pp = /* @__PURE__ */ m({
  id: 888,
  name: "Wanchain",
  network: "wanchain",
  nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    },
    public: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "WanScan",
      url: "https://wanscan.org"
    },
    default: {
      name: "WanScan",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
      blockCreated: 25312390
    }
  }
}), Up = /* @__PURE__ */ m({
  id: 999,
  name: "Wanchain Testnet",
  network: "wanchainTestnet",
  nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    },
    public: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    },
    default: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
      blockCreated: 24743448
    }
  },
  testnet: !0
}), Bp = /* @__PURE__ */ m({
  id: 1111,
  name: "WEMIX",
  network: "wemix-mainnet",
  nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.wemix.com"] },
    public: { http: ["https://api.wemix.com"] }
  },
  blockExplorers: {
    etherscan: { name: "wemixExplorer", url: "https://explorer.wemix.com" },
    default: { name: "wemixExplorer", url: "https://explorer.wemix.com" }
  }
}), Qp = /* @__PURE__ */ m({
  id: 1112,
  name: "WEMIX Testnet",
  network: "wemix-testnet",
  nativeCurrency: { name: "WEMIX", symbol: "tWEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.test.wemix.com"] },
    public: { http: ["https://api.test.wemix.com"] }
  },
  blockExplorers: {
    etherscan: { name: "wemixExplorer", url: "https://testnet.wemixscan.com" },
    default: { name: "wemixExplorer", url: "https://testnet.wemixscan.com" }
  },
  testnet: !0
}), Fp = /* @__PURE__ */ m({
  id: 50,
  name: "XinFin Network",
  network: "xdc",
  nativeCurrency: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.xinfin.network"] },
    public: { http: ["https://rpc.xinfin.network"] }
  },
  blockExplorers: {
    xinfin: { name: "XinFin", url: "https://explorer.xinfin.network" },
    default: { name: "Blocksscan", url: "https://xdc.blocksscan.io" }
  }
}), Gp = /* @__PURE__ */ m({
  id: 51,
  name: "Apothem Network",
  network: "xdc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "TXDC",
    symbol: "TXDC"
  },
  rpcUrls: {
    default: { http: ["https://erpc.apothem.network"] },
    public: { http: ["https://erpc.apothem.network"] }
  },
  blockExplorers: {
    xinfin: { name: "XinFin", url: "https://explorer.apothem.network" },
    default: { name: "Blocksscan", url: "https://apothem.blocksscan.io" }
  }
}), Yp = /* @__PURE__ */ m({
  id: 1337803,
  network: "zhejiang",
  name: "Zhejiang",
  nativeCurrency: { name: "Zhejiang Ether", symbol: "ZhejETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    },
    public: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    }
  },
  blockExplorers: {
    beaconchain: {
      name: "Etherscan",
      url: "https://zhejiang.beaconcha.in"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://blockscout.com/eth/zhejiang-testnet"
    },
    default: {
      name: "Beaconchain",
      url: "https://zhejiang.beaconcha.in"
    }
  },
  testnet: !0
}), Rp = /* @__PURE__ */ m({
  id: 42766,
  name: "ZKFair Mainnet",
  network: "zkfair-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zkfair.io"]
    },
    public: {
      http: ["https://rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://scan.zkfair.io"
    }
  },
  testnet: !1
}), Wp = /* @__PURE__ */ m({
  id: 43851,
  name: "ZKFair Testnet",
  network: "zkfair-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.zkfair.io"]
    },
    public: {
      http: ["https://testnet-rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://testnet-scan.zkfair.io"
    }
  },
  testnet: !0
}), en = {
  block: /* @__PURE__ */ Fn({
    format(e) {
      var n;
      const t = (n = e.transactions) == null ? void 0 : n.map((r) => {
        if (typeof r == "string")
          return r;
        const s = en.transaction.format(r);
        return s.typeHex === "0x71" ? s.type = "eip712" : s.typeHex === "0xff" && (s.type = "priority"), s;
      });
      return {
        l1BatchNumber: e.l1BatchNumber ? v(e.l1BatchNumber) : null,
        l1BatchTimestamp: e.l1BatchTimestamp ? v(e.l1BatchTimestamp) : null,
        transactions: t
      };
    }
  }),
  transaction: /* @__PURE__ */ Bn({
    format(e) {
      const t = {};
      return e.type === "0x71" ? t.type = "eip712" : e.type === "0xff" && (t.type = "priority"), {
        ...t,
        l1BatchNumber: e.l1BatchNumber ? v(e.l1BatchNumber) : null,
        l1BatchTxIndex: e.l1BatchTxIndex ? v(e.l1BatchTxIndex) : null
      };
    }
  }),
  transactionReceipt: /* @__PURE__ */ is({
    format(e) {
      return {
        l1BatchNumber: e.l1BatchNumber ? v(e.l1BatchNumber) : null,
        l1BatchTxIndex: e.l1BatchTxIndex ? v(e.l1BatchTxIndex) : null,
        logs: e.logs.map((t) => ({
          ...X(t),
          l1BatchNumber: t.l1BatchNumber ? v(t.l1BatchNumber) : null,
          transactionLogIndex: G(t.transactionLogIndex),
          logType: t.logType
        })),
        l2ToL1Logs: e.l2ToL1Logs.map((t) => ({
          blockNumber: v(t.blockHash),
          blockHash: t.blockHash,
          l1BatchNumber: v(t.l1BatchNumber),
          transactionIndex: v(t.transactionIndex),
          shardId: v(t.shardId),
          isService: t.isService,
          sender: t.sender,
          key: t.key,
          value: t.value,
          transactionHash: t.transactionHash,
          logIndex: v(t.logIndex)
        }))
      };
    }
  }),
  transactionRequest: /* @__PURE__ */ cs({
    exclude: [
      "customSignature",
      "factoryDeps",
      "gasPerPubdata",
      "paymaster",
      "paymasterInput"
    ],
    format(e) {
      return e.gasPerPubdata || e.paymaster && e.paymasterInput || e.factoryDeps || e.customSignature ? {
        eip712Meta: {
          ...e.gasPerPubdata ? { gasPerPubdata: k(e.gasPerPubdata) } : {},
          ...e.paymaster && e.paymasterInput ? {
            paymasterParams: {
              paymaster: e.paymaster,
              paymasterInput: Array.from(dt(e.paymasterInput))
            }
          } : {},
          ...e.factoryDeps ? { factoryDeps: e.factoryDeps } : {},
          ...e.customSignature ? { customSignature: e.customSignature } : {}
        },
        type: e.type === "eip712" ? "0x71" : "0xff"
      } : {};
    }
  })
}, Hp = (e, t) => Vp(e) ? Zp(e) : ra(e, t), pr = {
  transaction: Hp
};
function Zp(e) {
  const { chainId: t, gas: n, nonce: r, to: s, from: a, value: o, maxFeePerGas: i, maxPriorityFeePerGas: c, customSignature: l, factoryDeps: u, paymaster: d, paymasterInput: h, gasPerPubdata: f, data: p } = e;
  Jp(e);
  const b = [
    r ? k(r) : "0x",
    c ? k(c) : "0x",
    i ? k(i) : "0x",
    n ? k(n) : "0x",
    s ?? "0x",
    o ? k(o) : "0x",
    p ?? "0x",
    k(t),
    k(""),
    k(""),
    k(t),
    a ?? "0x",
    f ? k(f) : "0x",
    u ?? [],
    l ?? "0x",
    d && h ? [d, h] : []
  ];
  return he([
    "0x71",
    Qe(b)
  ]);
}
function Vp(e) {
  return "customSignature" in e || "paymaster" in e || "paymasterInput" in e || "gasPerPubdata" in e || "factoryDeps" in e;
}
function Jp(e) {
  const { chainId: t, to: n, from: r, paymaster: s, paymasterInput: a } = e;
  if (t <= 0)
    throw new ze({ chainId: t });
  if (n && !L(n))
    throw new W({ address: n });
  if (r && !L(r))
    throw new W({ address: r });
  if (s && !L(s))
    throw new W({ address: s });
  if (s && !a)
    throw new x("`paymasterInput` must be provided when `paymaster` is defined");
  if (!s && a)
    throw new x("`paymaster` must be provided when `paymasterInput` is defined");
}
const Kp = /* @__PURE__ */ m({
  id: 324,
  name: "zkSync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    },
    public: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://explorer.zksync.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  }
}, {
  serializers: pr,
  formatters: en
}), Xp = /* @__PURE__ */ m({
  id: 280,
  name: "zkSync Era Testnet",
  network: "zksync-era-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"]
    },
    public: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://goerli.explorer.zksync.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: !0
}, {
  serializers: pr,
  formatters: en
}), qp = /* @__PURE__ */ m({
  id: 300,
  name: "zkSync Sepolia Testnet",
  network: "zksync-sepolia-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.era.zksync.dev"],
      webSocket: ["wss://sepolia.era.zksync.dev/ws"]
    },
    public: {
      http: ["https://sepolia.era.zksync.dev"],
      webSocket: ["wss://sepolia.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://sepolia.explorer.zksync.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: !0
}, {
  serializers: pr,
  formatters: en
}), $p = /* @__PURE__ */ m({
  id: 7001,
  name: "ZetaChain Athens Testnet",
  network: "zetachain-athens-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "aZETA"
  },
  rpcUrls: {
    public: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://athens3.explorer.zetachain.com"
    }
  },
  testnet: !0
}), _p = /* @__PURE__ */ m({
  id: 32769,
  name: "Zilliqa",
  network: "zilliqa",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.zilliqa.com"]
    },
    public: {
      http: ["https://api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.zilliqa.com"
    }
  },
  testnet: !1
}), eh = /* @__PURE__ */ m({
  id: 33101,
  name: "Zilliqa Testnet",
  network: "zilliqa-testnet",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dev-api.zilliqa.com"]
    },
    public: {
      http: ["https://dev-api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.testnet.zilliqa.com"
    }
  },
  testnet: !0
}), th = /* @__PURE__ */ m({
  id: 7777777,
  name: "Zora",
  network: "zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    },
    public: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.zora.energy" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5882
    }
  }
}, {
  formatters: _
}), nh = /* @__PURE__ */ m({
  id: 999999999,
  name: "Zora Sepolia",
  network: "zora-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    },
    public: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 83160
    }
  },
  testnet: !0
}, {
  formatters: _
}), rh = /* @__PURE__ */ m({
  id: 999,
  name: "Zora Goerli Testnet",
  network: "zora-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Goerli",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    },
    public: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.explorer.zora.energy"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 189123
    }
  },
  testnet: !0
}, {
  formatters: _
});
var sh = class extends Error {
  constructor({
    chainId: e,
    connectorId: t
  }) {
    super(`Chain "${e}" not configured for connector "${t}".`), this.name = "ChainNotConfiguredForConnectorError";
  }
}, xe = class extends Error {
  constructor() {
    super(...arguments), this.name = "ConnectorNotFoundError", this.message = "Connector not found";
  }
};
function Wr(e) {
  return typeof e == "string" ? Number.parseInt(
    e,
    e.trim().substring(0, 2) === "0x" ? 16 : 10
  ) : typeof e == "bigint" ? Number(e) : e;
}
var pa = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function s(c, l, u) {
    this.fn = c, this.context = l, this.once = u || !1;
  }
  function a(c, l, u, d, h) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(u, d || c, h), p = n ? n + l : l;
    return c._events[p] ? c._events[p].fn ? c._events[p] = [c._events[p], f] : c._events[p].push(f) : (c._events[p] = f, c._eventsCount++), c;
  }
  function o(c, l) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[l];
  }
  function i() {
    this._events = new r(), this._eventsCount = 0;
  }
  i.prototype.eventNames = function() {
    var l = [], u, d;
    if (this._eventsCount === 0)
      return l;
    for (d in u = this._events)
      t.call(u, d) && l.push(n ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
  }, i.prototype.listeners = function(l) {
    var u = n ? n + l : l, d = this._events[u];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var h = 0, f = d.length, p = new Array(f); h < f; h++)
      p[h] = d[h].fn;
    return p;
  }, i.prototype.listenerCount = function(l) {
    var u = n ? n + l : l, d = this._events[u];
    return d ? d.fn ? 1 : d.length : 0;
  }, i.prototype.emit = function(l, u, d, h, f, p) {
    var b = n ? n + l : l;
    if (!this._events[b])
      return !1;
    var g = this._events[b], w = arguments.length, y, M;
    if (g.fn) {
      switch (g.once && this.removeListener(l, g.fn, void 0, !0), w) {
        case 1:
          return g.fn.call(g.context), !0;
        case 2:
          return g.fn.call(g.context, u), !0;
        case 3:
          return g.fn.call(g.context, u, d), !0;
        case 4:
          return g.fn.call(g.context, u, d, h), !0;
        case 5:
          return g.fn.call(g.context, u, d, h, f), !0;
        case 6:
          return g.fn.call(g.context, u, d, h, f, p), !0;
      }
      for (M = 1, y = new Array(w - 1); M < w; M++)
        y[M - 1] = arguments[M];
      g.fn.apply(g.context, y);
    } else {
      var N = g.length, A;
      for (M = 0; M < N; M++)
        switch (g[M].once && this.removeListener(l, g[M].fn, void 0, !0), w) {
          case 1:
            g[M].fn.call(g[M].context);
            break;
          case 2:
            g[M].fn.call(g[M].context, u);
            break;
          case 3:
            g[M].fn.call(g[M].context, u, d);
            break;
          case 4:
            g[M].fn.call(g[M].context, u, d, h);
            break;
          default:
            if (!y)
              for (A = 1, y = new Array(w - 1); A < w; A++)
                y[A - 1] = arguments[A];
            g[M].fn.apply(g[M].context, y);
        }
    }
    return !0;
  }, i.prototype.on = function(l, u, d) {
    return a(this, l, u, d, !1);
  }, i.prototype.once = function(l, u, d) {
    return a(this, l, u, d, !0);
  }, i.prototype.removeListener = function(l, u, d, h) {
    var f = n ? n + l : l;
    if (!this._events[f])
      return this;
    if (!u)
      return o(this, f), this;
    var p = this._events[f];
    if (p.fn)
      p.fn === u && (!h || p.once) && (!d || p.context === d) && o(this, f);
    else {
      for (var b = 0, g = [], w = p.length; b < w; b++)
        (p[b].fn !== u || h && !p[b].once || d && p[b].context !== d) && g.push(p[b]);
      g.length ? this._events[f] = g.length === 1 ? g[0] : g : o(this, f);
    }
    return this;
  }, i.prototype.removeAllListeners = function(l) {
    var u;
    return l ? (u = n ? n + l : l, this._events[u] && o(this, u)) : (this._events = new r(), this._eventsCount = 0), this;
  }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = n, i.EventEmitter = i, e.exports = i;
})(pa);
var ah = pa.exports;
const oh = /* @__PURE__ */ Ca(ah);
var hr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, z = (e, t, n) => (hr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, mr = (e, t, n, r) => (hr(e, t, "write to private field"), t.set(e, n), n), U = (e, t, n) => (hr(e, t, "access private method"), n), ha = class extends oh {
  constructor({
    chains: e = [da, ua],
    options: t
  }) {
    super(), this.chains = e, this.options = t;
  }
  getBlockExplorerUrls(e) {
    const { default: t, ...n } = e.blockExplorers ?? {};
    if (t)
      return [
        t.url,
        ...Object.values(n).map((r) => r.url)
      ];
  }
  isChainUnsupported(e) {
    return !this.chains.some((t) => t.id === e);
  }
  setStorage(e) {
    this.storage = e;
  }
};
function ih(e) {
  var n;
  if (!e)
    return "Injected";
  const t = (r) => {
    if (r.isApexWallet)
      return "Apex Wallet";
    if (r.isAvalanche)
      return "Core Wallet";
    if (r.isBackpack)
      return "Backpack";
    if (r.isBifrost)
      return "Bifrost Wallet";
    if (r.isBitKeep)
      return "BitKeep";
    if (r.isBitski)
      return "Bitski";
    if (r.isBlockWallet)
      return "BlockWallet";
    if (r.isBraveWallet)
      return "Brave Wallet";
    if (r.isCoin98)
      return "Coin98 Wallet";
    if (r.isCoinbaseWallet)
      return "Coinbase Wallet";
    if (r.isDawn)
      return "Dawn Wallet";
    if (r.isDefiant)
      return "Defiant";
    if (r.isDesig)
      return "Desig Wallet";
    if (r.isEnkrypt)
      return "Enkrypt";
    if (r.isExodus)
      return "Exodus";
    if (r.isFordefi)
      return "Fordefi";
    if (r.isFrame)
      return "Frame";
    if (r.isFrontier)
      return "Frontier Wallet";
    if (r.isGamestop)
      return "GameStop Wallet";
    if (r.isHaqqWallet)
      return "HAQQ Wallet";
    if (r.isHyperPay)
      return "HyperPay Wallet";
    if (r.isImToken)
      return "ImToken";
    if (r.isHaloWallet)
      return "Halo Wallet";
    if (r.isKuCoinWallet)
      return "KuCoin Wallet";
    if (r.isMathWallet)
      return "MathWallet";
    if (r.isNovaWallet)
      return "Nova Wallet";
    if (r.isOkxWallet || r.isOKExWallet)
      return "OKX Wallet";
    if (r.isOktoWallet)
      return "Okto Wallet";
    if (r.isOneInchIOSWallet || r.isOneInchAndroidWallet)
      return "1inch Wallet";
    if (r.isOneKey)
      return "OneKey Wallet";
    if (r.isOpera)
      return "Opera";
    if (r.isPhantom)
      return "Phantom";
    if (r.isPortal)
      return "Ripio Portal";
    if (r.isRabby)
      return "Rabby Wallet";
    if (r.isRainbow)
      return "Rainbow";
    if (r.isSafePal)
      return "SafePal Wallet";
    if (r.isStatus)
      return "Status";
    if (r.isSubWallet)
      return "SubWallet";
    if (r.isTalisman)
      return "Talisman";
    if (r.isTally)
      return "Taho";
    if (r.isTokenPocket)
      return "TokenPocket";
    if (r.isTokenary)
      return "Tokenary";
    if (r.isTrust || r.isTrustWallet)
      return "Trust Wallet";
    if (r.isTTWallet)
      return "TTWallet";
    if (r.isXDEFI)
      return "XDEFI Wallet";
    if (r.isZeal)
      return "Zeal";
    if (r.isZerion)
      return "Zerion";
    if (r.isMetaMask)
      return "MetaMask";
  };
  if ((n = e.providers) != null && n.length) {
    const r = /* @__PURE__ */ new Set();
    let s = 1;
    for (const o of e.providers) {
      let i = t(o);
      i || (i = `Unknown Wallet #${s}`, s += 1), r.add(i);
    }
    const a = [...r];
    return a.length ? a : a[0] ?? "Injected";
  }
  return t(e) ?? "Injected";
}
var Nt, ma = class extends ha {
  constructor({
    chains: e,
    options: t
  } = {}) {
    const n = {
      shimDisconnect: !0,
      getProvider() {
        if (typeof window > "u")
          return;
        const s = window.ethereum;
        return s != null && s.providers && s.providers.length > 0 ? s.providers[0] : s;
      },
      ...t
    };
    super({ chains: e, options: n }), this.id = "injected", J(this, Nt, void 0), this.shimDisconnectKey = `${this.id}.shimDisconnect`, this.onAccountsChanged = (s) => {
      s.length === 0 ? this.emit("disconnect") : this.emit("change", {
        account: fe(s[0])
      });
    }, this.onChainChanged = (s) => {
      const a = Wr(s), o = this.isChainUnsupported(a);
      this.emit("change", { chain: { id: a, unsupported: o } });
    }, this.onDisconnect = async (s) => {
      var a;
      s.code === 1013 && await this.getProvider() && await this.getAccount() || (this.emit("disconnect"), this.options.shimDisconnect && ((a = this.storage) == null || a.removeItem(this.shimDisconnectKey)));
    };
    const r = n.getProvider();
    if (typeof n.name == "string")
      this.name = n.name;
    else if (r) {
      const s = ih(r);
      n.name ? this.name = n.name(s) : typeof s == "string" ? this.name = s : this.name = s[0];
    } else
      this.name = "Injected";
    this.ready = !!r;
  }
  async connect({ chainId: e } = {}) {
    var t;
    try {
      const n = await this.getProvider();
      if (!n)
        throw new xe();
      n.on && (n.on("accountsChanged", this.onAccountsChanged), n.on("chainChanged", this.onChainChanged), n.on("disconnect", this.onDisconnect)), this.emit("message", { type: "connecting" });
      const r = await n.request({
        method: "eth_requestAccounts"
      }), s = fe(r[0]);
      let a = await this.getChainId(), o = this.isChainUnsupported(a);
      return e && a !== e && (a = (await this.switchChain(e)).id, o = this.isChainUnsupported(a)), this.options.shimDisconnect && ((t = this.storage) == null || t.setItem(this.shimDisconnectKey, !0)), { account: s, chain: { id: a, unsupported: o } };
    } catch (n) {
      throw this.isUserRejectedRequestError(n) ? new K(n) : n.code === -32002 ? new je(n) : n;
    }
  }
  async disconnect() {
    var t;
    const e = await this.getProvider();
    e != null && e.removeListener && (e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && ((t = this.storage) == null || t.removeItem(this.shimDisconnectKey)));
  }
  async getAccount() {
    const e = await this.getProvider();
    if (!e)
      throw new xe();
    const t = await e.request({
      method: "eth_accounts"
    });
    return fe(t[0]);
  }
  async getChainId() {
    const e = await this.getProvider();
    if (!e)
      throw new xe();
    return e.request({ method: "eth_chainId" }).then(Wr);
  }
  async getProvider() {
    const e = this.options.getProvider();
    return e && mr(this, Nt, e), z(this, Nt);
  }
  async getWalletClient({
    chainId: e
  } = {}) {
    const [t, n] = await Promise.all([
      this.getProvider(),
      this.getAccount()
    ]), r = this.chains.find((s) => s.id === e);
    if (!t)
      throw new Error("provider is required.");
    return oa({
      account: n,
      chain: r,
      transport: Gs(t)
    });
  }
  async isAuthorized() {
    var e;
    try {
      if (this.options.shimDisconnect && !((e = this.storage) != null && e.getItem(this.shimDisconnectKey)))
        return !1;
      if (!await this.getProvider())
        throw new xe();
      return !!await this.getAccount();
    } catch {
      return !1;
    }
  }
  async switchChain(e) {
    var r, s, a;
    const t = await this.getProvider();
    if (!t)
      throw new xe();
    const n = D(e);
    try {
      return await Promise.all([
        t.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: n }]
        }),
        new Promise(
          (o) => this.on("change", ({ chain: i }) => {
            (i == null ? void 0 : i.id) === e && o();
          })
        )
      ]), this.chains.find((o) => o.id === e) ?? {
        id: e,
        name: `Chain ${n}`,
        network: `${n}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (o) {
      const i = this.chains.find((c) => c.id === e);
      if (!i)
        throw new sh({
          chainId: e,
          connectorId: this.id
        });
      if (o.code === 4902 || ((s = (r = o == null ? void 0 : o.data) == null ? void 0 : r.originalError) == null ? void 0 : s.code) === 4902)
        try {
          if (await t.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: n,
                chainName: i.name,
                nativeCurrency: i.nativeCurrency,
                rpcUrls: [((a = i.rpcUrls.public) == null ? void 0 : a.http[0]) ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(i)
              }
            ]
          }), await this.getChainId() !== e)
            throw new K(
              new Error("User rejected switch after adding network.")
            );
          return i;
        } catch (c) {
          throw new K(c);
        }
      throw this.isUserRejectedRequestError(o) ? new K(o) : new Te(o);
    }
  }
  async watchAsset({
    address: e,
    decimals: t = 18,
    image: n,
    symbol: r
  }) {
    const s = await this.getProvider();
    if (!s)
      throw new xe();
    return s.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: e,
          decimals: t,
          image: n,
          symbol: r
        }
      }
    });
  }
  isUserRejectedRequestError(e) {
    return e.code === 4001;
  }
};
Nt = /* @__PURE__ */ new WeakMap();
var br = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, cn = (e, t, n) => (br(e, t, "read from private field"), t.get(e)), ln = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Et = (e, t, n, r) => (br(e, t, "write to private field"), t.set(e, n), n), ch = (e, t, n) => (br(e, t, "access private method"), n), lh = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1, REACT_APP_CONNECT_VERSION: "0.3.21" };
const uh = (e) => (t, n, r) => {
  const s = r.subscribe;
  return r.subscribe = (o, i, c) => {
    let l = o;
    if (i) {
      const u = (c == null ? void 0 : c.equalityFn) || Object.is;
      let d = o(r.getState());
      l = (h) => {
        const f = o(h);
        if (!u(d, f)) {
          const p = d;
          i(d = f, p);
        }
      }, c != null && c.fireImmediately && i(d, d);
    }
    return s(l);
  }, e(t, n, r);
}, dh = uh;
function ph(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(s)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (s, a) => n.setItem(
      s,
      JSON.stringify(a, void 0)
    ),
    removeItem: (s) => n.removeItem(s)
  };
}
const ut = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ut(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return ut(r)(n);
      }
    };
  }
}, hh = (e, t) => (n, r, s) => {
  let a = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (g) => g,
    version: 0,
    merge: (g, w) => ({
      ...w,
      ...g
    }),
    ...t
  }, o = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l;
  try {
    l = a.getStorage();
  } catch {
  }
  if (!l)
    return e(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...g);
      },
      r,
      s
    );
  const u = ut(a.serialize), d = () => {
    const g = a.partialize({ ...r() });
    let w;
    const y = u({ state: g, version: a.version }).then(
      (M) => l.setItem(a.name, M)
    ).catch((M) => {
      w = M;
    });
    if (w)
      throw w;
    return y;
  }, h = s.setState;
  s.setState = (g, w) => {
    h(g, w), d();
  };
  const f = e(
    (...g) => {
      n(...g), d();
    },
    r,
    s
  );
  let p;
  const b = () => {
    var g;
    if (!l)
      return;
    o = !1, i.forEach((y) => y(r()));
    const w = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, r())) || void 0;
    return ut(l.getItem.bind(l))(a.name).then((y) => {
      if (y)
        return a.deserialize(y);
    }).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var M;
      return p = a.merge(
        y,
        (M = r()) != null ? M : f
      ), n(p, !0), d();
    }).then(() => {
      w == null || w(p, void 0), o = !0, c.forEach((y) => y(p));
    }).catch((y) => {
      w == null || w(void 0, y);
    });
  };
  return s.persist = {
    setOptions: (g) => {
      a = {
        ...a,
        ...g
      }, g.getStorage && (l = g.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => b(),
    hasHydrated: () => o,
    onHydrate: (g) => (i.add(g), () => {
      i.delete(g);
    }),
    onFinishHydration: (g) => (c.add(g), () => {
      c.delete(g);
    })
  }, b(), p || f;
}, mh = (e, t) => (n, r, s) => {
  let a = {
    storage: ph(() => localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, g) => ({
      ...g,
      ...b
    }),
    ...t
  }, o = !1;
  const i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = a.storage;
  if (!l)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...b);
      },
      r,
      s
    );
  const u = () => {
    const b = a.partialize({ ...r() });
    return l.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, d = s.setState;
  s.setState = (b, g) => {
    d(b, g), u();
  };
  const h = e(
    (...b) => {
      n(...b), u();
    },
    r,
    s
  );
  s.getInitialState = () => h;
  let f;
  const p = () => {
    var b, g;
    if (!l)
      return;
    o = !1, i.forEach((y) => {
      var M;
      return y((M = r()) != null ? M : h);
    });
    const w = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, (b = r()) != null ? b : h)) || void 0;
    return ut(l.getItem.bind(l))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var M;
      return f = a.merge(
        y,
        (M = r()) != null ? M : h
      ), n(f, !0), u();
    }).then(() => {
      w == null || w(f, void 0), f = r(), o = !0, c.forEach((y) => y(f));
    }).catch((y) => {
      w == null || w(void 0, y);
    });
  };
  return s.persist = {
    setOptions: (b) => {
      a = {
        ...a,
        ...b
      }, b.storage && (l = b.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => p(),
    hasHydrated: () => o,
    onHydrate: (b) => (i.add(b), () => {
      i.delete(b);
    }),
    onFinishHydration: (b) => (c.add(b), () => {
      c.delete(b);
    })
  }, a.skipHydration || p(), f || h;
}, bh = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((lh ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), hh(e, t)) : mh(e, t), fh = bh;
var gh = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1, REACT_APP_CONNECT_VERSION: "0.3.21" };
const Hr = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, d) => {
    const h = typeof u == "function" ? u(t) : u;
    if (!Object.is(h, t)) {
      const f = t;
      t = d ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((p) => p(t, f));
    }
  }, s = () => t, c = { setState: r, getState: s, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (gh ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, s, c);
  return c;
}, yh = (e) => e ? Hr(e) : Hr;
function wh(e, t, {
  batch: n = { multicall: { wait: 32 } },
  pollingInterval: r = 4e3,
  rank: s,
  retryCount: a,
  retryDelay: o,
  stallTimeout: i
} = {}) {
  if (!e.length)
    throw new Error("must have at least one chain");
  let c = [];
  const l = {}, u = {};
  for (const d of e) {
    let h = !1;
    for (const f of t) {
      const p = f(d);
      p && (h = !0, c.some(({ id: b }) => b === d.id) || (c = [...c, p.chain]), l[d.id] = [
        ...l[d.id] || [],
        ...p.rpcUrls.http
      ], p.rpcUrls.webSocket && (u[d.id] = [
        ...u[d.id] || [],
        ...p.rpcUrls.webSocket
      ]));
    }
    if (!h)
      throw new Error(
        [
          `Could not find valid provider configuration for chain "${d.name}".
`,
          "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.",
          "Read more: https://wagmi.sh/core/providers/jsonRpc"
        ].join(`
`)
      );
  }
  return {
    chains: c,
    publicClient: ({ chainId: d }) => {
      const h = c.find((b) => b.id === d) ?? e[0], f = l[h.id];
      if (!f || !f[0])
        throw new Error(`No providers configured for chain "${h.id}"`);
      const p = Rr({
        batch: n,
        chain: h,
        transport: Qr(
          f.map((b) => Pc(b, { timeout: i })),
          { rank: s, retryCount: a, retryDelay: o }
        ),
        pollingInterval: r
      });
      return Object.assign(p, {
        chains: c
      });
    },
    webSocketPublicClient: ({ chainId: d }) => {
      const h = c.find((b) => b.id === d) ?? e[0], f = u[h.id];
      if (!f || !f[0])
        return;
      const p = Rr({
        batch: n,
        chain: h,
        transport: Qr(
          f.map((b) => $l(b, { timeout: i })),
          { rank: s, retryCount: a, retryDelay: o }
        ),
        pollingInterval: r
      });
      return Object.assign(p, {
        chains: c
      });
    }
  };
}
var vn = (e, {
  find: t,
  replace: n
}) => e && t(e) ? n(e) : typeof e != "object" ? e : Array.isArray(e) ? e.map((r) => vn(r, { find: t, replace: n })) : e instanceof Object ? Object.entries(e).reduce(
  (r, [s, a]) => ({
    ...r,
    [s]: vn(a, { find: t, replace: n })
  }),
  {}
) : e;
function Mh(e) {
  const t = JSON.parse(e);
  return vn(t, {
    find: (r) => typeof r == "string" && r.startsWith("#bigint."),
    replace: (r) => BigInt(r.replace("#bigint.", ""))
  });
}
function Zr(e, t) {
  return e.slice(0, t).join(".") || ".";
}
function Vr(e, t) {
  const { length: n } = e;
  for (let r = 0; r < n; ++r)
    if (e[r] === t)
      return r + 1;
  return 0;
}
function xh(e, t) {
  const n = typeof e == "function", r = typeof t == "function", s = [], a = [];
  return function(i, c) {
    if (typeof c == "object")
      if (s.length) {
        const l = Vr(s, this);
        l === 0 ? s[s.length] = this : (s.splice(l), a.splice(l)), a[a.length] = i;
        const u = Vr(s, c);
        if (u !== 0)
          return r ? t.call(
            this,
            i,
            c,
            Zr(a, u)
          ) : `[ref=${Zr(a, u)}]`;
      } else
        s[0] = c, a[0] = i;
    return n ? e.call(this, i, c) : c;
  };
}
function Ih(e, t, n, r) {
  return JSON.stringify(
    e,
    xh((s, a) => {
      const o = typeof a == "bigint" ? `#bigint.${a.toString()}` : a;
      return (t == null ? void 0 : t(s, o)) || o;
    }, r),
    n ?? void 0
  );
}
var Ah = {
  getItem: (e) => "",
  setItem: (e, t) => null,
  removeItem: (e) => null
};
function kh({
  deserialize: e = Mh,
  key: t = "wagmi",
  serialize: n = Ih,
  storage: r
}) {
  return {
    ...r,
    getItem: (s, a = null) => {
      const o = r.getItem(`${t}.${s}`);
      try {
        return o ? e(o) : a;
      } catch (i) {
        return console.warn(i), a;
      }
    },
    setItem: (s, a) => {
      if (a === null)
        r.removeItem(`${t}.${s}`);
      else
        try {
          r.setItem(`${t}.${s}`, n(a));
        } catch (o) {
          console.error(o);
        }
    },
    removeItem: (s) => r.removeItem(`${t}.${s}`)
  };
}
var Jr = "store", Ie, We, zn, ba, Eh = class {
  constructor({
    autoConnect: e = !1,
    connectors: t = [new ma()],
    publicClient: n,
    storage: r = kh({
      storage: typeof window < "u" ? window.localStorage : Ah
    }),
    logger: s = {
      warn: console.warn
    },
    webSocketPublicClient: a
  }) {
    var l, u;
    ln(this, zn), this.publicClients = /* @__PURE__ */ new Map(), this.webSocketPublicClients = /* @__PURE__ */ new Map(), ln(this, Ie, void 0), ln(this, We, void 0), this.args = {
      autoConnect: e,
      connectors: t,
      logger: s,
      publicClient: n,
      storage: r,
      webSocketPublicClient: a
    };
    let o = "disconnected", i;
    if (e)
      try {
        const d = r.getItem(Jr), h = (l = d == null ? void 0 : d.state) == null ? void 0 : l.data;
        o = h != null && h.account ? "reconnecting" : "connecting", i = (u = h == null ? void 0 : h.chain) == null ? void 0 : u.id;
      } catch {
      }
    const c = typeof t == "function" ? t() : t;
    c.forEach((d) => d.setStorage(r)), this.store = yh(
      dh(
        fh(
          () => ({
            connectors: c,
            publicClient: this.getPublicClient({ chainId: i }),
            status: o,
            webSocketPublicClient: this.getWebSocketPublicClient({ chainId: i })
          }),
          {
            name: Jr,
            storage: r,
            partialize: (d) => {
              var h, f;
              return {
                ...e && {
                  data: {
                    account: (h = d == null ? void 0 : d.data) == null ? void 0 : h.account,
                    chain: (f = d == null ? void 0 : d.data) == null ? void 0 : f.chain
                  }
                },
                chains: d == null ? void 0 : d.chains
              };
            },
            version: 2
          }
        )
      )
    ), this.storage = r, Et(this, We, r == null ? void 0 : r.getItem("wallet")), ch(this, zn, ba).call(this), e && typeof window < "u" && setTimeout(async () => await this.autoConnect(), 0);
  }
  get chains() {
    return this.store.getState().chains;
  }
  get connectors() {
    return this.store.getState().connectors;
  }
  get connector() {
    return this.store.getState().connector;
  }
  get data() {
    return this.store.getState().data;
  }
  get error() {
    return this.store.getState().error;
  }
  get lastUsedChainId() {
    var e, t;
    return (t = (e = this.data) == null ? void 0 : e.chain) == null ? void 0 : t.id;
  }
  get publicClient() {
    return this.store.getState().publicClient;
  }
  get status() {
    return this.store.getState().status;
  }
  get subscribe() {
    return this.store.subscribe;
  }
  get webSocketPublicClient() {
    return this.store.getState().webSocketPublicClient;
  }
  setState(e) {
    const t = typeof e == "function" ? e(this.store.getState()) : e;
    this.store.setState(t, !0);
  }
  clearState() {
    this.setState((e) => ({
      ...e,
      chains: void 0,
      connector: void 0,
      data: void 0,
      error: void 0,
      status: "disconnected"
    }));
  }
  async destroy() {
    var e, t;
    this.connector && await ((t = (e = this.connector).disconnect) == null ? void 0 : t.call(e)), Et(this, Ie, !1), this.clearState(), this.store.destroy();
  }
  async autoConnect() {
    if (cn(this, Ie))
      return;
    Et(this, Ie, !0), this.setState((n) => {
      var r;
      return {
        ...n,
        status: (r = n.data) != null && r.account ? "reconnecting" : "connecting"
      };
    });
    const e = cn(this, We) ? [...this.connectors].sort(
      (n) => n.id === cn(this, We) ? -1 : 1
    ) : this.connectors;
    let t = !1;
    for (const n of e) {
      if (!n.ready || !n.isAuthorized || !await n.isAuthorized())
        continue;
      const s = await n.connect();
      this.setState((a) => ({
        ...a,
        connector: n,
        chains: n == null ? void 0 : n.chains,
        data: s,
        status: "connected"
      })), t = !0;
      break;
    }
    return t || this.setState((n) => ({
      ...n,
      data: void 0,
      status: "disconnected"
    })), Et(this, Ie, !1), this.data;
  }
  setConnectors(e) {
    this.args = {
      ...this.args,
      connectors: e
    };
    const t = typeof e == "function" ? e() : e;
    t.forEach((n) => n.setStorage(this.args.storage)), this.setState((n) => ({
      ...n,
      connectors: t
    }));
  }
  getPublicClient({ chainId: e } = {}) {
    let t = this.publicClients.get(-1);
    if (t && (t == null ? void 0 : t.chain.id) === e || (t = this.publicClients.get(e ?? -1), t))
      return t;
    const { publicClient: n } = this.args;
    return t = typeof n == "function" ? n({ chainId: e }) : n, this.publicClients.set(e ?? -1, t), t;
  }
  setPublicClient(e) {
    var n, r;
    const t = (r = (n = this.data) == null ? void 0 : n.chain) == null ? void 0 : r.id;
    this.args = {
      ...this.args,
      publicClient: e
    }, this.publicClients.clear(), this.setState((s) => ({
      ...s,
      publicClient: this.getPublicClient({ chainId: t })
    }));
  }
  getWebSocketPublicClient({ chainId: e } = {}) {
    let t = this.webSocketPublicClients.get(-1);
    if (t && (t == null ? void 0 : t.chain.id) === e || (t = this.webSocketPublicClients.get(e ?? -1), t))
      return t;
    const { webSocketPublicClient: n } = this.args;
    return t = typeof n == "function" ? n({ chainId: e }) : n, t && this.webSocketPublicClients.set(e ?? -1, t), t;
  }
  setWebSocketPublicClient(e) {
    var n, r;
    const t = (r = (n = this.data) == null ? void 0 : n.chain) == null ? void 0 : r.id;
    this.args = {
      ...this.args,
      webSocketPublicClient: e
    }, this.webSocketPublicClients.clear(), this.setState((s) => ({
      ...s,
      webSocketPublicClient: this.getWebSocketPublicClient({
        chainId: t
      })
    }));
  }
  setLastUsedConnector(e = null) {
    var t;
    (t = this.storage) == null || t.setItem("wallet", e);
  }
};
Ie = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakSet();
ba = function() {
  const e = (i) => {
    this.setState((c) => ({
      ...c,
      data: { ...c.data, ...i }
    }));
  }, t = () => {
    this.clearState();
  }, n = (i) => {
    this.setState((c) => ({ ...c, error: i }));
  };
  this.store.subscribe(
    ({ connector: i }) => i,
    (i, c) => {
      var l, u, d, h, f, p;
      (l = c == null ? void 0 : c.off) == null || l.call(c, "change", e), (u = c == null ? void 0 : c.off) == null || u.call(c, "disconnect", t), (d = c == null ? void 0 : c.off) == null || d.call(c, "error", n), i && ((h = i.on) == null || h.call(i, "change", e), (f = i.on) == null || f.call(i, "disconnect", t), (p = i.on) == null || p.call(i, "error", n));
    }
  );
  const { publicClient: r, webSocketPublicClient: s } = this.args;
  (typeof r == "function" || typeof s == "function") && this.store.subscribe(
    ({ data: i }) => {
      var c;
      return (c = i == null ? void 0 : i.chain) == null ? void 0 : c.id;
    },
    (i) => {
      this.setState((c) => ({
        ...c,
        publicClient: this.getPublicClient({ chainId: i }),
        webSocketPublicClient: this.getWebSocketPublicClient({
          chainId: i
        })
      }));
    }
  );
};
function Ch(e) {
  return new Eh(e);
}
function Nh() {
  return function(e) {
    return e.rpcUrls.public.http[0] ? {
      chain: e,
      rpcUrls: e.rpcUrls.public
    } : null;
  };
}
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  acala: Ba,
  arbitrum: Qa,
  arbitrumGoerli: Fa,
  arbitrumNova: Ga,
  arbitrumSepolia: Ra,
  astar: Ya,
  astarZkatana: Wa,
  aurora: Ha,
  auroraTestnet: Za,
  avalanche: Va,
  avalancheFuji: Ja,
  bahamut: Ka,
  base: po,
  baseGoerli: ho,
  baseSepolia: mo,
  bearNetworkChainMainnet: bo,
  bearNetworkChainTestnet: fo,
  bitTorrent: go,
  bitTorrentTestnet: yo,
  boba: wo,
  bronos: Mo,
  bronosTestnet: xo,
  bsc: Io,
  bscTestnet: Ao,
  bxn: ko,
  bxnTestnet: Eo,
  canto: Co,
  celo: ou,
  celoAlfajores: iu,
  celoCannoli: lu,
  chiliz: cu,
  classic: uu,
  confluxESpace: du,
  confluxESpaceTestnet: pu,
  coreDao: hu,
  cronos: mu,
  cronosTestnet: bu,
  crossbell: fu,
  dfk: gu,
  dogechain: yu,
  edgeware: wu,
  edgewareTestnet: Mu,
  ekta: Eu,
  ektaTestnet: Cu,
  eos: xu,
  eosTestnet: Iu,
  evmos: Au,
  evmosTestnet: ku,
  fantom: Nu,
  fantomSonicTestnet: Du,
  fantomTestnet: ju,
  fibo: Tu,
  filecoin: vu,
  filecoinCalibration: zu,
  filecoinHyperspace: Su,
  flare: Ou,
  flareTestnet: Lu,
  foundry: Pu,
  fuse: Uu,
  fuseSparknet: Bu,
  gnosis: Wu,
  gnosisChiado: Hu,
  gobi: Ru,
  goerli: ua,
  haqqMainnet: Ju,
  haqqTestedge2: Ku,
  hardhat: Zu,
  harmonyOne: Vu,
  holesky: Xu,
  iotex: Qu,
  iotexTestnet: Fu,
  jbc: Gu,
  karura: Yu,
  kava: qu,
  kavaTestnet: $u,
  klaytn: _u,
  klaytnBaobab: ed,
  kroma: td,
  kromaSepolia: nd,
  linea: rd,
  lineaTestnet: sd,
  localhost: ad,
  lukso: od,
  mainnet: da,
  mandala: id,
  manta: cd,
  mantaTestnet: ld,
  mantle: ud,
  mantleTestnet: dd,
  meter: pd,
  meterTestnet: hd,
  metis: md,
  metisGoerli: bd,
  mev: fd,
  mevTestnet: gd,
  modeTestnet: yd,
  moonbaseAlpha: wd,
  moonbeam: Md,
  moonbeamDev: xd,
  moonriver: Id,
  neonDevnet: Ad,
  neonMainnet: kd,
  nexi: Ed,
  nexilix: Cd,
  oasisTestnet: Dd,
  oasys: Nd,
  okc: jd,
  opBNB: Sd,
  opBNBTestnet: Od,
  optimism: Td,
  optimismGoerli: vd,
  optimismSepolia: zd,
  pgn: Ld,
  pgnTestnet: Pd,
  plinga: Ud,
  polygon: Bd,
  polygonMumbai: Qd,
  polygonZkEvm: Gd,
  polygonZkEvmTestnet: Fd,
  pulsechain: Yd,
  pulsechainV4: Rd,
  qMainnet: Wd,
  qTestnet: Hd,
  rollux: Zd,
  rolluxTestnet: Vd,
  ronin: Jd,
  rootstock: Kd,
  saigon: Xd,
  sapphire: qd,
  sapphireTestnet: $d,
  scroll: _d,
  scrollSepolia: ep,
  scrollTestnet: tp,
  sepolia: np,
  shardeumSphinx: Ap,
  shibarium: kp,
  shimmer: rp,
  shimmerTestnet: sp,
  skaleBlockBrawlers: ap,
  skaleCalypso: op,
  skaleCalypsoTestnet: ip,
  skaleChaosTestnet: cp,
  skaleCryptoBlades: lp,
  skaleCryptoColosseum: up,
  skaleEuropa: dp,
  skaleEuropaTestnet: pp,
  skaleExorde: hp,
  skaleHumanProtocol: mp,
  skaleNebula: bp,
  skaleNebulaTestnet: fp,
  skaleRazor: gp,
  skaleTitan: yp,
  skaleTitanTestnet: wp,
  songbird: Mp,
  songbirdTestnet: xp,
  spicy: Ip,
  syscoin: Ep,
  syscoinTestnet: Cp,
  taikoJolnir: Dp,
  taikoTestnetSepolia: jp,
  taraxa: Np,
  taraxaTestnet: Tp,
  telos: vp,
  telosTestnet: zp,
  tenet: Sp,
  thunderTestnet: Op,
  vechain: Lp,
  wanchain: Pp,
  wanchainTestnet: Up,
  wemix: Bp,
  wemixTestnet: Qp,
  xdc: Fp,
  xdcTestnet: Gp,
  zetachainAthensTestnet: $p,
  zhejiang: Yp,
  zilliqa: _p,
  zilliqaTestnet: eh,
  zkFair: Rp,
  zkFairTestnet: Wp,
  zkSync: Kp,
  zkSyncSepoliaTestnet: qp,
  zkSyncTestnet: Xp,
  zora: th,
  zoraSepolia: nh,
  zoraTestnet: rh
}, Symbol.toStringTag, { value: "Module" })), jh = {
  id: 787,
  name: "Acala",
  network: "acala",
  nativeCurrency: { name: "Acala Token", symbol: "ACA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://eth-rpc-acala.aca-api.network"] },
    public: { http: ["https://eth-rpc-acala.aca-api.network"] }
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://blockscout.acala.network" }
  }
}, Th = {
  id: 597,
  name: "Acala Testnet",
  network: "acala-testnet",
  nativeCurrency: { name: "Acala Token", symbol: "ACA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://acala-dev.aca-dev.network/eth/http"] },
    public: { http: ["https://acala-dev.aca-dev.network/eth/http"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.acala-dev.aca-dev.network"
    }
  }
}, vh = {
  id: 686,
  name: "Karura",
  network: "karura",
  nativeCurrency: { name: "Karura Token", symbol: "KAR", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://eth-rpc-karura.aca-api.network"] },
    public: { http: ["https://eth-rpc-karura.aca-api.network"] }
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://blockscout.karura.network" }
  }
}, zh = {
  id: 596,
  name: "Karura Testnet",
  network: "karura-testnet",
  nativeCurrency: { name: "Karura Token", symbol: "KAR", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://karura-dev.aca-dev.network/eth/http"] },
    public: { http: ["https://karura-dev.aca-dev.network/eth/http"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.karura-dev.aca-dev.network"
    }
  }
}, Sh = {
  id: 42262,
  name: "Emerald Paratime Mainnet",
  network: "emerald-testnet",
  nativeCurrency: { name: "Emerald Rose", symbol: "ROSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://emerald.oasis.dev"] },
    public: { http: ["https://emerald.oasis.dev"] }
  },
  blockExplorers: {
    default: { name: "Oasis", url: "https://explorer.emerald.oasis.dev" }
  }
}, Oh = {
  id: 42261,
  name: "Emerald Paratime Testnet",
  network: "emerald-testnet",
  nativeCurrency: { name: "Emerald Rose", symbol: "ROSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet.emerald.oasis.dev"] },
    public: { http: ["https://testnet.emerald.oasis.dev"] }
  },
  blockExplorers: {
    default: {
      name: "Oasis",
      url: "https://testnet.explorer.emerald.oasis.dev"
    }
  }
}, Lh = {
  id: 81457,
  name: "Blast Mainnet",
  network: "blast-mainnet",
  nativeCurrency: { name: "Blast Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.blast.io"] },
    public: { http: ["	https://rpc.blast.io"] }
  },
  blockExplorers: {
    default: {
      name: "Blast",
      url: "https://blastscan.io"
    }
  }
}, Ph = {
  id: 168587773,
  name: "Blast Sepolia",
  network: "blast-repolia",
  nativeCurrency: { name: "Blast Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://sepolia.blast.io"] },
    public: { http: ["https://sepolia.blast.io"] }
  },
  blockExplorers: {
    default: {
      name: "Blast Sepolia Explorer",
      url: "https://sepolia.blastexplorer.io"
    }
  }
}, Uh = {
  id: 534352,
  name: "Scroll",
  network: "scroll",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/scroll"]
    },
    public: {
      http: ["https://rpc.ankr.com/scroll"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com"
    }
  }
}, Bh = {
  id: 534351,
  name: "Scroll Sepolia",
  network: "scroll-sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/scroll_sepolia_testnet"]
    },
    public: {
      http: ["https://rpc.ankr.com/scroll_sepolia_testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://sepolia.scrollscan.com"
    }
  },
  testnet: !0
}, Qh = {
  id: 196,
  name: "X Layer",
  network: "xlayer-mainnet",
  nativeCurrency: { name: "OKB", symbol: "OKB", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.xlayer.tech"]
    },
    public: {
      http: ["https://rpc.xlayer.tech"]
    }
  },
  blockExplorers: {
    default: {
      name: "X Layer Explorer",
      url: "https://www.okx.com/web3/explorer/xlayer"
    }
  }
}, Fh = {
  id: 195,
  name: "X Layer Testnet",
  network: "xlayer-testnet",
  nativeCurrency: { name: "OKB", symbol: "OKB", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testrpc.xlayer.tech"]
    },
    public: {
      http: ["https://testrpc.xlayer.tech"]
    }
  },
  blockExplorers: {
    default: {
      name: "X Layer Testnet Explorer",
      url: "https://www.okx.com/web3/explorer/xlayer-test"
    }
  },
  testnet: !0
}, fa = [
  ...Object.values(Dh),
  jh,
  Th,
  Lh,
  Ph,
  Sh,
  Oh,
  vh,
  zh,
  Uh,
  Bh,
  Qh,
  Fh
], Gh = {
  ethereum: 1,
  bsc: 56,
  polygon: 137,
  avalanche: 43114,
  oasis: 42262,
  aurora: 1313161554,
  fantom: 250,
  karura: 686,
  acala: 787,
  klaytn: 8217,
  celo: 42220,
  neon: 245022934,
  arbitrum: 42161,
  moonbeam: 1284,
  optimism: 10,
  gnosis: 100,
  base: 8453,
  scroll: 534352,
  blast: 81457,
  xlayer: 196
}, ga = {
  ethereum: 5,
  bsc: 97,
  polygon: 80001,
  avalanche: 43113,
  oasis: 42261,
  aurora: 1313161555,
  fantom: 4002,
  karura: 596,
  acala: 597,
  klaytn: 1001,
  celo: 44787,
  neon: 245022926,
  arbitrum: 421613,
  optimism: 420,
  moonbeam: 1287,
  base: 84531,
  scroll: 534351,
  blast: 168587773,
  xlayer: 195
}, ya = (e) => Object.entries(e).reduce((t, [n, r]) => Object.assign(t, { [r]: n }), {}), Yh = ya(Gh), Rh = ya(ga);
function Wh(e, t = "MAINNET") {
  let n;
  if (t === "MAINNET" && (n = Yh[e]), t === "TESTNET" && (n = Rh[e]), n === void 0)
    throw new Error(`No chain found for evm chain id ${e}`);
  return Na[n];
}
function Kr(e) {
  return Object.values(ga).includes(e);
}
var Ve;
(function(e) {
  e[e.USER_REJECTED = 4001] = "USER_REJECTED", e[e.CHAIN_NOT_ADDED = 4902] = "CHAIN_NOT_ADDED";
})(Ve || (Ve = {}));
var Ot;
(function(e) {
  e.BitgetWallet = "bitgetwallet", e.Coinbase = "coinbase", e.Injected = "injected", e.Ledger = "ledger", e.Metamask = "metamask", e.OKXWallet = "okxwallet", e.WalletConnect = "walletconnect";
})(Ot || (Ot = {}));
class Hh extends Error {
  constructor(t, n, r) {
    super(t), this.code = n, this.stack = r;
  }
}
class wa extends Da {
  constructor(t = {}) {
    super(), this.addresses = [], this.switchingChain = !1, this.chains = t.chains || fa, this.autoSwitch = t.autoSwitch || !1, this.connectorOptions = t.connectorOptions || {}, this.config = t, this.connector = this.createConnector();
  }
  async connect({ evmChainId: t } = {}) {
    const { publicClient: n } = wh(this.chains, [Nh()]);
    return this.wagmiConfig = Ch({
      publicClient: n,
      autoConnect: !1,
      connectors: [this.connector]
    }), await this.connector.connect({
      chainId: t || this.config.preferredChain
    }), this.provider = new ja(await this.connector.getProvider(), "any"), this.connector.on("change", this.onChange.bind(this)), this.connector.on("disconnect", this.onDisconnect.bind(this)), this.network = await this.fetchNetworkInfo(), this.address = await this.connector.getAccount(), this.addresses = [this.address], this.emit("connect"), this.addresses;
  }
  async enforcePrefferedChain() {
    var n, r;
    if (!this.config.preferredChain)
      return;
    if (!this.connector.switchChain)
      throw new Ar();
    let t = (n = this.getNetworkInfo()) == null ? void 0 : n.chainId;
    for (; t !== this.config.preferredChain; )
      try {
        await this.connector.switchChain(this.config.preferredChain), t = (r = this.getNetworkInfo()) == null ? void 0 : r.chainId;
      } catch (s) {
        const { code: a } = s;
        if (a === Ve.USER_REJECTED)
          return;
        throw s;
      }
  }
  async onChange(t) {
    t.chain && await this.onChainChanged(), t.account && await this.onAccountsChanged([t.account]);
  }
  /**
   * @description Change the preferred evm chain. Calling this method will automatically trigger a switch to the new chain request.
   *
   * @param chainId The new evm chain id
   */
  async setPrefferedChain(t) {
    this.config.preferredChain = t, await this.enforcePrefferedChain();
  }
  isConnected() {
    return !!this.provider;
  }
  async disconnect() {
    var t;
    await ((t = this.connector) == null ? void 0 : t.disconnect()), await this.onDisconnect();
  }
  getChainId() {
    if (!this.isConnected() || !this.network)
      return Ta;
    const t = this.network.chainId, n = Kr(t) ? "TESTNET" : "MAINNET";
    return Wh(t, n);
  }
  getNetworkInfo() {
    return this.network;
  }
  getAddress() {
    return this.address;
  }
  getAddresses() {
    return this.addresses;
  }
  setMainAddress(t) {
    if (!this.addresses.includes(t))
      throw new Error("Unknown address");
    this.address = t;
  }
  async signTransaction(t) {
    if (!this.isConnected())
      throw new oe();
    return await this.enforcePrefferedChain(), Promise.resolve(t);
  }
  async sendTransaction(t) {
    if (!this.isConnected())
      throw new oe();
    await this.enforcePrefferedChain();
    const r = await (await this.getSigner().sendTransaction(t)).wait(this.config.confirmations);
    return {
      id: r.transactionHash,
      data: r
    };
  }
  async signAndSendTransaction(t) {
    return this.sendTransaction(t);
  }
  async signMessage(t) {
    if (!this.isConnected())
      throw new oe();
    await this.enforcePrefferedChain();
    const n = await this.getSigner().signMessage(t);
    return new Uint8Array(dn.Buffer.from(n.substring(2), "hex"));
  }
  /**
   * @description Try to switch the evm chain the wallet is connected to through the {@link https://eips.ethereum.org/EIPS/eip-3326 EIP-3326} `wallet_switchEthereumChain` method, or throw if the wallet does not support it.
   * Should the chain be missing from the provider, it will try to add it through the {@link https://eips.ethereum.org/EIPS/eip-3085 EIP-3085} `wallet_addEthereumChain` method, using the information stored in the map `chainParameters` injected through the constructor.
   * If a switch chain request is already in progress, it will ignore the new request and return without doing anything.
   *
   * @param ethChainId The EVM chain id of the chain to switch to
   */
  async switchChain(t) {
    var n;
    if (!this.isConnected())
      throw new oe();
    if (!((n = this.connector) != null && n.switchChain))
      throw new Ar();
    if (!this.switchingChain)
      try {
        this.switchingChain = !0, await this.connector.switchChain(t), this.network = await this.fetchNetworkInfo();
      } catch (r) {
        if (r.code === Ve.CHAIN_NOT_ADDED) {
          await this.addChain(t);
          return;
        }
        throw r;
      } finally {
        this.switchingChain = !1;
      }
  }
  /**
   * @description Try to add a new chain to the wallet through the {@link https://eips.ethereum.org/EIPS/eip-3085 EIP-3085} `wallet_addEthereumChain` method.
   * The chain information is looked up in the configured `chains` array.
   */
  async addChain(t) {
    var r;
    if (!this.provider)
      throw new oe();
    const n = this.chains.find((s) => s.id === t);
    if (!n)
      throw new Hh(`Chain ${t} not configured`, Ve.CHAIN_NOT_ADDED);
    return await this.provider.send("wallet_addEthereumChain", [
      {
        chainId: va(n.id),
        chainName: n.name,
        nativeCurrency: n.nativeCurrency,
        rpcUrls: [((r = n.rpcUrls.public) == null ? void 0 : r.http[0]) ?? ""],
        blockExplorerUrls: this.getBlockExplorerUrls(n)
      }
    ]);
  }
  /**
   * @description Try to add a new token to the wallet through the {@link https://eips.ethereum.org/EIPS/eip-747 EIP-747} `wallet_watchAsset` method.
   *
   * @param params The observed asset's information
   * @returns True if the request is recognized by the wallet, false otherwise. If the wallet does not support this method, it will always return false.
   */
  async watchAsset(t) {
    if (!this.provider)
      throw new oe();
    if (this.connector.watchAsset)
      return this.connector.watchAsset(t.options);
    try {
      return await this.provider.send("wallet_watchAsset", t), !0;
    } catch {
      return !1;
    }
  }
  getBlockExplorerUrls(t) {
    const { default: n, ...r } = t.blockExplorers ?? {};
    if (n)
      return [
        n.url,
        ...Object.values(r).map((s) => s.url)
      ];
  }
  /**
   * Retrieve the underlying Web3Provider
   *
   * @returns {ethers.providers.Web3Provider} Returns the underlying ethers.js Web3Provider if connected, or undefined if not
   */
  getProvider() {
    return this.provider;
  }
  /**
   * Retrieve the underlying Signer.
   *
   * @returns {ethers.Signer} Returns the underlying ethers.js Signer if connected, or undefined if not
   */
  getSigner() {
    if (!this.provider)
      throw new oe();
    return this.provider.getSigner(this.address);
  }
  getWalletState() {
    return this.connector.ready ? kr.Loadable : kr.NotDetected;
  }
  async getBalance(t) {
    if (!this.isConnected())
      throw new oe();
    const n = this.getSigner();
    if (!n)
      throw new Error("Signer not found");
    if (t) {
      const s = new za(t, [
        "function balanceOf(address) view returns (uint)",
        "function decimals() public view returns (uint8)"
      ], n), a = await s.decimals(), o = await s.balanceOf(t);
      return Sa(o, a);
    }
    const r = await n.getBalance();
    return Oa(r);
  }
  async onChainChanged() {
    this.autoSwitch && await this.enforcePrefferedChain(), this.network = await this.fetchNetworkInfo(), this.emit("networkChanged");
  }
  async onAccountsChanged(t) {
    if (!t.length)
      return this.disconnect();
    this.address = await this.connector.getAccount(), this.emit("accountsChanged", t);
  }
  async onDisconnect() {
    var t;
    this.connector.removeAllListeners(), await ((t = this.wagmiConfig) == null ? void 0 : t.destroy()), this.wagmiConfig = void 0, this.emit("disconnect");
  }
  async fetchNetworkInfo() {
    if (this.isConnected())
      return {
        chainId: await this.connector.getChainId()
      };
  }
  parseEvmChainId(t) {
    return La(t) ? parseInt(t.toString().substring(2), 16) : t;
  }
  getFeatures() {
    return Object.values(Pa);
  }
  supportsChain(t) {
    return Kr(t) || Ua(t);
  }
}
var j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.getLocalStorage = j.getLocalStorageOrThrow = j.getCrypto = j.getCryptoOrThrow = j.getLocation = j.getLocationOrThrow = j.getNavigator = j.getNavigatorOrThrow = j.getDocument = j.getDocumentOrThrow = j.getFromWindowOrThrow = j.getFromWindow = void 0;
function Me(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
j.getFromWindow = Me;
function Fe(e) {
  const t = Me(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
j.getFromWindowOrThrow = Fe;
function Zh() {
  return Fe("document");
}
j.getDocumentOrThrow = Zh;
function Vh() {
  return Me("document");
}
j.getDocument = Vh;
function Jh() {
  return Fe("navigator");
}
j.getNavigatorOrThrow = Jh;
function Kh() {
  return Me("navigator");
}
j.getNavigator = Kh;
function Xh() {
  return Fe("location");
}
j.getLocationOrThrow = Xh;
function qh() {
  return Me("location");
}
j.getLocation = qh;
function $h() {
  return Fe("crypto");
}
j.getCryptoOrThrow = $h;
function _h() {
  return Me("crypto");
}
j.getCrypto = _h;
function em() {
  return Fe("localStorage");
}
j.getLocalStorageOrThrow = em;
function tm() {
  return Me("localStorage");
}
j.getLocalStorage = tm;
var fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.getWindowMetadata = void 0;
const Xr = j;
function nm() {
  let e, t;
  try {
    e = Xr.getDocumentOrThrow(), t = Xr.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const d = e.getElementsByTagName("link"), h = [];
    for (let f = 0; f < d.length; f++) {
      const p = d[f], b = p.getAttribute("rel");
      if (b && b.toLowerCase().indexOf("icon") > -1) {
        const g = p.getAttribute("href");
        if (g)
          if (g.toLowerCase().indexOf("https:") === -1 && g.toLowerCase().indexOf("http:") === -1 && g.indexOf("//") !== 0) {
            let w = t.protocol + "//" + t.host;
            if (g.indexOf("/") === 0)
              w += g;
            else {
              const y = t.pathname.split("/");
              y.pop();
              const M = y.join("/");
              w += M + "/" + g;
            }
            h.push(w);
          } else if (g.indexOf("//") === 0) {
            const w = t.protocol + g;
            h.push(w);
          } else
            h.push(g);
      }
    }
    return h;
  }
  function r(...d) {
    const h = e.getElementsByTagName("meta");
    for (let f = 0; f < h.length; f++) {
      const p = h[f], b = ["itemprop", "property", "name"].map((g) => p.getAttribute(g)).filter((g) => g ? d.includes(g) : !1);
      if (b.length && b) {
        const g = p.getAttribute("content");
        if (g)
          return g;
      }
    }
    return "";
  }
  function s() {
    let d = r("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = e.title), d;
  }
  function a() {
    return r("description", "og:description", "twitter:description", "keywords");
  }
  const o = s(), i = a(), c = t.origin, l = n();
  return {
    description: i,
    url: c,
    icons: l,
    name: o
  };
}
fr.getWindowMetadata = nm;
function un(e = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e, ...t])];
}
var rm = Object.defineProperty, sm = Object.defineProperties, am = Object.getOwnPropertyDescriptors, qr = Object.getOwnPropertySymbols, om = Object.prototype.hasOwnProperty, im = Object.prototype.propertyIsEnumerable, $r = (e, t, n) => t in e ? rm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cm = (e, t) => {
  for (var n in t || (t = {}))
    om.call(t, n) && $r(e, n, t[n]);
  if (qr)
    for (var n of qr(t))
      im.call(t, n) && $r(e, n, t[n]);
  return e;
}, lm = (e, t) => sm(e, am(t));
function Ma(e) {
  return e.includes(":");
}
function um(e) {
  return Ma(e) ? e.split(":")[0] : e;
}
function xa(e) {
  var t, n, r;
  const s = {};
  if (!dm(e))
    return s;
  for (const [a, o] of Object.entries(e)) {
    const i = Ma(a) ? [a] : o.chains, c = o.methods || [], l = o.events || [], u = um(a);
    s[u] = lm(cm({}, s[u]), { chains: un(i, (t = s[u]) == null ? void 0 : t.chains), methods: un(c, (n = s[u]) == null ? void 0 : n.methods), events: un(l, (r = s[u]) == null ? void 0 : r.events) });
  }
  return s;
}
function dm(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
var Ia = "eip155", pm = "store", Aa = "requestedChains", Sn = "wallet_addEthereumChain", S, Je, Dt, On, gr, ka, jt, Ln, Pn, Ea, Lt, yr, Ae, He, Pt, wr, Ut, Mr, Bt, xr, hm = class extends ha {
  constructor(e) {
    super({
      ...e,
      options: { isNewChainsStale: !0, ...e.options }
    }), J(this, Dt), J(this, gr), J(this, jt), J(this, Pn), J(this, Lt), J(this, Ae), J(this, Pt), J(this, Ut), J(this, Bt), this.id = "walletConnect", this.name = "WalletConnect", this.ready = !0, J(this, S, void 0), J(this, Je, void 0), this.onAccountsChanged = (t) => {
      t.length === 0 ? this.emit("disconnect") : this.emit("change", { account: fe(t[0]) });
    }, this.onChainChanged = (t) => {
      const n = Number(t), r = this.isChainUnsupported(n);
      this.emit("change", { chain: { id: n, unsupported: r } });
    }, this.onDisconnect = () => {
      U(this, Ae, He).call(this, []), this.emit("disconnect");
    }, this.onDisplayUri = (t) => {
      this.emit("message", { type: "display_uri", data: t });
    }, this.onConnect = () => {
      this.emit("connect", {});
    }, U(this, Dt, On).call(this);
  }
  async connect({ chainId: e, pairingTopic: t } = {}) {
    var n, r, s, a, o;
    try {
      let i = e;
      if (!i) {
        const p = (n = this.storage) == null ? void 0 : n.getItem(pm), b = (a = (s = (r = p == null ? void 0 : p.state) == null ? void 0 : r.data) == null ? void 0 : s.chain) == null ? void 0 : a.id;
        b && !this.isChainUnsupported(b) ? i = b : i = (o = this.chains[0]) == null ? void 0 : o.id;
      }
      if (!i)
        throw new Error("No chains found on connector.");
      const c = await this.getProvider();
      U(this, Pn, Ea).call(this);
      const l = U(this, jt, Ln).call(this);
      if (c.session && l && await c.disconnect(), !c.session || l) {
        const p = this.chains.filter((b) => b.id !== i).map((b) => b.id);
        this.emit("message", { type: "connecting" }), await c.connect({
          pairingTopic: t,
          optionalChains: [i, ...p]
        }), U(this, Ae, He).call(this, this.chains.map(({ id: b }) => b));
      }
      const u = await c.enable(), d = fe(u[0]), h = await this.getChainId(), f = this.isChainUnsupported(h);
      return {
        account: d,
        chain: { id: h, unsupported: f }
      };
    } catch (i) {
      throw /user rejected/i.test(i == null ? void 0 : i.message) ? new K(i) : i;
    }
  }
  async disconnect() {
    const e = await this.getProvider();
    try {
      await e.disconnect();
    } catch (t) {
      if (!/No matching key/i.test(t.message))
        throw t;
    } finally {
      U(this, Lt, yr).call(this), U(this, Ae, He).call(this, []);
    }
  }
  async getAccount() {
    const { accounts: e } = await this.getProvider();
    return fe(e[0]);
  }
  async getChainId() {
    const { chainId: e } = await this.getProvider();
    return e;
  }
  async getProvider({ chainId: e } = {}) {
    return z(this, S) || await U(this, Dt, On).call(this), e && await this.switchChain(e), z(this, S);
  }
  async getWalletClient({
    chainId: e
  } = {}) {
    const [t, n] = await Promise.all([
      this.getProvider({ chainId: e }),
      this.getAccount()
    ]), r = this.chains.find((s) => s.id === e);
    if (!t)
      throw new Error("provider is required.");
    return oa({
      account: n,
      chain: r,
      transport: Gs(t)
    });
  }
  async isAuthorized() {
    try {
      const [e, t] = await Promise.all([
        this.getAccount(),
        this.getProvider()
      ]), n = U(this, jt, Ln).call(this);
      if (!e)
        return !1;
      if (n && t.session) {
        try {
          await t.disconnect();
        } catch {
        }
        return !1;
      }
      return !0;
    } catch {
      return !1;
    }
  }
  async switchChain(e) {
    var n, r;
    const t = this.chains.find((s) => s.id === e);
    if (!t)
      throw new Te(new Error("chain not found on connector."));
    try {
      const s = await this.getProvider(), a = U(this, Ut, Mr).call(this), o = U(this, Bt, xr).call(this);
      if (!a.includes(e) && o.includes(Sn)) {
        await s.request({
          method: Sn,
          params: [
            {
              chainId: D(t.id),
              blockExplorerUrls: [(r = (n = t.blockExplorers) == null ? void 0 : n.default) == null ? void 0 : r.url],
              chainName: t.name,
              nativeCurrency: t.nativeCurrency,
              rpcUrls: [...t.rpcUrls.default.http]
            }
          ]
        });
        const c = U(this, Pt, wr).call(this);
        c.push(e), U(this, Ae, He).call(this, c);
      }
      return await s.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: D(e) }]
      }), t;
    } catch (s) {
      const a = typeof s == "string" ? s : s == null ? void 0 : s.message;
      throw /user rejected request/i.test(a) ? new K(s) : new Te(s);
    }
  }
};
S = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakSet();
On = async function() {
  return !z(this, Je) && typeof window < "u" && mr(this, Je, U(this, gr, ka).call(this)), z(this, Je);
};
gr = /* @__PURE__ */ new WeakSet();
ka = async function() {
  const { EthereumProvider: e } = await import("./index.es-DME5NzZR.mjs"), t = this.chains.map(({ id: n }) => n);
  if (t.length) {
    const {
      projectId: n,
      showQrModal: r = !0,
      qrModalOptions: s,
      metadata: a,
      relayUrl: o
    } = this.options;
    mr(this, S, await e.init({
      showQrModal: r,
      qrModalOptions: s,
      projectId: n,
      optionalChains: t,
      rpcMap: Object.fromEntries(
        this.chains.map((i) => [
          i.id,
          i.rpcUrls.default.http[0]
        ])
      ),
      metadata: a,
      relayUrl: o
    }));
  }
};
jt = /* @__PURE__ */ new WeakSet();
Ln = function() {
  if (U(this, Bt, xr).call(this).includes(Sn) || !this.options.isNewChainsStale)
    return !1;
  const t = U(this, Pt, wr).call(this), n = this.chains.map(({ id: s }) => s), r = U(this, Ut, Mr).call(this);
  return r.length && !r.some((s) => n.includes(s)) ? !1 : !n.every((s) => t.includes(s));
};
Pn = /* @__PURE__ */ new WeakSet();
Ea = function() {
  z(this, S) && (U(this, Lt, yr).call(this), z(this, S).on("accountsChanged", this.onAccountsChanged), z(this, S).on("chainChanged", this.onChainChanged), z(this, S).on("disconnect", this.onDisconnect), z(this, S).on("session_delete", this.onDisconnect), z(this, S).on("display_uri", this.onDisplayUri), z(this, S).on("connect", this.onConnect));
};
Lt = /* @__PURE__ */ new WeakSet();
yr = function() {
  z(this, S) && (z(this, S).removeListener("accountsChanged", this.onAccountsChanged), z(this, S).removeListener("chainChanged", this.onChainChanged), z(this, S).removeListener("disconnect", this.onDisconnect), z(this, S).removeListener("session_delete", this.onDisconnect), z(this, S).removeListener("display_uri", this.onDisplayUri), z(this, S).removeListener("connect", this.onConnect));
};
Ae = /* @__PURE__ */ new WeakSet();
He = function(e) {
  var t;
  (t = this.storage) == null || t.setItem(Aa, e);
};
Pt = /* @__PURE__ */ new WeakSet();
wr = function() {
  var e;
  return ((e = this.storage) == null ? void 0 : e.getItem(Aa)) ?? [];
};
Ut = /* @__PURE__ */ new WeakSet();
Mr = function() {
  var r, s, a;
  if (!z(this, S))
    return [];
  const e = (r = z(this, S).session) == null ? void 0 : r.namespaces;
  return e ? ((a = (s = xa(e)[Ia]) == null ? void 0 : s.chains) == null ? void 0 : a.map(
    (o) => parseInt(o.split(":")[1] || "")
  )) ?? [] : [];
};
Bt = /* @__PURE__ */ new WeakSet();
xr = function() {
  var r, s;
  if (!z(this, S))
    return [];
  const e = (r = z(this, S).session) == null ? void 0 : r.namespaces;
  return e ? ((s = xa(e)[Ia]) == null ? void 0 : s.methods) ?? [] : [];
};
class mm extends wa {
  getName() {
    return "WalletConnect";
  }
  getUrl() {
    return "https://walletconnect.org";
  }
  getIcon() {
    return "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHdpZHRoPSI0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0ibTAgMGg0MDB2NDAwaC00MDB6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgZmlsbD0iIzMzOTZmZiIgcj0iMTk5LjUiIHN0cm9rZT0iIzY2YjFmZiIvPjxwYXRoIGQ9Im0xMjIuNTE5IDE0OC45NjVjNDIuNzkxLTQxLjcyOSAxMTIuMTcxLTQxLjcyOSAxNTQuOTYyIDBsNS4xNSA1LjAyMmMyLjE0IDIuMDg2IDIuMTQgNS40NjkgMCA3LjU1NWwtMTcuNjE3IDE3LjE4Yy0xLjA3IDEuMDQzLTIuODA0IDEuMDQzLTMuODc0IDBsLTcuMDg3LTYuOTExYy0yOS44NTMtMjkuMTExLTc4LjI1My0yOS4xMTEtMTA4LjEwNiAwbC03LjU5IDcuNDAxYy0xLjA3IDEuMDQzLTIuODA0IDEuMDQzLTMuODc0IDBsLTE3LjYxNy0xNy4xOGMtMi4xNC0yLjA4Ni0yLjE0LTUuNDY5IDAtNy41NTV6bTE5MS4zOTcgMzUuNTI5IDE1LjY3OSAxNS4yOWMyLjE0IDIuMDg2IDIuMTQgNS40NjkgMCA3LjU1NWwtNzAuNyA2OC45NDRjLTIuMTM5IDIuMDg3LTUuNjA4IDIuMDg3LTcuNzQ4IDBsLTUwLjE3OC00OC45MzFjLS41MzUtLjUyMi0xLjQwMi0uNTIyLTEuOTM3IDBsLTUwLjE3OCA0OC45MzFjLTIuMTM5IDIuMDg3LTUuNjA4IDIuMDg3LTcuNzQ4IDBsLTcwLjcwMTUtNjguOTQ1Yy0yLjEzOTYtMi4wODYtMi4xMzk2LTUuNDY5IDAtNy41NTVsMTUuNjc5NS0xNS4yOWMyLjEzOTYtMi4wODYgNS42MDg1LTIuMDg2IDcuNzQ4MSAwbDUwLjE3ODkgNDguOTMyYy41MzUuNTIyIDEuNDAyLjUyMiAxLjkzNyAwbDUwLjE3Ny00OC45MzJjMi4xMzktMi4wODcgNS42MDgtMi4wODcgNy43NDggMGw1MC4xNzkgNDguOTMyYy41MzUuNTIyIDEuNDAyLjUyMiAxLjkzNyAwbDUwLjE3OS00OC45MzFjMi4xMzktMi4wODcgNS42MDgtMi4wODcgNy43NDggMHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+";
  }
  static getWalletType() {
    return Ot.WalletConnect;
  }
}
class bm extends mm {
  constructor(t = {}) {
    super(t);
  }
  createConnector() {
    return new hm({
      chains: this.chains,
      options: this.connectorOptions
    });
  }
}
var T;
(function(e) {
  e.MetaMask = "MetaMask", e.BitgetWallet = "Bitget Wallet", e.BraveWallet = "Brave Wallet", e.KuCoinWallet = "KuCoin Wallet", e.CoinbaseWallet = "Coinbase Wallet", e.FrontierWallet = "Frontier Wallet", e.BitKeepWallet = "BitKeep", e.OKXWallet = "OKX Wallet", e.RabbyWallet = "Rabby Wallet", e.Generic = "Injected Wallet", e.OktoWallet = "Okto Wallet";
})(T || (T = {}));
const _r = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAxOSAoNjQtQml0KSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKdmlld0JveD0iMCAwIDc4NC4zNyAxMjc3LjM5IgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNDIxMzk0MzQyNDAwIj4KICAgPGc+CiAgICA8cG9seWdvbiBmaWxsPSIjMzQzNDM0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMzkyLjA3LDAgMzgzLjUsMjkuMTEgMzgzLjUsODczLjc0IDM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM4QzhDOEMiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIzOTIuMDcsMCAtMCw2NTAuNTQgMzkyLjA3LDg4Mi4yOSAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzNDM0MzQiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw5NTYuNTIgMzg3LjI0LDk2Mi40MSAzODcuMjQsMTI2My4yOCAzOTIuMDcsMTI3Ny4zOCA3ODQuMzcsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzhDOEM4QyIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNywxMjc3LjM4IDM5Mi4wNyw5NTYuNTIgLTAsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzE0MTQxNCIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzM5MzkzOSIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjAsNjUwLjU0IDM5Mi4wNyw4ODIuMjkgMzkyLjA3LDQ3Mi4zMyAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==";
class fm extends wa {
  constructor(t = {}) {
    super(t), this.config = t;
  }
  createConnector() {
    const t = this.config.name ? Object.assign({}, this.connectorOptions, { name: this.config.name }) : this.connectorOptions;
    return new ma({
      chains: this.chains,
      options: t
    });
  }
  getName() {
    const t = this.connector.name;
    return t === T.BitKeepWallet ? T.BitgetWallet : t === "Injected" || this.config.showAsGeneric ? this.config.genericName || T.Generic : t;
  }
  getUrl() {
    if (this.config.showAsGeneric)
      return this.config.genericUrl || "https://ethereum.org/";
    switch (this.getName()) {
      case T.MetaMask:
        return "https://metamask.io/";
      case T.BitgetWallet:
        return "https://web3.bitget.com/";
      case T.BraveWallet:
        return "https://brave.com/";
      case T.KuCoinWallet:
        return "https://kuwallet.com/";
      case T.FrontierWallet:
        return "https://www.frontier.xyz/";
      case T.BitKeepWallet:
        return "https://bitkeep.com/";
      case T.OKXWallet:
        return "https://www.okx.com/web3/";
      case T.RabbyWallet:
        return "https://rabby.io/";
      case T.OktoWallet:
        return "https://okto.tech/";
      default:
        return "https://ethereum.org/";
    }
  }
  getIcon() {
    if (this.config.showAsGeneric)
      return this.config.genericIcon || _r;
    switch (this.getName()) {
      case T.MetaMask:
        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOmV2PSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzE4LjYgMzE4LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxOC42IDMxOC42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0UyNzYxQjtzdHJva2U6I0UyNzYxQjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MXtmaWxsOiNFNDc2MUI7c3Ryb2tlOiNFNDc2MUI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDJ7ZmlsbDojRDdDMUIzO3N0cm9rZTojRDdDMUIzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Qze2ZpbGw6IzIzMzQ0NztzdHJva2U6IzIzMzQ0NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0NHtmaWxsOiNDRDYxMTY7c3Ryb2tlOiNDRDYxMTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDV7ZmlsbDojRTQ3NTFGO3N0cm9rZTojRTQ3NTFGO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q2e2ZpbGw6I0Y2ODUxQjtzdHJva2U6I0Y2ODUxQjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0N3tmaWxsOiNDMEFEOUU7c3Ryb2tlOiNDMEFEOUU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDh7ZmlsbDojMTYxNjE2O3N0cm9rZTojMTYxNjE2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q5e2ZpbGw6Izc2M0QxNjtzdHJva2U6Izc2M0QxNjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjI3NC4xLDM1LjUgMTc0LjYsMTA5LjQgMTkzLDY1LjggIi8+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI0NC40LDM1LjUgMTQzLjEsMTEwLjEgMTI1LjYsNjUuOCAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIzOC4zLDIwNi44IDIxMS44LDI0Ny40IDI2OC41LDI2MyAyODQuOCwyMDcuNyAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMzLjksMjA3LjcgNTAuMSwyNjMgMTA2LjgsMjQ3LjQgODAuMywyMDYuOCAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjEwMy42LDEzOC4yIDg3LjgsMTYyLjEgMTQ0LjEsMTY0LjYgMTQyLjEsMTA0LjEgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTQuOSwxMzguMiAxNzUuOSwxMDMuNCAxNzQuNiwxNjQuNiAyMzAuOCwxNjIuMSAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjEwNi44LDI0Ny40IDE0MC42LDIzMC45IDExMS40LDIwOC4xICAiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTc3LjksMjMwLjkgMjExLjgsMjQ3LjQgMjA3LjEsMjA4LjEgICIvPgo8L2c+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIyMTEuOCwyNDcuNCAxNzcuOSwyMzAuOSAxODAuNiwyNTMgMTgwLjMsMjYyLjMgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxMDYuOCwyNDcuNCAxMzguMywyNjIuMyAxMzguMSwyNTMgMTQwLjYsMjMwLjkgICIvPgo8L2c+Cjxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMTM4LjgsMTkzLjUgMTEwLjYsMTg1LjIgMTMwLjUsMTc2LjEgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMTc5LjcsMTkzLjUgMTg4LDE3Ni4xIDIwOCwxODUuMiAiLz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjEwNi44LDI0Ny40IDExMS42LDIwNi44IDgwLjMsMjA3LjcgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyMDcsMjA2LjggMjExLjgsMjQ3LjQgMjM4LjMsMjA3LjcgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyMzAuOCwxNjIuMSAxNzQuNiwxNjQuNiAxNzkuOCwxOTMuNSAxODguMSwxNzYuMSAyMDguMSwxODUuMiAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjExMC42LDE4NS4yIDEzMC42LDE3Ni4xIDEzOC44LDE5My41IDE0NC4xLDE2NC42IDg3LjgsMTYyLjEgICIvPgo8L2c+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSI4Ny44LDE2Mi4xIDExMS40LDIwOC4xIDExMC42LDE4NS4yICAiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjA4LjEsMTg1LjIgMjA3LjEsMjA4LjEgMjMwLjgsMTYyLjEgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxNDQuMSwxNjQuNiAxMzguOCwxOTMuNSAxNDUuNCwyMjcuNiAxNDYuOSwxODIuNyAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjE3NC42LDE2NC42IDE3MS45LDE4Mi42IDE3My4xLDIyNy42IDE3OS44LDE5My41ICAiLz4KPC9nPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE3OS44LDE5My41IDE3My4xLDIyNy42IDE3Ny45LDIzMC45IDIwNy4xLDIwOC4xIDIwOC4xLDE4NS4yICIvPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjExMC42LDE4NS4yIDExMS40LDIwOC4xIDE0MC42LDIzMC45IDE0NS40LDIyNy42IDEzOC44LDE5My41ICIvPgo8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjE4MC4zLDI2Mi4zIDE4MC42LDI1MyAxNzguMSwyNTAuOCAxNDAuNCwyNTAuOCAxMzguMSwyNTMgMTM4LjMsMjYyLjMgMTA2LjgsMjQ3LjQgMTE3LjgsMjU2LjQgICAxNDAuMSwyNzEuOSAxNzguNCwyNzEuOSAyMDAuOCwyNTYuNCAyMTEuOCwyNDcuNCAiLz4KPHBvbHlnb24gY2xhc3M9InN0OCIgcG9pbnRzPSIxNzcuOSwyMzAuOSAxNzMuMSwyMjcuNiAxNDUuNCwyMjcuNiAxNDAuNiwyMzAuOSAxMzguMSwyNTMgMTQwLjQsMjUwLjggMTc4LjEsMjUwLjggMTgwLjYsMjUzICIvPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDkiIHBvaW50cz0iMjc4LjMsMTE0LjIgMjg2LjgsNzMuNCAyNzQuMSwzNS41IDE3Ny45LDEwNi45IDIxNC45LDEzOC4yIDI2Ny4yLDE1My41IDI3OC44LDE0MCAyNzMuOCwxMzYuNCAgICAyODEuOCwxMjkuMSAyNzUuNiwxMjQuMyAyODMuNiwxMTguMiAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q5IiBwb2ludHM9IjMxLjgsNzMuNCA0MC4zLDExNC4yIDM0LjksMTE4LjIgNDIuOSwxMjQuMyAzNi44LDEyOS4xIDQ0LjgsMTM2LjQgMzkuOCwxNDAgNTEuMywxNTMuNSAxMDMuNiwxMzguMiAgICAxNDAuNiwxMDYuOSA0NC40LDM1LjUgICIvPgo8L2c+Cjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMjY3LjIsMTUzLjUgMjE0LjksMTM4LjIgMjMwLjgsMTYyLjEgMjA3LjEsMjA4LjEgMjM4LjMsMjA3LjcgMjg0LjgsMjA3LjcgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMTAzLjYsMTM4LjIgNTEuMywxNTMuNSAzMy45LDIwNy43IDgwLjMsMjA3LjcgMTExLjQsMjA4LjEgODcuOCwxNjIuMSAiLz4KPHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxNzQuNiwxNjQuNiAxNzcuOSwxMDYuOSAxOTMuMSw2NS44IDEyNS42LDY1LjggMTQwLjYsMTA2LjkgMTQ0LjEsMTY0LjYgMTQ1LjMsMTgyLjggMTQ1LjQsMjI3LjYgICAxNzMuMSwyMjcuNiAxNzMuMywxODIuOCAiLz4KPC9zdmc+";
      case T.BitgetWallet:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMDM1XzExMDYpIj4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiM1NEZGRjUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTEzLjQ4MDYgMTk4LjYwNUMtMjkuMzI3NiAzMTkuMDQzIDE5OS42NjEgMjg1LjAyNyAzMTkuNTA3IDI1Mi45NjRDNDQyLjE2NSAyMTIuMjU5IDM1Ny4zODYgMzIuODI2OSAyNjkuNDE1IDI4Ljg1NThDMTgxLjQ0MyAyNC44ODQ3IDI4MC4zMjIgMTExLjgyNCAyMDUuNTk1IDEzNi42NTZDMTMwLjg2OCAxNjEuNDg3IDY2Ljk5MDcgNDguMDU4MyAxMy40ODA2IDE5OC42MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMjAzNV8xMTA2KSI+CjxwYXRoIGQ9Ik04NS41MTE4IC00NS44MjI1QzYzLjA1NjIgLTEwNy4xNzYgLTE2LjkxODkgLTIzLjk5NTMgLTU0LjA5OTUgMjUuMjY0M0MtODkuNTY1MiA3OC44NDc5IDMuMDA5MzcgMTI1LjE1MiAzOS4zMjA4IDEwMC4wMzdDNzUuNjMyMyA3NC45MjI3IDcuNzc0NDggNzAuMDM2MyAyOS4zNzA4IDM3LjM3ODVDNTAuOTY3MSA0LjcyMDc2IDExMy41ODEgMzAuODY5NSA4NS41MTE4IC00NS44MjI1WiIgZmlsbD0iIzAwRkZGMCIgZmlsbC1vcGFjaXR5PSIwLjY3Ii8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTk2LjQ3OTYgMjI1LjQyNEM2NS44NTAyIDEyMi4zNjMgLTY2LjA4MTggMTc2LjYzNyAtMTI4LjIxOSAyMTYuNjU3Qy0xODcuOTkgMjY0LjA0MiAtNDYuMDcxMSA0MDAuMzQ4IDEyLjg3MjUgMzkzLjM3NkM3MS44MTYxIDM4Ni40MDMgLTM0LjQxMTggMzI3LjA2NSAxLjk4NzAyIDI5OC4xN0MzOC4zODU4IDI2OS4yNzYgMTM0Ljc2NiAzNTQuMjQ5IDk2LjQ3OTYgMjI1LjQyNFoiIGZpbGw9IiM5RDgxRkYiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19mXzIwMzVfMTEwNikiPgo8cGF0aCBkPSJNMjgyLjEyIC0xMDcuMzUzQzIxNi4wNDcgLTE4Ni4wMzEgMTIxLjQ2MyAtMTIwLjk3IDgyLjQyOTYgLTc4LjYwNDdDNDguMjczOSAtMzAuNjQ0NiAyMjQuMjc1IDU3LjIzMTIgMjczLjEyMSA0Mi4xNzE0QzMyMS45NjggMjcuMTExNSAyMDYuNTEyIC00LjA1MDM4IDIyNy4yOTcgLTMzLjI4NzlDMjQ4LjA4MiAtNjIuNTI1NSAzNjQuNzEyIC05LjAwNTY2IDI4Mi4xMiAtMTA3LjM1M1oiIGZpbGw9IiM0RDk0RkYiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkzLjE4OSAxNTIuODM2SDEzNi42NzRMODcuMjA4NiAxMDMuMDUxTDEzNy4zMSA1My4yNjYzTDE1MC45NTUgNDBIMTA1LjgxOUw0OC4zMzU5IDk3Ljc3NzNDNDUuNDM0OSAxMDAuNjg5IDQ1LjQ0OTggMTA1LjQwMiA0OC4zNjU2IDEwOC4yOTlMOTMuMTg5IDE1Mi44MzZaTTExOS4zMyAxMDMuMTY4SDExOC45OTVMMTE5LjMyNiAxMDMuMTY0TDExOS4zMyAxMDMuMTY4Wk0xMTkuMzMgMTAzLjE2OEwxNjguNzkxIDE1Mi45NDlMMTE4LjY5IDIwMi43MzRMMTA1LjA0NSAyMTZIMTUwLjE4TDIwNy42NjQgMTU4LjIyNkMyMTAuNTY1IDE1NS4zMTQgMjEwLjU1IDE1MC42MDIgMjA3LjYzNCAxNDcuNzA1TDE2Mi44MTEgMTAzLjE2OEgxMTkuMzNaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMjAzNV8xMTA2IiB4PSItOTAuMjQxMSIgeT0iLTY5LjczNjkiIHdpZHRoPSI1NjkuNTU4IiBoZWlnaHQ9IjQ1MS40MzEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9mXzIwMzVfMTEwNiIgeD0iLTE2MC41MTEiIHk9Ii0xNjUuOTg3IiB3aWR0aD0iMzUxLjU5NiIgaGVpZ2h0PSIzNzEuNTA3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZl8yMDM1XzExMDYiIHg9Ii0yNDEuMDc4IiB5PSI2Ny42NDIiIHdpZHRoPSI0NDQuODUxIiBoZWlnaHQ9IjQyNC40NTIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyM19mXzIwMzVfMTEwNiIgeD0iLTIwLjM5NjgiIHk9Ii0yNDIuNzU4IiB3aWR0aD0iNDMwLjE5MSIgaGVpZ2h0PSIzODUuMTA1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjAzNV8xMTA2Ij4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
      case T.BraveWallet:
        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjE4cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyMTggMjU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4yICg1NzUxOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YnVpbGQtaWNvbnMvU3RhYmxlIENvcHkgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSI1MC43MDU1MTYzJSIgeDI9IjEwMCUiIHkyPSI1MC43MDU1MTYzJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkY1NTAwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjU1MDAiIG9mZnNldD0iNDAuOTg3NzIzMiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGMjAwMCIgb2Zmc2V0PSI1OC4xOTgxMjE1JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYyMDAwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMi4xNDg0Mzc1JSIgeTE9IjUwLjcwNTUxNjMlIiB4Mj0iMTAwJSIgeTI9IjUwLjcwNTUxNjMlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjQ1MkEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGMjAwMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMTcwLjI3MjEwOSwyNS4zMzU5Mzg3IEwxNDcuOTY4MTA5LDAuMDAwMTA4OTM2MTcgTDEwOC44MDAxMDksMC4wMDAxMDg5MzYxNyBMNjkuNjMyMTA4OCwwLjAwMDEwODkzNjE3IEw0Ny4zMjgxMDg4LDI1LjMzNTkzODcgQzQ3LjMyODEwODgsMjUuMzM1OTM4NyAyNy43NDQxMDg4LDE5Ljg4OTEzMDIgMTguNDk2MTA4OCwyOS4xNDg3MDQ3IEMxOC40OTYxMDg4LDI5LjE0ODcwNDcgNDQuNjA4MTA4OCwyNi43ODg2MDI2IDUzLjU4NDEwODgsNDEuNDA0MDIzOCBDNTMuNTg0MTA4OCw0MS40MDQwMjM4IDc3Ljc5MjEwODgsNDYuMDMzODExMSA4MS4wNTYxMDg4LDQ2LjAzMzgxMTEgQzg0LjMyMDEwODgsNDYuMDMzODExMSA5MS4zOTIxMDg4LDQzLjMxMDQwNjggOTcuOTIwMTA4OCw0MS4xMzE2ODM0IEMxMDQuNDQ4MTA5LDM4Ljk1Mjk2IDEwOC44MDAxMDksMzguOTM3MTY0MyAxMDguODAwMTA5LDM4LjkzNzE2NDMgQzEwOC44MDAxMDksMzguOTM3MTY0MyAxMTMuMTUyMTA5LDM4Ljk1Mjk2IDExOS42ODAxMDksNDEuMTMxNjgzNCBDMTI2LjIwODEwOSw0My4zMTA0MDY4IDEzMy4yODAxMDksNDYuMDMzODExMSAxMzYuNTQ0MTA5LDQ2LjAzMzgxMTEgQzEzOS44MDgxMDksNDYuMDMzODExMSAxNjQuMDE2MTA5LDQxLjQwNDAyMzggMTY0LjAxNjEwOSw0MS40MDQwMjM4IEMxNzIuOTkyMTA5LDI2Ljc4ODYwMjYgMTk5LjEwNDEwOSwyOS4xNDg3MDQ3IDE5OS4xMDQxMDksMjkuMTQ4NzA0NyBDMTg5Ljg1NjEwOSwxOS44ODkxMzAyIDE3MC4yNzIxMDksMjUuMzM1OTM4NyAxNzAuMjcyMTA5LDI1LjMzNTkzODciIGlkPSJwYXRoLTMiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJzdGFydGluZy1jb2xsZWN0aW9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQnVpbGQtSWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MC4wMDAwMDAsIC0zNTAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJidWlsZC1pY29ucy9TdGFibGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjExNDI4NiwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjA5Ljk4NDEwOSw2MS4yODQ4NzQ5IEwyMTUuOTY4MTA5LDQ2LjU3ODQ5MTkgQzIxNS45NjgxMDksNDYuNTc4NDkxOSAyMDguMzUyMTA5LDM4LjQwODI3OTEgMTk5LjEwNDEwOSwyOS4xNDg3MDQ3IEMxODkuODU2MTA5LDE5Ljg4OTEzMDIgMTcwLjI3MjEwOSwyNS4zMzU5Mzg3IDE3MC4yNzIxMDksMjUuMzM1OTM4NyBMMTQ3Ljk2ODEwOSwwLjAwMDEwODkzNjE3IEwxMDguODAwMTA5LDAuMDAwMTA4OTM2MTcgTDY5LjYzMjEwODgsMC4wMDAxMDg5MzYxNyBMNDcuMzI4MTA4OCwyNS4zMzU5Mzg3IEM0Ny4zMjgxMDg4LDI1LjMzNTkzODcgMjcuNzQ0MTA4OCwxOS44ODkxMzAyIDE4LjQ5NjEwODgsMjkuMTQ4NzA0NyBDOS4yNDgxMDg4LDM4LjQwODI3OTEgMS42MzIxMDg4LDQ2LjU3ODQ5MTkgMS42MzIxMDg4LDQ2LjU3ODQ5MTkgTDcuNjE2MTA4OCw2MS4yODQ4NzQ5IEwwLjAwMDEwODgsODMuMDcyMTA4OSBDMC4wMDAxMDg4LDgzLjA3MjEwODkgMjIuMzk5MzA4OCwxNjguMDE3ODExIDI1LjAyNDEwODgsMTc4LjM5MTI1OCBDMzAuMTkyMTA4OCwxOTguODE2NzkgMzMuNzI4MTA4OCwyMDYuNzE0NjYyIDQ4LjQxNjEwODgsMjE3LjA2MzU5OCBDNjMuMTA0MTA4OCwyMjcuNDEyNTM0IDg5Ljc2MDEwODgsMjQ1LjM4NzAwMyA5NC4xMTIxMDg4LDI0OC4xMTA0MDcgQzk4LjQ2NDEwODgsMjUwLjgzMzgxMSAxMDMuOTA0MTA5LDI1NS40NzI4NTggMTA4LjgwMDEwOSwyNTUuNDcyODU4IEMxMTMuNjk2MTA5LDI1NS40NzI4NTggMTE5LjEzNjEwOSwyNTAuODMzODExIDEyMy40ODgxMDksMjQ4LjExMDQwNyBDMTI3Ljg0MDEwOSwyNDUuMzg3MDAzIDE1NC40OTYxMDksMjI3LjQxMjUzNCAxNjkuMTg0MTA5LDIxNy4wNjM1OTggQzE4My44NzIxMDksMjA2LjcxNDY2MiAxODcuNDA4MTA5LDE5OC44MTY3OSAxOTIuNTc2MTA5LDE3OC4zOTEyNTggQzE5NS4yMDAzNjUsMTY4LjAxNzgxMSAyMTcuNjAwMTA5LDgzLjA3MjEwODkgMjE3LjYwMDEwOSw4My4wNzIxMDg5IEwyMDkuOTg0MTA5LDYxLjI4NDg3NDkgWiIgaWQ9IkhlYWQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTY0LjAxNjEwOSw0MS40MDQwMjM4IEMxNjQuMDE2MTA5LDQxLjQwNDAyMzggMTkyLjcwNDQ5Myw3Ni4xMjc0MjgxIDE5Mi43MDQ0OTMsODMuNTQ4NzA0NyBDMTkyLjcwNDQ5Myw5MC45Njk5ODEzIDE4OS4wOTU1OTcsOTIuOTI4NjUzNiAxODUuNDY3MTE3LDk2Ljc4NjYyODEgQzE4MS44Mzg2MzcsMTAwLjY0NDYwMyAxNjUuOTkxMzczLDExNy40OTM3NiAxNjMuOTU2MjY5LDExOS42NTcyMzIgQzE2MS45MjExNjUsMTIxLjgyMTI0OSAxNTcuNjg0NDkzLDEyNS4xMDE4NjIgMTYwLjE3NjU1NywxMzEuMDA2NzQ3IEMxNjIuNjY4NjIxLDEzNi45MTE2MzIgMTY2LjM0NDk3MywxNDQuNDI1NTA1IDE2Mi4yNTY4MTMsMTUyLjA0NjY3OSBDMTU4LjE2ODEwOSwxNTkuNjY3ODU0IDE1MS4xNjQxMDksMTY0Ljc1NDYyOCAxNDYuNjc2MTA5LDE2My45MTM2NDEgQzE0Mi4xODgxMDksMTYzLjA3MjEwOSAxMzEuNjQ4MTA5LDE1Ny41NTcyMTUgMTI3Ljc3MjEwOSwxNTUuMDM4MDY2IEMxMjMuODk2MTA5LDE1Mi41MTg5MTcgMTExLjYxMTUwMSwxNDIuMzc0NzgxIDExMS42MTE1MDEsMTM4LjQ5MzM4NiBDMTExLjYxMTUwMSwxMzQuNjEyNTM0IDEyNC4zMTAwOTMsMTI3LjY0Mzg4OCAxMjYuNjU1ODIxLDEyNi4wNjA1IEMxMjkuMDAyNjM3LDEyNC40Nzc2NTggMTM5LjcwMzExNywxMTguMzQ5NDU0IDEzOS45MjIzNDksMTE1Ljk0NDE0MyBDMTQwLjE0MTAzNywxMTMuNTM4Mjg4IDE0MC4wNTc4MDUsMTEyLjgzMjkyNiAxMzYuODk5ODg1LDEwNi44ODkzNjkgQzEzMy43NDE5NjUsMTAwLjk0NTI2NiAxMjguMDU0OTg5LDkzLjAxMzYyMzggMTI5LjAwMTU0OSw4Ny43MzYyMTExIEMxMjkuOTQ4MTA5LDgyLjQ1OTM0MyAxMzkuMTE5OTQ5LDc5LjcxNTI0MDkgMTQ1LjY2NTM1Nyw3Ny4yNDAyMTExIEMxNTIuMjA5Njc3LDc0Ljc2NTcyNiAxNjQuODExNDM3LDcwLjA5MTgxOTYgMTY2LjM4NTIyOSw2OS4zNjUyMTUzIEMxNjcuOTYwMTA5LDY4LjYzODA2NjQgMTY3LjU1MzE5Nyw2Ny45NDU3NzcgMTYyLjc4Mzk0OSw2Ny40OTMxNDcyIEMxNTguMDE1Nzg5LDY3LjA0MDUxNzQgMTQ0LjQ4MzI0NSw2NS4yNDE5ODEzIDEzOC4zODIyODUsNjYuOTQ0NjUzNiBDMTMyLjI4MTMyNSw2OC42NDczMjYgMTIxLjg1ODI4NSw3MS4yMzc4MjgxIDEyMS4wMTM5OTcsNzIuNjExNTEzMiBDMTIwLjE2OTcwOSw3My45ODUxOTgzIDExOS40MjQ5NzMsNzQuMDMxNDk2MiAxMjAuMjkyMTA5LDc4Ljc3MDIxOTYgQzEyMS4xNTg3MDEsODMuNTA4OTQzIDEyNS42MjI3NjUsMTA2LjI0NzE5IDEyNi4wNTU3ODksMTEwLjI4NTk5OCBDMTI2LjQ4OTM1NywxMTQuMzI0ODA3IDEyNy4zMzY5MDksMTE2Ljk5NDgzMiAxMjIuOTg3NjI5LDExNy45OTA1MDkgQzExOC42Mzc4MDUsMTE4Ljk4NjE4NiAxMTEuMzE2MTA5LDEyMC43MTUwMDMgMTA4LjgwMDEwOSwxMjAuNzE1MDAzIEMxMDYuMjg0MTA5LDEyMC43MTUwMDMgOTguOTYxODY4OCwxMTguOTg2MTg2IDk0LjYxMjU4ODgsMTE3Ljk5MDUwOSBDOTAuMjYyNzY0OCwxMTYuOTk0ODMyIDkxLjExMDMxNjgsMTE0LjMyNDgwNyA5MS41NDM4ODQ4LDExMC4yODU5OTggQzkxLjk3NzQ1MjgsMTA2LjI0NzE5IDk2LjQ0MDk3MjgsODMuNTA4OTQzIDk3LjMwODEwODgsNzguNzcwMjE5NiBDOTguMTc0NzAwOCw3NC4wMzE0OTYyIDk3LjQyOTk2NDgsNzMuOTg1MTk4MyA5Ni41ODYyMjA4LDcyLjYxMTUxMzIgQzk1Ljc0MTkzMjgsNzEuMjM3ODI4MSA4NS4zMTgzNDg4LDY4LjY0NzMyNiA3OS4yMTczODg4LDY2Ljk0NDY1MzYgQzczLjExNjQyODgsNjUuMjQxOTgxMyA1OS41ODQ0Mjg4LDY3LjA0MDUxNzQgNTQuODE1NzI0OCw2Ny40OTMxNDcyIEM1MC4wNDcwMjA4LDY3Ljk0NTc3NyA0OS42NDAxMDg4LDY4LjYzODA2NjQgNTEuMjE0NDQ0OCw2OS4zNjUyMTUzIEM1Mi43ODg3ODA4LDcwLjA5MTgxOTYgNjUuMzkwNTQwOCw3NC43NjU3MjYgNzEuOTM0ODYwOCw3Ny4yNDAyMTExIEM3OC40Nzk3MjQ4LDc5LjcxNTI0MDkgODcuNjUyMTA4OCw4Mi40NTkzNDMgODguNTk4NjY4OCw4Ny43MzYyMTExIEM4OS41NDUyMjg4LDkzLjAxMzYyMzggODMuODU3NzA4OCwxMDAuOTQ1MjY2IDgwLjcwMDMzMjgsMTA2Ljg4OTM2OSBDNzcuNTQyNDEyOCwxMTIuODMyOTI2IDc3LjQ1ODYzNjgsMTEzLjUzODI4OCA3Ny42Nzc4Njg4LDExNS45NDQxNDMgQzc3Ljg5NjU1NjgsMTE4LjM0OTQ1NCA4OC41OTc1ODA4LDEyNC40Nzc2NTggOTAuOTQzODUyOCwxMjYuMDYwNSBDOTMuMjkwMTI0OCwxMjcuNjQzODg4IDEwNS45ODgxNzMsMTM0LjYxMjUzNCAxMDUuOTg4MTczLDEzOC40OTMzODYgQzEwNS45ODgxNzMsMTQyLjM3NDc4MSA5My43MDQxMDg4LDE1Mi41MTg5MTcgODkuODI4MTA4OCwxNTUuMDM4MDY2IEM4NS45NTIxMDg4LDE1Ny41NTcyMTUgNzUuNDEyMTA4OCwxNjMuMDcyMTA5IDcwLjkyNDEwODgsMTYzLjkxMzY0MSBDNjYuNDM2MTA4OCwxNjQuNzU0NjI4IDU5LjQzMjEwODgsMTU5LjY2Nzg1NCA1NS4zNDM0MDQ4LDE1Mi4wNDY2NzkgQzUxLjI1NTI0NDgsMTQ0LjQyNTUwNSA1NC45MzE1OTY4LDEzNi45MTE2MzIgNTcuNDIzMTE2OCwxMzEuMDA2NzQ3IEM1OS45MTUxODA4LDEyNS4xMDE4NjIgNTUuNjc5MDUyOCwxMjEuODIxMjQ5IDUzLjY0MzQwNDgsMTE5LjY1NzIzMiBDNTEuNjA4ODQ0OCwxMTcuNDkzNzYgMzUuNzYxMDM2OCwxMDAuNjQ0NjAzIDMyLjEzMjU1NjgsOTYuNzg2NjI4MSBDMjguNTA0MDc2OCw5Mi45Mjg2NTM2IDI0Ljg5NTcyNDgsOTAuOTY5OTgxMyAyNC44OTU3MjQ4LDgzLjU0ODcwNDcgQzI0Ljg5NTcyNDgsNzYuMTI3NDI4MSA1My41ODQxMDg4LDQxLjQwNDAyMzggNTMuNTg0MTA4OCw0MS40MDQwMjM4IEM1My41ODQxMDg4LDQxLjQwNDAyMzggNzcuNzkyMTA4OCw0Ni4wMzM4MTExIDgxLjA1NjEwODgsNDYuMDMzODExMSBDODQuMzIwMTA4OCw0Ni4wMzM4MTExIDkxLjM5MjEwODgsNDMuMzEwNDA2OCA5Ny45MjAxMDg4LDQxLjEzMTY4MzQgQzEwNC40NDgxMDksMzguOTUyOTYgMTA4LjgwMDEwOSwzOC45MzcxNjQzIDEwOC44MDAxMDksMzguOTM3MTY0MyBDMTA4LjgwMDEwOSwzOC45MzcxNjQzIDExMy4xNTIxMDksMzguOTUyOTYgMTE5LjY4MDEwOSw0MS4xMzE2ODM0IEMxMjYuMjA4MTA5LDQzLjMxMDQwNjggMTMzLjI4MDEwOSw0Ni4wMzM4MTExIDEzNi41NDQxMDksNDYuMDMzODExMSBDMTM5LjgwODEwOSw0Ni4wMzM4MTExIDE2NC4wMTYxMDksNDEuNDA0MDIzOCAxNjQuMDE2MTA5LDQxLjQwNDAyMzggWiBNMTQyLjUwOTUwNCwxNzQuMjI3OTM1IEMxNDQuMjg1MTIsMTc1LjM0MTI2MyAxNDMuMjAyMDE2LDE3Ny40Mzk5MTggMTQxLjU4NDcwNCwxNzguNTg0ODM3IEMxMzkuOTY2ODQ4LDE3OS43Mjk3NTcgMTE4LjIyODA2NCwxOTYuNTg0MzYxIDExNi4xMTg0MzIsMTk4LjQ0NzE2OSBDMTE0LjAwODI1NiwyMDAuMzEwNTIzIDExMC45MDgsMjAzLjM4NzQyNSAxMDguOCwyMDMuMzg3NDI1IEMxMDYuNjkyLDIwMy4zODc0MjUgMTAzLjU5MTIsMjAwLjMxMDUyMyAxMDEuNDgxNTY4LDE5OC40NDcxNjkgQzk5LjM3MTM5MiwxOTYuNTg0MzYxIDc3LjYzMzE1MiwxNzkuNzI5NzU3IDc2LjAxNTI5NiwxNzguNTg0ODM3IEM3NC4zOTc0NCwxNzcuNDM5OTE4IDczLjMxNDg4LDE3NS4zNDEyNjMgNzUuMDkwNDk2LDE3NC4yMjc5MzUgQzc2Ljg2NjY1NiwxNzMuMTE1MTUyIDgyLjQyMjUyOCwxNzAuMzA2MjMzIDkwLjA4OTEyLDE2Ni4zMzM4NzYgQzk3Ljc1NDYyNCwxNjIuMzYyMDYzIDEwNy4zMDg4OTYsMTU4Ljk4NTA0MiAxMDguOCwxNTguOTg1MDQyIEMxMTAuMjkxMTA0LDE1OC45ODUwNDIgMTE5Ljg0NDgzMiwxNjIuMzYyMDYzIDEyNy41MTE0MjQsMTY2LjMzMzg3NiBDMTM1LjE3NzQ3MiwxNzAuMzA2MjMzIDE0MC43MzMzNDQsMTczLjExNTE1MiAxNDIuNTA5NTA0LDE3NC4yMjc5MzUgWiIgaWQ9IkZhY2UiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IlRvcC1IZWFkIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
      case T.KuCoinWallet:
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAV20lEQVR4nO2de4xcV33HP79z753HzqzXj5gkzoOQ2CHxg8YEKmhRWyekDUYkQWADVVWgoYQSCOUhJKpKHUSFKtS0KNQJCQRo1RZiNyKJhHkkwYBUhGjAgdixiTdg8nBCNna83p2dnbn3nF//uPfOztrr9a49uztzZ79/eMczd+6ce77f8zu/8zvn/I5wpti+3WPrVtv61uqdt+UpFlcWbP1yVblIDOeJyLmqulKgrMoyRAoiWkLJI9IHgCogJSBQUAE54/J1AFqeJQStIgKgqozEDy1jwAhoFXgJ5IiqPofwtHP2kPrB3qgWPje4+Zb6pBtPUfezxelX8PYtHlt3NH/8ih9+cU0URW/EM6/D8hrgfIESvueZfBDXgnPx8zoFVVQVlIT4BOl7maC+BekzScuDmeS1CCISf2YEMQZEcI0GGlpFGEV5Go9HsO4nDaO7ntj04f3N+xzHxWww+2pWFURixu68M1h3WfQuwftzlD82+VxBRNAwRCMHzqHgBFzr76kmv9v67+RCSRYtQCLtqS9REGl+rqCoihHBYATxPSQXoE5xY/UGvuySyN392KB3HzfdFMbfauFmhphdBbcobe3Dt28xvvd3JvCvQBU33kAgSguOTL531kidK5xULIqKqANBwTeFXGxFrX3EWf2nvVf9zb3xdRWDVNxU954KMycjufGl3/3CZfnAv1Vy/mZVRRthJCqigpni5otktwFTWQ7RxKrmfU+MwdXDnVj3iT3X3LxvNiKYCUFCUoD137/jr/DM57xcsMJWazbptwzEHk1y8SLpc4hUDDLBi1NVTKngaT0cVrUf37Pp5ruTy5vcnQynIiu+wfYt3oaVV/+zyQd/a+sNsC5CxGs1VYvEzy+a9S6SONNqMcY3hRx2PNxWH9/78cHNX6hzChFMR5oAunrnbflCPvcNr79wgx0dC3HqSdrqF/v0BUcrB6rqMGK9/lIQjYzdXx8P35EMHU8qAu8k922Sny8E9/ilwg12tNYAAhExi62+czDJCscN0+h4GPql4jqjuqH0J6+97+j9P4g4CVdTvSlUkNW/f1uQLwT3+H2F6221FgL+oiff2Zg0glAir78Y2NHafXsOn/V2Ht+qVDjBMTzBc2fLFkMFlw/kX/z+vuuTlr9IfhdgEkeCb0fHQr+/74Z1y4dupYKjUjmB78lvVCqGHTvs2gdvf69X6vugOzYaIbpIfhdhEleKZ0eqkVcqfGTtw9veQ6VygggmCFUEQVc/fOclBU93C5RcZBGJY5eL5HcXUr9AVdULfFWnIw772r2bbh5MuYZWC/DpigBS1PDfvHyuXyPrRMQkEepF8rsMKW8iYlwYqinmlhLpFwD49ASfsQAqFUOl4tY/uO2t0le41lVrNh7ni04VhVpEdyDuCkQR47lqLfKKhWvXPbTt7a3+QFMJF+36aqEcVX9qivn1bjx0JKHdxdbf3Wg2YMWZQmDseH1f1XvxyoObKuMAhu1bPIBSNPpmU8xv0PGGQ1g0/RlBk0fBuPGG9fr61vbZlW8DYPsWz7B1hwMQz/sAxlNNnIOsmn7Vkz/WdJ91MyYCRYCoGiPvAWDLDicAr/z+7a/Mqe5RMV4yWZ/Jlq+qiAieCJFzuHgaHg/BExP/P7kmi3CgIiCqdszUL39y08cGDUCgbDKloi/qLGSz9asqRgSrypFGDYB+P8+AnwdgOBzHJddk0RIksQFE1Zq+ol+MctcA+MnHf4gYVSSTMX5VxRPDmA0Z8PO89+Lf46qVF/OKvqV4YjhQPcz3Xvg19z67l5GoQdELsOoyZQnSAJEiijGKyB8Adwi7Kv4G97JHyQVraYSOk08QdSVUFV8Mx6I6a0or+NdX/RmX96+c8tp9I0N89Jff5UD1MEv8PFHGRJDAkguMNsJ9ewYevcJcxsD5ir6cMBJVTJbM/2Tyl3PXxrdwef9KQmdx6tBkYapVR+gsl/ev5K6Nb2FNaTnHojq+mEx1B5r0hESRoFywemT92Uai/DqQPtWm95cJyZ9I/nVc2DdA5Cy+mHQhEwBGDL4YIme5sG+AuzZel0kRJMNBVFUF+gJrLjfG6CoTeIZ4aVEmnvR48r80iXwvHg8l3r4krxHBF68pgi9lVASqqupUCTzPqLvIoHI+uZwKqpKBDm8q8i9oIV+FJvkpUhGo0BTBBRkVgcSrRpzkc6omWGVEWCXOCdr95v90yE/RKyJIuwFRJ57qKgO6XJ1CvKOga5/uTMhP0QsiiDkW1CoqutIAy1QdSPdGANtBfoqsiyDmWCXZltdvUMqiirpF8lNkXQTqEHEOhAGDSFmdTt602CWYC/JTZFoEzXC3KRiFYrwru7seZC7JT5FdESTlVVdO5v01mSfqDpwJ+Wn0D8Cp4pLXre+3IpMiEJFk1jNnEJYke9e74gnOlPx0L34682eS1+n+/J4QgaLiFKBkZIL6jrcAbSE/if0bEfaPDLH/2FAyTeziFZC9IAJB0tUhyeSP0ulh4HaRH6nDE8Pg6BHet/sBbtz9AIOjR/DExLN/PSACjfs7FMWglAE6OQzcTvJ94zE4epgbd9/PUH2MFxtj3Pjz+zkwchjfeD0hghauy0Yg6ORlYHND/gMcGh+h6PkUPZ9D9RHet/uBnhFB3O0rAkHcBSTjgIUu2PGYS/JLXg6rilWl5OV6SgStnJu05XeaBZh78l1zOtiq6ykRtHJ+4u7gDsB8kZ+iF0WQouMEMN/kp+hVEXSUABaK/BS9KIKOEcBCk5+i10TQEQLoFPJT9JIIFlwAnUZ+il4RwYIKoFPJT9ELIlgwAXQ6+SmyLoIFEUC3kJ8iyyKYdwF0G/kpsiqCeRVAt5KfIosimDcBdDv5KbImgnkRQFbIT5ElEcy5ADqJ/NZKFcAgHH+0yUwrPisimFMBdBr5IoJHTMq4ixi1DUajBnVn40WixNPDvSSCORNAx5Cv8f08MVhVXgrHMSKsKa3gj1e8nE0rL+LivqX4YhgOx7HJmsFk69Qp0e0ikA0P3972u3cM+UyQP2obLPMLvPP89bzp7DVcUlpG3otTJNVtxG/GjnLfc/u599nHeSkap+QFE8vFZ/E7VdtgVb6fL2+8jjX9K5oJKTQhe/pnhkgtvvF4emyYv979AAeqR+Y0XU3bBdCR5Ed1rhg4l8+s3TSRHyjeC3HCEYWDo0f4+8cf5pGjz1H2T+/3ukkEbe0C0go4FtVZU1548o0I1ajBq5eu4quvvr4lP1C8JDo28/Ffp0rkLKvLy/nyxuu4YuAcqlE9Ths3w+WSc9YdlOPuwJuD7qBtAlDiCq/ZkDXl5dx1xcJP6UbOMRAU+Ny6a+gP8i35gaR5TetrL8kTVA7yfHbt1SwNikTOIbqwU8l3XRGLYMyGsxLkTNA2AYjGFV72c9y2YfOknDzzTb4CRqFqG2w5bx0XlZYSudi5YwoznFY8iQhCZ7m0fwXvOn89o1EDT2a3b67dIriwb4DbNryJAT8/a0GeCm0TgJG4wreet45L+1cQOhubrGnIB+KlqapEqm0L8ghKRNz637bqstiZY6JyT7YmMP3MEO8X3HzOpQzkCoSnkTxhehFoIoKTfzcVwYQgz+Kd569n1DaaRw63A20TgFWl7Oe59mWXTBpTT0s+seVwKL4xPDl6pE0RPiF0jvMKS7iwuLS5CVRPVZbkmvT61aVlXFhcQugsp7NtYioRDI4ewTdxXuLpWvJUgnzjyotZ4uexbfQD2igAR9kLeEVpeRxlm0GFA1gcgvD4sRd498++yfPjo5TOMFWrQYjUcV6xTGBix2kmZYEJEaQO7dn5cmy2T3PbxIQIAp6vj/Ken32Tx4+9gCDYEw/xmrIsIvGvX9g3QF9SN+1Ce0cB0CzcabSXNpYj/nXXhobSPOG9rftmZtulxfDEtH33TtsEkCZjfmpsGGUi9HqqYYuHQVHWLlnJ1658K+fky1RteEZDHiWORfyuXp20A2gm92u2OIm7kWfHR/GTVPKnVZZmbCDknEKZf7/yraxdshJF8U5R/WlZ4mEr/KZ6hFHbiJ3ZNqGNAhCORXUeHPp1nHQhHWefouJVYn8hcq45Bl+V76eaPOjpiUAIjMdTtaMMVl9qZgI5lQhaK9yp8tvaUZ6tHSMwhtOxaZMCQ4V+7t54HZeUlxM5h0HQadLytNadS4bY33nhyeaopF1omwCcQtnLcc8ze3hi5DCB8ZKkC0wvAgUVwRchcpY1/SvOWAQKBGIYbtTZ+fwTMxJk62dK7MN889B+hsNxfAw6S+M7Ffmry2lUUJKo4Mm/m0YFrToC4/HEyItsf3YvJS/Xlq4tRfsCQRJ78sNRnVse28lTY8PJkMdOK4KJIY+QJmw+UxEI6agkx9ePEyRTiCCtcDTOHuIbw8HqSxMVLrPrtacnf/Yh4afGhrnlsW8zGjXwjZnWcswW7QsEJUOVPi/gwOgR3v/oAwsqglSQR8Man3r8YUbCOn4igvQ+qbefvk4DUSNhnU/ufShu/WaWvzsH5L//0Qc4MHqEYjpB1UZXsK2jgHTIs8TPxyLYvXAiSAVZ8vP8Yvj5ljG4h0lDwMlfIR73B8Zj38gQ7/35ffz86HOU/Nzpzwi2i/zdMfnx+L/9k0He2e9+c6WdN0ydqKIX8Fx9lB8ffoo/OusiluWKRGpjz/ckFTEpJJuM5VcWSrxh+YXsGjrIkbBG3vgzJiUtS97z+G1tmG89/wQvhTXOyvXR7+fwTaz/uot4YvRF/uOpX/CZ/T/iYG2Ysh9gO4H8bpsOTnH8tPDkAxtmPz9wYOQw79v9AIfqp7EghJicUC1jUchAUGBVocx5xSU4VX5Xr/J0bZjhsE7JzxGIie8/w7QZ3Uo+zKEAoINEwMQQL40SRuqI4ny5eCLkxMMXg53l0XHdTD7M8ZpAkbiyl/h5DlQX2Cc4bkydNx5lP0fZy1Ewfuy/9Bj5MA+rgjtNBCkUcGjz8MiprpkOWSAf5mlfQCeJoB3ICvkwjzuDsiKCLJEP87w3sNtFkDXyYQF2B3erCLJIPixQfoBuE0FWyYcFzBDSLSLIMvmwwDmCOl0EWScfOiBLWKeKoBfIhw4QAHSeCHqFfOgQAUDniKCXyIcOEgAsvAh6jXzoMAHAwomgF8mHDhQAzL8IepV8iPdQKtBxR8bMlwh6kfxWzpNzAzvz0Ki5F4HgifQU+UDroVFiFEKkMw+NgrkVQc1G1GzUU+QDrYdGhQZhFEDnc0J9lpgLEdz96us5K1diZb7E3Ruv7xnyYRLXo7Jh1x1HUJapqnZiN9CKdq0xtMki0f3HXgSBy/rPirODIZknH2ILEJ8dq0cNqoImS2c7HO2yBJ4YnCqXLTmLy/rPwiWOYC+Qn0CTBFlqUKqJK9gVJW+LCFSbp4anp4iraq+QH9MfF/WYUdVGUjEdbwFSnKkIUqLSTCDHv9+KzJEPIKqJBtSISDV5d2ELNUuciQhmikySDxMeAFozqm68uSWryzCXIsgs+RB3dUZQZMSAHFVjENP5TuBUmAsRZJp8QAyqIghaNQgj8YOIdmow6FRopwiyTn483hMkbvEvGVEZEk9IRgbd+VS0RwRZJx+SMDCqYgSQI0ZFDqkYTWLBXWkBUpyJCHqBfEjDwKDGKMohI7hD2gjFgenkcPBMcToi6BXyIQ4DKyI0GoLoMyZSPUgYWTEikoUn5NQiICE8nQ4mGQVlnXyAhGPjQuucs4dM6Ll9CmMizSnBrrcCcCoROFxLtk1N8gVknfw04B+LQMdqkd1rBvv3/A54Gt9XkVknxOpoTCWCfSNDBMaLs24m0T8jppkfKKvkQ+wAiuAIfBXktwcLw8943PUz97K/3Px6r6/wKtcILXF21Mw8tSQx/4IXMNQY41vPP8GRcJyi8Sn7OcZsyL6RIf7z6V/yj/t/xPP16qxPCukWJNbdesWCcY3G91646pP3xofmqP4Y5/4izl0pyXRhtkRg1VHwfMad5Yu/eYT/evqXlP0cClSjBseiOmU/T9Hzs0w+ggrqBOR/AXyAmt94sG9MIhXxVMFkiPwUqSUwIiwNClh1DEf15vmBy3NFrOqs0sJ1EwRE4wCA56q1KBTZBcQ5UJ/c9LFBFfmBKeYxqI0nRrPhDLZCZCJPkCQrhFJfwOrs8gN1Eyb4VGsKeVTkB7+66oO/AsSwY4sBcE6/hoqkw+MsdQGtmI7gLJIPE1yKIjgrau0XAdi+xRi27rAAY97QvXZs7HFTyHkoLqtWoNfQ5FFxUsgZV6s/VvUPfwuArTtsvDGkUjEHN1XGQf4hHiVq4jB07mrhRZwaydo/gJhJIwJSObipMk6lYuL3U1QwVHDrHtz2bb+/eK0dHYsQ42fTKPYO4h0gGnmlou+qY9957I0f2kylIlQqDloFEK8R0nW7tq02eP8nRvptGDXDw1n1CbKK5u4fVTW+B1CtWdk4ePVNT6ZcQ+veQEGpVMzeTTcPWmc/Ss73jOBIlosvdgXdg4k4jqoRnMkFxobuI4NX3/QklYpJyYepWnWlYqhU3LqHtn0+WFL6SDRSDUH8VASLlqCzkXKUOH6hP1DKhUeP3b73mg/fzJYtHjtipz/F1GRWMKzdLutXvPg/Xrl4gx2phQiLIuhwTCIfIq9UDNzY+P218fAdgz+9JaQSn+fV+p2TESmAXvTVSqH/5Wd/w/QVrrejtQZC0NodLAqhM9DKR/I69ErFXJP8zbfUSTg9/rvTESiArt55W75YCO4x/X3X25FqiFNPJD63bNEaLDxaOVBVhxHrlfsCNzJ2X60evXM68uHU5CUi+HA+X1h3q1cIbnbjDXAuQsRLQ6vJhYtCmEec0OpVLZ7xTT6H1sPPPzb08CeSIN9JyU++f0o0b7B+17YbRbxbJR8MuOq4TUaIhsVuYd7QrOc0bK3qVBWvVPRcIzysjfCTe6750FeSy6clH2aWIia+gVbMnk03362hfb2rNXaaYt4j53tJyn3bcrEuhpHbiynr1KlTdZac75lCznO1+s76eOMNe6750FfQipn46vSYXWvVikHiCNK679/xNuOZT4lnrkQEN95AIIqtkZjjN5sujiBmhuM8+dYPVERdEtT1TSEHIrhG9Kiz9rOPX/3BHQBs3+Kl8zszwezJUBUkObnwzjuDDavtDeqbG4l0k+nL58QI2gjRyIJTVHFpwWk6K0yEqKcuVKbEclJS04/TGdiJAE0SxYv3r2IM4hskCOLp7HpjHOGHau1/7z3gf52bbgrjb7VwM0OcfgUfp7RLd915Wc6Fm/D812Hda4ALgLIEnphcDlRR50jnGdPt2MDkY75TQ5cJ6luQPlPrlLNIc6EeIsliPEFMvCTHNUIIrVWoAs8g5hFs9BOr/kP7/vQDB5r3mWWrb8WZV/P27R5bt0768dU7b8v7xeBciXSdMboK5QJBzlXR5QLLQEpAP2hfska1H+LERclnQRYtABCCVplw4MYQ6qpSRXUc4SVgVFWGRPQ5hWed6sHQy++jVhtKhnQTmKLuZ4v/B9mAXq0aS1IrAAAAAElFTkSuQmCC";
      case T.FrontierWallet:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNDQzcwM0MiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS44NzI2IDEwTDM1LjcwMjMgMTAuNDEwNUwzNS4xNDE5IDExLjcyNEwzNC43Njk5IDEyLjU3MTFDMzEuOTQ1NCAxOC45MTk1IDI5Ljc0NzkgMjEuOTMyNSAyNy40MTIzIDIxLjkzMjVDMjYuMDY2MyAyMS45MzI1IDI1LjI2OTYgMjEuNTgwMSAyNC4yMzgyIDIwLjc1MjhMMjMuOTQwNSAyMC41MDcyQzIzLjE5ODUgMTkuODg1NCAyMi44ODYgMTkuNzMyNSAyMi4xNzIyIDE5LjczMjVDMjEuODAwMSAxOS43MzI1IDIxLjEzNDQgMjAuMTY1MyAyMC4yOTIgMjEuMTc1NUMxOS40MTg0IDIyLjIyMyAxOC40NjA0IDIzLjc3MDUgMTcuNDMwOSAyNS44MDg4TDE3LjMzNSAyNS45OTk2TDI3LjM1NTYgMjZMMjYuMTA3OSAyOC4zNUgxNi43NTA1VjM4SDE0VjEwSDM1Ljg3MjZaTTMxLjk3MzYgMTIuMzUwOEwxNi43NTA0IDEyLjM1VjIxLjY4MTZDMTguNTc0MyAxOC44MDk1IDIwLjMwNzUgMTcuMzY3NSAyMi4xNzIyIDE3LjM2NzVDMjMuNjIxOSAxNy4zNjc1IDI0LjQ3NjEgMTcuNzM4MSAyNS41NTM4IDE4LjYwMDVMMjUuODYxMyAxOC44NTM5QzI2LjU1NDEgMTkuNDM0NCAyNi44MjExIDE5LjU2NzUgMjcuNDEyMyAxOS41Njc1QzI4LjA2NjEgMTkuNTY3NSAyOS43OTc0IDE3LjA3MzEgMzEuOTczNiAxMi4zNTA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
      case T.BitKeepWallet:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBDMjcuOTQyIDAgMzYgOC4wNTk2NyAzNiAxOEMzNiAyNy45NDIgMjcuOTQyIDM2IDE4IDM2QzguMDU5NjcgMzYgMCAyNy45NDEzIDAgMThDMCA4LjA1OTY3IDguMDU5NjcgMCAxOCAwWiIgZmlsbD0iIzc1MjRGOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4IDEzLjE4MTdWMTQuMjg2M0MyOC4wMDAyIDE0LjM5MzEgMjcuOTcxNCAxNC40OTgxIDI3LjkxNjUgMTQuNTkwN0MyNy44NjE2IDE0LjY4MzMgMjcuNzgyNiAxNC43NjAxIDI3LjY4NzUgMTQuODEzNUwyNC4wMjQyIDE2Ljg2ODZMMjcuMjk2OSAxOC42OTk1QzI3LjUxMDggMTguODE5NiAyNy42ODg0IDE4Ljk5MjQgMjcuODExOCAxOS4yMDA1QzI3LjkzNTMgMTkuNDA4NSAyOC4wMDAyIDE5LjY0NDUgMjggMTkuODg0N1YyMi44MzAyQzI4LjAwMDMgMjMuMDcwNSAyNy45MzU1IDIzLjMwNjYgMjcuODEyIDIzLjUxNDhDMjcuNjg4NiAyMy43MjMgMjcuNTEwOSAyMy44OTU5IDI3LjI5NjkgMjQuMDE2MUwxOC42ODk4IDI4LjgxNjhDMTguNDc2MSAyOC45MzY4IDE4LjIzMzYgMjkgMTcuOTg2NyAyOUMxNy43Mzk5IDI5IDE3LjQ5NzQgMjguOTM2OCAxNy4yODM2IDI4LjgxNjhMMTQuNDY3MiAyNy4yMzVDMTQuNDE5NiAyNy4yMDg0IDE0LjM4MDIgMjcuMTcgMTQuMzUyNyAyNy4xMjM4QzE0LjMyNTMgMjcuMDc3NiAxNC4zMTA4IDI3LjAyNTIgMTQuMzEwOCAyNi45NzE4QzE0LjMxMDggMjYuOTE4NCAxNC4zMjUzIDI2Ljg2NiAxNC4zNTI3IDI2LjgxOThDMTQuMzgwMiAyNi43NzM2IDE0LjQxOTYgMjYuNzM1MiAxNC40NjcyIDI2LjcwODZMMjMuNzY0MSAyMS41MDUyQzIzLjc4NzcgMjEuNDkxOCAyMy44MDc0IDIxLjQ3MjcgMjMuODIxMSAyMS40NDk2QzIzLjgzNDcgMjEuNDI2NSAyMy44NDE5IDIxLjQwMDQgMjMuODQxOSAyMS4zNzM4QzIzLjg0MTkgMjEuMzQ3MiAyMy44MzQ3IDIxLjMyMSAyMy44MjExIDIxLjI5NzlDMjMuODA3NCAyMS4yNzQ5IDIzLjc4NzcgMjEuMjU1NyAyMy43NjQxIDIxLjI0MjNMMjAuMzEyNSAxOS4zMDM1QzIwLjIxNzUgMTkuMjUwMiAyMC4xMDk3IDE5LjIyMjEgMjAgMTkuMjIyMUMxOS44OTAzIDE5LjIyMjEgMTkuNzgyNSAxOS4yNTAyIDE5LjY4NzUgMTkuMzAzNUwxMC4yNDQ1IDI0LjU5MjdDMTAuMTczMyAyNC42MzI3IDEwLjA5MjQgMjQuNjUzOCAxMC4wMTAyIDI0LjY1MzhDOS45Mjc4OCAyNC42NTM4IDkuODQ3MDQgMjQuNjMyNyA5Ljc3NTc4IDI0LjU5MjdMOC43MDYyNSAyMy45OTc5QzguNDkxMyAyMy44Nzc5IDguMzEyNzcgMjMuNzA0OCA4LjE4ODc1IDIzLjQ5NjFDOC4wNjQ3MiAyMy4yODc1IDcuOTk5NjEgMjMuMDUwNyA4IDIyLjgwOTZWMjEuNjA1NUM3Ljk5OTk1IDIxLjUyNTQgOC4wMjE1OCAyMS40NDY4IDguMDYyNzMgMjEuMzc3NEM4LjEwMzg3IDIxLjMwODEgOC4xNjMwNyAyMS4yNTA1IDguMjM0MzggMjEuMjEwNEwyMS43NzM0IDEzLjY0NDNDMjEuNzk3MSAxMy42MzEgMjEuODE2OCAxMy42MTE4IDIxLjgzMDQgMTMuNTg4N0MyMS44NDQxIDEzLjU2NTcgMjEuODUxMyAxMy41Mzk1IDIxLjg1MTMgMTMuNTEyOUMyMS44NTEzIDEzLjQ4NjMgMjEuODQ0MSAxMy40NjAxIDIxLjgzMDQgMTMuNDM3MUMyMS44MTY4IDEzLjQxNCAyMS43OTcxIDEzLjM5NDggMjEuNzczNCAxMy4zODE1TDE4LjMxNjQgMTEuNDM1OEMxOC4yMjE0IDExLjM4MjUgMTguMTEzNiAxMS4zNTQ0IDE4LjAwMzkgMTEuMzU0NEMxNy44OTQyIDExLjM1NDQgMTcuNzg2NCAxMS4zODI1IDE3LjY5MTQgMTEuNDM1OEw4LjQ2ODc1IDE2LjU5MzZDOC40MjEyNyAxNi42MjAyIDguMzY3NDEgMTYuNjM0MyA4LjMxMjU4IDE2LjYzNDNDOC4yNTc3NSAxNi42MzQzIDguMjAzODkgMTYuNjIwMyA4LjE1NjM5IDE2LjU5MzdDOC4xMDg4OSAxNi41NjcgOC4wNjk0NCAxNi41Mjg3IDguMDQxOTkgMTYuNDgyNkM4LjAxNDU0IDE2LjQzNjQgOC4wMDAwNiAxNi4zODQgOCAxNi4zMzA3VjEzLjE2NzJDNy45OTk3MSAxMi45MjY5IDguMDY0NTQgMTIuNjkwNyA4LjE4Nzk4IDEyLjQ4MjVDOC4zMTE0MiAxMi4yNzQzIDguNDg5MSAxMi4xMDE1IDguNzAzMTMgMTEuOTgxM0wxNy4zMDg2IDcuMTgyMTJDMTcuNTIxOSA3LjA2MjggMTcuNzYzNyA3IDE4LjAwOTggN0MxOC4yNTU4IDcgMTguNDk3NiA3LjA2MjggMTguNzEwOSA3LjE4MjEyTDI3LjI5NjkgMTEuOTk4QzI3LjUxMDYgMTIuMTE4IDI3LjY4OCAxMi4yOTA1IDI3LjgxMTQgMTIuNDk4M0MyNy45MzQ5IDEyLjcwNiAyNy45OTk5IDEyLjk0MTcgMjggMTMuMTgxN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
      case T.OKXWallet:
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAADMhJREFUeF7tme1xW8cSRJcZABkAGZAZgBlIEYCMAFAERAhABCQjEDIgFQGRgZCBkAFfXVbZzz9srbTt9XzsuVUuVelydmZOL1oN+qqU8l54IACBIQlcYQBD6s7SEPgggAFwESAwMAEMYGDxWR0CGAB3AAIDE8AABhaf1SGAAXAHIDAwAQxgYPFZHQIYAHcAAgMTwAAGFp/VIYABcAcgMDABDGBg8VkdAhgAdwACAxPAAAYWn9UhgAFwByAwMAEMYGDxWR0CGAB3AAIDE8AABhaf1SGAAXAHIDAwAQxgYPFZHQIYAHcAAgMTwAAGFp/VIYABcAcgMDABDGBg8VkdAhgAdwACAxPAAAYWn9UhgAFwByAwMAEMYGDxWR0CGAB3AAIDE8AABhaf1SGAAXAHIDAwAQxgYPFZHQIYAHcAAgMTwAAGFp/VIYABcAcgMDABDGBg8VkdAhgAdwACAxPAAAYWn9UhgAFwByAwMAEMYGDxWR0CGAB3AAIDE8AABhaf1SGAAXAHIDAwAQxgYPFZHQIYAHcAAgMTwAAGFp/VIYABcAcgMDABDGBg8VkdAhgAdwACAxPAAAYWn9UhgAFwByAwMAEMYGDxWR0CGAB3AAIDE8AABhaf1SGAAXAHIDAwAQxgYPFZHQJDGMB+vy/r9brMZrMwih8Oh7LdbsPM+7NBN5tN2e12ofgfj8fy5cuXcj6fU2jwT0ukN4Dpwz9dwIhPBhO4u7srj4+PEfGX0+lUbm5uQs7+q0OnN4D39/dfZeHu5y6XS5nP5+7m+p2BXl5eymq1+p0SVz87GcBkBFkfDMC5sldXk0Rxn+/fv5fFYhF2gdvb2/L6+hp2/trgGECNkPF7DMBWAAzAlr/cPfJXgGl5DEC+AtIBGICEz74YA7DVgK8Atvxr3fkKUCNk/J4EYCsACcCWv9ydBCAjlA4gAUj4uheTALoj1hqQADR+ajUJQCVoXE8CsBWABGDLv9adBFAjZPyeBGArAAnAlr/cnQQgI5QOIAFI+LoXkwC6I9YakAA0fmo1CUAlaFxPArAVgARgy7/WnQRQI2T8ngRgKwAJwJa/3J0EICOUDiABSPi6F5MAuiPWGpAANH5qNQlAJWhcTwKwFYAEYMu/1p0EUCNk/J4EYCsACcCWv9ydBCAjlA4gAUj4uheTALoj1hqQADR+ajUJQCVoXE8CsBWABGDLv9adBFAjZPyeBGArAAnAlr/cnQQgI5QOIAFI+LoXkwC6I9YakAA0fmo1CUAlaFxPArAVgARgy7/WnQRQI2T8ngRgKwAJwJa/3J0EICOUDiABSPi6F5MAuiPWGpAANH5qNQlAJWhcTwKwFYAEYMu/1p0EUCNk/J4EYCsACcCWv9ydBCAjlA4gAUj4uheTALoj1hqQADR+ajUJQCVoXE8CsBWABGDLv9adBFAjZPyeBGArAAnAlr/cnQQgI5QOIAFI+LoXkwC6I9YakAA0fmo1CUAlaFxPArAVgARgy7/WnQRQI2T8ngRgKwAJwJa/3J0EICOUDiABSPi6F5MAuiPWGpAANH5qNQlAJWhcTwKwFYAEYMu/1p0EUCNk/J4EYCsACcCWv9ydBCAjlA4gAUj4uhenTwA/fvwos9msO8heDaIngJeXl7JarXrh6X4uCaA74r4N9vt92Ww2fZt0Ov1wOJTtdtvp9P/m2Lu7u/L4+PjfNPuXu5zP57JcLv/lU30dlz4BTLijmcDlcinPz8/hP/x/XPXdblfW63VZLBa+bv9Ppnl9fS339/dlMoHMzxAGEF3AKcFMSSDKB+h0OpVv376lMbDo9+dn82MAztWNHKGfnp4+/hXl8UsAA/Crzcdkb29v5fr62vmU/zzefD4v01caHp8EMACfuvw5Ff8bzblAwcfDAJwLiAE4Fyj4eBiAcwExAOcCBR8PA3AuIAbgXKDg42EAzgXEAJwLFHw8DMC5gBiAc4GCj4cBOBcQA3AuUPDxMADnAmIAzgUKPh4G4FxADMC5QMHHwwCcC4gBOBco+HgYgHMBMQDnAgUfDwNwLiAG4Fyg4ONhAM4FxACcCxR8PAzAuYAYgHOBgo+HATgXEANwLlDw8TAA5wJiAM4FCj4eBuBcQAzAuUDBx8MAnAuIATgXKPh4GIBzATEA5wIFHw8DcC4gBuBcoODjYQDOBcQAnAsUfDwMwLmAGIBzgYKPhwE4FxADcC5Q8PEwAOcCYgDOBQo+HgbgXEAMwLlAwcfDAJwLiAE4Fyj4eBiAcwExAOcCBR8PA3AuIAbgXKDg42EAzgXEAJwLFHw8DMC5gBiAc4GCj4cBOBcQA3AuUPDxMADnAmIAzgUKPh4G4FxADMC5QMHHwwCcC4gBOBco+HgYgHMBMQDnAgUfDwNwLiAG4Fyg4ONhAM4FxACcCxR8PAzAuYAYgHOBgo+HATgXEANwLlDw8TAA5wJiAM4FCj4eBuBcQAzAuUDBx8MAnAuIATgXKPh4GIBzAaMbwM3NTTmdTs4pjzseBuBc+91uVx4eHpxP+ffjnc/nslwuQ84+ytAYQACl9/t92Ww2ASb9/4ivr6/l/v6+TCbA45fAEAZwd3dX1ut1WSwWfpX4y2TTh+b5+bk8PT39+bez2axM/0V5/vrBv76+/kgx058Rnmn24/FYDodDhHGlGdMbQOQIvd1uw1/CyXSn32NEfCYDnlJM5ie9AUT+Jdrlcinz+Tz0/fv69Wv59OlT2B2y/xIzvQG8v7+HvXzT4FdXk0Rxn7e3tzDR/+8o397elun3GVkfDMC5stENIHICm64GBuD8A1IbjwRQI9T3PQbQl696OglAJdi5ngTQGXDleBKALX+5OwlARigdQAKQ8HUvJgF0R6w1IAFo/NRqEoBK0LieBGArAAnAln+tOwmgRsj4PQnAVgASgC1/uTsJQEYoHUACkPB1LyYBdEesNSABaPzUahKAStC4ngRgKwAJwJZ/rTsJoEbI+D0JwFYAEoAtf7k7CUBGKB1AApDwdS8mAXRHrDUgAWj81GoSgErQuJ4EYCsACcCWf607CaBGyPg9CcBWABKALX+5OwlARigdQAKQ8HUvJgF0R6w1IAFo/NRqEoBK0LieBGArAAnAln+tOwmgRsj4PQnAVgASgC1/uTsJQEYoHUACkPB1LyYBdEesNSABaPzUahKAStC4ngRgKwAJwJZ/rTsJoEbI+D0JwFYAEoAtf7k7CUBGKB1AApDwdS8mAXRHrDUgAWj81GoSgErQuJ4EYCsACcCWf607CaBGyPg9CcBWABKALX+5OwlARigdQAKQ8HUvJgF0R6w1IAFo/NRqEoBK0LieBGArAAnAln+tOwmgRsj4PQnAVgASgC1/uTsJQEYoHUACkPB1LyYBdEesNSABaPzUahKAStC4ngRgKwAJwJZ/rTsJoEbI+D0JwFYAEoAtf7k7CUBGKB1AApDwdS8mAXRHrDUgAWj81GoSgErQuJ4EYCsACcCWf607CaBGyPg9CcBWABKALX+5OwlARigdQAKQ8HUvJgF0R6w1IAFo/NRqEoBK0LieBGArwNvbW7m+vrYdQuiOAQjwPJS+vLyU1WrlYZTfnuF4PJbPnz//dp2ngt1uVx4eHjyN9MuznM/nslwuf/nnI/5g+q8Ai8WiTCYw/RnpOZ1OHx/+6RJGf/b7fdlsNqHWuFwuZfrXf9Ih85PeAP4QL1IKmC5ftos3fQ2YzWYhPksT/8l4pz+zP8MYQHYh2Q8CLQQwgBZq1EAgCQEMIImQrAGBFgIYQAs1aiCQhAAGkERI1oBACwEMoIUaNRBIQgADSCIka0CghQAG0EKNGggkIYABJBGSNSDQQgADaKFGDQSSEMAAkgjJGhBoIYABtFCjBgJJCGAASYRkDQi0EMAAWqhRA4EkBDCAJEKyBgRaCGAALdSogUASAhhAEiFZAwItBDCAFmrUQCAJAQwgiZCsAYEWAhhACzVqIJCEAAaQREjWgEALAQyghRo1EEhCAANIIiRrQKCFAAbQQo0aCCQhgAEkEZI1INBCAANooUYNBJIQwACSCMkaEGghgAG0UKMGAkkIYABJhGQNCLQQwABaqFEDgSQEMIAkQrIGBFoIYAAt1KiBQBICGEASIVkDAi0EMIAWatRAIAkBDCCJkKwBgRYCGEALNWogkIQABpBESNaAQAsBDKCFGjUQSEIAA0giJGtAoIUABtBCjRoIJCGAASQRkjUg0EIAA2ihRg0EkhDAAJIIyRoQaCGAAbRQowYCSQhgAEmEZA0ItBDAAFqoUQOBJAQwgCRCsgYEWghgAC3UqIFAEgIYQBIhWQMCLQQwgBZq1EAgCQEMIImQrAGBFgIYQAs1aiCQhAAGkERI1oBACwEMoIUaNRBIQgADSCIka0CghcD/AFu3y0xSvW8yAAAAAElFTkSuQmCC";
      case T.RabbyWallet:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MzguNDcgMjc5LjA5N0M0NTIuOTUyIDI0Ni42MzcgMzgxLjM1OSAxNTUuOTQ4IDMxMi45NjQgMTE4LjE2NUMyNjkuODUzIDg4Ljg5NSAyMjQuOTMgOTIuOTE2MiAyMTUuODMyIDEwNS43NjhDMTk1Ljg2NSAxMzMuOTcyIDI4MS45NDggMTU3Ljg3MSAzMzkuNTE4IDE4NS43NTlDMzI3LjE0MyAxOTEuMTUyIDMxNS40ODEgMjAwLjgzIDMwOC42MjMgMjEzLjIwN0MyODcuMTYgMTg5LjY5NyAyNDAuMDUyIDE2OS40NTEgMTg0Ljc3NyAxODUuNzU5QzE0Ny41MjggMTk2Ljc0OSAxMTYuNTcxIDIyMi42NTggMTA0LjYwNiAyNjEuNzkxQzEwMS42OTkgMjYwLjQ5NSA5OC40Nzk5IDI1OS43NzQgOTUuMDkzNCAyNTkuNzc0QzgyLjE0MzYgMjU5Ljc3NCA3MS42NDU2IDI3MC4zMDggNzEuNjQ1NiAyODMuMzAxQzcxLjY0NTYgMjk2LjI5NSA4Mi4xNDM2IDMwNi44MjggOTUuMDkzNCAzMDYuODI4Qzk3LjQ5MzcgMzA2LjgyOCAxMDQuOTk5IDMwNS4yMTMgMTA0Ljk5OSAzMDUuMjEzTDIyNC45MyAzMDYuMDg1QzE3Ni45NjcgMzgyLjQzIDEzOS4wNjMgMzkzLjU5IDEzOS4wNjMgNDA2LjgxN0MxMzkuMDYzIDQyMC4wNDMgMTc1LjMzMSA0MTYuNDU5IDE4OC45NDggNDExLjUyOUMyNTQuMTM4IDM4Ny45MjggMzI0LjE1NSAzMTQuMzczIDMzNi4xNyAyOTMuMTk5QzM4Ni42MjUgMjk5LjUxNSA0MjkuMDI4IDMwMC4yNjIgNDM4LjQ3IDI3OS4wOTdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTc1OF82NTYpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzM5LjUxMyAxODUuNzYzQzMzOS41MTYgMTg1Ljc2NCAzMzkuNTE5IDE4NS43NjYgMzM5LjUyMiAxODUuNzY3QzM0Mi4xOTEgMTg0LjcxMiAzNDEuNzU5IDE4MC43NTggMzQxLjAyNiAxNzcuNjUyQzMzOS4zNDIgMTcwLjUxNSAzMTAuMjg0IDE0MS43MjQgMjgyLjk5NyAxMjguODI5QzI0NS44MTUgMTExLjI1NyAyMTguNDM1IDExMi4xNjMgMjE0LjM5IDEyMC4yNjJDMjIxLjk2NCAxMzUuODM3IDI1Ny4wNzcgMTUwLjQ2MSAyOTMuNzQ4IDE2NS43MzNDMzA5LjM5NCAxNzIuMjQ5IDMyNS4zMjMgMTc4Ljg4MyAzMzkuNTE5IDE4NS43NkMzMzkuNTE3IDE4NS43NjEgMzM5LjUxNSAxODUuNzYyIDMzOS41MTMgMTg1Ljc2M1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xNzU4XzY1NikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOTIuMzI5IDM0Mi41MjNDMjg0LjgwOSAzMzkuNjQgMjc2LjMxNSAzMzYuOTk0IDI2Ni42NTggMzM0LjU5NEMyNzYuOTU1IDMxNi4xMDggMjc5LjExNSAyODguNzQgMjY5LjM5MSAyNzEuNDM3QzI1NS43NDMgMjQ3LjE1MyAyMzguNjEyIDIzNC4yMjggMTk4LjgwMiAyMzQuMjI4QzE3Ni45MDcgMjM0LjIyOCAxMTcuOTU1IDI0MS42MjggMTE2LjkwOSAyOTEuMDA2QzExNi43OTkgMjk2LjE4NyAxMTYuOTA2IDMwMC45MzUgMTE3LjI4IDMwNS4zMDFMMjI0LjkzIDMwNi4wODRDMjEwLjQxNyAzMjkuMTg1IDE5Ni44MjUgMzQ2LjMxOCAxODQuOTI2IDM1OS4zNDVDMTk5LjIxMyAzNjMuMDE5IDIxMS4wMDMgMzY2LjEwMyAyMjEuODI4IDM2OC45MzRDMjMyLjA5OCAzNzEuNjIgMjQxLjQ5OSAzNzQuMDc5IDI1MS4zMzkgMzc2LjU5OEMyNjYuMTgyIDM2NS43NDggMjgwLjEzNSAzNTMuOTE3IDI5Mi4zMjkgMzQyLjUyM1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xNzU4XzY1NikiLz4KPHBhdGggZD0iTTEwMy4xNjkgMzAwLjIyOEMxMDcuNTY3IDMzNy43MzcgMTI4LjgxMyAzNTIuNDM3IDE3Mi4yMjcgMzU2Ljc4OEMyMTUuNjQxIDM2MS4xMzggMjQwLjU0NCAzNTguMjIgMjczLjY5OCAzNjEuMjQ2QzMwMS4zODkgMzYzLjc3NCAzMjYuMTEzIDM3Ny45MzIgMzM1LjI4NSAzNzMuMDRDMzQzLjUzOSAzNjguNjM2IDMzOC45MjEgMzUyLjcyOCAzMjcuODc2IDM0Mi41MjFDMzEzLjU1OCAzMjkuMjkxIDI5My43NDIgMzIwLjA5MyAyNTguODc1IDMxNi44MjhDMjY1LjgyNCAyOTcuNzM5IDI2My44NzcgMjcwLjk3MyAyNTMuMDg1IDI1Ni40MTFDMjM3LjQ4MSAyMzUuMzU1IDIwOC42OCAyMjUuODM2IDE3Mi4yMjcgMjI5Ljk5NUMxMzQuMTQzIDIzNC4zNCA5Ny42NTA0IDI1My4xNTMgMTAzLjE2OSAzMDAuMjI4WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzE3NThfNjU2KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE3NThfNjU2IiB4MT0iMTgwLjQzOSIgeTE9IjI1MC4zNTIiIHgyPSI0MzUuNDc5IiB5Mj0iMzIyLjQzMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODY5N0ZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0FCQjdGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTc1OF82NTYiIHgxPSIzOTIuNDI4IiB5MT0iMjQ1LjQ4OSIgeDI9IjIwNy44NzYiIHkyPSI2MS4xMDc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4Njk3RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTE1NkQ4IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzE3NThfNjU2IiB4MT0iMjk3LjQ0NiIgeTE9IjM0OC45NjciIHgyPSIxMjAuNDY1IiB5Mj0iMjQ3LjU1OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNDY1RUVEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg2OTdGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8xNzU4XzY1NiIgeDE9IjE5NS42NTgiIHkxPSIyNDguNDQzIiB4Mj0iMzE1LjU4MSIgeTI9IjQwMC4zMDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg4OThGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuOTgzODk1IiBzdG9wLWNvbG9yPSIjNjI3N0YxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      case T.OktoWallet:
        return "data:image/svg+xml;charset=UTF-8,%3csvg width='83' height='82' viewBox='0 0 83 82' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1120_17431)'%3e%3cpath d='M82.4999 41C82.4999 63.6436 64.1437 81.9999 41.4999 81.9999C18.8563 81.9999 0.500009 63.6436 0.5 41C0.499991 18.3564 18.8563 8.54166e-06 41.4999 0C64.1435 -8.54166e-06 82.4999 18.3564 82.4999 41Z' fill='url(%23paint0_linear_1120_17431)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M41.5 18.8601C29.2724 18.8601 19.36 28.7725 19.36 41.0001C19.36 42.2001 19.4555 43.3779 19.6392 44.5261C19.7607 45.31 20.2188 47.0099 21.079 47.5385C22.1525 48.1981 23.3676 47.631 24.3623 47.1668L24.3671 47.1646C25.1635 46.7929 27.5018 45.703 28.5714 45.2045C28.8163 45.0825 29.4633 44.9192 30.0923 45.2412C30.8786 45.6437 31.1095 46.4705 31.0627 46.9635C31.0159 47.4565 30.7506 48.1075 30.0807 48.4179C29.5448 48.6663 26.3908 50.1362 24.8808 50.8402C24.5568 50.9654 23.8392 51.4349 23.5615 52.3107C23.2142 53.4054 23.7556 54.2502 23.9452 54.493C24.0869 54.686 24.5091 55.1169 25.0646 55.2966C25.7591 55.5213 26.3554 55.4355 26.8211 55.2231C27.1936 55.0532 34.584 51.6064 38.2326 49.9043C38.4717 49.7857 39.1066 49.6309 39.7336 49.9603C40.5174 50.372 40.7431 51.1479 40.7035 51.6269C40.6639 52.1059 40.3987 52.8106 39.7455 53.1154C39.2229 53.3592 34.3691 55.6194 32.0075 56.7189C31.5911 56.9074 30.7459 57.5713 30.6966 58.7187C30.6349 60.153 31.6269 60.8328 32.0421 61.0241C32.3698 61.193 33.232 61.4351 34.0587 61.0526C34.8853 60.6702 43.6698 56.5731 47.9588 54.5724C48.2131 54.4411 48.9044 54.2717 49.4937 54.5724C50.2655 54.9662 50.5219 55.6383 50.5219 56.1467C50.5219 56.6551 50.4988 57.028 49.6946 57.7484C48.9911 58.3787 47.9588 58.9988 44.4412 60.4978C43.2365 61.0112 42.4155 61.3891 42.5506 62.0374C42.652 62.5245 43.0066 62.7098 44.1846 62.6565C45.3626 62.6032 50.6669 62.1869 55.9806 57.7484C60.6719 53.6887 63.64 47.691 63.64 41.0001C63.64 38.5346 63.237 36.1632 62.4932 33.9482C62.2405 34.0538 61.963 34.1121 61.672 34.1121C60.4945 34.1121 59.54 33.1576 59.54 31.9801C59.54 31.1326 60.0345 30.4005 60.7508 30.0568C56.9411 23.3694 49.7471 18.8601 41.5 18.8601ZM49.7 32.8001C49.7 33.9776 48.7455 34.9321 47.568 34.9321C46.3905 34.9321 45.436 33.9776 45.436 32.8001C45.436 31.6226 46.3905 30.6681 47.568 30.6681C48.7455 30.6681 49.7 31.6226 49.7 32.8001Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_1120_17431' x1='41.4999' y1='0' x2='41.4999' y2='81.9999' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%236246F5'/%3e%3cstop offset='0.493007' stop-color='%235166EE'/%3e%3cstop offset='1' stop-color='%2356B9F9'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_1120_17431'%3e%3crect width='82' height='82' fill='white' transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
      case T.CoinbaseWallet:
        return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIGZpbGw9Im5vbmUiPgo8Y2lyY2xlIGN4PSI1MDAiIGN5PSI1MDAiIHI9IjUwMCIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCA1MDBDMTUwIDY5My4zIDMwNi43IDg1MCA1MDAgODUwQzY5My4zIDg1MCA4NTAgNjkzLjMgODUwIDUwMEM4NTAgMzA2LjcgNjkzLjMgMTUwIDUwMCAxNTBDMzA2LjcgMTUwIDE1MCAzMDYuNyAxNTAgNTAwWk00MTAuNTU2IDM4Ny4yMjJDMzk3LjY2OSAzODcuMjIyIDM4Ny4yMjIgMzk3LjY2OSAzODcuMjIyIDQxMC41NTZWNTg5LjQ0NEMzODcuMjIyIDYwMi4zMzEgMzk3LjY2OSA2MTIuNzc4IDQxMC41NTYgNjEyLjc3OEg1ODkuNDQ0QzYwMi4zMzEgNjEyLjc3OCA2MTIuNzc4IDYwMi4zMzEgNjEyLjc3OCA1ODkuNDQ0VjQxMC41NTZDNjEyLjc3OCAzOTcuNjY5IDYwMi4zMzEgMzg3LjIyMiA1ODkuNDQ0IDM4Ny4yMjJINDEwLjU1NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==";
      default:
        return this.config.genericIcon || _r;
    }
  }
  static getWalletType() {
    return Ot.Injected;
  }
}
const gm = (e) => Object.keys(Tt.rpcs).includes(e), es = Object.entries(fa).map(
  ([e, t]) => {
    if (gm(e)) {
      const n = Tt.rpcs[e];
      if (n)
        return {
          ...t,
          rpcUrls: {
            ...t.rpcUrls,
            [e]: {
              http: [n]
            },
            default: {
              http: [n]
            },
            public: {
              http: [n]
            }
          }
        };
    }
    return t;
  }
), ym = {
  injected: new fm({
    chains: es
  }),
  ...Tt.walletConnectProjectId ? {
    walletConnect: new bm({
      chains: es,
      connectorOptions: {
        projectId: Tt.walletConnectProjectId
      }
    })
  } : {}
}, wm = async (e, t) => {
  const n = t;
  !n || !n.watchAsset || await n.watchAsset({
    type: "ERC20",
    options: e
  });
};
async function Mm(e, t) {
  await e.switchChain(t);
}
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  switchChain: Mm,
  wallets: ym,
  watchAsset: wm
}, Symbol.toStringTag, { value: "Module" }));
export {
  x as B,
  Ze as H,
  W as I,
  se as a,
  ee as b,
  Jt as c,
  Wi as d,
  mt as e,
  Am as f,
  Qt as g,
  L as i,
  H as s
};
