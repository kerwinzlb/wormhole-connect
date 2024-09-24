import { g as nM, R as SM } from "./wallets-BrkMAo24.mjs";
import { a8 as CM } from "./index-DV1w5RNX.mjs";
import { W as zM, N as q, b as _, c as EM, B as Z } from "./constants-Ds9NM_7b.mjs";
class wM extends TypeError {
  constructor(i, t) {
    let A;
    const { message: I, explanation: e, ...c } = i, { path: g } = i, n = g.length === 0 ? I : `At path: ${g.join(".")} -- ${I}`;
    super(e ?? n), e != null && (this.cause = n), Object.assign(this, c), this.name = this.constructor.name, this.failures = () => A ?? (A = [i, ...t()]);
  }
}
function dM(M) {
  return E(M) && typeof M[Symbol.iterator] == "function";
}
function E(M) {
  return typeof M == "object" && M != null;
}
function w(M) {
  return typeof M == "symbol" ? M.toString() : typeof M == "string" ? JSON.stringify(M) : `${M}`;
}
function xM(M) {
  const { done: i, value: t } = M.next();
  return i ? void 0 : t;
}
function mM(M, i, t, A) {
  if (M === !0)
    return;
  M === !1 ? M = {} : typeof M == "string" && (M = { message: M });
  const { path: I, branch: e } = i, { type: c } = t, { refinement: g, message: n = `Expected a value of type \`${c}\`${g ? ` with refinement \`${g}\`` : ""}, but received: \`${w(A)}\`` } = M;
  return {
    value: A,
    type: c,
    refinement: g,
    key: I[I.length - 1],
    path: I,
    branch: e,
    ...M,
    message: n
  };
}
function* $(M, i, t, A) {
  dM(M) || (M = [M]);
  for (const I of M) {
    const e = mM(I, i, t, A);
    e && (yield e);
  }
}
function* V(M, i, t = {}) {
  const { path: A = [], branch: I = [M], coerce: e = !1, mask: c = !1 } = t, g = { path: A, branch: I };
  if (e && (M = i.coercer(M, g), c && i.type !== "type" && E(i.schema) && E(M) && !Array.isArray(M)))
    for (const s in M)
      i.schema[s] === void 0 && delete M[s];
  let n = "valid";
  for (const s of i.validator(M, g))
    s.explanation = t.message, n = "not_valid", yield [s, void 0];
  for (let [s, u, lM] of i.entries(M, g)) {
    const TM = V(u, lM, {
      path: s === void 0 ? A : [...A, s],
      branch: s === void 0 ? I : [...I, u],
      coerce: e,
      mask: c,
      message: t.message
    });
    for (const Y of TM)
      Y[0] ? (n = Y[0].refinement != null ? "not_refined" : "not_valid", yield [Y[0], void 0]) : e && (u = Y[1], s === void 0 ? M = u : M instanceof Map ? M.set(s, u) : M instanceof Set ? M.add(u) : E(M) && (u !== void 0 || s in M) && (M[s] = u));
  }
  if (n !== "not_valid")
    for (const s of i.refiner(M, g))
      s.explanation = t.message, n = "not_refined", yield [s, void 0];
  n === "valid" && (yield [void 0, M]);
}
class m {
  constructor(i) {
    const { type: t, schema: A, validator: I, refiner: e, coercer: c = (n) => n, entries: g = function* () {
    } } = i;
    this.type = t, this.schema = A, this.entries = g, this.coercer = c, I ? this.validator = (n, s) => {
      const u = I(n, s);
      return $(u, s, this, n);
    } : this.validator = () => [], e ? this.refiner = (n, s) => {
      const u = e(n, s);
      return $(u, s, this, n);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(i, t) {
    return pM(i, this, t);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(i, t) {
    return hM(i, this, t);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(i) {
    return QM(i, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(i, t) {
    return bM(i, this, t);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(i, t = {}) {
    return b(i, this, t);
  }
}
function pM(M, i, t) {
  const A = b(M, i, { message: t });
  if (A[0])
    throw A[0];
}
function hM(M, i, t) {
  const A = b(M, i, { coerce: !0, message: t });
  if (A[0])
    throw A[0];
  return A[1];
}
function bM(M, i, t) {
  const A = b(M, i, { coerce: !0, mask: !0, message: t });
  if (A[0])
    throw A[0];
  return A[1];
}
function QM(M, i) {
  return !b(M, i)[0];
}
function b(M, i, t = {}) {
  const A = V(M, i, t), I = xM(A);
  return I[0] ? [new wM(I[0], function* () {
    for (const c of A)
      c[0] && (yield c[0]);
  }), void 0] : [void 0, I[1]];
}
function H(M, i) {
  return new m({ type: M, schema: null, validator: i });
}
function MM(M) {
  return new m({
    type: "array",
    schema: M,
    *entries(i) {
      if (M && Array.isArray(i))
        for (const [t, A] of i.entries())
          yield [t, A, M];
    },
    coercer(i) {
      return Array.isArray(i) ? i.slice() : i;
    },
    validator(i) {
      return Array.isArray(i) || `Expected an array value, but received: ${w(i)}`;
    }
  });
}
function d() {
  return H("boolean", (M) => typeof M == "boolean");
}
function O(M) {
  const i = w(M), t = typeof M;
  return new m({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? M : null,
    validator(A) {
      return A === M || `Expected the literal \`${i}\`, but received: ${w(A)}`;
    }
  });
}
function YM() {
  return H("never", () => !1);
}
function p(M) {
  const i = M ? Object.keys(M) : [], t = YM();
  return new m({
    type: "object",
    schema: M || null,
    *entries(A) {
      if (M && E(A)) {
        const I = new Set(Object.keys(A));
        for (const e of i)
          I.delete(e), yield [e, A[e], M[e]];
        for (const e of I)
          yield [e, A[e], t];
      }
    },
    validator(A) {
      return E(A) || `Expected an object, but received: ${w(A)}`;
    },
    coercer(A) {
      return E(A) ? { ...A } : A;
    }
  });
}
function o(M) {
  return new m({
    ...M,
    validator: (i, t) => i === void 0 || M.validator(i, t),
    refiner: (i, t) => i === void 0 || M.refiner(i, t)
  });
}
function j() {
  return H("string", (M) => typeof M == "string" || `Expected a string, but received: ${w(M)}`);
}
function ZM(M) {
  const i = M.map((t) => t.type).join(" | ");
  return new m({
    type: "union",
    schema: null,
    coercer(t) {
      for (const A of M) {
        const [I, e] = A.validate(t, { coerce: !0 });
        if (!I)
          return e;
      }
      return t;
    },
    validator(t, A) {
      const I = [];
      for (const e of M) {
        const [...c] = V(t, e, A), [g] = c;
        if (g[0])
          for (const [n] of c)
            n && I.push(n);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${i}\`, but received: ${w(t)}`,
        ...I
      ];
    }
  });
}
function OM(M) {
  return Uint8Array.from(atob(M), (i) => i.charCodeAt(0));
}
const k = 8192;
function cM(M) {
  if (M.length < k)
    return btoa(String.fromCharCode(...M));
  let i = "";
  for (var t = 0; t < M.length; t += k) {
    const A = M.slice(t, t + k);
    i += String.fromCharCode(...A);
  }
  return btoa(i);
}
const GM = 32;
function kM(M, i = !1) {
  let t = M.toLowerCase();
  return !i && t.startsWith("0x") && (t = t.slice(2)), `0x${t.padStart(GM * 2, "0")}`;
}
function gM(M, i = !1) {
  return kM(M, i);
}
BigInt(1e9);
gM("0x6");
gM("0x5");
var fM = Object.defineProperty, BM = (M, i, t) => i in M ? fM(M, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : M[i] = t, D = (M, i, t) => (BM(M, typeof i != "symbol" ? i + "" : i, t), t), NM = (M, i, t) => {
  if (!i.has(M))
    throw TypeError("Cannot " + t);
}, r = (M, i, t) => (NM(M, i, "read from private field"), t ? t.call(M) : i.get(M)), y = (M, i, t) => {
  if (i.has(M))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(M) : i.set(M, t);
}, a = (M, i, t, A) => (NM(M, i, "write to private field"), i.set(M, t), t), F = p({
  address: j(),
  publicKey: j(),
  chains: MM(j()),
  features: MM(j()),
  label: o(j()),
  icon: o(j())
});
function X(M) {
  return {
    address: M.address,
    publicKey: cM(M.publicKey),
    features: [...M.features],
    chains: [...M.chains],
    label: M.label,
    icon: M.icon
  };
}
function UM(M) {
  return {
    address: M.address,
    publicKey: OM(M.publicKey),
    chains: M.chains.map((i) => i),
    features: M.features.map((i) => i),
    label: M.label,
    icon: M.icon
  };
}
p({
  message: j(),
  account: F
});
function WM(M) {
  return {
    message: cM(M.message),
    account: X(M.account)
  };
}
p({
  transactionBlock: j(),
  account: F,
  chain: j()
});
function PM(M) {
  return {
    transactionBlock: M.transactionBlock.serialize(),
    account: X(M.account),
    chain: M.chain
  };
}
var vM = p({
  showBalanceChanges: o(d()),
  showEffects: o(d()),
  showEvents: o(d()),
  showInput: o(d()),
  showObjectChanges: o(d()),
  showRawInput: o(d())
});
p({
  transactionBlock: j(),
  account: F,
  chain: j(),
  requestType: o(j()),
  options: o(vM)
});
function RM(M) {
  return {
    transactionBlock: M.transactionBlock.serialize(),
    account: X(M.account),
    chain: M.chain,
    requestType: M.requestType,
    options: M.options
  };
}
p({
  network: ZM([O("mainnet"), O("testnet"), O("devnet"), O("localnet")]),
  url: j()
});
const JM = "sui:devnet", VM = "sui:testnet", HM = "sui:localnet", FM = "sui:mainnet", XM = [
  JM,
  VM,
  HM,
  FM
];
var KM = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMTguNiAzMTguNiI+CiAgPHN0eWxlPgogICAgLnN0MSwuc3Q2e2ZpbGw6I2U0NzYxYjtzdHJva2U6I2U0NzYxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0NntmaWxsOiNmNjg1MWI7c3Ryb2tlOiNmNjg1MWJ9CiAgPC9zdHlsZT4KICA8cGF0aCBmaWxsPSIjZTI3NjFiIiBzdHJva2U9IiNlMjc2MWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTI3NC4xIDM1LjUtOTkuNSA3My45TDE5MyA2NS44eiIvPgogIDxwYXRoIGQ9Im00NC40IDM1LjUgOTguNyA3NC42LTE3LjUtNDQuM3ptMTkzLjkgMTcxLjMtMjYuNSA0MC42IDU2LjcgMTUuNiAxNi4zLTU1LjN6bS0yMDQuNC45TDUwLjEgMjYzbDU2LjctMTUuNi0yNi41LTQwLjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0ibTEwMy42IDEzOC4yLTE1LjggMjMuOSA1Ni4zIDIuNS0yLTYwLjV6bTExMS4zIDAtMzktMzQuOC0xLjMgNjEuMiA1Ni4yLTIuNXpNMTA2LjggMjQ3LjRsMzMuOC0xNi41LTI5LjItMjIuOHptNzEuMS0xNi41IDMzLjkgMTYuNS00LjctMzkuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTIxMS44IDI0Ny40LTMzLjktMTYuNSAyLjcgMjIuMS0uMyA5LjN6bS0xMDUgMCAzMS41IDE0LjktLjItOS4zIDIuNS0yMi4xeiIvPgogIDxwYXRoIGZpbGw9IiMyMzM0NDciIHN0cm9rZT0iIzIzMzQ0NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTM4LjggMTkzLjUtMjguMi04LjMgMTkuOS05LjF6bTQwLjkgMCA4LjMtMTcuNCAyMCA5LjF6Ii8+CiAgPHBhdGggZmlsbD0iI2NkNjExNiIgc3Ryb2tlPSIjY2Q2MTE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMDYuOCAyNDcuNCA0LjgtNDAuNi0zMS4zLjl6TTIwNyAyMDYuOGw0LjggNDAuNiAyNi41LTM5Ljd6bTIzLjgtNDQuNy01Ni4yIDIuNSA1LjIgMjguOSA4LjMtMTcuNCAyMCA5LjF6bS0xMjAuMiAyMy4xIDIwLTkuMSA4LjIgMTcuNCA1LjMtMjguOS01Ni4zLTIuNXoiLz4KICA8cGF0aCBmaWxsPSIjZTQ3NTFmIiBzdHJva2U9IiNlNDc1MWYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTg3LjggMTYyLjEgMjMuNiA0Ni0uOC0yMi45em0xMjAuMyAyMy4xLTEgMjIuOSAyMy43LTQ2em0tNjQtMjAuNi01LjMgMjguOSA2LjYgMzQuMSAxLjUtNDQuOXptMzAuNSAwLTIuNyAxOCAxLjIgNDUgNi43LTM0LjF6Ii8+CiAgPHBhdGggZD0ibTE3OS44IDE5My41LTYuNyAzNC4xIDQuOCAzLjMgMjkuMi0yMi44IDEtMjIuOXptLTY5LjItOC4zLjggMjIuOSAyOS4yIDIyLjggNC44LTMuMy02LjYtMzQuMXoiIGNsYXNzPSJzdDYiLz4KICA8cGF0aCBmaWxsPSIjYzBhZDllIiBzdHJva2U9IiNjMGFkOWUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTE4MC4zIDI2Mi4zLjMtOS4zLTIuNS0yLjJoLTM3LjdsLTIuMyAyLjIuMiA5LjMtMzEuNS0xNC45IDExIDkgMjIuMyAxNS41aDM4LjNsMjIuNC0xNS41IDExLTl6Ii8+CiAgPHBhdGggZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xNzcuOSAyMzAuOS00LjgtMy4zaC0yNy43bC00LjggMy4zLTIuNSAyMi4xIDIuMy0yLjJoMzcuN2wyLjUgMi4yeiIvPgogIDxwYXRoIGZpbGw9IiM3NjNkMTYiIHN0cm9rZT0iIzc2M2QxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMjc4LjMgMTE0LjIgOC41LTQwLjgtMTIuNy0zNy45LTk2LjIgNzEuNCAzNyAzMS4zIDUyLjMgMTUuMyAxMS42LTEzLjUtNS0zLjYgOC03LjMtNi4yLTQuOCA4LTYuMXpNMzEuOCA3My40bDguNSA0MC44LTUuNCA0IDggNi4xLTYuMSA0LjggOCA3LjMtNSAzLjYgMTEuNSAxMy41IDUyLjMtMTUuMyAzNy0zMS4zLTk2LjItNzEuNHoiLz4KICA8cGF0aCBkPSJtMjY3LjIgMTUzLjUtNTIuMy0xNS4zIDE1LjkgMjMuOS0yMy43IDQ2IDMxLjItLjRoNDYuNXptLTE2My42LTE1LjMtNTIuMyAxNS4zLTE3LjQgNTQuMmg0Ni40bDMxLjEuNC0yMy42LTQ2em03MSAyNi40IDMuMy01Ny43IDE1LjItNDEuMWgtNjcuNWwxNSA0MS4xIDMuNSA1Ny43IDEuMiAxOC4yLjEgNDQuOGgyNy43bC4yLTQ0Ljh6IiBjbGFzcz0ic3Q2Ii8+Cjwvc3ZnPg==", jM = class S extends Error {
  constructor(i) {
    super(`${S.type}: ${i}}`), D(this, "type", S.type);
  }
  static asSimpleError(i) {
    return new Error(`${S.type}: ${i}`);
  }
  static isSimpleErrorMessage(i) {
    return i.startsWith(S.type + ": ");
  }
  static fromSimpleErrorMessage(i) {
    return new S(i.slice(S.type.length + 2));
  }
};
D(jM, "type", "INVALID_REQUEST_PARAMS");
var iM = jM, uM = class h extends Error {
  constructor() {
    super(h.type), D(this, "type", h.type);
  }
  static asSimpleError() {
    return new Error(h.type);
  }
  static isSimpleErrorMessage(i) {
    return i === h.type;
  }
};
D(uM, "type", "USER_REJECTION");
var f = uM, aM = class C extends Error {
  constructor(i) {
    super(`${C.type}: ${i}`), D(this, "type", C.type);
  }
  static asSimpleError(i) {
    return new Error(`${C.type}: ${i}`);
  }
  static isSimpleErrorMessage(i) {
    return i.startsWith(C.type + ": ");
  }
  static fromSimpleErrorMessage(i) {
    return new C(i.slice(C.type.length + 2));
  }
};
D(aM, "type", "INVALID_REQUEST_METHOD");
var tM = aM, rM = class z extends Error {
  constructor(i) {
    let t = z.type;
    i && (t += ": " + i), super(t), D(this, "type", z.type);
  }
  static asSimpleError(i) {
    let t = z.type;
    return i && (t += ": " + i), new Error(t);
  }
  static isSimpleErrorMessage(i) {
    return i.startsWith(z.type);
  }
  static fromSimpleErrorMessage(i) {
    return new z(i.slice(z.type.length + 2));
  }
};
D(rM, "type", "DRY_RUN_FAILED");
var AM = rM, DM = class G extends Error {
  constructor() {
    super(G.type), D(this, "type", f.type);
  }
  static asSimpleError() {
    return new Error(G.type);
  }
  static isSimpleErrorMessage(i) {
    return i === G.type;
  }
};
D(DM, "type", "NON_ADMIN_ORIGIN");
var IM = DM;
function qM(M) {
  return typeof M == "object" && M !== null && "message" in M;
}
function K(M) {
  return qM(M) ? iM.isSimpleErrorMessage(M.message) ? iM.fromSimpleErrorMessage(M.message) : f.isSimpleErrorMessage(M.message) ? new f() : tM.isSimpleErrorMessage(M.message) ? tM.fromSimpleErrorMessage(M.message) : AM.isSimpleErrorMessage(M.message) ? AM.fromSimpleErrorMessage(M.message) : IM.isSimpleErrorMessage(M.message) ? new IM() : M : M;
}
var Q = "npm:@kunalabs-io/sui-metamask-snap", _M = "^1.0.0";
function $M() {
  const M = nM();
  for (const t of M.get())
    if (t.name === eM.NAME)
      return console.warn("SuiSnapWallet already registered"), t;
  const i = new eM();
  return M.register(i), i;
}
async function Mi(M) {
  return (await M.request({
    method: "wallet_invokeSnap",
    params: {
      snapId: Q,
      request: {
        method: "getAccounts"
      }
    }
  })).map((t) => new SM(UM(t)));
}
async function LM(M, i) {
  const t = WM(i);
  try {
    return await M.request({
      method: "wallet_invokeSnap",
      params: {
        snapId: Q,
        request: {
          method: "signPersonalMessage",
          params: JSON.parse(JSON.stringify(t))
        }
      }
    });
  } catch (A) {
    throw K(A);
  }
}
async function ii(M, i) {
  const t = await LM(M, i);
  return {
    messageBytes: t.bytes,
    signature: t.signature
  };
}
async function ti(M, i) {
  const t = PM(i);
  try {
    return await M.request({
      method: "wallet_invokeSnap",
      params: {
        snapId: Q,
        request: {
          method: "signTransactionBlock",
          params: JSON.parse(JSON.stringify(t))
        }
      }
    });
  } catch (A) {
    throw K(A);
  }
}
async function Ai(M, i) {
  const t = RM(i);
  try {
    return await M.request({
      method: "wallet_invokeSnap",
      params: {
        snapId: Q,
        request: {
          method: "signAndExecuteTransactionBlock",
          params: JSON.parse(JSON.stringify(t))
        }
      }
    });
  } catch (A) {
    throw K(A);
  }
}
async function Ii() {
  const M = window.ethereum;
  if (!M)
    return {
      available: !1,
      supportsSnaps: !1,
      suiSnapInstalled: !1
    };
  if (!M.isMetaMask)
    return {
      available: !1,
      suiSnapInstalled: !1,
      supportsSnaps: !1
    };
  try {
    const i = await M.request({ method: "web3_clientVersion" }), t = await M.request({ method: "wallet_getSnaps" }), A = !!t && "npm:@kunalabs-io/sui-metamask-snap" in t;
    return {
      available: !0,
      version: i,
      supportsSnaps: !0,
      suiSnapInstalled: A
    };
  } catch (i) {
    return console.warn(i), {
      available: !0,
      supportsSnaps: !1,
      suiSnapInstalled: !1
    };
  }
}
var l, T, x, B, U, W, P, v, R, oM = class yM {
  constructor() {
    y(this, l, void 0), y(this, T, void 0), y(this, x, null), y(this, B, async () => {
      if (r(this, l))
        throw new Error("Already connecting");
      a(this, l, !0), a(this, T, !1);
      try {
        const i = window.ethereum;
        if (!(await Ii()).available)
          throw new Error("MetaMask not detected!");
        return await i.request({
          method: "wallet_requestSnaps",
          params: {
            [Q]: {
              version: _M
            }
          }
        }), a(this, x, await Mi(i)), a(this, l, !1), a(this, T, !0), {
          accounts: this.accounts
        };
      } catch (i) {
        throw a(this, l, !1), a(this, T, !1), i;
      }
    }), y(this, U, async () => {
      a(this, l, !1), a(this, T, !1), a(this, x, null);
    }), y(this, W, async (i) => LM(window.ethereum, i)), y(this, P, async (i) => ii(window.ethereum, i)), y(this, v, async (i) => ti(window.ethereum, i)), y(this, R, async (i) => Ai(window.ethereum, i)), a(this, l, !1), a(this, T, !1);
  }
  get version() {
    return "1.0.0";
  }
  get name() {
    return yM.NAME;
  }
  get icon() {
    return KM;
  }
  get chains() {
    return XM;
  }
  get connecting() {
    return r(this, l);
  }
  get accounts() {
    return r(this, T) && r(this, x) ? r(this, x) : [];
  }
  get features() {
    return {
      "standard:connect": {
        version: "1.0.0",
        connect: r(this, B)
      },
      "standard:disconnect": {
        version: "1.0.0",
        disconnect: r(this, U)
      },
      "sui:signPersonalMessage": {
        version: "1.0.0",
        signPersonalMessage: r(this, W)
      },
      "sui:signMessage": {
        version: "1.0.0",
        signMessage: r(this, P)
      },
      "sui:signTransactionBlock": {
        version: "1.0.0",
        signTransactionBlock: r(this, v)
      },
      "sui:signAndExecuteTransactionBlock": {
        version: "1.0.0",
        signAndExecuteTransactionBlock: r(this, R)
      },
      "standard:events": {
        version: "1.0.0",
        on: () => () => {
        }
      }
    };
  }
};
l = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
D(oM, "NAME", "Sui MetaMask Snap");
var eM = oM, N;
(function(M) {
  M.SUI_WALLET = "Sui Wallet", M.SUIET_WALLET = "Suiet", M.ETHOS_WALLET = "Ethos Wallet", M.SURF_WALLET = "Surf Wallet", M.GLASS_WALLET = "GlassWallet", M.MORPHIS_WALLET = "Morphis Wallet", M.MARTIAN_WALLET = "Martian Sui Wallet", M.ONEKEY_WALLET = "OneKey Wallet", M.SPACECY_WALLET = "Spacecy Sui Wallet", M.NIGHTLY_WALLET = "Nightly Wallet", M.BITGET_WALLET = "Bitget Wallet", M.OKX_WALLET = "OKX Wallet", M.SUI_SNAP_WALLET = "Sui MetaMask Snap";
})(N || (N = {}));
const J = {
  [N.BITGET_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMDM1XzExMDYpIj4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiM1NEZGRjUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTEzLjQ4MDYgMTk4LjYwNUMtMjkuMzI3NiAzMTkuMDQzIDE5OS42NjEgMjg1LjAyNyAzMTkuNTA3IDI1Mi45NjRDNDQyLjE2NSAyMTIuMjU5IDM1Ny4zODYgMzIuODI2OSAyNjkuNDE1IDI4Ljg1NThDMTgxLjQ0MyAyNC44ODQ3IDI4MC4zMjIgMTExLjgyNCAyMDUuNTk1IDEzNi42NTZDMTMwLjg2OCAxNjEuNDg3IDY2Ljk5MDcgNDguMDU4MyAxMy40ODA2IDE5OC42MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMjAzNV8xMTA2KSI+CjxwYXRoIGQ9Ik04NS41MTE4IC00NS44MjI1QzYzLjA1NjIgLTEwNy4xNzYgLTE2LjkxODkgLTIzLjk5NTMgLTU0LjA5OTUgMjUuMjY0M0MtODkuNTY1MiA3OC44NDc5IDMuMDA5MzcgMTI1LjE1MiAzOS4zMjA4IDEwMC4wMzdDNzUuNjMyMyA3NC45MjI3IDcuNzc0NDggNzAuMDM2MyAyOS4zNzA4IDM3LjM3ODVDNTAuOTY3MSA0LjcyMDc2IDExMy41ODEgMzAuODY5NSA4NS41MTE4IC00NS44MjI1WiIgZmlsbD0iIzAwRkZGMCIgZmlsbC1vcGFjaXR5PSIwLjY3Ii8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8yMDM1XzExMDYpIj4KPHBhdGggZD0iTTk2LjQ3OTYgMjI1LjQyNEM2NS44NTAyIDEyMi4zNjMgLTY2LjA4MTggMTc2LjYzNyAtMTI4LjIxOSAyMTYuNjU3Qy0xODcuOTkgMjY0LjA0MiAtNDYuMDcxMSA0MDAuMzQ4IDEyLjg3MjUgMzkzLjM3NkM3MS44MTYxIDM4Ni40MDMgLTM0LjQxMTggMzI3LjA2NSAxLjk4NzAyIDI5OC4xN0MzOC4zODU4IDI2OS4yNzYgMTM0Ljc2NiAzNTQuMjQ5IDk2LjQ3OTYgMjI1LjQyNFoiIGZpbGw9IiM5RDgxRkYiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19mXzIwMzVfMTEwNikiPgo8cGF0aCBkPSJNMjgyLjEyIC0xMDcuMzUzQzIxNi4wNDcgLTE4Ni4wMzEgMTIxLjQ2MyAtMTIwLjk3IDgyLjQyOTYgLTc4LjYwNDdDNDguMjczOSAtMzAuNjQ0NiAyMjQuMjc1IDU3LjIzMTIgMjczLjEyMSA0Mi4xNzE0QzMyMS45NjggMjcuMTExNSAyMDYuNTEyIC00LjA1MDM4IDIyNy4yOTcgLTMzLjI4NzlDMjQ4LjA4MiAtNjIuNTI1NSAzNjQuNzEyIC05LjAwNTY2IDI4Mi4xMiAtMTA3LjM1M1oiIGZpbGw9IiM0RDk0RkYiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkzLjE4OSAxNTIuODM2SDEzNi42NzRMODcuMjA4NiAxMDMuMDUxTDEzNy4zMSA1My4yNjYzTDE1MC45NTUgNDBIMTA1LjgxOUw0OC4zMzU5IDk3Ljc3NzNDNDUuNDM0OSAxMDAuNjg5IDQ1LjQ0OTggMTA1LjQwMiA0OC4zNjU2IDEwOC4yOTlMOTMuMTg5IDE1Mi44MzZaTTExOS4zMyAxMDMuMTY4SDExOC45OTVMMTE5LjMyNiAxMDMuMTY0TDExOS4zMyAxMDMuMTY4Wk0xMTkuMzMgMTAzLjE2OEwxNjguNzkxIDE1Mi45NDlMMTE4LjY5IDIwMi43MzRMMTA1LjA0NSAyMTZIMTUwLjE4TDIwNy42NjQgMTU4LjIyNkMyMTAuNTY1IDE1NS4zMTQgMjEwLjU1IDE1MC42MDIgMjA3LjYzNCAxNDcuNzA1TDE2Mi44MTEgMTAzLjE2OEgxMTkuMzNaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMjAzNV8xMTA2IiB4PSItOTAuMjQxMSIgeT0iLTY5LjczNjkiIHdpZHRoPSI1NjkuNTU4IiBoZWlnaHQ9IjQ1MS40MzEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9mXzIwMzVfMTEwNiIgeD0iLTE2MC41MTEiIHk9Ii0xNjUuOTg3IiB3aWR0aD0iMzUxLjU5NiIgaGVpZ2h0PSIzNzEuNTA3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZl8yMDM1XzExMDYiIHg9Ii0yNDEuMDc4IiB5PSI2Ny42NDIiIHdpZHRoPSI0NDQuODUxIiBoZWlnaHQ9IjQyNC40NTIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDkuMjMwOCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzIwMzVfMTEwNiIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyM19mXzIwMzVfMTEwNiIgeD0iLTIwLjM5NjgiIHk9Ii0yNDIuNzU4IiB3aWR0aD0iNDMwLjE5MSIgaGVpZ2h0PSIzODUuMTA1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ5LjIzMDgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMDM1XzExMDYiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjAzNV8xMTA2Ij4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    url: "https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak"
  },
  [N.SUIET_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3KSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMTcwOF8yODI5NykiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yMi44IDIwYy0xLjQgMC0yLjctMS40LTMuMy0yLjMtLjcuOS0yIDIuMy0zLjQgMi4zcy0yLjctMS40LTMuNC0yLjNjLS42LjktMS45IDIuMy0zLjMgMi4zLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNWMxLjEgMCAyLjYtMS45IDIuOS0yLjVsLjUtLjJjLjIgMCAuMyAwIC40LjIuNC42IDEuOCAyLjUgMi45IDIuNSAxLjEgMCAyLjUtMS45IDIuOS0yLjVsLjQtLjJjLjIgMCAuNCAwIC41LjIuNC42IDEuOCAyLjUgMi45IDIuNS4yIDAgLjUuMi41LjVzLS4yLjUtLjUuNXoiLz48cGF0aCBkPSJNMjIuOCAyMy4zYy0xLjQgMC0yLjctMS4zLTMuMy0yLjMtLjcgMS0yIDIuMy0zLjQgMi4zUzEzLjQgMjIgMTIuNyAyMWMtLjYgMS0xLjkgMi4zLTMuMyAyLjMtLjMgMC0uNS0uMy0uNS0uNSAwLS4zLjItLjYuNS0uNiAxLjEgMCAyLjYtMS44IDIuOS0yLjRsLjUtLjIuNC4yYy40LjYgMS44IDIuNCAyLjkgMi40IDEuMSAwIDIuNS0xLjggMi45LTIuNGwuNC0uMi41LjJjLjQuNiAxLjggMi40IDIuOSAyLjQuMiAwIC41LjMuNS42IDAgLjItLjIuNS0uNS41ek05LjggMTYuN2MtLjMgMC0uNS0uMi0uNS0uNEw5LjEgMTVjMC0zLjkgMy4yLTcgNy03IDMuOSAwIDcgMy4xIDcgN2wtLjEgMS4yYzAgLjMtLjMuNS0uNi41LS40LS4xLS41LS4zLS40LS43di0xYzAtMy4zLTIuNi02LTUuOS02LTMuMiAwLTUuOSAyLjctNS45IDZsLjEgMWMuMS40LS4xLjctLjQuN2gtLjF6Ii8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8xNzA4XzI4Mjk3IiB4PSI0LjkiIHk9IjYiIHdpZHRoPSIyMi40MzciIGhlaWdodD0iMjMuMzE5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIyIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjE3NTY5NCAwIDAgMCAwIDAuNTc0MTQyIDAgMCAwIDAgMC45MTY2NjcgMCAwIDAgMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzE3MDhfMjgyOTciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTcwOF8yODI5NyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3IiB5MT0iNCIgeDI9IjI4Ljg4OSIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNFQTJGOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY3QzhGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
    url: "https://chrome.google.com/webstore/detail/suiet/khpkpbbcccdmmclmpigdgddabeilkdpd"
  },
  [N.SUI_WALLET]: {
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////////9/f39/f3+/v7x+Pz///95wfGj1PXI5fgEMJeQAAAAB3RSTlMAECNgmNr40ET05wAAAOBJREFUeNplUksOgjAQbYw38LdloQdw5VZJDGuNiWtXdGvUFjlAtT2AVC4AekrLvKKYvoTMm5fpfGGswWCdit2cfTFNZYO49YfSYwW/t2+FS0TCTH6x/Q/wISPZwcYJSVc4uxdg1wI2Yn0QbmCXbAKin7AHtiCbq6wicvI5syK/+azowlZSoxNGc4l7IWswhqKlagtD4Kl9CAWBAmspbGHwhJK+HDMlkiaIcJ9BWWqMu64yhcbGVMU5nKoc/XC2fGs/HMbPra78+MGCwhUGSw7OEB4qOKU7Nrki/p2/8zt8ABpiv63tyiOHAAAAAElFTkSuQmCC",
    url: "https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
  },
  [N.ETHOS_WALLET]: {
    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IGZpbGw9IiMxQTFDMjYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHJ4PSIyMDAiIHJ5PSIyMDAiLz4KICA8cGF0aCBkPSJNMzcwLjI1NyAzNDMuMjIxSDcyNS4xOUM3NTQuMDE5IDM0My4yMjEgNzc3LjM4OCAzNjYuOTM4IDc3Ny4zODggMzk2LjE5NFY4MDcuNzJDNzc3LjM4OCA4MzYuOTc4IDc1NC4wMTggODYwLjY5NCA3MjUuMTkgODYwLjY5NEgzNzAuMjU2QzM0MS40MjggODYwLjY5NCAzMTguMDU4IDgzNi45NzggMzE4LjA1OCA4MDcuNzJWMzk2LjE5NEMzMTguMDU4IDM2Ni45MzggMzQxLjQyOCAzNDMuMjIxIDM3MC4yNTcgMzQzLjIyMVoiIGZpbGw9IiNEN0I4RkYiLz4KICA8cGF0aCBkPSJNMzc3LjM3NiAzNDcuMjI3TDYyNy42NzQgNDY1LjQyM0M2NDIuNCA0NzIuMzc3IDY1MS44MTYgNDg3LjM2NCA2NTEuODE2IDUwMy44NDZWOTMwLjI5MkM2NTEuODE2IDk2MC45NTcgNjIwLjcxNiA5ODEuNDcxIDU5My4xMDIgOTY5LjAyTDM0Mi44MDQgODU2LjE2MUMzMjcuNzIxIDg0OS4zNjEgMzE4IDgzNC4xODMgMzE4IDgxNy40MzNWMzg1LjY1QzMxOCAzNTQuNjY1IDM0OS42OTUgMzM0LjE1NSAzNzcuMzc2IDM0Ny4yMjdaIiBmaWxsPSIjOUE0MkZGIi8+CiAgPHBhdGggZD0iTTg1NC45MTYgMTk2TDg2MC4xNDMgMjEwLjEyNUM4NzIuNDU1IDI0My40IDg5OC42OTEgMjY5LjYzNSA5MzEuOTY2IDI4MS45NDhMOTQ2LjA5MSAyODcuMTc1TDkzMS45NjYgMjkyLjQwMUM4OTguNjkxIDMwNC43MTQgODcyLjQ1NSAzMzAuOTUgODYwLjE0MyAzNjQuMjI1TDg1NC45MTYgMzc4LjM0OUw4NDkuNjg5IDM2NC4yMjVDODM3LjM3NiAzMzAuOTUgODExLjE0MSAzMDQuNzE0IDc3Ny44NjYgMjkyLjQwMUw3NjMuNzQxIDI4Ny4xNzVMNzc3Ljg2NiAyODEuOTQ4QzgxMS4xNDEgMjY5LjYzNSA4MzcuMzc2IDI0My40IDg0OS42ODkgMjEwLjEyNUw4NTQuOTE2IDE5NloiIGZpbGw9IiM5QTQyRkYiLz4KPC9zdmc+",
    url: "https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli"
  },
  [N.MARTIAN_WALLET]: {
    icon: "https://cdn.martianwallet.xyz/assets/icon.png",
    url: "https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk"
  },
  [N.SURF_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDcwIDQwMGMtMTEgOC0yMyAxNC0zNSAxNS00NyA0LTEwNi00Mi0xNDQtNDdzLTYwIDIxLTY5IDM2Yy01IDktNiAyMi02IDMzIDAgNCAwIDkgMiAxNSAyIDExIDMwIDU1IDk0IDQ5IDY5LTYgMTA5LTQzIDE1MC05Mmw2LTYgMi0zeiIgZmlsbD0iIzU4QzVGMyIvPjxwYXRoIGQ9Ik0yNTQgMzI3YzExLTYgMjItMTEgMzMtMTEgNDIgMCA5MiA0NiAxMjUgNTMgMzQgNyA1Ni0xNSA2NC0yNyA3LTEyIDgtMjMgOC0zMWwtMS0xMmMtMi03LTIyLTUwLTc5LTUwLTYzIDAtMTAyIDMwLTE0MiA3MGwtNSA1LTMgM3oiIGZpbGw9IiM5REUyRkYiLz48cGF0aCBkPSJNMzMgMjk2djJjMCA1OCA0NyAxMDMgMTA0IDEwMyAyNCAwIDQ1LTcgNjMtMjFsMS0xIDEtMSAxLTF2LTFsMTEtMTAgNDAtMzkgMy0yIDUtNmM0MC00MCA3OS03MCAxNDEtNzAgNTggMCA3NyA0MyA4MCA1MS01LTk5LTc1LTE4MS0xNjgtMjA2bC0zLTFjLTEwLTItMzYtMTItMzYtMjdWMThzMi0xMy0xMi00Yy0zNiAyNC02NyA3Ni05NSA5MS02OSAzMC0xMjAgOTAtMTM0IDE2NmwtMiAxOXY2eiIgZmlsbD0iIzU4QzVGMyIvPjxwYXRoIGQ9Ik0yNTUgMjcxbC00MyAzNi00NCAzOGMtNiA2LTE1IDQtMTgtN3MzLTUyIDM0LTcyIDYyLTIwIDc0LTEzYzkgNyA2IDExIDQgMTNsLTcgNXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
    url: "https://chrome.google.com/webstore/detail/surf-sui-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"
  },
  [N.GLASS_WALLET]: {
    icon: "data:image/png;base64,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",
    url: "https://chrome.google.com/webstore/detail/glass-wallet-sui-wallet/loinekcabhlmhjjbocijdoimmejangoa"
  },
  [N.MORPHIS_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xOS45NCA3LjRsLS4wMS0uMDhWNy4zYy0uMDEtLjAyLS4wMS0uMDQtLjAzLS4wNSAwLS4wMy0uMDItLjA1LS4wMy0uMDdsLS4wMS0uMDEtLjA2LS4wNS0uMDQtLjAyLTUuMDUtMy4wNWgtLjAxbC0uMDMtLjAxLS4wNC0uMDEtLjAzLS4wMi0uMDQtLjAxaC0uMDdsLS4wNC4wMS0uMDQuMDItLjAzLjAxLS4wNC4wMWgtLjAxTDkuMjkgNy4xIDQuMiAxMC4xM2wtLjA2LjAzLS4wMS4wMi0uMDUuMDUtLjAzLjA1LS4wMS4wMS0uMDMuMDYtLjAxLjA3djYuMTJjMCAuMTYuMDcuMjkuMi4zNmw1LjA1IDMuMDVjLjA1LjA0LjEzLjA1LjIuMDUuMDggMCAuMTQtLjAxLjIxLS4wNS4xMi0uMDguMi0uMjEuMi0uMzd2LTUuMzdsNC40NiAyLjY5Yy4wNi4wMy4xMy4wNC4yLjA0LjA4IDAgLjEzLS4wMS4yMS0uMDQuMTItLjA4LjItLjIyLjItLjM3di01LjM3bDQuNDYgMi42OGMuMDYuMDMuMTMuMDUuMjEuMDUuMDYgMCAuMTItLjAyLjItLjA1LjEyLS4wOC4yLS4yMi4yLS4zN1Y3LjM4Yy0uMDYuMDUtLjA2LjAyLS4wNi4wMnptLTEwLjUgNS42NEw1LjIgMTAuNDhsNC4yNC0yLjU3IDQuMjYgMi41Ny00LjI2IDIuNTZ6TTE0LjUgMTBsLTQuMjUtMi41NyA0LjI1LTIuNTYgNC4yNSAyLjU2TDE0LjUgMTB6bS01LjQ2IDguOUw0LjggMTYuMzNWMTEuMmw0LjI0IDIuNTZ2NS4xNHptMS4yMS01LjM3bDMuODUtMi4zM3Y0LjY1bC0zLjg1LTIuMzJ6bTUuMDUtMy4wM2wzLjg1LTIuMzR2NC42NGwtMy44NS0yLjN6IiBmaWxsPSIjMDAwIi8+PC9zdmc+",
    url: "https://chrome.google.com/webstore/detail/morphis-wallet/heefohaffomkkkphnlpohglngmbcclhi"
  },
  [N.ONEKEY_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NTkyMl84OCkiPgo8cGF0aCBkPSJNMTI3LjYxIDYzLjgwNDlDMTI3LjYxIDEwNy44NTMgMTA3Ljg1MyAxMjcuNjEgNjMuODA0OSAxMjcuNjFDMTkuNzU2OCAxMjcuNjEgMCAxMDcuODUzIDAgNjMuODA0OUMwIDE5Ljc1NjggMTkuNzU2OCAwIDYzLjgwNDkgMEMxMDcuODUzIDAgMTI3LjYxIDE5Ljc1NjggMTI3LjYxIDYzLjgwNDlaIiBmaWxsPSIjM0JEMjNEIi8+CjxwYXRoIGQ9Ik02OS41Njk5IDI3LjA1NTdMNTEuODE5NyAyNy4wNTU3TDQ4LjcwNTYgMzYuNDcxOUg1OC41NjQ1TDU4LjU2NDUgNTYuMzA2M0g2OS41Njk5VjI3LjA1NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjA0ODYgODAuMzExMUM4NC4wNDg2IDkxLjQ5MTIgNzQuOTg1NCAxMDAuNTU0IDYzLjgwNTMgMTAwLjU1NEM1Mi42MjUzIDEwMC41NTQgNDMuNTYyMSA5MS40OTEyIDQzLjU2MjEgODAuMzExMUM0My41NjIxIDY5LjEzMTEgNTIuNjI1MyA2MC4wNjc4IDYzLjgwNTMgNjAuMDY3OEM3NC45ODU0IDYwLjA2NzggODQuMDQ4NiA2OS4xMzExIDg0LjA0ODYgODAuMzExMVpNNzQuODU4NCA4MC4zMTExQzc0Ljg1ODQgODYuNDE1NSA2OS45MDk3IDkxLjM2NDEgNjMuODA1MyA5MS4zNjQxQzU3LjcwMDggOTEuMzY0MSA1Mi43NTIyIDg2LjQxNTUgNTIuNzUyMiA4MC4zMTExQzUyLjc1MjIgNzQuMjA2NiA1Ny43MDA4IDY5LjI1OCA2My44MDUzIDY5LjI1OEM2OS45MDk3IDY5LjI1OCA3NC44NTg0IDc0LjIwNjYgNzQuODU4NCA4MC4zMTExWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80NTkyMl84OCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    url: "https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj"
  },
  [N.SPACECY_WALLET]: {
    icon: "https://spacecywallet.com/favicon.ico",
    url: "https://chrome.google.com/webstore/detail/spacecy-wallet/mkchoaaiifodcflmbaphdgeidocajadp?hl=en-US"
  },
  [N.NIGHTLY_WALLET]: {
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjM5MDYyNSAxMDBDMC4zOTA2MjUgNDQuNzcxNSA0NS4xNjIyIDAgMTAwLjM5MSAwQzE1NS42MTkgMCAyMDAuMzkxIDQ0Ljc3MTUgMjAwLjM5MSAxMDBDMjAwLjM5MSAxNTUuMjI4IDE1NS42MTkgMjAwIDEwMC4zOTEgMjAwQzQ1LjE2MjIgMjAwIDAuMzkwNjI1IDE1NS4yMjggMC4zOTA2MjUgMTAwWiIgZmlsbD0iIzYwNjdGOSIvPgo8cGF0aCBkPSJNMTQ2LjgzOCA0MEMxMzguMDU0IDUyLjI2MDcgMTI3LjA2MSA2MC43NjM0IDExNC4wNzIgNjYuNDQ3NEMxMDkuNTYzIDY1LjIwMjYgMTA0LjkzNiA2NC41Njg0IDEwMC4zNzkgNjQuNjE1NEM5NS44MjIzIDY0LjU2ODQgOTEuMTk1MSA2NS4yMjYxIDg2LjY4NTUgNjYuNDQ3NEM3My42OTY2IDYwLjczOTkgNjIuNzA0MiA1Mi4yODQyIDUzLjkxOTggNDBDNTEuMjY1NiA0Ni42NzA2IDQxLjA0ODMgNjkuNjg4OCA1My4zMDkxIDEwMS44NjdDNTMuMzA5MSAxMDEuODY3IDQ5LjM4NjYgMTE4LjY2MSA1Ni41OTc0IDEzMy4wODNDNTYuNTk3NCAxMzMuMDgzIDY3LjAyNiAxMjguMzYyIDc1LjMxNzMgMTM1LjAwOUM4My45ODQzIDE0Mi4wMzIgODEuMjEyOCAxNDguNzk2IDg3LjMxOTYgMTU0LjYyMUM5Mi41ODA5IDE2MCAxMDAuNDAyIDE2MCAxMDAuNDAyIDE2MEMxMDAuNDAyIDE2MCAxMDguMjI0IDE2MCAxMTMuNDg1IDE1NC42NDVDMTE5LjU5MiAxNDguODQzIDExNi44NDQgMTQyLjA3OSAxMjUuNDg4IDEzNS4wMzJDMTMzLjc1NSAxMjguMzg1IDE0NC4yMDcgMTMzLjEwNiAxNDQuMjA3IDEzMy4xMDZDMTUxLjM5NSAxMTguNjg1IDE0Ny40OTYgMTAxLjg5MSAxNDcuNDk2IDEwMS44OTFDMTU5LjcxIDY5LjY4ODggMTQ5LjUxNiA0Ni42NzA2IDE0Ni44MzggNDBaTTU5LjgzODcgOTcuNDI4MUM1My4xNjgxIDgzLjczNDYgNTEuMzM2MSA2NC45NDQyIDU1LjU0MDQgNTAuMDk5OEM2MS4xMDcxIDY0LjE5MjYgNjguNjcwMiA3MC41MTA5IDc3LjY2NjEgNzcuMTgxNEM3My44NjEgODUuMDk2OSA2Ni42OTcyIDkyLjU2NjEgNTkuODM4NyA5Ny40MjgxWk03OS4wMjg0IDEyMS41NUM3My43NjcxIDExOS4yMjUgNzIuNjYzMSAxMTQuNjQ1IDcyLjY2MzEgMTE0LjY0NUM3OS44MjcgMTEwLjEzNSA5MC4zNzMxIDExMy41ODggOTAuNzAxOSAxMjQuMjUxQzg1LjE1ODcgMTIwLjg5MyA4My4zMDMyIDEyMy40MDYgNzkuMDI4NCAxMjEuNTVaTTEwMC4zNzkgMTU5LjQxM0M5Ni42MjA5IDE1OS40MTMgOTMuNTY3NCAxNTYuNzEyIDkzLjU2NzQgMTUzLjRDOTMuNTY3NCAxNTAuMDg4IDk2LjYyMDkgMTQ3LjM4NyAxMDAuMzc5IDE0Ny4zODdDMTA0LjEzNyAxNDcuMzg3IDEwNy4xOSAxNTAuMDg4IDEwNy4xOSAxNTMuNEMxMDcuMTkgMTU2LjczNSAxMDQuMTM3IDE1OS40MTMgMTAwLjM3OSAxNTkuNDEzWk0xMjEuNzUzIDEyMS41NUMxMTcuNDc4IDEyMy40MjkgMTE1LjY0NiAxMjAuODkzIDExMC4wNzkgMTI0LjI1MUMxMTAuNDMyIDExMy41ODggMTIwLjkzMSAxMTAuMTM1IDEyOC4xMTggMTE0LjY0NUMxMjguMTE4IDExNC42MjEgMTI2Ljk5MSAxMTkuMjI1IDEyMS43NTMgMTIxLjU1Wk0xNDAuOTE5IDk3LjQyODFDMTM0LjA4NCA5Mi41NjYxIDEyNi44OTcgODUuMTIwNCAxMjMuMDY4IDc3LjE4MTRDMTMyLjA2NCA3MC41MTA5IDEzOS42NTEgNjQuMTY5MSAxNDUuMTk0IDUwLjA5OThDMTQ5LjQ0NSA2NC45NDQyIDE0Ny42MTMgODMuNzU4MSAxNDAuOTE5IDk3LjQyODFaIiBmaWxsPSIjRjdGN0Y3Ii8+Cjwvc3ZnPgo=",
    url: "https://nightly.app"
  },
  [N.OKX_WALLET]: {
    icon: "data:image/png;base64,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",
    url: "https://okx.com/web3"
  },
  [N.SUI_SNAP_WALLET]: {
    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMTguNiAzMTguNiI+CiAgPHN0eWxlPgogICAgLnN0MSwuc3Q2e2ZpbGw6I2U0NzYxYjtzdHJva2U6I2U0NzYxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0NntmaWxsOiNmNjg1MWI7c3Ryb2tlOiNmNjg1MWJ9CiAgPC9zdHlsZT4KICA8cGF0aCBmaWxsPSIjZTI3NjFiIiBzdHJva2U9IiNlMjc2MWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTI3NC4xIDM1LjUtOTkuNSA3My45TDE5MyA2NS44eiIvPgogIDxwYXRoIGQ9Im00NC40IDM1LjUgOTguNyA3NC42LTE3LjUtNDQuM3ptMTkzLjkgMTcxLjMtMjYuNSA0MC42IDU2LjcgMTUuNiAxNi4zLTU1LjN6bS0yMDQuNC45TDUwLjEgMjYzbDU2LjctMTUuNi0yNi41LTQwLjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0ibTEwMy42IDEzOC4yLTE1LjggMjMuOSA1Ni4zIDIuNS0yLTYwLjV6bTExMS4zIDAtMzktMzQuOC0xLjMgNjEuMiA1Ni4yLTIuNXpNMTA2LjggMjQ3LjRsMzMuOC0xNi41LTI5LjItMjIuOHptNzEuMS0xNi41IDMzLjkgMTYuNS00LjctMzkuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTIxMS44IDI0Ny40LTMzLjktMTYuNSAyLjcgMjIuMS0uMyA5LjN6bS0xMDUgMCAzMS41IDE0LjktLjItOS4zIDIuNS0yMi4xeiIvPgogIDxwYXRoIGZpbGw9IiMyMzM0NDciIHN0cm9rZT0iIzIzMzQ0NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTM4LjggMTkzLjUtMjguMi04LjMgMTkuOS05LjF6bTQwLjkgMCA4LjMtMTcuNCAyMCA5LjF6Ii8+CiAgPHBhdGggZmlsbD0iI2NkNjExNiIgc3Ryb2tlPSIjY2Q2MTE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMDYuOCAyNDcuNCA0LjgtNDAuNi0zMS4zLjl6TTIwNyAyMDYuOGw0LjggNDAuNiAyNi41LTM5Ljd6bTIzLjgtNDQuNy01Ni4yIDIuNSA1LjIgMjguOSA4LjMtMTcuNCAyMCA5LjF6bS0xMjAuMiAyMy4xIDIwLTkuMSA4LjIgMTcuNCA1LjMtMjguOS01Ni4zLTIuNXoiLz4KICA8cGF0aCBmaWxsPSIjZTQ3NTFmIiBzdHJva2U9IiNlNDc1MWYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTg3LjggMTYyLjEgMjMuNiA0Ni0uOC0yMi45em0xMjAuMyAyMy4xLTEgMjIuOSAyMy43LTQ2em0tNjQtMjAuNi01LjMgMjguOSA2LjYgMzQuMSAxLjUtNDQuOXptMzAuNSAwLTIuNyAxOCAxLjIgNDUgNi43LTM0LjF6Ii8+CiAgPHBhdGggZD0ibTE3OS44IDE5My41LTYuNyAzNC4xIDQuOCAzLjMgMjkuMi0yMi44IDEtMjIuOXptLTY5LjItOC4zLjggMjIuOSAyOS4yIDIyLjggNC44LTMuMy02LjYtMzQuMXoiIGNsYXNzPSJzdDYiLz4KICA8cGF0aCBmaWxsPSIjYzBhZDllIiBzdHJva2U9IiNjMGFkOWUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTE4MC4zIDI2Mi4zLjMtOS4zLTIuNS0yLjJoLTM3LjdsLTIuMyAyLjIuMiA5LjMtMzEuNS0xNC45IDExIDkgMjIuMyAxNS41aDM4LjNsMjIuNC0xNS41IDExLTl6Ii8+CiAgPHBhdGggZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xNzcuOSAyMzAuOS00LjgtMy4zaC0yNy43bC00LjggMy4zLTIuNSAyMi4xIDIuMy0yLjJoMzcuN2wyLjUgMi4yeiIvPgogIDxwYXRoIGZpbGw9IiM3NjNkMTYiIHN0cm9rZT0iIzc2M2QxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMjc4LjMgMTE0LjIgOC41LTQwLjgtMTIuNy0zNy45LTk2LjIgNzEuNCAzNyAzMS4zIDUyLjMgMTUuMyAxMS42LTEzLjUtNS0zLjYgOC03LjMtNi4yLTQuOCA4LTYuMXpNMzEuOCA3My40bDguNSA0MC44LTUuNCA0IDggNi4xLTYuMSA0LjggOCA3LjMtNSAzLjYgMTEuNSAxMy41IDUyLjMtMTUuMyAzNy0zMS4zLTk2LjItNzEuNHoiLz4KICA8cGF0aCBkPSJtMjY3LjIgMTUzLjUtNTIuMy0xNS4zIDE1LjkgMjMuOS0yMy43IDQ2IDMxLjItLjRoNDYuNXptLTE2My42LTE1LjMtNTIuMyAxNS4zLTE3LjQgNTQuMmg0Ni40bDMxLjEuNC0yMy42LTQ2em03MSAyNi40IDMuMy01Ny43IDE1LjItNDEuMWgtNjcuNWwxNSA0MS4xIDMuNSA1Ny43IDEuMiAxOC4yLjEgNDQuOGgyNy43bC4yLTQ0Ljh6IiBjbGFzcz0ic3Q2Ii8+Cjwvc3ZnPg==",
    url: "https://suisnap.com"
  }
}, sM = {
  icon: J[N.SUI_WALLET].icon,
  url: "https://sui.io"
};
var L;
(function(M) {
  M.STANDARD__CONNECT = "standard:connect", M.STANDARD__DISCONNECT = "standard:disconnect", M.STANDARD__EVENTS = "standard:events", M.SUI__SIGN_AND_EXECUTE_TRANSACTION_BLOCK = "sui:signAndExecuteTransactionBlock", M.SUI__SIGN_TRANSACTION_BLOCK = "sui:signTransactionBlock", M.SUI__SIGN_MESSAGE = "sui:signMessage";
})(L || (L = {}));
const ei = ["OKX", "Bitget"];
class si extends zM {
  constructor(i, t) {
    super(), this.wallet = i, this.connection = t, this.accounts = [], ei.find((A) => i.name.includes(A)) ? this._name = i.name : this._name = i.name.replace("Wallet", "").trim();
  }
  async connect() {
    const { connect: i } = this.getFeature(L.STANDARD__CONNECT), { accounts: t } = await i();
    return this.accounts = [...t], this.activeAccount = t[0], this.emit("connect"), this.accounts.map((A) => A.address);
  }
  async disconnect() {
    const { disconnect: i } = this.getFeature(L.STANDARD__DISCONNECT, !1) || {};
    i && await i(), this.accounts = [], this.emit("disconnect");
  }
  signTransaction(i) {
    if (!this.activeAccount)
      throw new q();
    const { signTransactionBlock: t } = this.getFeature(L.SUI__SIGN_TRANSACTION_BLOCK);
    return t({
      transactionBlock: i,
      account: this.activeAccount,
      chain: this.activeAccount.chains[0]
    });
  }
  async sendTransaction(i) {
    if (!this.connection)
      throw new Error("Connection not provided");
    const A = await new CM(this.connection).executeTransactionBlock({
      signature: i.signature,
      transactionBlock: i.transactionBlockBytes
    });
    return {
      id: A.digest,
      data: A
    };
  }
  async signAndSendTransaction(i) {
    if (!this.activeAccount)
      throw new q();
    const { signAndExecuteTransactionBlock: t } = this.getFeature(L.SUI__SIGN_AND_EXECUTE_TRANSACTION_BLOCK), A = await t({
      ...i,
      account: this.activeAccount,
      chain: this.activeAccount.chains[0]
    });
    return {
      id: A.digest,
      data: A
    };
  }
  getName() {
    return this._name;
  }
  getUrl() {
    const i = J[this.wallet.name];
    return (i == null ? void 0 : i.url) || sM.url;
  }
  getChainId() {
    return _;
  }
  getAddress() {
    var i;
    return (i = this.activeAccount) == null ? void 0 : i.address;
  }
  getAddresses() {
    return this.accounts.map((i) => i.address);
  }
  setMainAddress(i) {
    const t = this.accounts.find((A) => A.address === i);
    if (!t)
      throw new Error("Account not found");
    this.activeAccount = t;
  }
  getBalance() {
    throw new Error("Method not implemented.");
  }
  signMessage(i) {
    const { signMessage: t } = this.getFeature(L.SUI__SIGN_MESSAGE);
    return t(i);
  }
  getIcon() {
    const i = J[this.wallet.name];
    return (i == null ? void 0 : i.icon) || sM.icon;
  }
  isConnected() {
    return this.accounts.length > 0;
  }
  getNetworkInfo() {
    return this.activeAccount ? { chain: this.activeAccount.chains[0] } : void 0;
  }
  getFeature(i, t = !0) {
    const A = this.wallet.features[i];
    if (!A && t)
      throw new EM();
    return A;
  }
  getFeatures() {
    const i = [Z.SendTransaction];
    return this.wallet.features[L.SUI__SIGN_TRANSACTION_BLOCK] && i.push(Z.SignTransaction), this.wallet.features[L.SUI__SIGN_AND_EXECUTE_TRANSACTION_BLOCK] && i.push(Z.SignAndSendTransaction), this.wallet.features[L.SUI__SIGN_MESSAGE] && i.push(Z.SignMessage), i;
  }
  supportsChain(i) {
    return i === _;
  }
}
const ni = 250, ci = (M) => {
  const { features: i } = M;
  return Object.entries(i).some(([t]) => t.startsWith("sui:"));
}, gi = async (M = {}) => {
  const { timeout: i = ni, connection: t } = M, A = nM(), I = [...A.get()];
  return new Promise((e) => {
    let c;
    const g = () => setTimeout(() => {
      c && c(), e(I.filter(ci).map((s) => new si(s, t)));
    }, i);
    let n = g();
    c = A.on("register", (s) => {
      I.push(s), clearTimeout(n), n = g();
    });
  });
};
$M();
async function ai() {
  return (await gi({ timeout: 0 })).reduce((i, t) => (i[t.getName()] = t, i), {});
}
const ri = async (M, i) => {
  if (!i || !i.signAndSendTransaction)
    throw new Error("wallet.signAndSendTransaction is undefined");
  return await i.signAndSendTransaction({
    transactionBlock: M
  });
};
export {
  ai as fetchOptions,
  ri as signAndSendTransaction
};
