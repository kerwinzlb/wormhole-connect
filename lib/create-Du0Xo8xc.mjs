import { cW as f, cX as d, cY as y, cZ as A, cF as p, cT as x, c_ as h, c$ as F, d0 as L } from "./index-DV1w5RNX.mjs";
function a(o, r) {
  switch (o.binary) {
    case "bytes":
      if ("layout" in o) {
        const { custom: t } = o;
        return t === void 0 || typeof t.from != "function" ? e(o.layout, t ? t.from : r) : r;
      }
    case "int":
    case "uint": {
      const { custom: t } = o;
      return o != null && o.omit ? void 0 : d(t) ? t : y(t) ? t.to : r;
    }
    case "array":
      return Array.isArray(r) ? r.map((t) => e(o.layout, t)) : void 0;
    case "switch": {
      const t = r[o.idTag ?? "id"], [s, n] = o.layouts.find(([c]) => (Array.isArray(c) ? c[1] : c) == t);
      return {
        [o.idTag ?? "id"]: t,
        ...e(n, r)
      };
    }
  }
}
function e(o, r) {
  if (r = r ?? {}, f(o))
    return a(o, r);
  const t = {};
  for (const s of o) {
    const n = a(s, r[s.name] ?? {});
    n !== void 0 && (t[s.name] = n);
  }
  return t;
}
function i(o, r) {
  return e(o, r);
}
function u(o) {
  return [...h, F(o)];
}
function b(o, r) {
  const [t, s] = A(o), n = i(u(o), r);
  return {
    protocolName: t,
    payloadName: s,
    payloadLiteral: o,
    ...i(L, r),
    ...n,
    hash: p(x(u(o), n))
  };
}
export {
  b as c
};
