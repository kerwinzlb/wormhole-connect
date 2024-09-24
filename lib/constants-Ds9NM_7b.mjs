import { aq as i } from "./index-DV1w5RNX.mjs";
class l extends Error {
  constructor() {
    super("Not supported");
  }
}
class d extends Error {
  constructor() {
    super("Not connected");
  }
}
var t;
(function(s) {
  s.SignTransaction = "SignTransaction", s.SendTransaction = "SendTransaction", s.SignAndSendTransaction = "SignAndSendTransaction", s.SignMessage = "SignMessage";
})(t || (t = {}));
var o;
(function(s) {
  s.Installed = "Installed", s.NotDetected = "NotDetected", s.Loadable = "Loadable", s.Unsupported = "Unsupported";
})(o || (o = {}));
class p extends i {
  /**
   * Retrieve the wallet's current state
   *
   * The possible states are as those used by the {@link https://github.com/solana-labs/wallet-adapter solana} and {@link https://github.com/aptos-labs/aptos-wallet-adapter aptos} libraries, summarized as follows:
   *  * `Installed`: the wallet was detected through the global scope or any other mechanism and can be interacted with. Example: `window.ethereum` for Metamask or `window.phantom` for Phantom wallet)
   *  * `NotDetected`: as opposed to `Installed`, no point of interaction with the wallet was found, and thus it is not available. Users can be redirected to the project url offered by `getUrl`
   *  * `Loadable`: the wallet might not require installation, and thus can be interacted with after being loaded
   *  * `Unsupported`: the wallet is not supported by the environment
   *
   * @returns The wallet's state. Defaults to Installed.
   */
  getWalletState() {
    return o.Installed;
  }
  /**
   * Query whether a feature or set of features is supported by the wallet.
   * For a list of features see {@link BaseFeatures}.
   * Some chains might add additional features of their own.
   */
  supportsFeature(e) {
    const n = this.getFeatures();
    return Array.isArray(e) ? e.every((r) => n.includes(r)) : n.includes(e);
  }
}
const a = {
  unset: 0,
  solana: 1,
  ethereum: 2,
  terra: 3,
  bsc: 4,
  polygon: 5,
  avalanche: 6,
  oasis: 7,
  algorand: 8,
  aurora: 9,
  fantom: 10,
  karura: 11,
  acala: 12,
  klaytn: 13,
  celo: 14,
  near: 15,
  moonbeam: 16,
  neon: 17,
  terra2: 18,
  injective: 19,
  osmosis: 20,
  sui: 21,
  aptos: 22,
  arbitrum: 23,
  optimism: 24,
  gnosis: 25,
  pythnet: 26,
  xpla: 28,
  btc: 29,
  base: 30,
  sei: 32,
  rootstock: 33,
  //
  scroll: 34,
  mantle: 35,
  blast: 36,
  xlayer: 37,
  linea: 38,
  berachain: 39,
  seievm: 40,
  wormchain: 3104,
  cosmoshub: 4e3,
  evmos: 4001,
  kujira: 4002,
  neutron: 4003,
  celestia: 4004,
  stargaze: 4005,
  seda: 4006,
  dymension: 4007,
  provenance: 4008,
  sepolia: 10002,
  arbitrum_sepolia: 10003,
  base_sepolia: 10004,
  optimism_sepolia: 10005,
  holesky: 10006,
  polygon_sepolia: 10007
};
Object.entries(a).reduce(
  (s, [e, n]) => (s[n] = e, s),
  {}
  // eslint-disable-line
);
const u = a.solana, m = a.sui, g = a.aptos, S = a.sei;
export {
  t as B,
  u as C,
  d as N,
  p as W,
  o as a,
  m as b,
  l as c,
  g as d,
  S as e
};
