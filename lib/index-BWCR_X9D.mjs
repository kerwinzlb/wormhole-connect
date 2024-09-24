import { P as e, T as f, A as c } from "./solana-Bbeh0ipO.mjs";
import { aG as d, aH as s, cJ as o, cH as A, aJ as O, cI as p } from "./index-DV1w5RNX.mjs";
class m extends Error {
  constructor(r) {
    super(r);
  }
}
class l extends m {
  constructor() {
    super(...arguments), this.name = "TokenOwnerOffCurveError";
  }
}
const y = d([
  s("mintAuthorityOption"),
  o("mintAuthority"),
  A("supply"),
  O("decimals"),
  p("isInitialized"),
  s("freezeAuthorityOption"),
  o("freezeAuthority")
]);
y.span;
async function h(t, r, a = !1, n = f, u = c) {
  if (!a && !e.isOnCurve(r.toBuffer()))
    throw new l();
  const [i] = await e.findProgramAddress([r.toBuffer(), n.toBuffer(), t.toBuffer()], u);
  return i;
}
export {
  c as ASSOCIATED_TOKEN_PROGRAM_ID,
  y as MintLayout,
  f as TOKEN_PROGRAM_ID,
  m as TokenError,
  l as TokenOwnerOffCurveError,
  h as getAssociatedTokenAddress
};
