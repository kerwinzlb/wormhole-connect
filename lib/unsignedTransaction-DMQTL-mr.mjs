var o = Object.defineProperty;
var c = (e, a, t) => a in e ? o(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var s = (e, a, t) => (c(e, typeof a != "symbol" ? a + "" : a, t), t);
import { l, m, D as u, C as f, M as g } from "./cosmwasm-DHfd5lcQ.mjs";
import { bT as p, b3 as E } from "./index-DV1w5RNX.mjs";
function T(e, a) {
  let t = l.get(e, a);
  return t || (t = "0.1"), m.calculateFee(u * 1.5, `${t}${f.getNativeDenom(e, a)}`);
}
function h(e, a, t, r) {
  return {
    typeUrl: g,
    value: p.MsgExecuteContract.fromPartial({
      sender: e,
      contract: a,
      msg: E.encode(JSON.stringify(t)),
      funds: r
    })
  };
}
class F {
  constructor(a, t, r, i, n = !1) {
    s(this, "transaction");
    s(this, "network");
    s(this, "chain");
    s(this, "description");
    s(this, "parallelizable");
    this.transaction = a, this.network = t, this.chain = r, this.description = i, this.parallelizable = n;
  }
}
export {
  F as C,
  h as b,
  T as c
};
